/**
 * Bud for index.js
 * @memberof module:ape-tmpl/lib
 * @function indexJsBud
 * @param {object} config - Index js configuration.
 * @param {string} config.dirname - Directory name.
 * @param {string} [config.desc] - Module description.
 * @param {string} [config.module] - Module annotation.
 * @param {string} [config.parentmodule] - Name of parent module.
 * @param {string[]} [config.submodules] - Name of members as submodule.
 * @param {string[]} [config.subclasses] - Name of members as subclasses
 * @returns {object} - Bud for index.js
 */

'use strict'

const EOL = require('os').EOL
const arrayfilter = require('arrayfilter')
const arraysort = require('arraysort')
const stringcase = require('stringcase')
const assert = require('assert')
const path = require('path')
const fs = require('fs')
const minimatch = require('minimatch')
const _tmpl = require('./_tmpl')

/** @lends indexJsBud */
function indexJsBud (config) {
  let dirname = config.dirname
  assert.ok(!!dirname, 'config.dirname is required.')
  const tmpl = config.mjs ? _tmpl('hbs/index.mjs.hbs') : _tmpl('hbs/index.js.hbs')
  return {
    force: true,
    mode: '444',
    path: path.resolve(dirname, 'index.js'),
    mkdirp: false,
    tmpl: tmpl,
    data: {
      END_BRACE: '}',
      desc: [].concat(config.desc || []).join(EOL + ' * '),
      module: config.module,
      parentmodule: [].concat(config.parentmodule || []),
      get modules () {
        let submodules = [].concat(config.submodules || []),
          subclasses = [].concat(config.subclasses || [])
        return fs.readdirSync(dirname)
          .sort(arraysort.stringCompare())
          .filter(arrayfilter.patternReject(/^[\._]/))
          .filter(arrayfilter.patternReject(/~$/))
          .filter(arrayfilter.patternReject(/.tmp$/))
          .filter(arrayfilter.patternReject(/^index\.js$/))
          .filter(arrayfilter.patternReject(/\.jsx$/))
          .filter((filename) => {
            try {
              require.resolve(path.resolve(dirname, filename))
              return true
            } catch (e) {
              return false
            }
          })
          .map((filename) => {
            try {
              const extname = path.extname(filename)
              let name = stringcase.camelcase(path.basename(filename, extname))
              if (config.pascalcase) {
                name = stringcase.pascalcase(name)
              }
              let requireName = name.split(/\./g).map(stringcase.snakecase).join('.')
              const needsExtToRequire = ['.json'].includes(extname)
              if (needsExtToRequire) {
                requireName += extname
              }
              return {
                name: name,
                requireName: requireName,
                get isSubmodules () {
                  let camelName = stringcase.camelcase(name)
                  for (let submodule of submodules) {
                    let hit = minimatch(camelName, submodule)
                    if (hit) {
                      return true
                    }
                  }
                  return false
                },
                get isSubclass () {
                  let pascalName = stringcase.pascalcase(name)
                  let camelName = stringcase.camelcase(name)
                  for (let subclass of subclasses) {
                    let hit = minimatch(pascalName, subclass) || minimatch(camelName, subclass)
                    if (hit) {
                      return true
                    }
                  }
                  return false
                }
              }
            } catch (e) {
              return null
            }
          })
          .filter(arrayfilter.emptyReject())
      }
    }
  }
}

module.exports = indexJsBud

