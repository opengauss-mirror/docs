# gs\_check<a name="ZH-CN_TOPIC_0249632243"></a>

## 背景信息<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_section2466014153117"></a>

gs\_check改进增强，统一化当前系统中存在的各种检查工具，例如[gs\_check](gs_check.md)、[gs\_checkos](gs_checkos.md)等，帮助用户在openGauss运行过程中，全量的检查openGauss运行环境、操作系统环境、网络环境及数据库执行环境，也有助于在openGauss重大操作之前对各类环境进行全面检查，有效保证操作执行成功。

## 注意事项<a name="zh-cn_topic_0237152330_section4290135616319"></a>

-   必须指定-i或-e参数，-i会检查指定的单项，-e会检查对应场景配置中的多项。
-   如果-i参数中不包含root类检查项或-e场景配置列表中没有root类检查项，则不需要交互输入root权限的用户及其密码。
-   可使用--skip-root-items跳过检查项中包含的root类检查，以免需要输入root权限用户及密码。
-   MTU值不一致时可能导致检查缓慢或进程停止响应，当巡检工具出现提示时请修改各节点MTU值一致后再进行巡检。
-   交换机不支持当前设置的MTU值时，即使MTU值一致也会出现通信问题引起进程停止响应，需要根据交换机调整MTU大小。

## 语法<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_sfac1bdc734c0446b9ec13d0ae74a4553"></a>

-   单项检查：

    ```
    gs_check -i ITEM [...] [-U USER] [-L] [-l LOGFILE] [-o OUTPUTDIR] [--skip-root-items][--set][--routing]
    ```

-   场景检查：

    ```
    gs_check -e SCENE_NAME [-U USER] [-L] [-l LOGFILE] [-o OUTPUTDIR] [--skip-root-items] [--time-out=SECS][--set][--routing][--skip-items]
    ```

-   显示帮助信息：

    ```
    gs_check -? | --help
    ```

