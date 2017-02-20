const expect = require('chai').expect
const mocha = require('mocha')

const CommandBuilder = require('../lib/command-builder')

describe('when using the CommandBuilder class', () => {
  const executable = 'livestreamer'

  it('should add options', () => {
    const builder = new CommandBuilder(executable)
    builder.option('--output', 'filename.ext')
    expect(builder.args).to.eql(['--output', 'filename.ext'])
  })

  it('should build command', () => {
    const builder = new CommandBuilder(executable)
    builder.option('--output', 'filename.ext')
    expect(builder.build('twitch.tv/test', 'source')).to.be.equal('livestreamer --output filename.ext twitch.tv/test source')
  })
})
