import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

storiesOf('Presenters', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs as any)
