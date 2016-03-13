/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

"use strict";

module.exports = {
    get bin_bud() { return require('./bin_bud'); },
    get bower_json_bud() { return require('./bower_json_bud'); },
    get index_js_bud() { return require('./index_js_bud'); },
    get license_bud() { return require('./license_bud'); },
    get mocha_test_js_bud() { return require('./mocha_test_js_bud'); },
    get readme_md_bud() { return require('./readme_md_bud'); }
};