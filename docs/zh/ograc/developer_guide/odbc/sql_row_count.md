# SQLRowCount<a name="ZH-CN_TOPIC_0242371452"></a>

## 功能描述<a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_s0d00013620f7443fb1bb6deca04314c8"></a>

用于获取最近执行的SQL语句所影响的行数。

## 原型<a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_s195bb50934b04608b371fd8329ab099b"></a>

```c
SQLRETURN SQLRowCount(SQLHSTMT      StatementHandle,    
                      SQLLEN        *RowCountPtr);
```

## 参数<a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_s258e6631a7e74be6a4c3afe4dcc3bbc0"></a>

**表 1**  SQLRowCount参数

<a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_t33ff90a7a6b74897ab86f9751d4c5275"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_rc5971abfc7ad454b82d4ec1fa4a5a3d2"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a99b3a615915a4e6fadf9098f3ca827f3"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a99b3a615915a4e6fadf9098f3ca827f3"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a99b3a615915a4e6fadf9098f3ca827f3"></a><strong id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a6a69571d09d44f4f925ba0681ef0ee34"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a6a69571d09d44f4f925ba0681ef0ee34"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a6a69571d09d44f4f925ba0681ef0ee34"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a76ec10478d09482189849545c24624e7"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a76ec10478d09482189849545c24624e7"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a76ec10478d09482189849545c24624e7"></a><strong id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ac70d7a582bc74080bf82d7b324923371"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ac70d7a582bc74080bf82d7b324923371"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ac70d7a582bc74080bf82d7b324923371"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_r1efc1d51b2d142d4822ebd4a97c02217"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a9e4c5c491a90471bacc88a38be62bde1"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a9e4c5c491a90471bacc88a38be62bde1"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a9e4c5c491a90471bacc88a38be62bde1"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ab23b5b1aa19a4cd69b0fa82ee6098ac3"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ab23b5b1aa19a4cd69b0fa82ee6098ac3"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ab23b5b1aa19a4cd69b0fa82ee6098ac3"></a>语句句柄。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_rf6322af53ba14f53adb5cc47a1243cb6"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a1f11f77d7f3141aca8078f349dcdcfab"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a1f11f77d7f3141aca8078f349dcdcfab"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_a1f11f77d7f3141aca8078f349dcdcfab"></a>RowCountPtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ad725bfcd68d64d5287f3e274ae3de05a"><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ad725bfcd68d64d5287f3e274ae3de05a"></a><a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_ad725bfcd68d64d5287f3e274ae3de05a"></a>指向一个缓冲区的指针。执行成功后，受影响的行数将被写入这个缓冲区指向的地址中。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_s5a0422bedc334a4f88a22c60cb4ba293"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示执行失败。
-   SQL\_INVALID\_HANDLE：表示传入的句柄无效。

## 示例<a name="zh-cn_topic_0238272898_zh-cn_topic_0237120428_zh-cn_topic_0059779125_sbf766eb45a5e442094a561b3036a4205"></a>

参见：[示例](example.md)

