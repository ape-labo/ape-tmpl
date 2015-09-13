/**
 * Test case for binBud.
 * Runs with nodeunit.
 */

var binBud = require('../lib/bin_bud.js'),
    path = require('path'),
    fs = require('fs'),
    coz = require('coz'),
    mkdirp = require('mkdirp');

var basedir = path.resolve(__dirname, '..');
var tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');
exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Bin bud'] = function (test) {
    var bud = binBud({
        signature: require('../doc/mockups/mock-signature-01.json'),
    });
    var filename = tmpDir + '/testing-bin/foo-bin';
    bud.path = filename;
    coz.render(bud, {
        cwd: tmpDir
    }, function (err) {
        test.ifError(err);
        test.ok(fs.existsSync(filename));
        test.done();
    });
};

