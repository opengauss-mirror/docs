# Statistics Information Functions<a name="EN-US_TOPIC_0289900249"></a>

Statistics information functions are divided into the following two categories: functions that access databases, using the OID of each table or index in a database to mark the database for which statistics are generated; functions that access servers, identified by the server process ID, whose value ranges from 1 to the number of currently active servers.

-   pg\_stat\_get\_db\_conflict\_tablespace\(oid\)

    Description: Specifies the number of queries canceled due to a conflict between the restored tablespace and the deleted tablespace in the database.

    Return type: bigint

-   pg\_control\_group\_config

    Description: Prints Cgroup configurations on the current node.

    Return type: record

-   pg\_stat\_get\_db\_stat\_reset\_time\(oid\)

    Description: Specifies the most recent time when database statistics were reset. It is initialized to the system time during the first connection to each database. The reset time is updated when you call  **pg\_stat\_reset**  on the database and execute  **pg\_stat\_reset\_single\_table\_counters**  against any table or index in it.

    Return type: timestamptz

-   pg\_stat\_get\_function\_total\_time\(oid\)

    Description: Specifies the total wall clock time spent in the function, in microseconds. The time spent on this function calling other functions is included.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_returned\(oid\)

    Description: Specifies the number of rows read through sequential scans when the parameter is a table in the current transaction or the number of index entries returned when the parameter is an index.

    Return type: bigint

-   pg\_lock\_status\(\)

    Description: Queries information about locks held by open transactions. All users can execute this function.

    Return type: For details, see  **PG\_LOCKS**  which is obtained by querying this function.

-   pg\_stat\_get\_xact\_numscans\(oid\)

    Description: Specifies the number of sequential scans performed when the parameter is a table in the current transaction or the number of index scans performed when the parameter is an index.

    Return type: bigint

-   pg\_stat\_get\_xact\_blocks\_fetched\(oid\)

    Description: Specifies the number of disk block fetch requests for a table or an index in the current transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_blocks\_hit\(oid\)

    Description: Specifies the number of disk block fetch requests for tables or indexes found in cache in the current transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_calls\(oid\)

    Description: Specifies the number of times the function is called in the current transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_self\_time\(oid\)

    Description: Specifies the time spent on this function in the current transaction, excluding the time spent on this function internally calling other functions.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_total\_time\(oid\)

    Description: Specifies the total wall clock time \(in microseconds\) spent on the function in the current transaction, including the time spent on this function internally calling other functions.

    Return type: bigint

-   pg\_stat\_get\_wal\_senders\(\)

    Description: Queries walsender information on the primary server.

    Return type: setofrecord

    The following table describes return columns.

    **Table  1**  Return column description

    <a name="en-us_topic_0283136951_table4851182894313"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row1785310288438"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p12853128154310"><a name="en-us_topic_0283136951_p12853128154310"></a><a name="en-us_topic_0283136951_p12853128154310"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p19853828194315"><a name="en-us_topic_0283136951_p19853828194315"></a><a name="en-us_topic_0283136951_p19853828194315"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p585415284435"><a name="en-us_topic_0283136951_p585415284435"></a><a name="en-us_topic_0283136951_p585415284435"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_row8854102818434"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p178545286432"><a name="en-us_topic_0283136951_p178545286432"></a><a name="en-us_topic_0283136951_p178545286432"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p198541028184313"><a name="en-us_topic_0283136951_p198541028184313"></a><a name="en-us_topic_0283136951_p198541028184313"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p58547281439"><a name="en-us_topic_0283136951_p58547281439"></a><a name="en-us_topic_0283136951_p58547281439"></a>Thread ID of the WAL sender</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1685432854317"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p78541228174318"><a name="en-us_topic_0283136951_p78541228174318"></a><a name="en-us_topic_0283136951_p78541228174318"></a>sender_pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p385432814435"><a name="en-us_topic_0283136951_p385432814435"></a><a name="en-us_topic_0283136951_p385432814435"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p9855202814433"><a name="en-us_topic_0283136951_p9855202814433"></a><a name="en-us_topic_0283136951_p9855202814433"></a>Lightweight thread ID of the WAL sender</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row148551928134318"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p16855192874317"><a name="en-us_topic_0283136951_p16855192874317"></a><a name="en-us_topic_0283136951_p16855192874317"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p3855192834316"><a name="en-us_topic_0283136951_p3855192834316"></a><a name="en-us_topic_0283136951_p3855192834316"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1085532864317"><a name="en-us_topic_0283136951_p1085532864317"></a><a name="en-us_topic_0283136951_p1085532864317"></a>Type of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row185522894310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p6855122834314"><a name="en-us_topic_0283136951_p6855122834314"></a><a name="en-us_topic_0283136951_p6855122834314"></a>peer_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p17855828184314"><a name="en-us_topic_0283136951_p17855828184314"></a><a name="en-us_topic_0283136951_p17855828184314"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p8855928134313"><a name="en-us_topic_0283136951_p8855928134313"></a><a name="en-us_topic_0283136951_p8855928134313"></a>Type of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row178557287438"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p138551828184310"><a name="en-us_topic_0283136951_p138551828184310"></a><a name="en-us_topic_0283136951_p138551828184310"></a>peer_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p16855828104310"><a name="en-us_topic_0283136951_p16855828104310"></a><a name="en-us_topic_0283136951_p16855828104310"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p168561628134316"><a name="en-us_topic_0283136951_p168561628134316"></a><a name="en-us_topic_0283136951_p168561628134316"></a>Status of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row2856628104310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p185615288438"><a name="en-us_topic_0283136951_p185615288438"></a><a name="en-us_topic_0283136951_p185615288438"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p98561028104316"><a name="en-us_topic_0283136951_p98561028104316"></a><a name="en-us_topic_0283136951_p98561028104316"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p169661522175410"><a name="en-us_topic_0283136951_p169661522175410"></a><a name="en-us_topic_0283136951_p169661522175410"></a>Status of the WAL sender</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row4154017114820"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p171551417124818"><a name="en-us_topic_0283136951_p171551417124818"></a><a name="en-us_topic_0283136951_p171551417124818"></a>catchup_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1115591754812"><a name="en-us_topic_0283136951_p1115591754812"></a><a name="en-us_topic_0283136951_p1115591754812"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p815510176485"><a name="en-us_topic_0283136951_p815510176485"></a><a name="en-us_topic_0283136951_p815510176485"></a>Startup time of a catchup task</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row16428172314481"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p2428323154814"><a name="en-us_topic_0283136951_p2428323154814"></a><a name="en-us_topic_0283136951_p2428323154814"></a>catchup_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p742910234485"><a name="en-us_topic_0283136951_p742910234485"></a><a name="en-us_topic_0283136951_p742910234485"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1229635315548"><a name="en-us_topic_0283136951_p1229635315548"></a><a name="en-us_topic_0283136951_p1229635315548"></a>End time of a catchup task</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row47181645164813"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p47192045194810"><a name="en-us_topic_0283136951_p47192045194810"></a><a name="en-us_topic_0283136951_p47192045194810"></a>sender_sent_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p571913450487"><a name="en-us_topic_0283136951_p571913450487"></a><a name="en-us_topic_0283136951_p571913450487"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p107193457482"><a name="en-us_topic_0283136951_p107193457482"></a><a name="en-us_topic_0283136951_p107193457482"></a>Sending position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row14138749194816"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1613820490489"><a name="en-us_topic_0283136951_p1613820490489"></a><a name="en-us_topic_0283136951_p1613820490489"></a>sender_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p0138164974814"><a name="en-us_topic_0283136951_p0138164974814"></a><a name="en-us_topic_0283136951_p0138164974814"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p034842216556"><a name="en-us_topic_0283136951_p034842216556"></a><a name="en-us_topic_0283136951_p034842216556"></a>Writing position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row10320105354817"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p932135314817"><a name="en-us_topic_0283136951_p932135314817"></a><a name="en-us_topic_0283136951_p932135314817"></a>sender_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p43212539486"><a name="en-us_topic_0283136951_p43212539486"></a><a name="en-us_topic_0283136951_p43212539486"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p15889122965515"><a name="en-us_topic_0283136951_p15889122965515"></a><a name="en-us_topic_0283136951_p15889122965515"></a>Flushing position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row98378317497"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1083743194917"><a name="en-us_topic_0283136951_p1083743194917"></a><a name="en-us_topic_0283136951_p1083743194917"></a>sender_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p15837173154913"><a name="en-us_topic_0283136951_p15837173154913"></a><a name="en-us_topic_0283136951_p15837173154913"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p153971135195511"><a name="en-us_topic_0283136951_p153971135195511"></a><a name="en-us_topic_0283136951_p153971135195511"></a>Redo position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row4196116495"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p16191811184916"><a name="en-us_topic_0283136951_p16191811184916"></a><a name="en-us_topic_0283136951_p16191811184916"></a>receiver_received_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p020181116497"><a name="en-us_topic_0283136951_p020181116497"></a><a name="en-us_topic_0283136951_p020181116497"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p820911114915"><a name="en-us_topic_0283136951_p820911114915"></a><a name="en-us_topic_0283136951_p820911114915"></a>Receiving position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row119641164498"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p3964186154913"><a name="en-us_topic_0283136951_p3964186154913"></a><a name="en-us_topic_0283136951_p3964186154913"></a>receiver_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p209641762496"><a name="en-us_topic_0283136951_p209641762496"></a><a name="en-us_topic_0283136951_p209641762496"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p20527184885512"><a name="en-us_topic_0283136951_p20527184885512"></a><a name="en-us_topic_0283136951_p20527184885512"></a>Writing position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row71391315164918"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p15140615164910"><a name="en-us_topic_0283136951_p15140615164910"></a><a name="en-us_topic_0283136951_p15140615164910"></a>receiver_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11140191511495"><a name="en-us_topic_0283136951_p11140191511495"></a><a name="en-us_topic_0283136951_p11140191511495"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p4140121544913"><a name="en-us_topic_0283136951_p4140121544913"></a><a name="en-us_topic_0283136951_p4140121544913"></a>Flushing position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row53771520124919"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p63782208496"><a name="en-us_topic_0283136951_p63782208496"></a><a name="en-us_topic_0283136951_p63782208496"></a>receiver_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11378220104918"><a name="en-us_topic_0283136951_p11378220104918"></a><a name="en-us_topic_0283136951_p11378220104918"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p937812012495"><a name="en-us_topic_0283136951_p937812012495"></a><a name="en-us_topic_0283136951_p937812012495"></a>Redo position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row18248124164919"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p424862415498"><a name="en-us_topic_0283136951_p424862415498"></a><a name="en-us_topic_0283136951_p424862415498"></a>sync_percent</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p17248102454915"><a name="en-us_topic_0283136951_p17248102454915"></a><a name="en-us_topic_0283136951_p17248102454915"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p15248182410497"><a name="en-us_topic_0283136951_p15248182410497"></a><a name="en-us_topic_0283136951_p15248182410497"></a>Synchronization percentage</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row14443140135117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p44447095112"><a name="en-us_topic_0283136951_p44447095112"></a><a name="en-us_topic_0283136951_p44447095112"></a>sync_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p944518015518"><a name="en-us_topic_0283136951_p944518015518"></a><a name="en-us_topic_0283136951_p944518015518"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p14451065118"><a name="en-us_topic_0283136951_p14451065118"></a><a name="en-us_topic_0283136951_p14451065118"></a>Synchronization status</p>
    </td>
    </tr>
    <tr id="row115781840112710"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1557974015271"><a name="p1557974015271"></a><a name="p1557974015271"></a>sync_group</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p16580540122711"><a name="p16580540122711"></a><a name="p16580540122711"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p858014404279"><a name="p858014404279"></a><a name="p858014404279"></a>Group to which the synchronous replication belongs</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row679215435117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p2079294175119"><a name="en-us_topic_0283136951_p2079294175119"></a><a name="en-us_topic_0283136951_p2079294175119"></a>sync_priority</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p2079216445113"><a name="en-us_topic_0283136951_p2079216445113"></a><a name="en-us_topic_0283136951_p2079216445113"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p484715405565"><a name="en-us_topic_0283136951_p484715405565"></a><a name="en-us_topic_0283136951_p484715405565"></a>Priority of synchronous replication</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row18584611135117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p13585201145115"><a name="en-us_topic_0283136951_p13585201145115"></a><a name="en-us_topic_0283136951_p13585201145115"></a>sync_most_available</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p2058501116515"><a name="en-us_topic_0283136951_p2058501116515"></a><a name="en-us_topic_0283136951_p2058501116515"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p13585141135119"><a name="en-us_topic_0283136951_p13585141135119"></a><a name="en-us_topic_0283136951_p13585141135119"></a>Maximum availability mode</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row199236418516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p16924154195120"><a name="en-us_topic_0283136951_p16924154195120"></a><a name="en-us_topic_0283136951_p16924154195120"></a>channel</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p12924184155113"><a name="en-us_topic_0283136951_p12924184155113"></a><a name="en-us_topic_0283136951_p12924184155113"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p420111065210"><a name="en-us_topic_0283136951_p420111065210"></a><a name="en-us_topic_0283136951_p420111065210"></a>Channel information of the WAL sender</p>
    </td>
    </tr>
    </tbody>
    </table>

-   get\_paxos\_replication\_info\(\)

    Description: Queries the primary/standby replication status in Paxos mode.

    Return type: setofrecord

    The following table describes return columns.

    **Table  2**  Return column description

    <a name="table132714190424"></a>
    <table><thead align="left"><tr id="row827215193425"><th class="cellrowborder" valign="top" width="26.672667266726673%" id="mcps1.2.4.1.1"><p id="p5272919114214"><a name="p5272919114214"></a><a name="p5272919114214"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="24.512451245124513%" id="mcps1.2.4.1.2"><p id="p182720199429"><a name="p182720199429"></a><a name="p182720199429"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.814881488148814%" id="mcps1.2.4.1.3"><p id="p527271918427"><a name="p527271918427"></a><a name="p527271918427"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row9275619194218"><td class="cellrowborder" valign="top" width="26.672667266726673%" headers="mcps1.2.4.1.1 "><p id="p3275719104212"><a name="p3275719104212"></a><a name="p3275719104212"></a>paxos_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.2 "><p id="p1627620193422"><a name="p1627620193422"></a><a name="p1627620193422"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.814881488148814%" headers="mcps1.2.4.1.3 "><p id="p17276151910426"><a name="p17276151910426"></a><a name="p17276151910426"></a>Location of the Xlog that has been written to the Distribute Consensus Framework (DCF)</p>
    </td>
    </tr>
    <tr id="row1827717196424"><td class="cellrowborder" valign="top" width="26.672667266726673%" headers="mcps1.2.4.1.1 "><p id="p327716196428"><a name="p327716196428"></a><a name="p327716196428"></a>paxos_commit_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.2 "><p id="p10277319124213"><a name="p10277319124213"></a><a name="p10277319124213"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.814881488148814%" headers="mcps1.2.4.1.3 "><p id="p18277121917422"><a name="p18277121917422"></a><a name="p18277121917422"></a>Location of the Xlog agreed in the DCF</p>
    </td>
    </tr>
    <tr id="row32772019114220"><td class="cellrowborder" valign="top" width="26.672667266726673%" headers="mcps1.2.4.1.1 "><p id="p1842517495520"><a name="p1842517495520"></a><a name="p1842517495520"></a>local_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.2 "><p id="p5277141915429"><a name="p5277141915429"></a><a name="p5277141915429"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.814881488148814%" headers="mcps1.2.4.1.3 "><p id="p122772198423"><a name="p122772198423"></a><a name="p122772198423"></a>Writing position of a node</p>
    </td>
    </tr>
    <tr id="row827713199426"><td class="cellrowborder" valign="top" width="26.672667266726673%" headers="mcps1.2.4.1.1 "><p id="p14277519124215"><a name="p14277519124215"></a><a name="p14277519124215"></a>local_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.2 "><p id="p1727741916421"><a name="p1727741916421"></a><a name="p1727741916421"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.814881488148814%" headers="mcps1.2.4.1.3 "><p id="p72771919164215"><a name="p72771919164215"></a><a name="p72771919164215"></a>Flushing position of a node</p>
    </td>
    </tr>
    <tr id="row1827720199425"><td class="cellrowborder" valign="top" width="26.672667266726673%" headers="mcps1.2.4.1.1 "><p id="p19903132413555"><a name="p19903132413555"></a><a name="p19903132413555"></a>local_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.2 "><p id="p22773199426"><a name="p22773199426"></a><a name="p22773199426"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.814881488148814%" headers="mcps1.2.4.1.3 "><p id="p2278161915426"><a name="p2278161915426"></a><a name="p2278161915426"></a>Redo position of a node</p>
    </td>
    </tr>
    <tr id="row62781196425"><td class="cellrowborder" valign="top" width="26.672667266726673%" headers="mcps1.2.4.1.1 "><p id="p6278201944211"><a name="p6278201944211"></a><a name="p6278201944211"></a>dcf_replication_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.512451245124513%" headers="mcps1.2.4.1.2 "><p id="p427861924215"><a name="p427861924215"></a><a name="p427861924215"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.814881488148814%" headers="mcps1.2.4.1.3 "><p id="p827912190427"><a name="p827912190427"></a><a name="p827912190427"></a>DCF module information of a node</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_stream\_replications\(\)

    Description: Queries the primary/standby replication status.

    Return type: setofrecord

    The following table describes return values.

    **Table  3**  Return value description

    <a name="en-us_topic_0283136951_table1662971714811"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row11630717882"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p11633617483"><a name="en-us_topic_0283136951_p11633617483"></a><a name="en-us_topic_0283136951_p11633617483"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p93814503815"><a name="en-us_topic_0283136951_p93814503815"></a><a name="en-us_topic_0283136951_p93814503815"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p36691008915"><a name="en-us_topic_0283136951_p36691008915"></a><a name="en-us_topic_0283136951_p36691008915"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_row7633141718811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p66339171386"><a name="en-us_topic_0283136951_p66339171386"></a><a name="en-us_topic_0283136951_p66339171386"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p36331917982"><a name="en-us_topic_0283136951_p36331917982"></a><a name="en-us_topic_0283136951_p36331917982"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p863410171182"><a name="en-us_topic_0283136951_p863410171182"></a><a name="en-us_topic_0283136951_p863410171182"></a>Local role</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row196343175810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p163411171483"><a name="en-us_topic_0283136951_p163411171483"></a><a name="en-us_topic_0283136951_p163411171483"></a>static_connections</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p9634517888"><a name="en-us_topic_0283136951_p9634517888"></a><a name="en-us_topic_0283136951_p9634517888"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p86340175811"><a name="en-us_topic_0283136951_p86340175811"></a><a name="en-us_topic_0283136951_p86340175811"></a>Connection statistics</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row11634417989"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p3635141710810"><a name="en-us_topic_0283136951_p3635141710810"></a><a name="en-us_topic_0283136951_p3635141710810"></a>db_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p176351517285"><a name="en-us_topic_0283136951_p176351517285"></a><a name="en-us_topic_0283136951_p176351517285"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p763517173813"><a name="en-us_topic_0283136951_p763517173813"></a><a name="en-us_topic_0283136951_p763517173813"></a>Database status</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row16537337918"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p135483315913"><a name="en-us_topic_0283136951_p135483315913"></a><a name="en-us_topic_0283136951_p135483315913"></a>detail_information</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1540335913"><a name="en-us_topic_0283136951_p1540335913"></a><a name="en-us_topic_0283136951_p1540335913"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p554113314916"><a name="en-us_topic_0283136951_p554113314916"></a><a name="en-us_topic_0283136951_p554113314916"></a>Detailed information</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_db\_numbackends\(oid\)

    Description: Specifies the number of active server processes for a database.

    Return type: integer

