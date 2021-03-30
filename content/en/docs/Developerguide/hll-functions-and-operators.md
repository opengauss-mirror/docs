# HLL Functions and Operators<a name="EN-US_TOPIC_0309006541"></a>

## Hash Functions<a name="section432010211209"></a>

-   hll\_hash\_boolean\(bool\)

    Description: Hashes data of the bool type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_boolean(FALSE);
      hll_hash_boolean   
    ---------------------
     5048724184180415669
    (1 row)
    ```


-   hll\_hash\_boolean\(bool, int32\)

    Description: Configures a hash seed \(that is, change the hash policy\) and hashes data of the bool type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_boolean(FALSE, 10);
      hll_hash_boolean  
    --------------------
     391264977436098630
    (1 row)
    ```

-   hll\_hash\_smallint\(smallint\)

    Description: Hashes data of the smallint type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_smallint(100::smallint);
      hll_hash_smallint  
    ---------------------
     4631120266694327276
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If parameters with the same numeric value are hashed using different data types, the data will differ, because hash functions select different calculation policies for each type.

-   hll\_hash\_smallint\(smallint, int32\)

    Description: Configures a hash seed \(that is, change the hash policy\) and hashes data of the smallint type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_smallint(100::smallint, 10);
      hll_hash_smallint  
    ---------------------
     8349353095166695771
    (1 row)
    ```

-   hll\_hash\_integer\(integer\)

    Description: Hashes data of the integer type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_integer(0);
       hll_hash_integer   
    ----------------------
     -3485513579396041028
    (1 row)
    ```

-   hll\_hash\_integer\(integer, int32\)

    Description: Hashes data of the integer type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_integer(0, 10);
      hll_hash_integer  
    --------------------
     183371090322255134
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint\)

    Description: Hashes data of the bigint type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_bigint(100::bigint);
       hll_hash_bigint   
    ---------------------
     8349353095166695771
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint, int32\)

    Description: Hashes data of the bigint type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_bigint(100::bigint, 10);
       hll_hash_bigint   
    ---------------------
     4631120266694327276
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea\)

    Description: Hashes data of the bytea type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_bytea(E'\\x');
     hll_hash_bytea 
    ----------------
     0
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea, int32\)

    Description: Hashes data of the bytea type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_bytea(E'\\x', 10);
       hll_hash_bytea    
    ---------------------
     6574525721897061910
    (1 row)
    ```

-   hll\_hash\_text\(text\)

    Description: Hashes data of the text type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_text('AB');
        hll_hash_text    
    ---------------------
     5365230931951287672
    (1 row)
    ```

-   hll\_hash\_text\(text, int32\)

    Description: Hashes data of the text type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    For example:

    ```
    postgres=# SELECT hll_hash_text('AB', 10);
    hll_hash_text
    ---------------------
    7680762839921155903
    (1 row)
    ```

-   hll\_hash\_any\(anytype\)

    Description: Hashes data of any type.

    Return type: hll\_hashval

    For example:

    ```
    postgres=# select hll_hash_any(1);
         hll_hash_any     
    ----------------------
     -8604791237420463362
    (1 row)
    
    postgres=# select hll_hash_any('08:00:2b:01:02:03'::macaddr);
         hll_hash_any     
    ----------------------
     -4883882473551067169
    (1 row)
    ```

-   hll\_hash\_any\(anytype, int32\)

    Description: Hashes data of any type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    For example:

    ```
    postgres=# select hll_hash_any(1, 10);
         hll_hash_any     
    ----------------------
     -1478847531811254870
    (1 row)
    ```

-   hll\_hashval\_eq\(hll\_hashval, hll\_hashval\)

    Description: Compares two pieces of data of the hll\_hashval type to check whether they are the same.

    Return type: bool

    For example:

    ```
    postgres=# select hll_hashval_eq(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_eq 
    ----------------
     t
    (1 row)
    ```

-   hll\_hashval\_ne\(hll\_hashval, hll\_hashval\)

    Description: Compares two pieces of data of the hll\_hashval type to check whether they are different.

    Return type: bool

    For example:

    ```
    postgres=# select hll_hashval_ne(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_ne 
    ----------------
     f
    (1 row)
    ```


