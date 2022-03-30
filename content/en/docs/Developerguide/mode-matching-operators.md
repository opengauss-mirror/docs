# Mode Matching Operators<a name="EN-US_TOPIC_0289900559"></a>

There are three separate approaches to pattern matching provided by the database: the traditional SQL LIKE operator, the more recent SIMILAR TO operator, and POSIX-style regular expressions. Besides these basic operators, functions can be used to extract or replace matching substrings and to split a string at matching locations.

-   LIKE

    Description: Specifies whether the string matches the mode string following  **LIKE**. The LIKE expression returns true if the string matches the supplied pattern. \(As expected, the NOT LIKE expression returns false if LIKE returns true, and vice versa.\)

    Matching rules:

    1.  This operator can succeed only when its pattern matches the entire string. If you want to match a sequence in any position within the string, the pattern must begin and end with a percent sign.
    2.  The underscore \(\_\) represents \(matching\) any single character. Percentage \(%\) indicates the wildcard character of any string.
    3.  To match a literal underscore or percent sign without matching other characters, the respective character in  **pattern**  must be preceded by the escape character. The default escape character is the backslash but a different one can be selected by using the  **ESCAPE**  clause.
    4.  To match with escape characters, enter two escape characters. For example, to write a  **pattern**  constant containing a backslash \(\\\), you need to enter two backslashes in SQL statements.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >When  **standard\_conforming\_strings**  is set to  **off**, any backslashes you write in literal string constants will need to be doubled. So, writing a pattern that matches a single backslash actually involves writing four backslashes in the statement \(you can avoid this by selecting a different escape character with  **ESCAPE**  so that the backslash is no longer a special character of  **LIKE**. But the backslash is still the special character of the character text analyzer, so you still need two backslashes.\)
        >In MySQL-compatible schema, it is also possible to select no escape character by writing  **ESCAPE ''**. This effectively disables the escape mechanism, which makes it impossible to turn off the special meaning of underscore and percent signs in the schema.

    5.  The keyword ILIKE can be used instead of LIKE to make the match case-insensitive.
    6.  Operator \~\~ is equivalent to LIKE, and operator \~\~\* corresponds to ILIKE.

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

