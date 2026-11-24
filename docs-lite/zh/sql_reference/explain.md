# EXPLAIN<a name="ZH-CN_TOPIC_0289900742"></a>

## 功能描述<a name="zh-cn_topic_0283136728_zh-cn_topic_0237122163_zh-cn_topic_0059777774_sd22ce4e4c8c14244afb6492e84f92d80"></a>

显示SQL语句的执行计划。

执行计划将显示SQL语句所引用的表会采用什么样的扫描方式，如：简单的顺序扫描、索引扫描等。如果引用了多个表，执行计划还会显示用到的JOIN算法。

执行计划的最关键的部分是语句的预计执行开销，这是计划生成器估算执行该语句将花费多长的时间。

若指定了ANALYZE选项，则该语句会被执行，然后根据实际的运行结果显示统计数据，包括每个计划节点内时间总开销（毫秒为单位）和实际返回的总行数。这对于判断计划生成器的估计是否接近现实非常有用。

若指定了NORMALIZED选项，将额外显示语句归一化后的SQL文本、Unique SQL ID以及归一化后的参数值，执行计划本身与普通EXPLAIN一致。若指定了GENERIC_PLAN选项，则会将语句中的常量或问号（`?`）占位符统一转换为参数，生成与具体参数值无关的通用执行计划。

## 注意事项<a name="zh-cn_topic_0283136728_zh-cn_topic_0237122163_zh-cn_topic_0059777774_s9667906bf0d748b38b576a8e40549816"></a>

- 在指定ANALYZE选项时，语句会被执行。如果用户想使用EXPLAIN分析INSERT，UPDATE，DELETE，CREATE TABLE AS或EXECUTE语句，而不想改动数据（执行这些语句会影响数据），请使用如下方法。

    ```
    START TRANSACTION;
    EXPLAIN ANALYZE ...;
    ROLLBACK;
    ```

- 由于参数DETAIL，NODES，NUM\_NODES是分布式模式下的功能，在单机模式中是被禁止使用的。假如使用，会产生如下错误。

    ```
    openGauss=# create table student(id int, name char(20));
    CREATE TABLE
    openGauss=# explain (nodes true) insert into student values(5,'a'),(6,'b');
    ERROR:  unrecognized EXPLAIN option "nodes"
    openGauss=# explain (num_nodes true) insert into student values(5,'a'),(6,'b');
    ERROR:  unrecognized EXPLAIN option "num_nodes"
    ```

- NORMALIZED与GENERIC_PLAN不能同时使用，GENERIC_PLAN也不能与ANALYZE同时使用，否则分别报错如下。

    ```
    openGauss=# explain (normalized, generic_plan) select * from student;
    ERROR:  EXPLAIN option GENERIC_PLAN cannot be used together with NORMALIZED
    openGauss=# explain (generic_plan, analyze) select * from student;
    ERROR:  EXPLAIN option GENERIC_PLAN is not supported with ANALYZE
    ```

- NORMALIZED仅影响输出内容，不会对语句做参数化，也不改变执行计划的选择。因此NORMALIZED语句中不能出现未绑定的$N参数（例如$1），否则报错`there is no parameter $1`。

- GENERIC_PLAN输出的执行计划中，常量以$N形式显示；该选项只输出Unique SQL ID，不输出Normalized SQL和Parameter Values。

- 归一化信息（Normalized SQL、Unique SQL ID、Parameter Values）仅在TEXT格式（或explain\_perf\_mode为非normal的性能模式）下输出；使用FORMAT JSON、XML或YAML时只输出执行计划。

- 在EXPLAIN (GENERIC_PLAN)语句中，`?`会被识别为参数占位符，多个`?`按出现顺序依次编号为$1、$2……。此时`?`、`?|`、`?&`、`??`等以`?`命名的操作符在该语句内不可用；字符串常量、注释以及美元引用字符串中的`?`仍作为普通字符处理。

- 同一语句中不能同时使用`?`占位符和$N参数，否则报错。

    ```
    openGauss=# explain (generic_plan) select * from student where id between $1 and ?;
    ERROR:  It is forbidden to use question mark and dollar quoting together.
    ```

- 在B兼容性数据库中，NORMALIZED和GENERIC_PLAN的行为与A兼容性数据库一致。

## 语法格式<a name="zh-cn_topic_0283136728_zh-cn_topic_0237122163_zh-cn_topic_0059777774_sfa16ba6ad51c455aa79e9602a5998838"></a>

