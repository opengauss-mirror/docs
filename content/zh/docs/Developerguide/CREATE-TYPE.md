# CREATE TYPE<a name="ZH-CN_TOPIC_0289900603"></a>

## 功能描述<a name="zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_sc0d0ea7296f7418d8e0b1a8878cf72ba"></a>

在当前数据库中定义一种新的数据类型。定义数据类型的用户将成为该数据类型的拥有者。类型只适用于行存表

有五种形式的CREATE TYPE，分别为：复合类型、基本类型、shell类型、枚举类型和集合类型。

-   复合类型

    复合类型由一个属性名和数据类型的列表指定。如果属性的数据类型是可排序的，也可以指定该属性的排序规则。复合类型本质上和表的行类型相同，但是如果只想定义一种类型，使用CREATE TYPE避免了创建一个实际的表。单独的复合类型也是很有用的，例如可以作为函数的参数或者返回类型。

    为了能够创建复合类型，必须拥有在其所有属性类型上的USAGE特权。

-   基本类型

    用户可以自定义一种新的基本类型（标量类型）。通常来说这些函数必须是底层语言所编写。

-   shell类型

    shell类型是一种用于后面要定义的类型的占位符，通过发出一个不带除类型名之外其他参数的CREATE TYPE命令可以创建这种类型。在创建基本类型时，需要shell类型作为一种向前引用。

-   枚举类型

    由若干个标签构成的列表，每一个标签值都是一个非空字符串，且字符串长度必须不超过63个字节。
    
- 集合类型

  类似数组，但是没有长度限制，主要在存储过程中使用。

- 被授予CREATE ANY TYPE权限的用户，可以在public模式和用户模式下创建类型。


## 注意事项<a name="zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_sae4035e7748641d3bca61cd89db0e80e"></a>

如果给定一个模式名，那么该类型将被创建在指定的模式中。否则它会被创建在当前模式中。类型名称必须与同一个模式中任何现有的类型或者域相区别（因为表具有相关的数据类型，类型名称也必须与同一个模式中任何现有表的名称不同）。

## 语法格式<a name="zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_s3e7f4ca520974d6984e85b855c05a489"></a>

```
CREATE TYPE name AS
    ( [ attribute_name data_type [ COLLATE collation ] [, ... ] ] )

CREATE TYPE name (
    INPUT = input_function,
    OUTPUT = output_function
    [ , RECEIVE = receive_function ]
    [ , SEND = send_function ]
    [ , TYPMOD_IN =
type_modifier_input_function ]
    [ , TYPMOD_OUT =
type_modifier_output_function ]
    [ , ANALYZE = analyze_function ]
    [ , INTERNALLENGTH = { internallength |
VARIABLE } ]
    [ , PASSEDBYVALUE ]
    [ , ALIGNMENT = alignment ]
  [ , STORAGE = storage ]
    [ , LIKE = like_type ]
    [ , CATEGORY = category ]
    [ , PREFERRED = preferred ]
    [ , DEFAULT = default ]
    [ , ELEMENT = element ]
    [ , DELIMITER = delimiter ]
    [ , COLLATABLE = collatable ]
)

CREATE TYPE name

CREATE TYPE name AS ENUM
    ( [ 'label' [, ... ] ] )
   
CREATE TYPE name AS TABLE OF data_type
```

## 参数说明<a name="zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

复合类型

-   **name**

    要创建的类型的名称（可以被模式限定）。

-   **attribute\_name**

    复合类型的一个属性（列）的名称。

-   **data\_type**

    要成为复合类型的一个列的现有数据类型的名称。可以使用%ROWTYPE间接引用表的类型，或者使用%TYPE间接引用表或复合类型中某一列的类型。

-   **collation**

    要关联到复合类型的一列的现有排序规则的名称。排序规则可以使用“select \* from pg\_collation”命令从pg\_collation系统表中查询，默认的排序规则为查询结果中以default开始的行。


基本类型

自定义基本类型时，参数可以以任意顺序出现，input\_function和output\_function为必选参数，其它为可选参数。

