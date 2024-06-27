# UWAL

## 介绍

本章节主要介绍openGauss数据库UWAL（Unified Write-Ahead Log）特性的安装使用，指导用户顺利完成操作。本特性将数据库和自研公共组件UWAL相结合，以提高数据库的主备事务提交和流复制传输性能，从而加速WAL（Write-Ahead Log）的处理效率。


## 安装准备
### 获取安装包
请通过openGauss社区RM SIG获取UWAL安装包。
### 环境要求

<a name="table9128736162712"></a>
<table><thead align="left"><tr id="row71292036182713"><th class="cellrowborder" valign="top" width="15.010000000000002%" id="mcps1.1.4.1.1"><p id="p1376431594919"><a name="p1376431594919"></a><a name="p1376431594919"></a>项目</p>
</th>
<th class="cellrowborder" valign="top" width="47.63%" id="mcps1.1.4.1.2"><p id="p1012923612711"><a name="p1012923612711"></a><a name="p1012923612711"></a>配置描述</p>
</th>
<th class="cellrowborder" valign="top" width="37.36%" id="mcps1.1.4.1.3"><p id="p6129133622718"><a name="p6129133622718"></a><a name="p6129133622718"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row667355411393"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p9764141514918"><a name="p9764141514918"></a><a name="p9764141514918"></a>网卡</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p1543012207413"><a name="p1543012207413"></a><a name="p1543012207413"></a>具体型号根据实际情况确定，例如Mellanox的CX4/CX5系列网卡。</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p66743541395"><a name="p66743541395"></a><a name="p66743541395"></a>需要支持RDMA和以太网并开启RDMA协议，开启RDMA协议的具体步骤请参见<a href="https://opengauss.org/zh/blogs/RDMA/RDMA.html" target="_blank" rel="noopener noreferrer">《RDMA网络指导》</a>。</p>
</td>
</tr>
<tr id="row9245245530"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p152468415531"><a name="p152468415531"></a><a name="p152468415531"></a>交换机</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p14246134145318"><a name="p14246134145318"></a><a name="p14246134145318"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><a name="ul108220398209"></a><a name="ul108220398209"></a><ul id="ul108220398209"><li>开启RDMA协议，需要配置无损网络。</li><li>TCP协议不需要配置无损网络。</li></ul>
</td>
</tr>
<tr id="row128756223532"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p14875172275315"><a name="p14875172275315"></a><a name="p14875172275315"></a>服务器</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p4875172214532"><a name="p4875172214532"></a><a name="p4875172214532"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><a name="ul17986113313204"></a><a name="ul17986113313204"></a><ul id="ul17986113313204"><li>开启RDMA协议，需要配置无损网络。</li><li>TCP协议不需要配置无损网络。</li></ul>
</td>
</tr>
<tr id="row1275520213315"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p1358995611515"><a name="p1358995611515"></a><a name="p1358995611515"></a>操作系统</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><a name="ul712016229541"></a><a name="ul712016229541"></a><ul id="ul712016229541"><li>Arm<a name="ul39267573548"></a><a name="ul39267573548"></a><ul id="ul39267573548"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li></ul>
</li></ul>
<a name="ul2076474310540"></a><a name="ul2076474310540"></a><ul id="ul2076474310540"><li>x86<a name="ul861716917558"></a><a name="ul861716917558"></a><ul id="ul861716917558"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>CentOS 7.6 x86</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p0498201244918"><a name="p0498201244918"></a><a name="p0498201244918"></a>-</p>
</td>
</tr>
<tr id="row14188461493"><td class="cellrowborder" rowspan="3" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p7764131510492"><a name="p7764131510492"></a><a name="p7764131510492"></a>软件</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p18248418496"><a name="p18248418496"></a><a name="p18248418496"></a>MLNX_OFED_LINUX-5.8-1.1.2.1</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p62424113494"><a name="p62424113494"></a><a name="p62424113494"></a>开启RDMA协议，需要安装RDMA网卡驱动。</p>
</td>
</tr>
<tr id="row4504109124916"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><a name="ul1724961323"></a><a name="ul1724961323"></a><ul id="ul1724961323"><li>GCC 7.3</li><li>GCC 10.3</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p165046974919"><a name="p165046974919"></a><a name="p165046974919"></a>-</p>
</td>
</tr>
<tr id="row109111629908"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><a name="ul17257184001813"></a><a name="ul17257184001813"></a><ul id="ul17257184001813"><li>OCK_UWAL_23.0.0_centos-7.6-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_centos-7.6-x86_64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-aarch64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-aarch64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-x86_64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-x86_64_gcc7.tar.gz</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p109125294014"><a name="p109125294014"></a><a name="p109125294014"></a>UWAL安装包。openeuler_22.03、centos-7.6表示操作系统，aarch64、x86_64表示服务器架构，gcc10、gcc7表示依赖的GCC版本，具体UWAL安装包请用户根据实际情况选择。</p>
</td>
</tr>
</tbody>
</table>

