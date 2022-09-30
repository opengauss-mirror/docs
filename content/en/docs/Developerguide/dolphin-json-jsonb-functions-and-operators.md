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

- json_object(key, value[, key2, value2, ...])

  Description: All keys in a JSON object are character strings. Therefore, JSON\_OBJECT() converts keys that are not of the character string type to the character string type. To ensure program stability, keys of the string type are used.

  Return type: json

  Example: 

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

  Description: The third optional parameter is the path of the first JSON parameter. It determines whether the first JSON parameter contains the second JSON parameter.

  Return type: Boolean

  Remarks:

  - If any parameter is NULL, the function returns NULL.
  - If the path does not exist in JSON, the function returns NULL.

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

  Description: Determines whether the target JSON parameter contains the input path parameter. The second parameter is used to select a mode.

  Return type: Boolean

  Remarks:

  - The second parameter can be 'one' or 'all'.

    'one' indicates that true is returned as long as one path exists. Otherwise, false is returned. 'all' indicates that true is returned only when all paths exist. Otherwise, false is returned.

  - If the first and second parameters are NULL, the function returns NULL.

  - If the mode is 'one', paths are checked in sequence. If a NULL path is prior to any existing path, NULL is returned.

    If the mode is 'all', paths are checked in sequence. If a NULL path is prior to any path that does not exist, the function returns NULL.

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

  Description: Returns the key in the top-level value of a JSON object as a JSON array, or returns the top-level key in the selected path if a path parameter is given.

  Return type: text

  Example: 

  ```
  opengauss=# SELECT JSON_KEYS('{"a":123,"b":{"c":"qwe"}}');
  
   json_keys 
  -----------
  
   ["a","b"]
  (1 row)
  ```

- json_search(json_doc, one_or_all, search_str [, escape_char [, path] ...])

  Description: One or more path parameters can be input. The location of the target character string in the target file corresponding to the path is returned based on the escape character and one\_or\_all mode.

  Return type: text

  Remarks:

  * If the escape character is of the Boolean type, it is equivalent to NULL. By default, the backslash (\) is the escape character. You can enter a single-digit integer as the escape character.
  * The target JSON file and target character string cannot be empty, and the path cannot be empty. If the path does not exist, an empty value is returned.
  * The value of **one\_or\_all** can only be **one** or **all**.
  * You can enter an integer, floating point, or Boolean value in search\_str for matching. However, only character strings in the target file can be matched.
  * Fuzzy match can be used for search\_str, and wildcard characters can be used for matching in path.

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
  Description: Modifies a JSON document, appends an element to a specified array node, and returns the modified JSON document.

  Return type: json

  Note: The json\_append and json_array_append functions are the same. The json\_append function is implemented by invoking the json\_array\_append function.
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

  Remarks: When jsondoc or path is empty, an empty value is returned.

  Example: 

  ```
  opengauss=# select json_extract('{"x": 1}','$.y', true);
         json_extract       
  ----------------------------
   {"x": 1, "y": true}
  (1 row)
  ```

* json_merge(json_doc, json_doc[, json_doc] ...)

  Description: The function is the same as that of the json\_merge\_preserve function.

  Note: The JSON\_MERGE() function may be deleted in later versions. You are advised to use the json\_merge\_preserve function.

  Example: 

  ```
  openGauss=# select json_merge('[1, 2]', '[true, false]');
       json_merge      
  ---------------------
   [1, 2, true, false]
  (1 row)
  ```

* json_merge_preserve(json_doc, json_doc[, json_doc] ...)

  Description: Merges two or more JSON files and returns the merging result. If any parameter is not a valid JSON, an error occurs.

  Return type: json

  Remarks:

  * If the value of any parameter is NULL, NULL is returned. 
  * Merging specifications:
    - Adjacent arrays are merged into a single array.
    - Adjacent objects are merged into a single object.
    - The scalar is automatically wrapped as an array and merged into an array.
    - Merge is performed by automatically wrapping adjacent arrays and objects into arrays and merging two arrays.

  Example: 

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

  Description: Performs an RFC 7396-compliant merge on two or more JSONs and returns the merge result. Members with duplicate keys are not retained. If any parameter is not a valid JSON, an error occurs.

  Return type: json

  Remarks:

  * If any parameter is NULL, the merge result of the previous parameter and this parameter is NULL.
  * If the parameter following the NULL parameter is not NULL:
    - The following parameters are arrays and scalar. The merge result is the following parameters.
    - The following parameters are objects, and the merge result is NULL.
  * Merging specifications:
    - If the first parameter is not an object, it is equivalent to that the first parameter is an empty object. The merge result is the merge result of the empty object and the second parameter.
    - If the second parameter is not an object, the merge result is the second parameter.
    - If both parameters are objects, the merge result is an object with the following members:
      - All members of the first object whose corresponding members with the same key cannot be found in the second object.
      - All members of the second object whose corresponding members with the same key cannot be found in the first object and whose values are not null.
      - All members that have keys that exist in both the first and second objects and whose values in the second object are not null. The values of these members are the result of recursively merging the values in the first object with those in the second object.
    - You can use this function to delete the corresponding member by specifying null as the value in the second parameter.
    - Functions operate recursively. The value of the member may not be limited to the scalar of JSON.

  Example: 

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

  Description: Deletes the data specified by the path from a JSON document and returns the modified JSON document.

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
  * A non-null array that contains only elements with a depth of 1 or a non-null object that contains only member values with a depth of 1 has a depth of 2. Otherwise, the depth of the JSON document is greater than 2.

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
