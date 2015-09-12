/**
 * Resolve template file path.
 * @memberof module:ape-tmp/lib
 * @function _tmpl
 * @private
 * @param {string} name - Template name.
 * @returns {string} - Resolved path.
 */

"use strict";

var path = require('path');

var TMPL_DIR = path.resolve(__dirname, '../asset');

/** @lends _tmpl */
function _tmpl(name) {
    return path.resolve(TMPL_DIR, name);
}

module.exports = _tmpl;