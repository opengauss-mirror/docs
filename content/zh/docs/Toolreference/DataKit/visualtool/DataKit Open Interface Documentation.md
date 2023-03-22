# 菜单接口

用于在插件安装和卸载是添加、删除插件自身菜单。

## **接口路径**

org.opengauss.admin.system.plugin.facade.MenuFacade

## **方法**

### savePluginMenu

添加菜单以及前端路由

**入参**

| 参数名     | 类型    | 是否必填 | 说明                                              |
| ---------- | ------- | -------- | ------------------------------------------------- |
| pluginId   | String  | 是       | 插件标识，需要和pom中<pluginInfo>下的id保持一致。 |
| menuName   | String  | 是       | 菜单名称                                          |
| menuEnName | String  | 是       | 菜单英文名称                                      |
| order      | Integer | 是       | 菜单排序                                          |
| path       | String  | 否       | 菜单路由路径，默认为index。                       |
| parentId   | Integer | 否       | 父菜单，默认为根目录。                            |
| openWay    | Integer | 否       | 打开方式，暂时仅支持页面打开，默认为1。           |

**出参**

返回MenuVo对象，详情见下文。

**调用案例**

```Java
//插件监听事件中获取Menufacade，仅显示相关代码
MainApplicationContext context = ((ApplicationReadyEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
SpringBeanFactory factory = context.getSpringBeanFactory();
MenuFacade menuFacade = factory.getBean(MenuFacade.class);
menuFacade.savePluginMenu("plugin-book","图书管理插件","books manager","index",0);
```

### deletePluginMenu

根据pluginId删除该插件下所有菜单与路由数据。

**入参**

| 参数名   | 类型   | 是否必填 | 说明                                              |
| -------- | ------ | -------- | ------------------------------------------------- |
| pluginId | String | 是       | 插件标识，需要和pom中<pluginInfo>下的id保持一致。 |

**出参**

返回MenuVo对象，详情见下文。

**调用案例**

```Java
//插件监听事件中获取Menufacade，仅显示相关代码
MainApplicationContext context = ((ContextClosedEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
SpringBeanFactory factory = context.getSpringBeanFactory();
MenuFacade menuFacade = factory.getBean(MenuFacade.class);
menuFacade.deletePluginMenu("plugin-book");
```

### savePluginRoute

添加插件非菜单路由。

**入参**

| 参数名     | 类型    | 是否必填 | 说明                                                         |
| ---------- | ------- | -------- | ------------------------------------------------------------ |
| pluginId   | String  | 是       | 插件标识，需要和pom中<pluginInfo>下的id保持一致。            |
| menuName   | String  | 是       | 路由名称                                                     |
| menuEnName | String  | 是       | 路由英文名称                                                 |
| path       | String  | 否       | 路由路径，默认为index，如需传递参数，则使用query的方式传参，并使用，例如index?id=${id}。 |
| parentId   | Integer | 否       | 父菜单，默认为根目录。                                       |

**出参**

返回MenuVo对象，详情见下文。

### saveIndexInstanceRoute

添加首页实例路由。

**入参**

| 参数名   | 类型   | 是否必填 | 说明                                                         |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| pluginId | String | 是       | 插件标识，需要和pom中<pluginInfo>下的id保持一致。            |
| menuName | String | 是       | 菜单名称                                                     |
| path     | String | 否       | 菜单路由路径，默认为index，如需传递参数，则使用query的方式传参，并使用，例如index?id=${id}。 |

**出参**

返回MenuVo对象，详情见下文。

**调用案例**

**调用案例**

```Java
//插件监听事件中获取Menufacade，仅显示相关代码
MainApplicationContext context = ((ContextClosedEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
SpringBeanFactory factory = context.getSpringBeanFactory();
MenuFacade menuFacade = factory.getBean(MenuFacade.class);
menuFacade.saveIndexInstanceRoute("moniter-plugin","实例监控插件","index");
```

# 插件接口

用于获取插件本身相关的数据。

## 接口路径

org.opengauss.admin.system.plugin.facade.PluginFacade

## 方法

### getPluginConfigData

获取插件配置数据

**入参**

