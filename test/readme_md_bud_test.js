/**
 * Test case for readmeMdBud.
 * Runs with nodeunit.
 */

var readmeMdBud = require('../lib/readme_md_bud.js'),
    path = require('path'),
    coz = require('coz'),
    mkdirp = require('mkdirp');

var basedir = path.resolve(__dirname, '..');

exports['Readme md bud'] = function (test) {
    var tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');
    mkdirp.sync(tmpDir);
    var bud = readmeMdBud({
        pkg:{
            name:'foo',
            description:'This is foo desc.',
            license:'MIT'
        },
        badges:{
            travis:true
        },
        links:{
            foo:'http://foo/bar/baz'
        },
        repo:'foo/bar',
        sections: path.join(basedir, 'docs/mockups/mock-*.md')
    });
    bud.path = tmpDir + '/README.md';
    coz.render(bud, {
        cwd: tmpDir
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

