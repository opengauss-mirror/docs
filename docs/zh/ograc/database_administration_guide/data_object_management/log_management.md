# 日志管理

## CMS日志管理

CMS是oGRAC的集群管理模块，与oGRAC数据库进程、存储侧设备、其他节点的CMS进程直接通信，主要负责查询集群状态、节点增删、心跳检测、磁盘检测等。

CMS从进程角度讲，可分为CMS SERVER和CMS TOOLS。这两大类进程运行的日志存储在不同日志文件，详见“查看日志”章节。

### 查看日志

#### 查看CMS配置

CMS配置文件内的多个配置参数分别管理着CMS日志的路径、级别、大小、备份文件数量，因此需要明确CMS配置文件路径：
**${CMS_HOME}/cfg/cms.ini**

其中，CMS_HOME是安装脚本指定的，安装用户下可查看的环境变量。echo $CMS_HOME的命令可查看，默认为/opt/ograc/cms。

#### CMS SERVER日志路径

cms server -start命令启动的进程称为CMS SERVER，常驻在服务器上，该进程运行有如下日志：

|   日志类型    |             日志路径             | 
|     ---      |                ---              |
|   运行日志    |   CMS_lOG/run/cms_srv.rlog      | 
|   调试日志    |   CMS_lOG/run/cms_srv.dlog      |
|   黑匣子日志  |   CMS_lOG/blackbox/cms_srv.blog |
|  心跳检测日志 |   CMS_LOG/run/cms_srv.hblog     |

备注：
1、CMS_LOG为CMS配置文件的配置参数，使用脚本默认安装时，默认值为/opt/ograc/log/cms。
2、黑匣子日志主要打印CMS SERVER进程访问到非法地址空间时的进程调用栈和寄存器变量等，日志重要性最高，默认开启。
3、运行日志主要打印CMS SERVER运行过程的INFO关键信息、WARN警示信息和ERROR错误信息，默认开启。
4、调试日志打印的内容将更多，重要性相对次要，基本不会影响CMS SERVER运行，其他与运行日志类似。使用脚本安装时候，默认关闭。
5、心跳检测日志。使用脚本安装时候，默认关闭。
6、日志路径有没有对应的日志文件与日志级别有关，详情查看“配置日志级别”小节。

#### CMS TOOLS日志路径

除去启动CMS SERVER命令，“cms res -start/-stop/-add/-del”、“cms -stat”、“cms -iostat”等其他CMS支持的命令所启动的CMS进程都是临时的，命令执行完则进程退出，统称为CMS TOOLS进程。CMS TOOLS有独立的运行日志文件。

|   日志类型    |             日志路径             |      备注      |
|     ---      |                ---              |      ---       |
|   运行日志    |   CMS_lOG/run/cms_adm.rlog      |    默认开启     |
|   调试日志    |   CMS_lOG/run/cms_adm.dlog      |    使用脚本安装时候，默认关闭     |

#### 日志格式

日志格式为：
**“时区信息 时间信息|模块信息|会话信息|线程信息|日志级别信息>核心日志内容信息”**

说明：
1、时区信息，格式为"UTC+XX:00"，表示时间信息以哪个时区为基准。例如，"UTC+08:00"表示中国标准时间，该时间比UTC协调世界时的时区快8小时。
2、时间信息，格式为"yyyy-mm-dd hh24:mi:ss.ff3"，毫秒精确到3位数。
3、模块信息，统一为CMS。
4、会话信息，标识session id，CMS下默认为00000。
5、线程信息，标识日志由哪个线程id打印出来的。
6、日志级别信息，有INFO、WARN、ERROR。
7、核心日志内容信息，格式有两种。如果当前系统有抛出错误码，则格式为“OG-XXXX:日志信息,错误码信息 [文件名:行数]”。否则，“日志信息 [文件名:行数]”。

示例：
UTC+08:00 2025-11-11 17:26:57.675|CMS|00000|393363|INFO>message count in send que:0 [cms_mes.c:504]

### 配置日志级别

#### _LOG_LEVEL

