/**
 * Test case for binBud.
 * Runs with nodeunit.
 */
'use strict'

/* global describe, before, after, it */

const binBud = require('../lib/bin_bud.js')
const path = require('path')
const fs = require('fs')
const coz = require('coz')
const assert = require('assert')
const mkdirp = require('mkdirp')

describe('bin-bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })
  after((done) => {
    done()
  })

  it('Bin bud', (done) => {
    let bud = binBud({
      signature: require('../doc/mockups/mock-signature-01.json')
    })
    let filename = tmpDir + '/testing-bin/foo-bin'
    bud.path = filename
    coz.render(bud, {
      cwd: tmpDir
    }, (err) => {
      assert.ifError(err)
      assert.ok(fs.existsSync(filename))
      done()
    })
  })
})

