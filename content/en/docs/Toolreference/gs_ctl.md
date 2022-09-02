# gs\_ctl<a name="EN-US_TOPIC_0294748973"></a>

## Function<a name="en-us_topic_0059777628_saed7059efc5d469189c9e53a984ba786"></a>

**gs\_ctl**  is a tool provided by openGauss for controlling database services. It can be used to start or stop a database and to query the database status. It is invoked by the database management module.

-   Start, stop, and restart the openGauss node.
-   Reload the configuration files \(**postgresql.conf**  and  **pg\_hba.conf**\) without stopping the database.
-   Perform primary/standby switchover, query primary/standby status, DN rebuild the database instance, and query the rebuilding status.

## Parameter Description<a name="en-us_topic_0059777628_sfeccdff45fda4d8dacf4cefb2b8103f8"></a>

The  **gs\_ctl**  tool can use the following types of parameters:

-   **option**  parameters. For details, see  [Table 1](#en-us_topic_0059777628_t56b333c48c5e46cc93262560e23032f5).
-   Common parameters. For details, see  [Table 2](#en-us_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68).
-   **start**  and  **restart**  parameters. For details, see  [Table 3](#en-us_topic_0059777628_t6d75b31bab9540b284e45222396ae38b).
-   **stop**  and  **restart**  parameters. For details, see  [Table 4](#en-us_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a).
-   **switchover**  parameters. For details, see  [Table 5](#en-us_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31).
-   **build**  parameters. For details, see  [Table 6](#en-us_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b).
-   Parameters for  **copy**. For details, see  [Table 7](#table65592307557).

    **Table  1** **option**  parameters

    <a name="en-us_topic_0059777628_t56b333c48c5e46cc93262560e23032f5"></a>
    <table><thead align="left"><tr id="en-us_topic_0059777628_r3929a183903a469ab774fba257d687b4"><th class="cellrowborder" valign="top" width="25.3%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"><a name="en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a><a name="en-us_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="74.7%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"><a name="en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a><a name="en-us_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059777628_rae613ca56bd74177bf4cda2a394a21c3"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a910cc4c0298545049dacae33fae20638"><a name="en-us_topic_0059777628_a910cc4c0298545049dacae33fae20638"></a><a name="en-us_topic_0059777628_a910cc4c0298545049dacae33fae20638"></a>init[db]</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a2a55fa46236643359ba1fd58a6465209"><a name="en-us_topic_0059777628_a2a55fa46236643359ba1fd58a6465209"></a><a name="en-us_topic_0059777628_a2a55fa46236643359ba1fd58a6465209"></a>Initializes a DN.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r3b3072e09eb74375b7f20d0c3e927d43"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"><a name="en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a><a name="en-us_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a>start</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"><a name="en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a><a name="en-us_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a>Starts a DN.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r31c37425852d4a24a3d79984a227aec5"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"><a name="en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a><a name="en-us_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a>restart</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"><a name="en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a><a name="en-us_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a>Restarts a DN.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r515fd2102d1d4bd3bd5bfded3a737b80"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"><a name="en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a><a name="en-us_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a>build</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"><a name="en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a><a name="en-us_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a>Rebuilds the instance on the node where the instance needs to be rebuilt.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r0cd18abaee9141439b20f10f5909a508"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"><a name="en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a><a name="en-us_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a>stop</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"><a name="en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a><a name="en-us_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a>Stops a DN.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_rac69552e400344fdb7e6fd33ec6c5510"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"><a name="en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a><a name="en-us_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a>reload</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"><a name="en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a><a name="en-us_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a>Reloads the configuration files (<strong id="b1211611322396"><a name="b1211611322396"></a><a name="b1211611322396"></a>postgresql.conf</strong> and <strong id="b1711643213393"><a name="b1711643213393"></a><a name="b1711643213393"></a>pg_hba.conf</strong>).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r3608cac8fce041f2b62be02691c710fd"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"><a name="en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a><a name="en-us_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a>status</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"><a name="en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a><a name="en-us_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a>Displays the DN running status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r50cd614425ec45d2b87aece8def5e24c"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"><a name="en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a><a name="en-us_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a>failover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"><a name="en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a><a name="en-us_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a>Promotes the standby <span id="text1832314175236"><a name="text1832314175236"></a><a name="text1832314175236"></a>DN</span> to the primary <span id="text12809101815237"><a name="text12809101815237"></a><a name="text12809101815237"></a>DN</span> when the primary <span id="text94532016152313"><a name="text94532016152313"></a><a name="text94532016152313"></a>DN</span> is faulty.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_rf3ffc423f13a4943b18d24be85bcc74f"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"><a name="en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a><a name="en-us_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a>switchover</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"><a name="en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a><a name="en-us_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a>When the primary/standby <span id="text17719131902311"><a name="text17719131902311"></a><a name="text17719131902311"></a>DN</span> relationship is normal, and the standby <span id="text17031820182314"><a name="text17031820182314"></a><a name="text17031820182314"></a>DN</span> is switched to the primary <span id="text3520142102313"><a name="text3520142102313"></a><a name="text3520142102313"></a>DN</span> for maintenance purposes, data will not be lost during the switchover.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r30b3aa9baf20460baf9e2b4f5fc55af3"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"><a name="en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a><a name="en-us_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"><a name="en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a><a name="en-us_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a>Queries the status between the primary and standby <span id="text1362182217235"><a name="text1362182217235"></a><a name="text1362182217235"></a>DN</span>s.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r2ce5962d0dea41f3908b55f917778497"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"><a name="en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a><a name="en-us_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a>notify</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"><a name="en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a><a name="en-us_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a>Specifies the primary/standby <span id="text17414182312316"><a name="text17414182312316"></a><a name="text17414182312316"></a>DN</span>s after startup.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r35e8037818c84fdeafe486b78988f621"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"><a name="en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a><a name="en-us_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a>kill</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"><a name="en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a><a name="en-us_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a>Sends semaphore to a specified process.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059777628_r49b9f0118eb54e7da572b7511322b93d"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"><a name="en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a><a name="en-us_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a>querybuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"><a name="en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a><a name="en-us_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a>Checks the rebuild process of a <span id="text1410162410232"><a name="text1410162410232"></a><a name="text1410162410232"></a>DN</span>.</p>
    </td>
    </tr>
    <tr id="row2424339113818"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p13588163713385"><a name="p13588163713385"></a><a name="p13588163713385"></a>finishredo</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p10588237193811"><a name="p10588237193811"></a><a name="p10588237193811"></a>Forcibly stops redo.</p>
    <div class="caution" id="note11278185994513"><a name="note11278185994513"></a><a name="note11278185994513"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="p15278105913456"><a name="p15278105913456"></a><a name="p15278105913456"></a>This parameter is a high-risk operation. Exercise caution when performing this operation.</p>
    </div></div>
    </td>
    </tr>
    <tr id="row2937843165014"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="p13937104355015"><a name="p13937104355015"></a><a name="p13937104355015"></a>copy</p>
    </td>
    <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="p893712430509"><a name="p893712430509"></a><a name="p893712430509"></a>Copies Xlogs in the dual-center DR mode based on shared storage.</p>
    </td>
    </tr>
    </tbody>
    </table>


**Table  2**  Common parameters

<a name="en-us_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68"></a>

<table><thead align="left"><tr id="en-us_topic_0059777628_re02c46dcbf4e4581add1ede94a47195b"><th class="cellrowborder" valign="top" width="22.087791220877914%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"><a name="en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a><a name="en-us_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="30.87691230876913%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"><a name="en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a><a name="en-us_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"><a name="en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a><a name="en-us_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059777628_r6ae94b168ff1431ebeb1d02a8183345a"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"><a name="en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a><a name="en-us_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a>-D, --pgdata=DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"><a name="en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a><a name="en-us_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a>Specifies the data directory.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"><a name="en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a><a name="en-us_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a>The value of <strong id="b881523493620"><a name="b881523493620"></a><a name="b881523493620"></a>DATADIR</strong> must be valid.</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r01437712745143c7b52a1c5f2b9f7b52"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"><a name="en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a><a name="en-us_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a>-s,  --silent</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"><a name="en-us_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"></a><a name="en-us_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"></a>Prints partial prompt information only for the <strong id="b113451251155815"><a name="b113451251155815"></a><a name="b113451251155815"></a>reload</strong>, <strong id="b23451151185818"><a name="b23451151185818"></a><a name="b23451151185818"></a>restart</strong>, and <strong id="b15346145195814"><a name="b15346145195814"></a><a name="b15346145195814"></a>stop </strong>commands.</p>
<p id="p32125417441"><a name="p32125417441"></a><a name="p32125417441"></a>Prints information such as "gstl stopped, xxx". Information such as " waiting for server to shut down, server stopped" is not printed.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"><a name="en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a><a name="en-us_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r5d93022a354a4f6f863cdc9623106c56"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"><a name="en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a><a name="en-us_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a>-t, --timeout=SECS</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"><a name="en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a><a name="en-us_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a>This parameter controls the following functions:</p>
<p id="p3395265105"><a name="p3395265105"></a><a name="p3395265105"></a>Maximum seconds for waiting the completion of database startup or shutdown.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"><a name="en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a><a name="en-us_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a>Value range: integer (s)</p>
<p id="en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"><a name="en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a><a name="en-us_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a>Default value:</p>
<p id="p11881928101014"><a name="p11881928101014"></a><a name="p11881928101014"></a>Maximum seconds for waiting the completion of database startup or shutdown: 60s.</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="en-us_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-V , --version</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="en-us_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>Prints the <strong id="b86474719419"><a name="b86474719419"></a><a name="b86474719419"></a>gs_ctl</strong> version information and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="en-us_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_rf51479394e58468185408a05b4aba57e"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_ad2bee8ff41d6457598286bad003d9a3e"><a name="en-us_topic_0059777628_ad2bee8ff41d6457598286bad003d9a3e"></a><a name="en-us_topic_0059777628_ad2bee8ff41d6457598286bad003d9a3e"></a>-w</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_ab629fa09d4b64148b6442c0e3f571ba3"><a name="en-us_topic_0059777628_ab629fa09d4b64148b6442c0e3f571ba3"></a><a name="en-us_topic_0059777628_ab629fa09d4b64148b6442c0e3f571ba3"></a>Waits for the transaction to complete and then executes the database startup or shutdown operation.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a94fff9791017488bbac434e11fa08bd0"><a name="en-us_topic_0059777628_a94fff9791017488bbac434e11fa08bd0"></a><a name="en-us_topic_0059777628_a94fff9791017488bbac434e11fa08bd0"></a>Default value: If this parameter is not specified, the operation is executed until the transaction is complete.</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r1d9964cfbe7345d3b51ceb4031200de9"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_aed14dcf24bd54d45a95cac4f56efa8e9"><a name="en-us_topic_0059777628_aed14dcf24bd54d45a95cac4f56efa8e9"></a><a name="en-us_topic_0059777628_aed14dcf24bd54d45a95cac4f56efa8e9"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a2fc80be3548e48cd92300e2a10b9e872"><a name="en-us_topic_0059777628_a2fc80be3548e48cd92300e2a10b9e872"></a><a name="en-us_topic_0059777628_a2fc80be3548e48cd92300e2a10b9e872"></a>Does not wait for the transaction to complete and executes the database startup or shutdown operation forcibly.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a2de66de81c874b44a21973a3aa3ff73e"><a name="en-us_topic_0059777628_a2de66de81c874b44a21973a3aa3ff73e"></a><a name="en-us_topic_0059777628_a2de66de81c874b44a21973a3aa3ff73e"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_rda88e0e994ae424dadad636f9e78b7e5"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"><a name="en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a><a name="en-us_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"><a name="en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><a name="en-us_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><strong id="b1414373219394"><a name="b1414373219394"></a><a name="b1414373219394"></a>-M</strong> must be followed by the <strong id="b842352706162154"><a name="b842352706162154"></a><a name="b842352706162154"></a>SERVERMODE</strong> parameter, which specifies the start mode of a database upon startup.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"><a name="en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a><a name="en-us_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a>The value of <strong id="b842352706162218"><a name="b842352706162218"></a><a name="b842352706162218"></a>SERVERMODE</strong> can be one of the following three:</p>
<a name="en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><a name="en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><ul id="en-us_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"><li><strong id="b2595339184118"><a name="b2595339184118"></a><a name="b2595339184118"></a>primary</strong>: The local host starts as the primary node.</li><li><strong id="b74987427412"><a name="b74987427412"></a><a name="b74987427412"></a>standby</strong>: The local host starts as the standby node.</li><li><strong id="b12259345184115"><a name="b12259345184115"></a><a name="b12259345184115"></a>pending</strong>: The local host waits for switching to the primary or standby node.</li></ul>
</td>
</tr>
<tr id="row79165943917"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="p16108598396"><a name="p16108598396"></a><a name="p16108598396"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="p110125916399"><a name="p110125916399"></a><a name="p110125916399"></a><strong id="b5224554118"><a name="b5224554118"></a><a name="b5224554118"></a>-T</strong> is followed by a term. The term is used as the host term when the command for switching the standby server to primary is executed. During the rebuilding, hosts greater than the term will be connected.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p2106594397"><a name="p2106594397"></a><a name="p2106594397"></a>Value range: unsigned integer</p>
</td>
</tr>
<tr id="row17923638102014"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="p9925133832018"><a name="p9925133832018"></a><a name="p9925133832018"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="p6926938132013"><a name="p6926938132013"></a><a name="p6926938132013"></a>The process does not automatically start after the build is complete. It needs to be started by the invoker.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p192613382202"><a name="p192613382202"></a><a name="p192613382202"></a>-</p>
</td>
</tr>
<tr id="row1559614475201"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="p175979471202"><a name="p175979471202"></a><a name="p175979471202"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="p18236522112210"><a name="p18236522112210"></a><a name="p18236522112210"></a>Prints more debugging information.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1759784712208"><a name="p1759784712208"></a><a name="p1759784712208"></a>-</p>
</td>
</tr>
<tr id="row1373132510210"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="p1874102511213"><a name="p1874102511213"></a><a name="p1874102511213"></a>-L</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="p37417255218"><a name="p37417255218"></a><a name="p37417255218"></a>To query the validity of lsn:XX/XX and display max_lsn, run the following command:</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p137420256215"><a name="p137420256215"></a><a name="p137420256215"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r0297ef20051849eeaa6c1304ff282801"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"><a name="en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"></a><a name="en-us_topic_0059777628_a3327025f553a4190952a4672db74812c"></a>-P PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"><a name="en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a><a name="en-us_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a>Used together with the <strong id="b1862319011464"><a name="b1862319011464"></a><a name="b1862319011464"></a>-U</strong> parameter and specifies the password of the user that connects to the local database.</p>
<div class="note" id="en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"><a name="en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><a name="en-us_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"><a name="en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a><a name="en-us_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a>The <strong id="b79030784618"><a name="b79030784618"></a><a name="b79030784618"></a>-P</strong> parameter is invalid when the <strong id="b4942161074619"><a name="b4942161074619"></a><a name="b4942161074619"></a>-U</strong> parameter is omitted and the authentication method is <strong id="b20782018174612"><a name="b20782018174612"></a><a name="b20782018174612"></a>trust</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"><a name="en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a><a name="en-us_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r3f82716aafe84968a563d032cd248c85"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"><a name="en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a><a name="en-us_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a>-U USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"><a name="en-us_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"></a><a name="en-us_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"></a>Specifies the user that connects to the database. This parameter can be used only with the parameter <strong id="b1214819326391"><a name="b1214819326391"></a><a name="b1214819326391"></a>notify</strong>, <strong id="b18148133211398"><a name="b18148133211398"></a><a name="b18148133211398"></a>query</strong>, or <strong id="b9148432163916"><a name="b9148432163916"></a><a name="b9148432163916"></a>querybuild</strong>.</p>
<p id="en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"><a name="en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"></a><a name="en-us_topic_0059777628_en-us_topic_0058968123_p107010214249"></a>For domain users, use the <strong id="b17254540104618"><a name="b17254540104618"></a><a name="b17254540104618"></a>DOMAIN\</strong><em id="i1781564514465"><a name="i1781564514465"></a><a name="i1781564514465"></a>username</em> format.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"><a name="en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a><a name="en-us_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a>Value range: users exist in <span id="text148066093413"><a name="text148066093413"></a><a name="text148066093413"></a>openGauss</span>.</p>
<p id="en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"><a name="en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a><a name="en-us_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a>Default value: If this parameter is not specified, the current OS user is used.</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r4e2f2b577bcb4896bff694fd6fea6e41"><td class="cellrowborder" valign="top" width="22.087791220877914%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"><a name="en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"></a><a name="en-us_topic_0059777628_af0e38378554e49f69576073cc765f909"></a>-?, -h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="30.87691230876913%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"><a name="en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a><a name="en-us_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a>Displays help information about <strong id="b775154515110"><a name="b775154515110"></a><a name="b775154515110"></a>gs_ctl</strong> command parameters.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"><a name="en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a><a name="en-us_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  3** **start**  and  **restart**  common parameters

<a name="en-us_topic_0059777628_t6d75b31bab9540b284e45222396ae38b"></a>
<table><thead align="left"><tr id="en-us_topic_0059777628_ra5163707ec6f459aa581508ce3a64fa7"><th class="cellrowborder" valign="top" width="21.38%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"><a name="en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a><a name="en-us_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"><a name="en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a><a name="en-us_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.21%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"><a name="en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a><a name="en-us_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059777628_r42ebb4c1c5cd41b0a856b710b85a92ea"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"><a name="en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a><a name="en-us_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a>-c, --core-file</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"><a name="en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a><a name="en-us_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a>Allows the <strong id="b1372817495482"><a name="b1372817495482"></a><a name="b1372817495482"></a>gaussdb</strong> process to produce core files.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"><a name="en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a><a name="en-us_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r8f755f6ca8bb430c8bc93b6be21aee87"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"><a name="en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a><a name="en-us_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a>-l, --log=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"><a name="en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a><a name="en-us_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a>Appends the server log output to the <strong id="b1015611328398"><a name="b1015611328398"></a><a name="b1015611328398"></a>FILENAME</strong> file.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"><a name="en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a><a name="en-us_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a>The value of <strong id="b91575322395"><a name="b91575322395"></a><a name="b91575322395"></a>FILENAME</strong> is a file that the user who starts the database service has the permission to operate.</p>
<p id="en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"><a name="en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a><a name="en-us_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a>For example, the value is a file in the <strong id="b84235270611277"><a name="b84235270611277"></a><a name="b84235270611277"></a>data</strong> directory.</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_rf8dad388443e4dba914ce4e5f7a3c107"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"><a name="en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a><a name="en-us_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a>-o OPTIONS</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"><a name="en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a><a name="en-us_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a>Specifies the <strong id="b615753219393"><a name="b615753219393"></a><a name="b615753219393"></a>gaussdb</strong> command options to be transferred and executed by <span id="text076741883718"><a name="text076741883718"></a><a name="text076741883718"></a>openGauss</span>.</p>
<p id="en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"><a name="en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a><a name="en-us_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a>The options should usually be surrounded by single or double quotation marks to ensure that they are passed through as a whole.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"><a name="en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a name="en-us_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a>Parameters supported by <a href="gaussdb.md">gaussdb</a></p>
</td>
</tr>
<tr id="en-us_topic_0059777628_ra613cc55a1f04bd59cd73853322ae8ab"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"><a name="en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a><a name="en-us_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a>-p PATH-TO-POSTGRES</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"><a name="en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a><a name="en-us_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a>Specifies the location of the <strong id="b757517546491"><a name="b757517546491"></a><a name="b757517546491"></a>gaussdb</strong> executable.</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"><a name="en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"></a><a name="en-us_topic_0059777628_a28061e2923834c0c9293440118b10948"></a>By default, the <strong id="b614512355010"><a name="b614512355010"></a><a name="b614512355010"></a>gaussdb</strong> executable is taken from the same directory as <strong id="b15307694509"><a name="b15307694509"></a><a name="b15307694509"></a>gs_ctl</strong>. In most cases, it is not necessary to use this option.</p>
</td>
</tr>
</tbody>
</table>

**Table  4** **stop**  and  **restart**  common parameters

<a name="en-us_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a"></a>
<table><thead align="left"><tr id="en-us_topic_0059777628_re62fdea480ab4246aa49656499aec578"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"><a name="en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a><a name="en-us_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"><a name="en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a><a name="en-us_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"><a name="en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"></a><a name="en-us_topic_0059777628_en-us_topic_0058968123_p765714214249"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059777628_r7831cd85a10a4bb3b4d6c79f8e29eaf2"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a560da27731a646e6a636064b18132803"><a name="en-us_topic_0059777628_a560da27731a646e6a636064b18132803"></a><a name="en-us_topic_0059777628_a560da27731a646e6a636064b18132803"></a>-m, --mode=MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"><a name="en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a><a name="en-us_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a>Specifies the stop mode.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"><a name="en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"></a><a name="en-us_topic_0059777628_en-us_topic_0058968123_p742860814249"></a>Values of <strong id="b616315322397"><a name="b616315322397"></a><a name="b616315322397"></a>mode</strong>:</p>
<a name="en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><a name="en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><ul id="en-us_topic_0059777628_ue13279906755488aac7fce36fb412625"><li><strong id="b161637325394"><a name="b161637325394"></a><a name="b161637325394"></a>fast</strong>: All active transactions are rolled back and all clients are disconnected forcibly, and then the server is stopped.</li><li><strong id="b84235270694439"><a name="b84235270694439"></a><a name="b84235270694439"></a>immediate</strong>: The server is shut down forcibly and fault recovery occurs on the next startup.</li></ul>
<p id="en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"><a name="en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a><a name="en-us_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a>Default value: <strong id="b84235270694526"><a name="b84235270694526"></a><a name="b84235270694526"></a>fast</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  5** **switchover**  parameters

<a name="en-us_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31"></a>
<table><thead align="left"><tr id="en-us_topic_0059777628_re3e64b56d74d42f4914d7bb1d03aa970"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"><a name="en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a><a name="en-us_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"><a name="en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"></a><a name="en-us_topic_0059777628_en-us_topic_0058968123_p797816293442"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"><a name="en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a><a name="en-us_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row56061472019"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="p156061447614"><a name="p156061447614"></a><a name="p156061447614"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="p9607144718111"><a name="p9607144718111"></a><a name="p9607144718111"></a>All active transactions are rolled back and all clients are disconnected forcibly, and then the server is switched and no checkpoint is performed.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p96072471214"><a name="p96072471214"></a><a name="p96072471214"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0059777628_r9a3a522b0caf495da096a1ff8ba20aee"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"><a name="en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a><a name="en-us_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a>-m SWITCHOVER-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"><a name="en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a><a name="en-us_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a>Specifies the switchover mode when the primary/standby instances are normal.</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"><a name="en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a><a name="en-us_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a>Values of <strong id="b21691320392"><a name="b21691320392"></a><a name="b21691320392"></a>mode</strong>:</p>
<a name="en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><a name="en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><ul id="en-us_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"><li><strong id="b317023263918"><a name="b317023263918"></a><a name="b317023263918"></a>smart</strong>: The cluster is switched over after all the clients are disconnected. If the server is in hot standby, recovery and replication flows will be terminated once all clients have been disconnected.<p id="p204016149333"><a name="p204016149333"></a><a name="p204016149333"></a>Note: In the cluster environment, the cluster management connection and customer service connection make it difficult to execute the smart mode. Therefore, this mode is discarded in this version.</p>
</li><li><strong id="b9170032123913"><a name="b9170032123913"></a><a name="b9170032123913"></a>fast</strong>: All active transactions are rolled back and all clients are disconnected forcibly, and then the server is switched.</li></ul>
<p id="en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"><a name="en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a><a name="en-us_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a>Default value: <strong id="b1361945689"><a name="b1361945689"></a><a name="b1361945689"></a>fast</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  6** **build**  parameters

<a name="en-us_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b"></a>
<table><thead align="left"><tr id="en-us_topic_0059777628_r991543695e1942e391e7bb42b7c235fe"><th class="cellrowborder" valign="top" width="21.12%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"><a name="en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"></a><a name="en-us_topic_0059777628_a98babff2b333444a8845163c25408eac"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="31.45%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"><a name="en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a><a name="en-us_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.43%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"><a name="en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a><a name="en-us_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059777628_r501a80d7ac254b969d0513831956de03"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_aacd507d18d3e40328ffc2b47c2a4895b"><a name="en-us_topic_0059777628_aacd507d18d3e40328ffc2b47c2a4895b"></a><a name="en-us_topic_0059777628_aacd507d18d3e40328ffc2b47c2a4895b"></a>-b, --mode=MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_en-us_topic_0058968123_p711896195255"><a name="en-us_topic_0059777628_en-us_topic_0058968123_p711896195255"></a><a name="en-us_topic_0059777628_en-us_topic_0058968123_p711896195255"></a>Specifies the rebuild mode of a <span id="text8161201645214"><a name="text8161201645214"></a><a name="text8161201645214"></a>DN standby server</span>.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a84aa453a36684f2a9ccf0235593c6b5e"><a name="en-us_topic_0059777628_a84aa453a36684f2a9ccf0235593c6b5e"></a><a name="en-us_topic_0059777628_a84aa453a36684f2a9ccf0235593c6b5e"></a>Values of <strong id="b117443213397"><a name="b117443213397"></a><a name="b117443213397"></a>mode</strong>:</p>
<a name="en-us_topic_0059777628_u469f33da2f8c41cdaeee8bef59bde778"></a><a name="en-us_topic_0059777628_u469f33da2f8c41cdaeee8bef59bde778"></a><ul id="en-us_topic_0059777628_u469f33da2f8c41cdaeee8bef59bde778"><li><strong id="b84235270695611"><a name="b84235270695611"></a><a name="b84235270695611"></a>full</strong>: fully resynchronizes the data directory of the primary <span id="text7129133232312"><a name="text7129133232312"></a><a name="text7129133232312"></a>DN</span> using an image.</li><li><strong id="b84235270695620"><a name="b84235270695620"></a><a name="b84235270695620"></a>incremental</strong>: incrementally restores the standby <span id="text19941835102316"><a name="text19941835102316"></a><a name="text19941835102316"></a>DN</span> based on the differences between the data of primary and standby <span id="text12237633132310"><a name="text12237633132310"></a><a name="text12237633132310"></a>DN</span>s found in Xlogs.<div class="warning" id="en-us_topic_0059777628_n152c48123e374a95ae8bb47a336519e7"><a name="en-us_topic_0059777628_n152c48123e374a95ae8bb47a336519e7"></a><a name="en-us_topic_0059777628_n152c48123e374a95ae8bb47a336519e7"></a><span class="warningtitle"> WARNING: </span><div class="warningbody"><a name="en-us_topic_0059777628_ued3f74532e534b8bb3c4db2a8756d588"></a><a name="en-us_topic_0059777628_ued3f74532e534b8bb3c4db2a8756d588"></a><ul id="en-us_topic_0059777628_ued3f74532e534b8bb3c4db2a8756d588"><li>Incremental rebuild is used for active-active clusters with inconsistent primary/standby logs.</li><li>If damaged data files and lost data directories of a standby DN cannot be restored by incremental rebuild, full rebuild can be used to restore the standby DN.</li></ul>
</div></div>
</li><li><strong id="b12573184514382"><a name="b12573184514382"></a><a name="b12573184514382"></a>auto </strong>(not specified): selects <strong id="b13579945203811"><a name="b13579945203811"></a><a name="b13579945203811"></a>incremental</strong> first and then <strong id="b557994519381"><a name="b557994519381"></a><a name="b557994519381"></a>Full</strong> after <strong id="b958018456388"><a name="b958018456388"></a><a name="b958018456388"></a>incremental</strong> fails for three times.</li><li><strong id="b197551615143812"><a name="b197551615143812"></a><a name="b197551615143812"></a>standby_full</strong>: uses the standby server to rebuild the standby server or uses the first standby server in a DR scenario to rebuild the faulty standby server in the DR database instance.</li><li><strong id="b857607154020"><a name="b857607154020"></a><a name="b857607154020"></a>copy_secure_files</strong>: In the streaming DR scenario, obtains the content in the <strong id="b8576157144012"><a name="b8576157144012"></a><a name="b8576157144012"></a>gs_secure_files</strong> directory in the data directory of a specified node.</li><li><strong id="b1379098401"><a name="b1379098401"></a><a name="b1379098401"></a>copy_upgrade_file</strong>: obtains specified files required for the upgrade on a specified node in the Dorado DR scenario.</li><li><strong id="b146151418407"><a name="b146151418407"></a><a name="b146151418407"></a>cross_cluster_full</strong>: performs cross-cluster full build based on shared storage in the intra-city dual-center scenario.</li><li><strong id="b179034316407"><a name="b179034316407"></a><a name="b179034316407"></a>cross_cluster_incremental</strong>: performs cross-cluster incremental build based on shared storage in the same-city dual-center scenario.</li></ul>
<p id="en-us_topic_0059777628_a786e85419cc24ddbbdd68e0ae53f18e4"><a name="en-us_topic_0059777628_a786e85419cc24ddbbdd68e0ae53f18e4"></a><a name="en-us_topic_0059777628_a786e85419cc24ddbbdd68e0ae53f18e4"></a>Default value: <strong id="b842352706162459"><a name="b842352706162459"></a><a name="b842352706162459"></a>auto</strong></p>
</td>
</tr>
<tr id="en-us_topic_0059777628_ra22c49a9c167449bb1a36edb91560c19"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"><a name="en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a><a name="en-us_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a>-r, --recvtimeout=INTERVAL</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"><a name="en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a><a name="en-us_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a>Specifies the timeout duration that a standby DN waits for receiving logs synchronized from the primary DN.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"><a name="en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a><a name="en-us_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a>Value range: integer (s)</p>
<p id="en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"><a name="en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a><a name="en-us_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a>Default value: <strong id="b842352706164033"><a name="b842352706164033"></a><a name="b842352706164033"></a>120s</strong></p>
</td>
</tr>
<tr id="row1611613482910"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="p1117134811913"><a name="p1117134811913"></a><a name="p1117134811913"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="p1411734817911"><a name="p1411734817911"></a><a name="p1411734817911"></a>Prints more build process information.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p13117148397"><a name="p13117148397"></a><a name="p13117148397"></a>-</p>
</td>
</tr>
<tr id="row168586599123"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="p118591859191216"><a name="p118591859191216"></a><a name="p118591859191216"></a>-C CONNECTOR</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="p785955931215"><a name="p785955931215"></a><a name="p785955931215"></a>Specifies the connection string used for connecting to the source DN to rebuild a DN on the current node. Only the connection from the standby server to the standby server is supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p201453514356"><a name="p201453514356"></a><a name="p201453514356"></a>The connection string contains the IP address and port number of the DN to be rebuilt on the current node and those of the source DN. Its format is as follows:</p>
<pre class="screen" id="screen1930864312338"><a name="screen1930864312338"></a><a name="screen1930864312338"></a>'localhost=Local DN IP localport=Local DN Port+1 remotehost=DN IP remoteport=DN Port+1'</pre>
</td>
</tr>
</tbody>
</table>

**Table  7**  copy parameters

<a name="table65592307557"></a>
<table><thead align="left"><tr id="row18559830175518"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p75651923175612"><a name="p75651923175612"></a><a name="p75651923175612"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p145651923155610"><a name="p145651923155610"></a><a name="p145651923155610"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p6565102320562"><a name="p6565102320562"></a><a name="p6565102320562"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row155591830125513"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p055910304553"><a name="p055910304553"></a><a name="p055910304553"></a>-Q</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18961111214571"><a name="p18961111214571"></a><a name="p18961111214571"></a>Specifies the Xlog copy direction.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul5782621105711"></a><a name="ul5782621105711"></a><ul id="ul5782621105711"><li><strong id="b12211534310"><a name="b12211534310"></a><a name="b12211534310"></a>copy_from_local</strong>: copies data from the local host to the shared storage.</li><li><strong id="b538292264316"><a name="b538292264316"></a><a name="b538292264316"></a>copy_from_share</strong>: copies data from a shared storage device to a local storage device.</li><li><strong id="b13430335144319"><a name="b13430335144319"></a><a name="b13430335144319"></a>force_copy_from_local</strong>: forcibly copies data from the local host to the shared storage.</li></ul>
</td>
</tr>
</tbody>
</table>
