# gs_perfconfig


## 背景信息

openGauss提供了gs_perfconfig工具帮助对openGauss进行性能调整。包括操作系统配置、数据库搭建、数据库参数三个方面，可以给出调整方案或建议，或者直接进行配置调整。


## 前提条件

工具可以由操作系统root用户、普通用户执行。但对于部分操作系统的检测与调整，受到操作系统本身权限限制，需要由操作系统root用户运行。

工具内部分操作需要重启数据库，会提前征询用户同意。

需正确配置或指定环境变量。


## 语法参数
gs_perfconfig的参数一共分为四个大项，对应四个功能动作：调整（`tune`）, 恢复（`recover`）, 预设（`preset`）, 帮助（`help`）。

- **性能配置调整**
```
gs_perfconfig tune [ -t [ all,os,setup,guc,suggest ] ] [ --apply ] [ -y ] [ --env ENV_FILE ]
```
    
`-t`表示目标内容，包含四个（all表示所有）：
    - os：操作系统配置的调整。（仅root用户）
    - setup：数据库搭建方面的调整。
    - guc：数据库guc参数的调整。
    - suggest：是否给出调整建议。
    
`--apply`：
    表示是否实际的去执行调整内容。否则仅会计算出调整方案和建议后，导出为一份报告。
    
`-y`：
    接受调整过程中，会进行一些压测、重启数据库、调整各类配置等操作。
    
`--env`：
    数据库环境变量。



- **恢复调整前状态**
```
gs_perfconfig recover [ -y ]
```

每一次`--apply`的调整动作，都会生成一份回退方案`anti.log`，`anti.log`仅会保存一份。使用`recover`命令，可以读取重放`anti.log`，对上一次的调整内容斤进行回退。

`-y`表示接受回滚过程中，会重启数据库、回退参数配置等操作。


- **查看预设**
```
gs_perfconfig preset [ /*empty*/ | help | PRESET_NAME]
```
在进行调整时，对于涉及到用户业务属性相关的信息，会通过问答的方式进行调查检测，但冗长的调查会让使用体验很差，因此提供预设的方式，对这些信息提前进行配置。

`/*empty*/`：
    没有参数则会打印所有的预设列表。
    
`preset name`：
    打印具体的预设内容。
    
`help`：
    打印预设的编辑配置方法、预设所包含的参数与含义。（--help，-h，-? 同样生效）


- **帮助**
```
gs_perfconfig [ help | --help | -h | -? ]
```
    

## 其他参数

配置环境变量`GS_PERFCONFIG_OPTIONS`，可以控制工具内的一些行为细节。

`export GS_PERFCONFIG_OPTIONS='param1=value1:param2=value2:param3=value3'`

参数列表：

- *lowest_print_log_level* ：

功能：调整使用过程中打印到屏幕上的最小日志级别。通常用来debug。

取值范围：`log`、`msg`、`notice`、`warning`、`error`或`fatal`。



## 示例
**使用`tune`命令对参数进行调整**
- 1、默认业务场景(预设场景类似)
```
[root@openGauss34 script]# python3 gs_perfconfig tune -t all --apply --env /home/carrot/opengauss.source
LOG: source env: GAUSSHOME=/data1/carrot/gausshome/5.1.0
LOG: source env: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
LOG: read environ: GAUSSHOME=/data1/carrot/gausshome/5.1.0
LOG: read environ: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
LOG: read environ: PGHOST=
LOG: read environ: GAUSSLOG=
LOG: read environ: GAUSS_VERSION=
LOG: workspace1: /data1/carrot/openGauss-OM/script/impl/perf_config
LOG: workspace2:
LOG: read environ: GS_PERFCONFIG_OPTIONS=
2023-11-07 10:07:23.669867 [NOTICE]: Anti Log (/data1/carrot/openGauss-OM/script/impl/perf_config/anti.log) init done
*[ yesOrNot ] Certainly, we will make adjustments to the configuration of operating
system parameters, database parameters, and also perform a database
restart during the optimization process.
Are you accepting of the aforementioned circumstances?(y/n)? y
2023-11-07 10:07:25.097719 [NOTICE]: Start probe detect.
Now we need to do some research to understand your business scenario.
*[ Single Answer Question ] What kind of way to choose？
  A. Default case
  B. Preset
  C. Customization
Single answer: a
2023-11-07 10:07:26.676511 [NOTICE]: stop openGauss......
2023-11-07 10:07:26.676547 [NOTICE]: stop openGauss finish.
2023-11-07 10:07:26.676574 [NOTICE]: Prepare tune plan.
2023-11-07 10:07:26.750048 [NOTICE]: Adjustments are being made(do apply)...
2023-11-07 10:07:34.159237 [NOTICE]: Report: /data1/carrot/openGauss-OM/script/impl/perf_config/report-1699322843.6666596-1453806.md
2023-11-07 10:07:34.159306 [NOTICE]: Tune finish.
2023-11-07 10:07:34.159338 [NOTICE]: start openGauss.....
2023-11-07 10:07:34.159363 [NOTICE]: start openGauss finish.
```