- 显示SQL语句的执行计划，支持多种选项，对选项顺序无要求。

    ```
    EXPLAIN [ (  option  [, ...] )  ] statement;
    ```

    其中选项option子句的语法为。

    ```
    ANALYZE [ boolean ] |
        ANALYSE [ boolean ] |
        VERBOSE [ boolean ] |
        COSTS [ boolean ] |
        CPU [ boolean ] |
        DETAIL [ boolean ] |(不可用)
        NODES [ boolean ] |(不可用)
        NUM_NODES [ boolean ] |(不可用)
        BUFFERS [ boolean ] |
        TIMING [ boolean ] |
        PLAN [ boolean ] |
        NORMALIZED [ boolean ] |
        GENERIC_PLAN [ boolean ] |
        FORMAT { TEXT | XML | JSON | YAML }
    ```

- 显示SQL语句的执行计划，且要按顺序给出选项。

    ```
    EXPLAIN  { [  { ANALYZE  | ANALYSE  }  ] [ VERBOSE  ]  | PERFORMANCE  } statement;
    ```

## 参数说明<a name="zh-cn_topic_0283136728_zh-cn_topic_0237122163_zh-cn_topic_0059777774_se66550d2d643408ebe3189e751499cd5"></a>

- **statement**

    指定要分析的SQL语句。

- **ANALYZE boolean | ANALYSE boolean**

    显示实际运行时间和其他统计数据。

    取值范围：

    - TRUE（缺省值）：显示实际运行时间和其他统计数据。
    - FALSE：不显示。

- **VERBOSE boolean**

    显示有关计划的额外信息。

    取值范围：

    - TRUE（缺省值）：显示额外信息。
    - FALSE：不显示。

- **COSTS boolean**

    包括每个规划节点的估计总成本，以及估计的行数和每行的宽度。

    取值范围：

    - TRUE（缺省值）：显示估计总成本和宽度。
    - FALSE：不显示。

- **CPU boolean**

    打印CPU的使用情况的信息。

    取值范围：

    - TRUE（缺省值）：显示CPU的使用情况。
    - FALSE：不显示。

- **DETAIL boolean**（不可用）

    打印数据库节点上的信息。

    取值范围：

    - TRUE（缺省值）：打印数据库节点的信息。
    - FALSE：不打印。

- **NODES boolean**（不可用）

    打印query执行的节点信息。

    取值范围：

    - TRUE（缺省值）：打印执行的节点的信息。
    - FALSE：不打印。

- **NUM\_NODES boolean**（不可用）

    打印执行中的节点的个数信息。

    取值范围：

    - TRUE（缺省值）：打印数据库节点个数的信息。
    - FALSE：不打印。

- **BUFFERS boolean**

    包括缓冲区的使用情况的信息。

    取值范围：

    - TRUE：显示缓冲区的使用情况。
    - FALSE（缺省值）：不显示。

- **TIMING boolean**

    包括实际的启动时间和花费在输出节点上的时间信息。

    取值范围：

    - TRUE（缺省值）：显示启动时间和花费在输出节点上的时间信息。
    - FALSE：不显示。

- **PLAN**

    是否将执行计划存储在plan\_table中。当该选项开启时，会将执行计划存储在PLAN\_TABLE中，不打印到当前屏幕，因此该选项为on时，不能与其他选项同时使用。

    取值范围：

    - ON（缺省值）：将执行计划存储在plan\_table中，不打印到当前屏幕。执行成功返回EXPLAIN SUCCESS。
    - OFF：不存储执行计划，将执行计划打印到当前屏幕。

- **NORMALIZED boolean**

    显示归一化后的SQL文本、Unique SQL ID以及Parameter Values，同时显示与普通EXPLAIN相同的执行计划。归一化后的SQL文本中常量以$N形式表示，Parameter Values给出每个$N对应的实际参数值。

    该选项只影响输出内容，不对语句做参数化，也不改变执行计划的选择；语句中不能出现未绑定的$N参数，否则报错。

    取值范围：

    - TRUE（缺省值）：显示归一化信息和执行计划。
    - FALSE：不显示。

