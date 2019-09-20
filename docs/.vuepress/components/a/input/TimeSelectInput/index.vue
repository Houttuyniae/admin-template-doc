<!--  -->
<template>
  <el-time-select v-bind="$attrs"
                  class="a-input-edit-1"
                  :picker-options="{
                    start: '00:00',
                    step: '01:00',
                    end: '24:00'
                  }"
                  placeholder="选择时间"
                  v-on="$listeners" />
</template>

<script>

export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    handleModelDatePick(event) {
      const value = event
      this.$emit('input', value)
      if (this.$parent.$options.componentName === 'ElFormItem') {
        if (this.validateEvent) {
          this.$parent.$emit('el.form.change', [value])
        }
      }
      this.$emit('change', value)
    },

    handleDatePickBlur(event) {
      if (this.$parent.$options.componentName === 'ElFormItem') {
        if (this.validateEvent) {
          this.$parent.$emit('el.form.blur', [this.currentValue])
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
