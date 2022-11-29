# gs\_checkperf<a name="ZH-CN_TOPIC_0249632246"></a>

## 背景信息<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_section1646074516325"></a>

openGauss提供了gs\_checkperf工具来帮助对openGauss级别（主机CPU占用率、Gauss CPU占用率、I/O使用情况等）、节点级别（CPU使用情况、内存使用情况、I/O使用情况）、会话/进程级别（CPU使用情况、内存使用情况、I/O使用情况）、SSD性能（写入、读取性能）进行定期检查，让用户了解openGauss的负载情况，采取对应的改进措施。

## 前提条件<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_s32cc8b6a2bcf48ca8ad91ad38048b407"></a>

- openGauss运行状态正常且不为只读模式。

- 运行在数据库之上的业务运行正常。

  ![](public_sys-resources/icon-note.png) **说明：**

  出于安全考虑，企业版安装方式下，gaussdbToolPath目录下该工具前置完成后会自动删除。

## 注意事项<a name="zh-cn_topic_0237152332_section4694838915381"></a>

-   使用流式容灾功能时，灾备集群不支持此工具。

-   gs\_checkperf工具的监控信息依赖于pmk模式下的表的数据。如果pmk模式下的表未执行analyze操作，则可能导致gs\_checkperf工具执行失败。其报错示例信息如下。

    ```
    LOG:  Statistics in some tables or columns(pmk.pmk_snapshot.snapshot_id) are not collected.
    HINT:  Do analyze for them in order to generate optimized plan.
    ```

    此时需要登录任一数据库主节点，连接postgres数据库执行如下SQL。

    ```
    analyze pmk.pmk_configuration;
    analyze pmk.pmk_meta_data;
    analyze pmk.pmk_snapshot;
    analyze pmk.pmk_snapshot_dbnode_stat;
    analyze pmk.pmk_snapshot_datanode_stat;
    ```


## 语法<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_s48cce05cce9e43c4a17fa654f91b821a"></a>

-   检查SSD性能（root用户）

    ```
    gs_checkperf -U USER [-o OUTPUT] -i SSD [-l LOGFILE]
    ```

-   检查openGauss性能（openGauss安装用户）

    ```
    gs_checkperf [-U USER] [-o OUTPUT] [-i PMK] [--detail] [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_checkperf -? | --help
    ```

