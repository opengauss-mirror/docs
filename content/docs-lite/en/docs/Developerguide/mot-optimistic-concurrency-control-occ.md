# MOT Optimistic Concurrency Control \(OCC\)<a name="EN-US_TOPIC_0289899956"></a>

The concurrency control \(CC\) module provides all transactional requirements for the main memory engine. The CC module mainly provides various levels of isolation support for the main memory engine.

## OCC and Pessimistic Two-phase Locking \(2PL\)<a name="en-us_topic_0283137599_en-us_topic_0280525159_section48860244"></a>

The difference between pessimistic 2PL and OCC lies in the use of pessimistic and optimistic methods for transaction integrity, respectively.

Disk-based tables use a pessimistic method, which is the most common database method. The MOT engine uses an optimistic method.

If a conflict occurs, the main difference between the pessimistic and optimistic methods is as follows:

-   A pessimistic method causes the client to wait.
-   An optimistic method causes one of the transactions to fail, making the client have to retry the failed transaction.

**OCC Method \(Used in MOT\)**

The OCC method detects conflicts when conflicts occur and perform validation checks during committing.

The OCC method is less expensive and typically more efficient because transaction conflicts are not common in most applications.

When the REPEATABLE READ isolation level is enforced, the function difference between the optimistic and pessimistic methods is larger. When the SERIALIZABLE isolation level is enforced, the function difference is the largest.

**Pessimistic Method \(Not Used in MOT\)**

The pessimistic 2PL method uses locks to prevent potential conflicts. A lock is used when a statement is executed, and the lock is released when the transaction is committed. Disk-based row store uses this method and adds the multi-version concurrency control \(MVCC\).

In the 2PL algorithm, when a transaction is writing to a row, other transactions cannot access the row. When a row is being read, other transactions cannot overwrite the row. Each row is locked for read and write during access. The lock is released when the transaction is committed. These algorithms require a solution to handle and avoid deadlocks. Deadlocks can be detected by calculating the period in the wait-for graph. Deadlocks can be avoided by using TSO<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  to preserve time series or by using some kind of fallback scheme.

**Encounter-time Locking \(ETL\)**

Another method is ETL, which handles the read operation in an optimistic way but locks the data assessed by the write operation. Therefore, write operations from different ETL transactions are aware of each other and can decide to abort. The experiment<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  proves that the ETL improves the OCC performance in the following two ways:

-   First, ETL detects conflicts early and typically increases transaction throughput. This is because the transaction does not perform useless operations. \(Generally\) Conflicts found during committing cannot be resolved without aborting at least one transaction.
-   Second, ETL runs efficiently in read-after-write \(RAW\) mode, eliminating the need for expensive or complex mechanisms.

**Conclusion:**

OCC is the fastest option for most workloads<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>. We have found this in the preliminary study phase.

One reason is that when each core executes multiple threads, the lock is likely to be held by the swap thread, especially in interactive mode. Another reason is that pessimistic algorithms involve deadlock detection \(which incurs overhead\) and typically use read-write locks \(which are less efficient than standard spin locks\).

We chose Silo<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  because it is simpler than other existing options, such as TicToc<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>, while maintaining the same performance for most workloads. ETL is sometimes faster than OCC, but it introduces a false abort that can confuse the user, while OCC aborts only during committing.

## Differences Between OCC and 2PL<a name="en-us_topic_0283137599_en-us_topic_0280525159_section37089017"></a>

The following are user experience differences between pessimistic \(for disk-based tables\) and optimistic \(for MOTs\) when a session updates the same table at the same time.

In this example, the following test command is used:

```
table "TEST" – create table test (x int, y int, z int, primary key(x));
```

This example describes two aspects of the same test: user experience \(operations in this example\) and retry requirements.

**Example of a Pessimistic Method for Disk-based Tables**

The following is an example of a pessimistic method \(non-MOT\). Any isolation level may apply.

The following two sessions execute transactions that attempt to update a single table.

After WAIT LOCK occurs, session 2 is being suspended until session 1 is committed.

However, both sessions succeed and no abort occurs \(unless the SERIALIZABLE or REPEATABLE-READ isolation level is applied\), which causes the entire transaction to need to be retried.

**Table  1**  Pessimistic method code example

