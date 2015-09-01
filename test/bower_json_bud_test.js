/**
 * Test case for bowerJsonBud.
 * Runs with nodeunit.
 */

var bowerJsonBud = require('../lib/bower_json_bud.js'),
    path = require('path'),
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

exports['Bower json bud'] = function (test) {


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
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

