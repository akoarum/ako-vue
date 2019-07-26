<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'

export default Vue.extend({
  props: {
    tag: { type: String, default: 'section' },
    color: { type: String }
  },
  computed: {
    styled(): { [key: string]: string } {
      const styles: { [key: string]: string } = {}

      if (this.color) {
        styles['--background'] = this.color
      }

      return styles
    }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,
      { class: 'vContainer', style: this.styled },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.vContainer {
  --background: #fff;
  background: var(--background);

  @include media-min {
    padding: 24px 20px 28px;
  }

  @include media-max {
    padding: 20px 12px 23px;
  }
}
</style>
