# HLL函数和操作符<a name="ZH-CN_TOPIC_0309006541"></a>

## 哈希函数<a name="section161615718554"></a>

-   hll\_hash\_boolean\(bool\)

    描述：对bool类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_boolean(FALSE);
      hll_hash_boolean   
    ---------------------
     -5451962507482445012
    (1 row)
    ```


-   hll\_hash\_boolean\(bool, int32\)

    描述：设置hash seed（即改变哈希策略）并对bool类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_boolean(FALSE, 10);
      hll_hash_boolean  
    --------------------
     -1169037589280886076
    (1 row)
    ```

-   hll\_hash\_smallint\(smallint\)

    描述：对smallint类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_smallint(100::smallint);
      hll_hash_smallint  
    ---------------------
     962727970174027904
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **说明：** 
>
>数值大小相同的参数使用不同数据类型的哈希函数计算，最后结果会不一样，因为不同类型哈希函数会选取不同的哈希计算策略。

-   hll\_hash\_smallint\(smallint, int32\)

    描述：设置hash seed（即改变哈希策略）同时对smallint类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_smallint(100::smallint, 10);
      hll_hash_smallint  
    ---------------------
     -9056177146160443041
    (1 row)
    ```

-   hll\_hash\_integer\(integer\)

    描述：对integer类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_integer(0);
       hll_hash_integer   
    ----------------------
     5156626420896634997
    (1 row)
    ```

-   hll\_hash\_integer\(integer, int32\)

    描述：对integer类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_integer(0, 10);
      hll_hash_integer  
    --------------------
     -5035020264353794276
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint\)

    描述：对bigint类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_bigint(100::bigint);
       hll_hash_bigint   
    ---------------------
     -2401963681423227794
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint, int32\)

    描述：对bigint类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_bigint(100::bigint, 10);
       hll_hash_bigint   
    ---------------------
     -2305749404374433531
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea\)

    描述：对bytea类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_bytea(E'\\x');
     hll_hash_bytea 
    ----------------
     0
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea, int32\)

    描述：对bytea类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_bytea(E'\\x', 10);
       hll_hash_bytea    
    ---------------------
     7233188113542599437
    (1 row)
    ```

-   hll\_hash\_text\(text\)

    描述：对text类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_text('AB');
        hll_hash_text    
    ---------------------
     -5666002586880275174
    (1 row)
    ```

-   hll\_hash\_text\(text, int32\)

    描述：对text类型数据计算哈希值, 并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# SELECT hll_hash_text('AB', 10);
    hll_hash_text
    ---------------------
    -2215507121143724132
    (1 row)
    ```

-   hll\_hash\_any\(anytype\)

    描述：对任意类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

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

    描述：对任意类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    openGauss=# select hll_hash_any(1, 10);
         hll_hash_any     
    ----------------------
     7048553517657992351
    (1 row)
    ```

-   hll\_hashval\_eq\(hll\_hashval, hll\_hashval\)

    描述：比较两个hll\_hashval类型数据是否相等。

    返回值类型：bool

    示例：

    ```
    openGauss=# select hll_hashval_eq(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_eq 
    ----------------
     t
    (1 row)
    ```

-   hll\_hashval\_ne\(hll\_hashval, hll\_hashval\)

    描述：比较两个hll\_hashval类型数据是否不相等。

    返回值类型：bool

    示例：

    ```
    openGauss=# select hll_hashval_ne(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_ne 
    ----------------
     f
    (1 row)
    ```


## 日志函数<a name="section362275717559"></a>

hll主要存在三种模式Explicit，Sparse，Full。当数据规模比较小的时候会使用Explicit模式，这种模式下distinct值的计算是没有误差的；随着distinct值越来越多，hll会先后转换为Sparse模式和Full模式，这两种模式在计算结果上没有任何区别，只影响hll函数的计算效率和hll对象的存储空间。下面的函数可以用于查看hll的一些参数。

-   hll\_print\(hll\)

    描述：打印hll的一些debug参数信息。

    示例：

    ```
    openGauss=# select hll_print(hll_empty());
                                       hll_print
    -------------------------------------------------------------------------------
     type=1(HLL_EMPTY), log2m=14, log2explicit=10, log2sparse=12, duplicatecheck=0
    (1 row)
    ```


