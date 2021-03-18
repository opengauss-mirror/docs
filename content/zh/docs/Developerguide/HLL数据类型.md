# HLL数据类型<a name="ZH-CN_TOPIC_0308951611"></a>

HLL（HyperLoglog）是统计数据集中唯一值个数的高效近似算法。它有着计算速度快，节省空间的特点，不需要直接存储集合本身，而是存储一种名为HLL的数据结构。每当有新数据加入进行统计时，只需要把数据经过哈希计算并插入到HLL中，最后根据HLL就可以得到结果。

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
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18562102134215"><a name="p18562102134215"></a><a name="p18562102134215"></a>1280字节</p>
</td>
</tr>
<tr id="row195621221144216"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p92131078457"><a name="p92131078457"></a><a name="p92131078457"></a>误差率</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p16562102117426"><a name="p16562102117426"></a><a name="p16562102117426"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p956242112421"><a name="p956242112421"></a><a name="p956242112421"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1956212124216"><a name="p1956212124216"></a><a name="p1956212124216"></a>≈2%</p>
</td>
</tr>
<tr id="row156262112426"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p20562182184218"><a name="p20562182184218"></a><a name="p20562182184218"></a>所需存储空间</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p15624217424"><a name="p15624217424"></a><a name="p15624217424"></a>原始数据大小</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p185621621174219"><a name="p185621621174219"></a><a name="p185621621174219"></a>原始数据大小</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1656252110421"><a name="p1656252110421"></a><a name="p1656252110421"></a>1280字节</p>
</td>
</tr>
</tbody>
</table>

HLL在计算速度和所占存储空间上都占优势。在时间复杂度上，Sort算法需要排序至少O\(nlogn\)的时间，虽说Hash算法和HLL一样扫描一次全表O\(n\)的时间就可以得出结果，但是存储空间上，Sort算法和Hash算法都需要先把原始数据存起来再进行统计，会导致存储空间消耗巨大，而对HLL来说不需要存原始数据，只需要维护HLL数据结构，故占用空间始终是1280字节常数级别。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>-   当前默认规格下可计算最大distinct值的数量为1.6e+12个，误差率最大可达到2.3%。用户应注意如果计算结果超过当前规格下distinct最大值会导致计算结果误差率变大，或导致计算结果失败并报错。
>-   用户在首次使用该特性时，应该对业务的distinct value做评估，选取适当的配置参数并做验证，以确保精度符合要求：
>    -   当前默认参数下，可以计算的distinct value值为1.6e+12，如果计算得到的distinct value值为NaN，需要调整log2m和regwidth来容纳更多的distinct value。
>    -   虽然hash算法存在极低的hash collision概率，但是建议用户在首次使用时，选取2-3个hash seed验证，如果得到的distinct value相差不大，则可以从该组seed中任选一个作为hash seed。

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
<td class="cellrowborder" valign="top" width="74.72%" headers="mcps1.2.3.1.2 "><p id="p818613818508"><a name="p818613818508"></a><a name="p818613818508"></a>大小为确定的1280字节，可直接计算得到distinct值。</p>
</td>
</tr>
</tbody>
</table>

HLL的应用场景。

-   场景1：“Hello World”

    通过下面的示例说明如何使用hll数据类型：

    ```
    -- 创建带有hll类型的表
    postgres=# create table helloworld (id integer, set hll);
     
    -- 向表中插入空的hll
    postgres=# insert into helloworld(id, set) values (1, hll_empty());
     
    -- 把整数经过哈希计算加入到hll中
    postgres=# update helloworld set set = hll_add(set, hll_hash_integer(12345)) where id = 1;
    
    -- 把字符串经过哈希计算加入到hll中
    postgres=# update helloworld set set = hll_add(set, hll_hash_text('hello world')) where id = 1;
     
    -- 得到hll中的distinct值
    postgres=# select hll_cardinality(set) from helloworld where id = 1;
     hll_cardinality 
    -----------------
                   2
    (1 row)
    
    -- 删除表
    postgres=# drop table helloworld;
    ```

