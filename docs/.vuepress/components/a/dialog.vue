<!--  -->
<template>
  <el-dialog v-bind="$attrs"
             :visible.sync="dialogVisible"
             append-to-body
             @close="handleClose"
             v-on="$listeners">
    <slot ref="content" />
    <span slot="footer">
      <slot name="footer" />
    </span>
  </el-dialog>
</template>

<script>

export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: this.visible
    }
  },
  computed: {},
  watch: {
    visible(newVal, oldVal) {
      this.dialogVisible = newVal
    },
    dialogVisible: {
      handler: function (newVal, oldVal) {
        this.$emit('update:visible', newVal)
      },

      deep: true
    }

  },

  created() {

  },
  mounted() {

  },
  methods: {

    handleClose() {
      if (this.$slots.default[0].context.$refs.dataForm) {
        this.$slots.default[0].context.$refs.dataForm.resetFields()
      }
      this.dialogVisible = false
    }
  }

}
</script>
<style lang='scss' scoped>
</style>
