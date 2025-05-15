# DBMind的AI子功能<a name="ZH-CN_TOPIC_0000002294398245"></a>

用户可以通过gs\_dbmind的component子命令启动对应的AI子功能，下述章节展示不同AI功能的具体内容和使用详情。

## DBMind定时任务<a name="zh-cn_topic_0000001667029540_section1512644632118"></a>

DBMind内嵌了可定期拉起并自动执行的定时任务，可以在DBMind的配置文件confpath/dbmind.conf中开启或关闭特定的定时任务。DBMind已经支持的定时任务，以及其对应的简要说明，可以在dbmind.conf中的\[TIMED\_TASK\_LIST\]中查看。

-   要开启一个定时任务：在dbmind.conf中的\[TIMED\_TASK\_LIST\]中找到要开启的定时任务的名称，然后将其编辑加入\[TIMED\_TASK\]的TASK字段中并保存，用","分割多个定时任务。例如，要开启"清理元数据库中的超期数据"的定时任务，可以在\[TIMED\_TASK\]的TASK字段中编辑加入"discard\_expired\_results"。
-   要关闭一个定时任务：在dbmind.conf中的\[TIMED\_TASK\]的TASK字段中，将需要关闭的定时任务编辑删除并保存。

在dbmind.conf中\[TIMED\_TASK\]的其他字段下可以自行配置各个定时任务自动执行周期，如：配置"discard\_expired\_results\_interval"对应的值，可以对应地修改“清理元数据库中的超期数据”定时任务的自动执行周期。

修改配置文件后运行如下命令使修改生效：

```
gs_dbmind service reload -c confpath
```

**表 1**  DBMind内嵌的定时任务说明

