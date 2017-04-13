import co from 'co'

export default function (Vue, options) {
    Vue.directive('click', {
        bind: function(el, binding, vnode) {
            if (typeof binding.value !== 'function')
                return

            el.addEventListener('click', function () {
                el.disabled = true
                return co.bind(vnode)(binding.value, arguments).then(function () {
                    el.disabled = false
                })
            })
        }
    })
}
