# Handling Import Errors<a name="EN-US_TOPIC_0000001092778597"></a>

## Scenarios<a name="en-us_topic_0117407722_s5bc517f6771b4e53b45ed36b7d50db7d"></a>

Handle errors that occurred during data import.

## Querying Error Information<a name="en-us_topic_0117407722_s7ab6ff0b3b9342d1a61466eba3b252b8"></a>

Errors that occur when data is imported are divided into data format errors and non-data format errors.

-   Data format errors

    When creating a foreign table, specify  **LOG INTO **_error\_table\_name_. Data format errors during data import will be written into the specified table. You can run the following SQL statement to query error details:

    ```
    openGauss=# SELECT * FROM error_table_name;
    ```

    [Table 1](#en-us_topic_0117407722_taed071c5571f4f9a834bdacaf251bac5)  lists the columns of the  _error\_table\_name_  table.

    **Table  1**  Columns in the error information table

    <a name="en-us_topic_0117407722_taed071c5571f4f9a834bdacaf251bac5"></a>
    <table><thead align="left"><tr id="en-us_topic_0117407722_ra70e13325bd84266a5b2385c674cd711"><th class="cellrowborder" valign="top" width="19.23807619238076%" id="mcps1.2.4.1.1"><p id="en-us_topic_0117407722_a7986653efd2040059c2ac570076b0917"><a name="en-us_topic_0117407722_a7986653efd2040059c2ac570076b0917"></a><a name="en-us_topic_0117407722_a7986653efd2040059c2ac570076b0917"></a>Column Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.706629337066296%" id="mcps1.2.4.1.2"><p id="en-us_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"><a name="en-us_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"></a><a name="en-us_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="47.05529447055295%" id="mcps1.2.4.1.3"><p id="en-us_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"><a name="en-us_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"></a><a name="en-us_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0117407722_r7478cf6bc54a4c57881142746076bd5a"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"><a name="en-us_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"></a><a name="en-us_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"></a>nodeid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a3708ed7e91d641379904285d13124e86"><a name="en-us_topic_0117407722_a3708ed7e91d641379904285d13124e86"></a><a name="en-us_topic_0117407722_a3708ed7e91d641379904285d13124e86"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"><a name="en-us_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"></a><a name="en-us_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"></a>ID of the node where an error is reported</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_r26b3cbdf5751475ca4e1cc197eac600b"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"><a name="en-us_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"></a><a name="en-us_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"></a>begintime</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"><a name="en-us_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"></a><a name="en-us_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_af766558626e4419db512929027bbf7e6"><a name="en-us_topic_0117407722_af766558626e4419db512929027bbf7e6"></a><a name="en-us_topic_0117407722_af766558626e4419db512929027bbf7e6"></a>Time when a data format error was reported</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_rddf476c430c4461694dcd788218ba172"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a76e2467afba3429888585b18bae39db8"><a name="en-us_topic_0117407722_a76e2467afba3429888585b18bae39db8"></a><a name="en-us_topic_0117407722_a76e2467afba3429888585b18bae39db8"></a>filename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"><a name="en-us_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"></a><a name="en-us_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"></a>character varying</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"><a name="en-us_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"></a><a name="en-us_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"></a>Name of the source data file where a data format error occurs</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_rb5970acdf622437497bea40c7f57b26d"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"><a name="en-us_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"></a><a name="en-us_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"></a>rownum</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"><a name="en-us_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"></a><a name="en-us_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"></a>numeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"><a name="en-us_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"></a><a name="en-us_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"></a>Number of the row where a data format error occurs in a source data file</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_rb5eb7002810e49c5b75d1014c2489124"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a566c51c173eb482abde2ed614536296c"><a name="en-us_topic_0117407722_a566c51c173eb482abde2ed614536296c"></a><a name="en-us_topic_0117407722_a566c51c173eb482abde2ed614536296c"></a>rawrecord</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"><a name="en-us_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"></a><a name="en-us_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"><a name="en-us_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"></a><a name="en-us_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"></a>Raw record of a data format error in the source data file</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_r1400903fda304bb78340b44a6f13f01c"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"><a name="en-us_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"></a><a name="en-us_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"></a>detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a29a968f32327444ab285f44509145e73"><a name="en-us_topic_0117407722_a29a968f32327444ab285f44509145e73"></a><a name="en-us_topic_0117407722_a29a968f32327444ab285f44509145e73"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_af634b77308454f708e7822dcf6a04136"><a name="en-us_topic_0117407722_af634b77308454f708e7822dcf6a04136"></a><a name="en-us_topic_0117407722_af634b77308454f708e7822dcf6a04136"></a>Error details</p>
    </td>
    </tr>
    </tbody>
    </table>


-   Non-data format errors

    A non-data format error leads to the failure of an entire data import task. You can locate and troubleshoot a non-data format error based on the error message displayed during data import.


## Handling Data Import Errors<a name="en-us_topic_0117407722_sde26d311bd8d4620916fb0c82f378512"></a>

Troubleshoot data import errors based on obtained error information and descriptions in the following table.

**Table  2**  Handling data import errors

<a name="en-us_topic_0117407722_table41091116175519"></a>
<table><thead align="left"><tr id="en-us_topic_0117407722_row0113316105513"><th class="cellrowborder" valign="top" width="23%" id="mcps1.2.4.1.1"><p id="en-us_topic_0117407722_p211416163551"><a name="en-us_topic_0117407722_p211416163551"></a><a name="en-us_topic_0117407722_p211416163551"></a>Error Message</p>
</th>
<th class="cellrowborder" valign="top" width="38%" id="mcps1.2.4.1.2"><p id="en-us_topic_0117407722_p19115171685520"><a name="en-us_topic_0117407722_p19115171685520"></a><a name="en-us_topic_0117407722_p19115171685520"></a>Cause</p>
</th>
<th class="cellrowborder" valign="top" width="39%" id="mcps1.2.4.1.3"><p id="en-us_topic_0117407722_p144017275544"><a name="en-us_topic_0117407722_p144017275544"></a><a name="en-us_topic_0117407722_p144017275544"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0117407722_row51178162558"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p2118316125512"><a name="en-us_topic_0117407722_p2118316125512"></a><a name="en-us_topic_0117407722_p2118316125512"></a>missing data for column "r_reason_desc"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><a name="en-us_topic_0117407722_ol18632134115545"></a><a name="en-us_topic_0117407722_ol18632134115545"></a><ol id="en-us_topic_0117407722_ol18632134115545"><li>The number of columns in the source data file is less than that in the foreign table.</li><li>In a TEXT-format source data file, an escape character (for example, \) leads to delimiter or quote mislocation.<p id="en-us_topic_0117407722_p18126141625514"><a name="en-us_topic_0117407722_p18126141625514"></a><a name="en-us_topic_0117407722_p18126141625514"></a>Example: The target table contains three columns, and the following data is imported. The escape character (\) converts the delimiter (|) into the value of the second column, causing the value of the third column to lose.</p>
<pre class="screen" id="en-us_topic_0117407722_screen20128191613554"><a name="en-us_topic_0117407722_screen20128191613554"></a><a name="en-us_topic_0117407722_screen20128191613554"></a>BE|Belgium\|1</pre>
</li></ol>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0117407722_ol176431630185520"></a><a name="en-us_topic_0117407722_ol176431630185520"></a><ol id="en-us_topic_0117407722_ol176431630185520"><li>If an error is reported due to missing columns, perform the following operations:<a name="en-us_topic_0117407722_ul12312111355618"></a><a name="en-us_topic_0117407722_ul12312111355618"></a><ul id="en-us_topic_0117407722_ul12312111355618"><li>Add the value of the <strong id="b865514810166"><a name="b865514810166"></a><a name="b865514810166"></a>r_reason_desc</strong> column to the source data file.</li><li>When creating a foreign table, set the parameter <strong id="b11201713171620"><a name="b11201713171620"></a><a name="b11201713171620"></a>fill_missing_fields</strong> to <strong id="b1220610135169"><a name="b1220610135169"></a><a name="b1220610135169"></a>on</strong>. In this way, if the last column of a row in the source data file is missing, it will be set to <strong id="b938717164169"><a name="b938717164169"></a><a name="b938717164169"></a>NULL</strong> and no error will be reported.</li></ul>
</li><li>Check whether the row where an error is reported contains the escape character (\). If the row contains such a character, you are advised to set the parameter <strong id="b1276515232163"><a name="b1276515232163"></a><a name="b1276515232163"></a>noescaping</strong> to <strong id="b47708234165"><a name="b47708234165"></a><a name="b47708234165"></a>true</strong> when creating a foreign table, indicating that the escape character (\) and the characters following it are not escaped.</li></ol>
</td>
</tr>
<tr id="en-us_topic_0117407722_row19133121613554"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p121343162551"><a name="en-us_topic_0117407722_p121343162551"></a><a name="en-us_topic_0117407722_p121343162551"></a>extra data after last expected column</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p1713631618559"><a name="en-us_topic_0117407722_p1713631618559"></a><a name="en-us_topic_0117407722_p1713631618559"></a>The number of columns in the source data file is greater than that in the foreign table.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0117407722_ul281493110581"></a><a name="en-us_topic_0117407722_ul281493110581"></a><ul id="en-us_topic_0117407722_ul281493110581"><li>Delete extra columns from the source data file.</li><li>When creating a foreign table, set the parameter <strong id="b291143651612"><a name="b291143651612"></a><a name="b291143651612"></a>ignore_extra_data</strong> to <strong id="b89683641615"><a name="b89683641615"></a><a name="b89683641615"></a>on</strong>. In this way, if the number of columns in the source data file is greater than that in the foreign table, the extra columns at the end of rows will not be imported.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0117407722_row191411716155520"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p1614251614556"><a name="en-us_topic_0117407722_p1614251614556"></a><a name="en-us_topic_0117407722_p1614251614556"></a>invalid input syntax for type numeric: "a"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p7143101616554"><a name="en-us_topic_0117407722_p7143101616554"></a><a name="en-us_topic_0117407722_p7143101616554"></a>The data type is incorrect.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p8876141213334"><a name="p8876141213334"></a><a name="p8876141213334"></a>In the source data file, change the data type of the columns to import. If this error information is displayed, change the data type to <strong id="b191481648121618"><a name="b191481648121618"></a><a name="b191481648121618"></a>numeric</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0117407722_row1414517168550"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p201461316105514"><a name="en-us_topic_0117407722_p201461316105514"></a><a name="en-us_topic_0117407722_p201461316105514"></a>null value in column "staff_id" violates not-null constraint</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p214716161550"><a name="en-us_topic_0117407722_p214716161550"></a><a name="en-us_topic_0117407722_p214716161550"></a>The not-null constraint is violated.</p>
<p id="en-us_topic_0117407722_p101481616145511"><a name="en-us_topic_0117407722_p101481616145511"></a><a name="en-us_topic_0117407722_p101481616145511"></a></p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p15281911103315"><a name="p15281911103315"></a><a name="p15281911103315"></a>In the source data file, add values to the specified columns. If this error information is displayed, add values to the <strong id="b2093410321716"><a name="b2093410321716"></a><a name="b2093410321716"></a>staff_id</strong> column.</p>
</td>
</tr>
<tr id="en-us_topic_0117407722_row91497166551"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p191508162559"><a name="en-us_topic_0117407722_p191508162559"></a><a name="en-us_topic_0117407722_p191508162559"></a>duplicate key value violates unique constraint "reg_id_pk"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p8152916105514"><a name="en-us_topic_0117407722_p8152916105514"></a><a name="en-us_topic_0117407722_p8152916105514"></a>The unique constraint is violated.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0117407722_ul88724019590"></a><a name="en-us_topic_0117407722_ul88724019590"></a><ul id="en-us_topic_0117407722_ul88724019590"><li>Delete duplicate rows from the source data file.</li><li>Run the <strong id="b7837796175"><a name="b7837796175"></a><a name="b7837796175"></a>SELECT</strong> statement with the <strong id="b14842149181711"><a name="b14842149181711"></a><a name="b14842149181711"></a>DISTINCT</strong> keyword to ensure that all imported rows are unique.<a name="en-us_topic_0117407722_screen29084012599"></a><a name="en-us_topic_0117407722_screen29084012599"></a><pre class="screen" codetype="Sql" id="en-us_topic_0117407722_screen29084012599"><strong id="en-us_topic_0117407722_b159054011592"><a name="en-us_topic_0117407722_b159054011592"></a><a name="en-us_topic_0117407722_b159054011592"></a><span id="text15620103516468"><a name="text15620103516468"></a><a name="text15620103516468"></a>openGauss=# </span>INSERT INTO</strong> reasons <strong id="en-us_topic_0117407722_b1891184014592"><a name="en-us_topic_0117407722_b1891184014592"></a><a name="en-us_topic_0117407722_b1891184014592"></a>SELECT DISTINCT * FROM</strong> foreign_tpcds_reasons;</pre>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0117407722_row7159216135515"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p11631116155519"><a name="en-us_topic_0117407722_p11631116155519"></a><a name="en-us_topic_0117407722_p11631116155519"></a>value too long for type character varying(16)</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p1316417167558"><a name="en-us_topic_0117407722_p1316417167558"></a><a name="en-us_topic_0117407722_p1316417167558"></a>The column length exceeds the upper limit.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p1732851553315"><a name="p1732851553315"></a><a name="p1732851553315"></a>In the source data file, change the column length. If this error information is displayed, reduce the column length to no greater than 16 bytes (VARCHAR2).</p>
</td>
</tr>
</tbody>
</table>

