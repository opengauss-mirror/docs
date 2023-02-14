# STATEMENT\_COUNT

显示数据库当前节点当前时刻执行的五类语句（SELECT、INSERT、UPDATE、DELETE、MERGE INTO）和（DDL、DML、DCL）统计信息。

>![](public_sys-resources/icon-note.png) **说明：**
>普通用户查询STATEMENT\_COUNT视图仅能看到该用户当前节点的统计信息；管理员权限用户查询STATEMENT\_COUNT视图则能看到所有用户当前节点的统计信息。当openGauss或该节点重启时，计数将清零，并重新开始计数。计数以节点收到的查询数为准，openGauss内部进行的查询。例如，数据库主节点收到一条查询，若下发多条查询数据库节点，那将在数据库节点上进行相应次数的计数。

**表 1**  STATEMENT\_COUNT字段

<a name="zh-cn_topic_0237122656_table1994171295613"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122656_row12237912135617"><th class="cellrowborder" valign="top" width="27.67%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122656_p923751216563"><a name="zh-cn_topic_0237122656_p923751216563"></a><a name="zh-cn_topic_0237122656_p923751216563"></a><strong id="zh-cn_topic_0237122656_b3237191216569"><a name="zh-cn_topic_0237122656_b3237191216569"></a><a name="zh-cn_topic_0237122656_b3237191216569"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.9%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122656_p723718126565"><a name="zh-cn_topic_0237122656_p723718126565"></a><a name="zh-cn_topic_0237122656_p723718126565"></a><strong id="zh-cn_topic_0237122656_b5237712185619"><a name="zh-cn_topic_0237122656_b5237712185619"></a><a name="zh-cn_topic_0237122656_b5237712185619"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="54.43%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122656_p142372125566"><a name="zh-cn_topic_0237122656_p142372125566"></a><a name="zh-cn_topic_0237122656_p142372125566"></a><strong id="zh-cn_topic_0237122656_b1623721215561"><a name="zh-cn_topic_0237122656_b1623721215561"></a><a name="zh-cn_topic_0237122656_b1623721215561"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122656_row623751214563"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p11237181295616"><a name="zh-cn_topic_0237122656_p11237181295616"></a><a name="zh-cn_topic_0237122656_p11237181295616"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p1723771214566"><a name="zh-cn_topic_0237122656_p1723771214566"></a><a name="zh-cn_topic_0237122656_p1723771214566"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p162371512205615"><a name="zh-cn_topic_0237122656_p162371512205615"></a><a name="zh-cn_topic_0237122656_p162371512205615"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row7237912125616"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1923781217567"><a name="zh-cn_topic_0237122656_p1923781217567"></a><a name="zh-cn_topic_0237122656_p1923781217567"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p1623701215617"><a name="zh-cn_topic_0237122656_p1623701215617"></a><a name="zh-cn_topic_0237122656_p1623701215617"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p6237171215617"><a name="zh-cn_topic_0237122656_p6237171215617"></a><a name="zh-cn_topic_0237122656_p6237171215617"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row7237181255619"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p5237412125613"><a name="zh-cn_topic_0237122656_p5237412125613"></a><a name="zh-cn_topic_0237122656_p5237412125613"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p112371612135610"><a name="zh-cn_topic_0237122656_p112371612135610"></a><a name="zh-cn_topic_0237122656_p112371612135610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p1623713122561"><a name="zh-cn_topic_0237122656_p1623713122561"></a><a name="zh-cn_topic_0237122656_p1623713122561"></a>select语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row423714123565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p623711217564"><a name="zh-cn_topic_0237122656_p623711217564"></a><a name="zh-cn_topic_0237122656_p623711217564"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p5237111213560"><a name="zh-cn_topic_0237122656_p5237111213560"></a><a name="zh-cn_topic_0237122656_p5237111213560"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p1623891275610"><a name="zh-cn_topic_0237122656_p1623891275610"></a><a name="zh-cn_topic_0237122656_p1623891275610"></a>update语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row72381121569"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1723831211565"><a name="zh-cn_topic_0237122656_p1723831211565"></a><a name="zh-cn_topic_0237122656_p1723831211565"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p7238612105612"><a name="zh-cn_topic_0237122656_p7238612105612"></a><a name="zh-cn_topic_0237122656_p7238612105612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p13238201295615"><a name="zh-cn_topic_0237122656_p13238201295615"></a><a name="zh-cn_topic_0237122656_p13238201295615"></a>insert语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row16238412135617"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1238121235610"><a name="zh-cn_topic_0237122656_p1238121235610"></a><a name="zh-cn_topic_0237122656_p1238121235610"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p10238812135616"><a name="zh-cn_topic_0237122656_p10238812135616"></a><a name="zh-cn_topic_0237122656_p10238812135616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p42381412165617"><a name="zh-cn_topic_0237122656_p42381412165617"></a><a name="zh-cn_topic_0237122656_p42381412165617"></a>delete语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row2238111295610"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1823821255612"><a name="zh-cn_topic_0237122656_p1823821255612"></a><a name="zh-cn_topic_0237122656_p1823821255612"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p1623901235620"><a name="zh-cn_topic_0237122656_p1623901235620"></a><a name="zh-cn_topic_0237122656_p1623901235620"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p15239412195615"><a name="zh-cn_topic_0237122656_p15239412195615"></a><a name="zh-cn_topic_0237122656_p15239412195615"></a>merge into语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row3239131212562"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1623911127563"><a name="zh-cn_topic_0237122656_p1623911127563"></a><a name="zh-cn_topic_0237122656_p1623911127563"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p12391512195615"><a name="zh-cn_topic_0237122656_p12391512195615"></a><a name="zh-cn_topic_0237122656_p12391512195615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p2023913125566"><a name="zh-cn_topic_0237122656_p2023913125566"></a><a name="zh-cn_topic_0237122656_p2023913125566"></a>DDL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row142393122565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p2239112165617"><a name="zh-cn_topic_0237122656_p2239112165617"></a><a name="zh-cn_topic_0237122656_p2239112165617"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p1423921255616"><a name="zh-cn_topic_0237122656_p1423921255616"></a><a name="zh-cn_topic_0237122656_p1423921255616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p1923901219563"><a name="zh-cn_topic_0237122656_p1923901219563"></a><a name="zh-cn_topic_0237122656_p1923901219563"></a>DML语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row423991255613"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p14239101215568"><a name="zh-cn_topic_0237122656_p14239101215568"></a><a name="zh-cn_topic_0237122656_p14239101215568"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p123961210561"><a name="zh-cn_topic_0237122656_p123961210561"></a><a name="zh-cn_topic_0237122656_p123961210561"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p3239112185612"><a name="zh-cn_topic_0237122656_p3239112185612"></a><a name="zh-cn_topic_0237122656_p3239112185612"></a>DCL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row0239181225616"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p14239111211561"><a name="zh-cn_topic_0237122656_p14239111211561"></a><a name="zh-cn_topic_0237122656_p14239111211561"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p023961219565"><a name="zh-cn_topic_0237122656_p023961219565"></a><a name="zh-cn_topic_0237122656_p023961219565"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p623913126560"><a name="zh-cn_topic_0237122656_p623913126560"></a><a name="zh-cn_topic_0237122656_p623913126560"></a>总select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row13239111285612"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p10239171285611"><a name="zh-cn_topic_0237122656_p10239171285611"></a><a name="zh-cn_topic_0237122656_p10239171285611"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p9239112125613"><a name="zh-cn_topic_0237122656_p9239112125613"></a><a name="zh-cn_topic_0237122656_p9239112125613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p9239812195619"><a name="zh-cn_topic_0237122656_p9239812195619"></a><a name="zh-cn_topic_0237122656_p9239812195619"></a>平均select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row11239171212565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p723910124563"><a name="zh-cn_topic_0237122656_p723910124563"></a><a name="zh-cn_topic_0237122656_p723910124563"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p10239512145611"><a name="zh-cn_topic_0237122656_p10239512145611"></a><a name="zh-cn_topic_0237122656_p10239512145611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p19239212195612"><a name="zh-cn_topic_0237122656_p19239212195612"></a><a name="zh-cn_topic_0237122656_p19239212195612"></a>最大select的时间花费(单位：微秒)。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row62394127569"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p623918126568"><a name="zh-cn_topic_0237122656_p623918126568"></a><a name="zh-cn_topic_0237122656_p623918126568"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p42393123564"><a name="zh-cn_topic_0237122656_p42393123564"></a><a name="zh-cn_topic_0237122656_p42393123564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p424011220567"><a name="zh-cn_topic_0237122656_p424011220567"></a><a name="zh-cn_topic_0237122656_p424011220567"></a>最小select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row924019127561"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p22401912125619"><a name="zh-cn_topic_0237122656_p22401912125619"></a><a name="zh-cn_topic_0237122656_p22401912125619"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p112401412105619"><a name="zh-cn_topic_0237122656_p112401412105619"></a><a name="zh-cn_topic_0237122656_p112401412105619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p162406123562"><a name="zh-cn_topic_0237122656_p162406123562"></a><a name="zh-cn_topic_0237122656_p162406123562"></a>总update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row524031255614"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p8240712105611"><a name="zh-cn_topic_0237122656_p8240712105611"></a><a name="zh-cn_topic_0237122656_p8240712105611"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p11240412145614"><a name="zh-cn_topic_0237122656_p11240412145614"></a><a name="zh-cn_topic_0237122656_p11240412145614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p22401112185613"><a name="zh-cn_topic_0237122656_p22401112185613"></a><a name="zh-cn_topic_0237122656_p22401112185613"></a>平均update的时间花费(单位：微秒)。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row2024031275619"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p18240101217564"><a name="zh-cn_topic_0237122656_p18240101217564"></a><a name="zh-cn_topic_0237122656_p18240101217564"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p1024011215611"><a name="zh-cn_topic_0237122656_p1024011215611"></a><a name="zh-cn_topic_0237122656_p1024011215611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p13240161245612"><a name="zh-cn_topic_0237122656_p13240161245612"></a><a name="zh-cn_topic_0237122656_p13240161245612"></a>最大update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row19240101218568"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p16240512135612"><a name="zh-cn_topic_0237122656_p16240512135612"></a><a name="zh-cn_topic_0237122656_p16240512135612"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p62401122560"><a name="zh-cn_topic_0237122656_p62401122560"></a><a name="zh-cn_topic_0237122656_p62401122560"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p13240121212561"><a name="zh-cn_topic_0237122656_p13240121212561"></a><a name="zh-cn_topic_0237122656_p13240121212561"></a>最小update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row8240121219567"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p3240121285611"><a name="zh-cn_topic_0237122656_p3240121285611"></a><a name="zh-cn_topic_0237122656_p3240121285611"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p1124021295613"><a name="zh-cn_topic_0237122656_p1124021295613"></a><a name="zh-cn_topic_0237122656_p1124021295613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p47303468312"><a name="zh-cn_topic_0237122656_p47303468312"></a><a name="zh-cn_topic_0237122656_p47303468312"></a>总insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row924071215610"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1024021225617"><a name="zh-cn_topic_0237122656_p1024021225617"></a><a name="zh-cn_topic_0237122656_p1024021225617"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p92402012175619"><a name="zh-cn_topic_0237122656_p92402012175619"></a><a name="zh-cn_topic_0237122656_p92402012175619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p824001205617"><a name="zh-cn_topic_0237122656_p824001205617"></a><a name="zh-cn_topic_0237122656_p824001205617"></a>平均insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row7240161235617"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p15240181213568"><a name="zh-cn_topic_0237122656_p15240181213568"></a><a name="zh-cn_topic_0237122656_p15240181213568"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p02401812145620"><a name="zh-cn_topic_0237122656_p02401812145620"></a><a name="zh-cn_topic_0237122656_p02401812145620"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p224061219563"><a name="zh-cn_topic_0237122656_p224061219563"></a><a name="zh-cn_topic_0237122656_p224061219563"></a>最大insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row1524011216565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1624051285617"><a name="zh-cn_topic_0237122656_p1624051285617"></a><a name="zh-cn_topic_0237122656_p1624051285617"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p82411212105613"><a name="zh-cn_topic_0237122656_p82411212105613"></a><a name="zh-cn_topic_0237122656_p82411212105613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p224181265619"><a name="zh-cn_topic_0237122656_p224181265619"></a><a name="zh-cn_topic_0237122656_p224181265619"></a>最小insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row1824151215567"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p4241312185612"><a name="zh-cn_topic_0237122656_p4241312185612"></a><a name="zh-cn_topic_0237122656_p4241312185612"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p624141217562"><a name="zh-cn_topic_0237122656_p624141217562"></a><a name="zh-cn_topic_0237122656_p624141217562"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p324171217563"><a name="zh-cn_topic_0237122656_p324171217563"></a><a name="zh-cn_topic_0237122656_p324171217563"></a>总delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row19241012105613"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1624141245619"><a name="zh-cn_topic_0237122656_p1624141245619"></a><a name="zh-cn_topic_0237122656_p1624141245619"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p112411112115610"><a name="zh-cn_topic_0237122656_p112411112115610"></a><a name="zh-cn_topic_0237122656_p112411112115610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p22411121563"><a name="zh-cn_topic_0237122656_p22411121563"></a><a name="zh-cn_topic_0237122656_p22411121563"></a>平均delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row1224112126565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p12411312165616"><a name="zh-cn_topic_0237122656_p12411312165616"></a><a name="zh-cn_topic_0237122656_p12411312165616"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p8241191265614"><a name="zh-cn_topic_0237122656_p8241191265614"></a><a name="zh-cn_topic_0237122656_p8241191265614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p16241121225615"><a name="zh-cn_topic_0237122656_p16241121225615"></a><a name="zh-cn_topic_0237122656_p16241121225615"></a>最大delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122656_row1241141220565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122656_p1524171225616"><a name="zh-cn_topic_0237122656_p1524171225616"></a><a name="zh-cn_topic_0237122656_p1524171225616"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122656_p102411312185616"><a name="zh-cn_topic_0237122656_p102411312185616"></a><a name="zh-cn_topic_0237122656_p102411312185616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122656_p82411312145617"><a name="zh-cn_topic_0237122656_p82411312145617"></a><a name="zh-cn_topic_0237122656_p82411312145617"></a>最小delete的时间花费（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
