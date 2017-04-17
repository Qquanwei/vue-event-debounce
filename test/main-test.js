import Vue from 'vue'
import $ from 'jquery'
import VED from '../src/index.js'

function createApp () {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
  return app
}

function triggerEvent (ui, type) {
  const event = new MouseEvent(type, {
    view: window,
    bubbles: true
  })
  ui.dispatchEvent(event)
}


Vue.use(VED)



const callBack = jasmine.createSpy('callBack')
function onClick () {
  callBack()
  return new Promise (function (resolve) {
    setTimeout(resolve , 100)
  })
}

const vm = new Vue({
  render: function(createElement) {
    return createElement(
      'button',
      {
        directives: [
          {
            name: 'click',
            value: onClick
          }
        ],
        domProps: {
          innerHTML: 'hit me'
        }
      }
    )
  }
}).$mount(createApp())


describe('vue-event-debounce', function () {
  /* it ('should be listening click event', function () {
   * })*/

  beforeEach(function () {
    jasmine.clock().install()
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
  })


  it ('should have event debounce', function () {
    for (let i = 0; i< 10; ++i){
      triggerEvent(vm.$el, 'click')
    }
    expect(callBack.calls.count()).toEqual(1)
  })

  it ('should can be reuse', function () {
    setTimeout(function () {
      for (let i = 0; i< 10; ++i) {
        triggerEvent(vm.$el, 'click')
      }
      expect(callBack.calls.count()).toEqual(2)
    }, 200)
  })

  afterEach(function () {
    jasmine.clock().uninstall()
  })
})
