# HashFunc函数

-   bucketabstime\(value，flag\)

    描述：对abstime格式的数值value计算hash值并找到对应的hashbucket桶。

    参数：value为需要转换的数值，类型为abstime，flag为int类型表示数据分布方式，0表示hash分布。

    返回值类型：int32

    示例：

    ```
    openGauss=# select bucketabstime('2011-10-01 10:10:10.112',1);
     bucketabstime
    ---------------
             13954
    (1 row)
    ```

-   bucketbool\(value，flag\)

    描述：对bool格式的数值value计算hash值并找到对应的hashbucket桶。

    参数：value为需要转换的数值，类型为bool，flag为int类型表示数据分布方式，0表示hash分布。

    返回值类型：int32

    示例：

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

    描述：对bpchar格式的数值value计算hash值并找到对应的hashbucket桶。

    参数：value为需要转换的数值，类型为bpchar，flag为int类型表示数据分布方式，0表示hash分布。

    返回值类型：int32

    示例：

    ```
    openGauss=# select bucketbpchar('test',1);
     bucketbpchar
    --------------
             9761
    (1 row)
    ```


-   bucketbytea\(value，flag\)

    描述：对bytea格式的数值value计算hash值并找到对应的hashbucket桶。

    参数：value为需要转换的数值，类型为bytea，flag为int类型表示数据分布方式，0表示hash分布。

    返回值类型：int32

    示例：

    ```
    openGauss=# select bucketbytea('test',1);
     bucketbytea
    -------------
            9761
    (1 row)
    ```


-   bucketcash\(value，flag\)

    描述：对money格式的数值value计算hash值并找到对应的hashbucket桶。

    参数：value为需要转换的数值，类型为money，flag为int类型表示数据分布方式，0表示hash分布。

    返回值类型：int32

    示例：

    ```
    openGauss=# select bucketcash(10::money,1);
     bucketcash
    ------------
           8468
    (1 row)
    ```

-   getbucket\(value，flag\)

    描述：从分布列获取hashbucket桶。

    value为需要输入的数值，类型：

    “char”、abstime、bigint、boolean、bytea、character varying、character、date、double precision、int2vector、integer、interval、money、name、numeric、nvarchar、nvarchar2、oid、oidvector、raw、real、record、reltime、smalldatetime、smallint、text、time with time zone、time without time zone、timestamp with time zone、timestamp without time zone、tinyint、uuid

    flag表示数据分布方式，类型：integer

    返回值类型：integer

    示例：

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

    描述：数组哈希，将数组的元素通过哈希函数得到结果，并返回合并结果。

    参数：数据类型为anyarray。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hash_array(ARRAY[[1,2,3],[1,2,3]]);
     hash_array
    ------------
     -382888479
    (1 row)
    ```

-   hash\_group\(key\)

    描述：流引擎中，该函数可将Group Clause中的各列计算为一个hash值。

    参数：key为Group Clause中各列的值。

    返回值类型：32位hash值

    示例：

    ```
    按照步骤依次执行。
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

    描述：计算Numeric类型的数据的hash值。

    参数：Numeric类型的数据。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hash_numeric(30);
     hash_numeric
    --------------
       -282860963
    (1 row)
    ```

-   hash\_range\(anyrange\)

    描述：计算range的哈希值。

    参数：anyrange类型的数据。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hash_range(numrange(1.1,2.2));
     hash_range
    ------------
      683508754
    (1 row)
    ```

-   hashbpchar\(character\)

    描述：计算bpchar的哈希值。

    参数：character类型的数据。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hashbpchar('hello');
     hashbpchar
    -------------
     -1870292951
    (1 row)
    ```

-   hashchar\(char\)

    描述：char和布尔数据转换为哈希值。

    参数：char类型的数据或者bool类型的数据。

    返回值类型：integer

    示例：

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

    描述：枚举类型转哈希值。

    参数：anyenum类型的数据。

    返回值类型：integer

    示例：

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

    描述：float4转哈希值。

    参数：real类型的数据。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hashfloat4(12.1234);
     hashfloat4
    ------------
     1398514061
    (1 row)
    ```

