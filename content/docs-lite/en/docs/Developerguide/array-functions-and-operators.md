# Array Functions and Operators<a name="EN-US_TOPIC_0289900198"></a>

## Array Operators<a name="en-us_topic_0283137239_en-us_topic_0237121980_en-us_topic_0059777596_s7fe6ac87a6fc4d7c8c7bd46484b9d9c3"></a>

-   =

    Description: Specifies whether two arrays are equal.

    Example:

    ```
    openGauss=# SELECT ARRAY[1.1,2.1,3.1]::int[] = ARRAY[1,2,3] AS RESULT ;
     result 
    --------
     t
    (1 row)
    ```

-   <\>

    Description: Specifies whether two arrays are not equal.

    Example:

    ```
    openGauss=# SELECT ARRAY[1,2,3] <> ARRAY[1,2,4] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <

    Description: Specifies whether an array is less than another.

    Example:

    ```
    openGauss=# SELECT ARRAY[1,2,3] < ARRAY[1,2,4] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>

    Description: Specifies whether an array is greater than another.

    Example:

    ```
    openGauss=# SELECT ARRAY[1,4,3] > ARRAY[1,2,4] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <=

    Description: Specifies whether an array is less than another.

    Example:

    ```
    openGauss=# SELECT ARRAY[1,2,3] <= ARRAY[1,2,3] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>=

    Description: Specifies whether an array is greater than or equal to another.

    Example:

    ```
    openGauss=# SELECT ARRAY[1,4,3] >= ARRAY[1,4,3] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   @\>

    Description: Specifies whether an array contains another.

    Example:

    ```
    openGauss=# SELECT ARRAY[1,4,3] @> ARRAY[3,1] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <@

    Description: Specifies whether an array is contained in another.

    Example:

    ```
    openGauss=# SELECT ARRAY[2,7] <@ ARRAY[1,7,4,2,6] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   &&

    Description: Specifies whether an array overlaps another \(have common elements\).

    Example:

    ```
    openGauss=# SELECT ARRAY[1,4,3] && ARRAY[2,1] AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ||

    Description: Array-to-array concatenation

    Example:

    ```
    openGauss=# SELECT ARRAY[1,2,3] || ARRAY[4,5,6] AS RESULT;
        result     
    ---------------
     {1,2,3,4,5,6}
    (1 row)
    ```

    ```
    openGauss=# SELECT ARRAY[1,2,3] || ARRAY[[4,5,6],[7,8,9]] AS RESULT;
              result           
    ---------------------------
     {{1,2,3},{4,5,6},{7,8,9}}
    (1 row)
    ```

-   ||

    Description: Element-to-array concatenation

    Example:

    ```
    openGauss=# SELECT 3 || ARRAY[4,5,6] AS RESULT;
      result   
    -----------
     {3,4,5,6}
    (1 row)
    ```

-   ||

    Description: Array-to-element concatenation

    Example:

    ```
    openGauss=# SELECT ARRAY[4,5,6] || 7 AS RESULT;
      result   
    -----------
     {4,5,6,7}
    (1 row)
    ```


Array comparisons compare the array contents element-by-element, using the default B-tree comparison function for the element data type. In multidimensional arrays, the elements are accessed in row-major order. If the contents of two arrays are equal but the dimensionality is different, the first difference in the dimensionality information determines the sort order.

## Array Functions<a name="en-us_topic_0283137239_en-us_topic_0237121980_en-us_topic_0059777596_sba9d38cb89864afaac99972eff9a8b00"></a>

-   array\_append\(anyarray, anyelement\)

    Description: Appends an element to the end of an array, and only supports dimension-1 arrays.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_append(ARRAY[1,2], 3) AS RESULT;
     result  
    ---------
     {1,2,3}
    (1 row)
    ```

-   array\_prepend\(anyelement, anyarray\)

    Description: Appends an element to the beginning of an array, and only supports dimension-1 arrays.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_prepend(1, ARRAY[2,3]) AS RESULT;
     result  
    ---------
     {1,2,3}
    (1 row)
    ```