- **input\_function**

  将数据从类型的外部文本形式转换为内部形式的函数名。

  输入函数可以被声明为有一个cstring类型的参数，或者有三个类型分别为cstring、 oid、integer的参数。

  -   cstring参数是以C字符串存在的输入文本。
  -   oid参数是该类型自身的OID（对于数组类型则是其元素类型的OID）。
  -   integer参数是目标列的typmod（如果知道，不知道则将传递 -1）。

  输入函数必须返回一个该数据类型本身的值。通常，一个输入函数应该被声明为STRICT。 如果不是这样，在读到一个NULL输入值时，调用输入函数时第一个参数会是NULL。在这种情况下，该函数必须仍然返回NULL，除非调用函数发生了错误（这种情况主要是想支持域输入函数，域输入函数可能需要拒绝NULL输入）。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >+ 输入和输出函数能被声明为具有新类型的结果或参数是因为：必须在创建新类型之前创建这两个函数。而新类型应该首先被定义为一种shell type，它是一种占位符类型，除了名称和拥有者之外它没有其他属性。这可以通过不带额外参数的命令CREATE TYPE name做到。然后用C写的I/O函数可以被定义为引用这种shell type。最后，用带有完整定义的CREATE TYPE把该shell type替换为一个完全的、合法的类型定义，之后新类型就可以正常使用了。
  >+ 输入和输出函数若为internel类型且指定为内部系统函数，则其输入函数和输出函数的参数类型需保持一致，且新类型的INTERNALLENGTH和PASSEDBYVALUE需要与输入函数和输出函数的参数类型保持一致。

-   **output\_function**

    将数据从类型的内部形式转换为外部文本形式的函数名。

    输出函数必须被声明为有一个新数据类型的参数。输出函数必须返回类型cstring。对于NULL值不会调用输出函数。

-   **receive\_function**

    可选参数。将数据从类型的外部二进制形式转换成内部形式的函数名。

    如果没有该函数，该类型不能参与到二进制输入中。二进制表达转换成内部形式代价更低，然而却更容易移植（例如，标准的整数数据类型使用网络字节序作为外部二进制表达，而内部表达是机器本地的字节序）。receive\_function应该执行足够的检查以确保该值是有效的。

    接收函数可以被声明为有一个internal类型的参数，或者有三个类型分别为internal、oid、integer的参数。

    -   internal参数是一个指向StringInfo缓冲区的指针，其中保存着接收到的字节串。
    -   oid和integer参数和文本输入函数的相同。

    接收函数必须返回一个该数据类型本身的值。通常，一个接收函数应该被声明为STRICT。如果不是这样，在读到一个NULL输入值时调用接收函数时第一个参数会是NULL。在这种情况下，该函数必须仍然返回NULL，除非接收函数发生了错误（这种情况主要是想支持域接收函数，域接收函数可能需要拒绝NULL输入）。

-   **send\_function**

    可选参数。将数据从类型的内部形式转换为外部二进制形式的函数名。

    如果没有该函数，该类型将不能参与到二进制输出中。发送函数必须被声明为有一个新数据类型的参数。发送函数必须返回类型bytea。对于NULL值不会调用发送函数。

-   **type\_modifier\_input\_function**

    可选参数。将类型的修饰符数组转换为内部形式的函数名。

-   **type\_modifier\_output\_function**

    可选参数。将类型的修饰符的内部形式转换为外部文本形式的函数名。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >如果该类型支持修饰符（附加在类型声明上的可选约束，例如，char\(5\)或numeric\(30,2\)），则需要可选的type\_modifier\_input\_function以及type\_modifier\_output\_function。openGauss允许用户定义的类型有一个或者多个简单常量或者标识符作为修饰符。不过，为了存储在系统目录中，该信息必须能被打包到一个非负整数值中。所声明的修饰符会被以cstring数组的形式传递给type\_modifier\_input\_function。 type\_modifier\_input\_function必须检查该值的合法性（如果值错误就抛出一个错误），如果值正确，要返回一个非负integer值，该值将被存储在“typmod”列中。如果类型没有 type\_modifier\_input\_function则类型修饰符将被拒绝。type\_modifier\_output\_function把内部的整数typmod值转换回正确的形式用于用户显示。type\_modifier\_output\_function必须返回一个cstring值，该值就是追加到类型名称后的字符串。例如，numeric的函数可能会返回\(30,2\)。如果默认的显示格式就是只把存储的typmod整数值放在圆括号内，则允许省略type\_modifier\_output\_function。

