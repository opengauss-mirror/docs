# 对表执行VACUUM<a name="ZH-CN_TOPIC_0289900069"></a>

如果导入过程中，进行了大量的更新或删除行时，应运行VACUUM FULL命令，然后运行ANALYZE命令。大量的更新和删除操作，会产生大量的磁盘页面碎片，从而逐渐降低查询的效率。VACUUM FULL可以将磁盘页面碎片恢复并交还操作系统。

1.  对表执行VACUUM FULL。

    以表product\_info为例，VACUUM FULL命令如下：

    ```
    openGauss=# VACUUM FULL product_info
    ```

    ```
    VACUUM
    ```


