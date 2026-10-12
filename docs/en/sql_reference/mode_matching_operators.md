# Pattern Matching Operators

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:24:03.135Z -->

The database provides three independent methods for implementing pattern matching: the SQL LIKE operator, the SIMILAR TO operator, and POSIX-style regular expressions. In addition to these basic operators, some functions are available for extracting or replacing matching substrings and splitting a string at matching positions.

## LIKE

Description: Determines whether a string can match the pattern string following LIKE. If the string matches the provided pattern, the LIKE expression returns true (the NOT LIKE expression returns false). Otherwise, false is returned (the NOT LIKE expression returns true).

Matching rules:

1. This operator succeeds only when its pattern matches the entire string. To match a sequence at any position within the string, the pattern must begin and end with a percent sign.
2. An underscore (`_`) represents (matches) any single character; a percent sign (`%`) represents a wildcard for any string.
3. To match a literal underscore or percent sign in text, the corresponding character in the supplied pattern must be preceded by an escape character. The escape character disables the special meaning of metacharacters. The default escape character is the backslash, but a different escape character can be specified using the ESCAPE clause.
4. To match the escape character itself, write two escape characters. For example, to write a pattern constant that contains a backslash, you need to write two backslashes in the SQL statement.

     >[!NOTE]Note
     >
     >When the parameter `standard_conforming_strings` is set to off, any backslash written in a string literal constant must be doubled. Therefore, writing a pattern that matches a single backslash actually requires writing four backslashes in the statement. (You can avoid this by using ESCAPE to choose a different escape character, so that the backslash is no longer a special character for LIKE. However, it remains a special character for the string literal parser, so you still need two backslashes.) In MySQL compatibility mode, you can also disable the escape mechanism by writing ESCAPE '', which effectively turns off escaping, but there is no way to disable the special meaning of underscore and percent sign in the pattern.

5. The keyword ILIKE can be used in place of LIKE. The difference is that LIKE is case-sensitive, while ILIKE is case-insensitive.
6. The operator ~~ is equivalent to LIKE, and the operator ~~* is equivalent to ILIKE.

  Example:

  ```
  openGauss=# SELECT 'abc' LIKE 'abc' AS RESULT;
   result
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# SELECT 'abc' LIKE 'a%' AS RESULT;
   result
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# SELECT 'abc' LIKE '_b_' AS RESULT;
   result
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# SELECT 'abc' LIKE 'c' AS RESULT;
   result
  -----------
   f
  (1 row)
  ```

## SIMILAR TO

Description: The SIMILAR TO operator returns true or false depending on whether its pattern matches the given string. It is very similar to LIKE, except that it interprets the pattern using the SQL standard definition of regular expressions.

Matching rules:

1. Similar to LIKE, this operator succeeds only when its pattern matches the entire string. To match a sequence at any position within the string, the pattern must begin and end with a percent sign.
2. The underscore (\_) represents (matches) any single character; the percent sign (%) represents a wildcard for any string.
3. SIMILAR TO also supports the following pattern matching metacharacters borrowed from POSIX regular expressions.

    | Metacharacter | Meaning                                                          |
    |---------------|------------------------------------------------------------------|
    | \|            | Indicates alternation (one of two alternatives)                  |
    | *             | Indicates repetition of the preceding item zero or more times    |
    | +             | Indicates repetition of the preceding item one or more times     |
    | ?             | Indicates repetition of the preceding item zero or one time      |
    | {m}           | Indicates repetition of the preceding item exactly m times       |
    | {m,}          | Indicates repetition of the preceding item m or more times       |
    | {m,n}         | Indicates repetition of the preceding item at least m times and no more than n times |
    | ()            | Groups multiple items into a single logical item                 |
    | [...]         | Declares a character class, just like POSIX regular expressions  |

