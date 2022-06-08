# JSON/JSONB类型<a name="ZH-CN_TOPIC_0289899996"></a>

JSON\(JavaScript Object Notation\)数据，可以是单独的一个标量，也可以是一个数组，也可以是一个键值对象，其中数组和对象可以统称容器\(container\)：

-   标量\(scalar\)：单一的数字、bool、string、null都可以叫做标量。
-   数组\(array\)：\[\]结构，里面存放的元素可以是任意类型的JSON，并且不要求数组内所有元素都是同一类型。
-   对象\(object\)：\{\}结构，存储key:value的键值对，其键只能是用“”包裹起来的字符串，值可以是任意类型的JSON，对于重复的键，按最后一个键值对为准。

openGauss内存在两种数据类型JSON和JSONB，可以用来存储JSON数据。其中JSON是对输入的字符串的完整拷贝，使用时再去解析，所以它会保留输入的空格、重复键以及顺序等；JSONB解析输入后保存的二进制，它在解析时会删除语义无关的细节和重复的键，对键值也会进行排序，使用时不用再次解析。

因此可以发现，两者其实都是JSON，它们接受相同的字符串作为输入。它们实际的主要差别是效率。JSON数据类型存储输入文本的精确拷贝，处理函数必须在每个执行上重新解析； 而JSONB数据以分解的二进制格式存储， 这使得它由于添加了转换机制而在输入上稍微慢些，但是在处理上明显更快， 因为不需要重新解析。同时由于JSONB类型存在解析后的格式归一化等操作，同等的语义下只会有一种格式，因此可以更好更强大的支持很多其他额外的操作，比如按照一定的规则进行大小比较等。JSONB也支持索引，这也是一个明显的优势。

## 输入格式<a name="section1253934210012"></a>

输入必须是一个符合JSON数据格式的字符串，此字符串用单引号''声明。

null \(null-json\)：仅null，全小写。

```
select 'null'::json;   -- sucselect 'NULL'::jsonb;  -- err
```

数字 \(num-json\)：正负整数、小数、0，支持科学计数法。

```
select '1'::json;select '-1.5'::json;select '-1.5e-5'::jsonb, '-1.5e+2'::jsonb;select '001'::json, '+15'::json, 'NaN'::json;  -- 不支持多余的前导0，正数的+号，以及NaN和infinity。
```

布尔\(bool-json\)：仅true、false，全小写。

```
select 'true'::json;select 'false'::jsonb;  
```

字符串\(str-json\)：必须是加双引号的字符串。

```
select '"a"'::json;select '"abc"'::jsonb;  
```

数组\(array-json\)：使用中括号\[\]包裹，满足数组书写条件。数组内元素类型可以是任意合法的JSON，且不要求类型一致。

```
select '[1, 2, "foo", null]'::json;select '[]'::json;select '[1, 2, "foo", null, [[]], {}]'::jsonb; 
```

对象\(object-json\)：使用大括号\{\}包裹，键必须是满足JSON字符串规则的字符串，值可以是任意合法的JSON。

```
select '{}'::json;select '{"a": 1, "b": {"a": 2,  "b": null}}'::json;select '{"foo": [true, "bar"], "tags": {"a": 1, "b": null}}'::jsonb;  
```

>![](public_sys-resources/icon-caution.gif) **注意：** 
>-   区分 'null'::json 和 null::json 是两个不同的概念，类似于字符串 str="" 和 str=null。
>-   对于数字，当使用科学计数法的时候，jsonb类型会将其展开，而json会精准拷贝输入。

## JSONB高级特性<a name="section8871947018"></a>

-   注意事项
    -   不支持列存。
    -   不支持作为分区键。
    -   不支持外表、mot。


​JSON和JSONB的主要差异在于存储方式上的不同，JSONB存储的是解析后的二进制，能够体现JSON的层次结构，更方便直接访问等，因此JSONB会有很多JSON所不具有的高级特性。

