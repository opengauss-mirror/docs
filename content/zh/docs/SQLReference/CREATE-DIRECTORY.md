# CREATE DIRECTORY<a name="ZH-CN_TOPIC_0289900765"></a>

## 功能描述<a name="zh-cn_topic_0283136620_zh-cn_topic_0237122101_zh-cn_topic_0059778310_section50807000114421"></a>

使用CREATE DIRECTORY语句创建一个目录对象，该目录对象定义了服务器文件系统上目录的别名，用于存放用户使用的数据文件。

## 注意事项<a name="zh-cn_topic_0283136620_zh-cn_topic_0237122101_zh-cn_topic_0059778310_section25762026103427"></a>

-   当enable_access_server_directory=off时，只允许初始用户创建directory对象；当enable_access_server_directory=on时，具有SYSADMIN权限的用户和继承了内置角色gs_role_directory_create权限的用户可以创建directory对象。
-   创建用户默认拥有此路径的READ和WRITE操作权限。
-   目录的默认owner为创建directory的用户。
-   以下路径禁止创建：
    -   路径含特殊字符。
    -   路径是相对路径。
    -   路径是符号连接。

-   创建目录时会进行以下合法性校验：
    -   创建时会检查添加路径是否为操作系统实际存在路径，如不存在会提示用户使用风险。
    -   创建时会校验数据库初始化（omm）用户对于添加路径的权限\(即操作系统目录权限，读/写/执行 - R/W/X\)，如果权限不全，会提示用户使用风险。

-   在openGauss环境下用户指定的路径需要用户保证各节点上路径的一致性，否则在不同节点上执行会产生找不到路径的问题。

## 语法格式<a name="zh-cn_topic_0283136620_zh-cn_topic_0237122101_zh-cn_topic_0059778310_section30531647103427"></a>

```
CREATE [OR REPLACE] DIRECTORY directory_name
AS 'path_name';
```

## 参数说明<a name="zh-cn_topic_0283136620_zh-cn_topic_0237122101_section687510282437"></a>

-   **directory\_name**

    目录名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **path\_name**

    操作系统的路径。

    取值范围： 有效的操作系统路径。


## 示例<a name="zh-cn_topic_0283136620_zh-cn_topic_0237122101_section1853433744413"></a>

```
--创建目录。
openGauss=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';
```

## 相关链接<a name="zh-cn_topic_0283136620_zh-cn_topic_0237122101_section1767373224414"></a>

[ALTER DIRECTORY](ALTER-DIRECTORY.md)，[DROP DIRECTORY](DROP-DIRECTORY.md)

