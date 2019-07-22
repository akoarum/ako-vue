<template>
  <label class="vRadio">
    <input
      v-model="model"
      v-bind="$attrs"
      :value="value"
      type="radio"
      class="vRadio__input"
    />
    <span class="vRadio__label"><slot /></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: { type: String, required: true },
    checked: { type: String, required: true }
  },
  computed: {
    model: {
      get(): string {
        return this.checked
      },
      set(newValue: string) {
        this.$emit('change', newValue)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.vRadio {
  position: relative;
  padding-left: 26px;
  font-size: $fontSize-pc;
}

.vRadio__input {
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  opacity: 0;
}

.vRadio__input:checked + .vRadio__label::before {
  content: 'radio_button_checked';
  color: $color-theme;
}

.vRadio__label::before {
  position: absolute;
  left: 0;
  top: -0.03em;
  content: 'radio_button_unchecked';
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1;
  font-family: $fontFamily-icons;
  color: #888;
  transition: color 0.1s $easing;
}
</style>
