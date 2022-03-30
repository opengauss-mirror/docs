# 闪回DROP/TRUNCATE<a name="ZH-CN_TOPIC_0000001223332059"></a>

## 背景信息<a name="section5637175821615"></a>

-   闪回DROP：可以恢复意外删除的表，从回收站（recyclebin）中恢复被删除的表及其附属结构如索引、表约束等。闪回drop是基于回收站机制，通过还原回收站中记录的表的物理文件，实现已drop表的恢复。
-   闪回TRUNCATE：可以恢复误操作或意外被进行truncate的表，从回收站中恢复被truncate的表及索引的物理数据。闪回truncate基于回收站机制，通过还原回收站中记录的表的物理文件，实现已truncate表的恢复。

## 前提条件<a name="section17975164121712"></a>

-   开启enable\_recyclebin参数，启用回收站。
-   recyclebin\_retention\_time参数用于设置回收站对象保留时间，超过该时间的回收站对象将被自动清理。

## 相关语法<a name="section12145151281719"></a>

-   删除表

    ```
    DROP TABLE table_name [PURGE]
    ```


-   清理回收站对象

    ```
    PURGE { TABLE { table_name }
    | INDEX { index_name }
    | RECYCLEBIN
    }
    ```


-   闪回被删除的表

    ```
    TIMECAPSULE TABLE { table_name } TO BEFORE DROP [RENAME TO new_tablename]
    ```


-   截断表

    ```
    TRUNCATE TABLE { table_name } [ PURGE ]
    ```

-   闪回截断的表

    ```
    TIMECAPSULE TABLE { table_name } TO BEFORE TRUNCATE
    ```


## 参数说明<a name="section16105182016179"></a>

-   DROP/TRUNCATE TABLE table\_name PURGE
    -   默认将表数据放入回收站中，PURGE直接清理。


-   PURGE RECYCLEBIN
    -   表示清理回收站对象。

-   **TO BEFORE DROP**

    使用这个子句检索回收站中已删除的表及其子对象。

    可以指定原始用户指定的表的名称，或对象删除时数据库分配的系统生成名称。

    -   回收站中系统生成的对象名称是唯一的。因此，如果指定系统生成名称，那么数据库检索指定的对象。使用“select  \* from gs\_recyclebin;”语句查看回收站中的内容。
    -   如果指定了用户指定的名称，且如果回收站中包含多个该名称的对象，然后数据库检索回收站中最近移动的对象。如果想要检索更早版本的表，你可以这样做：

        -   指定你想要检索的表的系统生成名称。

        -   执行TIMECAPSULE TABLE ... TO BEFORE  DROP语句，直到你要检索的表。

    -   恢复DROP表时，只恢复基表名，其他子对象名均保持回收站对象名。用户可根据需要，执行DDL命令手工调整子对象名。
    -   回收站对象不支持DML、DCL、DDL等写操作，不支持DQL查询操作（后续支持）。
    -   闪回点和当前点之间，执行过修改表结构或影响物理结构的语句，闪回失败。执行过DDL的表进行闪回操作报错：“ERROR：The table definition of %s has been changed. ”。涉及namespace、表名改变等操作的DDL执行闪回操作报错： ERROR: recycle object %s desired does not exis；

-   **RENAME  TO**

    为从回收站中检索的表指定一个新名称。

-   **TO BEFORE TRUNCATE**

    闪回到TRUNCATE之前。


## 语法示例<a name="section19448202620171"></a>

```
DROP TABLE t1 PURGE;

PURGE TABLE t1;
PURGE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0";
PURGE INDEX i1;
PURGE INDEX "BIN$04LhcpndanfgMAAAAAANPw==$0";
PURGE RECYCLEBIN;

TIMECAPSULE TABLE t1 TO BEFORE DROP;
TIMECAPSULE TABLE t1 TO BEFORE DROP RENAME TO new_t1;
TIMECAPSULE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0" TO BEFORE DROP;
TIMECAPSULE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0" TO BEFORE DROP RENAME TO new_t1;
```

