# PG\_JOB<a name="EN-US_TOPIC_0289900558"></a>

**PG\_JOB**  records detailed information about jobs created by users. Dedicated threads poll the system catalog  **PG\_JOB**  and trigger jobs based on scheduled job execution time, and update job status in  **PG\_JOB**. This system catalog belongs to the Shared Relation category. All job records are visible to all databases.

**Table  1**  PG\_JOB columns

<a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_table13959138165111"></a>
<table><thead align="left"><tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row1096048115118"><th class="cellrowborder" valign="top" width="14.7%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p179601085518"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p179601085518"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p179601085518"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="20.599999999999998%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p15960185511"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p15960185511"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p15960185511"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="64.7%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p3960085517"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p3960085517"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p3960085517"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136590_en-us_topic_0237122295_row16214449210"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p1062234415210"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p1062234415210"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p1062234415210"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p116221444926"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p116221444926"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p116221444926"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p462214441621"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p462214441621"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p462214441621"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row2960188145112"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p6653144317513"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p6653144317513"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p6653144317513"></a>job_id</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p6653543155118"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p6653543155118"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p6653543155118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p165310431514"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p165310431514"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p165310431514"></a>Job ID, primary key, unique (with a unique index)</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row64984839164044"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p53372863164047"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p53372863164047"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p53372863164047"></a>current_postgres_pid</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p28234657164047"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p28234657164047"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p28234657164047"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p5305904164047"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p5305904164047"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p5305904164047"></a>If the current job has been executed, the GaussDB thread ID of this job is recorded. The default value is <strong id="en-us_topic_0237122295_b842352706172928"><a name="en-us_topic_0237122295_b842352706172928"></a><a name="en-us_topic_0237122295_b842352706172928"></a>–1</strong>, indicating that the job has not yet been executed.</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row1596116895116"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p196532437518"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p196532437518"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p196532437518"></a>log_user</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p86538435512"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p86538435512"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p86538435512"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p0653104395119"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p0653104395119"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p0653104395119"></a>Username of the job creator</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row4961148185118"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p146539431511"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p146539431511"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p146539431511"></a>priv_user</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p19653104315116"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p19653104315116"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p19653104315116"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p465434345113"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p465434345113"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p465434345113"></a>Username of the job executor</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row144841135105111"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p126541343135119"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p126541343135119"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p126541343135119"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p176541943165115"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p176541943165115"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p176541943165115"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p66541743185116"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p66541743185116"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p66541743185116"></a>Name of the database in which the job will be executed</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row42918368516"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p56541243155111"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p56541243155111"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p56541243155111"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1165464385115"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1165464385115"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1165464385115"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p765414436513"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p765414436513"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p765414436513"></a><span id="en-us_topic_0283136590_en-us_topic_0237122295_text1177124561716"><a name="en-us_topic_0283136590_en-us_topic_0237122295_text1177124561716"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_text1177124561716"></a>Primary database node</span> on which the job will be executed</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row28778562165811"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p36929150165813"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p36929150165813"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p36929150165813"></a>job_status</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p38471170165813"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p38471170165813"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p38471170165813"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p29157095165813"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p29157095165813"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p29157095165813"></a>Status of the job. The value can be <strong id="en-us_topic_0237122295_b84235270614429"><a name="en-us_topic_0237122295_b84235270614429"></a><a name="en-us_topic_0237122295_b84235270614429"></a>r</strong>, <strong id="en-us_topic_0237122295_b8788195412494"><a name="en-us_topic_0237122295_b8788195412494"></a><a name="en-us_topic_0237122295_b8788195412494"></a>s</strong>, <strong id="en-us_topic_0237122295_b274045216496"><a name="en-us_topic_0237122295_b274045216496"></a><a name="en-us_topic_0237122295_b274045216496"></a>f</strong>, or <strong id="en-us_topic_0237122295_b182065503497"><a name="en-us_topic_0237122295_b182065503497"></a><a name="en-us_topic_0237122295_b182065503497"></a>d</strong>. The default value is <strong id="en-us_topic_0237122295_b842352706173734"><a name="en-us_topic_0237122295_b842352706173734"></a><a name="en-us_topic_0237122295_b842352706173734"></a>s</strong>. The indications are as follows:</p>
<p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p61087269165813"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p61087269165813"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p61087269165813"></a>Status of job step: r=running, s=successfully finished,  f=job failed, d=disable</p>
<p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p56775864231633"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p56775864231633"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p56775864231633"></a>If a job fails to be executed for 16 consecutive times, <strong id="en-us_topic_0237122295_b842352706144344"><a name="en-us_topic_0237122295_b842352706144344"></a><a name="en-us_topic_0237122295_b842352706144344"></a>job_status</strong> is automatically set to <strong id="en-us_topic_0237122295_b204292623614446"><a name="en-us_topic_0237122295_b204292623614446"></a><a name="en-us_topic_0237122295_b204292623614446"></a>d</strong>, and no more attempt will be made on this job.</p>
<p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1674352215225"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1674352215225"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1674352215225"></a>Note: When you disable a scheduled task (by setting <strong id="en-us_topic_0237122295_b842352706105035"><a name="en-us_topic_0237122295_b842352706105035"></a><a name="en-us_topic_0237122295_b842352706105035"></a>job_queue_processes</strong> to <strong id="en-us_topic_0237122295_b842352706105039"><a name="en-us_topic_0237122295_b842352706105039"></a><a name="en-us_topic_0237122295_b842352706105039"></a>0</strong>), the thread that monitors the job execution is not started, and the job status will not be updated. You can ignore this status. Only when the scheduled task function is enabled (<strong id="en-us_topic_0237122295_b84235270611821"><a name="en-us_topic_0237122295_b84235270611821"></a><a name="en-us_topic_0237122295_b84235270611821"></a>job_queue_processes</strong> is not set to <strong id="en-us_topic_0237122295_b84235270611825"><a name="en-us_topic_0237122295_b84235270611825"></a><a name="en-us_topic_0237122295_b84235270611825"></a>0</strong>), the system updates the value of this column based on the real-time job status.</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row172061036185115"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p16546436511"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p16546436511"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p16546436511"></a>start_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p4655043205114"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p4655043205114"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p4655043205114"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p15655154319517"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p15655154319517"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p15655154319517"></a>Start time of the first job execution, accurate to millisecond</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_row19126045142754"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p37916678142754"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p37916678142754"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p37916678142754"></a>next_run_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p51352095142754"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p51352095142754"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p51352095142754"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p65879000142754"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p65879000142754"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p65879000142754"></a>Scheduled time of the next job execution, accurate to millisecond</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_row54964865142849"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p6166319142857"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p6166319142857"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p6166319142857"></a>failure_count</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p29709868142857"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p29709868142857"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p29709868142857"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p57689097142857"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p57689097142857"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p57689097142857"></a>Number of times the job has started and failed. If a job fails to be executed for 16 consecutive times, no more attempt will be made on it.</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_row59836133142853"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p45203044142857"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p45203044142857"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p45203044142857"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p37567913142857"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p37567913142857"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p37567913142857"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p23102090142857"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p23102090142857"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p23102090142857"></a>Job execution interval</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row18711236185110"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p166562434518"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p166562434518"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p166562434518"></a>last_start_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1365624319516"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1365624319516"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1365624319516"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p176561143105118"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p176561143105118"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p176561143105118"></a>Start time of the last job execution, accurate to millisecond</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row68771736135114"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1965613439513"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1965613439513"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1965613439513"></a>last_end_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p106561843155117"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p106561843155117"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p106561843155117"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p565674315513"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p565674315513"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p565674315513"></a>End time of the last job execution, accurate to millisecond</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row8461337195113"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p26561438510"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p26561438510"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p26561438510"></a>last_suc_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p26561943145117"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p26561943145117"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p26561943145117"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1265719435512"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1265719435512"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1265719435512"></a>Start time of the last successful job execution, accurate to millisecond</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_row162162376518"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1465754375111"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1465754375111"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p1465754375111"></a>this_run_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p9657194345118"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p9657194345118"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p9657194345118"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p12657643195114"><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p12657643195114"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_en-us_topic_0059777589_p12657643195114"></a>Start time of the ongoing job execution, accurate to millisecond</p>
</td>
</tr>
<tr id="en-us_topic_0283136590_en-us_topic_0237122295_row13504620154815"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p1350472016482"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p1350472016482"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p1350472016482"></a>nspname</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p15059202487"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p15059202487"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p15059202487"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136590_en-us_topic_0237122295_p18505112013489"><a name="en-us_topic_0283136590_en-us_topic_0237122295_p18505112013489"></a><a name="en-us_topic_0283136590_en-us_topic_0237122295_p18505112013489"></a>Name of the schema used for job execution</p>
</td>
</tr>
<tr id="row93100214446"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p103101428444"><a name="p103101428444"></a><a name="p103101428444"></a>job_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p1231010294414"><a name="p1231010294414"></a><a name="p1231010294414"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="p183108217440"><a name="p183108217440"></a><a name="p183108217440"></a>Name of the DBE_SCHEDULER scheduled task.</p>
</td>
</tr>
<tr id="row1982366154413"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p1182317610440"><a name="p1182317610440"></a><a name="p1182317610440"></a>end_date</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p18823156194417"><a name="p18823156194417"></a><a name="p18823156194417"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="p7823116184412"><a name="p7823116184412"></a><a name="p7823116184412"></a>Expiration time of the DBE_SCHEDULER scheduled task, accurate to millisecond.</p>
</td>
</tr>
<tr id="row127764141442"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p18776201494417"><a name="p18776201494417"></a><a name="p18776201494417"></a>enable</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p8776171434414"><a name="p8776171434414"></a><a name="p8776171434414"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><div class="p" id="p15776151412445"><a name="p15776151412445"></a><a name="p15776151412445"></a>The DBE_SCHEDULER scheduled task enabling status. The options are as follows:<a name="ul2072841518143"></a><a name="ul2072841518143"></a><ul id="ul2072841518143"><li><strong id="b1696824610575"><a name="b1696824610575"></a><a name="b1696824610575"></a>true</strong>: enabled</li><li><strong id="b57322481574"><a name="b57322481574"></a><a name="b57322481574"></a>false</strong>: disabled</li></ul>
</div>
</td>
</tr>
<tr id="row111865591968"><td class="cellrowborder" valign="top" width="14.7%" headers="mcps1.2.4.1.1 "><p id="p1718717599620"><a name="p1718717599620"></a><a name="p1718717599620"></a>failure_msg</p>
</td>
<td class="cellrowborder" valign="top" width="20.599999999999998%" headers="mcps1.2.4.1.2 "><p id="p1718718591567"><a name="p1718718591567"></a><a name="p1718718591567"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.7%" headers="mcps1.2.4.1.3 "><p id="p12187859765"><a name="p12187859765"></a><a name="p12187859765"></a>Error information about the latest task execution.</p>
</td>
</tr>
</tbody>
</table>

