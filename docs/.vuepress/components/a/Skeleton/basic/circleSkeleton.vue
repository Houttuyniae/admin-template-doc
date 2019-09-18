<template>
  <div :class="[{ 'skeleton-loading':active }, 'circle-warpper']">
    <div ref="circle"
         class="circle skeleton-bac-animation"
         :style="{
           'backgroundColor': backColor,
           'width': diameter,
           'height': height
         }" />
  </div>

</template>

<script>
export default {
  props: {
    backColor: {
      type: String,
      default: '#e7e7e7'
    },
    diameter: {
      type: String,
      default: '40px'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: '40px'
    }
  }

}
</script>

 <style lang="scss" scoped>
.circle-warpper {
  width: 66px;
  padding-top: 5px;
  height: 100%;
  .circle {
    border-radius: 50%;
    display: inline-block;
  }
}

.skeleton-loading {
  position: relative;
  @keyframes backpos {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }

  .skeleton-bac-animation {
    z-index: auto;
    width: 100%;
    height: 100%;
    // 90deg 向左旋转90度    #f2f2f2 25% 还是起始位置
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    background-repeat: no-repeat;
    -webkit-animation: backpos 1.4s ease infinite;
    -o-animation: backpos 1.4s ease infinite;
    animation: backpos 1.4s ease infinite;
  }
}
</style>
