# GS\_WLM\_OPERATOR\_STATISTICS<a name="EN-US_TOPIC_0000001105362248"></a>

**GS\_WLM\_OPERATOR\_STATISTICS**  displays the operators of the jobs that are being executed by the current user. Only users with the  **sysadmin**  permission can query this view.

**Table  1**  GS\_WLM\_OPERATOR\_STATISTICS columns

<a name="en-us_topic_0111176228_table75981925115018"></a>
<table><thead align="left"><tr id="en-us_topic_0111176228_row14599225175020"><th class="cellrowborder" valign="top" width="25.356435643564357%" id="mcps1.2.4.1.1"><p id="en-us_topic_0111176228_p1359922545010"><a name="en-us_topic_0111176228_p1359922545010"></a><a name="en-us_topic_0111176228_p1359922545010"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="27.316831683168314%" id="mcps1.2.4.1.2"><p id="en-us_topic_0111176228_p3599182520502"><a name="en-us_topic_0111176228_p3599182520502"></a><a name="en-us_topic_0111176228_p3599182520502"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="47.32673267326732%" id="mcps1.2.4.1.3"><p id="en-us_topic_0111176228_p175991225195015"><a name="en-us_topic_0111176228_p175991225195015"></a><a name="en-us_topic_0111176228_p175991225195015"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0111176228_row1059920251509"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p2519314135114"><a name="en-us_topic_0111176228_p2519314135114"></a><a name="en-us_topic_0111176228_p2519314135114"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1651921418517"><a name="en-us_topic_0111176228_p1651921418517"></a><a name="en-us_topic_0111176228_p1651921418517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p4519141415115"><a name="en-us_topic_0111176228_p4519141415115"></a><a name="en-us_topic_0111176228_p4519141415115"></a>Internal query ID used for statement execution</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row135995251509"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p14519914195120"><a name="en-us_topic_0111176228_p14519914195120"></a><a name="en-us_topic_0111176228_p14519914195120"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1651971414515"><a name="en-us_topic_0111176228_p1651971414515"></a><a name="en-us_topic_0111176228_p1651971414515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p651921410511"><a name="en-us_topic_0111176228_p651921410511"></a><a name="en-us_topic_0111176228_p651921410511"></a>Thread ID of the backend</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row19600152510500"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p85191414155117"><a name="en-us_topic_0111176228_p85191414155117"></a><a name="en-us_topic_0111176228_p85191414155117"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1951991455112"><a name="en-us_topic_0111176228_p1951991455112"></a><a name="en-us_topic_0111176228_p1951991455112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p3519101415516"><a name="en-us_topic_0111176228_p3519101415516"></a><a name="en-us_topic_0111176228_p3519101415516"></a>Plan node ID of the execution plan</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row8600162519508"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p5519131418511"><a name="en-us_topic_0111176228_p5519131418511"></a><a name="en-us_topic_0111176228_p5519131418511"></a>plan_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1951971455118"><a name="en-us_topic_0111176228_p1951971455118"></a><a name="en-us_topic_0111176228_p1951971455118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p1825284518537"><a name="en-us_topic_0111176228_p1825284518537"></a><a name="en-us_topic_0111176228_p1825284518537"></a>Name of the operator corresponding to the plan node ID</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row9600142519508"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p10519171455119"><a name="en-us_topic_0111176228_p10519171455119"></a><a name="en-us_topic_0111176228_p10519171455119"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p10519314105112"><a name="en-us_topic_0111176228_p10519314105112"></a><a name="en-us_topic_0111176228_p10519314105112"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p751971405113"><a name="en-us_topic_0111176228_p751971405113"></a><a name="en-us_topic_0111176228_p751971405113"></a>Time when the operator starts to process the first data record</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row5600025155011"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p7519141412514"><a name="en-us_topic_0111176228_p7519141412514"></a><a name="en-us_topic_0111176228_p7519141412514"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p205191014155120"><a name="en-us_topic_0111176228_p205191014155120"></a><a name="en-us_topic_0111176228_p205191014155120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p1451971495114"><a name="en-us_topic_0111176228_p1451971495114"></a><a name="en-us_topic_0111176228_p1451971495114"></a>Total execution time of the operator, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row104162389916"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p14171438299"><a name="en-us_topic_0111176228_p14171438299"></a><a name="en-us_topic_0111176228_p14171438299"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p8417938495"><a name="en-us_topic_0111176228_p8417938495"></a><a name="en-us_topic_0111176228_p8417938495"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p17417183815913"><a name="en-us_topic_0111176228_p17417183815913"></a><a name="en-us_topic_0111176228_p17417183815913"></a>Execution status of the current operator, which can be <strong id="b135431540193317"><a name="b135431540193317"></a><a name="b135431540193317"></a>finished</strong> or <strong id="b2549194093317"><a name="b2549194093317"></a><a name="b2549194093317"></a>running</strong></p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row8600182517502"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1451911141518"><a name="en-us_topic_0111176228_p1451911141518"></a><a name="en-us_topic_0111176228_p1451911141518"></a>query_dop</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p7519514155119"><a name="en-us_topic_0111176228_p7519514155119"></a><a name="en-us_topic_0111176228_p7519514155119"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p8519111485115"><a name="en-us_topic_0111176228_p8519111485115"></a><a name="en-us_topic_0111176228_p8519111485115"></a>DOP of the operator</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row5600142555015"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1151971405113"><a name="en-us_topic_0111176228_p1151971405113"></a><a name="en-us_topic_0111176228_p1151971405113"></a>estimated_rows</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p65191314155115"><a name="en-us_topic_0111176228_p65191314155115"></a><a name="en-us_topic_0111176228_p65191314155115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p15519101411512"><a name="en-us_topic_0111176228_p15519101411512"></a><a name="en-us_topic_0111176228_p15519101411512"></a>Number of rows estimated by the optimizer</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row1060022565012"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p4519181485114"><a name="en-us_topic_0111176228_p4519181485114"></a><a name="en-us_topic_0111176228_p4519181485114"></a>tuple_processed</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p2519121416514"><a name="en-us_topic_0111176228_p2519121416514"></a><a name="en-us_topic_0111176228_p2519121416514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p55195145519"><a name="en-us_topic_0111176228_p55195145519"></a><a name="en-us_topic_0111176228_p55195145519"></a>Number of elements returned by the operator</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row160019255501"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p45193142511"><a name="en-us_topic_0111176228_p45193142511"></a><a name="en-us_topic_0111176228_p45193142511"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p8519151410510"><a name="en-us_topic_0111176228_p8519151410510"></a><a name="en-us_topic_0111176228_p8519151410510"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p165191114145119"><a name="en-us_topic_0111176228_p165191114145119"></a><a name="en-us_topic_0111176228_p165191114145119"></a>Minimum peak memory used by the operator on database instances (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row560118255504"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1519121413516"><a name="en-us_topic_0111176228_p1519121413516"></a><a name="en-us_topic_0111176228_p1519121413516"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1751916147515"><a name="en-us_topic_0111176228_p1751916147515"></a><a name="en-us_topic_0111176228_p1751916147515"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p85191314135116"><a name="en-us_topic_0111176228_p85191314135116"></a><a name="en-us_topic_0111176228_p85191314135116"></a>Maximum peak memory used by the operator on database instances (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row5601125145017"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1252010141514"><a name="en-us_topic_0111176228_p1252010141514"></a><a name="en-us_topic_0111176228_p1252010141514"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p3520171413517"><a name="en-us_topic_0111176228_p3520171413517"></a><a name="en-us_topic_0111176228_p3520171413517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p15520161445117"><a name="en-us_topic_0111176228_p15520161445117"></a><a name="en-us_topic_0111176228_p15520161445117"></a>Average peak memory used by the operator on database instances (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row2601625135011"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p162135421546"><a name="en-us_topic_0111176228_p162135421546"></a><a name="en-us_topic_0111176228_p162135421546"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p02131442948"><a name="en-us_topic_0111176228_p02131442948"></a><a name="en-us_topic_0111176228_p02131442948"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p1721315421243"><a name="en-us_topic_0111176228_p1721315421243"></a><a name="en-us_topic_0111176228_p1721315421243"></a>Memory usage skew of the operator among database instances</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row1360122595016"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1752031425113"><a name="en-us_topic_0111176228_p1752031425113"></a><a name="en-us_topic_0111176228_p1752031425113"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p952021419512"><a name="en-us_topic_0111176228_p952021419512"></a><a name="en-us_topic_0111176228_p952021419512"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p752071475115"><a name="en-us_topic_0111176228_p752071475115"></a><a name="en-us_topic_0111176228_p752071475115"></a>Minimum spilled data among database instances when a spill occurs (unit: MB). The default value is <strong id="b197913514296"><a name="b197913514296"></a><a name="b197913514296"></a>0</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row196011125165015"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1952021418517"><a name="en-us_topic_0111176228_p1952021418517"></a><a name="en-us_topic_0111176228_p1952021418517"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1452018144513"><a name="en-us_topic_0111176228_p1452018144513"></a><a name="en-us_topic_0111176228_p1452018144513"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p185201314115112"><a name="en-us_topic_0111176228_p185201314115112"></a><a name="en-us_topic_0111176228_p185201314115112"></a>Maximum spilled data among database instances when a spill occurs (unit: MB). The default value is <strong id="b2159648142914"><a name="b2159648142914"></a><a name="b2159648142914"></a>0</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row14601192513507"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1352081445118"><a name="en-us_topic_0111176228_p1352081445118"></a><a name="en-us_topic_0111176228_p1352081445118"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p752061414517"><a name="en-us_topic_0111176228_p752061414517"></a><a name="en-us_topic_0111176228_p752061414517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p155201514155118"><a name="en-us_topic_0111176228_p155201514155118"></a><a name="en-us_topic_0111176228_p155201514155118"></a>Average spilled data among database instances when a spill occurs (unit: MB). The default value is <strong id="b02845580298"><a name="b02845580298"></a><a name="b02845580298"></a>0</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row1660112535017"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p19520161411513"><a name="en-us_topic_0111176228_p19520161411513"></a><a name="en-us_topic_0111176228_p19520161411513"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p85201141517"><a name="en-us_topic_0111176228_p85201141517"></a><a name="en-us_topic_0111176228_p85201141517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p1520131411519"><a name="en-us_topic_0111176228_p1520131411519"></a><a name="en-us_topic_0111176228_p1520131411519"></a>Database instance spill skew when a spill occurs</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row1960212555014"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p1052071445117"><a name="en-us_topic_0111176228_p1052071445117"></a><a name="en-us_topic_0111176228_p1052071445117"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p145200142510"><a name="en-us_topic_0111176228_p145200142510"></a><a name="en-us_topic_0111176228_p145200142510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p185204140516"><a name="en-us_topic_0111176228_p185204140516"></a><a name="en-us_topic_0111176228_p185204140516"></a>Minimum execution time of the operator on database instances (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row560262535019"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p752019149519"><a name="en-us_topic_0111176228_p752019149519"></a><a name="en-us_topic_0111176228_p752019149519"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p17520614165111"><a name="en-us_topic_0111176228_p17520614165111"></a><a name="en-us_topic_0111176228_p17520614165111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p65207145515"><a name="en-us_topic_0111176228_p65207145515"></a><a name="en-us_topic_0111176228_p65207145515"></a>Maximum execution time of the operator on database instances (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row4602425135011"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p13520181445118"><a name="en-us_topic_0111176228_p13520181445118"></a><a name="en-us_topic_0111176228_p13520181445118"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1852061414513"><a name="en-us_topic_0111176228_p1852061414513"></a><a name="en-us_topic_0111176228_p1852061414513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p1452031415113"><a name="en-us_topic_0111176228_p1452031415113"></a><a name="en-us_topic_0111176228_p1452031415113"></a>Total execution time of the operator on database instances (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row1060252515011"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p12520111475115"><a name="en-us_topic_0111176228_p12520111475115"></a><a name="en-us_topic_0111176228_p12520111475115"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p1452061412511"><a name="en-us_topic_0111176228_p1452061412511"></a><a name="en-us_topic_0111176228_p1452061412511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176228_p3520111414515"><a name="en-us_topic_0111176228_p3520111414515"></a><a name="en-us_topic_0111176228_p3520111414515"></a>Execution time skew among database instances</p>
</td>
</tr>
<tr id="en-us_topic_0111176228_row760232565014"><td class="cellrowborder" valign="top" width="25.356435643564357%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176228_p6520181475113"><a name="en-us_topic_0111176228_p6520181475113"></a><a name="en-us_topic_0111176228_p6520181475113"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="27.316831683168314%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176228_p155201314115112"><a name="en-us_topic_0111176228_p155201314115112"></a><a name="en-us_topic_0111176228_p155201314115112"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.32673267326732%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0111176228_p11224156122713"><a name="en-us_topic_0111176228_p11224156122713"></a><a name="en-us_topic_0111176228_p11224156122713"></a>Warning. The following warnings are displayed:<a name="ul529444218174"></a><a name="ul529444218174"></a><ul id="ul529444218174"><li>Sort/SetOp/HashAgg/HashJoin spill</li><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</div>
</td>
</tr>
</tbody>
</table>