## 安装卸载
### 一键部署UWAL特性 
UWAL提供简易部署脚本，支持一键部署。
- 前提条件
    -   openGauss已部署完成。
    -   获取对应操作系统和CPU架构的UWAL安装包，例如：OCK\_UWAL\_23.0.0\_openeuler\_22.03-aarch64\_gcc10.tar.gz。
    -   主备节点均已存在以下目录：
        -   “$\{GAUSSHOME\}/lib“路径
        -   UWAL文件存放路径（“uwal\_devices\_path“对应的值）
        -   UWAL日志文件存放路径（“uwal\_log\_path“对应的值）

- 操作步骤

    >![](public_sys-resources/icon-note.png) **说明：** 
    >以下操作除特殊说明外，默认只在主节点进行操作。

    1.  将安装包上传至节点，在安装包所在目录执行以下命令赋予openGauss数据库用户操作权限。

        ```
        chown omm:dbgrp OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz
        ```

        >![](public_sys-resources/icon-note.png) **说明：** 
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
        tar -xzvf OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz
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

        >![](public_sys-resources/icon-note.png) **说明：** 
        >如果重复解压源文件，需清理以上文件后再解压。

    4.  使用“bin“目录下的verification二进制，进行软件包签名验证。

        ```
        ./bin/verification OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz.cms 
        OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz.txt
        ```

        >![](public_sys-resources/icon-note.png) **说明：** 
        >verification可执行二进制需要三个参数，按先后顺序分别是：源文件、签名文件、描述文件。

        -   验证成功控制台会输出：

            ```
            Starting to verify OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz...
            Verify the source file passed.
            Verify the sha file passed.
            ```

        -   验证失败控制台会输出：

            ```
            Starting to verify OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz...
            ...
            Verify the source file failed.
            ```

            或者

            ```
            Starting to verify OCK_UWAL_23.0.0_openeuler_aarch64.tar.gz...
            ...
            Verify the sha file failed.
            ```

            >![](public_sys-resources/icon-note.png) **说明：** 
            >校验失败说明此安装包已被篡改，建议重新获取安装包后再次校验。

    5.  安装包验证成功后，进入“scripts“目录，准备执行部署脚本。

        ```
        cd scripts
        ```

    6.  启动脚本，即可完成UWAL部署。

        ```
        sh ock_uwal_install.sh -H '192.168.4.164 192.168.4.165 192.168.4.166' -U omm -D /home/omm/lib
        ```

        >![](public_sys-resources/icon-note.png) **说明：** 
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

        >![](public_sys-resources/icon-notice.png) **须知：** 
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
        <th class="cellrowborder" valign="top" width="7.04%" id="mcps1.1.6.1.5"><p id="p056519819914"><a name="p056519819914"></a><a name="p056519819914"></a>默认值</p>
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

### 启用UWAL特性
启用UWAL特性，需要通过修改配置文件，重启数据库使其生效。


