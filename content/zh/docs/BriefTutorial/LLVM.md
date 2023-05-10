# LLVM

openGauss借助LLVM（Low Level Virtual Machine）提供的库函数，依据查询执行计划树，将原本在执行器阶段才会确定查询实际执行路径的过程提前到执行初始化阶段，从而规避原本查询执行时候伴随的函数调用、逻辑条件分支判断以及大量的数据读取等问题，以达到提升查询性能的目的。

LLVM动态编译技术可以为每个查询生成定制化的机器码用于替换原本的通用函数。通过减少实际查询时冗余的条件逻辑判断、虚函数调用并提高数据局域性，从而达到提升查询整体性能的目的。

由于LLVM需要消耗额外的时间预生成IR中间态表示并编译成机器码，因此在小数据量场景或查询本身耗时较少时，可能引起性能的劣化。

## 适用场景<a name="zh-cn_topic_0283137499_zh-cn_topic_0237121504_zh-cn_topic_0066033419_section279430195545"></a>

-   支持LLVM的表达式

    查询语句中存在以下的表达式支持LLVM优化：

    1.  Case…when… 表达式
    2.  In表达式
    3.  Bool表达式
        -   And
        -   Or
        -   Not

    4.  BooleanTest表达式
        -   IS\_NOT\_UNKNOWN：对应SQL语句IS NOT UNKNOWN
        -   IS\_UNKNOWN：对应SQL语句IS UNKNOWN
        -   IS\_TRUE：对应SQL语句IS TRUE
        -   IS\_NOT\_TRUE：对应SQL语句IS NOT TRUE
        -   IS\_FALSE：对应SQL语句IS FALSE
        -   IS\_NOT\_FALSE：对应SQL语句IS NOT FALSE

    5.  NullTest表达式
        -   IS\_NOT\_NULL
        -   IS\_NULL

    6.  Operator表达式
    7.  Function表达式
        -   lpad
        -   substring
        -   btrim
        -   rtrim
        -   length

    8.  Nullif表达式

    表达式计算支持的数据类型包括bool, tinyint, smallint, int, bigint, float4, float8, numeric, date, time, timetz, timestamp, timestamptz, interval, bpchar, varchar, text, oid。

    仅当表达式出现在向量化执行引擎中Scan节点的filter、Hash Join节点中的complicate hash condition、hash join filter、hash join target,  Nested Loop节点中的filter、join filter, Merge Join节点的merge join filter, merge join target,  Group节点中的filter表达式时，才会考虑是否使用LLVM动态编译优化。

-   支持LLVM的算子：

    1.  Join ：HashJoin
    2.  Agg ：HashAgg
    3.  Sort

    其中HashJoin算子仅支持Hash Inner Join，对应的hash cond仅支持int4、bigint、bpchar类型的比较；HashAgg算子仅支持针对bigint、numeric类型的sum及avg操作，且group by语句仅支持int4、bigint、bpchar，text，varchar，timestamp类型操作，同时支持count\(\*\)聚集操作。Sort算子仅支持对int4，bigint，numeric，bpchar，text，varchar数据类型的比较操作。除此之外，无法使用LLVM动态编译优化，具体可通过explain performance工具进行显示。


## 非适用场景<a name="zh-cn_topic_0283137499_zh-cn_topic_0237121504_zh-cn_topic_0066033419_section316931181001"></a>

-   不支持小数据量表使用LLVM动态编译优化。
-   不支持生成非向量化执行路径的查询作业。

## 其他因素对LLVM性能的影响<a name="section8556103715396"></a>

LLVM优化效果不仅依赖于数据库内部具体的实现，还与当前所选择的硬件环境等有关。

-   表达式调用C-函数个数

    数据库内部针对表达式计算并未实现全codegen，即在整个表达式计算中部分表达式实现了codegen，部分直接调用原本的C代码。如果整个表达式计算中后者占据了主要部分，使用LLVM动态编译优化，可能会导致性能劣化。通过设置log\_min\_message的级别为DEBUG1可以查看到哪些表达式直接调用了C代码实现。

-   内存资源

    LLVM特性的一个重要思想是保障数据的局域特性，即数据应尽可能的存放在寄存器中。同时应减少数据加载，因此在使用LLVM优化时应设置足够大的work\_mem，保证对应使用LLVM优化的执行代码整个过程在内存中实现，否则可能引起性能劣化。

-   优化器代价估算

    LLVM特性实现了简易的代价估算模型，即依据当前参与节点运算的表大小决定当前节点是否考虑使用LLVM动态编译优化。如果优化器低估了实际参与运算的行数，则原本可获得收益的未正常获得收益。反之亦然。


## LLVM使用建议<a name="section9635192534019"></a>

目前LLVM在数据库内核侧已默认打开，用户可结合上述的分析进行配置，总体建议如下：

1.  设置合理的work\_mem，在允许的条件下尽可能设置较大的work\_mem，如果出现大量下盘，则建议关闭LLVM动态编译优化\(通过设置enable\_codegen=off实现\)。
2.  设置合理的codegen\_cost\_threshold\(默认值为10000\)，确保小数据量场景下避免使用LLVM动态编译优化。当codegen\_cost\_threshold的值设定后，因使用LLVM动态编译优化引入性能劣化，则建议增加codegen\_cost\_threshold的取值。
3.  对于表达式计算使用LLVM动态编译优化，如果存在大量的调用C-函数的场景，建议关闭LLVM动态编译优化。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >在资源许可的情况下，数据量越大，可获得的性能提升效果越好。


