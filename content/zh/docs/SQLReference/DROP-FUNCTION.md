# DROP FUNCTION

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

-   **CASCADE**

    自动删除依赖于该函数的对象（例如操作符和触发器），并删除所有依赖于这些对象的对象。

-   **RESTRICT**

    不删除依赖于该函数的对象（默认）。如果仅存在视图依赖对象，则允许删除该函数，否则拒绝删除。查询视图时会提示相应依赖错误；新建函数如果参数和返回值与视图依赖相匹配，在查询视图时会重新建立与新函数的依赖，恢复视图。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >-   删除视图依赖函数功能支持普通视图和物化视图，增量物化视图不支持。


## 示例<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_s4c0a49238b6c41bdbf9c9cbd3aabcf08"></a>

以下命令删除平方根函数：

```
DROP FUNCTION sqrt(integer);
```

如果函数名在其模式中是唯一的，则可以在不带参数列表的情况下引用它，以下命令会删除具有任意数量参数的函数（包括零）：

```
DROP FUNCTION update_employee_salaries;
```

与此不同的是，以下命令删除的函数具有的参数个数为零：

```
DROP FUNCTION update_employee_salaries();
```

## 相关链接<a name="zh-cn_topic_0283137306_zh-cn_topic_0237122138_zh-cn_topic_0059778261_sf722b7d9e13547449d559364553b790a"></a>

[ALTER FUNCTION](ALTER-FUNCTION.md)，[CREATE FUNCTION](CREATE-FUNCTION.md)

