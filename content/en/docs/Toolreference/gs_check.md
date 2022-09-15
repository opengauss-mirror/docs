# gs\_check<a name="EN-US_TOPIC_0289899234"></a>

## Background<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_section2466014153117"></a>

**gs\_check**  has been enhanced to unify functions of various check tools, such as  [gs\_check](gs_check.md)  and  [gs\_checkos](gs_checkos.md). It helps you fully check openGauss runtime, OS, network, and database running environments; as well as perform comprehensive checks on various environments before major operations in openGauss, ensuring smooth operation.

## Precautions<a name="en-us_topic_0287275940_en-us_topic_0237152330_section4290135616319"></a>

-   Parameter  **-i**  or  **-e**  must be set.  **-i**  specifies a single item to be checked, and  **-e**  specifies an inspection scenario where multiple items will be checked.
-   If  **-i**  is not set to a root item or no such items are contained in the check item list of the scenario specified by  **-e**, you do not need to enter the name or password of a user with the root permissions.
-   You can run  **--skip-root-items**  to skip root items.
-   If the MTU values are inconsistent, the check may be slow or the check process may fail to respond. When the inspection tool displays a message, change the MTU values of the nodes to be the same and then perform the inspection.
-   If the switch does not support the configured MTU value, process response failures may be caused due to communication problems even if the MTU values are the same. In this case, you need to adjust the MTU based on the switch.

## Syntax<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_sfac1bdc734c0446b9ec13d0ae74a4553"></a>

-   Check a single-item.

    ```
    gs_check -i ITEM [...] [-U USER] [-L] [-l LOGFILE] [-o OUTPUTDIR] [--skip-root-items][--set][--routing]
    ```

-   Check a scenario.

    ```
    gs_check -e SCENE_NAME [-U USER] [-L] [-l LOGFILE] [-o OUTPUTDIR] [--skip-root-items] [--time-out=SECS][--set][--routing][--skip-items]
    ```

-   Display help information.

    ```
    gs_check -? | --help
    ```

-   Display version information.

    ```
    gs_check -V | --version
    ```


## Parameter Description<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_s99b57308f5c84719abe48819d2880cf0"></a>

-   -U

    Specifies the name of a user who runs openGauss.

    Value range: Name of a user who runs openGauss

-   -L

    Locally performs the check.

