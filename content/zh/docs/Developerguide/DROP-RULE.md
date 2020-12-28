# DROP RULE<a name="ZH-CN_TOPIC_0242370587"></a>

## 功能描述<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

删除一个重写规则

## 语法格式<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
DROP RULE [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## 参数说明<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **IF EXISTS**

    如果该规则不存在，会抛出一个NOTICE。

-   **name**

    要删除的现存规则名称。

-   **table_name**

    该规则应用的表名。

-   **CASCADE**

    自动级联删除依赖于此规则的对象。

-   **RESTRICT**

    如果有任何依赖对象，则拒绝删除此规则。此为缺省值。

## 示例<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
--删除重写规则newrule
DROP RULE newrule ON mytable;
```