-   显示版本号信息：

    ```
    gs_check -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_s99b57308f5c84719abe48819d2880cf0"></a>

-   -U

    运行openGauss的用户名称。

    取值范围：运行openGauss的用户名称。

-   -L

    本地执行。

-   -i

    指定检查项。格式-i CheckXX详细的检查项请参见[表1 openGauss状态检查表](#zh-cn_topic_0237152330_zh-cn_topic_0059777799_t48caf3ebc47a4dce88ed8b7132976edd)。

-   -e

    场景检查项。默认的场景有inspect（例行巡检）、upgrade（升级前巡检）、binary\_upgrade（就地升级前巡检）、health（健康检查巡检）、install（安装）等，用户可以根据需求自己编写场景。

-   -l

    指定日志文件路径，指定路径时需添加.log后缀。

-   -o

    指定检查结果输出文件夹路径。

-   --skip-root-items

    跳过需要root权限执行的检查项。

-   --skip-items

    跳过指定的检查项。

-   --format

    设置结果报告的格式。

-   --set

    修复支持设置的Abnormal项。

- --cid

  检查ID，仅被内部check进程使用。

-   --time-out

    设置超时时间。单位为秒，默认为1500s，若用户自定义超时时间不得少于1500s。

-   --routing

    指定业务IP的网段，格式为IP地址:子网掩码。

-   --disk-threshold="PERCENT"

    检查磁盘占用时可选指定告警阈值，可指定1-99之间的整数，不输入则默认为90。检查其他项时不需要该参数。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。

**表 1**  openGauss状态检查表

<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_t48caf3ebc47a4dce88ed8b7132976edd"></a>

<table><thead align="left"><tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r51b833dc5e8143c58149ede8fa1b93d1"><th class="cellrowborder" valign="top" width="13.969999999999999%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p78888171777"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p78888171777"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p78888171777"></a>状态</p>
</th>
<th class="cellrowborder" valign="top" width="24.8%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p207863101088"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p207863101088"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p207863101088"></a>巡检项</p>
</th>
<th class="cellrowborder" valign="top" width="44.43%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p58880171476"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p58880171476"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p58880171476"></a>检查内容</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6883120124818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6883120124818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6883120124818"></a>是否支持--set</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_re931b4b0aec9415aa07f3110eec215d3"><td class="cellrowborder" rowspan="29" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p139541326318"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p139541326318"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p139541326318"></a>os</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15818473327"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15818473327"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15818473327"></a>CheckCPU（检查CPU使用率）</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18255205083218"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18255205083218"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18255205083218"></a>检查主机CPU占用率，如果idle大于30%并且iowait小于30%。则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p158831904482"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p158831904482"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p158831904482"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row2096011252381"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1896132513386"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1896132513386"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1896132513386"></a>CheckFirewall（检查防火墙状态）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p0961725123818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p0961725123818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p0961725123818"></a>检查主机防火墙状态，如果防火墙关闭则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288314013486"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288314013486"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288314013486"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_rcedbff2c7ca748608e2dc2c891fe9122"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p154200104330"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p154200104330"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p154200104330"></a>CheckTimeZone（检查时区一致性）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p118899171471"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p118899171471"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p118899171471"></a>检查<span id="text35991748135915"><a name="text35991748135915"></a><a name="text35991748135915"></a>openGauss</span>内各节点时区，如果时区一致则检查通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p888314010489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p888314010489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p888314010489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row630693411419"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1330619348419"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1330619348419"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1330619348419"></a>CheckSysParams（检查系统参数）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152330_p63081034540"><a name="zh-cn_topic_0237152330_p63081034540"></a><a name="zh-cn_topic_0237152330_p63081034540"></a>检查各节点操作系统参数，判断是否等于预期值。检查项不满足warning域则报warning，不满足NG域则检查项不通过，并打印不满足项。</p>
<p id="zh-cn_topic_0237152330_p9561155235320"><a name="zh-cn_topic_0237152330_p9561155235320"></a><a name="zh-cn_topic_0237152330_p9561155235320"></a>详见<a href="#zh-cn_topic_0237152330_zh-cn_topic_0059777799_s8b7df4cd80bf4a84927d84af2d49b32d">操作系统参数</a>。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18839064818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18839064818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18839064818"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row96726391758"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p36721339958"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p36721339958"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p36721339958"></a>CheckOSVer（检查操作系统版本）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p667317391955"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p667317391955"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p667317391955"></a>检查<span id="text968710522019"><a name="text968710522019"></a><a name="text968710522019"></a>openGauss</span>内各个节点的操作系统版本信息，如果满足版本兼容列表且<span id="text8551857006"><a name="text8551857006"></a><a name="text8551857006"></a>openGauss</span>在同一混搭列表中则检查通过，否则检查不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p168831909483"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p168831909483"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p168831909483"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1789911361061"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118999361762"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118999361762"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118999361762"></a>CheckNTPD（检查NTPD服务）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1689993611614"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1689993611614"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1689993611614"></a>检查系统NTPD服务，如果服务开启且各节点时间误差在1分钟以内则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p38831104484"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p38831104484"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p38831104484"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row334519320714"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1034593574"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1034593574"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1034593574"></a>CheckTHP(检查THP服务)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11345337714"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11345337714"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11345337714"></a>检查系统THP服务，如果服务开启则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588310024810"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588310024810"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588310024810"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row5208181218815"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p32081121489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p32081121489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p32081121489"></a>CheckSshdService(检查sshd服务是否已启动)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13209912283"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13209912283"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13209912283"></a>检查系统是否存在sshd服务，若存在则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108834019489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108834019489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108834019489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1929571696"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p152956118917"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p152956118917"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p152956118917"></a>CheckCrondService(检查crontab服务是否已启动)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p122951011395"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p122951011395"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p122951011395"></a>检查系统是否存在crontab服务，若存在则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3883100114818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3883100114818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3883100114818"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row111450421899"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p814514429920"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p814514429920"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p814514429920"></a>CheckCrontabLeft(检查crontab是否有残留Gauss相关信息)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9146124213913"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9146124213913"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9146124213913"></a>检查crontab是否残留Gauss相关信息，若无该信息则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p78831902482"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p78831902482"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p78831902482"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row84171030161016"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12417143010104"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12417143010104"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12417143010104"></a>CheckDirLeft(检查文件目录是否有残留)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1684810621114"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1684810621114"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1684810621114"></a>检查文件目录（/opt/huawei/Bigdata/ ,/var/log/Bigdata/, /home/<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text203561459476"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text203561459476"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text203561459476"></a>omm</span>）是否存在，（若mount目录包含此目录则忽略）若不存在则查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3883200174819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3883200174819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3883200174819"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row16961423181114"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1597112321110"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1597112321110"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1597112321110"></a>CheckProcessLeft(检查进程是否有残留)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16971023131114"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16971023131114"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16971023131114"></a>检查是否残留gaussdb和<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text112408111814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text112408111814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text112408111814"></a>omm</span>进程，若未残留则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1788300194819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1788300194819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1788300194819"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row565366125"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1666156111216"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1666156111216"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1666156111216"></a>CheckStack(栈深度检查)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16676131219"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16676131219"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16676131219"></a>检查栈深度，若各个节点不一致则报warning ，若大于等于3072则检查项通过，否则不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p488320114811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p488320114811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p488320114811"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1724914911158"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p52503971517"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p52503971517"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p52503971517"></a>CheckOmmUserExist(检查<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text201853210817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text201853210817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text201853210817"></a>omm</span>用户是否存在)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1425017921518"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1425017921518"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1425017921518"></a>检查是否存在<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text124761221185"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text124761221185"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text124761221185"></a>omm</span>用户，若不存在<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text1845216231582"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text1845216231582"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text1845216231582"></a>omm</span>用户则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p8883130164819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p8883130164819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p8883130164819"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row21641355151514"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13164195531511"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13164195531511"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13164195531511"></a>CheckPortConflict(检查数据库节点端口是否占用)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12165185541510"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12165185541510"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12165185541510"></a>检查数据库节点端口是否已被占用，若未占用则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1688319015480"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1688319015480"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1688319015480"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1086718502188"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14867175061814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14867175061814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14867175061814"></a>CheckSysPortRange（检查ip_local_port_range设置范围）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178681250101811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178681250101811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178681250101811"></a>检查ip_local_port_range系统参数范围，若范围在26000~65535则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4883190124819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4883190124819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4883190124819"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row663173561917"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1964163531919"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1964163531919"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1964163531919"></a>CheckEtcHosts（检查/etc/hosts中是否有重复地址以及localhost配置）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4941012172018"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4941012172018"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4941012172018"></a>检查/etc/hosts没有配置localhost检查项不通过，存在带有#openGauss注释的映射则检查项不通过，相同IP不同hostname则检查项不通过，否则通过，若hostname相同，但ip不同检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15883190184815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15883190184815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15883190184815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row588361812204"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15883161813208"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15883161813208"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15883161813208"></a>CheckCpuCount（检查CPU核数）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13883518192015"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13883518192015"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13883518192015"></a>检查CPU核心与可用CPU不符检查项不通过，相符但存在不可用信息Warning。 所有节点CPU信息不相同检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888340184811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888340184811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888340184811"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row18540145112113"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35414515216"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35414515216"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35414515216"></a>CheckHyperThread（检查超线程是否打开）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5542125110219"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5542125110219"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5542125110219"></a>检查超线程，若打开则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178838017484"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178838017484"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178838017484"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row15656155317239"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1065718537231"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1065718537231"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1065718537231"></a>CheckMemInfo（检查内存总大小）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1865715538231"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1865715538231"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1865715538231"></a>检查各节点总内存大小是否一致，若检查结果一致，则检查项通过，否则报warning。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p208837013489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p208837013489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p208837013489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row94708478269"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1747154718267"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1747154718267"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1747154718267"></a>CheckSshdConfig（检查sshd服务配置是否正确）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7638357718"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7638357718"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7638357718"></a>检查/etc/ssh/sshd_config文件，</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4634757919"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4634757919"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4634757919"></a>(a)PasswordAuthentication=yes;</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1263420571317"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1263420571317"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1263420571317"></a>(b)MaxStartups=1000;</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19635457214"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19635457214"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19635457214"></a>(c)UseDNS=no;</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p136350573120"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p136350573120"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p136350573120"></a>(d)ClientAliveInterval大于10800或者等于0</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19635135717115"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19635135717115"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19635135717115"></a>配置如上所示则检查项通过，若a、c配置不正确则报warning，b、d配置不正确则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5883180144817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5883180144817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5883180144817"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row552144913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p661141693"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p661141693"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p661141693"></a>CheckMaxHandle（检查句柄最大设置）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1710141899"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1710141899"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1710141899"></a>检查操作系统最大句柄值，如果该值大于等于1000000则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388313015487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388313015487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388313015487"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row15175559913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7175551697"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7175551697"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7175551697"></a>CheckKernelVer（检查内核版本）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p141805515916"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p141805515916"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p141805515916"></a>检查各节点系统内核版本信息，如果版本信息一致则检查项通过，否则报Warning。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16883807487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16883807487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16883807487"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r0050a3b5d4d64c3181452ce4a6ec9f01"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ab6be58f90f8d407f9e1283ae3e5348d1"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ab6be58f90f8d407f9e1283ae3e5348d1"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ab6be58f90f8d407f9e1283ae3e5348d1"></a>CheckEncoding（检查编码格式）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ab7813a3d3f1f4160890d9fa587556c56"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ab7813a3d3f1f4160890d9fa587556c56"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ab7813a3d3f1f4160890d9fa587556c56"></a>检查<span id="zh-cn_topic_0287275940_text13203144117419"><a name="zh-cn_topic_0287275940_text13203144117419"></a><a name="zh-cn_topic_0287275940_text13203144117419"></a>openGauss</span>内各个节点的系统编码，如果编码一致则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p38845013489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p38845013489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p38845013489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1540220812215"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p44021888216"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p44021888216"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p44021888216"></a>CheckBootItems（检查启动项）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14402887214"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14402887214"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14402887214"></a>检查是否有手动添加的启动项，如果没有则检查通过，否则检查不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p28841084819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p28841084819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p28841084819"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row363284274"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p160286277"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p160286277"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p160286277"></a>CheckDropCache（检查DropCache进程）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1360285271"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1360285271"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1360285271"></a>检查各节点是否有dropcache进程在运行，若有则检查通过，否则检查不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1488414016480"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1488414016480"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1488414016480"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row649971263415"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1650117125342"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1650117125342"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1650117125342"></a>CheckFilehandle（检查文件句柄）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p132777234351"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p132777234351"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p132777234351"></a>此检查项检查以下两项，两项都通过为通过，否则为不通过：</p>
<a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_ul7945113143618"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_ul7945113143618"></a><ul id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_ul7945113143618"><li>检查每个gaussdb进程打开的进程数是否超过80万，不超过则检查通过，否则检查不通过。</li><li>检查是否有slave进程使用的句柄数超过master进程，如果没有则检查通过，否则检查不通过。</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388413018489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388413018489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388413018489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1034313874413"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p183431687449"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p183431687449"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p183431687449"></a>CheckKeyProAdj（检查关键进程<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text11543201019105"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text11543201019105"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text11543201019105"></a>omm</span>_adj的值）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1634398174418"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1634398174418"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1634398174418"></a>检查所有关键进程，如果所有关键进程的<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text133875118104"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text133875118104"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text133875118104"></a>omm</span>_adj值为0，则通过，否则不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1988416094810"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1988416094810"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1988416094810"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row3492359151014"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p174926594109"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p174926594109"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p174926594109"></a>CheckMaxProcMemory（检查max_process_memory参数设置是否合理）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84936592107"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84936592107"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84936592107"></a>检查数据库节点的max_process_memory值，判断该参数的值是否大于1G，若不大于则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1884602481"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1884602481"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1884602481"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_re0c478c32f6c48b89cefe4b9c83f579f"><td class="cellrowborder" rowspan="12" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1945311128311"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1945311128311"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1945311128311"></a>device</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p118892171078"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p118892171078"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p118892171078"></a>CheckSwapMemory（检查交换内存）</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a0a340219b844496f899b391e01017812"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a0a340219b844496f899b391e01017812"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a0a340219b844496f899b391e01017812"></a>检查交换内存和总内存大小，若检查结果为0则检查项通过，否则检查项报Warning大于总内存时检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p188413015483"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p188413015483"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p188413015483"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row8445803315"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p144419816336"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p144419816336"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p144419816336"></a>CheckLogicalBlock（检查磁盘逻辑块）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19451786338"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19451786338"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19451786338"></a>检查磁盘逻辑块大小，若为512则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1988400144818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1988400144818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1988400144818"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_rad429dd269574df1aaf03d6dba539999"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10897122153416"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10897122153416"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10897122153416"></a>CheckIOrequestqueue（检查IO请求）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p19889717575"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p19889717575"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p19889717575"></a>检查IO值，如果该值为32768则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p98841506489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p98841506489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p98841506489"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_row7889917674"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a5e58c302f45e4cd6ac2979db09926035"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a5e58c302f45e4cd6ac2979db09926035"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a5e58c302f45e4cd6ac2979db09926035"></a>CheckMaxAsyIOrequests（检查最大异步IO请求）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p128891317579"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p128891317579"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p128891317579"></a>获取当前异步IO请求值，当前异步IO请求值大于当前节点数据库实例数*1048576和104857600则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288410144811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288410144811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288410144811"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r24faf218c0344fc1ac4ca04bc281a074"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p178896171273"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p178896171273"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p178896171273"></a>CheckIOConfigure（检查IO配置）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a00ba88772065442eabba1ba583613688"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a00ba88772065442eabba1ba583613688"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a00ba88772065442eabba1ba583613688"></a>检查IO配置，如果是deadline则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888410204811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888410204811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888410204811"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r395c0d5d79a34251ad1bec762a75a62f"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_aae3ea8a0701b467bab51a7926dea334f"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_aae3ea8a0701b467bab51a7926dea334f"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_aae3ea8a0701b467bab51a7926dea334f"></a>CheckBlockdev（检查磁盘预读块）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p723952620188"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p723952620188"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p723952620188"></a>检查磁盘预读块大小，如果预读块大小为16384则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11884803488"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11884803488"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11884803488"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row17699121094017"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9700121014405"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9700121014405"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9700121014405"></a>CheckDiskFormat（检查磁盘格式参数）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1170031014017"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1170031014017"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1170031014017"></a>检查磁盘XFS格式信息，如果配置为'rw,noatime,inode64,allocsize=16m'则检查项通过，否则报warning。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288460124815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288460124815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288460124815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row114585213411"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3145165264118"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3145165264118"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3145165264118"></a>CheckInodeUsage（检查磁盘inodes使用率）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19997141884214"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19997141884214"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19997141884214"></a><span id="zh-cn_topic_0287275940_text1449413429412"><a name="zh-cn_topic_0287275940_text1449413429412"></a><a name="zh-cn_topic_0287275940_text1449413429412"></a>openGauss</span>路径（GAUSSHOME/PGHOST/<span id="ph15461922165411"><a name="ph15461922165411"></a><a name="ph15461922165411"></a>GPHOME</span>/GAUSSLOG/tmp及实例目录）</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13997318164215"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13997318164215"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13997318164215"></a>检查以上指定目录使用率，如果使用率超过warning阈值（默认为60%） 报warning超过NG阈值（默认为80%）则检查项不通过，否则通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16884150104812"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16884150104812"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16884150104812"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row0274122774712"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6274102715479"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6274102715479"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6274102715479"></a>CheckSpaceUsage（检查磁盘使用率）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p121412181488"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p121412181488"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p121412181488"></a><span id="text62523134311"><a name="text62523134311"></a><a name="text62523134311"></a>openGauss</span>路径（GAUSSHOME/PGHOST/<span id="ph118771315105417"><a name="ph118771315105417"></a><a name="ph118771315105417"></a>GPHOME</span>/GAUSSLOG/tmp及实例目录）</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p131491813486"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p131491813486"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p131491813486"></a>检查磁盘以上指定目录（目录列表）使用率，如果使用率超过warning阈值（默认为70%） 报warning超过NG阈值（默认为90%）则检查项不通过。<span id="text368011911315"><a name="text368011911315"></a><a name="text368011911315"></a>openGauss</span>路径下检查GAUSSHOME/PGHOST/GPHOME/GAUSSLOG/tmp/data路径的剩余空间，不满足阈值则检查项不通过，否则通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88841505486"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88841505486"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88841505486"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row162171651124813"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p92172515487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p92172515487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p92172515487"></a>CheckDiskConfig（检查磁盘空间大小一致性）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172171651144818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172171651144818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172171651144818"></a>检查磁盘名大小挂载点是否一致，若一致则检查项通过，否则报warning。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p788420104815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p788420104815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p788420104815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row16218443174815"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172196433488"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172196433488"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172196433488"></a>CheckXid（检查CheckXid数值）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3219184319483"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3219184319483"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3219184319483"></a>查询xid的数值，如果大于10亿报Warning，大于18亿则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p488417014816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p488417014816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p488417014816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r5f6d4c6f3d5944fc8b2e06dfe56b51bc"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p128579182507"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p128579182507"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p128579182507"></a>CheckSysTabSize（检查每个实例的系统表容量）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p58891217276"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p58891217276"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p58891217276"></a>如果每一块磁盘的剩余容量大于该磁盘上所有实例的系统表容量总和则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p138842084816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p138842084816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p138842084816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r0387e269e3614e9aa7489e5e0fe863f6"><td class="cellrowborder" rowspan="17" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2298121917549"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2298121917549"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2298121917549"></a>cluster</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13426143719519"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13426143719519"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p13426143719519"></a>CheckClusterState（检查<span id="text7762242145213"><a name="text7762242145213"></a><a name="text7762242145213"></a>openGauss</span>状态）</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p17608507412"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p17608507412"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p17608507412"></a>检查fencedUDF状态，如果fencedUDF状态为down则报warning；检查<span id="text194784231533"><a name="text194784231533"></a><a name="text194784231533"></a>openGauss</span>状态，如果<span id="text1545172118532"><a name="text1545172118532"></a><a name="text1545172118532"></a>openGauss</span>状态为Normal则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1088412017489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1088412017489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1088412017489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_rb4cef177795b4531a9cbad90375676c9"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ae4f27984bda14177872cda3230ec781f"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ae4f27984bda14177872cda3230ec781f"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ae4f27984bda14177872cda3230ec781f"></a>CheckDBParams（检查<span id="text189921918155317"><a name="text189921918155317"></a><a name="text189921918155317"></a>openGauss</span>参数）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p109861837155618"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p109861837155618"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p109861837155618"></a>检查数据库主节点检查共享缓冲区大小和Sem参数。</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p698617372564"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p698617372564"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p698617372564"></a>数据库节点检查共享缓冲区大小和最大连接数。</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19861537195612"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19861537195612"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19861537195612"></a>共享缓冲区需要大于128KB且大于shmmax且大于shmall*PAGESIZE</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p298773711569"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p298773711569"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p298773711569"></a>若存在数据库主节点，则Sem值需大于(数据库节点最大连接数+150)/16向上取整。</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p398713715611"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p398713715611"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p398713715611"></a>以上项完全满足则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188413018486"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188413018486"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188413018486"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r0a5fd8bf84b9414bb3b61a1902384a53"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p825032735719"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p825032735719"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p825032735719"></a>CheckDebugSwitch（检查日志级别）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p41031453125713"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p41031453125713"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p41031453125713"></a>在各节点检查各实例的配置文件中log_min_messages参数的值，为空则认为是Warning，判断日志级别非waring，则报warning。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15884707481"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15884707481"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p15884707481"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_ra3af193edd5b4e4aaa5f7aa7d731aa7e"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3416198587"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3416198587"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3416198587"></a>CheckUpVer（检查升级版本是否一致）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p174281451125812"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p174281451125812"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p174281451125812"></a>检查<span id="text149261226326"><a name="text149261226326"></a><a name="text149261226326"></a>openGauss</span>各个节点上升级包的版本，如果一致则检查项通过，否则检查项不通过。使用时，需指定升级软件包路径。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18884150114818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18884150114818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18884150114818"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_rb090a44b40ea48ab8fb4342d40b91797"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p767795205914"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p767795205914"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p767795205914"></a>CheckDirPermissions（检查目录权限）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p34431641175918"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p34431641175918"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p34431641175918"></a>检查节点目录（实例Xlog路径、GAUSSHOME、GPHOME、PGHOST、GAUSSLOG）权限，如果目录有写入权限且不大于750则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388430174814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388430174814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388430174814"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r58f888539a384cdda695c5be92d4d56c"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p538518210494"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p538518210494"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p538518210494"></a>CheckEnvProfile（检查环境变量）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p107400581303"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p107400581303"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p107400581303"></a>检查节点环境变量（$GAUSSHOME、$LD_LIBRARY_PATH、$PATH），检查CMS/CMA/数据库节点进程的环境变量。如果环境变量存在并配置正确，进程的环境变量存在则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1688490114817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1688490114817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1688490114817"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r1201fa53acb24fdcbee9239e6dcfe43a"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p09617262018"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p09617262018"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p09617262018"></a>CheckGaussVer（检查gaussdb版本）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5372859315"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5372859315"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5372859315"></a>检查各个节点gaussdb版本是否一致，如果版本一致则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588415074811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588415074811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588415074811"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r3a4a763a3faf45a19a9a492f4eae0792"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4240214622"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4240214622"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4240214622"></a>CheckPortRange（检查端口范围）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p290015551223"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p290015551223"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p290015551223"></a>若ip_local_port_range的范围在阈值范围内（默认是26000 65535），并且实例端口不在ip_local_port_range范围内则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178846074815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178846074815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178846074815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1340723615313"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11407183615315"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11407183615315"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11407183615315"></a>CheckReadonlyMode（检查只读模式）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p104081536534"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p104081536534"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p104081536534"></a>检查<span id="text1963715188342"><a name="text1963715188342"></a><a name="text1963715188342"></a>openGauss</span>数据库主节点default_transaction_read_only值若为off则检查通过，否则不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118846084820"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118846084820"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118846084820"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1031416171541"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p831411171945"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p831411171945"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p831411171945"></a>CheckCatchup（检查Catchup）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p431416172042"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p431416172042"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p431416172042"></a>检查gaussdb进程堆栈是否能搜索到CatchupMain函数，若搜索不到则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p788412034815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p788412034815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p788412034815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row673102012518"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3741201053"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3741201053"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3741201053"></a>CheckProcessStatus（检查<span id="text938317582311"><a name="text938317582311"></a><a name="text938317582311"></a>openGauss</span>进程属主）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p167411201656"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p167411201656"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p167411201656"></a>检查  'gaussdb'进程属主，若不存在<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text4843203320814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text4843203320814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text4843203320814"></a>omm</span>以外的属主则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6884100164814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6884100164814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6884100164814"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row149791210266"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p199795101064"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p199795101064"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p199795101064"></a>CheckSpecialFile（特殊文件检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p998019101363"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p998019101363"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p998019101363"></a>检查tmp目录(PGHOST)、OM目录(GPHOME)、日志目录(GAUSSLOG)、data目录、程序目录(GAUSSHOME)下文件是否存在特殊字符以及非<span id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text1080714359816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text1080714359816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_text1080714359816"></a>omm</span>用户的文件，若不存在则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14884160104816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14884160104816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14884160104816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row9134171676"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1013510710713"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1013510710713"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1013510710713"></a>CheckCollector（检查<span id="text19321335410"><a name="text19321335410"></a><a name="text19321335410"></a>openGauss</span>的信息收集）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4135197275"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4135197275"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4135197275"></a>在output目录下查看信息收集是否成功，若收集成功则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2884805482"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2884805482"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2884805482"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row44538535112"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84531852516"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84531852516"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84531852516"></a>CheckLargeFile（检查数据目录大文件）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1645310575111"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1645310575111"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1645310575111"></a>检查各个数据库节点目录是否存在超过4G的文件。任一数据库节点目录及其子目录有超过4G的单个文件，则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588470194815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588470194815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588470194815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row15218041581"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5219184165815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5219184165815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5219184165815"></a>CheckProStartTime（关键进程启动时间检测）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p142198410588"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p142198410588"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p142198410588"></a>检查关键进程启动时间是否间隔超过5分钟，超过则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11884100104814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11884100104814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11884100104814"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row44593351171"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p04591935573"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p04591935573"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p04591935573"></a>CheckDilateSysTab（检查系统表膨胀）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1745983514717"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1745983514717"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1745983514717"></a>检查系统表是否膨胀，若膨胀则不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4884160164814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4884160164814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4884160164814"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1396492717591"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10965227135914"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10965227135914"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10965227135914"></a>CheckMpprcFile（检测环境变量分离文件改动）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1896542755913"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1896542755913"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1896542755913"></a>检查是否存在对环境变量分离文件的改动，若存在则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18856013487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18856013487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18856013487"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_rece962e46c5140efb0195d1487ef50a0"><td class="cellrowborder" rowspan="28" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p14072659154931"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p14072659154931"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p14072659154931"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p489613177716"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p489613177716"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p489613177716"></a>CheckLockNum（检查锁数量）</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p1977465115259"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p1977465115259"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p1977465115259"></a>检查数据库锁数量，查询成功检查项通过。</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388517084812"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388517084812"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388517084812"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r4eb3de9ce9564fae8541899cf3505993"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p3354978199"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p3354978199"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_zh-cn_topic_0058968132_p3354978199"></a>CheckArchiveParameter（检查归档参数）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35819471611"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35819471611"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35819471611"></a>检查数据库归档参数，如果未打开或打开且在数据库节点下则检查项通过， 打开且不在数据库主节点目录下则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19885309487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19885309487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19885309487"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row49678411210"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p189671541142117"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p189671541142117"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p189671541142117"></a>CheckCurConnCount(检查当前连接数)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9967194182110"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9967194182110"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9967194182110"></a>检查数据库连接数，如果连接数小于最大连接数的90%则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178851301483"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178851301483"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178851301483"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1956052811220"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35601828182218"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35601828182218"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35601828182218"></a>CheckCursorNum(检查当前游标数)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p175611328132213"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p175611328132213"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p175611328132213"></a>检查数据库的游标数，检查成功则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7885100204812"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7885100204812"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7885100204812"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1454980102315"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1955420172312"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1955420172312"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1955420172312"></a>CheckMaxDatanode(检查comm_max_datanode参数值范围小于数据库节点个数)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18554160122314"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18554160122314"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18554160122314"></a>检查最大数据库节点数，若最大数据库节点数小于xml配置的节点数*数据库节点数（默认值为90*5）报warning，否则检查项通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388515084817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388515084817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p388515084817"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row159501122192419"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p695062232415"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p695062232415"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p695062232415"></a>CheckPgPreparedXacts(检查残留两阶段事务)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5951112272412"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5951112272412"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5951112272412"></a>检查pgxc_prepared_xacts参数，如果不存在二阶段事务则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p158851800480"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p158851800480"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p158851800480"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row72101927202517"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10210142712515"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10210142712515"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10210142712515"></a>CheckPgxcgroup(检查pgxc_group表中需要重分布的个数)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p192111327122517"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p192111327122517"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p192111327122517"></a>检查pgxc_group表中需要重分布的个数，检查结果为0则通过， 否则不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2885140164816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2885140164816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p2885140164816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row87581311162614"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p147597119266"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p147597119266"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p147597119266"></a>CheckLockState(<span id="text14974471218"><a name="text14974471218"></a><a name="text14974471218"></a>openGauss</span>是否被锁)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11759111202610"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11759111202610"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11759111202610"></a>检查<span id="text17535152481211"><a name="text17535152481211"></a><a name="text17535152481211"></a>openGauss</span>是否被锁，若<span id="text203429278129"><a name="text203429278129"></a><a name="text203429278129"></a>openGauss</span>被锁则不通过，否则检查项通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p888510064817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p888510064817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p888510064817"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row10770144617263"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1677111460261"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1677111460261"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1677111460261"></a>CheckIdleSession(检查业务停止)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p146551617585"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p146551617585"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p146551617585"></a>检查非空闲会话数，如果数量为0则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88851908489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88851908489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88851908489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row178761737112711"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1687683732716"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1687683732716"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1687683732716"></a>CheckDBConnection(检查数据库连接)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12876537122719"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12876537122719"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12876537122719"></a>检查能否连接数据库，如果连接成功则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188520094814"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188520094814"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188520094814"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row9530101314283"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1853117132281"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1853117132281"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1853117132281"></a>CheckGUCValue(GUC参数检查)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p8531413132810"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p8531413132810"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p8531413132810"></a>检查(max_connections + max_prepared_transactions) * max_locks_per_transaction的值，若该值大于等于1000000则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18851074816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18851074816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18851074816"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row6213122814292"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172142028102912"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172142028102912"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p172142028102912"></a>CheckPMKData(检查PMK异常数据)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p42148283292"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p42148283292"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p42148283292"></a>检查数据库PMK schema是否包含有异常数据，如果不存在异常数据则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p68856084818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p68856084818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p68856084818"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row116211351308"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4622175143010"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4622175143010"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p4622175143010"></a>CheckSysTable(检查系统表)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p362217553010"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p362217553010"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p362217553010"></a>检查系统表，检查成功则检查项通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p128850016484"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p128850016484"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p128850016484"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row16434144545816"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p843444510581"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p843444510581"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p843444510581"></a>CheckSysTabSize（检查每个实例的系统表容量）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7434134555811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7434134555811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7434134555811"></a>如果每一块磁盘的剩余容量大于该磁盘上所有实例的系统表容量总和则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178851109489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178851109489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178851109489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_row23371862154931"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p66143576154931"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p66143576154931"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p66143576154931"></a>CheckTableSpace(检查表空间路径)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p56029454154931"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p56029454154931"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_p56029454154931"></a>表空间路径和<span id="text17191553101913"><a name="text17191553101913"></a><a name="text17191553101913"></a>openGauss</span>路径之间不能存在嵌套且表空间路径相互不能存在嵌套，则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p288516016485"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p288516016485"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p288516016485"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row13583400153854"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p52151908153854"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p52151908153854"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p52151908153854"></a>CheckTableSkew（检查表级别数据倾斜）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p53153326153854"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p53153326153854"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p53153326153854"></a>若存在表在<span id="text177531824142011"><a name="text177531824142011"></a><a name="text177531824142011"></a>openGauss</span>各数据库节点上的数据分布不均衡，且分布数据最多的数据库节点比最低的数据库节点所分布的数据多100000条以上，则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1488530124811"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1488530124811"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1488530124811"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row29611164153937"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p21983277153937"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p21983277153937"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p21983277153937"></a>CheckDNSkew（检查数据库节点级别数据分布倾斜）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35525501153937"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35525501153937"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p35525501153937"></a>检查数据库节点级别的表倾斜数据，若分布数据最高的数据库节点比分布数据最低的数据库节点数据量高于5%，则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p20885120104818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p20885120104818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p20885120104818"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row58812311153946"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p36734871153946"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p36734871153946"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p36734871153946"></a>CheckUnAnalyzeTable（检查未做analyze的表）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p67074291153946"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p67074291153946"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p67074291153946"></a>若存在未做analyze的表，并且表中至少包含一条数据，则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288520124819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288520124819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1288520124819"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row59041161416"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p99151101414"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p99151101414"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p99151101414"></a>CheckCreateView（创建视图检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p179161161410"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p179161161410"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p179161161410"></a>创建视图时，如果查询语句中含有子查询，并且子查询结果查询解析和重写之后存在别名重复，检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388510064817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388510064817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1388510064817"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row2463183561619"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3463635101619"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3463635101619"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p3463635101619"></a>CheckHashIndex（hash index语法检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84631335131614"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84631335131614"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p84631335131614"></a>如果存在hash index则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19885100485"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19885100485"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19885100485"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row983613733611"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88361437153615"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88361437153615"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p88361437153615"></a>CheckNextvalInDefault（检查Default表达式中包含nextval（sequence））</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1983693713363"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1983693713363"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1983693713363"></a>检查Default表达式中是否包含nextval(sequence)，若包含则不通过，否则通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p688513064815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p688513064815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p688513064815"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row172968126384"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p429731214381"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p429731214381"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p429731214381"></a>CheckNodeGroupName（Node group编码格式检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5297111219381"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5297111219381"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5297111219381"></a>存在非SQL_ASCII字符的Node Group名称则检查不通过，不存在则检查通过 。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18885403485"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18885403485"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18885403485"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1429113124120"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1529111324115"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1529111324115"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1529111324115"></a>CheckPgxcRedistb（检查重分布残留的临时表 ）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14291163174117"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14291163174117"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p14291163174117"></a>检查数据库中是否存在重分布残留的临时表，若不存在则检查通过，否则检查不通过 。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108851701487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108851701487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108851701487"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row14138115462"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9138181104617"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9138181104617"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p9138181104617"></a>CheckReturnType（用户自定义函数返回值类型检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p161383174614"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p161383174614"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p161383174614"></a>检查用户自定义函数是否包含非法返回类型，若包含则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118855054817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118855054817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p118855054817"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row19878164044713"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11878154010476"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11878154010476"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11878154010476"></a>CheckSysadminUser（检查sysadmin用户）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10878174017472"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10878174017472"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10878174017472"></a>检查除<span id="text18521039122413"><a name="text18521039122413"></a><a name="text18521039122413"></a>openGauss</span>属主外是否存在数据库管理员用户，若存在则不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16885602489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16885602489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p16885602489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row668434213118"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10684134216110"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10684134216110"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p10684134216110"></a>CheckTDDate（TD数据库中orc表date类型列检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p186849421116"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p186849421116"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p186849421116"></a>检查TD模式数据库下的orc表中是否包含date类型的列，若包含检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588513074816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588513074816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588513074816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row186864326264"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12686832182611"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12686832182611"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12686832182611"></a>CheckDropColumn（drop column检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6686132142613"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6686132142613"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p6686132142613"></a>如果存在drop column的表，则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888530174816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888530174816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1888530174816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row59311665153953"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p22392509153953"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p22392509153953"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p22392509153953"></a>CheckDiskFailure（检查磁盘故障）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p51016997153953"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p51016997153953"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p51016997153953"></a>对<span id="text4976205419340"><a name="text4976205419340"></a><a name="text4976205419340"></a>openGauss</span>中的所有数据做全量查询，若存在查询错误则检查不通过，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108858018482"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108858018482"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108858018482"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_r9026797791aa43ad896fa3e312414c4e"><td class="cellrowborder" rowspan="10" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p26871935143214"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p26871935143214"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p26871935143214"></a>network</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a4e4cdce379d342d984ae8ba2850e6a52"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a4e4cdce379d342d984ae8ba2850e6a52"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_a4e4cdce379d342d984ae8ba2850e6a52"></a>CheckPing(检查网络通畅)</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1973392743316"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1973392743316"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1973392743316"></a>检查<span id="text852357153417"><a name="text852357153417"></a><a name="text852357153417"></a>openGauss</span>内所有节点的互通性，如果各节点所有IP均可ping通则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178858084816"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178858084816"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p178858084816"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row18763524336"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p27617522332"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p27617522332"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p27617522332"></a>CheckRXTX(检查网卡RXTX值)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1566119285356"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1566119285356"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1566119285356"></a>检查节点backIP的RX/TX值，如果该值为4096则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p48851709489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p48851709489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p48851709489"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row9348205983511"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p173483598359"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p173483598359"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p173483598359"></a>CheckMTU(检查网卡MTU值)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1734845917355"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1734845917355"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1734845917355"></a>检查节点backIP对应的网卡MTU值（ bond后的物理网卡要确保一致），如果该值不是8192或1500报warning若<span id="text128785918345"><a name="text128785918345"></a><a name="text128785918345"></a>openGauss</span>MTU值一致则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p48857034819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p48857034819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p48857034819"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row167431638123612"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1974423815362"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1974423815362"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1974423815362"></a>CheckNetWorkDrop(检查网络掉包率)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1774473863614"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1774473863614"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1774473863614"></a>检查各IP1分钟内网络掉包率，如果不超过1%则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108852013488"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108852013488"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p108852013488"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1418243363716"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p141825333379"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p141825333379"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p141825333379"></a>CheckBond(检查网卡绑定模式)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p163628164386"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p163628164386"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p163628164386"></a>检查是否有配置BONDING_OPTS或BONDING_MODULE_OPTS，若没有配置则报warning。检查各节点bond模式是否一致，如果同时满足则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588614012489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588614012489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p588614012489"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row654814264313"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11548154214316"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11548154214316"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p11548154214316"></a>CheckMultiQueue(检查网卡多队列)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12652154317447"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12652154317447"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12652154317447"></a>检查cat /proc/interrupts，判断是否开启网卡多队列且绑定不同CPU，如果满足则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18886307480"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18886307480"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p18886307480"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row488303013452"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188413307451"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188413307451"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188413307451"></a>CheckUsedPort(检查随机端口使用数量)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12117504466"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12117504466"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p12117504466"></a>检查net.ipv4.ip_local_port_range，范围大于等于OS默认值通过（32768-61000）;</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p921135019469"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p921135019469"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p921135019469"></a>检查TCP协议随机端口数，小于总随机端口数的80%通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p58869018489"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p58869018489"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p58869018489"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1276312161090"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p976451617910"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p976451617910"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p976451617910"></a>CheckNICModel（网卡型号和驱动版本一致性检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p22518225415"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p22518225415"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p22518225415"></a>检查各个节点的网卡型号以及驱动版本是否一致，一致则通过，否则报warning。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188610034817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188610034817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1188610034817"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row1748855871316"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p134881158191312"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p134881158191312"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p134881158191312"></a>CheckRouting（本地路由表检查）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5488058101316"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5488058101316"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p5488058101316"></a>检查各节点在业务IP网段的IP个数，超过1个则报warning，否则检查通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p188865019487"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p188865019487"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p188865019487"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_rb677d671b7bc4d068f2732f5e9a3cea3"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p762065654618"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p762065654618"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p762065654618"></a>CheckNetSpeed(检查网卡接收带宽，ping值，丢包率)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_aa3f091afaf8c4a6f86aa755b40e2ceec"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_aa3f091afaf8c4a6f86aa755b40e2ceec"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_zh-cn_topic_0059777799_aa3f091afaf8c4a6f86aa755b40e2ceec"></a>网络满载时，检查网卡平均接收带宽大于600MB通过;</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7248318124817"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7248318124817"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p7248318124817"></a>网络满载时，检查网络ping值，小于1秒通过;</p>
<p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1624801814815"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1624801814815"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p1624801814815"></a>网络满载时，检查网卡丢包率，小于1%通过。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p688660134818"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p688660134818"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p688660134818"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_row154751136492"><td class="cellrowborder" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p447523204919"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p447523204919"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p447523204919"></a>other</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p184751317492"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p184751317492"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p184751317492"></a>CheckDataDiskUsage(检查数据库节点磁盘空间使用率)</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19476738497"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19476738497"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p19476738497"></a>检查磁盘数据库节点目录使用率，如果使用率低于90%则检查项通过，否则检查项不通过。</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p28867044819"><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p28867044819"></a><a name="zh-cn_topic_0287275940_zh-cn_topic_0237152330_p28867044819"></a>否</p>
</td>
</tr>
</tbody>
</table>







>![](public_sys-resources/icon-note.gif) **说明：** 
>CheckNetSpeed检查项：
>
>-   CheckNetSpeed不支持-L本地检查模式，-L模式无法构造网络压力，检查的结果不准确。
>-   在节点数小于6时，speed\_test构造的网络压力可能无法跑满带宽，可能会造成检查结果不准确。

## 用户自定义场景<a name="zh-cn_topic_0237152330_section1111595434113"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  在script/gspylib/inspection/config路径下新建场景配置文件scene\_XXX.xml。
3.  将检查项写进场景配置文件中，书写格式为：

    ```
    <?xml version="1.0" encoding="utf-8" ?>
    <scene name="XXX" desc="check cluster parameters before XXX.">
    <configuration/>
    <allowitems>
    <item name="CheckXXX"/>
    <item name="CheckXXX"/>
    </allowitems>
    </scene>
    ```

    item name为检查项名称

    注：用户需自行保证自定义xml的正确性

4.  在home/package/script/gspylib/inspection/config执行如下命令，将此文件分发至执行检查的各个节点

    ```
    scp scene_upgrade.xml SIA1000068994：home/package/script/gspylib/inspection/config/
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >home/package/script/gspylib/inspection/config就是新建的场景配置文件的绝对路径。

