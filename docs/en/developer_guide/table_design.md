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

The example of a partitioned table definition is as follows:

```
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
```

