/**
 * Test case for mochaTestJsBud.
 * Runs with mocha.
 */
"use strict";

const mochaTestJsBud = require('../lib/mocha_test_js_bud.js'),
    assert = require('assert'),
    path = require('path'),
    coz = require('coz'),
    mkdirp = require('mkdirp');

describe('mocha-test-js-bud', () => {

    let basedir = path.resolve(__dirname, '..'),
        tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');

    before((done) => {
        mkdirp.sync(tmpDir);
        done();
    });

    after((done) => {
        done();
    });


    it('Mocha test js bud', (done) => {
        var bud = mochaTestJsBud({
            src: [
                __dirname + '/*.js'
            ],
            dest: tmpDir
        });
        coz.render(bud, {
            cwd: tmpDir
        }, (err) => {
            assert.ifError(err);
            done();
        });
    });
});

