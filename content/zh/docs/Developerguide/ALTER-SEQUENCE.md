# ALTER SEQUENCE<a name="ZH-CN_TOPIC_0289900494"></a>

## 功能描述<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_s806d414edb004fa89cd50a1166d1136e"></a>

修改一个现有的序列的参数。

## 注意事项<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_sfccb497f01564edb804ecee58fe2698c"></a>

-   序列的所有者或者被授予了序列ALTER权限的用户或者被授予了ALTER ANY SEQUENCE权限的用户才能执行ALTER SEQUENCE命令，系统管理员默认拥有该权限。但要修改序列的所有者，当前用户必须是该序列的所有者或者系统管理员，且该用户是新所有者角色的成员。
-   当前版本仅支持修改拥有者、归属列和最大值。若要修改其他参数，可以删除重建，并用Setval函数恢复当前值。
-   ALTER SEQUENCE MAXVALUE不支持在事务、函数和存储过程中使用。
-   修改序列的最大值后，会清空该序列在所有会话的cache。
-   如果Sequence被创建时使用了LARGE标识，则ALTER时也需要使用LARGE标识。
-   ALTER SEQUENCE会阻塞nextval、setval、currval和lastval的调用。

## 语法格式<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   修改序列归属列

    ```
    ALTER  SEQUENCE [ IF EXISTS ] name 
        [MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE | CACHE cache]
        [ OWNED BY { table_name.column_name | NONE } ] ;
    ```


-   修改序列的拥有者

    ```
    ALTER SEQUENCE [ IF EXISTS ] name OWNER TO new_owner;
    ```


## 参数说明<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_s8277cc73aecc4f20845d2ddf456a20e7"></a>

-   name

    将要修改的序列名称。

-   IF EXISTS

    当序列不存在时使用该选项不会出现错误消息，仅有一个通知。

-    CACHE

    为了快速访问，而在内存中预先存储序列号的个数。如果没有指定，将保持旧的缓冲值。

-   OWNED BY

    将序列和一个表的指定字段进行关联。这样，在删除那个字段或其所在表的时候会自动删除已关联的序列。

    如果序列已经和表有关联后，使用这个选项后新的关联关系会覆盖旧的关联。

    关联的表和序列的所有者必须是同一个用户，并且在同一个模式中。

    使用OWNED BY NONE将删除任何已经存在的关联。

-   new\_owner

    序列新所有者的用户名。用户要修改序列的所有者，必须是新角色的直接或者间接成员，并且那个角色必须有序列所在模式上的CREATE权限。


## 示例<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_sd7a0dca78f6844d79a0ec70fb4213769"></a>

```
--创建一个名为serial的递增序列，从101开始。
openGauss=# CREATE SEQUENCE serial START 101;

--创建一个表，定义默认值。
openGauss=# CREATE TABLE T1(C1 bigint default nextval('serial'));

--将序列serial的归属列变为T1.C1。
openGauss=# ALTER SEQUENCE serial OWNED BY T1.C1;

--删除序列和表。
openGauss=# DROP SEQUENCE serial cascade;
openGauss=# DROP TABLE T1;
```

## 相关链接<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_seadab16e00ee41c383d8cba1759ed7c8"></a>

[CREATE SEQUENCE](CREATE-SEQUENCE.md)，[DROP SEQUENCE](DROP-SEQUENCE.md)

