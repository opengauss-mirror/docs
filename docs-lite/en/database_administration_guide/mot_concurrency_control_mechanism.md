# MOT Concurrency Control Mechanism<a name="EN-US_TOPIC_0289900650"></a>

After investing extensive research to find the best concurrency control mechanism, we concluded that SILO-based on OCC is the best ACID-compliant OCC algorithm for MOT. SILO provides the best foundation for MOT's challenging requirements.

>[!NOTE]NOTE 
>MOT is fully Atomicity, Consistency, Isolation, Durability \(ACID\)-compliant, as described in  [Introduction to MOT](mot_introduction.md).

The following topics describe MOT's concurrency control mechanism.

## MOT Local and Global Memory<a name="EN-US_TOPIC_0289900476"></a>

SILO manages both a local memory and a global memory, as shown in.

- Global memory is long-term shared memory is shared by all cores and is used primarily to store all the table data and indexes
- Local memory is short-term memory that is used primarily by sessions for handling transactions and store data changes in a primate to transaction memory until the commit phase.

When a transaction change is required, SILO handles the copying of all that transaction's data from the global memory into the local memory. Minimal locks are placed on the global memory according to the OCC approach, so that the contention time in the global shared memory is extremely minimal. After the transaction change has been completed, this data is pushed back from the local memory to the global memory.

The basic interactive transactional flow with our SILO-enhanced concurrency control is shown in the figure below:

**Figure  1**  Private \(Local\) Memory \(for each transaction\) and a Global Memory \(for all the transactions of all the cores\)<a name="en-us_topic_0283136457_en-us_topic_0280525155_fig18716015"></a>  
![]figures/private-(local)-memory-(for-each-transaction)-and-a-global-memory-(for-all-the-transactions-of-all-t.png "private-(local)-memory-(for-each-transaction)-and-a-global-memory-(for-all-the-transactions)-of-all-t")

For more details, refer to the Industrial-Strength OLTP Using Main Memory and Many-cores document<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>.

## MOT SILO Enhancements<a name="EN-US_TOPIC_0289900804"></a>

SILO<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>  in its basic algorithm flow outperformed many other ACID-compliant OCCs that we tested in our research experiments. However, in order to make SILO a product-grade mechanism, we had to enhance it with many essential functionalities that were missing in the original design, such as:

- Added support for interactive mode transactions, where transactions are running SQL by SQL from the client side and not as a single step on the server side
- Added optimistic inserts
- Added support for non-unique indexes
- Added support for read-after-write in transactions so that users can see their own changes before they are committed 
- Added support for lockless cooperative garbage collection
- Added support for lockless checkpoints
- Added support for fast recovery
- Added support for two-phase commit in a distributed deployment

Adding these enhancements without breaking the scalable characteristic of the original SILO was very challenging.

## MOT Isolation Levels<a name="EN-US_TOPIC_0289900771"></a>

Even though MOT is fully ACID-compliant \(as described in the section\), not all isolation levels are supported in openGauss 1.0. The following table describes all isolation levels, as well as what is and what is not supported by MOT.

**Table  1**  Isolation Levels

