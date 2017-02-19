const debug = require('debug')('nativecode:livestreamer')
const exec = require('child_process').execSync
const path = require('path')

const LiveStreamer = require('./livestreamer')
const CommandBuilder = require('./command-builder')

class TwitchStreamer extends LiveStreamer {
  constructor(channel, options) {
    super(options || {})
    this.channel = channel
    this.settings = this.options.plugins.twitch
  }

  filename() {
    return path.join(this.options.stream.outdir, `${this.channel}-${super.filename()}`)
  }

  stream() {
    const builder = new CommandBuilder(this.options.bin)

    builder.option('--output', this.filename())

    if (this.settings.token) {
      builder.option('--twitch-oauth-token', this.settings.token)
    }

    this.qualities.some(quality => {
      try {
        const command = builder.build(`twitch.tv/${this.channel}`, quality)
        debug('trying -> %s', command)
        exec(command)
        return true
      } catch (e) {
        return false
      }
    })
  }
}

module.exports = TwitchStreamer
