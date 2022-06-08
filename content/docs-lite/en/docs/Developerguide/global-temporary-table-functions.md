# Global Temporary Table Functions<a name="EN-US_TOPIC_0289900393"></a>

-   pg\_get\_gtt\_relstats\(relOid\)

    Description: Displays basic information about a global temporary table specified by the current session.

    Parameter: OID of the global temporary table

    Return type: record

    Example:

    ```
    openGauss=# select * from pg_get_gtt_relstats(74069);
     relfilenode | relpages | reltuples | relallvisible | relfrozenxid | relminmxid 
    -------------+----------+-----------+---------------+--------------+------------
           74069 |       58 |     13000 |             0 |        11151 |          0
    (1 row)
    ```


-   pg\_get\_gtt\_statistics\(relOid, attnum, ''::text\)

    Description: Displays statistics about a single column in a global temporary table specified by the current session.

    Parameter: OID and the  **attnum**  attribute of the global temporary table

    Return type: record

    Example:

    ```
    openGauss=# select * from pg_get_gtt_statistics(74069,1,''::text);
     starelid | starelkind | staattnum | stainherit | stanullfrac | stawidth | stadistinct | stakind1 | stakind2 | stakind3 | stakind4 | stakind5 | staop1 | staop2 | staop3 | staop4 | staop5 | stanumbers1 | stanumbers2 | stanumbers3 | stanu
    mbers4 | stanumbers5 |                                                                                                                                                                                                                      
                                              stavalues1                                                                                                                                                                                        
                                                                            | stavalues2 | stavalues3 | stavalues4 | stavalues5 | stadndistinct | staextinfo 
    ----------+------------+-----------+------------+-------------+----------+-------------+----------+----------+----------+----------+----------+--------+--------+--------+--------+--------+-------------+-------------+-------------+------
    -------+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------+------------+------------+------------+------------+---------------+------------
        74069 | c          |         1 | f          |           0 |        4 |          -1 |        2 |        3 |        0 |        0 |        0 |     97 |     97 |      0 |      0 |      0 |             | {1}         |             |      
           |             | {1,130,260,390,520,650,780,910,1040,1170,1300,1430,1560,1690,1820,1950,2080,2210,2340,2470,2600,2730,2860,2990,3120,3250,3380,3510,3640,3770,3900,4030,4160,4290,4420,4550,4680,4810,4940,5070,5200,5330,5460,5590,57
    20,5850,5980,6110,6240,6370,6500,6630,6760,6890,7020,7150,7280,7410,7540,7670,7800,7930,8060,8190,8320,8450,8580,8710,8840,8970,9100,9230,9360,9490,9620,9750,9880,10010,10140,10270,10400,10530,10660,10790,10920,11050,11180,11310,11440,1
    1570,11700,11830,11960,12090,12220,12350,12480,12610,12740,12870,13000} |            |            |            |            |             0 | 
    (1 row)
    ```


-   pg\_gtt\_attached\_pid\(relOid\)

    Description: Displays PIDs of all threads that are using the specified global temporary table.

    Parameter: OID of the global temporary table

    Return type: record

    Example:

    ```
    openGauss=# select * from pg_gtt_attached_pid(74069);
     relid |       pid       
    -------+-----------------
     74069 | 139648170456832
     74069 | 139648123270912
    (2 rows)
    ```


