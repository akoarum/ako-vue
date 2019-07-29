import { shallowMount } from '@vue/test-utils'
import VList from '~/components/atoms/VList.vue'

describe('VList', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(VList, {
      propsData: {
        items: [
          { id: 1, label: 'リスト項目1' },
          { id: 2, label: 'リスト項目2' },
          { id: 3, label: 'リスト項目3' }
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

  describe('render', () => {
    it('何も指定しなければulになる', () => {
      expect(wrapper.is('ul')).toBe(true)
    })

    it('tagにolを指定すればolでレンダリングする', () => {
      wrapper.setProps({ tag: 'ol' })
      expect(wrapper.is('ol')).toBe(true)
    })
  })

  describe('computed', () => {
    it('styledClasses: propsに基づいてクラス配列を生成して返す', () => {
      expect(wrapper.vm.styledClasses).toEqual(['vList'])

      wrapper.setProps({ number: true })
      expect(wrapper.vm.styledClasses).toEqual(['vList', '-number'])
    })
  })
})
