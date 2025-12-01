# HLL Functions and Operators<a name="EN-US_TOPIC_0309006541"></a>

## Hash Functions<a name="section161615718554"></a>

-   hll\_hash\_boolean\(bool\)

    Description: Hashes data of the Boolean type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_boolean(FALSE);
      hll_hash_boolean   
    ---------------------
     -5451962507482445012
    (1 row)
    ```


-   hll\_hash\_boolean\(bool, int32\)

    Description: Configures a hash seed \(that is, change the hash policy\) and hashes data of the bool type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_boolean(FALSE, 10);
      hll_hash_boolean  
    --------------------
     -1169037589280886076
    (1 row)
    ```

-   hll\_hash\_smallint\(smallint\)

    Description: Hashes data of the smallint type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_smallint(100::smallint);
      hll_hash_smallint  
    ---------------------
     962727970174027904
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>If parameters with the same numeric value are hashed using different data types, the data will differ, because hash functions select different calculation policies for each type.

-   hll\_hash\_smallint\(smallint, int32\)

    Description: Configures a hash seed \(that is, change the hash policy\) and hashes data of the smallint type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_smallint(100::smallint, 10);
      hll_hash_smallint  
    ---------------------
     -9056177146160443041
    (1 row)
    ```

-   hll\_hash\_integer\(integer\)

    Description: Hashes data of the integer type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_integer(0);
       hll_hash_integer   
    ----------------------
     5156626420896634997
    (1 row)
    ```

-   hll\_hash\_integer\(integer, int32\)

    Description: Hashes data of the integer type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_integer(0, 10);
      hll_hash_integer  
    --------------------
     -5035020264353794276
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint\)

    Description: Hashes data of the bigint type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_bigint(100::bigint);
       hll_hash_bigint   
    ---------------------
     -2401963681423227794
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint, int32\)

    Description: Hashes data of the bigint type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_bigint(100::bigint, 10);
       hll_hash_bigint   
    ---------------------
     -2305749404374433531
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea\)

    Description: Hashes data of the bytea type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_bytea(E'\\x');
     hll_hash_bytea 
    ----------------
     0
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea, int32\)

    Description: Hashes data of the bytea type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_bytea(E'\\x', 10);
       hll_hash_bytea    
    ---------------------
     7233188113542599437
    (1 row)
    ```

-   hll\_hash\_text\(text\)

    Description: Hashes data of the text type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_text('AB');
        hll_hash_text    
    ---------------------
     -5666002586880275174
    (1 row)
    ```

-   hll\_hash\_text\(text, int32\)

    Description: Hashes data of the text type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# SELECT hll_hash_text('AB', 10);
    hll_hash_text
    ---------------------
    -2215507121143724132
    (1 row)
    ```

-   hll\_hash\_any\(anytype\)

    Description: Hashes data of any type.

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# select hll_hash_any(1);
         hll_hash_any     
    ----------------------
     -1316670585935156930
    (1 row)
    
    openGauss=# select hll_hash_any('08:00:2b:01:02:03'::macaddr);
         hll_hash_any     
    ----------------------
     -3719950434455589360
    (1 row)
    ```

-   hll\_hash\_any\(anytype, int32\)

    Description: Hashes data of any type and configures a hash seed \(that is, change the hash policy\).

    Return type: hll\_hashval

    Example:

    ```
    openGauss=# select hll_hash_any(1, 10);
         hll_hash_any     
    ----------------------
     7048553517657992351
    (1 row)
    ```

-   hll\_hashval\_eq\(hll\_hashval, hll\_hashval\)

    Description: Compares two pieces of data of the  **hll\_hashval**  type to check whether they are the same.

    Return type: Boolean

    Example:

    ```
    openGauss=# select hll_hashval_eq(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_eq 
    ----------------
     t
    (1 row)
    ```

-   hll\_hashval\_ne\(hll\_hashval, hll\_hashval\)

    Description: Compares two pieces of data of the  **hll\_hashval**  type to check whether they are different.

    Return type: Boolean

    Example:

    ```
    openGauss=# select hll_hashval_ne(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_ne 
    ----------------
     f
    (1 row)
    ```


## HLL Functions<a name="section362275717559"></a>

There are three HLL modes: explicit, sparse, and full. When the data size is small, the explicit mode is used. In this mode, distinct values are calculated without errors. As the number of distinct values increases, the HLL mode is switched to the sparse and full modes in sequence. The two modes have no difference in the calculation result, but vary in the calculation efficiency of HLL functions and the storage space of HLL objects. The following functions can be used to view some HLL parameters:

