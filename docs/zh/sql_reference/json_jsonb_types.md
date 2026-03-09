# JSON/JSONB类型

JSON（JavaScript Object Notation）数据，可以是单独的一个标量，也可以是一个数组，也可以是一个键值对象，其中数组和对象可以统称容器（container）：

- 标量（scalar）：单一的数字、bool、string、null都可以叫做标量。
- 数组（array）：\[\]结构，里面存放的元素可以是任意类型的JSON，并且不要求数组内所有元素都是同一类型。
- 对象（object）：\{\}结构，存储key:value的键值对，其键只能是用“”包裹起来的字符串，值可以是任意类型的JSON，对于重复的键，按最后一个键值对为准。

openGauss内存在两种数据类型JSON和JSONB，可以用来存储JSON数据。其中JSON是对输入的字符串的完整拷贝，使用时再去解析，所以它会保留输入的空格、重复键以及顺序等；JSONB解析输入后保存的二进制，它在解析时会删除语义无关的细节和重复的键，对键值也会进行排序，使用时不用再次解析。

因此可以发现，两者其实都是JSON，它们接受相同的字符串作为输入。它们实际的主要差别是效率。JSON数据类型存储输入文本的精确拷贝，处理函数必须在每个执行上重新解析； 而JSONB数据以分解的二进制格式存储，这使得它由于添加了转换机制而在输入上稍微慢些，但是在处理上明显更快，因为不需要重新解析。同时由于JSONB类型存在解析后的格式归一化等操作，同等的语义下只会有一种格式，因此可以更好更强大的支持很多其他额外的操作，比如按照一定的规则进行大小比较等。JSONB也支持索引，这也是一个明显的优势。

## 输入格式<a name="section1253934210012"></a>

输入必须是一个符合JSON数据格式的字符串，此字符串用单引号''声明。

null（null-json）：仅null，全小写。

```
select 'null'::json;   -- sucselect 'NULL'::jsonb;  -- err
```

数字（num-json）：正负整数、小数、0，支持科学计数法。

```
select '1'::json;select '-1.5'::json;select '-1.5e-5'::jsonb, '-1.5e+2'::jsonb;select '001'::json, '+15'::json, 'NaN'::json; 
-- 不支持多余的前导0，正数的+号，以及NaN和infinity。
```

布尔（bool-json）：仅true、false，全小写。

```
select 'true'::json;select 'false'::jsonb;  
```

字符串（str-json）：必须是加双引号的字符串。

```
select '"a"'::json;select '"abc"'::jsonb;  
```

数组（array-json）：使用中括号\[\]包裹，满足数组书写条件。数组内元素类型可以是任意合法的JSON，且不要求类型一致。

```
select '[1, 2, "foo", null]'::json;select '[]'::json;select '[1, 2, "foo", null, [[]], {}]'::jsonb; 
```

对象（object-json）：使用大括号\{\}包裹，键必须是满足JSON字符串规则的字符串，值可以是任意合法的JSON。

```
select '{}'::json;select '{"a": 1, "b": {"a": 2,  "b": null}}'::json;select '{"foo": [true, "bar"], "tags": {"a": 1, "b": null}}'::jsonb;  
```

>[!WARNING]注意
>
>- 区分 'null'::json 和 null::json 是两个不同的概念，类似于字符串 str="" 和 str=null。
>
>- 对于数字，当使用科学计数法的时候，jsonb类型会将其展开，而json会精准拷贝输入。
>
>- json类型不支持排序，因此也不支持建索引操作，jsonb支持。

## JSONB高级特性<a name="section8871947018"></a>

- 注意事项
    - 不支持列存。
    - 不支持作为分区键。
    - 不支持外表、mot。

JSON和JSONB的主要差异在于存储方式上的不同，JSONB存储的是解析后的二进制，能够体现JSON的层次结构，更方便直接访问等，因此JSONB会有很多JSON所不具有的高级特性。

