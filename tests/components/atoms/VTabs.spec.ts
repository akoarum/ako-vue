import { shallowMount } from '@vue/test-utils'
import VTabs from '~/components/atoms/VTabs.vue'

describe('VTabs', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VTabs, {
      propsData: {
        tabs: [
          { id: 1, to: '#tab1', label: '項目1' },
          { id: 2, to: '#tab2', label: '項目2' },
          { id: 3, to: '#tab3', label: '項目3' }
        ],
        current: '#tab1'
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
