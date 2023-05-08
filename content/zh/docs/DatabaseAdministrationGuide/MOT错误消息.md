# MOT错误消息<a name="ZH-CN_TOPIC_0280525150"></a>

错误可能由多种场景引起。所有错误都记录在数据库服务器日志文件中。此外，与用户相关的错误作为对查询、事务或存储过程执行或数据库管理操作的响应的一部分返回给用户。

-   服务器日志中报告的错误包括函数、实体、上下文、错误消息、错误描述和严重性。
-   向用户报告的错误被翻译成标准PostgreSQL错误码，可能由MOT特定的消息和描述组成。

错误提示、错误描述和错误码见下文。该错误码实际上是内部代码，不记录也不返回给用户。

## 写入日志文件的错误<a name="section2660313"></a>

所有错误都记录在数据库服务器日志文件中。以下列出了写入数据库服务器日志文件但未返回给用户的错误。该日志位于data文件夹中，命名为postgresql-DATE-TIME.log。

**表 1**  只写入日志文件的错误

<a name="table24390887"></a>
<table><thead align="left"><tr id="row39145392"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p16660147"><a name="p16660147"></a><a name="p16660147"></a>日志消息</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p7294704"><a name="p7294704"></a><a name="p7294704"></a>内部错误代码</p>
</th>
</tr>
</thead>
<tbody><tr id="row54000141"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p11935282"><a name="p11935282"></a><a name="p11935282"></a>Error code denoting success</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p27233800"><a name="p27233800"></a><a name="p27233800"></a>MOT_NO_ERROR 0</p>
</td>
</tr>
<tr id="row43777613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56325742"><a name="p56325742"></a><a name="p56325742"></a>Out of memory</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p66091285"><a name="p66091285"></a><a name="p66091285"></a>MOT_ERROR_OOM 1</p>
</td>
</tr>
<tr id="row57950653"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p63491301"><a name="p63491301"></a><a name="p63491301"></a>Invalid configuration</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p42521733"><a name="p42521733"></a><a name="p42521733"></a>MOT_ERROR_INVALID_CFG 2</p>
</td>
</tr>
<tr id="row47151282"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p61157498"><a name="p61157498"></a><a name="p61157498"></a>Invalid argument passed to function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p54810319"><a name="p54810319"></a><a name="p54810319"></a>MOT_ERROR_INVALID_ARG 3</p>
</td>
</tr>
<tr id="row23530825"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p26948700"><a name="p26948700"></a><a name="p26948700"></a>System call failed</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p35361071"><a name="p35361071"></a><a name="p35361071"></a>MOT_ERROR_SYSTEM_FAILURE 4</p>
</td>
</tr>
<tr id="row49814184"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8417086"><a name="p8417086"></a><a name="p8417086"></a>Resource limit reached</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p10695402"><a name="p10695402"></a><a name="p10695402"></a>MOT_ERROR_RESOURCE_LIMIT 5</p>
</td>
</tr>
<tr id="row29149754"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12319903"><a name="p12319903"></a><a name="p12319903"></a>Internal logic error</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p58388109"><a name="p58388109"></a><a name="p58388109"></a>MOT_ERROR_INTERNAL 6</p>
</td>
</tr>
<tr id="row55730934"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17911811"><a name="p17911811"></a><a name="p17911811"></a>Resource unavailable</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p41570605"><a name="p41570605"></a><a name="p41570605"></a>MOT_ERROR_RESOURCE_UNAVAILABLE 7</p>
</td>
</tr>
<tr id="row38591128"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p38873655"><a name="p38873655"></a><a name="p38873655"></a>Unique violation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p61758375"><a name="p61758375"></a><a name="p61758375"></a>MOT_ERROR_UNIQUE_VIOLATION 8</p>
</td>
</tr>
<tr id="row18954469"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p58917009"><a name="p58917009"></a><a name="p58917009"></a>Invalid memory allocation size</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7548385"><a name="p7548385"></a><a name="p7548385"></a>MOT_ERROR_INVALID_MEMORY_SIZE 9</p>
</td>
</tr>
<tr id="row826602"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66954796"><a name="p66954796"></a><a name="p66954796"></a>Index out of range</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p54629382"><a name="p54629382"></a><a name="p54629382"></a>MOT_ERROR_INDEX_OUT_OF_RANGE 10</p>
</td>
</tr>
<tr id="row21902396"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p29263662"><a name="p29263662"></a><a name="p29263662"></a>Error code unknown</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p21546445"><a name="p21546445"></a><a name="p21546445"></a>MOT_ERROR_INVALID_STATE 11</p>
</td>
</tr>
</tbody>
</table>

