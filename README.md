# jstransformer-qejs

JSTransformer support for QEJS.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-qejs/master.svg)](https://travis-ci.org/jstransformers/jstransformer-qejs)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-qejs/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-qejs?branch=master)
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
