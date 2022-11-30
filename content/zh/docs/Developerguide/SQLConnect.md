# SQLConnect<a name="ZH-CN_TOPIC_0242371443"></a>

## 功能描述<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_s3748e0b0ff1d4511806e76a6047e4b2b"></a>

在驱动程序和数据源之间建立连接。连接上数据源之后，可以通过连接句柄访问到所有有关连接数据源的信息，包括程序运行状态、事务处理状态和错误信息。

## 原型<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_sb221c464db69418a9a71727249ffa46d"></a>

```
SQLRETURN  SQLConnect(SQLHDBC        ConnectionHandle,
                      SQLCHAR        *ServerName,
                      SQLSMALLINT    NameLength1,
                      SQLCHAR        *UserName,
                      SQLSMALLINT    NameLength2,
                      SQLCHAR        *Authentication,
                      SQLSMALLINT    NameLength3);
```

## 参数<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_s8e3d90b3650941d994840a8518e66e9f"></a>

**表 1**  SQLConnect参数

<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_t8fa9f060033b4a26984779280c60854a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r67f0db498b654a479449758e7e462f2f"><th class="cellrowborder" valign="top" width="24.04%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a2add2d24270f4e59922177f4535d87b0"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a2add2d24270f4e59922177f4535d87b0"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a2add2d24270f4e59922177f4535d87b0"></a><strong id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a437d747ef7534328a3f3242891fb032b"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a437d747ef7534328a3f3242891fb032b"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a437d747ef7534328a3f3242891fb032b"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="75.96000000000001%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a312049a8d7c84346860dec6821736629"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a312049a8d7c84346860dec6821736629"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a312049a8d7c84346860dec6821736629"></a><strong id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_aa36a4514cc3e4faf8a591ca2e33d824b"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_aa36a4514cc3e4faf8a591ca2e33d824b"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_aa36a4514cc3e4faf8a591ca2e33d824b"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r00ff3c02290a482baca6ceb0ce57f357"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_ae0e72302b59b49b499448eb88a9a1a76"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_ae0e72302b59b49b499448eb88a9a1a76"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_ae0e72302b59b49b499448eb88a9a1a76"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0ea6511187604ba6ac910c5d172e45fc"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0ea6511187604ba6ac910c5d172e45fc"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0ea6511187604ba6ac910c5d172e45fc"></a>连接句柄，通过SQLAllocHandle获得。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r2358b92eeb20466292ba04eb3aabccee"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a487de916b4af4a10a8a8e8b1cc3f7d9f"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a487de916b4af4a10a8a8e8b1cc3f7d9f"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a487de916b4af4a10a8a8e8b1cc3f7d9f"></a>ServerName</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a10a0aacacccf4812ab6a1aff49b95bb3"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a10a0aacacccf4812ab6a1aff49b95bb3"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a10a0aacacccf4812ab6a1aff49b95bb3"></a>要连接数据源的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r1dcca3acf01c4acd82b4ae61e35bf2f3"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_adaba0e6c4b41438583c5280d165a791d"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_adaba0e6c4b41438583c5280d165a791d"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_adaba0e6c4b41438583c5280d165a791d"></a>NameLength1</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a4ed378cc20844cba87f4cda82a0c25e2"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a4ed378cc20844cba87f4cda82a0c25e2"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a4ed378cc20844cba87f4cda82a0c25e2"></a>ServerName的长度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_rd1c446446d2944a6be02986a6d737db8"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0a86c75de1314282a5a57faed38fbcd5"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0a86c75de1314282a5a57faed38fbcd5"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0a86c75de1314282a5a57faed38fbcd5"></a>UserName</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_abe30dc71839d4548b4e4ed3e86f3803c"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_abe30dc71839d4548b4e4ed3e86f3803c"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_abe30dc71839d4548b4e4ed3e86f3803c"></a>数据源中数据库用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r818170604e194631aa4fd7c8e573e3e7"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a07106f188bcc4034b600cb494346da2f"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a07106f188bcc4034b600cb494346da2f"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a07106f188bcc4034b600cb494346da2f"></a>NameLength2</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0ef78ad7a33a4aa28a735d50baf3989e"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0ef78ad7a33a4aa28a735d50baf3989e"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a0ef78ad7a33a4aa28a735d50baf3989e"></a>UserName的长度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r828433a3a635476bbd2af6f7cb444edd"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_afac5a1261da94e6c8d22eda7cbfa4eac"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_afac5a1261da94e6c8d22eda7cbfa4eac"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_afac5a1261da94e6c8d22eda7cbfa4eac"></a>Authentication</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a87355c2936ab422eb84970d97c3c63b6"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a87355c2936ab422eb84970d97c3c63b6"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a87355c2936ab422eb84970d97c3c63b6"></a>数据源中数据库用户密码。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_r12a527185b9c429a91d5fa558c73690c"><td class="cellrowborder" valign="top" width="24.04%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a4b575ec5aaa843fbb90da6a7c36388aa"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a4b575ec5aaa843fbb90da6a7c36388aa"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_a4b575ec5aaa843fbb90da6a7c36388aa"></a>NameLength3</p>
</td>
<td class="cellrowborder" valign="top" width="75.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_ab67c5b3b26e64f77919bb90b58a4bd46"><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_ab67c5b3b26e64f77919bb90b58a4bd46"></a><a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_ab67c5b3b26e64f77919bb90b58a4bd46"></a>Authentication的长度。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_s2854e438cc754b68aec0788b1cd26b3d"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。
-   SQL\_STILL\_EXECUTING：表示语句正在执行。

## 注意事项<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_s570c6037911d4c57a42ca982c83b9c6d"></a>

当调用SQLConnect函数返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_DBC和ConnectionHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272889_zh-cn_topic_0237120419_zh-cn_topic_0059778729_s941ebfb1b130484d9e8e7225aa91a590"></a>

参见：[示例](示例-2.md)
