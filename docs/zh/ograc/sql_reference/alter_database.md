# ALTER DATABASE

## 功能描述

ALTER DATABASE用于修改数据库。

## 注意事项

- 被授予了ALTER DATABASE权限的用户才能执行该命令。

## 语法格式

- 指定数据库状态为MOUNT或者OPEN

    ```
    ALTER DATABASE [ database_name ] {
        MOUNT
        | OPEN [ RESETLOGS
                 | READ ONLY
                 | READ WRITE
                 | RESTRICTED
                 | UPGRADE
                 | FORCE IGNORE LOGS
                 | [ UPGRADE ] REPLAY UNTIL lfn ]
               [ IGNORE SYSTIME ]
        };
    ```

- 添加或删除日志文件

    ```
    ALTER DATABASE [ database_name ] {
        ARCHIVELOG
        | NOARCHIVELOG
        | ADD LOGFILE (
            { 'file_name' SIZE integer [ B | K | M | G | T | P | E ]
              [ BLOCKSIZE { 512 | 4096 } ] }
            [,...] ) 
        | DROP LOGFILE ( 'file_name' )
        | ARCHIVE LOGFILE ( { 'file_name' } [,...] ) }
    ```

- 删除归档日志文件

    ```
    ALTER DATABASE [ database_name ] DELETE ARCHIVELOG { ALL | UNTIL TIME 'date_string' } [ FORCE ]
    ```

- 切换数据库备机的数据保护模式

    ```
    ALTER DATABASE [ database_name ] SET STANDBY DATABASE TO MAXIMIZE { PROTECTION | AVAILABILITY | PERFORMANCE }
    ```

- 修改一个或多个数据文件的属性

    ```
    ALTER DATABASE [ database_name ] DATAFILE
        { 'file_name' | file_number } [,...]
        { AUTOEXTEND { OFF
                       | ON [ NEXT integer [ K | M | G ]
                              | MAXSIZE { integer [ K | M | G ] | UNLIMITED }
                            ]
                     }
          | RESIZE integer [ K | M | G ] }
    ```

- 清理和重建日志文件

    ```
    ALTER DATABASE [ database_name ] CLEAR LOGFILE file_id
    ```

- 主备切换

    ```
    ALTER DATABASE [ database_name ] SWITCHOVER [TIMEOUT tm_s]
    ```

- 备机升主

    ```
    ALTER DATABASE [ database_name ] FAILOVER [ FORCE ]
    ```

- 取消升级模式

    ```
    ALTER DATABASE [ database_name ] CANCEL UPGRADE
    ```

- 修改数据库状态

    ```
    ALTER DATABASE [ database_name ] CONVERT TO 
        { READONLY
          | READWRITE
          | [ CASCADED ] PHYSICAL STANDBY [ MOUNT ] }
    ```

- 删除备份集物理文件及SYS_BACKUP_SETS中备份集记录。

    ```
    ALTER DATABASE [ database_name ] DELETE BACKUPSET 'tag' [ FORCE ]
    ```

- 重建表空间

    ```
    ALTER DATABASE [ database_name ] REBUILD TABLESPACE tablespace_name
    ```

- 打开或关闭全局级逻辑复制开关

    ```
    ALTER DATABASE [ database_name ] ENABLE_LOGIC_REPLICATION { ON | OFF }
    ```

- 更新及同步密钥

    ```
    ALTER DATABASE [ database_name ] UPDATE MASTERKEY
    ```

## 参数说明

- **database_name**

    待修改的数据库名，不指定则取当前MOUNT状态的数据库。

- **MOUNT**

    数据库加载状态，但不打开数据库。

- **OPEN**

    数据库正常启动状态，具有如下子状态：

    - **RESETLOGS**
    
        RESTID在原有基础上增加1。
    
    - **READ ONLY**

        只读模式，此时数据库只支持查询。

    - **READ WRITE**

        读写模式，启动到OPEN后的默认状态。

    - **RESTRICTED**

        约束模式，该模式用来支持数据库维护，紧急修复等DFX能力。该模式只支持SYS用户启动并执行操作，进入该模式后，仅支持一个session连接。

    - **UPGRADE**

        升级模式，只加载核心系统表。该模式只支持SYS用户启动并执行操作，进入该模式后，仅支持一个session连接。

    - **FORCE IGNORE LOGS**

        强制忽略日志文件。

    - **REPLAY UNTIL lfn**

        备机实例以该模式启动，重演到lfn点后停止重演。

    - *IGNORE SYSTIME**

        忽略系统时间跳变对数据库产生的影响。

