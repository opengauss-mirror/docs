**New JSON Functions**

- json_array([val[, val] ...])

  Description: Inputs variable-length parameters and outputs a JSON array.

  Return type: array-json

  Example: 

  ```
  opengauss=# select json_array(1,'a','b',true,null);
  
          json_array         
  ---------------------------
  
   [1, "a", "b", true, null]
  (1 row)
  ```

- json_object([VARIADIC "any"])

  Description: Inputs parameters with `key` and `value` that appear alternately. Constructs a JSON object from a variable parameter list. Before using the JSON object, set the GUC parameter **dolphin.b\_compatibility\_mode** to **1**.

  Return type: json

  Remarks:

  * All keys in a JSON object are character strings. Therefore, `JSON_OBJECT()` converts `keys` that are not of the character string type to the character string type. To ensure program stability, `keys` of the string type are used.
  * The `key` cannot be NULL, and the number of input parameters must be an even number.

  Example: 

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

  Description: Inputs a character string, outputs a JSON file, and quotes the file with double quotation marks.

  Return type: json

  Example: 

  ```
  opengauss=# select json_quote('gauss');
   json_quote 
  ------------
   "gauss"
  (1 row)
  ```

- json_contains(json, json[, text])

  Description: The third optional parameter is the `path` of the first JSON parameter. It determines whether the first JSON parameter contains the second JSON parameter.

  Return type: Boolean

  Remarks:

  - If any parameter is NULL, the function returns NULL.
  - If the `path` does not exist in JSON, the function returns `NULL`.

  Example: 

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

  Description: Determines whether the target JSON parameter contains the input `path` parameter. The second parameter is used to select a mode.

  Return type: Boolean

  Remarks:

  - The second parameter can be `one` or `all`.

    `one` indicates that `true` is returned as long as one `path` exists. Otherwise, `false` is returned. `all` indicates that `true` is returned only when all `paths` exist. Otherwise, `false` is returned.

  - If the first and second parameters are `NULL`, the function returns NULL.

  - If the mode is `one`, `paths` are checked in sequence. If a NULL `path` is prior to any existing `path`, NULL is returned.

    If the mode is `all`, `paths` are checked in sequence. If a NULL `path` is prior to any `path` that does not exist, the function returns NULL.

  Example: 

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

  Description: Extracts the data specified by the path expression from a JSON file and returns the data.   

  Return type: json

  Example: 

  ```
  opengauss=# select json_extract('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', '$.f4.f6');
   json_extract 
  --------------
   "stringy"
  (1 row)
  ```

- json_unquote(json_val)

  Description: Removes quotation marks from text, processes escape characters, or discards quotation marks in JSON values.

  Return type: text

  Example: 

  ```
  opengauss=# select json_unquote('"dajifa\\tIMIDF"');
   json_unquote  
  ---------------
   dajifa  IMIDF
  (1 row)
  ```

- json_unquote(json_extract(column, path))

  Description: Removes quotation marks from text, processes escape characters, or discards quotation marks in JSON values.

  Return type: text

  Example: 

  ```
  opengauss=# select json_unquote(json_extract('{"a": "lihua"}', '$.a'));
   json_unquote 
  --------------
   lihua
  (1 row)
  ```

- json_keys(json_doc[, path])

  Description: Returns the key in the top-level value of a JSON object as a JSON array. If a path parameter is given, the top-level key of the JSON object indicated by the path is returned.

  Return type: json

  Example: 

  ```
  opengauss=# SELECT JSON_KEYS('{"a":123,"b":{"c":"qwe"}}');
  
   json_keys 
  -----------
  
   ["a","b"]
  (1 row)
  ```

- json_search(json_doc, one_or_all, search_str [, escape_char [, path] ...])

  Description: One or more path parameters can be input. The location of the target character string in the target file corresponding to the path is returned based on the escape character and `one_or_all` mode.

  Return type: text

  Remarks:

  * If the escape character is of the Boolean type, it is equivalent to NULL. By default, the backslash (\) is the escape character. You can enter a single-digit integer as the escape character.
  * The target JSON file and target character string cannot be empty, and the path cannot be empty. If the path does not exist, an empty value is returned.
  * The value of `one_or_all` can only be `one` or `all`.
  * You can enter an integer, floating point, or Boolean value in `search_str` for matching. However, only character strings in the target file can be matched.
  * Fuzzy match can be used for`search_str`, and wildcard characters can be used for matching in `path`.

  Example: 

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

  Description: Modifies a JSON document, appends an element to a specified array node, and returns the modified JSON document.

  Return type: json

  ```
  opengauss=# select JSON_ARRAY_APPEND('{"name": "Tim", "hobby": "car"}', '$.name', 'food');
  
               json_array_append             
  -------------------------------------------
  
   {"name": ["Tim", "food"], "hobby": "car"}
  (1 row)
  ```

- json_append(json_doc, path, val[, path, val] ...)
  Description: The function is the same as that of the `json_array_append` function.

  Return type: json

  Note: The `json_append()` function may be deleted in later versions. You are advised to use the `json_array_append` function.
  Example: 

  ```
  opengauss=# select JSON_ARRAY_APPEND('{"name": "Tim", "hobby": "car"}', '$.name', 'food');
  
               json_array_append             
  -------------------------------------------
  
   {"name": ["Tim", "food"], "hobby": "car"}
  (1 row)
  ```

