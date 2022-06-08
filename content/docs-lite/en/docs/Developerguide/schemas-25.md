# Schemas<a name="EN-US_TOPIC_0000001190922647"></a>

The following table describes the schemas of .

**Table  1**  Schemas supported by 

<a name="table167371825175015"></a>
<table><thead align="left"><tr id="row1737325195017"><th class="cellrowborder" valign="top" width="18.18%" id="mcps1.2.3.1.1"><p id="p2737152535018"><a name="p2737152535018"></a><a name="p2737152535018"></a>Schema</p>
</th>
<th class="cellrowborder" valign="top" width="81.82000000000001%" id="mcps1.2.3.1.2"><p id="p273712517502"><a name="p273712517502"></a><a name="p273712517502"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1493531110331"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p12936211103312"><a name="p12936211103312"></a><a name="p12936211103312"></a>blockchain</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1793613110339"><a name="p1793613110339"></a><a name="p1793613110339"></a>Stores the user history table that is automatically created when a tamper-proof table is created in the ledger database.</p>
</td>
</tr>
<tr id="row7455123271810"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p154551632191814"><a name="p154551632191814"></a><a name="p154551632191814"></a>cstore</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1945515322183"><a name="p1945515322183"></a><a name="p1945515322183"></a>Stores auxiliary tables related to column-store tables, such as CUDesc and Delta tables.</p>
</td>
</tr>
<tr id="row13737172519506"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p117373252504"><a name="p117373252504"></a><a name="p117373252504"></a>db4ai</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p873719259507"><a name="p873719259507"></a><a name="p873719259507"></a>Manages data of different versions in AI training.</p>
<div class="note" id="note889911424455"><a name="note889911424455"></a><a name="note889911424455"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p12181430174511"><a name="p12181430174511"></a><a name="p12181430174511"></a>In the <span id="text81433206454"><a name="text81433206454"></a><a name="text81433206454"></a>Lite</span> scenario, the AI capabilities of openGauss are unavailable.</p>
</div></div>
</td>
</tr>
<tr id="row71079385504"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p51071638195016"><a name="p51071638195016"></a><a name="p51071638195016"></a>dbe_perf</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p01071338155015"><a name="p01071338155015"></a><a name="p01071338155015"></a>Diagnoses performance issues and is also the data source of WDR snapshots. After a database is installed, only the initial user and monitoring administrator have permission to view views and functions in this schema by default.</p>
</td>
</tr>
<tr id="row121785110204"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p10179171112017"><a name="p10179171112017"></a><a name="p10179171112017"></a>dbe_pldebugger</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p917920152013"><a name="p917920152013"></a><a name="p917920152013"></a>Debugs PL/pgSQL functions and stored procedures.</p>
</td>
</tr>
<tr id="row16974311111512"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p20975141119154"><a name="p20975141119154"></a><a name="p20975141119154"></a>snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p4975131161516"><a name="p4975131161516"></a><a name="p4975131161516"></a>Manages data related to WDR snapshots. By default, the initial user or monitoring administrator can access the data.</p>
</td>
</tr>
<tr id="row14888175410588"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p12888125417587"><a name="p12888125417587"></a><a name="p12888125417587"></a>sqladvisor</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p168881754115817"><a name="p168881754115817"></a><a name="p168881754115817"></a>Is used for distribution column recommendation and is unavailable in .</p>
</td>
</tr>
<tr id="row1352310259568"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p85233259564"><a name="p85233259564"></a><a name="p85233259564"></a>pg_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1852318258569"><a name="p1852318258569"></a><a name="p1852318258569"></a>Maintains system catalog information, including system catalogs and all built-in data types, functions, and operators.</p>
</td>
</tr>
<tr id="row11852338507"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p15853438700"><a name="p15853438700"></a><a name="p15853438700"></a>pg_toast</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p18853138309"><a name="p18853138309"></a><a name="p18853138309"></a>Stores large objects (for internal use).</p>
</td>
</tr>
<tr id="row035912711315"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p143601970314"><a name="p143601970314"></a><a name="p143601970314"></a>public</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p63601871233"><a name="p63601871233"></a><a name="p63601871233"></a>Public schema. By default, created tables (and other objects) are automatically put into this schema.</p>
</td>
</tr>
<tr id="row1057751281014"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p557718129103"><a name="p557718129103"></a><a name="p557718129103"></a>pkg_service</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p1257741271011"><a name="p1257741271011"></a><a name="p1257741271011"></a>Manages information about the package service.</p>
</td>
</tr>
<tr id="row66775912104"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p667145921018"><a name="p667145921018"></a><a name="p667145921018"></a>pkg_util</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p467155918100"><a name="p467155918100"></a><a name="p467155918100"></a>Manages information about the package tool.</p>
</td>
</tr>
<tr id="row1440863761016"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p18520162405718"><a name="p18520162405718"></a><a name="p18520162405718"></a>information_schema</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p35201824145713"><a name="p35201824145713"></a><a name="p35201824145713"></a>Stores information about objects defined in the current database.</p>
</td>
</tr>
<tr id="row1468517540103"><td class="cellrowborder" valign="top" width="18.18%" headers="mcps1.2.3.1.1 "><p id="p2714747103516"><a name="p2714747103516"></a><a name="p2714747103516"></a>dbe_pldeveloper</p>
</td>
<td class="cellrowborder" valign="top" width="81.82000000000001%" headers="mcps1.2.3.1.2 "><p id="p871412470352"><a name="p871412470352"></a><a name="p871412470352"></a>Compiles and debugs user stored procedures.</p>
</td>
</tr>
</tbody>
</table>

-   **[Information Schema](information-schema.md)**  

-   **[DBE\_PERF Schema](dbe_perf-schema.md)**  

-   **[WDR Snapshot Schema](wdr-snapshot-schema.md)**  

-   **[DBE\_PLDEBUGGER Schema](dbe_pldebugger-schema.md)**  

-   **[DB4AI Schema](db4ai-schema.md)**  

-   **[DBE\_PLDEVELOPER](dbe_pldeveloper.md)**  


