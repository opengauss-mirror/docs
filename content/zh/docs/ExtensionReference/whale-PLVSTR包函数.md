# PLVSTR包函数

-   plvstr.rvrs(str text [, start_arg int [, _end int]])

    描述：返回指定子串被反转后的结果。

    参数说明：

    - str：要被反转的字符串。

    - start_arg：反转的起点。可选参数，缺省时表示从字符串起点开始。

    - _end：反转的重点。可选参数，缺省时表示直到字符串末尾结束。

    返回值类型：text

    示例：

    ```
    openGauss=# select plvstr.rvrs('123456789');
    rvrs
    -----------
    987654321
    (1 row)

    openGauss=# select plvstr.rvrs('123456789', 3);
    rvrs
    ---------
    9876543
    (1 row)

    openGauss=# select plvstr.rvrs('123456789', 3, 7);
    rvrs
    -------
    76543
    (1 row)

    ```

-   plvstr.normalize(str text)

    描述：用空格替换空白字符（如\t、\n和\r），用单个空格替换多个空格。

    参数描述：

    - str：要处理的字符串。

    返回值类型：text

    示例：

    ```
    openGauss=# select 'Just   do    it!' as str, plvstr.normalize('Just   do    it!');
        str        |  normalize
    ------------------+-------------
    Just   do    it! | Just do it!
    (1 row)

    openGauss=# -- openGauss中字符串前加上E/e才能够正常使用转义字符
    openGauss=# select E'Just\ndo\nit!' as str, plvstr.normalize(E'Just\ndo\nit!');
    str  |  normalize
    ------+-------------
    Just+| Just do it!
    do  +|
    it!  |
    (1 row)

    openGauss=# select E'Just\tdo\tit!' as str, plvstr.normalize(E'Just\tdo\tit!');
            str         |  normalize
    ---------------------+-------------
    Just    do      it! | Just do it!
    (1 row)

    openGauss=# select E'Just\rdo\rit!' as str, plvstr.normalize(E'Just\rdo\rit!');
        str      |  normalize
    ---------------+-------------
    Just\rdo\rit! | Just do it!
    (1 row)

    ```

-   plvstr.is_prefix(str text, prefix text [, cs bool])

    描述：前缀匹配，如果prefix是str的前缀，则返回true，否则返回false。

    参数描述：

    - str：源字符串。

    - prefix：要匹配的前缀。

    - cs：是否大小写敏感，可缺省，缺省值为要匹配的前缀。

    返回值类型：bool

    示例：

    ```
    openGauss=# select plvstr.is_prefix('ABC', 'ab');
    is_prefix
    -----------
    f
    (1 row)

    openGauss=# select plvstr.is_prefix('ABC', 'ab', true);
    is_prefix
    -----------
    f
    (1 row)

    openGauss=# select plvstr.is_prefix('ABC', 'ab', false);
    is_prefix
    -----------
    t
    (1 row)

    openGauss=# select plvstr.is_prefix('你们好', '你们');
    is_prefix
    -----------
    t
    (1 row)

    openGauss=# select plvstr.is_prefix('你们好', '你们', true);
    is_prefix
    -----------
    t
    (1 row)

    openGauss=# select plvstr.is_prefix('你们好', '你们', false);
    is_prefix
    -----------
    t
    (1 row)

    ```

-   plvstr.is_prefix(str int/bigint, prefix int/bigint)

    描述：前缀匹配，如果prefix是str的前缀，则返回true，否则返回false。

    参数描述：

    - str：源数字。

    - prefix：要匹配的前缀数字。

    返回值类型：bool

    示例：

    ```
    openGauss=# select plvstr.is_prefix(123, 12);
    is_prefix
    -----------
    t
    (1 row)

    openGauss=# select plvstr.is_prefix(123, 2);
    is_prefix
    -----------
    f
    (1 row)

    openGauss=# select plvstr.is_prefix(123::int8, 12::int8);
    is_prefix
    -----------
    t
    (1 row)

    openGauss=# select plvstr.is_prefix(123::int8, 2::int8);
    is_prefix
    -----------
    f
    (1 row)

    ```

