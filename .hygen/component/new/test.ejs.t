---
to: '<%= test ? `tests/components/${category}/${name}.spec.ts` : null %>'
---
import { shallowMount } from '@vue/test-utils'
import <%= name %> from '~/components/<%= category %>/<%= name %>.vue'

describe('<%= name %>', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(<%= name %>, {
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
})
