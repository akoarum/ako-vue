<template>
  <div class="decorator">
    <slot name="story" />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import windowSize from '../src/plugins/windowSize'

Vue.use(Vuex)
Vue.use(windowSize)

export default Vue.extend({
  name: 'Decorator',
  store: new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    getters: {}
  })
})
</script>

<style lang="scss">
@import '../src/assets/scss/normalize';
</style>