CMS日志级别由CMS配置文件的_LOG_LEVEL参数控制，日志级别影响输出哪些日志类型及其产生哪些日志文件。控制方法是将参数的十进制转为二进制，每个位上的状态决定开启不同的日志级别，1表示开启，0表示不开启。

|   日志类型  |_LOG_LEVEL二进制掩码位|
|     ---    |       ---           | 
|   运行ERROR |1（第一位）          |
|   运行WARN  |2                   |
|   运行INFO  |3                   |
|   调试ERROR |5                   |
|   调试WARN  |6                   | 
|   调试INFO  |7                   |

例如，_LOG_LEVEL = 1， 对应二进制只有第一位掩码为1，表示只开启运行的ERROR日志；_LOG_LEVEL = 3，对应二进制只有第一和第二位掩码为1，表示只开启运行的ERROR和WARN日志。

说明：
1、_LOG_LEVEL值大于0，则表示开启黑匣子日志。
2、使用默认脚本安装时候，CMS的_LOG_LEVEL=7，表示只开启运行日志和黑匣子日志，也只有运行日志与黑匣子日志文件。
3、如果_LOG_LEVEL的二进制第7位为掩码为1，则同时会开启CMS心跳检测的日志。
4、如果需要开启CMS全部日志，_LOG_LEVEL可设置为119、127、255等。

### 配置日志大小

#### _LOG_MAX_FILE_SIZE

单个日志文件大小有限制，由CMS的_LOG_MAX_FILE_SIZE参数配置，单位为字节，默认大小为10MB。如果日志超过该参数配置，则可能删除较老的日志文件或者可能备份较老的日志到新文件。

### 配置日志文件数量

#### _LOG_BACKUP_FILE_COUNT

_LOG_BACKUP_FILE_COUNT等于0，表示不开启日志文件备份。日志文件超过单个日志大小，则会被删除。
_LOG_BACKUP_FILE_COUNT大于0，表示开启日志备份，日志超过单个日志大小后，会被重命名为“旧日志文件名_当前时间戳.log”。
_LOG_BACKUP_FILE_COUNT的值表示历史日志文件最多可备份的数量，超过该值后，最老的日志备份文件将被删除，维持在固定数量，默认10个文件。

### 配置方法

1、打开CMS配置文件cms.ini，修改对应参数值。
2、重启CMS SERVER或忽略。CMS TOOLS无需重启，因为是临时进程。
shell> cms server -stop
shell> cms server -start &

## 数据库管理日志

数据库日志管理属于数据库系统的核心组件。在数据库运行的过程中，会产生大量服务于数据库日常运维的运行、DEBUG、审计、操作、黑匣子等的日志。
当数据库发生异常或故障的时候，可以利用这些日志进行问题的分析定位和数据库的恢复等操作。

### 日志分类

#### 日志-RUN

输出数据库运行过程中的RUN的信息。
日志路径：/opt/ograc/log/ograc/run/ogracd.rlog

#### 日志-DEBUG

输出数据库运行过程中的DEBUG的信息。
日志路径：/opt/ograc/log/ograc/debug/ogracd.dlog

#### 日志-审计

输出数据库运行过程中的审计的信息。
日志路径：/opt/ograc/log/ograc/audit/ogracd.aud

#### 日志-操作

记录用户对数据库的操作的信息。
日志路径：/opt/ograc/log/ograc/oper/ogsql.olog

#### 日志-黑匣子

记录数据库进程发生core的相关异常信息。本日志默认开启，如需关闭，需要设置参数_LOG_LEVEL的值为0。
日志路径：/opt/ograc/log/ograc/blackbox/ogracd.blog

#### 日志-LONGSQL

记录数据库执行时长超过阈值的sql信息到ogracd.lsql的日志文件中。
日志路径：/opt/ograc/log/ograc/longsql/ogracd.lsql

### 配置日志

ogracDB支持对部分日志备份文件个数、日志大小、日志级别、日志权限、日志的属性的修改，并支持日志的删除和恢复。修改的日志参数在数据库重启后生效。

#### 基础日志参数

