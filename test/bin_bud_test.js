/**
 * Test case for binBud.
 * Runs with nodeunit.
 */
"use strict";

const binBud = require('../lib/bin_bud.js'),
    path = require('path'),
    fs = require('fs'),
    coz = require('coz'),
    assert = require('assert'),
    mkdirp = require('mkdirp');

describe('bin-bud', () => {
    let basedir = path.resolve(__dirname, '..'),
        tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');

    before((done)=> {
        mkdirp.sync(tmpDir);
        done();
    });
    after((done)=>{
        done();
    });

    it('Bin bud', (done)=>{
        var bud = binBud({
            signature: require('../doc/mockups/mock-signature-01.json'),
        });
        var filename = tmpDir + '/testing-bin/foo-bin';
        bud.path = filename;
        coz.render(bud, {
            cwd: tmpDir
        }, (err) => {
            assert.ifError(err);
            assert.ok(fs.existsSync(filename));
            done();
        });
    });
});

