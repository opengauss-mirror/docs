# PG\_JOB\_PROC<a name="EN-US_TOPIC_0289900489"></a>

**PG\_JOB\_PROC**  records the content of each job in the  **PG\_JOB**  table, including the PL/SQL code blocks and anonymous blocks. Storing such information in the system catalog  **PG\_JOB**  and loading it to the shared memory will result in excessive memory usage. Therefore, such information is stored in a separate table and is retrieved when needed.

**Table  1**  PG\_JOB\_PROC columns

<a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_table11055115530"></a>
<table><thead align="left"><tr id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_row5106215531"><th class="cellrowborder" valign="top" width="19.96%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p7106151185311"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p7106151185311"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p7106151185311"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.49%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p1210618125312"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p1210618125312"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p1210618125312"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="62.55%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p910651155317"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p910651155317"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p910651155317"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136639_en-us_topic_0237122296_row71159151527"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_p8115715020"><a name="en-us_topic_0283136639_en-us_topic_0237122296_p8115715020"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_p8115715020"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_p8115215127"><a name="en-us_topic_0283136639_en-us_topic_0237122296_p8115215127"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_p8115215127"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_p1911581511212"><a name="en-us_topic_0283136639_en-us_topic_0237122296_p1911581511212"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_p1911581511212"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_row151078125311"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p87210105553"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p87210105553"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p87210105553"></a>job_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p972151025511"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p972151025511"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p972151025511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p207217102557"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p207217102557"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p207217102557"></a>Foreign key, which is associated with <strong id="b12233852915"><a name="b12233852915"></a><a name="b12233852915"></a>job_id</strong> in the system catalog <strong id="b1316538284"><a name="b1316538284"></a><a name="b1316538284"></a>PG_JOB</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_row1108151205317"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p1172171025510"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p1172171025510"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p1172171025510"></a>what</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p157271075515"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p157271075515"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p157271075515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p10722105555"><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p10722105555"></a><a name="en-us_topic_0283136639_en-us_topic_0237122296_en-us_topic_0059778581_p10722105555"></a>Job content, which is the program content in the DBE_SCHEDULER scheduled task.</p>
</td>
</tr>
<tr id="row65721418145818"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="p6572171818585"><a name="p6572171818585"></a><a name="p6572171818585"></a>job_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="p15732181587"><a name="p15732181587"></a><a name="p15732181587"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="p15731718205820"><a name="p15731718205820"></a><a name="p15731718205820"></a>Name of the DBE_SCHEDULER scheduled task or program.</p>
</td>
</tr>
</tbody>
</table>

