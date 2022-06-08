# CREATE AGGREGATE<a name="ZH-CN_TOPIC_0000001127460521"></a>

## 功能描述<a name="section12436651105814"></a>

定义一个新的聚合函数。

## 语法格式<a name="section98552055195813"></a>

```
CREATE AGGREGATE name ( input_data_type [ , ... ] ) (
    SFUNC = sfunc,
    STYPE = state_data_type
    [ , FINALFUNC = ffunc ]
    [ , INITCOND = initial_condition ]
    [ , SORTOP = sort_operator ]
)

or the old syntax

CREATE AGGREGATE name (
    BASETYPE = base_type,
    SFUNC = sfunc,
    STYPE = state_data_type
    [ , FINALFUNC = ffunc ]
    [ , INITCOND = initial_condition ]
    [ , SORTOP = sort_operator ]
)
```

## 参数说明<a name="section149920095912"></a>

-   **name**

    要创建的聚合函数名\(可以有模式修饰\) 。

-   **input\_data\_type**

    该聚合函数要处理的输入数据类型。要创建一个零参数聚合函数，可以使用\*代替输入数据类型列表。 （count\(\*\)就是这种聚合函数的一个实例。 ）


-   **base\_type**

    在以前的CREATE AGGREGATE语法中，输入数据类型是通过basetype参数指定的，而不是写在聚合的名称之后。 需要注意的是这种以前语法仅允许一个输入参数。 要创建一个零参数聚合函数，可以将basetype指定为"ANY"\(而不是\*\)。


-   **sfunc**

    将在每一个输入行上调用的状态转换函数的名称。 对于有N个参数的聚合函数，sfunc必须有 +1 个参数，其中的第一个参数类型为state\_data\_type，其余的匹配已声明的输入数据类型。 函数必须返回一个state\_data\_type类型的值。 这个函数接受当前状态值和当前输入数据，并返回下个状态值。


-   **state\_data\_type**

    聚合的状态值的数据类型。


-   **ffunc**

    在转换完所有输入行后调用的最终处理函数，它计算聚合的结果。 此函数必须接受一个类型为state\_data\_type的参数。 聚合的输出数据 类型被定义为此函数的返回类型。 如果没有声明ffunc则使用聚合结果的状态值作为聚合的结果，且输出类型为state\_data\_type。


-   **initial\_condition**

    状态值的初始设置\(值\)。 它必须是一个state\_data\_type类型可以接受的文本常量值。 如果没有声明，状态值初始为 NULL 。


-   **sort\_operator**

    用于MIN或MAX类型聚合的排序操作符。 这个只是一个操作符名 \(可以有模式修饰\)。这个操作符假设接受和聚合一样的输入数据类型。


## 示例<a name="section14103104145915"></a>

```
CREATE AGGREGATE sum (complex)
(
    sfunc = complex_add,
    stype = complex,
    initcond = '(0,0)'
);

SELECT sum(a) FROM test_complex;

   sum
-----------
 (34,53.9)
```