- 前提条件
    -   主备节点已安装包含UWAL特性的openGauss版本。
    -   已完成UWAL特性的一键部署。

- 操作步骤

    1.  以数据库管理用户登录管理节点。
    2.  配置数据库的postgresql.conf文件。
        1.  打开postgresql.conf文件。

            ```
            vim postgresql.conf
            ```

        2.  按“i”进入编辑模式，在文件最后增加如下参数。此处以一主一备做举例，具体参数请根据实际情况设置，参数说明请参见[表1](#table135651186916)。

            ```
            replconninfo1='localhost=10.10.10.201 localport=5432 remotehost=10.10.10.207 remoteport=5432 remotenodeid=2 remoteuwalhost=10.10.10.207 remoteuwalport=9991'
            enable_uwal = on
            uwal_config = '{"uwal_nodeid": 0, "uwal_ip": "10.10.10.201", "uwal_port": 9991, "uwal_protocol": "tcp", "uwal_replinodes": [{"id": 1, "protocol": "tcp"}], "cpu_bind_switch": "true", "cpu_bind_start": 1, "cpu_bind_num": 3}'
            uwal_disk_size = 8589934592
            uwal_devices_path = '/home/Data/uwal/'
            uwal_log_path = '/home/Data/opengauss_master/uwal_log'
            uwal_rpc_compression_switch = true
            uwal_rpc_flowcontrol_switch = true
            uwal_rpc_flowcontrol_value = 128
            uwal_async_append_switch = false
            application_name = 'node201'
            ```

            >![](public_sys-resources/icon-note.png) **说明：** 
            >-   一主两备，需要在“replconninfo1“参数的下一行添加“replconninfo2“参数，如：
            >    ```
            >    replconninfo2='localhost=10.10.10.201 localport=5432 remotehost=10.10.10.208 remoteport=5432 remotenodeid=2 remoteuwalhost=10.10.10.208 remoteuwalport=9991'
            >    ```
            >-   一主N备时，依次增加至“replconninfoN“参数即可。

            **表 1**  UWAL的配置参数

            <a name="table135651186916"></a>
            <table><thead align="left"><tr id="row25651989917"><th class="cellrowborder" valign="top" width="23.126556486302924%" id="mcps1.2.5.1.1"><p id="p656518814920"><a name="p656518814920"></a><a name="p656518814920"></a>参数名称</p>
            </th>
            <th class="cellrowborder" valign="top" width="8.071088974417027%" id="mcps1.2.5.1.2"><p id="p1588918155523"><a name="p1588918155523"></a><a name="p1588918155523"></a>参数类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="44.60040751641386%" id="mcps1.2.5.1.3"><p id="p156538994"><a name="p156538994"></a><a name="p156538994"></a>参数说明</p>
            </th>
            <th class="cellrowborder" valign="top" width="24.2019470228662%" id="mcps1.2.5.1.4"><p id="p756568792"><a name="p756568792"></a><a name="p756568792"></a>取值范围</p>
            </th>
            <th class="cellrowborder" valign="top" width="24.2019470228662%" id="mcps1.2.5.1.4"><p id="p756568792"><a name="p756568792"></a><a name="p756568792"></a>默认值</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row1344716210013"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p15447202403"><a name="p15447202403"></a><a name="p15447202403"></a>replconninfo{N}</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p4447122006"><a name="p4447122006"></a><a name="p4447122006"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p12291125152313"><a name="p12291125152313"></a><a name="p12291125152313"></a>配置远端UWAL节点的IP地址及Port，需要在原有参数后面增加remotenodeid（远端节点的uwal_nodeid）、remoteuwalhost（远端节点的uwal_ip）、remoteuwalport（远端节点的uwal_port）。<span class="parmvalue" id="parmvalue10543195803112"><a name="parmvalue10543195803112"></a><a name="parmvalue10543195803112"></a>“N”</span>表示设置本端侦听和鉴权的第N个节<em id="i14460457172612"><a name="i14460457172612"></a><a name="i14460457172612"></a>点信息。</em></p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>字符串。其中空字符串表示没有配置第N个节点信息。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>空字符串</p>
            </td>
            </tr>
            <tr id="row14252637115317"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p8252203735311"><a name="p8252203735311"></a><a name="p8252203735311"></a>enable_uwal</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p152521637135313"><a name="p152521637135313"></a><a name="p152521637135313"></a>布尔型</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p625212379535"><a name="p625212379535"></a><a name="p625212379535"></a>开启UWAL功能。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul1730195610532"></a><a name="ul1730195610532"></a><ul id="ul1730195610532"><li>on，表示开启UWAL功能。</li><li>off，表示关闭UWAL功能。</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>off</p>
            </tr>
            <tr id="row459675018428"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p859675013425"><a name="p859675013425"></a><a name="p859675013425"></a>uwal_config</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p2596195011427"><a name="p2596195011427"></a><a name="p2596195011427"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1473010295313"><a name="p1473010295313"></a><a name="p1473010295313"></a>UWAL配置。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p059665015426"><a name="p059665015426"></a><a name="p059665015426"></a>JSON类型的字符串。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>空字符串</p>
            </tr>
            <tr id="row4407698390"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p1840715973919"><a name="p1840715973919"></a><a name="p1840715973919"></a>uwal_disk_size</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p1140717915395"><a name="p1140717915395"></a><a name="p1140717915395"></a>整型</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p17407792391"><a name="p17407792391"></a><a name="p17407792391"></a>UWAL占用磁盘大小，不能超过磁盘大小。单位：byte。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p16829854115014"><a name="p16829854115014"></a><a name="p16829854115014"></a>最小值：8589934592</p>
            <p id="p17120172118219"><a name="p17120172118219"></a><a name="p17120172118219"></a>最大值：4398046511104</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>8589934592</p>
            </tr>
            <tr id="row124911412194316"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p1849211210431"><a name="p1849211210431"></a><a name="p1849211210431"></a>uwal_devices_path</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p949214126432"><a name="p949214126432"></a><a name="p949214126432"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p649211210432"><a name="p649211210432"></a><a name="p649211210432"></a>UWAL文件存放路径（已存在的路径，不会自动创建目录），调用UwalInit()函数时传入的参数名。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p13444115913211"><a name="p13444115913211"></a><a name="p13444115913211"></a>文件存放路径组成的字符串。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>空字符串</p>
            </tr>
            <tr id="row138231819439"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p1138281811439"><a name="p1138281811439"></a><a name="p1138281811439"></a>uwal_log_path</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p11382161815431"><a name="p11382161815431"></a><a name="p11382161815431"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1832318524495"><a name="p1832318524495"></a><a name="p1832318524495"></a>UWAL日志文件存放路径（已存在的路径，不会自动创建目录）。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p19301132112335"><a name="p19301132112335"></a><a name="p19301132112335"></a>文件存放路径组成的字符串。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>空字符串</p>
            </tr>
            <tr id="row15325134455119"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p143269444516"><a name="p143269444516"></a><a name="p143269444516"></a>uwal_rpc_compression_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p9792504515"><a name="p9792504515"></a><a name="p9792504515"></a>布尔型</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p17326344185111"><a name="p17326344185111"></a><a name="p17326344185111"></a>是否压缩传输。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul723414185211"></a><a name="ul723414185211"></a><ul id="ul723414185211"><li>true，表示开启压缩传输。</li><li>false，表示关闭压缩传输。</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>false</p>
            </tr>
            <tr id="row20803334125218"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p680363414522"><a name="p680363414522"></a><a name="p680363414522"></a>uwal_rpc_flowcontrol_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p26042047125212"><a name="p26042047125212"></a><a name="p26042047125212"></a>布尔型</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1560715215815"><a name="p1560715215815"></a><a name="p1560715215815"></a>UWAL流控开关，在主库设置。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul175600166531"></a><a name="ul175600166531"></a><ul id="ul175600166531"><li>on，表示打开UWAL流控开关。</li><li>off，表示关闭UWAL流控开关。</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>off</p>
            </tr>
            <tr id="row1861817512539"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p106188514539"><a name="p106188514539"></a><a name="p106188514539"></a>uwal_rpc_flowcontrol_value</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p3618115110538"><a name="p3618115110538"></a><a name="p3618115110538"></a>整型</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p176184512531"><a name="p176184512531"></a><a name="p176184512531"></a>UWAL接收阈值。单位：MB。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p637754013113"><a name="p637754013113"></a><a name="p637754013113"></a>8～2048</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>128</p>
            </tr>
            <tr id="row10727151734917"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p177273171495"><a name="p177273171495"></a><a name="p177273171495"></a>uwal_async_append_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p16727181734910"><a name="p16727181734910"></a><a name="p16727181734910"></a>布尔型</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p197271417124919"><a name="p197271417124919"></a><a name="p197271417124919"></a>UWAL使用同步写还是异步写。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><a name="ul3411546175514"></a><a name="ul3411546175514"></a><ul id="ul3411546175514"><li>true，表示使用异步写。</li><li>false，表示使用同步写。</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>false</p>
            </tr>
            <tr id="row152985345311"><td class="cellrowborder" valign="top" width="23.126556486302924%" headers="mcps1.2.5.1.1 "><p id="p92987341734"><a name="p92987341734"></a><a name="p92987341734"></a>application_name</p>
            </td>
            <td class="cellrowborder" valign="top" width="8.071088974417027%" headers="mcps1.2.5.1.2 "><p id="p17299143412311"><a name="p17299143412311"></a><a name="p17299143412311"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="44.60040751641386%" headers="mcps1.2.5.1.3 "><p id="p1529919348319"><a name="p1529919348319"></a><a name="p1529919348319"></a>当前连接请求当中，所使用的客户端名称。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p1529911344310"><a name="p1529911344310"></a><a name="p1529911344310"></a>任意字符串。</p>
            </td>
            <td class="cellrowborder" valign="top" width="24.2019470228662%" headers="mcps1.2.5.1.4 "><p id="p11263735204712"><a name="p11263735204712"></a><a name="p11263735204712"></a>空字符串</p>
            </tr>
            </tbody>
            </table>

            **表 2**  uwal\_config配置参数

            <a name="table1040322664419"></a>
            <table><thead align="left"><tr id="row04034268441"><th class="cellrowborder" valign="top" width="19.966082532504238%" id="mcps1.2.5.1.1"><p id="p111461143194516"><a name="p111461143194516"></a><a name="p111461143194516"></a>参数名称</p>
            </th>
            <th class="cellrowborder" valign="top" width="11.430186546071225%" id="mcps1.2.5.1.2"><p id="p10146124311459"><a name="p10146124311459"></a><a name="p10146124311459"></a>参数类型</p>
            </th>
            <th class="cellrowborder" valign="top" width="37.79536461277557%" id="mcps1.2.5.1.3"><p id="p81461543204519"><a name="p81461543204519"></a><a name="p81461543204519"></a>参数说明</p>
            </th>
            <th class="cellrowborder" valign="top" width="30.808366308648953%" id="mcps1.2.5.1.4"><p id="p4146124313457"><a name="p4146124313457"></a><a name="p4146124313457"></a>取值范围</p>
            </th>
            <th class="cellrowborder" valign="top" width="30.808366308648953%" id="mcps1.2.5.1.4"><p id="p4146124313457"><a name="p4146124313457"></a><a name="p4146124313457"></a>默认值</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row1840492611441"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p159511917154511"><a name="p159511917154511"></a><a name="p159511917154511"></a>uwal_nodeid</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p18951517184518"><a name="p18951517184518"></a><a name="p18951517184518"></a>整型</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p095114178458"><a name="p095114178458"></a><a name="p095114178458"></a>当前UWAL节点的ID。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>0～7</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>None</p>
            </td>
            </tr>
            <tr id="row4404142620442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p69511017174510"><a name="p69511017174510"></a><a name="p69511017174510"></a>uwal_ip</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p19511617154512"><a name="p19511617154512"></a><a name="p19511617154512"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p1795101715458"><a name="p1795101715458"></a><a name="p1795101715458"></a>UWAL侦听地址，调用UwalInit()函数时传入的参数名。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p795111794512"><a name="p795111794512"></a><a name="p795111794512"></a>IPv4</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>空字符串</p>
            </td>
            </tr>
            <tr id="row44041726104418"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p14951161784518"><a name="p14951161784518"></a><a name="p14951161784518"></a>uwal_port</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p20951317134520"><a name="p20951317134520"></a><a name="p20951317134520"></a>整型</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p895117171458"><a name="p895117171458"></a><a name="p895117171458"></a>UWAL侦听端口，调用UwalInit()函数时传入的参数名。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p119516171453"><a name="p119516171453"></a><a name="p119516171453"></a>9000～65535</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>None</p>
            </tr>
            <tr id="row14404182611442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p8951161719452"><a name="p8951161719452"></a><a name="p8951161719452"></a>uwal_protocol</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p149511317134514"><a name="p149511317134514"></a><a name="p149511317134514"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p695113171452"><a name="p695113171452"></a><a name="p695113171452"></a>当前节点连接类型，调用UwalInit()函数时传入的参数名，可选。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="ul795119174457"></a><a name="ul795119174457"></a><ul id="ul795119174457"><li>tcp</li><li>rdma</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>tcp</p>
            </tr>

            <tr id="row14404182611442"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p8951161719452"><a name="p8951161719452"></a><a name="p8951161719452"></a>uwal_replinodes</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p149511317134514"><a name="p149511317134514"></a><a name="p149511317134514"></a>数组</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p695113171452"><a name="p695113171452"></a><a name="p695113171452"></a>远端节点类型。id为远端节点对应的uwal_nodeid，protocol与id对应远端节点的uwal_protocol保持一致，可选。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="ul795119174457"></a><a name="ul795119174457"></a><ul id="ul795119174457"><li>id：0~7</li><li>protocol：<ul id="ul795119174457"><li>tcp</li><li>rdma</li></ul></li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>tcp</p>
            </tr>

            <tr id="row7404142611449"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p59524178454"><a name="p59524178454"></a><a name="p59524178454"></a>cpu_bind_switch</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p139521917124511"><a name="p139521917124511"></a><a name="p139521917124511"></a>字符串</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p995281715454"><a name="p995281715454"></a><a name="p995281715454"></a>UWAL核心线程绑核开关，可选。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><a name="ul495219179451"></a><a name="ul495219179451"></a><ul id="ul495219179451"><li>true，表示开启绑核。</li><li>false，表示关闭绑核。</li></ul>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>false</p>
            </tr>
            <tr id="row19404926124410"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p1695231715458"><a name="p1695231715458"></a><a name="p1695231715458"></a>cpu_bind_start</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p1952317184512"><a name="p1952317184512"></a><a name="p1952317184512"></a>整型</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p199521217134513"><a name="p199521217134513"></a><a name="p199521217134513"></a>UWAL绑核CPU起始编号，可选。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p49528172459"><a name="p49528172459"></a><a name="p49528172459"></a>0～1024</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>1</p>
            </tr>
            <tr id="row204058264440"><td class="cellrowborder" valign="top" width="19.966082532504238%" headers="mcps1.2.5.1.1 "><p id="p4952717194510"><a name="p4952717194510"></a><a name="p4952717194510"></a>cpu_bind_num</p>
            </td>
            <td class="cellrowborder" valign="top" width="11.430186546071225%" headers="mcps1.2.5.1.2 "><p id="p1095211714511"><a name="p1095211714511"></a><a name="p1095211714511"></a>整型</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.79536461277557%" headers="mcps1.2.5.1.3 "><p id="p89529171458"><a name="p89529171458"></a><a name="p89529171458"></a>UWAL绑核CPU数量，可选。</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p1795231715454"><a name="p1795231715454"></a><a name="p1795231715454"></a>2～16</p>
            </td>
            <td class="cellrowborder" valign="top" width="30.808366308648953%" headers="mcps1.2.5.1.4 "><p id="p595111754512"><a name="p595111754512"></a><a name="p595111754512"></a>3</p>
            </tr>
            </tbody>
            </table>

        3.  按“Esc”键，输入 **:wq!**，按“Enter”保存并退出编辑。

    3.  重启数据库使UWAL特性生效。
        1.  停止openGauss。

            ```
            cm_ctl stop
            ```

        2.  启动openGauss。

            ```
            cm_ctl start
            ```

            >![](public_sys-resources/icon-note.png) **说明：** 
            >如果启动失败请根据openGauss日志目录下的“postgresql-YYYY-MM-DD\_HHMMSS.log”日志信息排查错误。

    4.  验证UWAL特性是否启用成功。

        ```
        gsql -d postgres -p 16600 -c "show enable_uwal"
        ```

        如果回显如下内容，则启用成功。

        ```
        enable_uwal
        -------------------
        on
        (1 row)
        ```

        >![](public_sys-resources/icon-note.png) **说明：** 
        >-   -p 16600：16600为数据库端口号，请根据实际情况修改。
        >-   如需查看启用UWAL特性的日志文件，可进入“uwal\_log\_path“对的路径执行以下命令。
        >    ```
        >    cat uwal*.log
        >    ```


### 关闭UWAL特性
关闭UWAL特性，需要重启数据库使配置生效。
- 操作步骤
    
    1. 执行 **pg_switch_xlog()** 命令，切换到一个新的事务日志文件，将当前日志文件归档。
        ```
        gsql -d postgres -p 5432 -c "select pg_switch_xlog()"
        ```
        >![](public_sys-resources/icon-note.png) **说明：** 
        >-   -p 5432：5432为数据库端口号，请根据实际情况修改。

    2. 执行**CHECKPOINT**命令，设置事务日志检查点。
        ```
        gsql -d postgres -p 5432 -c "CHECKPOINT"
        ```

    3.  停止openGauss。

        ```
        cm_ctl stop
        ```

    4. 补全事务日志文件，并替换原生路径下的事务日志文件。
        1. 查看生成的事务日志文件，最新的文件应小于单个事务日志文件大小（例如16MB），将其补全。

            ```
            dd if=000000010000000000000005 of=5.align bs=16M conv=sync
            ```
            >![](public_sys-resources/icon-note.png) **说明：** 
            >-   000000010000000000000005：最新的事务日志文件名，由数据库操作自动生成，文件名不固定。
            >-   5.align：补全为16MB的事务日志文件名，由用户自定义。

        2.  用补全的事务日志文件替换原生的事务日志文件。

            ```
            cp 5.align pg_xlog/000000010000000000000005
            ```

    5.  配置数据库根目录下的postgresql.conf文件,关闭UWAL。
        1.  打开postgresql.conf文件。

            ```
            vim postgresql.conf
            ```

        2.  按“i”进入编辑模式。将参数“enable\_uwal“的值改为“off“，关闭UWAL特性。

            ```
            enable_uwal = off
            ```

        3.  按“Esc”键，输入 **:wq!**，按“Enter”保存并退出编辑。

    6.  （可选）如需卸载UWAL特性可执行此步骤。删除UWAL动态库文件，并清除环境变量。

        ```
        rm -f /home/omm/lib/libuwal.so
        unset OCK_UWAL_LIB_PATH
        ```

        其中，“/home/omm/lib/”表示libuwal.so所在目录的绝对路径。

    7.  重启openGauss。

        ```
        cm_ctl start
        ```
