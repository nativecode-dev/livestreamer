const config = require('./config')
const debug = require('debug')('nativecode:livestreamer')
const exec = require('child_process').execSync
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

class LiveStreamer {
  constructor(options) {
    this.options = config(options).livestreamer
    this.qualities = this.options.stream.qualities

    if (fs.existsSync(this.options.stream.outdir) === false) {
      mkdirp(this.options.stream.outdir)
    }
  }

  filename() {
    return Date.now() + '.avi'
  }
}

module.exports = LiveStreamer
