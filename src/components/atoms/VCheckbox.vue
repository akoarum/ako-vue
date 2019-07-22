<template>
  <label class="vCheckbox">
    <input
      v-model="model"
      v-bind="$attrs"
      :value="value"
      type="checkbox"
      class="vCheckbox__input"
    />
    <span class="vCheckbox__label"><slot /></span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  model: {
    prop: 'checkedValues',
    event: 'change'
  },
  props: {
    value: { type: String, required: true },
    checkedValues: { type: Array as PropType<string[]>, required: true }
  },
  computed: {
    model: {
      get(): string[] {
        return this.checkedValues
      },
      set(newValue: boolean) {
        this.$emit('change', newValue)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.vCheckbox {
  position: relative;
  padding-left: 26px;
  font-size: $fontSize-pc;
}

.vCheckbox__input {
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  opacity: 0;
}

.vCheckbox__input:checked + .vCheckbox__label::before {
  content: 'check_box';
  color: $color-theme;
}

.vCheckbox__label::before {
  position: absolute;
  left: 0;
  top: -0.03em;
  content: 'check_box_outline_blank';
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1;
  font-family: $fontFamily-icons;
  color: #888;
  transition: color 0.1s $easing;
}

[aria-invalid='true'] + .vCheckbox__label {
  color: $color-caution;
}

[aria-invalid='true'] + .vCheckbox__label::before {
  color: $color-caution;
}
</style>