-   plvstr.substr(str text, start_arg int [, len int])

    描述：返回从start_arg开始到长度为len的子字符串。

    参数说明：

    - str：要截取的字符串。

    - start_arg：表示子串的起点，当start_arg = 0时会被当做1来处理。

    - len：子串的长度，当start_arg < 0或start_arg > 字符串长度时，返回空字符串。如果start + len大于字符串的长度，则返回直到字符串结束的子串；如果len为负数，返回空。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvstr.substr('abc', 2);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc', 8);
    substr
    --------

    (1 row)

    openGauss=# select plvstr.substr('abc', 2, 2);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc', 2, 3);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc', 2, 4);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc', 2, -1);
    substr
    --------

    (1 row)

    ```

-   plvstr.substr(num numeric, start_arg numeric [, len numeric])

    描述：返回从start_arg开始到长度为len的子字符串。

    参数说明：

    - num：要截取的数字。后续会转化为字符串进行处理，所以当做字符串来用即可。

    - start_arg：表示子串的起点，当start_arg = 0时会被当做1来处理。输入小数小数部分会被直接截断。

    - len：子串的长度，当start_arg < 0或start_arg > 字符串长度时，返回空字符串。如果start + len大于字符串的长度，则返回直到字符串结束的子串；如果len为负数，返回空。输入小数小数部分会被直接截断。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvstr.substr(1.234, 2.8);
    substr
    --------
    234
    (1 row)

    openGauss=# select plvstr.substr(1.234, 2.8, 3.8);
    substr
    --------
    234
    (1 row)

    ```

-   plvstr.substr(str varchar, start_arg numeric [, len numeric])

    描述：返回从start_arg开始到长度为len的子字符串。

    参数说明：

    - num：要截取的字符串。

    - start_arg：表示子串的起点，当start_arg = 0时会被当做1来处理。输入小数小数部分会被直接截断。

    - len：子串的长度，当start_arg < 0或start_arg > 字符串长度时，返回空字符串。如果start + len大于字符串的长度，则返回直到字符串结束的子串；如果len为负数，返回空。输入小数小数部分会被直接截断。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvstr.substr('abc'::varchar, 2);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc'::varchar, 8);
    substr
    --------

    (1 row)

    openGauss=# select plvstr.substr('abc'::varchar, 2, 2);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc'::varchar, 2, 3);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc'::varchar, 2, 4);
    substr
    --------
    bc
    (1 row)

    openGauss=# select plvstr.substr('abc'::varchar, 2, -1);
    substr
    --------

    (1 row)

    ```

-   plvstr.instr(str text, patt text [, start_arg int [, nth int]])

    描述：在str中 搜索patt的位置并返回。

    参数说明：
    - str：源字符串。

    - patt：要搜索的模式。

    - start_arg：可选参数，表示开始搜索的位置，如果缺省就从头开始搜索。

    - nth：可选参数，表示返回第几个搜索到的结果，如果缺省就返回第一个。

    返回值类型：integer

    示例：

    ```
    openGauss=# select plvstr.instr('TestABC', 'ABC');
    -------
        5
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', 1);
    instr
    -------
        5
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', 6);
    instr
    -------
        0
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', 1, 1);
    instr
    -------
        5
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', 6, 1);
    instr
    -------
        0
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', -1);
    instr
    -------
        5
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', -6);
    instr
    -------
        0
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', -1, 1);
    instr
    -------
        5
    (1 row)

    openGauss=# select plvstr.instr('TestABC', 'ABC', -6, 1);
    instr
    -------
        0
    (1 row)

    ```

-   plvstr.lpart(str text, div text [, start_arg int [, nth int [, all_if_notfound bool]]])

    描述：在str中查找分隔符div并进行分割，返回分割完成之后左半边部分。

    参数说明：

    - str：即将被分割的字符串。

    - div：分隔符。

    - start_arg：可选参数，对str进行分割处理的起点，如果缺省则从头开始。

    - nth：可选参数，以第几个分隔符作为分界点，如果缺省则从第一个分隔符开始分割。

    - all_if_notfound：可选参数，在str中找不到分隔符的情况下，如果为true则返回str的全部内容，否则返回NULL；缺省表示false。

    返回值类型：text

    示例：
    ```
    openGauss=# \pset null '<NULL>';
    Null display is "<NULL>;".
    openGauss=# select plvstr.lpart('ABC.DEF', '.');
    lpart
    -------
    ABC
    (1 row)

    openGauss=# select plvstr.lpart('ABC.DEF.GHI.JKL.MNO', '.', 5);
    lpart
    ---------
    ABC.DEF
    (1 row)

    openGauss=# select plvstr.lpart('ABC.DEF.GHI.JKL.MNO', '.', 5, 2);
        lpart
    -------------
    ABC.DEF.GHI
    (1 row)

    openGauss=# select plvstr.lpart('ABCDEFGHIJKLMNO', '.', 5, 2, true);
        lpart
    -----------------
    ABCDEFGHIJKLMNO
    (1 row)

    openGauss=# select plvstr.lpart('ABCDEFGHIJKLMNO', '.', 5, 2, false);
    lpart
    ---------
    <NULL>;
    (1 row)

    ```

-   plvstr.rpart(str text, div text [, start_arg int [, nth int [, all_if_notfound bool]]])

    描述：在str中查找分隔符div并进行分割，返回分割完成之后左半边部分。

    参数说明：

    - str：即将被分割的字符串。

    - div：分隔符。

    - start_arg：可选参数，对str进行分割处理的起点，如果缺省则从头开始。

    - nth：可选参数，以第几个分隔符作为分界点，如果缺省则从第一个分隔符开始分割。

    - all_if_notfound：可选参数，在str中找不到分隔符的情况下，如果为true则返回str的全部内容，否则返回NULL；缺省表示false。

    返回值类型：text

    示例：
    ```
    openGauss=# \pset null '<NULL>';
    Null display is "<NULL>;".
    openGauss=# select plvstr.rpart('ABC.DEF', '.');
    rpart
    -------
    DEF
    (1 row)

    openGauss=# select plvstr.rpart('ABC.DEF.GHI.JKL.MNO', '.', 5);
        rpart
    -------------
    GHI.JKL.MNO
    (1 row)

    openGauss=# select plvstr.rpart('ABC.DEF.GHI.JKL.MNO', '.', 5, 2);
    rpart
    ---------
    JKL.MNO
    (1 row)

    openGauss=# select plvstr.rpart('ABCDEFGHIJKLMNO', '.', 5, 2, true);
        rpart
    -----------------
    ABCDEFGHIJKLMNO
    (1 row)

    openGauss=# select plvstr.rpart('ABCDEFGHIJKLMNO', '.', 5, 2, false);
    rpart
    ---------
    <NULL>;
    (1 row)

    ```

-   plvstr.lstrip(str text, substr text [, num int])

    描述：从str的左边开始匹配substr并删除匹配到的子串，直到匹配数目满足num或匹配失败为止。

    参数说明：

    - str：源字符串。

    - substr：要删除的子串。

    - num：可选参数，表示要匹配删除的最大次数，缺省则为1。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvstr.lstrip('abcabc|abcabc', 'abc');
    lstrip
    ------------
    abc|abcabc
    (1 row)

    openGauss=# select plvstr.lstrip('abcabc|abcabc', 'abc', 1);
    lstrip
    ------------
    abc|abcabc
    (1 row)

    openGauss=# select plvstr.lstrip('abcabc|abcabc', 'abc', 2);
    lstrip
    ---------
    |abcabc
    (1 row)

    openGauss=# select plvstr.lstrip('abcabc|abcabc', 'abc', 100);
    lstrip
    ---------
    |abcabc
    (1 row)

    ```

