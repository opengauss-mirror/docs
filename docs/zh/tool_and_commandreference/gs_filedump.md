# 物理文件解析工具 - gs_filedump

## 功能介绍

**gs_filedump** 是一个用于解析 openGauss 数据库的物理文件, 控制文件和映射文件内容的工具，能够将这些文件格式化为人类可读的形式。它提供了多种选项来指定块大小、范围、段、TOAST以及项目的解释方式。这个工具通常不需要开启数据库，可以直接从数据文件中将数据dump出来。

## 前提条件

保证数据库目录存在且路径正确。

## 语法

```
gs_filedump [-abcdfhikuxy] [-r relfilenode] [-T reltoastrelid] [-R startblock [endblock]] [-D attrlist] [-S blocksize] [-s segsize] [-n segnumber] FILENAME
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `-a` | 显示绝对地址（块头信息始终是相对的） |
| `-b` | 显示指定范围内的二进制块镜像（会关闭所有格式化选项） |
| `-d` | 显示格式化的块内容转储（会关闭所有其他格式化选项） |
| `-D` | 解析的表的列类型，以逗号分割，<br>支持的类型：bigint, bigserial, bool, char, charN, date, float, float4, float8, int, <br> json, macaddr, name, numeric, oid, real, serial, smallint, smallserial, text, <br> time, timestamp, timestamptz, timetz, uuid, varchar, varcharN, xid, xml<br> **~** 忽略元组中剩余的所有属性 |
| `-f` | 显示格式化的块内容转储及解释 |
| `-h` | 显示帮助信息 |
| `-i` | 显示解析条目的详细信息  |
| `-k` | 验证块校验和 |
| `-o` | 不转储旧值 |
| `-R` | 指定要解析的block范围（块从0开始索引）<br>[startblock]：起始块<br>[endblock]：结束块<br>仅有起始块时将格式化单个块 |
| `-s` | 强制段大小为[segsize] |
| `-u` | 解码存储类型为ustore的块 |
| `-t` | 转储TOAST文件（支持 **astore** 和 **ustore** 存储引擎）|
| `-v` | 输出关于TOAST关系的额外信息 |
| `-n` | 强制段号为[segnumber] |
| `-S` | 强制块大小为[blocksize] |
| `-x` | 强制将块项目解释为索引项目格式 |
| `-y` | 强制将块项目解释为堆项目格式 |

### 段页式表相关选项

> 当指定分段存储表时，文件路径必须指定为 '{filedir}/1'

| 参数 | 说明 |
|------|------|
| `-r` | 指定表的relfilenode [relfilenode] |
| `-T` | 指定表的pg_toast的relfilenode [reltoastrelid]<br>参数 **-t** 将不被支持 |

### 控制文件相关选项

| 参数 | 说明 |
|------|------|
| `-c` | 将列出的文件解释为控制文件 |
| `-f` | 显示格式化的内容转储及解释 |
| `-S` | 强制块大小为[blocksize] |

### 附加功能

| 参数 | 说明 |
|------|------|
| `-m` | 将文件解释为 **pg_filenode.map** 文件并打印内容（所有其他选项将被忽略） |

## 使用举例

+ 解析 ustore引擎表。

```
gs_filedump -u -ot -D int,timestamp,time,timetz,~  $PGDATA/base/15938/16384
```

+ 解析 段页式表。

```
 gs_filedump -o -r 4161 -T 4162 -D int,smallint,bigint,~  $PGDATA/base/15938/1
```

+ 解析 控制文件。

```
gs_filedump -c $PGDATA/global/pg_control
```

+ 解析 map映射文件。

```
gs_filedump -m $PGDATA/global/pg_filenode.map
```

### 其他

可通过辅助工具 [**gs_desc**](./gs_desc.md) 获取表结构信息及建议查询命令。
