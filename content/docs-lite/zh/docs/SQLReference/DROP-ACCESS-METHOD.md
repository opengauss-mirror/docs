# DROP ACCESS METHOD

## 功能描述<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s6e7bed7d44604f749e4ea7043f81b07b"></a>

移除一种现有的访问方法。只有超级用户能够删除访问方法。。

## 注意事项<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_saafc32e8c71d4cb7b7d30678c9e4658d"></a>

不允许移除系统内置的访问方法。

## 语法格式<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s79208f25fe214e06b6c7f661c030f3d1"></a>

```
DROP ACCESS METHOD [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s99e6f6efb9f3448f9de8894607958cd3"></a>

-   **IF EXISTS**

    如果指定的访问方法不存在，则发出一个notice而不是抛出一个错误。

-   **name**

    要移除的访问方法的名称。

    取值范围：已存在，且非系统内置的访问方法。

-   **CASCADE | RESTRICT**
    -   CASCADE：表示允许级联删除依赖于该访问方法的对象。
    -   RESTRICT（缺省值）：表示有依赖与此访问方法的对象存在，则该访问方法无法被删除。


## 示例<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s95dd4a9a45334e81be4841d86d7a47f1"></a>

```

--删除访问方法ivfflat。
DROP ACCESS METHOD ivfflat;
```

## 相关链接<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s299c55b981d1489986df6a6cf27b73d1"></a>

[CREATE ACCESS METHOD](CREATE-ACCESS-METHOD.md)