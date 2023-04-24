# 连接数据库<a name="ZH-CN_TOPIC_0289900896"></a>

在创建数据库连接之后，才能使用它来执行SQL语句操作数据。

## 函数原型<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_s78385b36d75447f68647a4fa4e18e4eb"></a>

JDBC提供了三个方法，用于创建数据库连接。

-   DriverManager.getConnection\(String url\);
-   DriverManager.getConnection\(String url, Properties info\);
-   DriverManager.getConnection\(String url, String user, String password\);

## 参数<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_sd1d6ca3f8a4345d78889ae70e3f20498"></a>

**表 1**  数据库连接参数

<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_tfcd5d7b17d27423d9d3b648da394ac52"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_r13c3173c830e468eb39e6aa804dfed59"><th class="cellrowborder" valign="top" width="13%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a5501243843d34369bb879eed773000ae"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a5501243843d34369bb879eed773000ae"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a5501243843d34369bb879eed773000ae"></a><b>参数</b></p>
</th>
<th class="cellrowborder" valign="top" width="87%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a2939f7c5b53e49479763c806734c4f93"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a2939f7c5b53e49479763c806734c4f93"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a2939f7c5b53e49479763c806734c4f93"></a><b>描述</b></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_re1e62c9744ec489884f418b7f28dafe3"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a89d7b3d8fd624d06b353a9947f7905fe"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a89d7b3d8fd624d06b353a9947f7905fe"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a89d7b3d8fd624d06b353a9947f7905fe"></a>url</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_aa712d56d1c1b48c7818432cfaf686c60"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_aa712d56d1c1b48c7818432cfaf686c60"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_aa712d56d1c1b48c7818432cfaf686c60"></a>以opengauss-jdbc-X.X.X.jar为例，opengauss-jdbc-X.X.X.jar的数据库连接描述符格式如下</p>
<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ud24eb001d2c147738618d53304180b18"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ud24eb001d2c147738618d53304180b18"></a>
    <pre>
    <ul id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ud24eb001d2c147738618d53304180b18"><li>jdbc:opengauss:database</li><li>jdbc:opengauss://host/database</li><li>jdbc:opengauss://host:port/database</li><li>jdbc:opengauss://host:port/database?param1=value1&amp;param2=value2</li><li>jdbc:opengauss://host1:port1,host2:port2/database?param1=value1&amp;param2=value2</li></ul></pre>
