/**
 * Bud file for LICENSE
 */

'use strict'

const apeTmpl = require('ape-tmpl')

module.exports = apeTmpl.licenseBud({
  type: 'MIT',
  holder: 'apeman-labo',
  year: 2015
})

if (!module.parent) {
  // This will generate "LICENSE"
  require('coz').render(__filename)
}