# 智能巡检<a name="ZH-CN_TOPIC_0000002259758188"></a>

## 概述<a name="ZH-CN_TOPIC_0000002294398333"></a>

在现网业务中需要定期对数据库实例进行巡检并输出健康报告。DBMind构建了二十多个巡检项，包括硬件状态、实例状态、数据库资源、数据库性能与诊断优化等类别，并对其中关键资源指标趋势进行风险判断，避免不易发现的潜在问题影响实例健康。同时，支持生成日报、周报、月报供用户查看，并基于当前巡检项情况给出健康评分。支持用户对巡检项自定义设置告警阈值，方便用户根据业务特性进行调整，避免无意义告警。

>[!NOTE]说明 
>
>- 月报与周报生成约束：
>- 如果未构建日报，则无法生成周报与月报；
>- 当日报数量不满足连续7天时，无法生成这7天对应的周报；
>- 当日报数量不满足连续14天以上时，无法生成对应的月报；
>- 如出现实例IP和port的变化，会导致周报/月报无法生成；
>- 如节点实例被删除，会导致周报/月报无法生成；
>- 采用定时方式生成周报和月报时，建议控制并发量，避免影响实时任务。
>- 在配置文件中，必须将实例的IP地址映射关系记录到ip\_map中，否则无法确保巡检时获取到的是实例的管理IP地址。
>- 周报和月报仅支持对所有巡检项进行巡检，不支持部分巡检项的拼接；因此周报和月报的自定义阈值需要由前端传入，规则与实时巡检等一致，没有传入的巡检项默认不进行告警（除了部分由前端控制的巡检项，见[使用指导](#useguide)）。
>- 调用巡检接口时需要传递实例，该实例必须为主数据库实例。
>- 智能巡检中db\_size、buffer\_hit\_rate、db\_tmp\_file、db\_deadlock、db\_transaction等巡检项仅展示主节点的数据库结果，如果出现主备切换等主节点切换的情况，可能出现结果跳变（不同节点的结果拼接）。
>- 智能巡检中db\_size、buffer\_hit\_rate、db\_transaction、db\_tmp\_file、db\_deadlock等巡检项仅展示主节点的数据库结果；user\_login\_out、db\_latency、thread\_pool等巡检项展示所有节点的结果；xlog\_accumulate巡检项展示所有节点的结果。
>- 为了确保不遗漏关键信息，log\_error\_check和core\_dump这两个巡检项在实时巡检中仅支持分析最近45小时内的数据。其他巡检项的数据分析则不能超出TSDB（时序数据库）的数据存储范围，以确保数据的完整性和可用性。
>- 日报无论是否选择GUC参数巡检，均不会影响周检和月检的全量校验，依然能够生成周报/月报；此外，周报和月报不选择GUC参数巡检，不会获取GUC参数巡检结果；选择GUC参数巡检，均会生成GUC参数巡检结果。
>- 智能巡检暂不支持容灾数据库实例。
>- 当数据库实例只有单节点时，ping\_packet\_rate指标没有数据，无法进行网络状态巡检获取对应数据。
>- 动态内存、程序内存、其他内存三个巡检项依赖于pg\_total\_memory\_detail\_mbytes指标，当pv\_total\_memory\_detail视图无法查询时，无法获取相关数据进行巡检。
>- 负载高、网络异常和数据库实例不可用的场景下，巡检功能不可用。
>- 由于oldestXmin长时间未推进巡检项需要采集12小时数据来判断是否推进，因此在前12小时内，该巡检项无数据。
>- 除top\_query、long\_transaction和guc\_param三个巡检项取当前值作为巡检结果，其余巡检项均取起止时间范围内数据进行巡检，实时巡检默认时间范围为\[当前时间-6小时, 当前时间\]，日检默认时间范围为\[昨天00:00, 今天00:00\]。
>- 在prometheus中构造数据导致出现两个实例一致的数据时，由于DBMind依赖prometheus进行数据采集，因此无法判断数据是否存在异常，此构造场景下巡检结果无法保证准确。

**表 1**  巡检项与权重设置

<a name="zh-cn_topic_0000001714829153_table18958154564913"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829153_row22994654915"><th class="cellrowborder" valign="top" width="24.05%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0000001714829153_p1529154694919"><a name="zh-cn_topic_0000001714829153_p1529154694919"></a><a name="zh-cn_topic_0000001714829153_p1529154694919"></a>巡检类</p>
</th>
<th class="cellrowborder" valign="top" width="26.35%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0000001714829153_p1229646154918"><a name="zh-cn_topic_0000001714829153_p1229646154918"></a><a name="zh-cn_topic_0000001714829153_p1229646154918"></a>巡检项</p>
</th>
<th class="cellrowborder" valign="top" width="28.51%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0000001714829153_p0298461496"><a name="zh-cn_topic_0000001714829153_p0298461496"></a><a name="zh-cn_topic_0000001714829153_p0298461496"></a>巡检字段</p>
</th>
<th class="cellrowborder" valign="top" width="21.09%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0000001714829153_p42914618491"><a name="zh-cn_topic_0000001714829153_p42914618491"></a><a name="zh-cn_topic_0000001714829153_p42914618491"></a>分数权重</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829153_row14291246204910"><td class="cellrowborder" rowspan="5" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p3301461493"><a name="zh-cn_topic_0000001714829153_p3301461493"></a><a name="zh-cn_topic_0000001714829153_p3301461493"></a>系统资源</p>
<p id="zh-cn_topic_0000001714829153_p13034620492"><a name="zh-cn_topic_0000001714829153_p13034620492"></a><a name="zh-cn_topic_0000001714829153_p13034620492"></a>system_resource</p>
</td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1330184612495"><a name="zh-cn_topic_0000001714829153_p1330184612495"></a><a name="zh-cn_topic_0000001714829153_p1330184612495"></a>CPU使用率。</p>
</td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p20301746134911"><a name="zh-cn_topic_0000001714829153_p20301746134911"></a><a name="zh-cn_topic_0000001714829153_p20301746134911"></a>os_cpu_usage</p>
</td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p1730114613494"><a name="zh-cn_topic_0000001714829153_p1730114613494"></a><a name="zh-cn_topic_0000001714829153_p1730114613494"></a>0.06</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row173034616496"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p830746184914"><a name="zh-cn_topic_0000001714829153_p830746184914"></a><a name="zh-cn_topic_0000001714829153_p830746184914"></a>系统磁盘占用率。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p530446174918"><a name="zh-cn_topic_0000001714829153_p530446174918"></a><a name="zh-cn_topic_0000001714829153_p530446174918"></a>os_disk_usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p7301746164912"><a name="zh-cn_topic_0000001714829153_p7301746164912"></a><a name="zh-cn_topic_0000001714829153_p7301746164912"></a>0.06</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1830174634910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p0301046104911"><a name="zh-cn_topic_0000001714829153_p0301046104911"></a><a name="zh-cn_topic_0000001714829153_p0301046104911"></a>内存使用率。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p33044664919"><a name="zh-cn_topic_0000001714829153_p33044664919"></a><a name="zh-cn_topic_0000001714829153_p33044664919"></a>os_mem_usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p173044634916"><a name="zh-cn_topic_0000001714829153_p173044634916"></a><a name="zh-cn_topic_0000001714829153_p173044634916"></a>0.06</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row730154684911"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p630134684911"><a name="zh-cn_topic_0000001714829153_p630134684911"></a><a name="zh-cn_topic_0000001714829153_p630134684911"></a>磁盘I/O使用率。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p163094684915"><a name="zh-cn_topic_0000001714829153_p163094684915"></a><a name="zh-cn_topic_0000001714829153_p163094684915"></a>os_disk_ioutils</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p173016460493"><a name="zh-cn_topic_0000001714829153_p173016460493"></a><a name="zh-cn_topic_0000001714829153_p173016460493"></a>0.06</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row03034664915"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p53034684911"><a name="zh-cn_topic_0000001714829153_p53034684911"></a><a name="zh-cn_topic_0000001714829153_p53034684911"></a>网络状况。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1930124634919"><a name="zh-cn_topic_0000001714829153_p1930124634919"></a><a name="zh-cn_topic_0000001714829153_p1930124634919"></a>network_packet_loss</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p14301346154911"><a name="zh-cn_topic_0000001714829153_p14301346154911"></a><a name="zh-cn_topic_0000001714829153_p14301346154911"></a>0.06</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1830946154912"><td class="cellrowborder" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p12309466492"><a name="zh-cn_topic_0000001714829153_p12309466492"></a><a name="zh-cn_topic_0000001714829153_p12309466492"></a>实例状态</p>
<p id="zh-cn_topic_0000001714829153_p33074614914"><a name="zh-cn_topic_0000001714829153_p33074614914"></a><a name="zh-cn_topic_0000001714829153_p33074614914"></a>instance_status</p>
</td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p16301646144914"><a name="zh-cn_topic_0000001714829153_p16301646144914"></a><a name="zh-cn_topic_0000001714829153_p16301646144914"></a>组件异常。</p>
</td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p13012468493"><a name="zh-cn_topic_0000001714829153_p13012468493"></a><a name="zh-cn_topic_0000001714829153_p13012468493"></a>component_error</p>
</td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p1730104614913"><a name="zh-cn_topic_0000001714829153_p1730104614913"></a><a name="zh-cn_topic_0000001714829153_p1730104614913"></a>0.05</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1930144613497"><td class="cellrowborder" rowspan="3" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p20308469496"><a name="zh-cn_topic_0000001714829153_p20308469496"></a><a name="zh-cn_topic_0000001714829153_p20308469496"></a>数据库资源</p>
<p id="zh-cn_topic_0000001714829153_p1031146124916"><a name="zh-cn_topic_0000001714829153_p1031146124916"></a><a name="zh-cn_topic_0000001714829153_p1031146124916"></a>database_resource</p>
</td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p63194694916"><a name="zh-cn_topic_0000001714829153_p63194694916"></a><a name="zh-cn_topic_0000001714829153_p63194694916"></a>数据库目录占用率。</p>
</td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p73114461498"><a name="zh-cn_topic_0000001714829153_p73114461498"></a><a name="zh-cn_topic_0000001714829153_p73114461498"></a>data_directory</p>
</td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p1731194644914"><a name="zh-cn_topic_0000001714829153_p1731194644914"></a><a name="zh-cn_topic_0000001714829153_p1731194644914"></a>0.04</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row163144634910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1331846194913"><a name="zh-cn_topic_0000001714829153_p1331846194913"></a><a name="zh-cn_topic_0000001714829153_p1331846194913"></a>数据库日志目录占用率。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p12311846124915"><a name="zh-cn_topic_0000001714829153_p12311846124915"></a><a name="zh-cn_topic_0000001714829153_p12311846124915"></a>log_directory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1731114684918"><a name="zh-cn_topic_0000001714829153_p1731114684918"></a><a name="zh-cn_topic_0000001714829153_p1731114684918"></a>0.04</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row4317465499"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1231144616492"><a name="zh-cn_topic_0000001714829153_p1231144616492"></a><a name="zh-cn_topic_0000001714829153_p1231144616492"></a>数据库大小。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p83116469496"><a name="zh-cn_topic_0000001714829153_p83116469496"></a><a name="zh-cn_topic_0000001714829153_p83116469496"></a>db_size</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1331246114910"><a name="zh-cn_topic_0000001714829153_p1331246114910"></a><a name="zh-cn_topic_0000001714829153_p1331246114910"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row12311046184917"><td class="cellrowborder" rowspan="15" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p13184610496"><a name="zh-cn_topic_0000001714829153_p13184610496"></a><a name="zh-cn_topic_0000001714829153_p13184610496"></a>数据库性能</p>
<p id="zh-cn_topic_0000001714829153_p7311646154916"><a name="zh-cn_topic_0000001714829153_p7311646154916"></a><a name="zh-cn_topic_0000001714829153_p7311646154916"></a>database_performance</p>
</td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1331194610498"><a name="zh-cn_topic_0000001714829153_p1331194610498"></a><a name="zh-cn_topic_0000001714829153_p1331194610498"></a>Buffer命中率。</p>
</td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p8311046114911"><a name="zh-cn_topic_0000001714829153_p8311046114911"></a><a name="zh-cn_topic_0000001714829153_p8311046114911"></a>buffer_hit_rate</p>
</td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p14311846104913"><a name="zh-cn_topic_0000001714829153_p14311846104913"></a><a name="zh-cn_topic_0000001714829153_p14311846104913"></a>0.03</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row43194624913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p9311746204917"><a name="zh-cn_topic_0000001714829153_p9311746204917"></a><a name="zh-cn_topic_0000001714829153_p9311746204917"></a>用户登录登出次数。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1031184644915"><a name="zh-cn_topic_0000001714829153_p1031184644915"></a><a name="zh-cn_topic_0000001714829153_p1031184644915"></a>user_login_out</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p10311462493"><a name="zh-cn_topic_0000001714829153_p10311462493"></a><a name="zh-cn_topic_0000001714829153_p10311462493"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row93104611496"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p143144613498"><a name="zh-cn_topic_0000001714829153_p143144613498"></a><a name="zh-cn_topic_0000001714829153_p143144613498"></a>活跃Session率。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p8311446154911"><a name="zh-cn_topic_0000001714829153_p8311446154911"></a><a name="zh-cn_topic_0000001714829153_p8311446154911"></a>active_session_rate</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p531194614499"><a name="zh-cn_topic_0000001714829153_p531194614499"></a><a name="zh-cn_topic_0000001714829153_p531194614499"></a>0.03</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1531184620498"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p23194644911"><a name="zh-cn_topic_0000001714829153_p23194644911"></a><a name="zh-cn_topic_0000001714829153_p23194644911"></a>日志异常检查。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p2317461497"><a name="zh-cn_topic_0000001714829153_p2317461497"></a><a name="zh-cn_topic_0000001714829153_p2317461497"></a>log_error_check</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p332164614914"><a name="zh-cn_topic_0000001714829153_p332164614914"></a><a name="zh-cn_topic_0000001714829153_p332164614914"></a>0.03</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row03264617491"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1321946134911"><a name="zh-cn_topic_0000001714829153_p1321946134911"></a><a name="zh-cn_topic_0000001714829153_p1321946134911"></a>线程池占用率。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1532114610497"><a name="zh-cn_topic_0000001714829153_p1532114610497"></a><a name="zh-cn_topic_0000001714829153_p1532114610497"></a>thread_pool</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p193234615498"><a name="zh-cn_topic_0000001714829153_p193234615498"></a><a name="zh-cn_topic_0000001714829153_p193234615498"></a>0.03</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1632846114918"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p332124619496"><a name="zh-cn_topic_0000001714829153_p332124619496"></a><a name="zh-cn_topic_0000001714829153_p332124619496"></a>数据库时延。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p732446124920"><a name="zh-cn_topic_0000001714829153_p732446124920"></a><a name="zh-cn_topic_0000001714829153_p732446124920"></a>db_latency</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1732144613493"><a name="zh-cn_topic_0000001714829153_p1732144613493"></a><a name="zh-cn_topic_0000001714829153_p1732144613493"></a>0.08</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row203244617495"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p832144694915"><a name="zh-cn_topic_0000001714829153_p832144694915"></a><a name="zh-cn_topic_0000001714829153_p832144694915"></a>数据库事务。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p53244610491"><a name="zh-cn_topic_0000001714829153_p53244610491"></a><a name="zh-cn_topic_0000001714829153_p53244610491"></a>db_transaction</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p23214634919"><a name="zh-cn_topic_0000001714829153_p23214634919"></a><a name="zh-cn_topic_0000001714829153_p23214634919"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row0321846164920"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p173211469491"><a name="zh-cn_topic_0000001714829153_p173211469491"></a><a name="zh-cn_topic_0000001714829153_p173211469491"></a>数据库临时文件大小。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1332144612490"><a name="zh-cn_topic_0000001714829153_p1332144612490"></a><a name="zh-cn_topic_0000001714829153_p1332144612490"></a>db_tmp_file</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p183215461494"><a name="zh-cn_topic_0000001714829153_p183215461494"></a><a name="zh-cn_topic_0000001714829153_p183215461494"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1732124634910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p83254614492"><a name="zh-cn_topic_0000001714829153_p83254614492"></a><a name="zh-cn_topic_0000001714829153_p83254614492"></a>数据库执行语句。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p8321646114910"><a name="zh-cn_topic_0000001714829153_p8321646114910"></a><a name="zh-cn_topic_0000001714829153_p8321646114910"></a>db_exec_statement</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p73264654913"><a name="zh-cn_topic_0000001714829153_p73264654913"></a><a name="zh-cn_topic_0000001714829153_p73264654913"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1732194674911"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p15323467493"><a name="zh-cn_topic_0000001714829153_p15323467493"></a><a name="zh-cn_topic_0000001714829153_p15323467493"></a>数据库死锁。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p9321346184915"><a name="zh-cn_topic_0000001714829153_p9321346184915"></a><a name="zh-cn_topic_0000001714829153_p9321346184915"></a>db_deadlock</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1132114618497"><a name="zh-cn_topic_0000001714829153_p1132114618497"></a><a name="zh-cn_topic_0000001714829153_p1132114618497"></a>0.03</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row232646174910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p203274618492"><a name="zh-cn_topic_0000001714829153_p203274618492"></a><a name="zh-cn_topic_0000001714829153_p203274618492"></a>数据库TPS性能。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p533164684914"><a name="zh-cn_topic_0000001714829153_p533164684914"></a><a name="zh-cn_topic_0000001714829153_p533164684914"></a>db_tps</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p533946184917"><a name="zh-cn_topic_0000001714829153_p533946184917"></a><a name="zh-cn_topic_0000001714829153_p533946184917"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row163334644913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p933646184919"><a name="zh-cn_topic_0000001714829153_p933646184919"></a><a name="zh-cn_topic_0000001714829153_p933646184919"></a>数据库Top Query。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p133311465490"><a name="zh-cn_topic_0000001714829153_p133311465490"></a><a name="zh-cn_topic_0000001714829153_p133311465490"></a>db_top_query</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p8334463494"><a name="zh-cn_topic_0000001714829153_p8334463494"></a><a name="zh-cn_topic_0000001714829153_p8334463494"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1433164617499"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p93304664915"><a name="zh-cn_topic_0000001714829153_p93304664915"></a><a name="zh-cn_topic_0000001714829153_p93304664915"></a>长事务。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p10331446164916"><a name="zh-cn_topic_0000001714829153_p10331446164916"></a><a name="zh-cn_topic_0000001714829153_p10331446164916"></a>long_transaction</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p533446144913"><a name="zh-cn_topic_0000001714829153_p533446144913"></a><a name="zh-cn_topic_0000001714829153_p533446144913"></a>0.05</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row10331046164910"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p173384618494"><a name="zh-cn_topic_0000001714829153_p173384618494"></a><a name="zh-cn_topic_0000001714829153_p173384618494"></a>Xlog堆积。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p1233124619495"><a name="zh-cn_topic_0000001714829153_p1233124619495"></a><a name="zh-cn_topic_0000001714829153_p1233124619495"></a>xlog_accumulate</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p103354624911"><a name="zh-cn_topic_0000001714829153_p103354624911"></a><a name="zh-cn_topic_0000001714829153_p103354624911"></a>0.05</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row53384616494"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p733446144913"><a name="zh-cn_topic_0000001714829153_p733446144913"></a><a name="zh-cn_topic_0000001714829153_p733446144913"></a>oldestXmin长时间未推进。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p33384614491"><a name="zh-cn_topic_0000001714829153_p33384614491"></a><a name="zh-cn_topic_0000001714829153_p33384614491"></a>xmin_stuck</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1733046114912"><a name="zh-cn_topic_0000001714829153_p1733046114912"></a><a name="zh-cn_topic_0000001714829153_p1733046114912"></a>0.05</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row153310462491"><td class="cellrowborder" rowspan="5" valign="top" width="24.05%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1033046174910"><a name="zh-cn_topic_0000001714829153_p1033046174910"></a><a name="zh-cn_topic_0000001714829153_p1033046174910"></a>诊断优化</p>
<p id="zh-cn_topic_0000001714829153_p133164615492"><a name="zh-cn_topic_0000001714829153_p133164615492"></a><a name="zh-cn_topic_0000001714829153_p133164615492"></a>diagnosis_optimization</p>
</td>
<td class="cellrowborder" valign="top" width="26.35%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p933124610491"><a name="zh-cn_topic_0000001714829153_p933124610491"></a><a name="zh-cn_topic_0000001714829153_p933124610491"></a>Core dump。</p>
</td>
<td class="cellrowborder" valign="top" width="28.51%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p123314468494"><a name="zh-cn_topic_0000001714829153_p123314468494"></a><a name="zh-cn_topic_0000001714829153_p123314468494"></a>core_dump</p>
</td>
<td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001714829153_p173364620497"><a name="zh-cn_topic_0000001714829153_p173364620497"></a><a name="zh-cn_topic_0000001714829153_p173364620497"></a>0.04</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row18331246104911"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p153394694917"><a name="zh-cn_topic_0000001714829153_p153394694917"></a><a name="zh-cn_topic_0000001714829153_p153394694917"></a>动态内存。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p10335462496"><a name="zh-cn_topic_0000001714829153_p10335462496"></a><a name="zh-cn_topic_0000001714829153_p10335462496"></a>dynamic_memory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p3331646134911"><a name="zh-cn_topic_0000001714829153_p3331646134911"></a><a name="zh-cn_topic_0000001714829153_p3331646134911"></a>0.04</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row23415466497"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p1734124674914"><a name="zh-cn_topic_0000001714829153_p1734124674914"></a><a name="zh-cn_topic_0000001714829153_p1734124674914"></a>程序内存。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p734104614493"><a name="zh-cn_topic_0000001714829153_p734104614493"></a><a name="zh-cn_topic_0000001714829153_p734104614493"></a>process_memory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p334124614497"><a name="zh-cn_topic_0000001714829153_p334124614497"></a><a name="zh-cn_topic_0000001714829153_p334124614497"></a>0.04</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1834154684917"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p6341046194920"><a name="zh-cn_topic_0000001714829153_p6341046194920"></a><a name="zh-cn_topic_0000001714829153_p6341046194920"></a>其他内存。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p143404674915"><a name="zh-cn_topic_0000001714829153_p143404674915"></a><a name="zh-cn_topic_0000001714829153_p143404674915"></a>other_memory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1634746114913"><a name="zh-cn_topic_0000001714829153_p1634746114913"></a><a name="zh-cn_topic_0000001714829153_p1634746114913"></a>0.03</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11341046164917"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001714829153_p173434618493"><a name="zh-cn_topic_0000001714829153_p173434618493"></a><a name="zh-cn_topic_0000001714829153_p173434618493"></a>GUC参数。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001714829153_p17340468499"><a name="zh-cn_topic_0000001714829153_p17340468499"></a><a name="zh-cn_topic_0000001714829153_p17340468499"></a>guc_params</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001714829153_p1234946204917"><a name="zh-cn_topic_0000001714829153_p1234946204917"></a><a name="zh-cn_topic_0000001714829153_p1234946204917"></a>0.04</p>
</td>
</tr>
</tbody>
</table>

### 各巡检项实现细节与告警设置<a name="zh-cn_topic_0000001714829153_section109141633317"></a>

- 系统资源
    - CPU使用率：获取TSDB中的“os\_cpu\_user\_usage”和“os\_cpu\_iowait\_usage”两个指标。
        - 对于os\_cpu\_user\_usage，观测数值是否大于0.7，若超出阈值，则进行告警；最后，进行趋势预测，判断未来24小时数值是否大于0.7，若超出阈值，则进行告警。
        - 对于os\_cpu\_iowait\_usage，当数值大于0.3时，进行告警。

    - 系统磁盘占用率：获取TSDB中的“os\_disk\_usage”指标，观测其中系统盘（mount\_point='/'）的磁盘使用率，当数值大于0.8时，进行告警。
    - 系统总内存使用率：获取TSDB中的“os\_mem\_usage”指标，当发现持续上升时会进行告警；当数值大于0.7时，进行告警；最后，进行趋势预测，如果判断未来24小时数值大于0.8，进行告警。
    - 磁盘I/O使用率：获取TSDB中的“os\_disk\_ioutils”指标，当数值大于0.8时，进行告警。
    - 网络状况：获取TSDB中的“ping\_packet\_rate”指标，得出数据库节点间的网络连接状况，当丢包率大于0.05时，进行告警。

- 实例状态
    - 组件异常：根据instance从元数据库中获取节点的状态信息，得出时间范围内当前数据库实例的状态，当出现异常状态（即值不为-1）时，进行告警。

- 数据库资源
    - 数据库目录占用率：获取TSDB中的“pg\_node\_info\_uptime”指标，解析出各个数据库实例的数据目录，同时获取“process\_cpu\_usage”指标，匹配判断是否存在change\_root，存在则组合成正确的目录路径，然后获取“os\_disk\_usage”指标，匹配判断对应数据目录的占用率，当发现持续上升时，进行告警；当数值大于0.8时，进行告警；最后，进行趋势预测，如果判断未来24小时数值大于0.8，进行告警；判断文件系统类型是否有误，不匹配则进行告警，匹配范围为\['xfs', 'ext3', 'ext4'\]。
    - 数据库日志目录占用率：获取TSDB中的“pg\_node\_info\_uptime”指标，然后解析出各个数据库实例的日志目录，同时获取“process\_cpu\_usage”指标，匹配判断是否存在change\_root，存在则组合成正确的目录路径，，然后获取“os\_disk\_usage”指标，匹配判断对应日志目录的占用率，当发现持续上升时会进行告警，当数值大于0.8时，同样进行告警，再进行趋势预测，如果判断未来24小时数值大于0.8，也会进行告警，最后还会判断文件系统类型是否有误，不匹配则进行告警，匹配范围为\['xfs', 'ext3', 'ext4'\]。
    - 数据库大小：获取TSDB中的“pg\_database\_size\_bytes”指标，获取所有数据库的大小并进行记录，用于前端进行趋势展示。暂无告警。

- 数据库性能
    - Buffer命中率：获取TSDB中的“pg\_db\_blks\_access”指标，当数值大于0.9时，进行告警。
    - 用户登录登出次数：获取TSDB中的“user\_login”和“user\_logout”两个指标，获取1分钟内平均每秒用户登录/登出次数，用于前端进行趋势展示。暂无告警。
    - 活跃Session率：获取TSDB中的活跃会话数active\_connection和总会话数total\_connection指标，活跃session率即为active\_connection / total\_connection，当其比值小于0.8时，进行告警。
    - 日志异常检查：获取TSDB中日志相关的指标，统计每种日志错误出现的次数并进行相加，如果出现日志异常，则将日志异常的出现次数返回前端，进行告警。具体指标为'deadlock\_count', 'login\_denied', 'errors\_rate', 'panic', 'dn\_ping\_standby', 'node\_restart', 'node\_start', 'cn\_status', 'dn\_status', 'gtm\_status', 'dn\_writable\_failed', 'etcd\_io\_overload', 'cms\_heartbeat\_timeout\_restart', 'cms\_phonydead\_restart', 'cms\_cn\_down', 'cn\_restart\_time\_exceed', 'cms\_read\_only', 'cms\_restart\_pending', 'cms\_heartbeat\_timeout', 'etcd\_restart', 'etcd\_not\_connect\_dial\_tcp', 'etcd\_auth\_failed', 'etcd\_overload', 'etcd\_sync\_timeout', 'etcd\_disk\_full', 'etcd\_be\_killed', 'bind\_ip\_failed', 'gtm\_disconnected\_to\_primary', 'gtm\_panic', 'ffic'。
    - 线程池占用率：获取TSDB中的“pg\_thread\_pool\_rate”指标，当发现持续上升时会进行告警，当数值小于0.9时，进行告警。
    - 数据库时延：获取TSDB中的“statement\_responsetime\_percentile\_p95”和“statement\_responsetime\_percentile\_p80”两个指标，暂无告警。
    - 数据库事务：获取TSDB中的“pg\_db\_xact\_commit”和“pg\_db\_xact\_rollback”两个指标，获取数据库中提交和回滚的次数，用于前端进行趋势展示。暂无告警。
    - 数据库临时文件大小：获取TSDB中的“pg\_db\_temp\_files”指标，获取数据库临时文件的大小，用于前端进行趋势展示。暂无告警。
    - 数据库执行语句：获取TSDB中的“pg\_sql\_count\_select”、“pg\_sql\_count\_update”、“pg\_sql\_count\_insert”和“pg\_sql\_count\_delete”四个指标，获取数据库中select、update、insert、delete的执行次数，用于前端进行趋势展示。暂无告警。
    - 数据库死锁：获取TSDB中的“pg\_db\_deadlocks”指标，获取数据库中出现的死锁情况，当死锁数不为0时，表示数据库出现死锁。数值表示死锁数量。暂无告警。
    - 数据库TPS性能：获取TSDB中的“qps\_by\_instance”和“qps”两个指标，获取数据库的QPS和TPS信息，用于前端进行趋势展示。暂无告警。
    - 数据库Top Query：通过执行SQL语句从dbe\_perf.statement查询出现调用次数最多的TopK个查询，用于前端展示。当前K为10。暂无告警。
    - 长事务：通过执行SQL语句从pg\_catalog.pg\_stat\_activity查询超过12小时未结束的活跃事务，当返回结果列表的长度大于0时，表示存在长事务，进行告警。
    - xLog堆积：获取TSDB中的“xlog\_count”指标，获取xlog目录下的文件数量，当数量大于3000时，进行告警。
    - oldestXmin长时间未推进：获取TSDB中的“oldestxmin\_increase”指标，当oldestxmin超过12小时未出现变化，则表示长时间未推进，此时巡检返回数据中数值为0，进行告警。

- 诊断优化
    - Core dump：获取TSDB中的“log\_ffic”指标，当返回值中count大于0时，表示出现core dump，进行告警。
    - 动态内存：获取TSDB中的“pg\_total\_memory\_detail\_mbytes”指标，计算其中“dynamic\_used\_memory”相对于“max\_dynamic\_memory”的比例，当数值大于0.8时，进行告警；计算其中“dynamic\_used\_shrctx”相对于“max\_dynamic\_memory”的比例，当数值大于0.8时，同样进行告警。
    - 程序内存：获取TSDB中的“pg\_total\_memory\_detail\_mbytes”指标，计算其中“process\_used\_memory”相对于“max\_process\_memory”的比例，当数值大于0.8时，进行告警。
    - 其他内存：获取TSDB中的“pg\_total\_memory\_detail\_mbytes”指标，获取其中“other\_used\_memory”的值，当发现持续上升时会进行告警，当超过20G时，进行告警。
    - GUC参数：获取TSDB中的“pg\_total\_memory\_detail\_mbytes”和“pg\_settings\_setting”指标，获取其中“max\_process\_memory”、“shared\_buffers”和“work\_mem”的值，将当前的值与DBMind根据workload推算出的最优参数进行对比，如果当前参数与最优参数相差大，结果中的warning字段为true，进行告警。
        - 对于"work\_mem"：
            - 独立部署DN时，最优值a= \(内存/16G） \* 16MB，如果a\>128MB，设置为128MB，若a < 16MB, 设置 16MB。基于最优值取\[0.9a, 1.1a\]作为可选区间，当实际work\_mem参数在\[0.9a, 1.1a\]范围外时，进行告警。

        - 对于"max\_process\_memory"：
            - 系统总内存\> 256GB，设置：系统总内存 \*0.875。
            - 系统总内存<=256GB && 系统总内存\>=128GB，设置：内存\*0.75。
            - 系统总内存<128GB，设置：系统总内存 \* 0.625。

        - 对于"shared\_buffer"：

            最优值：系统总内存/4。

>[!NOTE]说明 
>
>健康评分根据各巡检项的重要性权重以及异常程度来给出评分，最后汇总成当前实例的健康评分，具体计算公式如下：
>![](figures/zh-cn_formulaimage_0000002294473813.png)
>上述：
>![](figures/zh-cn_formulaimage_0000002259760648.png)
>S<sub>i</sub>  = 0 or 1（其中0代表巡检项异常，1代表正常）。
>此外，结论中会提供TOP3列表，TOP3指的是异常情况最严重的三个巡检项，通过统计各个巡检项的异常数量，再结合巡检项的权重进行排序，取前3个作为TOP3列表，如果没有异常，则为空。
>各巡检项的异常数量：网络状态按照双向通信异常进行计算；buffer\_hit\_rate巡检项按照数据库实例异常数量计算；长事务按照长事务数量进行计算；其他巡检项按照节点异常数量进行计算。

### 支持的巡检自定义阈值<a name="zh-cn_topic_0000001714829153_section8275812395"></a>

当前巡检项的告警类型与默认设置如下表所示。

- √和范围表示该巡检项已设置默认告警阈值。
- -表示该巡检项支持设置对应告警类型。
- ×表示该巡检项不支持设置对应告警类型。

<a name="zh-cn_topic_0000001714829153_table10952201315112"></a>
<table><tbody><tr id="zh-cn_topic_0000001714829153_row11105171401111"><td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p310591415114"><a name="zh-cn_topic_0000001714829153_p310591415114"></a><a name="zh-cn_topic_0000001714829153_p310591415114"></a>巡检项</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p610511416111"><a name="zh-cn_topic_0000001714829153_p610511416111"></a><a name="zh-cn_topic_0000001714829153_p610511416111"></a>巡检项</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p11061014121112"><a name="zh-cn_topic_0000001714829153_p11061014121112"></a><a name="zh-cn_topic_0000001714829153_p11061014121112"></a>数值范围</p>
</td>
<td class="cellrowborder" colspan="4" valign="top"><p id="zh-cn_topic_0000001714829153_p14106181414113"><a name="zh-cn_topic_0000001714829153_p14106181414113"></a><a name="zh-cn_topic_0000001714829153_p14106181414113"></a>异常类型</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top"><p id="zh-cn_topic_0000001714829153_p21061514191116"><a name="zh-cn_topic_0000001714829153_p21061514191116"></a><a name="zh-cn_topic_0000001714829153_p21061514191116"></a>判断标准</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11061414191113"><td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p310613144115"><a name="zh-cn_topic_0000001714829153_p310613144115"></a><a name="zh-cn_topic_0000001714829153_p310613144115"></a>超过阈值</p>
</td>
<td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p81061014111116"><a name="zh-cn_topic_0000001714829153_p81061014111116"></a><a name="zh-cn_topic_0000001714829153_p81061014111116"></a>预测超过阈值</p>
</td>
<td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p5106141421119"><a name="zh-cn_topic_0000001714829153_p5106141421119"></a><a name="zh-cn_topic_0000001714829153_p5106141421119"></a>持续上升</p>
</td>
<td class="cellrowborder" valign="top"><p id="zh-cn_topic_0000001714829153_p810611141112"><a name="zh-cn_topic_0000001714829153_p810611141112"></a><a name="zh-cn_topic_0000001714829153_p810611141112"></a>文件类型有误</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row151061714191110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p1610641491116"><a name="zh-cn_topic_0000001714829153_p1610641491116"></a><a name="zh-cn_topic_0000001714829153_p1610641491116"></a>CPU使用率-os_cpu_user_usage</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p16106161419116"><a name="zh-cn_topic_0000001714829153_p16106161419116"></a><a name="zh-cn_topic_0000001714829153_p16106161419116"></a>os_cpu_usage</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1310651491116"><a name="zh-cn_topic_0000001714829153_p1310651491116"></a><a name="zh-cn_topic_0000001714829153_p1310651491116"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p121061214201110"><a name="zh-cn_topic_0000001714829153_p121061214201110"></a><a name="zh-cn_topic_0000001714829153_p121061214201110"></a>&gt;0.7</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1110614146117"><a name="zh-cn_topic_0000001714829153_p1110614146117"></a><a name="zh-cn_topic_0000001714829153_p1110614146117"></a>&gt;0.7</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p210621471113"><a name="zh-cn_topic_0000001714829153_p210621471113"></a><a name="zh-cn_topic_0000001714829153_p210621471113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p210651431114"><a name="zh-cn_topic_0000001714829153_p210651431114"></a><a name="zh-cn_topic_0000001714829153_p210651431114"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p15106314181116"><a name="zh-cn_topic_0000001714829153_p15106314181116"></a><a name="zh-cn_topic_0000001714829153_p15106314181116"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row15280155216229"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p132811452152211"><a name="zh-cn_topic_0000001714829153_p132811452152211"></a><a name="zh-cn_topic_0000001714829153_p132811452152211"></a>CPU使用率-os_cpu_iowait_usage</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p18281155217228"><a name="zh-cn_topic_0000001714829153_p18281155217228"></a><a name="zh-cn_topic_0000001714829153_p18281155217228"></a>os_cpu_usage</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1628125219221"><a name="zh-cn_topic_0000001714829153_p1628125219221"></a><a name="zh-cn_topic_0000001714829153_p1628125219221"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p14281195212228"><a name="zh-cn_topic_0000001714829153_p14281195212228"></a><a name="zh-cn_topic_0000001714829153_p14281195212228"></a>&gt;0.3</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p9281115212219"><a name="zh-cn_topic_0000001714829153_p9281115212219"></a><a name="zh-cn_topic_0000001714829153_p9281115212219"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1728145210222"><a name="zh-cn_topic_0000001714829153_p1728145210222"></a><a name="zh-cn_topic_0000001714829153_p1728145210222"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p102810528223"><a name="zh-cn_topic_0000001714829153_p102810528223"></a><a name="zh-cn_topic_0000001714829153_p102810528223"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p17281145252214"><a name="zh-cn_topic_0000001714829153_p17281145252214"></a><a name="zh-cn_topic_0000001714829153_p17281145252214"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row3106614191110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p14106161414113"><a name="zh-cn_topic_0000001714829153_p14106161414113"></a><a name="zh-cn_topic_0000001714829153_p14106161414113"></a>磁盘I/O使用率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p5106161414115"><a name="zh-cn_topic_0000001714829153_p5106161414115"></a><a name="zh-cn_topic_0000001714829153_p5106161414115"></a>os_disk_ioutils</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1010621419112"><a name="zh-cn_topic_0000001714829153_p1010621419112"></a><a name="zh-cn_topic_0000001714829153_p1010621419112"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1410612144116"><a name="zh-cn_topic_0000001714829153_p1410612144116"></a><a name="zh-cn_topic_0000001714829153_p1410612144116"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1910691481114"><a name="zh-cn_topic_0000001714829153_p1910691481114"></a><a name="zh-cn_topic_0000001714829153_p1910691481114"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6106814171113"><a name="zh-cn_topic_0000001714829153_p6106814171113"></a><a name="zh-cn_topic_0000001714829153_p6106814171113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1710621421119"><a name="zh-cn_topic_0000001714829153_p1710621421119"></a><a name="zh-cn_topic_0000001714829153_p1710621421119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p20106114131117"><a name="zh-cn_topic_0000001714829153_p20106114131117"></a><a name="zh-cn_topic_0000001714829153_p20106114131117"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11069148115"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p201061414141120"><a name="zh-cn_topic_0000001714829153_p201061414141120"></a><a name="zh-cn_topic_0000001714829153_p201061414141120"></a>系统磁盘占用率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p131063148119"><a name="zh-cn_topic_0000001714829153_p131063148119"></a><a name="zh-cn_topic_0000001714829153_p131063148119"></a>os_disk_usage</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p13106121416117"><a name="zh-cn_topic_0000001714829153_p13106121416117"></a><a name="zh-cn_topic_0000001714829153_p13106121416117"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p310621411113"><a name="zh-cn_topic_0000001714829153_p310621411113"></a><a name="zh-cn_topic_0000001714829153_p310621411113"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15106101417117"><a name="zh-cn_topic_0000001714829153_p15106101417117"></a><a name="zh-cn_topic_0000001714829153_p15106101417117"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1810618146116"><a name="zh-cn_topic_0000001714829153_p1810618146116"></a><a name="zh-cn_topic_0000001714829153_p1810618146116"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1107814151119"><a name="zh-cn_topic_0000001714829153_p1107814151119"></a><a name="zh-cn_topic_0000001714829153_p1107814151119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p161071514151117"><a name="zh-cn_topic_0000001714829153_p161071514151117"></a><a name="zh-cn_topic_0000001714829153_p161071514151117"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row91071214181110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p610711413111"><a name="zh-cn_topic_0000001714829153_p610711413111"></a><a name="zh-cn_topic_0000001714829153_p610711413111"></a>内存使用率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1010791461114"><a name="zh-cn_topic_0000001714829153_p1010791461114"></a><a name="zh-cn_topic_0000001714829153_p1010791461114"></a>os_mem_usage</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p310721491112"><a name="zh-cn_topic_0000001714829153_p310721491112"></a><a name="zh-cn_topic_0000001714829153_p310721491112"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p171071414181117"><a name="zh-cn_topic_0000001714829153_p171071414181117"></a><a name="zh-cn_topic_0000001714829153_p171071414181117"></a>&gt;0.7</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p16107121413114"><a name="zh-cn_topic_0000001714829153_p16107121413114"></a><a name="zh-cn_topic_0000001714829153_p16107121413114"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p410711417110"><a name="zh-cn_topic_0000001714829153_p410711417110"></a><a name="zh-cn_topic_0000001714829153_p410711417110"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p2107171461117"><a name="zh-cn_topic_0000001714829153_p2107171461117"></a><a name="zh-cn_topic_0000001714829153_p2107171461117"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p310720147118"><a name="zh-cn_topic_0000001714829153_p310720147118"></a><a name="zh-cn_topic_0000001714829153_p310720147118"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row71071814101116"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p17107714161112"><a name="zh-cn_topic_0000001714829153_p17107714161112"></a><a name="zh-cn_topic_0000001714829153_p17107714161112"></a>网络状况</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1410721401119"><a name="zh-cn_topic_0000001714829153_p1410721401119"></a><a name="zh-cn_topic_0000001714829153_p1410721401119"></a>network_packet_loss</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p110791416110"><a name="zh-cn_topic_0000001714829153_p110791416110"></a><a name="zh-cn_topic_0000001714829153_p110791416110"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6107214131116"><a name="zh-cn_topic_0000001714829153_p6107214131116"></a><a name="zh-cn_topic_0000001714829153_p6107214131116"></a>&gt;0.05</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1910751471111"><a name="zh-cn_topic_0000001714829153_p1910751471111"></a><a name="zh-cn_topic_0000001714829153_p1910751471111"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p19107191417114"><a name="zh-cn_topic_0000001714829153_p19107191417114"></a><a name="zh-cn_topic_0000001714829153_p19107191417114"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p121071514101118"><a name="zh-cn_topic_0000001714829153_p121071514101118"></a><a name="zh-cn_topic_0000001714829153_p121071514101118"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p141074149115"><a name="zh-cn_topic_0000001714829153_p141074149115"></a><a name="zh-cn_topic_0000001714829153_p141074149115"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row181071214201119"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p310741401110"><a name="zh-cn_topic_0000001714829153_p310741401110"></a><a name="zh-cn_topic_0000001714829153_p310741401110"></a>组件异常</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p81075146119"><a name="zh-cn_topic_0000001714829153_p81075146119"></a><a name="zh-cn_topic_0000001714829153_p81075146119"></a>component_error</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p141071914101111"><a name="zh-cn_topic_0000001714829153_p141071914101111"></a><a name="zh-cn_topic_0000001714829153_p141071914101111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p8107181417118"><a name="zh-cn_topic_0000001714829153_p8107181417118"></a><a name="zh-cn_topic_0000001714829153_p8107181417118"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p610781451112"><a name="zh-cn_topic_0000001714829153_p610781451112"></a><a name="zh-cn_topic_0000001714829153_p610781451112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p14107181417117"><a name="zh-cn_topic_0000001714829153_p14107181417117"></a><a name="zh-cn_topic_0000001714829153_p14107181417117"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p31074147111"><a name="zh-cn_topic_0000001714829153_p31074147111"></a><a name="zh-cn_topic_0000001714829153_p31074147111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1310712141115"><a name="zh-cn_topic_0000001714829153_p1310712141115"></a><a name="zh-cn_topic_0000001714829153_p1310712141115"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row5107111491113"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p5107414201120"><a name="zh-cn_topic_0000001714829153_p5107414201120"></a><a name="zh-cn_topic_0000001714829153_p5107414201120"></a>数据库目录占用率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p17107514141119"><a name="zh-cn_topic_0000001714829153_p17107514141119"></a><a name="zh-cn_topic_0000001714829153_p17107514141119"></a>data_directory</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p121071414161111"><a name="zh-cn_topic_0000001714829153_p121071414161111"></a><a name="zh-cn_topic_0000001714829153_p121071414161111"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13107191421119"><a name="zh-cn_topic_0000001714829153_p13107191421119"></a><a name="zh-cn_topic_0000001714829153_p13107191421119"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1010720146118"><a name="zh-cn_topic_0000001714829153_p1010720146118"></a><a name="zh-cn_topic_0000001714829153_p1010720146118"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p10107111461111"><a name="zh-cn_topic_0000001714829153_p10107111461111"></a><a name="zh-cn_topic_0000001714829153_p10107111461111"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15108191461116"><a name="zh-cn_topic_0000001714829153_p15108191461116"></a><a name="zh-cn_topic_0000001714829153_p15108191461116"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p181081014121115"><a name="zh-cn_topic_0000001714829153_p181081014121115"></a><a name="zh-cn_topic_0000001714829153_p181081014121115"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11108114141110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p510814142115"><a name="zh-cn_topic_0000001714829153_p510814142115"></a><a name="zh-cn_topic_0000001714829153_p510814142115"></a>数据库日志目录占用率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p2108141421115"><a name="zh-cn_topic_0000001714829153_p2108141421115"></a><a name="zh-cn_topic_0000001714829153_p2108141421115"></a>log_directory</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p41081814111116"><a name="zh-cn_topic_0000001714829153_p41081814111116"></a><a name="zh-cn_topic_0000001714829153_p41081814111116"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p7108171461119"><a name="zh-cn_topic_0000001714829153_p7108171461119"></a><a name="zh-cn_topic_0000001714829153_p7108171461119"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6108151431115"><a name="zh-cn_topic_0000001714829153_p6108151431115"></a><a name="zh-cn_topic_0000001714829153_p6108151431115"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13108201441114"><a name="zh-cn_topic_0000001714829153_p13108201441114"></a><a name="zh-cn_topic_0000001714829153_p13108201441114"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p141081140115"><a name="zh-cn_topic_0000001714829153_p141081140115"></a><a name="zh-cn_topic_0000001714829153_p141081140115"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p510861418114"><a name="zh-cn_topic_0000001714829153_p510861418114"></a><a name="zh-cn_topic_0000001714829153_p510861418114"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1810841415111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p41081214131115"><a name="zh-cn_topic_0000001714829153_p41081214131115"></a><a name="zh-cn_topic_0000001714829153_p41081214131115"></a>数据库大小</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p6108141418113"><a name="zh-cn_topic_0000001714829153_p6108141418113"></a><a name="zh-cn_topic_0000001714829153_p6108141418113"></a>db_size</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p12108181401118"><a name="zh-cn_topic_0000001714829153_p12108181401118"></a><a name="zh-cn_topic_0000001714829153_p12108181401118"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1210831420119"><a name="zh-cn_topic_0000001714829153_p1210831420119"></a><a name="zh-cn_topic_0000001714829153_p1210831420119"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13108191441117"><a name="zh-cn_topic_0000001714829153_p13108191441117"></a><a name="zh-cn_topic_0000001714829153_p13108191441117"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3108191411113"><a name="zh-cn_topic_0000001714829153_p3108191411113"></a><a name="zh-cn_topic_0000001714829153_p3108191411113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1510861461113"><a name="zh-cn_topic_0000001714829153_p1510861461113"></a><a name="zh-cn_topic_0000001714829153_p1510861461113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p11108111410113"><a name="zh-cn_topic_0000001714829153_p11108111410113"></a><a name="zh-cn_topic_0000001714829153_p11108111410113"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1410881401111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p15108171415111"><a name="zh-cn_topic_0000001714829153_p15108171415111"></a><a name="zh-cn_topic_0000001714829153_p15108171415111"></a>Buffer命中率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p9108141481120"><a name="zh-cn_topic_0000001714829153_p9108141481120"></a><a name="zh-cn_topic_0000001714829153_p9108141481120"></a>buffer_hit_rate</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p4108181401111"><a name="zh-cn_topic_0000001714829153_p4108181401111"></a><a name="zh-cn_topic_0000001714829153_p4108181401111"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p51085145118"><a name="zh-cn_topic_0000001714829153_p51085145118"></a><a name="zh-cn_topic_0000001714829153_p51085145118"></a>&lt;0.9</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3108114131112"><a name="zh-cn_topic_0000001714829153_p3108114131112"></a><a name="zh-cn_topic_0000001714829153_p3108114131112"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p18108121441116"><a name="zh-cn_topic_0000001714829153_p18108121441116"></a><a name="zh-cn_topic_0000001714829153_p18108121441116"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p11089148118"><a name="zh-cn_topic_0000001714829153_p11089148118"></a><a name="zh-cn_topic_0000001714829153_p11089148118"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p14108121471114"><a name="zh-cn_topic_0000001714829153_p14108121471114"></a><a name="zh-cn_topic_0000001714829153_p14108121471114"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row171091414121117"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p61091514101118"><a name="zh-cn_topic_0000001714829153_p61091514101118"></a><a name="zh-cn_topic_0000001714829153_p61091514101118"></a>用户登录登出次数</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p7109814191111"><a name="zh-cn_topic_0000001714829153_p7109814191111"></a><a name="zh-cn_topic_0000001714829153_p7109814191111"></a>user_login_out</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1310931471119"><a name="zh-cn_topic_0000001714829153_p1310931471119"></a><a name="zh-cn_topic_0000001714829153_p1310931471119"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p4109121411113"><a name="zh-cn_topic_0000001714829153_p4109121411113"></a><a name="zh-cn_topic_0000001714829153_p4109121411113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1410991413118"><a name="zh-cn_topic_0000001714829153_p1410991413118"></a><a name="zh-cn_topic_0000001714829153_p1410991413118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p71098145118"><a name="zh-cn_topic_0000001714829153_p71098145118"></a><a name="zh-cn_topic_0000001714829153_p71098145118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1710901411114"><a name="zh-cn_topic_0000001714829153_p1710901411114"></a><a name="zh-cn_topic_0000001714829153_p1710901411114"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p610901412119"><a name="zh-cn_topic_0000001714829153_p610901412119"></a><a name="zh-cn_topic_0000001714829153_p610901412119"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row131091914161116"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p810931411111"><a name="zh-cn_topic_0000001714829153_p810931411111"></a><a name="zh-cn_topic_0000001714829153_p810931411111"></a>活跃Session率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p15109914181120"><a name="zh-cn_topic_0000001714829153_p15109914181120"></a><a name="zh-cn_topic_0000001714829153_p15109914181120"></a>active_session_rate</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1510915143117"><a name="zh-cn_topic_0000001714829153_p1510915143117"></a><a name="zh-cn_topic_0000001714829153_p1510915143117"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p710914140115"><a name="zh-cn_topic_0000001714829153_p710914140115"></a><a name="zh-cn_topic_0000001714829153_p710914140115"></a>&lt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p2010941421112"><a name="zh-cn_topic_0000001714829153_p2010941421112"></a><a name="zh-cn_topic_0000001714829153_p2010941421112"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1510920146113"><a name="zh-cn_topic_0000001714829153_p1510920146113"></a><a name="zh-cn_topic_0000001714829153_p1510920146113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1710951414116"><a name="zh-cn_topic_0000001714829153_p1710951414116"></a><a name="zh-cn_topic_0000001714829153_p1710951414116"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p121095142113"><a name="zh-cn_topic_0000001714829153_p121095142113"></a><a name="zh-cn_topic_0000001714829153_p121095142113"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row910931471120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p110931471112"><a name="zh-cn_topic_0000001714829153_p110931471112"></a><a name="zh-cn_topic_0000001714829153_p110931471112"></a>日志异常检查</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p2109714191114"><a name="zh-cn_topic_0000001714829153_p2109714191114"></a><a name="zh-cn_topic_0000001714829153_p2109714191114"></a>log_error_check</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p8109914161117"><a name="zh-cn_topic_0000001714829153_p8109914161117"></a><a name="zh-cn_topic_0000001714829153_p8109914161117"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p110991420113"><a name="zh-cn_topic_0000001714829153_p110991420113"></a><a name="zh-cn_topic_0000001714829153_p110991420113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p171099149115"><a name="zh-cn_topic_0000001714829153_p171099149115"></a><a name="zh-cn_topic_0000001714829153_p171099149115"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p91092148116"><a name="zh-cn_topic_0000001714829153_p91092148116"></a><a name="zh-cn_topic_0000001714829153_p91092148116"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5109201411112"><a name="zh-cn_topic_0000001714829153_p5109201411112"></a><a name="zh-cn_topic_0000001714829153_p5109201411112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1510914145113"><a name="zh-cn_topic_0000001714829153_p1510914145113"></a><a name="zh-cn_topic_0000001714829153_p1510914145113"></a>存在则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row01096143110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p17109614121110"><a name="zh-cn_topic_0000001714829153_p17109614121110"></a><a name="zh-cn_topic_0000001714829153_p17109614121110"></a>线程池占用率</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p2109141420113"><a name="zh-cn_topic_0000001714829153_p2109141420113"></a><a name="zh-cn_topic_0000001714829153_p2109141420113"></a>thread_pool</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p810916144112"><a name="zh-cn_topic_0000001714829153_p810916144112"></a><a name="zh-cn_topic_0000001714829153_p810916144112"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15109514121116"><a name="zh-cn_topic_0000001714829153_p15109514121116"></a><a name="zh-cn_topic_0000001714829153_p15109514121116"></a>&gt;0.9</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1910971401120"><a name="zh-cn_topic_0000001714829153_p1910971401120"></a><a name="zh-cn_topic_0000001714829153_p1910971401120"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p81091914201115"><a name="zh-cn_topic_0000001714829153_p81091914201115"></a><a name="zh-cn_topic_0000001714829153_p81091914201115"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p101101314121115"><a name="zh-cn_topic_0000001714829153_p101101314121115"></a><a name="zh-cn_topic_0000001714829153_p101101314121115"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1711041413111"><a name="zh-cn_topic_0000001714829153_p1711041413111"></a><a name="zh-cn_topic_0000001714829153_p1711041413111"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row11110161410111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p12110161491115"><a name="zh-cn_topic_0000001714829153_p12110161491115"></a><a name="zh-cn_topic_0000001714829153_p12110161491115"></a>数据库时延</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p311014145119"><a name="zh-cn_topic_0000001714829153_p311014145119"></a><a name="zh-cn_topic_0000001714829153_p311014145119"></a>db_latency</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p3110191461118"><a name="zh-cn_topic_0000001714829153_p3110191461118"></a><a name="zh-cn_topic_0000001714829153_p3110191461118"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911020148115"><a name="zh-cn_topic_0000001714829153_p1911020148115"></a><a name="zh-cn_topic_0000001714829153_p1911020148115"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1711014141115"><a name="zh-cn_topic_0000001714829153_p1711014141115"></a><a name="zh-cn_topic_0000001714829153_p1711014141115"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p91101114151111"><a name="zh-cn_topic_0000001714829153_p91101114151111"></a><a name="zh-cn_topic_0000001714829153_p91101114151111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p18110121481119"><a name="zh-cn_topic_0000001714829153_p18110121481119"></a><a name="zh-cn_topic_0000001714829153_p18110121481119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p1111081412110"><a name="zh-cn_topic_0000001714829153_p1111081412110"></a><a name="zh-cn_topic_0000001714829153_p1111081412110"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row2110111414117"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p11104145117"><a name="zh-cn_topic_0000001714829153_p11104145117"></a><a name="zh-cn_topic_0000001714829153_p11104145117"></a>数据库事务</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p111041411118"><a name="zh-cn_topic_0000001714829153_p111041411118"></a><a name="zh-cn_topic_0000001714829153_p111041411118"></a>db_transaction</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p19110614171116"><a name="zh-cn_topic_0000001714829153_p19110614171116"></a><a name="zh-cn_topic_0000001714829153_p19110614171116"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p2110514171113"><a name="zh-cn_topic_0000001714829153_p2110514171113"></a><a name="zh-cn_topic_0000001714829153_p2110514171113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p211031471113"><a name="zh-cn_topic_0000001714829153_p211031471113"></a><a name="zh-cn_topic_0000001714829153_p211031471113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p15110414161120"><a name="zh-cn_topic_0000001714829153_p15110414161120"></a><a name="zh-cn_topic_0000001714829153_p15110414161120"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p19110141417119"><a name="zh-cn_topic_0000001714829153_p19110141417119"></a><a name="zh-cn_topic_0000001714829153_p19110141417119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p211031419112"><a name="zh-cn_topic_0000001714829153_p211031419112"></a><a name="zh-cn_topic_0000001714829153_p211031419112"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row5110141471110"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p7110111420112"><a name="zh-cn_topic_0000001714829153_p7110111420112"></a><a name="zh-cn_topic_0000001714829153_p7110111420112"></a>数据库临时文件大小</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1911061461112"><a name="zh-cn_topic_0000001714829153_p1911061461112"></a><a name="zh-cn_topic_0000001714829153_p1911061461112"></a>db_tmp_file</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p311051415112"><a name="zh-cn_topic_0000001714829153_p311051415112"></a><a name="zh-cn_topic_0000001714829153_p311051415112"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p51104142112"><a name="zh-cn_topic_0000001714829153_p51104142112"></a><a name="zh-cn_topic_0000001714829153_p51104142112"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5110201401119"><a name="zh-cn_topic_0000001714829153_p5110201401119"></a><a name="zh-cn_topic_0000001714829153_p5110201401119"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1711091411112"><a name="zh-cn_topic_0000001714829153_p1711091411112"></a><a name="zh-cn_topic_0000001714829153_p1711091411112"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3110181413114"><a name="zh-cn_topic_0000001714829153_p3110181413114"></a><a name="zh-cn_topic_0000001714829153_p3110181413114"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p0110114141111"><a name="zh-cn_topic_0000001714829153_p0110114141111"></a><a name="zh-cn_topic_0000001714829153_p0110114141111"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row14110214191120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p151101114191118"><a name="zh-cn_topic_0000001714829153_p151101114191118"></a><a name="zh-cn_topic_0000001714829153_p151101114191118"></a>数据库执行语句</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1511051418116"><a name="zh-cn_topic_0000001714829153_p1511051418116"></a><a name="zh-cn_topic_0000001714829153_p1511051418116"></a>db_exec_statement</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p15110131451119"><a name="zh-cn_topic_0000001714829153_p15110131451119"></a><a name="zh-cn_topic_0000001714829153_p15110131451119"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p141109149117"><a name="zh-cn_topic_0000001714829153_p141109149117"></a><a name="zh-cn_topic_0000001714829153_p141109149117"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3111151431111"><a name="zh-cn_topic_0000001714829153_p3111151431111"></a><a name="zh-cn_topic_0000001714829153_p3111151431111"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1111414101119"><a name="zh-cn_topic_0000001714829153_p1111414101119"></a><a name="zh-cn_topic_0000001714829153_p1111414101119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p16111914141116"><a name="zh-cn_topic_0000001714829153_p16111914141116"></a><a name="zh-cn_topic_0000001714829153_p16111914141116"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p3111141414116"><a name="zh-cn_topic_0000001714829153_p3111141414116"></a><a name="zh-cn_topic_0000001714829153_p3111141414116"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row0111171461118"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p71111314151114"><a name="zh-cn_topic_0000001714829153_p71111314151114"></a><a name="zh-cn_topic_0000001714829153_p71111314151114"></a>数据库死锁</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p161111814191119"><a name="zh-cn_topic_0000001714829153_p161111814191119"></a><a name="zh-cn_topic_0000001714829153_p161111814191119"></a>db_deadlock</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1911161411119"><a name="zh-cn_topic_0000001714829153_p1911161411119"></a><a name="zh-cn_topic_0000001714829153_p1911161411119"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1211110146112"><a name="zh-cn_topic_0000001714829153_p1211110146112"></a><a name="zh-cn_topic_0000001714829153_p1211110146112"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p211171421119"><a name="zh-cn_topic_0000001714829153_p211171421119"></a><a name="zh-cn_topic_0000001714829153_p211171421119"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p18111131416116"><a name="zh-cn_topic_0000001714829153_p18111131416116"></a><a name="zh-cn_topic_0000001714829153_p18111131416116"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13111191431120"><a name="zh-cn_topic_0000001714829153_p13111191431120"></a><a name="zh-cn_topic_0000001714829153_p13111191431120"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p16111121412112"><a name="zh-cn_topic_0000001714829153_p16111121412112"></a><a name="zh-cn_topic_0000001714829153_p16111121412112"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row131115143117"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p101111714151115"><a name="zh-cn_topic_0000001714829153_p101111714151115"></a><a name="zh-cn_topic_0000001714829153_p101111714151115"></a>数据库TPS性能</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1811131420114"><a name="zh-cn_topic_0000001714829153_p1811131420114"></a><a name="zh-cn_topic_0000001714829153_p1811131420114"></a>db_tps</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1511121451112"><a name="zh-cn_topic_0000001714829153_p1511121451112"></a><a name="zh-cn_topic_0000001714829153_p1511121451112"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911118144113"><a name="zh-cn_topic_0000001714829153_p1911118144113"></a><a name="zh-cn_topic_0000001714829153_p1911118144113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p611112148118"><a name="zh-cn_topic_0000001714829153_p611112148118"></a><a name="zh-cn_topic_0000001714829153_p611112148118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p141111414131111"><a name="zh-cn_topic_0000001714829153_p141111414131111"></a><a name="zh-cn_topic_0000001714829153_p141111414131111"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1811191481113"><a name="zh-cn_topic_0000001714829153_p1811191481113"></a><a name="zh-cn_topic_0000001714829153_p1811191481113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p121111114171111"><a name="zh-cn_topic_0000001714829153_p121111114171111"></a><a name="zh-cn_topic_0000001714829153_p121111114171111"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1411141415115"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p011110148116"><a name="zh-cn_topic_0000001714829153_p011110148116"></a><a name="zh-cn_topic_0000001714829153_p011110148116"></a>数据库Top Query</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p61111214161115"><a name="zh-cn_topic_0000001714829153_p61111214161115"></a><a name="zh-cn_topic_0000001714829153_p61111214161115"></a>db_top_query</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p14111101401119"><a name="zh-cn_topic_0000001714829153_p14111101401119"></a><a name="zh-cn_topic_0000001714829153_p14111101401119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p811118144119"><a name="zh-cn_topic_0000001714829153_p811118144119"></a><a name="zh-cn_topic_0000001714829153_p811118144119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1111113142115"><a name="zh-cn_topic_0000001714829153_p1111113142115"></a><a name="zh-cn_topic_0000001714829153_p1111113142115"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p151111614161111"><a name="zh-cn_topic_0000001714829153_p151111614161111"></a><a name="zh-cn_topic_0000001714829153_p151111614161111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p121116145118"><a name="zh-cn_topic_0000001714829153_p121116145118"></a><a name="zh-cn_topic_0000001714829153_p121116145118"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p411171415113"><a name="zh-cn_topic_0000001714829153_p411171415113"></a><a name="zh-cn_topic_0000001714829153_p411171415113"></a>暂无告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row161111114191120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p91111214141110"><a name="zh-cn_topic_0000001714829153_p91111214141110"></a><a name="zh-cn_topic_0000001714829153_p91111214141110"></a>长事务</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p101118149111"><a name="zh-cn_topic_0000001714829153_p101118149111"></a><a name="zh-cn_topic_0000001714829153_p101118149111"></a>long_transaction</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p8111151420114"><a name="zh-cn_topic_0000001714829153_p8111151420114"></a><a name="zh-cn_topic_0000001714829153_p8111151420114"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p611181412112"><a name="zh-cn_topic_0000001714829153_p611181412112"></a><a name="zh-cn_topic_0000001714829153_p611181412112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13112414181120"><a name="zh-cn_topic_0000001714829153_p13112414181120"></a><a name="zh-cn_topic_0000001714829153_p13112414181120"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p21125143119"><a name="zh-cn_topic_0000001714829153_p21125143119"></a><a name="zh-cn_topic_0000001714829153_p21125143119"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p61123143112"><a name="zh-cn_topic_0000001714829153_p61123143112"></a><a name="zh-cn_topic_0000001714829153_p61123143112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p191127147111"><a name="zh-cn_topic_0000001714829153_p191127147111"></a><a name="zh-cn_topic_0000001714829153_p191127147111"></a>存在则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row1511291411113"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p1911291413116"><a name="zh-cn_topic_0000001714829153_p1911291413116"></a><a name="zh-cn_topic_0000001714829153_p1911291413116"></a>oldestXmin长时间未推进</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1411219146115"><a name="zh-cn_topic_0000001714829153_p1411219146115"></a><a name="zh-cn_topic_0000001714829153_p1411219146115"></a>xmin_stuck</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p11121414131114"><a name="zh-cn_topic_0000001714829153_p11121414131114"></a><a name="zh-cn_topic_0000001714829153_p11121414131114"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911271410112"><a name="zh-cn_topic_0000001714829153_p1911271410112"></a><a name="zh-cn_topic_0000001714829153_p1911271410112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p811281491113"><a name="zh-cn_topic_0000001714829153_p811281491113"></a><a name="zh-cn_topic_0000001714829153_p811281491113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p611271410116"><a name="zh-cn_topic_0000001714829153_p611271410116"></a><a name="zh-cn_topic_0000001714829153_p611271410116"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p011217144111"><a name="zh-cn_topic_0000001714829153_p011217144111"></a><a name="zh-cn_topic_0000001714829153_p011217144111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p16112111412117"><a name="zh-cn_topic_0000001714829153_p16112111412117"></a><a name="zh-cn_topic_0000001714829153_p16112111412117"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row171121914111120"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p181121514121116"><a name="zh-cn_topic_0000001714829153_p181121514121116"></a><a name="zh-cn_topic_0000001714829153_p181121514121116"></a>Xlog堆积</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p101126147116"><a name="zh-cn_topic_0000001714829153_p101126147116"></a><a name="zh-cn_topic_0000001714829153_p101126147116"></a>xlog_accumulate</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p111291431114"><a name="zh-cn_topic_0000001714829153_p111291431114"></a><a name="zh-cn_topic_0000001714829153_p111291431114"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1411214147111"><a name="zh-cn_topic_0000001714829153_p1411214147111"></a><a name="zh-cn_topic_0000001714829153_p1411214147111"></a>&gt;3000</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p61121014161114"><a name="zh-cn_topic_0000001714829153_p61121014161114"></a><a name="zh-cn_topic_0000001714829153_p61121014161114"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5112161491119"><a name="zh-cn_topic_0000001714829153_p5112161491119"></a><a name="zh-cn_topic_0000001714829153_p5112161491119"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5112171416111"><a name="zh-cn_topic_0000001714829153_p5112171416111"></a><a name="zh-cn_topic_0000001714829153_p5112171416111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p10112161421112"><a name="zh-cn_topic_0000001714829153_p10112161421112"></a><a name="zh-cn_topic_0000001714829153_p10112161421112"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row511291431111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p5112714151113"><a name="zh-cn_topic_0000001714829153_p5112714151113"></a><a name="zh-cn_topic_0000001714829153_p5112714151113"></a>Core dump</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p12112914171112"><a name="zh-cn_topic_0000001714829153_p12112914171112"></a><a name="zh-cn_topic_0000001714829153_p12112914171112"></a>core_dump</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1211241418112"><a name="zh-cn_topic_0000001714829153_p1211241418112"></a><a name="zh-cn_topic_0000001714829153_p1211241418112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1211212144115"><a name="zh-cn_topic_0000001714829153_p1211212144115"></a><a name="zh-cn_topic_0000001714829153_p1211212144115"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p71121414111113"><a name="zh-cn_topic_0000001714829153_p71121414111113"></a><a name="zh-cn_topic_0000001714829153_p71121414111113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p4112101417118"><a name="zh-cn_topic_0000001714829153_p4112101417118"></a><a name="zh-cn_topic_0000001714829153_p4112101417118"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p17112131451113"><a name="zh-cn_topic_0000001714829153_p17112131451113"></a><a name="zh-cn_topic_0000001714829153_p17112131451113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p8112191410118"><a name="zh-cn_topic_0000001714829153_p8112191410118"></a><a name="zh-cn_topic_0000001714829153_p8112191410118"></a>存在则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row0112101441113"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p141122014151110"><a name="zh-cn_topic_0000001714829153_p141122014151110"></a><a name="zh-cn_topic_0000001714829153_p141122014151110"></a>动态内存</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p12112191461113"><a name="zh-cn_topic_0000001714829153_p12112191461113"></a><a name="zh-cn_topic_0000001714829153_p12112191461113"></a>dynamic_memory</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p711219146119"><a name="zh-cn_topic_0000001714829153_p711219146119"></a><a name="zh-cn_topic_0000001714829153_p711219146119"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p41121614121110"><a name="zh-cn_topic_0000001714829153_p41121614121110"></a><a name="zh-cn_topic_0000001714829153_p41121614121110"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p211331451115"><a name="zh-cn_topic_0000001714829153_p211331451115"></a><a name="zh-cn_topic_0000001714829153_p211331451115"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p3113171461111"><a name="zh-cn_topic_0000001714829153_p3113171461111"></a><a name="zh-cn_topic_0000001714829153_p3113171461111"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p5113131421120"><a name="zh-cn_topic_0000001714829153_p5113131421120"></a><a name="zh-cn_topic_0000001714829153_p5113131421120"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p3113121461113"><a name="zh-cn_topic_0000001714829153_p3113121461113"></a><a name="zh-cn_topic_0000001714829153_p3113121461113"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row19113514141119"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p5113191481113"><a name="zh-cn_topic_0000001714829153_p5113191481113"></a><a name="zh-cn_topic_0000001714829153_p5113191481113"></a>程序内存</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p1411311148117"><a name="zh-cn_topic_0000001714829153_p1411311148117"></a><a name="zh-cn_topic_0000001714829153_p1411311148117"></a>process_memory</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p611371441118"><a name="zh-cn_topic_0000001714829153_p611371441118"></a><a name="zh-cn_topic_0000001714829153_p611371441118"></a>[0, 1]</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p311311145111"><a name="zh-cn_topic_0000001714829153_p311311145111"></a><a name="zh-cn_topic_0000001714829153_p311311145111"></a>&gt;0.8</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p8113101461119"><a name="zh-cn_topic_0000001714829153_p8113101461119"></a><a name="zh-cn_topic_0000001714829153_p8113101461119"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p91132014151110"><a name="zh-cn_topic_0000001714829153_p91132014151110"></a><a name="zh-cn_topic_0000001714829153_p91132014151110"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1911361413111"><a name="zh-cn_topic_0000001714829153_p1911361413111"></a><a name="zh-cn_topic_0000001714829153_p1911361413111"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p2113141471112"><a name="zh-cn_topic_0000001714829153_p2113141471112"></a><a name="zh-cn_topic_0000001714829153_p2113141471112"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row911318146111"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p11113914201120"><a name="zh-cn_topic_0000001714829153_p11113914201120"></a><a name="zh-cn_topic_0000001714829153_p11113914201120"></a>其他内存</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p161131514161112"><a name="zh-cn_topic_0000001714829153_p161131514161112"></a><a name="zh-cn_topic_0000001714829153_p161131514161112"></a>other_memory</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p1111316144112"><a name="zh-cn_topic_0000001714829153_p1111316144112"></a><a name="zh-cn_topic_0000001714829153_p1111316144112"></a>[0, ∞)</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p1711311413112"><a name="zh-cn_topic_0000001714829153_p1711311413112"></a><a name="zh-cn_topic_0000001714829153_p1711311413112"></a>&gt;20*1024</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p131131214101120"><a name="zh-cn_topic_0000001714829153_p131131214101120"></a><a name="zh-cn_topic_0000001714829153_p131131214101120"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p11113101491112"><a name="zh-cn_topic_0000001714829153_p11113101491112"></a><a name="zh-cn_topic_0000001714829153_p11113101491112"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p13113114161112"><a name="zh-cn_topic_0000001714829153_p13113114161112"></a><a name="zh-cn_topic_0000001714829153_p13113114161112"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p611313141115"><a name="zh-cn_topic_0000001714829153_p611313141115"></a><a name="zh-cn_topic_0000001714829153_p611313141115"></a>任意异常出现则告警。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829153_row15113181491114"><td class="cellrowborder" valign="top" width="18.75812418758124%"><p id="zh-cn_topic_0000001714829153_p18113181431115"><a name="zh-cn_topic_0000001714829153_p18113181431115"></a><a name="zh-cn_topic_0000001714829153_p18113181431115"></a>GUC参数</p>
</td>
<td class="cellrowborder" valign="top" width="17.82821717828217%"><p id="zh-cn_topic_0000001714829153_p19113161431113"><a name="zh-cn_topic_0000001714829153_p19113161431113"></a><a name="zh-cn_topic_0000001714829153_p19113161431113"></a>guc_params</p>
</td>
<td class="cellrowborder" valign="top" width="7.289271072892712%"><p id="zh-cn_topic_0000001714829153_p20113181416110"><a name="zh-cn_topic_0000001714829153_p20113181416110"></a><a name="zh-cn_topic_0000001714829153_p20113181416110"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p01131814111110"><a name="zh-cn_topic_0000001714829153_p01131814111110"></a><a name="zh-cn_topic_0000001714829153_p01131814111110"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p711341412115"><a name="zh-cn_topic_0000001714829153_p711341412115"></a><a name="zh-cn_topic_0000001714829153_p711341412115"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p711315149117"><a name="zh-cn_topic_0000001714829153_p711315149117"></a><a name="zh-cn_topic_0000001714829153_p711315149117"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="9.459054094590542%"><p id="zh-cn_topic_0000001714829153_p6113191419113"><a name="zh-cn_topic_0000001714829153_p6113191419113"></a><a name="zh-cn_topic_0000001714829153_p6113191419113"></a>×</p>
</td>
<td class="cellrowborder" valign="top" width="18.28817118288171%"><p id="zh-cn_topic_0000001714829153_p6113201414116"><a name="zh-cn_topic_0000001714829153_p6113201414116"></a><a name="zh-cn_topic_0000001714829153_p6113201414116"></a>warning中存在值则告警。</p>
</td>
</tr>
</tbody>
</table>

>[!NOTE]说明 
>
>- 持续上升和预测超过阈值两类告警涉及检测算法，会占用DBMind性能，配置时减少开启的数量，避免影响服务性能以及返回时间等。
>- 持续上升检测器除了判断数据本身持续上升以外，还需要时间范围内80%以上的数据超过阈值范围，才判断为持续上升告警。
>- 预测超过阈值（告警）需要设置预测的时间范围，以分钟为单位，设置范围\(0, 48 \* 60\]。建议设置的预测时间长度小于巡检数据的时间长度，或者通过自定义阈值调整预测的时间长度。
> 预测超过阈值（告警）会预测未来时间范围内的数值，判断数值是否存超过阈值。预测超过阈值对于巡检数据不进行判断，如果巡检数据已经超过阈值，仍会继续进行预测，判断未来是否会一直超过阈值，还是会在某个时间点回归正常范围。

## 使用指导<a id="useguide"></a>

### 通过巡检相关API实现功能调用<a name="zh-cn_topic_0000001714949077_section6883174114717"></a>

- <a name="zh-cn_topic_0000001714949077_li1189616251116"></a>智能巡检接口

    示例：

    ```
    curl -X 'POST' "http://127.0.0.1:8080/v1/api/app/real-time-inspection?inspection_type=real_time_check&start_time=1689210000000&end_time=1689296400000&instance=127.0.0.1:5432" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"system_resource": ["os_mem_usage"], "instance_status": [], "database_resource": [], "database_performance": [], "diagnosis_optimization": []}' -H "Authorization: bearer xxx"
    ```

    如果使用HTTPS协议，则查询示例：

    ```
    curl -X 'POST' "https://127.0.0.1:8080/v1/api/app/real-time-inspection?inspection_type=real_time_check&start_time=1689210000000&end_time=1689296400000&instance=127.0.0.1:5432" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"system_resource": ["os_mem_usage"], "instance_status": [], "database_resource": [], "database_performance": [], "diagnosis_optimization": []}' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    如果使用自定义阈值，查询示例：

    ```
    curl -X 'POST' "https://127.0.0.1:8080/v1/api/app/real-time-inspection?inspection_type=real_time_check&start_time=1689210000000&end_time=1689296400000&instance=127.0.0.1:5432" -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"system_resource": [{"os_mem_usage": {"increase": false, "threshold": [], "forecast": [1440, 0.0, 0.8]}}], "instance_status": [], "database_resource": [], "database_performance": [], "diagnosis_optimization": []}' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    返回结构示例如下：

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

- 展示巡检任务接口示例：

    ```
    curl -X 'GET' "http://127.0.0.1:8080/v1/api/app/real-time-inspection/list?instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx"
    ```

    如果使用HTTPS协议，则查询示例：

    ```
    curl -X 'GET' "https://127.0.0.1:8080/v1/api/app/real-time-inspection/list?instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    返回结构如下：

    ```
    {"data":{"header":["instance","start","end","id","state","cost_time","inspection_type"],"rows":[["127.0.0.1:5432",1689210000000,1689296400000,5,"success",0.033701,"real_time_check"]]},"success":true}
    ```

- 获取指定巡检任务的巡检结果接口示例：

    ```
    curl -X 'GET' "http://127.0.0.1:8080/v1/api/summary/real-time-inspection?spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx"
    ```

    如果使用HTTPS协议，则查询示例：

    ```
    curl -X 'GET' "https://127.0.0.1:8080/v1/api/summary/real-time-inspection?spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    返回结构与[智能巡检接口返回结构](#zh-cn_topic_0000001714949077_li1189616251116)一致。

- 删除指定的巡检任务接口示例：

    ```
    curl -X 'DELETE' "http://127.0.0.1:8080/v1/api/app/real-time-inspection? spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx"
    ```

    如果使用HTTPS协议，则删除示例：

    ```
    curl -X 'DELETE' "https://127.0.0.1:8080/v1/api/app/real-time-inspection? spec_id=5&instance=127.0.0.1:5432" -H 'accept: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
    ```

    返回结构如下：

    ```
    {"data":{"success":true},"success":true}
    ```

### 自定义阈值参数<a name="zh-cn_topic_0000001714949077_section3551124417460"></a>

- 自定义阈值传参方式，各告警类型对应的key如[表1](#zh-cn_topic_0000001714949077_table1895281092115)所示：

    **表 1**  告警类型以及对应的key

    <a name="zh-cn_topic_0000001714949077_table1895281092115"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0000001714949077_row169714104215"><th class="cellrowborder" valign="top" width="56.57%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0000001714949077_p6971710162118"><a name="zh-cn_topic_0000001714949077_p6971710162118"></a><a name="zh-cn_topic_0000001714949077_p6971710162118"></a>告警类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.43%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0000001714949077_p897141017217"><a name="zh-cn_topic_0000001714949077_p897141017217"></a><a name="zh-cn_topic_0000001714949077_p897141017217"></a>键</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0000001714949077_row2097121013215"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p597111015211"><a name="zh-cn_topic_0000001714949077_p597111015211"></a><a name="zh-cn_topic_0000001714949077_p597111015211"></a>持续上升</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p1597181072112"><a name="zh-cn_topic_0000001714949077_p1597181072112"></a><a name="zh-cn_topic_0000001714949077_p1597181072112"></a>increase</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row9971171042114"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p209711100216"><a name="zh-cn_topic_0000001714949077_p209711100216"></a><a name="zh-cn_topic_0000001714949077_p209711100216"></a>超过阈值</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p14971010132113"><a name="zh-cn_topic_0000001714949077_p14971010132113"></a><a name="zh-cn_topic_0000001714949077_p14971010132113"></a>threshold</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row12971181042114"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p1197116103215"><a name="zh-cn_topic_0000001714949077_p1197116103215"></a><a name="zh-cn_topic_0000001714949077_p1197116103215"></a>预测超过阈值</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p0971171092117"><a name="zh-cn_topic_0000001714949077_p0971171092117"></a><a name="zh-cn_topic_0000001714949077_p0971171092117"></a>forecast</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714949077_row39723105214"><td class="cellrowborder" valign="top" width="56.57%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0000001714949077_p119723108217"><a name="zh-cn_topic_0000001714949077_p119723108217"></a><a name="zh-cn_topic_0000001714949077_p119723108217"></a>文件类型有误</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.43%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0000001714949077_p697213106218"><a name="zh-cn_topic_0000001714949077_p697213106218"></a><a name="zh-cn_topic_0000001714949077_p697213106218"></a>ftype</p>
    </td>
    </tr>
    </tbody>
    </table>

    - 启用默认告警配置（505.1.0之前的版本）

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

    - 启用默认告警配置（505.1.0及之后版本）

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

    - 不启用告警

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

    - 启用自定义告警。如下所示，os\_mem\_usage启用持续上升告警、自定义设置阈值告警和预测阈值告警；os\_disk\_usage不启用持续上升告警、阈值告警、启用预测阈值告警。

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

- 部分巡检项不支持自定义配置阈值：组件异常、日志异常检查、数据库Top Query、长事务、oldestXmin长时间未推进、Core dump、GUC参数。
- 各个巡检项支持的阈值类型见[概述](#概述)中自定义阈值表格，前端传入不支持的告警类型会报错。
- 对于部分巡检项，存在子巡检项，如[表2](#zh-cn_topic_0000001714949077_table76804585243)所示：

    **表 2**  巡检项及子巡检项

    <a name="zh-cn_topic_0000001714949077_table76804585243"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0000001714949077_row4715658142420"><th class="cellrowborder" valign="top" width="45.45%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0000001714949077_p671515862413"><a name="zh-cn_topic_0000001714949077_p671515862413"></a><a name="zh-cn_topic_0000001714949077_p671515862413"></a>巡检项</p>
    </th>
    <th class="cellrowborder" valign="top" width="54.55%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0000001714949077_p571525862413"><a name="zh-cn_topic_0000001714949077_p571525862413"></a><a name="zh-cn_topic_0000001714949077_p571525862413"></a>子巡检项</p>
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

    当子巡检项的告警配置一致时，可以省略重复值，具体方式如下：

    - 重复设置os\_cpu\_usage阈值自定义

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

    - 简化设置os\_cpu\_usage阈值自定义

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

### 巡检项结果返回值示例<a name="zh-cn_topic_0000001714949077_section194441655195014"></a>

- 数据库实例

    以1主DN、2备DN为例，共3个节点：

    主DN：127.0.0.1:19996

    备DN：127.0.0.2:19996, 127.0.0.3:19996

- 返回结构类型
    - ①：以节点为key：\{"127.0.0.1": xxx, "127.0.0.2": xxx, "127.0.0.3": xxx\}
    - ②：以DN为key：\{"127.0.0.1:19996": xxx, "127.0.0.2:19996": xxx, "127.0.0.3:19996": xxx\}
    - ③：以DB为key：\{"db1": xxx, "db2": xxx, "db3": xxx\}
    - ④：返回list: \[\{xxx\}\]

巡检项对应的返回结构如[表3](#zh-cn_topic_0000001714949077_table13634114013376)所示。

**表 3**  巡检项返回结构

<a name="zh-cn_topic_0000001714949077_table13634114013376"></a>
<table><tbody><tr id="zh-cn_topic_0000001714949077_row1732440173715"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1732840133717"><a name="zh-cn_topic_0000001714949077_p1732840133717"></a><a name="zh-cn_topic_0000001714949077_p1732840133717"></a>巡检项</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1073284023716"><a name="zh-cn_topic_0000001714949077_p1073284023716"></a><a name="zh-cn_topic_0000001714949077_p1073284023716"></a>返回结构</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p173218408376"><a name="zh-cn_topic_0000001714949077_p173218408376"></a><a name="zh-cn_topic_0000001714949077_p173218408376"></a>备注</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row37321940143717"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p11732174019376"><a name="zh-cn_topic_0000001714949077_p11732174019376"></a><a name="zh-cn_topic_0000001714949077_p11732174019376"></a>os_cpu_usage</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p6732204014378"><a name="zh-cn_topic_0000001714949077_p6732204014378"></a><a name="zh-cn_topic_0000001714949077_p6732204014378"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p2732440153712"><a name="zh-cn_topic_0000001714949077_p2732440153712"></a><a name="zh-cn_topic_0000001714949077_p2732440153712"></a>两层结构，子巡检项：cpu_user、cpu_iowait。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row5732134014377"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p7732540193713"><a name="zh-cn_topic_0000001714949077_p7732540193713"></a><a name="zh-cn_topic_0000001714949077_p7732540193713"></a>os_disk_ioutils</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p67321407373"><a name="zh-cn_topic_0000001714949077_p67321407373"></a><a name="zh-cn_topic_0000001714949077_p67321407373"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1732940193713"><a name="zh-cn_topic_0000001714949077_p1732940193713"></a><a name="zh-cn_topic_0000001714949077_p1732940193713"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row177323401373"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p17732104033710"><a name="zh-cn_topic_0000001714949077_p17732104033710"></a><a name="zh-cn_topic_0000001714949077_p17732104033710"></a>os_disk_usage</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p6732114093710"><a name="zh-cn_topic_0000001714949077_p6732114093710"></a><a name="zh-cn_topic_0000001714949077_p6732114093710"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1073216408379"><a name="zh-cn_topic_0000001714949077_p1073216408379"></a><a name="zh-cn_topic_0000001714949077_p1073216408379"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1973294033720"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p573244033712"><a name="zh-cn_topic_0000001714949077_p573244033712"></a><a name="zh-cn_topic_0000001714949077_p573244033712"></a>os_mem_usage</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p973224063718"><a name="zh-cn_topic_0000001714949077_p973224063718"></a><a name="zh-cn_topic_0000001714949077_p973224063718"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p173214033714"><a name="zh-cn_topic_0000001714949077_p173214033714"></a><a name="zh-cn_topic_0000001714949077_p173214033714"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row16732144023720"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p19732164073719"><a name="zh-cn_topic_0000001714949077_p19732164073719"></a><a name="zh-cn_topic_0000001714949077_p19732164073719"></a>network_packet_loss</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1473274012371"><a name="zh-cn_topic_0000001714949077_p1473274012371"></a><a name="zh-cn_topic_0000001714949077_p1473274012371"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p14733840163712"><a name="zh-cn_topic_0000001714949077_p14733840163712"></a><a name="zh-cn_topic_0000001714949077_p14733840163712"></a>两层结构，展示节点到节点的网络状况。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row127337406379"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p873318408375"><a name="zh-cn_topic_0000001714949077_p873318408375"></a><a name="zh-cn_topic_0000001714949077_p873318408375"></a>component_error</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p2733184073718"><a name="zh-cn_topic_0000001714949077_p2733184073718"></a><a name="zh-cn_topic_0000001714949077_p2733184073718"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1773354018377"><a name="zh-cn_topic_0000001714949077_p1773354018377"></a><a name="zh-cn_topic_0000001714949077_p1773354018377"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row2733184013375"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p127331240163716"><a name="zh-cn_topic_0000001714949077_p127331240163716"></a><a name="zh-cn_topic_0000001714949077_p127331240163716"></a>data_directory</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1973384093715"><a name="zh-cn_topic_0000001714949077_p1973384093715"></a><a name="zh-cn_topic_0000001714949077_p1973384093715"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p473344015374"><a name="zh-cn_topic_0000001714949077_p473344015374"></a><a name="zh-cn_topic_0000001714949077_p473344015374"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row873394073714"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p157331640113715"><a name="zh-cn_topic_0000001714949077_p157331640113715"></a><a name="zh-cn_topic_0000001714949077_p157331640113715"></a>log_directory</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1173384013717"><a name="zh-cn_topic_0000001714949077_p1173384013717"></a><a name="zh-cn_topic_0000001714949077_p1173384013717"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p173354013376"><a name="zh-cn_topic_0000001714949077_p173354013376"></a><a name="zh-cn_topic_0000001714949077_p173354013376"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1073344023717"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p9733440193716"><a name="zh-cn_topic_0000001714949077_p9733440193716"></a><a name="zh-cn_topic_0000001714949077_p9733440193716"></a>db_size</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p167335407372"><a name="zh-cn_topic_0000001714949077_p167335407372"></a><a name="zh-cn_topic_0000001714949077_p167335407372"></a>③</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1273316406371"><a name="zh-cn_topic_0000001714949077_p1273316406371"></a><a name="zh-cn_topic_0000001714949077_p1273316406371"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row37331140193713"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p16733540163717"><a name="zh-cn_topic_0000001714949077_p16733540163717"></a><a name="zh-cn_topic_0000001714949077_p16733540163717"></a>buffer_hit_rate</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p117331540153712"><a name="zh-cn_topic_0000001714949077_p117331540153712"></a><a name="zh-cn_topic_0000001714949077_p117331540153712"></a>③</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p117331540143720"><a name="zh-cn_topic_0000001714949077_p117331540143720"></a><a name="zh-cn_topic_0000001714949077_p117331540143720"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row573344093718"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1873311403376"><a name="zh-cn_topic_0000001714949077_p1873311403376"></a><a name="zh-cn_topic_0000001714949077_p1873311403376"></a>user_login_out</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p873374003720"><a name="zh-cn_topic_0000001714949077_p873374003720"></a><a name="zh-cn_topic_0000001714949077_p873374003720"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p5734640193717"><a name="zh-cn_topic_0000001714949077_p5734640193717"></a><a name="zh-cn_topic_0000001714949077_p5734640193717"></a>两层结构，子巡检项：login、logout。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1173454093719"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p18734164018376"><a name="zh-cn_topic_0000001714949077_p18734164018376"></a><a name="zh-cn_topic_0000001714949077_p18734164018376"></a>active_session_rate</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p17342040113718"><a name="zh-cn_topic_0000001714949077_p17342040113718"></a><a name="zh-cn_topic_0000001714949077_p17342040113718"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1673424014379"><a name="zh-cn_topic_0000001714949077_p1673424014379"></a><a name="zh-cn_topic_0000001714949077_p1673424014379"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1973494015374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p773464053710"><a name="zh-cn_topic_0000001714949077_p773464053710"></a><a name="zh-cn_topic_0000001714949077_p773464053710"></a>log_error_check</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p3734194043715"><a name="zh-cn_topic_0000001714949077_p3734194043715"></a><a name="zh-cn_topic_0000001714949077_p3734194043715"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p2734040133717"><a name="zh-cn_topic_0000001714949077_p2734040133717"></a><a name="zh-cn_topic_0000001714949077_p2734040133717"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row14734114063711"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1734194010374"><a name="zh-cn_topic_0000001714949077_p1734194010374"></a><a name="zh-cn_topic_0000001714949077_p1734194010374"></a>thread_pool</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1373464010371"><a name="zh-cn_topic_0000001714949077_p1373464010371"></a><a name="zh-cn_topic_0000001714949077_p1373464010371"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1734154017371"><a name="zh-cn_topic_0000001714949077_p1734154017371"></a><a name="zh-cn_topic_0000001714949077_p1734154017371"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row5734114020375"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p273424017377"><a name="zh-cn_topic_0000001714949077_p273424017377"></a><a name="zh-cn_topic_0000001714949077_p273424017377"></a>db_latency</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p7734124011375"><a name="zh-cn_topic_0000001714949077_p7734124011375"></a><a name="zh-cn_topic_0000001714949077_p7734124011375"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p273411408379"><a name="zh-cn_topic_0000001714949077_p273411408379"></a><a name="zh-cn_topic_0000001714949077_p273411408379"></a>两层结构，子巡检项：p80、p95。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row7734124083719"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p7734104083711"><a name="zh-cn_topic_0000001714949077_p7734104083711"></a><a name="zh-cn_topic_0000001714949077_p7734104083711"></a>db_transaction</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p4734144013375"><a name="zh-cn_topic_0000001714949077_p4734144013375"></a><a name="zh-cn_topic_0000001714949077_p4734144013375"></a>③</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p177341140103713"><a name="zh-cn_topic_0000001714949077_p177341140103713"></a><a name="zh-cn_topic_0000001714949077_p177341140103713"></a>两层结构，子巡检项：commit、rollback。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row3734154011374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p4734140143712"><a name="zh-cn_topic_0000001714949077_p4734140143712"></a><a name="zh-cn_topic_0000001714949077_p4734140143712"></a>db_tmp_file</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1734124023712"><a name="zh-cn_topic_0000001714949077_p1734124023712"></a><a name="zh-cn_topic_0000001714949077_p1734124023712"></a>③</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p973534010372"><a name="zh-cn_topic_0000001714949077_p973534010372"></a><a name="zh-cn_topic_0000001714949077_p973534010372"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1073519402374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p773514018377"><a name="zh-cn_topic_0000001714949077_p773514018377"></a><a name="zh-cn_topic_0000001714949077_p773514018377"></a>db_exec_statement</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p14735104019379"><a name="zh-cn_topic_0000001714949077_p14735104019379"></a><a name="zh-cn_topic_0000001714949077_p14735104019379"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p47355404376"><a name="zh-cn_topic_0000001714949077_p47355404376"></a><a name="zh-cn_topic_0000001714949077_p47355404376"></a>两层结构，子巡检项：select、update、insert、delete。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row17356407379"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p12735640133718"><a name="zh-cn_topic_0000001714949077_p12735640133718"></a><a name="zh-cn_topic_0000001714949077_p12735640133718"></a>db_deadlock</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p1573544063714"><a name="zh-cn_topic_0000001714949077_p1573544063714"></a><a name="zh-cn_topic_0000001714949077_p1573544063714"></a>③</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p5473928122017"><a name="zh-cn_topic_0000001714949077_p5473928122017"></a><a name="zh-cn_topic_0000001714949077_p5473928122017"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1773519402374"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p177351240173717"><a name="zh-cn_topic_0000001714949077_p177351240173717"></a><a name="zh-cn_topic_0000001714949077_p177351240173717"></a>db_tps</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p15735164083711"><a name="zh-cn_topic_0000001714949077_p15735164083711"></a><a name="zh-cn_topic_0000001714949077_p15735164083711"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p19735144023719"><a name="zh-cn_topic_0000001714949077_p19735144023719"></a><a name="zh-cn_topic_0000001714949077_p19735144023719"></a>两层结构，子巡检项：qps、tps。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row7735124020376"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p9735164073717"><a name="zh-cn_topic_0000001714949077_p9735164073717"></a><a name="zh-cn_topic_0000001714949077_p9735164073717"></a>db_top_query</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p11735340133712"><a name="zh-cn_topic_0000001714949077_p11735340133712"></a><a name="zh-cn_topic_0000001714949077_p11735340133712"></a>④</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p229813316202"><a name="zh-cn_topic_0000001714949077_p229813316202"></a><a name="zh-cn_topic_0000001714949077_p229813316202"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row57351640173710"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p4735840163711"><a name="zh-cn_topic_0000001714949077_p4735840163711"></a><a name="zh-cn_topic_0000001714949077_p4735840163711"></a>long_transaction</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p17735184016370"><a name="zh-cn_topic_0000001714949077_p17735184016370"></a><a name="zh-cn_topic_0000001714949077_p17735184016370"></a>④</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p17356405377"><a name="zh-cn_topic_0000001714949077_p17356405377"></a><a name="zh-cn_topic_0000001714949077_p17356405377"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row12735154014373"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p12735184013377"><a name="zh-cn_topic_0000001714949077_p12735184013377"></a><a name="zh-cn_topic_0000001714949077_p12735184013377"></a>xmin_stuck</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p15735104013718"><a name="zh-cn_topic_0000001714949077_p15735104013718"></a><a name="zh-cn_topic_0000001714949077_p15735104013718"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p8735340183711"><a name="zh-cn_topic_0000001714949077_p8735340183711"></a><a name="zh-cn_topic_0000001714949077_p8735340183711"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row10735204019371"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p13735104017374"><a name="zh-cn_topic_0000001714949077_p13735104017374"></a><a name="zh-cn_topic_0000001714949077_p13735104017374"></a>xlog_accumulate</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p157351940123711"><a name="zh-cn_topic_0000001714949077_p157351940123711"></a><a name="zh-cn_topic_0000001714949077_p157351940123711"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1073619408374"><a name="zh-cn_topic_0000001714949077_p1073619408374"></a><a name="zh-cn_topic_0000001714949077_p1073619408374"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1973613401379"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p117361640113717"><a name="zh-cn_topic_0000001714949077_p117361640113717"></a><a name="zh-cn_topic_0000001714949077_p117361640113717"></a>core_dump</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p107361340103711"><a name="zh-cn_topic_0000001714949077_p107361340103711"></a><a name="zh-cn_topic_0000001714949077_p107361340103711"></a>①</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p127369406376"><a name="zh-cn_topic_0000001714949077_p127369406376"></a><a name="zh-cn_topic_0000001714949077_p127369406376"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row12736124010372"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p17367406375"><a name="zh-cn_topic_0000001714949077_p17367406375"></a><a name="zh-cn_topic_0000001714949077_p17367406375"></a>dynamic_memory</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p15736184012373"><a name="zh-cn_topic_0000001714949077_p15736184012373"></a><a name="zh-cn_topic_0000001714949077_p15736184012373"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1973684053711"><a name="zh-cn_topic_0000001714949077_p1973684053711"></a><a name="zh-cn_topic_0000001714949077_p1973684053711"></a>两层结构，子巡检项：dynamic_used_memory、dynamic_used_shrctx。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1773624015378"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p67368401373"><a name="zh-cn_topic_0000001714949077_p67368401373"></a><a name="zh-cn_topic_0000001714949077_p67368401373"></a>process_memory</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p87361840113710"><a name="zh-cn_topic_0000001714949077_p87361840113710"></a><a name="zh-cn_topic_0000001714949077_p87361840113710"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p20736184016374"><a name="zh-cn_topic_0000001714949077_p20736184016374"></a><a name="zh-cn_topic_0000001714949077_p20736184016374"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row67361140153716"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p1173634017379"><a name="zh-cn_topic_0000001714949077_p1173634017379"></a><a name="zh-cn_topic_0000001714949077_p1173634017379"></a>other_memory</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p18736140133713"><a name="zh-cn_topic_0000001714949077_p18736140133713"></a><a name="zh-cn_topic_0000001714949077_p18736140133713"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p1273644011377"><a name="zh-cn_topic_0000001714949077_p1273644011377"></a><a name="zh-cn_topic_0000001714949077_p1273644011377"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714949077_row1573619401377"><td class="cellrowborder" valign="top" width="23.330000000000002%"><p id="zh-cn_topic_0000001714949077_p773694063714"><a name="zh-cn_topic_0000001714949077_p773694063714"></a><a name="zh-cn_topic_0000001714949077_p773694063714"></a>guc_params</p>
</td>
<td class="cellrowborder" valign="top" width="6.67%"><p id="zh-cn_topic_0000001714949077_p137368404375"><a name="zh-cn_topic_0000001714949077_p137368404375"></a><a name="zh-cn_topic_0000001714949077_p137368404375"></a>②</p>
</td>
<td class="cellrowborder" valign="top" width="70%"><p id="zh-cn_topic_0000001714949077_p127361140193713"><a name="zh-cn_topic_0000001714949077_p127361140193713"></a><a name="zh-cn_topic_0000001714949077_p127361140193713"></a>-</p>
</td>
</tr>
</tbody>
</table>

>[!NOTE]说明
>巡检结果会存储到DBMind元数据库中，DBMind会定期清除老数据以避免磁盘膨胀。

## 命令参考<a name="ZH-CN_TOPIC_0000002259861294"></a>

**表 1**  智能巡检接口

<a name="zh-cn_topic_0000001714948889_table743563511112"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948889_row1646943561117"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0000001714948889_p6469123518111"><a name="zh-cn_topic_0000001714948889_p6469123518111"></a><a name="zh-cn_topic_0000001714948889_p6469123518111"></a>API</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0000001714948889_p104696353119"><a name="zh-cn_topic_0000001714948889_p104696353119"></a><a name="zh-cn_topic_0000001714948889_p104696353119"></a>入参</p>
</th>
<th class="cellrowborder" valign="top" width="22%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0000001714948889_p1146915354115"><a name="zh-cn_topic_0000001714948889_p1146915354115"></a><a name="zh-cn_topic_0000001714948889_p1146915354115"></a>参数介绍</p>
</th>
<th class="cellrowborder" valign="top" width="12%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0000001714948889_p164699355112"><a name="zh-cn_topic_0000001714948889_p164699355112"></a><a name="zh-cn_topic_0000001714948889_p164699355112"></a>请求方法</p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0000001714948889_p1946933520113"><a name="zh-cn_topic_0000001714948889_p1946933520113"></a><a name="zh-cn_topic_0000001714948889_p1946933520113"></a>功能描述与预期返回结果</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948889_row1469193511111"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p5469123511113"><a name="zh-cn_topic_0000001714948889_p5469123511113"></a><a name="zh-cn_topic_0000001714948889_p5469123511113"></a>/v1/api/app/real-time-inspection</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p1469103510115"><a name="zh-cn_topic_0000001714948889_p1469103510115"></a><a name="zh-cn_topic_0000001714948889_p1469103510115"></a>inspection_type</p>
<p id="zh-cn_topic_0000001714948889_p10469173515116"><a name="zh-cn_topic_0000001714948889_p10469173515116"></a><a name="zh-cn_topic_0000001714948889_p10469173515116"></a>start_time</p>
<p id="zh-cn_topic_0000001714948889_p346903519110"><a name="zh-cn_topic_0000001714948889_p346903519110"></a><a name="zh-cn_topic_0000001714948889_p346903519110"></a>end_time</p>
<p id="zh-cn_topic_0000001714948889_p1492012392257"><a name="zh-cn_topic_0000001714948889_p1492012392257"></a><a name="zh-cn_topic_0000001714948889_p1492012392257"></a>tz</p>
<p id="zh-cn_topic_0000001714948889_p18469173513114"><a name="zh-cn_topic_0000001714948889_p18469173513114"></a><a name="zh-cn_topic_0000001714948889_p18469173513114"></a>instance</p>
<p id="zh-cn_topic_0000001714948889_p1246912351119"><a name="zh-cn_topic_0000001714948889_p1246912351119"></a><a name="zh-cn_topic_0000001714948889_p1246912351119"></a>inspection_items</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p447012353117"><a name="zh-cn_topic_0000001714948889_p447012353117"></a><a name="zh-cn_topic_0000001714948889_p447012353117"></a>巡检类型，String，必选。</p>
<p id="zh-cn_topic_0000001714948889_p147073541112"><a name="zh-cn_topic_0000001714948889_p147073541112"></a><a name="zh-cn_topic_0000001714948889_p147073541112"></a>起始时间，String，可选。</p>
<p id="zh-cn_topic_0000001714948889_p9470133501117"><a name="zh-cn_topic_0000001714948889_p9470133501117"></a><a name="zh-cn_topic_0000001714948889_p9470133501117"></a>终止时间，String，可选。</p>
<p id="zh-cn_topic_0000001714948889_p175712447259"><a name="zh-cn_topic_0000001714948889_p175712447259"></a><a name="zh-cn_topic_0000001714948889_p175712447259"></a>时区信息，String，可选。</p>
<p id="zh-cn_topic_0000001714948889_p1447023591115"><a name="zh-cn_topic_0000001714948889_p1447023591115"></a><a name="zh-cn_topic_0000001714948889_p1447023591115"></a>实例IP:PORT，String，必选。</p>
<p id="zh-cn_topic_0000001714948889_p44709350114"><a name="zh-cn_topic_0000001714948889_p44709350114"></a><a name="zh-cn_topic_0000001714948889_p44709350114"></a>巡检项，dict，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p4470153513118"><a name="zh-cn_topic_0000001714948889_p4470153513118"></a><a name="zh-cn_topic_0000001714948889_p4470153513118"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p17470103541114"><a name="zh-cn_topic_0000001714948889_p17470103541114"></a><a name="zh-cn_topic_0000001714948889_p17470103541114"></a>执行智能巡检功能并返回巡检结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948889_row84708354111"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p12470635171112"><a name="zh-cn_topic_0000001714948889_p12470635171112"></a><a name="zh-cn_topic_0000001714948889_p12470635171112"></a>/v1/api/app/real-time-inspection/list</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p84701635141115"><a name="zh-cn_topic_0000001714948889_p84701635141115"></a><a name="zh-cn_topic_0000001714948889_p84701635141115"></a>instance</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p16470103541118"><a name="zh-cn_topic_0000001714948889_p16470103541118"></a><a name="zh-cn_topic_0000001714948889_p16470103541118"></a>实例IP:PORT，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p1047093520111"><a name="zh-cn_topic_0000001714948889_p1047093520111"></a><a name="zh-cn_topic_0000001714948889_p1047093520111"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p194701535141117"><a name="zh-cn_topic_0000001714948889_p194701535141117"></a><a name="zh-cn_topic_0000001714948889_p194701535141117"></a>展示巡检任务的基础信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948889_row184700359116"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p17470535101113"><a name="zh-cn_topic_0000001714948889_p17470535101113"></a><a name="zh-cn_topic_0000001714948889_p17470535101113"></a>/v1/api/summary/real-time-inspection</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p194701935141112"><a name="zh-cn_topic_0000001714948889_p194701935141112"></a><a name="zh-cn_topic_0000001714948889_p194701935141112"></a>instance</p>
<p id="zh-cn_topic_0000001714948889_p8470113571115"><a name="zh-cn_topic_0000001714948889_p8470113571115"></a><a name="zh-cn_topic_0000001714948889_p8470113571115"></a>spec_id</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p2470183511112"><a name="zh-cn_topic_0000001714948889_p2470183511112"></a><a name="zh-cn_topic_0000001714948889_p2470183511112"></a>实例IP:PORT，String，必选。</p>
<p id="zh-cn_topic_0000001714948889_p5470123516116"><a name="zh-cn_topic_0000001714948889_p5470123516116"></a><a name="zh-cn_topic_0000001714948889_p5470123516116"></a>巡检任务ID，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p147003518110"><a name="zh-cn_topic_0000001714948889_p147003518110"></a><a name="zh-cn_topic_0000001714948889_p147003518110"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p15470535191115"><a name="zh-cn_topic_0000001714948889_p15470535191115"></a><a name="zh-cn_topic_0000001714948889_p15470535191115"></a>获取指定巡检任务的巡检结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948889_row8470103591112"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948889_p16470183531111"><a name="zh-cn_topic_0000001714948889_p16470183531111"></a><a name="zh-cn_topic_0000001714948889_p16470183531111"></a>/v1/api/app/real-time-inspection</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948889_p9470143561119"><a name="zh-cn_topic_0000001714948889_p9470143561119"></a><a name="zh-cn_topic_0000001714948889_p9470143561119"></a>instance</p>
<p id="zh-cn_topic_0000001714948889_p2470143513110"><a name="zh-cn_topic_0000001714948889_p2470143513110"></a><a name="zh-cn_topic_0000001714948889_p2470143513110"></a>spec_id</p>
</td>
<td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948889_p13470635111116"><a name="zh-cn_topic_0000001714948889_p13470635111116"></a><a name="zh-cn_topic_0000001714948889_p13470635111116"></a>实例IP:PORT，String，必选。</p>
<p id="zh-cn_topic_0000001714948889_p164702356110"><a name="zh-cn_topic_0000001714948889_p164702356110"></a><a name="zh-cn_topic_0000001714948889_p164702356110"></a>巡检任务ID，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948889_p11470183571113"><a name="zh-cn_topic_0000001714948889_p11470183571113"></a><a name="zh-cn_topic_0000001714948889_p11470183571113"></a>DELETE</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948889_p1047003511119"><a name="zh-cn_topic_0000001714948889_p1047003511119"></a><a name="zh-cn_topic_0000001714948889_p1047003511119"></a>删除指定的巡检任务。</p>
</td>
</tr>
</tbody>
</table>

## 常见问题处理<a name="ZH-CN_TOPIC_0000002259758192"></a>

- 月报与周报生成基于日报：如果未构建日报，则无法生成周报与月报；当日报数量不满足连续7天时，无法生成这7天对应的周报；当日报数量不满足连续14天以上时，无法生成对应的月报。此外，周报和月报的生成基于实例，比如出现实例IP和port的变化，会导致周报/月报无法生成；比如节点实例被删除，会导致周报/月报无法生成。采用定时方式生成周报和月报时，建议控制并发量，避免影响实时任务。配置文件中需要将实例的ip映射关系写到ip\_map中，否则无法保证巡检结果的实例为管理IP。
- 周报和月报仅支持所有巡检项的巡检，不支持部分巡检项的拼接；因此周报和月报的自定义阈值需要由前端传入，规则与实时巡检等一致，没有传入的巡检项默认不进行告警（除了部分由前端控制的巡检项，见[使用指导](#使用指导)）
- 调用巡检接口时需要传递实例，该实例需要为数据库实例主节点实例，否则在节点出现异常时无法返回所有节点的巡检结果。
- 智能巡检中db\_size、buffer\_hit\_rate、db\_tmp\_file、db\_deadlock、db\_transaction等巡检项仅展示主节点的数据库结果，如果出现主备切换等主节点切换的情况，可能出现结果跳变（不同节点的结果拼接）。
- 智能巡检中db\_size、buffer\_hit\_rate、db\_transaction、db\_tmp\_file、db\_deadlock等巡检项仅展示主节点的数据库结果；user\_login\_out、db\_latency、thread\_pool等巡检项展示所有节点的结果；xlog\_accumulate巡检项展示所有节点的结果。
- log\_error\_check和core\_dump两个巡检项防止遗漏关键信息，在实时巡检时仅支持45小时内数据；其他巡检项不能超过TSDB数据存储范围。
