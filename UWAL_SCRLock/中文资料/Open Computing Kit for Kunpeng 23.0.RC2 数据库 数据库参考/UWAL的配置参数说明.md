# UWAL的配置参数说明<a name="ZH-CN_TOPIC_0000001667941773"></a>

在开启UWAL特性之前或关闭UWAL特性时，可以用**vim**方式或**gs\_guc**命令配置以下参数。

**表 1**  UWAL的配置参数

<a name="table723314102533"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001666458629_row25651989917"><th class="cellrowborder" valign="top" width="23.126556486302924%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0000001666458629_p656518814920"><a name="zh-cn_topic_0000001666458629_p656518814920"></a><a name="zh-cn_topic_0000001666458629_p656518814920"></a>参数名称</p>
</th>
<th class="cellrowborder" valign="top" width="8.071088974417027%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0000001666458629_p1588918155523"><a name="zh-cn_topic_0000001666458629_p1588918155523"></a><a name="zh-cn_topic_0000001666458629_p1588918155523"></a>参数类型</p>
</th>
<th class="cellrowborder" valign="top" width="44.60040751641386%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0000001666458629_p156538994"><a name="zh-cn_topic_0000001666458629_p156538994"></a><a name="zh-cn_topic_0000001666458629_p156538994"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="24.2019470228662%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0000001666458629_p756568792"><a name="zh-cn_topic_0000001666458629_p756568792"></a><a name="zh-cn_topic_0000001666458629_p756568792"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001666458629_row1344716210013"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p15447202403"><a name="zh-cn_topic_0000001666458629_p15447202403"></a><a name="zh-cn_topic_0000001666458629_p15447202403"></a>replconninfo{N}</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p4447122006"><a name="zh-cn_topic_0000001666458629_p4447122006"></a><a name="zh-cn_topic_0000001666458629_p4447122006"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p12291125152313"><a name="zh-cn_topic_0000001666458629_p12291125152313"></a><a name="zh-cn_topic_0000001666458629_p12291125152313"></a>配置远端UWAL节点的IP地址及Port，需要在原有参数后面增加remotenodeid（远端节点的uwal_nodeid）、remoteuwalhost（远端节点的uwal_ip）、remoteuwalport（远端节点的uwal_port）。<span class="parmvalue" id="zh-cn_topic_0000001666458629_parmvalue10543195803112"><a name="zh-cn_topic_0000001666458629_parmvalue10543195803112"></a><a name="zh-cn_topic_0000001666458629_parmvalue10543195803112"></a>“N”</span>表示设置本端侦听和鉴权的第N个节<em id="zh-cn_topic_0000001666458629_i14460457172612"><a name="zh-cn_topic_0000001666458629_i14460457172612"></a><a name="zh-cn_topic_0000001666458629_i14460457172612"></a>点信息。</em></p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p11263735204712"><a name="zh-cn_topic_0000001666458629_p11263735204712"></a><a name="zh-cn_topic_0000001666458629_p11263735204712"></a>字符串。其中空字符串表示没有配置第N个节点信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row14252637115317"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p8252203735311"><a name="zh-cn_topic_0000001666458629_p8252203735311"></a><a name="zh-cn_topic_0000001666458629_p8252203735311"></a>enable_uwal</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p152521637135313"><a name="zh-cn_topic_0000001666458629_p152521637135313"></a><a name="zh-cn_topic_0000001666458629_p152521637135313"></a>布尔型</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p625212379535"><a name="zh-cn_topic_0000001666458629_p625212379535"></a><a name="zh-cn_topic_0000001666458629_p625212379535"></a>开启UWAL功能。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0000001666458629_ul1730195610532"></a><a name="zh-cn_topic_0000001666458629_ul1730195610532"></a><ul id="zh-cn_topic_0000001666458629_ul1730195610532"><li>on，表示开启UWAL功能。</li><li>off，表示关闭UWAL功能。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row459675018428"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p859675013425"><a name="zh-cn_topic_0000001666458629_p859675013425"></a><a name="zh-cn_topic_0000001666458629_p859675013425"></a>uwal_config</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p2596195011427"><a name="zh-cn_topic_0000001666458629_p2596195011427"></a><a name="zh-cn_topic_0000001666458629_p2596195011427"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p1473010295313"><a name="zh-cn_topic_0000001666458629_p1473010295313"></a><a name="zh-cn_topic_0000001666458629_p1473010295313"></a>UWAL配置。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p059665015426"><a name="zh-cn_topic_0000001666458629_p059665015426"></a><a name="zh-cn_topic_0000001666458629_p059665015426"></a>JSON类型的字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row4407698390"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p1840715973919"><a name="zh-cn_topic_0000001666458629_p1840715973919"></a><a name="zh-cn_topic_0000001666458629_p1840715973919"></a>uwal_disk_size</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p1140717915395"><a name="zh-cn_topic_0000001666458629_p1140717915395"></a><a name="zh-cn_topic_0000001666458629_p1140717915395"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p17407792391"><a name="zh-cn_topic_0000001666458629_p17407792391"></a><a name="zh-cn_topic_0000001666458629_p17407792391"></a>UWAL占用磁盘大小，不能超过磁盘大小。单位：byte。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p16829854115014"><a name="zh-cn_topic_0000001666458629_p16829854115014"></a><a name="zh-cn_topic_0000001666458629_p16829854115014"></a>最小值：8589934592</p>
<p id="zh-cn_topic_0000001666458629_p17120172118219"><a name="zh-cn_topic_0000001666458629_p17120172118219"></a><a name="zh-cn_topic_0000001666458629_p17120172118219"></a>最大值：4398046511104</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row124911412194316"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p1849211210431"><a name="zh-cn_topic_0000001666458629_p1849211210431"></a><a name="zh-cn_topic_0000001666458629_p1849211210431"></a>uwal_devices_path</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p949214126432"><a name="zh-cn_topic_0000001666458629_p949214126432"></a><a name="zh-cn_topic_0000001666458629_p949214126432"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p649211210432"><a name="zh-cn_topic_0000001666458629_p649211210432"></a><a name="zh-cn_topic_0000001666458629_p649211210432"></a>UWAL文件存放路径（已存在的路径，不会自动创建目录），调用UwalInit()函数时传入的参数名。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p13444115913211"><a name="zh-cn_topic_0000001666458629_p13444115913211"></a><a name="zh-cn_topic_0000001666458629_p13444115913211"></a>文件存放路径组成的字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row138231819439"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p1138281811439"><a name="zh-cn_topic_0000001666458629_p1138281811439"></a><a name="zh-cn_topic_0000001666458629_p1138281811439"></a>uwal_log_path</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p11382161815431"><a name="zh-cn_topic_0000001666458629_p11382161815431"></a><a name="zh-cn_topic_0000001666458629_p11382161815431"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p1832318524495"><a name="zh-cn_topic_0000001666458629_p1832318524495"></a><a name="zh-cn_topic_0000001666458629_p1832318524495"></a>UWAL日志文件存放路径（已存在的路径，不会自动创建目录）。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p19301132112335"><a name="zh-cn_topic_0000001666458629_p19301132112335"></a><a name="zh-cn_topic_0000001666458629_p19301132112335"></a>文件存放路径组成的字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row15325134455119"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p143269444516"><a name="zh-cn_topic_0000001666458629_p143269444516"></a><a name="zh-cn_topic_0000001666458629_p143269444516"></a>uwal_rpc_compression_switch</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p9792504515"><a name="zh-cn_topic_0000001666458629_p9792504515"></a><a name="zh-cn_topic_0000001666458629_p9792504515"></a>布尔型</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p17326344185111"><a name="zh-cn_topic_0000001666458629_p17326344185111"></a><a name="zh-cn_topic_0000001666458629_p17326344185111"></a>是否压缩传输。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0000001666458629_ul723414185211"></a><a name="zh-cn_topic_0000001666458629_ul723414185211"></a><ul id="zh-cn_topic_0000001666458629_ul723414185211"><li>true，表示开启压缩传输。</li><li>false，表示关闭压缩传输。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row20803334125218"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p680363414522"><a name="zh-cn_topic_0000001666458629_p680363414522"></a><a name="zh-cn_topic_0000001666458629_p680363414522"></a>uwal_rpc_flowcontrol_switch</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p26042047125212"><a name="zh-cn_topic_0000001666458629_p26042047125212"></a><a name="zh-cn_topic_0000001666458629_p26042047125212"></a>布尔型</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p1560715215815"><a name="zh-cn_topic_0000001666458629_p1560715215815"></a><a name="zh-cn_topic_0000001666458629_p1560715215815"></a>纯异步备库流控开关，在主库设置。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0000001666458629_ul175600166531"></a><a name="zh-cn_topic_0000001666458629_ul175600166531"></a><ul id="zh-cn_topic_0000001666458629_ul175600166531"><li>on，表示打开纯异步备库流开关。</li><li>off，表示关闭纯异步备库流开关。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row1861817512539"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p106188514539"><a name="zh-cn_topic_0000001666458629_p106188514539"></a><a name="zh-cn_topic_0000001666458629_p106188514539"></a>uwal_rpc_flowcontrol_value</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p3618115110538"><a name="zh-cn_topic_0000001666458629_p3618115110538"></a><a name="zh-cn_topic_0000001666458629_p3618115110538"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p176184512531"><a name="zh-cn_topic_0000001666458629_p176184512531"></a><a name="zh-cn_topic_0000001666458629_p176184512531"></a>纯异步备库接收阈值。单位：MB。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p637754013113"><a name="zh-cn_topic_0000001666458629_p637754013113"></a><a name="zh-cn_topic_0000001666458629_p637754013113"></a>8～2048</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row10727151734917"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p177273171495"><a name="zh-cn_topic_0000001666458629_p177273171495"></a><a name="zh-cn_topic_0000001666458629_p177273171495"></a>uwal_async_append_switch</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p16727181734910"><a name="zh-cn_topic_0000001666458629_p16727181734910"></a><a name="zh-cn_topic_0000001666458629_p16727181734910"></a>布尔型</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p197271417124919"><a name="zh-cn_topic_0000001666458629_p197271417124919"></a><a name="zh-cn_topic_0000001666458629_p197271417124919"></a>UWAL使用同步写还是异步写。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0000001666458629_ul3411546175514"></a><a name="zh-cn_topic_0000001666458629_ul3411546175514"></a><ul id="zh-cn_topic_0000001666458629_ul3411546175514"><li>true，表示使用异步写。</li><li>false，表示使用同步写。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row152985345311"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p92987341734"><a name="zh-cn_topic_0000001666458629_p92987341734"></a><a name="zh-cn_topic_0000001666458629_p92987341734"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p17299143412311"><a name="zh-cn_topic_0000001666458629_p17299143412311"></a><a name="zh-cn_topic_0000001666458629_p17299143412311"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p1529919348319"><a name="zh-cn_topic_0000001666458629_p1529919348319"></a><a name="zh-cn_topic_0000001666458629_p1529919348319"></a>当前连接请求当中，所使用的客户端名称。</p>
</td>
<td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p1529911344310"><a name="zh-cn_topic_0000001666458629_p1529911344310"></a><a name="zh-cn_topic_0000001666458629_p1529911344310"></a>任意字符串。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  uwal\_config配置参数

