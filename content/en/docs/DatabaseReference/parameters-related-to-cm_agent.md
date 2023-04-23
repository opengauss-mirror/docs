# Parameters Related to cm\_agent<a name="EN-US_TOPIC_0295386222"></a>

## log\_dir<a name="en-us_topic_0059779159_sffb0266aeee84425addb74a3f8a1c5a9"></a>

**Parameter description**: Specifies the directory where  **cm\_agent**  logs are stored. It can be specified as an absolute path, or a path relative to  _$GAUSSLOG_.

**Value range**: a string You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **log**, indicating that the  **cm\_agent**  log is generated in the CM directory in  _$GAUSSLOG_.

## log\_file\_size<a name="en-us_topic_0059779159_s9e630e0cb4304e3a88b689cc3baa49b8"></a>

**Parameter description**: Specifies the size of a log file. If a log file exceeds the specified size, a new one is created to record log information.

**Value range**: an integer ranging from 0 to 2047. The unit is MB. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **16 MB**

## log\_min\_messages<a name="en-us_topic_0059779159_se8233f45b7534bb88e3a35ba98aa85ee"></a>

**Parameter description**: Specifies which message levels are written to the  **cm\_agent**  log. Each level covers all the levels following it. The lower the level is, the fewer messages will be written into the log.

**Value range**: enumerated type. Valid values are  **debug5**,  **debug1**,  **log**,  **warning**,  **error**, and  **fatal**. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **warning**

## incremental\_build<a name="en-us_topic_0059779159_sc5e19708df784c73bfcd8d42826a2bf3"></a>

**Parameter description**: Specifies whether a standby DN is incrementally built. If this parameter is enabled, a standby DN is incrementally built.

**Value range**: Boolean. The value can be  **on**  or  **off**. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **on**

## alarm\_component<a name="en-us_topic_0059779159_s93b5f572eab64e30952fe9f20436ed51"></a>

**Parameter description**: Specifies the location of the alarm component that processes alarms.

**Value range**: a string You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   If  **--alarm-type**  in the  **gs\_preinstall**  script is set to  **5**, no third-party component is connected and alarms are written into the  **system\_alarm**  log. In this case, the value of  **alarm\_component**  is  **/opt/huawei/snas/bin/snas\_cm\_cmd**.
-   If  **--alarm-type**  in the  **gs\_preinstall**  script is set to  **1**, a third-party component is connected. In this case, the value of  **alarm\_component**  is the absolute path of the executable program of the third-party component.

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

## alarm\_report\_interval<a name="en-us_topic_0059779159_s5e0f88486fdb4973bff373b335f66f5d"></a>

**Parameter description**: Specifies the interval at which an alarm is reported. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a non-negative integer \(unit: s\)

**Default value**:  **1**

## alarm\_report\_max\_count<a name="section13705726193413"></a>

**Parameter description**: Specifies the maximum number of times an alarm is reported. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a non-negative integer

**Default value**:  **1**

## agent\_report\_interval<a name="en-us_topic_0059779159_s11deb8e55f4649ae9881336d22f42928"></a>

**Parameter description**: Specifies the interval at which  **cm\_agent**  reports the instance status.

**Value range**: an integer. The unit is s. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## agent\_phony\_dead\_check\_interval<a name="section966642214614"></a>

**Parameter description**: Specifies the interval at which  **cm\_agent**  checks whether the DN process is suspended.

**Value range**: an integer. The unit is s. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value:** **10**

## agent\_check\_interval<a name="section5226185016252"></a>

**Parameter description**: Specifies the interval at which cm\_agent queries for the status of instances, such as the DNs.

**Value range**: an integer. The unit is s. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value:** **2**

## agent\_heartbeat\_timeout<a name="en-us_topic_0059779159_sfeeae1ec5acf4d6b9e653e3c2df12fe0"></a>

**Parameter description**: Specifies the time to wait before the  **cm\_server**  heartbeat times out.

**Value range**: an integer ranging from 2 to 2<sup>31</sup>  – 1. The unit is second. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **8**

