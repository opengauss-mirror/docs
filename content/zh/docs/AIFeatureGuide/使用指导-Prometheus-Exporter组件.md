# 使用指导<a name="ZH-CN_TOPIC_0000002294398237"></a>

## 关闭HISTORY记录<a name="zh-cn_topic_0000001666869748_section851419845918"></a>

为了防范指令历史记录可能带来的安全隐患，在部署exporter采集组件的服务前，必须先将各部署节点的history指令关闭。

1.  修改根目录下/etc/profile文件。

    ```
    vim /etc/profile
    ```

2.  设置HISTSIZE值为0。例如，系统中HISTSIZE默认值为1000，将其修改为0。

    ```
    HISTSIZE=0
    ```

3.  保存/etc/profile。

    ```
    :wq
    ```

4.  设置/etc/profile生效。

    ```
    source /etc/profile
    ```

## 启动Exporter服务<a name="zh-cn_topic_0000001666869748_section1330102113595"></a>

用户可通过gs\_dbmind命令启动对应的exporter。下面为用户演示一个完整的Prometheus监控平台的搭建过程。

1.  部署Prometheus主进程，运行如下命令：

    ```
    prometheus --config.file=prometheus.yml
    ```

2.  部署opengauss-exporter：opengauss-exporter支持单节点和多节点部署模式，单节点部署下，URL参数中仅包含一个节点地址，下面示例使用默认侦听端口号9187，侦听地址为192.168.1.100，采用HTTPS协议，则命令可以为：

    ```
    echo '{"ssl-keyfile-password":"xxxxxx"}' | gs_dbmind component opengauss_exporter --url postgresql://user:password@ip:port/dbname --web.listen-address 192.168.1.100 --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt
    ```

    opengauss-exporter多节点部署模式示例，URL参数中包含多个节点地址，下面示例使用默认侦听端口号9187，侦听地址为192.168.1.100，URL参数中包含三个节点地址，采用HTTPS协议，则命令可以为：

    ```
    echo '{"ssl-keyfile-password":"xxxxxx"}' | gs_dbmind component opengauss_exporter --url postgresql://user:password@ip1:port1,ip2:port2,ip3:port3/dbname --web.listen-address 192.168.1.100 --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt
    ```

3.  部署reprocessing-exporter：启动reprocessing-exporter，采用默认侦听端口号8181，侦听地址为192.168.1.101，Prometheus-server IP与端口号为192.168.1.100:9090，采用HTTPS协议，则命令可以为：

    ```
    echo '{"ssl-keyfile-password":"xxxxxx"}' | gs_dbmind component reprocessing_exporter 192.168.1.100 9090 --web.listen-address 192.168.1.101 --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt
    ```

4.  部署cmd-exporter: 启动cmd-exporter，使用默认参数，设置采集的数据库日志目录路径，并给定证书信息：

    ```
    echo '{"ssl-keyfile-password":"xxxxxx"}' | gs_dbmind component cmd_exporter --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt --pg-log-dir /path/to/pglog
    ```

5.  部署node-exporter：一般而言，Prometheus监控平台都需要部署node-exporter用于监控Linux操作系统，后文提到的部分AI功能也需要依赖node-exporter采集Linux系统指标，故也需要用户来部署；使用方法详见：https://prometheus.io/docs/guides/node-exporter/\#installing-and-running-the-node-exporter。用户可直接运行该node-exporter进程，其默认端口号为9100，启动命令行为：

    ```
    node_exporter 
    ```

>![](public_sys-resources/icon-caution.gif) **注意：** 
>DBMind高可用功能需要在未纳管实例的情况下实现，因此接口不需要token认证。应当使用默认的HTTPS协议以进行SSL双向认证，使用HTTP协议则可能引入攻击者直接发起未授权请求的安全风险。

