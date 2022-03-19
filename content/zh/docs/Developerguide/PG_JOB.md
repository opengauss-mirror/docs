# PG\_JOB<a name="ZH-CN_TOPIC_0289900558"></a>

PG\_JOB系统表存储用户创建的定时任务的任务详细信息，定时任务线程定时轮询pg\_job系统表中的时间，当任务到期会触发任务的执行，并更新pg\_job表中的任务状态。该系统表属于Shared Relation，所有创建的job记录对所有数据库可见。

**表 1**  PG\_JOB字段

<a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_table13959138165111"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row1096048115118"><th class="cellrowborder" valign="top" width="14.7%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p179601085518"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p179601085518"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p179601085518"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.599999999999998%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p15960185511"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p15960185511"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p15960185511"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.7%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p3960085517"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p3960085517"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p3960085517"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_row16214449210"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p1062234415210"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p1062234415210"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p1062234415210"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p116221444926"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p116221444926"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p116221444926"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p462214441621"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p462214441621"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p462214441621"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row2960188145112"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p6653144317513"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p6653144317513"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p6653144317513"></a>job_id</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p6653543155118"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p6653543155118"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p6653543155118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p165310431514"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p165310431514"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p165310431514"></a>作业ID，主键，是唯一的（有唯一索引）</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row64984839164044"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p53372863164047"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p53372863164047"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p53372863164047"></a>current_postgres_pid</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p28234657164047"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p28234657164047"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p28234657164047"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p5305904164047"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p5305904164047"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p5305904164047"></a>如果当前任务已被执行，那么此处记录运行此任务的gaussdb线程ID。默认为 -1，表示此任务未被执行过。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row1596116895116"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p196532437518"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p196532437518"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p196532437518"></a>log_user</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p86538435512"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p86538435512"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p86538435512"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p0653104395119"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p0653104395119"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p0653104395119"></a>创建者的UserName</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row4961148185118"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p146539431511"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p146539431511"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p146539431511"></a>priv_user</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p19653104315116"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p19653104315116"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p19653104315116"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p465434345113"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p465434345113"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p465434345113"></a>作业执行者的UserName</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row144841135105111"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p126541343135119"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p126541343135119"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p126541343135119"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p176541943165115"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p176541943165115"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p176541943165115"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p66541743185116"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p66541743185116"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p66541743185116"></a>标识作业要在哪个数据库执行的数据库名称</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row42918368516"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p56541243155111"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p56541243155111"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p56541243155111"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1165464385115"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1165464385115"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1165464385115"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p765414436513"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p765414436513"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p765414436513"></a>标识当前作业是在哪个<span id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_text1177124561716"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_text1177124561716"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_text1177124561716"></a>数据库主节点</span>上创建和执行</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row28778562165811"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p36929150165813"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p36929150165813"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p36929150165813"></a>job_status</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p38471170165813"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p38471170165813"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p38471170165813"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p29157095165813"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p29157095165813"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p29157095165813"></a>当前任务的执行状态，取值范围：('r', 's', 'f', 'd')，默认为's'，取值含义：</p>
<p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p61087269165813"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p61087269165813"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p61087269165813"></a>Status of job step: r=running, s=successfully finished,  f=job failed, d=disable</p>
<p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p56775864231633"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p56775864231633"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p56775864231633"></a>当job连续执行失败16次，会将job_status自动设置为失效状态'd'，后续不再执行该job。</p>
<p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1674352215225"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1674352215225"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1674352215225"></a>注：当用户将定时任务关闭（即：guc参数job_queue_processes为0时），由于监控job执行的线程不会启动，所以该状态不会根据job的实时状态进行设置，用户不需要关注此状态。只有当开启定时任务功能（即：guc参数job_queue_processes为非0时），系统才会根据当前job的实时状态刷新该字段值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row172061036185115"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p16546436511"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p16546436511"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p16546436511"></a>start_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p4655043205114"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p4655043205114"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p4655043205114"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p15655154319517"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p15655154319517"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p15655154319517"></a>作业第一次开始执行时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_row19126045142754"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p37916678142754"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p37916678142754"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p37916678142754"></a>next_run_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p51352095142754"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p51352095142754"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p51352095142754"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p65879000142754"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p65879000142754"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p65879000142754"></a>下次定时执行任务的时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_row54964865142849"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p6166319142857"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p6166319142857"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p6166319142857"></a>failure_count</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p29709868142857"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p29709868142857"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p29709868142857"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p57689097142857"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p57689097142857"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p57689097142857"></a>失败计数，作业连续执行失败16次，不再继续执行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_row59836133142853"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p45203044142857"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p45203044142857"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p45203044142857"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p37567913142857"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p37567913142857"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p37567913142857"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p23102090142857"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p23102090142857"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p23102090142857"></a>作业执行的重复时间间隔。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row18711236185110"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p166562434518"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p166562434518"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p166562434518"></a>last_start_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1365624319516"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1365624319516"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1365624319516"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p176561143105118"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p176561143105118"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p176561143105118"></a>上次运行开始时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row68771736135114"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1965613439513"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1965613439513"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1965613439513"></a>last_end_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p106561843155117"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p106561843155117"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p106561843155117"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p565674315513"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p565674315513"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p565674315513"></a>上次运行的结束时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row8461337195113"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p26561438510"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p26561438510"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p26561438510"></a>last_suc_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p26561943145117"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p26561943145117"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p26561943145117"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1265719435512"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1265719435512"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1265719435512"></a>上次成功运行的开始时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_row162162376518"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1465754375111"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1465754375111"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p1465754375111"></a>this_run_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p9657194345118"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p9657194345118"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p9657194345118"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p12657643195114"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p12657643195114"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_zh-cn_topic_0059777589_p12657643195114"></a>正在运行任务的开始时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_row13504620154815"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p1350472016482"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p1350472016482"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p1350472016482"></a>nspname</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p15059202487"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p15059202487"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p15059202487"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p18505112013489"><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p18505112013489"></a><a name="zh-cn_topic_0283136590_zh-cn_topic_0237122295_p18505112013489"></a>标识作业执行时的schema的名称。</p>
</td>
</tr>
<tr id="row93100214446"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p103101428444"><a name="p103101428444"></a><a name="p103101428444"></a>job_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p1231010294414"><a name="p1231010294414"></a><a name="p1231010294414"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="p183108217440"><a name="p183108217440"></a><a name="p183108217440"></a>DBE_SCHEDULER定时任务专用，定时任务名称。</p>
</td>
</tr>
<tr id="row1982366154413"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p1182317610440"><a name="p1182317610440"></a><a name="p1182317610440"></a>end_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p18823156194417"><a name="p18823156194417"></a><a name="p18823156194417"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="p7823116184412"><a name="p7823116184412"></a><a name="p7823116184412"></a>DBE_SCHEDULER定时任务专用，定时任务失效时间，时间精确到毫秒。</p>
</td>
</tr>
<tr id="row127764141442"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p18776201494417"><a name="p18776201494417"></a><a name="p18776201494417"></a>enable</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p8776171434414"><a name="p8776171434414"></a><a name="p8776171434414"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><div class="p" id="p15776151412445"><a name="p15776151412445"></a><a name="p15776151412445"></a>DBE_SCHEDULER定时任务专用，定时任务启用状态：<a name="ul2072841518143"></a><a name="ul2072841518143"></a><ul id="ul2072841518143"><li>true：启用</li><li>false：未启用</li></ul>
</div>
</td>
</tr>
<tr id="row111865591968"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p1718717599620"><a name="p1718717599620"></a><a name="p1718717599620"></a>failure_msg</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p1718718591567"><a name="p1718718591567"></a><a name="p1718718591567"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="p12187859765"><a name="p12187859765"></a><a name="p12187859765"></a>最新一次执行任务报错信息。</p>
</td>
</tr>
</tbody>
</table>

