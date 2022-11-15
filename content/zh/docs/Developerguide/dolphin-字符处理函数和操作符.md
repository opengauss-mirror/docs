# 字符处理函数和操作符<a name="ZH-CN_TOPIC_0289900656"></a>

相比于原始的openGauss，dolphin对于字符处理函数和操作符的修改主要为：

1. 新增```regexp/not regexp/rlike```操作符。
2. 新增```locate/lcase/ucase/insert/bin/char/elt/field/find_int_set/hex/space/soundex/export_set/ord/substring_index/from_base64```函数。
3. 修改```length/bit_length/octet_length/convert/format```函数的表现。
4. 新增```^```操作符的异或功能，新增```like binary/not like binary```操作符。
5. 修改```like/not like ```操作符的表现。

-   bit\_length\(string\)

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

-   insert\(des text, start int, length int, src text\)

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

-   lcase\(string\)

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

-   length\(string\)

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

  注意：此format函数针对B兼容数据库使用，与openGauss原有的format函数语义不同。若想使用此语义，请创建B兼容模式数据库，启用B兼容性SQL引擎插件，并将B_COMPATIBILITY_MODE设置为TRUE.

  返回值类型：text

  示例：

    ```
    openGauss=# CREATE DATABASE B_COMPATIBILITY_DATABASE DBCOMPATIBILITY 'B';
    CREATE DATABASE
    openGauss=# \c B_COMPATIBILITY_DATABASE
    b_compatibility_database=# CREATE EXTENSION dolphin;
    CREATE EXTENSION
    b_compatibility_database=# SET B_COMPATIBILITY_MODE = TRUE;
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

- hex\(number or string or bytea or bit\)

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
     0f
    (1 row)

    openGauss=# select hex('\n');
     hex
    -------
     5c6e
    (1 row)
    ```

-   locate\(substring, string \[,position\]\)

    描述：从字符串string的position（缺省时为1）所指的位置开始查找并返回第1次出现子串substring的位置的值。字符串区分大小写。

    -   当position为0时，返回0。
    -   当position为负数时，从字符串倒数第n个字符往前逆向搜索。n为position的绝对值。

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

-   octet\_length\(string\)

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

-   source\_string regexp pattern

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

-   source\_string not regexp pattern

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

-   source\_string rlike pattern

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

-   ucase\(string\)

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

-   bin(number or string)

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

-   char(any)

    描述：根据ASCII码对多个数字转换为多个字符。

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select char(77,77.3,'77.3','78.8',78.8);
    char
    -------
    MMMNO
    (1 row)
    ```

-   char_length(string)或character_leng(string)

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

-   convert(expr using transcoding_name)

    描述：通过transcoding_name指定的编码方式转换expr;
    注意：默认库中支持如下格式： convert(string bytea, src_encoding name, dest_encoding name);以dest_encoding指定的编码方式转换bytea，dolphin下支持通过using关键字后transcoding_name指定要转换的编码方式，对expr进行转换，不支持上述三个参数的表示方式。

    返回值类型：text

    示例：

    ```
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

-   elt(number, str1,str2,str3,...)

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
    
-   field(str, str1,str2,str3,...)

    描述：获取str在后面strn中的位置，不区分大小写。

    返回值类型：int

    示例：

    ```
    b_compatibility_database=# select field('ceshi','wo','ceshi','disange');
    field 
    -------
        2
    (1 row)
    ```
    
-   find_in_set(str, strlist)

    描述：获取str在后面strlist中的位置，不区分大小写,strlist以，分割。

    返回值类型：int

    示例：

    ```
    b_compatibility_database=# select find_in_set('ceshi','wo','ceshi,ni,wo,ta');
    find_in_set 
    -------------
            3
    (1 row)
    ```

-   space(number)

    描述：返回N个空格

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select space('5');
    space 
    -------
        
    (1 row)
    ```

-   soundex(str)

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

-   make_set(number, string1, string2, ...)

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

  描述：判断字符串能否匹配上LIKE后的模式字符串。opengauss的原like为大小写敏感匹配，现将其改为当```b_compatibility_mode```为```TRUE```时大小写不敏感匹配，当```b_compatibility_mode```为```FALSE```时大小写敏感匹配。若字符串与提供的模式匹配，则like表达式返回真(ilike返回假)。

  返回值类型：布尔型

  示例：

  ```
  openGauss=# SELECT 'a' like 'A' as result;
   result
  ------------
           t
  (1 row)
  
  openGauss=# SELECT 'abc' like 'a' as result;
   result
  ------------
            f
  (1 row)
  
  openGauss=# SELECT 'abc' like 'A%' as result;
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
    openGauss=# SELECT instr('abcdabcdabcd', 'bcd', 2);
     substring_index 
    -----------------
     abcda
    (1 row)
    
  ```


-   export_set(bits, on, off, separator, number of bits)

    描述：返回一个字符串，该字符串将显示位数。该函数需要5个自变量才能起作用。该函数将第一个参数(即整数)转换为二进制数字，如果二进制数字为1，则返回“on”，如果二进制数字为0，则返回“off”。

    返回值类型：text
    
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

    1. 字符串用二进制表示为：00011000(Y)00010110(W)00001000(I)。
    2. 去掉每个字节高位的两个0后变成：011000 010110 001000。
    3. 由于末尾有一个'='，则第三个字节末尾的0也要去掉再拼接：01100001 01100010。
    4. 故解码结果为ab。

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