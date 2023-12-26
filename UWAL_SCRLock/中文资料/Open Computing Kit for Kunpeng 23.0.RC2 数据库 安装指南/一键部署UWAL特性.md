# 一键部署UWAL特性<a name="ZH-CN_TOPIC_0000001686949549"></a>

UWAL提供简易部署脚本，支持一键部署。

## 前提条件<a name="section1384124462811"></a>

-   openGauss已部署完成。
-   获取对应操作系统和CPU架构的UWAL安装包，例如：OCK\_UWAL\_23.0.0\_openeuler\_22.03-aarch64\_gcc10.tar.gz。
-   主备节点均已存在以下目录：
    -   “$\{GAUSSHOME\}/lib“路径
    -   UWAL文件存放路径（“uwal\_devices\_path“对应的值）
    -   UWAL日志文件存放路径（“uwal\_log\_path“对应的值）

## 操作步骤<a name="section196307368361"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>以下操作除特殊说明外，默认只在主节点进行操作。

1.  将安装包上传至节点，在安装包所在目录执行以下命令赋予openGauss数据库用户操作权限。

    ```
    chown omm:dbgrp OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   omm：数据库管理用户名。
    >-   dbgrp：数据库管理用户组。

2.  切换为openGauss数据库管理用户，解压缩安装包。

    ```
    su - omm
    tar -xzvf OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz
    ```

    解压后得到以下文件。

    <a name="table8507191432716"></a>
    <table><thead align="left"><tr id="row15071414112712"><th class="cellrowborder" valign="top" width="61.18%" id="mcps1.1.3.1.1"><p id="p9507814172716"><a name="p9507814172716"></a><a name="p9507814172716"></a>文件名</p>
    </th>
    <th class="cellrowborder" valign="top" width="38.82%" id="mcps1.1.3.1.2"><p id="p10507614182712"><a name="p10507614182712"></a><a name="p10507614182712"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row15507714172712"><td class="cellrowborder" valign="top" width="61.18%" headers="mcps1.1.3.1.1 "><p id="p8507111419272"><a name="p8507111419272"></a><a name="p8507111419272"></a>OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="38.82%" headers="mcps1.1.3.1.2 "><p id="p15071142279"><a name="p15071142279"></a><a name="p15071142279"></a>源文件</p>
    </td>
    </tr>
    <tr id="row1650719141279"><td class="cellrowborder" valign="top" width="61.18%" headers="mcps1.1.3.1.1 "><p id="p1550781419273"><a name="p1550781419273"></a><a name="p1550781419273"></a>OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz.txt</p>
    </td>
    <td class="cellrowborder" valign="top" width="38.82%" headers="mcps1.1.3.1.2 "><p id="p25077149277"><a name="p25077149277"></a><a name="p25077149277"></a>签名文件</p>
    </td>
    </tr>
    <tr id="row12507914102713"><td class="cellrowborder" valign="top" width="61.18%" headers="mcps1.1.3.1.1 "><p id="p95072014122711"><a name="p95072014122711"></a><a name="p95072014122711"></a>OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz.cms</p>
    </td>
    <td class="cellrowborder" valign="top" width="38.82%" headers="mcps1.1.3.1.2 "><p id="p1050791416279"><a name="p1050791416279"></a><a name="p1050791416279"></a>描述文件</p>
    </td>
    </tr>
    </tbody>
    </table>

3.  解压源文件压缩包。

    ```
    tar -xzvf OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz
    ```

    解压后得到如下文件。

    <a name="table1281112820"></a>
    <table><thead align="left"><tr id="row1081912720"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p10820127215"><a name="p10820127215"></a><a name="p10820127215"></a>文件名</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p782121429"><a name="p782121429"></a><a name="p782121429"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14817121023"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p158312922"><a name="p158312922"></a><a name="p158312922"></a>lib</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p14811129214"><a name="p14811129214"></a><a name="p14811129214"></a>so文件</p>
    </td>
    </tr>
    <tr id="row9810121227"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p98131217212"><a name="p98131217212"></a><a name="p98131217212"></a>scripts</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p582012928"><a name="p582012928"></a><a name="p582012928"></a>安装脚本</p>
    </td>
    </tr>
    <tr id="row981312622"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p168171219214"><a name="p168171219214"></a><a name="p168171219214"></a>include</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1688121724"><a name="p1688121724"></a><a name="p1688121724"></a>UWAL头文件</p>
    </td>
    </tr>
    <tr id="row10332401714"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p173419401674"><a name="p173419401674"></a><a name="p173419401674"></a>bin</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1341140878"><a name="p1341140878"></a><a name="p1341140878"></a>签名验证文件</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >如果重复解压源文件，需清理以上文件后再解压。

4.  使用“bin“目录下的verification二进制，进行软件包签名验证。

    ```
    ./bin/verification OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz.cms OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz.txt
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >verification可执行二进制需要三个参数，按先后顺序分别是：源文件、签名文件、描述文件。

    -   验证成功控制台会输出：

        ```
        Starting to verify OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz...
        Verify the source file passed.
        Verify the sha file passed.
        ```

    -   验证失败控制台会输出：

        ```
        Starting to verify OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz...
        ...
        Verify the source file failed.
        ```

        或者

        ```
        Starting to verify OCK_UWAL_23.0.0_openeuler_22.03_aarch64_gcc10.tar.gz...
        ...
        Verify the sha file failed.
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >校验失败说明此安装包已被篡改，建议重新获取安装包后再次校验。

5.  安装包验证成功后，进入“scripts“目录，准备执行部署脚本。

    ```
    cd scripts
    ```

6.  启动脚本，即可完成UWAL部署。

    ```
    sh ock_uwal_install.sh -H '192.168.4.164 192.168.4.165 192.168.4.166' -U omm -D /home/omm/lib
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   -H：集群IP地址。例如：'_192.168.4.164 192.168.4.165 192.168.4.166_'
    >-   -U：数据库管理用户名。例如：omm
    >-   -D：“$\{GAUSSHOME\}/lib“库路径。例如：“/home/omm/lib“
    >-   -h：查看帮助信息。

