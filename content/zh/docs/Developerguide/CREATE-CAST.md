# CREATE CAST

## 功能描述<a name="section173831846163116"></a>

定义一个用户自定义的转换。

## 语法格式<a name="section1374719912321"></a>

```
CREATE CAST (source_type AS target_type)
    WITH FUNCTION function_name (argument_type [, ...])
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (source_type AS target_type)
    WITHOUT FUNCTION
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (source_type AS target_type)
    WITH INOUT
    [ AS ASSIGNMENT | AS IMPLICIT ]
```

## 参数说明<a name="section62781959163314"></a>

-   **source\_type**

    转换的源数据类型。

-   **target\_type**

    转换的目标数据类型。

-   **function\_name\(argument\_type \[, ...\]\)**

    用于执行转换的函数。这个函数名可以是用模式名修饰的。如果它没有用模式名修饰，那么该函数将从模式搜索路径中找出来。函数的结果数据类型必须匹配转换的目标类型。 它的参数在下面讨论。

-   **WITHOUT FUNCTION**

    表明源类型是对目标类型是二进制可强制转换的，所以没有函数需要执行此转换。

-   **WITH INOUT**

    表明转换是I/O转换，通过调用源数据类型的输出函数来执行，并将结果传给目标数据类型的输入函数。

-   **AS ASSIGNMENT**

    表示转换可以在赋值模式下隐含调用。

-   **AS IMPLICIT**

    表示转换可以在任何环境里隐含调用。

    转换实现函数可以有一到三个参数。第一个参数的类型必须与转换的源类型相同的，或可以从转换的源类型二进制可强制转换的。第二个参数，如果存在，必须是integer类型；它接收这些与目标类型相关联的类型修饰符，或者若什么都没有则是-1。第三个参数，如果存在，必须是boolean类型；若转换是一个显式类型转换则会收到true，否则是false。

    一个转换函数的返回类型必须是与转换的目标类型相同或者对转换的目标类型二进制可强制转换 。

    通常，一个转换必须有不同的源和目标数据类型。然而，若有多于一个参数的转换实现函数，则允许声明一个有相同的源和目标类型的转换。这用于表示系统目录中的特定类型的长度强制函数。命名的函数用于强制一个该类型的值为第二个参数给出的类型修饰符值。

    如果一个类型转换的源类型和目标类型不同，并且接收多于一个参数，它就表示从一种类型转换成另外一种类型只用一个步骤，并且同时实施长度转换。如果没有这样的项可用， 那么转换成一个使用了类型修饰词的类型将涉及两个步骤，一个是在数据类型之间转换， 另外一个是施加修饰词指定的转换。

    对域类型的转换目前没有作用。转换一般是针对域相关的所属数据类型。


## 示例<a name="section14411351193419"></a>

为了从类型bigint到类型int4创建一个指派映射要通过使用函数int4\(bigint\):

```
CREATE CAST (bigint AS int4) WITH FUNCTION int4(bigint) AS ASSIGNMENT;
```

（这个转换在系统中已经预先定义了。）

## 兼容性<a name="section9989313154010"></a>

CREATE CAST指令符合SQL标准，除了SQL没有为二进制可强制转换类型或者实现函数的额外参数来实现功能。
