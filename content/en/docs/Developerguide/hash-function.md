# Hash Function<a name="EN-US_TOPIC_0311139289"></a>

-   bucketabstime\(value, flag\)

    Description: Hashes the value in the abstime format and finds the corresponding hash bucket.

    Parameter:  **value**  indicates the value to be converted, which is of the abstime type.  **flag**  is of the int type, indicating the data distribution mode. The value  **0**  indicates hash distribution.

    Return type: int32

    Example:

    ```
    openGauss=# select bucketabstime('2011-10-01 10:10:10.112',1);
     bucketabstime
    ---------------
             13954
    (1 row)
    ```

-   bucketbool\(value, flag\)

    Description: Hashes the value in the bool format and finds the corresponding hash bucket.

    Parameter:  **value**  indicates the value to be converted, which is of the bool type.  **flag**  is of the int type, indicating the data distribution mode. The value  **0**  indicates hash distribution.

    Return type: int32

    Example:

    ```
    openGauss=# select bucketbool(true,1);
     bucketbool
    ------------
              1
    (1 row)
    openGauss=#  select bucketbool(false,1);
     bucketbool
    ------------
              0
    (1 row)
    ```

-   bucketbpchar\(value, flag\)

    Description: Hashes the value in the bpchar format and finds the corresponding hash bucket.

    Parameter:  **value**  indicates the value to be converted, which is of the bpchar type.  **flag**  is of the int type, indicating the data distribution mode. The value  **0**  indicates hash distribution.

    Return type: int32

    Example:

    ```
    openGauss=# select bucketbpchar('test',1);
     bucketbpchar
    --------------
             9761
    (1 row)
    ```


-   bucketbytea\(value, flag\)

    Description: Hashes the value in the bytea format and finds the corresponding hash bucket.

    Parameter:  **value**  indicates the value to be converted, which is of the bytea type.  **flag**  is of the int type, indicating the data distribution mode. The value  **0**  indicates hash distribution.

    Return type: int32

    Example:

    ```
    openGauss=# select bucketbytea('test',1);
     bucketbytea
    -------------
            9761
    (1 row)
    ```


-   bucketcash\(value, flag\)

    Description: Hashes the value in the money format and finds the corresponding hash bucket.

    Parameter:  **value**  indicates the value to be converted, which is of the money type.  **flag**  is of the int type, indicating the data distribution mode. The value  **0**  indicates hash distribution.

    Return type: int32

    Example:

    ```
    openGauss=# select bucketcash(10::money,1);
     bucketcash
    ------------
           8468
    (1 row)
    ```

-   getbucket\(value, flag\)

    Description: Obtains the hash bucket from the distribution column.

    **value**  indicates the value to be entered, which can be of the following types:

    "char", abstime, bigint, boolean, bytea, character varying, character, date, double precision, int2vector, integer, interval, money, name, numeric, nvarchar2, nvarchar2, oid, oidvector, raw, real, record, reltime, smalldatetime, smallint, text, time with time zone, time without time zone, timestamp with time zone, timestamp without time zone, tinyint, and uuid

    **flag**  is of the int type, indicating the data distribution mode.

    Return type: integer

    Example:

    ```
    openGauss=# select getbucket(10,'H');
     getbucket 
    -----------
         14535
    (1 row)
    
    openGauss=# select getbucket(11,'H');
     getbucket 
    -----------
         13449
    (1 row)
    
    openGauss=# select getbucket(11,'R');
     getbucket 
    -----------
         13449
    (1 row)
    
    openGauss=# select getbucket(12,'R');
     getbucket 
    -----------
          9412
    (1 row)
    
    ```

-   hash\_array\(anyarray\)

    Description: Hashes an array, obtains the result of an array element using the hash function, and returns the combination result.

    Parameter: data of the anyarray type

    Return type: integer

    Example:

    ```
    openGauss=# select hash_array(ARRAY[[1,2,3],[1,2,3]]);
     hash_array 
    ------------
     -382888479
    (1 row)
    ```

-   hash\_group\(key\)

    Description: Calculates the hash value of each column in the Group Clause in the streaming engine.

    Parameter:  **key**  indicates the value of each column in the Group Clause.

    Return type: 32-bit hash value

    Example:

    ```
    Perform the following steps in sequence.
    openGauss=# CREATE TABLE tt(a int, b int,c int,d int);
    NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'a' as the distribution column by default.
    HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
    CREATE TABLE
    openGauss=# select * from tt;
     a | b | c | d 
    ---+---+---+---
    (0 rows)
    
    openGauss=# insert into tt values(1,2,3,4);
    INSERT 0 1
    openGauss=# select * from tt;
     a | b | c | d 
    ---+---+---+---
     1 | 2 | 3 | 4
    (1 row)
    
    openGauss=# insert into tt values(5,6,7,8);
    INSERT 0 1
    openGauss=# select * from tt;
     a | b | c | d 
    ---+---+---+---
     1 | 2 | 3 | 4
     5 | 6 | 7 | 8
    (2 rows)
    
    openGauss=# select hash_group(a,b) from tt where a=1 and b=2;
     hash_group 
    ------------
      990882385
    (1 row)
    ```

-   hash\_numeric\(numeric\)

    Description: Calculates the hash value of numeric data.

    Parameter: data of the numeric type.

    Return type: integer

    Example:

    ```
    openGauss=# select hash_numeric(30);
     hash_numeric 
    --------------
       -282860963
    (1 row)
    ```

-   hash\_range\(anyrange\)

    Description: Calculates the hash value of a range.

    Parameter: data of the anyrange type

    Return type: integer

    Example:

    ```
    openGauss=# select hash_range(numrange(1.1,2.2));
     hash_range 
    ------------
      683508754
    (1 row)
    ```

-   hashbpchar\(character\)

    Description: Calculates the hash value of bpchar.

    Parameter: data of the character type

    Return type: integer

    Example:

    ```
    openGauss=# select hashbpchar('hello');
     hashbpchar  
    -------------
     -1870292951
    (1 row)
    ```

-   hashchar\(char\)

    Description: Converts char and Boolean data into hash values.

    Parameter: data of the char or bool type

    Return type: integer

    Example:

    ```
    openGauss=# select hashbpchar('hello');
     hashbpchar  
    -------------
     -1870292951
    (1 row)
    
    openGauss=# select hashchar('true');
      hashchar  
    ------------
     1686226652
    (1 row)
    ```

-   hashenum\(anyenum\)

    Description: Converts enumerated values to hash values.

    Parameter: data of the anyenum type

    Return type: integer

    Example:

    ```
    openGauss=# CREATE TYPE b1 AS ENUM('good', 'bad', 'ugly');
    CREATE TYPE
    openGauss=# call hashenum('good'::b1);
      hashenum  
    ------------
     1821213359
    (1 row)
    ```

-   hashfloat4\(real\)

    Description: Converts float4 values to hash values.

    Parameter: data of the real type

    Return type: integer

    Example:

    ```
    openGauss=# select hashfloat4(12.1234);
     hashfloat4 
    ------------
     1398514061
    (1 row)
    ```

-   hashfloat8\(double precision\)

    Description: Converts float8 values to hash values.

    Parameter: data of the double precision type

    Return type: integer

    Example:

    ```
    openGauss=# select hashfloat8(123456.1234);
     hashfloat8 
    ------------
     1673665593
    (1 row)
    ```

-   hashinet\(inet\)

    Description: Supports hashing indexes on inet or cidr. Returns the hash value of inet.

    Parameter: data of the inet type

    Return type: integer

    Example:

    ```
    openGauss=# select hashinet('127.0.0.1'::inet);
      hashinet   
    -------------
     -1435793109
    (1 row)
    ```

