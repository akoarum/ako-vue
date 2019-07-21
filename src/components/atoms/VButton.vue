<template>
  <button :class="styledClasses" class="vButton" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    primary: { type: Boolean },
    secondary: { type: Boolean },
    caution: { type: Boolean },
    outline: { type: Boolean },
    small: { type: Boolean }
  },
  computed: {
    styledClasses(): string[] {
      const classes: string[] = []
      if (this.primary) classes.push('-primary')
      if (this.secondary) classes.push('-secondary')
      if (this.caution) classes.push('-caution')
      if (this.outline) classes.push('-outline')
      if (this.small) classes.push('-small')
      return classes
    }
  }
})
</script>

<style lang="scss" scoped>
.vButton {
  --color: #{$color-base};
  display: block;
  box-sizing: border-box;
  background: var(--color);
  line-height: 1;
  outline: none;
  color: #fff;
  transition: background 0.3s $easing;

  &:hover,
  &:focus {
    background: lighten($color-base, 15%);

    &.-outline {
      background: rgba(0, 0, 0, 0.14);
    }
  }

  @include media-min {
    padding: 9px 14px;
    min-width: 134px;
    font-size: $fontSize-pc;
  }

  @include media-max {
    padding: 9px 12px;
    width: 100%;
    font-size: $fontSize-sp;
  }
}

.-small {
  @include media-min {
    min-width: 0;
  }
}

.-outline {
  box-shadow: 0 0 0 2px currentColor inset;
  background: transparent;
  color: var(--color);
}

.-primary {
  --color: #{$color-theme};

  &:hover,
  &:focus {
    background: lighten($color-theme, 15%);

    &.-outline {
      background: lighten($color-theme, 44%);
    }
  }
}

.-secondary {
  --color: #{$color-secondary};

  &:hover,
  &:focus {
    background: lighten($color-secondary, 15%);

    &.-outline {
      background: lighten($color-secondary, 58%);
    }
  }
}

.-caution {
  --color: #{$color-caution};

  &:hover,
  &:focus {
    background: lighten($color-caution, 15%);

    &.-outline {
      background: lighten($color-caution, 52%);
    }
  }
}
</style>