-   array\_cat\(anyarray, anyarray\)

    Description: Concatenates two arrays, and supports multi-dimensional arrays.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_cat(ARRAY[1,2,3], ARRAY[4,5]) AS RESULT;
       result    
    -------------
     {1,2,3,4,5}
    (1 row)
    
    openGauss=# SELECT array_cat(ARRAY[[1,2],[4,5]], ARRAY[6,7]) AS RESULT;
           result        
    ---------------------
     {{1,2},{4,5},{6,7}}
    (1 row)
    ```

-   array\_union\(anyarray, anyarray\)

    Description: Concatenates two arrays, and supports only one-dimensional arrays.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_union(ARRAY[1,2,3], ARRAY[3,4,5]) AS RESULT;
       result    
    -------------
     {1,2,3,3,4,5}
    (1 row)
    ```

-   array\_union\_distinct\(anyarray, anyarray\)

    Description: Concatenates two arrays and deduplicates them. Only one-dimensional arrays are supported.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_union_distinct(ARRAY[1,2,3], ARRAY[3,4,5]) AS RESULT;
       result    
    -------------
     {1,2,3,4,5}
    (1 row)
    ```

-   array\_intersect\(anyarray, anyarray\)

    Description: Intersects two arrays. Only one-dimensional arrays are supported.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_intersect(ARRAY[1,2,3], ARRAY[3,4,5]) AS RESULT;
       result    
    -------------
     {3}
    (1 row)
    ```

-   array\_intersect\_distinct\(anyarray, anyarray\)

    Description: Intersects two arrays and deduplicates them. Only one-dimensional arrays are supported.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_intersect_distinct(ARRAY[1,2,2], ARRAY[2,2,4,5]) AS RESULT;
       result    
    -------------
     {2}
    (1 row)
    ```

-   array\_except\(anyarray, anyarray\)

    Description: Calculates the difference between two arrays. Only one-dimensional arrays are supported.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_except(ARRAY[1,2,3], ARRAY[3,4,5]) AS RESULT;
       result    
    -------------
     {1,2}
    (1 row)
    ```

-   array\_except\_distinct\(anyarray, anyarray\)

    Description: Calculates the difference between two arrays and deduplicates them. Only one-dimensional arrays are supported.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_except_distinct(ARRAY[1,2,2,3], ARRAY[3,4,5]) AS RESULT;
       result    
    -------------
     {1,2}
    (1 row)
    ```

-   array\_ndims\(anyarray\)

    Description: Returns the number of dimensions of an array.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_ndims(ARRAY[[1,2,3], [4,5,6]]) AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   array\_dims\(anyarray\)

    Description: Returns the low-order flag bits and high-order flag bits of each dimension in an array.

    Return type: text

    Example:

    ```
    openGauss=# SELECT array_dims(ARRAY[[1,2,3], [4,5,6]]) AS RESULT;
       result   
    ------------
     [1:2][1:3]
    (1 row)
    ```

-   array\_length\(anyarray, int\)

    Description: Returns the length of the requested array dimension.  **int**  is the requested array dimension.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_length(array[1,2,3], 1) AS RESULT;
     result 
    --------
          3
    (1 row)
    
    openGauss=# SELECT array_length(array[[1,2,3],[4,5,6]], 2) AS RESULT;
     result
    --------
          3
    (1 row)
    ```

-   array\_lower\(anyarray, int\)

    Description: Returns lower bound of the requested array dimension.  **int**  is the requested array dimension.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_lower('[0:2]={1,2,3}'::int[], 1) AS RESULT;
     result 
    --------
          0
    (1 row)
    ```

-   array\_upper\(anyarray, int\)

    Description: Returns upper bound of the requested array dimension.  **int**  is the requested array dimension.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_upper(ARRAY[1,8,3,7], 1) AS RESULT;
     result 
    --------
          4
    (1 row)
    ```