-   pg\_stat\_get\_db\_xact\_commit\(oid\)

    Description: Specifies the number of transactions committed in a database.

    Return type: bigint

-   pg\_stat\_get\_db\_xact\_rollback\(oid\)

    Description: Specifies the number of transactions rolled back in a database.

    Return type: bigint

-   pg\_stat\_get\_db\_blocks\_fetched\(oid\)

    Description: Specifies the number of disk blocks fetch requests for a database.

    Return type: bigint

-   pg\_stat\_get\_db\_blocks\_hit\(oid\)

    Description: Specifies the number of disk block fetch requests found in cache for a database.

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_returned\(oid\)

    Description: Specifies the number of tuples returned for a database.

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_fetched\(oid\)

    Description: Specifies the number of tuples fetched for a database.

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_inserted\(oid\)

    Description: Specifies the number of tuples inserted in a database.

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_updated\(oid\)

    Description: Specifies the number of tuples updated in a database.

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_deleted\(oid\)

    Description: Specifies the number of tuples deleted in a database.

    Return type: bigint

-   pg\_stat\_get\_db\_conflict\_lock\(oid\)

    Description: Specifies the number of lock conflicts in a database.

    Return type: bigint

-   pg\_stat\_get\_db\_deadlocks\(oid\)

    Description: Specifies the number of deadlocks in a database.

    Return type: bigint

-   pg\_stat\_get\_numscans\(oid\)

    Description: Specifies the number of sequential row scans done if parameters are in a table or the number of index scans done if parameters are in an index.

    Return type: bigint

-   pg\_stat\_get\_role\_name\(oid\)

    Description: Obtains the username based on the user OID. Only users with the  **sysadmin**  or  **monitor admin**  permission can access the information.

    Return type: text

    Example:

    ```
    openGauss=# select pg_stat_get_role_name(10);
     pg_stat_get_role_name
    -----------------------
     aabbcc
    (1 row)
    ```

-   pg\_stat\_get\_tuples\_returned\(oid\)

    Description: Specifies the number of sequential row scans done if parameters are in a table or the number of index scans done if parameters are in an index.

    Return type: bigint

-   pg\_stat\_get\_tuples\_fetched\(oid\)

    Description: Specifies the number of table rows fetched by bitmap scans if parameters are in a table or the number of table rows fetched by simple index scans using the index if parameters are in an index.

    Return type: bigint

-   pg\_stat\_get\_tuples\_inserted\(oid\)

    Description: Specifies the number of rows inserted into a table.

    Return type: bigint

-   pg\_stat\_get\_tuples\_updated\(oid\)

    Description: Specifies the number of rows updated in a table.

    Return type: bigint

-   pg\_stat\_get\_tuples\_deleted\(oid\)

    Description: Specifies the number of rows deleted from a table.

    Return type: bigint

-   pg\_stat\_get\_tuples\_changed\(oid\)

    Description: Specifies the total number of inserted, updated, and deleted rows after a table was last analyzed or autoanalyzed.

    Return type: bigint

-   pg\_stat\_get\_tuples\_hot\_updated\(oid\)

    Description: Specifies the number of rows hot updated in a table.

    Return type: bigint

-   pg\_stat\_get\_live\_tuples\(oid\)

    Description: Specifies the number of live rows in a table.

    Return type: bigint

-   pg\_stat\_get\_dead\_tuples\(oid\)

    Description: Specifies the number of dead rows in a table.

    Return type: bigint

-   pg\_stat\_get\_blocks\_fetched\(oid\)

    Description: Specifies the number of disk block fetch requests for a table or an index.

    Return type: bigint

-   pg\_stat\_get\_blocks\_hit\(oid\)

    Description: Specifies the number of disk block requests found in cache for a table or an index.

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_inserted\(oid\)

    Description: Specifies the number of rows in the corresponding table partition.

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_updated\(oid\)

    Description: Specifies the number of rows that have been updated in the corresponding table partition.

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_deleted\(oid\)

    Description: Specifies the number of rows deleted from the corresponding table partition.

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_changed\(oid\)

    Description: Specifies the total number of inserted, updated, and deleted rows after a table partition was last analyzed or autoanalyzed.

    Return type: bigint

-   pg\_stat\_get\_partition\_live\_tuples\(oid\)

    Description: Specifies the number of live rows in a partitioned table.

    Return type: bigint

-   pg\_stat\_get\_partition\_dead\_tuples\(oid\)

    Description: Specifies the number of dead rows in a partitioned table.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_fetched\(oid\)

    Description: Specifies the number of tuple rows scanned in a transaction.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_inserted\(oid\)

    Description: Specifies the number of tuple inserted into the active subtransactions related to a table.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_deleted\(oid\)

    Description: Specifies the number of deleted tuples in the active subtransactions related to a table.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_hot\_updated\(oid\)

    Description: Specifies the number of hot updated tuples in the active subtransactions related to a table.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_updated\(oid\)

    Description: Specifies the number of updated tuples in the active subtransactions related to a table.

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_inserted\(oid\)

    Description: Specifies the number of inserted tuples in the active subtransactions related to a table partition.

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_deleted\(oid\)

    Description: Specifies the number of deleted tuples in the active subtransactions related to a table partition.

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_hot\_updated\(oid\)

    Description: Specifies the number of hot updated tuples in the active subtransactions related to a table partition.

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_updated\(oid\)

    Description: Specifies the number of updated tuples in the active subtransactions related to a table partition.

    Return type: bigint

-   pg\_stat\_get\_last\_vacuum\_time\(oid\)

    Description: Specifies the most recent time when the autovacuum thread is manually started to clear a table.

    Return type: timestamptz

-   pg\_stat\_get\_last\_autovacuum\_time\(oid\)

    Description: Specifies the time of the last vacuum initiated by the autovacuum daemon on a table.

    Return type: timestamptz

-   pg\_stat\_get\_vacuum\_count\(oid\)

    Description: Specifies the number of times a table is manually cleared.

    Return type: bigint

-   pg\_stat\_get\_autovacuum\_count\(oid\)

    Description: Specifies the number of times the autovacuum daemon is started to clear a table.

    Return type: bigint

-   pg\_stat\_get\_last\_analyze\_time\(oid\)

    Description: Specifies the last time when a table starts to be analyzed manually or by the autovacuum thread.

    Return type: timestamptz

-   pg\_stat\_get\_last\_autoanalyze\_time\(oid\)

    Description: Specifies the time when the last analysis initiated by the autovacuum daemon on a table.

    Return type: timestamptz

-   pg\_stat\_get\_analyze\_count\(oid\)

    Description: Specifies the number of times a table is manually analyzed.

    Return type: bigint

-   pg\_stat\_get\_autoanalyze\_count\(oid\)

    Description: Specifies the number of times the autovacuum daemon analyzes a table.

    Return type: bigint

-   pg\_total\_autovac\_tuples\(bool,bool\)

    Description: Returns tuple records related to the total autovac, such as  **nodename**,  **nspname**,  **relname**, and tuple IUDs. The input parameters specify whether to query  **relation**  and  **local**  information, respectively.

    Return type: setofrecord

    The following table describes return parameters.

    **Table  4**  Return parameter description

    <a name="en-us_topic_0283136951_table14816112541517"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row148172025141520"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p58171325151511"><a name="en-us_topic_0283136951_p58171325151511"></a><a name="en-us_topic_0283136951_p58171325151511"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p12242101871719"><a name="en-us_topic_0283136951_p12242101871719"></a><a name="en-us_topic_0283136951_p12242101871719"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p45501846111711"><a name="en-us_topic_0283136951_p45501846111711"></a><a name="en-us_topic_0283136951_p45501846111711"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_row20818152517157"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p13818162581514"><a name="en-us_topic_0283136951_p13818162581514"></a><a name="en-us_topic_0283136951_p13818162581514"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1859598171917"><a name="en-us_topic_0283136951_p1859598171917"></a><a name="en-us_topic_0283136951_p1859598171917"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p10818112501512"><a name="en-us_topic_0283136951_p10818112501512"></a><a name="en-us_topic_0283136951_p10818112501512"></a>Node name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row581862581517"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p4818425131514"><a name="en-us_topic_0283136951_p4818425131514"></a><a name="en-us_topic_0283136951_p4818425131514"></a>nspname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p881842519152"><a name="en-us_topic_0283136951_p881842519152"></a><a name="en-us_topic_0283136951_p881842519152"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p88181925131514"><a name="en-us_topic_0283136951_p88181925131514"></a><a name="en-us_topic_0283136951_p88181925131514"></a>Name of a namespace</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row18184258154"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p158181725191514"><a name="en-us_topic_0283136951_p158181725191514"></a><a name="en-us_topic_0283136951_p158181725191514"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1981810253156"><a name="en-us_topic_0283136951_p1981810253156"></a><a name="en-us_topic_0283136951_p1981810253156"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p108191125101512"><a name="en-us_topic_0283136951_p108191125101512"></a><a name="en-us_topic_0283136951_p108191125101512"></a>Name of an object, such as a table, an index, or a view</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row7819925111516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p16819162510156"><a name="en-us_topic_0283136951_p16819162510156"></a><a name="en-us_topic_0283136951_p16819162510156"></a>partname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p138191225161517"><a name="en-us_topic_0283136951_p138191225161517"></a><a name="en-us_topic_0283136951_p138191225161517"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p4819202591511"><a name="en-us_topic_0283136951_p4819202591511"></a><a name="en-us_topic_0283136951_p4819202591511"></a>Partition name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row28191225121515"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p108191325101511"><a name="en-us_topic_0283136951_p108191325101511"></a><a name="en-us_topic_0283136951_p108191325101511"></a>n_dead_tuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11819152521514"><a name="en-us_topic_0283136951_p11819152521514"></a><a name="en-us_topic_0283136951_p11819152521514"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p2081912258159"><a name="en-us_topic_0283136951_p2081912258159"></a><a name="en-us_topic_0283136951_p2081912258159"></a>Number of dead rows in a table partition</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row12476369209"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1024820362203"><a name="en-us_topic_0283136951_p1024820362203"></a><a name="en-us_topic_0283136951_p1024820362203"></a>n_live_tuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1124823620202"><a name="en-us_topic_0283136951_p1124823620202"></a><a name="en-us_topic_0283136951_p1124823620202"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1824812368201"><a name="en-us_topic_0283136951_p1824812368201"></a><a name="en-us_topic_0283136951_p1824812368201"></a>Number of live rows in a table partition</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row195051441102010"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1505164132014"><a name="en-us_topic_0283136951_p1505164132014"></a><a name="en-us_topic_0283136951_p1505164132014"></a>changes_since_analyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1750554182015"><a name="en-us_topic_0283136951_p1750554182015"></a><a name="en-us_topic_0283136951_p1750554182015"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p14506134182011"><a name="en-us_topic_0283136951_p14506134182011"></a><a name="en-us_topic_0283136951_p14506134182011"></a>Number of changes generated by ANALYZE</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_autovac\_status\(oid\)

    Description: Returns autovac information, such as  **nodename**,  **nspname**,  **relname**,  **analyze**,  **vacuum**, thresholds of  **analyze**  and  **vacuum**, and the number of analyzed or vacuumed tuples. Only users with the  **sysadmin**  permission can use this function.

    Return type: setofrecord

    The following table describes return parameters.

    **Table  5**  Return parameter description

    <a name="en-us_topic_0283136951_table1494614261571"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row109474261377"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p994712261279"><a name="en-us_topic_0283136951_p994712261279"></a><a name="en-us_topic_0283136951_p994712261279"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p1694762611712"><a name="en-us_topic_0283136951_p1694762611712"></a><a name="en-us_topic_0283136951_p1694762611712"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p20948202615715"><a name="en-us_topic_0283136951_p20948202615715"></a><a name="en-us_topic_0283136951_p20948202615715"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_row1294816261078"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p29489261873"><a name="en-us_topic_0283136951_p29489261873"></a><a name="en-us_topic_0283136951_p29489261873"></a>nspname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p199489261078"><a name="en-us_topic_0283136951_p199489261078"></a><a name="en-us_topic_0283136951_p199489261078"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p726619322126"><a name="en-us_topic_0283136951_p726619322126"></a><a name="en-us_topic_0283136951_p726619322126"></a>Name of a namespace</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1294815261712"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p794892615720"><a name="en-us_topic_0283136951_p794892615720"></a><a name="en-us_topic_0283136951_p794892615720"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p149484261873"><a name="en-us_topic_0283136951_p149484261873"></a><a name="en-us_topic_0283136951_p149484261873"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1149882681218"><a name="en-us_topic_0283136951_p1149882681218"></a><a name="en-us_topic_0283136951_p1149882681218"></a>Name of an object, such as a table, an index, or a view</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1494915261174"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1294916261572"><a name="en-us_topic_0283136951_p1294916261572"></a><a name="en-us_topic_0283136951_p1294916261572"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1894913261374"><a name="en-us_topic_0283136951_p1894913261374"></a><a name="en-us_topic_0283136951_p1894913261374"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1094912265720"><a name="en-us_topic_0283136951_p1094912265720"></a><a name="en-us_topic_0283136951_p1094912265720"></a>Node name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row694917262077"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p99497261970"><a name="en-us_topic_0283136951_p99497261970"></a><a name="en-us_topic_0283136951_p99497261970"></a>doanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1994915261776"><a name="en-us_topic_0283136951_p1994915261776"></a><a name="en-us_topic_0283136951_p1994915261776"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p4433181417127"><a name="en-us_topic_0283136951_p4433181417127"></a><a name="en-us_topic_0283136951_p4433181417127"></a>Whether to execute <strong id="b14121172520465"><a name="b14121172520465"></a><a name="b14121172520465"></a>ANALYZE</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row184591961294"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p16460261899"><a name="en-us_topic_0283136951_p16460261899"></a><a name="en-us_topic_0283136951_p16460261899"></a>anltuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1546117616919"><a name="en-us_topic_0283136951_p1546117616919"></a><a name="en-us_topic_0283136951_p1546117616919"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p15595108201213"><a name="en-us_topic_0283136951_p15595108201213"></a><a name="en-us_topic_0283136951_p15595108201213"></a>Number of ANALYZE tuples</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1420519111918"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p14206171115912"><a name="en-us_topic_0283136951_p14206171115912"></a><a name="en-us_topic_0283136951_p14206171115912"></a>anlthresh</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p13206111111913"><a name="en-us_topic_0283136951_p13206111111913"></a><a name="en-us_topic_0283136951_p13206111111913"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p92077119918"><a name="en-us_topic_0283136951_p92077119918"></a><a name="en-us_topic_0283136951_p92077119918"></a>ANALYZE threshold</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row56435309913"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p11644193012911"><a name="en-us_topic_0283136951_p11644193012911"></a><a name="en-us_topic_0283136951_p11644193012911"></a>dovacuum</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p13644123010912"><a name="en-us_topic_0283136951_p13644123010912"></a><a name="en-us_topic_0283136951_p13644123010912"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p106443301396"><a name="en-us_topic_0283136951_p106443301396"></a><a name="en-us_topic_0283136951_p106443301396"></a>Whether to execute <strong id="b677178194710"><a name="b677178194710"></a><a name="b677178194710"></a>VACUUM</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row066734693"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p3661634094"><a name="en-us_topic_0283136951_p3661634094"></a><a name="en-us_topic_0283136951_p3661634094"></a>vactuples</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p3671834991"><a name="en-us_topic_0283136951_p3671834991"></a><a name="en-us_topic_0283136951_p3671834991"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p5679347911"><a name="en-us_topic_0283136951_p5679347911"></a><a name="en-us_topic_0283136951_p5679347911"></a>Number of VACUUM tuples</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row5453145420910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p134541654899"><a name="en-us_topic_0283136951_p134541654899"></a><a name="en-us_topic_0283136951_p134541654899"></a>vacthresh</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p134549541395"><a name="en-us_topic_0283136951_p134549541395"></a><a name="en-us_topic_0283136951_p134549541395"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p845555420919"><a name="en-us_topic_0283136951_p845555420919"></a><a name="en-us_topic_0283136951_p845555420919"></a>VACUUM threshold</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_autovac\_timeout\(oid\)

    Description: Returns the number of consecutive timeouts during the autovac operation on a table. If the table information is invalid or the node information is abnormal,  **NULL**  will be returned.

    Return type: bigint

