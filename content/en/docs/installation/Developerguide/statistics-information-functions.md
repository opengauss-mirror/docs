# Statistics Information Functions<a name="EN-US_TOPIC_0242370462"></a>

Statistics information functions are divided into the following two categories: functions that access databases, using the OID of each table or index in a database to mark the database for which statistics are generated; functions that access servers, identified by the server process ID, whose value ranges from 1 to the number of currently active servers.

-   pg\_stat\_get\_db\_conflict\_tablespace\(oid\)

    Description: Number of queries canceled due to a conflict between the restored tablespace and the deleted tablespace in the database.

    Return type: bigint

-   pg\_control\_group\_config

    Description: Prints cgroup configurations on the current node.

    Return type: record

-   pg\_stat\_get\_db\_stat\_reset\_time\(oid\)

    Description: Last time when database statistics were reset. It is initialized to the system time during the first connection to each database. The reset time is updated when you call  **pg\_stat\_reset**  on the database and execute  **pg\_stat\_reset\_single\_table\_counters**  against any table or index in it.

    Return type: timestamptz

-   pg\_stat\_get\_function\_total\_time\(oid\)

    Description: Total wall clock time spent in the function, in microseconds. The time spent on this function call is included.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_returned\(oid\)

    Description: Number of rows read through sequential scans when the parameter is a table in the current transaction, or number of index entries returned when the parameter is an index.

    Return type: bigint

-   pg\_stat\_get\_xact\_numscans\(oid\)

    Description: Number of sequential scans performed when the parameter is a table in the current transaction, or number of index scans performed when the parameter is an index.

    Return type: bigint

-   pg\_stat\_get\_xact\_blocks\_fetched\(oid\)

    Description: Number of disk block fetch requests for a table or index in the current transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_blocks\_hit\(oid\)

    Description: Number of disk block fetch requests for tables or indexes found in cache in the current transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_calls\(oid\)

    Description: Number of times the function is called in the current transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_self\_time\(oid\)

    Description: Time spent in this function in the current transaction, excluding the time spent in calling the function.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_total\_time\(oid\)

    Description: Total wall clock time \(in microseconds\) spent in the function in the current transaction, including the time spent on the function call.

    Return type:

-   pg\_stat\_get\_wal\_senders\(\)

    Description: Queries walsender information on the primary server.

    Return type: setofrecord

    The following table describes return fields.

    **Table  1**  Return field description

    <a name="table4851182894313"></a>
    <table><thead align="left"><tr id="row1785310288438"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12853128154310"><a name="p12853128154310"></a><a name="p12853128154310"></a>Field</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p19853828194315"><a name="p19853828194315"></a><a name="p19853828194315"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p585415284435"><a name="p585415284435"></a><a name="p585415284435"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row8854102818434"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p178545286432"><a name="p178545286432"></a><a name="p178545286432"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p198541028184313"><a name="p198541028184313"></a><a name="p198541028184313"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p58547281439"><a name="p58547281439"></a><a name="p58547281439"></a>Thread ID of the WAL sender</p>
    </td>
    </tr>
    <tr id="row1685432854317"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p78541228174318"><a name="p78541228174318"></a><a name="p78541228174318"></a>sender_pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p385432814435"><a name="p385432814435"></a><a name="p385432814435"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p9855202814433"><a name="p9855202814433"></a><a name="p9855202814433"></a>Lightweight thread ID of the WAL sender.</p>
    </td>
    </tr>
    <tr id="row148551928134318"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16855192874317"><a name="p16855192874317"></a><a name="p16855192874317"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3855192834316"><a name="p3855192834316"></a><a name="p3855192834316"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1085532864317"><a name="p1085532864317"></a><a name="p1085532864317"></a>Type of the primary node</p>
    </td>
    </tr>
    <tr id="row185522894310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6855122834314"><a name="p6855122834314"></a><a name="p6855122834314"></a>peer_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17855828184314"><a name="p17855828184314"></a><a name="p17855828184314"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8855928134313"><a name="p8855928134313"></a><a name="p8855928134313"></a>Type of the standby node</p>
    </td>
    </tr>
    <tr id="row178557287438"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p138551828184310"><a name="p138551828184310"></a><a name="p138551828184310"></a>peer_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p16855828104310"><a name="p16855828104310"></a><a name="p16855828104310"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p168561628134316"><a name="p168561628134316"></a><a name="p168561628134316"></a>Status of the standby node</p>
    </td>
    </tr>
    <tr id="row2856628104310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p185615288438"><a name="p185615288438"></a><a name="p185615288438"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p98561028104316"><a name="p98561028104316"></a><a name="p98561028104316"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p169661522175410"><a name="p169661522175410"></a><a name="p169661522175410"></a>Status of the WAL sender</p>
    </td>
    </tr>
    <tr id="row4154017114820"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p171551417124818"><a name="p171551417124818"></a><a name="p171551417124818"></a>catchup_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1115591754812"><a name="p1115591754812"></a><a name="p1115591754812"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p815510176485"><a name="p815510176485"></a><a name="p815510176485"></a>Startup time of a catchup task</p>
    </td>
    </tr>
    <tr id="row16428172314481"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2428323154814"><a name="p2428323154814"></a><a name="p2428323154814"></a>catchup_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p742910234485"><a name="p742910234485"></a><a name="p742910234485"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1229635315548"><a name="p1229635315548"></a><a name="p1229635315548"></a>End time of a catchup task</p>
    </td>
    </tr>
    <tr id="row47181645164813"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p47192045194810"><a name="p47192045194810"></a><a name="p47192045194810"></a>sender_sent_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p571913450487"><a name="p571913450487"></a><a name="p571913450487"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p107193457482"><a name="p107193457482"></a><a name="p107193457482"></a>Sending position of the primary node</p>
    </td>
    </tr>
    <tr id="row14138749194816"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1613820490489"><a name="p1613820490489"></a><a name="p1613820490489"></a>sender_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0138164974814"><a name="p0138164974814"></a><a name="p0138164974814"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p034842216556"><a name="p034842216556"></a><a name="p034842216556"></a>Writing position of the primary node</p>
    </td>
    </tr>
    <tr id="row10320105354817"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p932135314817"><a name="p932135314817"></a><a name="p932135314817"></a>sender_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p43212539486"><a name="p43212539486"></a><a name="p43212539486"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15889122965515"><a name="p15889122965515"></a><a name="p15889122965515"></a>Flushing position of the primary node</p>
    </td>
    </tr>
    <tr id="row98378317497"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1083743194917"><a name="p1083743194917"></a><a name="p1083743194917"></a>sender_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15837173154913"><a name="p15837173154913"></a><a name="p15837173154913"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p153971135195511"><a name="p153971135195511"></a><a name="p153971135195511"></a>Redo position of the primary node</p>
    </td>
    </tr>
    <tr id="row4196116495"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16191811184916"><a name="p16191811184916"></a><a name="p16191811184916"></a>receiver_received_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p020181116497"><a name="p020181116497"></a><a name="p020181116497"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p820911114915"><a name="p820911114915"></a><a name="p820911114915"></a>Receiving position of the standby node</p>
    </td>
    </tr>
    <tr id="row119641164498"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3964186154913"><a name="p3964186154913"></a><a name="p3964186154913"></a>receiver_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p209641762496"><a name="p209641762496"></a><a name="p209641762496"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p20527184885512"><a name="p20527184885512"></a><a name="p20527184885512"></a>Writing position of the standby node</p>
    </td>
    </tr>
    <tr id="row71391315164918"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p15140615164910"><a name="p15140615164910"></a><a name="p15140615164910"></a>receiver_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11140191511495"><a name="p11140191511495"></a><a name="p11140191511495"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4140121544913"><a name="p4140121544913"></a><a name="p4140121544913"></a>Flushing position of the standby node</p>
    </td>
    </tr>
    <tr id="row53771520124919"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p63782208496"><a name="p63782208496"></a><a name="p63782208496"></a>receiver_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11378220104918"><a name="p11378220104918"></a><a name="p11378220104918"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p937812012495"><a name="p937812012495"></a><a name="p937812012495"></a>Redo position of the standby node</p>
    </td>
    </tr>
    <tr id="row18248124164919"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p424862415498"><a name="p424862415498"></a><a name="p424862415498"></a>sync_percent</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17248102454915"><a name="p17248102454915"></a><a name="p17248102454915"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15248182410497"><a name="p15248182410497"></a><a name="p15248182410497"></a>Synchronization percentage</p>
    </td>
    </tr>
    <tr id="row14443140135117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44447095112"><a name="p44447095112"></a><a name="p44447095112"></a>sync_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p944518015518"><a name="p944518015518"></a><a name="p944518015518"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14451065118"><a name="p14451065118"></a><a name="p14451065118"></a>Synchronization status</p>
    </td>
    </tr>
    <tr id="row679215435117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2079294175119"><a name="p2079294175119"></a><a name="p2079294175119"></a>sync_priority</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2079216445113"><a name="p2079216445113"></a><a name="p2079216445113"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p484715405565"><a name="p484715405565"></a><a name="p484715405565"></a>Priority of synchronous replication</p>
    </td>
    </tr>
    <tr id="row18584611135117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13585201145115"><a name="p13585201145115"></a><a name="p13585201145115"></a>sync_most_available</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2058501116515"><a name="p2058501116515"></a><a name="p2058501116515"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13585141135119"><a name="p13585141135119"></a><a name="p13585141135119"></a>Maximum availability mode</p>
    </td>
    </tr>
    <tr id="row199236418516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16924154195120"><a name="p16924154195120"></a><a name="p16924154195120"></a>channel</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12924184155113"><a name="p12924184155113"></a><a name="p12924184155113"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p420111065210"><a name="p420111065210"></a><a name="p420111065210"></a>Channel information of the WAL sender</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_stream\_replications\(\)

    Description: Queries the primary/standby replication status.

    Return type: setofrecord

    The following table describes return values.

    **Table  2**  Return value description

    <a name="table1662971714811"></a>
    <table><thead align="left"><tr id="row11630717882"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p11633617483"><a name="p11633617483"></a><a name="p11633617483"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p93814503815"><a name="p93814503815"></a><a name="p93814503815"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p36691008915"><a name="p36691008915"></a><a name="p36691008915"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7633141718811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p66339171386"><a name="p66339171386"></a><a name="p66339171386"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p36331917982"><a name="p36331917982"></a><a name="p36331917982"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p863410171182"><a name="p863410171182"></a><a name="p863410171182"></a>Local role</p>
    </td>
    </tr>
    <tr id="row196343175810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p163411171483"><a name="p163411171483"></a><a name="p163411171483"></a>static_connections</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9634517888"><a name="p9634517888"></a><a name="p9634517888"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p86340175811"><a name="p86340175811"></a><a name="p86340175811"></a>Connection statistics</p>
    </td>
    </tr>
    <tr id="row11634417989"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3635141710810"><a name="p3635141710810"></a><a name="p3635141710810"></a>db_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p176351517285"><a name="p176351517285"></a><a name="p176351517285"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p763517173813"><a name="p763517173813"></a><a name="p763517173813"></a>Database status</p>
    </td>
    </tr>
    <tr id="row16537337918"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p135483315913"><a name="p135483315913"></a><a name="p135483315913"></a>detail_information</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1540335913"><a name="p1540335913"></a><a name="p1540335913"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p554113314916"><a name="p554113314916"></a><a name="p554113314916"></a>Detailed information</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_db\_numbackends\(oid\)

    Description: Number of active server processes for a database

    Return type: integer

-   pg\_stat\_get\_db\_xact\_commit\(oid\)

    Description: Number of transactions committed in a database

    Return type: bigint

-   pg\_stat\_get\_db\_xact\_rollback\(oid\)

    Description: Number of transactions rolled back in a database

    Return type: bigint

-   pg\_stat\_get\_db\_blocks\_fetched\(oid\)

    Description: Number of disk blocks fetch requests for a database

    Return type: bigint

-   pg\_stat\_get\_db\_blocks\_hit\(oid\)

    Description: Number of disk block fetch requests found in cache for a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_returned\(oid\)

    Description: Number of tuples returned for a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_fetched\(oid\)

    Description: Number of tuples fetched for a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_inserted\(oid\)

    Description: Number of tuples inserted in a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_updated\(oid\)

    Description: Number of tuples updated in a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_deleted\(oid\)

    Description: Number of tuples deleted in a database

    Return type: bigint

-   pg\_stat\_get\_db\_conflict\_lock\(oid\)

    Description: Number of lock conflicts in a database

    Return type: bigint

-   pg\_stat\_get\_db\_deadlocks\(oid\)

    Description: Number of deadlocks in a database

    Return type: bigint

-   pg\_stat\_get\_numscans\(oid\)

    Description: Number of sequential row scans done if parameters are in a table or number of index scans done if parameters are in an index

    Return type: bigint

-   pg\_stat\_get\_role\_name\(oid\)

    Description: Obtains the username based on the user OID. Only the sysadmin and monitor admin users can access.

    Return type: text

    Example:

    ```
    postgres=# select pg_stat_get_role_name(10);
     pg_stat_get_role_name
    -----------------------
     aabbcc
    (1 row)
    ```

-   pg\_stat\_get\_tuples\_returned\(oid\)

    Description: Number of sequential row scans done if parameters are in a table or number of index entries returned if parameters are in an index

    Return type: bigint

-   pg\_stat\_get\_tuples\_fetched\(oid\)

    Description: Number of table rows fetched by bitmap scans if parameters are in a table, or table rows fetched by simple index scans using the index if parameters are in an index

    Return type: bigint

-   pg\_stat\_get\_tuples\_inserted\(oid\)

    Description: Number of rows inserted into table

    Return type: bigint

-   pg\_stat\_get\_tuples\_updated\(oid\)

    Description: Number of rows updated in table

    Return type: bigint

-   pg\_stat\_get\_tuples\_deleted\(oid\)

    Description: Number of rows deleted from table

    Return type: bigint

-   pg\_stat\_get\_tuples\_changed\(oid\)

    Description: Total number of inserted, updated, and deleted rows after the table was last analyzed or autoanalyzed

    Return type: bigint

-   pg\_stat\_get\_tuples\_hot\_updated\(oid\)

    Description: Number of rows HOT-updated in table

    Return type: bigint

