# 索引推荐

openGauss的索引推荐的功能，共包含三个子功能：单query索引推荐、虚拟索引和workload级别索引推荐。

## 单query索引推荐<a name="section1510124224213"></a>

单query索引推荐功能支持用户在数据库中直接进行操作，本功能基于查询语句的语义信息和数据库的统计信息，对用户输入的单条查询语句生成推荐的索引。本功能仅支持单条SELECT类型的语句，不支持其他类型的SQL语句。本功能依赖函数gs\_index\_advise实现。

**表 1**  单query索引推荐功能的接口

<a name="table6447142414557"></a>
<table><thead align="left"><tr id="row544732413559"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1644752411553"><a name="p1644752411553"></a><a name="p1644752411553"></a>函数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p34471524185517"><a name="p34471524185517"></a><a name="p34471524185517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p124475241559"><a name="p124475241559"></a><a name="p124475241559"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="row94473249558"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p344762435510"><a name="p344762435510"></a><a name="p344762435510"></a>gs_index_advise</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1444782419553"><a name="p1444782419553"></a><a name="p1444782419553"></a>SQL语句字符串</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1544816249557"><a name="p1544816249557"></a><a name="p1544816249557"></a>针对单条查询语句生成推荐索引。</p>
</td>
</tr>
</tbody>
</table>

使用上述函数，获取针对该query生成的推荐索引，推荐结果由索引的表名和列名组成。使用方法如下：

```
openGauss=# select "table", "column" from gs_index_advise('SELECT c_discount from bmsql_customer where c_w_id = 10');
     table      |  column  
----------------+----------
 bmsql_customer | (c_w_id)
(1 row)
```

上述结果表明，应当在表bmsql\_customer的c\_w\_id列上创建索引。创建索引的命令如下：

```
CREATE INDEX idx on bmsql_customer(c_w_id);
```

某些SQL语句，也可能被推荐创建联合索引，例如：

```
openGauss=# select "table", "column" from gs_index_advise('select name, age, sex from t1 where age >= 18 and age < 35 and sex = ''f'';');
 table | column
-------+------------
 t1    | (age, sex)
(1 row)
```

则上述语句表明应该在表t1上创建一个联合索引 \(age, sex\)。创建索引的命令如下：

```
CREATE INDEX idx1 on t1(age, sex);
```

## 虚拟索引<a name="section194818512119"></a>