-   显示版本号信息

    ```
    gs_checkperf -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_sbbcefb85880e44fcad49c37604f46506"></a>

-   -U

    运行openGauss的用户名称。

    取值范围：运行openGauss的用户名称。

    以root用户身份执行此命令必须指定该参数。

-   -o

    指定性能检查报告输出到指定的文件。

    取值范围：指定的文件名称。

    不指定则将检查结果输出到屏幕上。

-   -i

    指定检查项编号，-i参数值不区分大小写。格式：-i PMK、-i SSD。

    取值范围：PMK、SSD。

    只有openGauss用户才能检查PMK选项。

    只有root用户才能检查SSD选项。

    如果不指定该参数，以openGauss用户身份默认检查PMK，以root用户身份默认检查SSD。

-   --detail

    显示PMK检查结果详情。

-   -l

    指定日志文件的存储路径。

    默认路径为：/var/log/gaussdb/omm/om/gs\_checkperf-YYYY-MM-DD\_hhmmss.log

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


**表 1**  性能检查项

<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_t0fe90289382441e9a0bfc128081c6125"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_re6547f7c988b473187a6a56f9914bdde"><th class="cellrowborder" valign="top" width="18.16%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3cf87909124c4070928aab84bd5e59da"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3cf87909124c4070928aab84bd5e59da"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3cf87909124c4070928aab84bd5e59da"></a>分类</p>
</th>
<th class="cellrowborder" valign="top" width="31.09%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a76080c148f6b4078b84de54590357f55"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a76080c148f6b4078b84de54590357f55"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a76080c148f6b4078b84de54590357f55"></a>性能参数项</p>
</th>
<th class="cellrowborder" valign="top" width="50.74999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a12b2c59279724454919dcd93db4934d4"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a12b2c59279724454919dcd93db4934d4"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a12b2c59279724454919dcd93db4934d4"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r028e4fde05134aa7a795a0abddd49afa"><td class="cellrowborder" rowspan="7" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a7fdbc374b65c4eb88df964ac0d215a1a"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a7fdbc374b65c4eb88df964ac0d215a1a"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a7fdbc374b65c4eb88df964ac0d215a1a"></a><span id="text12538310585"><a name="text12538310585"></a><a name="text12538310585"></a>openGauss</span>级别</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_af11c59ea7d3445eeb11c2a751936c91e"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_af11c59ea7d3445eeb11c2a751936c91e"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_af11c59ea7d3445eeb11c2a751936c91e"></a>主机CPU占用率</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_aee0eef3b3b714b3d8c1533669db9d900"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_aee0eef3b3b714b3d8c1533669db9d900"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_aee0eef3b3b714b3d8c1533669db9d900"></a>主机CPU占用率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r70bff2fb39a94f3cabad32b54864c8e5"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a47e829bd8de740879aaf4302f0b9a41e"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a47e829bd8de740879aaf4302f0b9a41e"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a47e829bd8de740879aaf4302f0b9a41e"></a>Gauss CPU占用率</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a6ca2cca9bb65405c868f516f6f6597a4"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a6ca2cca9bb65405c868f516f6f6597a4"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a6ca2cca9bb65405c868f516f6f6597a4"></a>Gauss CPU占用率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r2ee70eee8e2f4441987c0cfd5dad3953"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p972606210514"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p972606210514"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p972606210514"></a>共享内存击中率</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a67f73cb1fca04445a1b4396d5f9d5ef6"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a67f73cb1fca04445a1b4396d5f9d5ef6"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a67f73cb1fca04445a1b4396d5f9d5ef6"></a>共享内存的击中率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r9f586cd93d254f8483607283d927530b"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3bb25e33b28c4333be01da7e9b7bbae7"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3bb25e33b28c4333be01da7e9b7bbae7"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3bb25e33b28c4333be01da7e9b7bbae7"></a>内存中排序比率</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p709975710514"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p709975710514"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p709975710514"></a>内存中完成的排序所占比率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r8aa92e48384a485e9160ccb2be570dfa"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a4fef19be07fa421f8b317223562c24a2"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a4fef19be07fa421f8b317223562c24a2"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a4fef19be07fa421f8b317223562c24a2"></a>I/O使用情况</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a01cef748932c4bad8d09a49076783e4b"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a01cef748932c4bad8d09a49076783e4b"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a01cef748932c4bad8d09a49076783e4b"></a>文件读写次数和时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_rbd562318e9be4b9589b38b5ea09d3690"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p618105861493"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p618105861493"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p618105861493"></a>磁盘使用情况</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p406015301493"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p406015301493"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p406015301493"></a>文件写次数和平均写时间、最大写时间等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r6584835f31634f89bde6f0ac53c3a4fc"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p147879501496"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p147879501496"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p147879501496"></a>事务统计</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p569732861496"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p569732861496"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p569732861496"></a>当前SQL执行数和Session数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r2df560ab57c946eaa1c4be619de1f528"><td class="cellrowborder" rowspan="3" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3271a6a6d6ce4f05802a693f409c4598"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3271a6a6d6ce4f05802a693f409c4598"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3271a6a6d6ce4f05802a693f409c4598"></a>节点级别</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p515020414910"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p515020414910"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p515020414910"></a>CPU使用情况</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a058428e2b5654026afc621dd3500a984"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a058428e2b5654026afc621dd3500a984"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a058428e2b5654026afc621dd3500a984"></a>主机使用CPU情况，包括cpu busy time、cpu idle time等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r02d863fa5fe14a1c96790c46a71ed1a8"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3cc4b0c8f76c4921bd942eba8f21a0eb"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3cc4b0c8f76c4921bd942eba8f21a0eb"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a3cc4b0c8f76c4921bd942eba8f21a0eb"></a>内存使用情况</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a43a755d8d7fe4c84a59426d3f764be39"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a43a755d8d7fe4c84a59426d3f764be39"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a43a755d8d7fe4c84a59426d3f764be39"></a>主机使用内存情况，包括物理内存总量、已使用量等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r940d692764e34352b2bfba19e918f96b"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p396640414929"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p396640414929"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p396640414929"></a>I/O使用情况</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_aeb6ea70bb71d479abc118f4f74686807"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_aeb6ea70bb71d479abc118f4f74686807"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_aeb6ea70bb71d479abc118f4f74686807"></a>文件读写次数和时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_rc59834036f1d4e7992fc189f5f1a0ec3"><td class="cellrowborder" rowspan="3" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a352ef0e6114742a7a938b401caa559ff"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a352ef0e6114742a7a938b401caa559ff"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a352ef0e6114742a7a938b401caa559ff"></a>会话/进程级别</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a63fb0c0123c649deb50443de0d10f240"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a63fb0c0123c649deb50443de0d10f240"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a63fb0c0123c649deb50443de0d10f240"></a>CPU使用情况</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a5083725c98584ae79ef4705cf68f212d"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a5083725c98584ae79ef4705cf68f212d"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a5083725c98584ae79ef4705cf68f212d"></a>会话使用CPU情况，包括cpu busy time、cpu idle time等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_rb41eb0e7c0d54348bd83b4a55fed05ac"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a45e3e83ebafc4f5c97c0df1d102aad2a"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a45e3e83ebafc4f5c97c0df1d102aad2a"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a45e3e83ebafc4f5c97c0df1d102aad2a"></a>内存使用情况</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p635716114918"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p635716114918"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p635716114918"></a>会话使用内存情况，包括物理内存总量、已使用量等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r0a419614613c49b78e54607d2191d498"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a6ed31d37a3f940429de1a3b56319ec7e"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a6ed31d37a3f940429de1a3b56319ec7e"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a6ed31d37a3f940429de1a3b56319ec7e"></a>I/O使用情况</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a194ab6997cf74ef4b18102b91cbb1cf4"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a194ab6997cf74ef4b18102b91cbb1cf4"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a194ab6997cf74ef4b18102b91cbb1cf4"></a>会话共享缓冲区命中次数等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r731c21a5ff90473dae45b7040be76f4e"><td class="cellrowborder" rowspan="2" valign="top" width="18.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a975b30baaa52485fb9daf495fcb9864f"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a975b30baaa52485fb9daf495fcb9864f"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a975b30baaa52485fb9daf495fcb9864f"></a>SSD性能（只用root用户才能查看）</p>
</td>
<td class="cellrowborder" valign="top" width="31.09%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a14505fed654447119c9132aab506e14c"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a14505fed654447119c9132aab506e14c"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a14505fed654447119c9132aab506e14c"></a>写入性能</p>
</td>
<td class="cellrowborder" valign="top" width="50.74999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p426150143329"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p426150143329"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_zh-cn_topic_0058968144_p426150143329"></a>使用dd命令（flag=direct bs=8M count=2560）向每个SSD写入内容，写入每个SSD时间应在10s左右。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_r71a2998812ec4d1daee85b3fd37c592f"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a62abca5403914f60bf2f04230255fa40"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a62abca5403914f60bf2f04230255fa40"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_a62abca5403914f60bf2f04230255fa40"></a>读取性能</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152332_zh-cn_topic_0059778118_af8e718b7c550489db9f0080c94bdf226"><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_af8e718b7c550489db9f0080c94bdf226"></a><a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_af8e718b7c550489db9f0080c94bdf226"></a>使用dd命令（flag=direct bs=8M count=2560）从每个SSD读取内容，读取每个SSD时间应在7s左右。</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_scc236daf4ed8467b8f5542a998a78cae"></a>

示例一：以简要格式在屏幕上显示性能统计结果。

```
gs_checkperf -i pmk -U omm
Cluster statistics information:
    Host CPU busy time ratio                     :    1.43       %
    MPPDB CPU time % in busy time              :    1.88       %
    Shared Buffer Hit ratio                      :    99.96      %
    In-memory sort ratio                         :    100.00     %
    Physical Reads                               :    4
    Physical Writes                              :    25
    DB size                                      :    70         MB
    Total Physical writes                        :    25
    Active SQL count                             :    2
    Session count                                :    3
