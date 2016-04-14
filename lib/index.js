/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

'use strict'

module.exports = {
    get binBud() { return require('./bin_bud'); },
    get indexJsBud() { return require('./index_js_bud'); },
    get licenseBud() { return require('./license_bud'); },
    get mochaTestJsBud() { return require('./mocha_test_js_bud'); },
    get readmeMdBud() { return require('./readme_md_bud'); }
}