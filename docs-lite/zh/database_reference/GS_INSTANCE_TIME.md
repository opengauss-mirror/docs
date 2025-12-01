# GS\_INSTANCE\_TIME<a name="ZH-CN_TOPIC_0289900080"></a>

提供当前集节点下的各种时间消耗信息，主要分为以下类型:

-   DB\_TIME: 作业在多核下的有效时间花销。
-   CPU\_TIME：CPU的时间花销。
-   EXECUTION\_TIME：执行器内的时间花销。
-   PARSE\_TIME：SQL解析的时间花销。
-   PLAN\_TIME：生成Plan的时间花销。
-   REWRITE\_TIME：SQL重写的时间花销。
-   PL\_EXECUTION\_TIME ：plpgsql（存储过程）执行的时间花销。
-   PL\_COMPILATION\_TIME：plpgsql（存储过程）编译的时间花销。
-   NET\_SEND\_TIME：网络上的时间花销。
-   DATA\_IO\_TIME：IO的时间花销。
-   SRT1_Q: Q报文执行的耗时
-   SRT2_SIMPLE_QUERY: exec_simple_query执行耗时
-   SRT3_ANALYZE_REWRITE: pg_analyze_and_rewrite执行耗时
-   SRT4_PLAN_QUERY: pg_plan_queries执行耗时
-   SRT5_LIGHT_QUERY: exec_query_through_light_proxy执行耗时
-   SRT6_P：P报文执行的耗时
-   SRT7_B：B报文执行的耗时
-   SRT8_E：E报文执行的耗时
-   SRT9_D：D报文执行的耗时
-   SRT10_S：S报文执行的耗时
-   SRT11_C：C报文执行的耗时
-   SRT12_U：U报文执行的耗时
-   SRT13_BEFORE_QUERY：进入下一次报文处理前的耗时
-   SRT14_AFTER_QUERY: 完成报文处理后的耗时
-   RTT_UNKNOWN: 未知时间消耗，可能是session切换耗时。

**表 1**  GS\_INSTANCE\_TIME字段

<a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_table1442423914333"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_row18577739163316"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p857711399331"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p857711399331"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p857711399331"></a><strong id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b13577839103318"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b13577839103318"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b13577839103318"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="22.82%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p19577239113315"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p19577239113315"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p19577239113315"></a><strong id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b15577639183318"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b15577639183318"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b15577639183318"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="59.91%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p4577439153315"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p4577439153315"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p4577439153315"></a><strong id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b19578183933316"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b19578183933316"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_b19578183933316"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_row175781339153312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p13578143993312"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p13578143993312"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p13578143993312"></a>stat_id</p>
</td>
<td class="cellrowborder" valign="top" width="22.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1057853912337"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1057853912337"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1057853912337"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1757873920336"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1757873920336"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1757873920336"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_row17578153914339"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p857812394333"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p857812394333"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p857812394333"></a>stat_name</p>
</td>
<td class="cellrowborder" valign="top" width="22.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1257873983311"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1257873983311"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1257873983311"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p13578103973319"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p13578103973319"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p13578103973319"></a>类型名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_row14578123913314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1357933910338"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1357933910338"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p1357933910338"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="22.82%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p75791139173314"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p75791139173314"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p75791139173314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p125797399330"><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p125797399330"></a><a name="zh-cn_topic_0283137436_zh-cn_topic_0237122542_p125797399330"></a>时间值（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