-   场景2：“网站访客数量统计”

    通过下面的示例说明hll如何统计在一段时间内访问网站的不同用户数量：

    ```
    -- 创建原始数据表，表示某个用户在某个时间访问过网站。
    postgres=# create table facts (
             date            date,
             user_id         integer
    );
     
    -- 构造数据，表示一天中有哪些用户访问过网站。
    postgres=# insert into facts values ('2019-02-20', generate_series(1,100));
    postgres=# insert into facts values ('2019-02-21', generate_series(1,200));
    postgres=# insert into facts values ('2019-02-22', generate_series(1,300));
    postgres=# insert into facts values ('2019-02-23', generate_series(1,400));
    postgres=# insert into facts values ('2019-02-24', generate_series(1,500));
    postgres=# insert into facts values ('2019-02-25', generate_series(1,600));
    postgres=# insert into facts values ('2019-02-26', generate_series(1,700));
    postgres=# insert into facts values ('2019-02-27', generate_series(1,800));
     
    -- 创建表并指定列为hll。
    postgres=# create table daily_uniques (
        date            date UNIQUE,
        users           hll
    );
     
    -- 根据日期把数据分组，并把数据插入到hll中。
    postgres=# insert into daily_uniques(date, users)
        select date, hll_add_agg(hll_hash_integer(user_id))
        from facts
        group by 1;
     
    -- 计算每一天访问网站不同用户数量
    postgres=# select date, hll_cardinality(users) from daily_uniques order by date;
            date         | hll_cardinality  
    ---------------------+------------------
     2019-02-20 00:00:00 |              100
     2019-02-21 00:00:00 | 203.813355588808
     2019-02-22 00:00:00 | 308.048239950384
     2019-02-23 00:00:00 | 410.529188080374
     2019-02-24 00:00:00 | 513.263875705319
     2019-02-25 00:00:00 | 609.271181107416
     2019-02-26 00:00:00 | 702.941844662509
     2019-02-27 00:00:00 | 792.249946595237
    (8 rows)
     
    -- 计算在2019.02.20到2019.02.26一周中有多少不同用户访问过网站
    postgres=# select hll_cardinality(hll_union_agg(users)) from daily_uniques where date >= '2019-02-20'::date and date <= '2019-02-26'::date;
     hll_cardinality  
    ------------------
     702.941844662509
    (1 row)
     
    -- 计算昨天访问过网站而今天没访问网站的用户数量。
    postgres=# SELECT date, (#hll_union_agg(users) OVER two_days) - #users AS lost_uniques FROM daily_uniques WINDOW two_days AS (ORDER BY date ASC ROWS 1 PRECEDING);                                                                                                             
            date         | lost_uniques 
    ---------------------+--------------
     2019-02-20 00:00:00 |            0
     2019-02-21 00:00:00 |            0
     2019-02-22 00:00:00 |            0
     2019-02-23 00:00:00 |            0
     2019-02-24 00:00:00 |            0
     2019-02-25 00:00:00 |            0
     2019-02-26 00:00:00 |            0
     2019-02-27 00:00:00 |            0
    (8 rows)
    
    -- 删除表
    postgres=# drop table facts;
    postgres=# drop table daily_uniques;
    ```

-   场景3：“插入数据不满足hll数据结构要求”

    当用户给hll类型的字段插入数据的时候，必须保证插入的数据满足hll数据结构要求，如果解析后不满足就会报错。如下示例中： 插入数据'E\\\\1234'时，该数据不满足hll数据结构，不能解析成功因此失败报错。

    ```
    postgres=# create table test(id integer, set hll);
    postgres=# insert into test values(1, 'E\\1234');
    ERROR:  unknown schema version 4
    postgres=# drop table test;
    ```