<a name="table88827512321"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001666458629_row04034268441"><th class="cellrowborder" valign="top" width="19.966082532504238%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0000001666458629_p111461143194516"><a name="zh-cn_topic_0000001666458629_p111461143194516"></a><a name="zh-cn_topic_0000001666458629_p111461143194516"></a>参数名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.430186546071225%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0000001666458629_p10146124311459"><a name="zh-cn_topic_0000001666458629_p10146124311459"></a><a name="zh-cn_topic_0000001666458629_p10146124311459"></a>参数类型</p>
</th>
<th class="cellrowborder" valign="top" width="37.79536461277557%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0000001666458629_p81461543204519"><a name="zh-cn_topic_0000001666458629_p81461543204519"></a><a name="zh-cn_topic_0000001666458629_p81461543204519"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="30.808366308648953%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0000001666458629_p4146124313457"><a name="zh-cn_topic_0000001666458629_p4146124313457"></a><a name="zh-cn_topic_0000001666458629_p4146124313457"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001666458629_row1840492611441"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p159511917154511"><a name="zh-cn_topic_0000001666458629_p159511917154511"></a><a name="zh-cn_topic_0000001666458629_p159511917154511"></a>uwal_nodeid</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p18951517184518"><a name="zh-cn_topic_0000001666458629_p18951517184518"></a><a name="zh-cn_topic_0000001666458629_p18951517184518"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p095114178458"><a name="zh-cn_topic_0000001666458629_p095114178458"></a><a name="zh-cn_topic_0000001666458629_p095114178458"></a>当前UWAL节点的ID。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p595111754512"><a name="zh-cn_topic_0000001666458629_p595111754512"></a><a name="zh-cn_topic_0000001666458629_p595111754512"></a>0～7</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row4404142620442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p69511017174510"><a name="zh-cn_topic_0000001666458629_p69511017174510"></a><a name="zh-cn_topic_0000001666458629_p69511017174510"></a>uwal_ip</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p19511617154512"><a name="zh-cn_topic_0000001666458629_p19511617154512"></a><a name="zh-cn_topic_0000001666458629_p19511617154512"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p1795101715458"><a name="zh-cn_topic_0000001666458629_p1795101715458"></a><a name="zh-cn_topic_0000001666458629_p1795101715458"></a>UWAL侦听地址，调用UwalInit()函数时传入的参数名。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p795111794512"><a name="zh-cn_topic_0000001666458629_p795111794512"></a><a name="zh-cn_topic_0000001666458629_p795111794512"></a>IPv4</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row44041726104418"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p14951161784518"><a name="zh-cn_topic_0000001666458629_p14951161784518"></a><a name="zh-cn_topic_0000001666458629_p14951161784518"></a>uwal_port</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p20951317134520"><a name="zh-cn_topic_0000001666458629_p20951317134520"></a><a name="zh-cn_topic_0000001666458629_p20951317134520"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p895117171458"><a name="zh-cn_topic_0000001666458629_p895117171458"></a><a name="zh-cn_topic_0000001666458629_p895117171458"></a>UWAL侦听端口，调用UwalInit()函数时传入的参数名。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p119516171453"><a name="zh-cn_topic_0000001666458629_p119516171453"></a><a name="zh-cn_topic_0000001666458629_p119516171453"></a>9000～65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row14404182611442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p8951161719452"><a name="zh-cn_topic_0000001666458629_p8951161719452"></a><a name="zh-cn_topic_0000001666458629_p8951161719452"></a>uwal_protocol</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p149511317134514"><a name="zh-cn_topic_0000001666458629_p149511317134514"></a><a name="zh-cn_topic_0000001666458629_p149511317134514"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p695113171452"><a name="zh-cn_topic_0000001666458629_p695113171452"></a><a name="zh-cn_topic_0000001666458629_p695113171452"></a>当前节点连接类型，调用UwalInit()函数时传入的参数名，可选。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0000001666458629_ul795119174457"></a><a name="zh-cn_topic_0000001666458629_ul795119174457"></a><ul id="zh-cn_topic_0000001666458629_ul795119174457"><li>tcp</li><li>rdma</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row7404142611449"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p59524178454"><a name="zh-cn_topic_0000001666458629_p59524178454"></a><a name="zh-cn_topic_0000001666458629_p59524178454"></a>cpu_bind_switch</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p139521917124511"><a name="zh-cn_topic_0000001666458629_p139521917124511"></a><a name="zh-cn_topic_0000001666458629_p139521917124511"></a>字符串</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p995281715454"><a name="zh-cn_topic_0000001666458629_p995281715454"></a><a name="zh-cn_topic_0000001666458629_p995281715454"></a>UWAL核心线程绑核开关，可选。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0000001666458629_ul495219179451"></a><a name="zh-cn_topic_0000001666458629_ul495219179451"></a><ul id="zh-cn_topic_0000001666458629_ul495219179451"><li>true，表示开启绑核。</li><li>false，表示关闭绑核。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row19404926124410"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p1695231715458"><a name="zh-cn_topic_0000001666458629_p1695231715458"></a><a name="zh-cn_topic_0000001666458629_p1695231715458"></a>cpu_bind_start</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p1952317184512"><a name="zh-cn_topic_0000001666458629_p1952317184512"></a><a name="zh-cn_topic_0000001666458629_p1952317184512"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p199521217134513"><a name="zh-cn_topic_0000001666458629_p199521217134513"></a><a name="zh-cn_topic_0000001666458629_p199521217134513"></a>UWAL绑核CPU起始编号，可选。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p49528172459"><a name="zh-cn_topic_0000001666458629_p49528172459"></a><a name="zh-cn_topic_0000001666458629_p49528172459"></a>0～1024</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666458629_row204058264440"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001666458629_p4952717194510"><a name="zh-cn_topic_0000001666458629_p4952717194510"></a><a name="zh-cn_topic_0000001666458629_p4952717194510"></a>cpu_bind_num</p>
</td>
<td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001666458629_p1095211714511"><a name="zh-cn_topic_0000001666458629_p1095211714511"></a><a name="zh-cn_topic_0000001666458629_p1095211714511"></a>整型</p>
</td>
<td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001666458629_p89529171458"><a name="zh-cn_topic_0000001666458629_p89529171458"></a><a name="zh-cn_topic_0000001666458629_p89529171458"></a>UWAL绑核CPU数量，可选。</p>
</td>
<td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001666458629_p1795231715454"><a name="zh-cn_topic_0000001666458629_p1795231715454"></a><a name="zh-cn_topic_0000001666458629_p1795231715454"></a>2～16</p>
</td>
</tr>
</tbody>
</table>

