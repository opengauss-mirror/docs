# ALTER DATA SOURCE<a name="ZH-CN_TOPIC_0289899857"></a>

## 功能描述<a name="zh-cn_topic_0283136847_zh-cn_topic_0237122056_section1246564332711"></a>

修改Data Source对象的属性和内容。

属性有：名称和属主；内容有：类型、版本和连接选项。

## 注意选项<a name="zh-cn_topic_0283136847_zh-cn_topic_0237122056_section12438141318319"></a>

-   只有初始用户/系统管理员/属主才拥有修改Data Source的权限。
-   修改属主时，新的属主用户必须是初始用户或系统管理员。
-   当在OPTIONS中出现password选项时，需要保证openGauss每个节点的$GAUSSHOME/bin目录下存在datasource.key.cipher和datasource.key.rand文件，如果不存在这两个文件，请使用gs\_guc工具生成并使用gs\_ssh工具发布到每个节点的$GAUSSHOME/bin目录下。

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss提供此语法，但SQL on Anywhere不可用。

## 语法格式<a name="zh-cn_topic_0283136847_zh-cn_topic_0237122056_section20592145145512"></a>

```
ALTER DATA SOURCE src_name
    [TYPE  'type_str']
    [VERSION  {'version_str' | NULL}]
    [OPTIONS ( {[ ADD | SET | DROP ] optname ['optvalue']} [, ...] )];
ALTER DATA SOURCE src_name RENAME TO src_new_name;
ALTER DATA SOURCE src_name OWNER TO new_owner;
```

## 参数说明<a name="zh-cn_topic_0283136847_zh-cn_topic_0237122056_section1562551151015"></a>

-   **src\_name**

    待修改的Data Source的名称。

    取值范围：字符串，需要符合标识符的命名规范。

-   **TYPE**

    将Data Source原来的TYPE修改为指定值。

    取值范围：空串或非空字符串。

-   **VERSION**

    将Data Source原来的VERSION修改为指定值。

    取值范围：空串或非空字符串或NULL。

-   **OPTIONS**

    修改OPTIONS中的字段：增加（ADD）、修改（SET）、删除（DROP），且字段名称optname需唯一，具体要求如下：

    增加字段：ADD可以省略，待增加字段不能已经存在了；

    修改字段：SET不可省略，待修改字段必须存在；

    删除字段：DROP不可省略，待删除字段必须存在，且不能指定optvalue；

-   **src\_new\_name**

    新的Data Source名称。

    取值范围：字符串，需符合标识符命名规范。

-   **new\_user**

    对象的新属主。

    取值范围：字符串，有效的用户名。


## 示例<a name="zh-cn_topic_0283136847_zh-cn_topic_0237122056_section96641814616"></a>

```
--创建一个空Data Source对象。
openGauss=# CREATE DATA SOURCE ds_test1;

--修改名称。
openGauss=# ALTER DATA SOURCE ds_test1 RENAME TO ds_test;

--修改属主。
openGauss=# CREATE USER user_test1 IDENTIFIED BY 'Gs@123456';
openGauss=# ALTER USER user_test1 WITH SYSADMIN;
openGauss=# ALTER DATA SOURCE ds_test OWNER TO user_test1;

--修改TYPE和VERSION。
openGauss=# ALTER DATA SOURCE ds_test TYPE 'MPPDB_TYPE' VERSION 'XXX';

--添加字段。
openGauss=# ALTER DATA SOURCE ds_test OPTIONS (add dsn 'gaussdb', username 'test_user');

--修改字段。
openGauss=# ALTER DATA SOURCE ds_test OPTIONS (set dsn 'unknown');

--删除字段。
openGauss=# ALTER DATA SOURCE ds_test OPTIONS (drop username);

--删除Data Source和user对象。
openGauss=# DROP DATA SOURCE ds_test;
openGauss=# DROP USER user_test1;
```

## 相关链接<a name="zh-cn_topic_0283136847_zh-cn_topic_0237122056_section779812311320"></a>

[CREATE DATA SOURCE](CREATE-DATA-SOURCE.md)，[DROP DATA SOURCE](DROP-DATA-SOURCE.md)