-   pg\_stat\_get\_live\_tuples\(oid\)

    Description: Number of live rows in table

    Return type: bigint

-   pg\_stat\_get\_dead\_tuples\(oid\)

    Description: Number of dead rows in table

    Return type: bigint

-   pg\_stat\_get\_blocks\_fetched\(oid\)

    Description: Number of disk block fetch requests for table or index

    Return type: bigint

-   pg\_stat\_get\_blocks\_hit\(oid\)

    Description: Number of disk block requests found in cache for table or index

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_inserted\(oid\)

    Description: Number of rows in the corresponding table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_updated\(oid\)

    Description: Number of rows that have been updated in the corresponding table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_deleted\(oid\)

    Description: Number of rows deleted from the corresponding table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_changed\(oid\)

    Description: Total number of inserted, updated, and deleted rows after the table partition was last analyzed or autoanalyzed

    Return type: bigint

-   pg\_stat\_get\_partition\_live\_tuples\(oid\)

    Description: Number of live rows in a table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_dead\_tuples\(oid\)

    Description: Number of dead rows in a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_inserted\(oid\)

    Description: Number of tuple inserted into the active subtransactions related to the table.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_deleted\(oid\)

    Description: Number of deleted tuples in the active subtransactions related to a table

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_hot\_updated\(oid\)

    Description: Number of hot updated tuples in the active subtransactions related to a table

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_updated\(oid\)

    Description: Number of updated tuples in the active subtransactions related to a table

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_inserted\(oid\)

    Description: Number of inserted tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_deleted\(oid\)

    Description: Number of deleted tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_hot\_updated\(oid\)

    Description: Number of hot updated tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_updated\(oid\)

    Description: Number of updated tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_last\_vacuum\_time\(oid\)

    Description: Last time when the autovacuum thread is manually started to clear a table

    Return type: timestamptz

-   pg\_stat\_get\_last\_autovacuum\_time\(oid\)

    Description: Time of the last vacuum initiated by the autovacuum daemon on this table

    Return type: timestamptz

-   pg\_stat\_get\_vacuum\_count\(oid\)

    Description: Number of times a table is manually cleared

    Return type: bigint

-   pg\_stat\_get\_autovacuum\_count\(oid\)

    Description: Number of times the autovacuum daemon is started to clear a table

    Return type: bigint

-   pg\_stat\_get\_last\_analyze\_time\(oid\)

    Description: Last time when a table starts to be analyzed manually or by the autovacuum thread

    Return type: timestamptz

-   pg\_stat\_get\_last\_autoanalyze\_time\(oid\)

    Description: Time of the last analysis initiated by the autovacuum daemon on this table

    Return type: timestamptz

-   pg\_stat\_get\_analyze\_count\(oid\)

    Description: Number of times a table is manually analyzed

    Return type: bigint

-   pg\_stat\_get\_autoanalyze\_count\(oid\)

    Description: Number of times the autovacuum daemon analyzes a table

    Return type: bigint

-   pg\_total\_autovac\_tuples\(bool,bool\)

    Description: Returns tuple records related to the total autovac, such as  **nodename**,  **nspname**,  **relname**, and tuple IUDs. The input parameters specify whether to query  **relation**  and  **local**  information, respectively.

    Return type: setofrecord

    The following table describes return parameters.

    **Table  3**  Return parameter description

    <a name="table14816112541517"></a>
    <table><thead align="left"><tr id="row148172025141520"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p58171325151511"><a name="p58171325151511"></a><a name="p58171325151511"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p12242101871719"><a name="p12242101871719"></a><a name="p12242101871719"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p45501846111711"><a name="p45501846111711"></a><a name="p45501846111711"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row20818152517157"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13818162581514"><a name="p13818162581514"></a><a name="p13818162581514"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1859598171917"><a name="p1859598171917"></a><a name="p1859598171917"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10818112501512"><a name="p10818112501512"></a><a name="p10818112501512"></a>Node name</p>
    </td>
    </tr>
    <tr id="row581862581517"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4818425131514"><a name="p4818425131514"></a><a name="p4818425131514"></a>nspname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p881842519152"><a name="p881842519152"></a><a name="p881842519152"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p88181925131514"><a name="p88181925131514"></a><a name="p88181925131514"></a>Name of a namespace</p>
    </td>
    </tr>
    <tr id="row18184258154"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p158181725191514"><a name="p158181725191514"></a><a name="p158181725191514"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1981810253156"><a name="p1981810253156"></a><a name="p1981810253156"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p108191125101512"><a name="p108191125101512"></a><a name="p108191125101512"></a>Name of an object, such as a table, index, or view</p>
    </td>
    </tr>
    <tr id="row7819925111516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16819162510156"><a name="p16819162510156"></a><a name="p16819162510156"></a>partname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p138191225161517"><a name="p138191225161517"></a><a name="p138191225161517"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4819202591511"><a name="p4819202591511"></a><a name="p4819202591511"></a>Partition name</p>
    </td>
    </tr>
    <tr id="row28191225121515"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p108191325101511"><a name="p108191325101511"></a><a name="p108191325101511"></a>n_dead_tuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11819152521514"><a name="p11819152521514"></a><a name="p11819152521514"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2081912258159"><a name="p2081912258159"></a><a name="p2081912258159"></a>Number of dead rows in a table partition</p>
    </td>
    </tr>
    <tr id="row12476369209"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1024820362203"><a name="p1024820362203"></a><a name="p1024820362203"></a>n_live_tuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1124823620202"><a name="p1124823620202"></a><a name="p1124823620202"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1824812368201"><a name="p1824812368201"></a><a name="p1824812368201"></a>Number of live rows in a table partition</p>
    </td>
    </tr>
    <tr id="row195051441102010"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1505164132014"><a name="p1505164132014"></a><a name="p1505164132014"></a>changes_since_analyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1750554182015"><a name="p1750554182015"></a><a name="p1750554182015"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14506134182011"><a name="p14506134182011"></a><a name="p14506134182011"></a>Number of changes generated by ANALYZE</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_autovac\_status\(oid\)

    Description: Returns autovac information, such as  **nodename**,  **nspname**,  **relname**,  **analyze**,  **vacuum**, thresholds of  **analyze**  and  **vacuum**, and the number of analyzed or vacuumed tuples. Only the sysadmin user can use this function.

    Return type: setofrecord

    The following table describes return parameters.

    **Table  4**  Return parameter description

    <a name="table1494614261571"></a>
    <table><thead align="left"><tr id="row109474261377"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p994712261279"><a name="p994712261279"></a><a name="p994712261279"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1694762611712"><a name="p1694762611712"></a><a name="p1694762611712"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p20948202615715"><a name="p20948202615715"></a><a name="p20948202615715"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1294816261078"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p29489261873"><a name="p29489261873"></a><a name="p29489261873"></a>nspname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p199489261078"><a name="p199489261078"></a><a name="p199489261078"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p726619322126"><a name="p726619322126"></a><a name="p726619322126"></a>Name of a namespace</p>
    </td>
    </tr>
    <tr id="row1294815261712"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p794892615720"><a name="p794892615720"></a><a name="p794892615720"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p149484261873"><a name="p149484261873"></a><a name="p149484261873"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1149882681218"><a name="p1149882681218"></a><a name="p1149882681218"></a>Name of an object, such as a table, index, or view</p>
    </td>
    </tr>
    <tr id="row1494915261174"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1294916261572"><a name="p1294916261572"></a><a name="p1294916261572"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1894913261374"><a name="p1894913261374"></a><a name="p1894913261374"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1094912265720"><a name="p1094912265720"></a><a name="p1094912265720"></a>Node name</p>
    </td>
    </tr>
    <tr id="row694917262077"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p99497261970"><a name="p99497261970"></a><a name="p99497261970"></a>doanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1994915261776"><a name="p1994915261776"></a><a name="p1994915261776"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4433181417127"><a name="p4433181417127"></a><a name="p4433181417127"></a>Whether to execute <strong id="b14121172520465"><a name="b14121172520465"></a><a name="b14121172520465"></a>ANALYZE</strong></p>
    </td>
    </tr>
    <tr id="row184591961294"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16460261899"><a name="p16460261899"></a><a name="p16460261899"></a>anltuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1546117616919"><a name="p1546117616919"></a><a name="p1546117616919"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15595108201213"><a name="p15595108201213"></a><a name="p15595108201213"></a>Number of ANALYZE tuples</p>
    </td>
    </tr>
    <tr id="row1420519111918"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14206171115912"><a name="p14206171115912"></a><a name="p14206171115912"></a>anlthresh</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13206111111913"><a name="p13206111111913"></a><a name="p13206111111913"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p92077119918"><a name="p92077119918"></a><a name="p92077119918"></a>ANALYZE threshold</p>
    </td>
    </tr>
    <tr id="row56435309913"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11644193012911"><a name="p11644193012911"></a><a name="p11644193012911"></a>dovacuum</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13644123010912"><a name="p13644123010912"></a><a name="p13644123010912"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p106443301396"><a name="p106443301396"></a><a name="p106443301396"></a>Whether to execute <strong id="b677178194710"><a name="b677178194710"></a><a name="b677178194710"></a>VACUUM</strong></p>
    </td>
    </tr>
    <tr id="row066734693"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3661634094"><a name="p3661634094"></a><a name="p3661634094"></a>vactuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3671834991"><a name="p3671834991"></a><a name="p3671834991"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5679347911"><a name="p5679347911"></a><a name="p5679347911"></a>Number of VACUUM tuples</p>
    </td>
    </tr>
    <tr id="row5453145420910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p134541654899"><a name="p134541654899"></a><a name="p134541654899"></a>vacthresh</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p134549541395"><a name="p134549541395"></a><a name="p134549541395"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p845555420919"><a name="p845555420919"></a><a name="p845555420919"></a>VACUUM threshold</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_autovac\_timeout\(oid\)

    Description: Returns the number of consecutive timeouts during the autovac operation on a table. If the table information is invalid or the node information is abnormal,  **NULL**  will be returned.

    Return type: bigint

-   pg\_autovac\_dbnode\(oid\)

    Description: Returns the name of the dbnode performing the autovac operation on a table. If the table information is invalid or the node information is abnormal,  **NULL**  will be returned.

    Return type: text

-   pg\_stat\_get\_last\_data\_changed\_time\(oid\)

    Description: Returns the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was performed last time on a table. The data in the  **last\_data\_changed**  column of the  [PG\_STAT\_ALL\_TABLES](en-us_topic_0242385969.md)  view is calculated by using this function. The performance of obtaining the last modification time by using the view is poor when the table has a large amount of data. In this case, you are advised to use the function.

    Return type: timestamptz

-   pg\_stat\_set\_last\_data\_changed\_time\(oid\)

    Description: Manually changes the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was performed last time.

    Return type: void

-   pg\_backend\_pid\(\)

    Description: Thread ID of the server thread attached to the current session

    Return type: integer

