# Errors Returned to the User<a name="EN-US_TOPIC_0260488125"></a>

The following lists the errors that are written to the database server log file and are returned to the user.

MOT returns PG standard error codes to the envelope using a Return Code \(RC\). Some RCs cause the generation of an error message to the user who is interacting with the database.

The PG code \(described below\) is returned internally by MOT to the database envelope, which reacts to it according to standard PG behavior.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>%s, %u and %lu in the message are replaced by relevant error information, such as query, table name or another information.  
>-   %s – String  
>-   %u – Number  
>-   %lu – Number  

**Table  1**  Errors Returned to the User and Logged to the Log File

<a name="table62597248"></a>
<table><thead align="left"><tr id="row45191609"><th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.1"><p id="p36641712"><a name="p36641712"></a><a name="p36641712"></a>Short and Long Description Returned to the User</p>
</th>
<th class="cellrowborder" valign="top" width="30.61306130613061%" id="mcps1.2.4.1.2"><p id="p15188687"><a name="p15188687"></a><a name="p15188687"></a>PG Code</p>
</th>
<th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.3"><p id="p22324159"><a name="p22324159"></a><a name="p22324159"></a>Internal Error Code</p>
</th>
</tr>
</thead>
<tbody><tr id="row63426472"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p37270577"><a name="p37270577"></a><a name="p37270577"></a>Success.</p>
<p id="p66999737"><a name="p66999737"></a><a name="p66999737"></a>Denotes success</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p58269589"><a name="p58269589"></a><a name="p58269589"></a>ERRCODE_SUCCESSFUL_</p>
<p id="p54664260"><a name="p54664260"></a><a name="p54664260"></a>COMPLETION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p65728926"><a name="p65728926"></a><a name="p65728926"></a>RC_OK = 0</p>
</td>
</tr>
<tr id="row54689428"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p658694"><a name="p658694"></a><a name="p658694"></a>Failure</p>
<p id="p5928253"><a name="p5928253"></a><a name="p5928253"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p10426448"><a name="p10426448"></a><a name="p10426448"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p39235997"><a name="p39235997"></a><a name="p39235997"></a>RC_ERROR = 1</p>
</td>
</tr>
<tr id="row17579656"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p14666012"><a name="p14666012"></a><a name="p14666012"></a>Unknown error has occurred.</p>
<p id="p64885247"><a name="p64885247"></a><a name="p64885247"></a>Denotes  aborted operation.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p21213669"><a name="p21213669"></a><a name="p21213669"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p40585635"><a name="p40585635"></a><a name="p40585635"></a>RC_ABORT</p>
</td>
</tr>
<tr id="row29726403"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p59028474"><a name="p59028474"></a><a name="p59028474"></a>Column definition of %s is not supported.</p>
<p id="p61494218"><a name="p61494218"></a><a name="p61494218"></a>Column type %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p14975746"><a name="p14975746"></a><a name="p14975746"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p5075890"><a name="p5075890"></a><a name="p5075890"></a>RC_UNSUPPORTED_COL_TYPE</p>
</td>
</tr>
<tr id="row45683015"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p9336735"><a name="p9336735"></a><a name="p9336735"></a>Column definition of %s is not supported.</p>
<p id="p16921756"><a name="p16921756"></a><a name="p16921756"></a>Column type Array of %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p28485030"><a name="p28485030"></a><a name="p28485030"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p25586121"><a name="p25586121"></a><a name="p25586121"></a>RC_UNSUPPORTED_COL_TYPE_ARR</p>
</td>
</tr>
<tr id="row28948499"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p63127053"><a name="p63127053"></a><a name="p63127053"></a>Column size %d exceeds max tuple size %u.</p>
<p id="p31272567"><a name="p31272567"></a><a name="p31272567"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p50050003"><a name="p50050003"></a><a name="p50050003"></a>ERRCODE_FEATURE_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p27518439"><a name="p27518439"></a><a name="p27518439"></a>RC_EXCEEDS_MAX_ROW_SIZE</p>
</td>
</tr>
<tr id="row46339366"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p62501186"><a name="p62501186"></a><a name="p62501186"></a>Column name %s exceeds max name size %u.</p>
<p id="p25639770"><a name="p25639770"></a><a name="p25639770"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p63555464"><a name="p63555464"></a><a name="p63555464"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p47718926"><a name="p47718926"></a><a name="p47718926"></a>RC_COL_NAME_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="row26817154"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p24705856"><a name="p24705856"></a><a name="p24705856"></a>Column size %d exceeds max size %u.</p>
<p id="p21026116"><a name="p21026116"></a><a name="p21026116"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p25393860"><a name="p25393860"></a><a name="p25393860"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p43636797"><a name="p43636797"></a><a name="p43636797"></a>RC_COL_SIZE_INVLALID</p>
</td>
</tr>
<tr id="row57186854"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p1623558"><a name="p1623558"></a><a name="p1623558"></a>Cannot create table.</p>
<p id="p14612023"><a name="p14612023"></a><a name="p14612023"></a>Cannot add column %s; as the number of declared columns exceeds the maximum declared columns.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p42723209"><a name="p42723209"></a><a name="p42723209"></a>ERRCODE_FEATURE_NOT_</p>
<p id="p48964563"><a name="p48964563"></a><a name="p48964563"></a>SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p6706705"><a name="p6706705"></a><a name="p6706705"></a>RC_TABLE_EXCEEDS_MAX_</p>
<p id="p60360350"><a name="p60360350"></a><a name="p60360350"></a>DECLARED_COLS</p>
</td>
</tr>
<tr id="row6372243"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p46389698"><a name="p46389698"></a><a name="p46389698"></a>Cannot create index.</p>
<p id="p14854101"><a name="p14854101"></a><a name="p14854101"></a>Total column size is greater than maximum index size %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p62331570"><a name="p62331570"></a><a name="p62331570"></a>ERRCODE_FDW_KEY_SIZE_</p>
<p id="p24113221"><a name="p24113221"></a><a name="p24113221"></a>EXCEEDS_MAX_ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p7013865"><a name="p7013865"></a><a name="p7013865"></a>RC_INDEX_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="row63124788"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p12834218"><a name="p12834218"></a><a name="p12834218"></a>Cannot create index.</p>
<p id="p48399103"><a name="p48399103"></a><a name="p48399103"></a>Total number of indexes for table %s is greater than the maximum number of indexes allowed %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p28013248"><a name="p28013248"></a><a name="p28013248"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="p50792647"><a name="p50792647"></a><a name="p50792647"></a>INDEXES</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p20563775"><a name="p20563775"></a><a name="p20563775"></a>RC_TABLE_EXCEEDS_MAX_INDEXES</p>
</td>
</tr>
<tr id="row50856249"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p25715520"><a name="p25715520"></a><a name="p25715520"></a>Cannot execute statement.</p>
<p id="p30113095"><a name="p30113095"></a><a name="p30113095"></a>Maximum number of DDLs per transaction reached the maximum %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p23241640"><a name="p23241640"></a><a name="p23241640"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="p7848172"><a name="p7848172"></a><a name="p7848172"></a>DDL_CHANGES_IN_</p>
<p id="p3524689"><a name="p3524689"></a><a name="p3524689"></a>TRANSACTION_NOT_</p>
<p id="p31722209"><a name="p31722209"></a><a name="p31722209"></a>ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p19362122"><a name="p19362122"></a><a name="p19362122"></a>RC_TXN_EXCEEDS_MAX_DDLS</p>
</td>
</tr>
<tr id="row40041374"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p22125841"><a name="p22125841"></a><a name="p22125841"></a>Unique constraint violation</p>
<p id="p64914842"><a name="p64914842"></a><a name="p64914842"></a>Duplicate key value violates unique constraint \"%s\"".</p>
<p id="p47362668"><a name="p47362668"></a><a name="p47362668"></a>Key %s already exists.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p11170904"><a name="p11170904"></a><a name="p11170904"></a>ERRCODE_UNIQUE_</p>
<p id="p33429276"><a name="p33429276"></a><a name="p33429276"></a>VIOLATION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p23416803"><a name="p23416803"></a><a name="p23416803"></a>RC_UNIQUE_VIOLATION</p>
</td>
</tr>
<tr id="row9424641"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p25198479"><a name="p25198479"></a><a name="p25198479"></a>Table \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p27810893"><a name="p27810893"></a><a name="p27810893"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p38089827"><a name="p38089827"></a><a name="p38089827"></a>RC_TABLE_NOT_FOUND</p>
</td>
</tr>
<tr id="row7264127"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p51523405"><a name="p51523405"></a><a name="p51523405"></a>Index \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p12646280"><a name="p12646280"></a><a name="p12646280"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p17715735"><a name="p17715735"></a><a name="p17715735"></a>RC_INDEX_NOT_FOUND</p>
</td>
</tr>
<tr id="row25223890"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p29869179"><a name="p29869179"></a><a name="p29869179"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p3484396"><a name="p3484396"></a><a name="p3484396"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p13800654"><a name="p13800654"></a><a name="p13800654"></a>RC_LOCAL_ROW_FOUND</p>
</td>
</tr>
<tr id="row57097024"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p61456270"><a name="p61456270"></a><a name="p61456270"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p11901984"><a name="p11901984"></a><a name="p11901984"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p24536671"><a name="p24536671"></a><a name="p24536671"></a>RC_LOCAL_ROW_NOT_FOUND</p>
</td>
</tr>
<tr id="row19503450"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p36275655"><a name="p36275655"></a><a name="p36275655"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p52646932"><a name="p52646932"></a><a name="p52646932"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p36543081"><a name="p36543081"></a><a name="p36543081"></a>RC_LOCAL_ROW_DELETED</p>
</td>
</tr>
<tr id="row60452279"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p64796396"><a name="p64796396"></a><a name="p64796396"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p14016701"><a name="p14016701"></a><a name="p14016701"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p61611028"><a name="p61611028"></a><a name="p61611028"></a>RC_INSERT_ON_EXIST</p>
</td>
</tr>
<tr id="row17628340"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p18609420"><a name="p18609420"></a><a name="p18609420"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p30968028"><a name="p30968028"></a><a name="p30968028"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p25382349"><a name="p25382349"></a><a name="p25382349"></a>RC_INDEX_RETRY_INSERT</p>
</td>
</tr>
<tr id="row27114553"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p48795198"><a name="p48795198"></a><a name="p48795198"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p60096951"><a name="p60096951"></a><a name="p60096951"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p36014861"><a name="p36014861"></a><a name="p36014861"></a>RC_INDEX_DELETE</p>
</td>
</tr>
<tr id="row55698294"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p15267937"><a name="p15267937"></a><a name="p15267937"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p28743389"><a name="p28743389"></a><a name="p28743389"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p46513169"><a name="p46513169"></a><a name="p46513169"></a>RC_LOCAL_ROW_NOT_VISIBLE</p>
</td>
</tr>
<tr id="row15965344"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p18124508"><a name="p18124508"></a><a name="p18124508"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p58799077"><a name="p58799077"></a><a name="p58799077"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p65104802"><a name="p65104802"></a><a name="p65104802"></a>RC_MEMORY_ALLOCATION_ERROR</p>
</td>
</tr>
<tr id="row49072312"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p15434335"><a name="p15434335"></a><a name="p15434335"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p42221614"><a name="p42221614"></a><a name="p42221614"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p64507598"><a name="p64507598"></a><a name="p64507598"></a>RC_ILLEGAL_ROW_STATE</p>
</td>
</tr>
<tr id="row43697476"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p49834656"><a name="p49834656"></a><a name="p49834656"></a>Null constraint violated.</p>
<p id="p45858720"><a name="p45858720"></a><a name="p45858720"></a>NULL value cannot be inserted into non-null column %s at table %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p23568801"><a name="p23568801"></a><a name="p23568801"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p30024723"><a name="p30024723"></a><a name="p30024723"></a>RC_NULL_VIOLATION</p>
</td>
</tr>
<tr id="row1787053"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p10533643"><a name="p10533643"></a><a name="p10533643"></a>Critical error.</p>
<p id="p27693928"><a name="p27693928"></a><a name="p27693928"></a>Critical error: %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p28615708"><a name="p28615708"></a><a name="p28615708"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p36170975"><a name="p36170975"></a><a name="p36170975"></a>RC_PANIC</p>
</td>
</tr>
<tr id="row57103327"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p61966783"><a name="p61966783"></a><a name="p61966783"></a>A checkpoint is in progress – cannot truncate table.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p53253507"><a name="p53253507"></a><a name="p53253507"></a>ERRCODE_FDW_OPERATION_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p18566804"><a name="p18566804"></a><a name="p18566804"></a>RC_NA</p>
</td>
</tr>
<tr id="row32883508"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p46318498"><a name="p46318498"></a><a name="p46318498"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 "><p id="p60810897"><a name="p60810897"></a><a name="p60810897"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p26735657"><a name="p26735657"></a><a name="p26735657"></a>RC_MAX_VALUE</p>
</td>
</tr>
<tr id="row39294323"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p28723610"><a name="p28723610"></a><a name="p28723610"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p13920646"><a name="p13920646"></a><a name="p13920646"></a>ERRCODE_CONFIG_FILE_ERROR</p>
</td>
</tr>
<tr id="row58176955"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p14712949"><a name="p14712949"></a><a name="p14712949"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p29117403"><a name="p29117403"></a><a name="p29117403"></a>ERRCODE_INVALID_TABLE_</p>
<p id="p60730036"><a name="p60730036"></a><a name="p60730036"></a>DEFINITION</p>
</td>
</tr>
<tr id="row9699414"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p47455074"><a name="p47455074"></a><a name="p47455074"></a>Memory engine – Failed to perform commit prepared.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p34723403"><a name="p34723403"></a><a name="p34723403"></a>ERRCODE_INVALID_TRANSACTION_</p>
<p id="p44075177"><a name="p44075177"></a><a name="p44075177"></a>STATE</p>
</td>
</tr>
<tr id="row61132281"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p52767703"><a name="p52767703"></a><a name="p52767703"></a>Invalid option &lt;option name&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p61379396"><a name="p61379396"></a><a name="p61379396"></a>ERRCODE_FDW_INVALID_OPTION_</p>
<p id="p15543655"><a name="p15543655"></a><a name="p15543655"></a>NAME</p>
</td>
</tr>
<tr id="row5675171"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p57035731"><a name="p57035731"></a><a name="p57035731"></a>Invalid memory allocation request size.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p12410053"><a name="p12410053"></a><a name="p12410053"></a>ERRCODE_INVALID_PARAMETER_</p>
<p id="p44581613"><a name="p44581613"></a><a name="p44581613"></a>VALUE</p>
</td>
</tr>
<tr id="row65690198"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p19305816"><a name="p19305816"></a><a name="p19305816"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p31034573"><a name="p31034573"></a><a name="p31034573"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="p10875706"><a name="p10875706"></a><a name="p10875706"></a>MEMORY</p>
</td>
</tr>
<tr id="row30772497"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p9544292"><a name="p9544292"></a><a name="p9544292"></a>Could not serialize access due to concurrent update.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p7535966"><a name="p7535966"></a><a name="p7535966"></a>ERRCODE_T_R_SERIALIZATION_</p>
<p id="p714832"><a name="p714832"></a><a name="p714832"></a>FAILURE</p>
</td>
</tr>
<tr id="row6433491"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p51350777"><a name="p51350777"></a><a name="p51350777"></a>Alter table operation is not supported for memory table.</p>
<p id="p59503814"><a name="p59503814"></a><a name="p59503814"></a>Cannot create MOT tables while incremental checkpoint is enabled.</p>
<p id="p65772279"><a name="p65772279"></a><a name="p65772279"></a>Re-index is not supported for memory tables.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p21933470"><a name="p21933470"></a><a name="p21933470"></a>ERRCODE_FDW_OPERATION_NOT_</p>
<p id="p63183504"><a name="p63183504"></a><a name="p63183504"></a>SUPPORTED</p>
</td>
</tr>
<tr id="row31780630"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p24094214"><a name="p24094214"></a><a name="p24094214"></a>Allocation of table metadata failed.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p40767344"><a name="p40767344"></a><a name="p40767344"></a>ERRCODE_OUT_OF_MEMORY</p>
</td>
</tr>
<tr id="row31361784"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p57276561"><a name="p57276561"></a><a name="p57276561"></a>Database with OID %u does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p48990273"><a name="p48990273"></a><a name="p48990273"></a>ERRCODE_UNDEFINED_DATABASE</p>
</td>
</tr>
<tr id="row38259275"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p11993575"><a name="p11993575"></a><a name="p11993575"></a>Value exceeds maximum precision: %d.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p38259952"><a name="p38259952"></a><a name="p38259952"></a>ERRCODE_NUMERIC_VALUE_OUT_</p>
<p id="p8795254"><a name="p8795254"></a><a name="p8795254"></a>OF_RANGE</p>
</td>
</tr>
<tr id="row12048430"><td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.1 "><p id="p36398748"><a name="p36398748"></a><a name="p36398748"></a>You have reached a maximum logical capacity %lu of allowed %lu.</p>
</td>
<td class="cellrowborder" valign="top" width="30.61306130613061%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="p38848041"><a name="p38848041"></a><a name="p38848041"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="p14088052"><a name="p14088052"></a><a name="p14088052"></a>MEMORY</p>
</td>
</tr>
</tbody>
</table>

