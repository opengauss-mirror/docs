# 字符处理函数和操作符

相比于原始的openGauss，dolphin对于字符处理函数和操作符的修改主要为：

1. 新增```regexp/not regexp/rlike```操作符。
2. 新增```locate/lcase/ucase/insert/bin/char/chara/elt/field/find_in_set/hex/space/soundex/export_set/ord/substring_index/from_base64/uuid```函数。
3. 修改```length/bit_length/octet_length/convert/format/left/right```函数的表现。
4. 新增```^```操作符的异或功能，新增```like binary/not like binary```操作符。
5. 修改```like/not like```操作符的表现。
6. 新增```!```操作符，可在表达式前使用，其效果与NOT一致。
7. 新增```text_bool/varchar_bool/char_bool```函数。
8. 新增```name_const```函数。
9. 新增```compress```函数。
10. 新增```uncompress```函数。
11. 新增```uncompressed_length```函数。
12. 新增```weight_string```函数。
13. 修改```substring```函数表现，将其映射为```substr```。但如果前缀添加pg_catalog，则仍为原始openGauss表现。

- bit\_length\(string\)

    描述：字符串的位数。对于二进制输入，将向上补齐至8的倍数。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT bit_length('world');
     bit_length
    ------------
             40
    (1 row)

    openGauss=# SELECT bit_length(b'010');
     bit_length
    ------------
              8
    (1 row)
    ```

- insert\(des text, start int, length int, src text\)

    描述：在原字符串的指定位置插入一个新字符串，并从指定位置开始替换掉原字符串一定数量的字符。

    返回值类型：text

    示例：

    ```
    openGauss=# select insert('abcdefg', 2, 4, 'yyy');
    insert
    --------
    ayyyfg
    (1 row)
    ```

- lcase\(string\)

    描述：把字符串转化为小写，等价于lower。

    返回值类型：varchar

    示例：

    ```
    openGauss=# SELECT lcase('TOM');
     lcase
    -------
     tom
    (1 row)
    ```

- length\(string\)

    描述：获取参数string中字符的数目。对于多字符编码（如中文），返回字节数。

    返回值类型：integer

    示例：

    ```
    openGauss=# SELECT length('abcd');
     length 
    --------
          4
    (1 row)

    openGauss=# SELECT length('中文');
     length 
    --------
          6
    (1 row)
    ```

- format\(val number, dec_num int \[,locale string\]\)

  描述：将val以"x,xxx,xxx.xx"的格式返回。val将保留dec_num位小数。保留的小数位数最多为32位，若dec_num大于32，则以保留32位小数返回。若dec_num为0，则返回内容无小数点及小数部分数字。第三个参数可选，可以根据locale指定返回内容的小数点及千位分隔符的格式。如果没有指定第三个参数，或第三个参数值非法，则使用默认值'en_US'。

  注意：此format函数针对B兼容数据库使用，与openGauss原有的format函数语义不同。若想使用此语义，请创建B兼容模式数据库，启用MySQL兼容性SQL引擎插件，并将dolphin.b_compatibility_mode设置为TRUE.

  返回值类型：text

  示例：

    ```
    openGauss=# CREATE DATABASE B_COMPATIBILITY_DATABASE DBCOMPATIBILITY 'B';
    CREATE DATABASE
    openGauss=# \c B_COMPATIBILITY_DATABASE
    b_compatibility_database=# CREATE Extension dolphin;
    CREATE Extension
    b_compatibility_database=# SET dolphin.b_compatibility_mode = TRUE;
    SET
    b_compatibility_database=# select format(1234.4567,2);
      format
    -----------
     1,234.46
    (1 row)

    b_compatibility_database=# select format(1234.5,4);
      format
    -----------
     1,234.5000
    (1 row)

    b_compatibility_database=# select format(1234.5,0);
      format
    -----------
     1,235
    (1 row)

    b_compatibility_database=# select format(1234.5,2,'de_DE');
      format
    -----------
     1.234,50
    (1 row)
    ```

- hex\(number or string or bytea or bit or blob or enum\)

  描述：把数字、字符、二进制字符类型或位串类型转换成十六进制表现形式

  注意：openGauss将反斜杠'\'单独看做一个字符，因此对于字符串'\n'，其长度为2。

  返回值类型：text

  示例：

    ```
    openGauss=# SELECT hex(256);
     hex
    -----
     100
    (1 row)

    openGauss=# select hex('abc');
     hex
    --------
     616263
    (1 row)

    openGauss=# select hex('abc'::bytea);
     hex
    --------
     616263
    (1 row)

    openGauss=# select hex(b'1111');
     hex
    -----
     0F
    (1 row)

    openGauss=# select hex('\n');
     hex
    -------
     5C6E
    (1 row)

    openGauss=# set dolphin.b_compatibility_mode to on; -- 需要打开dolphin.b_compatibility_mode让blob可以适配B兼容模式下的输入
    SET
    openGauss=# create table t1 (c1 tinyblob, c2 blob, c3 mediumblob, c4 longblob);
    CREATE TABLE
    openGauss=# insert into t1 values('aa', 'aa', 'aa', 'aa');
    INSERT 0 1
    openGauss=# insert into t1 values(12312, 12312, 12312, 12312);
    INSERT 0 1
    openGauss=# select hex(c1) as "tinyblob_result", hex(c2) as "blob_result", hex(c3) as "mediumblob_result", hex(c4) as "longblob_result" from t1;
    tinyblob_result | blob_result | mediumblob_result | longblob_result
    -----------------+-------------+-------------------+-----------------
    6161            | 6161        | 6161              | 6161
    3132333132      | 3132333132  | 3132333132        | 3132333132
    (2 rows)
    
    openGauss=# set dolphin.b_compatibility_mode to on;
    SET
    openGauss=# create table enum_to_hex(c enum('a','b','c'));
    CREATE TABLE
    openGauss=# insert into enum_to_hex values(1);
    INSERT 0 1
    openGauss=# insert into enum_to_hex values(2);
    INSERT 0 1
    openGauss=# insert into enum_to_hex values(3);
    INSERT 0 1
    openGauss=# select hex(c) from enum_to_hex;
     hex 
    -----
     61
     62
     63
    (3 rows)
    ```

- uuid\(\)

    描述：以UUID1的生成方式返回一个aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee格式的UUID。

    返回值类型：varchar

    示例：

    ```
    openGauss=# SELECT uuid();
                     uuid                 
    --------------------------------------
     ea2beb80-0d1c-11cb-d2f8-5267477de699
    (1 row)
    ```

- locate\(substring, string \[,position\]\)

    描述：从字符串string的position（缺省时为1）所指的位置开始查找并返回第1次出现子串substring的位置的值。字符串区分大小写。

    - 当position为0时，返回0。
    - 当position为负数时，从字符串倒数第n个字符往前逆向搜索。n为position的绝对值。

    返回值类型：integer，字符串不存在时返回0。

    示例：

    ```
    openGauss=# SELECT locate('ing', 'string');
     locate
    --------
          4
    (1 row)

    openGauss=# SELECT locate('ing', 'string', 0);
     locate
    --------
          0
    (1 row)

    openGauss=# SELECT locate('ing', 'string', 5);
     locate
    --------
          0
    (1 row)
    ```

- octet\_length\(string\)

    描述：等价于length。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT octet_length('中文');
     octet_length
    --------------
                6
    (1 row)
    ```

