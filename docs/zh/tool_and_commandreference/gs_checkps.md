# gs\_checkps

## 背景信息

openGauss提供了gs\_checkps工具用于校验集群主备节点的数据文件（含元数据文件、FSM文件、VM文件）、xlog文件、clog、csnlog、undo的md5值是否一致，并以可视化HTML报表的形式导出，方便直观对比MD5值不一致的数据文件。

由于数据库集群中，一些数据文件的md5值在各节点本身就存在不一致的情况，因此该报表仅供辅助参考。

## 前提条件

- 在解析pg_filenode.map文件时用到了pagehack工具，若未安装报表中会提示 pagahack工具未安装。。
- 若数据库未启动，无法解析对象名称和类型（仅展示物理文件差异）。

## 注意事项

- 在获取物理文件时，如果文件大小为0，或文件的MD5值为某几个固定值，则判断文件为空，会忽略不导出。
- 在获取对象信息时，如果查询到模式为['information_schema', 'dbe_pldeveloper', 'pg_catalog', 'db4ai', 'cstore']等系统schema，会忽略不导出。
- 如果对象类型为索引，会忽略不导出，如果展示索引文件，可指定参数 "--show-index"。
- 当数据库节点不可以的时候，工具无法判断主节点信息，执行时需要手动输入主节点编号，并且不再展示对象名称和复制状态。

## 语法

- 执行校验工具（openGauss安装用户）

  ```
  gs_checkps [--show-index] [-o OUTFILE]
  ```
- 显示帮助信息

  ```
  gs_checkps -? | --help
  ```
- 显示版本号信息

  ```
  gs_checkps -V | --version
  ```

## 参数说明

- --show-index

  在报表中显示索引文件的MD5值对比结果，默认不显示。
- -o

  指定报告输出到指定的文件。

  取值范围：指定的文件名称，HTML文件。

  不指定则输出到 `$PGHOST`目录，如果未找到环境变量 `$PGHOST` 则输出到 `/tmp`目录，文件名为checkps_rpt_YYYYMMDDhhmmss.html。
- -?, --help

  显示帮助信息。
- -V, --version

  显示版本号信息。

## 示例

示例一：默认不展示索引文件对比信息。

```
$ gs_checkps -o reports/rpt_checkps_001.html
2026-03-25 17:38:09,130 - INFO - get_cluster_info - 131 - Getting cluster info from Static Config. 
2026-03-25 17:38:09,439 - INFO - get_local_role - 181 - Getting local db role in cluster. 
2026-03-25 17:38:09,510 - INFO - get_md5value_of_primary_data - 234 - Checking connectivity via ping... 
2026-03-25 17:38:17,648 - INFO - get_md5value_of_primary_data - 245 - Getting MD5 values of data files from all hosts: ['192.168.56.121', '192.168.56.122', '192.168.56.123'] 
result_dict: {'192.168.56.121': 'Success', '192.168.56.123': 'Success', '192.168.56.122': 'Success'}
2026-03-25 17:38:23,149 - INFO - get_filenode_map_info - 503 - Getting filenode_map info from global and template1. 
2026-03-25 17:38:23,177 - INFO - get_datbase_info - 530 - Getting oid, datname in pg_database. 
2026-03-25 17:38:23,243 - INFO - get_pg_class_info - 546 - Getting pg_class_info of database: template1. 
2026-03-25 17:38:23,337 - INFO - get_pg_class_info - 546 - Getting pg_class_info of database: postgres. 
2026-03-25 17:38:23,420 - INFO - get_pg_class_info - 546 - Getting pg_class_info of database: mydb. 
共比较 2006 个文件，发现 27 处不一致
✅ 结果已保存到: /home/omm/reports/rpt_checkps_001.html
```

示例二：在报表中展示索引文件的对比信息。

```
$ gs_checkps --show-index -o reports/rpt_checkps_002.html
2026-03-25 17:39:22,175 - INFO - get_cluster_info - 131 - Getting cluster info from Static Config. 
2026-03-25 17:39:22,460 - INFO - get_local_role - 181 - Getting local db role in cluster. 
2026-03-25 17:39:22,521 - INFO - get_md5value_of_primary_data - 234 - Checking connectivity via ping... 
2026-03-25 17:39:30,586 - INFO - get_md5value_of_primary_data - 245 - Getting MD5 values of data files from all hosts: ['192.168.56.121', '192.168.56.122', '192.168.56.123'] 
result_dict: {'192.168.56.123': 'Success', '192.168.56.121': 'Success', '192.168.56.122': 'Success'}
2026-03-25 17:39:35,992 - INFO - get_filenode_map_info - 503 - Getting filenode_map info from global and template1. 
2026-03-25 17:39:36,012 - INFO - get_datbase_info - 530 - Getting oid, datname in pg_database. 
2026-03-25 17:39:36,053 - INFO - get_pg_class_info - 546 - Getting pg_class_info of database: template1. 
2026-03-25 17:39:36,115 - INFO - get_pg_class_info - 546 - Getting pg_class_info of database: postgres. 
2026-03-25 17:39:36,182 - INFO - get_pg_class_info - 546 - Getting pg_class_info of database: mydb. 
共比较 2006 个文件，发现 35 处不一致
✅ 结果已保存到: /home/omm/reports/rpt_checkps_002.html
```

## 相关命令

[gs\_check](gs_check.md)，[gs\_checkos](gs_checkos.md)，[gs\_checkse](gs_checkse.md)，[gs\_checkperf](gs_checkperf.md)
