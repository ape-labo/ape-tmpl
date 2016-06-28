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
function readmeBud (config = {}) {
  let { pkg, sections, repo } = config
  assert.ok(pkg, 'config.pkg is required.')
  assert.ok(sections, 'config.sections is required.')
  assert.ok(repo, 'config.repo is required.')
  return {
    force: true,
    mode: '444',
    path: 'README.md',
    mkdirp: true,
    tmpl: _tmpl('hbs/README.md.hbs'),
    data: {
      pkg,
      repo,
      banner: config.banner,
      bannerSize: config.bannerSize || 196,
      sections: expandglob.sync(sections).map((filename) => {
        let name = path.relative(process.cwd(), filename)
        let anchor = name.replace(/[\/\¥]/g, '-')
        return {
          anchor: path.basename(anchor, path.extname(anchor)),
          name,
          filename
        }
      }),
      badges: config.badges,
      links: config.links,
      overview: config.overview,
      vars: config.vars
    }
  }
}

module.exports = readmeBud
