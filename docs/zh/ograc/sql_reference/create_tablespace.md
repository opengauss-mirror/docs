# CREATE TABLESPACE

## 功能描述

创建表空间

## 注意事项

- 执行需要CREATE TABLESPACE权限
- 不能将数据文件指定到日志目录
- 普通用户不建议使用system表空间
- 表空间单个数据库文件大小上限和PAGE_SIZE有关，对于UNDO表空间，大小上限 = 4 *1024* 1024 *PAGE_SIZE，其他表空间大小上限 = 1024* 1024 *1024* PAGE_SIZE

## 语法格式

**stmt:**

```
CREATE [UNDO] TABLESPACE name
    DATAFILE {datafile_clause [, ...]} 
    [NOLOGGING]
    [autooffline_clause]
    [EXTENT AUTOALLOCATE]
```

**datafile_clause:**

```
    file_name SIZE size_clause
    [COMPRESS]
    [autoextend_clause]
```

**autoextend_clause:**

```
    AUTOEXTEND {OFF 
                |   ON [NEXT size_clause] [MAXSIZE {size_clause | UNLIMITED}]
                }
```

**autooffline_clause:**

```
    AUTOOFFLINE [ON|OFF]
```

**size_clause:**

```
    size [K|M|G]
```

- K: KB
- M: MB
- G: GB

## 参数说明

- UNDO: 创建UNDO表空间
- file_name: 表空间数据文件路径，可以指定绝对路径，也可以指定为相对路径，相对路径保存在数据目录。数据文件所在目录/父目录的属主和属组与数据库安装用户一致，权限700
- NOLOGGING: 表空间为NOLOGGING类型
- EXTENT AUTOALLOCATE: 表空间extent size字段扩展
- COMPRESS: 表压缩特性,集群模式不适用
- AUTOEXTEND OFF：关闭表空间大小自动扩展。默认关闭
- AUTOEXTEND ON: 开启自动扩展
    - NEXT: 自动扩展的大小
    - MAXSIZE: 自动扩展的上限
    - UNLIMITED: 无限扩展
- AUTOOFFLINE ON/OFF：表空间自动离线，启动时生效，文件打开失败自动离线。只能对用户表空间设置。

## 示例

```SQL
-- 1. 创建基础表空间
CREATE TABLESPACE tbs1
    DATAFILE '/home/ogracdba/data/tbs1.dbf' SIZE 100M;

-- 2. 创建带自动扩展的表空间
CREATE TABLESPACE tbs2
    DATAFILE '/home/ogracdba/data/tbs2.dbf' SIZE 200M
    AUTOEXTEND ON NEXT 50M MAXSIZE 1G;

-- 3. 创建无限自动扩展的表空间
CREATE TABLESPACE tbs3
    DATAFILE '/home/ogracdba/data/tbs3.dbf' SIZE 500M
    AUTOEXTEND ON NEXT 100M MAXSIZE UNLIMITED;

-- 4. 创建多个数据文件的表空间
CREATE TABLESPACE tbs4
    DATAFILE 
        '/home/ogracdba/data/tbs4_1.dbf' SIZE 100M,
        '/home/ogracdba/data/tbs4_2.dbf' SIZE 200M
    EXTENT AUTOALLOCATE;

-- 5. 创建UNDO表空间
CREATE UNDO TABLESPACE undotbs
    DATAFILE '/home/ogracdba/data/undotbs.dbf' SIZE 2G
    AUTOEXTEND ON NEXT 500M MAXSIZE 10G;

-- 6. 创建NOLOGGING表空间
CREATE TABLESPACE tbs_nolog
    DATAFILE '/home/ogracdba/data/tbs_nolog.dbf' SIZE 300M
    NOLOGGING;

-- 7. 创建压缩表空间
CREATE TABLESPACE tbs_compress
    DATAFILE '/home/ogracdba/data/tbs_compress.dbf' SIZE 500M COMPRESS
    AUTOEXTEND ON NEXT 100M;

-- 8. 创建带自动离线功能的表空间
CREATE TABLESPACE tbs_autooffline
    DATAFILE '/home/ogracdba/data/tbs_autooffline.dbf' SIZE 200M
    AUTOOFFLINE ON;

-- 9. 组合多种特性的表空间
CREATE TABLESPACE tbs_complex
    DATAFILE 
        '/home/ogracdba/data/tbs_complex1.dbf' SIZE 300M COMPRESS,
        '/home/ogracdba/data/tbs_complex2.dbf' SIZE 300M
    NOLOGGING
    AUTOOFFLINE ON
    EXTENT AUTOALLOCATE
    AUTOEXTEND ON NEXT 100M MAXSIZE 2G;

-- 10. 使用相对路径的表空间（相对于数据库数据目录）
CREATE TABLESPACE tbs_relative
    DATAFILE './tbs_relative.dbf' SIZE 100M;

-- 11. 关闭自动扩展的表空间
CREATE TABLESPACE tbs_noextend
    DATAFILE '/home/ogracdba/data/tbs_noextend.dbf' SIZE 500M
    AUTOEXTEND OFF;

-- 12. 创建自动离线关闭的表空间
CREATE TABLESPACE tbs_nooffline
    DATAFILE '/home/ogracdba/data/tbs_nooffline.dbf' SIZE 200M
    AUTOOFFLINE OFF;

```
