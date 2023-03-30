# 命令参考<a name="ZH-CN_TOPIC_0000001240744995"></a>

reprocessing-exporter的使用帮助详情：

```
gs_dbmind component reprocessing_exporter --help
usage:  [-h] [--disable-https] [--ssl-keyfile SSL_KEYFILE] [--ssl-certfile SSL_CERTFILE] [--ssl-ca-file SSL_CA_FILE] [--web.listen-address WEB.LISTEN_ADDRESS] [--web.listen-port WEB.LISTEN_PORT]
        [--collector.config COLLECTOR.CONFIG] [--log.filepath LOG.FILEPATH] [--log.level {debug,info,warn,error,fatal}] [-v]
        prometheus_host prometheus_port

Reprocessing Exporter: A re-processing module for metrics stored in the Prometheus server.

positional arguments:
  prometheus_host       from which host to pull data
  prometheus_port       the port to connect to the Prometheus host

optional arguments:
  -h, --help            show this help message and exit
  --disable-https       disable Https scheme
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --ssl-ca-file SSL_CA_FILE
                        set the path of ssl ca file
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --collector.config COLLECTOR.CONFIG
                        according to the content of the yaml file for metric collection
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above. Valid levels: [debug, info, warn, error, fatal]
  -v, --version         show program's version number and exit

```

**表 1**  reprocessing-exporter的命令行参数详情表

<a name="table286512502469"></a>
<table><thead align="left"><tr id="row1986615019467"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p138665504463"><a name="p138665504463"></a><a name="p138665504463"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p186619509468"><a name="p186619509468"></a><a name="p186619509468"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p168661250184611"><a name="p168661250184611"></a><a name="p168661250184611"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row12866165014612"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p686611503464"><a name="p686611503464"></a><a name="p686611503464"></a>prometheus_host</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4866165018469"><a name="p4866165018469"></a><a name="p4866165018469"></a>Prometheus-server的IP地址</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1578152944914"><a name="p1578152944914"></a><a name="p1578152944914"></a>-</p>
</td>
</tr>
<tr id="row1186605014465"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p88661550154616"><a name="p88661550154616"></a><a name="p88661550154616"></a>prometheus_port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p8399420114910"><a name="p8399420114910"></a><a name="p8399420114910"></a>Prometheus-server的服务侦听端口号</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19866550164618"><a name="p19866550164618"></a><a name="p19866550164618"></a>1024-65535</p>
</td>
</tr>
<tr id="row986665018466"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p08664504464"><a name="p08664504464"></a><a name="p08664504464"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11866155020464"><a name="p11866155020464"></a><a name="p11866155020464"></a>帮助选项</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p786635044615"><a name="p786635044615"></a><a name="p786635044615"></a>-</p>
</td>
</tr>
<tr id="row2318112311479"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1131892319471"><a name="p1131892319471"></a><a name="p1131892319471"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11318123144718"><a name="p11318123144718"></a><a name="p11318123144718"></a>禁用Https协议</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6318182315478"><a name="p6318182315478"></a><a name="p6318182315478"></a>-</p>
</td>
</tr>
<tr id="row10841142574718"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1584132574715"><a name="p1584132574715"></a><a name="p1584132574715"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1384172574718"><a name="p1384172574718"></a><a name="p1384172574718"></a>Https协议使用的证书私钥文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14841202520476"><a name="p14841202520476"></a><a name="p14841202520476"></a>-</p>
</td>
</tr>
<tr id="row1223172816471"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1223222844714"><a name="p1223222844714"></a><a name="p1223222844714"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1452318455015"><a name="p1452318455015"></a><a name="p1452318455015"></a>Https协议使用的证书文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4232172864714"><a name="p4232172864714"></a><a name="p4232172864714"></a>-</p>
</td>
</tr>
<tr id="row849151195914"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1650719592"><a name="p1650719592"></a><a name="p1650719592"></a>--ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p187607513591"><a name="p187607513591"></a><a name="p187607513591"></a>Https协议使用的CA证书文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row877453374711"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p477493316476"><a name="p477493316476"></a><a name="p477493316476"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p197741833164710"><a name="p197741833164710"></a><a name="p197741833164710"></a>该exporter服务的绑定IP</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2775113311470"><a name="p2775113311470"></a><a name="p2775113311470"></a>-</p>
</td>
</tr>
<tr id="row7476646174714"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19477124644712"><a name="p19477124644712"></a><a name="p19477124644712"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p747713464475"><a name="p747713464475"></a><a name="p747713464475"></a>该exporter服务的侦听端口</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12477124654715"><a name="p12477124654715"></a><a name="p12477124654715"></a>1024-65535</p>
</td>
</tr>
<tr id="row142421245184716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1242164517472"><a name="p1242164517472"></a><a name="p1242164517472"></a>--collector.config</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p132421945104714"><a name="p132421945104714"></a><a name="p132421945104714"></a>显性指定的待采集指标配置文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7242114512475"><a name="p7242114512475"></a><a name="p7242114512475"></a>-</p>
</td>
</tr>
<tr id="row19993443104711"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9993164324711"><a name="p9993164324711"></a><a name="p9993164324711"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p39935439475"><a name="p39935439475"></a><a name="p39935439475"></a>日志文件保存路径，默认保存在当前目录下</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p199937434478"><a name="p199937434478"></a><a name="p199937434478"></a>-</p>
</td>
</tr>
<tr id="row1179954244718"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p87991342164717"><a name="p87991342164717"></a><a name="p87991342164717"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p117997424471"><a name="p117997424471"></a><a name="p117997424471"></a>日志文件的打印级别，默认为INFO级别</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p979913424477"><a name="p979913424477"></a><a name="p979913424477"></a>debug, info, warn, error, fatal</p>
</td>
</tr>
<tr id="row1040774174716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1407104154712"><a name="p1407104154712"></a><a name="p1407104154712"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1407114184719"><a name="p1407114184719"></a><a name="p1407114184719"></a>显示版本信息</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p194071041124718"><a name="p194071041124718"></a><a name="p194071041124718"></a>-</p>
</td>
</tr>
</tbody>
</table>

