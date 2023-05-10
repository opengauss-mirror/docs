# SQLExecute

## 功能描述<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_sab94d410ef5f4a509e8d2881ec7373e7"></a>

如果语句中存在参数标记的话，SQLExecute函数使用参数标记参数的当前值，执行一条准备好的SQL语句。

## 原型<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_se7599e2d01c7423e9560a92d77e7f485"></a>

```
SQLRETURN SQLExecute(SQLHSTMT    StatementHandle);
```

## 参数<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_s2f725c8885a54047b1c851581a5cfb20"></a>

**表 1**  SQLExecute参数

<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_t273b6621863d447d83d4abfa8022d0d8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_r307958bad12a44e392db7fbb6af50301"><th class="cellrowborder" valign="top" width="23.580000000000002%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a2bf3d610f4ba41d3ba42d42367ef7169"><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a2bf3d610f4ba41d3ba42d42367ef7169"></a><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a2bf3d610f4ba41d3ba42d42367ef7169"></a><strong id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_af4475977916c484c958035d7e218a430"><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_af4475977916c484c958035d7e218a430"></a><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_af4475977916c484c958035d7e218a430"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.42%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_add57a1dc45d74987a5c7310f1484e1fd"><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_add57a1dc45d74987a5c7310f1484e1fd"></a><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_add57a1dc45d74987a5c7310f1484e1fd"></a><strong id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_zh-cn_topic_0058965164_b410532714330"><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_zh-cn_topic_0058965164_b410532714330"></a><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_zh-cn_topic_0058965164_b410532714330"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_r1710d254c4ea46a4bb7ff750906e746c"><td class="cellrowborder" valign="top" width="23.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a7c3ace89f78b43a49610f0469c371ee1"><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a7c3ace89f78b43a49610f0469c371ee1"></a><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a7c3ace89f78b43a49610f0469c371ee1"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a92272c99dc784efebbe3125e4ecf3186"><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a92272c99dc784efebbe3125e4ecf3186"></a><a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_a92272c99dc784efebbe3125e4ecf3186"></a>要执行语句的语句句柄。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_s46aaf47ea8e24486b39259cd50dacdf8"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_NEED\_DATA：表示在执行SQL语句前没有提供足够的参数。
-   SQL\_ERROR：表示比较严重的错误，如：内存分配失败、建立连接失败等。
-   SQL\_NO\_DATA：表示SQL语句不返回结果集。
-   SQL\_INVALID\_HANDLE：表示调用无效句柄。其他API的返回值同理。
-   SQL\_STILL\_EXECUTING：表示语句正在执行。

## 注意事项<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_sbf798ae1ab814ff5aba587d2df01ad12"></a>

当SQLExecute函数返回SQL\_ERROR或SQL\_SUCCESS\_WITH\_INFO时，可通过调用[SQLGetDiagRec](SQLGetDiagRec.md)函数，并将HandleType和Handle参数设置为SQL\_HANDLE\_STMT和StatementHandle，可得到一个相关的SQLSTATE值，通过SQLSTATE值可以查出调用此函数的具体信息。

## 示例<a name="zh-cn_topic_0238272892_zh-cn_topic_0237120422_zh-cn_topic_0059778182_s224798c3974741f3976659ed7d6de926"></a>

参见：[示例](示例-2.md)

