/**
 * Bud for mocha test.
 * @memberof module:ape-tmpl/lib
 * @function mochaTestJsBud
 * @param {object} config - Mocha testcase configuration.
 * @param {string|string[]} config.src - Source file name pattern.
 * @param {string} [config.dest] - Destination directory path.
 * @returns {object} - Bud for mocha testcase.
 */

"use strict";

const path = require('path'),
    assert = require('assert'),
    expandGlob = require('expandglob'),
    _tmpl = require('./_tmpl');

/** @lends mochaTestJsBud */
function mochaTestJsBud(config) {
    var src = config.src,
        dest = config.dest || process.cwd();
    assert.ok(!!src, 'config.src is required.');
    return expandGlob.sync(src)
        .filter((src) => {
            return path.basename(src) !== 'index.js';
        })
        .filter((src) => {
            return !/^[\._\-]/.test(path.basename(src));
        })
        .filter((src) => {
            try {
                return !!require.resolve(src);
            } catch (e) {
                return false;
            }
        })
        .map((src) => {
            var basename = path.basename(src, path.extname(src));
            return {
                force: false,
                mode: '644',
                mkdirp: false,
                tmpl: _tmpl('hbs/mocha_test.js.hbs'),
                path: path.resolve(dest, basename + '_test.js'),
                data: {
                    name: basename,
                    relative: path.relative(dest, src)
                }
            };
        });
}

module.exports = mochaTestJsBud;