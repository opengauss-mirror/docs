# PLVCHR包函数

-   plvchr.nth(str text, n int)

    描述：返回原字符串str中的第n个字符。

    参数说明：

    - str：源字符串。

    - n：表示获取的字符的位置。其中取0和取1效果是一样的，当为负数时则获取从右往左数的第abs(n)个字符。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvchr.nth('abcdefg', 3);
    nth
    -----
    c
    (1 row)

    openGauss=# select plvchr.nth('abcdefg', -3);
    nth
    -----
    e
    (1 row)

    openGauss=# select plvchr.nth('abcdefg', 0);
    nth
    -----
    a
    (1 row)

    ```

-   plvchr.first(str text)

    描述：获取字符串中的首字符。

    参数说明：

    - str：源字符串。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvchr.first('abcdefg');
    first
    -------
    a
    (1 row)

    ```

-   plvchr.last(str text)

    描述：获取字符串中的末尾字符。

    参数说明：

    - str：源字符串。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvchr.last('abcdefg');
    last
    ------
    g
    (1 row)

    ```

-   plvchr._is_kind(str text, kind int)

    描述：检查字符串中首字符是否为指定的kind。如果首字符是多字节的字符，则种类固定为5。

    参数说明：

    - str：源字符串。

    - kind：字符种类，说明如下表所示：

        |kind|含义|
        |:---|:---|
        |1|空格|
        |2|数字字符|
        |3|引用（目前只有单引号）|
        |4|其他|
        |5|大写和小写字母，或者多字节的字符|

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr._is_kind(' ', 0);
    ERROR:  invalid parameter
    DETAIL:  Second parametr isn't in enum {1,2,3,4,5}
    CONTEXT:  referenced column: _is_kind
    openGauss=# select plvchr._is_kind(' ', 1);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind('2', 2);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind(E'\'', 3);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind('_', 4);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind('a', 5);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind('你', 5);
    _is_kind
    ----------
    t
    (1 row)

    ```

-   plvchr._is_kind(c int, kind int)

    描述：检查指定ascii码所表示的字符是否为指定的kind。

    参数说明：

    - str：源字符串

    - kind：字符种类。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr._is_kind(ascii(' '), 0);
    ERROR:  invalid parameter
    DETAIL:  Second parametr isn't in enum {1,2,3,4,5}
    CONTEXT:  referenced column: _is_kind
    openGauss=# select plvchr._is_kind(ascii('2'), 2);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind(ascii(E'\''), 3);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind(ascii('_'), 4);
    _is_kind
    ----------
    t
    (1 row)

    openGauss=# select plvchr._is_kind(ascii('a'), 5);
    _is_kind
    ----------
    t
    (1 row)

    ```

-   plvchr.is_blank(c text)

    描述：检查字符串中首字符是否为空格。

    参数说明：

    - c：源字符串。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_blank(' ');
    is_blank
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_blank('a');
    is_blank
    ----------
    f
    (1 row)

    ```

-   plvchr.is_blank(c int)

    描述：检查指定ascii码所表示的字符是否为空格。

    参数说明：

    - c：ascii码。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_blank(ascii(' '));
    is_blank
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_blank(ascii('a'));
    is_blank
    ----------
    f
    (1 row)

    ```

-   plvchr.is_digit(c text)

    描述：检查字符串中首字符是否为数字。

    参数说明：

    - c：源字符串。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_digit('1');
    is_digit
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_digit('a');
    is_digit
    ----------
    f
    (1 row)

    ```

-   plvchr.is_digit(c int)

    描述：检查指定ascii码所表示的字符是否为数字。

    参数说明：

    - c：ascii码。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_digit(ascii('1'));
    is_digit
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_digit(ascii('a'));
    is_digit
    ----------
    f
    (1 row)

    ```

-   plvchr.is_quote(c text)

    描述：检查字符串中首字符是否为引用。

    参数说明：

    - c：源字符串。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_quote(E'\'');
    is_quote
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_quote('a');
    is_quote
    ----------
    f
    (1 row)

    ```

-   plvchr.is_quote(c int)

    描述：检查指定ascii码所表示的字符是否为引用。

    参数说明：

    - c：ascii码。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_quote(ascii(E'\''));
    is_quote
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_quote(ascii('a'));
    is_quote
    ----------
    f
    (1 row)

    ```

-   plvchr.is_other(c text)

    描述：检查字符串中首字符是否为其他字符。

    参数说明：

    - c：源字符串。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_other('_');
    is_other
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_other('a');
    is_other
    ----------
    f
    (1 row)

    ```

-   plvchr.is_other(c int)

    描述：检查指定ascii码所表示的字符是否为其他字符。

    参数说明：

    - c：ascii码。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_other(ascii('_'));
    is_other
    ----------
    t
    (1 row)

    openGauss=# select plvchr.is_other(ascii('a'));
    is_other
    ----------
    f
    (1 row)

    ```

-   plvchr.is_letter(c text)

    描述：检查字符串中首字符是否为字母或多字节字符。

    参数说明：

    - c：源字符串。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_letter('_');
    is_letter
    -----------
    f
    (1 row)

    openGauss=# select plvchr.is_letter('a');
    is_letter
    -----------
    t
    (1 row)

    openGauss=# select plvchr.is_letter('你');
    is_letter
    -----------
    t
    (1 row)

    ```

-   plvchr.is_letter(c int)

    描述：检查指定ascii码所表示的字符是否为字母。

    参数说明：

    - c：ascii码。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvchr.is_letter(ascii('_'));
    is_letter
    -----------
    f
    (1 row)

    openGauss=# select plvchr.is_letter(ascii('a'));
    is_letter
    -----------
    t
    (1 row)

    ```

-   plvchr.char_name(c text)

    描述：获取字符串中首字符的名字。如果首字符为多字节或者ascii码大于33的字符则直接返回字符串的首字符。

    参数说明：

    - c：源字符串。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select plvchr.char_name(E'\n');
    char_name
    -----------
    NL
    (1 row)

    openGauss=# select plvchr.char_name(E'\t');
    char_name
    -----------
    HT
    (1 row)

    openGauss=# select plvchr.char_name(E'\r');
    char_name
    -----------
    CR
    (1 row)

    openGauss=# select plvchr.char_name(' ');
    char_name
    -----------
    SP
    (1 row)

    openGauss=# select plvchr.char_name('a');
    char_name
    -----------
    a
    (1 row)

    openGauss=# select plvchr.char_name('你好');
    char_name
    -----------
    你
    (1 row)

    ```

-   plvchr.quoted1(str text)

    描述：返回str的引用格式（单引号引用）。

    参数说明：源字符串。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select plvchr.quoted1('test');
    quoted1
    ---------
    'test'
    (1 row)

    ```

-   plvchr.quoted2(str text)

    描述：返回str的引用格式（双引号引用）。

    参数说明：源字符串。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select plvchr.quoted2('test');
    quoted2
    ---------
    "test"
    (1 row)

    ```

-   plvchr.stripped(str text, char_in text)

    描述：从str中删除所有char_in中出现的字符。

    参数说明：

    - str：源字符串。

    - char_in：匹配的子串。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select plvchr.stripped('Hello', 'le');
    stripped
    ----------
    Ho
    (1 row)

    openGauss=# select plvchr.stripped('你好', '你');
    stripped
    ----------
    好
    (1 row)

    ```