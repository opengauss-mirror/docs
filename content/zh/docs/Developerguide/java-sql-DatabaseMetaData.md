# java.sql.DatabaseMetaData<a name="ZH-CN_TOPIC_0289900323"></a>

java.sql.DatabaseMetaData是数据库对象定义接口。

**表 1**  对java.sql.DatabaseMetaData的支持情况

<a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_table8388124"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row36487540"><th class="cellrowborder" valign="top" width="37.730000000000004%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae123f115d48d478f9e47f920e11fd51c"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae123f115d48d478f9e47f920e11fd51c"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae123f115d48d478f9e47f920e11fd51c"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="25.34%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p471115"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p471115"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p471115"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="36.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p3032185"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p3032185"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p3032185"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="row1758620391565"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p658711391568"><a name="p658711391568"></a><a name="p658711391568"></a>allProceduresAreCallable()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p195873391620"><a name="p195873391620"></a><a name="p195873391620"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p858715391862"><a name="p858715391862"></a><a name="p858715391862"></a>Yes</p>
</td>
</tr>
<tr id="row163441057869"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p113440572069"><a name="p113440572069"></a><a name="p113440572069"></a>allTablesAreSelectable()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p734495719612"><a name="p734495719612"></a><a name="p734495719612"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1534415572614"><a name="p1534415572614"></a><a name="p1534415572614"></a>Yes</p>
</td>
</tr>
<tr id="row20383721371"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p43831429719"><a name="p43831429719"></a><a name="p43831429719"></a>autoCommitFailureClosesAllResultSets()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p183831022713"><a name="p183831022713"></a><a name="p183831022713"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p123831213712"><a name="p123831213712"></a><a name="p123831213712"></a>Yes</p>
</td>
</tr>
<tr id="row450813137817"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1350815131182"><a name="p1350815131182"></a><a name="p1350815131182"></a>dataDefinitionCausesTransactionCommit()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p6508113482"><a name="p6508113482"></a><a name="p6508113482"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1150815138819"><a name="p1150815138819"></a><a name="p1150815138819"></a>Yes</p>
</td>
</tr>
<tr id="row10223331286"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p4221133287"><a name="p4221133287"></a><a name="p4221133287"></a>dataDefinitionIgnoredInTransactions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p102215332083"><a name="p102215332083"></a><a name="p102215332083"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p152219331781"><a name="p152219331781"></a><a name="p152219331781"></a>Yes</p>
</td>
</tr>
<tr id="row10544379917"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p7544137797"><a name="p7544137797"></a><a name="p7544137797"></a>deletesAreDetected​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p05441971094"><a name="p05441971094"></a><a name="p05441971094"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p2054457692"><a name="p2054457692"></a><a name="p2054457692"></a>Yes</p>
</td>
</tr>
<tr id="row166184321492"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p661812328910"><a name="p661812328910"></a><a name="p661812328910"></a>doesMaxRowSizeIncludeBlobs()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p76181321095"><a name="p76181321095"></a><a name="p76181321095"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1961818329912"><a name="p1961818329912"></a><a name="p1961818329912"></a>Yes</p>
</td>
</tr>
<tr id="row1313019511593"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p2130145112913"><a name="p2130145112913"></a><a name="p2130145112913"></a>generatedKeyAlwaysReturned()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1513012511593"><a name="p1513012511593"></a><a name="p1513012511593"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p121303513914"><a name="p121303513914"></a><a name="p121303513914"></a>Yes</p>
</td>
</tr>
<tr id="row612611565336"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p51261556183316"><a name="p51261556183316"></a><a name="p51261556183316"></a>getBestRowIdentifier​(String catalog, String schema, String table, int scope, boolean nullable)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p812618561338"><a name="p812618561338"></a><a name="p812618561338"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p19126356103318"><a name="p19126356103318"></a><a name="p19126356103318"></a>Yes</p>
</td>
</tr>
<tr id="row3644181873420"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p464411863420"><a name="p464411863420"></a><a name="p464411863420"></a>getCatalogs()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p164401817341"><a name="p164401817341"></a><a name="p164401817341"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p064415188349"><a name="p064415188349"></a><a name="p064415188349"></a>Yes</p>
</td>
</tr>
<tr id="row126303953416"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p22631439153410"><a name="p22631439153410"></a><a name="p22631439153410"></a>getCatalogSeparator()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p19263123919348"><a name="p19263123919348"></a><a name="p19263123919348"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p92635398344"><a name="p92635398344"></a><a name="p92635398344"></a>Yes</p>
</td>
</tr>
<tr id="row1718335612347"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p718412568347"><a name="p718412568347"></a><a name="p718412568347"></a>getCatalogTerm()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p9184175615345"><a name="p9184175615345"></a><a name="p9184175615345"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p218417562343"><a name="p218417562343"></a><a name="p218417562343"></a>Yes</p>
</td>
</tr>
<tr id="row3977202853520"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p18978428103512"><a name="p18978428103512"></a><a name="p18978428103512"></a>getClientInfoProperties()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1097812810358"><a name="p1097812810358"></a><a name="p1097812810358"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p297852820358"><a name="p297852820358"></a><a name="p297852820358"></a>Yes</p>
</td>
</tr>
<tr id="row44681248153513"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p746817489353"><a name="p746817489353"></a><a name="p746817489353"></a>getColumnPrivileges​(String catalog, String schema, String table, String columnNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p19468204818352"><a name="p19468204818352"></a><a name="p19468204818352"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p4468184812352"><a name="p4468184812352"></a><a name="p4468184812352"></a>Yes</p>
</td>
</tr>
<tr id="row1967613533613"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p3676183510368"><a name="p3676183510368"></a><a name="p3676183510368"></a>getConnection()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p10676173519364"><a name="p10676173519364"></a><a name="p10676173519364"></a>Connection</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p3676123517367"><a name="p3676123517367"></a><a name="p3676123517367"></a>Yes</p>
</td>
</tr>
<tr id="row1964135414366"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p596420543361"><a name="p596420543361"></a><a name="p596420543361"></a>getCrossReference​(String parentCatalog, String parentSchema, String parentTable, String foreignCatalog, String foreignSchema, String foreignTable)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1296405416367"><a name="p1296405416367"></a><a name="p1296405416367"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p39641954183611"><a name="p39641954183611"></a><a name="p39641954183611"></a>Yes</p>
</td>
</tr>
<tr id="row5226442123814"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p322634214381"><a name="p322634214381"></a><a name="p322634214381"></a>getDefaultTransactionIsolation()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1222714219384"><a name="p1222714219384"></a><a name="p1222714219384"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p12272426381"><a name="p12272426381"></a><a name="p12272426381"></a>Yes</p>
</td>
</tr>
<tr id="row193914168393"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p14939111611394"><a name="p14939111611394"></a><a name="p14939111611394"></a>getExportedKeys​(String catalog, String schema, String table)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p129391162395"><a name="p129391162395"></a><a name="p129391162395"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p19939716113915"><a name="p19939716113915"></a><a name="p19939716113915"></a>Yes</p>
</td>
</tr>
<tr id="row155803513396"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p058010514395"><a name="p058010514395"></a><a name="p058010514395"></a>getExtraNameCharacters()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p458045193913"><a name="p458045193913"></a><a name="p458045193913"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p758012514391"><a name="p758012514391"></a><a name="p758012514391"></a>Yes</p>
</td>
</tr>
<tr id="row1376672816408"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p137661928154014"><a name="p137661928154014"></a><a name="p137661928154014"></a>getFunctionColumns​(String catalog, String schemaPattern, String functionNamePattern, String columnNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1766102804019"><a name="p1766102804019"></a><a name="p1766102804019"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p207661528164019"><a name="p207661528164019"></a><a name="p207661528164019"></a>Yes</p>
</td>
</tr>
<tr id="row1924764117401"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p152485419407"><a name="p152485419407"></a><a name="p152485419407"></a>getFunctions​(String catalog, String schemaPattern, String functionNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p7248164174011"><a name="p7248164174011"></a><a name="p7248164174011"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p18248124113409"><a name="p18248124113409"></a><a name="p18248124113409"></a>Yes</p>
</td>
</tr>
<tr id="row3967191018414"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1496721064115"><a name="p1496721064115"></a><a name="p1496721064115"></a>getIdentifierQuoteString()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p199679101418"><a name="p199679101418"></a><a name="p199679101418"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p17967141019414"><a name="p17967141019414"></a><a name="p17967141019414"></a>Yes</p>
</td>
</tr>
<tr id="row189381637124114"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p19381037184119"><a name="p19381037184119"></a><a name="p19381037184119"></a>getImportedKeys​(String catalog, String schema, String table)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p39381237164111"><a name="p39381237164111"></a><a name="p39381237164111"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p14938143719412"><a name="p14938143719412"></a><a name="p14938143719412"></a>Yes</p>
</td>
</tr>
<tr id="row1498682712427"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p15986162713426"><a name="p15986162713426"></a><a name="p15986162713426"></a>getIndexInfo​(String catalog, String schema, String table, boolean unique, boolean approximate)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p13986202774215"><a name="p13986202774215"></a><a name="p13986202774215"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p798692713425"><a name="p798692713425"></a><a name="p798692713425"></a>Yes</p>
</td>
</tr>
<tr id="row5750141994318"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p16750121913437"><a name="p16750121913437"></a><a name="p16750121913437"></a>getMaxBinaryLiteralLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p17501419194317"><a name="p17501419194317"></a><a name="p17501419194317"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p127505197435"><a name="p127505197435"></a><a name="p127505197435"></a>Yes</p>
</td>
</tr>
<tr id="row137294286434"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p197291028174315"><a name="p197291028174315"></a><a name="p197291028174315"></a>getMaxCatalogNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p57291428144320"><a name="p57291428144320"></a><a name="p57291428144320"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1872912286434"><a name="p1872912286434"></a><a name="p1872912286434"></a>Yes</p>
</td>
</tr>
<tr id="row2933103494320"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p4933143454319"><a name="p4933143454319"></a><a name="p4933143454319"></a>getMaxCharLiteralLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p3933834144314"><a name="p3933834144314"></a><a name="p3933834144314"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p59332342432"><a name="p59332342432"></a><a name="p59332342432"></a>Yes</p>
</td>
</tr>
<tr id="row53521739134312"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1535233914317"><a name="p1535233914317"></a><a name="p1535233914317"></a>getMaxColumnNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p14352639194311"><a name="p14352639194311"></a><a name="p14352639194311"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p035293974315"><a name="p035293974315"></a><a name="p035293974315"></a>Yes</p>
</td>
</tr>
<tr id="row53031044144312"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1730312443434"><a name="p1730312443434"></a><a name="p1730312443434"></a>getMaxColumnsInGroupBy()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p230314442432"><a name="p230314442432"></a><a name="p230314442432"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p3303124417431"><a name="p3303124417431"></a><a name="p3303124417431"></a>Yes</p>
</td>
</tr>
<tr id="row169191514434"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p991915112431"><a name="p991915112431"></a><a name="p991915112431"></a>getMaxColumnsInIndex()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p391912514438"><a name="p391912514438"></a><a name="p391912514438"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p3919351154316"><a name="p3919351154316"></a><a name="p3919351154316"></a>Yes</p>
</td>
</tr>
<tr id="row16470629446"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p44711264416"><a name="p44711264416"></a><a name="p44711264416"></a>getMaxColumnsInOrderBy()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1247111274410"><a name="p1247111274410"></a><a name="p1247111274410"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p3471182184413"><a name="p3471182184413"></a><a name="p3471182184413"></a>Yes</p>
</td>
</tr>
<tr id="row13143127154411"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p91436710442"><a name="p91436710442"></a><a name="p91436710442"></a>getMaxColumnsInSelect()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p161438744416"><a name="p161438744416"></a><a name="p161438744416"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p514318716441"><a name="p514318716441"></a><a name="p514318716441"></a>Yes</p>
</td>
</tr>
<tr id="row1699119117440"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p149911211174417"><a name="p149911211174417"></a><a name="p149911211174417"></a>getMaxColumnsInTable()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p10991161117448"><a name="p10991161117448"></a><a name="p10991161117448"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p6991191144416"><a name="p6991191144416"></a><a name="p6991191144416"></a>Yes</p>
</td>
</tr>
<tr id="row456810165446"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p20568111684412"><a name="p20568111684412"></a><a name="p20568111684412"></a>getMaxConnections()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p9568616134410"><a name="p9568616134410"></a><a name="p9568616134410"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p135681116174414"><a name="p135681116174414"></a><a name="p135681116174414"></a>Yes</p>
</td>
</tr>
<tr id="row571512409446"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1571554044411"><a name="p1571554044411"></a><a name="p1571554044411"></a>getMaxCursorNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p471564064420"><a name="p471564064420"></a><a name="p471564064420"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p157151640134417"><a name="p157151640134417"></a><a name="p157151640134417"></a>Yes</p>
</td>
</tr>
<tr id="row347314413441"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p2047414464414"><a name="p2047414464414"></a><a name="p2047414464414"></a>getMaxIndexLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p124740449441"><a name="p124740449441"></a><a name="p124740449441"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p174741344174416"><a name="p174741344174416"></a><a name="p174741344174416"></a>Yes</p>
</td>
</tr>
<tr id="row11685144844414"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p7685154815446"><a name="p7685154815446"></a><a name="p7685154815446"></a>getMaxLogicalLobSize()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p468517483442"><a name="p468517483442"></a><a name="p468517483442"></a>default long</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p12685948184414"><a name="p12685948184414"></a><a name="p12685948184414"></a>Yes</p>
</td>
</tr>
<tr id="row11528105254416"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1552875215443"><a name="p1552875215443"></a><a name="p1552875215443"></a>getMaxProcedureNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p205286524447"><a name="p205286524447"></a><a name="p205286524447"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p7528185216441"><a name="p7528185216441"></a><a name="p7528185216441"></a>Yes</p>
</td>
</tr>
<tr id="row7283155720441"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p12283195784420"><a name="p12283195784420"></a><a name="p12283195784420"></a>getMaxRowSize()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p228311573443"><a name="p228311573443"></a><a name="p228311573443"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p14283757134414"><a name="p14283757134414"></a><a name="p14283757134414"></a>Yes</p>
</td>
</tr>
<tr id="row197308112450"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p673091104512"><a name="p673091104512"></a><a name="p673091104512"></a>getMaxSchemaNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p207303117455"><a name="p207303117455"></a><a name="p207303117455"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p57301616453"><a name="p57301616453"></a><a name="p57301616453"></a>Yes</p>
</td>
</tr>
<tr id="row1495419564519"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p5954155164519"><a name="p5954155164519"></a><a name="p5954155164519"></a>getMaxStatementLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1295485134518"><a name="p1295485134518"></a><a name="p1295485134518"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p179541153459"><a name="p179541153459"></a><a name="p179541153459"></a>Yes</p>
</td>
</tr>
<tr id="row44741892451"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p154741492452"><a name="p154741492452"></a><a name="p154741492452"></a>getMaxStatements()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p124741954510"><a name="p124741954510"></a><a name="p124741954510"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p84741912459"><a name="p84741912459"></a><a name="p84741912459"></a>Yes</p>
</td>
</tr>
<tr id="row18578141334512"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p14578101354512"><a name="p14578101354512"></a><a name="p14578101354512"></a>getMaxTableNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1557811354518"><a name="p1557811354518"></a><a name="p1557811354518"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p6578161344514"><a name="p6578161344514"></a><a name="p6578161344514"></a>Yes</p>
</td>
</tr>
<tr id="row127789165450"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p8778141624512"><a name="p8778141624512"></a><a name="p8778141624512"></a>getMaxTablesInSelect()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p13778516154515"><a name="p13778516154515"></a><a name="p13778516154515"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1778111611458"><a name="p1778111611458"></a><a name="p1778111611458"></a>Yes</p>
</td>
</tr>
<tr id="row20755209453"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p57592074518"><a name="p57592074518"></a><a name="p57592074518"></a>getMaxUserNameLength()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p375520154510"><a name="p375520154510"></a><a name="p375520154510"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p127512014517"><a name="p127512014517"></a><a name="p127512014517"></a>Yes</p>
</td>
</tr>
<tr id="row18143142112447"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1143192110443"><a name="p1143192110443"></a><a name="p1143192110443"></a>getNumericFunctions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p20143122164419"><a name="p20143122164419"></a><a name="p20143122164419"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p3143192144419"><a name="p3143192144419"></a><a name="p3143192144419"></a>Yes</p>
</td>
</tr>
<tr id="row377522484414"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p157759246448"><a name="p157759246448"></a><a name="p157759246448"></a>getPrimaryKeys​(String catalog, String schema, String table)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p4775112411445"><a name="p4775112411445"></a><a name="p4775112411445"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p16775102484412"><a name="p16775102484412"></a><a name="p16775102484412"></a>Yes</p>
</td>
</tr>
<tr id="row11248710102618"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p32487106261"><a name="p32487106261"></a><a name="p32487106261"></a>getPartitionTablePrimaryKeys​(String catalog, String schema, String table)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1624801012262"><a name="p1624801012262"></a><a name="p1624801012262"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1724891032613"><a name="p1724891032613"></a><a name="p1724891032613"></a>Yes</p>
</td>
</tr>
<tr id="row572112974411"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p107282994414"><a name="p107282994414"></a><a name="p107282994414"></a>getProcedureColumns​(String catalog, String schemaPattern, String procedureNamePattern, String columnNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1872629194410"><a name="p1872629194410"></a><a name="p1872629194410"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p11722029184414"><a name="p11722029184414"></a><a name="p11722029184414"></a>Yes</p>
</td>
</tr>
<tr id="row597553211441"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p17975632164419"><a name="p17975632164419"></a><a name="p17975632164419"></a>getProcedures​(String catalog, String schemaPattern, String procedureNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p129754329443"><a name="p129754329443"></a><a name="p129754329443"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1497563234419"><a name="p1497563234419"></a><a name="p1497563234419"></a>Yes</p>
</td>
</tr>
<tr id="row1183514362443"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p983519362441"><a name="p983519362441"></a><a name="p983519362441"></a>getProcedureTerm()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p7835103617449"><a name="p7835103617449"></a><a name="p7835103617449"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p08351836114414"><a name="p08351836114414"></a><a name="p08351836114414"></a>Yes</p>
</td>
</tr>
<tr id="row11401518155312"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1940261815314"><a name="p1940261815314"></a><a name="p1940261815314"></a>getSchemas()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p64023181534"><a name="p64023181534"></a><a name="p64023181534"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p14402191865319"><a name="p14402191865319"></a><a name="p14402191865319"></a>Yes</p>
</td>
</tr>
<tr id="row105302220533"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1553011225534"><a name="p1553011225534"></a><a name="p1553011225534"></a>getSchemas​(String catalog, String schemaPattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p353013225533"><a name="p353013225533"></a><a name="p353013225533"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1453052211534"><a name="p1453052211534"></a><a name="p1453052211534"></a>Yes</p>
</td>
</tr>
<tr id="row194462269536"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p4446122655316"><a name="p4446122655316"></a><a name="p4446122655316"></a>getSchemaTerm()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1446162645316"><a name="p1446162645316"></a><a name="p1446162645316"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p18446142625315"><a name="p18446142625315"></a><a name="p18446142625315"></a>Yes</p>
</td>
</tr>
<tr id="row175678331539"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1156710336533"><a name="p1156710336533"></a><a name="p1156710336533"></a>getSearchStringEscape()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p18567153317536"><a name="p18567153317536"></a><a name="p18567153317536"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1156753319533"><a name="p1156753319533"></a><a name="p1156753319533"></a>Yes</p>
</td>
</tr>
<tr id="row177301373537"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1773073795313"><a name="p1773073795313"></a><a name="p1773073795313"></a>getSQLKeywords()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p973083715538"><a name="p973083715538"></a><a name="p973083715538"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p473023795319"><a name="p473023795319"></a><a name="p473023795319"></a>Yes</p>
</td>
</tr>
<tr id="row4571154114538"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p14571114114530"><a name="p14571114114530"></a><a name="p14571114114530"></a>getSQLStateType()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p05711041145314"><a name="p05711041145314"></a><a name="p05711041145314"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p19572341175310"><a name="p19572341175310"></a><a name="p19572341175310"></a>Yes</p>
</td>
</tr>
<tr id="row1999213294536"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1899218293533"><a name="p1899218293533"></a><a name="p1899218293533"></a>getStringFunctions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p9992172915532"><a name="p9992172915532"></a><a name="p9992172915532"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p5992829125320"><a name="p5992829125320"></a><a name="p5992829125320"></a>Yes</p>
</td>
</tr>
<tr id="row1215722512586"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p9157102517583"><a name="p9157102517583"></a><a name="p9157102517583"></a>getSystemFunctions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1215762595810"><a name="p1215762595810"></a><a name="p1215762595810"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p11572252582"><a name="p11572252582"></a><a name="p11572252582"></a>Yes</p>
</td>
</tr>
<tr id="row1265973019587"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p17659930145812"><a name="p17659930145812"></a><a name="p17659930145812"></a>getTablePrivileges​(String catalog, String schemaPattern, String tableNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p146593305588"><a name="p146593305588"></a><a name="p146593305588"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p13659153075811"><a name="p13659153075811"></a><a name="p13659153075811"></a>Yes</p>
</td>
</tr>
<tr id="row10607102845917"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p16607122812593"><a name="p16607122812593"></a><a name="p16607122812593"></a>getTimeDateFunctions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1960717284598"><a name="p1960717284598"></a><a name="p1960717284598"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p156077284599"><a name="p156077284599"></a><a name="p156077284599"></a>Yes</p>
</td>
</tr>
<tr id="row1414233445916"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1514263414596"><a name="p1514263414596"></a><a name="p1514263414596"></a>getTypeInfo()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p31422034195917"><a name="p31422034195917"></a><a name="p31422034195917"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p51421634135918"><a name="p51421634135918"></a><a name="p51421634135918"></a>Yes</p>
</td>
</tr>
<tr id="row13790103813599"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p679013384592"><a name="p679013384592"></a><a name="p679013384592"></a>getUDTs​(String catalog, String schemaPattern, String typeNamePattern, int[] types)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p147903387599"><a name="p147903387599"></a><a name="p147903387599"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p37902038105910"><a name="p37902038105910"></a><a name="p37902038105910"></a>Yes</p>
</td>
</tr>
<tr id="row81981543175910"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p319810433597"><a name="p319810433597"></a><a name="p319810433597"></a>getURL()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1319834355912"><a name="p1319834355912"></a><a name="p1319834355912"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1119918434596"><a name="p1119918434596"></a><a name="p1119918434596"></a>Yes</p>
</td>
</tr>
<tr id="row951291814"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p14521597120"><a name="p14521597120"></a><a name="p14521597120"></a>getVersionColumns​(String catalog, String schema, String table)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p9521891814"><a name="p9521891814"></a><a name="p9521891814"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1252592012"><a name="p1252592012"></a><a name="p1252592012"></a>Yes</p>
</td>
</tr>
<tr id="row1132413142112"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p6324191420115"><a name="p6324191420115"></a><a name="p6324191420115"></a>insertsAreDetected​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p193241814419"><a name="p193241814419"></a><a name="p193241814419"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1532418145114"><a name="p1532418145114"></a><a name="p1532418145114"></a>Yes</p>
</td>
</tr>
<tr id="row3515191419"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p195111915112"><a name="p195111915112"></a><a name="p195111915112"></a>locatorsUpdateCopy()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p65101920111"><a name="p65101920111"></a><a name="p65101920111"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p45151912111"><a name="p45151912111"></a><a name="p45151912111"></a>Yes</p>
</td>
</tr>
<tr id="row149531059181319"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p19953205919137"><a name="p19953205919137"></a><a name="p19953205919137"></a>othersDeletesAreVisible​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p5953205916134"><a name="p5953205916134"></a><a name="p5953205916134"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p8953155911132"><a name="p8953155911132"></a><a name="p8953155911132"></a>Yes</p>
</td>
</tr>
<tr id="row1230745181412"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p930705161414"><a name="p930705161414"></a><a name="p930705161414"></a>othersInsertsAreVisible​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1730713531420"><a name="p1730713531420"></a><a name="p1730713531420"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1630710541413"><a name="p1630710541413"></a><a name="p1630710541413"></a>Yes</p>
</td>
</tr>
<tr id="row5587111018140"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p105871510151418"><a name="p105871510151418"></a><a name="p105871510151418"></a>othersUpdatesAreVisible​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p258781013149"><a name="p258781013149"></a><a name="p258781013149"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p195879102147"><a name="p195879102147"></a><a name="p195879102147"></a>Yes</p>
</td>
</tr>
<tr id="row34601315171415"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1446081561418"><a name="p1446081561418"></a><a name="p1446081561418"></a>ownDeletesAreVisible​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1460715171412"><a name="p1460715171412"></a><a name="p1460715171412"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p2046010159148"><a name="p2046010159148"></a><a name="p2046010159148"></a>Yes</p>
</td>
</tr>
<tr id="row561435015140"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p2061475011147"><a name="p2061475011147"></a><a name="p2061475011147"></a>ownInsertsAreVisible​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p261435091418"><a name="p261435091418"></a><a name="p261435091418"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p19614105011140"><a name="p19614105011140"></a><a name="p19614105011140"></a>Yes</p>
</td>
</tr>
<tr id="row1347611552149"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p18476195531419"><a name="p18476195531419"></a><a name="p18476195531419"></a>ownUpdatesAreVisible​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p2476105591419"><a name="p2476105591419"></a><a name="p2476105591419"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p44761955181420"><a name="p44761955181420"></a><a name="p44761955181420"></a>Yes</p>
</td>
</tr>
<tr id="row16221112171511"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1022118213150"><a name="p1022118213150"></a><a name="p1022118213150"></a>storesLowerCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p6221162161512"><a name="p6221162161512"></a><a name="p6221162161512"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p92210212152"><a name="p92210212152"></a><a name="p92210212152"></a>Yes</p>
</td>
</tr>
<tr id="row756115191819"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p75610571814"><a name="p75610571814"></a><a name="p75610571814"></a>storesMixedCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1566518186"><a name="p1566518186"></a><a name="p1566518186"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p7561519187"><a name="p7561519187"></a><a name="p7561519187"></a>Yes</p>
</td>
</tr>
<tr id="row8438181016182"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p143891018182"><a name="p143891018182"></a><a name="p143891018182"></a>storesUpperCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p134381510201820"><a name="p134381510201820"></a><a name="p134381510201820"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p7438161011188"><a name="p7438161011188"></a><a name="p7438161011188"></a>Yes</p>
</td>
</tr>
<tr id="row4808112474218"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p168081524144218"><a name="p168081524144218"></a><a name="p168081524144218"></a>supportsBatchUpdates()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p38081824124210"><a name="p38081824124210"></a><a name="p38081824124210"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p15808192415424"><a name="p15808192415424"></a><a name="p15808192415424"></a>Yes</p>
</td>
</tr>
<tr id="row13744329164213"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1574422944216"><a name="p1574422944216"></a><a name="p1574422944216"></a>supportsCatalogsInDataManipulation()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1744202910429"><a name="p1744202910429"></a><a name="p1744202910429"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p9744112912428"><a name="p9744112912428"></a><a name="p9744112912428"></a>Yes</p>
</td>
</tr>
<tr id="row19203333422"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p4920153316429"><a name="p4920153316429"></a><a name="p4920153316429"></a>supportsCatalogsInIndexDefinitions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p192019334425"><a name="p192019334425"></a><a name="p192019334425"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p209201133164218"><a name="p209201133164218"></a><a name="p209201133164218"></a>Yes</p>
</td>
</tr>
<tr id="row194245385421"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p6425838114217"><a name="p6425838114217"></a><a name="p6425838114217"></a>supportsCatalogsInPrivilegeDefinitions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p9425938124211"><a name="p9425938124211"></a><a name="p9425938124211"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p14425738194213"><a name="p14425738194213"></a><a name="p14425738194213"></a>Yes</p>
</td>
</tr>
<tr id="row0519104216426"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p16520642204218"><a name="p16520642204218"></a><a name="p16520642204218"></a>supportsCatalogsInProcedureCalls()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p152064214424"><a name="p152064214424"></a><a name="p152064214424"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p15201642134217"><a name="p15201642134217"></a><a name="p15201642134217"></a>Yes</p>
</td>
</tr>
<tr id="row369453134913"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p16694103174917"><a name="p16694103174917"></a><a name="p16694103174917"></a>supportsCatalogsInTableDefinitions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p569413104917"><a name="p569413104917"></a><a name="p569413104917"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p7694143194919"><a name="p7694143194919"></a><a name="p7694143194919"></a>Yes</p>
</td>
</tr>
<tr id="row119608205917"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p12961112115914"><a name="p12961112115914"></a><a name="p12961112115914"></a>supportsCorrelatedSubqueries()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p129619265916"><a name="p129619265916"></a><a name="p129619265916"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p209614211597"><a name="p209614211597"></a><a name="p209614211597"></a>Yes</p>
</td>
</tr>
<tr id="row744714811591"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p94471814592"><a name="p94471814592"></a><a name="p94471814592"></a>supportsDataDefinitionAndDataManipulationTransactions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p17447386596"><a name="p17447386596"></a><a name="p17447386596"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p944718185913"><a name="p944718185913"></a><a name="p944718185913"></a>Yes</p>
</td>
</tr>
<tr id="row8767141213591"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p17767812115912"><a name="p17767812115912"></a><a name="p17767812115912"></a>supportsDataManipulationTransactionsOnly()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p67676122592"><a name="p67676122592"></a><a name="p67676122592"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1976771212593"><a name="p1976771212593"></a><a name="p1976771212593"></a>Yes</p>
</td>
</tr>
<tr id="row87114135017"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p177115136015"><a name="p177115136015"></a><a name="p177115136015"></a>supportsGetGeneratedKeys()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p8719131207"><a name="p8719131207"></a><a name="p8719131207"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p17717131011"><a name="p17717131011"></a><a name="p17717131011"></a>Yes</p>
</td>
</tr>
<tr id="row1669910201005"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p166993201907"><a name="p166993201907"></a><a name="p166993201907"></a>supportsMixedCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p8699202012016"><a name="p8699202012016"></a><a name="p8699202012016"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p8699142017018"><a name="p8699142017018"></a><a name="p8699142017018"></a>Yes</p>
</td>
</tr>
<tr id="row1981632413011"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p168161924306"><a name="p168161924306"></a><a name="p168161924306"></a>supportsMultipleOpenResults()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p3816824208"><a name="p3816824208"></a><a name="p3816824208"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p08161324707"><a name="p08161324707"></a><a name="p08161324707"></a>Yes</p>
</td>
</tr>
<tr id="row833116291506"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p833116291205"><a name="p833116291205"></a><a name="p833116291205"></a>supportsNamedParameters()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p13311291107"><a name="p13311291107"></a><a name="p13311291107"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p6331429709"><a name="p6331429709"></a><a name="p6331429709"></a>Yes</p>
</td>
</tr>
<tr id="row102131324944"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p421362419417"><a name="p421362419417"></a><a name="p421362419417"></a>supportsOpenCursorsAcrossCommit()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1621342416411"><a name="p1621342416411"></a><a name="p1621342416411"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p321416241441"><a name="p321416241441"></a><a name="p321416241441"></a>Yes</p>
</td>
</tr>
<tr id="row4324630541"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1132418308419"><a name="p1132418308419"></a><a name="p1132418308419"></a>supportsOpenCursorsAcrossRollback()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1432493016410"><a name="p1432493016410"></a><a name="p1432493016410"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p032415301414"><a name="p032415301414"></a><a name="p032415301414"></a>Yes</p>
</td>
</tr>
<tr id="row57134486414"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p371315483420"><a name="p371315483420"></a><a name="p371315483420"></a>supportsOpenStatementsAcrossCommit()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p187131848445"><a name="p187131848445"></a><a name="p187131848445"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p13713154814412"><a name="p13713154814412"></a><a name="p13713154814412"></a>Yes</p>
</td>
</tr>
<tr id="row154531501754"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p84531001850"><a name="p84531001850"></a><a name="p84531001850"></a>supportsOpenStatementsAcrossRollback()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p14531010519"><a name="p14531010519"></a><a name="p14531010519"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p6453303515"><a name="p6453303515"></a><a name="p6453303515"></a>Yes</p>
</td>
</tr>
<tr id="row19171052519"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1917054514"><a name="p1917054514"></a><a name="p1917054514"></a>supportsPositionedDelete()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p391705453"><a name="p391705453"></a><a name="p391705453"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p169171851551"><a name="p169171851551"></a><a name="p169171851551"></a>Yes</p>
</td>
</tr>
<tr id="row914915101154"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p51491610554"><a name="p51491610554"></a><a name="p51491610554"></a>supportsPositionedUpdate()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p191493101515"><a name="p191493101515"></a><a name="p191493101515"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p514915107512"><a name="p514915107512"></a><a name="p514915107512"></a>Yes</p>
</td>
</tr>
<tr id="row19516014058"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1551791415514"><a name="p1551791415514"></a><a name="p1551791415514"></a>supportsRefCursors()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p5517201416510"><a name="p5517201416510"></a><a name="p5517201416510"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p65171414953"><a name="p65171414953"></a><a name="p65171414953"></a>Yes</p>
</td>
</tr>
<tr id="row88283179518"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p16829317959"><a name="p16829317959"></a><a name="p16829317959"></a>supportsResultSetConcurrency​(int type, int concurrency)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p482918175516"><a name="p482918175516"></a><a name="p482918175516"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p148297175517"><a name="p148297175517"></a><a name="p148297175517"></a>Yes</p>
</td>
</tr>
<tr id="row144222231859"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1842210231457"><a name="p1842210231457"></a><a name="p1842210231457"></a>supportsResultSetType​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p642272313513"><a name="p642272313513"></a><a name="p642272313513"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p14227235512"><a name="p14227235512"></a><a name="p14227235512"></a>Yes</p>
</td>
</tr>
<tr id="row129254261650"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p18925152612510"><a name="p18925152612510"></a><a name="p18925152612510"></a>supportsSchemasInIndexDefinitions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p149251726153"><a name="p149251726153"></a><a name="p149251726153"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p18925152611520"><a name="p18925152611520"></a><a name="p18925152611520"></a>Yes</p>
</td>
</tr>
<tr id="row115582031451"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p155811311758"><a name="p155811311758"></a><a name="p155811311758"></a>supportsSchemasInPrivilegeDefinitions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p855814311158"><a name="p855814311158"></a><a name="p855814311158"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p95589313516"><a name="p95589313516"></a><a name="p95589313516"></a>Yes</p>
</td>
</tr>
<tr id="row10581103416513"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p105816343514"><a name="p105816343514"></a><a name="p105816343514"></a>supportsSchemasInProcedureCalls()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1658133417511"><a name="p1658133417511"></a><a name="p1658133417511"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p105821134153"><a name="p105821134153"></a><a name="p105821134153"></a>Yes</p>
</td>
</tr>
<tr id="row19981137755"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p199986371159"><a name="p199986371159"></a><a name="p199986371159"></a>supportsSchemasInTableDefinitions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p2998113712516"><a name="p2998113712516"></a><a name="p2998113712516"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p199917371457"><a name="p199917371457"></a><a name="p199917371457"></a>Yes</p>
</td>
</tr>
<tr id="row19651841153"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p59668411353"><a name="p59668411353"></a><a name="p59668411353"></a>supportsSelectForUpdate()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p89662413510"><a name="p89662413510"></a><a name="p89662413510"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p9966641854"><a name="p9966641854"></a><a name="p9966641854"></a>Yes</p>
</td>
</tr>
<tr id="row42913511515"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p192910513514"><a name="p192910513514"></a><a name="p192910513514"></a>supportsStatementPooling()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p142911511758"><a name="p142911511758"></a><a name="p142911511758"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p62985114516"><a name="p62985114516"></a><a name="p62985114516"></a>Yes</p>
</td>
</tr>
<tr id="row18710145414510"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1471005414515"><a name="p1471005414515"></a><a name="p1471005414515"></a>supportsStoredFunctionsUsingCallSyntax()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1271025412511"><a name="p1271025412511"></a><a name="p1271025412511"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p5710115416514"><a name="p5710115416514"></a><a name="p5710115416514"></a>Yes</p>
</td>
</tr>
<tr id="row20317185813515"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p7317105811515"><a name="p7317105811515"></a><a name="p7317105811515"></a>supportsStoredProcedures()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p33174589516"><a name="p33174589516"></a><a name="p33174589516"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p193171658151"><a name="p193171658151"></a><a name="p193171658151"></a>Yes</p>
</td>
</tr>
<tr id="row250118111610"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1501612066"><a name="p1501612066"></a><a name="p1501612066"></a>supportsSubqueriesInComparisons()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p05011812611"><a name="p05011812611"></a><a name="p05011812611"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p195011511962"><a name="p195011511962"></a><a name="p195011511962"></a>Yes</p>
</td>
</tr>
<tr id="row15413555618"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p4413155617"><a name="p4413155617"></a><a name="p4413155617"></a>supportsSubqueriesInExists()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p34131151616"><a name="p34131151616"></a><a name="p34131151616"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p6413851566"><a name="p6413851566"></a><a name="p6413851566"></a>Yes</p>
</td>
</tr>
<tr id="row179661584619"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p79661081369"><a name="p79661081369"></a><a name="p79661081369"></a>supportsSubqueriesInIns()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1696678565"><a name="p1696678565"></a><a name="p1696678565"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p5966168662"><a name="p5966168662"></a><a name="p5966168662"></a>Yes</p>
</td>
</tr>
<tr id="row7381121319617"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p15381513563"><a name="p15381513563"></a><a name="p15381513563"></a>supportsSubqueriesInQuantifieds()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p63819132617"><a name="p63819132617"></a><a name="p63819132617"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p14381413669"><a name="p14381413669"></a><a name="p14381413669"></a>Yes</p>
</td>
</tr>
<tr id="row68867167613"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p888714168612"><a name="p888714168612"></a><a name="p888714168612"></a>supportsTransactionIsolationLevel​(int level)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p17887111617614"><a name="p17887111617614"></a><a name="p17887111617614"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p1188712163618"><a name="p1188712163618"></a><a name="p1188712163618"></a>Yes</p>
</td>
</tr>
<tr id="row69173191667"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1917419160"><a name="p1917419160"></a><a name="p1917419160"></a>supportsTransactions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p189174196619"><a name="p189174196619"></a><a name="p189174196619"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p891714191566"><a name="p891714191566"></a><a name="p891714191566"></a>Yes</p>
</td>
</tr>
<tr id="row19869142317615"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p386972319620"><a name="p386972319620"></a><a name="p386972319620"></a>supportsUnion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p188694231561"><a name="p188694231561"></a><a name="p188694231561"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p9869523165"><a name="p9869523165"></a><a name="p9869523165"></a>Yes</p>
</td>
</tr>
<tr id="row562142716613"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p13627277613"><a name="p13627277613"></a><a name="p13627277613"></a>supportsUnionAll()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p146215278620"><a name="p146215278620"></a><a name="p146215278620"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p3623271369"><a name="p3623271369"></a><a name="p3623271369"></a>Yes</p>
</td>
</tr>
<tr id="row0606131869"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="p1460610311619"><a name="p1460610311619"></a><a name="p1460610311619"></a>updatesAreDetected​(int type)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="p1960610317611"><a name="p1960610317611"></a><a name="p1960610317611"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="p06064311464"><a name="p06064311464"></a><a name="p06064311464"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row60297796"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a88b1fddcd4484468a6c181fe0c88fd59"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a88b1fddcd4484468a6c181fe0c88fd59"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a88b1fddcd4484468a6c181fe0c88fd59"></a>getTables(String catalog, String schemaPattern, String tableNamePattern, String[] types)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p20444512"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p20444512"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p20444512"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p64534936"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p64534936"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p64534936"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row34021287"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a030129f009fd4b818ac49c42a8ed4eb3"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a030129f009fd4b818ac49c42a8ed4eb3"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a030129f009fd4b818ac49c42a8ed4eb3"></a>getColumns(String catalog, String schemaPattern, String tableNamePattern, String columnNamePattern)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p65749301"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p65749301"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p65749301"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40340547"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40340547"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40340547"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row4889883"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_aea217e7188e14a75bfb52f8679df1660"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_aea217e7188e14a75bfb52f8679df1660"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_aea217e7188e14a75bfb52f8679df1660"></a>getTableTypes()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p43189701"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p43189701"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p43189701"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44609791"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44609791"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44609791"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row13955296"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a34d29787185f4630ab012933d6a10570"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a34d29787185f4630ab012933d6a10570"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a34d29787185f4630ab012933d6a10570"></a>getUserName()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18203165"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18203165"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18203165"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p46861836"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p46861836"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p46861836"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row26120502"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a07e4c7b725804b24af7d9180ed4163fa"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a07e4c7b725804b24af7d9180ed4163fa"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a07e4c7b725804b24af7d9180ed4163fa"></a>isReadOnly()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p1940620"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p1940620"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p1940620"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p9673130"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p9673130"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p9673130"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row24773725"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abc3a5ac5718247fda6324fed7e7f2f41"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abc3a5ac5718247fda6324fed7e7f2f41"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abc3a5ac5718247fda6324fed7e7f2f41"></a>nullsAreSortedHigh()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p35401878"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p35401878"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p35401878"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50420249"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50420249"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50420249"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row56090773"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae066260968e741519750b0e85a3ede4d"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae066260968e741519750b0e85a3ede4d"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae066260968e741519750b0e85a3ede4d"></a>nullsAreSortedLow()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p51577296"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p51577296"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p51577296"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15820186"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15820186"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15820186"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row21679135"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7f9007f6abd0401b8d36e63c15f66fbd"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7f9007f6abd0401b8d36e63c15f66fbd"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7f9007f6abd0401b8d36e63c15f66fbd"></a>nullsAreSortedAtStart()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41221789"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41221789"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41221789"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12771947"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12771947"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12771947"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row24870201"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a126f7f1dc8fd4e2b9f31de106e8e3f63"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a126f7f1dc8fd4e2b9f31de106e8e3f63"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a126f7f1dc8fd4e2b9f31de106e8e3f63"></a>nullsAreSortedAtEnd()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p7639580"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p7639580"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p7639580"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16451277"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16451277"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16451277"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row62700068"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7d1421637d024314bdb63d30039e62c2"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7d1421637d024314bdb63d30039e62c2"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7d1421637d024314bdb63d30039e62c2"></a>getDatabaseProductName()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12250098"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12250098"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12250098"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32053504"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32053504"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32053504"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row3103008"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a32568bac99434dfaa9beef2d48410b58"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a32568bac99434dfaa9beef2d48410b58"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a32568bac99434dfaa9beef2d48410b58"></a>getDatabaseProductVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p9019165"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p9019165"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p9019165"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4878148"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4878148"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4878148"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row48644205"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a9a67a8585e7c459ab5a03addffc357fe"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a9a67a8585e7c459ab5a03addffc357fe"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a9a67a8585e7c459ab5a03addffc357fe"></a>getDriverName()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29097767"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29097767"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29097767"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15626201"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15626201"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15626201"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row9070155"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a089f16706f574a12ae4a74d375f44c76"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a089f16706f574a12ae4a74d375f44c76"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a089f16706f574a12ae4a74d375f44c76"></a>getDriverVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16295442"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16295442"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16295442"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p22712575"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p22712575"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p22712575"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row67031290"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a1302074e2b994fd2a36f80cb5a80968e"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a1302074e2b994fd2a36f80cb5a80968e"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a1302074e2b994fd2a36f80cb5a80968e"></a>getDriverMajorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p37286179"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p37286179"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p37286179"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p24008951"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p24008951"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p24008951"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row17077947"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a4a9a1daf5e174979a3ee4c8cb326d72a"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a4a9a1daf5e174979a3ee4c8cb326d72a"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a4a9a1daf5e174979a3ee4c8cb326d72a"></a>getDriverMinorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p11578534"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p11578534"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p11578534"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p34037247"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p34037247"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p34037247"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row64937420"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af464c5cfcef34ec7a9f3b803f6f9c21b"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af464c5cfcef34ec7a9f3b803f6f9c21b"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af464c5cfcef34ec7a9f3b803f6f9c21b"></a>usesLocalFiles()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18903476"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18903476"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18903476"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10831448"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10831448"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10831448"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row32955502"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a8f1983eb755040daac1121d6b50f3491"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a8f1983eb755040daac1121d6b50f3491"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a8f1983eb755040daac1121d6b50f3491"></a>usesLocalFilePerTable()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p7963311"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p7963311"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p7963311"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p903234"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p903234"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p903234"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row58710241"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a74526879b32f406d8c5e9c858f208dbc"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a74526879b32f406d8c5e9c858f208dbc"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a74526879b32f406d8c5e9c858f208dbc"></a>supportsMixedCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p35866003"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p35866003"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p35866003"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32549373"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32549373"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32549373"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row35334501"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_aa7d8a040d878444692987e7131424301"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_aa7d8a040d878444692987e7131424301"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_aa7d8a040d878444692987e7131424301"></a>storesUpperCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31156127"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31156127"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31156127"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25936329"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25936329"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25936329"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row8139834"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a74999cea95884dba9d8135c398c4e734"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a74999cea95884dba9d8135c398c4e734"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a74999cea95884dba9d8135c398c4e734"></a>storesLowerCaseIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40327782"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40327782"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40327782"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p55506406"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p55506406"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p55506406"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row51146656"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ac7bd2f1be04844a19d21a67fbb191ebd"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ac7bd2f1be04844a19d21a67fbb191ebd"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ac7bd2f1be04844a19d21a67fbb191ebd"></a>supportsMixedCaseQuotedIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p55021047"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p55021047"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p55021047"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25181333"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25181333"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25181333"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row26173912"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a66113701320b48e8b9af174c00518036"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a66113701320b48e8b9af174c00518036"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a66113701320b48e8b9af174c00518036"></a>storesUpperCaseQuotedIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4655690"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4655690"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4655690"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31431700"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31431700"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31431700"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row29794592"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ac53ce1366bfe40b8bd3c41e8f53d7e43"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ac53ce1366bfe40b8bd3c41e8f53d7e43"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ac53ce1366bfe40b8bd3c41e8f53d7e43"></a>storesLowerCaseQuotedIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29364198"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29364198"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29364198"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4926116"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4926116"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p4926116"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row51762105"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af181eea9c61b4ae09fe6bd8d852c2d92"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af181eea9c61b4ae09fe6bd8d852c2d92"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af181eea9c61b4ae09fe6bd8d852c2d92"></a>storesMixedCaseQuotedIdentifiers()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60781448"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60781448"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60781448"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40046213"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40046213"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p40046213"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row52867043"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a527386d1587f4ac9a142d093076ad9bc"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a527386d1587f4ac9a142d093076ad9bc"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a527386d1587f4ac9a142d093076ad9bc"></a>supportsAlterTableWithAddColumn()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50416731"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50416731"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50416731"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2981367"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2981367"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2981367"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row59571166"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6f3f1ea92d664601a607fa893f96677a"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6f3f1ea92d664601a607fa893f96677a"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6f3f1ea92d664601a607fa893f96677a"></a>supportsAlterTableWithDropColumn()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p57745812"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p57745812"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p57745812"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29015866"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29015866"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29015866"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row6983146"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae2d3f72cbb08466da314ca780de960a5"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae2d3f72cbb08466da314ca780de960a5"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae2d3f72cbb08466da314ca780de960a5"></a>supportsColumnAliasing()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32022352"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32022352"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32022352"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29960334"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29960334"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29960334"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row1264711"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a9898987ae9004ed7bffff334af6bab79"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a9898987ae9004ed7bffff334af6bab79"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a9898987ae9004ed7bffff334af6bab79"></a>nullPlusNonNullIsNull()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p5595442"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p5595442"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p5595442"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23666740"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23666740"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23666740"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row61943094"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a193565a52f854f86bab8ec5c554da727"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a193565a52f854f86bab8ec5c554da727"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a193565a52f854f86bab8ec5c554da727"></a>supportsConvert()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p26976108"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p26976108"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p26976108"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10558570"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10558570"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10558570"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row15218421"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af01b9a1ae3a74e24b726ad8c1191764e"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af01b9a1ae3a74e24b726ad8c1191764e"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af01b9a1ae3a74e24b726ad8c1191764e"></a>supportsConvert(int fromType, int toType)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32654698"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32654698"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32654698"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p1155953"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p1155953"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p1155953"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row8028101"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae5a47c08140c4f0898948ab955cbdd73"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae5a47c08140c4f0898948ab955cbdd73"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae5a47c08140c4f0898948ab955cbdd73"></a>supportsTableCorrelationNames()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p52910879"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p52910879"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p52910879"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60377993"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60377993"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60377993"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row32255462"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a359750866e974557830853b884cbf870"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a359750866e974557830853b884cbf870"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a359750866e974557830853b884cbf870"></a>supportsDifferentTableCorrelationNames()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p45470211"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p45470211"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p45470211"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p33078002"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p33078002"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p33078002"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row2586520"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae81feff845a84e6189d5e70079a4ee96"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae81feff845a84e6189d5e70079a4ee96"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae81feff845a84e6189d5e70079a4ee96"></a>supportsExpressionsInOrderBy()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23480075"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23480075"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23480075"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p24553452"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p24553452"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p24553452"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row52470555"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6886f8e8ebe04263a0d6e9602471724a"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6886f8e8ebe04263a0d6e9602471724a"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6886f8e8ebe04263a0d6e9602471724a"></a>supportsOrderByUnrelated()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p5777511"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p5777511"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p5777511"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25417911"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25417911"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25417911"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row41551535"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7600db432907408695f2faf6181e2bf0"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7600db432907408695f2faf6181e2bf0"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a7600db432907408695f2faf6181e2bf0"></a>supportsGroupBy()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p443493"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p443493"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p443493"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23012244"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23012244"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23012244"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row19400853"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_acb43870333234a2ca890476f49847fec"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_acb43870333234a2ca890476f49847fec"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_acb43870333234a2ca890476f49847fec"></a>supportsGroupByUnrelated()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p8722946"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p8722946"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p8722946"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62484161"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62484161"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62484161"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row34938635"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a90b5d4fbf1114e43bf202f2debbadb15"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a90b5d4fbf1114e43bf202f2debbadb15"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a90b5d4fbf1114e43bf202f2debbadb15"></a>supportsGroupByBeyondSelect()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p34972369"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p34972369"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p34972369"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p56209535"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p56209535"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p56209535"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row29741138"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a76eefd1bc7204eba9044c0174240bf8b"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a76eefd1bc7204eba9044c0174240bf8b"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a76eefd1bc7204eba9044c0174240bf8b"></a>supportsLikeEscapeClause()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41937061"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41937061"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41937061"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12644110"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12644110"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p12644110"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row16560810"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6aa78ebd662046b382ee271bddea8ba4"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6aa78ebd662046b382ee271bddea8ba4"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6aa78ebd662046b382ee271bddea8ba4"></a>supportsMultipleResultSets()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15357388"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15357388"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p15357388"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p13516974"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p13516974"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p13516974"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row6188115"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a5c3db6535fd24ec0a7f19f2d60beb430"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a5c3db6535fd24ec0a7f19f2d60beb430"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a5c3db6535fd24ec0a7f19f2d60beb430"></a>supportsMultipleTransactions()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p19027848"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p19027848"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p19027848"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p6474655"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p6474655"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p6474655"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row18199437"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a5cea191d0fcb4cd9b692a43e842be2f5"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a5cea191d0fcb4cd9b692a43e842be2f5"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a5cea191d0fcb4cd9b692a43e842be2f5"></a>supportsNonNullableColumns()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p21436454"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p21436454"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p21436454"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p17155617"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p17155617"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p17155617"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row41373336"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ad3b6245ee8224591a1ed6d260fb3372d"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ad3b6245ee8224591a1ed6d260fb3372d"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ad3b6245ee8224591a1ed6d260fb3372d"></a>supportsMinimumSQLGrammar()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31106141"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31106141"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p31106141"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p42497653"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p42497653"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p42497653"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row10884021"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af44c289b038f410cba8bbda93e4869ea"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af44c289b038f410cba8bbda93e4869ea"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af44c289b038f410cba8bbda93e4869ea"></a>supportsCoreSQLGrammar()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p64714694"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p64714694"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p64714694"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p27931353"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p27931353"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p27931353"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row3598626"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a256cbd4636574572b9002de1700a1774"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a256cbd4636574572b9002de1700a1774"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a256cbd4636574572b9002de1700a1774"></a>supportsExtendedSQLGrammar()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p30592765"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p30592765"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p30592765"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62677390"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62677390"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62677390"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row47498528"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af65daa82c25944c09fec94efdba3374b"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af65daa82c25944c09fec94efdba3374b"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_af65daa82c25944c09fec94efdba3374b"></a>supportsANSI92EntryLevelSQL()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23490157"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23490157"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p23490157"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p54950100"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p54950100"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p54950100"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row14986735"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a3a2a08e687d04b3994b369ff0b17a1d8"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a3a2a08e687d04b3994b369ff0b17a1d8"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a3a2a08e687d04b3994b369ff0b17a1d8"></a>supportsANSI92IntermediateSQL()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p45775189"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p45775189"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p45775189"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p27918059"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p27918059"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p27918059"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row2734543"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_afc422979e83346c78d6f5b29067f022f"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_afc422979e83346c78d6f5b29067f022f"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_afc422979e83346c78d6f5b29067f022f"></a>supportsANSI92FullSQL()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16917239"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16917239"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16917239"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29788691"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29788691"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p29788691"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row57216768"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae99349b921064fd3be8debb79b0b23ba"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae99349b921064fd3be8debb79b0b23ba"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae99349b921064fd3be8debb79b0b23ba"></a>supportsIntegrityEnhancementFacility()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18067090"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18067090"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p18067090"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60670092"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60670092"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p60670092"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row51241922"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_accaa2ae236154fdf9fb2dff489db4b01"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_accaa2ae236154fdf9fb2dff489db4b01"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_accaa2ae236154fdf9fb2dff489db4b01"></a>supportsOuterJoins()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p53445574"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p53445574"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p53445574"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16210070"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16210070"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p16210070"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row47021654"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a8f02709ec1c24412879be5b87e91ae0e"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a8f02709ec1c24412879be5b87e91ae0e"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a8f02709ec1c24412879be5b87e91ae0e"></a>supportsFullOuterJoins()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p11306656"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p11306656"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p11306656"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50665586"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50665586"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50665586"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row4928762"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abb3d2003020d4435ab9626a5657c2d03"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abb3d2003020d4435ab9626a5657c2d03"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abb3d2003020d4435ab9626a5657c2d03"></a>supportsLimitedOuterJoins()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50737033"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50737033"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50737033"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p17225310"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p17225310"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p17225310"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row45903343"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a171db3afcfcf48baa63a1c4d9cc95135"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a171db3afcfcf48baa63a1c4d9cc95135"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a171db3afcfcf48baa63a1c4d9cc95135"></a>isCatalogAtStart()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2060848"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2060848"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2060848"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p65960091"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p65960091"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p65960091"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row59547509"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a707d2dcc17de461a8d74ec5c791bf8b6"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a707d2dcc17de461a8d74ec5c791bf8b6"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a707d2dcc17de461a8d74ec5c791bf8b6"></a>supportsSchemasInDataManipulation()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62532313"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62532313"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p62532313"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50591081"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50591081"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p50591081"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row85964"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6f454e0231ee42f28529dba9cdb81d50"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6f454e0231ee42f28529dba9cdb81d50"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a6f454e0231ee42f28529dba9cdb81d50"></a>supportsSavepoints()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44266055"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44266055"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44266055"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25776904"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25776904"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p25776904"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row64886068"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae463fb9b519144da8098277eae44bdce"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae463fb9b519144da8098277eae44bdce"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ae463fb9b519144da8098277eae44bdce"></a>supportsResultSetHoldability(int holdability)</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p8325742"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p8325742"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p8325742"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p22980536"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p22980536"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p22980536"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row17339885"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ad7cb3ca967544145ae97963a8e4d5b12"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ad7cb3ca967544145ae97963a8e4d5b12"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ad7cb3ca967544145ae97963a8e4d5b12"></a>getResultSetHoldability()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p61839149"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p61839149"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p61839149"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44439993"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44439993"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p44439993"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row2918455"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a2bf232d562be47d7b265a116f9b9b5e7"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a2bf232d562be47d7b265a116f9b9b5e7"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a2bf232d562be47d7b265a116f9b9b5e7"></a>getDatabaseMajorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32734299"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32734299"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p32734299"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p6807372"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p6807372"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p6807372"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row39826003"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ab7332afec26a44acae98e82cdc38a1c0"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ab7332afec26a44acae98e82cdc38a1c0"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_ab7332afec26a44acae98e82cdc38a1c0"></a>getDatabaseMinorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10077742"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10077742"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p10077742"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p37109423"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p37109423"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p37109423"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row63302271"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abe277956214949c9b8826463cbe72054"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abe277956214949c9b8826463cbe72054"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_abe277956214949c9b8826463cbe72054"></a>getJDBCMajorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2216519"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2216519"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p2216519"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p47287843"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p47287843"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p47287843"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_row53810940"><td class="cellrowborder" valign="top" width="37.730000000000004%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a41f79ecc71f6475195ee6f1de525e8e4"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a41f79ecc71f6475195ee6f1de525e8e4"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_a41f79ecc71f6475195ee6f1de525e8e4"></a>getJDBCMinorVersion()</p>
</td>
<td class="cellrowborder" valign="top" width="25.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41085869"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41085869"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p41085869"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p63714280"><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p63714280"></a><a name="zh-cn_topic_0237120393_zh-cn_topic_0213179159_zh-cn_topic_0189251480_zh-cn_topic_0059779369_zh-cn_topic_0058965196_p63714280"></a>Yes</p>
</td>
</tr>
</tbody>
</table>
>![](public_sys-resources/icon-caution.gif) **注意：** 
>getPartitionTablePrimaryKeys​\(String catalog, String schema, String table\)接口用于获取分区表含全局索引的主键列，使用示例如下：
>```
>PgDatabaseMetaData dbmd = (PgDatabaseMetaData)conn.getMetaData();
>dbmd.getPartitionTablePrimaryKeys("catalogName", "schemaName", "tableName");
>```

