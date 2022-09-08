# 字符处理函数和操作符<a name="ZH-CN_TOPIC_0289900656"></a>

相比于原始的openGauss，dolphin对于字符处理函数和操作符的修改主要为:
1. 新增```regexp/not regexp/rlike```操作符。
2. 新增```locate/lcase/ucase/bin/chara/elt/field/find_int_set/space/soundex```函数。
3. 修改```length/bit_length/octet_length/convert```函数的表现。

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

    描述：等价于regexp

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

-   length\(string\)

    描述：获取参数string中字符的数目。对于多字符编码（如中文），返回字节数

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

-   octet\_length\(string\)

    描述：等价与length

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT octet_length('中文');
     octet_length
    --------------
                6
    (1 row)
    ```

-   lcase\(string\)

    描述：把字符串转化为小写。等价于lower

    返回值类型：varchar

    示例：

    ```
    openGauss=# SELECT lcase('TOM');
     lcase
    -------
     tom
    (1 row)
    ```

-   ucase\(string\)

    描述：把字符串转化为大写。等价于upper

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