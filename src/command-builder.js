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
    this.args.push(value)
  }
}

module.exports = CommandBuilder