## agent\_connect\_timeout<a name="en-us_topic_0059779159_s5648c08255e34c92a5bf3c815aa98105"></a>

**Parameter description**: Specifies the time to wait before the attempt of  **cm\_agent**  to connect to  **cm\_server**  times out.

**Value range**: an integer. The unit is s. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## agent\_connect\_retries<a name="en-us_topic_0059779159_s25dd67d322454f749c390110d2ee3e6d"></a>

**Parameter description**: Specifies the number of times  **cm\_agent**  tries to connect to the  **cm\_server**.

**Value range**: an integer. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **15**

## agent\_kill\_instance\_timeout<a name="section4768152014466"></a>

**Parameter description**: Specifies the interval from the time when  **cm\_agent**  fails to connect to the primary  **cm\_server**  to the time when  **cm\_agent**  kills all instances on the node.

**Value range**: an integer. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **0**, indicating that the operation of killing all instances on the node is not initiated.

## security\_mode<a name="en-us_topic_0059779159_section05318171111"></a>

**Parameter description**: Specifies whether DNs are started in secure mode. If this parameter is set to  **on**, DNs are started in secure mode. Otherwise, DNs are started in non-secure mode.

**Value range**: Boolean. The value can be  **on**  or  **off**. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **off**

## upgrade\_from<a name="section033218255523"></a>

**Parameter description**: Specifies the internal version number of the database before an in-place upgrade. Do not modify the value of this parameter.

**Value range**: a non-negative integer You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **0**

## process\_cpu\_affinity<a name="section195545541684"></a>

**Parameter description**: Specifies whether to bind a primary DN process to a CPU core before starting the process. If this parameter is set to  **0**, core binding will not be performed. If it is set to another value, core binding will be performed, and the number of physical CPU cores is 2<sup>n</sup>. Restart the database and  **cm\_agent**  for the modification to take effect. Only ARM is supported. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2

**Default value**:  **0**

## log\_threshold\_check\_interval<a name="section9405112913513"></a>

**Parameter description**: Specifies the interval for compressing and clearing logs. Logs are compressed and cleared every 1800 seconds.

**Value range**: an integer ranging from 0 to 2147483647. The unit is s. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1800**

## dilatation\_shard\_count\_for\_disk\_capacity\_alarm<a name="section20880151484216"></a>

**Parameter description**: Specifies the number of shards to be added in the scale-out scenario. This parameter is used to calculate the threshold for reporting a disk capacity alarm.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The parameter value must be the same as the actual number of shards to be added.

**Value range**: an integer ranging from 0 to 2<sup>32</sup>  – 1. If this parameter is set to  **0**, the disk scale-out alarm is not reported. If this parameter is set to a value greater than  **0**, the disk scale-out alarm is reported and the threshold is calculated based on the number of shards specified by this parameter. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## log\_max\_size<a name="section5624163210356"></a>

**Parameter description**: Specifies the maximum size of a log file.

**Value range**: an integer ranging from 0 to 2147483647. The unit is MB. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **10240**

## log\_max\_count<a name="section1811153383513"></a>

**Parameter description**: Specifies the maximum number of logs that can be stored on hard disks.

**Value range**: an integer ranging from 0 to 10000. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **10000**

## log\_saved\_days<a name="section11889103814355"></a>

**Parameter description**: Specifies the number of days for storing logs.

**Value range**: an integer ranging from 0 to 1000. The unit is day. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **90**

## enable\_log\_compress<a name="section13681636172119"></a>

**Parameter description**: Specifies whether to enable log compression.

**Value range**: Boolean You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   **on**  indicates that log compression is enabled.
-   **off**  indicates that log compression is disabled.

**Default value**:  **on**

## log\_pattern\_%s<a name="section1443611315251"></a>

**Parameter description**: Specifies the format of compressed logs. It is used when  **enable\_log\_compress=on**  is set. All logs containing the keyword  **%s**  are compressed.  **%s**  is the name of a server tool.