4. A leading escape character can disable the special meaning of all these metacharacters. The rules for using the escape character are the same as those for LIKE.

    Regular expression functions:

    The function [substring\(string from pa...](character_processing_functions_and_operators.md) is supported for extracting substrings that match SQL regular expressions.

Example:

    ```
    openGauss=# SELECT 'abc' SIMILAR TO 'abc' AS RESULT;
     result
    -----------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' SIMILAR TO 'a' AS RESULT;
     result
    -----------
     f
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' SIMILAR TO '%(b|d)%' AS RESULT;
     result
    -----------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' SIMILAR TO '(b|c)%'  AS RESULT;
     result
    -----------
     f
    (1 row)
    ```

## POSIX Regular Expressions

Description: A regular expression is a character sequence that is an abbreviated definition of a set of strings (a regular set). A string is said to match a regular expression if it is a member of the regular set described by the regular expression. POSIX regular expressions provide more powerful capabilities than the LIKE and SIMILAR TO operators. [Table 1](#zh-cn_topic_0283137455_zh-cn_topic_0237121970_table6512684711360) lists all operators available for POSIX regular expression pattern matching.

**Table 1**  Regular expression matching operators<a name="zh-cn_topic_0283137455_zh-cn_topic_0237121970_table6512684711360"></a>

| Operator | Description | Example |
|----------|-------------|---------|
| ~        | Matches regular expression, case-sensitive | 'thomas' ~ '.*thomas.*' |
| ~*       | Matches regular expression, case-insensitive | 'thomas' ~* '.*Thomas.*' |
| !~       | Does not match regular expression, case-sensitive | 'thomas' !~ '.*Thomas.*' |
| !~*      | Does not match regular expression, case-insensitive | 'thomas' !~* '.*vadim.*' |

Matching rules:

1. Unlike LIKE, a regular expression is allowed to match anywhere within a string, unless the regular expression is explicitly anchored to the beginning or end of the string.
2. In addition to the metacharacters mentioned above, POSIX regular expressions also support the following pattern matching metacharacters.

    | Metacharacter | Meaning          |
    |--------|---------------|
    | ^      | Matches the beginning of a string |
    | $      | Matches the end of a string |
    | .      | Matches any single character |

    Regular expression functions:

    POSIX regular expressions support the following functions.

    - [substring(string from pa...](character_processing_functions_and_operators.md) function provides a method for extracting a substring that matches a POSIX regular expression pattern.

    - [regexp\_count(string tex...](character_processing_functions_and_operators.md) function provides the capability to obtain the number of substrings that match a POSIX regular expression pattern.

    - [regexp\_instr(string tex...](character_processing_functions_and_operators.md) function provides the capability to obtain the position of a substring that matches a POSIX regular expression pattern.

    - [regexp\_substr(string te...](character_processing_functions_and_operators.md) function provides a method for extracting a substring that matches a POSIX regular expression pattern.

    - [regexp\_replace(string, p...](character_processing_functions_and_operators.md) function provides the capability to replace substrings that match a POSIX regular expression pattern with new text.

    - [regexp\_matches\(string te...](character_processing_functions_and_operators.md) function returns a text array consisting of all captured substrings obtained by matching a POSIX regular expression pattern.

    - [regexp\_split\_to\_table\(st...](character_processing_functions_and_operators.md) function uses a POSIX regular expression pattern as a delimiter to split a string.

    - [regexp\_split\_to\_array\(st...](character_processing_functions_and_operators.md) is similar to regexp\_split\_to\_table and is a regular expression splitting function, but its result is returned as a text array.

        >[!NOTE]Note
        >
        >Regular expression splitting functions ignore zero-length matches, which occur at the beginning or end of a string or immediately after a previous match. This is contrary to the strict definition of regular expression matching, which is implemented by regexp\_matches, but the former is usually the most commonly used behavior in practice.

    Example:

    ```
    openGauss=#  SELECT 'abc' ~ 'Abc' AS RESULT;
    result 
    --------
     f
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' ~* 'Abc' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' !~ 'Abc' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc'!~* 'Abc' AS RESULT;
     result 
    --------
     f
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' ~ '^a' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' ~ '(b|d)'AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'abc' ~ '^(b|c)'AS RESULT;
     result 
    --------
     f
    (1 row)
    ```

    Although most regular expression searches can be executed quickly, regular expressions can still be artificially crafted to require arbitrary amounts of time and memory for processing. It is not recommended to accept regular expression search patterns from untrusted sources. If this must be done, it is recommended to add a statement timeout limit. Searches using the SIMILAR TO pattern carry the same security risk, because SIMILAR TO provides many of the same capabilities as POSIX-style regular expressions. The LIKE search is much simpler than the other two options, and is therefore safer when accepting search patterns from untrusted sources.

    Additional feature: Currently, the collation supported by database B supports right fuzzy match index scan, which converts the matching condition into two inequalities — greater than or equal to and less than or equal to — as the index condition. Take a column of type c1 char(10) as an example to illustrate the index condition conversion rule. When the query condition is where c1 like 'sdf%', the index condition is converted to c1 ≥ 'sdf\min(7 times)' and c1 ≤ 'sdf\max(7 times)'. Here, \min and \max are the maximum sorting character encodings corresponding to each collation. This conversion ensures that the converted index condition is always equivalent to like 'sdf%'. Due to this conversion rule, when printing the execution plan using EXPLAIN, the display may not be user-friendly: non-printable characters may appear in the index condition, and the padding length may be very long, making the execution plan output quite lengthy.