<div class="note" id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_na32bb62c928d4a4a96b51b226ee5631b"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_na32bb62c928d4a4a96b51b226ee5631b"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_na32bb62c928d4a4a96b51b226ee5631b"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_u37354cd4fb1547e3973b70859e9fe729"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_u37354cd4fb1547e3973b70859e9fe729"></a><ul id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_u37354cd4fb1547e3973b70859e9fe729"><li>database为要连接的数据库名称。</li><li>host为数据库服务器名称或IP地址。<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_p461072082618"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_p461072082618"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_p461072082618"></a>连接<span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span>的机器与<span id="text155491349162212"><a name="text155491349162212"></a><a name="text155491349162212"></a>openGauss</span>不在同一网段时，host指定的IP地址应为Manager界面上所设的coo.cooListenIp2（应用访问IP）的取值。</p>
<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_p1441610315219"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_p1441610315219"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_p1441610315219"></a>由于安全原因，<span id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text924214328594"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text924214328594"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text924214328594"></a>数据库主节点</span>禁止<span id="text1737921814568"><a name="text1737921814568"></a><a name="text1737921814568"></a>openGauss</span>内部其他节点无认证接入。如果要在<span id="text1446817493564"><a name="text1446817493564"></a><a name="text1446817493564"></a>openGauss</span>内部访问<span id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text6112765112"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text6112765112"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text6112765112"></a>数据库主节点</span>，请将JDBC程序部署在<span id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text414820885115"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text414820885115"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_text414820885115"></a>数据库主节点</span>所在机器，host使用“127.0.0.1”。否则可能会出现“FATAL: Forbid remote connection with trust method!”错误。</p>
<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_p572510297236"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_p572510297236"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_p572510297236"></a>建议业务系统单独部署在<span id="text9825195718567"><a name="text9825195718567"></a><a name="text9825195718567"></a>openGauss</span>外部，否则可能会影响数据库运行性能。</p>
<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p15116145917295"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p15116145917295"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p15116145917295"></a>缺省情况下，连接服务器为localhost。</p>
</li><li>port为数据库服务器端口。<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a0f37847b6f9c44ebacd95d8a7d5e1626"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a0f37847b6f9c44ebacd95d8a7d5e1626"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a0f37847b6f9c44ebacd95d8a7d5e1626"></a>缺省情况下，会尝试连接到5432端口的database。</p>
</li><li>param为参数名称，即数据库连接属性。<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p11846133317341"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p11846133317341"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p11846133317341"></a>参数可以配置在URL中，以“?”开始配置，以“=”给参数赋值，以“&amp;”作为不同参数的间隔。也可以采用info对象的属性方式进行配置，详细示例会在本节给出。</p>
</li><li>value为参数值，即数据库连接属性值。</li><li>连接时需配置connectTimeout、socketTimeout，如果未配置，默认为0，即不会超时。在DN与客户端出现网络故障时，客户端一直未收到DN侧ACK确认报文，会启动超时重传机制，不断的进行重传。当超时时间达到系统默认的600s后才会报超时错误，这也就会导致RTO时间很高。</li></ul>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ref8dd9fc7790450ca15b4f30b96a0a18"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a1c692d258574463c90cbadc432be1c2e"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a1c692d258574463c90cbadc432be1c2e"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a1c692d258574463c90cbadc432be1c2e"></a>info</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_aade6bbcac4be4b7cacc238da5173b93d"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_aade6bbcac4be4b7cacc238da5173b93d"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_aade6bbcac4be4b7cacc238da5173b93d"></a>数据库连接属性（所有属性大小写敏感）。常用的属性如下：</p>
<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_u8546689def034a5a8257c477a574f39e"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_u8546689def034a5a8257c477a574f39e"></a><ul id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_u8546689def034a5a8257c477a574f39e"><li>PGDBNAME：String类型。表示数据库名称。（URL中无需配置该参数，自动从URL中解析）</li><li>PGHOST：String类型。主机IP地址。详细示例见下。</li><li>PGPORT：Integer类型。主机端口号。详细示例见下。</li><li>user：String类型。表示创建连接的数据库用户。</li><li>password：String类型。表示数据库用户的密码。</li><li>enable_ce：String类型。其中enable_ce=1表示JDBC支持密态等值查询。</li><li>loggerLevel：String类型。目前支持4种级别：OFF、INFO、DEBUG、TRACE。设置为OFF关闭日志，设置为INFO、DEBUG和TRACE记录的日志信息详细程度不同。默认值为INFO。该参数设置值不区分大小写。</li><li>loggerFile：String类型。Logger输出的文件名。需要显示指定日志文件名，若未指定目录则生成在客户端运行程序目录。</li><li>allowEncodingChanges：Boolean类型。设置该参数值为“true”进行字符集类型更改，配合characterEncoding=CHARSET设置字符集，二者使用“&amp;”分隔。</li><li>currentSchema：String类型。在search-path中指定要设置的schema。</li><li>hostRecheckSeconds：Integer类型。JDBC尝试连接主机后会保存主机状态：连接成功或连接失败。在hostRecheckSeconds时间内保持可信，超过则状态失效。缺省值是10秒。</li><li>ssl：Boolean类型。以SSL方式连接。<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p175682912210"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p175682912210"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p175682912210"></a>ssl=true可支持NonValidatingFactory通道和使用证书的方式：</p>
<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p1075620296222"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p1075620296222"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p1075620296222"></a>1、NonValidatingFactory通道需要配置用户名和密码，同时将SSL设置为true。</p>
<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p9756122919225"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p9756122919225"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_p9756122919225"></a>2、配置客户端证书、密钥、根证书，将SSL设置为true。</p>
</li><li>sslmode：String类型。SSL认证方式。取值范围为：disable、allow、prefer、require、verify-ca、verify-full。<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_ul460013619316"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_ul460013619316"></a><ul id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_ul460013619316"><li>disable：不使用SSL安全连接。</li><li>allow：如果数据库服务器要求使用，则可以使用SSL安全加密连接，但不验证数据库服务器的真实性。</li><li>prefer：如果数据库支持，那么首选使用SSL连接，但不验证数据库服务器的真实性。</li><li>require：只尝试SSL连接，如果存在CA文件，则应设置成verify-ca的方式验证。</li><li>verify-ca：只尝试SSL连接，并且验证服务器是否具有由可信任的证书机构签发的证书。</li><li>verify-full：只尝试SSL连接，并且验证服务器是否具有由可信任的证书机构签发的证书，以及验证服务器主机名是否与证书中的一致。</li></ul>
</li><li>sslcert：String类型。提供证书文件的完整路径。客户端和服务端证书的类型为End Entity。</li><li>sslkey：String类型。提供密钥文件的完整路径。使用时将客户端证书转换为DER格式：<pre class="screen" id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_screen65436268111"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_screen65436268111"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_screen65436268111"></a>openssl pkcs8 -topk8 -outform DER -in client.key -out client.key.pk8 -nocrypt</pre>
</li><li>sslrootcert：String类型。SSL根证书的文件名。根证书的类型为CA。</li><li>sslpassword：String类型。提供给ConsoleCallbackHandler使用。</li><li>sslpasswordcallback：String类型。SSL密码提供者的类名。缺省值：org.opengauss.ssl.jdbc4.LibPQFactory.ConsoleCallbackHandler。</li><li>sslfactory：String类型。提供的值是SSLSocketFactory在建立SSL连接时用的类名。</li><li>sslfactoryarg：String类型。此值是上面提供的sslfactory类的构造函数的可选参数（不推荐使用）。</li><li>sslhostnameverifier：String类型。主机名验证程序的类名。接口实现javax.net.ssl.HostnameVerifier，默认使用org.opengauss.ssl.PGjdbcHostnameVerifier。</li><li>loginTimeout：Integer类型。指建立数据库连接的等待时间。超时时间单位为秒。</li><li>connectTimeout：Integer类型。用于连接服务器操作的超时值。如果连接到服务器花费的时间超过此值，则连接断开。超时时间单位为秒，值为0时表示已禁用，timeout不超时。</li><li>socketTimeoutInConnecting：Integer类型。用于socket读取操作的超时值。在建立PgConnection到可以执行sql语句之前的socket读操作超时时间受该参数影响。如果从服务器读取所花费的时间超过此值，则连接关闭。超时时间单位为秒，值为0时表示已禁用，timeout不超时。默认值为5。</li><li>socketTimeout：Integer类型。用于socket读取操作的超时值。当连接可以执行sql语句之后，socket读操作超时时间受该参数影响。如果从服务器读取所花费的时间超过此值，则连接关闭。超时时间单位为秒，值为0时表示已禁用，timeout不超时。默认值为0。</li><li>cancelSignalTimeout：Integer类型。发送取消消息本身可能会阻塞，此属性控制用于取消命令的“connect超时”和“socket超时”。超时时间单位为秒，默认值为10秒。</li><li>tcpKeepAlive：Boolean类型。启用或禁用TCP保活探测功能。默认为false。</li><li>logUnclosedConnections：Boolean类型。客户端可能由于未调用Connection对象的close()方法而泄漏Connection对象。最终这些对象将被垃圾回收，并且调用finalize()方法。如果调用者自己忽略了此操作，该方法将关闭Connection。</li><li>assumeMinServerVersion：String类型。客户端会发送请求进行float精度设置。该参数设置要连接的服务器版本，如assumeMinServerVersion=9.0，可以在建立时减少相关包的发送。</li><li>ApplicationName：String类型。设置正在使用连接的JDBC驱动的名称。通过在数据库主节点上查询pg_stat_activity表可以看到正在连接的客户端信息，JDBC驱动名称显示在application_name列。缺省值为PostgreSQL JDBC Driver。</li><li>connectionExtraInfo：Boolean类型。表示驱动是否上报当前驱动的部署路径、进程属主用户到数据库。<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p126364543506"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p126364543506"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p126364543506"></a>取值范围：true或false，默认值为false。设置connectionExtraInfo为true，JDBC驱动会将当前驱动的部署路径、进程属主用户、url连接配置信息上报到数据库中，记录在connection_info参数里；同时可以在PG_STAT_ACTIVITY中查询到。</p>
</li><li>autosave：String类型。共有3种：“always”、 “never”、 “conservative”。如果查询失败，指定驱动程序应该执行的操作。在autosave=always模式下，JDBC驱动程序在每次查询之前设置一个保存点，并在失败时回滚到该保存点。在autosave=never模式（默认）下，无保存点。在autosave=conservative模式下，每次查询都会设置保存点，但是只会在“statement XXX无效”等情况下回滚并重试。</li><li>protocolVersion：Integer类型。连接协议版本号，目前仅支持3。注意：设置该参数时将采用md5加密方式，需要同步修改数据库的加密方式：gs_guc set -N all -I all -c "password_encryption_type=1" ，重启<span id="text202804212577"><a name="text202804212577"></a><a name="text202804212577"></a>openGauss</span>生效后需要创建用md5方式加密口令的用户。同时修改pg_hba.conf，将客户端连接方式修改为md5。用新建用户进行登录（不推荐）。<div class="note" id="note9794165413612"><a name="note9794165413612"></a><a name="note9794165413612"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1479412546361"><a name="p1479412546361"></a><a name="p1479412546361"></a>MD5加密算法安全性低，存在安全风险，建议使用更安全的加密算法。</p>
</div></div>
</li><li>prepareThreshold：Integer类型。控制parse语句何时发送。默认值是5。第一次parse一个SQL比较慢，后面再parse就会比较快，因为有缓存了。如果一个会话连续多次执行同一个SQL，在达到prepareThreshold次数以上时，JDBC将不再对这个SQL发送parse命令。</li><li>preparedStatementCacheQueries：Integer类型。确定每个连接中缓存的查询数，默认情况下是256。若在prepareStatement()调用中使用超过256个不同的查询，则最近最少使用的查询缓存将被丢弃。0表示禁用缓存。</li><li>preparedStatementCacheSizeMiB：Integer类型。确定每个连接可缓存的最大值（以兆字节为单位），默认情况下是5。若缓存了超过5MB的查询，则最近最少使用的查询缓存将被丢弃。0表示禁用缓存。</li><li>databaseMetadataCacheFields：Integer类型。默认值是65536。指定每个连接可缓存的最大值。“0”表示禁用缓存。</li><li>databaseMetadataCacheFieldsMiB：Integer类型。默认值是5。每个连接可缓存的最大值，单位是MB。“0”表示禁用缓存。</li><li>stringtype：String类型，可选字段为：false、 "unspecified"、 "varchar"。设置通过setString()方法使用的PreparedStatement参数的类型，如果stringtype设置为VARCHAR（默认值），则这些参数将作为varchar参数发送给服务器。若stringtype设置为unspecified，则参数将作为untyped值发送到服务器，服务器将尝试推断适当的类型。</li><li>batchMode：Boolean类型。用于确定是否使用batch模式连接。默认值为on，表示开启batch模式。</li><li>fetchsize：Integer类型。用于设置数据库连接所创建statement的默认fetchsize。默认值为0，表示一次获取所有结果。与defaultRowFetchSize等价。</li><li>reWriteBatchedInserts：Boolean类型。批量导入时，该参数设置为on，可将N条插入语句合并为一条：insert into TABLE_NAME values(values1, ..., valuesN), ..., (values1, ..., valuesN);使用该参数时，需设置batchMode=off。</li><li>unknownLength：Integer类型，默认为Integer.MAX_VALUE。某些postgresql类型（例如TEXT）没有明确定义的长度，当通过ResultSetMetaData.getColumnDisplaySize和ResultSetMetaData.getPrecision等函数返回关于这些类型的数据时，此参数指定未知长度类型的长度。</li><li>defaultRowFetchSize：Integer类型。确定一次fetch在ResultSet中读取的行数。限制每次访问数据库时读取的行数可以避免不必要的内存消耗，从而避免OutOfMemoryException。缺省值是0，这意味着ResultSet中将一次获取所有行。没有负数。</li><li>binaryTransfer：Boolean类型。使用二进制格式发送和接收数据，默认值为“false”。</li><li>binaryTransferEnable：String类型。启用二进制传输的类型列表，以逗号分隔。OID编号和名称二选一，例如binaryTransferEnable=Integer4_ARRAY,Integer8_ARRAY。<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p3778145719527"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p3778145719527"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p3778145719527"></a>比如：OID名称为BLOB，编号为88，可以如下配置：</p>
<p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p12336192714527"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p12336192714527"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_p12336192714527"></a>binaryTransferEnable=BLOB 或 binaryTransferEnable=88</p>
</li><li>binaryTransferDisEnable：String类型。禁用二进制传输的类型列表，以逗号分隔。OID编号和名称二选一。覆盖binaryTransferEnable的设置。</li><li>blobMode：String类型。用于设置setBinaryStream方法为不同类型的数据赋值，设置为on时表示为blob类型数据赋值，设置为off时表示为bytea类型数据赋值，默认为on。</li><li>socketFactory：String类型。用于创建与服务器socket连接的类的名称。该类必须实现了接口“javax.net.SocketFactory”，并定义无参或单String参数的构造函数。</li><li>socketFactoryArg：String类型。此值是上面提供的socketFactory类的构造函数的可选参数，不推荐使用。</li><li>receiveBufferSize：Integer类型。该值用于设置连接流上的SO_RCVBUF。</li><li>sendBufferSize：Integer类型。该值用于设置连接流上的SO_SNDBUF。</li><li>preferQueryMode：String类型。共有4种：“extended”、“extendedForPrepared”、“extendedCacheEverything”和“simple”。用于指定执行查询的模式，simple模式会excute，不parse和bind；extended模式会bind和excute；extendedForPrepared模式为prepared statement扩展使用；extendedCacheEverything模式会缓存每个statement。</li>
<li>targetServerType： String类型。该参数识别主备数据节点是通过查询URL连接串中，数据节点是否允许写操作来实现的，默认为“any”。共有四种：“any”、“master”、“slave”、“preferSlave”：<a name="ul138419315310"></a><a name="ul138419315310"></a><ul id="ul138419315310"><li>master则尝试连接到URL连接串中的主节点，如果找不到就抛出异常。</li><li>slave则尝试连接到URL连接串中的备节点，如果找不到就抛出异常。</li><li>preferSlave则尝试连接到URL连接串中的备数据节点（如果有可用的话），否则连接到主数据节点。</li><li>any则尝试连接URL连接串中的任何一个数据节点。</li></ul>
</li><li>heartbeatPeriod：是否开启对集群主节点进行心跳维护。该功能主要针对连接主备集群并且配置连接主节点的场景，当主节点宕机后，jdbc会在其备机中查找新的主机，使下次建连的时候可以快速定位到新的主机。当且仅当设置了targetServerType=master且连接串的节点数大于1，如果可以建连成功，则开启或者加入对集群主节点的心跳维护，该参数配置小于等于0时，没有心跳间隔按照不开启，或者当前连接节点不加入心跳维护，Integer类型，默认值5000，单位毫秒</li><li>masterFailureHeartbeatTimeout:在开启主节点心跳维护的场景下，当集群主节点宕机，设置对集群探寻主节点的超时阈值，在这个超时时间内还没有探测到主节点的存在，则认为集群一直没有主节点，不在对当前集群进行维护，这个时间应该包含主节点的RTO时间，Integer类型，单位：毫秒，默认值：30000</li><li>priorityServers：Integer类型。此值用于指定url上配置的前n个节点作为主集群被优先连接。默认值为null。该值为数字，大于0，且小于url上配置的DN数量。<p id="p1891713919489"><a name="p1891713919489"></a><a name="p1891713919489"></a>例如：jdbc:opengauss://host1:port1,host2:port2,host3:port3,host4:port4,/database?priorityServers=2。即表示host1与host2为主集群节点，host3与host4为容灾集群节点。</p>
</li><li>forceTargetServerSlave：Boolean类型。此值用于控制是否开启强制连接备机功能，并在集群发生主备切换时，禁止已存在的连接在升主备机上继续使用。默认值为false，表示不开启强制连接备机功能。true，表示开启强制连接备机功能。</li><li>loadBalanceHosts：Boolean类型。在默认模式下（禁用），默认顺序连接URL中指定的多个主机。如果启用，则使用洗牌算法从候选主机中随机选择一个主机建立连接。集中式环境下，如果使用此参数需要保证业务中没有写操作。</li>
<li>autoBalance：jdbc可以通过URL中设置多个数据库节点，实现对主备集群的访问。通过设置负载均衡算法，jdbc可以在建立连接时，依照特定规则将客户端与主备集群的连接依次建立在URL中配置的各个节点上，以此实现连接的负载均衡。默认值为"false"，此时jdbc始终与URL中配置的同一个满足建连条件的节点建立连接。连接主备集群时，使用此参数需要保证业务中没有写操作，或者与targetServerType=slave搭配，限制客户端只连接备机。目前，jdbc提供了roundrobin、priority roundrobin、leastconn、shuffle四种负载均衡模式，具体说明如下：
    <ul>
        <li>roundrobin：轮询模式，即与各候选节点轮流建立连接。取值："roundrobin"、"true"、"balance"。</li>
        <li>priority roundrobin：带优先级的轮询模式，优先对前n个候选节点做轮询建连，取值："proprity[n]"，n为非负整数。</li>
        <li>leastconn：最小连接模式，对候选节点依照各节点的有效连接数做优先级排序，优先与连接数少的节点建立连接，该方法只会统计通过当前驱动在当前集群内使用leastconn模式建立的连接。取值："leastconn"。</li>
        <li>shuffle：随机模式，即随机选择候选节点建立连接，取值："shuffle"。loadBalanceHosts设置为"true"等同于autoBalance设置为"shuffle"。</li>
    </ul>
    如果loadBalanceHosts设置为"true"的同时，autoBalance设置为以上四种负载均衡模式，优先使autoBalance生效；如果同时配置了autoBalance和targetServerType，jdbc会在满足targetServerType的前提下负载均衡；如果客户端使用多个指定了相同节点集合的URL分别通过同一驱动建立连接，jdbc会将其视为同一集群上的连接，并整体进行负载均衡。
