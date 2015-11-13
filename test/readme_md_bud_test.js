/**
 * Test case for readmeMdBud.
 * Runs with nodeunit.
 */
"use strict";

const readmeMdBud = require('../lib/readme_md_bud.js'),
    path = require('path'),
    coz = require('coz'),
    assert = require('assert'),
    mkdirp = require('mkdirp');

describe('readme_md_bud', () => {


    let basedir = path.resolve(__dirname, '..'),
        tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');

    before((done)=> {
        mkdirp.sync(tmpDir);
        done();
    });

    it('Readme md bud', (done) => {
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
        });
        bud.path = tmpDir + '/README.md';
        coz.render(bud, {
            cwd: tmpDir
        }, (err) => {
            assert.ifError(err);
            done();
        });
    });

});
