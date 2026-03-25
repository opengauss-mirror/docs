# SQLGetData<a name="ZH-CN_TOPIC_0242371453"></a>

## 功能描述<a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_s4c79ae112a6f415a9fed38561c46eebc"></a>

SQLGetData返回结果集中某一列的数据。可以多次调用它来部分地检索不定长度的数据。

## 原型<a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_s44941944b9a4473f82bcf2a103906e25"></a>

```c
SQLRETURN SQLGetData(SQLHSTMT        StatementHandle,
                     SQLUSMALLINT    Col_or_Param_Num,
                     SQLSMALLINT     TargetType,
                     SQLPOINTER      TargetValuePtr,
                     SQLLEN          BufferLength,
                     SQLLEN          *StrLen_or_IndPtr);
```

## 参数<a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_s6034c283c1954e118e141f899e1e1e3c"></a>

**表 1**  SQLGetData参数

<a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_t08910fa922fb482eb98845919c52785a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_r2508a683ee7f42e2bd834ea3257ac342"><th class="cellrowborder" valign="top" width="26.040000000000003%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a5a104b2657f046969ed5569992b0c911"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a5a104b2657f046969ed5569992b0c911"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a5a104b2657f046969ed5569992b0c911"></a><strong id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a3f9a72ce57fb40a6827c4ea699ae2ba8"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a3f9a72ce57fb40a6827c4ea699ae2ba8"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a3f9a72ce57fb40a6827c4ea699ae2ba8"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="73.96000000000001%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ae3c86bea30f44b6e9769831d56221748"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ae3c86bea30f44b6e9769831d56221748"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ae3c86bea30f44b6e9769831d56221748"></a><strong id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a1e6fdd37c7754fb1a035e9af237e941c"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a1e6fdd37c7754fb1a035e9af237e941c"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a1e6fdd37c7754fb1a035e9af237e941c"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_r0d368665814c4b238ddb32a049d82a0d"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a880530243d4e498fb6b76bd77a3093ce"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a880530243d4e498fb6b76bd77a3093ce"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a880530243d4e498fb6b76bd77a3093ce"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a20e5de3767184b4c8f663421d6a024d0"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a20e5de3767184b4c8f663421d6a024d0"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a20e5de3767184b4c8f663421d6a024d0"></a>语句句柄，通过SQLAllocHandle获得。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_rfe14a18985d9482b895a507a0f951600"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ab3db05e49dc94c47af5e94bc33d3687b"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ab3db05e49dc94c47af5e94bc33d3687b"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ab3db05e49dc94c47af5e94bc33d3687b"></a>Col_or_Param_Num</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_af40a50cb91c4404b854dccc0c604c9b3"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_af40a50cb91c4404b854dccc0c604c9b3"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_af40a50cb91c4404b854dccc0c604c9b3"></a>要返回数据的列号。结果集的列按增序从1开始编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_r23c8324e42b340e8b37a24a27cca9c95"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a903c3136e8e9429d8e9539b4845b7213"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a903c3136e8e9429d8e9539b4845b7213"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a903c3136e8e9429d8e9539b4845b7213"></a>TargetType</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_adcda8574a802420ea929deafa9a6141c"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_adcda8574a802420ea929deafa9a6141c"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_adcda8574a802420ea929deafa9a6141c"></a>TargetValuePtr缓冲中的C数据类型的类型标识符。若为SQL_C_DEFAULT，驱动根据源的SQL数据类型选择缺省的数据类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_r372fa74235c64468a6983897427799dd"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ae4ae78a65c8141d1bfd385c483d28dc8"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ae4ae78a65c8141d1bfd385c483d28dc8"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ae4ae78a65c8141d1bfd385c483d28dc8"></a>TargetValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a833d8f5bcf634f64850d34eafe8a61ed"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a833d8f5bcf634f64850d34eafe8a61ed"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a833d8f5bcf634f64850d34eafe8a61ed"></a><strong id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a6d910f8795dd4db990901b288c0ab9e1"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a6d910f8795dd4db990901b288c0ab9e1"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a6d910f8795dd4db990901b288c0ab9e1"></a>输出参数</strong>：指向返回数据所在缓冲区的指针。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_r02cc41e13770477a8f264baa588d824d"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_aa2cdd32624f44a099427e2dc8ad515e7"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_aa2cdd32624f44a099427e2dc8ad515e7"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_aa2cdd32624f44a099427e2dc8ad515e7"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a6e075ecd6ab54022a4f257a7a417807a"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a6e075ecd6ab54022a4f257a7a417807a"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_a6e075ecd6ab54022a4f257a7a417807a"></a>TargetValuePtr所指向缓冲区的长度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_r1d1639046e684c6bbccc0a5eda96aad6"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_af21961aaeecb4635b19a06814d1451b4"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_af21961aaeecb4635b19a06814d1451b4"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_af21961aaeecb4635b19a06814d1451b4"></a>StrLen_or_IndPtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ab94e44beb6d448129a509b6cfc39fde1"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ab94e44beb6d448129a509b6cfc39fde1"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_ab94e44beb6d448129a509b6cfc39fde1"></a><strong id="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_afdac6251fcf84e25be35b5fffc947a8e"><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_afdac6251fcf84e25be35b5fffc947a8e"></a><a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_afdac6251fcf84e25be35b5fffc947a8e"></a>输出参数</strong>：指向缓冲区的指针，在此缓冲区中返回长度或标识符的值。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_saaafb13e1b624682bc1d09efa9d415d4"></a>

-   SQL\_SUCCESS：表示调用正确。
-   SQL\_SUCCESS\_WITH\_INFO：表示会有一些警告信息。
-   SQL\_ERROR：表示从结果集中获取列数据失败。
-   SQL\_NO\_DATA：表示SQL语句不返回结果集。
-   SQL\_INVALID\_HANDLE：表示传入的句柄无效。

## 示例<a name="zh-cn_topic_0238272899_zh-cn_topic_0237120429_zh-cn_topic_0059778461_s69654c27e011474aa33ede59ff0961b8"></a>

参见：[示例](example.md)