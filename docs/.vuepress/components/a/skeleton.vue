<template>
  <div class="vue-skeleton-loading">
    <div v-if="loading"
         style="display:flex">
      <circle-Skeleton v-if="avatar"
                       :active="active" />
      <div style="width:100%">
        <square-skeleton v-if="titleProps.disable === true"
                         style="padding-bottom:7px"
                         :active="active"
                         :box-properties="titleProps.boxOptions" />

        <square-skeleton v-for="(i,index) in paragraphOptions.rows"
                         :key="i"
                         :active="active"
                         :box-properties="paragraphOptions.boxOptions[index]" />
      </div>
    </div>
    <slot v-else />
  </div>
</template>

<script>
import circleSkeleton from './Skeleton/basic/circleSkeleton'
import squareSkeleton from './Skeleton/basic/squareSkeleton'
export default {
  components: {
    circleSkeleton,
    squareSkeleton
  },
  props: {
    paragraph: {
      type: Object,
      default: function () {
        return { rows: 3, width: [100, 100, 70] }
      }
    },
    active: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    },
    title: {
      type: [Object, Boolean],
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {

    titleProps() {
      if (typeof this.title === 'boolean') {
        return {
          boxOptions: {
            width: '50%'
          },
          disable: this.title
        }
      } else {
        return {
          boxOptions: {
            width: '50%'
          },
          disable: true
        }
      }
    },

    paragraphOptions() {
      const paragraphOptions = {
        rows: this.paragraph.rows,
        boxOptions: []
      }
      const widthType = this.paragraph.width

      if (!widthType) {
        for (let i = 0; i < this.paragraph.rows - 1; i++) {
          paragraphOptions.boxOptions.push({ width: 100 + '%' })
        }
        paragraphOptions.boxOptions.push({ width: 70 + '%' })
      } else {
        if (widthType instanceof Array) {
          for (const width of widthType) {
            paragraphOptions.boxOptions.push({ width: width + '%' })
          }
        } else {
          for (let i = 0; i < this.paragraph.rows; i++) {
            paragraphOptions.boxOptions.push({ width: widthType + '%' })
          }
        }
      }

      return paragraphOptions
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-skeleton-loading {
  position: relative;
  width: 100%;
  @keyframes backpos {
    from {
      background-position-x: -200px;
    }

    to {
      background-position-x: calc(200px + 100%);
    }
  }
  .skeleton-bac-animation {
    position: absolute;
    z-index: auto;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    );
    background-size: 30% 100%;
    background-repeat: no-repeat;
    -webkit-animation: backpos 0.9s ease-in-out 0s infinite;
    -o-animation: backpos 0.9s ease-in-out 0s infinite;
    animation: backpos 0.9s ease-in-out 0s infinite;
  }
}
</style>
