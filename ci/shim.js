#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const {runTasks} = require('ape-tasking')
const aglob = require('aglob')
const filecopy = require('filecopy')
const ababel = require('ababel')

runTasks('shim', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/node'
  }),
  async () => {
    for (let filename of await aglob('asset/hbs/*.hbs')) {
      await filecopy(filename, `shim/${filename}`, {
        mkdirp: true
      })
    }
  }
], true)
