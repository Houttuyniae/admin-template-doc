<!--  -->
<template>
  <el-button v-bind="$attrs"
             @click="click"
             v-on="$listeners">
    <slot />
  </el-button>
</template>

<script>

export default {
  props: {
    confirm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    loading() {
      // return this.$store.getters.buttonLoading
    }
  },
  methods: {

    /**
     * 二次确认
     */
    confirmEvent() {
      this.$confirm('是否继续该操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$emit('callback')
        })
        .catch(() => { })
    },

    /**
     * 按钮提示时间
     */
    click() {
      if (this.confirm) {
        this.confirmEvent()
      } else {
        this.$emit('callback')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
