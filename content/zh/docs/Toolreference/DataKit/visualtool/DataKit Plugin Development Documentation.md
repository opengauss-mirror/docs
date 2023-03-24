# 插件分类

**增强插件**：不能独立运行的插件，而是对现有某功能的增强，包括数据和接口实现，因此又可以细分为接口扩展和数据扩展。插件调用通常是在某个业务选项列表中增加可选项，选择后进行调用或者使用。

> **接口扩展**：插件本身包含数据和业务逻辑，数据通常在插件安装时添加到主程序的数据表中，业务逻辑在主程序中类似于service方法一样的调用。
>
> **数据扩展**：插件只包含数据，在插件安装时添加到主程序的数据表中。比如通过插件添加某一类数据资源等。

**功能插件**：能独立运行的插件，独立实现某个完整的功能或操作，比如某某模块。插件调用通常是在系统内添加菜单入口。

# 插件开发

## 集成配置

### 引入依赖

#### 引入SpringBoot依赖

- 如果插件的`spring-boot`版本与主程序**一致**，则引入如下依赖

```XML
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>2.5.6</version>
</dependency>
```

- 如果插件的`spring-boot`版本与主程序**不一致**，则引入如下依赖

```XML
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>${spring-boot.version}</version>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-aop</artifactId>
  <version>${spring-boot.version}</version>
</dependency>
```

**推荐跟主程序的springboot保持一致版本！**

#### 引入插件依赖

```XML
<dependency>
  <groupId>com.gitee.starblues</groupId>
  <artifactId>spring-brick-bootstrap</artifactId>
  <version>3.1.0</version>
</dependency>
```

#### 引入主程序依赖

```XML
<dependency>
    <groupId>org.opengauss</groupId>
    <artifactId>visualtool-service</artifactId>
    <version>5.0.0</version>
    <!--如果不需要操作数据库和redis，则排除以下依赖-->
    <exclusions>
        <exclusion>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
        </exclusion>
        <exclusion>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
        </exclusion>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </exclusion>
        <exclusion>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

#### 定义插件引导类

> 注意：插件引导类包必须在主程序的包名之下，主程序的包名是org.opengauss.admin，因此插件的引导类必须在org.opengauss.admin.xxx之下。

定义插件`main`入口类,  继承`SpringPluginBootstrap`类,  然后在`main`函数中实例化当前引导类，并执行`run`方法即可。实现如下:

```Java
//如果不需要操作数据库和redis，则关闭掉相关的自动装配
@SpringBootApplication(exclude={
        DataSourceAutoConfiguration.class,
        HibernateJpaAutoConfiguration.class,
        RedisAutoConfiguration.class,
        RedisRepositoriesAutoConfiguration.class
})
public class EmailNoticeApplication extends SpringPluginBootstrap {

    public static void main(String[] args) {
        new EmailNoticeApplication().run(args);
        System.out.printf("邮件通知插件启动成功");
    }
}
```

## 接口扩展插件开发

实现主程序中定义的接口，并在各个方法中完成相应的业务逻辑，同时在类上面加上注解@Extract，配置该插件独有的标识，该标识在主程序中调用时需要用到。

@Extract(bus = "业务标识", scene="场景标识", useCase="用例标识")

> bus：业务标识（必填），比如notice
>
> scene：场景标识（选填），比如smsNotice
>
> useCase：用例标识（选填），比如smsNotice

案例：

```Java
@Extract(bus = "notice", scene = "emailNotice")
public class EmailNoticeServiceImpl implements NoticeExtract {

