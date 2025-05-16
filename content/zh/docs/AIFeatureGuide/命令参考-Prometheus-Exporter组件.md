# 命令参考<a name="ZH-CN_TOPIC_0000002259861198"></a>

reprocessing-exporter的使用帮助详情：

```
gs_dbmind component reprocessing_exporter --help
usage:  [-h] [--prometheus-auth-user PROMETHEUS_AUTH_USER]
        [--prometheus-auth-password PROMETHEUS_AUTH_PASSWORD]
        [--disable-https] [--ssl-keyfile SSL_KEYFILE]
        [--ssl-certfile SSL_CERTFILE] [--ssl-ca-file SSL_CA_FILE]
        [--tsdb-ssl-keyfile TSDB_SSL_KEYFILE] [--tsdb-ssl-certfile TSDB_SSL_CERTFILE] 
        [--tsdb-ssl-ca-file TSDB_SSL_CA_FILE] 
        [--web.listen-address WEB.LISTEN_ADDRESS]
        [--web.listen-port WEB.LISTEN_PORT]
        [--collector.config COLLECTOR.CONFIG] [--log.filepath LOG.FILEPATH]
        [--log.level {debug,info,warn,error,fatal}] [-v]
        prometheus_host prometheus_port

Reprocessing Exporter: A re-processing module for metrics stored in the
Prometheus server.

positional arguments:
  prometheus_host       from which host to pull data
  prometheus_port       the port to connect to the Prometheus host

optional arguments:
  -h, --help            show this help message and exit
  --prometheus-auth-user PROMETHEUS_AUTH_USER
                        use this user for basic authorization to connect to
                        the Prometheus server
  --prometheus-auth-password PROMETHEUS_AUTH_PASSWORD
                        use this password for basic authorization to connect
                        to the Prometheus server
  --disable-https       disable Https scheme
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --ssl-ca-file SSL_CA_FILE
                        set the path of ssl ca file
  --tsdb-ssl-keyfile TSDB_SSL_KEYFILE
                        set the path of tsdb ssl key file
  --tsdb-ssl-certfile TSDB_SSL_CERTFILE
                        set the path of tsdb ssl certificate file
  --tsdb-ssl-ca-file TSDB_SSL_CA_FILE
                        set the path of tsdb ssl ca file
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --collector.config COLLECTOR.CONFIG, --config COLLECTOR.CONFIG
                        according to the content of the yaml file for metric
                        collection
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above.
                        Valid levels: [debug, info, warn, error, fatal]
  -v, --version         show program's version number and exit
```

**表 1**  reprocessing-exporter的命令行参数详情表

