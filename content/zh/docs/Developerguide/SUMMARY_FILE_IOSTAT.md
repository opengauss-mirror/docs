# SUMMARY\_FILE\_IOSTAT

通过openGauss内对数据文件汇聚IO的统计，反映数据的IO性能，用以发现IO操作异常等性能问题。

**表 1**  SUMMARY\_FILE\_IOSTAT字段

<a name="zh-cn_topic_0237122567_table126169597116"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122567_row2076414591719"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122567_p276465912111"><a name="zh-cn_topic_0237122567_p276465912111"></a><a name="zh-cn_topic_0237122567_p276465912111"></a><strong id="zh-cn_topic_0237122567_b197651159016"><a name="zh-cn_topic_0237122567_b197651159016"></a><a name="zh-cn_topic_0237122567_b197651159016"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122567_p1076519591718"><a name="zh-cn_topic_0237122567_p1076519591718"></a><a name="zh-cn_topic_0237122567_p1076519591718"></a><strong id="zh-cn_topic_0237122567_b37651459515"><a name="zh-cn_topic_0237122567_b37651459515"></a><a name="zh-cn_topic_0237122567_b37651459515"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122567_p476517593119"><a name="zh-cn_topic_0237122567_p476517593119"></a><a name="zh-cn_topic_0237122567_p476517593119"></a><strong id="zh-cn_topic_0237122567_b57653599117"><a name="zh-cn_topic_0237122567_b57653599117"></a><a name="zh-cn_topic_0237122567_b57653599117"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122567_row157654591311"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p1176517591616"><a name="zh-cn_topic_0237122567_p1176517591616"></a><a name="zh-cn_topic_0237122567_p1176517591616"></a>filenum</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p47655592120"><a name="zh-cn_topic_0237122567_p47655592120"></a><a name="zh-cn_topic_0237122567_p47655592120"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p11765159712"><a name="zh-cn_topic_0237122567_p11765159712"></a><a name="zh-cn_topic_0237122567_p11765159712"></a>文件标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row47651459814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p1576615597119"><a name="zh-cn_topic_0237122567_p1576615597119"></a><a name="zh-cn_topic_0237122567_p1576615597119"></a>dbid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p1076617599120"><a name="zh-cn_topic_0237122567_p1076617599120"></a><a name="zh-cn_topic_0237122567_p1076617599120"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p5766165911117"><a name="zh-cn_topic_0237122567_p5766165911117"></a><a name="zh-cn_topic_0237122567_p5766165911117"></a>数据库标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row1676615595111"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p37661459413"><a name="zh-cn_topic_0237122567_p37661459413"></a><a name="zh-cn_topic_0237122567_p37661459413"></a>spcid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p4766135912112"><a name="zh-cn_topic_0237122567_p4766135912112"></a><a name="zh-cn_topic_0237122567_p4766135912112"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p476617591612"><a name="zh-cn_topic_0237122567_p476617591612"></a><a name="zh-cn_topic_0237122567_p476617591612"></a>表空间标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row27665591717"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p1676614591411"><a name="zh-cn_topic_0237122567_p1676614591411"></a><a name="zh-cn_topic_0237122567_p1676614591411"></a>phyrds</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p1876719591313"><a name="zh-cn_topic_0237122567_p1876719591313"></a><a name="zh-cn_topic_0237122567_p1876719591313"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p47673595118"><a name="zh-cn_topic_0237122567_p47673595118"></a><a name="zh-cn_topic_0237122567_p47673595118"></a>读物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row1476795917119"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p77674591310"><a name="zh-cn_topic_0237122567_p77674591310"></a><a name="zh-cn_topic_0237122567_p77674591310"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p137027016577"><a name="p137027016577"></a><a name="p137027016577"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p147671859616"><a name="zh-cn_topic_0237122567_p147671859616"></a><a name="zh-cn_topic_0237122567_p147671859616"></a>写物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row97671659912"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p67679591418"><a name="zh-cn_topic_0237122567_p67679591418"></a><a name="zh-cn_topic_0237122567_p67679591418"></a>phyblkrd</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p1263814475716"><a name="p1263814475716"></a><a name="p1263814475716"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p1176819593113"><a name="zh-cn_topic_0237122567_p1176819593113"></a><a name="zh-cn_topic_0237122567_p1176819593113"></a>读物理文件块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row18768959712"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p7769185912114"><a name="zh-cn_topic_0237122567_p7769185912114"></a><a name="zh-cn_topic_0237122567_p7769185912114"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p11170685572"><a name="p11170685572"></a><a name="p11170685572"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p1576913590111"><a name="zh-cn_topic_0237122567_p1576913590111"></a><a name="zh-cn_topic_0237122567_p1576913590111"></a>写物理文件块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row47698597112"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p18769159313"><a name="zh-cn_topic_0237122567_p18769159313"></a><a name="zh-cn_topic_0237122567_p18769159313"></a>readtim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p155625140579"><a name="p155625140579"></a><a name="p155625140579"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p207691859014"><a name="zh-cn_topic_0237122567_p207691859014"></a><a name="zh-cn_topic_0237122567_p207691859014"></a>读文件的总时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row276920598112"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p1777018591611"><a name="zh-cn_topic_0237122567_p1777018591611"></a><a name="zh-cn_topic_0237122567_p1777018591611"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p1283217309575"><a name="p1283217309575"></a><a name="p1283217309575"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p67701059919"><a name="zh-cn_topic_0237122567_p67701059919"></a><a name="zh-cn_topic_0237122567_p67701059919"></a>写文件的总时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row1377010591715"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p1770559618"><a name="zh-cn_topic_0237122567_p1770559618"></a><a name="zh-cn_topic_0237122567_p1770559618"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p177014591713"><a name="zh-cn_topic_0237122567_p177014591713"></a><a name="zh-cn_topic_0237122567_p177014591713"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p20770959715"><a name="zh-cn_topic_0237122567_p20770959715"></a><a name="zh-cn_topic_0237122567_p20770959715"></a>读写文件的平均时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row9770759213"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p27701159015"><a name="zh-cn_topic_0237122567_p27701159015"></a><a name="zh-cn_topic_0237122567_p27701159015"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p9771185913114"><a name="zh-cn_topic_0237122567_p9771185913114"></a><a name="zh-cn_topic_0237122567_p9771185913114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p0771259513"><a name="zh-cn_topic_0237122567_p0771259513"></a><a name="zh-cn_topic_0237122567_p0771259513"></a>最后一次读文件时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row27718593113"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p077110595112"><a name="zh-cn_topic_0237122567_p077110595112"></a><a name="zh-cn_topic_0237122567_p077110595112"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p477285910117"><a name="zh-cn_topic_0237122567_p477285910117"></a><a name="zh-cn_topic_0237122567_p477285910117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p187725591218"><a name="zh-cn_topic_0237122567_p187725591218"></a><a name="zh-cn_topic_0237122567_p187725591218"></a>读写文件的最小时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122567_row6772559616"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122567_p1177214591211"><a name="zh-cn_topic_0237122567_p1177214591211"></a><a name="zh-cn_topic_0237122567_p1177214591211"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122567_p1772359213"><a name="zh-cn_topic_0237122567_p1772359213"></a><a name="zh-cn_topic_0237122567_p1772359213"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122567_p12772659015"><a name="zh-cn_topic_0237122567_p12772659015"></a><a name="zh-cn_topic_0237122567_p12772659015"></a>读写文件的最大时长（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
