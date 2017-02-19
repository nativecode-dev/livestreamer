const process = require('process')

const TwitchStreamer = require('./twitch')

if (process.argv[2]) {
  switch (process.argv[2]) {
    case 'twitch':
      const twitch = new TwitchStreamer(process.argv[3])
      twitch.stream()
      break;
  }
} else {
  module.exports = LiveStreamer
}
