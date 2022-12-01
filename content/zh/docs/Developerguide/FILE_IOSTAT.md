# FILE\_IOSTAT<a name="ZH-CN_TOPIC_0245374670"></a>

通过对数据文件IO的统计，反映数据的IO性能，用以发现IO操作异常等性能问题。

**表 1**  FILE\_IOSTAT字段

<a name="zh-cn_topic_0237122566_table1985917556013"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122566_row11718563018"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122566_p2712560015"><a name="zh-cn_topic_0237122566_p2712560015"></a><a name="zh-cn_topic_0237122566_p2712560015"></a><strong id="zh-cn_topic_0237122566_b974565011"><a name="zh-cn_topic_0237122566_b974565011"></a><a name="zh-cn_topic_0237122566_b974565011"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122566_p18720562007"><a name="zh-cn_topic_0237122566_p18720562007"></a><a name="zh-cn_topic_0237122566_p18720562007"></a><strong id="zh-cn_topic_0237122566_b1978566016"><a name="zh-cn_topic_0237122566_b1978566016"></a><a name="zh-cn_topic_0237122566_b1978566016"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122566_p1771756903"><a name="zh-cn_topic_0237122566_p1771756903"></a><a name="zh-cn_topic_0237122566_p1771756903"></a><strong id="zh-cn_topic_0237122566_b11720561600"><a name="zh-cn_topic_0237122566_b11720561600"></a><a name="zh-cn_topic_0237122566_b11720561600"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122566_row07656505"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p1881056008"><a name="zh-cn_topic_0237122566_p1881056008"></a><a name="zh-cn_topic_0237122566_p1881056008"></a>filenum</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p781056908"><a name="zh-cn_topic_0237122566_p781056908"></a><a name="zh-cn_topic_0237122566_p781056908"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p119135610010"><a name="zh-cn_topic_0237122566_p119135610010"></a><a name="zh-cn_topic_0237122566_p119135610010"></a>文件标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row9919566013"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p12925614012"><a name="zh-cn_topic_0237122566_p12925614012"></a><a name="zh-cn_topic_0237122566_p12925614012"></a>dbid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p13955612018"><a name="zh-cn_topic_0237122566_p13955612018"></a><a name="zh-cn_topic_0237122566_p13955612018"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p16918563014"><a name="zh-cn_topic_0237122566_p16918563014"></a><a name="zh-cn_topic_0237122566_p16918563014"></a>数据库标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row693563017"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p3103561018"><a name="zh-cn_topic_0237122566_p3103561018"></a><a name="zh-cn_topic_0237122566_p3103561018"></a>spcid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p210156706"><a name="zh-cn_topic_0237122566_p210156706"></a><a name="zh-cn_topic_0237122566_p210156706"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p110125616011"><a name="zh-cn_topic_0237122566_p110125616011"></a><a name="zh-cn_topic_0237122566_p110125616011"></a>表空间标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row101095618011"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p6109560014"><a name="zh-cn_topic_0237122566_p6109560014"></a><a name="zh-cn_topic_0237122566_p6109560014"></a>phyrds</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p21020569014"><a name="zh-cn_topic_0237122566_p21020569014"></a><a name="zh-cn_topic_0237122566_p21020569014"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p131116568017"><a name="zh-cn_topic_0237122566_p131116568017"></a><a name="zh-cn_topic_0237122566_p131116568017"></a>读物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row1511656707"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p181110563015"><a name="zh-cn_topic_0237122566_p181110563015"></a><a name="zh-cn_topic_0237122566_p181110563015"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p511185611017"><a name="zh-cn_topic_0237122566_p511185611017"></a><a name="zh-cn_topic_0237122566_p511185611017"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p3116561108"><a name="zh-cn_topic_0237122566_p3116561108"></a><a name="zh-cn_topic_0237122566_p3116561108"></a>写物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row1912956900"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p1612165617018"><a name="zh-cn_topic_0237122566_p1612165617018"></a><a name="zh-cn_topic_0237122566_p1612165617018"></a>phyblkrd</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p11212561004"><a name="zh-cn_topic_0237122566_p11212561004"></a><a name="zh-cn_topic_0237122566_p11212561004"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p9120567018"><a name="zh-cn_topic_0237122566_p9120567018"></a><a name="zh-cn_topic_0237122566_p9120567018"></a>读物理文件块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row61217561702"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p012155615014"><a name="zh-cn_topic_0237122566_p012155615014"></a><a name="zh-cn_topic_0237122566_p012155615014"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p4130561603"><a name="zh-cn_topic_0237122566_p4130561603"></a><a name="zh-cn_topic_0237122566_p4130561603"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p191319563020"><a name="zh-cn_topic_0237122566_p191319563020"></a><a name="zh-cn_topic_0237122566_p191319563020"></a>写物理文件块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row141318568017"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p17134561102"><a name="zh-cn_topic_0237122566_p17134561102"></a><a name="zh-cn_topic_0237122566_p17134561102"></a>readtim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p171319569011"><a name="zh-cn_topic_0237122566_p171319569011"></a><a name="zh-cn_topic_0237122566_p171319569011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p101517561808"><a name="zh-cn_topic_0237122566_p101517561808"></a><a name="zh-cn_topic_0237122566_p101517561808"></a>读文件的总时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row015185618015"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p191514561905"><a name="zh-cn_topic_0237122566_p191514561905"></a><a name="zh-cn_topic_0237122566_p191514561905"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p18153561700"><a name="zh-cn_topic_0237122566_p18153561700"></a><a name="zh-cn_topic_0237122566_p18153561700"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p716165619019"><a name="zh-cn_topic_0237122566_p716165619019"></a><a name="zh-cn_topic_0237122566_p716165619019"></a>写文件的总时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row121665612018"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p17164562013"><a name="zh-cn_topic_0237122566_p17164562013"></a><a name="zh-cn_topic_0237122566_p17164562013"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p11618566011"><a name="zh-cn_topic_0237122566_p11618566011"></a><a name="zh-cn_topic_0237122566_p11618566011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p18161356201"><a name="zh-cn_topic_0237122566_p18161356201"></a><a name="zh-cn_topic_0237122566_p18161356201"></a>读写文件的平均时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row0161156105"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p81715561201"><a name="zh-cn_topic_0237122566_p81715561201"></a><a name="zh-cn_topic_0237122566_p81715561201"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p12171561011"><a name="zh-cn_topic_0237122566_p12171561011"></a><a name="zh-cn_topic_0237122566_p12171561011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p16174561604"><a name="zh-cn_topic_0237122566_p16174561604"></a><a name="zh-cn_topic_0237122566_p16174561604"></a>最后一次读文件时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row1917115615019"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p19171856407"><a name="zh-cn_topic_0237122566_p19171856407"></a><a name="zh-cn_topic_0237122566_p19171856407"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p01717561606"><a name="zh-cn_topic_0237122566_p01717561606"></a><a name="zh-cn_topic_0237122566_p01717561606"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p1518156405"><a name="zh-cn_topic_0237122566_p1518156405"></a><a name="zh-cn_topic_0237122566_p1518156405"></a>读写文件的最小时长（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122566_row418556408"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122566_p1018656703"><a name="zh-cn_topic_0237122566_p1018656703"></a><a name="zh-cn_topic_0237122566_p1018656703"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122566_p141818561706"><a name="zh-cn_topic_0237122566_p141818561706"></a><a name="zh-cn_topic_0237122566_p141818561706"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122566_p141813563014"><a name="zh-cn_topic_0237122566_p141813563014"></a><a name="zh-cn_topic_0237122566_p141813563014"></a>读写文件的最大时长（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
