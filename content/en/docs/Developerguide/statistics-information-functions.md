# Statistics Information Functions<a name="EN-US_TOPIC_0289900249"></a>

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

    Description: Total wall clock time spent in the function, in microseconds. The time spent on this function calling other functions is included.

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

    Description: Time spent on this function in the current transaction, excluding the time spent on this function internally calling other functions.

    Return type: bigint

-   pg\_stat\_get\_xact\_function\_total\_time\(oid\)

    Description: Total wall clock time \(in microseconds\) spent on the function in the current transaction, including the time spent on this function internally calling other functions.

    Return type: bigint

-   pg\_stat\_get\_wal\_senders\(\)

    Description: Queries walsender information on the primary server.

    Return type: setofrecord

    The following table describes return fields.

    **Table  1**  Return field description

    <a name="en-us_topic_0283136951_table4851182894313"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row1785310288438"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p12853128154310"><a name="en-us_topic_0283136951_p12853128154310"></a><a name="en-us_topic_0283136951_p12853128154310"></a>Field</p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p9855202814433"><a name="en-us_topic_0283136951_p9855202814433"></a><a name="en-us_topic_0283136951_p9855202814433"></a>Lightweight thread ID of the WAL sender.</p>
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

-   pg\_stat\_get\_stream\_replications\(\)

    Description: Queries the primary/standby replication status.

    Return type: setofrecord

    The following table describes return values.

    **Table  2**  Return value description

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

    Description: Number of sequential row scans done if parameters are in a table or number of index scans done if parameters are in an index

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

    Description: Number of rows hot updated in table

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

    Description: Number of live rows in partitioned table

    Return type: bigint

-   pg\_stat\_get\_partition\_dead\_tuples\(oid\)

    Description: Number of dead rows in partitioned table

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_fetched\(oid\)

    Description: Number of tuple rows scanned in a transaction.

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

    Description: Number of times a table is manually cleared.

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

    Description: Number of times a table is manually analyzed.

    Return type: bigint

-   pg\_stat\_get\_autoanalyze\_count\(oid\)

    Description: Number of times the autovacuum daemon analyzes a table

    Return type: bigint

-   pg\_total\_autovac\_tuples\(bool,bool\)

    Description: Returns tuple records related to the total autovac, such as  **nodename**,  **nspname**,  **relname**, and tuple IUDs. The input parameters specify whether to query  **relation**  and  **local**  information, respectively.

    Return type: setofrecord

    The following table describes return parameters.

    **Table  3**  Return parameter description

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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p108191125101512"><a name="en-us_topic_0283136951_p108191125101512"></a><a name="en-us_topic_0283136951_p108191125101512"></a>Name of an object, such as a table, index, or view</p>
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

    Description: Returns autovac information, such as  **nodename**,  **nspname**,  **relname**,  **analyze**,  **vacuum**, thresholds of  **analyze**  and  **vacuum**, and the number of analyzed or vacuumed tuples. Only the sysadmin user can use this function.

    Return type: setofrecord

    The following table describes return parameters.

    **Table  4**  Return parameter description

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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p1149882681218"><a name="en-us_topic_0283136951_p1149882681218"></a><a name="en-us_topic_0283136951_p1149882681218"></a>Name of an object, such as a table, index, or view</p>
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

    Description: Returns the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was performed last time on a table. The data in the  **last\_data\_changed**  column of the  [PG\_STAT\_ALL\_TABLES](en-us_topic_0289900450.md)  view is calculated by using this function. The performance of obtaining the last modification time by using the view is poor when the table has a large amount of data. In this case, you are advised to use the function.

    Return type: timestamptz

-   pg\_stat\_set\_last\_data\_changed\_time\(oid\)

    Description: Manually changes the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was performed last time.

    Return type: void

-   pg\_backend\_pid\(\)

    Description: Thread ID of the server thread attached to the current session

    Return type: integer