为保证DBMind云上使用时高可靠，exporter组件提供了组件状态查询和部分异常修复接口，详细请参见[表1](zh-cn_topic_0000001667029540.md#table117171681772)。

-   组件状态查询接口示例：

    ```
    curl -X 'POST'"http://127.0.0.1:8080/v1/api/check-status" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"cmd": "./gs_dbmind component cmd_exporter --web.listen-address 0.0.0.0 --web.listen-port 9181 --log.filepath /xxx/dbmind_cmd_exporter.log --disable-https"}'
    ```

    如果使用HTTPS协议，则查询示例为：

    ```
    curl -X 'POST'"https://127.0.0.1:8080/v1/api/check-status" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"cmd": "./gs_dbmind component cmd_exporter --web.listen-address 0.0.0.0 --web.listen-port 9181 --log.filepath /xxx/dbmind_cmd_exporter.log --ssl-keyfile xx.key --ssl-certfile xx.crt --ssl-ca-file xx.crt"}' --cacert xx.crt --key xx.key --cert xx.crt --pass xxx
    ```

    返回结果示例：

    ```
    {"data":{"error_msg":"","result":{},"state":"NORMAL"},"success":true}
    ```

-   组件异常修复接口示例：

    ```
    curl -X 'POST'"http://127.0.0.1:8080/v1/api/repair" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"cmd": "./gs_dbmind component cmd_exporter --web.listen-address 0.0.0.0 --web.listen-port 9181 --log.filepath /xxx/dbmind_cmd_exporter.log --disable-https"}' 
    ```

    如果使用HTTPS协议，则修复示例为：

    ```
    curl -X 'POST'"https://127.0.0.1:8080/v1/api/repair" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"cmd": "./gs_dbmind component cmd_exporter --web.listen-address 0.0.0.0 --web.listen-port 9181 --log.filepath /xxx/dbmind_cmd_exporter.log --ssl-keyfile xx.key --ssl-certfile xx.crt --ssl-ca-file xx.crt"}' --cacert xx.crt --key xx.key --cert xx.crt --pass xxx
    ```

    返回结果示例：

    ```
    {"data":{"error_msg":"","result":{},"state":"SUCCESS"},"success":true}
    ```

>![](public_sys-resources/icon-note.gif) **说明：** 
>exporter启动后，会根据dbmind/components/opengauss\_exporter/yamls、dbmind/components/cmd\_exporter/yamls目录下的配置文件信息和dbmind/components/reprocessing\_exporter/reprocessing\_exporter.yml文件中的信息来采集特定的指标。指标的配置信息如下例所示：
>```
>indicator_name:
>  name: indicator_name
>  desc: xxx
>  query:
>    - name: indicator_name
>	  sql: xxx
>	  version: xxx
>	  timeout: 10
>	  status: enable
>  metrics:
>    ...
>  status: enable
>  ttl: 0
>  timeout: 10
>  null_coverage_window: 30
>```
>当status值为enable时，会在指定的超时时间内对该指标进行采集。用户可以对默认开启状态status和超时时间timeout进行修改，修改后需重新启动exporter才能生效。
>null\_coverage\_window参数：当单次采集失败时，可以选择上一个成功的采集点来填充到空缺位置，当时钟超过上一个成功的采集时间加上null\_coverage\_window的秒数的阈值之后，不再进行填充。当null\_coverage\_window缺失时，会使用统一的默认值300秒来作为缺值补充的时间阈值。
>组件状态查询和修复接口只针对DBMind自研exporter，包括opengauss-exporter、cmd-exporter、reprocessing-exporter，对于开源的node-exporter则不支持。
>当前Exporter组件支持查询的异常场景如下：
>-   PID文件丢失或文件内容异常：当用户启动服务/组件后，会自动生成\*.pid文件来记录进程对应的进程标识符，也就是PID。
>-   日志文件丢失：当用户启动服务/组件后，会自动生成\*.log文件来记录进程运行的日志。此日志文件用于快速定位问题的根源、追踪程序执行的过程等。为防止日志文件的误删除，需要定期判断日志文件是否存在。
>-   资源占用异常：DBMind服务会执行索引推荐、指标分析、智能巡检等功能，需要占用系统资源；同样的，exporter组件会采集服务器上的指标，用于后续分析，也会占用系统资源；当服务/组件的CPU或内存占用超过阈值时，说明资源占用过高，服务/组件出现异常。因此需要监控服务和组件的资源占用情况。
>-   数据库异常：opengauss-exporter需要从数据库中获取数据，用于生成采集结果，所以需要判断数据库是否能够正常连接。
>资源占用阈值及告警设置如下：
>-   内存占用阈值：max\(总内存的1%，200MB\)。
>-   CPU多核占用阈值：cmd-exporter 10%，opengauss-exporter 10%，reprocessing-exporter 10%， DBMind 80%。
>-   CPU单核占用阈值：cmd-exporter 50%，opengauss-exporter 50%，reprocessing-exporter 50%，DBMind不做限制。
>-   调用高可用接口会检查资源占用，连续超过3次阈值才会触发资源占用告警。
>风险：当占用资源连续超过阈值三次时，会触发告警，导致正在运行的任务中断。
>当前Exporter针对组件异常的修复性说明如下：
>-   PID文件丢失：可自动修复；
>-   日志文件丢失：可自动修复；
>-   组件资源占用异常：不可通过接口修复；
>-   数据库异常：不可通过接口修复；
>-   opengauss-exporter需要使用单节点部署模式以保证获取必须的指标信息。

>![](public_sys-resources/icon-caution.gif) **注意：** 
>-   opengauss-exporter中连接数据库的用户需要monitor admin或以上权限，否则会出现部分指标无法采集的情况。同时opengauss-exporter不支持使用数据库初始用户来进行数据采集。
>-   opengauss-exporter多节点部署模式下，参数URL中最多支持8个节点地址，否则进程无法正常启动。
>-   opengauss-exporter多节点部署模式下只会连接主节点，如果提供的地址都为备节点则组件无法正常启动。
>-   opengauss-exporter多节点部署模式下，组件不会对URL中节点地址进行约束，在启动时会按照地址先后顺序依次连接，当连接成功时不会继续尝试连接后续地址，启动时如果所有地址均连接失败则进程无法成功，运行过程中如果所有节点均连接失败则进程会固定间隔尝试重新链接，连接成功后组件正常采集。
>-   opengauss-exporter中连接数据库的用户需要获取dbe\_perf模式下的数据，因此需要保证其具有该模式的权限。
>-   opengauss-exporter需要在url参数中连接postgres数据库来获取全局的指标信息，对特定数据库的采集请使用include-databases参数来指定
>-   opengauss-exporter会从dbe\_perf.statement\_history中抽样慢SQL信息，dbe\_perf.statement\_history视图慢SQL记录与GUC参数log\_min\_duration\_statement和track\_stmt\_stat\_level相关，其中log\_min\_duration\_statement是慢SQL阈值，单位毫秒，具体值由用户设置；track\_stmt\_stat\_level是SQL记录级别，默认为'OFF,L0'，即只记录慢SQL信息，级别为L0，建议用户在详细了解参数意义与作用的情况下谨慎修改。
>-   opengauss-exporter采集数据库相关信息，主要包括部分系统表和视图中的数据（具体参见代码中opengauss-exporter中的配置文件）。node-exporter采集系统指标信息，主要与系统磁盘、CPU等相关。reprocessing-exporter基于prometheus-server中的某些指标（具体参见代码中reprocessing-exporter中的配置文件）进行二次加工，最终提供加工后的数据供用户使用。
>-   当数据库部署在多层网络上时（管理层-数据层），opengauss-exporter的启动命令中的url参数必须使用数据层的ip地址，否则会影响DBMind的其他功能。
>-   prometheus-server在拉取exporter数据时有超时机制，超时时间由scrape\_timeout（默认10s）控制，因此当exporter采集数据量较大时，用户可根据实际情况增大scrape\_timeout以防止超时报错，另外需要注意的是scrape\_interval（采集间隔，默认15s）不能比scrape\_timeout小，否则会出现异常。
>-   opengauss-exporter的采集语句存在timeout机制，由于prometheus-server的scrape\_timeout默认为10秒，所以采集语句的上限为10秒，如果遇到数据库负载较高查询响应较慢的情况，可能会超过采集语句的timeout时长导致数据缺失。
>-   如果数据库时区设置和系统不相同，可能会出现时间相关指标时间与系统时间不一致的情况，因此需要将数据库时区与系统保持同步。
>-   当使用https通信时，工具会检测证书与密钥文件权限以及证书有效期，如果文件权限大于600则会出现报警，证书有效期小于90天会出现报警。
>-   当存在指标重复采集时，opengauss-exporter会出现异常，异常信息会打印到日志中。
>-   使用opengauss-exporter的--config、--disable-settings-metrics、--disable-statement-history-metrics三个参数时需要注意，其存在以下几种情况：
>    -   用户不指定其中任何参数，则工具会同时对yamls目录下的三个配置文件中的指标进行采集。
>    -   用户显式指定--config，则工具不会采集yamls目录下default.yml中的指标，而会采集用户指定配置文件中的指标，同时pg\_settings.yml和statements.yml正常采集，此时用户需要注意指定的配置文件中的指标和pg\_settings.yml、statements.yml中的指标不能存在重复采集的现象。
>    -   用户显式指定--disable-settings-metrics，则工具不会采集yamls目录下pg\_settings.yml中的指标；用户显式指定--disable-statement-history-metrics，则工具不会采集yamls目录下statements.yml（慢SQL相关）中的指标。
>-   exporter启动后，一般情况下不会终止进程并退出（如连接的数据库地址不可用、连接的数据库用户被删除或禁用等），而是会在日志中记录报错信息，并在后台重新尝试。
>-   cmd-exporter默认Linux系统定义了需要监控的openGauss的日志路径：$GAUSSLOG，如果没有定义$GAUSSLOG则需要进行定义。
>-   cmd-exporter默认匹配的是GUC参数“log\_statement='none'”时的日志格式，当log\_statement为其他参数时cmd-exporter会无法识别日志格式。
>-   由于cmd-exporter需要访问数据库日志和使用cm工具，所以需要由数据库用户部署cmd-exporter来获取相应的状态信息。
>-   实例升级过程中，opengauss-exporter无法正常采集数据，cmd-exporter无法采集数据库的cm相关信息。
>-   cmd-exporter的日志采集功能对于内核日志的日志文件名和日志格式都有要求，在GUC配置文件中，log\_filename的格式要求为'openGuass-%Y-%m-%d\_%H%M%S.log'，log\_line\_prefix的格式要求为'%m %n %u %d %h %p %S %x %a'。
>-   cmd-exporter采集的日志指标为散点图形式，各个采集点之间标签不同，所以不能合并到同一个集合中，不适合用折线图的方式进行展示，请采用表格或者散点图的方式进行展示。
>-   当cmd-exporter在一个采集周期内没有采集到日志指标时（指标为空，则表示没有生成ffic文件），则该指标数据为空。
>-   在某些特殊情况下由于日志文件激增，考虑到cpu的处理能力和内存限制，cmd-exporter为日志的消息队列设置了长度上限以防止内存泄露。当队列满时将停止新的日志事件入列直到队列有空间为止。这一设计可能导致在日志负载高的时候丢失部分日志指标。
>-   reprocessing-exporter中采集指标os\_disk\_usage时，只针对EXT和XFS文件系统，其他文件系统不会采集。
>-   采集组件启动时需要保证侦听端口和侦听地址可用，否则进程无法正常启动。
>-   采集系统刚启动的时候，各个exporter会存在初始化过程，可能会影响reprocessing-exporter指标的准确性。
>-   cmd\_exporter在执行系统命令时可能会遇到超时的现象，短期内的少数数据缺失会使用历史值来填充，不会影响到正常的数据采集以及其他的指标采集。

