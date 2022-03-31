# MOT Error Messages<a name="EN-US_TOPIC_0289900897"></a>

Errors may be caused by multiple scenarios. All errors are recorded in the log files of the database server. In addition, user-related errors are returned to the user as part of the response to a query, transaction, or stored procedure execution, or database management operation.

-   Errors reported in server logs include functions, entities, contexts, error messages, error description, and severity.
-   Errors reported to users are translated into standard PostgreSQL error codes, which may consist of MOT-specific messages and descriptions.

The error messages, description, and codes are described as follows. Error codes are internal codes and are not recorded or returned to users.

## Errors Written to the Log File<a name="en-us_topic_0283136810_en-us_topic_0280525150_section2660313"></a>

All errors are recorded in the log files of the database server. The following lists the errors that are written to the database server log file but are not returned to users. The log file is stored in the  **data**  folder and named  **postgresql-DATE-TIME.log**.

**Table  1**  Errors written to the log file

<a name="en-us_topic_0283136810_en-us_topic_0280525150_table24390887"></a>
<table><thead align="left"><tr id="en-us_topic_0283136810_en-us_topic_0280525150_row39145392"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136810_en-us_topic_0280525150_p16660147"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p16660147"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p16660147"></a>Log Message</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7294704"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7294704"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7294704"></a>Internal Error Code</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136810_en-us_topic_0280525150_row54000141"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p11935282"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p11935282"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p11935282"></a>Error code denoting success</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p27233800"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p27233800"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p27233800"></a>MOT_NO_ERROR 0</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row43777613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p56325742"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56325742"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56325742"></a>Out of memory</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p66091285"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66091285"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66091285"></a>MOT_ERROR_OOM 1</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row57950653"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p63491301"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63491301"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63491301"></a>Invalid configuration</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p42521733"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42521733"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42521733"></a>MOT_ERROR_INVALID_CFG 2</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row47151282"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p61157498"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p61157498"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p61157498"></a>Invalid argument passed to function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p54810319"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p54810319"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p54810319"></a>MOT_ERROR_INVALID_ARG 3</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row23530825"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p26948700"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p26948700"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p26948700"></a>System call failed</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p35361071"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p35361071"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p35361071"></a>MOT_ERROR_SYSTEM_FAILURE 4</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row49814184"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p8417086"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8417086"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8417086"></a>Resource limit reached</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p10695402"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10695402"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10695402"></a>MOT_ERROR_RESOURCE_LIMIT 5</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row29149754"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p12319903"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12319903"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12319903"></a>Internal logic error</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p58388109"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58388109"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58388109"></a>MOT_ERROR_INTERNAL 6</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row55730934"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p17911811"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17911811"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17911811"></a>Resource unavailable</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p41570605"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p41570605"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p41570605"></a>MOT_ERROR_RESOURCE_UNAVAILABLE 7</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row38591128"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p38873655"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38873655"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38873655"></a>Unique violation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p61758375"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p61758375"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p61758375"></a>MOT_ERROR_UNIQUE_VIOLATION 8</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row18954469"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p58917009"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58917009"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58917009"></a>Invalid memory allocation size</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7548385"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7548385"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7548385"></a>MOT_ERROR_INVALID_MEMORY_SIZE 9</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row826602"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p66954796"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66954796"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66954796"></a>Index out of range</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p54629382"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p54629382"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p54629382"></a>MOT_ERROR_INDEX_OUT_OF_RANGE 10</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row21902396"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p29263662"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p29263662"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p29263662"></a>Error code unknown</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p21546445"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p21546445"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p21546445"></a>MOT_ERROR_INVALID_STATE 11</p>
</td>
</tr>
</tbody>
</table>

## Error Returned to Users<a name="en-us_topic_0283136810_en-us_topic_0280525150_section23942818"></a>

The following lists the errors that are written to the database server log file and returned to users.

MOT uses return codes \(RCs\) to return the Postgres standard error codes to the encapsulation. Some RCs may send error messages to users who are interacting with the database.

MOT internally returns the Postgres codes \(see below\) to the database package, and the database encapsulation reacts to the codes according to the standard Postgres behavior.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the prompt information,  **%s**,  **%u**, and  **%lu**  indicate the corresponding error information \(such as query, table name, or other information\).
>-   **%s**: character string
>-   **%u**: number
>-   **%lu**: number

