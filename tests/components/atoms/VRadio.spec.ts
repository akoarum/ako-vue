import { shallowMount } from '@vue/test-utils'
import VRadio from '~/components/atoms/VRadio.vue'

describe('VRadio', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VRadio, {
      propsData: {
        value: 'test',
        checked: ''
      },
      slots: {
        default: 'テスト'
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
})