- **ARCHIVELOG**

    设置Redo日志归档

- **NOARCHIVELOG**

    设置Redo日志在线。

- **ADD LOGFILE ( { 'file_name' SIZE integer [ B | K | M | G | T | P | E ] [ BLOCKSIZE { 512 | 4096 } ] } [,...] )**

    在主机的Redo Log增加一个或多个Redo日志文件。

    - **file_name**

        文件名

    - **SIZE integer [ B | K | M | G | T | P | E ]**

        指定文件大小。默认单位为字节。B表示单位为字节，K表示单位为KB，M表示单位为MB，G表示单位为GB，T表示单位为TB，P表示单位为PB，E表示单位为EB。

    - **BLOCKSIZE { 512 | 4096 }**

        指定文件块大小。单位为字节。取值范围为512或4096，默认为512字节。

- **DROP LOGFILE ( 'file_name' )**

    删除Redo日志文件，一次只能删除一个。

- **ARCHIVE LOGFILE ( { 'file_name' } [,...] )**

    归档在线日志，可以归档一个或多个。

- **DELETE ARCHIVELOG { ALL | UNTIL TIME 'date_string' } [ FORCE ]**

    删除归档日志文件，只能在归档模式下执行。

    - **ALL**

        删除所有满足以下三个条件的归档日志：

        - 归档日志不被本机recovery覆盖，即小于本机rcy_point点；
        - 归档日志已备份（通过FORCE配置项可忽略备份）；
        - 归档日志号小于备机上已归档的连续日志号。
    
    - **UNTIL TIME 'date_string'**

        删除date之前产生的满足条件的归档日志。时间格式为YYYY-MM-DD hh:mm:ss。
    
    - **FORCE**

        删除时忽略归档日志是否已经备份。

- **SET STANDBY DATABASE TO MAXIMIZE { PROTECTION | AVAILABILITY | PERFORMANCE }**

    切换数据库备机的数据保护模式。

    - **PROTECTION**

        最大保护模式。提供最高级别的数据保护能力。要求数据库备机收到Redo日志后，主机的事务才能提交。

    - **AVAILABILITY**

        最大可用模式。当备机无法写入Redo日志时，临时降低为PERFORMANCE，直到备机恢复可以成功写入日志。

    - **PERFORMANCE**

        最大性能模式。保证数据库主机的最高可用性。主机不受备机影响，但如果主机提交的事务相关的恢复数据没有发送到备机，这些事务数据将丢失，不能保证数据无损失。

- **DATAFILE
        { 'file_name' | file_number } [,...]
        { AUTOEXTEND { OFF
                       | ON [ NEXT integer [ K | M | G ]
                              | MAXSIZE { integer [ K | M | G ] | UNLIMITED }
                            ]
                     }
          | RESIZE integer [ K | M | G ] }**

    修改一个或多个数据文件的属性。数据文件可以通过文件名或者文件编号指定。

    - **file_name**

        文件名。支持绝对路径和单纯文件名两种方式。如果是后者，则数据库会根据指定的数据库实例路径的data目录拼接出一个全路径。

    - **file_number**

        文件编号。数据库中的数据文件编号。

    - **AUTOEXTEND**

        设置自动扩展属性，以及开启时每次自动扩展的尺寸或自动扩展的上限。

        - **OFF**

            关闭自动扩展属性。

        - **ON**

            开启自动扩展属性。

            - **NEXT**

                指定自动扩展的大小。默认值为16MB。

            - **MAXSIZE**

                指定数据文件自动扩展的上限，不能超过当前文件大小。

            - **UNLIMITED**

                自动扩展，无上限。
    
    - **RESIZE**

        修改数据文件的大小。

- **CLEAR LOGFILE file_id**

    清理和重建日志文件id为file_id的日志文件内容，用于日志文件头部损坏导致数据库无法启动时，若此日志文件可以清理，则可以使用该命令清理损坏内容，重建日志文件，使数据库可以启动。

- **SWITCHOVER [TIMEOUT tm_s]**

    主备机切换。超时时间tm_s为整型，单位是秒，取值范围为0，[30, 1800]，默认值为0。

