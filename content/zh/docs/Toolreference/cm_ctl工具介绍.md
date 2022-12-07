# cm\_ctl工具介绍<a name="ZH-CN_TOPIC_0000001201327140"></a>

cm\_ctl是openGauss提供的用来控制数据库实例服务的工具。该工具主要供OM调用，及数据库实例服务自恢复时使用。cm\_ctl的主要功能有：

-   启动数据库实例服务、AZ的所有实例、单个主机上的所有实例或单独启动某个实例进程。
-   停止数据库实例服务、AZ的所有实例、单个主机上的所有实例或单独停止某个节点实例进程。
-   重启逻辑数据库实例服务。
-   查询数据库实例状态或者单个主机的状态。
-   切换主备实例或重置实例状态。
-   重建备机。
-   查看数据库实例配置文件。
-   设置日志级别，一主多备数据库实例部署下cm\_server的仲裁模式、AZ之间的切换模式。
-   获取日志级别，一主多备数据库实例部署下cm\_server的仲裁模式、AZ之间的切换模式。
-   检测实例进程状态。

与cm\_ctl工具相关的文件：

-   cluster\_manual\_start

    该文件是数据库实例启停标志文件。文件位于_$GAUSSHOME/bin_下。其中，GAUSSHOME为环境变量。启动数据库实例时，cm\_ctl会删除该文件；停止数据库实例时，cm\_ctl会生成该文件，并向文件写入停止模式。


-   instance\_manual\_start\_X（X是实例编号）

    该文件是单个实例启停标志文件。文件位于_$GAUSSHOME/bin_下。其中，GAUSSHOME为环境变量。启动实例时，cm\_ctl会删除该文件；停止实例时，cm\_ctl会生成该文件，并向文件写入停止模式。


cm\_ctl的相关约束：

-   在集群模式下，使用cm\_ctl集群工具来切换数据库角色，而不是gs\_ctl数据库工具。

## 命令说明<a name="zh-cn_topic_0116784021_s03ab48c805584dbda0f4d8f1a36833c2"></a>

cm\_ctl参数可分为如下几类：

-   option参数，详细请参见  [表 option参数](#zh-cn_topic_0116784021_table1718281376)。
-   公共参数，详细请参见  [表 公共参数](#zh-cn_topic_0116784021_t73f4b6dad11943ea811a211e6c127669)。
-   start模式的参数，详细参见  [表 start参数](#table45722029132319)。
-   switchover模式的参数，详细请参见  [表 switchover参数](#table12226155814102)。
-   build模式的参数，详细请参见  [表 build参数](#table649003761312)。
-   check模式的参数，详细请参见  [表 check参数](#zh-cn_topic_0116784021_t5582631c9b25449da85855fab919ddfd)。
-   stop模式的参数，详细请参见  [表 stop参数](#zh-cn_topic_0116784021_t7507cabe697c4b4da00814fccee8e559)。
-   query模式的参数，详细请参见  [表 query参数](#zh-cn_topic_0116784021_t19badc48929f4f9abd94b8ac774f06c1)。
-   view模式的参数，详细请参见  [表 view参数](#zh-cn_topic_0116784021_table207722104617)。
-   set模式的参数，详细请参见  [表 set参数](#zh-cn_topic_0116784021_tef5e0858a71c4d21abce8f80e3ba7723) [表 set cm参数](#table10437204416514)。
-   get模式的参数，详情请参见  [表 get参数](#table1599151916313)。
-   setrunmode模式的参数，详细请参见  [表 setrunmode参数](#table1656519521713)。
-   changerole模式的参数，详细请参见  [表 changerole参数](#table326418392182)。
-   changemember功能的参数，详细请参见  [表 changemember参数](#table27311655104911)。
-   reload模式的参数，详细请参见  [表 reload 参数](#table11377594818)。
-   list模式的参数，详细请参见  [表 list参数](#table0914920191018)。
-   encrypt模式的参数，详细请参见  [表 encrypt参数](#table4739105911382)。
-   ddb模式的参数，详细请参见  [表 ddb参数](#table9665145942617)。
-   switch模式的参数，详细请参见  [表 switch参数](#table7591811163812)。
-   res模式的参数，详细请参见  [表 res参数](#table11658339114119)。

使用方法:

```
cm_ctl start [-z AVAILABILITY_ZONE [--cm_arbitration_mode=ARBITRATION_MODE]] | [-n NODEID [-D DATADIR]] [-t SECS]
cm_ctl switchover [-z AVAILABILITY_ZONE] | [-n NODEID -D DATADIR [-f]] | [-a] | [-A] [-t SECS]
cm_ctl finishredo
cm_ctl build [-c] [-n NODEID] [-D DATADIR [-t SECS] [-f] [-b full] [-j NUM]]
cm_ctl check -B BINNAME -T DATAPATH
cm_ctl stop [[-z AVAILABILITY_ZONE] | [-n NODEID [-D DATADIR]]] [-t SECS] [-m SHUTDOWN-MODE]
cm_ctl query [-z ALL] [-l FILENAME] [-v [-C [-s] [-S] [-d] [-i] [-F] [-x] [-p]] | [-r]] [-t SECS] [--minorityAz=AZ_NAME]
cm_ctl view [-v | -N | -n NODEID] [-l FILENAME]
cm_ctl set [--log_level=LOG_LEVEL] [--cm_arbitration_mode=ARBITRATION_MODE] [--cm_switchover_az_mode=SWITCHOVER_AZ_MODE] [--cmsPromoteMode=CMS_PROMOTE_MODE -I INSTANCEID]
cm_ctl set --param --agent | --server [-n [NODEID]] -k [PARAMETER]="[value]"
cm_ctl get [--log_level] [--cm_arbitration_mode] [--cm_switchover_az_mode]
cm_ctl setrunmode -n NODEID -D DATADIR  [[--xmode=normal] | [--xmode=minority --votenum=NUM]]
cm_ctl changerole [--role=PASSIVE | --role=FOLLOWER] -n NODEID -D DATADIR [-t SECS]
cm_ctl changemember [--role=PASSIVE | --role=FOLLOWER] [--group=xx] [--priority=xx] -n NODEID -D DATADIR [-t SECS]
cm_ctl reload --param [--agent | --server]
cm_ctl list --param --agent | --server
cm_ctl encrypt [-M MODE] -D DATADIR
cm_ctl ddb DCC_CMD
cm_ctl switch [--ddb_type=[DDB]] [--commit] [--rollback]
```

**表 1**  option参数

<a name="zh-cn_topic_0116784021_table1718281376"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_row3512281078"><th class="cellrowborder" valign="top" width="18.73%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_p551628671"><a name="zh-cn_topic_0116784021_p551628671"></a><a name="zh-cn_topic_0116784021_p551628671"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="81.27%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_p3512813716"><a name="zh-cn_topic_0116784021_p3512813716"></a><a name="zh-cn_topic_0116784021_p3512813716"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0116784021_row1772289712"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p2732814712"><a name="zh-cn_topic_0116784021_p2732814712"></a><a name="zh-cn_topic_0116784021_p2732814712"></a>start</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p97172813717"><a name="zh-cn_topic_0116784021_p97172813717"></a><a name="zh-cn_topic_0116784021_p97172813717"></a>一主多备数据库部署模式下启动数据库实例服务、单个主机上的所有实例或单独启动某个节点实例进程，或者直接启动整个AZ。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row10772813716"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p1471228371"><a name="zh-cn_topic_0116784021_p1471228371"></a><a name="zh-cn_topic_0116784021_p1471228371"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p4718281716"><a name="zh-cn_topic_0116784021_p4718281716"></a><a name="zh-cn_topic_0116784021_p4718281716"></a>一主多备数据库部署模式下切换数据库主备实例，dcf模式下只支持-n NODEID -D DATADIR。</p>
</td>
</tr>
<tr id="row47801623861"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p778072319614"><a name="p778072319614"></a><a name="p778072319614"></a>finishredo</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p1845716340619"><a name="p1845716340619"></a><a name="p1845716340619"></a>所有备机停止回放，每个分片中选择一个强制升主。</p>
<div class="caution" id="note1445713341613"><a name="note1445713341613"></a><a name="note1445713341613"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="p145715341615"><a name="p145715341615"></a><a name="p145715341615"></a>该参数属于高风险操作，请谨慎执行。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row13782811712"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p127328274"><a name="zh-cn_topic_0116784021_p127328274"></a><a name="zh-cn_topic_0116784021_p127328274"></a>build</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p197172818716"><a name="zh-cn_topic_0116784021_p197172818716"></a><a name="zh-cn_topic_0116784021_p197172818716"></a>重建备实例。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row1879288713"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p5712819713"><a name="zh-cn_topic_0116784021_p5712819713"></a><a name="zh-cn_topic_0116784021_p5712819713"></a>check</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p939441964612"><a name="p939441964612"></a><a name="p939441964612"></a>检测实例进程运行状态，用户无需关注，不建议使用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row8717283718"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p3719281470"><a name="zh-cn_topic_0116784021_p3719281470"></a><a name="zh-cn_topic_0116784021_p3719281470"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p972280719"><a name="zh-cn_topic_0116784021_p972280719"></a><a name="zh-cn_topic_0116784021_p972280719"></a>一主多备数据库部署模式下停止数据库实例服务、单个主机上的所有实例或单独停止某个节点实例进程。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row1670282072"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p47628373"><a name="zh-cn_topic_0116784021_p47628373"></a><a name="zh-cn_topic_0116784021_p47628373"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p1276281674"><a name="zh-cn_topic_0116784021_p1276281674"></a><a name="zh-cn_topic_0116784021_p1276281674"></a>一主多备数据库部署模式下查询数据库实例状态或者单个主机的状态。</p>
</td>
</tr>
<tr id="row14381747877"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p152263498720"><a name="p152263498720"></a><a name="p152263498720"></a>view</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p13383472716"><a name="p13383472716"></a><a name="p13383472716"></a>查看数据库实例配置文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row9712817716"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_p1271281978"><a name="zh-cn_topic_0116784021_p1271281978"></a><a name="zh-cn_topic_0116784021_p1271281978"></a>set</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p12713283719"><a name="zh-cn_topic_0116784021_p12713283719"></a><a name="zh-cn_topic_0116784021_p12713283719"></a>设置日志级别，一主多备数据库部署模式下cm_server的仲裁模式、AZ之间的切换模式、cm_server升主模式。</p>
</td>
</tr>
<tr id="row1850113211082"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p550112211786"><a name="p550112211786"></a><a name="p550112211786"></a>set --param</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p6501202116818"><a name="p6501202116818"></a><a name="p6501202116818"></a>设置cm参数，默认set所有节点上的参数，也可以通过-n参数指定set某个节点，具体参数可以参考<a href="CM配置参数介绍.md">CM配置参数介绍</a></p>
</td>
</tr>
<tr id="row1662135316255"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p966415322513"><a name="p966415322513"></a><a name="p966415322513"></a>get</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p186641553172510"><a name="p186641553172510"></a><a name="p186641553172510"></a>获取日志级别，一主多备数据库部署模式下cm_server的仲裁模式、AZ之间的切换模式。</p>
</td>
</tr>
<tr id="row1294918104914"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p69493101593"><a name="p69493101593"></a><a name="p69493101593"></a>setrunmode</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p19491010291"><a name="p19491010291"></a><a name="p19491010291"></a>DCF部署方式下，设置DCF投票数，主要用于DCF强启。</p>
</td>
</tr>
<tr id="row412616153913"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1212614151911"><a name="p1212614151911"></a><a name="p1212614151911"></a>changerole</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p6126171511913"><a name="p6126171511913"></a><a name="p6126171511913"></a>DCF模式下，将角色为primary的修改为passive或者follower。</p>
</td>
</tr>
<tr id="row13434131719918"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p14350171099"><a name="p14350171099"></a><a name="p14350171099"></a>changemember</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p134358171493"><a name="p134358171493"></a><a name="p134358171493"></a>DCF模式下，改变指定DCF节点属性，包括节点角色、节点所在的逻辑组、节点的选举优先级等。</p>
</td>
</tr>
<tr id="row934765319475"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p3348145354718"><a name="p3348145354718"></a><a name="p3348145354718"></a>reload</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p19892194942510"><a name="p19892194942510"></a><a name="p19892194942510"></a>在线加载数据库实例静态配置文件，用户无需关注，不建议使用。</p>
</td>
</tr>
<tr id="row1431318261489"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p631452618487"><a name="p631452618487"></a><a name="p631452618487"></a>reload --param</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p11314192624815"><a name="p11314192624815"></a><a name="p11314192624815"></a>加载可以动态生效的cm参数，部分参数不支持reload，只能重启cm才能生效。</p>
</td>
</tr>
<tr id="row1174130124814"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1274193034820"><a name="p1274193034820"></a><a name="p1274193034820"></a>list</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p1674123010483"><a name="p1674123010483"></a><a name="p1674123010483"></a>列出cm_agent或cm_server所有的参数。</p>
</td>
</tr>
<tr id="row79323240495"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p69321424194915"><a name="p69321424194915"></a><a name="p69321424194915"></a>encrypt</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p8933624164910"><a name="p8933624164910"></a><a name="p8933624164910"></a>对输入的密码进行加密操作，密码支持8~15位，且必须包含三种字符（数字，字母，符号）。</p>
</td>
</tr>
<tr id="row83491118501"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p2034911110501"><a name="p2034911110501"></a><a name="p2034911110501"></a>ddb</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p203493114508"><a name="p203493114508"></a><a name="p203493114508"></a>DCC<span id="ph899115404525"><a name="ph899115404525"></a><a name="ph899115404525"></a>或者share disk</span>模式下，执行<span id="ph85441652123220"><a name="ph85441652123220"></a><a name="ph85441652123220"></a>对DCC组件或者<span id="ph15940143013413"><a name="ph15940143013413"></a><a name="ph15940143013413"></a>share disk</span>的配置数据存取命令</span>。<span id="ph14623183233319"><a name="ph14623183233319"></a><a name="ph14623183233319"></a>CM依赖DCC组件或者<span id="ph0885137043"><a name="ph0885137043"></a><a name="ph0885137043"></a>share disk</span>对配置数据分布式存取，实现集群配置管理高可用能力。</span></p>
</td>
</tr>
<tr id="row9198618201015"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1386610187104"><a name="p1386610187104"></a><a name="p1386610187104"></a>switch</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p819851818100"><a name="p819851818100"></a><a name="p819851818100"></a>执行ddb模式的切换。</p>
<div class="note" id="note195647106235"><a name="note195647106235"></a><a name="note195647106235"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1356414106234"><a name="p1356414106234"></a><a name="p1356414106234"></a>openGauss当前只支持切换到DCC模式。</p>
</div></div>
</td>
</tr>
<tr id="row2797361611"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p107981561462"><a name="p107981561462"></a><a name="p107981561462"></a><span id="ph28517910619"><a name="ph28517910619"></a><a name="ph28517910619"></a>res</span></p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p87986618610"><a name="p87986618610"></a><a name="p87986618610"></a><span id="ph594314278613"><a name="ph594314278613"></a><a name="ph594314278613"></a>在节点上进行资源配置的新增、修改、查询、删除</span><span id="ph16649163112618"><a name="ph16649163112618"></a><a name="ph16649163112618"></a>。</span></p>
</td>
</tr>
<tr id="row16533109107"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1453121012108"><a name="p1453121012108"></a><a name="p1453121012108"></a><span id="ph7976413191012"><a name="ph7976413191012"></a><a name="ph7976413191012"></a>show</span></p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p16532107109"><a name="p16532107109"></a><a name="p16532107109"></a><span id="ph126911891011"><a name="ph126911891011"></a><a name="ph126911891011"></a>展示集群DN节点网络连通性和每个节点的共享盘连通性</span></p>
<div class="note" id="note1288491911125"><a name="note1288491911125"></a><a name="note1288491911125"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1988420195126"><a name="p1988420195126"></a><a name="p1988420195126"></a>1. 节点连通性使用的是DN的HAIP。</p>
<p id="p103321958161314"><a name="p103321958161314"></a><a name="p103321958161314"></a>2. 共享盘连通性的前提是配置了cma的voting_disk_path参数，否则默认显示不连通。</p>
</div></div>
</td>
</tr>
</tbody>
</table>

**表 2**  公共参数

<a name="zh-cn_topic_0116784021_t73f4b6dad11943ea811a211e6c127669"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_r9b2667f4243a4e87b40e7fc0180813c7"><th class="cellrowborder" valign="top" width="27.38%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_a7ec01558f8ed4028bbf8cdea612a621a"><a name="zh-cn_topic_0116784021_a7ec01558f8ed4028bbf8cdea612a621a"></a><a name="zh-cn_topic_0116784021_a7ec01558f8ed4028bbf8cdea612a621a"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="72.61999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_aaad7089c239e47e5b6bb41f0d119a5ea"><a name="zh-cn_topic_0116784021_aaad7089c239e47e5b6bb41f0d119a5ea"></a><a name="zh-cn_topic_0116784021_aaad7089c239e47e5b6bb41f0d119a5ea"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0116784021_r1e184ddb0ba14a27a0c48e56ae67ca44"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_a6aa8803f607642bb8466be3254e77531"><a name="zh-cn_topic_0116784021_a6aa8803f607642bb8466be3254e77531"></a><a name="zh-cn_topic_0116784021_a6aa8803f607642bb8466be3254e77531"></a>-D DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_afa2212dded3748a7924ea04efce2280b"><a name="zh-cn_topic_0116784021_afa2212dded3748a7924ea04efce2280b"></a><a name="zh-cn_topic_0116784021_afa2212dded3748a7924ea04efce2280b"></a>指定实例数据目录。仅用于对数据库节点进行操作的命令，如start、stop、switchover、build、setrunmode、changerole、changemember、encrypt。</p>
</td>
</tr>
<tr id="row195328365128"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="p1934113751214"><a name="p1934113751214"></a><a name="p1934113751214"></a>-l FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="p4140154021210"><a name="p4140154021210"></a><a name="p4140154021210"></a>查询结果输出到指定文件。仅用于查询类的命令，如query、view。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r3009d9544e694ea0b8c248b152c2fcb0"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_afa6218bc758d49eca62af42f644e06fe"><a name="zh-cn_topic_0116784021_afa6218bc758d49eca62af42f644e06fe"></a><a name="zh-cn_topic_0116784021_afa6218bc758d49eca62af42f644e06fe"></a>-n NODEID</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a18f50a7ab89f42f6bf0cec63b6120a07"><a name="zh-cn_topic_0116784021_a18f50a7ab89f42f6bf0cec63b6120a07"></a><a name="zh-cn_topic_0116784021_a18f50a7ab89f42f6bf0cec63b6120a07"></a>指定节点。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r84d4692a7d8849c49dfa4e154052725f"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_aac254a8d2358472289e1a36867cdd244"><a name="zh-cn_topic_0116784021_aac254a8d2358472289e1a36867cdd244"></a><a name="zh-cn_topic_0116784021_aac254a8d2358472289e1a36867cdd244"></a>-z AVAILABILITY_ZONE</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a5beacea766d44bbe813c7ac582bba362"><a name="zh-cn_topic_0116784021_a5beacea766d44bbe813c7ac582bba362"></a><a name="zh-cn_topic_0116784021_a5beacea766d44bbe813c7ac582bba362"></a>指定AZ名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r477e0c6128994f0aa7d1bc5910ddc257"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="p122511250131212"><a name="p122511250131212"></a><a name="p122511250131212"></a>-t SECS</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="p1497155341214"><a name="p1497155341214"></a><a name="p1497155341214"></a>指定超时时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r8e84c6e9ea2c4544ba81838fade7c37f"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_a1e0cd0443cda4befb15b7b32ba4eea0e"><a name="zh-cn_topic_0116784021_a1e0cd0443cda4befb15b7b32ba4eea0e"></a><a name="zh-cn_topic_0116784021_a1e0cd0443cda4befb15b7b32ba4eea0e"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a99eb4947ce8845f3ae4445d57f800f32"><a name="zh-cn_topic_0116784021_a99eb4947ce8845f3ae4445d57f800f32"></a><a name="zh-cn_topic_0116784021_a99eb4947ce8845f3ae4445d57f800f32"></a>打印cm_ctl版本信息，然后退出。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_rf8678b2ad92b4c5ca6a73aff8b1fdd9a"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_ae5caaed9829a4efda56af9b389561516"><a name="zh-cn_topic_0116784021_ae5caaed9829a4efda56af9b389561516"></a><a name="zh-cn_topic_0116784021_ae5caaed9829a4efda56af9b389561516"></a>-?, -h,--help</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a3f900ff898144a7a82007afa0fb93825"><a name="zh-cn_topic_0116784021_a3f900ff898144a7a82007afa0fb93825"></a><a name="zh-cn_topic_0116784021_a3f900ff898144a7a82007afa0fb93825"></a>显示关于cm_ctl命令行参数的帮助信息，然后退出。</p>
</td>
</tr>
</tbody>
</table>
![](C:/Users/liyang/Desktop/新建文件夹/docs-split_fix/docs-split_fix/content/zh/docs/Toolreference/public_sys-resources/icon-note.gif) **说明：**   

此处列出的公共参数并不一定适用于所有命令，而是多个命令支持，为避免冗余信息，所以统一在此说明，详细的使用方法见以上使用方法，也可以使用cm_ctl --help进行查询。

**表 3**  switchover参数

<a name="table12226155814102"></a>
<table><thead align="left"><tr id="row72262584103"><th class="cellrowborder" valign="top" width="22.869999999999997%" id="mcps1.2.3.1.1"><p id="p1722685820101"><a name="p1722685820101"></a><a name="p1722685820101"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="77.13%" id="mcps1.2.3.1.2"><p id="p322605817109"><a name="p322605817109"></a><a name="p322605817109"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1822715813100"><td class="cellrowborder" valign="top" width="22.869999999999997%" headers="mcps1.2.3.1.1 "><p id="p122279589106"><a name="p122279589106"></a><a name="p122279589106"></a>-a</p>
</td>
<td class="cellrowborder" valign="top" width="77.13%" headers="mcps1.2.3.1.2 "><p id="p182271958161018"><a name="p182271958161018"></a><a name="p182271958161018"></a>将集群的主机重置到初始配置的节点。</p>
<div class="note" id="note4227758151011"><a name="note4227758151011"></a><a name="note4227758151011"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p322713584103"><a name="p322713584103"></a><a name="p322713584103"></a>switchover为维护操作：确保数据库实例状态正常，所有业务结束，并使用pgxc_get_senders_catchup_time()视图查询无主备追赶后，再进行switchover操作。</p>
</div></div>
</td>
</tr>
<tr id="row876891261217"><td class="cellrowborder" valign="top" width="22.869999999999997%" headers="mcps1.2.3.1.1 "><p id="p157683127123"><a name="p157683127123"></a><a name="p157683127123"></a>-A</p>
</td>
<td class="cellrowborder" valign="top" width="77.13%" headers="mcps1.2.3.1.2 "><p id="p5768101211121"><a name="p5768101211121"></a><a name="p5768101211121"></a>将主机切换到一个合适的备机节点上。</p>
</td>
</tr>
<tr id="row132271458161020"><td class="cellrowborder" valign="top" width="22.869999999999997%" headers="mcps1.2.3.1.1 "><p id="p6227658191018"><a name="p6227658191018"></a><a name="p6227658191018"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="77.13%" headers="mcps1.2.3.1.2 "><p id="p1722775811018"><a name="p1722775811018"></a><a name="p1722775811018"></a>指定进行-f类型switchover。</p>
<div class="note" id="note2022865851012"><a name="note2022865851012"></a><a name="note2022865851012"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="ul1722865861017"></a><a name="ul1722865861017"></a><ul id="ul1722865861017"><li>switchover为维护操作：确保数据库实例状态正常，所有业务结束，并使用pgxc_get_senders_catchup_time()视图查询无主备追赶后，再进行switchover操作。</li><li>使用方式：cm_ctl switchover -n NODEID -D DATADIR -f。</li></ul>
</div></div>
</td>
</tr>
</tbody>
</table>

**表 4**  build参数

<a name="table649003761312"></a>
<table><thead align="left"><tr id="row1549019377136"><th class="cellrowborder" valign="top" width="36.96%" id="mcps1.2.3.1.1"><p id="p9490837131316"><a name="p9490837131316"></a><a name="p9490837131316"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="63.04%" id="mcps1.2.3.1.2"><p id="p17490937101319"><a name="p17490937101319"></a><a name="p17490937101319"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row20490193716132"><td class="cellrowborder" valign="top" width="36.96%" headers="mcps1.2.3.1.1 "><p id="p24901837141313"><a name="p24901837141313"></a><a name="p24901837141313"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="63.04%" headers="mcps1.2.3.1.2 "><p id="p649120371130"><a name="p649120371130"></a><a name="p649120371130"></a>强制重建备机。</p>
</td>
</tr>
<tr id="row20491153713135"><td class="cellrowborder" valign="top" width="36.96%" headers="mcps1.2.3.1.1 "><p id="p16491153712138"><a name="p16491153712138"></a><a name="p16491153712138"></a>-b full</p>
</td>
<td class="cellrowborder" valign="top" width="63.04%" headers="mcps1.2.3.1.2 "><p id="p144918375134"><a name="p144918375134"></a><a name="p144918375134"></a>指定进行全量build。不指定情况下，对于一主多备数据库实例部署模式进行auto build。auto build指：先调用增量build，失败之后调用全量build。</p>
</td>
</tr>
<tr id="row66031246131316"><td class="cellrowborder" valign="top" width="36.96%" headers="mcps1.2.3.1.1 "><p id="p1860354615133"><a name="p1860354615133"></a><a name="p1860354615133"></a>-c</p>
</td>
<td class="cellrowborder" valign="top" width="63.04%" headers="mcps1.2.3.1.2 "><p id="p613211713369"><a name="p613211713369"></a><a name="p613211713369"></a>重建 cm_server（将主节点的DCC数据目录拷贝到指定节点，只适用于一主一备模式）。</p>
</td>
</tr>
</tbody>
</table>

**表 5**  check参数

<a name="zh-cn_topic_0116784021_t5582631c9b25449da85855fab919ddfd"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_rd37f17597d4247e0ae482955d9309dec"><th class="cellrowborder" valign="top" width="37.41%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_a01a077aed6494d02a3281d4e8099e93f"><a name="zh-cn_topic_0116784021_a01a077aed6494d02a3281d4e8099e93f"></a><a name="zh-cn_topic_0116784021_a01a077aed6494d02a3281d4e8099e93f"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="62.59%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_a7a38ec4d685b4f47b90e0ad9a4f50824"><a name="zh-cn_topic_0116784021_a7a38ec4d685b4f47b90e0ad9a4f50824"></a><a name="zh-cn_topic_0116784021_a7a38ec4d685b4f47b90e0ad9a4f50824"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0116784021_rd8c1b7cddd6f427d9694f264d2005cac"><td class="cellrowborder" valign="top" width="37.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_ab803457b0a634b51b9dded46a033ccd3"><a name="zh-cn_topic_0116784021_ab803457b0a634b51b9dded46a033ccd3"></a><a name="zh-cn_topic_0116784021_ab803457b0a634b51b9dded46a033ccd3"></a>-B BINNAME</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_ac55816c176ab4706a6aadb8ad7593023"><a name="zh-cn_topic_0116784021_ac55816c176ab4706a6aadb8ad7593023"></a><a name="zh-cn_topic_0116784021_ac55816c176ab4706a6aadb8ad7593023"></a>指定进程名，其进程名包括“cm_agent”,“gaussdb”和“cm_server”。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_rd2e1192de08d42bcaade8ca56005ffc1"><td class="cellrowborder" valign="top" width="37.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_a4e9f52921a6d48ef83bdfe09118a36b2"><a name="zh-cn_topic_0116784021_a4e9f52921a6d48ef83bdfe09118a36b2"></a><a name="zh-cn_topic_0116784021_a4e9f52921a6d48ef83bdfe09118a36b2"></a>-T DATAPATH</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_ab3ea48e85af841789dc64a1178000c5a"><a name="zh-cn_topic_0116784021_ab3ea48e85af841789dc64a1178000c5a"></a><a name="zh-cn_topic_0116784021_ab3ea48e85af841789dc64a1178000c5a"></a>指定实例数据目录。</p>
</td>
</tr>
</tbody>
</table>

**表 6**  stop参数

<a name="zh-cn_topic_0116784021_t7507cabe697c4b4da00814fccee8e559"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_r9fe46923fdac41adafc1d99fc26394fe"><th class="cellrowborder" valign="top" width="32.15%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_ac69b26b26eaf444d8976b4a02ebfa755"><a name="zh-cn_topic_0116784021_ac69b26b26eaf444d8976b4a02ebfa755"></a><a name="zh-cn_topic_0116784021_ac69b26b26eaf444d8976b4a02ebfa755"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="67.85%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_a2149847c7cee4befb99d6feded576a60"><a name="zh-cn_topic_0116784021_a2149847c7cee4befb99d6feded576a60"></a><a name="zh-cn_topic_0116784021_a2149847c7cee4befb99d6feded576a60"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0116784021_rd03f46c5234c4d7e8f26720fb785b37c"><td class="cellrowborder" valign="top" width="32.15%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_add073231a45d453b801c35a3eb22b469"><a name="zh-cn_topic_0116784021_add073231a45d453b801c35a3eb22b469"></a><a name="zh-cn_topic_0116784021_add073231a45d453b801c35a3eb22b469"></a>-m SHUTDOWN-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="67.85%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a420b6d7e3a0c471d9cfc5e497dd028bc"><a name="zh-cn_topic_0116784021_a420b6d7e3a0c471d9cfc5e497dd028bc"></a><a name="zh-cn_topic_0116784021_a420b6d7e3a0c471d9cfc5e497dd028bc"></a>指定停止模式，停止模式有以下几种：</p>
<a name="ul116320588224"></a><a name="ul116320588224"></a><ul id="ul116320588224"><li>smart（s）：等待用户业务结束后，停止所有数据库实例。</li><li>fast（f）：不等待用户业务结束，指定数据库实例退出。</li><li>immediate（i）：不等待用户业务结束，指定数据库实例强制退出。</li></ul>
</td>
</tr>
<tr id="row9324151113811"><td class="cellrowborder" valign="top" width="32.15%" headers="mcps1.2.3.1.1 "><p id="p163247516387"><a name="p163247516387"></a><a name="p163247516387"></a><span id="ph17517185393814"><a name="ph17517185393814"></a><a name="ph17517185393814"></a>-I</span></p>
</td>
<td class="cellrowborder" valign="top" width="67.85%" headers="mcps1.2.3.1.2 "><p id="p1832416515384"><a name="p1832416515384"></a><a name="p1832416515384"></a><span id="ph466930133917"><a name="ph466930133917"></a><a name="ph466930133917"></a>指定需要停止的资源实例号，可以通过cm_ctl query -Cv查看资源实例和</span><span id="ph869272514407"><a name="ph869272514407"></a><a name="ph869272514407"></a>实例号的映射关系</span></p>
</td>
</tr>
</tbody>
</table>

**表 7**  query参数

<a name="zh-cn_topic_0116784021_t19badc48929f4f9abd94b8ac774f06c1"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_r95c34a3a3d3b46c4acc26ae7505b45a6"><th class="cellrowborder" valign="top" width="19.43%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_a1604cdeb3e414559ae3d5f833f16552b"><a name="zh-cn_topic_0116784021_a1604cdeb3e414559ae3d5f833f16552b"></a><a name="zh-cn_topic_0116784021_a1604cdeb3e414559ae3d5f833f16552b"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="80.57%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_a571c87b4d9294e02bd2aed23a771d5a0"><a name="zh-cn_topic_0116784021_a571c87b4d9294e02bd2aed23a771d5a0"></a><a name="zh-cn_topic_0116784021_a571c87b4d9294e02bd2aed23a771d5a0"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1129820320157"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p12982030155"><a name="p12982030155"></a><a name="p12982030155"></a>-s</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a842704ebd6fc4221aaba924dc932ff55"><a name="zh-cn_topic_0116784021_a842704ebd6fc4221aaba924dc932ff55"></a><a name="zh-cn_topic_0116784021_a842704ebd6fc4221aaba924dc932ff55"></a>显示导致各个节点主备实例数量不均衡的实例。</p>
<div class="note" id="zh-cn_topic_0116784021_nc60bc80c518c49eda2b35d562147346b"><a name="zh-cn_topic_0116784021_nc60bc80c518c49eda2b35d562147346b"></a><a name="zh-cn_topic_0116784021_nc60bc80c518c49eda2b35d562147346b"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0116784021_af1994683c8554b83b1b0e4aabdbcf7cd"><a name="zh-cn_topic_0116784021_af1994683c8554b83b1b0e4aabdbcf7cd"></a><a name="zh-cn_topic_0116784021_af1994683c8554b83b1b0e4aabdbcf7cd"></a>-s参数需要和-v以及-C参数一起使用才能按主备关系成对显示导致各个节点主备实例数量不均衡的实例，使用-s参数时，必须指定-C、-v参数。</p>
</div></div>
</td>
</tr>
<tr id="row65832211151"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p0583221191520"><a name="p0583221191520"></a><a name="p0583221191520"></a>-C</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a4b79f2da8c494569857808ffd61f71a5"><a name="zh-cn_topic_0116784021_a4b79f2da8c494569857808ffd61f71a5"></a><a name="zh-cn_topic_0116784021_a4b79f2da8c494569857808ffd61f71a5"></a>按主备关系成对显示数据库实例状态。</p>
<div class="note" id="zh-cn_topic_0116784021_n731aa2a43352481e978b12c5553265bb"><a name="zh-cn_topic_0116784021_n731aa2a43352481e978b12c5553265bb"></a><a name="zh-cn_topic_0116784021_n731aa2a43352481e978b12c5553265bb"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0116784021_a39570561395642a98889ff545e5199f0"><a name="zh-cn_topic_0116784021_a39570561395642a98889ff545e5199f0"></a><a name="zh-cn_topic_0116784021_a39570561395642a98889ff545e5199f0"></a>-C参数需要和-v参数一起使用才能按主备关系成对显示数据库实例详细状态信息，使用-C时，必须指定-v参数。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r553167c4166044a0b29f84a7883ccc75"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_a999edbdbff544c99ba456dd23e519dac"><a name="zh-cn_topic_0116784021_a999edbdbff544c99ba456dd23e519dac"></a><a name="zh-cn_topic_0116784021_a999edbdbff544c99ba456dd23e519dac"></a>-v</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a925da3184e614f288fce5a63a2916abf"><a name="zh-cn_topic_0116784021_a925da3184e614f288fce5a63a2916abf"></a><a name="zh-cn_topic_0116784021_a925da3184e614f288fce5a63a2916abf"></a>显示详细数据库实例状态。</p>
<div class="note" id="zh-cn_topic_0116784021_n40330e074da34b2da0c80b95a9493f29"><a name="zh-cn_topic_0116784021_n40330e074da34b2da0c80b95a9493f29"></a><a name="zh-cn_topic_0116784021_n40330e074da34b2da0c80b95a9493f29"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0116784021_a37464d4740da49ac813a633ba7dd3ad0"><a name="zh-cn_topic_0116784021_a37464d4740da49ac813a633ba7dd3ad0"></a><a name="zh-cn_topic_0116784021_a37464d4740da49ac813a633ba7dd3ad0"></a>数据库实例有如下几种状态：</p>
<a name="zh-cn_topic_0116784021_uda4877377f8c4db6a498b7fed7873ea5"></a><a name="zh-cn_topic_0116784021_uda4877377f8c4db6a498b7fed7873ea5"></a><ul id="zh-cn_topic_0116784021_uda4877377f8c4db6a498b7fed7873ea5"><li>Normal：表示数据库实例可用，且数据有冗余备份。所有进程都在运行，主备关系正常。</li><li>Degraded：表示数据库实例可用，但数据没有冗余备份。</li><li>Unavailable：表示数据库实例不可用。</li></ul>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_rf77a30064bae47b3b55158207950b428"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_a15fcb4494e4c469ba1cd5c4cf245309b"><a name="zh-cn_topic_0116784021_a15fcb4494e4c469ba1cd5c4cf245309b"></a><a name="zh-cn_topic_0116784021_a15fcb4494e4c469ba1cd5c4cf245309b"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_a440eac8bd72d47b89536e3204d64c34c"><a name="zh-cn_topic_0116784021_a440eac8bd72d47b89536e3204d64c34c"></a><a name="zh-cn_topic_0116784021_a440eac8bd72d47b89536e3204d64c34c"></a>显示实例数据目录。</p>
<div class="note" id="zh-cn_topic_0116784021_n34b3cecab92d4d8798e0839da2a6d3bd"><a name="zh-cn_topic_0116784021_n34b3cecab92d4d8798e0839da2a6d3bd"></a><a name="zh-cn_topic_0116784021_n34b3cecab92d4d8798e0839da2a6d3bd"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0116784021_a96799a456e334a499e7a5369cb7f02b5"><a name="zh-cn_topic_0116784021_a96799a456e334a499e7a5369cb7f02b5"></a><a name="zh-cn_topic_0116784021_a96799a456e334a499e7a5369cb7f02b5"></a>-d参数需要和-v以及-C参数一起使用。</p>
</div></div>
</td>
</tr>
<tr id="row52574051616"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_a67311a740bdb4055adb5ab46efe4e860"><a name="zh-cn_topic_0116784021_a67311a740bdb4055adb5ab46efe4e860"></a><a name="zh-cn_topic_0116784021_a67311a740bdb4055adb5ab46efe4e860"></a>-i</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_ac117ca8771bf4cef8f424b4fd0d658c5"><a name="zh-cn_topic_0116784021_ac117ca8771bf4cef8f424b4fd0d658c5"></a><a name="zh-cn_topic_0116784021_ac117ca8771bf4cef8f424b4fd0d658c5"></a>显示物理节点ip。</p>
<div class="note" id="zh-cn_topic_0116784021_n4f315e9ba51145dd9128d814932da195"><a name="zh-cn_topic_0116784021_n4f315e9ba51145dd9128d814932da195"></a><a name="zh-cn_topic_0116784021_n4f315e9ba51145dd9128d814932da195"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0116784021_ad62086b6f32c49a69a1d742ff34aa2ad"><a name="zh-cn_topic_0116784021_ad62086b6f32c49a69a1d742ff34aa2ad"></a><a name="zh-cn_topic_0116784021_ad62086b6f32c49a69a1d742ff34aa2ad"></a>-i参数需要和-v以及-C参数一起使用。</p>
</div></div>
</td>
</tr>
<tr id="row523414981611"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p9234134911620"><a name="p9234134911620"></a><a name="p9234134911620"></a>-F</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_p1071913172256"><a name="zh-cn_topic_0116784021_p1071913172256"></a><a name="zh-cn_topic_0116784021_p1071913172256"></a>显示各个节点Fenced UDF状态。</p>
<div class="note" id="zh-cn_topic_0116784021_note14720161711256"><a name="zh-cn_topic_0116784021_note14720161711256"></a><a name="zh-cn_topic_0116784021_note14720161711256"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0116784021_p1722151716253"><a name="zh-cn_topic_0116784021_p1722151716253"></a><a name="zh-cn_topic_0116784021_p1722151716253"></a>-F参数需要和-v以及-C参数一起使用才能显示各个节点Fenced UDF状态，使用-F参数时，必须指定-C、-v参数。</p>
</div></div>
</td>
</tr>
<tr id="row72113163521"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p7211167171713"><a name="p7211167171713"></a><a name="p7211167171713"></a>-z ALL</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p179912235284"><a name="p179912235284"></a><a name="p179912235284"></a>显示数据库实例所在AZ名称。</p>
<div class="note" id="note2620241288"><a name="note2620241288"></a><a name="note2620241288"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1234192413287"><a name="p1234192413287"></a><a name="p1234192413287"></a>-z参数需要和-v以及-C参数一起使用，并且-z后面需要跟参数ALL。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r91a86e28e010481eaf36b9c0de2c3820"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p172271611523"><a name="p172271611523"></a><a name="p172271611523"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p52221655217"><a name="p52221655217"></a><a name="p52221655217"></a>显示备机redo状态。</p>
<div class="note" id="note844444714528"><a name="note844444714528"></a><a name="note844444714528"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p1844594775210"><a name="p1844594775210"></a><a name="p1844594775210"></a>使用-r时，必须指定-v参数。</p>
</div></div>
</td>
</tr>
<tr id="row6520145815401"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p35211358194014"><a name="p35211358194014"></a><a name="p35211358194014"></a>-g</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p15168320103413"><a name="p15168320103413"></a><a name="p15168320103413"></a>显示备份和恢复群集信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_row464311132254"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p1573810068"><a name="p1573810068"></a><a name="p1573810068"></a>-x</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p1773840868"><a name="p1773840868"></a><a name="p1773840868"></a>显示所有异常的数据库实例。</p>
<div class="note" id="note10739110060"><a name="note10739110060"></a><a name="note10739110060"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p15739160960"><a name="p15739160960"></a><a name="p15739160960"></a>-x参数需要和-v以及-C参数一起使用。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0116784021_r0c7619ba8f3f445196dc6b76a354f937"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_ab515c4c4117c461295e58b95c1da869a"><a name="zh-cn_topic_0116784021_ab515c4c4117c461295e58b95c1da869a"></a><a name="zh-cn_topic_0116784021_ab515c4c4117c461295e58b95c1da869a"></a>-S</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p11633175118493"><a name="p11633175118493"></a><a name="p11633175118493"></a>显示数据库实例启动时的状态检查结果。</p>
<div class="note" id="note563385194914"><a name="note563385194914"></a><a name="note563385194914"></a><span class="notetitle"> 说明： </span><div class="notebody"><div class="p" id="p36334518495"><a name="p36334518495"></a><a name="p36334518495"></a>-S参数需要和-v以及-C参数一起使用才能按显示数据库实例的状态检查结果。有以下三种状态：<a name="ul291533852718"></a><a name="ul291533852718"></a><ul id="ul291533852718"><li>Normal：表示数据库实例可用，且数据有冗余备份。所有进程都在运行，主备关系正常。</li><li>Degraded：表示数据库实例可用，但数据没有冗余备份。</li><li>Unavailable：表示数据库实例不可用。</li></ul>
</div>
</div></div>
</td>
</tr>
<tr id="row1939914596122"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p17400105901210"><a name="p17400105901210"></a><a name="p17400105901210"></a>--minorityAz</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p1440025912126"><a name="p1440025912126"></a><a name="p1440025912126"></a>只查询指定AZ的cms。</p>
<div class="note" id="note1384679188"><a name="note1384679188"></a><a name="note1384679188"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p7844715187"><a name="p7844715187"></a><a name="p7844715187"></a>此参数会忽略非指定AZ的cms节点，可以在少数派场景提高查询速度。</p>
</div></div>
</td>
</tr>
<tr id="row20168820153413"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p1316811209341"><a name="p1316811209341"></a><a name="p1316811209341"></a>-p</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p11386175715616"><a name="p11386175715616"></a><a name="p11386175715616"></a>显示数据库实例所有节点端口。</p>
<div class="note" id="note938765713620"><a name="note938765713620"></a><a name="note938765713620"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p13871857266"><a name="p13871857266"></a><a name="p13871857266"></a>-p参数需要和-v以及-C参数一起使用。</p>
</div></div>
</td>
</tr>
</tbody>
</table>

**表 8**  set参数

<a name="zh-cn_topic_0116784021_tef5e0858a71c4d21abce8f80e3ba7723"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_rff0042d520c048e9a9920b990bd58afe"><th class="cellrowborder" valign="top" width="35.120000000000005%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_a8f0c292661264b72ba915297a9510a00"><a name="zh-cn_topic_0116784021_a8f0c292661264b72ba915297a9510a00"></a><a name="zh-cn_topic_0116784021_a8f0c292661264b72ba915297a9510a00"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="64.88000000000001%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_adfb37b0213a2402fb66d0033431adc08"><a name="zh-cn_topic_0116784021_adfb37b0213a2402fb66d0033431adc08"></a><a name="zh-cn_topic_0116784021_adfb37b0213a2402fb66d0033431adc08"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0116784021_r922b5d9f35404fb48604c9882f09b336"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0116784021_aa76794bdce4845c5ba86de984106438c"><a name="zh-cn_topic_0116784021_aa76794bdce4845c5ba86de984106438c"></a><a name="zh-cn_topic_0116784021_aa76794bdce4845c5ba86de984106438c"></a>--log_level=LOG_LEVEL</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0116784021_ac533a5fc9d824ed2821ba1216c397d78"><a name="zh-cn_topic_0116784021_ac533a5fc9d824ed2821ba1216c397d78"></a><a name="zh-cn_topic_0116784021_ac533a5fc9d824ed2821ba1216c397d78"></a>设置主cm_server日志级别。共分为DEBUG5、DEBUG1、WARNING、LOG、ERROR和FATAL六个级别，日志打印信息级别越来越高。设置日志级别越高，输出日志信息就越少。</p>
</td>
</tr>
<tr id="row461575013278"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="p5616750122715"><a name="p5616750122715"></a><a name="p5616750122715"></a>--cm_arbitration_mode=ARBITRATION_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="p26161150132714"><a name="p26161150132714"></a><a name="p26161150132714"></a>一主多备功能，设置cm_server的仲裁模式。共有MAJORITY、MINORITY两种模式，MAJORITY为多数派模式，MINORITY为少数派模式。opengauss不支持少数派，此参数可以设置成MINORITY，但不会生效。</p>
</td>
</tr>
<tr id="row1622416576276"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="p123344326288"><a name="p123344326288"></a><a name="p123344326288"></a>--cm_switchover_az_mode=</p>
<p id="p83351832122816"><a name="p83351832122816"></a><a name="p83351832122816"></a>SWITCHOVER_AZ_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="p2226155722719"><a name="p2226155722719"></a><a name="p2226155722719"></a>一主多备功能，设置AZ之间的自动切换开关。共有NON_AUTO、AUTO两种模式，NON_AUTO为非自动切换模式，AUTO为自动切换模式。AUTO模式由主cm_server自动控制AZ1和AZ2之间的节点实例切换。</p>
</td>
</tr>
<tr id="row42457165812"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="p1424671620810"><a name="p1424671620810"></a><a name="p1424671620810"></a>--cmsPromoteMode=CMS_PROMOTE_MODE -I INSTANCEID</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="p162467161987"><a name="p162467161987"></a><a name="p162467161987"></a>设置cm_server的升主方式，共有AUTO、PRIMARY_F两种模式，AUTO为默认自选主方式，PRIMARY_F会强制使-I指定的节点升主，无论当前是否有主，因此，有可能会导致cms存在多主情况。</p>
</td>
</tr>
</tbody>
</table>

**表 9**  set cm参数

<a name="table10437204416514"></a>
<table><thead align="left"><tr id="row1743716445512"><th class="cellrowborder" valign="top" width="24.75%" id="mcps1.2.3.1.1"><p id="p54386442055"><a name="p54386442055"></a><a name="p54386442055"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="75.25%" id="mcps1.2.3.1.2"><p id="p15438944158"><a name="p15438944158"></a><a name="p15438944158"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row10308104323615"><td class="cellrowborder" valign="top" width="24.75%" headers="mcps1.2.3.1.1 "><p id="p4784850203614"><a name="p4784850203614"></a><a name="p4784850203614"></a>--param</p>
</td>
<td class="cellrowborder" valign="top" width="75.25%" headers="mcps1.2.3.1.2 "><p id="p1378411501367"><a name="p1378411501367"></a><a name="p1378411501367"></a>表明需要设置cm参数，不带此参数则不能执行设置cm参数。</p>
</td>
</tr>
<tr id="row1243814448520"><td class="cellrowborder" valign="top" width="24.75%" headers="mcps1.2.3.1.1 "><p id="p64381244256"><a name="p64381244256"></a><a name="p64381244256"></a>--agent | --server</p>
</td>
<td class="cellrowborder" valign="top" width="75.25%" headers="mcps1.2.3.1.2 "><p id="p72351114768"><a name="p72351114768"></a><a name="p72351114768"></a>此参数为必带参数，表明当前需要设置cm_server还是cm_agent的参数。</p>
</td>
</tr>
<tr id="row179561119550"><td class="cellrowborder" valign="top" width="24.75%" headers="mcps1.2.3.1.1 "><p id="p8956119552"><a name="p8956119552"></a><a name="p8956119552"></a>-k parameter="value"</p>
</td>
<td class="cellrowborder" valign="top" width="75.25%" headers="mcps1.2.3.1.2 "><p id="p195661914515"><a name="p195661914515"></a><a name="p195661914515"></a>指定设置的参数和参数的值，只能设置已经存在的参数，不支持增加或删减参数。</p>
</td>
</tr>
</tbody>
</table>

**表 10**  get参数

<a name="table1599151916313"></a>
<table><thead align="left"><tr id="row2991719183112"><th class="cellrowborder" valign="top" width="36.559999999999995%" id="mcps1.2.3.1.1"><p id="p11331611153415"><a name="p11331611153415"></a><a name="p11331611153415"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="63.44%" id="mcps1.2.3.1.2"><p id="p1587112152345"><a name="p1587112152345"></a><a name="p1587112152345"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1399151933116"><td class="cellrowborder" valign="top" width="36.559999999999995%" headers="mcps1.2.3.1.1 "><p id="p1642213231347"><a name="p1642213231347"></a><a name="p1642213231347"></a>--log_level=LOG_LEVEL</p>
</td>
<td class="cellrowborder" valign="top" width="63.44%" headers="mcps1.2.3.1.2 "><p id="p8277436173410"><a name="p8277436173410"></a><a name="p8277436173410"></a>获取主cm_server日志级别。共分为DEBUG5、DEBUG1、WARNING、LOG、ERROR和FATAL六个级别，日志打印信息级别越来越高。设置日志级别越高，输出日志信息就越少。</p>
</td>
</tr>
<tr id="row1699121903112"><td class="cellrowborder" valign="top" width="36.559999999999995%" headers="mcps1.2.3.1.1 "><p id="p2991919143114"><a name="p2991919143114"></a><a name="p2991919143114"></a>--cm_arbitration_mode=ARBITRATION_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="63.44%" headers="mcps1.2.3.1.2 "><p id="p1699131919316"><a name="p1699131919316"></a><a name="p1699131919316"></a>一主多备功能，获取cm_server的仲裁模式。共有MAJORITY、MINORITY两种模式，MAJORITY为多数派模式，MINORITY为少数派模式。少数派模式适用于一主多备数据库部署并且只有AZ3存活时，此时cm_server可以进行正常的仲裁业务，非此模式下将仲裁模式设置成少数派成功后，cm会自动将仲裁模式改为多数派，以保证集群正常运转；多数派模式适用于一主多备数据库部署并且各个组件（cm_server，节点）存活数量大于一半的场景。数据库实例正常情况下默认为多数派模式。</p>
<div class="caution" id="note9231439203710"><a name="note9231439203710"></a><a name="note9231439203710"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="p1122639103710"><a name="p1122639103710"></a><a name="p1122639103710"></a>opengauss不支持少数派</p>
</div></div>
</td>
</tr>
<tr id="row17991519113117"><td class="cellrowborder" valign="top" width="36.559999999999995%" headers="mcps1.2.3.1.1 "><p id="p1237992903510"><a name="p1237992903510"></a><a name="p1237992903510"></a>--cm_switchover_az_mode</p>
<p id="p83401424173512"><a name="p83401424173512"></a><a name="p83401424173512"></a>=SWITCHOVER_AZ_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="63.44%" headers="mcps1.2.3.1.2 "><p id="p655611817358"><a name="p655611817358"></a><a name="p655611817358"></a>一主多备功能，获取AZ之间的自动切换开关。共有NON_AUTO、AUTO两种模式，NON_AUTO为非自动切换模式，AUTO为自动切换模式。AUTO模式由主cm_server自动控制AZ1和AZ2之间的节点实例切换。</p>
</td>
</tr>
</tbody>
</table>

**表 11**  view参数

<a name="zh-cn_topic_0116784021_table207722104617"></a>
<table><thead align="left"><tr id="zh-cn_topic_0116784021_row67721210367"><th class="cellrowborder" valign="top" width="29.470000000000002%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0116784021_p139843241269"><a name="zh-cn_topic_0116784021_p139843241269"></a><a name="zh-cn_topic_0116784021_p139843241269"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="70.53%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0116784021_p199867246618"><a name="zh-cn_topic_0116784021_p199867246618"></a><a name="zh-cn_topic_0116784021_p199867246618"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row730813337919"><td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.3.1.1 "><p id="p163098331196"><a name="p163098331196"></a><a name="p163098331196"></a>-v</p>
</td>
<td class="cellrowborder" valign="top" width="70.53%" headers="mcps1.2.3.1.2 "><p id="p11207208477"><a name="p11207208477"></a><a name="p11207208477"></a>显示数据库实例所有节点的静态配置详细信息。</p>
<div class="note" id="note155818124710"><a name="note155818124710"></a><a name="note155818124710"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p6581814476"><a name="p6581814476"></a><a name="p6581814476"></a>相对于cm_ctl view命令，-v 显示内容增加了cmserver、节点组件的编号显示，如下：cmseverInstanceID，datanodeInstanceID。</p>
</div></div>
</td>
</tr>
<tr id="row3618144510122"><td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.3.1.1 "><p id="p146181345121215"><a name="p146181345121215"></a><a name="p146181345121215"></a>-N</p>
</td>
<td class="cellrowborder" valign="top" width="70.53%" headers="mcps1.2.3.1.2 "><p id="p176180458126"><a name="p176180458126"></a><a name="p176180458126"></a>只显示本节点的静态配置信息，即执行cm_ctl view命令的节点的信息，N表示Native。</p>
</td>
</tr>
</tbody>
</table>

**表 12**  setrunmode参数

<a name="table1656519521713"></a>
<table><thead align="left"><tr id="row656520511176"><th class="cellrowborder" valign="top" width="21.802180218021803%" id="mcps1.2.4.1.1"><p id="p155654511171"><a name="p155654511171"></a><a name="p155654511171"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="28.35283528352835%" id="mcps1.2.4.1.2"><p id="p65652516172"><a name="p65652516172"></a><a name="p65652516172"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="49.84498449844985%" id="mcps1.2.4.1.3"><p id="p868045681719"><a name="p868045681719"></a><a name="p868045681719"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row1456505131713"><td class="cellrowborder" valign="top" width="21.802180218021803%" headers="mcps1.2.4.1.1 "><p id="p205654561717"><a name="p205654561717"></a><a name="p205654561717"></a>--xmode</p>
</td>
<td class="cellrowborder" valign="top" width="28.35283528352835%" headers="mcps1.2.4.1.2 "><p id="p656595141715"><a name="p656595141715"></a><a name="p656595141715"></a>指定DCF的运行模式。</p>
</td>
<td class="cellrowborder" valign="top" width="49.84498449844985%" headers="mcps1.2.4.1.3 "><a name="ul114721049101719"></a><a name="ul114721049101719"></a><ul id="ul114721049101719"><li>normal：正常模式。</li><li>minority：少数派模式，需要--votenum指定投票数。</li></ul>
</td>
</tr>
<tr id="row956514518173"><td class="cellrowborder" valign="top" width="21.802180218021803%" headers="mcps1.2.4.1.1 "><p id="p1056520581715"><a name="p1056520581715"></a><a name="p1056520581715"></a>--votenum</p>
</td>
<td class="cellrowborder" valign="top" width="28.35283528352835%" headers="mcps1.2.4.1.2 "><p id="p165651857172"><a name="p165651857172"></a><a name="p165651857172"></a>指定DCF少数派运行方式的投票数。</p>
</td>
<td class="cellrowborder" valign="top" width="49.84498449844985%" headers="mcps1.2.4.1.3 "><p id="p1256585101719"><a name="p1256585101719"></a><a name="p1256585101719"></a>正整数，不高于DCF总副本数。</p>
</td>
</tr>
</tbody>
</table>

**表 13**  changerole参数

<a name="table326418392182"></a>
<table><thead align="left"><tr id="row5264133917189"><th class="cellrowborder" valign="top" width="21.67%" id="mcps1.2.4.1.1"><p id="p122641139121814"><a name="p122641139121814"></a><a name="p122641139121814"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="28.439999999999998%" id="mcps1.2.4.1.2"><p id="p3264739191818"><a name="p3264739191818"></a><a name="p3264739191818"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="49.89%" id="mcps1.2.4.1.3"><p id="p56175205198"><a name="p56175205198"></a><a name="p56175205198"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row18264133919182"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.2.4.1.1 "><p id="p1726433910185"><a name="p1726433910185"></a><a name="p1726433910185"></a>--role</p>
</td>
<td class="cellrowborder" valign="top" width="28.439999999999998%" headers="mcps1.2.4.1.2 "><p id="p18264143931814"><a name="p18264143931814"></a><a name="p18264143931814"></a>DCF模式下，将角色为primary的修改为passive或者follower。</p>
</td>
<td class="cellrowborder" valign="top" width="49.89%" headers="mcps1.2.4.1.3 "><a name="ul9521516141916"></a><a name="ul9521516141916"></a><ul id="ul9521516141916"><li>passive：passive角色。</li><li>follower：follow角色。</li></ul>
</td>
</tr>
</tbody>
</table>

**表 14**  changemember参数

<a name="table27311655104911"></a>
<table><thead align="left"><tr id="row073285510494"><th class="cellrowborder" valign="top" width="22.11%" id="mcps1.2.4.1.1"><p id="p14732455194911"><a name="p14732455194911"></a><a name="p14732455194911"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="36.93%" id="mcps1.2.4.1.2"><p id="p18732155514495"><a name="p18732155514495"></a><a name="p18732155514495"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="40.96%" id="mcps1.2.4.1.3"><p id="p1273285517492"><a name="p1273285517492"></a><a name="p1273285517492"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row17732055144916"><td class="cellrowborder" valign="top" width="22.11%" headers="mcps1.2.4.1.1 "><p id="p14732205513497"><a name="p14732205513497"></a><a name="p14732205513497"></a>--role</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.2 "><p id="p11732195564918"><a name="p11732195564918"></a><a name="p11732195564918"></a>DCF模式下，将角色为primary的修改为passive或者follower。</p>
</td>
<td class="cellrowborder" valign="top" width="40.96%" headers="mcps1.2.4.1.3 "><a name="ul27324551495"></a><a name="ul27324551495"></a><ul id="ul27324551495"><li>passive：passive角色。</li><li>follower：follow角色。</li></ul>
</td>
</tr>
<tr id="row85359260508"><td class="cellrowborder" valign="top" width="22.11%" headers="mcps1.2.4.1.1 "><p id="p653602616508"><a name="p653602616508"></a><a name="p653602616508"></a>--group</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.2 "><p id="p115363266505"><a name="p115363266505"></a><a name="p115363266505"></a>DCF模式下，修改group的值。</p>
</td>
<td class="cellrowborder" valign="top" width="40.96%" headers="mcps1.2.4.1.3 "><p id="p135362266507"><a name="p135362266507"></a><a name="p135362266507"></a>0~2147483647</p>
</td>
</tr>
<tr id="row199431655317"><td class="cellrowborder" valign="top" width="22.11%" headers="mcps1.2.4.1.1 "><p id="p2094316135319"><a name="p2094316135319"></a><a name="p2094316135319"></a>--priority</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.2 "><p id="p8941116195318"><a name="p8941116195318"></a><a name="p8941116195318"></a>DCF模式下，修改priority的值。</p>
</td>
<td class="cellrowborder" valign="top" width="40.96%" headers="mcps1.2.4.1.3 "><p id="p9806144365316"><a name="p9806144365316"></a><a name="p9806144365316"></a>0~2147483647</p>
</td>
</tr>
</tbody>
</table>

**表 15**  start参数

<a name="table45722029132319"></a>
<table><thead align="left"><tr id="row157214292236"><th class="cellrowborder" valign="top" width="44.67%" id="mcps1.2.3.1.1"><p id="p657332992311"><a name="p657332992311"></a><a name="p657332992311"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="55.33%" id="mcps1.2.3.1.2"><p id="p175731429182314"><a name="p175731429182314"></a><a name="p175731429182314"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row4904151813359"><td class="cellrowborder" valign="top" width="44.67%" headers="mcps1.2.3.1.1 "><p id="p190431873518"><a name="p190431873518"></a><a name="p190431873518"></a>--cm_arbitration_mode=ARBITRATION_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="55.33%" headers="mcps1.2.3.1.2 "><p id="p2639256183818"><a name="p2639256183818"></a><a name="p2639256183818"></a>一主多备功能，获取cm_server的仲裁模式。共有MAJORITY、MINORITY两种模式，MAJORITY为多数派模式，MINORITY为少数派模式。少数派模式适用于一主多备数据库部署并且只有AZ3存活时，此时cm_server可以进行正常的仲裁业务，非此模式下将仲裁模式设置成少数派成功后，cm会自动将仲裁模式改为多数派，以保证集群正常运转；多数派模式适用于一主多备数据库部署并且各个组件（cm_server，节点）存活数量大于一半的场景。数据库实例正常情况下默认为多数派模式。</p>
<div class="caution" id="note1463910569387"><a name="note1463910569387"></a><a name="note1463910569387"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="p56391756113812"><a name="p56391756113812"></a><a name="p56391756113812"></a>opengauss不支持少数派</p>
</div></div>
</td>
</tr>
<tr id="row15776210154112"><td class="cellrowborder" valign="top" width="44.67%" headers="mcps1.2.3.1.1 "><p id="p1577741016416"><a name="p1577741016416"></a><a name="p1577741016416"></a><span id="ph207631125194118"><a name="ph207631125194118"></a><a name="ph207631125194118"></a>-I</span></p>
</td>
<td class="cellrowborder" valign="top" width="55.33%" headers="mcps1.2.3.1.2 "><p id="p18777191011413"><a name="p18777191011413"></a><a name="p18777191011413"></a><span id="ph1821712166415"><a name="ph1821712166415"></a><a name="ph1821712166415"></a>指定需要启动的资源实例号，可以通过cm_ctl query -Cv查看资源实例和</span><span id="ph1321761624113"><a name="ph1321761624113"></a><a name="ph1321761624113"></a>实例号的映射关系</span></p>
</td>
</tr>
</tbody>
</table>

**表 16**  reload 参数

<a name="table11377594818"></a>
<table><thead align="left"><tr id="row191374598810"><th class="cellrowborder" valign="top" width="19.07%" id="mcps1.2.3.1.1"><p id="p81371759884"><a name="p81371759884"></a><a name="p81371759884"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="80.93%" id="mcps1.2.3.1.2"><p id="p51371359185"><a name="p51371359185"></a><a name="p51371359185"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row1613551115370"><td class="cellrowborder" valign="top" width="19.07%" headers="mcps1.2.3.1.1 "><p id="p125141917163710"><a name="p125141917163710"></a><a name="p125141917163710"></a>--param</p>
</td>
<td class="cellrowborder" valign="top" width="80.93%" headers="mcps1.2.3.1.2 "><p id="p1751513175372"><a name="p1751513175372"></a><a name="p1751513175372"></a>表明需要加载cm参数，不带此参数则不能执行加载cm参数。</p>
</td>
</tr>
<tr id="row11375597819"><td class="cellrowborder" valign="top" width="19.07%" headers="mcps1.2.3.1.1 "><p id="p7137959988"><a name="p7137959988"></a><a name="p7137959988"></a>--agent | --server</p>
</td>
<td class="cellrowborder" valign="top" width="80.93%" headers="mcps1.2.3.1.2 "><p id="p81379594820"><a name="p81379594820"></a><a name="p81379594820"></a>表明当前需要动态加载cm_server还是cm_agent的参数。</p>
</td>
</tr>
</tbody>
</table>

**表 17**  list参数

<a name="table0914920191018"></a>
<table><thead align="left"><tr id="row16914192061011"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.3.1.1"><p id="p1491413208107"><a name="p1491413208107"></a><a name="p1491413208107"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="81.04%" id="mcps1.2.3.1.2"><p id="p991415208109"><a name="p991415208109"></a><a name="p991415208109"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row10516627123718"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.3.1.1 "><p id="p108223363717"><a name="p108223363717"></a><a name="p108223363717"></a>--param</p>
</td>
<td class="cellrowborder" valign="top" width="81.04%" headers="mcps1.2.3.1.2 "><p id="p082163319379"><a name="p082163319379"></a><a name="p082163319379"></a>此参数为必带参数，表明需要列出cm参数信息。</p>
</td>
</tr>
<tr id="row12914172051015"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.3.1.1 "><p id="p1491442071016"><a name="p1491442071016"></a><a name="p1491442071016"></a>--agent | --server</p>
</td>
<td class="cellrowborder" valign="top" width="81.04%" headers="mcps1.2.3.1.2 "><p id="p1915320111019"><a name="p1915320111019"></a><a name="p1915320111019"></a>此参数为必带参数，表明当前需要查看cm_server还是cm_agent的参数。</p>
</td>
</tr>
</tbody>
</table>

**表 18**  encrypt参数

<a name="table4739105911382"></a>
<table><thead align="left"><tr id="row273916595382"><th class="cellrowborder" valign="top" width="17.61%" id="mcps1.2.3.1.1"><p id="p1740145913817"><a name="p1740145913817"></a><a name="p1740145913817"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="82.39%" id="mcps1.2.3.1.2"><p id="p87401459183813"><a name="p87401459183813"></a><a name="p87401459183813"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row77407599381"><td class="cellrowborder" valign="top" width="17.61%" headers="mcps1.2.3.1.1 "><p id="p16740165913389"><a name="p16740165913389"></a><a name="p16740165913389"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="82.39%" headers="mcps1.2.3.1.2 "><p id="p127407599381"><a name="p127407599381"></a><a name="p127407599381"></a>指定加密类型，支持server、client。默认类型为server。</p>
</td>
</tr>
<tr id="row10308151616412"><td class="cellrowborder" valign="top" width="17.61%" headers="mcps1.2.3.1.1 "><p id="p203087164417"><a name="p203087164417"></a><a name="p203087164417"></a>-D</p>
</td>
<td class="cellrowborder" valign="top" width="82.39%" headers="mcps1.2.3.1.2 "><p id="p1330871613411"><a name="p1330871613411"></a><a name="p1330871613411"></a>指定生成的加密密码文件路径。</p>
</td>
</tr>
</tbody>
</table>

**表 19**  switch参数

<a name="table7591811163812"></a>
<table><thead align="left"><tr id="row116011120380"><th class="cellrowborder" valign="top" width="26.479999999999997%" id="mcps1.2.3.1.1"><p id="p960141133813"><a name="p960141133813"></a><a name="p960141133813"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="73.52%" id="mcps1.2.3.1.2"><p id="p156018113381"><a name="p156018113381"></a><a name="p156018113381"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row760411173813"><td class="cellrowborder" valign="top" width="26.479999999999997%" headers="mcps1.2.3.1.1 "><p id="p1860411173815"><a name="p1860411173815"></a><a name="p1860411173815"></a>--ddb_type=[DDB]</p>
</td>
<td class="cellrowborder" valign="top" width="73.52%" headers="mcps1.2.3.1.2 "><p id="p56091153816"><a name="p56091153816"></a><a name="p56091153816"></a>选择需要切换DDB模式（opengauss只支持DCC模式）。</p>
</td>
</tr>
<tr id="row0601511113819"><td class="cellrowborder" valign="top" width="26.479999999999997%" headers="mcps1.2.3.1.1 "><p id="p10601311203814"><a name="p10601311203814"></a><a name="p10601311203814"></a>--commit</p>
</td>
<td class="cellrowborder" valign="top" width="73.52%" headers="mcps1.2.3.1.2 "><p id="p12601811123819"><a name="p12601811123819"></a><a name="p12601811123819"></a>执行切换会使数据库实例无法选主，需要执行commit恢复数据库实例。</p>
</td>
</tr>
<tr id="row185952324012"><td class="cellrowborder" valign="top" width="26.479999999999997%" headers="mcps1.2.3.1.1 "><p id="p115922315400"><a name="p115922315400"></a><a name="p115922315400"></a>--rollback</p>
</td>
<td class="cellrowborder" valign="top" width="73.52%" headers="mcps1.2.3.1.2 "><p id="p195912239404"><a name="p195912239404"></a><a name="p195912239404"></a>回滚操作，执行切换失败需要执行回滚操作。</p>
</td>
</tr>
</tbody>
</table>

**表 20**  ddb参数

<a name="table9665145942617"></a>
<table><thead align="left"><tr id="row466525912618"><th class="cellrowborder" valign="top" width="24.26%" id="mcps1.2.3.1.1"><p id="p146651459142614"><a name="p146651459142614"></a><a name="p146651459142614"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="75.74%" id="mcps1.2.3.1.2"><p id="p4665185972619"><a name="p4665185972619"></a><a name="p4665185972619"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row116651859182617"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p1966525920261"><a name="p1966525920261"></a><a name="p1966525920261"></a>--put [key] [value]</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p1366575916264"><a name="p1366575916264"></a><a name="p1366575916264"></a>往D<span id="ph1982311188558"><a name="ph1982311188558"></a><a name="ph1982311188558"></a>CC或者</span><span id="ph1669212271153"><a name="ph1669212271153"></a><a name="ph1669212271153"></a>share disk</span>中插入键值对，如果键值对已存在则会修改键key所对应的值value。</p>
</td>
</tr>
<tr id="row566545911263"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p18665185932611"><a name="p18665185932611"></a><a name="p18665185932611"></a>--get [key]</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p9665175915268"><a name="p9665175915268"></a><a name="p9665175915268"></a>查询DCC<span id="ph17669193475615"><a name="ph17669193475615"></a><a name="ph17669193475615"></a>或者</span><span id="ph3546103020515"><a name="ph3546103020515"></a><a name="ph3546103020515"></a>share disk</span>中key对应的value。</p>
</td>
</tr>
<tr id="row15196652912"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p619156132916"><a name="p619156132916"></a><a name="p619156132916"></a>--delete [key]</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p719168299"><a name="p719168299"></a><a name="p719168299"></a>删除DCC<span id="ph18584402562"><a name="ph18584402562"></a><a name="ph18584402562"></a>或者</span><span id="ph88743341458"><a name="ph88743341458"></a><a name="ph88743341458"></a>share disk</span>中指定的键值对。</p>
</td>
</tr>
<tr id="row8171152343111"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p21711123123119"><a name="p21711123123119"></a><a name="p21711123123119"></a>--prefix</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p1117111239317"><a name="p1117111239317"></a><a name="p1117111239317"></a>get或者delete后添加prefix参数，可以实现模糊匹配查询和删除。</p>
</td>
</tr>
<tr id="row5306142533517"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p030642553510"><a name="p030642553510"></a><a name="p030642553510"></a>--cluster_info</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p49771547103512"><a name="p49771547103512"></a><a name="p49771547103512"></a><span id="ph1271714598566"><a name="ph1271714598566"></a><a name="ph1271714598566"></a>DCC部署模式下</span>获取数据库实例信息<span id="ph751716985714"><a name="ph751716985714"></a><a name="ph751716985714"></a>，<span id="ph337113452512"><a name="ph337113452512"></a><a name="ph337113452512"></a>share disk</span>部署模式下不支持该命令</span>。</p>
</td>
</tr>
<tr id="row273185853512"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p1174165853518"><a name="p1174165853518"></a><a name="p1174165853518"></a>--leader_info</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p17741258153514"><a name="p17741258153514"></a><a name="p17741258153514"></a><span id="ph3618152785717"><a name="ph3618152785717"></a><a name="ph3618152785717"></a>DCC部署模式下</span>获取主节点信息<span id="ph1117118326578"><a name="ph1117118326578"></a><a name="ph1117118326578"></a>，<span id="ph8688164717517"><a name="ph8688164717517"></a><a name="ph8688164717517"></a>share disk</span>部署模式下不支持该命令</span>。</p>
</td>
</tr>
<tr id="row1650133010324"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p20511305328"><a name="p20511305328"></a><a name="p20511305328"></a>--help，-h</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p1051730113216"><a name="p1051730113216"></a><a name="p1051730113216"></a>显示D<span id="ph89483216116"><a name="ph89483216116"></a><a name="ph89483216116"></a>DB</span>命令帮助信息。</p>
</td>
</tr>
<tr id="row560803311322"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p106087332320"><a name="p106087332320"></a><a name="p106087332320"></a>--version，-v</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p5608113383215"><a name="p5608113383215"></a><a name="p5608113383215"></a><span id="ph2396101255610"><a name="ph2396101255610"></a><a name="ph2396101255610"></a>DCC部署模式下</span>显示D<span id="ph18238142016568"><a name="ph18238142016568"></a><a name="ph18238142016568"></a>CC</span>版本信息<span id="ph01681226165620"><a name="ph01681226165620"></a><a name="ph01681226165620"></a>，<span id="ph2016812260562"><a name="ph2016812260562"></a><a name="ph2016812260562"></a>share disk</span>部署模式下不支持该命令</span>。</p>
</td>
</tr>
</tbody>
</table>

**表 21**  res参数

<a name="table11658339114119"></a>
<table><thead align="left"><tr id="row0658183919416"><th class="cellrowborder" valign="top" width="43.34%" id="mcps1.2.3.1.1"><p id="p1365833934115"><a name="p1365833934115"></a><a name="p1365833934115"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="56.66%" id="mcps1.2.3.1.2"><p id="p6658039184111"><a name="p6658039184111"></a><a name="p6658039184111"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row156581239144119"><td class="cellrowborder" valign="top" width="43.34%" headers="mcps1.2.3.1.1 "><p id="p114671544152019"><a name="p114671544152019"></a><a name="p114671544152019"></a>--add --res_name=[name] --res_attr=[res_info]</p>
</td>
<td class="cellrowborder" valign="top" width="56.66%" headers="mcps1.2.3.1.2 "><p id="p20867183216283"><a name="p20867183216283"></a><a name="p20867183216283"></a>新增资源配置，name为新增资源的名称，res_info为新增资源的信息。</p>
</td>
</tr>
<tr id="row176584393419"><td class="cellrowborder" valign="top" width="43.34%" headers="mcps1.2.3.1.1 "><p id="p4695076212"><a name="p4695076212"></a><a name="p4695076212"></a>--del --res_name=[name]</p>
</td>
<td class="cellrowborder" valign="top" width="56.66%" headers="mcps1.2.3.1.2 "><p id="p2659739184120"><a name="p2659739184120"></a><a name="p2659739184120"></a>删除资源配置，name为删除资源的名称。</p>
</td>
</tr>
<tr id="row465933954113"><td class="cellrowborder" valign="top" width="43.34%" headers="mcps1.2.3.1.1 "><p id="p765918394416"><a name="p765918394416"></a><a name="p765918394416"></a>--edit --res_name=[name] --res_attr=[res_info]</p>
</td>
<td class="cellrowborder" valign="top" width="56.66%" headers="mcps1.2.3.1.2 "><p id="p26591839124115"><a name="p26591839124115"></a><a name="p26591839124115"></a>修改资源配置，name为被修改资源的名称，res_info为新修改的资源信息。</p>
</td>
</tr>
<tr id="row1659139104117"><td class="cellrowborder" valign="top" width="43.34%" headers="mcps1.2.3.1.1 "><p id="p46599398416"><a name="p46599398416"></a><a name="p46599398416"></a>--edit --res_name=[name] --add_inst=[inst_info]</p>
</td>
<td class="cellrowborder" valign="top" width="56.66%" headers="mcps1.2.3.1.2 "><p id="p19659173911410"><a name="p19659173911410"></a><a name="p19659173911410"></a>新增资源实例，name为新增实例的资源名称，inst_info为新增实例的信息。</p>
</td>
</tr>
<tr id="row765923984120"><td class="cellrowborder" valign="top" width="43.34%" headers="mcps1.2.3.1.1 "><p id="p3659193917413"><a name="p3659193917413"></a><a name="p3659193917413"></a>--edit --res_name=[name] --del_inst=[inst_info]</p>
</td>
<td class="cellrowborder" valign="top" width="56.66%" headers="mcps1.2.3.1.2 "><p id="p765914392416"><a name="p765914392416"></a><a name="p765914392416"></a>删除资源实例，name为删除实例的资源名称，inst_info为删除实例的信息。</p>
</td>
</tr>
<tr id="row106591339164111"><td class="cellrowborder" valign="top" width="43.34%" headers="mcps1.2.3.1.1 "><p id="p16601339114116"><a name="p16601339114116"></a><a name="p16601339114116"></a>--check</p>
</td>
<td class="cellrowborder" valign="top" width="56.66%" headers="mcps1.2.3.1.2 "><p id="p1166014393415"><a name="p1166014393415"></a><a name="p1166014393415"></a>检查资源配置。不合理处会显示Warning，配置不可用才会报错。</p>
</td>
</tr>
</tbody>
</table>

## 命令参考<a name="section129433814222"></a>

-   启动实例：

    ```
    cm_ctl start [-z AVAILABILITY_ZONE [--cm_arbitration_mode=ARBITRATION_MODE]] | [-n NODEID [-D DATADIR]] [-t SECS]
    ```

-   数据库主备倒换：

    ```
    cm_ctl switchover [-z AVAILABILITY_ZONE] | [-n NODEID -D DATADIR [-f]] | [-a] | [-A] [-t SECS]
    ```

-   所有备机停止回放，每个分片中选择一个强制升主：

    ```
    cm_ctl finishredo
    ```

-   重建备节点：

    ```
    cm_ctl build -n NODEID -D DATADIR [-t SECS] [-f] [-b full]
    ```

-   检测实例进程运行状态：

    ```
    cm_ctl check -B BINNAME -T DATAPATH
    ```

-   停止实例：

    ```
    cm_ctl stop [[-z AVAILABILITY_ZONE] | [-n NODEID [-D DATADIR [-R]]]] [-t SECS] [-m SHUTDOWN-MODE]
    ```

-   查询集群状态：

    ```
    cm_ctl query [-z ALL] [-l FILENAME] [-v [-C [-s] [-S] [-d] [-i] [-F] [-x] [-p]] | [-r]] [-t SECS] [--minorityAz=AZ_NAME]
    ```

-   查看集群配置文件：

    ```
    cm_ctl view [-v | -N | -n NODEID] [-l FILENAME]
    ```

-   设置参数：

    ```
    cm_ctl set [--log_level=LOG_LEVEL] [--cm_arbitration_mode=ARBITRATION_MODE] [--cm_switchover_az_mode=SWITCHOVER_AZ_MODE]
    ```

-   设置CM参数：

    ```
    cm_ctl set --param --agent | --server [-n NODEID] -k "PARAMETER='value'"
    ```

-   获取参数：

    ```
    cm_ctl get [--log_level] [--cm_arbitration_mode] [--cm_switchover_az_mode]
    ```

-   设置DCF投票数：

    ```
    cm_ctl setrunmode -n NODEID -D DATADIR  [[--xmode=normal] | [--xmode=minority --votenum=NUM]]
    ```

-   改变dcf角色信息：

    ```
    cm_ctl changerole [--role=PASSIVE | --role=FOLLOWER] -n NODEID -D DATADIR [-t SECS]
    ```

-   改变dcf节点属性：

    ```
    cm_ctl changemember [--role=PASSIVE | --role=FOLLOWER] [--group=xx] [--priority=xx] -n NODEID -D DATADIR [-t SECS]
    ```

-   动态加载CM参数：

    ```
    cm_ctl reload --param [--agent | --server]
    ```

-   列出所有CM参数：

    ```
    cm_ctl list --param [--agent | --server]
    ```

-   加密：

    ```
    cm_ctl encrypt [-M MODE] -D DATADIR
    ```

-   执行DDB命令行：

    ```
    cm_ctl ddb DDB_CMD
    设置：cm_ctl ddb --put [key] [value]
    删除：cm_ctl ddb --delete [key]
    查看DDB命令帮助信息：cm_ctl ddb --help
    ```

-   执行switch ddb命令：

    ```
    cm_ctl switch [--ddb_type=[DDB]] [--commit] [--rollback]
    ```

-   执行res命令：

    ```
    新增资源：cm_ctl res --add --res_name=[name] --res_attr=[res_info]
    删除资源：cm_ctl res --del --res_name=[name]
    修改资源：cm_ctl res --edit --res_name=[name] --res_attr=[res_info]
    新增资源实例：cm_ctl res --edit --res_name=[name] --add_inst=[inst_info]
    删除资源实例：cm_ctl res --edit --res_name=[name] --del_inst=[inst_info]
    检查资源：cm_ctl res --check
    ```


