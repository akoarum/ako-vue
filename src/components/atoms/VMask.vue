<template>
  <div :style="styled" class="vMask" @click="$emit('click')" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: { type: String, default: 'transparent' }
  },
  computed: {
    styled(): { [key: string]: string } {
      return {
        background: this.color
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
