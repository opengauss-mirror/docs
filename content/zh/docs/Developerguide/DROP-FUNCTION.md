# DROP FUNCTION<a name="ZH-CN_TOPIC_0289900712"></a>

## 功能描述<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_se0a88dccf4a449189e3598bd873250fe"></a>

删除一个已存在的函数。

## 注意事项<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_s8faef0d4b5934393b67d84ec2e34b07d"></a>

-   如果函数中涉及对临时表相关操作，则无法使用DROP FUNCTION删除函数。
-   只有函数的所有者或者被授予了函数DROP权限的用户才能执行DROP FUNCTION命令，系统管理员默认拥有该权限。
-   通过[DROP PROCEDURE](DROP-PROCEDURE.md)语法也能删除函数。

## 语法格式<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_s1aad0e4026434244b8879b36ec9adaff"></a>

```
DROP FUNCTION [ IF EXISTS ] function_name
[ ( [ {[ argname ] [ argmode ] argtype} [, ...] ] ) [ CASCADE | RESTRICT ] ];
```

## 参数说明<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_sf080415ead494e02bd48dbc9ec81a573"></a>

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

    函数参数的类型。


## 示例<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_s4c0a49238b6c41bdbf9c9cbd3aabcf08"></a>

请参见的[示例](CREATE-FUNCTION.md#zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821)。

## 相关链接<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_sf722b7d9e13547449d559364553b790a"></a>

[ALTER FUNCTION](ALTER-FUNCTION.md)，[CREATE FUNCTION](CREATE-FUNCTION.md)
