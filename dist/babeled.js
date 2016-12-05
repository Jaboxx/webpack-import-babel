'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _lodash2.default.map(['Hello', 'webpack', 'Peter'], function (item) {
    return item + ' ';
  });

  return element;
}

document.body.appendChild(component());
