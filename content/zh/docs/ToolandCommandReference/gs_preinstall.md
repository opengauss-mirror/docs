# gs\_preinstall<a name="ZH-CN_TOPIC_0249632278"></a>

## 背景信息<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_section68942744218"></a>

openGauss提供了gs\_preinstall工具来帮助完成openGauss的环境配置，以保证openGauss安装的正常进行。

## 注意事项<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_s87eb073560414bc5ba369786f06cbb10"></a>

-   用户需要检查上层目录权限，保证安装用户对安装包和配置文件目录读写执行的权限。
-   xml文件中各主机的名称与IP映射配置正确。
-   只能使用root用户执行gs\_preinstall命令。
-   执行gs\_preinstall会清理/etc/hosts中的openGauss映射信息，可能存在已部署数据库连接丢失风险，可以在安装结束后手动添加其它数据库映射至/etc/hosts文件中。
-   gs_preinstall指定的用户不支持使用-d手动选定家目录，仅支持系统默认创建的/home下和用户同名的/home目录。
-   本产品支持同一操作系统大版本下的小版本混合部署，其支持列表如下：

    ```
    CentOS 6.4/6.5/6.6/6.7/6.8/6.9
    CentOS 7.0/7.1/7.2/7.3/7.4
    openEuler
    ```


## 语法<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_sec57993efb15427997e842706b81cd12"></a>

-   准备openGauss环境

    ```
    gs_preinstall -U USER -G GROUP -X XMLFILE [-L] [--skip-os-set] [--env-var="ENVVAR" [...]] [--sep-env-file=MPPRCFILE] [--skip-hostname-set] [-l LOGFILE] [--non-interactive]
    ```

-   显示帮助信息

    ```
    gs_preinstall -? | --help
    ```

