# Functions<a name="EN-US_TOPIC_0289900620"></a>

## Function Type Resolution<a name="en-us_topic_0283137224_en-us_topic_0237122009_en-us_topic_0059777930_sae9dc3fe177e4b349373f0f51975f380"></a>

1.  Select the functions to be considered from the  **pg\_proc**  system catalog. If a non-schema-qualified function name was used, the functions in the current search path are considered. If a qualified function name was given, only functions in the specified schema are considered.

    If the search path finds multiple functions of different argument types, a proper function in the path is considered.

2.  Check for a function accepting exactly the input argument types. If the function exists, use it. Cases involving  **unknown**  will never find a match at this step.
3.  If no exact match is found, see if the function call appears to be a special type conversion request.
4.  Look for the best match.
    1.  Discard candidate functions for which the input types do not match and cannot be converted \(using an implicit conversion\) to match.  **unknown**  literals are assumed to be convertible to anything for this purpose. If only one candidate remains, use it; else continue to the next step.
    2.  Run through all candidates and keep those with the most exact matches on input types. Domains are considered the same as their base type for this purpose. Keep all candidates if none has exact matches. If only one candidate remains, use it; else continue to the next step.
    3.  Run through all candidates and keep those that accept preferred types at the most positions where type conversion will be required. Keep all candidates if none accepts preferred types. If only one candidate remains, use it; else continue to the next step.
    4.  If any input arguments are  **unknown**, check the type categories accepted at those argument positions by the remaining candidates. At each position, select the string category if any candidate accepts that category. \(This bias towards string is appropriate since an unknown-type literal looks like a string.\) Otherwise, if all the remaining candidates accept the same type category, select that category; otherwise fail because the correct choice cannot be deduced without more clues. Now discard candidates that do not accept the selected type category. Furthermore, if any candidate accepts a preferred type in that category, discard candidates that accept non-preferred types for that argument. Keep all candidates if none survives these tests. If only one candidate remains, use it; else continue to the next step.
    5.  If there are both  **unknown**  and known-type arguments, and all the known-type arguments have the same type, assume that the  **unknown**  arguments are also of that type, and check which candidates can accept that type at the  **unknown**-argument positions. If exactly one candidate passes this test, use it. Otherwise, an error occurs.


## Examples<a name="en-us_topic_0283137224_en-us_topic_0237122009_en-us_topic_0059777930_s97f87a26c6324be9bbeeb7f840e5b935"></a>

Example 1: Use the rounding function argument type resolution as the first example. There is only one  **round**  function that takes two arguments; it takes a first argument of type  **numeric**  and a second argument of type  **integer**. So the following query automatically converts the first argument of type  **integer**  to  **numeric**:

```
openGauss=# SELECT round(4, 4);
 round
--------
 4.0000
(1 row)
```

That query is actually transformed by the parser to:

```
openGauss=# SELECT round(CAST (4 AS numeric), 4);
```

Since numeric constants with decimal points are initially assigned the type  **numeric**, the following query will require no type conversion and therefore might be slightly more efficient:

```
openGauss=# SELECT round(4.0, 4);
```

Example 2: Use the substring function type resolution as the second example. There are several  **substr**  functions, one of which takes types  **text**  and  **integer**. If called with a string constant of unspecified type, the system chooses the candidate function that accepts an argument of the preferred category  **string**  \(namely of type  **text**\). 

```
openGauss=# SELECT substr('1234', 3);
 substr
--------
     34
(1 row)
```

If the string is declared to be of type  **varchar**, as might be the case if it comes from a table, then the parser will try to convert it to become  **text**:

```
openGauss=# SELECT substr(varchar '1234', 3);
 substr
--------
     34
(1 row)
```

This is transformed by the parser to effectively become:

```
openGauss=# SELECT substr(CAST (varchar '1234' AS text), 3);
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>The parser learns from the  **pg\_cast**  catalog that  **text**  and  **varchar**  are binary-compatible, meaning that one can be passed to a function that accepts the other without doing any physical conversion. Therefore, no type conversion is really inserted in this case.

And, if the function is called with an argument of type  **integer**, the parser will try to convert that to  **text**:

```
openGauss=# SELECT substr(1234, 3);
substr
--------
 34
(1 row)
```

This is transformed by the parser to effectively become:

```
openGauss=# SELECT substr(CAST (1234 AS text), 3);
 substr
--------
     34
(1 row)
```