LOG_HOME：日志的根目录。本参数的变更会改变RUN、DEBUG、审计、操作、黑匣子、LONGSQL等日志的上层目录。默认值为：/opt/ograc/log/ograc。

_LOG_LEVEL：配置日志记录级别。本参数的影响范围不包括审计日志。该参数的值为各细分日志的标识之和，用户观察交互的是十进制。各细分日志是否打开通过二进制的0、1标识，0代表关闭，1代表打开，
            不同的位数代表不同的细分日志，从低位到高位分别为：RUN ERROR、RUN WARNING、RUN INFOMATION、DEBUG ERROR、DEBUG WARNING、DEBUG INFOMATION、LONGSQL LOG、OPER LOG等。
            _LOG_LEVEL为0时，代表关闭所有的日志。
            默认值为7，即打开所有的RUN的日志。

_LOG_MAX_FILE_SIZE：代表一个日志文件的大小。该参数适用于日志-RUN、日志-DEBUG、日志-操作、日志-LONGSQL等类型的日志。如果单个日志文件超过该参数值，则会将该日志文件进行备份，备份日志名为：
                    ogracd_yyyymmddhhmissfff.rlog。
                    取值范围：单位是Byte，[1M,4G]。默认值是10M。

_LOG_BACKUP_FILE_COUNT：最多可以备份的日志文件的个数。该参数适用于日志-RUN、日志-DEBUG、日志-操作、日志-LONGSQL等类型的日志。如果备份日志文件数超过该参数值，则会删除最早备份的日志文件，
                        以保证备份文件总数符合该参数要求。
                        取值范围：[0,128]。默认值是10。

_LOG_FILE_PERMISSIONS：日志owner、group成员对备份日志文件的write权限会被自动去除。该参数的约束范围不包括已生效的日志文件。
                       取值范围：[600,777]。默认值是640。

_LOG_PATH_PERMISSIONS：该参数可以设置日志-RUN、日志-DEBUG、日志-审计本层及上层目录的权限。日志备份或新建日志文件的时候，目录权限会变更为本参数的值。
                       取值范围：[700,777]。默认值是750。

_BLACKBOX_STACK_DEPTH：在数据库的进程崩溃的时候，允许日志打印的调用栈的深度。
                       取值范围：[2,40]。默认值是30。

#### 日志参数配置

##### _LOG_LEVEL

_LOG_LEVEL参数主要用于控制RUN日志、DEBUG日志的记录情况。可以同时控制多种细分日志类型，不同的日志类型在不同的二进制位次上通过布尔值进行控制，各日志类型对应的参数取值可以参考下表。

|   日志类型         |_LOG_LEVEL参数值（二进制）|_LOG_LEVEL参数值（十进制）|
|     ---           |       ---               |          ---           |
|   运行 ERROR      |  000000000001           |        1       |
|   运行 WARNING    |  000000000010           |        2       | 
|   运行 INFOMATION |  000000000100           |        4       |
|   调试 ERROR      |  000000010000           |        16      |              
|   调试 WARNING    |  000000100000           |        32      | 
|   调试 INFOMATION |  000001000000           |        64      |
|   慢查询 LOG      |  000100000000           |        256       |

修改参数的方式：连接到数据库上，一般可通过用户可交互sql工具进行连接，使用ALTER SYSTEM SET语句进行修改，修改后立即生效，该操作的生效范围为当前节点。
              例如设置日志记录级别为RUN WARNING和DEBUG INFOMATION，则_LOG_LEVEL为66（000001000010）；
              具体命令为：ALTER SYSTEM SET _LOG_LEVEL = 66。

查询参数的方式：SHOW PARAMETER。

注：用户配置_LOG_LEVEL为某一个数值之后，系统会将其转换为二进制，高位不足补0，根据相应的位找对应的日志类型，其中“0”代表关闭、“1”代表打开。
    比如，配置参数值为7，将其转换为二进制位“000000000111”，代表记录运行 ERROR、运行 WARNING、运行 INFOMATION的日志。

关联：_LOG_LEVEL参数的变更会直接同步变更_LOG_LEVEL_MODE、LONGSQL_LOG_MODE的值。

##### _LOG_LEVEL_MODE

