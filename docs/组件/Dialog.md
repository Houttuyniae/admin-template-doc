# Dialog 对话框

封装 element 的 el-dialog 组件，可以使用其所有的属性与方法，

特点：

- 关闭时自动清除表单校验，并且重置表单

对话框下的表单组件，ref 取名为`dataForm`

::: code

<!-- 对话框下的表单组件，ref 取名为`dataForm` -->

<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <a-dialog :visible.sync="dialogVisible" >
      <el-form :inline="true" :model="formInline" class="demo-form-inline" ref='dataForm'>
        <el-form-item label="审批人" prop='user'>
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop='region'>
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </a-dialog>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      dialogVisible:false,
      formInline: {
          user: '',
          region: ''
        }
    }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      }
  }
}
</script>

:::

::: warning 警告

1. 需要等弹窗打开后在进行赋值，否则重组表单后还是赋值的数据，
   使用 `this.$nextTick`

2. 需要为`<el-form-item></el-form-item>`添加`prop`属性

:::
