# Halo 标记

## 代码演示

#### 基本用法

::: code

<!-- `color` 选取颜色 -->
<template>
    <a-halo></a-halo></br>
    <a-halo color='#f50' >#f50</a-halo></br>
    <a-halo color='#2db7f5' >#2db7f5</a-halo></br>
    <a-halo color='#87d068' >#87d068</a-halo></br>
    <a-halo color='#108ee9' >#108ee9</a-halo></br>
</template>
:::

::: code

<!-- 使用 `halo` 使Badge出现光晕 -->

<template>
    <a-halo halo></a-halo></br>
    <a-halo color='#f50' halo>#f50</a-halo></br>
    <a-halo color='#2db7f5' halo>#2db7f5</a-halo></br>
    <a-halo color='#87d068' halo>#87d068</a-halo></br>
    <a-halo color='#108ee9' halo>#108ee9</a-halo></br>
</template>
:::

## Api

#### Halo

| 参数  | 说明     |  类型   | 默认值 |
| :---: | :------- | :-----: | :----: |
| color | 颜色     | String  |        |
| halo  | 出现光晕 | Boolean | false  |
