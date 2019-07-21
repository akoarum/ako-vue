import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'
import Decorator from './Decorator.vue'

Vue.use(Vuex)

addDecorator(() => ({
  components: { Decorator },
  template: `
    <Decorator>
      <story slot="story" />
    </Decorator>
  `
}))

const context = require.context('../stories/', true, /^.*?\.ts$/)

function loadStories() {
  context.keys().forEach(filename => {
    context(filename)
  })
}

configure(loadStories, module)
