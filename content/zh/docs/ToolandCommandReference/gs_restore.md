# gs\_restore

## 背景信息<a name="zh-cn_topic_0237152343_zh-cn_topic_0059777561_section182531928123515"></a>

gs\_restore是openGauss提供的针对gs\_dump导出数据的导入工具。通过此工具可将由gs\_dump生成的导出文件进行导入。

gs\_restore工具由操作系统用户omm执行。

gs\_restore工具支持MySQL兼容性。（仅限于3.0.0，3.1.0，3.1.1的MySQL兼容性需求）

>![](public_sys-resources/icon-notice.png) **须知：**
>-   show create procedure/function等show create语句的database collation和collation connection与数据库的ic_collate相同，由于InitSession会重新初始化ic_collate参数，ic_collate有时会被初始化为C，所以show create procedure/function等show create语句的database collation和collation connection这两个列的值不稳定。
>-   临时表不支持导入导出。

主要功能包含：

-   导入到数据库

    如果连接参数中指定了数据库，则数据将被导入到指定的数据库中。其中，并行导入必须指定连接的密码。导入时生成列会自动更新，并像普通列一样保存。

-   导入到脚本文件

    如果未指定导入数据库，则创建包含重建数据库所必须的SQL语句脚本并写入到文件或者标准输出。等效于直接使用gs\_dump导出为纯文本格式。


## 命令格式<a name="zh-cn_topic_0237152343_zh-cn_topic_0059777561_s5a64660d88db4dfb8e2b35d0b4645264"></a>

```
gs_restore [OPTION]... FILE
```

![](public_sys-resources/icon-note.png) **说明：** 

-   FILE没有短选项或长选项。用来指定归档文件所处的位置。

-   作为前提条件，需输入dbname或-l选项。不允许用户同时输入dbname和-l选项。

-   gs\_restore默认是以追加的方式进行数据导入。为避免多次导入造成数据异常，在进行导入时，建议使用“-c” 参数，在重新创建数据库对象前，清理（删除）已存在于将要还原的数据库中的数据库对象。

-   日志打印无开关，若需隐藏日志，请将日志重定向到日志文件。若恢复表数据时，数据量很大，会分批恢复，因此会多次出现“表数据已完成导入”的日志。

## 参数说明<a name="zh-cn_topic_0237152343_zh-cn_topic_0059777561_sc666a8c818084bad8e23afd6e79dd659"></a>

### 通用参数：

-   -d, --dbname=NAME

    连接数据库dbname并直接导入到该数据库中。

-   -f, --file=FILENAME

    指定生成脚本的输出文件，或使用-l时列表的输出文件。

    默认是标准输出。

    >![](public_sys-resources/icon-note.png) **说明：** 
    
    >-f不能同-d一起使用。

-   -F, --format=c|d|t

    指定归档格式。由于gs\_restore会自动决定格式，因此不需要指定格式。

    取值范围：

    -   c/custom：该归档形式为[gs\_dump](gs_dump.md)的自定义格式。
    -   d/directory：该归档形式是一个目录归档形式。
    -   t/tar：该归档形式是一个tar归档形式。

-   -l, --list

    列出归档形式内容。这一操作的输出可用作-L选项的输入。注意如果像-n或-t的过滤选项与-l使用，过滤选项将会限制列举的项目（即归档形式内容）。

-   -v, --verbose

    指定verbose模式。

-   -V, --version

    打印gs\_restore版本，然后退出。

-   -?, --help

    显示gs\_restore命令行参数帮助，然后退出。

### 导入参数：

-   -a, --data-only

    只导入数据，不导入模式（数据定义）。gs\_restore的导入是以追加方式进行的。

-   -c, --clean

    在重新创建数据库对象前，清理（删除）已存在于将要还原的数据库中的数据库对象。

-   -C, --create

    导入到数据库之前会先使用CREATE DATABASE创建数据库（指定该选项后，-d指定的数据库仅用以执行CREATE DATABASE命令，所有数据将被导入到创建的数据库中）。

-   -e, --exit-on-error

    当发送SQL语句到数据库时如果出现错误，请退出。默认状态下会继续，且在导入后会显示一系列错误信息。