- 格式归一化

    - 对于输入的object-json字符串，解析成jsonb二进制后，会天然的丢弃语义上无关紧要的细节，比如空格：

        ```sql
        postgres=# select '   [1, " a ", {"a"   :1    }]  '::jsonb;        
               jsonb
        ----------------------
         [1, " a ", {"a": 1}]
        (1 row)
        ```

    - 对于object-json，会删除重复的键值，只保留最后一个出现的，如：

        ```sql
        postgres=# select '{"a" : 1, "a" : 2}'::jsonb;  
          jsonb
        ---------- 
          {"a": 2}
        (1 row)
        ```

    - 对于object-json，键值会重新进行排序，排序规则：长度长的在后、长度相等则ascii码大的在后，如：

        ```sql
        postgres=# select '{"aa" : 1, "b" : 2, "a" : 3}'::jsonb;           
                jsonb
        --------------------------- 
        {"a": 3, "b": 2, "aa": 1}
        (1 row)
        ```

- 大小比较

    由于经过了格式归一化，保证了同一种语义下的jsonb只会有一种存在形式，因此按照制定的规则，可以比较大小。

    - 首先比较类型：object-jsonb \> array-jsonb \> bool-jsonb \> num-jsonb \> str-jsonb \> null-jsonb
    - 同类型则比较内容：

        - str-json类型：依据text比较的方法，使用数据库默认排序规则进行比较，返回值正数代表大于，负数代表小于，0表示相等。
        - num-json类型：数值比较。
        - bool-json类型：true \> false。
        - array-jsonb类型：长度长的 \> 长度短的，长度相等则依次比较每个元素。
        - object-jsonb类型：长度长的 \> 长度短的，长度相等则依次比较每个键值对，先比较键，在比较值。

        >[!WARNING]注意 
        >
        >object-jsonb类型内比较时，比较时使用的是格式整理后的最终结果进行比较，因此相对于我们直接的输入未必会很直观。

- 创建索引、主外键
    - BTREE索引

         jsonb类型支持创建btree索引，支持创建主键、外键。

    - GIN索引

         GIN索引可以用来有效的搜索出现在大量jsonb文档（datums）中的键或者键/值对。提供了两个GIN操作符类（jsonb\_ops、jsonb\_hash\_ops），提供了不同的性能和灵活性取舍。缺省的GIN操作符类支持使用@\>、<@、?、 ?&和?|操作符查询，非缺省的GIN操作符类jsonb\_path\_ops只支持索引@\>、<@操作符。

         相关的操作符请参见[JSON/JSONB函数和操作符](json_jsonb_functions_and_operators.md)。

- 包含存在

    查询一个JSON之中是否包含某些元素，或者某些元素是否存在于某个JSON中是jsonb的一个重要能力。

    ```
    -- 简单的标量/原始值只包含相同的值：SELECT '"foo"'::jsonb @> '"foo"'::jsonb;
    -- 左侧数组包含了右侧字符串：SELECT '[1, “aa”, 3]'::jsonb ? 'aa';
    -- 左侧数组包含了右侧的数组所有元素，顺序、重复不重要：SELECT '[1, 2, 3]'::jsonb @> '[1, 3, 1]'::jsonb;
    -- 左侧object-json包含了右侧object-json的所有键值对：SELECT '{"product": "PostgreSQL", "version": 9.4, "jsonb":true}'::jsonb @> '{"version":9.4}'::jsonb;
    -- 左侧数组并没有包含右侧的数组所有元素，因为左侧数组的三个元素为1、2、[1,3]，右侧的为1、3：SELECT '[1, 2, [1, 3]]'::jsonb @> '[1, 3]'::jsonb; 
    -- 产生假-- 相似的，这样也不对：SELECT '{"foo": {"bar": "baz"}}'::jsonb @> '{"bar": "baz"}'::jsonb; -- false
    ```

    相关的操作符请参见[JSON/JSONB函数和操作符](json_jsonb_functions_and_operators.md)。

- 函数和操作符

    json/jsonb类型相关支持的函数和操作符请参见[JSON/JSONB函数和操作符](json_jsonb_functions_and_operators.md)。

