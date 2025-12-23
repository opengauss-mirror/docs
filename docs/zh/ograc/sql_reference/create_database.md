# CREATE DATABASE<a name="ZH-CN_TOPIC_0289900066"></a>

## 功能描述<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

创建一个新的数据库。

## 注意事项<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   只有拥有CREATE DATABASE权限的用户才可以创建新数据库，系统管理员默认拥有此权限。
-   只能在安装数据库过程中创建。
-   创建数据库需指定用户密码。

## 语法格式<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE database_name
             [ { [ CONTROLFILE(file1,file2,file3,....) ] |
               [ user SYS IDENTIFIED BY password ] |
               [ encoding ] |
               [ tablespace_clauses ] |
               [ logging ]}[...] ];
```

## 参数说明<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

-   **database\_name**

    数据库名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **user SYS IDENTIFIED BY password**

    数据库用户密码。

-   **CONTROLFILE(file1,file2,file3,....)**

    控制文件列表。

    取值范围：字符串，文件名称之间用逗号隔开。

-   **encoding**

    指定数据库使用的字符编码，写法：character set [UTF-8或GBK]。

    取值范围：UTF-8、GBK。不指定时，默认编码是UTF-8。

-   **tablespace**

    tablespace相关参数包括：DEFAULT TABLESPACE DATAFILE、TEMPORARY TABLESPACE TEMPFILE、UNDO TABLESPACE DATAFILE、SYSTEM TABLESPACE DATAFILE、SYSAUX TABLESPACE DATAFILE、NOLOGGING TABLESPACE TEMPFILE、NOLOGGING UNDO TABLESPACE TEMPFILE。

    > **说明：**
    >-   DEFAULT TABLESPACE DATAFILE：用于指定用户创建的对象（如表、索引）的默认存储表空间，取值范围1M~8T。用法：DEFAULT TABLESPACE DATAFILE [tablespace]。
    >-   TEMPORARY TABLESPACE TEMPFILE：用于创建和管理临时表空间，临时表空间主要用于存储数据库操作过程中产生的临时数据，比如排序操作、哈希连接等需要大量临时存储空间的操作，取值范围5M~8T。用法：TEMPORARY TABLESPACE TEMPFILE [tablespace]。
    >-   UNDO TABLESPACE DATAFILE：用于存储事务撤销信息，取值范围128M~32G。用法：UNDO TABLESPACE DATAFILE [tablespace]。
    >-   SYSTEM TABLESPACE DATAFILE：系统表空间的数据文件，用于存储核心数据，取值范围128M~8T。用法：SYSTEM TABLESPACE DATAFILE [tablespace]。
    >-   SYSAUX TABLESPACE DATAFILE：用于存储数据字典以外的其他数据库组件和工具数据，以减轻SYSTEM表空间的负担，取值范围128M~8T。用法：SYSAUX TABLESPACE DATAFILE [tablespace]。
    >-   NOLOGGING TABLESPACE TEMPFILE：NOLOGGING表空间，取值范围1M~8T。用法：NOLOGGING TABLESPACE TEMPFILE [tablespace]。
    >-   NOLOGGING UNDO TABLESPACE TEMPFILE：NOLOGGING UNDO表空间，取值范围128M~32G。用法：NOLOGGING UNDO TABLESPACE TEMPFILE [tablespace]。

-   **logging**
    创建数据库日志。参数包括：ARCHIVELOG、NOARCHIVELOG、LOGFILE、SIZE、BLOCKSIZE。

    > **说明：**
    >-   ARCHIVELOG：日志归档模式。
    >-   NOARCHIVELOG：日志非归档模式。
    >-   LOGFILE：日志文件。
    >-   SIZE：日志文件大小，单位包括：K、M、G、T、P、E，默认单位为字节，最少3个log文件，需满足size >= 56M + 16k + log_buffer_size。
    >-   BLOCKSIZE：设置块的大小，单位为字节，仅支持设置为512或4096两种值。

## 示例<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
--创建数据库指定控制文件。
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' CONTROLFILE('file1','file2','file3');

--创建数据库指定字符集。
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' character set 'UTF-8';  

--创建数据库指定日志文件。
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' LOGFILE('log1' SIZE 10M, 'log2' SIZE 10M, 'log3' SIZE 10M, 'log4' SIZE 10M, 'log5' SIZE 10M);
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' LOGFILE('log1' SIZE 10M BLOCKSIZE 512, 'log2' SIZE 10M BLOCKSIZE 512, 'log3' SIZE 10M BLOCKSIZE 512, 'log4' SIZE 10M BLOCKSIZE 512, 'log5' SIZE 10M BLOCKSIZE 512);

--创建数据库，设置表空间信息。
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' DEFAULT TABLESPACE DATAFILE 'user' size 10M autoextend on next 3M;
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' TEMPORARY TABLESPACE TEMPFILE 'temp' size 512M autoextend on next 64M;
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' UNDO TABLESPACE DATAFILE 'undo' size 2G;
SQL> CREATE DATABASE test_db user SYS IDENTIFIED BY 'test@123' SYSTEM TABLESPACE DATAFILE 'system' size 2G;