虚拟索引功能支持用户在数据库中直接进行操作，本功能将模拟真实索引的建立，避免真实索引创建所需的时间和空间开销，用户基于虚拟索引，可通过优化器评估该索引对指定查询语句的代价影响。虚拟索引涉及的函数接口和GUC参数，请参见[表2](#table244916561658)、[表3](#table1875192712109)。

**表 2**  虚拟索引功能的接口

<a name="table244916561658"></a>
<table><thead align="left"><tr id="row1144945610519"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p1449656952"><a name="p1449656952"></a><a name="p1449656952"></a>函数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.48334833483349%" id="mcps1.2.4.1.2"><p id="p7449956953"><a name="p7449956953"></a><a name="p7449956953"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.183318331833185%" id="mcps1.2.4.1.3"><p id="p1344911561850"><a name="p1344911561850"></a><a name="p1344911561850"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="row54498561554"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p24492056656"><a name="p24492056656"></a><a name="p24492056656"></a>hypopg_create_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p944914566510"><a name="p944914566510"></a><a name="p944914566510"></a>创建索引语句的字符串</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p1444917565513"><a name="p1444917565513"></a><a name="p1444917565513"></a>创建虚拟索引。</p>
</td>
</tr>
<tr id="row044916561554"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p44497561253"><a name="p44497561253"></a><a name="p44497561253"></a>hypopg_display_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p144919561452"><a name="p144919561452"></a><a name="p144919561452"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p2044920569515"><a name="p2044920569515"></a><a name="p2044920569515"></a>显示所有创建的虚拟索引信息。</p>
</td>
</tr>
<tr id="row644912563520"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p184498561455"><a name="p184498561455"></a><a name="p184498561455"></a>hypopg_drop_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p644910561358"><a name="p644910561358"></a><a name="p644910561358"></a>索引的oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p5449356656"><a name="p5449356656"></a><a name="p5449356656"></a>删除指定的虚拟索引。</p>
</td>
</tr>
<tr id="row13449155619516"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p84491256959"><a name="p84491256959"></a><a name="p84491256959"></a>hypopg_reset_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p10450135617518"><a name="p10450135617518"></a><a name="p10450135617518"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p545045614513"><a name="p545045614513"></a><a name="p545045614513"></a>清除所有虚拟索引。</p>
</td>
</tr>
<tr id="row174509561751"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p94501256655"><a name="p94501256655"></a><a name="p94501256655"></a>hypopg_estimate_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.48334833483349%" headers="mcps1.2.4.1.2 "><p id="p114504561759"><a name="p114504561759"></a><a name="p114504561759"></a>索引的oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.183318331833185%" headers="mcps1.2.4.1.3 "><p id="p10450456356"><a name="p10450456356"></a><a name="p10450456356"></a>估计指定索引创建所需的空间大小。</p>
</td>
</tr>
</tbody>
</table>

**表 3**  虚拟索引功能的GUC参数

<a name="table1875192712109"></a>
<table><thead align="left"><tr id="row128751627141018"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p18756277104"><a name="p18756277104"></a><a name="p18756277104"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p20875122712101"><a name="p20875122712101"></a><a name="p20875122712101"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1887512771017"><a name="p1887512771017"></a><a name="p1887512771017"></a>默认值</p>
</th>
</tr>
</thead>
<tbody><tr id="row9875827181017"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6875152771012"><a name="p6875152771012"></a><a name="p6875152771012"></a>enable_hypo_index</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p287552713108"><a name="p287552713108"></a><a name="p287552713108"></a>是否开启虚拟索引功能</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p087552771013"><a name="p087552771013"></a><a name="p087552771013"></a>off</p>
</td>
</tr>
</tbody>
</table>

使用方法如下：

1.  使用函数hypopg\_create\_index创建虚拟索引。

    ```
    openGauss=> select * from hypopg_create_index('create index on bmsql_customer(c_w_id)');
     indexrelid |              indexname              
    ------------+-------------------------------------
         329726 | <329726>btree_bmsql_customer_c_w_id
    (1 row)
    ```

2.  开启GUC参数enable\_hypo\_index，该参数控制数据库的优化器进行EXPLAIN时是否考虑创建的虚拟索引。通过对特定的查询语句执行explain，用户可根据优化器给出的执行计划评估该索引是否能够提升该查询语句的执行效率。例如：

    开启GUC参数前，执行EXPLAIN + 查询语句：

    ```
    openGauss=> explain SELECT c_discount from bmsql_customer where c_w_id = 10;
                                  QUERY PLAN                              
    ----------------------------------------------------------------------
     Seq Scan on bmsql_customer  (cost=0.00..52963.06 rows=31224 width=4)
       Filter: (c_w_id = 10)
    (2 rows)
    ```

    开启GUC参数：

    ```
    openGauss=> set enable_hypo_index = on;
    SET
    ```

    开启GUC参数后，执行EXPLAIN + 查询语句：

    ```
    openGauss=> explain SELECT c_discount from bmsql_customer where c_w_id = 10;
                                                        QUERY PLAN                                                    
    ------------------------------------------------------------------------------------------------------------------
     [Bypass]
     Index Scan using <329726>btree_bmsql_customer_c_w_id on bmsql_customer  (cost=0.00..39678.69 rows=31224 width=4)
       Index Cond: (c_w_id = 10)
    (3 rows)
    ```

    通过对比两个执行计划可以观察到，该索引预计会降低指定查询语句的执行代价，用户可考虑创建对应的真实索引。

3.  （可选）使用函数hypopg\_display\_index展示所有创建过的虚拟索引。例如：

    ```
    openGauss=> select * from hypopg_display_index();
                     indexname                  | indexrelid |     table      |      column      
    --------------------------------------------+------------+----------------+------------------
     <329726>btree_bmsql_customer_c_w_id        |     329726 | bmsql_customer | (c_w_id)
     <329729>btree_bmsql_customer_c_d_id_c_w_id |     329729 | bmsql_customer | (c_d_id, c_w_id)
    (2 rows)
    ```

4.  （可选）使用函数hypopg\_estimate\_size估计虚拟索引创建所需的空间大小（单位：字节）。例如：

    ```
    openGauss=> select * from hypopg_estimate_size(329730);
     hypopg_estimate_size 
    ----------------------
                 15687680
    (1 row)
    ```

5.  删除虚拟索引。

    使用函数hypopg\_drop\_index删除指定oid的虚拟索引。例如：

    ```
    openGauss=> select * from hypopg_drop_index(329726);
     hypopg_drop_index 
    -------------------
     t
    (1 row)
    ```

    使用函数hypopg\_reset\_index一次性清除所有创建的虚拟索引。例如：

    ```
    openGauss=> select * from hypopg_reset_index();
     hypopg_reset_index 
    --------------------
    
    (1 row)
    ```


## workload级别索引推荐<a name="section174813519117"></a>

对于workload级别的索引推荐，用户可通过运行数据库外的脚本使用此功能，本功能将包含有多条DML语句的workload作为输入，最终生成一批可对整体workload的执行表现进行优化的索引。

1.  准备好包含有多条DML语句的文件作为输入的workload，文件中每条语句占据一行。用户可从数据库的离线日志中获得历史的业务语句。
2.  运行python脚本index\_advisor\_workload.py，命令如下：

    ```
    python index_advisor_workload.py [p PORT] [d DATABASE] [f FILE] [--h HOST] [-U USERNAME] [-W PASSWORD][--schema SCHEMA]
    [--max_index_num MAX_INDEX_NUM][--max_index_storage MAX_INDEX_STORAGE] [--multi_iter_mode] [--multi_node]  [--json] [--driver] [--show_detail]
    ```

    其中的输入参数依次为：

    -   PORT：连接数据库的端口号。
    -   DATABASE：连接数据库的名字。
    -   FILE：包含workload语句的文件路径。
    -   HOST：（可选）连接数据库的主机号。
    -   USERNAME：（可选）连接数据库的用户名。
    -   PASSWORD：（可选）连接数据库用户的密码。
    -   SCHEMA：模式名称。
    -   MAX\_INDEX\_NUM：（可选）最大的索引推荐数目。
    -   MAX\_INDEX\_STORAGE：（可选）最大的索引集合空间大小。
    -   multi\_node：（可选）指定当前是否为分布式数据库实例。
    -   multi\_iter\_mode：（可选）算法模式，可通过是否设置该参数来切换算法。
    -   json：（可选）指定workload语句的文件路径格式为SQL归一化后的json，默认格式每条SQL占一行。
    -   driver：（可选）指定是否使用python驱动器连接数据库，默认gsql连接。
    -   show\_detail：（可选）是否显示当前推荐索引集合的详细优化信息。

    例如：

    ```
    python index_advisor_workload.py 6001 postgres tpcc_log.txt --schema public --max_index_num 10 --multi_iter_mode
    ```

    推荐结果为一批索引，以多个创建索引语句的格式显示在屏幕上，结果示例。

    ```
    create index ind0 on public.bmsql_stock(s_i_id,s_w_id);
    create index ind1 on public.bmsql_customer(c_w_id,c_id,c_d_id);
    create index ind2 on public.bmsql_order_line(ol_w_id,ol_o_id,ol_d_id);
    create index ind3 on public.bmsql_item(i_id);
    create index ind4 on public.bmsql_oorder(o_w_id,o_id,o_d_id);
    create index ind5 on public.bmsql_new_order(no_w_id,no_d_id,no_o_id);
    create index ind6 on public.bmsql_customer(c_w_id,c_d_id,c_last,c_first);
    create index ind7 on public.bmsql_new_order(no_w_id);
    create index ind8 on public.bmsql_oorder(o_w_id,o_c_id,o_d_id);
    create index ind9 on public.bmsql_district(d_w_id);
    ```


