/**
 * Test case for readmeMdBud.
 * Runs with nodeunit.
 */
'use strict'

/* global describe, before, after, it */

const readmeMdBud = require('../lib/readme_md_bud.js')
const path = require('path')
const co = require('co')
const coz = require('coz')
const assert = require('assert')
const mkdirp = require('mkdirp')

describe('readme_md_bud', () => {
  let basedir = path.resolve(__dirname, '..')
  let tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo')

  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  it('Readme md bud', () => co(function * () {
    let bud = readmeMdBud({
      pkg: {
        name: 'foo',
        description: 'This is foo desc.',
        license: 'MIT'
      },
      badges: {
        travis: true,
        bower: true
      },
      links: {
        foo: 'http://foo/bar/baz'
      },
      repo: 'foo/bar',
      sections: path.join(basedir, 'doc/mockups/mock-*.md')
    })
    bud.path = tmpDir + '/README.md'
    assert.ok(bud)
    yield coz.render(bud, {
      cwd: tmpDir
    })
  }))
})