7.  （可选）kill om\_monitor进程。

    ```
    gs_om -t killmonitor
    ```

8.  执行以下命令，加载环境变量。

    ```
    source ~/.bashrc
    ```

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >此步骤也需要在备节点执行。

9.  （可选）UWAL组件依赖HCOM组件进行RPC通信，用户可根据需要配置以下环境变量。

    ```
    export HCOM_FILE_PATH_PREFIX="/home/uds/socket/file"
    export HCOM_OPENSSL_PATH="/home/openssl"
    export HCOM_TRACE_LEVEL=0
    export HCOM_QP_TRAFFIC_CLASS=106
    export HCOM_SHM_EXCHANGE_FD_QUEUE_SIZE=10
    export HCOM_CONNECTION_RETRY_TIMES=5
    export HCOM_CONNECTION_RETRY_INTERVAL_SEC=2
    ```

    具体参数见下表：

    <a name="table14176112715159"></a>
    <table><thead align="left"><tr id="row317610276154"><th class="cellrowborder" valign="top" width="30.409999999999997%" id="mcps1.1.6.1.1"><p id="p656518814920"><a name="p656518814920"></a><a name="p656518814920"></a>参数名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="7.960000000000001%" id="mcps1.1.6.1.2"><p id="p1588918155523"><a name="p1588918155523"></a><a name="p1588918155523"></a>参数类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="44.61%" id="mcps1.1.6.1.3"><p id="p156538994"><a name="p156538994"></a><a name="p156538994"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="9.98%" id="mcps1.1.6.1.4"><p id="p756568792"><a name="p756568792"></a><a name="p756568792"></a>取值范围</p>
    </th>
    <th class="cellrowborder" valign="top" width="7.04%" id="mcps1.1.6.1.5"><p id="p056519819914"><a name="p056519819914"></a><a name="p056519819914"></a>缺省值</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1817622791516"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p15176192711158"><a name="p15176192711158"></a><a name="p15176192711158"></a>HCOM_FILE_PATH_PREFIX</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p8176102721516"><a name="p8176102721516"></a><a name="p8176102721516"></a>字符串</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p14176227161518"><a name="p14176227161518"></a><a name="p14176227161518"></a>HCOM生成的文件路径的前缀，通过前缀保证文件只会在当前路径下（此路径需要已存在）创建删除。</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p517672751510"><a name="p517672751510"></a><a name="p517672751510"></a>－</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p17176182719156"><a name="p17176182719156"></a><a name="p17176182719156"></a>－</p>
    </td>
    </tr>
    <tr id="row18176172715154"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p41761427161513"><a name="p41761427161513"></a><a name="p41761427161513"></a>HCOM_OPENSSL_PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p1617602721512"><a name="p1617602721512"></a><a name="p1617602721512"></a>字符串</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p1417612275152"><a name="p1417612275152"></a><a name="p1417612275152"></a>HCOM依赖OpenSSL库，此路径为libssl.so和libcrypt.so的目录路径。</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p7176627181513"><a name="p7176627181513"></a><a name="p7176627181513"></a>－</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p917622711155"><a name="p917622711155"></a><a name="p917622711155"></a>－</p>
    </td>
    </tr>
    <tr id="row5176192791514"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p117652713154"><a name="p117652713154"></a><a name="p117652713154"></a>HCOM_TRACE_LEVEL</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p11176927111516"><a name="p11176927111516"></a><a name="p11176927111516"></a>整型</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p10463194671715"><a name="p10463194671715"></a><a name="p10463194671715"></a>HCOM的打点日志等级：</p>
    <a name="ul9976655185"></a><a name="ul9976655185"></a><ul id="ul9976655185"><li>0：不开打点。</li><li>1：打开高优先级打点。</li><li>2：打开中优先级打点。</li><li>3：打开低优先级打点。</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p71761527101513"><a name="p71761527101513"></a><a name="p71761527101513"></a>0～3</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p81772027151510"><a name="p81772027151510"></a><a name="p81772027151510"></a>0</p>
    </td>
    </tr>
    <tr id="row4177202751517"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p18177192741511"><a name="p18177192741511"></a><a name="p18177192741511"></a>HCOM_QP_TRAFFIC_CLASS</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p161779272152"><a name="p161779272152"></a><a name="p161779272152"></a>整型</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p18177102710158"><a name="p18177102710158"></a><a name="p18177102710158"></a>HCOM中的RDMA协议的traffic_class字段设置优先级。</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p117713275156"><a name="p117713275156"></a><a name="p117713275156"></a>0～255</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p117792716154"><a name="p117792716154"></a><a name="p117792716154"></a>106</p>
    </td>
    </tr>
    <tr id="row103125325113"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p14312163175118"><a name="p14312163175118"></a><a name="p14312163175118"></a>HCOM_SHM_EXCHANGE_FD_QUEUE_SIZE</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p173941336920"><a name="p173941336920"></a><a name="p173941336920"></a>整型</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p151801513576"><a name="p151801513576"></a><a name="p151801513576"></a>HCOM发送fds内部队列的大小。</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p19312203155119"><a name="p19312203155119"></a><a name="p19312203155119"></a>10～256</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p1331218314515"><a name="p1331218314515"></a><a name="p1331218314515"></a>10</p>
    </td>
    </tr>
    <tr id="row1174613338534"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p13746103345310"><a name="p13746103345310"></a><a name="p13746103345310"></a>HCOM_CONNECTION_RETRY_TIMES</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p6747133310537"><a name="p6747133310537"></a><a name="p6747133310537"></a>整型</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p1574703385310"><a name="p1574703385310"></a><a name="p1574703385310"></a>HCOM建链重试的次数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p7747113311530"><a name="p7747113311530"></a><a name="p7747113311530"></a>0～10</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p8747183311532"><a name="p8747183311532"></a><a name="p8747183311532"></a>5</p>
    </td>
    </tr>
    <tr id="row6700183735315"><td class="cellrowborder" valign="top" width="30.409999999999997%" headers="mcps1.1.6.1.1 "><p id="p170015375536"><a name="p170015375536"></a><a name="p170015375536"></a>HCOM_CONNECTION_RETRY_INTERVAL_SEC</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.960000000000001%" headers="mcps1.1.6.1.2 "><p id="p1990564895719"><a name="p1990564895719"></a><a name="p1990564895719"></a>整型</p>
    </td>
    <td class="cellrowborder" valign="top" width="44.61%" headers="mcps1.1.6.1.3 "><p id="p1970033765319"><a name="p1970033765319"></a><a name="p1970033765319"></a>HCOM建链重试的间隔时间，单位：s。</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.98%" headers="mcps1.1.6.1.4 "><p id="p117001376534"><a name="p117001376534"></a><a name="p117001376534"></a>0～60</p>
    </td>
    <td class="cellrowborder" valign="top" width="7.04%" headers="mcps1.1.6.1.5 "><p id="p177006377532"><a name="p177006377532"></a><a name="p177006377532"></a>20</p>
    </td>
    </tr>
    </tbody>
    </table>