-   hll\_print\(hll\)

    Description: Prints some debugging parameters of an HLL.

    Example:

    ```
    openGauss=# select hll_print(hll_empty());
                                       hll_print
    -------------------------------------------------------------------------------
     type=1(HLL_EMPTY), log2m=14, log2explicit=10, log2sparse=12, duplicatecheck=0
    (1 row)
    ```


-   hll\_type\(hll\)

    Description: Checks the type of the current HLL. The return values are described as follows:  **0**  indicates  **HLL\_UNINIT**, an HLL object that is not initialized.  **1**  indicates  **HLL\_EMPTY**, an empty HLL object.  **2**  indicates  **HLL\_EXPLICIT**, an HLL object in explicit mode.  **3**  indicates  **HLL\_SPARSE**, an HLL object in sparse mode.  **4**  indicates  **HLL\_FULL**, an HLL object in full mode.  **5**  indicates  **HLL\_UNDEFINED**, an invalid HLL object.

    Example:

    ```
    openGauss=# select hll_type(hll_empty());
     hll_type 
    ----------
            1
    (1 row)
    ```

-   hll\_log2m\(hll\)

    Description: Checks the value of  **log2m**  in the current HLL data structure.  **log2m**  is the logarithm of the number of buckets. This value affects the error rate of calculating distinct values by HLL. The error rate = ±1.04/√\(2^log2m\). If the value of  **log2m**  ranges from 10 to 16, HLL sets the number of buckets to 2<sup>log2m</sup>. When the value of  **log2explicit**  is explicitly set to  **–1**, the built-in default value is used.

    Example:

    ```
    openGauss=# select hll_log2m(hll_empty());
     hll_log2m
    -----------
            14
    (1 row)
    
    openGauss=# select hll_log2m(hll_empty(10));
     hll_log2m
    -----------
            10
    (1 row)
    
    openGauss=# select hll_log2m(hll_empty(-1));
     hll_log2m
    -----------
            14
    (1 row)
    ```

-   hll\_log2explicit\(hll\)

    Description: Queries the  **log2explicit**  value in the current HLL data structure. Generally, the HLL changes from the explicit mode to the sparse mode and then to the full mode. This process is called the promotion hierarchy policy. You can change the value of  **log2explicit**  to change the policy. For example, if  **log2explicit**  is set to  **0**, an HLL will skip the explicit mode and directly enter the sparse mode. When the value of  **log2explicit**  is explicitly set to a value ranging from 1 to 12, HLL will switch to the sparse mode when the length of the data segment exceeds 2<sup>log2explicit</sup>. When the value of  **log2explicit**  is explicitly set to  **–1**, the built-in default value is used.

    Example:

    ```
    openGauss=# select hll_log2explicit(hll_empty());
     hll_log2explicit
    ------------------
                   10
    (1 row)
    
    openGauss=# select hll_log2explicit(hll_empty(12, 8));
     hll_log2explicit
    ------------------
                    8
    (1 row)
    
    openGauss=# select hll_log2explicit(hll_empty(12, -1));
     hll_log2explicit
    ------------------
                   10
    (1 row)
    ```

-   hll\_log2sparse\(hll\)

    Description: Queries the value of  **log2sparse**  in the current HLL data structure. Generally, the HLL changes from the explicit mode to the sparse mode and then to the full mode. This process is called the promotion hierarchy policy. You can adjust the value of  **log2sparse**  to change the policy. For example, if the value of  **log2sparse**  is  **0**, the system skips the sparse mode and directly enters the full mode. If the value of  **log2sparse**  is explicitly set to a value ranging from 1 to 14, HLL will switch to the full mode when the length of the data segment exceeds 2<sup>log2sparse</sup>. When the value of  **log2sparse**  is explicitly set to  **–1**, the built-in default value is used.

    Example:

    ```
    openGauss=# select hll_log2sparse(hll_empty());
     hll_log2sparse
    ----------------
                 12
    (1 row)
    
    openGauss=# select hll_log2sparse(hll_empty(12, 8, 10));
     hll_log2sparse
    ----------------
                 10
    (1 row)
    
    openGauss=# select hll_log2sparse(hll_empty(12, 8, -1));
     hll_log2sparse
    ----------------
                 12
    (1 row)
    ```


