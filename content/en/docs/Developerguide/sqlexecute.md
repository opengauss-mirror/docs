# SQLExecute<a name="EN-US_TOPIC_0242371446"></a>

## Function<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_sab94d410ef5f4a509e8d2881ec7373e7"></a>

SQLExecute is used to execute a prepared SQL statement using SQLPrepare. The statement is executed using the current value of any application variables that were bound to parameter markers by SQLBindParameter.

## Prototype<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_se7599e2d01c7423e9560a92d77e7f485"></a>

```
SQLRETURN SQLExecute(SQLHSTMT    StatementHandle);
```

## Parameter<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_s2f725c8885a54047b1c851581a5cfb20"></a>

**Table  1**  SQLExecute parameters

<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_t273b6621863d447d83d4abfa8022d0d8"></a>
<table><thead align="left"><tr id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_r307958bad12a44e392db7fbb6af50301"><th class="cellrowborder" valign="top" width="23.580000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a2bf3d610f4ba41d3ba42d42367ef7169"><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a2bf3d610f4ba41d3ba42d42367ef7169"></a><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a2bf3d610f4ba41d3ba42d42367ef7169"></a><strong id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_af4475977916c484c958035d7e218a430"><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_af4475977916c484c958035d7e218a430"></a><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_af4475977916c484c958035d7e218a430"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.42%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_add57a1dc45d74987a5c7310f1484e1fd"><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_add57a1dc45d74987a5c7310f1484e1fd"></a><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_add57a1dc45d74987a5c7310f1484e1fd"></a><strong id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_en-us_topic_0058965164_b410532714330"><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_en-us_topic_0058965164_b410532714330"></a><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_en-us_topic_0058965164_b410532714330"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_r1710d254c4ea46a4bb7ff750906e746c"><td class="cellrowborder" valign="top" width="23.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a7c3ace89f78b43a49610f0469c371ee1"><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a7c3ace89f78b43a49610f0469c371ee1"></a><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a7c3ace89f78b43a49610f0469c371ee1"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a92272c99dc784efebbe3125e4ecf3186"><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a92272c99dc784efebbe3125e4ecf3186"></a><a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_a92272c99dc784efebbe3125e4ecf3186"></a>Statement handle to be executed.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_s46aaf47ea8e24486b39259cd50dacdf8"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_NEED\_DATA**  indicates that parameters provided before executing the SQL statement are insufficient.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_NO\_DATA**  indicates that the SQL statement does not return a result set.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.
-   **SQL\_STILL\_EXECUTING**  indicates that the statement is being executed.

## Precautions<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_sbf798ae1ab814ff5aba587d2df01ad12"></a>

If SQLExecute returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272892_en-us_topic_0237120422_en-us_topic_0059778182_s224798c3974741f3976659ed7d6de926"></a>

See  [Examples](examples.md).

