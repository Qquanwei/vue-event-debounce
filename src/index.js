import co from 'co'

function addDirective(Vue, eventType) {
  Vue.directive(eventType, {
    bind: function(el, binding, vnode) {
      if (typeof binding.value !== 'function')
        return

      const fun = function () {
        el.removeEventListener(eventType, fun)
        co.bind(vnode)(binding.value, arguments).then(function () {
          el.addEventListener(eventType, fun)
        })
      }

      el.removeEventListener(eventType, fun)
      el.addEventListener(eventType, fun)
    }
  })
}

function curry (fun, length) {
  length = length || fun.length
  let args = []
  return function _curry() {
    args = args.concat(Array.prototype.slice.call(arguments))
    if (args.length < length) {
      return _curry.bind(this)
    }
    return fun.apply(this, args)
  }
}

export default function (Vue, options = {}) {
  const events = options.events || ['click']
  events.forEach(curry(addDirective)(Vue))
}
