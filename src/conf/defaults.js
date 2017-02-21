const os = require('os')

const executable = os.platform() === 'win32' ?
  'C:\Program Files (x86)\Livestreamer\livestreamer.exe' :
  '/usr/bin/livestreamer'

module.exports = {
  asroot: false,
  bin: executable,
  configuration: null,
  extension: '.mp4',
  loglevel: 'warning',
  plugins: {
    crunchyroll: {
      password: null,
      username: null
    },
    livestation: {
      email: null,
      password: null
    },
    twitch: {
      cookie: null,
      token: null
    },
    ustream: {
      paassword: null
    }
  },
  stream: {
    excludes: [],
    outdir: os.tmpdir(),
    overwrite: true,
    qualities: [
      'source',
      'best',
      '1080p60',
      '1080p30',
      '1080p',
      '720p60',
      '720p30',
      '720p'
    ],
    types: null
  }
}
