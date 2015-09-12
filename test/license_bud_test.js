/**
 * Test case for licenseBud.
 * Runs with nodeunit.
 */

var licenseBud = require('../lib/license_bud.js'),
    path = require('path'),
    coz = require('coz'),
    mkdirp = require('mkdirp');

var basedir = path.resolve(__dirname, '..');
var tmpDir = path.resolve(basedir, 'tmp/readme_md_bud_test/pkg-foo');
exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports['License bud'] = function (test) {
    var bud = licenseBud({
        type: 'MIT',
        holder: 'me'
    });
    bud.path = tmpDir + '/LICENSE';
    coz.render(bud, {
        cwd: tmpDir
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

