# CREATE RULE<a name="ZH-CN_TOPIC_0242370587"></a>

## 功能描述<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

定义一个新的重写规则。

## 注意事项<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   为了在表上定义或修改规则，你必须是该表的拥有者。
-   如果在同一个表定义了多个相同类型的规则，则按规则的名称字母顺序触发它们。
-   在视图上用于INSERT、UPDATE、DELETE的规则中可以添加RETURNING子句基于视图的字段返回。如果规则被INSERT RETURNING、UPDATE RETURNING、DELETE RETURNING命令触发，这些子句将用来计算输出结果。如果规则被不带RETURNING的命令触发，那么规则的RETURNING子句将被忽略。目前仅允许无条件的INSTEAD规则包含RETURNING子句，而且在同一个事件内的所有规则中最多只能有一个RETURNING子句。这样就确保只有一个RETURNING子句可以用于计算结果。如果在任何有效规则中都不存在RETURNING子句，该视图上的RETURNING查询将被拒绝。

## 语法格式<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
CREATE [ OR REPLACE ] RULE name AS ON event
    TO table_name [ WHERE condition ]
    DO [ ALSO | INSTEAD ] { NOTHING | command | ( command ; command ... ) }
```

其中event包含以下几种：

```
    SELECT
    INSERT
    DELETE
    UPDATE
```

## 参数说明<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **name**

    创建的规则名。它必须在同一个表上的所有规则名字中唯一。

    取值范围：符合标识符命名规范的字符串，且最大长度不超过63个字符。

-   **table_name**

    规则作用的表或者视图的名字(可以有模式修饰)。

-   **condition**

    返回boolean的SQL条件表达式，决定是否实际执行规则。表达式除了引用NEW和OLD之外不能引用任何表， 并且不能有聚合函数。

-   **INSTEAD**

    INSTEAD指示使用该命令**替换**初始事件。

-   **ALSO**

    ALSO指示该命令应该在初始事件执行之后执行。如果既没有声明ALSO也没有声明INSTEAD， 那么ALSO为缺省值。

-   **command**

    组成规则动作的命令。有效的命令是SELECT、 INSERT、UPDATE、 DELETE语句之一。

## 示例<a name="zh-cn_topic_0237122123_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>



```
CREATE RULE "_RETURN" AS
    ON SELECT TO t1
    DO INSTEAD
        SELECT * FROM t2;
```