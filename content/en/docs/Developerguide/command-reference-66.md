# Command Reference<a name="EN-US_TOPIC_0000001240744995"></a>

For details about how to use reprocessing-exporter, see the following help information:

```
gs_dbmind component reprocessing_exporter --help
usage:  [-h] [--disable-https] [--ssl-keyfile SSL_KEYFILE]
        [--ssl-certfile SSL_CERTFILE]
        [--web.listen-address WEB.LISTEN_ADDRESS]
        [--web.listen-port WEB.LISTEN_PORT]
        [--collector.config COLLECTOR.CONFIG] [--log.filepath LOG.FILEPATH]
        [--log.level {debug,info,warn,error,fatal}] [--version]
        prometheus_host prometheus_port

Reprocessing Exporter: A re-processing module for metrics stored in the
Prometheus server.

positional arguments:
  prometheus_host       from which host to pull data
  prometheus_port       the port to connect to the Prometheus host

optional arguments:
  -h, --help            show this help message and exit
  --disable-https       disable Https schema
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --collector.config COLLECTOR.CONFIG
                        according to the content of the yaml file for metric
                        collection
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above.
                        Valid levels: [debug, info, warn, error, fatal]
  --version             show program's version number and exit
```

**Table  1**  reprocessing-exporter parameters

<a name="table286512502469"></a>
<table><thead align="left"><tr id="row1986615019467"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p138665504463"><a name="p138665504463"></a><a name="p138665504463"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p186619509468"><a name="p186619509468"></a><a name="p186619509468"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p168661250184611"><a name="p168661250184611"></a><a name="p168661250184611"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row12866165014612"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p686611503464"><a name="p686611503464"></a><a name="p686611503464"></a>prometheus_host</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4866165018469"><a name="p4866165018469"></a><a name="p4866165018469"></a>Prometheus-server IP address</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1578152944914"><a name="p1578152944914"></a><a name="p1578152944914"></a>-</p>
</td>
</tr>
<tr id="row1186605014465"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p88661550154616"><a name="p88661550154616"></a><a name="p88661550154616"></a>prometheus_port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p8399420114910"><a name="p8399420114910"></a><a name="p8399420114910"></a>Listening port of Prometheus-server</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19866550164618"><a name="p19866550164618"></a><a name="p19866550164618"></a>1024-65535</p>
</td>
</tr>
<tr id="row986665018466"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p08664504464"><a name="p08664504464"></a><a name="p08664504464"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11866155020464"><a name="p11866155020464"></a><a name="p11866155020464"></a>Help option</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p786635044615"><a name="p786635044615"></a><a name="p786635044615"></a>-</p>
</td>
</tr>
<tr id="row2318112311479"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1131892319471"><a name="p1131892319471"></a><a name="p1131892319471"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11318123144718"><a name="p11318123144718"></a><a name="p11318123144718"></a>Disables HTTPS.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6318182315478"><a name="p6318182315478"></a><a name="p6318182315478"></a>-</p>
</td>
</tr>
<tr id="row10841142574718"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1584132574715"><a name="p1584132574715"></a><a name="p1584132574715"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1384172574718"><a name="p1384172574718"></a><a name="p1384172574718"></a>Path of the HTTPS certificate private key file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14841202520476"><a name="p14841202520476"></a><a name="p14841202520476"></a>-</p>
</td>
</tr>
<tr id="row1223172816471"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1223222844714"><a name="p1223222844714"></a><a name="p1223222844714"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1452318455015"><a name="p1452318455015"></a><a name="p1452318455015"></a>Path of the HTTPS certificate file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4232172864714"><a name="p4232172864714"></a><a name="p4232172864714"></a>-</p>
</td>
</tr>
<tr id="row877453374711"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p477493316476"><a name="p477493316476"></a><a name="p477493316476"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p197741833164710"><a name="p197741833164710"></a><a name="p197741833164710"></a>IP address bound to the exporter service</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2775113311470"><a name="p2775113311470"></a><a name="p2775113311470"></a>-</p>
</td>
</tr>
<tr id="row7476646174714"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19477124644712"><a name="p19477124644712"></a><a name="p19477124644712"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p747713464475"><a name="p747713464475"></a><a name="p747713464475"></a>Listening port of the exporter service</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12477124654715"><a name="p12477124654715"></a><a name="p12477124654715"></a>1024-65535</p>
</td>
</tr>
<tr id="row142421245184716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1242164517472"><a name="p1242164517472"></a><a name="p1242164517472"></a>--collector.config</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p132421945104714"><a name="p132421945104714"></a><a name="p132421945104714"></a>Path of the configuration file that explicitly specifies the metrics to be collected</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7242114512475"><a name="p7242114512475"></a><a name="p7242114512475"></a>-</p>
</td>
</tr>
<tr id="row19993443104711"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9993164324711"><a name="p9993164324711"></a><a name="p9993164324711"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p39935439475"><a name="p39935439475"></a><a name="p39935439475"></a>Path for storing log files. By default, log files are stored in the current directory.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p199937434478"><a name="p199937434478"></a><a name="p199937434478"></a>-</p>
</td>
</tr>
<tr id="row1179954244718"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p87991342164717"><a name="p87991342164717"></a><a name="p87991342164717"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p117997424471"><a name="p117997424471"></a><a name="p117997424471"></a>Printing level of the log file. The default level is <strong id="b162512050131416"><a name="b162512050131416"></a><a name="b162512050131416"></a>INFO</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p979913424477"><a name="p979913424477"></a><a name="p979913424477"></a>debug, info, warn, error, fatal</p>
</td>
</tr>
<tr id="row1040774174716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1407104154712"><a name="p1407104154712"></a><a name="p1407104154712"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1407114184719"><a name="p1407114184719"></a><a name="p1407114184719"></a>Displays version information.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p194071041124718"><a name="p194071041124718"></a><a name="p194071041124718"></a>-</p>
</td>
</tr>
</tbody>
</table>

