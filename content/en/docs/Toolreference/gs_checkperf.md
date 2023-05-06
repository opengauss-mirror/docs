# gs\_checkperf<a name="EN-US_TOPIC_0249632246"></a>

## Background<a name="en-us_topic_0237152332_en-us_topic_0059778118_section1646074516325"></a>

openGauss provides the  **gs\_checkperf**  tool for you to routinely check the openGauss-level performance \(such as host CPU, Gauss GPU, and I/O usage\), host-level performance \(CPU, memory, and I/O usage\), session-/process-level performance \(CPU, memory, and I/O usage\), and SSD performance \(write and read performance\). This helps you learn the openGauss load and fine-tune database performance accordingly.

## Prerequisites<a name="en-us_topic_0237152332_en-us_topic_0059778118_s32cc8b6a2bcf48ca8ad91ad38048b407"></a>

- openGauss running status is normal and is not the read-only mode.

- Services are running properly on the database.

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >For security purposes, the tool in the  **gaussdbToolPath**  directory will be automatically deleted after the pre-installation is complete in enterprise-edition installation mode.

## Precautions<a name="en-us_topic_0237152332_section4694838915381"></a>

-   The monitoring information of  **gs\_checkperf**  comes from tables in PMK mode. If the ANALYZE operation is not performed on such tables,  **gs\_checkperf**  may fail to be executed. An example of the error information is as follows:

    ```
    LOG:  Statistics in some tables or columns(pmk.pmk_snapshot.snapshot_id) are not collected.
    HINT:  Do analyze for them in order to generate optimized plan.
    ```

    To fix this error, log in to a node where a master database node is deployed, connect to the  **postgres**  database, and run the following SQL statements:

    ```
    analyze pmk.pmk_configuration; 
    analyze pmk.pmk_meta_data;
    analyze pmk.pmk_snapshot;
    analyze pmk.pmk_snapshot_dbnode_stat;
    analyze pmk.pmk_snapshot_datanode_stat;
    ```


## Syntax<a name="en-us_topic_0237152332_en-us_topic_0059778118_s48cce05cce9e43c4a17fa654f91b821a"></a>

-   Check the SSD performance \(as user  **root**\).

    ```
    gs_checkperf -U USER [-o OUTPUT] -i SSD [-l LOGFILE]
    ```

-   Check the openGauss performance \(as the user for installing openGauss\).

    ```
    gs_checkperf [-U USER] [-o OUTPUT] [-i PMK] [--detail] [-l LOGFILE]
    ```

-   Display help information.

    ```
    gs_checkperf -? | --help
    ```