-   pg\_stat\_get\_activity\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The return results are a subnet of those \(excluding the  **connection\_info**  column\) in the  [PG\_STAT\_ACTIVITY](en-us_topic_0242385966.md)  view.

    Example:

    ```
    postgres=# select * from pg_stat_get_activity(140036483839744);
     datid |       pid       |    sessionid    | usesysid | application_name | state  |                        query                         | waiting |          xact_start    
           |          query_start          |         backend_start         |         state_change          | client_addr | client_hostname | client_port | enqueue |     query_i
    d      
    -------+-----------------+-----------------+----------+------------------+--------+------------------------------------------------------+---------+------------------------
    -------+-------------------------------+-------------------------------+-------------------------------+-------------+-----------------+-------------+---------+------------
    -------
     15914 | 140036483839744 | 140036483839744 |       10 | gsql             | active | select * from pg_stat_get_activity(140036483839744); | f       | 2020-06-24 10:53:19.583
    666+08 | 2020-06-24 10:53:19.583598+08 | 2020-06-24 10:00:03.471893+08 | 2020-06-24 10:53:19.583601+08 |             |                 |          -1 |         | 72902018968
    108794
    (1 row)
    ```

    Return type: setofrecord

    The following table describes return parameters.

    **Table  5**  Return parameter description

    <a name="table147214071613"></a>
    <table><thead align="left"><tr id="row77304010165"><th class="cellrowborder" valign="top" width="35.063506350635066%" id="mcps1.2.4.1.1"><p id="p5737405161"><a name="p5737405161"></a><a name="p5737405161"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.6031603160316%" id="mcps1.2.4.1.2"><p id="p14731540111617"><a name="p14731540111617"></a><a name="p14731540111617"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p97334010164"><a name="p97334010164"></a><a name="p97334010164"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16731540181620"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p673440101616"><a name="p673440101616"></a><a name="p673440101616"></a>datid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p4741840111618"><a name="p4741840111618"></a><a name="p4741840111618"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p191201373292"><a name="p191201373292"></a><a name="p191201373292"></a>OID of the database that the user session connects to in the backend</p>
    </td>
    </tr>
    <tr id="row17741640191617"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p16741440131612"><a name="p16741440131612"></a><a name="p16741440131612"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p137484011610"><a name="p137484011610"></a><a name="p137484011610"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1576062313290"><a name="p1576062313290"></a><a name="p1576062313290"></a>Thread ID of the backend</p>
    </td>
    </tr>
    <tr id="row67494011161"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p107434051611"><a name="p107434051611"></a><a name="p107434051611"></a>sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p187410405162"><a name="p187410405162"></a><a name="p187410405162"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p177510404167"><a name="p177510404167"></a><a name="p177510404167"></a>Session ID</p>
    </td>
    </tr>
    <tr id="row1775194051619"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p187524016169"><a name="p187524016169"></a><a name="p187524016169"></a>usesysid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p137504017161"><a name="p137504017161"></a><a name="p137504017161"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p137594021613"><a name="p137594021613"></a><a name="p137594021613"></a>Name of the user logged in to the backend</p>
    </td>
    </tr>
    <tr id="row1175144021611"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p976154020164"><a name="p976154020164"></a><a name="p976154020164"></a>application_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p187619405164"><a name="p187619405164"></a><a name="p187619405164"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p3765408162"><a name="p3765408162"></a><a name="p3765408162"></a>Name of the application connected to the backend</p>
    </td>
    </tr>
    <tr id="row240816535187"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p2409125351812"><a name="p2409125351812"></a><a name="p2409125351812"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p52401239271"><a name="p52401239271"></a><a name="p52401239271"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8410553181812"><a name="p8410553181812"></a><a name="p8410553181812"></a>Overall status of this backend.</p>
    </td>
    </tr>
    <tr id="row20433131516198"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p1743491521918"><a name="p1743491521918"></a><a name="p1743491521918"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p04341915121912"><a name="p04341915121912"></a><a name="p04341915121912"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18434101541910"><a name="p18434101541910"></a><a name="p18434101541910"></a>Text of this backend's most recent query. If <strong id="b102411640184815"><a name="b102411640184815"></a><a name="b102411640184815"></a>state</strong> is <strong id="b1524644015481"><a name="b1524644015481"></a><a name="b1524644015481"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
    </td>
    </tr>
    <tr id="row18561719141914"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p17857181918193"><a name="p17857181918193"></a><a name="p17857181918193"></a>waiting</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p16857121917196"><a name="p16857121917196"></a><a name="p16857121917196"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19857121951918"><a name="p19857121951918"></a><a name="p19857121951918"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b338854814488"><a name="b338854814488"></a><a name="b338854814488"></a>true</strong>.</p>
    </td>
    </tr>
    <tr id="row10811236121917"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p38111636131910"><a name="p38111636131910"></a><a name="p38111636131910"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p15811936181913"><a name="p15811936181913"></a><a name="p15811936181913"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10812636191920"><a name="p10812636191920"></a><a name="p10812636191920"></a>Time when current transaction was started (null if no transaction is active).</p>
    <p id="p4616541132518"><a name="p4616541132518"></a><a name="p4616541132518"></a>If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b14150101214497"><a name="b14150101214497"></a><a name="b14150101214497"></a>query_start</strong> column.</p>
    </td>
    </tr>
    <tr id="row1922445271914"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p72255527193"><a name="p72255527193"></a><a name="p72255527193"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p32254522193"><a name="p32254522193"></a><a name="p32254522193"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p156675918251"><a name="p156675918251"></a><a name="p156675918251"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b719917280495"><a name="b719917280495"></a><a name="b719917280495"></a>state</strong> is not <strong id="b41995288492"><a name="b41995288492"></a><a name="b41995288492"></a>active</strong></p>
    </td>
    </tr>
    <tr id="row165075621919"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p4651156171920"><a name="p4651156171920"></a><a name="p4651156171920"></a>backend_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p565125621914"><a name="p565125621914"></a><a name="p565125621914"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p206515564197"><a name="p206515564197"></a><a name="p206515564197"></a>Time when this process was started, that is, when the client connected to the server</p>
    </td>
    </tr>
    <tr id="row6451181610208"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p1945141614202"><a name="p1945141614202"></a><a name="p1945141614202"></a>state_change</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p4451121692014"><a name="p4451121692014"></a><a name="p4451121692014"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2982153210243"><a name="p2982153210243"></a><a name="p2982153210243"></a>Time when the <strong id="b17963459499"><a name="b17963459499"></a><a name="b17963459499"></a>state</strong> was last changed</p>
    </td>
    </tr>
    <tr id="row167765339204"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p177683342016"><a name="p177683342016"></a><a name="p177683342016"></a>client_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p1277653372017"><a name="p1277653372017"></a><a name="p1277653372017"></a>inet</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19776113312012"><a name="p19776113312012"></a><a name="p19776113312012"></a>IP address of the client connected to the backend. If this column is <strong id="b12555135011499"><a name="b12555135011499"></a><a name="b12555135011499"></a>NULL</strong>, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as <strong id="b1956085014910"><a name="b1956085014910"></a><a name="b1956085014910"></a>AUTOVACUUM</strong>.</p>
    </td>
    </tr>
    <tr id="row1411374615201"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p4113846102013"><a name="p4113846102013"></a><a name="p4113846102013"></a>client_hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p8113134610200"><a name="p8113134610200"></a><a name="p8113134610200"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14113204692011"><a name="p14113204692011"></a><a name="p14113204692011"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b20165105310499"><a name="b20165105310499"></a><a name="b20165105310499"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b1332219558496"><a name="b1332219558496"></a><a name="b1332219558496"></a>log_hostname</strong> is enabled.</p>
    </td>
    </tr>
    <tr id="row28681792219"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p986869102116"><a name="p986869102116"></a><a name="p986869102116"></a>client_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p3868691216"><a name="p3868691216"></a><a name="p3868691216"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18331162415238"><a name="p18331162415238"></a><a name="p18331162415238"></a>TCP port number that the client uses for communication with this backend (<strong id="b108301957134919"><a name="b108301957134919"></a><a name="b108301957134919"></a>-1</strong> if a Unix socket is used)</p>
    </td>
    </tr>
    <tr id="row1660362882120"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p960322812212"><a name="p960322812212"></a><a name="p960322812212"></a>enqueue</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p155514473225"><a name="p155514473225"></a><a name="p155514473225"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p152741656202215"><a name="p152741656202215"></a><a name="p152741656202215"></a>Unsupported currently</p>
    </td>
    </tr>
    <tr id="row69109403213"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p14911164072114"><a name="p14911164072114"></a><a name="p14911164072114"></a>query_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p19111940202111"><a name="p19111940202111"></a><a name="p19111940202111"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p99128408218"><a name="p99128408218"></a><a name="p99128408218"></a>ID of a query</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_activity\_with\_conninfo\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The return results are a subnet of those in the  [PG\_STAT\_ACTIVITY](en-us_topic_0242385966.md)  view.

    Return type: setofrecord

    The following table describes return values.

    **Table  6**  Return value description

    <a name="table8714322156"></a>
    <table><thead align="left"><tr id="row27218327150"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p137215323156"><a name="p137215323156"></a><a name="p137215323156"></a>Return Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p107253241511"><a name="p107253241511"></a><a name="p107253241511"></a>Return Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1873153219152"><a name="p1873153219152"></a><a name="p1873153219152"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1973163211510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1473132181520"><a name="p1473132181520"></a><a name="p1473132181520"></a>datid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11232923813"><a name="p11232923813"></a><a name="p11232923813"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1112317943816"><a name="p1112317943816"></a><a name="p1112317943816"></a>OID of the database that the user session connects to in the backend</p>
    </td>
    </tr>
    <tr id="row6732032101510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p474203261510"><a name="p474203261510"></a><a name="p474203261510"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p111241997383"><a name="p111241997383"></a><a name="p111241997383"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19124691389"><a name="p19124691389"></a><a name="p19124691389"></a>Thread ID of the backend</p>
    </td>
    </tr>
    <tr id="row474113291510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p474173213157"><a name="p474173213157"></a><a name="p474173213157"></a>sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p151247910389"><a name="p151247910389"></a><a name="p151247910389"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5125298380"><a name="p5125298380"></a><a name="p5125298380"></a>Session ID</p>
    </td>
    </tr>
    <tr id="row147563221515"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p87513219153"><a name="p87513219153"></a><a name="p87513219153"></a>usesysid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11125793389"><a name="p11125793389"></a><a name="p11125793389"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p151251394386"><a name="p151251394386"></a><a name="p151251394386"></a>Name of the user logged in to the backend</p>
    </td>
    </tr>
    <tr id="row177462013161815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p197475139182"><a name="p197475139182"></a><a name="p197475139182"></a>application_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19125129123812"><a name="p19125129123812"></a><a name="p19125129123812"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p012579143814"><a name="p012579143814"></a><a name="p012579143814"></a>Name of the application connected to the backend</p>
    </td>
    </tr>
    <tr id="row125011912183"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1351519161816"><a name="p1351519161816"></a><a name="p1351519161816"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p145116196184"><a name="p145116196184"></a><a name="p145116196184"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p95213198185"><a name="p95213198185"></a><a name="p95213198185"></a>Overall status of this backend</p>
    </td>
    </tr>
    <tr id="row3658547131812"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5659047191816"><a name="p5659047191816"></a><a name="p5659047191816"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2065914714188"><a name="p2065914714188"></a><a name="p2065914714188"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p826110558358"><a name="p826110558358"></a><a name="p826110558358"></a>Text of this backend's most recent query. If <strong id="b227484615510"><a name="b227484615510"></a><a name="b227484615510"></a>state</strong> is <strong id="b1027984610510"><a name="b1027984610510"></a><a name="b1027984610510"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
    </td>
    </tr>
    <tr id="row1112454181810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1812654141816"><a name="p1812654141816"></a><a name="p1812654141816"></a>waiting</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11214548184"><a name="p11214548184"></a><a name="p11214548184"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p143863432351"><a name="p143863432351"></a><a name="p143863432351"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b5731164718514"><a name="b5731164718514"></a><a name="b5731164718514"></a>true</strong></p>
    </td>
    </tr>
    <tr id="row360025811815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3601105831811"><a name="p3601105831811"></a><a name="p3601105831811"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3601175851814"><a name="p3601175851814"></a><a name="p3601175851814"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p791672733514"><a name="p791672733514"></a><a name="p791672733514"></a>Time when current transaction was started (null if no transaction is active). If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b067416635210"><a name="b067416635210"></a><a name="b067416635210"></a>query_start</strong> column.</p>
    </td>
    </tr>
    <tr id="row371718291910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1871719261916"><a name="p1871719261916"></a><a name="p1871719261916"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17171826194"><a name="p17171826194"></a><a name="p17171826194"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p193581715153516"><a name="p193581715153516"></a><a name="p193581715153516"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b98561011175214"><a name="b98561011175214"></a><a name="b98561011175214"></a>state</strong> is not <strong id="b10861611185214"><a name="b10861611185214"></a><a name="b10861611185214"></a>active</strong></p>
    </td>
    </tr>
    <tr id="row342571181911"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1942501101911"><a name="p1942501101911"></a><a name="p1942501101911"></a>backend_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p44257112197"><a name="p44257112197"></a><a name="p44257112197"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10555134973416"><a name="p10555134973416"></a><a name="p10555134973416"></a>Time when this process was started, that is, when the client connected to the server</p>
    </td>
    </tr>
    <tr id="row881795112010"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p15817175132011"><a name="p15817175132011"></a><a name="p15817175132011"></a>state_change</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7818125115208"><a name="p7818125115208"></a><a name="p7818125115208"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p158185514208"><a name="p158185514208"></a><a name="p158185514208"></a>Time when the <strong id="b6212151815213"><a name="b6212151815213"></a><a name="b6212151815213"></a>state</strong> was last changed</p>
    </td>
    </tr>
    <tr id="row1956611310248"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p105678312411"><a name="p105678312411"></a><a name="p105678312411"></a>client_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18567183192419"><a name="p18567183192419"></a><a name="p18567183192419"></a>inet</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p272643273311"><a name="p272643273311"></a><a name="p272643273311"></a>IP address of the client connected to the backend. If this column is <strong id="b91111723195213"><a name="b91111723195213"></a><a name="b91111723195213"></a>NULL</strong>, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as <strong id="b111613232528"><a name="b111613232528"></a><a name="b111613232528"></a>AUTOVACUUM</strong>.</p>
    </td>
    </tr>
    <tr id="row184018578326"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19402757103218"><a name="p19402757103218"></a><a name="p19402757103218"></a>client_hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7402125717322"><a name="p7402125717322"></a><a name="p7402125717322"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p114021557193219"><a name="p114021557193219"></a><a name="p114021557193219"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b9135182814528"><a name="b9135182814528"></a><a name="b9135182814528"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b17868528135217"><a name="b17868528135217"></a><a name="b17868528135217"></a>log_hostname</strong> is enabled.</p>
    </td>
    </tr>
    <tr id="row1119736182610"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p51977652616"><a name="p51977652616"></a><a name="p51977652616"></a>client_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p21973672616"><a name="p21973672616"></a><a name="p21973672616"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p191971667265"><a name="p191971667265"></a><a name="p191971667265"></a>TCP port number that the client uses for communication with this backend (<strong id="b1614013294521"><a name="b1614013294521"></a><a name="b1614013294521"></a>-1</strong> if a Unix socket is used)</p>
    </td>
    </tr>
    <tr id="row428083319266"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5281103322619"><a name="p5281103322619"></a><a name="p5281103322619"></a>enqueue</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p172816333268"><a name="p172816333268"></a><a name="p172816333268"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p82811133152618"><a name="p82811133152618"></a><a name="p82811133152618"></a>Unsupported currently</p>
    </td>
    </tr>
    <tr id="row39914123292"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9991191210293"><a name="p9991191210293"></a><a name="p9991191210293"></a>query_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1299161222914"><a name="p1299161222914"></a><a name="p1299161222914"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p165419113217"><a name="p165419113217"></a><a name="p165419113217"></a>ID of a query</p>
    </td>
    </tr>
    <tr id="row85651620202917"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3566202042917"><a name="p3566202042917"></a><a name="p3566202042917"></a>connection_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1056632052912"><a name="p1056632052912"></a><a name="p1056632052912"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18563443173114"><a name="p18563443173114"></a><a name="p18563443173114"></a>A string in JSON format recording the driver type, driver version, driver deployment path, and process owner of the connected database</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_user\_iostat\(text\)

    Description: Displays the I/O load management information about the job currently executed by the user.

    Return type: record

    The following table describes return fields.

    <a name="en-us_topic_0237121998_table842513640"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row11426631846"><th class="cellrowborder" valign="top" width="14.6%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.9%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p54991455747"><a name="en-us_topic_0237121998_p54991455747"></a><a name="en-us_topic_0237121998_p54991455747"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="76.5%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p1468935815411"><a name="en-us_topic_0237121998_p1468935815411"></a><a name="en-us_topic_0237121998_p1468935815411"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row74262318415"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p54261938418"><a name="en-us_topic_0237121998_p54261938418"></a><a name="en-us_topic_0237121998_p54261938418"></a>userid</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1742611310413"><a name="en-us_topic_0237121998_p1742611310413"></a><a name="en-us_topic_0237121998_p1742611310413"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p114261231143"><a name="en-us_topic_0237121998_p114261231143"></a><a name="en-us_topic_0237121998_p114261231143"></a>User ID. </p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row7426039410"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p10426203540"><a name="en-us_topic_0237121998_p10426203540"></a><a name="en-us_topic_0237121998_p10426203540"></a>min_curr_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p242618317411"><a name="en-us_topic_0237121998_p242618317411"></a><a name="en-us_topic_0237121998_p242618317411"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p9426131249"><a name="en-us_topic_0237121998_p9426131249"></a><a name="en-us_topic_0237121998_p9426131249"></a>Minimum I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row2426123642"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p11426173847"><a name="en-us_topic_0237121998_p11426173847"></a><a name="en-us_topic_0237121998_p11426173847"></a>max_curr_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p20426831246"><a name="en-us_topic_0237121998_p20426831246"></a><a name="en-us_topic_0237121998_p20426831246"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1742603448"><a name="en-us_topic_0237121998_p1742603448"></a><a name="en-us_topic_0237121998_p1742603448"></a>Maximum I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row542653546"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p19426637419"><a name="en-us_topic_0237121998_p19426637419"></a><a name="en-us_topic_0237121998_p19426637419"></a>min_peak_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p44261318416"><a name="en-us_topic_0237121998_p44261318416"></a><a name="en-us_topic_0237121998_p44261318416"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p154268319410"><a name="en-us_topic_0237121998_p154268319410"></a><a name="en-us_topic_0237121998_p154268319410"></a>Minimum peak I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row3426933419"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1942620314416"><a name="en-us_topic_0237121998_p1942620314416"></a><a name="en-us_topic_0237121998_p1942620314416"></a>max_peak_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p34263312418"><a name="en-us_topic_0237121998_p34263312418"></a><a name="en-us_topic_0237121998_p34263312418"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p242615310414"><a name="en-us_topic_0237121998_p242615310414"></a><a name="en-us_topic_0237121998_p242615310414"></a>Maximum peak I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row4426834414"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p14427731047"><a name="en-us_topic_0237121998_p14427731047"></a><a name="en-us_topic_0237121998_p14427731047"></a>io_limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p104271831643"><a name="en-us_topic_0237121998_p104271831643"></a><a name="en-us_topic_0237121998_p104271831643"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p3427331643"><a name="en-us_topic_0237121998_p3427331643"></a><a name="en-us_topic_0237121998_p3427331643"></a><strong id="b6606103201514"><a name="b6606103201514"></a><a name="b6606103201514"></a>io_limits</strong> set for the resource pool specified by the user. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row942753841"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p84272316419"><a name="en-us_topic_0237121998_p84272316419"></a><a name="en-us_topic_0237121998_p84272316419"></a>io_priority</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p74271935417"><a name="en-us_topic_0237121998_p74271935417"></a><a name="en-us_topic_0237121998_p74271935417"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1542716312414"><a name="en-us_topic_0237121998_p1542716312414"></a><a name="en-us_topic_0237121998_p1542716312414"></a><strong id="b10606932191517"><a name="b10606932191517"></a><a name="b10606932191517"></a>io_priority</strong> set for the user. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_function\_calls\(oid\)

    Description: Number of times the function has been called

    Return type: bigint

