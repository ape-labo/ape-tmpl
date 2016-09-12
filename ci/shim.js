#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const aglob = require('aglob')
const co = require('co')
const filecopy = require('filecopy')
const ababelES2015 = require('ababel-es2015')

runTasks('shim', [
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'shim/node'
  }),
  () => co(function * () {
    for (let filename of yield aglob('asset/hbs/*.hbs')) {
      yield filecopy(filename, `shim/${filename}`, {
        mkdirp: true
      })
    }
  })
], true)