-   Display version information.

    ```
    gs_checkperf -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152332_en-us_topic_0059778118_sbbcefb85880e44fcad49c37604f46506"></a>

-   -U

    Specifies the name of the user for running openGauss.

    Value range: name of the user for running openGauss

    Specify this parameter when you run the command as user  **root**.

-   -o

    Specifies the file for saving performance check reports.

    Value range: the name of a specified file

    If this parameter is not specified, OS check results are displayed on the screen.

-   -i

    Specifies the number of a check item. This parameter is case-insensitive. Format: -i PMK and -i SSD

    Value range: PMK and SSD

    Check the PMK item as an openGauss user.

    Check the SSD item as user  **root**.

    If this parameter is not specified, the PMK item is checked by default as the openGauss user, and SSD item is checked by default as user  **root**.

-   --detail

    Displays detailed PMK check results.

-   -l

    Specifies the path for saving log files.

    The default path is  **/var/log/gaussdb/omm/om/gs\_checkperf-YYYY-MM-DD\_hhmmss.log**.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


**Table  1**  Performance check items

<a name="en-us_topic_0237152332_en-us_topic_0059778118_t0fe90289382441e9a0bfc128081c6125"></a>
<table><thead align="left"><tr id="en-us_topic_0237152332_en-us_topic_0059778118_re6547f7c988b473187a6a56f9914bdde"><th class="cellrowborder" valign="top" width="18.16%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152332_en-us_topic_0059778118_a3cf87909124c4070928aab84bd5e59da"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3cf87909124c4070928aab84bd5e59da"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3cf87909124c4070928aab84bd5e59da"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="31.09%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152332_en-us_topic_0059778118_a76080c148f6b4078b84de54590357f55"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a76080c148f6b4078b84de54590357f55"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a76080c148f6b4078b84de54590357f55"></a>Performance Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="50.74999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152332_en-us_topic_0059778118_a12b2c59279724454919dcd93db4934d4"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a12b2c59279724454919dcd93db4934d4"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a12b2c59279724454919dcd93db4934d4"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152332_en-us_topic_0059778118_r028e4fde05134aa7a795a0abddd49afa"><td class="cellrowborder" rowspan="7" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a7fdbc374b65c4eb88df964ac0d215a1a"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a7fdbc374b65c4eb88df964ac0d215a1a"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a7fdbc374b65c4eb88df964ac0d215a1a"></a><span id="text12538310585"><a name="text12538310585"></a><a name="text12538310585"></a>openGauss</span> level</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_af11c59ea7d3445eeb11c2a751936c91e"><a name="en-us_topic_0237152332_en-us_topic_0059778118_af11c59ea7d3445eeb11c2a751936c91e"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_af11c59ea7d3445eeb11c2a751936c91e"></a>Host CPU Usage</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_aee0eef3b3b714b3d8c1533669db9d900"><a name="en-us_topic_0237152332_en-us_topic_0059778118_aee0eef3b3b714b3d8c1533669db9d900"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_aee0eef3b3b714b3d8c1533669db9d900"></a>CPU usage of the host</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r70bff2fb39a94f3cabad32b54864c8e5"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a47e829bd8de740879aaf4302f0b9a41e"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a47e829bd8de740879aaf4302f0b9a41e"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a47e829bd8de740879aaf4302f0b9a41e"></a>Gauss CPU Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a6ca2cca9bb65405c868f516f6f6597a4"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a6ca2cca9bb65405c868f516f6f6597a4"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a6ca2cca9bb65405c868f516f6f6597a4"></a>Usage of the Gauss CPU</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r2ee70eee8e2f4441987c0cfd5dad3953"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p972606210514"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p972606210514"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p972606210514"></a>Shared Memory Hit Rate</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a67f73cb1fca04445a1b4396d5f9d5ef6"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a67f73cb1fca04445a1b4396d5f9d5ef6"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a67f73cb1fca04445a1b4396d5f9d5ef6"></a>Hit rate of the shared memory</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r9f586cd93d254f8483607283d927530b"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a3bb25e33b28c4333be01da7e9b7bbae7"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3bb25e33b28c4333be01da7e9b7bbae7"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3bb25e33b28c4333be01da7e9b7bbae7"></a>Memory Sorting Ratio</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p709975710514"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p709975710514"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p709975710514"></a>Ratio of completed sorts in memory</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r8aa92e48384a485e9160ccb2be570dfa"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a4fef19be07fa421f8b317223562c24a2"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a4fef19be07fa421f8b317223562c24a2"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a4fef19be07fa421f8b317223562c24a2"></a>I/O Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a01cef748932c4bad8d09a49076783e4b"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a01cef748932c4bad8d09a49076783e4b"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a01cef748932c4bad8d09a49076783e4b"></a>Number and time of file reads and writes</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_rbd562318e9be4b9589b38b5ea09d3690"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p618105861493"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p618105861493"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p618105861493"></a>Disk Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p406015301493"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p406015301493"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p406015301493"></a>Number of file writes, average write duration, and maximum write duration</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r6584835f31634f89bde6f0ac53c3a4fc"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p147879501496"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p147879501496"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p147879501496"></a>Transaction Statistics</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p569732861496"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p569732861496"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p569732861496"></a>Number of current SQL executions and sessions</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r2df560ab57c946eaa1c4be619de1f528"><td class="cellrowborder" rowspan="3" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a3271a6a6d6ce4f05802a693f409c4598"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3271a6a6d6ce4f05802a693f409c4598"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3271a6a6d6ce4f05802a693f409c4598"></a>Host level</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p515020414910"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p515020414910"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p515020414910"></a>CPU Usage</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a058428e2b5654026afc621dd3500a984"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a058428e2b5654026afc621dd3500a984"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a058428e2b5654026afc621dd3500a984"></a>Host CPU usage, including CPU busy time and CPU idle time</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r02d863fa5fe14a1c96790c46a71ed1a8"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a3cc4b0c8f76c4921bd942eba8f21a0eb"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3cc4b0c8f76c4921bd942eba8f21a0eb"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a3cc4b0c8f76c4921bd942eba8f21a0eb"></a>Memory Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a43a755d8d7fe4c84a59426d3f764be39"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a43a755d8d7fe4c84a59426d3f764be39"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a43a755d8d7fe4c84a59426d3f764be39"></a>Host memory usage, including total physical memory and used memory</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r940d692764e34352b2bfba19e918f96b"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p396640414929"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p396640414929"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p396640414929"></a>I/O Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_aeb6ea70bb71d479abc118f4f74686807"><a name="en-us_topic_0237152332_en-us_topic_0059778118_aeb6ea70bb71d479abc118f4f74686807"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_aeb6ea70bb71d479abc118f4f74686807"></a>Number and time of file reads and writes</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_rc59834036f1d4e7992fc189f5f1a0ec3"><td class="cellrowborder" rowspan="3" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a352ef0e6114742a7a938b401caa559ff"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a352ef0e6114742a7a938b401caa559ff"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a352ef0e6114742a7a938b401caa559ff"></a>Session/Process level</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a63fb0c0123c649deb50443de0d10f240"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a63fb0c0123c649deb50443de0d10f240"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a63fb0c0123c649deb50443de0d10f240"></a>CPU Usage</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a5083725c98584ae79ef4705cf68f212d"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a5083725c98584ae79ef4705cf68f212d"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a5083725c98584ae79ef4705cf68f212d"></a>Session CPU usage, including CPU busy time and CPU idle time</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_rb41eb0e7c0d54348bd83b4a55fed05ac"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a45e3e83ebafc4f5c97c0df1d102aad2a"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a45e3e83ebafc4f5c97c0df1d102aad2a"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a45e3e83ebafc4f5c97c0df1d102aad2a"></a>Memory Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p635716114918"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p635716114918"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p635716114918"></a>Session memory usage, including total physical memory and used memory</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r0a419614613c49b78e54607d2191d498"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a6ed31d37a3f940429de1a3b56319ec7e"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a6ed31d37a3f940429de1a3b56319ec7e"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a6ed31d37a3f940429de1a3b56319ec7e"></a>I/O Usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a194ab6997cf74ef4b18102b91cbb1cf4"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a194ab6997cf74ef4b18102b91cbb1cf4"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a194ab6997cf74ef4b18102b91cbb1cf4"></a>Number of shared buffer hits in a session</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r731c21a5ff90473dae45b7040be76f4e"><td class="cellrowborder" rowspan="2" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a975b30baaa52485fb9daf495fcb9864f"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a975b30baaa52485fb9daf495fcb9864f"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a975b30baaa52485fb9daf495fcb9864f"></a>SSD performance (Only user <strong id="b842352706162231"><a name="b842352706162231"></a><a name="b842352706162231"></a>root</strong> can view it.)</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a14505fed654447119c9132aab506e14c"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a14505fed654447119c9132aab506e14c"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a14505fed654447119c9132aab506e14c"></a>Write Performance</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p426150143329"><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p426150143329"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_en-us_topic_0058968144_p426150143329"></a>The <strong id="b2074845819517"><a name="b2074845819517"></a><a name="b2074845819517"></a>dd</strong> command (<strong id="b11754658185112"><a name="b11754658185112"></a><a name="b11754658185112"></a>flag=direct bs=8M count=2560</strong>) is used to write data into an SSD every 10s.</p>
</td>
</tr>
<tr id="en-us_topic_0237152332_en-us_topic_0059778118_r71a2998812ec4d1daee85b3fd37c592f"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_a62abca5403914f60bf2f04230255fa40"><a name="en-us_topic_0237152332_en-us_topic_0059778118_a62abca5403914f60bf2f04230255fa40"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_a62abca5403914f60bf2f04230255fa40"></a>Read Performance</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152332_en-us_topic_0059778118_af8e718b7c550489db9f0080c94bdf226"><a name="en-us_topic_0237152332_en-us_topic_0059778118_af8e718b7c550489db9f0080c94bdf226"></a><a name="en-us_topic_0237152332_en-us_topic_0059778118_af8e718b7c550489db9f0080c94bdf226"></a>The <strong id="b1766114465211"><a name="b1766114465211"></a><a name="b1766114465211"></a>dd</strong> command (<strong id="b9661347529"><a name="b9661347529"></a><a name="b9661347529"></a>flag=direct bs=8M count=2560</strong>) is used to read data from an SSD every 7s.</p>
</td>
</tr>
</tbody>
</table>

## Examples<a name="en-us_topic_0237152332_en-us_topic_0059778118_scc236daf4ed8467b8f5542a998a78cae"></a>

Example 1: Run the following command to display performance statistics in simple mode on the screen:

```
gs_checkperf -i pmk -U omm
Cluster statistics information:
    Host CPU busy time ratio                     :    1.43       %
    GaussDB CPU time % in busy time                :    1.88       %
    Shared Buffer Hit ratio                      :    99.96      %
    In-memory sort ratio                         :    100.00     %
    Physical Reads                               :    4
    Physical Writes                              :    25
    DB size                                      :    70         MB
    Total Physical writes                        :    25
    Active SQL count                             :    2
    Session count                                :    3
