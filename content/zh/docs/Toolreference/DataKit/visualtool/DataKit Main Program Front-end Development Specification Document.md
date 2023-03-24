## 技术选型

- vue3
- 构建工具vue-cli
- UI框架arco.design
- 路由vue-router
- 状态管理器pinia
- 图表echarts

## 开发与部署

推荐使用yarn包管理工具

### **安装依赖**

```Bash
yarn
```

### **开发环境**

```Bash
# 配置.env.development中的VUE_APP_BASE_API，默认为访问接口地址的/dev-api
# 访问本地后端服务，需修改vue.config.js的proxy的target地址
yarn dev
```

### **生产构建**

```Bash
yarn build
```

### **代码校验**

```Bash
yarn lint
```

## 开发规范

### **开发工具**

- 统一使用vs code开发
- 前端依赖包安装使用yarn，镜像源使用淘宝镜像
- 编码时tab统一为2个空格

### **命名规范**

- 组件目录使用小驼峰命名方式，多单词拼接首字母写，如：userInfo
- 组件文件名使用大驼峰命名方式，多单词拼接首字母写，如：Manage.vue
- 变量名、方法名遵循驼峰命名规则：多单词拼接首字母写，如：userInfo
- 变量声明（let，const），定义常量使用const，定义变量尽量使用let

### **使用ts es6风格进行编码**

- 解构赋值
- 箭头函数
- 正确使用模块，如果模块只有一个输出值，就使用 export default，如果模块有多个输出值，就不使用 export default，export default 与普通的 export 尽量不要同时使用
- 多个异步操作时使用Promise对象进行封装
- 除了三目运算，if,else 等禁止简写
- 有ts红色警告的地方需要进行处理

### **注释规则**

- 公共组件的使用说明
- 各组件中响应变量、重要函数或者类的说明
- 复杂的业务逻辑处理说明
- 已注释掉的代码要说明注释原因
- 多重 if 判断语句需添加说明
- 注释块必须以/**多行说明 */，单行注释使用//

### **指令规范**

- v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
- 避免 v-if 和 v-for 同时用在一个元素上
- props 定义应该尽量详细

### **目录说明**

- api 前端接口目录，其中interceptor.ts为统一拦截器
- assets 静态文件如图片及公共样式，icons为svg图标，images是png图片目录，style为公共样式
- components 公共组件目录
- config 全局配置，主题、菜单获取方式、菜单宽度、菜单是否默认收起等
- hooks 公共钩子方法
- layout 布局组件
- router 前端路由，菜单若采用了后端接口获取，此目录作为前端开发时使用的路由配置
- store 状态管理目录，使用的是pinia
- types ts类型配置目录
- utils 公共工具目录
- views 页面目录，按文件夹划分，单个页面中使用的业务组件，需新建components文件夹放在其中

### **样式规范**

- 界面级别vue组件使用统一dom结构

```HTML
<template>
  <div class="app-container">
    <div class="main-bd">
      <!-- 其他html -->
    </div>
  </div>
</template>

<!-- 样式统一按如下形式包裹起来，只有一级 -->
<style lang="less" scoped>
  .app-container {
    .main-bd {
      /* 其他样式 */
    }
  }
</style>
```

- 组件的dom结构

```HTML
<template>
  <div class="${组件名}-container">
    <!-- ${组件名}是要替换的，如user-dialog -->
    <!-- 其他html -->
  </div>
</template>

<!-- 样式统一按如下形式包裹起来，只有一级 -->
<style lang="less" scoped>
  .user-dialog-container {
    /* 其他样式 */
  }
</style>
```

- 颜色值统一用css变量，不另外写色值，便于颜色的统一管理
- 自定义的css变量统一在src/assets/style/global.less文件里面管理

### **提交规范**

- 提交前先更新代码
- 提交前执行yarn lint进行代码格式校验
- 提交说明须简要描述当次提交的内容