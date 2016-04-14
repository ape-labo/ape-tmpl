/**
 * Define a bud for README.md
 * @memberof module:ape-tmpl/lib
 * @function readmeBud
 * @param {object} config - Configuration.
 * @param {string} config.sections - Section file path.
 * @param {object} config.pkg - Package data.
 * @param {string} config.repo - GitHub Repository name. (eg. 'ape-repo/ap-tmpl')
 * @param {object} config.badges - Badge data.
 * @param {boolean} [config.badges.travis=false] - Should show travis badge.
 * @param {boolean} [config.badges.codeclimate=false] - Should show codeclimate badge.
 * @param {boolean} [config.badges.codeclimateCoverage=false] - Should show codeclimate coverage badge.
 * @param {boolean} [config.badges.gemnasium=false] - Should show gemnasium badge.
 * @param {boolean} [config.badges.npm=false] - Should show npm badge.
 * @param {boolean} [config.badges.bower=false] - Should show bower badge.
 * @param {object} config.links - Link urls.
 * @param {string} config.overview - Overview file path.
 * @param {object} config.vars - Custom variables.
 * @returns {object} - Bud object.
 */

'use strict'

const expandglob = require('expandglob')
const _tmpl = require('./_tmpl')
const path = require('path')
const assert = require('assert')

/** @lends readmeBud */
function readmeBud (config) {
  assert.ok(config.pkg, 'config.pkg is required.')
  assert.ok(config.sections, 'config.sections is required.')
  assert.ok(config.repo, 'config.repo is required.')
  return {
    force: true,
    mode: '444',
    path: 'README.md',
    mkdirp: true,
    tmpl: _tmpl('hbs/README.md.hbs'),
    data: {
      pkg: config.pkg,
      sections: expandglob.sync(config.sections).map((filename) => {
        let name = path.relative(process.cwd(), filename)
        let anchor = name.replace(/[\/\¥]/g, '-')
        return {
          anchor: path.basename(anchor, path.extname(anchor)),
          name: name,
          filename: filename
        }
      }),
      badges: config.badges,
      repo: config.repo,
      links: config.links,
      overview: config.overview,
      vars: config.vars
    }
  }
}

module.exports = readmeBud;
