# ALTER TABLESPACE<a name="ZH-CN_CONCEPT_0289895656"></a>

## 功能描述

修改一个已存在的表空间的属性。

## 注意事项

-   只有表空间的所有者或者被授予了表空间ALTER权限的用户有权限执行ALTER TABLESPACE命令，系统管理员默认拥有此权限。
-   执行如下操作时需要在数据库为open的状态下执行：
    - 增加数据文件
    - 删除数据文件
    - 修改文件的AUTOEXTEND属性
    - 重命名表空间
-   执行如下操作时需要在数据库为open restricted的状态下执行：
    - 修改数据文件名称
-   只能对用户的表空间设置AUTOOFFLINE的属性

## 语法格式

重命名表空间：

```SQL
 ALTER TABLESPACE 'tablespace_name'
    RENAME TO 'new_tablespace_name'
```

收缩表空间大小和压缩表空间大小：

```SQL
 ALTER TABLESPACE 'tablespace_name'
    { SHRINK SPACE KEEP integer [ K | M | G | T ]
    | PUNCH { SIZE integer [ K | M | G ] } }
```

修改表空间的AUTOOFFLINE和AUTOEXTEND属性：

```SQL
 ALTER TABLESPACE 'tablespace_name'
    { AUTOOFFLINE { ON | OFF }
     | AUTOEXTEND 
          { OFF 
          | ON [ NEXT integer [ K | M | G ] ] [ MAXSIZE { integer [ K | M | G ] | UNLIMITED }] 
          }
    }
```

向表空间中添加和删除数据文件：

```SQL
 ALTER TABLESPACE 'tablespace_name'
   { ADD DATAFILE 
      { 'file_name' SIZE integer [ K | M | G ] [COMPRESS] 
        [AUTOEXTEND 
          { OFF 
          | ON [ NEXT integer [ K | M | G ] ] [ MAXSIZE { integer [ K | M | G ] | UNLIMITED }] 
          } 
        ] [ segments integer ]
      }
     | DROP DATAFILE 'file_name' }
```

重命名表空间中数据文件：

```SQL
 ALTER TABLESPACE 'tablespace_name'
   RENAME DATAFILE 'old_file_name' TO 'new_file_name'
```

## 参数说明

-   **公共参数**

    integer: 表示非0的正整数范围。
    K: 单位KB
    M: 单位MB
    G: 单位GB
    T: 单位TB
    
-   **tablespace\_name**

    要修改的表空间。

    取值范围：已存在的表空间名。

-   **new\_tablespace\_name**

    表空间的新名称。
    取值范围：字符串，符合标识符命名规范。

-   **RENAME TO 'new_tablespace_name'**

    修改表空间的名称

-   **SHRINK SPACE KEEP integer [ K | M | G | T ]**

    收缩表空间大小。
    - 在RESTRICTED模式且保证无残留事务的前提下，可以用于重建UNDO表空间。
    - 在OPEN模式下可以对除了TEMP表空间之外的其他表空间进行收缩。
    - TEMP表空间需要在OPEN RESTRICT模式下进行收缩。
    - 表空间实际可收缩的空间大小依赖当前表空间中的各个数据文件从高水位线开始的连续空闲空间大小。
    - 当用户指定的KEEP SIZE小于实际可保留的空间时，以用户指定的保留空间大小为准，当用户指定的KEEP SIZE大于等于实际可保留的空间时，以实际可保留的空间大小为准
    - SHRINK操作被中断后可能造成信息残留。

    取值范围：`1M - 8000T`

-   **PUNCH { SIZE integer [ K | M | G ] }**

    压缩表空间大小，对表空间中的空闲页面进行压缩
    - 加密、临时、UNDO、默认表空间不可进行压缩。
    - 被压缩的页面无法被原表空间复用。

    取值范围：`1M - 500G`

-   **AUTOOFFLINE { ON | OFF }**

    设置表空间开启自动离线的功能
    - 开启自动离线的表空间，在数据库启动过程中如果存在文件打开失败的问题时，会自动离线，启动之后异常不会自动离线
    - 开启自动离线的表空间，在数据库启动过程中如果存在文件发送损坏或其他故障时，可以将数据库加载到Mount状态；如果没有开启自动离线，表空间中文件发送损坏或其他故障时，数据库将无法正常启动