-   pg\_stat\_get\_function\_time\(oid\)

    Description: Total wall clock time spent in the function, in microseconds. Includes the time spent in functions called by this one.

    Return type: bigint

-   pg\_stat\_get\_function\_self\_time\(oid\)

    Description: Time spent in only this function. Time spent in called functions is excluded.

    Return type: bigint

-   pg\_stat\_get\_backend\_idset\(\)

    Description: Set of currently active server process numbers \(from 1 to the number of active server processes\)

    Return type: setofinteger

-   pg\_stat\_get\_backend\_pid\(integer\)

    Description: Thread ID of the given server thread

    Return type: bigint

-   pg\_stat\_get\_backend\_dbid\(integer\)

    Description: ID of the database connected to the given server process

    Return type: oid

-   pg\_stat\_get\_backend\_userid\(integer\)

    Description: User ID of the given server process

    Return type: oid

-   pg\_stat\_get\_backend\_activity\(integer\)

    Description: Active command of the given server process, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: text

-   pg\_stat\_get\_backend\_waiting\(integer\)

    Description: True if the given server process is waiting for a lock, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: Boolean

-   pg\_stat\_get\_backend\_activity\_start\(integer\)

    Description: The time at which the given server process's currently executing query was started, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_xact\_start\(integer\)

    Description: The time at which the given server process's currently executing transaction was started, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_start\(integer\)

    Description: The time at which the given server process was started, or  **NULL**  if the current user is neither a system administrator nor the same user as that of the session being queried

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_client\_addr\(integer\)

    Description: IP address of the client connected to the given server process. If the connection is over a Unix domain socket, or if the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

    Return type: inet

-   pg\_stat\_get\_backend\_client\_port\(integer\)

    Description: TCP port number of the client connected to the given server process If the connection is over a Unix domain socket,  **–1**  will be returned. If the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

    Return type: integer

-   pg\_stat\_get\_bgwriter\_timed\_checkpoints\(\)

    Description: The number of times the background writer has started timed checkpoints \(because the  **checkpoint\_timeout**  time has expired\)

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_requested\_checkpoints\(\)

    Description: The number of times the background writer has started checkpoints based on requests from the backend because  **checkpoint\_segments**  has been exceeded or the  **CHECKPOINT**  command has been executed

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_buf\_written\_checkpoints\(\)

    Description: The number of buffers written by the background writer during checkpoints

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_buf\_written\_clean\(\)

    Description: The number of buffers written by the background writer for routine cleaning of dirty pages

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_maxwritten\_clean\(\)

    Description: The number of times the background writer has stopped its cleaning scan because it has written more buffers than specified in the  **bgwriter\_lru\_maxpages**  parameter

    Return type: bigint

-   pg\_stat\_get\_buf\_written\_backend\(\)

    Description: The number of buffers written by the backend because they needed to allocate a new buffer

    Return type: bigint

-   pg\_stat\_get\_buf\_alloc\(\)

    Description: The total number of buffer allocations

    Return type: bigint

-   pg\_stat\_clear\_snapshot\(\)

    Description: Discards the current statistics snapshot.

    Return type: void

-   pg\_stat\_reset\(\)

    Description: Resets all statistics counters for the current database to zero \(requires system administrator permissions\).

    Return type: void

-   gs\_stat\_reset\(\)

    Description: Resets all statistics counters for the current database on each node to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_reset\_shared\(text\)

    Description: Resets all statistics counters for the current database in each node in a shared cluster to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_reset\_single\_table\_counters\(oid\)

    Description: Resets statistics for a single table or index in the current database to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_reset\_single\_function\_counters\(oid\)

    Description: Resets statistics for a single function in the current database to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_session\_cu\(int, int, int\)

    Description: Obtains the compression unit \(CU\) hit statistics of sessions running on the current node.

    Return type: record

-   gs\_get\_stat\_session\_cu\(text, int, int, int\)

    Description: Obtains the CU hit statistics of all running sessions in openGauss.

    Return type: record

-   gs\_get\_stat\_db\_cu\(text, text, int, int, int\)

    Description: Obtains the CU hit statistics of a database in openGauss.

    Return type: record

-   pg\_stat\_get\_cu\_mem\_hit\(oid\)

    Description: Obtains the number of CU memory hits of a column storage table in the current database of the current node.

    Return type: bigint

-   pg\_stat\_get\_cu\_hdd\_sync\(oid\)

    Description: Obtains the times CU is synchronously read from a disk by a column storage table in the current database of the current node.

    Return type: bigint

-   pg\_stat\_get\_cu\_hdd\_asyn\(oid\)

    Description: Obtains the times CU is asynchronously read from a disk by a column storage table in the current database of the current node.

    Return type: bigint

-   pg\_stat\_get\_db\_cu\_mem\_hit\(oid\)

    Description: Obtains the CU memory hit in a database of the current node.

    Return type: bigint

-   pg\_stat\_get\_db\_cu\_hdd\_sync\(oid\)

    Description: Obtains the times CU is synchronously read from a disk by a database of the current node.

    Return type: bigint

-   pgxc\_get\_wlm\_current\_instance\_info\(text, int default null\)

    Description: Queries the current resource usage on the primary database node and reads the data that is not stored in section "5.19.2.3 GS\_WLM\_INSTANCE\_HISTORY" system catalog in the memory. The input parameters are the node name \(**ALL**,  **C**,  **D**, or  _instance name_\) and the maximum number of records returned by each node. The returned value is  **GS\_WLM\_INSTANCE\_HISTORY**.

    Return type: setofrecord

-   pgxc\_get\_wlm\_history\_instance\_info\(text, TIMESTAMP, TIMESTAMP, int default null\)

    Description: Queries the historical resource usage on the primary database node and reads the data in section "GS\_WLM\_INSTANCE\_HISTORY" system catalog in the memory. The input parameters are as follows: node name \(**ALL**,  **C**,  **D**, or  _instance name_\), start time, end time, and maximum number of records returned for each instance. The returned value is  **GS\_WLM\_INSTANCE\_HISTORY**.

    Return type: setofrecord

-   fenced\_udf\_process\(\)

    Description: Shows the number of local UDF Master and Work processes.

    Return type: record

-   total\_cpu\(\)

    Description: Obtains the CPU time used by the current node, in jiffies.

    Return type: bigint

-   total\_memory\(\)

    Description: Obtains the size of the virtual memory used by the current node, in KB.

    Return type: bigint


-   pg\_stat\_get\_db\_cu\_hdd\_asyn\(oid\)

    Description: Obtains the times CU is asynchronously read from a disk by a database of the current node.

    Return type: bigint


-   pg\_stat\_bad\_block\(text, int, int, int, int, int, timestamp with time zone, timestamp with time zone\)

    Description: Obtains damage information about pages or CUs after the current node is started.

    Example: select \* from pg\_stat\_bad\_block\(\);

    Return type: record

-   pg\_stat\_bad\_block\_clear\(\)

    Description: Deletes the page and CU damage information that is read and recorded on the node. \(System administrator rights are required.\)

    Return type: void

-   gs\_respool\_exception\_info\(pool text\)

    Description: Queries for the query rule of a specified resource pool.

    Return type: record

-   gs\_control\_group\_info\(pool text\)

    Description: Queries for information about Cgroups associated with a resource pool.

    Return type: record

    The following table describes return fields.

    <a name="en-us_topic_0237121998_table1560939125613"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row260919925618"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_p17610179175619"><a name="en-us_topic_0237121998_p17610179175619"></a><a name="en-us_topic_0237121998_p17610179175619"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.44715528447155%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p361013935612"><a name="en-us_topic_0237121998_p361013935612"></a><a name="en-us_topic_0237121998_p361013935612"></a>Attribute Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.175482451754824%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p461011975616"><a name="en-us_topic_0237121998_p461011975616"></a><a name="en-us_topic_0237121998_p461011975616"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row116109912569"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p461079145611"><a name="en-us_topic_0237121998_p461079145611"></a><a name="en-us_topic_0237121998_p461079145611"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p161020985611"><a name="en-us_topic_0237121998_p161020985611"></a><a name="en-us_topic_0237121998_p161020985611"></a>class_a:workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p196108914566"><a name="en-us_topic_0237121998_p196108914566"></a><a name="en-us_topic_0237121998_p196108914566"></a>Name of class and workload</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row06106985619"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p7610149125612"><a name="en-us_topic_0237121998_p7610149125612"></a><a name="en-us_topic_0237121998_p7610149125612"></a>class</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p2610139185611"><a name="en-us_topic_0237121998_p2610139185611"></a><a name="en-us_topic_0237121998_p2610139185611"></a>class_a</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p4610196562"><a name="en-us_topic_0237121998_p4610196562"></a><a name="en-us_topic_0237121998_p4610196562"></a>Class Cgroup name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1399384455713"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p209946441573"><a name="en-us_topic_0237121998_p209946441573"></a><a name="en-us_topic_0237121998_p209946441573"></a>workload</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p159941447578"><a name="en-us_topic_0237121998_p159941447578"></a><a name="en-us_topic_0237121998_p159941447578"></a>workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p20994544125713"><a name="en-us_topic_0237121998_p20994544125713"></a><a name="en-us_topic_0237121998_p20994544125713"></a>Workload Cgroup name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row8632178185817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p17633882582"><a name="en-us_topic_0237121998_p17633882582"></a><a name="en-us_topic_0237121998_p17633882582"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p863315865812"><a name="en-us_topic_0237121998_p863315865812"></a><a name="en-us_topic_0237121998_p863315865812"></a>DEFWD</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p46338815818"><a name="en-us_topic_0237121998_p46338815818"></a><a name="en-us_topic_0237121998_p46338815818"></a>Cgroup type (Top, CLASS, BAKWD, DEFWD, and TSWD)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row19207812135811"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p2208812105815"><a name="en-us_topic_0237121998_p2208812105815"></a><a name="en-us_topic_0237121998_p2208812105815"></a>gid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p11208161265812"><a name="en-us_topic_0237121998_p11208161265812"></a><a name="en-us_topic_0237121998_p11208161265812"></a>87</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1120816121589"><a name="en-us_topic_0237121998_p1120816121589"></a><a name="en-us_topic_0237121998_p1120816121589"></a>Cgroup ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row01967412582"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p15196164105812"><a name="en-us_topic_0237121998_p15196164105812"></a><a name="en-us_topic_0237121998_p15196164105812"></a>shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p619610455819"><a name="en-us_topic_0237121998_p619610455819"></a><a name="en-us_topic_0237121998_p619610455819"></a>30</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p01966445815"><a name="en-us_topic_0237121998_p01966445815"></a><a name="en-us_topic_0237121998_p01966445815"></a>Percentage of CPU resources to those on the parent node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1931985165714"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p183203516578"><a name="en-us_topic_0237121998_p183203516578"></a><a name="en-us_topic_0237121998_p183203516578"></a>limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p7320125111571"><a name="en-us_topic_0237121998_p7320125111571"></a><a name="en-us_topic_0237121998_p7320125111571"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p43209514578"><a name="en-us_topic_0237121998_p43209514578"></a><a name="en-us_topic_0237121998_p43209514578"></a>Percentage of CPU cores to those on the parent node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row148871119165810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p6887201917580"><a name="en-us_topic_0237121998_p6887201917580"></a><a name="en-us_topic_0237121998_p6887201917580"></a>rate</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p188871519125814"><a name="en-us_topic_0237121998_p188871519125814"></a><a name="en-us_topic_0237121998_p188871519125814"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1988821914586"><a name="en-us_topic_0237121998_p1988821914586"></a><a name="en-us_topic_0237121998_p1988821914586"></a>Allocation raio in Timeshare</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1970717163583"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p47079162588"><a name="en-us_topic_0237121998_p47079162588"></a><a name="en-us_topic_0237121998_p47079162588"></a>cpucores</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p37074160581"><a name="en-us_topic_0237121998_p37074160581"></a><a name="en-us_topic_0237121998_p37074160581"></a>0-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p17078161586"><a name="en-us_topic_0237121998_p17078161586"></a><a name="en-us_topic_0237121998_p17078161586"></a>CPU cores</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_all\_control\_group\_info\(\)

    Description: Collects information about all Cgroups in the database.

    Return type: record

