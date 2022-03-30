# 二进制字符串函数和操作符<a name="ZH-CN_TOPIC_0289900418"></a>

## 字符串操作符<a name="zh-cn_topic_0283137016_zh-cn_topic_0237121968_zh-cn_topic_0059778049_s48b25a0eb8364edc885d82ec73d3fdf5"></a>

SQL定义了一些字符串函数，在这些函数里使用关键字而不是逗号来分隔参数。

-   octet\_length\(string\)

    描述：二进制字符串中的字节数。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT octet_length(E'jo\\000se'::bytea) AS RESULT;
     result
    --------
          5
    (1 row)
    ```

-   overlay\(string placing string from int \[for int\]\)

    描述：替换子串。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT overlay(E'Th\\000omas'::bytea placing E'\\002\\003'::bytea from 2 for 3) AS RESULT;
         result     
    ----------------
     \x5402036d6173
    (1 row)
    ```

-   position\(substring in string\)

    描述：特定子字符串的位置。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT position(E'\\000om'::bytea in E'Th\\000omas'::bytea) AS RESULT;
     result
    --------
          3
    (1 row)
    ```

-   substring\(string \[from int\] \[for int\]\)

    描述：截取子串。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT substring(E'Th\\000omas'::bytea from 2 for 3) AS RESULT; 
      result  
    ----------
     \x68006f
    (1 row)
    ```

-   substr\(string, from int \[, for int\]\)

    描述：截取子串。

    返回值类型：bytea

    示例：

    ```
    openGauss=# select substr(E'Th\\000omas'::bytea,2, 3) as result;
      result
    ----------
     \x68006f
    (1 row)
    ```

-   trim\(\[both\] bytes from string\)

    描述：从string的开头和结尾删除只包含bytes中字节的最长字符串。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT trim(E'\\000'::bytea from E'\\000Tom\\000'::bytea) AS RESULT;
      result  
    ----------
     \x546f6d
    (1 row)
    ```


## 二进制字符串函数<a name="zh-cn_topic_0283137016_zh-cn_topic_0237121968_zh-cn_topic_0059778049_s460ba3376a004239a3cc867b5466c5f5"></a>

openGauss也提供了函数调用所使用的常用语法。

-   btrim\(string bytea,bytes bytea\)

    描述：从string的开头和结尾删除只包含bytes中字节的最长的字符串。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT btrim(E'\\000trim\\000'::bytea, E'\\000'::bytea) AS RESULT;
       result   
    ------------
     \x7472696d
    (1 row)
    ```

-   get\_bit\(string, offset\)

    描述：从字符串中抽取位。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT get_bit(E'Th\\000omas'::bytea, 45) AS RESULT; 
     result
    --------
          1
    (1 row)
    ```

-   get\_byte\(string, offset\)

    描述：从字符串中抽取字节。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT get_byte(E'Th\\000omas'::bytea, 4) AS RESULT; 
     result
    --------
        109
    (1 row)
    ```

-   rawcmp

    描述：raw数据类型比较函数。

    参数：raw, raw

    返回值类型：integer

-   raweq

    描述：raw数据类型比较函数。

    参数：raw, raw

    返回值类型：boolean

-   rawge

    描述：raw数据类型比较函数。

    参数：raw, raw

    返回值类型：boolean

-   rawgt

    描述：raw数据类型比较函数。

    参数：raw, raw

    返回值类型：boolean

-   rawin

    描述：raw数据类型解析函数。

    参数：cstring

    返回值类型：bytea

-   rawle

    描述：raw数据类型解析函数。

    参数：raw, raw

    返回值类型：boolean

-   rawlike

    描述：raw数据类型解析函数。

    参数：raw, raw

    返回值类型：boolean

-   rawlt

    描述：raw数据类型解析函数。

    参数：raw, raw

    返回值类型：boolean

-   rawne

    描述：比较raw类型是否一样。

    参数：raw, raw

    返回值类型：boolean

-   rawnlike

    描述：比较raw类型与模式是否不匹配。

    参数：raw, raw

    返回值类型：boolean

-   rawout

    描述：RAW类型的输出接口。

    参数：bytea

    返回值类型：cstring

-   rawsend

    描述：转换bytea为二进制类型。

    参数：raw

    返回值类型：bytea

-   rawtohex

    描述：raw格式转换为十六进制。

    参数：text

    返回值类型：text

-   set\_bit\(string,offset, newvalue\)

    描述：设置字符串中的位。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT set_bit(E'Th\\000omas'::bytea, 45, 0) AS RESULT; 
          result      
    ------------------
     \x5468006f6d4173
    (1 row)
    ```

-   set\_byte\(string,offset, newvalue\)

    描述：设置字符串中的字节。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT set_byte(E'Th\\000omas'::bytea, 4, 64) AS RESULT; 
          result      
    ------------------
     \x5468006f406173
    (1 row)
    ```


