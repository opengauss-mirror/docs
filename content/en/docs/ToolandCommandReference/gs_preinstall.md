# gs\_preinstall<a name="EN-US_TOPIC_0249632278"></a>

## Background<a name="en-us_topic_0237152419_en-us_topic_0059778992_section68942744218"></a>

**gs\_preinstall**, provided by openGauss, is used to configure the openGauss environment so that openGauss can be properly installed.

## Precautions<a name="en-us_topic_0237152419_en-us_topic_0059778992_s87eb073560414bc5ba369786f06cbb10"></a>

-   You need to check the upper-layer directory permissions to ensure that the user has the read, write, and execution permissions on the installation package and configuration file directory.
-   The mapping between each host name and IP address in the XML configuration file must be correct.
-   Only user  **root**  is authorized to run the  **gs\_preinstall**  command.
-   This product supports hybrid deployment of minor versions under major versions in the same OS. The supported list is as follows:

    ```
    CentOS 6.4/6.5/6.6/6.7/6.8/6.9
    CentOS 7.0/7.1/7.2/7.3/7.4
    openEuler
    ```


## Syntax<a name="en-us_topic_0237152419_en-us_topic_0059778992_sec57993efb15427997e842706b81cd12"></a>

-   Prepare the openGauss environment.

    ```
    gs_preinstall -U USER -G GROUP -X XMLFILE [-L] [--skip-os-set] [--env-var="ENVVAR" [...]] [--sep-env-file=ENVFILE] [--skip-hostname-set] [-l LOGFILE] [--non-interactive]
    ```

-   Display help information.

    ```
    gs_preinstall -? | --help
    ```

