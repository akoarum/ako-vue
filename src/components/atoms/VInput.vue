<template>
  <input v-model="model" :style="styled" class="vInput" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: { type: String, required: true },
    width: { type: String }
  },
  computed: {
    model: {
      get(): string {
        return this.value
      },
      set(newValue: string) {
        this.$emit('input', newValue)
      }
    },
    styled(): { [key: string]: string } {
      const styled: { [key: string]: string } = {}

      if (this.width) {
        styled['--width'] = this.width
      }

      return styled
    }
  }
})
</script>

<style lang="scss" scoped>
.vInput {
  --width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 1.6rem;
  line-height: 1.2;

  @include media-min {
    padding: 8px 10px;
    width: var(--width);
  }

  @include media-max {
    padding: 7px 10px;
    width: 100%;
  }
}

[aria-invalid='true'] {
  border-color: $color-caution;
  background: #fceaf0;
}
</style>