-   hashint1\(tinyint\)

    Description: Converts INT1 values to hash values.

    Parameter: data of the tinyint type

    Return type: uint32

    Example:

    ```
    openGauss=# select hashint1(20);
      hashint1   
    -------------
     -2014641093
    (1 row)
    ```

-   hashint2\(smallint\)

    Description: Converts INT2 values to hash values.

    Parameter: data of the smallint type

    Return type: uint32

    Example:

    ```
    openGauss=# select hashint2(20000);
      hashint2  
    ------------
     -863179081
    (1 row)
    ```

-   bucketchar

    Description: Calculates the hash value of the input parameter.

    Parameter:  **char**  and  **integer**

    Return type: integer

-   bucketdate

    Description: Calculates the hash value of the input parameter.

    Parameters:  **date**  and  **integer**

    Return type: integer

-   bucketfloat4

    Description: Calculates the hash value of the input parameter.

    Parameter:  **real**  and  **integer**

    Return type: integer

-   bucketfloat8

    Description: Calculates the hash value of the input parameter.

    Parameters:  **double precision**  and  **integer**

    Return type: integer

-   bucketint1

    Description: Calculates the hash value of the input parameter.

    Parameter:  **tinyint**  and  **integer**

    Return type: integer

-   bucketint2

    Description: Calculates the hash value of the input parameter.

    Parameters:  **smallint**  and  **integer**

    Return type: integer

-   bucketint2vector

    Description: Calculates the hash value of the input parameter.

    Parameter:  **int2vector**  and  **integer**

    Return type: integer

-   bucketint4

    Description: Calculates the hash value of the input parameter.

    Parameter: integer, integer

    Return type: integer

-   bucketint8

    Description: Calculates the hash value of the input parameter.

    Parameter: bigint, integer

    Return type: integer

-   bucketinterval

    Description: Calculates the hash value of the input parameter.

    Parameter: interval, integer

    Return type: integer

-   bucketname

    Description: Calculates the hash value of the input parameter.

    Parameter: name, integer

    Return type: integer

-   bucketnumeric

    Description: Calculates the hash value of the input parameter.

    Parameter: numeric, integer

    Return type: integer

-   bucketnvarchar2

    Description: Calculates the hash value of the input parameter.

    Parameter: nvarchar, nvarchar2, integer

    Return type: integer

-   bucketoid

    Description: Calculates the hash value of the input parameter.

    Parameters: oid, integer

    Return type: integer

-   bucketoidvector

    Description: Calculates the hash value of the input parameter.

    Parameter: oidvector, integer

    Return type: integer

-   bucketraw

    Description: Calculates the hash value of the input parameter.

    Parameter: raw, integer

    Return type: integer

-   bucketreltime

    Description: Calculates the hash value of the input parameter.

    Parameter: reltime, integer

    Return type: integer

-   bucketsmalldatetime

    Description: Calculates the hash value of the input parameter.

    Parameter: smalldatetime, integer

    Return type: integer

-   buckettext

    Description: Calculates the hash value of the input parameter.

    Parameter: text, integer

    Return type: integer

-   buckettime

    Description: Calculates the hash value of the input parameter.

    Parameter: time without time zone, integer

    Return type: integer

-   buckettimestamp

    Description: Calculates the hash value of the input parameter.

    Parameter: timestamp without time zone, integer

    Return type: integer

-   buckettimestamptz

    Description: Calculates the hash value of the input parameter.

    Parameter: timestamp with time zone, integer

    Return type: integer

-   buckettimetz

    Description: Calculates the hash value of the input parameter.

    Parameter: time with time zone, integer

    Return type: integer

-   bucketuuid

    Description: Calculates the hash value of the input parameter.

    Parameters: uuid, integer

    Return type: integer

-   bucketvarchar

    Description: Calculates the hash value of the input parameter.

    Parameter: character varying, integer

    Return type: integer


