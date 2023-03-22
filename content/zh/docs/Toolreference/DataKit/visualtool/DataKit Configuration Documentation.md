## 集成配置

项目基座代码已经配置完成，无需改动。

### 引入repository声明

```XML
<repositories>
    <repository>
        <id>gitee-eb-repo</id>
        <name>The Maven Repository on Gitee</name>
        <url>https://gitee.com/agile-adept-team/spring-brick-eb/tree/master/maven-repo</url>
    </repository>
</repositories>
```

### 引入框架依赖

```XML
<dependency>
    <groupId>com.gitee.starblues</groupId>
    <artifactId>spring-brick</artifactId>
    <version>3.1.0</version>
</dependency>
```

### 配置文件加入配置

```YAML
plugin:
  mainPackage: org.opengauss.admin
  runMode: dev
  pluginPath:
    - ~/visualtool-plugin
```

> `mainPackage`: 主程序最大范围包名。
>
> ```
> runMode`: 运行模式。可配置`dev`/`prod
> ```
>
> `pluginPath`: 插件目录或者插件上级目录，可配置多个。

### Spring-Boot 启动类改造

```Java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class AdminApplication implements SpringBootstrap {
    public static void main(String[] args) {
        SpringMainBootstrap.launch(AdminApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  服务启动成功   ლ(´ڡ`ლ)ﾞ");
    }

    @Override
    public void run(String[] args) throws Exception {
        // 在该实现方法中, 和SpringBoot使用方式一致
        SpringApplication.run(AdminApplication.class, args);
    }
}
```

### 配置maven打包

```XML
<build>
    <plugins>
        <plugin>
            <groupId>com.gitee.starblues</groupId>
            <artifactId>spring-brick-maven-packager</artifactId>
            <version>3.1.0</version>
            <configuration>
                <mode>main</mode>
                <mainConfig>
                    <mainClass>org.opengauss.admin.AdminApplication</mainClass>
                    <packageType>jar</packageType>
                </mainConfig>
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
            <artifactId>maven-clean-plugin</artifactId>
        </plugin>
        <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>exec-maven-plugin</artifactId>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-resources-plugin</artifactId>
            <version>3.3.0</version>
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
                                <directory>../visualtool-ui/dist</directory>
                                <targetPath>static</targetPath>
                            </resource>
                        </resources>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
    <finalName>${project.artifactId}</finalName>
</build>
```

## 插件分类

### **增强插件**

不能独立运行的插件，而是对现有某功能的增强，包括数据和接口实现，因此又可以细分为接口扩展和数据扩展。插件调用通常是在某个业务选项列表中增加可选项，选择后进行调用或者使用。

> **接口扩展**：插件本身包含数据和业务逻辑，数据通常在插件安装时添加到主程序的数据表中，业务逻辑在主程序中类似于service方法一样的调用。
>
> **数据扩展**：插件只包含数据，在插件安装时添加到主程序的数据表中。比如通过插件添加某一类数据资源等。

### **功能插件**

能独立运行的插件，独立实现某个完整的功能或操作，比如某某模块。插件调用通常是在系统内添加菜单入口。

## 增强扩展

### 接口扩展

#### 定义接口

定义将来需要进行扩展的业务接口，比如示例中的通知接口，为了示例的简洁，已省略注释，如下：

```Java
public interface NoticeExtract {
    public void send(NoticeDTO noticeDTO);
}
```

#### 实现接口

接口实现分类两类，定义如下：

> 默认实现：在系统中实现插件接口中各个方法。
>
> 扩展实现：在插件中实现插件接口中的各个方法，进行扩展。

不管是哪一类的实现，都需要在类上使用注解进行标记，标记的目的是为了在容器中能定位和调用到到该实现类。

##### 注解

@Extract(bus = "业务标识", scene="场景标识", useCase="用例标识")

> bus：业务标识（必填），比如notice
>
> scene：场景标识（选填），比如smsNotice
>
> useCase：用例标识（选填），比如smsNotice

##### 案例

**默认自带实现，短信通知**

```Java
@Service
public class SmsNoticeImpl implements NoticeExtract {

    @Override
    public void send(NoticeDTO noticeDTO) {
        System.out.println("通过短信发送通知，电话号码是：" + noticeDTO.getTelephone() + ",消息内容是：" + noticeDTO.getContent());
    }
}
```

**插件扩展实现，邮件通知**

```Java
@Extract(bus = "notice", scene = "emailNotice")
public class EmailNoticeServiceImpl implements NoticeExtract {

    @Override
    public void send(NoticeDTO noticeDTO) {
        System.out.println("通过邮件发送通知，地址是是：" + noticeDTO.getEmail() + ",消息内容是：" + noticeDTO.getContent());
    }
}
```

#### 插件调用

默认实现调用，可以通过@Autowired注入

```Java
public class NoticeController {
    
    //注入默认实现
    @Autowired
    private NoticeExtract noticeExtract;

    @GetMapping("/send")
    @ApiOperation(value = "发送通知", notes = "发送通知")
    public AjaxResult send() {
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setContent("你好，发送通知");
        noticeDTO.setTelephone("17308404741");
        noticeDTO.setEmail("liboxiex@gmail.com");
        noticeExtract.send(noticeDTO);
        return AjaxResult.success();
    }
}
```

调用后的结果如下：

> 通过短信发送通知，电话号码是：17308404741，消息内容是：你好，发送通知



插件实现调用，不能通过@Autowired或者@Resource直接注入NoticeExtract。而是注入ExtractFactory，通过ExtractFactory传入实现类的标识，通过标识定位到具体的实现并且调用。示例：

```Java
public class NoticeController {

    @Autowired
    private ExtractFactory extractFactory;

    //默认实现
//    @Autowired
//    private NoticeExtract noticeExtract; 

    @GetMapping("/send")
    @ApiOperation(value = "发送通知", notes = "发送通知")
    public AjaxResult send() {
        String bus = "notice";
        String scene = "emailNotice";
//        调用插件实现
        NoticeExtract noticeExtract = extractFactory.getExtractByCoordinate(ExtractCoordinate.build(bus, scene, ""));
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setContent("你好，发送通知");
        noticeDTO.setTelephone("17308404741");
        noticeDTO.setEmail("liboxiex@gmail.com");
        noticeExtract.send(noticeDTO);
        return AjaxResult.success();
    }
}
```

调用结果如下：

> 通过邮件发送通知，地址是：liboxiex@gmail.com，消息内容是：你好，发送通知。



### 数据扩展

提供对应的数据添加和删除方法，比如服务器资源信息未来需要扩展，则创建服务器资源service，并且增加save和delete方法。在插件的安装、启动、停止、卸载时调用save和delete方法进行数据操作。

> **save方法可以避免数据重复添加，delete方法可以根据非主键字段删除。**

## 功能扩展

功能扩展原则上没有对主程序的强依赖，只需要遵循插件开发手册，开发完整功能即可。