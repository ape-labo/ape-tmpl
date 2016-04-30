/**
 * Test case for indexJsBud.
 * Runs with mocha.
 */
'use strict'

/* global describe, before, after, it */

const indexJsBud = require('../lib/index_js_bud.js')
const assert = require('assert')
const path = require('path')
const co = require('co')
const coz = require('coz')
const mkdirp = require('mkdirp')

describe('index-js-bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {
  }))

  it('Index js bud', () => co(function * () {
    let bud = indexJsBud({
      dirname: __dirname
    })
    assert.ok(bud)
    bud.path = tmpDir + '/index.js'
    yield coz.render(bud, {
      cwd: tmpDir
    })
  }))
})

