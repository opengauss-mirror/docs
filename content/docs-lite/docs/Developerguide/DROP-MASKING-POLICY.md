# DROP MASKING POLICY<a name="ZH-CN_TOPIC_0306525306"></a>

## 功能描述<a name="zh-cn_topic_0059777864_s9274542cc63647ee9a7ed300d5e21524"></a>

删除脱敏策略。

## 注意事项<a name="zh-cn_topic_0059777864_scf0935dc3ada4baa9a77f7734edb20bb"></a>

只有poladmin，sysadmin或初始用户才能执行此操作。

## 语法格式<a name="zh-cn_topic_0059777864_sd069c15075874e97a7d0b18af750ad9d"></a>

```
DROP MASKING POLICY [IF EXISTS] policy_name;
```

## 参数说明<a name="zh-cn_topic_0059777864_s1953ecf1c57a4c40b14f51b63062737c"></a>

**policy\_name**

审计策略名称，需要唯一，不可重复。

取值范围：字符串，要符合标识符的命名规范。

## 示例<a name="zh-cn_topic_0059777864_s0f84a315f2804403a4545fd742d2e09d"></a>

```
--删除一个脱敏策略。
openGauss=# DROP MASKING POLICY IF EXISTS maskpol1;

--删除一组脱敏策略。
openGauss=# DROP MASKING POLICY IF EXISTS maskpol1, maskpol2, maskpol3;
```

## 相关链接<a name="section12181292265"></a>

[ALTER MASKING POLICY](ALTER-MASKING-POLICY.md)，[CREATE MASKING POLICY](CREATE-MASKING-POLICY.md)。

