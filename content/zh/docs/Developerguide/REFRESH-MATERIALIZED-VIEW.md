# REFRESH MATERIALIZED VIEW<a name="ZH-CN_TOPIC_0242370648"></a>

## 功能描述<a name="zh-cn_topic_0237122184_zh-cn_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

REFRESH MATERIALIZED VIEW 完全替换一个 物化视图的内容。旧的内容会被抛弃。

## 注意事项<a name="zh-cn_topic_0237122184_zh-cn_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   如果指定了 WITH DATA（或者作为默认值），支持查询将被执行以提供新的数据。如果指定了WITH NO DATA，则不会生成新数据。
-   如果希望数据在产生时排序，必须在支持查询中使用ORDER BY子句。

## 语法格式<a name="zh-cn_topic_0237122184_zh-cn_topic_0059777449_sb7329222602d46fe944bf6c300931dd2"></a>

-   查询数据

```
REFRESH MATERIALIZED VIEW mv_name [ WITH [ NO ] DATA ];
```


## 参数说明<a name="zh-cn_topic_0237122184_zh-cn_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc"></a>


- **mv\_name**

  要刷新的物化视图的名称。



## 示例<a name="zh-cn_topic_0237122184_zh-cn_topic_0059777449_sc1b5e63c90c946b89430696c38fc86c0"></a>

```
--这个命令将使用物化视图order_summary定义中的查询来替换该物化视图的内容：
postgres=# REFRESH MATERIALIZED VIEW order_summary;
```

## 相关链接<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE MARTERIALIZED VIEW](CREATE-MATERIALIZED-VIEW.md)

