# CLEAN CONNECTION<a name="ZH-CN_TOPIC_0000001151746656"></a>

## 功能描述<a name="zh-cn_topic_0059779060_s1b14773726ac4469a14e509530a7a957"></a>

用来清理数据库连接。允许在节点上清理指定数据库的指定用户的相关连接。

## 注意事项<a name="zh-cn_topic_0059779060_s8aed237cc11e48bcb20d63f3ed081327"></a>

-   openGauss下不支持指定节点，仅支持TO ALL。
-   该功能仅在force模式下，可以清理正在使用的正常连接。

## 语法格式<a name="zh-cn_topic_0059779060_s24ab1cb591b54a43af5fe6d87cc067a1"></a>

```
CLEAN CONNECTION
      TO { COORDINATOR ( nodename [, ... ] ) | NODE ( nodename [, ... ] )| ALL [ CHECK ] [ FORCE ] }
      [ FOR DATABASE dbname ]
      [ TO USER username ];
```

## 参数说明<a name="zh-cn_topic_0059779060_s5c57cb1e5e8740dcb15254b0ee05e666"></a>

-   **CHECK**

    仅在节点列表为TO ALL时可以指定。如果指定该参数，会在清理连接之前检查数据库是否被其他会话连接访问。此参数主要用于DROP DATABASE之前的连接访问检查，如果发现有其他会话连接，则将报错并停止删除数据库。

-   **FORCE**

    仅在节点列表为TO ALL时可以指定，如果指定该参数，所有和指定dbname和username相关的线程都会收到SIGTERM信号，然后被强制关闭。

-   **COORDINATOR \( nodename \[,  ... \] \) | NODE \( nodename \[, ... \] \) | ALL**

    仅支持TO ALL，必须指定该参数，节点上的指定连接会被全部删除。

-   **dbname**

    删除指定数据库上的连接。如果不指定，则删除所有数据库的连接。

    取值范围：已存在数据库名。

-   **username**

    删除指定用户上的连接。如果不指定，则删除所有用户的连接。

    取值范围：已存在的用户。


## 示例<a name="zh-cn_topic_0059779060_s11a931f26ab344c1aab49ebd522ee0ad"></a>

```
--创建jack用户。
CREATE USER jack PASSWORD 'Bigdata123@';

--删除用户jack在数据库template1上的所有连接。
CLEAN CONNECTION TO ALL FOR DATABASE template1 TO USER jack;

--删除用户jack的所有连接。
CLEAN CONNECTION TO ALL TO USER jack;

--删除在数据库gaussdb上的所有连接。
CLEAN CONNECTION TO ALL FORCE FOR DATABASE gaussdb;

--删除用户jack。
DROP USER jack;
```

