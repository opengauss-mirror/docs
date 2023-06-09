# Resetting Parameters<a name="EN-US_TOPIC_0289899927"></a>

## Background<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s75c9285916664351b9c3e31f0735ea98"></a>

openGauss provides multiple methods to set the GUC parameters of databases, users, or sessions.

-   Parameter names are case-insensitive.
-   A parameter value can be an integer, floating point value, string, Boolean value, or enumerated value.
    -   The Boolean values can be  **on**/**off**,  **true**/**false**,  **yes**/**no**, or  **1**/**0**, and are case-insensitive.
    -   The enumerated value range is specified in the  **enumvals**  column of the  **pg\_settings**  system catalog.

-   For parameters using units, specify their units during the setting. Otherwise, default units are used.
    -   The default units are specified in the  **unit**  column of  **pg\_settings**.
    -   The unit of memory can be KB, MB, or GB.
    -   The unit of time can be ms, s, min, h, or d.


For details about parameters in the hosts configuration template, see  [GUC Parameters](../DatabaseReference/guc-parameters.md).

## Setting GUC Parameters<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sb2763fa0003e4ff1815379339bffe994"></a>

openGauss provides six types of GUC parameters. For details about parameter types and their setting methods, see  [Table 1](#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Table  1**  GUC parameters

<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846"></a>
<table><thead align="left"><tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_rae575d3ff60b407598220d90f6c4ae5a"><th class="cellrowborder" valign="top" width="15%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a565dea9ce2ca48e382eabebd159db37c"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a565dea9ce2ca48e382eabebd159db37c"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a565dea9ce2ca48e382eabebd159db37c"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a365ac414051d47a2840b55cd29318e65"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a365ac414051d47a2840b55cd29318e65"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a365ac414051d47a2840b55cd29318e65"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="40%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_en-us_topic_0058967671_p503081162112"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_en-us_topic_0058967671_p503081162112"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_en-us_topic_0058967671_p503081162112"></a>How to Set</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_re5f6b00de3b144a7a1a7530013a4b50e"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ae084a76af0d7491ebaee700964f24b5d"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ae084a76af0d7491ebaee700964f24b5d"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ae084a76af0d7491ebaee700964f24b5d"></a>INTERNAL</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a93d8a625ffe5428a87f9c19f549e31e2"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a93d8a625ffe5428a87f9c19f549e31e2"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a93d8a625ffe5428a87f9c19f549e31e2"></a>Fixed parameter. It is set during database creation and cannot be modified. Users can only view the parameter by running the <strong id="b15621110181112"><a name="b15621110181112"></a><a name="b15621110181112"></a>SHOW</strong> command or in the <strong id="b146268108119"><a name="b146268108119"></a><a name="b146268108119"></a>pg_settings</strong> view.</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a780149c37e6e4388951dae1a6367ee15"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a780149c37e6e4388951dae1a6367ee15"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a780149c37e6e4388951dae1a6367ee15"></a>None</p>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_r985eaa99e53c429f93c88aa44c2c947e"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a266639ca72ef468f843ce78339772b89"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a266639ca72ef468f843ce78339772b89"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a266639ca72ef468f843ce78339772b89"></a>POSTMASTER</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aab34575a3f7f4f85b347778b8ecf1c8e"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aab34575a3f7f4f85b347778b8ecf1c8e"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aab34575a3f7f4f85b347778b8ecf1c8e"></a>Database server parameter. It can be set when the database is started or in the configuration file.</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aaec6ea74431b46e3a70851519a3cac25"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aaec6ea74431b46e3a70851519a3cac25"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aaec6ea74431b46e3a70851519a3cac25"></a>Method 1 or 4 in <a href="#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_r276cbf29781049ccbcde361ba70847dc"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afd60248c975349e0b2592f5d06f8c873"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afd60248c975349e0b2592f5d06f8c873"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afd60248c975349e0b2592f5d06f8c873"></a>SIGHUP</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a04b338e0eee1469594337b9c4a412769"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a04b338e0eee1469594337b9c4a412769"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a04b338e0eee1469594337b9c4a412769"></a>Global database parameter. It can be set when the database is started or be modified later.</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a6b219f3f7d5048bf81262aedae906b37"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a6b219f3f7d5048bf81262aedae906b37"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a6b219f3f7d5048bf81262aedae906b37"></a>Method 1, 2, or 4 in <a href="#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_r57fbf12f01b646ec85a54efb4b8863f6"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a91c2db6d403f431c9130e42c5c10c2ae"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a91c2db6d403f431c9130e42c5c10c2ae"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a91c2db6d403f431c9130e42c5c10c2ae"></a>BACKEND</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_p1056143385719"><a name="en-us_topic_0283137176_en-us_topic_0237121562_p1056143385719"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_p1056143385719"></a>Session connection parameter. It is specified during session connection creation and cannot be modified after that. The parameter setting becomes invalid when the session is disconnected. This is an internal parameter and not recommended for users to set it.</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac03326bb1ab94db3b7ee68aca3c4794d"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac03326bb1ab94db3b7ee68aca3c4794d"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac03326bb1ab94db3b7ee68aca3c4794d"></a>Method 1, 2, or 4 in <a href="#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d">Table 2</a>.</p>
<div class="note" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ne868e43e3a8a481ba58d7eed6974d888"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ne868e43e3a8a481ba58d7eed6974d888"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ne868e43e3a8a481ba58d7eed6974d888"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af1a3c552951f4930b64dbf14be54a33b"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af1a3c552951f4930b64dbf14be54a33b"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af1a3c552951f4930b64dbf14be54a33b"></a>The parameter setting takes effect when the next session is created.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_rf4e77970e4774b3a9c60e4c67dd08183"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a6ed01fb56241493e85efb71d1f51f888"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a6ed01fb56241493e85efb71d1f51f888"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a6ed01fb56241493e85efb71d1f51f888"></a>SUSET</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afea554b5226a4e6b860ba259b82ebe51"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afea554b5226a4e6b860ba259b82ebe51"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afea554b5226a4e6b860ba259b82ebe51"></a>Database administrator parameter. It can be set by common users when or after the database is started. It can also be set by database administrators using SQL statements.</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a3dd0131e4d3940a781ba7c6fdfb09827"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a3dd0131e4d3940a781ba7c6fdfb09827"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a3dd0131e4d3940a781ba7c6fdfb09827"></a>Method 1 or 2 by a common user, or method 3 by a database administrator in <a href="#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_rf87c73c9faa44ccb956b16b0191d3e92"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8d7ddfb83a8a4bb4b206ebfe14eb52a2"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8d7ddfb83a8a4bb4b206ebfe14eb52a2"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8d7ddfb83a8a4bb4b206ebfe14eb52a2"></a>USERSET</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a85853b683e474d85a49c71b815887464"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a85853b683e474d85a49c71b815887464"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a85853b683e474d85a49c71b815887464"></a>Common user parameter. It can be set by any user at any time.</p>
</td>
<td class="cellrowborder" valign="top" width="40%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac83063c5be174b14a717b7b4adeb6e01"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac83063c5be174b14a717b7b4adeb6e01"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac83063c5be174b14a717b7b4adeb6e01"></a>Method 1, 2, or 3 in <a href="#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d">Table 2</a>.</p>
</td>
</tr>
</tbody>
</table>

You can set GUC parameters in openGauss using the four methods listed in  [Table 2](#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Table  2**  Methods for setting GUC parameters

<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d"></a>
<table><thead align="left"><tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_rc5ee36741afd4727ac928c5055842f62"><th class="cellrowborder" valign="top" width="16.06%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_en-us_topic_0058967671_p519167381778"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_en-us_topic_0058967671_p519167381778"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_en-us_topic_0058967671_p519167381778"></a>No.</p>
</th>
<th class="cellrowborder" valign="top" width="83.94%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aef170b7c444f4dd8859f597acc53a873"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aef170b7c444f4dd8859f597acc53a873"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aef170b7c444f4dd8859f597acc53a873"></a>How to Set</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ra7e245b633e74275bbc1109c9e36b66a"><td class="cellrowborder" valign="top" width="16.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad82cb328909940dca1f9bda8fb87a21c"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad82cb328909940dca1f9bda8fb87a21c"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad82cb328909940dca1f9bda8fb87a21c"></a>Method 1</p>
</td>
<td class="cellrowborder" valign="top" width="83.94%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_oa34f7863e774487f97db689a601ebe06"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_oa34f7863e774487f97db689a601ebe06"></a><ol id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_oa34f7863e774487f97db689a601ebe06"><li>Run the following command to set a parameter:<pre class="screen" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sb83221905a9f4fb29fffd4eb5341ce4a"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sb83221905a9f4fb29fffd4eb5341ce4a"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sb83221905a9f4fb29fffd4eb5341ce4a"></a><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afd214821ee5443f49cc26ad7bc24a914"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afd214821ee5443f49cc26ad7bc24a914"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_afd214821ee5443f49cc26ad7bc24a914"></a>gs_guc set -D</strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a1f3d354dd4d04c83a9c19b0db95fded5"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a1f3d354dd4d04c83a9c19b0db95fded5"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a1f3d354dd4d04c83a9c19b0db95fded5"></a> datadir</em> <strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ade5c50b88a384bbf8dac5a38b4959521"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ade5c50b88a384bbf8dac5a38b4959521"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ade5c50b88a384bbf8dac5a38b4959521"></a>-c</strong> "<em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af3bc1318096d4ee1b9fd1136e386196c"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af3bc1318096d4ee1b9fd1136e386196c"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af3bc1318096d4ee1b9fd1136e386196c"></a>paraname=value</em>"</pre>
<div class="note" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_n73d93055cc89448e883f7ae3d2438598"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_n73d93055cc89448e883f7ae3d2438598"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_n73d93055cc89448e883f7ae3d2438598"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a73c1fbaa4d4e43c08d3cc14d6566d748"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a73c1fbaa4d4e43c08d3cc14d6566d748"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a73c1fbaa4d4e43c08d3cc14d6566d748"></a>If the parameter is a string variable, use <strong id="b20608151917129"><a name="b20608151917129"></a><a name="b20608151917129"></a>-c </strong><em id="i156099192120"><a name="i156099192120"></a><a name="i156099192120"></a>parameter</em><strong id="b196099193123"><a name="b196099193123"></a><a name="b196099193123"></a>="'</strong><em id="i18610161910126"><a name="i18610161910126"></a><a name="i18610161910126"></a>value</em><strong id="b19610161912125"><a name="b19610161912125"></a><a name="b19610161912125"></a>'"</strong> or <strong id="b206121119161215"><a name="b206121119161215"></a><a name="b206121119161215"></a>-c "</strong><em id="i18613161917123"><a name="i18613161917123"></a><a name="i18613161917123"></a>parameter</em><strong id="b7613161915129"><a name="b7613161915129"></a><a name="b7613161915129"></a> = '</strong><em id="i0614171991219"><a name="i0614171991219"></a><a name="i0614171991219"></a>value</em><strong id="b4619141931212"><a name="b4619141931212"></a><a name="b4619141931212"></a>'"</strong>.</p>
</div></div>
</li><li>Restart the database to make the setting take effect.<div class="note" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ncefc2d14fd634ee1aba7f10a8fc1b24a"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ncefc2d14fd634ee1aba7f10a8fc1b24a"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ncefc2d14fd634ee1aba7f10a8fc1b24a"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aa384408456c448958ab4ad86052ec7bc"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aa384408456c448958ab4ad86052ec7bc"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aa384408456c448958ab4ad86052ec7bc"></a>Restarting <span id="text1737921814568"><a name="text1737921814568"></a><a name="text1737921814568"></a>openGauss</span> results in operation interruption. Properly plan the restart to avoid affecting users.</p>
</div></div>
<pre class="screen" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s4488d178cbce4516966e617b44556413"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s4488d178cbce4516966e617b44556413"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s4488d178cbce4516966e617b44556413"></a><strong id="b355986746"><a name="b355986746"></a><a name="b355986746"></a>gs_ctl restart -D </strong><em id="i3560161942"><a name="i3560161942"></a><a name="i3560161942"></a>datadir</em></pre>
</li></ol>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_r4a4c4f02def241319aebcdf0158dec7a"><td class="cellrowborder" valign="top" width="16.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8065f5646afd484397cf60af2f86fda7"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8065f5646afd484397cf60af2f86fda7"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8065f5646afd484397cf60af2f86fda7"></a>Method 2</p>
</td>
<td class="cellrowborder" valign="top" width="83.94%" headers="mcps1.2.3.1.2 "><pre class="screen" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s582b494b239346128a472162c2c80f3f"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s582b494b239346128a472162c2c80f3f"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s582b494b239346128a472162c2c80f3f"></a><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ae0ce5807a22a4710925c9d20f68c5dcb"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ae0ce5807a22a4710925c9d20f68c5dcb"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ae0ce5807a22a4710925c9d20f68c5dcb"></a>gs_guc reload -D</strong> <em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a9064f8f5498c4776a42d61d5d951d6c2"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a9064f8f5498c4776a42d61d5d951d6c2"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a9064f8f5498c4776a42d61d5d951d6c2"></a>datadir</em><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a63b876c4b690402bb5f109851bcfc4f4"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a63b876c4b690402bb5f109851bcfc4f4"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a63b876c4b690402bb5f109851bcfc4f4"></a> -c </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad72779a5d2a9476a83ae0d70173e77e2"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad72779a5d2a9476a83ae0d70173e77e2"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad72779a5d2a9476a83ae0d70173e77e2"></a>"paraname=value</em>"</pre>
</td>
</tr>
<tr id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_r1e3295b979654de3af72bc9ba63cc128"><td class="cellrowborder" valign="top" width="16.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a916d18cb80824fa185129fd545672db2"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a916d18cb80824fa185129fd545672db2"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a916d18cb80824fa185129fd545672db2"></a>Method 3:</p>
</td>
<td class="cellrowborder" valign="top" width="83.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a72c49c3f3d6148518c31b39d969022ed"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a72c49c3f3d6148518c31b39d969022ed"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a72c49c3f3d6148518c31b39d969022ed"></a>Set parameters at specific database, user, and session levels.</p>
<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_u12c53a6b00424da0bc7fff98c249db37"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_u12c53a6b00424da0bc7fff98c249db37"></a><ul id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_u12c53a6b00424da0bc7fff98c249db37"><li>Set a database-level parameter.<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s01e44d50122d4fc19888a3470fcb3d6e"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s01e44d50122d4fc19888a3470fcb3d6e"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s01e44d50122d4fc19888a3470fcb3d6e"><span id="en-us_topic_0283137176_en-us_topic_0237121562_text289912255356"><a name="en-us_topic_0283137176_en-us_topic_0237121562_text289912255356"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_text289912255356"></a>openGauss=# </span><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aeeca9e9a68fd413b9fe9d299e7bfac9a"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aeeca9e9a68fd413b9fe9d299e7bfac9a"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aeeca9e9a68fd413b9fe9d299e7bfac9a"></a>ALTER DATABASE </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac61c40d4d210427188ca8f6aaf443a10"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac61c40d4d210427188ca8f6aaf443a10"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ac61c40d4d210427188ca8f6aaf443a10"></a>dbname </em><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a68bf0f9b369545b1a199ed8165ee22b9"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a68bf0f9b369545b1a199ed8165ee22b9"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a68bf0f9b369545b1a199ed8165ee22b9"></a>SET </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a9363560924844e128adadceddfb1a159"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a9363560924844e128adadceddfb1a159"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a9363560924844e128adadceddfb1a159"></a>paraname </em><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8699136d00794ee989ad3f142400e875"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8699136d00794ee989ad3f142400e875"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8699136d00794ee989ad3f142400e875"></a>TO </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aee95a478735f42e3b6fd110de402c9b3"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aee95a478735f42e3b6fd110de402c9b3"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_aee95a478735f42e3b6fd110de402c9b3"></a>value;</em></pre>
<p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8afbfbba10a343f6b1643904efc45a9a"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8afbfbba10a343f6b1643904efc45a9a"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8afbfbba10a343f6b1643904efc45a9a"></a>The setting takes effect in the next session.</p>
</li><li>Set a user-level parameter.<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_scc4cc44331524d9aaedbccd158a59d83"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_scc4cc44331524d9aaedbccd158a59d83"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_scc4cc44331524d9aaedbccd158a59d83"><span id="en-us_topic_0283137176_en-us_topic_0237121562_text85396212353"><a name="en-us_topic_0283137176_en-us_topic_0237121562_text85396212353"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_text85396212353"></a>openGauss=# </span><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad90797af565b4aa4a91370c1967d8227"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad90797af565b4aa4a91370c1967d8227"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ad90797af565b4aa4a91370c1967d8227"></a>ALTER USER </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8e3e4b86978c4db7be11b304c66fa373"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8e3e4b86978c4db7be11b304c66fa373"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a8e3e4b86978c4db7be11b304c66fa373"></a>username </em><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a33c040f0d17f465bb47da8cf1f5745dd"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a33c040f0d17f465bb47da8cf1f5745dd"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a33c040f0d17f465bb47da8cf1f5745dd"></a>SET </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a946f24bd375240638166df1724c790ec"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a946f24bd375240638166df1724c790ec"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a946f24bd375240638166df1724c790ec"></a>paraname </em><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a979c6715c9a842a1a2c5627330d31903"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a979c6715c9a842a1a2c5627330d31903"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a979c6715c9a842a1a2c5627330d31903"></a>TO </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ada78baf9e2b94075b6427e6e8e508f25"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ada78baf9e2b94075b6427e6e8e508f25"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_ada78baf9e2b94075b6427e6e8e508f25"></a>value;</em></pre>
<p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a901bc61ee57540739297bb9fa5c1f78b"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a901bc61ee57540739297bb9fa5c1f78b"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a901bc61ee57540739297bb9fa5c1f78b"></a>The setting takes effect in the next session.</p>
</li><li>Set a session-level parameter.<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sd1edd9f762e84ee9a3a2371531cdcc21"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sd1edd9f762e84ee9a3a2371531cdcc21"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_sd1edd9f762e84ee9a3a2371531cdcc21"><span id="en-us_topic_0283137176_en-us_topic_0237121562_text1841292273511"><a name="en-us_topic_0283137176_en-us_topic_0237121562_text1841292273511"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_text1841292273511"></a>openGauss=# </span><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a27bc12624ffa4b9185f11479e9f0d666"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a27bc12624ffa4b9185f11479e9f0d666"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a27bc12624ffa4b9185f11479e9f0d666"></a>SET </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a0386a250d602457a8e3953cc5bca4f08"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a0386a250d602457a8e3953cc5bca4f08"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a0386a250d602457a8e3953cc5bca4f08"></a>paraname </em><strong id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a4d2ab29d36e14953b355bc8d27d83f76"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a4d2ab29d36e14953b355bc8d27d83f76"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a4d2ab29d36e14953b355bc8d27d83f76"></a>TO </strong><em id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a845205e5a57344d0839a4f38e4fd8263"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a845205e5a57344d0839a4f38e4fd8263"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_a845205e5a57344d0839a4f38e4fd8263"></a>value;</em></pre>
<p id="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af3f362f94d094913929d928fec04dc22"><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af3f362f94d094913929d928fec04dc22"></a><a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_af3f362f94d094913929d928fec04dc22"></a>Parameter value in the current session is changed. After you exit the session, the setting becomes invalid.</p>
<div class="note" id="note11901154534016"><a name="note11901154534016"></a><a name="note11901154534016"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p3901144514405"><a name="p3901144514405"></a><a name="p3901144514405"></a>Session-level parameters set by <strong id="b13246921533"><a name="b13246921533"></a><a name="b13246921533"></a>SET</strong> have the highest priority, followed by parameters set by <strong id="b7384910195311"><a name="b7384910195311"></a><a name="b7384910195311"></a>ALTER</strong>. Parameter values set by <strong id="b3107618155310"><a name="b3107618155310"></a><a name="b3107618155310"></a>ALTER DATABASE</strong> have a higher priority than those set using <strong id="b868935115312"><a name="b868935115312"></a><a name="b868935115312"></a>ALTER USER</strong>. Priorities of the first three methods are all higher than those of <strong id="b137261545195317"><a name="b137261545195317"></a><a name="b137261545195317"></a>gs_guc</strong>.</p>
</div></div>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137176_row934051919178"><td class="cellrowborder" valign="top" width="16.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137176_p103411519151715"><a name="en-us_topic_0283137176_p103411519151715"></a><a name="en-us_topic_0283137176_p103411519151715"></a>Method 4</p>
</td>
<td class="cellrowborder" valign="top" width="83.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137176_p14341219191717"><a name="en-us_topic_0283137176_p14341219191717"></a><a name="en-us_topic_0283137176_p14341219191717"></a>Modify database parameters using <a href="../SQLReference/alter-system-set.md">ALTER SYSTEM SET</a>.</p>
<a name="en-us_topic_0283137176_ul34591146161912"></a><a name="en-us_topic_0283137176_ul34591146161912"></a><ul id="en-us_topic_0283137176_ul34591146161912"><li>Set a POSTMASERT-level parameter.<a name="en-us_topic_0283137176_screen6459194691919"></a><a name="en-us_topic_0283137176_screen6459194691919"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137176_screen6459194691919"><span id="en-us_topic_0283137176_text745919467199"><a name="en-us_topic_0283137176_text745919467199"></a><a name="en-us_topic_0283137176_text745919467199"></a>openGauss=# </span><strong id="en-us_topic_0283137176_b18459146131911"><a name="en-us_topic_0283137176_b18459146131911"></a><a name="en-us_topic_0283137176_b18459146131911"></a>ALTER SYSTEM</strong><em id="en-us_topic_0283137176_i194591646201914"><a name="en-us_topic_0283137176_i194591646201914"></a><a name="en-us_topic_0283137176_i194591646201914"></a> </em><strong id="en-us_topic_0283137176_b74601646111919"><a name="en-us_topic_0283137176_b74601646111919"></a><a name="en-us_topic_0283137176_b74601646111919"></a>SET </strong><em id="en-us_topic_0283137176_i74601463192"><a name="en-us_topic_0283137176_i74601463192"></a><a name="en-us_topic_0283137176_i74601463192"></a>paraname </em><strong id="en-us_topic_0283137176_b19460846181919"><a name="en-us_topic_0283137176_b19460846181919"></a><a name="en-us_topic_0283137176_b19460846181919"></a>TO </strong><em id="en-us_topic_0283137176_i17460184691917"><a name="en-us_topic_0283137176_i17460184691917"></a><a name="en-us_topic_0283137176_i17460184691917"></a>value;</em></pre>
<p id="en-us_topic_0283137176_p17460154613190"><a name="en-us_topic_0283137176_p17460154613190"></a><a name="en-us_topic_0283137176_p17460154613190"></a>Restart the system for the setting to take effect.</p>
</li><li>Set a SIGHUP-level parameter.<a name="en-us_topic_0283137176_screen946016467195"></a><a name="en-us_topic_0283137176_screen946016467195"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137176_screen946016467195"><span id="en-us_topic_0283137176_text1246154651916"><a name="en-us_topic_0283137176_text1246154651916"></a><a name="en-us_topic_0283137176_text1246154651916"></a>openGauss=# </span><strong id="en-us_topic_0283137176_b446144641919"><a name="en-us_topic_0283137176_b446144641919"></a><a name="en-us_topic_0283137176_b446144641919"></a>ALTER SYSTEM SET </strong><em id="en-us_topic_0283137176_i13461194641912"><a name="en-us_topic_0283137176_i13461194641912"></a><a name="en-us_topic_0283137176_i13461194641912"></a>paraname </em><strong id="en-us_topic_0283137176_b64617467199"><a name="en-us_topic_0283137176_b64617467199"></a><a name="en-us_topic_0283137176_b64617467199"></a>TO </strong><em id="en-us_topic_0283137176_i7461846171920"><a name="en-us_topic_0283137176_i7461846171920"></a><a name="en-us_topic_0283137176_i7461846171920"></a>value;</em></pre>
<p id="en-us_topic_0283137176_p74611246141915"><a name="en-us_topic_0283137176_p74611246141915"></a><a name="en-us_topic_0283137176_p74611246141915"></a>The setting takes effect immediately. (Actually, there is a slight delay to wait for the thread reloading the parameter.)</p>
</li><li>Set a BACKEND-level parameter.<a name="en-us_topic_0283137176_screen7849113162111"></a><a name="en-us_topic_0283137176_screen7849113162111"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137176_screen7849113162111"><span id="en-us_topic_0283137176_text985071310210"><a name="en-us_topic_0283137176_text985071310210"></a><a name="en-us_topic_0283137176_text985071310210"></a>openGauss=# </span><strong id="en-us_topic_0283137176_b590515018223"><a name="en-us_topic_0283137176_b590515018223"></a><a name="en-us_topic_0283137176_b590515018223"></a>ALTER SYSTEM SET </strong><em id="en-us_topic_0283137176_i179053505224"><a name="en-us_topic_0283137176_i179053505224"></a><a name="en-us_topic_0283137176_i179053505224"></a>paraname </em><strong id="en-us_topic_0283137176_b12905185013226"><a name="en-us_topic_0283137176_b12905185013226"></a><a name="en-us_topic_0283137176_b12905185013226"></a>TO </strong><em id="en-us_topic_0283137176_i6905195062219"><a name="en-us_topic_0283137176_i6905195062219"></a><a name="en-us_topic_0283137176_i6905195062219"></a>value;</em></pre>
<p id="en-us_topic_0283137176_p13971345219"><a name="en-us_topic_0283137176_p13971345219"></a><a name="en-us_topic_0283137176_p13971345219"></a>The setting takes effect in the next session.</p>
</li></ul>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>If you use method 1 or 2 to set a parameter that does not belong to the current environment, the database displays a message indicating that the parameter is not supported.

## Procedure<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s049438204a0941efb4b85981fb594e7c"></a>

The following example shows how to set  **archive\_mode**  on the primary node of the database using method 1.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  View the value of  **archive\_mode**.

    ```
    cat /gaussdb/data/dbnode/postgresql.conf | grep archive_mode
    ```

    ```
    archive_mode = on
    ```

    **on**  indicates logs are archived.

3.  Set  **archive\_mode**  to  **off**  to disable log archiving.

    ```
    gs_guc set -D /gaussdb/data/dbnode -c "archive_mode=off"
    ```

4.  Restart the database to make the setting take effect.

    ```
    gs_ctl restart -D /gaussdb/data/dbnode
    ```

5.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

6.  Check whether the parameter is correctly set.

    ```
    openGauss=# SHOW archive_mode;
     archive_mode
    --------------
     off
    (1 row)
    ```


The following example shows how to set  **authentication\_timeout**  on the primary node of the database using method 2.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  View the value of  **authentication\_timeout**.

    ```
    cat /gaussdb/data/dbnode/postgresql.conf | grep authentication_timeout
    ```

    ```
    authentication_timeout = 1min
    ```

3.  Set  **authentication\_timeout**  to  **59s**.

    ```
    gs_guc reload  -D /gaussdb/data/dbnode -c "authentication_timeout = 59s"
    
    Total instances: 2. Failed instances: 0.
    Success to perform gs_guc!
    ```

4.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

5.  Check whether the parameter is correctly set.

    ```
    openGauss=# SHOW authentication_timeout;
     authentication_timeout 
    ------------------------
     59s
    (1 row)
    ```


The following example shows how to set  **explain\_perf\_mode**  using method 3.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  View the value of  **explain\_perf\_mode**.

    ```
    openGauss=# SHOW explain_perf_mode;
     explain_perf_mode 
    -------------------
     normal
    (1 row)
    ```

4.  Set  **explain\_perf\_mode**.

    Perform one of the following operations:

    -   Set a database-level parameter.

        ```
        openGauss=# ALTER DATABASE postgres SET explain_perf_mode TO pretty;
        ```

        If the following information is displayed, the setting succeeds:

        ```
        ALTER DATABASE
        ```

        The setting takes effect in the next session.

    -   Set a user-level parameter.

        ```
        openGauss=# ALTER USER omm SET explain_perf_mode TO pretty;
        ```

        If the following information is displayed, the setting succeeds:

        ```
        ALTER ROLE
        ```

        The setting takes effect in the next session.

    -   Set a session-level parameter.

        ```
        openGauss=# SET explain_perf_mode TO pretty;
        ```

        If the following information is displayed, the setting succeeds:

        ```
        SET
        ```

5.  Check whether the parameter is correctly set.

    ```
    openGauss=# SHOW explain_perf_mode;
     explain_perf_mode
    --------------
     pretty
    (1 row)
    ```


## Examples<a name="en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_s5b8255d8025640aba238bfb86b20807a"></a>

-   Example 1: modifying the maximum connections for the primary database node in openGauss using method 1
    1.  Log in as the OS user  **omm**  to the primary node of the database.
    2.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    3.  View the allowed maximum connections.

        ```
        openGauss=# SHOW max_connections;
         max_connections 
        -----------------
         200
        (1 row)
        ```

    4.  Run the following command to exit the database:

        ```
        openGauss=# \q
        ```

    5.  Change the maximum connections for the primary database node in openGauss.

        ```
        gs_guc set  -D /gaussdb/data/dbnode -c "max_connections = 800"
        ```

    6.  Restart openGauss.

        ```
        gs_ctl restart -D /gaussdb/data/dbnode
        ```

    7.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    8.  View the allowed maximum connections.

        ```
        openGauss=# SHOW max_connections;
         max_connections 
        -----------------
         800
        (1 row)
        ```


-   Example 2: setting  **authentication\_timeout**  \(the allowed longest client authentication duration\) for the primary database node using method 2
    1.  Log in as the OS user  **omm**  to the primary node of the database.
    2.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    3.  View the value of  **authentication\_timeout**.

        ```
        openGauss=# SHOW authentication_timeout;
         authentication_timeout 
        ------------------------
         1min
        (1 row)
        ```

    4.  Run the following command to exit the database:

        ```
        openGauss=# \q
        ```

    5.  Change the allowed longest client authentication duration of the primary database node.

        ```
        gs_guc reload  -D /gaussdb/data/dbnode -c "authentication_timeout = 59s"
        ```

    6.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    7.  View the value of  **authentication\_timeout**.

        ```
        openGauss=# SHOW authentication_timeout;
         authentication_timeout 
        ------------------------
         59s
        (1 row)
        ```


-   Example 3: Change the maximum number of connections between openGauss database nodes.
    1.  Log in as the OS user  **omm**  to the primary node of the database.
    2.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    3.  View the allowed maximum connections.

        ```
        openGauss=# SHOW max_connections;
         max_connections 
        -----------------
         200
        (1 row)
        ```

    4.  Run the following command to exit the database:

        ```
        openGauss=# \q
        ```

    5.  Change the maximum number of connections between openGauss database nodes.

        ```
        gs_guc set  -D /gaussdb/data/dbnode -c "max_connections = 500"
        ```

    6.  Restart openGauss.

        ```
        gs_ctl restart -D /gaussdb/data/dbnode
        ```

    7.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    8.  View the allowed maximum connections.

        ```
        openGauss=# SHOW max_connections;
         max_connections 
        -----------------
         500
        (1 row)
        ```


-   Example 4: setting authentication\_timeout \(the allowed longest client authentication duration\) for database nodes
    1.  Log in as the OS user  **omm**  to the primary node of the database.
    2.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    3.  View the value of  **authentication\_timeout**.

        ```
        openGauss=# SHOW authentication_timeout;
         authentication_timeout 
        ------------------------
         1min
        (1 row)
        ```

    4.  Run the following command to exit the database:

        ```
        openGauss=# \q
        ```

    5.  Change the allowed longest client authentication duration of openGauss database nodes.

        ```
        gs_guc reload  -D /gaussdb/data/dbnode -c "authentication_timeout = 30s"
        ```

    6.  Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres**  is the name of the database, and 8000 is the port number of the primary node of the database.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

    7.  View the value of  **authentication\_timeout**.

        ```
        openGauss=# SHOW authentication_timeout;
         authentication_timeout 
        ------------------------
         30s
        (1 row)
        ```



