<template>
  <div :class="[{ 'skeleton-loading':active }, 'square-list']">
    <div class="square skeleton-bac-animation"
         :style="{
           'backgroundColor': backColor,
           'width': boxProperties.width ? boxProperties.width : '100%',
           'height': boxProperties.height ? boxProperties.height : '16px',
           'marginTop': boxProperties.top ? boxProperties.top : '0',
           'marginBottom': boxProperties.bottom ? boxProperties.bottom : '0'
         }" />
  </div>
</template>

<script>
export default {
  props: {
    backColor: {
      type: String,
      default: 'rgba(144, 147, 153, 0.3)'
    },
    boxProperties: {
      type: Object,
      default() {
        return {
          width: '100%',
          height: '16px',
          top: '0',
          bottom: '0'
        }
      }
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.square-list {
  width: 100%;
  margin-top: 16px;
  display: inline-block;
}
.square {
  border-radius: 5px;
}
.skeleton-loading {
  position: relative;
  width: 100%;
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
