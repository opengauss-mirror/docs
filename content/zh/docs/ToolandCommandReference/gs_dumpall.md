# gs\_dumpall

## 背景信息<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_section31221112348"></a>

gs\_dumpall是openGauss用于导出所有数据库相关信息工具，它可以导出openGauss数据库的所有数据，包括默认数据库postgres的数据、自定义数据库的数据以及openGauss所有数据库公共的全局对象。

gs\_dumpall工具由操作系统用户omm执行。

gs\_dumpall工具在进行数据导出时，其他用户可以访问openGauss数据库（读或写）。

gs\_dumpall工具支持导出完整一致的数据。例如，T1时刻启动gs\_dumpall导出openGauss数据库，那么导出数据结果将会是T1时刻该openGauss数据库的数据状态，T1时刻之后对openGauss的修改不会被导出。

gs\_dumpall工具在进行数据导出时生成的列不会被转储。

gs\_dumpall在导出openGauss所有数据库时分为两部分：

-   gs\_dumpall自身对所有数据库公共的全局对象进行导出，包括有关数据库用户和组、表空间以及属性（例如，适用于数据库整体的访问权限）信息。
-   gs\_dumpall通过调用gs\_dump来完成openGauss中各数据库的SQL脚本文件导出，该脚本文件包含将数据库恢复为其保存时的状态所需要的全部SQL语句。

以上两部分导出的结果为纯文本格式的SQL脚本文件，使用gsql运行该脚本文件可以恢复openGauss数据库。

gs\_dumpall工具支持MySQL兼容性。（仅限于3.0.0，3.1.0，3.1.1的MySQL兼容性需求）

>![](public_sys-resources/icon-notice.png) **须知：**
>-   show create procedure/function等show create语句的database collation和collation connection与数据库的lc_collate相同，由于InitSession会重新初始化lc_collate参数，lc_collate有时会被初始化为C，所以show create procedure/function等show create语句的database collation和collation connection这两个列的值不稳定。
>-   临时表不支持导入导出。

## 注意事项<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_s67532b3f6d2a42e183672fae6c4ba753"></a>

-   禁止修改导出的文件和内容，否则可能无法恢复成功。
-   为了保证数据一致性和完整性，gs\_dumpall会对需要转储的表设置共享锁。如果某张表在别的事务中设置了共享锁，gs\_dumpall会等待此表的锁释放后锁定此表。如果无法在指定时间内锁定某张表，转储会失败。用户可以通过指定--lock-wait-timeout选项，自定义等待锁超时时间。
-   由于gs\_dumpall读取所有数据库中的表，因此必须以openGauss管理员身份进行连接，才能导出完整文件。在使用gsql执行脚本文件导入时，同样需要管理员权限，以便添加用户和组以及创建数据库。

## 语法<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_s991ca5afb6574130a742db3732d6f577"></a>

```
gs_dumpall [OPTION]...
```

## 参数说明<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_s8a1ffa824f1b4371a430896ee8fd2020"></a>

### 通用参数：

-   -f, --filename=FILENAME

    将输出发送至指定文件。如果这里省略，则使用标准输出。

-   -v, --verbose

    指定verbose模式。该选项将导致gs\_dumpall向转储文件输出详细的对象注解和启动/停止次数，向标准错误流输出处理信息。

-   -V, --version

    打印gs\_dumpall版本，然后退出。

-   --lock-wait-timeout=TIMEOUT

    请勿在转储刚开始时一直等待以获取共享表锁。如果无法在指定时间内锁定某个表，就选择失败。可以以任何符合SET statement\_timeout的格式指定超时时间。

-   -?, --help

    显示gs\_dumpall命令行参数帮助，然后退出。

### 转储参数：

-   -a, --data-only

    只转储数据，不转储模式（数据定义）。

-   -c, --clean

    在重新创建数据库之前，执行SQL语句清理（删除）这些数据库。针对角色和表空间的转储命令已添加。

-   -g, --globals-only

    只转储全局对象（角色和表空间），无数据库。

-   -o, --oids

    转储每个表的对象标识符（OIDs），作为表的一部分数据。该选项用于应用以某种方式参照了OID列的情况。如果不是以上这种情况，请勿使用该选项。