```

Example 2: Run the following command to display performance statistics in detailed mode on the screen:

```
gs_checkperf -i pmk -U omm --detail
Cluster statistics information:
Host CPU usage rate:
    Host total CPU time                          :    42386.667  Jiffies
    Host CPU busy time                           :    1873.333   Jiffies
    Host CPU iowait time                         :    20.000     Jiffies
    Host CPU busy time ratio                     :    4.42       %
    Host CPU iowait time ratio                   :    .05        %
GaussDB CPU usage rate:
    GaussDB CPU time % in busy time                :    19.04      %
    GaussDB CPU time % in total time               :    .84        %
Shared buffer hit rate:
    Shared Buffer Reads                          :    0
    Shared Buffer Hits                           :    24129
    Shared Buffer Hit ratio                      :    100.00     %    In-memory sort ratio                         :    100.00     %I/O usage:
    Number of files                              :    537
    Physical Reads                               :    0
    Physical Writes                              :    0
    Read Time                                    :    0          ms
    Write Time                                   :    0          ms
Disk usage:
    DB size                                      :    70         MB
    Total Physical writes                        :    0
    Average Physical write                       :    0
    Maximum Physical write                       :    0
Activity statistics:
    Active SQL count                             :    2
    Session count                                :    3
Node statistics information:
dn_6001_6002:
    GaussDB CPU Time                               :    200        Jiffies
    Host CPU Busy Time                           :    3490       Jiffies
    Host CPU Total Time                          :    42330      Jiffies
    GaussDB CPU Time % in Busy Time                :    5.73       %
    GaussDB CPU Time % in Total Time               :    .47        %
    Physical memory                              :    8231776256 Bytes
    DB Memory usage                              :    877236224  Bytes
    Shared buffer size                           :    33554432   Bytes
    Shared buffer hit ratio                      :    100.00     %
    Sorts in memory                              :    123
    Sorts in disk                                :    0
    In-memory sort ratio                         :    100.00     %
    Number of files                              :    149
    Physical Reads                               :    0
    Physical Writes                              :    0
    Read Time                                    :    0
    Write Time                                   :    0
