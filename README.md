[Xembly](https://github.com/yegor256/xembly) engine for JavaScript.


Make sure you understand what is [Xembly](https://github.com/yegor256/xembly)
and what does [directives](https://github.com/yegor256/xembly#directives) mean
before using this library.


[![Build Status](https://img.shields.io/travis/g4s8/xembly-js.svg?style=flat-square)](https://travis-ci.org/g4s8/xembly-js)
![npm](https://img.shields.io/npm/v/xembly)

[![DevOps By Rultor.com](http://www.rultor.com/b/g4s8/xembly-js)](http://www.rultor.com/p/g4s8/xembly-js)

# Installation

Add `npm` module:
```bash
npm install --save xembly
```

# Usage

`Xembler` class can apply [directives](https://github.com/yegor256/xembly#directives)
to [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) using
raw string directives: `new Xembler('ADD span;SET hello')`,
or helper objects: `new Xembler(new Directives().add('span').set('hello'))`
and apply to to DOM elements:
```js
var div = document.getElementById('content');
// add span with 'hello' text to `div`
new Xembler(new Directives().add('span').set('hello'))
  .apply(document, div);
```

More complex example creates new HTML form with input fields:
```js
var div = document.getElementById('content');
new Xembler(
  new Directives()
    .xpath('form[@id = "login-form"]') // move cursor to login form
    .push().xpath('input').remove().pop() // remove existing inputs
    .add('label').attr('for', 'login').set('Username').up() // add label for username
    .add('input').attr('type', 'text').attr('name', 'username').up() // add username input
    .add('label').attr('for', 'password').set('Password')
    .add('input').attr('type', 'password').attr('name', 'password').up()
    .add('input').attr('type', 'submit').attr('value', 'Sign in').up()
).apply(document)
```

## Contributing

 - [`npm`](https://www.npmjs.com/) is used for dependency management (see `package.json` for config)
 - [`webpack`](https://webpack.js.org/) is used for packaging
 (see `webpack.config.js` for main config and `webpack-test.config.js` for test config)
 - [`eslint`](https://eslint.org/) is enforced by CI tools (see `.eslintrc.yml` for config)
 - [`mochajs`](https://mochajs.org/) is used for unit testing