-   pg\_stat\_get\_activity\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The return results are a subnet of those \(excluding the  **connection\_info**  column\) in the  [PG\_STAT\_ACTIVITY](PG_STAT_ACTIVITY)  view.

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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p137594021613"><a name="en-us_topic_0283136951_p137594021613"></a><a name="en-us_topic_0283136951_p137594021613"></a>Name of the user logged in to the backend</p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p8410553181812"><a name="en-us_topic_0283136951_p8410553181812"></a><a name="en-us_topic_0283136951_p8410553181812"></a>Overall status of this backend.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row20433131516198"><td class="cellrowborder" valign="top" width="35.063506350635066%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1743491521918"><a name="en-us_topic_0283136951_p1743491521918"></a><a name="en-us_topic_0283136951_p1743491521918"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.6031603160316%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p04341915121912"><a name="en-us_topic_0283136951_p04341915121912"></a><a name="en-us_topic_0283136951_p04341915121912"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p18434101541910"><a name="en-us_topic_0283136951_p18434101541910"></a><a name="en-us_topic_0283136951_p18434101541910"></a>Text of this backend's most recent query. If <strong id="b183586738145811"><a name="b183586738145811"></a><a name="b183586738145811"></a>state</strong> is <strong id="b203765162745811"><a name="b203765162745811"></a><a name="b203765162745811"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p2982153210243"><a name="en-us_topic_0283136951_p2982153210243"></a><a name="en-us_topic_0283136951_p2982153210243"></a>Time when the <strong id="b77158886845811"><a name="b77158886845811"></a><a name="b77158886845811"></a>state</strong> was last changed</p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p18331162415238"><a name="en-us_topic_0283136951_p18331162415238"></a><a name="en-us_topic_0283136951_p18331162415238"></a>TCP port number that the client uses for communication with this backend (<strong id="b137159610645811"><a name="b137159610645811"></a><a name="b137159610645811"></a>-1</strong> if a Unix socket is used)</p>
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
    </tbody>
    </table>

-   pg\_stat\_get\_activity\_with\_conninfo\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The return results are a subnet of those in the  [PG\_STAT\_ACTIVITY](PG_STAT_ACTIVITY.md)  view.

    Return type: setofrecord

    The following table describes return values.

    **Table  6**  Return value description

    <a name="en-us_topic_0283136951_table8714322156"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136951_row27218327150"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136951_p137215323156"><a name="en-us_topic_0283136951_p137215323156"></a><a name="en-us_topic_0283136951_p137215323156"></a>Return Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136951_p107253241511"><a name="en-us_topic_0283136951_p107253241511"></a><a name="en-us_topic_0283136951_p107253241511"></a>Return Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136951_p1873153219152"><a name="en-us_topic_0283136951_p1873153219152"></a><a name="en-us_topic_0283136951_p1873153219152"></a>Return value description</p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p151251394386"><a name="en-us_topic_0283136951_p151251394386"></a><a name="en-us_topic_0283136951_p151251394386"></a>Name of the user logged in to the backend</p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p95213198185"><a name="en-us_topic_0283136951_p95213198185"></a><a name="en-us_topic_0283136951_p95213198185"></a>Overall status of this backend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row3658547131812"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p5659047191816"><a name="en-us_topic_0283136951_p5659047191816"></a><a name="en-us_topic_0283136951_p5659047191816"></a>query</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p2065914714188"><a name="en-us_topic_0283136951_p2065914714188"></a><a name="en-us_topic_0283136951_p2065914714188"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p826110558358"><a name="en-us_topic_0283136951_p826110558358"></a><a name="en-us_topic_0283136951_p826110558358"></a>Text of this backend's most recent query. If <strong id="b288476535"><a name="b288476535"></a><a name="b288476535"></a>state</strong> is <strong id="b747386137"><a name="b747386137"></a><a name="b747386137"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1112454181810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1812654141816"><a name="en-us_topic_0283136951_p1812654141816"></a><a name="en-us_topic_0283136951_p1812654141816"></a>waiting</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p11214548184"><a name="en-us_topic_0283136951_p11214548184"></a><a name="en-us_topic_0283136951_p11214548184"></a>Boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p143863432351"><a name="en-us_topic_0283136951_p143863432351"></a><a name="en-us_topic_0283136951_p143863432351"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b5731164718514"><a name="b5731164718514"></a><a name="b5731164718514"></a>true</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row360025811815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p3601105831811"><a name="en-us_topic_0283136951_p3601105831811"></a><a name="en-us_topic_0283136951_p3601105831811"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p3601175851814"><a name="en-us_topic_0283136951_p3601175851814"></a><a name="en-us_topic_0283136951_p3601175851814"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p791672733514"><a name="en-us_topic_0283136951_p791672733514"></a><a name="en-us_topic_0283136951_p791672733514"></a>Time when current transaction was started (null if no transaction is active). If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b919055665"><a name="b919055665"></a><a name="b919055665"></a>query_start</strong> column.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row371718291910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p1871719261916"><a name="en-us_topic_0283136951_p1871719261916"></a><a name="en-us_topic_0283136951_p1871719261916"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p17171826194"><a name="en-us_topic_0283136951_p17171826194"></a><a name="en-us_topic_0283136951_p17171826194"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p193581715153516"><a name="en-us_topic_0283136951_p193581715153516"></a><a name="en-us_topic_0283136951_p193581715153516"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b352678312"><a name="b352678312"></a><a name="b352678312"></a>state</strong> is not <strong id="b1009762811"><a name="b1009762811"></a><a name="b1009762811"></a>active</strong></p>
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
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p158185514208"><a name="en-us_topic_0283136951_p158185514208"></a><a name="en-us_topic_0283136951_p158185514208"></a>Time when the <strong id="b915631470"><a name="b915631470"></a><a name="b915631470"></a>state</strong> was last changed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1956611310248"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p105678312411"><a name="en-us_topic_0283136951_p105678312411"></a><a name="en-us_topic_0283136951_p105678312411"></a>client_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p18567183192419"><a name="en-us_topic_0283136951_p18567183192419"></a><a name="en-us_topic_0283136951_p18567183192419"></a>inet</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p272643273311"><a name="en-us_topic_0283136951_p272643273311"></a><a name="en-us_topic_0283136951_p272643273311"></a>IP address of the client connected to the backend. If this column is <strong id="b91111723195213"><a name="b91111723195213"></a><a name="b91111723195213"></a>NULL</strong>, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as <strong id="b111613232528"><a name="b111613232528"></a><a name="b111613232528"></a>AUTOVACUUM</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row184018578326"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p19402757103218"><a name="en-us_topic_0283136951_p19402757103218"></a><a name="en-us_topic_0283136951_p19402757103218"></a>client_hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p7402125717322"><a name="en-us_topic_0283136951_p7402125717322"></a><a name="en-us_topic_0283136951_p7402125717322"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p114021557193219"><a name="en-us_topic_0283136951_p114021557193219"></a><a name="en-us_topic_0283136951_p114021557193219"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b1871992520"><a name="b1871992520"></a><a name="b1871992520"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b1397491959"><a name="b1397491959"></a><a name="b1397491959"></a>log_hostname</strong> is enabled.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_row1119736182610"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136951_p51977652616"><a name="en-us_topic_0283136951_p51977652616"></a><a name="en-us_topic_0283136951_p51977652616"></a>client_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136951_p21973672616"><a name="en-us_topic_0283136951_p21973672616"></a><a name="en-us_topic_0283136951_p21973672616"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136951_p191971667265"><a name="en-us_topic_0283136951_p191971667265"></a><a name="en-us_topic_0283136951_p191971667265"></a>TCP port number that the client uses for communication with this backend (<strong id="b231139243"><a name="b231139243"></a><a name="b231139243"></a>-1</strong> if a Unix socket is used)</p>
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
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p114261231143"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p114261231143"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p114261231143"></a>User ID.</p>
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
    </tbody>
    </table>

