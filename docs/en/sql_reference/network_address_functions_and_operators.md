# Network Address Functions and Operators<a name="EN-US_TOPIC_0289900807"></a>

## cidr and inet Operators<a name="en-us_topic_0283136843_en-us_topic_0237121975_en-us_topic_0059778594_s71ca011b21f64c9891528dc0883de0d3"></a>

The operators  **<<**,  **<<=**,  **\>\>**, and  **\>\>=**  test for subnet inclusion. They consider only the network parts of the two addresses \(ignoring any host part\) and determine whether one network is identical to or a subnet of the other.

-   <

    Description: Is less than

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' < inet '192.168.1.6' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <=

    Description: Is less than or equals

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' <= inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   =

    Description: Equals

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' = inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>=

    Description: Is greater than or equals

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' >= inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>

    Description: Is greater than

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' > inet '192.168.1.4' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <\>

    Description: Does not equal to

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' <> inet '192.168.1.4' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <<

    Description: Is contained in

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.5' << inet '192.168.1/24' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <<=

    Description: Is contained in or equals

    Example:

    ```
    openGauss=# SELECT inet '192.168.1/24' <<= inet '192.168.1/24' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>\>

    Description: Contains

    Example:

    ```
    openGauss=# SELECT inet '192.168.1/24' >> inet '192.168.1.5' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>\>=

    Description: Contains or equals

    Example:

    ```
    openGauss=# SELECT inet '192.168.1/24' >>= inet '192.168.1/24' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \~

    Description: Bitwise NOT

    Example:

    ```
    openGauss=# SELECT ~ inet '192.168.1.6' AS RESULT; 
        result     
    ---------------
     63.87.254.249
    (1 row)
    ```

-   &

    Description: Performs an AND operation on each bit of the two network addresses.

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.6' & inet '10.0.0.0' AS RESULT;
     result  
    ---------
     0.0.0.0
    (1 row)
    ```

-   |

    Description: Performs an OR operation on each bit of the two network addresses.

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.6' | inet '10.0.0.0' AS RESULT;
       result    
    -------------
     202.168.1.6
    (1 row)
    ```

-   +

    Description: Addition

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.6' + 25 AS RESULT;
        result    
    --------------
     192.168.1.31
    (1 row)
    ```

-   -

    Description: Subtraction

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.43' - 36 AS RESULT;
       result    
    -------------
     192.168.1.7
    (1 row)
    ```

-   -

    Description: Subtraction

    Example:

    ```
    openGauss=# SELECT inet '192.168.1.43' - inet '192.168.1.19' AS RESULT;
     result 
    --------
         24
    (1 row)
    ```


## cidr and inet Functions<a name="en-us_topic_0283136843_en-us_topic_0237121975_en-us_topic_0059778594_s32e5e4347b124a09b39c9ddb92c7618d"></a>

The  **abbrev**,  **host**, and  **text**  functions are primarily intended to offer alternative display formats.

-   abbrev\(inet\)

    Description: Abbreviated display format as text

    Return type: text

    Example:

    ```
    openGauss=# SELECT abbrev(inet '10.1.0.0/16') AS RESULT;
       result    
    -------------
     10.1.0.0/16
    (1 row)
    ```

-   abbrev\(cidr\)

    Description: Abbreviated display format as text

    Return type: text

    Example:

    ```
    openGauss=# SELECT abbrev(cidr '10.1.0.0/16') AS RESULT;
     result  
    ---------
     10.1/16
    (1 row)
    ```

-   broadcast\(inet\)

    Description: Broadcast address for networks

    Return type: inet

    Example:

    ```
    openGauss=# SELECT broadcast('192.168.1.5/24') AS RESULT;
          result      
    ------------------
     192.168.1.255/24
    (1 row)
    ```

-   family\(inet\)

    Description: Extracts family of addresses,  **4**  for IPv4, and  **6**  for IPv6.

    Return type: int

    Example:

    ```
    openGauss=# SELECT family('127.0.0.1') AS RESULT;
     result 
    --------
          4
    (1 row)
    ```

-   host\(inet\)

    Description: Extracts IP addresses as text.

    Return type: text

    Example:

    ```
    openGauss=# SELECT host('192.168.1.5/24') AS RESULT;
       result    
    -------------
     192.168.1.5
    (1 row)
    ```

-   hostmask\(inet\)

    Description: Constructs the host mask for a network.

    Return type: inet

    Example:

    ```
    openGauss=# SELECT hostmask('192.168.23.20/30') AS RESULT;
     result  
    ---------
     0.0.0.3
    (1 row)
    ```

-   masklen\(inet\)

    Description: Extracts subnet mask length.

    Return type: int

    Example:

    ```
    openGauss=# SELECT masklen('192.168.1.5/24') AS RESULT;
     result 
    --------
         24
    (1 row)
    ```

-   netmask\(inet\)

    Description: Constructs the subnet mask for a network.

    Return type: inet

    Example:

    ```
    openGauss=# SELECT netmask('192.168.1.5/24') AS RESULT;
        result     
    ---------------
     255.255.255.0
    (1 row)
    ```

-   network\(inet\)

    Description: Extracts the network part of an address.

    Return type: cidr

    Example:

    ```
    openGauss=# SELECT network('192.168.1.5/24') AS RESULT;
         result     
    ----------------
     192.168.1.0/24
    (1 row)
    ```

-   set\_masklen\(inet, int\)

    Description: Sets subnet mask length for the  **inet**  value.

    Return type: inet

    Example:

    ```
    openGauss=# SELECT set_masklen('192.168.1.5/24', 16) AS RESULT;
         result     
    ----------------
     192.168.1.5/16
    (1 row)
    ```

-   set\_masklen\(cidr, int\)

    Description: Sets subnet mask length for the  **cidr**  value.

    Return type: cidr

    Example:

    ```
    openGauss=# SELECT set_masklen('192.168.1.0/24'::cidr, 16) AS RESULT;
         result     
    ----------------
     192.168.0.0/16
    (1 row)
    ```

-   text\(inet\)

    Description: Extracts IP addresses and subnet mask length as text.

    Return type: text

    Example:

    ```
    openGauss=# SELECT text(inet '192.168.1.5') AS RESULT;
         result     
    ----------------
     192.168.1.5/32
    (1 row)
    ```


Any  **cidr**  value can be cast to  **inet**  implicitly or explicitly; therefore, the functions shown above as operating on  **inet**  also work on  **cidr**  values. An  **inet**  value can be cast to  **cidr**. After the conversion, any bits to the right of the subnet mask are silently zeroed to create a valid  **cidr**  value. In addition, you can cast a text string to  **inet**  or  **cidr**  using normal casting syntax. For example,  **inet\(expression\)**  or  **colname::cidr**.

## macaddr Functions<a name="en-us_topic_0283136843_en-us_topic_0237121975_en-us_topic_0059778594_s0395a90cd97040cbbcd45e59a111a122"></a>

The function  **trunc\(macaddr\)**  returns a MAC address with the last 3 bytes set to zero.

-   trunc\(macaddr\)

    Description: Sets last 3 bytes to zero.

    Return type: macaddr

    Example:

    ```
    openGauss=# SELECT trunc(macaddr '12:34:56:78:90:ab') AS RESULT;
          result       
    -------------------
     12:34:56:00:00:00
    (1 row)
    ```


The  **macaddr**  type also supports the standard relational operators \(such as  **\>**  and  **<=**\) for lexicographical ordering, and the bitwise arithmetic operators \(**\~**,  **&**  and  **|**\) for NOT, AND and OR.