-   -I, --index=NAME

    只导入已列举的index的定义。允许导入多个index。如果多次输入-I index导入多个index。

    例如：

    ```
    gs_restore -h host_name -p port_number -d postgres -I Index1 -I Index2 backup/MPPDB_backup.tar
    ```

    在上面这个例子中，Index1和Index2会被导入。

-   -j, --jobs=NUM

    运行gs\_restore最耗时的部分（如加载数据、创建index或创建约束）使用并发任务。该选项能大幅缩短导入时间，即将一个大型数据库导入到某一多处理器的服务器上。

    每个任务可能是一个进程或一个线程，这由操作系统决定。每个任务与服务器进行单独连接。

    该选项的最优值取决于服务器的硬件设置、客户端以及网络。还包括这些因素，如CPU核数量、硬盘设置。建议是从增加服务器上的CPU核数量入手，更大的值（服务器上CPU核数量）在很多情况下也能导致数据文件更快的被导入。当然，过高的值会由于超负荷反而导致性能降低。

    该选项只支持自定义归档格式。输入文件必须是常规文件（不能是像pipe的文件）。如果是通过脚本文件，而非直接连接数据库服务器，该选项可忽略。而且，多任务不能与--single-transaction选项一起使用。

-   -L, --use-list=FILENAME

    只导入列举在list-file中的那些归档形式元素，导入顺序以它们在文件中的顺序为准。注意如果像-n或-t的过滤选项与-L使用，它们将会进一步限制导入的项目。

    一般情况下，list-file是通过编辑前面提到的某个-l参数的输出创建的。文件行的位置可更改或直接删除，也可使用分号（;）在行的开始注出。

-   -n, --schema=NAME

    只导入已列举的模式中的对象。

    该选项可与-t选项一起用以导入某个指定的表。

    多次输入-n  _schemaname_可以导入多个模式。

    例如：

    ```
    gs_restore -h host_name -p port_number -d postgres -n sch1 -n sch2 backup/MPPDB_backup.tar
    ```

    在上面这个例子中，sch1和sch2会被导入。

-   -O, --no-owner

    不输出设置对象的归属这样的命令，以匹配原始数据库。默认情况下，gs\_restore会发出ALTER OWNER或SET SESSION AUTHORIZATION语句设置所创建的模式元素的所属。除非是由系统管理员（或是拥有脚本中所有对象的同一个用户）进行数据库首次连接的操作，否则语句会失败。使用-O选项，任何用户名都可用于首次连接，且该用户拥有所有已创建的对象。

-   -P, --function=NAME\(args\)

    只导入已列举的函数。请按照函数所在转储文件中的目录，准确拼写函数名称和参数。

    当-P单独使用时，表示导入文件中所有'function-name\(args\)'函数；当-P同-n一起使用时，表示导入指定模式下的'function-name\(args\)'函数；多次输入-P，而仅指定一次-n，表示所有导入的函数默认都是位于-n模式下的。

    可以多次输入-n schema-name -P 'function-name\(args\)'同时导入多个指定模式下的函数。

    例如：

    ```
    gs_restore -h host_name -p port_number -d postgres -n test1 -P 'Func1(integer)' -n test2 -P 'Func2(integer)' backup/MPPDB_backup.tar
    ```

    在上面这个例子中，test1模式下的函数Func1\(i integer\)和test2模式下的函数Func2\(j integer\)会被一起导入。

-   -s, --schema-only

    只导入模式（数据定义），不导入数据（表内容）。当前的序列值也不会导入。

-   -S, --sysadmin=NAME

    该参数为扩展预留接口，不建议使用。

- -t, --table=NAME

  只导入已列举的表定义、数据或定义和数据。该选项与-n选项同时使用时，用来指定某个模式下的表对象。-n参数不输入时，默认为PUBLIC模式。多次输入-n <schemaname\> -t <tablename\>可以导入指定模式下的多个表。

  例如：

  导入PUBLIC模式下的table1

  ```
  gs_restore -h host_name -p port_number -d postgres -t table1 backup/MPPDB_backup.tar
  ```

  导入test1模式下的test1和test2模式下test2

  ```
  gs_restore -h host_name -p port_number -d postgres -n test1 -t test1 -n test2 -t test2 backup/MPPDB_backup.tar
  ```

  导入PUBLIC模式下的table1和test1 模式下table1

  ```
  gs_restore -h host_name -p port_number -d postgres -n PUBLIC -t table1 -n test1 -t table1 backup/MPPDB_backup.tar
  ```

  ![](public_sys-resources/icon-note.png) **说明：** 

  -t不支持schema_name.table_name的输入格式，指定此格式不会报错，但不会生效。

