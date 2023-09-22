# 字符处理函数和操作符

相比于原始的openGauss，dolphin对于字符处理函数和操作符的修改主要为：

-   to_multi_byte(str text)

    描述：将所有单字节字符转换为相应的多字节字符

    返回值类型：text

    示例：

    ```
    openGauss=# select to_multi_byte('abcdefg');
    to_multi_byte
    ----------------
    ａｂｃｄｅｆｇ
    (1 row)

    ```

-   to_single_byte(str text)

    描述：将所有多字节字符转换为相应的单字节字符

    返回值类型：text

    示例：

    ```
    openGauss=# select to_single_byte('ａｂｃｄｅｆｇ');
    to_single_byte
    ----------------
    abcdefg
    (1 row)

    ```

-   dump(any)

    描述：导出参数相关的信息；包括类型、长度、内部字节等。当前由于创建了dump(text)，导致不会走dump(any)，所以该函数目前无用。

    返回值类型：varchar

-   dump(any, integer)

    描述：导出参数相关的信息；包括类型、长度、内部字节等。当前由于创建了dump(text, integer)，导致不会走dump(any, integer)，所以该函数目前无用。

    返回值类型：varchar

-   dump(text)

    描述：导出text类型相关的信息；包括类型、长度、内部字节等。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select dump('abc');
                dump
    ---------------------------------
    Typ=25 Len=7: 28,0,0,0,97,98,99
    (1 row)

    ```

-   dump(src text, fmt integer)

    描述：导出text类型相关的信息；包括类型、长度、内部字节等。

    参数说明：
    - src：输入的字符串
    - fmt：表示内容输出的格式，取值为8、10、16时分别表示按八进制、十进制和十六进制输出内容，取值为17时按字符输出内容。

    返回值类型：varchar

    示例：
    ```
    openGauss=# select dump('abc', 17);
                dump
    -----------------------------
    Typ=25 Len=7: ?,?,?,?,a,b,c
    (1 row)

    openGauss=# select dump(12, 17);
            dump
    ---------------------------
    Typ=25 Len=6: ?,?,?,?,1,2
    (1 row)

    openGauss=# select dump(12, 10);
                dump
    ------------------------------
    Typ=25 Len=6: 24,0,0,0,49,50
    (1 row)

    openGauss=# select dump(12, 8);
                dump
    ------------------------------
    Typ=25 Len=6: 30,0,0,0,61,62
    (1 row)

    openGauss=# select dump(12, 16);
                dump
    ------------------------------
    Typ=25 Len=6: 18,0,0,0,31,32
    (1 row)

    ```

-   orafce.substr(str text, start_arg int [, len int])

    描述：返回从start_arg开始到长度为len的子字符串。

    参数说明：
    - str：要截取的字符串。
    - start_arg：表示子串的起点，当start_arg = 0时会被当做1来处理；
    - len：子串的长度，当start_arg < 0或start_arg > 字符串长度时，返回空字符串。如果start + len大于字符串的长度，则返回直到字符串结束的子串；如果len为负数，返回空。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.substr('abc', 2);
    substr
    --------
    bc
    (1 row)

    openGauss=# select orafce.substr('abc', 8);
    substr
    --------

    (1 row)

    openGauss=# select orafce.substr('abc', 2, 2);
    substr
    --------
    bc
    (1 row)

    openGauss=# select orafce.substr('abc', 2, 3);
    substr
    --------
    bc
    (1 row)

    openGauss=# select orafce.substr('abc', 2, 4);
    substr
    --------
    bc
    (1 row)

    openGauss=# select orafce.substr('abc', 2, -1);
    substr
    --------

    (1 row)

    ```

-   strposb(str varchar2, pattern varchar2)

    描述：返回输入str中pattern出现的字节位置。不存在则返回0。

    返回值类型：int

    示例：
    ```
    openGauss=# SELECT strposb('ABCありがとう', 'りが');
    strposb
    ---------
        7
    (1 row)

    openGauss=# SELECT strposb('ABCありがとう', 'A');
    strposb
    ---------
        1
    (1 row)

    openGauss=# SELECT strposb('ABCありがとう', 'Z');
    strposb
    ---------
        0
    (1 row)

    ```

-   orafce.lpad(source text, len int, [, pattern text])

    描述：向source的左边填充pattern，直到长度为len为止。

    参数说明：
    - source：要被填充的源字符串。
    - len：填充到达的最大长度。当len为0时，返回字符串。当len的长度比source的长度小时，从右往左删除source的字符，直到source的长度为len。
    - pattern：填充的内容，可缺省，缺省时填充空格。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.lpad('a', 4, 'b');
    lpad
    ------
    bbba
    (1 row)

    openGauss=# select orafce.lpad('a', 4);
    lpad
    ------
        a
    (1 row)

    openGauss=# select orafce.lpad('a', 0);
    lpad
    ------

    (1 row)

    openGauss=# select orafce.lpad('a', 0) is null;
    ?column?
    ----------
    f
    (1 row)

    openGauss=# select orafce.lpad('abc', 2);
    lpad
    ------
    ab
    (1 row)

    ```

-   orafce.rpad(source, len, [, pattern])

    描述：向source的右边填充pattern，直到长度为len为止。

    参数说明：
    - source：要被填充的源字符串。
    - len：填充到达的最大长度。当len为0时，返回字符串。当len的长度比source的长度小时，从右往左删除source的字符，直到source的长度为len。
    - pattern：填充的内容，可缺省，缺省时填充空格。


    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.rpad('a', 4, 'b');
    rpad
    ------
    abbb
    (1 row)

    openGauss=# select orafce.rpad('a', 4);
    rpad
    ------
    a
    (1 row)

    openGauss=# select orafce.rpad('a', 0);
    rpad
    ------

    (1 row)

    openGauss=# select orafce.rpad('a', 0) is null;
    ?column?
    ----------
    f
    (1 row)

    openGauss=# select orafce.rpad('abc', 2);
    rpad
    ------
    ab
    (1 row)

    ```

