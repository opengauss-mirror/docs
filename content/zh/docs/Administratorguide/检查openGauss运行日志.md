# 检查openGauss运行日志<a name="ZH-CN_TOPIC_0242215065"></a>

数据库运行时，某些操作在执行过程中可能会出现错误，数据库依然能够运行。但是此时数据库中的数据可能已经发生不一致的情况。建议按月检查openGauss运行日志，及时发现隐患。

## 前提条件<a name="zh-cn_topic_0237088806_zh-cn_topic_0059778412_s39917dbd767d45a6907e332d7c173f02"></a>

-   收集日志的主机网络通畅且未宕机，数据库安装用户互信正常。
-   日志收集工具依赖操作系统工具如gstack，如果未安装该工具，则提示错误后，跳过该收集项。

## 操作步骤<a name="zh-cn_topic_0237088806_zh-cn_topic_0059778412_s372bdaf3309c4df7896d3204bfc0bdb0"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  <a name="zh-cn_topic_0237088806_zh-cn_topic_0059778412_l87490fc259434bc6ac7800ec9881a6ab"></a>执行如下命令收集数据库日志。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59"
    ```

    20160616 01:01为日志的开始时间，20160616 23:59为日志的结束时间。

3.  根据[2](#zh-cn_topic_0237088806_zh-cn_topic_0059778412_l87490fc259434bc6ac7800ec9881a6ab)的界面输出提示，进入相应的日志收集目录，解压收集的日志，并检查数据库日志。

    以下以日志收集路径“/opt/gaussdb/tmp/gaussdba\_mppdb/collector\_20160726\_105158.tar.gz”为例进行操作。

    ```
    tar -xvzf /opt/gaussdb/tmp/gaussdba_mppdb/collector_20160726_105158.tar.gz 
    cd /opt/gaussdb/tmp/gaussdba_mppdb/collector_20160726_105158
    ```


## 示例<a name="zh-cn_topic_0237088806_zh-cn_topic_0059778412_sb0fb3a564c104088b282d390f8b15404"></a>

-   以--begin-time与--end-time为参数执行gs\_collector命令。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59"
    ```

    当显示类似如下信息表示日志已经归档。

    ```
    Successfully collected  files 
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_175615.tar.gz.
    ```

-   以--begin-time，--end-time与-h为参数执行gs\_collector命令。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -h plat2
    ```

    当显示类似如下信息表示日志已经归档。

    ```
    Successfully collected  files
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_190225.tar.gz.
    ```

-   以--begin-time，--end-time与-f为参数执行gs\_collector命令。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -f /opt/software/gaussdb/output
    ```

    当显示类似如下信息表示日志已经归档。

    ```
    Successfully collected  files
    All results are stored in /opt/software/gaussdb/output/collector_20160616_190511.tar.gz.
    ```

-   以--begin-time，--end-time与--keyword为参数执行gs\_collector命令。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" --keyword="os"
    ```

    当显示类似如下信息表示日志已经归档。

    ```
    Successfully collected files.
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_190836.tar.gz.
    ```

-   以--begin-time，--end-time与-o为参数执行gs\_collector命令。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -o /opt/software/gaussdb/output
    ```

    当显示类似如下信息表示日志已经归档。

    ```
    Successfully collected files.
    All results are stored in /opt/software/gaussdb/output/collector_20160726_113711.tar.gz.
    ```

-   以--begin-time，--end-time与-l为参数（文件名必须以.log为后缀）执行gs\_collector命令。

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -l /opt/software/gaussdb/logfile.log
    ```

    当显示类似如下信息表示日志已经归档。

    ```
    Successfully collected files.
    All results are stored in /opt/software/gaussdb/output/collector_20160726_113711.tar.gz.
    ```


