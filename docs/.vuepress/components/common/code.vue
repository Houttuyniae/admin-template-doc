<template>
  <div class="demo-block">

    <div class="source">
      <div>
        <slot name='demo'></slot>
      </div>
    </div>
    <div v-if="isShow"
         class="meta">
      <div class="description"
           v-if='textBlock'>
        <div>
          <p v-html='description'></p>
        </div>
      </div>
      <slot name="code"></slot>
    </div>
    <div class="demo-block-control"
         @click="handleToggleShow">
      <i class="el-icon-caret-top"></i>
      <span>{{codeTextBtn}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  props: {
    textBlock: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  },
  computed: {
    description() {
      const n = (this.textBlock.split('`')).length - 1;
      let text = ''
      for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
          text = this.textBlock.replace('`', '<code>')
        } else {
          text = text.replace('`', '</code>')
        }
      }
      console.info()
      return text;
    }
  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-default-content code {
  color: #476582;
  padding: 0;
  margin: 0;
  font-size: 0.85em;
}

.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-bottom: 24px;
  margin-top: 20px;

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, SimSun, sans-serif;
      font-weight: 400;
    }

    code {
      color: #5e6d82 !important;
      background-color: #e6effb !important;
      margin: 0 4px;
      display: inline-block;
      border: 1px solid #eaeefb;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .source {
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    // height: 0;
    transition: height 0.2s;
  }

  .demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &:hover {
      color: #409eff;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
    }

    span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: none;
    }
  }
}

.demo-block {
  &:hover {
    .demo-block-control {
      i {
        display: none;
      }
      span {
        display: inline-block;
      }
    }
  }
}
</style>
