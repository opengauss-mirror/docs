# 模式匹配操作符

数据库提供了三种独立的实现模式匹配的方法：SQL LIKE操作符、SIMILAR TO操作符和POSIX-风格的正则表达式。除了这些基本的操作符外，还有一些函数可用于提取或替换匹配子串并在匹配位置分离一个串。

## LIKE

  描述：判断字符串是否能匹配上LIKE后的模式字符串。如果字符串与提供的模式匹配，则LIKE表达式返回为真（NOT LIKE表达式返回假），否则返回为假（NOT LIKE表达式返回真）。

  匹配规则：

  1. 此操作符只有在它的模式匹配整个串的时候才能成功。如果要匹配在串内任何位置的序列，该模式必须以百分号开头和结尾。
  2. 下划线（\_）代表（匹配）任何单个字符；百分号（%）代表任意串的通配符。
  3. 要匹配文本里的下划线或者百分号，在提供的模式里相应字符必须前导逃逸字符。逃逸字符的作用是禁用元字符的特殊含义，缺省的逃逸字符是反斜线，也可以用ESCAPE子句指定一个不同的逃逸字符。
  4. 要匹配逃逸字符本身，写两个逃逸字符。例如要写一个包含反斜线的模式常量，那你就要在SQL语句里写两个反斜线。

     >[!NOTE]说明
     >
     >参数standard\_conforming\_strings设置为off时，在文串常量中写的任何反斜线都需要被双写。因此，写一个匹配单个反斜线的模式实际上要在语句里写四个反斜线（你可以通过用ESCAPE选择一个不同的逃逸字符来避免这种情况，这样反斜线就不再是LIKE的特殊字符了。但仍然是字符文本分析器的特殊字符，所以你还是需要两个反斜线）。在兼容MYSQL数据模式时，您也可以通过写ESCAPE ''的方式不选择逃逸字符，这样可以有效地禁用逃逸机制，但是没有办法关闭下划线和百分号在模式中的特殊含义。

  5. 关键字ILIKE可以用于替换LIKE，区别是LIKE大小写敏感，ILIKE大小写不敏感。
  6. 操作符\~\~等效于LIKE，操作符\~\~\*等效于ILIKE。

  示例：

  ```
  openGauss=# SELECT 'abc' LIKE 'abc' AS RESULT;
   result
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# SELECT 'abc' LIKE 'a%' AS RESULT;
   result
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# SELECT 'abc' LIKE '_b_' AS RESULT;
   result
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# SELECT 'abc' LIKE 'c' AS RESULT;
   result
  -----------
   f
  (1 row)
  ```

## SIMILAR TO

描述：SIMILAR TO操作符根据自己的模式是否匹配给定串而返回真或者假。它和LIKE非常类似，只不过它使用SQL标准定义的正则表达式理解模式。

匹配规则：

1.  和LIKE一样，此操作符只有在它的模式匹配整个串的时候才能成功。如果要匹配在串内任何位置的序列，该模式必须以百分号开头和结尾。
2.  下划线（\_）代表（匹配）任何单个字符；百分号（%）代表任意串的通配符。
3.  SIMILAR TO也支持下面这些从POSIX正则表达式借用的模式匹配元字符。

    | 元字符  | 含义                             |
    |----------|----------------------------------|
    | \|       | 表示选择（两个候选之一）          |
    | *        | 表示重复前面的项零次或更多次       |
    | +        | 表示重复前面的项一次或更多次       |
    | ?        | 表示重复前面的项零次或一次         |
    | {m}      | 表示重复前面的项刚好m次            |
    | {m,}     | 表示重复前面的项m次或更多次        |
    | {m,n}    | 表示重复前面的项至少m次并且不超过n次 |
    | ()       | 把多个项组合成一个逻辑项            |
    | [...]    | 声明一个字符类，就像POSIX正则表达式一样 |


