import { shallowMount } from '@vue/test-utils'
import VContainer from '~/components/atoms/VContainer.vue'

describe('VContainer', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VContainer, {
      propsData: {},
      slots: {
        default: 'テキスト'
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
    it('styled: propsを基にスタイルを生成して返す', () => {
      expect(wrapper.vm.styled).toEqual({})

      wrapper.setProps({ color: '#f0f0f0' })
      expect(wrapper.vm.styled).toEqual({ '--background': '#f0f0f0' })
    })
  })
})
