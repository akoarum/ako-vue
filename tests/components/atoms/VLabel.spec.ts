import { shallowMount } from '@vue/test-utils'
import VLabel from '~/components/atoms/VLabel.vue'

describe('VLabel', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VLabel, {
      propsData: {},
      slots: {
        default: 'ラベル'
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

  describe('rendering', () => {
    it('通常はlabel要素でレンダリング', () => {
      expect(wrapper.is('label')).toBe(true)
    })

    it('props:trueの場合はspan要素でレンダリング', () => {
      wrapper.setProps({ span: true })
      expect(wrapper.is('span')).toBe(true)
    })
  })
})