5.  换至omm用户，执行以下命令查看检查结果。

    ```
    gs_check  -e XXX
    ```


## **用户自定义检查项**<a name="zh-cn_topic_0237152330_section1497431723111"></a>

1.  新增巡检项配置，修改script/gspylib/inspection/config/items.xml文件，格式如下：

    ```
    <checkitem id="10010" name="CheckCPU">
    <title>
    <zh>检查CPU占用率</zh>
    <en>Check CPU Idle and I/O wait</en>
    </title>
    <threshold>
    StandardCPUIdle=30;
    StandardWIO=30
    </threshold>
    <suggestion>
    <zh>如果idle不足 CPU负载过高，请扩容CPU节点，如果iowait过高，则磁盘为瓶颈，更换高性能磁盘</zh>
    </suggestion>
    <standard>
    <zh>检查主机CPU占用率，如果idle大于30%并且iowait小于30%，则检查项通过，否则检查项不通过</zh>
    </standard>
    <category>os</category>
    <permission>user</permission>
    <scope>all</scope>
    <analysis>default</analysis>
    </checkitems>
    ```

    -   id：巡检项id。
    -   name：巡检项脚本名， 和巡检项脚本文件名相同。
    -   title: 巡检项描述名称 （支持多语言）。

        <zh\>：中文版检查内容。

        <en\>：英文版检查内容。

    -   standard：巡检项标准说明（支持多语言）。
    -   suggestion： 巡检项修复建议说明（支持多语言）。
    -   threshold：巡检项阈值定义，多值之间使用分号隔开，示例Key1=Value1;Key2=Value2。
    -   category： 巡检项分类，可选参数：os，device，network，cluster，database，other。
    -   permission： 巡检项需要的执行权限，可选参数：root，user默认为user（普通用户）。
    -   scope：巡检项执行的节点范围，可选参数：cn-仅在数据库主节点执行，local-仅在当前节点执行，all-在openGauss所有节点执行，默认为all。
    -   analysis：巡检项执行结果分析方式，default-检查每个节点的结果，所有节点检查项通过，则最终检查通过，consistent-openGauss内所有节点一致性检查，单节点仅返回结果，各个节点结果一致则判定检查通过，custom-自定义结果分析方式，默认为default。

    注：用户需保证自定义xml的正确性

2.  新建检查脚本，脚本名称格式遵循CheckXXXX.py，必须以Check开头，脚本放置在script/gspylib/inspection/items目录下，该目录下脚本安装巡检项分类组织，每个分类一个单独的文件夹，巡检项脚本放置在对应的分类文件夹中。格式如下：

    ```
    class CheckCPU(BaseItem):
    def __init__(self):
    super(CheckCPU, self).__init__(self.__class__.__name__)
    self.idle = None
    self.wio = None
    self.standard = None
    
    def preCheck(self):
    # check the threshold was set correctly
    if (not self.threshold.has_key('StandardCPUIdle')
    or not self.threshold.has_key('StandardWIO')):
    raise Exception("threshold can not be empty")
    self.idle = self.threshold['StandardCPUIdle']
    self.wio = self.threshold['StandardWIO']
    
    # format the standard by threshold
    self.standard = self.standard.format(idle=self.idle, iowait=self.wio)
    
    def doCheck(self):
    cmd = "sar 1 5 2>&1"
    output = SharedFuncs.runShellCmd(cmd)
    self.result.raw = output
    # check the result with threshold
    d = next(n.split() for n in output.splitlines() if "Average" in n)
    iowait = d[-3]
    idle = d[-1]
    rst = ResultStatus.OK
    vals = []
    if (iowait > self.wio):
    rst = ResultStatus.NG
    vals.append("The %s actual value %s is greater than expected value %s" % ("IOWait", iowait, self.wio))
    if (idle < self.idle):
    rst = ResultStatus.NG
    vals.append("The %s actual value %s is less than expected value %s" % ("Idle", idle, self.idle))
    self.result.rst = rst
    if (vals):
    self.result.val = "\n".join(vals)
    ```

    所有脚本基于BaseItem基类开发，基类定义的通用的检查流程，通用的检查结果分析方法，默认的结果输出格式。可扩展方法：

    -   doCheck:  该方法包含该检查项具体的检查方法，检查结果格式如下：

        result.rst ---   检查结果状态，可选参数:

        -   OK – 检查项完成，结果通过。
        -   NA – 当前节点不涉及该检查项。
        -   NG – 检查项完成，结果不通过。
        -   WARNING – 检查项完成，结果警告。
        -   ERROR – 检查项发生内部错误，未完成检查。

    -   preCheck: 检查前条件判定，内置两种实现：cnPreCheck – 用于检查当前执行节点是否包含数据库主节点实例，localPreCheck – 用于检查当前执行节点是否指定节点。可通过巡检项配置文件中的scope参数进行配置。 可重载该方法实现自定义的前置检查
    -   postAnalysis：检查结果分析方法，内置两种实现：default、consistent。可通过巡检项配置文件中的analysis参数进行配置。可重载该方法实现自定义的结果分析。

    注：用户自定义的检查项名称不得与已有检查项名称相同，同时用户需保证自定义检查项脚本的规范性。