## 返回给用户的错误<a name="section23942818"></a>

下面列出了写入数据库服务器日志文件并返回给用户的错误。

MOT使用返回码（Return Code，RC）返回Postgres标准错误代码至封装。某些RC会导致向正在与数据库交互的用户生成错误消息。

MOT从内部返回Postgres代码（见下文）到数据库包，数据库封装根据标准的Postgres行为对其做出反应。

>![](public_sys-resources/icon-note.png) **说明：** 
>提示信息中的%s、%u、%lu指代相应的错误信息（如查询、表名或其他信息）。
>
>-   %s：字符串
>
>-   %u：数字
>
>-   %lu：数字

**表 2**  返回给用户并记录到日志文件的错误

<a name="table9981963"></a>
<table><thead align="left"><tr id="row30972475"><th class="cellrowborder" valign="top" width="34.69387755102041%" id="mcps1.2.4.1.1"><p id="p25742575"><a name="p25742575"></a><a name="p25742575"></a>返回给用户的短/长描述</p>
</th>
<th class="cellrowborder" valign="top" width="30.612244897959183%" id="mcps1.2.4.1.2"><p id="p4773831"><a name="p4773831"></a><a name="p4773831"></a>Postgres代码</p>
</th>
<th class="cellrowborder" valign="top" width="34.69387755102041%" id="mcps1.2.4.1.3"><p id="p51136044"><a name="p51136044"></a><a name="p51136044"></a>内部错误码</p>
</th>
</tr>
</thead>
<tbody><tr id="row48378885"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p26375611"><a name="p26375611"></a><a name="p26375611"></a>Success.</p>
<p id="p36053908"><a name="p36053908"></a><a name="p36053908"></a>Denotes success</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p34685407"><a name="p34685407"></a><a name="p34685407"></a>ERRCODE_SUCCESSFUL_</p>
<p id="p43733211"><a name="p43733211"></a><a name="p43733211"></a>COMPLETION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p52729239"><a name="p52729239"></a><a name="p52729239"></a>RC_OK = 0</p>
</td>
</tr>
<tr id="row4801103"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p53345092"><a name="p53345092"></a><a name="p53345092"></a>Failure</p>
<p id="p10343786"><a name="p10343786"></a><a name="p10343786"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p32540371"><a name="p32540371"></a><a name="p32540371"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p18524400"><a name="p18524400"></a><a name="p18524400"></a>RC_ERROR = 1</p>
</td>
</tr>
<tr id="row32501878"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p15406461"><a name="p15406461"></a><a name="p15406461"></a>Unknown error has occurred.</p>
<p id="p4440424"><a name="p4440424"></a><a name="p4440424"></a>Denotes aborted operation.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p24130067"><a name="p24130067"></a><a name="p24130067"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p8378386"><a name="p8378386"></a><a name="p8378386"></a>RC_ABORT</p>
</td>
</tr>
<tr id="row8296613"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p937022"><a name="p937022"></a><a name="p937022"></a>Column definition of %s is not supported.</p>
<p id="p8433198"><a name="p8433198"></a><a name="p8433198"></a>Column type %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p12000410"><a name="p12000410"></a><a name="p12000410"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p32509179"><a name="p32509179"></a><a name="p32509179"></a>RC_UNSUPPORTED_COL_TYPE</p>
</td>
</tr>
<tr id="row24147163"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p9763206"><a name="p9763206"></a><a name="p9763206"></a>Column definition of %s is not supported.</p>
<p id="p20759995"><a name="p20759995"></a><a name="p20759995"></a>Column type Array of %s is not supported yet.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p3838058"><a name="p3838058"></a><a name="p3838058"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p42447277"><a name="p42447277"></a><a name="p42447277"></a>RC_UNSUPPORTED_COL_TYPE_ARR</p>
</td>
</tr>
<tr id="row46481178"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p6879063"><a name="p6879063"></a><a name="p6879063"></a>Column size %d exceeds max tuple size %u.</p>
<p id="p61911569"><a name="p61911569"></a><a name="p61911569"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p48781186"><a name="p48781186"></a><a name="p48781186"></a>ERRCODE_FEATURE_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p58961959"><a name="p58961959"></a><a name="p58961959"></a>RC_EXCEEDS_MAX_ROW_SIZE</p>
</td>
</tr>
<tr id="row60895584"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p33595311"><a name="p33595311"></a><a name="p33595311"></a>Column name %s exceeds max name size %u.</p>
<p id="p33922351"><a name="p33922351"></a><a name="p33922351"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p63355873"><a name="p63355873"></a><a name="p63355873"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p31552104"><a name="p31552104"></a><a name="p31552104"></a>RC_COL_NAME_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="row15533487"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p50252944"><a name="p50252944"></a><a name="p50252944"></a>Column size %d exceeds max size %u.</p>
<p id="p49623316"><a name="p49623316"></a><a name="p49623316"></a>Column definition of %s is not supported.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p60065673"><a name="p60065673"></a><a name="p60065673"></a>ERRCODE_INVALID_COLUMN_DEFINITION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p33481330"><a name="p33481330"></a><a name="p33481330"></a>RC_COL_SIZE_INVLALID</p>
</td>
</tr>
<tr id="row32896518"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p47372281"><a name="p47372281"></a><a name="p47372281"></a>Cannot create table.</p>
<p id="p23697346"><a name="p23697346"></a><a name="p23697346"></a>Cannot add column %s; as the number of declared columns exceeds the maximum declared columns.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p40436856"><a name="p40436856"></a><a name="p40436856"></a>ERRCODE_FEATURE_NOT_</p>
<p id="p28387392"><a name="p28387392"></a><a name="p28387392"></a>SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p17677412"><a name="p17677412"></a><a name="p17677412"></a>RC_TABLE_EXCEEDS_MAX_</p>
<p id="p24878987"><a name="p24878987"></a><a name="p24878987"></a>DECLARED_COLS</p>
</td>
</tr>
<tr id="row22584297"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p17388791"><a name="p17388791"></a><a name="p17388791"></a>Cannot create index.</p>
<p id="p22281392"><a name="p22281392"></a><a name="p22281392"></a>Total column size is greater than maximum index size %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p59962333"><a name="p59962333"></a><a name="p59962333"></a>ERRCODE_FDW_KEY_SIZE_</p>
<p id="p2790091"><a name="p2790091"></a><a name="p2790091"></a>EXCEEDS_MAX_ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p24670818"><a name="p24670818"></a><a name="p24670818"></a>RC_INDEX_EXCEEDS_MAX_SIZE</p>
</td>
</tr>
<tr id="row20710773"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p66959920"><a name="p66959920"></a><a name="p66959920"></a>Cannot create index.</p>
<p id="p65768369"><a name="p65768369"></a><a name="p65768369"></a>Total number of indexes for table %s is greater than the maximum number of indexes allowed %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p25637690"><a name="p25637690"></a><a name="p25637690"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="p29412619"><a name="p29412619"></a><a name="p29412619"></a>INDEXES</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p33611899"><a name="p33611899"></a><a name="p33611899"></a>RC_TABLE_EXCEEDS_MAX_INDEXES</p>
</td>
</tr>
<tr id="row34071636"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p8339126"><a name="p8339126"></a><a name="p8339126"></a>Cannot execute statement.</p>
<p id="p7943272"><a name="p7943272"></a><a name="p7943272"></a>Maximum number of DDLs per transaction reached the maximum %u.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p39425334"><a name="p39425334"></a><a name="p39425334"></a>ERRCODE_FDW_TOO_MANY_</p>
<p id="p19283691"><a name="p19283691"></a><a name="p19283691"></a>DDL_CHANGES_IN_</p>
<p id="p39335496"><a name="p39335496"></a><a name="p39335496"></a>TRANSACTION_NOT_</p>
<p id="p18475151"><a name="p18475151"></a><a name="p18475151"></a>ALLOWED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p20092226"><a name="p20092226"></a><a name="p20092226"></a>RC_TXN_EXCEEDS_MAX_DDLS</p>
</td>
</tr>
<tr id="row46612314"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p17501098"><a name="p17501098"></a><a name="p17501098"></a>Unique constraint violation</p>
<p id="p23292156"><a name="p23292156"></a><a name="p23292156"></a>Duplicate key value violates unique constraint \"%s\"".</p>
<p id="p8302814"><a name="p8302814"></a><a name="p8302814"></a>Key %s already exists.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p1439327"><a name="p1439327"></a><a name="p1439327"></a>ERRCODE_UNIQUE_</p>
<p id="p12953943"><a name="p12953943"></a><a name="p12953943"></a>VIOLATION</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p42636469"><a name="p42636469"></a><a name="p42636469"></a>RC_UNIQUE_VIOLATION</p>
</td>
</tr>
<tr id="row48183909"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p10582588"><a name="p10582588"></a><a name="p10582588"></a>Table \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p51883262"><a name="p51883262"></a><a name="p51883262"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p41794709"><a name="p41794709"></a><a name="p41794709"></a>RC_TABLE_NOT_FOUND</p>
</td>
</tr>
<tr id="row40608068"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p919221"><a name="p919221"></a><a name="p919221"></a>Index \"%s\" does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p7348078"><a name="p7348078"></a><a name="p7348078"></a>ERRCODE_UNDEFINED_TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p58323480"><a name="p58323480"></a><a name="p58323480"></a>RC_INDEX_NOT_FOUND</p>
</td>
</tr>
<tr id="row55149279"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p37906613"><a name="p37906613"></a><a name="p37906613"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p50536783"><a name="p50536783"></a><a name="p50536783"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p66947605"><a name="p66947605"></a><a name="p66947605"></a>RC_LOCAL_ROW_FOUND</p>
</td>
</tr>
<tr id="row65657541"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p16660601"><a name="p16660601"></a><a name="p16660601"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p7331470"><a name="p7331470"></a><a name="p7331470"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p56978220"><a name="p56978220"></a><a name="p56978220"></a>RC_LOCAL_ROW_NOT_FOUND</p>
</td>
</tr>
<tr id="row43041933"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p63844554"><a name="p63844554"></a><a name="p63844554"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p4026404"><a name="p4026404"></a><a name="p4026404"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p57703298"><a name="p57703298"></a><a name="p57703298"></a>RC_LOCAL_ROW_DELETED</p>
</td>
</tr>
<tr id="row49567638"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p55555766"><a name="p55555766"></a><a name="p55555766"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p3723215"><a name="p3723215"></a><a name="p3723215"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p33144968"><a name="p33144968"></a><a name="p33144968"></a>RC_INSERT_ON_EXIST</p>
</td>
</tr>
<tr id="row29869256"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p3490644"><a name="p3490644"></a><a name="p3490644"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p14306773"><a name="p14306773"></a><a name="p14306773"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p17998003"><a name="p17998003"></a><a name="p17998003"></a>RC_INDEX_RETRY_INSERT</p>
</td>
</tr>
<tr id="row27764304"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p34316164"><a name="p34316164"></a><a name="p34316164"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p28145863"><a name="p28145863"></a><a name="p28145863"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p65222468"><a name="p65222468"></a><a name="p65222468"></a>RC_INDEX_DELETE</p>
</td>
</tr>
<tr id="row50131303"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p34103723"><a name="p34103723"></a><a name="p34103723"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p10938172"><a name="p10938172"></a><a name="p10938172"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p13576705"><a name="p13576705"></a><a name="p13576705"></a>RC_LOCAL_ROW_NOT_VISIBLE</p>
</td>
</tr>
<tr id="row55081482"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p32415097"><a name="p32415097"></a><a name="p32415097"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p8377233"><a name="p8377233"></a><a name="p8377233"></a>ERRCODE_OUT_OF_LOGICAL_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p7467257"><a name="p7467257"></a><a name="p7467257"></a>RC_MEMORY_ALLOCATION_ERROR</p>
</td>
</tr>
<tr id="row96450"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p7812518"><a name="p7812518"></a><a name="p7812518"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p28834222"><a name="p28834222"></a><a name="p28834222"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p53870659"><a name="p53870659"></a><a name="p53870659"></a>RC_ILLEGAL_ROW_STATE</p>
</td>
</tr>
<tr id="row15073885"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p13025200"><a name="p13025200"></a><a name="p13025200"></a>Null constraint violated.</p>
<p id="p50117938"><a name="p50117938"></a><a name="p50117938"></a>NULL value cannot be inserted into non-null column %s at table %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p33021148"><a name="p33021148"></a><a name="p33021148"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p57467314"><a name="p57467314"></a><a name="p57467314"></a>RC_NULL_VIOLATION</p>
</td>
</tr>
<tr id="row47443786"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p17741454"><a name="p17741454"></a><a name="p17741454"></a>Critical error.</p>
<p id="p25455365"><a name="p25455365"></a><a name="p25455365"></a>Critical error: %s.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p48618705"><a name="p48618705"></a><a name="p48618705"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p45801066"><a name="p45801066"></a><a name="p45801066"></a>RC_PANIC</p>
</td>
</tr>
<tr id="row9556415"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p35872117"><a name="p35872117"></a><a name="p35872117"></a>A checkpoint is in progress – cannot truncate table.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p19960364"><a name="p19960364"></a><a name="p19960364"></a>ERRCODE_FDW_OPERATION_NOT_SUPPORTED</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p6176779"><a name="p6176779"></a><a name="p6176779"></a>RC_NA</p>
</td>
</tr>
<tr id="row55591018"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p6578585"><a name="p6578585"></a><a name="p6578585"></a>Unknown error has occurred.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 "><p id="p63103365"><a name="p63103365"></a><a name="p63103365"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p11098901"><a name="p11098901"></a><a name="p11098901"></a>RC_MAX_VALUE</p>
</td>
</tr>
<tr id="row32781246"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p38035264"><a name="p38035264"></a><a name="p38035264"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p38612917"><a name="p38612917"></a><a name="p38612917"></a>ERRCODE_CONFIG_FILE_ERROR</p>
</td>
</tr>
<tr id="row11971938"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p30202945"><a name="p30202945"></a><a name="p30202945"></a>&lt;recovery message&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p56158500"><a name="p56158500"></a><a name="p56158500"></a>ERRCODE_INVALID_TABLE_</p>
<p id="p35664454"><a name="p35664454"></a><a name="p35664454"></a>DEFINITION</p>
</td>
</tr>
<tr id="row52544632"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p28256793"><a name="p28256793"></a><a name="p28256793"></a>Memory engine – Failed to perform commit prepared.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p38136927"><a name="p38136927"></a><a name="p38136927"></a>ERRCODE_INVALID_TRANSACTION_</p>
<p id="p7688030"><a name="p7688030"></a><a name="p7688030"></a>STATE</p>
</td>
</tr>
<tr id="row2083414"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p34538808"><a name="p34538808"></a><a name="p34538808"></a>Invalid option &lt;option name&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p49598947"><a name="p49598947"></a><a name="p49598947"></a>ERRCODE_FDW_INVALID_OPTION_</p>
<p id="p43737343"><a name="p43737343"></a><a name="p43737343"></a>NAME</p>
</td>
</tr>
<tr id="row58091771"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p7813024"><a name="p7813024"></a><a name="p7813024"></a>Invalid memory allocation request size.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p57189295"><a name="p57189295"></a><a name="p57189295"></a>ERRCODE_INVALID_PARAMETER_</p>
<p id="p44941608"><a name="p44941608"></a><a name="p44941608"></a>VALUE</p>
</td>
</tr>
<tr id="row1821289"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p13306703"><a name="p13306703"></a><a name="p13306703"></a>Memory is temporarily unavailable.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p63761346"><a name="p63761346"></a><a name="p63761346"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="p36981208"><a name="p36981208"></a><a name="p36981208"></a>MEMORY</p>
</td>
</tr>
<tr id="row64395422"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p48646727"><a name="p48646727"></a><a name="p48646727"></a>Could not serialize access due to concurrent update.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p1422366"><a name="p1422366"></a><a name="p1422366"></a>ERRCODE_T_R_SERIALIZATION_</p>
<p id="p12801297"><a name="p12801297"></a><a name="p12801297"></a>FAILURE</p>
</td>
</tr>
<tr id="row48102812"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p4013703"><a name="p4013703"></a><a name="p4013703"></a>Alter table operation is not supported for memory table.</p>
<p id="p36123328"><a name="p36123328"></a><a name="p36123328"></a>Cannot create MOT tables while incremental checkpoint is enabled.</p>
<p id="p56674502"><a name="p56674502"></a><a name="p56674502"></a>Re-index is not supported for memory tables.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p58303330"><a name="p58303330"></a><a name="p58303330"></a>ERRCODE_FDW_OPERATION_NOT_</p>
<p id="p54967923"><a name="p54967923"></a><a name="p54967923"></a>SUPPORTED</p>
</td>
</tr>
<tr id="row24949262"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p7624367"><a name="p7624367"></a><a name="p7624367"></a>Allocation of table metadata failed.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p27374575"><a name="p27374575"></a><a name="p27374575"></a>ERRCODE_OUT_OF_MEMORY</p>
</td>
</tr>
<tr id="row45044590"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p24733137"><a name="p24733137"></a><a name="p24733137"></a>Database with OID %u does not exist.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p4884971"><a name="p4884971"></a><a name="p4884971"></a>ERRCODE_UNDEFINED_DATABASE</p>
</td>
</tr>
<tr id="row43964741"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p4374262"><a name="p4374262"></a><a name="p4374262"></a>Value exceeds maximum precision: %d.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p44048476"><a name="p44048476"></a><a name="p44048476"></a>ERRCODE_NUMERIC_VALUE_OUT_</p>
<p id="p60891971"><a name="p60891971"></a><a name="p60891971"></a>OF_RANGE</p>
</td>
</tr>
<tr id="row11156835"><td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.1 "><p id="p31288405"><a name="p31288405"></a><a name="p31288405"></a>You have reached a maximum logical capacity %lu of allowed %lu.</p>
</td>
<td class="cellrowborder" valign="top" width="30.612244897959183%" headers="mcps1.2.4.1.2 ">-</td>
<td class="cellrowborder" valign="top" width="34.69387755102041%" headers="mcps1.2.4.1.3 "><p id="p64323616"><a name="p64323616"></a><a name="p64323616"></a>ERRCODE_OUT_OF_LOGICAL_</p>
<p id="p42041636"><a name="p42041636"></a><a name="p42041636"></a>MEMORY</p>
</td>
</tr>
</tbody>
</table>

