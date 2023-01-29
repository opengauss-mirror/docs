# CREATE RULE<a name="ZH-CN_TOPIC_0306398142"></a>

## 功能描述<a name="section189661819135511"></a>

定义一个新的重写规则。

## 注意事项<a name="section7961133411551"></a>

-   为了在表上定义或修改规则，你必须是该表的拥有者。
-   如果在同一个表定义了多个相同类型的规则，则按规则的名称字母顺序触发它们。
-   在视图上用于INSERT、UPDATE、DELETE的规则中可以添加RETURNING子句基于视图的字段返回。如果规则被INSERT RETURNING、UPDATE RETURNING、DELETE RETURNING命令触发，这些子句将用来计算输出结果。如果规则被不带RETURNING的命令触发，那么规则的RETURNING子句将被忽略。目前仅允许无条件的INSTEAD规则包含RETURNING子句，而且在同一个事件内的所有规则中最多只能有一个RETURNING子句。这样就确保只有一个RETURNING子句可以用于计算结果。如果在任何有效规则中都不存在RETURNING子句，该视图上的RETURNING查询将被拒绝。
-   目前，ON SELECT规则必须是无条件的INSTEAD规则并且必须有一个由单独一条SELECT查询组成的动作。因此，一条ON SELECT规则实际上把表变成了一个视图，它的可见内容是由该规则的SELECT命令返回，而不是直接存在该表中的内容（如果有）。
-   不建议在rule内使用列存表，尤其是一些写操作。因为列存表与行存表的架构实现、事务处理等存在很大差异，因此rule的表现也会有很多与行存表不同的地方。

## 语法格式<a name="section139076585551"></a>

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

## 参数说明<a name="section169527814566"></a>

-   name

    创建的规则名。它必须在同一个表上的所有规则名字中唯一。

    取值范围：符合标识符命名规范的字符串，且最大长度不超过63个字符。

-   event

    SELECT、INSERT、UPDATE、DELETE事件之一。

-   table\_name

    规则作用的表或者视图的名字\(可以有模式修饰\)。

-   condition

    返回boolean的SQL条件表达式，决定是否实际执行规则。表达式除了引用NEW和OLD之外不能引用任何表，并且不能有聚合函数。不建议使用int等数值类型作为condition，因为int等数值类型可以隐式转换为bool值（非0值隐式转换为true，0转换为false），可能导致非预期的结果。

-   INSTEAD

    INSTEAD指示使用该命令替换初始事件。

-   ALSO

    ALSO指示该命令应该在初始事件执行之后执行。如果既没有声明ALSO也没有声明INSTEAD， 那么ALSO为缺省值。

-   command

    组成规则动作的命令。有效的命令是SELECT、 INSERT、UPDATE、 DELETE语句之一。


## 示例<a name="section8357162720577"></a>

```
 CREATE RULE "_RETURN" AS
    ON SELECT TO t1
    DO INSTEAD
        SELECT * FROM t2;
```

>![](public_sys-resources/icon-notice.gif) ***\*须知：\**** 
>- `ON SELECT`后指定的规则名必须为`"_RETURN"`
>- 目前，`ON SELECT`规则必须是`INSTEAD SELECT`，而且`TO`所指定的表会被转为视图，这个前提是该表**为空**且不带有触发器、索引、子表等限制，也即必须为一张**初始的空表**。
> 因此，一般不建议采用这种写法，而是直接创建视图。