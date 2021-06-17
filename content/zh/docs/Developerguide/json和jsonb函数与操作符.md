# json/jsonb函数和操作符

json/jsonb数据类型参考[json和jsonb类型](json和jsonb类型.md)。

## json/jsonb通用操作符

| 操作符 | 左操作数类型       | 右操作数类型 | 返回类型 | 描述                                           | 例子                                             | 例子结果     |
| ------ | ------------------ | ------------ | -------- | ---------------------------------------------- | ------------------------------------------------ | ------------ |
| ->     | Array-json(b)      | int          | json(b)  | 获得array-json元素。下标不存在返回空           | '[{"a":"foo"},{"b":"bar"},{"c":"baz"}]'::json->2 | {"c":"baz"}  |
| ->     | object-json(b)     | text         | json(b)  | 通过键获得值。不存在则返回空。                 | '{"a": {"b":"foo"}}'::json->'a'                  | {"b":"foo"}  |
| ->>    | Array-json(b)      | int          | text     | 获得 JSON 数组元素。  下标不存在返回空         | '[1,2,3]'::json->>2                              | 3            |
| ->>    | object-json(b)     | text         | text     | 通过键获得值。不存在则返回空。                 | '{"a":1,"b":2}'::json->>'b'                      | 2            |
| #>     | container-json (b) | text[]       | json(b)  | 获取在指定路径的 JSON 对象，路径不存在则返回空 | '{"a": {"b":{"c":  "foo"}}}'::json #>'{a,b}'     | {"c": "foo"} |
| #>>    | container-json (b) | text[]       | text     | 获取在指定路径的 JSON 对象，路径不存在则返回空 | '{"a":[1,2,3],"b":[4,5,6]}'::json #>>'{a,2}'     | 3            |

   > **注意** 
   >
   > - 对于 #> 和 #>> 操作符，当给出的路径无法查找到数据时，不会报错，会返回空。



## jsonb额外支持操作符

| 操作符 | 右操作数类型 | 描述                                              | 例子                                                |
| ------ | ------------ | ------------------------------------------------- | --------------------------------------------------- |
| @>     | jsonb        | 左边的 JSON的顶层是否包含右边JSON的顶层所有项？   | '{"a":1, "b":2}'::jsonb @>  '{"b":2}'::jsonb        |
| <@     | jsonb        | 左边的 JSON的所有项是否全部存在于右边JSON的顶层？ | '{"b":2}'::jsonb <@ '{"a":1,  "b":2}'::jsonb        |
| ?      | text         | 键/元素的字符串是否存在于 JSON 值的顶层？         | '{"a":1, "b":2}'::jsonb ? 'b'                       |
| ?\|    | text[]       | 这些数组字符串中的任何一个是否做为顶层键存在？    | '{"a":1, "b":2, "c":3}'::jsonb ?\|  array['b', 'c'] |
| ?&     | text[]       | 是否所有这些数组字符串都作为顶层键存在？          | '["a", "b"]'::jsonb ?& array['a', 'b']              |
| =      | jsonb        | 判断两个jsonb的大小关系。同函数jsonb_eq           |                                                     |
| <>     | jsonb        | 判断两个jsonb的大小关系。同函数jsonb_ne           |                                                     |
| <      | jsonb        | 判断两个jsonb的大小关系。同函数jsonb_lt           |                                                     |
| >      | jsonb        | 判断两个jsonb的大小关系。同函数jsonb_gt           |                                                     |
| <=     | jsonb        | 判断两个jsonb的大小关系。同函数jsonb_le           |                                                     |
| >=     | jsonb        | 判断两个jsonb的大小关系。同函数jsonb_ge           |                                                     |





## json/jsonb支持的函数

-   array\_to\_json\(anyarray \[, pretty\_bool\]\)

    描述：返回JSON类型的数组。一个多维数组成为一个JSON数组的数组。如果pretty\_bool为true，将在一维元素之间添加换行符。

    返回类型：json

    ```
openGauss=# SELECT array_to_json('{{1,5},{99,100}}'::int[]);
    array_to_json
    ------------------
    [[1,5],[99,100]]
    (1 row)
    ```
    
