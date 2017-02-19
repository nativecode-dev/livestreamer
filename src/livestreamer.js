const config = require('./config')
const debug = require('debug')('nativecode:livestreamer')
const exec = require('child_process').execSync
const path = require('path')

class LiveStreamer {
  constructor(options) {
    this.options = config(options).livestreamer
    this.qualities = this.options.stream.qualities
  }

  filename() {
    return Date.now() + '.avi'
  }
}

module.exports = LiveStreamer