-   pg\_stat\_get\_function\_calls\(oid\)

    Description: Number of times the function has been called

    Return type: bigint

-   pg\_stat\_get\_function\_self\_time\(oid\)

    Description: Time spent in only this function. The time spent on this function calling other functions is excluded.

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

    Description: TCP port number of the client connected to the given server process. If the connection is over a Unix domain socket,  **-1**  will be returned. If the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

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
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1988821914586"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1988821914586"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1988821914586"></a>Allocation raio in Timeshare</p>
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
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p075814565503"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p075814565503"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p075814565503"></a>Number of background transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row19598192013815"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p559812053810"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p559812053810"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p559812053810"></a>bg_rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p16598152020386"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16598152020386"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p16598152020386"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p9769159175019"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p9769159175019"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p9769159175019"></a>Number of background transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row337414493389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p133752049173811"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p133752049173811"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p133752049173811"></a>bg_resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p183757493389"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p183757493389"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p183757493389"></a>97</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p1192231165119"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1192231165119"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p1192231165119"></a>Minimum response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row45313548389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p65355419381"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65355419381"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p65355419381"></a>bg_resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p175345413382"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p175345413382"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p175345413382"></a>678080687</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p76633614519"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p76633614519"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p76633614519"></a>Maximum response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row225795743818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p2257857123819"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2257857123819"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p2257857123819"></a>bg_resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p3257257143815"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p3257257143815"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p3257257143815"></a>327847884</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p13572131118512"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p13572131118512"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p13572131118512"></a>Average response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136951_en-us_topic_0237121998_row35321851114514"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7533951154513"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533951154513"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533951154513"></a>bg_resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p7533351194520"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533351194520"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p7533351194520"></a>298341575300</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283136951_en-us_topic_0237121998_p17865151410518"><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17865151410518"></a><a name="en-us_topic_0283136951_en-us_topic_0237121998_p17865151410518"></a>Total response time of background transactions (unit: μs)</p>
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

    Description: Provides the time consumption of each key phase of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_unique\_sql\(\)

    Description: Obtains information about execution statements \(normalized SQL statements\) on the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   reset\_unique\_sql\(text, text, bigint\)

    Description: Resets information about system execution statements \(normalized SQL statements\) information as a user with the  **sysadmin**  permission. The value of the first parameter can be **global**  or  **local**.  **global**  indicates that information on all nodes is cleared, and  **local**  indicates that only information on the current node is cleared. The value of the second parameter can be  **ALL**,  **BY\_USERID**, or  **BY\_CNID**.  **ALL**  indicates that all information is cleared.  **BY\_USERID**  indicates that the SQL information of the user specified by  **USERID**  is cleared.  **BY\_CNID**  indicates that the SQL information related to the primary node of the database in the system is cleared. The third parameter indicates  **CNID**  and  **USERID**. If the second parameter is set to  **ALL**, the third parameter does not take effect and can be set to any value.

    Return type: Boolean

