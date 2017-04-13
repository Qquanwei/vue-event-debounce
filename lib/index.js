'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Vue, options) {
    Vue.directive('click', {
        bind: function bind(el, binding, vnode) {
            if (typeof binding.value !== 'function') return;

            var fun = function fun() {
                el.removeEventListener('click', fun);
                return _co2.default.bind(vnode)(binding.value, arguments).then(function () {
                    el.addEventListener('click', fun);
                });
            };

            el.removeEventListener('click', fun);
            el.addEventListener('click', fun);
        }
    });
};

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }