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

-   orafce.lpad(source text, len int [, pattern text])

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

-   orafce.rpad(source, len [, pattern])

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

-   orafce.regexp_replace(string text, pattern text, replace_string text[ ,position int[ ,occurence int[ ,flags text]]])

    描述：返回源字符串的修改版本，其中源字符串中出现的POSIX正则表达式模式将被指定的替换字符串替换。如果找不到匹配项，或者查询的出现次数超过了匹配次数，则返回未受影响的源字符串。

    参数说明：

    - string：用于匹配的源字符串。

    - pattern：用于匹配的正则表达式模式串。
    
    - replace_string：用于替换能正确匹配模式串的字符串。

    - position：表示从源字符串的第几个字符开始匹配，为可选参数，默认值为1，表示从头开始。

    - occurence：表示获取第occurence个匹配子串的位置，为可选参数，默认值为0，表示获取所有的匹配成功的子串。

    - flags：可选参数，包含零个或多个改变函数匹配行为的单字母标记。其中：m表示按照多行模式匹配。SQL语法兼容A和B的情况下，n选项在GUC参数behavior_compat_options值包含aformat_regexp_match时，表示 . 能够匹配 '\n' 字符，flags中没有指定n时，默认.不能匹配 '\n' 字符；值不包含aformat_regexp_match时，. 默认能匹配'\n'字符。n选项的含义与m选项一致。可选的参数包括b，c，e，i，m，n，p，q，s，t，w，x。

    返回值类型：text

    示例：
    ```
    openGauss=# SELECT orafce.REGEXP_REPLACE('number   your     street,    zipcode  town, FR', '( ){2,}', ' ', 9);
                regexp_replace
    ----------------------------------------
    number   your street, zipcode town, FR
    (1 row)

    openGauss=# SELECT orafce.REGEXP_REPLACE('number   your     street,    zipcode  town, FR', '( ){2,}', ' ', 9, 2);
                regexp_replace
    ---------------------------------------------
    number   your     street, zipcode  town, FR
    (1 row)

    ```

-   orafce.replace_empty_strings()

    描述：是一个触发器函数，会将文本中的空字符串转换为NULL。

    返回值类型：trigger

    示例：

    ```
    openGauss=# -- 该参数允许openGauss在A兼容模式下接受空字符串
    openGauss=# set behavior_compat_options to 'accept_empty_str';
    SET
    openGauss=# -- 将NULL的输出设定为'<NULL>'
    openGauss=# \pset null '<NULL>'
    Null display is "<NULL>".
    openGauss=# create table test(id int, name text);
    CREATE TABLE
    openGauss=# insert into test values(1, ''), (2, null);
    INSERT 0 2
    openGauss=# select * from test;
    id |  name
    ----+--------
    1 |
    2 | <NULL>
    (2 rows)

    openGauss=# 
    openGauss=# create trigger test_trg BEFORE INSERT OR UPDATE  ON test FOR EACH ROW EXECUTE PROCEDURE orafce.replace_empty_strings();
    WARNING:  Trigger function with non-plpgsql type is not recommended.
    DETAIL:  Non-plpgsql trigger function are not shippable by default.
    HINT:  Unshippable trigger may lead to bad performance.
    CREATE TRIGGER
    openGauss=# insert into test values(3, '');
    WARNING:  Field "name" of table "test" is empty string (replaced by NULL).
    INSERT 0 1
    openGauss=# select * from test;
    id |  name
    ----+--------
    1 |
    2 | <NULL>
    3 | <NULL>
    (3 rows)


    ```

-   orafce.replace_null_strings()

    描述：是一个触发器函数，会将文本中的NULL转换为空字符串。

    返回值类型：trigger

    示例：

    ```
    openGauss=# -- 该参数允许openGauss在A兼容模式下接受空字符串
    openGauss=# set behavior_compat_options to 'accept_empty_str';
    SET
    openGauss=# -- 将NULL的输出设定为'<NULL>'
    openGauss=# \pset null '<NULL>'
    Null display is "<NULL>".
    openGauss=# create table test(id int, name text);
    CREATE TABLE
    openGauss=# insert into test values(1, ''), (2, null);
    INSERT 0 2
    openGauss=# select * from test;
    id |  name
    ----+--------
    1 |
    2 | <NULL>
    (2 rows)

    openGauss=# 
    openGauss=# create trigger test_trg BEFORE INSERT OR UPDATE  ON test FOR EACH ROW EXECUTE PROCEDURE orafce.replace_null_strings();
    WARNING:  Trigger function with non-plpgsql type is not recommended.
    DETAIL:  Non-plpgsql trigger function are not shippable by default.
    HINT:  Unshippable trigger may lead to bad performance.
    CREATE TRIGGER
    openGauss=# insert into test values(3, '');
    INSERT 0 1
    openGauss=# select * from test;
    id |  name
    ----+--------
    1 |
    2 | <NULL>
    3 |
    (3 rows)

    ```

-   orafce.unistr(seq text)

    描述：用unicode字符替换unicode转义序列。

    参数说明：

    - seq：要被转换的序列。

    返回值类型：text

    示例：

    ```
    openGauss=# SELECT orafce.unistr('\0441\043B\043E\043D');
    unistr
    --------
    слон
    (1 row)

    openGauss=# SELECT orafce.unistr('d\u0061t\U00000061');
    unistr
    --------
    data
    (1 row)

    ```

-   substrb(str varchar2, start integer [, len integer])

    描述：从指定字节位置（从1开始）开始的输入varchar2字符串中提取指定数量的字节，并作为varchar2串返回

    参数说明：

    - str：源字符串。

    - start：截取的起点（按字节数进行计算）。

    - len：可选参数，表示截取的长度（按字节数计算），缺省时会截取到源字符串终点。

    返回值类型：varchar2

    示例：
    ```
    openGauss=# -- 日语符号三个字节，ABC各占一个字节，所以从'り'开始截取
    openGauss=# SELECT substrb('ABCありがとう'::VARCHAR2, 7);
    substrb
    ----------
    りがとう
    (1 row)

    openGauss=# -- 截取6字节，所以只截取两个日语字符
    openGauss=# SELECT substrb('ABCありがとう'::VARCHAR2, 7, 6);
    substrb
    ---------
    りが
    (1 row)

    ```

-   lengthb(str varchar2)

    描述：获取字符串的长度（单位为字节）。

    参数说明：

    - str：源字符串。

    返回值类型：int

    示例：
    ```
    openGauss=# select lengthb('ABCありがとう'::VARCHAR2);
    lengthb
    ---------
        18
    (1 row)

    ```

-   orafce.orafce_concat2(str1 varchar2, str2 varchar2)

    描述：拼接两个字符串并返回。

    参数描述：

    - str1：待拼接字符串。

    - str2：待拼接字符串。

    返回值类型：varchar2

    示例：
    ```
    openGauss=# select orafce.orafce_concat2('Hello '::varchar2, 'World'::varchar2);
    orafce_concat2
    ----------------
    Hello World
    (1 row)

    ```

-   orafce.orafce_concat2(str1 nvarchar2, str2 nvarchar2)

    描述：拼接两个字符串并返回。

    参数描述：

    - str1：待拼接字符串。

    - str2：待拼接字符串。

    返回值类型：nvarchar2

    示例：
    ```
    openGauss=# select orafce.orafce_concat2('Hello '::nvarchar2, 'World'::nvarchar2);
    orafce_concat2
    ----------------
    Hello World
    (1 row)

    ```

