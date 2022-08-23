# ALTER OPERATOR<a name="ZH-CN_TOPIC_0000001127812609"></a>

## 功能描述<a name="section113331284191"></a>

修改一个操作符的定义。

## 注意事项<a name="section1685724811811"></a>

ALTER OPERATOR改变一个操作符的定义。目前唯一能用的功能是改变操作符的所有者。

要使用ALTER OPERATOR，你必须是该操作符的所有者。要修改所有者，你还必须是新的所有角色的直接或间接成员，并且该成员必须在此操作符的模式上有CREATE权限。（这些限制强制了修改该所有者不会做任何通过删除和重建操作符不能做的事情。不过，具有SYSADMIN权限用户可以以任何方式修改任意操作符的所有权。）

## 语法格式<a name="section122664751912"></a>

```
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) OWNER TO new_owner
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) SET SCHEMA new_schema
```

## 参数说明<a name="section48568352146"></a>

-   **name**

    一个现有操作符的名字。

-   **left\_type**

    操作符的左操作数的数据类型；如果没有左操作数，那么写NONE。

-   **right\_type**

    操作符的右操作数的数据类型；如果没有右操作数，那么写NONE。

-   **new\_owner**

    操作符的新所有者。

-   **new\_schema**

    操作符的新模式名。


## 示例<a name="section95851353171318"></a>

改变一个用于text的用户定义操作符a @@ b：

```
ALTER OPERATOR @@ (text, text) OWNER TO joe;
```

## 兼容性<a name="section135891317111410"></a>

SQL 标准里没有ALTER OPERATOR语句。

