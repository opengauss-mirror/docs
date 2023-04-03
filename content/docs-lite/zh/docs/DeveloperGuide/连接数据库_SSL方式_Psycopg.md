# 连接数据库（SSL方式）<a name="ZH-CN_TOPIC_0000001127066489"></a>

用户通过psycopy2连接openGauss服务器时，可以通过开启SSL加密客户端和服务器之间的通讯。在使用SSL时，默认用户已经获取了服务端和客户端所需要的证书和私钥文件，关于证书等文件的获取请参考Openssl相关文档和命令。

1.  使用\*.ini文件（python的configparser包可以解析这种类型的配置文件）保存数据库连接的配置信息。
2.  在连接选项中添加SSL连接相关参数：sslmode，sslcert，sslkey，sslrootcert。
    1.  sslmode：可选项见[表1](#table167989176183)。
    2.  sslcert：客户端证书路径。
    3.  sslkey：客户端密钥路径。
    4.  sslrootcert：根证书路径。

3.  使用psycopg2.connect函数获得connection对象。
4.  使用connection对象创建cursor对象。

**表 1**  sslmode的可选项及其描述

<a name="table167989176183"></a>
<table><thead align="left"><tr id="row137980170181"><th class="cellrowborder" valign="top" width="19.671967196719674%" id="mcps1.2.4.1.1"><p id="p1779912176188"><a name="p1779912176188"></a><a name="p1779912176188"></a>sslmode</p>
</th>
<th class="cellrowborder" valign="top" width="27.362736273627362%" id="mcps1.2.4.1.2"><p id="p16799101711180"><a name="p16799101711180"></a><a name="p16799101711180"></a>是否会启用SSL加密</p>
</th>
<th class="cellrowborder" valign="top" width="52.96529652965296%" id="mcps1.2.4.1.3"><p id="p187991817181812"><a name="p187991817181812"></a><a name="p187991817181812"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row979913177185"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p14799171716183"><a name="p14799171716183"></a><a name="p14799171716183"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p10799131751817"><a name="p10799131751817"></a><a name="p10799131751817"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p107991817121810"><a name="p107991817121810"></a><a name="p107991817121810"></a>不适用SSL安全连接。</p>
</td>
</tr>
<tr id="row19799181719180"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p8799131721817"><a name="p8799131721817"></a><a name="p8799131721817"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p1579961710189"><a name="p1579961710189"></a><a name="p1579961710189"></a>可能</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p879961791818"><a name="p879961791818"></a><a name="p879961791818"></a>如果数据库服务器要求使用，则可以使用SSL安全加密连接，但不验证数据库服务器的真实性。</p>
</td>
</tr>
<tr id="row19799417101810"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p1979961711181"><a name="p1979961711181"></a><a name="p1979961711181"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p37991117111814"><a name="p37991117111814"></a><a name="p37991117111814"></a>可能</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p16799101716188"><a name="p16799101716188"></a><a name="p16799101716188"></a>如果数据库支持，那么首选使用SSL连接，但不验证数据库服务器的真实性。</p>
</td>
</tr>
<tr id="row679916170181"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p6799917171819"><a name="p6799917171819"></a><a name="p6799917171819"></a>require</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p5799101761818"><a name="p5799101761818"></a><a name="p5799101761818"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p19799161751816"><a name="p19799161751816"></a><a name="p19799161751816"></a>必须使用SSL安全连接，但是只做了数据加密，而并不验证数据库服务器的真实性。</p>
</td>
</tr>
<tr id="row197990172186"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p379919177185"><a name="p379919177185"></a><a name="p379919177185"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p7799201712189"><a name="p7799201712189"></a><a name="p7799201712189"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p1679911711183"><a name="p1679911711183"></a><a name="p1679911711183"></a>必须使用SSL安全连接。</p>
</td>
</tr>
<tr id="row157991617111810"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p107991717161817"><a name="p107991717161817"></a><a name="p107991717161817"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p679981717180"><a name="p679981717180"></a><a name="p679981717180"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p17799317131814"><a name="p17799317131814"></a><a name="p17799317131814"></a>必须使用SSL安全连接，目前<span id="text159163191612"><a name="text159163191612"></a><a name="text159163191612"></a>openGauss</span>暂不支持。</p>
</td>
</tr>
</tbody>
</table>