-   orafce.ltrim(source text [, pattern text])

    描述：从左往右删除所有存在于pattern中的字符，直到source被完全删除或遇到第一个不在pattern中的字符为止。

    参数说明：
    - source：表示要删除的字符串。
    - pattern：表示要删除的内容，可缺省，缺省时当做一个空格进行处理。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.ltrim('abaacIacaab', 'ab');
    ltrim
    ---------
    cIacaab
    (1 row)

    openGauss=# select orafce.ltrim('abaacIacaab', 'ab');
    ltrim
    ---------
    cIacaab
    (1 row)

    openGauss=# select length(orafce.ltrim('         I            ', ' '));
    length
    --------
        13
    (1 row)

    openGauss=# select length(orafce.ltrim('         I            '));
    length
    --------
        13
    (1 row)

    ```

-   orafce.rtrim(source text [, pattern text])

    描述：从右往左删除所有存在于pattern中的字符，直到source被完全删除或遇到第一个不在pattern中的字符为止。

    参数说明：
    - source：表示要删除的字符串。
    - pattern：表示要删除的内容，可缺省，缺省时当做一个空格进行处理。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.rtrim('abaacIacaab', 'ab');
    rtrim
    ----------
    abaacIac
    (1 row)

    openGauss=# select orafce.rtrim('abaacIacaab', 'ab');
    rtrim
    ----------
    abaacIac
    (1 row)

    openGauss=# select length(orafce.rtrim('         I            ', ' '));
    length
    --------
        10
    (1 row)

    openGauss=# select length(orafce.rtrim('         I            '));
    length
    --------
        10
    (1 row)

    ```

