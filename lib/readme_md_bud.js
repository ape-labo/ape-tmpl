/**
 * Define bud for README.md
 * @memberof module:ape-tmpl/lib
 * @function readmeBud
 * @param {object} config - Configuration
 * @param {string} config.sections - Section file path.
 * @param {object} config.pkg - Package data.
 * @param {string} config.repo - GitHub Repository name. (eg. 'ape-repo/ap-tmpl')
 * @param {object} config.badges - Badge data.
 * @param {boolean} [config.badges.travis=false] - Should show travis badge.
 * @param {boolean} [config.badges.codeclimate=false] - Should show codeclimate badge.
 * @param {boolean} [config.badges.codeclimateCoverage=false] - Should show codeclimate coverage badge.
 * @param {boolean} [config.badges.gemnasium=false] - Should show gemnasium badge.
 * @param {boolean} [config.badges.npm=false] - Should show npm badge.
 * @param {object} config.links - Link urls.
 * @param {string} config.overview - Overview file path.
 * @returns {object} - Bud object.
 */

"use strict";

var glob = require('glob'),
    _tmpl = require('./_tmpl'),
    assert = require('assert');

/** @lends readmeBud */
function readmeBud(config) {
    assert.ok(config.pkg, "config.pkg is required.");
    assert.ok(config.sections, "config.sections is required.");
    assert.ok(config.repo, "config.repo is required.");
    return {
        force: true,
        mode: '444',
        path: 'README.md',
        mkdirp: true,
        tmpl: _tmpl('hbs/README.md.hbs'),
        data: {
            pkg: config.pkg,
            sections: glob.sync(config.sections),
            badges: config.badges,
            repo: config.repo,
            links: config.links,
            overview: config.overview,
        }
    }
}

module.exports = readmeBud;
