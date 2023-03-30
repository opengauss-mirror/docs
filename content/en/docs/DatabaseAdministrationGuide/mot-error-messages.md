# MOT Error Messages<a name="EN-US_TOPIC_0270171505"></a>

Errors may be caused by a variety of scenarios. All errors are logged in the database server log file. In addition, user-related errors are returned to the user as part of the response to the query, transaction or stored procedure execution or to database administration action.

-   Errors reported in the Server log include – Function, Entity, Context, Error message, Error description and Severity.
-   Errors reported to users are translated into standard PostgreSQL error codes and may consist of an MOT-specific message and description.

The following lists the error messages, error descriptions and error codes. The error code is actually an internal code and not logged or returned to users.

## Errors Written the Log File<a name="section45534291381"></a>

All errors are logged in the database server log file. The following lists the errors that are written to the database server log file and are  **not**  returned to the user. The log is located in the data folder and named  **postgresql-DATE-TIME.log**.

**Table  1**  Errors Written Only to the Log File

<a name="table35968146"></a>
<table><thead align="left"><tr id="row33503767"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p29450615"><a name="p29450615"></a><a name="p29450615"></a>Message in the Log</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p36689595"><a name="p36689595"></a><a name="p36689595"></a>Error Internal Code</p>
</th>
</tr>
</thead>
<tbody><tr id="row19067212"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p940305"><a name="p940305"></a><a name="p940305"></a>Error code denoting success</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9055858"><a name="p9055858"></a><a name="p9055858"></a>MOT_NO_ERROR 0</p>
</td>
</tr>
<tr id="row14393865"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p25052449"><a name="p25052449"></a><a name="p25052449"></a>Out of memory</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p15982473"><a name="p15982473"></a><a name="p15982473"></a>MOT_ERROR_OOM 1</p>
</td>
</tr>
<tr id="row9624530"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p41389494"><a name="p41389494"></a><a name="p41389494"></a>Invalid configuration</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p64214718"><a name="p64214718"></a><a name="p64214718"></a>MOT_ERROR_INVALID_CFG 2</p>
</td>
</tr>
<tr id="row41061555"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p37651693"><a name="p37651693"></a><a name="p37651693"></a>Invalid argument passed to function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p29888320"><a name="p29888320"></a><a name="p29888320"></a>MOT_ERROR_INVALID_ARG 3</p>
</td>
</tr>
<tr id="row559426"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p45313516"><a name="p45313516"></a><a name="p45313516"></a>System call failed</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p46516162"><a name="p46516162"></a><a name="p46516162"></a>MOT_ERROR_SYSTEM_FAILURE 4</p>
</td>
</tr>
<tr id="row15992282"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p20306462"><a name="p20306462"></a><a name="p20306462"></a>Resource limit reached</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p34210755"><a name="p34210755"></a><a name="p34210755"></a>MOT_ERROR_RESOURCE_LIMIT 5</p>
</td>
</tr>
<tr id="row39461345"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p42252410"><a name="p42252410"></a><a name="p42252410"></a>Internal logic error</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p67002055"><a name="p67002055"></a><a name="p67002055"></a>MOT_ERROR_INTERNAL 6</p>
</td>
</tr>
<tr id="row66147589"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56354492"><a name="p56354492"></a><a name="p56354492"></a>Resource unavailable</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1311131"><a name="p1311131"></a><a name="p1311131"></a>MOT_ERROR_RESOURCE_UNAVAILABLE 7</p>
</td>
</tr>
<tr id="row11800186"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16290985"><a name="p16290985"></a><a name="p16290985"></a>Unique violation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p44501397"><a name="p44501397"></a><a name="p44501397"></a>MOT_ERROR_UNIQUE_VIOLATION 8</p>
</td>
</tr>
<tr id="row64968253"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p27937102"><a name="p27937102"></a><a name="p27937102"></a>Invalid memory allocation size</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p48312784"><a name="p48312784"></a><a name="p48312784"></a>MOT_ERROR_INVALID_MEMORY_SIZE 9</p>
</td>
</tr>
<tr id="row32161874"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p54975040"><a name="p54975040"></a><a name="p54975040"></a>Index out of range</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p23793266"><a name="p23793266"></a><a name="p23793266"></a>MOT_ERROR_INDEX_OUT_OF_RANGE 10</p>
</td>
</tr>
<tr id="row12812809"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p31204572"><a name="p31204572"></a><a name="p31204572"></a>Error code unknown</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p44542441"><a name="p44542441"></a><a name="p44542441"></a>MOT_ERROR_INVALID_STATE 11</p>
</td>
</tr>
</tbody>
</table>