-   hll\_duplicatecheck\(hll\)

    Description: Specifies whether duplicate check is enabled. The value  **0**  indicates that it is disabled and the value  **1**  indicates that it is enabled. This function is disabled by default. If there are many duplicate values, you can enable this function to improve efficiency. When the value of  **duplicatecheck**  is explicitly set to  **–1**, the built-in default value is used.

    Example:

    ```
    openGauss=# select hll_duplicatecheck(hll_empty());
     hll_duplicatecheck
    --------------------
                      0
    (1 row)
    
    openGauss=# select hll_duplicatecheck(hll_empty(12, 8, 10, 1));
     hll_duplicatecheck
    --------------------
                      1
    (1 row)
    
    openGauss=# select hll_duplicatecheck(hll_empty(12, 8, 10, -1));
     hll_duplicatecheck
    --------------------
                      0
    (1 row)
    ```


## Functional Functions<a name="section1014220328512"></a>

-   hll\_empty\(\)

    Description: Creates an empty HLL.

    Return type: hll

    Example:

    ```
    openGauss=# select hll_empty();
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000002b05000000000000000000000000000000000000
    (1 row)
    ```

-   hll\_empty\(int32 log2m\)

    Description: Creates an empty HLL and sets the  **log2m**  parameter. The parameter value ranges from 10 to 16. If the input is  **–1**, the built-in default value is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_empty(10);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000002b04000000000000000000000000000000000000
    (1 row)
    
    openGauss=# select hll_empty(-1);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000002b05000000000000000000000000000000000000
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 log2explicit\)

    Description: Creates an empty HLL and sets the  **log2m**  and  **log2explicit**  parameters in sequence. The value of  **log2explicit**  ranges from 0 to 12. The value  **0**  indicates that the explicit mode is skipped. This parameter is used to set the threshold of the explicit mode. When the length of the data segment reaches 2<sup>log2explicit</sup>, the mode is switched to the sparse or full mode. If the input is  **–1**, the built-in default value of  **log2explicit**  is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_empty(10, 4);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000001304000000000000000000000000000000000000
    (1 row)
    
    openGauss=# select hll_empty(10, -1);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000002b04000000000000000000000000000000000000
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 log2explicit, int64 log2sparse\)

    Description: Creates an empty HLL and sets the  **log2m**,  **log2explicit**  and  **log2sparse**  parameters in sequence. The value of  **log2sparse**  ranges from 0 to 14. The value  **0**  indicates that the sparse mode is skipped. This parameter is used to set the threshold of the sparse mode. When the length of the data segment reaches 2<sup>log2sparse</sup>, the mode is switched to the full mode. If the input is  **–1**, the built-in default value of  **log2sparse**  is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_empty(10, 4, 8);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000001204000000000000000000000000000000000000
    (1 row)
    
    openGauss=# select hll_empty(10, 4, -1);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000001304000000000000000000000000000000000000
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 log2explicit, int64 log2sparse, int32 duplicatecheck\)

    Description: Creates an empty HLL and sets the  **log2m**,  **log2explicit**,  **log2sparse**, and  **duplicatecheck**  parameters in sequence. The value of  **duplicatecheck**  is  **0**  or  **1**, indicating whether the duplicate check mode is enabled. By default, this mode is disabled. If the input is  **–1**, the built-in default value of  **duplicatecheck**  is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_empty(10, 4, 8, 0);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000001204000000000000000000000000000000000000
    (1 row)
    
    openGauss=# select hll_empty(10, 4, 8, -1);
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000001204000000000000000000000000000000000000
    (1 row)
    ```

-   hll\_add\(hll, hll\_hashval\)

    Description: Adds  **hll\_hashval**  to an HLL.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_add(hll_empty(), hll_hash_integer(1));
                                      hll_add
    ----------------------------------------------------------------------------
     \x484c4c08000002002b0900000000000000f03f3e2921ff133fbaed3e2921ff133fbaed00
    (1 row)
    ```

