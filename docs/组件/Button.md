# Button 按钮

封装 element 的 el-button 组件，可以使用其所有的属性与方法，

特点:

- 当使用 Api 请求时，添加 `loading:true`属性，该按钮讲自动开启 loading，并且自动关闭。

- 二次确认。

### 二次确认

提供 confirm 选项，进行二次确认。

::: code

<template>
  <a-button confirm @callback='call' type='primary'>comfirm</a-button>
</template>

<script>

export default {
  components: {},
  data() {
    return {

    }
  },
  methods: {
    call() {
      console.info("触发点击事件")
    }
  }
}
</script>

:::

### 请求等待

通过封装的 axios 以及在 vuex 中的一个全局变量，来控制 button 的等待操作，无需在进行代码控制。

```js
export function editOpen(data) {
  return request({
    url: '/mp/config/update',
    method: 'post',
    data,
    loading: true
  })
}
```

## Attributes

|  参数   | 说明                   |  类型   | 默认值 |
| :-----: | :--------------------- | :-----: | :----: |
| confirm | 点击按钮时给予二次确认 | Boolean | false  |

## Events

| 事件名称 | 说明             | 回调参数 |
| :------: | :--------------- | :------: |
| callback | 点击按钮触发回调 |    无    |
