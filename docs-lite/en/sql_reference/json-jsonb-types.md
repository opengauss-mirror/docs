# JSON/JSONB Types<a name="EN-US_TOPIC_0289899996"></a>

JavaScript Object Notation \(JSON\) data can be a single scalar, an array, or a key-value pair object. The array and object can be called a container:

-   Scalar: a number, Boolean, string, or null
-   Array: defined in a pair of square brackets \(\[\]\), in which elements can be any type of JSON data, and are not necessarily of the same type.
-   Object: defined in a pair of braces \(\{\}\), in which objects are stored in the format of  **key:value**. Each key must be a string enclosed by a pair of double quotation marks \(""\), and its value can be any type of JSON data. In case of duplicate keys, the last key-value pair will be used.

openGauss supports two types JSON and JSONB to store JSON data. JSON data is a complete copy of the input, retaining the entered spaces, duplicate keys, and sequence, while JSONB stores data in a decomposed binary form, removing semantic-irrelevant details and duplicate keys, and sorting key-values. Therefore, JSONB data does not need to be parsed.

Basically, both are JSON data types. However, they differ greatly in efficiency. Because JSON data is an exact copy of the input text, the data must be parsed on every execution; in contrast, JSONB data is stored in a decomposed binary form and can be processed faster, though this makes it slightly slower to input due to the conversion mechanism. In addition, because the JSONB data form is unified, it better supports more powerful functions, for example, comparing sizes according to a specific rule. JSONB also supports indexing, which is a significant advantage.

## Input Format<a name="section1253934210012"></a>

An input must be a JSON-compliant string, which is enclosed in single quotation marks \(''\).

Null \(null-json\): Only null is supported, and all letters are in lowercase.

```
select 'null'::json;   -- sucselect 'NULL'::jsonb;  -- err
```

Number \(num-json\): The value can be a positive or negative integer, decimal fraction, or 0. The scientific notation is supported.

```
select '1'::json;select '-1.5'::json;select '-1.5e-5'::jsonb, '-1.5e+2'::jsonb;select '001'::json, '+15'::json, 'NaN'::json; -- Redundant leading zeros, plus signs (+), NaN, and infinity are not supported.
```

Boolean \(bool-json\): The value can only be  **true**  or  **false**  in lowercase.

```
select 'true'::json;select 'false'::jsonb;  
```

String \(str-json\): The value must be a string enclosed in double quotation marks \(""\).

```
select '"a"'::json;select '"abc"'::jsonb;  
```

Array \(array-json\): Arrays are enclosed in square brackets \(\[\]\). Elements in the array can be any valid JSON data, and are unnecessarily of the same type.

```
select '[1, 2, "foo", null]'::json;select '[]'::json;select '[1, 2, "foo", null, [[]], {}]'::jsonb; 
```

Object \(object-json\): The value is enclosed in braces \(\{\}\). The key must be a JSON-compliant string, and the value can be any valid JSON string.

