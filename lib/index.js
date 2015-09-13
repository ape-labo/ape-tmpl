/**
 * Templates for ape framework.
 * @module ape-tmpl
 */

"use strict";

module.exports = {
    get binBud() { return require('./bin_bud'); },
    get bowerJsonBud() { return require('./bower_json_bud'); },
    get licenseBud() { return require('./license_bud'); },
    get readmeMdBud() { return require('./readme_md_bud'); }
};