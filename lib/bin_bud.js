/**
 * Define a bud for bin.
 * @memberof module:ape-tmpl/lib
 * @function binBud
 * @param {object} config - Configuration
 * @param {object} signature - Bin signature.
 * @returns {object} - Bud object.
 */

"use strict";

var assert = require('assert'),
    _tmpl = require('./_tmpl');

function binBud(config) {
    var signature = config.signature;
    assert.ok(signature, "config.signature is required.");
    return {
        force: true,
        mode: '555',
        mkdirp: true,
        tmpl: _tmpl('hbs/bin.hbs'),
        path: config.path || signature.name,
        data: {
            signature: signature
        }
    }
}

module.exports = binBud;