-   get\_instr\_wait\_event\(NULL\)

    Description: Obtains the statistics on wait events of the current node.

    Return type: record

-   get\_instr\_user\_login\(\)

    Description: Obtains the number of user login and logout times of the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_rt\_percentile\(integer\)

    Description: Obtains the SQL response time P80 and P95 distribution information of the database.

    Return type: record

-   get\_node\_stat\_reset\_time\(\)

    Description: Obtains statistics about reset \(restart, primary/standby switchover, and database deletion\) time of the current node.

    Return type: record

-   DBE\_PERF.get\_global\_os\_runtime\(\)

    Description: Displays the running status of the current OS. To query this function, you must have the  **sysadmin**  permission.

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


-   DBE\_PERF.get\_global\_session\_stat\_activity\(\)

    Description: Displays information about threads that are running on each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_thread\_wait\_status\(\)

    Description: Displays the block waiting status of backend threads and auxiliary threads on all nodes. To query this function, you must have the  **sysadmin**  permission.

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

    Description: Displays the status information of the historically-executed statements on each node. To query this function, you must have the  **sysadmin**  or  **monitor admin**  permission.

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

    Description: Displays the status of worker threads and sessions in thread pools on all nodes. For details about the columns returned by the function, see  [GLOBAL\_THREADPOOL\_STATUS](GLOBAL_THREADPOOL_STATUS.md).

    Return type: record

-   remote\_bgwriter\_stat\(\)

    Description: Displays the information about pages flushed by the bgwriter threads of all instances in the database, number of pages in the candidate buffer chain, and buffer elimination information \(except for the local node and not available on the DN\).

    Return type: record

-   pv\_os\_run\_info

    Description: Displays the running status of the current OS. For details about the fields, see  [GS\_OS\_RUN\_INFO](GS_OS_RUN_INFO.md).

    Parameter: nan

    Return type: SETOF record

-   pv\_session\_stat

    Description: Collects session status information by session thread or AutoVacuum thread. For details about the fields, see  [GS\_SESSION\_STAT](GS_SESSION_STAT.md).

    Parameter: nan

    Return type: SETOF record

-   pv\_session\_time

    Description: Collects statistics on the running time of session threads and the time consumed in each execution phase. For details about the fields, see  [GS\_SESSION\_TIME](GS_SESSION_TIME.md).

    Parameter: nan

    Return type: SETOF record

-   pg\_stat\_get\_db\_temp\_bytes

    Description: Collects statistics on the total amount of data written to temporary files through database query. All temporary files are counted, regardless of why the temporary file was created, and regardless of the  **log\_temp\_files**  setting.

    Parameter: oid

    Return type: bigint

