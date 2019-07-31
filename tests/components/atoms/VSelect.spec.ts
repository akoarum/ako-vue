import { shallowMount } from '@vue/test-utils'
import VSelect from '~/components/atoms/VSelect.vue'

describe('VSelect', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(VSelect, {
      propsData: {
        value: '',
        options: [
          { id: 1, label: '項目1', value: '1' },
          { id: 2, label: '項目2', value: '2' },
          { id: 3, label: '項目3', value: '3' }
        ]
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
    it('selectedLabel: 選択したvalueのラベルを返す', () => {
      expect(wrapper.vm.selectedLabel).toBe('選択してください')

      wrapper.setProps({ value: '2' })
      expect(wrapper.vm.selectedLabel).toBe('項目2')
    })

    it('styledClasses: propsを基にクラス配列を生成して返す', () => {
      expect(wrapper.vm.styledClasses).toEqual([])

      wrapper.setProps({ dark: true })
      expect(wrapper.vm.styledClasses).toEqual(['-dark'])
    })
  })
})
