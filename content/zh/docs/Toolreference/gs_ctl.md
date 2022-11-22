# gs\_ctl<a name="ZH-CN_TOPIC_0289899218"></a>

## 背景信息<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_saed7059efc5d469189c9e53a984ba786"></a>

gs\_ctl是openGauss提供的数据库服务控制工具，可以用来启停数据库服务和查询数据库状态。主要供openGauss管理模块调用。

gs\_ctl工具由操作系统用户omm执行。

-   启动、停止、重启openGauss节点。
-   在不停止数据库的情况下，重新加载配置文件（postgresql.conf，pg\_hba.conf）。
-   主备切换、主备状态查询、重建和重建状态查询。

## 参数说明<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_sfeccdff45fda4d8dacf4cefb2b8103f8"></a>

gs\_ctl参数可分为如下几类：

-   option参数，详细请参见[表1](#table145081017222)。
-   公共参数，详细请参见[表2](#zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68)。
-   start和restart模式的参数，详细请参见[表3](#zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t6d75b31bab9540b284e45222396ae38b)。
-   stop和restart模式的参数，详细请参见[表4](#zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a)。
-   switchover模式的参数，详细请参见[表5](#zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31)。
-   build参数，详细请参见[表6](#zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b)。
-   member参数，详细请参见[表8](#table1055392110383)。
-   changerole参数，详细参见[表9](#table591372895218)。
-   setrunmode参数，详细参见[表10](#table1451519418810)。

    **表 1**  option参数

    <a name="table145081017222"></a>
    
    <table><thead align="left"><tr id="row750120016228"><th class="cellrowborder" valign="top" width="25.3%" id="mcps1.2.3.1.1"><p id="p125001701227"><a name="p125001701227"></a><a name="p125001701227"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="74.7%" id="mcps1.2.3.1.2"><p id="p1350113042215"><a name="p1350113042215"></a><a name="p1350113042215"></a>参数说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row115019017221"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p175017014220"><a name="p175017014220"></a><a name="p175017014220"></a>init</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p750112092213"><a name="p750112092213"></a><a name="p750112092213"></a>创建数据库。</p>
    </td>
    </tr>
    <tr id="row8502002226"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p2050170142211"><a name="p2050170142211"></a><a name="p2050170142211"></a>start</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p650230122210"><a name="p650230122210"></a><a name="p650230122210"></a>启动数据库。</p>
    </td>
    </tr>
    <tr id="row450213017224"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p4502130172216"><a name="p4502130172216"></a><a name="p4502130172216"></a>restart</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p11502110202215"><a name="p11502110202215"></a><a name="p11502110202215"></a>重启数据库。</p>
    </td>
    </tr>
    <tr id="row1150320020225"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p205037092217"><a name="p205037092217"></a><a name="p205037092217"></a>build</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p1750311010229"><a name="p1750311010229"></a><a name="p1750311010229"></a>在主机上重建备实例或级联备实例。</p>
    </td>
    </tr>
    <tr id="row1650310018229"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p195031101222"><a name="p195031101222"></a><a name="p195031101222"></a>stop</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p155031508224"><a name="p155031508224"></a><a name="p155031508224"></a>停止数据库。</p>
    </td>
    </tr>
    <tr id="row19504130162214"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p450313016229"><a name="p450313016229"></a><a name="p450313016229"></a>reload</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p45041702228"><a name="p45041702228"></a><a name="p45041702228"></a>重载配置文件（postgresql.conf, pg_hba.conf）。</p>
    </td>
    </tr>
    <tr id="row45042062216"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p4504503222"><a name="p4504503222"></a><a name="p4504503222"></a>status</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p15042012224"><a name="p15042012224"></a><a name="p15042012224"></a>显示数据库运行状态。</p>
    </td>
    </tr>
    <tr id="row1350550182211"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p105054022211"><a name="p105054022211"></a><a name="p105054022211"></a>finishredo</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p4505140142213"><a name="p4505140142213"></a><a name="p4505140142213"></a>主机故障时，备机停止回放，强制升主。</p>
    </td>
    </tr>
    <tr id="row165052092213"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p95052013227"><a name="p95052013227"></a><a name="p95052013227"></a>failover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p18505130152217"><a name="p18505130152217"></a><a name="p18505130152217"></a>在主机异常时，将备机切换为主机。</p>
    <p id="p1350511052219"><a name="p1350511052219"></a><a name="p1350511052219"></a>切换成功后，需要执行gs_om -t refreshconf 命令记录当前主备机信息，确保gs_om -t refreshconf 命令执行成功，否则再次重启会影响数据库状态。</p>
    </td>
    </tr>
    <tr id="row9506120142216"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p750515032216"><a name="p750515032216"></a><a name="p750515032216"></a>switchover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p135061803228"><a name="p135061803228"></a><a name="p135061803228"></a>在主备机正常时，出于维护的需要，将备机切换为主机，可保证切换过程中数据不丢失。</p>
    <p id="p16506906222"><a name="p16506906222"></a><a name="p16506906222"></a>必须在要切换为主机的备机上，执行switchover命令才会生效。在主机上执行switchover命令，仅作查询使用。</p>
    <p id="p11506705227"><a name="p11506705227"></a><a name="p11506705227"></a>切换成功后，需要执行gs_om -t refreshconf 命令记录当前主备机信息，确保gs_om -t refreshconf 命令执行成功，否则再次重启会影响数据库状态。</p>
    <p id="p1550618072216"><a name="p1550618072216"></a><a name="p1550618072216"></a>switchover命令下发后，命令如果超时返回，后台进程的执行状态可能处于不可确定状态。</p>
    </td>
    </tr>
    <tr id="row1550612020229"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p1506130112218"><a name="p1506130112218"></a><a name="p1506130112218"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p35068018229"><a name="p35068018229"></a><a name="p35068018229"></a>查询主备机之间的状态信息。</p>
    </td>
    </tr>
    <tr id="row1350715072220"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p1550612002220"><a name="p1550612002220"></a><a name="p1550612002220"></a>notify</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p45079019227"><a name="p45079019227"></a><a name="p45079019227"></a>启动后再指定主备机。</p>
    </td>
    </tr>
    <tr id="row1950717022218"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p45078017224"><a name="p45078017224"></a><a name="p45078017224"></a>kill</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p45073013225"><a name="p45073013225"></a><a name="p45073013225"></a>给指定的进程发送信号量。</p>
    </td>
    </tr>
    <tr id="row850715016228"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p13507150102218"><a name="p13507150102218"></a><a name="p13507150102218"></a>querybuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p4507140152210"><a name="p4507140152210"></a><a name="p4507140152210"></a>查看数据库的重建进度。</p>
    </td>
    </tr>
    <tr id="row7555122616527"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p055613263521"><a name="p055613263521"></a><a name="p055613263521"></a>stack</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p1355652620520"><a name="p1355652620520"></a><a name="p1355652620520"></a>获取gaussdb调用栈。</p>
    </td>
    </tr
    </tbody>
    </table>


**表 2**  公共参数

<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_re02c46dcbf4e4581add1ede94a47195b"><th class="cellrowborder" valign="top" width="22.117788221177882%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="30.846915308469153%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r6ae94b168ff1431ebeb1d02a8183345a"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a>-D, --pgdata=DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a>指定数据目录的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a>DATADIR的取值必须为有效的数据目录。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r01437712745143c7b52a1c5f2b9f7b52"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a>-s,  --silent</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p742495310515"><a name="p742495310515"></a><a name="p742495310515"></a>对reload、restart、stop命令仅打印部分提示信息，对其他命令不生效。打印信息如：server promoting、 server shutting down。不打印信息如：waiting for server to shut down、server stopped等提示信息。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r5d93022a354a4f6f863cdc9623106c56"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab7908eb6834847459104aac6fa8283da"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a>-t, --timeout=SECS</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a>等待数据库启动、关闭或者主备切换完成的最大秒数。如果等待超时，命令会结束退出，并通知不再等待。此后，可以通过gs_om -t status --detail或其他查看数据库状态的命令，来确认数据库是否启动、关闭或主备切换成功。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a>取值范围：整型（秒）。</p>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a>默认值：等待数据库启动、停止或者主备切换完成：60秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-V , --version</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>打印gs_ctl的版本信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>-</p>
</td>
</tr>
<tr id="row872439171218"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p1472514912122"><a name="p1472514912122"></a><a name="p1472514912122"></a>-w</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p16725109131210"><a name="p16725109131210"></a><a name="p16725109131210"></a>需要等待操作完成。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p872612991212"><a name="p872612991212"></a><a name="p872612991212"></a>默认值：数据库启动、停止或重新启动时需要等待操作完成。</p>
</td>
</tr>
<tr id="row15946015133"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p4941701135"><a name="p4941701135"></a><a name="p4941701135"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p20951603138"><a name="p20951603138"></a><a name="p20951603138"></a>不用等待操作完成。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1495600132"><a name="p1495600132"></a><a name="p1495600132"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_rda88e0e994ae424dadad636f9e78b7e5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a>-M后面需要跟SERVERMODE参数，表示在启动时指定数据库的启动模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a>SERVERMODE的取值范围：</p>
<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><ul id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"><li>primary：本端以主机模式启动。</li><li>standby：本端以备机模式启动。</li><li>cascade_standby：本端以级联备机模式启动。</li><li>pending：本端处于等待状态，等待提升为主机或者备机。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_row79165943917"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p16108598396"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p16108598396"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p16108598396"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p110125916399"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p110125916399"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p110125916399"></a>-T 后面跟term，升主命令时会用此term作为主机term，build时会连接大于等于此term的主机进行build</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p2106594397"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p2106594397"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_p2106594397"></a>term的取值范围，无符号整型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_row89351326193410"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_p19935152683419"><a name="zh-cn_topic_0287275989_p19935152683419"></a><a name="zh-cn_topic_0287275989_p19935152683419"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_p19935726153414"><a name="zh-cn_topic_0287275989_p19935726153414"></a><a name="zh-cn_topic_0287275989_p19935726153414"></a>打印更多调试信息</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_p1493592615345"><a name="zh-cn_topic_0287275989_p1493592615345"></a><a name="zh-cn_topic_0287275989_p1493592615345"></a>无参数</p>
</td>
</tr>
<tr id="row13980103411719"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p129811534181715"><a name="p129811534181715"></a><a name="p129811534181715"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p6926938132013"><a name="p6926938132013"></a><a name="p6926938132013"></a>生成完成后不自动启动，需要调用者启动。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1698114349172"><a name="p1698114349172"></a><a name="p1698114349172"></a>无参数</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r0297ef20051849eeaa6c1304ff282801"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3327025f553a4190952a4672db74812c"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3327025f553a4190952a4672db74812c"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3327025f553a4190952a4672db74812c"></a>-P PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a>与-U参数配合使用，指定连接本地数据库的用户密码。</p>
<div class="note" id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a>当省略-U参数，且认证方法为trust时，-P参数无效。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r3f82716aafe84968a563d032cd248c85"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a>-U USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_p164055217446"><a name="zh-cn_topic_0287275989_p164055217446"></a><a name="zh-cn_topic_0287275989_p164055217446"></a>指定连接数据库的用户。此参数只能与notify、query、failover、switchover和querybuild参数配合使用。</p>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p107010214249"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p107010214249"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p107010214249"></a>对于域用户，使用DOMAIN\username格式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9a836135fb374d04b5806858c044cde5"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a>取值范围：openGauss中存在的用户。</p>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a>默认值：省略此参数则使用与当前操作系统用户同名的用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r4e2f2b577bcb4896bff694fd6fea6e41"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_af0e38378554e49f69576073cc765f909"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_af0e38378554e49f69576073cc765f909"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_af0e38378554e49f69576073cc765f909"></a>-?, -h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a>显示关于gs_ctl命令行参数的帮助信息。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 3**  start或restart共有参数

<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t6d75b31bab9540b284e45222396ae38b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ra5163707ec6f459aa581508ce3a64fa7"><th class="cellrowborder" valign="top" width="21.38%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.21%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r42ebb4c1c5cd41b0a856b710b85a92ea"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a>-c, --core-file</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a>允许gaussdb进程产生内核文件。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r8f755f6ca8bb430c8bc93b6be21aee87"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a>-l, --log=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a>把服务器日志输出附加在FILENAME文件上。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a>FILENAME的取值为启动数据库服务的用户有权限的文件。</p>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a>例如，data目录下的某文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_rf8dad388443e4dba914ce4e5f7a3c107"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8f940255687342c484301bee3304d0ec"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a>-o OPTIONS</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a>声明要直接传递给由openGauss执行的gaussdb的命令行选项。</p>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a>参数通常都用单或者双引号包围以保证它们作为一个整体传递。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a href="zh-cn_topic_0289899253.md">gaussdb</a>支持的参数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ra613cc55a1f04bd59cd73853322ae8ab"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a>-p PATH-TO-POSTGRES</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aec524f247a2b452882655ed0d498acce"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a>声明gaussdb可执行文件的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a28061e2923834c0c9293440118b10948"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a28061e2923834c0c9293440118b10948"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a28061e2923834c0c9293440118b10948"></a>缺省位于gs_ctl自身所在目录，一般不需要此选项。</p>
</td>
</tr>
</tbody>
</table>

**表 4**  stop和restart共有参数

<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_re62fdea480ab4246aa49656499aec578"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p765714214249"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p765714214249"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p765714214249"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r7831cd85a10a4bb3b4d6c79f8e29eaf2"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a560da27731a646e6a636064b18132803"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a560da27731a646e6a636064b18132803"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a560da27731a646e6a636064b18132803"></a>-m, --mode=MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a>声明关闭模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p742860814249"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p742860814249"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p742860814249"></a>mode的取值：</p>
<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><ul id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ue13279906755488aac7fce36fb412625"><li>fast：不等待客户端中断连接，所有活跃事务都被回滚并且客户端都被强制断开，然后服务器将被关闭。</li><li>immediate：强行关闭，在下次重新启动的时候将导致故障恢复。</li></ul>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a>默认值：fast</p>
</td>
</tr>
</tbody>
</table>

**表 5**  switchover参数

<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_re3e64b56d74d42f4914d7bb1d03aa970"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p797816293442"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p797816293442"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p797816293442"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r9a3a522b0caf495da096a1ff8ba20aee"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a>-m SWITCHOVER-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a>声明双机主备实例正常时切换的切换模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a>mode的取值：</p>
<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><ul id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"><li>fast：不等待客户端中断连接，所有活跃事务都被回滚并且客户端都被强制断开，然后服务器将被切换。</li><li>smart：本版本暂不支持该模式。</li></ul>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a>默认值：fast</p>
</td>
</tr>
</tbody>
</table>
**表 6**  build参数

<a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_r991543695e1942e391e7bb42b7c235fe"><th class="cellrowborder" valign="top" width="21.12%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a98babff2b333444a8845163c25408eac"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a98babff2b333444a8845163c25408eac"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a98babff2b333444a8845163c25408eac"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.45%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.43%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275989_row1566219017310"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_p126622017319"><a name="zh-cn_topic_0287275989_p126622017319"></a><a name="zh-cn_topic_0287275989_p126622017319"></a>-b MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_p1966215010318"><a name="zh-cn_topic_0287275989_p1966215010318"></a><a name="zh-cn_topic_0287275989_p1966215010318"></a>指定重建备机的模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_p887411245513"><a name="zh-cn_topic_0287275989_p887411245513"></a><a name="zh-cn_topic_0287275989_p887411245513"></a>mode的取值：</p>
<p id="zh-cn_topic_0287275989_p13270172819514"><a name="zh-cn_topic_0287275989_p13270172819514"></a><a name="zh-cn_topic_0287275989_p13270172819514"></a>● full：通过全量镜像的方式重新同步 主机的数据目录。</p>
<p id="zh-cn_topic_0287275989_p466319111169"><a name="zh-cn_topic_0287275989_p466319111169"></a><a name="zh-cn_topic_0287275989_p466319111169"></a>● incremental：通过解析Xlog日志获 取主备机差异的数据进行增量修复备机。</p>
<div class="note" id="note885935410392"><a name="note885935410392"></a><a name="note885935410392"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p085915541394"><a name="p085915541394"></a><a name="p085915541394"></a>增量重建适用于主备双主等因日志造成的不一致场景。</p>
</div></div>
<p id="zh-cn_topic_0287275989_p643515574347"><a name="zh-cn_topic_0287275989_p643515574347"></a><a name="zh-cn_topic_0287275989_p643515574347"></a>● 增量重建不适用于一主一备并且没有开启最大高可用的场景，此种场景下需要使用全量重建或者开启最大高可用后再进行增量重建。</p>
<p id="zh-cn_topic_0287275989_p105751436553"><a name="zh-cn_topic_0287275989_p105751436553"></a><a name="zh-cn_topic_0287275989_p105751436553"></a>● 备机数据文件损坏、数据目录丢失 等故障通过增量重建的方式无法修复，此时可通过全量重建的方式重 新修复备机。</p>
<p id="zh-cn_topic_0287275989_p381916183516"><a name="zh-cn_topic_0287275989_p381916183516"></a><a name="zh-cn_topic_0287275989_p381916183516"></a>● auto（不指定）：先增量，根据失败 后是否可以再增量选择继续增量或 者全量，三次增量失败后进行全 量。</p>
<p id="zh-cn_topic_0287275989_p106721111857"><a name="zh-cn_topic_0287275989_p106721111857"></a><a name="zh-cn_topic_0287275989_p106721111857"></a></p>
    <p id="zh-cn_topic_0287275989_p381916183516"><a name="zh-cn_topic_0287275989_p381916183516"></a><a name="zh-cn_topic_0287275989_p381916183516"></a>● standby_full：通过指定的备机ip和port全量重建故障备机。使用该参数时需要同时使用-C蚕食指定镜像的ip和port。</p>
<p id="zh-cn_topic_0287275989_p106721111857"><a name="zh-cn_topic_0287275989_p106721111857"></a><a name="zh-cn_topic_0287275989_p106721111857"></a>默认值：auto</p>
<div class="note" id="note548824714012"><a name="note548824714012"></a><a name="note548824714012"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p13488174715402"><a name="p13488174715402"></a><a name="p13488174715402"></a>重建级联备机需要加上-M cascade_standby参数。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_ra22c49a9c167449bb1a36edb91560c19"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a>-r, --recvtimeout=INTERVAL</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a>指定重建过程中备机日志接收等待主机响应的超时时间。</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a>取值范围：整型（秒）。</p>
<p id="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a><a name="zh-cn_topic_0287275989_zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a>默认值：120秒</p>
<p id="zh-cn_topic_0287275989_p452620194414"><a name="zh-cn_topic_0287275989_p452620194414"></a><a name="zh-cn_topic_0287275989_p452620194414"></a>提示：超时时间需根据业务繁忙程度设置，业务繁忙等待主机的响应时间需加长，建议超时时间=checkpoint的执行时间+1min。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275989_row2029662921416"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_p62971529151411"><a name="zh-cn_topic_0287275989_p62971529151411"></a><a name="zh-cn_topic_0287275989_p62971529151411"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_p13298629141413"><a name="zh-cn_topic_0287275989_p13298629141413"></a><a name="zh-cn_topic_0287275989_p13298629141413"></a>重建结束后，是否自动重启。</p>
<p id="zh-cn_topic_0287275989_p858016150165"><a name="zh-cn_topic_0287275989_p858016150165"></a><a name="zh-cn_topic_0287275989_p858016150165"></a>指定参数场合，不自动重启。</p>
<p id="zh-cn_topic_0287275989_p1232613751612"><a name="zh-cn_topic_0287275989_p1232613751612"></a><a name="zh-cn_topic_0287275989_p1232613751612"></a>未指定场合，自动重启，重启默认最大等待时间是60秒。如果在此时间内数据库未能启动成功，就会报不再等待，命令退出。此后可以通过gs_om -t status --detail或其他查看数据库状态的命令，来确认数据库是否启动成功。</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_p729832991415"><a name="zh-cn_topic_0287275989_p729832991415"></a><a name="zh-cn_topic_0287275989_p729832991415"></a>无参数</p>
</td>
</tr>
</tbody>
</table>


**表 7**  query参数

<a name="zh-cn_topic_0287275989_table198621411133319"></a>
<table><thead align="left"><tr id="zh-cn_topic_0287275989_row2086211117339"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0287275989_p2862181110338"><a name="zh-cn_topic_0287275989_p2862181110338"></a><a name="zh-cn_topic_0287275989_p2862181110338"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0287275989_p88621511133318"><a name="zh-cn_topic_0287275989_p88621511133318"></a><a name="zh-cn_topic_0287275989_p88621511133318"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0287275989_p1986251123315"><a name="zh-cn_topic_0287275989_p1986251123315"></a><a name="zh-cn_topic_0287275989_p1986251123315"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275989_row386211112337"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0287275989_p68621111193318"><a name="zh-cn_topic_0287275989_p68621111193318"></a><a name="zh-cn_topic_0287275989_p68621111193318"></a>-L</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0287275989_p1886241133318"><a name="zh-cn_topic_0287275989_p1886241133318"></a><a name="zh-cn_topic_0287275989_p1886241133318"></a>查询lsn并展示最大长度。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0287275989_p1186261112338"><a name="zh-cn_topic_0287275989_p1186261112338"></a><a name="zh-cn_topic_0287275989_p1186261112338"></a>无参数</p>
</td>
</tr>
</tbody>
</table>

**表 8**  member参数

<a name="table1055392110383"></a>
<table><thead align="left"><tr id="row755315212385"><th class="cellrowborder" valign="top" width="24.072407240724072%" id="mcps1.2.4.1.1"><p id="p1655352143812"><a name="p1655352143812"></a><a name="p1655352143812"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="34.53345334533453%" id="mcps1.2.4.1.2"><p id="p9553202117383"><a name="p9553202117383"></a><a name="p9553202117383"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="41.394139413941396%" id="mcps1.2.4.1.3"><p id="p15553152183810"><a name="p15553152183810"></a><a name="p15553152183810"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row105111348144312"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p1351220486434"><a name="p1351220486434"></a><a name="p1351220486434"></a>--operation</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p155120484435"><a name="p155120484435"></a><a name="p155120484435"></a>openGauss数据库实例，DCF模式下，增删节点的操作。</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><a name="ul3915143164414"></a><a name="ul3915143164414"></a><ul id="ul3915143164414"><li>add： 向数据库实例的DCF节点配置中增加一个节点。</li><li>remove：从数据库实例DCF节点配置中删除一个节点。</li></ul>
</td>
</tr>
<tr id="row055332143813"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p1553821183814"><a name="p1553821183814"></a><a name="p1553821183814"></a>-u, --nodeid</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p75531421113819"><a name="p75531421113819"></a><a name="p75531421113819"></a>新增节点的DCF NODE ID。</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="p175531121183815"><a name="p175531121183815"></a><a name="p175531121183815"></a>无符号整型</p>
</td>
</tr>
<tr id="row19908138183919"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p199097386398"><a name="p199097386398"></a><a name="p199097386398"></a>-i, --ip</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p1490913389393"><a name="p1490913389393"></a><a name="p1490913389393"></a>新增节点与数据库实例DCF模块通信的IP。</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="p3909123816397"><a name="p3909123816397"></a><a name="p3909123816397"></a>字符串。</p>
</td>
</tr>
<tr id="row3672156133914"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p18672105611397"><a name="p18672105611397"></a><a name="p18672105611397"></a>-e, --port</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p967211565397"><a name="p967211565397"></a><a name="p967211565397"></a>新增节点与数据库实例DCF模块通信的port。</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="p206721056183917"><a name="p206721056183917"></a><a name="p206721056183917"></a>整型。</p>
</td>
</tr>
<tr id="row28001336154217"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778753_a7d43e3a7e1794b4ebf93c89155eda61b"><a name="zh-cn_topic_0059778753_a7d43e3a7e1794b4ebf93c89155eda61b"></a><a name="zh-cn_topic_0059778753_a7d43e3a7e1794b4ebf93c89155eda61b"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778753_a03ce63a0d3c4492cb1b6b6133c49f087"><a name="zh-cn_topic_0059778753_a03ce63a0d3c4492cb1b6b6133c49f087"></a><a name="zh-cn_topic_0059778753_a03ce63a0d3c4492cb1b6b6133c49f087"></a>指定数据目录的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778753_af25a984dccd446fcb0332a6dacd533e9"><a name="zh-cn_topic_0059778753_af25a984dccd446fcb0332a6dacd533e9"></a><a name="zh-cn_topic_0059778753_af25a984dccd446fcb0332a6dacd533e9"></a>DATADIR的取值：用户自定义。</p>
</td>
</tr>
</tbody>
</table>

**表 9**  changerole参数

<a name="table591372895218"></a>
<table><thead align="left"><tr id="row29141628125217"><th class="cellrowborder" valign="top" width="24.842484248424842%" id="mcps1.2.4.1.1"><p id="p13914152885210"><a name="p13914152885210"></a><a name="p13914152885210"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="41.824182418241826%" id="mcps1.2.4.1.2"><p id="p14914142811528"><a name="p14914142811528"></a><a name="p14914142811528"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1691452819522"><a name="p1691452819522"></a><a name="p1691452819522"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row4914828115214"><td class="cellrowborder" valign="top" width="24.842484248424842%" headers="mcps1.2.4.1.1 "><p id="p291482865212"><a name="p291482865212"></a><a name="p291482865212"></a>-R, --role</p>
</td>
<td class="cellrowborder" valign="top" width="41.824182418241826%" headers="mcps1.2.4.1.2 "><p id="p591418288526"><a name="p591418288526"></a><a name="p591418288526"></a>openGauss数据库实例，DCF模式下节点角色（需要在角色为primary的节点上使用）。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul1914152813529"></a><a name="ul1914152813529"></a><ul id="ul1914152813529"><li>passive： passive角色。</li><li>follower：follower角色。</li></ul>
</td>
</tr>
<tr id="row159141280529"><td class="cellrowborder" valign="top" width="24.842484248424842%" headers="mcps1.2.4.1.1 "><p id="p179141128115215"><a name="p179141128115215"></a><a name="p179141128115215"></a>-u, --nodeid</p>
</td>
<td class="cellrowborder" valign="top" width="41.824182418241826%" headers="mcps1.2.4.1.2 "><p id="p891413285528"><a name="p891413285528"></a><a name="p891413285528"></a>新增节点的DCF NODE ID。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1891492816521"><a name="p1891492816521"></a><a name="p1891492816521"></a>无符号整型。</p>
</td>
</tr>
<tr id="row59154288524"><td class="cellrowborder" valign="top" width="24.842484248424842%" headers="mcps1.2.4.1.1 "><p id="p3748141573915"><a name="p3748141573915"></a><a name="p3748141573915"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="41.824182418241826%" headers="mcps1.2.4.1.2 "><p id="p3748015103918"><a name="p3748015103918"></a><a name="p3748015103918"></a>指定数据目录的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5749215113916"><a name="p5749215113916"></a><a name="p5749215113916"></a>DATADIR的取值：用户自定义。</p>
</td>
</tr>
</tbody>
</table>

**表 10**  setrunmode参数

<a name="table1451519418810"></a>
<table><thead align="left"><tr id="row18516194117811"><th class="cellrowborder" valign="top" width="24.512451245124513%" id="mcps1.2.4.1.1"><p id="p65163416817"><a name="p65163416817"></a><a name="p65163416817"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="37.58375837583758%" id="mcps1.2.4.1.2"><p id="p155163416818"><a name="p155163416818"></a><a name="p155163416818"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="37.90379037903791%" id="mcps1.2.4.1.3"><p id="p9516741582"><a name="p9516741582"></a><a name="p9516741582"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row115169417819"><td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.1 "><p id="p1516134119817"><a name="p1516134119817"></a><a name="p1516134119817"></a>-v, --votenum</p>
</td>
<td class="cellrowborder" valign="top" width="37.58375837583758%" headers="mcps1.2.4.1.2 "><p id="p451610415815"><a name="p451610415815"></a><a name="p451610415815"></a>投票个数。</p>
</td>
<td class="cellrowborder" valign="top" width="37.90379037903791%" headers="mcps1.2.4.1.3 "><p id="p972411219156"><a name="p972411219156"></a><a name="p972411219156"></a>无符号整型。</p>
</td>
</tr>
<tr id="row1451616412087"><td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.1 "><p id="p05161341488"><a name="p05161341488"></a><a name="p05161341488"></a>-x, --xmode</p>
</td>
<td class="cellrowborder" valign="top" width="37.58375837583758%" headers="mcps1.2.4.1.2 "><p id="p1151614416820"><a name="p1151614416820"></a><a name="p1151614416820"></a>运行模式（在少数派的DN节点上使用）。</p>
</td>
<td class="cellrowborder" valign="top" width="37.90379037903791%" headers="mcps1.2.4.1.3 "><a name="ul752115141516"></a><a name="ul752115141516"></a><ul id="ul752115141516"><li>minority：少数派强起。</li><li>normal：加回。</li></ul>
</td>
</tr>
<tr id="row85161941782"><td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.1 "><p id="p4441172918399"><a name="p4441172918399"></a><a name="p4441172918399"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="37.58375837583758%" headers="mcps1.2.4.1.2 "><p id="p7441162923915"><a name="p7441162923915"></a><a name="p7441162923915"></a>指定数据目录的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="37.90379037903791%" headers="mcps1.2.4.1.3 "><p id="p17441129193914"><a name="p17441129193914"></a><a name="p17441129193914"></a>DATADIR的取值：用户自定义。</p>
</td>
</tr>
</tbody>
</table>


**表 11**  stack参数



<table><thead align="left"><tr id="row42811823161519"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p6281122391516"><a name="p6281122391516"></a><a name="p6281122391516"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p14281162351513"><a name="p14281162351513"></a><a name="p14281162351513"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p8281023191520"><a name="p8281023191520"></a><a name="p8281023191520"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row182819238154"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p42828237159"><a name="p42828237159"></a><a name="p42828237159"></a>-I</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17282423191511"><a name="p17282423191511"></a><a name="p17282423191511"></a>用于指定需要获取调用栈的线程的lwtid。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p528252331511"><a name="p528252331511"></a><a name="p528252331511"></a>正整数</p>
</td>
</tr>
</tbody>
</table>