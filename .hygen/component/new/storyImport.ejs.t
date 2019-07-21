---
inject: true
after: import { withInfo } from 'storybook-addon-vue-info'
to: '<%= story ? `stories/${category}.ts` : null %>'
---
import <%= name %> from '~/components/<%= category %>/<%= name %>.vue'