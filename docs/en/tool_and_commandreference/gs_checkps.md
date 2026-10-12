# gs_checkps

## Background

openGauss provides the `gs_checkps` tool to verify whether the MD5 values of data files (including metadata files, FSM files, and VM files), XLOG files, CLOG, CSNLOG, and undo on the primary and standby nodes of a cluster are consistent. It exports the results in a visual HTML report, making it easy to intuitively compare data files with inconsistent MD5 values.

Since in a database cluster some data files inherently have inconsistent MD5 values across nodes, this report is for **reference only**.

## Prerequisites

- The `pagehack` tool is used when parsing the `pg_filenode.map` file. If it is not installed, the report will indicate that the `pagehack` tool is not installed.
- If the database is not started, object names and types cannot be resolved (only physical file differences will be displayed).

## Precautions

- When retrieving physical files, if the file size is 0 or the file's MD5 value is one of a few fixed values, the file is determined to be empty and will be ignored and not exported.
- When retrieving object information, if the schema belongs to certain system schemas such as `['information_schema', 'dbe_pldeveloper', 'pg_catalog', 'db4ai', 'cstore']`, it will be ignored and not exported.
- If the object type is an index, it will be ignored and not exported. To display index files, specify the `--show-index` parameter.
- When a database node is unreachable, the tool cannot determine the primary node information. You must manually enter the primary node ID when executing, and object names and replication status will not be displayed.

## Syntax

- Execute the verification tool (run as the openGauss installation user):

  ```
  gs_checkps [--show-index] [-o OUTFILE]
  ```
- Display help information:

  ```
  gs_checkps -? | --help
  ```
- Display version information:

  ```
  gs_checkps -V | --version
  ```

## Parameter Description

- **--show-index**

Displays the MD5 comparison results for index files in the report. By default, index files are not displayed.

- **-o**

Specifies the output file for the report.

**Value range**: A specified file name, in HTML format.

If not specified, the report is output to the `$PGHOST` directory. If the `$PGHOST` environment variable is not found, the report is output to the `/tmp` directory with the file name `checkps_rpt_YYYYMMDDhhmmss.html`.

- **-?, --help**

Displays help information.

- **-V, --version**

Displays version information.

## Examples

**Example 1**: By default, index file comparison information is not displayed.

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
Total files compared: 2006, inconsistencies found: 27
✅ Result saved to: /home/omm/reports/rpt_checkps_001.html
```

**Example 2**: Display index file comparison information in the report.

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
Total files compared: 2006, inconsistencies found: 35
✅ Result saved to: /home/omm/reports/rpt_checkps_002.html
```

## Related Commands

[gs_check](gs_check.md), [gs_checkos](gs_checkos.md), [gs_checkse](gs_checkse.md), [gs_checkperf](gs_checkperf.md)
