const path = require('path')

const LiveStreamer = require('./livestreamer')

class TwitchStreamer extends LiveStreamer {
  constructor(channel, options) {
    super(options)
    this.channel = channel
    this.settings = this.options.plugins.twitch
  }

  command(builder, quality) {
    if (this.settings.token) {
      builder.option('--twitch-oauth-token', this.settings.token)
    }

    return builder.build(`twitch.tv/${this.channel}`, quality)
  }

  filename() {
    return path.join(this.options.stream.outdir, `${this.channel}-${super.filename()}`)
  }
}

module.exports = TwitchStreamer
