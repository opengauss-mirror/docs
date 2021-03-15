# DROP OPERATOR<a name="ZH-CN_TOPIC_0000001080547824"></a>

## 功能描述<a name="section113331284191"></a>

删除一个操作符。

## 注意事项<a name="section1685724811811"></a>

DROP OPERATOR语句从数据库中删除一个现存的操作符。 要执行这个命令，你必须是操作符所有者。

## 语法格式<a name="section122664751912"></a>

```
DROP OPERATOR [ IF EXISTS ] name ( { left_type | NONE } , { right_type | NONE } ) [ CASCADE | RESTRICT ]
```

## 参数说明<a name="section48568352146"></a>

-   **IF EXISTS**

    如果指定的操作符不存在，那么发出一个 notice 而不是抛出一个错误。

-   **name**

    一个现存的操作符的名字\(可以有模式修饰\)。

-   **left\_type**

    该操作符左操作数的类型。如果没有则写NONE。

-   **right\_type**

    该操作符右操作数的类型。如果没有则写NONE。

-   **CASCADE**

    级联删除依赖于此操作符的所有对象。

-   **RESTRICT**

    如果有任何依赖对象则拒绝删除此操作符。这个是缺省项。


## 示例<a name="section95851353171318"></a>

将用于integer的幂操作符a^b删除：

```
DROP OPERATOR ^ (integer, integer);
```

为类型bit删除左单目位操作符\~b：

```
DROP OPERATOR ~ (none, bit);
```

删除用于bigint的阶乘x!：

```
DROP OPERATOR ! (bigint, none);
```

## 兼容性<a name="section135891317111410"></a>

SQL 标准里没有DROP OPERATOR语句

