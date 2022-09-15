# gs\_ctl<a name="EN-US_TOPIC_0289899218"></a>

## Background<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_saed7059efc5d469189c9e53a984ba786"></a>

**gs\_ctl**, provided by openGauss, is used to control the database service. It can be used to start and stop the database service and to query the database status.  **gs\_ctl**  is used by the openGauss management module.

**gs\_ctl**  is executed by OS user  **omm**.

-   Start, stop, and restart the openGauss node.
-   Reload the configuration files \(**postgresql.conf**  and  **pg\_hba.conf**\) without stopping the database.
-   Perform primary/standby switchover, query primary/standby status, rebuild the database instance, and query the rebuilding status.

## Description<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_sfeccdff45fda4d8dacf4cefb2b8103f8"></a>

The  **gs\_ctl**  tool can use the following types of parameters:

-   Parameters for  **option**. For details, see  [Table 1](#en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t56b333c48c5e46cc93262560e23032f5).
-   Common parameters. For details, see  [Table 2](#en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68).
-   Parameters for  **start**  and  **restart**. For details, see  [Table 3](#en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t6d75b31bab9540b284e45222396ae38b).
-   Parameters for  **stop**  and  **restart**. For details, see  [Table 4](#en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a).
-   Parameters for  **switchover**. For details, see  [Table 5](#en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31).
-   Parameters for  **build**. For details, see  [Table 6](#en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b).
-   Parameters for  **query**. For details, see  [Parameters for query](#en-us_topic_0287275989_table198621411133319).
-   Parameters for  **member**. For details, see  [Table 8](#table1055392110383).
-   Parameters for  **changerole**. For details, see  [Table 9](#table591372895218).
-   Parameters for  **setrunmode**. For details, see  [Table 10](#table1451519418810).

    **Table  1**  Parameters for option

    <a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t56b333c48c5e46cc93262560e23032f5"></a>
    <table><thead align="left"><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r3929a183903a469ab774fba257d687b4"><th class="cellrowborder" valign="top" width="25.3%" id="mcps1.2.3.1.1"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="74.7%" id="mcps1.2.3.1.2"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row181711619123"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p68172168121"><a name="p68172168121"></a><a name="p68172168121"></a>init</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p18172169122"><a name="p18172169122"></a><a name="p18172169122"></a>Creates a database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r3b3072e09eb74375b7f20d0c3e927d43"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a>start</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a>Starts the database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r31c37425852d4a24a3d79984a227aec5"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a>restart</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a>Restarts the database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r515fd2102d1d4bd3bd5bfded3a737b80"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a>build</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a>Rebuilds the standby or cascaded standby server on the primary server.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r0cd18abaee9141439b20f10f5909a508"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a>stop</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a>Stops the database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_rac69552e400344fdb7e6fd33ec6c5510"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a>reload</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a>Reloads the configuration files (<strong id="b135871748195315"><a name="b135871748195315"></a><a name="b135871748195315"></a>postgresql.conf</strong> and <strong id="b25929485536"><a name="b25929485536"></a><a name="b25929485536"></a>pg_hba.conf</strong>).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r3608cac8fce041f2b62be02691c710fd"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a>status</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a>Displays the running status of the database services.</p>
    </td>
    </tr>
    <tr id="row73071824121416"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p6307132414148"><a name="p6307132414148"></a><a name="p6307132414148"></a>finishredo</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p1030710244147"><a name="p1030710244147"></a><a name="p1030710244147"></a>Specifies that the standby server stops playback and is forcibly switched to the primary when the primary server is faulty.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r50cd614425ec45d2b87aece8def5e24c"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a>failover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a>When the primary server is abnormal, switches the standby server to a primary server.</p>
    <p id="en-us_topic_0287275989_p0444145125912"><a name="en-us_topic_0287275989_p0444145125912"></a><a name="en-us_topic_0287275989_p0444145125912"></a>After the switchover is successful, run the <strong id="b15302195714183"><a name="b15302195714183"></a><a name="b15302195714183"></a>gs_om -t refreshconf</strong> command to record the information about the primary and standby servers. Ensure that the <strong id="b430755716183"><a name="b430755716183"></a><a name="b430755716183"></a>gs_om -t refreshconf</strong> command is executed successfully. Otherwise, the database status will be affected when the database is restarted.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_rf3ffc423f13a4943b18d24be85bcc74f"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a>switchover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a>When the primary/standby server relationship is normal, switches the standby server to primary for maintenance purposes. Data will not be lost during the switchover.</p>
    <p id="en-us_topic_0287275989_p12188127154613"><a name="en-us_topic_0287275989_p12188127154613"></a><a name="en-us_topic_0287275989_p12188127154613"></a>The <strong id="b19985191881919"><a name="b19985191881919"></a><a name="b19985191881919"></a>switchover</strong> command takes effect only when it is executed on the standby server to be switched to the primary server. If the <strong id="b844612314223"><a name="b844612314223"></a><a name="b844612314223"></a>switchover</strong> command is executed on the primary server, it is used only for query.</p>
    <p id="en-us_topic_0287275989_p1977111500144"><a name="en-us_topic_0287275989_p1977111500144"></a><a name="en-us_topic_0287275989_p1977111500144"></a>After the switchover is successful, run the <strong id="b567315201564"><a name="b567315201564"></a><a name="b567315201564"></a>gs_om -t refreshconf</strong> command to record the information about the primary and standby servers. Ensure that the <strong id="b1067312201768"><a name="b1067312201768"></a><a name="b1067312201768"></a>gs_om -t refreshconf</strong> command is executed successfully. Otherwise, the database status will be affected when the database is restarted.</p>
    <p id="en-us_topic_0287275989_p1701525967"><a name="en-us_topic_0287275989_p1701525967"></a><a name="en-us_topic_0287275989_p1701525967"></a>After the <strong id="b42601545112519"><a name="b42601545112519"></a><a name="b42601545112519"></a>switchover</strong> command is delivered, if the command execution times out, the execution status of the background process may be uncertain.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r30b3aa9baf20460baf9e2b4f5fc55af3"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a>Queries the status between the primary and standby servers.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r2ce5962d0dea41f3908b55f917778497"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a>notify</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a>Specifies the primary and standby servers after startup.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r35e8037818c84fdeafe486b78988f621"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a>kill</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a>Sends semaphore to a specified process.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r49b9f0118eb54e7da572b7511322b93d"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a>querybuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a>Checks the rebuilding process of the database.</p>
    </td>
    </tr>
    </tbody>
    </table>


**Table  2**  Common parameters

<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68"></a>
<table><thead align="left"><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_re02c46dcbf4e4581add1ede94a47195b"><th class="cellrowborder" valign="top" width="22.117788221177882%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="30.846915308469153%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r6ae94b168ff1431ebeb1d02a8183345a"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a>-D, --pgdata=DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a>The value of <strong id="b141471111181315"><a name="b141471111181315"></a><a name="b141471111181315"></a>DATADIR</strong> must be a valid data directory.</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r01437712745143c7b52a1c5f2b9f7b52"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a>-s,  --silent</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p742495310515"><a name="p742495310515"></a><a name="p742495310515"></a>Displays partial prompt information only for the <strong id="b3234151216146"><a name="b3234151216146"></a><a name="b3234151216146"></a>reload</strong>, <strong id="b9234181281417"><a name="b9234181281417"></a><a name="b9234181281417"></a>restart</strong>, and <strong id="b1423561251415"><a name="b1423561251415"></a><a name="b1423561251415"></a>stop </strong>commands. For example, server promoting, server shutting down. Information such as " waiting for server to shut down, server stopped" is not displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r5d93022a354a4f6f863cdc9623106c56"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a>-t, --timeout=SECS</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a>Maximum seconds for waiting the completion of database startup, shutdown, or switchover. If the waiting times out, the command ends and exits with a notification that the waiting is not required anymore. Then, you can run the <strong id="b1035772955010"><a name="b1035772955010"></a><a name="b1035772955010"></a>gs_om -t status --detail</strong> command or other commands to check whether the database is started, shut down, or switched over successfully.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a>Value range: an integer (second)</p>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a>Default value: 60 seconds (waiting the completion of database startup, shutdown, or switchover)</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-V , --version</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>Prints the <strong id="b18579982612"><a name="b18579982612"></a><a name="b18579982612"></a>gs_ctl</strong> version information and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>-</p>
</td>
</tr>
<tr id="row872439171218"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p1472514912122"><a name="p1472514912122"></a><a name="p1472514912122"></a>-w</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p16725109131210"><a name="p16725109131210"></a><a name="p16725109131210"></a>Waits until the operation is complete.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p872612991212"><a name="p872612991212"></a><a name="p872612991212"></a>By default, you need to wait until the operation is complete when the database is started, stopped, or restarted.</p>
</td>
</tr>
<tr id="row15946015133"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p4941701135"><a name="p4941701135"></a><a name="p4941701135"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p20951603138"><a name="p20951603138"></a><a name="p20951603138"></a>Specifies that you do not need to wait for the operation to complete.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1495600132"><a name="p1495600132"></a><a name="p1495600132"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_rda88e0e994ae424dadad636f9e78b7e5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><strong id="b357823816237"><a name="b357823816237"></a><a name="b357823816237"></a>-M</strong> must be followed by the <strong id="b842352706162154"><a name="b842352706162154"></a><a name="b842352706162154"></a>SERVERMODE</strong> parameter, which specifies the startup mode of a database upon startup.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a>Value range of <strong id="b842352706162218"><a name="b842352706162218"></a><a name="b842352706162218"></a>SERVERMODE</strong>:</p>
<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><ul id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"><li><strong id="b42793387295"><a name="b42793387295"></a><a name="b42793387295"></a>primary</strong>: The server starts in primary mode.</li><li><strong id="b15503105314296"><a name="b15503105314296"></a><a name="b15503105314296"></a>standby</strong>: The server starts in standby mode.</li><li><strong id="b885519175018"><a name="b885519175018"></a><a name="b885519175018"></a>cascade_standby</strong>: The local server starts as a cascaded standby server.</li><li><strong id="b573938182610"><a name="b573938182610"></a><a name="b573938182610"></a>pending</strong>: The server is in pending mode to be promoted to a primary server or a standby server.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_row79165943917"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_p16108598396"><a name="en-us_topic_0287275989_en-us_topic_0237152408_p16108598396"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_p16108598396"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_p110125916399"><a name="en-us_topic_0287275989_en-us_topic_0237152408_p110125916399"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_p110125916399"></a><strong id="b4513204414338"><a name="b4513204414338"></a><a name="b4513204414338"></a>-T</strong> is followed by a term. The term is used as the host term when the command for switching the standby server to primary is executed. During the build, hosts greater than the term will be connected.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_p2106594397"><a name="en-us_topic_0287275989_en-us_topic_0237152408_p2106594397"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_p2106594397"></a>Value range of term: an unsigned integer.</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_row89351326193410"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_p19935152683419"><a name="en-us_topic_0287275989_p19935152683419"></a><a name="en-us_topic_0287275989_p19935152683419"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_p19935726153414"><a name="en-us_topic_0287275989_p19935726153414"></a><a name="en-us_topic_0287275989_p19935726153414"></a>Prints more debugging information.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_p1493592615345"><a name="en-us_topic_0287275989_p1493592615345"></a><a name="en-us_topic_0287275989_p1493592615345"></a>None</p>
</td>
</tr>
<tr id="row13980103411719"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p129811534181715"><a name="p129811534181715"></a><a name="p129811534181715"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p6926938132013"><a name="p6926938132013"></a><a name="p6926938132013"></a>The process does not automatically start after the generation is complete. It needs to be started by the invoker.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1698114349172"><a name="p1698114349172"></a><a name="p1698114349172"></a>None</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r0297ef20051849eeaa6c1304ff282801"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"></a>-P PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a>Specifies the password of the user connecting to the local database. It is used in conjunction with the <strong id="b26509356277"><a name="b26509356277"></a><a name="b26509356277"></a>-U</strong> parameter.</p>
<div class="note" id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a>When <strong id="b842352706164518"><a name="b842352706164518"></a><a name="b842352706164518"></a>-U</strong> is not specified, and the authentication mode is <strong id="b10590173603818"><a name="b10590173603818"></a><a name="b10590173603818"></a>trust</strong>, the setting of the <strong id="b159543617382"><a name="b159543617382"></a><a name="b159543617382"></a>-P</strong> parameter is invalid.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r3f82716aafe84968a563d032cd248c85"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a>-U USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_p164055217446"><a name="en-us_topic_0287275989_p164055217446"></a><a name="en-us_topic_0287275989_p164055217446"></a>Specifies the user that connects to the database. This parameter can be used only in conjunction with the parameter <strong id="b1733192022618"><a name="b1733192022618"></a><a name="b1733192022618"></a>notify</strong>, <strong id="b1733692010268"><a name="b1733692010268"></a><a name="b1733692010268"></a>query</strong>, <strong id="b34885354268"><a name="b34885354268"></a><a name="b34885354268"></a>failover</strong>, <strong id="b8588124462611"><a name="b8588124462611"></a><a name="b8588124462611"></a>switchover</strong>, or <strong id="b15336520112619"><a name="b15336520112619"></a><a name="b15336520112619"></a>querybuild</strong>.</p>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"></a>For domain users, use the DOMAIN\username format.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a>Value range: users existing in openGauss.</p>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a>Default value: If this parameter is not specified, the current OS user is used.</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r4e2f2b577bcb4896bff694fd6fea6e41"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"></a>-?, -h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a>Displays the help information related to the <strong id="b84235270616504"><a name="b84235270616504"></a><a name="b84235270616504"></a>gs_ctl</strong> command line parameters.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Common parameters for  **start**  and  **restart**

<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t6d75b31bab9540b284e45222396ae38b"></a>
<table><thead align="left"><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ra5163707ec6f459aa581508ce3a64fa7"><th class="cellrowborder" valign="top" width="21.38%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.21%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r42ebb4c1c5cd41b0a856b710b85a92ea"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a>-c, --core-file</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a>Allows the <strong id="b1118618422811"><a name="b1118618422811"></a><a name="b1118618422811"></a>gaussdb</strong> process to generate core files.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r8f755f6ca8bb430c8bc93b6be21aee87"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a>-l, --log=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a>Appends the server log output to the <strong id="b10259333104419"><a name="b10259333104419"></a><a name="b10259333104419"></a>FILENAME</strong> file.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a>The value of <strong id="b2373102465712"><a name="b2373102465712"></a><a name="b2373102465712"></a>FILENAME</strong> is a file that the user who starts the database service has the permission to operate.</p>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a>For example, the value is a file in the <strong id="b84235270611277"><a name="b84235270611277"></a><a name="b84235270611277"></a>data</strong> directory.</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_rf8dad388443e4dba914ce4e5f7a3c107"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a>-o OPTIONS</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a>Specifies options to be passed from openGauss directly to the <strong id="b16736125466"><a name="b16736125466"></a><a name="b16736125466"></a>gaussdb</strong> command.</p>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a>The options should usually be surrounded by single or double quotation marks to ensure that they are transferred as a whole.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a>Parameters supported in <a href="gaussdb.md">gaussdb</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ra613cc55a1f04bd59cd73853322ae8ab"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a>-p PATH-TO-POSTGRES</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a>Specifies the location of the executable file of the <strong id="b13563917192810"><a name="b13563917192810"></a><a name="b13563917192810"></a>gaussdb</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"></a>By default, the gaussdb executable file is taken from the same directory as <strong id="b12827163762816"><a name="b12827163762816"></a><a name="b12827163762816"></a>gs_ctl</strong>.</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Common parameters for  **stop**  and  **restart**

<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a"></a>
<table><thead align="left"><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_re62fdea480ab4246aa49656499aec578"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r7831cd85a10a4bb3b4d6c79f8e29eaf2"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a560da27731a646e6a636064b18132803"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a560da27731a646e6a636064b18132803"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a560da27731a646e6a636064b18132803"></a>-m, --mode=MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a>Specifies the disabled mode.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"></a>Values of <strong id="b3394224165716"><a name="b3394224165716"></a><a name="b3394224165716"></a>mode</strong>:</p>
<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><ul id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"><li><strong id="b6578164462813"><a name="b6578164462813"></a><a name="b6578164462813"></a>fast</strong>: All active transactions are rolled back and all clients are disconnected forcibly, and then the server is disabled.</li><li><strong id="b10450174742819"><a name="b10450174742819"></a><a name="b10450174742819"></a>immediate</strong>: The server is shut down forcibly and fault recovery occurs on the next startup.</li></ul>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a>Default value: <strong id="b84235270694526"><a name="b84235270694526"></a><a name="b84235270694526"></a>fast</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  5**  Parameters for switchover

<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31"></a>
<table><thead align="left"><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_re3e64b56d74d42f4914d7bb1d03aa970"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r9a3a522b0caf495da096a1ff8ba20aee"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a>-m SWITCHOVER-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a>Specifies the HA switchover mode when the primary and standby servers are normal.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a>Values of <strong id="b614016616711"><a name="b614016616711"></a><a name="b614016616711"></a>mode</strong>:</p>
<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><ul id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"><li><strong id="b1316717120488"><a name="b1316717120488"></a><a name="b1316717120488"></a>fast</strong>: All active transactions are rolled back and all clients are disconnected forcibly, and then the server is switched.</li><li><strong id="b176071121518"><a name="b176071121518"></a><a name="b176071121518"></a>smart</strong>: This mode is not supported in this version.</li></ul>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a>Default value: <strong id="b1665258882"><a name="b1665258882"></a><a name="b1665258882"></a>fast</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  6**  Parameters for build

<a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b"></a>
<table><thead align="left"><tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_r991543695e1942e391e7bb42b7c235fe"><th class="cellrowborder" valign="top" width="21.12%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.45%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.43%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275989_row1566219017310"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_p126622017319"><a name="en-us_topic_0287275989_p126622017319"></a><a name="en-us_topic_0287275989_p126622017319"></a>-b MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_p1966215010318"><a name="en-us_topic_0287275989_p1966215010318"></a><a name="en-us_topic_0287275989_p1966215010318"></a>Specifies the mode of the standby server to be rebuilt.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_p887411245513"><a name="en-us_topic_0287275989_p887411245513"></a><a name="en-us_topic_0287275989_p887411245513"></a>Values of <strong id="b18426142475711"><a name="b18426142475711"></a><a name="b18426142475711"></a>mode</strong>:</p>
<a name="ul1159244712417"></a><a name="ul1159244712417"></a><ul id="ul1159244712417"><li><strong id="b337111404"><a name="b337111404"></a><a name="b337111404"></a>full</strong>: fully resynchronizes the data directory of the primary server using an image.</li><li><strong id="b1569717133407"><a name="b1569717133407"></a><a name="b1569717133407"></a>incremental</strong>: incrementally restores the standby server based on the differences between the data of the primary and standby servers found in Xlogs.</li></ul>
<div class="note" id="note885935410392"><a name="note885935410392"></a><a name="note885935410392"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p085915541394"><a name="p085915541394"></a><a name="p085915541394"></a>Incremental rebuilding applies to scenarios where logs are inconsistent between the primary and standby servers.</p>
</div></div>
<a name="ul72436117510"></a><a name="ul72436117510"></a><ul id="ul72436117510"><li>Incremental rebuilding does not apply to the scenario where one primary server and one standby server are deployed and the maximum HA is not enabled. In this scenario, you need to perform full rebuilding or enable the maximum HA before performing the incremental rebuilding.</li><li>The standby server cannot be restored using the incremental rebuilding method if the data file of the standby server is damaged or the data directory is lost. Restore the standby server using the incremental rebuilding method.</li></ul>
<a name="ul11271101815291"></a><a name="ul11271101815291"></a><ul id="ul11271101815291"><li><strong id="b886735815449"><a name="b886735815449"></a><a name="b886735815449"></a>auto</strong> (not specified): Selects <strong id="b138670589447"><a name="b138670589447"></a><a name="b138670589447"></a>incremental</strong> first and then <strong id="b16867958154419"><a name="b16867958154419"></a><a name="b16867958154419"></a>full</strong> after <strong id="b48671358174416"><a name="b48671358174416"></a><a name="b48671358174416"></a>incremental</strong> fails for three times.</li><li><strong id="b3669142265317"><a name="b3669142265317"></a><a name="b3669142265317"></a>standby_full</strong>: fully rebuilds a faulty standby server using the IP address and port number of the specified standby server. If this parameter is used, the <strong id="b7604102918547"><a name="b7604102918547"></a><a name="b7604102918547"></a>-C</strong> parameter must be used to specify the IP address and port number of the image.<p id="en-us_topic_0287275989_p106721111857"><a name="en-us_topic_0287275989_p106721111857"></a><a name="en-us_topic_0287275989_p106721111857"></a>Default value: <strong id="b842352706162459"><a name="b842352706162459"></a><a name="b842352706162459"></a>auto</strong></p>
</li></ul>
<div class="note" id="note548824714012"><a name="note548824714012"></a><a name="note548824714012"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p13488174715402"><a name="p13488174715402"></a><a name="p13488174715402"></a>To rebuild a cascaded standby server, add the <strong id="b159551054122212"><a name="b159551054122212"></a><a name="b159551054122212"></a>-M cascade_standby</strong> parameter.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_ra22c49a9c167449bb1a36edb91560c19"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a>-r, --recvtimeout=INTERVAL</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a>Specifies the timeout duration that the log of the standby server receives the host response during the rebuilding process.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a>Value range: an integer (second)</p>
<p id="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a><a name="en-us_topic_0287275989_en-us_topic_0237152408_en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a>Default value: <strong id="b842352706164033"><a name="b842352706164033"></a><a name="b842352706164033"></a>120s</strong></p>
<p id="en-us_topic_0287275989_p452620194414"><a name="en-us_topic_0287275989_p452620194414"></a><a name="en-us_topic_0287275989_p452620194414"></a>Note: The timeout interval needs to be set based on the service load. If the service load is heavy, the timeout interval for waiting for a response from the host needs to be prolonged. It is recommended that the timeout interval be equal to the checkpoint execution time plus 1 minute.</p>
</td>
</tr>
<tr id="en-us_topic_0287275989_row2029662921416"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_p62971529151411"><a name="en-us_topic_0287275989_p62971529151411"></a><a name="en-us_topic_0287275989_p62971529151411"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_p13298629141413"><a name="en-us_topic_0287275989_p13298629141413"></a><a name="en-us_topic_0287275989_p13298629141413"></a>Specifies whether to automatically restart after the rebuilding is complete.</p>
<p id="en-us_topic_0287275989_p858016150165"><a name="en-us_topic_0287275989_p858016150165"></a><a name="en-us_topic_0287275989_p858016150165"></a>If this parameter is specified, the system does not automatically restart.</p>
<p id="en-us_topic_0287275989_p1232613751612"><a name="en-us_topic_0287275989_p1232613751612"></a><a name="en-us_topic_0287275989_p1232613751612"></a>If no scenario is specified, the system automatically restarts. The default maximum waiting time is 60 seconds. If the database fails to be started within this period, the system displays a message indicating that the waiting is not required and the command exits. Then, you can run the <strong id="b6299175619558"><a name="b6299175619558"></a><a name="b6299175619558"></a>gs_om -t status --detail</strong> command or other commands to check whether the database is started successfully.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_p729832991415"><a name="en-us_topic_0287275989_p729832991415"></a><a name="en-us_topic_0287275989_p729832991415"></a>None</p>
</td>
</tr>
</tbody>
</table>

**Table  7**  Parameters for query

<a name="en-us_topic_0287275989_table198621411133319"></a>
<table><thead align="left"><tr id="en-us_topic_0287275989_row2086211117339"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275989_p2862181110338"><a name="en-us_topic_0287275989_p2862181110338"></a><a name="en-us_topic_0287275989_p2862181110338"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275989_p88621511133318"><a name="en-us_topic_0287275989_p88621511133318"></a><a name="en-us_topic_0287275989_p88621511133318"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275989_p1986251123315"><a name="en-us_topic_0287275989_p1986251123315"></a><a name="en-us_topic_0287275989_p1986251123315"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275989_row386211112337"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275989_p68621111193318"><a name="en-us_topic_0287275989_p68621111193318"></a><a name="en-us_topic_0287275989_p68621111193318"></a>-L</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275989_p1886241133318"><a name="en-us_topic_0287275989_p1886241133318"></a><a name="en-us_topic_0287275989_p1886241133318"></a>Queries the LSN and displays the maximum length.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275989_p1186261112338"><a name="en-us_topic_0287275989_p1186261112338"></a><a name="en-us_topic_0287275989_p1186261112338"></a>None</p>
</td>
</tr>
</tbody>
</table>

**Table  8**  Parameters for member

<a name="table1055392110383"></a>
<table><thead align="left"><tr id="row755315212385"><th class="cellrowborder" valign="top" width="24.072407240724072%" id="mcps1.2.4.1.1"><p id="p1655352143812"><a name="p1655352143812"></a><a name="p1655352143812"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="34.53345334533453%" id="mcps1.2.4.1.2"><p id="p9553202117383"><a name="p9553202117383"></a><a name="p9553202117383"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="41.394139413941396%" id="mcps1.2.4.1.3"><p id="p15553152183810"><a name="p15553152183810"></a><a name="p15553152183810"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row105111348144312"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p1351220486434"><a name="p1351220486434"></a><a name="p1351220486434"></a>--operation</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p155120484435"><a name="p155120484435"></a><a name="p155120484435"></a>Adds or deletes nodes in DCF mode in an openGauss database instance.</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><a name="ul3915143164414"></a><a name="ul3915143164414"></a><ul id="ul3915143164414"><li><strong id="b65391152164919"><a name="b65391152164919"></a><a name="b65391152164919"></a>add</strong>: adds a node to the DCF node configuration of the database instance.</li><li><strong id="b4779523504"><a name="b4779523504"></a><a name="b4779523504"></a>remove</strong>: deletes a node from the DCF node configuration of the database instance.</li></ul>
</td>
</tr>
<tr id="row055332143813"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p1553821183814"><a name="p1553821183814"></a><a name="p1553821183814"></a>-u, --nodeid</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p75531421113819"><a name="p75531421113819"></a><a name="p75531421113819"></a>Specifies a new DCF node ID.</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="p175531121183815"><a name="p175531121183815"></a><a name="p175531121183815"></a>Unsigned integer</p>
</td>
</tr>
<tr id="row19908138183919"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p199097386398"><a name="p199097386398"></a><a name="p199097386398"></a>-i, --ip</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p1490913389393"><a name="p1490913389393"></a><a name="p1490913389393"></a>Specifies an IP address used by the new node to communicate with the DCF module of the database instance.</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="p3909123816397"><a name="p3909123816397"></a><a name="p3909123816397"></a>Character string</p>
</td>
</tr>
<tr id="row3672156133914"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="p18672105611397"><a name="p18672105611397"></a><a name="p18672105611397"></a>-e, --port</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="p967211565397"><a name="p967211565397"></a><a name="p967211565397"></a>Specifies a port number used by the new node to communicate with the DCF module of the database instance.</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="p206721056183917"><a name="p206721056183917"></a><a name="p206721056183917"></a>Integer</p>
</td>
</tr>
<tr id="row28001336154217"><td class="cellrowborder" valign="top" width="24.072407240724072%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778753_a7d43e3a7e1794b4ebf93c89155eda61b"><a name="en-us_topic_0059778753_a7d43e3a7e1794b4ebf93c89155eda61b"></a><a name="en-us_topic_0059778753_a7d43e3a7e1794b4ebf93c89155eda61b"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="34.53345334533453%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778753_a03ce63a0d3c4492cb1b6b6133c49f087"><a name="en-us_topic_0059778753_a03ce63a0d3c4492cb1b6b6133c49f087"></a><a name="en-us_topic_0059778753_a03ce63a0d3c4492cb1b6b6133c49f087"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="41.394139413941396%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778753_af25a984dccd446fcb0332a6dacd533e9"><a name="en-us_topic_0059778753_af25a984dccd446fcb0332a6dacd533e9"></a><a name="en-us_topic_0059778753_af25a984dccd446fcb0332a6dacd533e9"></a>Set <strong id="b180134795015"><a name="b180134795015"></a><a name="b180134795015"></a>DATADIR</strong> as required.</p>
</td>
</tr>
</tbody>
</table>

**Table  9**  Parameters for changerole

<a name="table591372895218"></a>
<table><thead align="left"><tr id="row29141628125217"><th class="cellrowborder" valign="top" width="24.842484248424842%" id="mcps1.2.4.1.1"><p id="p13914152885210"><a name="p13914152885210"></a><a name="p13914152885210"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="41.824182418241826%" id="mcps1.2.4.1.2"><p id="p14914142811528"><a name="p14914142811528"></a><a name="p14914142811528"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1691452819522"><a name="p1691452819522"></a><a name="p1691452819522"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row4914828115214"><td class="cellrowborder" valign="top" width="24.842484248424842%" headers="mcps1.2.4.1.1 "><p id="p291482865212"><a name="p291482865212"></a><a name="p291482865212"></a>-R, --role</p>
</td>
<td class="cellrowborder" valign="top" width="41.824182418241826%" headers="mcps1.2.4.1.2 "><p id="p591418288526"><a name="p591418288526"></a><a name="p591418288526"></a>Specifies the node role in DCF mode in an openGauss database instance. This role must be used on the node whose role is primary.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul1914152813529"></a><a name="ul1914152813529"></a><ul id="ul1914152813529"><li><strong id="b48141423165115"><a name="b48141423165115"></a><a name="b48141423165115"></a>passive</strong>: passive role</li><li><strong id="b69481025195112"><a name="b69481025195112"></a><a name="b69481025195112"></a>follower</strong>: follower role</li></ul>
</td>
</tr>
<tr id="row159141280529"><td class="cellrowborder" valign="top" width="24.842484248424842%" headers="mcps1.2.4.1.1 "><p id="p179141128115215"><a name="p179141128115215"></a><a name="p179141128115215"></a>-u, --nodeid</p>
</td>
<td class="cellrowborder" valign="top" width="41.824182418241826%" headers="mcps1.2.4.1.2 "><p id="p891413285528"><a name="p891413285528"></a><a name="p891413285528"></a>Specifies a new DCF node ID.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1891492816521"><a name="p1891492816521"></a><a name="p1891492816521"></a>Unsigned integer</p>
</td>
</tr>
<tr id="row59154288524"><td class="cellrowborder" valign="top" width="24.842484248424842%" headers="mcps1.2.4.1.1 "><p id="p3748141573915"><a name="p3748141573915"></a><a name="p3748141573915"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="41.824182418241826%" headers="mcps1.2.4.1.2 "><p id="p3748015103918"><a name="p3748015103918"></a><a name="p3748015103918"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5749215113916"><a name="p5749215113916"></a><a name="p5749215113916"></a>Set <strong id="b1591065316507"><a name="b1591065316507"></a><a name="b1591065316507"></a>DATADIR</strong> as required.</p>
</td>
</tr>
</tbody>
</table>

**Table  10**  Parameters for setrunmode

<a name="table1451519418810"></a>
<table><thead align="left"><tr id="row18516194117811"><th class="cellrowborder" valign="top" width="24.512451245124513%" id="mcps1.2.4.1.1"><p id="p65163416817"><a name="p65163416817"></a><a name="p65163416817"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="37.58375837583758%" id="mcps1.2.4.1.2"><p id="p155163416818"><a name="p155163416818"></a><a name="p155163416818"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="37.90379037903791%" id="mcps1.2.4.1.3"><p id="p9516741582"><a name="p9516741582"></a><a name="p9516741582"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row115169417819"><td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.1 "><p id="p1516134119817"><a name="p1516134119817"></a><a name="p1516134119817"></a>-v, --votenum</p>
</td>
<td class="cellrowborder" valign="top" width="37.58375837583758%" headers="mcps1.2.4.1.2 "><p id="p451610415815"><a name="p451610415815"></a><a name="p451610415815"></a>Specifies the number of votes.</p>
</td>
<td class="cellrowborder" valign="top" width="37.90379037903791%" headers="mcps1.2.4.1.3 "><p id="p972411219156"><a name="p972411219156"></a><a name="p972411219156"></a>Unsigned integer</p>
</td>
</tr>
<tr id="row1451616412087"><td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.1 "><p id="p05161341488"><a name="p05161341488"></a><a name="p05161341488"></a>-x, --xmode</p>
</td>
<td class="cellrowborder" valign="top" width="37.58375837583758%" headers="mcps1.2.4.1.2 "><p id="p1151614416820"><a name="p1151614416820"></a><a name="p1151614416820"></a>Specifies the running mode (used on minority DNs).</p>
</td>
<td class="cellrowborder" valign="top" width="37.90379037903791%" headers="mcps1.2.4.1.3 "><a name="ul752115141516"></a><a name="ul752115141516"></a><ul id="ul752115141516"><li><strong id="b9258194135213"><a name="b9258194135213"></a><a name="b9258194135213"></a>minority</strong>: minority forcible startup</li><li><strong id="b16114835210"><a name="b16114835210"></a><a name="b16114835210"></a>normal</strong>: resuming</li></ul>
</td>
</tr>
<tr id="row85161941782"><td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.1 "><p id="p4441172918399"><a name="p4441172918399"></a><a name="p4441172918399"></a>[-D, --pgdata=]DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="37.58375837583758%" headers="mcps1.2.4.1.2 "><p id="p7441162923915"><a name="p7441162923915"></a><a name="p7441162923915"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="37.90379037903791%" headers="mcps1.2.4.1.3 "><p id="p17441129193914"><a name="p17441129193914"></a><a name="p17441129193914"></a>Set <strong id="b6911195335013"><a name="b6911195335013"></a><a name="b6911195335013"></a>DATADIR</strong> as required.</p>
</td>
</tr>
</tbody>
</table>
