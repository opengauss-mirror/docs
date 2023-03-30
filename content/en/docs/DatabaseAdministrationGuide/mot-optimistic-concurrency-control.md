# MOT Optimistic Concurrency Control<a name="EN-US_TOPIC_0270171519"></a>

The Concurrency Control Module \(CC Module for short\) provides all the transactional requirements for the Main Memory Engine. The primary objective of the CC Module is to provide the Main Memory Engine with support for various isolation levels.

## Optimistic OCC vs. Pessimistic 2PL<a name="section2831715540"></a>

The functional differences of Pessimistic 2PL \(2-Phase Locking\) vs. Optimistic Concurrency Control \(OCC\) involve pessimistic versus optimistic approaches to transaction integrity.

Disk-based tables use a pessimistic approach, which is the most commonly used database method. The MOT Engine use an optimistic approach.

The primary functional difference between the pessimistic approach and the optimistic approach is that if a conflict occurs –

-   The pessimistic approach causes the client to wait.

-   The optimistic approach causes one of the transactions to fail, so that the failed transaction must be retried by the client.

**Optimistic Concurrency Control Approach \(Used by MOT\)**

The  **Optimistic Concurrency Control \(OCC\)**  approach detects conflicts as they occur, and performs validation checks at commit time.

The optimistic approach has less overhead and is usually more efficient, partly because transaction conflicts are uncommon in most applications.

The functional differences between optimistic and pessimistic approaches is larger when the REPEATABLE READ isolation level is enforced and is largest for the SERIALIZABLE isolation level.

**Pessimistic Approaches \(Not used by MOT\)**

The  **Pessimistic Concurrency Control**  \(2PL or 2-Phase Locking\) approach uses locks to block potential conflicts before they occur. A lock is applied when a statement is executed and released when the transaction is committed. Disk-based row‑stores use this approach \(with the addition of Multi-version Concurrency Control \[MVCC\]\).

In 2PL algorithms, while a transaction is writing a row, no other transaction can access it; and while a row is being read, no other transaction can overwrite it. Each row is locked at access time for both reading and writing; and the lock is released at commit time. These algorithms require a scheme for handling and avoiding deadlock. Deadlock can be detected by calculating cycles in a wait-for graph. Deadlock can be avoided by keeping time ordering using TSO or by some kind of back-off scheme.

**Encounter Time Locking \(ETL\)**

Another approach is Encounter Time Locking \(ETL\), where reads are handled in an optimistic manner, but writes lock the data that they access. As a result, writes from different ETL transactions are aware of each other and can decide to abort. It has been empirically verified that ETL improves the performance of OCC in two ways –

-   First, ETL detects conflicts early on and often increases transaction throughput. This is because transactions do not perform useless operations, because conflicts discovered at commit time \(in general\) cannot be solved without aborting at least one transaction.
-   Second, encounter-time locking Reads-After-Writes \(RAW\) are handled efficiently without requiring expensive or complex mechanisms.

**Conclusion**

OCC is the fastest option for most workloads. This finding has also been observed in our preliminary research phase.

One of the reasons is that when every core executes multiple threads, a lock is likely to be held by a swapped thread, especially in interactive mode. Another reason is that pessimistic algorithms involve deadlock detection \(which introduces overhead\) and usually uses read-write locks \(which are less efficient than standard spin-locks\).

We have chosen Silo because it was simpler than other existing options, such as TicToc, while maintaining the same performance for most workloads. ETL is sometimes faster than OCC, but it introduces spurious aborts which may confuse a user, in contrast to OCC which aborts only at commit.

## OCC vs 2PL Differences by Example<a name="section9676996592"></a>

The following shows the differences between two user experiences – Pessimistic \(for disk-based tables\) and Optimistic \(MOT tables\) when sessions update the same table simultaneously.

In this example, the following table test command is run –

```
table “TEST” – create table test (x int, y int, z int, primary key(x));
```

This example describes two aspects of the same test – user experience \(operations in the example\) and retry requirements.

**Example Pessimistic Approach – Used in Disk-based Tables**

The following is an example of the Pessimistic approach \(which is not Mot\). Any Isolation Level may apply.

The following two sessions perform a transaction that attempts to update a single table.

A WAIT LOCK action occurs and the client experience is that session \#2 is  _stuck_  until Session \#1 has completed a COMMIT. Only afterwards, is Session \#2 able to progress.

However, when this approach is used, both sessions succeed and no abort occurs \(unless SERIALIZABLE or REPEATABLE-READ isolation level is applied\), which results in the entire transaction needing to be retried.

**Table  1**  Pessimistic Approach Code Example

