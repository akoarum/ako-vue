import { shallowMount } from '@vue/test-utils'
import VHeading from '~/components/atoms/VHeading.vue'

describe('VHeading', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VHeading, {
      propsData: {},
      slots: {
        default: '見出しテキスト'
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
    it('levelに応じてタグが変わる', () => {
      expect(wrapper.is('h2')).toBe(true)

      wrapper.setProps({ level: 4 })
      expect(wrapper.is('h4')).toBe(true)
    })
  })

  describe('computed', () => {
    it('styledClasses: propsを基にクラス配列を生成して返す', () => {
      expect(wrapper.vm.styledClasses).toEqual(['vHeading', '-lv2'])

      wrapper.setProps({ visual: 3 })
      expect(wrapper.vm.styledClasses).toEqual(['vHeading', '-lv3'])

      wrapper.setProps({ underline: true })
      expect(wrapper.vm.styledClasses).toEqual(['vHeading', '-lv3', '-underline'])
    })
  })
})