## Precision Functions<a name="section1615145915110"></a>

HLL supports  **explicit**,  **sparse**, and  **full**  modes.  **explicit**  and  **sparse**  excel when the data scale is small, and barely produce errors in calculation results. When the number of distinct values increases,  **full**  becomes more suitable, but produces some errors. The following functions are used to view precision parameters in HLLs.

-   hll\_schema\_version\(hll\)

    Description: Checks the schema version in the current HLL.

    For example:

    ```
    postgres=# select hll_schema_version(hll_empty());
     hll_schema_version 
    --------------------
               1
    (1 row)
    ```

-   hll\_type\(hll\)

    Description: Checks the type of the current HLL.

    For example:

    ```
    postgres=# select hll_type(hll_empty());
     hll_type 
    ----------
            1
    (1 row)
    ```

-   hll\_log2m\(hll\)

    Description: Check the value of log2m of the current HLL. This value affects the error rate in calculating the number of distinct values by the HLL. The formula for calculating the error rate is ±1.04/√\(2 ^ log2m\).

    For example:

    ```
    postgres=# select hll_log2m(hll_empty());
     hll_log2m 
    -----------
            11
    (1 row)
    ```

-   hll\_regwidth\(hll\)

    Description: Checks the number of bits of buckets in a hll data structure.

    For example:

    ```
    postgres=# select hll_regwidth(hll_empty());
     hll_regwidth 
    --------------
            5
    (1 row)
    ```

-   hll\_expthresh\(hll\)

    Description: Obtains the size of  **expthresh**  in the current HLL. An HLL usually switches from the  **explicit**  mode to the  **sparse**  mode and then to the  **full**  mode. This process is called the promotion hierarchy policy. You can change the value of  **expthresh**  to change the policy. For example, if  **expthresh**  is  **0**, an HILL will skip the  **explicit**  mode and directly enter the  **sparse**  mode. If the value of  **expthresh**  is explicitly set to a value ranging from 1 to 7, this function returns 2<sup>expthresh</sup>.

    For example:

    ```
    postgres=# select hll_expthresh(hll_empty());
     hll_expthresh 
    ---------------
     (-1,160)
    (1 row)
    
    postgres=# select hll_expthresh(hll_empty(11,5,3));
     hll_expthresh 
    ---------------
     (8,8)
    (1 row)
    ```

-   hll\_sparseon\(hll\)

    Description: Specifies whether to enable the  **sparse**  mode.  **0**  indicates  **off**  and  **1**  indicates  **on**.

    For example:

    ```
    postgres=# select hll_sparseon(hll_empty());
     hll_sparseon 
    --------------
            1
    (1 row)
    ```


## Aggregation Functions<a name="section52621914536"></a>

-   hll\_add\_agg\(hll\_hashval\)

    Description: Groups hashed data into HLL

    Return type: hll

    For example:

    ```
    -- Prepare data:
    postgres=# create table t_id(id int);
    postgres=# insert into t_id values(generate_series(1,500));
    postgres=# create table t_data(a int, c text);
    postgres=# insert into t_data select mod(id,2), id from t_id;
    
    -- Create another table and specify an HLL column:
    postgres=# create table t_a_c_hll(a int, c hll);
    
    -- Use GROUP BY on column a to group data, and insert the data to the HLL:
    postgres=# insert into t_a_c_hll select a, hll_add_agg(hll_hash_text(c)) from t_data group by a;
    
    -- Calculate the number of distinct values for each group in the HLL:
    postgres=# select a, #c as cardinality from t_a_c_hll order by a;
     a |   cardinality    
    ---+------------------
     0 | 250.741759091658
     1 | 250.741759091658
    (2 rows)
    ```


