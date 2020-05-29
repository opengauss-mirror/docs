# CREATE TABLESPACE<a name="ZH-CN_TOPIC_0242370584"></a>

## 功能描述<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_sbf00214c21e441f5adc2bc08ecaca4e7"></a>

在数据库中创建一个新的表空间。

## 注意事项<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_s54948265e9f34f1fac838f60ac0bd3a6"></a>

-   只有系统管理员可以创建表空间。
-   不允许在一个事务块内部执行CREATE TABLESPACE。
-   执行CREATE TABLESPACE失败，如果内部创建目录（文件）操作成功了就会产生残留的目录（文件），重新创建时需要用户手动清理表空间指定的目录下残留的内容。如果在创建过程中涉及到数据目录下的表空间软连接残留，需要先将软连接的残留文件删除，再重新执行OM相关操作。
-   CREATE TABLESPACE不支持两阶段事务，如果部分节点执行失败，不支持回滚。
-   创建表空间前的准备工作参考下述参数说明。

## 语法格式<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_s9f8a8395cc464cd2a34dec7a82fedc7b"></a>

```
CREATE TABLESPACE tablespace_name
    [ OWNER user_name ] RELATIVE LOCATION 'directory' [ MAXSIZE 'space_size' ]
    [with_option_clause];
```

其中普通表空间的with\_option\_clause为：

```
WITH ( {filesystem= { 'general'| "general" | general} |
    random_page_cost = { 'value ' | value } |
    seq_page_cost = { 'value ' | value }}[,...])
```

## 参数说明<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_see2346106f4e402da499ad74c533dfa8"></a>

-   **tablespace\_name**

    要创建的表空间名称。

    表空间名称不能和数据openGauss中的其他表空间重名，且名称不能以"pg"开头，这样的名称留给系统表空间使用。

    取值范围：字符串，要符合标识符的命名规范。

-   **OWNER user\_name**

    指定该表空间的所有者。缺省时，新表空间的所有者是当前用户。

    只有系统管理员可以创建表空间，但是可以通过OWNER子句把表空间的所有权赋给其他非系统管理员。

    取值范围：字符串，已存在的用户。

-   **RELATIVE**

    使用相对路径，LOCATION目录是相对于各个数据库节点数据目录下的。

    目录层次：数据库节点的数据目录/pg\_location/相对路径

    相对路径最多指定两层。

-   **LOCATION directory**

    用于表空间的目录，对于目录有如下要求：

    -   openGauss系统用户必须对该目录拥有读写权限，并且目录为空。如果该目录不存在，将由系统自动创建。
    -   目录必须是绝对路径，目录中不得含有特殊字符（如$,\> 等）。
    -   目录不允许指定在数据库数据目录下。
    -   目录需为本地路径。

    取值范围：字符串，有效的目录。

-   **MAXSIZE 'space\_size'**

    指定表空间在单个数据库节点上的最大值。

    取值范围：字符串格式为正整数+单位，单位当前支持K/M/G/T/P。解析后的数值以K为单位，且范围不能够超过64比特表示的有符号整数，即1KB\~9007199254740991KB。

-   **random\_page\_cost**

    指定随机读取page的开销。

    取值范围：0\~1.79769e+308。

    默认值：使用GUC参数random\_page\_cost的值。

-   **seq\_page\_cost**

    指定顺序读取page的开销。

    取值范围：0\~1.79769e+308。

    默认值：使用GUC参数seq\_page\_cost的值。


## 示例<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e"></a>

```
--创建表空间。
postgres=# CREATE TABLESPACE ds_location1 RELATIVE LOCATION 'tablespace/tablespace_1';

--创建用户joe。
postgres=# CREATE ROLE joe IDENTIFIED BY 'Bigdata@123';

--创建用户jay。
postgres=# CREATE ROLE jay IDENTIFIED BY 'Bigdata@123';

--创建表空间，且所有者指定为用户joe。
postgres=# CREATE TABLESPACE ds_location2 OWNER joe RELATIVE LOCATION 'tablespace/tablespace_1';

--把表空间ds_location1重命名为ds_location3。
postgres=# ALTER TABLESPACE ds_location1 RENAME TO ds_location3;

--改变表空间ds_location2的所有者。
postgres=# ALTER TABLESPACE ds_location2 OWNER TO jay;

--删除表空间。
postgres=# DROP TABLESPACE ds_location2;
postgres=# DROP TABLESPACE ds_location3;

--删除用户。
postgres=# DROP ROLE joe;
postgres=# DROP ROLE jay;
```

## 相关链接<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_s59e2126c54fc4725a3a50713b9163304"></a>

[CREATE DATABASE](CREATE-DATABASE.md)，[CREATE TABLE](CREATE-TABLE.md)，[CREATE INDEX](CREATE-INDEX.md)，[DROP TABLESPACE](DROP-TABLESPACE.md)，[ALTER TABLESPACE](ALTER-TABLESPACE.md)

## 优化建议<a name="zh-cn_topic_0237122120_zh-cn_topic_0059777670_section60380346161036"></a>

-   create tablespace

    不建议在事务内部创建表空间。