<a name="zh-cn_topic_0000001714829261_table17687850194116"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829261_row4687105004117"><th class="cellrowborder" valign="top" width="32.30323032303231%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829261_p186871750114114"><a name="zh-cn_topic_0000001714829261_p186871750114114"></a><a name="zh-cn_topic_0000001714829261_p186871750114114"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.753375337533754%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829261_p568725014118"><a name="zh-cn_topic_0000001714829261_p568725014118"></a><a name="zh-cn_topic_0000001714829261_p568725014118"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.943394339433944%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829261_p186871550134119"><a name="zh-cn_topic_0000001714829261_p186871550134119"></a><a name="zh-cn_topic_0000001714829261_p186871550134119"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829261_row168713505415"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p4687150154113"><a name="zh-cn_topic_0000001714829261_p4687150154113"></a><a name="zh-cn_topic_0000001714829261_p4687150154113"></a>prometheus_host</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p26872050194115"><a name="zh-cn_topic_0000001714829261_p26872050194115"></a><a name="zh-cn_topic_0000001714829261_p26872050194115"></a>Prometheus-server的IP地址。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p168711506411"><a name="zh-cn_topic_0000001714829261_p168711506411"></a><a name="zh-cn_topic_0000001714829261_p168711506411"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1687050134117"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p3688125018416"><a name="zh-cn_topic_0000001714829261_p3688125018416"></a><a name="zh-cn_topic_0000001714829261_p3688125018416"></a>prometheus_port</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p176888509417"><a name="zh-cn_topic_0000001714829261_p176888509417"></a><a name="zh-cn_topic_0000001714829261_p176888509417"></a>Prometheus-server的服务侦听端口号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1768805024117"><a name="zh-cn_topic_0000001714829261_p1768805024117"></a><a name="zh-cn_topic_0000001714829261_p1768805024117"></a>1024-65535。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row46881850144110"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p10688145074112"><a name="zh-cn_topic_0000001714829261_p10688145074112"></a><a name="zh-cn_topic_0000001714829261_p10688145074112"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p5688750124110"><a name="zh-cn_topic_0000001714829261_p5688750124110"></a><a name="zh-cn_topic_0000001714829261_p5688750124110"></a>帮助选项。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p8688650114113"><a name="zh-cn_topic_0000001714829261_p8688650114113"></a><a name="zh-cn_topic_0000001714829261_p8688650114113"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row101911818164317"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p2191201824311"><a name="zh-cn_topic_0000001714829261_p2191201824311"></a><a name="zh-cn_topic_0000001714829261_p2191201824311"></a>--prometheus-auth-user</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p11755190124420"><a name="zh-cn_topic_0000001714829261_p11755190124420"></a><a name="zh-cn_topic_0000001714829261_p11755190124420"></a>prometheus用户名称。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p131911018134315"><a name="zh-cn_topic_0000001714829261_p131911018134315"></a><a name="zh-cn_topic_0000001714829261_p131911018134315"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1263462244319"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p46348227434"><a name="zh-cn_topic_0000001714829261_p46348227434"></a><a name="zh-cn_topic_0000001714829261_p46348227434"></a>--prometheus-auth-password</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p662617724420"><a name="zh-cn_topic_0000001714829261_p662617724420"></a><a name="zh-cn_topic_0000001714829261_p662617724420"></a>prometheus用户密码。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p16634172215438"><a name="zh-cn_topic_0000001714829261_p16634172215438"></a><a name="zh-cn_topic_0000001714829261_p16634172215438"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row168813501412"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p126881650164111"><a name="zh-cn_topic_0000001714829261_p126881650164111"></a><a name="zh-cn_topic_0000001714829261_p126881650164111"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p96881950124113"><a name="zh-cn_topic_0000001714829261_p96881950124113"></a><a name="zh-cn_topic_0000001714829261_p96881950124113"></a>禁用HTTPS协议。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p116888501419"><a name="zh-cn_topic_0000001714829261_p116888501419"></a><a name="zh-cn_topic_0000001714829261_p116888501419"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row668825015410"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1168875012410"><a name="zh-cn_topic_0000001714829261_p1168875012410"></a><a name="zh-cn_topic_0000001714829261_p1168875012410"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p18688150114112"><a name="zh-cn_topic_0000001714829261_p18688150114112"></a><a name="zh-cn_topic_0000001714829261_p18688150114112"></a>HTTPS协议使用的证书私钥文件路径，如果为密文私钥，需要通过管道传入私钥密码，传输内容为json格式，密码填充在ssl-keyfile-password字段。如：`echo {"ssl-keyfile-password":"password"} | gs_dbmind component reprocessing_exporter ...`。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p0688195054112"><a name="zh-cn_topic_0000001714829261_p0688195054112"></a><a name="zh-cn_topic_0000001714829261_p0688195054112"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row12688750144112"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p13688145010412"><a name="zh-cn_topic_0000001714829261_p13688145010412"></a><a name="zh-cn_topic_0000001714829261_p13688145010412"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p11688050164118"><a name="zh-cn_topic_0000001714829261_p11688050164118"></a><a name="zh-cn_topic_0000001714829261_p11688050164118"></a>HTTPS协议使用的证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p116881550164118"><a name="zh-cn_topic_0000001714829261_p116881550164118"></a><a name="zh-cn_topic_0000001714829261_p116881550164118"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row8688950124113"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p166881501410"><a name="zh-cn_topic_0000001714829261_p166881501410"></a><a name="zh-cn_topic_0000001714829261_p166881501410"></a>--ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1368811505415"><a name="zh-cn_topic_0000001714829261_p1368811505415"></a><a name="zh-cn_topic_0000001714829261_p1368811505415"></a>HTTPS协议使用的CA证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p166881550174113"><a name="zh-cn_topic_0000001714829261_p166881550174113"></a><a name="zh-cn_topic_0000001714829261_p166881550174113"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row415510774420"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p19155117184411"><a name="zh-cn_topic_0000001714829261_p19155117184411"></a><a name="zh-cn_topic_0000001714829261_p19155117184411"></a>--tsdb-ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p17155167184411"><a name="zh-cn_topic_0000001714829261_p17155167184411"></a><a name="zh-cn_topic_0000001714829261_p17155167184411"></a>TSDB数据库使用的HTTPS协议证书私钥文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p15155578447"><a name="zh-cn_topic_0000001714829261_p15155578447"></a><a name="zh-cn_topic_0000001714829261_p15155578447"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row570516129441"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p14705161284415"><a name="zh-cn_topic_0000001714829261_p14705161284415"></a><a name="zh-cn_topic_0000001714829261_p14705161284415"></a>--tsdb-ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p11705412174416"><a name="zh-cn_topic_0000001714829261_p11705412174416"></a><a name="zh-cn_topic_0000001714829261_p11705412174416"></a>TSDB数据库使用的HTTPS协议证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p8705101210447"><a name="zh-cn_topic_0000001714829261_p8705101210447"></a><a name="zh-cn_topic_0000001714829261_p8705101210447"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1523981717448"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p152391417174414"><a name="zh-cn_topic_0000001714829261_p152391417174414"></a><a name="zh-cn_topic_0000001714829261_p152391417174414"></a>--tsdb-ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p8239111774415"><a name="zh-cn_topic_0000001714829261_p8239111774415"></a><a name="zh-cn_topic_0000001714829261_p8239111774415"></a>TSDB数据库使用的HTTPS协议CA证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p5239517194419"><a name="zh-cn_topic_0000001714829261_p5239517194419"></a><a name="zh-cn_topic_0000001714829261_p5239517194419"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row968819509419"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p368875019415"><a name="zh-cn_topic_0000001714829261_p368875019415"></a><a name="zh-cn_topic_0000001714829261_p368875019415"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p768985011412"><a name="zh-cn_topic_0000001714829261_p768985011412"></a><a name="zh-cn_topic_0000001714829261_p768985011412"></a>该exporter服务的绑定IP。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1568914506411"><a name="zh-cn_topic_0000001714829261_p1568914506411"></a><a name="zh-cn_topic_0000001714829261_p1568914506411"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row76891150134113"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p13689145004110"><a name="zh-cn_topic_0000001714829261_p13689145004110"></a><a name="zh-cn_topic_0000001714829261_p13689145004110"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p36896507416"><a name="zh-cn_topic_0000001714829261_p36896507416"></a><a name="zh-cn_topic_0000001714829261_p36896507416"></a>该exporter服务的侦听端口。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p06891250134120"><a name="zh-cn_topic_0000001714829261_p06891250134120"></a><a name="zh-cn_topic_0000001714829261_p06891250134120"></a>1024-65535。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1968945019411"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p136895505410"><a name="zh-cn_topic_0000001714829261_p136895505410"></a><a name="zh-cn_topic_0000001714829261_p136895505410"></a>--collector.config</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p0689125011411"><a name="zh-cn_topic_0000001714829261_p0689125011411"></a><a name="zh-cn_topic_0000001714829261_p0689125011411"></a>显性指定的待采集指标配置文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p19689155011415"><a name="zh-cn_topic_0000001714829261_p19689155011415"></a><a name="zh-cn_topic_0000001714829261_p19689155011415"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row18689125015415"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p9689650184117"><a name="zh-cn_topic_0000001714829261_p9689650184117"></a><a name="zh-cn_topic_0000001714829261_p9689650184117"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p16689155017412"><a name="zh-cn_topic_0000001714829261_p16689155017412"></a><a name="zh-cn_topic_0000001714829261_p16689155017412"></a>日志文件保存路径，默认保存在当前目录下。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p186890503411"><a name="zh-cn_topic_0000001714829261_p186890503411"></a><a name="zh-cn_topic_0000001714829261_p186890503411"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row66891250124120"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p668995034114"><a name="zh-cn_topic_0000001714829261_p668995034114"></a><a name="zh-cn_topic_0000001714829261_p668995034114"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p568975044111"><a name="zh-cn_topic_0000001714829261_p568975044111"></a><a name="zh-cn_topic_0000001714829261_p568975044111"></a>日志文件的打印级别，默认为INFO级别。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p136891350104119"><a name="zh-cn_topic_0000001714829261_p136891350104119"></a><a name="zh-cn_topic_0000001714829261_p136891350104119"></a>debug、info、warn、error、fatal。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row7689105054114"><td class="cellrowborder" valign="top" width="32.30323032303231%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p56896506418"><a name="zh-cn_topic_0000001714829261_p56896506418"></a><a name="zh-cn_topic_0000001714829261_p56896506418"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p9689195074112"><a name="zh-cn_topic_0000001714829261_p9689195074112"></a><a name="zh-cn_topic_0000001714829261_p9689195074112"></a>显示版本信息。</p>
</td>
<td class="cellrowborder" valign="top" width="33.943394339433944%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p16891350174111"><a name="zh-cn_topic_0000001714829261_p16891350174111"></a><a name="zh-cn_topic_0000001714829261_p16891350174111"></a>-</p>
</td>
</tr>
</tbody>
</table>

