# jstransformer-qejs

[QEJS](http://github.com/jepso/QEJS) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-qejs/master.svg)](https://travis-ci.org/jstransformers/jstransformer-qejs)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-qejs/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-qejs?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-qejs/master.svg)](http://david-dm.org/jstransformers/jstransformer-qejs)
[![NPM version](https://img.shields.io/npm/v/jstransformer-qejs.svg)](https://www.npmjs.org/package/jstransformer-qejs)

## Installation

    npm install jstransformer-qejs

## API

```js
var qejs = require('jstransformer')(require('jstransformer-qejs'))

var template = 'Hello, <%- name %>!';
var locals = {
  name: 'World'
};

qejs.renderAsync(template, locals, function(err, data) {
  data.body;
  //=> 'Hello World!'
});
```

## License

MIT
