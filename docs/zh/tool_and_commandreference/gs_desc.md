# gs_filedump工具辅助工具 - gs_desc

## 功能介绍

通过调用 **gs_filedump** 工具从数据库目录中解析表结构，并显示到终端。

## 前提条件

**gs_filedump** 工具在环境变量中配置，可直接被调用。 <br>
保证数据库目录中 **pg_filenode.map** 文件完整，系统表 **pg_database** , **pg_namespace**, **pg_class**, **pg_attribute**, **pg_type** 对应的物理文件存在。

## 语法

```
gs_desc [-h] [-s SEARCHPATH] [-n NAMESPACE [NAMESPACE ...]] -t TABLENAME [TABLENAME ...]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `-h, --help` | 显示帮助信息并退出 |
| `-s SEARCHPATH, --searchpath SEARCHPATH` | 指定搜索路径<br> 默认值：**$PGDATA** |
| `-n NAMESPACE [NAMESPACE ...], --namespace NAMESPACE [NAMESPACE ...]` | 指定命名空间（可指定多个） |
| `-t TABLENAME [TABLENAME ...], --tablename TABLENAME [TABLENAME ...]` | 指定表名（可指定多个） |

## 使用举例

+ 指定命名空间和表名。

```
gs_desc -n public -t tbl01
```

+ 仅指定表名。

```
gs_desc -t tbl01
```

+ 指定多个表名。

```
gs_desc -t tbl01 tbl02
```

+ 指定搜索路径。

```
gs_desc -t tbl01 tbl02 -s /data/
```