-   Display version information.

    ```
    gs_preinstall -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152419_en-us_topic_0059778992_sa9b846fc7333421891c90ad7a67da129"></a>

-   -U

    Specifies the name of the OS user running openGauss.

    Value range: a string. It must comply with the naming convention.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The value of  **-U**  cannot contain double backslashes \(\\\\\) or the following characters: |;&$<\>\`'\\"\{\}\(\)\[\]\~\*?"

-   -G

    Specifies the name of the OS user group running openGauss.

    Value range: a string. It must comply with the naming convention.

-   -X

    Specifies the path of the openGauss configuration file.

    Value range: storage paths of XML files

-   -L

    Prepares openGauss installation environment for the current nodes only. This parameter is used in the scenarios where the trust relationship of user  **root**  is not allowed and where the security hardening parameter  **PermitRootLogin**  is set to  **no**. The following prerequisites must be met:

    1.  The installation package and openGauss configuration file have been uploaded to all the hosts.
    2.  The openGauss installation user has been created and mutual trust relationships have been established.
    3.  All the commands executed on all the hosts are consistent.
    4.  The mapping relationships between hostnames and IP addresses of all nodes need to be manually written to /etc/hosts on each host, and the comment content  **\#Gauss OM IP Hosts Mapping**  must be added.

-   --skip-os-set

    Specifies whether to set the parameter for the OS. By default, the parameter is set for the OS. If the parameter is specified, the configuration is dropped.

-   --env-var="ENVVAR"

    Sets the environment variable for common users. You can specify multiple environment variables.

    Value range: a string.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This parameter cannot be set to the environment variable created by openGauss by default. Otherwise, the environment variables of the openGauss will be overwritten. [Table 1](#en-us_topic_0237152419_en-us_topic_0059778992_tb25e10cef2104026bdbbedc439fbcd50) lists the environment variables created by openGauss by default. 

-   --sep-env-file=ENVFILE

    Saves environment variable files. If this parameter is specified, the split version of environment variable is used.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The environment variable file name cannot be specified the same as that of the corresponding openGauss directories or those directories, or the directory of the openGauss user.

-   --skip-hostname-set

    Specifies whether to write the mapping relationship between the host name and IP address of the XML configuration file to the  **/etc/hosts**  file. By default, the relationship is written to the file. If this parameter is specified, the relationship is not written to the file.
    
 -   --unused-third-party

    Whether to use the third-party library provided by OM. By default, if this parameter is specified, it will not be used.

- -l

  Specifies a log file name and its path. A timestamp will be added automatically to the log file name.

  Default value:  **/var/log/gaussdb/_user name_/om/gs\_preinstall.log**

  When  **-l**  is not specified but  **gaussdbLogPath**  is set in the XML file, the default value of the  **-l**  parameter is a combination of  **gaussdbLogPath**  value, the user name, and  **om/gs\_preinstall-YYYY-MM-DD\_hhmmss.log**.

-   --non-interactive

    Specifies the preinstallation execution mode.

    -   When this parameter is not specified, the secure interactive mode is used where you need to enter the password for man-machine interaction.
    -   If this parameter is specified, the non-interactive mode is used and man-machine interaction is not required.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.

    **Table  1**  Environment variables created by openGauss by default

    <a name="en-us_topic_0237152419_en-us_topic_0059778992_tb25e10cef2104026bdbbedc439fbcd50"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152419_en-us_topic_0059778992_r4188ea57a58e4a1dab2c9431272a9499"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p536606661727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p536606661727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p536606661727"></a>Environment Variable</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p515467271727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p515467271727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p515467271727"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152419_en-us_topic_0059778992_rc4226534c0f04b598fca2a8499e998f2"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_abc48968a214847e98eb04387d3619ba4"><a name="en-us_topic_0237152419_en-us_topic_0059778992_abc48968a214847e98eb04387d3619ba4"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_abc48968a214847e98eb04387d3619ba4"></a>MPPDB_ENV_SEPARATE_PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_a3c87e2c3291c437eb420c70320fefaee"><a name="en-us_topic_0237152419_en-us_topic_0059778992_a3c87e2c3291c437eb420c70320fefaee"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_a3c87e2c3291c437eb420c70320fefaee"></a>Split file path of the <span id="text912118451937"><a name="text912118451937"></a><a name="text912118451937"></a>openGauss</span> environment variable</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_re439b0f7558b4da1b0ba4160dbd8ece4"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p637092701727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p637092701727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p637092701727"></a>GPHOME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p601772391727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p601772391727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p601772391727"></a><span id="text5531346631"><a name="text5531346631"></a><a name="text5531346631"></a>openGauss</span> tool directory</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_rad52c52052364fa18a5a56f7b92468a0"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p471190851727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p471190851727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p471190851727"></a>PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p585495801727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p585495801727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p585495801727"></a><span id="text771810467317"><a name="text771810467317"></a><a name="text771810467317"></a>openGauss</span> tool script directory</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_rd37b7b74a5fc463d912c497180bfce44"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p14069661727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p14069661727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p14069661727"></a>LD_LIBRARY_PATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p468554371727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p468554371727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p468554371727"></a>Third-party dynamic database path referenced by <span id="text2038311471431"><a name="text2038311471431"></a><a name="text2038311471431"></a>openGauss</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_r3854f6c63c1b419fbc84fced6fb52a2a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p663112771727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p663112771727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p663112771727"></a>PYTHONPATH</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p25043581727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p25043581727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p25043581727"></a>Python software path</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_r912813666b1d4a71a81543a3e67c4523"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p137383271727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p137383271727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p137383271727"></a>GAUSS_WARNING_TYPE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p390627011727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p390627011727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p390627011727"></a>Alarm type</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_r0e1005435bd54874863bd5f754eab1d2"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p225507851727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p225507851727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p225507851727"></a>GAUSSHOME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p146743011727"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p146743011727"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p146743011727"></a><span id="text893217471333"><a name="text893217471333"></a><a name="text893217471333"></a>openGauss</span> installation path</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_rab98c5c9e5ce4698960940d9b2b184b0"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_a2c6c795b73b745d3ad78ebeb7d98740f"><a name="en-us_topic_0237152419_en-us_topic_0059778992_a2c6c795b73b745d3ad78ebeb7d98740f"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_a2c6c795b73b745d3ad78ebeb7d98740f"></a>GAUSS_VERSION</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_aade982b746a443d8a145b6380b37f33c"><a name="en-us_topic_0237152419_en-us_topic_0059778992_aade982b746a443d8a145b6380b37f33c"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_aade982b746a443d8a145b6380b37f33c"></a><span id="text17477164815317"><a name="text17477164815317"></a><a name="text17477164815317"></a>openGauss</span> version</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_r0928038817994fa88fdb088cb2acb39d"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_a8d2c2b42fc9c476f954d31db2032aba1"><a name="en-us_topic_0237152419_en-us_topic_0059778992_a8d2c2b42fc9c476f954d31db2032aba1"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_a8d2c2b42fc9c476f954d31db2032aba1"></a>PGHOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_a30fb06f03ed74b26ac95dc3a2166b29e"><a name="en-us_topic_0237152419_en-us_topic_0059778992_a30fb06f03ed74b26ac95dc3a2166b29e"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_a30fb06f03ed74b26ac95dc3a2166b29e"></a>Temporary directory of the user in <span id="text8975748639"><a name="text8975748639"></a><a name="text8975748639"></a>openGauss</span></p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_rbab349c6a18b42039f5bb8b510ec278b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_abcb90e945022467a860f7dac87f0bb5e"><a name="en-us_topic_0237152419_en-us_topic_0059778992_abcb90e945022467a860f7dac87f0bb5e"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_abcb90e945022467a860f7dac87f0bb5e"></a>GS_CLUSTER_NAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_a6d9b1e2391b24ed3a6106676aca50642"><a name="en-us_topic_0237152419_en-us_topic_0059778992_a6d9b1e2391b24ed3a6106676aca50642"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_a6d9b1e2391b24ed3a6106676aca50642"></a><span id="text125254497318"><a name="text125254497318"></a><a name="text125254497318"></a>openGauss</span> name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_red87d359bd4a40978020ed2559891775"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p376503821742"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p376503821742"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p376503821742"></a>GAUSSLOG</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p297821381742"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p297821381742"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p297821381742"></a><span id="text1935410509318"><a name="text1935410509318"></a><a name="text1935410509318"></a>openGauss</span> log path</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152419_en-us_topic_0059778992_r725fe5ba3caf42ef9b6636f79980e526"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_a8271033bc4c04b108fef12c7d8e91f49"><a name="en-us_topic_0237152419_en-us_topic_0059778992_a8271033bc4c04b108fef12c7d8e91f49"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_a8271033bc4c04b108fef12c7d8e91f49"></a>GAUSS_ENV</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p564036117357"><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p564036117357"></a><a name="en-us_topic_0237152419_en-us_topic_0059778992_en-us_topic_0058968149_p564036117357"></a>Environment variable flag of <span id="text892755020319"><a name="text892755020319"></a><a name="text892755020319"></a>openGauss</span></p>
    </td>
    </tr>
    </tbody>
    </table>


## Manually Setting Syslog on the Server<a name="en-us_topic_0237152419_en-us_topic_0059778992_s407b3891fb94407a89ecc2fccd58033a"></a>

Add the following content to the  **/etc/syslog-ng/syslog-ng.conf**  file:

```
template t_gaussdb {template("$DATE $SOURCEIP $MSGONLY\n");template_escape(no);};
source s_gaussdb{ udp(); };
filter f_gaussdb    { level(err,  crit) and match('GaussDB'); };
destination d_gaussdb { file("/var/log/syslog_MPPDB", template(t_gaussdb)); };
log { source(s_gaussdb); filter(f_gaussdb); destination(d_gaussdb); };
```

Add the following content to the  **/etc/sysconfig/syslog**  file:

```
SYSLOGD_OPTIONS="-r -m 0"
KLOGD_OPTIONS="-x"
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>You need to perform the operations on every host in openGauss.

## Example<a name="en-us_topic_0237152419_en-us_topic_0059778992_s63833ed33f0c49f8959d4a86ca7bb4f2"></a>

Prepare openGauss environment in non-interactive mode.

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
Warning: Installation environment contains some warning messages.
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
Preinstallation succeeded.
```

Prepare openGauss environment in interactive mode.

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
Warning: Installation environment contains some warning messages.
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
Preinstallation succeeded.
```

## Helpful Links<a name="en-us_topic_0237152419_en-us_topic_0059778992_s73a8656dd6a14499a72a77a5b5192112"></a>

[gs\_install](gs_install.md)  and  [gs\_postuninstall](gs_postuninstall.md)