<a name="en-us_topic_0283137490_en-us_topic_0270171518_table38517424"></a>
<table><thead align="left"><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row29852746"><th class="cellrowborder" valign="top" width="24.240000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p2153374"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2153374"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2153374"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="75.76%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p40205569"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40205569"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40205569"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row35425694"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p50908955"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50908955"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50908955"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p29984672"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29984672"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29984672"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b1426598"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b1426598"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b1426598"></a>Not supported by MOT.</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row12839382"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p33357028"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33357028"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33357028"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p17564787"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17564787"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17564787"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b23865363"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b23865363"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b23865363"></a>Supported by MOT.</strong></p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p13461675"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p13461675"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p13461675"></a>The READ COMMITTED isolation level that guarantees that any data that is read was already <em id="en-us_topic_0283137490_en-us_topic_0270171518_i54046213"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i54046213"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i54046213"></a>committed</em> when it was read. It simply restricts the reader from seeing any intermediate, uncommitted or <em id="en-us_topic_0283137490_en-us_topic_0270171518_i16653875"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i16653875"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i16653875"></a>dirty </em>reads. Data is free to be changed after it has been read so that READ COMMITTED does not guarantee that if the transaction re-issues the read, that the s<em id="en-us_topic_0283137490_en-us_topic_0270171518_i15667148"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i15667148"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i15667148"></a>ame</em> data will be found.</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row6786611"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p12844628"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12844628"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12844628"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p33781949"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33781949"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33781949"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b35602093"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b35602093"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b35602093"></a>Not supported by MOT.</strong></p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p51983383"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p51983383"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p51983383"></a>The SNAPSHOT isolation level makes the same guarantees as SERIALIZABLE, except that concurrent transactions can modify the data. Instead, it forces every reader to see its own version of the world (its own <em id="en-us_topic_0283137490_en-us_topic_0270171518_i65197270"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i65197270"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i65197270"></a>snapshot</em>). This makes it very easy to program, plus it is very scalable, because it does not block concurrent updates. However, in many implementations this isolation level requires higher server resources.</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row49904522"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p15734461"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p15734461"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p15734461"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p66531800"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p66531800"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p66531800"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b61915292"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b61915292"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b61915292"></a>Supported by MOT.</strong></p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p20366724"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p20366724"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p20366724"></a>REPEATABLE READ is a higher isolation level that (in addition to the guarantees of the READ COMMITTED isolation level) guarantees that any data that is read <em id="en-us_topic_0283137490_en-us_topic_0270171518_i49082792"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i49082792"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i49082792"></a>cannot change</em>. If a transaction reads the same data again, it will find the same previously read data in place, unchanged and available to be read.</p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p39091944"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p39091944"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p39091944"></a>Because of the optimistic model, concurrent transactions are not prevented from updating rows read by this transaction. Instead, at commit time this transaction validates that the REPEATABLE READ isolation level has not been violated. If it has, this transaction is rolled back and must be retried.</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row16283183"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p43869467"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p43869467"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p43869467"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p63765972"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63765972"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63765972"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b37022841"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b37022841"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b37022841"></a>Not supported by MOT</strong>.</p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p64770113"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64770113"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64770113"></a>Serializable isolation makes an even stronger guarantee. In addition to everything that the REPEATABLE READ isolation level guarantees, it also guarantees that no new data can be seen by a subsequent read.</p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p46060111"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p46060111"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p46060111"></a>It is named <em id="en-us_topic_0283137490_en-us_topic_0270171518_i11887819"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i11887819"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i11887819"></a>SERIALIZABLE</em> because the isolation is so strict that it is almost a bit like having the transactions run in series rather than concurrently.</p>
</td>
</tr>
</tbody>
</table>

The following table shows the concurrency side effects enabled by the different isolation levels.

**Table  2**  Concurrency Side Effects Enabled by Isolation Levels

<a name="en-us_topic_0283137490_en-us_topic_0270171518_table47951145"></a>
<table><thead align="left"><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row12791742"><th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p29498151"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29498151"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29498151"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="18.37%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p40539992"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40539992"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40539992"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p62513914"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p62513914"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p62513914"></a>Non-repeatable Read</p>
</th>
<th class="cellrowborder" valign="top" width="16.33%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p30462260"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p30462260"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p30462260"></a>Phantom</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row51524015"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p12695699"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12695699"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12695699"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p21718662"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p21718662"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p21718662"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p14381235"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p14381235"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p14381235"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p24029376"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p24029376"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p24029376"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row14937794"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p2001795"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2001795"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2001795"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p27927672"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p27927672"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p27927672"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p47548937"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p47548937"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p47548937"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p26258720"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p26258720"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p26258720"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row35001888"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p16580664"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p16580664"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p16580664"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p856520"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p856520"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p856520"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p2269305"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2269305"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2269305"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p49596018"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p49596018"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p49596018"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row43710986"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p50928963"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50928963"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50928963"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p31605337"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p31605337"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p31605337"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p9895475"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p9895475"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p9895475"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p63335993"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63335993"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63335993"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row33153033"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p1041149"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p1041149"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p1041149"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p17224274"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17224274"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17224274"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p52988976"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p52988976"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p52988976"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p64248638"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64248638"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64248638"></a>No</p>
</td>
</tr>
</tbody>
</table>

