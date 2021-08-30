# pg\_archivecleanup<a name="ZH-CN_TOPIC_0000001092048361"></a>

## 功能介绍<a name="section143231619112113"></a>

pg\_archivecleanup是一个用于清理旧的归档日志的工具。

## 语法<a name="section1763981272215"></a>

```
pg_archivecleanup [OPTION]... ARCHIVELOCATION OLDESTKEPTWALFILE
```

## 参数说明<a name="section927885412230"></a>

-   OPTION取值如下所示：
    -   -d

        在stderr上打印调试日志。

    -   -n

        打印将要删除的文件名。

    -   -V | --version

        打印pg_archivecleanup的版本并退出。

    -   -x extension

        当该程序用作单独的工具时，提供一个扩展选项，只选择对应扩展名格式的文件。

    -   -? | --help

        显示关于pg_archivecleanup命令行参数的帮助信息。

## 示例<a name="section655133344515"></a>

1.  删除比000000010000000000000010更早的日志

    ```
    pg_archivecleanup /mnt/server/archiverdir 000000010000000000000010
    ```

## 扩展应用<a name="section655133344516"></a>

1.  备机恢复时，在recovery.conf里配置archive_cleanup_command参数。

    ```
    archive_cleanup_command = 'pg_archivecleanup /mnt/server/archiverdir %r'
    ```

    恢复完成后从归档目录中清除不再需要的文件。
