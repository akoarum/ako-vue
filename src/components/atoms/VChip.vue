<template>
  <i :class="styledClasses" class="vChip"><slot /></i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    primary: { type: Boolean },
    secondary: { type: Boolean },
    caution: { type: Boolean }
  },
  computed: {
    styledClasses(): string[] {
      const classes: string[] = []

      if (this.primary) classes.push('-primary')
      if (this.secondary) classes.push('-secondary')
      if (this.caution) classes.push('-caution')

      return classes
    }
  }
})
</script>

<style lang="scss" scoped>
.vChip {
  display: inline-block;
  border-radius: 2px;
  background: #f0f0f0;
  line-height: 1;

  @include media-min {
    padding: 6px 10px 7px;
    font-size: 1.4rem;
  }
}

.-primary {
  background: lighten($color-theme, 44%);
}

.-secondary {
  background: lighten($color-secondary, 58%);
}

.-caution {
  background: lighten($color-caution, 52%);
}
</style>