For details about how to use openGauss-exporter, see the following help information:

```
gs_dbmind component opengauss_exporter --help
usage:  [-h] --url URL [--config CONFIG] [--constant-labels CONSTANT_LABELS]
        [--web.listen-address WEB.LISTEN_ADDRESS]
        [--web.listen-port WEB.LISTEN_PORT]
        [--web.telemetry-path WEB.TELEMETRY_PATH] [--disable-cache]
        [--disable-settings-metrics] [--disable-statement-history-metrics]
        [--disable-https] [--ssl-keyfile SSL_KEYFILE]
        [--ssl-certfile SSL_CERTFILE] [--parallel PARALLEL]
        [--log.filepath LOG.FILEPATH]
        [--log.level {debug,info,warn,error,fatal}] [--version]

openGauss Exporter (DBMind): Monitoring for openGauss.

optional arguments:
  -h, --help            show this help message and exit
  --url URL             openGauss database target url.
  --config CONFIG       path to config dir or file.
  --constant-labels CONSTANT_LABELS
                        a list of label=value separated by comma(,).
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --web.telemetry-path WEB.TELEMETRY_PATH
                        path under which to expose metrics.
  --disable-cache       force not using cache.
  --disable-settings-metrics
                        not collect pg_settings.yml metrics.
  --disable-statement-history-metrics
                        not collect statement-history metrics (including slow
                        queries).
  --disable-https       disable Https schema
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --parallel PARALLEL   not collect pg_settings.yml metrics.
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above.
                        Valid levels: [debug, info, warn, error, fatal]
  --version             show program's version number and exit
```

**Table  2**  openGauss-exporter parameters