3.  将此脚本分发至所有的执行节点。
4.  以omm用户登录，执行以下命令，查看结果。

    本地执行：

    ```
    gs_check -i CheckXXX  -L
    ```

    非本地执行：

    ```
    gs_check  -i  CheckXXX
    ```


## 操作系统参数<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_s8b7df4cd80bf4a84927d84af2d49b32d"></a>

**表 2**  操作系统参数

<a name="zh-cn_topic_0237152330_table174711620568"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152330_row134711465560"><th class="cellrowborder" valign="top" width="24.08240824082408%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152330_p258931915710"><a name="zh-cn_topic_0237152330_p258931915710"></a><a name="zh-cn_topic_0237152330_p258931915710"></a>参数名称</p>
</th>
<th class="cellrowborder" valign="top" width="52.04520452045204%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152330_p1358931917574"><a name="zh-cn_topic_0237152330_p1358931917574"></a><a name="zh-cn_topic_0237152330_p1358931917574"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="23.87238723872387%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152330_p6590119125718"><a name="zh-cn_topic_0237152330_p6590119125718"></a><a name="zh-cn_topic_0237152330_p6590119125718"></a>推荐取值</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152330_row647214625611"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1125722695711"><a name="zh-cn_topic_0237152330_p1125722695711"></a><a name="zh-cn_topic_0237152330_p1125722695711"></a>net.ipv4.tcp_max_tw_buckets</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p182571426125710"><a name="zh-cn_topic_0237152330_p182571426125710"></a><a name="zh-cn_topic_0237152330_p182571426125710"></a>表示同时保持TIME_WAIT状态的TCP/IP连接最大数量。如果超过所配置的取值，TIME_WAIT将立刻被释放并打印警告信息。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p42571268571"><a name="zh-cn_topic_0237152330_p42571268571"></a><a name="zh-cn_topic_0237152330_p42571268571"></a>10000</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row4472364569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p59261713115813"><a name="zh-cn_topic_0237152330_p59261713115813"></a><a name="zh-cn_topic_0237152330_p59261713115813"></a>net.ipv4.tcp_tw_reuse</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p169261713135818"><a name="zh-cn_topic_0237152330_p169261713135818"></a><a name="zh-cn_topic_0237152330_p169261713135818"></a>允许将TIME-WAIT状态的sockets重新用于新的TCP连接。</p>
<a name="zh-cn_topic_0237152330_ul99261213185819"></a><a name="zh-cn_topic_0237152330_ul99261213185819"></a><ul id="zh-cn_topic_0237152330_ul99261213185819"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p1692713134587"><a name="zh-cn_topic_0237152330_p1692713134587"></a><a name="zh-cn_topic_0237152330_p1692713134587"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row94736616569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p292717139588"><a name="zh-cn_topic_0237152330_p292717139588"></a><a name="zh-cn_topic_0237152330_p292717139588"></a>net.ipv4.tcp_tw_recycle</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1992811310580"><a name="zh-cn_topic_0237152330_p1992811310580"></a><a name="zh-cn_topic_0237152330_p1992811310580"></a>表示开启TCP连接中TIME-WAIT状态sockets的快速回收。</p>
<a name="zh-cn_topic_0237152330_ul17928101395817"></a><a name="zh-cn_topic_0237152330_ul17928101395817"></a><ul id="zh-cn_topic_0237152330_ul17928101395817"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p1928613155814"><a name="zh-cn_topic_0237152330_p1928613155814"></a><a name="zh-cn_topic_0237152330_p1928613155814"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row4676171295719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p11929181313586"><a name="zh-cn_topic_0237152330_p11929181313586"></a><a name="zh-cn_topic_0237152330_p11929181313586"></a>net.ipv4.tcp_keepalive_time</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p199291139588"><a name="zh-cn_topic_0237152330_p199291139588"></a><a name="zh-cn_topic_0237152330_p199291139588"></a>表示当keepalive启用的时候，TCP发送keepalive消息的频度。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p892911355817"><a name="zh-cn_topic_0237152330_p892911355817"></a><a name="zh-cn_topic_0237152330_p892911355817"></a>30</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row17677191218575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1492941395814"><a name="zh-cn_topic_0237152330_p1492941395814"></a><a name="zh-cn_topic_0237152330_p1492941395814"></a>net.ipv4.tcp_keepalive_probes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p49291138584"><a name="zh-cn_topic_0237152330_p49291138584"></a><a name="zh-cn_topic_0237152330_p49291138584"></a>在认定连接失效之前，发送TCP的keepalive探测包数量。这个值乘以tcp_keepalive_intvl之后决定了一个连接发送了keepalive之后可以有多少时间没有回应。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p5930181310585"><a name="zh-cn_topic_0237152330_p5930181310585"></a><a name="zh-cn_topic_0237152330_p5930181310585"></a>9</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row1467720124571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1593010138588"><a name="zh-cn_topic_0237152330_p1593010138588"></a><a name="zh-cn_topic_0237152330_p1593010138588"></a>net.ipv4.tcp_keepalive_intvl</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p59301313185815"><a name="zh-cn_topic_0237152330_p59301313185815"></a><a name="zh-cn_topic_0237152330_p59301313185815"></a>当探测没有确认时，重新发送探测的频度。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p4931151314582"><a name="zh-cn_topic_0237152330_p4931151314582"></a><a name="zh-cn_topic_0237152330_p4931151314582"></a>30</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row885193417577"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p209310131583"><a name="zh-cn_topic_0237152330_p209310131583"></a><a name="zh-cn_topic_0237152330_p209310131583"></a>net.ipv4.tcp_retries1</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p6932131313581"><a name="zh-cn_topic_0237152330_p6932131313581"></a><a name="zh-cn_topic_0237152330_p6932131313581"></a>在连接建立过程中TCP协议最大重试次数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p793281355810"><a name="zh-cn_topic_0237152330_p793281355810"></a><a name="zh-cn_topic_0237152330_p793281355810"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row785253455720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p17932713145816"><a name="zh-cn_topic_0237152330_p17932713145816"></a><a name="zh-cn_topic_0237152330_p17932713145816"></a>net.ipv4.tcp_syn_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p189321613175819"><a name="zh-cn_topic_0237152330_p189321613175819"></a><a name="zh-cn_topic_0237152330_p189321613175819"></a>TCP协议SYN报文最大重试次数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p693313136582"><a name="zh-cn_topic_0237152330_p693313136582"></a><a name="zh-cn_topic_0237152330_p693313136582"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row10853153425712"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1293371305814"><a name="zh-cn_topic_0237152330_p1293371305814"></a><a name="zh-cn_topic_0237152330_p1293371305814"></a>net.ipv4.tcp_synack_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p17933201318587"><a name="zh-cn_topic_0237152330_p17933201318587"></a><a name="zh-cn_topic_0237152330_p17933201318587"></a>TCP协议SYN应答报文最大重试次数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p99331013155811"><a name="zh-cn_topic_0237152330_p99331013155811"></a><a name="zh-cn_topic_0237152330_p99331013155811"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row0188144110571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p203091939195813"><a name="zh-cn_topic_0237152330_p203091939195813"></a><a name="zh-cn_topic_0237152330_p203091939195813"></a>net.ipv4.tcp_retries2</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1331013399587"><a name="zh-cn_topic_0237152330_p1331013399587"></a><a name="zh-cn_topic_0237152330_p1331013399587"></a>控制内核向已经建立连接的远程主机重新发送数据的次数，低值可以更早的检测到与远程主机失效的连接，因此服务器可以更快的释放该连接。</p>
<p id="zh-cn_topic_0237152330_p133103392585"><a name="zh-cn_topic_0237152330_p133103392585"></a><a name="zh-cn_topic_0237152330_p133103392585"></a>发生“connection reset by peer”时可以尝试调大该值规避问题。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p83101739145811"><a name="zh-cn_topic_0237152330_p83101739145811"></a><a name="zh-cn_topic_0237152330_p83101739145811"></a>12</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row0188184135716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p10310183915815"><a name="zh-cn_topic_0237152330_p10310183915815"></a><a name="zh-cn_topic_0237152330_p10310183915815"></a>vm.overcommit_memory</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p12311173912584"><a name="zh-cn_topic_0237152330_p12311173912584"></a><a name="zh-cn_topic_0237152330_p12311173912584"></a>控制在做内存分配的时候，内核的检查方式。</p>
<a name="zh-cn_topic_0237152330_ul14311183913587"></a><a name="zh-cn_topic_0237152330_ul14311183913587"></a><ul id="zh-cn_topic_0237152330_ul14311183913587"><li>0：表示系统会尽量精确计算当前可用的内存。</li><li>1：表示不作检查直接返回成功。</li><li>2：内存总量×vm.overcommit_ratio/100＋SWAP的总量，如果申请空间超过此数值则返回失败。</li></ul>
<p id="zh-cn_topic_0237152330_p193123394589"><a name="zh-cn_topic_0237152330_p193123394589"></a><a name="zh-cn_topic_0237152330_p193123394589"></a>内核默认是2过于保守，推荐设置为0，如果系统压力大可以设置为1。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p13313153945816"><a name="zh-cn_topic_0237152330_p13313153945816"></a><a name="zh-cn_topic_0237152330_p13313153945816"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row3361592574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p19529155145913"><a name="zh-cn_topic_0237152330_p19529155145913"></a><a name="zh-cn_topic_0237152330_p19529155145913"></a>net.ipv4.tcp_rmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1452915511595"><a name="zh-cn_topic_0237152330_p1452915511595"></a><a name="zh-cn_topic_0237152330_p1452915511595"></a>TCP协议接收端缓冲区的可用内存大小。分无压力、有压力、和压力大三个区间，单位为页面。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p5529155105915"><a name="zh-cn_topic_0237152330_p5529155105915"></a><a name="zh-cn_topic_0237152330_p5529155105915"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row10378590579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p953010511591"><a name="zh-cn_topic_0237152330_p953010511591"></a><a name="zh-cn_topic_0237152330_p953010511591"></a>net.ipv4.tcp_wmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1153017545918"><a name="zh-cn_topic_0237152330_p1153017545918"></a><a name="zh-cn_topic_0237152330_p1153017545918"></a>TCP协议发送端缓冲区的可用内存大小。分无压力、有压力、和压力大三个区间，单位为页面。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p195301356597"><a name="zh-cn_topic_0237152330_p195301356597"></a><a name="zh-cn_topic_0237152330_p195301356597"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row2387595578"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p163351922125910"><a name="zh-cn_topic_0237152330_p163351922125910"></a><a name="zh-cn_topic_0237152330_p163351922125910"></a>net.core.wmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p14335132214593"><a name="zh-cn_topic_0237152330_p14335132214593"></a><a name="zh-cn_topic_0237152330_p14335132214593"></a>socket发送端缓冲区大小的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p633582217598"><a name="zh-cn_topic_0237152330_p633582217598"></a><a name="zh-cn_topic_0237152330_p633582217598"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row33995910574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p12336132225915"><a name="zh-cn_topic_0237152330_p12336132225915"></a><a name="zh-cn_topic_0237152330_p12336132225915"></a>net.core.rmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p2336172218596"><a name="zh-cn_topic_0237152330_p2336172218596"></a><a name="zh-cn_topic_0237152330_p2336172218596"></a>socket接收端缓冲区大小的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p163361222205919"><a name="zh-cn_topic_0237152330_p163361222205919"></a><a name="zh-cn_topic_0237152330_p163361222205919"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row1739559195711"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p8336142211595"><a name="zh-cn_topic_0237152330_p8336142211595"></a><a name="zh-cn_topic_0237152330_p8336142211595"></a>net.core.wmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p6337182218592"><a name="zh-cn_topic_0237152330_p6337182218592"></a><a name="zh-cn_topic_0237152330_p6337182218592"></a>socket发送端缓冲区大小的默认值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p193371222105920"><a name="zh-cn_topic_0237152330_p193371222105920"></a><a name="zh-cn_topic_0237152330_p193371222105920"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row14011595570"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p333715223593"><a name="zh-cn_topic_0237152330_p333715223593"></a><a name="zh-cn_topic_0237152330_p333715223593"></a>net.core.rmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p163371922175915"><a name="zh-cn_topic_0237152330_p163371922175915"></a><a name="zh-cn_topic_0237152330_p163371922175915"></a>socket接收端缓冲区大小的默认值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p13338122275917"><a name="zh-cn_topic_0237152330_p13338122275917"></a><a name="zh-cn_topic_0237152330_p13338122275917"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row1041959195714"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1833892275911"><a name="zh-cn_topic_0237152330_p1833892275911"></a><a name="zh-cn_topic_0237152330_p1833892275911"></a>net.ipv4.ip_local_port_range</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p0338112235914"><a name="zh-cn_topic_0237152330_p0338112235914"></a><a name="zh-cn_topic_0237152330_p0338112235914"></a>物理机可用临时端口范围。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p14339142235915"><a name="zh-cn_topic_0237152330_p14339142235915"></a><a name="zh-cn_topic_0237152330_p14339142235915"></a>26000-65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row0425596573"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1933992225914"><a name="zh-cn_topic_0237152330_p1933992225914"></a><a name="zh-cn_topic_0237152330_p1933992225914"></a>kernel.sem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p933942215595"><a name="zh-cn_topic_0237152330_p933942215595"></a><a name="zh-cn_topic_0237152330_p933942215595"></a>内核信号量参数设置大小。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p12340132213597"><a name="zh-cn_topic_0237152330_p12340132213597"></a><a name="zh-cn_topic_0237152330_p12340132213597"></a>250 6400000 1000 25600</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row44385915579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p934010229591"><a name="zh-cn_topic_0237152330_p934010229591"></a><a name="zh-cn_topic_0237152330_p934010229591"></a>vm.min_free_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p183405228591"><a name="zh-cn_topic_0237152330_p183405228591"></a><a name="zh-cn_topic_0237152330_p183405228591"></a>保证物理内存有足够空闲空间，防止突发性换页。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p17341142215591"><a name="zh-cn_topic_0237152330_p17341142215591"></a><a name="zh-cn_topic_0237152330_p17341142215591"></a>系统总内存的5%</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row9431359105719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p11341322145910"><a name="zh-cn_topic_0237152330_p11341322145910"></a><a name="zh-cn_topic_0237152330_p11341322145910"></a>net.core.somaxconn</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1234282213599"><a name="zh-cn_topic_0237152330_p1234282213599"></a><a name="zh-cn_topic_0237152330_p1234282213599"></a>定义了系统中每一个端口最大的监听队列的长度，这是个全局的参数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p534272295916"><a name="zh-cn_topic_0237152330_p534272295916"></a><a name="zh-cn_topic_0237152330_p534272295916"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row11442059175716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p163421022125917"><a name="zh-cn_topic_0237152330_p163421022125917"></a><a name="zh-cn_topic_0237152330_p163421022125917"></a>net.ipv4.tcp_syncookies</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1534362218593"><a name="zh-cn_topic_0237152330_p1534362218593"></a><a name="zh-cn_topic_0237152330_p1534362218593"></a>当出现SYN等待队列溢出时，启用cookies来处理，可防范少量SYN攻击。</p>
<a name="zh-cn_topic_0237152330_ul534318226591"></a><a name="zh-cn_topic_0237152330_ul534318226591"></a><ul id="zh-cn_topic_0237152330_ul534318226591"><li>0表示关闭SYN Cookies。</li><li>1表示开启SYN Cookies。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p133441022135919"><a name="zh-cn_topic_0237152330_p133441022135919"></a><a name="zh-cn_topic_0237152330_p133441022135919"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row119054135715"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p1671381607"><a name="zh-cn_topic_0237152330_p1671381607"></a><a name="zh-cn_topic_0237152330_p1671381607"></a>net.core.netdev_max_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1975811012"><a name="zh-cn_topic_0237152330_p1975811012"></a><a name="zh-cn_topic_0237152330_p1975811012"></a>在每个网络接口接收数据包的速率比内核处理这些包的速率快时，允许送到队列的数据包的最大数目。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p1287819014"><a name="zh-cn_topic_0237152330_p1287819014"></a><a name="zh-cn_topic_0237152330_p1287819014"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row1319012411575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p19813814012"><a name="zh-cn_topic_0237152330_p19813814012"></a><a name="zh-cn_topic_0237152330_p19813814012"></a>net.ipv4.tcp_max_syn_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p13818816015"><a name="zh-cn_topic_0237152330_p13818816015"></a><a name="zh-cn_topic_0237152330_p13818816015"></a>记录的那些尚未收到客户端确认信息的连接请求的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p1791986010"><a name="zh-cn_topic_0237152330_p1791986010"></a><a name="zh-cn_topic_0237152330_p1791986010"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row111911441145720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p20914818010"><a name="zh-cn_topic_0237152330_p20914818010"></a><a name="zh-cn_topic_0237152330_p20914818010"></a>net.ipv4.tcp_fin_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p7978801"><a name="zh-cn_topic_0237152330_p7978801"></a><a name="zh-cn_topic_0237152330_p7978801"></a>系统默认的超时时间。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p17101281003"><a name="zh-cn_topic_0237152330_p17101281003"></a><a name="zh-cn_topic_0237152330_p17101281003"></a>60</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row171915417579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p61016819012"><a name="zh-cn_topic_0237152330_p61016819012"></a><a name="zh-cn_topic_0237152330_p61016819012"></a>kernel.shmall</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1810481505"><a name="zh-cn_topic_0237152330_p1810481505"></a><a name="zh-cn_topic_0237152330_p1810481505"></a>内核可用的共享内存总量。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p8101081004"><a name="zh-cn_topic_0237152330_p8101081004"></a><a name="zh-cn_topic_0237152330_p8101081004"></a>1152921504606846720</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row1093874517594"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p4118812012"><a name="zh-cn_topic_0237152330_p4118812012"></a><a name="zh-cn_topic_0237152330_p4118812012"></a>kernel.shmmax</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p131117813014"><a name="zh-cn_topic_0237152330_p131117813014"></a><a name="zh-cn_topic_0237152330_p131117813014"></a>内核参数定义单个共享内存段的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p181188803"><a name="zh-cn_topic_0237152330_p181188803"></a><a name="zh-cn_topic_0237152330_p181188803"></a>18446744073709551615</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row1493934585918"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p412986019"><a name="zh-cn_topic_0237152330_p412986019"></a><a name="zh-cn_topic_0237152330_p412986019"></a>net.ipv4.tcp_sack</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p112881904"><a name="zh-cn_topic_0237152330_p112881904"></a><a name="zh-cn_topic_0237152330_p112881904"></a>启用有选择的应答，通过有选择地应答乱序接受到的报文来提高性能，让发送者只发送丢失的报文段（对于广域网来说）这个选项应该启用，但是会增加对CPU的占用。</p>
<a name="zh-cn_topic_0237152330_ul112208308"></a><a name="zh-cn_topic_0237152330_ul112208308"></a><ul id="zh-cn_topic_0237152330_ul112208308"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p17131181208"><a name="zh-cn_topic_0237152330_p17131181208"></a><a name="zh-cn_topic_0237152330_p17131181208"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row199407451592"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p111418818011"><a name="zh-cn_topic_0237152330_p111418818011"></a><a name="zh-cn_topic_0237152330_p111418818011"></a>net.ipv4.tcp_timestamps</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p10141681903"><a name="zh-cn_topic_0237152330_p10141681903"></a><a name="zh-cn_topic_0237152330_p10141681903"></a>TCP时间戳（会在TCP包头增加12节），以一种比重发超时更精确的方式（参考RFC 1323）来启用对RTT的计算，启用可以实现更好的性能。</p>
<a name="zh-cn_topic_0237152330_ul814881508"></a><a name="zh-cn_topic_0237152330_ul814881508"></a><ul id="zh-cn_topic_0237152330_ul814881508"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p18151381901"><a name="zh-cn_topic_0237152330_p18151381901"></a><a name="zh-cn_topic_0237152330_p18151381901"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row3940154515911"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p02308185016"><a name="zh-cn_topic_0237152330_p02308185016"></a><a name="zh-cn_topic_0237152330_p02308185016"></a>vm.extfrag_threshold</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p62301518909"><a name="zh-cn_topic_0237152330_p62301518909"></a><a name="zh-cn_topic_0237152330_p62301518909"></a>系统内存不够用时，linux会为当前系统内存碎片情况打分，如果超过vm.extfrag_threshold的值，kswapd就会触发memory compaction。所以这个值设置的接近1000，说明系统在内存碎片的处理倾向于把旧的页换出，以符合申请的需要，而设置接近0，表示系统在内存碎片的处理倾向做memory compaction。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p923111816015"><a name="zh-cn_topic_0237152330_p923111816015"></a><a name="zh-cn_topic_0237152330_p923111816015"></a>500</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row14114125155912"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p8231218904"><a name="zh-cn_topic_0237152330_p8231218904"></a><a name="zh-cn_topic_0237152330_p8231218904"></a>vm.overcommit_ratio</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p1823117183015"><a name="zh-cn_topic_0237152330_p1823117183015"></a><a name="zh-cn_topic_0237152330_p1823117183015"></a>系统使用绝不过量使用内存的算法时，系统整个内存地址空间不得超过swap+RAM值的此参数百分比，当vm.overcommit_memory=2时此参数生效。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p12232121819017"><a name="zh-cn_topic_0237152330_p12232121819017"></a><a name="zh-cn_topic_0237152330_p12232121819017"></a>90</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152330_row151152051125910"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152330_p2233161813015"><a name="zh-cn_topic_0237152330_p2233161813015"></a><a name="zh-cn_topic_0237152330_p2233161813015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152330_p32330181404"><a name="zh-cn_topic_0237152330_p32330181404"></a><a name="zh-cn_topic_0237152330_p32330181404"></a>节点网卡最大传输单元。OS默认值为1500，调整为8192可以提升SCTP协议数据收发的性能。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152330_p223412181010"><a name="zh-cn_topic_0237152330_p223412181010"></a><a name="zh-cn_topic_0237152330_p223412181010"></a>8192</p>
</td>
</tr>
</tbody>
</table>