-   gs\_get\_control\_group\_info\(\)

    Description: Collects information about all Cgroups.

    Return type: record

-   get\_instr\_workload\_info\(integer\)

    Description: Obtains the transaction volume and time information on the primary database node.

    Return type: record

    <a name="en-us_topic_0237121998_table11596620133817"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row2596020173814"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_p859672013382"><a name="en-us_topic_0237121998_p859672013382"></a><a name="en-us_topic_0237121998_p859672013382"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.357164283571645%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p65961920183815"><a name="en-us_topic_0237121998_p65961920183815"></a><a name="en-us_topic_0237121998_p65961920183815"></a>Attribute Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.26547345265474%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p0597320123812"><a name="en-us_topic_0237121998_p0597320123812"></a><a name="en-us_topic_0237121998_p0597320123812"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row9597152043813"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p85971620193814"><a name="en-us_topic_0237121998_p85971620193814"></a><a name="en-us_topic_0237121998_p85971620193814"></a>resourcepool_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1159742018382"><a name="en-us_topic_0237121998_p1159742018382"></a><a name="en-us_topic_0237121998_p1159742018382"></a>10</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p6251644184720"><a name="en-us_topic_0237121998_p6251644184720"></a><a name="en-us_topic_0237121998_p6251644184720"></a>OID of the resource pool (the logic is equivalent to the load)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row359712053818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p359718205387"><a name="en-us_topic_0237121998_p359718205387"></a><a name="en-us_topic_0237121998_p359718205387"></a>commit_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p16597420133810"><a name="en-us_topic_0237121998_p16597420133810"></a><a name="en-us_topic_0237121998_p16597420133810"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p182501441478"><a name="en-us_topic_0237121998_p182501441478"></a><a name="en-us_topic_0237121998_p182501441478"></a>Number of front-end transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1259720206381"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1559722013812"><a name="en-us_topic_0237121998_p1559722013812"></a><a name="en-us_topic_0237121998_p1559722013812"></a>rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p155971720163818"><a name="en-us_topic_0237121998_p155971720163818"></a><a name="en-us_topic_0237121998_p155971720163818"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1924994424720"><a name="en-us_topic_0237121998_p1924994424720"></a><a name="en-us_topic_0237121998_p1924994424720"></a>Number of front-end transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row12597820153817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p17597520103816"><a name="en-us_topic_0237121998_p17597520103816"></a><a name="en-us_topic_0237121998_p17597520103816"></a>resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p4597420193815"><a name="en-us_topic_0237121998_p4597420193815"></a><a name="en-us_topic_0237121998_p4597420193815"></a>949</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p824864494710"><a name="en-us_topic_0237121998_p824864494710"></a><a name="en-us_topic_0237121998_p824864494710"></a>Minimum response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row95971020153817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1259719206384"><a name="en-us_topic_0237121998_p1259719206384"></a><a name="en-us_topic_0237121998_p1259719206384"></a>resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p205984208383"><a name="en-us_topic_0237121998_p205984208383"></a><a name="en-us_topic_0237121998_p205984208383"></a>201891</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p224704444712"><a name="en-us_topic_0237121998_p224704444712"></a><a name="en-us_topic_0237121998_p224704444712"></a>Maximum response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row95981320153810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p10598192063818"><a name="en-us_topic_0237121998_p10598192063818"></a><a name="en-us_topic_0237121998_p10598192063818"></a>resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1059832019385"><a name="en-us_topic_0237121998_p1059832019385"></a><a name="en-us_topic_0237121998_p1059832019385"></a>43564</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p7246174414712"><a name="en-us_topic_0237121998_p7246174414712"></a><a name="en-us_topic_0237121998_p7246174414712"></a>Average response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1059822014389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p18598420103816"><a name="en-us_topic_0237121998_p18598420103816"></a><a name="en-us_topic_0237121998_p18598420103816"></a>resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p65985207388"><a name="en-us_topic_0237121998_p65985207388"></a><a name="en-us_topic_0237121998_p65985207388"></a>217822</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1224584413477"><a name="en-us_topic_0237121998_p1224584413477"></a><a name="en-us_topic_0237121998_p1224584413477"></a>Total response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row159852013380"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p135981420193810"><a name="en-us_topic_0237121998_p135981420193810"></a><a name="en-us_topic_0237121998_p135981420193810"></a>bg_commit_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p15984206380"><a name="en-us_topic_0237121998_p15984206380"></a><a name="en-us_topic_0237121998_p15984206380"></a>910</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p075814565503"><a name="en-us_topic_0237121998_p075814565503"></a><a name="en-us_topic_0237121998_p075814565503"></a>Number of background transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row19598192013815"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p559812053810"><a name="en-us_topic_0237121998_p559812053810"></a><a name="en-us_topic_0237121998_p559812053810"></a>bg_rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p16598152020386"><a name="en-us_topic_0237121998_p16598152020386"></a><a name="en-us_topic_0237121998_p16598152020386"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p9769159175019"><a name="en-us_topic_0237121998_p9769159175019"></a><a name="en-us_topic_0237121998_p9769159175019"></a>Number of background transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row337414493389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p133752049173811"><a name="en-us_topic_0237121998_p133752049173811"></a><a name="en-us_topic_0237121998_p133752049173811"></a>bg_resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p183757493389"><a name="en-us_topic_0237121998_p183757493389"></a><a name="en-us_topic_0237121998_p183757493389"></a>97</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1192231165119"><a name="en-us_topic_0237121998_p1192231165119"></a><a name="en-us_topic_0237121998_p1192231165119"></a>Minimum response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row45313548389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p65355419381"><a name="en-us_topic_0237121998_p65355419381"></a><a name="en-us_topic_0237121998_p65355419381"></a>bg_resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p175345413382"><a name="en-us_topic_0237121998_p175345413382"></a><a name="en-us_topic_0237121998_p175345413382"></a>678080687</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p76633614519"><a name="en-us_topic_0237121998_p76633614519"></a><a name="en-us_topic_0237121998_p76633614519"></a>Maximum response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row225795743818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p2257857123819"><a name="en-us_topic_0237121998_p2257857123819"></a><a name="en-us_topic_0237121998_p2257857123819"></a>bg_resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p3257257143815"><a name="en-us_topic_0237121998_p3257257143815"></a><a name="en-us_topic_0237121998_p3257257143815"></a>327847884</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p13572131118512"><a name="en-us_topic_0237121998_p13572131118512"></a><a name="en-us_topic_0237121998_p13572131118512"></a>Average response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row35321851114514"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p7533951154513"><a name="en-us_topic_0237121998_p7533951154513"></a><a name="en-us_topic_0237121998_p7533951154513"></a>bg_resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p7533351194520"><a name="en-us_topic_0237121998_p7533351194520"></a><a name="en-us_topic_0237121998_p7533351194520"></a>298341575300</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p17865151410518"><a name="en-us_topic_0237121998_p17865151410518"></a><a name="en-us_topic_0237121998_p17865151410518"></a>Total response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pv\_instance\_time\(\)

    Description: Obtains the time consumed in each execution phase on the current node.

    Return type: record

    <a name="en-us_topic_0237121998_table1149417513587"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row17494175195812"><th class="cellrowborder" valign="top" width="26.37736226377363%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_p5494751165810"><a name="en-us_topic_0237121998_p5494751165810"></a><a name="en-us_topic_0237121998_p5494751165810"></a>Stat_name Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.317468253174685%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p1049411514586"><a name="en-us_topic_0237121998_p1049411514586"></a><a name="en-us_topic_0237121998_p1049411514586"></a>Attribute Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.3051694830517%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p1349455114584"><a name="en-us_topic_0237121998_p1349455114584"></a><a name="en-us_topic_0237121998_p1349455114584"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row8494451135816"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p549525155814"><a name="en-us_topic_0237121998_p549525155814"></a><a name="en-us_topic_0237121998_p549525155814"></a>DB_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1733818301818"><a name="en-us_topic_0237121998_p1733818301818"></a><a name="en-us_topic_0237121998_p1733818301818"></a>1062385</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p2337143016114"><a name="en-us_topic_0237121998_p2337143016114"></a><a name="en-us_topic_0237121998_p2337143016114"></a>Total end-to-end wall time consumed by all threads (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row749595118581"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1495105135816"><a name="en-us_topic_0237121998_p1495105135816"></a><a name="en-us_topic_0237121998_p1495105135816"></a>CPU_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p203361230316"><a name="en-us_topic_0237121998_p203361230316"></a><a name="en-us_topic_0237121998_p203361230316"></a>311777</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1833583012115"><a name="en-us_topic_0237121998_p1833583012115"></a><a name="en-us_topic_0237121998_p1833583012115"></a>Total CPU time consumed by all threads (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row16495951175812"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1495155195818"><a name="en-us_topic_0237121998_p1495155195818"></a><a name="en-us_topic_0237121998_p1495155195818"></a>EXECUTION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p10334130312"><a name="en-us_topic_0237121998_p10334130312"></a><a name="en-us_topic_0237121998_p10334130312"></a>380037</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p633313302012"><a name="en-us_topic_0237121998_p633313302012"></a><a name="en-us_topic_0237121998_p633313302012"></a>Total time consumed on the executor (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row74951351185818"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p19495185135816"><a name="en-us_topic_0237121998_p19495185135816"></a><a name="en-us_topic_0237121998_p19495185135816"></a>PARSE_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p733263016111"><a name="en-us_topic_0237121998_p733263016111"></a><a name="en-us_topic_0237121998_p733263016111"></a>6033</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p33313301713"><a name="en-us_topic_0237121998_p33313301713"></a><a name="en-us_topic_0237121998_p33313301713"></a>Total time consumed for parsing SQL statements (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row549555145818"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p164951051115813"><a name="en-us_topic_0237121998_p164951051115813"></a><a name="en-us_topic_0237121998_p164951051115813"></a>PLAN_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p7330123012117"><a name="en-us_topic_0237121998_p7330123012117"></a><a name="en-us_topic_0237121998_p7330123012117"></a>173356</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p03291130113"><a name="en-us_topic_0237121998_p03291130113"></a><a name="en-us_topic_0237121998_p03291130113"></a>Total time consumed for generating an execution plan (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row049565195819"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p84962517584"><a name="en-us_topic_0237121998_p84962517584"></a><a name="en-us_topic_0237121998_p84962517584"></a>REWRITE_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p032811304119"><a name="en-us_topic_0237121998_p032811304119"></a><a name="en-us_topic_0237121998_p032811304119"></a>2274</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p173279301214"><a name="en-us_topic_0237121998_p173279301214"></a><a name="en-us_topic_0237121998_p173279301214"></a>Total time consumed on query rewriting (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1249618515587"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p16496175175812"><a name="en-us_topic_0237121998_p16496175175812"></a><a name="en-us_topic_0237121998_p16496175175812"></a>PL_EXECUTION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p2032653013119"><a name="en-us_topic_0237121998_p2032653013119"></a><a name="en-us_topic_0237121998_p2032653013119"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1132512301213"><a name="en-us_topic_0237121998_p1132512301213"></a><a name="en-us_topic_0237121998_p1132512301213"></a>Total time consumed for executing PL/SQL statements (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row7496751105819"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p94968513584"><a name="en-us_topic_0237121998_p94968513584"></a><a name="en-us_topic_0237121998_p94968513584"></a>PL_COMPILATION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p163241730816"><a name="en-us_topic_0237121998_p163241730816"></a><a name="en-us_topic_0237121998_p163241730816"></a>557</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p632310301312"><a name="en-us_topic_0237121998_p632310301312"></a><a name="en-us_topic_0237121998_p632310301312"></a>Total time consumed for SQL compilation (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row649618515581"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p154961151125814"><a name="en-us_topic_0237121998_p154961151125814"></a><a name="en-us_topic_0237121998_p154961151125814"></a>NET_SEND_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1732213305119"><a name="en-us_topic_0237121998_p1732213305119"></a><a name="en-us_topic_0237121998_p1732213305119"></a>1673</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p143201430118"><a name="en-us_topic_0237121998_p143201430118"></a><a name="en-us_topic_0237121998_p143201430118"></a>Total time consumed for sending data over network (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row949616511589"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p17496115114582"><a name="en-us_topic_0237121998_p17496115114582"></a><a name="en-us_topic_0237121998_p17496115114582"></a>DATA_IO_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p11319113017114"><a name="en-us_topic_0237121998_p11319113017114"></a><a name="en-us_topic_0237121998_p11319113017114"></a>426622</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p113188301015"><a name="en-us_topic_0237121998_p113188301015"></a><a name="en-us_topic_0237121998_p113188301015"></a>Total time consumed for data read and write (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   DBE\_PERF.get\_global\_instance\_time\(\)

    Description: Provides the time consumption of each key phase of openGauss. This function is supported only on the primary node of the database. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_unique\_sql\(\)

    Description: Obtains information about execution statements \(normalized SQL statements\) on the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   reset\_unique\_sql\(text, text, bigint\)

    Description: Resets information about system execution statements \(normalized SQL statements\) information as a user with the  **sysadmin**  permission. The value of the first parameter can be** global**  or  **local**.  **global**  indicates that information on all nodes is cleared, and  **local**  indicates that only information on the current node is cleared. The value of the second parameter can be  **ALL**,  **BY\_USERID**, or  **BY\_CNID**.  **ALL**  indicates that all information is cleared.  **BY\_USERID**  indicates that the SQL information of the user specified by  **USERID**  is cleared.  **BY\_CNID**  indicates that the SQL information related to the primary node of the database in the system is cleared. The third parameter indicates  **CNID**  and  **USERID**. If the second parameter is set to  **ALL**, the third parameter does not take effect and can be set to any value.

    Return type: Boolean

