import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select, boolean, color } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import VDate from '~/components/atoms/VDate.vue'
import VContainer from '~/components/atoms/VContainer.vue'
import VLabel from '~/components/atoms/VLabel.vue'
import VMask from '~/components/atoms/VMask.vue'
import VChip from '~/components/atoms/VChip.vue'
import VCheckbox from '~/components/atoms/VCheckbox.vue'
import VRadio from '~/components/atoms/VRadio.vue'
import VTextarea from '~/components/atoms/VTextarea.vue'
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
  .add('VTextarea', () => ({
    components: { VTextarea },
    props: {
      width: { default: text('width', '') },
      error: { default: boolean('エラー', false) }
    },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <VTextarea v-model="value" :width="width" :aria-invalid="error" name="story" />
    `
  }), { info: {} })
  .add('VRadio', () => ({
    components: { VRadio },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <VRadio v-model="value" value="test">ラジオ項目</VRadio>
    `
  }), { info: {} })
  .add('VCheckbox', () => ({
    components: { VCheckbox },
    props: {
      error: { default: boolean('エラー', false) }
    },
    data() {
      return {
        value: []
      }
    },
    template: `
      <VCheckbox v-model="value" :aria-invalid="error" value="test">チェックボックス項目</VCheckbox>
    `
  }), { info: {} })
  .add('VChip', () => ({
    components: { VChip },
    props: {
      texts: { default: text('テキスト', 'テキストラベル') },
      primary: { default: boolean('Primary', false) },
      secondary: { default: boolean('Secondary', false) },
      caution: { default: boolean('Caution', false) }
    },
    template: `
      <VChip :primary="primary" :secondary="secondary" :caution="caution">{{ texts }}</VChip>
    `
  }), { info: {} })
  .add('VMask', () => ({
    components: { VMask },
    props: {
      color: { default: color('背景', 'rgba(0, 0, 0, 0.8)') }
    },
    template: `
      <VMask
        :color="color"
        style="width: 100px; height: 100px; border: 1px solid #000;"
        @click="click"
      />
    `,
    methods: {
      click: action('click')
    }
  }), { info: {} })
  .add('VLabel', () => ({
    components: { VLabel },
    props: {
      label: { default: text('ラベル', 'ラベルテキスト') },
      span: { default: boolean('span要素', false) }
    },
    template: `
      <VLabel :span="span">{{ label }}</VLabel>
    `
  }), { info: {} })
  .add('VContainer', () => {
    const tag = select('タグ', {
      div: 'div',
      section: 'section',
      article: 'article',
      aside: 'aside'
    }, 'div')
    const bg = color('背景色', '')
    return {
      components: { VContainer },
      props: {
        tag: { default: tag },
        color: { default: bg }
      },
      template: `
        <VContainer :tag="tag" :color="color">
          <p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>
        </VContainer>
      `
    }
  }, { info: {} })
  .add('VDate', () => ({
    components: { VDate },
    data() {
      return {
        time: new Date()
      }
    },
    template: `
      <VDate :datetime="time" />
    `
  }), { info: {} })
