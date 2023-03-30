# DROP SCHEMA<a name="ZH-CN_TOPIC_0289900224"></a>

## 功能描述<a name="zh-cn_topic_0283137271_zh-cn_topic_0237122148_zh-cn_topic_0059778467_s13f49511137f4971b9f2c7f4b3ec109f"></a>

从数据库中删除模式。

## 注意事项<a name="zh-cn_topic_0283137271_zh-cn_topic_0237122148_zh-cn_topic_0059778467_s534b294ce9534c0481fb248695186280"></a>

只有模式的所有者或者被授予了模式DROP权限的用户有权限执行DROP SCHEMA命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137271_zh-cn_topic_0237122148_zh-cn_topic_0059778467_s7a099e8501ce4420a540fd891c511213"></a>

```
DROP SCHEMA [ IF EXISTS ] schema_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283137271_zh-cn_topic_0237122148_zh-cn_topic_0059778467_s265f3ed4c0e4402a8a7c984e6ac1fe33"></a>

-   **IF EXISTS**

    如果指定的模式不存在，发出一个notice而不是抛出一个错误。

-   **schema\_name**

    模式的名称。

    取值范围：已存在模式名。

-   **CASCADE | RESTRICT**
    -   CASCADE：自动删除包含在模式中的对象。
    -   RESTRICT：如果模式包含任何对象，则删除失败（缺省行为）。


>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>不要随意删除pg\_temp或pg\_toast\_temp开头的模式，这些模式是系统内部使用的，如果删除，可能导致无法预知的结果。

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>无法删除当前模式。如果要删除当前模式，须切换到其他模式下。

## 示例<a name="zh-cn_topic_0283137271_zh-cn_topic_0237122148_zh-cn_topic_0059778467_s3390f031a430477da6a945b09b36b73d"></a>

请参见CREATE SCHEMA的[示例](CREATE-SCHEMA.md#zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s05e72232af5e4507aad1511c025d7617)。

## 相关链接<a name="zh-cn_topic_0283137271_zh-cn_topic_0237122148_zh-cn_topic_0059778467_s344eb8c77efa4c209c358dd81f79034f"></a>

[ALTER SCHEMA](ALTER-SCHEMA.md)，[CREATE SCHEMA](CREATE-SCHEMA.md)。

