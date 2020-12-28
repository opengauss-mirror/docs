# ALTER RULE<a name="ZH-CN_TOPIC_0242370587"></a>

## 功能描述<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

修改一个规则的定义。

## 注意事项<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   要使用ALTER RULE，用户必须是应用了指定规则的表或视图的所有者。
-   目前仅可以修改规则的名称。


## 语法格式<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
ALTER RULE name ON table_name RENAME TO new_name
```

## 参数说明<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **name**

    要修改规则的名称。

-   **table_name**

    需要创建规则的表名称。

    取值范围：数据库中已经存在的表名称。

-   **new_name**

    规则的新名称。

## 示例<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
ALTER RULE notify_all ON emp RENAME TO notify_me;
```