- json_array_insert(json, path, value[, path2, value2] ...)

  Description: This function is used to modify a JSON document. It inserts a value into a specified position in a specified array in the JSON document and returns a new JSON document.

  Return type: json

  Remarks:

  * If the array element indicated by the path expression exceeds the length of the array, the new element is inserted at the end of the array.
  * If the JSON document or path is NULL, this function returns NULL.

  Example: 

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

  Description: Inserts data into a JSON document and returns a new JSON document.

  Return type: json

  Remarks: When the JSON document or `path` is empty, an empty value is returned.

  Example: 

  ```
  opengauss=# select json_extract('{"x": 1}','$.y', true);
         json_extract       
  ----------------------------
   {"x": 1, "y": true}
  (1 row)
  ```

* json_merge(json_doc, json_doc[, json_doc] ...)

  Description: The function is the same as that of the `json_merge_preserve` function.

  Return type: json

  Note: The `JSON_MERGE()` function may be deleted in later versions. You are advised to use the `json_merge_preserve` function.

  Example: 

  ```
  openGauss=# select json_merge('"opengauss"', '[[1,2],3,"test"]');
              json_merge            
  ----------------------------------
   ["opengauss", [1, 2], 3, "test"]
  (1 row)
  ```

* json_merge_preserve(json_doc, json_doc[, json_doc] ...)

  Description: Combines two or more JSON files with the same key-value into one array.

  Return type: json

  Remarks:

  * If the value of any parameter is NULL, NULL is returned. 
  * Merging specifications:
    - If one of the two adjacent JSON parameters is a `scalar` or object and the other is an array, the `scalar` or object is added to an array parameter as an array element based on the parameter sequence to combine the scalar or object into a single array.
    - If two adjacent JSON parameters are both `scalars` or objects, combine `scalars` or objects into a single array based on the parameter sequence.
    - If two adjacent JSON parameters are both arrays, combine elements of two arrays into a single array based on the parameter sequence.
    - If two adjacent JSON parameters are both objects, combine the members of two objects into a single object based on the `key` sequence.
    - The returned values of object members after JSON combination comply with the `key` sequence.

  Example: 

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

  Description: Combines two or more JSON objects and retains the JSON object key members of the same key value.

  Return type: json

  Remarks:

  * If any parameter is NULL, the merge result of the previous parameter and this parameter is NULL.
  * If the parameter following the NULL parameter is not NULL:
    - The following parameters are arrays and scalar. The merge result is the following parameters.
    - The following parameters are objects, and the merge result is NULL.
  * Merging specifications:
    - If two adjacent JSON parameters are objects, the combination result is a single object.
      * If a member key of a JSON object is not duplicate in another JSON object, the member is retained in the merge result.
      * If a member key of a JSON object is duplicate in the next JSON object, the duplicate key member in the latter JSON object is retained in the merge result. In particular, when the `value` of the object member corresponding to the next same key is NULL, the key member is deleted from the result.
    - If one of the two adjacent JSON parameters is not an object, the merge result is the second JSON parameter.
    - If any parameter is NULL, the merge result of the previous parameter and this parameter is NULL.
    - If the parameter following the NULL parameter is not NULL:
      * The latter parameter is an array or `scalar`. The merge result is the latter parameter itself.
      * The latter parameter is an object. The merge result is NULL.

  Example: 

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

  Description: Deletes the JSON object specified by the path from a JSON document and returns the modified JSON document.

  Return type: json

  Remarks:

  * Multiple path expressions can be provided for deletion through parameters. Multiple path parameters are executed from left to right. When the next parameter is executed, the JSON document may have changed.
  * If the specified path does not exist in JSON, this function returns the original document.
  * If the JSON document or path is NULL, this function returns NULL.

  Example: 

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

* json_replace([VARIADIC "any"])

  Description: Replaces existing data in a JSON document and returns a new JSON document. The first parameter is a JSON document, followed by an alternate path and replacement value.

  Return type: json

  Example: 

  ```
  openGauss=# select json_replace('{"a": 1, "b": 2, "c": 3}', '$.b', 9);
    json_replace
  -------------------
   {"a": 1, "b": 9, "c": 3}
  (1 row)
  ```

* json_set(json_doc, path, val[, path, val] ...))

  Description: Enters the JSON file, path, and key value to replace the key value corresponding to the existing path in the JSON file. For a new path, inserts the corresponding key value.

  Return type: json

  Example: 

  ```
  opengauss=# select json_set('{"student":{"id":1,"gender":"man"}}','$.age',23,'$.student.id',3);
                     json_set                   
  ----------------------------------------------
   {"age":23,"student":{"id":3,"gender":"man"}}
  (1 row)
  ```

* json_depth(json)

  Description: Returns the maximum depth of a JSON document.

  Return type: integer

  Remarks:

  * The depth of an empty array, empty object, or scalar value is 1.
  * Only arrays whose depth is 1 or objects whose depth is 2 are contained.
  * The maximum depth of a JSON node is equal to the maximum depth of all its subnodes.

  Example: 

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