opengauss-exporter的使用帮助详情：

```
gs_dbmind component opengauss_exporter --help
usage:  [-h] --url URL [--config-file CONFIG_FILE]
        [--include-databases INCLUDE_DATABASES]
        [--exclude-databases EXCLUDE_DATABASES]
        [--constant-labels CONSTANT_LABELS]
        [--scrape-interval-seconds SCRAPE_INTERVAL_SECONDS]
        [--web.listen-address WEB.LISTEN_ADDRESS]
        [--web.listen-port WEB.LISTEN_PORT] [--disable-cache]
        [--disable-settings-metrics] [--disable-statement-history-metrics]
        [--disable-https] [--disable-agent] [--ssl-keyfile SSL_KEYFILE]
        [--ssl-certfile SSL_CERTFILE] [--ssl-ca-file SSL_CA_FILE]
        [--parallel PARALLEL] [--connection-pool-size CONNECTION_POOL_SIZE]
        [--log.filepath LOG.FILEPATH]
        [--log.level {debug,info,warn,error,fatal}] [-v]

openGauss Exporter (DBMind): Monitoring or controlling for openGauss.

optional arguments:
  -h, --help            show this help message and exit
  --url URL, --dsn URL  openGauss database target url. It is recommended to
                        connect to the postgres database through this URL, so
                        that the exporter can actively discover and monitor
                        other databases.
  --config-file CONFIG_FILE, --config CONFIG_FILE
                        path to config file.
  --include-databases INCLUDE_DATABASES
                        only scrape metrics from the given database list. a
                        list of database name (format is label=dbname or
                        dbname) separated by comma(,).
  --exclude-databases EXCLUDE_DATABASES
                        scrape metrics from the all auto-discovered databases
                        excluding the list of database. a list of database
                        name (format is label=dbname or dbname) separated by
                        comma(,).
  --constant-labels CONSTANT_LABELS
                        a list of label=value separated by comma(,).
  --scrape-interval-seconds SCRAPE_INTERVAL_SECONDS
                        specify the scrape interval in seconds to reduce
                        redundant results. If set 0, it means automatically
                        calculate.
  --web.listen-address WEB.LISTEN_ADDRESS
                        address on which to expose metrics and web interface
  --web.listen-port WEB.LISTEN_PORT
                        listen port to expose metrics and web interface
  --disable-cache       force not using cache.
  --disable-settings-metrics
                        not collect pg_settings.yml metrics.
  --disable-statement-history-metrics
                        not collect statement-history metrics (including slow
                        queries).
  --disable-https       disable Https scheme
  --disable-agent       by default, this exporter also assumes the role of
                        DBMind-Agent, that is, executing database operation
                        and maintenance actions issued by the DBMind service.
                        With this argument, users can disable the agent
                        functionality, thereby prohibiting the DBMind service
                        from making changes to the database.
  --ssl-keyfile SSL_KEYFILE
                        set the path of ssl key file
  --ssl-certfile SSL_CERTFILE
                        set the path of ssl certificate file
  --ssl-ca-file SSL_CA_FILE
                        set the path of ssl ca file
  --parallel PARALLEL   number of parallels for metrics scrape.
  --connection-pool-size CONNECTION_POOL_SIZE
                        size of connection pool for each database. Set zero to
                        disable connection pool.
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above.
                        Valid levels: [debug, info, warn, error, fatal]
  -v, --version         show program's version number and exit

```

