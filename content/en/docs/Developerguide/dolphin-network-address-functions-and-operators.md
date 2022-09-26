# Network Address Functions and Operators<a name="EN-US_TOPIC_0289900807"></a>

openGauss provides network-related functions.

- is\_ipv4\(string\)

    Description: Determines whether an IPv4 address is used.

    Return type: int

    Example:

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

    Description: Determines whether an IPv6 address is used.

    Return type: int

    Example:

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

    Description: This function takes the dotted decimal notation of an IPv4 address as a string and returns the value of the given IP address as an integer. If the input address is not a valid IPv4 address or an unrecognized expression, this function returns NULL.

    Return type: int

    Example:

    ```
    openGauss=# SELECT INET_ATON('10.0.5.9');
     inet_aton
    -----------
     167773449
     (1 row)
    ```

- inet_ntoa\(int\)

    Description: Converts an integer network host address in network byte order into a string in dotted decimal notation (for example, 127.0.0.1). If the input integer cannot be converted to a valid address, this function returns NULL.

    Return type: text

    Example:

    ```
    openGauss=# SELECT INET_NTOA(167773449);
     inet_ntoa
    -----------
     10.0.5.9
    (1 row)
    ```

- inet6_aton\(text\)

    Description: This function takes the given IPv6 or IPv4 network address as a string and returns a binary string representing the numeric value of the network byte order (big-endian) address.
    Because an IPv6 address in numeric format requires more bytes than the maximum integer type, the value returned by this function has two lengths:<br>
    1. The length of the returned character string for an IPv6 address is 16 characters.<br>
    2. The length of the returned character string for an IPv4 address is 4 characters.<br>
    If the parameter is not a valid address or is NULL, INET6_ATON() returns NULL.

    Return type: bytea

    Example:

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

    Description: This function in MySQL returns the given IPv6 or IPv4 network address represented as a binary string in numeric format as a delimiter-separated string. If the parameter is not a valid address or it is NULL, INET6_NTOA() returns NULL.

    Return type: text

    Example:

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