-   hll\_add\_rev\(hll\_hashval, hll\)

    Description: Adds  **hll\_hashval**  to an HLL. This function works the same as  **hll\_add**, except that the positions of parameters are switched.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_add_rev(hll_hash_integer(1), hll_empty());
                                    hll_add_rev
    ----------------------------------------------------------------------------
     \x484c4c08000002002b0900000000000000f03f3e2921ff133fbaed3e2921ff133fbaed00
    (1 row)
    ```

-   hll\_eq\(hll, hll\)

    Description: Compares two HLLs to check whether they are the same.

    Return type: Boolean

    Example:

    ```
    openGauss=# select hll_eq(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
     hll_eq 
    --------
     f
    (1 row)
    ```

-   hll\_ne\(hll, hll\)

    Description: Compares two HLLs to check whether they are different.

    Return type: Boolean

    Example:

    ```
    openGauss=# select hll_ne(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
     hll_ne 
    --------
     t
    (1 row)
    ```

-   hll\_cardinality\(hll\)

    Description: Calculates the number of distinct values of an HLL.

    Return type: int

    Example:

    ```
    openGauss=# select hll_cardinality(hll_empty() || hll_hash_integer(1));
     hll_cardinality 
    -----------------
                   1
    (1 row)
    ```

-   hll\_union\(hll, hll\)

    Description: Performs an UNION operation on two HLL data structures to obtain one HLL.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_union(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
                                             hll_union
    --------------------------------------------------------------------------------------------
     \x484c4c10002000002b090000000000000000400000000000000000b3ccc49320cca1ae3e2921ff133fbaed00
    (1 row)
    ```


## Aggregate Functions<a name="section136282577556"></a>

-   hll\_add\_agg\(hll\_hashval\)

    Description: Groups hashed data into HLL

    Return type: HLL

    Example:

    ```
    -- Prepare data.
    openGauss=# create table t_id(id int);
    openGauss=# insert into t_id values(generate_series(1,500));
    openGauss=# create table t_data(a int, c text);
    openGauss=# insert into t_data select mod(id,2), id from t_id;
    
    -- Create a table and specify an HLL column.
    openGauss=# create table t_a_c_hll(a int, c hll);
    
    -- Use GROUP BY on column a to group data, and insert the data to the HLL.
    openGauss=# insert into t_a_c_hll select a, hll_add_agg(hll_hash_text(c)) from t_data group by a;
    
    -- Calculate the number of distinct values for each group in the HLL.
    openGauss=# select a, #c as cardinality from t_a_c_hll order by a;
     a |   cardinality    
    ---+------------------
     0 | 247.862354346299
     1 | 250.908710610377
    (2 rows)
    ```


-   hll\_add\_agg\(hll\_hashval, int32 log2m\)

    Description: Groups hashed data into HLL and specifies the  **log2m**  parameter. The value ranges from 10 to 16. If the input is  **–1**  or  **NULL**, the built-in default value is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), 12)) from t_data;
     hll_cardinality  
    ------------------
     497.965240179228
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 log2explicit\)

    Description: Groups hashed data into HLL and specifies the  **log2m**  and  **log2explicit**  parameters in sequence. The value of  **log2explicit**  ranges from 0 to 12. The value  **0**  indicates that the explicit mode is skipped. This parameter is used to set the threshold of the explicit mode. When the length of the data segment reaches 2<sup>log2explicit</sup>, the mode is switched to the sparse or full mode. If the input is  **–1**  or  **NULL**, the built-in default value of  **log2explicit**  is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1)) from t_data;
     hll_cardinality  
    ------------------
     498.496062953313
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 log2explicit, int64 log2sparse\)

    Description: Groups hashed data into HLL and sets the parameters  **log2m**,  **log2explicit**, and  **log2sparse**  in sequence. The value of  **log2sparse**  ranges from 0 to 14. The value  **0**  indicates that the sparse mode is skipped. This parameter is used to set the threshold of the sparse mode. When the length of the data segment reaches 2<sup>log2sparse</sup>, the mode is switched to the full mode. If the input is  **–1**  or  **NULL**, the built-in default value of  **log2sparse**  is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 6, 10)) from t_data;
     hll_cardinality  
    ------------------
     498.496062953313
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 log2explicit, int64 log2sparse, int32 duplicatecheck\)

    Description: Groups hashed data into HLL and sets the  **log2m**,  **log2explicit**,  **log2sparse**, and  **duplicatecheck**  parameters. The value of  **duplicatecheck**  can be  **0**  or  **1**, indicating whether to enable this mode. By default, this mode is disabled. If the input is  **–1**  or  **NULL**, the built-in default value of  **duplicatecheck**  is used.

    Return type: HLL

    Example:

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 6, 10, -1)) from t_data;
     hll_cardinality  
    ------------------
     498.496062953313
    (1 row)
    ```

-   hll\_union\_agg\(hll\)

    Description: Performs an UNION operation on multiple pieces of data of the HLL type to obtain one HLL.

    Return type: HLL

    Example:

    ```
    -- Perform the UNION operation on data of the HLL type in each group to obtain one HLL, and calculate the number of distinct values:
    openGauss=# select #hll_union_agg(c) as cardinality from t_a_c_hll;
       cardinality    
    ------------------
     498.496062953313
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >To perform the UNION operation on data in multiple HLLs, ensure that the HLLs have the same precision. Otherwise,  **UNION**  cannot be performed. This constraint also applies to the  **hll\_union\(hll, hll\)**  function.


