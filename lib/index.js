/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

'use strict'

const _d = (module) => module && module.default || module

const binBud = _d(require('./bin_bud'))
const indexJsBud = _d(require('./index_js_bud'))
const licenseBud = _d(require('./license_bud'))
const mochaTestJsBud = _d(require('./mocha_test_js_bud'))
const readmeMdBud = _d(require('./readme_md_bud'))

module.exports = {
  binBud,
  indexJsBud,
  licenseBud,
  mochaTestJsBud,
  readmeMdBud
}