</li>
<li>enableQuickAutoBalance：是否开启集群状态变化时，jdbc快速负载均衡功能。该功能主要针对使用连接池连接主备集群并配置负载均衡的场景。当功能开启时，jdbc会定时检测URL中配置的节点的状态，当检测到节点恢复时，jdbc会筛选集群内其他节点上的空闲连接并关闭。连接池感知到缓存连接减少后，会基于leastconn模式在新恢复节点上创建连接，使集群重新负载均衡。该功能在筛选可关闭连接时，只会筛选由当前驱动创建的当前集群内的设置了enableQuickAutoBalance="true"的连接。该功能必须与最小连接模式配合使用：设置为"true"且autoBalance设置为"leastconn"时，功能开启。
    <p>取值范围：{"true", "false"}。</p>
    <p>默认值："false"。</P></li>
<li>maxIdleTimeBeforeTerminal：jdbc触发快速负载均衡时，可保留连接的最大空闲时长。jdbc快速负载均衡功能筛选空闲连接时，会将处于idle状态并且持续时间大于等于maxIdleTimeBeforeTerminal的连接视为空闲连接，这些连接可能会被关闭。该参数只在autoBalance设置为"leastconn"且enableQuickAutoBalance设置为"true"时才生效。
    <p>单位：秒。</p>
    <P>取值范围：[0, 9223372036854775)内的整数。</p>
    <p>默认值：30。</p>
