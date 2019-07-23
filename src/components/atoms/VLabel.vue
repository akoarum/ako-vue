<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'

export default Vue.extend({
  props: {
    span: { type: Boolean }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      this.span ? 'span' : 'label',
      { class: 'vLabel' },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.vLabel {
  display: inline-block;
  font-weight: bold;

  @include media-min {
    font-size: $fontSize-pc;
  }

  @include media-max {
    font-size: $fontSize-sp;
  }
}
</style>
