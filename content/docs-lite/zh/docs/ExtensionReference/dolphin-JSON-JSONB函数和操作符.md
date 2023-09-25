# JSON-JSONB函数和操作符

**新增json函数**

- 在`public`中创建同名自定义函数或存储过程可能影响原函数功能，建议用户创建同名自定义函数或存储过程时指定模式名。

- json_array([val[, val] ...])

  描述：输入可变长参数，输出一个 JSON 数组。

  返回类型：array-json

  示例：

  ```
  opengauss=# select json_array(1,'a','b',true,null);
  
          json_array         
  ---------------------------
  
   [1, "a", "b", true, null]
  (1 row)
  ```

- json_object([key, val[, key, val] ...])

  描述：输入参数为交替出现的`key`、`value`。从一个可变参数列表构造出一个 JSON 对象，使用前需设置GUC参数 dolphin.b_compatibility_mode = 1。

  返回类型：json

  备注：

  * 由于 JSON 对象中的所有键为字符串，因此`JSON_OBJECT()`会将不是字符串类型的`key`转为字符串类型。为了保证程序的稳定性，我们一般使用字符串类型的`key`。
  * `key`不能为 NULL 且入参个数应为偶数个。

  示例：

  ```
  opengauss=# SET dolphin.b_compatibility_mode = 1;
  opengauss=# SELECT JSON_OBJECT(
  opengauss(#         'name',
  opengauss(#         'Tim',
  opengauss(#         'age',
  opengauss(#         20,
  opengauss(#         'friend',
  opengauss(#         JSON_OBJECT('name', 'Jim', 'age', 20),
  opengauss(#         'hobby',
  opengauss(#         JSON_BUILD_ARRAY('games', 'sports')
  opengauss(#     ) AS object;
  
                                                  object                                                
  ------------------------------------------------------------------------------------------------------
  
   {"age" : 20, "name" : "Tim", "hobby" : ["games", "sports"], "friend" : {"age" : 20, "name" : "Jim"}}
  (1 row)
  
  opengauss=# SET dolphin.b_compatibility_mode = 0;
  opengauss=# select json_object('{a,b,"a b c"}', '{a,1,1}');
                json_object              
  ---------------------------------------
   {"a" : "a", "b" : "1", "a b c" : "1"}
  (1 row)
  ```

- json_quote(string)

  描述：输入字符串，输出 JSON 文档，并用双引号修饰。

  返回类型：json

  备注：

  * 在opengauss中，通过入参前加`E`来实现转译功能，转译前后与Mysql一致。
  * 在opengauss中，json_quote函数支持数值型。

  示例：

  ```
  opengauss=# select json_quote('gauss');
   json_quote 
  ------------
   "gauss"
  (1 row)
  
  #opengauss反斜杠非转译模式
  opengauss=# select json_quote('\\t\\u0032');
      json_quote    
  ------------------
   "\\\\t\\\\u0032"
  (1 row)
  
  #opengauss反斜杠转译模式
  opengauss=# select json_quote(E'\\t\\u0032');
    json_quote  
  --------------
   "\\t\\u0032"
  (1 row)
  
  #opengauss支持数值型
  opengauss=# select json_quote(1);
   json_quote 
  ------------
   "1"
  (1 row)
  ```

- json_contains(target, candidate[, path])

  描述：`path`可选参数是`target`参数的`path`，返回`target`参数是否包含`candidate`参数。

  返回类型：bool

  备注：

  - 当`path`在`target`中不存在时，函数返回`NULL`。

  示例：

  ```
  openGauss=# select json_contains('[1,2,3,4,5]','[3,5]');
   json_contains 
  ---------------
   t
  (1 row)
  
  openGauss=# select json_contains('[1,2,3,4,5]','6');
   json_contains 
  ---------------
   f
  (1 row)
  
  openGauss=# select json_contains('{"a":[null,true,false]}','{"a":false}');
   json_contains 
  ---------------
   t
  (1 row)
  
  openGauss=# select json_contains('{"a":[1,2,3]}','3');
   json_contains 
  ---------------
   f
  (1 row)
  
  openGauss=# select json_contains('{"a":[1,2,3]}','3','$.a');
   json_contains 
  ---------------
   t
  (1 row)
  
  openGauss=# select json_contains('{"a":[1,2,3]}','3','$.b');
   json_contains 
  ---------------
   
  (1 row)
  ```

