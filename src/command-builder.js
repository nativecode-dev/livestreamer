const debug = require('debug')('nativecode:livestreamer:command-builder')
const mkdir = require('mkdirp')
const path = require('path')

class CommandBuilder {
  constructor(executable) {
    this.args = []
    this.executable = executable.includes(' ') ? `"${executable}"` : executable
    debug('executable -> %s', this.executable)
  }

  build(url, quality) {
    return [this.executable, this.args.join(' '), url, quality].join(' ')
  }

  option(name, value) {
    this.args.push(name)

    if (value) {
      const paramvalue = value.includes(' ') ? `"${value}"` : value
      this.args.push(paramvalue)
      debug('option -> [%s]=%s', name.replace('--', ''), paramvalue)
    } else {
      debug('option -> [%s]', name.replace('--', ''))
    }
  }
}

module.exports = CommandBuilder
