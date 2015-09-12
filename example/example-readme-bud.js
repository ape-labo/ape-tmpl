/**
 * Bud file for README.md
 */

"use strict";

var apeTmpl = require('ape-tmpl'),
    pkg = require('./package.json');

module.exports = apeTmpl.readmeMdBud({
    pkg: pkg,
    repo: 'okunishinishi/my-awesome-one',
    sections: 'docs/readme/*.md.hbs', // Each readme section files.
    badges: {
        travis: true,
        codeclimate: true,
        codeclimateCoverage: true,
        gemnasium: true,
        npm: true
    }
});

if (!module.parent) {
    // This will generate "README.md"
    require('coz').render(__filename);
}