# Overview<a name="EN-US_TOPIC_0289900250"></a>

## Background<a name="en-us_topic_0283136636_en-us_topic_0237122007_en-us_topic_0059778774_s2b7b7e4374fc4b6b9010857a056985ab"></a>

SQL is a typed language. That is, every data item has an associated data type which determines its behavior and allowed usage. openGauss has an extensible type system that is more general and flexible than other SQL implementations. Hence, most type conversion behaviors in openGauss are governed by general rules. This allows the use of mixed-type expressions.

The openGauss scanner/parser divides lexical elements into five fundamental categories: integers, floating-point numbers, strings, identifiers, and keywords. Constants of most non-numeric types are first classified as strings. The SQL language definition allows specifying type names with constant strings. For example, the query:

```
openGauss=# SELECT text 'Origin' AS "label", point '(0,0)' AS "value";
 label  | value
--------+-------
 Origin | (0,0)
(1 row)
```

has two literal constants, of type  **text**  and  **point**. If a type is not specified for a string literal, then the placeholder type  **unknown**  is assigned initially.

There are four fundamental SQL constructs requiring distinct type conversion rules in openGauss parser:

-   Function calls

    Much of the SQL type system is built around a rich set of functions. Functions can have one or more arguments. Since SQL permits function overloading, the function name alone does not uniquely identify the function to be called. The parser must select the right function based on the data types of the supplied arguments.

-   Operators

    SQL allows expressions with prefix and postfix unary \(one-argument\) operators, as well as binary \(two-argument\) operators. Like functions, operators can be overloaded, so the same problem of selecting the right operator exists.

-   Value storage

    SQL  **INSERT**  and  **UPDATE**  statements place the results of expressions into a table. The expressions in the statement must be matched up with, and perhaps converted to, the types of the target columns.

-   UNION, CASE, and Related Constructs

    Since all query results from a unionized  **SELECT**  statement must appear in a single set of columns, the types of the results of each  **SELECT**  clause must be matched up and converted to a uniform set. Similarly, the result expressions of a  **CASE**  construct must be converted to a common type so that the  **CASE**  expression as a whole has a known output type. The same holds for  **ARRAY**  constructs, and for the  **GREATEST**  and  **LEAST**  functions.


The system catalog pg\_cast stores information about which conversions, or casts, exist between which data types, and how to perform those conversions. For details, see  [PG\_CAST](../DataBaseReference/pg_cast.md).

The return type and conversion behavior of an expression are determined during semantic analysis. Data types are divided into several basic type categories, including Boolean,  **numeric**,  **string**,  **bitstring**,  **datetime**,  **timespan**,  **geometric**, and  **network**. Within each category there can be one or more preferred types, which are preferred when there is a choice of possible types. With careful selection of preferred types and available implicit casts, it is possible to ensure that ambiguous expressions \(those with multiple candidate parsing solutions\) can be resolved in a useful way.

All type conversion rules are designed based on the following principles:

-   Implicit conversions should never have surprising or unpredictable outcomes.
-   There should be no extra overhead in the parser or executor if a query does not need implicit type conversion. That is, if a query is well-formed and the types already match, then the query should execute without spending extra time in the parser and without introducing unnecessary implicit conversion calls in the query.
-   Additionally, if a query usually requires an implicit conversion for a function, and if then the user defines a new function with the correct argument types, the parser should use this new function.

