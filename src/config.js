const debug = require('debug')('nativecode:livestreamer:config')
const defaults = require('./defaults.json')
const fs = require('fs')
const locations = require('common-locations')('livestreamer')
const merge = require('merge').recursive

module.exports = options => {
  let config = merge(true, defaults, options || {})

  const local = locations.config.local('livestreamer.json')
  debug('local configuration -> %s', local)

  if (fs.existsSync(local)) {
    const localconfig = require(local)
    debug('merging -> %O', localconfig)
    config = merge(true, config, localconfig)
  }

  debug('options -> %O', config)
  return config
}