-   array\_upper\(anyarray, int\)

    Description: Returns upper bound of the requested array dimension.  **int**  is the requested array dimension.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_upper(ARRAY[1,8,3,7], 1) AS RESULT;
     result 
    --------
          4
    (1 row)
    ```

-   array\_remove\(anyarray, anyelement\)

    Description: Removes all specified elements from an array. Only one-dimensional arrays are supported.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_remove(ARRAY[1,8,8,7], 8) AS RESULT;
     result
    --------
     {1,7}
    (1 row)
    ```

-   array\_to\_string\(anyarray, text \[, text\]\)

    Description: Uses the first  **text**  as the new delimiter and the second  **text**  to replace  **NULL**  values.

    Return type: text

    Example:

    ```
    openGauss=# SELECT array_to_string(ARRAY[1, 2, 3, NULL, 5], ',', '*') AS RESULT;
      result   
    -----------
     1,2,3,*,5
    (1 row)
    ```

-   array\_delete\(anyarray\)

    Description: Clears elements in an array and returns an empty array of the same type.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_delete(ARRAY[1,8,3,7]) AS RESULT;
     result 
    --------
     {}
    (1 row)
    ```

-   array\_deleteidx\(anyarray, int\)

    Description: Deletes specified subscript elements from an array and returns an array consisting of the remaining elements.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_deleteidx(ARRAY[1,2,3,4,5], 1) AS RESULT;
      result
    -----------
     {2,3,4,5}
    (1 row)
    ```

-   array\_extendnull\(anyarray, int\)

    Description: Adds a specified number of null elements to the end of an array.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_extendnull(ARRAY[1,8,3,7],1) AS RESULT;
        result 
    --------------
    {1,8,3,7,null}
    (1 row)
    ```

-   array\_trim\(anyarray, int\)

    Description: Deletes a specified number of elements from the end of an array.

    Return type: anyarray

    Example:

    ```
    openGauss=# SELECT array_trim(ARRAY[1,8,3,7],1) AS RESULT;
     result
    ---------
     {1,8,3}
    (1 row)
    ```

-   array\_exists\(anyarray, int\)

    Description: Checks whether the second parameter is a valid subscript of an array.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT array_exists(ARRAY[1,8,3,7],1) AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   array\_next\(anyarray, int\)

    Description: Returns the subscript of the element following a specified subscript in an array based on the second input parameter.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_next(ARRAY[1,8,3,7],1) AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   array\_prior\(anyarray, int\)

    Description: Returns the subscript of the element followed by a specified subscript in an array based on the second input parameter.

    Return type: int

    Example:

    ```
    openGauss=# SELECT array_prior(ARRAY[1,8,3,7],2) AS RESULT;
     result 
    --------
      1
    (1 row)
    ```

-   string\_to\_array\(text, text \[,  text\]\)

    Description: Uses the second  **text**  as the new delimiter and the third  **text**  as the substring to be replaced by  **NULL**  values. A substring can be replaced by  **NULL**  values only when it is the same as the third  **text**.

    Return type: text\[\]

    Example:

    ```
    openGauss=# SELECT string_to_array('xx~^~yy~^~zz', '~^~', 'yy') AS RESULT;
        result    
    --------------
     {xx,NULL,zz}
    (1 row)
    openGauss=# SELECT string_to_array('xx~^~yy~^~zz', '~^~', 'y') AS RESULT;
       result   
    ------------
     {xx,yy,zz}
    (1 row)
    ```

-   unnest\(anyarray\)

    Description: Expands an array to a set of rows.

    Return type: setof anyelement

    Example:

    ```
    openGauss=# SELECT unnest(ARRAY[1,2]) AS RESULT;
     result 
    --------
          1
          2
    (2 rows)
    ```


In  **string\_to\_array**, if the delimiter parameter is NULL, each character in the input string will become a separate element in the resulting array. If the delimiter is an empty string, then the entire input string is returned as a one-element array. Otherwise the input string is split at each occurrence of the delimiter string.

In  **string\_to\_array**, if the null-string parameter is omitted or NULL, none of the substrings of the input will be replaced by NULL.

In  **array\_to\_string**, if the null-string parameter is omitted or NULL, any null elements in the array are simply skipped and not represented in the output string.