-   orafce.btrim(source[, pattern])

    描述：从两边开始删除所有存在于pattern中的字符，直到source被完全删除或两边都遇到第一个不在pattern中的字符为止。

    参数说明：
    - source：表示要删除的字符串。
    - pattern：表示要删除的内容，可缺省，缺省时当做一个空格进行处理。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.btrim('abaacIacaab', 'ab');
    btrim
    -------
    cIac
    (1 row)

    openGauss=# select orafce.btrim('abaacIacaab', 'ab');
    btrim
    -------
    cIac
    (1 row)

    openGauss=# select length(orafce.btrim('         I            ', ' '));
    length
    --------
        1
    (1 row)

    openGauss=# select length(orafce.btrim('         I            '));
    length
    --------
        1
    (1 row)

    ```

-   orafce.length(char)

    描述：返回字符串的长度（按字符数计算）。

    返回值类型：int

    示例：
    ```
    openGauss=# select orafce.length('你好吗');
    length
    --------
        3
    (1 row)

    openGauss=# select orafce.length('abc');
    length
    --------
        3
    (1 row)

    ```

-   orafce.regexp_like(text string, text pattern [, text flags])

    描述：返回string中所有匹配POSIX正则表达式的子字符串。如果pattern匹配，返回true，否则返回false。

    参数说明：
    - string：要匹配的源字符串。

    - pattern：要匹配的模式。

    - flags：flags是一个可选的参数，包含零个或多个改变函数匹配行为的单字母标记。其中：m表示按照多行模式匹配。SQL语法兼容A和B的情况下，n选项在GUC参数behavior_compat_options值包含aformat_regexp_match时，表示 . 能够匹配 '\n' 字符，flags中没有指定n时，默认.不能匹配 '\n' 字符；值不包含aformat_regexp_match时，. 默认能匹配'\n'字符。n选项的含义与m选项一致。可选的参数包括b，c，e，i，m，n，p，q，s，t，w，x。

    返回值类型：bool

    示例：
    ```
    openGauss=# SELECT orafce.regexp_like('foobarbequebaz', '(bar)(beque)');
    regexp_like
    -------------
    t
    (1 row)

    openGauss=# SELECT orafce.regexp_like('foobarbequebaz', 'zzzzzz');
    regexp_like
    -------------
    f
    (1 row)

    openGauss=# SELECT orafce.regexp_like('aggreate', '^a.*');
    regexp_like
    -------------
    t
    (1 row)

    openGauss=# SELECT orafce.regexp_like('bggreate', '^a.*');
    regexp_like
    -------------
    f
    (1 row)

    openGauss=# SELECT orafce.regexp_like('Aggreate', '^a.*');
    regexp_like
    -------------
    f
    (1 row)

    openGauss=# SELECT orafce.regexp_like('Aggreate', '^a.*', 'i');
    regexp_like
    -------------
    t
    (1 row)

    ```

-   orafce.regexp_count(text string, text pattern [, position int [, flags text]])

    描述：获取满足匹配的子串个数。

    参数说明：

    - string：用于匹配的源字符串。

    - pattern：用于匹配的正则表达式模式串。

    - position：表示从源字符串的第几个字符开始匹配，为可选参数，默认值为1。

    - flags：可选参数，包含零个或多个改变函数匹配行为的单字母标记。其中：m表示按照多行模式匹配。SQL语法兼容A和B的情况下，n选项在GUC参数behavior_compat_options值包含aformat_regexp_match时，表示 . 能够匹配 '\n' 字符，flags中没有指定n时，默认.不能匹配 '\n' 字符；值不包含aformat_regexp_match时，. 默认能匹配'\n'字符。n选项的含义与m选项一致。可选的参数包括b，c，e，i，m，n，p，q，s，t，w，x。

    示例：
    ```
    openGauss=# SELECT orafce.regexp_count('foobarbaz','b(..)', 5) AS RESULT;
    result
    --------
        1
    (1 row)

    ```

-   orafce.regexp_instr(string text, pattern text [, position int [, occurence int [, return_opt int [, flags text [, group int]]]]])

    描述：获取满足匹配的子串个数。

    参数说明：

    - string：用于匹配的源字符串。

    - pattern：用于匹配的正则表达式模式串。

    - position：表示从源字符串的第几个字符开始匹配，为可选参数，默认值为1。

    - occurence：表示获取第occurence个匹配子串的位置，为可选参数，默认值为1。

    - return_opt：允许您指定应该返回的与事件相关的内容。
        - 0：返回第一个字符出现的位置，此为默认值。

        - 1：返回出现之后的字符的位置。

    - flags：可选参数，包含零个或多个改变函数匹配行为的单字母标记。其中：m表示按照多行模式匹配。SQL语法兼容A和B的情况下，n选项在GUC参数behavior_compat_options值包含aformat_regexp_match时，表示 . 能够匹配 '\n' 字符，flags中没有指定n时，默认.不能匹配 '\n' 字符；值不包含aformat_regexp_match时，. 默认能匹配'\n'字符。n选项的含义与m选项一致。可选的参数包括b，c，e，i，m，n，p，q，s，t，w，x。

    - group：一个非负整数，表示函数应该返回pattern中的哪个捕获组。

    示例：
    ```
    openGauss=# SELECT orafce.REGEXP_INSTR('199 Oretax Prayers, Riffles Stream, CA', '([S|R|P][[:alpha:]]{6})', 3, 2, 1) FROM DUAL;
    regexp_instr
    --------------
            28
    (1 row)

    ```

-   orafce.regexp_substr(string text, pattern text [, position int [, occurence int [, flags text [, group int]]]])

    描述：返回将POSIX正则表达式模式与字符串匹配后得到的匹配子字符串。如果没有找到匹配项，则函数返回NULL。

    参数说明：

    - string：用于匹配的源字符串。

    - pattern：用于匹配的正则表达式模式串。

    - position：表示从源字符串的第几个字符开始匹配，为可选参数，默认值为1。

    - occurence：表示获取第occurence个匹配子串的位置，为可选参数，默认值为1。

    - return_opt：允许您指定应该返回的与事件相关的内容
        - 0：返回第一个字符出现的位置，此为默认值。

        - 1：返回出现之后的字符的位置。

    - flags：可选参数，包含零个或多个改变函数匹配行为的单字母标记。其中：m表示按照多行模式匹配。SQL语法兼容A和B的情况下，n选项在GUC参数behavior_compat_options值包含aformat_regexp_match时，表示 . 能够匹配 '\n' 字符，flags中没有指定n时，默认.不能匹配 '\n' 字符；值不包含aformat_regexp_match时，. 默认能匹配'\n'字符。n选项的含义与m选项一致。可选的参数包括b，c，e，i，m，n，p，q，s，t，w，x。

    - group：一个非负整数，表示函数应该返回pattern中的哪个捕获组。

    示例：
    ```
    openGauss=# SELECT orafce.regexp_substr('number of your street, zipcode town, FR', ',[^,]+');
    regexp_substr
    ----------------
    , zipcode town
    (1 row)

    openGauss=# SELECT orafce.regexp_substr('number of your street, zipcode town, FR', ',[^,]+', 24);
    regexp_substr
    ---------------
    , FR
    (1 row)

    openGauss=# SELECT orafce.regexp_substr('number of your street, zipcode town, FR', ',[^,]+', 1, 2);
    regexp_substr
    ---------------
    , FR
    (1 row)

    openGauss=# SELECT orafce.regexp_substr('1234567890 1234567890', '(123)(4(56)(78))', 1, 1, 'i', 0);
    regexp_substr
    ---------------
    12345678
    (1 row)

    ```