-   pg\_stat\_get\_db\_temp\_files

    Description: Queries the number of temporary files created in the database. All temporary files are counted, regardless of why the temporary file was created \(for example, sorting or hashing\), and regardless of the  **log\_temp\_files**  setting.

    Parameter: oid

    Return type: bigint



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
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p127571931193619"><a name="p127571931193619"></a><a name="p127571931193619"></a>Name of the database to which a user session is connected.</p>
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
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p9958411164014"><a name="p9958411164014"></a><a name="p9958411164014"></a>Query that is being executed on the background.</p>
    </td>
    </tr>
    <tr id="row1775813313364"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p8758193119369"><a name="p8758193119369"></a><a name="p8758193119369"></a>xact_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p8758331143619"><a name="p8758331143619"></a><a name="p8758331143619"></a>timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p4758133153614"><a name="p4758133153614"></a><a name="p4758133153614"></a>Time when the current transaction is started.</p>
    </td>
    </tr>
    <tr id="row1675818318362"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p57581331123617"><a name="p57581331123617"></a><a name="p57581331123617"></a>query_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p8394162712488"><a name="p8394162712488"></a><a name="p8394162712488"></a>timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p890615614815"><a name="p890615614815"></a><a name="p890615614815"></a>Time when the current query starts.</p>
    </td>
    </tr>
    <tr id="row207586318365"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.1.4.1.1 "><p id="p7758331163615"><a name="p7758331163615"></a><a name="p7758331163615"></a>query_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.1.4.1.2 "><p id="p1539104464813"><a name="p1539104464813"></a><a name="p1539104464813"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="63%" headers="mcps1.1.4.1.3 "><p id="p121591542134811"><a name="p121591542134811"></a><a name="p121591542134811"></a>Query statement ID.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   DBE_PERF.standby_statement_history(bool \[, time1, time2\])

    Parameters:  
    **bool only_slow**: determines whether to query only slow SQL statements. The value **true** indicates yes, and the value **false** or **NULL** indicates that all SQL statements are queried.  
    **VARIADIC timestamptz finish_time**: Optional. You can enter a maximum of time1 and time2, indicating the time segment to which **finish_time** of the queried SQL statement belongs.

    Description: Queries full SQL statements on the standby node. The primary node queries full SQL statements using the statement\_history table, while the standby node queries using this function.

    Return type: record, which is the same as that in the statement\_history table.

    >![](public_sys-resources/icon-note.gif) **NOTE**  
    > The value **true** of the first bool parameter indicates that only slow SQL statements are queried, which is equivalent to **select. where is_slow_sql = true;**. The value **false** or **NULL** indicates that all SQL statements are queried, that is, **is_slow_sql** is not filtered.  
    > The two time parameters **time1** and **time2** indicate the time segment to which **finish_time** of the queried SQL statement belongs. They indicate the start time and end time respectively. If **NULL** or no value is entered, there is no limit. The function of **time1** and **time2** is the same as that of **select .. where finish_time between time1 and time2**.  
    > Data on the standby node is not stored in the table, and the index of the **start_time** column does not exist. You are advised to use parameters to search for **finish_time**. The performance is optimized internally. However, if the system time is changed, this function may be inaccurate.
    > The query results are automatically sorted in descending order (from new to old) based on **finish_time**.
    > In addition to the calculation process of the FunctionScan operator, data scanning occupies 16 MB or 32 MB memory as a temporary buffer.
    > The stability level of this function is 'v'.

-   DBE\_PERF.get\_wlm\_controlgroup\_ng\_config\(\)

    Description: Collects information about all Cgroups in the database. After a cluster is created, by default, you must have the  **monadmin**  permission to query this function.

    Return type: record

-   DBE\_PERF.get\_wlm\_user\_resource\_runtime\(\)

    Description: Displays the resource usage of all users. This parameter is valid only when  **use\_workload\_manager**  is set to  **on**. After a cluster is created, by default, you must have the  **monadmin**  permission to query this function.

    Return type: record

-   gs\_wlm\_user\_resource\_info\(name text\)

    Description: Queries for a user's resource quota and resource usage. Common users can query only their own information. Administrators can query information about all users.

    Return type: record

-   create\_wlm\_instance\_statistics\_info

    Description: Saves the historical monitoring data of the current instance persistently.

    Parameter: nan

    Return type: integer

-   gs\_session\_memory

    Description: Collects statistics about memory usage at the session level in the unit of MB, including all the memory allocated to Postgres and Stream threads on DNs for tasks currently executed by users.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If  **enable\_memory\_limit=off**, this function cannot be used.

    Return type: record

    **Table  12**  Return value description

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

    Description: Archives all user resource usage statistics to the  **gs\_wlm\_user\_resource\_history**  system catalog.

    Return type: record

-   create\_wlm\_operator\_info\(int flag\)

    Description: Clears top SQL operator-level statistics recorded in the current memory. If the input parameter is greater than 0, the information is archived to  **gs\_wlm\_operator\_info**  and  **gs\_wlm\_ec\_operator\_info**. Otherwise, the information is not archived. Only users with the  **sysadmin**  permission can execute this function.

    Return type: int