-   plvstr.rstrip(str text, substr text [, num int])

    描述：从str的左边开始匹配substr并删除匹配到的子串，直到匹配数目满足num或匹配失败为止。

    参数说明：

    - str：源字符串。

    - substr：要删除的子串。

    - num：可选参数，表示要匹配删除的最大次数，缺省则为1。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvstr.rstrip('abcabc|abcabc', 'abc');
    rstrip
    ------------
    abcabc|abc
    (1 row)

    openGauss=# select plvstr.rstrip('abcabc|abcabc', 'abc', 1);
    rstrip
    ------------
    abcabc|abc
    (1 row)

    openGauss=# select plvstr.rstrip('abcabc|abcabc', 'abc', 2);
    rstrip
    ---------
    abcabc|
    (1 row)

    openGauss=# select plvstr.rstrip('abcabc|abcabc', 'abc', 100);
    rstrip
    ---------
    abcabc|
    (1 row)

    ```

-   plvstr.swap(str text, replace text [, start_arg int, length int])

    描述：用replace替换掉str中的子串。其本质是将源字符串分为两部分，第一部分是起点到start_arg处，第二部分是start_arg + length到str结尾处，两部分分别拼接在replace的左右两侧。当start_arg + length小于0时，第二部分会变成从右往左数取长度为start_arg + length的子串

    参数说明：

    - str：源字符串。

    - replace：用于替换原字符串中子串的字符串。

    - start_arg：缺省参数，替换的起点，缺省为1，表示从头开始。

    - length：表示原字符串中要被replace替换的子串的长度。缺省时为NULL，表示替换与replace长度相同的子串。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvstr.swap('1236789', '45');
    swap
    ---------
    4536789
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, 1);
    swap
    ----------
    12345789
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, 2);
    swap
    ---------
    1234589
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, -1);
        swap
    ------------
    1234536789
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, -2);
        swap
    -------------
    12345236789
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, -4);
        swap
    --------------
    123451236789
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, -5);
    swap
    --------
    123459
    (1 row)

    openGauss=# select plvstr.swap('1236789', '45', 4, -100);
    ERROR:  plvstr.cpp : 1051 : The parameter destMax is equal to zero or larger than the macro : SECUREC_STRING_MAX_LEN.
    CONTEXT:  referenced column: swap

    ```

