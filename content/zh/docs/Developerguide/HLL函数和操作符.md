# HLL函数和操作符<a name="ZH-CN_TOPIC_0309006541"></a>

## 哈希函数<a name="section432010211209"></a>

-   hll\_hash\_boolean\(bool\)

    描述：对bool类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_boolean(FALSE);
      hll_hash_boolean   
    ---------------------
     5048724184180415669
    (1 row)
    ```


-   hll\_hash\_boolean\(bool, int32\)

    描述：设置hash seed（即改变哈希策略）并对bool类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_boolean(FALSE, 10);
      hll_hash_boolean  
    --------------------
     391264977436098630
    (1 row)
    ```

-   hll\_hash\_smallint\(smallint\)

    描述：对smallint类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_smallint(100::smallint);
      hll_hash_smallint  
    ---------------------
     4631120266694327276
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **说明：** 
>数值大小相同的参数使用不同数据类型的哈希函数计算，最后结果会不一样，因为不同类型哈希函数会选取不同的哈希计算策略。

-   hll\_hash\_smallint\(smallint, int32\)

    描述：设置hash seed（即改变哈希策略）同时对smallint类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_smallint(100::smallint, 10);
      hll_hash_smallint  
    ---------------------
     8349353095166695771
    (1 row)
    ```

-   hll\_hash\_integer\(integer\)

    描述：对integer类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_integer(0);
       hll_hash_integer   
    ----------------------
     -3485513579396041028
    (1 row)
    ```

-   hll\_hash\_integer\(integer, int32\)

    描述：对integer类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_integer(0, 10);
      hll_hash_integer  
    --------------------
     183371090322255134
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint\)

    描述：对bigint类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_bigint(100::bigint);
       hll_hash_bigint   
    ---------------------
     8349353095166695771
    (1 row)
    ```

-   hll\_hash\_bigint\(bigint, int32\)

    描述：对bigint类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_bigint(100::bigint, 10);
       hll_hash_bigint   
    ---------------------
     4631120266694327276
    (1 row)
    ```

-   hll\_hash\_bytea\(bytea\)

    描述：对bytea类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_bytea(E'\\x');
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
    postgres=# SELECT hll_hash_bytea(E'\\x', 10);
       hll_hash_bytea    
    ---------------------
     6574525721897061910
    (1 row)
    ```

-   hll\_hash\_text\(text\)

    描述：对text类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_text('AB');
        hll_hash_text    
    ---------------------
     5365230931951287672
    (1 row)
    ```