- 2、自定义场景。需要一步步进行业务相关内容的调查。
```
[root@openGauss34 script]# python3 gs_perfconfig tune -t all --apply --env /home/carrot/text.source
LOG: source env: GAUSSHOME=/data1/carrot/gausshome/5.1.0
LOG: source env: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
LOG: read environ: GAUSSHOME=/data1/carrot/gausshome/5.1.0
LOG: read environ: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
LOG: read environ: PGHOST=
LOG: read environ: GAUSSLOG=
LOG: read environ: GAUSS_VERSION=
LOG: workspace1: /data1/carrot/openGauss-OM/script/impl/perf_config
LOG: workspace2:
LOG: read environ: GS_PERFCONFIG_OPTIONS=
2023-11-07 10:21:57.386969 [NOTICE]: Anti Log (/data1/carrot/openGauss-OM/script/impl/perf_config/anti.log) init done
*[ yesOrNot ] Certainly, we will make adjustments to the configuration of operating
system parameters, database parameters, and also perform a database
restart during the optimization process.
Are you accepting of the aforementioned circumstances?(y/n)? y
2023-11-07 10:21:59.328462 [NOTICE]: Start probe detect.
Now we need to do some research to understand your business scenario.
*[ Single Answer Question ] What kind of way to choose？
  A. Default case
  B. Preset
  C. Customization
Single answer: c
*[ Single Answer Question ] What are the main scenarios for using databases?
  A. OLTP performance first
  B. OLTP produce first
Single answer: a
*[ Input number ] What is the average number of concurrent transactions?
Please answer: 1000
*[ Input number ] Approximately how many tables you have?
Please answer: 100
*[ Multiple Answer Question ] What kind of table you used?
 A. common heap table
 B. partition heap table
 C. column table
 D. partition column table
Multiple answer: abc
*[ Input number ] Approximately how many partitions you have?
Please answer: 10000
*[ Input number ] Approximately how many index you have?
Please answer: 200
*[ Input number ] How much data is there, unit by MB?
Please answer: 102400
[ Input path ] Storing wal on a separate disk helps improve performance. Do you need to move them?
Here is some disk information:
  device=/dev/mapper/openeuler00-root, mountpoint=/, fstype=ext4 size=(free 43.5234375GB / total 48.9658203125GB)
  device=/dev/sdb2, mountpoint=/boot, fstype=ext4 size=(free 0.78125GB / total 0.953125GB)
  device=/dev/sdb1, mountpoint=/boot/efi, fstype=vfat size=(free 0.189453125GB / total 0.1953125GB)
  device=/dev/mapper/openeuler00-home, mountpoint=/home, fstype=ext4 size=(free 4632.44140625GB / total 4930.955078125GB)
  device=/dev/sdc1, mountpoint=/data1, fstype=ext4 size=(free 931.486328125GB / total 1006.9287109375GB)

Please input the path:
2023-11-07 10:22:42.989728 [NOTICE]: stop openGauss......
2023-11-07 10:22:42.989771 [NOTICE]: stop openGauss finish.
2023-11-07 10:22:42.989806 [NOTICE]: Prepare tune plan.
2023-11-07 10:22:43.064604 [NOTICE]: Adjustments are being made(do apply)...
2023-11-07 10:22:50.535352 [NOTICE]: Report: /data1/carrot/openGauss-OM/script/impl/perf_config/report-1699323717.3838584-1458686.md
2023-11-07 10:22:50.535428 [NOTICE]: Tune finish.
2023-11-07 10:22:50.535460 [NOTICE]: start openGauss.....
2023-11-07 10:22:50.535486 [NOTICE]: start openGauss finish.

```


**恢复到调整前的状态**
```
[root@openGauss34 script]# python3 gs_perfconfig recover
LOG: read environ: GAUSSHOME=/data1/carrot/gausshome/5.1.0
LOG: read environ: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
LOG: read environ: PGHOST=
LOG: read environ: GAUSSLOG=
LOG: read environ: GAUSS_VERSION=
LOG: workspace1: /data1/carrot/openGauss-OM/script/impl/perf_config
LOG: workspace2:
LOG: read environ: GS_PERFCONFIG_OPTIONS=
2023-11-07 10:12:26.425295 [NOTICE]: Anti Log (/data1/carrot/openGauss-OM/script/impl/perf_config/anti.log) reload done
2023-11-07 10:12:26.425342 [NOTICE]: start rollback.
*[ yesOrNot ] Certainly, we will make adjustments to the configuration of operating
system parameters, database parameters, and also perform a database
restart during the recover process.
Are you accepting of the aforementioned circumstances?(y/n)? y
2023-11-07 10:12:27.773095 [NOTICE]: stop openGauss......
2023-11-07 10:12:27.773129 [NOTICE]: stop openGauss finish.
2023-11-07 10:12:27.773748 [NOTICE]: rollback GUC. cp /data1/carrot/openGauss-OM/script/impl/perf_config/postgresql.conf.bak /data1/carrot/gausshome/5.1.0/sgnode/postgresql.conf
2023-11-07 10:12:27.773874 [NOTICE]: start openGauss.....
2023-11-07 10:12:27.773913 [NOTICE]: start openGauss finish.
2023-11-07 10:12:27.773940 [NOTICE]: rollback finish.

```

**查看预设**
- 1、查看所有预设
```
Builtin Presets:
    kunpeng-4P-tpcc
    default

User Presets:
    user-def-preset1
```

- 2、查看单个预设
```
[root@openGauss34 script]# python3 gs_perfconfig preset default
Preset name: default
  default preset
Detail:
    scenario: OLTP-performance
    rel_count: 300
    index_count: 1200
    rel_kind: ['partition-table', 'heap-table']
    part_count: 200
    data_size: 8192
    parallel: 600
    isolated_xlog: None
```


- 3、查看预设配置方法
```
[root@openGauss34 script]# python3 gs_perfconfig preset help
The preset configure is a file in JSON format that contains the following parameters:

Name: desc
 Description: The description of preset
 Type: string

Name: scenario
 Description: Business scenario.
 Type: enum value
 Range: ['OLTP-produce', 'OLTP-performance']

Name: rel_count
 Description: How many tables do you have?
 Type: integer

Name: index_count
 Description: How many indexs do you have?
 Type: integer

Name: ...
...

```