    @Override
    public void send(NoticeDTO noticeDTO) {
        System.out.println("通过邮件发送通知，地址是是：" + noticeDTO.getEmail() + ",消息内容是：" + noticeDTO.getContent());
    }
}
```

## 数据扩展插件开发

1. 定义监听类，在启动和停止事件中，调用主程序菜单接口的添加和删除方法。菜单接口说明详见文档[主程序开放接口](https://fullstack-dao.feishu.cn/docx/doxcnIa9e0ChR4bJWlx4IyBfzjf)

> 在Listener中无法使用@Autowired或者@Resource注入业务操作service，因此只能通过注入主程序Bean的第三种方式获取。

案例：

```Java
public class ImplListener implements ApplicationListener<ApplicationEvent> {

    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        if (event instanceof ApplicationEnvironmentPreparedEvent) {
            System.out.println("扩展实现初始化环境变量");
        } else if (event instanceof ApplicationPreparedEvent) {
            System.out.println("扩展实现环境初始化完成");
        } else if (event instanceof ContextRefreshedEvent) {
            System.out.println("扩展实现ApplicationContext被刷新");
        } else if (event instanceof ApplicationReadyEvent) {
            MainApplicationContext context = ((ApplicationReadyEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
            SpringBeanFactory factory = context.getSpringBeanFactory();
            ISysPluginResourceService service = factory.getBean(ISysPluginResourceService.class);
            SysPluginResource resource = new SysPluginResource();
            resource.setResourceName("plugin-impl数据资源");
            resource.setIp("127.0.0.1");
            resource.setUserName("xielibo");
            resource.setUserPassword("123123");
            service.savePluginResource(resource);
            System.out.println("扩展实现插件已经启动完成");
        } else if (event instanceof ContextClosedEvent) {
            MainApplicationContext context = ((ApplicationReadyEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
            SpringBeanFactory factory = context.getSpringBeanFactory();
            ISysPluginResourceService service = factory.getBean(ISysPluginResourceService.class);
            SysPluginResource resource = new SysPluginResource();
            resource.setId(1);
            service.deletePluginResource(resource);
            System.out.println("扩展实现插件停止");
        }
    }
}
```

1. 配置监听类

```YAML
context:
  listener:
    classes: com.fsd.admin.plugins.listener.ImplListener
```

**注意：主程序中的service必须有显性的save和delete方法，并且save方法可以避免数据重复添加，delete方法可以根据非主键字段删除。**

安装/启用插件后将会调用save方法添加数据到对应的表中，停止/卸载插件将会调用delete方法将数据删除。

## 功能插件开发

功能插件是运行在主程序上的独立功能的插件，是具备完整业务操作的模块。此类插件包括前端代码，并且打包在jar包运行。

### 前端技术选型

建议使用vue，构建工具使用vue-cli。因vite暂不稳定，使用vite带来的部署问题平台不提供支持。

**前端插件中避免使用以下第三方库/插件/工具：**

```Bash
# 构建工具
vite

# 第三方插件
monaco-editor
```

### 前端主题切换

**平台默认为亮色模式**

设置深色模式时，通过**localStorage.setItem('opengauss-theme', 'dark')**存储深色主题的参数到浏览器的localStorage中，插件可以通过**localStorage.getItem('opengauss-theme')**获取，如果值为dark字符串，则是深色模式，否则为亮色模式。

**监听平台主题变化**

平台切换主题时会触发bus事件，插件页面通过bus事件监听获取相应的主题值变化来进行插件的主题调整，监听方法如下：

```JavaScript
// 监听 opengauss-theme-change 主题切换事件
window.$wujie?.bus.$on('opengauss-theme-change', val => {
    console.log(val)
})
```

### 前端国际化

**平台使用vue-i18n进行国际化**

插件需要进行国际化时，可以直接通过**localStorage.getItem('locale')**获取平台当前的语言进行插件的国际化处理，建议也使用vue-i18n插件进行国际化，与平台使用的插件保持一致

**监听平台语言变化**

平台切换语言时会触发bus事件，插件页面通过bus事件监听获取相应的语言值变化来进行插件的语言调整，监听方法如下：

```JavaScript
// 监听 opengauss-locale-change 语言切换事件
window.$wujie?.bus.$on('opengauss-locale-change', val => {
    console.log(val)
})
```

### 插件间页面跳转示例

在插件里面获取主应用的jump方法进行跳转

```JavaScript
// jump方法的参数是一个route对象
window.$wujie?.props.methods.jump({
    name: `${路由name}`,
    query: {
      xxx: 'abc'
    }
})
```

**${路由name}参数**为：固定前缀(Static-plugin+插件ID)+插件路由路径分段的首字母大写。

**例如**：

跳转插件路由为/ebbc/abc/get，跳转插件ID为check，则此处参数为：Static-pluginCheckEbbcAbcGet

给插件传参通过url的query参数进行传递，在插件中按下面的方法进行获取

```JavaScript
window.$wujie?.props.data.xxx
```

**注：**当跳转插件中的非菜单页面时，比如插件的某个详情页，需要将此详情页的路由通过主程序的savePluginRoute接口添加为**隐藏菜单路由**，否则无法跳转。

### 前端资源配置

在插件中的配置文件中配置静态资源所在目录

```YAML
spring:
  resources:
    static-locations: classpath:static,file:D://static
```

### 前端访问路径

**静态资源的访问规则为：****`http://ip:port/static-plugin/插件id/具体插件的资源路径`**

> 插件的前端访问需要结合主程序的菜单、路由框架整体上进行设计。

### 前端vue.config.js配置

为了解决插件页面的css和js等资源文件能正常访问，需要在vue.config.js中配置publicUrl为前端固定路径前缀(**`static-plugin`**)+pluginId。案例：

```JavaScript
publicPath: "/static-plugin/xielibo-plugin-page/",
```

### 后端API**访问规则**

**在****前端****中请求插件的****api****时，需要加上api前缀。例如：http://ip:port/{pluginRestPathPrefix}/{pluginId}/，规则如下：**

- `pluginRestPathPrefix`: 主程序配置文件中`pluginRestPathPrefix`的配置值, 默认为: `plugins`
- `pluginId`: 插件id, 如果主程序配置文件中`enablePluginIdRestPathPrefix`配置值为 `true`, 则使用插件id作为前缀，否则不使用插件id作为前缀。

**案例**：

插件ID：xxxx

后端API原始地址：/test/get/123

前端调用地址：/plugins/xxxx/test/get/123

### 添加到主程序菜单

1. 定义监听类，在启动和停止事件中，调用主程序菜单接口的添加和删除方法。菜单接口说明详见文档

[主程序开放接口](https://fullstack-dao.feishu.cn/docx/doxcnIa9e0ChR4bJWlx4IyBfzjf)

```Java
public class MyListener implements ApplicationListener<ApplicationEvent> {


    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        if (event instanceof ApplicationEnvironmentPreparedEvent) {
            System.out.println("扩展实现初始化环境变量");
        } else if (event instanceof ApplicationPreparedEvent) {
            System.out.println("扩展实现环境初始化完成");
        } else if (event instanceof ContextRefreshedEvent) {
            System.out.println("扩展实现ApplicationContext被刷新");
        } else if (event instanceof ApplicationReadyEvent) {
            //此处只能通过注入主程序Bean的第三种方式获取
            MainApplicationContext context = ((ApplicationReadyEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
            SpringBeanFactory factory = context.getSpringBeanFactory();
            MenuFacade menuFacade = factory.getBean(MenuFacade.class);
            menuFacade.savePluginMenu("plugin-book","图书管理插件","books manager","index");
            System.out.println("扩展实现插件已经启动完成");
        } else if (event instanceof ContextClosedEvent) {
            MainApplicationContext context = ((ContextClosedEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
            SpringBeanFactory factory = context.getSpringBeanFactory();
            MenuFacade menuFacade = factory.getBean(MenuFacade.class);
            menuFacade.deletePluginMenu("plugin-book");
            System.out.println("扩展实现插件停止");
        }
    }
}
```

1. 配置监听类

```YAML
context:
  listener:
    classes: com.fsd.admin.plugins.listener.MyListener
```

## 操作日志打印

平台提供了操作日志异步打印的工具。在插件脚手架的**LogAspect类**中已经集成，在需要打印的controller的方法上使用自定义注解@Log即可。该注解有以下参数：

| **参数名**         | **类型**     | **说明**                                                     |
| ------------------ | ------------ | ------------------------------------------------------------ |
| title              | string       | 所属模块，建议格式：“插件ID”-模块。                          |
| businessType       | BusinessType | 操作类型，包括（*OTHER、INSERT、UPDATE、DELETE等*）默认为OTHER。 |
| operatorType       | OperatorType | 操作来源，传入枚举类OperatorType.*PLUGIN*。                  |
| isSaveRequestData  | boolean      | 是否保存请求参数。默认为true                                 |
| isSaveResponseData | boolean      | 是否保存响应参数。默认为true                                 |

示例：

```Java
/**
 * 添加
 */
@Log(title = "base-ops-dataflow",operatorType = OperatorType.PLUGIN,businessType = BusinessType.INSERT)
@RequestMapping("/add")
public AjaxResult add(@RequestBody ModelingDataFlowEntity dataFlowData) {
    return toAjax(modelingDataFlowService.insertDataFlow(dataFlowData));
}
```

## 登录用户Token传参

平台登录后会将用户token存储在浏览器的localStorage中，名称为**opengauss-token**。

在插件中，获取token并传参有如下2步：

1. 通过**localStorage.getItem('opengauss-token')**获取平台存储的登录用户token
2. 在每个请求发起的地方，在请求头header中加上**Authorization**参数，值为**'Bearer 上一步中获取的token'**。建议使用axios，直接在axios拦截器的请求头拦截中，给每个请求加上headers。

示例：

```JavaScript
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('opengauss-token')
    if (token) {
      if (!config.headers) {
        config.headers = {}
      }
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // do something
    return Promise.reject(error)
  }
)
```

## Websocket使用

插件框架本身不支持在插件内使用websocket，为了支持插件内可以使用ws的能力，主程序中做了对ws请求的转发，同时提供推送消息给客户端的接口给插件调用，以满足插件的双向通信需求。

### **SocketExtract接口**

该接口用于Websocket的连接与通信，插件需要扩展改接口，实现**onOpen**、**processMessage、onClose**方法，并**在类上加上Extract注解。**

#### Extract注解

用于标识该实现扩展的唯一性，方便在主程序中调用时能定位到具体的实现。 其中有三个值:

- `bus`: 业务标识，建议把插件ID当做前缀。【必选】
- `scene`: 场景标识。【可选】
- `useCase`: 用例标识。 【可选】

示例：

```Java
@Extract(bus = "plugin1-handler")
public class SocketMessageHandler implements SocketExtract {
    
    @Override
    public void onOpen(String pluginId, String sessionId, Session session) {
        System.out.println("连接成功。。。。。。。。");
    }
    
    @Override
    public void processMessage(String sessionId, String message) {
        System.out.println("接收到消息并处理。。。。。。。。" + message);
    }
    
    @Override
    public void onClose(String pluginId, String sessionId) {
        System.out.println("连接关闭。。。。。。。。");
    }
}
```

#### 连接成功

**onOpen方法**会在连接成功时触发插件的回调。

#### 接收消息

**processMessage方法**。该方法会接收到客户端发送的消息。

#### 连接关闭

**onClose方法**会在连接关闭时触发插件的回调。

### 推送消息

调用主程序暴露的**WsFacade接口的sendMessage方法（主程序接口注入方式见下文）**。该方法有三个参数，分别是：

- `pluginId`:  插件自己的ID。
- `sessionId`:  ws会话ID。
- `message`:  消息内容。

示例:

```Java
@Autowired
@AutowiredType(AutowiredType.Type.PLUGIN_MAIN)
private WsFacade wsFacade;

@PostMapping("/send")
public AjaxResult send(String sessionId,String message) {
    wsFacade.sendMessage("datasync-mysql", sessionId, message);
    return AjaxResult.success();
}
```

### 连接地址

**前端****ws连接地址为：**`wss://ip:9494/ws/插件ID/ws会话ID`**

> ws会话ID由插件自己生成和维护。

## 插件中抛出异常

平台已经做了全局异常捕获处理和自定义**异常类CustomException**，插件中无需做全局捕获处理，只需要抛出该异常类即可，传入code和message。

**插件中使用的异常code，需要由OPS SIG组分配。**

示例：

```Java
@GetMapping("/test")
@Log(title = "sync-mysql", businessType = BusinessType.OTHER, operatorType = OperatorType.PLUGIN)
public AjaxResult test() {
    syncDataService.testLog();
    if (1 == 1) {
        throw new CustomException("插件中测试抛出全局异常", 伪代码code);
    }
    return AjaxResult.success();
}
```

调用效果：

![img](https://fullstack-dao.feishu.cn/space/api/box/stream/download/asynccode/?code=YTQyMDhkZDM3NzkwZjFlZjQ3YTdkOGJhNjgwZTM5NmVfd3pXZjZESWZWczQ3Z2JzMVRDbWdyTVNPbDlpd2tXMUNfVG9rZW46Ym94Y25USno1cGRFVk52ZTNDTkZxU0sxcTZnXzE2NzM4NzY5NzY6MTY3Mzg4MDU3Nl9WNA)

## 插件扩展参数配置
在插件中可以配置自定义的参数，以提供给平台获取使用，比如插件的Logo、插件的主题等。
### 使用方式
在插件中实现com.gitee.starblues.core.PluginExtensionInfo接口接口。例如：
```Java
@Component
public class PluginExtensionInfoConfig implements PluginExtensionInfo {

    @Override
    public Map<String, Object> extensionInfo() {
        Map<String, Object> map = new HashMap<>();
        map.put("logo", "PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMTAgMzEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAgMzEwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik0zMDAuNTY0LDE3OS4zMTFMMjgyLjQsMTY4LjgyNGMwLjQ4OS00LjU0MywwLjc0Ny05LjE1NCwwLjc0Ny0xMy44MjRzLTAuMjU4LTkuMjgxLTAuNzQ3LTEzLjgyNGwxOC4xNjQtMTAuNDg3CgljMy44ODEtMi4yNDEsNi42NTgtNS44Niw3LjgxNi0xMC4xOTFjMS4xNi00LjMzLDAuNTY0LTguODU0LTEuNjc2LTEyLjczNWwtMzQuOTQzLTYwLjUyNGMtMi45OS01LjE4LTguNTY0LTguMzk2LTE0LjU1MS04LjM5NgoJYy0yLjkzLDAtNS44MjYsMC43NzgtOC4zNzcsMi4yNTFMMjMwLjYxOSw1MS42MWMtNy40MDItNS40MjktMTUuNDA2LTEwLjA4My0yMy44OTMtMTMuODQyVjE2Ljc4MwoJQzIwNi43MjcsNy41MjksMTk5LjE5NSwwLDE4OS45NDUsMGgtNjkuODkxYy05LjI1NCwwLTE2Ljc4MSw3LjUyOS0xNi43ODEsMTYuNzgzdjIwLjk4NWMtOC40ODYsMy43NTktMTYuNDksOC40MTMtMjMuODk0LDEzLjg0MgoJTDYxLjE2NCw0MS4wOTRjLTIuNTUxLTEuNDczLTUuNDQ1LTIuMjUtOC4zNzUtMi4yNWMtNS45ODYsMC0xMS41NjMsMy4yMTUtMTQuNTUzLDguMzk1TDMuMjk1LDEwNy43NjIKCWMtMi4yNDIsMy44ODEtMi44MzYsOC40MDYtMS42NzQsMTIuNzM2YzEuMTU2LDQuMzMsMy45MzUsNy45NDksNy44MTQsMTAuMTkxTDI3LjYsMTQxLjE3NmMtMC40ODksNC41NDMtMC43NDcsOS4xNTQtMC43NDcsMTMuODI0CglzMC4yNTgsOS4yODEsMC43NDcsMTMuODI0TDkuNDM1LDE3OS4zMTFjLTMuODc5LDIuMjQxLTYuNjU4LDUuODYtNy44MTQsMTAuMTkxYy0xLjE2Miw0LjMzLTAuNTY4LDguODU1LDEuNjc0LDEyLjczNWwzNC45NDEsNjAuNTI0CgljMi45OSw1LjE4LDguNTY2LDguMzk1LDE0LjU1Myw4LjM5NWMyLjkzLDAsNS44MjQtMC43NzcsOC4zNzUtMi4yNUw3OS4zOCwyNTguMzljNy40MDMsNS40MjksMTUuNDA3LDEwLjA4MywyMy44OTQsMTMuODQydjIwLjk4NgoJYzAsNC40ODIsMS43NDQsOC42OTUsNC45MTQsMTEuODY2YzMuMTc0LDMuMTY5LDcuMzg1LDQuOTE2LDExLjg2Nyw0LjkxNmg2OS44OTFjOS4yNSwwLDE2Ljc4MS03LjUyOSwxNi43ODEtMTYuNzgydi0yMC45ODYKCWM4LjQ4Ni0zLjc1OSwxNi40OS04LjQxMywyMy44OTMtMTMuODQybDE4LjIxNSwxMC41MTdjMi41NTEsMS40NzMsNS40NDcsMi4yNSw4LjM3NywyLjI1YzUuOTg2LDAsMTEuNTYxLTMuMjE1LDE0LjU1MS04LjM5NQoJbDM0Ljk0My02MC41MjNjMi4yNC0zLjg4MSwyLjgzNi04LjQwNiwxLjY3Ni0xMi43MzZDMzA3LjIyMywxODUuMTcyLDMwNC40NDUsMTgxLjU1MywzMDAuNTY0LDE3OS4zMTF6IE0xNTUsMjQ2LjEwMQoJYy0xOC4yMywwLTM1LjIwNy01LjM1Ny00OS40NDktMTQuNTc5bDMwLjgwMS0zMC44MDRjNi40NDksMi43NzIsMTMuNDUsNC4yNCwyMC42NzcsNC4yNDFjMC4wMDIsMCwwLjAwMywwLDAuMDA0LDAKCWMxNC4wMTEsMCwyNy4xNzUtNS40NjYsMzcuMDY0LTE1LjM5YzEzLjUtMTMuNTM2LDE4LjU0MS0zMy4zNjMsMTMuMTU1LTUxLjc0M2MtMC4zMTMtMS4wNjktMS4xNjgtMS44OTQtMi4yNDgtMi4xNjkKCWMtMS4wNzgtMC4yNzctMi4yMjUsMC4wNC0zLjAxMSwwLjgyOWwtMzIuOTcsMzMuMDY5Yy0xLjk3OS0wLjgwNC02Ljk2MS0zLjU0Mi0xNi4xODYtMTIuNzM2CgljLTkuMjI2LTkuMTk3LTExLjk3Ni0xNC4xNzMtMTIuNzgzLTE2LjE0OGwzMi45NjYtMzMuMDY5YzAuNzg3LTAuNzg5LDEuMDk4LTEuOTM1LDAuODItMy4wMTNjLTAuMjc4LTEuMDc5LTEuMTA1LTEuOTMxLTIuMTc1LTIuMjQxCgljLTQuNzUxLTEuMzc4LTkuNjc2LTIuMDc4LTE0LjYzNy0yLjA3OGMtMTQuMDE2LDAtMjcuMTgxLDUuNDY0LTM3LjA2OSwxNS4zODVjLTkuODczLDkuOTAzLTE1LjI5OSwyMy4wNTctMTUuMjgsMzcuMDM5CgljMC4wMSw3LjIwNCwxLjQ3NiwxNC4xOCw0LjI0LDIwLjYwNGwtMzAuNzIyLDMwLjcyNEM2OS4xNDUsMTg5Ljg2OCw2My44OTYsMTczLjA0Nyw2My44OTYsMTU1CgljMC01MC4zMTMsNDAuNzg3LTkxLjEwMiw5MS4xMDQtOTEuMTAyczkxLjEwMiw0MC43ODksOTEuMTAyLDkxLjEwMlMyMDUuMzE2LDI0Ni4xMDEsMTU1LDI0Ni4xMDF6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPg==");
        map.put("theme", "dark");
        map.put("pluginType", 1);
        map.put("isNeedConfigured", 1);
        map.put("configAttrs", "[{\"attrCode\":\"esHost\",\"attrLabel\":\"ES服务器\"},{\"attrCode\":\"esPort\",\"attrLabel\":\"端口\"}]");
        return map;
    }
}
```
### 当前平台支持的扩展参数

| 参数名称 | 类型   | 是否必填 | 描述                             |
| -------- | ------ |------| -------------------------------- |
| logo     | String | 是    | 必须是svg格式，传值内容必须是svg代码的Base64编码 |
| pluginType     | Integer | 否    | 插件类型 |
| isNeedConfigured     | Integer | 否    | 是否需要在主程序填写配置信息，默认0，1为需要 |
| configAttrs     | List | 否    | 配置属性集合，json字符串。具体内容见下 |
| theme     | String | 否    | 插件主题；可选项：dark（深色）light（浅色），默认light |

**configAttrs单个元素**

| 参数名称 | 类型   | 是否必填 | 描述                             |
| -------- | ------ |-----| -------------------------------- |
| attrLabel     | String | 是   | 属性标签 |
| attrCode     | String | 是    | 属性Code |
## Maven打包配置

### 插件信息配置

主要在 `configuration`节点下进行详细配置，说明如下：

#### mode 【必配】

当前节点主要是设置将插件打成开发/生产模式运行的插件。

```XML
<mode>prod</mode>
```

| 参数名称 | 类型   | 是否必填 | 描述                              |
| -------- | ------ | -------- | --------------------------------- |
| mode     | String | 是       | 打包模式。可选参数：`dev`、`prod` |

#### pluginInfo【必配】

当前节点主要是定义插件信息.

```XML
<pluginInfo>
    <id>email-notice</id>
    <bootstrapClass>org.opengauss.admin.plugin.EmailNoticeApplication</bootstrapClass>
    <version>1.0.0</version>
    <provider>xielibo</provider>
    <description>邮件通知插件</description>
</pluginInfo>
```

 **注意：插件id和版本号中不能出现** **`@`****、** **`,`****特殊符号**

| 参数名称       | 类型   | 是否必填 | 描述                                                     |
| -------------- | ------ | -------- | -------------------------------------------------------- |
| id             | String | 是       | 定义插件全局唯一id                                       |
| bootstrapClass | String | 是       | 插件引导类包名                                           |
| version        | String | 是       | 插件版本号。版本号要求见如下`版本号规则`                 |
| provider       | String | 是       | 插件提供开发者名称                                       |
| description    | String | 是       | 插件描述信息                                             |

#### 完整样例

```XML
<build>
    <pluginManagement>
        <plugins>
            <plugin>
                <groupId>com.gitee.starblues</groupId>
                <artifactId>spring-brick-maven-packager</artifactId>
                <version>3.1.0</version>
            </plugin>
        </plugins>
    </pluginManagement>
    <plugins>
        <plugin>
            <groupId>com.gitee.starblues</groupId>
            <artifactId>spring-brick-maven-packager</artifactId>
            <configuration>
                <mode>prod</mode>
                <pluginInfo>
                    <id>email-notice</id>
                    <bootstrapClass>org.opengauss.admin.plugin.EmailNoticeApplication</bootstrapClass>
                    <version>1.0.0</version>
                    <provider>xielibo</provider>
                    <description>邮件通知插件</description>
                </pluginInfo>
            </configuration>
            <executions>
                <execution>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.1</version>
            <configuration>
                <source>${java.version}</source>
                <target>${java.version}</target>
                <encoding>${project.build.sourceEncoding}</encoding>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <configuration>
                <skip>true</skip>
            </configuration>
        </plugin>
        <plugin>
        <!--如果是功能插件，需要增加一下配置，进行前端资源的打包构建-->
        <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-clean-plugin</artifactId>
        </plugin>
        <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>exec-maven-plugin</artifactId>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-resources-plugin</artifactId>
            <version>2.5</version>
            <executions>
                <execution>
                    <id>copy-web</id>
                    <phase>generate-resources</phase>
                    <goals>
                        <goal>copy-resources</goal>
                    </goals>
                    <configuration>
                        <outputDirectory>${basedir}/src/main/resources</outputDirectory>
                        <resources>
                            <resource>
                                <directory>工程中前端构建后的文件目录</directory>
                                <targetPath>后端中存放前端资源的目录</targetPath>
                            </resource>
                        </resources>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

### 编译插件

执行maven命令：`mvn clean package`进行编译/打包

## **插件中注入主程序Bean**

### 方式1: 直接注入式

可直接通过`@Autowired`或 `@Resource`注解进行注入，支持`属性注解`、`构造器`、`set方法`注入。

为了用户可自主控制注入，框架中提供了额外注解`@AutowiredType`进行控制注入类型：

- `@AutowiredType(AutowiredType.Type.PLUGIN)`: **【默认类型】**直接从插件中进行注入。
- `@AutowiredType(AutowiredType.Type.MAIN)`: 直接从主程序进行注入。
- `@AutowiredType(AutowiredType.Type.PLUGIN_MAIN)`: 优先从插件中注入，如果不存在, 则从主程序进行注入。
- `@AutowiredType(AutowiredType.Type.MAIN_PLUGIN)`: 优先从主程序中注入，如果不存在，则从插件中进行注入。

**注入案例**

```Java
@Service
public class BasicService {

    @Autowired
    @AutowiredType(AutowiredType.Type.PLUGIN_MAIN)
    private MenuFacade menuFacade;


}
```

### 方式2: 全局配置式

在插件中可通过如下方式进行全局配置注入类型。使用步骤如下：

1. 实现`AutowiredTypeDefiner`对象， 定义全局注入配置。

```Java
public class AutowiredTypeDefinerImpl implements AutowiredTypeDefiner {
    @Override
    public void config(AutowiredTypeDefinerConfig config) {
        config
            .add(AutowiredType.Type.MAIN, "org.opengauss.admin.system.plugin.facade.MenuFacade")
            .add(AutowiredType.Type.MAIN, DataSource.class);
    }
}
```

1. 在插件引导类重写`autowiredTypeDefiner`方法，返回`AutowiredTypeDefiner`实现对象。

```Java
@SpringBootApplication
public class Basic1Plugin extends SpringPluginBootstrap {

    @Override
    protected AutowiredTypeDefiner autowiredTypeDefiner() {
        return new AutowiredTypeDefinerImpl();
    }
}
```

### 方式3: 代码调用式

通过代码直接从主程序获取`Bean`, 使用方式如下：

直接注入`MainApplicationContext`，调用其`getSpringBeanFactory()`方法获取`SpringBeanFactory`，然后获取主程序中`Bean`

```Java
@Service
public class BasicService {

    @Autowired
    private MainApplicationContext context;

    public void getName(){
        SpringBeanFactory factory = context.getSpringBeanFactory();
        MenuFacade menuFacade = factory.getBean(MenuFacade.class);
    }

}
```