- json_contains_path(json_doc, one_or_all, path[, path] ...)

  描述：返回目标`json_doc`参数是否存在输入的`path`参数，`one_or_all`参数选择模式。

  返回类型：bool

  备注：

  - `one_or_all`参数可以为`one`或`all`。

    `one`则只要一个`path`存在即返回`true`，否则返回`false`；`all`则全部`path`存在才返回`true`，否则返回`false`。

  - 若`one_or_all`参数为`one`，则按顺序检查`path`，NULL 的`path`先于任一存在的`path`，则函数返回 NULL；

    若`one_or_all`参数为`all`，则按顺序检查`path`，NULL 的`path`先于任一不存在的`path`，则函数返回 NULL。

  示例：

  ```
  openGauss=# select json_contains_path('{"a": 1, "b": 2, "c": {"d": 4}}', 'one', '$.a', '$.e');
   json_contains_path 
  --------------------
   t
  (1 row)
  
  openGauss=# select json_contains_path('{"a": 1, "b": 2, "c": {"d": 4}}', 'all', '$.a', '$.b','$."c".d');
   json_contains_path 
  --------------------
   t
  (1 row)
  
  openGauss=# select json_contains_path('{"a": 1, "b": 2, "c": {"d": [3,4,5]}}', 'one', '$.c.d[3]');
   json_contains_path 
  --------------------
   f
  (1 row)
  
  openGauss=# select json_contains_path('{"a": 1, "b": 2, "c": {"d": 4}}', 'all', '$.a.d');
   json_contains_path 
  --------------------
   f
  (1 row)
  
  openGauss=# select json_contains_path('[1,2,3]',null,'$[0]');
   json_contains_path 
  --------------------
   
  (1 row)
  
  openGauss=# select json_contains_path('[1,2,3]','one','$[0]',null,'$[1]');
   json_contains_path 
  --------------------
   t
  (1 row)
  
  openGauss=# select json_contains_path('[1,2,3]','one','$[3]',null,'$[1]');
   json_contains_path 
  --------------------
   
  (1 row)
  
  openGauss=# select json_contains_path('[1,2,3]','all','$[0]',null,'$[1]');
   json_contains_path 
  --------------------
   
  (1 row)
  
  openGauss=# select json_contains_path('[1,2,3]','all','$[3]',null,'$[1]');
   json_contains_path 
  --------------------
   f
  (1 row)
  ```

- json_extract(json_doc, path[, path] ...)  

  描述：在 JSON 文档提取路径表达式指定的数据并返回。

  返回类型：json

  示例：

  ```
  opengauss=# select json_extract('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', '$.f4.f6');
   json_extract 
  --------------
   "stringy"
  (1 row)
  ```

- json_unquote(json_val)

  描述：去除文本中的引号，对转义符有所处理，或者舍弃 JSON 值中的引号。

  返回类型：text

  示例：

  ```
  opengauss=# select json_unquote('"dajifa\\tIMIDF"');
   json_unquote  
  ---------------
   dajifa  IMIDF
  (1 row)
  ```

- json_unquote(json_extract(column, path))

  描述：去除文本中的引号，对转义符有所处理，或者舍弃 JSON 值中的引号。

  返回类型：text

  示例：

  ```
  opengauss=# select json_unquote(json_extract('{"a": "lihua"}', '$.a'));
   json_unquote 
  --------------
   lihua
  (1 row)
  ```

- json_keys(json_doc[, path])

  描述：将 JSON 对象的顶级值中的键作为 JSON 数组返回，如果给定了路径参数，则返回路径所指示 JSON 对象的顶级键。

  返回类型：json

  示例：

  ```
  opengauss=# SELECT JSON_KEYS('{"a":123,"b":{"c":"qwe"}}');
  
   json_keys 
  -----------
  
   ["a","b"]
  (1 row)
  ```