-   -T, --trigger=NAME

    该参数为扩展预留接口。

-   -x, --no-privileges/--no-acl

    防止导入访问权限（GRANT/REVOKE命令）。

-   -1, --single-transaction

    执行导入作为一个单独事务（即把命令包围在BEGIN/COMMIT中）。

    该选项确保要么所有命令成功完成，要么没有改变应用。该选项意为--exit-on-error。

-   --disable-triggers

    该参数为扩展预留接口，不建议使用。

-   --no-data-for-failed-tables

    默认状态下，即使创建表的命令失败（如表已经存在），表数据仍会被导入。使用该选项，像这种表的数据会被跳过。如果目标数据库已包含想要的表内容，这种行为会有帮助。

    该选项只有在直接导入到某数据库中时有效，不针对生成SQL脚本文件输出。

-   --no-publications

    不导入发布。

-   --no-security-labels

    该参数为扩展预留接口，不建议使用。

-   --no-subscriptions

    不导入订阅。

-   --no-tablespaces

    不输出选择表空间的命令。使用该选项，无论默认表空间是哪个，在导入过程中所有对象都会被创建。

-   --section=SECTION

    导入已列举的区段（如pre-data、data或post-data）。

-   --use-set-session-authorization

    该选项用来进行文本格式的备份。

    输出SET SESSION AUTHORIZATION命令，而非ALTER OWNER命令，用以决定对象归属。该选项使转储更加兼容标准，但通过参考转储中对象的记录，导入过程可能会有问题。使用SET SESSION AUTHORIZATION的转储要求必须是系统管理员，同时在导入前还需参考“SET SESSION AUTHORIZATION”，手工对导出文件的密码进行修改验证，只有这样才能进行正确的导入操作，相比之下，ALTER OWNER对权限要求较低。

-  --pipeline

    使用管道传输密码，禁止在终端使用。

> ![](public_sys-resources/icon-notice.png) **须知：** 
>-   如果安装过程中有任何本地数据要添加到template1数据库，请谨慎将gs\_restore的输出载入到一个真正的空数据库中；否则可能会因为被添加对象的定义被复制，而出现错误。要创建一个无本地添加的空数据库，需从template0而非template1复制，例如：
    ```
    CREATE DATABASE foo WITH TEMPLATE template0;
    ```
>-   gs_restore不能选择性地导入大对象；例如只能导入那些指定表的对象。如果某个归档形式包含大对象，那所有大对象都会被导入。如果此归档对象通过-L、-t或其他选项被排除，那么所有大对象一个都不会被导入。

> ![](public_sys-resources/icon-note.png) **说明：** 
>- -d/--dbname 和 -f/--file 不能同时使用。
>- -s/--schema-only 和 -a/--data-only不能同时使用。
>- -c/--clean 和 -a/--data-only不能同时使用。
>- 使用--single-transaction时，-j/--jobs必须为单任务。
>- --role 和 --rolepassword必须一起使用。



### 连接参数：

-   -h, --host=HOSTNAME

    指定的主机名称。如果取值是以斜线开头，他将用作Unix域套接字的目录。默认值取自PGHOST环境变量；如果没有设置，将启动某个Unix域套接字建立连接。

    该参数只针对openGauss外，对openGauss内本机只能用127.0.0.1。

    环境变量：PGHOST

-   -p, --port=PORT

    指定服务器所侦听的TCP端口或本地Unix域套接字后缀，以确保连接。默认值设置为PGPORT环境变量。

    在开启线程池情况下，建议使用 pooler port，即侦听端口+1。

    环境变量：PGPORT

-   -U, --username=NAME

    所连接的用户名。

    环境变量：PGUESR

