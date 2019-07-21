import { shallowMount } from '@vue/test-utils'
import VTexts from '~/components/atoms/VTexts.vue'

describe('VTexts', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VTexts, {
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
    it('styledClasses: propsを基にクラス配列を生成して返す', () => {
      expect(wrapper.vm.styledClasses).toEqual([])

      wrapper.setProps({ caution: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution'])

      wrapper.setProps({ small: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution', '-small'])
    })
  })
})
