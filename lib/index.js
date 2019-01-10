/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

'use strict'


const binBud = require('./bin_bud')
const indexJsBud = require('./index_js_bud')
const licenseBud = require('./license_bud')
const mochaTestJsBud = require('./mocha_test_js_bud')
const readmeMdBud = require('./readme_md_bud')

exports.binBud = binBud
exports.indexJsBud = indexJsBud
exports.licenseBud = licenseBud
exports.mochaTestJsBud = mochaTestJsBud
exports.readmeMdBud = readmeMdBud

module.exports = {
  binBud,
  indexJsBud,
  licenseBud,
  mochaTestJsBud,
  readmeMdBud
}
