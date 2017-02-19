/*
const args = require('process').argv
const TwitchStreamer = require('./twitch')

if (args[2]) {
  new TwitchStreamer(args[2]).start('best')
}
*/
module.exports = {
  TwitchStreamer: require('./twitch')
}