4.  前导逃逸字符可以禁止所有这些元字符的特殊含义。逃逸字符的使用规则和LIKE一样。

    正则表达式函数：

    支持使用函数[substring\(string from pa...](character_processing_functions_and_operators.md)截取匹配SQL正则表达式的子字符串。

    示例：

    ```
    openGauss=# SELECT 'abc' SIMILAR TO 'abc' AS RESULT;
     result
    -----------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' SIMILAR TO 'a' AS RESULT;
     result
    -----------
     f
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' SIMILAR TO '%(b|d)%' AS RESULT;
     result
    -----------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' SIMILAR TO '(b|c)%'  AS RESULT;
     result
    -----------
     f
    (1 row)
    ```

## POSIX正则表达式

描述：正则表达式是一个字符序列，它是定义一个串集合（一个正则集）的缩写。如果一个串是正则表达式描述的正则集中的一员时，我们就说这个串匹配该正则表达式。  POSIX正则表达式提供了比LIKE和SIMILAR TO操作符更强大的含义。[表1](#zh-cn_topic_0283137455_zh-cn_topic_0237121970_table6512684711360)列出了所有可用于POSIX正则表达式模式匹配的操作符。

**表 1**  正则表达式匹配操作符<a name="zh-cn_topic_0283137455_zh-cn_topic_0237121970_table6512684711360"></a>

| 操作符  | 描述                     | 例子                          |
|---------|--------------------------|-------------------------------|
| ~       | 匹配正则表达式，大小写敏感      | 'thomas' ~ '.*thomas.*'       |
| ~*      | 匹配正则表达式，大小写不敏感     | 'thomas' ~* '.*Thomas.*'      |
| !~      | 不匹配正则表达式，大小写敏感      | 'thomas' !~ '.*Thomas.*'      |
| !~*     | 不匹配正则表达式，大小写不敏感     | 'thomas' !~* '.*vadim.*'      |

匹配规则：

1.  与LIKE不同，正则表达式允许匹配串里的任何位置，除非该正则表达式显式地挂接在串的开头或者结尾。
2.  除了上文提到的元字符外， POSIX正则表达式还支持下列模式匹配元字符。

    | 元字符 | 含义          |
    |--------|---------------|
    | ^      | 表示串开头的匹配 |
    | $      | 表示串末尾的匹配 |
    | .      | 匹配任意单个字符 |

    正则表达式函数：

    POSIX正则表达式支持下面函数。

    - [substring\(string from pa...](character_processing_functions_and_operators.md)函数提供了抽取一个匹配POSIX正则表达式模式的子串的方法。
    
    - [regexp\_count\(string tex...](character_processing_functions_and_operators.md)函数提供了获取匹配POSIX正则表达式模式的子串数量的功能。
    
    - [regexp\_instr\(string tex...](character_processing_functions_and_operators.md)函数提供了获取匹配POSIX正则表达式模式子串位置的功能。

    - [regexp\_substr\(string te...](character_processing_functions_and_operators.md)函数提供了抽取一个匹配POSIX正则表达式模式的子串的方法。
    
    - [regexp\_replace\(string, p...](character_processing_functions_and_operators.md)函数提供了将匹配POSIX正则表达式模式的子串替换为新文本的功能。
    
    - [regexp\_matches\(string te...](character_processing_functions_and_operators.md)函数返回一个文本数组，该数组由匹配一个POSIX正则表达式模式得到的所有被捕获子串构成。
    
    - [regexp\_split\_to\_table\(st...](character_processing_functions_and_operators.md)函数把一个POSIX正则表达式模式当作一个定界符来分离一个串。
    
    -   [regexp\_split\_to\_array\(st...](character_processing_functions_and_operators.md)和regexp\_split\_to\_table类似，是一个正则表达式分离函数，不过它的结果以一个text数组的形式返回。
    
        >[!NOTE]说明
        >
        >正则表达式分离函数会忽略零长度的匹配，这种匹配发生在串的开头或结尾或者正好发生在前一个匹配之后。这和正则表达式匹配的严格定义是相悖的，后者由regexp\_matches实现，但是通常前者是实际中最常用的行为。

    示例：
    
    ```
    openGauss=#  SELECT 'abc' ~ 'Abc' AS RESULT;
    result 
    --------
     f
    (1 row)
    ```
    
    ```
    openGauss=# SELECT 'abc' ~* 'Abc' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```
    
    ```
    openGauss=# SELECT 'abc' !~ 'Abc' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```
    
    ```
    openGauss=# SELECT 'abc'!~* 'Abc' AS RESULT;
     result 
    --------
     f
    (1 row)
    ```
    
    ```
    openGauss=# SELECT 'abc' ~ '^a' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```
    
    ```
    openGauss=# SELECT 'abc' ~ '(b|d)'AS RESULT;
     result 
    --------
     t
    (1 row)
    ```
    
    ```
    openGauss=# SELECT 'abc' ~ '^(b|c)'AS RESULT;
     result 
    --------
     f
    (1 row)
    ```
    
    虽然大部分的正则表达式搜索都能很快地执行，但是正则表达式仍可能被人为地弄成需要任意长的时间和任意量的内存进行处理。不建议从非安全模式来源接受正则表达式搜索模式，如果必须这样做，建议加上语句超时限制。使用SIMILAR TO模式的搜索具有同样的安全性危险，因为SIMILAR TO提供了很多和POSIX-风格正则表达式相同的能力。LIKE搜索比其他两种选项简单得多，因此在接受非安全模式来源搜索时要更安全些。

    特性补充：目前B库支持的字符序支持右模糊匹配支持索引扫描，会将匹配条件转换为大于等于和小于等于两个不等式作为索引条件。以一个c1 char(10)类型的列举例来说明索引条件转换规则。当我们的查询条件是where c1 like 'sdf%'时，会将索引条件转换为c1 >= 'sdf\min(7 times)' and c1<='sdf\max(7 times)'。其中\min与\max是每种字符序对应的最大排序的字符编码，这样的转换保证我们转换出的索引条件一定是与like 'sdf%'等价的。也是由于这样的转换规则，通过explain打印执行计划的时候，会导致显示不够友好，索引条件中会出现不可视字符，并且由于填充长度可能会很长，会使得执行计划长度较大。