## JSONPATH类型

JSONPATH是一种用于在JSON数据中提取特定数据的表达式语言。

### JSONPATH语法

- **$**

  描述：JSON数据的根节点数据。

  注意事项：A兼容性数据库中JSONPATH必须以$作为开头。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": 12, "b": {"a": 13}}', '$');
    jsonb_path_query_first
  ---------------------------
   {"a": 12, "b": {"a": 13}}
  (1 row)
  ```

- **.keyname**

  描述：表示JSON对象中特定键名keyname对应的值。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": 12, "b": {"a": 13}}', '$.b');
   jsonb_path_query_first
  ------------------------
   {"a": 13}
  (1 row)
  ```

- **.\***

  描述：表示JSON对象中所有键值对的值。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": 12, "b": {"a": 13}}', '$.*');
   jsonb_path_query_first
  ------------------------
   12
  (1 row)
  ```

- **[ { index | start_index TO end_index }, ... ]**

  描述：表示JSON数组特定下标或下标范围的元素。

  注意事项：

  - 在A兼容性数据库中，start_index和end_index的顺序无意义，start_index可以大于end_index而依然能找到对应结果。但在非A兼容性数据库中，start_index必须小于或等于end_index才可能有结果。

  - 在A兼容性数据库中，数组下标必须是非负整数，且不能是表达式（LAST作为被加数或被减数的加减法除外）。在非A兼容性数据库中，下标可以是小数或负数。下标是小数时，会取舍去小数位后的结果作为实际下标。下标为负数时，相当于超出数组下标范围的情况。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[1]');
   jsonb_path_query_first
  ------------------------
   1
  (1 row)

  db_pg=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[2.5]');
   jsonb_path_query_first
  ------------------------
   2
  (1 row)

  db_pg=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[1 to 3].a');
   jsonb_path_query_first
  ------------------------
   3
  (1 row)

  db_pg=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[3 to 1]');
   jsonb_path_query_first
  ------------------------

  (1 row)

  db_a=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[3 to 1].a');
   jsonb_path_query_first
  ------------------------
   3
  (1 row)
  ```

- **[ \* ]**

  描述：表示JSON数组中的所有元素。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[*].a');
   jsonb_path_query_first
  ------------------------
   3
  (1 row)
  ```

- **$varname**

  描述：表示特定传入变量的值。详见[jsonb_path_query_first](json_jsonb_functions_and_operators.md)或[jsonb_path_exists](json_jsonb_functions_and_operators.md)的介绍。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[$index]', vars => '{"index": 5}');
   jsonb_path_query_first
  ------------------------
   5
  (1 row)
  ```

- **.\*\***

  描述：表示JSON数据自顶向下所有嵌套层级的数据。

  注意事项：A兼容性数据库不支持该语法。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": {"b": {"c" : 1}}}', 'lax $.**.b');
   jsonb_path_query_first
  ------------------------
   {"c": 1}
  (1 row)
  ```

- **.\*\*{ level | start_level TO end_level }**

  描述：表示JSON数据自顶向下特定嵌套层级，或特定范围的嵌套层级的数据。

  注意事项：A兼容性数据库不支持该语法。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": {"b": {"c" : 1}}}', 'lax $.**{1 to 99}.c');
   jsonb_path_query_first
  ------------------------
   1
  (1 row)

  db_pg=# select jsonb_path_query_first('{"a": {"b": {"c" : 1}}}', 'lax $.**{1}.b');
   jsonb_path_query_first
  ------------------------
   {"c": 1}
  (1 row)
  ```

- **LAST**

  描述：LAST关键字可用于两种场景中：用作数组下标时，表示数组最末尾一个元素的下标；用作嵌套层级时，表示JSON数据最深的嵌套层级。

  示例：

  ```sql
  db_a=# select jsonb_path_query_first('[0, 1, 2, {"a": 3}, 4, 5]', '$[last - 1]');
   jsonb_path_query_first
  ------------------------
   4
  (1 row)

  db_pg=# select jsonb_path_query_first('{"a": {"b": {"c" : 1}}}', 'lax $.**{last}');
   jsonb_path_query_first
  ------------------------
   1
  (1 row)
  ```