-   -w, --no-password

    不出现输入密码提示。如果服务器要求密码认证并且密码没有通过其它形式给出，则连接尝试将会失败。 该选项在批量工作和不存在用户输入密码的脚本中很有帮助。

-   -W, --password=PASSWORD

    指定用户连接的密码。如果主机的认证策略是trust，则不会对系统管理员进行密码验证，即无需输入-W参数；如果没有-W参数，并且不是系统管理员，“gs\_restore”会提示用户输入密码。

-   --role=ROLENAME

    指定导入操作使用的角色名。选择该参数，会使gs\_restore连接数据库后，发起一个SET ROLE角色名命令。当所授权用户（由-U指定）没有gs\_restore要求的权限时，该参数会起到作用，即切换到具备相应权限的角色。某些安装操作规定不允许直接以初始用户身份登录，而使用该参数能够在不违反该规定的情况下完成导入。

-   --rolepassword=ROLEPASSWORD

    指定具体角色用户的角色密码。


## 示例<a name="zh-cn_topic_0237152343_zh-cn_topic_0059777561_s87e334fd72aa475782287207b9d7fb79"></a>

特例：执行gsql程序，使用如下选项导入由gs\_dump/gs\_dumpall生成导出文件夹（纯文本格式）的MPPDB\_backup.sql文件到postgres数据库。

```
gsql -d postgres -p 15400 -W Bigdata@123 -f /home/omm/test/MPPDB_backup.sql
SET
SET
SET
SET
SET
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
CREATE INDEX
CREATE INDEX
CREATE INDEX
SET
CREATE INDEX
REVOKE
REVOKE
GRANT
GRANT
total time: 30476  ms
```

gs\_restore用来导入由gs\_dump生成的导出文件。

示例1：执行gs\_restore，将导出的MPPDB\_backup.dmp文件（自定义归档格式）导入到postgres数据库。

```
gs_restore -W Bigdata@123 backup/MPPDB_backup.dmp -p 15400 -d postgres
restore operation successful
 total time: 13053  ms
```

示例2：执行gs\_restore，将导出的MPPDB\_backup.tar文件（tar格式）导入到postgres数据库。

```
gs_restore backup/MPPDB_backup.tar -p 15400 -d postgres 
restore operation successful
total time: 21203  ms
```

示例3：执行gs\_restore，将导出的MPPDB\_backup文件（目录格式）导入到postgres数据库。

```
gs_restore backup/MPPDB_backup -p 15400 -d postgres
restore operation successful
total time: 21003  ms
```

示例4：执行gs\_restore，使用自定义归档格式的MPPDB\_backup.dmp文件来进行如下导入操作。 导入PUBLIC模式下所有对象的定义和数据。在导入时会先删除已经存在的对象，如果原对象存在跨模式的依赖则需手工强制干预。

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -c -n PUBLIC
Error while PROCESSING TOC:
Error from TOC entry 313; 1259 337399 TABLE table1 gaussdba
could not execute query: ERROR:  cannot drop table table1 because other objects depend on it
DETAIL:  view t1.v1 depends on table table1
HINT:  Use DROP ... CASCADE to drop the dependent objects too.
    Command was: DROP TABLE IF EXISTS public.table1;
```

手工删除依赖，导入完成后再重新创建。

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -c -n PUBLIC
restore operation successful
total time: 2203  ms
```

示例5：执行gs\_restore，使用自定义归档格式的MPPDB\_backup.dmp文件来进行如下导入操作。只导入PUBLIC模式下表table1的定义。

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -c -s -n PUBLIC -t table1
restore operation successful
total time: 21000  ms
```

示例6：执行gs\_restore，使用自定义归档格式的MPPDB\_backup.dmp文件来进行如下导入操作。只导入PUBLIC模式下表table1的数据。

```
gs_restore backup/MPPDB_backup.dmp -p 15400 -d postgres -e -a -n PUBLIC -t table1
restore operation successful
total time: 20203  ms
```

## 相关命令<a name="zh-cn_topic_0237152343_zh-cn_topic_0059777561_sd2827da1c60248c0b0bfffc406b9f668"></a>

[gs\_dump](gs_dump.md)，[gs\_dumpall](gs_dumpall.md)

