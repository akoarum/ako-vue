<template>
  <ul :class="styledClasses" class="vPager">
    <template v-for="item in items">
      <li :key="item.id" class="vPager__item">
        <template v-if="link">
          <router-link
            :to="item.to"
            :aria-current="current === item.to"
            class="vPager__btn"
          >
            <span>{{ item.to }}</span>
          </router-link>
        </template>
        <template v-else>
          <button
            type="button"
            class="vPager__btn"
            :aria-current="current === item.to"
            @click="$emit('click', item.to)"
          >
            <span>{{ item.to + 1 }}</span>
          </button>
        </template>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Pager } from '~/models/Pager'

export default Vue.extend({
  props: {
    items: { type: Array as PropType<Pager[]>, required: true },
    current: { type: [String, Number], required: true },
    link: { type: Boolean },
    small: { type: Boolean }
  },
  computed: {
    styledClasses(): string[] {
      const classes: string[] = []

      if (this.small) classes.push('-small')

      return classes
    }
  }
})
</script>

<style lang="scss" scoped>
.vPager {
  display: flex;

  @include media-min {
    margin-left: -16px;
  }

  @include media-max {
    margin-left: -20px;
  }
}

.vPager.-small {
  @include media-min {
    margin-left: -10px;
  }

  @include media-max {
    margin-left: -16px;
  }
}

.vPager__item {
  @include media-min {
    margin-left: 16px;
  }

  @include media-max {
    margin-left: 20px;
  }
}

.-small .vPager__item {
  @include media-min {
    margin-left: 10px;
  }

  @include media-max {
    margin-left: 16px;
  }
}

.vPager__btn {
  display: inline-block;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  line-height: 1;
  transition: border 0.3s $easing, background 0.3s $easing, color 0.3s $easing;

  @include media-min {
    padding: 7px 8px 8px;

    &:hover,
    &:focus {
      background: #f0f0f0;
    }
  }

  @include media-max {
    padding: 10px 11px 11px;
  }
}

.-small .vPager__btn {
  border-radius: 50%;
  padding: 0;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;

  @include media-min {
    width: 14px;
    height: 14px;
  }

  @include media-max {
    width: 16px;
    height: 16px;
  }
}

.vPager__btn[aria-current='true'] {
  border-color: $color-theme;
  background: $color-theme;
  color: #fff;
}
</style>
