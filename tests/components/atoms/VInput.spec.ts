import { shallowMount } from '@vue/test-utils'
import VInput from '~/components/atoms/VInput.vue'

describe('VInput', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VInput, {
      propsData: {
        value: ''
      }
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

  describe('computed', () => {
    it('styled: propsを基にスタイルを返す', () => {
      expect(wrapper.vm.styled).toEqual({})

      wrapper.setProps({ width: '280px' })
      expect(wrapper.vm.styled).toEqual({ '--width': '280px' })
    })
  })
})