<a name="table533711035311"></a>
<table><thead align="left"><tr id="row123370019533"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p16337110185316"><a name="p16337110185316"></a><a name="p16337110185316"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1133711055314"><a name="p1133711055314"></a><a name="p1133711055314"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p83373065314"><a name="p83373065314"></a><a name="p83373065314"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row733750205311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p533835112538"><a name="p533835112538"></a><a name="p533835112538"></a>--url</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18777165305311"><a name="p18777165305311"></a><a name="p18777165305311"></a>URL of the openGauss server, for example, postgres://user:pwd@host:port/dbname.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7337500535"><a name="p7337500535"></a><a name="p7337500535"></a>-</p>
</td>
</tr>
<tr id="row1933716045310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p190181345514"><a name="p190181345514"></a><a name="p190181345514"></a>--constant-labels</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1041314176551"><a name="p1041314176551"></a><a name="p1041314176551"></a>Constant labels, which are forcibly added to the collected metrics.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p73389010533"><a name="p73389010533"></a><a name="p73389010533"></a>1024-65535</p>
</td>
</tr>
<tr id="row9338110195319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p193381901530"><a name="p193381901530"></a><a name="p193381901530"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p733820105314"><a name="p733820105314"></a><a name="p733820105314"></a>Help option</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p143384013532"><a name="p143384013532"></a><a name="p143384013532"></a>-</p>
</td>
</tr>
<tr id="row183381301534"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3338100115316"><a name="p3338100115316"></a><a name="p3338100115316"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p43381709536"><a name="p43381709536"></a><a name="p43381709536"></a>Disables HTTPS.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17338160175317"><a name="p17338160175317"></a><a name="p17338160175317"></a>-</p>
</td>
</tr>
<tr id="row173386015539"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p433830185315"><a name="p433830185315"></a><a name="p433830185315"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19338140135319"><a name="p19338140135319"></a><a name="p19338140135319"></a>Path of the HTTPS certificate private key file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p83381102533"><a name="p83381102533"></a><a name="p83381102533"></a>-</p>
</td>
</tr>
<tr id="row133383018530"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p183387015319"><a name="p183387015319"></a><a name="p183387015319"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15338170175312"><a name="p15338170175312"></a><a name="p15338170175312"></a>Path of the HTTPS certificate file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p103381400536"><a name="p103381400536"></a><a name="p103381400536"></a>-</p>
</td>
</tr>
<tr id="row03389025316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p93381401537"><a name="p93381401537"></a><a name="p93381401537"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4338180195312"><a name="p4338180195312"></a><a name="p4338180195312"></a>IP address bound to the exporter service</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16338140165316"><a name="p16338140165316"></a><a name="p16338140165316"></a>-</p>
</td>
</tr>
<tr id="row23382045314"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p17338130115319"><a name="p17338130115319"></a><a name="p17338130115319"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1233814020536"><a name="p1233814020536"></a><a name="p1233814020536"></a>Listening port of the exporter service</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p73389017531"><a name="p73389017531"></a><a name="p73389017531"></a>1024-65535</p>
</td>
</tr>
<tr id="row193435315614"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11345534564"><a name="p11345534564"></a><a name="p11345534564"></a>--web.telemetry-path</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p113455319562"><a name="p113455319562"></a><a name="p113455319562"></a>URI of the exporter for collecting metrics. The default value is <strong id="b9422192901711"><a name="b9422192901711"></a><a name="b9422192901711"></a>/metrics</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1535185325613"><a name="p1535185325613"></a><a name="p1535185325613"></a>-</p>
</td>
</tr>
<tr id="row1833816025316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p840713548542"><a name="p840713548542"></a><a name="p840713548542"></a>--config</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1133819015538"><a name="p1133819015538"></a><a name="p1133819015538"></a>Path of the configuration file that explicitly specifies the metrics to be collected</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19338700536"><a name="p19338700536"></a><a name="p19338700536"></a>-</p>
</td>
</tr>
<tr id="row143383017533"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p63383011531"><a name="p63383011531"></a><a name="p63383011531"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5338160175317"><a name="p5338160175317"></a><a name="p5338160175317"></a>Path for storing log files. By default, log files are stored in the current directory.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4338170165315"><a name="p4338170165315"></a><a name="p4338170165315"></a>-</p>
</td>
</tr>
<tr id="row533810095316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1133890135311"><a name="p1133890135311"></a><a name="p1133890135311"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5338608533"><a name="p5338608533"></a><a name="p5338608533"></a>Printing level of the log file. The default level is <strong id="b42999464173"><a name="b42999464173"></a><a name="b42999464173"></a>INFO</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p113391303531"><a name="p113391303531"></a><a name="p113391303531"></a>debug, info, warn, error, fatal</p>
</td>
</tr>
<tr id="row113398075311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p733980175314"><a name="p733980175314"></a><a name="p733980175314"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3339190185311"><a name="p3339190185311"></a><a name="p3339190185311"></a>Displays version information.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1133918016532"><a name="p1133918016532"></a><a name="p1133918016532"></a>-</p>
</td>
</tr>
<tr id="row173398015315"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p733916035312"><a name="p733916035312"></a><a name="p733916035312"></a>--disable-cache</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p193394020534"><a name="p193394020534"></a><a name="p193394020534"></a>Disables the cache.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p033960145311"><a name="p033960145311"></a><a name="p033960145311"></a>-</p>
</td>
</tr>
<tr id="row1339100535"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1433930155318"><a name="p1433930155318"></a><a name="p1433930155318"></a>--disable-settings-metrics</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3339190115316"><a name="p3339190115316"></a><a name="p3339190115316"></a>Disables the collection of metrics in the <strong id="b18409142711189"><a name="b18409142711189"></a><a name="b18409142711189"></a>pg_settings</strong> table.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p233917045311"><a name="p233917045311"></a><a name="p233917045311"></a>-</p>
</td>
</tr>
<tr id="row861569195811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p86162916581"><a name="p86162916581"></a><a name="p86162916581"></a>--disable-statement-history-metrics</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13616392587"><a name="p13616392587"></a><a name="p13616392587"></a>Disables the collection of slow SQL statements in the <strong id="b16271568184"><a name="b16271568184"></a><a name="b16271568184"></a>statement_history</strong> table.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p66165925814"><a name="p66165925814"></a><a name="p66165925814"></a>-</p>
</td>
</tr>
<tr id="row85501452175811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6551115235812"><a name="p6551115235812"></a><a name="p6551115235812"></a>--parallel</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11551165255813"><a name="p11551165255813"></a><a name="p11551165255813"></a>Size of the database connection pool connected to openGauss.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p175511052135813"><a name="p175511052135813"></a><a name="p175511052135813"></a>Positive integer</p>
</td>
</tr>
</tbody>
</table>

