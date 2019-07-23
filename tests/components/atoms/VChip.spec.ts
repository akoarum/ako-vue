import { shallowMount } from '@vue/test-utils'
import VChip from '~/components/atoms/VChip.vue'

describe('VChip', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VChip, {
      propsData: {},
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

  describe('computed', () => {
    it('styledClasses: propsを基にクラス配列を返す', () => {
      expect(wrapper.vm.styledClasses).toEqual([])

      wrapper.setProps({ primary: true })
      expect(wrapper.vm.styledClasses).toEqual(['-primary'])

      wrapper.setProps({ primary: false, secondary: true })
      expect(wrapper.vm.styledClasses).toEqual(['-secondary'])

      wrapper.setProps({ secondary: false, caution: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution'])
    })
  })
})
