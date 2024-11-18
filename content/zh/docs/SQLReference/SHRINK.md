# SHRINK

## 功能描述

将给定的压缩表或压缩索引进行 chunk 碎片的整理，整理后有利于页面的读写。

## 注意事项

-   shrink 操作只在主机上执行，备机上不能手动执行。
-   shrink 操作的时间与当前 CPU 使用率和表的大小相关。
-   shrink 本质属于优化操作，若优化时数据库异常，重新拉起后未优化的部分不再执行。

## 语法格式

```
SHRINK TABLE table_name [nowait];
SHRINK INDEX index_name [nowait];
```

## 参数说明

- nowait

    表示任务发起后立即返回，不需要等待整理结果，后台线程会定时唤醒对 shrink 添加的任务进行整理。

## 示例

对压缩表执行 SHRINK 操作：

```sql
-- 创建压缩表
CREATE TABLE row_compression
    (id int)
    WITH (compresstype=2, compress_chunk_size = 512, compress_level = 1);

-- 插入数据
INSERT INTO row_compression SELECT generate_series(1,1000);

-- SHRINK 整理
SHRINK TABLE row_compression;

-- 删除表
DROP TABLE row_compression;
```

对压缩索引执行 SHRINK 操作：

```sql
-- 创建表
CREATE TABLE tbl_idx_compression
    (id int);

-- 创建压缩索引
CREATE INDEX idx_compression
    ON tbl_idx_compression (id)
    WITH (compresstype=2, compress_chunk_size = 512, compress_level = 1);

-- 插入数据
INSERT INTO tbl_idx_compression SELECT generate_series(1,1000);

-- SHRINK 整理
SHRINK INDEX idx_compression;

-- 删除表
DROP TABLE tbl_idx_compression;
```
