# PQexecPreparedBatch

## 功能描述<a name="zh-cn_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

发送一个请求来用给定的批量参数执行一个预备语句，并且等待结果。

## 原型<a name="zh-cn_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
PGresult* PQexecPreparedBatch(PGconn* conn, 
                              const char* stmtName, 
                              int nParams,
                              int nBatchCount,
                              const char* const* paramValues,
                              const int* paramLengths,
                              const int* paramFormats,
                              int resultFormat);
```

## 参数<a name="zh-cn_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**表 1** PQexecPreparedBatch参数

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
<tr id="row176011820351"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p818113544596"><a name="p818113544596"></a><a name="p818113544596"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p16413301421"><a name="p16413301421"></a><a name="p16413301421"></a><em id="i2828137155814"><a name="i2828137155814"></a><a name="i2828137155814"></a>stmt</em>名称，可以用""或者NULL来引用未命名语句，否则它必须是一个现有预备语句的名字。</p>
</td>
</tr>
<tr id="row1240824533515"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p0159205455917"><a name="p0159205455917"></a><a name="p0159205455917"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p740804583514"><a name="p740804583514"></a><a name="p740804583514"></a>参数个数。</p>
</td>
</tr>
<tr id="row2024611313811"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p12479136813"><a name="p12479136813"></a><a name="p12479136813"></a>nBatchCount</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p32475134810"><a name="p32475134810"></a><a name="p32475134810"></a>批量数。</p>
</td>
</tr>
<tr id="row914768706"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1814712811018"><a name="p1814712811018"></a><a name="p1814712811018"></a>paramValues</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1714713813010"><a name="p1714713813010"></a><a name="p1714713813010"></a>参数的实际值。</p>
</td>
</tr>
<tr id="row15911611308"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p39117111903"><a name="p39117111903"></a><a name="p39117111903"></a>paramLengths</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p29111911505"><a name="p29111911505"></a><a name="p29111911505"></a>参数的实际数据长度。</p>
</td>
</tr>
<tr id="row18102104010"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1410510708"><a name="p1410510708"></a><a name="p1410510708"></a>paramFormats</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p12112107012"><a name="p12112107012"></a><a name="p12112107012"></a>参数的格式（文本或二进制）。</p>
</td>
</tr>
<tr id="row17454514015"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p12745135901"><a name="p12745135901"></a><a name="p12745135901"></a>resultFormat</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p16746185907"><a name="p16746185907"></a><a name="p16746185907"></a>结果的格式（文本或二进制）。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

PGresult类型指针。