-   **analyze\_function**

    可选参数。为该数据类型执行统计分析的函数名的可选参数。

    默认情况下，如果该类型有一个默认的B-tree操作符类，ANALYZE将尝试用类型的“equals”和“less-than”操作符来收集统计信息。这种行为对于非标量类型并不合适，因此可以通过指定一个自定义分析函数来覆盖这种行为。分析函数必须被声明为有一个类型为internal的参数，并且返回一个boolean结果。

-   **internallength**

    可选参数。一个数字常量，用于指定新类型的内部表达的字节长度。默认为变长。

    虽然只有I/O函数和其他为该类型创建的函数才知道新类型的内部表达的细节， 但是内部表达的一些属性必须被向openGauss声明。其中最重要的是internallength。基本数据类型可以是定长的（这种情况下internallength是一个正整数）或者是变长的（把internallength设置为VARIABLE，在内部通过把typlen设置为-1表示）。所有变长类型的内部表达都必须以一个4字节整数开始，internallength定义了总长度。

-   **PASSEDBYVALUE**

    可选参数。表示这种数据类型的值需要被传值而不是传引用。传值的类型必须是定长的，并且它们的内部表达不能超过Datum类型（某些机器上是4字节，其他机器上是8字节）的尺寸。

-   **alignment**

    可选参数。该参数指定数据类型的存储对齐需求。如果被指定，必须是char、int2、int4或者double。默认是int4。

    允许的值等同于以1、2、4或8字节边界对齐。要注意变长类型的alignment参数必须至少为4，因为它们需要包含一个int4作为它们的第一个组成部分。

-   **storage**

    可选参数。该数据类型的存储策略。

    如果被指定，必须是plain、external、extended或者main。 默认是plain。

    -   plain指定该类型的数据将总是被存储在线内并且不会被压缩。（对定长类型只允许plain）
    -   extended 指定系统将首先尝试压缩一个长的数据值，并且将在数据仍然太长的情况下把值移出主表行。
    -   external允许值被移出主表， 但是系统将不会尝试对它进行压缩。
    -   main允许压缩，但是不鼓励把值移出主表（如果没有其他办法让行的大小变得合适，具有这种存储策略的数据项仍将被移出主表，但比起extended以及external项来，这种存储策略的数据项会被优先考虑保留在主表中）。

        除plain之外所有的storage值都暗示该数据类型的函数能处理被TOAST过的值。指定的值仅仅是决定一种可TOAST数据类型的列的默认TOAST存储策略，用户可以使用ALTER TABLE SET STORAGE为列选取其他策略。


-   **like\_type**

    可选参数。与新类型具有相同表达的现有数据类型的名称。会从这个类型中复制internallength、 passedbyvalue、 alignment以及storage的值（ 除非在这个CREATE TYPE命令的其他地方用显式说明覆盖）。

    当新类型的低层实现是以一种现有的类型为参考时，用这种方式指定表达特别有用。

-   **category**

    可选参数。这种类型的分类码（一个ASCII 字符）。 默认是“用户定义类型”的'U'。为了创建自定义分类， 也可以选择其他 ASCII字符。

-   **preferred**

    可选参数。如果这种类型是其类型分类中的优先类型则为TRUE，否则为FALSE。默认为假。在一个现有类型分类中创建一种新的优先类型要非常谨慎， 因为这可能会导致很大的改变。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >category和preferred参数可以被用来帮助控制在混淆的情况下应用哪一种隐式造型。每一种数据类型都属于一个用单个ASCII 字符命名的分类，并且每一种类型可以是其所属分类中的“首选”。当有助于解决重载函数或操作符时，解析器将优先造型到首选类型（但是只能从同类的其他类型造型）。对于没有隐式转换到或来自任意其他类型的类型，让这些设置保持默认即可。不过，对于有隐式转换的相关类型的组，把它们都标记为属于同一个类别并且选择一种或两种“最常用”的类型作为该类别的首选通常是很有用的。在把一种用户定义的类型增加到一个现有的内建类别（例如，数字或者字符串类型）中时，category参数特别有用。不过，也可以创建新的全部是用户定义类型的类别。对这样的类别，可选择除大写字母之外的任何ASCII 字符。

