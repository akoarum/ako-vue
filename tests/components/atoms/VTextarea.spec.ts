import { shallowMount } from '@vue/test-utils'
import VTextarea from '~/components/atoms/VTextarea.vue'

describe('VTextarea', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VTextarea, {
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
