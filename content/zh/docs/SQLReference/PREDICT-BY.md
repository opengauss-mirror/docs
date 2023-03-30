# PREDICT BY<a name="ZH-CN_TOPIC_0000001117479700"></a>

## 功能描述<a name="section1596413142510"></a>

利用完成训练的模型进行推测任务。

## 注意事项<a name="section766913421659"></a>

调用的模型名称在系统表gs\_model\_warehouse中可查看到。

## 语法格式<a name="section74427451052"></a>

```
PREDICT BY model_name [ (FEATURES attribute [, attribute] +]) ]
```

## 参数说明<a name="section1885554716517"></a>

-   model\_name

    用于推测任务的模型名称。

    取值范围：字符串，需要符合标识符的命名规则。

-   attribute

    推测任务的输入特征列名。

    取值范围：字符串，需要符合标识符的命名规则。


## 示例<a name="section9624150554"></a>

```
SELECT id, PREDICT BY price_model (FEATURES size,lot), price
FROM houses;
```

## 相关链接<a name="section998105215517"></a>

[CREATE MODEL](CREATE-MODEL.md)，[DROP MODEL](DROP-MODEL.md)

