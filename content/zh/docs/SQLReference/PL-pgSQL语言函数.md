# PL/pgSQL语言函数

PL/pgSQL是一种可载入的过程语言。

用PL/pgSQL创建的函数可以被用在任何可以使用内建函数的地方。例如，可以创建复杂条件的计算函数并且后面用它们来定义操作符或把它们用于索引表达式。

SQL被大多数数据库用作查询语言。它是可移植的并且容易学习。但是每一个SQL语句必须由数据库服务器单独执行。

这意味着客户端应用必须发送每一个查询到数据库服务器、等待它被处理、接收并处理结果、做一些计算，然后发送更多查询给服务器。如果客户端和数据库服务器不在同一台机器上，则会引起进程间通信并且将带来网络负担。

通过PL/pgSQL，可以将一整块计算和一系列查询分组在数据库服务器内部，这样就有了一种过程语言的能力并且使SQL更易用，同时能节省客户端/服务器通信开销。

-   客户端和服务器之间的额外往返通信被消除。
-   客户端不需要的中间结果不必被整理或者在服务器和客户端之间传送。
-   多轮的查询解析可以被避免。

PL/pgSQL可以使用SQL中所有的数据类型、操作符和函数。一些常见函数，例如gs_extend_library。

应用PL/pgSQL创建函数的语法为[CREATE FUNCTION](CREATE-FUNCTION.md)。PL/pgSQL是一种可载入的过程语言。其应用方法与[存储过程](存储过程.md)相似，只是存储过程无返回值，函数有返回值。

## PL/pgSQL的语法结构
PL/pgSQL用于创建函数时，函数体是以字符串的形式存在的，比如
```sql
CREATE FUNCTION somefunc(integer, text) RETURNS integer LANGUAGE plpgsql
AS 'function body text';
```
由于函数体是字符串，所以其中的单引号或者反斜线都要通过双写来转义，这可能会导致可读性变差，我们可以使用$符号引用的方式来改善这种情况。

一个\$符号引用的字符串常量由一个\$符号、可选的标签名、另一个\$符号、字符串内容、一个\$符号、上面相同的标签名、另一个\$符号组成。例如以两种不同方式的\$引用的字符串常量表示"openGauss's great"：
```
$$openGauss's great$$
$someTag$openGauss's great$someTag$
```
注意在字符串内容中，不需要对任何字符进行转义。

所以上面使用PL/pgSQL创建函数的语句等价于：
```sql
CREATE FUNCTION somefunc(integer, text) RETURNS integer LANGUAGE plpgsql AS 
$$
function body text
$$;
```

PL/pgSQL是一种块结构的语言。一个函数体的完整文本必须是一个块，它的语法结构为：
```
[ <<label>> ]
[ DECLARE decalarations ]
BEGIN
    statements
END [ label ];
```
如果你想要标识一个块以便在一个EXIT语句中使用或者标识在该块中声明的变量名，那么使用label就可以轻松达到目的。

一个块的语句节中的任何语句可以是一个子块。子块可以被用来逻辑分组或者将变量局部化为语句的一个小组。在子块的持续期间，在一个子块中声明的变量会掩盖外层块中相同名称的变量。但是如果你用块的标签限定外层变量的名字，你仍然可以访问它们。一个嵌套的示例如下：
```sql
CREATE FUNCTION somefunc() RETURNS integer AS $$
<< outerblock >>
DECLARE
    quantity integer := 30;
BEGIN
    RAISE NOTICE 'Quantity here is %', quantity;  -- Prints 30
    quantity := 50;
    --
    -- 创建一个子块
    --
    DECLARE
        quantity integer := 80;
    BEGIN
        RAISE NOTICE 'Quantity here is %', quantity;  -- Prints 80
        RAISE NOTICE 'Outer quantity here is %', outerblock.quantity;  -- Prints 50
    END;

    RAISE NOTICE 'Quantity here is %', quantity;  -- Prints 50

    RETURN quantity;
END outerblock;
$$ LANGUAGE plpgsql;
```
不要把PL/pgSQL中用来分组语句的BEGIN/END与用于事务控制的同名SQL命令弄混。PL/pgSQL的BEGIN/END只用于分组，它们不会开始或结束一个事务。
