# SQLConnect<a name="EN-US_TOPIC_0242371443"></a>

## Function<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_s3748e0b0ff1d4511806e76a6047e4b2b"></a>

SQLConnect is used to establish a connection between a driver and a data source. After the connection is established, the connection handle can be used to access all information about the data source, including its application operating status, transaction processing status, and error information.

## Prototype<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_sb221c464db69418a9a71727249ffa46d"></a>

```
SQLRETURN  SQLConnect(SQLHDBC        ConnectionHandle,
                      SQLCHAR        *ServerName,
                      SQLSMALLINT    NameLength1,
                      SQLCHAR        *UserName,
                      SQLSMALLINT    NameLength2,
                      SQLCHAR        *Authentication,
                      SQLSMALLINT    NameLength3);
```

## Parameter<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_s8e3d90b3650941d994840a8518e66e9f"></a>

**Table  1**  SQLConnect parameters

<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_t8fa9f060033b4a26984779280c60854a"></a>
<table><thead align="left"><tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r67f0db498b654a479449758e7e462f2f"><th class="cellrowborder" valign="top" width="24.04%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a2add2d24270f4e59922177f4535d87b0"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a2add2d24270f4e59922177f4535d87b0"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a2add2d24270f4e59922177f4535d87b0"></a><strong id="en-us_topic_0238272889_b643132041219"><a name="en-us_topic_0238272889_b643132041219"></a><a name="en-us_topic_0238272889_b643132041219"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="75.96000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a312049a8d7c84346860dec6821736629"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a312049a8d7c84346860dec6821736629"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a312049a8d7c84346860dec6821736629"></a><strong id="en-us_topic_0238272889_b12481422151212"><a name="en-us_topic_0238272889_b12481422151212"></a><a name="en-us_topic_0238272889_b12481422151212"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r00ff3c02290a482baca6ceb0ce57f357"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_ae0e72302b59b49b499448eb88a9a1a76"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_ae0e72302b59b49b499448eb88a9a1a76"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_ae0e72302b59b49b499448eb88a9a1a76"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0ea6511187604ba6ac910c5d172e45fc"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0ea6511187604ba6ac910c5d172e45fc"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0ea6511187604ba6ac910c5d172e45fc"></a>Connection handle, obtained from SQLAllocHandle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r2358b92eeb20466292ba04eb3aabccee"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a487de916b4af4a10a8a8e8b1cc3f7d9f"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a487de916b4af4a10a8a8e8b1cc3f7d9f"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a487de916b4af4a10a8a8e8b1cc3f7d9f"></a>ServerName</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a10a0aacacccf4812ab6a1aff49b95bb3"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a10a0aacacccf4812ab6a1aff49b95bb3"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a10a0aacacccf4812ab6a1aff49b95bb3"></a>Name of the data source to connect.</p>
</td>
</tr>
<tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r1dcca3acf01c4acd82b4ae61e35bf2f3"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_adaba0e6c4b41438583c5280d165a791d"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_adaba0e6c4b41438583c5280d165a791d"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_adaba0e6c4b41438583c5280d165a791d"></a>NameLength1</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a4ed378cc20844cba87f4cda82a0c25e2"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a4ed378cc20844cba87f4cda82a0c25e2"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a4ed378cc20844cba87f4cda82a0c25e2"></a>Length of <strong id="en-us_topic_0238272889_b84235270611217"><a name="en-us_topic_0238272889_b84235270611217"></a><a name="en-us_topic_0238272889_b84235270611217"></a>ServerName</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_rd1c446446d2944a6be02986a6d737db8"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0a86c75de1314282a5a57faed38fbcd5"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0a86c75de1314282a5a57faed38fbcd5"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0a86c75de1314282a5a57faed38fbcd5"></a>UserName</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_abe30dc71839d4548b4e4ed3e86f3803c"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_abe30dc71839d4548b4e4ed3e86f3803c"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_abe30dc71839d4548b4e4ed3e86f3803c"></a>Username of the database in the data source.</p>
</td>
</tr>
<tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r818170604e194631aa4fd7c8e573e3e7"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a07106f188bcc4034b600cb494346da2f"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a07106f188bcc4034b600cb494346da2f"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a07106f188bcc4034b600cb494346da2f"></a>NameLength2</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0ef78ad7a33a4aa28a735d50baf3989e"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0ef78ad7a33a4aa28a735d50baf3989e"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a0ef78ad7a33a4aa28a735d50baf3989e"></a>Length of <strong id="en-us_topic_0238272889_b84235270611227"><a name="en-us_topic_0238272889_b84235270611227"></a><a name="en-us_topic_0238272889_b84235270611227"></a>UserName</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r828433a3a635476bbd2af6f7cb444edd"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_afac5a1261da94e6c8d22eda7cbfa4eac"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_afac5a1261da94e6c8d22eda7cbfa4eac"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_afac5a1261da94e6c8d22eda7cbfa4eac"></a>Authentication</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a87355c2936ab422eb84970d97c3c63b6"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a87355c2936ab422eb84970d97c3c63b6"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a87355c2936ab422eb84970d97c3c63b6"></a>User password of the database in the data source.</p>
</td>
</tr>
<tr id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_r12a527185b9c429a91d5fa558c73690c"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a4b575ec5aaa843fbb90da6a7c36388aa"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a4b575ec5aaa843fbb90da6a7c36388aa"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_a4b575ec5aaa843fbb90da6a7c36388aa"></a>NameLength3</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_ab67c5b3b26e64f77919bb90b58a4bd46"><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_ab67c5b3b26e64f77919bb90b58a4bd46"></a><a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_ab67c5b3b26e64f77919bb90b58a4bd46"></a>Length of <strong id="en-us_topic_0238272889_b84235270611233"><a name="en-us_topic_0238272889_b84235270611233"></a><a name="en-us_topic_0238272889_b84235270611233"></a>Authentication</strong>.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_s2854e438cc754b68aec0788b1cd26b3d"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.
-   **SQL\_STILL\_EXECUTING**  indicates that the statement is being executed.

## Precautions<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_s570c6037911d4c57a42ca982c83b9c6d"></a>

If SQLConnect returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_DBC**  and  **ConnectionHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272889_en-us_topic_0237120419_en-us_topic_0059778729_s941ebfb1b130484d9e8e7225aa91a590"></a>

See  [Examples](example-odbc.md).

