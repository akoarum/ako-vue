<script lang="ts">
import Vue, { PropType, CreateElement, VNode } from 'vue'
import { ListItem } from '~/models/ListItem'

export default Vue.extend({
  props: {
    items: { type: Array as PropType<ListItem[]>, required: true },
    tag: { type: String, default: 'ul' },
    number: { type: Boolean }
  },
  computed: {
    styledClasses(): string[] {
      const classes: string[] = ['vList']

      if (this.number) classes.push('-number')

      return classes
    }
  },
  render(createElement: CreateElement): VNode {
    const Items = this.items.map(item => {
      const content = [item.label]

      return createElement(
        'li',
        { class: 'vList__item', key: item.id },
        content
      )
    })
    return createElement(
      this.tag,
      { class: this.styledClasses.join(' ') },
      Items
    )
  }
})
</script>

<style lang="scss" scoped>
.vList {
  @include media-min {
    font-size: $fontSize-pc;
  }

  @include media-max {
    font-size: $fontSize-sp;
  }
}

.vList.-number {
  counter-reset: number;
}

.vList__item {
  position: relative;
  padding-left: 1em;
  white-space: pre-line;
}

.-number .vList__item {
  counter-increment: number;
  padding-left: 1.2em;
}

.vList__item::before {
  position: absolute;
  left: 4px;
  content: '';
  border-radius: 50%;
  background: $color-theme;

  @include media-min {
    top: 0.55em;
    width: 5px;
    height: 5px;
  }

  @include media-max {
    top: 0.6em;
    width: 4px;
    height: 4px;
  }
}

.-number .vList__item::before {
  top: 0.05em;
  left: 0;
  width: auto;
  height: auto;
  border-radius: 0;
  background: transparent;
  content: counter(number) '.';
}

.vList__item + .vList__item {
  margin-top: 6px;
}
</style>
