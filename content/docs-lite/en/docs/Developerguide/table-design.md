# Table Design<a name="EN-US_TOPIC_0000001102987918"></a>

Comply with the following principles to properly design a table:

-   \[Notice\] Reduce the amount of data to be scanned. You can use the pruning mechanism of a partitioned table.
-   \[Notice\] Minimize random I/Os. By clustering or local clustering, you can sequentially store hot data, converting random I/O to sequential I/O to reduce the cost of I/O scanning.

## Selecting a Storage Mode<a name="section189043059150"></a>

\[Proposal\] Selecting a storage model is the first step in defining a table. The storage model mainly depends on the customer's service type. For details, see  [Table 1](#table3891877).

**Table  1**  Table storage modes and scenarios

<a name="table3891877"></a>
<table><thead align="left"><tr id="row12104456"><th class="cellrowborder" valign="top" width="19.73%" id="mcps1.2.3.1.1"><p id="p40936856"><a name="p40936856"></a><a name="p40936856"></a>Storage Type</p>
</th>
<th class="cellrowborder" valign="top" width="80.27%" id="mcps1.2.3.1.2"><p id="p46632853"><a name="p46632853"></a><a name="p46632853"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row38265132"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.2.3.1.1 "><p id="p12468015"><a name="p12468015"></a><a name="p12468015"></a>Row store</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.2.3.1.2 "><a name="ul61112063105242"></a><a name="ul61112063105242"></a><ul id="ul61112063105242"><li>Point queries (simple index-based queries that only return a few records).</li><li>Scenarios requiring frequent addition, deletion, and modification.</li></ul>
</td>
</tr>
<tr id="row64051613"><td class="cellrowborder" valign="top" width="19.73%" headers="mcps1.2.3.1.1 "><p id="p20798169"><a name="p20798169"></a><a name="p20798169"></a>Column store</p>
</td>
<td class="cellrowborder" valign="top" width="80.27%" headers="mcps1.2.3.1.2 "><a name="ul38359637105253"></a><a name="ul38359637105253"></a><ul id="ul38359637105253"><li>Statistical analysis queries (requiring a large number of association and grouping operations).</li><li>Ad hoc queries (using uncertain query conditions and unable to utilize indexes to scan row-store tables).</li></ul>
</td>
</tr>
</tbody>
</table>

## Selecting a Partitioning Mode<a name="section3098621691543"></a>

If a table contains a large amount of data, partition the table based on the following rules:

-   \[Proposal\] Create partitions on columns that indicate certain ranges, such as dates and regions.
-   \[Proposal\] A partition name should show the data characteristics of a partition. For example, its format can be  _Keyword_+_Range_  characteristics.
-   \[Proposal\] Set the upper limit of a partition to  **MAXVALUE**  to prevent data overflow.

    **Table  2**  Table partitioning modes and scenarios

    <a name="table56061421"></a>
    <table><thead align="left"><tr id="row28830064"><th class="cellrowborder" valign="top" width="34.01%" id="mcps1.2.3.1.1"><p id="p1734838511855"><a name="p1734838511855"></a><a name="p1734838511855"></a>Partitioning Mode</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.99000000000001%" id="mcps1.2.3.1.2"><p id="p5210823411855"><a name="p5210823411855"></a><a name="p5210823411855"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row4741815"><td class="cellrowborder" valign="top" width="34.01%" headers="mcps1.2.3.1.1 "><p id="p5431105565120"><a name="p5431105565120"></a><a name="p5431105565120"></a>Range</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.99000000000001%" headers="mcps1.2.3.1.2 "><p id="p4430175512512"><a name="p4430175512512"></a><a name="p4430175512512"></a>Table data is partitioned by range.</p>
    </td>
    </tr>
    <tr id="row47469189"><td class="cellrowborder" valign="top" width="34.01%" headers="mcps1.2.3.1.1 "><p id="p19428125535117"><a name="p19428125535117"></a><a name="p19428125535117"></a>Interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.99000000000001%" headers="mcps1.2.3.1.2 "><p id="p8427165545120"><a name="p8427165545120"></a><a name="p8427165545120"></a>Table data is partitioned by range. If the data exceeds the range, a new partition is automatically created based on the interval.</p>
    </td>
    </tr>
    <tr id="row177022323520"><td class="cellrowborder" valign="top" width="34.01%" headers="mcps1.2.3.1.1 "><p id="p1370203265210"><a name="p1370203265210"></a><a name="p1370203265210"></a>List</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.99000000000001%" headers="mcps1.2.3.1.2 "><p id="p37021632105213"><a name="p37021632105213"></a><a name="p37021632105213"></a>Table data is partitioned by a specified column based on a specific value.</p>
    </td>
    </tr>
    <tr id="row843473610522"><td class="cellrowborder" valign="top" width="34.01%" headers="mcps1.2.3.1.1 "><p id="p843515360527"><a name="p843515360527"></a><a name="p843515360527"></a>Hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.99000000000001%" headers="mcps1.2.3.1.2 "><p id="p6435103612525"><a name="p6435103612525"></a><a name="p6435103612525"></a>Table data is partitioned by hash.</p>
    </td>
    </tr>
    </tbody>
    </table>

    The example of a partitioned table definition is as follows:

    ```
    -- Create a range partitioned table.
    CREATE TABLE staffS_p1
    (
      staff_ID       NUMBER(6) not null,
      FIRST_NAME     VARCHAR2(20),
      LAST_NAME      VARCHAR2(25),
      EMAIL          VARCHAR2(25),
      PHONE_NUMBER   VARCHAR2(20),
      HIRE_DATE      DATE,
      employment_ID  VARCHAR2(10),
      SALARY         NUMBER(8,2),
      COMMISSION_PCT NUMBER(4,2),
      MANAGER_ID     NUMBER(6),
      section_ID     NUMBER(4)
    )
    PARTITION BY RANGE (HIRE_DATE)
    ( 
       PARTITION HIRE_19950501 VALUES LESS THAN ('1995-05-01 00:00:00'),
       PARTITION HIRE_19950502 VALUES LESS THAN ('1995-05-02 00:00:00'),
       PARTITION HIRE_maxvalue VALUES LESS THAN (MAXVALUE)
    );
    
    -- Create an interval partitioned table. The table has two initial partitions. When data that is not in the partition range is inserted, another partition is automatically added.
    CREATE TABLE sales
    (prod_id NUMBER(6),
     cust_id NUMBER,
     time_id DATE,
     channel_id CHAR(1),
     promo_id NUMBER(6),
     quantity_sold NUMBER(3),
     amount_sold NUMBER(10,2)
    )
    PARTITION BY RANGE (time_id)
    INTERVAL('1 day')
    ( PARTITION p1 VALUES LESS THAN ('2019-02-01 00:00:00'),
      PARTITION p2 VALUES LESS THAN ('2019-02-02 00:00:00')
    );
    
    -- Create a list partitioned table.
    CREATE TABLE test_list (col1 int, col2 int)
    partition by list(col1)
    (
    partition p1 values (2000),
    partition p2 values (3000),
    partition p3 values (4000),
    partition p4 values (5000)
    );
    
    -- Create a hash partitioned table.
    CREATE TABLE test_hash (col1 int, col2 int)
    partition by hash(col1)
    (
    partition p1,
    partition p2
    );
    ```

    For details about the table partition syntax, see  [CREATE TABLE PARTITION](../SQLReference/create-table-partition.md).


