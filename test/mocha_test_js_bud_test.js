/**
 * Test case for mochaTestJsBud.
 * Runs with mocha.
 */
'use strict'

/* global describe, before, after, it */

const mochaTestJsBud = require('../lib/mocha_test_js_bud.js')
const assert = require('assert')
const path = require('path')
const co = require('co')
const coz = require('coz')
const mkdirp = require('mkdirp')

describe('mocha-test-js-bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/mocha_bud_test/pkg-foo')

  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {
  }))

  it('Mocha test js bud', () => co(function * () {
    let bud = mochaTestJsBud({
      src: [
        path.join(__dirname, '/*.js')
      ],
      dest: tmpDir
    })
    assert.ok(bud)
    yield coz.render(bud, {
      cwd: tmpDir
    })
  }))
})