</li>
<li>minReservedConPerCluster：jdbc触发快速负载均衡时，一个集群内空闲连接的最小保留百分比。默认情况下，jdbc触发快速负载均衡时，所有被筛选出来的空闲连接都会被关闭。设置该参数可以在触发快速负载均衡时，jdbc会至少保留一个集群内空闲连接的minReservedConPerCluster%。该参数针对集群生效，如果存在多个配置了相同节点的URL都设置了该参数，则取最小值。
    <p>取值范围：[0, 100]内的整数。</P>
    <p>默认值：0。<p>
</li>
<li>minReservedConPerDatanode：jdbc触发快速负载均衡时，一个节点内空闲连接的最小保留百分比。设置该参数可以在触发快速负载均衡时，jdbc会至少保留每个节点内空闲连接的minReservedConPerDatanode%。如果URL串同时设置了minReservedConPerDatanode和minReservedConPerCluster，jdbc会保证最终筛选出来的待关闭连接同时满足两个参数。该参数针对集群生效，如果存在多个配置了相同节点的URL都设置了该参数，则取最小值。
    <p>取值范围：[0, 100]内的整数。</p>
    <p>默认值：0。</p>
</li>
</ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_r8005ff51ee3d40e184a8db722d0f18ae"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a925328f5c60948c98b489a99cbc20017"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a925328f5c60948c98b489a99cbc20017"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a925328f5c60948c98b489a99cbc20017"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a12ebd01bc95b4c2cbaf12561c10053df"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a12ebd01bc95b4c2cbaf12561c10053df"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a12ebd01bc95b4c2cbaf12561c10053df"></a>数据库用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_rc74336c5bc0640da9b968c8b953ea76d"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ad02cd653ced04960aec39fa00ed2bb40"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ad02cd653ced04960aec39fa00ed2bb40"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_ad02cd653ced04960aec39fa00ed2bb40"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="87%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a112a5bf510a14f4d95bd069bc1afc01a"><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a112a5bf510a14f4d95bd069bc1afc01a"></a><a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_a112a5bf510a14f4d95bd069bc1afc01a"></a>数据库用户的密码。</p>
</td>
</tr>
</tbody>
</table>





