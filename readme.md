[![Build Status](https://travis-ci.org/Qquanwei/vue-event-debounce.svg?branch=master)](https://travis-ci.org/Qquanwei/vue-event-debounce)
[![npm](https://img.shields.io/npm/v/vue-event-debounce.svg)](https://www.npmjs.com/package/vue-event-debounce)

# vue-event-debounce

Support TypeScript!

Block event when callback is pedding! autoresolve Promise/generator.

blog: http://quanweili.com/2017/10/27/introduce-vue-event-debounce.html

## Install

`npm install vue-event-debounce --save`

## Usag

```
...
import VED from 'vue-event-debounce'

Vue.use(VED, { events: ['click'] })
...
```

and then, in component we can using a bounce event for click!

```
<template>
  <button v-click="myclick">click me</button>
</template>


<script>
export default {
  ...
  methods: {
    myclick (e) {
      // this is may be a ajax request, or just simple function
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(this, 0), 3000)
      })
    }
  }
  ...
}
</script>
```


## Options

* `events`: array , directive name and event name.

`Vue.use(VED, { events: ['click', 'keydown', 'keyup']})`

will be bind directive `v-click` `v-keydown` `v-keyup` to Vue.
