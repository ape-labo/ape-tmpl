/**
 * Define bud for bower.json
 * @memberof module:ape-tmpl/lib
 * @function bowerJsonBud
 * @param {object} config - Configuration
 * @param {object} config.pkg - Package data.
 * @returns {object} - Bud object.
 */

"use strict";

const extend = require('extend'),
    stringcase = require('stringcase'),
    assert = require('assert'),
    util = require('util');

/** @lends bowerJsonBud */
function bowerJsonBud(config) {
    assert.ok(config.pkg, "config.pkg is required.");
    let pkg = config.pkg,
        vars = config.vars || {};
    let author = pkg.author;
    return {
        force: true,
        mode: '444',
        data: extend(vars, {
            "name": pkg.name,
            "description": pkg.description,
            "version": pkg.version,
            "homepage": pkg.homepage,
            "authors": [].concat(
                (author && author.name) || author || []
            ),
            "main": util.format('browser/%s.js', stringcase.spinalcase(pkg.name)),
            "license": pkg.license,
            "ignore": [
                "**/.*",
                "node_modules",
                "bower_components",
                "test",
                "tests"
            ]
        }),
        tmpl: function (data) {
            return JSON.stringify(data, null, 2);
        }
    }
}

module.exports = bowerJsonBud;