_LOG_LEVEL_MODE参数主要用于展示、修改_LOG_LEVEL代表的日志级别，它的功能是可以以一种对用户更友好的方式对当前的日志的级别进行展示和修改，对应关系可参考下表。

| _LOG_LEVEL_MODE参数值  |     详解          |_LOG_LEVEL开启位（十六进制）|
|     ---           |       ---             |          ---           |
| FATAL        | 代表打开_LOG_LEVEL的所有位，具体有：慢查询 LOG、调试 INFOMATION、调试 WARNING、调试 ERROR、运行 INFOMATION、运行 WARNING、运行 ERROR等  | 0xFFFFFFFF  |
| DEBUG        | 代表打开调试的所有位，包括ERROR、WARNING、INFOMATION，以及运行的所有位，包括ERROR、WARNING、INFOMATION | 0x00000077|
| WARN        | 代表打开调试的ERROR、WARNING位，以及运行的所有位，包括ERROR、WARNING、INFOMATION  | 0x00000037|
| ERROR       | 代表打开调试的ERROR位，以及运行的所有位，包括ERROR、WARNING、INFOMATION  | 0x00000017|
| RUN        | 代表打开运行的所有位，包括ERROR、WARNING、INFOMATION  | 0x00000007|
| USER_DEFINE  | 代表其他组合，不允许用户手动设置USER_DEFINE | /|

注：_LOG_LEVEL_MODE参数不会保存到文件或是内存中，只用来作为_LOG_LEVEL的映射参数，以便直观展示日志的级别。
    参数不考虑预留位是否开启，只考虑内核已有的日志位是否开启。
    USER_DEFINE表示的是_LOG_LEVEL的值不满足FATAL、DEBUG、WARN、ERROR、RUN这些级别的时候。

关联：_LOG_LEVEL_MODE参数的变更会直接同步变更_LOG_LEVEL的值。

##### LONGSQL_LOG_MODE

LONGSQL_LOG_MODE参数用于展示、修改_LOG_LEVEL参数的LONGSQL_LOG是否打开，对应关系参考下表。

| LONGSQL_LOG_MODE参数值  |     详解          |_LOG_LEVEL对应开启位（十六进制，换算为二进制位，1代表打开，0代表关闭）|
|     ---           |       ---             |          ---           |
| ON        | 打开 |  0x00000100 |
| OFF        | 关闭 | / |

注：LONGSQL_LOG_MODE参数不会保存到文件或是内存中，只用来作为_LOG_LEVEL的映射参数，以便直观展示LONGSQL_LOG是否打开。
    参数不考虑预留位是否开启，只考虑LONGSQL_LOG是否打开。

关联：LONGSQL_LOG_MODE参数的变更会直接同步变更_LOG_LEVEL的值。

##### AUDIT_LEVEL

AUDIT_LEVEL用于控制是否记录审计日志，各日志类型对应的参数取值参考下表。

| 日志类型  | AUDIT_LEVEL参数值（二进制） | AUDIT_LEVEL参数值（十进制）|
|     ---           |       ---             |          ---           |
| DDL        | 00000001 | 1 |
| DCL        | 00000010 | 2 |
| DML        | 00000100 | 4 |
| PL        | 00001000 | 8 |
| PARAM     | 00010000 | 16 |
| ALL     | 11111111 | 255 |

功能语法：LOAD、DUMP、EXP、IMP功能语法由多种SQL拼合而成，如果要保证记录，就得将AUDIT_LEVEL配置为包含相关的SQL类型的级别。
         其他功能语法，如果要保证记录，需要将AUDIT_LEVEL配置为包含DCL的级别。

注：AUDIT_LEVEL为0，代表关闭审计日志。
    AUDIT_LEVEL大于0，将其转换为二进制，取后四位，从高位到低位依次代表的审计日志类型为PL、DML、DCL、DDL，“0”代表关闭，“1”代表打开。

