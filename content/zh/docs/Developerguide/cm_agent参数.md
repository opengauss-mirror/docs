# cm\_agent参数<a name="ZH-CN_TOPIC_0295386222"></a>

## log\_dir<a name="zh-cn_topic_0059779159_sffb0266aeee84425addb74a3f8a1c5a9"></a>

**参数说明：**log\_dir决定存放cm\_agent日志文件的目录。可以是绝对路径，或者是相对路径（相对于$GAUSSLOG的路径）。

**取值范围：**字符串。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**“log”，表示在$GAUSSLOG下对应的cm目录下生成cm\_agent日志。

## log\_file\_size<a name="zh-cn_topic_0059779159_s9e630e0cb4304e3a88b689cc3baa49b8"></a>

**参数说明：**控制日志文件的大小。当日志文件达到指定大小时，则重新创建一个日志文件记录日志信息。

**取值范围：**整型，取值范围0\~2047，单位为MB。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**16MB

## log\_min\_messages<a name="zh-cn_topic_0059779159_se8233f45b7534bb88e3a35ba98aa85ee"></a>

**参数说明：**控制写到cm\_agent日志文件中的消息级别。每个级别都包含排在它后面的所有级别中的信息。级别越低，服务器运行日志中记录的消息就越少。

**取值范围：**枚举类型，有效值有debug5、debug1、warning、error、log、fatal。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**warning

## incremental\_build<a name="zh-cn_topic_0059779159_sc5e19708df784c73bfcd8d42826a2bf3"></a>

**参数说明：**控制重建备DN模式是否为增量。打开这个开关，则增量重建备DN；否则，全量重建备DN。

**取值范围：**布尔型，有效值有on、off。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**on

## alarm\_component<a name="zh-cn_topic_0059779159_s93b5f572eab64e30952fe9f20436ed51"></a>

**参数说明：**设置用于处理告警内容的告警组件的位置。

**取值范围：**字符串。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   若前置脚本gs\_preinstall中的--alarm-type参数设置为5时，表示未对接第三方组件，告警写入system\_alarm日志，此时GUC参数alarm\_component的取值为：/opt/huawei/snas/bin/snas\_cm\_cmd。
-   若前置脚本gs\_preinstall中的--alarm-type参数设置为1时，表示对接第三方组件，此时GUC参数alarm\_component的值为第三方组件的可执行程序的绝对路径。

**默认值：**/opt/huawei/snas/bin/snas\_cm\_cmd

## alarm\_report\_interval<a name="zh-cn_topic_0059779159_s5e0f88486fdb4973bff373b335f66f5d"></a>

**参数说明：**指定告警上报的时间间隔。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**取值范围：**非负整型，单位为秒。

**默认值：**1

## alarm\_report\_max\_count<a name="section13705726193413"></a>

**参数说明：**指定告警上报的最大次数。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**取值范围：**非负整型。

**默认值：**1

## agent\_report\_interval<a name="zh-cn_topic_0059779159_s11deb8e55f4649ae9881336d22f42928"></a>

**参数说明：**cm\_agent上报实例状态的时间间隔。

**取值范围：**整型，单位为秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**1

## agent\_phony\_dead\_check\_interval<a name="section966642214614"></a>

**参数说明：**cm\_agent检测DN进程是否僵死的时间间隔。

**取值范围：**整型，单位为秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**10

## agent\_check\_interval<a name="section5226185016252"></a>

**参数说明：**cm\_agent查询DN等实例状态的时间间隔。

**取值范围：**整型，单位为秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**2

## agent\_heartbeat\_timeout<a name="zh-cn_topic_0059779159_sfeeae1ec5acf4d6b9e653e3c2df12fe0"></a>

**参数说明：**cm\_server心跳超时时间。

**取值范围：**整型，2\~2<sup>31</sup>  - 1，单位为秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**8

## agent\_connect\_timeout<a name="zh-cn_topic_0059779159_s5648c08255e34c92a5bf3c815aa98105"></a>

**参数说明：**cm\_agent连接cm\_server超时时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**1

## agent\_connect\_retries<a name="zh-cn_topic_0059779159_s25dd67d322454f749c390110d2ee3e6d"></a>

**参数说明：**cm\_agent连接cm\_server尝试次数。

**取值范围：**整型。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**15

## agent\_kill\_instance\_timeout<a name="section4768152014466"></a>

**参数说明：当**cm\_agent在无法连接cm\_server主节点后，发起一次杀死本节点上所有实例的操作之前，所需等待的时间间隔。

**取值范围：**整型。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**0，不发起杀死本节点上所有实例的操作。

## security\_mode<a name="zh-cn_topic_0059779159_section05318171111"></a>

**参数说明：**控制是否以安全模式启动DN。打开这个开关，则以安全模式启动DN；否则，以非安全模式启动DN。

