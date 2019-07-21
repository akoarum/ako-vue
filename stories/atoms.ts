import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import VButton from '~/components/atoms/VButton.vue'

storiesOf('Atoms', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs as any)
  .add('VButton', () => ({
    components: { VButton },
    props: {
      label: { default: text('ラベル', 'ボタン') },
      primary: { default: boolean('Primary', false) },
      secondary: { default: boolean('Secondary', false) },
      caution: { default: boolean('caution', false) },
      outline: { default: boolean('Outline', false) },
      small: { default: boolean('Small', false) }
    },
    template: `
      <VButton
        :primary="primary"
        :secondary="secondary"
        :caution="caution"
        :outline="outline"
        :small="small"
        @click="click"
      >
        {{ label }}
      </VButton>
    `,
    methods: {
      click: action('click')
    }
  }), { info: {} })