## Obsolete Functions<a name="section34169941512"></a>

Some old HLL functions are discarded due to version upgrade. You can replace them with similar functions.

-   hll\_schema\_version\(hll\)

    Description: Checks the schema version in the current HLL. In earlier versions, the schema version is fixed at  **1**, which is used to verify the header of the HLL field. After refactoring, the HLL field is added to the header for verification. The schema version is no longer used.

-   hll\_regwidth\(hll\)

    Description: Queries the bucket size in the HLL data structure. In earlier versions, the value of  **regwidth**  ranges from 1 to 5, which has a large error and limits the upper limit of the cardinality estimation. After refactoring, the value of  **regwidth**  is fixed at  **6**  and the  **regwidth**  variable is not used.

-   hll\_expthresh\(hll\)

    Description: Obtains the  **expthresh**  value in the current HLL. The  **hll\_log2explicit\(hll\)**  function is used to replace similar functions.

-   hll\_sparseon\(hll\)

    Description: Specifies whether to enable the sparse mode. Use  **hll\_log2sparse\(hll\)**  to replace similar functions. The value  **0**  indicates that the sparse mode is disabled.


## Built-in Functions<a name="section17632057105518"></a>

HyperLogLog \(HLL\) has a series of built-in functions for internal data processing. Generally, users do not need to know how to use these functions. For details, see  [Table 1](#table763375795510).

**Table  1**  Built-in Functions

<a name="table763375795510"></a>
<table><thead align="left"><tr id="row0633157195515"><th class="cellrowborder" valign="top" width="24.48%" id="mcps1.2.3.1.1"><p id="p2633195745519"><a name="p2633195745519"></a><a name="p2633195745519"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="75.52%" id="mcps1.2.3.1.2"><p id="p3633195765513"><a name="p3633195765513"></a><a name="p3633195765513"></a>Function</p>
</th>
</tr>
</thead>
<tbody><tr id="row363318574552"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p156331157175510"><a name="p156331157175510"></a><a name="p156331157175510"></a>hll_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p36331257165516"><a name="p36331257165516"></a><a name="p36331257165516"></a>Receives hll data in string format.</p>
</td>
</tr>
<tr id="row7633257175513"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p863319577550"><a name="p863319577550"></a><a name="p863319577550"></a>hll_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p9633135713551"><a name="p9633135713551"></a><a name="p9633135713551"></a>Sends hll data in string format.</p>
</td>
</tr>
<tr id="row13633357185510"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p6633205735517"><a name="p6633205735517"></a><a name="p6633205735517"></a>hll_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p8633195719557"><a name="p8633195719557"></a><a name="p8633195719557"></a>Receives hll data in bytea format.</p>
</td>
</tr>
<tr id="row6633115717557"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p18633357135519"><a name="p18633357135519"></a><a name="p18633357135519"></a>hll_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p18633757195520"><a name="p18633757195520"></a><a name="p18633757195520"></a>Sends hll data in bytea format.</p>
</td>
</tr>
<tr id="row56331257135518"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p13633185710554"><a name="p13633185710554"></a><a name="p13633185710554"></a>hll_trans_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p6633135705518"><a name="p6633135705518"></a><a name="p6633135705518"></a>Receives hll_trans_type data in string format.</p>
</td>
</tr>
<tr id="row1963415711554"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p5634205715554"><a name="p5634205715554"></a><a name="p5634205715554"></a>hll_trans_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1063455716559"><a name="p1063455716559"></a><a name="p1063455716559"></a>Sends hll_trans_type data in string format.</p>
</td>
</tr>
<tr id="row106348577552"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p06345571556"><a name="p06345571556"></a><a name="p06345571556"></a>hll_trans_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p106341357205517"><a name="p106341357205517"></a><a name="p106341357205517"></a>Receives hll_trans_type data in bytea format.</p>
</td>
</tr>
<tr id="row12634115718556"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p0634257125520"><a name="p0634257125520"></a><a name="p0634257125520"></a>hll_trans_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p063419574551"><a name="p063419574551"></a><a name="p063419574551"></a>Sends hll_trans_type data in bytea format.</p>
</td>
</tr>
<tr id="row14634195775514"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p16341957205513"><a name="p16341957205513"></a><a name="p16341957205513"></a>hll_typmod_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p3634195775512"><a name="p3634195775512"></a><a name="p3634195775512"></a>Receives typmod data.</p>
</td>
</tr>
<tr id="row1263411572552"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1663455715558"><a name="p1663455715558"></a><a name="p1663455715558"></a>hll_typmod_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1563495719553"><a name="p1563495719553"></a><a name="p1563495719553"></a>Sends typmod data.</p>
</td>
</tr>
<tr id="row563412576555"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p166351857145518"><a name="p166351857145518"></a><a name="p166351857145518"></a>hll_hashval_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p163595715516"><a name="p163595715516"></a><a name="p163595715516"></a>Receives hll_hashval data.</p>
</td>
</tr>
<tr id="row0635657175517"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p14635185716552"><a name="p14635185716552"></a><a name="p14635185716552"></a>hll_hashval_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p13635857115513"><a name="p13635857115513"></a><a name="p13635857115513"></a>Sends hll_hashval data.</p>
</td>
</tr>
<tr id="row3636185719550"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p206361757145510"><a name="p206361757145510"></a><a name="p206361757145510"></a>hll_add_trans0</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p7636857125517"><a name="p7636857125517"></a><a name="p7636857125517"></a>It is similar to <strong id="b89741396228"><a name="b89741396228"></a><a name="b89741396228"></a>hll_add</strong>. No input parameter is specified during initialization. It is usually used in the first phase of DNs in aggregation operations.</p>
</td>
</tr>
<tr id="row176361357125520"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p13636105715556"><a name="p13636105715556"></a><a name="p13636105715556"></a>hll_add_trans1</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p196361576559"><a name="p196361576559"></a><a name="p196361576559"></a>It is similar to <strong id="b1796353921412"><a name="b1796353921412"></a><a name="b1796353921412"></a>hll_add</strong>. An input parameter is specified during initialization. It is usually used in the first phase of DNs in aggregation operations.</p>
</td>
</tr>
<tr id="row363635755513"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p186361957105517"><a name="p186361957105517"></a><a name="p186361957105517"></a>hll_add_trans2</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p10636145715554"><a name="p10636145715554"></a><a name="p10636145715554"></a>It is similar to <strong id="b643465361417"><a name="b643465361417"></a><a name="b643465361417"></a>hll_add</strong>. Two input parameters are specified during initialization. It is usually used in the first phase of DNs in aggregation operations.</p>
</td>
</tr>
<tr id="row14636135795519"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p11636195725515"><a name="p11636195725515"></a><a name="p11636195725515"></a>hll_add_trans3</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p18636357155517"><a name="p18636357155517"></a><a name="p18636357155517"></a>It is similar to <strong id="b15361904155"><a name="b15361904155"></a><a name="b15361904155"></a>hll_add</strong>. Three input parameters are specified during initialization. It is usually used in the first phase of DNs in aggregation operations.</p>
</td>
</tr>
<tr id="row463645719553"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p563655710554"><a name="p563655710554"></a><a name="p563655710554"></a>hll_add_trans4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p11637145755512"><a name="p11637145755512"></a><a name="p11637145755512"></a>It is similar to <strong id="b961615191517"><a name="b961615191517"></a><a name="b961615191517"></a>hll_add</strong>. Four input parameters are specified during initialization. It is usually used in the first phase of DNs in aggregation operations.</p>
</td>
</tr>
<tr id="row116371157145510"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1363785719555"><a name="p1363785719555"></a><a name="p1363785719555"></a>hll_union_trans</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p66373575550"><a name="p66373575550"></a><a name="p66373575550"></a>It is similar to <strong id="b1365821313153"><a name="b1365821313153"></a><a name="b1365821313153"></a>hll_union</strong> and is used in the first phase of DNs in aggregation operations.</p>
</td>
</tr>
<tr id="row063725795518"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p14637195755519"><a name="p14637195755519"></a><a name="p14637195755519"></a>hll_union_collect</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1163755785517"><a name="p1163755785517"></a><a name="p1163755785517"></a>It is similar to <strong id="b142857139283"><a name="b142857139283"></a><a name="b142857139283"></a>hll_union</strong> and is used in the second phase of DNs in aggregation operations to summarize the results of each DN.</p>
</td>
</tr>
<tr id="row2063775765512"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1863718579555"><a name="p1863718579555"></a><a name="p1863718579555"></a>hll_pack</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1463717579551"><a name="p1463717579551"></a><a name="p1463717579551"></a>It is used in the third phase of DNs in aggregation operations to convert a user-defined type hll_trans_type to the hll type.</p>
</td>
</tr>
<tr id="row66371957195511"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p116371857105518"><a name="p116371857105518"></a><a name="p116371857105518"></a>hll</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p15637757145512"><a name="p15637757145512"></a><a name="p15637757145512"></a>Converts an HLL type to another HLL type. Input parameters can be specified.</p>
</td>
</tr>
<tr id="row156371057155513"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p15637175711552"><a name="p15637175711552"></a><a name="p15637175711552"></a>hll_hashval</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p15637257155510"><a name="p15637257155510"></a><a name="p15637257155510"></a>Converts the bigint type to the <strong id="b1640174520154"><a name="b1640174520154"></a><a name="b1640174520154"></a>hll_hashval</strong> type.</p>
</td>
</tr>
<tr id="row14637657115514"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p863795711555"><a name="p863795711555"></a><a name="p863795711555"></a>hll_hashval_int4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p146371657205510"><a name="p146371657205510"></a><a name="p146371657205510"></a>Converts the int4 type to the <strong id="b1839835016157"><a name="b1839835016157"></a><a name="b1839835016157"></a>hll_hashval</strong> type.</p>
</td>
</tr>
</tbody>
</table>

## Operators<a name="section18638145795518"></a>

-   =

    Description: Compares the values of HLL and  **hll\_hashval**  types to check whether they are the same.

    Return type: Boolean

    Example:

    ```
    --hll
    openGauss=# select (hll_empty() || hll_hash_integer(1)) = (hll_empty() || hll_hash_integer(1));
    column 
    ----------
     t
    (1 row)
    
    --hll_hashval
    openGauss=# select hll_hash_integer(1) = hll_hash_integer(1);
     ?column? 
    ----------
     t
    (1 row)
    ```


-   <\> or !=

    Description: Compares the values of HLL and  **hll\_hashval**  types to check whether they are different.

    Return type: Boolean

    Example:

    ```
    --hll
    openGauss=# select (hll_empty() || hll_hash_integer(1)) <> (hll_empty() || hll_hash_integer(2));
     ?column? 
    ----------
     t
    (1 row)
    
    --hll_hashval
    openGauss=# select hll_hash_integer(1) <> hll_hash_integer(2);
     ?column? 
    ----------
     t
    (1 row)
    ```

-   ||

    Description: Represents the functions of  **hll\_add**,  **hll\_union**, and  **hll\_add\_rev**.

    Return type: HLL

    Example:

    ```
    --hll_add
    openGauss=# select hll_empty() || hll_hash_integer(1);
                                      ?column?
    ----------------------------------------------------------------------------
     \x484c4c08000002002b0900000000000000f03f3e2921ff133fbaed3e2921ff133fbaed00
    (1 row)
    
    --hll_add_rev
    openGauss=# select hll_hash_integer(1) || hll_empty();
                                      ?column?
    ----------------------------------------------------------------------------
     \x484c4c08000002002b0900000000000000f03f3e2921ff133fbaed3e2921ff133fbaed00
    (1 row)
    
    --hll_union
    openGauss=# select (hll_empty() || hll_hash_integer(1)) || (hll_empty() || hll_hash_integer(2));
                                              ?column?
    --------------------------------------------------------------------------------------------
     \x484c4c10002000002b090000000000000000400000000000000000b3ccc49320cca1ae3e2921ff133fbaed00
    (1 row)
    ```

-   \#

    Description: Calculates the number of distinct values of an HLL. It works the same as the  **hll\_cardinality**  function.

    Return type: int

    Example:

    ```
    openGauss=# select #(hll_empty() || hll_hash_integer(1));
     ?column? 
    ----------
            1
    (1 row)
    ```