-   -O, --no-owner

    不输出设置对象的归属这样的命令，以匹配原始数据库。默认情况下，gs\_dumpall会发出ALTER OWNER或SET SESSION AUTHORIZATION语句设置所创建的模式元素的所属。如果脚本正在运行，该语句不会执行成功，除非是由系统管理员触发（或是拥有脚本中所有对象的同一个用户）。通过指定-O，编写一个任何用户都能存储的脚本，且该脚本会授予该用户拥有所有对象的权限。

-   -r, --roles-only

    只转储角色，不转储数据库或表空间。

-   -s, --schema-only

    只转储对象定义（模式），而非数据。

-   -S, --sysadmin=NAME

    该参数为扩展预留接口，不建议使用。

-   -t, --tablespaces-only

    只转储表空间，不转储数据库或角色。

-   -x, --no-privileges

    防止转储访问权限（授权/撤销命令）。

-   --column-inserts|--attribute-inserts

    以INSERT命令带列名（INSERT INTO表（列、…）值…）方式导出数据。这会导致恢复缓慢。但是由于该选项会针对每行生成一个独立分开的命令，所以在重新加载某行时出现的错误只会导致那行丢失，而非整个表内容。

-   --disable-dollar-quoting

    该选项将禁止在函数体前使用美元符号$，并强制使用SQL标准字符串语法对其进行引用。

-   --disable-triggers

    该参数为扩展预留接口，不建议使用。

-   --inserts

    发出INSERT命令（而非COPY命令）转储数据。这会导致恢复缓慢。注意：如果重排列顺序，可能会导致恢复整个失败。--column-inserts选项更加安全，虽然可能更慢些。

-    --no-publications

    不转储发布。

-   --no-security-labels

    该参数为扩展预留接口，不建议使用。

- --no-subscriptions

  不转储订阅。

  > ![](public_sys-resources/icon-note.png) **说明：**
  >
  > 当不指定该选项时会转储订阅，但是转储订阅需要有管理员用户权限，所以如果是以普通用户执行gs_dump时，如果不指定该选项，会提示“WARNING: subscriptions not dumped because current user is not a superuser”。

-   --no-tablespaces

    请勿输出创建表空间的命令，也请勿针对对象选择表空间。使用该选项，无论默认表空间是哪个，在恢复过程中所有对象都会被创建。

-   --no-unlogged-table-data

    该参数为扩展预留接口，不建议使用。

-   --include-alter-table

    导出表中已删除的列信息。

-   --quote-all-identifiers

    强制对所有标识符加引号。为了向后续版本迁移，且其中可能涉及引入额外关键词，在转储相应数据库时该选项会有帮助。

-   --dont-overwrite-file

    不重写当前文件。

-   --use-set-session-authorization

    输出符合SQL标准的SET SESSION AUTHORIZATION命令而不是ALTER OWNER命令来确定对象所有权。这样令转储更加符合标准，但是如果转储文件中的对象的历史有些问题，那么可能不能正确恢复。并且，使用SET SESSION AUTHORIZATION的转储需要数据库系统管理员的权限才能转储成功，而ALTER OWNER需要的权限则低得多。

-   --with-encryption=AES128

    指定转储数据需用AES128进行加密。

- --with-key=KEY

  AES128密钥长度规则如下：

  - 密钥长度为8~16字符。
  - 至少包含大写字母（A-Z）、小写字母（a-z）、数字（0-9）、非字母数字字符（限定为~!@#$%^&*()-_=+\|[]{};:,<.>/?）四类字符中的三类字符。

-   --include-Extension

    如果--include-Extension参数被设置，将备份所有的CREATE Extension语句。

-   --include-templatedb

    转储过程中包含模板库。

-   --binary-upgrade

    该参数为扩展预留接口，不建议使用。

-   --binary-upgrade-usermap="USER1=USER2"

    该参数为扩展预留接口，不建议使用。

-   --non-lock-table

    该参数仅供软件间接口调用。

-   --tablespaces-postfix

    该参数为扩展预留接口，不建议使用。

-   --parallel-jobs

    指定备份进程并发数，取值范围为1\~1000。
    
-    --pipeline

    使用管道传输密码，禁止在终端使用。


![](public_sys-resources/icon-note.png) **说明：**

