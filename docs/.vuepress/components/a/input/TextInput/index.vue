<!--  -->
<template>
  <el-input v-bind="$attrs"
            class="a-input-edit-1"
            v-on="$listeners"
            @blur="handleDatePickBlur"
            @input="handleModelDatePick">
    <span slot="suffix">
      <slot name="suffix" />
    </span>
  </el-input>
</template>

<script>

export default {
  name: 'TextInput',
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
.a-input-edit-1 {
  /deep/ {
    input {
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;

      &:hover {
        border-bottom: 2px solid #3963bc;
      }
    }
    .el-input__inner {
      position: relative;
      top: -11px;
    }
  }
}
</style>