-   hll\_add\_agg\(hll\_hashval, int32 log2m\)

    Description: Groups hashed data into HLL and sets the  **log2m**  parameter. The parameter value ranges from 10 to 16.

    Return type: hll

    For example:

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), 10)) from t_data;
     hll_cardinality  
    ------------------
     503.932348927339
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 regwidth\)

    Description: Groups hashed data into HLL and sets the  **log2m**  and  **regwidth**  parameters in sequence. The value of  **regwidth**  ranges from 1 to 5.

    Return type: hll

    For example:

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1)) from t_data;
     hll_cardinality  
    ------------------
     496.628982624022
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 regwidth, int64 expthresh\)

    Description: Groups hashed data into HLL and sets the parameters  **log2m**,  **regwidth**, and  **expthresh**  in sequence. The value of  **expthresh**  is an integer ranging from –1 to 7.  **expthresh**  is used to specify the threshold for switching from the  **explicit**  mode to the  **sparse**  mode.  **–1**  indicates the auto mode;  **0**  indicates that the  **explicit**  mode is skipped; a value from 1 to 7 indicates that the mode is switched when the number of distinct values reaches 2<sup>**expthresh**</sup>.

    Return type: hll

    For example:

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1, 4)) from t_data;
     hll_cardinality  
    ------------------
     496.628982624022
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 regwidth, int64 expthresh, int32 sparseon\)

    Description: Groups hashed data into HLL and sets the  **log2m**,  **regwidth**,  **expthresh**, and  **sparseon**  parameters in sequence. The value of  **sparseon**  is  **0**  or  **1**.

    Return type: hll

    For example:

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1, 4, 0)) from t_data;
     hll_cardinality  
    ------------------
     496.628982624022
    (1 row)
    ```

-   hll\_union\_agg\(hll\)

    Description: Perform the  **UNION**  operation on multiple pieces of data of the hll type to obtain one HLL.

    Return type: hll

    For example:

    ```
    -- Perform the UNION operation on data of the hll type in each group to obtain one HLL, and calculate the number of distinct values:
    postgres=# select #hll_union_agg(c) as cardinality from t_a_c_hll;
       cardinality    
    ------------------
     496.628982624022
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >To perform  **UNION**  on data in multiple HLLs, ensure that the HLLs have the same precision. Otherwise,  **UNION**  cannot be performed. This restriction also applies to the hll\_union\(hll, hll\) function.


## Functional Functions<a name="section17355134113311"></a>

-   hll\_print\(hll\)

    Description: Prints some debugging parameters of an HLL.

    For example:

    ```
    postgres=# select hll_print(hll_empty());
                             hll_print                         
    -----------------------------------------------------------
     EMPTY, nregs=2048, nbits=5, expthresh=-1(160), sparseon=1gongne
    (1 row)
    ```


-   hll\_empty\(\)

    Description: Creates an empty HLL.

    Return type: hll

    For example:

    ```
    postgres=# select hll_empty();
     hll_empty 
    -----------
     \x118b7f
    (1 row)
    ```