dn_6003_6004:
    GaussDB CPU Time                               :    170        Jiffies    Host CPU Busy Time                           :    1030       Jiffies
    Host CPU Total Time                          :    42470      Jiffies    GaussDB CPU Time % in Busy Time                :    16.50      %
    GaussDB CPU Time % in Total Time               :    .40        %
    Physical memory                              :    8231776256 Bytes
    DB Memory usage                              :    881434624  Bytes    Shared buffer size                           :    33554432   Bytes
    Shared buffer hit ratio                      :    100.00     %
    Sorts in memory                              :    119
    Sorts in disk                                :    0
    In-memory sort ratio                         :    100.00     %
    Number of files                              :    165
    Physical Reads                               :    0
    Physical Writes                              :    0
    Read Time                                    :    0
    Write Time                                   :    0
dn_6005_6006:
    GaussDB CPU Time                               :    220        Jiffies
    Host CPU Busy Time                           :    1100       Jiffies
    Host CPU Total Time                          :    42360      Jiffies
    GaussDB CPU Time % in Busy Time                :    20.00      %
    GaussDB CPU Time % in Total Time               :    .52        %
    Physical memory                              :    8231776256 Bytes
    DB Memory usage                              :    881430528  Bytes
    Shared buffer size                           :    33554432   Bytes
    Shared buffer hit ratio                      :    100.00     %
    Sorts in memory                              :    122
    Sorts in disk                                :    0
    In-memory sort ratio                         :    100.00     %
    Number of files                              :    115
    Physical Reads                               :    0
    Physical Writes                              :    0
    Read Time                                    :    0
    Write Time                                   :    0
