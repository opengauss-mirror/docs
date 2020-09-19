# gs\_ctl<a name="EN-US_TOPIC_0249632282"></a>

## Background<a name="en-us_topic_0237152408_en-us_topic_0059777628_saed7059efc5d469189c9e53a984ba786"></a>

**gs\_ctl**, provided by openGauss, is used to control the database service. It can be used to start and stop the database service and to query the database status.  **gs\_ctl**  is used by the openGauss management module.

**gs\_ctl**  is executed by OS user  **omm**.

-   Start, stop, and restart the openGauss node.
-   Reload the configuration files \(**postgresql.conf**  and  **pg\_hba.conf**\) without stopping the database.
-   Perform primary/standby switchover, query primary/standby status, rebuild the database instance, and query the rebuilding status.

## Description<a name="en-us_topic_0237152408_en-us_topic_0059777628_sfeccdff45fda4d8dacf4cefb2b8103f8"></a>

The  **gs\_ctl**  tool can use the following types of parameters:

-   Parameters for option. For details, see  [Table 1](#en-us_topic_0237152408_en-us_topic_0059777628_t56b333c48c5e46cc93262560e23032f5).
-   Common parameters. For details, see  [Table 2](#en-us_topic_0237152408_en-us_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68).
-   Parameters for  **start**  and  **restart**. For details, see  [Table 3](#en-us_topic_0237152408_en-us_topic_0059777628_t6d75b31bab9540b284e45222396ae38b).
-   Parameters for  **stop**  and  **restart**. For details, see  [Table 4](#en-us_topic_0237152408_en-us_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a).
-   Parameters for  **switchover**. For details, see  [Table 5](#en-us_topic_0237152408_en-us_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31).
-   Parameters for  **build**. For details, see  [Table 6](#en-us_topic_0237152408_en-us_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b).
-   restore parameter. For details, see  [Table 7](#en-us_topic_0237152408_table19356432161112).

    **Table  1**  option parameters

    <a name="en-us_topic_0237152408_en-us_topic_0059777628_t56b333c48c5e46cc93262560e23032f5"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152408_en-us_topic_0059777628_r3929a183903a469ab774fba257d687b4"><th class="cellrowborder" valign="top" width="25.3%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152408_en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"><a name="en-us_topic_0237152408_en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="74.7%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a>Description</p>
    </th>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r3b3072e09eb74375b7f20d0c3e927d43"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a>start</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a>Starts the database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r31c37425852d4a24a3d79984a227aec5"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a>restart</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a>Restarts the database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r515fd2102d1d4bd3bd5bfded3a737b80"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a>build</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a>Rebuilds the standby instance on the host.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r0cd18abaee9141439b20f10f5909a508"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"><a name="en-us_topic_0237152408_en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a>stop</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a>Stops the database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_rac69552e400344fdb7e6fd33ec6c5510"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a>reload</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"><a name="en-us_topic_0237152408_en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a>Reloads the configuration files (<strong id="b135871748195315"><a name="b135871748195315"></a><a name="b135871748195315"></a>postgresql.conf</strong> and <strong id="b25929485536"><a name="b25929485536"></a><a name="b25929485536"></a>pg_hba.conf</strong>).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r3608cac8fce041f2b62be02691c710fd"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"><a name="en-us_topic_0237152408_en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a>status</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a>Displays the running status of the database services</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r268eda7d24344929b4fbe045815c4f75"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"></a>promote</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"></a>Exits the faulty restoration when the running standby server is instructed in the specified data directory, and starts to perform the read and write operations.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r50cd614425ec45d2b87aece8def5e24c"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a>failover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a>When the primary server is abnormal, switches the standby server to a primary server.</p>
    <p id="p0444145125912"><a name="p0444145125912"></a><a name="p0444145125912"></a>After the failover is successful, you need to run the <strong id="b15486210115818"><a name="b15486210115818"></a><a name="b15486210115818"></a>gs_om -t refreshconf</strong> command to record information about the current primary and standby servers.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_rf3ffc423f13a4943b18d24be85bcc74f"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a>switchover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a>When the primary/standby server relationship is normal, switches the standby server is to primary for maintenance purposes. Data will not be lost during the switchover.</p>
    <p id="p4248133043914"><a name="p4248133043914"></a><a name="p4248133043914"></a>You must run the <strong id="b4417814597"><a name="b4417814597"></a><a name="b4417814597"></a>switchover</strong> command on the standy node to be switched to the primary node.</p>
    <p id="p4248133043914"><a name="p4248133043914"></a><a name="p4248133043914"></a>After the switchover is successful, you need to run the <strong id="b4417814597"><a name="b4417814597"></a><a name="b4417814597"></a>gs_om -t refreshconf</strong> command to record information about the current primary and standby servers.</p>
    <p id="p1701525967"><a name="p1701525967"></a><a name="p1701525967"></a>After the <strong id="b670212411551"><a name="b670212411551"></a><a name="b670212411551"></a>switchover</strong> command is executed, if a timeout message is returned, the execution status of the background process may be uncertain. </p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r30b3aa9baf20460baf9e2b4f5fc55af3"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a>Queries the status between the primary and standby server.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r2ce5962d0dea41f3908b55f917778497"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a>notify</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a>Specifies the primary/standby relationship after startup.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r35e8037818c84fdeafe486b78988f621"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a>kill</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a>Sends semaphore to a specified process.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_en-us_topic_0059777628_r49b9f0118eb54e7da572b7511322b93d"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"><a name="en-us_topic_0237152408_en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a>querybuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a>Checks the rebuilding process of the database</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152408_row181087439152"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152408_p1811113439157"><a name="en-us_topic_0237152408_p1811113439157"></a><a name="en-us_topic_0237152408_p1811113439157"></a>restore</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152408_p101113431156"><a name="en-us_topic_0237152408_p101113431156"></a><a name="en-us_topic_0237152408_p101113431156"></a>Restores an incremental backup set. The restoration can be performed only when the gaussdb process is stopped.</p>
    </td>
    </tr>
    </tbody>
    </table>

**Table  2**  Common parameters

<a name="en-us_topic_0237152408_en-us_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68"></a>
<table><thead align="left"><tr id="en-us_topic_0237152408_en-us_topic_0059777628_re02c46dcbf4e4581add1ede94a47195b"><th class="cellrowborder" valign="top" width="22.087791220877914%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="30.87691230876913%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152408_en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"><a name="en-us_topic_0237152408_en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152408_en-us_topic_0059777628_r6ae94b168ff1431ebeb1d02a8183345a"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a>-D, --pgdata=DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a>The value of <strong id="b141471111181315"><a name="b141471111181315"></a><a name="b141471111181315"></a>DATADIR</strong> must be a valid data directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_r01437712745143c7b52a1c5f2b9f7b52"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a>-s,  --silent</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"></a>Prints errors without references.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_r5d93022a354a4f6f863cdc9623106c56"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a>-t, --timeout=SECS</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a>This parameter controls the following functions:</p>
<a name="en-us_topic_0237152408_en-us_topic_0059777628_uee72e2dec17948c5bf1eeac232aee766"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_uee72e2dec17948c5bf1eeac232aee766"></a><ul id="en-us_topic_0237152408_en-us_topic_0059777628_uee72e2dec17948c5bf1eeac232aee766"><li>Maximum seconds for waiting the completion of database startup or shutdown.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a>Value range: an integer (second).</p>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a>Default</p>
<a name="en-us_topic_0237152408_en-us_topic_0059777628_u0dd711a9df8d498eb043e749fb4f2bd6"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_u0dd711a9df8d498eb043e749fb4f2bd6"></a><ul id="en-us_topic_0237152408_en-us_topic_0059777628_u0dd711a9df8d498eb043e749fb4f2bd6"><li>Maximum seconds for waiting the completion of database startup or shutdown: 60s.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-V , --version</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="en-us_topic_0237152408_en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>Prints the <strong id="b1993062615212"><a name="b1993062615212"></a><a name="b1993062615212"></a>gs_ctl</strong> version and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a2de66de81c874b44a21973a3aa3ff73e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2de66de81c874b44a21973a3aa3ff73e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2de66de81c874b44a21973a3aa3ff73e"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_rda88e0e994ae424dadad636f9e78b7e5"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><strong id="b357823816237"><a name="b357823816237"></a><a name="b357823816237"></a>-M</strong> must be followed by the <strong id="b842352706162154"><a name="b842352706162154"></a><a name="b842352706162154"></a>SERVERMODE</strong> parameter, which specifies the startup mode of a database upon startup.</p>
<div class="note" id="note20655112713015"><a name="note20655112713015"></a><a name="note20655112713015"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p1865619273017"><a name="p1865619273017"></a><a name="p1865619273017"></a>The <strong id="b1532115213238"><a name="b1532115213238"></a><a name="b1532115213238"></a>-M</strong> parameter is not supported when the current host is in the single-node mode or one-primary-and-zero standby mode.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a>Value range of <strong id="b842352706162218"><a name="b842352706162218"></a><a name="b842352706162218"></a>SERVERMODE</strong>:</p>
<a name="en-us_topic_0237152408_en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><ul id="en-us_topic_0237152408_en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"><li><strong id="b42793387295"><a name="b42793387295"></a><a name="b42793387295"></a>primary</strong>: The server starts in primary mode.</li><li><strong id="b15503105314296"><a name="b15503105314296"></a><a name="b15503105314296"></a>standby</strong>: The server starts in standby mode.</li><li><strong id="b1538718114506"><a name="b1538718114506"></a><a name="b1538718114506"></a>pending</strong>: The server is in pending mode to be promoted to a primary server or a standby server.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152408_row79165943917"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_p16108598396"><a name="en-us_topic_0237152408_p16108598396"></a><a name="en-us_topic_0237152408_p16108598396"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_p110125916399"><a name="en-us_topic_0237152408_p110125916399"></a><a name="en-us_topic_0237152408_p110125916399"></a><strong id="b4513204414338"><a name="b4513204414338"></a><a name="b4513204414338"></a>-T</strong> is followed by a term. The term is used as the host term when the command for switching the standby server to primary is executed. During the rebuilding, hosts greater than the term will be connected for rebuilding.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_p2106594397"><a name="en-us_topic_0237152408_p2106594397"></a><a name="en-us_topic_0237152408_p2106594397"></a>Value range of term: an unsigned integer.</p>
</td>
</tr>
<tr id="row89351326193410"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="p19935152683419"><a name="p19935152683419"></a><a name="p19935152683419"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="p19935726153414"><a name="p19935726153414"></a><a name="p19935726153414"></a>Displays more debugging information.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1493592615345"><a name="p1493592615345"></a><a name="p1493592615345"></a>None</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_r0297ef20051849eeaa6c1304ff282801"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"></a>-P PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a>Specifies the password of the user connecting to the local database. It is used in conjunction with the <strong id="b842352706164446"><a name="b842352706164446"></a><a name="b842352706164446"></a>-U</strong> parameter.</p>
<div class="note" id="en-us_topic_0237152408_en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237152408_en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a>When <strong id="b842352706164518"><a name="b842352706164518"></a><a name="b842352706164518"></a>-U</strong> is not specified, and the authentication mode is <strong id="b10590173603818"><a name="b10590173603818"></a><a name="b10590173603818"></a>trust</strong>, the setting of the <strong id="b159543617382"><a name="b159543617382"></a><a name="b159543617382"></a>-P</strong> parameter is invalid.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_r3f82716aafe84968a563d032cd248c85"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a>-U USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"></a>Specifies the user that connects to the database. This parameter can be used only in conjunction with the parameter <strong>notify</strong>, <strong>query</strong>, <strong>failover</strong>, <strong>switchover</strong> or <strong>querybuild</strong>.</p>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"></a>For domain users, use the DOMAIN\username format.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a>Value range: users existing in openGauss.</p>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a>Default value: If this parameter is not specified, the current OS user is used.</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_r4e2f2b577bcb4896bff694fd6fea6e41"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"><a name="en-us_topic_0237152408_en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a>Displays the help information related to the <strong id="b84235270616504"><a name="b84235270616504"></a><a name="b84235270616504"></a>gs_ctl</strong> command line parameters.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"><a name="en-us_topic_0237152408_en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Common parameters for  **start**  and  **restart**

<a name="en-us_topic_0237152408_en-us_topic_0059777628_t6d75b31bab9540b284e45222396ae38b"></a>
<table><thead align="left"><tr id="en-us_topic_0237152408_en-us_topic_0059777628_ra5163707ec6f459aa581508ce3a64fa7"><th class="cellrowborder" valign="top" width="21.38%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152408_en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152408_en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.21%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152408_en-us_topic_0059777628_r42ebb4c1c5cd41b0a856b710b85a92ea"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a>-c, --core-file</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a>Allows the gaussdb process to produce core files.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_r8f755f6ca8bb430c8bc93b6be21aee87"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"><a name="en-us_topic_0237152408_en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a>-l, --log=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a>Appends the server log output to the <strong id="b10259333104419"><a name="b10259333104419"></a><a name="b10259333104419"></a>FILENAME</strong> file.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a>The value of <strong>FILENAME</strong> is a file that the user who starts the database service has the permission to operate.</p>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a>For example, the value is a file in the <strong id="b84235270611277"><a name="b84235270611277"></a><a name="b84235270611277"></a>data</strong> directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_rf8dad388443e4dba914ce4e5f7a3c107"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a>-o OPTIONS</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a>Specifies options to be passed from openGauss directly to the <strong id="b16736125466"><a name="b16736125466"></a><a name="b16736125466"></a>gaussdb</strong> command.</p>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a>The options should usually be surrounded by single or double quotation marks to ensure that they are transferred as a whole.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a>Parameters supported in <a href="gaussdb.md">gaussdb</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_ra613cc55a1f04bd59cd73853322ae8ab"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"><a name="en-us_topic_0237152408_en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a>-p PATH-TO-POSTGRES</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"><a name="en-us_topic_0237152408_en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a>Specifies the location of the executable file of the gaussdb.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"></a>By default, the gaussdb executable file is taken from the same directory as <strong id="b842352706152632"><a name="b842352706152632"></a><a name="b842352706152632"></a>gs_ctl</strong>.</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Common parameters for  **stop**  and  **restart**

<a name="en-us_topic_0237152408_en-us_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a"></a>
<table><thead align="left"><tr id="en-us_topic_0237152408_en-us_topic_0059777628_re62fdea480ab4246aa49656499aec578"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152408_en-us_topic_0059777628_r7831cd85a10a4bb3b4d6c79f8e29eaf2"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a560da27731a646e6a636064b18132803"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a560da27731a646e6a636064b18132803"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a560da27731a646e6a636064b18132803"></a>-m, --mode=MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a>Specifies the disabled mode.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"></a>Values of <strong>mode</strong>:</p>
<a name="en-us_topic_0237152408_en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><ul id="en-us_topic_0237152408_en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"><li><strong id="b6248135304812"><a name="b6248135304812"></a><a name="b6248135304812"></a>smart</strong>: The host is immediately disconnected, which is the same as <strong id="b19712175018486"><a name="b19712175018486"></a><a name="b19712175018486"></a>fast</strong>.</li><li><strong>fast</strong>: All active transactions are rolled back and all clients are disconnected forcibly, and then the server is disabled.</li><li><strong id="b84235270694439"><a name="b84235270694439"></a><a name="b84235270694439"></a>immediate</strong>: The server is shut down forcibly and fault recovery occurs on the next startup.</li></ul>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"><a name="en-us_topic_0237152408_en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a>Default value: <strong id="b84235270694526"><a name="b84235270694526"></a><a name="b84235270694526"></a>fast</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  5** **switchover**  parameters

<a name="en-us_topic_0237152408_en-us_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31"></a>
<table><thead align="left"><tr id="en-us_topic_0237152408_en-us_topic_0059777628_re3e64b56d74d42f4914d7bb1d03aa970"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152408_en-us_topic_0059777628_r9a3a522b0caf495da096a1ff8ba20aee"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a>-m SWITCHOVER-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a>Specifies the HA switchover mode when the primary/standby instances are normal.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a>Values of <strong>mode</strong>:</p>
<a name="en-us_topic_0237152408_en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><ul id="en-us_topic_0237152408_en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"><li><strong id="b1316717120488"><a name="b1316717120488"></a><a name="b1316717120488"></a>fast</strong>: All active transactions are rolled back and all clients are disconnected forcibly, and then the server is switched.</li><li><strong id="b5708191713265"><a name="b5708191713265"></a><a name="b5708191713265"></a>smart</strong>: This mode is not supported in this version.</li><li><strong id="b1558152112710"><a name="b1558152112710"></a><a name="b1558152112710"></a>immediate</strong>: This mode is not supported in this version.</li></ul>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"><a name="en-us_topic_0237152408_en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a>Default value: <strong id="b1451393954"><a name="b1451393954"></a><a name="b1451393954"></a>fast</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  6** **build**  parameters

<a name="en-us_topic_0237152408_en-us_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b"></a>
<table><thead align="left"><tr id="en-us_topic_0237152408_en-us_topic_0059777628_r991543695e1942e391e7bb42b7c235fe"><th class="cellrowborder" valign="top" width="21.12%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.45%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.43%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152408_en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row1566219017310"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="p126622017319"><a name="p126622017319"></a><a name="p126622017319"></a>-b MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="p1966215010318"><a name="p1966215010318"></a><a name="p1966215010318"></a>Specifies the mode of the standby server on the DN to be recreated.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p887411245513"><a name="p887411245513"></a><a name="p887411245513"></a>Values of <strong>mode</strong>:</p>
<p id="p13270172819514"><a name="p13270172819514"></a><a name="p13270172819514"></a><strong id="b84235270695611"><a name="b84235270695611"></a><a name="b84235270695611"></a>full</strong>: Fully resynchronizes the data directory of the primary server using an image.</p>
<p id="p466319111169"><a name="p466319111169"></a><a name="p466319111169"></a><strong id="b84235270695620"><a name="b84235270695620"></a><a name="b84235270695620"></a>incremental</strong>: Incrementally restores the standby server based on the differences between the data of primary and standby DNs found in Xlogs.</p>
<p id="p15978143115518"><a name="p15978143115518"></a><a name="p15978143115518"></a>Note that incremental rebuilding is used for scenarios of the primary-standby HA inconsistent logs.</p>
<p id="p643515574347"><a name="p643515574347"></a><a name="p643515574347"></a>Incremental rebuilding does not apply to the scenario where one primary and one standby are deployed and the maximum HA is not enabled. In this scenario, you need to perform full rebuilding or enable the maximum HA before performing the incremental rebuilding.</p>
<p id="p105751436553"><a name="p105751436553"></a><a name="p105751436553"></a>The server cannot be restored using the incremental rebuilding method if the standby server data file is damaged or the data directory is lost. Restore the standby server using the incremental rebuilding method.</p>
<p id="p381916183516"><a name="p381916183516"></a><a name="p381916183516"></a>auto (not specified): Select <strong id="b19492143217524"><a name="b19492143217524"></a><a name="b19492143217524"></a>incremental</strong> first and then <strong id="b194997326524"><a name="b194997326524"></a><a name="b194997326524"></a>full</strong> after <strong id="b1850213295213"><a name="b1850213295213"></a><a name="b1850213295213"></a>incremental</strong> fails for three times.</p>
<p id="p106721111857"><a name="p106721111857"></a><a name="p106721111857"></a>Default value: <strong id="b842352706162459"><a name="b842352706162459"></a><a name="b842352706162459"></a>auto</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237152408_en-us_topic_0059777628_ra22c49a9c167449bb1a36edb91560c19"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a>-r, --recvtimeout=INTERVAL</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"><a name="en-us_topic_0237152408_en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a>Specifies the timeout duration that the log of the standby server receives the host response during the rebuilding process.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a>Value range: an integer (second).</p>
<p id="en-us_topic_0237152408_en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a><a name="en-us_topic_0237152408_en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a>Default value: <strong id="b842352706164033"><a name="b842352706164033"></a><a name="b842352706164033"></a>120s</strong></p>
</td>
</tr>
<tr id="row2029662921416"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="p62971529151411"><a name="p62971529151411"></a><a name="p62971529151411"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="p13298629141413"><a name="p13298629141413"></a><a name="p13298629141413"></a>Specifies whether to automatically restart after the rebuilding is complete.</p>
<p id="p858016150165"><a name="p858016150165"></a><a name="p858016150165"></a>If this parameter is specified, the system does not automatically restart.</p>
<p id="p1232613751612"><a name="p1232613751612"></a><a name="p1232613751612"></a>If this parameter is not specified, the system automatically restarts.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p729832991415"><a name="p729832991415"></a><a name="p729832991415"></a>None</p>
</td>
</tr>
</tbody>
</table>

**Table  7** **restore**  parameters

<a name="en-us_topic_0237152408_table19356432161112"></a>
<table><thead align="left"><tr id="en-us_topic_0237152408_row7357193212113"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152408_p1828211549118"><a name="en-us_topic_0237152408_p1828211549118"></a><a name="en-us_topic_0237152408_p1828211549118"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152408_p1928210546117"><a name="en-us_topic_0237152408_p1928210546117"></a><a name="en-us_topic_0237152408_p1928210546117"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152408_p15282175461116"><a name="en-us_topic_0237152408_p15282175461116"></a><a name="en-us_topic_0237152408_p15282175461116"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152408_row9358123210116"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152408_p152821543115"><a name="en-us_topic_0237152408_p152821543115"></a><a name="en-us_topic_0237152408_p152821543115"></a>--remove-backup</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152408_p62831654121117"><a name="en-us_topic_0237152408_p62831654121117"></a><a name="en-us_topic_0237152408_p62831654121117"></a>Specifies whether to delete an incremental backup set.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152408_p16283115418114"><a name="en-us_topic_0237152408_p16283115418114"></a><a name="en-us_topic_0237152408_p16283115418114"></a>None</p>
</td>
</tr>
</tbody>
</table>

**Table  8** **query**  parameters

<a name="table198621411133319"></a>
<table><thead align="left"><tr id="row2086211117339"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p2862181110338"><a name="p2862181110338"></a><a name="p2862181110338"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p88621511133318"><a name="p88621511133318"></a><a name="p88621511133318"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1986251123315"><a name="p1986251123315"></a><a name="p1986251123315"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row386211112337"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p68621111193318"><a name="p68621111193318"></a><a name="p68621111193318"></a>-L</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1886241133318"><a name="p1886241133318"></a><a name="p1886241133318"></a>Queries the LSN and displays the maximum length.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1186261112338"><a name="p1186261112338"></a><a name="p1186261112338"></a>None</p>
</td>
</tr>
</tbody>
</table>

