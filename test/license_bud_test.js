/**
 * Test case for licenseBud.
 * Runs with nodeunit.
 */
'use strict'

/* global describe, before, after, it */

const licenseBud = require('../lib/license_bud.js')
const path = require('path')
const coz = require('coz')
const co = require('co')
const assert = require('assert')
const mkdirp = require('mkdirp')

describe('license_bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  it('License bud', () => co(function * () {
    const bud = licenseBud({
      type: 'MIT',
      holder: 'me'
    })
    assert.ok(bud)
    bud.path = tmpDir + '/LICENSE'
    yield coz.render(bud, {
      cwd: tmpDir
    })
  }))
})
