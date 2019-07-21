<template>
  <p :class="styledClasses" class="vTexts"><slot /></p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    caution: { type: Boolean },
    small: { type: Boolean }
  },
  computed: {
    styledClasses(): string[] {
      const classes: string[] = []
      if (this.caution) classes.push('-caution')
      if (this.small) classes.push('-small')
      return classes
    }
  }
})
</script>

<style lang="scss" scoped>
.vTexts {
  white-space: pre-line;

  @include media-min {
    font-size: $fontSize-pc;
    line-height: 1.8;
  }

  @include media-max {
    font-size: $fontSize-sp;
    line-height: 1.7;
  }
}

.-caution {
  color: $color-caution;
}

.-small {
  @include media-min {
    font-size: 1.4rem;
    line-height: 1.5;
  }

  @include media-max {
    font-size: 1.3rem;
    line-height: 1.4;
  }
}
</style>