修改参数的方式：连接到数据库上，一般可通过用户可交互sql工具进行连接，使用ALTER SYSTEM SET语句进行修改，修改后立即生效，该操作的生效范围为当前节点。
              例如设置审计日志类型为DDL、DCL、DML、PL等操作日志，则AUDIT_LEVEL为15（00001111）。
              具体命令为：ALTER SYSTEM SET AUDIT_LEVEL = 15。

##### AUDIT_TRAIL_MODE

AUDIT_TRAIL_MODE用来配置审计日志记录的模式。

参数值范围：NONE、SYSLOG、DB、FILE、ALL。

NONE：不记录审计日志。
SYSLOG：syslog记录审计日志。
DB：系统表记录审计日志。
FILE：文件记录审计日志。
ALL：syslog、系统表、文件记录审计日志。

默认值：FILE。

注：当AUDIT_TRAIL_MODE取值为ALL或DB时，推荐打开system表空间自动扩展功能。

### 查询日志

数据库运行过程中，部分操作可能已经引发错误，不影响数据库的运行。但是数据库中的数据可能已经产生了不一致的情况，推荐按月检查数据库运行日志，
及时发现可能的隐患。

#### 日志路径

|   日志类型  |日志路径                            |
|     ---    |       ---                         |
|   RUN      |/opt/ograc/log/ograc/run/ogracd.rlog|
|   DEBUG    |/opt/ograc/log/ograc/debug/ogracd.dlog|
|   审计     |/opt/ograc/log/ograc/audit/ogracd.aud|
|   操作     |/opt/ograc/log/ograc/oper/ogsql.olog|
|   黑匣子   |/opt/ograc/log/ograc/blackbox/ogracd.blog|
|   LONGSQL |/opt/ograc/log/ograc/longsql/ogracd.lsql|

#### 日志分类

##### 日志-RUN

当集群发生故障的时候，可以借助于系统日志及时定位故障发生的原因，并据此制定恢复集群的方案。

数据库日志格式
例如：UTC+08:00 2025-11-21 09:15:17.059|COMMON|00357|2089731|INFO>[DB] Finish to truncate table LTT_ANALYZE_JOB3, ret:0 [knl_interface.c:8330]

- 事件发生时间
- 模块
- 会话ID
- thread ID
- LOG LEVEL
- LOG CONTENT

##### 日志-DEBUG

相比于运行日志，调试日志更多是从内部视角出发，记录程序执行的具体步骤和状态，以便开发人员进行准确定位。

DEBUG日志格式
例如：UTC+08:00 2025-01-04 17:19:29.857|SERVER|00048|1795|INFO>Succeed to transform rule:og_transf_subquery_rewrite [ogsql_transform.c:249]

- 事件发生时间
- 模块
- 会话ID
- thread ID
- LOG LEVEL
- LOG CONTENT

##### 日志-审计

根据用户配置的审计level，不同的审计内容会被日志文件记录。开启审计功能后，会连续产生大量的审计日志内容，进而占据大量的磁盘空间。建议用户根据磁盘空间的大小配置
相关的审计日志维护策略。
在审计日志系统表中，单条审计日志记录的最大长度为7000字节，超出最大值会被截断。审计日志会在prepare和execute阶段分别添加1条记录，prepare记录sql解析是否正确，execute
记录执行结果是否正确。
在审计日志文件中，单条审计日志记录的最大长度为MIN(64M, _AGENT_STACK_SIZE)，超出最大值会被截断。

审计日志格式
例如：
UTC+08:00 2025-11-21 11:17:38.159
LENGTH: "135"
SESSIONID:[3] "415" STMTID:[0] "" USER:[3] "SYS" HOST:[9] "127.0.0.1" ACTION:[10] "DISCONNECT" RETURNCODE:[8] "OG-00000" SQLTEXT:[0] ""

- 事件发生时间
- 审计内容长度
- 审计内容
  关键字：[关键字长度]“内容”。
  SESSIONID：会话id。
  STMTID：语句id。
  USER：用户名称。
  HOST：主机地址。
  ACTION：事件类型，包括：LOGIN、FREE_STMT、PREPARE、EXECUTE等操作。
  RETURNCODE：返回码，OG-00000表示成功，其他为错误码。
  SQLTEXT：SQL语句，对于PL、DDL、DCL等操作，只在PREPARE阶段记录SQL语句，EXECUTE阶段不记录，可使用SESSIONID和STMTID关联到PREPARE阶段查询SQL语句。
           DML操作，在PREPARE、EXECUTE阶段都会记录SQL语句。

