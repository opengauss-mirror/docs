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

  描述：输入字符串，输出json文档，并用双引号修饰

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

    若模式为'all'，则按顺序检查path，NULL的path先于任一不存在的path，则函数返回NULL；

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



- json_unquote（json_val)

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

  备注

  * 转义符如果为boolean型相当于NULL，默认`”\“`为转义符，可以直接输入个位数整型作为转义符
  * 目标json文件和目标字符串不能为空，路径不能含空，如果path不存在则返回空
  * `one_or_all`只能输入`one`或`all`
  * `search_str`可以直接输入整型、浮点型、boolean型进行匹配，但是只能匹配目标文件中的字符串
  * `search_str`可以使用模糊匹配，path中可以使用通配符进行匹配

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

  描述：用来修改 JSON 文档，它向指定的数组节点中追加一个元素，并返回修改后的 JSON 文档

  返回类型：json

  ```
  
  opengauss=# select JSON_ARRAY_APPEND('{"name": "Tim", "hobby": "car"}', '$.name', 'food');
  
               json_array_append             
  -------------------------------------------
  
   {"name": ["Tim", "food"], "hobby": "car"}
  (1 row)
  ```

  

- json_append(json_doc, path, val[, path, val] ...)
  描述：用来修改 JSON 文档，它向指定的数组节点中追加一个元素，并返回修改后的 JSON 文档

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