- source\_string regexp pattern

    描述：正则表达式的模式匹配操作符。

    source\_string为源字符串，pattern为正则表达式匹配模式。

    返回值类型：integer（0或1）

    示例：

    ```
    openGauss=# SELECT 'str' regexp '[ac]' AS RESULT;
     result
    --------
          0
    (1 row)
    ```

- source\_string not regexp pattern

    描述：regexp的结果取反。

    source\_string为源字符串，pattern为正则表达式匹配模式。

    返回值类型：integer（0或1）

    示例：

    ```
    openGauss=# SELECT 'str' not regexp '[ac]' AS RESULT;
     result
    --------
          1
    (1 row)
    ```

- source\_string rlike pattern

    描述：等价于regexp。

    source\_string为源字符串，pattern为正则表达式匹配模式。

    返回值类型：integer（0或1）

    示例：

    ```
    openGauss=# SELECT 'str' rlike '[ac]' AS RESULT;
     result
    --------
          0
    (1 row)
    ```

- ucase\(string\)

    描述：把字符串转化为大写。等价于upper。

    返回值类型：varchar

    示例：

    ```
    openGauss=# SELECT ucase('tom');
     ucase
    -------
     TOM
    (1 row)
    ```

- bin(number or string)

    描述：返回N整型或者数字字符的二进制字符串，汉字返回0。

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# SELECT bin('309');
    bin
    ------------
    100110101
    (1 row)

    b_compatibility_database=# SELECT bin('你好'); 
    bin
    ---
    0 
    (1 row)
    ```

- char(any)

    描述：根据ASCII码对多个数字转换为多个字符，结果受到[GUC参数](../database_reference/statement_behavior.md)bytea_output影响。

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select char(77,77.3,'77.3','78.8',78.8);
    char
    -------
    \x4d4d4d4e4f
    (1 row)
    b_compatibility_database=# set bytea_output = escape;
    SET
    b_compatibility_database=# select char(77,77.3,'77.3','78.8',78.8);
    char
    -------
    MMMNO
    (1 row)
    ```

