# INSTANCE\_TIME<a name="EN-US_TOPIC_0289900716"></a>

**INSTANCE\_TIME**  records time consumption information on the current database node. The time consumption information is classified into the following types:

-   DB\_TIME: effective time spent by jobs in multi-core scenarios
-   CPU\_TIME: CPU time cost.
-   EXECUTION\_TIME: time spent in the executor.
-   PARSE\_TIME: time spent on parsing SQL statements
-   PLAN\_TIME: time spent on generating plans
-   REWRITE\_TIME: time spent on rewriting SQL statements
-   PL\_COMPILATION\_TIME: compilation time of the PL/pgSQL stored procedure.
-   PL\_COMPILATION\_TIME: compilation time of the PL/pgSQL stored procedure
-   NET\_SEND\_TIME: time spent on the network
-   DATA\_IO\_TIME: time spent on I/Os.
-   SRT1_Q: Q报文件执行耗时
-   SRT2_SIMPLE_QUERY
-   SRT3_ANALYZE_REWRITE
-   SRT4_PLAN_QUERY
-   SRT5_LIGHT_QUERY
-   SRT6_P
-   SRT7_B
-   SRT8_E
-   SRT9_D
-   SRT10_S
-   SRT11_C
-   SRT12_U
-   SRT13_BEFORE_QUERY
-   SRT14_AFTER_QUERY
-   RTT_UNKNOWN

**Table  1**  INSTANCE\_TIME columns

<a name="en-us_topic_0283136931_en-us_topic_0237122557_table1442423914333"></a>
<table><thead align="left"><tr id="en-us_topic_0283136931_en-us_topic_0237122557_row18577739163316"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136931_en-us_topic_0237122557_p857711399331"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p857711399331"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p857711399331"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136931_en-us_topic_0237122557_p19577239113315"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p19577239113315"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p19577239113315"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136931_en-us_topic_0237122557_p4577439153315"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p4577439153315"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p4577439153315"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136931_en-us_topic_0237122557_row175781339153312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p13578143993312"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p13578143993312"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p13578143993312"></a>stat_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p1057853912337"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1057853912337"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1057853912337"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p1757873920336"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1757873920336"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1757873920336"></a>Statistics ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136931_en-us_topic_0237122557_row17578153914339"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p857812394333"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p857812394333"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p857812394333"></a>stat_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p1257873983311"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1257873983311"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1257873983311"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p13578103973319"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p13578103973319"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p13578103973319"></a>Type name</p>
</td>
</tr>
<tr id="en-us_topic_0283136931_en-us_topic_0237122557_row14578123913314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p1357933910338"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1357933910338"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p1357933910338"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p75791139173314"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p75791139173314"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p75791139173314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136931_en-us_topic_0237122557_p125797399330"><a name="en-us_topic_0283136931_en-us_topic_0237122557_p125797399330"></a><a name="en-us_topic_0283136931_en-us_topic_0237122557_p125797399330"></a>Time value (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

