/**
 * Test case for mochaTestJsBud.
 * Runs with mocha.
 */
'use strict'

/* global describe, before, after, it */

const mochaTestJsBud = require('../lib/mocha_test_js_bud.js')
const assert = require('assert')
const path = require('path')
const coz = require('coz')
const mkdirp = require('mkdirp')

describe('mocha-test-js-bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  after((done) => {
    done()
  })

  it('Mocha test js bud', (done) => {
    let bud = mochaTestJsBud({
      src: [
        path.join(__dirname, '/*.js')
      ],
      dest: tmpDir
    })
    coz.render(bud, {
      cwd: tmpDir
    }, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

