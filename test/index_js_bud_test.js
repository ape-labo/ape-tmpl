/**
 * Test case for indexJsBud.
 * Runs with mocha.
 */
"use strict";

const indexJsBud = require('../lib/index_js_bud.js'),
    assert = require('assert'),
    path = require('path'),
    coz = require('coz'),
    mkdirp = require('mkdirp');

describe('index-js-bud', () => {
    let basedir = path.resolve(__dirname, '..'),
        tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');

    before((done) => {
        mkdirp.sync(tmpDir);
        done();
    });

    after((done) => {
        done();
    });


    it('Index js bud', (done) => {
        var bud = indexJsBud({
            dirname: __dirname
        });
        bud.path = tmpDir + '/index.js';
        coz.render(bud, {
            cwd: tmpDir
        }, (err) => {
            assert.ifError(err);
            done();
        });
    });
});

