# Input 输入

封装 element 的 el-button 组件，可以使用其所有的属性与方法，

特点:

- 当使用 Api 请求时，添加 `loading:true`属性，该按钮讲自动开启 loading，并且自动关闭。

- 二次确认。

## 代码演示

#### 基本用法

::: code

<template>
  <div>
    <div style='margin-bottom:20px'>
        <el-switch
            v-model="edit">
        </el-switch>
    </div>
    <div style='display:inline-block;width:200px'>
        <a-input v-model='value' :edit='edit' >
            {{value}}
        </a-input>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        value:"123",
        edit:false
    }
  },
  methods: {

  }
}
</script>

:::

#### 时间选择

::: code

<template>
  <div>
    <div style='margin-bottom:20px'>
        <el-switch
            v-model="timeEdit">
        </el-switch>
    </div>
    <div style='display:inline-block;width:200px'>
        <a-input v-model='time' type='time' :edit='timeEdit' >
            {{time}}
        </a-input>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        time:"01:00",
        timeEdit:false
    }
  },
  methods: {

  }
}
</script>

:::

## Attributes

|  参数   | 说明                   |  类型   | 默认值 |
| :-----: | :--------------------- | :-----: | :----: |
| confirm | 点击按钮时给予二次确认 | Boolean | false  |

## Events

| 事件名称 | 说明             | 回调参数 |
| :------: | :--------------- | :------: |
| callback | 点击按钮触发回调 |    无    |

::: tip

<script>

export default {
  data() {
    return {
        time:"01:00",
        timeEdit:false,
        value:"123",
        edit:false
    }
  },
  methods: {

  }
}
</script>

:::
