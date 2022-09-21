**新增json函数**

- json_array([val[, val] ...])

  描述：输入可变长参数，输出一个json数组。

  返回类型：array-json

  示例：

  ```
  opengauss=# select json_array(1,'a','b',true,null);
  
          json_array         
  ---------------------------
  
   [1, "a", "b", true, null]
  (1 row)
  ```

- json_object(key, value[, key2, value2, ...])

  描述：由于JSON对象中的所有键为字符串，因此JSON_OBJECT()会将不是字符串类型的key转为字符串类型。为了保证程序的稳定性，我们一般使用字符串类型的key。

  返回类型：json

  示例：

  ```
  opengauss=# SET b_compatibility_mode = 1;
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
  
  opengauss=# SET b_compatibility_mode = 0;
  opengauss=# select json_object('{a,b,"a b c"}', '{a,1,1}');
                json_object              
  ---------------------------------------
   {"a" : "a", "b" : "1", "a b c" : "1"}
  (1 row)
  ```

- json_quote(string)

  描述：输入字符串，输出json文档，并用双引号修饰。

  返回类型：json

  示例：

  ```
  opengauss=# select json_quote('gauss');
   json_quote 
  ------------
   "gauss"
  (1 row)
  ```

- json_contains(json, json[, text])

  描述：第三个可选参数是第一个json参数的path，返回第一个json参数是否包含第二个json参数。

  返回类型：bool

  备注：

  - 任一参数为NULL，函数返回NULL。
  - 当path在json中不存在时，函数返回NULL。

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

- json_contains_path(json, text, text[])

  描述：返回目标json参数是否存在输入的path参数，第二个参数选择模式。

  返回类型：bool

  备注：

  - 第二个参数可以为'one'或'all'。

    'one'则只要一个path存在即返回true，否则返回false；'all'则全部path存在才返回true，否则返回false。

  - 第一、二个参数为NULL，函数返回NULL。

  - 若模式为'one'，则按顺序检查path，NULL的path先于任一存在的path，则函数返回NULL；

    若模式为'all'，则按顺序检查path，NULL的path先于任一不存在的path，则函数返回NULL。

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

- json_extract(json, VARIADIC text[])  

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

  描述：去除文本中的引号，对转义符有所处理，或者舍弃json值中的引号。

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

  描述：去除文本中的引号，对转义符有所处理，或者舍弃json值中的引号。

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

  描述：将JSON对象的顶级值中的键作为 JSON 数组返回，或如果给定了路径参数，则返回所选路径中的顶级键。

  返回类型：text

  示例：

  ```
  opengauss=# SELECT JSON_KEYS('{"a":123,"b":{"c":"qwe"}}');
  
   json_keys 
  -----------
  
   ["a","b"]
  (1 row)
  ```

- json_search(json_doc，one_or_all，search_str [，escape_char [，path] ...])

  描述：可传入一个或多个路径参数，根据转义符和one_or_all模式，返回目标字符串在路径限定下对应目标文件中的所在位置。

  返回类型：text

  备注：

  * 转义符如果为boolean型相当于NULL，默认`”\“`为转义符，可以直接输入个位数整型作为转义符。
  * 目标json文件和目标字符串不能为空，路径不能含空，如果path不存在则返回空。
  * `one_or_all`只能输入`one`或`all`。
  * `search_str`可以直接输入整型、浮点型、boolean型进行匹配，但是只能匹配目标文件中的字符串。
  * `search_str`可以使用模糊匹配，path中可以使用通配符进行匹配。

  示例：

  ```
  select json_search('"abc"','one','abc',true);    
   json_search 
  -------------
   "$"
  (1 row)
  
  select json_search('"a%c"','all','a1%c',1);
   json_search 
  -------------
   "$"
  (1 row)
  
  select json_search('"abc"','one','abc','&','$',null);
   json_search 
  -------------
   
  (1 row)
  
  select json_search('"1.2"','one',1.2);
   json_search 
  -------------
   "$"
  (1 row)
  
  select json_search('{"a":[{"b":["abc","abc"]},"ac"],"c":["abbc","abcc"]}','all','a%c',null,'$.*[*]');
                         json_search                        
  ----------------------------------------------------------
   ["$.a[0].b[0]","$.a[0].b[1]","$.a[1]","$.c[0]","$.c[1]"]
  (1 row)
  
  select json_search(''{"a":[{"b":["abc","abc"]},"ac"],"c":["abbc","abcc"]}','all','a%c',null,'$**[1]');
              json_search            
  -----------------------------------
   ["$.a[0].b[1]","$.a[1]","$.c[1]"]
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
  描述：用来修改 JSON 文档，它向指定的数组节点中追加一个元素，并返回修改后的 JSON 文档。

  返回类型：json

  备注：json_append和json_array_append两个函数没有区别，json_append是通过调用json_array_append函数来实现其功能。
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
  select json_array_insert('[1, [2, 3], {"a": [4, 5]}]', '$[0]', 0);
        json_array_insert       
  -------------------------------
  [0, 1, [2, 3], {"a": [4, 5]}]
  (1 row)
  
  
  select json_array_insert('[1, [2, 3], {"a": [4, 5]}]', '$[9]', 4);
        json_array_insert       
  -------------------------------
  [1, [2, 3], {"a": [4, 5]}, 4]
  (1 row)
  ```