-   row\_to\_json\(record \[, pretty\_bool\]\)

    描述：返回JSON类型的行。如果pretty\_bool为true，将在第一级元素之间添加换行符。

    返回类型：json

    ```
openGauss=# SELECT row_to_json(row(1,'foo'));
         row_to_json     
    ---------------------
     {"f1":1,"f2":"foo"}
    (1 row)
    ```

- json_array_element(array-json, integer)、jsonb_array_element(array-jsonb, integer)

  描述：同操作符`->`, 返回数组中指定下标的元素。

  返回类型：json、jsonb

  ```
  openGauss=# select json_array_element('[1,true,[1,[2,3]],null]',2);
  json_array_element
  --------------------
  [1,[2,3]]
  (1 row)
  ```

- json_array_element_text(array-json, integer)、jsonb_array_element_text(array-jsonb, integer)

  描述：同操作符`->>`, 返回数组中指定下标的元素。

  返回类型：text、text

  ```
  openGauss=# select json_array_element_text('[1,true,[1,[2,3]],null]',2);
  json_array_element_text
  -----------------------
  [1,[2,3]]
  (1 row)
  ```

- json_object_field(object-json, text)、jsonb_object_field(object-jsonb, text)

  描述：同操作符`->`, 返回对象中指定键对应的值。

  返回类型：json、jsonb

  ```
  openGauss=# select json_object_field('{"a": {"b":"foo"}}','a');
  json_object_field
  -------------------
  {"b":"foo"}
  (1 row)
  ```

- json_object_field_text(object-json, text)、jsonb_object_field_text(object-jsonb, text)

  描述：同操作符`->>`, 返回对象中指定键对应的值。

  返回类型：text、text

  ```
  openGauss=# select json_object_field_text('{"a": {"b":"foo"}}','a');
  json_object_field_text
  ----------------------
  {"b":"foo"}
  (1 row)
  ```