**取值范围：**布尔型，有效值有on、off。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**off

## upgrade\_from<a name="section033218255523"></a>

**参数说明：**就地升级过程中使用，用于标示升级前数据库的内部版本号，此参数禁止手动修改。

**取值范围：**非负整型。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**0

## process\_cpu\_affinity<a name="section195545541684"></a>

**参数说明：**控制是否以绑核优化模式启动主DN进程。配置该参数为0，则不进行绑核优化；否则，进行绑核优化，且物理CPU片数为2<sup>n</sup>个。数据库、cm\_agent重启生效。仅支持ARM。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**取值范围：**整型，0\~2。

**默认值：**0

## log\_threshold\_check\_interval<a name="section9405112913513"></a>

**参数说明**：日志压缩和清除的时间间隔，每1800秒压缩和清理一次。

**取值范围**：整型，0\~2147483647，单位为秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：1800

## dilatation\_shard\_count\_for\_disk\_capacity\_alarm<a name="section20880151484216"></a>

**参数说明**：扩容场景下，设置新增的扩容分片数，用于上报磁盘容量告警时的阈值计算。

>![](public_sys-resources/icon-note.png) **说明：** 
>该分片数请与实际扩容分片数设置为一致。

**取值范围**：整型，0\~2<sup>32</sup>  - 1，单位为个。该参数设置为0，表示关闭磁盘扩容告警上报；该参数设置为大于0，表示开启磁盘扩容告警上报，且告警上报的阈值根据此参数设置的分片数量进行计算。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：1

## log\_max\_size<a name="section5624163210356"></a>

**参数说明**：控制日志最大存储值。

**取值范围**：整型，0\~2147483647，单位为MB。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：10240

## log\_max\_count<a name="section1811153383513"></a>

**参数说明**：硬盘上可存储的最多日志数量。

**取值范围**：整型，0\~10000，单位为个。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：10000

## log\_saved\_days<a name="section11889103814355"></a>

**参数说明**：日志保存的天数。

**取值范围**：整型，0\~1000，单位为天。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：90

## enable\_log\_compress<a name="section13681636172119"></a>

**参数说明**：控制压缩日志功能。

**取值范围**：布尔型。修改后需要重启cm\_agent才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   on表示允许压缩日志。
-   off表示不允许压缩日志。

**默认值**：on

## log\_pattern\_%s<a name="section1443611315251"></a>

**参数说明**：enable\_log\_compress=on时使用，定义压缩日志的格式，压缩含有关键字%s的所有日志，%s为服务端工具名称。

**取值范围：**[表1](#table57617155518)中所有参数对应的值。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：[表1 ](#table57617155518)中各参数对应的默认值。不支持用户修改默认值。

**表 1** 

<a name="table57617155518"></a>
<table><thead align="left"><tr id="row77631015655"><th class="cellrowborder" valign="top" width="49.94%" id="mcps1.2.3.1.1"><p id="p17391158173811"><a name="p17391158173811"></a><a name="p17391158173811"></a>参数（log_pattern_%s）</p>
</th>
<th class="cellrowborder" valign="top" width="50.06%" id="mcps1.2.3.1.2"><p id="p17594611153214"><a name="p17594611153214"></a><a name="p17594611153214"></a>默认值</p>
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

**参数说明**：灾备数据库实例设置，开启后CM按照灾备数据库实例模式运行。

**取值范围**：整型，0\~1。修改后需要重启cm\_agent才能生效。参数修改请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)进行设置。

-   0表示关闭。
-   1表示开启。

**默认值**：0

## enable\_xc\_maintenance\_mode<a name="section116191513124714"></a>

**参数说明：**在数据库实例为只读模式下，控制是否可以修改pgxc\_node系统表。

**取值范围：**布尔型。参数修改请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)进行设置。

-   on表示开启可以修改pgxc\_node系统表功能。
-   off表示关闭可以修改pgxc\_node系统表功能。

**默认值：**on

## unix\_socket\_directory<a name="section19870125113013"></a>

**参数说明：**unix套接字的目录位置。

**取值范围：**字符串。修改后需要重启cm\_agent才能生效。参数修改请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)进行设置。

**默认值：''**

## enable\_dcf<a name="section876764972213"></a>

**参数说明**：DCF模式开关。

**取值范围**：布尔型。修改后需要重启cm\_agent才能生效。参数修改请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)进行设置。

-   0表示关闭。
-   1表示开启。

**默认值**：off

## disaster\_recovery\_type<a name="section115316384321"></a>

**参数说明**：主备数据库实例灾备关系的类型。

**取值范围**：整型，0\~2。修改后需要重启cm\_agent才能生效。参数修改请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)进行设置。

-   0表示未搭建灾备关系。
-   1表示搭建了obs灾备关系。
-   2表示搭建了流式灾备关系

**默认值**：0

