# Errors Returned to the User<a name="EN-US_TOPIC_0257867411"></a>

The following lists the errors that are written to the database server log file and are returned to the user.

MOT returns PG standard error codes to the envelope using a Return Code \(RC\). Some RCs cause generate an error message to the user who is interacting with the database.

-   **%s –**  String
-   **%u – **Number

The PG code \(described below\) is returned internally by MOT to the database envelope, which reacts to it according to standard PG behavior.

**Table  1**  Errors Returned to the User and Logged to the Log File

<a name="en-us_topic_0257713265_table6261369"></a>
<table><thead align="left"><tr id="en-us_topic_0257713265_row30149715"><th class="cellrowborder" valign="top" width="34.673467346734675%" id="mcps1.2.4.1.1"><p id="en-us_topic_0257713265_p26207835"><a name="en-us_topic_0257713265_p26207835"></a><a name="en-us_topic_0257713265_p26207835"></a>Short and Long Description Returned to the User</p>
</th>
<th class="cellrowborder" valign="top" width="30.633063306330634%" id="mcps1.2.4.1.2"><p id="en-us_topic_0257713265_p42459867"><a name="en-us_topic_0257713265_p42459867"></a><a name="en-us_topic_0257713265_p42459867"></a>PG Code</p>
</th>
<th class="cellrowborder" valign="top" width="34.69346934693469%" id="mcps1.2.4.1.3"><p id="en-us_topic_0257713265_p16697212"><a name="en-us_topic_0257713265_p16697212"></a><a name="en-us_topic_0257713265_p16697212"></a>Internal Error Code</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713265_row10296933"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p28745279"><a name="en-us_topic_0257713265_p28745279"></a><a name="en-us_topic_0257713265_p28745279"></a>Success.</p>
<p id="en-us_topic_0257713265_p57380926"><a name="en-us_topic_0257713265_p57380926"></a><a name="en-us_topic_0257713265_p57380926"></a>Denotes success</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p17343428"><a name="en-us_topic_0257713265_p17343428"></a><a name="en-us_topic_0257713265_p17343428"></a>ERRCODE_SUCCESSFUL_</p>
<p id="en-us_topic_0257713265_p21873125"><a name="en-us_topic_0257713265_p21873125"></a><a name="en-us_topic_0257713265_p21873125"></a>COMPLETION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p26892672"><a name="en-us_topic_0257713265_p26892672"></a><a name="en-us_topic_0257713265_p26892672"></a>RC_OK = 0</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row40707460"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p8970000"><a name="en-us_topic_0257713265_p8970000"></a><a name="en-us_topic_0257713265_p8970000"></a>Failure</p>
<p id="en-us_topic_0257713265_p13621136"><a name="en-us_topic_0257713265_p13621136"></a><a name="en-us_topic_0257713265_p13621136"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p29570261"><a name="en-us_topic_0257713265_p29570261"></a><a name="en-us_topic_0257713265_p29570261"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p46380963"><a name="en-us_topic_0257713265_p46380963"></a><a name="en-us_topic_0257713265_p46380963"></a>RC_ERROR = 1</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row14775484"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p55963561"><a name="en-us_topic_0257713265_p55963561"></a><a name="en-us_topic_0257713265_p55963561"></a>Unknown error has occurred.</p>
<p id="en-us_topic_0257713265_p33910007"><a name="en-us_topic_0257713265_p33910007"></a><a name="en-us_topic_0257713265_p33910007"></a>Denotes operation aborted</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p62356046"><a name="en-us_topic_0257713265_p62356046"></a><a name="en-us_topic_0257713265_p62356046"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p17674957"><a name="en-us_topic_0257713265_p17674957"></a><a name="en-us_topic_0257713265_p17674957"></a>RC_ABORT</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row24856892"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p142347"><a name="en-us_topic_0257713265_p142347"></a><a name="en-us_topic_0257713265_p142347"></a>Column definition of %s is not supported.</p>
<p id="en-us_topic_0257713265_p1281126"><a name="en-us_topic_0257713265_p1281126"></a><a name="en-us_topic_0257713265_p1281126"></a>Column type %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p36662351"><a name="en-us_topic_0257713265_p36662351"></a><a name="en-us_topic_0257713265_p36662351"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p16860416"><a name="en-us_topic_0257713265_p16860416"></a><a name="en-us_topic_0257713265_p16860416"></a>RC_UNSUPPORTED_COL_TYPE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row17526019"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p10321460"><a name="en-us_topic_0257713265_p10321460"></a><a name="en-us_topic_0257713265_p10321460"></a>Column definition of %s is not supported.</p>
<p id="en-us_topic_0257713265_p25784284"><a name="en-us_topic_0257713265_p25784284"></a><a name="en-us_topic_0257713265_p25784284"></a>Column type Array of %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p8152279"><a name="en-us_topic_0257713265_p8152279"></a><a name="en-us_topic_0257713265_p8152279"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p56354875"><a name="en-us_topic_0257713265_p56354875"></a><a name="en-us_topic_0257713265_p56354875"></a>RC_UNSUPPORTED_COL_TYPE_ARR</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row37431827"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p12079142"><a name="en-us_topic_0257713265_p12079142"></a><a name="en-us_topic_0257713265_p12079142"></a>Column size %d exceeds max tuple size %u.</p>
<p id="en-us_topic_0257713265_p41603419"><a name="en-us_topic_0257713265_p41603419"></a><a name="en-us_topic_0257713265_p41603419"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p14433768"><a name="en-us_topic_0257713265_p14433768"></a><a name="en-us_topic_0257713265_p14433768"></a>ERRCODE_FEATURE_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p28284541"><a name="en-us_topic_0257713265_p28284541"></a><a name="en-us_topic_0257713265_p28284541"></a>RC_EXCEEDS_MAX_ROW_SIZE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row53234283"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p17009632"><a name="en-us_topic_0257713265_p17009632"></a><a name="en-us_topic_0257713265_p17009632"></a>Column name %s exceeds max name size %u.</p>
<p id="en-us_topic_0257713265_p18868961"><a name="en-us_topic_0257713265_p18868961"></a><a name="en-us_topic_0257713265_p18868961"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p51990912"><a name="en-us_topic_0257713265_p51990912"></a><a name="en-us_topic_0257713265_p51990912"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p50514376"><a name="en-us_topic_0257713265_p50514376"></a><a name="en-us_topic_0257713265_p50514376"></a>RC_COL_NAME_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row51976202"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p49322849"><a name="en-us_topic_0257713265_p49322849"></a><a name="en-us_topic_0257713265_p49322849"></a>Column size %d exceeds max size %u.</p>
<p id="en-us_topic_0257713265_p41252464"><a name="en-us_topic_0257713265_p41252464"></a><a name="en-us_topic_0257713265_p41252464"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p53115297"><a name="en-us_topic_0257713265_p53115297"></a><a name="en-us_topic_0257713265_p53115297"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p7371802"><a name="en-us_topic_0257713265_p7371802"></a><a name="en-us_topic_0257713265_p7371802"></a>RC_COL_SIZE_INVLALID</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row66346226"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p5335211"><a name="en-us_topic_0257713265_p5335211"></a><a name="en-us_topic_0257713265_p5335211"></a>Cannot create table.</p>
<p id="en-us_topic_0257713265_p48016903"><a name="en-us_topic_0257713265_p48016903"></a><a name="en-us_topic_0257713265_p48016903"></a>Cannot add column %s; number of declared columns is less. DO YOU MEAN NUMBER OF COLUMNS IS INCORRECT? GGG</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p64163914"><a name="en-us_topic_0257713265_p64163914"></a><a name="en-us_topic_0257713265_p64163914"></a>ERRCODE_FEATURE_NOT_</p>
<p id="en-us_topic_0257713265_p40604315"><a name="en-us_topic_0257713265_p40604315"></a><a name="en-us_topic_0257713265_p40604315"></a>SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p615201"><a name="en-us_topic_0257713265_p615201"></a><a name="en-us_topic_0257713265_p615201"></a>RC_TABLE_EXCEEDS_MAX_</p>
<p id="en-us_topic_0257713265_p5536817"><a name="en-us_topic_0257713265_p5536817"></a><a name="en-us_topic_0257713265_p5536817"></a>DECLARED_COLS</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row49831357"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p9808084"><a name="en-us_topic_0257713265_p9808084"></a><a name="en-us_topic_0257713265_p9808084"></a>Cannot create index.</p>
<p id="en-us_topic_0257713265_p21163898"><a name="en-us_topic_0257713265_p21163898"></a><a name="en-us_topic_0257713265_p21163898"></a>Total columns size is greater than maximum index size %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p36554200"><a name="en-us_topic_0257713265_p36554200"></a><a name="en-us_topic_0257713265_p36554200"></a>ERRCODE_FDW_KEY_SIZE_</p>
<p id="en-us_topic_0257713265_p60552345"><a name="en-us_topic_0257713265_p60552345"></a><a name="en-us_topic_0257713265_p60552345"></a>EXCEEDS_MAX_ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p5792918"><a name="en-us_topic_0257713265_p5792918"></a><a name="en-us_topic_0257713265_p5792918"></a>RC_INDEX_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row52136268"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p62288179"><a name="en-us_topic_0257713265_p62288179"></a><a name="en-us_topic_0257713265_p62288179"></a>Cannot create index.</p>
<p id="en-us_topic_0257713265_p23722702"><a name="en-us_topic_0257713265_p23722702"></a><a name="en-us_topic_0257713265_p23722702"></a>Total number of indexes for table %s is greater than the maximum number of indexes allowed %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p42490713"><a name="en-us_topic_0257713265_p42490713"></a><a name="en-us_topic_0257713265_p42490713"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="en-us_topic_0257713265_p46872098"><a name="en-us_topic_0257713265_p46872098"></a><a name="en-us_topic_0257713265_p46872098"></a>INDEXES</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p38543611"><a name="en-us_topic_0257713265_p38543611"></a><a name="en-us_topic_0257713265_p38543611"></a>RC_TABLE_EXCEEDS_MAX_INDEXES</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row11348180"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p46787348"><a name="en-us_topic_0257713265_p46787348"></a><a name="en-us_topic_0257713265_p46787348"></a>Cannot execute statement.</p>
<p id="en-us_topic_0257713265_p18432949"><a name="en-us_topic_0257713265_p18432949"></a><a name="en-us_topic_0257713265_p18432949"></a>Maximum number of DDLs per transaction reached the maximum %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p16673895"><a name="en-us_topic_0257713265_p16673895"></a><a name="en-us_topic_0257713265_p16673895"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="en-us_topic_0257713265_p15847329"><a name="en-us_topic_0257713265_p15847329"></a><a name="en-us_topic_0257713265_p15847329"></a>DDL_CHANGES_IN_</p>
<p id="en-us_topic_0257713265_p8408241"><a name="en-us_topic_0257713265_p8408241"></a><a name="en-us_topic_0257713265_p8408241"></a>TRANSACTION_NOT_</p>
<p id="en-us_topic_0257713265_p8565311"><a name="en-us_topic_0257713265_p8565311"></a><a name="en-us_topic_0257713265_p8565311"></a>ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p22701601"><a name="en-us_topic_0257713265_p22701601"></a><a name="en-us_topic_0257713265_p22701601"></a>RC_TXN_EXCEEDS_MAX_DDLS</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row2987824"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p40687155"><a name="en-us_topic_0257713265_p40687155"></a><a name="en-us_topic_0257713265_p40687155"></a>Unique constraint violation</p>
<p id="en-us_topic_0257713265_p30640083"><a name="en-us_topic_0257713265_p30640083"></a><a name="en-us_topic_0257713265_p30640083"></a>Duplicate key value violates unique constraint \"%s\"".</p>
<p id="en-us_topic_0257713265_p7325296"><a name="en-us_topic_0257713265_p7325296"></a><a name="en-us_topic_0257713265_p7325296"></a>Key %s already exists.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p56478093"><a name="en-us_topic_0257713265_p56478093"></a><a name="en-us_topic_0257713265_p56478093"></a>ERRCODE_UNIQUE_</p>
<p id="en-us_topic_0257713265_p38540791"><a name="en-us_topic_0257713265_p38540791"></a><a name="en-us_topic_0257713265_p38540791"></a>VIOLATION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p34796360"><a name="en-us_topic_0257713265_p34796360"></a><a name="en-us_topic_0257713265_p34796360"></a>RC_UNIQUE_VIOLATION</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row44731784"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p66504758"><a name="en-us_topic_0257713265_p66504758"></a><a name="en-us_topic_0257713265_p66504758"></a>Table \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p18176357"><a name="en-us_topic_0257713265_p18176357"></a><a name="en-us_topic_0257713265_p18176357"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p62998845"><a name="en-us_topic_0257713265_p62998845"></a><a name="en-us_topic_0257713265_p62998845"></a>RC_TABLE_NOT_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row30118695"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p23695246"><a name="en-us_topic_0257713265_p23695246"></a><a name="en-us_topic_0257713265_p23695246"></a>Index \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p40266802"><a name="en-us_topic_0257713265_p40266802"></a><a name="en-us_topic_0257713265_p40266802"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p40385530"><a name="en-us_topic_0257713265_p40385530"></a><a name="en-us_topic_0257713265_p40385530"></a>RC_INDEX_NOT_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row27925455"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p47369417"><a name="en-us_topic_0257713265_p47369417"></a><a name="en-us_topic_0257713265_p47369417"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p11717596"><a name="en-us_topic_0257713265_p11717596"></a><a name="en-us_topic_0257713265_p11717596"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p9601199"><a name="en-us_topic_0257713265_p9601199"></a><a name="en-us_topic_0257713265_p9601199"></a>RC_LOCAL_ROW_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row19301928"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p19952318"><a name="en-us_topic_0257713265_p19952318"></a><a name="en-us_topic_0257713265_p19952318"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p5525098"><a name="en-us_topic_0257713265_p5525098"></a><a name="en-us_topic_0257713265_p5525098"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p44879761"><a name="en-us_topic_0257713265_p44879761"></a><a name="en-us_topic_0257713265_p44879761"></a>RC_LOCAL_ROW_NOT_FOUND</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row1264671"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p35329549"><a name="en-us_topic_0257713265_p35329549"></a><a name="en-us_topic_0257713265_p35329549"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p43121195"><a name="en-us_topic_0257713265_p43121195"></a><a name="en-us_topic_0257713265_p43121195"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p3155873"><a name="en-us_topic_0257713265_p3155873"></a><a name="en-us_topic_0257713265_p3155873"></a>RC_LOCAL_ROW_DELETED</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row28402861"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p18930395"><a name="en-us_topic_0257713265_p18930395"></a><a name="en-us_topic_0257713265_p18930395"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p56967030"><a name="en-us_topic_0257713265_p56967030"></a><a name="en-us_topic_0257713265_p56967030"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p50926693"><a name="en-us_topic_0257713265_p50926693"></a><a name="en-us_topic_0257713265_p50926693"></a>RC_INSERT_ON_EXIST</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row55687056"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p14357657"><a name="en-us_topic_0257713265_p14357657"></a><a name="en-us_topic_0257713265_p14357657"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p22119530"><a name="en-us_topic_0257713265_p22119530"></a><a name="en-us_topic_0257713265_p22119530"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p46851500"><a name="en-us_topic_0257713265_p46851500"></a><a name="en-us_topic_0257713265_p46851500"></a>RC_INDEX_RETRY_INSERT</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row19010318"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p63440828"><a name="en-us_topic_0257713265_p63440828"></a><a name="en-us_topic_0257713265_p63440828"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p38433454"><a name="en-us_topic_0257713265_p38433454"></a><a name="en-us_topic_0257713265_p38433454"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p26102093"><a name="en-us_topic_0257713265_p26102093"></a><a name="en-us_topic_0257713265_p26102093"></a>RC_INDEX_DELETE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row33592248"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p36617605"><a name="en-us_topic_0257713265_p36617605"></a><a name="en-us_topic_0257713265_p36617605"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p13236018"><a name="en-us_topic_0257713265_p13236018"></a><a name="en-us_topic_0257713265_p13236018"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p65484519"><a name="en-us_topic_0257713265_p65484519"></a><a name="en-us_topic_0257713265_p65484519"></a>RC_LOCAL_ROW_NOT_VISIBLE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row52489765"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p23812538"><a name="en-us_topic_0257713265_p23812538"></a><a name="en-us_topic_0257713265_p23812538"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p49767403"><a name="en-us_topic_0257713265_p49767403"></a><a name="en-us_topic_0257713265_p49767403"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p4627874"><a name="en-us_topic_0257713265_p4627874"></a><a name="en-us_topic_0257713265_p4627874"></a>RC_MEMORY_ALLOCATION_ERROR</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row41650866"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p18276970"><a name="en-us_topic_0257713265_p18276970"></a><a name="en-us_topic_0257713265_p18276970"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p4039578"><a name="en-us_topic_0257713265_p4039578"></a><a name="en-us_topic_0257713265_p4039578"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p58770411"><a name="en-us_topic_0257713265_p58770411"></a><a name="en-us_topic_0257713265_p58770411"></a>RC_ILLEGAL_ROW_STATE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row59171655"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p28174764"><a name="en-us_topic_0257713265_p28174764"></a><a name="en-us_topic_0257713265_p28174764"></a>Null constraint violated.</p>
<p id="en-us_topic_0257713265_p52246286"><a name="en-us_topic_0257713265_p52246286"></a><a name="en-us_topic_0257713265_p52246286"></a>NULL value cannot be inserted into non-null column %s at table %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p4090801"><a name="en-us_topic_0257713265_p4090801"></a><a name="en-us_topic_0257713265_p4090801"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p62919444"><a name="en-us_topic_0257713265_p62919444"></a><a name="en-us_topic_0257713265_p62919444"></a>RC_NULL_VIOLATION</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row29404085"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p32920667"><a name="en-us_topic_0257713265_p32920667"></a><a name="en-us_topic_0257713265_p32920667"></a>Critical error.</p>
<p id="en-us_topic_0257713265_p27850555"><a name="en-us_topic_0257713265_p27850555"></a><a name="en-us_topic_0257713265_p27850555"></a>Critical error: %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p41302479"><a name="en-us_topic_0257713265_p41302479"></a><a name="en-us_topic_0257713265_p41302479"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p57166532"><a name="en-us_topic_0257713265_p57166532"></a><a name="en-us_topic_0257713265_p57166532"></a>RC_PANIC</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row44736746"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p66906707"><a name="en-us_topic_0257713265_p66906707"></a><a name="en-us_topic_0257713265_p66906707"></a>A checkpoint is in progress – cannot truncate table.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p50734192"><a name="en-us_topic_0257713265_p50734192"></a><a name="en-us_topic_0257713265_p50734192"></a>ERRCODE_FDW_OPERATION_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p15828906"><a name="en-us_topic_0257713265_p15828906"></a><a name="en-us_topic_0257713265_p15828906"></a>RC_NA</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row8242429"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p63657004"><a name="en-us_topic_0257713265_p63657004"></a><a name="en-us_topic_0257713265_p63657004"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p55943724"><a name="en-us_topic_0257713265_p55943724"></a><a name="en-us_topic_0257713265_p55943724"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p35147813"><a name="en-us_topic_0257713265_p35147813"></a><a name="en-us_topic_0257713265_p35147813"></a>RC_MAX_VALUE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row47894862"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p54278574"><a name="en-us_topic_0257713265_p54278574"></a><a name="en-us_topic_0257713265_p54278574"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p34488346"><a name="en-us_topic_0257713265_p34488346"></a><a name="en-us_topic_0257713265_p34488346"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p42092667"><a name="en-us_topic_0257713265_p42092667"></a><a name="en-us_topic_0257713265_p42092667"></a>ERRCODE_CONFIG_FILE_ERROR</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row43289691"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p16804102"><a name="en-us_topic_0257713265_p16804102"></a><a name="en-us_topic_0257713265_p16804102"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p18955034"><a name="en-us_topic_0257713265_p18955034"></a><a name="en-us_topic_0257713265_p18955034"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p58962749"><a name="en-us_topic_0257713265_p58962749"></a><a name="en-us_topic_0257713265_p58962749"></a>ERRCODE_INVALID_TABLE_</p>
<p id="en-us_topic_0257713265_p60902701"><a name="en-us_topic_0257713265_p60902701"></a><a name="en-us_topic_0257713265_p60902701"></a>DEFINITION</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row11253402"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p39110359"><a name="en-us_topic_0257713265_p39110359"></a><a name="en-us_topic_0257713265_p39110359"></a>Memory engine – Failed to perform commit prepared.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p13822492"><a name="en-us_topic_0257713265_p13822492"></a><a name="en-us_topic_0257713265_p13822492"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p45880082"><a name="en-us_topic_0257713265_p45880082"></a><a name="en-us_topic_0257713265_p45880082"></a>ERRCODE_INVALID_TRANSACTION_</p>
<p id="en-us_topic_0257713265_p10267559"><a name="en-us_topic_0257713265_p10267559"></a><a name="en-us_topic_0257713265_p10267559"></a>STATE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row25299168"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p35966767"><a name="en-us_topic_0257713265_p35966767"></a><a name="en-us_topic_0257713265_p35966767"></a>Invalid option &lt;option name&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p27627047"><a name="en-us_topic_0257713265_p27627047"></a><a name="en-us_topic_0257713265_p27627047"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p23198319"><a name="en-us_topic_0257713265_p23198319"></a><a name="en-us_topic_0257713265_p23198319"></a>ERRCODE_FDW_INVALID_OPTION_</p>
<p id="en-us_topic_0257713265_p7458280"><a name="en-us_topic_0257713265_p7458280"></a><a name="en-us_topic_0257713265_p7458280"></a>NAME</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row15663"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p1268752"><a name="en-us_topic_0257713265_p1268752"></a><a name="en-us_topic_0257713265_p1268752"></a>Invalid memory allocation request size.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p35660089"><a name="en-us_topic_0257713265_p35660089"></a><a name="en-us_topic_0257713265_p35660089"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p2786131"><a name="en-us_topic_0257713265_p2786131"></a><a name="en-us_topic_0257713265_p2786131"></a>ERRCODE_INVALID_PARAMETER_</p>
<p id="en-us_topic_0257713265_p25075186"><a name="en-us_topic_0257713265_p25075186"></a><a name="en-us_topic_0257713265_p25075186"></a>VALUE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row24350086"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p26199929"><a name="en-us_topic_0257713265_p26199929"></a><a name="en-us_topic_0257713265_p26199929"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p41819476"><a name="en-us_topic_0257713265_p41819476"></a><a name="en-us_topic_0257713265_p41819476"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p31934400"><a name="en-us_topic_0257713265_p31934400"></a><a name="en-us_topic_0257713265_p31934400"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="en-us_topic_0257713265_p18974148"><a name="en-us_topic_0257713265_p18974148"></a><a name="en-us_topic_0257713265_p18974148"></a>MEMORY</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row36549604"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p7727977"><a name="en-us_topic_0257713265_p7727977"></a><a name="en-us_topic_0257713265_p7727977"></a>Could not serialize access due to concurrent update.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p21986423"><a name="en-us_topic_0257713265_p21986423"></a><a name="en-us_topic_0257713265_p21986423"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p36069813"><a name="en-us_topic_0257713265_p36069813"></a><a name="en-us_topic_0257713265_p36069813"></a>ERRCODE_T_R_SERIALIZATION_</p>
<p id="en-us_topic_0257713265_p56192861"><a name="en-us_topic_0257713265_p56192861"></a><a name="en-us_topic_0257713265_p56192861"></a>FAILURE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row35973707"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p28189154"><a name="en-us_topic_0257713265_p28189154"></a><a name="en-us_topic_0257713265_p28189154"></a>Alter table operation is not supported for memory table.</p>
<p id="en-us_topic_0257713265_p52375797"><a name="en-us_topic_0257713265_p52375797"></a><a name="en-us_topic_0257713265_p52375797"></a>Cannot create MOT tables while incremental checkpoint is enabled.</p>
<p id="en-us_topic_0257713265_p1620129"><a name="en-us_topic_0257713265_p1620129"></a><a name="en-us_topic_0257713265_p1620129"></a>Re-index is not supported for memory tables.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p64121649"><a name="en-us_topic_0257713265_p64121649"></a><a name="en-us_topic_0257713265_p64121649"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p26471098"><a name="en-us_topic_0257713265_p26471098"></a><a name="en-us_topic_0257713265_p26471098"></a>ERRCODE_FDW_OPERATION_NOT_</p>
<p id="en-us_topic_0257713265_p36913291"><a name="en-us_topic_0257713265_p36913291"></a><a name="en-us_topic_0257713265_p36913291"></a>SUPPORTED</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row63784163"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p66243540"><a name="en-us_topic_0257713265_p66243540"></a><a name="en-us_topic_0257713265_p66243540"></a>Allocation of table metadata failed.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p64126518"><a name="en-us_topic_0257713265_p64126518"></a><a name="en-us_topic_0257713265_p64126518"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p26865456"><a name="en-us_topic_0257713265_p26865456"></a><a name="en-us_topic_0257713265_p26865456"></a>ERRCODE_OUT_OF_MEMORY</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row40462518"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p56238536"><a name="en-us_topic_0257713265_p56238536"></a><a name="en-us_topic_0257713265_p56238536"></a>Database with OID %u does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p59027591"><a name="en-us_topic_0257713265_p59027591"></a><a name="en-us_topic_0257713265_p59027591"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p16505562"><a name="en-us_topic_0257713265_p16505562"></a><a name="en-us_topic_0257713265_p16505562"></a>ERRCODE_UNDEFINED_DATABASE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row14332335"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p20068476"><a name="en-us_topic_0257713265_p20068476"></a><a name="en-us_topic_0257713265_p20068476"></a>Value exceeds maximum precision: %d.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p14933841"><a name="en-us_topic_0257713265_p14933841"></a><a name="en-us_topic_0257713265_p14933841"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p1681623"><a name="en-us_topic_0257713265_p1681623"></a><a name="en-us_topic_0257713265_p1681623"></a>ERRCODE_NUMERIC_VALUE_OUT_</p>
<p id="en-us_topic_0257713265_p15134612"><a name="en-us_topic_0257713265_p15134612"></a><a name="en-us_topic_0257713265_p15134612"></a>OF_RANGE</p>
</td>
</tr>
<tr id="en-us_topic_0257713265_row1993781"><td class="cellrowborder" valign="top" width="34.673467346734675%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713265_p27278612"><a name="en-us_topic_0257713265_p27278612"></a><a name="en-us_topic_0257713265_p27278612"></a>You have reached a maximum logical capacity %lu of allowed %lu.</p>
</td>
<td class="cellrowborder" valign="top" width="30.633063306330634%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713265_p62083996"><a name="en-us_topic_0257713265_p62083996"></a><a name="en-us_topic_0257713265_p62083996"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.69346934693469%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713265_p62747764"><a name="en-us_topic_0257713265_p62747764"></a><a name="en-us_topic_0257713265_p62747764"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="en-us_topic_0257713265_p27858965"><a name="en-us_topic_0257713265_p27858965"></a><a name="en-us_topic_0257713265_p27858965"></a>MEMORY</p>
</td>
</tr>
</tbody>
</table>