* json_insert(VARIADIC "any")

  描述：向一个 JSON 文档中插入数据并返回新的 JSON 文档。

  返回类型：json

  备注：当jsondoc或path为空时，返回空。

  示例：

  ```
  opengauss=# select json_extract('{"x": 1}','$.y'，true);
         json_extract       
  ----------------------------
   {"x": 1, "y": true}
  (1 row)
  ```

* json_merge(json_doc, json_doc[, json_doc] ...)

  描述：功能同`json_merge_preserve`函数。

  备注： `JSON_MERGE()` 函数可能在将来的版本中被删除，推荐使用`json_merge_preserve`函数。

  示例：

  ```
  openGauss=# select json_merge('[1, 2]', '[true, false]');
       json_merge      
  ---------------------
   [1, 2, true, false]
  (1 row)
  ```

* json_merge_preserve(json_doc, json_doc[, json_doc] ...)

  描述：合并两个或多个 JSON 并返回合并结果。若任意参数不是有效的 JSON ，会发生错误。

  返回类型：json

  备注：

  * 如果任何参数为NULL则返回NULL。
  * 合并规范：
    - 相邻数组合并为单个数组。
    - 相邻对象将合并到单个对象中。
    - `scalar`自动包装为数组并合并为数组。
    - 通过将相邻的数组和对象自动包装为数组并合并两个数组来合并。

  示例：

  ```
  openGauss=# SELECT JSON_MERGE_PRESERVE('[1, 2]', '[true, false]');
   json_merge_preserve 
  ---------------------
   [1, 2, true, false]
  (1 row)
  
  openGauss=# SELECT JSON_MERGE_PRESERVE('{"name": "x"}', '{"id": 47}');
     json_merge_preserve   
  -------------------------
   {"id": 47, "name": "x"}
  (1 row)
  
  openGauss=# SELECT JSON_MERGE_PRESERVE('1', 'true');
   json_merge_preserve 
  ---------------------
   [1, true]
  (1 row)
  
  openGauss=# SELECT JSON_MERGE_PRESERVE('[1, 2]', '{"id": 47}');
   json_merge_preserve 
  ---------------------
   [1, 2, {"id": 47}]
  (1 row)
  
  openGauss=# SELECT JSON_MERGE_PRESERVE('{ "a": 1, "b": 2 }',
  gary(#    '{ "a": 3, "c": 4 }');
        json_merge_preserve      
  -------------------------------
   {"a": [1, 3], "b": 2, "c": 4}
  (1 row)
  
  openGauss=# SELECT JSON_MERGE_PRESERVE('{ "a": 1, "b": 2 }','{ "a": 3, "c": 4 }',
  gary(#    '{ "a": 5, "d": 6 }');
             json_merge_preserve            
  ------------------------------------------
   {"a": [1, 3, 5], "b": 2, "c": 4, "d": 6}
  (1 row)
  ```