- **STRICT**，**LAX**

  描述：指定严格（STRICT）或宽松（LAX）模式。未指定时默认为宽松模式，在该模式下，不要求路径表达式与实际JSON数据结构严格匹配，路径表达式解析时会通过隐式地展开数组、或将数据视作单元素数组的方式，自主适应JSON数据结构。无法经过上述方式适应JSON数据结构的情况下，返回空结果。严格模式下，路径表达式与JSON数据结构不匹配时，将抛出结构错误。

  注意事项：A兼容性数据库不支持该语法。A兼容性数据库下JSONPATH的表现近似宽松模式，但只支持一次性的宽松。自主适应过一次结构错误后，如果再次出现结构不匹配的情况，就会抛出错误。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a":[1,2,3,4,5]}', 'lax $[0][0].a');
   jsonb_path_query_first
  ------------------------
   [1, 2, 3, 4, 5]
  (1 row)

  db_pg=# select jsonb_path_query_first('{"a":[1,2,3,4,5]}', 'strict $[0][0].a');
  ERROR:  jsonpath array accessor can only be applied to an array
  CONTEXT:  referenced column: jsonb_path_query_first
  db_a=# select jsonb_path_query_first('{"a":[1,2,3,4,5]}', '$[0][0].a');
   jsonb_path_query_first
  ------------------------

  (1 row)

  db_a=# select jsonb_path_query_first('{"a":[1,2,3,4,5]}', '$[0].a');
   jsonb_path_query_first
  ------------------------
   [1, 2, 3, 4, 5]
  (1 row)
  ```

- **?(condition)**

  描述：表示符合过滤条件condition的数据。其中过滤条件是一个返回布尔类型结果的表达式，支持由逻辑操作符（`&&`，`||`，`!`）或比较操作符（详见[比较操作符](comparison_operators.md)一节）等构成的表达式。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": 10}', '$ ? ($.a < 13)');
   jsonb_path_query_first
  ------------------------
   {"a": 10}
  (1 row)
  ```

- **@**

  描述：表示当前节点的数据。

  注意事项：该语法只能用在过滤条件表达式中。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[10,11,12,13,14,15]', '$[*] ? (@ > 13)');
   jsonb_path_query_first
  ------------------------
   14
  (1 row)
  ```

- **(expr) IS UNKNOWN**

  描述：比较expr表达式结果是否是UNKNOWN。当一个返回布尔类型结果的表达式的参数类型不匹配时，会返回UNKNOWN作为结果。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[10,11,12,13,14,"15"]', '$[*] ? ((@ > 13) is unknown)');
   jsonb_path_query_first
  ------------------------
   "15"
  (1 row)
  ```

- **expr1 STARTS WITH expr2**

  描述：比较字符串expr1是否具有字符串前缀expr2。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('["", "a", "abcabc"]', '$[*] ? (@ starts with "abc")');
   jsonb_path_query_first
  ------------------------
   "abcabc"
  (1 row)
  ```

- **EXISTS ( expr )**

  描述：检查expr路径下是否有对应的JSON数据存在。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"g": [{"x": 2}, {"y": 3}]}', '$.g[*] ? (exists (@.x))');
   jsonb_path_query_first
  ------------------------
   {"x": 2}
  (1 row)
  ```