openGauss-exporter的使用帮助详情：

```
gs_dbmind component opengauss_exporter --help
usage:  [-h] --url URL [--config-file CONFIG_FILE] [--include-databases INCLUDE_DATABASES] [--exclude-databases EXCLUDE_DATABASES] [--constant-labels CONSTANT_LABELS]
        [--web.listen-address WEB.LISTEN_ADDRESS] [--web.listen-port WEB.LISTEN_PORT] [--disable-cache] [--disable-settings-metrics]
        [--disable-statement-history-metrics] [--disable-https] [--disable-agent] [--ssl-keyfile SSL_KEYFILE] [--ssl-certfile SSL_CERTFILE] [--ssl-ca-file SSL_CA_FILE] [--parallel PARALLEL]
        [--log.filepath LOG.FILEPATH] [--log.level {debug,info,warn,error,fatal}] [-v]

openGauss Exporter (DBMind): Monitoring or controlling for openGauss.

optional arguments:
  -h, --help            show this help message and exit
  --url URL             openGauss database target url. It is recommended to connect to the postgres database through this URL, so that the exporter can actively discover and monitor other databases.
  --config-file CONFIG_FILE, --config CONFIG_FILE
                        path to config file.
  --include-databases INCLUDE_DATABASES
                        only scrape metrics from the given database list. a list of label=value separated by comma(,).
  --exclude-databases EXCLUDE_DATABASES
                        scrape metrics from the all auto-discovered databases excluding the list of database. a list of label=value separated by comma(,).
  --constant-labels CONSTANT_LABELS
                        a list of label=value separated by comma(,).
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --disable-cache       force not using cache.
  --disable-settings-metrics
                        not collect pg_settings.yml metrics.
  --disable-statement-history-metrics
                        not collect statement-history metrics (including slow queries).
  --disable-https       disable Https scheme
  --disable-agent       by default, this exporter also assumes the role of DBMind-Agent, that is, executing database operation and maintenance actions issued by the DBMind service. With this argument,
                        users can disable the agent functionality, thereby prohibiting the DBMind service from making changes to the database.
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --ssl-ca-file SSL_CA_FILE
                        set the path of ssl ca file
  --parallel PARALLEL   not collect pg_settings.yml metrics.
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above. Valid levels: [debug, info, warn, error, fatal]
  -v, --version         show program's version number and exit

```

