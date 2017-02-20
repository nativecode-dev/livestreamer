const debug = require('debug')('nativecode:livestreamer')
const defaults = require('./conf/defaults')
const exec = require('child_process').exec
const fs = require('fs')
const merge = require('merge').recursive
const mkdirp = require('mkdirp')

const CommandBuilder = require('./command-builder')

class LiveStreamer {
  constructor(options) {
    this.options = merge(true, defaults, options || {})
    this.qualities = this.options.stream.qualities

    if (fs.existsSync(this.options.stream.outdir) === false) {
      debug('making directory -> %s', this.options.stream.outdir)
      mkdirp(this.options.stream.outdir)
    }
  }

  builder() {
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

  filename() {
    return Date.now() + this.options.extension
  }

  start(quality) {
    const command = this.command(this.builder(), quality)

    return new Promise((resovle, reject) => {
      debug('trying -> %s', command)
      try {
        const process = exec(command)
        process.stdout.on('data', () => debug(data.toString()))
        process.on('error', () => reject())
        process.on('close', (code, signal) => {
          if (code === 0) {
            resolve()
          } else {
            reject(signal)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}

module.exports = LiveStreamer