```

示例二：以详细格式在屏幕上显示性能统计结果。

```
gs_checkperf -i pmk -U omm --detail
Cluster statistics information:
Host CPU usage rate:
    Host total CPU time                          :    42386.667  Jiffies
    Host CPU busy time                           :    1873.333   Jiffies
    Host CPU iowait time                         :    20.000     Jiffies
    Host CPU busy time ratio                     :    4.42       %
    Host CPU iowait time ratio                   :    .05        %
MPPDB CPU usage rate:
    MPPDB CPU time % in busy time              :    19.04      %
    MPPDB CPU time % in total time             :    .84        %
Shared buffer hit rate:
    Shared Buffer Reads                          :    0
    Shared Buffer Hits                           :    24129
    Shared Buffer Hit ratio                      :    100.00     %
    In-memory sort ratio                         :    100.00     %
I/O usage:
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
    MPPDB CPU Time                             :    200        Jiffies
    Host CPU Busy Time                           :    3490       Jiffies
    Host CPU Total Time                          :    42330      Jiffies
    MPPDB CPU Time % in Busy Time              :    5.73       %
    MPPDB CPU Time % in Total Time             :    .47        %
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
    MPPDB CPU Time                             :    170
    Jiffies    Host CPU Busy Time                :    1030       Jiffies
    Host CPU Total Time                          :    42470      Jiffies
    MPPDB CPU Time % in Busy Time              :    16.50      %
    MPPDB CPU Time % in Total Time             :    .40        %
    Physical memory                              :    8231776256 Bytes
    DB Memory usage                              :    881434624  Bytes
    Shared buffer size                           :    33554432   Bytes
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
    MPPDB CPU Time                             :    220        Jiffies
    Host CPU Busy Time                           :    1100       Jiffies
    Host CPU Total Time                          :    42360      Jiffies
    MPPDB CPU Time % in Busy Time              :    20.00      %
    MPPDB CPU Time % in Total Time             :    .52        %
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

## 相关命令<a name="zh-cn_topic_0237152332_zh-cn_topic_0059778118_s192dbb9a0f6b4bae84d65bf5bdd8a796"></a>

[gs\_check](gs_check.md)，[gs\_checkos](gs_checkos.md)