**表 2**  openGauss-exporter的命令行参数详情表

<a name="table533711035311"></a>
<table><thead align="left"><tr id="row123370019533"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p16337110185316"><a name="p16337110185316"></a><a name="p16337110185316"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1133711055314"><a name="p1133711055314"></a><a name="p1133711055314"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p83373065314"><a name="p83373065314"></a><a name="p83373065314"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row733750205311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p533835112538"><a name="p533835112538"></a><a name="p533835112538"></a>--url</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18777165305311"><a name="p18777165305311"></a><a name="p18777165305311"></a>数据库server的连接地址，例如 postgres://user:pwd@host:port/dbname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7337500535"><a name="p7337500535"></a><a name="p7337500535"></a>如果该url涉及到的各字段URL包含特殊字符（如@,  /等），则需要通过URL编码进行转义，例如密码中的<span id="ph563719489716"><a name="ph563719489716"></a><a name="ph563719489716"></a>"</span>@<span id="ph18664125019711"><a name="ph18664125019711"></a><a name="ph18664125019711"></a>"</span>应转义为%40, <span id="ph765255411715"><a name="ph765255411715"></a><a name="ph765255411715"></a>"</span><span id="ph937711471556"><a name="ph937711471556"></a><a name="ph937711471556"></a>/"应转义为%2F. </span>否则各字段的含义会被错误识别和切分，具体转义规则可以参考<span id="ph8420256620"><a name="ph8420256620"></a><a name="ph8420256620"></a>URL</span>编码的转义规则<span id="ph7775328669"><a name="ph7775328669"></a><a name="ph7775328669"></a>, 该URL地址规则遵循</span><span id="ph1338211501968"><a name="ph1338211501968"></a><a name="ph1338211501968"></a> </span><a href="https://www.ietf.org/rfc/rfc1738.txt" target="_blank" rel="noopener noreferrer">RFC-1738</a><span id="ph1871512526614"><a name="ph1871512526614"></a><a name="ph1871512526614"></a> 标准</span>。</p>
</td>
</tr>
<tr id="row1933716045310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p190181345514"><a name="p190181345514"></a><a name="p190181345514"></a>--constant-labels</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1864520257365"><a name="p1864520257365"></a><a name="p1864520257365"></a>常量列表，k=v格式，用逗号隔开，表明该exporter自带的常量标签</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2645192573614"><a name="p2645192573614"></a><a name="p2645192573614"></a>格式如cluster_name=demo,cluster_id=1</p>
</td>
</tr>
<tr id="row9338110195319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p193381901530"><a name="p193381901530"></a><a name="p193381901530"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p733820105314"><a name="p733820105314"></a><a name="p733820105314"></a>帮助选项</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p143384013532"><a name="p143384013532"></a><a name="p143384013532"></a>-</p>
</td>
</tr>
<tr id="row183381301534"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3338100115316"><a name="p3338100115316"></a><a name="p3338100115316"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p43381709536"><a name="p43381709536"></a><a name="p43381709536"></a>禁用Https协议</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17338160175317"><a name="p17338160175317"></a><a name="p17338160175317"></a>-</p>
</td>
</tr>
<tr id="row173386015539"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p433830185315"><a name="p433830185315"></a><a name="p433830185315"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19338140135319"><a name="p19338140135319"></a><a name="p19338140135319"></a>Https协议使用的证书私钥文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p83381102533"><a name="p83381102533"></a><a name="p83381102533"></a>-</p>
</td>
</tr>
<tr id="row133383018530"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p183387015319"><a name="p183387015319"></a><a name="p183387015319"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15338170175312"><a name="p15338170175312"></a><a name="p15338170175312"></a>Https协议使用的证书文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p103381400536"><a name="p103381400536"></a><a name="p103381400536"></a>-</p>
</td>
</tr>
<tr id="row19823144215618"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1782314429614"><a name="p1782314429614"></a><a name="p1782314429614"></a>--ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4824174216610"><a name="p4824174216610"></a><a name="p4824174216610"></a>Https协议使用的CA证书文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17338160175317"><a name="p17338160175317"></a><a name="p17338160175317"></a>-</p>
</td>
</tr>
<tr id="row03389025316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p93381401537"><a name="p93381401537"></a><a name="p93381401537"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4338180195312"><a name="p4338180195312"></a><a name="p4338180195312"></a>该exporter服务的绑定IP</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16338140165316"><a name="p16338140165316"></a><a name="p16338140165316"></a>-</p>
</td>
</tr>
<tr id="row23382045314"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p17338130115319"><a name="p17338130115319"></a><a name="p17338130115319"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1233814020536"><a name="p1233814020536"></a><a name="p1233814020536"></a>该exporter服务的侦听端口</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p73389017531"><a name="p73389017531"></a><a name="p73389017531"></a>1024-65535</p>
</td>
</tr>
<tr id="row1833816025316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p840713548542"><a name="p840713548542"></a><a name="p840713548542"></a>--config, --config-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1133819015538"><a name="p1133819015538"></a><a name="p1133819015538"></a>显性指定的待采集指标配置文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19338700536"><a name="p19338700536"></a><a name="p19338700536"></a>-</p>
</td>
</tr>
<tr id="row143383017533"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p63383011531"><a name="p63383011531"></a><a name="p63383011531"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5338160175317"><a name="p5338160175317"></a><a name="p5338160175317"></a>日志文件保存路径，默认保存在当前目录下</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4338170165315"><a name="p4338170165315"></a><a name="p4338170165315"></a>-</p>
</td>
</tr>
<tr id="row533810095316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1133890135311"><a name="p1133890135311"></a><a name="p1133890135311"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5338608533"><a name="p5338608533"></a><a name="p5338608533"></a>日志文件的打印级别，默认为INFO级别</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p113391303531"><a name="p113391303531"></a><a name="p113391303531"></a>debug, info, warn, error, fatal</p>
</td>
</tr>
<tr id="row113398075311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p733980175314"><a name="p733980175314"></a><a name="p733980175314"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3339190185311"><a name="p3339190185311"></a><a name="p3339190185311"></a>显示版本信息</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1133918016532"><a name="p1133918016532"></a><a name="p1133918016532"></a>-</p>
</td>
</tr>
<tr id="row173398015315"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p733916035312"><a name="p733916035312"></a><a name="p733916035312"></a>--disable-cache</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p193394020534"><a name="p193394020534"></a><a name="p193394020534"></a>禁止使用缓存</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p033960145311"><a name="p033960145311"></a><a name="p033960145311"></a>-</p>
</td>
</tr>
<tr id="row1339100535"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1433930155318"><a name="p1433930155318"></a><a name="p1433930155318"></a>--disable-settings-metrics</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3339190115316"><a name="p3339190115316"></a><a name="p3339190115316"></a>禁止采集pg_settings表的值</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p233917045311"><a name="p233917045311"></a><a name="p233917045311"></a>-</p>
</td>
</tr>
<tr id="row861569195811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p86162916581"><a name="p86162916581"></a><a name="p86162916581"></a>--disable-statement-history-metrics</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13616392587"><a name="p13616392587"></a><a name="p13616392587"></a>禁止收集statement_history表中的慢SQL信息</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p66165925814"><a name="p66165925814"></a><a name="p66165925814"></a>-</p>
</td>
</tr>
<tr id="row0848297384"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16848169153813"><a name="p16848169153813"></a><a name="p16848169153813"></a>--disable-agent</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p78481694385"><a name="p78481694385"></a><a name="p78481694385"></a>禁止agent行为</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p208489923811"><a name="p208489923811"></a><a name="p208489923811"></a>-</p>
</td>
</tr>
<tr id="row2858183318554"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p58581533155515"><a name="p58581533155515"></a><a name="p58581533155515"></a>--include-databases</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p585812330559"><a name="p585812330559"></a><a name="p585812330559"></a>显性表明仅采集的数据库名，指定多个数据库时用逗号（,）隔开</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p685853325511"><a name="p685853325511"></a><a name="p685853325511"></a>-</p>
</td>
</tr>
<tr id="row18833121055618"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7833101005620"><a name="p7833101005620"></a><a name="p7833101005620"></a>--exclude-databases</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4833181085616"><a name="p4833181085616"></a><a name="p4833181085616"></a>显性表明不监控的数据库名，指定多个数据库时用逗号（,）隔开</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p48331310135612"><a name="p48331310135612"></a><a name="p48331310135612"></a>-</p>
</td>
</tr>
<tr id="row85501452175811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6551115235812"><a name="p6551115235812"></a><a name="p6551115235812"></a>--parallel</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11551165255813"><a name="p11551165255813"></a><a name="p11551165255813"></a>连接到<span id="text473419561534"><a name="text473419561534"></a><a name="text473419561534"></a>openGauss</span>的数据库连接池的大小</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p175511052135813"><a name="p175511052135813"></a><a name="p175511052135813"></a>正整数</p>
</td>
</tr>
</tbody>
</table>