**Table  2**  Errors returned to users and recorded in the log file

<a name="en-us_topic_0283136810_en-us_topic_0280525150_table9981963"></a>
<table><thead align="left"><tr id="en-us_topic_0283136810_en-us_topic_0280525150_row30972475"><th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136810_en-us_topic_0280525150_p25742575"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p25742575"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p25742575"></a>Short/Long Description Returned to Users</p>
</th>
<th class="cellrowborder" valign="top" width="30.61306130613061%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136810_en-us_topic_0280525150_p4773831"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4773831"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4773831"></a>Postgres Code</p>
</th>
<th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136810_en-us_topic_0280525150_p51136044"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p51136044"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p51136044"></a>Internal Error Code</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136810_en-us_topic_0280525150_row48378885"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p26375611"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p26375611"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p26375611"></a>Success.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p36053908"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p36053908"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p36053908"></a>Denotes success</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p34685407"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34685407"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34685407"></a>ERRCODE_SUCCESSFUL_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p43733211"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p43733211"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p43733211"></a>COMPLETION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p52729239"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p52729239"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p52729239"></a>RC_OK = 0</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row4801103"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p53345092"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p53345092"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p53345092"></a>Failure</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p10343786"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10343786"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10343786"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p32540371"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p32540371"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p32540371"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p18524400"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p18524400"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p18524400"></a>RC_ERROR = 1</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row32501878"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p15406461"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p15406461"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p15406461"></a>Unknown error has occurred.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p4440424"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4440424"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4440424"></a>Denotes aborted operation.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p24130067"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24130067"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24130067"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p8378386"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8378386"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8378386"></a>RC_ABORT</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row8296613"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p937022"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p937022"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p937022"></a>Column definition of %s is not supported.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p8433198"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8433198"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8433198"></a>Column type %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p12000410"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12000410"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12000410"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p32509179"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p32509179"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p32509179"></a>RC_UNSUPPORTED_COL_TYPE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row24147163"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p9763206"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p9763206"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p9763206"></a>Column definition of %s is not supported.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p20759995"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p20759995"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p20759995"></a>Column type Array of %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p3838058"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p3838058"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p3838058"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p42447277"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42447277"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42447277"></a>RC_UNSUPPORTED_COL_TYPE_ARR</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row46481178"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p6879063"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p6879063"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p6879063"></a>Column size %d exceeds max tuple size %u.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p61911569"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p61911569"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p61911569"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p48781186"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48781186"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48781186"></a>ERRCODE_FEATURE_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p58961959"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58961959"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58961959"></a>RC_EXCEEDS_MAX_ROW_SIZE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row60895584"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p33595311"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33595311"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33595311"></a>Column name %s exceeds max name size %u.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p33922351"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33922351"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33922351"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p63355873"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63355873"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63355873"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p31552104"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p31552104"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p31552104"></a>RC_COL_NAME_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row15533487"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p50252944"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p50252944"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p50252944"></a>Column size %d exceeds max size %u.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p49623316"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p49623316"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p49623316"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p60065673"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p60065673"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p60065673"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p33481330"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33481330"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33481330"></a>RC_COL_SIZE_INVLALID</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row32896518"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p47372281"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p47372281"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p47372281"></a>Cannot create table.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p23697346"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p23697346"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p23697346"></a>Cannot add column %s; as the number of declared columns exceeds the maximum declared columns.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p40436856"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p40436856"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p40436856"></a>ERRCODE_FEATURE_NOT_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p28387392"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28387392"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28387392"></a>SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p17677412"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17677412"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17677412"></a>RC_TABLE_EXCEEDS_MAX_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p24878987"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24878987"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24878987"></a>DECLARED_COLS</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row22584297"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p17388791"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17388791"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17388791"></a>Cannot create index.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p22281392"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p22281392"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p22281392"></a>Total column size is greater than maximum index size %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p59962333"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p59962333"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p59962333"></a>ERRCODE_FDW_KEY_SIZE_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p2790091"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p2790091"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p2790091"></a>EXCEEDS_MAX_ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p24670818"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24670818"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24670818"></a>RC_INDEX_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row20710773"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p66959920"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66959920"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66959920"></a>Cannot create index.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p65768369"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p65768369"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p65768369"></a>Total number of indexes for table %s is greater than the maximum number of indexes allowed %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p25637690"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p25637690"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p25637690"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p29412619"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p29412619"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p29412619"></a>INDEXES</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p33611899"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33611899"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33611899"></a>RC_TABLE_EXCEEDS_MAX_INDEXES</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row34071636"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p8339126"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8339126"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8339126"></a>Cannot execute statement.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p7943272"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7943272"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7943272"></a>Maximum number of DDLs per transaction reached the maximum %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p39425334"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p39425334"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p39425334"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p19283691"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p19283691"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p19283691"></a>DDL_CHANGES_IN_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p39335496"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p39335496"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p39335496"></a>TRANSACTION_NOT_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p18475151"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p18475151"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p18475151"></a>ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p20092226"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p20092226"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p20092226"></a>RC_TXN_EXCEEDS_MAX_DDLS</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row46612314"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p17501098"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17501098"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17501098"></a>Unique constraint violation</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p23292156"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p23292156"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p23292156"></a>Duplicate key value violates unique constraint \"%s\"".</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p8302814"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8302814"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8302814"></a>Key %s already exists.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p1439327"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p1439327"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p1439327"></a>ERRCODE_UNIQUE_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p12953943"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12953943"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12953943"></a>VIOLATION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p42636469"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42636469"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42636469"></a>RC_UNIQUE_VIOLATION</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row48183909"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p10582588"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10582588"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10582588"></a>Table \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p51883262"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p51883262"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p51883262"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p41794709"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p41794709"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p41794709"></a>RC_TABLE_NOT_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row40608068"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p919221"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p919221"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p919221"></a>Index \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7348078"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7348078"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7348078"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p58323480"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58323480"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58323480"></a>RC_INDEX_NOT_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row55149279"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p37906613"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p37906613"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p37906613"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p50536783"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p50536783"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p50536783"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p66947605"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66947605"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p66947605"></a>RC_LOCAL_ROW_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row65657541"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p16660601"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p16660601"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p16660601"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7331470"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7331470"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7331470"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p56978220"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56978220"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56978220"></a>RC_LOCAL_ROW_NOT_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row43041933"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p63844554"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63844554"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63844554"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p4026404"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4026404"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4026404"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p57703298"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57703298"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57703298"></a>RC_LOCAL_ROW_DELETED</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row49567638"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p55555766"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p55555766"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p55555766"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p3723215"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p3723215"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p3723215"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p33144968"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33144968"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33144968"></a>RC_INSERT_ON_EXIST</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row29869256"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p3490644"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p3490644"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p3490644"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p14306773"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p14306773"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p14306773"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p17998003"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17998003"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17998003"></a>RC_INDEX_RETRY_INSERT</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row27764304"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p34316164"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34316164"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34316164"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p28145863"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28145863"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28145863"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p65222468"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p65222468"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p65222468"></a>RC_INDEX_DELETE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row50131303"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p34103723"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34103723"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34103723"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p10938172"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10938172"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p10938172"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p13576705"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13576705"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13576705"></a>RC_LOCAL_ROW_NOT_VISIBLE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row55081482"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p32415097"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p32415097"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p32415097"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p8377233"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8377233"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p8377233"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7467257"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7467257"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7467257"></a>RC_MEMORY_ALLOCATION_ERROR</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row96450"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7812518"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7812518"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7812518"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p28834222"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28834222"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28834222"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p53870659"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p53870659"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p53870659"></a>RC_ILLEGAL_ROW_STATE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row15073885"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p13025200"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13025200"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13025200"></a>Null constraint violated.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p50117938"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p50117938"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p50117938"></a>NULL value cannot be inserted into non-null column %s at table %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p33021148"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33021148"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p33021148"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p57467314"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57467314"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57467314"></a>RC_NULL_VIOLATION</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row47443786"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p17741454"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17741454"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p17741454"></a>Critical error.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p25455365"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p25455365"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p25455365"></a>Critical error: %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p48618705"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48618705"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48618705"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p45801066"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p45801066"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p45801066"></a>RC_PANIC</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row9556415"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p35872117"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p35872117"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p35872117"></a>A checkpoint is in progress – cannot truncate table.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p19960364"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p19960364"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p19960364"></a>ERRCODE_FDW_OPERATION_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p6176779"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p6176779"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p6176779"></a>RC_NA</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row55591018"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p6578585"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p6578585"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p6578585"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p63103365"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63103365"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63103365"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p11098901"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p11098901"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p11098901"></a>RC_MAX_VALUE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row32781246"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p38035264"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38035264"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38035264"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p60957530"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p60957530"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p60957530"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p38612917"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38612917"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38612917"></a>ERRCODE_CONFIG_FILE_ERROR</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row11971938"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p30202945"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p30202945"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p30202945"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p30519476"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p30519476"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p30519476"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p56158500"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56158500"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56158500"></a>ERRCODE_INVALID_TABLE_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p35664454"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p35664454"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p35664454"></a>DEFINITION</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row52544632"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p28256793"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28256793"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28256793"></a>Memory engine – Failed to perform commit prepared.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7098862"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7098862"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7098862"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p38136927"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38136927"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p38136927"></a>ERRCODE_INVALID_TRANSACTION_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p7688030"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7688030"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7688030"></a>STATE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row2083414"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p34538808"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34538808"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p34538808"></a>Invalid option &lt;option name&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p46180079"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p46180079"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p46180079"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p49598947"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p49598947"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p49598947"></a>ERRCODE_FDW_INVALID_OPTION_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p43737343"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p43737343"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p43737343"></a>NAME</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row58091771"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7813024"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7813024"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7813024"></a>Invalid memory allocation request size.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p28875193"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28875193"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p28875193"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p57189295"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57189295"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57189295"></a>ERRCODE_INVALID_PARAMETER_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p44941608"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p44941608"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p44941608"></a>VALUE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row1821289"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p13306703"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13306703"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13306703"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p4101195"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4101195"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4101195"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p63761346"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63761346"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p63761346"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p36981208"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p36981208"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p36981208"></a>MEMORY</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row64395422"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p48646727"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48646727"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48646727"></a>Could not serialize access due to concurrent update.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p48070820"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48070820"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p48070820"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p1422366"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p1422366"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p1422366"></a>ERRCODE_T_R_SERIALIZATION_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p12801297"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12801297"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p12801297"></a>FAILURE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row48102812"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p4013703"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4013703"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4013703"></a>Alter table operation is not supported for memory table.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p36123328"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p36123328"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p36123328"></a>Cannot create MOT tables while incremental checkpoint is enabled.</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p56674502"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56674502"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p56674502"></a>Re-index is not supported for memory tables.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p27231938"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p27231938"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p27231938"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p58303330"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58303330"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p58303330"></a>ERRCODE_FDW_OPERATION_NOT_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p54967923"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p54967923"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p54967923"></a>SUPPORTED</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row24949262"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p7624367"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7624367"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p7624367"></a>Allocation of table metadata failed.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p13594029"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13594029"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p13594029"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p27374575"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p27374575"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p27374575"></a>ERRCODE_OUT_OF_MEMORY</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row45044590"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p24733137"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24733137"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p24733137"></a>Database with OID %u does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p57227118"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57227118"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p57227118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p4884971"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4884971"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4884971"></a>ERRCODE_UNDEFINED_DATABASE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row43964741"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p4374262"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4374262"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p4374262"></a>Value exceeds maximum precision: %d.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p18770907"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p18770907"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p18770907"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p44048476"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p44048476"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p44048476"></a>ERRCODE_NUMERIC_VALUE_OUT_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p60891971"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p60891971"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p60891971"></a>OF_RANGE</p>
</td>
</tr>
<tr id="en-us_topic_0283136810_en-us_topic_0280525150_row11156835"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p31288405"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p31288405"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p31288405"></a>You have reached a maximum logical capacity %lu of allowed %lu.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p51332892"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p51332892"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p51332892"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136810_en-us_topic_0280525150_p64323616"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p64323616"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p64323616"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="en-us_topic_0283136810_en-us_topic_0280525150_p42041636"><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42041636"></a><a name="en-us_topic_0283136810_en-us_topic_0280525150_p42041636"></a>MEMORY</p>
</td>
</tr>
</tbody>
</table>

