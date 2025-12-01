# GS\_INSTANCE\_TIME<a name="EN-US_TOPIC_0289900080"></a>

**GS\_INSTANCE\_TIME**  records time consumption information of the current node. The time consumption information is classified into the following types:

-   DB\_TIME: effective time spent by jobs in multi-core scenarios.
-   CPU\_TIME: CPU time cost.
-   EXECUTION\_TIME: time spent in the executor.
-   PARSE\_TIME: time spent on parsing SQL statements.
-   PLAN\_TIME: time spent on generating plans.
-   REWRITE\_TIME: time spent on rewriting SQL statements.
-   PL\_EXECUTION\_TIME: execution time of the PL/pgSQL stored procedure.
-   PL\_COMPILATION\_TIME: compilation time of the PL/pgSQL stored procedure.
-   NET\_SEND\_TIME: time spent on the network.
-   DATA\_IO\_TIME: time spent on I/Os.

**Table  1**  GS\_INSTANCE\_TIME columns

<a name="en-us_topic_0283137436_en-us_topic_0237122542_table1442423914333"></a>
<table><thead align="left"><tr id="en-us_topic_0283137436_en-us_topic_0237122542_row18577739163316"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137436_en-us_topic_0237122542_p857711399331"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p857711399331"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p857711399331"></a><strong id="b593815175366"><a name="b593815175366"></a><a name="b593815175366"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="22.82%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137436_en-us_topic_0237122542_p19577239113315"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p19577239113315"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p19577239113315"></a><strong id="b3994120113614"><a name="b3994120113614"></a><a name="b3994120113614"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="59.91%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137436_en-us_topic_0237122542_p4577439153315"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p4577439153315"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p4577439153315"></a><strong id="b1562442133614"><a name="b1562442133614"></a><a name="b1562442133614"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137436_en-us_topic_0237122542_row175781339153312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p13578143993312"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p13578143993312"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p13578143993312"></a>stat_id</p>
</td>
<td class="cellrowborder" valign="top" width="22.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p1057853912337"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1057853912337"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1057853912337"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p1757873920336"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1757873920336"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1757873920336"></a>Statistics ID</p>
</td>
</tr>
<tr id="en-us_topic_0283137436_en-us_topic_0237122542_row17578153914339"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p857812394333"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p857812394333"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p857812394333"></a>stat_name</p>
</td>
<td class="cellrowborder" valign="top" width="22.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p1257873983311"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1257873983311"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1257873983311"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p13578103973319"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p13578103973319"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p13578103973319"></a>Type name</p>
</td>
</tr>
<tr id="en-us_topic_0283137436_en-us_topic_0237122542_row14578123913314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p1357933910338"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1357933910338"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p1357933910338"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="22.82%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p75791139173314"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p75791139173314"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p75791139173314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137436_en-us_topic_0237122542_p125797399330"><a name="en-us_topic_0283137436_en-us_topic_0237122542_p125797399330"></a><a name="en-us_topic_0283137436_en-us_topic_0237122542_p125797399330"></a>Time value, in μs</p>
</td>
</tr>
</tbody>
</table>