- chara(any)

    描述：根据ASCII码对多个数字转换为多个字符，结果同char(any)函数。

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select chara(77,77.3,'77.3','78.8',78.8);
    chara
    -------
    \x4d4d4d4e4f
    (1 row)
    b_compatibility_database=# set bytea_output = escape;
    SET
    b_compatibility_database=# select chara(77,77.3,'77.3','78.8',78.8);
    chara
    -------
    MMMNO
    (1 row)
    ```

- char_length(string)或character_leng(string)

    描述：字符串中的字符个数,一个汉字长度为1，并且支持二进制类型。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT char_length('hello');
    char_length
    -------------
            5
    (1 row)
    b_compatibility_database=# SELECT char_length(B'101');
    char_length
    -------------
            1
    (1 row)
    ```

- `convert(expr using transcoding_name)`

    描述：通过 `transcoding_name` 指定的编码方式转换 `expr`。
    注意：默认库中支持如下格式：`convert(string bytea, src_encoding name, dest_encoding name)`，以 `dest_encoding` 指定的编码方式转换 `bytea`；dolphin 下支持通过 `using` 关键字后 `transcoding_name` 指定要转换的编码方式，对 `expr` 进行转换，不支持上述三个参数的表示方式。
    另外，该函数需要在 GUC 参数 `b_format_behavior_compat_options` 包含 `enable_multi_charset` 时才可生效。

    返回值类型：`text`

    示例：

    ```sql
    b_compatibility_database=# select convert('a' using 'utf8');
    convert
    ---------
    a 
    (1 row)

    b_compatibility_database=# select convert('a' using utf8);
    convert
    ---------
    a 
    (1 row)
    ```

- `convert(expr, type_name)`

    将指定内容转换为对应的数据类型。
    当 `dolphin.b_compatibility_mode` 为 `on` 时，如果 `type_name` 为 `char` ，实际会转换成 `varchar` 。为 `off` 时仍保持原始 openGauss 表现，转换成 `char`。

    返回值类型：`type_name` 指定的数据类型

    示例：

    ```sql
    b_compatibility_database=# select convert('a', bytea); 
      bytea   
    ----------
     \x61
    (1 row)
    ```

