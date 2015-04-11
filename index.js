'use strict';

var qejs = require('qejs');

exports.name = 'qejs';
exports.outputFormat = 'html';

exports.renderAsync = qejs.render;