-   格式归一化

    -   对于输入的object-json字符串，解析成jsonb二进制后，会天然的丢弃语义上无关紧要的细节，比如空格：

        ```
        openGauss=# select '   [1, " a ", {"a"   :1    }]  '::jsonb;        jsonb
        ----------------------
         [1, " a ", {"a": 1}](1 row)
        ```

    -   对于object-json，会删除重复的键值，只保留最后一个出现的，如：

        ```
        openGauss=# select '{"a" : 1, "a" : 2}'::jsonb;  jsonb---------- {"a": 2}(1 row)
        ```

    -   对于object-json，键值会重新进行排序，排序规则：长度长的在后、长度相等则ascii码大的在后，如：

    ```
    openGauss=# select '{"aa" : 1, "b" : 2, "a" : 3}'::jsonb;           jsonb
    --------------------------- 
    {"a": 3, "b": 2, "aa": 1}(1 row)
    ```


-   大小比较

    由于经过了格式归一化，保证了同一种语义下的jsonb只会有一种存在形式，因此按照制定的规则，可以比较大小。

    -   首先比较类型：object-jsonb \> array-jsonb \> bool-jsonb \> num-jsonb \> str-jsonb \> null-jsonb
    -   同类型则比较内容：

        -   str-json类型：依据text比较的方法，使用数据库默认排序规则进行比较，返回值正数代表大于，负数代表小于，0表示相等。
        -   num-json类型：数值比较
        -   bool-json类型：true \> false
        -   array-jsonb类型：长度长的 \> 长度短的，长度相等则依次比较每个元素。
        -   object-jsonb类型：长度长的 \> 长度短的，长度相等则依次比较每个键值对，先比较键，在比较值。

        >![](public_sys-resources/icon-caution.gif) **注意：** 
        >object-jsonb类型内比较时，比较时使用的是格式整理后的最终结果进行比较，因此相对于我们直接的输入未必会很直观。


-   创建索引、主外键
    -   BTREE索引

        ​ jsonb类型支持创建btree索引，支持创建主键、外键。

    -   GIN索引

        ​ GIN索引可以用来有效的搜索出现在大量jsonb文档（datums） 中的键或者键/值对。提供了两个GIN操作符类\(jsonb\_ops、jsonb\_hash\_ops\)，提供了不同的性能和灵活性取舍。缺省的GIN操作符类支持使用@\>、<@、?、 ?&和?|操作符查询，非缺省的GIN操作符类jsonb\_path\_ops只支持索引@\>、<@操作符。

        ​ 相关的操作符请参见[JSON/JSONB函数和操作符](JSON-JSONB函数和操作符.md)。


-   包含存在

    查询一个JSON之中是否包含某些元素，或者某些元素是否存在于某个JSON中是jsonb的一个重要能力。

    ```
    -- 简单的标量/原始值只包含相同的值：SELECT '"foo"'::jsonb @> '"foo"'::jsonb;-- 左侧数组包含了右侧字符串。SELECT '[1, “aa”, 3]'::jsonb ? 'aa';-- 左侧数组包含了右侧的数组所有元素，顺序、重复不重要。SELECT '[1, 2, 3]'::jsonb @> '[1, 3, 1]'::jsonb;-- 左侧object-json包含了右侧object-json的所有键值对SELECT '{"product": "PostgreSQL", "version": 9.4, "jsonb":true}'::jsonb @> '{"version":9.4}'::jsonb;-- 左侧数组并没有包含右侧的数组所有元素，因为左侧数组的三个元素为1、2、[1,3]，右侧的为1、3SELECT '[1, 2, [1, 3]]'::jsonb @> '[1, 3]'::jsonb; -- 产生假-- 相似的，这样也不对SELECT '{"foo": {"bar": "baz"}}'::jsonb @> '{"bar": "baz"}'::jsonb; -- false
    ```

    相关的操作符请参见[JSON/JSONB函数和操作符](JSON-JSONB函数和操作符.md)。

-   函数和操作符

    json/jsonb类型相关支持的函数和操作符请参见[JSON/JSONB函数和操作符](JSON-JSONB函数和操作符.md)。


