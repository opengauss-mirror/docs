# DROP ACCESS METHOD

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:21:10.887Z -->

## Description<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s6e7bed7d44604f749e4ea7043f81b07b"></a>

Removes an existing access method. Only a superuser can drop an access method.

## Precautions<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_saafc32e8c71d4cb7b7d30678c9e4658d"></a>

System-built-in access methods cannot be dropped.

## Syntax<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s79208f25fe214e06b6c7f661c030f3d1"></a>

```
DROP ACCESS METHOD [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s99e6f6efb9f3448f9de8894607958cd3"></a>

- **IF EXISTS**

    If the specified access method does not exist, a notice is issued instead of throwing an error.

- **name**

    Name of the access method to be dropped.

    Value range: An existing access method that is not a system-built-in access method.

- **CASCADE | RESTRICT**
    - CASCADE: Allows cascade deletion of objects that depend on this access method.
    - RESTRICT (default value): Indicates that the access method cannot be dropped if there are objects that depend on it.

## Example<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s95dd4a9a45334e81be4841d86d7a47f1"></a>

```

--Drop the access method ivfflat.
DROP ACCESS METHOD ivfflat;
```

## Related Links<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s299c55b981d1489986df6a6cf27b73d1"></a>

[CREATE ACCESS METHOD](create_access_method.md)
