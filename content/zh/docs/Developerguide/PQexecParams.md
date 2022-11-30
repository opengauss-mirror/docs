# PQexecParams<a name="ZH-CN_TOPIC_0242380694"></a>

## 功能描述<a name="zh-cn_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

执行一个绑定参数的命令。

## 原型<a name="zh-cn_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
PGresult* PQexecParams(PGconn* conn,
                       const char* command,
                       int nParams,
                       const Oid* paramTypes,
                       const char* const* paramValues,
                       const int* paramLengths,
                       const int* paramFormats,
                       int resultFormat);
```

## 参数<a name="zh-cn_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**表 1** PQexecParams参数

<a name="zh-cn_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"><a name="zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"></a><a name="zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"><a name="zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"></a><a name="zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1118265455918"><a name="p1118265455918"></a><a name="p1118265455918"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1443611019420"><a name="p1443611019420"></a><a name="p1443611019420"></a>连接句柄。</p>
</td>
</tr>
<tr id="row176011820351"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p16506153819167"><a name="p16506153819167"></a><a name="p16506153819167"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1950523811611"><a name="p1950523811611"></a><a name="p1950523811611"></a>SQL文本串。</p>
</td>
</tr>
<tr id="row584522582711"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p10845142519271"><a name="p10845142519271"></a><a name="p10845142519271"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1984592532712"><a name="p1984592532712"></a><a name="p1984592532712"></a>绑定参数的个数。</p>
</td>
</tr>
<tr id="row1240824533515"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p13504738181613"><a name="p13504738181613"></a><a name="p13504738181613"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p3503238191611"><a name="p3503238191611"></a><a name="p3503238191611"></a>绑定参数类型。</p>
</td>
</tr>
<tr id="row914768706"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p15021138121619"><a name="p15021138121619"></a><a name="p15021138121619"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p13501123811165"><a name="p13501123811165"></a><a name="p13501123811165"></a>绑定参数的值。</p>
</td>
</tr>
<tr id="row15911611308"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p6500133816168"><a name="p6500133816168"></a><a name="p6500133816168"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p208701046141313"><a name="p208701046141313"></a><a name="p208701046141313"></a>参数长度。</p>
</td>
</tr>
<tr id="row18102104010"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p0498938111616"><a name="p0498938111616"></a><a name="p0498938111616"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1084774610132"><a name="p1084774610132"></a><a name="p1084774610132"></a>参数格式（文本或二进制）。</p>
</td>
</tr>
<tr id="row17454514015"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p94963384168"><a name="p94963384168"></a><a name="p94963384168"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p154741386161"><a name="p154741386161"></a><a name="p154741386161"></a>返回结果格式（文本或二进制）。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

PGresult类型指针。