-   pg\_stat\_get\_last\_data\_changed\_time\(oid\)

    Description: Returns the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was last performed on a table. The data in the  **last\_data\_changed**  column of the  [PG\_STAT\_ALL\_TABLES](pg_stat_all_tables.md)  view is calculated by using this function. The performance of obtaining the last modification time by using the view is poor when the table has a large amount of data. In this case, you are advised to use the function.

    Return type: timestamptz

-   pg\_stat\_set\_last\_data\_changed\_time\(oid\)

    Description: Manually changes the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was last performed.

    Return type: void

-   pg\_backend\_pid\(\)

    Description: Specifies the thread ID of the server thread attached to the current session.

    Return type: integer

-   pg\_stat\_get\_activity\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The returned result does not contain the  **connection\_info**  column. The initial user, system administrators and users with the  **monadmin**  permission can view all data. Common users can only query their own results.

    Example:

    ```
    openGauss=# select * from pg_stat_get_activity(139881386280704);
     datid |       pid       | sessionid | usesysid | application_name | state  |                        query                         | waiting |          xact_start           |          query_start          |
        backend_start         |         state_change         | client_addr | client_hostname | client_port | enqueue |     query_id      |   srespool   | global_sessionid | unique_sql_id | trace_id
    -------+-----------------+-----------+----------+------------------+--------+------------------------------------------------------+---------+-------------------------------+-------------------------------+-----
    --------------------------+------------------------------+-------------+-----------------+-------------+---------+-------------------+--------------+------------------+---------------+----------
     16545 | 139881386280704 |        69 |       10 | gsql             | active | select * from pg_stat_get_activity(139881386280704); | f       | 2022-01-18 19:43:05.167718+08 | 2022-01-18 19:43:05.167718+08 | 2022
    -01-18 19:42:33.513507+08 | 2022-01-18 19:43:05.16773+08 |             |                 |          -1 |         | 72620543991624410 | default_pool | 1938253334#69#0  |    3751941862 |
    (1 row)
    ```

    Return type: setofrecord

    The following table describes return parameters.

    **Table  6**  Return parameter description

    <a name="en-us_topic_0283136951_table147214071613"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row77304010165"><th class="cellrowborder" valign="top" width="35.063506350635066%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p5737405161"><a name="en-us_topic_0283136951_p5737405161"></a><a name="en-us_topic_0283136951_p5737405161"></a>Return Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.6031603160316%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p14731540111617"><a name="en-us_topic_0283136951_p14731540111617"></a><a name="en-us_topic_0283136951_p14731540111617"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p97334010164"><a name="en-us_topic_0283136951_p97334010164"></a><a name="en-us_topic_0283136951_p97334010164"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_row16731540181620"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p673440101616"><a name="en-us_topic_0283136951_p673440101616"></a><a name="en-us_topic_0283136951_p673440101616"></a>datid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p4741840111618"><a name="en-us_topic_0283136951_p4741840111618"></a><a name="en-us_topic_0283136951_p4741840111618"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p191201373292"><a name="en-us_topic_0283136951_p191201373292"></a><a name="en-us_topic_0283136951_p191201373292"></a>OID of the database that the user session connects to in the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row17741640191617"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p16741440131612"><a name="en-us_topic_0283136951_p16741440131612"></a><a name="en-us_topic_0283136951_p16741440131612"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p137484011610"><a name="en-us_topic_0283136951_p137484011610"></a><a name="en-us_topic_0283136951_p137484011610"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1576062313290"><a name="en-us_topic_0283136951_p1576062313290"></a><a name="en-us_topic_0283136951_p1576062313290"></a>Backend thread ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row67494011161"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p107434051611"><a name="en-us_topic_0283136951_p107434051611"></a><a name="en-us_topic_0283136951_p107434051611"></a>sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p187410405162"><a name="en-us_topic_0283136951_p187410405162"></a><a name="en-us_topic_0283136951_p187410405162"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p177510404167"><a name="en-us_topic_0283136951_p177510404167"></a><a name="en-us_topic_0283136951_p177510404167"></a>Session ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1775194051619"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p187524016169"><a name="en-us_topic_0283136951_p187524016169"></a><a name="en-us_topic_0283136951_p187524016169"></a>usesysid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p137504017161"><a name="en-us_topic_0283136951_p137504017161"></a><a name="en-us_topic_0283136951_p137504017161"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p137594021613"><a name="en-us_topic_0283136951_p137594021613"></a><a name="en-us_topic_0283136951_p137594021613"></a>OID of the user logged in to the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1175144021611"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p976154020164"><a name="en-us_topic_0283136951_p976154020164"></a><a name="en-us_topic_0283136951_p976154020164"></a>application_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p187619405164"><a name="en-us_topic_0283136951_p187619405164"></a><a name="en-us_topic_0283136951_p187619405164"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p3765408162"><a name="en-us_topic_0283136951_p3765408162"></a><a name="en-us_topic_0283136951_p3765408162"></a>Name of the application connected to the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row240816535187"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p2409125351812"><a name="en-us_topic_0283136951_p2409125351812"></a><a name="en-us_topic_0283136951_p2409125351812"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p52401239271"><a name="en-us_topic_0283136951_p52401239271"></a><a name="en-us_topic_0283136951_p52401239271"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p8410553181812"><a name="en-us_topic_0283136951_p8410553181812"></a><a name="en-us_topic_0283136951_p8410553181812"></a>Overall status of the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row20433131516198"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1743491521918"><a name="en-us_topic_0283136951_p1743491521918"></a><a name="en-us_topic_0283136951_p1743491521918"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p04341915121912"><a name="en-us_topic_0283136951_p04341915121912"></a><a name="en-us_topic_0283136951_p04341915121912"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p18434101541910"><a name="en-us_topic_0283136951_p18434101541910"></a><a name="en-us_topic_0283136951_p18434101541910"></a>Latest query at the backend. If <strong id="b183586738145811"><a name="b183586738145811"></a><a name="b183586738145811"></a>state</strong> is <strong id="b203765162745811"><a name="b203765162745811"></a><a name="b203765162745811"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row18561719141914"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p17857181918193"><a name="en-us_topic_0283136951_p17857181918193"></a><a name="en-us_topic_0283136951_p17857181918193"></a>waiting</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p16857121917196"><a name="en-us_topic_0283136951_p16857121917196"></a><a name="en-us_topic_0283136951_p16857121917196"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p19857121951918"><a name="en-us_topic_0283136951_p19857121951918"></a><a name="en-us_topic_0283136951_p19857121951918"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b135211609245811"><a name="b135211609245811"></a><a name="b135211609245811"></a>true</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row10811236121917"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p38111636131910"><a name="en-us_topic_0283136951_p38111636131910"></a><a name="en-us_topic_0283136951_p38111636131910"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p15811936181913"><a name="en-us_topic_0283136951_p15811936181913"></a><a name="en-us_topic_0283136951_p15811936181913"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p10812636191920"><a name="en-us_topic_0283136951_p10812636191920"></a><a name="en-us_topic_0283136951_p10812636191920"></a>Time when current transaction was started (null if no transaction is active).</p>
    <p id="en-us_topic_0283136951_p4616541132518"><a name="en-us_topic_0283136951_p4616541132518"></a><a name="en-us_topic_0283136951_p4616541132518"></a>If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b6602405145811"><a name="b6602405145811"></a><a name="b6602405145811"></a>query_start</strong> column.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1922445271914"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p72255527193"><a name="en-us_topic_0283136951_p72255527193"></a><a name="en-us_topic_0283136951_p72255527193"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p32254522193"><a name="en-us_topic_0283136951_p32254522193"></a><a name="en-us_topic_0283136951_p32254522193"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p156675918251"><a name="en-us_topic_0283136951_p156675918251"></a><a name="en-us_topic_0283136951_p156675918251"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b166455651424442"><a name="b166455651424442"></a><a name="b166455651424442"></a>state</strong> is not <strong id="b166979284724442"><a name="b166979284724442"></a><a name="b166979284724442"></a>active</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row165075621919"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p4651156171920"><a name="en-us_topic_0283136951_p4651156171920"></a><a name="en-us_topic_0283136951_p4651156171920"></a>backend_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p565125621914"><a name="en-us_topic_0283136951_p565125621914"></a><a name="en-us_topic_0283136951_p565125621914"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p206515564197"><a name="en-us_topic_0283136951_p206515564197"></a><a name="en-us_topic_0283136951_p206515564197"></a>Time when this process was started, that is, when the client connected to the server</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row6451181610208"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1945141614202"><a name="en-us_topic_0283136951_p1945141614202"></a><a name="en-us_topic_0283136951_p1945141614202"></a>state_change</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p4451121692014"><a name="en-us_topic_0283136951_p4451121692014"></a><a name="en-us_topic_0283136951_p4451121692014"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p2982153210243"><a name="en-us_topic_0283136951_p2982153210243"></a><a name="en-us_topic_0283136951_p2982153210243"></a>Time when <strong id="b4186337566"><a name="b4186337566"></a><a name="b4186337566"></a>state</strong> was last modified</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row167765339204"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p177683342016"><a name="en-us_topic_0283136951_p177683342016"></a><a name="en-us_topic_0283136951_p177683342016"></a>client_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1277653372017"><a name="en-us_topic_0283136951_p1277653372017"></a><a name="en-us_topic_0283136951_p1277653372017"></a>inet</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p19776113312012"><a name="en-us_topic_0283136951_p19776113312012"></a><a name="en-us_topic_0283136951_p19776113312012"></a>IP address of the client connected to the backend. If this column is <strong id="b67211695445811"><a name="b67211695445811"></a><a name="b67211695445811"></a>NULL</strong>, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as <strong id="b135884647845811"><a name="b135884647845811"></a><a name="b135884647845811"></a>AUTOVACUUM</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1411374615201"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p4113846102013"><a name="en-us_topic_0283136951_p4113846102013"></a><a name="en-us_topic_0283136951_p4113846102013"></a>client_hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p8113134610200"><a name="en-us_topic_0283136951_p8113134610200"></a><a name="en-us_topic_0283136951_p8113134610200"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p14113204692011"><a name="en-us_topic_0283136951_p14113204692011"></a><a name="en-us_topic_0283136951_p14113204692011"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b120152363245811"><a name="b120152363245811"></a><a name="b120152363245811"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b109382145445811"><a name="b109382145445811"></a><a name="b109382145445811"></a>log_hostname</strong> is enabled.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row28681792219"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p986869102116"><a name="en-us_topic_0283136951_p986869102116"></a><a name="en-us_topic_0283136951_p986869102116"></a>client_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p3868691216"><a name="en-us_topic_0283136951_p3868691216"></a><a name="en-us_topic_0283136951_p3868691216"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p18331162415238"><a name="en-us_topic_0283136951_p18331162415238"></a><a name="en-us_topic_0283136951_p18331162415238"></a>TCP port number that the client uses for communication with this backend (<strong id="b1764121492"><a name="b1764121492"></a><a name="b1764121492"></a>–1</strong> if a Unix socket is used)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1660362882120"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p960322812212"><a name="en-us_topic_0283136951_p960322812212"></a><a name="en-us_topic_0283136951_p960322812212"></a>enqueue</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p155514473225"><a name="en-us_topic_0283136951_p155514473225"></a><a name="en-us_topic_0283136951_p155514473225"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p152741656202215"><a name="en-us_topic_0283136951_p152741656202215"></a><a name="en-us_topic_0283136951_p152741656202215"></a>Unsupported currently</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row69109403213"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p14911164072114"><a name="en-us_topic_0283136951_p14911164072114"></a><a name="en-us_topic_0283136951_p14911164072114"></a>query_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p19111940202111"><a name="en-us_topic_0283136951_p19111940202111"></a><a name="en-us_topic_0283136951_p19111940202111"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p99128408218"><a name="en-us_topic_0283136951_p99128408218"></a><a name="en-us_topic_0283136951_p99128408218"></a>ID of a query</p>
    </td>
    </tr>
    <tr id="row85731028152812"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p7573132852816"><a name="p7573132852816"></a><a name="p7573132852816"></a>srespool</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p20573162882818"><a name="p20573162882818"></a><a name="p20573162882818"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15731028182818"><a name="p15731028182818"></a><a name="p15731028182818"></a>Name of the resource pool</p>
    </td>
    </tr>
    <tr id="row28955115323"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p38951917329"><a name="p38951917329"></a><a name="p38951917329"></a>global_sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p168959143217"><a name="p168959143217"></a><a name="p168959143217"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p168951113321"><a name="p168951113321"></a><a name="p168951113321"></a>Global session ID</p>
    </td>
    </tr>
    <tr id="row46321879593"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p46321076593"><a name="p46321076593"></a><a name="p46321076593"></a>unique_sql_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p163211725912"><a name="p163211725912"></a><a name="p163211725912"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p136322755917"><a name="p136322755917"></a><a name="p136322755917"></a>Unique SQL statement ID</p>
    </td>
    </tr>
    <tr id="row1531623435213"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="p531723410523"><a name="p531723410523"></a><a name="p531723410523"></a>trace_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="p20317113415522"><a name="p20317113415522"></a><a name="p20317113415522"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1131733411521"><a name="p1131733411521"></a><a name="p1131733411521"></a>Driver-specific trace ID, which is associated with an application request</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_activity\_with\_conninfo\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The initial user, system administrators and users with the  **monadmin**  permission can view all data. Common users can only query their own results.

    Return type: setofrecord

    The following table describes return values.

    **Table  7**  Return value description

    <a name="en-us_topic_0283136951_table8714322156"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row27218327150"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p137215323156"><a name="en-us_topic_0283136951_p137215323156"></a><a name="en-us_topic_0283136951_p137215323156"></a>Return Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p107253241511"><a name="en-us_topic_0283136951_p107253241511"></a><a name="en-us_topic_0283136951_p107253241511"></a>Return Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p1873153219152"><a name="en-us_topic_0283136951_p1873153219152"></a><a name="en-us_topic_0283136951_p1873153219152"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_row1973163211510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1473132181520"><a name="en-us_topic_0283136951_p1473132181520"></a><a name="en-us_topic_0283136951_p1473132181520"></a>datid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11232923813"><a name="en-us_topic_0283136951_p11232923813"></a><a name="en-us_topic_0283136951_p11232923813"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1112317943816"><a name="en-us_topic_0283136951_p1112317943816"></a><a name="en-us_topic_0283136951_p1112317943816"></a>OID of the database that the user session connects to in the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row6732032101510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p474203261510"><a name="en-us_topic_0283136951_p474203261510"></a><a name="en-us_topic_0283136951_p474203261510"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p111241997383"><a name="en-us_topic_0283136951_p111241997383"></a><a name="en-us_topic_0283136951_p111241997383"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p19124691389"><a name="en-us_topic_0283136951_p19124691389"></a><a name="en-us_topic_0283136951_p19124691389"></a>Backend thread ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row474113291510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p474173213157"><a name="en-us_topic_0283136951_p474173213157"></a><a name="en-us_topic_0283136951_p474173213157"></a>sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p151247910389"><a name="en-us_topic_0283136951_p151247910389"></a><a name="en-us_topic_0283136951_p151247910389"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p5125298380"><a name="en-us_topic_0283136951_p5125298380"></a><a name="en-us_topic_0283136951_p5125298380"></a>Session ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row147563221515"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p87513219153"><a name="en-us_topic_0283136951_p87513219153"></a><a name="en-us_topic_0283136951_p87513219153"></a>usesysid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11125793389"><a name="en-us_topic_0283136951_p11125793389"></a><a name="en-us_topic_0283136951_p11125793389"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p151251394386"><a name="en-us_topic_0283136951_p151251394386"></a><a name="en-us_topic_0283136951_p151251394386"></a>OID of the user logged in to the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row177462013161815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p197475139182"><a name="en-us_topic_0283136951_p197475139182"></a><a name="en-us_topic_0283136951_p197475139182"></a>application_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p19125129123812"><a name="en-us_topic_0283136951_p19125129123812"></a><a name="en-us_topic_0283136951_p19125129123812"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p012579143814"><a name="en-us_topic_0283136951_p012579143814"></a><a name="en-us_topic_0283136951_p012579143814"></a>Name of the application connected to the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row125011912183"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1351519161816"><a name="en-us_topic_0283136951_p1351519161816"></a><a name="en-us_topic_0283136951_p1351519161816"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p145116196184"><a name="en-us_topic_0283136951_p145116196184"></a><a name="en-us_topic_0283136951_p145116196184"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p95213198185"><a name="en-us_topic_0283136951_p95213198185"></a><a name="en-us_topic_0283136951_p95213198185"></a>Overall status of the backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row3658547131812"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p5659047191816"><a name="en-us_topic_0283136951_p5659047191816"></a><a name="en-us_topic_0283136951_p5659047191816"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p2065914714188"><a name="en-us_topic_0283136951_p2065914714188"></a><a name="en-us_topic_0283136951_p2065914714188"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p826110558358"><a name="en-us_topic_0283136951_p826110558358"></a><a name="en-us_topic_0283136951_p826110558358"></a>Latest query at the backend. If <strong id="b695256731"><a name="b695256731"></a><a name="b695256731"></a>state</strong> is <strong id="b918512909"><a name="b918512909"></a><a name="b918512909"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1112454181810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1812654141816"><a name="en-us_topic_0283136951_p1812654141816"></a><a name="en-us_topic_0283136951_p1812654141816"></a>waiting</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11214548184"><a name="en-us_topic_0283136951_p11214548184"></a><a name="en-us_topic_0283136951_p11214548184"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p143863432351"><a name="en-us_topic_0283136951_p143863432351"></a><a name="en-us_topic_0283136951_p143863432351"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b1239132922313"><a name="b1239132922313"></a><a name="b1239132922313"></a>true</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row360025811815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p3601105831811"><a name="en-us_topic_0283136951_p3601105831811"></a><a name="en-us_topic_0283136951_p3601105831811"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p3601175851814"><a name="en-us_topic_0283136951_p3601175851814"></a><a name="en-us_topic_0283136951_p3601175851814"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p791672733514"><a name="en-us_topic_0283136951_p791672733514"></a><a name="en-us_topic_0283136951_p791672733514"></a>Time when current transaction was started (null if no transaction is active). If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b1571049294"><a name="b1571049294"></a><a name="b1571049294"></a>query_start</strong> column.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row371718291910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1871719261916"><a name="en-us_topic_0283136951_p1871719261916"></a><a name="en-us_topic_0283136951_p1871719261916"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p17171826194"><a name="en-us_topic_0283136951_p17171826194"></a><a name="en-us_topic_0283136951_p17171826194"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p193581715153516"><a name="en-us_topic_0283136951_p193581715153516"></a><a name="en-us_topic_0283136951_p193581715153516"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b879963250"><a name="b879963250"></a><a name="b879963250"></a>state</strong> is not <strong id="b1101691541"><a name="b1101691541"></a><a name="b1101691541"></a>active</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row342571181911"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1942501101911"><a name="en-us_topic_0283136951_p1942501101911"></a><a name="en-us_topic_0283136951_p1942501101911"></a>backend_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p44257112197"><a name="en-us_topic_0283136951_p44257112197"></a><a name="en-us_topic_0283136951_p44257112197"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p10555134973416"><a name="en-us_topic_0283136951_p10555134973416"></a><a name="en-us_topic_0283136951_p10555134973416"></a>Time when this process was started, that is, when the client connected to the server</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row881795112010"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p15817175132011"><a name="en-us_topic_0283136951_p15817175132011"></a><a name="en-us_topic_0283136951_p15817175132011"></a>state_change</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p7818125115208"><a name="en-us_topic_0283136951_p7818125115208"></a><a name="en-us_topic_0283136951_p7818125115208"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p158185514208"><a name="en-us_topic_0283136951_p158185514208"></a><a name="en-us_topic_0283136951_p158185514208"></a>Time when <strong id="b983007679"><a name="b983007679"></a><a name="b983007679"></a>state</strong> was last modified</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1956611310248"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p105678312411"><a name="en-us_topic_0283136951_p105678312411"></a><a name="en-us_topic_0283136951_p105678312411"></a>client_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p18567183192419"><a name="en-us_topic_0283136951_p18567183192419"></a><a name="en-us_topic_0283136951_p18567183192419"></a>inet</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p272643273311"><a name="en-us_topic_0283136951_p272643273311"></a><a name="en-us_topic_0283136951_p272643273311"></a>IP address of the client connected to the backend If this column is <strong id="b91111723195213"><a name="b91111723195213"></a><a name="b91111723195213"></a>NULL</strong>, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as <strong id="b111613232528"><a name="b111613232528"></a><a name="b111613232528"></a>AUTOVACUUM</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row184018578326"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p19402757103218"><a name="en-us_topic_0283136951_p19402757103218"></a><a name="en-us_topic_0283136951_p19402757103218"></a>client_hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p7402125717322"><a name="en-us_topic_0283136951_p7402125717322"></a><a name="en-us_topic_0283136951_p7402125717322"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p114021557193219"><a name="en-us_topic_0283136951_p114021557193219"></a><a name="en-us_topic_0283136951_p114021557193219"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b455190673"><a name="b455190673"></a><a name="b455190673"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b1264090318"><a name="b1264090318"></a><a name="b1264090318"></a>log_hostname</strong> is enabled.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1119736182610"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p51977652616"><a name="en-us_topic_0283136951_p51977652616"></a><a name="en-us_topic_0283136951_p51977652616"></a>client_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p21973672616"><a name="en-us_topic_0283136951_p21973672616"></a><a name="en-us_topic_0283136951_p21973672616"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p191971667265"><a name="en-us_topic_0283136951_p191971667265"></a><a name="en-us_topic_0283136951_p191971667265"></a>TCP port number that the client uses for communication with this backend (<strong id="b799591220495"><a name="b799591220495"></a><a name="b799591220495"></a>–1</strong> if a Unix socket is used)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row428083319266"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p5281103322619"><a name="en-us_topic_0283136951_p5281103322619"></a><a name="en-us_topic_0283136951_p5281103322619"></a>enqueue</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p172816333268"><a name="en-us_topic_0283136951_p172816333268"></a><a name="en-us_topic_0283136951_p172816333268"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p82811133152618"><a name="en-us_topic_0283136951_p82811133152618"></a><a name="en-us_topic_0283136951_p82811133152618"></a>Unsupported currently</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row39914123292"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p9991191210293"><a name="en-us_topic_0283136951_p9991191210293"></a><a name="en-us_topic_0283136951_p9991191210293"></a>query_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1299161222914"><a name="en-us_topic_0283136951_p1299161222914"></a><a name="en-us_topic_0283136951_p1299161222914"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p165419113217"><a name="en-us_topic_0283136951_p165419113217"></a><a name="en-us_topic_0283136951_p165419113217"></a>ID of a query</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row85651620202917"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p3566202042917"><a name="en-us_topic_0283136951_p3566202042917"></a><a name="en-us_topic_0283136951_p3566202042917"></a>connection_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p1056632052912"><a name="en-us_topic_0283136951_p1056632052912"></a><a name="en-us_topic_0283136951_p1056632052912"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p18563443173114"><a name="en-us_topic_0283136951_p18563443173114"></a><a name="en-us_topic_0283136951_p18563443173114"></a>A string in JSON format recording the driver type, driver version, driver deployment path, and process owner of the connected database</p>
    </td>
    </tr>
    <tr id="row19415941919"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16416144113114"><a name="p16416144113114"></a><a name="p16416144113114"></a>srespool</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p104166418119"><a name="p104166418119"></a><a name="p104166418119"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1141615411319"><a name="p1141615411319"></a><a name="p1141615411319"></a>Name of the resource pool</p>
    </td>
    </tr>
    <tr id="row1675483312441"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1075518336447"><a name="p1075518336447"></a><a name="p1075518336447"></a>global_sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p27551833164411"><a name="p27551833164411"></a><a name="p27551833164411"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p12755133134415"><a name="p12755133134415"></a><a name="p12755133134415"></a>Global session ID</p>
    </td>
    </tr>
    <tr id="row7383027135111"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1138472765119"><a name="p1138472765119"></a><a name="p1138472765119"></a>unique_sql_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p183845276513"><a name="p183845276513"></a><a name="p183845276513"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p03841627155120"><a name="p03841627155120"></a><a name="p03841627155120"></a>Unique SQL statement ID</p>
    </td>
    </tr>
    <tr id="row12231935141813"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p72483513183"><a name="p72483513183"></a><a name="p72483513183"></a>trace_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7241635121816"><a name="p7241635121816"></a><a name="p7241635121816"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p22411354186"><a name="p22411354186"></a><a name="p22411354186"></a>Driver-specific trace ID, which is associated with an application request</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_user\_iostat\(text\)

    Description: Displays the I/O load management information about the job currently executed by the user.

    Return type: record

    The following table describes return fields.

    <a name="en-us_topic_0283136951_en-us_topic_0237121998_table842513640"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row11426631846"><th class="cellrowborder" valign="top" width="14.6%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283136951_en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="en-us_topic_0283136951_en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.9%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p54991455747"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p54991455747"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p54991455747"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="76.5%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1468935815411"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1468935815411"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1468935815411"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row74262318415"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p54261938418"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p54261938418"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p54261938418"></a>userid</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1742611310413"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1742611310413"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1742611310413"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p114261231143"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p114261231143"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p114261231143"></a>User ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row7426039410"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p10426203540"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p10426203540"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p10426203540"></a>min_curr_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p242618317411"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p242618317411"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p242618317411"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p9426131249"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p9426131249"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p9426131249"></a>Minimum I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row2426123642"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p11426173847"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p11426173847"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p11426173847"></a>max_curr_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p20426831246"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p20426831246"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p20426831246"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1742603448"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1742603448"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1742603448"></a>Maximum I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row542653546"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p19426637419"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p19426637419"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p19426637419"></a>min_peak_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p44261318416"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p44261318416"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p44261318416"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p154268319410"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p154268319410"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p154268319410"></a>Minimum peak I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row3426933419"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1942620314416"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1942620314416"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1942620314416"></a>max_peak_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p34263312418"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p34263312418"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p34263312418"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p242615310414"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p242615310414"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p242615310414"></a>Maximum peak I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row4426834414"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p14427731047"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p14427731047"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p14427731047"></a>io_limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p104271831643"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p104271831643"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p104271831643"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p3427331643"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p3427331643"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p3427331643"></a><strong id="b19248111618181"><a name="b19248111618181"></a><a name="b19248111618181"></a>io_limits</strong> set for the resource pool specified by the user. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row942753841"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p84272316419"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p84272316419"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p84272316419"></a>io_priority</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p74271935417"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p74271935417"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p74271935417"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1542716312414"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1542716312414"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1542716312414"></a><strong id="b14427181911811"><a name="b14427181911811"></a><a name="b14427181911811"></a>io_priority</strong> set for the user. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="row5459121216528"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="p164601912195214"><a name="p164601912195214"></a><a name="p164601912195214"></a>curr_io_limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="p1946081265217"><a name="p1946081265217"></a><a name="p1946081265217"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="p1246081210522"><a name="p1246081210522"></a><a name="p1246081210522"></a>Real-time <strong id="b78282504283"><a name="b78282504283"></a><a name="b78282504283"></a>io_limits</strong> value when <strong id="b082965052815"><a name="b082965052815"></a><a name="b082965052815"></a>io_priority</strong> is used to control I/Os</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_function\_calls\(oid\)

    Description: Specifies the number of times the function has been called.

    Return type: bigint