-   dbe\_perf.get\_global\_full\_sql\_by\_timestamp\(start\_timestamp timestamp, end\_timestamp timestamp\)

    Description: Obtains full SQL information at the instance level.

    Return type: record

    **Table  1**  dbe\_perf.get\_global\_full\_sql\_by\_timestamp parameter description

    <a name="table173628271511"></a>
    <table><thead align="left"><tr id="row2036210271054"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p63621027457"><a name="p63621027457"></a><a name="p63621027457"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="22.06220622062206%" id="mcps1.2.4.1.2"><p id="p3362327156"><a name="p3362327156"></a><a name="p3362327156"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="57.69576957695769%" id="mcps1.2.4.1.3"><p id="p13362627452"><a name="p13362627452"></a><a name="p13362627452"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row173625271356"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p638719511858"><a name="p638719511858"></a><a name="p638719511858"></a>start_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p152934101864"><a name="p152934101864"></a><a name="p152934101864"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1376712315612"><a name="p1376712315612"></a><a name="p1376712315612"></a>Start point of the SQL start time range.</p>
    </td>
    </tr>
    <tr id="row17363142719512"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p129832059655"><a name="p129832059655"></a><a name="p129832059655"></a>end_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p14382011366"><a name="p14382011366"></a><a name="p14382011366"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1736312720519"><a name="p1736312720519"></a><a name="p1736312720519"></a>End point of the SQL start time range.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   dbe\_perf.get\_global\_slow\_sql\_by\_timestamp\(start\_timestamp timestamp, end\_timestamp timestamp\)

    Description: Obtains slow SQL information at the instance level.

    Return type: record

    **Table  2**  dbe\_perf.get\_global\_slow\_sql\_by\_timestamp parameter description

    <a name="table152133591871"></a>
    <table><thead align="left"><tr id="row72147595714"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p1921419591570"><a name="p1921419591570"></a><a name="p1921419591570"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="22.06220622062206%" id="mcps1.2.4.1.2"><p id="p221415916720"><a name="p221415916720"></a><a name="p221415916720"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="57.69576957695769%" id="mcps1.2.4.1.3"><p id="p32140592071"><a name="p32140592071"></a><a name="p32140592071"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row3214185916710"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p1721455912713"><a name="p1721455912713"></a><a name="p1721455912713"></a>start_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p12143595711"><a name="p12143595711"></a><a name="p12143595711"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1721455914713"><a name="p1721455914713"></a><a name="p1721455914713"></a>Start point of the SQL start time range.</p>
    </td>
    </tr>
    <tr id="row321413592710"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p162141759672"><a name="p162141759672"></a><a name="p162141759672"></a>end_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p202141559372"><a name="p202141559372"></a><a name="p202141559372"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1421455917712"><a name="p1421455917712"></a><a name="p1421455917712"></a>End point of the SQL start time range.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   statement\_detail\_decode\(detail text, format text, pretty bool\)

    Parses the details column in a full or slow SQL statement.

    **Table  3**  statement\_detail\_decode parameter description

    <a name="table9745177191215"></a>
    <table><thead align="left"><tr id="row127451717124"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p1974687151213"><a name="p1974687151213"></a><a name="p1974687151213"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="22.06220622062206%" id="mcps1.2.4.1.2"><p id="p147461271125"><a name="p147461271125"></a><a name="p147461271125"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="57.69576957695769%" id="mcps1.2.4.1.3"><p id="p197461975128"><a name="p197461975128"></a><a name="p197461975128"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row167467711212"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p197461379124"><a name="p197461379124"></a><a name="p197461379124"></a>detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p137462712123"><a name="p137462712123"></a><a name="p137462712123"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p138588178133"><a name="p138588178133"></a><a name="p138588178133"></a>Set of events generated by the SQL statement (unreadable).</p>
    </td>
    </tr>
    <tr id="row187462714127"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p1674617710129"><a name="p1674617710129"></a><a name="p1674617710129"></a>format</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p17746137131219"><a name="p17746137131219"></a><a name="p17746137131219"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p246504413137"><a name="p246504413137"></a><a name="p246504413137"></a>Parsing output format. The value is <strong id="b15123151115"><a name="b15123151115"></a><a name="b15123151115"></a>plaintext</strong> or <strong id="b279961781114"><a name="b279961781114"></a><a name="b279961781114"></a>json</strong>.</p>
    </td>
    </tr>
    <tr id="row17254145010126"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p225445020123"><a name="p225445020123"></a><a name="p225445020123"></a>pretty</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p1025485020129"><a name="p1025485020129"></a><a name="p1025485020129"></a>bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><div class="p" id="p7905125312149"><a name="p7905125312149"></a><a name="p7905125312149"></a>Whether to display the text in pretty format when <strong id="b4723918191118"><a name="b4723918191118"></a><a name="b4723918191118"></a>format</strong> is set to <strong id="b772312186118"><a name="b772312186118"></a><a name="b772312186118"></a>plaintext</strong>. The options are as follows:<a name="ul5736124153213"></a><a name="ul5736124153213"></a><ul id="ul5736124153213"><li>The value <strong id="b58714213111"><a name="b58714213111"></a><a name="b58714213111"></a>true </strong>indicates that events are separated by <strong id="b1187122151116"><a name="b1187122151116"></a><a name="b1187122151116"></a>\n</strong>.</li><li>The value <strong id="b4271143317114"><a name="b4271143317114"></a><a name="b4271143317114"></a>false </strong>indicates that events are separated by commas (,).</li></ul>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_list\_gtt\_relfrozenxids\(\)

    Description: Displays the frozen XID of each session.

    If the value of  **pid**  is  **0**, the earliest frozen XID of all sessions is displayed.

    Parameter: none

    Return type: record

    Example:

    ```
    openGauss=# select * from pg_list_gtt_relfrozenxids();
           pid       | relfrozenxid 
    -----------------+--------------
     139648123270912 |        11151
     139648170456832 |        11155
                   0 |        11151
    (3 rows)
    ```