## 文件系统参数<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_s6bc6e27aba3d44139c026373229dcd89"></a>

-   soft nofile

    说明：soft nofile表示软限制，用户使用的文件句柄数量可以超过该限制，但是如果超过会有告警信息。

    推荐取值：1000000

-   hard nofile

    说明：hard nofile表示硬限制，是一个严格的限制，用户使用的文件句柄数量一定不能超过该设置。

    推荐取值：1000000

-   stack size

    说明：线程堆栈大小。

    推荐值：3072


## 示例<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_s1c980bdf925b48829d69ccedb086c313"></a>

执行单项检查结果：

```
perfadm@lfgp000700749:/opt/huawei/perfadm/tool/script> gs_check -i CheckCPU
Parsing the check items config file successfully
Distribute the context file to remote hosts successfully
Start to health check for the cluster. Total Items:1 Nodes:3

Checking...               [=========================] 1/1
Start to analysis the check result
CheckCPU....................................OK
The item run on 3 nodes.  success: 3

Success. All check items run completed. Total:1  Success:1  Failed:0
For more information please refer to /opt/huawei/wisequery/script/gspylib/inspection/output/CheckReport_201902193704661604.tar.gz
```

本地执行结果：

```
perfadm@lfgp000700749:/opt/huawei/perfadm/tool/script> gs_check -i CheckCPU -L

2017-12-29 17:09:29 [NAM] CheckCPU
2017-12-29 17:09:29 [STD] 检查主机CPU占用率，如果idle 大于30%并且iowait 小于 30%.则检查项通过，否则检查项不通过
2017-12-29 17:09:29 [RST] OK

2017-12-29 17:09:29 [RAW]
Linux 4.4.21-69-default (lfgp000700749)  12/29/17  _x86_64_

17:09:24        CPU     %user     %nice   %system   %iowait    %steal     %idle
17:09:25        all      0.25      0.00      0.25      0.00      0.00     99.50
17:09:26        all      0.25      0.00      0.13      0.00      0.00     99.62
17:09:27        all      0.25      0.00      0.25      0.13      0.00     99.37
17:09:28        all      0.38      0.00      0.25      0.00      0.13     99.25
17:09:29        all      1.00      0.00      0.88      0.00      0.00     98.12
Average:        all      0.43      0.00      0.35      0.03      0.03     99.17
```

