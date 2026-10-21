---
description: This document describes Intelligent Inspection in openGauss, covering topics such as Overview, Usage Guide.
keywords: [openGauss, Intelligent Inspection, features, Overview, Usage Guide]
---

# Intelligent Inspection<a name="ZH-CN_TOPIC_0000002259758188"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T02:04:04.308Z -->

## Overview<a name="ZH-CN_TOPIC_0000002294398333"></a>

In live-network services, database instances need to be inspected periodically with health reports output. DBMind builds more than 20 inspection items, including hardware status, instance status, database resources, database performance, and diagnosis and optimization, and performs risk assessment on the trends of key resource metrics to prevent hard-to-detect potential issues from affecting instance health. In addition, it supports generating daily, weekly, and monthly reports for users to view, and provides a health score based on the current inspection items. Users can customize alarm thresholds for inspection items to adjust them based on service characteristics and avoid meaningless alarms.

>[!NOTE]Note
>
>- Constraints on generating monthly and weekly reports:
>- If no daily report is built, weekly and monthly reports cannot be generated.
>- When the number of daily reports does not cover 7 consecutive days, the weekly report for these 7 days cannot be generated.
>- When the number of daily reports does not cover 14 or more consecutive days, the corresponding monthly report cannot be generated.
>- If the instance IP address or port changes, weekly/monthly reports cannot be generated.
>- If a node instance is deleted, weekly/monthly reports cannot be generated.
>- When generating weekly and monthly reports on a scheduled basis, control the concurrency to avoid affecting real-time tasks.
>- In the configuration file, the IP address mapping of instances must be recorded in ip\_map; otherwise, the management IP address of the instance cannot be guaranteed to be obtained during inspection.
>- Weekly and monthly reports support inspection of all inspection items only, and do not support concatenation of some inspection items. Therefore, custom thresholds for weekly and monthly reports must be passed by the frontend, following the same rules as real-time inspection. Inspection items without passed thresholds do not trigger alarms by default (except for some inspection items controlled by the frontend; see [Usage Guide](#useguide)).
>- When calling the inspection API, an instance must be passed, and the instance must be the primary database instance.
>- In intelligent inspection, inspection items such as db\_size, buffer\_hit\_rate, db\_tmp\_file, db\_deadlock, and db\_transaction display only the database results of the primary node. If the primary node switches, such as during a primary/standby switchover, the results may jump (concatenation of results from different nodes).
>- In intelligent inspection, inspection items such as db\_size, buffer\_hit\_rate, db\_transaction, db\_tmp\_file, and db\_deadlock display only the database results of the primary node; inspection items such as user\_login\_out, db\_latency, and thread\_pool display the results of all nodes; and the xlog\_accumulate inspection item displays the results of all nodes.
>- To ensure that no key information is missed, the log\_error\_check and core\_dump inspection items support analysis of data from only the last 45 hours in real-time inspection. Data analysis of other inspection items must not exceed the data storage range of the TSDB (time-series database) to ensure data integrity and availability.
>- Whether or not GUC parameter inspection is selected for daily reports, it does not affect the full verification of weekly and monthly inspections, and weekly/monthly reports can still be generated. In addition, if GUC parameter inspection is not selected for weekly and monthly reports, GUC parameter inspection results are not obtained; if GUC parameter inspection is selected, GUC parameter inspection results are generated.
>- Intelligent inspection does not support disaster recovery database instances.
>- When a database instance has only a single node, the ping\_packet\_rate metric has no data, so network status inspection cannot be performed to obtain the corresponding data.
>- The dynamic memory, program memory, and other memory inspection items depend on the pg\_total\_memory\_detail\_mbytes metric. When the pv\_total\_memory\_detail view cannot be queried, the related data cannot be obtained for inspection.
>- In scenarios with high load, network exceptions, or unavailable database instances, the inspection function is unavailable.
>- Because the oldestXmin not-advanced-for-a-long-time inspection item needs to collect 12 hours of data to determine whether it has advanced, this inspection item has no data in the first 12 hours.
>- Except for the top\_query, long\_transaction, and guc\_param inspection items, which use the current value as the inspection result, all other inspection items use data within the start and end time range for inspection. The default time range of real-time inspection is \[ current time - 6 hours, current time \], and the default time range of daily inspection is \[ yesterday 00:00, today 00:00\].
>- When data is constructed in Prometheus so that two instances have identical data, DBMind depends on Prometheus for data collection and therefore cannot determine whether the data is abnormal. In this constructed scenario, the accuracy of inspection results cannot be guaranteed.

**Table 1**  Inspection items and weight settings

<a name="zh-cn_topic_0000001714829153_table18958154564913"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829153_row22994654915"><th class="cellrowborder" valign="top" width="24.05%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0000001714829153_p1529154694919"><a name="zh-cn_topic_0000001714829153_p1529154694919"></a><a name="zh-cn_topic_0000001714829153_p1529154694919"></a>Inspection Category</p></th>
<th class="cellrowborder" valign="top" width="26.35%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0000001714829153_p1229646154918"><a name="zh-cn_topic_0000001714829153_p1229646154918"></a><a name="zh-cn_topic_0000001714829153_p1229646154918"></a>Inspection Item</p></th>
<th class="cellrowborder" valign="top" width="28.51%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0000001714829153_p0298461496"><a name="zh-cn_topic_0000001714829153_p0298461496"></a><a name="zh-cn_topic_0000001714829153_p0298461496"></a>Inspection Field</p></th>
<th class="cellrowborder" valign="top" width="21.09%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0000001714829153_p42914618491"><a name="zh-cn_topic_0000001714829153_p42914618491"></a><a name="zh-cn_topic_0000001714829153_p42914618491"></a>Score Weight</p></th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829153_row14291246204910"><td class="cellrowborder" rowspan="5" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p3301461493"><a name="zh-cn_topic_0000001714829153_p3301461493"></a><a name="zh-cn_topic_0000001714829153_p3301461493"></a>System Resource</p>
<p id="zh-cn_topic_0000001714829153_p13034620492"><a name="zh-cn_topic_0000001714829153_p13034620492"></a><a name="zh-cn_topic_0000001714829153_p13034620492"></a>system_resource</p></td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1330184612495"><a name="zh-cn_topic_0000001714829153_p1330184612495"></a><a name="zh-cn_topic_0000001714829153_p1330184612495"></a>CPU usage.</p></td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p20301746134911"><a name="zh-cn_topic_0000001714829153_p20301746134911"></a><a name="zh-cn_topic_0000001714829153_p20301746134911"></a>os_cpu_usage</p></td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p1730114613494"><a name="zh-cn_topic_0000001714829153_p1730114613494"></a><a name="zh-cn_topic_0000001714829153_p1730114613494"></a>0.06</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row173034616496"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p830746184914"><a name="zh-cn_topic_0000001714829153_p830746184914"></a><a name="zh-cn_topic_0000001714829153_p830746184914"></a>System disk usage.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p530446174918"><a name="zh-cn_topic_0000001714829153_p530446174918"></a><a name="zh-cn_topic_0000001714829153_p530446174918"></a>os_disk_usage</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p7301746164912"><a name="zh-cn_topic_0000001714829153_p7301746164912"></a><a name="zh-cn_topic_0000001714829153_p7301746164912"></a>0.06</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1830174634910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p0301046104911"><a name="zh-cn_topic_0000001714829153_p0301046104911"></a><a name="zh-cn_topic_0000001714829153_p0301046104911"></a>Memory usage.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p33044664919"><a name="zh-cn_topic_0000001714829153_p33044664919"></a><a name="zh-cn_topic_0000001714829153_p33044664919"></a>os_mem_usage</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p173044634916"><a name="zh-cn_topic_0000001714829153_p173044634916"></a><a name="zh-cn_topic_0000001714829153_p173044634916"></a>0.06</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row730154684911"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p630134684911"><a name="zh-cn_topic_0000001714829153_p630134684911"></a><a name="zh-cn_topic_0000001714829153_p630134684911"></a>Disk I/O usage.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p163094684915"><a name="zh-cn_topic_0000001714829153_p163094684915"></a><a name="zh-cn_topic_0000001714829153_p163094684915"></a>os_disk_ioutils</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p173016460493"><a name="zh-cn_topic_0000001714829153_p173016460493"></a><a name="zh-cn_topic_0000001714829153_p173016460493"></a>0.06</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row03034664915"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p53034684911"><a name="zh-cn_topic_0000001714829153_p53034684911"></a><a name="zh-cn_topic_0000001714829153_p53034684911"></a>Network status.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1930124634919"><a name="zh-cn_topic_0000001714829153_p1930124634919"></a><a name="zh-cn_topic_0000001714829153_p1930124634919"></a>network_packet_loss</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p14301346154911"><a name="zh-cn_topic_0000001714829153_p14301346154911"></a><a name="zh-cn_topic_0000001714829153_p14301346154911"></a>0.06</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1830946154912"><td class="cellrowborder" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p12309466492"><a name="zh-cn_topic_0000001714829153_p12309466492"></a><a name="zh-cn_topic_0000001714829153_p12309466492"></a>Instance status</p>
<p id="zh-cn_topic_0000001714829153_p33074614914"><a name="zh-cn_topic_0000001714829153_p33074614914"></a><a name="zh-cn_topic_0000001714829153_p33074614914"></a>instance_status</p></td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p16301646144914"><a name="zh-cn_topic_0000001714829153_p16301646144914"></a><a name="zh-cn_topic_0000001714829153_p16301646144914"></a>Component exception.</p></td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p13012468493"><a name="zh-cn_topic_0000001714829153_p13012468493"></a><a name="zh-cn_topic_0000001714829153_p13012468493"></a>component_error</p></td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p1730104614913"><a name="zh-cn_topic_0000001714829153_p1730104614913"></a><a name="zh-cn_topic_0000001714829153_p1730104614913"></a>0.05</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1930144613497"><td class="cellrowborder" rowspan="3" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p20308469496"><a name="zh-cn_topic_0000001714829153_p20308469496"></a><a name="zh-cn_topic_0000001714829153_p20308469496"></a>Database resource</p>
<p id="zh-cn_topic_0000001714829153_p1031146124916"><a name="zh-cn_topic_0000001714829153_p1031146124916"></a><a name="zh-cn_topic_0000001714829153_p1031146124916"></a>database_resource</p></td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p63194694916"><a name="zh-cn_topic_0000001714829153_p63194694916"></a><a name="zh-cn_topic_0000001714829153_p63194694916"></a>Database directory usage rate.</p></td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p73114461498"><a name="zh-cn_topic_0000001714829153_p73114461498"></a><a name="zh-cn_topic_0000001714829153_p73114461498"></a>data_directory</p></td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p1731194644914"><a name="zh-cn_topic_0000001714829153_p1731194644914"></a><a name="zh-cn_topic_0000001714829153_p1731194644914"></a>0.04</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row163144634910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1331846194913"><a name="zh-cn_topic_0000001714829153_p1331846194913"></a><a name="zh-cn_topic_0000001714829153_p1331846194913"></a>Database log directory usage rate.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p12311846124915"><a name="zh-cn_topic_0000001714829153_p12311846124915"></a><a name="zh-cn_topic_0000001714829153_p12311846124915"></a>log_directory</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1731114684918"><a name="zh-cn_topic_0000001714829153_p1731114684918"></a><a name="zh-cn_topic_0000001714829153_p1731114684918"></a>0.04</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row4317465499"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1231144616492"><a name="zh-cn_topic_0000001714829153_p1231144616492"></a><a name="zh-cn_topic_0000001714829153_p1231144616492"></a>Database size.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p83116469496"><a name="zh-cn_topic_0000001714829153_p83116469496"></a><a name="zh-cn_topic_0000001714829153_p83116469496"></a>db_size</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1331246114910"><a name="zh-cn_topic_0000001714829153_p1331246114910"></a><a name="zh-cn_topic_0000001714829153_p1331246114910"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row12311046184917"><td class="cellrowborder" rowspan="15" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p13184610496"><a name="zh-cn_topic_0000001714829153_p13184610496"></a><a name="zh-cn_topic_0000001714829153_p13184610496"></a>Database performance</p>
<p id="zh-cn_topic_0000001714829153_p7311646154916"><a name="zh-cn_topic_0000001714829153_p7311646154916"></a><a name="zh-cn_topic_0000001714829153_p7311646154916"></a>database_performance</p></td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1331194610498"><a name="zh-cn_topic_0000001714829153_p1331194610498"></a><a name="zh-cn_topic_0000001714829153_p1331194610498"></a>Buffer hit rate.</p></td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p8311046114911"><a name="zh-cn_topic_0000001714829153_p8311046114911"></a><a name="zh-cn_topic_0000001714829153_p8311046114911"></a>buffer_hit_rate</p></td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p14311846104913"><a name="zh-cn_topic_0000001714829153_p14311846104913"></a><a name="zh-cn_topic_0000001714829153_p14311846104913"></a>0.03</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row43194624913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p9311746204917"><a name="zh-cn_topic_0000001714829153_p9311746204917"></a><a name="zh-cn_topic_0000001714829153_p9311746204917"></a>Number of user logins and logouts.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1031184644915"><a name="zh-cn_topic_0000001714829153_p1031184644915"></a><a name="zh-cn_topic_0000001714829153_p1031184644915"></a>user_login_out</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p10311462493"><a name="zh-cn_topic_0000001714829153_p10311462493"></a><a name="zh-cn_topic_0000001714829153_p10311462493"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row93104611496"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p143144613498"><a name="zh-cn_topic_0000001714829153_p143144613498"></a><a name="zh-cn_topic_0000001714829153_p143144613498"></a>Active session rate.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p8311446154911"><a name="zh-cn_topic_0000001714829153_p8311446154911"></a><a name="zh-cn_topic_0000001714829153_p8311446154911"></a>active_session_rate</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p531194614499"><a name="zh-cn_topic_0000001714829153_p531194614499"></a><a name="zh-cn_topic_0000001714829153_p531194614499"></a>0.03</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1531184620498"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p23194644911"><a name="zh-cn_topic_0000001714829153_p23194644911"></a><a name="zh-cn_topic_0000001714829153_p23194644911"></a>Log exception check.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p2317461497"><a name="zh-cn_topic_0000001714829153_p2317461497"></a><a name="zh-cn_topic_0000001714829153_p2317461497"></a>log_error_check</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p332164614914"><a name="zh-cn_topic_0000001714829153_p332164614914"></a><a name="zh-cn_topic_0000001714829153_p332164614914"></a>0.03</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row03264617491"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1321946134911"><a name="zh-cn_topic_0000001714829153_p1321946134911"></a><a name="zh-cn_topic_0000001714829153_p1321946134911"></a>Thread pool usage.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1532114610497"><a name="zh-cn_topic_0000001714829153_p1532114610497"></a><a name="zh-cn_topic_0000001714829153_p1532114610497"></a>thread_pool</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p193234615498"><a name="zh-cn_topic_0000001714829153_p193234615498"></a><a name="zh-cn_topic_0000001714829153_p193234615498"></a>0.03</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1632846114918"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p332124619496"><a name="zh-cn_topic_0000001714829153_p332124619496"></a><a name="zh-cn_topic_0000001714829153_p332124619496"></a>Database latency.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p732446124920"><a name="zh-cn_topic_0000001714829153_p732446124920"></a><a name="zh-cn_topic_0000001714829153_p732446124920"></a>db_latency</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1732144613493"><a name="zh-cn_topic_0000001714829153_p1732144613493"></a><a name="zh-cn_topic_0000001714829153_p1732144613493"></a>0.08</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row203244617495"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p832144694915"><a name="zh-cn_topic_0000001714829153_p832144694915"></a><a name="zh-cn_topic_0000001714829153_p832144694915"></a>Database transaction.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p53244610491"><a name="zh-cn_topic_0000001714829153_p53244610491"></a><a name="zh-cn_topic_0000001714829153_p53244610491"></a>db_transaction</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p23214634919"><a name="zh-cn_topic_0000001714829153_p23214634919"></a><a name="zh-cn_topic_0000001714829153_p23214634919"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row0321846164920"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p173211469491"><a name="zh-cn_topic_0000001714829153_p173211469491"></a><a name="zh-cn_topic_0000001714829153_p173211469491"></a>Database temporary file size.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1332144612490"><a name="zh-cn_topic_0000001714829153_p1332144612490"></a><a name="zh-cn_topic_0000001714829153_p1332144612490"></a>db_tmp_file</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p183215461494"><a name="zh-cn_topic_0000001714829153_p183215461494"></a><a name="zh-cn_topic_0000001714829153_p183215461494"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1732124634910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p83254614492"><a name="zh-cn_topic_0000001714829153_p83254614492"></a><a name="zh-cn_topic_0000001714829153_p83254614492"></a>Database execution statement.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p8321646114910"><a name="zh-cn_topic_0000001714829153_p8321646114910"></a><a name="zh-cn_topic_0000001714829153_p8321646114910"></a>db_exec_statement</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p73264654913"><a name="zh-cn_topic_0000001714829153_p73264654913"></a><a name="zh-cn_topic_0000001714829153_p73264654913"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1732194674911"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p15323467493"><a name="zh-cn_topic_0000001714829153_p15323467493"></a><a name="zh-cn_topic_0000001714829153_p15323467493"></a>Database deadlock.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p9321346184915"><a name="zh-cn_topic_0000001714829153_p9321346184915"></a><a name="zh-cn_topic_0000001714829153_p9321346184915"></a>db_deadlock</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1132114618497"><a name="zh-cn_topic_0000001714829153_p1132114618497"></a><a name="zh-cn_topic_0000001714829153_p1132114618497"></a>0.03</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row232646174910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p203274618492"><a name="zh-cn_topic_0000001714829153_p203274618492"></a><a name="zh-cn_topic_0000001714829153_p203274618492"></a>Database TPS performance.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p533164684914"><a name="zh-cn_topic_0000001714829153_p533164684914"></a><a name="zh-cn_topic_0000001714829153_p533164684914"></a>db_tps</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p533946184917"><a name="zh-cn_topic_0000001714829153_p533946184917"></a><a name="zh-cn_topic_0000001714829153_p533946184917"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row163334644913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p933646184919"><a name="zh-cn_topic_0000001714829153_p933646184919"></a><a name="zh-cn_topic_0000001714829153_p933646184919"></a>Database Top Query.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p133311465490"><a name="zh-cn_topic_0000001714829153_p133311465490"></a><a name="zh-cn_topic_0000001714829153_p133311465490"></a>db_top_query</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p8334463494"><a name="zh-cn_topic_0000001714829153_p8334463494"></a><a name="zh-cn_topic_0000001714829153_p8334463494"></a>0</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1433164617499"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p93304664915"><a name="zh-cn_topic_0000001714829153_p93304664915"></a><a name="zh-cn_topic_0000001714829153_p93304664915"></a>Long transaction.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p10331446164916"><a name="zh-cn_topic_0000001714829153_p10331446164916"></a><a name="zh-cn_topic_0000001714829153_p10331446164916"></a>long_transaction</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p533446144913"><a name="zh-cn_topic_0000001714829153_p533446144913"></a><a name="zh-cn_topic_0000001714829153_p533446144913"></a>0.05</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row10331046164910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p173384618494"><a name="zh-cn_topic_0000001714829153_p173384618494"></a><a name="zh-cn_topic_0000001714829153_p173384618494"></a>Xlog accumulation.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1233124619495"><a name="zh-cn_topic_0000001714829153_p1233124619495"></a><a name="zh-cn_topic_0000001714829153_p1233124619495"></a>xlog_accumulate</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p103354624911"><a name="zh-cn_topic_0000001714829153_p103354624911"></a><a name="zh-cn_topic_0000001714829153_p103354624911"></a>0.05</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row53384616494"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p733446144913"><a name="zh-cn_topic_0000001714829153_p733446144913"></a><a name="zh-cn_topic_0000001714829153_p733446144913"></a>oldestXmin has not advanced for a long time.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p33384614491"><a name="zh-cn_topic_0000001714829153_p33384614491"></a><a name="zh-cn_topic_0000001714829153_p33384614491"></a>xmin_stuck</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1733046114912"><a name="zh-cn_topic_0000001714829153_p1733046114912"></a><a name="zh-cn_topic_0000001714829153_p1733046114912"></a>0.05</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row153310462491"><td class="cellrowborder" rowspan="5" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1033046174910"><a name="zh-cn_topic_0000001714829153_p1033046174910"></a><a name="zh-cn_topic_0000001714829153_p1033046174910"></a>Diagnosis optimization</p>
<p id="zh-cn_topic_0000001714829153_p133164615492"><a name="zh-cn_topic_0000001714829153_p133164615492"></a><a name="zh-cn_topic_0000001714829153_p133164615492"></a>diagnosis_optimization</p></td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p933124610491"><a name="zh-cn_topic_0000001714829153_p933124610491"></a><a name="zh-cn_topic_0000001714829153_p933124610491"></a>Core dump.</p></td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p123314468494"><a name="zh-cn_topic_0000001714829153_p123314468494"></a><a name="zh-cn_topic_0000001714829153_p123314468494"></a>core_dump</p></td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p173364620497"><a name="zh-cn_topic_0000001714829153_p173364620497"></a><a name="zh-cn_topic_0000001714829153_p173364620497"></a>0.04</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row18331246104911"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p153394694917"><a name="zh-cn_topic_0000001714829153_p153394694917"></a><a name="zh-cn_topic_0000001714829153_p153394694917"></a>Dynamic memory.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p10335462496"><a name="zh-cn_topic_0000001714829153_p10335462496"></a><a name="zh-cn_topic_0000001714829153_p10335462496"></a>dynamic_memory</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p3331646134911"><a name="zh-cn_topic_0000001714829153_p3331646134911"></a><a name="zh-cn_topic_0000001714829153_p3331646134911"></a>0.04</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row23415466497"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1734124674914"><a name="zh-cn_topic_0000001714829153_p1734124674914"></a><a name="zh-cn_topic_0000001714829153_p1734124674914"></a>Program memory.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p734104614493"><a name="zh-cn_topic_0000001714829153_p734104614493"></a><a name="zh-cn_topic_0000001714829153_p734104614493"></a>process_memory</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p334124614497"><a name="zh-cn_topic_0000001714829153_p334124614497"></a><a name="zh-cn_topic_0000001714829153_p334124614497"></a>0.04</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1834154684917"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p6341046194920"><a name="zh-cn_topic_0000001714829153_p6341046194920"></a><a name="zh-cn_topic_0000001714829153_p6341046194920"></a>Other memory.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p143404674915"><a name="zh-cn_topic_0000001714829153_p143404674915"></a><a name="zh-cn_topic_0000001714829153_p143404674915"></a>other_memory</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1634746114913"><a name="zh-cn_topic_0000001714829153_p1634746114913"></a><a name="zh-cn_topic_0000001714829153_p1634746114913"></a>0.03</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11341046164917"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p173434618493"><a name="zh-cn_topic_0000001714829153_p173434618493"></a><a name="zh-cn_topic_0000001714829153_p173434618493"></a>GUC parameter.</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p17340468499"><a name="zh-cn_topic_0000001714829153_p17340468499"></a><a name="zh-cn_topic_0000001714829153_p17340468499"></a>guc_params</p></td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1234946204917"><a name="zh-cn_topic_0000001714829153_p1234946204917"></a><a name="zh-cn_topic_0000001714829153_p1234946204917"></a>0.04</p></td>
</tr>
</tbody>
</table>

### Implementation Details and Alarm Settings of Each Inspection Item<a name="zh-cn_topic_0000001714829153_section109141633317"></a>

- System resources
    - CPU usage: Obtains the two metrics "os\_cpu\_user\_usage" and "os\_cpu\_iowait\_usage" from TSDB.
        - For os\_cpu\_user\_usage, observe whether the value exceeds 0.7. If the threshold is exceeded, an alarm is triggered. Finally, perform trend forecasting to determine whether the value will exceed 0.7 in the next 24 hours. If the threshold is exceeded, an alarm is triggered.
        - For os\_cpu\_iowait\_usage, an alarm is triggered when the value exceeds 0.3.

    - System disk usage: Obtains the "os\_disk\_usage" metric from TSDB and observes the disk usage of the system disk (mount\_point='/'). An alarm is triggered when the value exceeds 0.8.
    - Total system memory usage: Obtains the "os\_mem\_usage" metric from TSDB. An alarm is triggered when a continuous increase is detected. An alarm is triggered when the value exceeds 0.7. Finally, perform trend forecasting. If the value is predicted to exceed 0.8 in the next 24 hours, an alarm is triggered.
    - Disk I/O usage: Obtains the "os\_disk\_ioutils" metric from TSDB. An alarm is triggered when the value exceeds 0.8.
    - Network status: Obtains the "ping\_packet\_rate" metric from TSDB to determine the network connection status between database nodes. An alarm is triggered when the packet loss rate exceeds 0.05.

- Instance status
    - Component exception: Obtains the node status information from the metadata database based on the instance, and derives the status of the current database instance within the time range. When an abnormal status occurs (that is, the value is not -1), an alarm is triggered.

- Database resource
    - Database directory usage rate: Obtains the "pg\_node\_info\_uptime" metric from TSDB, parses the data directory of each database instance, and obtains the "process\_cpu\_usage" metric to match and determine whether change\_root exists. If it exists, combines them into the correct directory path, then obtains the "os\_disk\_usage" metric to match and determine the usage rate of the corresponding data directory. When a continuous increase is detected, an alarm is triggered; when the value exceeds 0.8, an alarm is triggered. Finally, trend forecasting is performed; if it is determined that the value will exceed 0.8 within the next 24 hours, an alarm is triggered. It also determines whether the file system type is correct; if it does not match, an alarm is triggered. The matching range is \['xfs', 'ext3', 'ext4'\].
    - Database log directory usage rate: Obtains the "pg\_node\_info\_uptime" metric from TSDB, then parses the log directory of each database instance, and obtains the "process\_cpu\_usage" metric to match and determine whether change\_root exists. If it exists, combines them into the correct directory path, then obtains the "os\_disk\_usage" metric to match and determine the usage rate of the corresponding log directory. When a continuous increase is detected, an alarm is triggered; when the value exceeds 0.8, an alarm is also triggered. Then trend forecasting is performed; if it is determined that the value will exceed 0.8 within the next 24 hours, an alarm is also triggered. Finally, it also determines whether the file system type is correct; if it does not match, an alarm is triggered. The matching range is \['xfs', 'ext3', 'ext4'\].
    - Database size: Obtains the "pg\_database\_size\_bytes" metric from TSDB, obtains and records the sizes of all databases for trend display on the frontend. No alarm is currently configured.

- Database performance
    - Buffer hit rate: Obtains the "pg\_db\_blks\_access" metric from TSDB. When the value exceeds 0.9, an alarm is triggered.
    - User login and logout count: Obtains the "user\_login" and "user\_logout" metrics from TSDB, and obtains the average number of user logins/logouts per second within 1 minute for trend display on the frontend. No alarm is currently configured.
    - Active session rate: Obtains the active session count active\_connection and total session count total\_connection metrics from TSDB. The active session rate is active\_connection / total\_connection. When the ratio is less than 0.8, an alarm is triggered.
    - Log exception check: Obtains log-related metrics from TSDB, counts the occurrences of each type of log error and sums them up. If a log exception occurs, the occurrence count of the log exception is returned to the frontend and an alarm is triggered. The specific metrics are 'deadlock\_count', 'login\_denied', 'errors\_rate', 'panic', 'dn\_ping\_standby', 'node\_restart', 'node\_start', 'cn\_status', 'dn\_status', 'gtm\_status', 'dn\_writable\_failed', 'etcd\_io\_overload', 'cms\_heartbeat\_timeout\_restart', 'cms\_phonydead\_restart', 'cms\_cn\_down', 'cn\_restart\_time\_exceed', 'cms\_read\_only', 'cms\_restart\_pending', 'cms\_heartbeat\_timeout', 'etcd\_restart', 'etcd\_not\_connect\_dial\_tcp', 'etcd\_auth\_failed', 'etcd\_overload', 'etcd\_sync\_timeout', 'etcd\_disk\_full', 'etcd\_be\_killed', 'bind\_ip\_failed', 'gtm\_disconnected\_to\_primary', 'gtm\_panic', 'ffic'.
    - Thread pool usage: Obtains the "pg\_thread\_pool\_rate" metric from TSDB. An alarm is triggered when a continuous increase is detected, and an alarm is triggered when the value is less than 0.9.
    - Database latency: Obtains the "statement\_responsetime\_percentile\_p95" and "statement\_responsetime\_percentile\_p80" metrics from TSDB. No alarm is triggered.
    - Database transaction: Obtains the "pg\_db\_xact\_commit" and "pg\_db\_xact\_rollback" metrics from TSDB to get the number of commits and rollbacks in the database, which are used for trend display on the frontend. No alarm is triggered.
    - Database temporary file size: Obtains the "pg\_db\_temp\_files" metric from TSDB to get the size of database temporary files, which is used for trend display on the frontend. No alarm is triggered.
    - Database execution statement: Obtains the "pg\_sql\_count\_select", "pg\_sql\_count\_update", "pg\_sql\_count\_insert", and "pg\_sql\_count\_delete" metrics from TSDB to get the execution counts of select, update, insert, and delete in the database, which are used for trend display on the frontend. No alarm is triggered.
    - Database deadlock: Obtains the "pg\_db\_deadlocks" metric from TSDB to get the deadlock situations in the database. When the deadlock count is not 0, it indicates that a deadlock has occurred in the database. The value indicates the number of deadlocks. No alarm is triggered.
    - Database TPS performance: Obtains the "qps\_by\_instance" and "qps" metrics from TSDB to get the QPS and TPS information of the database, which is used for trend display on the frontend. No alarm is triggered.
    - Database Top Query: Executes SQL statements to query the TopK queries with the highest call counts from dbe\_perf.statement, which are used for frontend display. Currently, K is 10. No alarm is triggered.
    - Long transaction: Executes SQL statements to query active transactions that have not ended for more than 12 hours from pg\_catalog.pg\_stat\_activity. When the length of the returned result list is greater than 0, it indicates that a long transaction exists, and an alarm is triggered.
    - xLog accumulation: Obtains the "xlog\_count" metric from TSDB to get the number of files in the xlog directory. When the count exceeds 3000, an alarm is triggered.
    - oldestXmin has not advanced for a long time: Obtains the "oldestxmin\_increase" metric from TSDB. If oldestxmin has not changed for more than 12 hours, it indicates that it has not advanced for a long time. In this case, the value returned by the inspection is 0, and an alarm is triggered.

- Diagnosis and optimization
    - Core dump: Obtains the "log\_ffic" metric from TSDB. When the count in the returned value is greater than 0, it indicates that a core dump has occurred, and an alarm is triggered.
    - Dynamic memory: Obtains the "pg\_total\_memory\_detail\_mbytes" metric from TSDB, calculates the ratio of "dynamic\_used\_memory" to "max\_dynamic\_memory", and triggers an alarm when the value exceeds 0.8. It also calculates the ratio of "dynamic\_used\_shrctx" to "max\_dynamic\_memory", and triggers an alarm when the value exceeds 0.8 as well.
    - Program memory: Obtains the "pg\_total\_memory\_detail\_mbytes" metric from TSDB, calculates the ratio of "process\_used\_memory" to "max\_process\_memory", and triggers an alarm when the value exceeds 0.8.
    - Other memory: Obtains the "pg\_total\_memory\_detail\_mbytes" metric from TSDB and reads the value of "other\_used\_memory". An alarm is triggered when the value keeps rising, and an alarm is triggered when it exceeds 20 GB.
    - GUC parameter: Obtains the "pg\_total\_memory\_detail\_mbytes" and "pg\_settings\_setting" metrics from TSDB, reads the values of "max\_process\_memory", "shared\_buffers", and "work\_mem", and compares the current values with the optimal parameters estimated by DBMind based on the workload. If the current parameters differ greatly from the optimal parameters, the warning field in the result is true, and an alarm is triggered.
        - For "work\_mem":
            - When DN is deployed independently, the optimal value a = \( memory/16 GB) \* 16 MB. If a\>128MB, set it to 128 MB; if a < 16 MB, set it to 16 MB. Based on the optimal value, \[0.9a, 1.1a\] is taken as the optional range. When the actual work\_mem parameter is outside the \[0.9a, 1.1a\] range, an alarm is triggered.

        - For "max\_process\_memory":
            - If the total system memory \> 256 GB, set it to total system memory \* 0.875.
            - If the total system memory <= 256 GB && total system memory \>= 128 GB, set it to memory \* 0.75.
            - If the total system memory < 128 GB, set it to total system memory \* 0.625.

        - For "shared\_buffer":

            Optimal value: total system memory/4.

>[!NOTE]Note
>
>The health score is given based on the importance weight and the exception degree of each inspection item, and is finally aggregated into the health score of the current instance. The specific calculation formula is as follows:
>![Implementation Details and Alarm Settings of Each Inspection Item diagram](figures/en-us_formulaimage_0000002294473813.png)
>Where:
>![Implementation Details and Alarm Settings of Each Inspection Item diagram](figures/en-us_formulaimage_0000002259760648.png)
>S<sub>i</sub>  = 0 or 1 (where 0 indicates that the inspection item is abnormal and 1 indicates that it is normal).
>In addition, the conclusion provides a TOP3 list. TOP3 refers to the three inspection items with the most serious exceptions. The number of exceptions of each inspection item is counted, and the items are then sorted together with the weight of the inspection item, and the top 3 are taken as the TOP3 list. If there are no exceptions, the list is empty.
>Number of exceptions of each inspection item: The network status is calculated based on the number of two-way communication exceptions; the buffer\_hit\_rate inspection item is calculated based on the number of database instance exceptions; long transactions are calculated based on the number of long transactions; and other inspection items are calculated based on the number of node exceptions.

### Supported Custom Thresholds for Inspection<a name="zh-cn_topic_0000001714829153_section8275812395"></a>

The alarm types and default settings of the current inspection items are shown in the following table.

- `√` and a range indicate that a default alarm threshold has been set for the inspection item.
- `-` indicates that the inspection item supports setting the corresponding alarm type.
- `×` indicates that the inspection item does not support setting the corresponding alarm type.

<a name="zh-cn_topic_0000001714829153_table10952201315112"></a>
<table><tbody><tr id="zh-cn_topic_0000001714829153_row11105171401111"><td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p310591415114"><a name="zh-cn_topic_0000001714829153_p310591415114"></a><a name="zh-cn_topic_0000001714829153_p310591415114"></a>Inspection Item</p></td>
<td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p610511416111"><a name="zh-cn_topic_0000001714829153_p610511416111"></a><a name="zh-cn_topic_0000001714829153_p610511416111"></a>Inspection Item</p></td>
<td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p11061014121112"><a name="zh-cn_topic_0000001714829153_p11061014121112"></a><a name="zh-cn_topic_0000001714829153_p11061014121112"></a>Value Range</p></td>
<td class="cellrowborder" colspan="4" valign="top"><p id="zh-cn_topic_0000001714829153_p14106181414113"><a name="zh-cn_topic_0000001714829153_p14106181414113"></a><a name="zh-cn_topic_0000001714829153_p14106181414113"></a>Exception Type</p></td>
<td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p21061514191116"><a name="zh-cn_topic_0000001714829153_p21061514191116"></a><a name="zh-cn_topic_0000001714829153_p21061514191116"></a>Judgment Criterion</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11061414191113"><td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p310613144115"><a name="zh-cn_topic_0000001714829153_p310613144115"></a><a name="zh-cn_topic_0000001714829153_p310613144115"></a>Exceeds Threshold</p></td>
<td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p81061014111116"><a name="zh-cn_topic_0000001714829153_p81061014111116"></a><a name="zh-cn_topic_0000001714829153_p81061014111116"></a>Predicted to Exceed Threshold</p></td>
<td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p5106141421119"><a name="zh-cn_topic_0000001714829153_p5106141421119"></a><a name="zh-cn_topic_0000001714829153_p5106141421119"></a>Continuously Rising</p></td>
<td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p810611141112"><a name="zh-cn_topic_0000001714829153_p810611141112"></a><a name="zh-cn_topic_0000001714829153_p810611141112"></a>Incorrect File Type</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row151061714191110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p1610641491116"><a name="zh-cn_topic_0000001714829153_p1610641491116"></a><a name="zh-cn_topic_0000001714829153_p1610641491116"></a>CPU Usage - os_cpu_user_usage</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p16106161419116"><a name="zh-cn_topic_0000001714829153_p16106161419116"></a><a name="zh-cn_topic_0000001714829153_p16106161419116"></a>os_cpu_usage</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1310651491116"><a name="zh-cn_topic_0000001714829153_p1310651491116"></a><a name="zh-cn_topic_0000001714829153_p1310651491116"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p121061214201110"><a name="zh-cn_topic_0000001714829153_p121061214201110"></a><a name="zh-cn_topic_0000001714829153_p121061214201110"></a>&gt;0.7</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1110614146117"><a name="zh-cn_topic_0000001714829153_p1110614146117"></a><a name="zh-cn_topic_0000001714829153_p1110614146117"></a>&gt;0.7</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p210621471113"><a name="zh-cn_topic_0000001714829153_p210621471113"></a><a name="zh-cn_topic_0000001714829153_p210621471113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p210651431114"><a name="zh-cn_topic_0000001714829153_p210651431114"></a><a name="zh-cn_topic_0000001714829153_p210651431114"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p15106314181116"><a name="zh-cn_topic_0000001714829153_p15106314181116"></a><a name="zh-cn_topic_0000001714829153_p15106314181116"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row15280155216229"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p132811452152211"><a name="zh-cn_topic_0000001714829153_p132811452152211"></a><a name="zh-cn_topic_0000001714829153_p132811452152211"></a>CPU usage - os_cpu_iowait_usage</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p18281155217228"><a name="zh-cn_topic_0000001714829153_p18281155217228"></a><a name="zh-cn_topic_0000001714829153_p18281155217228"></a>os_cpu_usage</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1628125219221"><a name="zh-cn_topic_0000001714829153_p1628125219221"></a><a name="zh-cn_topic_0000001714829153_p1628125219221"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p14281195212228"><a name="zh-cn_topic_0000001714829153_p14281195212228"></a><a name="zh-cn_topic_0000001714829153_p14281195212228"></a>&gt;0.3</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p9281115212219"><a name="zh-cn_topic_0000001714829153_p9281115212219"></a><a name="zh-cn_topic_0000001714829153_p9281115212219"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1728145210222"><a name="zh-cn_topic_0000001714829153_p1728145210222"></a><a name="zh-cn_topic_0000001714829153_p1728145210222"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p102810528223"><a name="zh-cn_topic_0000001714829153_p102810528223"></a><a name="zh-cn_topic_0000001714829153_p102810528223"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p17281145252214"><a name="zh-cn_topic_0000001714829153_p17281145252214"></a><a name="zh-cn_topic_0000001714829153_p17281145252214"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row3106614191110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p14106161414113"><a name="zh-cn_topic_0000001714829153_p14106161414113"></a><a name="zh-cn_topic_0000001714829153_p14106161414113"></a>Disk I/O usage rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p5106161414115"><a name="zh-cn_topic_0000001714829153_p5106161414115"></a><a name="zh-cn_topic_0000001714829153_p5106161414115"></a>os_disk_ioutils</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1010621419112"><a name="zh-cn_topic_0000001714829153_p1010621419112"></a><a name="zh-cn_topic_0000001714829153_p1010621419112"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1410612144116"><a name="zh-cn_topic_0000001714829153_p1410612144116"></a><a name="zh-cn_topic_0000001714829153_p1410612144116"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1910691481114"><a name="zh-cn_topic_0000001714829153_p1910691481114"></a><a name="zh-cn_topic_0000001714829153_p1910691481114"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6106814171113"><a name="zh-cn_topic_0000001714829153_p6106814171113"></a><a name="zh-cn_topic_0000001714829153_p6106814171113"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1710621421119"><a name="zh-cn_topic_0000001714829153_p1710621421119"></a><a name="zh-cn_topic_0000001714829153_p1710621421119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p20106114131117"><a name="zh-cn_topic_0000001714829153_p20106114131117"></a><a name="zh-cn_topic_0000001714829153_p20106114131117"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11069148115"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p201061414141120"><a name="zh-cn_topic_0000001714829153_p201061414141120"></a><a name="zh-cn_topic_0000001714829153_p201061414141120"></a>System disk usage rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p131063148119"><a name="zh-cn_topic_0000001714829153_p131063148119"></a><a name="zh-cn_topic_0000001714829153_p131063148119"></a>os_disk_usage</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p13106121416117"><a name="zh-cn_topic_0000001714829153_p13106121416117"></a><a name="zh-cn_topic_0000001714829153_p13106121416117"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p310621411113"><a name="zh-cn_topic_0000001714829153_p310621411113"></a><a name="zh-cn_topic_0000001714829153_p310621411113"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15106101417117"><a name="zh-cn_topic_0000001714829153_p15106101417117"></a><a name="zh-cn_topic_0000001714829153_p15106101417117"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1810618146116"><a name="zh-cn_topic_0000001714829153_p1810618146116"></a><a name="zh-cn_topic_0000001714829153_p1810618146116"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1107814151119"><a name="zh-cn_topic_0000001714829153_p1107814151119"></a><a name="zh-cn_topic_0000001714829153_p1107814151119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p161071514151117"><a name="zh-cn_topic_0000001714829153_p161071514151117"></a><a name="zh-cn_topic_0000001714829153_p161071514151117"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row91071214181110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p610711413111"><a name="zh-cn_topic_0000001714829153_p610711413111"></a><a name="zh-cn_topic_0000001714829153_p610711413111"></a>Memory usage rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1010791461114"><a name="zh-cn_topic_0000001714829153_p1010791461114"></a><a name="zh-cn_topic_0000001714829153_p1010791461114"></a>os_mem_usage</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p310721491112"><a name="zh-cn_topic_0000001714829153_p310721491112"></a><a name="zh-cn_topic_0000001714829153_p310721491112"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p171071414181117"><a name="zh-cn_topic_0000001714829153_p171071414181117"></a><a name="zh-cn_topic_0000001714829153_p171071414181117"></a>&gt;0.7</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p16107121413114"><a name="zh-cn_topic_0000001714829153_p16107121413114"></a><a name="zh-cn_topic_0000001714829153_p16107121413114"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p410711417110"><a name="zh-cn_topic_0000001714829153_p410711417110"></a><a name="zh-cn_topic_0000001714829153_p410711417110"></a>√</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p2107171461117"><a name="zh-cn_topic_0000001714829153_p2107171461117"></a><a name="zh-cn_topic_0000001714829153_p2107171461117"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p310720147118"><a name="zh-cn_topic_0000001714829153_p310720147118"></a><a name="zh-cn_topic_0000001714829153_p310720147118"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row71071814101116"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p17107714161112"><a name="zh-cn_topic_0000001714829153_p17107714161112"></a><a name="zh-cn_topic_0000001714829153_p17107714161112"></a>Network status</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1410721401119"><a name="zh-cn_topic_0000001714829153_p1410721401119"></a><a name="zh-cn_topic_0000001714829153_p1410721401119"></a>network_packet_loss</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p110791416110"><a name="zh-cn_topic_0000001714829153_p110791416110"></a><a name="zh-cn_topic_0000001714829153_p110791416110"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6107214131116"><a name="zh-cn_topic_0000001714829153_p6107214131116"></a><a name="zh-cn_topic_0000001714829153_p6107214131116"></a>&gt;0.05</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1910751471111"><a name="zh-cn_topic_0000001714829153_p1910751471111"></a><a name="zh-cn_topic_0000001714829153_p1910751471111"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p19107191417114"><a name="zh-cn_topic_0000001714829153_p19107191417114"></a><a name="zh-cn_topic_0000001714829153_p19107191417114"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p121071514101118"><a name="zh-cn_topic_0000001714829153_p121071514101118"></a><a name="zh-cn_topic_0000001714829153_p121071514101118"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p141074149115"><a name="zh-cn_topic_0000001714829153_p141074149115"></a><a name="zh-cn_topic_0000001714829153_p141074149115"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row181071214201119"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p310741401110"><a name="zh-cn_topic_0000001714829153_p310741401110"></a><a name="zh-cn_topic_0000001714829153_p310741401110"></a>Component exception</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p81075146119"><a name="zh-cn_topic_0000001714829153_p81075146119"></a><a name="zh-cn_topic_0000001714829153_p81075146119"></a>component_error</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p141071914101111"><a name="zh-cn_topic_0000001714829153_p141071914101111"></a><a name="zh-cn_topic_0000001714829153_p141071914101111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p8107181417118"><a name="zh-cn_topic_0000001714829153_p8107181417118"></a><a name="zh-cn_topic_0000001714829153_p8107181417118"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p610781451112"><a name="zh-cn_topic_0000001714829153_p610781451112"></a><a name="zh-cn_topic_0000001714829153_p610781451112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p14107181417117"><a name="zh-cn_topic_0000001714829153_p14107181417117"></a><a name="zh-cn_topic_0000001714829153_p14107181417117"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p31074147111"><a name="zh-cn_topic_0000001714829153_p31074147111"></a><a name="zh-cn_topic_0000001714829153_p31074147111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1310712141115"><a name="zh-cn_topic_0000001714829153_p1310712141115"></a><a name="zh-cn_topic_0000001714829153_p1310712141115"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row5107111491113"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p5107414201120"><a name="zh-cn_topic_0000001714829153_p5107414201120"></a><a name="zh-cn_topic_0000001714829153_p5107414201120"></a>Database directory usage rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p17107514141119"><a name="zh-cn_topic_0000001714829153_p17107514141119"></a><a name="zh-cn_topic_0000001714829153_p17107514141119"></a>data_directory</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p121071414161111"><a name="zh-cn_topic_0000001714829153_p121071414161111"></a><a name="zh-cn_topic_0000001714829153_p121071414161111"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13107191421119"><a name="zh-cn_topic_0000001714829153_p13107191421119"></a><a name="zh-cn_topic_0000001714829153_p13107191421119"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1010720146118"><a name="zh-cn_topic_0000001714829153_p1010720146118"></a><a name="zh-cn_topic_0000001714829153_p1010720146118"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p10107111461111"><a name="zh-cn_topic_0000001714829153_p10107111461111"></a><a name="zh-cn_topic_0000001714829153_p10107111461111"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15108191461116"><a name="zh-cn_topic_0000001714829153_p15108191461116"></a><a name="zh-cn_topic_0000001714829153_p15108191461116"></a>√</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p181081014121115"><a name="zh-cn_topic_0000001714829153_p181081014121115"></a><a name="zh-cn_topic_0000001714829153_p181081014121115"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11108114141110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p510814142115"><a name="zh-cn_topic_0000001714829153_p510814142115"></a><a name="zh-cn_topic_0000001714829153_p510814142115"></a>Database log directory usage rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p2108141421115"><a name="zh-cn_topic_0000001714829153_p2108141421115"></a><a name="zh-cn_topic_0000001714829153_p2108141421115"></a>log_directory</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p41081814111116"><a name="zh-cn_topic_0000001714829153_p41081814111116"></a><a name="zh-cn_topic_0000001714829153_p41081814111116"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p7108171461119"><a name="zh-cn_topic_0000001714829153_p7108171461119"></a><a name="zh-cn_topic_0000001714829153_p7108171461119"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6108151431115"><a name="zh-cn_topic_0000001714829153_p6108151431115"></a><a name="zh-cn_topic_0000001714829153_p6108151431115"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13108201441114"><a name="zh-cn_topic_0000001714829153_p13108201441114"></a><a name="zh-cn_topic_0000001714829153_p13108201441114"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p141081140115"><a name="zh-cn_topic_0000001714829153_p141081140115"></a><a name="zh-cn_topic_0000001714829153_p141081140115"></a>√</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p510861418114"><a name="zh-cn_topic_0000001714829153_p510861418114"></a><a name="zh-cn_topic_0000001714829153_p510861418114"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1810841415111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p41081214131115"><a name="zh-cn_topic_0000001714829153_p41081214131115"></a><a name="zh-cn_topic_0000001714829153_p41081214131115"></a>Database size</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p6108141418113"><a name="zh-cn_topic_0000001714829153_p6108141418113"></a><a name="zh-cn_topic_0000001714829153_p6108141418113"></a>db_size</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p12108181401118"><a name="zh-cn_topic_0000001714829153_p12108181401118"></a><a name="zh-cn_topic_0000001714829153_p12108181401118"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1210831420119"><a name="zh-cn_topic_0000001714829153_p1210831420119"></a><a name="zh-cn_topic_0000001714829153_p1210831420119"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13108191441117"><a name="zh-cn_topic_0000001714829153_p13108191441117"></a><a name="zh-cn_topic_0000001714829153_p13108191441117"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3108191411113"><a name="zh-cn_topic_0000001714829153_p3108191411113"></a><a name="zh-cn_topic_0000001714829153_p3108191411113"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1510861461113"><a name="zh-cn_topic_0000001714829153_p1510861461113"></a><a name="zh-cn_topic_0000001714829153_p1510861461113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p11108111410113"><a name="zh-cn_topic_0000001714829153_p11108111410113"></a><a name="zh-cn_topic_0000001714829153_p11108111410113"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1410881401111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p15108171415111"><a name="zh-cn_topic_0000001714829153_p15108171415111"></a><a name="zh-cn_topic_0000001714829153_p15108171415111"></a>Buffer hit rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p9108141481120"><a name="zh-cn_topic_0000001714829153_p9108141481120"></a><a name="zh-cn_topic_0000001714829153_p9108141481120"></a>buffer_hit_rate</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p4108181401111"><a name="zh-cn_topic_0000001714829153_p4108181401111"></a><a name="zh-cn_topic_0000001714829153_p4108181401111"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p51085145118"><a name="zh-cn_topic_0000001714829153_p51085145118"></a><a name="zh-cn_topic_0000001714829153_p51085145118"></a>&lt;0.9</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3108114131112"><a name="zh-cn_topic_0000001714829153_p3108114131112"></a><a name="zh-cn_topic_0000001714829153_p3108114131112"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p18108121441116"><a name="zh-cn_topic_0000001714829153_p18108121441116"></a><a name="zh-cn_topic_0000001714829153_p18108121441116"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p11089148118"><a name="zh-cn_topic_0000001714829153_p11089148118"></a><a name="zh-cn_topic_0000001714829153_p11089148118"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p14108121471114"><a name="zh-cn_topic_0000001714829153_p14108121471114"></a><a name="zh-cn_topic_0000001714829153_p14108121471114"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row171091414121117"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p61091514101118"><a name="zh-cn_topic_0000001714829153_p61091514101118"></a><a name="zh-cn_topic_0000001714829153_p61091514101118"></a>User login and logout count</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p7109814191111"><a name="zh-cn_topic_0000001714829153_p7109814191111"></a><a name="zh-cn_topic_0000001714829153_p7109814191111"></a>user_login_out</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1310931471119"><a name="zh-cn_topic_0000001714829153_p1310931471119"></a><a name="zh-cn_topic_0000001714829153_p1310931471119"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p4109121411113"><a name="zh-cn_topic_0000001714829153_p4109121411113"></a><a name="zh-cn_topic_0000001714829153_p4109121411113"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1410991413118"><a name="zh-cn_topic_0000001714829153_p1410991413118"></a><a name="zh-cn_topic_0000001714829153_p1410991413118"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p71098145118"><a name="zh-cn_topic_0000001714829153_p71098145118"></a><a name="zh-cn_topic_0000001714829153_p71098145118"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1710901411114"><a name="zh-cn_topic_0000001714829153_p1710901411114"></a><a name="zh-cn_topic_0000001714829153_p1710901411114"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p610901412119"><a name="zh-cn_topic_0000001714829153_p610901412119"></a><a name="zh-cn_topic_0000001714829153_p610901412119"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row131091914161116"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p810931411111"><a name="zh-cn_topic_0000001714829153_p810931411111"></a><a name="zh-cn_topic_0000001714829153_p810931411111"></a>Active session rate</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p15109914181120"><a name="zh-cn_topic_0000001714829153_p15109914181120"></a><a name="zh-cn_topic_0000001714829153_p15109914181120"></a>active_session_rate</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1510915143117"><a name="zh-cn_topic_0000001714829153_p1510915143117"></a><a name="zh-cn_topic_0000001714829153_p1510915143117"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p710914140115"><a name="zh-cn_topic_0000001714829153_p710914140115"></a><a name="zh-cn_topic_0000001714829153_p710914140115"></a>&lt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p2010941421112"><a name="zh-cn_topic_0000001714829153_p2010941421112"></a><a name="zh-cn_topic_0000001714829153_p2010941421112"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1510920146113"><a name="zh-cn_topic_0000001714829153_p1510920146113"></a><a name="zh-cn_topic_0000001714829153_p1510920146113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1710951414116"><a name="zh-cn_topic_0000001714829153_p1710951414116"></a><a name="zh-cn_topic_0000001714829153_p1710951414116"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p121095142113"><a name="zh-cn_topic_0000001714829153_p121095142113"></a><a name="zh-cn_topic_0000001714829153_p121095142113"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row910931471120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p110931471112"><a name="zh-cn_topic_0000001714829153_p110931471112"></a><a name="zh-cn_topic_0000001714829153_p110931471112"></a>Log exception check</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p2109714191114"><a name="zh-cn_topic_0000001714829153_p2109714191114"></a><a name="zh-cn_topic_0000001714829153_p2109714191114"></a>log_error_check</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p8109914161117"><a name="zh-cn_topic_0000001714829153_p8109914161117"></a><a name="zh-cn_topic_0000001714829153_p8109914161117"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p110991420113"><a name="zh-cn_topic_0000001714829153_p110991420113"></a><a name="zh-cn_topic_0000001714829153_p110991420113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p171099149115"><a name="zh-cn_topic_0000001714829153_p171099149115"></a><a name="zh-cn_topic_0000001714829153_p171099149115"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p91092148116"><a name="zh-cn_topic_0000001714829153_p91092148116"></a><a name="zh-cn_topic_0000001714829153_p91092148116"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5109201411112"><a name="zh-cn_topic_0000001714829153_p5109201411112"></a><a name="zh-cn_topic_0000001714829153_p5109201411112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1510914145113"><a name="zh-cn_topic_0000001714829153_p1510914145113"></a><a name="zh-cn_topic_0000001714829153_p1510914145113"></a>An alarm is triggered if it exists.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row01096143110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p17109614121110"><a name="zh-cn_topic_0000001714829153_p17109614121110"></a><a name="zh-cn_topic_0000001714829153_p17109614121110"></a>Thread pool usage</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p2109141420113"><a name="zh-cn_topic_0000001714829153_p2109141420113"></a><a name="zh-cn_topic_0000001714829153_p2109141420113"></a>thread_pool</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p810916144112"><a name="zh-cn_topic_0000001714829153_p810916144112"></a><a name="zh-cn_topic_0000001714829153_p810916144112"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15109514121116"><a name="zh-cn_topic_0000001714829153_p15109514121116"></a><a name="zh-cn_topic_0000001714829153_p15109514121116"></a>&gt;0.9</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1910971401120"><a name="zh-cn_topic_0000001714829153_p1910971401120"></a><a name="zh-cn_topic_0000001714829153_p1910971401120"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p81091914201115"><a name="zh-cn_topic_0000001714829153_p81091914201115"></a><a name="zh-cn_topic_0000001714829153_p81091914201115"></a>√</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p101101314121115"><a name="zh-cn_topic_0000001714829153_p101101314121115"></a><a name="zh-cn_topic_0000001714829153_p101101314121115"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1711041413111"><a name="zh-cn_topic_0000001714829153_p1711041413111"></a><a name="zh-cn_topic_0000001714829153_p1711041413111"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11110161410111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p12110161491115"><a name="zh-cn_topic_0000001714829153_p12110161491115"></a><a name="zh-cn_topic_0000001714829153_p12110161491115"></a>Database latency</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p311014145119"><a name="zh-cn_topic_0000001714829153_p311014145119"></a><a name="zh-cn_topic_0000001714829153_p311014145119"></a>db_latency</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p3110191461118"><a name="zh-cn_topic_0000001714829153_p3110191461118"></a><a name="zh-cn_topic_0000001714829153_p3110191461118"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911020148115"><a name="zh-cn_topic_0000001714829153_p1911020148115"></a><a name="zh-cn_topic_0000001714829153_p1911020148115"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1711014141115"><a name="zh-cn_topic_0000001714829153_p1711014141115"></a><a name="zh-cn_topic_0000001714829153_p1711014141115"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p91101114151111"><a name="zh-cn_topic_0000001714829153_p91101114151111"></a><a name="zh-cn_topic_0000001714829153_p91101114151111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p18110121481119"><a name="zh-cn_topic_0000001714829153_p18110121481119"></a><a name="zh-cn_topic_0000001714829153_p18110121481119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1111081412110"><a name="zh-cn_topic_0000001714829153_p1111081412110"></a><a name="zh-cn_topic_0000001714829153_p1111081412110"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row2110111414117"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p11104145117"><a name="zh-cn_topic_0000001714829153_p11104145117"></a><a name="zh-cn_topic_0000001714829153_p11104145117"></a>Database transaction</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p111041411118"><a name="zh-cn_topic_0000001714829153_p111041411118"></a><a name="zh-cn_topic_0000001714829153_p111041411118"></a>db_transaction</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p19110614171116"><a name="zh-cn_topic_0000001714829153_p19110614171116"></a><a name="zh-cn_topic_0000001714829153_p19110614171116"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p2110514171113"><a name="zh-cn_topic_0000001714829153_p2110514171113"></a><a name="zh-cn_topic_0000001714829153_p2110514171113"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p211031471113"><a name="zh-cn_topic_0000001714829153_p211031471113"></a><a name="zh-cn_topic_0000001714829153_p211031471113"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15110414161120"><a name="zh-cn_topic_0000001714829153_p15110414161120"></a><a name="zh-cn_topic_0000001714829153_p15110414161120"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p19110141417119"><a name="zh-cn_topic_0000001714829153_p19110141417119"></a><a name="zh-cn_topic_0000001714829153_p19110141417119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p211031419112"><a name="zh-cn_topic_0000001714829153_p211031419112"></a><a name="zh-cn_topic_0000001714829153_p211031419112"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row5110141471110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p7110111420112"><a name="zh-cn_topic_0000001714829153_p7110111420112"></a><a name="zh-cn_topic_0000001714829153_p7110111420112"></a>Database temporary file size</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1911061461112"><a name="zh-cn_topic_0000001714829153_p1911061461112"></a><a name="zh-cn_topic_0000001714829153_p1911061461112"></a>db_tmp_file</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p311051415112"><a name="zh-cn_topic_0000001714829153_p311051415112"></a><a name="zh-cn_topic_0000001714829153_p311051415112"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p51104142112"><a name="zh-cn_topic_0000001714829153_p51104142112"></a><a name="zh-cn_topic_0000001714829153_p51104142112"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5110201401119"><a name="zh-cn_topic_0000001714829153_p5110201401119"></a><a name="zh-cn_topic_0000001714829153_p5110201401119"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1711091411112"><a name="zh-cn_topic_0000001714829153_p1711091411112"></a><a name="zh-cn_topic_0000001714829153_p1711091411112"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3110181413114"><a name="zh-cn_topic_0000001714829153_p3110181413114"></a><a name="zh-cn_topic_0000001714829153_p3110181413114"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p0110114141111"><a name="zh-cn_topic_0000001714829153_p0110114141111"></a><a name="zh-cn_topic_0000001714829153_p0110114141111"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row14110214191120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p151101114191118"><a name="zh-cn_topic_0000001714829153_p151101114191118"></a><a name="zh-cn_topic_0000001714829153_p151101114191118"></a>Database execution statement</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1511051418116"><a name="zh-cn_topic_0000001714829153_p1511051418116"></a><a name="zh-cn_topic_0000001714829153_p1511051418116"></a>db_exec_statement</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p15110131451119"><a name="zh-cn_topic_0000001714829153_p15110131451119"></a><a name="zh-cn_topic_0000001714829153_p15110131451119"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p141109149117"><a name="zh-cn_topic_0000001714829153_p141109149117"></a><a name="zh-cn_topic_0000001714829153_p141109149117"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3111151431111"><a name="zh-cn_topic_0000001714829153_p3111151431111"></a><a name="zh-cn_topic_0000001714829153_p3111151431111"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1111414101119"><a name="zh-cn_topic_0000001714829153_p1111414101119"></a><a name="zh-cn_topic_0000001714829153_p1111414101119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p16111914141116"><a name="zh-cn_topic_0000001714829153_p16111914141116"></a><a name="zh-cn_topic_0000001714829153_p16111914141116"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p3111141414116"><a name="zh-cn_topic_0000001714829153_p3111141414116"></a><a name="zh-cn_topic_0000001714829153_p3111141414116"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row0111171461118"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p71111314151114"><a name="zh-cn_topic_0000001714829153_p71111314151114"></a><a name="zh-cn_topic_0000001714829153_p71111314151114"></a>Database deadlock</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p161111814191119"><a name="zh-cn_topic_0000001714829153_p161111814191119"></a><a name="zh-cn_topic_0000001714829153_p161111814191119"></a>db_deadlock</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1911161411119"><a name="zh-cn_topic_0000001714829153_p1911161411119"></a><a name="zh-cn_topic_0000001714829153_p1911161411119"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1211110146112"><a name="zh-cn_topic_0000001714829153_p1211110146112"></a><a name="zh-cn_topic_0000001714829153_p1211110146112"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p211171421119"><a name="zh-cn_topic_0000001714829153_p211171421119"></a><a name="zh-cn_topic_0000001714829153_p211171421119"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p18111131416116"><a name="zh-cn_topic_0000001714829153_p18111131416116"></a><a name="zh-cn_topic_0000001714829153_p18111131416116"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13111191431120"><a name="zh-cn_topic_0000001714829153_p13111191431120"></a><a name="zh-cn_topic_0000001714829153_p13111191431120"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p16111121412112"><a name="zh-cn_topic_0000001714829153_p16111121412112"></a><a name="zh-cn_topic_0000001714829153_p16111121412112"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row131115143117"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p101111714151115"><a name="zh-cn_topic_0000001714829153_p101111714151115"></a><a name="zh-cn_topic_0000001714829153_p101111714151115"></a>Database TPS performance</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1811131420114"><a name="zh-cn_topic_0000001714829153_p1811131420114"></a><a name="zh-cn_topic_0000001714829153_p1811131420114"></a>db_tps</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1511121451112"><a name="zh-cn_topic_0000001714829153_p1511121451112"></a><a name="zh-cn_topic_0000001714829153_p1511121451112"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911118144113"><a name="zh-cn_topic_0000001714829153_p1911118144113"></a><a name="zh-cn_topic_0000001714829153_p1911118144113"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p611112148118"><a name="zh-cn_topic_0000001714829153_p611112148118"></a><a name="zh-cn_topic_0000001714829153_p611112148118"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p141111414131111"><a name="zh-cn_topic_0000001714829153_p141111414131111"></a><a name="zh-cn_topic_0000001714829153_p141111414131111"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1811191481113"><a name="zh-cn_topic_0000001714829153_p1811191481113"></a><a name="zh-cn_topic_0000001714829153_p1811191481113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p121111114171111"><a name="zh-cn_topic_0000001714829153_p121111114171111"></a><a name="zh-cn_topic_0000001714829153_p121111114171111"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1411141415115"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p011110148116"><a name="zh-cn_topic_0000001714829153_p011110148116"></a><a name="zh-cn_topic_0000001714829153_p011110148116"></a>Database top query</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p61111214161115"><a name="zh-cn_topic_0000001714829153_p61111214161115"></a><a name="zh-cn_topic_0000001714829153_p61111214161115"></a>db_top_query</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p14111101401119"><a name="zh-cn_topic_0000001714829153_p14111101401119"></a><a name="zh-cn_topic_0000001714829153_p14111101401119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p811118144119"><a name="zh-cn_topic_0000001714829153_p811118144119"></a><a name="zh-cn_topic_0000001714829153_p811118144119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1111113142115"><a name="zh-cn_topic_0000001714829153_p1111113142115"></a><a name="zh-cn_topic_0000001714829153_p1111113142115"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p151111614161111"><a name="zh-cn_topic_0000001714829153_p151111614161111"></a><a name="zh-cn_topic_0000001714829153_p151111614161111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p121116145118"><a name="zh-cn_topic_0000001714829153_p121116145118"></a><a name="zh-cn_topic_0000001714829153_p121116145118"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p411171415113"><a name="zh-cn_topic_0000001714829153_p411171415113"></a><a name="zh-cn_topic_0000001714829153_p411171415113"></a>No alarm.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row161111114191120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p91111214141110"><a name="zh-cn_topic_0000001714829153_p91111214141110"></a><a name="zh-cn_topic_0000001714829153_p91111214141110"></a>Long transaction</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p101118149111"><a name="zh-cn_topic_0000001714829153_p101118149111"></a><a name="zh-cn_topic_0000001714829153_p101118149111"></a>long_transaction</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p8111151420114"><a name="zh-cn_topic_0000001714829153_p8111151420114"></a><a name="zh-cn_topic_0000001714829153_p8111151420114"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p611181412112"><a name="zh-cn_topic_0000001714829153_p611181412112"></a><a name="zh-cn_topic_0000001714829153_p611181412112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13112414181120"><a name="zh-cn_topic_0000001714829153_p13112414181120"></a><a name="zh-cn_topic_0000001714829153_p13112414181120"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p21125143119"><a name="zh-cn_topic_0000001714829153_p21125143119"></a><a name="zh-cn_topic_0000001714829153_p21125143119"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p61123143112"><a name="zh-cn_topic_0000001714829153_p61123143112"></a><a name="zh-cn_topic_0000001714829153_p61123143112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p191127147111"><a name="zh-cn_topic_0000001714829153_p191127147111"></a><a name="zh-cn_topic_0000001714829153_p191127147111"></a>An alarm is triggered if it exists.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1511291411113"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p1911291413116"><a name="zh-cn_topic_0000001714829153_p1911291413116"></a><a name="zh-cn_topic_0000001714829153_p1911291413116"></a>oldestXmin has not advanced for a long time</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1411219146115"><a name="zh-cn_topic_0000001714829153_p1411219146115"></a><a name="zh-cn_topic_0000001714829153_p1411219146115"></a>xmin_stuck</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p11121414131114"><a name="zh-cn_topic_0000001714829153_p11121414131114"></a><a name="zh-cn_topic_0000001714829153_p11121414131114"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911271410112"><a name="zh-cn_topic_0000001714829153_p1911271410112"></a><a name="zh-cn_topic_0000001714829153_p1911271410112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p811281491113"><a name="zh-cn_topic_0000001714829153_p811281491113"></a><a name="zh-cn_topic_0000001714829153_p811281491113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p611271410116"><a name="zh-cn_topic_0000001714829153_p611271410116"></a><a name="zh-cn_topic_0000001714829153_p611271410116"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p011217144111"><a name="zh-cn_topic_0000001714829153_p011217144111"></a><a name="zh-cn_topic_0000001714829153_p011217144111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p16112111412117"><a name="zh-cn_topic_0000001714829153_p16112111412117"></a><a name="zh-cn_topic_0000001714829153_p16112111412117"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row171121914111120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p181121514121116"><a name="zh-cn_topic_0000001714829153_p181121514121116"></a><a name="zh-cn_topic_0000001714829153_p181121514121116"></a>Xlog accumulation</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p101126147116"><a name="zh-cn_topic_0000001714829153_p101126147116"></a><a name="zh-cn_topic_0000001714829153_p101126147116"></a>xlog_accumulate</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p111291431114"><a name="zh-cn_topic_0000001714829153_p111291431114"></a><a name="zh-cn_topic_0000001714829153_p111291431114"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1411214147111"><a name="zh-cn_topic_0000001714829153_p1411214147111"></a><a name="zh-cn_topic_0000001714829153_p1411214147111"></a>&gt;3000</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p61121014161114"><a name="zh-cn_topic_0000001714829153_p61121014161114"></a><a name="zh-cn_topic_0000001714829153_p61121014161114"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5112161491119"><a name="zh-cn_topic_0000001714829153_p5112161491119"></a><a name="zh-cn_topic_0000001714829153_p5112161491119"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5112171416111"><a name="zh-cn_topic_0000001714829153_p5112171416111"></a><a name="zh-cn_topic_0000001714829153_p5112171416111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p10112161421112"><a name="zh-cn_topic_0000001714829153_p10112161421112"></a><a name="zh-cn_topic_0000001714829153_p10112161421112"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row511291431111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p5112714151113"><a name="zh-cn_topic_0000001714829153_p5112714151113"></a><a name="zh-cn_topic_0000001714829153_p5112714151113"></a>Core dump</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p12112914171112"><a name="zh-cn_topic_0000001714829153_p12112914171112"></a><a name="zh-cn_topic_0000001714829153_p12112914171112"></a>core_dump</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1211241418112"><a name="zh-cn_topic_0000001714829153_p1211241418112"></a><a name="zh-cn_topic_0000001714829153_p1211241418112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1211212144115"><a name="zh-cn_topic_0000001714829153_p1211212144115"></a><a name="zh-cn_topic_0000001714829153_p1211212144115"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p71121414111113"><a name="zh-cn_topic_0000001714829153_p71121414111113"></a><a name="zh-cn_topic_0000001714829153_p71121414111113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p4112101417118"><a name="zh-cn_topic_0000001714829153_p4112101417118"></a><a name="zh-cn_topic_0000001714829153_p4112101417118"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p17112131451113"><a name="zh-cn_topic_0000001714829153_p17112131451113"></a><a name="zh-cn_topic_0000001714829153_p17112131451113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p8112191410118"><a name="zh-cn_topic_0000001714829153_p8112191410118"></a><a name="zh-cn_topic_0000001714829153_p8112191410118"></a>An alarm is triggered if it exists.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row0112101441113"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p141122014151110"><a name="zh-cn_topic_0000001714829153_p141122014151110"></a><a name="zh-cn_topic_0000001714829153_p141122014151110"></a>Dynamic memory</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p12112191461113"><a name="zh-cn_topic_0000001714829153_p12112191461113"></a><a name="zh-cn_topic_0000001714829153_p12112191461113"></a>dynamic_memory</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p711219146119"><a name="zh-cn_topic_0000001714829153_p711219146119"></a><a name="zh-cn_topic_0000001714829153_p711219146119"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p41121614121110"><a name="zh-cn_topic_0000001714829153_p41121614121110"></a><a name="zh-cn_topic_0000001714829153_p41121614121110"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p211331451115"><a name="zh-cn_topic_0000001714829153_p211331451115"></a><a name="zh-cn_topic_0000001714829153_p211331451115"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3113171461111"><a name="zh-cn_topic_0000001714829153_p3113171461111"></a><a name="zh-cn_topic_0000001714829153_p3113171461111"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5113131421120"><a name="zh-cn_topic_0000001714829153_p5113131421120"></a><a name="zh-cn_topic_0000001714829153_p5113131421120"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p3113121461113"><a name="zh-cn_topic_0000001714829153_p3113121461113"></a><a name="zh-cn_topic_0000001714829153_p3113121461113"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row19113514141119"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p5113191481113"><a name="zh-cn_topic_0000001714829153_p5113191481113"></a><a name="zh-cn_topic_0000001714829153_p5113191481113"></a>Program memory</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1411311148117"><a name="zh-cn_topic_0000001714829153_p1411311148117"></a><a name="zh-cn_topic_0000001714829153_p1411311148117"></a>process_memory</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p611371441118"><a name="zh-cn_topic_0000001714829153_p611371441118"></a><a name="zh-cn_topic_0000001714829153_p611371441118"></a>[0, 1]</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p311311145111"><a name="zh-cn_topic_0000001714829153_p311311145111"></a><a name="zh-cn_topic_0000001714829153_p311311145111"></a>&gt;0.8</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p8113101461119"><a name="zh-cn_topic_0000001714829153_p8113101461119"></a><a name="zh-cn_topic_0000001714829153_p8113101461119"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p91132014151110"><a name="zh-cn_topic_0000001714829153_p91132014151110"></a><a name="zh-cn_topic_0000001714829153_p91132014151110"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911361413111"><a name="zh-cn_topic_0000001714829153_p1911361413111"></a><a name="zh-cn_topic_0000001714829153_p1911361413111"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p2113141471112"><a name="zh-cn_topic_0000001714829153_p2113141471112"></a><a name="zh-cn_topic_0000001714829153_p2113141471112"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row911318146111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p11113914201120"><a name="zh-cn_topic_0000001714829153_p11113914201120"></a><a name="zh-cn_topic_0000001714829153_p11113914201120"></a>Other memory</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p161131514161112"><a name="zh-cn_topic_0000001714829153_p161131514161112"></a><a name="zh-cn_topic_0000001714829153_p161131514161112"></a>other_memory</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1111316144112"><a name="zh-cn_topic_0000001714829153_p1111316144112"></a><a name="zh-cn_topic_0000001714829153_p1111316144112"></a>[0, ∞)</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1711311413112"><a name="zh-cn_topic_0000001714829153_p1711311413112"></a><a name="zh-cn_topic_0000001714829153_p1711311413112"></a>&gt;20*1024</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p131131214101120"><a name="zh-cn_topic_0000001714829153_p131131214101120"></a><a name="zh-cn_topic_0000001714829153_p131131214101120"></a>-</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p11113101491112"><a name="zh-cn_topic_0000001714829153_p11113101491112"></a><a name="zh-cn_topic_0000001714829153_p11113101491112"></a>√</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13113114161112"><a name="zh-cn_topic_0000001714829153_p13113114161112"></a><a name="zh-cn_topic_0000001714829153_p13113114161112"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p611313141115"><a name="zh-cn_topic_0000001714829153_p611313141115"></a><a name="zh-cn_topic_0000001714829153_p611313141115"></a>An alarm is triggered when any exception occurs.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row15113181491114"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p18113181431115"><a name="zh-cn_topic_0000001714829153_p18113181431115"></a><a name="zh-cn_topic_0000001714829153_p18113181431115"></a>GUC parameter</p></td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p19113161431113"><a name="zh-cn_topic_0000001714829153_p19113161431113"></a><a name="zh-cn_topic_0000001714829153_p19113161431113"></a>guc_params</p></td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p20113181416110"><a name="zh-cn_topic_0000001714829153_p20113181416110"></a><a name="zh-cn_topic_0000001714829153_p20113181416110"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p01131814111110"><a name="zh-cn_topic_0000001714829153_p01131814111110"></a><a name="zh-cn_topic_0000001714829153_p01131814111110"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p711341412115"><a name="zh-cn_topic_0000001714829153_p711341412115"></a><a name="zh-cn_topic_0000001714829153_p711341412115"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p711315149117"><a name="zh-cn_topic_0000001714829153_p711315149117"></a><a name="zh-cn_topic_0000001714829153_p711315149117"></a>×</p></td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6113191419113"><a name="zh-cn_topic_0000001714829153_p6113191419113"></a><a name="zh-cn_topic_0000001714829153_p6113191419113"></a>×</p></td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p6113201414116"><a name="zh-cn_topic_0000001714829153_p6113201414116"></a><a name="zh-cn_topic_0000001714829153_p6113201414116"></a>An alarm is triggered if a value exists in warning.</p></td>
</tr>
</tbody>
</table>

>[!NOTE]Note
>
>- The two alarm types, continuous rise and prediction exceeding threshold, involve detection algorithms and consume DBMind performance. Reduce the number of enabled alarms during configuration to avoid affecting service performance and response time.
>- In addition to determining that the data itself rises continuously, the continuous rise detector also requires that more than 80% of the data within the time range exceeds the threshold range before it determines a continuous rise alarm.
>- Prediction exceeding threshold (alarm) requires setting the prediction time range in minutes, with a setting range of \(0, 48 \* 60\]. It is recommended that the prediction time length be shorter than the inspection data time length, or adjust the prediction time length through a custom threshold.
> Prediction exceeding threshold (alarm) predicts the values within the future time range and determines whether the values exceed the threshold. Prediction exceeding threshold does not judge the inspection data. If the inspection data already exceeds the threshold, prediction continues to determine whether the values will keep exceeding the threshold in the future or return to the normal range at some point.

## Usage Guide<a id="useguide"></a>

### Implementing Function Calls Through Inspection-Related APIs<a name="zh-cn_topic_0000001714949077_section6883174114717"></a>

- <a name="zh-cn_topic_0000001714949077_li1189616251116"></a>Intelligent inspection API

    Example:

    ```
    curl -X 'POST' "http://127.0.0.1:8080/v1/api/app/real-time-inspection?inspection_type=real_time_check&start_time=1689210000000&end_time=1689296400000&instance=127.0.0.1:5432" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"system_resource": ["os_mem_usage"], "instance_status": [], "database_resource": [], "database_performance": [], "diagnosis_optimization": []}' -H "Authorization: bearer xxx"
    ```

    If HTTPS is used, the query example is as follows:

    ```
    curl -X 'POST' "https://127.0.0.1:8080/v1/api/app/real-time-inspection?inspection_type=real_time_check&start_time=1689210000000&end_time=1689296400000&instance=127.0.0.1:5432" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"system_resource": ["os_mem_usage"], "instance_status": [], "database_resource": [], "database_performance": [], "diagnosis_optimization": []}' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    If a custom threshold is used, the query example is as follows:

    ```
    curl -X 'POST' "https://127.0.0.1:8080/v1/api/app/real-time-inspection?inspection_type=real_time_check&start_time=1689210000000&end_time=1689296400000&instance=127.0.0.1:5432" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"system_resource": [{"os_mem_usage": {"increase": false, "threshold": [], "forecast": [1440, 0.0, 0.8]}}], "instance_status": [], "database_resource": [], "database_performance": [], "diagnosis_optimization": []}' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    The following is an example of the returned structure:

    ```
    {
     "data": {
      "conclusion": {
       "full_score": 0.06,
       "health_score": 0.06,
       "health_status": "bad",
       "top3": []
      },
      "database_performance": {},
      "database_resource": {},
      "diagnosis_optimization": {},
      "instance_status": {},
      "system_resource": {
       "os_mem_usage": {
        "127.0.0.1": {
         "data": [0.31643905373281667],
         "statistic": {
          "avg": 0.311,
          "max": 0.3166,
          "min": 0.3057,
          "the_95th": 0.3153
         },
         "timestamps": [1694674713000],
         "warnings": {
          "increase_warning": true
         }
        }
       }
      }
     },
     "success": true
    }
    ```

- Example of the API for displaying inspection tasks:

    ```
    curl -X 'GET' "http://127.0.0.1:8080/v1/api/app/real-time-inspection/list?instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx"
    ```

    If HTTPS is used, the query example is as follows:

    ```
    curl -X 'GET' "https://127.0.0.1:8080/v1/api/app/real-time-inspection/list?instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    The return structure is as follows:

    ```
    {"data":{"header":["instance","start","end","id","state","cost_time","inspection_type"],"rows":[["127.0.0.1:5432",1689210000000,1689296400000,5,"success",0.033701,"real_time_check"]]},"success":true}
    ```

- Example of the API for obtaining the inspection result of a specified inspection task:

    ```
    curl -X 'GET' "http://127.0.0.1:8080/v1/api/summary/real-time-inspection?spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx"
    ```

    If HTTPS is used, the query example is as follows:

    ```
    curl -X 'GET' "https://127.0.0.1:8080/v1/api/summary/real-time-inspection?spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    The return structure is the same as that of [intelligent inspection API return structure](#zh-cn_topic_0000001714949077_li1189616251116).

- Example of the API for deleting a specified inspection task:

    ```
    curl -X 'DELETE' "http://127.0.0.1:8080/v1/api/app/real-time-inspection? spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx"
    ```

    If HTTPS is used, the deletion example is as follows:

    ```
    curl -X 'DELETE' "https://127.0.0.1:8080/v1/api/app/real-time-inspection? spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    The return structure is as follows:

    ```
    {"data":{"success":true},"success":true}
    ```

### Custom Threshold Parameters<a name="zh-cn_topic_0000001714949077_section3551124417460"></a>

- For the custom threshold parameter passing method, the key corresponding to each alarm type is shown in [Table 1](#zh-cn_topic_0000001714949077_table1895281092115):

    **Table 1**  Alarm types and corresponding keys

    <a name="zh-cn_topic_0000001714949077_table1895281092115"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0000001714949077_row169714104215"><th class="cellrowborder" valign="top" width="56.57%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0000001714949077_p6971710162118"><a name="zh-cn_topic_0000001714949077_p6971710162118"></a><a name="zh-cn_topic_0000001714949077_p6971710162118"></a>Alarm Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.43%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0000001714949077_p897141017217"><a name="zh-cn_topic_0000001714949077_p897141017217"></a><a name="zh-cn_topic_0000001714949077_p897141017217"></a>Key</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0000001714949077_row2097121013215"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p597111015211"><a name="zh-cn_topic_0000001714949077_p597111015211"></a><a name="zh-cn_topic_0000001714949077_p597111015211"></a>Continuously Rising</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p1597181072112"><a name="zh-cn_topic_0000001714949077_p1597181072112"></a><a name="zh-cn_topic_0000001714949077_p1597181072112"></a>increase</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row9971171042114"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p209711100216"><a name="zh-cn_topic_0000001714949077_p209711100216"></a><a name="zh-cn_topic_0000001714949077_p209711100216"></a>Exceeds Threshold</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p14971010132113"><a name="zh-cn_topic_0000001714949077_p14971010132113"></a><a name="zh-cn_topic_0000001714949077_p14971010132113"></a>threshold</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row12971181042114"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p1197116103215"><a name="zh-cn_topic_0000001714949077_p1197116103215"></a><a name="zh-cn_topic_0000001714949077_p1197116103215"></a>Predicted to Exceed Threshold</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p0971171092117"><a name="zh-cn_topic_0000001714949077_p0971171092117"></a><a name="zh-cn_topic_0000001714949077_p0971171092117"></a>forecast</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row39723105214"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p119723108217"><a name="zh-cn_topic_0000001714949077_p119723108217"></a><a name="zh-cn_topic_0000001714949077_p119723108217"></a>Incorrect File Type</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p697213106218"><a name="zh-cn_topic_0000001714949077_p697213106218"></a><a name="zh-cn_topic_0000001714949077_p697213106218"></a>ftype</p>
    </td>
    </tr>
    </tbody>
    </table>

    - Enable the default alarm configuration (versions earlier than 505.1.0)

        ```
        {
        "system_resource": [
        "os_mem_usage"
        ],
        "instance_status": [],
        "database_resource": [],
        "database_performance": [],
        "diagnosis_optimization": []
        }
        ```

    - Enable the default alarm configuration (505.1.0 and later)

        ```
        {
        "system_resource": [
        {
        "os_mem_usage": true
        }
        ],
        "instance_status": [],
        "database_resource": [],
        "database_performance": [],
        "diagnosis_optimization": []
        }
        ```

    - Do not enable alarms

        ```
        {
        "system_resource": [
        {
        "os_mem_usage": false
        }
        ],
        "instance_status": [],
        "database_resource": [],
        "database_performance": [],
        "diagnosis_optimization": []
        }
        ```

    - Enable custom alarms. As shown below, os\_mem\_usage enable the continuous rise alarm, custom threshold alarm, and forecast threshold alarm; os\_disk\_usage do not enable the continuous rise alarm and threshold alarm, but enable the forecast threshold alarm.

        ```
        {
        "system_resource": [
        {
        "os_mem_usage": {
        "increase": true,
        "threshold": [0.0, 0.8],
        "forecast": [1440, 0.0, 0.8]
        },
        "os_disk_usage": {
        "forecast": [1440, 0.0, 0.8]
        }
        }
        ],
        "instance_status": [],
        "database_resource": [],
        "database_performance": [],
        "diagnosis_optimization": []
        }
        ```

- Some inspection items do not support custom threshold configuration: component exception, log exception check, database Top Query, long transaction, oldestXmin has not advanced for a long time, Core dump, and GUC parameter.
- For the threshold types supported by each inspection item, see the custom threshold table in [Overview](#overview). If the frontend inputs an unsupported alarm type, an error is reported.
- For some inspection items, there are sub-inspection items, as shown in [Table 2](#zh-cn_topic_0000001714949077_table76804585243):

    **Table 2**  Inspection items and sub-inspection items

    <a name="zh-cn_topic_0000001714949077_table76804585243"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0000001714949077_row4715658142420"><th class="cellrowborder" valign="top" width="45.45%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0000001714949077_p671515862413"><a name="zh-cn_topic_0000001714949077_p671515862413"></a><a name="zh-cn_topic_0000001714949077_p671515862413"></a>Inspection Item</p>
    </th>
    <th class="cellrowborder" valign="top" width="54.55%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0000001714949077_p571525862413"><a name="zh-cn_topic_0000001714949077_p571525862413"></a><a name="zh-cn_topic_0000001714949077_p571525862413"></a>Sub-inspection Item</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0000001714949077_row471513586248"><td class="cellrowborder" rowspan="2" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p107151258102418"><a name="zh-cn_topic_0000001714949077_p107151258102418"></a><a name="zh-cn_topic_0000001714949077_p107151258102418"></a>os_cpu_usage</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p5715165852413"><a name="zh-cn_topic_0000001714949077_p5715165852413"></a><a name="zh-cn_topic_0000001714949077_p5715165852413"></a>cpu_user</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row971555832415"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p2715158102418"><a name="zh-cn_topic_0000001714949077_p2715158102418"></a><a name="zh-cn_topic_0000001714949077_p2715158102418"></a>cpu_iowait</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row1771545822414"><td class="cellrowborder" rowspan="2" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p11715258142412"><a name="zh-cn_topic_0000001714949077_p11715258142412"></a><a name="zh-cn_topic_0000001714949077_p11715258142412"></a>user_login_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p3715175872419"><a name="zh-cn_topic_0000001714949077_p3715175872419"></a><a name="zh-cn_topic_0000001714949077_p3715175872419"></a>login</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row11715145842410"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p197156584249"><a name="zh-cn_topic_0000001714949077_p197156584249"></a><a name="zh-cn_topic_0000001714949077_p197156584249"></a>logout</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row177156583240"><td class="cellrowborder" rowspan="2" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p1371585819244"><a name="zh-cn_topic_0000001714949077_p1371585819244"></a><a name="zh-cn_topic_0000001714949077_p1371585819244"></a>db_latency</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p17715115892417"><a name="zh-cn_topic_0000001714949077_p17715115892417"></a><a name="zh-cn_topic_0000001714949077_p17715115892417"></a>p95</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row1771555812410"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p127151058112420"><a name="zh-cn_topic_0000001714949077_p127151058112420"></a><a name="zh-cn_topic_0000001714949077_p127151058112420"></a>p80</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row97152581245"><td class="cellrowborder" rowspan="2" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p1871535813249"><a name="zh-cn_topic_0000001714949077_p1871535813249"></a><a name="zh-cn_topic_0000001714949077_p1871535813249"></a>db_transaction</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p1171519587243"><a name="zh-cn_topic_0000001714949077_p1171519587243"></a><a name="zh-cn_topic_0000001714949077_p1171519587243"></a>commit</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row1671555822411"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p8715458122413"><a name="zh-cn_topic_0000001714949077_p8715458122413"></a><a name="zh-cn_topic_0000001714949077_p8715458122413"></a>rollback</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row17715175817242"><td class="cellrowborder" rowspan="4" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p10715205819248"><a name="zh-cn_topic_0000001714949077_p10715205819248"></a><a name="zh-cn_topic_0000001714949077_p10715205819248"></a>db_exec_statement</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p7715858122412"><a name="zh-cn_topic_0000001714949077_p7715858122412"></a><a name="zh-cn_topic_0000001714949077_p7715858122412"></a>select</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row3715185832418"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p117151358182417"><a name="zh-cn_topic_0000001714949077_p117151358182417"></a><a name="zh-cn_topic_0000001714949077_p117151358182417"></a>update</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row671513588248"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p5715175812249"><a name="zh-cn_topic_0000001714949077_p5715175812249"></a><a name="zh-cn_topic_0000001714949077_p5715175812249"></a>insert</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row1171510584246"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p197155588242"><a name="zh-cn_topic_0000001714949077_p197155588242"></a><a name="zh-cn_topic_0000001714949077_p197155588242"></a>delete</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row7715058122411"><td class="cellrowborder" rowspan="2" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p14715205813246"><a name="zh-cn_topic_0000001714949077_p14715205813246"></a><a name="zh-cn_topic_0000001714949077_p14715205813246"></a>db_tps</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p8716185818244"><a name="zh-cn_topic_0000001714949077_p8716185818244"></a><a name="zh-cn_topic_0000001714949077_p8716185818244"></a>tps</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row167161358172415"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p971616583249"><a name="zh-cn_topic_0000001714949077_p971616583249"></a><a name="zh-cn_topic_0000001714949077_p971616583249"></a>qps</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row1871655892416"><td class="cellrowborder" rowspan="2" valign="top" width="45.45%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p1771645814240"><a name="zh-cn_topic_0000001714949077_p1771645814240"></a><a name="zh-cn_topic_0000001714949077_p1771645814240"></a>dynamic_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.55%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p1871695811248"><a name="zh-cn_topic_0000001714949077_p1871695811248"></a><a name="zh-cn_topic_0000001714949077_p1871695811248"></a>dynamic_used_memory</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row1671675882417"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p1671645862418"><a name="zh-cn_topic_0000001714949077_p1671645862418"></a><a name="zh-cn_topic_0000001714949077_p1671645862418"></a>dynamic_used_shrctx</p>
    </td>
    </tr>
    </tbody>
    </table>

    When the alarm configurations of sub-inspection items are identical, you can omit the repeated values as follows:

    - Repeatedly set os\_cpu\_usage custom thresholds

        ```
        {
        "system_resource": [
        {
        "os_cpu_usage": {
        "cpu_user": {
        "increase": false,
        "threshold": [],
        "forecast": [1440, 0.0, 0.8]
        },
        "cpu_iowait": {
        "increase": false,
        "threshold": [],
        "forecast": [1440, 0.0, 0.8]
        }
        }
        }
        ],
        "instance_status": [],
        "database_resource": [],
        "database_performance": [],
        "diagnosis_optimization": []
        }
        ```

    - Simplified setting os\_cpu\_usage custom threshold

        ```
        {
        "system_resource": [
        {
        "os_cpu_usage": {
        "increase": false,
        "threshold": [],
        "forecast": [1440, 0.0, 0.8]
        }
        }
        ],
        "instance_status": [],
        "database_resource": [],
        "database_performance": [],
        "diagnosis_optimization": []
        }
        ```

### Example of Return Values of Inspection Items<a name="zh-cn_topic_0000001714949077_section194441655195014"></a>

- Database instance

    Take one primary DN and two standby DNs as an example, with three nodes in total:

    Primary DN: 127.0.0.1:19996

    Standby DNs: 127.0.0.2:19996, 127.0.0.3:19996

- Return structure types
    - ①: Keyed by node: \{"127.0.0.1": xxx, "127.0.0.2": xxx, "127.0.0.3": xxx\}
    - ②: Keyed by DN: \{"127.0.0.1:19996": xxx, "127.0.0.2:19996": xxx, "127.0.0.3:19996": xxx\}
    - ③: Keyed by DB: \{"db1": xxx, "db2": xxx, "db3": xxx\}
    - ④: Returns a list: \[\{xxx\}\]

The return structure corresponding to an inspection item is shown in [Table 3](#zh-cn_topic_0000001714949077_table13634114013376).

**Table 3**  Inspection item return structure

<a name="zh-cn_topic_0000001714949077_table13634114013376"></a>
<table><tbody><tr id="zh-cn_topic_0000001714949077_row1732440173715"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1732840133717"><a name="zh-cn_topic_0000001714949077_p1732840133717"></a><a name="zh-cn_topic_0000001714949077_p1732840133717"></a>Inspection Item</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1073284023716"><a name="zh-cn_topic_0000001714949077_p1073284023716"></a><a name="zh-cn_topic_0000001714949077_p1073284023716"></a>Return Structure</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p173218408376"><a name="zh-cn_topic_0000001714949077_p173218408376"></a><a name="zh-cn_topic_0000001714949077_p173218408376"></a>Remarks</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row37321940143717"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p11732174019376"><a name="zh-cn_topic_0000001714949077_p11732174019376"></a><a name="zh-cn_topic_0000001714949077_p11732174019376"></a>os_cpu_usage</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p6732204014378"><a name="zh-cn_topic_0000001714949077_p6732204014378"></a><a name="zh-cn_topic_0000001714949077_p6732204014378"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p2732440153712"><a name="zh-cn_topic_0000001714949077_p2732440153712"></a><a name="zh-cn_topic_0000001714949077_p2732440153712"></a>Two-layer structure with sub-inspection items: cpu_user and cpu_iowait.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row5732134014377"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p7732540193713"><a name="zh-cn_topic_0000001714949077_p7732540193713"></a><a name="zh-cn_topic_0000001714949077_p7732540193713"></a>os_disk_ioutils</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p67321407373"><a name="zh-cn_topic_0000001714949077_p67321407373"></a><a name="zh-cn_topic_0000001714949077_p67321407373"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1732940193713"><a name="zh-cn_topic_0000001714949077_p1732940193713"></a><a name="zh-cn_topic_0000001714949077_p1732940193713"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row177323401373"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p17732104033710"><a name="zh-cn_topic_0000001714949077_p17732104033710"></a><a name="zh-cn_topic_0000001714949077_p17732104033710"></a>os_disk_usage</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p6732114093710"><a name="zh-cn_topic_0000001714949077_p6732114093710"></a><a name="zh-cn_topic_0000001714949077_p6732114093710"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1073216408379"><a name="zh-cn_topic_0000001714949077_p1073216408379"></a><a name="zh-cn_topic_0000001714949077_p1073216408379"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1973294033720"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p573244033712"><a name="zh-cn_topic_0000001714949077_p573244033712"></a><a name="zh-cn_topic_0000001714949077_p573244033712"></a>os_mem_usage</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p973224063718"><a name="zh-cn_topic_0000001714949077_p973224063718"></a><a name="zh-cn_topic_0000001714949077_p973224063718"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p173214033714"><a name="zh-cn_topic_0000001714949077_p173214033714"></a><a name="zh-cn_topic_0000001714949077_p173214033714"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row16732144023720"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p19732164073719"><a name="zh-cn_topic_0000001714949077_p19732164073719"></a><a name="zh-cn_topic_0000001714949077_p19732164073719"></a>network_packet_loss</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1473274012371"><a name="zh-cn_topic_0000001714949077_p1473274012371"></a><a name="zh-cn_topic_0000001714949077_p1473274012371"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p14733840163712"><a name="zh-cn_topic_0000001714949077_p14733840163712"></a><a name="zh-cn_topic_0000001714949077_p14733840163712"></a>A two-layer structure that displays the node-to-node network status.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row127337406379"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p873318408375"><a name="zh-cn_topic_0000001714949077_p873318408375"></a><a name="zh-cn_topic_0000001714949077_p873318408375"></a>component_error</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p2733184073718"><a name="zh-cn_topic_0000001714949077_p2733184073718"></a><a name="zh-cn_topic_0000001714949077_p2733184073718"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1773354018377"><a name="zh-cn_topic_0000001714949077_p1773354018377"></a><a name="zh-cn_topic_0000001714949077_p1773354018377"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row2733184013375"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p127331240163716"><a name="zh-cn_topic_0000001714949077_p127331240163716"></a><a name="zh-cn_topic_0000001714949077_p127331240163716"></a>data_directory</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1973384093715"><a name="zh-cn_topic_0000001714949077_p1973384093715"></a><a name="zh-cn_topic_0000001714949077_p1973384093715"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p473344015374"><a name="zh-cn_topic_0000001714949077_p473344015374"></a><a name="zh-cn_topic_0000001714949077_p473344015374"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row873394073714"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p157331640113715"><a name="zh-cn_topic_0000001714949077_p157331640113715"></a><a name="zh-cn_topic_0000001714949077_p157331640113715"></a>log_directory</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1173384013717"><a name="zh-cn_topic_0000001714949077_p1173384013717"></a><a name="zh-cn_topic_0000001714949077_p1173384013717"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p173354013376"><a name="zh-cn_topic_0000001714949077_p173354013376"></a><a name="zh-cn_topic_0000001714949077_p173354013376"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1073344023717"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p9733440193716"><a name="zh-cn_topic_0000001714949077_p9733440193716"></a><a name="zh-cn_topic_0000001714949077_p9733440193716"></a>db_size</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p167335407372"><a name="zh-cn_topic_0000001714949077_p167335407372"></a><a name="zh-cn_topic_0000001714949077_p167335407372"></a>③</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1273316406371"><a name="zh-cn_topic_0000001714949077_p1273316406371"></a><a name="zh-cn_topic_0000001714949077_p1273316406371"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row37331140193713"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p16733540163717"><a name="zh-cn_topic_0000001714949077_p16733540163717"></a><a name="zh-cn_topic_0000001714949077_p16733540163717"></a>buffer_hit_rate</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p117331540153712"><a name="zh-cn_topic_0000001714949077_p117331540153712"></a><a name="zh-cn_topic_0000001714949077_p117331540153712"></a>③</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p117331540143720"><a name="zh-cn_topic_0000001714949077_p117331540143720"></a><a name="zh-cn_topic_0000001714949077_p117331540143720"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row573344093718"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1873311403376"><a name="zh-cn_topic_0000001714949077_p1873311403376"></a><a name="zh-cn_topic_0000001714949077_p1873311403376"></a>user_login_out</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p873374003720"><a name="zh-cn_topic_0000001714949077_p873374003720"></a><a name="zh-cn_topic_0000001714949077_p873374003720"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p5734640193717"><a name="zh-cn_topic_0000001714949077_p5734640193717"></a><a name="zh-cn_topic_0000001714949077_p5734640193717"></a>Two-layer structure with sub-inspection items: login and logout.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1173454093719"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p18734164018376"><a name="zh-cn_topic_0000001714949077_p18734164018376"></a><a name="zh-cn_topic_0000001714949077_p18734164018376"></a>active_session_rate</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p17342040113718"><a name="zh-cn_topic_0000001714949077_p17342040113718"></a><a name="zh-cn_topic_0000001714949077_p17342040113718"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1673424014379"><a name="zh-cn_topic_0000001714949077_p1673424014379"></a><a name="zh-cn_topic_0000001714949077_p1673424014379"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1973494015374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p773464053710"><a name="zh-cn_topic_0000001714949077_p773464053710"></a><a name="zh-cn_topic_0000001714949077_p773464053710"></a>log_error_check</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p3734194043715"><a name="zh-cn_topic_0000001714949077_p3734194043715"></a><a name="zh-cn_topic_0000001714949077_p3734194043715"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p2734040133717"><a name="zh-cn_topic_0000001714949077_p2734040133717"></a><a name="zh-cn_topic_0000001714949077_p2734040133717"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row14734114063711"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1734194010374"><a name="zh-cn_topic_0000001714949077_p1734194010374"></a><a name="zh-cn_topic_0000001714949077_p1734194010374"></a>thread_pool</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1373464010371"><a name="zh-cn_topic_0000001714949077_p1373464010371"></a><a name="zh-cn_topic_0000001714949077_p1373464010371"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1734154017371"><a name="zh-cn_topic_0000001714949077_p1734154017371"></a><a name="zh-cn_topic_0000001714949077_p1734154017371"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row5734114020375"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p273424017377"><a name="zh-cn_topic_0000001714949077_p273424017377"></a><a name="zh-cn_topic_0000001714949077_p273424017377"></a>db_latency</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p7734124011375"><a name="zh-cn_topic_0000001714949077_p7734124011375"></a><a name="zh-cn_topic_0000001714949077_p7734124011375"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p273411408379"><a name="zh-cn_topic_0000001714949077_p273411408379"></a><a name="zh-cn_topic_0000001714949077_p273411408379"></a>Two-layer structure with sub-inspection items: p80 and p95.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row7734124083719"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p7734104083711"><a name="zh-cn_topic_0000001714949077_p7734104083711"></a><a name="zh-cn_topic_0000001714949077_p7734104083711"></a>db_transaction</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p4734144013375"><a name="zh-cn_topic_0000001714949077_p4734144013375"></a><a name="zh-cn_topic_0000001714949077_p4734144013375"></a>③</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p177341140103713"><a name="zh-cn_topic_0000001714949077_p177341140103713"></a><a name="zh-cn_topic_0000001714949077_p177341140103713"></a>Two-layer structure with sub-inspection items: commit and rollback.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row3734154011374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p4734140143712"><a name="zh-cn_topic_0000001714949077_p4734140143712"></a><a name="zh-cn_topic_0000001714949077_p4734140143712"></a>db_tmp_file</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1734124023712"><a name="zh-cn_topic_0000001714949077_p1734124023712"></a><a name="zh-cn_topic_0000001714949077_p1734124023712"></a>③</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p973534010372"><a name="zh-cn_topic_0000001714949077_p973534010372"></a><a name="zh-cn_topic_0000001714949077_p973534010372"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1073519402374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p773514018377"><a name="zh-cn_topic_0000001714949077_p773514018377"></a><a name="zh-cn_topic_0000001714949077_p773514018377"></a>db_exec_statement</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p14735104019379"><a name="zh-cn_topic_0000001714949077_p14735104019379"></a><a name="zh-cn_topic_0000001714949077_p14735104019379"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p47355404376"><a name="zh-cn_topic_0000001714949077_p47355404376"></a><a name="zh-cn_topic_0000001714949077_p47355404376"></a>Two-layer structure with sub-inspection items: select, update, insert, and delete.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row17356407379"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p12735640133718"><a name="zh-cn_topic_0000001714949077_p12735640133718"></a><a name="zh-cn_topic_0000001714949077_p12735640133718"></a>db_deadlock</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1573544063714"><a name="zh-cn_topic_0000001714949077_p1573544063714"></a><a name="zh-cn_topic_0000001714949077_p1573544063714"></a>③</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p5473928122017"><a name="zh-cn_topic_0000001714949077_p5473928122017"></a><a name="zh-cn_topic_0000001714949077_p5473928122017"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1773519402374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p177351240173717"><a name="zh-cn_topic_0000001714949077_p177351240173717"></a><a name="zh-cn_topic_0000001714949077_p177351240173717"></a>db_tps</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p15735164083711"><a name="zh-cn_topic_0000001714949077_p15735164083711"></a><a name="zh-cn_topic_0000001714949077_p15735164083711"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p19735144023719"><a name="zh-cn_topic_0000001714949077_p19735144023719"></a><a name="zh-cn_topic_0000001714949077_p19735144023719"></a>Two-layer structure with sub-inspection items: qps and tps.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row7735124020376"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p9735164073717"><a name="zh-cn_topic_0000001714949077_p9735164073717"></a><a name="zh-cn_topic_0000001714949077_p9735164073717"></a>db_top_query</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p11735340133712"><a name="zh-cn_topic_0000001714949077_p11735340133712"></a><a name="zh-cn_topic_0000001714949077_p11735340133712"></a>④</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p229813316202"><a name="zh-cn_topic_0000001714949077_p229813316202"></a><a name="zh-cn_topic_0000001714949077_p229813316202"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row57351640173710"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p4735840163711"><a name="zh-cn_topic_0000001714949077_p4735840163711"></a><a name="zh-cn_topic_0000001714949077_p4735840163711"></a>long_transaction</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p17735184016370"><a name="zh-cn_topic_0000001714949077_p17735184016370"></a><a name="zh-cn_topic_0000001714949077_p17735184016370"></a>④</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p17356405377"><a name="zh-cn_topic_0000001714949077_p17356405377"></a><a name="zh-cn_topic_0000001714949077_p17356405377"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row12735154014373"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p12735184013377"><a name="zh-cn_topic_0000001714949077_p12735184013377"></a><a name="zh-cn_topic_0000001714949077_p12735184013377"></a>xmin_stuck</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p15735104013718"><a name="zh-cn_topic_0000001714949077_p15735104013718"></a><a name="zh-cn_topic_0000001714949077_p15735104013718"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p8735340183711"><a name="zh-cn_topic_0000001714949077_p8735340183711"></a><a name="zh-cn_topic_0000001714949077_p8735340183711"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row10735204019371"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p13735104017374"><a name="zh-cn_topic_0000001714949077_p13735104017374"></a><a name="zh-cn_topic_0000001714949077_p13735104017374"></a>xlog_accumulate</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p157351940123711"><a name="zh-cn_topic_0000001714949077_p157351940123711"></a><a name="zh-cn_topic_0000001714949077_p157351940123711"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1073619408374"><a name="zh-cn_topic_0000001714949077_p1073619408374"></a><a name="zh-cn_topic_0000001714949077_p1073619408374"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1973613401379"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p117361640113717"><a name="zh-cn_topic_0000001714949077_p117361640113717"></a><a name="zh-cn_topic_0000001714949077_p117361640113717"></a>core_dump</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p107361340103711"><a name="zh-cn_topic_0000001714949077_p107361340103711"></a><a name="zh-cn_topic_0000001714949077_p107361340103711"></a>①</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p127369406376"><a name="zh-cn_topic_0000001714949077_p127369406376"></a><a name="zh-cn_topic_0000001714949077_p127369406376"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row12736124010372"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p17367406375"><a name="zh-cn_topic_0000001714949077_p17367406375"></a><a name="zh-cn_topic_0000001714949077_p17367406375"></a>dynamic_memory</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p15736184012373"><a name="zh-cn_topic_0000001714949077_p15736184012373"></a><a name="zh-cn_topic_0000001714949077_p15736184012373"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1973684053711"><a name="zh-cn_topic_0000001714949077_p1973684053711"></a><a name="zh-cn_topic_0000001714949077_p1973684053711"></a>Two-layer structure with sub-inspection items: dynamic_used_memory and dynamic_used_shrctx.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1773624015378"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p67368401373"><a name="zh-cn_topic_0000001714949077_p67368401373"></a><a name="zh-cn_topic_0000001714949077_p67368401373"></a>process_memory</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p87361840113710"><a name="zh-cn_topic_0000001714949077_p87361840113710"></a><a name="zh-cn_topic_0000001714949077_p87361840113710"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p20736184016374"><a name="zh-cn_topic_0000001714949077_p20736184016374"></a><a name="zh-cn_topic_0000001714949077_p20736184016374"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row67361140153716"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1173634017379"><a name="zh-cn_topic_0000001714949077_p1173634017379"></a><a name="zh-cn_topic_0000001714949077_p1173634017379"></a>other_memory</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p18736140133713"><a name="zh-cn_topic_0000001714949077_p18736140133713"></a><a name="zh-cn_topic_0000001714949077_p18736140133713"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1273644011377"><a name="zh-cn_topic_0000001714949077_p1273644011377"></a><a name="zh-cn_topic_0000001714949077_p1273644011377"></a>-</p></td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1573619401377"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p773694063714"><a name="zh-cn_topic_0000001714949077_p773694063714"></a><a name="zh-cn_topic_0000001714949077_p773694063714"></a>guc_params</p></td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p137368404375"><a name="zh-cn_topic_0000001714949077_p137368404375"></a><a name="zh-cn_topic_0000001714949077_p137368404375"></a>②</p></td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p127361140193713"><a name="zh-cn_topic_0000001714949077_p127361140193713"></a><a name="zh-cn_topic_0000001714949077_p127361140193713"></a>-</p></td>
</tr>
</tbody>
</table>

>[!NOTE]Note
>Inspection results are stored in the DBMind metadata database. DBMind periodically clears old data to avoid disk bloat.

## Command Reference<a name="ZH-CN_TOPIC_0000002259861294"></a>

**Table 1**  Intelligent inspection APIs

<a name="zh-cn_topic_0000001714948889_table743563511112"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948889_row1646943561117"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0000001714948889_p6469123518111"><a name="zh-cn_topic_0000001714948889_p6469123518111"></a><a name="zh-cn_topic_0000001714948889_p6469123518111"></a>API</p></th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0000001714948889_p104696353119"><a name="zh-cn_topic_0000001714948889_p104696353119"></a><a name="zh-cn_topic_0000001714948889_p104696353119"></a>Input Parameter</p></th>
<th class="cellrowborder" valign="top" width="22%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0000001714948889_p1146915354115"><a name="zh-cn_topic_0000001714948889_p1146915354115"></a><a name="zh-cn_topic_0000001714948889_p1146915354115"></a>Parameter Description</p></th>
<th class="cellrowborder" valign="top" width="12%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0000001714948889_p164699355112"><a name="zh-cn_topic_0000001714948889_p164699355112"></a><a name="zh-cn_topic_0000001714948889_p164699355112"></a>Request Method</p></th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0000001714948889_p1946933520113"><a name="zh-cn_topic_0000001714948889_p1946933520113"></a><a name="zh-cn_topic_0000001714948889_p1946933520113"></a>Description and Expected Return Value</p></th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948889_row1469193511111"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p5469123511113"><a name="zh-cn_topic_0000001714948889_p5469123511113"></a><a name="zh-cn_topic_0000001714948889_p5469123511113"></a>/v1/api/app/real-time-inspection</p></td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p1469103510115"><a name="zh-cn_topic_0000001714948889_p1469103510115"></a><a name="zh-cn_topic_0000001714948889_p1469103510115"></a>inspection_type</p>
<p id="zh-cn_topic_0000001714948889_p10469173515116"><a name="zh-cn_topic_0000001714948889_p10469173515116"></a><a name="zh-cn_topic_0000001714948889_p10469173515116"></a>start_time</p>
<p id="zh-cn_topic_0000001714948889_p346903519110"><a name="zh-cn_topic_0000001714948889_p346903519110"></a><a name="zh-cn_topic_0000001714948889_p346903519110"></a>end_time</p>
<p id="zh-cn_topic_0000001714948889_p1492012392257"><a name="zh-cn_topic_0000001714948889_p1492012392257"></a><a name="zh-cn_topic_0000001714948889_p1492012392257"></a>tz</p>
<p id="zh-cn_topic_0000001714948889_p18469173513114"><a name="zh-cn_topic_0000001714948889_p18469173513114"></a><a name="zh-cn_topic_0000001714948889_p18469173513114"></a>instance</p>
<p id="zh-cn_topic_0000001714948889_p1246912351119"><a name="zh-cn_topic_0000001714948889_p1246912351119"></a><a name="zh-cn_topic_0000001714948889_p1246912351119"></a>inspection_items</p></td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p447012353117"><a name="zh-cn_topic_0000001714948889_p447012353117"></a><a name="zh-cn_topic_0000001714948889_p447012353117"></a>Inspection type; string; required.</p>
<p id="zh-cn_topic_0000001714948889_p147073541112"><a name="zh-cn_topic_0000001714948889_p147073541112"></a><a name="zh-cn_topic_0000001714948889_p147073541112"></a>Start time; string; optional.</p>
<p id="zh-cn_topic_0000001714948889_p9470133501117"><a name="zh-cn_topic_0000001714948889_p9470133501117"></a><a name="zh-cn_topic_0000001714948889_p9470133501117"></a>End time; string; optional.</p>
<p id="zh-cn_topic_0000001714948889_p175712447259"><a name="zh-cn_topic_0000001714948889_p175712447259"></a><a name="zh-cn_topic_0000001714948889_p175712447259"></a>Time zone information; string; optional.</p>
<p id="zh-cn_topic_0000001714948889_p1447023591115"><a name="zh-cn_topic_0000001714948889_p1447023591115"></a><a name="zh-cn_topic_0000001714948889_p1447023591115"></a>Instance IP:PORT; string; required.</p>
<p id="zh-cn_topic_0000001714948889_p44709350114"><a name="zh-cn_topic_0000001714948889_p44709350114"></a><a name="zh-cn_topic_0000001714948889_p44709350114"></a>Inspection items, dict; required.</p></td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p4470153513118"><a name="zh-cn_topic_0000001714948889_p4470153513118"></a><a name="zh-cn_topic_0000001714948889_p4470153513118"></a>POST</p></td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p17470103541114"><a name="zh-cn_topic_0000001714948889_p17470103541114"></a><a name="zh-cn_topic_0000001714948889_p17470103541114"></a>Performs intelligent inspection and returns the inspection results.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714948889_row84708354111"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p12470635171112"><a name="zh-cn_topic_0000001714948889_p12470635171112"></a><a name="zh-cn_topic_0000001714948889_p12470635171112"></a>/v1/api/app/real-time-inspection/list</p></td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p84701635141115"><a name="zh-cn_topic_0000001714948889_p84701635141115"></a><a name="zh-cn_topic_0000001714948889_p84701635141115"></a>instance</p></td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p16470103541118"><a name="zh-cn_topic_0000001714948889_p16470103541118"></a><a name="zh-cn_topic_0000001714948889_p16470103541118"></a>Instance IP:PORT; string; required.</p></td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p1047093520111"><a name="zh-cn_topic_0000001714948889_p1047093520111"></a><a name="zh-cn_topic_0000001714948889_p1047093520111"></a>GET</p></td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p194701535141117"><a name="zh-cn_topic_0000001714948889_p194701535141117"></a><a name="zh-cn_topic_0000001714948889_p194701535141117"></a>Displays the basic information of inspection tasks.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714948889_row184700359116"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p17470535101113"><a name="zh-cn_topic_0000001714948889_p17470535101113"></a><a name="zh-cn_topic_0000001714948889_p17470535101113"></a>/v1/api/summary/real-time-inspection</p></td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p194701935141112"><a name="zh-cn_topic_0000001714948889_p194701935141112"></a><a name="zh-cn_topic_0000001714948889_p194701935141112"></a>instance</p>
<p id="zh-cn_topic_0000001714948889_p8470113571115"><a name="zh-cn_topic_0000001714948889_p8470113571115"></a><a name="zh-cn_topic_0000001714948889_p8470113571115"></a>spec_id</p></td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p2470183511112"><a name="zh-cn_topic_0000001714948889_p2470183511112"></a><a name="zh-cn_topic_0000001714948889_p2470183511112"></a>Instance IP:PORT; string; required.</p>
<p id="zh-cn_topic_0000001714948889_p5470123516116"><a name="zh-cn_topic_0000001714948889_p5470123516116"></a><a name="zh-cn_topic_0000001714948889_p5470123516116"></a>Inspection task ID; string; required.</p></td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p147003518110"><a name="zh-cn_topic_0000001714948889_p147003518110"></a><a name="zh-cn_topic_0000001714948889_p147003518110"></a>GET</p></td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p15470535191115"><a name="zh-cn_topic_0000001714948889_p15470535191115"></a><a name="zh-cn_topic_0000001714948889_p15470535191115"></a>Obtains the inspection result of the specified inspection task.</p></td>
</tr>
<tr id="zh-cn_topic_0000001714948889_row8470103591112"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p16470183531111"><a name="zh-cn_topic_0000001714948889_p16470183531111"></a><a name="zh-cn_topic_0000001714948889_p16470183531111"></a>/v1/api/app/real-time-inspection</p></td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p9470143561119"><a name="zh-cn_topic_0000001714948889_p9470143561119"></a><a name="zh-cn_topic_0000001714948889_p9470143561119"></a>instance</p>
<p id="zh-cn_topic_0000001714948889_p2470143513110"><a name="zh-cn_topic_0000001714948889_p2470143513110"></a><a name="zh-cn_topic_0000001714948889_p2470143513110"></a>spec_id</p></td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p13470635111116"><a name="zh-cn_topic_0000001714948889_p13470635111116"></a><a name="zh-cn_topic_0000001714948889_p13470635111116"></a>Instance IP:PORT; string; required.</p>
<p id="zh-cn_topic_0000001714948889_p164702356110"><a name="zh-cn_topic_0000001714948889_p164702356110"></a><a name="zh-cn_topic_0000001714948889_p164702356110"></a>Inspection task ID; string; required.</p></td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p11470183571113"><a name="zh-cn_topic_0000001714948889_p11470183571113"></a><a name="zh-cn_topic_0000001714948889_p11470183571113"></a>DELETE</p></td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p1047003511119"><a name="zh-cn_topic_0000001714948889_p1047003511119"></a><a name="zh-cn_topic_0000001714948889_p1047003511119"></a>Deletes the specified inspection task.</p></td>
</tr>
</tbody>
</table>

## FAQ<a name="ZH-CN_TOPIC_0000002259758192"></a>

- Weekly and monthly reports are generated based on daily reports: If no daily report is built, weekly and monthly reports cannot be generated; when the daily report data does not cover 7 consecutive days, the weekly report for those 7 days cannot be generated; when the daily report data does not cover 14 or more consecutive days, the corresponding monthly report cannot be generated. In addition, weekly and monthly reports are generated based on instances. For example, a change in the instance IP or port will cause the weekly/monthly report to fail to generate; for example, deletion of a node instance will cause the weekly/monthly report to fail to generate. When generating weekly and monthly reports on a scheduled basis, it is recommended to control the concurrency to avoid affecting real-time tasks. In the configuration file, the IP mapping relationship of instances must be written to ip\_map; otherwise, the instance in the inspection result cannot be guaranteed to be the management IP.
- Weekly and monthly reports support only the inspection of all inspection items, not the concatenation of some inspection items. Therefore, the custom thresholds for weekly and monthly reports need to be passed in by the frontend, and the rules are the same as those for real-time inspection. Inspection items that are not passed in do not trigger alarms by default (except for some inspection items controlled by the frontend; see [usage guide](#usage-guide)).
- When calling the inspection API, an instance must be passed. The instance must be the primary node instance of the database instance; otherwise, the inspection results of all nodes cannot be returned when a node is abnormal.
- In intelligent inspection, inspection items such as db\_size, buffer\_hit\_rate, db\_tmp\_file, db\_deadlock, and db\_transaction display only the database results of the primary node. If a primary/standby switchover or other primary node change occurs, the results may jump (concatenation of results from different nodes).
- In intelligent inspection, inspection items such as db\_size, buffer\_hit\_rate, db\_transaction, db\_tmp\_file, and db\_deadlock display only the database results of the primary node; inspection items such as user\_login\_out, db\_latency, and thread\_pool display the results of all nodes; the xlog\_accumulate inspection item displays the results of all nodes.
- To prevent missing key information, the log\_error\_check and core\_dump inspection items support only data within 45 hours during real-time inspection; other inspection items cannot exceed the TSDB data storage range.