<a name="zh-cn_topic_0000001667029540_table6143996457"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001667029540_row4143149154514"><th class="cellrowborder" valign="top" width="16.77664467106579%" id="mcps1.2.7.1.1"><p id="zh-cn_topic_0000001667029540_p1114379144512"><a name="zh-cn_topic_0000001667029540_p1114379144512"></a><a name="zh-cn_topic_0000001667029540_p1114379144512"></a>定时任务名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.556688662267547%" id="mcps1.2.7.1.2"><p id="zh-cn_topic_0000001667029540_p4143992452"><a name="zh-cn_topic_0000001667029540_p4143992452"></a><a name="zh-cn_topic_0000001667029540_p4143992452"></a>定时任务说明</p>
</th>
<th class="cellrowborder" valign="top" width="21.975604879024196%" id="mcps1.2.7.1.3"><p id="zh-cn_topic_0000001667029540_p121431910450"><a name="zh-cn_topic_0000001667029540_p121431910450"></a><a name="zh-cn_topic_0000001667029540_p121431910450"></a>定时任务自动执行周期配置字段</p>
</th>
<th class="cellrowborder" valign="top" width="8.708258348330332%" id="mcps1.2.7.1.4"><p id="zh-cn_topic_0000001667029540_p1914310919454"><a name="zh-cn_topic_0000001667029540_p1914310919454"></a><a name="zh-cn_topic_0000001667029540_p1914310919454"></a>默认自动执行周期（秒）</p>
</th>
<th class="cellrowborder" valign="top" width="5.78884223155369%" id="mcps1.2.7.1.5"><p id="zh-cn_topic_0000001667029540_p13143169204518"><a name="zh-cn_topic_0000001667029540_p13143169204518"></a><a name="zh-cn_topic_0000001667029540_p13143169204518"></a>是否默认启动</p>
</th>
<th class="cellrowborder" valign="top" width="30.193961207758445%" id="mcps1.2.7.1.6"><p id="zh-cn_topic_0000001667029540_p41441495452"><a name="zh-cn_topic_0000001667029540_p41441495452"></a><a name="zh-cn_topic_0000001667029540_p41441495452"></a>额外说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001667029540_row1314410919450"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p614469194520"><a name="zh-cn_topic_0000001667029540_p614469194520"></a><a name="zh-cn_topic_0000001667029540_p614469194520"></a>anomaly_detection</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p91441595452"><a name="zh-cn_topic_0000001667029540_p91441595452"></a><a name="zh-cn_topic_0000001667029540_p91441595452"></a>异常检测</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p161447919458"><a name="zh-cn_topic_0000001667029540_p161447919458"></a><a name="zh-cn_topic_0000001667029540_p161447919458"></a>anomaly_detection_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p131446920452"><a name="zh-cn_topic_0000001667029540_p131446920452"></a><a name="zh-cn_topic_0000001667029540_p131446920452"></a>180</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p18144894453"><a name="zh-cn_topic_0000001667029540_p18144894453"></a><a name="zh-cn_topic_0000001667029540_p18144894453"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p1914417974511"><a name="zh-cn_topic_0000001667029540_p1914417974511"></a><a name="zh-cn_topic_0000001667029540_p1914417974511"></a>不建议关闭，否则将无法进行实时指标异常监控，历史告警将停止更新。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row5144189184516"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p81441692455"><a name="zh-cn_topic_0000001667029540_p81441692455"></a><a name="zh-cn_topic_0000001667029540_p81441692455"></a>discard_expired_results</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p141440920451"><a name="zh-cn_topic_0000001667029540_p141440920451"></a><a name="zh-cn_topic_0000001667029540_p141440920451"></a>清理元数据库中的超期数据</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p19144199204518"><a name="zh-cn_topic_0000001667029540_p19144199204518"></a><a name="zh-cn_topic_0000001667029540_p19144199204518"></a>discard_expired_results_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p914420904514"><a name="zh-cn_topic_0000001667029540_p914420904514"></a><a name="zh-cn_topic_0000001667029540_p914420904514"></a>3600</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p114449124512"><a name="zh-cn_topic_0000001667029540_p114449124512"></a><a name="zh-cn_topic_0000001667029540_p114449124512"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p21448918450"><a name="zh-cn_topic_0000001667029540_p21448918450"></a><a name="zh-cn_topic_0000001667029540_p21448918450"></a>不建议关闭，否则元数据中存储的时效性数据，如历史告警、历史集群诊断记录将持续增长，元数据库大小将持续膨胀。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row161446911454"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p13144196458"><a name="zh-cn_topic_0000001667029540_p13144196458"></a><a name="zh-cn_topic_0000001667029540_p13144196458"></a>knob_recommend</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p7144169194520"><a name="zh-cn_topic_0000001667029540_p7144169194520"></a><a name="zh-cn_topic_0000001667029540_p7144169194520"></a>参数推荐</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p1114415984519"><a name="zh-cn_topic_0000001667029540_p1114415984519"></a><a name="zh-cn_topic_0000001667029540_p1114415984519"></a>knob_recommend_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p171441599456"><a name="zh-cn_topic_0000001667029540_p171441599456"></a><a name="zh-cn_topic_0000001667029540_p171441599456"></a>3600</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p11449915458"><a name="zh-cn_topic_0000001667029540_p11449915458"></a><a name="zh-cn_topic_0000001667029540_p11449915458"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p61442911455"><a name="zh-cn_topic_0000001667029540_p61442911455"></a><a name="zh-cn_topic_0000001667029540_p61442911455"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row1214411914516"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p1414415944516"><a name="zh-cn_topic_0000001667029540_p1414415944516"></a><a name="zh-cn_topic_0000001667029540_p1414415944516"></a>slow_query_killer</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p1144209104520"><a name="zh-cn_topic_0000001667029540_p1144209104520"></a><a name="zh-cn_topic_0000001667029540_p1144209104520"></a>慢SQL查杀</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p20144998450"><a name="zh-cn_topic_0000001667029540_p20144998450"></a><a name="zh-cn_topic_0000001667029540_p20144998450"></a>slow_query_killer_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p171442994514"><a name="zh-cn_topic_0000001667029540_p171442994514"></a><a name="zh-cn_topic_0000001667029540_p171442994514"></a>30</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p111444918457"><a name="zh-cn_topic_0000001667029540_p111444918457"></a><a name="zh-cn_topic_0000001667029540_p111444918457"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p814499174515"><a name="zh-cn_topic_0000001667029540_p814499174515"></a><a name="zh-cn_topic_0000001667029540_p814499174515"></a>不支持备机上的查杀操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row1214420913458"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p3145139134513"><a name="zh-cn_topic_0000001667029540_p3145139134513"></a><a name="zh-cn_topic_0000001667029540_p3145139134513"></a>slow_query_diagnosis</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p121451095451"><a name="zh-cn_topic_0000001667029540_p121451095451"></a><a name="zh-cn_topic_0000001667029540_p121451095451"></a>慢SQL诊断</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p1914519924511"><a name="zh-cn_topic_0000001667029540_p1914519924511"></a><a name="zh-cn_topic_0000001667029540_p1914519924511"></a>slow_query_diagnosis_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p3145695457"><a name="zh-cn_topic_0000001667029540_p3145695457"></a><a name="zh-cn_topic_0000001667029540_p3145695457"></a>120</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p21451694453"><a name="zh-cn_topic_0000001667029540_p21451694453"></a><a name="zh-cn_topic_0000001667029540_p21451694453"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p1114511914459"><a name="zh-cn_topic_0000001667029540_p1114511914459"></a><a name="zh-cn_topic_0000001667029540_p1114511914459"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row5145098457"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p1114516924514"><a name="zh-cn_topic_0000001667029540_p1114516924514"></a><a name="zh-cn_topic_0000001667029540_p1114516924514"></a>cluster_diagnose</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p1914539164512"><a name="zh-cn_topic_0000001667029540_p1914539164512"></a><a name="zh-cn_topic_0000001667029540_p1914539164512"></a>集群诊断</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p01457984516"><a name="zh-cn_topic_0000001667029540_p01457984516"></a><a name="zh-cn_topic_0000001667029540_p01457984516"></a>cluster_diagnose_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p1114519974515"><a name="zh-cn_topic_0000001667029540_p1114519974515"></a><a name="zh-cn_topic_0000001667029540_p1114519974515"></a>30</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p2014514964510"><a name="zh-cn_topic_0000001667029540_p2014514964510"></a><a name="zh-cn_topic_0000001667029540_p2014514964510"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p121452090455"><a name="zh-cn_topic_0000001667029540_p121452090455"></a><a name="zh-cn_topic_0000001667029540_p121452090455"></a>不建议关闭，否则将无法进行实时集群异常诊断，历史集群诊断列表将停止更新。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row4145169104515"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p1914589134515"><a name="zh-cn_topic_0000001667029540_p1914589134515"></a><a name="zh-cn_topic_0000001667029540_p1914589134515"></a>agent_update_detect</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p1614511912455"><a name="zh-cn_topic_0000001667029540_p1614511912455"></a><a name="zh-cn_topic_0000001667029540_p1614511912455"></a>Agent自动检测</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p151459924519"><a name="zh-cn_topic_0000001667029540_p151459924519"></a><a name="zh-cn_topic_0000001667029540_p151459924519"></a>agent_update_detect_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p914511994520"><a name="zh-cn_topic_0000001667029540_p914511994520"></a><a name="zh-cn_topic_0000001667029540_p914511994520"></a>30</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p121451994452"><a name="zh-cn_topic_0000001667029540_p121451994452"></a><a name="zh-cn_topic_0000001667029540_p121451994452"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p1914519174517"><a name="zh-cn_topic_0000001667029540_p1914519174517"></a><a name="zh-cn_topic_0000001667029540_p1914519174517"></a>不建议关闭，该定时任务可定时检测实例的纳管情况，从而在纳管实例发生变化时（如主备倒换、增加纳管、减少纳管、扩缩容等）及时更新异常检测器的检测范围。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row17336149204711"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p633614498472"><a name="zh-cn_topic_0000001667029540_p633614498472"></a><a name="zh-cn_topic_0000001667029540_p633614498472"></a>calibrate_security_metrics</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p7336149184713"><a name="zh-cn_topic_0000001667029540_p7336149184713"></a><a name="zh-cn_topic_0000001667029540_p7336149184713"></a>自安全指标校准</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p43361349144710"><a name="zh-cn_topic_0000001667029540_p43361349144710"></a><a name="zh-cn_topic_0000001667029540_p43361349144710"></a>calibrate_security_metrics_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p73361849124712"><a name="zh-cn_topic_0000001667029540_p73361849124712"></a><a name="zh-cn_topic_0000001667029540_p73361849124712"></a>600</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p1733611492475"><a name="zh-cn_topic_0000001667029540_p1733611492475"></a><a name="zh-cn_topic_0000001667029540_p1733611492475"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p63361349144716"><a name="zh-cn_topic_0000001667029540_p63361349144716"></a><a name="zh-cn_topic_0000001667029540_p63361349144716"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row1730351114718"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p1173005114478"><a name="zh-cn_topic_0000001667029540_p1173005114478"></a><a name="zh-cn_topic_0000001667029540_p1173005114478"></a>check_security_metrics</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p77302517477"><a name="zh-cn_topic_0000001667029540_p77302517477"></a><a name="zh-cn_topic_0000001667029540_p77302517477"></a>自安全异常检测</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p6730155144717"><a name="zh-cn_topic_0000001667029540_p6730155144717"></a><a name="zh-cn_topic_0000001667029540_p6730155144717"></a>check_security_metrics_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p12730165184715"><a name="zh-cn_topic_0000001667029540_p12730165184715"></a><a name="zh-cn_topic_0000001667029540_p12730165184715"></a>600</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p5730165154712"><a name="zh-cn_topic_0000001667029540_p5730165154712"></a><a name="zh-cn_topic_0000001667029540_p5730165154712"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p27301051144712"><a name="zh-cn_topic_0000001667029540_p27301051144712"></a><a name="zh-cn_topic_0000001667029540_p27301051144712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029540_row177941953144710"><td class="cellrowborder" valign="top" width="16.77664467106579%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029540_p8794115318475"><a name="zh-cn_topic_0000001667029540_p8794115318475"></a><a name="zh-cn_topic_0000001667029540_p8794115318475"></a>update_statistics</p>
</td>
<td class="cellrowborder" valign="top" width="16.556688662267547%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029540_p1079465314712"><a name="zh-cn_topic_0000001667029540_p1079465314712"></a><a name="zh-cn_topic_0000001667029540_p1079465314712"></a>长周期监控指标统计值计算</p>
</td>
<td class="cellrowborder" valign="top" width="21.975604879024196%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029540_p479425312477"><a name="zh-cn_topic_0000001667029540_p479425312477"></a><a name="zh-cn_topic_0000001667029540_p479425312477"></a>update_statistic_interval</p>
</td>
<td class="cellrowborder" valign="top" width="8.708258348330332%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029540_p157941653164712"><a name="zh-cn_topic_0000001667029540_p157941653164712"></a><a name="zh-cn_topic_0000001667029540_p157941653164712"></a>1800</p>
</td>
<td class="cellrowborder" valign="top" width="5.78884223155369%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029540_p137942053154715"><a name="zh-cn_topic_0000001667029540_p137942053154715"></a><a name="zh-cn_topic_0000001667029540_p137942053154715"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="30.193961207758445%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029540_p279413538472"><a name="zh-cn_topic_0000001667029540_p279413538472"></a><a name="zh-cn_topic_0000001667029540_p279413538472"></a>不建议关闭，否则长周期持久化存储的指标将停止更新，影响亚健康相关的诊断结果。</p>
</td>
</tr>
</tbody>
</table>

-   **[X-Tuner](X-Tuner.md)**  

-   **[Index-advisor](Index-advisor.md)**  

-   **[Slow Query Diagnosis](Slow-Query-Diagnosis.md)**  

-   **[SQLdiag](SQLdiag.md)**  

-   **[SQL Rewriter](SQL-Rewriter.md)**  

-   **[Anomaly detection](Anomaly-detection.md)**  

-   **[Cluster Diagnosis](Cluster-Diagnosis.md)**  

-   **[智能巡检](智能巡检.md)**  