-   hll\_empty\(int32 log2m\)

    Description: Creates an empty HLL and sets the  **log2m**  parameter. The parameter value ranges from 10 to 16.

    Return type: hll

    For example:

    ```
    postgres=#  select hll_empty(10);
     hll_empty 
    -----------
     \x118a7f
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 regwidth\)

    Description: Creates an empty HLL and sets the  **log2m**  and  **regwidth**  parameters in sequence. The value of  **regwidth**  ranges from 1 to 5.

    Return type: hll

    For example:

    ```
    postgres=# select hll_empty(10, 4);
     hll_empty 
    -----------
     \x116a7f
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 regwidth, int64 expthresh\)

    Description: Creates an empty HLL and sets the  **log2m**,  **regwidth**, and  **expthresh**  parameters. The value of  **expthresh**  is an integer ranging from –1 to 7. This parameter specifies the threshold for switching from the  **explicit**  mode to the  **sparse**  mode.  **–1**  indicates the auto mode;  **0**  indicates that the  **explicit**  mode is skipped; a value from 1 to 7 indicates that the mode is switched when the number of distinct values reaches 2<sup>**expthresh**</sup>.

    Return type: hll

    For example:

    ```
    postgres=#  select hll_empty(10, 4, 7);
     hll_empty 
    -----------
     \x116a48
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 regwidth, int64 expthresh, int32 sparseon\)

    Description: Creates an empty HLL and sets the  **log2m**,  **regwidth**,  **expthresh**, and  **sparseon**  parameters. The value of  **sparseon**  is  **0**  or  **1**.

    Return type: hll

    For example:

    ```
    postgres=# select hll_empty(10,4,7,0);
     hll_empty 
    -----------
     \x116a08
    (1 row)
    ```

-   hll\_add\(hll, hll\_hashval\)

    Description: Adds hll\_hashval to an HLL.

    Return type: hll

    For example:

    ```
    postgres=# select hll_add(hll_empty(), hll_hash_integer(1));
             hll_add          
    --------------------------
     \x128b7f8895a3f5af28cafe
    (1 row)
    ```

-   hll\_add\_rev\(hll\_hashval, hll\)

    Description: Adds hll\_hashval to an HLL. This function works the same as hll\_add, except that the positions of parameters are switched.

    Return type: hll

    For example:

    ```
    postgres=# select hll_add_rev(hll_hash_integer(1), hll_empty());
           hll_add_rev        
    --------------------------
     \x128b7f8895a3f5af28cafe
    (1 row)
    ```

-   hll\_eq\(hll, hll\)

    Description: Compares two HLLs to check whether they are the same.

    Return type: bool

    For example:

    ```
    postgres=# select hll_eq(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
     hll_eq 
    --------
     f
    (1 row)
    ```

-   hll\_ne\(hll, hll\)

    Description: Compares two HLLs to check whether they are different.

    Return type: bool

    For example:

    ```
    postgres=# select hll_ne(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
     hll_ne 
    --------
     t
    (1 row)
    ```

-   hll\_cardinality\(hll\)

    Description: Calculates the number of distinct values of an HLL.

    Return type: int

    For example:

    ```
    postgres=# select hll_cardinality(hll_empty() || hll_hash_integer(1));
     hll_cardinality 
    -----------------
                   1
    (1 row)
    ```

-   hll\_union\(hll, hll\)

    Description: Performs the  **UNION**  operation on two HLL data structures to obtain one HLL.

    Return type: hll

    For example:

    ```
    postgres=# select hll_union(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
                    hll_union                 
    ------------------------------------------
     \x128b7f8895a3f5af28cafeda0ce907e4355b60
    (1 row)
    ```


## Built-In Functions<a name="section121531551417"></a>

HLL has a series of built-in functions for internal data processing. Generally, users do not need to know how to use these functions. For details, see  [Table 1](#table47911935194712).

**Table  1**  Built-in functions

<a name="table47911935194712"></a>
<table><thead align="left"><tr id="row77911435104713"><th class="cellrowborder" valign="top" width="24.48%" id="mcps1.2.3.1.1"><p id="p2791143544719"><a name="p2791143544719"></a><a name="p2791143544719"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="75.52%" id="mcps1.2.3.1.2"><p id="p9791835174713"><a name="p9791835174713"></a><a name="p9791835174713"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1879183513479"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1179193510478"><a name="p1179193510478"></a><a name="p1179193510478"></a>hll_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1979119357477"><a name="p1979119357477"></a><a name="p1979119357477"></a>Receives hll data in string format.</p>
</td>
</tr>
<tr id="row1479111356473"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p279183512474"><a name="p279183512474"></a><a name="p279183512474"></a>hll_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p3791143534720"><a name="p3791143534720"></a><a name="p3791143534720"></a>Sends hll data in string format.</p>
</td>
</tr>
<tr id="row17791143519475"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p179143534719"><a name="p179143534719"></a><a name="p179143534719"></a>hll_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p19791133504717"><a name="p19791133504717"></a><a name="p19791133504717"></a>Receives hll data in bytea format.</p>
</td>
</tr>
<tr id="row37911735174717"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p579113584717"><a name="p579113584717"></a><a name="p579113584717"></a>hll_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p27911635154716"><a name="p27911635154716"></a><a name="p27911635154716"></a>Sends hll data in bytea format.</p>
</td>
</tr>
<tr id="row1079119355476"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p879173514479"><a name="p879173514479"></a><a name="p879173514479"></a>hll_trans_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1479112358470"><a name="p1479112358470"></a><a name="p1479112358470"></a>Receives hll_trans_type data in string format.</p>
</td>
</tr>
<tr id="row1679111357471"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p19791103544713"><a name="p19791103544713"></a><a name="p19791103544713"></a>hll_trans_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p379103574716"><a name="p379103574716"></a><a name="p379103574716"></a>Sends hll_trans_type data in string format.</p>
</td>
</tr>
<tr id="row279110357470"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p379193517476"><a name="p379193517476"></a><a name="p379193517476"></a>hll_trans_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p187911359479"><a name="p187911359479"></a><a name="p187911359479"></a>Receives hll_trans_type data in bytea format.</p>
</td>
</tr>
<tr id="row1679123516479"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1579193513473"><a name="p1579193513473"></a><a name="p1579193513473"></a>hll_trans_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p4791235144715"><a name="p4791235144715"></a><a name="p4791235144715"></a>Sends hll_trans_type data in bytea format.</p>
</td>
</tr>
<tr id="row10791193515474"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p13791103513474"><a name="p13791103513474"></a><a name="p13791103513474"></a>hll_typmod_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p7791835124712"><a name="p7791835124712"></a><a name="p7791835124712"></a>Receives typmod data.</p>
</td>
</tr>
<tr id="row167911235114720"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1791123516471"><a name="p1791123516471"></a><a name="p1791123516471"></a>hll_typmod_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p17918354472"><a name="p17918354472"></a><a name="p17918354472"></a>Sends typmod data.</p>
</td>
</tr>
<tr id="row20791193513473"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p117911835204715"><a name="p117911835204715"></a><a name="p117911835204715"></a>hll_hashval_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1779111354473"><a name="p1779111354473"></a><a name="p1779111354473"></a>Receives hll_hashval data.</p>
</td>
</tr>
<tr id="row13791173594711"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p167911235154711"><a name="p167911235154711"></a><a name="p167911235154711"></a>hll_hashval_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p4791163594716"><a name="p4791163594716"></a><a name="p4791163594716"></a>Sends hll_hashval data.</p>
</td>
</tr>
<tr id="row9791435194716"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p18791335114717"><a name="p18791335114717"></a><a name="p18791335114717"></a>hll_add_trans0</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p117915355473"><a name="p117915355473"></a><a name="p117915355473"></a>Works similar to hll_add, and is used on the first phase of DNs in distributed aggregation operations.</p>
</td>
</tr>
<tr id="row1651225020371"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p4267123714380"><a name="p4267123714380"></a><a name="p4267123714380"></a>hll_add_trans1</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p135133503373"><a name="p135133503373"></a><a name="p135133503373"></a>Works similar to hll_add, and is used on the second phase of DNs in distributed aggregation operations.</p>
</td>
</tr>
<tr id="row26442012183810"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1644112173813"><a name="p1644112173813"></a><a name="p1644112173813"></a>hll_add_trans2</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p76440122382"><a name="p76440122382"></a><a name="p76440122382"></a>Works similar to hll_add, and is used on the third phase of DNs in distributed aggregation operations.</p>
</td>
</tr>
<tr id="row10405182173810"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p540515217383"><a name="p540515217383"></a><a name="p540515217383"></a>hll_add_trans3</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p34058216383"><a name="p34058216383"></a><a name="p34058216383"></a>Works similar to hll_add, and is used on the fourth phase of DNs in distributed aggregation operations.</p>
</td>
</tr>
<tr id="row08671457153711"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p14749185195619"><a name="p14749185195619"></a><a name="p14749185195619"></a>hll_add_trans4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p19868205713377"><a name="p19868205713377"></a><a name="p19868205713377"></a>Works similar to hll_add, and is used on the fifth phase of DNs in distributed aggregation operations.</p>
</td>
</tr>
<tr id="row12791103520475"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p2791143513476"><a name="p2791143513476"></a><a name="p2791143513476"></a>hll_union_trans</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p7791103544717"><a name="p7791103544717"></a><a name="p7791103544717"></a>Works similar to hll_union, and is used on the first phase of DNs in distributed aggregation operations.</p>
</td>
</tr>
<tr id="row15791133515478"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1879133524717"><a name="p1879133524717"></a><a name="p1879133524717"></a>hll_union_collect</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p179110357477"><a name="p179110357477"></a><a name="p179110357477"></a>Works similar to hll_union, and is used on the second phase of DNs in distributed aggregation operations to summarize the results of each DN.</p>
</td>
</tr>
<tr id="row47911535164716"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1479111359471"><a name="p1479111359471"></a><a name="p1479111359471"></a>hll_pack</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p579114359471"><a name="p579114359471"></a><a name="p579114359471"></a>Is used on the third phase of DNs in distributed aggregation operations to convert a user-defined type hll_trans_type to the hll type.</p>
</td>
</tr>
<tr id="row1179173574716"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p17791635184719"><a name="p17791635184719"></a><a name="p17791635184719"></a>hll</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p879183564713"><a name="p879183564713"></a><a name="p879183564713"></a>Converts a hll type to another hll type. Input parameters can be specified.</p>
</td>
</tr>
<tr id="row107913352479"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p879153518477"><a name="p879153518477"></a><a name="p879153518477"></a>hll_hashval</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p67911135194720"><a name="p67911135194720"></a><a name="p67911135194720"></a>Converts the bigint type to the hll_hashval type.</p>
</td>
</tr>
<tr id="row14791143519470"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1079123544713"><a name="p1079123544713"></a><a name="p1079123544713"></a>hll_hashval_int4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p279110352479"><a name="p279110352479"></a><a name="p279110352479"></a>Converts the int4 type to the hll_hashval type.</p>
</td>
</tr>
</tbody>
</table>

## Operators<a name="section0622234841"></a>

-   =

    Description: Compares the values of hll and hll\_hashval types to check whether they are the same.

    Return type: bool

    For example:

    ```
    --hll
    postgres=# select (hll_empty() || hll_hash_integer(1)) = (hll_empty() || hll_hash_integer(1));
    column 
    ----------
     t
    (1 row)
    
    --hll_hashval
    postgres=# select hll_hash_integer(1) = hll_hash_integer(1);
     ?column? 
    ----------
     t
    (1 row)
    ```


-   <\> or !=

    Description: Compares the values of hll and hll\_hashval types to check whether they are different.

    Return type: bool

    For example:

    ```
    --hll
    postgres=# select (hll_empty() || hll_hash_integer(1)) <> (hll_empty() || hll_hash_integer(2));
     ?column? 
    ----------
     t
    (1 row)
    
    --hll_hashval
    postgres=# select hll_hash_integer(1) <> hll_hash_integer(2);
     ?column? 
    ----------
     t
    (1 row)
    ```

-   ||

    Description: Represents the functions of hll\_add, hll\_union, and hll\_add\_rev.

    Return type: hll

    For example:

    ```
    --hll_add
    postgres=# select hll_empty() || hll_hash_integer(1);
             ?column?         
    --------------------------
     \x128b7f8895a3f5af28cafe
    (1 row)
     
    --hll_add_rev
    postgres=# select hll_hash_integer(1) || hll_empty();
             ?column?         
    --------------------------
     \x128b7f8895a3f5af28cafe
    (1 row)
     
    --hll_union
    postgres=# select (hll_empty() || hll_hash_integer(1)) || (hll_empty() || hll_hash_integer(2));
                     ?column?                 
    ------------------------------------------
     \x128b7f8895a3f5af28cafeda0ce907e4355b60
    (1 row)
    ```

-   \#

    Description: Calculates the number of distinct values of an HLL. It works the same as the hll\_cardinality function.

    Return type: int

    For example:

    ```
    postgres=# select #(hll_empty() || hll_hash_integer(1));
     ?column? 
    ----------
            1
    (1 row)
    ```


