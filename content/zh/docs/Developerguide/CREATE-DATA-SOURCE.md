# CREATE DATA SOURCE<a name="ZH-CN_TOPIC_0289900178"></a>

## 功能描述<a name="zh-cn_topic_0283137069_zh-cn_topic_0237122100_section1697927113919"></a>

创建一个新的外部数据源对象，该对象用于定义openGauss要连接的目标库信息。

## 注意事项<a name="zh-cn_topic_0283137069_zh-cn_topic_0237122100_section106551466418"></a>

-   Data Source名称在数据库中需唯一，遵循标识符命名规范，长度限制为63字节，过长则会被截断。
-   只有系统管理员或初始用户才有权限创建Data Source对象。且创建该对象的用户为其默认属主。
-   当在OPTIONS中出现password选项时，需要保证openGauss每个节点的$GAUSSHOME/bin目录下存在datasource.key.cipher和datasource.key.rand文件，如果不存在这两个文件，请使用gs\_guc工具生成并使用gs\_ssh工具发布到openGauss每个节点的$GAUSSHOME/bin目录下。

## 语法格式<a name="zh-cn_topic_0283137069_zh-cn_topic_0237122100_section1673654518413"></a>

```
CREATE DATA SOURCE src_name
    [TYPE 'type_str']
    [VERSION {'version_str' | NULL}]
    [OPTIONS (optname 'optvalue' [, ...])];
```

## 参数说明<a name="zh-cn_topic_0283137069_zh-cn_topic_0237122100_section1520523385620"></a>

-   **src\_name**

    新建Data Source对象的名称，需在数据库内部唯一。

    取值范围：字符串，要符标识符的命名规范。

-   **TYPE**

    新建Data Source对象的类型，可缺省。

    取值范围：空串或非空字符串。

-   **VERSION**

    新建Data Source对象的版本号，可缺省或NULL值。

    取值范围：空串或非空字符串或NULL。

-   **OPTIONS**

    Data Source对象的选项字段，创建时可省略，如若指定，其关键字如下：

    -   optname

        选项名称。

        取值范围：dsn、 username、 password、 encoding。不区分大小写。

        -   dsn对应odbc配置文件中的DSN。
        -   username/password对应连接目标库的用户名和密码。

            openGauss在后台会对用户输入的username/password加密以保证安全性。该加密所需密钥文件需要使用gs\_guc工具生成并使用gs\_ssh工具发布到openGauss每个节点的$GAUSSHOME/bin目录下。username/password不应当包含'encryptOpt'前缀，否则会被认为是加密后的密文。

        -   encoding表示与目标库交互的字符串编码方式（含发送的SQL语句和返回的字符类型数据），此处创建对象时不检查encoding取值的合法性，能否正确编解码取决于用户提供的编码方式是否在数据库本身支持的字符编码范围内。

    -   optvalue

        选项值。

        取值范围：空或者非空字符串。



## 示例<a name="zh-cn_topic_0283137069_zh-cn_topic_0237122100_section459639151114"></a>

```
--创建一个空的Data Source对象，不含任何信息。
openGauss=# CREATE DATA SOURCE ds_test1;

--创建一个Data Source对象，含TYPE信息，VERSION为NULL。
openGauss=# CREATE DATA SOURCE ds_test2 TYPE 'MPPDB' VERSION NULL;

--创建一个Data Source对象，仅含OPTIONS。
openGauss=#  CREATE DATA SOURCE ds_test3 OPTIONS (dsn 'openGauss', encoding 'utf8');

--创建一个Data Source对象，含TYPE, VERSION, OPTIONS。
openGauss=# CREATE DATA SOURCE ds_test4 TYPE 'unknown' VERSION '11.2.3' OPTIONS (dsn 'openGauss', username 'userid', password 'pwd@123456', encoding '');

--删除Data Source对象。
openGauss=# DROP DATA SOURCE ds_test1;
openGauss=# DROP DATA SOURCE ds_test2;
openGauss=# DROP DATA SOURCE ds_test3;
openGauss=# DROP DATA SOURCE ds_test4;
```

## 相关链接<a name="zh-cn_topic_0283137069_zh-cn_topic_0237122100_section45538169227"></a>

[ALTER DATA SOURCE](ALTER-DATA-SOURCE.md),  [DROP DATA SOURCE](DROP-DATA-SOURCE.md)