- json_search(json_doc，one_or_all，search_str [，escape_char [，path] ...])

  描述：可传入一个或多个路径参数，根据转义符和`one_or_all`模式，返回目标字符串在路径限定下对应目标文件中的所在位置。

  返回类型：text

  备注：

  * 转义符如果为boolean型相当于 NULL，默认`"\"`为转义符，可以直接输入个位数整型作为转义符。
  * 目标json文件和目标字符串不能为空，路径不能含空，如果path不存在则返回空。
  * `one_or_all`只能输入`one`或`all`。
  * `search_str`可以直接输入整型、浮点型、boolean型进行匹配，但是只能匹配目标文件中的字符串。
  * `search_str`可以使用模糊匹配，`path`中可以使用通配符进行匹配。

  示例：

  ```
  opengauss=# select json_search('"abc"','one','abc',true);    
   json_search 
  -------------
   "$"
  (1 row)
  
  opengauss=# select json_search('"a%c"','all','a1%c',1);
   json_search 
  -------------
   "$"
  (1 row)
  
  opengauss=# select json_search('"abc"','one','abc','&','$',null);
   json_search 
  -------------
   
  (1 row)
  
  opengauss=# select json_search('"1.2"','one',1.2);
   json_search 
  -------------
   "$"
  (1 row)
  
  opengauss=# select json_search('{"a":[{"b":["abc","abc"]},"ac"],"c":["abbc","abcc"]}','all','a%c',null,'$.*[*]');
                           json_search                          
  --------------------------------------------------------------
   ["$.a[0].b[0]", "$.a[0].b[1]", "$.a[1]", "$.c[0]", "$.c[1]"]
  (1 row)
  ```

- json_array_append(json, path, value[, path2, value2] ...)

  描述：用来修改 JSON 文档，它向指定的数组节点中追加一个元素，并返回修改后的 JSON 文档。

  返回类型：json

  ```
  opengauss=# select JSON_ARRAY_APPEND('{"name": "Tim", "hobby": "car"}', '$.name', 'food');
  
               json_array_append             
  -------------------------------------------
  
   {"name": ["Tim", "food"], "hobby": "car"}
  (1 row)
  ```

- json_append(json_doc, path, val[, path, val] ...)
  描述：功能同`json_array_append`函数。

  返回类型：json

  备注： `json_append()` 函数可能在将来的版本中被删除，推荐使用`json_array_append`函数。
  示例：

  ```
  opengauss=# select JSON_ARRAY_APPEND('{"name": "Tim", "hobby": "car"}', '$.name', 'food');
  
               json_array_append             
  -------------------------------------------
  
   {"name": ["Tim", "food"], "hobby": "car"}
  (1 row)
  ```

- json_array_insert(json, path, value[, path2, value2] ...)

  描述：函数用来修改 JSON 文档，它向 JSON 文档中的指定的数组中的指定位置插入一个值并返回新的 JSON 文档。

  返回类型：json

  备注：

  * 如果路径表达式指示的数组元素超过了数组的长度，那么新元素将插入到数组的尾部。
  * 如果 JSON 文档或者路径为 NULL，此函数将返回 NULL。

  示例：

  ```
  opengauss=# select json_array_insert('[1, [2, 3], {"a": [4, 5]}]', '$[0]', 0);
        json_array_insert       
  -------------------------------
  [0, 1, [2, 3], {"a": [4, 5]}]
  (1 row)
  
  opengauss=# select json_array_insert('[1, [2, 3], {"a": [4, 5]}]', '$[9]', 4);
        json_array_insert       
  -------------------------------
  [1, [2, 3], {"a": [4, 5]}, 4]
  (1 row)
  ```

* json_insert(json_doc, path, val[, path, val] ...)

  描述：向一个 JSON 文档中插入数据并返回新的 JSON 文档。

  返回类型：json

  备注：当 JSON 文档或`path`为空时，返回空。

  示例：

  ```
  opengauss=# select json_insert('{"x": 1}','$.y',true);
       json_insert     
  ---------------------
   {"x": 1, "y": true}
  (1 row)
  ```