## 示例<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_sa87cf707a76c493997989289921f9202"></a>

```
//以下代码将获取数据库连接操作封装为一个接口，可通过给定用户名和密码来连接数据库。
public static Connection getConnect(String username, String passwd)
    {
        //驱动类。
        String driver = "org.opengauss.Driver";
        //数据库连接描述符。
        String sourceURL = "jdbc:opengauss://10.10.0.13:8000/postgres";
        Connection conn = null;
        
        try
        {
            //加载驱动。
            Class.forName(driver);
        }
        catch( Exception e )
        {
            e.printStackTrace();
            return null;
        }
        
        try
        {
             //创建连接。
            conn = DriverManager.getConnection(sourceURL, username, passwd);
            System.out.println("Connection succeed!");
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return null;
        }
        
        return conn;
    };
// 以下代码将使用Properties对象作为参数建立连接
public static Connection getConnectUseProp(String username, String passwd)
    {
        //驱动类。
        String driver = "org.opengauss.Driver";
        //数据库连接描述符。
        String sourceURL = "jdbc:opengauss://10.10.0.13:8000/postgres?";
        Connection conn = null;
        Properties info = new Properties();
        
        try
        {
            //加载驱动。
            Class.forName(driver);
        }
        catch( Exception e )
        {
            e.printStackTrace();
            return null;
        }
        
        try
        {
             info.setProperty("user", username);
             info.setProperty("password", passwd);
             //创建连接。
             conn = DriverManager.getConnection(sourceURL, info);
             System.out.println("Connection succeed!");
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return null;
        }
        
        return conn;
    };
```

