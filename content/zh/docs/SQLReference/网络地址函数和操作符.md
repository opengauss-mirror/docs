# 网络地址函数和操作符

## cidr和inet操作符<a name="zh-cn_topic_0283136843_zh-cn_topic_0237121975_zh-cn_topic_0059778594_s71ca011b21f64c9891528dc0883de0d3"></a>

操作符<<、<<=、\>\>、\>\>=对子网进行测试。它们只考虑两个地址的网络部分（忽略任何主机部分），然后判断其中一个网络是等于另外一个网络，还是另外一个网络的子网。

-   <

    描述：小于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' < inet '192.168.1.6' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <=

    描述：小于或等于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' <= inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   =

    描述：等于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' = inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>=

    描述：大于或等于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' >= inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>

    描述：大于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' > inet '192.168.1.4' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <\>

    描述：不等于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' <> inet '192.168.1.4' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <<

    描述：包含于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.5' << inet '192.168.1/24' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <<=

    描述：包含于或等于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1/24' <<= inet '192.168.1/24' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>\>

    描述：包含

    示例：

    ```
    openGauss=# SELECT inet '192.168.1/24' >> inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>\>=

    描述：包含或等于

    示例：

    ```
    openGauss=# SELECT inet '192.168.1/24' >>= inet '192.168.1/24' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \~

    描述：位非

    示例：

    ```
    openGauss=# SELECT ~ inet '192.168.1.6' AS RESULT; 
        result     
    ---------------
     63.87.254.249
    (1 row)
    ```

-   &

    描述：两个网络地址的每一位都进行“与”操作

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.6' & inet '10.0.0.0' AS RESULT;
     result  
    ---------
     0.0.0.0
    (1 row)
    ```

-   |

    描述：两个网络地址的每一位都进行“或”操作

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.6' | inet '10.0.0.0' AS RESULT;
       result    
    -------------
     202.168.1.6
    (1 row)
    ```

-   \+

    描述：加

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.6' + 25 AS RESULT;
        result    
    --------------
     192.168.1.31
    (1 row)
    ```

-   \-

    描述：减

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.43' - 36 AS RESULT;
       result    
    -------------
     192.168.1.7
    (1 row)
    ```

-   \-

    描述：减

    示例：

    ```
    openGauss=# SELECT inet '192.168.1.43' - inet '192.168.1.19' AS RESULT;
     result 
    --------
         24
    (1 row)
    ```


## cidr和inet函数<a name="zh-cn_topic_0283136843_zh-cn_topic_0237121975_zh-cn_topic_0059778594_s32e5e4347b124a09b39c9ddb92c7618d"></a>

函数abbrev、host、text主要是为了提供可选的显示格式。

-   abbrev\(inet\)

    描述：缩写显示格式文本。

    返回类型：text

    示例：

    ```
    openGauss=# SELECT abbrev(inet '10.1.0.0/16') AS RESULT;
       result    
    -------------
     10.1.0.0/16
    (1 row)
    ```

-   abbrev\(cidr\)

    描述：缩写显示格式文本。

    返回类型：text

    示例：

    ```
    openGauss=# SELECT abbrev(cidr '10.1.0.0/16') AS RESULT;
     result  
    ---------
     10.1/16
    (1 row)
    ```

-   broadcast\(inet\)

    描述：网络广播地址。

    返回类型：inet

    示例：

    ```
    openGauss=# SELECT broadcast('192.168.1.5/24') AS RESULT;
          result      
    ------------------
     192.168.1.255/24
    (1 row)
    ```

-   family\(inet\)

    描述：抽取地址族，4为IPv4，6为IPv6。

    返回类型：int

    示例：

    ```
    openGauss=# SELECT family('127.0.0.1') AS RESULT;
     result 
    --------
          4
    (1 row)
    ```

-   host\(inet\)

    描述：将主机地址类型抽出为文本。

    返回类型：text

    示例：

    ```
    openGauss=# SELECT host('192.168.1.5/24') AS RESULT;
       result    
    -------------
     192.168.1.5
    (1 row)
    ```

-   hostmask\(inet\)

    描述：为网络构造主机掩码。

    返回类型：inet

    示例：

    ```
    openGauss=# SELECT hostmask('192.168.23.20/30') AS RESULT;
     result  
    ---------
     0.0.0.3
    (1 row)
    ```

-   masklen\(inet\)

    描述：抽取子网掩码长度。

    返回类型：int

    示例：

    ```
    openGauss=# SELECT masklen('192.168.1.5/24') AS RESULT;
     result 
    --------
         24
    (1 row)
    ```

-   netmask\(inet\)

    描述：为网络构造子网掩码。

    返回类型：inet

    示例：

    ```
    openGauss=# SELECT netmask('192.168.1.5/24') AS RESULT;
        result     
    ---------------
     255.255.255.0
    (1 row)
    ```

-   network\(inet\)

    描述：抽取地址的网络部分。

    返回类型：cidr

    示例：

    ```
    openGauss=# SELECT network('192.168.1.5/24') AS RESULT;
         result     
    ----------------
     192.168.1.0/24
    (1 row)
    ```

-   set\_masklen\(inet, int\)

    描述：为inet数值设置子网掩码长度。

    返回类型：inet

    示例：

    ```
    openGauss=# SELECT set_masklen('192.168.1.5/24', 16) AS RESULT;
         result     
    ----------------
     192.168.1.5/16
    (1 row)
    ```

-   set\_masklen\(cidr, int\)

    描述：为cidr数值设置子网掩码长度。

    返回类型：cidr

    示例：

    ```
    openGauss=# SELECT set_masklen('192.168.1.0/24'::cidr, 16) AS RESULT;
         result     
    ----------------
     192.168.0.0/16
    (1 row)
    ```

-   text\(inet\)

    描述：把IP地址和掩码长度抽取为文本。

    返回类型：text

    示例：

    ```
    openGauss=# SELECT text(inet '192.168.1.5') AS RESULT;
         result     
    ----------------
     192.168.1.5/32
    (1 row)
    ```


任何cidr值都能以显式或者隐式的方式转换为inet值，因此上述能够操作inet值的函数也同样能够操作cidr值。inet值也可以转换为cidr值，此时inet子网掩码右侧的所有位都将转换为零，以创建一个有效的cidr值。另外，用户还可以使用常规的类型转换语法将一个文本字符串转换为inet或cidr值。例如：inet\(expression\)或colname::cidr。

## macaddr函数<a name="zh-cn_topic_0283136843_zh-cn_topic_0237121975_zh-cn_topic_0059778594_s0395a90cd97040cbbcd45e59a111a122"></a>

函数trunc\(macaddr\)返回一个MAC地址，该地址的最后三个字节设置为零。

-   trunc\(macaddr\)

    描述：把后三个字节置为零。

    返回类型：macaddr

    示例：

    ```
    openGauss=# SELECT trunc(macaddr '12:34:56:78:90:ab') AS RESULT;
          result       
    -------------------
     12:34:56:00:00:00
    (1 row)
    ```


macaddr类型还支持标准关系操作符（\>、<=等）用于词法排序，和按位运算符（\~、&和|）非、与和或。

