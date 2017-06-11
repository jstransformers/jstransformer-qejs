# jstransformer-qejs

[QEJS](http://github.com/jepso/QEJS) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-foo.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-qejs

## API

```js
var qejs = require('jstransformer')(require('jstransformer-qejs'));

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
