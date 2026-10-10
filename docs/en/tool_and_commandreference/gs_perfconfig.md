# gs_perfconfig

## Background<a name="zh-cn_topic_0000001705427697"></a>

openGauss provides the `gs_perfconfig` tool to help tune the performance of openGauss. It covers three aspects: operating system configuration, database setup, and database parameters. It can provide adjustment plans or suggestions, or directly apply configuration changes.

## Prerequisites<a name="section940725313438"></a>

The tool can be executed by the operating system root user or a common user. However, for some operating system checks and adjustments, due to the permission restrictions of the operating system itself, the tool must be run by the OS root user.

Some operations inside the tool require a database restart and will ask for user confirmation in advance.

The environment variables must be correctly configured or specified.

## Syntax and Parameters<a name="section346168183816"></a>

The parameters of `gs_perfconfig` are divided into four major categories, corresponding to four functional actions: tuning (`tune`), recovery (`recover`), presetting (`preset`), and help (`help`).

- **Performance Configuration Tuning**

    ```
    gs_perfconfig tune [ -t [ all,os,setup,guc,suggest ] ] [ --apply ] [ -y ] [ --env ENV_FILE ]
    ```

    `-t` specifies the target content, including four options (`all` means all):
    - os: Adjustment of operating system configuration. (root user only)
    - setup: Adjustment of database setup.
    - guc: Adjustment of database GUC parameters.
    - suggest: Whether to provide adjustment suggestions.

    `--apply`:
    Specifies whether to actually execute the adjustments. If not enabled, only an adjustment plan and suggestions are computed and exported as a report.

    `-y`:
    Accepts that during the tuning process, operations such as stress testing, database restarts, and various configuration adjustments will be performed.

    `--env`:
    Database environment variables.

- **Restore Pre-adjustment State**

    ```
    gs_perfconfig recover [ -y ]
    ```

    Each `--apply` adjustment action generates a rollback plan named `anti.log`. Only one copy of `anti.log` is kept. Using the `recover` command, you can read and replay `anti.log` to roll back the previous adjustment.

    `-y` means accepting that during the rollback process, operations such as database restarts and parameter configuration rollbacks will be performed.

- **View Presets**

    ```
    gs_perfconfig preset [ /*empty*/ | help | PRESET_NAME]
    ```

    During tuning, information related to user business attributes is collected through interactive questions. However, lengthy surveys lead to a poor user experience. Therefore, a preset mechanism is provided to configure this information in advance.

    `/*empty*/`:
    If no parameter is specified, all presets will be printed.

    `preset name`:
    Prints the content of a specific preset.

    `help`:
    Prints the editing and configuration methods of presets, as well as the parameters included in presets and their meanings. (The options `--help`, `-h`, and `-?` also work.)

- **Help**

    ```
    gs_perfconfig [ help | --help | -h | -? ]
    ```

## Additional Parameters<a name="section4171702718"></a>

Configure the environment variable `GS_PERFCONFIG_OPTIONS` to control some behavioral details within the tool.

`export GS_PERFCONFIG_OPTIONS='param1=value1:param2=value2:param3=value3'`

Parameter list:

- *lowest_print_log_level*:

    Function: Minimum log level printed to the screen during tuning. Usually used for debugging.

    Value range: `log`, `msg`, `notice`, `warning`, `error`, or `fatal`.

## Example<a name="section1163793633413"></a>

**Using the `tune` command to adjust parameters**

- 1. Default business scenario (similar to the preset scenario)

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
    *[ Single Answer Question ] What kind of way to choose?
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

- 2. Custom scenario. Step-by-step investigation of business-related content is required.

    ```
    [root@openGauss34 script]# python3 gs_perfconfig tune -t all --apply --env /home/carrot/text.source
    LOG: source env: GAUSSHOME=/data1/carrot/gausshome/5.1.0
    LOG: source env: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
    LOG: read environ: GAUSSHOME=/data1/carrot/gausshome/5.1.0
    LOG: read environ: PGDATA=/data1/carrot/gausshome/5.1.0/sgnode
    LOG: read environ: PGHOST=
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
    *[ Single Answer Question ] What kind of way to choose?
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

**Restore to the state before adjustment**

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

**View presets**

- 1. View all presets

    ```
    Builtin Presets:
        kunpeng-4P-tpcc
        default

    User Presets:
        user-def-preset1
    ```

- 2. View a single preset

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

- 3. View preset configuration methods

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