###### 维护审计日志

场景：
打开审计功能后连续产生大量的审计日志，占用大量的磁盘空间。用户可以根据磁盘容量配置审计日志的维护策略。

步骤：
步骤一：以dba身份登录数据库。

步骤二：配置自动删除审计日志。
单个审计文件的阈值默认值是10M，取值范围[1M,4G]，由参数_AUDIT_MAX_FILE_SIZE控制；审计文件的个数由_AUDIT_BACKUP_FILE_COUNT控制，默认值是10，取值范围为[0,128]，
审计文件的个数超出最大值时，系统会删除最早的审计文件。
修改命令：
ALTER SYSTEM SET _AUDIT_MAX_FILE_SIZE=20M;
ALTER SYSTEM SET _AUDIT_BACKUP_FILE_COUNT=20;

查询命令：
SELECT NAME,RUNTIME_VALUE FROM SYS.DV_PARAMETERS WHERE NAME='_AUDIT_MAX_FILE_SIZE';
SELECT NAME,RUNTIME_VALUE FROM SYS.DV_PARAMETERS WHERE NAME='_AUDIT_BACKUP_FILE_COUNT';

##### 日志-操作

操作日志指用户登录ogsql操作数据库时产生的日志。如果数据库发生故障，可以借助于操作日志文件分析用户对数据库做了哪些操作，重现故障场景，解决故障问题。

操作日志格式
例如：
2025-11-21 19:09:00.640|ogsql|SELECT * FROM DV_DRC_RES_RATIO WHERE DRC_RESOURCE='GLOBAL_TXN'

- 事件发生时间
- ogsql工具
- 操作命令

##### 日志-黑匣子

当数据库进程发生异常进而导致终止的时候，黑匣子日志会记录基本的异常信息。

黑匣子日志格式：
（1）常规异常信息：发生事件、异常类型、异常进程、异常名称、异常线程、发送异常信号的进程、发送异常信号的操作系统的用户、异常地址、平台信息、版本信息。
（2）异常调用栈。
（3）寄存器信息。
（4）core时进程maps信息。
（5）core时线程栈信息。
（6）core时活跃的DMS事件的线程DMS追踪信息，打印在共享存储下。
（6）sql session内容信息。
（7）执行sql和绑定参数的信息。
（8）重要内核线程和各个工作线程的信息。

##### 日志-LONGSQL

当数据库中出现运行时间超过阈值的语句的时候，慢查询日志会进行记录。阈值由参数LONGSQL_TIMEOUT控制，默认为10s。
默认不开启，建议在调优的时候开启。

慢查询日志格式：
对于DN节点，例如：
2025-11-21 19:09:00|USER_EXECUTE|3|127.0.0.1|5679201|“NULL”|65788999|67990178890|"SELECT NAME,GOALS FROM USER.CLASS"
说明：
19:09:00：当下时间。
USER_EXECUTE：程序当前所在的阶段。
3：DN的node_id。
127.0.0.1:客户端的ip。
5679201：DN节点在该阶段的耗时（微妙）。
NULL：sql语句的参数。
65788999：sql语句的id。
67990178890：执行计划的哈希值。
SELECT NAME,GOALS FROM USER.CLASS：下发到DN节点的具体的sql语句。

### 清理日志

在数据库运行过程中，会产生大量的数据库运行日志，消耗大量的磁盘空间，推荐只保留最近一个月的日志，清理过期的日志文件。

#### 数据库日志清理机制

当运行日志、调试日志、审计日志、操作日志、黑匣子日志、慢查询日志等日志的日志文件大小达到_LOG_MAX_FILE_SIZE（默认为10M），则会对当前日志文件进行备份，
同时生成新的日志文件。

当系统备份的日志文件的个数达到_LOG_BACKUP_FILE_COUNT（默认为10个）时，系统会自动清理最早备份的日志文件。

