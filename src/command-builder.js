const debug = require('debug')('nativecode:livestreamer:command-builder')
const mkdir = require('mkdirp')
const path = require('path')

class CommandBuilder {
  constructor(executable) {
    this.args = []
    this.executable = executable
  }

  build(url, quality) {
    return [this.executable.includes(' ') ? `"${this.executable}"` : this.executable, this.args.join(' '), url, quality].join(' ')
  }

  option(name, value) {
    this.args.push(name)
    this.args.push(value.includes(' ') ? `"${value}"` : value)
    debug('option -> %s=%s', name, value)
  }
}

module.exports = CommandBuilder
