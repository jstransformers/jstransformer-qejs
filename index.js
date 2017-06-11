'use strict'

const qejs = require('qejs')
const extend = require('extend-shallow')

exports.name = 'qejs'
exports.inputFormats = ['ejs', 'qejs']
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  const o = extend({}, options, locals)
  return qejs.render(str, o)
}