| 参数名   | 类型   | 是否必填 | 说明                                              |
| -------- | ------ | -------- | ------------------------------------------------- |
| pluginId | String | 是       | 插件标识，需要和pom中<pluginInfo>下的id保持一致。 |

**出参**

返回json对象字符串，其中key为插件jar包中配置的**attrCode**。示例：

```JSON
{
        
    "esHost": "192.168.1.104",
    "esPort": "23552"
}
```

# openGauss实例接口

用于获取openGauss集群及实例信息

## 接口路径

org.opengauss.admin.system.plugin.facade.OpsFacade

## 方法

### listCluster

查询集群列表

**入参**

无

**出参**

List<OpsClusterVO> 对象，详见对象结构说明。

# WebScoket接口

用于通过主程序向客户端推送消息。

## 接口路径

org.opengauss.admin.system.plugin.facade.WsFacade

## 方法

### sendMessage

推送消息到WebSocket客户端。

**入参**

| 参数名    | 类型   | 是否必填 | 说明                                            |
| --------- | ------ | -------- | ----------------------------------------------- |
| pluginId  | String | 是       | 插件标识，需要和pom中<pluginInfo>下的id保持一致 |
| sessionId | String | 是       | 会话ID                                          |
| message   | String | 是       | 消息内容                                        |

# JDBC实例接口

用于获取JDBC集群及实例信息

## 接口路径

org.opengauss.admin.system.plugin.facade.JdbcDbClusterFacade

## 方法

### page

查询集群列表

**入参**

name :  模糊搜索关键字

page： 分页参数

**出参**

Page<JdbcDbClusterVO> 对象，详见对象结构说明。

# 物理机资源列表

用于获取物理机资源信息

## 接口路径

org.opengauss.admin.system.plugin.facade.HostFacade

## 方法

### listAll

获取物理机资源列表

**入参**

无

**出参**

List<OpsHostEntity> 对象，详见对象结构说明。

# 对象结构说明

**MenuVo**

| 属性名   | 说明           |
| -------- | -------------- |
| menuId   | 菜单或路由ID   |
| menuName | 菜单及路由名称 |
| parentId | 父级ID         |

**OpsClusterVO**

| 属性名           | 说明                                                    |
| ---------------- | ------------------------------------------------------- |
| clusterId        | 集群标识                                                |
| clusterName      | 集群名称                                                |
| version          | 集群版本 ENTERPRISE企业版/MINIMAL_LIST极简版/LITE轻量版 |
| versionNum       | 集群版本号                                              |
| databasePassword | 集群密码                                                |
| clusterNodes     | 集群节点信息                                            |

**OpsClusterNodeVO**

| 属性名         | 说明         |
| -------------- | ------------ |
| nodeId         | 节点标识     |
| clusterRole    | 节点角色     |
| publicIp       | 公网IP       |
| privateIp      | 内网IP       |
| hostname       | 主机名       |
| azName         | AZ名         |
| dbPort         | 数据库端口   |
| dbName         | 数据库名     |
| dbUser         | 数据库用户名 |
| dbUserPassword | 数据库密码   |
| hostPort       | ssh端口      |
| rootPassword   | root用户密码 |

**JdbcDbClusterVO**

| 属性名     | 说明                           |
| ---------- | ------------------------------ |
| clusterId  | 集群ID                         |
| name       | 集群名称                       |
| deployType | 部署类型：参考DeployTypeEnum   |
| dbType     | 数据库类型： 参考DbTypeEnum    |
| nodes      | 节点，参考 JdbcDbClusterNodeVO |

**JdbcDbClusterNodeVO**

| 属性名        | 说明             |
| ------------- | ---------------- |
| clusterNodeId | 节点ID           |
| name          | 节点名称         |
| ip            | 节点ip地址       |
| port          | 节点端口         |
| username      | 数据库连接用户名 |
| password      | 数据库连接密码   |
| url           | 数据库连接串     |

**OpsHostEntity**

| 属性名    | 说明         |
| --------- | ------------ |
| hostId    | 主机ID       |
| hostname  | 主机hostname |
| privateIp | 内网ip地址   |
| publicIp  | 公网ip地址   |
| port      | ssh端口      |
| azId      | 所属AZ的ID   |