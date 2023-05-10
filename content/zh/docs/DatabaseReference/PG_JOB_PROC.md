# PG\_JOB\_PROC

PG\_JOB\_PROC系统表对应PG\_JOB表中每个任务的作业内容（包括：PL/SQL代码块、匿名块）。将存储过程信息独立出来，如果放到PG\_JOB中，被加载到共享内存的时候，会占用不必要的空间，所以在使用的时候再进行查询获取。

**表 1**  PG\_JOB\_PROC字段

<a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_table11055115530"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_row5106215531"><th class="cellrowborder" valign="top" width="19.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p7106151185311"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p7106151185311"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p7106151185311"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.49%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p1210618125312"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p1210618125312"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p1210618125312"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="62.55%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p910651155317"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p910651155317"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p910651155317"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_row71159151527"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p8115715020"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p8115715020"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p8115715020"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p8115215127"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p8115215127"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p8115215127"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p1911581511212"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p1911581511212"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_p1911581511212"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_row151078125311"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p87210105553"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p87210105553"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p87210105553"></a>job_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p972151025511"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p972151025511"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p972151025511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p207217102557"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p207217102557"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p207217102557"></a>外键，关联pg_job表中的job_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_row1108151205317"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p1172171025510"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p1172171025510"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p1172171025510"></a>what</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p157271075515"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p157271075515"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p157271075515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p10722105555"><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p10722105555"></a><a name="zh-cn_topic_0283136639_zh-cn_topic_0237122296_zh-cn_topic_0059778581_p10722105555"></a>作业内容，DBE_SCHEDULER定时任务中的程序内容。</p>
</td>
</tr>
<tr id="row65721418145818"><td class="cellrowborder" valign="top" width="19.96%" headers="mcps1.2.4.1.1 "><p id="p6572171818585"><a name="p6572171818585"></a><a name="p6572171818585"></a>job_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.49%" headers="mcps1.2.4.1.2 "><p id="p15732181587"><a name="p15732181587"></a><a name="p15732181587"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.55%" headers="mcps1.2.4.1.3 "><p id="p15731718205820"><a name="p15731718205820"></a><a name="p15731718205820"></a>DBE_SCHEDULER定时任务专用，定时任务或程序名称。</p>
</td>
</tr>
</tbody>
</table>