-   pg\_stat\_get\_function\_self\_time\(oid\)

    Description: Specifies the time spent in only this function. The time spent on this function calling other functions is excluded.

    Return type: bigint

-   pg\_stat\_get\_backend\_idset\(\)

    Description: Sets the number of currently active server processes \(from 1 to the number of active server processes\).

    Return type: setofinteger

-   pg\_stat\_get\_backend\_pid\(integer\)

    Description: Specifies the ID of the given server thread.

    Return type: bigint

-   pg\_stat\_get\_backend\_dbid\(integer\)

    Description: Specifies the ID of the database connected to the given server process.

    Return type: oid

-   pg\_stat\_get\_backend\_userid\(integer\)

    Description: Specifies the user ID of the given server process.

    Return type: oid

-   pg\_stat\_get\_backend\_activity\(integer\)

    Description: Active command of the given server process, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: text

-   pg\_stat\_get\_backend\_waiting\(integer\)

    Description: True if the given server process is waiting for a lock, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: Boolean

-   pg\_stat\_get\_backend\_activity\_start\(integer\)

    Description: Specifies the time when the given server process's currently executing query is started only if the current user is the system administrator or the user of the session being queried and  **track\_activities**  is enabled.

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_xact\_start\(integer\)

    Description: Specifies the time when the given server process's currently executing transaction is started only if the current user is the system administrator or the user of the session being queried and  **track\_activities**  is enabled.

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_start\(integer\)

    Description: Specifies the time when the given server process is started. If the current user is neither the system administrator nor the user of the session being queried, NULL is  **returned**.

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_client\_addr\(integer\)

    Description: Specifies the IP address of the client connected to the given server process. If the connection is over a Unix domain socket, or if the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

    Return type: inet

-   pg\_stat\_get\_backend\_client\_port\(integer\)

    Description: Specifies the TCP port number of the client connected to the given server process. If the connection is over a Unix domain socket,  **-1**  will be returned. If the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

    Return type: integer

-   pg\_stat\_get\_bgwriter\_timed\_checkpoints\(\)

    Description: Specifies the time when the background writer starts scheduled checkpoints \(because the  **checkpoint\_timeout**  time has expired\).

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_requested\_checkpoints\(\)

    Description: Specifies the time when the background writer starts checkpoints based on requests from the backend because  **checkpoint\_segments**  has been exceeded or the  **CHECKPOINT**  command has been executed.

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_buf\_written\_checkpoints\(\)

    Description: Specifies the number of buffers written by the background writer during checkpoints.

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_buf\_written\_clean\(\)

    Description: Specifies the number of buffers written by the background writer for routine cleaning of dirty pages.

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_maxwritten\_clean\(\)

    Description: Specifies the time when the background writer stops its cleaning scan because it has written more buffers than specified in the  **bgwriter\_lru\_maxpages**  parameter.

    Return type: bigint

-   pg\_stat\_get\_buf\_written\_backend\(\)

    Description: Specifies the number of buffers written by the backend because they need to allocate a new buffer.

    Return type: bigint

-   pg\_stat\_get\_buf\_alloc\(\)

    Description: Specifies the total number of the allocated buffers.

    Return type: bigint

-   pg\_stat\_clear\_snapshot\(\)

    Description: Discards the current statistics snapshot.

    Return type: void

-   pg\_stat\_reset\(\)

    Description: Resets all statistics counters for the current database to zero \(requires system administrator permissions\).

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

-   fenced\_udf\_process\(integer\)

    Description: Shows the number of local UDF Master and Work processes. If the input parameter is set to  **1**, the number of Master processes is queried. If the input parameter is set to  **2**, the number of Worker processes is queried. If the input parameter is set to  **3**, all Worker processes are killed.

    Return type: text

-   total\_cpu\(\)

    Description: Obtains the CPU time used by the current node, in jiffies.

    Return type: bigint

-   mot\_global\_memory\_detail\(\)

    Description: Checks the size of the MOT global memory, including data and indexes.

    Return type: record

-   mot\_local\_memory\_detail\(\)

    Description: Checks the size of the MOT local memory, including data and indexes.

    Return type: record

-   mot\_session\_memory\_detail\(\)

    Description: Checks the MOT memory usage of all sessions.

    Return type: record

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

    Description: Deletes the page and CU damage information that is read and recorded on the node \(requires system administrator permissions\).

    Return type: void

-   gs\_respool\_exception\_info\(pool text\)

    Description: Queries the query rule of a specified resource pool.

    Return type: record

