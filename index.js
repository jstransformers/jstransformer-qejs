'use strict';

var qejs = require('qejs');
var extend = require('extend-shallow');

exports.name = 'qejs';
exports.inputFormats = ['ejs', 'qejs'];
exports.outputFormat = 'html';

exports.renderAsync = function _renderAsync(str, options, locals) {
  var o = extend({}, options, locals);
  return qejs.render(str, o);
}
