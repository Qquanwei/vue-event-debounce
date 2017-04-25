'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var events = options.events || ['click'];
  events.forEach(curry(addDirective)(Vue));
};

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addDirective(Vue, eventType) {
  Vue.directive(eventType, {
    bind: function bind(el, binding, vnode) {
      if (typeof binding.value !== 'function') return;

      var fun = function fun() {
        el.removeEventListener(eventType, fun);
        _co2.default.bind(vnode)(binding.value, arguments).then(function () {
          el.addEventListener(eventType, fun);
        }).catch(function (e) {
          el.addEventListener(eventType, fun);
          throw e;
        });
      };

      el.removeEventListener(eventType, fun);
      el.addEventListener(eventType, fun);
    }
  });
}

function curry(fun, length) {
  length = length || fun.length;
  var args = [];
  return function _curry() {
    args = args.concat(Array.prototype.slice.call(arguments));
    if (args.length < length) {
      return _curry.bind(this);
    }
    return fun.apply(this, args);
  };
}