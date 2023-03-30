# 用SSL进行安全的TCP/IP连接<a name="ZH-CN_TOPIC_0289900924"></a>

## 背景信息<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_section1957281971410"></a>

openGauss支持SSL标准协议（TLS 1.2），SSL协议是安全性更高的协议标准，它们加入了数字签名和数字证书来实现客户端和服务器的双向身份验证，保证了通信双方更加安全的数据传输。

## 前提条件<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s2d0511630ed840d180c92fa6bdecb54b"></a>

从CA认证中心申请到正式的服务器、客户端的证书和密钥。（假设服务器的私钥为server.key，证书为server.crt，客户端的私钥为client.key，证书为client.crt，CA根证书名称为cacert.pem。）

## 注意事项<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s014a1b1bc72240bb9bbbad5e064bf6d3"></a>

-   当用户远程连接到数据库主节点时，需要使用sha256的认证方式。
-   当内部服务器之间连接时，需要使用trust的认证方式，支持IP白名单认证。

## 操作步骤<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s559f387461c440218ff2b33983a69004"></a>

openGauss在数据库部署完成后，默认已开启SSL认证模式。服务器端证书，私钥以及根证书已经默认配置完成。用户需要配置客户端的相关参数。

配置SSL认证相关的数字证书参数，具体要求请参见[表1](#zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_table56811076112938)。 

-   配置客户端参数。

    已从CA认证中心申请到客户端默认证书，私钥，根证书以及私钥密码加密文件。假设证书、私钥和根证书都放在“/home/omm”目录。

    双向认证需配置如下参数：

    ```
    export PGSSLCERT="/home/omm/client.crt"
    export PGSSLKEY="/home/omm/client.key"
    export PGSSLMODE="verify-ca"
    export PGSSLROOTCERT="/home/omm/cacert.pem"
    ```

    单向认证需要配置如下参数：

    ```
    export PGSSLMODE="verify-ca"
    export PGSSLROOTCERT="/home/omm/cacert.pem"
    ```

-   修改客户端密钥的权限。

    客户端根证书，密钥，证书以及密钥密码加密文件的权限，需保证权限为600。如果权限不满足要求，则客户端无法以SSL连接到openGauss。

    ```
    chmod 600 client.key
    chmod 600 client.crt
    chmod 600 client.key.cipher
    chmod 600 client.key.rand
    chmod 600 cacert.pem
    ```


>![](public_sys-resources/icon-notice.gif) **须知：** 
>从安全性考虑，建议使用双向认证方式。
>配置客户端环境变量，必须包含文件的绝对路径。

**表 1**  认证方式

<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_table56811076112938"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_row57505105112938"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p27401952112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p27401952112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p27401952112938"></a>认证方式</p>
</th>
<th class="cellrowborder" valign="top" width="26.912691269126913%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p4965635112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p4965635112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p4965635112938"></a>含义</p>
</th>
<th class="cellrowborder" valign="top" width="33.73337333733373%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p17189474112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p17189474112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p17189474112938"></a>配置客户端环境变量</p>
</th>
<th class="cellrowborder" valign="top" width="25.032503250325032%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p1365221916913"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p1365221916913"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p1365221916913"></a>维护建议</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_row50170168112938"><td class="cellrowborder" valign="top" width="14.321432143214322%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p37251814112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p37251814112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p37251814112938"></a>双向认证（推荐）</p>
</td>
<td class="cellrowborder" valign="top" width="26.912691269126913%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p64606997112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p64606997112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p64606997112938"></a>客户端验证服务器证书的有效性，同时服务器端也要验证客户端证书的有效性，只有认证成功，连接才能建立。</p>
</td>
<td class="cellrowborder" valign="top" width="33.73337333733373%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p33178696112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p33178696112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p33178696112938"></a>设置如下环境变量：</p>
<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ul30172812112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ul30172812112938"></a><ul id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ul30172812112938"><li>PGSSLCERT</li><li>PGSSLKEY</li><li>PGSSLROOTCERT</li><li>PGSSLMODE</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25.032503250325032%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p33366049163212"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p33366049163212"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p33366049163212"></a>该方式应用于安全性要求较高的场景。使用此方式时，建议设置客户端的PGSSLMODE变量为verify-ca。确保了网络数据的安全性。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_row39901290112938"><td class="cellrowborder" valign="top" width="14.321432143214322%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p10779087112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p10779087112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p10779087112938"></a>单向认证</p>
</td>
<td class="cellrowborder" valign="top" width="26.912691269126913%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p690877112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p690877112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p690877112938"></a>客户端只验证服务器证书的有效性，而服务器端不验证客户端证书的有效性。服务器加载证书信息并发送给客户端，客户端使用根证书来验证服务器端证书的有效性。</p>
</td>
<td class="cellrowborder" valign="top" width="33.73337333733373%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p3537301112938"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p3537301112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p3537301112938"></a>设置如下环境变量：</p>
<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ul31835712112938"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ul31835712112938"></a><ul id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ul31835712112938"><li>PGSSLROOTCERT</li><li>PGSSLMODE</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25.032503250325032%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p37934227163252"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p37934227163252"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_p37934227163252"></a>为防止基于TCP链接的欺骗，建议使用SSL证书认证功能。除配置客户端根证书外，建议客户端使用PGSSLMODE变量为verify-ca方式连接。</p>
</td>
</tr>
</tbody>
</table>

## 相关参考<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_sf0c701b38d03417b8c969d148cd70223"></a>

在服务器端的postgresql.conf文件中配置相关参数，详细信息请参见[表2](#zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_tccd28484be8c47678b529d6ccd34d1fd)。

**表 2**  服务器参数

<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_tccd28484be8c47678b529d6ccd34d1fd"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_rfc38f1e01b984cbdb2d8a1532a8a03fc"><th class="cellrowborder" valign="top" width="17.5017501750175%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2b5105ab19e545cc8c7534a46382e95e"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2b5105ab19e545cc8c7534a46382e95e"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2b5105ab19e545cc8c7534a46382e95e"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="43.90439043904391%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a460f7f3f641245cebc4d5df9adeb49f4"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a460f7f3f641245cebc4d5df9adeb49f4"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a460f7f3f641245cebc4d5df9adeb49f4"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="38.59385938593859%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab74794d561694cd093aa8fece826e491"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab74794d561694cd093aa8fece826e491"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab74794d561694cd093aa8fece826e491"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ra7cfeb3d3640465baa613b12eed714b8"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af91f42c98f7d427cbd1d84a4dc3306e6"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af91f42c98f7d427cbd1d84a4dc3306e6"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af91f42c98f7d427cbd1d84a4dc3306e6"></a>ssl</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa3b7ea6149674f189cc4f22b92f8a27b"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa3b7ea6149674f189cc4f22b92f8a27b"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa3b7ea6149674f189cc4f22b92f8a27b"></a>表示是否启动SSL功能。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ub29da9afdd534c639acc4b4da9872430"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ub29da9afdd534c639acc4b4da9872430"></a><ul id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ub29da9afdd534c639acc4b4da9872430"><li>on：开启SSL功能。</li><li>off：关闭SSL功能。</li></ul>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a12f6e50081174f3484f1b92f3a022b55"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a12f6e50081174f3484f1b92f3a022b55"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a12f6e50081174f3484f1b92f3a022b55"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a98021df22bf344a9bdfc74132a83f03a"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a98021df22bf344a9bdfc74132a83f03a"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a98021df22bf344a9bdfc74132a83f03a"></a>默认值：</strong>on</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row1718919547"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p147198175416"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p147198175416"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p147198175416"></a>require_ssl</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107191816542"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107191816542"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107191816542"></a>设置服务器端是否强制要求SSL连接。该参数只有当参数ssl为on时才有效。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_ul9729101110562"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_ul9729101110562"></a><ul id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_ul9729101110562"><li>on：服务器端强制要求SSL连接。</li><li>off：服务器端对是否通过SSL连接不作强制要求。</li></ul>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p27375114565"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p27375114565"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p27375114565"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_b13740311145611"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_b13740311145611"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_b13740311145611"></a>默认值：</strong>off</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_rf42bf8261c33449d81f47597005cc921"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab54fc74b77a947758ad07edafe3242c6"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab54fc74b77a947758ad07edafe3242c6"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab54fc74b77a947758ad07edafe3242c6"></a>ssl_cert_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af7e1c5cfb5564347bf83b9fe7c30ce98"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af7e1c5cfb5564347bf83b9fe7c30ce98"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af7e1c5cfb5564347bf83b9fe7c30ce98"></a>指定服务器证书文件，包含服务器端的公钥。服务器证书用以表明服务器身份的合法性，公钥将发送给对端用来对数据进行加密。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac39b64f03d7b4436bbd40702d7702f23"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac39b64f03d7b4436bbd40702d7702f23"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac39b64f03d7b4436bbd40702d7702f23"></a>请以实际的证书名为准，其相对路径是相对于数据目录的。</p>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a664d0b1aef30486984fefff03da81069"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a664d0b1aef30486984fefff03da81069"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a664d0b1aef30486984fefff03da81069"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a26a9debdb76c4f9f868e2300d4c754ab"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a26a9debdb76c4f9f868e2300d4c754ab"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a26a9debdb76c4f9f868e2300d4c754ab"></a>默认值</strong>：server.crt</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r363a401628b24282abc3f1cdf73e8597"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a9b5c46beb9eb44e9aa256f3973f2d750"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a9b5c46beb9eb44e9aa256f3973f2d750"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a9b5c46beb9eb44e9aa256f3973f2d750"></a>ssl_key_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac598d3d36b3941baae002ea7f2f451c1"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac598d3d36b3941baae002ea7f2f451c1"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac598d3d36b3941baae002ea7f2f451c1"></a>指定服务器私钥文件，用以对公钥加密的数据进行解密。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_afb7486cbf3084019a8ffc19bd84a04a7"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_afb7486cbf3084019a8ffc19bd84a04a7"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_afb7486cbf3084019a8ffc19bd84a04a7"></a>请以实际的服务器私钥名称为准，其相对路径是相对于数据目录的。</p>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a380bb8ec22cd4a0aab77a39e0812e50c"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a380bb8ec22cd4a0aab77a39e0812e50c"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a380bb8ec22cd4a0aab77a39e0812e50c"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c2fccd4f6584f2884d7cdca626cabb0"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c2fccd4f6584f2884d7cdca626cabb0"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c2fccd4f6584f2884d7cdca626cabb0"></a>默认值</strong>：server.key</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r74a3af8366084457820934fb79b845a2"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c791fbe6c1c405f9c783ae7a14d6e11"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c791fbe6c1c405f9c783ae7a14d6e11"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c791fbe6c1c405f9c783ae7a14d6e11"></a>ssl_ca_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aec40bab9d4f94190bb6b26f658aaffb2"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aec40bab9d4f94190bb6b26f658aaffb2"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aec40bab9d4f94190bb6b26f658aaffb2"></a>CA服务器的根证书。此参数可选择配置，需要验证客户端证书的合法性时才需要配置。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5abb69095bea46e38f4cf353c9ed5b15"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5abb69095bea46e38f4cf353c9ed5b15"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5abb69095bea46e38f4cf353c9ed5b15"></a>请以实际的CA服务器根证书名称为准。</p>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aae7533ffb1414f0b9315ae7ef868ef6d"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aae7533ffb1414f0b9315ae7ef868ef6d"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aae7533ffb1414f0b9315ae7ef868ef6d"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae81d4de13745472abdb9ab94760c8a42"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae81d4de13745472abdb9ab94760c8a42"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae81d4de13745472abdb9ab94760c8a42"></a>默认值</strong>：cacert.pem</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_rf5034120c8a7483d806fcadca9909168"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2ea6c96a90b74f7d8c0480f8076ad155"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2ea6c96a90b74f7d8c0480f8076ad155"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2ea6c96a90b74f7d8c0480f8076ad155"></a>ssl_crl_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae39357cb70684494beacec110d82854b"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae39357cb70684494beacec110d82854b"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae39357cb70684494beacec110d82854b"></a>证书吊销列表，如果客户端证书在该列表中，则当前客户端证书被视为无效证书。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa7442d36d7e94641b8b0586bdeee56b0"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa7442d36d7e94641b8b0586bdeee56b0"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa7442d36d7e94641b8b0586bdeee56b0"></a>请以实际的证书吊销列表名称为准。</p>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab90a25eee3f247249718b7fa80378416"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab90a25eee3f247249718b7fa80378416"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab90a25eee3f247249718b7fa80378416"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae108ba237a904d1aad6e047e01a57ea4"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae108ba237a904d1aad6e047e01a57ea4"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae108ba237a904d1aad6e047e01a57ea4"></a>默认值</strong>：空，表示没有吊销列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r15ddd719d55f46d38e3976ec89f58988"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_acde59b1470614c1f889bf18ad6da40a6"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_acde59b1470614c1f889bf18ad6da40a6"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_acde59b1470614c1f889bf18ad6da40a6"></a>ssl_ciphers</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a6632087907ee43c8a83118fb87c7792c"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a6632087907ee43c8a83118fb87c7792c"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a6632087907ee43c8a83118fb87c7792c"></a>SSL通讯使用的加密算法。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a108418129ede48d1ad382b8cc2b14501"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a108418129ede48d1ad382b8cc2b14501"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a108418129ede48d1ad382b8cc2b14501"></a>本产品支持的加密算法的详细信息请参见<a href="#zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_t34eea0830ef94be1a866f0410ba3eb07">表4</a>。</p>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae891de4194c24665b2c263c7ee653fcc"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae891de4194c24665b2c263c7ee653fcc"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ae891de4194c24665b2c263c7ee653fcc"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a3a6dddd70ef64698b7dbaa4645c614e7"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a3a6dddd70ef64698b7dbaa4645c614e7"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a3a6dddd70ef64698b7dbaa4645c614e7"></a>默认值：</strong>ALL，表示允许对端使用产品支持的所有加密算法，但不包含ADH、LOW、EXP、MD5算法。</p>
</td>
</tr>
<tr id="row16454163352512"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="p1571031184018"><a name="p1571031184018"></a><a name="p1571031184018"></a>ssl_cert_notify_time</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="p37931124011"><a name="p37931124011"></a><a name="p37931124011"></a>SSL服务器证书到期前提醒的天数。</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="p5723113402"><a name="p5723113402"></a><a name="p5723113402"></a>请按照需求配置证书过期前提醒天数。</p>
<p id="p1420821154316"><a name="p1420821154316"></a><a name="p1420821154316"></a><strong id="b1960933092618"><a name="b1960933092618"></a><a name="b1960933092618"></a>默认值：</strong>90</p>
</td>
</tr>
</tbody>
</table>

在客户端配置SSL认证相关的环境变量，详细信息请参见[表3](#zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_t1a20720af5504dc0ba3c5d0e8d1a028b)。

>![](public_sys-resources/icon-note.gif) **说明：** 
>客户端环境变量的路径以“_/home/omm_”为例，在实际操作中请使用实际路径进行替换。

**表 3**  客户端参数

<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_t1a20720af5504dc0ba3c5d0e8d1a028b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r075c7db3e29149b7935bd87da7c3f5e9"><th class="cellrowborder" valign="top" width="13.059999999999999%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aced8d9e6a1e9424c9f486cd2565a5f6b"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aced8d9e6a1e9424c9f486cd2565a5f6b"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aced8d9e6a1e9424c9f486cd2565a5f6b"></a>环境变量</p>
</th>
<th class="cellrowborder" valign="top" width="46.33%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af8aafa1cb5c2435b891d157ce1358aa3"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af8aafa1cb5c2435b891d157ce1358aa3"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af8aafa1cb5c2435b891d157ce1358aa3"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="40.61%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af868a291814e47088c551bf14923e305"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af868a291814e47088c551bf14923e305"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af868a291814e47088c551bf14923e305"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r63de0425aa9e48648eddee2052c34099"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a79f122f5e8864d49958a01e2599232e2"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a79f122f5e8864d49958a01e2599232e2"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a79f122f5e8864d49958a01e2599232e2"></a>PGSSLCERT</p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a849a7114de984baa835520125891cc4c"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a849a7114de984baa835520125891cc4c"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a849a7114de984baa835520125891cc4c"></a>指定客户端证书文件，包含客户端的公钥。客户端证书用以表明客户端身份的合法性，公钥将发送给对端用来对数据进行加密。</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aab9afb2d4ccb486584dc34925557eb5b"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aab9afb2d4ccb486584dc34925557eb5b"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aab9afb2d4ccb486584dc34925557eb5b"></a>必须包含文件的绝对路径，如：<pre class="screen" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_sd1ee55d896da429d8a382c764a33570f"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_sd1ee55d896da429d8a382c764a33570f"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_sd1ee55d896da429d8a382c764a33570f"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0f79a57644854daaa7f0df3980c60d36"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0f79a57644854daaa7f0df3980c60d36"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0f79a57644854daaa7f0df3980c60d36"></a>export PGSSLCERT='</strong><em id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a175d9cc2e30e4403a0f6963f5320c59d"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a175d9cc2e30e4403a0f6963f5320c59d"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a175d9cc2e30e4403a0f6963f5320c59d"></a>/home/<span id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text81201061813"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text81201061813"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text81201061813"></a>omm</span>/client.crt</em><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa07fe7719cf14a08942946453726693d"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa07fe7719cf14a08942946453726693d"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aa07fe7719cf14a08942946453726693d"></a>'</strong></pre>
</div>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a659d086b20fd47b4998a10ba22739753"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a659d086b20fd47b4998a10ba22739753"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a659d086b20fd47b4998a10ba22739753"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab05988be024e4d0ab963f40a2ce47abe"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab05988be024e4d0ab963f40a2ce47abe"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab05988be024e4d0ab963f40a2ce47abe"></a>默认值</strong>：空</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r9b2094fa73ea44a7bf3381223937f92d"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c015bd8e62a452ab7e647e7d56e65bf"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c015bd8e62a452ab7e647e7d56e65bf"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2c015bd8e62a452ab7e647e7d56e65bf"></a>PGSSLKEY</p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aaa8e11b80a95489c8a5ab1d3df31ca1a"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aaa8e11b80a95489c8a5ab1d3df31ca1a"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aaa8e11b80a95489c8a5ab1d3df31ca1a"></a>指定客户端私钥文件，用以对公钥加密的数据进行解密。</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a953393a0d05f4b8a8a379fc52554c838"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a953393a0d05f4b8a8a379fc52554c838"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a953393a0d05f4b8a8a379fc52554c838"></a>必须包含文件的绝对路径，如：<pre class="screen" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s65d035eba41841268050e954fe6c267d"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s65d035eba41841268050e954fe6c267d"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s65d035eba41841268050e954fe6c267d"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab3e81ef48496427eb74fb938a002005e"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab3e81ef48496427eb74fb938a002005e"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab3e81ef48496427eb74fb938a002005e"></a>export PGSSLKEY='</strong><em id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_zh-cn_topic_0058967691_i162643549168"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_zh-cn_topic_0058967691_i162643549168"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_zh-cn_topic_0058967691_i162643549168"></a>/home/<span id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text949101441812"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text949101441812"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text949101441812"></a>omm</span>/client.key</em><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5a688b42a9104dd99057216f18858d1d"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5a688b42a9104dd99057216f18858d1d"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5a688b42a9104dd99057216f18858d1d"></a>'</strong></pre>
</div>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab15b4d40daf04a32b1d42d1defd838ba"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab15b4d40daf04a32b1d42d1defd838ba"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab15b4d40daf04a32b1d42d1defd838ba"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab803f48b32da47b583c01a6447e4b868"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab803f48b32da47b583c01a6447e4b868"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab803f48b32da47b583c01a6447e4b868"></a>默认值</strong>：空</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_rb472cd1e8b42453f9a0b255b07416f14"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a54a9c62cc83c4c749125c3d9bad6e67e"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a54a9c62cc83c4c749125c3d9bad6e67e"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a54a9c62cc83c4c749125c3d9bad6e67e"></a>PGSSLMODE</p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0c97d7d4943249a79adec5801937ecb7"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0c97d7d4943249a79adec5801937ecb7"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0c97d7d4943249a79adec5801937ecb7"></a>设置是否和服务器进行SSL连接协商，以及指定SSL连接的优先级。</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aee9d6bd66fde45c2bfa2efab0cf85cee"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aee9d6bd66fde45c2bfa2efab0cf85cee"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aee9d6bd66fde45c2bfa2efab0cf85cee"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a10d47a31a1c542e2afa4193adcbf332b"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a10d47a31a1c542e2afa4193adcbf332b"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a10d47a31a1c542e2afa4193adcbf332b"></a>取值及含义：</strong></p>
<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_u5a3aa83f2351407caf0185281284d463"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_u5a3aa83f2351407caf0185281284d463"></a><ul id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_u5a3aa83f2351407caf0185281284d463"><li>disable：只尝试非SSL连接。</li><li>allow：首先尝试非SSL连接，如果连接失败，再尝试SSL连接。</li><li>prefer：首先尝试SSL连接，如果连接失败，将尝试非SSL连接。</li><li>require：只尝试SSL连接。如果存在CA文件，则按设置成verify-ca的方式验证。</li><li>verify-ca：只尝试SSL连接，并且验证服务器是否具有由可信任的证书机构签发的证书。</li><li>verify-full：只尝试SSL连接，并且验证服务器是否具有由可信任的证书机构签发的证书，以及验证服务器主机名是否与证书中的一致。</li></ul>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ad3fef165034244089c01c2d643a6ffdf"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ad3fef165034244089c01c2d643a6ffdf"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ad3fef165034244089c01c2d643a6ffdf"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2364f46f3816402a8672d4288826bda0"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2364f46f3816402a8672d4288826bda0"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a2364f46f3816402a8672d4288826bda0"></a>默认值：</strong>prefer</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_reab62f605d8b423f9ad0ce2714fe76e6"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a366d8b9fdb914a8b8e179afb9424bc5b"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a366d8b9fdb914a8b8e179afb9424bc5b"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a366d8b9fdb914a8b8e179afb9424bc5b"></a>PGSSLROOTCERT</p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a32096b73c9114ef99b7d88064548fffa"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a32096b73c9114ef99b7d88064548fffa"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a32096b73c9114ef99b7d88064548fffa"></a>指定为客户端颁发证书的根证书文件，根证书用于验证服务器证书的有效性。</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a46db14e6a0f444368d713c0a3f5b03ee"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a46db14e6a0f444368d713c0a3f5b03ee"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a46db14e6a0f444368d713c0a3f5b03ee"></a>必须包含文件的绝对路径，如：<pre class="screen" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s2d94e458c7ab47a2aaaa15d97ffcc658"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s2d94e458c7ab47a2aaaa15d97ffcc658"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s2d94e458c7ab47a2aaaa15d97ffcc658"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a3c27d775eb594e4da9c7caa99d55cc12"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a3c27d775eb594e4da9c7caa99d55cc12"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a3c27d775eb594e4da9c7caa99d55cc12"></a>export PGSSLROOTCERT='</strong><em id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af1aa145e4168496ca7de9d4182ac6b29"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af1aa145e4168496ca7de9d4182ac6b29"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af1aa145e4168496ca7de9d4182ac6b29"></a>/home<em id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_zh-cn_topic_0058967691_i253753991625"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_zh-cn_topic_0058967691_i253753991625"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_zh-cn_topic_0058967691_i253753991625"></a>/<span id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text20381917161819"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text20381917161819"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text20381917161819"></a>omm</span></em>/certca.pem</em><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_accd1cbcc2abd4f279fed59b48ff1ce34"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_accd1cbcc2abd4f279fed59b48ff1ce34"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_accd1cbcc2abd4f279fed59b48ff1ce34"></a>'</strong></pre>
</div>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a271adf4f3e1848a3ae44f427f6fb983d"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a271adf4f3e1848a3ae44f427f6fb983d"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a271adf4f3e1848a3ae44f427f6fb983d"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac89c69c0244e488d8eab5cddbb6b0269"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac89c69c0244e488d8eab5cddbb6b0269"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac89c69c0244e488d8eab5cddbb6b0269"></a>默认值：</strong>空</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r90ba7e36f5e447c29a5e6941da52c130"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aeb330e5acd614a59b7ea7742987fd0de"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aeb330e5acd614a59b7ea7742987fd0de"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aeb330e5acd614a59b7ea7742987fd0de"></a>PGSSLCRL</p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0d9a328c7578483497420c431d0fd818"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0d9a328c7578483497420c431d0fd818"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a0d9a328c7578483497420c431d0fd818"></a>指定证书吊销列表文件，用于验证服务器证书是否在废弃证书列表中，如果在，则服务器证书将会被视为无效证书。</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_abcf7b6ca0d9a47b7a15dae7cc7ce39ad"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_abcf7b6ca0d9a47b7a15dae7cc7ce39ad"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_abcf7b6ca0d9a47b7a15dae7cc7ce39ad"></a>必须包含文件的绝对路径，如：<pre class="screen" id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s819dac6238bb40ff947c71e379e48246"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s819dac6238bb40ff947c71e379e48246"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_s819dac6238bb40ff947c71e379e48246"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aff55504ecb994bd7b61f641a7470146e"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aff55504ecb994bd7b61f641a7470146e"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_aff55504ecb994bd7b61f641a7470146e"></a>export PGSSLCRL='</strong><em id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac29e84d07c1f46e4a56b7b8500c6f1f0"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac29e84d07c1f46e4a56b7b8500c6f1f0"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ac29e84d07c1f46e4a56b7b8500c6f1f0"></a>/home/<span id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text15253106131910"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text15253106131910"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_text15253106131910"></a>omm</span>/sslcrl-file.crl</em><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a6aa439c5a0a144c98e36414f8c0c4eaf"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a6aa439c5a0a144c98e36414f8c0c4eaf"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a6aa439c5a0a144c98e36414f8c0c4eaf"></a>'</strong></pre>
</div>
<p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5f56fdaa783e4a1986a457f445969fe2"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5f56fdaa783e4a1986a457f445969fe2"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a5f56fdaa783e4a1986a457f445969fe2"></a><strong id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af6ecb350e9244540a7d7fe8ad620ee90"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af6ecb350e9244540a7d7fe8ad620ee90"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_af6ecb350e9244540a7d7fe8ad620ee90"></a>默认值：</strong>空</p>
</td>
</tr>
</tbody>
</table>

服务器端参数ssl、require\_ssl与客户端参数sslmode配置组合结果如下：

<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_table8551194641117"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row12708114620112"><th class="cellrowborder" valign="top" width="10.66%" id="mcps1.1.5.1.1"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1070817460113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1070817460113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1070817460113"></a>ssl（服务器）</p>
</th>
<th class="cellrowborder" valign="top" width="14.85%" id="mcps1.1.5.1.2"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14708184681118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14708184681118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14708184681118"></a>sslmode（客户端）</p>
</th>
<th class="cellrowborder" valign="top" width="17.119999999999997%" id="mcps1.1.5.1.3"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p3709184651116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p3709184651116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p3709184651116"></a>require_ssl（服务器）</p>
</th>
<th class="cellrowborder" valign="top" width="57.37%" id="mcps1.1.5.1.4"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107096465112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107096465112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107096465112"></a>结果</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row570917468118"><td class="cellrowborder" rowspan="12" valign="top" width="10.66%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p5709124615117"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p5709124615117"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p5709124615117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1070914614118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1070914614118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1070914614118"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" width="17.119999999999997%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1870974611118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1870974611118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1870974611118"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="57.37%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2070934661119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2070934661119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2070934661119"></a>由于服务器端要求使用SSL，但客户端针对该连接禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row670910465110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p670974621115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p670974621115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p670974621115"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37091646181115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37091646181115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37091646181115"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p970944618110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p970944618110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p970944618110"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row17709164615115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10710194681119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10710194681119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10710194681119"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p12710104614113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p12710104614113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p12710104614113"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p57104469113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p57104469113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p57104469113"></a>连接经过加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row471064611115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p19710204641112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p19710204641112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p19710204641112"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p67101446141110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p67101446141110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p67101446141110"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1471074691112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1471074691112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1471074691112"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row571024619116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p17710204641110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p17710204641110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p17710204641110"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p97101746151118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p97101746151118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p97101746151118"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10710134651114"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10710134651114"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10710134651114"></a>连接经过加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row7710154611119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1671034611112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1671034611112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1671034611112"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p671004621111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p671004621111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p671004621111"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p77116463115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p77116463115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p77116463115"></a>连接经过加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row271112468115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p16711134631110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p16711134631110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p16711134631110"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p47118467112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p47118467112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p47118467112"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7711114619116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7711114619116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7711114619116"></a>连接经过加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row12711154619119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p67111846101115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p67111846101115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p67111846101115"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1871116468113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1871116468113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1871116468113"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p771113462118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p771113462118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p771113462118"></a>连接经过加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row207111946151110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p971144691118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p971144691118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p971144691118"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p16711164691114"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p16711164691114"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p16711164691114"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2711174615113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2711174615113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2711174615113"></a>连接经过加密，且验证了服务器证书。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row137110461119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p57113463117"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p57113463117"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p57113463117"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p167111546151118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p167111546151118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p167111546151118"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11711164617113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11711164617113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11711164617113"></a>连接经过加密，且验证了服务器证书。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row8711546131116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10711746141111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10711746141111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10711746141111"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p207121946161117"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p207121946161117"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p207121946161117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p9712146151118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p9712146151118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p9712146151118"></a>连接经过加密，且验证了服务器证书和主机名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row2712134621116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11712174621110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11712174621110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11712174621110"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p571214610116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p571214610116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p571214610116"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712124621118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712124621118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712124621118"></a>连接经过加密，且验证了服务器证书和主机名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row127121746101116"><td class="cellrowborder" rowspan="12" valign="top" width="10.66%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p13712154617114"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p13712154617114"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p13712154617114"></a>off</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p137121546111115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p137121546111115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p137121546111115"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" width="17.119999999999997%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p13712146161114"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p13712146161114"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p13712146161114"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="57.37%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p0712124611113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p0712124611113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p0712124611113"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row2071214651119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712646161114"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712646161114"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712646161114"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p47125460116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p47125460116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p47125460116"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712104618119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712104618119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15712104618119"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row37121446131114"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1771214612119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1771214612119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1771214612119"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1771264611119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1771264611119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1771264611119"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11712346201111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11712346201111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p11712346201111"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row10712184610112"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107131246181111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107131246181111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p107131246181111"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p177138462111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p177138462111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p177138462111"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p971374671112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p971374671112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p971374671112"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row18713846201111"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14713114618111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14713114618111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14713114618111"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p4713154611117"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p4713154611117"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p4713154611117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2071314691112"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2071314691112"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p2071314691112"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row971374615115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37131446131115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37131446131115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37131446131115"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p167135466116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p167135466116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p167135466116"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p207137465113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p207137465113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p207137465113"></a>连接未加密。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row107135467110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p197131146191113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p197131146191113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p197131146191113"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p18713846131119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p18713846131119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p18713846131119"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7713104619111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7713104619111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7713104619111"></a>由于客户端要求使用SSL，但服务器端禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row971304620110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p8713546131119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p8713546131119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p8713546131119"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p97131946201114"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p97131946201114"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p97131946201114"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37131746161113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37131746161113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37131746161113"></a>由于客户端要求使用SSL，但服务器端禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row6713104671112"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37143469110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37143469110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p37143469110"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1071454612117"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1071454612117"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p1071454612117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p671454641116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p671454641116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p671454641116"></a>由于客户端要求使用SSL，但服务器端禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row671444611117"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p177141946191116"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p177141946191116"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p177141946191116"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p3714104610115"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p3714104610115"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p3714104610115"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15714546121111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15714546121111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p15714546121111"></a>由于客户端要求使用SSL，但服务器端禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row157141046141116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7714134615113"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7714134615113"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p7714134615113"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p147142046161110"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p147142046161110"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p147142046161110"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10714124621111"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10714124621111"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p10714124621111"></a>由于客户端要求使用SSL，但服务器端禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_row107141046101114"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p17141463117"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p17141463117"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p17141463117"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p8714194691119"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p8714194691119"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p8714194691119"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14714164613118"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14714164613118"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_p14714164613118"></a>由于客户端要求使用SSL，但服务器端禁用了SSL，因此无法建立连接。</p>
</td>
</tr>
</tbody>
</table>

SSL传输支持一系列不同强度的加密和认证算法。用户可以通过修改postgresql.conf中的ssl\_ciphers参数指定数据库服务器使用的加密算法。目前本产品SSL支持的加密算法如[表4](#zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_t34eea0830ef94be1a866f0410ba3eb07)所示。

**表 4**  加密算法套件

<a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_t34eea0830ef94be1a866f0410ba3eb07"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_r247fd0c58b8a4b41a8044e4168920ac6"><th class="cellrowborder" valign="top" width="32.77327732773277%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a473eced6f3d44a2d8b8fff1d48d3d5d9"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a473eced6f3d44a2d8b8fff1d48d3d5d9"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a473eced6f3d44a2d8b8fff1d48d3d5d9"></a>OpenSSL套件名</p>
</th>
<th class="cellrowborder" valign="top" width="41.04410441044104%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a97c340deb96a4a82b48bad779dcbb0e8"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a97c340deb96a4a82b48bad779dcbb0e8"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_a97c340deb96a4a82b48bad779dcbb0e8"></a><strong id="b12434583810"><a name="b12434583810"></a><a name="b12434583810"></a>IANA套件名</strong></p>
</th>
<th class="cellrowborder" valign="top" width="26.18261826182618%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab20c75899c5e492a84106e23fc4dbe7c"><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab20c75899c5e492a84106e23fc4dbe7c"></a><a name="zh-cn_topic_0283137035_zh-cn_topic_0237121092_zh-cn_topic_0059778374_ab20c75899c5e492a84106e23fc4dbe7c"></a>安全程度</p>
</th>
</tr>
</thead>
<tbody><tr id="row1026244253619"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p8263042163614"><a name="p8263042163614"></a><a name="p8263042163614"></a>ECDHE-RSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p13263042183610"><a name="p13263042183610"></a><a name="p13263042183610"></a>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p626364293614"><a name="p626364293614"></a><a name="p626364293614"></a>HIGH</p>
</td>
</tr>
<tr id="row55322209175"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p1353382012178"><a name="p1353382012178"></a><a name="p1353382012178"></a>ECDHE-RSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p1753319203174"><a name="p1753319203174"></a><a name="p1753319203174"></a>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p5533102011717"><a name="p5533102011717"></a><a name="p5533102011717"></a>HIGH</p>
</td>
</tr>
<tr id="row126351043376"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p1863534193718"><a name="p1863534193718"></a><a name="p1863534193718"></a>ECDHE-ECDSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p1263512415375"><a name="p1263512415375"></a><a name="p1263512415375"></a>TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p106352415373"><a name="p106352415373"></a><a name="p106352415373"></a>HIGH</p>
</td>
</tr>
<tr id="row1573683751719"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p127361737131713"><a name="p127361737131713"></a><a name="p127361737131713"></a>ECDHE-ECDSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p16736123771716"><a name="p16736123771716"></a><a name="p16736123771716"></a>TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p6736837131710"><a name="p6736837131710"></a><a name="p6736837131710"></a>HIGH</p>
</td>
</tr>
<tr id="row114611361519"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p61465371520"><a name="p61465371520"></a><a name="p61465371520"></a>DHE-RSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p11469313152"><a name="p11469313152"></a><a name="p11469313152"></a>TLS_DHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p014683181519"><a name="p014683181519"></a><a name="p014683181519"></a>HIGH</p>
</td>
</tr>
<tr id="row20338194171511"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p933934110150"><a name="p933934110150"></a><a name="p933934110150"></a>DHE-RSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p233920415155"><a name="p233920415155"></a><a name="p233920415155"></a>TLS_DHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p133919412156"><a name="p133919412156"></a><a name="p133919412156"></a>HIGH</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：**
>
>-   目前只支持上表中的6种加密算法套件。
>
>-   配置参数ssl\_ciphers的默认值为ALL，表示支持上表中的所有加密算法。为保持前向兼容保留了DHE算法套件，即DHE-RSA-AES128-GCM-SHA256和DHE-RSA-AES256-GCM-SHA384，根据CVE-2002-20001漏洞披露DHE算法存在一定安全风险，非兼容场景不建议使用，可将ssl_ciphers参数配置为仅支持ECDHE类型算法套件。
>
>-   如需指定以上加密算法套件，可以设置ssl\_ciphers为上表中OpenSSL套件名称，加密算法套件之间需要使用分号分割，如在postgresql.conf设置：ssl\_ciphers='ECDHE-RSA-AES128-GCM-SHA256;ECDHE-ECDSA-AES128-GCM-SHA256'。
>
>-   SSL连接认证不仅增加了登录（创建SSL环境）及退出过程（清理SSL环境）的时间消耗，同时需要消耗额外的时间用于加解密所需传输的内容，因此对性能有一定影响。特别的，对于频繁的登录登出，短时查询等场景有较大的影响。  
>
>-   在证书有效期小于7天的时候，连接登录会在日志中产生告警提醒。  

