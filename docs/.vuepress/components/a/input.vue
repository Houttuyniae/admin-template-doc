<!--  -->
<template>
  <div :style="{width:width}">
    <span v-if="!edit">
      <slot />
    </span>
    <component :is="componentName"
               v-else
               v-bind="$attrs"
               v-on="$listeners">
      <span slot="suffix">
        <slot name="suffix" />
      </span>
    </component>
  </div>

</template>

<script>
import TextInput from './input/TextInput/index'
import TimeSelectInput from './input/TimeSelectInput/index'
export default {
  components: { TextInput, TimeSelectInput },
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    componentName() {
      const typeMap = new Map()
      typeMap.set('text', 'TextInput')
      typeMap.set('time', 'TimeSelectInput')
      typeMap.set('citySelect', 'CitySelectInput')
      return typeMap.get(this.type)
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
</style>