执行场景检查结果：

```
[perfadm@SIA1000131072 Check]$ gs_check -e inspect
Parsing the check items config file successfully
The below items require root privileges to execute:[CheckBlockdev CheckIOConfigure CheckMTU CheckRXTX CheckMultiQueue CheckFirewall CheckSshdService CheckSshdConfig CheckCrondService CheckMaxProcMemory CheckBootItems CheckFilehandle CheckNICModel CheckDropCache]
Please enter root privileges user[root]:
Please enter password for user[root]:
Check root password connection successfully
Distribute the context file to remote hosts successfully
Start to health check for the cluster. Total Items:57 Nodes:3
Checking...               [=========================] 57/57
Start to analysis the check result
CheckClusterState...........................OK
The item run on 3 nodes.  success: 3
CheckDBParams...............................OK
.........................................................................
CheckMpprcFile..............................OK
The item run on 3 nodes.  success: 3

Analysis the check result successfully
Failed. All check items run completed. Total:57   Success:49   Warning:5   NG:3   Error:0
For more information please refer to /opt/huawei/wisequery/script/gspylib/inspection/output/CheckReport_inspect_201902207129254785.tar.gz
```

## 相关命令<a name="zh-cn_topic_0237152330_zh-cn_topic_0059777799_sca573acef30b4169bd3e6f0d5501021c"></a>

[gs\_checkos](gs_checkos.md)，[gs\_checkperf](gs_checkperf.md)