-   hll\_type\(hll\)

    描述：查看当前hll的类型。返回值具体含义如下：返回值0，表示HLL\_UNINIT，未初始化的hll对象；返回值1，表示HLL\_EMPTY，hll空对象；返回值2，表示HLL\_EXPLICIT，Explicit模式的hll对象；返回值3，表示HLL\_SPARSE，Sparse模式的hll对象；返回值4，表示HLL\_FULL，Full模式的hll对象；返回值5，表示HLL\_UNDEFINED，不合法的hll对象。

    示例：

    ```
    openGauss=# select hll_type(hll_empty());
     hll_type 
    ----------
            1
    (1 row)
    ```

-   hll\_log2m\(hll\)

    描述：查看当前hll数据结构中的log2m数值，log2m是分桶数的对数值，此值会影响最后hll计算distinct误差率，误差率计算公式为±1.04/√\(2 ^ log2m\)。当显式指定log2m的取值为10-16之间时，hll会设置分桶数为2<sup>log2m</sup>。当显示指定log2explicit为-1时，会采用内置默认值。

    示例：

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

    描述：查看当前hll数据结构中的log2explicit数值。hll通常会由Explicit模式到Sparse模式再到Full模式，这个过程称为promotion hierarchy策略。可以通过调整log2explicit值的大小改变策略，比如log2explicit为0的时候就会跳过Explicit模式而直接进入Sparse模式。当显式指定log2explicit的取值为1-12之间时，hll会在数据段长度超过2<sup>log2explicit</sup>时转为Sparse模式。当显示指定log2explicit为-1时，会采用内置默认值。

    示例：

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

    描述：查看当前hll数据结构中的log2sparse数值。hll通常会由Explicit模式到Sparse模式再到Full模式，这个过程称为promotion hierarchy策略。可以通过调整log2sparse值的大小改变策略，比如log2sparse为0的时候就会跳过Sparse模式而直接进入Full模式。当显式指定Sparse的取值为1-14之间时，hll会在数据段长度超过2<sup>log2sparse</sup>时转为Full模式。当显示指定log2sparse为-1时，会采用内置默认值。

    示例：

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

    描述：是否启用duplicatecheck，0是关闭，1是开启。默认关闭，对于有较多重复值出现的情况，可以开启以提高效率。当显示指定duplicatecheck为-1时，会采用内置默认值。

    示例：

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


## 功能函数<a name="section1014220328512"></a>

-   hll\_empty\(\)

    描述：创建一个空的hll。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_empty();
                             hll_empty
    ------------------------------------------------------------
     \x484c4c00000000002b05000000000000000000000000000000000000
    (1 row)
    ```

-   hll\_empty\(int32 log2m\)

    描述：创建空的hll并指定参数log2m，取值范围是10到16。若输入-1，则采用内置默认值。

    返回值类型：hll

    示例：

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

    描述：创建空的hll并依次指定参数log2m、log2explicit。log2explicit取值范围是0到12，0表示直接跳过Explicit模式。该参数可以用来设置Explicit模式的阈值大小，在数据段长度达到2<sup>log2explicit</sup>后切换为Sparse模式或者Full模式。若输入-1，则log2explicit采用内置默认值。

    返回值类型:   hll

    示例：

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

    描述：创建空的hll并依次指定参数log2m、log2explicit、log2sparse。log2sparse取值范围是0到14，0表示直接跳过Sparse模式。该参数可以用来设置Sparse模式的阈值大小，在数据段长度达到2<sup>log2sparse</sup>后切换为Full模式。若输入-1，则log2sparse采用内置默认值。

    返回值类型：hll

    示例：

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

    描述：创建空的hll并依次指定参数log2m、log2explicit、log2sparse、duplicatecheck。duplicatecheck取0或者1，表示是否开启该模式，默认情况下该模式会关闭。若输入-1，则duplicatecheck采用内置默认值。

    返回值类型：hll

    示例：

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

    描述：把hll\_hashval加入到hll中。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_add(hll_empty(), hll_hash_integer(1));
                                      hll_add
    ----------------------------------------------------------------------------
     \x484c4c08000002002b0900000000000000f03f3e2921ff133fbaed3e2921ff133fbaed00
    (1 row)
    ```

