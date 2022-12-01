# CREATE OPERATOR<a name="ZH-CN_TOPIC_0000001080835908"></a>

## 功能描述<a name="section173831846163116"></a>

定义一个新操作符。

## 注意事项<a name="section786041713618"></a>

CREATE OPERATOR定义一个新的 name操作符。 定义该操作符的用户将成为其所有者。如果给出了一个模式名， 那么该操作符将在指定的模式中创建。否则它会在当前模式中创建。

操作符 name 是一个由下列字符组成的字符串：

+ - \* / < \> = \~ ! @ \# % ^ & | \` ?

选择名字的时候有几个限制：

-   --和/\*不能在操作符名的任何地方出现， 因为它们会被认为是一个注释的开始。
-   一个多字符的操作符不能以+或-结尾， 除非该名字还包含至少下面字符之一：

    \~ ! @ \# % ^ & | \` ?

-   =\> 作为一个操作符名的使用已经废弃了。

操作符!=在输入时映射成<\>， 因此这两个名称总是等价的。

至少需要定义一个LEFTARG和RIGHTARG。对于双目操作符来说， 两者都需要定义。对右目操作符来说，只需要定义LEFTARG， 而对于左目操作符来说，只需要定义RIGHTARG。

同样，function\_name 过程必须已经用CREATE FUNCTION定义过， 而且必须定义为接受正确数量的指定类型参数\(一个或是两个\)。

其它子句声明可选的操作符优化子句。他们的含义在[第 35.13 节](http://postgres.cn/docs/9.3/xoper-optimization.html)里定义。

要想能够创建一个操作符，你必须在参数类型和返回类型上有USAGE权限， 还要在底层函数上有EXECUTE权限。如果指定了交换或者负操作符， 你必须拥有这些操作符。

## 语法格式<a name="section8642194219107"></a>

```
CREATE OPERATOR name (
    PROCEDURE = function_name
    [, LEFTARG = left_type ] [, RIGHTARG = right_type ]
    [, COMMUTATOR = com_op ] [, NEGATOR = neg_op ]
    [, RESTRICT = res_proc ] [, JOIN = join_proc ]
    [, HASHES ] [, MERGES ]
)
```

## 参数说明<a name="section16332145219811"></a>

-   **name**

    要定义的操作符。可用的字符见上文。其名字可以用模式修饰， 比如CREATE OPERATOR myschema.+ \(...\)。如果没有模式， 则在当前模式中创建操作符。同一个模式中的两个操作符可以有一样的名字， 只要他们操作不同的数据类型。这是一个重载过程。

-   **function\_name**

    用于实现该操作符的函数。

-   **left\_type**

    操作符左边的参数数据类型，如果存在的话。如果是左目操作符，这个参数可以省略。

-   **right\_type**

    操作符右边的参数数据类型，如果存在的话。如果是右目操作符，这个参数可以省略。

-   **com\_op**

    该操作符对应的交换操作符。

-   **neg\_op**

    该操作符对应的负操作符。

-   **res\_proc**

    此操作符约束选择性评估函数。

-   **join\_proc**

    此操作符连接选择性评估函数。

-   **HASHES**

    表明此操作符支持 Hash 连接。

-   **MERGES**

    表明此操作符可以支持一个融合连接。

    使用OPERATOR\(\)语法在com\_op 或者其它可选参数里给出一个模式修饰的操作符名，比如：

    ```
    COMMUTATOR = OPERATOR(myschema.===) ,
    ```


## 示例<a name="section64461832121211"></a>

下面命令定义一个新操作符：面积相等，用于box数据类型。

```
CREATE OPERATOR === (
    LEFTARG = box,
    RIGHTARG = box,
    PROCEDURE = area_equal_procedure,
    COMMUTATOR = ===,
    NEGATOR = !==,
    RESTRICT = area_restriction_procedure,
    JOIN = area_join_procedure,
    HASHES, MERGES
);
```
