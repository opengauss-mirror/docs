# 重设参数<a name="ZH-CN_TOPIC_0289899927"></a>

## 背景信息<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s75c9285916664351b9c3e31f0735ea98"></a>

openGauss提供了多种修改GUC参数的方法，用户可以方便的针对数据库、用户、会话进行设置。

-   参数名称不区分大小写。
-   参数取值有整型、浮点型、字符串、布尔型和枚举型五类。
    -   布尔值可以是（on，off）、（true，false）、（yes，no）或者（1，0），且不区分大小写。
    -   枚举类型的取值是在系统表pg\_settings的enumvals字段取值定义的。

-   对于有单位的参数，在设置时请指定单位，否则将使用默认的单位。
    -   参数的默认单位在系统表pg\_settings的unit字段定义的。
    -   内存单位有：KB（千字节）、MB（兆字节）和GB（吉字节）。
    -   时间单位：ms（毫秒）、s（秒）、min（分钟）、h（小时）和d（天）。


具体参数说明请参见[dolphin-GUC参数说明](dolphin-GUC参数说明.md)。

## GUC参数设置<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_sb2763fa0003e4ff1815379339bffe994"></a>

openGauss提供了六类GUC参数，具体分类和设置方式请参考[表1](#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)：

**表 1**  GUC参数分类

<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_rae575d3ff60b407598220d90f6c4ae5a"><th class="cellrowborder" valign="top" width="15%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a565dea9ce2ca48e382eabebd159db37c"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a565dea9ce2ca48e382eabebd159db37c"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a565dea9ce2ca48e382eabebd159db37c"></a>参数类型</p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a365ac414051d47a2840b55cd29318e65"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a365ac414051d47a2840b55cd29318e65"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a365ac414051d47a2840b55cd29318e65"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_zh-cn_topic_0058967671_p503081162112"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_zh-cn_topic_0058967671_p503081162112"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_zh-cn_topic_0058967671_p503081162112"></a>设置方式</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_re5f6b00de3b144a7a1a7530013a4b50e"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ae084a76af0d7491ebaee700964f24b5d"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ae084a76af0d7491ebaee700964f24b5d"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ae084a76af0d7491ebaee700964f24b5d"></a>INTERNAL</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a93d8a625ffe5428a87f9c19f549e31e2"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a93d8a625ffe5428a87f9c19f549e31e2"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a93d8a625ffe5428a87f9c19f549e31e2"></a>固定参数，在创建数据库的时候确定，用户无法修改，只能通过show语法或者pg_settings视图进行查看。</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a780149c37e6e4388951dae1a6367ee15"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a780149c37e6e4388951dae1a6367ee15"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a780149c37e6e4388951dae1a6367ee15"></a>无</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_r985eaa99e53c429f93c88aa44c2c947e"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a266639ca72ef468f843ce78339772b89"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a266639ca72ef468f843ce78339772b89"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a266639ca72ef468f843ce78339772b89"></a>POSTMASTER</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aab34575a3f7f4f85b347778b8ecf1c8e"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aab34575a3f7f4f85b347778b8ecf1c8e"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aab34575a3f7f4f85b347778b8ecf1c8e"></a>数据库服务端参数，在数据库启动时确定，可以通过配置文件指定。</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aaec6ea74431b46e3a70851519a3cac25"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aaec6ea74431b46e3a70851519a3cac25"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aaec6ea74431b46e3a70851519a3cac25"></a>支持<a href="#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c">表2</a>中的方式二。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_r276cbf29781049ccbcde361ba70847dc"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_afd60248c975349e0b2592f5d06f8c873"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_afd60248c975349e0b2592f5d06f8c873"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_afd60248c975349e0b2592f5d06f8c873"></a>SIGHUP</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a04b338e0eee1469594337b9c4a412769"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a04b338e0eee1469594337b9c4a412769"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a04b338e0eee1469594337b9c4a412769"></a>数据库全局参数，可在数据库启动时设置或者在数据库启动后，发送指令重新加载。</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a6b219f3f7d5048bf81262aedae906b37"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a6b219f3f7d5048bf81262aedae906b37"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a6b219f3f7d5048bf81262aedae906b37"></a>支持<a href="#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c">表2</a>中的方式二。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_r57fbf12f01b646ec85a54efb4b8863f6"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a91c2db6d403f431c9130e42c5c10c2ae"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a91c2db6d403f431c9130e42c5c10c2ae"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a91c2db6d403f431c9130e42c5c10c2ae"></a>BACKEND</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_p1056143385719"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_p1056143385719"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_p1056143385719"></a>会话连接参数。在创建会话连接时指定，连接建立后无法修改。连接断掉后参数失效。内部使用参数，不推荐用户设置。</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac03326bb1ab94db3b7ee68aca3c4794d"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac03326bb1ab94db3b7ee68aca3c4794d"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac03326bb1ab94db3b7ee68aca3c4794d"></a>支持<a href="#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c">表2</a>中的方式二。</p>
<div class="note" id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ne868e43e3a8a481ba58d7eed6974d888"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ne868e43e3a8a481ba58d7eed6974d888"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ne868e43e3a8a481ba58d7eed6974d888"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_af1a3c552951f4930b64dbf14be54a33b"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_af1a3c552951f4930b64dbf14be54a33b"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_af1a3c552951f4930b64dbf14be54a33b"></a>设置该参数后，下一次建立会话连接时生效。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_rf4e77970e4774b3a9c60e4c67dd08183"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a6ed01fb56241493e85efb71d1f51f888"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a6ed01fb56241493e85efb71d1f51f888"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a6ed01fb56241493e85efb71d1f51f888"></a>SUSET</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_afea554b5226a4e6b860ba259b82ebe51"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_afea554b5226a4e6b860ba259b82ebe51"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_afea554b5226a4e6b860ba259b82ebe51"></a>数据库管理员参数。可在数据库启动时、数据库启动后或者数据库管理员通过SQL进行设置。</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a3dd0131e4d3940a781ba7c6fdfb09827"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a3dd0131e4d3940a781ba7c6fdfb09827"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a3dd0131e4d3940a781ba7c6fdfb09827"></a>支持<a href="#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c">表2</a>中由数据库管理员通过方式一设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_rf87c73c9faa44ccb956b16b0191d3e92"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8d7ddfb83a8a4bb4b206ebfe14eb52a2"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8d7ddfb83a8a4bb4b206ebfe14eb52a2"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8d7ddfb83a8a4bb4b206ebfe14eb52a2"></a>USERSET</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a85853b683e474d85a49c71b815887464"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a85853b683e474d85a49c71b815887464"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a85853b683e474d85a49c71b815887464"></a>普通用户参数。可被任何用户在任何时刻设置。</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac83063c5be174b14a717b7b4adeb6e01"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac83063c5be174b14a717b7b4adeb6e01"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac83063c5be174b14a717b7b4adeb6e01"></a>支持<a href="#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c">表2</a>中的方式一设置。</p>
</td>
</tr>
</tbody>
</table>

openGauss提供了四种方式来修改GUC参数，具体操作请参考[表2](#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c)： 

**表 2**  GUC参数设置方式

<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd897c"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_rc5ee36741afd4727ac928c5055842f62"><th class="cellrowborder" valign="top" width="16.06%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_zh-cn_topic_0058967671_p519167381778"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_zh-cn_topic_0058967671_p519167381778"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_zh-cn_topic_0058967671_p519167381778"></a>序号</p>
</th>
<th class="cellrowborder" valign="top" width="83.94%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aef170b7c444f4dd8859f597acc53a873"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aef170b7c444f4dd8859f597acc53a873"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aef170b7c444f4dd8859f597acc53a873"></a>设置方法</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_r1e3295b979654de3af72bc9ba63cc128"><td class="cellrowborder" valign="top" width="16.06%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a916d18cb80824fa185129fd545672db2"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a916d18cb80824fa185129fd545672db2"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a916d18cb80824fa185129fd545672db2"></a>方式一</p>
</td>
<td class="cellrowborder" valign="top" width="83.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a72c49c3f3d6148518c31b39d969022ed"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a72c49c3f3d6148518c31b39d969022ed"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a72c49c3f3d6148518c31b39d969022ed"></a>修改指定数据库、用户、会话级别的参数。</p>
<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_u12c53a6b00424da0bc7fff98c249db37"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_u12c53a6b00424da0bc7fff98c249db37"></a><ul id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_u12c53a6b00424da0bc7fff98c249db37"><li>设置数据库级别的参数<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s01e44d50122d4fc19888a3470fcb3d6e"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s01e44d50122d4fc19888a3470fcb3d6e"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s01e44d50122d4fc19888a3470fcb3d6e"><span id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text289912255356"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text289912255356"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text289912255356"></a>openGauss=# </span><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aeeca9e9a68fd413b9fe9d299e7bfac9a"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aeeca9e9a68fd413b9fe9d299e7bfac9a"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aeeca9e9a68fd413b9fe9d299e7bfac9a"></a>ALTER DATABASE </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac61c40d4d210427188ca8f6aaf443a10"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac61c40d4d210427188ca8f6aaf443a10"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ac61c40d4d210427188ca8f6aaf443a10"></a>dbname </em><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a68bf0f9b369545b1a199ed8165ee22b9"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a68bf0f9b369545b1a199ed8165ee22b9"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a68bf0f9b369545b1a199ed8165ee22b9"></a>SET </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a9363560924844e128adadceddfb1a159"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a9363560924844e128adadceddfb1a159"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a9363560924844e128adadceddfb1a159"></a>paraname </em><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8699136d00794ee989ad3f142400e875"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8699136d00794ee989ad3f142400e875"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8699136d00794ee989ad3f142400e875"></a>TO </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aee95a478735f42e3b6fd110de402c9b3"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aee95a478735f42e3b6fd110de402c9b3"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_aee95a478735f42e3b6fd110de402c9b3"></a>value;</em></pre>
<p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8afbfbba10a343f6b1643904efc45a9a"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8afbfbba10a343f6b1643904efc45a9a"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8afbfbba10a343f6b1643904efc45a9a"></a>在下次会话中生效。</p>
</li><li>设置用户级别的参数<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_scc4cc44331524d9aaedbccd158a59d83"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_scc4cc44331524d9aaedbccd158a59d83"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_scc4cc44331524d9aaedbccd158a59d83"><span id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text85396212353"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text85396212353"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text85396212353"></a>openGauss=# </span><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ad90797af565b4aa4a91370c1967d8227"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ad90797af565b4aa4a91370c1967d8227"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ad90797af565b4aa4a91370c1967d8227"></a>ALTER USER </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8e3e4b86978c4db7be11b304c66fa373"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8e3e4b86978c4db7be11b304c66fa373"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a8e3e4b86978c4db7be11b304c66fa373"></a>username </em><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a33c040f0d17f465bb47da8cf1f5745dd"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a33c040f0d17f465bb47da8cf1f5745dd"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a33c040f0d17f465bb47da8cf1f5745dd"></a>SET </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a946f24bd375240638166df1724c790ec"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a946f24bd375240638166df1724c790ec"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a946f24bd375240638166df1724c790ec"></a>paraname </em><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a979c6715c9a842a1a2c5627330d31903"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a979c6715c9a842a1a2c5627330d31903"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a979c6715c9a842a1a2c5627330d31903"></a>TO </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ada78baf9e2b94075b6427e6e8e508f25"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ada78baf9e2b94075b6427e6e8e508f25"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_ada78baf9e2b94075b6427e6e8e508f25"></a>value;</em></pre>
<p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a901bc61ee57540739297bb9fa5c1f78b"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a901bc61ee57540739297bb9fa5c1f78b"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a901bc61ee57540739297bb9fa5c1f78b"></a>在下次会话中生效。</p>
</li><li>设置会话级别的参数<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_sd1edd9f762e84ee9a3a2371531cdcc21"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_sd1edd9f762e84ee9a3a2371531cdcc21"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_sd1edd9f762e84ee9a3a2371531cdcc21"><span id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text1841292273511"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text1841292273511"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_text1841292273511"></a>openGauss=# </span><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a27bc12624ffa4b9185f11479e9f0d666"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a27bc12624ffa4b9185f11479e9f0d666"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a27bc12624ffa4b9185f11479e9f0d666"></a>SET </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a0386a250d602457a8e3953cc5bca4f08"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a0386a250d602457a8e3953cc5bca4f08"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a0386a250d602457a8e3953cc5bca4f08"></a>paraname </em><strong id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a4d2ab29d36e14953b355bc8d27d83f76"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a4d2ab29d36e14953b355bc8d27d83f76"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a4d2ab29d36e14953b355bc8d27d83f76"></a>TO </strong><em id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a845205e5a57344d0839a4f38e4fd8263"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a845205e5a57344d0839a4f38e4fd8263"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_a845205e5a57344d0839a4f38e4fd8263"></a>value;</em></pre>
<p id="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_af3f362f94d094913929d928fec04dc22"><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_af3f362f94d094913929d928fec04dc22"></a><a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_af3f362f94d094913929d928fec04dc22"></a>修改本次会话中的取值。退出会话后，设置将失效。</p>
<div class="note" id="note11901154534016"><a name="note11901154534016"></a><a name="note11901154534016"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p3901144514405"><a name="p3901144514405"></a><a name="p3901144514405"></a>SET设置的会话级参数优先级最高，其次是ALTER设置的，其中ALTER DATABASE设置的参数值优先级高于ALTER USER设置，这三种设置方式设置的优先级都高于gs_guc设置方式。</p>
</div></div>
</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137176_row934051919178"><td class="cellrowborder" valign="top" width="16.06%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137176_p103411519151715"><a name="zh-cn_topic_0283137176_p103411519151715"></a><a name="zh-cn_topic_0283137176_p103411519151715"></a>方式二</p>
</td>
<td class="cellrowborder" valign="top" width="83.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137176_p14341219191717"><a name="zh-cn_topic_0283137176_p14341219191717"></a><a name="zh-cn_topic_0283137176_p14341219191717"></a>使用<a href="ALTER-SYSTEM-SET.md">ALTER SYSTEM SET</a>修改数据库参数。</p>
<a name="zh-cn_topic_0283137176_ul34591146161912"></a><a name="zh-cn_topic_0283137176_ul34591146161912"></a><ul id="zh-cn_topic_0283137176_ul34591146161912"><li>设置POSTMASERT级别的参数<a name="zh-cn_topic_0283137176_screen6459194691919"></a><a name="zh-cn_topic_0283137176_screen6459194691919"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283137176_screen6459194691919"><span id="zh-cn_topic_0283137176_text745919467199"><a name="zh-cn_topic_0283137176_text745919467199"></a><a name="zh-cn_topic_0283137176_text745919467199"></a>openGauss=# </span><strong id="zh-cn_topic_0283137176_b18459146131911"><a name="zh-cn_topic_0283137176_b18459146131911"></a><a name="zh-cn_topic_0283137176_b18459146131911"></a>ALTER SYSTEM</strong><em id="zh-cn_topic_0283137176_i194591646201914"><a name="zh-cn_topic_0283137176_i194591646201914"></a><a name="zh-cn_topic_0283137176_i194591646201914"></a> </em><strong id="zh-cn_topic_0283137176_b74601646111919"><a name="zh-cn_topic_0283137176_b74601646111919"></a><a name="zh-cn_topic_0283137176_b74601646111919"></a>SET </strong><em id="zh-cn_topic_0283137176_i74601463192"><a name="zh-cn_topic_0283137176_i74601463192"></a><a name="zh-cn_topic_0283137176_i74601463192"></a>paraname </em><strong id="zh-cn_topic_0283137176_b19460846181919"><a name="zh-cn_topic_0283137176_b19460846181919"></a><a name="zh-cn_topic_0283137176_b19460846181919"></a>TO </strong><em id="zh-cn_topic_0283137176_i17460184691917"><a name="zh-cn_topic_0283137176_i17460184691917"></a><a name="zh-cn_topic_0283137176_i17460184691917"></a>value;</em></pre>
<p id="zh-cn_topic_0283137176_p17460154613190"><a name="zh-cn_topic_0283137176_p17460154613190"></a><a name="zh-cn_topic_0283137176_p17460154613190"></a>重启后生效。</p>
</li><li>设置SIGHUP级别的参数<a name="zh-cn_topic_0283137176_screen946016467195"></a><a name="zh-cn_topic_0283137176_screen946016467195"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283137176_screen946016467195"><span id="zh-cn_topic_0283137176_text1246154651916"><a name="zh-cn_topic_0283137176_text1246154651916"></a><a name="zh-cn_topic_0283137176_text1246154651916"></a>openGauss=# </span><strong id="zh-cn_topic_0283137176_b446144641919"><a name="zh-cn_topic_0283137176_b446144641919"></a><a name="zh-cn_topic_0283137176_b446144641919"></a>ALTER SYSTEM SET </strong><em id="zh-cn_topic_0283137176_i13461194641912"><a name="zh-cn_topic_0283137176_i13461194641912"></a><a name="zh-cn_topic_0283137176_i13461194641912"></a>paraname </em><strong id="zh-cn_topic_0283137176_b64617467199"><a name="zh-cn_topic_0283137176_b64617467199"></a><a name="zh-cn_topic_0283137176_b64617467199"></a>TO </strong><em id="zh-cn_topic_0283137176_i7461846171920"><a name="zh-cn_topic_0283137176_i7461846171920"></a><a name="zh-cn_topic_0283137176_i7461846171920"></a>value;</em></pre>
<p id="zh-cn_topic_0283137176_p74611246141915"><a name="zh-cn_topic_0283137176_p74611246141915"></a><a name="zh-cn_topic_0283137176_p74611246141915"></a>立刻生效(实际等待线程重新加载参数略有延迟)。</p>
</li><li>设置BACKEND级别的参数<a name="zh-cn_topic_0283137176_screen7849113162111"></a><a name="zh-cn_topic_0283137176_screen7849113162111"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283137176_screen7849113162111"><span id="zh-cn_topic_0283137176_text985071310210"><a name="zh-cn_topic_0283137176_text985071310210"></a><a name="zh-cn_topic_0283137176_text985071310210"></a>openGauss=# </span><strong id="zh-cn_topic_0283137176_b590515018223"><a name="zh-cn_topic_0283137176_b590515018223"></a><a name="zh-cn_topic_0283137176_b590515018223"></a>ALTER SYSTEM SET </strong><em id="zh-cn_topic_0283137176_i179053505224"><a name="zh-cn_topic_0283137176_i179053505224"></a><a name="zh-cn_topic_0283137176_i179053505224"></a>paraname </em><strong id="zh-cn_topic_0283137176_b12905185013226"><a name="zh-cn_topic_0283137176_b12905185013226"></a><a name="zh-cn_topic_0283137176_b12905185013226"></a>TO </strong><em id="zh-cn_topic_0283137176_i6905195062219"><a name="zh-cn_topic_0283137176_i6905195062219"></a><a name="zh-cn_topic_0283137176_i6905195062219"></a>value;</em></pre>
<p id="zh-cn_topic_0283137176_p13971345219"><a name="zh-cn_topic_0283137176_p13971345219"></a><a name="zh-cn_topic_0283137176_p13971345219"></a>在下次会话中生效。</p>
</li></ul>
</td>
</tr>
</tbody>
</table>



## 操作步骤<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s049438204a0941efb4b85981fb594e7c"></a>


使用方式一设置参数，以设置explain\_perf\_mode参数为例。

1.  以操作系统用户omm登录数据库主节点。
2.  使用如下命令连接数据库。

    ```
    gsql -d postgres -p 8000
    ```

    postgres为需要连接的数据库名称，8000为数据库主节点的端口号。

    连接成功后，系统显示类似如下信息：

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  查看explain\_perf\_mode参数。

    ```
    openGauss=# SHOW explain_perf_mode;
     explain_perf_mode 
    -------------------
     normal
    (1 row)
    ```

4.  设置explain\_perf\_mode参数。

    使用以下任意方式进行设置：

    -   设置数据库级别的参数

        ```
        openGauss=# ALTER DATABASE postgres SET explain_perf_mode TO pretty;
        ```

        当结果显示为如下信息，则表示设置成功。

        ```
        ALTER DATABASE
        ```

        在下次会话中生效。

    -   设置用户级别的参数

        ```
        openGauss=# ALTER USER omm SET explain_perf_mode TO pretty;
        ```

        当结果显示为如下信息，则表示设置成功。

        ```
        ALTER ROLE
        ```

        在下次会话中生效。

    -   设置会话级别的参数

        ```
        openGauss=# SET explain_perf_mode TO pretty;
        ```

        当结果显示为如下信息，则表示设置成功。

        ```
        SET
        ```

5.  检查参数设置的正确性。

    ```
    openGauss=# SHOW explain_perf_mode;
     explain_perf_mode
    --------------
     pretty
    (1 row)
    ```


## 示例<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s5b8255d8025640aba238bfb86b20807a"></a>

--创建表test1。
openGauss=# CREATE TABLE test1
(
  a1 smallint not null,
  a2 int not null,
  a3 bigint not null,
  a4 float not null,
  a5 double not null,
  a6 numeric not null,
  a7 varchar(5) not null
);

--向表中插入记录失败。
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--查询表失败
openGauss=# select a1,a2 from test1 group by a1;

--向表中插入记录成功。
openGauss=# set dolphin.sql_mode = '';
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--查询表成功
openGauss=# select a1,a2 from test1 group by a1;

--删除表
openGauss=# DROP TABLE test1;