* json_merge_patch(json_doc, json_doc[, json_doc] ...)

  描述：对两个或多个 JSON 执行符合`RFC 7396`的合并，并返回合并结果，不保留具有重复键的成员。若任意参数不是有效的 JSON ，会发生错误。

  返回类型：json

  备注：

  * 若任一参数为NULL，则之前的参数和该参数的合并结果为NULL。
  * NULL参数后面一个参数若非NULL，则：
    - 后面参数为数组、`scalar`，合并结果为后面参数本身。
    - 后面参数为对象，合并结果为NULL。
  * 合并规范：
    - 如果第一个参数不是对象，则相当于第一个参数为空对象。合并的结果为，空对象与第二个参数合并的结果。
    - 如果第二个参数不是对象，合并的结果直接为第二个参数。
    - 如果两个参数都是对象，则合并的结果是具有以下成员的对象：
      - 在第二个对象中找不到具有相同键的相应成员的，第一个对象的所有成员。
      - 在第一个对象中找不到具有相同键的相应成员的，并且其值不是`null`的，第二个对象的所有成员。
      - 具有同时存在于第一个和第二个对象中的键，并且其在第二个对象中的值不是`null`的所有成员。这些成员的值是递归地将第一个对象中的值与第二个对象中的值合并的结果。
    - 可以使用这个函数通过在第二个参数中指定`null`作为值，来删除相应成员。
    - 函数以递归方式操作。成员的值可以不限于 JSON 的`scalar`。

  示例：

  ```
  openGauss=# select json_merge_patch('[1, 2]', '[true, false]');
   json_merge_patch 
  ------------------
   [true, false]
  (1 row)
  
  openGauss=# select json_merge_patch('{"name": "x"}', '{"id": 47}');
      json_merge_patch     
  -------------------------
   {"id": 47, "name": "x"}
  (1 row)
  
  openGauss=# select json_merge_patch('1', 'true');
   json_merge_patch 
  ------------------
   true
  (1 row)
  
  openGauss=# select json_merge_patch('[1, 2]', '{"id": 47}');
   json_merge_patch 
  ------------------
   {"id": 47}
  (1 row)
  
  openGauss=# select json_merge_patch('{ "a": 1, "b":2 }','{ "a": 3, "c":4 }');
       json_merge_patch     
  --------------------------
   {"a": 3, "b": 2, "c": 4}
   
  openGauss=# select json_merge_patch('{ "a": 1, "b":2 }','{ "a": 3, "c":4 }','{ "a": 5, "d":6 }');
           json_merge_patch         
  ----------------------------------
   {"a": 5, "b": 2, "c": 4, "d": 6}
  (1 row)
  
  openGauss=# select json_merge_patch('{"a":1, "b":2}', '{"b":null}');
   json_merge_patch 
  ------------------
   {"a": 1}
  (1 row)
  
  openGauss=# select json_merge_patch('{"a":{"x":1}}', '{"a":{"y":2}}');
      json_merge_patch     
  -------------------------
   {"a": {"x": 1, "y": 2}}
  (1 row)
  ```

* json_remove(json, path[, path] ...)

  描述：从一个 JSON 文档中删除由路径指定的数据并返回修改后的 JSON 文档。

  返回类型：json

  备注：

  * 可以通过参数提供多个路径表达式以供删除。多个路径参数会从左到右依次被执行。当执行下一个参数的时候，JSON 文档可能已经发生了变化。
  * 如果 JSON 中不存在指定的路径，此函数返回原文档。
  * 如果 JSON 文档或者路径为 `NULL`，此函数将返回 `NULL`。

  示例：

  ```
  SELECT JSON_REMOVE('[0, 1, 2, [3, 4]]', '$[0]', '$[2]');
   json_remove 
  -------------
   [1, 2]
  (1 row)
  SELECT JSON_REMOVE('{"x": 1, "y": 2}', '$.x');
   json_remove 
  -------------
   {"y": 2}
  (1 row)
  SELECT JSON_REMOVE('{"x": {"z":2,"a":3}, "y": 2}', NULL);
   json_remove 
  -------------
   
  (1 row)
  SELECT JSON_REMOVE(NULL, '$.x.z');
   json_remove 
  -------------
   
  (1 row)
  ```

* json_replace([VARIADIC “any”])

  描述：在一个 JSON 文档中替换已存在的数据并返回新的 JSON 文档。第一个参数为JSON文档，其后为交替出现的路径和替换值。

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

  描述：输入json文档，路径和键值，替换json文档中已有路径对应的键值，对于新增路径，插入对应键值。

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

  描述：返回JSON文档的最大深度。

  返回类型：integer

  备注：

  * 空数组、空对象或标量值的深度为1。
  * 仅包含深度为1的元素的非空数组或仅包含深度为1的成员值的非空对象的深度为2。否则，JSON文档的深度大于2。

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