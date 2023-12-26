# 一键部署SCRLock特性<a name="ZH-CN_TOPIC_0000001721920149"></a>

SCRLock提供简易部署脚本，输入安装路径、安装用户和安装的节点信息，即可一键部署。

## 前置条件<a name="section1584162294611"></a>

-   开启RDMA功能依赖CX4/CX5网卡。
-   openGauss已部署完成。
-   获取对应操作系统和CPU架构的SCRLock安装包，例如：OCK\_scrlock\_openEuler-20.03-LTS-SP1-aarch64.tar.gz。
-   主备节点已存在“$\{GAUSSHOME\}/lib“目录。
-   所有需要部署SCRLock的服务器，需要相同的用户和密码，并且该用户需要具备执行**rmmod**、**rpm**、**depmod**、**modprobe**命令权限。

## 操作步骤<a name="section1854853044610"></a>

1.  以<SCRLock-install-user\>登录节点并上传安装包，在安装包所在目录执行以下命令解压缩安装包。

    ```
    tar -xzvf OCK_scrlock_openEuler-20.03-LTS-SP1-aarch64.tar.gz
    ```

    解压目录内的文件如下。

    <a name="table8507191432716"></a>
    <table><thead align="left"><tr id="row15071414112712"><th class="cellrowborder" valign="top" width="56.95%" id="mcps1.1.3.1.1"><p id="p9507814172716"><a name="p9507814172716"></a><a name="p9507814172716"></a>文件名</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.05%" id="mcps1.1.3.1.2"><p id="p10507614182712"><a name="p10507614182712"></a><a name="p10507614182712"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row15507714172712"><td class="cellrowborder" valign="top" width="56.95%" headers="mcps1.1.3.1.1 "><p id="p8507111419272"><a name="p8507111419272"></a><a name="p8507111419272"></a>OCK_scrlock_openEuler_aarch64.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.05%" headers="mcps1.1.3.1.2 "><p id="p15071142279"><a name="p15071142279"></a><a name="p15071142279"></a>源文件</p>
    </td>
    </tr>
    <tr id="row1650719141279"><td class="cellrowborder" valign="top" width="56.95%" headers="mcps1.1.3.1.1 "><p id="p1550781419273"><a name="p1550781419273"></a><a name="p1550781419273"></a>OCK_scrlock_openEuler_aarch64.tar.gz.txt</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.05%" headers="mcps1.1.3.1.2 "><p id="p25077149277"><a name="p25077149277"></a><a name="p25077149277"></a>签名文件</p>
    </td>
    </tr>
    <tr id="row12507914102713"><td class="cellrowborder" valign="top" width="56.95%" headers="mcps1.1.3.1.1 "><p id="p95072014122711"><a name="p95072014122711"></a><a name="p95072014122711"></a>OCK_scrlock_openEuler_aarch64.tar.gz.cms</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.05%" headers="mcps1.1.3.1.2 "><p id="p1050791416279"><a name="p1050791416279"></a><a name="p1050791416279"></a>描述文件</p>
    </td>
    </tr>
    </tbody>
    </table>

2.  解压源文件压缩包。

    ```
    tar -xzvf OCK_scrlock_openEuler_aarch64.tar.gz
    ```

    解压后得到如下文件。

    <a name="table1281112820"></a>
    <table><thead align="left"><tr id="row1081912720"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p10820127215"><a name="p10820127215"></a><a name="p10820127215"></a>文件名</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p782121429"><a name="p782121429"></a><a name="p782121429"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row14817121023"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p158312922"><a name="p158312922"></a><a name="p158312922"></a>scrlock_lib</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p14811129214"><a name="p14811129214"></a><a name="p14811129214"></a>so文件</p>
    </td>
    </tr>
    <tr id="row9810121227"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p98131217212"><a name="p98131217212"></a><a name="p98131217212"></a>scripts</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p582012928"><a name="p582012928"></a><a name="p582012928"></a>安装脚本</p>
    </td>
    </tr>
    <tr id="row981312622"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p168171219214"><a name="p168171219214"></a><a name="p168171219214"></a>umdk_rpm</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1688121724"><a name="p1688121724"></a><a name="p1688121724"></a>rpm依赖包</p>
    </td>
    </tr>
    <tr id="row10332401714"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p173419401674"><a name="p173419401674"></a><a name="p173419401674"></a>bin</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1341140878"><a name="p1341140878"></a><a name="p1341140878"></a>签名验证文件</p>
    </td>
    </tr>
    </tbody>
    </table>

3.  使用“bin“目录下的verification二进制，进行软件包签名验证。

    ```
    ./bin/verification OCK_scrlock_openEuler_aarch64.tar.gz OCK_scrlock_openEuler_aarch64.tar.gz.cms OCK_scrlock_openEuler_aarch64.tar.gz.txt
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >verification可执行二进制需要三个参数，按先后顺序分别是：源文件、签名文件、描述文件。

    -   验证成功控制台会输出：

        ```
        Starting to verify OCK_scrlock_openEuler_aarch64.tar.gz...
        Verify the source file passed.
        Verify the sha file passed.
        ```

    -   验证失败控制台会输出：

        ```
        Starting to verify OCK_scrlock_openEuler_aarch64.tar.gz...
        ...
        Verify the source file failed.
        ```

        或者

        ```
        Starting to verify OCK_scrlock_openEuler_aarch64.tar.gz...
        ...
        Verify the sha file failed.
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >校验失败说明此安装包已被篡改，建议重新获取安装包后再次校验。

4.  安装包验证成功后，进入“scripts“目录，准备执行部署脚本。

    ```
    cd scripts
    ```

5.  执行部署脚本，并根据提示输入<SCRLock-install-user\>密码。

    ```
    sh scrlock_install.sh -H '192.168.4.164 192.168.4.165 192.168.4.166' -U omm -G dbgrp -D /home/omm/lib
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   -H：集群IP地址。例如：'_192.168.4.164 192.168.4.165 192.168.4.166_'
    >-   -U：数据库管理用户名。例如：omm
    >-   -G：数据库管理用户组。例如：dbgrp
    >-   -D：“$\{GAUSSHOME\}/lib“库路径。例如：“/home/omm/lib“
    >-   -h：查看帮助信息。
    >由于部署脚本的操作需要高权限用户，请在操作执行完成后关闭高权限用户SSH远程登录服务器的权限，以提升系统安全性。

6.  <a name="li9627181442313"></a>切换至数据库管理用户。

    ```
    su - omm
    ```

7.  （可选）kill om\_monitor进程。

    ```
    gs_om -t killmonitor
    ```

8.  <a name="li153702610143"></a>加载环境变量。

    ```
    source ~/.bashrc
    ```

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >[6](#li9627181442313)～[8](#li153702610143)也需要在备节点执行。