- **FAILOVER [ FORCE ]**

    当主备关系异常时，数据库备机升为主机。指定FORCE，则无论主备关系是否异常，都可以执行。

- **CANCEL UPGRADE**

    取消UPGRADE模式。数据库升级完成后，需要取消UPGRADE模式。

- **CONVERT TO 
        { READONLY
          | READWRITE
          | [ CASCADED ] PHYSICAL STANDBY [ MOUNT ] }**

    修改数据库角色或状态。

    - **READONLY**

        只读模式，此时数据库只支持查询。

    - **READWRITE**

        启动到OPEN后的默认状态，支持读写。

    - **[ CASCADED ] PHYSICAL STANDBY [ MOUNT ]**

        修改数据库角色为备机或者级联备机。如果指定MOUNT，则只修改角色，不修改数据库状态；否则数据库会自动转换为OPEN状态下的READ ONLY状态。

- **DELETE BACKUPSET 'tag' [ FORCE ]**

    删除备份集物理文件及SYS_BACKUP_SETS中备份集记录。如果备份集在磁盘上不存在或者备份集介质不是磁盘，则报错。如果是增量备份集，系统表中有其他备份集依赖该备份集则报错，需要先删除依赖它的备份集。

    - **FORCE**

        强制删除SYS_BACKUP_SETS中备份记录。

- **REBUILD TABLESPACE tablespace_name**

    重建表空间。

- **ENABLE_LOGIC_REPLICATION { ON | OFF }**

    打开或关闭全局级逻辑复制开关。

- **UPDATE MASTERKEY**

    更新及同步密钥，适配表空间透明加密功能。

示例：

```
-- 修改数据库状态为MOUNT
SQL> ALTER DATABASE MOUNT;

-- 在数据库MOUNT状态下，修改为OPEN状态。
SQL> ALTER DATABASE OPEN;

-- 在数据库MOUNT状态下，重置数据库日志序列号为1。
SQL> ALTER DATABASE RESETLOGS;

-- 在数据库MOUNT状态下，修改数据库状态为只读模式。
SQL> ALTER DATABASE OPEN READ ONLY;

-- 增加名称为test1，大小为1G，BLOCKSIZE为4096字节的Redo日志文件
SQL> ALTER DATABASE ADD LOGFILE ('test1' SIZE 1G BLOCKSIZE 4096);

-- 删除名称为test1的Redo日志文件
SQL> ALTER DATABASE DROP LOGFILE ('test1');

-- 删除2025/11/15 11:00:00前产生的满足条件的归档日志
SQL> ALTER DATABASE DELETE ARCHIVELOG UNTIL TIME '2025/11/15 11:00:00';

-- 关闭文件编号为1的数据文件自动扩展属性。
SQL> ALTER DATABASE DATAFILE 1 AUTOEXTEND OFF;

-- 修改文件编号为1的数据文件自动扩展的大小为20M。
SQL> ALTER DATABASE DATAFILE 1 AUTOEXTEND ON NEXT 20M;

-- 修改文件编号为1的数据文件自动扩展上限为10G。
SQL> ALTER DATABASE DATAFILE 1 AUTOEXTEND ON MAXSIZE 10G;

-- 修改文件编号为1的数据文件自动扩展的大小无上限。
SQL> ALTER DATABASE DATAFILE 1 AUTOEXTEND ON MAXSIZE UNLIMITED;

-- 在数据库MOUNT状态下，修改数据库角色为备机。
SQL> ALTER DATABASE CONVERT TO PHYSICAL STANDBY;

-- 修改数据库状态为READWRITE。
SQL> ALTER DATABASE CONVERT TO READWRITE;

-- 修改USER1数据文件的大小为128M。
SQL> ALTER DATABASE DATAFILE 'USER1' RESIZE 128M;

-- 在数据库MOUNT状态下，重建文件id为0的日志文件头部。
SQL> ALTER DATABASE CLEAR LOGFILE 0;

-- 删除tag为incr_bak的备份集文件及备份集记录。
SQL> ALTER DATABASE DELETE BACKUPSET tag 'incr_bak';

-- 打开全局级逻辑复制开关。
SQL> ALTER DATABASE ENABLE_LOGIC_REPLICATION ON;
```
