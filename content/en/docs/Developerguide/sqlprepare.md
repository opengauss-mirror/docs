# SQLPrepare<a name="EN-US_TOPIC_0242371452"></a>

## Function<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_s0d00013620f7443fb1bb6deca04314c8"></a>

SQLPrepare is used to prepare an SQL statement to be executed.

## Prototype<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_s195bb50934b04608b371fd8329ab099b"></a>

```
SQLRETURN SQLPrepare(SQLHSTMT      StatementHandle,    
                     SQLCHAR       *StatementText,     
                     SQLINTEGER    TextLength);
```

## Parameter<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_s258e6631a7e74be6a4c3afe4dcc3bbc0"></a>

**Table  1**  SQLPrepare parameters

<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_t33ff90a7a6b74897ab86f9751d4c5275"></a>
<table><thead align="left"><tr id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_rc5971abfc7ad454b82d4ec1fa4a5a3d2"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a99b3a615915a4e6fadf9098f3ca827f3"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a99b3a615915a4e6fadf9098f3ca827f3"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a99b3a615915a4e6fadf9098f3ca827f3"></a><strong id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a6a69571d09d44f4f925ba0681ef0ee34"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a6a69571d09d44f4f925ba0681ef0ee34"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a6a69571d09d44f4f925ba0681ef0ee34"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a76ec10478d09482189849545c24624e7"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a76ec10478d09482189849545c24624e7"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a76ec10478d09482189849545c24624e7"></a><strong id="en-us_topic_0238272898_b1317520154520"><a name="en-us_topic_0238272898_b1317520154520"></a><a name="en-us_topic_0238272898_b1317520154520"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_r1efc1d51b2d142d4822ebd4a97c02217"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a9e4c5c491a90471bacc88a38be62bde1"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a9e4c5c491a90471bacc88a38be62bde1"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a9e4c5c491a90471bacc88a38be62bde1"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_ab23b5b1aa19a4cd69b0fa82ee6098ac3"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_ab23b5b1aa19a4cd69b0fa82ee6098ac3"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_ab23b5b1aa19a4cd69b0fa82ee6098ac3"></a>Statement handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_rf6322af53ba14f53adb5cc47a1243cb6"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a1f11f77d7f3141aca8078f349dcdcfab"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a1f11f77d7f3141aca8078f349dcdcfab"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a1f11f77d7f3141aca8078f349dcdcfab"></a>StatementText</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_ad725bfcd68d64d5287f3e274ae3de05a"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_ad725bfcd68d64d5287f3e274ae3de05a"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_ad725bfcd68d64d5287f3e274ae3de05a"></a>SQL text string.</p>
</td>
</tr>
<tr id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_r1167733a8d244dd28c8d61dca7701b63"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_aee502ca862d84f32b75cd44346fccb7e"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_aee502ca862d84f32b75cd44346fccb7e"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_aee502ca862d84f32b75cd44346fccb7e"></a>TextLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a5045345d83a94edaa87388429722a065"><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a5045345d83a94edaa87388429722a065"></a><a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_a5045345d83a94edaa87388429722a065"></a>Length of <strong id="en-us_topic_0238272898_b43579298162725"><a name="en-us_topic_0238272898_b43579298162725"></a><a name="en-us_topic_0238272898_b43579298162725"></a>StatementText</strong>.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_s5a0422bedc334a4f88a22c60cb4ba293"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.
-   **SQL\_STILL\_EXECUTING**  indicates that the statement is being executed.

## Precautions<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_sb5b5132a364641b59ecf3f4a0b691616"></a>

If SQLPrepare returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272898_en-us_topic_0237120428_en-us_topic_0059779125_sbf766eb45a5e442094a561b3036a4205"></a>

See  [Examples](examples.md).

