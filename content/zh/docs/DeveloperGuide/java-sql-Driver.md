# java.sql.Driver

java.sql.Driver是数据库驱动接口。

**表 1**  对java.sql.Driver的支持情况

<a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_table49583188"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_row28782763"><th class="cellrowborder" valign="top" width="47.24%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p54389801"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p54389801"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p54389801"></a><b>方法名</b></p>
</th>
<th class="cellrowborder" valign="top" width="27.32%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p28574230"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p28574230"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p28574230"></a><b>返回值类型</b></p>
</th>
<th class="cellrowborder" valign="top" width="25.44%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p61829791"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p61829791"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p61829791"></a><b>支持JDBC 4</b></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_row43170598"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p22509835"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p22509835"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p22509835"></a>acceptsURL(String url)</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p35989379"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p35989379"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p35989379"></a><span id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_text1836115373211"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_text1836115373211"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_text1836115373211"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p44726634"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p44726634"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p44726634"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_row21550103"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p7073686"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p7073686"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p7073686"></a>connect(String url, Properties info)</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p16145888"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p16145888"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p16145888"></a>Connection</p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p1045411"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p1045411"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p1045411"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_row842905"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p27898774"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p27898774"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p27898774"></a>jdbcCompliant()</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p48418399"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p48418399"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p48418399"></a><span id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_text12180175417324"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_text12180175417324"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_text12180175417324"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p25182061"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p25182061"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p25182061"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_row26221293"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p29763655"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p29763655"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p29763655"></a>getMajorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p53660912"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p53660912"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p53660912"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p53027593"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p53027593"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p53027593"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_row24241489"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p10944311"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p10944311"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p10944311"></a>getMinorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p6435649"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p6435649"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p6435649"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p38171829"><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p38171829"></a><a name="zh-cn_topic_0237120394_zh-cn_topic_0213179160_zh-cn_topic_0189250118_zh-cn_topic_0059778810_zh-cn_topic_0058965240_p38171829"></a>Yes</p>
</td>
</tr>
<tr id="row1759807741"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="p1359817720415"><a name="p1359817720415"></a><a name="p1359817720415"></a>getParentLogger()</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="p14598371044"><a name="p14598371044"></a><a name="p14598371044"></a>Logger</p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="p135981775416"><a name="p135981775416"></a><a name="p135981775416"></a>Yes</p>
</td>
</tr>
<tr id="row11717422417"><td class="cellrowborder" valign="top" width="47.24%" headers="mcps1.2.4.1.1 "><p id="p117154219411"><a name="p117154219411"></a><a name="p117154219411"></a>getPropertyInfo​(String url, Properties info)</p>
</td>
<td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.2 "><p id="p61715428419"><a name="p61715428419"></a><a name="p61715428419"></a>DriverPropertyInfo[]</p>
</td>
<td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.3 "><p id="p10171042241"><a name="p10171042241"></a><a name="p10171042241"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

