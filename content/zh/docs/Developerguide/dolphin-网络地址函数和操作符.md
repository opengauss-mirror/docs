# 网络地址函数和操作符

openGauss提供网络相关的功能函数。

- is\_ipv4\(string\)

    描述：判断是否为ipv4地址。

    返回值类型：int

    示例：

    ```
    openGauss=# select is_ipv4('192.168.0.1');
     is_ipv4
    ---------
           1
    (1 row)
    openGauss=# select is_ipv4('192.168.0.1'::inet);
     is_ipv4
    ---------
           1
    (1 row)
    ```

- is\_ipv6\(string\)

    描述：判断是否为ipv6地址。

    返回值类型：int

    示例：

    ```
    openGauss=# select is_ipv6('2403:A200:A200:0:AFFF::3');
     is_ipv6
    ---------
           1
    (1 row)
    openGauss=# select is_ipv6('2403:A200:A200:0:AFFF::3'::inet);
     is_ipv6
    ---------
           1
    (1 row)
    ```

- inet_aton\(text\)

    描述：此函数将IPv4地址的点分十进制表示形式作为字符串，并以整数形式返回给定IP地址的数值。如果输入地址不是有效的IPv4地址或是无法识别的表达式，则此函数返回NULL。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT INET_ATON('10.0.5.9');
     inet_aton
    -----------
     167773449
     (1 row)
    ```

- inet_ntoa\(int\)

    描述：此函数将以整数呈现的以网络字节序给出的网络主机地址转换成以点分十进制表示的字符串（如127.0.0.1）。如果输入整数无法转换成有效的地址，则此函数返回NULL。

    返回值类型：text

    示例：

    ```
    openGauss=# SELECT INET_NTOA(167773449);
     inet_ntoa
    -----------
     10.0.5.9
    (1 row)
    ```

- inet6_aton\(text\)

    描述：此函数将给定 IPv6 或 IPv4 网络地址作为字符串，返回一个二进制字符串，该字符串表示网络字节顺序（大端）地址的数值。<br/>
    因为数字格式的 IPv6 地址需要比最大整数类型更多的字节，所以此函数返回的值具有两种长度：<br/>
    1.针对 IPv6 地址的返回的字符串长度为16位<br/>
    2.针对 IPv4 地址的返回的字符串长度为4位。<br/>
    如果参数不是有效地址，或者为 NULL，则 INET6_ATON() 返回 NULL。

    返回值类型：bytea

    示例：

    ```
    openGauss=# SELECT HEX(INET6_ATON('fdfe::5a55:caff:fefa:9089'));
                  hex
    ----------------------------------
     fdfe0000000000005a55cafffefa9089
    (1 row)
     openGauss=# SELECT HEX(INET6_ATON('10.0.5.9'));
       hex
    ----------
     0a000509
    (1 row)
    ```

- inet6_ntoa(bytea\)

    描述：MySQL中的此函数将给定的以数字形式表示为二进制字符串的 IPv6 或 IPv4 网络地址，将地址的以分隔符分隔的字符串形式返回。如果参数不是有效地址，或者它为 NULL，则 INET6_NTOA() 返回 NULL。

    返回值类型：text

    示例：

    ```
    openGauss=# SELECT INET6_NTOA(INET6_ATON('fdfe::5a55:caff:fefa:9089'));
     inet6_ntoa
    ---------------------------
    fdfe::5a55:caff:fefa:9089
    (1 row)
    openGauss=# SELECT INET6_NTOA(INET6_ATON('10.0.5.9'));
     inet6_ntoa
    ------------
     10.0.5.9
    (1 row)
    ```

- is_ipv4_compat(bytea\)

    描述：该函数接受一个以数字形式表示的二进制字符串的 IPv6 地址，如同 INET6_ATON() 返回值。如果参数是有效的兼容 IPv4 的 IPv6 地址，则返回 1，否则返回 0。IPv4 兼容地址的格式为 ::ipv4_address。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT IS_IPV4_COMPAT(INET6_ATON('::10.0.5.9'));
     is_ipv4_compat 
    ----------------
                  1
    (1 row)
    openGauss=# SELECT IS_IPV4_COMPAT(INET6_ATON('::ffff:10.0.5.9'));
     is_ipv4_compat 
    ----------------
                  0
    (1 row)

- is_ipv4_mapped(bytea\)

    描述：该函数接受一个以数字形式表示的二进制字符串的 IPv6 地址，如同 INET6_ATON() 返回值。如果参数是一个有效的 IPv4 映射的 IPv6 地址，则返回 1，否则返回 0。IPv4 映射的地址格式为 ::ffff:ipv4_address。

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT IS_IPV4_MAPPED(INET6_ATON('::10.0.5.9'));
     is_ipv4_mapped 
    ----------------
                  0
    (1 row)

    openGauss=# SELECT IS_IPV4_MAPPED(INET6_ATON('::ffff:10.0.5.9'));
     is_ipv4_mapped 
    ----------------
                  1
    (1 row)