-   显示版本号信息

    ```
    gs_preinstall -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_sa9b846fc7333421891c90ad7a67da129"></a>

-   -U

    运行openGauss的操作系统用户名。

    取值范围：字符串，要符合标识符的命名规范。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >配置-U参数值时，字符串中不能包含“|”、“;”、“&”、“$”、“<”、“\>”、“\`”、“\\\\”、“'”、“\\”、“\{”、“\}”、“\(”、“\)”、“\[”、“\]”、“\~”、“\*”、“?”特殊字符。

-   -G

    运行openGauss的操作系统用户的群组名。

    取值范围：字符串，要符合标识符的命名规范。

-   -X

    openGauss配置文件路径。

    取值范围：xml文件的存储路径。

-   -L

    指定该参数则仅给当前节点准备好openGauss安装环境。适用于不允许使用root互信的场景和设置安全加固参数PermitRootLogin为no的场景。需要满足如下前提条件：

    1.  安装包和openGauss配置文件已提前上传到所有主机；
    2.  openGauss安装用户已提前创建好并建立好互信关系；
    3.  用户需要自己保证各台主机上所执行命令的一致性；
    4.  手动将所有节点的主机名和ip映射关系写入各个主机的/etc/hosts，并在每个映射关系后边加入注释内容：\#Gauss OM IP Hosts Mapping。

-   --skip-os-set

    是否设置操作系统参数。默认设置系统参数。如果指定该参数则不设置。

-   --env-var="ENVVAR"

    配置普通用户环境变量。可以指定多个。

    取值范围：字符串。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >本参数不能指定为openGauss默认创建的环境变量。否则，openGauss的环境变量将被覆盖。openGauss默认创建的环境变量见[表1](#zh-cn_topic_0237152419_zh-cn_topic_0059778992_tb25e10cef2104026bdbbedc439fbcd50)。

-   --sep-env-file=MPPRCFILE

    保存环境变量的文件。如果指定该参数，表示将使用环境变量分离的版本。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >不能指定环境变量文件为openGauss相关目录或者和这些目录同名，不能和openGauss用户的目录相同。

-   --skip-hostname-set

    是否将xml配置文件中主机名与IP的映射关系写入“/etc/hosts”文件中。默认写入，如果指定该参数则不写入。
    
-   --unused-third-party

    是否使用om提供的三方库。默认使用，如果指定该参数则不使用。

- -l

  指定日志文件名及路径。在内部会自动给日志名添加一个时间戳。

  默认值：/var/log/gaussdb/用户名/om/gs\_preinstall.log

  当不明确指定-l，但在XML文件中配置了gaussdbLogPath时，默认值为gaussdbLogPath的值、用户名和om/gs\_preinstall-YYYY-MM-DD\_hhmmss.log的组合。

-   --non-interactive

    指定前置执行模式。

    -   当不指定该参数时，则为安全交互模式，在此模式下用户需要人机交互输入密码。
    -   当指定该参数时，为非交互模式，不需要进行人机交互。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。

    **表 1**  openGauss默认创建的环境变量

    <a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_tb25e10cef2104026bdbbedc439fbcd50"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_r4188ea57a58e4a1dab2c9431272a9499"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p536606661727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p536606661727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p536606661727"></a>环境变量名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p515467271727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p515467271727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p515467271727"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_rc4226534c0f04b598fca2a8499e998f2"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_abc48968a214847e98eb04387d3619ba4"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_abc48968a214847e98eb04387d3619ba4"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_abc48968a214847e98eb04387d3619ba4"></a>MPPDB_ENV_SEPARATE_PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a3c87e2c3291c437eb420c70320fefaee"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a3c87e2c3291c437eb420c70320fefaee"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a3c87e2c3291c437eb420c70320fefaee"></a><span id="text912118451937"><a name="text912118451937"></a><a name="text912118451937"></a>openGauss</span>环境变量分离文件路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_re439b0f7558b4da1b0ba4160dbd8ece4"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p637092701727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p637092701727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p637092701727"></a>GPHOME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p601772391727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p601772391727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p601772391727"></a><span id="text5531346631"><a name="text5531346631"></a><a name="text5531346631"></a>openGauss</span>工具目录</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_rad52c52052364fa18a5a56f7b92468a0"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p471190851727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p471190851727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p471190851727"></a>PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p585495801727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p585495801727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p585495801727"></a><span id="text771810467317"><a name="text771810467317"></a><a name="text771810467317"></a>openGauss</span>工具脚本目录</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_rd37b7b74a5fc463d912c497180bfce44"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p14069661727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p14069661727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p14069661727"></a>LD_LIBRARY_PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p468554371727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p468554371727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p468554371727"></a><span id="text2038311471431"><a name="text2038311471431"></a><a name="text2038311471431"></a>openGauss</span>引用第三方动态库路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_r3854f6c63c1b419fbc84fced6fb52a2a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p663112771727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p663112771727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p663112771727"></a>PYTHONPATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p25043581727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p25043581727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p25043581727"></a>python软件路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_r912813666b1d4a71a81543a3e67c4523"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p137383271727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p137383271727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p137383271727"></a>GAUSS_WARNING_TYPE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p390627011727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p390627011727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p390627011727"></a>告警类型</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_r0e1005435bd54874863bd5f754eab1d2"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p225507851727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p225507851727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p225507851727"></a>GAUSSHOME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p146743011727"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p146743011727"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p146743011727"></a><span id="text893217471333"><a name="text893217471333"></a><a name="text893217471333"></a>openGauss</span>安装路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_rab98c5c9e5ce4698960940d9b2b184b0"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a2c6c795b73b745d3ad78ebeb7d98740f"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a2c6c795b73b745d3ad78ebeb7d98740f"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a2c6c795b73b745d3ad78ebeb7d98740f"></a>GAUSS_VERSION</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_aade982b746a443d8a145b6380b37f33c"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_aade982b746a443d8a145b6380b37f33c"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_aade982b746a443d8a145b6380b37f33c"></a><span id="text17477164815317"><a name="text17477164815317"></a><a name="text17477164815317"></a>openGauss</span>版本号</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_r0928038817994fa88fdb088cb2acb39d"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a8d2c2b42fc9c476f954d31db2032aba1"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a8d2c2b42fc9c476f954d31db2032aba1"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a8d2c2b42fc9c476f954d31db2032aba1"></a>PGHOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a30fb06f03ed74b26ac95dc3a2166b29e"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a30fb06f03ed74b26ac95dc3a2166b29e"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a30fb06f03ed74b26ac95dc3a2166b29e"></a><span id="text8975748639"><a name="text8975748639"></a><a name="text8975748639"></a>openGauss</span>用户的临时目录路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_rbab349c6a18b42039f5bb8b510ec278b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_abcb90e945022467a860f7dac87f0bb5e"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_abcb90e945022467a860f7dac87f0bb5e"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_abcb90e945022467a860f7dac87f0bb5e"></a>GS_CLUSTER_NAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a6d9b1e2391b24ed3a6106676aca50642"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a6d9b1e2391b24ed3a6106676aca50642"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a6d9b1e2391b24ed3a6106676aca50642"></a><span id="text125254497318"><a name="text125254497318"></a><a name="text125254497318"></a>openGauss</span>名称</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_red87d359bd4a40978020ed2559891775"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p376503821742"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p376503821742"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p376503821742"></a>GAUSSLOG</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p297821381742"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p297821381742"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p297821381742"></a><span id="text1935410509318"><a name="text1935410509318"></a><a name="text1935410509318"></a>openGauss</span>日志路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_r725fe5ba3caf42ef9b6636f79980e526"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a8271033bc4c04b108fef12c7d8e91f49"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a8271033bc4c04b108fef12c7d8e91f49"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_a8271033bc4c04b108fef12c7d8e91f49"></a>GAUSS_ENV</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p564036117357"><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p564036117357"></a><a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_zh-cn_topic_0058968149_p564036117357"></a><span id="text892755020319"><a name="text892755020319"></a><a name="text892755020319"></a>openGauss</span>环境变量标识</p>
    </td>
    </tr>
    </tbody>
    </table>


## 手动设置服务端SYSLOG配置<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_s407b3891fb94407a89ecc2fccd58033a"></a>

设置“/etc/syslog-ng/syslog-ng.conf”文件，在文件中添加如下内容：

```
template t_gaussdb {template("$DATE $SOURCEIP $MSGONLY\n");template_escape(no);};
source s_gaussdb{ udp(); };
filter f_gaussdb    { level(err,  crit) and match('GaussDB'); };
destination d_gaussdb { file("/var/log/syslog_MPPDB", template(t_gaussdb)); };
log { source(s_gaussdb); filter(f_gaussdb); destination(d_gaussdb); };
```

设置“/etc/sysconfig/syslog”文件，在文件中添加如下内容：

```
SYSLOGD_OPTIONS="-r -m 0"
KLOGD_OPTIONS="-x"
```

>![](public_sys-resources/icon-note.png) **说明：** 
>该配置需要在openGauss每台机器上都要修改。

## 示例<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_s63833ed33f0c49f8959d4a86ca7bb4f2"></a>

使用非交互方式进行openGauss环境准备：

```
./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/clusterconfig.xml --non-interactive
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Distributing package.
Successfully distributed package.
Installing the tools in the cluster.
Successfully installed the tools in the cluster.
Checking hostname mapping.
Successfully checked hostname mapping.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Warning: InstallationGuide environment contains some warning messages.
Please get more details by "/package_r8/sudo/gs_checkos -i A -h host179174,host179175,host179176".
Set and check OS parameter completed.
Preparing CRON service.
Successfully prepared CRON service.
Preparing SSH service.
Successfully prepared SSH service.
Setting user environmental variables.
Successfully set user environmental variables.
Configuring alarms on the cluster nodes.
Successfully configured alarms on the cluster nodes.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting finish flag.
Successfully set finish flag.
PreInstallationGuide succeeded.
```

使用交互模式进行openGauss环境准备：

```
./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/clusterconfig.xml
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Are you sure you want to create trust for root (yes/no)? yes
Please enter password for root.
Password:
Creating SSH trust for the root permission user.
Please enter password for current user[root].
Password:
Checking network information.
All nodes in the network are Normal.
Successfully checked network information.
Creating SSH trust.
Creating the local key file.
Successfully created the local key files.
Appending local ID to authorized_keys.
Successfully appended local ID to authorized_keys.
Updating the known_hosts file.
Successfully updated the known_hosts file.
Appending authorized_key on the remote node.
Successfully appended authorized_key on all remote node.
Checking common authentication file content.
Successfully checked common authentication content.
Distributing SSH trust file to all node.
Successfully distributed SSH trust file to all node.
Verifying SSH trust on all hosts.
Successfully verified SSH trust on all hosts.
Successfully created SSH trust.
Successfully created SSH trust for the root permission user.
Distributing package.
Successfully distributed package.
Are you sure you want to create the user[omm] and create trust for it (yes/no)? yes
Please enter password for cluster user.
Password:
Please enter password for cluster user again.
Password:
Creating [omm] user on all nodes.
Successfully created [omm] user on all nodes.
Installing the tools in the cluster.
Successfully installed the tools in the cluster.
Checking hostname mapping.
Successfully checked hostname mapping.
Creating SSH trust for [omm] user.
Please enter password for current user[omm].
Password:
Checking network information.
All nodes in the network are Normal.
Successfully checked network information.
Creating SSH trust.
Creating the local key file.
Successfully created the local key files.
Appending local ID to authorized_keys.
Successfully appended local ID to authorized_keys.
Updating the known_hosts file.
Successfully updated the known_hosts file.
Appending authorized_key on the remote node.
Successfully appended authorized_key on all remote node.
Checking common authentication file content.
Successfully checked common authentication content.
Distributing SSH trust file to all node.
Successfully distributed SSH trust file to all node.
Verifying SSH trust on all hosts.
Successfully verified SSH trust on all hosts.
Successfully created SSH trust.
Successfully created SSH trust for [omm] user.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Warning: InstallationGuide environment contains some warning messages.
Please get more details by "/package_r8/sudo/gs_checkos -i A -h host179174,host179175,host179176".
Set and check OS parameter completed.
Preparing CRON service.
Successfully prepared CRON service.
Preparing SSH service.
Successfully prepared SSH service.
Setting user environmental variables.
Successfully set user environmental variables.
Configuring alarms on the cluster nodes.
Successfully configured alarms on the cluster nodes.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting finish flag.
Successfully set finish flag.
PreInstallationGuide succeeded.
```

## 相关命令<a name="zh-cn_topic_0237152419_zh-cn_topic_0059778992_s73a8656dd6a14499a72a77a5b5192112"></a>

[gs\_install](gs_install.md)，[gs\_postuninstall](gs_postuninstall.md)