* json_merge(json_doc, json_doc[, json_doc] ...)

  描述：功能同`json_merge_preserve`函数。

  返回类型：json

  备注： `JSON_MERGE()` 函数可能在将来的版本中被删除，推荐使用`json_merge_preserve`函数。

  示例：

  ```
  openGauss=# select json_merge('"opengauss"', '[[1,2],3,"test"]');
              json_merge            
  ----------------------------------
   ["opengauss", [1, 2], 3, "test"]
  (1 row)
  ```

* json_merge_preserve(json_doc, json_doc[, json_doc] ...)

  描述：合并两个及以上的 JSON，相同键值合并为一个数组。

  返回类型：json

  备注：

  * 如果任何参数为NULL则返回NULL。
  * 合并规范：
    - 若相邻的两个 JSON 参数一个为`scalar`或对象，一个为数组。将`scalar`或对象，作为数组元素，按照参数的先后顺序，加入数组参数中，合并为单个数组。
    - 若相邻的两个 JSON 参数都是`scalar`或对象。将`scalar`或对象按照参数的先后顺序，合并为单个数组。
    - 若相邻的两个 JSON 参数都是数组。将两个数组的各个元素，按照参数的先后顺序，合并为单个数组。
    - 若相邻的两个 JSON 参数都是对象。将两个对象的各个成员，按照`key`的顺序，合并为单个对象。
    - 合并 JSON 后的对象成员返回值，全部符合`key`的顺序。

  示例：

  ```
  openGauss=# select json_merge_preserve('{"a":"abc"}', '[1,true,null]');
        json_merge_preserve      
  -------------------------------
   [{"a": "abc"}, 1, true, null]
  (1 row)
  
  openGauss=# select json_merge_preserve('1', '"b"', 'true');
   json_merge_preserve 
  ---------------------
   [1, "b", true]
  (1 row)
  
  openGauss=# select json_merge_preserve('[1,{"a":"abc"}]', '["b",false]');
        json_merge_preserve      
  -------------------------------
   [1, {"a": "abc"}, "b", false]
  (1 row)
      
  openGauss=# select json_merge_preserve('{"b":"abc"}', '{"a":"jks"}');
     json_merge_preserve    
  --------------------------
   {"a": "jks", "b": "abc"}
  (1 row)
      
  openGauss=# select json_merge_preserve(NULL, '1');
   json_merge_preserve 
  ---------------------
   
  (1 row)
  ```

* json_merge_patch(json_doc, json_doc[, json_doc] ...)

  描述：合并两个及以上的  JSON ，相同键值保留后者 JSON 对象键值成员。

  返回类型：json

  备注：

  * 若任一参数为NULL，则之前的参数和该参数的合并结果为 NULL。
  * NULL 参数后面一个参数若非 NULL，则：
    - 后面参数为数组、`scalar`，合并结果为后面参数本身。
    - 后面参数为对象，合并结果为 NULL。
  * 合并规范：
    - 若相邻的两个 JSON 参数都是对象，则合并结果为单个对象。
      * 若一个 JSON 对象的某一成员键在另一个 JSON 对象中没有重复，则在合并结果中保留该成员。
      * 若前一个 JSON 对象的某一成员键在后一个 JSON 对象中重复，则在合并结果中，保留后者 JSON 对象中重复键成员。特别地，当后一个相同键对应对象成员的`value`为 NULL 时，在结果中删除该键成员。
    - 若相邻的两个 JSON 参数存在一个参数不是对象，则合并的结果直接为第二个 JSON 参数。
    - 若任一参数为NULL，则位于该参数之前的参数和该参数的合并结果为 NULL
    - NULL 参数后面一个参数若非 NULL ，则：
      * 后者参数为数组或`scalar`，合并结果为后面参数本身。
      * 后者参数为对象，合并结果为 NULL 。

  示例：

  ```
  openGauss=# select json_merge_patch('{"a":1}', '{"b":2}');
   json_merge_patch 
  ------------------
   {"a": 1, "b": 2}
  (1 row)
  
  openGauss=# select json_merge_patch('{"a":1}', '{"a":2}');
   json_merge_patch 
  ------------------
   {"a": 2}
  (1 row)
  
  openGauss=# select json_merge_patch('{"a":{"b":"abc"}}', '{"a":{"b":null}}');
   json_merge_patch 
  ------------------
   {"a": {}}
  (1 row)
  
  openGauss=# select json_merge_patch('{"a":1}', 'true');
   json_merge_patch 
  ------------------
   true
  (1 row)
  
  openGauss=# select json_merge_patch('{"a":1}', NULL);
   json_merge_patch 
  ------------------
   
  (1 row)
  
  openGauss=# select json_merge_patch(NULL, '{"a":1}');
   json_merge_patch 
  ------------------
   
  (1 row)
  
  openGauss=# select json_merge_patch(NULL, '[1,2,3]');
   json_merge_patch 
  ------------------
   [1, 2, 3]
  (1 row)
  ```

