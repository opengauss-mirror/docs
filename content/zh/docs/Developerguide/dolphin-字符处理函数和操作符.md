# 字符处理函数和操作符<a name="ZH-CN_TOPIC_0289900656"></a>

相比于原始的openGauss，dolphin对于字符处理函数和操作符的修改主要为:
1. 新增```regexp/not regexp/rlike```操作符。
2. 新增```locate/lcase/ucase/insert/bin/chara/elt/field/find_int_set/hex/space/soundex```函数。
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

-   chara(any)

    描述：根据ASCII码对多个数字转换为多个字符。

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select chara(77,77.3,'77.3','78.8',78.8);
    chara
    ------------
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

-   convert\(expr using transcoding\_name\)

    描述：通过transcoding_name转换expr

    返回值类型：text

    示例：

    ```
    b_compatibility_database=# select convert('a' using 'utf8');
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

-   make_set(bits, str1, str2, ...)

    描述：返回一个设置值(一个包含子字符串的字符串，以字符分隔)，该值由bits中设置了相应位的字符串组成。str1对应位0，st2对应位1，但这些类推。
    str1，str2，...中的NULL值不添加到结果中。

    返回值类型：text

    ```sql
    select make_set(1|4, 'hello', 'nice', NULL, 'world');
     make_set 
    ----------
     hello
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

  描述：判断字符串能否匹配上LIKE BINARY后的模式字符串,like binary采用大小写敏感模式匹配，若模式匹配则返回真(not like binary返回假)，不匹配则放回假(not like binary返回真)。

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

  