```
select '{}'::json;select '{"a": 1, "b": {"a": 2,  "b": null}}'::json;select '{"foo": [true, "bar"], "tags": {"a": 1, "b": null}}'::jsonb;  
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>-   Note that 'null'::json and null::json are different, which are similar to the strings str="" and str=null.
>-   For numbers, when scientific notation is used, JSONB expands them, while JSON stores an exact copy of the input text.

## JSONB Advanced Features<a name="section8871947018"></a>

-   Precautions
    -   Row-store tables are not supported.
    -   It cannot be used as a partition key.
    -   Foreign tables and MOTs are not supported.


The main difference between JSON and JSONB lies in the storage mode. JSONB stores parsed binary data, which reflects the JSON hierarchy and facilitates direct access. Therefore, JSONB has many advanced features that JSON does not have.

-   Format normalization

    -   After the input object-json string is parsed into JSONB binary, semantically irrelevant details are naturally discarded, for example, spaces:

        ```
        openGauss=# select '   [1, " a ", {"a"   :1    }]  '::jsonb;        jsonb
        ----------------------
         [1, " a ", {"a": 1}](1 row)
        ```

    -   For object-json, duplicate key-values are deleted and only the last key-value is retained. For example:

        ```
        openGauss=# select '{"a" : 1, "a" : 2}'::jsonb;  jsonb---------- {"a": 2}(1 row)
        ```

    -   For object-json, key-values will be re-sorted. The sorting rule is as follows: 1. Longer key-values are sorted last. 2. If the key-values are of the same length, the key-values with a larger ASCII code are sorted after the key-values with a smaller ASCII code:

    ```
    openGauss=# select '{"aa" : 1, "b" : 2, "a" : 3}'::jsonb;           jsonb
    --------------------------- 
    {"a": 3, "b": 2, "aa": 1}(1 row)
    ```


-   Size comparison

    Format normalization ensures that only one form of JSONB data exists in the same semantics. Therefore, sizes may be compared according to a specific rule.

    -   First, type comparison:  **object-jsonb**  \>  **array-jsonb**  \>  **bool-jsonb**  \>  **num-jsonb**  \>  **str-jsonb**  \>  **null-jsonb**
    -   Content comparison if the data type is the same:

        -   **str-json**: The default text sorting rule of the database is used for comparison. A positive value indicates greater than, a negative value indicates less than, and  **0**  indicates equal.
        -   **num-json**: numeric comparison
        -   **bool-json**:  **true**  \>  **false**
        -   **array-jsonb**: long elements \> short elements. If the lengths are the same, compare each element in sequence.
        -   **object-jsonb**: If the length of a key-value pair is longer than that of a short key-value pair, the key is compared first, and then the value is compared.

        >![](public_sys-resources/icon-caution.gif) **CAUTION:** 
        >For comparison within the  **object-jsonb**  type, the final result after format sorting is used for comparison. Therefore, the comparison result may not be intuitive compared with the direct input.


-   Creating indexes, primary keys, and foreign keys
    -   B-tree index

        B-tree indexes, primary keys, and foreign keys can be created for the  **JSONB**  type.

    -   GIN index

        GIN indexes can be used to effectively search for keys or key-value pairs that appear in a large number of JSONB documents \(datums\). Two GIN operator classes \(**jsonb\_ops**  and  **jsonb\_hash\_ops**\) are provided for different performance and flexibility choices. The default GIN operator class supports  **@\>**,  **<@**,  **?**,  **?&**  and  **?|**  operator query. The non-default GIN operator class  **jsonb\_path\_ops**  supports only the  **@\>**  and  **<@**  operators.

        For details about the operators, see  [JSON/JSONB Functions and Operators](json-jsonb-functions-and-operators.md).


-   Inclusion and existence

    Querying whether a JSON contains some elements or whether some elements exist in a JSON is an important capability of JSONB.

    ```
    -- A simple scalar/original value contains only the same value: SELECT '"foo"'::jsonb @> '"foo"'::jsonb; -- The array on the left contains the string on the right. SELECT' [ 1, "aa", 3 ] '::jsonb? 'aa'; -- The array on the left contains all elements in the array on the right. The sequence and repetition are not specified. SELECT '[1, 2, 3]'::jsonb @> '[1, 3, 1]'::jsonb; -- The object-json on the left contains all key-values of the object-json on the right. SELECT '{"product": "PostgreSQL", "version": 9.4, "jsonb":true}'::jsonb @> '{"version":9.4}'::jsonb; -- The array on the left does not contain all elements of the array on the right, because the three elements of the array on the left are 1, 2, and [1,3], and the elements on the right are 1 and 3. SELECT'[1, 2, [1, 3] ]. '::jsonb @>' [1, 3] '::jsonb; -- Produces a false. SELECT '{"foo": {"bar": "baz"}}'::jsonb @> '{"bar": "baz"}'::jsonb; -- Similarly, false is produced.
    ```

    For details about the operators, see  [JSON/JSONB Functions and Operators](json-jsonb-functions-and-operators.md).

-   Functions and operators

    For details about the functions and operators supported by the JSON/JSONB type, see  [JSON/JSONB Functions and Operators](json-jsonb-functions-and-operators.md).