## Errors Returned to the User<a name="section36801514389"></a>

The following lists the errors that are written to the database server log file and are returned to the user.

MOT returns PG standard error codes to the envelope using a Return Code \(RC\). Some RCs cause the generation of an error message to the user who is interacting with the database.

The PG code \(described below\) is returned internally by MOT to the database envelope, which reacts to it according to standard PG behavior.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>%s, %u and %lu in the message are replaced by relevant error information, such as query, table name or another information.
>-   %s – String
>-   %u – Number
>-   %lu – Number

**Table  2**  Errors Returned to the User and Logged to the Log File

<a name="table22991320"></a>
<table><thead align="left"><tr id="row49214446"><th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.1"><p id="p26947222"><a name="p26947222"></a><a name="p26947222"></a>Short and Long Description Returned to the User</p>
</th>
<th class="cellrowborder" valign="top" width="30.61306130613061%" id="mcps1.2.4.1.2"><p id="p35241358"><a name="p35241358"></a><a name="p35241358"></a>PG Code</p>
</th>
<th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.3"><p id="p35977726"><a name="p35977726"></a><a name="p35977726"></a>Internal Error Code</p>
</th>
</tr>
</thead>
<tbody><tr id="row28514703"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p27989608"><a name="p27989608"></a><a name="p27989608"></a>Success.</p>
<p id="p50579888"><a name="p50579888"></a><a name="p50579888"></a>Denotes success</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p3330249"><a name="p3330249"></a><a name="p3330249"></a>ERRCODE_SUCCESSFUL_COMPLETIONCOMPLETION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p11832760"><a name="p11832760"></a><a name="p11832760"></a>RC_OK = 0</p>
</td>
</tr>
<tr id="row39385977"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p36147551"><a name="p36147551"></a><a name="p36147551"></a>Failure</p>
<p id="p56892511"><a name="p56892511"></a><a name="p56892511"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p44890675"><a name="p44890675"></a><a name="p44890675"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p12266088"><a name="p12266088"></a><a name="p12266088"></a>RC_ERROR = 1</p>
</td>
</tr>
<tr id="row43285934"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p16499799"><a name="p16499799"></a><a name="p16499799"></a>Unknown error has occurred.</p>
<p id="p14280468"><a name="p14280468"></a><a name="p14280468"></a>Denotes aborted operation.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p15867226"><a name="p15867226"></a><a name="p15867226"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p10176929"><a name="p10176929"></a><a name="p10176929"></a>RC_ABORT</p>
</td>
</tr>
<tr id="row24483500"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p37006487"><a name="p37006487"></a><a name="p37006487"></a>Column definition of %s is not supported.</p>
<p id="p64622928"><a name="p64622928"></a><a name="p64622928"></a>Column type %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p67074697"><a name="p67074697"></a><a name="p67074697"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p64341346"><a name="p64341346"></a><a name="p64341346"></a>RC_UNSUPPORTED_COL_TYPE</p>
</td>
</tr>
<tr id="row42201202"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p62854174"><a name="p62854174"></a><a name="p62854174"></a>Column definition of %s is not supported.</p>
<p id="p28816661"><a name="p28816661"></a><a name="p28816661"></a>Column type Array of %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p52448191"><a name="p52448191"></a><a name="p52448191"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p20445098"><a name="p20445098"></a><a name="p20445098"></a>RC_UNSUPPORTED_COL_TYPE_ARR</p>
</td>
</tr>
<tr id="row49788159"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p6309102"><a name="p6309102"></a><a name="p6309102"></a>Column size %d exceeds max tuple size %u.</p>
<p id="p56781921"><a name="p56781921"></a><a name="p56781921"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p35932926"><a name="p35932926"></a><a name="p35932926"></a>ERRCODE_FEATURE_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p24885883"><a name="p24885883"></a><a name="p24885883"></a>RC_EXCEEDS_MAX_ROW_SIZE</p>
</td>
</tr>
<tr id="row22646357"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p22415622"><a name="p22415622"></a><a name="p22415622"></a>Column name %s exceeds max name size %u.</p>
<p id="p414006"><a name="p414006"></a><a name="p414006"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p33534532"><a name="p33534532"></a><a name="p33534532"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p31942611"><a name="p31942611"></a><a name="p31942611"></a>RC_COL_NAME_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="row19048051"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p66497125"><a name="p66497125"></a><a name="p66497125"></a>Column size %d exceeds max size %u.</p>
<p id="p61603219"><a name="p61603219"></a><a name="p61603219"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p23804819"><a name="p23804819"></a><a name="p23804819"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p49142196"><a name="p49142196"></a><a name="p49142196"></a>RC_COL_SIZE_INVLALID</p>
</td>
</tr>
<tr id="row39626584"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p55636749"><a name="p55636749"></a><a name="p55636749"></a>Cannot create table.</p>
<p id="p30968695"><a name="p30968695"></a><a name="p30968695"></a>Cannot add column %s; as the number of declared columns exceeds the maximum declared columns.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p25436394"><a name="p25436394"></a><a name="p25436394"></a>ERRCODE_FEATURE_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p21084934"><a name="p21084934"></a><a name="p21084934"></a>RC_TABLE_EXCEEDS_MAX_DECLARED_COLS</p>
</td>
</tr>
<tr id="row30158076"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p26885128"><a name="p26885128"></a><a name="p26885128"></a>Cannot create index.</p>
<p id="p40639560"><a name="p40639560"></a><a name="p40639560"></a>Total column size is greater than maximum index size %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p3470093"><a name="p3470093"></a><a name="p3470093"></a>ERRCODE_FDW_KEY_SIZE_EXCEEDS_MAX_ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p46670388"><a name="p46670388"></a><a name="p46670388"></a>RC_INDEX_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="row17380313"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p65628079"><a name="p65628079"></a><a name="p65628079"></a>Cannot create index.</p>
<p id="p53781803"><a name="p53781803"></a><a name="p53781803"></a>Total number of indexes for table %s is greater than the maximum number of indexes allowed %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p61358777"><a name="p61358777"></a><a name="p61358777"></a>ERRCODE_FDW_TOO_MANY_INDEXES</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p36045397"><a name="p36045397"></a><a name="p36045397"></a>RC_TABLE_EXCEEDS_MAX_INDEXES</p>
</td>
</tr>
<tr id="row55973123"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p37529103"><a name="p37529103"></a><a name="p37529103"></a>Cannot execute statement.</p>
<p id="p2217607"><a name="p2217607"></a><a name="p2217607"></a>Maximum number of DDLs per transaction reached the maximum %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p45408440"><a name="p45408440"></a><a name="p45408440"></a>ERRCODE_FDW_TOO_MANY_DDL_CHANGES_IN_TRANSACTION_NOT_ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p55446330"><a name="p55446330"></a><a name="p55446330"></a>RC_TXN_EXCEEDS_MAX_DDLS</p>
</td>
</tr>
<tr id="row29254927"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p20838899"><a name="p20838899"></a><a name="p20838899"></a>Unique constraint violation</p>
<p id="p53332363"><a name="p53332363"></a><a name="p53332363"></a>Duplicate key value violates unique constraint \"%s\"".</p>
<p id="p10229222"><a name="p10229222"></a><a name="p10229222"></a>Key %s already exists.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p23260691"><a name="p23260691"></a><a name="p23260691"></a>ERRCODE_UNIQUE_VIOLATION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p45610274"><a name="p45610274"></a><a name="p45610274"></a>RC_UNIQUE_VIOLATION</p>
</td>
</tr>
<tr id="row7839285"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p31002363"><a name="p31002363"></a><a name="p31002363"></a>Table \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p28163481"><a name="p28163481"></a><a name="p28163481"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p66649528"><a name="p66649528"></a><a name="p66649528"></a>RC_TABLE_NOT_FOUND</p>
</td>
</tr>
<tr id="row62974848"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p689026"><a name="p689026"></a><a name="p689026"></a>Index \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p55811161"><a name="p55811161"></a><a name="p55811161"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p24410221"><a name="p24410221"></a><a name="p24410221"></a>RC_INDEX_NOT_FOUND</p>
</td>
</tr>
<tr id="row18365401"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p11202514"><a name="p11202514"></a><a name="p11202514"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p34988476"><a name="p34988476"></a><a name="p34988476"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p15494335"><a name="p15494335"></a><a name="p15494335"></a>RC_LOCAL_ROW_FOUND</p>
</td>
</tr>
<tr id="row5231289"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p21081235"><a name="p21081235"></a><a name="p21081235"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p29858457"><a name="p29858457"></a><a name="p29858457"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p2615989"><a name="p2615989"></a><a name="p2615989"></a>RC_LOCAL_ROW_NOT_FOUND</p>
</td>
</tr>
<tr id="row23543901"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p28007858"><a name="p28007858"></a><a name="p28007858"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p54044048"><a name="p54044048"></a><a name="p54044048"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p15491742"><a name="p15491742"></a><a name="p15491742"></a>RC_LOCAL_ROW_DELETED</p>
</td>
</tr>
<tr id="row5207950"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p19190824"><a name="p19190824"></a><a name="p19190824"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p10952902"><a name="p10952902"></a><a name="p10952902"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p14769873"><a name="p14769873"></a><a name="p14769873"></a>RC_INSERT_ON_EXIST</p>
</td>
</tr>
<tr id="row65819994"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p29819315"><a name="p29819315"></a><a name="p29819315"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p66554284"><a name="p66554284"></a><a name="p66554284"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p22187885"><a name="p22187885"></a><a name="p22187885"></a>RC_INDEX_RETRY_INSERT</p>
</td>
</tr>
<tr id="row65473240"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p1732249"><a name="p1732249"></a><a name="p1732249"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p6094519"><a name="p6094519"></a><a name="p6094519"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p23894041"><a name="p23894041"></a><a name="p23894041"></a>RC_INDEX_DELETE</p>
</td>
</tr>
<tr id="row13719784"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p37560683"><a name="p37560683"></a><a name="p37560683"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p22516520"><a name="p22516520"></a><a name="p22516520"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p11898821"><a name="p11898821"></a><a name="p11898821"></a>RC_LOCAL_ROW_NOT_VISIBLE</p>
</td>
</tr>
<tr id="row39980527"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p17197248"><a name="p17197248"></a><a name="p17197248"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p50799813"><a name="p50799813"></a><a name="p50799813"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p21144166"><a name="p21144166"></a><a name="p21144166"></a>RC_MEMORY_ALLOCATION_ERROR</p>
</td>
</tr>
<tr id="row56079773"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p46167797"><a name="p46167797"></a><a name="p46167797"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p48604061"><a name="p48604061"></a><a name="p48604061"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p44614845"><a name="p44614845"></a><a name="p44614845"></a>RC_ILLEGAL_ROW_STATE</p>
</td>
</tr>
<tr id="row65989290"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p43532274"><a name="p43532274"></a><a name="p43532274"></a>Null constraint violated.</p>
<p id="p56246151"><a name="p56246151"></a><a name="p56246151"></a>NULL value cannot be inserted into non-null column %s at table %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p59644417"><a name="p59644417"></a><a name="p59644417"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p66468500"><a name="p66468500"></a><a name="p66468500"></a>RC_NULL_VIOLATION</p>
</td>
</tr>
<tr id="row61345590"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p2936864"><a name="p2936864"></a><a name="p2936864"></a>Critical error.</p>
<p id="p26431778"><a name="p26431778"></a><a name="p26431778"></a>Critical error: %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p60599278"><a name="p60599278"></a><a name="p60599278"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p9594482"><a name="p9594482"></a><a name="p9594482"></a>RC_PANIC</p>
</td>
</tr>
<tr id="row19241481"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p15056149"><a name="p15056149"></a><a name="p15056149"></a>A checkpoint is in progress – cannot truncate table.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p11588590"><a name="p11588590"></a><a name="p11588590"></a>ERRCODE_FDW_OPERATION_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p66260603"><a name="p66260603"></a><a name="p66260603"></a>RC_NA</p>
</td>
</tr>
<tr id="row59474521"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p52706896"><a name="p52706896"></a><a name="p52706896"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p41400175"><a name="p41400175"></a><a name="p41400175"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p65079903"><a name="p65079903"></a><a name="p65079903"></a>RC_MAX_VALUE</p>
</td>
</tr>
<tr id="row48848221"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p64391817"><a name="p64391817"></a><a name="p64391817"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p48354649"><a name="p48354649"></a><a name="p48354649"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p24412469"><a name="p24412469"></a><a name="p24412469"></a>ERRCODE_CONFIG_FILE_ERROR</p>
</td>
</tr>
<tr id="row18385636"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p12841534"><a name="p12841534"></a><a name="p12841534"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p33531353"><a name="p33531353"></a><a name="p33531353"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p31685085"><a name="p31685085"></a><a name="p31685085"></a>ERRCODE_INVALID_TABLE_DEFINITION</p>
</td>
</tr>
<tr id="row16355056"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p49691197"><a name="p49691197"></a><a name="p49691197"></a>Memory engine – Failed to perform commit prepared.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p65564010"><a name="p65564010"></a><a name="p65564010"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p9084575"><a name="p9084575"></a><a name="p9084575"></a>ERRCODE_INVALID_TRANSACTION_STATE</p>
</td>
</tr>
<tr id="row64761989"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p11229763"><a name="p11229763"></a><a name="p11229763"></a>Invalid option &lt;option name&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p37195650"><a name="p37195650"></a><a name="p37195650"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p60057706"><a name="p60057706"></a><a name="p60057706"></a>ERRCODE_FDW_INVALID_OPTION_NAME</p>
</td>
</tr>
<tr id="row32836002"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p42470482"><a name="p42470482"></a><a name="p42470482"></a>Invalid memory allocation request size.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p17557027"><a name="p17557027"></a><a name="p17557027"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p12833084"><a name="p12833084"></a><a name="p12833084"></a>ERRCODE_INVALID_PARAMETER_VALUE</p>
</td>
</tr>
<tr id="row32846918"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p43354729"><a name="p43354729"></a><a name="p43354729"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p22072140"><a name="p22072140"></a><a name="p22072140"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p43012887"><a name="p43012887"></a><a name="p43012887"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
</tr>
<tr id="row61491827"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p14782087"><a name="p14782087"></a><a name="p14782087"></a>Could not serialize access due to concurrent update.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p56498428"><a name="p56498428"></a><a name="p56498428"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p12969978"><a name="p12969978"></a><a name="p12969978"></a>ERRCODE_T_R_SERIALIZATION_FAILURE</p>
</td>
</tr>
<tr id="row43935272"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p1987246"><a name="p1987246"></a><a name="p1987246"></a>Alter table operation is not supported for memory table.</p>
<p id="p17885218"><a name="p17885218"></a><a name="p17885218"></a>Cannot create MOT tables while incremental checkpoint is enabled.</p>
<p id="p26749237"><a name="p26749237"></a><a name="p26749237"></a>Re-index is not supported for memory tables.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p19204580"><a name="p19204580"></a><a name="p19204580"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p12067172"><a name="p12067172"></a><a name="p12067172"></a>ERRCODE_FDW_OPERATION_NOT_SUPPORTED</p>
</td>
</tr>
<tr id="row37916893"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p51369462"><a name="p51369462"></a><a name="p51369462"></a>Allocation of table metadata failed.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p176855"><a name="p176855"></a><a name="p176855"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p14325289"><a name="p14325289"></a><a name="p14325289"></a>ERRCODE_OUT_OF_MEMORY</p>
</td>
</tr>
<tr id="row61818739"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p41262001"><a name="p41262001"></a><a name="p41262001"></a>Database with OID %u does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p53887795"><a name="p53887795"></a><a name="p53887795"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p2835298"><a name="p2835298"></a><a name="p2835298"></a>ERRCODE_UNDEFINED_DATABASE</p>
</td>
</tr>
<tr id="row25517685"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p53666642"><a name="p53666642"></a><a name="p53666642"></a>Value exceeds maximum precision: %d.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p52030735"><a name="p52030735"></a><a name="p52030735"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p53739988"><a name="p53739988"></a><a name="p53739988"></a>ERRCODE_NUMERIC_VALUE_OUT_OF_RANGE</p>
</td>
</tr>
<tr id="row57971786"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p65203096"><a name="p65203096"></a><a name="p65203096"></a>You have reached a maximum logical capacity %lu of allowed %lu.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p46959463"><a name="p46959463"></a><a name="p46959463"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p45620191"><a name="p45620191"></a><a name="p45620191"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
</tr>
</tbody>
</table>