-   hll\_hash\_text\(text, int32\)

    描述：对text类型数据计算哈希值, 并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# SELECT hll_hash_text('AB', 10);
    hll_hash_text
    ---------------------
    7680762839921155903
    (1 row)
    ```

-   hll\_hash\_any\(anytype\)

    描述：对任意类型数据计算哈希值。

    返回值类型：hll\_hashval

    示例：

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

    描述：对任意类型数据计算哈希值，并设置hashseed（即改变哈希策略）。

    返回值类型：hll\_hashval

    示例：

    ```
    postgres=# select hll_hash_any(1, 10);
         hll_hash_any     
    ----------------------
     -1478847531811254870
    (1 row)
    ```

-   hll\_hashval\_eq\(hll\_hashval, hll\_hashval\)

    描述：比较两个hll\_hashval类型数据是否相等。

    返回值类型：bool

    示例：

    ```
    postgres=# select hll_hashval_eq(hll_hash_integer(1), hll_hash_integer(1));
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
    postgres=# select hll_hashval_ne(hll_hash_integer(1), hll_hash_integer(1));
     hll_hashval_ne 
    ----------------
     f
    (1 row)
    ```


## 精度函数<a name="section1615145915110"></a>

HLL（HyperLogLog）主要存在三种模式Explicit，Sparse，Full。当数据规模比较小的时候会使用Explicit模式和Sparse模式， 这两种模式在计算结果上基本上没有误差。 随着distinct值越来越多，就会转换成Full模式，但结果也会存在一定误差。下列函数用于查看HLL中精度参数。

-   hll\_schema\_version\(hll\)

    描述：查看当前hll中的schema version。

    示例：

    ```
    postgres=# select hll_schema_version(hll_empty());
     hll_schema_version 
    --------------------
               1
    (1 row)
    ```

-   hll\_type\(hll\)

    描述：查看当前hll的类型。

    示例：

    ```
    postgres=# select hll_type(hll_empty());
     hll_type 
    ----------
            1
    (1 row)
    ```

-   hll\_log2m\(hll\)

    描述：查看当前hll的log2m数值，此值会影响最后hll计算distinct误差率，误差率计算公式为±1.04/√\(2 ^ log2m\)。

    示例：

    ```
    postgres=# select hll_log2m(hll_empty());
     hll_log2m 
    -----------
            11
    (1 row)
    ```

-   hll\_regwidth\(hll\)

    描述：查看hll数据结构中桶的位数大小。

    示例：

    ```
    postgres=# select hll_regwidth(hll_empty());
     hll_regwidth 
    --------------
            5
    (1 row)
    ```

-   hll\_expthresh\(hll\)

    描述：得到当前hll中expthresh大小，hll通常会由Explicit模式到Sparse模式再到Full模式，这个过程称为promotion hierarchy策略。可以通过调整expthresh值的大小改变策略，比如expthresh为0的时候就会跳过Explicit模式而直接进入Sparse模式。当显式指定expthresh的取值为1-7之间时，该函数得到的是 2<sup>expthresh</sup>。

    示例：

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

    描述：是否启用sparse模式，0是关闭，1是开启。

    示例：

    ```
    postgres=# select hll_sparseon(hll_empty());
     hll_sparseon 
    --------------
            1
    (1 row)
    ```


## 聚合函数<a name="section52621914536"></a>

-   hll\_add\_agg\(hll\_hashval\)

    描述：把哈希后的数据按照分组放到hll中。

    返回值类型：hll

    示例：

    ```
    --准备数据
    postgres=# create table t_id(id int);
    postgres=# insert into t_id values(generate_series(1,500));
    postgres=# create table t_data(a int, c text);
    postgres=# insert into t_data select mod(id,2), id from t_id;
    
    --创建表并指定列为hll
    postgres=# create table t_a_c_hll(a int, c hll);
    
    --根据a列group by对数据分组，把各组数据加到hll中
    postgres=# insert into t_a_c_hll select a, hll_add_agg(hll_hash_text(c)) from t_data group by a;
    
    --得到每组数据中hll的Distinct值
    postgres=# select a, #c as cardinality from t_a_c_hll order by a;
     a |   cardinality    
    ---+------------------
     0 | 250.741759091658
     1 | 250.741759091658
    (2 rows)
    ```


-   hll\_add\_agg\(hll\_hashval, int32 log2m\)

    描述：把哈希后的数据按照分组放到hll中。 并指定参数log2m，取值范围是10到16。

    返回值类型：hll

    示例：

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), 10)) from t_data;
     hll_cardinality  
    ------------------
     503.932348927339
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 regwidth\)

    描述：把哈希后的数据按照分组放到hll中。依次制定参数log2m， regwidth。 regwidth取值范围是1到5。

    返回值类型：hll

    示例：

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1)) from t_data;
     hll_cardinality  
    ------------------
     496.628982624022
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 regwidth, int64 expthresh\)

    描述：把哈希后的数据按照分组放到hll中, 依次指定参数log2m、regwidth、expthresh。expthresh的取值范围是-1-7之间的整数，该参数可以用来设置从Explicit模式到Sparse模式的阈值大小。-1表示自动模式，0表示跳过Explicit模式，取1-7表示在基数到达 2<sup>expthresh</sup>时切换模式。

    返回值类型：hll

    示例：

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1, 4)) from t_data;
     hll_cardinality  
    ------------------
     496.628982624022
    (1 row)
    ```

-   hll\_add\_agg\(hll\_hashval, int32 log2m, int32 regwidth, int64 expthresh, int32 sparseon\)

    描述：把哈希后的数据按照分组放到hll中, 依次制定参数log2m、regwidth、expthresh、sparseon，sparseon取值范围是0或者1。

    返回值类型：hll

    示例：

    ```
    postgres=# Select hll_cardinality(hll_add_agg(hll_hash_text(c), NULL, 1, 4, 0)) from t_data;
     hll_cardinality  
    ------------------
     496.628982624022
    (1 row)
    ```

