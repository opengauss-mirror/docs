# MOT VACUUM清理<a name="ZH-CN_TOPIC_0280525146"></a>

使用VACUUM进行垃圾收集，并有选择地分析数据库，如下所示。

-   【Postgres】

    在Postgres中，VACUUM用于回收死元组占用的存储空间。在正常的Postgres操作中，删除的元组或因更新而作废的元组不会从表中物理删除。只能由VACUUM清理。因此，需要定期执行VACUUM，特别是在频繁更新的表上。

-   【MOT扩展】

    MOT不需要周期性的VACUUM操作，因为新元组会重用失效元组和空元组。只有当MOT的大小急剧减少，并且不计划恢复到原来大小时，才需要VACUUM操作。

    例如，应用程序定期（如每周一次）大量删除表数据的同时插入新数据，这需要几天时间，并且不一定是相同数量的行。在这种情况下，可以使用VACUUM。

    对MOT的VACUUM操作总是被转换为带有排他表锁的VACUUM FULL。

-   支持的语法和限制

    按规范激活VACUUM操作。

    ```
    VACUUM [FULL | ANALYZE] [ table ]; 
    ```

    只支持FULL和ANALYZE VACUUM两种类型。VACUUM操作只能对整个MOT进行。

    不支持以下Postgres VACUUM选项：

    -   FREEZE
    -   VERBOSE
    -   Column specification
    -   LAZY模式（部分表扫描）

    此外，不支持以下功能：

    -   AUTOVACUUM


