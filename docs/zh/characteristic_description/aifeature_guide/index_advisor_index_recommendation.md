# Index-advisor：索引推荐

本节介绍索引推荐的功能，共包含三个子功能：单query索引推荐、虚拟索引和workload级别索引推荐。

## 单query索引推荐<a name="ZH-CN_TOPIC_0000002294471321"></a>

单query索引推荐功能支持用户在数据库中直接进行操作，本功能基于查询语句的语义信息和数据库的统计信息，对用户输入的单条查询语句生成推荐的索引。本功能涉及的函数接口如下。

**表 1**  单query索引推荐功能的接口

<a name="zh-cn_topic_0000001714828981_table6447142414557"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714828981_row544732413559"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714828981_p1644752411553"><a name="zh-cn_topic_0000001714828981_p1644752411553"></a><a name="zh-cn_topic_0000001714828981_p1644752411553"></a>函数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714828981_p34471524185517"><a name="zh-cn_topic_0000001714828981_p34471524185517"></a><a name="zh-cn_topic_0000001714828981_p34471524185517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714828981_p124475241559"><a name="zh-cn_topic_0000001714828981_p124475241559"></a><a name="zh-cn_topic_0000001714828981_p124475241559"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714828981_row94473249558"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714828981_p344762435510"><a name="zh-cn_topic_0000001714828981_p344762435510"></a><a name="zh-cn_topic_0000001714828981_p344762435510"></a>gs_index_advise</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714828981_p1444782419553"><a name="zh-cn_topic_0000001714828981_p1444782419553"></a><a name="zh-cn_topic_0000001714828981_p1444782419553"></a>SQL语句字符串。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714828981_p1544816249557"><a name="zh-cn_topic_0000001714828981_p1544816249557"></a><a name="zh-cn_topic_0000001714828981_p1544816249557"></a>针对单条查询语句生成推荐索引。</p>
</td>
</tr>
</tbody>
</table>

>[!NOTE]说明 
>
>- 本功能仅支持单条SELECT、INSERT、DELETE、UPDATE类型的语句，不支持其他类型的SQL语句。
>- 本功能使用优化器采样结果，用户需要保证最近对相关表执行过analyze语句，否则优化器结果不准确。
>- 本功能暂不支持段页式表、普通视图、物化视图、全局临时表、二级分区表以及密态数据库。
>- 如果对ustore表相关语句进行索引推荐，本功能可能无法保证结果的准确性。

### 使用方法<a name="zh-cn_topic_0000001714828981_section54321094535"></a>

使用上述函数，获取针对该query生成的推荐索引，推荐结果由索引的表名和列名组成。

例如：

```
opengauss=# SELECT "table", "column" FROM gs_index_advise('SELECT c_discount FROM bmsql_customer WHERE c_w_id = 10');
     table      |  column  
----------------+----------
 bmsql_customer | c_w_id
(1 row)
```

上述结果表明，应该在表bmsql\_customer的c\_w\_id列上创建索引，例如可以通过下述SQL语句创建索引：

```
opengauss=# CREATE INDEX idx ON bmsql_customer(c_w_id);
```

某些SQL语句，也可能被推荐创建联合索引，例如：

```
opengauss=# SELECT "table", "column" FROM gs_index_advise('SELECT name, age, gender FROM t1 WHERE age >= 18 AND age < 35 AND gender = ''f'';');
 table | column
-------+------------
 t1    | age, gender
(1 row)
```

上述结果表明，应该在表t1上创建一个联合索引\(age, gender\)，例如可以通过下述SQL语句创建索引：

```
opengauss=# CREATE INDEX idx1 ON t1(age, gender);
```

针对分区表可推荐具体索引类型，例如：

```
opengauss=# SELECT "table", "column", "indextype" FROM gs_index_advise('SELECT name, age, gender FROM range_table WHERE age = 20;');
 table | column | indextype
-------+--------+-----------
 t1    | age    | global
(1 row)
```

>[!NOTE]说明
>
>系统函数gs\_index\_advise\(\)的参数是文本型，如果参数中存在如单引号（'）等特殊字符，可以使用单引号（'）进行转义，可参考上述示例。

## 虚拟索引<a name="ZH-CN_TOPIC_0000002259861210"></a>

虚拟索引功能支持用户在数据库中直接进行操作，本功能将模拟真实索引的建立，避免真实索引创建所需的时间和空间开销，用户基于虚拟索引，可通过优化器评估该索引对指定查询语句的代价影响。

