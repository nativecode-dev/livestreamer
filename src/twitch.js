const debug = require('debug')('nativecode:livestreamer')
const exec = require('child_process').exec
const path = require('path')

const LiveStreamer = require('./livestreamer')

class TwitchStreamer extends LiveStreamer {
  constructor(channel, options) {
    super(options || {})
    this.channel = channel
    this.settings = this.options.plugins.twitch
  }

  filename() {
    return path.join(this.options.stream.outdir, `${this.channel}-${super.filename()}`)
  }

  stream(quality) {
    return new Promise((resolve, reject) => {
      const builder = this.prepare()

      if (this.settings.token) {
        builder.option('--twitch-oauth-token', this.settings.token)
      }

      const command = builder.build(`twitch.tv/${this.channel}`, quality)
      debug('trying -> %s', command)
      const process = exec(command)
      process.on('error', () => reject())
      process.on('close', () => resolve())
    })
  }
}

module.exports = TwitchStreamer
