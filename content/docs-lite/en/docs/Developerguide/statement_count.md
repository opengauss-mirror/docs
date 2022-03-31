# STATEMENT\_COUNT<a name="EN-US_TOPIC_0289900883"></a>

**STATEMENT\_COUNT**  displays statistics about five types of running statements \(**SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**, and  **MERGE INTO**\) as well as DDL, DML, and DCL statements on the current node of the database.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>By querying the  **STATEMENT\_COUNT**  view, a common user can view statistics only about this user on the current node, whereas an administrator can view statistics about all users on the current node. When openGauss or the node is restarted, the statistics are cleared and the counting restarts. The system counts when a node receives a query, including a query inside openGauss. For example, when the primary database node receives a query and distributes multiple queries to other database nodes, the queries are counted accordingly on the database nodes.

**Table  1**  STATEMENT\_COUNT columns

<a name="en-us_topic_0283137166_en-us_topic_0237122656_table1994171295613"></a>
<table><thead align="left"><tr id="en-us_topic_0283137166_en-us_topic_0237122656_row12237912135617"><th class="cellrowborder" valign="top" width="27.67%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137166_en-us_topic_0237122656_p923751216563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p923751216563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p923751216563"></a><strong id="b1887212410348"><a name="b1887212410348"></a><a name="b1887212410348"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.9%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137166_en-us_topic_0237122656_p723718126565"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p723718126565"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p723718126565"></a><strong id="b27027421340"><a name="b27027421340"></a><a name="b27027421340"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="54.43%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137166_en-us_topic_0237122656_p142372125566"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p142372125566"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p142372125566"></a><strong id="b143771043133419"><a name="b143771043133419"></a><a name="b143771043133419"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137166_en-us_topic_0237122656_row623751214563"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p11237181295616"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p11237181295616"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p11237181295616"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1723771214566"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1723771214566"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1723771214566"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p162371512205615"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p162371512205615"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p162371512205615"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row7237912125616"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1923781217567"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1923781217567"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1923781217567"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1623701215617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623701215617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623701215617"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p6237171215617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p6237171215617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p6237171215617"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row7237181255619"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p5237412125613"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p5237412125613"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p5237412125613"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p112371612135610"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p112371612135610"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p112371612135610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1623713122561"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623713122561"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623713122561"></a>Statistical result of the <strong id="b13287346143412"><a name="b13287346143412"></a><a name="b13287346143412"></a>SELECT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row423714123565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p623711217564"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p623711217564"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p623711217564"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p5237111213560"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p5237111213560"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p5237111213560"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1623891275610"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623891275610"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623891275610"></a>Statistical result of the <strong id="b123041850173417"><a name="b123041850173417"></a><a name="b123041850173417"></a>UPDATE</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row72381121569"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1723831211565"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1723831211565"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1723831211565"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p7238612105612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p7238612105612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p7238612105612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p13238201295615"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p13238201295615"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p13238201295615"></a>Statistical result of the <strong id="b428645113344"><a name="b428645113344"></a><a name="b428645113344"></a>INSERT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row16238412135617"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1238121235610"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1238121235610"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1238121235610"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p10238812135616"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p10238812135616"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p10238812135616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p42381412165617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p42381412165617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p42381412165617"></a>Statistical result of the <strong id="b84185316341"><a name="b84185316341"></a><a name="b84185316341"></a>DELETE</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row2238111295610"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1823821255612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1823821255612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1823821255612"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1623901235620"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623901235620"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623901235620"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p15239412195615"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p15239412195615"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p15239412195615"></a>Statistical result of the <strong id="b13616545343"><a name="b13616545343"></a><a name="b13616545343"></a>MERGE INTO</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row3239131212562"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1623911127563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623911127563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1623911127563"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p12391512195615"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p12391512195615"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p12391512195615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p2023913125566"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p2023913125566"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p2023913125566"></a>Number of DDL statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row142393122565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p2239112165617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p2239112165617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p2239112165617"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1423921255616"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1423921255616"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1423921255616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1923901219563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1923901219563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1923901219563"></a>Number of DML statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row423991255613"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p14239101215568"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p14239101215568"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p14239101215568"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p123961210561"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p123961210561"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p123961210561"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p3239112185612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p3239112185612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p3239112185612"></a>Number of DCL statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row0239181225616"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p14239111211561"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p14239111211561"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p14239111211561"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p023961219565"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p023961219565"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p023961219565"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p623913126560"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p623913126560"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p623913126560"></a>Total response time of <strong id="b176774610355"><a name="b176774610355"></a><a name="b176774610355"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row13239111285612"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p10239171285611"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p10239171285611"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p10239171285611"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p9239112125613"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p9239112125613"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p9239112125613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p9239812195619"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p9239812195619"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p9239812195619"></a>Average response time of <strong id="b1820135193512"><a name="b1820135193512"></a><a name="b1820135193512"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row11239171212565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p723910124563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p723910124563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p723910124563"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p10239512145611"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p10239512145611"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p10239512145611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p19239212195612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p19239212195612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p19239212195612"></a>Maximum response time of <strong id="b8419631102510"><a name="b8419631102510"></a><a name="b8419631102510"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row62394127569"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p623918126568"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p623918126568"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p623918126568"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p42393123564"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p42393123564"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p42393123564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p424011220567"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p424011220567"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p424011220567"></a>Minimum response time of <strong id="b19865105553515"><a name="b19865105553515"></a><a name="b19865105553515"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row924019127561"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p22401912125619"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p22401912125619"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p22401912125619"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p112401412105619"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p112401412105619"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p112401412105619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p162406123562"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p162406123562"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p162406123562"></a>Total response time of <strong id="b467515582353"><a name="b467515582353"></a><a name="b467515582353"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row524031255614"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p8240712105611"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p8240712105611"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p8240712105611"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p11240412145614"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p11240412145614"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p11240412145614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p22401112185613"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p22401112185613"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p22401112185613"></a>Average response time of <strong id="b1034643632514"><a name="b1034643632514"></a><a name="b1034643632514"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row2024031275619"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p18240101217564"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p18240101217564"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p18240101217564"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1024011215611"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1024011215611"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1024011215611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p13240161245612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p13240161245612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p13240161245612"></a>Maximum response time of <strong id="b17625458363"><a name="b17625458363"></a><a name="b17625458363"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row19240101218568"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p16240512135612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p16240512135612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p16240512135612"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p62401122560"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p62401122560"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p62401122560"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p13240121212561"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p13240121212561"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p13240121212561"></a>Minimum response time of <strong id="b18368710367"><a name="b18368710367"></a><a name="b18368710367"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row8240121219567"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p3240121285611"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p3240121285611"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p3240121285611"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1124021295613"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1124021295613"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1124021295613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p47303468312"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p47303468312"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p47303468312"></a>Total response time of <strong id="b185191014369"><a name="b185191014369"></a><a name="b185191014369"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row924071215610"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1024021225617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1024021225617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1024021225617"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p92402012175619"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p92402012175619"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p92402012175619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p824001205617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p824001205617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p824001205617"></a>Average response time of <strong id="b1899351117364"><a name="b1899351117364"></a><a name="b1899351117364"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row7240161235617"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p15240181213568"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p15240181213568"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p15240181213568"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p02401812145620"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p02401812145620"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p02401812145620"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p224061219563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p224061219563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p224061219563"></a>Maximum response time of <strong id="b330121315367"><a name="b330121315367"></a><a name="b330121315367"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row1524011216565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1624051285617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1624051285617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1624051285617"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p82411212105613"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p82411212105613"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p82411212105613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p224181265619"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p224181265619"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p224181265619"></a>Minimum response time of <strong id="b172822014203612"><a name="b172822014203612"></a><a name="b172822014203612"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row1824151215567"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p4241312185612"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p4241312185612"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p4241312185612"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p624141217562"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p624141217562"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p624141217562"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p324171217563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p324171217563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p324171217563"></a>Total response time of <strong id="b199661953617"><a name="b199661953617"></a><a name="b199661953617"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row19241012105613"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1624141245619"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1624141245619"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1624141245619"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p112411112115610"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p112411112115610"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p112411112115610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p22411121563"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p22411121563"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p22411121563"></a>Average response time of <strong id="b1956142115367"><a name="b1956142115367"></a><a name="b1956142115367"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row1224112126565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p12411312165616"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p12411312165616"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p12411312165616"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p8241191265614"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p8241191265614"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p8241191265614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p16241121225615"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p16241121225615"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p16241121225615"></a>Maximum response time of <strong id="b1661062217366"><a name="b1661062217366"></a><a name="b1661062217366"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137166_en-us_topic_0237122656_row1241141220565"><td class="cellrowborder" valign="top" width="27.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p1524171225616"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1524171225616"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p1524171225616"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="17.9%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p102411312185616"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p102411312185616"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p102411312185616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137166_en-us_topic_0237122656_p82411312145617"><a name="en-us_topic_0283137166_en-us_topic_0237122656_p82411312145617"></a><a name="en-us_topic_0283137166_en-us_topic_0237122656_p82411312145617"></a>Minimum response time of <strong id="b206141244360"><a name="b206141244360"></a><a name="b206141244360"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

