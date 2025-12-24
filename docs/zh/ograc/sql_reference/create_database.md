# CREATE DATABASE<a name="ZH-CN_TOPIC_0289900066"></a>

## 功能描述<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

创建一个新的数据库。

## 注意事项<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   只有拥有CREATE DATABASE权限的用户才可以创建新数据库，系统管理员默认拥有此权限。
-   只能在安装数据库过程中自动创建，无需手动创建。
-   若创建失败，需重启数据库再次创建。

## 语法格式<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```            
create database clustered database_name 
             [ { [ character set ] |
               [ controlfile('file1','file2','file3',....) ] |
               [ system tablespace datafile ] |
               [ nologging tablespace TEMPFILE ] |
               [ nologging undo tablespace TEMPFILE ] |
               [ default tablespace datafile ] |
               [ sysaux tablespace DATAFILE ] |
               [ undo tablespace datafile ] |
               [ temporary tablespace TEMPFILE ] |
               [ logfile ]}[...] ];
```

## 参数说明<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

-   **database\_name**

    数据库名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **character set**

    指定数据库使用的字符编码。

    取值范围：仅支持UTF-8和GBK。不指定时，默认编码是UTF-8。

-   **controlfile**

    控制文件列表。

    取值范围：字符串，文件名称之间用逗号隔开。

-   **tablespace**

    tablespace相关参数包括：system tablespace datafile、nologging tablespace TEMPFILE、nologging undo tablespace TEMPFILE、default tablespace datafile、sysaux tablespace DATAFILE、undo tablespace datafile、temporary tablespace TEMPFILE。

    > **说明：**
    >-   system tablespace datafile：系统表空间的数据文件，用于存储核心数据，取值范围128M~8T。
    >-   nologging tablespace TEMPFILE：NOLOGGING表空间，取值范围1M~8T。
    >-   nologging undo tablespace TEMPFILE：NOLOGGING UNDO表空间，取值范围128M~32G。
    >-   default tablespace datafile：用于指定用户创建的对象（如表、索引）的默认存储表空间，取值范围1M~8T。
    >-   sysaux tablespace datafile：用于存储数据字典以外的其他数据库组件和工具数据，以减轻SYSTEM表空间的负担，取值范围128M~8T。
    >-   undo tablespace datafile：用于存储事务撤销信息，取值范围128M~32G。
    >-   temporary tablespace TEMPFILE：用于创建和管理临时表空间，临时表空间主要用于存储数据库操作过程中产生的临时数据，比如排序操作、哈希连接等需要大量临时存储空间的操作，取值范围5M~8T。

-   **logfile**

    创建数据库日志文件。参数包括：logfile、size、blocksize。

    > **说明：**
    >-   logfile：日志文件。
    >-   size：日志文件大小，单位包括：K、M、G、T、P、E，默认单位为字节，最少3个log文件，需满足size >= 56M + 16k + log_buffer_size。
    >-   blocksize：设置块的大小，单位为字节，仅支持设置为512或4096两种值。

## 示例<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
create database clustered ograc
    character set utf8
    controlfile('dbfiles1/ctrl1', 'dbfiles1/ctrl2', 'dbfiles1/ctrl3')
    system tablespace datafile 'dbfiles1/sys.dat' size 128M autoextend on next 32M
    nologging tablespace TEMPFILE 'dbfiles1/temp2_01' size 160M autoextend on next 32M, 'dbfiles1/temp2_02' size 160M autoextend on next 32M
    nologging undo tablespace TEMPFILE 'dbfiles1/temp2_undo' size 1G
    default tablespace datafile 'dbfiles1/user1.dat' size 1G autoextend on next 32M, 'dbfiles1/user2.dat' size 1G autoextend on next 32M
    sysaux tablespace DATAFILE 'dbfiles1/sysaux' size 160M autoextend on next 32M
    undo tablespace datafile 'dbfiles1/undo01.dat' size 1G autoextend on next 32M, 'dbfiles1/undo02.dat' size 1G autoextend on next 32M
    temporary tablespace TEMPFILE 'dbfiles1/temp1_01' size 160M autoextend on next 32M, 'dbfiles1/temp1_02' size 160M autoextend on next 32M
    nologging undo tablespace TEMPFILE 'dbfiles1/temp2_undo_01' size 128M autoextend on next 32M
    logfile ('dbfiles1/redo01.dat' size 256M blocksize 512, 'dbfiles1/redo02.dat' size 256M blocksize 4096, 'dbfiles1/redo03.dat' size 256M blocksize 512);
```

