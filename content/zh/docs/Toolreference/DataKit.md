# DataKit

## 功能介绍

openGauss的开发运维涉及到很多复杂操作，DataKit提供了一个可视化操作的运维界面，可以帮助用户管理，安装，监控运维自己的openGauss数据库以及对应的物理机资源。

DataKit是一个以资源（物理机，数据库）为底座的开发运维工具，将上层的开发运维工具插件化，各插件之间相互独立，方便用户按需引入。各插件围绕DataKit的资源中心进行扩展开，完成数据库的运维，监控，迁移，开发，建模等复杂的操作。

## 原理简介

DataKit是基于spring-brick开发的插件化的工具，前台使用vue，后台使用spring-bot技术栈。DataKit基座提供资源管理，安全中心，日志中心等基础的公共能力，具体的数据库安装，运维，监控，数据迁移等能力是基于spring-brick开发的插件工具，可以灵活的在基座上面安装卸载，方便客户按需使用。

## 特性优势

本项目是基于Web的openGauss的可视化的一体化工具：DataKit，目的是方便客户使用和管理openGauss可视化工具，可以为客户降低openGauss数据库安装使用门槛，做到安全中心管理，插件管理，以及其它功能包括一键化部署、卸载、组件化安装、多版本升级和日常运维。

## 环境准备

X86/ARM+openEuler 20.03 或 X86+CentOS 5.7。

## 操作步骤

1.  创建工作目录：

    ```
    mkdir -p /ops/server/openGauss-visualtool/logs /ops/server/openGauss-visualtool/config /ops/ssl /ops/files
    ```
    
1.  将jar包传至/ops/server/openGauss-visualtool/下，jar包下载地址：https://www.opengauss.org/zh/download/

3. 将配置文件application-temp.yml传至/ops/server/openGauss-visualtool/config/下。配置文件内容如下：

   ```
   system:
     # File storage path
     defaultStoragePath: /ops/files
     # Whitelist control switch
     whitelist:
       enabled: false
   server:
     port: 9494
     ssl:
       key-store: /ops/ssl/keystore.p12
       key-store-password: password
       key-store-type: PKCS12
       enabled: true
     servlet:
       context-path: /
   logging:
     file:
       path: /ops/server/openGauss-visualtool/logs/
   spring:
     datasource:
       type: com.alibaba.druid.pool.DruidDataSource
       driver-class-name: org.opengauss.Driver
       url: jdbc:opengauss://ip:port/database?currentSchema=public
       username: dbuser
       password: dbpassword
       druid:
         test-while-idle: false
         test-on-borrow: true
         validation-query: "select 1"
         validation-query-timeout: 30000
   ```

4. 将ssl文件传置/ops/ssl/下，生成ssl文件示例（生成ssl的java必须跟运行DataKit是一个java版本）：

   ```
   keytool -genkey -noprompt \
       -dname "CN=opengauss, OU=opengauss, O=opengauss, L=Beijing, S=Beijing, C=CN"\
       -alias opengauss\
       -storetype PKCS12 \
       -keyalg RSA \
       -keysize 2048 \
       -keystore /ops/ssl/keystore.p12 \
       -validity 3650 \
       -storepass password
   ```

   

2.  修改application-temp.yml文件中的数据链链接ip、port、database、dbuser、dbpassword。

2.  创建ops用户，给ops目录及下面所有文件修改所属用户为执行用户（ops）。

7. 切换到ops用户，进入/ops/server/openGauss-visualtool目录，执行启动命令：

   ```
   nohup java -Xms2048m -Xmx4096m -jar /ops/server/openGauss-visualtool/visualtool-main.jar --spring.profiles.active=temp >/ops/server/openGauss-visualtool/logs/visualtool-main.out 2>&1 &\
   ```


## 卸载工具

DataKit工具是Jar包启动的，删除对应的Jar包即可卸载该工具。

## 注意事项



1. DataKit使用文档和开发文档：https://gitee.com/opengauss/openGauss-workbench/tree/master/openGauss-visualtool/doc

2. 基础运维插件：https://gitee.com/opengauss/openGauss-workbench/tree/master/base-ops

3. 其他插件：https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins


