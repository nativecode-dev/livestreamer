const mkdir = require('mkdirp')
const path = require('path')

module.exports = (url, quality, options) => {
  let args = []

  args.push('--output')
  mkdir.sync(options.stream.outdir)
  args.push(path.join(options.stream.outdir, Date.now() + '.avi'))

  if (url.toLowerCase().includes('twitch.tv')) {
    const twitch = options.plugins.options.twitch
    if (twitch.token) {
      args.push('--twitch-oauth-token')
      args.push(twitch.token)
    }
  }

  return [`"${options.bin}"`, args.join(' '), url, quality || 'best'].join(' ')
}