* json_remove(json, path[, path] ...)

  描述：从一个 JSON 文档中删除由路径指定的 JSON 对象并返回修改后的 JSON 文档。

  返回类型：json

  备注：

  * 可以通过参数提供多个路径表达式以供删除。多个路径参数会从左到右依次被执行。当执行下一个参数的时候，JSON 文档可能已经发生了变化。
  * 如果 JSON 中不存在指定的路径，此函数返回原文档。
  * 如果 JSON 文档或者路径为 NULL，此函数将返回 NULL。

  示例：

  ```
  opengauss=# SELECT JSON_REMOVE('[0, 1, 2, [3, 4]]', '$[0]', '$[2]');
   json_remove 
  -------------
   [1, 2]
  (1 row)
  opengauss=# SELECT JSON_REMOVE('{"x": 1, "y": 2}', '$.x');
   json_remove 
  -------------
   {"y": 2}
  (1 row)
  opengauss=# SELECT JSON_REMOVE('{"x": {"z":2,"a":3}, "y": 2}', NULL);
   json_remove 
  -------------
   
  (1 row)
  opengauss=# SELECT JSON_REMOVE(NULL, '$.x.z');
   json_remove 
  -------------
   
  (1 row)
  ```

* json_replace(json_doc, path, val[, path, val] ...)

  描述：在一个 JSON 文档中替换已存在的数据并返回新的 JSON 文档。第一个参数为 JSON 文档，其后为交替出现的路径和替换值。

  返回类型：json

  示例：

  ```
  openGauss=# select json_replace('{"a": 1, "b": 2, "c": 3}', '$.b', 9);
    json_replace
  -------------------
   {"a": 1, "b": 9, "c": 3}
  (1 row)
  ```

* json_set(json_doc, path, val[, path, val] ...))

  描述：输入 JSON 文档，路径和键值，替换 JSON 文档中已有路径对应的键值，对于新增路径，插入对应键值。

  返回类型：json

  示例：

  ```
  opengauss=# select json_set('{"student":{"id":1,"gender":"man"}}','$.age',23,'$.student.id',3);
                     json_set                   
  ----------------------------------------------
   {"age":23,"student":{"id":3,"gender":"man"}}
  (1 row)
  ```

* json_depth(json)

  描述：返回 JSON 文档的最大深度。

  返回类型：integer

  备注：

  * 空数组、空对象或标量值的深度为1。
  * 仅包含深度为1的数组或对象深度为2。
  * JSON 节点的最大深度等于其所有子节点最大深度的最大值。

  示例：

  ```
  openGauss=# SELECT JSON_DEPTH('{}'), JSON_DEPTH('[]'), JSON_DEPTH('true');
   json_depth | json_depth | json_depth 
  ------------+------------+------------
            1 |          1 |          1
  (1 row)
  openGauss=# SELECT JSON_DEPTH('[10, 20]'), JSON_DEPTH('[[], {}]');
   json_depth | json_depth 
  ------------+------------
            2 |          2
  (1 row)
  openGauss=# SELECT JSON_DEPTH('[10, {"a": 20}]');
   json_depth 
  ------------
            3
  (1 row)
  ```