-   hll\_union\_agg\(hll\)

    描述：将多个hll类型数据union成一个hll。

    返回值类型：hll

    示例：

    ```
    --将各组中的hll数据union成一个hll，并计算distinct值。
    postgres=# select #hll_union_agg(c) as cardinality from t_a_c_hll;
       cardinality    
    ------------------
     496.628982624022
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >注意：当两个或者多个hll数据结构做union的时候，必须要保证其中每一个hll里面的精度参数一样，否则将不可以进行union。同样的约束也适用于函数hll\_union\(hll,hll\)。


## 功能函数<a name="section17355134113311"></a>

-   hll\_print\(hll\)

    描述：打印hll的一些debug参数信息。

    示例：

    ```
    postgres=# select hll_print(hll_empty());
                             hll_print                         
    -----------------------------------------------------------
     EMPTY, nregs=2048, nbits=5, expthresh=-1(160), sparseon=1gongne
    (1 row)
    ```


-   hll\_empty\(\)

    描述：创建一个空的hll。

    返回值类型：hll

    示例：

    ```
    postgres=# select hll_empty();
     hll_empty 
    -----------
     \x118b7f
    (1 row)
    ```

-   hll\_empty\(int32 log2m\)

    描述：创建空的hll并指定参数log2m，取值范围是10到16。

    返回值类型:   hll

    示例：

    ```
    postgres=#  select hll_empty(10);
     hll_empty 
    -----------
     \x118a7f
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 regwidth\)

    描述：创建空的hll并依次指定参数log2m、regwidth。regwidth取值范围是1到5。

    返回值类型:   hll

    示例：

    ```
    postgres=# select hll_empty(10, 4);
     hll_empty 
    -----------
     \x116a7f
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 regwidth, int64 expthresh\)

    描述：创建空的hll并依次指定参数log2m、regwidth、expthresh。expthresh取值范围是-1到7之间的整数。该参数可以用来设置从Explicit模式到Sparse模式的阈值大小。-1表示自动模式，0表示跳过Explicit模式，取1-7表示在基数到达2<sup>expthresh</sup>时切换模式。

    返回值类型：hll

    示例：

    ```
    postgres=#  select hll_empty(10, 4, 7);
     hll_empty 
    -----------
     \x116a48
    (1 row)
    ```

-   hll\_empty\(int32 log2m, int32 regwidth, int64 expthresh, int32 sparseon\)

    描述：创建空的hll并依次指定参数log2m、regwidth、expthresh、sparseon。sparseon取0或者1。

    返回值类型：hll

    示例：

    ```
    postgres=# select hll_empty(10,4,7,0);
     hll_empty 
    -----------
     \x116a08
    (1 row)
    ```

-   hll\_add\(hll, hll\_hashval\)

    描述：把hll\_hashval加入到hll中。

    返回值类型：hll

    示例：

    ```
    postgres=# select hll_add(hll_empty(), hll_hash_integer(1));
             hll_add          
    --------------------------
     \x128b7f8895a3f5af28cafe
    (1 row)
    ```

-   hll\_add\_rev\(hll\_hashval, hll\)

    描述：把hll\_hashval加入到hll中，和hll\_add功能一样，只是参数位置进行了交换。

    返回值类型：hll

    示例：

    ```
    postgres=# select hll_add_rev(hll_hash_integer(1), hll_empty());
           hll_add_rev        
    --------------------------
     \x128b7f8895a3f5af28cafe
    (1 row)
    ```

-   hll\_eq\(hll, hll\)

    描述：比较两个hll是否相等。

    返回值类型：bool

    示例：

    ```
    postgres=# select hll_eq(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
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
    postgres=# select hll_ne(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
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
    postgres=# select hll_cardinality(hll_empty() || hll_hash_integer(1));
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
    postgres=# select hll_union(hll_add(hll_empty(), hll_hash_integer(1)), hll_add(hll_empty(), hll_hash_integer(2)));
                    hll_union                 
    ------------------------------------------
     \x128b7f8895a3f5af28cafeda0ce907e4355b60
    (1 row)
    ```


## 内置函数<a name="section121531551417"></a>

HLL（HyperLogLog）有一系列内置函数用于内部对数据进行处理，一般情况下用户不需要熟知这些函数的使用。详情见[表1](#table47911935194712)。

**表 1**  内置函数

<a name="table47911935194712"></a>
<table><thead align="left"><tr id="row77911435104713"><th class="cellrowborder" valign="top" width="24.48%" id="mcps1.2.3.1.1"><p id="p2791143544719"><a name="p2791143544719"></a><a name="p2791143544719"></a>函数名称</p>
</th>
<th class="cellrowborder" valign="top" width="75.52%" id="mcps1.2.3.1.2"><p id="p9791835174713"><a name="p9791835174713"></a><a name="p9791835174713"></a>功能描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1879183513479"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1179193510478"><a name="p1179193510478"></a><a name="p1179193510478"></a>hll_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1979119357477"><a name="p1979119357477"></a><a name="p1979119357477"></a>以string格式接收hll数据。</p>
</td>
</tr>
<tr id="row1479111356473"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p279183512474"><a name="p279183512474"></a><a name="p279183512474"></a>hll_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p3791143534720"><a name="p3791143534720"></a><a name="p3791143534720"></a>以string格式发送hll数据。</p>
</td>
</tr>
<tr id="row17791143519475"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p179143534719"><a name="p179143534719"></a><a name="p179143534719"></a>hll_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p19791133504717"><a name="p19791133504717"></a><a name="p19791133504717"></a>以bytea格式接收hll数据。</p>
</td>
</tr>
<tr id="row37911735174717"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p579113584717"><a name="p579113584717"></a><a name="p579113584717"></a>hll_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p27911635154716"><a name="p27911635154716"></a><a name="p27911635154716"></a>以bytea格式发送hll数据。</p>
</td>
</tr>
<tr id="row1079119355476"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p879173514479"><a name="p879173514479"></a><a name="p879173514479"></a>hll_trans_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1479112358470"><a name="p1479112358470"></a><a name="p1479112358470"></a>以string格式接收hll_trans_type数据。</p>
</td>
</tr>
<tr id="row1679111357471"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p19791103544713"><a name="p19791103544713"></a><a name="p19791103544713"></a>hll_trans_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p379103574716"><a name="p379103574716"></a><a name="p379103574716"></a>以string格式发送hll_trans_type数据。</p>
</td>
</tr>
<tr id="row279110357470"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p379193517476"><a name="p379193517476"></a><a name="p379193517476"></a>hll_trans_recv</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p187911359479"><a name="p187911359479"></a><a name="p187911359479"></a>以bytea形式接收hll_trans_type数据。</p>
</td>
</tr>
<tr id="row1679123516479"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1579193513473"><a name="p1579193513473"></a><a name="p1579193513473"></a>hll_trans_send</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p4791235144715"><a name="p4791235144715"></a><a name="p4791235144715"></a>以bytea形式发送hll_trans_type数据。</p>
</td>
</tr>
<tr id="row10791193515474"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p13791103513474"><a name="p13791103513474"></a><a name="p13791103513474"></a>hll_typmod_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p7791835124712"><a name="p7791835124712"></a><a name="p7791835124712"></a>接收typmod类型数据。</p>
</td>
</tr>
<tr id="row167911235114720"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1791123516471"><a name="p1791123516471"></a><a name="p1791123516471"></a>hll_typmod_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p17918354472"><a name="p17918354472"></a><a name="p17918354472"></a>发送typmod类型数据。</p>
</td>
</tr>
<tr id="row20791193513473"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p117911835204715"><a name="p117911835204715"></a><a name="p117911835204715"></a>hll_hashval_in</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p1779111354473"><a name="p1779111354473"></a><a name="p1779111354473"></a>接收hll_hashval类型数据。</p>
</td>
</tr>
<tr id="row13791173594711"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p167911235154711"><a name="p167911235154711"></a><a name="p167911235154711"></a>hll_hashval_out</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p4791163594716"><a name="p4791163594716"></a><a name="p4791163594716"></a>发送hll_hashval类型数据。</p>
</td>
</tr>
<tr id="row9791435194716"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p18791335114717"><a name="p18791335114717"></a><a name="p18791335114717"></a>hll_add_trans0</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p117915355473"><a name="p117915355473"></a><a name="p117915355473"></a>类似于hll_add所提供的功能，通常在分布式聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row1651225020371"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p4267123714380"><a name="p4267123714380"></a><a name="p4267123714380"></a>hll_add_trans1</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p135133503373"><a name="p135133503373"></a><a name="p135133503373"></a>类似于hll_add所提供的功能，通常在分布式聚合运算的第二阶段DN上使用。</p>
</td>
</tr>
<tr id="row26442012183810"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1644112173813"><a name="p1644112173813"></a><a name="p1644112173813"></a>hll_add_trans2</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p76440122382"><a name="p76440122382"></a><a name="p76440122382"></a>类似于hll_add所提供的功能，通常在分布式聚合运算的第三阶段DN上使用。</p>
</td>
</tr>
<tr id="row10405182173810"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p540515217383"><a name="p540515217383"></a><a name="p540515217383"></a>hll_add_trans3</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p34058216383"><a name="p34058216383"></a><a name="p34058216383"></a>类似于hll_add所提供的功能，通常在分布式聚合运算的第四阶段DN上使用。</p>
</td>
</tr>
<tr id="row08671457153711"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p14749185195619"><a name="p14749185195619"></a><a name="p14749185195619"></a>hll_add_trans4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p19868205713377"><a name="p19868205713377"></a><a name="p19868205713377"></a>类似于hll_add所提供的功能，通常在分布式聚合运算的第五阶段DN上使用。</p>
</td>
</tr>
<tr id="row12791103520475"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p2791143513476"><a name="p2791143513476"></a><a name="p2791143513476"></a>hll_union_trans</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p7791103544717"><a name="p7791103544717"></a><a name="p7791103544717"></a>类似hll_union所提供的功能，在分布式聚合运算的第一阶段DN上使用。</p>
</td>
</tr>
<tr id="row15791133515478"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1879133524717"><a name="p1879133524717"></a><a name="p1879133524717"></a>hll_union_collect</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p179110357477"><a name="p179110357477"></a><a name="p179110357477"></a>类似于hll_union所提供的功能，在分布式聚合运算第二阶段DN上使用，汇总各个DN上的结果。</p>
</td>
</tr>
<tr id="row47911535164716"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1479111359471"><a name="p1479111359471"></a><a name="p1479111359471"></a>hll_pack</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p579114359471"><a name="p579114359471"></a><a name="p579114359471"></a>在分布式聚合运算第三阶段DN上使用，把自定义hll_trans_type类型最后转换成hll类型。</p>
</td>
</tr>
<tr id="row1179173574716"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p17791635184719"><a name="p17791635184719"></a><a name="p17791635184719"></a>hll</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p879183564713"><a name="p879183564713"></a><a name="p879183564713"></a>用于hll类型转换成hll类型，根据输入参数会设定指定参数。</p>
</td>
</tr>
<tr id="row107913352479"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p879153518477"><a name="p879153518477"></a><a name="p879153518477"></a>hll_hashval</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p67911135194720"><a name="p67911135194720"></a><a name="p67911135194720"></a>用于bigint类型转换成hll_hashval类型。</p>
</td>
</tr>
<tr id="row14791143519470"><td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.3.1.1 "><p id="p1079123544713"><a name="p1079123544713"></a><a name="p1079123544713"></a>hll_hashval_int4</p>
</td>
<td class="cellrowborder" valign="top" width="75.52%" headers="mcps1.2.3.1.2 "><p id="p279110352479"><a name="p279110352479"></a><a name="p279110352479"></a>用于int4类型转换成hll_hashval类型。</p>
</td>
</tr>
</tbody>
</table>

## 操作符<a name="section0622234841"></a>

-   =

    描述：比较hll或hll\_hashval的值是否相等。

    返回值类型：bool

    示例：

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

    描述：比较hll或hll\_hashval是否不相等。

    返回值类型：bool

    示例：

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

    描述：可代表hll\_add, hll\_union, hll\_add\_rev三个函数的功能。

    返回值类型：hll

    示例：

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

    描述：计算出hll的Dintinct值, 同hll\_cardinality函数。

    返回值类型：int

    示例：

    ```
    postgres=# select #(hll_empty() || hll_hash_integer(1));
     ?column? 
    ----------
            1
    (1 row)
    ```