cmd-exporter的使用帮助详情：

```
usage:  [-h] [--constant-labels CONSTANT_LABELS]
                   [--web.listen-address WEB.LISTEN_ADDRESS]
                   [--web.listen-port WEB.LISTEN_PORT]
                   [--disable-https]
                   [--config CONFIG] [--ssl-keyfile SSL_KEYFILE]
                   [--ssl-certfile SSL_CERTFILE] [--ssl-ca-file SSL_CA_FILE]
                   [--parallel PARALLEL] [--log.filepath LOG.FILEPATH]
                   [--log.level {debug,info,warn,error,fatal}] [-v]

Command Exporter (DBMind): scrape metrics by performing shell commands.

optional arguments:
  -h, --help            show this help message and exit
  --constant-labels CONSTANT_LABELS
                        a list of label=value separated by comma(,).
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --disable-https       disable Https scheme
  --config CONFIG       path to config dir or file.
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --ssl-ca-file SSL_CA_FILE
                        set the path of ssl ca file
  --parallel PARALLEL   performing shell command in parallel.
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above.
                        Valid levels: [debug, info, warn, error, fatal]
  -v, --version         show program's version number and exit
```

**表 3**  cmd-exporter的命令行参数详情表

<a name="table16989132717255"></a>
<table><thead align="left"><tr id="row1898992712513"><th class="cellrowborder" valign="top" width="28.742874287428744%" id="mcps1.2.4.1.1"><p id="p1998916274253"><a name="p1998916274253"></a><a name="p1998916274253"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="37.923792379237916%" id="mcps1.2.4.1.2"><p id="p19894276254"><a name="p19894276254"></a><a name="p19894276254"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p0989112719252"><a name="p0989112719252"></a><a name="p0989112719252"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row2989172792518"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p7989427132512"><a name="p7989427132512"></a><a name="p7989427132512"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p1398952711254"><a name="p1398952711254"></a><a name="p1398952711254"></a>帮助选项</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17989152722519"><a name="p17989152722519"></a><a name="p17989152722519"></a>-</p>
</td>
</tr>
<tr id="row29892277257"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p1198912274253"><a name="p1198912274253"></a><a name="p1198912274253"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p1999052711252"><a name="p1999052711252"></a><a name="p1999052711252"></a>禁用Https协议</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p399072772519"><a name="p399072772519"></a><a name="p399072772519"></a>-</p>
</td>
</tr>
<tr id="row1099092714256"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p1499017273250"><a name="p1499017273250"></a><a name="p1499017273250"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p1899072762514"><a name="p1899072762514"></a><a name="p1899072762514"></a>Https协议使用的证书私钥文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1899015273258"><a name="p1899015273258"></a><a name="p1899015273258"></a>-</p>
</td>
</tr>
<tr id="row169901027112511"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p179909277258"><a name="p179909277258"></a><a name="p179909277258"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p1299092722513"><a name="p1299092722513"></a><a name="p1299092722513"></a>Https协议使用的证书文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p59900271252"><a name="p59900271252"></a><a name="p59900271252"></a>-</p>
</td>
</tr>
<tr id="row22671038192413"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p5267153852413"><a name="p5267153852413"></a><a name="p5267153852413"></a>--ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p42671438152411"><a name="p42671438152411"></a><a name="p42671438152411"></a>Https协议使用的CA证书文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row139905274257"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p49902027142519"><a name="p49902027142519"></a><a name="p49902027142519"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p1599072712511"><a name="p1599072712511"></a><a name="p1599072712511"></a>该exporter服务的绑定IP</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11990192714251"><a name="p11990192714251"></a><a name="p11990192714251"></a>-</p>
</td>
</tr>
<tr id="row1699092718251"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p139902274256"><a name="p139902274256"></a><a name="p139902274256"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p2990027112515"><a name="p2990027112515"></a><a name="p2990027112515"></a>该exporter服务的侦听端口</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7990112716256"><a name="p7990112716256"></a><a name="p7990112716256"></a>1024-65535</p>
</td>
</tr>
<tr id="row1199092752516"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p159901327152515"><a name="p159901327152515"></a><a name="p159901327152515"></a>--config</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p89901027162516"><a name="p89901027162516"></a><a name="p89901027162516"></a>显性指定的待采集指标配置文件路径</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p189901527132519"><a name="p189901527132519"></a><a name="p189901527132519"></a>默认是该功能yamls目录下的default.yml文件，可以参考该配置文件格式，错误配置会报错</p>
</td>
</tr>
<tr id="row139901427122510"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p109901277253"><a name="p109901277253"></a><a name="p109901277253"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p1199018275254"><a name="p1199018275254"></a><a name="p1199018275254"></a>日志文件保存路径，默认保存在当前目录下</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19991152752510"><a name="p19991152752510"></a><a name="p19991152752510"></a>-</p>
</td>
</tr>
<tr id="row1699172792520"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p699122719250"><a name="p699122719250"></a><a name="p699122719250"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p5991192718251"><a name="p5991192718251"></a><a name="p5991192718251"></a>日志文件的打印级别，默认为INFO级别</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p49915273256"><a name="p49915273256"></a><a name="p49915273256"></a>debug, info, warn, error, fatal</p>
</td>
</tr>
<tr id="row172184732313"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p13213474234"><a name="p13213474234"></a><a name="p13213474234"></a>--parallel</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p132124712319"><a name="p132124712319"></a><a name="p132124712319"></a>并行执行shell命令的并发度</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p82194718233"><a name="p82194718233"></a><a name="p82194718233"></a>正整数</p>
</td>
</tr>
<tr id="row19637132511243"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p20637925112413"><a name="p20637925112413"></a><a name="p20637925112413"></a>--constant-labels</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p4637125182418"><a name="p4637125182418"></a><a name="p4637125182418"></a>常量列表，k=v格式，用逗号隔开，表明该exporter自带的常量标签</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p763717258245"><a name="p763717258245"></a><a name="p763717258245"></a>格式如cluster_name=demo,cluster_id=1</p>
</td>
</tr>
<tr id="row20991112732519"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="p499110274250"><a name="p499110274250"></a><a name="p499110274250"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="p499119274259"><a name="p499119274259"></a><a name="p499119274259"></a>显示版本信息</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18991102710251"><a name="p18991102710251"></a><a name="p18991102710251"></a>-</p>
</td>
</tr>
</tbody>
</table>