-   -i

    Specifies a check item. Its format is  **-i Check**_XX_. For details about check items, see  [Table 1](#en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_t48caf3ebc47a4dce88ed8b7132976edd).

-   -e

    Specifies scenario check items. Default scenarios include  **inspect**  \(routine inspection\),  **upgrade**  \(pre-upgrade inspection\),  **binary\_upgrade**  \(local pre-upgrade inspection\),  **health**  \(health check inspection\), and  **install**  \(installation\). You can also compile scenarios as required.

-   -l

    Specifies the log file path. The path must be suffixed with .log.

-   -o

    Specifies the path of the check result output folder.

-   --skip-root-items

    Skips the check items that require root permissions.

-   --skip-items

    Skips specified check items.

-   --format

    Specifies the format of the result report.

-   --set

    Specifies abnormal items that can be fixed.

-   --cid

    Checks the ID used only by the internal check process.

-   --time-out

    Specifies the timeout period. The unit is second. The default value is  **1500s**. The user-defined value cannot be less than 1500s.

-   --routing

    Specifies the network segment for service IP addresses. The format is  _IP address_:_Subnet mask_.

-   --disk-threshold="PERCENT"

    Specifies the alarm threshold when you check disk usage. You can specify the integer value that ranges from 1 to 99. The default value is  **90**. This parameter is not mandatory for other check items.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


**Table  1**  openGauss status checklist

<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_t48caf3ebc47a4dce88ed8b7132976edd"></a>
<table><thead align="left"><tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r51b833dc5e8143c58149ede8fa1b93d1"><th class="cellrowborder" valign="top" width="13.969999999999999%" id="mcps1.2.5.1.1"><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p78888171777"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p78888171777"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p78888171777"></a>Status</p>
</th>
<th class="cellrowborder" valign="top" width="24.8%" id="mcps1.2.5.1.2"><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p207863101088"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p207863101088"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p207863101088"></a>Check Item</p>
</th>
<th class="cellrowborder" valign="top" width="44.43%" id="mcps1.2.5.1.3"><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p58880171476"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p58880171476"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p58880171476"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.5.1.4"><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6883120124818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6883120124818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6883120124818"></a>--set Supported or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_re931b4b0aec9415aa07f3110eec215d3"><td class="cellrowborder" rowspan="29" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p139541326318"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p139541326318"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p139541326318"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p15818473327"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15818473327"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15818473327"></a>CheckCPU</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18255205083218"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18255205083218"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18255205083218"></a>Checks the CPU usage of the host. If <strong id="b1995412394215"><a name="b1995412394215"></a><a name="b1995412394215"></a>idle</strong> is greater than 30% and <strong id="b295583932112"><a name="b295583932112"></a><a name="b295583932112"></a>iowait</strong> is less than 30%, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p158831904482"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p158831904482"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p158831904482"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row2096011252381"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1896132513386"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1896132513386"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1896132513386"></a>CheckFirewall</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p0961725123818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p0961725123818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p0961725123818"></a>Checks the firewall status of the host. If the firewall is disabled, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1288314013486"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288314013486"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288314013486"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_rcedbff2c7ca748608e2dc2c891fe9122"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p154200104330"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p154200104330"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p154200104330"></a>CheckTimeZone</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p118899171471"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p118899171471"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p118899171471"></a>Checks whether nodes in <span id="text9217103284110"><a name="text9217103284110"></a><a name="text9217103284110"></a>openGauss</span> use the same time zone. If they do, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p888314010489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p888314010489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p888314010489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row630693411419"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1330619348419"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1330619348419"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1330619348419"></a>CheckSysParams</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p63081034540"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p63081034540"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p63081034540"></a>Checks whether the values of OS parameters for each node are as expected. If the parameters do not meet the requirements of the warning field, a warning is reported. If the parameters do not meet the requirements of the NG field, this item fails the check, and the failed parameters are printed.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p9561155235320"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9561155235320"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9561155235320"></a>For details, see <a href="#en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_s8b7df4cd80bf4a84927d84af2d49b32d">OS Parameters</a>.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18839064818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18839064818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18839064818"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row96726391758"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p36721339958"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p36721339958"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p36721339958"></a>CheckOSVer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p667317391955"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p667317391955"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p667317391955"></a>Check the OS version of each node in <span id="text4683124318116"><a name="text4683124318116"></a><a name="text4683124318116"></a>openGauss</span>. If versions are consistent with those in the version compatibility list and information about versions of OSs running on nodes in <span id="text126871043214"><a name="text126871043214"></a><a name="text126871043214"></a>openGauss</span> is included in the same version list, the item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p168831909483"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p168831909483"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p168831909483"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1789911361061"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p118999361762"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p118999361762"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p118999361762"></a>CheckNTPD</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1689993611614"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1689993611614"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1689993611614"></a>Checks the NTPD service. If the service is enabled and the time difference across nodes is within 1 minute, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p38831104484"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p38831104484"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p38831104484"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row334519320714"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1034593574"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1034593574"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1034593574"></a>CheckTHP</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11345337714"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11345337714"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11345337714"></a>Checks the THP service. If the service is enabled, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p588310024810"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588310024810"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588310024810"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row5208181218815"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p32081121489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p32081121489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p32081121489"></a>CheckSshdService</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13209912283"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13209912283"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13209912283"></a>Checks whether the sshd service is started. If yes, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p108834019489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108834019489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108834019489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1929571696"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p152956118917"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p152956118917"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p152956118917"></a>CheckCrondService</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p122951011395"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p122951011395"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p122951011395"></a>Checks whether the crontab service is started. If yes, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3883100114818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3883100114818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3883100114818"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row111450421899"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p814514429920"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p814514429920"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p814514429920"></a>CheckCrontabLeft</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p9146124213913"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9146124213913"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9146124213913"></a>Checks whether the crontab file contains remaining Gauss information. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p78831902482"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p78831902482"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p78831902482"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row84171030161016"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12417143010104"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12417143010104"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12417143010104"></a>CheckDirLeft</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1684810621114"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1684810621114"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1684810621114"></a>Checks whether the <strong id="b19156145125016"><a name="b19156145125016"></a><a name="b19156145125016"></a>/opt/huawei/Bigdata/</strong>, <strong id="b1415715114508"><a name="b1415715114508"></a><a name="b1415715114508"></a>/var/log/Bigdata/</strong>, and <strong id="b11158105118507"><a name="b11158105118507"></a><a name="b11158105118507"></a>/home/<span id="en-us_topic_0237152330_text203561459476"><a name="en-us_topic_0237152330_text203561459476"></a><a name="en-us_topic_0237152330_text203561459476"></a>omm</span></strong> directories exist. If they do not exist or exist only in the <strong id="b19159851115016"><a name="b19159851115016"></a><a name="b19159851115016"></a>mount</strong> directory, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3883200174819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3883200174819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3883200174819"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row16961423181114"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1597112321110"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1597112321110"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1597112321110"></a>CheckProcessLeft</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p16971023131114"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16971023131114"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16971023131114"></a>Checks whether the gaussdb and <span id="en-us_topic_0237152330_text112408111814"><a name="en-us_topic_0237152330_text112408111814"></a><a name="en-us_topic_0237152330_text112408111814"></a>omm</span> processes exist. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1788300194819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1788300194819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1788300194819"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row565366125"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1666156111216"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1666156111216"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1666156111216"></a>CheckStack</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p16676131219"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16676131219"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16676131219"></a>Checks stack depths. If the stack depths across nodes are inconsistent, a warning is reported. If the stack depths are consistent and greater than or equal to 3072, this item passes the check. If the stack depths are consistent but less than 3072, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p488320114811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p488320114811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p488320114811"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1724914911158"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p52503971517"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p52503971517"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p52503971517"></a>CheckOmmUserExist</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1425017921518"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1425017921518"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1425017921518"></a>Checks whether user <strong id="b21570473557"><a name="b21570473557"></a><a name="b21570473557"></a><span id="en-us_topic_0237152330_text124761221185"><a name="en-us_topic_0237152330_text124761221185"></a><a name="en-us_topic_0237152330_text124761221185"></a>omm</span></strong> exists. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p8883130164819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8883130164819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8883130164819"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row21641355151514"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13164195531511"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13164195531511"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13164195531511"></a>CheckPortConflict</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12165185541510"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12165185541510"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12165185541510"></a>Checks whether database node ports are occupied. If they are not, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1688319015480"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1688319015480"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1688319015480"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1086718502188"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p14867175061814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14867175061814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14867175061814"></a>CheckSysPortRange</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p178681250101811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178681250101811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178681250101811"></a>Checks the value range of the system parameter <strong id="b202511739195812"><a name="b202511739195812"></a><a name="b202511739195812"></a>ip_local_port_range</strong>. If the value range is 26000 to 65535, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4883190124819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4883190124819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4883190124819"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row663173561917"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1964163531919"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1964163531919"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1964163531919"></a>CheckEtcHosts</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4941012172018"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4941012172018"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4941012172018"></a>If <strong id="b05154567217"><a name="b05154567217"></a><a name="b05154567217"></a>localhost</strong> is not configured for <strong id="b95204564215"><a name="b95204564215"></a><a name="b95204564215"></a>/etc/hosts</strong>, there is a mapping whose comment contains <strong id="b1552110561226"><a name="b1552110561226"></a><a name="b1552110561226"></a>#openGauss</strong>, or the names of hosts having the same IP address are different, this item fails the check. Otherwise, this item passes the check. In addition, if host names are the same but IP addresses are different, this item also fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p15883190184815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15883190184815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15883190184815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row588361812204"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p15883161813208"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15883161813208"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15883161813208"></a>CheckCpuCount</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13883518192015"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13883518192015"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13883518192015"></a>Checks the number of CPU cores. If the number is different from that of available CPUs, this item fails the check. If the two numbers are the same but unavailability messages exist, a warning is reported. If the CPU information of all nodes is different, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1888340184811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1888340184811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1888340184811"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row18540145112113"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p35414515216"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35414515216"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35414515216"></a>CheckHyperThread</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5542125110219"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5542125110219"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5542125110219"></a>Checks hyper-threading. If it is started, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p178838017484"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178838017484"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178838017484"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row15656155317239"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1065718537231"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1065718537231"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1065718537231"></a>CheckMemInfo</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1865715538231"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1865715538231"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1865715538231"></a>Checks whether the total memory size of each node is the same. If yes, this item passes the check. Otherwise, a warning is reported.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p208837013489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p208837013489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p208837013489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row94708478269"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1747154718267"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1747154718267"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1747154718267"></a>CheckSshdConfig</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p7638357718"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7638357718"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7638357718"></a>Checks the <strong id="b15371078319"><a name="b15371078319"></a><a name="b15371078319"></a>/etc/ssh/sshd_config</strong> file.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p4634757919"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4634757919"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4634757919"></a>(a)PasswordAuthentication=yes;</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p1263420571317"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1263420571317"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1263420571317"></a>(b)MaxStartups=1000;</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p19635457214"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19635457214"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19635457214"></a>(c)UseDNS=no;</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p136350573120"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p136350573120"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p136350573120"></a>(d) <strong id="b1946414151635"><a name="b1946414151635"></a><a name="b1946414151635"></a>ClientAliveInterval</strong> is greater than 10800 or equal to 0.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p19635135717115"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19635135717115"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19635135717115"></a>If the above information is configured, this item passes the check. If a and c configurations are incorrect, a warning is reported. If b and d configurations are incorrect, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5883180144817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5883180144817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5883180144817"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row552144913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p661141693"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p661141693"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p661141693"></a>CheckMaxHandle</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1710141899"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1710141899"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1710141899"></a>Checks the maximum handle value of the OS. If the value is greater than or equal to 1 million, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p388313015487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p388313015487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p388313015487"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row15175559913"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p7175551697"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7175551697"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7175551697"></a>CheckKernelVer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p141805515916"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p141805515916"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p141805515916"></a>Checks the kernel version of each node. If the version information is consistent, this item passes the check. Otherwise, a warning is reported.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p16883807487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16883807487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16883807487"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r0050a3b5d4d64c3181452ce4a6ec9f01"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ab6be58f90f8d407f9e1283ae3e5348d1"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ab6be58f90f8d407f9e1283ae3e5348d1"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ab6be58f90f8d407f9e1283ae3e5348d1"></a>CheckEncoding</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ab7813a3d3f1f4160890d9fa587556c56"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ab7813a3d3f1f4160890d9fa587556c56"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ab7813a3d3f1f4160890d9fa587556c56"></a>Checks the system code of each node in <span id="text13203144117419"><a name="text13203144117419"></a><a name="text13203144117419"></a>openGauss</span>. If the codes are consistent, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p38845013489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p38845013489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p38845013489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1540220812215"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p44021888216"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p44021888216"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p44021888216"></a>CheckBootItems</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p14402887214"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14402887214"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14402887214"></a>Checks whether there are manually added startup items. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p28841084819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p28841084819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p28841084819"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row363284274"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p160286277"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p160286277"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p160286277"></a>CheckDropCache</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1360285271"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1360285271"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1360285271"></a>Checks whether there is a dropcache process running on each node. If yes, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1488414016480"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1488414016480"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1488414016480"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row649971263415"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1650117125342"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1650117125342"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1650117125342"></a>CheckFilehandle</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p132777234351"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p132777234351"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p132777234351"></a>Checks the following conditions. If both the conditions are met, this item passes the check. Otherwise, this item fails the check.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul7945113143618"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul7945113143618"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul7945113143618"><li>The number of processes opened by each gaussdb process does not exceed 800,000.</li><li>The number of handles used by the slave process does not exceed that of handles used by the master process.</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1388413018489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1388413018489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1388413018489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1034313874413"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p183431687449"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p183431687449"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p183431687449"></a>CheckKeyProAdj</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1634398174418"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1634398174418"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1634398174418"></a>Checks all key processes. If the <strong id="b16275182181020"><a name="b16275182181020"></a><a name="b16275182181020"></a><span id="en-us_topic_0237152330_text133875118104"><a name="en-us_topic_0237152330_text133875118104"></a><a name="en-us_topic_0237152330_text133875118104"></a>omm</span>_adj</strong> value for all key processes is <strong id="b9276132116108"><a name="b9276132116108"></a><a name="b9276132116108"></a>0</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1988416094810"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1988416094810"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1988416094810"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row3492359151014"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p174926594109"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p174926594109"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p174926594109"></a>CheckMaxProcMemory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p84936592107"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p84936592107"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p84936592107"></a>Checks whether the value of <strong id="b121781718349"><a name="b121781718349"></a><a name="b121781718349"></a>max_process_memory</strong> on the database nodes is greater than 1 GB. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1884602481"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1884602481"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1884602481"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_re0c478c32f6c48b89cefe4b9c83f579f"><td class="cellrowborder" rowspan="12" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1945311128311"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1945311128311"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1945311128311"></a>Device</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p118892171078"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p118892171078"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p118892171078"></a>CheckSwapMemory</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a0a340219b844496f899b391e01017812"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a0a340219b844496f899b391e01017812"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a0a340219b844496f899b391e01017812"></a>Checks the swap memory and total memory sizes. If the check result is <strong id="b5190126163217"><a name="b5190126163217"></a><a name="b5190126163217"></a>0</strong>, this item passes the check. Otherwise, a warning is reported. If the result is greater than the total memory, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p188413015483"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p188413015483"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p188413015483"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row8445803315"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p144419816336"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p144419816336"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p144419816336"></a>CheckLogicalBlock</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19451786338"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19451786338"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19451786338"></a>Checks the logical block size of a disk. If the result is <strong id="b13152106172213"><a name="b13152106172213"></a><a name="b13152106172213"></a>512</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1988400144818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1988400144818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1988400144818"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_rad429dd269574df1aaf03d6dba539999"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10897122153416"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10897122153416"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10897122153416"></a>CheckIOrequestqueue</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p19889717575"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p19889717575"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p19889717575"></a>Checks the I/O value. If the value is <strong id="b843734318253"><a name="b843734318253"></a><a name="b843734318253"></a>32768</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p98841506489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p98841506489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p98841506489"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_row7889917674"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a5e58c302f45e4cd6ac2979db09926035"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a5e58c302f45e4cd6ac2979db09926035"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a5e58c302f45e4cd6ac2979db09926035"></a>CheckMaxAsyIOrequests</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p128891317579"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p128891317579"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p128891317579"></a>Checks the maximum number of asynchronous requests. If the number of asynchronous I/O requests is greater than 104857600 and greater than the number of database instances on the current node x 1048576, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1288410144811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288410144811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288410144811"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r24faf218c0344fc1ac4ca04bc281a074"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p178896171273"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p178896171273"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p178896171273"></a>CheckIOConfigure</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a00ba88772065442eabba1ba583613688"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a00ba88772065442eabba1ba583613688"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a00ba88772065442eabba1ba583613688"></a>Checks the I/O configuration. If the result is <strong id="b932619471251"><a name="b932619471251"></a><a name="b932619471251"></a>deadline</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1888410204811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1888410204811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1888410204811"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r395c0d5d79a34251ad1bec762a75a62f"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_aae3ea8a0701b467bab51a7926dea334f"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_aae3ea8a0701b467bab51a7926dea334f"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_aae3ea8a0701b467bab51a7926dea334f"></a>CheckBlockdev</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p723952620188"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p723952620188"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p723952620188"></a>Checks the size of the pre-read block. If the result is <strong id="b268112220323"><a name="b268112220323"></a><a name="b268112220323"></a>16384</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11884803488"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11884803488"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11884803488"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row17699121094017"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p9700121014405"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9700121014405"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9700121014405"></a>CheckDiskFormat</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1170031014017"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1170031014017"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1170031014017"></a>Checks the XFS format information about a disk. If the result is <strong id="b865495482213"><a name="b865495482213"></a><a name="b865495482213"></a>rw,noatime,inode64,allocsize=16m</strong>, this item passes the check. Otherwise, a warning is reported.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1288460124815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288460124815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288460124815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row114585213411"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3145165264118"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3145165264118"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3145165264118"></a>CheckInodeUsage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19997141884214"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19997141884214"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19997141884214"></a>Checks <span id="en-us_topic_0287275940_text1449413429412"><a name="en-us_topic_0287275940_text1449413429412"></a><a name="en-us_topic_0287275940_text1449413429412"></a>openGauss</span> paths <strong id="b11240142010547"><a name="b11240142010547"></a><a name="b11240142010547"></a>GAUSSHOME/PGHOST/GPHOMEE/GAUSSLOG/tmp</strong> and instance directories.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p13997318164215"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13997318164215"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13997318164215"></a>Checks the usage of the above directories. If the usage exceeds the warning threshold (60% by default), a warning is reported. If the usage exceeds the NG threshold (80% by default), this item fails the check. If the usage is less than or equal to the NG threshold, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p16884150104812"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16884150104812"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16884150104812"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row0274122774712"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6274102715479"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6274102715479"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6274102715479"></a>CheckSpaceUsage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p121412181488"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p121412181488"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p121412181488"></a>Checks <span id="text32871538155410"><a name="text32871538155410"></a><a name="text32871538155410"></a>openGauss</span> paths <strong id="b1329273813545"><a name="b1329273813545"></a><a name="b1329273813545"></a>GAUSSHOME/PGHOST/GPHOME/GAUSSLOG/tmp</strong> and instance directories.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p131491813486"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p131491813486"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p131491813486"></a>Checks the usage of the above directories. If the usage exceeds the warning threshold (70% by default), a warning is reported. If the usage exceeds the NG threshold (90% by default), this item fails the check. Also checks the available space of the <strong id="b54492040123411"><a name="b54492040123411"></a><a name="b54492040123411"></a>GAUSSHOME/PGHOST/GPHOME/GAUSSLOG/tmp/data</strong> directory. If the space is less than the threshold, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p88841505486"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p88841505486"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p88841505486"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row162171651124813"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p92172515487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p92172515487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p92172515487"></a>CheckDiskConfig</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p172171651144818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p172171651144818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p172171651144818"></a>Checks whether disk configurations are consistent. If the names, sizes, and mount points of disks are the same, this item passes the check. If any of them is inconsistent, a warning is reported.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p788420104815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p788420104815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p788420104815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row16218443174815"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p172196433488"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p172196433488"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p172196433488"></a>CheckXid</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3219184319483"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3219184319483"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3219184319483"></a>Checks the value of <strong id="b1150792116362"><a name="b1150792116362"></a><a name="b1150792116362"></a>xid</strong>. If the value is greater than 1 billion, a warning is reported. If the value is greater than 1.8 billion, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p488417014816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p488417014816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p488417014816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r5f6d4c6f3d5944fc8b2e06dfe56b51bc"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p128579182507"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p128579182507"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p128579182507"></a>CheckSysTabSize</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p58891217276"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p58891217276"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p58891217276"></a>Checks the system catalog capacity of each instance. If the available capacity of each disk is greater than the total capacity of system catalogs for all instances on the disk, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p138842084816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p138842084816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p138842084816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r0387e269e3614e9aa7489e5e0fe863f6"><td class="cellrowborder" rowspan="17" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p2298121917549"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2298121917549"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2298121917549"></a>Cluster</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13426143719519"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13426143719519"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13426143719519"></a>CheckClusterState</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p17608507412"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17608507412"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17608507412"></a>Checks the fencedUDF status. If it is <strong id="b159591817204318"><a name="b159591817204318"></a><a name="b159591817204318"></a>down</strong>, a warning is reported. In this case, check the <span id="text17589105224114"><a name="text17589105224114"></a><a name="text17589105224114"></a>openGauss</span> status. If it is <strong id="b16960817174317"><a name="b16960817174317"></a><a name="b16960817174317"></a>Normal</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1088412017489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1088412017489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1088412017489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_rb4cef177795b4531a9cbad90375676c9"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ae4f27984bda14177872cda3230ec781f"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ae4f27984bda14177872cda3230ec781f"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ae4f27984bda14177872cda3230ec781f"></a>CheckDBParams</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p109861837155618"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p109861837155618"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p109861837155618"></a>For the primary database node, checks the size of the shared buffer and the <strong id="b919810203237"><a name="b919810203237"></a><a name="b919810203237"></a>Sem</strong> parameter.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p698617372564"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p698617372564"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p698617372564"></a>For database nodes, checks the size of the shared buffer and the maximum number of connections.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p19861537195612"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19861537195612"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19861537195612"></a>The shared buffer size should be greater than 128 KB, greater than <strong id="b842352706211539"><a name="b842352706211539"></a><a name="b842352706211539"></a>shmmax</strong>, and greater than <strong id="b842352706211547"><a name="b842352706211547"></a><a name="b842352706211547"></a>shmall</strong> x <strong id="b842352706211550"><a name="b842352706211550"></a><a name="b842352706211550"></a>PAGESIZE</strong>. </p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p298773711569"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p298773711569"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p298773711569"></a>If there is the primary database node, <strong id="b6990132418238"><a name="b6990132418238"></a><a name="b6990132418238"></a>Sem</strong> must be greater than the rounded up result of (Maximum number of database node connections + 150)/16.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p398713715611"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p398713715611"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p398713715611"></a>If the above items are met, this item passes the check. If any of them is not met, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1188413018486"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188413018486"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188413018486"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r0a5fd8bf84b9414bb3b61a1902384a53"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p825032735719"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p825032735719"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p825032735719"></a>CheckDebugSwitch</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p41031453125713"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p41031453125713"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p41031453125713"></a>Checks the value of the <strong id="b181581342234"><a name="b181581342234"></a><a name="b181581342234"></a>log_min_messages</strong> parameter in the configuration file of each instance on each node. If the value is empty, the default log level <strong id="b131631734152312"><a name="b131631734152312"></a><a name="b131631734152312"></a>warning</strong> is used. In this case, if the actual log level is not <strong id="b161638343231"><a name="b161638343231"></a><a name="b161638343231"></a>warning</strong>, a warning is reported.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p15884707481"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15884707481"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p15884707481"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_ra3af193edd5b4e4aaa5f7aa7d731aa7e"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3416198587"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3416198587"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3416198587"></a>CheckUpVer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p174281451125812"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p174281451125812"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p174281451125812"></a>Checks the version of the upgrade package on each node in <span id="text1934210565416"><a name="text1934210565416"></a><a name="text1934210565416"></a>openGauss</span>. If the versions are consistent, this item passes the check. Otherwise, this item fails the check. You need to specify the path of the upgrade software package.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18884150114818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18884150114818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18884150114818"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_rb090a44b40ea48ab8fb4342d40b91797"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p767795205914"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p767795205914"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p767795205914"></a>CheckDirPermissions</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p34431641175918"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p34431641175918"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p34431641175918"></a>Checks permissions for the node directories (instance Xlog path, <strong id="b280895312231"><a name="b280895312231"></a><a name="b280895312231"></a>GAUSSHOME</strong>, <strong id="b19813125362319"><a name="b19813125362319"></a><a name="b19813125362319"></a>GPHOME</strong>, <strong id="b681315302315"><a name="b681315302315"></a><a name="b681315302315"></a>PGHOST</strong>, and <strong id="b381395315231"><a name="b381395315231"></a><a name="b381395315231"></a>GAUSSLOG</strong>). If the directories allow for the write permission and at most 750 permission, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p388430174814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p388430174814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p388430174814"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r58f888539a384cdda695c5be92d4d56c"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p538518210494"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p538518210494"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p538518210494"></a>CheckEnvProfile</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p107400581303"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p107400581303"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p107400581303"></a>Checks the environment variables (<strong id="b93390346513"><a name="b93390346513"></a><a name="b93390346513"></a>$GAUSSHOME</strong>, <strong id="b1134093420513"><a name="b1134093420513"></a><a name="b1134093420513"></a>$LD_LIBRARY_PATH</strong>, and <strong id="b1234111349519"><a name="b1234111349519"></a><a name="b1234111349519"></a>$PATH</strong>) of nodes and those of the CMS, CMA, and database node processes. If there are node environment variables that are correctly configured and process environment variables exist, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1688490114817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1688490114817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1688490114817"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r1201fa53acb24fdcbee9239e6dcfe43a"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p09617262018"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p09617262018"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p09617262018"></a>CheckGaussVer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5372859315"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5372859315"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5372859315"></a>Checks whether the gaussdb version of each node is consistent. If the versions are consistent, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p588415074811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588415074811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588415074811"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r3a4a763a3faf45a19a9a492f4eae0792"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4240214622"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4240214622"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4240214622"></a>CheckPortRange</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p290015551223"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p290015551223"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p290015551223"></a>Checks the port range. If the value of <strong id="b59661851112417"><a name="b59661851112417"></a><a name="b59661851112417"></a>ip_local_port_range</strong> is within the threshold (26000 to 65535 by default) and an instance port is out of the range, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p178846074815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178846074815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178846074815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1340723615313"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11407183615315"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11407183615315"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11407183615315"></a>CheckReadonlyMode</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p104081536534"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p104081536534"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p104081536534"></a>Checks the read only mode. If the value of <strong id="b69307235820"><a name="b69307235820"></a><a name="b69307235820"></a>default_transaction_read_only</strong> on the database nodes in <span id="text15576412185320"><a name="text15576412185320"></a><a name="text15576412185320"></a>openGauss</span> is <strong id="b0930723688"><a name="b0930723688"></a><a name="b0930723688"></a>off</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p118846084820"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p118846084820"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p118846084820"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1031416171541"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p831411171945"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p831411171945"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p831411171945"></a>CheckCatchup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p431416172042"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p431416172042"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p431416172042"></a>Checks whether the CatchupMain function can be found in the gaussdb process stack. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p788412034815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p788412034815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p788412034815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row673102012518"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3741201053"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3741201053"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3741201053"></a>CheckProcessStatus</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p167411201656"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p167411201656"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p167411201656"></a>Checks the owner of the gaussdb processes. If their owner is only user <strong id="b132645414245"><a name="b132645414245"></a><a name="b132645414245"></a><span id="text10326954132412"><a name="text10326954132412"></a><a name="text10326954132412"></a>omm</span></strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6884100164814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6884100164814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6884100164814"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row149791210266"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p199795101064"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p199795101064"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p199795101064"></a>CheckSpecialFile</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p998019101363"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p998019101363"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p998019101363"></a>Checks whether the files in the <strong id="b4198657132418"><a name="b4198657132418"></a><a name="b4198657132418"></a>tmp</strong> directory (<strong id="b819895702416"><a name="b819895702416"></a><a name="b819895702416"></a>PGHOST</strong>), OM directory (<strong id="b519815718249"><a name="b519815718249"></a><a name="b519815718249"></a>GPHOME</strong>), log directory (<strong id="b8199155722414"><a name="b8199155722414"></a><a name="b8199155722414"></a>GAUSSLOG</strong>), data directory, and program directory (<strong id="b14199257112414"><a name="b14199257112414"></a><a name="b14199257112414"></a>GAUSSHOME</strong>) contain special characters or whether there are files that do not belong to user <strong id="b1619911578242"><a name="b1619911578242"></a><a name="b1619911578242"></a><span id="text12199195714244"><a name="text12199195714244"></a><a name="text12199195714244"></a>omm</span></strong>. If none of them exists, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p14884160104816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14884160104816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14884160104816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row9134171676"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1013510710713"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1013510710713"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1013510710713"></a>CheckCollector</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4135197275"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4135197275"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4135197275"></a>Checks whether information is successfully collected in the output directory. If yes, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p2884805482"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2884805482"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2884805482"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row44538535112"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p84531852516"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p84531852516"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p84531852516"></a>CheckLargeFile</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1645310575111"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1645310575111"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1645310575111"></a>Checks whether there is a file over 4 GB in the directory of each database node. If there is such a file in any database node directory and its subdirectories, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p588470194815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588470194815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588470194815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row15218041581"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5219184165815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5219184165815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5219184165815"></a>CheckProStartTime</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p142198410588"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p142198410588"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p142198410588"></a>Checks whether the interval for starting key processes exceeds 5 minutes. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11884100104814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11884100104814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11884100104814"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row44593351171"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p04591935573"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p04591935573"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p04591935573"></a>CheckDilateSysTab</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1745983514717"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1745983514717"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1745983514717"></a>Checks whether a system catalog is bloated. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4884160164814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4884160164814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4884160164814"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1396492717591"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10965227135914"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10965227135914"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10965227135914"></a>CheckMpprcFile</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1896542755913"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1896542755913"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1896542755913"></a>Checks whether the environment variable isolation file is modified. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18856013487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18856013487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18856013487"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_rece962e46c5140efb0195d1487ef50a0"><td class="cellrowborder" rowspan="28" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p14072659154931"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p14072659154931"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p14072659154931"></a>Database</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p489613177716"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p489613177716"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p489613177716"></a>CheckLockNum</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p1977465115259"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p1977465115259"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p1977465115259"></a>Checks the number of database locks. If a result is returned, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1388517084812"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1388517084812"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1388517084812"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r4eb3de9ce9564fae8541899cf3505993"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p3354978199"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p3354978199"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_en-us_topic_0058968132_p3354978199"></a>CheckArchiveParameter</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p35819471611"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35819471611"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35819471611"></a>Checks the database archive parameter. If the parameter is not enabled or is enabled for database nodes, this item passes the check. If it is enabled but not for database nodes, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19885309487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19885309487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19885309487"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row49678411210"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p189671541142117"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p189671541142117"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p189671541142117"></a>CheckCurConnCount</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p9967194182110"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9967194182110"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9967194182110"></a>Checks the number of database connections. If the number is less than 90% of the maximum connection quantity, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p178851301483"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178851301483"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178851301483"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1956052811220"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p35601828182218"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35601828182218"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35601828182218"></a>CheckCursorNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p175611328132213"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p175611328132213"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p175611328132213"></a>Checks the number of cursors in the database. If a result is returned, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p7885100204812"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7885100204812"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7885100204812"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1454980102315"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1955420172312"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1955420172312"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1955420172312"></a>CheckMaxDatanode</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18554160122314"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18554160122314"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18554160122314"></a>Checks the maximum number of database nodes. If the number is less than the number of nodes configured in the XML file multiplied by the number of database nodes (90 x 5 by default), a warning is reported. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p388515084817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p388515084817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p388515084817"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row159501122192419"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p695062232415"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p695062232415"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p695062232415"></a>CheckPgPreparedXacts</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5951112272412"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5951112272412"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5951112272412"></a>Checks the <strong id="b1453019317499"><a name="b1453019317499"></a><a name="b1453019317499"></a>pgxc_prepared_xacts</strong> parameter. If no 2PC transactions are found, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p158851800480"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p158851800480"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p158851800480"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row72101927202517"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10210142712515"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10210142712515"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10210142712515"></a>CheckPgxcgroup</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p192111327122517"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p192111327122517"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p192111327122517"></a>Checks the number of redistributed records in the <strong id="b11659517114916"><a name="b11659517114916"></a><a name="b11659517114916"></a>pgxc_group</strong> table. If the result is 0, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p2885140164816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2885140164816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2885140164816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row87581311162614"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p147597119266"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p147597119266"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p147597119266"></a>CheckLockState</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11759111202610"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11759111202610"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11759111202610"></a>Checks whether <span id="text1545422692512"><a name="text1545422692512"></a><a name="text1545422692512"></a>openGauss</span> is locked. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p888510064817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p888510064817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p888510064817"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row10770144617263"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1677111460261"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1677111460261"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1677111460261"></a>CheckIdleSession</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p146551617585"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p146551617585"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p146551617585"></a>Checks the number of non-idle sessions. If the result is 0, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p88851908489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p88851908489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p88851908489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row178761737112711"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1687683732716"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1687683732716"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1687683732716"></a>CheckDBConnection</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12876537122719"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12876537122719"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12876537122719"></a>Checks whether the database can be connected. If yes, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1188520094814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188520094814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188520094814"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row9530101314283"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1853117132281"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1853117132281"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1853117132281"></a>CheckGUCValue</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p8531413132810"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8531413132810"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8531413132810"></a>Checks the result of [(<strong id="b42771520205112"><a name="b42771520205112"></a><a name="b42771520205112"></a>max_connections</strong> + <strong id="b928310206513"><a name="b928310206513"></a><a name="b928310206513"></a>max_prepared_transactions</strong>) x <strong id="b828392012514"><a name="b828392012514"></a><a name="b828392012514"></a>max_locks_per_transaction</strong>]. If it is greater than or equal to 1 million, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18851074816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18851074816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18851074816"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row6213122814292"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p172142028102912"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p172142028102912"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p172142028102912"></a>CheckPMKData</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p42148283292"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p42148283292"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p42148283292"></a>Checks whether the PMK schema of the database contains abnormal data. If no, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p68856084818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p68856084818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p68856084818"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row116211351308"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4622175143010"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4622175143010"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4622175143010"></a>CheckSysTable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p362217553010"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p362217553010"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p362217553010"></a>Checks the system catalog. If the check can be performed, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p128850016484"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p128850016484"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p128850016484"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row16434144545816"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p843444510581"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p843444510581"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p843444510581"></a>CheckSysTabSize</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p7434134555811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7434134555811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7434134555811"></a>Checks the system catalog capacity of each instance. If the available capacity of each disk is greater than the total capacity of system catalogs for all instances on the disk, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p178851109489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178851109489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178851109489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_row23371862154931"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p66143576154931"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p66143576154931"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p66143576154931"></a>CheckTableSpace</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p56029454154931"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p56029454154931"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_p56029454154931"></a>Checks tablespace paths. If no tablespace path and <span id="text1163251444210"><a name="text1163251444210"></a><a name="text1163251444210"></a>openGauss</span> path are nested and no tablespace paths are nested, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p288516016485"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p288516016485"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p288516016485"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row13583400153854"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p52151908153854"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p52151908153854"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p52151908153854"></a>CheckTableSkew</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p53153326153854"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p53153326153854"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p53153326153854"></a>Checks the skew of table data. If a table has unbalanced data distribution among <span id="text19971815144212"><a name="text19971815144212"></a><a name="text19971815144212"></a>openGauss</span> database nodes, and the database node with the most data has over 100,000 records more than the database node with the least data, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1488530124811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1488530124811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1488530124811"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row29611164153937"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p21983277153937"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p21983277153937"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p21983277153937"></a>CheckDNSkew</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p35525501153937"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35525501153937"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p35525501153937"></a>Checks the skew of table data at the database node level. If the database node with the most amount of data has 5% more than the database node with the smallest amount of data, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p20885120104818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p20885120104818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p20885120104818"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row58812311153946"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p36734871153946"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p36734871153946"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p36734871153946"></a>CheckUnAnalyzeTable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p67074291153946"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p67074291153946"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p67074291153946"></a>Checks for a table that has not been analyzed. If there is such a table and the table contains at least one record, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1288520124819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288520124819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1288520124819"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row59041161416"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p99151101414"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p99151101414"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p99151101414"></a>CheckCreateView</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p179161161410"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p179161161410"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p179161161410"></a>If the query statement for creating a view contains sub-queries, and parsing and rewriting sub-query results lead to duplicate aliases, the check result is failed. Otherwise, the check result is passed.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1388510064817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1388510064817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1388510064817"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row2463183561619"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p3463635101619"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3463635101619"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p3463635101619"></a>CheckHashIndex</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p84631335131614"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p84631335131614"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p84631335131614"></a>Checks whether there are hash indexes. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19885100485"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19885100485"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19885100485"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row983613733611"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p88361437153615"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p88361437153615"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p88361437153615"></a>CheckNextvalInDefault</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1983693713363"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1983693713363"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1983693713363"></a>Checks whether a DEFAULT expression contains <strong id="b181516221307"><a name="b181516221307"></a><a name="b181516221307"></a>nextval</strong> (sequence). If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p688513064815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p688513064815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p688513064815"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row172968126384"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p429731214381"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p429731214381"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p429731214381"></a>CheckNodeGroupName</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5297111219381"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5297111219381"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5297111219381"></a>Checks whether the name of a Node Group contains non-SQL_ASCII characters. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18885403485"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18885403485"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18885403485"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1429113124120"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1529111324115"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1529111324115"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1529111324115"></a>CheckPgxcRedistb</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p14291163174117"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14291163174117"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14291163174117"></a>Checks whether any temporary table remains in the database after data redistribution. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p108851701487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108851701487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108851701487"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row14138115462"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p9138181104617"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9138181104617"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p9138181104617"></a>CheckReturnType</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p161383174614"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p161383174614"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p161383174614"></a>Checks whether a user-defined function contains invalid return value types. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p118855054817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p118855054817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p118855054817"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row19878164044713"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11878154010476"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11878154010476"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11878154010476"></a>CheckSysadminUser</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10878174017472"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10878174017472"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10878174017472"></a>Checks whether there are database administrators in addition to the owner of <span id="text484421618422"><a name="text484421618422"></a><a name="text484421618422"></a>openGauss</span>. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p16885602489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16885602489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p16885602489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row668434213118"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10684134216110"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10684134216110"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10684134216110"></a>CheckTDDate</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p186849421116"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p186849421116"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p186849421116"></a>Checks whether the ORC table in a Teradata database contains columns of the date type. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p588513074816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588513074816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588513074816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row186864326264"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12686832182611"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12686832182611"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12686832182611"></a>CheckDropColumn</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6686132142613"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6686132142613"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6686132142613"></a>Checks whether there are tables on which <strong id="b17810137303"><a name="b17810137303"></a><a name="b17810137303"></a>DROP COLUMN</strong> has been performed. If yes, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1888530174816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1888530174816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1888530174816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row59311665153953"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p22392509153953"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p22392509153953"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p22392509153953"></a>CheckDiskFailure</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p51016997153953"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p51016997153953"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p51016997153953"></a>Checks for disk faults. If there is an error during full data query in <span id="text1292631784214"><a name="text1292631784214"></a><a name="text1292631784214"></a>openGauss</span>, this item fails the check. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p108858018482"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108858018482"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108858018482"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_r9026797791aa43ad896fa3e312414c4e"><td class="cellrowborder" rowspan="10" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p26871935143214"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p26871935143214"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p26871935143214"></a>Network</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a4e4cdce379d342d984ae8ba2850e6a52"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a4e4cdce379d342d984ae8ba2850e6a52"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_a4e4cdce379d342d984ae8ba2850e6a52"></a>CheckPing</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1973392743316"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1973392743316"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1973392743316"></a>Checks the connectivity of all nodes in <span id="text172811119154215"><a name="text172811119154215"></a><a name="text172811119154215"></a>openGauss</span>. If all their IP addresses can be pinged from each other, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p178858084816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178858084816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p178858084816"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row18763524336"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p27617522332"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p27617522332"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p27617522332"></a>CheckRXTX</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1566119285356"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1566119285356"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1566119285356"></a>Checks the RX/TX value for <strong id="b16647168515"><a name="b16647168515"></a><a name="b16647168515"></a>backIP</strong> of a node. If it is <strong id="b16648881412"><a name="b16648881412"></a><a name="b16648881412"></a>4096</strong>, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p48851709489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p48851709489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p48851709489"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row9348205983511"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p173483598359"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p173483598359"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p173483598359"></a>CheckMTU</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1734845917355"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1734845917355"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1734845917355"></a>Checks the MTU value of a NIC corresponding to <strong id="b5171134195514"><a name="b5171134195514"></a><a name="b5171134195514"></a>backIP</strong> of a node (ensure consistent PICs after bonding). If the result is not 8192 or 1500, a warning is reported. In this case, if MTU values in <span id="text1491732010421"><a name="text1491732010421"></a><a name="text1491732010421"></a>openGauss</span> are the same, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p48857034819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p48857034819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p48857034819"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row167431638123612"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1974423815362"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1974423815362"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1974423815362"></a>CheckNetWorkDrop</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1774473863614"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1774473863614"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1774473863614"></a>Checks the packet loss rate of each IP address within 1 minute. If the rate does not exceed 1%, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p108852013488"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108852013488"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p108852013488"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1418243363716"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p141825333379"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p141825333379"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p141825333379"></a>CheckBond</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p163628164386"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163628164386"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163628164386"></a>Checks whether <strong id="b2311425267"><a name="b2311425267"></a><a name="b2311425267"></a>BONDING_OPTS</strong> or <strong id="b1936842192611"><a name="b1936842192611"></a><a name="b1936842192611"></a>BONDING_MODULE_OPTS</strong> is configured. If no, a warning is reported. In this case, checks whether the bond mode of each node is the same. If yes, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p588614012489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588614012489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p588614012489"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row654814264313"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11548154214316"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11548154214316"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11548154214316"></a>CheckMultiQueue</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12652154317447"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12652154317447"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12652154317447"></a>Checks <strong id="b10344182472213"><a name="b10344182472213"></a><a name="b10344182472213"></a>cat /proc/interrupts</strong>. If multiqueue is enabled for NICs and different CPUs are bound, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18886307480"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18886307480"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18886307480"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row488303013452"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1188413307451"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188413307451"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188413307451"></a>CheckUsedPort</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12117504466"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12117504466"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12117504466"></a>Checks the value of <strong id="b1093213214223"><a name="b1093213214223"></a><a name="b1093213214223"></a>net.ipv4.ip_local_port_range</strong>. If the value is greater than or equal to the default value of the OS (32768 to 61000), this item passes the check.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p921135019469"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p921135019469"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p921135019469"></a>Checks the number of random TCP ports. If the number is less than 80% of the total number of random ports, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p58869018489"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p58869018489"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p58869018489"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1276312161090"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p976451617910"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p976451617910"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p976451617910"></a>CheckNICModel</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p22518225415"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p22518225415"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p22518225415"></a>Checks whether NIC models or driver versions are consistent across nodes. If yes, this item passes the check. Otherwise, a warning is reported.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1188610034817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188610034817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1188610034817"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1748855871316"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p134881158191312"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p134881158191312"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p134881158191312"></a>CheckRouting</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5488058101316"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5488058101316"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5488058101316"></a>Checks the number of IP addresses on the service network segment for each node. If the number exceeds 1, a warning is reported. Otherwise, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p188865019487"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p188865019487"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p188865019487"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_rb677d671b7bc4d068f2732f5e9a3cea3"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p762065654618"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p762065654618"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p762065654618"></a>CheckNetSpeed</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_aa3f091afaf8c4a6f86aa755b40e2ceec"><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_aa3f091afaf8c4a6f86aa755b40e2ceec"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_aa3f091afaf8c4a6f86aa755b40e2ceec"></a>When the network is fully loaded, checks whether the average NIC receiving bandwidth is greater than 600 MB. If yes, this item passes the check.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p7248318124817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7248318124817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7248318124817"></a>When the network is fully loaded, checks the network ping value. If it is shorter than 1s, this item passes the check.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p1624801814815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1624801814815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1624801814815"></a>When the network is fully loaded, checks the NIC packet loss rate. If it is less than 1%, this item passes the check.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p688660134818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p688660134818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p688660134818"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row154751136492"><td class="cellrowborder" valign="top" width="13.969999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p447523204919"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p447523204919"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p447523204919"></a>Others</p>
</td>
<td class="cellrowborder" valign="top" width="24.8%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p184751317492"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p184751317492"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p184751317492"></a>CheckDataDiskUsage</p>
</td>
<td class="cellrowborder" valign="top" width="44.43%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19476738497"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19476738497"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19476738497"></a>Checks the usage of the disk database node directory. If the usage is lower than 90%, this item passes the check. Otherwise, this item fails the check.</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p28867044819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p28867044819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p28867044819"></a>No</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Constraints on the CheckNetSpeed check item are as follows:
>-   Do not use  **-L**  to check CheckNetSpeed, because doing so cannot produce enough network load and the check result will be inaccurate.
>-   If the number of nodes is less than six, the network load produced by  **speed\_test**  may not fully occupy the bandwidth, and the check result will be inaccurate.

## Defining a Scenario<a name="en-us_topic_0287275940_en-us_topic_0237152330_section1111595434113"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Create the scenario configuration file  **scene\_**_XXX_**.xml**  in the  _$GPHOME_**/script/gspylib/inspection/config**  directory.
3.  Write check items to the scenario configuration file in the following format:

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

    **item name**  indicates the check item name.

    Note: You need to ensure that the user-defined XML file is correct.

4.  Run the following command in the  **home/package/script/gspylib/inspection/config**  directory to deploy the file on each node where the check is to be performed:

    ```
    scp scene_upgrade.xml SIA1000068994: home/package/script/gspylib/inspection/config/
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**home/package/script/gspylib/inspection/config**  is the absolute path of the new scenario configuration file.

5.  Switch to user  **omm**  and run the following command to view the check result:

    ```
    gs_check  -e XXX
    ```


## Defining a Check Item<a name="en-us_topic_0287275940_en-us_topic_0237152330_section1497431723111"></a>

1.  Add a check item. Modify the  **script/gspylib/inspection/config/items.xml**  file in the following format:

    ```
    <checkitem id="10010" name="CheckCPU">
    <title>
    <en>Check the CPU usage.</en>
    <en>Check CPU Idle and I/O wait</en>
    </title>
    <threshold>
    StandardCPUIdle=30;
    StandardWIO=30
    </threshold>
    <suggestion>
    <zh>If the available space is insufficient and the CPU is heavily loaded, scale out the CPU node. If iowait is too high, replace this disk with a high-performance one, which is the current performance bottleneck.</zh>.
    </suggestion>
    <standard>
    <zh>Check the CPU usage of the host. If the value of idle is greater than 30% and the value of iowait is less than 30%, this item passes the check. Otherwise, this item fails the check.</zh>
    </standard>
    <category>os</category>
    <permission>user</permission>
    <scope>all</scope>
    <analysis>default</analysis>
    </checkitems>
    ```

    -   **id**: specifies the check item ID.
    -   **name**: specifies the name of the check script.
    -   **title**: specifies the name of the check item. It allows multiple languages.

        **<zh\>**: checks content of Chinese version.

        **<en\>**: checks content of English version.

    -   **standard**: specifies the check standards. It allows multiple languages.
    -   **suggestion**: provides advice on how to fix check item problems. It allows multiple languages.
    -   **threshold**: specifies the check item threshold. Multiple values are separated using semicolons \(;\), for example,  **Key1=Value1;Key2=Value2**.
    -   **category**: specifies the check item type. It is optional. Its value can be  **os**,  **device**,  **network**,  **cluster**,  **database**, or  **other**.
    -   **permission**: specifies the permission required for checking an item. It is optional. Its value can be  **root**  or  **user**  \(default\).
    -   **scope**: specifies the node scope where an item is checked. It is optional.  **cn-**  indicates that only the primary database node resides is checked.  **local-**  indicates that only the current node is checked.  **all-**  is the default value, indicating that all nodes in openGauss are checked.
    -   **analysis**: specifies how the check result is analyzed.  **default-**  is the default value, indicating that the result on every node is checked, and that an item passes the check only if it passes the check on all the nodes.  **consistent-**  indicates that each node returns a result, and that an item passes the check if all the results are consistent.  **custom-**  indicates other ways.

    Note: You need to ensure that the user-defined XML file is correct.

2.  Create a check script named  **Check**_XXXX_**.py**  in the  **script/gspylib/inspection/items**  directory. The directory should contain multiple folders, each storing a type of scripts. The format is as follows:

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

    A script is developed based on the BaseItem class, which defines the common check process, result analysis method, and default output format. Extended parameters:

    -   **doCheck**: contains specific ways to check an item. The check result is in the following format:

        **result.rst**: \(optional\) specifies the check result. Its value can be:

        -   **OK**: indicates that the item passes the check.
        -   **NA**: indicates that the check does not cover the node.
        -   **NG**: indicates that the item failed the check.
        -   **WARNING**: indicates that the check is complete and that a warning is reported.
        -   **ERROR**: indicates that the check is interrupted due to an internal error.

    -   **preCheck**: checks prerequisites. Its value can be  **cnPreCheck**, which checks whether a primary database node instance is deployed on the current execution node; or  **localPreCheck**, which checks whether the current execution node is specified for the check. You can set it using  **scope**  in the check item configuration file. This method can be reloaded to perform customized pre-checks.
    -   **postAnalysis**  specifies how the check result is analyzed. Its value can be  **default**  or  **consistent**. You can set it using  **analysis**  in the check item configuration file. This method can be reloaded to perform customized result analysis.

    Note: The name of a user-defined check item cannot be the same as the name of an existing check item. In addition, you need to ensure that the user-defined check item script is standard.

3.  Deploy the script on all execution nodes.
4.  Log in as the user  **omm**  and run the following command to view the result:

    To locally perform a check, run the following command:

    ```
    gs_check -i CheckXXX  -L
    ```

    To remotely perform a check, run the following command:

    ```
    gs_check  -i  CheckXXX
    ```


## OS Parameters<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_s8b7df4cd80bf4a84927d84af2d49b32d"></a>

**Table  2**  OS parameters

<a name="en-us_topic_0287275940_en-us_topic_0237152330_table174711620568"></a>
<table><thead align="left"><tr id="en-us_topic_0287275940_en-us_topic_0237152330_row134711465560"><th class="cellrowborder" valign="top" width="24.08240824082408%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275940_en-us_topic_0237152330_p258931915710"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p258931915710"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p258931915710"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.04520452045204%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1358931917574"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1358931917574"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1358931917574"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="23.87238723872387%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6590119125718"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6590119125718"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6590119125718"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275940_en-us_topic_0237152330_row647214625611"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1125722695711"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1125722695711"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1125722695711"></a>net.ipv4.tcp_max_tw_buckets</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p182571426125710"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p182571426125710"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p182571426125710"></a>Specifies the maximum number of TCP/IP connections concurrently remaining in the <strong id="b4326152285710"><a name="b4326152285710"></a><a name="b4326152285710"></a>TIME_WAIT</strong> state. If the number of TCP/IP connections concurrently remaining in the <strong id="b173191610185915"><a name="b173191610185915"></a><a name="b173191610185915"></a>TIME_WAIT</strong> state exceeds the value of this parameter, the TCP/IP connections in the <strong id="b432415103599"><a name="b432415103599"></a><a name="b432415103599"></a>TIME_WAIT</strong> state will be released immediately, and alarm information will be printed.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p42571268571"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p42571268571"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p42571268571"></a>10000</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row4472364569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p59261713115813"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p59261713115813"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p59261713115813"></a>net.ipv4.tcp_tw_reuse</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p169261713135818"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p169261713135818"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p169261713135818"></a>Reuses sockets whose status is <strong id="b16313284593"><a name="b16313284593"></a><a name="b16313284593"></a>TIME-WAIT</strong> for new TCP connections.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul99261213185819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul99261213185819"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul99261213185819"><li><strong id="b1176371006"><a name="b1176371006"></a><a name="b1176371006"></a>0</strong>: This function is disabled.</li><li><strong id="b34524371207"><a name="b34524371207"></a><a name="b34524371207"></a>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1692713134587"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1692713134587"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1692713134587"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row94736616569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p292717139588"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p292717139588"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p292717139588"></a>net.ipv4.tcp_tw_recycle</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1992811310580"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1992811310580"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1992811310580"></a>Rapidly reclaims sockets whose status is <strong id="b5393144218018"><a name="b5393144218018"></a><a name="b5393144218018"></a>TIME-WAIT</strong> in TCP connections.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul17928101395817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul17928101395817"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul17928101395817"><li><strong id="b167791727117"><a name="b167791727117"></a><a name="b167791727117"></a>0</strong>: This function is disabled.</li><li><strong id="b9896833116"><a name="b9896833116"></a><a name="b9896833116"></a>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1928613155814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1928613155814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1928613155814"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row4676171295719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11929181313586"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11929181313586"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11929181313586"></a>net.ipv4.tcp_keepalive_time</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p199291139588"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p199291139588"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p199291139588"></a>Specifies how often Keepalived messages are sent through TCP connections when Keepalived is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p892911355817"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p892911355817"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p892911355817"></a>30</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row17677191218575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1492941395814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1492941395814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1492941395814"></a>net.ipv4.tcp_keepalive_probes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p49291138584"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p49291138584"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p49291138584"></a>Specifies the number of Keepalived detection packets sent through a TCP connection before the connection is regarded invalid. The product of the parameter value multiplied by the value of the <strong id="b89644484212"><a name="b89644484212"></a><a name="b89644484212"></a>tcp_keepalive_intvl</strong> parameter determines the response timeout duration after a Keepalived message is sent through a connection.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5930181310585"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5930181310585"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5930181310585"></a>9</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1467720124571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1593010138588"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1593010138588"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1593010138588"></a>net.ipv4.tcp_keepalive_intvl</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p59301313185815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p59301313185815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p59301313185815"></a>Specifies how often a detection packet is re-sent when the previous packets are not acknowledged.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4931151314582"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4931151314582"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4931151314582"></a>30</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row885193417577"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p209310131583"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p209310131583"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p209310131583"></a>net.ipv4.tcp_retries1</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6932131313581"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6932131313581"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6932131313581"></a>Specifies the maximum TCP reattempts during connection establishment.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p793281355810"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p793281355810"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p793281355810"></a>5</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row785253455720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p17932713145816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17932713145816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17932713145816"></a>net.ipv4.tcp_syn_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p189321613175819"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p189321613175819"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p189321613175819"></a>Specifies the maximum SYN packet reattempts in the TCP.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p693313136582"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p693313136582"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p693313136582"></a>5</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row10853153425712"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1293371305814"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1293371305814"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1293371305814"></a>net.ipv4.tcp_synack_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p17933201318587"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17933201318587"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17933201318587"></a>Specifies the maximum SYN response packet reattempts in the TCP.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p99331013155811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p99331013155811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p99331013155811"></a>5</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row0188144110571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p203091939195813"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p203091939195813"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p203091939195813"></a>net.ipv4.tcp_retries2</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1331013399587"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1331013399587"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1331013399587"></a>Specifies the number of times that the kernel re-sends data to a connected remote host. A smaller value leads to earlier detection of an invalid connection to the remote host, and the server can quickly release this connection.</p>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p133103392585"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p133103392585"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p133103392585"></a>If "connection reset by peer" is displayed, increase the value of this parameter to avoid the problem.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p83101739145811"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p83101739145811"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p83101739145811"></a>12</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row0188184135716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10310183915815"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10310183915815"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10310183915815"></a>vm.overcommit_memory</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12311173912584"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12311173912584"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12311173912584"></a>Specifies the kernel check method during memory allocation.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul14311183913587"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul14311183913587"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul14311183913587"><li><strong id="b17123115184916"><a name="b17123115184916"></a><a name="b17123115184916"></a>0</strong>: The system accurately calculates the current available memory.</li><li><strong id="b1621415220157"><a name="b1621415220157"></a><a name="b1621415220157"></a>1</strong>: The system returns a success message without a kernel check.</li><li><strong id="b171696631512"><a name="b171696631512"></a><a name="b171696631512"></a>2</strong>: The system returns a failure message if the memory size you have applied for exceeds the result of the following formula: Total memory size x Value of <strong id="b1516911615150"><a name="b1516911615150"></a><a name="b1516911615150"></a>vm.overcommit_ratio</strong>/100 + Total SWAP size.</li></ul>
<p id="en-us_topic_0287275940_en-us_topic_0237152330_p193123394589"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p193123394589"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p193123394589"></a>The default value for a kernel is <strong id="b144171433191519"><a name="b144171433191519"></a><a name="b144171433191519"></a>2</strong>, which is too conservative. The recommended value is <strong id="b3417153313154"><a name="b3417153313154"></a><a name="b3417153313154"></a>0</strong>. If system loads are high, set this parameter to <strong id="b20417153310155"><a name="b20417153310155"></a><a name="b20417153310155"></a>1</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13313153945816"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13313153945816"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13313153945816"></a>0</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row3361592574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19529155145913"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19529155145913"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19529155145913"></a>net.ipv4.tcp_rmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1452915511595"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1452915511595"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1452915511595"></a>Specifies the free memory in the TCP receiver buffer. Three memory size ranges in the unit of page are provided: <strong id="b7989519227"><a name="b7989519227"></a><a name="b7989519227"></a>min</strong>, <strong id="b131033519221"><a name="b131033519221"></a><a name="b131033519221"></a>default</strong>, and <strong id="b151039511226"><a name="b151039511226"></a><a name="b151039511226"></a>max</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p5529155105915"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5529155105915"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p5529155105915"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row10378590579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p953010511591"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p953010511591"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p953010511591"></a>net.ipv4.tcp_wmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1153017545918"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1153017545918"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1153017545918"></a>Specifies the free memory in the TCP sender buffer. Three memory size ranges in the unit of page are provided: <strong id="b6352132418231"><a name="b6352132418231"></a><a name="b6352132418231"></a>min</strong>, <strong id="b335842482310"><a name="b335842482310"></a><a name="b335842482310"></a>default</strong>, and <strong id="b2035852420233"><a name="b2035852420233"></a><a name="b2035852420233"></a>max</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p195301356597"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p195301356597"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p195301356597"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row2387595578"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p163351922125910"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163351922125910"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163351922125910"></a>net.core.wmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p14335132214593"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14335132214593"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14335132214593"></a>Specifies the maximum size of the socket sender buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p633582217598"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p633582217598"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p633582217598"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row33995910574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12336132225915"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12336132225915"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12336132225915"></a>net.core.rmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p2336172218596"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2336172218596"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2336172218596"></a>Specifies the maximum size of the socket receiver buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p163361222205919"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163361222205919"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163361222205919"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1739559195711"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p8336142211595"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8336142211595"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8336142211595"></a>net.core.wmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p6337182218592"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6337182218592"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p6337182218592"></a>Specifies the default size of the socket sender buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p193371222105920"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p193371222105920"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p193371222105920"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row14011595570"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p333715223593"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p333715223593"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p333715223593"></a>net.core.rmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p163371922175915"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163371922175915"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163371922175915"></a>Specifies the default size of the socket receiver buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13338122275917"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13338122275917"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13338122275917"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1041959195714"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1833892275911"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1833892275911"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1833892275911"></a>net.ipv4.ip_local_port_range</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p0338112235914"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p0338112235914"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p0338112235914"></a>Specifies the range of temporary ports that can be used by a physical server.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p14339142235915"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14339142235915"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p14339142235915"></a>26000-65535</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row0425596573"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1933992225914"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1933992225914"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1933992225914"></a>kernel.sem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p933942215595"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p933942215595"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p933942215595"></a>Specifies the kernel semaphore.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12340132213597"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12340132213597"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12340132213597"></a>250 6400000 1000 25600</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row44385915579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p934010229591"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p934010229591"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p934010229591"></a>vm.min_free_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p183405228591"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p183405228591"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p183405228591"></a>Specifies the minimum free physical memory reserved for unexpected page breaks.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p17341142215591"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17341142215591"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17341142215591"></a>5% of the total system memory</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row9431359105719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p11341322145910"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11341322145910"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p11341322145910"></a>net.core.somaxconn</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1234282213599"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1234282213599"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1234282213599"></a>Specifies the maximum length of the listening queue of each port. This is a global parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p534272295916"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p534272295916"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p534272295916"></a>65535</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row11442059175716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p163421022125917"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163421022125917"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p163421022125917"></a>net.ipv4.tcp_syncookies</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1534362218593"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1534362218593"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1534362218593"></a>Specifies whether to enable SYN cookies to guard the OS against SYN attacks when the SYN waiting queue overflows.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul534318226591"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul534318226591"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul534318226591"><li><strong id="b69141051192614"><a name="b69141051192614"></a><a name="b69141051192614"></a>0</strong>: The SYN cookies are disabled.</li><li><strong id="b282875622614"><a name="b282875622614"></a><a name="b282875622614"></a>1</strong>: The SYN cookies are enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p133441022135919"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p133441022135919"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p133441022135919"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row119054135715"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1671381607"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1671381607"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1671381607"></a>net.core.netdev_max_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1975811012"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1975811012"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1975811012"></a>Specifies the maximum number of data packets that can be sent to the queue when the rate at which the network device receives data packets is higher than that at which the kernel processes the data packets.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1287819014"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1287819014"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1287819014"></a>65535</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1319012411575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p19813814012"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19813814012"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p19813814012"></a>net.ipv4.tcp_max_syn_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p13818816015"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13818816015"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p13818816015"></a>Specifies the maximum number of unacknowledged connection requests to be recorded.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1791986010"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1791986010"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1791986010"></a>65535</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row111911441145720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p20914818010"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p20914818010"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p20914818010"></a>net.ipv4.tcp_fin_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p7978801"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7978801"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p7978801"></a>Specifies the default timeout.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p17101281003"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17101281003"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17101281003"></a>60</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row171915417579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p61016819012"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p61016819012"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p61016819012"></a>kernel.shmall</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1810481505"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1810481505"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1810481505"></a>Specifies the total shared free memory of the kernel.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p8101081004"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8101081004"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8101081004"></a>1152921504606846720</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1093874517594"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p4118812012"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4118812012"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p4118812012"></a>kernel.shmmax</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p131117813014"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p131117813014"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p131117813014"></a>Specifies the maximum value of a shared memory segment.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p181188803"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p181188803"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p181188803"></a>18446744073709551615</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row1493934585918"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p412986019"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p412986019"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p412986019"></a>net.ipv4.tcp_sack</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p112881904"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p112881904"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p112881904"></a>Specifies whether selective acknowledgment is enabled. The selective acknowledgment on out-of-order packets can increase system performance. Restricting users to sending only lost packets (for wide area networks) should be enabled, but this will increase CPU usage.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul112208308"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul112208308"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul112208308"><li><strong id="b1179155283917"><a name="b1179155283917"></a><a name="b1179155283917"></a>0</strong>: This function is disabled.</li><li><strong id="en-us_topic_0058968139_b84235270616346_1"><a name="en-us_topic_0058968139_b84235270616346_1"></a><a name="en-us_topic_0058968139_b84235270616346_1"></a>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p17131181208"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17131181208"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p17131181208"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row199407451592"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p111418818011"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p111418818011"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p111418818011"></a>net.ipv4.tcp_timestamps</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p10141681903"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10141681903"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p10141681903"></a>Specifies whether the TCP timestamp (12 bytes are added in the TCP packet header) enables a more accurate RTT calculation than the retransmission timeout (for details, see RFC 1323) for better performance.</p>
<a name="en-us_topic_0287275940_en-us_topic_0237152330_ul814881508"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_ul814881508"></a><ul id="en-us_topic_0287275940_en-us_topic_0237152330_ul814881508"><li><strong id="b968851318418"><a name="b968851318418"></a><a name="b968851318418"></a>0</strong>: This function is disabled.</li><li><strong id="b659542291"><a name="b659542291"></a><a name="b659542291"></a>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p18151381901"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18151381901"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p18151381901"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row3940154515911"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p02308185016"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p02308185016"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p02308185016"></a>vm.extfrag_threshold</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p62301518909"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p62301518909"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p62301518909"></a>When system memory is insufficient, Linux will score the current system memory fragments. If the score is higher than the value of <strong id="b3553132174111"><a name="b3553132174111"></a><a name="b3553132174111"></a>vm.extfrag_threshold</strong>, <strong id="b17554112115416"><a name="b17554112115416"></a><a name="b17554112115416"></a>kswapd</strong> triggers memory compaction. When the value of this parameter is close to <strong id="b5936937142916"><a name="b5936937142916"></a><a name="b5936937142916"></a>1000</strong>, the system tends to swap out old pages when processing memory fragments to meet the application requirements. When the value of this parameter is close to <strong id="b199401937162916"><a name="b199401937162916"></a><a name="b199401937162916"></a>0</strong>, the system tends to do memory compaction when processing memory fragments.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p923111816015"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p923111816015"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p923111816015"></a>500</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row14114125155912"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p8231218904"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8231218904"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p8231218904"></a>vm.overcommit_ratio</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p1823117183015"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1823117183015"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p1823117183015"></a>When the system uses the algorithms where memory usage never exceeds the thresholds, the total memory address space of the system cannot exceed the value of <strong id="b5952116204412"><a name="b5952116204412"></a><a name="b5952116204412"></a>swap+RAM</strong> multiplied by the percentage specified by this parameter. When the value of <strong id="b1795321604420"><a name="b1795321604420"></a><a name="b1795321604420"></a>vm.overcommit_memory</strong> is set to <strong id="b13953916174414"><a name="b13953916174414"></a><a name="b13953916174414"></a>2</strong>, this parameter takes effect.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p12232121819017"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12232121819017"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p12232121819017"></a>90</p>
</td>
</tr>
<tr id="en-us_topic_0287275940_en-us_topic_0237152330_row151152051125910"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p2233161813015"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2233161813015"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p2233161813015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p32330181404"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p32330181404"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p32330181404"></a>Specifies the maximum transmission unit (MTU) for a node NIC. The default value in the OS is <strong id="b18906717134619"><a name="b18906717134619"></a><a name="b18906717134619"></a>1500</strong>. You can set it to <strong id="b690611754610"><a name="b690611754610"></a><a name="b690611754610"></a>8192</strong> to improve the performance of sending and receiving data using SCTP.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275940_en-us_topic_0237152330_p223412181010"><a name="en-us_topic_0287275940_en-us_topic_0237152330_p223412181010"></a><a name="en-us_topic_0287275940_en-us_topic_0237152330_p223412181010"></a>8192</p>
</td>
</tr>
</tbody>
</table>

## File System Parameters<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_s6bc6e27aba3d44139c026373229dcd89"></a>

-   soft nofile

    Indicates the soft limit. The number of file handles used by a user can exceed this parameter value. However, an alarm will be reported.

    Recommended value:  **1000000**

-   hard nofile

    Indicates the hard limit. The number of file handles used by a user cannot exceed this parameter value.

    Recommended value:  **1000000**

-   stack size

    Specifies the thread stack size.

    Recommended value:  **3072**


## Examples<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_s1c980bdf925b48829d69ccedb086c313"></a>

Check result of a single item:

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

Local execution result:

```
perfadm@lfgp000700749:/opt/huawei/perfadm/tool/script> gs_check -i CheckCPU -L

2017-12-29 17:09:29 [NAM] CheckCPU
2017-12-29 17:09:29 [STD] Check the CPU usage of the host. If the value of idle is greater than 30% and the value of iowait is less than 30%, this item passes the check. Otherwise, this item fails the check.
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

Check result of a scenario:

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

## Helpful Links<a name="en-us_topic_0287275940_en-us_topic_0237152330_en-us_topic_0059777799_sca573acef30b4169bd3e6f0d5501021c"></a>

[gs\_checkos](gs_checkos.md),  [gs\_checkperf](gs_checkperf.md)

