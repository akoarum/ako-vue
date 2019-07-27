import { shallowMount } from '@vue/test-utils'
import VDate from '~/components/atoms/VDate.vue'

describe('VDate', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VDate, {
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
