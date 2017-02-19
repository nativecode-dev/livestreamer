const config = require('./config')
const debug = require('debug')('nativecode:livestreamer')
const exec = require('child_process').execSync
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

const CommandBuilder = require('./command-builder')

class LiveStreamer {
  constructor(options) {
    this.options = config(options)
    this.qualities = this.options.stream.qualities

    if (fs.existsSync(this.options.stream.outdir) === false) {
      debug('making directory -> %s', this.options.stream.outdir)
      mkdirp(this.options.stream.outdir)
    }
  }

  filename() {
    return Date.now() + '.avi'
  }

  prepare() {
    const builder = new CommandBuilder(this.options.bin)

    builder.option('--loglevel', this.options.loglevel)
    builder.option('--output', this.filename())

    if (this.options.configuration) {
      builder.option('--config', this.options.configuration)
    }

    if (this.options.stream.excludes.length > 0) {
      builder.option('--stream-sorting-excludes', this.options.stream.excludes.join(','))
    }

    if (this.options.stream.overwrite) {
      builder.option('--force')
    }

    if (this.options.stream.type) {
      builder.option('--stream-types', this.options.stream.type)
    }

    return builder
  }
}

module.exports = LiveStreamer
