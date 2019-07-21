import { shallowMount } from '@vue/test-utils'
import VButton from '~/components/atoms/VButton.vue'

describe('VButton', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VButton, {
      propsData: {},
      slots: {
        default: 'ボタン'
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
    it('propsを基にクラス配列を生成して返す', () => {
      expect(wrapper.vm.styledClasses).toEqual([])

      wrapper.setProps({ primary: true })
      expect(wrapper.vm.styledClasses).toEqual(['-primary'])

      wrapper.setProps({ primary: false, secondary: true })
      expect(wrapper.vm.styledClasses).toEqual(['-secondary'])

      wrapper.setProps({ secondary: false, caution: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution'])

      wrapper.setProps({ outline: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution', '-outline'])

      wrapper.setProps({ small: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution', '-outline', '-small'])
    })
  })
})