- **GENERIC_PLAN boolean**

    生成通用执行计划。语句中的常量以及`?`占位符会被统一转换为参数，输出与具体参数值无关的执行计划。语句中也可以直接使用$N形式的参数，其参数类型由上下文推导或由客户端指定；自动转换的常量从已有参数编号之后依次编号，不会与$N冲突。

    该选项不能与ANALYZE、NORMALIZED同时使用；其输出中只包含Unique SQL ID，不包含Normalized SQL和Parameter Values。

    取值范围：

    - TRUE（缺省值）：将常量或`?`占位符转换为参数后生成通用执行计划。
    - FALSE：不做转换，按普通EXPLAIN处理。

- **FORMAT**

    指定输出格式。

    取值范围：TEXT，XML，JSON和YAML。

    默认值：TEXT。

- **PERFORMANCE**

    使用此选项时，即打印执行中的所有相关信息。

## 示例<a name="zh-cn_topic_0283136728_zh-cn_topic_0237122163_zh-cn_topic_0059777774_s7175356f914d4ca1954f9c87c4b1e349"></a>

```
-- 1、创建一个表
openGauss=# create table test_t(c1 int, c2 varchar(30));
CREATE TABLE

-- 2、查看 SQL 的执行计划
openGauss=# explain select * from test_t;
                        QUERY PLAN
----------------------------------------------------------
 Seq Scan on test_t  (cost=0.00..17.29 rows=729 width=82)
(1 row)

-- 3、在查看计划时可以指定输出格式
-- 注意：只有当 explain_perf_mode 为 normal 时，才支持 json 格式
openGauss=# SET explain_perf_mode=normal;
SET
openGauss=# explain (format json) select * from test_t;
            QUERY PLAN
----------------------------------
 [                               +
   {                             +
     "Plan": {                   +
       "Node Type": "Seq Scan",  +
       "Relation Name": "test_t",+
       "Alias": "test_t",        +
       "Startup Cost": 0.00,     +
       "Total Cost": 17.29,      +
       "Plan Rows": 729,         +
       "Plan Width": 82          +
     }                           +
   }                             +
 ]
(1 row)

-- 4、如果一个查询中的 where 子句的列有索引，在条件或数据等不一样时，可能会显示不同的执行计划
openGauss=# create index idx_test_t_c1 on test_t(c1);
CREATE INDEX
openGauss=# insert into test_t values(generate_series(1, 200), 'hello openGauss');
INSERT 0 200
openGauss=# explain select c1, c2 from test_t where c1=100;
                                 QUERY PLAN
----------------------------------------------------------------------------
 Bitmap Heap Scan on test_t  (cost=4.28..12.74 rows=4 width=82)
   Recheck Cond: (c1 = 100)
   ->  Bitmap Index Scan on idx_test_t_c1  (cost=0.00..4.28 rows=4 width=0)
         Index Cond: (c1 = 100)
(4 rows)

-- 5、可以通过 costs 选项，指定是否显示开销
openGauss=# explain (costs false) select * from test_t where c1=100;
                QUERY PLAN
------------------------------------------
 Bitmap Heap Scan on test_t
   Recheck Cond: (c1 = 100)
   ->  Bitmap Index Scan on idx_test_t_c1
         Index Cond: (c1 = 100)
(4 rows)

-- 6、查看归一化后的 SQL、Unique SQL ID 和参数值
openGauss=# explain (normalized costs false) select * from test_t where c2 = 'hello openGauss';
                          QUERY PLAN
---------------------------------------------------------------
 Normalized SQL: SELECT * FROM test_t WHERE c2 = $1;
 Unique SQL ID: 1234567890
 Parameter Values: $1 = 'hello openGauss'
 Seq Scan on test_t
   Filter: ((c2)::text = 'hello openGauss'::text)
(5 rows)

-- 7、生成通用执行计划，常量被转换为参数
openGauss=# explain (generic_plan costs false) select * from test_t where c2 = 'hello openGauss';
                        QUERY PLAN
-----------------------------------------------------
 Unique SQL ID: 1234567890
 Seq Scan on test_t
   Filter: ((c2)::text = $1)
(3 rows)

-- 8、在 GENERIC_PLAN 中使用问号占位符
openGauss=# explain (generic_plan costs false) select * from test_t where c2 = ?;
                        QUERY PLAN
-----------------------------------------------------
 Unique SQL ID: 1234567890
 Seq Scan on test_t
   Filter: ((c2)::text = $1)
(3 rows)

```

## 相关链接<a name="zh-cn_topic_0283136728_zh-cn_topic_0237122163_zh-cn_topic_0059777774_scfac1ca9cbb74e3d891c918580e6b393"></a>

[ANALYZE | ANALYSE](analyze_analyse.md)