-   get\_instr\_wait\_event\(NULL\)

    Description: Obtains the statistics on wait events of the current node.

    Return type: record

-   get\_instr\_user\_login\(\)

    Description: Obtains the number of user login and logout times of the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_rt\_percentile\(\)

    Description: Obtains the response time distribution for 80% and 95% SQL statements in the CCN node. The unified cluster information of openGauss is stored on the CCN node. The query result from other nodes is  **0**.

    Return type: record

-   get\_node\_stat\_reset\_time\(\)

    Description: Obtains statistics about reset \(restart, primary/standby switchover, and database deletion\) time of the current node.

    Return type: record

-   DBE\_PERF.get\_global\_os\_runtime\(\)

    Description: Displays the running status of the current OS. This function is supported only on the primary node of the database. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_os\_threads\(\)

    Description: Provides information about the threads under all normal nodes of openGauss. This function is supported only on the primary node of the database. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_workload\_sql\_count\(\)

    Description: Provides statistics about the number of SELECT, UPDATE, INSERT, DELETE, DDL, DML, and DCL statements of different service loads in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_workload\_sql\_elapse\_time\(\)

    Description: Provides statistics about the number of SELECT, UPDATE, INSERT, and DELETE statements and response time information \(TOTAL, AVG, MIN, and MAX\) for different loads in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_workload\_transaction\(\)

    Description: Obtains the transaction volume and time information on all nodes of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_stat\(\)

    Description: Obtains the session status information on all nodes of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The status information contains the following 17 items:  **commit**,  **rollback**,  **sql**,  **table\_scan**,  **blocks\_fetched**,  **physical\_read\_operation**,  **shared\_blocks\_dirtied**,  **local\_blocks\_dirtied**,  **shared\_blocks\_read**,  **local\_blocks\_read**,  **blocks\_read\_time**,  **blocks\_write\_time, sort\_imemory**,  **sort\_idisk**,  **cu\_mem\_hit**,  **cu\_hdd\_sync\_read**, and  **cu\_hdd\_asyread**.

-   DBE\_PERF.get\_global\_session\_time\(\)

    Description: Provides the time consumed in each key phase of each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_memory\(\)

    Description: Displays statistics about memory usage at the session level on each node in the unit of MB, including all the memory allocated to Postgres and stream threads on DNs for jobs currently executed by users. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_memory\_detail\(\)

    Description: Displays statistics about thread memory usage on each node by MemoryContext node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   gs\_session\_memory\_detail\_tp\(\)

    Description: Collects statistics about thread memory usage by MemoryContext node. When  **enable\_thread\_pool**  is set to  **on**, this view contains memory usage of all threads and sessions.

    Return type: record

-   reate\_wlm\_operator\_info\(int flag\)

    Description: Clears top SQL operator-level statistics recorded in the current memory. If the input parameter is greater than 0, the information is archived to  **gs\_wlm\_operator\_info**  and  **gs\_wlm\_ec\_operator\_info**. Otherwise, the information is not archived. Only the administrator can execute this function.

    Return type: int

-   create\_wlm\_session\_info\(int flag\)

    Description: Clears top SQL query statement-level statistics recorded in the current memory. Only the administrator can execute this function.

    Return type: int

-   pg\_stat\_get\_wlm\_session\_info\(int flag\)

    Description: Obtains top SQL query statement-level statistics recorded in the current memory. If the input parameter is not 0, the information is cleared from the memory. Only the system admin and monitor admin users can execute this function.

    Return type: record

-   gs\_wlm\_get\_resource\_pool\_info\(\)

    Description: Obtains the resource usage statistics of all users.

    Return type: record

-   gs\_wlm\_get\_all\_user\_resource\_info\(\)

    Description: Obtains the resource usage statistics of all users.

    Return type: record

-   gs\_wlm\_get\_user\_info\(\)

    Description: Obtains information about all users.

    Return type: record

-   gs\_wlm\_get\_workload\_records\(\)

    Description: Obtains all job information in dynamic load management. This function is valid only when dynamic load management is enabled.

    Return type: record

-   gs\_wlm\_persisitent\_user\_resource\_info\(\)

    Description: Archives all user resource usage statistics to the  **gs\_wlm\_user\_resource\_history**  system catalog.

    Return type: record

-   gs\_wlm\_readjust\_user\_space\(\)

    Description: Corrects the storage space usage of all users. Only the administrator can execute this function.

    Return type: record

-   gs\_wlm\_readjust\_user\_space\_through\_username\(text name\)

    Description: Corrects the storage space usage of a specified user. Common users can use this function to modify only their own usage. Only the administrator can modify the usage of all users. If the value of  **name**  is  **0000**, the usage of all users needs to be modified.

    Return type: record

-   gs\_wlm\_readjust\_user\_space\_with\_reset\_flag\(text name, boolean isfirst\)

    Description: Corrects the storage space usage of a specified user. If the input parameter  **isfirst**  is set to  **true**, statistics are collected from 0. Otherwise, statistics are collected from the previous result. Common users can use this function to modify only their own usage. Only the administrator can modify the usage of all users. If the value of  **name**  is  **0000**, the usage of all users needs to be modified.

    Return type: record

-   gs\_wlm\_session\_respool\(\)

    Description: Obtains the session resource pool information about all background threads.

    Return type: record

-   gs\_wlm\_get\_session\_info\(\)

    Description: This API has been discarded and is unavailable currently.

-   gs\_wlm\_get\_user\_session\_info\(\)

    Description: This API has been discarded and is unavailable currently.

-   gs\_total\_nodegroup\_memory\_detail

    Description: Returns information about the memory used by the current logical cluster in the database, in MB.

    Return type: SETOF record

-   global\_comm\_client\_info\(\)

    Description: Queries information about active client connections of global nodes. For details about the columns returned by the function, see the  **COMM\_CLIENT\_INFO**  column.

    Return type: record

-   pgxc\_get\_wlm\_ec\_operator\_history\(\)

    Description: Displays the operator information when the execution of ExtensionConnector \(EC\) jobs cached on all primary nodes is complete. The information is cleared every 3 minutes. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_ec\_operator\_info\(\)

    Description: Displays the operator information when the execution of ExtensionConnector \(EC\) jobs on all primary nodes is complete. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_ec\_operator\_statistics\(\)

    Description: Displays the operator information when ExtensionConnector \(EC\) jobs on all primary nodes are being executed. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_operator\_history\(\)

    Description: Displays the operator information when the execution of jobs cached on all primary nodes is complete. The information is cleared every 3 minutes. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_operator\_info\(\)

    Description: Displays the operator information when the execution of jobs on all primary nodes is complete. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_operator\_statistics\(\)

    Description: Displays the operator information when jobs on all primary nodes are being executed. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_session\_history\(\)

    Description: Displays the load management information when the execution of jobs cached on all primary nodes is complete. The information is cleared every 3 minutes. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_session\_info\(\)

    Description: Displays the load management information when the execution of jobs cached on all primary nodes is complete. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_get\_wlm\_session\_info\_bytime\(tag text, begin timestamp, end timestamp, limit int\)

    Description: Displays load management records of jobs whose start or end time is within a time range on all primary nodes. Only the system administrator can execute this function.

    Parameter description:

    -   **tag**: The value can only be  **'start\_time'**  or  **'finish\_time'**, indicating that the query is restricted by the start time or end time of the job.
    -   **begin**: start time of a time range.
    -   **end**: end time of a time range.
    -   **limit**: number of returned records.

    Return type: record


-   pgxc\_get\_wlm\_session\_statistics\(\)

    Description: Displays load management records when jobs on all primary nodes are being executed. Only the system administrator can execute this function.

    Return type: record

-   pgxc\_stat\_activity\_with\_conninfo\(\)

    Description:  **PGXC\_STAT\_ACTIVITY**  shows query information about the current user on all the CNs in the current cluster. Only the system administrator has the permission to query this view.

    Return type: SETOF record

-   pgxc\_wlm\_get\_workload\_records\(\)

    Description: Displays the status information when jobs on all primary nodes are being executed. Only the system administrator can execute this function.

    Return type: record

-   DBE\_PERF.get\_global\_active\_session\(\)

    Description: Displays a summary of samples in the  **ACTIVE SESSION PROFILE**  memory on all nodes.

    Return type: record

-   DBE\_PERF.get\_global\_session\_stat\_activity\(\)

    Description: Displays information about threads that are running on each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_thread\_wait\_status\(\)

    Description: Displays the block waiting status of backend threads and auxiliary threads on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_wlm\_user\_resource\_runtime\(\)

    Description: Displays the resource usage of all users. This parameter is valid only when  **use\_workload\_manager**  is set to  **on**. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_history\_table\(\)

    Description: Displays the operator-related records \(persistent\) generated after jobs are executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_history\(\)

    Description: Displays the operator-related records generated after jobs are executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_runtime\(\)

    Description: Displays real-time operator-related records of jobs executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_history\(\)

    Description: Displays the historical records of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_history\_table\(\)

    Description: Displays the historical records \(persistent\) of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_runtime\(\)

    Description: Displays the real-time information of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_memory\_node\_detail\(\)

    Description: Displays the memory usage of a certain database on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_shared\_memory\_detail\(\)

    Description: Displays the usage information about all the shared memory contexts of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_indexes

    Description: Displays statistics about each index displayed in a row in the current database, showing I/O statistics about accesses to that specific index. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_local\_toastname\_and\_toastindexname\(\)

    Description: Provides the mapping between the name and index of the local TOAST table and its associated tables.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_all\_indexes\(\)

    Description: Collects statistics about each index displayed in a row in the current databases of all nodes and displays the I/O statistics of a specific index. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_sequences\(\)

    Description: Provides I/O status information about all sequences in the namespace. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_tables\(\)

    Description: Displays the I/O statistics about each table in databases on each node as a user with the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_all\_tables\(\)

    Description: Collects I/O statistics about each table in databases in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_local\_toast\_relation\(\)

    Description: Provides the mapping between the name of the local toast table and its associated table. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_sys\_indexes\(\)

    Description: Displays the I/O status information about all system catalog indexes in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_sys\_indexes\(\)

    Description: Collects the I/O status information about all system catalog indexes in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_sys\_sequences\(\)

    Description: Provides the I/O status information about all the system sequences in the namespace. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_sys\_tables\(\)

    Description: Provides I/O status information about all system catalogs in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_sys\_tables\(\)

    Description: Displays the I/O status information of all system catalogs in the namespace in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_user\_indexes\(\)

    Description: Displays the I/O status information about all user relationship table indexes in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_user\_indexes\(\)

    Description: Displays the I/O status information about all user relationship table indexes in namespaces in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_user\_sequences\(\)

    Description: Displays the I/O status information about all user sequences in the namespace of each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_user\_tables\(\)

    Description: Displays the displays I/O status information about all user relationship tables in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_user\_tables\(\)

    Description: Displays the I/O status information about all user relationship tables in namespaces in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_stat\_db\_cu\(\)

    Description: Queries CU hits in a database and in each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_all\_indexes\(\)

    Description: Displays statistics of each index in databases on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_all\_indexes\(\)

    Description: Collects statistics on each index in all databases on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_sys\_tables\(\)

    Description: Displays statistics about the system catalogs of all the namespaces in  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_sys\_tables\(\)

    Description: Collects statistics about the system catalogs of all the namespaces in  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_sys\_indexes\(\)

    Description: Displays index status information about all the system catalogs in the  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_sys\_indexes\(\)

    Description: Collects statistics about index status information about all the system catalogs in the  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_user\_tables\(\)

    Description: Displays the status information about customized ordinary tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_user\_tables\(\)

    Description: Collects statistics about the status information about customized ordinary tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_user\_indexes\(\)

    Description: Displays the status information about the index of customized ordinary tables in all databases. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_user\_indexes\(\)

    Description: Collects statistics about the status information about the index of customized ordinary tables in all databases. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_database\(\)

    Description: Displays database statistics of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_database\_conflicts\(\)

    Description: Collects statistics on the database of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_all\_tables\(\)

    Description: Displays transaction status information about all ordinary tables and TOAST tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_xact\_all\_tables\(\)

    Description: Collects statistics about transaction status information about all ordinary tables and TOAST tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_sys\_tables\(\)

    Description: Displays transaction status information about all system catalogs in namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_xact\_sys\_tables\(\)

    Description: Collects statistics about transaction status information about all system catalogs in namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_user\_tables\(\)

    Description: Displays the transaction status information of the user tables in the namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_xact\_user\_tables\(\)

    Description: Collects statistics about the transaction status information of the user tables in the namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_user\_functions\(\)

    Description: Displays the transaction status information of customized functions in the namespaces on all nodes. To query the function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_user\_functions\(\)

    Description: Collects statistics about the transaction status information of customized functions in the namespaces on all nodes. To query the function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_bad\_block\(\)

    Description: Displays information about table and index read failures on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_file\_redo\_iostat\(\)

    Description: Collects statistics on information about table and index read failures on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_file\_iostat\(\)

    Description: Displays statistics about data file I/Os on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_locks\(\)

    Description: Displays lock information of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_replication\_slots\(\)

    Description: Displays logical replication information on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_bgwriter\_stat\(\)

    Description: Displays statistics about the background writer process's activities on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_replication\_stat\(\)

    Description: Displays information about log synchronization status on each node, such as the locations where the sender sends logs and where the receiver receives logs. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_transactions\_running\_xacts\(\)

    Description: Displays information about running transactions on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_transactions\_running\_xacts\(\)

    Description: Collects statistics of information about running transactions on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_transactions\_prepared\_xacts\(\)

    Description: Displays information about transactions that are currently prepared for two-phase commit on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_transactions\_prepared\_xacts\(\)

    Description: Collects statistics information about transactions that are currently prepared for two-phase commit on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statement\(\)

    Description: Displays the status information of the historically-executed statements on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_count\(\)

    Description: Displays the number of SELECT, UPDATE, INSERT, and DELETE statements and response time information \(TOTAL, AVG, MIN, and MAX\) on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_config\_settings\(\)

    Description: Displays GUC parameter configuration information on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_wait\_events\(\)

    Description: Displays the wait event status information on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_statement\_responsetime\_percentile\(\)

    Description: Obtains the response time distribution for 80% and 95% SQL statements of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_user\_login\(\)

    Description: Collects statistics about number of user login and logout times on each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_record\_reset\_time\(\)

    Description: Displays the statistics about reset \(restart, primary/standby switchover, and database deletion\) time of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   gs\_wlm\_user\_resource\_info\(name text\)

    Description: Queries for a user's resource quota and resource usage.

    Return type: record