-   gs\_control\_group\_info\(pool text\)

    Description: Queries information about Cgroups associated with a resource pool.

    Return type: record

    The command output is as follows:

    <a name="en-us_topic_0283136951_en-us_topic_0237121998_table1560939125613"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row260919925618"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17610179175619"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17610179175619"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17610179175619"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.44715528447155%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p361013935612"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p361013935612"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p361013935612"></a>Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.175482451754824%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p461011975616"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p461011975616"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p461011975616"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row116109912569"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p461079145611"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p461079145611"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p461079145611"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p161020985611"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p161020985611"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p161020985611"></a>class_a:workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p196108914566"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p196108914566"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p196108914566"></a>Class name and workload name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row06106985619"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7610149125612"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7610149125612"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7610149125612"></a>class</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p2610139185611"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2610139185611"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2610139185611"></a>class_a</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p4610196562"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p4610196562"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p4610196562"></a>Class Cgroup name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row1399384455713"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p209946441573"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p209946441573"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p209946441573"></a>workload</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p159941447578"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p159941447578"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p159941447578"></a>workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p20994544125713"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p20994544125713"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p20994544125713"></a>Workload Cgroup name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row8632178185817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17633882582"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17633882582"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17633882582"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p863315865812"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p863315865812"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p863315865812"></a>DEFWD</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p46338815818"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p46338815818"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p46338815818"></a>Cgroup type (Top, CLASS, BAKWD, DEFWD, and TSWD)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row19207812135811"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p2208812105815"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2208812105815"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2208812105815"></a>gid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p11208161265812"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p11208161265812"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p11208161265812"></a>87</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1120816121589"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1120816121589"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1120816121589"></a>Cgroup ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row01967412582"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p15196164105812"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p15196164105812"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p15196164105812"></a>shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p619610455819"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p619610455819"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p619610455819"></a>30</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p01966445815"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p01966445815"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p01966445815"></a>Percentage of CPU resources to those on the parent node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row1931985165714"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p183203516578"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p183203516578"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p183203516578"></a>limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7320125111571"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7320125111571"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7320125111571"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p43209514578"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p43209514578"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p43209514578"></a>Percentage of CPU cores to those on the parent node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row148871119165810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p6887201917580"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p6887201917580"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p6887201917580"></a>rate</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p188871519125814"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p188871519125814"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p188871519125814"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1988821914586"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1988821914586"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1988821914586"></a>Allocation ratio in Timeshare</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row1970717163583"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p47079162588"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p47079162588"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p47079162588"></a>cpucores</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p37074160581"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p37074160581"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p37074160581"></a>0-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17078161586"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17078161586"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17078161586"></a>Number of CPU cores</p>
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

    <a name="en-us_topic_0283136951_en-us_topic_0237121998_table11596620133817"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row2596020173814"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p859672013382"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p859672013382"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p859672013382"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.357164283571645%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p65961920183815"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65961920183815"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65961920183815"></a>Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.26547345265474%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p0597320123812"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p0597320123812"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p0597320123812"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row9597152043813"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p85971620193814"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p85971620193814"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p85971620193814"></a>resourcepool_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1159742018382"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1159742018382"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1159742018382"></a>10</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p6251644184720"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p6251644184720"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p6251644184720"></a>OID of the resource pool (the logic is equivalent to the load)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row359712053818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p359718205387"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p359718205387"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p359718205387"></a>commit_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p16597420133810"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16597420133810"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16597420133810"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p182501441478"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p182501441478"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p182501441478"></a>Number of frontend transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row1259720206381"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1559722013812"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1559722013812"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1559722013812"></a>rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p155971720163818"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p155971720163818"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p155971720163818"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1924994424720"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1924994424720"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1924994424720"></a>Number of frontend transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row12597820153817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17597520103816"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17597520103816"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17597520103816"></a>resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p4597420193815"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p4597420193815"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p4597420193815"></a>949</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p824864494710"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p824864494710"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p824864494710"></a>Minimum response time of frontend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row95971020153817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1259719206384"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1259719206384"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1259719206384"></a>resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p205984208383"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p205984208383"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p205984208383"></a>201891</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p224704444712"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p224704444712"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p224704444712"></a>Maximum response time of frontend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row95981320153810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p10598192063818"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p10598192063818"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p10598192063818"></a>resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1059832019385"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1059832019385"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1059832019385"></a>43564</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7246174414712"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7246174414712"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7246174414712"></a>Average response time of frontend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row1059822014389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p18598420103816"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p18598420103816"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p18598420103816"></a>resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p65985207388"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65985207388"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65985207388"></a>217822</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1224584413477"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1224584413477"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1224584413477"></a>Total response time of frontend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row159852013380"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p135981420193810"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p135981420193810"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p135981420193810"></a>bg_commit_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p15984206380"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p15984206380"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p15984206380"></a>910</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p075814565503"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p075814565503"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p075814565503"></a>Number of backend transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row19598192013815"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p559812053810"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p559812053810"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p559812053810"></a>bg_rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p16598152020386"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16598152020386"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16598152020386"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p9769159175019"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p9769159175019"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p9769159175019"></a>Number of backend transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row337414493389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p133752049173811"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p133752049173811"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p133752049173811"></a>bg_resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p183757493389"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p183757493389"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p183757493389"></a>97</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1192231165119"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1192231165119"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1192231165119"></a>Minimum response time of backend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row45313548389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p65355419381"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65355419381"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65355419381"></a>bg_resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p175345413382"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p175345413382"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p175345413382"></a>678080687</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p76633614519"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p76633614519"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p76633614519"></a>Maximum response time of backend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row225795743818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p2257857123819"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2257857123819"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2257857123819"></a>bg_resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p3257257143815"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p3257257143815"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p3257257143815"></a>327847884</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p13572131118512"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p13572131118512"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p13572131118512"></a>Average response time of backend transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row35321851114514"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7533951154513"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533951154513"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533951154513"></a>bg_resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7533351194520"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533351194520"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533351194520"></a>298341575300</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17865151410518"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17865151410518"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17865151410518"></a>Total response time of backend transactions (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pv\_instance\_time\(\)

    Description: Obtains the time consumed in each execution phase on the current node.

    Return type: record

    <a name="en-us_topic_0283136951_en-us_topic_0237121998_table1149417513587"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row17494175195812"><th class="cellrowborder" valign="top" width="26.37736226377363%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p5494751165810"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p5494751165810"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p5494751165810"></a>Stat_name Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.317468253174685%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1049411514586"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1049411514586"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1049411514586"></a>Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.3051694830517%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1349455114584"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1349455114584"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1349455114584"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136951_en-us_topic_0237121998_row8494451135816"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p549525155814"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p549525155814"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p549525155814"></a>DB_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1733818301818"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1733818301818"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1733818301818"></a>1062385</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p2337143016114"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2337143016114"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2337143016114"></a>Total end-to-end wall time consumed by all threads (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row749595118581"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1495105135816"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1495105135816"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1495105135816"></a>CPU_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p203361230316"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p203361230316"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p203361230316"></a>311777</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1833583012115"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1833583012115"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1833583012115"></a>Total CPU time consumed by all threads (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row16495951175812"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1495155195818"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1495155195818"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1495155195818"></a>EXECUTION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p10334130312"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p10334130312"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p10334130312"></a>380037</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p633313302012"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p633313302012"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p633313302012"></a>Total time consumed on the executor (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row74951351185818"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p19495185135816"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p19495185135816"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p19495185135816"></a>PARSE_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p733263016111"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p733263016111"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p733263016111"></a>6033</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p33313301713"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p33313301713"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p33313301713"></a>Total time consumed for parsing SQL statements (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row549555145818"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p164951051115813"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p164951051115813"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p164951051115813"></a>PLAN_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7330123012117"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7330123012117"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7330123012117"></a>173356</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p03291130113"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p03291130113"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p03291130113"></a>Total time consumed for generating an execution plan (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row049565195819"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p84962517584"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p84962517584"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p84962517584"></a>REWRITE_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p032811304119"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p032811304119"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p032811304119"></a>2274</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p173279301214"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p173279301214"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p173279301214"></a>Total time consumed on query rewriting (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row1249618515587"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p16496175175812"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16496175175812"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16496175175812"></a>PL_EXECUTION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p2032653013119"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2032653013119"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2032653013119"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1132512301213"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1132512301213"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1132512301213"></a>Total time consumed for executing PL/SQL statements (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row7496751105819"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p94968513584"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p94968513584"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p94968513584"></a>PL_COMPILATION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p163241730816"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p163241730816"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p163241730816"></a>557</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p632310301312"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p632310301312"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p632310301312"></a>Total time consumed for SQL compilation (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row649618515581"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p154961151125814"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p154961151125814"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p154961151125814"></a>NET_SEND_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1732213305119"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1732213305119"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1732213305119"></a>1673</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p143201430118"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p143201430118"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p143201430118"></a>Total time consumed for sending data over network (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row949616511589"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17496115114582"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17496115114582"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17496115114582"></a>DATA_IO_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p11319113017114"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p11319113017114"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p11319113017114"></a>426622</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p113188301015"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p113188301015"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p113188301015"></a>Total time consumed for data read and write (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   DBE\_PERF.get\_global\_instance\_time\(\)

    Description: Provides the time consumed in each key phase in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_unique\_sql\(\)

    Description: Obtains information about execution statements \(normalized SQL statements\) on the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   reset\_unique\_sql\(text, text, bigint\)

    Description: Resets information about system execution statements \(normalized SQL statements\) information as a user with the  **sysadmin**  permission. The value of the first parameter can be** global**  or  **local**.  **global**  indicates that information on all nodes is cleared, and  **local**  indicates that only information on the current node is cleared. The value of the second parameter can be  **ALL**,  **BY\_USERID**, or  **BY\_CNID**.  **ALL**  indicates that all information is cleared.  **BY\_USERID**  indicates that the SQL information of the user specified by  **USERID**  is cleared.  **BY\_CNID**  indicates that the SQL information related to the primary node of the database in the system is cleared. The third parameter indicates  **CNID**  and  **USERID**. If the second parameter is set to  **ALL**, the third parameter does not take effect and can be set to any value.

    Return type: Boolean

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This function involves distributed nodes. Currently, openGauss is a centralized database, for which the function of the value  **global**  is the same as that of the value  **local**  and the second parameter cannot set to be  **BY\_CNID**.

-   get\_instr\_wait\_event\(NULL\)

    Description: Obtains the statistics on wait events of the current node.

    Return type: record

-   get\_instr\_user\_login\(\)

    Description: Obtains the number of user login and logout times on the current node. Only users with the  **sysadmin**  or  **monitor admin**  permission can execute this function.

    Return type: record

-   get\_instr\_rt\_percentile\(integer\)

    Description: Obtains the SQL response time P80 and P95 distribution information of the database.

    Return type: record

-   get\_node\_stat\_reset\_time\(\)

    Description: Obtains statistics about reset \(restart, primary/standby switchover, and database deletion\) time of the current node.

    Return type: record

-   DBE\_PERF.get\_global\_os\_runtime\(\)

    Description: Displays the running status of the current operating system. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_os\_threads\(\)

    Description: Provides information about the threads under all normal nodes of openGauss. To query this function, you must have the  **sysadmin**  permission.

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
    >The status information contains the following 17 items:  **commit**,  **rollback**,  **sql**,  **table\_scan**,  **blocks\_fetched**,  **physical\_read\_operation**,  **shared\_blocks\_dirtied**,  **local\_blocks\_dirtied**,  **shared\_blocks\_read**,  **local\_blocks\_read**,  **blocks\_read\_time**,  **blocks\_write\_time**,  **sort\_imemory**,  **sort\_idisk**,  **cu\_mem\_hit**,  **cu\_hdd\_sync\_read**, and  **cu\_hdd\_asyread**.

-   DBE\_PERF.get\_global\_session\_time\(\)

    Description: Provides the time consumed in each key phase of each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_memory\(\)

    Description: Displays statistics about memory usage at the session level on each node in the unit of MB, including all the memory allocated to Postgres and stream threads on DNs for jobs currently executed by users. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_memory\_detail\(\)

    Description: Displays statistics about thread memory usage on each node by MemoryContext node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   create\_wlm\_session\_info\(int flag\)

    Description: Clears top SQL query statement-level statistics recorded in the current memory. Only the administrator can execute this function.

    Return type: int

-   pg\_stat\_get\_wlm\_session\_info\(int flag\)

    Description: Obtains top SQL query statement-level statistics recorded in the current memory. If the input parameter is not 0, the information is cleared from the memory. Only users with the  **system admin**  or  **monitor admin**  permission can execute this function.

    Return type: record

-   gs\_paxos\_stat\_replication\(\)

    Description: Queries the standby server information on the primary server. Currently, only the centralized DCF mode is supported.

    Return type: setofrecord

    The following table describes return columns.

    <a name="table16852919405"></a>
    <table><tbody><tr id="row1665112920400"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p136552919401"><a name="p136552919401"></a><a name="p136552919401"></a>Column</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p1659293405"><a name="p1659293405"></a><a name="p1659293405"></a>Type</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p136592910407"><a name="p136592910407"></a><a name="p136592910407"></a>Description</p>
    </td>
    </tr>
    <tr id="row965132944017"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p106520295408"><a name="p106520295408"></a><a name="p106520295408"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p1565162974013"><a name="p1565162974013"></a><a name="p1565162974013"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p1165129154019"><a name="p1165129154019"></a><a name="p1165129154019"></a>Role of the node that sends logs</p>
    </td>
    </tr>
    <tr id="row1666142974018"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p166582924019"><a name="p166582924019"></a><a name="p166582924019"></a>peer_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p765182954019"><a name="p765182954019"></a><a name="p765182954019"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p4665297408"><a name="p4665297408"></a><a name="p4665297408"></a>Role of the node that receives logs</p>
    </td>
    </tr>
    <tr id="row06612298408"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p566182912401"><a name="p566182912401"></a><a name="p566182912401"></a>local_dcf_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p1866152918409"><a name="p1866152918409"></a><a name="p1866152918409"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p96622911403"><a name="p96622911403"></a><a name="p96622911403"></a>DCF role of the node that sends logs</p>
    </td>
    </tr>
    <tr id="row1066142984013"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p186612299403"><a name="p186612299403"></a><a name="p186612299403"></a>peer_dcf_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p106622984019"><a name="p106622984019"></a><a name="p106622984019"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p56620298405"><a name="p56620298405"></a><a name="p56620298405"></a>DCF role of the node that receives logs</p>
    </td>
    </tr>
    <tr id="row96619291401"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p1666729144013"><a name="p1666729144013"></a><a name="p1666729144013"></a>peer_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p10669292402"><a name="p10669292402"></a><a name="p10669292402"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p2066429144015"><a name="p2066429144015"></a><a name="p2066429144015"></a>Status of the node that receives logs</p>
    </td>
    </tr>
    <tr id="row16619291400"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p166202920402"><a name="p166202920402"></a><a name="p166202920402"></a>sender_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p5663292405"><a name="p5663292405"></a><a name="p5663292405"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p10661294406"><a name="p10661294406"></a><a name="p10661294406"></a>Location in the Xlog buffer where the node that sends logs is written</p>
    </td>
    </tr>
    <tr id="row15671729154013"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p106613299405"><a name="p106613299405"></a><a name="p106613299405"></a>sender_commit_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p86642916405"><a name="p86642916405"></a><a name="p86642916405"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p15661229164014"><a name="p15661229164014"></a><a name="p15661229164014"></a>Consistency point reached for the DCF logs of the node that sends logs</p>
    </td>
    </tr>
    <tr id="row2067229184017"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p567152910409"><a name="p567152910409"></a><a name="p567152910409"></a>sender_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p136717297405"><a name="p136717297405"></a><a name="p136717297405"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p16752912402"><a name="p16752912402"></a><a name="p16752912402"></a>Location in the Xlog disk where the node that sends logs is written</p>
    </td>
    </tr>
    <tr id="row206719299402"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p186772984013"><a name="p186772984013"></a><a name="p186772984013"></a>sender_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p067629134011"><a name="p067629134011"></a><a name="p067629134011"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p1767142910409"><a name="p1767142910409"></a><a name="p1767142910409"></a>Location where the node that sends logs replays logs</p>
    </td>
    </tr>
    <tr id="row86719290408"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p1967112964016"><a name="p1967112964016"></a><a name="p1967112964016"></a>receiver_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p136762984011"><a name="p136762984011"></a><a name="p136762984011"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p106713297406"><a name="p106713297406"></a><a name="p106713297406"></a>Location in the Xlog buffer where the node that receives logs is written</p>
    </td>
    </tr>
    <tr id="row20671829124015"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p26710290408"><a name="p26710290408"></a><a name="p26710290408"></a>receiver_commit_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p156715294409"><a name="p156715294409"></a><a name="p156715294409"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p1067192917402"><a name="p1067192917402"></a><a name="p1067192917402"></a>Consistency point reached for the DCF logs of the node that receives logs</p>
    </td>
    </tr>
    <tr id="row1467142910409"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p116722918403"><a name="p116722918403"></a><a name="p116722918403"></a>receiver_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p19671629154013"><a name="p19671629154013"></a><a name="p19671629154013"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p126712912406"><a name="p126712912406"></a><a name="p126712912406"></a>Location in the Xlog disk where the node that receives logs is written</p>
    </td>
    </tr>
    <tr id="row126872934013"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p968162914012"><a name="p968162914012"></a><a name="p968162914012"></a>receiver_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p568529174019"><a name="p568529174019"></a><a name="p568529174019"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p36842994013"><a name="p36842994013"></a><a name="p36842994013"></a>Location where the node that receives logs replays Xlogs</p>
    </td>
    </tr>
    <tr id="row1868129124019"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p1168829204020"><a name="p1168829204020"></a><a name="p1168829204020"></a>sync_percent</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p116892994017"><a name="p116892994017"></a><a name="p116892994017"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p7681929164017"><a name="p7681929164017"></a><a name="p7681929164017"></a>Synchronization percentage</p>
    </td>
    </tr>
    <tr id="row1468529144020"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p18681298406"><a name="p18681298406"></a><a name="p18681298406"></a>dcf_run_mode</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p668102934015"><a name="p668102934015"></a><a name="p668102934015"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p156862934015"><a name="p156862934015"></a><a name="p156862934015"></a>DCF synchronization mode</p>
    </td>
    </tr>
    <tr id="row26822974013"><td class="cellrowborder" valign="top" width="25.762576257625764%"><p id="p10681329164013"><a name="p10681329164013"></a><a name="p10681329164013"></a>channel</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.46134613461346%"><p id="p136862916408"><a name="p136862916408"></a><a name="p136862916408"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.77607760776078%"><p id="p56816298407"><a name="p56816298407"></a><a name="p56816298407"></a>Channel information</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_wlm\_get\_resource\_pool\_info\(int\)

    Description: Obtains resource usage statistics of all users. The input parameter can be any value of the INT type or be null.

    Return type: record

-   gs\_wlm\_get\_all\_user\_resource\_info\(\)

    Description: Obtains resource usage statistics of all users.

    Return type: record

-   gs\_wlm\_get\_user\_info\(int\)

    Description: Obtains information about all users. The input parameter can be any value of the INT type or be null. Only users with the  **sysadmin**  permission can execute this function.

    Return type: record

-   gs\_wlm\_get\_workload\_records\(\)

    Description: Obtains all job information in dynamic load management. This function is valid only when dynamic load management is enabled.

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

-   gs\_wlm\_session\_respool\(bigint\)

    Description: Obtains the session resource pool information about all backend threads. The input parameter can be any value of the bigint type or can be null.

    Return type: record

-   gs\_wlm\_get\_session\_info\(\)

    Description: This API has been discarded and is unavailable currently.

-   gs\_wlm\_get\_user\_session\_info\(\)

    Description: This API has been discarded and is unavailable currently.

-   gs\_io\_wait\_status\(\)

    Description: This API does not support single-node systems or centralized systems and is unavailable currently.

-   global\_stat\_get\_hotkeys\_info\(\)

    Description: Obtains the statistics on hot keys in the entire database instance. This API does not support single-node systems or centralized systems and is unavailable currently.

-   global\_stat\_clean\_hotkeys\(\)

    Description: Clears statistics on hot keys in the entire database instance. This API does not support single-node systems or centralized systems and is unavailable currently.


-   DBE\_PERF.get\_global\_session\_stat\_activity\(\)

    Description: Displays information about threads that are running on each node in openGauss. To query this function, you must have the  **monitoradmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_thread\_wait\_status\(\)

    Description: Displays the block waiting status of backend threads and auxiliary threads on all nodes. To query this function, you must have the  **sysadmin**  or  **monitoradmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_history\_table\(\)

    Description: Displays the operator-related records \(persistent\) generated after jobs are executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  and  **monitoradmin**  permissions.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_history\(\)

    Description: Displays the operator-related records generated after jobs are executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  and  **monitoradmin**  permissions.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_runtime\(\)

    Description: Displays real-time operator-related records of jobs executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  and  **monitoradmin**  permissions.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_history\(\)

    Description: Displays the historical records of complex queries on the primary database node of the current user. To query this function, you must have the  **monitoradmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_history\_table\(\)

    Description: Displays the historical records \(persistent\) of complex queries on the primary database node of the current user. To query this function, you must have the  **monitoradmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_runtime\(\)

    Description: Displays the real-time information of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  or  **monadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_memory\_node\_detail\(\)

    Description: Displays the memory usage of a certain database on all nodes. To query this function, you must have the  **monitoradmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_shared\_memory\_detail\(\)

    Description: Displays the usage information about all the shared memory contexts of all nodes. To query this function, you must have the  **monitoradmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_indexes\(\)

    Description: Displays statistics about each index displayed in a row in the current database, showing I/O statistics about accesses to that specific index. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_all\_tables\(\)

    Description: Displays statistics about a row in each table \(including the TOAST table\) on each node.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_all\_tables\(\)

    Description: Displays statistics about a row in each table \(including the TOAST table\) on each node.

    Return type: record

-   DBE\_PERF.get\_local\_toastname\_and\_toastindexname\(\)

    Description: Provides the mapping between the name and index of the local TOAST table and its associated table. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_all\_indexes\(\)

    Description: Collects statistics about each index displayed in a row in the current databases of all nodes and displays the I/O statistics of a specific index. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_sequences\(\)

    Description: Provides I/O status information about all sequences in the namespace. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_tables\(\)

    Description: Displays the I/O statistics about each table in databases on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_all\_tables\(\)

    Description: Collects I/O statistics about each table in databases in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_local\_toast\_relation\(\)

    Description: Provides the mapping between the name of the local TOAST table and its associated table. To query this function, you must have the  **sysadmin**  permission.

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

    Description: Displays the I/O status information about all user relationship tables in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

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

    Description: Collects statistics of each index in all databases on all nodes. To query this function, you must have the  **sysadmin**  permission.

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

    Description: Displays the transaction status information of customized functions in the namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_user\_functions\(\)

    Description: Collects statistics about the transaction status information of customized functions in the namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

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

    Description: Displays lock information of all nodes. To query this function, you must have the  **sysadmin**  or  **monadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_replication\_slots\(\)

    Description: Displays logical replication information on all nodes. To query this function, you must have the  **sysadmin**  or  **monadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_bgwriter\_stat\(\)

    Description: Displays statistics about the background writer process's activities on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_replication\_stat\(\)

    Description: Displays information about log synchronization status on each node, such as the locations where the sender sends logs and where the receiver receives logs. To query this function, you must have the  **sysadmin**  or  **monadmin**  permission.

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

    Description: Displays the status information of the historically-executed statements on each node. To query this function, you must have the  **sysadmin**  and  **monitor admin**  permissions.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_count\(\)

    Description: Displays the number of  **SELECT**,  **UPDATE**,  **INSERT**, and  **DELETE**  statements and response time information \(TOTAL, AVG, MIN, and MAX\) on each node. To query this function, you must have the  **sysadmin**  permission.

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

-   DBE\_PERF.track\_memory\_context\(context\_list text\)

    Description: Sets the memory context whose memory application details need to be collected. The input parameter is the memory context names, which are separated by commas \(,\), for example,  **ThreadTopMemoryContext, SessionCacheMemoryContext**. Note that the memory context names are context-sensitive. In addition, the length of a single memory context is 63, and the excess part is truncated. The maximum number of memory contexts that can be collected at a time is 16. If the number of memory contexts exceeds 16, the setting fails. Each time this function is called, the previous statistics result is cleared. When the input parameter is set to  **""**, the statistics function is disabled. Only the initial user \(super user\) or a user with the  **monadmin **permission can execute this function.

    Return type: Boolean

-   DBE\_PERF.track\_memory\_context\_detail\(\)

    Description: Obtains the memory application details of the memory context specified by the  **DBE\_PERF.track\_memory\_context**  function. For details, see the  **DBE\_PERF.track\_memory\_context\_detail**  view. Only the initial user \(super user\) or a user with the  **monadmin **permission can execute this function.

    Return type: record

-   pg\_stat\_get\_mem\_mbytes\_reserved\(tid\)

    Description: Collects statistics on variables related to resource management, which is used only for fault locating.

    Parameter: thread ID

    Return type: text

-   gs\_wlm\_user\_resource\_info\(name text\)

    Description: Queries a user's resource quota and resource usage.

    Return type: record

-   pg\_stat\_get\_file\_stat\(\)

    Description: Rrecords statistics about data file I/Os to indicate I/O performance and detect performance problems such as abnormal I/O operations.

    Return type: record

-   pg\_stat\_get\_redo\_stat\(\)

    Description: Displays statistics on the replay of session thread logs.

    Return type: record

-   pg\_stat\_get\_status\(int8\)

    Description: Tests the block waiting status about the backend thread and auxiliary thread of the current instance.

    Return type: record

-   get\_local\_rel\_iostat\(\)

    Description: Queries the accumulated I/O status of data files on the current node.

    Return type: record

-   DBE\_PERF.get\_global\_rel\_iostat\(\)

    Description: Displays statistics about data file I/Os on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.global\_threadpool\_status\(\)

    Description: Displays the status of worker threads and sessions in thread pools on all nodes. For details about the columns returned by the function, see  [GLOBAL\_THREADPOOL\_STATUS](en-us_topic_0289900218.md).

    Return type: record

-   remote\_bgwriter\_stat\(\)

    Description: Displays the information about pages flushed by the bgwriter threads of all instances in the database, number of pages in the candidate buffer chain, and buffer elimination information \(except for the local node and not available on the DN\).

    Return type: record

-   pv\_os\_run\_info

    Description: Displays the running status of the current OS. For details about the columns, see  [GS\_OS\_RUN\_INFO](gs_os_run_info.md).

    Parameter: nan

    Return type: SETOF record

-   pv\_session\_stat

    Description: Collects session status information by session thread or AutoVacuum thread. For details about the columns, see  [GS\_SESSION\_STAT](gs_session_stat.md).

    Parameter:  **nan**

    Return type: SETOF record

-   pv\_session\_time

    Description: Collects statistics on the running time of session threads and the time consumed in each execution phase. For details about the columns, see  [GS\_SESSION\_TIME](gs_session_time.md).

    Parameter:  **nan**

    Return type: SETOF record

-   pg\_stat\_get\_db\_temp\_bytes

    Description: Collects statistics on the total amount of data written to temporary files through database query. All temporary files are counted, regardless of why the temporary file was created, and regardless of the  **log\_temp\_files**  setting.

    Parameter:  **oid**

    Return type: bigint

-   pg\_stat\_get\_db\_temp\_files

    Description: Queries the number of temporary files created in the database. All temporary files are counted, regardless of why the temporary file was created \(for example, sorting or hashing\), and regardless of the  **log\_temp\_files**  setting.

    Parameter:  **oid**

    Return type: bigint

-   remote\_candidate\_stat\(\)

    Description: Displays the checkpoint information and log flushing information about all instances in the database \(except the current node\). Centralized systems are not supported.

    Return type: record


-   dbe\_perf.gs\_stat\_activity\_timeout\(int\)

    Description: Obtains information about query jobs whose execution time exceeds the timeout threshold on the current node. The correct result can be returned only when the GUC parameter  **track\_activities**  is set to  **on**. The timeout threshold ranges from 0 to 2147483.

    Return type: SETOF record

    <a name="table975614311360"></a>
    <table><thead align="left"><tr id="row175723117360"><th class="cellrowborder" valign="top" width="23%" id="mcps1.1.4.1.1"><p id="p4757231113617"><a name="p4757231113617"></a><a name="p4757231113617"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.000000000000002%" id="mcps1.1.4.1.2"><p id="p1675713193611"><a name="p1675713193611"></a><a name="p1675713193611"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="63%" id="mcps1.1.4.1.3"><p id="p4757193118368"><a name="p4757193118368"></a><a name="p4757193118368"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1757193163615"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p2757631103613"><a name="p2757631103613"></a><a name="p2757631103613"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p10757123103619"><a name="p10757123103619"></a><a name="p10757123103619"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p127571931193619"><a name="p127571931193619"></a><a name="p127571931193619"></a>Name of the database to which a user session is connected</p>
    </td>
    </tr>
    <tr id="row1475716311369"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p10757183143616"><a name="p10757183143616"></a><a name="p10757183143616"></a>pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p675712312361"><a name="p675712312361"></a><a name="p675712312361"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p47571331183613"><a name="p47571331183613"></a><a name="p47571331183613"></a>Backend thread ID</p>
    </td>
    </tr>
    <tr id="row127571731173616"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p875763123616"><a name="p875763123616"></a><a name="p875763123616"></a>sessionid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p27571931123613"><a name="p27571931123613"></a><a name="p27571931123613"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p187571431153613"><a name="p187571431153613"></a><a name="p187571431153613"></a>Session ID</p>
    </td>
    </tr>
    <tr id="row1675819312369"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p375803112361"><a name="p375803112361"></a><a name="p375803112361"></a>usesysid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p27581831153612"><a name="p27581831153612"></a><a name="p27581831153612"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p575818311366"><a name="p575818311366"></a><a name="p575818311366"></a>OID of the user logged in to the backend</p>
    </td>
    </tr>
    <tr id="row157587319365"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p1075893117368"><a name="p1075893117368"></a><a name="p1075893117368"></a>application_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p5758113114362"><a name="p5758113114362"></a><a name="p5758113114362"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p0758183113614"><a name="p0758183113614"></a><a name="p0758183113614"></a>Name of the application connected to the backend</p>
    </td>
    </tr>
    <tr id="row675815319366"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p11758183111365"><a name="p11758183111365"></a><a name="p11758183111365"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p187582314366"><a name="p187582314366"></a><a name="p187582314366"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p9958411164014"><a name="p9958411164014"></a><a name="p9958411164014"></a>Query that is being executed on the backend</p>
    </td>
    </tr>
    <tr id="row1775813313364"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p8758193119369"><a name="p8758193119369"></a><a name="p8758193119369"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p8758331143619"><a name="p8758331143619"></a><a name="p8758331143619"></a>timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p4758133153614"><a name="p4758133153614"></a><a name="p4758133153614"></a>Time when the current transaction is started</p>
    </td>
    </tr>
    <tr id="row1675818318362"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p57581331123617"><a name="p57581331123617"></a><a name="p57581331123617"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p8394162712488"><a name="p8394162712488"></a><a name="p8394162712488"></a>timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p890615614815"><a name="p890615614815"></a><a name="p890615614815"></a>Time when the current query starts</p>
    </td>
    </tr>
    <tr id="row207586318365"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p7758331163615"><a name="p7758331163615"></a><a name="p7758331163615"></a>query_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p1539104464813"><a name="p1539104464813"></a><a name="p1539104464813"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p121591542134811"><a name="p121591542134811"></a><a name="p121591542134811"></a>Query statement ID</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_wlm\_user\_resource\_info\(name text\)

    Description: Queries a user's resource quota and resource usage. Common users can query only their own information. Administrators can query information about all users.

    Return type: record

-   create\_wlm\_instance\_statistics\_info

    Description: Saves the historical monitoring data of the current instance persistently.

    Parameter:  **nan**

    Return type: integer

-   gs\_session\_memory

    Description: Collects statistics about memory usage at the session level in the unit of MB, including all the memory allocated to Postgres and Stream threads on DNs for tasks currently executed by users.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If  **[enable\_memory\_limit](en-us_topic_0289900310.md#en-us_topic_0283136786_en-us_topic_0237124699_en-us_topic_0059777577_s2cf6c862bad443aea7e115ff83941f94)**  is set to  **off**, this function cannot be used.

    Return type: record

    **Table  8**  Return value description

    <a name="en-us_topic_0059778767_t953e37afd21641229bbccf7b10f8ae94"></a>
    <table><thead align="left"><tr id="en-us_topic_0059778767_rad825274bf5e49cebafef1d184ef1c6c"><th class="cellrowborder" valign="top" width="19.23%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778767_ae6a72d70e64d4cc986cdaa013c32cdb7"><a name="en-us_topic_0059778767_ae6a72d70e64d4cc986cdaa013c32cdb7"></a><a name="en-us_topic_0059778767_ae6a72d70e64d4cc986cdaa013c32cdb7"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.1%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778767_ac7d91c874038453b92277f263009bb69"><a name="en-us_topic_0059778767_ac7d91c874038453b92277f263009bb69"></a><a name="en-us_topic_0059778767_ac7d91c874038453b92277f263009bb69"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.67%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778767_a9b73ab5d2d2945b68b3a1a5357e1ecee"><a name="en-us_topic_0059778767_a9b73ab5d2d2945b68b3a1a5357e1ecee"></a><a name="en-us_topic_0059778767_a9b73ab5d2d2945b68b3a1a5357e1ecee"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059778767_ra3f41aa6c9b14ef2a0542e658a67fe01"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778767_acb0d72afd1134a91a1740e7f827e44a5"><a name="en-us_topic_0059778767_acb0d72afd1134a91a1740e7f827e44a5"></a><a name="en-us_topic_0059778767_acb0d72afd1134a91a1740e7f827e44a5"></a>sessid</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778767_a1fda091ce53140a8b8a20ef9a53c2204"><a name="en-us_topic_0059778767_a1fda091ce53140a8b8a20ef9a53c2204"></a><a name="en-us_topic_0059778767_a1fda091ce53140a8b8a20ef9a53c2204"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778767_a6e3e3ca87b764c4e91581aa131a58bad"><a name="en-us_topic_0059778767_a6e3e3ca87b764c4e91581aa131a58bad"></a><a name="en-us_topic_0059778767_a6e3e3ca87b764c4e91581aa131a58bad"></a>Thread start time and ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778767_r96a8c34acda241da9f2215d05a90993c"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778767_a878d685a07034ffbb27389d056436465"><a name="en-us_topic_0059778767_a878d685a07034ffbb27389d056436465"></a><a name="en-us_topic_0059778767_a878d685a07034ffbb27389d056436465"></a>init_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778767_a6cabe1ae4912424eb877060615cb7f9f"><a name="en-us_topic_0059778767_a6cabe1ae4912424eb877060615cb7f9f"></a><a name="en-us_topic_0059778767_a6cabe1ae4912424eb877060615cb7f9f"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778767_acb7c29cd039b41d8a5d8216fc02e8123"><a name="en-us_topic_0059778767_acb7c29cd039b41d8a5d8216fc02e8123"></a><a name="en-us_topic_0059778767_acb7c29cd039b41d8a5d8216fc02e8123"></a>Memory allocated to the currently executed jobs before they enter the executor, in MB</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778767_r91694bd189574d56810e69097bbf834c"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778767_a75e18b6fc61b4edd8282dcea9e346a2d"><a name="en-us_topic_0059778767_a75e18b6fc61b4edd8282dcea9e346a2d"></a><a name="en-us_topic_0059778767_a75e18b6fc61b4edd8282dcea9e346a2d"></a>used_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778767_a1eaf7263ec7546fdb2ac141403f30768"><a name="en-us_topic_0059778767_a1eaf7263ec7546fdb2ac141403f30768"></a><a name="en-us_topic_0059778767_a1eaf7263ec7546fdb2ac141403f30768"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778767_aa7cc81c4c67c493ca6b36fa4b6447c6f"><a name="en-us_topic_0059778767_aa7cc81c4c67c493ca6b36fa4b6447c6f"></a><a name="en-us_topic_0059778767_aa7cc81c4c67c493ca6b36fa4b6447c6f"></a>Memory allocated to the currently executed jobs, in MB</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778767_r70b48f0daa984fcaa1403cd602025909"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778767_afe664db10a30490e9098541b3833f317"><a name="en-us_topic_0059778767_afe664db10a30490e9098541b3833f317"></a><a name="en-us_topic_0059778767_afe664db10a30490e9098541b3833f317"></a>peak_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778767_a72345cd720cc4d07b1eeea114cf91f3e"><a name="en-us_topic_0059778767_a72345cd720cc4d07b1eeea114cf91f3e"></a><a name="en-us_topic_0059778767_a72345cd720cc4d07b1eeea114cf91f3e"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778767_af966680339924b15a8a037f81355b40d"><a name="en-us_topic_0059778767_af966680339924b15a8a037f81355b40d"></a><a name="en-us_topic_0059778767_af966680339924b15a8a037f81355b40d"></a>Peak memory allocated to the currently executed jobs, in MB</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_wlm\_persistent\_user\_resource\_info\(\)

    Description: Archives all user resource usage statistics to the  **gs\_wlm\_user\_resource\_history**  system catalog. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   create\_wlm\_operator\_info\(int flag\)

    Description: Clears top SQL operator-level statistics recorded in the current memory. If the input parameter is greater than 0, the information is archived to  **gs\_wlm\_operator\_info**  and  **gs\_wlm\_ec\_operator\_info**. Otherwise, the information is not archived. Only users with the  **sysadmin**  permission can execute this function.

    Return type: int

-   GS\_ALL\_NODEGROUP\_CONTROL\_GROUP\_INFO\(text\)

    Description: Provides Cgroup information for all logical database instances. Before calling this function, you need to specify the name of the logical database instance to be queried. For example, to query the Cgroup information for the installation logical database instance, run the following command:

    ```
    SELECT * FROM GS_ALL_NODEGROUP_CONTROL_GROUP_INFO('installation')
    ```

    Return type: record

    The following table describes return columns.

    <a name="t8f0334486f934453827d563b90c86711"></a>
    <table><thead align="left"><tr id="r2a0276b542d54fd0808927c2c54b0fc6"><th class="cellrowborder" valign="top" width="23%" id="mcps1.1.4.1.1"><p id="a5579cdd06a5645b3862144b2131a8649"><a name="a5579cdd06a5645b3862144b2131a8649"></a><a name="a5579cdd06a5645b3862144b2131a8649"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.000000000000002%" id="mcps1.1.4.1.2"><p id="a1f7bf547d07e4656a132c0e34ba635ca"><a name="a1f7bf547d07e4656a132c0e34ba635ca"></a><a name="a1f7bf547d07e4656a132c0e34ba635ca"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="63%" id="mcps1.1.4.1.3"><p id="a8447f6b31ba54199a8224fea8463c23d"><a name="a8447f6b31ba54199a8224fea8463c23d"></a><a name="a8447f6b31ba54199a8224fea8463c23d"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="rf8b75b68e6a24e29931035876b3c3dfb"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="a8f18d3f0e5cd44d096020df47ca28e00"><a name="a8f18d3f0e5cd44d096020df47ca28e00"></a><a name="a8f18d3f0e5cd44d096020df47ca28e00"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="aecd744296d7d4b0397b2fe1fd923b6bf"><a name="aecd744296d7d4b0397b2fe1fd923b6bf"></a><a name="aecd744296d7d4b0397b2fe1fd923b6bf"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="a8579d68414bb40968ecb2f54fd50bfa3"><a name="a8579d68414bb40968ecb2f54fd50bfa3"></a><a name="a8579d68414bb40968ecb2f54fd50bfa3"></a>Cgroup name.</p>
    </td>
    </tr>
    <tr id="r685dd7e8104e4020b260711d0d1cf9a9"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="ad7f3b45edf4748ef8bf45be74968b4ac"><a name="ad7f3b45edf4748ef8bf45be74968b4ac"></a><a name="ad7f3b45edf4748ef8bf45be74968b4ac"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="a0b778f8c6817439484fd5f0cb1d91e8b"><a name="a0b778f8c6817439484fd5f0cb1d91e8b"></a><a name="a0b778f8c6817439484fd5f0cb1d91e8b"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="abd4a7662d8784ec1890fd6e25a2ce17d"><a name="abd4a7662d8784ec1890fd6e25a2ce17d"></a><a name="abd4a7662d8784ec1890fd6e25a2ce17d"></a>Cgroup type.</p>
    </td>
    </tr>
    <tr id="r45542ef0924c49f2a21c540acd3c90e3"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="a09bb26374b104b3fb29bbe2a80ef226a"><a name="a09bb26374b104b3fb29bbe2a80ef226a"></a><a name="a09bb26374b104b3fb29bbe2a80ef226a"></a>gid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="abe1aa36777e444c48c10c68dea6d28bd"><a name="abe1aa36777e444c48c10c68dea6d28bd"></a><a name="abe1aa36777e444c48c10c68dea6d28bd"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="a08d938eccee84d42b9018a66f6b6784c"><a name="a08d938eccee84d42b9018a66f6b6784c"></a><a name="a08d938eccee84d42b9018a66f6b6784c"></a>Cgroup ID.</p>
    </td>
    </tr>
    <tr id="ra3bccb8528cd408aa54f8e30557c0359"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="ac1f1c391b720448fb6cff2861dc151b6"><a name="ac1f1c391b720448fb6cff2861dc151b6"></a><a name="ac1f1c391b720448fb6cff2861dc151b6"></a>classgid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p84741447191914"><a name="p84741447191914"></a><a name="p84741447191914"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="a83dfda58a9ac418fab57f167cd4a8244"><a name="a83dfda58a9ac418fab57f167cd4a8244"></a><a name="a83dfda58a9ac418fab57f167cd4a8244"></a>ID of the <strong id="b181063473442"><a name="b181063473442"></a><a name="b181063473442"></a>Class</strong> cgroup where a <strong id="b171121476449"><a name="b171121476449"></a><a name="b171121476449"></a>Workload</strong> cgroup belongs.</p>
    </td>
    </tr>
    <tr id="rd7538143f1a648d2ae003ee563237226"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="adad82d644319412cb3a8d9cb60daa836"><a name="adad82d644319412cb3a8d9cb60daa836"></a><a name="adad82d644319412cb3a8d9cb60daa836"></a>class</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="a0a0c18f59f1a47bdb17413bbe1716f3a"><a name="a0a0c18f59f1a47bdb17413bbe1716f3a"></a><a name="a0a0c18f59f1a47bdb17413bbe1716f3a"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="a2fe293248c694ffd9fe3f04bdf3a3f6d"><a name="a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><a name="a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><strong id="b118725334413"><a name="b118725334413"></a><a name="b118725334413"></a>Class</strong> cgroup.</p>
    </td>
    </tr>
    <tr id="ra831355d65f64e7b92f51f84021f4947"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="a71cd5950d6ef4ea888015a515726ccf1"><a name="a71cd5950d6ef4ea888015a515726ccf1"></a><a name="a71cd5950d6ef4ea888015a515726ccf1"></a>workload</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="a9193af9c57084a81b157fec2c2935f90"><a name="a9193af9c57084a81b157fec2c2935f90"></a><a name="a9193af9c57084a81b157fec2c2935f90"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="a8900dd32319f4d53937621db1727f5cf"><a name="a8900dd32319f4d53937621db1727f5cf"></a><a name="a8900dd32319f4d53937621db1727f5cf"></a><strong id="b3659195811442"><a name="b3659195811442"></a><a name="b3659195811442"></a>Workload</strong> cgroup.</p>
    </td>
    </tr>
    <tr id="rdb4c5c3a41fb4325a8c11787c3af82b1"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="ab44539456dc4418bbfdc32a89a1f2851"><a name="ab44539456dc4418bbfdc32a89a1f2851"></a><a name="ab44539456dc4418bbfdc32a89a1f2851"></a>shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="a17a7c300ce604cd380d8340e5bfa63c3"><a name="a17a7c300ce604cd380d8340e5bfa63c3"></a><a name="a17a7c300ce604cd380d8340e5bfa63c3"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="aad54cacd015d4619bf9acb9cb4736cd3"><a name="aad54cacd015d4619bf9acb9cb4736cd3"></a><a name="aad54cacd015d4619bf9acb9cb4736cd3"></a>CPU quota allocated to the cgroup.</p>
    </td>
    </tr>
    <tr id="r47bd7dff24334c239af7266eeeb52c2b"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="a97cfc7c8c5c8412aa7b03489d5df0b8a"><a name="a97cfc7c8c5c8412aa7b03489d5df0b8a"></a><a name="a97cfc7c8c5c8412aa7b03489d5df0b8a"></a>limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="ac0400ce695b945b89702ff50805ac554"><a name="ac0400ce695b945b89702ff50805ac554"></a><a name="ac0400ce695b945b89702ff50805ac554"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="a04d603fa66434a178026e29847b76f40"><a name="a04d603fa66434a178026e29847b76f40"></a><a name="a04d603fa66434a178026e29847b76f40"></a>Limit of CPUs allocated to a cgroup.</p>
    </td>
    </tr>
    <tr id="row5504610171814"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p105051710131812"><a name="p105051710131812"></a><a name="p105051710131812"></a>wdlevel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p20505010181817"><a name="p20505010181817"></a><a name="p20505010181817"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p25051510141815"><a name="p25051510141815"></a><a name="p25051510141815"></a><strong id="b103001115144519"><a name="b103001115144519"></a><a name="b103001115144519"></a>Workload</strong> cgroup level.</p>
    </td>
    </tr>
    <tr id="row15968121961816"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p149683193188"><a name="p149683193188"></a><a name="p149683193188"></a>cpucores</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p14968519121811"><a name="p14968519121811"></a><a name="p14968519121811"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p19681196183"><a name="p19681196183"></a><a name="p19681196183"></a>Usage of CPU cores in a cgroup.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_total\_nodegroup\_memory\_detail

    Description: Returns information about the memory used by the current logical database, in MB.

    Return type: SETOF record

-   local\_redo\_time\_count\(\)

    Description: Returns the time consumption statistics on each process of each playback thread on the current node \(valid data exists only on the standby node\).

    The return values are as follows:

    local\_redo\_time\_count parameters

    <a name="table37771537184514"></a>
    <table><thead align="left"><tr id="row8772103711458"><th class="cellrowborder" valign="top" width="38.42%" id="mcps1.1.3.1.1"><p id="p9772337104511"><a name="p9772337104511"></a><a name="p9772337104511"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.58%" id="mcps1.1.3.1.2"><p id="p1772937194512"><a name="p1772937194512"></a><a name="p1772937194512"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row12772737204520"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p9772193724512"><a name="p9772193724512"></a><a name="p9772193724512"></a>thread_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p17772137114516"><a name="p17772137114516"></a><a name="p17772137114516"></a>Thread name</p>
    </td>
    </tr>
    <tr id="row167723378458"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p2077223713454"><a name="p2077223713454"></a><a name="p2077223713454"></a>step1_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p2077233794518"><a name="p2077233794518"></a><a name="p2077233794518"></a>Total duration of step 1. The process of each thread is as follows:</p>
    <p id="p37721737194516"><a name="p37721737194516"></a><a name="p37721737194516"></a>Ultimate RTO</p>
    <a name="ul6912204818401"></a><a name="ul6912204818401"></a><ul id="ul6912204818401"><li><strong id="b8623152153620"><a name="b8623152153620"></a><a name="b8623152153620"></a>batch redo</strong>: obtains a log from a queue.</li><li><strong id="b71527286369"><a name="b71527286369"></a><a name="b71527286369"></a>redo manager</strong>: obtains a log from a queue.</li><li><strong id="b15415123519361"><a name="b15415123519361"></a><a name="b15415123519361"></a>redo worker</strong>: obtains a log from a queue.</li><li><strong id="b1452910118379"><a name="b1452910118379"></a><a name="b1452910118379"></a>trxn manager</strong>: reads a log from a queue.</li><li><strong id="b16375249370"><a name="b16375249370"></a><a name="b16375249370"></a>trxn worker</strong>: reads a log from a queue.</li><li><strong id="b1159218570379"><a name="b1159218570379"></a><a name="b1159218570379"></a>read worker</strong>: reads an Xlog page (overall) from a file.</li><li><strong id="b14951520103814"><a name="b14951520103814"></a><a name="b14951520103814"></a>read page worker</strong>: obtains a log from a queue.</li><li><strong id="b1017820279396"><a name="b1017820279396"></a><a name="b1017820279396"></a>startup</strong>: obtains a log from a queue.</li></ul>
    <p id="p1577223714459"><a name="p1577223714459"></a><a name="p1577223714459"></a>Parallel replay:</p>
    <a name="ul1078315813405"></a><a name="ul1078315813405"></a><ul id="ul1078315813405"><li><strong id="b149913535392"><a name="b149913535392"></a><a name="b149913535392"></a>page redo</strong>: obtains a log from a queue.</li><li><strong id="b1690718566394"><a name="b1690718566394"></a><a name="b1690718566394"></a>startup</strong>: reads a log.</li></ul>
    </td>
    </tr>
    <tr id="row4773203719459"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p1777311379451"><a name="p1777311379451"></a><a name="p1777311379451"></a>step1_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p67731937174511"><a name="p67731937174511"></a><a name="p67731937174511"></a>Number of accumulated execution times of step 1.</p>
    </td>
    </tr>
    <tr id="row577312373457"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p677373720458"><a name="p677373720458"></a><a name="p677373720458"></a>step2_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p4773737124512"><a name="p4773737124512"></a><a name="p4773737124512"></a>Total duration of step 2. The process of each thread is as follows:</p>
    <p id="p1377393715455"><a name="p1377393715455"></a><a name="p1377393715455"></a>Ultimate RTO</p>
    <a name="ul07451057415"></a><a name="ul07451057415"></a><ul id="ul07451057415"><li><strong id="b166401648124018"><a name="b166401648124018"></a><a name="b166401648124018"></a>batch redo</strong>: processes logs (overall).</li><li><strong id="b960816584403"><a name="b960816584403"></a><a name="b960816584403"></a>redo manager</strong>: processes logs (overall).</li><li><strong id="b11569714112"><a name="b11569714112"></a><a name="b11569714112"></a>redo worker</strong>: processes logs (overall).</li><li><strong id="b1241111411426"><a name="b1241111411426"></a><a name="b1241111411426"></a>trxn manager</strong>: processes logs (overall).</li><li><strong id="b8148650134214"><a name="b8148650134214"></a><a name="b8148650134214"></a>trxn worker</strong>: processes logs (overall).</li><li><strong id="b119801921439"><a name="b119801921439"></a><a name="b119801921439"></a>redo worker</strong>: specifies the time required for reading the Xlog page.</li><li><strong id="b8517101374314"><a name="b8517101374314"></a><a name="b8517101374314"></a>read page worker</strong>: generates and sends LSN forwarders.</li><li><strong id="b1315130121811"><a name="b1315130121811"></a><a name="b1315130121811"></a>startup</strong>: checks whether to replay to the specified position.</li></ul>
    <p id="p1773123720453"><a name="p1773123720453"></a><a name="p1773123720453"></a>Parallel replay:</p>
    <a name="ul155891392413"></a><a name="ul155891392413"></a><ul id="ul155891392413"><li><strong id="b35117448"><a name="b35117448"></a><a name="b35117448"></a>page redo</strong>: processes logs (overall).</li><li><strong id="b9164345194518"><a name="b9164345194518"></a><a name="b9164345194518"></a>startup</strong>: checks whether to replay to the specified position.</li></ul>
    </td>
    </tr>
    <tr id="row1377383784518"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p9773123720456"><a name="p9773123720456"></a><a name="p9773123720456"></a>step2_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p19773163734515"><a name="p19773163734515"></a><a name="p19773163734515"></a>Number of accumulated execution times of step 2.</p>
    </td>
    </tr>
    <tr id="row677410371452"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p1773123718458"><a name="p1773123718458"></a><a name="p1773123718458"></a>step3_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p37731137104516"><a name="p37731137104516"></a><a name="p37731137104516"></a>Total duration of step 3. The process of each thread is as follows:</p>
    <p id="p77731337164513"><a name="p77731337164513"></a><a name="p77731337164513"></a>Ultimate RTO</p>
    <a name="ul5493115114118"></a><a name="ul5493115114118"></a><ul id="ul5493115114118"><li><strong id="b134931342204413"><a name="b134931342204413"></a><a name="b134931342204413"></a>batch redo</strong>: updates the standby state.</li><li><strong id="b386841115451"><a name="b386841115451"></a><a name="b386841115451"></a>redo manager</strong>: processes data logs.</li><li><strong id="b665311554518"><a name="b665311554518"></a><a name="b665311554518"></a>redo worker</strong>: replays page logs (overall).</li><li><strong id="b5949122418457"><a name="b5949122418457"></a><a name="b5949122418457"></a>trxn manager</strong>: updates the flush LSN.</li><li><strong id="b684123616454"><a name="b684123616454"></a><a name="b684123616454"></a>trxn worker</strong>: replays logs.</li><li><strong id="b5459165984618"><a name="b5459165984618"></a><a name="b5459165984618"></a>redo worker</strong>: pushes the Xlog segment.</li><li><strong id="b1610119574718"><a name="b1610119574718"></a><a name="b1610119574718"></a>read page worker</strong>: obtains a new item.</li><li><strong id="b614273110196"><a name="b614273110196"></a><a name="b614273110196"></a>startup</strong>: collects statistics on the wait time of delayed replay feature.</li></ul>
    <p id="p127741137134519"><a name="p127741137134519"></a><a name="p127741137134519"></a>Parallel replay:</p>
    <a name="ul4564121954113"></a><a name="ul4564121954113"></a><ul id="ul4564121954113"><li><strong id="b11532171014492"><a name="b11532171014492"></a><a name="b11532171014492"></a>page redo</strong>: updates the standby state.</li><li><strong id="b13269154811469"><a name="b13269154811469"></a><a name="b13269154811469"></a>startup</strong>: collects statistics on the wait time of delayed replay feature.</li></ul>
    </td>
    </tr>
    <tr id="row477463704512"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p1977410370452"><a name="p1977410370452"></a><a name="p1977410370452"></a>step3_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p15774133710452"><a name="p15774133710452"></a><a name="p15774133710452"></a>Number of accumulated execution times of step 3.</p>
    </td>
    </tr>
    <tr id="row277417375451"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p10774537194511"><a name="p10774537194511"></a><a name="p10774537194511"></a>step4_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p97746379452"><a name="p97746379452"></a><a name="p97746379452"></a>Total duration of step 4. The process of each thread is as follows:</p>
    <p id="p127741378453"><a name="p127741378453"></a><a name="p127741378453"></a>Ultimate RTO:</p>
    <a name="ul6814102413413"></a><a name="ul6814102413413"></a><ul id="ul6814102413413"><li><strong id="b1260203710497"><a name="b1260203710497"></a><a name="b1260203710497"></a>batch redo</strong>: parses Xlogs.</li><li><strong id="b11934544114919"><a name="b11934544114919"></a><a name="b11934544114919"></a>redo manager</strong>: processes DDL.</li><li><strong id="b856345244920"><a name="b856345244920"></a><a name="b856345244920"></a>redo worker</strong>: reads data pages.</li><li><strong id="b13747165920468"><a name="b13747165920468"></a><a name="b13747165920468"></a>trxn manager</strong>: synchronizes the wait time.</li><li><strong id="b441318345020"><a name="b441318345020"></a><a name="b441318345020"></a>trxn worker</strong>: updates the LSN of the current thread.</li><li><strong id="b18902818155019"><a name="b18902818155019"></a><a name="b18902818155019"></a>read page worker</strong>: stores logs in the distribution thread.</li><li><strong id="b1095419304426"><a name="b1095419304426"></a><a name="b1095419304426"></a>startup</strong>: distributes logs (overall).</li></ul>
    <p id="p12774937114518"><a name="p12774937114518"></a><a name="p12774937114518"></a>Parallel replay:</p>
    <a name="ul1163412282411"></a><a name="ul1163412282411"></a><ul id="ul1163412282411"><li><strong id="b125421652135519"><a name="b125421652135519"></a><a name="b125421652135519"></a>page redo</strong>: replays undo logs.</li><li><strong id="b172113383428"><a name="b172113383428"></a><a name="b172113383428"></a>startup</strong>: distributes logs (overall).</li></ul>
    </td>
    </tr>
    <tr id="row117751337174514"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p477423764513"><a name="p477423764513"></a><a name="p477423764513"></a>step4_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p87751037104519"><a name="p87751037104519"></a><a name="p87751037104519"></a>Number of accumulated execution times of step 4.</p>
    </td>
    </tr>
    <tr id="row577563754514"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p1775337104512"><a name="p1775337104512"></a><a name="p1775337104512"></a>step5_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p16775153710452"><a name="p16775153710452"></a><a name="p16775153710452"></a>Total duration of step 5. The process of each thread is as follows:</p>
    <p id="p177593794511"><a name="p177593794511"></a><a name="p177593794511"></a>Ultimate RTO:</p>
    <a name="ul1740675419439"></a><a name="ul1740675419439"></a><ul id="ul1740675419439"><li><strong id="b172461311165113"><a name="b172461311165113"></a><a name="b172461311165113"></a>batch redo</strong>: distributes logs to the redo manager.</li><li><strong id="b11348547185111"><a name="b11348547185111"></a><a name="b11348547185111"></a>redo manager</strong>: distributes logs to redo workers.</li><li><strong id="b1496751275218"><a name="b1496751275218"></a><a name="b1496751275218"></a>redo worker</strong>: replays data page logs.</li><li><strong id="b1163012175528"><a name="b1163012175528"></a><a name="b1163012175528"></a>trxn manager</strong>: distributes data to the trxn worker.</li><li><strong id="b51761543125216"><a name="b51761543125216"></a><a name="b51761543125216"></a>trxn worker</strong>: forcibly synchronizes the wait time.</li><li><strong id="b576925155213"><a name="b576925155213"></a><a name="b576925155213"></a>read page worker</strong>: updates the LSN of the current thread.</li><li><strong id="b15538526204314"><a name="b15538526204314"></a><a name="b15538526204314"></a>startup</strong>: decodes logs.</li></ul>
    <p id="p8775103724516"><a name="p8775103724516"></a><a name="p8775103724516"></a>Parallel replay:</p>
    <a name="ul113271406444"></a><a name="ul113271406444"></a><ul id="ul113271406444"><li><strong id="b14462103717207"><a name="b14462103717207"></a><a name="b14462103717207"></a>page redo</strong>: replays sharetrxn logs.</li><li><strong id="b698264092012"><a name="b698264092012"></a><a name="b698264092012"></a>startup</strong>: replays logs.</li></ul>
    </td>
    </tr>
    <tr id="row17775173711457"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p12775337184518"><a name="p12775337184518"></a><a name="p12775337184518"></a>step5_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p14775133720450"><a name="p14775133720450"></a><a name="p14775133720450"></a>Number of accumulated execution times of step 5.</p>
    </td>
    </tr>
    <tr id="row777613744513"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p277512379454"><a name="p277512379454"></a><a name="p277512379454"></a>step6_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p13775737124519"><a name="p13775737124519"></a><a name="p13775737124519"></a>Total duration of step 6. The process of each thread is as follows:</p>
    <p id="p18775737134519"><a name="p18775737134519"></a><a name="p18775737134519"></a>Ultimate RTO:</p>
    <a name="ul174916534412"></a><a name="ul174916534412"></a><ul id="ul174916534412"><li><strong id="b185509405543"><a name="b185509405543"></a><a name="b185509405543"></a>redo worker</strong>: replays non-data page logs.</li><li><strong id="b1881035812205"><a name="b1881035812205"></a><a name="b1881035812205"></a>trxn manager</strong>: updates global LSNs.</li><li><strong id="b19381392111"><a name="b19381392111"></a><a name="b19381392111"></a>read page worker</strong>: performs log CRC check.</li></ul>
    <p id="p37751637124513"><a name="p37751637124513"></a><a name="p37751637124513"></a>Parallel replay:</p>
    <a name="ul1562069114414"></a><a name="ul1562069114414"></a><ul id="ul1562069114414"><li><strong id="b88398120218"><a name="b88398120218"></a><a name="b88398120218"></a>page redo</strong>: replays synctrxn logs.</li><li><strong id="b13038204218"><a name="b13038204218"></a><a name="b13038204218"></a>startup</strong>: forcibly synchronizes the wait time.</li></ul>
    </td>
    </tr>
    <tr id="row3776113718452"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p677693711457"><a name="p677693711457"></a><a name="p677693711457"></a>step6_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p137761337144510"><a name="p137761337144510"></a><a name="p137761337144510"></a>Number of accumulated execution times of step 6.</p>
    </td>
    </tr>
    <tr id="row2077619374452"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p777663717452"><a name="p777663717452"></a><a name="p777663717452"></a>step7_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p2776113716452"><a name="p2776113716452"></a><a name="p2776113716452"></a>Total duration of step 7. The process of each thread is as follows:</p>
    <p id="p13776337114515"><a name="p13776337114515"></a><a name="p13776337114515"></a>Ultimate RTO:</p>
    <p id="p187761937174513"><a name="p187761937174513"></a><a name="p187761937174513"></a><strong id="b14238162718216"><a name="b14238162718216"></a><a name="b14238162718216"></a>redo worker</strong>: updates FSM.</p>
    <p id="p20776133711455"><a name="p20776133711455"></a><a name="p20776133711455"></a>Parallel replay:</p>
    <p id="p19776037114515"><a name="p19776037114515"></a><a name="p19776037114515"></a><strong id="b2863172992118"><a name="b2863172992118"></a><a name="b2863172992118"></a>page redo</strong>: replays a single log.</p>
    </td>
    </tr>
    <tr id="row47762377453"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p1777617374454"><a name="p1777617374454"></a><a name="p1777617374454"></a>step7_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p11776173719459"><a name="p11776173719459"></a><a name="p11776173719459"></a>Number of accumulated execution times of step 7.</p>
    </td>
    </tr>
    <tr id="row13776337114514"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p147761737194516"><a name="p147761737194516"></a><a name="p147761737194516"></a>step8_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p13776133716452"><a name="p13776133716452"></a><a name="p13776133716452"></a>Total duration of step 8. The process of each thread is as follows:</p>
    <p id="p477613774513"><a name="p477613774513"></a><a name="p477613774513"></a>Ultimate RTO:</p>
    <p id="p27769371458"><a name="p27769371458"></a><a name="p27769371458"></a><strong id="b45186412217"><a name="b45186412217"></a><a name="b45186412217"></a>redo worker</strong>: forcibly synchronizes the wait time.</p>
    <p id="p1177693754517"><a name="p1177693754517"></a><a name="p1177693754517"></a>Parallel replay:</p>
    <p id="p15776153714454"><a name="p15776153714454"></a><a name="p15776153714454"></a><strong id="b19600137862"><a name="b19600137862"></a><a name="b19600137862"></a>page redo</strong>: replays all workers do log.</p>
    </td>
    </tr>
    <tr id="row167769378457"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p2077617372453"><a name="p2077617372453"></a><a name="p2077617372453"></a>step8_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p577673714452"><a name="p577673714452"></a><a name="p577673714452"></a>Number of accumulated execution times of step 8.</p>
    </td>
    </tr>
    <tr id="row1177715370454"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p1377693716458"><a name="p1377693716458"></a><a name="p1377693716458"></a>step9_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p57771437134519"><a name="p57771437134519"></a><a name="p57771437134519"></a>Total duration of step 9. The process of each thread is as follows:</p>
    <p id="p577714375458"><a name="p577714375458"></a><a name="p577714375458"></a>Ultimate RTO:</p>
    <p id="p13777537184520"><a name="p13777537184520"></a><a name="p13777537184520"></a>None</p>
    <p id="p37771837194517"><a name="p37771837194517"></a><a name="p37771837194517"></a>Parallel replay:</p>
    <p id="p19777103718453"><a name="p19777103718453"></a><a name="p19777103718453"></a><strong id="b97970555613"><a name="b97970555613"></a><a name="b97970555613"></a>page redo</strong>: replays muliti workers do log.</p>
    </td>
    </tr>
    <tr id="row7777337174516"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.1.3.1.1 "><p id="p177733704519"><a name="p177733704519"></a><a name="p177733704519"></a>step9_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.1.3.1.2 "><p id="p677719379452"><a name="p677719379452"></a><a name="p677719379452"></a>Number of accumulated execution times of step 9.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   local\_xlog\_redo\_statics\(\)

    Description: Returns the statistics oneach type of logs that have been replayed on the current node \(valid data exists only on the standby node\).

    The return values are as follows:

    **Table  9**  local\_xlog\_redo\_statics parameters

    <a name="table178991126154511"></a>
    <table><thead align="left"><tr id="row089812612452"><th class="cellrowborder" valign="top" width="38.42%" id="mcps1.2.3.1.1"><p id="p20897726154512"><a name="p20897726154512"></a><a name="p20897726154512"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.58%" id="mcps1.2.3.1.2"><p id="p12897152612453"><a name="p12897152612453"></a><a name="p12897152612453"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row489810266455"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="p13898726184512"><a name="p13898726184512"></a><a name="p13898726184512"></a>xlog_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="p14898132684513"><a name="p14898132684513"></a><a name="p14898132684513"></a>Log types.</p>
    </td>
    </tr>
    <tr id="row168986267459"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="p98987264455"><a name="p98987264455"></a><a name="p98987264455"></a>rmid</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="p989862610458"><a name="p989862610458"></a><a name="p989862610458"></a>resource manager id</p>
    </td>
    </tr>
    <tr id="row0898426194510"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="p2898122694520"><a name="p2898122694520"></a><a name="p2898122694520"></a>info</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="p1289832634511"><a name="p1289832634511"></a><a name="p1289832634511"></a>xlog operation</p>
    </td>
    </tr>
    <tr id="row1089912616457"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="p19898726104517"><a name="p19898726104517"></a><a name="p19898726104517"></a>num</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="p68992268452"><a name="p68992268452"></a><a name="p68992268452"></a>Number of logs.</p>
    </td>
    </tr>
    <tr id="row14899182684517"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="p158995264457"><a name="p158995264457"></a><a name="p158995264457"></a>extra</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="p20899326154511"><a name="p20899326154511"></a><a name="p20899326154511"></a>Valid values are available for page replay logs and xact logs. The page replay log indicates the number of pages read from the disk. The xact log indicates the number of deleted files.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_get\_shared\_memctx\_detail\(text\)

    Description: Returns the memory application details of the specified memory context, including the file, line number, and size of each memory application \(the size of the same line in the same file is accumulated\). Only the memory context queried through the  **pg\_shared\_memory\_detail**  view can be queried. The input parameter is the memory context name \(that is, the  **contextname**  column in the result returned by the  **pg\_shared\_memory\_detail**  view\). To query the function, you must have the  **SYSADMIN**  or  **MONITOR ADMIN**  permission.

    Return type: SETOF record

    <a name="table119476261700"></a>
    <table><thead align="left"><tr id="row69478262010"><th class="cellrowborder" valign="top" width="21.67%" id="mcps1.1.4.1.1"><p id="p4948132617012"><a name="p4948132617012"></a><a name="p4948132617012"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.47%" id="mcps1.1.4.1.2"><p id="p8948122613019"><a name="p8948122613019"></a><a name="p8948122613019"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.86%" id="mcps1.1.4.1.3"><p id="p694832616014"><a name="p694832616014"></a><a name="p694832616014"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1994817261015"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p894842614011"><a name="p894842614011"></a><a name="p894842614011"></a>file</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p794811261018"><a name="p794811261018"></a><a name="p794811261018"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p1994810261008"><a name="p1994810261008"></a><a name="p1994810261008"></a>Name of the file where the memory is applied for.</p>
    </td>
    </tr>
    <tr id="row1494892619013"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p1494810267016"><a name="p1494810267016"></a><a name="p1494810267016"></a>line</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p11948426309"><a name="p11948426309"></a><a name="p11948426309"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p129481626002"><a name="p129481626002"></a><a name="p129481626002"></a>Line number of the code in the file where the requested memory is located.</p>
    </td>
    </tr>
    <tr id="row89482261803"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p1894820262017"><a name="p1894820262017"></a><a name="p1894820262017"></a>size</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p1294842611017"><a name="p1294842611017"></a><a name="p1294842611017"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p9949132618015"><a name="p9949132618015"></a><a name="p9949132618015"></a>Size of the applied memory. The value is accumulated if the memory is applied for multiple times in the same line of the same file.</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This view is not supported in the Lite release version.

-   gs\_get\_session\_memctx\_detail\(text\)

    Description: Returns the memory application details of the specified memory context, including the file, line number, and size of each memory application \(the size of the same line in the same file is accumulated\). This parameter is valid only in thread pool mode. Only the memory context queried through the  **pv\_session\_memory\_context**  view can be queried. The input parameter is the memory context name \(that is, the  **contextname**  column in the result returned by the  **pv\_session\_memory\_context**  view\). To query the function, you must have the  **sysadmin **or  **monitor admin**  permission.

    Return type: SETOF record

    <a name="table210123512516"></a>
    <table><thead align="left"><tr id="row5113358519"><th class="cellrowborder" valign="top" width="21.67%" id="mcps1.1.4.1.1"><p id="p1111735959"><a name="p1111735959"></a><a name="p1111735959"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.47%" id="mcps1.1.4.1.2"><p id="p6111135557"><a name="p6111135557"></a><a name="p6111135557"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.86%" id="mcps1.1.4.1.3"><p id="p1911183510510"><a name="p1911183510510"></a><a name="p1911183510510"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row3114351353"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p71111351054"><a name="p71111351054"></a><a name="p71111351054"></a>file</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p1711153512519"><a name="p1711153512519"></a><a name="p1711153512519"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p91183512513"><a name="p91183512513"></a><a name="p91183512513"></a>Name of the file where the memory is applied for.</p>
    </td>
    </tr>
    <tr id="row14113356512"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p121173511515"><a name="p121173511515"></a><a name="p121173511515"></a>line</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p3111357513"><a name="p3111357513"></a><a name="p3111357513"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p6114358519"><a name="p6114358519"></a><a name="p6114358519"></a>Line number of the code in the file where the requested memory is located.</p>
    </td>
    </tr>
    <tr id="row1511173511512"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p21173511510"><a name="p21173511510"></a><a name="p21173511510"></a>size</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p7124351759"><a name="p7124351759"></a><a name="p7124351759"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p612235452"><a name="p612235452"></a><a name="p612235452"></a>Size of the applied memory. The value is accumulated if the memory is applied for multiple times in the same line of the same file.</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This view takes effect only in thread pool mode and is not supported in the Lite release version.

-   gs\_get\_thread\_memctx\_detail\(tid,text\)

    Description: Returns the memory application details of the specified memory context, including the file, line number, and size of each memory application \(the size of the same line in the same file is accumulated\). Only the memory context queried through the  **pv\_thread\_memory\_context**  view can be queried. The first input parameter is the thread ID \(the  **tid**  column of the data returned by the  **pv\_thread\_memory\_context**\), and the second parameter is the memory context name \(the  **contextname**  column of the data returned by  **pv\_thread\_memory\_context**\). To query the function, you must have the  **sysadmin **or  **monitor admin**  permission.

    Return type: SETOF record

    <a name="table1423513502054"></a>
    <table><thead align="left"><tr id="row102352501755"><th class="cellrowborder" valign="top" width="21.67%" id="mcps1.1.4.1.1"><p id="p132351350652"><a name="p132351350652"></a><a name="p132351350652"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="12.47%" id="mcps1.1.4.1.2"><p id="p122356500518"><a name="p122356500518"></a><a name="p122356500518"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="65.86%" id="mcps1.1.4.1.3"><p id="p8235185018510"><a name="p8235185018510"></a><a name="p8235185018510"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row623512501155"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p3236350851"><a name="p3236350851"></a><a name="p3236350851"></a>file</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p923665012519"><a name="p923665012519"></a><a name="p923665012519"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p923615019515"><a name="p923615019515"></a><a name="p923615019515"></a>Name of the file where the memory is applied for.</p>
    </td>
    </tr>
    <tr id="row823614501055"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p18236195011518"><a name="p18236195011518"></a><a name="p18236195011518"></a>line</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p11236135012514"><a name="p11236135012514"></a><a name="p11236135012514"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p5236250454"><a name="p5236250454"></a><a name="p5236250454"></a>Line number of the code in the file where the requested memory is located.</p>
    </td>
    </tr>
    <tr id="row12236350256"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.1.4.1.1 "><p id="p62364506517"><a name="p62364506517"></a><a name="p62364506517"></a>size</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.47%" headers="mcps1.1.4.1.2 "><p id="p1623655013520"><a name="p1623655013520"></a><a name="p1623655013520"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="65.86%" headers="mcps1.1.4.1.3 "><p id="p323610502051"><a name="p323610502051"></a><a name="p323610502051"></a>Size of the applied memory. The value is accumulated if the memory is applied for multiple times in the same line of the same file.</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This view is not supported in the Lite release version.

-   DBE_PERF.standby_statement_history(bool \[, time1, time2\])
    Parameters:
    - **bool only_slow**: determines whether to query only slow SQL statements. The value **true** indicates yes, and the value **false** or **NULL** indicates that all SQL statements are queried.
    - **VARIADIC timestamptz finish_time**: Optional. You can enter a maximum of time1 and time2, indicating the time segment to which **finish_time** of the queried SQL statement belongs.

    Description: Queries full SQL statements on the standby node. The primary node queries full SQL statements using the statement\_history table, while the standby node queries using this function. Only the initial user or a user with the monadmin permission can execute this function.

    Return type: record, which is the same as that in the statement\_history table.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    > 
    > - The value **true** of the first bool parameter indicates that only slow SQL statements are queried, which is equivalent to **select. where is_slow_sql = true;**. The value **false** or **NULL** indicates that all SQL statements are queried, that is, **is_slow_sql **is not filtered.
    > 
    > - The two time parameters **time1** and **time2** indicate the time segment to which **finish_time** of the queried SQL statement belongs. They indicate the start time and end time respectively. If **NULL** or no value is entered, there is no limit. The function of **time1** and **time2** is the same as that of **select .. where finish_time between time1 and time2**.
    > 
    > - Data on the standby node is not stored in the table, and the index of the **start_time** column does not exist. You are advised to use parameters to search for **finish_time**. The performance is optimized internally. However, if the system time is changed, this function may be inaccurate.
    > 
    > - The query results are automatically sorted in descending order (from new to old) based on **finish_time**.
    > 
    > - In addition to the calculation process of the FunctionScan operator, data scanning occupies 16 MB or 32 MB memory as a temporary buffer.
    > 
    > - The stability level of this function is 'v'.
    > 
    > - Full SQL statements on the standby node are written to disks asynchronously. Therefore, the storage of user SQL information may be delayed. You are advised to query this API to expand the query time range.