-   hll\_add\_rev\(hll\_hashval, hll\)

    描述：把hll\_hashval加入到hll中，和hll\_add功能一样，只是参数位置进行了交换。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_add_rev(hll_hash_integer(1), hll_empty());
                                    hll_add_rev
    ----------------------------------------------------------------------------
     \x484c4c08000002002b0900000000000000f03f3e2921ff133fbaed3e2921ff133fbaed00
    (1 row)
    ```

-   hll\_eq\(hll, hll\)

    描述：比较两个hll是否相等。

    返回值类型：bool

    示例：

    ```
    openGauss=# select hll_eq(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
     hll_eq 
    --------
     f
    (1 row)
    ```

-   hll\_ne\(hll, hll\)

    描述：比较两个hll是否不相等。

    返回值类型：bool

    示例：

    ```
    openGauss=# select hll_ne(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
     hll_ne 
    --------
     t
    (1 row)
    ```

-   hll\_cardinality\(hll\)

    描述：计算hll的distinct值。

    返回值类型：int

    示例：

    ```
    openGauss=# select hll_cardinality(hll_empty() || hll_hash_integer(1));
     hll_cardinality 
    -----------------
                   1
    (1 row)
    ```

-   hll\_union\(hll, hll\)

    描述：把两个hll数据结构union成一个。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_union(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
                                             hll_union
    --------------------------------------------------------------------------------------------
     \x484c4c10002000002b090000000000000000400000000000000000b3ccc49320cca1ae3e2921ff133fbaed00
    (1 row)
    ```


## 聚合函数<a name="section136282577556"></a>

-   hll\_add\_agg\(hll\_hashval\)

    描述：把哈希后的数据按照分组放到hll中。

    返回值类型：hll

    示例：

    ```
    --准备数据
    openGauss=# create table t_id(id int);
    openGauss=# insert into t_id values(generate_series(1,500));
    openGauss=# create table t_data(a int, c text);
    openGauss=# insert into t_data select mod(id,2), id from t_id;
    
    --创建表并指定列为hll
    openGauss=# create table t_a_c_hll(a int, c hll);
    
    --根据a列group by对数据分组，把各组数据加到hll中
    openGauss=# insert into t_a_c_hll select a, hll_add_agg(hll_hash_text(c)) from t_data group by a;
    
    --得到每组数据中hll的Distinct值
    openGauss=# select a, #c as cardinality from t_a_c_hll order by a;
     a |   cardinality    
    ---+------------------
     0 | 247.862354346299
     1 | 250.908710610377
    (2 rows)
    ```


-   hll\_add\_agg\(hll\_hashval, int32 log2m\)

    描述：把哈希后的数据按照分组放到hll中， 并指定参数log2m，取值范围是10到16。若输入-1或者NULL，则采用内置默认值。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), 12)) from t_data;
     hll_cardinality  
    ------------------
     497.965240179228
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 log2explicit\)

    描述：把哈希后的数据按照分组放到hll中，依次指定参数log2m、log2explicit。 log2explicit取值范围是0到12，0表示直接跳过Explicit模式。该参数可以用来设置Explicit模式的阈值大小，在数据段长度达到2<sup>log2explicit</sup>后切换为Sparse模式或者Full模式。若输入-1或者NULL，则log2explicit采用内置默认值。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1)) from t_data;
     hll_cardinality  
    ------------------
     498.496062953313
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 log2explicit, int64 log2sparse\)

    描述：把哈希后的数据按照分组放到hll中， 依次指定参数log2m、log2explicit、log2sparse。，log2sparse取值范围是0到14，0表示直接跳过Sparse模式。该参数可以用来设置Sparse模式的阈值大小，在数据段长度达到2<sup>log2sparse</sup>后切换为Full模式。若输入-1或者NULL，则log2sparse采用内置默认值。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 6, 10)) from t_data;
     hll_cardinality  
    ------------------
     498.496062953313
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 log2explicit, int64 log2sparse, int32 duplicatecheck\)

    描述：把哈希后的数据按照分组放到hll中, 依次制定参数log2m、log2explicit、log2sparse、duplicatecheck，duplicatecheck取值范围是0或者1，表示是否开启该模式，默认情况下该模式会关闭。若输入-1或者NULL，则duplicatecheck采用内置默认值。

    返回值类型：hll

    示例：

    ```
    openGauss=# select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 6, 10, -1)) from t_data;
     hll_cardinality  
    ------------------
     498.496062953313
    (1 row)
    ```