<a name="table35016046"></a>
<table><thead align="left"><tr id="row63096163"><th class="cellrowborder" valign="top" width="5.1005100510051%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="32.653265326532654%" id="mcps1.2.4.1.2"><p id="p46455584"><a name="p46455584"></a><a name="p46455584"></a>Session 1</p>
</th>
<th class="cellrowborder" valign="top" width="62.24622462246224%" id="mcps1.2.4.1.3"><p id="p4805945"><a name="p4805945"></a><a name="p4805945"></a>Session 2</p>
</th>
</tr>
</thead>
<tbody><tr id="row53737263"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p57751017"><a name="p57751017"></a><a name="p57751017"></a>t0</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p47320783"><a name="p47320783"></a><a name="p47320783"></a>Begin</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p7778251"><a name="p7778251"></a><a name="p7778251"></a>Begin</p>
</td>
</tr>
<tr id="row2895395"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p33200472"><a name="p33200472"></a><a name="p33200472"></a>t1</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p4883734"><a name="p4883734"></a><a name="p4883734"></a>update test set y=200 where x=1;</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row3472420"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p12830622"><a name="p12830622"></a><a name="p12830622"></a>t2</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p32647452"><a name="p32647452"></a><a name="p32647452"></a>y=200</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p27197959"><a name="p27197959"></a><a name="p27197959"></a>Update test set y=300 where x=1; -- Wait on lock</p>
</td>
</tr>
<tr id="row43455040"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p30197369"><a name="p30197369"></a><a name="p30197369"></a>t4</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p30067794"><a name="p30067794"></a><a name="p30067794"></a>Commit</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row41932174"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p39100271"><a name="p39100271"></a><a name="p39100271"></a>Unlock</p>
</td>
</tr>
<tr id="row16358126"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p29514091"><a name="p29514091"></a><a name="p29514091"></a>Commit</p>
<p id="p64300229"><a name="p64300229"></a><a name="p64300229"></a>(in READ-COMMITTED this will succeed, in SERIALIZABLE it will fail)</p>
</td>
</tr>
<tr id="row41831152"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p38884035"><a name="p38884035"></a><a name="p38884035"></a>y = 300</p>
</td>
</tr>
</tbody>
</table>

**Example Optimistic Approach – Used in MOT**

The following is an example of the Optimistic approach.

It describes the situation of creating an MOT table and then having two concurrent sessions updating that same MOT table simultaneously –

```
create foreign table test (x int, y int, z int, primary key(x));
```

-   The advantage of OCC is that there are no locks until COMMIT.
-   The disadvantage of using OCC is that the update may fail if another session updates the same record. If the update fails \(in all supported isolation levels\), an entire SESSION \#2 transaction must be retried.
-   Update conflicts are detected by the kernel at commit time by using a version checking mechanism.
-   SESSION \#2 will not wait in its update operation and will be aborted because of conflict detection at commit phase.

**Table  2**  Optimistic Approach Code Example – Used in MOT

<a name="table17657819"></a>
<table><thead align="left"><tr id="row53251301"><th class="cellrowborder" valign="top" width="11.219999999999999%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="41.839999999999996%" id="mcps1.2.4.1.2"><p id="p13041837"><a name="p13041837"></a><a name="p13041837"></a>Session 1</p>
</th>
<th class="cellrowborder" valign="top" width="46.94%" id="mcps1.2.4.1.3"><p id="p49755886"><a name="p49755886"></a><a name="p49755886"></a>Session 2</p>
</th>
</tr>
</thead>
<tbody><tr id="row3694967"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p30856945"><a name="p30856945"></a><a name="p30856945"></a>t0</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p16384644"><a name="p16384644"></a><a name="p16384644"></a>Begin</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p52087767"><a name="p52087767"></a><a name="p52087767"></a>Begin</p>
</td>
</tr>
<tr id="row66136720"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p55474086"><a name="p55474086"></a><a name="p55474086"></a>t1</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p64216018"><a name="p64216018"></a><a name="p64216018"></a>update test set y=200 where x=1;</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row38598983"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p39509941"><a name="p39509941"></a><a name="p39509941"></a>t2</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p46188627"><a name="p46188627"></a><a name="p46188627"></a>y=200</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p50291273"><a name="p50291273"></a><a name="p50291273"></a>Update test set y=300 where x=1;</p>
</td>
</tr>
<tr id="row49968277"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 "><p id="p20898627"><a name="p20898627"></a><a name="p20898627"></a>t4</p>
</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 "><p id="p15067230"><a name="p15067230"></a><a name="p15067230"></a>Commit</p>
</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p12486093"><a name="p12486093"></a><a name="p12486093"></a>y = 300</p>
</td>
</tr>
<tr id="row45265976"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p16676820"><a name="p16676820"></a><a name="p16676820"></a>Commit</p>
</td>
</tr>
<tr id="row15873654"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p58431029"><a name="p58431029"></a><a name="p58431029"></a>ABORT</p>
</td>
</tr>
<tr id="row56117216"><td class="cellrowborder" valign="top" width="11.219999999999999%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="41.839999999999996%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.94%" headers="mcps1.2.4.1.3 "><p id="p12060815"><a name="p12060815"></a><a name="p12060815"></a>y = 200</p>
</td>
</tr>
</tbody>
</table>

