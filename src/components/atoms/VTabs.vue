<template>
  <ul role="tablist" class="vTabs">
    <template v-for="tab in tabs">
      <li :key="tab.id" role="presentation" class="vTabs__item">
        <template v-if="link">
          <router-link :to="tab.to" role="tab" class="vTabs__tab">
            <span>{{ tab.label }}</span>
          </router-link>
        </template>
        <template v-else>
          <button
            type="button"
            role="tab"
            class="vTabs__tab"
            :aria-selected="String(tab.to === current)"
            :aria-controls="tab.to.replace(/^#(.*?)$/, '$1')"
            @click="$emit('click', tab.to)"
          >
            <span>{{ tab.label }}</span>
          </button>
        </template>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Tab } from '~/models/Tab'

export default Vue.extend({
  props: {
    tabs: { type: Array as PropType<Tab[]>, required: true },
    tag: { type: String, default: 'button' },
    current: { type: String, required: true },
    link: { type: Boolean }
  }
})
</script>

<style lang="scss" scoped>
.vTabs {
  display: flex;
}

.vTabs__tab {
  position: relative;
  font-size: 1.4rem;
  line-height: 1.4;
  transition: background 0.3s $easing;

  @include media-min {
    padding: 8px 16px 10px;

    &:hover,
    &:focus {
      background: #f0f0f0;
    }
  }

  @include media-max {
    padding: 8px 12px 10px;
  }
}

.vTabs__tab::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: $color-theme;
  opacity: 0;
  transition: opacity 0.3s $easing;
}

.vTabs__tab[aria-selected='true'] {
  color: $color-theme;
}

.vTabs__tab[aria-selected='true']::before {
  opacity: 1;
}
</style>