In the near future release, openGauss MOT will also support both SNAPSHOT and SERIALIZABLE isolation levels.

## MOT Optimistic Concurrency Control \(OCC\)<a name="EN-US_TOPIC_0289899956"></a>

The concurrency control \(CC\) module provides all transactional requirements for the main memory engine. The CC module mainly provides various levels of isolation support for the main memory engine.

### OCC and Pessimistic Two-phase Locking \(2PL\)<a name="en-us_topic_0283137599_en-us_topic_0280525159_section48860244"></a>

The difference between pessimistic 2PL and OCC lies in the use of pessimistic and optimistic methods for transaction integrity, respectively.

Disk-based tables use a pessimistic method, which is the most common database method. The MOT engine uses an optimistic method.

If a conflict occurs, the main difference between the pessimistic and optimistic methods is as follows:

- A pessimistic method causes the client to wait.
- An optimistic method causes one of the transactions to fail, making the client have to retry the failed transaction.

**OCC Method \(Used in MOT\)**

The OCC method detects conflicts when conflicts occur and perform validation checks during committing.

The OCC method is less expensive and typically more efficient because transaction conflicts are not common in most applications.

When the REPEATABLE READ isolation level is enforced, the function difference between the optimistic and pessimistic methods is larger. When the SERIALIZABLE isolation level is enforced, the function difference is the largest.

**Pessimistic Method \(Not Used in MOT\)**

The pessimistic 2PL method uses locks to prevent potential conflicts. A lock is used when a statement is executed, and the lock is released when the transaction is committed. Disk-based row store uses this method and adds the multi-version concurrency control \(MVCC\).

In the 2PL algorithm, when a transaction is writing to a row, other transactions cannot access the row. When a row is being read, other transactions cannot overwrite the row. Each row is locked for read and write during access. The lock is released when the transaction is committed. These algorithms require a solution to handle and avoid deadlocks. Deadlocks can be detected by calculating the period in the wait-for graph. Deadlocks can be avoided by using TSO<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>  to preserve time series or by using some kind of fallback scheme.

**Encounter-time Locking \(ETL\)**

Another method is ETL, which handles the read operation in an optimistic way but locks the data assessed by the write operation. Therefore, write operations from different ETL transactions are aware of each other and can decide to abort. The experiment<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>  proves that the ETL improves the OCC performance in the following two ways:

- First, ETL detects conflicts early and typically increases transaction throughput. This is because the transaction does not perform useless operations. \(Generally\) Conflicts found during committing cannot be resolved without aborting at least one transaction.
- Second, ETL runs efficiently in read-after-write \(RAW\) mode, eliminating the need for expensive or complex mechanisms.

**Conclusion:**

OCC is the fastest option for most workloads<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>. We have found this in the preliminary study phase.

One reason is that when each core executes multiple threads, the lock is likely to be held by the swap thread, especially in interactive mode. Another reason is that pessimistic algorithms involve deadlock detection \(which incurs overhead\) and typically use read-write locks \(which are less efficient than standard spin locks\).

We chose Silo<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>  because it is simpler than other existing options, such as TicToc<sup>\[</sup>[Comparison: Disk vs. MOT](comparison_disk_vs_mot.md)<sup>\]</sup>, while maintaining the same performance for most workloads. ETL is sometimes faster than OCC, but it introduces a false abort that can confuse the user, while OCC aborts only during committing.

### Differences Between OCC and 2PL<a name="en-us_topic_0283137599_en-us_topic_0280525159_section37089017"></a>

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

- The advantage of OCC is that there is no lock before COMMIT.
- The disadvantage of OCC is that if another session updates the same record, the update may fail. If the update fails \(at all supported isolation levels\), the entire session \#2 transaction must be retried.
- Update conflicts are detected by the kernel through the version check mechanism during committing.
- Session 2 will not wait for its update operation and will abort due to a conflict detected during committing.

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
