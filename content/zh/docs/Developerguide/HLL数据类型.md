# HLL数据类型<a name="ZH-CN_TOPIC_0308951611"></a>

HLL（HyperLoglog）是统计数据集中唯一值个数的高效近似算法。它有着计算速度快、节省空间的特点，不需要直接存储集合本身，而是存储一种名为HLL的数据结构。每当有新数据加入进行统计时，只需要把数据经过哈希计算并插入到HLL中，最后根据HLL就可以得到结果。

HLL与其他算法的比较请参见[表1](#table55621821164213)。

**表 1**  HLL与其他算法比较

<a name="table55621821164213"></a>
<table><thead align="left"><tr id="row145621215428"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1956242111428"><a name="p1956242111428"></a><a name="p1956242111428"></a>项目</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p9562102104217"><a name="p9562102104217"></a><a name="p9562102104217"></a>Sort算法</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p135625217421"><a name="p135625217421"></a><a name="p135625217421"></a>Hash算法</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p2562192111427"><a name="p2562192111427"></a><a name="p2562192111427"></a>HLL</p>
</th>
</tr>
</thead>
<tbody><tr id="row1562321194214"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p556217217422"><a name="p556217217422"></a><a name="p556217217422"></a>时间复杂度</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p55621321114210"><a name="p55621321114210"></a><a name="p55621321114210"></a>O(nlogn)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1556272113423"><a name="p1556272113423"></a><a name="p1556272113423"></a>O(n)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p95621821184211"><a name="p95621821184211"></a><a name="p95621821184211"></a>O(n)</p>
</td>
</tr>
<tr id="row356262120427"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p16562142124210"><a name="p16562142124210"></a><a name="p16562142124210"></a>空间复杂度</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1056282119429"><a name="p1056282119429"></a><a name="p1056282119429"></a>O(n)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p956202117427"><a name="p956202117427"></a><a name="p956202117427"></a>O(n)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p0433175154814"><a name="p0433175154814"></a><a name="p0433175154814"></a>log(logn)</p>
</td>
</tr>
<tr id="row195621221144216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p92131078457"><a name="p92131078457"></a><a name="p92131078457"></a>误差率</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p16562102117426"><a name="p16562102117426"></a><a name="p16562102117426"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p956242112421"><a name="p956242112421"></a><a name="p956242112421"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1956212124216"><a name="p1956212124216"></a><a name="p1956212124216"></a>≈0.8%</p>
</td>
</tr>
<tr id="row156262112426"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p20562182184218"><a name="p20562182184218"></a><a name="p20562182184218"></a>所需存储空间</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p15624217424"><a name="p15624217424"></a><a name="p15624217424"></a>原始数据大小</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p185621621174219"><a name="p185621621174219"></a><a name="p185621621174219"></a>原始数据大小</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1656252110421"><a name="p1656252110421"></a><a name="p1656252110421"></a>默认规格下最大16KB</p>
</td>
</tr>
</tbody>
</table>

HLL在计算速度和所占存储空间上都占优势。在时间复杂度上，Sort算法需要排序至少O\(nlogn\)的时间，虽说Hash算法和HLL一样扫描一次全表O\(n\)的时间就可以得出结果，但是存储空间上，Sort算法和Hash算法都需要先把原始数据存起来再进行统计，会导致存储空间消耗巨大，而对HLL来说不需要存原始数据，只需要维护HLL数据结构，故占用空间有很大的压缩，默认规格下HLL数据结构的最大空间约为16KB。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>-   当前默认规格下可计算最大distinct值的数量约为1.1e+15个，误差率为0.8%。用户应注意如果计算结果超过当前规格下distinct最大值会导致计算结果误差率变大，或导致计算结果失败并报错。
>
>-   用户在首次使用该特性时，应该对业务的distinct value做评估，选取适当的配置参数并做验证，以确保精度符合要求：
>
>   -   当前默认参数下，可以计算的distinct值为1.1e+15，如果计算得到的distinct值为NaN，需要调整log2m，或者采用其他算法计算distinct值。
>
>   -   虽然hash算法存在极低的hash collision概率，但是建议用户在首次使用时，选取2-3个hash seed验证，如果得到的distinct value相差不大，则可以从该组seed中任选一个作为hash seed。

HLL中主要的数据结构，请参见[表2](#table18186113885012)。

**表 2**  HyperLogLog中主要数据结构

<a name="table18186113885012"></a>
<table><thead align="left"><tr id="row161861538145014"><th class="cellrowborder" valign="top" width="25.28%" id="mcps1.2.3.1.1"><p id="p17186123895020"><a name="p17186123895020"></a><a name="p17186123895020"></a>数据类型</p>
</th>
<th class="cellrowborder" valign="top" width="74.72%" id="mcps1.2.3.1.2"><p id="p01861938115013"><a name="p01861938115013"></a><a name="p01861938115013"></a>功能描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row4186133819508"><td class="cellrowborder" valign="top" width="25.28%" headers="mcps1.2.3.1.1 "><p id="p19186153811502"><a name="p19186153811502"></a><a name="p19186153811502"></a>hll</p>
</td>
<td class="cellrowborder" valign="top" width="74.72%" headers="mcps1.2.3.1.2 "><p id="p818613818508"><a name="p818613818508"></a><a name="p818613818508"></a>hll头部为27字节长度字段，默认规格下数据段长度0~16KB，可直接计算得到distinct值。</p>
</td>
</tr>
</tbody>
</table>

创建HLL数据类型时，可以支持0\~4个参数入参，具体的参数含义与参数规格同函数hll\_empty一致。第一个参数为log2m，表示分桶数的对数值，取值范围10\~16；第二个参数为log2explicit，表示Explicit模式的阈值大小，取值范围0\~12；第三个参数为log2sparse，表示Sparse模式的阈值大小，取值范围0\~14；第四个参数为duplicatecheck，表示是否启用duplicatecheck，取值范围为0\~1。当入参输入值为-1时，会采用默认值设定HLL的参数。可以通过\\d或\\d+查看HLL类型的参数。

>![](public_sys-resources/icon-note.png) **说明：** 
>
>创建HLL数据类型时，根据入参的行为不同，结果不同：
>
>-   创建HLL类型时对应入参不输入或输入-1，采用默认值设定对应的HLL参数。
>
>-   输入合法范围的入参，对应HLL参数采用输入值。
>
>-   输入不合法范围的入参，创建HLL类型报错。

```
-- 创建hll类型的表，不指定入参
openGauss=# create table t1 (id integer, set hll);
openGauss=# \d t1
      Table "public.t1"
 Column |  Type   | Modifiers
--------+---------+-----------
 id     | integer |
 set     | hll     |

-- 创建hll类型的表，指定前两个入参，后两个采用默认值
openGauss=# create table t2 (id integer, set hll(12,4));
openGauss=# \d t2
          Table "public.t2"
 Column |      Type      | Modifiers
--------+----------------+-----------
 id     | integer        |
 set     | hll(12,4,12,0) |

--创建hll类型的表，指定第三个入参，其余采用默认值
openGauss=# create table t3(id int, set hll(-1,-1,8,-1));
openGauss=# \d t3
          Table "public.t3"
 Column |      Type      | Modifiers
--------+----------------+-----------
 id     | integer        |
 set     | hll(14,10,8,0) |

--创建hll类型的表，指定入参不合法报错
openGauss=# create table t4(id int, set hll(5,-1));
ERROR:  log2m = 5 is out of range, it should be in range 10 to 16, or set -1 as default
```

>![](public_sys-resources/icon-note.png) **说明：** 
>
>对含有HLL类型的表插入HLL对象时，HLL类型的设定参数须同插入对象的设定参数一致，否则报错。

```
-- 创建带有hll类型的表
openGauss=# create table t1(id integer, set hll(14));
 
-- 向表中插入hll对象,参数一致，成功
openGauss=# insert into t1 values (1, hll_empty(14,-1));

-- 向表中插入hll对象，参数不一致，失败
openGauss=# insert into t1(id, set) values (1, hll_empty(14,5));
ERROR:  log2explicit does not match: source is 5 and dest is 10
```

HLL的应用场景。

-   场景1：“Hello World”

    通过下面的示例说明如何使用hll数据类型：

    ```
    -- 创建带有hll类型的表
    openGauss=# create table helloworld (id integer, set hll);
     
    -- 向表中插入空的hll
    openGauss=# insert into helloworld(id, set) values (1, hll_empty());
     
    -- 把整数经过哈希计算加入到hll中
    openGauss=# update helloworld set set = hll_add(set, hll_hash_integer(12345)) where id = 1;
    
    -- 把字符串经过哈希计算加入到hll中
    openGauss=# update helloworld set set = hll_add(set, hll_hash_text('hello world')) where id = 1;
     
    -- 得到hll中的distinct值
    openGauss=# select hll_cardinality(set) from helloworld where id = 1;
     hll_cardinality 
    -----------------
                   2
    (1 row)
    
    -- 删除表
    openGauss=#  drop table helloworld;
    ```

-   场景2：“网站访客数量统计”

    通过下面的示例说明hll如何统计在一段时间内访问网站的不同用户数量：

    ```
    -- 创建原始数据表，表示某个用户在某个时间访问过网站。
    openGauss=# create table facts (
             date            date,
             user_id         integer
    );
     
    -- 构造数据，表示一天中有哪些用户访问过网站。
    openGauss=# insert into facts values ('2019-02-20', generate_series(1,100));
    openGauss=# insert into facts values ('2019-02-21', generate_series(1,200));
    openGauss=# insert into facts values ('2019-02-22', generate_series(1,300));
    openGauss=# insert into facts values ('2019-02-23', generate_series(1,400));
    openGauss=# insert into facts values ('2019-02-24', generate_series(1,500));
    openGauss=# insert into facts values ('2019-02-25', generate_series(1,600));
    openGauss=# insert into facts values ('2019-02-26', generate_series(1,700));
    openGauss=# insert into facts values ('2019-02-27', generate_series(1,800));
     
    -- 创建表并指定列为hll。
    openGauss=# create table daily_uniques (
        date            date UNIQUE,
        users           hll
    );
     
    -- 根据日期把数据分组，并把数据插入到hll中。
    openGauss=# insert into daily_uniques(date, users)
        select date, hll_add_agg(hll_hash_integer(user_id))
        from facts
        group by 1;
     
    -- 计算每一天访问网站不同用户数量
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
     
    -- 计算在2019.02.20到2019.02.26一周中有多少不同用户访问过网站
    openGauss=# select hll_cardinality(hll_union_agg(users)) from daily_uniques where date >= '2019-02-20'::date and date <= '2019-02-26'::date;
     hll_cardinality  
    ------------------
     702.941844662509
    (1 row)
     
    -- 计算昨天访问过网站而今天没访问网站的用户数量。
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
    
    -- 删除表
    openGauss=# drop table facts;
    openGauss=# drop table daily_uniques;
    ```

-   场景3：“插入数据不满足hll数据结构要求”

    当用户给hll类型的字段插入数据的时候，必须保证插入的数据满足hll数据结构要求，如果解析后不满足就会报错。如下示例中： 插入数据'E\\\\1234'时，该数据不满足hll数据结构，不能解析成功因此失败报错。

    ```
    openGauss=# create table test(id integer, set hll);
    openGauss=# insert into test values(1, 'E\\1234');
    ERROR:  not a hll type, size=6 is not enough
    openGauss=# drop table test;
    ```


