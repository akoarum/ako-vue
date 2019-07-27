<template>
  <time class="vDate" :datetime="datetime">{{ viewDate }}</time>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    datetime: { type: Date, required: true }
  },
  computed: {
    viewDate(): string {
      let dateString: string = ''
      const date = (this.datetime as unknown) as Date

      dateString += `${date.getFullYear()}年`
      dateString += `${date.getMonth() + 1}月`
      dateString += `${date.getDate()}日 `
      dateString += `${date.getHours()}時`
      dateString += `${date.getMinutes()}分`

      return dateString
    }
  }
})
</script>

<style lang="scss" scoped>
.vDate {
  font-size: 1.4rem;
  line-height: 1.2;
  color: #484848;
}
</style>
