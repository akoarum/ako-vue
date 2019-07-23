import { shallowMount } from '@vue/test-utils'
import VMask from '~/components/atoms/VMask.vue'

describe('VMask', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VMask, {
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

  describe('computed', () => {
    it('styled: propsを基にスタイルを生成して返す', () => {
      expect(wrapper.vm.styled).toEqual({ background: 'transparent' })

      wrapper.setProps({ color: 'rgba(0, 0, 0, 0.8)' })
      expect(wrapper.vm.styled).toEqual({ background: 'rgba(0, 0, 0, 0.8)' })
    })
  })
})