**Value range**: values of all parameters in  [Table 1](#table57617155518). For details about how to modify this parameter, see  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**: default values of the parameters in  [Table 1](#table57617155518). The default value cannot be modified.

**Table  1** 

<a name="table57617155518"></a>
<table><thead align="left"><tr id="row77631015655"><th class="cellrowborder" valign="top" width="49.94%" id="mcps1.2.3.1.1"><p id="p17391158173811"><a name="p17391158173811"></a><a name="p17391158173811"></a>Parameter (log_pattern_%s)</p>
</th>
<th class="cellrowborder" valign="top" width="50.06%" id="mcps1.2.3.1.2"><p id="p17594611153214"><a name="p17594611153214"></a><a name="p17594611153214"></a>Default Value</p>
</th>
</tr>
</thead>
<tbody><tr id="row19878191016810"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p176052151386"><a name="p176052151386"></a><a name="p176052151386"></a>log_pattern_cm_ctl</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p122414300325"><a name="p122414300325"></a><a name="p122414300325"></a>cm_ctl-</p>
</td>
</tr>
<tr id="row147638153511"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p285793716"><a name="p285793716"></a><a name="p285793716"></a>log_pattern_gs_clean</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p172463017326"><a name="p172463017326"></a><a name="p172463017326"></a>gs_clean-</p>
</td>
</tr>
<tr id="row1276313157510"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p6851891176"><a name="p6851891176"></a><a name="p6851891176"></a>log_pattern_gs_ctl</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p924103033211"><a name="p924103033211"></a><a name="p924103033211"></a>gs_ctl-</p>
</td>
</tr>
<tr id="row4763121514516"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p68517916711"><a name="p68517916711"></a><a name="p68517916711"></a>log_pattern_gs_guc</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p20241030103211"><a name="p20241030103211"></a><a name="p20241030103211"></a>gs_guc-</p>
</td>
</tr>
<tr id="row177631615855"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p5407941101212"><a name="p5407941101212"></a><a name="p5407941101212"></a>log_pattern_gs_dump</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p122511302326"><a name="p122511302326"></a><a name="p122511302326"></a>gs_dump-</p>
</td>
</tr>
<tr id="row9111701219"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1640716418127"><a name="p1640716418127"></a><a name="p1640716418127"></a>log_pattern_gs_dumpall</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p112516305329"><a name="p112516305329"></a><a name="p112516305329"></a>gs_dumpall-</p>
</td>
</tr>
<tr id="row2657101131216"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p540714415128"><a name="p540714415128"></a><a name="p540714415128"></a>log_pattern_gs_restore</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p2025730143211"><a name="p2025730143211"></a><a name="p2025730143211"></a>gs_restore-</p>
</td>
</tr>
<tr id="row245315161121"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p3407104115125"><a name="p3407104115125"></a><a name="p3407104115125"></a>log_pattern_gs_initcm</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p19255307326"><a name="p19255307326"></a><a name="p19255307326"></a>gs_initcm-</p>
</td>
</tr>
<tr id="row445451651216"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p74079415128"><a name="p74079415128"></a><a name="p74079415128"></a>log_pattern_gs_initdb</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1225230133210"><a name="p1225230133210"></a><a name="p1225230133210"></a>gs_initdb-</p>
</td>
</tr>
<tr id="row194548168126"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1540715415122"><a name="p1540715415122"></a><a name="p1540715415122"></a>log_pattern_gs_initgtm</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p162563013213"><a name="p162563013213"></a><a name="p162563013213"></a>gs_initgtm-</p>
</td>
</tr>
<tr id="row74541016131210"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p14071541151212"><a name="p14071541151212"></a><a name="p14071541151212"></a>log_pattern_gtm_ctl</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1625153033217"><a name="p1625153033217"></a><a name="p1625153033217"></a>gtm_ctl-</p>
</td>
</tr>
<tr id="row1118602320126"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p174071241171214"><a name="p174071241171214"></a><a name="p174071241171214"></a>log_pattern_cm_agent</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p72519303328"><a name="p72519303328"></a><a name="p72519303328"></a>cm_agent-</p>
</td>
</tr>
<tr id="row1018732320127"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p10407154117129"><a name="p10407154117129"></a><a name="p10407154117129"></a>log_pattern_system_call</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p16262306324"><a name="p16262306324"></a><a name="p16262306324"></a>system_call-</p>
</td>
</tr>
<tr id="row2187102341210"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p19408341191214"><a name="p19408341191214"></a><a name="p19408341191214"></a>log_pattern_cm_server</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p11261330163216"><a name="p11261330163216"></a><a name="p11261330163216"></a>cm_server-</p>
</td>
</tr>
<tr id="row1918772314127"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p10408174112124"><a name="p10408174112124"></a><a name="p10408174112124"></a>log_pattern_om_monitor</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p18261330173214"><a name="p18261330173214"></a><a name="p18261330173214"></a>om_monitor-</p>
</td>
</tr>
<tr id="row718772301218"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p174081141171218"><a name="p174081141171218"></a><a name="p174081141171218"></a>log_pattern_gs_local</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1626163083219"><a name="p1626163083219"></a><a name="p1626163083219"></a>gs_local-</p>
</td>
</tr>
<tr id="row2018792313121"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p6408154116128"><a name="p6408154116128"></a><a name="p6408154116128"></a>log_pattern_gs_preinstall</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p2269306328"><a name="p2269306328"></a><a name="p2269306328"></a>gs_preinstall-</p>
</td>
</tr>
<tr id="row1318862317126"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p540824141212"><a name="p540824141212"></a><a name="p540824141212"></a>log_pattern_gs_install</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p126930173214"><a name="p126930173214"></a><a name="p126930173214"></a>gs_install-</p>
</td>
</tr>
<tr id="row1618816231121"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p2408341111216"><a name="p2408341111216"></a><a name="p2408341111216"></a>log_pattern_gs_replace</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p182611301328"><a name="p182611301328"></a><a name="p182611301328"></a>gs_replace-</p>
</td>
</tr>
<tr id="row10738175211213"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p44081941121213"><a name="p44081941121213"></a><a name="p44081941121213"></a>log_pattern_gs_uninstall</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p17264305323"><a name="p17264305323"></a><a name="p17264305323"></a>gs_uninstall-</p>
</td>
</tr>
<tr id="row734919381310"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1840824113123"><a name="p1840824113123"></a><a name="p1840824113123"></a>log_pattern_gs_om</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p72723011326"><a name="p72723011326"></a><a name="p72723011326"></a>gs_om-</p>
</td>
</tr>
<tr id="row846497201319"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p124080418123"><a name="p124080418123"></a><a name="p124080418123"></a>log_pattern_gs_upgradectl</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1527193023217"><a name="p1527193023217"></a><a name="p1527193023217"></a>gs_upgradectl-</p>
</td>
</tr>
<tr id="row1346415715138"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1340814410129"><a name="p1340814410129"></a><a name="p1340814410129"></a>log_pattern_gs_expand</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p42793053219"><a name="p42793053219"></a><a name="p42793053219"></a>gs_expand-</p>
</td>
</tr>
<tr id="row12418112101319"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p124081841151219"><a name="p124081841151219"></a><a name="p124081841151219"></a>log_pattern_gs_shrink</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p22719308323"><a name="p22719308323"></a><a name="p22719308323"></a>gs_shrink-</p>
</td>
</tr>
<tr id="row54181812141312"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p114081541181210"><a name="p114081541181210"></a><a name="p114081541181210"></a>log_pattern_gs_postuninstall</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p0271630143217"><a name="p0271630143217"></a><a name="p0271630143217"></a>gs_postuninstall-</p>
</td>
</tr>
<tr id="row1341918121131"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1340894151212"><a name="p1340894151212"></a><a name="p1340894151212"></a>log_pattern_gs_backup</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p32773014324"><a name="p32773014324"></a><a name="p32773014324"></a>gs_backup-</p>
</td>
</tr>
<tr id="row841921221312"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p7408241101220"><a name="p7408241101220"></a><a name="p7408241101220"></a>log_pattern_gs_checkos</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p12733014322"><a name="p12733014322"></a><a name="p12733014322"></a>gs_checkos-</p>
</td>
</tr>
<tr id="row1720420171417"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p198901055131320"><a name="p198901055131320"></a><a name="p198901055131320"></a>log_pattern_gs_collector</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p5279302328"><a name="p5279302328"></a><a name="p5279302328"></a>gs_collector-</p>
</td>
</tr>
<tr id="row4263171019334"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1991217104354"><a name="p1991217104354"></a><a name="p1991217104354"></a>log_pattern_GaussReplace</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p327123017326"><a name="p327123017326"></a><a name="p327123017326"></a>GaussReplace-</p>
</td>
</tr>
<tr id="row317631413332"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p391216101354"><a name="p391216101354"></a><a name="p391216101354"></a>log_pattern_GaussOM</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p14281930153211"><a name="p14281930153211"></a><a name="p14281930153211"></a>GaussOM-</p>
</td>
</tr>
<tr id="row645371843318"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p18912410143511"><a name="p18912410143511"></a><a name="p18912410143511"></a>log_pattern_gs_checkperf</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p112893063215"><a name="p112893063215"></a><a name="p112893063215"></a>gs_checkperf-</p>
</td>
</tr>
<tr id="row34531918173311"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p491212106353"><a name="p491212106353"></a><a name="p491212106353"></a>log_pattern_gs_check</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p14280308321"><a name="p14280308321"></a><a name="p14280308321"></a>gs_check-</p>
</td>
</tr>
<tr id="row14432202315339"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1291211053514"><a name="p1291211053514"></a><a name="p1291211053514"></a>log_pattern_roach-agent</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1728123013323"><a name="p1728123013323"></a><a name="p1728123013323"></a>roach-agent-</p>
</td>
</tr>
<tr id="row743216231330"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p4913710183516"><a name="p4913710183516"></a><a name="p4913710183516"></a>log_pattern_roach-controller</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p17281730163210"><a name="p17281730163210"></a><a name="p17281730163210"></a>roach-controller-</p>
</td>
</tr>
<tr id="row1643212317332"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p179131210113516"><a name="p179131210113516"></a><a name="p179131210113516"></a>log_pattern_postgresql</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1828193013217"><a name="p1828193013217"></a><a name="p1828193013217"></a>postgresql-</p>
</td>
</tr>
<tr id="row1433723153315"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p291331063517"><a name="p291331063517"></a><a name="p291331063517"></a>log_pattern_gtm</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p32823043218"><a name="p32823043218"></a><a name="p32823043218"></a>gtm-</p>
</td>
</tr>
<tr id="row177481187344"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1791311106352"><a name="p1791311106352"></a><a name="p1791311106352"></a>log_pattern_sessionstat</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p928113018325"><a name="p928113018325"></a><a name="p928113018325"></a>sessionstat-</p>
</td>
</tr>
<tr id="row19691114615217"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p16692144695217"><a name="p16692144695217"></a><a name="p16692144695217"></a>log_pattern_sync</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1669244665213"><a name="p1669244665213"></a><a name="p1669244665213"></a>sync-</p>
</td>
</tr>
<tr id="row3419483532"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p104191815318"><a name="p104191815318"></a><a name="p104191815318"></a>log_pattern_system_alarm</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p114204895315"><a name="p114204895315"></a><a name="p114204895315"></a>system_alarm-</p>
</td>
</tr>
<tr id="row169731622174112"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p1497312264111"><a name="p1497312264111"></a><a name="p1497312264111"></a>log_pattern_pg_perf</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p8973112224117"><a name="p8973112224117"></a><a name="p8973112224117"></a>pg_perf-</p>
</td>
</tr>
<tr id="row15376104164218"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p537616494218"><a name="p537616494218"></a><a name="p537616494218"></a>log_pattern_slow_query_log</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p837654134218"><a name="p837654134218"></a><a name="p837654134218"></a>slow_query_log-</p>
</td>
</tr>
<tr id="row1680011804210"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p198001486427"><a name="p198001486427"></a><a name="p198001486427"></a>log_pattern_asp</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p16800138174219"><a name="p16800138174219"></a><a name="p16800138174219"></a>asp-</p>
</td>
</tr>
<tr id="row7520141554211"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p10520915164215"><a name="p10520915164215"></a><a name="p10520915164215"></a>log_pattern_etcd</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p5520161511422"><a name="p5520161511422"></a><a name="p5520161511422"></a>etcd-</p>
</td>
</tr>
<tr id="row11920104420439"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p14920124454315"><a name="p14920124454315"></a><a name="p14920124454315"></a>log_pattern_gs_cgroup</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p592054494314"><a name="p592054494314"></a><a name="p592054494314"></a>gs_cgroup-</p>
</td>
</tr>
<tr id="row79671248124313"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p296824817432"><a name="p296824817432"></a><a name="p296824817432"></a>log_pattern_pscp</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1496864844311"><a name="p1496864844311"></a><a name="p1496864844311"></a>pscp-</p>
</td>
</tr>
<tr id="row1797619526436"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p397645219437"><a name="p397645219437"></a><a name="p397645219437"></a>log_pattern_postgresql-query-log</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p097612526439"><a name="p097612526439"></a><a name="p097612526439"></a>postgresql-query-log-</p>
</td>
</tr>
<tr id="row1948255634315"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p12482856104319"><a name="p12482856104319"></a><a name="p12482856104319"></a>log_pattern_gs_hotpatch</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p1248255654316"><a name="p1248255654316"></a><a name="p1248255654316"></a>gs_hotpatch-</p>
</td>
</tr>
<tr id="row72811548195913"><td class="cellrowborder" valign="top" width="49.94%" headers="mcps1.2.3.1.1 "><p id="p16282114811595"><a name="p16282114811595"></a><a name="p16282114811595"></a>log_pattern_pssh</p>
</td>
<td class="cellrowborder" valign="top" width="50.06%" headers="mcps1.2.3.1.2 "><p id="p628224819599"><a name="p628224819599"></a><a name="p628224819599"></a>pssh-</p>
</td>
</tr>
</tbody>
</table>

## agent\_backup\_open<a name="section114001741152513"></a>

**Parameter description**: Specifies the DR database instance settings. After this parameter is enabled, CM runs in DR database instance mode.

**Value range:** **0**  or  **1**. You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

-   **0**: disabled.
-   **1**: enabled.

**Default value**:  **0**

## enable\_xc\_maintenance\_mode<a name="section116191513124714"></a>

**Parameter description**: Specifies whether the  **pgxc\_node**  system catalog can be modified when the database instance is in read-only mode.

**Value range**: Boolean For details about how to modify this parameter, see  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

-   **on**  indicates that the  **pgxc\_node**  system catalog can be modified.
-   **off**  indicates that the  **pgxc\_node**  system catalog cannot be modified.

**Default value**:  **on**

## unix\_socket\_directory<a name="section19870125113013"></a>

**Parameter description**: Specifies the directory location of the Unix socket.

**Value range**: a string You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value:** **''**

## enable\_dcf<a name="section876764972213"></a>

**Parameter description**: Specifies the status of the DCF mode.

**Value range**: Boolean You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

-   **0**: disabled.
-   **1**: enabled.

**Default value**:  **off**

## disaster\_recovery\_type<a name="section115316384321"></a>

**Parameter description**: Specifies the type of the DR relationship between the primary and standby database instances.

**Value range**: an integer ranging from 0 to 2 You need to restart  **cm\_agent**  for the modification to take effect. For details about how to modify this parameter, see  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

-   **0**  indicates that no DR relationship is established.
-   **1**  indicates that the OBS DR relationship is established.
-   **2**  indicates that the streaming DR relationship is established.

**Default value**:  **0**

