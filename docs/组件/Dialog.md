# Dialog 对话框

封装 element 的 el-dialog 组件，可以使用其所有的属性与方法，

特点：

- 关闭时自动清除表单校验，并且重置表单

::: tip 注意

对话框下的表单组件，ref 取名为`dataForm`
:::

<common-code title="基本用法" description="基本按钮用法">
  <highlight-code slot="code" lang='vue'>
    <template>
      <div class="demo-button">
        <div>
          <dt-button>默认按钮</dt-button>
          <dt-button type="primary">主要按钮</dt-button>
          <dt-button type="success">成功按钮</dt-button>
          <dt-button type="info">信息按钮</dt-button>
          <dt-button type="warning">警告按钮</dt-button>
          <dt-button type="danger">危险按钮</dt-button>
        </div>
      </div>
    </template>
  </highlight-code>

</common-code>