- elt(number, str1,str2,str3,...)

    描述：返回后面字符串的第N个字符串。

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select elt(3,'wo','ceshi','disange');
    elt   
    ---------
    disange
    (1 row)
    ```

- left\(str text, n int\)

    描述：返回字符串的前n个字符。当n是负数时，当做0处理。

    返回值类型：text

    示例：

    ```
    test_db=# select left('abcde', 2);
    left
    ------
    ab
    (1 row)

    test_db=# select left('abcde', 0);
    left
    ------

    (1 row)

    test_db=# select left('abcde', -2);
    left
    ------

    (1 row)
    ```

- right\(str text, n int\)

  描述：返回字符串中的后n个字符。当n是负值时，当做0处理。

  返回值类型：text

  示例：

  ```
  test_db=# select right('abcde', 2);
  right
  -------
  de
  (1 row)
  
  test_db=# select right('abcde', 0);
  right
  -------
  
  (1 row)
  
  test_db=# select right('abcde', -2);
  right
  -------
  
  (1 row)
  ```

- mid(str text, pos int, len int)

  描述：返回str字符串从pos开始，长度为len个字符的子字符串。如果pos为负数，则从末尾开始计算位置。

  返回值类型：text

  示例：

  ```sql
  db_m=# select mid('abcdef', 2, 2);
   mid
  -----
   bc
  (1 row)
  
  db_m=# select mid('abcdef', -2, 2);
   mid
  -----
   ef
  (1 row)
  ```

- field(str, str1,str2,str3,...)

    描述：获取str在后面strn中的位置。

    返回值类型：int

    示例：

    ```
    b_compatibility_database=# select field('ceshi','wo','ceshi','disange');
    field 
    -------
        2
    (1 row)
    ```
    
- find_in_set(str, strlist)

    描述：获取str在后面strlist中的位置，strlist以```,```分割。

    返回值类型：int

    示例：

    ```
    b_compatibility_database=# select find_in_set('wo','ceshi,ni,wo,ta');
    find_in_set 
    -------------
            3
    (1 row)
    ```

- space(number)

    描述：返回N个空格

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select space('5');
    space 
    -------
        
    (1 row)
    ```