* json_length(json_doc[, path])

  描述：输出JSON长度，如果有路径，则输出该路径对应文档的长度。

  返回类型：integer

  备注：

  * 路径不能含有通配符`*`，并且只能有一个路径。

  示例：

  ```
  opengauss=# select json_length('null');
   json_length 
  -------------
             1
  (1 row)
  
  opengauss=# select json_length('{}');
   json_length 
  -------------
             0
  (1 row)
  
  opengauss=# select json_length('{"a":1,"b":2,"c":3,"d":4}');
   json_length 
  -------------
             4
  (1 row)
  
  opengauss=# select json_length('{"a":"abc","b":"abc"}','$.a');
   json_length 
  -------------
             1
  (1 row)
  ```


* json_type(json_val)

  描述：输入为JSON文档，返回数据类型。

  返回类型：text

  示例：

  ```
  opengauss=# select json_type('"aa"');
   json_type 
  -----------
   STRING
  (1 row)
  
  opengauss=# select json_type('null');
   json_type 
  -----------
   NULL
  (1 row)
  
  opengauss=# select json_type('[1,2]');
   json_type 
  -----------
   ARRAY
  (1 row)
  
  opengauss=# select json_type('{"w":1}');
   json_type 
  -----------
   OBJECT
  (1 row)
  
  opengauss=# select json_type('11');
   json_type 
  -----------
   INTEGER
  (1 row)
  ```

* json_valid(val)

  描述：判断输入文本是否是合法的 JSON 。

  返回类型：bool

  备注：

  - 若输入的`val`参数是 JSON 类型，该函数返回 `true`。
  - 若所输入字符串需要转义，在单引号前加`E`，字符串转义语法是（`E'...'`）。

   示例：

  ```
  openGauss=# select json_valid('{"a":[1,2,3]}');
   json_valid 
  ------------
   t
  (1 row)
  
  openGauss=# select json_valid('{"a":[1,2,3]}');
   json_valid 
  ------------
   t
  (1 row)
  
  openGauss=# select json_valid('{"a":[[1,2,3]}');
   json_valid 
  ------------
   f
  (1 row)
  
  openGauss=# select json_valid('0.3135621312');
   json_valid 
  ------------
   t
  (1 row)
  
  openGauss=# select json_valid('03135621312');
   json_valid 
  ------------
   f
  (1 row)
  
  openGauss=# select json_valid('{"a":true}'::json);
   json_valid 
  ------------
   t
  (1 row)
  ```

* json_pretty(json)

  描述：格式化输出一个 JSON 文档，以便更易于阅读。

  返回类型：json 

  示例：

  ```
  opengauss=# select JSON_PRETTY('{"a": 43}');
   json_pretty 
  -------------
     {        +
     "a": 43  +
   }
  (1 row)
  
  opengauss=# select JSON_PRETTY('{}');
   json_pretty 
  -------------
     {}
  (1 row)
  
  opengauss=# select JSON_PRETTY('{"a":[{"age": 43, "name": "lihua"}, [[[[43,33, []]]]], "hello"]}');
        json_pretty      
  -----------------------
     {                  +
     "a": [             +
       {                +
         "age": 43,     +
         "name": "lihua"+
       },               +
       [                +
         [              +
           [            +
             [          +
               43,      +
               33,      +
               []       +
             ]          +
           ]            +
         ]              +
       ],               +
       "hello"          +
     ]                  +
   }
  (1 row)
  ```

* json_storage_size(json)

  描述：`JSON_STORAGE_SIZE()` 函数返回存储一个 JSON 文档的二进制表示所占用的字节数。

  返回类型：integer

  备注：

  * json是必需的。一个 JSON 文档。它可以是一个 JSON 字符串，或者一个 JSON 列。根据实际存储方式的差异，调用opengauss内部函数计算json在opengauss中的具体存储大小，其结果与mysql不同。

  示例：

  ```
  opengauss=# SELECT JSON_STORAGE_SIZE('0');
   json_storage_size 
  -------------------
                   2
  (1 row)
  
  opengauss=# SELECT JSON_STORAGE_SIZE('"Hello World"');
   json_storage_size 
  -------------------
                  14
  (1 row)
  
  opengauss=# SELECT JSON_STORAGE_SIZE('[1, "abc", null, true, "10:27:06.000000", {"id": 1}]');
   json_storage_size 
  -------------------
                  53
  (1 row)
  
  opengauss=# SELECT JSON_STORAGE_SIZE('{"x": 1, "y": 2}');
   json_storage_size 
  -------------------
                  17
  (1 row)
  ```