-   -g/--globals-only和-r/--roles-only不能同时使用。

-   -g/--globals-only和-t/--tablespaces-only不能同时使用。

-   -r/--roles-only和-t/--tablespaces-only不能同时使用。

-   -s/--schema-only和-a/--data-only不能同时使用。

-   -r/--roles-only和-a/--data-only不能同时使用。

-   -t/--tablespaces-only和-a/--data-only不能同时使用。

-   -g/--globals-only和-a/--data-only不能同时使用。

-   --tablespaces-postfix和--binary-upgrade必须一起使用。

-   --binary-upgrade-usermap和--binary-upgrade必须一起使用。

-   --parallel-jobs和-f/--file必须一起使用。

### 连接参数：

-   -h, --host=HOSTNAME

    指定主机的名称。如果取值是以斜线开头，它将用作Unix域套接字的目录。默认值取自PGHOST环境变量；如果没有设置，将启动某个Unix域套接字建立连接。

    该参数只针对openGauss外，对openGauss内本机只能用127.0.0.1。

    环境变量：PGHOST

-   -l, --database=DATABASENAME

    指定所连接的转储全局对象的数据库名称，并去寻找还有其他哪些数据库需要被转储。如果没有指定，会使用postgres数据库，如果postgres数据库不存在，会使用template1。

-   -p, --port=PORT

    指定服务器所侦听的TCP端口或本地Unix域套接字后缀，以确保连接。默认值设置为PGPORT环境变量。

    在开启线程池情况下，建议使用 pooler port，即侦听端口+1。

    环境变量：PGPORT

-   -U, --username=NAME

    所连接的用户名。

    环境变量：PGUSER

-   -w, --no-password

    不出现输入密码提示。如果服务器要求密码认证并且密码没有通过其它形式给出，则连接尝试将会失败。 该选项在批量工作和不存在用户输入密码的脚本中很有帮助。

-   -W, --password=PASSWORD

    指定用户连接的密码。如果主机的认证策略是trust，则不会对系统管理员进行密码验证，即无需输入-W选项；如果没有-W选项，并且不是系统管理员，“Dump Restore工具”会提示用户输入密码。

-   --role=ROLENAME

    指定创建转储使用的角色名。选择该选项，会使gs\_dumpall连接数据库后，发起一个SET ROLE角色名命令。当所授权用户（由-U指定）没有gs\_dumpall要求的权限时，该选项会起到作用，即切换到具备相应权限的角色。某些安装操作规定不允许直接以系统管理员身份登录，而使用该选项能够在不违反该规定的情况下完成转储。

-   --rolepassword=ROLEPASSWORD

    指定具体角色用户的角色密码。


## 说明<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_sc99dfbcba3eb44e59598baa7edd2d140"></a>

由于gs\_dumpall内部调用gs\_dump，所以一些诊断信息参见[gs\_dump](gs_dump.md)。

一旦恢复，最好在每个数据库上运行ANALYZE，优化程序提供有用的统计数据。

gs\_dumpall恢复前需要所有必要的表空间目录为空；否则，对于处在非默认位置的数据库，数据库创建会失败。

## 示例<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_sb56721027dde49e1bf8c5df9685d2f2f"></a>

使用gs\_dumpall一次导出openGauss的所有数据库。

>![](public_sys-resources/icon-note.png) **说明：** 
>gs\_dumpall仅支持纯文本格式导出。所以只能使用gsql恢复gs\_dumpall导出的转储内容。

```
gs_dumpall -f backup/bkp2.sql -p 37300
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:09]: The total objects number is 2371.
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:35]: [100.00%] 2371 objects have been dumped.
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:46]: dump database dbname='postgres' successfully
gs_dump[port='37300'][dbname='postgres'][2018-06-27 09:55:46]: total time: 55567  ms
gs_dumpall[port='37300'][2018-06-27 09:55:46]: dumpall operation successful
gs_dumpall[port='37300'][2018-06-27 09:55:46]: total time: 56088  ms
```

## 相关命令<a name="zh-cn_topic_0237152336_zh-cn_topic_0059778372_s9ed79eb3e2564786a6823616c460fc00"></a>

[gs\_dump](gs_dump.md)，[gs\_restore](gs_restore.md)

