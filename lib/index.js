'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Vue, options) {
    Vue.directive('s-click', {
        bind: function bind(el, binding, vnode) {
            if (typeof binding.value !== 'function') return;
            el.addEventListener('click', function () {
                el.disabled = true;
                return _co2.default.bind(vnode)(binding.value, arguments).then(function () {
                    el.disabled = false;
                });
            });
        }
    });
};

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }