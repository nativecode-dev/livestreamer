const debug = require('debug')('nativecode:livestreamer:config')
const defaults = require('./defaults.json')
const fs = require('fs')
const locations = require('common-locations')('livestreamer')
const merge = require('merge').recursive

module.exports = options => {
  const local = locations.config.local('livestreamer.json')

  if (fs.existsSync(local)) {
    const localconfig = require(local)
    return merge(true, defaults, options || {}, localconfig)
  }

  return merge(true, defaults, options || {})
}