**表 2**  opengauss-exporter的命令行参数详情表

<a name="zh-cn_topic_0000001714829261_table0690350104113"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829261_row1169095017418"><th class="cellrowborder" valign="top" width="32.34323432343235%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829261_p18690195018414"><a name="zh-cn_topic_0000001714829261_p18690195018414"></a><a name="zh-cn_topic_0000001714829261_p18690195018414"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="34.32343234323432%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829261_p369005084113"><a name="zh-cn_topic_0000001714829261_p369005084113"></a><a name="zh-cn_topic_0000001714829261_p369005084113"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829261_p569013504411"><a name="zh-cn_topic_0000001714829261_p569013504411"></a><a name="zh-cn_topic_0000001714829261_p569013504411"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829261_row106904507414"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1269175014117"><a name="zh-cn_topic_0000001714829261_p1269175014117"></a><a name="zh-cn_topic_0000001714829261_p1269175014117"></a>--url</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1269155014412"><a name="zh-cn_topic_0000001714829261_p1269155014412"></a><a name="zh-cn_topic_0000001714829261_p1269155014412"></a>数据库server的连接地址，支持单节点模式和多节点模式，单节点模式下示例： postgres://user:pwd@host:port/dbname。多节点部署模式下示例： postgres://user:pwd@host1:port1,host2:port2,host3:port3/dbname。其中不同地址之间通过逗号分割，同时节点数量不超过8个，否则进程无法正常启动。</p>
<p id="zh-cn_topic_0000001714829261_p136271357162015"><a name="zh-cn_topic_0000001714829261_p136271357162015"></a><a name="zh-cn_topic_0000001714829261_p136271357162015"></a>密码字段为空时，需要通过管道密码，传输内容为json格式，密码填充在db-password字段。如：`echo {"db-password":"password"} | gs_dbmind component opengauss_exporter ...`。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p15691155017419"><a name="zh-cn_topic_0000001714829261_p15691155017419"></a><a name="zh-cn_topic_0000001714829261_p15691155017419"></a>如果该url涉及到的各字段URL包含特殊字符（如@，/等），则需要通过URL编码进行转义，例如密码中的"@"应转义为%40，"/"应转义为%2F，否则各字段的含义会被错误识别和切分，具体转义规则可以参考URL编码的转义规则，该URL地址规则遵循<a href="https://www.ietf.org/rfc/rfc1738.txt" target="_blank" rel="noopener noreferrer">RFC-1738</a>标准。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row146914503418"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p3691165020416"><a name="zh-cn_topic_0000001714829261_p3691165020416"></a><a name="zh-cn_topic_0000001714829261_p3691165020416"></a>--constant-labels</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1569195054119"><a name="zh-cn_topic_0000001714829261_p1569195054119"></a><a name="zh-cn_topic_0000001714829261_p1569195054119"></a>常量列表，k=v格式，用逗号隔开，表明该exporter自带的常量标签。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p176915509412"><a name="zh-cn_topic_0000001714829261_p176915509412"></a><a name="zh-cn_topic_0000001714829261_p176915509412"></a>格式如“cluster_name=demo,cluster_id=1”。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1691185094120"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p56927504412"><a name="zh-cn_topic_0000001714829261_p56927504412"></a><a name="zh-cn_topic_0000001714829261_p56927504412"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p3692125034120"><a name="zh-cn_topic_0000001714829261_p3692125034120"></a><a name="zh-cn_topic_0000001714829261_p3692125034120"></a>帮助选项。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p15692195064114"><a name="zh-cn_topic_0000001714829261_p15692195064114"></a><a name="zh-cn_topic_0000001714829261_p15692195064114"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row126922504415"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p8692145017415"><a name="zh-cn_topic_0000001714829261_p8692145017415"></a><a name="zh-cn_topic_0000001714829261_p8692145017415"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p66927503413"><a name="zh-cn_topic_0000001714829261_p66927503413"></a><a name="zh-cn_topic_0000001714829261_p66927503413"></a>禁用HTTPS协议。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p06921450104115"><a name="zh-cn_topic_0000001714829261_p06921450104115"></a><a name="zh-cn_topic_0000001714829261_p06921450104115"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row469295044118"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p4692165044118"><a name="zh-cn_topic_0000001714829261_p4692165044118"></a><a name="zh-cn_topic_0000001714829261_p4692165044118"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p26937502416"><a name="zh-cn_topic_0000001714829261_p26937502416"></a><a name="zh-cn_topic_0000001714829261_p26937502416"></a>HTTPS协议使用的证书私钥文件路径，如果为密文私钥，需要通过管道传入私钥密码，传输内容为json格式，密码填充在ssl-keyfile-password字段。如：`echo {"ssl-keyfile-password":"password"} | gs_dbmind component opengauss_exporter ...`。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p2693135064115"><a name="zh-cn_topic_0000001714829261_p2693135064115"></a><a name="zh-cn_topic_0000001714829261_p2693135064115"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row9693195013416"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1269365024115"><a name="zh-cn_topic_0000001714829261_p1269365024115"></a><a name="zh-cn_topic_0000001714829261_p1269365024115"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1569335014414"><a name="zh-cn_topic_0000001714829261_p1569335014414"></a><a name="zh-cn_topic_0000001714829261_p1569335014414"></a>HTTPS协议使用的证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p10693150104113"><a name="zh-cn_topic_0000001714829261_p10693150104113"></a><a name="zh-cn_topic_0000001714829261_p10693150104113"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row156932506417"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p86931550134113"><a name="zh-cn_topic_0000001714829261_p86931550134113"></a><a name="zh-cn_topic_0000001714829261_p86931550134113"></a>--ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p106938509413"><a name="zh-cn_topic_0000001714829261_p106938509413"></a><a name="zh-cn_topic_0000001714829261_p106938509413"></a>HTTPS协议使用的CA证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1169395011412"><a name="zh-cn_topic_0000001714829261_p1169395011412"></a><a name="zh-cn_topic_0000001714829261_p1169395011412"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1069312503417"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p16693155064116"><a name="zh-cn_topic_0000001714829261_p16693155064116"></a><a name="zh-cn_topic_0000001714829261_p16693155064116"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p36931150134115"><a name="zh-cn_topic_0000001714829261_p36931150134115"></a><a name="zh-cn_topic_0000001714829261_p36931150134115"></a>该exporter服务的绑定IP。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p469316508416"><a name="zh-cn_topic_0000001714829261_p469316508416"></a><a name="zh-cn_topic_0000001714829261_p469316508416"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row156931550104114"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p12693175015419"><a name="zh-cn_topic_0000001714829261_p12693175015419"></a><a name="zh-cn_topic_0000001714829261_p12693175015419"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p269335064120"><a name="zh-cn_topic_0000001714829261_p269335064120"></a><a name="zh-cn_topic_0000001714829261_p269335064120"></a>该exporter服务的侦听端口。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1869395019414"><a name="zh-cn_topic_0000001714829261_p1869395019414"></a><a name="zh-cn_topic_0000001714829261_p1869395019414"></a>1024-65535。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1769310502416"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p166932500416"><a name="zh-cn_topic_0000001714829261_p166932500416"></a><a name="zh-cn_topic_0000001714829261_p166932500416"></a>--config, --config-file</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1469315013413"><a name="zh-cn_topic_0000001714829261_p1469315013413"></a><a name="zh-cn_topic_0000001714829261_p1469315013413"></a>显性指定的待采集指标配置文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p18693195020417"><a name="zh-cn_topic_0000001714829261_p18693195020417"></a><a name="zh-cn_topic_0000001714829261_p18693195020417"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1369385011419"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p11693155064119"><a name="zh-cn_topic_0000001714829261_p11693155064119"></a><a name="zh-cn_topic_0000001714829261_p11693155064119"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p206936503417"><a name="zh-cn_topic_0000001714829261_p206936503417"></a><a name="zh-cn_topic_0000001714829261_p206936503417"></a>日志文件保存路径，默认保存在当前目录下。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p12693205011418"><a name="zh-cn_topic_0000001714829261_p12693205011418"></a><a name="zh-cn_topic_0000001714829261_p12693205011418"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row469315010418"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1269305064110"><a name="zh-cn_topic_0000001714829261_p1269305064110"></a><a name="zh-cn_topic_0000001714829261_p1269305064110"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p56947508412"><a name="zh-cn_topic_0000001714829261_p56947508412"></a><a name="zh-cn_topic_0000001714829261_p56947508412"></a>日志文件的打印级别，默认为INFO级别。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1569495012415"><a name="zh-cn_topic_0000001714829261_p1569495012415"></a><a name="zh-cn_topic_0000001714829261_p1569495012415"></a>debug、info、warn、error、fatal。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row2694135016411"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p3694135017417"><a name="zh-cn_topic_0000001714829261_p3694135017417"></a><a name="zh-cn_topic_0000001714829261_p3694135017417"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p269435014419"><a name="zh-cn_topic_0000001714829261_p269435014419"></a><a name="zh-cn_topic_0000001714829261_p269435014419"></a>显示版本信息。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p2069495017414"><a name="zh-cn_topic_0000001714829261_p2069495017414"></a><a name="zh-cn_topic_0000001714829261_p2069495017414"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row19694150124111"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1669435004115"><a name="zh-cn_topic_0000001714829261_p1669435004115"></a><a name="zh-cn_topic_0000001714829261_p1669435004115"></a>--disable-cache</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p769485034111"><a name="zh-cn_topic_0000001714829261_p769485034111"></a><a name="zh-cn_topic_0000001714829261_p769485034111"></a>禁止使用缓存。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p156941950194113"><a name="zh-cn_topic_0000001714829261_p156941950194113"></a><a name="zh-cn_topic_0000001714829261_p156941950194113"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row196941450114120"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p169416505416"><a name="zh-cn_topic_0000001714829261_p169416505416"></a><a name="zh-cn_topic_0000001714829261_p169416505416"></a>--disable-settings-metrics</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1869465010417"><a name="zh-cn_topic_0000001714829261_p1869465010417"></a><a name="zh-cn_topic_0000001714829261_p1869465010417"></a>禁止采集pg_settings表的值。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1969405018418"><a name="zh-cn_topic_0000001714829261_p1969405018418"></a><a name="zh-cn_topic_0000001714829261_p1969405018418"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row269411506410"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p12694850124111"><a name="zh-cn_topic_0000001714829261_p12694850124111"></a><a name="zh-cn_topic_0000001714829261_p12694850124111"></a>--disable-statement-history-metrics</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p146941950154111"><a name="zh-cn_topic_0000001714829261_p146941950154111"></a><a name="zh-cn_topic_0000001714829261_p146941950154111"></a>禁止采集statement_history表中的慢SQL信息。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p669418509412"><a name="zh-cn_topic_0000001714829261_p669418509412"></a><a name="zh-cn_topic_0000001714829261_p669418509412"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row126941750134119"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p069445064112"><a name="zh-cn_topic_0000001714829261_p069445064112"></a><a name="zh-cn_topic_0000001714829261_p069445064112"></a>--disable-agent</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p16941450134116"><a name="zh-cn_topic_0000001714829261_p16941450134116"></a><a name="zh-cn_topic_0000001714829261_p16941450134116"></a>禁止agent行为。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p8694450164117"><a name="zh-cn_topic_0000001714829261_p8694450164117"></a><a name="zh-cn_topic_0000001714829261_p8694450164117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row18694750164117"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p969465019412"><a name="zh-cn_topic_0000001714829261_p969465019412"></a><a name="zh-cn_topic_0000001714829261_p969465019412"></a>--include-databases</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p13694155044110"><a name="zh-cn_topic_0000001714829261_p13694155044110"></a><a name="zh-cn_topic_0000001714829261_p13694155044110"></a>显性表明待采集的数据库名，指定多个数据库时用逗号（,）隔开。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p15694050104113"><a name="zh-cn_topic_0000001714829261_p15694050104113"></a><a name="zh-cn_topic_0000001714829261_p15694050104113"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row17694125074110"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p136941950164112"><a name="zh-cn_topic_0000001714829261_p136941950164112"></a><a name="zh-cn_topic_0000001714829261_p136941950164112"></a>--exclude-databases</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p16949501414"><a name="zh-cn_topic_0000001714829261_p16949501414"></a><a name="zh-cn_topic_0000001714829261_p16949501414"></a>显性表明不采集的数据库名，指定多个数据库时用逗号（,）隔开。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1695165014419"><a name="zh-cn_topic_0000001714829261_p1695165014419"></a><a name="zh-cn_topic_0000001714829261_p1695165014419"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row46951550114119"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1695350194116"><a name="zh-cn_topic_0000001714829261_p1695350194116"></a><a name="zh-cn_topic_0000001714829261_p1695350194116"></a>--parallel</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1769585074119"><a name="zh-cn_topic_0000001714829261_p1769585074119"></a><a name="zh-cn_topic_0000001714829261_p1769585074119"></a>指标采集的并行线程数，默认为5。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p106951650124111"><a name="zh-cn_topic_0000001714829261_p106951650124111"></a><a name="zh-cn_topic_0000001714829261_p106951650124111"></a>正整数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row7892647337"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p37941494331"><a name="zh-cn_topic_0000001714829261_p37941494331"></a><a name="zh-cn_topic_0000001714829261_p37941494331"></a>--scrape-interval-seconds</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p196731258103317"><a name="zh-cn_topic_0000001714829261_p196731258103317"></a><a name="zh-cn_topic_0000001714829261_p196731258103317"></a>明确抓取间隔避免重复采集指标，默认为0。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p419719103349"><a name="zh-cn_topic_0000001714829261_p419719103349"></a><a name="zh-cn_topic_0000001714829261_p419719103349"></a>&gt;=0的整数，如果为0，则根据上一次采集的时间对采集间隔进行动态调整。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row965114763313"><td class="cellrowborder" valign="top" width="32.34323432343235%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1234073263416"><a name="zh-cn_topic_0000001714829261_p1234073263416"></a><a name="zh-cn_topic_0000001714829261_p1234073263416"></a>--connection-pool-size</p>
</td>
<td class="cellrowborder" valign="top" width="34.32343234323432%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1883137173420"><a name="zh-cn_topic_0000001714829261_p1883137173420"></a><a name="zh-cn_topic_0000001714829261_p1883137173420"></a>数据库的连接池大小，默认为0。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p96521647123316"><a name="zh-cn_topic_0000001714829261_p96521647123316"></a><a name="zh-cn_topic_0000001714829261_p96521647123316"></a>&gt;=0的整数，如果为0，则不采用连接池连接。</p>
</td>
</tr>
</tbody>
</table>

