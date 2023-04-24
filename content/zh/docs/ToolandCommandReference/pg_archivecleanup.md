# pg\_archivecleanup<a name="ZH-CN_TOPIC_0000001196676731"></a>

## 功能介绍<a name="section125419154813"></a>

pg\_archivecleanup是一个用于清理旧的归档日志的工具。

## 语法<a name="section554725769"></a>

```
pg_archivecleanup [OPTION]... ARCHIVELOCATION OLDESTKEPTWALFILE
```

## 参数说明<a name="section9655840194219"></a>

-   -d

    在stderr上打印调试日志。

-   -n

    打印将要删除的文件名。

-   -V,--version

    打印pg\_archivecleanup的版本并退出。

-   -x Extension

    当该程序用作单独的工具时，提供一个扩展选项，只选择对应扩展名格式的文件。

-   -?,--help

    显示关于pg\_archivecleanup命令行参数的帮助信息。


## 示例<a name="section111861451184417"></a>

删除比000000010000000000000010更早的日志

```
pg_archivecleanup [OPTION]... ARCHIVELOCATION OLDESTKEPTWALFILE
```

## 扩展应用<a name="section81714278467"></a>

备机恢复时，在recovery.conf里配置archive\_cleanup\_command参数。

```
archive_cleanup_command = 'pg_archivecleanup /mnt/server/archiverdir %r'
```

恢复完成后从归档目录中清除不再需要的文件。

