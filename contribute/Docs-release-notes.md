# 文档更新说明
# openGauss 3.0.0

## 企业版

openGauss 3.0.0企业版更新说明如[表1](#table132015301813)所示。

**表 1**  openGauss 3.0.0企业版更新说明

<a name="table132015301813"></a>
<table><thead align="left"><tr id="row72011534184"><th class="cellrowborder" valign="top" width="16.75%" id="mcps1.2.3.1.1"><p id="p4201053191814"><a name="p4201053191814"></a><a name="p4201053191814"></a>文档</p>
</th>
<th class="cellrowborder" valign="top" width="83.25%" id="mcps1.2.3.1.2"><p id="p820125317185"><a name="p820125317185"></a><a name="p820125317185"></a>更新说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1521205315187"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p1795756172616"><a name="p1795756172616"></a><a name="p1795756172616"></a>发行说明</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p0382857144516"><a name="p0382857144516"></a><a name="p0382857144516"></a>【2022.3.31】</p>
<a name="ul38351910209"></a><a name="ul38351910209"></a><ul id="ul38351910209"><li>修改“版本介绍”章节，介绍3.0.0版本相关内容。</li><li>修改“特性介绍”章节，介绍3.0.0版本相关特性。</li><li>修改“已知问题”章节。</li><li>修改“源代码”章节，补充DCF、DCC、CM等代码仓信息。</li><li>修改“参与贡献”章节，删除IRC渠道。</li></ul>
</td>
</tr>
<tr id="row172135319183"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p192120532185"><a name="p192120532185"></a><a name="p192120532185"></a>产品描述</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p1621165312189"><a name="p1621165312189"></a><a name="p1621165312189"></a>【2022.3.31】</p>
<a name="ul67051645183414"></a><a name="ul67051645183414"></a><ul id="ul67051645183414"><li>修改“产品定位”章节。</li><li>修改“系统架构”章节。</li></ul>
</td>
</tr>
<tr id="row3984103018391"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p10984133015391"><a name="p10984133015391"></a><a name="p10984133015391"></a>技术白皮书</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p18842112012288"><a name="p18842112012288"></a><a name="p18842112012288"></a>【2022.3.31】</p>
<a name="ul1193811282281"></a><a name="ul1193811282281"></a><ul id="ul1193811282281"><li>“软件架构”章节更新软件架构图，新增CM模块。</li><li>“高可用”章节新增闪回恢复、DCF内容。</li></ul>
</td>
</tr>
<tr id="row9211853161817"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p3211253161813"><a name="p3211253161813"></a><a name="p3211253161813"></a>特性描述</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p128911427121511"><a name="p128911427121511"></a><a name="p128911427121511"></a>【2022.3.31】</p>
<a name="ul1951423315282"></a><a name="ul1951423315282"></a><ul id="ul1951423315282"><li>“高性能”章节新增行存转向量化。</li></ul>
<a name="ul20891182781510"></a><a name="ul20891182781510"></a><ul id="ul20891182781510"><li>“高可用”章节新增延迟进入最大可用模式、并行逻辑解码、DCF、CM、支持Global SysCache。</li><li>“AI能力”章节中的“数据库指标采集、预测与异常监控”、“慢SQL根因分析”、“DB4AI: 数据库驱动AI”新增3.0.0特性增强内容。</li><li>“企业级特性”章节新增发布订阅、外键锁增强、支持OLTP场景数据压缩；分区新增二级分区内容。</li><li>新增“工具链”、“高性能”章节。</li></ul>
</td>
</tr>
<tr id="row1515610456390"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p1215644533915"><a name="p1215644533915"></a>编译指导书</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p81493516299"><a name="p81493516299"></a><a name="p81493516299"></a>【2022.3.31】</p>
<a name="ul7149185182910"></a><a name="ul7149185182910"></a><ul id="ul7149185182910"><li>“编译前准备”章节中的“openGauss开源第三方软件编译前置软件要求”删除byacc，cmake版本修改为3.18。</li></ul>
<a name="ul1914910592910"></a><a name="ul1914910592910"></a><ul id="ul1914910592910"><li>“产品安装包编译</a>”章节修改编译和打包日志路径。</li><li>新增编译后验证和openGauss-OM编译章节。</li></ul>
</td>
</tr>
<tr id="row1258854173919"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p95875420399"><a name="p95875420399"></a><a name="p95875420399"></a>简易教程</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p1699814448349"><a name="p1699814448349"></a><a name="p1699814448349"></a>【2022.3.31】</p>
<p id="p136156319354"><a name="p136156319354"></a><a name="p136156319354"></a>第一次正式发布，替换上一版本的《openGauss快速入门》。</p>
</td>
</tr>
<tr id="row974212215407"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p57421129405"><a name="p57421129405"></a><a name="p57421129405"></a>安装指南</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p1350931045319"><a name="p1350931045319"></a><a name="p1350931045319"></a>【2022.3.31】</p>
<a name="ul1448616340588"></a><a name="ul1448616340588"></a><ul id="ul1448616340588"><li>准备软硬件安装环境章节中新增注意和关闭HISTORY记录。</li><li>修改操作系统配置章节中新增注意，需切换root用户进行。</li><li>使用一键式环境清理卸载openGauss时新增注销root用户步骤。</li></ul>
</td>
</tr>
<tr id="row2021125312186"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p921185341816"><a name="p921185341816"></a><a name="p921185341816"></a>管理员指南</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p221195312189"><a name="p221195312189"></a><a name="p221195312189"></a>【2022.3.31】</p>
<a name="ul6791155011588"></a><a name="ul6791155011588"></a><ul id="ul6791155011588"><li>闪回恢复新增前提条件。</li><li>备份恢复工具gs_dump、gs_dumpall和gs_restore中新增--no-publications、--no-subscriptions和--pipeline等参数。</li></ul>
</td>
</tr>
<tr id="row17211153181811"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p79211551192617"><a name="p79211551192617"></a><a name="p79211551192617"></a>开发者指南</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p172135310187"><a name="p172135310187"></a><a name="p172135310187"></a>【2022.3.31】</p>
<a name="ul42601128123320"></a><a name="ul42601128123320"></a><ul id="ul42601128123320"><li>“逻辑复制”新增“发布订阅”章节。</li><li>新增“PostGIS Extension”章节。</li><li>“Schema”新增“查看WDR报告”章节。</li><li>“AI特性”章节优化重写。</li><li>“GUC参数”新增“Global SysCache参数”章节。</li></ul>
</td>
</tr>
<tr id="row321353111811"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p15734191514408"><a name="p15734191514408"></a><a name="p15734191514408"></a>工具参考</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p7468539184813"><a name="p7468539184813"></a><a name="p7468539184813"></a>【2022.3.31】</p>
<a name="ul1143116451488"></a><a name="ul1143116451488"></a><ul id="ul1143116451488"><li>备份恢复工具gs_dump、gs_dumpall和gs_restore中新增--no-publications、--no-subscriptions和--pipeline等参数。</li><li>新增“统一数据库管理工具”章节描述CM工具。</li><li>新增“openGauss可运行脚本功能说明”章节说明openGauss常用可执行脚本。</li></ul>
</td>
</tr>
<tr id="row492065132614"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p14705310114012"><a name="p14705310114012"></a><a name="p14705310114012"></a>术语表</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p155771232143118"><a name="p155771232143118"></a><a name="p155771232143118"></a>【2022.3.31】</p>
<a name="ul61241443203114"></a><a name="ul61241443203114"></a><ul id="ul61241443203114"><li>新增术语subscription</li><li>新增术语publication</li></ul>
</td>
</tr>
</tbody>
</table>


## 轻量版

openGauss 3.0.0轻量版更新说明如[表1](#table132015301813)所示。

**表 1**  openGauss 3.0.0轻量版更新说明

<a name="table132015301813"></a>
<table><thead align="left"><tr id="row72011534184"><th class="cellrowborder" valign="top" width="16.75%" id="mcps1.2.3.1.1"><p id="p4201053191814"><a name="p4201053191814"></a><a name="p4201053191814"></a>文档</p>
</th>
<th class="cellrowborder" valign="top" width="83.25%" id="mcps1.2.3.1.2"><p id="p820125317185"><a name="p820125317185"></a><a name="p820125317185"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1521205315187"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p1795756172616"><a name="p1795756172616"></a><a name="p1795756172616"></a>发行说明</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p0382857144516"><a name="p0382857144516"></a><a name="p0382857144516"></a>【2022.3.31】</p>
<p id="p17890636175916"><a name="p17890636175916"></a><a name="p17890636175916"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row172135319183"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p192120532185"><a name="p192120532185"></a><a name="p192120532185"></a>产品描述</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p1342653017015"><a name="p1342653017015"></a><a name="p1342653017015"></a>【2022.3.31】</p>
<p id="p161211118019"><a name="p161211118019"></a><a name="p161211118019"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row3984103018391"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p10984133015391"><a name="p10984133015391"></a><a name="p10984133015391"></a>技术白皮书</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p1398418311701"><a name="p1398418311701"></a><a name="p1398418311701"></a>【2022.3.31】</p>
<p id="p135151241201"><a name="p135151241201"></a><a name="p135151241201"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row9211853161817"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p3211253161813"><a name="p3211253161813"></a><a name="p3211253161813"></a>特性描述</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p82645331900"><a name="p82645331900"></a><a name="p82645331900"></a>【2022.3.31】</p>
<p id="p12515342005"><a name="p12515342005"></a><a name="p12515342005"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row1515610456390"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p1215644533915"><a name="p1215644533915"></a><a name="p1215644533915"></a>编译指导书</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p656673412014"><a name="p656673412014"></a><a name="p656673412014"></a>【2022.3.31】</p>
<p id="p1647252018"><a name="p1647252018"></a><a name="p1647252018"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row1258854173919"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p95875420399"><a name="p95875420399"></a><a name="p95875420399"></a>简易教程</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p1822615365017"><a name="p1822615365017"></a><a name="p1822615365017"></a>【2022.3.31】</p>
<p id="p36476512014"><a name="p36476512014"></a><a name="p36476512014"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row974212215407"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p57421129405"><a name="p57421129405"></a><a name="p57421129405"></a>安装指南</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p2017613382015"><a name="p2017613382015"></a><a name="p2017613382015"></a>【2022.3.31】</p>
<p id="p16168372014"><a name="p16168372014"></a><a name="p16168372014"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row2021125312186"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p921185341816"><a name="p921185341816"></a><a name="p921185341816"></a>管理员指南</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p17124740701"><a name="p17124740701"></a><a name="p17124740701"></a>【2022.3.31】</p>
<p id="p1316815711014"><a name="p1316815711014"></a><a name="p1316815711014"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row17211153181811"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p79211551192617"><a name="p79211551192617"></a><a name="p79211551192617"></a>开发者指南</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p2024624112010"><a name="p2024624112010"></a><a name="p2024624112010"></a>【2022.3.31】</p>
<p id="p74782610016"><a name="p74782610016"></a><a name="p74782610016"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row321353111811"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p15734191514408"><a name="p15734191514408"></a><a name="p15734191514408"></a>工具参考</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p161814427013"><a name="p161814427013"></a><a name="p161814427013"></a>【2022.3.31】</p>
<p id="p108866719012"><a name="p108866719012"></a><a name="p108866719012"></a>第一次正式发布。</p>
</td>
</tr>
<tr id="row492065132614"><td class="cellrowborder" valign="top" width="16.75%" headers="mcps1.2.3.1.1 "><p id="p14705310114012"><a name="p14705310114012"></a><a name="p14705310114012"></a>术语表</p>
</td>
<td class="cellrowborder" valign="top" width="83.25%" headers="mcps1.2.3.1.2 "><p id="p107646430013"><a name="p107646430013"></a><a name="p107646430013"></a>【2022.3.31】</p>
<p id="p38869710019"><a name="p38869710019"></a><a name="p38869710019"></a>第一次正式发布。</p>
</td>
</tr>
</tbody>
</table>

