# Operators<a name="EN-US_TOPIC_0289900672"></a>

## Operator Type Resolution<a name="en-us_topic_0283137550_en-us_topic_0237122008_en-us_topic_0059778242_seea12beab1954749bad838953810aa71"></a>

1.  Select the operators to be considered from the  **pg\_operator**  system catalog. Considered operators are those with the matching name and argument count. If the search path finds multiple available operators, only the most suitable one is considered.
2.  Look for the best match.
    1.  Discard candidate operators for which the input types do not match and cannot be converted \(using an implicit conversion\) to match.  **unknown**  literals are assumed to be convertible to anything for this purpose. If only one candidate remains, use it; else continue to the next step.
    2.  Run through all candidates and keep those with the most exact matches on input types. Domains are considered the same as their base type for this purpose. Keep all candidates if none survives these tests. If only one candidate remains, use it; else continue to the next step.
    3.  Run through all candidates and keep those that accept preferred types \(of the input data type's type category\) at the most positions where type conversion will be required. Keep all candidates if none accepts preferred types. If only one candidate remains, use it; else continue to the next step.
    4.  If any input arguments are  **unknown**, check the type categories accepted at those argument positions by the remaining candidates. At each position, select the string category if any candidate accepts that category. \(This bias towards string is appropriate since an unknown-type literal looks like a string.\) Otherwise, if all the remaining candidates accept the same type category, select that category; otherwise fail because the correct choice cannot be deduced without more clues. Now discard candidates that do not accept the selected type category. Furthermore, if any candidate accepts a preferred type in that category, discard candidates that accept non-preferred types for that argument. Keep all candidates if none survives these tests. If only one candidate remains, use it; else continue to the next step.
    5.  If there are both  **unknown**  and known-type arguments, and all the known-type arguments have the same type, assume that the  **unknown**  arguments are also of that type, and check which candidates can accept that type at the unknown-argument positions. If exactly one candidate passes this test, use it. Otherwise, an error occurs.


## Examples<a name="en-us_topic_0283137550_en-us_topic_0237122008_en-us_topic_0059778242_sf97102106fb1409c84eb71bd5d69dc11"></a>

Example 1: Use factorial operator type resolution. There is only one factorial operator \(postfix !\) defined in the system catalog, and it takes an argument of type  **bigint**. The scanner assigns an initial type of  **bigint**  to the argument in this query expression:

```
openGauss=# SELECT 40 ! AS "40 factorial";

                   40 factorial
--------------------------------------------------
 815915283247897734345611269596115894272000000000
(1 row)
```

So the parser does a type conversion on the operand and the query is equivalent to:

```
openGauss=# SELECT CAST(40 AS bigint) ! AS "40 factorial";
```

Example 2: String concatenation operator type resolution. A string-like syntax is used for working with string types and for working with complex extension types. Strings with unspecified type are matched with likely operator candidates. An example with one unspecified argument:

```
openGauss=# SELECT text 'abc' || 'def' AS "text and unknown";
 text and unknown
------------------
 abcdef
(1 row)
```

In this example, the parser looks for an operator whose parameters are of the text type. Such an operator is found.

Here is a concatenation of two values of unspecified types:

```
openGauss=# SELECT 'abc' || 'def' AS "unspecified";
 unspecified
-------------
 abcdef
(1 row)
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In this case there is no initial hint for which type to use, since no types are specified in the query. So, the parser looks for all candidate operators and finds that there are candidates accepting both string-category and bit-string-category inputs. Since string category is preferred when available, that category is selected, and then the preferred type for strings,  **text**, is used as the specific type to resolve the unknown-type literals as.

Example 3: Absolute-value and negation operator type resolution. The openGauss operator catalog has several entries for the prefix operator @. All the entries implement absolute-value operations for various numeric data types. One of these entries is for type  **float8**, which is the preferred type in the numeric category. Therefore, openGauss will use that entry when faced with an unknown input:

```
openGauss=# SELECT @ '-4.5' AS "abs";
 abs
-----
 4.5
(1 row)
```

Here the system has implicitly resolved the unknown-type literal as type  **float8**  before applying the chosen operator.

Example 4: Use the array inclusion operator type resolution as an example. Here is another example of resolving an operator with one known and one unknown input:

```
openGauss=# SELECT array[1,2] <@ '{1,2,3}' as "is subset";
 is subset
-----------
 t
(1 row)
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The openGauss operator catalog has several entries for the infix operator <@, but the only two that could possibly accept an integer array on the left side are array inclusion \(anyarray <@ anyarray\) and range inclusion \(anyelement <@ anyrange\). Since none of these polymorphic pseudo-types \(see  [Pseudo-Types](pseudo-types.md)\) is considered preferred, the parser cannot resolve the ambiguity on that basis. However, the last resolution rule tells it to assume that the unknown-type literal is of the same type as the other input, that is, integer array. Now only one of the two operators can match, so array inclusion is selected. \(Had range inclusion been selected, we would have gotten an error, because the string does not have the right format to be a range literal.\)

