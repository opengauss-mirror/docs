# PQntuples

## 功能描述<a name="zh-cn_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

返回查询结果中的行（元组）数。因为它返回一个整数结果，在 32 位操作系统上大型的结果集可能使返回值溢出。

## 原型<a name="zh-cn_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
int PQntuples(const PGresult *res);
```

## 参数<a name="zh-cn_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**表 1** PQntuples参数

<a name="zh-cn_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="zh-cn_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"><a name="zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"></a><a name="zh-cn_topic_0059778058_a471452b4ce36463d9fbbad2b44ea3b2d"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="zh-cn_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"><a name="zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"></a><a name="zh-cn_topic_0059778058_a0eca439d6c7b46918ec38642b1d660c0"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p191934511309"><a name="p191934511309"></a><a name="p191934511309"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p13897154573014"><a name="p13897154573014"></a><a name="p13897154573014"></a>操作结果句柄。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

int类型数字。

## 示例<a name="zh-cn_topic_0059778058_sb7bc1f5b242e441583cf7237bb33199b"></a>

参见：[示例](示例-libpq.md)

