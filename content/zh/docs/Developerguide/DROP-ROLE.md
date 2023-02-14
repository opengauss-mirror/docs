# DROP ROLE

## 功能描述<a name="zh-cn_topic_0283136937_zh-cn_topic_0237122147_zh-cn_topic_0059778848_s77851fcd69534eafbd3b79f15670b201"></a>

删除指定的角色。

## 注意事项<a name="zh-cn_topic_0283136937_zh-cn_topic_0237122147_zh-cn_topic_0059778848_s9197d0d79df943d1881df7c945bf030d"></a>

无。

## 语法格式<a name="zh-cn_topic_0283136937_zh-cn_topic_0237122147_zh-cn_topic_0059778848_s5e3af30cc42b4f62bbe1fa4e6d7fc607"></a>

```
DROP ROLE [ IF EXISTS ] role_name [, ...];
```

## 参数说明<a name="zh-cn_topic_0283136937_zh-cn_topic_0237122147_zh-cn_topic_0059778848_sabe550f7ed48409b8ffd1d88ca9f0725"></a>

-   **IF EXISTS**

    如果指定的角色不存在，则发出一个notice而不是抛出一个错误。

-   **role\_name**

    要删除的角色名称。

    取值范围：已存在的角色。


## 示例<a name="zh-cn_topic_0283136937_zh-cn_topic_0237122147_zh-cn_topic_0059778848_s40114b50f3f046c18213beaa37b84f59"></a>

请参见CREATE ROLE的[示例](CREATE-ROLE.md#zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e)。

## 相关链接<a name="zh-cn_topic_0283136937_zh-cn_topic_0237122147_zh-cn_topic_0059778848_sbaf144c395d044f88acd5e545bf09f97"></a>

[CREATE ROLE](CREATE-ROLE.md)，[ALTER ROLE](ALTER-ROLE.md)，[SET ROLE](SET-ROLE.md)
