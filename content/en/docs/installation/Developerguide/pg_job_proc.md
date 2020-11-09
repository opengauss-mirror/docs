# PG\_JOB\_PROC<a name="EN-US_TOPIC_0242385824"></a>

**PG\_JOB\_PROC**  records the content of each job in the  **PG\_JOB**  table, including the PL/SQL code blocks and anonymous blocks. Storing such information in the system catalog  **PG\_JOB**  and loading it to the shared memory will result in excessive memory usage. Therefore, such information is stored in a separate table and is retrieved when needed.

**Table  1**  PG\_JOB\_PROC columns

<a name="en-us_topic_0237122296_en-us_topic_0059778581_table11055115530"></a>
<table><thead align="left"><tr id="en-us_topic_0237122296_en-us_topic_0059778581_row5106215531"><th class="cellrowborder" valign="top" width="19.96%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122296_en-us_topic_0059778581_p7106151185311"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p7106151185311"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p7106151185311"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.49%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122296_en-us_topic_0059778581_p1210618125312"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p1210618125312"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p1210618125312"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="62.55%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122296_en-us_topic_0059778581_p910651155317"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p910651155317"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p910651155317"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122296_row71159151527"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122296_p8115715020"><a name="en-us_topic_0237122296_p8115715020"></a><a name="en-us_topic_0237122296_p8115715020"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122296_p8115215127"><a name="en-us_topic_0237122296_p8115215127"></a><a name="en-us_topic_0237122296_p8115215127"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122296_p1911581511212"><a name="en-us_topic_0237122296_p1911581511212"></a><a name="en-us_topic_0237122296_p1911581511212"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0237122296_en-us_topic_0059778581_row151078125311"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122296_en-us_topic_0059778581_p87210105553"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p87210105553"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p87210105553"></a>job_oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122296_en-us_topic_0059778581_p972151025511"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p972151025511"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p972151025511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122296_en-us_topic_0059778581_p207217102557"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p207217102557"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p207217102557"></a>Associated with job_id in the system catalog <strong id="b53651205474"><a name="b53651205474"></a><a name="b53651205474"></a>PG_JOB</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122296_en-us_topic_0059778581_row1108151205317"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122296_en-us_topic_0059778581_p1172171025510"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p1172171025510"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p1172171025510"></a>what</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122296_en-us_topic_0059778581_p157271075515"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p157271075515"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p157271075515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122296_en-us_topic_0059778581_p10722105555"><a name="en-us_topic_0237122296_en-us_topic_0059778581_p10722105555"></a><a name="en-us_topic_0237122296_en-us_topic_0059778581_p10722105555"></a>PL/SQL blocks or anonymous block that the job executes</p>
</td>
</tr>
</tbody>
</table>

