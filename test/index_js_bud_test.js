/**
 * Test case for indexJsBud.
 * Runs with mocha.
 */
'use strict'

/* global describe, before, after, it */

const indexJsBud = require('../lib/index_js_bud.js')
const assert = require('assert')
const path = require('path')

const coz = require('coz')
const mkdirp = require('mkdirp')

describe('index-js-bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before(async () => {
    mkdirp.sync(tmpDir)
  })

  after(async () => {
  })

  it('Index js bud', async () => {
    let bud = indexJsBud({
      dirname: __dirname
    })
    assert.ok(bud)
    bud.path = tmpDir + '/index.js'
    await coz.render(bud, {
      cwd: tmpDir
    })
  })
})

