# gs_checkse

## 背景信息<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_section39821515163211"></a>

gs_checkse工具用来帮助检查数据库连接配置、文件目录安全、安全认证配置等内容，并对数据库这些安全配置信息进行设置。

## 前提条件<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_scab2909286904a92959e438b7ac1b8c7"></a>

- 当前的硬件和网络环境正常。

- 需先安装好openGauss数据库，需使用om安装。

- 使用普通用户执行gs_checkse命令。

## 语法<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s991d75846f4c48a298084c67b46b40ee"></a>

-   检查数据库安全配置信息

    ```
    gs_checkse -i ITEM [-f HOSTFILE] [-h HOSTNAME] [-X XMLFILE] [--detail] [-o OUTPUT] [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_checkse -? | --help 
    ```

-   显示版本号信息

    ```
    gs_checkse -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s79c5f0d8e9e742deacd81d9e296c2960"></a>

-   -i

    列表编号。格式：-i A、-i B1、-i A1 -i A2或-i A1,A2。

    取值范围：A1...A10、B1...B10。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >A1...A10 表示只检查数据库安全配置参数，并不设置。
    >B1...B10 表示将数据库安全配置参数设置为期望值。
    >A和B不能同时输入。

    详细的检查项请参见[表1](#zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e)。

-   -f

    主机名称列表文件。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-f和-h参数不能同时使用，-f或-h指定多个节点时，需要保证hot_standby为on。

    取值范围：主机名称的列表。

-   -h

    指定需要检查的主机名称，可以同时指定多个主机，主机之间使用“,”分割。

    取值范围：openGauss的主机名称。如果不指定主机，则检查当前主机。

-   -X

    openGaussXML配置文件。

-   --detail

    显示检查结果详情。

-   -o

    指定SE检查报告输出到指定的文件。

    不指定则将检查结果输出到屏幕上。

-   -l

    指定日志文件及存放路径，若不指定则在日志目录下的用户目录的om目录下。

    默认值：${GAUSSLOG}/omm/om/gs\_checkse-YYYY-MM-DD\_hhmmss.log。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


**表 1**  数据库安全配置检查项

数据库安全配置检查项详细内容请参考[安全配置基线](https://gitee.com/opengauss/security/tree/master/secure-configuration-benchmark)
<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r96d5e4d71c8c46a18f130b0cc1968953"><th class="cellrowborder" valign="top" width="9.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a>编号</p>
</th>
<th class="cellrowborder" valign="top" width="29.24%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a>检查项</p>
</th>
<th class="cellrowborder" valign="top" width="61.49%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a>检查项详细说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5b3c92f7b05e4985874423addad78ee3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a>A1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a>连接配置（Checking Connection configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><p>侦听主机上IP地址检查：禁止侦听主机上所有IP地址</p><p>对外服务端口检查：确保对外服务端口使用非默认端口号</p><p>数据库实例的最大连接数检查：确保数据库实例的最大连接数配置正确</p><p>Database的最大连接数检查：确保Database的最大连接数配置正确</p>
<p>管理员使用的连接数检查：确保系统管理员使用的连接数配置正确</p><p>用户的最大连接数检查：确保用户的最大连接数配置正确</p><p>UNIX域套接字的访问权限检查：确保UNIX域套接字的访问权限配置正确</p><p>host条目使用md5认证检查：确保没有host条目使用md5认证</p><p>hostnossl条目检查：确保没有hostnossl条目</p><p>host条目的源地址指定为0.0.0.0/0检查：确保没有host条目的源地址指定为0.0.0.0/0</p><p>服务端使能SSL连接检查：确保服务端使能SSL连接</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rb2f376211ded4f38bfd31e2bfe310480"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a>A2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a>文件目录安全（File directory security）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><p>数据库安装目录权限检查：确保数据库安装目录权限最小化</p><p>共享目录权限检查：确保共享目录权限最小化</p><p>二进制文件目录权限检查：确保二进制文件目录权限最小化</p><p>数据目录权限检查：确保数据目录权限最小化</p><p>日志归档目录权限检查：检查${GAUSSHOME}/archive目录，确保日志归档目录权限最小化</p>
<p>postgresql.conf文件权限检查：确保postgresql.conf文件权限最小化</p><p>pg_hba.conf文件权限检查：确保pg_hba.conf文件权限最小化</p><p>日志目录权限检查：确保日志目录权限最小化</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r8eb67a4d5ad8404ebf97db57b971e9da"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a>A3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a>安全认证配置（Security authentication configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><p>客户端认证超时时间检查：确保客户端认证超时时间配置正确</p><p>认证加密迭代次数检查：确保认证加密迭代次数配置正确</p><p>账户登录失败尝试次数检查：确保账户登录失败尝试次数配置正确</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r73edb318777c4391bf4786a68c3bfe15"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a>A4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a>账号口令管理（Account_password_management）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><p>密码复杂度校验检查：确保开启密码复杂度校验</p><p>密码加密方式检查：确保密码加密方式配置正确</p><p>密码不可重用天数检查：确保密码不可重用天数配置正确</p><p>账户自动解锁时间检查：确保账户自动解锁时间配置正确</p>
<p>首次登录时修改初始用户的密码检查：确保首次登录时修改初始用户的密码</p><p>用户的有效期限检查：确保配置用户的有效期限</p><p>密码的有效期限检查：确保配置密码的有效期限</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rcaa7080fa9e04d3fb757cfea2b58b042"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a>A5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a>权限管理（Permission management）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><p>pg_authid系统表的权限检查：禁止PUBLIC角色拥有pg_authid系统表的权限</p><p>public模式下CREATE权限检查：禁止PUBLIC角色在public模式下拥有CREATE权限</p>
<p>对象的所有权限检查：禁止将对象的所有权限授予PUBLIC角色</p><p>普通用户非必须的管理权限检查：确保撤销普通用户非必须的管理权限</p><p>三权分立配置检查：确保开启三权分立配置</p><p>管理员服务端文件COPY权限检查：确保取消系统管理员服务端文件COPY权限</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rc10298339e724f9d94e6645a42384db2"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a>A6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a>数据库审计（Database auditing）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><p>数据库审计功能检查：确保开启数据库审计功能</p><p>用户登录和注销审计检查：确保开启用户登录和注销审计</p><p>数据库启动、停止、恢复和切换审计检查：确保开启数据库启动、停止、恢复和切换审计</p>
<p>用户锁定和解锁审计检查：确保开启用户锁定和解锁审计</p><p>权限授予和回收审计检查：确保开启权限授予和回收审计</p><p>数据库对象的添加、删除、修改审计检查：确保开启数据库对象的添加、删除、修改审计</p><p>数据库对象的查询审计检查：确保开启数据库对象的查询审计</p><p>审计优先策略检查：确保审计优先策略配置正确</p><p>单个审计文件的最长记录时间检查：确保单个审计文件的最长记录时间配置正确</p><p>单个审计日志文件的最大容量检查：确保单个审计日志文件的最大容量配置正确</p><p>审计日志文件占用的最大磁盘空间检查：确保所有审计日志文件占用的最大磁盘空间配置正确</p><p>审计日志文件最大数目检查：确保审计日志文件最大数目配置正确</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r24f0ef2ad50f4a87b554a01c70871c8f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a>A7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a>错误报告和日志配置（Error reporting and logging configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><p>日志收集器检查：确保开启日志收集器</p><p>日志名称检查：确保日志名称配置正确</p><p>日志文件权限检查：确保日志文件权限配置正确</p>
<p>覆盖写入同名日志文件检查：禁止覆盖写入同名日志文件</p><p>单个日志文件最大记录时间检查：确保单个日志文件最大记录时间配置正确</p><p>单个日志文件最大容量检查：确保单个日志文件最大容量配置正确</p><p>客户端日志等级检查：确保客户端日志等级配置正确</p><p>服务器日志等级检查：确保服务器日志等级配置正确</p><p>记录产生错误的SQL语句日志级别检查：确保记录产生错误的SQL语句日志级别配置正确</p><p>用户登录时日志记录功能检查：确保开启用户登录时日志记录功能</p><p>用户注销时日志记录功能检查：确保开启用户注销时日志记录功能</p><p>写入服务器日志的详细度检查：确保写入服务器日志的详细度配置正确</p><p>日志记录主机名检查：确保日志不记录主机名</p>
<p>解析树调试打印检查：确保关闭解析树调试打印开关</p><p>执行计划调试打印检查：确保关闭执行计划调试打印开关</p><p>查询重写调试打印检查：确保关闭查询重写调试打印开关</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r1f0c3a5d936f4d118d7502e9358f2dc3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a>A8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a>备份配置（Backup configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a><p>WAL信息记录级别检查：确保WAL信息记录级别配置正确</p><p>归档模式检查：确保开启归档模式</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5f0c920f5297418184dcdb383ab11e9a"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a>A9</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"></a>运行环境配置（Runtime environment configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a><p>文件权限掩码检查：确保文件权限掩码配置正确</p><p>用户进程信息检查：确保对其他用户隐藏进程信息</p><p>NTP时钟同步检查：确保开启NTP时钟同步</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rf7012454f0ce4cffb8014b14f9e92d75"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a>A10</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"></a>其它配置（Other configurations）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"></a><p>backslash_quote参数检查：确保backslash_quote参数配置正确</p><p>系统表结构检查：禁止修改系统表结构</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r7a1a89e18a204b68b2120fcfa6914a58"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a>B1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a>设置连接配置（Set Connection configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a><p>侦听主机IP地址设置：当参数值为 * 时，进行修改设置</p><p>数据库实例的最大连接数设置：当参数值不为5000时，进行修改设置为默认值为5000</p><p>Database的最大连接数设置：当参数值为-1或大于1024时表示不限制连接，进行修改设置为1024</p>
<p>管理员使用的连接数设置：当参数值不为3时，进行修改设置</p><p>用户的最大连接数设置：当用户允许无限制连接时，进行修改设置为1024</p><p>UNIX域套接字的访问权限设置：当参数值不为0700时，进行修改设置</p><p>服务端使能SSL连接设置：确保该功能开启，如果不开启则修改设置</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r11c8b6aa951b4435b59f1db495499c16"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a>B2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"></a>设置文件目录安全（Set File directory security）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"></a>数据库安装目录权限设置：当数据库安装目录权限不是最小化时，对其进行修改设置。</p><p>共享目录权限设置：当数据库共享目录权限不是最小化时，对其进行修改设置。</p>
<p>二进制文件目录权限设置：当二进制文件目录权限不是最小化时，对其进行修改设置。</p><p>数据目录权限设置：当数据目录权限不是最小化时，对其进行修改设置。</p><p>日志归档目录权限设置：当日志归档目录权限不是最小化时，对其进行修改设置。</p><p>postgresql.conf文件权限设置：当postgresql.conf文件权限不是最小化时，对其进行修改设置。</p></p><p>pg_hba.conf文件权限设置：当pg_hba.conf文件权限不是最小化时，对其进行修改设置。</p></p><p>日志目录权限设置：当日志目录权限不是最小化时，对其进行修改设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5cc6eaca17574b558edd607dacf979d8"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a>B3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"></a>设置安全认证配置（Set Security authentication configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"></a>客户端认证超时时间设置：当参数值不为1min时，对其进行修改设置。</p><p>认证加密迭代次数设置：当参数值小于10000时，对其进行修改设置</p>
<p>账户登录失败尝试次数设置：当参数值为0时，对其进行修改设置为默认值10</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ra05346e39a6244748e5e145c6075b85f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a>B4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"></a>设置账号口令管理（Set Account password management）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"></a>密码复杂度校验设置：当参数值不为1时，对其进行修改设置。</p><p>密码加密方式设置：当参数值为0或1则失败，对其进行修改设置参数为2</p>
<p>密码不可重用天数设置：当参数值为0时，对其进行修改设置为60</p><p>账户自动解锁时间设置：当参数值为0时，对其进行修改设置为1d</p><p>用户有效期限设置：当存在未配置有效期的用户时，对其进行修改配置</p><p>密码有效期配置：当参数值为0时，对其进行修改配置为90</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rff336c30b6524b058795688afdab8a85"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a>B5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"></a>设置权限管理（Set Permission management）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"></a>pg_authid表权限用户设置：禁止PUBLIC角色拥有pg_authid系统表的权限</p><p>public模式create权限设置：禁止PUBLIC角色在public模式下拥有CREATE权限</p>
<p>角色所有权限设置：禁止将对象的所有权限授予PUBLIC角色</p><p>普通用户管理权限设置：确保撤销普通用户非必须的管理权限</p><p>三权分立设置：当参数值不为on时，对其修改确保开启三权分立配置</p><p>管理员copy权限设置：确保取消系统管理员服务端文件COPY权限</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r90e329f1dde24bbfaa307549b8755680"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a>B6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"></a>设置数据库审计（Set Database auditing）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"></a>数据库审计功能设置：如果数据库审计功能为开启，将该功能开启。</p><p>用户登录和注销审计设置：当参数值不为7时，对其进行修改设置</p>
<p>数据库启动、停止、恢复和切换审计设置：当参数值不为1时，对参数进行修改</p><p>用户锁定和解锁审计设置：当参数值不为1时，对其进行修改设置</p><p>权限授予和回收审计设置：当参数值不为1时，对其进行修改设置</p><p>数据库对象的添加、删除、修改和审计设置：当参数之小于67121159时，对其进行设置为默认值67121159</p><p>数据库对象的查询审计设置：当参数值不为1时，对其进行修改设置</p><p>审计优先策略设置：当该功能未开启时，进行设置开启</p><p>单个文件的最长记录时间设置：当单个记录时间不为1d时，进行设置推荐设置为默认值1d</p><p>单个审计日志文件的最大容量设置：当参数值不为10MB时，进行设置推荐设置为10MB</p>
<p>所有审计日志文件占用的最大磁盘空间设置：当参数值不为1GB时，进行设置推荐配置不小于1GB</p><p>审计日志文件最大数目设置：当参数值不为1048576时，进行设置推荐设置为默认值1048576</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>设置错误报告和日志配置（Set Error reporting and logging configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>日志收集器设置：当该功能未开启时进行设置开启。</p><p>日志名称设置：当参数值不为默认配置时，进行修改配置</p><p>日志文件权限设置：当参数值不为0600时，进行修改设置</p><p>覆盖写入同名文件设置：当参数值不为off时进行设置</p><p>单个日志文件文件最大记录时间设置：当参数值不为1d时进行设置，推荐设置为默认值1d</p><p>单个日志文件最大容量设置：当参数值不为20MB时，推荐设置为默认值20MB</p><p>客户端日志等级设置：当参数值不为notice时，进行设置</p>
<p>服务器日志等级设置：当参数值不为warning时，进行设置</p><p>记录产生错误的SQL语句日志级别设置：当参数值不为error时进行设置</p><p>用户登录时日志记录设置：当参数值不为on时，进行设置修改</p><p>用户注销时日志记录设置：当该功能不开启时，进行设置开启</p><p>写入服务器日志的详细度设置：当参数值不为default时，进行设置修改</p><p>日志不记录主机名设置：当参数值不为off时进行设置修改</p><p>解析树调试设置：当参数值设置不为off时，进行设置修改</p><p>执行计划调试打印设置：当参数值不为off时，进行设置修改</p><p>重写调试打印设置：当参数值不为off时，进行设置修改</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>设置备份配置（Set Backup configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>WAL信息记录级别设置：检查该参数的值是否为hot_standby，如果不是进行设置修改</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B9</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>设置运行环境配置（Set Runtime environment configuration）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>文件权限掩码设置：当该参数值不为0077时，进行修改设置，需用户手动执行source ~/.bashrc命令</p>
</td>
</tr> 
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B10</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>设置其它配置（Set Other configurations）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>backslash_quote参数设置：当该参数值不为safe_encoding时，进行修改设置</p><p>系统表结构设置：当参数值不为off时，进行修改设置</p>
</td>
</tr> 
</tbody>
</table>



>![](public_sys-resources/icon-note.png) **说明：** 
>
> -   上述检查项和设置项用于确保参数符合预设的默认值。请根据实际需求对这些参数进行相应调整。关于参数的详细检查与设置步骤，请参阅相关的安全基线配置文档以获取更多信息。
>
> -   B9选项进行设置umask参数值后，需要用户手动执行`source ~/.bashrc`命令，使配置生效。
>
> -   使用gs\_checkse设置选项参数时，会进行重启数据库操作使配置生效，请谨慎操作，根据需要进行选项修复执行，以避免数据库重启对正在进行的操作造成影响。


## 示例<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s0a0dfe17cef247ad9b50e77ed84aff9f"></a>

使用如下命令检查数据库安全配置参数。

```
gs_checkse -i A -h plat1 -o /var/log/checkse
Performing operation system check/set. Output the result to the file /var/log/checkse.
Operation system check/set is completed.
Total numbers:10. Abnormal numbers:0. Warning numbers:2.

```

查看数据库安全配置参数检查结果。

```
vim /var/log/checkse 
Checking items:
    A1. [ Checking Connection configuration ]                   : Warning
    A2. [ File directory security ]                             : Normal
    A3. [ Security authentication configuration ]               : Normal
    A4. [ Account_password_management ]                         : Normal
    A5. [ Permission management ]                               : Normal
    A6. [ Database auditing ]                                   : Normal
    A7. [ Error reporting and logging configuration ]           : Normal
    A8. [ Backup configuration ]                                : Normal
    A9. [ Runtime environment configuration ]                   : Warning
    A10.[ Other configurations ]                                : Normal
```

## 相关命令<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s3229172816a643dda00f100421b8a903"></a>

[gs\_check](gs_check.md)，[gs\_checkperf](gs_checkperf.md)，[gs\_checkos](gs_checkos.md)