## 告警日志

告警日志也是数据库运行日志的一部分，但由于其重要性，单独存储。

### 作用范围

对数据库的可用性和安全性领域上一些重要操作做出警示。
1、可用性

|       告警类型      |    告警模块名                        |     说明    |
|         ---        |       ---                           | ---         |
|   表空间可用大小预警 |TablespaceUsage                      |             |
|   刷盘失败预警      |FlushRedo、FlushBuffer               |日志与数据页  |
|   文件删除预警      |FileMonitor                          |             |
|   磁盘页面损坏预警   |PageCorrupt                         |             |
|   会话句柄不足预警   |MaxConnections                      |             |
|   线程死锁预警      |Deadlock                             |             |
|   后台任务预警      |NologgingInsertObejct、UndospaceUsage|nolog表对象预警、UNDO空间预警|

说明，模块名在日志格式里面有用到，用户可通过模块名搜索指定领域的告警日志。

2、安全性

|       告警类型      |    告警模块名          |     说明    |
|         ---        |       ---             |   ---       |
|   恶意登录预警      |MaliciousLogin         | 连续多次登录数据库失败 |
|   审计操作预警      |AuditLog               |             |
|   修改Profile预警   |Profile                |             |
|   数据库参数变更预警 |Parameter              | SQL方式设置数据库参数 |
|   用户密码变更预警   |Password               |             |

### 日志路径

#### ALARM_LOG_DIR

告警日志路径可通过数据库配置文件的ALARM_LOG_DIR参数配置。
1、参数配置且合理。告警日志路径为ALARM_LOG_DIR/INSTANCENAME_alarm.log。
2、参数为配置，默认情况。告警日志路径为数据库数据目录/log/INSTANCENAME_alarm.log。
说明：
INSTANCENAME为实例名，由数据库INSTANCE_NAME参数配置，使用默认脚本安装时候，值默认为ograc。

### 日志级别

只要数据库参数的_LOG_LEVEL大于0，则开启告警日志，默认开启

### 3日志格式

格式为：
“时间信息|warn模块ID|warn模块名|DN|数据库实例名|{'component-name':'DN','datanode-name':'数据库实例名',告警内容|告警类别编号}”

## 其他日志

### DSS日志

#### DSS日志类型

-- RUN日志
打印数据库DSS模式下DSS运行RUN级别信息。如果DSS运行故障，且开启RUN级别日志，请查看dsscmd.rlog和dssinstance.rlog。
日志目录：默认为$DSS_HOME/log/run。

-- DEBUG日志
打印数据库DSS模式下DSS运行DEBUG级别信息。如果DSS运行故障，且开启DEBUG级别日志，请查看dsscmd.dlog和dssinstance.dlog。
日志目录：默认为$DSS_HOME/log/debug。

-- 操作日志
打印数据库DSS模式下DSS运行OPER级别信息。如果DSS运行故障，且开启OPER级别日志，请查看dsscmd.olog。
日志目录：默认为$DSS_HOME/log/oper。

-- 审计日志
打印数据库DSS模式下DSS运行审计数据或者元数据进行修改或查询的信息。
日志目录：默认为$DSS_HOME/log/audit。

-- 黑匣子日志
打印数据库DSS模式下，dssserver进程异常终止时的异常基本信息。黑匣子日志默认开启，如需关闭，需配置参数_LOG_LEVEL=0, 重启dssserver后生效。
日志目录：默认为$DSS_HOME/log/blackbox。

#### DSS日志级别

DSS通过_LOG_LEVEL参数控制审计日志外的其他日志的记录情况。如果要记录多种日志类型，请将参数设置为各个日志类型对应的参数取值之和。各日志类型对应的参数取值见表1。

表 1 日志类型对应的_LOG_LEVEL取值

|日志类型|_LOG_LEVEL参数取值（十进制）|
|---|---|
|RUN ERROR|1|
|RUN WARNING|2|
|RUN INFORMATION|4|
|DEBUG ERROR|16|
|DEBUG WARNING|32|
|DEBUG INFORMATION|64|
|OPER LOG|512|
