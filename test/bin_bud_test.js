/**
 * Test case for binBud.
 * Runs with nodeunit.
 */
'use strict'

/* global describe, before, after, it */

const binBud = require('../lib/bin_bud.js')
const path = require('path')
const fs = require('fs')
const co = require('co')
const coz = require('coz')
const assert = require('assert')
const mkdirp = require('mkdirp')

describe('bin-bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))
  after(() => co(function * () {
  }))

  it('Bin bud', () => co(function * () {
    let bud = binBud({
      signature: require('../doc/mockups/mock-signature-01.json')
    })
    let filename = tmpDir + '/testing-bin/foo-bin'
    bud.path = filename
    yield coz.render(bud, {
      cwd: tmpDir
    })
    assert.ok(fs.existsSync(filename))
  }))
})