<a name="en-us_topic_0283137599_en-us_topic_0280525159_table38422929"></a>
<table><thead align="left"><tr id="en-us_topic_0283137599_en-us_topic_0280525159_row697534"><th class="cellrowborder" valign="top" width="5.050000000000001%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="32.32%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137599_en-us_topic_0280525159_p13119782"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p13119782"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p13119782"></a>Session 1</p>
</th>
<th class="cellrowborder" valign="top" width="62.629999999999995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137599_en-us_topic_0280525159_p56069431"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p56069431"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p56069431"></a>Session 2</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137599_en-us_topic_0280525159_row45330064"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p47856602"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p47856602"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p47856602"></a>t0</p>
</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p51179581"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p51179581"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p51179581"></a>Begin</p>
</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p51905376"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p51905376"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p51905376"></a>Begin</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row64495201"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p56728775"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p56728775"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p56728775"></a>t1</p>
</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p31628099"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p31628099"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p31628099"></a>update test set y=200 where x=1;</p>
</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row38543888"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p35047246"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p35047246"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p35047246"></a>t2</p>
</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p20254652"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p20254652"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p20254652"></a>y=200</p>
</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p30014082"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p30014082"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p30014082"></a>Update test set y=300 where x=1; -- Wait on lock</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row1691286"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p2776468"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p2776468"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p2776468"></a>t4</p>
</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p23567359"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p23567359"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p23567359"></a>Commit</p>
</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row735665"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p53469629"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p53469629"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p53469629"></a>Unlock</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row11464615"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p20322390"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p20322390"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p20322390"></a>Commit</p>
<p id="en-us_topic_0283137599_en-us_topic_0280525159_p48683785"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p48683785"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p48683785"></a>(in READ-COMMITTED this will succeed, in SERIALIZABLE it will fail)</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row35500889"><td class="cellrowborder" valign="top" width="5.050000000000001%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.32%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.629999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p44895854"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p44895854"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p44895854"></a>y = 300</p>
</td>
</tr>
</tbody>
</table>

**Example of an Optimistic Method for MOTs**

Here is an example of an optimistic method.

An MOT is created and then two concurrent sessions update the same MOT at the same time.

```
create foreign table test (x int, y int, z int, primary key(x));
```

-   The advantage of OCC is that there is no lock before COMMIT.
-   The disadvantage of OCC is that if another session updates the same record, the update may fail. If the update fails \(at all supported isolation levels\), the entire session \#2 transaction must be retried.
-   Update conflicts are detected by the kernel through the version check mechanism during committing.
-   Session 2 will not wait for its update operation and will abort due to a conflict detected during committing.

**Table  2**  Optimistic method code for MOTs

<a name="en-us_topic_0283137599_en-us_topic_0280525159_table55018171"></a>
<table><thead align="left"><tr id="en-us_topic_0283137599_en-us_topic_0280525159_row46055710"><th class="cellrowborder" valign="top" width="11.219999999999999%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="41.839999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137599_en-us_topic_0280525159_p47410670"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p47410670"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p47410670"></a>Session 1</p>
</th>
<th class="cellrowborder" valign="top" width="46.94%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137599_en-us_topic_0280525159_p15059044"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p15059044"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p15059044"></a>Session 2</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137599_en-us_topic_0280525159_row11823088"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p18146039"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p18146039"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p18146039"></a>t0</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p60543075"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p60543075"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p60543075"></a>Begin</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p5042076"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p5042076"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p5042076"></a>Begin</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row45378689"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p51795159"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p51795159"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p51795159"></a>t1</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p34658350"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p34658350"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p34658350"></a>update test set y=200 where x=1;</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row33004572"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p56124651"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p56124651"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p56124651"></a>t2</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p49802871"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p49802871"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p49802871"></a>y=200</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p7500711"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p7500711"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p7500711"></a>Update test set y=300 where x=1;</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row397536"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p32200450"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p32200450"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p32200450"></a>t4</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p58099644"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p58099644"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p58099644"></a>Commit</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p8450743"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p8450743"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p8450743"></a>y = 300</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row8947828"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p43191062"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p43191062"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p43191062"></a>Commit</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row53175240"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p27341505"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p27341505"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p27341505"></a>ABORT</p>
</td>
</tr>
<tr id="en-us_topic_0283137599_en-us_topic_0280525159_row44746961"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137599_en-us_topic_0280525159_p8664129"><a name="en-us_topic_0283137599_en-us_topic_0280525159_p8664129"></a><a name="en-us_topic_0283137599_en-us_topic_0280525159_p8664129"></a>y = 200</p>
</td>
</tr>
</tbody>
</table>