- json_extract_path(json, VARIADIC text[])、jsonb_extract_path((jsonb, VARIADIC text[])

  描述：等价于操作符`#>`。根据$2所指的路径，查找json，并返回。

  返回类型：json、jsonb

  ```
  openGauss=# select json_extract_path('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
   json_extract_path
  -------------------
   "stringy"
  (1 row)
  ```

- json_extract_path_op(json, text[])、jsonb_extract_path_op(jsonb, text[])

  描述：同操作符`#>`。根据$2所指的路径，查找json，并返回。

  返回类型：json、jsonb

  ```
  openGauss=# select json_extract_path_op('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
   json_extract_path_op
  ---------------------
   "stringy"
  (1 row)
  ```

- json_extract_path_text(json, VARIADIC text[])、jsonb_extract_path_text((jsonb, VARIADIC text[])

  描述：等价于操作符`#>>`。根据$2所指的路径，查找json，并返回。

  返回类型：text、text

  ```
  openGauss=# select json_extract_path_text('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
   json_extract_path_text
  -----------------------
   "stringy"
  (1 row)
  ```

- json_extract_path_text_op(json, text[])、jsonb_extract_path_text_op(jsonb, text[])

  描述：同操作符`#>>`。根据$2所指的路径，查找json，并返回。

  返回类型：text、text

  ```
  openGauss=# select json_extract_path_text_op('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
   json_extract_path_text_op
  --------------------------
   "stringy"
  (1 row)
  ```

- json_array_elements(array-json)、jsonb_array_elements(array-jsonb)

  描述：拆分数组，每一个元素返回一行。

  返回类型：json、jsonb

  ```
  select json_array_elements('[1,true,[1,[2,3]],null]');
   json_array_elements
  ---------------------
   1
   true
   [1,[2,3]]
   null
  (4 rows)
  ```

- json_array_elements_text(array-json)、jsonb_array_elements_text(array-jsonb)

  描述：拆分数组，每一个元素返回一行。

  返回类型：text、text

  ```
  openGauss=# select * from  json_array_elements_text('[1,true,[1,[2,3]],null]');
     value
  -----------
   1
   true
   [1,[2,3]]
  
  (4 rows)
  ```

- json_array_length(array-json)、jsonb_array_length(array-jsonb)

  描述：返回数组长度。

  返回类型：integer

  ```
  openGauss=# SELECT json_array_length('[1,2,3,{"f1":1,"f2":[5,6]},4,null]');
   json_array_length
  -------------------
                   6
  (1 row)
  ```

- json_each(object-json)、jsonb_each(object-jsonb)

  描述：将对象的每个键值对拆分转换成一行两列。

  返回类型：setof(key text, value json)、setof(key text, value jsonb)

  ```
  openGauss=# select * from  json_each('{"f1":[1,2,3],"f2":{"f3":1},"f4":null}');
   key |  value
  -----+----------
   f1  | [1,2,3]
   f2  | {"f3":1}
   f4  | null
  (3 rows)
  ```

- json_each_text(object-json)、jsonb_each_text(object-jsonb)

  描述：将对象的每个键值对拆分转换成一行两列。

  返回类型：setof(key text, value text)、setof(key text, value text)

  ```
  openGauss=# select * from  json_each_text('{"f1":[1,2,3],"f2":{"f3":1},"f4":null}');
   key |  value
  -----+----------
   f1  | [1,2,3]
   f2  | {"f3":1}
   f4  |
  (3 rows)
  ```

- json_object_keys(object-json)、jsonb_object_keys(object-jsonb)

  描述：返回对象中顶层的所有键。

  返回类型：SETOF text

  ```
  openGauss=# select json_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}, "f1":"abcd"}');
   json_object_keys
  ------------------
   f1
   f2
   f1
  (3 rows)
  
  -- jsonb中会有去重操作
  openGauss=# select jsonb_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}, "f1":"abcd"}');
   jsonb_object_keys
  -------------------
   f1
   f2
  (2 rows)
  ```

- json_populate_record(anyelement, object-json [, bool])、jsonb_populate_record(anyelement, object-jsonb [, bool])

  描述：$1必须是一个复合类型的参数。将会把object-json里的每个对键值进行拆分，以键当做列名，与$1中的列名进行匹配查找，并填充到$1的格式中。

  返回类型：anyelement、anyelement

  ```
  openGauss=# create type jpop as (a text, b int, c bool);
  CREATE TYPE
  openGauss=# select * from json_populate_record(null::jpop,'{"a":"blurfl","x":43.2}');
     a    | b | c
  --------+---+---
   blurfl |   |
  (1 row)
  
  openGauss=# select * from json_populate_record((1,1,null)::jpop,'{"a":"blurfl","x":43.2}');
     a    | b | c
  --------+---+---
   blurfl | 1 |
  (1 row)
  ```

- json_populate_record_set(anyelement, array-json [, bool])、jsonb_populate_record_set(anyelement, array-jsonb [, bool])

  描述：参考上述函数json_populate_record、jsonb_populate_record，对$2数组的每一个元素进行上述参数函数的操作，因此这也要求$2数组的每个元素都是object-json类型的。

  返回类型：setof anyelement、setof anyelement

  ```
  openGauss=# create type jpop as (a text, b int, c bool);
  CREATE TYPE
  openGauss=# select * from json_populate_recordset(null::jpop, '[{"a":1,"b":2},{"a":3,"b":4}]');
   a | b | c
  ---+---+---
   1 | 2 |
   3 | 4 |
  (2 rows)
  ```

- json_typeof(json)、jsonb_typeof(jsonb)

  描述：检测json类型

  返回类型：text、text

  ```
  openGauss=# select value, json_typeof(value)
  openGauss-# from (values (json '123.4'), (json '"foo"'), (json 'true'), (json 'null'), (json '[1, 2, 3]'), (json '{"x":"foo", "y":123}'), (NULL::json))  as data(value);
          value         | json_typeof
  ----------------------+-------------
   123.4                | number
   "foo"                | string
   true                 | boolean
   null                 | null
   [1, 2, 3]            | array
   {"x":"foo", "y":123} | object
                        |
  (7 rows)
  ```

- json_build_array( [VARIADIC "any"] )

  描述：从一个可变参数列表构造出一个JSON数组。

  返回类型：array-json

  ```
  openGauss=# select json_build_array('a',1,'b',1.2,'c',true,'d',null,'e',json '{"x": 3, "y": [1,2,3]}','');
                               json_build_array
  ---------------------------------------------------------------------------
   ["a", 1, "b", 1.2, "c", true, "d", null, "e", {"x": 3, "y": [1,2,3]}, ""]
  (1 row)
  ```

- json_build_object( [VARIADIC "any"] )

  描述：从一个可变参数列表构造出一个JSON对象，其入参必须为偶数个，两两一组组成键值对。注意键不可为null。

  返回类型：object-json

  ```
  openGauss=# select json_build_object(1,2);
   json_build_object
  -------------------
   {"1" : 2}
  (1 row)
  ```

- json_to_record(object-json, bool)

  描述：正如所有返回record 的函数一样，调用者必须用一个AS子句显式地定义记录的结构。会将object-json的键值对进行拆分重组，把键当做列名，去匹配填充as显示指定的记录的结构。

  返回类型：record

  ```
  openGauss=# select * from json_to_record('{"a":1,"b":"foo","c":"bar"}',true) as x(a int, b text, d text);
   a |  b  | d
  ---+-----+---
   1 | foo |
  (1 row)
  ```

- json_to_recordset(array-json, bool)

  描述：参考函数json_to_record，对数组内个每个元素，执行上述函数的操作，因此这要求数组内的每个元素都得是object-json。

  返回类型：setof record

  ```
  openGauss=# select * from json_to_recordset(
  openGauss(#   '[{"a":1,"b":"foo","d":false},{"a":2,"b":"bar","c":true}]',
  openGauss(#   false
  openGauss(# ) as x(a int, b text, c boolean);
   a |  b  | c
  ---+-----+---
   1 | foo |
   2 | bar | t
  (2 rows)
  ```

- json_object(text[])、json_object(text[], text[])

  描述：从一个文本数组构造一个object-json。这是个重载函数，当入参为一个文本数组的时候，其数组长度必须为偶数，成员被当做交替出现的键/值对。两个文本数组的时候，第一个数组认为是键，第二个认为是值，两个数组长度必须相等。键不可为null。

  返回类型：object-json

  ```
  openGauss=# select json_object('{a,1,b,2,3,NULL,"d e f","a b c"}');
                        json_object
  -------------------------------------------------------
   {"a" : "1", "b" : "2", "3" : null, "d e f" : "a b c"}
  (1 row)
  
  openGauss=# select json_object('{a,b,"a b c"}', '{a,1,1}');
                json_object
  ---------------------------------------
   {"a" : "a", "b" : "1", "a b c" : "1"}
  (1 row)
  ```

- json_agg(any)

  描述：将值聚集为json数组。

  返回类型：array-json

  ```
  openGauss=# select * from classes;
  name | score
  -----+-------
  A    |     2
  A    |     3
  D    |     5
  D    |
  (4 rows)
  
  openGauss=# select name, json_agg(score) score from classes group by name order by name;
  name |      score
  -----+-----------------
  A    | [2, 3]
  D    | [5, null]
       | [null]
  (3 rows)
  ```

- json_object_agg(any, any)

  描述：将值聚集为json对象。

  返回类型：object-json

  ```
  openGauss=# select * from classes;
  name | score
  -----+-------
  A    |     2
  A    |     3
  D    |     5
  D    |
  (4 rows)
  
  openGauss=# select json_object_agg(name, score) from classes group by name order by name;
       json_object_agg
  -------------------------
   { "A" : 2, "A" : 3 }
   { "D" : 5, "D" : null }
  (2 rows)
  ```

- jsonb_contained(jsonb, jsonb)

  描述：同操作符 `<@`, 判断$1中的所有元素是否在$2的顶层存在。

  返回类型：bool

  ```
  openGauss=# select jsonb_contained('[1,2,3]', '[1,2,3,4]');
   jsonb_contained
  -----------------
   t
  (1 row)
  ```

- jsonb_contains(jsonb, jsonb)

  描述：同操作符 `@>`, 判断$1中的顶层所有元素是否包含在$2的所有元素。

  返回类型：bool

  ```
  openGauss=# select jsonb_contains('[1,2,3,4]', '[1,2,3]');
   jsonb_contains
  ----------------
   t
  (1 row)
  ```

- jsonb_exists(jsonb, text)

  描述：同操作符 `?`,  字符串$2是否存在$1的顶层以key\elem\scalar的形式存在。

  返回类型：bool

  ```
  openGauss=# select jsonb_exists('["1",2,3]', '1');
   jsonb_exists
  --------------
   t
  (1 row)
  ```

- jsonb_exists_all(jsonb, text[])

  描述：同操作符 `?&`,  字符串数组$2里面，是否所有的元素，都在$1的顶层以key\elem\scalar的形式存在。

  返回类型：bool

  ```
  openGauss=# select jsonb_exists_all('["1","2",3]', '{1, 2}');
   jsonb_exists_all
  ------------------
   t
  (1 row)
  ```

- jsonb_exists_any(jsonb, text[])

  描述：同操作符 `?|`,  字符串数组$2里面，是否存在的元素，在$1的顶层以key\elem\scalar的形式存在。

  返回类型：bool

  ```
  openGauss=# select jsonb_exists_any('["1","2",3]', '{1, 2, 4}');
   jsonb_exists_any
  ------------------
   t
  (1 row)
  ```

- jsonb_cmp(jsonb, jsonb)

  描述：比较大小，正数代表大于，负数代表小于，0表示相等。

  返回类型：integer

  ```
openGauss=# select jsonb_cmp('["a", "b"]', '{"a":1, "b":2}');
   jsonb_cmp
  -----------
          -1
  (1 row)
  ```
  
- jsonb_eq(jsonb, jsonb)

  描述：同操作符 `=`, 比较两个值的大小。

  返回类型：bool

  ```
  openGauss=# select jsonb_eq('["a", "b"]', '{"a":1, "b":2}');
   jsonb_eq
  ----------
   f
  (1 row)
  ```

- jsonb_ne(jsonb, jsonb)

  描述：同操作符 `<>`, 比较两个值的大小。

  返回类型：bool

  ```
  openGauss=# select jsonb_ne('["a", "b"]', '{"a":1, "b":2}');
   jsonb_ne
  ----------
   t
  (1 row)
  ```

- jsonb_gt(jsonb, jsonb)

  描述：同操作符 `>`, 比较两个值的大小。

  返回类型：bool

  ```
  openGauss=# select jsonb_gt('["a", "b"]', '{"a":1, "b":2}');
   jsonb_gt
  ----------
   f
  (1 row)
  ```

- jsonb_ge(jsonb, jsonb)

  描述：同操作符 `>=`, 比较两个值的大小。

  返回类型：bool

  ```
  openGauss=# select jsonb_ge('["a", "b"]', '{"a":1, "b":2}');
   jsonb_ge
  ----------
   f
  (1 row)
  ```

- jsonb_lt(jsonb, jsonb)

  描述：同操作符 `<`, 比较两个值的大小。

  返回类型：bool

  ```
  openGauss=# select jsonb_lt('["a", "b"]', '{"a":1, "b":2}');
   jsonb_lt
  ----------
   t
  (1 row)
  ```

- jsonb_le(jsonb, jsonb)

  描述：同操作符 `<=`, 比较两个值的大小。

  返回类型：bool

  ```
  openGauss=# select jsonb_le('["a", "b"]', '{"a":1, "b":2}');
   jsonb_le
  ----------
   t
  (1 row)
  ```

- to_json(anyelement)

  描述：把参数转换为`json`

  返回类型：json

  ```
  openGauss=# select to_json('{1,5}'::text[]);
    to_json
  -----------
   ["1","5"]
  (1 row)
  ```

