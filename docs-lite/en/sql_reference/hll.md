# HLL<a name="EN-US_TOPIC_0308951611"></a>

HyperLoglog \(HLL\) is an approximation algorithm for efficiently counting the number of distinct values in a data set. It features faster computing and lower space usage. You only need to store HLL data structures, instead of data sets. When new data is added to a data set, make hash calculation on the data and insert the result to an HLL. Then, you can obtain the final result based on the HLL.

[Table 1](#table55621821164213)  compares HLL with other algorithms.

**Table  1**  Comparison between HLL and other algorithms

<a name="table55621821164213"></a>
<table><thead align="left"><tr id="row145621215428"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1956242111428"><a name="p1956242111428"></a><a name="p1956242111428"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p9562102104217"><a name="p9562102104217"></a><a name="p9562102104217"></a>Sorting Algorithm</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p135625217421"><a name="p135625217421"></a><a name="p135625217421"></a>Hash Algorithm</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p2562192111427"><a name="p2562192111427"></a><a name="p2562192111427"></a>HLL</p>
</th>
</tr>
</thead>
<tbody><tr id="row1562321194214"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p556217217422"><a name="p556217217422"></a><a name="p556217217422"></a>Time complexity</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p55621321114210"><a name="p55621321114210"></a><a name="p55621321114210"></a>O(nlogn)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1556272113423"><a name="p1556272113423"></a><a name="p1556272113423"></a>O(n)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p95621821184211"><a name="p95621821184211"></a><a name="p95621821184211"></a>O(n)</p>
</td>
</tr>
<tr id="row356262120427"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p16562142124210"><a name="p16562142124210"></a><a name="p16562142124210"></a>Space complexity</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1056282119429"><a name="p1056282119429"></a><a name="p1056282119429"></a>O(n)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p956202117427"><a name="p956202117427"></a><a name="p956202117427"></a>O(n)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p0433175154814"><a name="p0433175154814"></a><a name="p0433175154814"></a>log(logn)</p>
</td>
</tr>
<tr id="row195621221144216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p92131078457"><a name="p92131078457"></a><a name="p92131078457"></a>Error rate</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p16562102117426"><a name="p16562102117426"></a><a name="p16562102117426"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p956242112421"><a name="p956242112421"></a><a name="p956242112421"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1956212124216"><a name="p1956212124216"></a><a name="p1956212124216"></a>≈0.8%</p>
</td>
</tr>
<tr id="row156262112426"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p20562182184218"><a name="p20562182184218"></a><a name="p20562182184218"></a>Storage space requirement</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p15624217424"><a name="p15624217424"></a><a name="p15624217424"></a>Size of original data</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p185621621174219"><a name="p185621621174219"></a><a name="p185621621174219"></a>Size of original data</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1656252110421"><a name="p1656252110421"></a><a name="p1656252110421"></a>The maximum size is 16 KB by default.</p>
</td>
</tr>
</tbody>
</table>

HLL has advantages over others in the computing speed and storage space requirement. In terms of time complexity, the sorting algorithm needs O\(nlogn\) time for sorting, and the hash algorithm and HLL need O\(n\) time for full table scanning. In terms of storage space requirements, the sorting algorithm and hash algorithm need to store raw data before collecting statistics, whereas the HLL algorithm needs to store only the HLL data structures rather than the raw data, and thereby occupying a fixed space of about 16 KB.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   In the current default specifications, the maximum number of distinct values that can be calculated is about 1.1e + 15, and the error rate is 0.8%. If the calculation result exceeds the maximum, the error rate of the calculation result will increase, or the calculation will fail and an error will be reported.
>-   When using this feature for the first time, you need to evaluate the distinct values of the service, properly select configuration parameters, and perform verification to ensure that the accuracy meets requirements.
>    -   By default, the distinct value is 1.1e + 15. If the distinct value is NaN, you need to adjust log2m or use another algorithm to calculate the distinct value.
>    -   The hash algorithm has an extremely low probability of collision. However, you are still advised to select 2 or 3 hash seeds for verification when using the hash algorithm for the first time. If there is only a small difference between the distinct values, you can select any one of the seeds as the hash seed.

[Table 2](#table18186113885012)  describes main HLL data structures.

**Table  2**  Main HLL data structures

<a name="table18186113885012"></a>
<table><thead align="left"><tr id="row161861538145014"><th class="cellrowborder" valign="top" width="25.28%" id="mcps1.2.3.1.1"><p id="p17186123895020"><a name="p17186123895020"></a><a name="p17186123895020"></a>Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="74.72%" id="mcps1.2.3.1.2"><p id="p01861938115013"><a name="p01861938115013"></a><a name="p01861938115013"></a>Function</p>
</th>
</tr>
</thead>
<tbody><tr id="row4186133819508"><td class="cellrowborder" valign="top" width="25.28%" headers="mcps1.2.3.1.1 "><p id="p19186153811502"><a name="p19186153811502"></a><a name="p19186153811502"></a>hll</p>
</td>
<td class="cellrowborder" valign="top" width="74.72%" headers="mcps1.2.3.1.2 "><p id="p818613818508"><a name="p818613818508"></a><a name="p818613818508"></a>The HLL header is a 27-byte field. By default, the data length ranges from 0 KB to 16 KB. The distinct value can be obtained.</p>
</td>
</tr>
</tbody>
</table>

When you create an HLL data type, 0 to 4 input parameters are supported. The parameter meanings and specifications are the same as those of the  **hll\_empty**  function. The first parameter is  **log2m**, indicating the logarithm of the number of buckets, and its value ranges from 10 to 16. The second parameter is  **log2explicit**, indicating the threshold in explicit mode, and its value ranges from 0 to 12. The third parameter is  **log2sparse**, indicating the threshold of the Sparse mode, and its value ranges from 0 to 14. The fourth parameter is  **duplicatecheck**, indicating whether to enable duplicatecheck, and its value ranges from 0 to 1. When the input parameter is set to  **–1**, the default value of the HLL parameter is used. You can run the  **\\d**  or  **\\d+**  command to view the parameters of the HLL type.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>When the HLL data type is created, the result varies depending on the input parameter behavior:
>-   When creating an HLL type, do not set the input parameter or set it to  **–1**. Use the default value of the corresponding HLL parameter.
>-   If a valid value is set for the input parameter, the corresponding HLL parameter uses the input value.
>-   If the input value is invalid, an error is reported when the HLL type is created.

```
-- Create an HLL table without specifying input parameters.
openGauss=# create table t1 (id integer, set hll);
openGauss=# \d t1
      Table "public.t1"
 Column |  Type   | Modifiers
--------+---------+-----------
 id     | integer |
 set    | hll     |

-- Create an HLL table, specify the first two input parameters, and use the default values for the last two input parameters.
openGauss=# create table t2 (id integer, set hll(12,4));
openGauss=# \d t2
          Table "public.t2"
 Column |      Type      | Modifiers
--------+----------------+-----------
 id     | integer        |
 set    | hll(12,4,12,0) |

-- Create an HLL table, specify the third input parameter, and use default values for other parameters.
openGauss=# create table t3(id int, set hll(-1,-1,8,-1));
openGauss=# \d t3
          Table "public.t3"
 Column |      Type      | Modifiers
--------+----------------+-----------
 id     | integer        |
 set    | hll(14,10,8,0) |

-- When a user creates an HLL table and specifies an invalid input parameter, an error is reported.
openGauss=# create table t4(id int, set hll(5,-1));
ERROR:  log2m = 5 is out of range, it should be in range 10 to 16, or set -1 as default
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>When inserting an HLL object to an HLL table, ensure that the parameters of the HLL type are the same as those of the inserted object. Otherwise, an error is reported.

```
-- Create an HLL table:
openGauss=# create table t1(id integer, set hll(14));
 
-- Insert an HLL object to a table. The insertion succeeds because parameter types are consistent.
openGauss=# insert into t1 values (1, hll_empty(14,-1));

-- Insert an HLL object to a table. The insertion fails because parameter types are inconsistent.
openGauss=# insert into t1(id, set) values (1, hll_empty(14,5));
ERROR:  log2explicit does not match: source is 5 and dest is 10
```

The following describes HLL application scenarios.

-   Scenario 1: "Hello World"

    The following example shows how to use the HLL data type:

    ```
    -- Create a table with the HLL type:
    openGauss=# create table helloworld (id integer, set hll);
     
    -- Insert an empty HLL to the table:
    openGauss=# insert into helloworld(id, set) values (1, hll_empty());
     
    -- Add a hashed integer to the HLL:
    openGauss=# update helloworld set set = hll_add(set, hll_hash_integer(12345)) where id = 1;
    
    -- Add a hashed string to the HLL:
    openGauss=# update helloworld set set = hll_add(set, hll_hash_text('hello world')) where id = 1;
     
    -- Obtain the number of distinct values of the HLL:
    openGauss=# select hll_cardinality(set) from helloworld where id = 1;
     hll_cardinality 
    -----------------
                   2
    (1 row)
    
    -- Delete the table.
    openGauss=#  drop table helloworld;
    ```

-   Scenario 2: Collect statistics about website visitors.

    The following example shows how an HLL collects statistics on the number of users visiting a website within a period of time:

    ```
    -- Create a raw data table to show that a user has visited the website at a certain time:
    openGauss=# create table facts (
             date            date,
             user_id         integer
    );
     
     -- Create a raw data table to show that a user has visited the website at a certain time:
    openGauss=# insert into facts values ('2019-02-20', generate_series(1,100));
    openGauss=# insert into facts values ('2019-02-21', generate_series(1,200));
    openGauss=# insert into facts values ('2019-02-22', generate_series(1,300));
    openGauss=# insert into facts values ('2019-02-23', generate_series(1,400));
    openGauss=# insert into facts values ('2019-02-24', generate_series(1,500));
    openGauss=# insert into facts values ('2019-02-25', generate_series(1,600));
    openGauss=# insert into facts values ('2019-02-26', generate_series(1,700));
    openGauss=# insert into facts values ('2019-02-27', generate_series(1,800));
     
    -- Create another table and specify an HLL column:
    openGauss=# create table daily_uniques (
        date            date UNIQUE,
        users           hll
    );
     
    -- Group data by date and insert the data into the HLL:
    openGauss=# insert into daily_uniques(date, users)
        select date, hll_add_agg(hll_hash_integer(user_id))
        from facts
        group by 1;
     
    -- Calculate the numbers of users visiting the website every day:
    openGauss=# select date, hll_cardinality(users) from daily_uniques order by date;
        date    | hll_cardinality
    ------------+------------------
     2019-02-20 |              100
     2019-02-21 | 200.217913059312
     2019-02-22 |  301.76494508014
     2019-02-23 | 400.862858326446
     2019-02-24 | 502.626933349694
     2019-02-25 | 601.922606454213
     2019-02-26 | 696.602316769498
     2019-02-27 | 798.111731634412
    (8 rows)
     
    -- Calculate the number of users who had visited the website in the week from February 20, 2019 to February 26, 2019:
    openGauss=# select hll_cardinality(hll_union_agg(users)) from daily_uniques where date >= '2019-02-20'::date and date <= '2019-02-26'::date;
     hll_cardinality  
    ------------------
     702.941844662509
    (1 row)
     
    -- Calculate the number of users who had visited the website yesterday but have not visited the website today:
    openGauss=# SELECT date, (#hll_union_agg(users) OVER two_days) - #users AS lost_uniques FROM daily_uniques WINDOW two_days AS (ORDER BY date ASC ROWS 1 PRECEDING);                                                                                                             
        date    | lost_uniques
    ------------+--------------
     2019-02-20 |            0
     2019-02-21 |            0
     2019-02-22 |            0
     2019-02-23 |            0
     2019-02-24 |            0
     2019-02-25 |            0
     2019-02-26 |            0
     2019-02-27 |            0
    (8 rows)
    
    -- Delete the table.
    openGauss=# drop table facts;
    openGauss=# drop table daily_uniques;
    ```

-   Scenario 3: The data to be inserted does not meet the requirements of the HLL data structure.

    When inserting data into a column of the HLL type, ensure that the data meets the requirements of the HLL data structure. If the data does not meet the requirements after being parsed, an error will be reported. In the following example,  **E\\\\1234**  to be inserted does not meet the requirements of the HLL data structure after being parsed. As a result, an error is reported.

    ```
    openGauss=# create table test(id integer, set hll);
    openGauss=# insert into test values(1, 'E\\1234');
    ERROR:  not a hll type, size=6 is not enough
    openGauss=# drop table test;
    ```


