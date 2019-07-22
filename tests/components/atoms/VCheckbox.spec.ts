import { shallowMount } from '@vue/test-utils'
import VCheckbox from '~/components/atoms/VCheckbox.vue'

describe('VCheckbox', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VCheckbox, {
      propsData: {}
    })
  })

  describe('initialized', () => {
    it('mountable', () => {
      expect(wrapper.isVueInstance()).toBe(true)
    })

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
