const builder = require('./options-builder')
const child = require('child_process')
const debug = require('debug')('nativecode:livestreamer')
const process = require('process')
const stream = require('memory-streams')
const util = require('util')

const tryquality = (livestreamer, quality) => {
  try {
    const cmd = builder(livestreamer.url, quality, livestreamer.options.livestreamer)
    debug('trying -> %s', cmd)
    child.execSync(cmd)
      .on('close', (code, signal) => debug('closed -> %s (%s)', code, signal))
      .on('error', (error) => {
        debug(error)
        throw error
      })
  } catch (e) {
    debug(e)
    return false
  }
  return true
}

class LiveStreamer {
  constructor(url, options) {
    this.options = require('./config')(options)
    this.qualities = this.options.livestreamer.stream.qualities
    this.url = url
    debug('created LiveStreamer instance for %s -> %O.', this.url, this.options)
  }

  stream() {
    debug('streaming -> %s', this.url)
    this.qualities.some(quality => tryquality(this, quality))
  }
}

if (process.argv[2]) {
  new LiveStreamer(process.argv[2]).stream()
} else {
  module.exports = LiveStreamer
}
