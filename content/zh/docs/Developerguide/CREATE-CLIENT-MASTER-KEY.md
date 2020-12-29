# CREATE CLIENT MASTER KEY<a name="ZH-CN_TOPIC_0294528088"></a>

## 功能描述<a name="section1163224811518"></a>

创建一个客户端加密主密钥\(cmk\)。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

需要在使用gsql连接数据库的时候添加-C参数，开启密态数据库开关，才可以生效。

在创建客户端加密主密钥\(cmk\)之前，需要使用KeyTool工具生成密钥。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE CLIENT MASTER KEY client_master_key_name WITH '(' master_key_params ')';
```

master\_key\_params：

```
KEY_STORE '=' key_store_value ',' KEY_PATH '=' key_path_value ',' ALGORITHM '=' algorithm_value
```

## 参数说明<a name="section2852173114389"></a>

-   **client\_master\_key\_name**

    同一命名空间下，客户端加密主密钥\(cmk\)名称，需要唯一，不可重复。

    取值范围：字符串，要符合标识符的命名规范。

-   **mater\_key\_params**

    指的是创建客户端加密主密钥时所涉及的参数信息，具体包括：

    -   KEY\_STORE，目前取值为gs\_ktool。
    -   KEY\_PATH值为KeyTool工具生成密钥的ID，类似"gs\_ktool/1"这种写法。
    -   ALGORITHM为加密列加密密钥使用的算法，目前只支持AES\_256\_CBC。


## 示例<a name="section7854941155112"></a>

```
--创建dev_ce用户。
postgres=# CREATE USER dev_ce PASSWORD 'dev@1234';
--连接密态数据库
gsql -p 57101 postgres -U dev_ce -r -C
gsql ((GaussDB Kernel V500R001C20 build e1aa9b47) compiled at 2020-11-24 20:03:57 commit 1093 last mr 1793 debug)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

postgres=>
--使用Key_Tool工具创建一个密钥
postgres=> \! gs_ktool -g
--创建客户端加密主密钥(CMK)
postgres=> CREATE CLIENT MASTER KEY ImgCMK WITH ( KEY_STORE = gs_ktool , KEY_PATH = "gs_ktool/1" , ALGORITHM = AES_256_CBC);
```

