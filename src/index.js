import co from 'co'

export default function (Vue, options) {
    Vue.directive('click', {
        bind: function(el, binding, vnode) {
            if (typeof binding.value !== 'function')
                return

            const fun = function () {
                el.removeEventListener('click', fun)
                return co.bind(vnode)(binding.value, arguments).then(function () {
                    el.addEventListener('click', fun)
                })
            }

            el.removeEventListener('click', fun)
            el.addEventListener('click', fun)
        }
    })
}
