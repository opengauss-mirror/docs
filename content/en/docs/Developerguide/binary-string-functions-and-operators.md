# Binary String Functions and Operators<a name="EN-US_TOPIC_0242370432"></a>

## String Operators<a name="en-us_topic_0237121968_en-us_topic_0059778049_s48b25a0eb8364edc885d82ec73d3fdf5"></a>

SQL defines some string functions that use keywords, rather than commas, to separate arguments.

-   octet\_length\(string\)

    Description: Number of bytes in binary string

    Return type: int

    For example:

    ```
    postgres=# SELECT octet_length(E'jo\\000se'::bytea) AS RESULT;
     result
    --------
          5
    (1 row)
    ```

-   overlay\(string placing string from int \[for int\]\)

    Description: Replaces substring.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT overlay(E'Th\\000omas'::bytea placing E'\\002\\003'::bytea from 2 for 3) AS RESULT;
         result     
    ----------------
     \x5402036d6173
    (1 row)
    ```

-   position\(substring in string\)

    Description: Location of specified substring

    Return type: int

    For example:

    ```
    postgres=# SELECT position(E'\\000om'::bytea in E'Th\\000omas'::bytea) AS RESULT;
     result
    --------
          3
    (1 row)
    ```

-   substring\(string from int \[for int\]\)

    Description: Truncates substring.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT substring(E'Th\\000omas'::bytea from 2 for 3) AS RESULT; 
      result  
    ----------
     \x68006f
    (1 row)
    ```

-   substr\(string, from int \[,for int\]\)

    Description: Truncates substring.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT substring(E'Th\\000omas'::bytea from 2 for 3) AS RESULT; 
      result  
    ----------
     \x68006f
    (1 row)
    ```

-   trim\(\[both\] bytes from string\)

    Description: Removes the longest string containing only bytes from  **bytes**  from the start and end of  **string**.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT trim(E'\\000'::bytea from E'\\000Tom\\000'::bytea) AS RESULT;
      result  
    ----------
     \x546f6d
    (1 row)
    ```


## Other Binary String Functions<a name="en-us_topic_0237121968_en-us_topic_0059778049_s460ba3376a004239a3cc867b5466c5f5"></a>

openGauss provides common syntax used for calling functions.

-   btrim\(string bytea,bytes bytea\)

    Description: Removes the longest string containing only bytes from  **bytes**  from the start and end of  **string**.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT btrim(E'\\000trim\\000'::bytea, E'\\000'::bytea) AS RESULT;
       result   
    ------------
     \x7472696d
    (1 row)
    ```

-   get\_bit\(string, offset\)

    Description: Extracts bit from string.

    Return type: int

    For example:

    ```
    postgres=# SELECT get_bit(E'Th\\000omas'::bytea, 45) AS RESULT; 
     result
    --------
          1
    (1 row)
    ```

-   get\_byte\(string, offset\)

    Description: Extracts byte from string.

    Return type: int

    For example:

    ```
    postgres=# SELECT get_byte(E'Th\\000omas'::bytea, 4) AS RESULT; 
     result
    --------
        109
    (1 row)
    ```

-   set\_bit\(string,offset, newvalue\)

    Description: Sets bit in string.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT set_bit(E'Th\\000omas'::bytea, 45, 0) AS RESULT; 
          result      
    ------------------
     \x5468006f6d4173
    (1 row)
    ```

-   set\_byte\(string,offset, newvalue\)

    Description: Sets byte in string.

    Return type: bytea

    For example:

    ```
    postgres=# SELECT set_byte(E'Th\\000omas'::bytea, 4, 64) AS RESULT; 
          result      
    ------------------
     \x5468006f406173
    (1 row)
    ```