- **expr1 LIKE_REGEX expr2 [ FLAG f ]**

  描述：比较字符串expr1是否能与字符串expr2指定的正则模式匹配。flag可指定为以下某个字母或某几个字母的组合：

  - i：表示匹配时忽略大小写。
  - m：允许`^`和`$`跨行匹配。
  - s：允许`.`匹配换行符。
  - q：将expr2视作被引号包裹的普通字符串，整个匹配简化为一个子串匹配。

  注意事项：A兼容性数据库中不支持指定flag的语法。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[1, "aBdC", "ab\nadc", "111\nabc", "^ab.*c$"]', '$[*] ? (@ like_regex "^ab.*c" flag "i")');
   jsonb_path_query_first
  ------------------------
   "aBdC"
  (1 row)

  db_pg=# select jsonb_path_query_first('[1, "aBdC", "ab\nadc", "111\nabc", "^ab.*c$"]', '$[*] ? (@ like_regex "^ab.*c" flag "m")');
   jsonb_path_query_first
  ------------------------
   "111\nabc"
  (1 row)

  db_pg=# select jsonb_path_query_first('[1, "aBdC", "ab\nadc", "111\nabc", "^ab.*c$"]', '$[*] ? (@ like_regex "^ab.*c" flag "s")');
   jsonb_path_query_first
  ------------------------
   "ab\nadc"
  (1 row)

  db_pg=# select jsonb_path_query_first('[1, "aBdC", "ab\nadc", "111\nabc", "^ab.*c$"]', '$[*] ? (@ like_regex "^ab.*c$" flag "q")');
   jsonb_path_query_first
  ------------------------
   "^ab.*c$"
  (1 row)
  ```

- **.abs()**

  描述：取绝对值。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[-3.4]', '$[*].abs()');
   jsonb_path_query_first
  ------------------------
   3.4
  (1 row)
  ```

- **.size()**

  描述：获取数组中元素的数量。宽松模式下，标量或对象的结果为1，严格模式下抛出错误。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[10,11,12,13,14,"15"]', '$.size()');
   jsonb_path_query_first
  ------------------------
   6
  (1 row)
  ```

- **.type()**

  描述：获取JSON数据的类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[10,11,12,13,14,"15"]', '$.type()');
   jsonb_path_query_first
  ------------------------
   "array"
  (1 row)
  ```

- **.floor()**

  描述：获取JSON数据向下取整后的结果。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[-3.4]', '$[*].floor()');
   jsonb_path_query_first
  ------------------------
   -4
  (1 row)
  ```

- **.ceiling()**

  描述：获取JSON数据向上取整后的结果。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[-3.4]', '$[*].ceiling()');
   jsonb_path_query_first
  ------------------------
   -3
  (1 row)
  ```

- **.keyvalue()**

  描述：获取对象的键值对，结果包含对象的键、值和内部生成的唯一标识符。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('{"a": 1, "b": [1, 2]}', '$.keyvalue()');
        jsonb_path_query_first
  -----------------------------------
   {"id": 0, "key": "a", "value": 1}
  (1 row)
  ```

- **.string()**

  描述：转换为字符串类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('[1.23]', '$[*].string()');
   jsonb_path_query_first
  ------------------------
   "1.23"
  (1 row)
  ```

- **.boolean()**

  描述：转换为布尔类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('"1"', '$.boolean()');
   jsonb_path_query_first
  ------------------------
   true
  (1 row)
  ```

- **.integer()**

  描述：转换为int4类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('1.83', '$.integer()');
   jsonb_path_query_first
  ------------------------
   2
  (1 row)
  ```

- **.bigint()**

  描述：转换为int8类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('1234567890123', '$.bigint()');
   jsonb_path_query_first
  ------------------------
   1234567890123
  (1 row)
  ```

- **.double()**

  描述：转换为双精度浮点数类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('"1.23"', '$.double()');
   jsonb_path_query_first
  ------------------------
   1.23
  (1 row)
  ```

- **.number()**

  描述：转换为数值类型。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('"1.23"', '$.number()');
   jsonb_path_query_first
  ------------------------
   1.23
  (1 row)
  ```

- **.decimal([ p [ ,s ] ])**

  描述：转换为任意精度类型数。

  示例：

  ```sql
  db_pg=# select jsonb_path_query_first('1234.5678', '$.decimal(6, 2)');
   jsonb_path_query_first
  ------------------------
   1234.57
  (1 row)
  ```
