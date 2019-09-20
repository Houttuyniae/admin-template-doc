# Table 表格

通过配置 columns 来实现表格的自动构建

## Props 说明

|    Attribute     | Description                                           |   Type   | Default  |
| :--------------: | :---------------------------------------------------- | :------: | :------: |
|       data       | 原始展示数据                                          |  Array   |    []    |
|     columns      | 列属性                                                |  Array   |    []    |
|      index       | 是否需要序号                                          | Boolean  |   true   |
|      tools       | 是否工具栏                                            | Boolean  |   true   |
|   showCheckbox   | 多选框                                                | Boolean  |  false   |
|    treeTable     | 默认是否是树形表格                                    | Boolean  |  false   |
| defaultExpandAll | 默认是否全部展开（treeTable 下有效）                  | Boolean  |  false   |
| defaultChildren  | 指定子树为节点对象的某个属性值(treeTable 下有效 )     |  String  | children |  |
|      indent      | 相邻级节点间的水平缩进，单位为像素(treeTable 下有效 ) |  Number  |    50    |
|   filterMethod   | 过滤表格(treeTable 下有效 )                           | Function |          |

> 任何 `el-table` 的属性都支持，例如`border`、`fit`、`size`或者`@select`、`@cell-click`等方法。详情属性见`el-table`文档。

---

### 普通表格代码示例

```html
<a-custom-table :data="data" :columns="columns" border></a-custom-table>
```

#### data(**必填**)

```js
const data = [
  {
    id: '210000199702103371',
    title: 'Wicn ',
    status: 'draft',
    author: 'name',
    display_time: '1992-11-09 09:14:27',
    pageviews: 755
  },
  {
    id: '370000198105097735',
    title: 'Quqtdn',
    status: 'published',
    author: 'name',
    display_time: '1999-07-26 20:14:20',
    pageviews: 1395
  }
]
```

## columns(**必填**)

|  Attribute   | Description                                                      |                  Type                   | Default |
| :----------: | :--------------------------------------------------------------- | :-------------------------------------: | :-----: |
|    label     | 显示在表头的文字                                                 |                 String                  |         |
|     key      | 对应的 value                                                     |                 String                  |         |
|    width     | 每列的宽度，为一个数字(可选)。例如`200`                          |                 Number                  |         |
|    align     | 对齐方式 `left/center/right`                                     |                 String                  | center  |
| header-align | 表头对齐方式 `left/center/right`                                 |                 String                  |         |
| valueFormat  | 时间戳格式化 `timestamp` 或者全局的 filter                       |                 String                  |         |
|  formatter   | 用来格式化内容                                                   | Function(row, column, cellValue, index) |   50    |
|    fixed     | 列是否固定在左侧或者右侧，true 表示固定在左侧`true, left, right` |             String, Boolean             |         |
|    render    | 用于构建自定义表格内容                                           |           Function(h, params)           |         |
|    expand    | 是否展开树形表格                                                 |                 Boolean                 |         |

```javascript
const  columns: [
        {
          label: '时间',
          key: 'display_time'
        },
        {
          label: '标题',
          key: 'title',
          render: (h, params) => {
            return (
              <a style=' color: #1890ff;text-decoration: none;background-color: transparent;outline: none;cursor: pointer;transition: color 0.3s;'>
                {params.row.title}
              </a>
            )
          }
        },
        {
          label: '作者',
          key: 'author'
        },
        {
          label: '阅读数',
          key: 'pageviews'
        },
        {
          label: '状态',
          key: 'status',
          render: (h, params) => {
            const row = params.row
            if (row.status === 'draft') {
              return <el-tag>draft</el-tag>
            } else if (row.status === 'deleted') {
              return <el-tag>draft</el-tag>
            } else {
              return <el-tag>draft</el-tag>
            }
          }
        },
        {
          label: '操作',
          key: 'operation',
          render: (h, params) => {
            return (
              <p>
                <el-button size='mini' type='primary'>
                  编辑
                </el-button>
                <el-button size='mini' type='success'>
                  发布
                </el-button>
              </p>
            )
          }
        }
      ]
```

## Table Events

| Attribute | Description                |
| :-------: | :------------------------- |
|  refresh  | 刷新表格(传入刷新数据方法) |  |  |

## Table Slots

| Attribute | Description  | Type | Default |
| :-------: | :----------- | :--: | :-----: |
|   alert   | 表格提示信息 |      |         |

> 树表组件将会根据 columns 的 key 属性生成具名插槽，如果你需要对列数据进行自定义，通过插槽即可实现

## 其他

如果有其他的需求，请参考[el-table](http://element-cn.eleme.io/#/en-US/component/table)的 api 自行修改 index.vue
