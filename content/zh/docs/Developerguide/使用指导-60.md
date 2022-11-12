# 使用指导<a name="ZH-CN_TOPIC_0000001196305050"></a>

用户可通过gs\_dbmind命令启动对应的exporter。下面为用户演示一个完整的Prometheus监控平台的搭建过程。

1.  通过命令行进行Prometheus和所有exporter的启动：

    ```
    gs_dbmind component deployment --run
    ```

    prometheus和各个exporter单独的启动方式可以参考后续步骤，如果用户只采用自动部署工具部署，则可直接跳到**[部署node-exporter：一般地，对于Pr...](#li0810649203213)**。

2.  部署Prometheus主进程，运行如下命令：

    ```
    prometheus --config.file=prometheus.yml
    ```

3.  部署openGauss-exporter：启动openGauss-exporter，采用默认侦听端口号9187，侦听地址为192.168.1.100，不采用https协议，则命令可以为：

    ```
    gs_dbmind component opengauss_exporter --url postgresql://user:password@ip:port/dbname --web.listen-address 192.168.1.100 --disable-https
    ```

4.  部署reprocessing-exporter：启动reprocessing-exporter，采用默认侦听端口号8181，侦听地址为192.168.1.101，Prometheus-server IP与端口号为192.168.1.100:9090，采用https协议，则命令可以为：

    ```
    gs_dbmind component reprocessing_exporter 192.168.1.100 9090 --web.listen-address 192.168.1.101 --ssl-keyfile server.key --ssl-certfile server.crt 
    ```

5.  部署cmd-exporter: 启动cmd-exporter，使用默认参数，并给定证书信息：

    ```
    gs_dbmind component cmd_exporter --ssl-keyfile server.key --ssl-certfile server.crt 
    ```

6.  <a name="li0810649203213"></a>部署node-exporter：一般地，对于Prometheus监控平台都需要部署node-exporter用于监控Linux操作系统，后文提到的部分AI功能也需要依赖node-exporter采集Linux系统指标，故也需要用户来部署；使用方法详见：https://prometheus.io/docs/guides/node-exporter/\#installing-and-running-the-node-exporter。

    用户可直接运行该node-exporter进程，其默认端口号为9100，启动命令行为：

    ```
    node_exporter 
    ```

7.  用户可以通过命令行监测Prometheus和所有exporter的运行情况。

    ```
    gs_dbmind component deployment --check
    ```


>![](public_sys-resources/icon-caution.png) **注意：** 

>- openGauss-exporter中连接数据库的用户需要monitor admin或以上权限，否则会出现部分指标无法采集的情况。同时openGauss-exporter不支持使用数据库初始用户来进行数据采集。
>- oepnGauss-exporter链接的数据库用户需要获取dbe\_perf模式下的数据，因此需要保证其具有该视图的权限。
>- openGauss-exporter会从dbe\_perf.statement\_history中抽样慢SQL信息，dbe\_perf.statement\_history视图慢SQL记录与GUC参数log\_min\_duration\_statement和track\_stmnt\_stat\_level相关，其中log\_min\_duration\_statement是慢SQL阈值，单位毫秒，具体值由用户设置；track\_stmnt\_stat\_level是SQL记录级别，默认为'OFF,L0'，即只记录慢SQL信息，级别为L0，用户在详细了解参数意义与作用情况下谨慎修改。
>- openGauss-exporter采集数据库相关信息，主要包括部分系统表和视图中的数据（具体参见代码中opengauss\_exporter中的配置文件），node-exporter采集系统指标信息，主要与系统磁盘、CPU等相关，reprocessing\_exporter基于prometheus-server中的某些指标（具体参见代码中reprocessing\_exporter中的配置文件）进行二次加工，最终提供加工后的数据供用户使用。
>- prometheus-server在拉取exporter数据时有超时机制，超时时间由scrape\_timeout（默认10s）控制，因此当exporter采集数据量较大时，用户可根据实际情况增大scrape\_timeout以防止超时报错，另外需要注意的是scrape\_interval（采集间隔，默认15s）不能比scrape\_timeout小，否则会出现异常。
>- 如果数据库时区设置和系统不相同，可能会出现时间相关指标时间与系统时间不一致的情况，因此需要将用户时区与系统保持同步。
>- 当使用https通信时，工具会检测证书与密钥文件权限以及证书有效期，如果文件权限大于600则会出现报警，证书有效期小于90天会出现报警。
>- 当存在指标重复采集时，openGauss-exporter会出现异常，异常信息会打印到日志中。
>- openGauss-exporter的--config、--disable-settings-metrics、--disable-statement-history-metrics三个参数需要注意，其存在以下几种情况：
> 1. 用户不指定其中任何参数，则工具会同时对yamls目录下的三个配置文件中的指标进行采集。
> 2. 用户显式指定--config，则工具不会采集yamls目录下default.yml中的指标，而会采集用户指定配置文件中的指标，同时pg\_settings.yml和statements.yml正常采集，此时用户需要注意指定的配置文件中的指标和pg\_settings.yml、statements.yml中的指标不能存在重复采集的现象。
> 3. 用户显式指定--disable-settings-metrics，则工具不会采集yamls目录下pg\_settings.yml中的指标，用户显式指定--disable-statement-history-metrics，则工具不会采集yamls目录下statements.yml（慢SQL相关）中的指标。
>- exporter启动后，一般情况下不会终止进程并退出（如连接的数据库地址不可用、连接的数据库用户被删除或禁用等），而是会在日志中记录报错信息，并在后台重新尝试。