-   SIMILAR TO

    Description: Returns  **true**  or  **false**  depending on whether the pattern matches the given string. It is similar to  **LIKE**, but differs in that  **SIMILAR TO**  uses the regular expression understanding pattern defined by the SQL standard.

    Matching rules:

    1.  Similar to LIKE, this operator succeeds only when its pattern matches the entire string. If you want to match a sequence in any position within the string, the pattern must begin and end with a percent sign.
    2.  The underscore \(\_\) represents \(matching\) any single character. Percentage \(%\) indicates the wildcard character of any string.
    3.  SIMILAR TO supports these pattern-matching metacharacters borrowed from POSIX regular expressions:

        <a name="en-us_topic_0283137455_en-us_topic_0237121970_table199321611038"></a>
        <table><thead align="left"><tr id="en-us_topic_0283137455_en-us_topic_0237121970_row3083601711038"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p6509621711038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6509621711038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6509621711038"></a>Metacharacter</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p3830219211038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3830219211038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3830219211038"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283137455_en-us_topic_0237121970_row917541411038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p501109211038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p501109211038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p501109211038"></a>|</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p324528211038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p324528211038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p324528211038"></a>Specifies alternation (either of two alternatives).</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row2920753811038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p1700039611038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p1700039611038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p1700039611038"></a>*</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p3485482611038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3485482611038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3485482611038"></a>Specifies repetition of the previous item zero or more times.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row4525798211038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4201795011038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4201795011038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4201795011038"></a>+</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4801080711038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4801080711038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4801080711038"></a>Specifies repetition of the previous item one or more times.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row2944408011038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p3616024011038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3616024011038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3616024011038"></a>?</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4329830011038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4329830011038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4329830011038"></a>Specifies repetition of the previous item zero or one time.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row5414038711038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p2329521311038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p2329521311038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p2329521311038"></a>{m}</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p786412011038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p786412011038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p786412011038"></a>Specifies repetition of the previous item exactly <em id="en-us_topic_0237121970_i19527194819215"><a name="en-us_topic_0237121970_i19527194819215"></a><a name="en-us_topic_0237121970_i19527194819215"></a>m</em> times.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row366822111038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p2869050811038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p2869050811038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p2869050811038"></a>{m,}</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4222980711038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4222980711038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4222980711038"></a>Specifies repetition of the previous item <em id="en-us_topic_0237121970_i1377113913312"><a name="en-us_topic_0237121970_i1377113913312"></a><a name="en-us_topic_0237121970_i1377113913312"></a>m</em> or more times.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row4452394811038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4967002511038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4967002511038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4967002511038"></a>{m,n}</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p6384907011038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6384907011038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6384907011038"></a>Specifies repetition of the previous item at least <em id="en-us_topic_0237121970_i58961421838"><a name="en-us_topic_0237121970_i58961421838"></a><a name="en-us_topic_0237121970_i58961421838"></a>m</em> times and does not exceed <em id="en-us_topic_0237121970_i6823824537"><a name="en-us_topic_0237121970_i6823824537"></a><a name="en-us_topic_0237121970_i6823824537"></a>n</em> times.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row3777072411038"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p3952976911038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3952976911038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3952976911038"></a>()</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4779469811038"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4779469811038"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4779469811038"></a>Specifies that parentheses () can be used to group items into a single logical item.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row4859307511333"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4372496511333"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4372496511333"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4372496511333"></a>[...]</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p5206129211333"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5206129211333"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5206129211333"></a>Specifies a character class, just as in POSIX regular expressions.</p>
        </td>
        </tr>
        </tbody>
        </table>

    4.  A preamble escape character disables the special meaning of any of these metacharacters. The rules for using escape characters are the same as those for LIKE.

    Regular expressions:

    The  [**substring\(string from pa...**](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_la1fee63f0fe34c148a0649f508a3048c)  function extracts a substring that matches an SQL regular expression pattern.

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

-   POSIX regular expressions

    Description: A regular expression is a character sequence that is an abbreviated definition of a set of strings \(a regular set\). If a string is a member of a regular expression described by a regular expression, the string matches the regular expression. POSIX regular expressions provide a more powerful means for pattern matching than the LIKE and SIMILAR TO operators.  [Table 1](#en-us_topic_0283137455_en-us_topic_0237121970_table6512684711360)  lists all available operators for pattern matching using POSIX regular expressions.

    **Table  1**  Regular expression match operators

    <a name="en-us_topic_0283137455_en-us_topic_0237121970_table6512684711360"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137455_en-us_topic_0237121970_row1082180211360"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p3735685611360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3735685611360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3735685611360"></a>Operator</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p600647111360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p600647111360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p600647111360"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p1676213111360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p1676213111360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p1676213111360"></a>Example</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137455_en-us_topic_0237121970_row1664145111360"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p578025211360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p578025211360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p578025211360"></a>~</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p6554726211360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6554726211360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6554726211360"></a>Matches a regular expression, which is case-sensitive.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p772799211360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p772799211360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p772799211360"></a>'thomas' ~ '.*thomas.*'</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row244307011360"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p6367099211360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6367099211360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p6367099211360"></a>~*</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p5707675111360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5707675111360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5707675111360"></a>Matches a regular expression, which is case-insensitive.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p5981411411360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5981411411360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5981411411360"></a>'thomas' ~* '.*Thomas.*'</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row145611911360"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p5083680411360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5083680411360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p5083680411360"></a>!~</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p2414044111360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p2414044111360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p2414044111360"></a>Does not match a regular expression, which is case-sensitive.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p921871911360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p921871911360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p921871911360"></a>'thomas' !~ '.*Thomas.*'</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row1585961211360"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p956017311360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p956017311360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p956017311360"></a>!~*</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p3617658011360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3617658011360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p3617658011360"></a>Does not match a regular expression, which is case-sensitive.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p4462183011360"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4462183011360"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p4462183011360"></a>'thomas' !~* '.*vadim.*'</p>
    </td>
    </tr>
    </tbody>
    </table>

    Matching rules:

    1.  Unlike LIKE patterns, a regular expression is allowed to match anywhere within a string, unless the regular expression is explicitly anchored to the beginning or end of the string.
    2.  Besides the metacharacters mentioned above, POSIX regular expressions also support the following pattern matching metacharacters:

        <a name="en-us_topic_0283137455_en-us_topic_0237121970_table23243447154559"></a>
        <table><thead align="left"><tr id="en-us_topic_0283137455_en-us_topic_0237121970_row10310639154559"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p263474154559"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p263474154559"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p263474154559"></a>Metacharacter</p>
        </th>
        <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="en-us_topic_0283137455_en-us_topic_0237121970_p21341433154559"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p21341433154559"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p21341433154559"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283137455_en-us_topic_0237121970_row55757359154559"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p20052206154559"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p20052206154559"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p20052206154559"></a>^</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p13615978154559"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p13615978154559"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p13615978154559"></a>Specifies the match starting with a string.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row915516111321"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p171561119328"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p171561119328"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p171561119328"></a>$</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p1841276153213"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p1841276153213"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p1841276153213"></a>Specifies the match at the end of a string.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137455_en-us_topic_0237121970_row24758039154559"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p59244166154559"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p59244166154559"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p59244166154559"></a>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283137455_en-us_topic_0237121970_p34048137154559"><a name="en-us_topic_0283137455_en-us_topic_0237121970_p34048137154559"></a><a name="en-us_topic_0283137455_en-us_topic_0237121970_p34048137154559"></a>Matches any single character.</p>
        </td>
        </tr>
        </tbody>
        </table>

    Regular expressions:

    POSIX regular expressions support the following functions:

    -   The  [**substring\(string from pa...**](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_leae425d0ea44492abccc5db3556aa6f4)  function provides a method for extracting a substring that matches the POSIX regular expression pattern.
    -   The  **[•regexp\_count\(string tex...](character-processing-functions-and-operators.md#li1459744717314)**  function counts the number of substrings that match the POSIX regular expression pattern.
    -   The  **[•regexp\_instr\(string tex...](character-processing-functions-and-operators.md#li11481132119326)**  function obtains the position of a substring that matches the POSIX regular expression pattern.
    -   The  **[•regexp\_substr\(string te...](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_l5385d9c47e9b4b6582d8fe6a87464190)**  function extracts a substring that matches the POSIX regular expression pattern.
    -   The  [**regexp\_replace\(string, p...**](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_l3d209c16ba5f452798f2875e0144da4f)  function replaces a substring that matches the POSIX regular expression pattern with the new text.
    -   The  [**regexp\_matches\(string te...**](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_l780ff57395f849c39cd24ae7bbc09950)  function returns a text array consisting of all captured substrings that match a POSIX regular expression pattern.
    -   The  [**regexp\_split\_to\_table\(st...**](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_l75315d2c7397491e8c5b10466b3fff91)  function splits a string using a POSIX regular expression pattern as a delimiter.
    -   The  [**regexp\_split\_to\_array\(st...**](character-processing-functions-and-operators.md#en-us_topic_0283137513_en-us_topic_0237121967_en-us_topic_0059779223_l0af8a0d78ca24b35815a93c7305cafdd)  function behaves the same as  **regexp\_split\_to\_table**, except that it returns its result as an array of text.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The regular expression split functions ignore zero-length matches, which occur at the beginning or end of a string or after the previous match. This is contrary to the strict definition of regular expression matching. The latter is implemented by regexp\_matches, but the former is usually the most commonly used behavior in practice.


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

    Although most regular expression searches can be executed quickly, regular expressions can still be artificially made up of memory that takes a long time and any amount of memory. It is not recommended that you accept the regular expression search mode from the non-security mode source. If you must do this, you are advised to add the statement timeout limit. The search with the SIMILAR TO mode has the same security risks as the SIMILAR TO provides many capabilities that are the same as those of the POSIX- style regular expression. The LIKE search is much simpler than the other two options. Therefore, it is more secure to accept the non-secure mode source search.


