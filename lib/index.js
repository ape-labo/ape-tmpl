/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

'use strict'

const d = (module) => module && module.default || module

const binBud = d(require('./bin_bud'))
const indexJsBud = d(require('./index_js_bud'))
const licenseBud = d(require('./license_bud'))
const mochaTestJsBud = d(require('./mocha_test_js_bud'))
const readmeMdBud = d(require('./readme_md_bud'))

module.exports = {
  binBud,
  indexJsBud,
  licenseBud,
  mochaTestJsBud,
  readmeMdBud
}


exports.binBud = binBud
exports.indexJsBud = indexJsBud
exports.licenseBud = licenseBud
exports.mochaTestJsBud = mochaTestJsBud
exports.readmeMdBud = readmeMdBud