-   **AUTOEXTEND { OFF | ON [ NEXT integer [ K | M | G ] ] [ MAXSIZE { integer [ K | M | G ] | UNLIMITED }] }**

    设置表空间或数据文件的自动扩展属性
    - 不指定AUTOEXTEND子句或者设置AUTOEXTEND为OFF时，默认不自动扩展空间
    - 设置AUTOEXTEND为ON时，可设置的子属性如下：
      - NEXT指定自动扩展的大小，未指定时默认16MB
      - MAXSIZE指定数据文件自动扩展的上限，未指定或设置为UNLIMITED时，UNDO表空间的上限为32GB，其他表空间的上限为8TB，用户指定的上限大小不可超过该范围。
      - 当MAXSIZE和NEXT同时设置时，指定的上限值不得小于指定的自动扩展值

-   **ADD DATAFILE { 'file_name' SIZE integer [ K | M | G ] [COMPRESS] [AUTOEXTEND ...] [ segments integer ] }**
  
      向表空间中添加数据文件
    - `file_name`为数据文件名，如果指定文件名是相对路径的格式时，默认保存在数据目录的data目录下
    - COMPRESS表示指定新增的数据文件为压缩属性，压缩文件用于存储压缩属性的表，当使用压缩表特性时，需要同步在对应表空间下创建压缩文件。
    - AUTOEXTEND属性参考上一个描述
    - **segments integer** 表示需要扩展的SEGMENT数量，SEGMENTS子句仅在RESTRICT模式下可用，且仅支持UNDO表空间，仅支持单次添加单个数据文件。SEGMENTS子句的取值下限为1，在_UNDO_SEGMENTS尚未达到1024上限时，子句的上限取值为`1024 - 当前UNDO_SEGMENTS的大小`。若_UNDO_SEGMENTS已经为1024了，那么此时无法继续扩展。SEGMENTS子句是一种在受限模式下使用的补救措施，其过程包含了多个涉及资源持久化的过程，所以无法保证整个端到端操作的原子性。如果在使用SEGMENTS子句的过程中出现异常，用户需要根据实际情况自行处理。
    - UNDO SEGMENTS扩展和UNDO SPACE切换在机制上冲突，当数据库执行过UNDO SEGMENTS扩展后，再执行UNDO SPACE切换时会报错。

-   **RENAME DATAFILE 'old_file_name' TO 'new_file_name'**

      重命名表空间中的数据文件

## 示例

- **向表空间tbs_student中添加数据文件。**

```
-- 创建表空间tbs_student。
 CREATE TABLESPACE tbs_student DATAFILE '-dfile_tbs_01' SIZE 32M AUTOEXTEND ON NEXT 10M;

-- 向表空间tbs_student中添加数据文件my_datafile（大小是32M），manager_dfile（大小是32M）和section_dfile（大小是32M）。
 ALTER TABLESPACE tbs_student ADD DATAFILE '-my_datafile' SIZE 32M, 'manager_dfile' SIZE 32M, 'section_dfile' SIZE 32M;

```

- **删除表空间tbs_student中的数据文件manager_dfile。**

```
ALTER TABLESPACE tbs_student DROP DATAFILE 'manager_dfile';
```

- **OPEN RESTRICTED状态下将表空间tbs_student中的数据文件my_datafile重命名为new_my_datafile。**

```
-- OPEN RESTRICTED状态下将表空间tbs_student中的数据文件my_datafile重命名为new_my_datafile
ALTER TABLESPACE tbs_student RENAME DATAFILE 'my_datafile' TO 'new_my_datafile';
```

- **修改表空间tbs_student为自动扩展，数据插满时，表空间自动扩展，可手动指定每次扩展大小。**

```
ALTER TABLESPACE tbs_student AUTOEXTEND ON NEXT 5M;
```

- **将表空间名称tbs_student修改为data_tbs_student：**

```
ALTER TABLESPACE tbs_student RENAME TO data_tbs_student;
```
