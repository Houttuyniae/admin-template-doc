<!--  -->
<template>

  <div :class="classObject">
    <el-tabs :tab-position="tabPosition"
             class="a-tabs"
             v-bind="$attrs"
             v-on="$listeners">
      <slot />

    </el-tabs>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    tabPosition: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    classObject() {
      return {
        'a-menu-list': this.tabPosition === 'left',
        'b-menu-list': this.tabPosition === 'top'
      }
    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.a-menu-list {
  /deep/.el-tabs__nav-scroll {
    width: 224px;
    /deep/ &:after {
      width: 1px !important;
    }
  }

  /deep/ .el-tabs--left {
    position: relative;
    height: 100%;

    /deep/.el-tabs__header {
      //   position: absolute;
      height: 800px;
    }
  }

  /deep/.el-tabs--left .el-tabs__item.is-left {
    text-align: left !important;
  }

  /deep/ .el-tabs__active-bar {
    border-right: 3px solid #1890ff;
  }
  /deep/ .is-active {
    background-color: #e6f7ff;
  }

  /deep/ .el-tabs__item {
    padding-left: 24px;
  }
}

.b-menu-list {
  /deep/ .el-tabs__nav-scroll {
    padding: 15px 50px 0px 50px;
    background: white;
  }
  /deep/ .el-tabs__nav {
    height: 50px;
  }
}
</style>