-   hll\_union\_agg\(hll\)

    描述：将多个hll类型数据union成一个hll。

    返回值类型：hll

    示例：

    ```
    --将各组中的hll数据union成一个hll，并计算distinct值。
    openGauss=# select #hll_union_agg(c) as cardinality from t_a_c_hll;
       cardinality    
    ------------------
     498.496062953313
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >注意：当两个或者多个hll数据结构做union的时候，必须要保证其中每一个hll里面的精度参数一样，否则将不可以进行union。同样的约束也适用于函数hll\_union\(hll,hll\)。


## 废弃函数<a name="section34169941512"></a>

由于版本升级，HLL（HyperLogLog）有一些旧的函数废弃，用户可以用类似的函数进行替代。

-   hll\_schema\_version\(hll\)

    描述：查看当前hll中的schema version。旧版本schema version是常值1，用来进行hll字段的头部校验，重构后的hll在头部增加字段“HLL”进行校验，schema version不再使用。

-   hll\_regwidth\(hll\)

    描述：查看hll数据结构中桶的位数大小。旧版本桶的位数regwidth取值1\~5，会存在较大的误差，也限制了基数估计上限。 重构后regwidth为固定值6，不再使用regwidth变量。

-   hll\_expthresh\(hll\)

    描述：得到当前hll中expthresh大小。采用hll\_log2explicit\(hll\)替代类似功能。

-   hll\_sparseon\(hll\)

    描述：是否启用Sparse模式。采用hll\_log2sparse\(hll\)替代类似功能，0表示关闭Sparse模式。


## 内置函数<a name="section17632057105518"></a>

HLL（HyperLogLog）有一系列内置函数用于内部对数据进行处理，一般情况下用户不需要熟知这些函数的使用。详情见[表1](#table763375795510)。

**表 1**  内置函数

<a name="table763375795510"></a>
<table><thead align="left"><tr id="row0633157195515"><th class="cellrowborder" valign="top" width="24.48%" id="mcps1.2.3.1.1"><p id="p2633195745519"><a name="p2633195745519"></a><a name="p2633195745519"></a>函数名称</p>
</th>
<th class="cellrowborder" valign="top" width="75.52%" id="mcps1.2.3.1.2"><p id="p3633195765513"><a name="p3633195765513"></a><a name="p3633195765513"></a>功能描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row363318574552"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p156331157175510"><a name="p156331157175510"></a><a name="p156331157175510"></a>hll_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p36331257165516"><a name="p36331257165516"></a><a name="p36331257165516"></a>以string格式接收hll数据。</p>
</td>
</tr>
<tr id="row7633257175513"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p863319577550"><a name="p863319577550"></a><a name="p863319577550"></a>hll_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p9633135713551"><a name="p9633135713551"></a><a name="p9633135713551"></a>以string格式发送hll数据。</p>
</td>
</tr>
<tr id="row13633357185510"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p6633205735517"><a name="p6633205735517"></a><a name="p6633205735517"></a>hll_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p8633195719557"><a name="p8633195719557"></a><a name="p8633195719557"></a>以bytea格式接收hll数据。</p>
</td>
</tr>
<tr id="row6633115717557"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p18633357135519"><a name="p18633357135519"></a><a name="p18633357135519"></a>hll_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p18633757195520"><a name="p18633757195520"></a><a name="p18633757195520"></a>以bytea格式发送hll数据。</p>
</td>
</tr>
<tr id="row56331257135518"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p13633185710554"><a name="p13633185710554"></a><a name="p13633185710554"></a>hll_trans_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p6633135705518"><a name="p6633135705518"></a><a name="p6633135705518"></a>以string格式接收hll_trans_type数据。</p>
</td>
</tr>
<tr id="row1963415711554"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p5634205715554"><a name="p5634205715554"></a><a name="p5634205715554"></a>hll_trans_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1063455716559"><a name="p1063455716559"></a><a name="p1063455716559"></a>以string格式发送hll_trans_type数据。</p>
</td>
</tr>
<tr id="row106348577552"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p06345571556"><a name="p06345571556"></a><a name="p06345571556"></a>hll_trans_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p106341357205517"><a name="p106341357205517"></a><a name="p106341357205517"></a>以bytea形式接收hll_trans_type数据。</p>
</td>
</tr>
<tr id="row12634115718556"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p0634257125520"><a name="p0634257125520"></a><a name="p0634257125520"></a>hll_trans_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p063419574551"><a name="p063419574551"></a><a name="p063419574551"></a>以bytea形式发送hll_trans_type数据。</p>
</td>
</tr>
<tr id="row14634195775514"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p16341957205513"><a name="p16341957205513"></a><a name="p16341957205513"></a>hll_typmod_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p3634195775512"><a name="p3634195775512"></a><a name="p3634195775512"></a>接收typmod类型数据。</p>
</td>
</tr>
<tr id="row1263411572552"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1663455715558"><a name="p1663455715558"></a><a name="p1663455715558"></a>hll_typmod_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1563495719553"><a name="p1563495719553"></a><a name="p1563495719553"></a>发送typmod类型数据。</p>
</td>
</tr>
<tr id="row563412576555"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p166351857145518"><a name="p166351857145518"></a><a name="p166351857145518"></a>hll_hashval_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p163595715516"><a name="p163595715516"></a><a name="p163595715516"></a>接收hll_hashval类型数据。</p>
</td>
</tr>
<tr id="row0635657175517"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p14635185716552"><a name="p14635185716552"></a><a name="p14635185716552"></a>hll_hashval_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p13635857115513"><a name="p13635857115513"></a><a name="p13635857115513"></a>发送hll_hashval类型数据。</p>
</td>
</tr>
<tr id="row3636185719550"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p206361757145510"><a name="p206361757145510"></a><a name="p206361757145510"></a>hll_add_trans0</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p7636857125517"><a name="p7636857125517"></a><a name="p7636857125517"></a>类似于hll_add所提供的功能，初始化时无指定入参，通常在聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row176361357125520"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p13636105715556"><a name="p13636105715556"></a><a name="p13636105715556"></a>hll_add_trans1</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p196361576559"><a name="p196361576559"></a><a name="p196361576559"></a>类似于hll_add所提供的功能，初始化时指定一个入参，通常在聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row363635755513"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p186361957105517"><a name="p186361957105517"></a><a name="p186361957105517"></a>hll_add_trans2</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p10636145715554"><a name="p10636145715554"></a><a name="p10636145715554"></a>类似于hll_add所提供的功能，初始化时指定两个入参，通常在聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row14636135795519"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p11636195725515"><a name="p11636195725515"></a><a name="p11636195725515"></a>hll_add_trans3</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p18636357155517"><a name="p18636357155517"></a><a name="p18636357155517"></a>类似于hll_add所提供的功能，初始化时指定三个入参，通常在聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row463645719553"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p563655710554"><a name="p563655710554"></a><a name="p563655710554"></a>hll_add_trans4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p11637145755512"><a name="p11637145755512"></a><a name="p11637145755512"></a>类似于hll_add所提供的功能，初始化时指定四个入参，通常在聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row116371157145510"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1363785719555"><a name="p1363785719555"></a><a name="p1363785719555"></a>hll_union_trans</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p66373575550"><a name="p66373575550"></a><a name="p66373575550"></a>类似hll_union所提供的功能，在聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row063725795518"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p14637195755519"><a name="p14637195755519"></a><a name="p14637195755519"></a>hll_union_collect</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1163755785517"><a name="p1163755785517"></a><a name="p1163755785517"></a>类似于hll_union所提供的功能，在聚合运算第二阶段DN上使用，汇总各个DN上的结果。</p>
</td>
</tr>
<tr id="row2063775765512"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1863718579555"><a name="p1863718579555"></a><a name="p1863718579555"></a>hll_pack</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1463717579551"><a name="p1463717579551"></a><a name="p1463717579551"></a>在聚合运算第三阶段DN上使用，把自定义hll_trans_type类型最后转换成hll类型。</p>
</td>
</tr>
<tr id="row66371957195511"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p116371857105518"><a name="p116371857105518"></a><a name="p116371857105518"></a>hll</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p15637757145512"><a name="p15637757145512"></a><a name="p15637757145512"></a>用于hll类型转换成hll类型，根据输入参数会设定指定参数。</p>
</td>
</tr>
<tr id="row156371057155513"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p15637175711552"><a name="p15637175711552"></a><a name="p15637175711552"></a>hll_hashval</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p15637257155510"><a name="p15637257155510"></a><a name="p15637257155510"></a>用于bigint类型转换成hll_hashval类型。</p>
</td>
</tr>
<tr id="row14637657115514"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p863795711555"><a name="p863795711555"></a><a name="p863795711555"></a>hll_hashval_int4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p146371657205510"><a name="p146371657205510"></a><a name="p146371657205510"></a>用于int4类型转换成hll_hashval类型。</p>
</td>
</tr>
</tbody>
</table>

## 操作符<a name="section18638145795518"></a>

-   =

    描述：比较hll或hll\_hashval的值是否相等。

    返回值类型：bool

    示例：

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

    描述：比较hll或hll\_hashval是否不相等。

    返回值类型：bool

    示例：

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

    描述：可代表hll\_add, hll\_union, hll\_add\_rev三个函数的功能。

    返回值类型：hll

    示例：

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

    描述：计算出hll的Dintinct值, 同hll\_cardinality函数。

    返回值类型：int

    示例：

    ```
    openGauss=# select #(hll_empty() || hll_hash_integer(1));
     ?column? 
    ----------
            1
    (1 row)
    ```