-   pg\_stat\_get\_file\_stat\(\)

    Description: Rrecords statistics about data file I/Os to indicate I/O performance and detect performance problems such as abnormal I/O operations.

    Return type: record

-   pg\_stat\_get\_redo\_stat\(\)

    Description: Displays statistics on the replay of session thread logs.

    Return type: record

-   pg\_stat\_get\_status\(int8\)

    Description: Allows you to test the block waiting status about the backend thread and auxiliary thread of the current instance.

    Return type: record

-   get\_local\_rel\_iostat\(\)

    Description: Queries the accumulated I/O status of data files on the current node.

    Return type: record

-   DBE\_PERF.get\_global\_rel\_iostat\(\)

    Description: Displays statistics about data file I/Os on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.global\_threadpool\_status\(\)

    Description: Displays the status of worker threads and sessions in thread pools on all nodes. For details about the columns returned by the function, see  [GLOBAL\_THREADPOOL\_STATUS](en-us_topic_0245374746.md).

    Return type: record

-   remote\_bgwriter\_stat\(\)

    Description: Displays the information about pages flushed by the bgwriter threads of all instances in the cluster, number of pages in the candidate buffer chain, and buffer elimination information \(except for the local node and not available on the DN\).

    Return type: record

    **Table  7**  remote\_bgwriter\_stat parameter description

    <a name="table1515973963410"></a>
    <table><thead align="left"><tr id="row1215910396342"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p5159439103418"><a name="p5159439103418"></a><a name="p5159439103418"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1815933943414"><a name="p1815933943414"></a><a name="p1815933943414"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p7159193912344"><a name="p7159193912344"></a><a name="p7159193912344"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row316019391341"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p161601239113416"><a name="p161601239113416"></a><a name="p161601239113416"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1116012397346"><a name="p1116012397346"></a><a name="p1116012397346"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1816033913417"><a name="p1816033913417"></a><a name="p1816033913417"></a>Instance name</p>
    </td>
    </tr>
    <tr id="row1016019391349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14160173914342"><a name="p14160173914342"></a><a name="p14160173914342"></a>bgwr_actual_flush_total_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1413232114314"><a name="p1413232114314"></a><a name="p1413232114314"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12160163973419"><a name="p12160163973419"></a><a name="p12160163973419"></a>Total number of dirty pages flushed by the bgwriter thread from the startup time to the current time</p>
    </td>
    </tr>
    <tr id="row11601639133416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p532112852018"><a name="p532112852018"></a><a name="p532112852018"></a>bgwr_last_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p31323121333"><a name="p31323121333"></a><a name="p31323121333"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7160539103415"><a name="p7160539103415"></a><a name="p7160539103415"></a>Number of dirty pages flushed by the bgwriter thread in the previous batch</p>
    </td>
    </tr>
    <tr id="row3160183973416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10145113312012"><a name="p10145113312012"></a><a name="p10145113312012"></a>candidate_slots</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p216123993412"><a name="p216123993412"></a><a name="p216123993412"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10161939173415"><a name="p10161939173415"></a><a name="p10161939173415"></a>Number of pages in the current candidate buffer chain.</p>
    </td>
    </tr>
    <tr id="row516163923419"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5161339113420"><a name="p5161339113420"></a><a name="p5161339113420"></a>get_buffer_from_list</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p91611439203415"><a name="p91611439203415"></a><a name="p91611439203415"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p84674551836"><a name="p84674551836"></a><a name="p84674551836"></a>Number of times that pages are obtained from the candidate buffer chain during buffer elimination.</p>
    </td>
    </tr>
    <tr id="row416110393349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p151616398345"><a name="p151616398345"></a><a name="p151616398345"></a>get_buf_clock_sweep</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1716133914348"><a name="p1716133914348"></a><a name="p1716133914348"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2149401546"><a name="p2149401546"></a><a name="p2149401546"></a>Number of times that pages are obtained from the original elimination solution during buffer elimination.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   remote\_ckpt\_stat\(\)

    Description: Displays the checkpoint information and log flushing information about all instances in the cluster \(except the current node\).

    Return type: record

    **Table  8**  remote\_ckpt\_stat parameter description

    <a name="table134111430229"></a>
    <table><thead align="left"><tr id="row1540674332212"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p134056430228"><a name="p134056430228"></a><a name="p134056430228"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p144061943102210"><a name="p144061943102210"></a><a name="p144061943102210"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1940615436229"><a name="p1940615436229"></a><a name="p1940615436229"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row2407194342218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p20406143162215"><a name="p20406143162215"></a><a name="p20406143162215"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p240614312220"><a name="p240614312220"></a><a name="p240614312220"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p154071543112220"><a name="p154071543112220"></a><a name="p154071543112220"></a>Instance name</p>
    </td>
    </tr>
    <tr id="row640884382219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p164076439228"><a name="p164076439228"></a><a name="p164076439228"></a>ckpt_redo_point</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1840744318220"><a name="p1840744318220"></a><a name="p1840744318220"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p0407843122210"><a name="p0407843122210"></a><a name="p0407843122210"></a>Checkpoint of the current instance</p>
    </td>
    </tr>
    <tr id="row124081143102218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11408174312222"><a name="p11408174312222"></a><a name="p11408174312222"></a>ckpt_clog_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1940884312218"><a name="p1940884312218"></a><a name="p1940884312218"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p3408164315222"><a name="p3408164315222"></a><a name="p3408164315222"></a>Number of Clog flushing pages from the startup time to the current time</p>
    </td>
    </tr>
    <tr id="row104091243192213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18408134382213"><a name="p18408134382213"></a><a name="p18408134382213"></a>ckpt_csnlog_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p54091543182219"><a name="p54091543182219"></a><a name="p54091543182219"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p84095439225"><a name="p84095439225"></a><a name="p84095439225"></a>Number of CSN log flushing pages from the startup time to the current time</p>
    </td>
    </tr>
    <tr id="row1741084382210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16409743142214"><a name="p16409743142214"></a><a name="p16409743142214"></a>ckpt_multixact_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1340914438223"><a name="p1340914438223"></a><a name="p1340914438223"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1140914312217"><a name="p1140914312217"></a><a name="p1140914312217"></a>Number of MultiXact flushing pages from the startup time to the current time</p>
    </td>
    </tr>
    <tr id="row5410174314224"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p04101743172217"><a name="p04101743172217"></a><a name="p04101743172217"></a>ckpt_predicate_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1441010438225"><a name="p1441010438225"></a><a name="p1441010438225"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1141015434224"><a name="p1141015434224"></a><a name="p1141015434224"></a>Number of predicate flushing pages from the startup time to the current time</p>
    </td>
    </tr>
    <tr id="row13411943142210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5410174382215"><a name="p5410174382215"></a><a name="p5410174382215"></a>ckpt_twophase_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1441024382211"><a name="p1441024382211"></a><a name="p1441024382211"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2041114437224"><a name="p2041114437224"></a><a name="p2041114437224"></a>Number of two-phase flushing pages from the startup time to the current time</p>
    </td>
    </tr>
    </tbody>
    </table>

-   remote\_double\_write\_stat\(\)

    Description: Displays doublewrite file status of all instances in the cluster \(except the current node\).

    Return type: record

    **Table  9**  remote\_double\_write\_stat parameter description

    <a name="table1419184342213"></a>
    <table><thead align="left"><tr id="row0412124342213"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1941204372215"><a name="p1941204372215"></a><a name="p1941204372215"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p541214322211"><a name="p541214322211"></a><a name="p541214322211"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p941214362220"><a name="p941214362220"></a><a name="p941214362220"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row10413164392210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2412643132215"><a name="p2412643132215"></a><a name="p2412643132215"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12412124392220"><a name="p12412124392220"></a><a name="p12412124392220"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p141324313225"><a name="p141324313225"></a><a name="p141324313225"></a>Instance name</p>
    </td>
    </tr>
    <tr id="row041344317227"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11413843182212"><a name="p11413843182212"></a><a name="p11413843182212"></a>curr_dwn</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p341384317222"><a name="p341384317222"></a><a name="p341384317222"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11413143132218"><a name="p11413143132218"></a><a name="p11413143132218"></a>Sequence number of the doublewrite file</p>
    </td>
    </tr>
    <tr id="row1341417432222"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p104138434227"><a name="p104138434227"></a><a name="p104138434227"></a>curr_start_page</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p241374315225"><a name="p241374315225"></a><a name="p241374315225"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p641414431227"><a name="p641414431227"></a><a name="p641414431227"></a>Start page for restoring the doublewrite file</p>
    </td>
    </tr>
    <tr id="row541424315222"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14144430228"><a name="p14144430228"></a><a name="p14144430228"></a>file_trunc_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1541416437228"><a name="p1541416437228"></a><a name="p1541416437228"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p104141843162216"><a name="p104141843162216"></a><a name="p104141843162216"></a>Number of times that the doublewrite file is reused</p>
    </td>
    </tr>
    <tr id="row1141564362210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10414843192212"><a name="p10414843192212"></a><a name="p10414843192212"></a>file_reset_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14415204342215"><a name="p14415204342215"></a><a name="p14415204342215"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8415143192219"><a name="p8415143192219"></a><a name="p8415143192219"></a>Number of reset times after the doublewrite file is full</p>
    </td>
    </tr>
    <tr id="row341614362217"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p154151243142212"><a name="p154151243142212"></a><a name="p154151243142212"></a>total_writes</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3415243202214"><a name="p3415243202214"></a><a name="p3415243202214"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p141614342219"><a name="p141614342219"></a><a name="p141614342219"></a>Total number of I/Os of the doublewrite file</p>
    </td>
    </tr>
    <tr id="row84161943122216"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p141634322216"><a name="p141634322216"></a><a name="p141634322216"></a>low_threshold_writes</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p54168435227"><a name="p54168435227"></a><a name="p54168435227"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11416134310222"><a name="p11416134310222"></a><a name="p11416134310222"></a>Number of I/Os for writing doublewrite files with low efficiency (the number of I/O flushing pages at a time is less than 16)</p>
    </td>
    </tr>
    <tr id="row54171043142217"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p141611436228"><a name="p141611436228"></a><a name="p141611436228"></a>high_threshold_writes</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p141654352218"><a name="p141654352218"></a><a name="p141654352218"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p44171043192217"><a name="p44171043192217"></a><a name="p44171043192217"></a>Number of I/Os for writing doublewrite files with high efficiency (the number of I/O flushing pages at a time is more than 421)</p>
    </td>
    </tr>
    <tr id="row20417343172213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p204172436227"><a name="p204172436227"></a><a name="p204172436227"></a>total_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p8417134319223"><a name="p8417134319223"></a><a name="p8417134319223"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p941754352213"><a name="p941754352213"></a><a name="p941754352213"></a>Total number of pages that are flushed to the doublewrite file area</p>
    </td>
    </tr>
    <tr id="row174189431226"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6417114314227"><a name="p6417114314227"></a><a name="p6417114314227"></a>low_threshold_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p24173431228"><a name="p24173431228"></a><a name="p24173431228"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4418843132218"><a name="p4418843132218"></a><a name="p4418843132218"></a>Number of pages that are flushed with low efficiency</p>
    </td>
    </tr>
    <tr id="row3419643192220"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1841811437224"><a name="p1841811437224"></a><a name="p1841811437224"></a>high_threshold_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6418204312215"><a name="p6418204312215"></a><a name="p6418204312215"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2418134362211"><a name="p2418134362211"></a><a name="p2418134362211"></a>Number of pages that are flushed with high efficiency</p>
    </td>
    </tr>
    </tbody>
    </table>

-   remote\_pagewriter\_stat\(\)

    Description: Displays the page flushing information and checkpoint information about all instances in the cluster \(except the current node\).

    Return type: record

    **Table  10**  remote\_pagewriter\_stat parameter description

    <a name="table11427543172218"></a>
    <table><thead align="left"><tr id="row0421174315229"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p5420154314225"><a name="p5420154314225"></a><a name="p5420154314225"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p84205434224"><a name="p84205434224"></a><a name="p84205434224"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1542164316227"><a name="p1542164316227"></a><a name="p1542164316227"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row184221743192217"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p154214436225"><a name="p154214436225"></a><a name="p154214436225"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p742104312215"><a name="p742104312215"></a><a name="p742104312215"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1642216439222"><a name="p1642216439222"></a><a name="p1642216439222"></a>Instance name</p>
    </td>
    </tr>
    <tr id="row54221343202213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p442264312223"><a name="p442264312223"></a><a name="p442264312223"></a>pgwr_actual_flush_total_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1442244312222"><a name="p1442244312222"></a><a name="p1442244312222"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p942264372211"><a name="p942264372211"></a><a name="p942264372211"></a>Total number of dirty pages flushed from the startup time to the current time</p>
    </td>
    </tr>
    <tr id="row12423204319229"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1342254382213"><a name="p1342254382213"></a><a name="p1342254382213"></a>pgwr_last_flush_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p44231943162211"><a name="p44231943162211"></a><a name="p44231943162211"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p142384342213"><a name="p142384342213"></a><a name="p142384342213"></a>Number of dirty pages flushed in the previous batch</p>
    </td>
    </tr>
    <tr id="row94233434225"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p542312439221"><a name="p542312439221"></a><a name="p542312439221"></a>remain_dirty_page_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12423743142213"><a name="p12423743142213"></a><a name="p12423743142213"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p842394352220"><a name="p842394352220"></a><a name="p842394352220"></a>Estimated number of dirty pages that are not flushed</p>
    </td>
    </tr>
    <tr id="row34241043162210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7424043142219"><a name="p7424043142219"></a><a name="p7424043142219"></a>queue_head_page_rec_lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1942419430229"><a name="p1942419430229"></a><a name="p1942419430229"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p184241243142212"><a name="p184241243142212"></a><a name="p184241243142212"></a><strong id="b84373476376"><a name="b84373476376"></a><a name="b84373476376"></a>recovery_lsn</strong> of the first dirty page in the dirty page queue of the current instance</p>
    </td>
    </tr>
    <tr id="row18425943132213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18424184315227"><a name="p18424184315227"></a><a name="p18424184315227"></a>queue_rec_lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15424134362213"><a name="p15424134362213"></a><a name="p15424134362213"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1042414342216"><a name="p1042414342216"></a><a name="p1042414342216"></a><strong id="b914216529374"><a name="b914216529374"></a><a name="b914216529374"></a>recovery_lsn</strong> of the dirty page queue of the current instance</p>
    </td>
    </tr>
    <tr id="row4426134362210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4425443202216"><a name="p4425443202216"></a><a name="p4425443202216"></a>current_xlog_insert_lsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p942554302220"><a name="p942554302220"></a><a name="p942554302220"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13425164318229"><a name="p13425164318229"></a><a name="p13425164318229"></a>Write position of Xlogs in the current instance</p>
    </td>
    </tr>
    <tr id="row542654313229"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p184265437221"><a name="p184265437221"></a><a name="p184265437221"></a>ckpt_redo_point</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1942654311227"><a name="p1942654311227"></a><a name="p1942654311227"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5426164322213"><a name="p5426164322213"></a><a name="p5426164322213"></a>Checkpoint of the current instance</p>
    </td>
    </tr>
    </tbody>
    </table>

