# DROP AUDIT POLICY<a name="ZH-CN_TOPIC_0306525305"></a>

## 功能描述<a name="zh-cn_topic_0059777864_s9274542cc63647ee9a7ed300d5e21524"></a>

删除一个审计策略。

## 注意事项<a name="zh-cn_topic_0059777864_scf0935dc3ada4baa9a77f7734edb20bb"></a>

只有poladmin、sysadmin或初始用户才能进行此操作。

## 语法格式<a name="zh-cn_topic_0059777864_sd069c15075874e97a7d0b18af750ad9d"></a>

```
DROP AUDIT POLICY [IF EXISTS] policy_name;
```

## 参数说明<a name="zh-cn_topic_0059777864_s1953ecf1c57a4c40b14f51b63062737c"></a>

policy\_name

审计策略名称，需要唯一，不可重复。

取值范围：字符串，要符合标识符的命名规范。

## 示例<a name="zh-cn_topic_0059777864_s0f84a315f2804403a4545fd742d2e09d"></a>

请参考CREATE AUDIT POLICY的[示例](CREATE-AUDIT-POLICY.md#section7854941155112)。

## 相关链接<a name="section12181292265"></a>

[ALTER AUDIT POLICY](ALTER-AUDIT-POLICY.md)，[CREATE AUDIT POLICY](CREATE-AUDIT-POLICY.md)。