- soundex(str)

    描述：返回描述指定字符串的语音表示的字母数字模式的算法

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select soundex('abcqwcaa');
    soundex 
    ---------
    A120
    (1 row)
    ```

- make_set(number, string1, string2, ...)

    描述：返回一个由number中设置了相应位的字符串组成的设置值（包含子字符串的字符串，以,分隔）。string1对应位0，string2对应位1，依此类推。
    string1，string2，...中的NULL值不添加到结果中。

    返回值类型：text

    ```sql
    select make_set(1|4, 'one', 'two', NULL, 'four');
     make_set 
    ----------
     one
    (1 row)
    ```

- ^

  描述：实现两个字符串的异或功能，截取第一个非数值型符号前的内容作异或。

  返回值类型：INT

  示例：

  ```
  openGauss=# SELECT '123a'^'123';
  ?column?
  ---------
        0
  (1 row)
  ```

- like/not like

  描述：判断字符串能否匹配上LIKE后的模式字符串。若字符串与提供的模式匹配，则like表达式返回真(ilike返回假)。

  注意事项：

  - 在dolphin插件中增加了该操作符对true/false的bool类型兼容；
  - 对于定长字符串char，若插入表的字符串长度小于指定长度则会在字符串末尾自动填充空格，在dolphin插件中，该操作符处理定长字符串类型时忽略末尾多余空格。

  返回值类型：布尔型

  示例：

  ```
  openGauss=# SELECT 'abc' like 'a' as result;
   result
  ------------
            f
  (1 row)
  
  openGauss=# SELECT 'abc' like 'a%' as result;
   result
  ------------
            t
  (1 row)
  
  openGauss=# SELECT true like true as result;
   result
  ------------
            t
  (1 row)
  ```

- like binary/not like binary

  描述：判断字符串能否匹配上LIKE BINARY后的模式字符串,like binary采用大小写敏感模式匹配，若模式匹配则返回真(not like binary返回假)，不匹配则返回假(not like binary返回真)。

  返回值类型：布尔型

  示例：

  ```
  openGauss=# SELECT 'a' like binary 'A' as result;
   result
  ------------
           f
  (1 row)
  
  openGauss=# SELECT 'a' like binary 'a' as result;
   result
  ------------
           t
  (1 row)
  
  openGauss=# SELECT 'abc' like binary 'a' as result;
   result
  ------------
            f
  (1 row)
  
  openGauss=# SELECT 'abc' like binary 'a%' as result;
   result
  ------------
            t
  (1 row)
  ```

- substring_index(str, delim, count)
  
  描述：substring_index(str, delim, count)返回str的开始位置至匹配到第count次delim的位置之间的子字符串，count表示匹配的次数。若count为正数，则从str的左边开始匹配，并返回匹配位置左边的子字符串；若count为负数，则从str的右边开始匹配，并返回匹配位置右边的子字符串。count取值范围为INT64_MIN～INT64_MAX。
  
  返回值类型：text
  
  示例：
  
  ```
    openGauss=# SELECT substring_index('abcdabcdabcd', 'bcd', 2);
     substring_index 
    -----------------
     abcda
    (1 row)
    
  ```

- export_set(bits, on, off, separator, number of bits)

    描述：返回一个字符串，该字符串将显示位数。该函数需要5个自变量才能起作用。该函数将第一个参数(即整数)转换为二进制数字，如果二进制数字为1，则返回“on”，如果二进制数字为0，则返回“off”。

    返回值类型：text
    
    注意：必须输入前三个参数。第一个参数（bits）需要输入数字，第二个参数（on）和第三个参数（off）需要输入字符串。对于缺省的后两个参数，默认采用`，`和`64`进行执行；最后一位如果为负数或者大于64，都默认按64处理。

    示例：

    ```sql
    openGauss=# SELECT EXPORT_SET(5,'Y','N',',',5);
     export_set 
    -------------
     Y,N,Y,N,N
    (1 row)
    ```

- FROM_BASE64

  描述:根据BASE64编码规则，将一个BASE64编码的字符串解码，返回字符串的解码结果。

  返回值类型：text

    编码规则：

    - 将输入的每三个字节（24位）变成四个字节（32位）：6位为一组，高位补两个0，组成一个字节，这样正好能将三个字节补成四个字节，其中每个字节只会对应0(00000000)到63(00111111)。

    - 每76个字符加一个换行符。

    - 编码0(00000000)到61(00111111)对应A-Z，a-z，0-9共62个字符，62(00111110)的编码是'+'，63(00111111)的编码是'/'。

    - 若输入的字符串字节数不为三的倍数，那么剩余的字节根据编码规则转换，若有一个字节不满8位，则在低位补0补满8位，同时用'='将转换结果补满四个字节。若最后一组只有两个字节，每6位一组，第三组只有4位，低位要补两个0，然后这三组再分别高位补两个0，转成三个字符，末尾补一个'='；若最后一组只有一个字节，每6位一组，第二组只有2位，低位要补四个0，然后这两组再分别高位补两个0，转成两个字符，末尾补两个'='。

    解码规则：

    - 将输入的字符串用二进制表示，去掉每个字节高位的两个0。
    - 根据编码规则，正确的编码字节数必为4的倍数。若末尾有'='，则根据'='数量去掉最后一个除'='以外的字节低位的0。若末尾有一个'='，即最后四个字节为'\*\*\*='，则将前三个字节转二进制后再去掉最后两个0，若末尾有两个'='，即最后四个字节为'\*\*=='，则将前两个字节转二进制后再去掉最后四个0。
    - 将去掉高位0后的各个字节按顺序拼接，每8位转成一个字符。

    例子1：YWJj

    1. 字符串用二进制表示为：00011000(Y)00010110(W)00001001(J)00100011(j)。
    2. 去掉每个字节高位的两个0后变成：011000 010110 001001 100011。
    3. 将去掉高位0后的各个字节按顺序拼接成：01100001(a)01100010(b)01100011(c)。
    4. 故解码结果为abc。

    例子2：YWI=

    5. 字符串用二进制表示为：00011000(Y)00010110(W)00001000(I)。
    6. 去掉每个字节高位的两个0后变成：011000 010110 001000。
    7. 由于末尾有一个'='，则第三个字节末尾的0也要去掉再拼接：01100001 01100010。
    8. 故解码结果为ab。

    示例：
  
    ```
        openGauss=# SELECT FROM_BASE64('YWJj');
         from_base64 
        -------------
         abc
        (1 row)
        
    ```

- ORD(str)。

  描述: 
    返回str的最左边的字符的数值，并使用下面公式计算该字符组成字节的对应数值：

    ```
      (1st byte code)
    + (2nd byte code  256)
    + (3rd byte code  256^2) ...
    ```

  返回值类型：INT

  示例:

  ```sql
  -- test 1 byte
  openGauss=# select ord('1111');
  ord 
  -----
    49
  (1 row)

  openGauss=# select ord('sss111');
  ord 
  -----
  115
  (1 row)

  -- test 2 byte
  openGauss=# select ord('Ŷ1111');
    ord  
  -------
  50614
  (1 row)

  openGauss=# select ord('߷1111');
    ord  
  -------
  57271
  (1 row)

  -- test 3 byte
  openGauss=# select ord('অ1111');
    ord    
  ----------
  14722693
  (1 row)

  openGauss=# select ord('ꬤ1111');
    ord    
  ----------
  15379620
  (1 row)

  -- test 4 byte
  openGauss=# select ord('𒁖1111');
      ord     
  ------------
  4036133270
  (1 row)

  openGauss=# select ord('𓃔1111');
      ord     
  ------------
  4036199316
  (1 row)
  ```

  - TO_BASE64(str)

  描述：根据BASE64编码规则，将一个字符串编码成BASE64编码格式，返回字符串的编码结果。编码规则与解码规则和FROM_BASE64相同。

  返回值类型：text

  注意事项

  - 如果输入的是NULL，那么返回的结果为NULL。
  - 编码解码规则与函数FROM_BASE64相同。

  例子1：abc

  1. 将字符串用二进制表示：01100001(a)01100010(b)01100011(c)
  2. 将二进制串拆分，每6位一组：011000 010110 001001 100011
  3. 在每一组的高位都补上两个0：00011000 00010110 00001001 00100011
  4. 查找base64编码转换表：00011000，00010110，00001001，00100011对应的字符为：Y,W,J,j
  5. 故编码结果为YWJj

  例子2：ab

  1. 将字符串用二进制表示：01100001(a)01100010(b)
  2. 将二进制串拆分，每6位一组，由于最后一组只有4位，在低位补0补够6位：011000 010110 0010(00)
  3. 在每一组的高位都补上两个0：00011000 00010110 00001000
  4. 查找base64编码转换表：00011000，00010110，00001000对应的字符为：Y,W,I
  5. 由于输入的字符串字节数不为三的倍数，导致转换后的字符数不为4的倍数，所以最后需要用=号补满4个字节，最终编码结果为：YWI=

    示例：
    
    ```sql
      SELECT TO_BASE64('to_base64');
        to_base64   
      --------------
      dG9fYmFzZTY0
      (1 row)
      SELECT TO_BASE64('123456');
       to_base64 
      -----------
       MTIzNDU2
      (1 row)
    
      SELECT TO_BASE64('12345');
       to_base64 
      -----------
       MTIzNDU=
      (1 row)
    
      SELECT TO_BASE64('1234');
       to_base64 
      -----------
       MTIzNA==
      (1 row)
    ```

- UNHEX(str)
  
  描述：将一个十六进制编码的字符串解码，一个十六进制字符变成4位二进制，两个十六进制字符（8位）解码为一个字符，返回字符串的解码结果。若十六进制字符串的字符数不为偶数，则在高位补0。若输入的是二进制格式的字符串，则返回NULL。

  返回值类型：longblob

  注意事项

  - mysql中返回的是二进制类型，依据长度可以是varbinary、mediumblob或longblob，openGauss没有这种机制，所以以最长的longblob为准。
  - 如果输入的是NULL或者包含非十六进制字符，那么返回的结果为NULL。
  - 若输入的是数字，则将数字转成字符串后进行解码，如需将十六进制数转为十进制数，则需要使用其它的函数
  - 编码解码规则与函数HEX相同。
  - 该函数的打印受制于longblob，默认情况下打印的是十六进制的字符串，需要把bytea_output设置为escape才会打印原字符。

  例子1：4142(默认先把该byateoutput设置为escape)

  1. 将每个十六进制字符用4位二进制表示，若十六进制字符数不为偶数，则在高位补0：0100(4)0001(1)0100(4)0010(2)
  2. 每8位组成一个字符：01000001 01000010
  3. 故解码结果为AB

    示例：
  
    ```sql
      SET bytea_output to 'escape';
      SELECT UNHEX('6f70656e4761757373');
        unhex   
      -----------
      openGauss
      (1 row)
  
      SELECT UNHEX(HEX('string'));
       unhex  
      --------
       string
      (1 row)
  
      SELECT HEX(UNHEX('1267'));
       hex  
      ------
       1267
      (1 row)
    ```

- !
  
  描述：在表达式前使用，实现逻辑运算“非”。其效果与表达式前使用NOT一致。

  返回值类型：boolean

  注意事项

  - 该运算符仅在```b_compatibility_mode```为```TRUE```时可用。
  - openGauss原有阶乘运算符"!!"。为避免与本运算符混淆，当```b_compatibility_mode```为```TRUE```时，阶乘运算符"!!"不可使用。请使用函数```factorial```替代。
  - 当```b_compatibility_mode```为```TRUE```时，不允许多个"!"运算符连用。
  - 仅有可转换为boolean类型的表达式可使用本操作符。详情查看系统表```pg_cast```。

  示例：

  ```
  openGauss=# set b_compatibility_mode = 1;
  SET
  openGauss=# select !10;
   ?column?
  ----------
   f
  (1 row)
  
  openGauss=# select !true;
   ?column?
  ----------
   f
  (1 row)
  
  openGauss=# select !!10;
  ERROR:  Operator '!!' is deprecated when b_compatibility_mode is on. Please use function factorial().
  
  openGauss=# select 10!;
  ERROR:  syntax error at or near ";"
  LINE 1: select 10!;
                    ^
  ```
  
- text_bool(text)

  描述：先截取输入文本首部的数值部分（包括整数、小数、正负数），丢弃剩下的非数值部分。若截取得到的数值部分等于0，则函数返回逻辑假；否则函数返回逻辑真。若输入文本首部不是数值，则直接返回逻辑假。

  返回类型：boolean

  示例：

  ```
  openGauss=# select text_bool('-0.01abc');
   text_bool 
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# select text_bool('0abc');
   text_bool 
  -----------
   f
  (1 row)
  ```

  ```
  openGauss=# select text_bool('abc');
   text_bool 
  -----------
   f
  (1 row)
  ```

- varchar_bool(varchar)

  描述：先截取输入的变长字符串首部的数值部分（包括整数、小数、正负数），丢弃剩下的非数值部分。若截取得到的数值部分等于0，则函数返回逻辑假；否则函数返回逻辑真。若输入的变长字符串首部不是数值，则直接返回逻辑假。

  返回类型：boolean

  示例：

  ```
  openGauss=# select varchar_bool('-0.0100abc');
   varchar_bool 
  --------------
   t
  (1 row)
  ```

  ```
  openGauss=# select varchar_bool('0abc');
   varchar_bool 
  --------------
   f
  (1 row)
  ```

  ```
  openGauss=# select varchar_bool('abc');
   varchar_bool 
  --------------
   f
  (1 row)
  ```

- char_bool(char)

  描述：先截取输入字符串首部的数值部分（包括整数、小数、正负数），丢弃剩下的非数值部分。若截取得到的数值部分等于0，则函数返回逻辑假；否则函数返回逻辑真。若输入字符串首部不是数值，则直接返回逻辑假。

  返回类型：boolean

  示例：

  ```
  openGauss=# select char_bool('-0.0100abc');
   char_bool 
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# select char_bool('0abc');
   char_bool 
  -----------
   f
  (1 row)
  ```

  ```
  openGauss=# select char_bool('abc');
   char_bool 
  -----------
   f
  (1 row)
  ```

- name\_const\(const name, const value\)

    描述：返回指定的列名和列值组成的结果集。输入参数应为可以转化为const类型的参数，不接受函数表达式或变量。

    返回值类型：text

    示例：

    ```
    openGauss=# SELECT name_const('abc', 123);
     abc 
    -----
     123
    (1 row)
    ```

- compress(text)

  描述：COMPRESS函数的作用是压缩指定的字符串，用于节省存储空间。

  返回类型：bytea

  示例：

  ```
  SELECT HEX(COMPRESS('2022-05-12 10:30:00'));
                                hex                               
  ----------------------------------------------------------------
   13000000789c33323032d23530d53534523034b03236b032300000240b03a1
  (1 row)
  ```

- uncompress(bytea)

  描述：UNCOMPRESS函数的作用是解压缩压缩过的二进制数据，并返回原始数据。

  返回类型：text

  示例：

  ```
  SELECT UNCOMPRESS(COMPRESS('2022-05-12 10:30:00'));
       uncompress      
  ---------------------
   2022-05-12 10:30:00
  (1 row)
  ```

- uncompressed_length(bytea)

  描述：UNCOMPRESSED_LENGTH函数的作用是返回经过压缩的数据在解压缩后的长度。

  返回类型：integer

  示例：

  ```
  SELECT UNCOMPRESSED_LENGTH(COMPRESS('2022-05-12 10:30:00'));
   uncompressed_length 
  ---------------------
                    19
  (1 row)
  ```

- weight_string(str [as {char|binary}(n)] [level levels])  levels: n [asc|desc|reverse] [, n [asc|desc|reverse]] ...

  描述：WEIGHT_STRING函数是用于测试和调试字符集排序规则的函数。其用于获取字符串的权重，它返回一个二进制字符串，用于字符串的比较和排序。str是输入字符串，AS子句可以将输入字符串转化为```CHAR(N)```或者```BINARY(N)```类型。输入字符串如果超过N则会被截断，如果小于N则会被填充空格（```AS CHAR```）或0(```AS BINARY```)。LEVEL子句来指定计算字符串的修饰方式，仅```AS CHAR```支持。LEVEL子句后可以增加三种修饰符: ```ASC```、 ```DESC```（bit翻转）、 ```REVERSE```（字节顺序反转），其中仅```LEVEL 1 DESC```和```LEVEL 1 REVERSE```有效，LEVEL 2到LEVEL 6对计算字符串没有处理。

  返回类型：bytea

  示例：

  ```
  select hex(weight_string('abc' as binary(2)));
   hex  
  ------
   6162
  (1 row)
  
  select hex(weight_string('abc' as char(2) LEVEL 1 ));
     hex    
  ----------
   00410042
  (1 row)
  
  select hex(weight_string('abc' as char(2) LEVEL 1 DESC));
     hex    
  ----------
   FFBEFFBD
  (1 row)
  
  select hex(weight_string('abc' as char(2) LEVEL 1 REVERSE));
     hex    
  ----------
   42004100
  (1 row)
  ```