-   remote\_recovery\_status\(\)

    Description: Displays log flow control information about the primary and standby nodes \(except the current node\).

    Return type: record

    **Table  11**  remote\_recovery\_status parameter description

    <a name="table1443614319224"></a>
    <table><thead align="left"><tr id="row742864316223"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1842734372216"><a name="p1842734372216"></a><a name="p1842734372216"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p4427144332210"><a name="p4427144332210"></a><a name="p4427144332210"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p4428343142211"><a name="p4428343142211"></a><a name="p4428343142211"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1742814318226"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1342804352214"><a name="p1342804352214"></a><a name="p1342804352214"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1242854320226"><a name="p1242854320226"></a><a name="p1242854320226"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1442824314223"><a name="p1442824314223"></a><a name="p1442824314223"></a>Node name (including the primary and standby nodes)</p>
    </td>
    </tr>
    <tr id="row19429543102215"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6428114310223"><a name="p6428114310223"></a><a name="p6428114310223"></a>standby_node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1542974318228"><a name="p1542974318228"></a><a name="p1542974318228"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p0429643142219"><a name="p0429643142219"></a><a name="p0429643142219"></a>Name of the standby node</p>
    </td>
    </tr>
    <tr id="row642954317228"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p142974372217"><a name="p142974372217"></a><a name="p142974372217"></a>source_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p742914434226"><a name="p742914434226"></a><a name="p742914434226"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14429114310229"><a name="p14429114310229"></a><a name="p14429114310229"></a>IP address of the primary node</p>
    </td>
    </tr>
    <tr id="row164301432226"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p643074315222"><a name="p643074315222"></a><a name="p643074315222"></a>source_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1343044318228"><a name="p1343044318228"></a><a name="p1343044318228"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14430643122217"><a name="p14430643122217"></a><a name="p14430643122217"></a>Port number of the primary node</p>
    </td>
    </tr>
    <tr id="row543014437229"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16430243132213"><a name="p16430243132213"></a><a name="p16430243132213"></a>dest_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17430134322215"><a name="p17430134322215"></a><a name="p17430134322215"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1943014313221"><a name="p1943014313221"></a><a name="p1943014313221"></a>IP address of the standby node</p>
    </td>
    </tr>
    <tr id="row6434543202220"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11433543142219"><a name="p11433543142219"></a><a name="p11433543142219"></a>dest_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6433144342216"><a name="p6433144342216"></a><a name="p6433144342216"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12433243152210"><a name="p12433243152210"></a><a name="p12433243152210"></a>Port number of the standby node</p>
    </td>
    </tr>
    <tr id="row12434743132218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p104341243142218"><a name="p104341243142218"></a><a name="p104341243142218"></a>current_rto</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12434124311229"><a name="p12434124311229"></a><a name="p12434124311229"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1743454392216"><a name="p1743454392216"></a><a name="p1743454392216"></a>Current log flow control time of the standby node (unit: s)</p>
    </td>
    </tr>
    <tr id="row20435104372213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p24341443132220"><a name="p24341443132220"></a><a name="p24341443132220"></a>target_rto</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p204351743112211"><a name="p204351743112211"></a><a name="p204351743112211"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p543511438223"><a name="p543511438223"></a><a name="p543511438223"></a>Expected flow control time of the standby node specified by the corresponding GUC parameter (unit: s)</p>
    </td>
    </tr>
    <tr id="row114361943172211"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p204351643172219"><a name="p204351643172219"></a><a name="p204351643172219"></a>current_sleep_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1143564332210"><a name="p1143564332210"></a><a name="p1143564332210"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p84361439220"><a name="p84361439220"></a><a name="p84361439220"></a>Sleep time required to achieve the expected flow control time (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   remote\_redo\_stat\(\)

    Description: Displays the log replay status of all instances in the cluster \(except the current node\).

    Return type: record

    **Table  12**  remote\_redo\_stat parameter description

    <a name="table174521443132210"></a>
    <table><thead align="left"><tr id="row843714317224"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p3437843172211"><a name="p3437843172211"></a><a name="p3437843172211"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p104372043182212"><a name="p104372043182212"></a><a name="p104372043182212"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p12437144315228"><a name="p12437144315228"></a><a name="p12437144315228"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row134381943152213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2437124317221"><a name="p2437124317221"></a><a name="p2437124317221"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p8438143152214"><a name="p8438143152214"></a><a name="p8438143152214"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p114381343102210"><a name="p114381343102210"></a><a name="p114381343102210"></a>Instance name</p>
    </td>
    </tr>
    <tr id="row64389433225"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13438104310223"><a name="p13438104310223"></a><a name="p13438104310223"></a>redo_start_ptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p164381443182213"><a name="p164381443182213"></a><a name="p164381443182213"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12438124382210"><a name="p12438124382210"></a><a name="p12438124382210"></a>Start point for replaying the instance logs</p>
    </td>
    </tr>
    <tr id="row1043994313221"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7438124342218"><a name="p7438124342218"></a><a name="p7438124342218"></a>redo_start_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p343910436224"><a name="p343910436224"></a><a name="p343910436224"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6439174313226"><a name="p6439174313226"></a><a name="p6439174313226"></a>Start time (UTC) when the instance logs are replayed</p>
    </td>
    </tr>
    <tr id="row1244004312223"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11439843112220"><a name="p11439843112220"></a><a name="p11439843112220"></a>redo_done_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p84399435221"><a name="p84399435221"></a><a name="p84399435221"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p24391543182219"><a name="p24391543182219"></a><a name="p24391543182219"></a>End time (UTC) when the instance logs are replayed</p>
    </td>
    </tr>
    <tr id="row34431943122220"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3440443122216"><a name="p3440443122216"></a><a name="p3440443122216"></a>curr_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1944214434223"><a name="p1944214434223"></a><a name="p1944214434223"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p644244322214"><a name="p644244322214"></a><a name="p644244322214"></a>Current time (UTC) of the instance</p>
    </td>
    </tr>
    <tr id="row9443164311221"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9443104310222"><a name="p9443104310222"></a><a name="p9443104310222"></a>min_recovery_point</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11443114319226"><a name="p11443114319226"></a><a name="p11443114319226"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p34437434229"><a name="p34437434229"></a><a name="p34437434229"></a>Position of the minimum consistency point for the instance logs</p>
    </td>
    </tr>
    <tr id="row16444543152213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0443124322215"><a name="p0443124322215"></a><a name="p0443124322215"></a>read_ptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13443114317222"><a name="p13443114317222"></a><a name="p13443114317222"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6443843192213"><a name="p6443843192213"></a><a name="p6443843192213"></a>Position for reading the instance logs</p>
    </td>
    </tr>
    <tr id="row64441243102218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1244434312229"><a name="p1244434312229"></a><a name="p1244434312229"></a>last_replayed_read_ptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p444418435227"><a name="p444418435227"></a><a name="p444418435227"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p154443439221"><a name="p154443439221"></a><a name="p154443439221"></a>Position for replaying the instance logs</p>
    </td>
    </tr>
    <tr id="row1744415431220"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p444415437222"><a name="p444415437222"></a><a name="p444415437222"></a>recovery_done_ptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p20444194332215"><a name="p20444194332215"></a><a name="p20444194332215"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p544410433228"><a name="p544410433228"></a><a name="p544410433228"></a>Replay position after the instance is started</p>
    </td>
    </tr>
    <tr id="row1744514313229"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p144451243112212"><a name="p144451243112212"></a><a name="p144451243112212"></a>read_xlog_io_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p204451243142218"><a name="p204451243142218"></a><a name="p204451243142218"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7445104312227"><a name="p7445104312227"></a><a name="p7445104312227"></a>Number of I/Os when the instance reads and replays logs</p>
    </td>
    </tr>
    <tr id="row344594392210"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2044514439228"><a name="p2044514439228"></a><a name="p2044514439228"></a>read_xlog_io_total_dur</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p134451943172211"><a name="p134451943172211"></a><a name="p134451943172211"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p9445134317229"><a name="p9445134317229"></a><a name="p9445134317229"></a>Total I/O latency when the instance reads and replays logs</p>
    </td>
    </tr>
    <tr id="row3446943152219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p174462439227"><a name="p174462439227"></a><a name="p174462439227"></a>read_data_io_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9446243142214"><a name="p9446243142214"></a><a name="p9446243142214"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4446104312227"><a name="p4446104312227"></a><a name="p4446104312227"></a>Number of data page I/O reads during replay in the instance</p>
    </td>
    </tr>
    <tr id="row15446184316224"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p204465431229"><a name="p204465431229"></a><a name="p204465431229"></a>read_data_io_total_dur</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p244634352214"><a name="p244634352214"></a><a name="p244634352214"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p104461243142213"><a name="p104461243142213"></a><a name="p104461243142213"></a>Total I/O latency of data page reads during replay in the instance</p>
    </td>
    </tr>
    <tr id="row74471243112218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14447743182214"><a name="p14447743182214"></a><a name="p14447743182214"></a>write_data_io_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14471243192219"><a name="p14471243192219"></a><a name="p14471243192219"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p344744312229"><a name="p344744312229"></a><a name="p344744312229"></a>Number of data page I/O writes during replay in the instance</p>
    </td>
    </tr>
    <tr id="row54481143132211"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p444718434225"><a name="p444718434225"></a><a name="p444718434225"></a>write_data_io_total_dur</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p644704382218"><a name="p644704382218"></a><a name="p644704382218"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17448124314221"><a name="p17448124314221"></a><a name="p17448124314221"></a>Total I/O latency of data page writes during replay in the instance</p>
    </td>
    </tr>
    <tr id="row24481643192213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0448134310224"><a name="p0448134310224"></a><a name="p0448134310224"></a>process_pending_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2044810435226"><a name="p2044810435226"></a><a name="p2044810435226"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10448843102213"><a name="p10448843102213"></a><a name="p10448843102213"></a>Number of synchronization times of log distribution threads during replay in the instance</p>
    </td>
    </tr>
    <tr id="row7449843122219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p744818436225"><a name="p744818436225"></a><a name="p744818436225"></a>process_pending_total_dur</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19448144342212"><a name="p19448144342212"></a><a name="p19448144342212"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p154487439222"><a name="p154487439222"></a><a name="p154487439222"></a>Total synchronization latency of log distribution threads during replay in the instance</p>
    </td>
    </tr>
    <tr id="row1344944314226"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p544912439221"><a name="p544912439221"></a><a name="p544912439221"></a>apply_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p16449343182214"><a name="p16449343182214"></a><a name="p16449343182214"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p544944372214"><a name="p544944372214"></a><a name="p544944372214"></a>Number of synchronization times of replay threads during replay in the instance</p>
    </td>
    </tr>
    <tr id="row6450243182219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6449104342210"><a name="p6449104342210"></a><a name="p6449104342210"></a>apply_total_dur</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1449154319221"><a name="p1449154319221"></a><a name="p1449154319221"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14449144312217"><a name="p14449144312217"></a><a name="p14449144312217"></a>Total synchronization latency of replay threads during replay in the instance</p>
    </td>
    </tr>
    <tr id="row1845034312213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p445074315222"><a name="p445074315222"></a><a name="p445074315222"></a>speed</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2045013433225"><a name="p2045013433225"></a><a name="p2045013433225"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5450184342214"><a name="p5450184342214"></a><a name="p5450184342214"></a>Log replay rate of the current instance</p>
    </td>
    </tr>
    <tr id="row184511343172217"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p04503432227"><a name="p04503432227"></a><a name="p04503432227"></a>local_max_ptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p124514434222"><a name="p124514434222"></a><a name="p124514434222"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13451443112212"><a name="p13451443112212"></a><a name="p13451443112212"></a>Maximum number of replay logs received by the local host after the instance is started</p>
    </td>
    </tr>
    <tr id="row6451154320227"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11451144317222"><a name="p11451144317222"></a><a name="p11451144317222"></a>primary_flush_ptr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2451943192220"><a name="p2451943192220"></a><a name="p2451943192220"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p54511943132212"><a name="p54511943132212"></a><a name="p54511943132212"></a>Log point where the host flushes logs to a disk</p>
    </td>
    </tr>
    <tr id="row0452154316220"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14452743112218"><a name="p14452743112218"></a><a name="p14452743112218"></a>worker_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1645224316226"><a name="p1645224316226"></a><a name="p1645224316226"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1345274312221"><a name="p1345274312221"></a><a name="p1345274312221"></a>Replay thread information of the instance. If concurrent replay is not enabled, the value is <strong id="b9671633105314"><a name="b9671633105314"></a><a name="b9671633105314"></a>NULL</strong>.</p>
    </td>
    </tr>
    </tbody>
    </table>


Example:

The function  **pg\_backend\_pid**  shows the ID of the current server thread.

```
postgres=# SELECT pg_backend_pid();
 pg_backend_pid  
-----------------
 139706243217168
(1 row)
```

The function  **pg\_stat\_get\_backend\_pid**  shows the ID of a given server thread.

```
postgres=# SELECT pg_stat_get_backend_pid(1);
 pg_stat_get_backend_pid 
-------------------------
         139706243217168
(1 row)
```

