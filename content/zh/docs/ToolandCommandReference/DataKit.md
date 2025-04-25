# DataKit

## 功能介绍

openGauss的开发运维涉及到很多复杂操作，DataKit提供了一个可视化操作的运维界面，可以帮助用户管理，安装，监控运维自己的openGauss数据库以及对应的物理机资源。

DataKit是一个以资源（物理机，数据库）为底座的开发运维工具，将上层的开发运维工具插件化，各插件之间相互独立，方便用户按需引入。各插件围绕DataKit的资源中心进行扩展开，完成数据库的运维，监控，迁移，开发，建模等复杂的操作。

## 原理简介

DataKit是基于spring-brick开发的插件化的工具，前台使用vue，后台使用spring-boot技术栈。DataKit基座提供资源管理，安全中心，日志中心等基础的公共能力，具体的数据库安装，运维，监控，数据迁移等能力是基于spring-brick开发的插件工具，可以灵活的在基座上面安装卸载，方便客户按需使用。

## 特性优势

本项目是基于Web的openGauss的可视化的一体化工具：DataKit，目的是方便客户使用和管理openGauss可视化工具，可以为客户降低openGauss数据库安装使用门槛，做到安全中心管理，插件管理，以及其它功能包括一键化部署、卸载、组件化安装、多版本升级和日常运维。

## 环境准备

X86/ARM+openEuler 20.03 或 X86+CentOS 5.7。

## 操作步骤

1.  创建工作目录：

    ```
    mkdir -p /ops/server/openGauss-visualtool/logs /ops/server/openGauss-visualtool/config /ops/ssl /ops/files
    ```
    
1.  将jar包传至/ops/server/openGauss-visualtool/下，jar包下载地址：[https://www.opengauss.org/zh/download/](https://www.opengauss.org/zh/download/)

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

4. 将ssl文件传至/ops/ssl/下，生成ssl文件实例（生成ssl的java必须跟运行DataKit是一个java版本）：

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

   

2.  修改application-temp.yml文件中的数据库链接ip、port、database、dbuser、dbpassword。

2.  创建ops用户，给ops目录及下面所有文件修改所属用户为执行用户（ops）。

7. 切换到ops用户，进入/ops/server/openGauss-visualtool目录，执行启动命令：

   ```
   nohup java -Xms2048m -Xmx4096m -jar /ops/server/openGauss-visualtool/visualtool-main.jar --spring.profiles.active=temp >/ops/server/openGauss-visualtool/logs/visualtool-main.out 2>&1 &\
   ```


## 卸载工具

DataKit工具是Jar包启动的，删除对应的Jar包即可卸载该工具。

## DataKit源码链接和使用说明

源码：https://gitcode.com/opengauss/openGauss-workbench/tree/master

使用说明： https://gitcode.com/opengauss/openGauss-workbench/blob/master/openGauss-datakit/README.md

## 插件说明

<a name="table1652718018281"></a>
<table><tbody>
<tr id="row14118151122812"><td class="cellrowborder" valign="top" width="20%"><p id="p10118181152814"><a name="p10118181152814"></a><a name="p10118181152814"></a><strong id="b1711814115287"><a name="b1711814115287"></a><a name="b1711814115287"></a><span>插件名称</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="40%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>介绍</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>源码</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>文档</span></strong></p>
</td>
</tr>
<tr> 
<td>基础运维插件</td>
<td>实现数据库集群的基础管理能力，包括安装、导入、启停、备份恢复、升级等操作；也支持websell、安装包管理等能力</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/base-ops">base-ops</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/base-ops/README.md">base-ops使用说明</a></td>
</tr>
<tr> 
<td>数据迁移插件</td>
<td>实现其他数据库到openGauss一站式迁移方案（当前支持MySQL）</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/data-migration">data-migration</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/data-migration/README.md">data-migration使用说明</a></td>
</tr>
<tr> 
<td>告警监控插件</td>
<td>为openGauss提供告警和通知能力</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/alert-monitor">alert-monitor</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/alert-monitor/README.md">alert-monitor使用说明</a></td>
</tr>
<tr> 
<td>业务开发插件</td>
<td>业务开发是一个基于 Browser/Server 的通用集成开发环境， 帮助数据库开发人员便捷地构建应用程序，以图形化界面形式提供数据库关键特性。业务开发支持的主要功能点包括：创建和管理数据库对象（表、视图、序列、同义词等）、执行 SQL 语句、 编译和执行 PL/SQL语句。</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/data-studio">data-studio</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/data-studio/readme.md">data-studio使用说明</a></td>
</tr>
<tr> 
<td>实例监控插件</td>
<td>提供实例、集群等监控能力</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/observability-instance">observability-instance</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/observability-instance/README.md">observability-instance使用说明</a></td>
</tr>
<tr> 
<td>日志检索插件</td>
<td>提供日志检索能力</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/observability-log-search">observability-log-search</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/observability-log-search/README.md">observability-log-search使用说明</a></td>
</tr>
<tr> 
<td>智能诊断插件</td>
<td>提供SQL诊断能力</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/observability-sql-diagnosis">observability-sql-diagnosis</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/observability-sql-diagnosis/README.md">observability-sql-diagnosis使用说明</a></td>
</tr>
<tr> 
<td>openGauss数据库监控插件</td>
<td>openGauss通用的监控插件生成工具，支持Prometheus、Zabbix以及Nagios平台</td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/tree/master/plugins/openGauss-tools-monitor">openGauss-tools-monitor</a></td>
<td><a href="https://gitcode.com/opengauss/openGauss-workbench/blob/master/plugins/openGauss-tools-monitor/README.md">openGauss-tools-monitor使用说明</a></td>
</tr>
</tbody>
</table>