-   **default**

    可选参数。数据类型的默认值。如果被省略，默认值是空。

    如果用户希望该数据类型的列被默认为某种非空值，可以指定一个默认值。默认值可以用DEFAULT关键词指定（这样一个默认值可以被附加到一个特定列的显式DEFAULT子句覆盖）。

-   **element**

    可选参数。被创建的类型是一个数组，element指定了数组元素的类型。例如，要定义一个4字节整数的数组（int4）， 应指定ELEMENT = int4。

-   **delimiter**

    可选参数。指定这种类型组成的数组中分隔值的定界符。

    可以把delimiter设置为一个特定字符，默认的定界符是逗号（,）。注意定界符是与数组元素类型相关的，而不是数组类型本身相关。

-   **collatable**

    可选参数。如果这个类型的操作可以使用排序规则信息，则为TRUE。默认为FALSE。

    如果collatable为TRUE，这种类型的列定义和表达式可能通过使用COLLATE子句携带有排序规则信息。在该类型上操作的函数的实现负责真正利用这些信息，仅把类型标记为可排序的并不会让它们自动地去使用这类信息。

-   **lable**

    可选参数。与枚举类型的一个值相关的文本标签，其值为长度不超过63个字符的非空字符串。


>![](public_sys-resources/icon-note.gif) **说明：** 
>
>在创建用户定义类型的时候， openGauss会自动创建一个与之关联的数组类型，其名称由该元素类型的名称前缀一个下划线组成。

## 示例<a name="zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d"></a>

```
--创建一种复合类型，建表并插入数据以及查询。
openGauss=# CREATE TYPE compfoo AS (f1 int, f2 text);
openGauss=# CREATE TABLE t1_compfoo(a int, b compfoo);
openGauss=# CREATE TABLE t2_compfoo(a int, b compfoo);
openGauss=# INSERT INTO t1_compfoo values(1,(1,'demo'));
openGauss=# INSERT INTO t2_compfoo select * from t1_compfoo;
openGauss=# SELECT (b).f1 FROM t1_compfoo;
openGauss=# SELECT * FROM t1_compfoo t1 join t2_compfoo t2 on (t1.b).f1=(t1.b).f1;

--重命名数据类型。
openGauss=# ALTER TYPE compfoo RENAME TO compfoo1;

--要改变一个用户定义类型compfoo1的所有者为usr1。
openGauss=# CREATE USER usr1 PASSWORD 'xxxxxxxxx';
openGauss=# ALTER TYPE compfoo1 OWNER TO usr1;

--把用户定义类型compfoo1的模式改变为usr1。
openGauss=# ALTER TYPE compfoo1 SET SCHEMA usr1;

--给一个数据类型增加一个新的属性。
openGauss=# ALTER TYPE usr1.compfoo1 ADD ATTRIBUTE f3 int;

--删除compfoo1类型。
openGauss=# DROP TYPE usr1.compfoo1 cascade;

--删除相关表和用户。
openGauss=# DROP TABLE t1_compfoo;
openGauss=# DROP TABLE t2_compfoo;
openGauss=# DROP SCHEMA usr1;
openGauss=# DROP USER usr1;

--创建一个枚举类型。
openGauss=# CREATE TYPE bugstatus AS ENUM ('create', 'modify', 'closed');

--添加一个标签值。
openGauss=# ALTER TYPE bugstatus ADD VALUE IF NOT EXISTS 'regress' BEFORE 'closed';

--重命名一个标签值。
openGauss=# ALTER TYPE bugstatus RENAME VALUE 'create' TO 'new';

--创建一个集合类型
openGauss=# CREATE TYPE compfoo_table AS TABLE OF compfoo;
```

## 相关链接<a name="zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_sfc32bec2a548470ebab19d6ca7d6abe2"></a>

[ALTER TYPE](ALTER-TYPE.md)，[DROP TYPE](DROP-TYPE.md)