-   hashfloat8\(double precision\)

    描述：float8转哈希值。

    参数：double precision类型的数据。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hashfloat8(123456.1234);
     hashfloat8
    ------------
     1673665593
    (1 row)
    ```

-   hashinet\(inet\)

    描述：支持inet / cidr上的哈希索引的功能。返回传入inet的hash值。

    参数：inet类型的数据。

    返回值类型：integer

    示例：

    ```
    openGauss=# select hashinet('127.0.0.1'::inet);
      hashinet
    -------------
     -1435793109
    (1 row)
    ```

-   hashint1\(tinyint\)

    描述：INT1转哈希值。

    参数：tinyint类型的数据。

    返回值类型：uint32

    示例：

    ```
    openGauss=# select hashint1(20);
      hashint1
    -------------
     -2014641093
    (1 row)
    ```

-   hashint2\(smallint\)

    描述：INT2转哈希值。

    参数：smallint类型的数据。

    返回值类型：uint32

    示例：

    ```
    openGauss=# select hashint2(20000);
      hashint2
    ------------
     -863179081
    (1 row)
    ```

-   bucketchar

    描述：计算入参的哈希值。

    参数：char, integer

    返回值类型：integer

-   bucketdate

    描述：计算入参的哈希值。

    参数：date, integer

    返回值类型：integer

-   bucketfloat4

    描述：计算入参的哈希值。

    参数：real, integer

    返回值类型：integer

-   bucketfloat8

    描述：计算入参的哈希值。

    参数：double precision, integer

    返回值类型：integer

-   bucketint1

    描述：计算入参的哈希值。

    参数：tinyint, integer

    返回值类型：integer

-   bucketint2

    描述：计算入参的哈希值。

    参数：smallint, integer

    返回值类型：integer

-   bucketint2vector

    描述：计算入参的哈希值。

    参数：int2vector, integer

    返回值类型：integer

-   bucketint4

    描述：计算入参的哈希值。

    参数：integer, integer

    返回值类型：integer

-   bucketint8

    描述：计算入参的哈希值。

    参数：bigint, integer

    返回值类型：integer

-   bucketinterval

    描述：计算入参的哈希值。

    参数：interval, integer

    返回值类型：integer

-   bucketname

    描述：计算入参的哈希值。

    参数：name, integer

    返回值类型：integer

-   bucketnumeric

    描述：计算入参的哈希值。

    参数：numeric, integer

    返回值类型：integer

-   bucketnvarchar2

    描述：计算入参的哈希值。

    参数：nvarchar/nvarchar2, integer

    返回值类型：integer

-   bucketoid

    描述：计算入参的哈希值。

    参数：oid, integer

    返回值类型：integer

-   bucketoidvector

    描述：计算入参的哈希值。

    参数：oidvector, integer

    返回值类型：integer

-   bucketraw

    描述：计算入参的哈希值。

    参数：raw, integer

    返回值类型：integer

-   bucketreltime

    描述：计算入参的哈希值。

    参数：reltime, integer

    返回值类型：integer

-   bucketsmalldatetime

    描述：计算入参的哈希值。

    参数：smalldatetime, integer

    返回值类型：integer

-   buckettext

    描述：计算入参的哈希值。

    参数：text, integer

    返回值类型：integer

-   buckettime

    描述：计算入参的哈希值。

    参数：time without time zone, integer

    返回值类型：integer

-   buckettimestamp

    描述：计算入参的哈希值。

    参数：timestamp without time zone, integer

    返回值类型：integer

-   buckettimestamptz

    描述：计算入参的哈希值。

    参数：timestamp with time zone, integer

    返回值类型：integer

-   buckettimetz

    描述：计算入参的哈希值。

    参数：time with time zone, integer

    返回值类型：integer

-   bucketuuid

    描述：计算入参的哈希值。

    参数：uuid, integer

    返回值类型：integer

-   bucketvarchar

    描述：计算入参的哈希值。

    参数：character varying, integer

    返回值类型：integer
