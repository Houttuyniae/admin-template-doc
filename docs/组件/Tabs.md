# Tabs 标签页

## 代码演示

#### 基本用法

默认位置是`left`,修改了`element tabs`的样式，已`ant-design`为准。

::: code

<template>
    <a-tabs v-model="activeName"  @tab-click="handleClick" style='height:200px'>
        <el-tab-pane label="基础信息" name="first">
            基础信息
        </el-tab-pane>
        <el-tab-pane label="账号绑定" name="second">
            账号绑定
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="third">
            修改密码
        </el-tab-pane>
    </a-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

:::

#### Top 位置

位置方向为`Top`

::: code

<template>
    <a-tabs  tab-position="top"   style='height:200px'>
        <el-tab-pane label="我的行程" >
            我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心" >
            消息中心
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿" >
            定时任务补偿
        </el-tab-pane>
    </a-tabs>
</template>

:::

## Api

#### Tabs

|     参数     | 说明                            |  类型  | 默认值 |
| :----------: | :------------------------------ | :----: | :----: |
| tab-position | 页签位置，可选值有 `top` `left` | String |  left  |
