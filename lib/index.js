/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get binBud () { return d(require('./bin_bud')) },
  get indexJsBud () { return d(require('./index_js_bud')) },
  get licenseBud () { return d(require('./license_bud')) },
  get mochaTestJsBud () { return d(require('./mocha_test_js_bud')) },
  get readmeMdBud () { return d(require('./readme_md_bud')) }
}