本功能涉及的系统函数接口如[表1](#zh-cn_topic_0000001714829097_table244916561658)所示：

**表 1**  虚拟索引功能的接口

<a name="zh-cn_topic_0000001714829097_table244916561658"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829097_row1144945610519"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829097_p1449656952"><a name="zh-cn_topic_0000001714829097_p1449656952"></a><a name="zh-cn_topic_0000001714829097_p1449656952"></a>函数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.48334833483349%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829097_p7449956953"><a name="zh-cn_topic_0000001714829097_p7449956953"></a><a name="zh-cn_topic_0000001714829097_p7449956953"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.183318331833185%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829097_p1344911561850"><a name="zh-cn_topic_0000001714829097_p1344911561850"></a><a name="zh-cn_topic_0000001714829097_p1344911561850"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829097_row54498561554"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829097_p24492056656"><a name="zh-cn_topic_0000001714829097_p24492056656"></a><a name="zh-cn_topic_0000001714829097_p24492056656"></a>hypopg_create_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><a name="zh-cn_topic_0000001714829097_ul894420193613"></a><a name="zh-cn_topic_0000001714829097_ul894420193613"></a><ul id="zh-cn_topic_0000001714829097_ul894420193613"><li>参数1：创建索引语句的字符串。</li><li>参数2：虚拟索引级别，可选参数，可指定global或session，默认为global。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829097_p1444917565513"><a name="zh-cn_topic_0000001714829097_p1444917565513"></a><a name="zh-cn_topic_0000001714829097_p1444917565513"></a>创建虚拟索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829097_row044916561554"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829097_p44497561253"><a name="zh-cn_topic_0000001714829097_p44497561253"></a><a name="zh-cn_topic_0000001714829097_p44497561253"></a>hypopg_display_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829097_p18471832122315"><a name="zh-cn_topic_0000001714829097_p18471832122315"></a><a name="zh-cn_topic_0000001714829097_p18471832122315"></a>虚拟索引级别，可选参数，可通过参数指定global或session，默认为global。</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829097_p2044920569515"><a name="zh-cn_topic_0000001714829097_p2044920569515"></a><a name="zh-cn_topic_0000001714829097_p2044920569515"></a>显示所有创建的虚拟索引的信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829097_row644912563520"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829097_p184498561455"><a name="zh-cn_topic_0000001714829097_p184498561455"></a><a name="zh-cn_topic_0000001714829097_p184498561455"></a>hypopg_drop_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829097_p644910561358"><a name="zh-cn_topic_0000001714829097_p644910561358"></a><a name="zh-cn_topic_0000001714829097_p644910561358"></a>索引的oid。</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829097_p5449356656"><a name="zh-cn_topic_0000001714829097_p5449356656"></a><a name="zh-cn_topic_0000001714829097_p5449356656"></a>删除指定的虚拟索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829097_row13449155619516"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829097_p84491256959"><a name="zh-cn_topic_0000001714829097_p84491256959"></a><a name="zh-cn_topic_0000001714829097_p84491256959"></a>hypopg_reset_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829097_p10450135617518"><a name="zh-cn_topic_0000001714829097_p10450135617518"></a><a name="zh-cn_topic_0000001714829097_p10450135617518"></a>虚拟索引级别，可选参数，可通过参数指定global或session，默认为global。</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829097_p545045614513"><a name="zh-cn_topic_0000001714829097_p545045614513"></a><a name="zh-cn_topic_0000001714829097_p545045614513"></a>清除所有虚拟索引。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714829097_row174509561751"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829097_p94501256655"><a name="zh-cn_topic_0000001714829097_p94501256655"></a><a name="zh-cn_topic_0000001714829097_p94501256655"></a>hypopg_estimate_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829097_p114504561759"><a name="zh-cn_topic_0000001714829097_p114504561759"></a><a name="zh-cn_topic_0000001714829097_p114504561759"></a>索引的oid。</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829097_p10450456356"><a name="zh-cn_topic_0000001714829097_p10450456356"></a><a name="zh-cn_topic_0000001714829097_p10450456356"></a>估计指定索引创建所需的空间大小。</p>
</td>
</tr>
</tbody>
</table>

本功能涉及的GUC参数如[表2](#zh-cn_topic_0000001714829097_table1875192712109)所示：

**表 2**  虚拟索引功能的GUC参数

<a name="zh-cn_topic_0000001714829097_table1875192712109"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714829097_row128751627141018"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829097_p18756277104"><a name="zh-cn_topic_0000001714829097_p18756277104"></a><a name="zh-cn_topic_0000001714829097_p18756277104"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829097_p20875122712101"><a name="zh-cn_topic_0000001714829097_p20875122712101"></a><a name="zh-cn_topic_0000001714829097_p20875122712101"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829097_p1887512771017"><a name="zh-cn_topic_0000001714829097_p1887512771017"></a><a name="zh-cn_topic_0000001714829097_p1887512771017"></a>默认值</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714829097_row9875827181017"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829097_p6875152771012"><a name="zh-cn_topic_0000001714829097_p6875152771012"></a><a name="zh-cn_topic_0000001714829097_p6875152771012"></a>enable_hypo_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829097_p287552713108"><a name="zh-cn_topic_0000001714829097_p287552713108"></a><a name="zh-cn_topic_0000001714829097_p287552713108"></a>是否开启虚拟索引功能。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829097_p087552771013"><a name="zh-cn_topic_0000001714829097_p087552771013"></a><a name="zh-cn_topic_0000001714829097_p087552771013"></a>off</p>
</td>
</tr>
</tbody>
</table>

### 使用步骤<a name="zh-cn_topic_0000001714829097_section678453019491"></a>

案例一：使用虚拟索引，调优等值查询。

在此案例中，存在表bmsql\_customer，该表是TPC-C benchmark中的一张表，此处演示在该表的c\_w\_id列上创建一个索引，是否可以提升某个等值查询的性能，如果该索引被使用了，预估执行代价\(cost\)是多少。

1. 使用函数hypopg\_create\_index创建虚拟索引。例如：

    ```
    opengauss=# SELECT * FROM hypopg_create_index('CREATE INDEX ON bmsql_customer(c_w_id)');
     indexrelid |              indexname              
    ------------+-------------------------------------
         329726 | <329726>btree_bmsql_customer_c_w_id
    (1 row)
    ```

2. 开启GUC参数enable\_hypo\_index，该参数控制数据库的优化器进行EXPLAIN时是否考虑创建的虚拟索引。通过对特定的查询语句执行explain，用户可根据优化器给出的执行计划评估该索引是否能够提升该查询语句的执行效率。例如：

    ```
    opengauss=# SET enable_hypo_index = on;
    SET
    ```

    开启GUC参数前，执行EXPLAIN + 查询语句：

    ```
    opengauss=# EXPLAIN SELECT c_discount FROM bmsql_customer WHERE c_w_id = 10;
                                  QUERY PLAN                              
    ----------------------------------------------------------------------
     Seq Scan on bmsql_customer  (cost=0.00..52963.06 rows=31224 width=4)
       Filter: (c_w_id = 10)
    (2 rows)
    ```

    开启GUC参数后，执行EXPLAIN + 查询语句：

    ```
    opengauss=# EXPLAIN SELECT c_discount FROM bmsql_customer WHERE c_w_id = 10;
                                                        QUERY PLAN                                                    
    ------------------------------------------------------------------------------------------------------------------
     [Bypass]
     Index Scan using <329726>btree_bmsql_customer_c_w_id on bmsql_customer  (cost=0.00..39678.69 rows=31224 width=4)
       Index Cond: (c_w_id = 10)
    (3 rows)
    ```

    通过对比两个执行计划可以观察到，该索引预计会降低指定查询语句的执行代价，用户可考虑创建对应的真实索引。

3. （可选）使用函数hypopg\_display\_index展示所有创建过的虚拟索引。例如：

    ```
    opengauss=# SELECT * FROM hypopg_display_index();
                     indexname                  | indexrelid |     table      |      column      |                       indexdef
    --------------------------------------------+------------+----------------+------------------+-----------------------------------------------------------
     <329726>btree_bmsql_customer_c_w_id        |     329726 | bmsql_customer | (c_w_id)         |CREATE INDEX ON bmsql_customer USING btree (c_w_id)
     <329729>btree_bmsql_customer_c_d_id_c_w_id |     329729 | bmsql_customer | (c_d_id, c_w_id) |CREATE INDEX ON bmsql_customer USING btree (c_d_id, c_w_id)
    (2 rows)
    ```

4. （可选）使用函数hypopg\_estimate\_size估计创建虚拟索引所需的空间大小（单位：字节）。例如：

    ```
    opengauss=# SELECT * FROM hypopg_estimate_size(329729);
     hypopg_estimate_size 
    ----------------------
                 15687680
    (1 row)
    ```

5. 删除虚拟索引。

    使用函数hypopg\_drop\_index删除指定oid的虚拟索引。例如：

    ```
    opengauss=# SELECT * FROM hypopg_drop_index(329726);
     hypopg_drop_index 
    -------------------
     t
    (1 row)
    ```

    使用函数hypopg\_reset\_index一次性清除所有创建的虚拟索引。例如：

    ```
    opengauss=# SELECT * FROM hypopg_reset_index();
     hypopg_reset_index 
    --------------------
    
    (1 row)
    ```

案例二：虚拟索引联合Hint，预测调优效果。

Hint可以手动要求数据库优化器使用某种方式生成执行计划，因此，对于某些数据库优化器难以生成最优执行计划的场景，可以手动指定执行计划。例如对某张表中的数据进行扫描操作（Scan），可以采用tablescan、indexscan、indexonlyscan，其分别对应了表扫描、索引扫描、覆盖索引扫描。对于后两种扫描形式，必须要求先在数据库表上存在索引才可以操作。而虚拟索引则可以实现在不创建索引的情况下，测试某个索引扫描的效果。

1. <a name="zh-cn_topic_0000001714829097_li19261105223413"></a>创建一张表t1，并生成一定量数据，供后续测试。

    ```
    opengauss=# CREATE TABLE t1 (id int, name text);
    opengauss=# INSERT INTO t1 SELECT generate_series(0, 100000), 'test';
    opengauss=# ANALYZE t1;
    ```

2. 测试当前优化器默认的范围检索执行计划，并获取其总代价；由于没有创建索引，该SQL语句使用的是全表扫描（SeqScan）。

    ```
    opengauss=# EXPLAIN SELECT * FROM t1 WHERE id > 1;
    ```

3. 在t1表的id列上新建虚拟索引。

    ```
    -- 开启参数，以便后续执行explain时能够采用虚拟索引
    opengauss=# SET enable_hypo_index = on; 
    -- 创建session级别虚拟索引，该session退出后，这个虚拟索引信息也会被自动清理掉
    opengauss=# SELECT hypopg_create_index('CREATE INDEX ON t1(id)','session');  
    ```

4. 通过explain语句，查看该SQL语句是否能够采用该索引；由于该列的distinct值很大，且涉及回表，优化器默认不会采用该索引，该语句执行计划与步骤2无变化，仍是全表扫描（SeqScan）。

    ```
    opengauss=# EXPLAIN SELECT * FROM t1 WHERE id > 1;
    ```

5. 通过hint操作，手动要求使用索引扫描，查看能否成功；由于指定了hint, 且存在该索引（尽管是虚拟的），仍然可以通过explain看到优化器使用了索引扫描 IndexScan。

    ```
    -- 其中<57762>btree_t1_id是自动生成的虚拟索引名，实际操作中以创建虚拟索引时的返回值为准
    opengauss=# EXPLAIN SELECT /*+ indexscan(t1 "<57762>btree_t1_id") */ * FROM t1 WHERE id > 1;
    ```

6. 删除[1](#zh-cn_topic_0000001714829097_li19261105223413)中所创建的表和数据。

    ```
    opengauss=# DROP TABLE t1;
    ```

>[!NOTE]说明 
>
>- 执行EXPLAIN ANALYZE不会涉及虚拟索引功能。
>- 开启虚拟索引功能并执行EXPLAIN语句时，可以生成创建虚拟索引之后的执行计划；同时，indexscan、indexonlyscan hint支持虚拟索引。
>- 会话级别虚拟索引在各个会话间的设置互不影响，关闭会话后将被清空。
>- 与真实索引不同，虚拟索引的相关操作不可回滚。
>- 虚拟索引相关函数，不支持dblink远程调用。
>- 本功能暂不支持视图、物化视图。

## workload级别索引推荐<a name="ZH-CN_TOPIC_0000002259758112"></a>

对于workload级别的索引推荐，用户可通过运行数据库外的脚本使用此功能，本功能将包含有多条DML语句的workload作为输入，最终生成一批可对整体workload的执行表现进行优化的索引。同时，本功能提供从日志中抽取业务数据SQL流水的功能。

### 前提条件<a name="zh-cn_topic_0000001714829281_section18679102695014"></a>

- 数据库状态正常、客户端能够正常连接。
- 当前执行用户下安装有gsql工具，该工具路径已被加入到PATH环境变量中。
- 具备Python3.7的环境。
- 若使用本功能提供的业务数据抽取功能，需提前将要收集的节点的GUC参数按如下设置：
    - log\_min\_duration\_statement = 0
    - log\_statement = 'all'

        >[!NOTE]说明
        >
        >业务数据抽取完毕后，建议将上述GUC参数复原，否则容易导致日志文件膨胀。

### 业务数据抽取脚本使用步骤<a name="zh-cn_topic_0000001714829281_section183663372522"></a>

1. <a name="zh-cn_topic_0000001714829281_li541620573521"></a>按前提条件中要求设置相关GUC参数。
2. 运行命令如下：

    ```
    gs_dbmind component extract_log [-h] [-d DATABASE] [-U DB_USER] [--start-time START_TIME] [--sql-amount SQL_AMOUNT] [--statement] [--max-reserved-period MAX_RESERVED_PERIOD] [--max-template-num MAX_TEMPLATE_NUM] [--json] log_dir file line_prefix
    ```

    其中的输入参数依次为：

    - DATABASE：（可选）数据库名称，不指定时默认抽取所有数据库的数据。
    - DB\_USER：（可选）用户名称，不指定时默认抽取所有用户的数据。
    - START\_TIME：（可选）日志收集的开始时间，不指定时默认收集所有日志文件。
    - SQL\_AMOUNT：（可选）收集日志中SQL数量的最大值，不指定时默认收集所有SQL。
    - statement：（可选）表示收集gs\_log日志中statement标识开头的SQL，不指定时默认不收集。
    - MAX\_RESERVED\_PERIOD：（可选）指定json模式下，增量收集日志中保留的模板的最大的更新时长，不指定时默认都保留，单位：天。
    - MAX\_TEMPLATE\_NUM：（可选）指定json模式下保留的最大模板数量，不指定时默认都保留。
    - json：（可选）指定收集日志的文件存储格式为SQL归一化后的json，不指定时默认为每条SQL占一行。
    - log\_dir：gs\_log的存放目录。
    - file：输出SQL流水文件的保存路径，即抽取出的业务数据存放的文件路径。
    - line\_prefix：指定每条日志信息的前缀格式，可通过show log\_line\_prefix查询。

    使用示例：

    ```
    gs_dbmind component extract_log $GAUSSLOG/gs_log/dn_6001 sql_log.txt '%m %c %d %p %a %x %n %e' -d testdb -U omm --start_time '2021-07-06 00:00:00' --statement
    ```

    >[!NOTE]说明
    >
    >若指定-d/-U参数，日志打印每条日志信息的前缀格式需包含%d、%u，若需要抽取事务，必须指定%p，详见log\_line\_prefix参数。max\_template\_num参数设置建议不超5000条，避免workload索引推荐执行时间过长。

3. 将[1](#zh-cn_topic_0000001714829281_li541620573521)中设置的GUC参数还原为设置前的值。

### 索引推荐脚本使用步骤<a name="zh-cn_topic_0000001714829281_section174995305018"></a>

1. 准备好包含有多条DML语句的文件作为输入的workload，文件中每条语句占据一行。用户可从数据库的离线日志中获得历史的业务语句。
2. 运行命令如下：

    ```
    gs_dbmind component index_advisor [-h] [--db-host DB_HOST] [-U DB_USER, --db-user DB_USER] [--schema SCHEMA] [--max-index-num MAX_INDEX_NUM] [--max-index-storage MAX_INDEX_STORAGE] [--multi-iter-mode] [--max-n-distinct MAX_N_DISTINCT] [--min-improved-rate MIN_IMPROVED_RATE] [--max-index-columns MAX_INDEX_COLUMNS] [--min-reltuples MIN_RELTUPLES] [--multi-node] [--json] [--driver] [--show-detail] [--show-benefits] [--advise_gsi] [--multi_thread_num MULTI_THREAD_NUM] db_port database file
    ```

    密码通过管道输入或交互式输入，对于免密用户，任意输入都可通过检验。命令行参数如[表1](#zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_table628178124515)所示：

    **表 1**  命令行参数

    <a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_table628178124515"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row162968174512"><th class="cellrowborder" valign="top" width="30.59305930593059%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1129138144517"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1129138144517"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1129138144517"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="55.285528552855276%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p2029181454"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p2029181454"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p2029181454"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.12141214121412%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p6291382451"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p6291382451"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p6291382451"></a>取值范围</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row162915844513"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p132968134510"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p132968134510"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p132968134510"></a>-h</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p13822133894714"><a name="zh-cn_topic_0000001714829281_p13822133894714"></a><a name="zh-cn_topic_0000001714829281_p13822133894714"></a>（可选）返回帮助信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p8723124284716"><a name="zh-cn_topic_0000001714829281_p8723124284716"></a><a name="zh-cn_topic_0000001714829281_p8723124284716"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1949293216101"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p493265764711"><a name="zh-cn_topic_0000001714829281_p493265764711"></a><a name="zh-cn_topic_0000001714829281_p493265764711"></a>--db-host DB_HOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p867441895310"><a name="zh-cn_topic_0000001714829281_p867441895310"></a><a name="zh-cn_topic_0000001714829281_p867441895310"></a>（可选）连接数据库的主机号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p192324411812"><a name="zh-cn_topic_0000001714829281_p192324411812"></a><a name="zh-cn_topic_0000001714829281_p192324411812"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row19291888452"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p16296874513"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p16296874513"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p16296874513"></a>-U DB_USER</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p1624963015539"><a name="zh-cn_topic_0000001714829281_p1624963015539"></a><a name="zh-cn_topic_0000001714829281_p1624963015539"></a>（可选）连接数据库的用户名。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p322194491819"><a name="zh-cn_topic_0000001714829281_p322194491819"></a><a name="zh-cn_topic_0000001714829281_p322194491819"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row18298818455"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p82912864518"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p82912864518"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p82912864518"></a>--schema SCHEMA</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p22917874513"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p22917874513"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p22917874513"></a>（必选）模式名称。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p92194419180"><a name="zh-cn_topic_0000001714829281_p92194419180"></a><a name="zh-cn_topic_0000001714829281_p92194419180"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row9294819456"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p39132164912"><a name="zh-cn_topic_0000001714829281_p39132164912"></a><a name="zh-cn_topic_0000001714829281_p39132164912"></a>--max-index-num MAX_INDEX_NUM</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1429208164510"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1429208164510"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1429208164510"></a>（可选）最大的索引推荐数目。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p420154491810"><a name="zh-cn_topic_0000001714829281_p420154491810"></a><a name="zh-cn_topic_0000001714829281_p420154491810"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1020015014713"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p752083184913"><a name="zh-cn_topic_0000001714829281_p752083184913"></a><a name="zh-cn_topic_0000001714829281_p752083184913"></a>--max-index-storage MAX_INDEX_STORAGE</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p6457721145417"><a name="zh-cn_topic_0000001714829281_p6457721145417"></a><a name="zh-cn_topic_0000001714829281_p6457721145417"></a>（可选）最大的索引集合空间大小。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1419744151813"><a name="zh-cn_topic_0000001714829281_p1419744151813"></a><a name="zh-cn_topic_0000001714829281_p1419744151813"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1836561411475"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p83111044104919"><a name="zh-cn_topic_0000001714829281_p83111044104919"></a><a name="zh-cn_topic_0000001714829281_p83111044104919"></a>--multi-iter-mode</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1236541444719"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1236541444719"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1236541444719"></a>（可选）算法模式，可通过是否设置该参数来切换算法。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p19191442186"><a name="zh-cn_topic_0000001714829281_p19191442186"></a><a name="zh-cn_topic_0000001714829281_p19191442186"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1773402524719"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p13734825204719"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p13734825204719"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p13734825204719"></a>--max-n-distinct MAX_N_DISTINCT</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p104171118385"><a name="zh-cn_topic_0000001714829281_p104171118385"></a><a name="zh-cn_topic_0000001714829281_p104171118385"></a>（可选）（1/distinct数）的最大值，默认为0.01。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p618154471812"><a name="zh-cn_topic_0000001714829281_p618154471812"></a><a name="zh-cn_topic_0000001714829281_p618154471812"></a>0-1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row12794175884716"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1579291385017"><a name="zh-cn_topic_0000001714829281_p1579291385017"></a><a name="zh-cn_topic_0000001714829281_p1579291385017"></a>--min-improved-rate MIN_IMPROVED_RATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p2041718181784"><a name="zh-cn_topic_0000001714829281_p2041718181784"></a><a name="zh-cn_topic_0000001714829281_p2041718181784"></a>（可选）索引的最大提升幅度，默认为0.1，即提升10%。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p15171344161817"><a name="zh-cn_topic_0000001714829281_p15171344161817"></a><a name="zh-cn_topic_0000001714829281_p15171344161817"></a>0-1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row124653514117"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p17529162695015"><a name="zh-cn_topic_0000001714829281_p17529162695015"></a><a name="zh-cn_topic_0000001714829281_p17529162695015"></a>--max-index-columns MAX_INDEX_COLUMNS</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p194173189810"><a name="zh-cn_topic_0000001714829281_p194173189810"></a><a name="zh-cn_topic_0000001714829281_p194173189810"></a>（可选）联合索引的最大列数（默认为4）。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p10161044111814"><a name="zh-cn_topic_0000001714829281_p10161044111814"></a><a name="zh-cn_topic_0000001714829281_p10161044111814"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1068864085011"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1568814095019"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1568814095019"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1568814095019"></a>--min-reltuples MIN_RELTUPLES</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p44171018688"><a name="zh-cn_topic_0000001714829281_p44171018688"></a><a name="zh-cn_topic_0000001714829281_p44171018688"></a>（可选）表的最小行数，默认为10000。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p499654318184"><a name="zh-cn_topic_0000001714829281_p499654318184"></a><a name="zh-cn_topic_0000001714829281_p499654318184"></a>&gt;0</p>
    </td>
    </tr>
    
    <tr id="zh-cn_topic_0000001714829281_row182011217518"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1282091275112"><a name="zh-cn_topic_0000001714829281_p1282091275112"></a><a name="zh-cn_topic_0000001714829281_p1282091275112"></a>--json</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p982014129514"><a name="zh-cn_topic_0000001714829281_p982014129514"></a><a name="zh-cn_topic_0000001714829281_p982014129514"></a>（可选）指定workload语句的文件路径格式为SQL归一化后的json。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1982013128516"><a name="zh-cn_topic_0000001714829281_p1982013128516"></a><a name="zh-cn_topic_0000001714829281_p1982013128516"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row622616207516"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p82266208515"><a name="zh-cn_topic_0000001714829281_p82266208515"></a><a name="zh-cn_topic_0000001714829281_p82266208515"></a>--driver</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p3226202014514"><a name="zh-cn_topic_0000001714829281_p3226202014514"></a><a name="zh-cn_topic_0000001714829281_p3226202014514"></a>（可选）指定是否使用python驱动器连接数据库，默认gsql连接。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1822611201517"><a name="zh-cn_topic_0000001714829281_p1822611201517"></a><a name="zh-cn_topic_0000001714829281_p1822611201517"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row11902162495115"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p9903102414516"><a name="zh-cn_topic_0000001714829281_p9903102414516"></a><a name="zh-cn_topic_0000001714829281_p9903102414516"></a>--show-detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p1290352415519"><a name="zh-cn_topic_0000001714829281_p1290352415519"></a><a name="zh-cn_topic_0000001714829281_p1290352415519"></a>（可选）是否显示当前推荐索引集合的详细优化信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1490316246517"><a name="zh-cn_topic_0000001714829281_p1490316246517"></a><a name="zh-cn_topic_0000001714829281_p1490316246517"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1829610291512"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p15296629165113"><a name="zh-cn_topic_0000001714829281_p15296629165113"></a><a name="zh-cn_topic_0000001714829281_p15296629165113"></a>--show-benefits</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p4296029175116"><a name="zh-cn_topic_0000001714829281_p4296029175116"></a><a name="zh-cn_topic_0000001714829281_p4296029175116"></a>（可选）是否显示收益信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p182961229105111"><a name="zh-cn_topic_0000001714829281_p182961229105111"></a><a name="zh-cn_topic_0000001714829281_p182961229105111"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row29153530312"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p182188579314"><a name="zh-cn_topic_0000001714829281_p182188579314"></a><a name="zh-cn_topic_0000001714829281_p182188579314"></a>--advise_gsi</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p152186578311"><a name="zh-cn_topic_0000001714829281_p152186578311"></a><a name="zh-cn_topic_0000001714829281_p152186578311"></a>（可选）不支持。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1621815571432"><a name="zh-cn_topic_0000001714829281_p1621815571432"></a><a name="zh-cn_topic_0000001714829281_p1621815571432"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row14417105611314"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1621819573318"><a name="zh-cn_topic_0000001714829281_p1621819573318"></a><a name="zh-cn_topic_0000001714829281_p1621819573318"></a>--multi_thread_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p72180571317"><a name="zh-cn_topic_0000001714829281_p72180571317"></a><a name="zh-cn_topic_0000001714829281_p72180571317"></a>（可选）以多线程运行脚本，指定线程数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p5218057638"><a name="zh-cn_topic_0000001714829281_p5218057638"></a><a name="zh-cn_topic_0000001714829281_p5218057638"></a>[1,64]</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row237933317518"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p12379133335120"><a name="zh-cn_topic_0000001714829281_p12379133335120"></a><a name="zh-cn_topic_0000001714829281_p12379133335120"></a>db_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p737919334519"><a name="zh-cn_topic_0000001714829281_p737919334519"></a><a name="zh-cn_topic_0000001714829281_p737919334519"></a>（必选）连接数据库的端口号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p2379203317514"><a name="zh-cn_topic_0000001714829281_p2379203317514"></a><a name="zh-cn_topic_0000001714829281_p2379203317514"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1981317361516"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1981413363511"><a name="zh-cn_topic_0000001714829281_p1981413363511"></a><a name="zh-cn_topic_0000001714829281_p1981413363511"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p98141360511"><a name="zh-cn_topic_0000001714829281_p98141360511"></a><a name="zh-cn_topic_0000001714829281_p98141360511"></a>（必选）连接数据库的名字。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p181412365518"><a name="zh-cn_topic_0000001714829281_p181412365518"></a><a name="zh-cn_topic_0000001714829281_p181412365518"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1777318387521"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p477393875212"><a name="zh-cn_topic_0000001714829281_p477393875212"></a><a name="zh-cn_topic_0000001714829281_p477393875212"></a>file</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p17773163865211"><a name="zh-cn_topic_0000001714829281_p17773163865211"></a><a name="zh-cn_topic_0000001714829281_p17773163865211"></a>（必选）包含workload语句的文件路径。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p16773153811522"><a name="zh-cn_topic_0000001714829281_p16773153811522"></a><a name="zh-cn_topic_0000001714829281_p16773153811522"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

    例如：

    ```
    gs_dbmind component index_advisor 6001 testdb tpcds_log.txt --schema public --max_index_num 10
    ```

    结果在屏幕输出，包含候选索引、推荐索引、已创建索引、无用索引（该给定的workload里面没有用到系统中的索引列表）、冗余索引（当前系统中重复创建的索引）以及历史有效索引，如下：

    ```
    ########################## Generate candidate indexes(FQS GSI) ###########################
    No candidate indexes generated!
    ############################### Generate candidate indexes ###############################
    table:  public.catalog_returns columns:  cr_return_amount
    table:  public.catalog_sales columns:  cs_item_sk
    table:  public.catalog_sales columns:  cs_sold_date_sk
    table:  public.customer_address columns:  ca_city type:  global
    table:  public.customer_address columns:  ca_state, ca_county type:  global
    table:  public.customer_demographics columns:  cd_demo_sk type:  local
    table:  public.date_dim columns:  d_month_seq type:  global
    table:  public.date_dim columns:  d_year type:  global
    table:  public.date_dim columns:  d_date_sk type:  local
    table:  public.date_dim columns:  d_month_seq type:  local
    table:  public.date_dim columns:  d_year type:  local
    table:  public.item columns:  i_class type:  global
    table:  public.item columns:  i_manager_id, i_brand_id type:  global
    table:  public.item columns:  i_manager_id, i_category_id type:  global
    table:  public.item columns:  i_manufact_id type:  global
    table:  public.item columns:  i_product_name type:  global
    table:  public.store_returns columns:  sr_cdemo_sk
    table:  public.store_returns columns:  sr_reason_sk
    table:  public.store_returns columns:  sr_return_amt
    table:  public.store_sales columns:  ss_item_sk, ss_sold_date_sk
    table:  public.store_sales columns:  ss_store_sk
    table:  public.time_dim columns:  t_time_sk type:  local
    table:  public.web_returns columns:  wr_return_amt
    table:  public.web_sales columns:  ws_item_sk
    table:  public.web_sales columns:  ws_web_page_sk, ws_ship_hdemo_sk, ws_sold_time_sk
    ############################### Determine optimal indexes ###############################
    CREATE INDEX idx_catalog_sales_cs_item_sk ON public.catalog_sales(cs_item_sk);
    CREATE INDEX idx_catalog_sales_cs_sold_date_sk ON public.catalog_sales(cs_sold_date_sk);
    CREATE INDEX idx_customer_demographics_local_cd_demo_sk ON public.customer_demographics(cd_demo_sk) local;
    CREATE INDEX idx_item_global_i_manufact_id ON public.item(i_manufact_id) global;
    CREATE INDEX idx_store_returns_sr_cdemo_sk ON public.store_returns(sr_cdemo_sk);
    CREATE INDEX idx_store_sales_ss_item_sk_ss_sold_date_sk ON public.store_sales(ss_item_sk, ss_sold_date_sk);
    CREATE INDEX idx_store_sales_ss_store_sk ON public.store_sales(ss_store_sk);
    CREATE INDEX idx_web_sales_ws_web_page_sk_ws_ship_hdemo_sk_ws_sold_time_sk ON public.web_sales(ws_web_page_sk, ws_ship_hdemo_sk, ws_sold_time_sk);
    ################################# Created indexes ###############################
    public: CREATE UNIQUE INDEX ship_mode_pkey ON ship_mode USING btree (sm_ship_mode_sk) LOCAL(PARTITION p_list_15_sm_ship_mode_sk_idx, PARTITION p_list_14_sm_ship_mode_sk_idx, PARTITION p_list_13_sm_ship_mode_sk_idx, PARTITION p_list_12_sm_ship_mode_sk_idx, PARTITION p_list_11_sm_ship_mode_sk_idx, PARTITION p_list_10_sm_ship_mode_sk_idx, PARTITION p_list_9_sm_ship_mode_sk_idx, PARTITION p_list_8_sm_ship_mode_sk_idx, PARTITION p_list_7_sm_ship_mode_sk_idx, PARTITION p_list_6_sm_ship_mode_sk_idx, PARTITION p_list_5_sm_ship_mode_sk_idx, PARTITION p_list_4_sm_ship_mode_sk_idx, PARTITION p_list_3_sm_ship_mode_sk_idx, PARTITION p_list_2_sm_ship_mode_sk_idx, PARTITION p_list_1_sm_ship_mode_sk_idx)  TABLESPACE pg_default;
    public: CREATE INDEX temptable_int2_int3_int4_idx ON temptable USING btree (int2, int3, int4) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int2_int3_idx ON temptable USING btree (int2, int3) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int1_int2_int3_idx ON temptable USING btree (int1, int2, int3) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int1_int2_idx ON temptable USING btree (int1, int2) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int1_idx ON temptable USING btree (int1) TABLESPACE pg_default;
    ############################### Current workload useless indexes ###############################
    DROP INDEX temptable_int2_int3_int4_idx;
    DROP INDEX temptable_int2_int3_idx;
    DROP INDEX temptable_int1_int2_int3_idx;
    DROP INDEX temptable_int1_int2_idx;
    DROP INDEX temptable_int1_idx;
    ############################### Redundant indexes ###############################
    DROP INDEX public.test1_age_idx;(CREATE INDEX test1_age_idx ON test1 USING btree (age) TABLESPACE pg_default)
    Related indexes:
            CREATE INDEX test1_age_id_idx ON test1 USING btree (age, id) TABLESPACE pg_default
    
    DROP INDEX public.test1_id_idx;(CREATE INDEX test1_id_idx ON test1 USING btree (id) TABLESPACE pg_default)
    Related indexes:
            CREATE INDEX test1_id_age_idx ON test1 USING btree (id, age) TABLESPACE pg_default
    ############################### Historical effective indexes ###############################
    CREATE INDEX idx_temptable_int2 ON ztt_test.temptable(int2);
    CREATE INDEX idx_item_i_manufact_id ON public.item(i_manufact_id);
    CREATE INDEX idx_item_i_color ON public.item(i_color);
    ```

>[!NOTE]说明
>
>- 如前文所述，“Current workload useless indexes”、“Redundant indexes”分别表示无用索引和冗余索引，判断依据是给定的workload。由于workload中的SQL语句可能出现缺失（例如由日志报错、没有捕获到等原因导致的），故该结论仅供提示，用户需要根据自己的业务逻辑进行排查，防止错误删除。
>- 与单query索引推荐相同，本功能暂不支持段页式表、普通视图、物化视图、全局临时表、二级分区表以及密态数据库。
