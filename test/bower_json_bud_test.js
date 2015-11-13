/**
 * Test case for bowerJsonBud.
 * Runs with nodeunit.
 */
"use strict";

const bowerJsonBud = require('../lib/bower_json_bud.js'),
    assert = require('assert'),
    path = require('path'),
    coz = require('coz'),
    mkdirp = require('mkdirp');

describe('bower_json', () => {
    let basedir = path.resolve(__dirname, '..'),
        tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');

    before((done)=> {
        mkdirp.sync(tmpDir);
        done();
    });

    it('Bower json bud', (done) => {
        var bud = bowerJsonBud({
            pkg: {
                name: 'foo',
                description: 'This is foo desc.',
                license: 'MIT'
            }
        });
        bud.path = tmpDir + '/bower.json';
        coz.render(bud, {
            cwd: tmpDir
        }, (err) => {
            assert.ifError(err);
            done();
        });
    });

});
