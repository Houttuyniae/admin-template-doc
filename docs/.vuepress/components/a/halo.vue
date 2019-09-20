<!--  -->
<template>
  <div class="halo-main-container">
    <div class="container">
      <div :class="halo?'hale-circle':'circle'"
           :style="{'background':color,'border-color':color}" />
      <div style="display:inline-block">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      default: () => { }
    },
    halo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },

  methods: {

  }
}
</script>
<style lang='scss' scoped>
.halo-main-container {
  display: inline-block;
}

.container {
  display: inline-block;
  margin-right: 3px;
}

.hale-circle {
  background: #1890ff;
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: middle;
  border-radius: 50%;
  &:after {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 50%;
    -webkit-animation: myfirst 1.2s infinite ease-in-out;
    animation: myfirst 1.2s infinite ease-in-out;
    content: "";
  }
}

.circle {
  background: #1890ff;
  position: relative;
  top: -1px;
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: middle;
  border-radius: 50%;
}

@keyframes myfirst {
  0% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.6);
    opacity: 0;
  }
}
</style>
