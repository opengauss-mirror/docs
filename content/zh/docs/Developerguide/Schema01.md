# Schema<a name="ZH-CN_TOPIC_0000001190922647"></a>

openGauss的Schema如下表所示。

**表 1**  openGauss支持的Schema

<a name="table167371825175015"></a>
<table><thead align="left"><tr id="row1737325195017"><th class="cellrowborder" valign="top" width="18.18%" id="mcps1.2.3.1.1"><p id="p2737152535018"><a name="p2737152535018"></a><a name="p2737152535018"></a>Schema名称</p>
</th>
<th class="cellrowborder" valign="top" width="81.82000000000001%" id="mcps1.2.3.1.2"><p id="p273712517502"><a name="p273712517502"></a><a name="p273712517502"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1493531110331"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p12936211103312"><a name="p12936211103312"></a><a name="p12936211103312"></a>blockchain</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1793613110339"><a name="p1793613110339"></a><a name="p1793613110339"></a>用于存储账本数据库特性中创建防篡改表时自动创建的用户历史表。</p>
</td>
</tr>
<tr id="row7455123271810"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p154551632191814"><a name="p154551632191814"></a><a name="p154551632191814"></a>cstore</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1945515322183"><a name="p1945515322183"></a><a name="p1945515322183"></a>该模式用于储存列存表相关的辅助表如cudesc或者delta表。</p>
</td>
</tr>
<tr id="row13737172519506"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p117373252504"><a name="p117373252504"></a><a name="p117373252504"></a>db4ai</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p873719259507"><a name="p873719259507"></a><a name="p873719259507"></a>用于管理AI训练中不同版本的数据信息。</p>
</td>
</tr>
<tr id="row71079385504"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p51071638195016"><a name="p51071638195016"></a><a name="p51071638195016"></a>dbe_perf</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p01071338155015"><a name="p01071338155015"></a><a name="p01071338155015"></a>DBE_PERF Schema内视图主要用来诊断性能问题，也是WDR Snapshot的数据来源。数据库安装后，默认只有初始用户和监控管理员具有模式dbe_perf的权限，有权查看该模式下的视图和函数。</p>
</td>
</tr>
<tr id="row121785110204"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p10179171112017"><a name="p10179171112017"></a><a name="p10179171112017"></a>dbe_pldebugger</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p917920152013"><a name="p917920152013"></a><a name="p917920152013"></a>用于调试plpgsql函数及存储过程。</p>
</td>
</tr>
<tr id="row16974311111512"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p20975141119154"><a name="p20975141119154"></a><a name="p20975141119154"></a>snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p4975131161516"><a name="p4975131161516"></a><a name="p4975131161516"></a>用于管理WDR snapshot的相关的数据信息，默认初始化用户或监控管理员用户可以访问。</p>
</td>
</tr>
<tr id="row14888175410588"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p12888125417587"><a name="p12888125417587"></a><a name="p12888125417587"></a>sqladvisor</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p168881754115817"><a name="p168881754115817"></a><a name="p168881754115817"></a>用于分布列推荐，openGauss不可用。</p>
</td>
</tr>
<tr id="row18692185181917"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p6693651191"><a name="p6693651191"></a><a name="p6693651191"></a>sys</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1969315551917"><a name="p1969315551917"></a><a name="p1969315551917"></a>用于提供系统信息视图接口。</p>
</td>
</tr>
<tr id="row1352310259568"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p85233259564"><a name="p85233259564"></a><a name="p85233259564"></a>pg_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1852318258569"><a name="p1852318258569"></a><a name="p1852318258569"></a>用于维护系统的catalog信息，包含系统表和所有内置数据类型、函数、操作符。</p>
</td>
</tr>
<tr id="row11852338507"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p15853438700"><a name="p15853438700"></a><a name="p15853438700"></a>pg_toast</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p18853138309"><a name="p18853138309"></a><a name="p18853138309"></a>用于存储大对象（系统内部使用）。</p>
</td>
</tr>
<tr id="row035912711315"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p143601970314"><a name="p143601970314"></a><a name="p143601970314"></a>public</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p63601871233"><a name="p63601871233"></a><a name="p63601871233"></a>公共模式，缺省时，创建的表（以及其它对象）自动放入该模式。</p>
</td>
</tr>
<tr id="row1057751281014"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p557718129103"><a name="p557718129103"></a><a name="p557718129103"></a>pkg_service</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1257741271011"><a name="p1257741271011"></a><a name="p1257741271011"></a>用于管理package服务相关信息。</p>
</td>
</tr>
</tbody>
</table>

-   **[USER\_TRANSACTION](USER_TRANSACTION.md)**

-   **[GLOBAL\_USER\_TRANSACTION](GLOBAL_USER_TRANSACTION.md)**

-   **[TRANSACTIONS\_RUNNING\_XACTS](TRANSACTIONS_RUNNING_XACTS.md)**

-   **[SUMMARY\_TRANSACTIONS\_RUNNING\_XACTS](SUMMARY_TRANSACTIONS_RUNNING_XACTS.md)**

-   **[GLOBAL\_TRANSACTIONS\_RUNNING\_XACTS](GLOBAL_TRANSACTIONS_RUNNING_XACTS.md)**

-   **[GS\_SLOW\_QUERY\_INFO（废弃）](GS_SLOW_QUERY_INFO_废弃.md)**

-   **[GS\_SLOW\_QUERY\_HISTORY（废弃）](GS_SLOW_QUERY_HISTORY_废弃.md)**

-   **[GLOBAL\_SLOW\_QUERY\_HISTORY（废弃）](GLOBAL_SLOW_QUERY_HISTORY_废弃.md)**

-   **[GLOBAL\_SLOW\_QUERY\_INFO（废弃）](GLOBAL_SLOW_QUERY_INFO_废弃.md)**

-   **[GLOBAL\_SINGLE\_FLUSH\_DW\_STATUS](GLOBAL_SINGLE_FLUSH_DW_STATUS.md)**

-   **[GLOBAL\_CANDIDATE\_STATUS](GLOBAL_CANDIDATE_STATUS.md)**

-   **[LOCKS](LOCKS.md)**

-   **[RTO](RTO.md)**