-   plvstr.betwn(str text, start_arg int, _end int [, inclusive bool])

    描述：根据给定的起点和终点在str中截取一个子串并返回。

    参数说明：

    - str：源字符串。

    - start_arg：截取的起点。

    - _end：截取的终点。

    - inclusive：可选参数，该参数表示截取子串时是否需要包含起点和终点，true表示包含，false表示不包含，缺省是默认为true。

    返回值类型：text

    示例：

    ```
    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 7, 9);
    betwn
    -------
    and
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 7, 9, false);
    betwn
    -------
    n
    (1 row)

    ```

-   plvstr.betwn(str text, start_arg text, _end text [, startnth int, endnth int [, inclusive bool, gotoend bool]])

    描述：根据给定的起点子串和终点子串在str中截取一个子串并返回。

    参数说明：

    - str：源字符串。

    - start_arg：截取的起点。

    - _end：截取的终点。

    - startnth：可选参数，表示匹配起点的时候从第几个匹配结果开始，缺省时为1，表示从第一个匹配到的起点开始。

    - endnth：可选参数，表示匹配终点的时候从第几个匹配结果开始，缺省时为1，表示从第一个匹配到的终点开始。

    - inclusive：可选参数，该参数表示截取子串时是否需要包含起点和终点，true表示包含，false表示不包含，缺省是默认为true。

    - gotoend：可选参数，该参数表示如果终点没找到是否将源字符串的末尾当做终点，如果为true表示以源字符串末尾作为终点，false表示无终点返回NULL，缺省是默认为true。

    返回值类型：text

    示例：

    ```
    openGauss=# \pset null '<NULL>';
    Null display is "<NULL>;".
    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'ry');
    betwn
    -------
    arry
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'ry', 1,1,FALSE,FALSE);
    betwn
    -------
    r
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'ry', 2,1,TRUE,FALSE);
        betwn
    --------------------
    and Sally are very
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'y', 2,1);
    betwn
    -----------
    and Sally
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'a', 2, 2);
        betwn
    -------------
    and Sally a
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'a', 2, 3, FALSE,FALSE);
            betwn
    ---------------------
    nd Sally are very h
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'zzz', 2, 3, FALSE,FALSE);
    betwn
    ---------
    <NULL>;
    (1 row)

    openGauss=# select plvstr.betwn('Harry and Sally are very happy', 'a', 'zzz', 2, 3, FALSE, TRUE);
            betwn
    -------------------------
    nd Sally are very happy
    (1 row)

    ```

-   plvstr.left(str text, n int)

    描述：从左往右获取长度为n的子串。

    参数说明：

    - str：源字符串。

    - n：字符串子串的长度。可以为负数，当为负数时，假设str长度为len，则会获取长度为len + n长度的字符串，如果len + n仍小于0，则会获取空字符串。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select plvstr.left('abcdefg', 3);
    left
    ------
    abc
    (1 row)

    openGauss=# select plvstr.left('abcdefg', 10);
    left
    ---------
    abcdefg
    (1 row)

    openGauss=# select plvstr.left('abcdefg', -1);
    left
    --------
    abcdef
    (1 row)

    openGauss=# select plvstr.left('abcdefg', -100);
    left
    ------

    (1 row)

    ```

-   plvstr.right(str text, n int)

    描述：从右往左获取长度为n的子串。

    参数说明：

    - str：源字符串。

    - n：字符串子串的长度。可以为负数，当为负数时，假设str长度为len，则会获取长度为len + n长度的字符串，如果len + n仍小于0，则获取全字符串。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select plvstr.right('abcdefg', 3);
    right
    -------
    efg
    (1 row)

    openGauss=# select plvstr.right('abcdefg', 10);
    right
    -------

    (1 row)

    openGauss=# select plvstr.right('abcdefg', -3);
    right
    -------
    defg
    (1 row)

    openGauss=# select plvstr.right('abcdefg', -100);
    right
    ---------
    abcdefg
    (1 row)

    ```