* json_arrayagg(col_or_expr)

  描述：`json_arrayagg`函数返回一个 JSON_ARRAY型数组，它将指定列中的值聚合。

  备注：

  * 如果结果集没有任何行，此函数将返回 NULL。

  示例：

  ```
  opengauss=# CREATE TEMP TABLE foo1 (serial_num int, name text, type text);
  opengauss=# INSERT INTO foo1 VALUES (847001,'t15','GE1043');
  opengauss=# INSERT INTO foo1 VALUES (847002,'t16','GE1043');
  opengauss=# INSERT INTO foo1 VALUES (847003,'sub-alpha','GESS90');
  opengauss=# SELECT json_arrayagg(serial_num)
  FROM foo1;
        json_arrayagg       
  --------------------------
   [847001, 847002, 847003]
  (1 row)
  
  opengauss=# SELECT json_arrayagg(type)
  FROM foo1;
           json_arrayagg          
  --------------------------------
   ["GE1043", "GE1043", "GESS90"]
  (1 row)
  
  ```

* json_objectagg(key, value)

  描述：将由第一个参数作为键和第二个参数作为值的键值对聚合为一个 JSON 对象。

  返回类型：object-json

  备注：

  * 如果结果集没有任何行，此函数将返回 NULL。

  示例：

  ```
  openGauss=# select * from City;
      district     |     name      | population 
  -----------------+---------------+------------
   Capital Region  | Canberra      |     322723
   New South Wales | Sydney        |    3276207
   New South Wales | Newcastle     |     270324
   New South Wales | Central Coast |     227657
   New South Wales | Wollongong    |     219761
   Queensland      | Brisbane      |    1291117
   Queensland      | Gold Coast    |     311932
   Queensland      | Townsville    |     109914
   Queensland      | Cairns        |      92273
   South Australia | Adelaide      |     978100
   Tasmania        | Hobart        |     126118
   Victoria        | Melbourne     |    2865329
   Victoria        | Geelong       |     125382
   West Australia  | Perth         |    1096829
  (14 rows)
  
  openGauss=# SELECT 
  openGauss-#   District AS State,
  openGauss-#   JSON_OBJECTAGG(Name, Population) AS "City/Population"
  openGauss-# FROM City
  openGauss-# GROUP BY State;
        state      |                                     City/Population                                     
  -----------------+-----------------------------------------------------------------------------------------
   West Australia  | {"Perth": 1096829}
   Queensland      | {"Cairns": 92273, "Brisbane": 1291117, "Gold Coast": 311932, "Townsville": 109914}
   New South Wales | {"Sydney": 3276207, "Newcastle": 270324, "Wollongong": 219761, "Central Coast": 227657}
   Tasmania        | {"Hobart": 126118}
   Victoria        | {"Geelong": 125382, "Melbourne": 2865329}
   South Australia | {"Adelaide": 978100}
   Capital Region  | {"Canberra": 322723}
  (7 rows)
  ```

- column->path

  描述：相当于`json_extract`的别名，在JSON文档提取路径表达式指定的数据并返回，操作符`->`要在查表操作中进行。

  返回类型:   json

  示例：

  ```
  opengauss=# create table test(data json);
  CREATE TABLE
  opengauss=# insert into test values('{"a":"lihua"}');
  INSERT 0 1
  opengauss=# select data->'$.a' from test;
   ?column? 
  ----------
   "lihua"
  (1 row)
  
  ```

- column->>path

  描述：功能类似于`json_unquote(json_extract(json,path))`，`json_unquote(column->path)`，取消对JSON文档中提取的数据引号的引用，操作符`->>`要在查表操作中进行。

  返回类型:  text

  示例：

  ```
  opengauss=# create table test(data json);
  CREATE TABLE
  opengauss=# insert into test values('{"a":"lihua"}');
  INSERT 0 1
  opengauss=# select data->>'$.a' from test;
   ?column? 
  ----------
    lihua
  (1 row)
  ```