# VALUES<a name="ZH-CN_TOPIC_0289900362"></a>

## 功能描述<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_s25c2a01507274648bf05cbcb1dc418bf"></a>

根据给定的值表达式计算一个或一组行的值。它通常用于在一个较大的命令内生成一个“常数表”。

## 注意事项<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_s60091e11d710468f8772f6732699506b"></a>

-   应当避免使用VALUES返回数量非常大的结果行，否则可能会遭遇内存耗尽或者性能低下。出现在INSERT中的VALUES是一个特殊情况，因为目标字段类型可以从INSERT的目标表获知，并不需要通过扫描VALUES列表来推测，所以在此情况下可以处理非常大的结果行。
-   如果指定了多行，那么每一行都必须拥有相同的元素个数。

## 语法格式<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_sb9827c497faf4cc490614f51246dbc5b"></a>

```
VALUES {( expression [, ...] )} [, ...]
    [ ORDER BY { sort_expression [ ASC | DESC | USING operator ] } [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ];
```

## 参数说明<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_s0a4a952823114ec6bfe2864b0af1db2f"></a>

-   **expression**

    用于计算或插入结果表指定地点的常量或者表达式。

    在一个出现在INSERT顶层的VALUES列表中，expression可以被DEFAULT替换以表示插入目标字段的缺省值。除此以外，当VALUES出现在其他场合的时候是不能使用DEFAULT的。

-   **sort\_expression**

    一个表示如何排序结果行的表达式或者整数常量。

-   **ASC**

    指定按照升序排列。

-   **DESC**

    指定按照降序排列。

-   **operator**

    一个排序操作符。

-   **count**

    返回的最大行数。

-   **OFFSET start \{ ROW | ROWS \}**

    声明返回的最大行数，而start声明开始返回行之前忽略的行数。

-   **FETCH \{ FIRST | NEXT \} \[ count \] \{ ROW | ROWS \} ONLY**

    FETCH子句限定返回查询结果从第一行开始的总行数，count的缺省值为1。


## 示例<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_sdb42dc749d654038b498d0f77883ae8a"></a>

请参见INSERT的[示例](INSERT.md#zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d)。

