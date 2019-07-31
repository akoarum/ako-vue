<template>
  <div :class="styledClasses" class="vSelect">
    <button
      ref="handler"
      :id="`select-${_uid}`"
      :aria-controls="`select-${_uid}-popup`"
      :aria-expanded="String(isVisible)"
      @click="isVisible = !isVisible"
      type="button"
      class="vSelect__btn"
    >
      {{ selectedLabel }}
    </button>
    <transition name="popup">
      <div
        v-show="isVisible"
        :id="`select-${_uid}-popup`"
        :aria-hidden="String(!isVisible)"
        :aria-labelledby="`select-${_uid}`"
        class="vSelect__popup"
      >
        <ul class="vSelect__options">
          <template v-for="option in options">
            <li :key="option.id" class="vSelect__optionItem">
              <label @click="stopClose" class="vSelect__option">
                <input
                  v-model="model"
                  :value="option.value"
                  type="radio"
                  class="vSelect__input"
                />
                <span class="vSelect__label">{{ option.label }}</span>
              </label>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { FormOption } from '~/models/FormOption'

interface Data {
  isVisible: boolean
}

export default Vue.extend({
  model: {
    event: 'change'
  },
  props: {
    options: { type: Array as PropType<FormOption[]>, required: true },
    value: { type: String, required: true },
    dark: { type: Boolean }
  },
  data(): Data {
    return {
      isVisible: false
    }
  },
  computed: {
    model: {
      get(): string {
        return this.value
      },
      set(newValue: string) {
        this.$emit('change', newValue)
        this.isVisible = false
      }
    },
    selectedLabel(): string {
      if (!this.value) return '選択してください'
      return this.options.find(option => option.value === this.value).label
    },
    styledClasses(): string[] {
      const classes: string[] = []

      if (this.dark) classes.push('-dark')

      return classes
    }
  },
  watch: {
    isVisible(newValue) {
      this.$nextTick(() => {
        if (newValue) {
          document.addEventListener('click', this.closePopup)
        } else {
          document.removeEventListener('click', this.closePopup)
        }
      })
    }
  },
  methods: {
    closePopup(e: MouseEvent) {
      if (e.target === this.$refs.handler) return
      e.stopPropagation()
      this.isVisible = false
    },
    stopClose(e: MouseEvent) {
      e.stopPropagation()
    }
  }
})
</script>

<style lang="scss" scoped>
.vSelect {
  position: relative;
  display: inline-block;
}

.vSelect__btn {
  position: relative;
  display: block;
  border: none;
  border-radius: 17px;
  padding: 9px 30px 10px 16px;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    right: 2px;
    content: 'keyboard_arrow_down';
    font-family: 'Material Icons';
    font-size: 2.4rem;
    transform: translateY(-50%);
    transition: transform 0.3s $easing;
  }
}

[aria-expanded='true']::before {
  transform: translateY(-50%) rotate(180deg);
}

.-dark .vSelect__btn {
  background: $color-base;
  color: #fff;
}

.vSelect__popup {
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  max-height: 100vh;
  background: #fff;
  overflow-y: auto;
}

.-dark .vSelect__popup {
  background: $color-base;
  color: #fff;
}

.vSelect__option {
  position: relative;
  display: block;
  cursor: pointer;
  transition: background 0.3s $easing;

  &:hover,
  &:focus {
    background: $color-theme;
  }
}

.vSelect__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 5px;
  opacity: 0;
}

.vSelect__input:checked + .vSelect__label {
  background: $color-theme;
}

.vSelect__label {
  display: block;
  padding: 8px 16px 9px;
  font-size: 16px;
  line-height: 1;
  white-space: nowrap;
}

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s $easing;
}

.popup-enter,
.popup-leave-to {
  opacity: 0;
}
</style>
