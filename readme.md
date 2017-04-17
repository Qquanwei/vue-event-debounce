[![Build Status](https://travis-ci.org/Qquanwei/vue-event-debounce.svg?branch=master)](https://travis-ci.org/Qquanwei/vue-event-debounce)


# vue-event-debounce

will disable component response UI event when a event return promise or generate state is pedding.

## Install

`npm install vue-event-debounce --save`

## Usag

```
...
import VED from 'vue-event-debounce'

Vue.use(VED)
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
