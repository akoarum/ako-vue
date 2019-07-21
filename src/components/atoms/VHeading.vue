<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

export default Vue.extend({
  props: {
    level: { type: Number, default: 2 },
    visual: { type: Number, default: 2 },
    underline: { type: Boolean }
  },
  computed: {
    styledClasses(): string[] {
      const classes: string[] = []

      classes.push('vHeading')
      classes.push(`-lv${this.visual}`)
      if (this.underline) classes.push('-underline')

      return classes
    }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      `h${this.level}`,
      { class: this.styledClasses.join(' ') },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.-lv2 {
  @include media-min {
    font-size: 2.8rem;
    line-height: 1.3;

    &.-underline {
      padding: 0 3px 6px;
    }
  }

  @include media-max {
    font-size: 2.4rem;
    line-height: 1.4;

    &.-underline {
      padding: 0 3px 4px;
    }
  }
}

.-lv3 {
  @include media-min {
    font-size: 2.5rem;
    line-height: 1.4;

    &.-underline {
      padding: 0 3px 4px;
    }
  }

  @include media-max {
    font-size: 2.2rem;
    line-height: 1.4;

    &.-underline {
      padding: 0 3px 4px;
    }
  }
}

.-lv4 {
  @include media-min {
    font-size: 2.2rem;
    line-height: 1.4;

    &.-underline {
      padding: 0 3px 4px;
    }
  }

  @include media-max {
    font-size: 2rem;
    line-height: 1.4;

    &.-underline {
      padding: 0 3px 3px;
    }
  }
}

.-underline {
  border-bottom: 1px solid #ccc;
}
</style>
