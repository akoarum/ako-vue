import { shallowMount } from '@vue/test-utils'
import VPager from '~/components/atoms/VPager.vue'

describe('VPager', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VPager, {
      propsData: {
        items: [
          { id: 1, to: 0 },
          { id: 2, to: 1 },
          { id: 3, to: 2 },
          { id: 4, to: 3 },
        ],
        current: 0
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
    it('styledClasses: propsを基にクラス配列を生成して返す', () => {
      expect(wrapper.vm.styledClasses).toEqual([])

      wrapper.setProps({ small: true })
      expect(wrapper.vm.styledClasses).toEqual(['-small'])
    })
  })
})
