# Set Returning Functions<a name="EN-US_TOPIC_0289900562"></a>

## Series Generating Functions<a name="en-us_topic_0283137117_en-us_topic_0237121985_en-us_topic_0059779332_sfde916b05a3b4024b5cddf1ccf83a8f2"></a>

-   generate\_series\(start, stop\)

    Description: Generates a series of values, from  **start**  to  **stop**  with a step size of one.

    Parameter type: int, bigint, numeric

    Return type: setof int, setof bigint, setof numeric \(same as the parameter type\)

-   generate\_series\(start, stop, step\)

    Description: Generates a series of values, from  **start**  to  **stop**  with a step size of  **step**.

    Parameter type: int, bigint, numeric

    Return type: setof int, setof bigint, setof numeric \(same as the parameter type\)

-   generate\_series\(start, stop, step interval\)

    Description: Generates a series of values, from  **start**  to  **stop**  with a step size of  **step**.

    Parameter type: timestamp or timestamp with time zone

    Return type: setof timestamp or setof timestamp with time zone \(same as parameter type\)


When  **step**  is positive, zero rows are returned if  **start**  is greater than  **stop**. Conversely, when  **step**  is negative, zero rows are returned if  **start**  is less than  **stop**. Zero rows are also returned for  **NULL**  inputs. It is an error for  **step**  to be zero.

Example:

```
openGauss=# SELECT * FROM generate_series(2,4);
 generate_series
-----------------
               2
               3
               4
(3 rows)

openGauss=# SELECT * FROM generate_series(5,1,-2);
 generate_series
-----------------
               5
               3
               1
(3 rows)

openGauss=# SELECT * FROM generate_series(4,3);
 generate_series
-----------------
(0 rows)

-- This example applies to the date-plus-integer operator.
openGauss=# SELECT current_date + s.a AS dates FROM generate_series(0,14,7) AS s(a);
   dates
------------
 2017-06-02
 2017-06-09
 2017-06-16
(3 rows)

openGauss=# SELECT * FROM generate_series('2008-03-01 00:00'::timestamp, '2008-03-04 12:00', '10 hours');
   generate_series   
---------------------
 2008-03-01 00:00:00
 2008-03-01 10:00:00
 2008-03-01 20:00:00
 2008-03-02 06:00:00
 2008-03-02 16:00:00
 2008-03-03 02:00:00
 2008-03-03 12:00:00
 2008-03-03 22:00:00
 2008-03-04 08:00:00
(9 rows)
```

## Subscript Generating Functions<a name="en-us_topic_0283137117_en-us_topic_0237121985_en-us_topic_0059779332_s25da07a4e3f84281af7e30b081b29a88"></a>

-   generate\_subscripts\(array anyarray, dim int\)

    Description: Generates a series comprising the given array's subscripts.

    Return type: setof int

-   generate\_subscripts\(array anyarray, dim int, reverse boolean\)

    Description: Generates a series comprising the given array's subscripts. When  **reverse**  is true, the series is returned in reverse order.

    Return type: setof int


**generate\_subscripts**  is a function that generates the set of valid subscripts for the specified dimension of the given array. Zero rows are returned for arrays that do not have the requested dimension, or for NULL arrays \(but valid subscripts are returned for NULL array elements\). Example:

```
-- Basic usage
openGauss=# SELECT generate_subscripts('{NULL,1,NULL,2}'::int[], 1) AS s;
 s 
---
 1
 2
 3
 4
(4 rows)
```

```
-- Unnest a 2D array:
openGauss=# CREATE OR REPLACE FUNCTION unnest2(anyarray)
RETURNS SETOF anyelement AS $$
SELECT $1[i][j]
   FROM generate_subscripts($1,1) g1(i),
        generate_subscripts($1,2) g2(j);
$$ LANGUAGE sql IMMUTABLE;

openGauss=# SELECT * FROM unnest2(ARRAY[[1,2],[3,4]]);
 unnest2 
---------
       1
       2
       3
       4
(4 rows)

-- Delete the function.
openGauss=# DROP FUNCTION unnest2;
```