Session statistics information(Top 10):
Session CPU statistics:
1 dn_6003_6004-postgres-dbazt:
    Session CPU time                             :    1211
    Database CPU time                            :    37670
    Session CPU time %                           :    3.21       %
2 dn_6005_6006-postgres-dbazt:
    Session CPU time                             :    1204
    Database CPU time                            :    35730
    Session CPU time %                           :    3.37       %
3 dn_6001_6002-postgres-dbazt:
    Session CPU time                             :    1064
    Database CPU time                            :    34120
    Session CPU time %                           :    3.12       %

Session Memory statistics:
1 dn_6005_6006-postgres-dbazt:
    Buffer Reads                                 :    8989
    Shared Buffer Hit ratio                      :    96.97
    In Memory sorts                              :    136
    In Disk sorts                                :    0
    In Memory sorts ratio                        :    100.00
    Total Memory Size                            :    21593048
    Used Memory Size                             :    18496600
2 dn_6003_6004-postgres-dbazt:
    Buffer Reads                                 :    9030
    Shared Buffer Hit ratio                      :    96.94
    In Memory sorts                              :    133
    In Disk sorts                                :    0
    In Memory sorts ratio                        :    100.00
    Total Memory Size                            :    21576664
    Used Memory Size                             :    18495688
3 dn_6001_6002-postgres-dbazt:
    Buffer Reads                                 :    8668
    Shared Buffer Hit ratio                      :    96.97
    In Memory sorts                              :    138
    In Disk sorts                                :    0
    In Memory sorts ratio                        :    100.00
    Total Memory Size                            :    21258856
    Used Memory Size                             :    18159736

Session IO statistics:
1 dn_6003_6004-postgres-dbazt:
    Physical Reads                               :    285
    Read Time                                    :    5320
2 dn_6005_6006-postgres-dbazt:
    Physical Reads                               :    281
    Read Time                                    :    5811
3 dn_6001_6002-postgres-dbazt:
    Physical Reads                               :    271
    Read Time                                    :    4662
```

## Helpful Links<a name="en-us_topic_0237152332_en-us_topic_0059778118_s192dbb9a0f6b4bae84d65bf5bdd8a796"></a>

[gs\_check](gs_check.md),  [gs\_checkos](gs_checkos.md)

