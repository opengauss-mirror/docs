# CREATE MODEL<a name="ZH-CN_TOPIC_0000001117639598"></a>

## 功能描述<a name="section94489231810"></a>

训练机器学习模型并保存模型。

## 注意事项<a name="section428216371487"></a>

-   模型名称具有唯一性约束，注意命名格式。
-   AI训练时长波动较大，在部分情况下训练运行时间较长，设置的GUC参数statement\_timeout时长过短会导致训练中断。建议statement\_timeout设置为0，不对语句执行时长进行限制。

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss提供此语法，但AI能力不可用。

## 语法格式<a name="section187451047882"></a>

```
CREATE  MODEL model_name USING architecture_name
FEATURES { {attribute_list} }
[TARGET attribute_name, [,attribute_name]*],
FROM ([schema.]table_name | subquery)
WITH (hyper_parameter_name [= {hp_value | DEFAULT}]) [, ...]*]
```

## 参数说明<a name="section19493195215818"></a>

-   **model\_name**

    对训练模型进行命名，模型名称具有唯一性约束。

    取值范围：字符串，需要符合标识符的命名规范。

-   **architecture\_name**

    训练模型的算法类型。

    取值范围：字符型，当前支持：logistic\_regression、linear\_regression、svm\_classification、kmeans。

-   **attribute\_list**

    枚举训练模型的输入列名。

    取值范围：字符型，需要符合数据属性名的命名规范。

-   **attribute\_name**

    在监督学习任务重训练模型的目标列名\(可进行简单的表达式处理\)。

    取值范围：字符型，需要符合数据属性名的命名规范。

-   **subquery**

    数据源。

    取值范围：字符串，符合数据库SQL语法。

-   **hyper\_parameter\_name**

    机器学习模型的超参名称。

    取值范围：字符串，针对不同算法范围不同。

-   **hp\_value**

    超参数值。

    取值范围：字符串，针对不同算法范围不同。


## 示例<a name="section10367355883"></a>

```
CREATE MODEL price_model USING logistic_regression
 FEATURES size, lot
 TARGET price
 FROM HOUSES
 (WITH learning_rate=0.88, max_iterations=default);
```

## 相关链接<a name="section084411512195"></a>

[DROP MODEL](DROP-MODEL.md)，[PREDICT BY](PREDICT-BY.md)

