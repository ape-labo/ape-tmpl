/**
 * Test case for licenseBud.
 * Runs with nodeunit.
 */
"use strict";

const licenseBud = require('../lib/license_bud.js'),
    path = require('path'),
    coz = require('coz'),
    assert = require('assert'),
    mkdirp = require('mkdirp');

describe('license_bud', () => {

    let basedir = path.resolve(__dirname, '..'),
        tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');

    before((done)=> {
        mkdirp.sync(tmpDir);
        done();
    });

    it('License bud', (done) => {
        const bud = licenseBud({
            type: 'MIT',
            holder: 'me'
        });
        bud.path = tmpDir + '/LICENSE';
        coz.render(bud, {
            cwd: tmpDir
        }, (err) => {
            assert.ifError(err);
            done();
        });
    });

});
