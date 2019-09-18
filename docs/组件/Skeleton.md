# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合.

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。

- 图文信息内容较多的列表/卡片中。

- 只适合用在第一次加载数据的场景。

- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

#### 基本用法

最简单的占位效果。

::: code

<template>
  <a-skeleton :loading="loading"/>
</template>

<script>

export default {
  data() {
    return {
        loading:true
    }
  },
  methods: {

  }
}
</script>

:::

#### 复杂的组合

::: code

<template>
  <a-skeleton :loading="loading" title avatar :paragraph="{rows: 4}"/>
</template>

<script>

export default {
  data() {
    return {
        loading:true
    }
  },
  methods: {

  }
}
</script>

:::

#### 动画效果

显示动画效果。

::: code

<template>
  <a-skeleton :loading="loading" active/>
</template>

<script>

export default {
  data() {
    return {
        loading:true
    }
  },
  methods: {

  }
}
</script>

:::

#### 加载占位符

加载占位图包含子组件。

::: code

<template>
    <div>
        <el-switch
            v-model="loading">
        </el-switch>
        <a-skeleton :loading="loading" active>
           <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </a-skeleton>
    </div>

</template>

<script>

export default {
  data() {
    return {
        loading:true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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

## Api

#### Skeleton

|  参数   | 说明                   |  类型   | 默认值 |
| :-----: | :--------------------- | :-----: | :----: |
| confirm | 点击按钮时给予二次确认 | Boolean | false  |
