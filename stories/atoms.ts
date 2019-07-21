import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import VInput from '~/components/atoms/VInput.vue'
import VHeading from '~/components/atoms/VHeading.vue'
import VTexts from '~/components/atoms/VTexts.vue'
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
  .add('VTexts', () => ({
    components: { VTexts },
    props: {
      texts: { default: text('テキスト', '吾輩は猫である。名前はまだ無い。\nどこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャー') },
      caution: { default: boolean('Caution', false) },
      small: { default: boolean('Small', false) }
    },
    template: `
      <VTexts :caution="caution" :small="small">{{ texts }}</VTexts>
    `
  }), { info: {} })
  .add('VHeading', () => ({
    components: { VHeading },
    props: {
      texts: { default: text('テキスト', '吾輩は猫である。') },
      level: { default: number('見出しレベル', 2) },
      visual: { default: number('見た目の見出しレベル', 2) },
    },
    template: `
      <VHeading :level="level" :visual="visual">{{ texts }}</VHeading>
    `
  }), { info: {} })
  .add('VInput', () => {
    const type = select('type', {
      text: 'text',
      number: 'number',
      email: 'email',
      tel: 'tel',
      password: 'password'
    }, 'text')

    return {
      components: { VInput },
      props: {
        type: { default: type },
        width: { default: text('width', '') },
        error: { default: boolean('エラー', false) }
      },
      data() {
        return {
          value: ''
        }
      },
      template: `
        <VInput v-model="value" :type="type" :width="width" :aria-invalid="error" name="story" />
      `
    }
  }, { info: {} })