cmd-exporter的使用帮助详情：

```
gs_dbmind component cmd_exporter --help
usage:  [-h] [--constant-labels CONSTANT_LABELS] [--web.listen-address WEB.LISTEN_ADDRESS] [--web.listen-port WEB.LISTEN_PORT] [--disable-https]
        [--config CONFIG] [--ssl-keyfile SSL_KEYFILE] [--ssl-certfile SSL_CERTFILE] [--ssl-ca-file SSL_CA_FILE] [--parallel PARALLEL]
        [--pg-log-dir PG_LOG_DIR] [--disable-log-exporter] [--log.filepath LOG.FILEPATH] [--log.level {debug,info,warn,error,fatal}] [-v]

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
  --pg-log-dir PG_LOG_DIR
                        set the directory path of PGLOG, default value is  $GAUSSLOG.
  --disable-log-exporter
                        disable log analysis
  --log.filepath LOG.FILEPATH
                        the path to log
  --log.level {debug,info,warn,error,fatal}
                        only log messages with the given severity or above. Valid levels: [debug, info, warn, error, fatal]
  -v, --version         show program's version number and exit


```

**表 3**  cmd-exporter的命令行参数详情表

<a name="zh-cn_topic_0000001714829261_table16989132717255"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829261_row1898992712513"><th class="cellrowborder" valign="top" width="28.742874287428744%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829261_p1998916274253"><a name="zh-cn_topic_0000001714829261_p1998916274253"></a><a name="zh-cn_topic_0000001714829261_p1998916274253"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="37.923792379237916%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829261_p19894276254"><a name="zh-cn_topic_0000001714829261_p19894276254"></a><a name="zh-cn_topic_0000001714829261_p19894276254"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829261_p0989112719252"><a name="zh-cn_topic_0000001714829261_p0989112719252"></a><a name="zh-cn_topic_0000001714829261_p0989112719252"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829261_row2989172792518"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p7989427132512"><a name="zh-cn_topic_0000001714829261_p7989427132512"></a><a name="zh-cn_topic_0000001714829261_p7989427132512"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1398952711254"><a name="zh-cn_topic_0000001714829261_p1398952711254"></a><a name="zh-cn_topic_0000001714829261_p1398952711254"></a>帮助选项。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p17989152722519"><a name="zh-cn_topic_0000001714829261_p17989152722519"></a><a name="zh-cn_topic_0000001714829261_p17989152722519"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row29892277257"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1198912274253"><a name="zh-cn_topic_0000001714829261_p1198912274253"></a><a name="zh-cn_topic_0000001714829261_p1198912274253"></a>--disable-https</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1999052711252"><a name="zh-cn_topic_0000001714829261_p1999052711252"></a><a name="zh-cn_topic_0000001714829261_p1999052711252"></a>禁用HTTPS协议。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p399072772519"><a name="zh-cn_topic_0000001714829261_p399072772519"></a><a name="zh-cn_topic_0000001714829261_p399072772519"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1099092714256"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p1499017273250"><a name="zh-cn_topic_0000001714829261_p1499017273250"></a><a name="zh-cn_topic_0000001714829261_p1499017273250"></a>--ssl-keyfile</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1899072762514"><a name="zh-cn_topic_0000001714829261_p1899072762514"></a><a name="zh-cn_topic_0000001714829261_p1899072762514"></a>HTTPS协议使用的证书私钥文件路径，如果为密文私钥，需要通过管道传入私钥密码，为json格式，ssl-keyfile-password字段。如：`echo {"ssl-keyfile-password":"password"} | gs_dbmind component cmd_exporter ...`。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p1899015273258"><a name="zh-cn_topic_0000001714829261_p1899015273258"></a><a name="zh-cn_topic_0000001714829261_p1899015273258"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row169901027112511"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p179909277258"><a name="zh-cn_topic_0000001714829261_p179909277258"></a><a name="zh-cn_topic_0000001714829261_p179909277258"></a>--ssl-certfile</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1299092722513"><a name="zh-cn_topic_0000001714829261_p1299092722513"></a><a name="zh-cn_topic_0000001714829261_p1299092722513"></a>HTTPS协议使用的证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p59900271252"><a name="zh-cn_topic_0000001714829261_p59900271252"></a><a name="zh-cn_topic_0000001714829261_p59900271252"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row22671038192413"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p5267153852413"><a name="zh-cn_topic_0000001714829261_p5267153852413"></a><a name="zh-cn_topic_0000001714829261_p5267153852413"></a>--ssl-ca-file</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p42671438152411"><a name="zh-cn_topic_0000001714829261_p42671438152411"></a><a name="zh-cn_topic_0000001714829261_p42671438152411"></a>HTTPS协议使用的CA证书文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p152677389246"><a name="zh-cn_topic_0000001714829261_p152677389246"></a><a name="zh-cn_topic_0000001714829261_p152677389246"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row139905274257"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p49902027142519"><a name="zh-cn_topic_0000001714829261_p49902027142519"></a><a name="zh-cn_topic_0000001714829261_p49902027142519"></a>--web.listen-address</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1599072712511"><a name="zh-cn_topic_0000001714829261_p1599072712511"></a><a name="zh-cn_topic_0000001714829261_p1599072712511"></a>该exporter服务的绑定IP。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p11990192714251"><a name="zh-cn_topic_0000001714829261_p11990192714251"></a><a name="zh-cn_topic_0000001714829261_p11990192714251"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1699092718251"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p139902274256"><a name="zh-cn_topic_0000001714829261_p139902274256"></a><a name="zh-cn_topic_0000001714829261_p139902274256"></a>--web.listen-port</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p2990027112515"><a name="zh-cn_topic_0000001714829261_p2990027112515"></a><a name="zh-cn_topic_0000001714829261_p2990027112515"></a>该exporter服务的侦听端口。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p7990112716256"><a name="zh-cn_topic_0000001714829261_p7990112716256"></a><a name="zh-cn_topic_0000001714829261_p7990112716256"></a>1024-65535。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1199092752516"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p159901327152515"><a name="zh-cn_topic_0000001714829261_p159901327152515"></a><a name="zh-cn_topic_0000001714829261_p159901327152515"></a>--config</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p89901027162516"><a name="zh-cn_topic_0000001714829261_p89901027162516"></a><a name="zh-cn_topic_0000001714829261_p89901027162516"></a>显性指定的待采集指标配置文件路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p189901527132519"><a name="zh-cn_topic_0000001714829261_p189901527132519"></a><a name="zh-cn_topic_0000001714829261_p189901527132519"></a>默认是该功能yamls目录下的default.yml文件，可以参考该配置文件格式，错误配置会报错。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row139901427122510"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p109901277253"><a name="zh-cn_topic_0000001714829261_p109901277253"></a><a name="zh-cn_topic_0000001714829261_p109901277253"></a>--log.filepath</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1199018275254"><a name="zh-cn_topic_0000001714829261_p1199018275254"></a><a name="zh-cn_topic_0000001714829261_p1199018275254"></a>日志文件保存路径，默认保存在当前目录下。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p19991152752510"><a name="zh-cn_topic_0000001714829261_p19991152752510"></a><a name="zh-cn_topic_0000001714829261_p19991152752510"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1699172792520"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p699122719250"><a name="zh-cn_topic_0000001714829261_p699122719250"></a><a name="zh-cn_topic_0000001714829261_p699122719250"></a>--log.level</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p5991192718251"><a name="zh-cn_topic_0000001714829261_p5991192718251"></a><a name="zh-cn_topic_0000001714829261_p5991192718251"></a>日志文件的打印级别，默认为INFO级别。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p49915273256"><a name="zh-cn_topic_0000001714829261_p49915273256"></a><a name="zh-cn_topic_0000001714829261_p49915273256"></a>debug、info、warn、error、fatal。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row172184732313"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p13213474234"><a name="zh-cn_topic_0000001714829261_p13213474234"></a><a name="zh-cn_topic_0000001714829261_p13213474234"></a>--parallel</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p132124712319"><a name="zh-cn_topic_0000001714829261_p132124712319"></a><a name="zh-cn_topic_0000001714829261_p132124712319"></a>并行执行shell命令的并发度。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p82194718233"><a name="zh-cn_topic_0000001714829261_p82194718233"></a><a name="zh-cn_topic_0000001714829261_p82194718233"></a>正整数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1899713555268"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p699717556262"><a name="zh-cn_topic_0000001714829261_p699717556262"></a><a name="zh-cn_topic_0000001714829261_p699717556262"></a>--pg-log-dir</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p1099775542613"><a name="zh-cn_topic_0000001714829261_p1099775542613"></a><a name="zh-cn_topic_0000001714829261_p1099775542613"></a>日志侦听路径，默认路径为“${GAUSSLOG}/gs_log”。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p29971655112610"><a name="zh-cn_topic_0000001714829261_p29971655112610"></a><a name="zh-cn_topic_0000001714829261_p29971655112610"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row1293140172717"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p209312020272"><a name="zh-cn_topic_0000001714829261_p209312020272"></a><a name="zh-cn_topic_0000001714829261_p209312020272"></a>--disable-log-exporter</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p16931009272"><a name="zh-cn_topic_0000001714829261_p16931009272"></a><a name="zh-cn_topic_0000001714829261_p16931009272"></a>禁用日志采集功能。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p29316022711"><a name="zh-cn_topic_0000001714829261_p29316022711"></a><a name="zh-cn_topic_0000001714829261_p29316022711"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row19637132511243"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p20637925112413"><a name="zh-cn_topic_0000001714829261_p20637925112413"></a><a name="zh-cn_topic_0000001714829261_p20637925112413"></a>--constant-labels</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p4637125182418"><a name="zh-cn_topic_0000001714829261_p4637125182418"></a><a name="zh-cn_topic_0000001714829261_p4637125182418"></a>常量列表，k=v格式，用逗号隔开，表明该exporter自带的常量标签。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p763717258245"><a name="zh-cn_topic_0000001714829261_p763717258245"></a><a name="zh-cn_topic_0000001714829261_p763717258245"></a>格式如“cluster_name=demo,cluster_id=1”。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829261_row20991112732519"><td class="cellrowborder" valign="top" width="28.742874287428744%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829261_p499110274250"><a name="zh-cn_topic_0000001714829261_p499110274250"></a><a name="zh-cn_topic_0000001714829261_p499110274250"></a>--version</p>
</td>
<td class="cellrowborder" valign="top" width="37.923792379237916%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829261_p499119274259"><a name="zh-cn_topic_0000001714829261_p499119274259"></a><a name="zh-cn_topic_0000001714829261_p499119274259"></a>显示版本信息。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829261_p18991102710251"><a name="zh-cn_topic_0000001714829261_p18991102710251"></a><a name="zh-cn_topic_0000001714829261_p18991102710251"></a>-</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>当启用日志监测功能时，当监控的日志路径发生变动时，请重启cmd-exporter进程。
>cmd-exporter进程对容器化环境部分支持。

