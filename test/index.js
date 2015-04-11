'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = fs.readFileSync(join(__dirname, 'input.txt')).toString();
var expected = fs.readFileSync(join(__dirname, 'expected.txt')).toString();

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test('QEJS', function (done) {
  var options = {
    open: '{%',
    close: '%}',
    place: 'world'
  };
  var locals = {
    'countries': [
      'Canada',
      'United States',
      'China',
      'Columbia'
    ]
  };
  transform.renderAsync(input, options, locals).then(function (out) {
    assertEqual(out.trim(), expected.trim());
    done();
  });
});
