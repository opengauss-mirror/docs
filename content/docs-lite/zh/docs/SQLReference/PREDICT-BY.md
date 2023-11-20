# PREDICT BY<a name="ZH-CN_TOPIC_0000001117479700"></a>

## 功能描述<a name="section1596413142510"></a>

利用完成训练的模型进行推测任务。

## 注意事项<a name="section766913421659"></a>

调用的模型名称在系统表gs\_model\_warehouse中可查看到。

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>轻量版场景下，openGauss提供此语法，但AI能力不可用。

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
--创建数据表
openGauss=# CREATE TABLE houses (
id INTEGER,
tax INTEGER,
bedroom INTEGER,
bath DOUBLE PRECISION,
price INTEGER,
size INTEGER,
lot INTEGER,
mark text
);
--插入训练数据
openGauss=# INSERT INTO houses(id, tax, bedroom, bath, price, size, lot, mark) VALUES
(1,590,2,1,50000,770,22100,'a+'),
(2,1050,3,2,85000,1410,12000,'a+'),
(3,20,2,1,22500,1060,3500,'a-'),
(4,870,2,2,90000,1300,17500,'a+'),
(5,1320,3,2,133000,1500,30000,'a+'),
(6,1350,2,1,90500,850,25700,'a-'),
(7,2790,3,2.5,260000,2130,25000,'a+'),
(8,680,2,1,142500,1170,22000,'a-'),
(9,1840,3,2,160000,1500,19000,'a+'),
(10,3680,4,2,240000,2790,20000,'a-'),
(11,1660,3,1,87000,1030,17500,'a+'),
(12,1620,3,2,118500,1250,20000,'a-'),
(13,3100,3,2,140000,1760,38000,'a+'),
(14,2090,2,3,148000,1550,14000,'a-'),
(15,650,3,1.5,65000,1450,12000,'a-');
--训练模型
openGauss=# CREATE MODEL price_model USING logistic_regression
 FEATURES size, lot
 TARGET mark
 FROM HOUSES
 WITH learning_rate=0.88, max_iterations=default;
——预测
openGauss=# SELECT id, PREDICT BY price_model (FEATURES size,lot) FROM houses;
——模型进行模型解析文本化任务
select gs_explain_model('price_model');
--删除模型
openGauss=# DROP MODEL price_model;
--删除表
openGauss=# DROP TABLE houses;
```

## 相关链接<a name="section998105215517"></a>

[CREATE MODEL](CREATE-MODEL.md)，[DROP MODEL](DROP-MODEL.md)

