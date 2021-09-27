# Range Functions and Operators<a name="EN-US_TOPIC_0289900548"></a>

## Range Operators<a name="en-us_topic_0283136628_en-us_topic_0237121981_en-us_topic_0059778082_sdbd7817099fd47dd95010675e3f38b03"></a>

-   =

    Description: Equals

    Example:

    ```
    openGauss=# SELECT int4range(1,5) = '[1,4]'::int4range AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   <\>

    Description: Does not equal to

    Example:

    ```
    openGauss=# SELECT numrange(1.1,2.2) <> numrange(1.1,2.3) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   <

    Description: Is less than

    Example:

    ```
    openGauss=# SELECT int4range(1,10) < int4range(2,3) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   \>

    Description: Is greater than

    Example:

    ```
    openGauss=# SELECT int4range(1,10) > int4range(1,5) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   <=

    Description: Is less than or equals

    Example:

    ```
    openGauss=# SELECT numrange(1.1,2.2) <= numrange(1.1,2.2) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   \>=

    Description: Is greater than or equals

    Example:

    ```
    openGauss=# SELECT numrange(1.1,2.2) >= numrange(1.1,2.0) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   @\>

    Description: Contains ranges

    Example:

    ```
    openGauss=# SELECT int4range(2,4) @> int4range(2,3) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   @\>

    Description: Contains elements

    Example:

    ```
    openGauss=# SELECT '[2011-01-01,2011-03-01)'::tsrange @> '2011-01-10'::timestamp AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   <@

    Description: Range is contained by

    Example:

    ```
    openGauss=# SELECT int4range(2,4) <@ int4range(1,7) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   <@

    Description: Element is contained by

    Example:

    ```
    openGauss=# SELECT 42 <@ int4range(1,7) AS RESULT;
     result
    --------
     f
    (1 row)
    ```

-   &&

    Description: Overlap \(have points in common\)

    Example:

    ```
    openGauss=# SELECT int8range(3,7) && int8range(4,12) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   <<

    Description: Strictly left of

    Example:

    ```
    openGauss=# SELECT int8range(1,10) << int8range(100,110) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   \>\>

    Description: Strictly right of

    Example:

    ```
    openGauss=# SELECT int8range(50,60) >> int8range(20,30) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   &<

    Description: Does not extend to the right of

    Example:

    ```
    openGauss=# SELECT int8range(1,20) &< int8range(18,20) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   &\>

    Description: Does not extend to the left of

    Example:

    ```
    openGauss=# SELECT int8range(7,20) &> int8range(5,10) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   -|-

    Description: Is adjacent to

    Example:

    ```
    openGauss=# SELECT numrange(1.1,2.2) -|- numrange(2.2,3.3) AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   +

    Description: Union

    Example:

    ```
    openGauss=# SELECT numrange(5,15) + numrange(10,20) AS RESULT;
     result 
    --------
     [5,20)
    (1 row)
    ```

-   \*

    Description: Intersection

    Example:

    ```
    openGauss=# SELECT int8range(5,15) * int8range(10,20) AS RESULT;
     result  
    ---------
     [10,15)
    (1 row)
    ```

-   -

    Description: Difference

    Example:

    ```
    openGauss=# SELECT int8range(5,15) - int8range(10,20) AS RESULT;
     result 
    --------
     [5,10)
    (1 row)
    ```


The simple comparison operators  **<**,  **\>**,  **<=**, and  **\>=**  compare the lower bounds first, and only if those are equal, compare the upper bounds.

The  **<<**,  **\>\>**, and  **-|-**  operators always return false when an empty range is involved; that is, an empty range is not considered to be either before or after any other range.

The union and difference operators will fail if the resulting range would need to contain two disjoint sub-ranges.

## Range Functions<a name="en-us_topic_0283136628_en-us_topic_0237121981_en-us_topic_0059778082_sd7f8a14312fe49158bb4b9d8c073e2e6"></a>

-   numrange\(numeric, numeric, \[text\]\)

    Description: Specifies a range.

    Return type: Range's element type

    Example:

    ```
    openGauss=# SELECT numrange(1.1,2.2) AS RESULT;
     result 
    --------
    [1.1,2.2)
    (1 row)
    openGauss=# SELECT numrange(1.1,2.2, '()') AS RESULT;
     result 
    --------
    (1.1,2.2)
    (1 row)
    ```

-   lower\(anyrange\)

    Description: Lower bound of a range

    Return type: Range's element type

    Example:

    ```
    openGauss=# SELECT lower(numrange(1.1,2.2)) AS RESULT;
     result 
    --------
        1.1
    (1 row)
    ```

-   upper\(anyrange\)

    Description: Upper bound of a range

    Return type: Range's element type

    Example:

    ```
    openGauss=# SELECT upper(numrange(1.1,2.2)) AS RESULT;
     result 
    --------
        2.2
    (1 row)
    ```

-   isempty\(anyrange\)

    Description: Is the range empty?

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT isempty(numrange(1.1,2.2)) AS RESULT;
     result 
    --------
     f
    (1 row)
    ```

-   lower\_inc\(anyrange\)

    Description: Is the lower bound inclusive?

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT lower_inc(numrange(1.1,2.2)) AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   upper\_inc\(anyrange\)

    Description: Is the upper bound inclusive?

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT upper_inc(numrange(1.1,2.2)) AS RESULT;
     result 
    --------
     f
    (1 row)
    ```

-   lower\_inf\(anyrange\)

    Description: Is the lower bound infinite?

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT lower_inf('(,)'::daterange) AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   upper\_inf\(anyrange\)

    Description: Is the upper bound infinite?

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT upper_inf('(,)'::daterange) AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

    The  **lower**  and  **upper**  functions return null if the range is empty or the requested bound is infinite. The  **lower\_inc**,  **upper\_inc**,  **lower\_inf**, and  **upper\_inf**  functions all return false for an empty range.


-   elem\_contained\_by\_range\(anyelement, anyrange\)

    Description: Determines whether an element is within the range.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT elem_contained_by_range('2', numrange(1.1,2.2));
     elem_contained_by_range
    -------------------------
     t
    (1 row)
    ```


