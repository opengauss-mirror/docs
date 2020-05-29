# DROP FUNCTION<a name="ZH-CN_TOPIC_0242370602"></a>

## 功能描述<a name="zh-cn_topic_0237122138_zh-cn_topic_0059778261_se0a88dccf4a449189e3598bd873250fe"></a>

删除一个已存在的函数。

## 注意事项<a name="zh-cn_topic_0237122138_zh-cn_topic_0059778261_s8faef0d4b5934393b67d84ec2e34b07d"></a>

如果函数中涉及对临时表相关操作，则无法使用DROP FUNCTION删除函数。

## 语法格式<a name="zh-cn_topic_0237122138_zh-cn_topic_0059778261_s1aad0e4026434244b8879b36ec9adaff"></a>

```
DROP FUNCTION [ IF EXISTS ] function_name 
[ ( [ {[ argmode ] [ argname ] argtype} [, ...] ] ) [ CASCADE | RESTRICT ] ];
```

## 参数说明<a name="zh-cn_topic_0237122138_zh-cn_topic_0059778261_sf080415ead494e02bd48dbc9ec81a573"></a>

-   **IF EXISTS**

    IF EXISTS表示，如果函数存在则执行删除操作，函数不存在也不会报错，只是发出一个notice。

-   **function\_name**

    要删除的函数名称。

    取值范围：已存在的函数名。

-   **argmode**

    函数参数的模式。

-   **argname**

    函数参数的名称。

-   **argtype**

    函数参数的类型

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖于函数的对象（比如操作符） 。
    -   RESTRICT：如果有任何依赖对象存在，则拒绝删除该函数（缺省行为）。


## 示例<a name="zh-cn_topic_0237122138_zh-cn_topic_0059778261_s4c0a49238b6c41bdbf9c9cbd3aabcf08"></a>

请参见CREATE FUNCTION的[SQL参考](SQL参考.md)。

## 相关链接<a name="zh-cn_topic_0237122138_zh-cn_topic_0059778261_sf722b7d9e13547449d559364553b790a"></a>

[ALTER FUNCTION](ALTER-FUNCTION.md)，[CREATE FUNCTION](CREATE-FUNCTION.md)

