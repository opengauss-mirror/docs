# SQL标准错误码说明<a name="ZH-CN_TOPIC_0000001208140033"></a>

根据X/Open和SQL Access Group SQL CAE规范（1992）所进行的定义，SQLERROR返回SQLSTATE值。SQLSTATE值是包含五个字符的字符串，由2个字符的SQL错误类和3个字符的子类构成。五个字符包含数值或者大写字母， 代表各种错误或者警告条件的代码。成功的状态是由00000标识的。SQLSTATE代码大多数情况下都是定义在SQL标准里的。

openGauss也遵循SQL标准返回错误码的SQLSTATE值，详细说明请参见[表1](#zh-cn_topic_0237124759_zh-cn_topic_0059778351_t53e130b42e334bde9726c35fa30887d6)。

**表 1**  openGauss错误码SQLSTATE值

<a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_t53e130b42e334bde9726c35fa30887d6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_reeb174f054a24c5f8675255120206add"><th class="cellrowborder" valign="top" width="20.48%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p377791531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p377791531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p377791531175"></a>错误码SQLSTATE值</p>
</th>
<th class="cellrowborder" valign="top" width="79.52%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p402125851175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p402125851175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p402125851175"></a>错误码含义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf345378f05b24657850940fe2774efda"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p555099781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p555099781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p555099781175"></a>类 00 - 成功完成</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1007126db7db4529b80932d627a5b3ee"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p1295861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p1295861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p1295861175"></a>00000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p104965071175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p104965071175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p104965071175"></a>成功完成（SUCCESSFUL_COMPLETION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r838d8738fde8470bb528ea5b886aac81"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p248557021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p248557021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p248557021175"></a>类 01 - 警告</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r192a3f86780a4b729aa02674ee90092a"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4138781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4138781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4138781175"></a>01000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p335241251175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p335241251175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p335241251175"></a>警告（WARNING）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4f41833374e94ebfb976bad3f973e7a5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p114611771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p114611771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p114611771175"></a>0100C</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p559401191175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p559401191175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p559401191175"></a>返回了动态结果集（DYNAMIC_RESULT_SETS_RETURNED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rcb06d938e4b749a6bb07642bbafc0ab2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p452663611175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p452663611175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p452663611175"></a>01008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p426966151175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p426966151175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p426966151175"></a>警告，隐含补齐了零比特位（IMPLICIT_ZERO_BIT_PADDING）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r611c749c6fba4eb09e846c7ec63785bc"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p544286911175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p544286911175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p544286911175"></a>01003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p466478681175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p466478681175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p466478681175"></a>在集合函数里消除了NULL（NULL_VALUE_ELIMINATED_IN_SET_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rdf43a3a399984e13b953ce8c5b82840f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p492106691175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p492106691175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p492106691175"></a>01007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384444401175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384444401175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384444401175"></a>没有赋予权限（PRIVILEGE_NOT_GRANTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r98fc33a00cb741f68ba8b0f38b747766"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p416007121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p416007121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p416007121175"></a>01006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p608218411175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p608218411175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p608218411175"></a>没有撤销权限（PRIVILEGE_NOT_REVOKED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r2d5d0032582742868638556251387f9c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p472718841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p472718841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p472718841175"></a>01004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p38174041175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p38174041175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p38174041175"></a>字符串数据在右端截断（STRING_DATA_RIGHT_TRUNCATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r991af1bc17d34a42838741f67c45bb3c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p314242751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p314242751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p314242751175"></a>01P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p623383611175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p623383611175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p623383611175"></a>废弃的特性（DEPRECATED_FEATURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r819fd011154e424ab8bd7f5b967f5f53"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p119646631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p119646631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p119646631175"></a>类 02 - 没有数据（按照SQL标准的要求，这也是警告类）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r25ab86844dad408184837100aac8c268"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p651965101175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p651965101175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p651965101175"></a>02000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p151802951175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p151802951175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p151802951175"></a>没有数据（NO_DATA）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re191893204b647f7b7ed60c8b1b68c21"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p605819751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p605819751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p605819751175"></a>02001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81929441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81929441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81929441175"></a>返回了无附加动态结果集（NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r00fe39ef53574e96aeb7b1a3126be082"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p670768171175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p670768171175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p670768171175"></a>类 03 - SQL语句尚未结束</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra4aad23defad45de8191942e139718e2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437469441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437469441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437469441175"></a>03000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p538415471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p538415471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p538415471175"></a>SQL语句尚未结束（SQL_STATEMENT_NOT_YET_COMPLETE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7b5ea20d773a459b93fbd807cebfcdfd"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p589115871175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p589115871175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p589115871175"></a>类 08 - 连接异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re316e47515ba410a928bf7c17ad5a9bb"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p639828961175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p639828961175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p639828961175"></a>08000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28712631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28712631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28712631175"></a>连接异常（CONNECTION_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r60a28e2245784c5ba753c6b8126f7bec"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p127763541175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p127763541175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p127763541175"></a>08003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p529391881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p529391881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p529391881175"></a>连接不存在（CONNECTION_DOES_NOT_EXIST）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r58969b06e7194cae81814118d5d8924e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p50716401175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p50716401175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p50716401175"></a>08006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p62385541175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p62385541175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p62385541175"></a>连接失败（CONNECTION_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r68f88a8ae3894ae1a2d25106b6375c55"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p516119791175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p516119791175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p516119791175"></a>08001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p198207651175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p198207651175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p198207651175"></a>SQL客户端不能建立SQL连接（SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rca21ce593bfc4680afc4a7f2d470af0f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p209321651175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p209321651175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p209321651175"></a>08004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p177838151175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p177838151175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p177838151175"></a>SQL服务器拒绝建立SQL连接（SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb0053f07c1524bc79b5f84ad66a194a5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p123909531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p123909531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p123909531175"></a>08007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p641431741175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p641431741175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p641431741175"></a>未知的事务解析（TRANSACTION_RESOLUTION_UNKNOWN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1f3a243c958347308f3e6b51d7279a42"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p526047651175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p526047651175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p526047651175"></a>08P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p297126381175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p297126381175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p297126381175"></a>违反协议（PROTOCOL_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r97ff1286dcd24deea26e347a1df66e1d"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac11903e166d8411a8265d3611bd9471a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac11903e166d8411a8265d3611bd9471a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac11903e166d8411a8265d3611bd9471a"></a>类09 - 触发动作异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4c8931bdc9984f1b954623accf3460d9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0325e8805b544bf7885dc189e5849dbe"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0325e8805b544bf7885dc189e5849dbe"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0325e8805b544bf7885dc189e5849dbe"></a>09000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af1bb63f75f0d43bb83334954cce437f1"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af1bb63f75f0d43bb83334954cce437f1"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af1bb63f75f0d43bb83334954cce437f1"></a>触发动作异常（TRIGGERED_ACTION_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rbe2abec5ccf047599ca390fcc4bdc4f0"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514593161175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514593161175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514593161175"></a>类 0A - 不支持特性</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r29751329ac774159a521a0a44c0f0563"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p670958911175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p670958911175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p670958911175"></a>0A000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p576517641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p576517641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p576517641175"></a>不支持此特性（FEATURE_NOT_SUPPORTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9f3817ffd69448ea8b2979ba7629a714"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab4ca770abb6c4e1595ed37e097deb7a4"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab4ca770abb6c4e1595ed37e097deb7a4"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab4ca770abb6c4e1595ed37e097deb7a4"></a>0A100</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_abc3904cb54a442168a99d0d5aa42c9e4"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_abc3904cb54a442168a99d0d5aa42c9e4"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_abc3904cb54a442168a99d0d5aa42c9e4"></a>不支持流（STREAM_NOT_SUPPORTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rba8ad84ffd264fe1a4bd8d4eedfddb0f"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p179877081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p179877081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p179877081175"></a>类 0B - 非法事务初始化</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r530c807f5e16452cadd0023bcc53af93"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p268110291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p268110291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p268110291175"></a>0B000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p242097261175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p242097261175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p242097261175"></a>非法事务初始化（INVALID_TRANSACTION_INITIATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb980edfb5b204083ac2d667e773839f5"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p663682291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p663682291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p663682291175"></a>类 0F - 定位器异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc5a1fb0538c34dd492ef643b7dc5c1ef"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p640569641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p640569641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p640569641175"></a>0F000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p212316321175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p212316321175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p212316321175"></a>定位器异常（LOCATOR_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8114839f1f214b9e8323bae0c1740563"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p428210771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p428210771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p428210771175"></a>0F001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p459552351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p459552351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p459552351175"></a>非法的定位器声明（INVALID_LOCATOR_SPECIFICATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra266456bc13d471d8dcd88efda3c1754"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p140433051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p140433051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p140433051175"></a>类 0L - 非法赋权者</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6b5fb165abc842259e59d99033ffcfa3"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p370225421175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p370225421175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p370225421175"></a>0L000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p116700761175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p116700761175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p116700761175"></a>非法赋权者（INVALID_GRANTOR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3b32efff3dfb482d83d98521873933d0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p517686781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p517686781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p517686781175"></a>0LP01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p241847751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p241847751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p241847751175"></a>非法赋权操作（INVALID_GRANT_OPERATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb31f7d43224543259362c9d8e3203a98"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p481787221175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p481787221175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p481787221175"></a>类 0P - 非法角色声明</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb72f38b5e6c44487bc78bbd4bbd29a40"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p243527061175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p243527061175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p243527061175"></a>0P000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p264121801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p264121801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p264121801175"></a>非法角色声明（INVALID_ROLE_SPECIFICATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc54d6496f4944b769851ffdadb7ba672"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p613446861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p613446861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p613446861175"></a>类 0Z - 诊断异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re4175c36609347da992d0b556dd13d41"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p257733661175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p257733661175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p257733661175"></a>0Z000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p72678821175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p72678821175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p72678821175"></a>诊断异常（DIAGNOSTICS_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3046d3331ef34de1a912182115f8baf1"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637948831175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637948831175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637948831175"></a>0Z002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p30411175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p30411175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p30411175"></a>没有在活跃的处理程序下访问堆栈诊断信息（STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_row273771175"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p22176081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p22176081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p22176081175"></a>类 20 - 未找到CASE</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_raeb22b73913c4e83990e9bafbd32c58e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p60235201175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p60235201175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p60235201175"></a>20000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p181430881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p181430881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p181430881175"></a>未找到CASE（CASE_NOT_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rae2ac242d3594f019a8caf4b0da2430b"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p58653891175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p58653891175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p58653891175"></a>类 21 - 势违例</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r83e62bca1e1045d192de06684245adf6"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p480106281175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p480106281175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p480106281175"></a>21000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p360302731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p360302731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p360302731175"></a>势违例（CARDINALITY_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8bae3909ea644e98bacfce4d9ccbae58"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p265032851175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p265032851175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p265032851175"></a>类 22 - 数据异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rbae3949b52174d0f9aeaab67af9baf07"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p606511971175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p606511971175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p606511971175"></a>22000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p570901701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p570901701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p570901701175"></a>数据异常（DATA_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_reeffd11f7585483280b4d50db2aaabc8"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p112388091175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p112388091175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p112388091175"></a>2202E</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p58107641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p58107641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p58107641175"></a>数组下标错误（ARRAY_SUBSCRIPT_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9b871cd5223d4767b28ac3b7dd7e619b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81888781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81888781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81888781175"></a>22021</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593193851175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593193851175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593193851175"></a>字符不被计算机命令系统识别（CHARACTER_NOT_IN_REPERTOIRE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r29b211a9e95049eca0ee906031402e13"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p257233871175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p257233871175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p257233871175"></a>22008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p32195721175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p32195721175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p32195721175"></a>日期时间字段溢出（DATETIME_FIELD_OVERFLOW）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r03f4d025c828404e90b0ace0696cd279"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p653666241175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p653666241175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p653666241175"></a>22012</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p602052171175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p602052171175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p602052171175"></a>被零除（DIVISION_BY_ZERO）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6fbe426121ff4119a902fc4f4316a539"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4068441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4068441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4068441175"></a>22005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p329544161175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p329544161175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p329544161175"></a>赋值中出错（ERROR_IN_ASSIGNMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r157c2dc7d1c14b779e98b06673455bef"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p659048511175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p659048511175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p659048511175"></a>2200B</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366927231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366927231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366927231175"></a>转义字符冲突（ESCAPE_CHARACTER_CONFLICT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb4d76eb1d89742fb9475dc90f94e89a0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p396673781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p396673781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p396673781175"></a>22022</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p589410641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p589410641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p589410641175"></a>指示器溢出（INDICATOR_OVERFLOW）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rbc205bd91e64476cbab28fbe876724ab"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p183631181175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p183631181175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p183631181175"></a>22015</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p110176211175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p110176211175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p110176211175"></a>内部字段溢出（INTERVAL_FIELD_OVERFLOW）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf64eb4efc5594336b2fc012997041d6d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p458909171175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p458909171175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p458909171175"></a>2201E</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p261767731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p261767731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p261767731175"></a>对数运算的非法参数（INVALID_ARGUMENT_FOR_LOGARITHM）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r2858b08038274769adf8f7fe77a4107e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p239505861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p239505861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p239505861175"></a>22014</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p609493271175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p609493271175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p609493271175"></a>NTILE函数的非法参数（INVALID_ARGUMENT_FOR_NTILE_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4d6be500e4544dc0a177cc875462d586"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p59916441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p59916441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p59916441175"></a>22016</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p155611351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p155611351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p155611351175"></a>N值函数的非法参数（INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rdf0242e0a0ab4917b06a6ff1c2deaae5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p26695021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p26695021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p26695021175"></a>2201F</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p149031461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p149031461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p149031461175"></a>幂函数的非法参数（INVALID_ARGUMENT_FOR_POWER_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7dbaefbc2884478a939a03a2fa533cf9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598663991175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598663991175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598663991175"></a>2201G</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173401731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173401731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173401731175"></a>宽桶函数的非法参数（INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra298dffe14d9439ba61912cd7edf7fa9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p245198111175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p245198111175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p245198111175"></a>22018</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p399476931175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p399476931175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p399476931175"></a>类型转换时非法的字符值（INVALID_CHARACTER_VALUE_FOR_CAST）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r040a60b5acf34c679d32e4061a6ee7a5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637303591175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637303591175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637303591175"></a>22007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p618854791175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p618854791175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p618854791175"></a>非法日期时间格式（INVALID_DATETIME_FORMAT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4333058fa1f44c919f610a22f89556b0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173580971175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173580971175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173580971175"></a>22019</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p638285771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p638285771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p638285771175"></a>非法的转义字符（INVALID_ESCAPE_CHARACTER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r90a39d9a082b4cc2adce992053f42a9b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p245899961175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p245899961175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p245899961175"></a>2200D</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456326461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456326461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456326461175"></a>非法的转义字节（INVALID_ESCAPE_OCTET）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8ae1eb164e754f7ba4a6fda5c790a82b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p473117901175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p473117901175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p473117901175"></a>22025</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p70498051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p70498051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p70498051175"></a>非法转义序列（INVALID_ESCAPE_SEQUENCE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9bba20d703b640edaf170805598fa095"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390345011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390345011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390345011175"></a>22P06</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p76780021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p76780021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p76780021175"></a>非标准使用转义字符（NONSTANDARD_USE_OF_ESCAPE_CHARACTER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6af843f9dd614b92b436c17a03081345"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p272279411175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p272279411175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p272279411175"></a>22010</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p579795781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p579795781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p579795781175"></a>非法指示器参数值（INVALID_INDICATOR_PARAMETER_VALUE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb46f083467cc4f3995a7bb477de75c1e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p556370661175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p556370661175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p556370661175"></a>22023</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p103085301175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p103085301175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p103085301175"></a>非法参数值（INVALID_PARAMETER_VALUE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8487bd0a827245258eaeadf5d4487a01"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p658346831175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p658346831175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p658346831175"></a>2201B</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310091351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310091351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310091351175"></a>非法正则表达式（INVALID_REGULAR_EXPRESSION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1e619172e6864efb89c2712fc4395f25"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p570814761175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p570814761175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p570814761175"></a>2201W</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p601968781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p601968781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p601968781175"></a>LIMIT子句中行号非法（INVALID_ROW_COUNT_IN_LIMIT_CLAUSE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_reeaa8fec7f724be89b63ff29aad8c9f9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p614364751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p614364751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p614364751175"></a>2201X</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p102985491175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p102985491175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p102985491175"></a>结果集中行号非法（INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row74451007554"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p24456017558"><a name="zh-cn_topic_0237124759_p24456017558"></a><a name="zh-cn_topic_0237124759_p24456017558"></a>2202H</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p12445607556"><a name="zh-cn_topic_0237124759_p12445607556"></a><a name="zh-cn_topic_0237124759_p12445607556"></a>非法抽样参数（INVALID_TABLESAMPLE_ARGUMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row199952516160"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p14999132571619"><a name="zh-cn_topic_0237124759_p14999132571619"></a><a name="zh-cn_topic_0237124759_p14999132571619"></a>2202G</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1399942517164"><a name="zh-cn_topic_0237124759_p1399942517164"></a><a name="zh-cn_topic_0237124759_p1399942517164"></a>非法重复抽样（INVALID_TABLESAMPLE_REPEAT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9469a2299e7a42f0a34bb8b4e136a0ac"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p585585231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p585585231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p585585231175"></a>22009</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456199191175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456199191175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456199191175"></a>非法时区显示值（INVALID_TIME_ZONE_DISPLACEMENT_VALUE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r70732dde57494397b8c46c9b0494648e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p380338981175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p380338981175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p380338981175"></a>2200C</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p608469311175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p608469311175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p608469311175"></a>非法使用转义字符（INVALID_USE_OF_ESCAPE_CHARACTER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9a8806b9b3cc42cb8f7e77a65fc872b8"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655628701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655628701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655628701175"></a>2200G</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p89922531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p89922531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p89922531175"></a>最相关类型不匹配（MOST_SPECIFIC_TYPE_MISMATCH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra183178415c24fe98ab4e022739815b0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p457929151175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p457929151175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p457929151175"></a>22004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p182386101175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p182386101175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p182386101175"></a>不允许NULL值（NULL_VALUE_NOT_ALLOWED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r82f7098eecff4ae28559292230063482"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p83918701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p83918701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p83918701175"></a>22002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p86528311175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p86528311175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p86528311175"></a>NULL值不能做指示器参数（NULL_VALUE_NO_INDICATOR_PARAMETER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r18c594b0f2a246bd8b54d13ae6485bd4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p667897551175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p667897551175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p667897551175"></a>22003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p412611131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p412611131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p412611131175"></a>数值越界（NUMERIC_VALUE_OUT_OF_RANGE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row6155183813170"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p4155193831718"><a name="zh-cn_topic_0237124759_p4155193831718"></a><a name="zh-cn_topic_0237124759_p4155193831718"></a>22017</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p015563811170"><a name="zh-cn_topic_0237124759_p015563811170"></a><a name="zh-cn_topic_0237124759_p015563811170"></a>并发数超限（DOP_VALUE_OUT_OF_RANGE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra04284cbfe9f44d898c200438ca3a580"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p145807621175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p145807621175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p145807621175"></a>22026</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401910371175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401910371175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401910371175"></a>字符串数据长度不匹配（STRING_DATA_LENGTH_MISMATCH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row759419418204"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p185949410201"><a name="zh-cn_topic_0237124759_p185949410201"></a><a name="zh-cn_topic_0237124759_p185949410201"></a>22028</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p185946415208"><a name="zh-cn_topic_0237124759_p185946415208"></a><a name="zh-cn_topic_0237124759_p185946415208"></a>正则表达式不匹配（REGEXP_MISMATCH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r76789737bfb54867bf055d62ed3f914b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p398019651175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p398019651175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p398019651175"></a>22001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p27337131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p27337131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p27337131175"></a>字符串数据右截断（STRING_DATA_RIGHT_TRUNCATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9acc9e4972ad481c9cdb8a2cc86110ec"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p467200181175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p467200181175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p467200181175"></a>22011</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p262251201175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p262251201175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p262251201175"></a>抽取子字符串错误（SUBSTRING_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf134a7f1758c4a6aa70e5dc09f0bec21"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p591958231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p591958231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p591958231175"></a>22027</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p301323211175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p301323211175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p301323211175"></a>截断错误（TRIM_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r062c9fd0724c4e96aaf9b516ed62eff4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p218639831175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p218639831175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p218639831175"></a>22024</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p261522081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p261522081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p261522081175"></a>未结束的C字符串（UNTERMINATED_C_STRING）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r39fa6cbd35fd44609b8be5223cd0db8f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p60426331175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p60426331175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p60426331175"></a>2200F</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p196912501175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p196912501175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p196912501175"></a>零长度的字符串（ZERO_LENGTH_CHARACTER_STRING）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfa5fddd64abf46e3af0f30c5242b5f6c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607335611175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607335611175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607335611175"></a>22P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p204713801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p204713801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p204713801175"></a>浮点异常（FLOATING_POINT_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_raa54bc233a134989aa1206c313718bda"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p254686121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p254686121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p254686121175"></a>22P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p496916591175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p496916591175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p496916591175"></a>非法文本表现形式（INVALID_TEXT_REPRESENTATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5c1cd7078f6b46ac89470b15d8df7064"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p535422631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p535422631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p535422631175"></a>22P03</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p419560211175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p419560211175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p419560211175"></a>非法二进制表现形式（INVALID_BINARY_REPRESENTATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r82a22dc6f1d942e69551b4c49954c7e1"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514062471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514062471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514062471175"></a>22P04</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p31564691175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p31564691175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p31564691175"></a>错误的COPY格式（BAD_COPY_FILE_FORMAT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r44df028331eb4e41bce986294e7b448e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p193649131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p193649131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p193649131175"></a>22P05</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p250541381175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p250541381175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p250541381175"></a>不可翻译字符（UNTRANSLATABLE_CHARACTER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row10707100102013"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p16707202203"><a name="zh-cn_topic_0237124759_p16707202203"></a><a name="zh-cn_topic_0237124759_p16707202203"></a>22P06</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1570711052019"><a name="zh-cn_topic_0237124759_p1570711052019"></a><a name="zh-cn_topic_0237124759_p1570711052019"></a>内存查找失败（CACHE_LOOKUP_FAILED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row432813359234"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p3328235162313"><a name="zh-cn_topic_0237124759_p3328235162313"></a><a name="zh-cn_topic_0237124759_p3328235162313"></a>22P07</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p6328183512313"><a name="zh-cn_topic_0237124759_p6328183512313"></a><a name="zh-cn_topic_0237124759_p6328183512313"></a>文件读取失败（FILE_READ_FAILED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row101347913248"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p013411972411"><a name="zh-cn_topic_0237124759_p013411972411"></a><a name="zh-cn_topic_0237124759_p013411972411"></a>22P08</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p131341911247"><a name="zh-cn_topic_0237124759_p131341911247"></a><a name="zh-cn_topic_0237124759_p131341911247"></a>获取数据失败（FETCH_DATA_FAILED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6e86bdbbffe946d699d94297767ed2b9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p108556751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p108556751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p108556751175"></a>2200L</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p68944551175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p68944551175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p68944551175"></a>非XML文件（NOT_AN_XML_DOCUMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4130f232eed9482986087135225966c4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p600023521175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p600023521175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p600023521175"></a>2200M</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p283523631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p283523631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p283523631175"></a>非法的XML文件（INVALID_XML_DOCUMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0c14ce6fe1d342e2ac09583160c3954b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p664518471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p664518471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p664518471175"></a>2200N</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p138905221175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p138905221175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p138905221175"></a>非法的XML内容（INVALID_XML_CONTENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row125191536152219"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p1452083614227"><a name="zh-cn_topic_0237124759_p1452083614227"></a><a name="zh-cn_topic_0237124759_p1452083614227"></a>2200O</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1452063652214"><a name="zh-cn_topic_0237124759_p1452063652214"></a><a name="zh-cn_topic_0237124759_p1452063652214"></a>非法的XML错误信息（INVALID_XML_ERROR_CONTEXT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r68240dadc61643acb9d2ecf669df998c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598613721175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598613721175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598613721175"></a>2200S</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p169329451175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p169329451175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p169329451175"></a>非法的XML注释（INVALID_XML_COMMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb34d2a71fbe34bd184cc255f36318c2d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p631952841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p631952841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p631952841175"></a>2200T</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p185443571175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p185443571175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p185443571175"></a>非法的XML处理命令（INVALID_XML_PROCESSING_INSTRUCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row472819010596"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p772917011592"><a name="zh-cn_topic_0237124759_p772917011592"></a><a name="zh-cn_topic_0237124759_p772917011592"></a>2200X</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p272950175912"><a name="zh-cn_topic_0237124759_p272950175912"></a><a name="zh-cn_topic_0237124759_p272950175912"></a>关闭RELATION错误（RELATION_CLOSE_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf7e931a46e5549b0b53fe8cee438b8e1"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p299552281175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p299552281175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p299552281175"></a>类 23 - 违反完整性约束</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ref3752d9644f46b989cc011d50ba2e40"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p269806291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p269806291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p269806291175"></a>23000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p379473691175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p379473691175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p379473691175"></a>违反完整性约束（INTEGRITY_CONSTRAINT_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rbe28180c3310495e90551b50df9cf79d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p147803981175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p147803981175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p147803981175"></a>23001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p563616241175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p563616241175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p563616241175"></a>违反限制（RESTRICT_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r86c7ea2e55554ed5a691ce7b4b94bab2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p169997331175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p169997331175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p169997331175"></a>23502</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348011031175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348011031175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348011031175"></a>违反非空约束（NOT_NULL_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r898b762288cb4b30872f9418933b0223"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28537011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28537011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28537011175"></a>23503</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p298232251175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p298232251175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p298232251175"></a>违反外键约束（FOREIGN_KEY_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r05a5e36445ff4770b11ec823c6dc2c4a"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p649685801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p649685801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p649685801175"></a>23505</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p279636611175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p279636611175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p279636611175"></a>违反唯一约束（UNIQUE_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra2005e73d62740f1ba8e1b80c6f0ba52"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p515234881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p515234881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p515234881175"></a>23514</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p126529991175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p126529991175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p126529991175"></a>违反CHECK约束（CHECK_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r037fb22cea6244d39cf1d5922ca1c7e3"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p301221891175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p301221891175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p301221891175"></a>23P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p239782201175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p239782201175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p239782201175"></a>违反排他约束（EXCLUSION_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1c9868c3d109419186b89b4b515d7661"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p318179921175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p318179921175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p318179921175"></a>类 24 - 非法游标状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfaee9cdb083a46e291a850bab1f4be33"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427581001175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427581001175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427581001175"></a>24000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p408541011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p408541011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p408541011175"></a>非法游标状态（INVALID_CURSOR_STATE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7630fb459fee4f83a6865ec34e759f81"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p534135841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p534135841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p534135841175"></a>类 25 - 非法事务状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfd89ebef33d444c8a772b543d20a50c3"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p153620841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p153620841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p153620841175"></a>25000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p363692871175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p363692871175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p363692871175"></a>非法事务状态（INVALID_TRANSACTION_STATE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r60809de887e142d098839689e5267704"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p52093771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p52093771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p52093771175"></a>25001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p193063741175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p193063741175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p193063741175"></a>活跃的SQL状态（ACTIVE_SQL_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc1c06b7b700b43659a2f252bb4f7a627"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485945611175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485945611175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485945611175"></a>25002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p438453461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p438453461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p438453461175"></a>分支事务已激活（BRANCH_TRANSACTION_ALREADY_ACTIVE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r16df29c199ce4286b8b27195fe682e64"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p194386091175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p194386091175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p194386091175"></a>25008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310234811175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310234811175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310234811175"></a>持有的游标要求同样的隔离级别（HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9545e64138294676923868c335dd182c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4306301175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4306301175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4306301175"></a>25003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348810701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348810701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348810701175"></a>分支事务访问方式不当（INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfd095cc51fce4000a1265b9bd0ba72be"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p611499171175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p611499171175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p611499171175"></a>25004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p541962721175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p541962721175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p541962721175"></a>分支事务隔离级别不当（INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf0cd11c013804f82a75c9b9d53c1009d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p490704281175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p490704281175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p490704281175"></a>25005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p152817141175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p152817141175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p152817141175"></a>分支事务没有活跃的SQL事务（NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc1a1182a78324975990d0268098f6ebf"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p2987661175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p2987661175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p2987661175"></a>25006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p242001151175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p242001151175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p242001151175"></a>只读的SQL事务（READ_ONLY_SQL_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rbbaae73a1b5a45d88397aca4839f3903"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593620261175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593620261175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593620261175"></a>25007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p435948071175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p435948071175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p435948071175"></a>不支持模式和数据语句混合使用（SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row780324032313"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p108031440102317"><a name="zh-cn_topic_0237124759_p108031440102317"></a><a name="zh-cn_topic_0237124759_p108031440102317"></a>25009</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p108041240112315"><a name="zh-cn_topic_0237124759_p108041240112315"></a><a name="zh-cn_topic_0237124759_p108041240112315"></a>恢复期间无法启用事务（RUN_TRANSACTION_DURING_RECOVERY）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row27551447182613"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p87551047192612"><a name="zh-cn_topic_0237124759_p87551047192612"></a><a name="zh-cn_topic_0237124759_p87551047192612"></a>25010</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p17551947202612"><a name="zh-cn_topic_0237124759_p17551947202612"></a><a name="zh-cn_topic_0237124759_p17551947202612"></a>事务ID不存在（GXID_DOES_NOT_EXIST）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rcff1c211f66a4e93ab8a2e2db9f29eab"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381221561175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381221561175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381221561175"></a>25P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8869231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8869231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8869231175"></a>没有活跃的SQL事务（NO_ACTIVE_SQL_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7cbad6d1d75e40b181f0311666ea48a0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p425876731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p425876731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p425876731175"></a>25P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p270494771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p270494771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p270494771175"></a>在失败的SQL事务中（IN_FAILED_SQL_TRANSACTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf5ae3bbb8150464e881fecd53d4bfa25"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561715821175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561715821175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561715821175"></a>类 26 - 非法SQL语句名</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd561d07049fa4e15baa9c8e973e2f343"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p126765461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p126765461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p126765461175"></a>26000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p201673441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p201673441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p201673441175"></a>非法SQL语句名（INVALID_SQL_STATEMENT_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rdcde014e1d7446e182494e3bce984c5b"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p51530171175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p51530171175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p51530171175"></a>类 27 - 触发的数据改变违规</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r35e1e893334b4098a4525e8d1960f05c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655619081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655619081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655619081175"></a>27000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p89143401175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p89143401175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p89143401175"></a>触发的数据改变违规（TRIGGERED_DATA_CHANGE_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row1526520213018"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p926514210304"><a name="zh-cn_topic_0237124759_p926514210304"></a><a name="zh-cn_topic_0237124759_p926514210304"></a>27001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p72651213011"><a name="zh-cn_topic_0237124759_p72651213011"></a><a name="zh-cn_topic_0237124759_p72651213011"></a>触发的元素非法（TRIGGERED_INVALID_TUPLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r89c3ab082ce64c99acf31353d154d8cf"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561030991175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561030991175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561030991175"></a>类 28 - 非法授权声明</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3175608a7b37441ca2f2e0f2136f98b7"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p298614861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p298614861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p298614861175"></a>28000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28612791175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28612791175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28612791175"></a>非法授权声明（INVALID_AUTHORIZATION_SPECIFICATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r300d8507cf034c2096ef793c2d8e501b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p54982461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p54982461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p54982461175"></a>28P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427047661175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427047661175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427047661175"></a>非法密码（INVALID_PASSWORD）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5e72f777b35b4633b826c3efdc458ab4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a1e26c28df08541eb8a934a6208ed11db"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a1e26c28df08541eb8a934a6208ed11db"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a1e26c28df08541eb8a934a6208ed11db"></a>28P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_adcc6a1dcd83346b5aa7d9196ed9ff27a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_adcc6a1dcd83346b5aa7d9196ed9ff27a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_adcc6a1dcd83346b5aa7d9196ed9ff27a"></a>未修改初始密码（INITIAL_PASSWORD_NOT_MODIFIED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row5619122712353"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p4445153612356"><a name="zh-cn_topic_0237124759_p4445153612356"></a><a name="zh-cn_topic_0237124759_p4445153612356"></a>类29 - 无效或意外的状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row99211198361"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p29212197363"><a name="zh-cn_topic_0237124759_p29212197363"></a><a name="zh-cn_topic_0237124759_p29212197363"></a>29P06</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p179211219143617"><a name="zh-cn_topic_0237124759_p179211219143617"></a><a name="zh-cn_topic_0237124759_p179211219143617"></a>缓存在CACHE中的PLAN无效（INVALID_CACHE_PLAN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r628dfe2ad5984a2baab0cae4c57f24f8"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p603705311175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p603705311175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p603705311175"></a>类 2B - 依然存在依赖的优先级描述符</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3458c34063d34fe09f41ddcf4635063b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p538115441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p538115441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p538115441175"></a>2B000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637678421175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637678421175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637678421175"></a>依然存在依赖的优先级描述符（DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra0a90de20c25467ab723e5de08b98ea2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p474235351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p474235351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p474235351175"></a>2BP01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p161010971175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p161010971175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p161010971175"></a>依赖性对象仍然存在（DEPENDENT_OBJECTS_STILL_EXIST）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc74d2fcfdfa64dda94245fd9db0f5277"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607575831175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607575831175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607575831175"></a>类 2D - 非法的事务终止</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5b11bfb4d3a34bcb91f0780acb51f00d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4280981175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4280981175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p4280981175"></a>2D000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p346759981175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p346759981175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p346759981175"></a>非法的事务终止（INVALID_TRANSACTION_TERMINATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf7be22e88880407eb316e61b2096357b"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p458703401175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p458703401175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p458703401175"></a>类 2F - SQL过程异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7dfb5f4641b1426d8682a0cba2d10abf"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p192636461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p192636461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p192636461175"></a>2F000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p168514841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p168514841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p168514841175"></a>SQL过程异常（SQL_ROUTINE_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf43cd69743204cf9b5bffb0ecb63c6fd"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p38101121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p38101121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p38101121175"></a>2F005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401836731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401836731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401836731175"></a>执行的函数没有返回语句（FUNCTION_EXECUTED_NO_RETURN_STATEMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r184cb3da648d46c9b9e7333e4ce64c61"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p344329941175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p344329941175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p344329941175"></a>2F002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p376091021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p376091021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p376091021175"></a>不允许修改SQL数据（MODIFYING_SQL_DATA_NOT_PERMITTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7061ae074f584b20819c3db20dae974f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366194391175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366194391175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366194391175"></a>2F003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p133846021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p133846021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p133846021175"></a>企图使用禁止的SQL语句（PROHIBITED_SQL_STATEMENT_ATTEMPTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r99ec60ecf87f49e18b8dea66e5a45428"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p265900461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p265900461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p265900461175"></a>2F004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p63101131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p63101131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p63101131175"></a>不允许读取SQL数据（READING_SQL_DATA_NOT_PERMITTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4d4632f13c5a44578de4db874234b719"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366700591175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366700591175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p366700591175"></a>类 34 - 非法游标名</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9c4f6689a6ec43c9b442295955b7e598"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p231453341175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p231453341175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p231453341175"></a>34000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p628327311175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p628327311175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p628327311175"></a>非法游标名（INVALID_CURSOR_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd318989d96d545849f6fcbdc421ec4ef"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p368158111175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p368158111175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p368158111175"></a>类 38 - 外部过程异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4c0cfe8b50804522a57089254b9040e4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p622901331175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p622901331175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p622901331175"></a>38000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p123360281175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p123360281175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p123360281175"></a>外部过程异常（EXTERNAL_ROUTINE_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb9d5a32381354c279dd1aec08eaaa1aa"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p3772521175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p3772521175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p3772521175"></a>38001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p305574531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p305574531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p305574531175"></a>不允许包含SQL（CONTAINING_SQL_NOT_PERMITTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r87b2fee5612c42c0af3d3daf966fd914"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633499261175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633499261175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633499261175"></a>38002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310703801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310703801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p310703801175"></a>不允许修改SQL数据（MODIFYING_SQL_DATA_NOT_PERMITTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rae833843504a46528952a4d8d9f3b5ad"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p346199441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p346199441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p346199441175"></a>38003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p527520841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p527520841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p527520841175"></a>企图使用禁止的SQL语句（PROHIBITED_SQL_STATEMENT_ATTEMPTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1f88d288b48d4b368a50bbda78b8921c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28904951175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28904951175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p28904951175"></a>38004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p328035631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p328035631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p328035631175"></a>不允许读取SQL数据（READING_SQL_DATA_NOT_PERMITTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6edfc56775cb45d38886f73fd337fd59"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p230425051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p230425051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p230425051175"></a>类 39 - 外部过程调用异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1584d8faec634474a2ce4677854de12b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p207702031175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p207702031175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p207702031175"></a>39000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p46648731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p46648731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p46648731175"></a>外部过程调用异常（EXTERNAL_ROUTINE_INVOCATION_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1bc833f544f34726953ff06576f02301"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p452496051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p452496051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p452496051175"></a>39001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p413394061175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p413394061175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p413394061175"></a>返回了非法的SQLSTATE（INVALID_SQLSTATE_RETURNED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r64418970d2494187856112737cb790ea"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p45471191175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p45471191175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p45471191175"></a>39004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p327723311175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p327723311175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p327723311175"></a>不允许空值（NULL_VALUE_NOT_ALLOWED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r38d87083361a44db8bd51af1a6156ab4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a567a94ea8a044c3880f5fe388faa4d2e"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a567a94ea8a044c3880f5fe388faa4d2e"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a567a94ea8a044c3880f5fe388faa4d2e"></a>39P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5576d711bc1041eba5b9c1e5c970eb48"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5576d711bc1041eba5b9c1e5c970eb48"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5576d711bc1041eba5b9c1e5c970eb48"></a>违反触发协议（TRIGGER_PROTOCOL_VIOLATED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re2361cfa80734becae08781fe43cf980"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p2743081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p2743081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p2743081175"></a>39P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p222190071175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p222190071175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p222190071175"></a>违反SRF协议（SRF_PROTOCOL_VIOLATED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5d528472203a42f4ac5741738ce2a3e9"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p244203471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p244203471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p244203471175"></a>类 3B - 保存点异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re0331e57d0d04249b875dee394272522"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p185843231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p185843231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p185843231175"></a>3B000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p289351841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p289351841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p289351841175"></a>保存点异常（SAVEPOINT_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1b32341217954f528c61e20e81f44a48"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p215660351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p215660351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p215660351175"></a>3B001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p20183761175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p20183761175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p20183761175"></a>无效的保存点声明（INVALID_SAVEPOINT_SPECIFICATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r74e77d280dde4ec4a7396eafbe5272c6"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p621101201175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p621101201175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p621101201175"></a>类 3D - 非法数据库名</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r293743970e614e30aa90ff55cc02d98b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p469037941175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p469037941175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p469037941175"></a>3D000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p411109851175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p411109851175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p411109851175"></a>非法数据库名（INVALID_CATALOG_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb54acd3231e2417a83463f631d4ea557"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p393553371175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p393553371175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p393553371175"></a>类 3F - 非法模式名</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd37b1218c23e44f2885992fca94daa3b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p345561221175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p345561221175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p345561221175"></a>3F000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p475824831175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p475824831175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p475824831175"></a>非法模式名（INVALID_SCHEMA_NAME）</p>
</td>
</tr>
<tr id="row148218185307"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="p0483141823012"><a name="p0483141823012"></a><a name="p0483141823012"></a><span id="ph2069915321302"><a name="ph2069915321302"></a><a name="ph2069915321302"></a>3F001</span></p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="p124831187303"><a name="p124831187303"></a><a name="p124831187303"></a><span id="ph94279449303"><a name="ph94279449303"></a><a name="ph94279449303"></a>未定义模式（UNDEFINED_SCHEMA）</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb5e42b1e1b304cabb77a0894f4dba08d"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p594566261175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p594566261175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p594566261175"></a>类 40 - 事务回滚</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rde0bfc97e0f94ce4a4a90ddc96500e86"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p586631771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p586631771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p586631771175"></a>40000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p540969331175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p540969331175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p540969331175"></a>事务回滚（TRANSACTION_ROLLBACK）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r69a1f4c91e1d4a2ca80e6fe9c7344a29"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437610581175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437610581175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437610581175"></a>40002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p549848321175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p549848321175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p549848321175"></a>违反事务完整性约束（TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_reab23378b1224d3a82770c99ea31974f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p199508461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p199508461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p199508461175"></a>40001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p54058481175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p54058481175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p54058481175"></a>串行化失败（SERIALIZATION_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0f9b9e353c69442bac14f3427db3d4a2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485493541175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485493541175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485493541175"></a>40003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401836261175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401836261175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p401836261175"></a>未知语句是否结束（STATEMENT_COMPLETION_UNKNOWN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r44d43471bed148d68d89515089c00f12"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p343991641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p343991641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p343991641175"></a>40P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348688601175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348688601175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p348688601175"></a>侦测到死锁（DEADLOCK_DETECTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r296e70ddd9f3471dbd21f76da245104b"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p522484631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p522484631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p522484631175"></a>类 42 - 语法错误或者违反访问规则</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_row4741211175"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384038791175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384038791175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384038791175"></a>42000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237065051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237065051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237065051175"></a>语法错误或者违反访问规则（SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9701cc3242e74f7780574cb485751b70"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p350646671175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p350646671175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p350646671175"></a>42601</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p216658161175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p216658161175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p216658161175"></a>语法错误（SYNTAX_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r278299d63bd24a979da41145fb33af4c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237970871175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237970871175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237970871175"></a>42501</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485158881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485158881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485158881175"></a>权限不够（INSUFFICIENT_PRIVILEGE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd1e2bee27bdf462588f147fcbe3cedf9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p17110701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p17110701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p17110701175"></a>42846</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p43790211175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p43790211175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p43790211175"></a>无法进行类型转换（CANNOT_COERCE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r516a1d64951c448bbee4f5f42595895d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381903511175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381903511175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381903511175"></a>42803</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p64107421175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p64107421175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p64107421175"></a>分组错误（GROUPING_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r67fbf1a441b84d8c8658be7e4e3bd17d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p429199181175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p429199181175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p429199181175"></a>42P20</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p539613351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p539613351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p539613351175"></a>窗口错误（WINDOWING_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_raa62ecef3c9c4ebcb2440621f3815095"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p120195841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p120195841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p120195841175"></a>42P19</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p340622461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p340622461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p340622461175"></a>无效递归（INVALID_RECURSION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc365517c43544db2afa20902951be298"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p10977461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p10977461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p10977461175"></a>42830</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p218086061175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p218086061175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p218086061175"></a>非法的外键（INVALID_FOREIGN_KEY）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r009ca6a82abd4c88866f9694fcc839a4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607822011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607822011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p607822011175"></a>42602</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p244112691175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p244112691175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p244112691175"></a>非法名称（INVALID_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r779f7b4ee9a34c868dced949546cd974"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p119668031175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p119668031175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p119668031175"></a>42622</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p297869531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p297869531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p297869531175"></a>名称太长（NAME_TOO_LONG）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r79c2109de5ee43b185d8a0027798767a"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p385260191175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p385260191175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p385260191175"></a>42939</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p335998381175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p335998381175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p335998381175"></a>保留名称（RESERVED_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6db3941d1c9e4c81940813b4dca245db"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p666555441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p666555441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p666555441175"></a>42804</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p303899531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p303899531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p303899531175"></a>数据类型不匹配（DATATYPE_MISMATCH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0a5f806043ab4ad09442a4faf728a607"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p83506291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p83506291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p83506291175"></a>42P18</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p53123741175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p53123741175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p53123741175"></a>不确定的数据类型（INDETERMINATE_DATATYPE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rbcfaf6cf07434231927272cc4b89e694"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p475161051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p475161051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p475161051175"></a>42P21</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p235993091175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p235993091175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p235993091175"></a>排序规则不匹配（COLLATION_MISMATCH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r94bb0f60823d4589bcb1733fe559393b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p240271121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p240271121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p240271121175"></a>42P22</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390641175"></a>不确定的排序规则（INDETERMINATE_COLLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row11915184843411"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p291519487347"><a name="zh-cn_topic_0237124759_p291519487347"></a><a name="zh-cn_topic_0237124759_p291519487347"></a>42P23</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p10915848123419"><a name="zh-cn_topic_0237124759_p10915848123419"></a><a name="zh-cn_topic_0237124759_p10915848123419"></a>分区错误（PARTITION_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row633631113510"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p933611103519"><a name="zh-cn_topic_0237124759_p933611103519"></a><a name="zh-cn_topic_0237124759_p933611103519"></a>42P24</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p6336161133510"><a name="zh-cn_topic_0237124759_p6336161133510"></a><a name="zh-cn_topic_0237124759_p6336161133510"></a>非法属性值（INVALID_ATTRIBUTE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row910521523510"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p1510561519354"><a name="zh-cn_topic_0237124759_p1510561519354"></a><a name="zh-cn_topic_0237124759_p1510561519354"></a>42P25</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p910561514356"><a name="zh-cn_topic_0237124759_p910561514356"></a><a name="zh-cn_topic_0237124759_p910561514356"></a>非法聚集函数（INVALID_AGG）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row9563187113517"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p1356318713518"><a name="zh-cn_topic_0237124759_p1356318713518"></a><a name="zh-cn_topic_0237124759_p1356318713518"></a>42P26</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p205631278354"><a name="zh-cn_topic_0237124759_p205631278354"></a><a name="zh-cn_topic_0237124759_p205631278354"></a>资源池错误（RESOURCE_POOL_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row6372102414358"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p153726243353"><a name="zh-cn_topic_0237124759_p153726243353"></a><a name="zh-cn_topic_0237124759_p153726243353"></a>42P27</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p133725249359"><a name="zh-cn_topic_0237124759_p133725249359"></a><a name="zh-cn_topic_0237124759_p133725249359"></a>未找到父级计划（PLAN_PARENT_NOT_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row3449192119357"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p7450172183518"><a name="zh-cn_topic_0237124759_p7450172183518"></a><a name="zh-cn_topic_0237124759_p7450172183518"></a>42P28</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1145011217354"><a name="zh-cn_topic_0237124759_p1145011217354"></a><a name="zh-cn_topic_0237124759_p1145011217354"></a>更新冲突（MODIFY_CONFLICTS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row193416312191"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p133428310199"><a name="zh-cn_topic_0237124759_p133428310199"></a><a name="zh-cn_topic_0237124759_p133428310199"></a>42P29</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p13342638193"><a name="zh-cn_topic_0237124759_p13342638193"></a><a name="zh-cn_topic_0237124759_p13342638193"></a>分布错误（DISTRIBUTION_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_row3515781175"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p284778391175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p284778391175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p284778391175"></a>42809</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p250036371175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p250036371175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p250036371175"></a>错误的对象类型（WRONG_OBJECT_TYPE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra2a392f5f7454618ba14a238b174c812"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p411496511175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p411496511175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p411496511175"></a>42703</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p447874661175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p447874661175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p447874661175"></a>未定义的字段（UNDEFINED_COLUMN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_row4340101175"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p351548341175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p351548341175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p351548341175"></a>42883</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p289692821175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p289692821175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p289692821175"></a>未定义的函数（UNDEFINED_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf241a644a47a4d3cb0ab618698a02739"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p464237271175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p464237271175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p464237271175"></a>42P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p22255561175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p22255561175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p22255561175"></a>未定义的表（UNDEFINED_TABLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r12c32f5e71ca4fccb0001d6ba8b30245"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p118178171175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p118178171175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p118178171175"></a>42P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p177191001175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p177191001175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p177191001175"></a>未定义的参数（UNDEFINED_PARAMETER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rdb85bd68decf45ed9c42c1612ef3412a"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p323221151175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p323221151175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p323221151175"></a>42704</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8456951175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8456951175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8456951175"></a>未定义对象（UNDEFINED_OBJECT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r58ed606be05c4acbbc2d4b98c2b1bd58"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p125319481175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p125319481175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p125319481175"></a>42701</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p84548901175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p84548901175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p84548901175"></a>重复的字段（DUPLICATE_COLUMN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r15931a4c29ff4b4d96f78d13715efc5d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p567083121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p567083121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p567083121175"></a>42P03</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p299705781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p299705781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p299705781175"></a>重复的游标（DUPLICATE_CURSOR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9c994600d307476ea2db228b34138561"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381708361175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381708361175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p381708361175"></a>42P04</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p48300361175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p48300361175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p48300361175"></a>重复的数据库（DUPLICATE_DATABASE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r038930b6560848ef89c288513a54940f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p314358301175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p314358301175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p314358301175"></a>42723</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p632742621175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p632742621175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p632742621175"></a>重复的函数（DUPLICATE_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r04c15349c41746e2afc5063ea04dbef5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p231475451175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p231475451175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p231475451175"></a>42P05</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p630118431175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p630118431175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p630118431175"></a>重复的预编译语句（DUPLICATE_PREPARED_STATEMENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1df30561e133400f9aeccd1d45aac52c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p331711071175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p331711071175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p331711071175"></a>42P06</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p25051701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p25051701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p25051701175"></a>重复的模式（DUPLICATE_SCHEMA）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4c40a81531e7422fa877cfaa827d0160"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p143299221175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p143299221175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p143299221175"></a>42P07</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p198730231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p198730231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p198730231175"></a>重复的表（DUPLICATE_TABLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re09c036d284249238e29471c7ffe24c7"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p590282021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p590282021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p590282021175"></a>42712</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p165550231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p165550231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p165550231175"></a>重复的别名（DUPLICATE_ALIAS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5ff7a6c2be4d4f7088d4847b93383935"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561252711175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561252711175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p561252711175"></a>42710</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p498531351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p498531351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p498531351175"></a>重复的对象（DUPLICATE_OBJECT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r10c0356906ba46389bbd970105a4fbd6"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p370402081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p370402081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p370402081175"></a>42702</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p474669001175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p474669001175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p474669001175"></a>模糊的字段（AMBIGUOUS_COLUMN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r597e7fb901764284a392f97764f1ede9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p423055051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p423055051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p423055051175"></a>42725</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p41939151175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p41939151175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p41939151175"></a>模糊的函数（AMBIGUOUS_FUNCTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rcc57343a8e4b428598a5dc63b7700e38"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p374657601175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p374657601175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p374657601175"></a>42P08</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p148276901175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p148276901175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p148276901175"></a>模糊的参数（AMBIGUOUS_PARAMETER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rdea959959868432490a7cd7ec3dc4225"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p48591121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p48591121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p48591121175"></a>42P09</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p580437881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p580437881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p580437881175"></a>模糊的别名（AMBIGUOUS_ALIAS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r74f2e81de78a41fea7751a9741cdca72"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p353377591175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p353377591175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p353377591175"></a>42P10</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437862641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437862641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p437862641175"></a>非法字段引用（INVALID_COLUMN_REFERENCE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf7ae6957d24e4b28a2f861033612cf13"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p434764671175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p434764671175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p434764671175"></a>42611</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p319329381175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p319329381175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p319329381175"></a>非法字段定义（INVALID_COLUMN_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4e66a979bfab47e69fb7cc04ba3c8e8c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p594451441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p594451441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p594451441175"></a>42P11</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p503273351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p503273351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p503273351175"></a>非法游标定义（INVALID_CURSOR_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r688320f7e9e84826ac93e47ef1fbaf5e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471877231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471877231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471877231175"></a>42P12</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p641091801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p641091801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p641091801175"></a>非法数据库定义（INVALID_DATABASE_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r28afdd4432ef4581bfababba83757fc2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p278231841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p278231841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p278231841175"></a>42P13</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390854701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390854701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p390854701175"></a>非法函数定义（INVALID_FUNCTION_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7eb4bd62da8d4347adf1443f92a59f35"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p391497511175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p391497511175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p391497511175"></a>42P14</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p170132261175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p170132261175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p170132261175"></a>非法预编译语句定义（INVALID_PREPARED_STATEMENT_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r2b40381ade004c2495fd4adb0c8b3dc0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p546114741175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p546114741175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p546114741175"></a>42P15</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p614532541175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p614532541175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p614532541175"></a>非法模式定义（INVALID_SCHEMA_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb2af0827c8b14267b1c9a7032f2b954b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p378101751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p378101751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p378101751175"></a>42P16</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427253411175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427253411175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p427253411175"></a>非法表定义（INVALID_TABLE_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfa4de50cb31146dcb28e0d7056919fd1"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p82614121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p82614121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p82614121175"></a>42P17</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p651945981175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p651945981175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p651945981175"></a>非法对象定义（INVALID_OBJECT_DEFINITION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd6fbf973c21b489d9920a92b07edf790"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p137867321175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p137867321175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p137867321175"></a>类 44 - 违反WITH CHECK选项</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r6e6731e6b49e441180dbc7a2b5500256"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p513073371175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p513073371175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p513073371175"></a>44000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p622536461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p622536461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p622536461175"></a>违反WITH CHECK选项（WITH_CHECK_OPTION_VIOLATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r31a22831f3b94bf6845678646c7087e4"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173160991175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173160991175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p173160991175"></a>类 53 - 资源不足</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra7d21e76ea6c4fd1b2b4236893f6059f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p69699111175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p69699111175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p69699111175"></a>53000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p276919011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p276919011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p276919011175"></a>资源不足（INSUFFICIENT_RESOURCES）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra9f825d420a045d5922f748a47daaa3e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p547373131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p547373131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p547373131175"></a>53100</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p45373981175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p45373981175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p45373981175"></a>磁盘满（DISK_FULL）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r092a36980a154c038efbdcfadeefb5bd"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p194293651175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p194293651175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p194293651175"></a>53200</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p302747381175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p302747381175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p302747381175"></a>内存耗尽（OUT_OF_MEMORY）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r32e289e2ee7a476e91fa8cee0bd60d19"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p585771351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p585771351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p585771351175"></a>53300</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471274861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471274861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471274861175"></a>太多连接（TOO_MANY_CONNECTIONS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd76131e00e0f42b08d035aa764bf766b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633083721175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633083721175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633083721175"></a>53400</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p285959771525"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p285959771525"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p285959771525"></a>超过配置限制（CONFIGURATION_LIMIT_EXCEEDED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r2c00a77c6142473fbe6743dbcff659ec"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p639183851175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p639183851175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p639183851175"></a>类 54 - 超过程序限制</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r24078721062049b8bb52d90798d671a7"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p229513571175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p229513571175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p229513571175"></a>54000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471206671175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471206671175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p471206671175"></a>超过程序限制（PROGRAM_LIMIT_EXCEEDED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra22fa4072a804a54a76b5c8c253b922e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p583371961175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p583371961175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p583371961175"></a>54001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p276923991175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p276923991175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p276923991175"></a>语句太复杂（STATEMENT_TOO_COMPLEX）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc6649dff86c74f0981777f107bf97be8"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p551003671175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p551003671175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p551003671175"></a>54011</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p339447231175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p339447231175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p339447231175"></a>字段太多（TOO_MANY_COLUMNS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r59dc91db1072407c85200c2349ffbeda"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p496414121175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p496414121175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p496414121175"></a>54023</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p615314421175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p615314421175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p615314421175"></a>参数太多（TOO_MANY_ARGUMENTS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r452343f5b3474fcc83bccb58fd91adcd"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p277007851175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p277007851175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p277007851175"></a>类 55 - 对象不在预先要求的状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r22da95e1439a497a9701ab7163beb14d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p612130891175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p612130891175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p612130891175"></a>55000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593131531175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593131531175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p593131531175"></a>对象不在预先要求的状态（OBJECT_NOT_IN_PREREQUISITE_STATE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5f43d69ae2404824b6c58e615d5b9f07"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p211805661175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p211805661175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p211805661175"></a>55006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p379042991175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p379042991175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p379042991175"></a>对象在使用中(OBJECT_IN_USE)</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9ed18846dfe448b9a090d96c80fe7175"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p504910961175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p504910961175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p504910961175"></a>55P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p632469551175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p632469551175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p632469551175"></a>无法修改运行时参数（CANT_CHANGE_RUNTIME_PARAM）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra87674f4db4542868a5daa2eed181467"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p32407301175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p32407301175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p32407301175"></a>55P03</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p611726141175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p611726141175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p611726141175"></a>锁不可获得（LOCK_NOT_AVAILABLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r2ef74f83a4c9478f9041e7545f7a92e6"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p345499791175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p345499791175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p345499791175"></a>类 57 - 操作者干涉</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rd5db7af482024db2b81d33ee808202ee"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p211112501175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p211112501175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p211112501175"></a>57000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p322896951175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p322896951175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p322896951175"></a>操作者干涉（OPERATOR_INTERVENTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r11e45d3f97b3417b9ec631b8b2128891"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p510857801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p510857801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p510857801175"></a>57014</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p443075071175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p443075071175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p443075071175"></a>查询被取消（QUERY_CANCELED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8e9a79c557ca458e819660bb159acee5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p400790151551"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p400790151551"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p400790151551"></a>57015</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p251747981551"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p251747981551"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p251747981551"></a>内部查询取消（QUERY_INTERNAL_CANCEL）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ree62e37c7a3341c3a0e94f0a7af66bee"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p208096011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p208096011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p208096011175"></a>57P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p78561091175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p78561091175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p78561091175"></a>管理员关闭系统（ADMIN_SHUTDOWN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9ed73aa137aa47eaa765a401360fc4c8"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228500221175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228500221175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228500221175"></a>57P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p389124881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p389124881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p389124881175"></a>崩溃宕机（CRASH_SHUTDOWN）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra54773c2fce54dc58daf7522a56ce495"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p472633841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p472633841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p472633841175"></a>57P03</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p31289061175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p31289061175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p31289061175"></a>现在无法连接（CANNOT_CONNECT_NOW）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r27673d730f504a1398f64ebae40022e7"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p663805321175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p663805321175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p663805321175"></a>57P04</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81140491175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81140491175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p81140491175"></a>丢弃数据库（DATABASE_DROPPED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r5e799265759c45658e20f0e2b04abba2"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p95619521175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p95619521175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p95619521175"></a>类 58 - 系统错误（GaussDB自己内部的错误）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7234260946f8481bab02bed4eceb5585"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p584503131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p584503131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p584503131175"></a>58000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p368549191175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p368549191175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p368549191175"></a>系统错误（SYSTEM_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rae8cd6605ee24228b6b805dd58815a38"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p236910701175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p236910701175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p236910701175"></a>58030</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p399284801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p399284801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p399284801175"></a>IO错误（IO_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r848ab7d2c10243e2836474efad1c47df"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p497243101175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p497243101175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p497243101175"></a>58P01</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p11373191175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p11373191175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p11373191175"></a>未定义的文件（UNDEFINED_FILE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r61d86ba793d04a369ed6a01bfa176cab"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237995601175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237995601175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p237995601175"></a>58P02</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p487161931175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p487161931175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p487161931175"></a>重复的文件（DUPLICATE_FILE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rff96e17e6d3f4ab0a6b69f66f0b4ff55"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p135159841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p135159841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p135159841175"></a>类 F0 - 配置文件错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rdcd79b2001024ef6bb2e9c560e068394"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p552582951175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p552582951175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p552582951175"></a>F0000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p467369471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p467369471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p467369471175"></a>配置文件错误（CONFIG_FILE_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3af56bb9dae448caba34db44e5a78564"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p470403841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p470403841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p470403841175"></a>F0001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p521747821175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p521747821175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p521747821175"></a>锁文件存在（LOCK_FILE_EXISTS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r99559ee7e098445e9791a940fab59cb7"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p517991801175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p517991801175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p517991801175"></a>类 HV - 外部数据错误（SQL/MED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3b7506d4c0b54318aeacde83da301dc8"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p464211771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p464211771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p464211771175"></a>HV000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p20189841175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p20189841175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p20189841175"></a>外部数据错误（FDW_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r99ff112f05a646629bb05ae1c04fbbc1"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p625537741175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p625537741175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p625537741175"></a>HV005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p336909221175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p336909221175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p336909221175"></a>未找到列名（FDW_COLUMN_NAME_NOT_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r713ec0ccf5734c60ae33a90a94baa44b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p659467791175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p659467791175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p659467791175"></a>HV002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p400888771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p400888771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p400888771175"></a>需要动态参数值（FDW_DYNAMIC_PARAMETER_VALUE_NEEDED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7bb2ff30ef434309b7c341de9ef2ffa6"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p324357331175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p324357331175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p324357331175"></a>HV010</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p100487271175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p100487271175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p100487271175"></a>函数序列错误（FDW_FUNCTION_SEQUENCE_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0ba4256b16ce4d6bb81bc5b2bed0531e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p106563771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p106563771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p106563771175"></a>HV021</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p578602461175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p578602461175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p578602461175"></a>描述信息不一致（FDW_INCONSISTENT_DESCRIPTOR_INFORMATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8cef2374283e42adaad8c77e06c11fd2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p357530051175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p357530051175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p357530051175"></a>HV024</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p103122861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p103122861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p103122861175"></a>非法属性值（FDW_INVALID_ATTRIBUTE_VALUE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0c5d13451e27459390b3a5885d0d308a"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p14637721175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p14637721175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p14637721175"></a>HV007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514567471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514567471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514567471175"></a>非法列名称（FDW_INVALID_COLUMN_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r27bab3a6465b4741a1f9ed88b977ea96"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p652231011175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p652231011175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p652231011175"></a>HV008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485798441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485798441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p485798441175"></a>非法列数（FDW_INVALID_COLUMN_NUMBER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9f70e4d56b59469d877bb8af870963b7"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p483355641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p483355641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p483355641175"></a>HV004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228666131175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228666131175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228666131175"></a>非法数据类型（FDW_INVALID_DATA_TYPE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r77a3881d62da4f9dad785bea1bb463f5"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p267632781175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p267632781175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p267632781175"></a>HV006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p203419081175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p203419081175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p203419081175"></a>非法数据类型描述符（FDW_INVALID_DATA_TYPE_DESCRIPTORS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_re8393cccb36f427d959e300c4ee42a63"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p653009441175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p653009441175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p653009441175"></a>HV091</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p548851161175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p548851161175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p548851161175"></a>非法字段标识符（FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r330940b3a30e446b9bbd7efa28eff438"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p143669511175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p143669511175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p143669511175"></a>HV00B</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228724031175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228724031175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p228724031175"></a>非法处理（FDW_INVALID_HANDLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r44c9821e479a49ee90123429a8fb1a9e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p309841771175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p309841771175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p309841771175"></a>HV00C</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p266903751175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p266903751175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p266903751175"></a>非法索引选项（FDW_INVALID_OPTION_INDEX）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb83a25111e8b452eb54df2ae9ff702ec"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p628220331175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p628220331175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p628220331175"></a>HV00D</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p554199161175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p554199161175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p554199161175"></a>非法选项名称（FDW_INVALID_OPTION_NAME）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r930067bc95924534bc8e1612c8148069"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p15827741175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p15827741175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p15827741175"></a>HV090</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p610958391175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p610958391175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p610958391175"></a>非法字符串长度或缓冲区长度（FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra62e953d92bf4ed2bce32604e4d3ac59"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456898111175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456898111175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p456898111175"></a>HV00A</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p98872361175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p98872361175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p98872361175"></a>非法字符长格式（FDW_INVALID_STRING_FORMAT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf04125f2b62f4f6985244f61eaacc255"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p271473031175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p271473031175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p271473031175"></a>HV009</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514479471175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514479471175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p514479471175"></a>非法使用NULL指针（FDW_INVALID_USE_OF_NULL_POINTER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r253cacd55bdf4ede9d2ecdb093b2954c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p588072861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p588072861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p588072861175"></a>HV014</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p657697341175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p657697341175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p657697341175"></a>太多句柄（FDW_TOO_MANY_HANDLES）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc987cbc081f94b0698d05c012b07f7b4"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p304073731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p304073731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p304073731175"></a>HV001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p470781631175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p470781631175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p470781631175"></a>内存耗尽（FDW_OUT_OF_MEMORY）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r944e89a980d0421d8517f3e291e29851"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p273517451175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p273517451175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p273517451175"></a>HV00P</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8989041175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8989041175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p8989041175"></a>无模式（FDW_NO_SCHEMAS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r705ff4eaf79345348b76ddac94ce236d"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p513212641175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p513212641175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p513212641175"></a>HV00J</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633816961175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633816961175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p633816961175"></a>未找到选项名称（FDW_OPTION_NAME_NOT_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4ff0648974254681abcc5992fd21d81f"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p343583971175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p343583971175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p343583971175"></a>HV00K</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p315667861175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p315667861175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p315667861175"></a>回复句柄（FDW_REPLY_HANDLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf8f132a18e694ff5acca616f8cea64fb"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p609557351175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p609557351175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p609557351175"></a>HV00Q</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384674821175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384674821175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p384674821175"></a>未找到模式（FDW_SCHEMA_NOT_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra72d2116f99d441aa85082996a79df77"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p583981931175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p583981931175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p583981931175"></a>HV00R</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p326332291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p326332291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p326332291175"></a>未找到表（FDW_TABLE_NOT_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row106141021133515"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p4614182110359"><a name="zh-cn_topic_0237124759_p4614182110359"></a><a name="zh-cn_topic_0237124759_p4614182110359"></a>HV00S</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p561592193514"><a name="zh-cn_topic_0237124759_p561592193514"></a><a name="zh-cn_topic_0237124759_p561592193514"></a>不正确的服务器类型(FDW_INVALID_SERVER_TYPE)</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r59890baa86f64596953e2875606398cc"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p330861541175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p330861541175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p330861541175"></a>HV00L</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p627328401175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p627328401175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p627328401175"></a>无法建立执行（FDW_UNABLE_TO_CREATE_EXECUTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7faa10a61af64c4993aab02f2e8822f9"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p311041021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p311041021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p311041021175"></a>HV00M</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p364043521175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p364043521175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p364043521175"></a>不能创建回复（FDW_UNABLE_TO_CREATE_REPLY）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra07f54ef18804fdfa6ab6bf32885f199"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p307716021175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p307716021175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p307716021175"></a>HV00N</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p94718581175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p94718581175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p94718581175"></a>无法建立连接（FDW_UNABLE_TO_ESTABLISH_CONNECTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r33354f0449fd4df686fd729f970f4254"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598808681175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598808681175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p598808681175"></a>类 P0 - PL/pgSQL错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8f54245fb27d466188ca43c4d507f612"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p323911731175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p323911731175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p323911731175"></a>P0000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p64393511175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p64393511175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p64393511175"></a>PLPGSQL错误（PLPGSQL_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfba668699932442ea968f35b3ba74861"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637755031175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637755031175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p637755031175"></a>P0001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655421291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655421291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p655421291175"></a>抛出异常（RAISE_EXCEPTION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ra735c65d2b2e4ddd94ae99fe82c82e74"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p658103071175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p658103071175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p658103071175"></a>P0002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p290346881175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p290346881175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p290346881175"></a>未找到数据（NO_DATA_FOUND）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb04403c1d1304ec3aad805667eb99abb"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p269956551175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p269956551175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p269956551175"></a>P0003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p391644401175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p391644401175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p391644401175"></a>行太多（TOO_MANY_ROWS）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rcfe9b4415da6478b95cf6781d814c3be"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p296096061175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p296096061175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p296096061175"></a>P0004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p495679251175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p495679251175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p495679251175"></a>FORALL需要DML操作（FORALL_NEED_DML）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r67ba9b57f4d34b5986fb7a112700d74e"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p304491431175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p304491431175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p304491431175"></a>类 XX - 内部错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r53e61522d3b846f5a2431412f22e8665"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p515006291175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p515006291175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p515006291175"></a>XX000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p108014301175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p108014301175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p108014301175"></a>内部错误（INTERNAL_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1c178036af854d05b597aa025ec7c06c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p225057591175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p225057591175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p225057591175"></a>XX001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p110271761175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p110271761175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p110271761175"></a>数据损坏（DATA_CORRUPTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rfa26dd1061e94d80b050044183d0bd77"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p528568311175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p528568311175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p528568311175"></a>XX002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p535448901175"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p535448901175"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p535448901175"></a>索引损坏（INDEX_CORRUPTED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r3fdde8ec3e7f4533a3602cbcc522ae3e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a094f51bb26964338bd127882c0c2a265"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a094f51bb26964338bd127882c0c2a265"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a094f51bb26964338bd127882c0c2a265"></a>XX003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5d20649537614f3895a3b5e2898d1c59"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5d20649537614f3895a3b5e2898d1c59"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5d20649537614f3895a3b5e2898d1c59"></a>关闭远程流接口（STREAM_REMOTE_CLOSE_SOCKET）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row18971157125013"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p6971137125010"><a name="zh-cn_topic_0237124759_p6971137125010"></a><a name="zh-cn_topic_0237124759_p6971137125010"></a>XX004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p39715719504"><a name="zh-cn_topic_0237124759_p39715719504"></a><a name="zh-cn_topic_0237124759_p39715719504"></a>未知节点类型（UNRECOGNIZED_NODE_TYPE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row492010544414"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p139211154184115"><a name="zh-cn_topic_0237124759_p139211154184115"></a><a name="zh-cn_topic_0237124759_p139211154184115"></a>XX005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1892195416417"><a name="zh-cn_topic_0237124759_p1892195416417"></a><a name="zh-cn_topic_0237124759_p1892195416417"></a>异常空值（UNEXPECTED_NULL_VALUE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row5106851502"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p210610545018"><a name="zh-cn_topic_0237124759_p210610545018"></a><a name="zh-cn_topic_0237124759_p210610545018"></a>XX006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p41061356505"><a name="zh-cn_topic_0237124759_p41061356505"></a><a name="zh-cn_topic_0237124759_p41061356505"></a>异常节点状态（UNEXPECTED_NODE_STATE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row450914095014"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p250919045016"><a name="zh-cn_topic_0237124759_p250919045016"></a><a name="zh-cn_topic_0237124759_p250919045016"></a>XX007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p9509150195010"><a name="zh-cn_topic_0237124759_p9509150195010"></a><a name="zh-cn_topic_0237124759_p9509150195010"></a>JUNK列为空（NULL_JUNK_ATTRIBUTE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row1254815713493"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p1754811571496"><a name="zh-cn_topic_0237124759_p1754811571496"></a><a name="zh-cn_topic_0237124759_p1754811571496"></a>XX008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p55481157144916"><a name="zh-cn_topic_0237124759_p55481157144916"></a><a name="zh-cn_topic_0237124759_p55481157144916"></a>优化器状态不一致（OPTIMIZER_INCONSISTENT_STATE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row6461547164915"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p646144784913"><a name="zh-cn_topic_0237124759_p646144784913"></a><a name="zh-cn_topic_0237124759_p646144784913"></a>XX009</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p154611473490"><a name="zh-cn_topic_0237124759_p154611473490"></a><a name="zh-cn_topic_0237124759_p154611473490"></a>重复查询编号（STREAM_DUPLICATE_QUERY_ID）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row238485461415"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p12385654191414"><a name="zh-cn_topic_0237124759_p12385654191414"></a><a name="zh-cn_topic_0237124759_p12385654191414"></a>XX010</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p14385115481420"><a name="zh-cn_topic_0237124759_p14385115481420"></a><a name="zh-cn_topic_0237124759_p14385115481420"></a>无效缓冲区（INVALID_BUFFER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row162323419163"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p6233541161615"><a name="zh-cn_topic_0237124759_p6233541161615"></a><a name="zh-cn_topic_0237124759_p6233541161615"></a>XX011</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p4233164113169"><a name="zh-cn_topic_0237124759_p4233164113169"></a><a name="zh-cn_topic_0237124759_p4233164113169"></a>无效缓冲区引用（INVALID_BUFFER_REFERENCE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row2066913221283"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p1066910229812"><a name="zh-cn_topic_0237124759_p1066910229812"></a><a name="zh-cn_topic_0237124759_p1066910229812"></a>XX012</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1066916228816"><a name="zh-cn_topic_0237124759_p1066916228816"></a><a name="zh-cn_topic_0237124759_p1066916228816"></a>节点编号不匹配（NODE_ID_MISSMATCH）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row92353216571"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p14237132155713"><a name="zh-cn_topic_0237124759_p14237132155713"></a><a name="zh-cn_topic_0237124759_p14237132155713"></a>XX013</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1423716275718"><a name="zh-cn_topic_0237124759_p1423716275718"></a><a name="zh-cn_topic_0237124759_p1423716275718"></a>不能修改xid base（CANNOT_MODIFY_XIDBASE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row194711444155712"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p6471134413576"><a name="zh-cn_topic_0237124759_p6471134413576"></a><a name="zh-cn_topic_0237124759_p6471134413576"></a>XX014</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p847124475711"><a name="zh-cn_topic_0237124759_p847124475711"></a><a name="zh-cn_topic_0237124759_p847124475711"></a>TOAST表数据损坏（UNEXPECTED_CHUNK_VALUE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc4c024681c014649bc1e82a9d978d249"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0c491cdb7a494497829b3446efd556b7"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0c491cdb7a494497829b3446efd556b7"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0c491cdb7a494497829b3446efd556b7"></a>类 YY - SQL重试错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8b70d2e4263243c8a8a406c12eec523e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af32cb293bdac43efb6cf72a804c9d8d2"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af32cb293bdac43efb6cf72a804c9d8d2"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af32cb293bdac43efb6cf72a804c9d8d2"></a>YY001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a7917043ba69944dba2b1fbf430a21af4"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a7917043ba69944dba2b1fbf430a21af4"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a7917043ba69944dba2b1fbf430a21af4"></a>对端连接重置（CONNECTION_RESET_BY_PEER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4f37d5ec664840b198ae92ca60d0cea7"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aabbf4db17e7045a7bc170d5a72209570"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aabbf4db17e7045a7bc170d5a72209570"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aabbf4db17e7045a7bc170d5a72209570"></a>YY002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a7bc53a27e60444118c92c9c25099807d"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a7bc53a27e60444118c92c9c25099807d"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a7bc53a27e60444118c92c9c25099807d"></a>对端流重置（STREAM_CONNECTION_RESET_BY_PEER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r07098e6ce2d343bfa19370e76c9d18e8"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab4680587c6264f6c862e4eba908953b1"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab4680587c6264f6c862e4eba908953b1"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab4680587c6264f6c862e4eba908953b1"></a>YY003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4a7fcf7668bb47ebaa0fdfb2b39dc965"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4a7fcf7668bb47ebaa0fdfb2b39dc965"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4a7fcf7668bb47ebaa0fdfb2b39dc965"></a>锁等待超时（LOCK_WAIT_TIMEOUT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_refd46571022e4d0aa96113265e6494ef"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ace416348f3e7437ea18dfa6187919a60"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ace416348f3e7437ea18dfa6187919a60"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ace416348f3e7437ea18dfa6187919a60"></a>YY004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p53679915163"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p53679915163"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p53679915163"></a>连接超时（CONNECTION_TIMED_OUT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc9d9330e5fa44e95bd8005af3d8c31b3"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aa010ccbc33c64a2491e4350860b7e44a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aa010ccbc33c64a2491e4350860b7e44a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aa010ccbc33c64a2491e4350860b7e44a"></a>YY005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aab641c22ead342299330f3ca0869ef0b"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aab641c22ead342299330f3ca0869ef0b"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aab641c22ead342299330f3ca0869ef0b"></a>查询设置错误（SET_QUERY_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8ac256c83c7344c2aa384f8954f58ddd"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a2c90b5fd2a2f4d7e9602f74cdbfb92ef"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a2c90b5fd2a2f4d7e9602f74cdbfb92ef"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a2c90b5fd2a2f4d7e9602f74cdbfb92ef"></a>YY006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab3bcfe2aec984f4ea15e42adadd72a92"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab3bcfe2aec984f4ea15e42adadd72a92"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab3bcfe2aec984f4ea15e42adadd72a92"></a>超出逻辑内存（OUT_OF_LOGICAL_MEMORY）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rf8d209f0dc40446ab134fb252bd18c18"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a121fd2e7609746208c3628368ff09d67"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a121fd2e7609746208c3628368ff09d67"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a121fd2e7609746208c3628368ff09d67"></a>YY007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac6c2080b2d304e73a4ec611b2a9ca0ae"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac6c2080b2d304e73a4ec611b2a9ca0ae"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac6c2080b2d304e73a4ec611b2a9ca0ae"></a>通信库内存分配（SCTP_MEMORY_ALLOC）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7a8344716ab34abdb143d75b7f56dbec"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a6146ed1a816c4df6a02f65b9bdb61d59"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a6146ed1a816c4df6a02f65b9bdb61d59"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a6146ed1a816c4df6a02f65b9bdb61d59"></a>YY008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a792df09cf8524459bca14a5a3ae8357a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a792df09cf8524459bca14a5a3ae8357a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a792df09cf8524459bca14a5a3ae8357a"></a>无通信库缓存数据（SCTP_NO_DATA_IN_BUFFER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rc03e0696ce394154b88e685e68c59e13"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a62a2d79def3e45bead74b8c9b77ed552"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a62a2d79def3e45bead74b8c9b77ed552"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a62a2d79def3e45bead74b8c9b77ed552"></a>YY009</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a104a39da8b9a4f1482ee2877cf8821cc"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a104a39da8b9a4f1482ee2877cf8821cc"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a104a39da8b9a4f1482ee2877cf8821cc"></a>通信库释放内存关闭（SCTP_RELEASE_MEMORY_CLOSE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r4cb55422034049ebaad37f3124ba73d2"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_acc0eddbe3ca04ad88096ceb9073f23d8"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_acc0eddbe3ca04ad88096ceb9073f23d8"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_acc0eddbe3ca04ad88096ceb9073f23d8"></a>YY010</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p692464154944"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p692464154944"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_zh-cn_topic_0058968727_p692464154944"></a>SCTP、TCP断开（SCTP_TCP_DISCONNECT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8fb5907e1c4d4bd4bce529093c93fd9b"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a502dc8b6b3cd4b379aa08ca620f55e21"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a502dc8b6b3cd4b379aa08ca620f55e21"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a502dc8b6b3cd4b379aa08ca620f55e21"></a>YY011</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a23075291d1094198b534dd8053a240f3"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a23075291d1094198b534dd8053a240f3"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a23075291d1094198b534dd8053a240f3"></a>通信库断开（SCTP_DISCONNECT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r55d48bfd740344b7af6ac7d1ce3ae0b0"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_afbc6a3c8933a4c5096f38c07c1d74f26"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_afbc6a3c8933a4c5096f38c07c1d74f26"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_afbc6a3c8933a4c5096f38c07c1d74f26"></a>YY012</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a870a44717d6c4ca186e9d51e55b1a205"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a870a44717d6c4ca186e9d51e55b1a205"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a870a44717d6c4ca186e9d51e55b1a205"></a>通信库远程关闭（SCTP_REMOTE_CLOSE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0cee28c13bed466d93bb90950f58029c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad5c9ea7d443448ca98d296d55c97e599"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad5c9ea7d443448ca98d296d55c97e599"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad5c9ea7d443448ca98d296d55c97e599"></a>YY013</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_accd196ca75f0461cb85cb9118b668bef"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_accd196ca75f0461cb85cb9118b668bef"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_accd196ca75f0461cb85cb9118b668bef"></a>等待未知通信库通信（SCTP_WAIT_POLL_UNKNOW）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row1196116597188"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p9961115916182"><a name="zh-cn_topic_0237124759_p9961115916182"></a><a name="zh-cn_topic_0237124759_p9961115916182"></a>YY014</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p89611959171815"><a name="zh-cn_topic_0237124759_p89611959171815"></a><a name="zh-cn_topic_0237124759_p89611959171815"></a>无效快照（SNAPSHOT_INVALID）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row102261938201013"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p0226193812103"><a name="zh-cn_topic_0237124759_p0226193812103"></a><a name="zh-cn_topic_0237124759_p0226193812103"></a>YY015</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p17226183810103"><a name="zh-cn_topic_0237124759_p17226183810103"></a><a name="zh-cn_topic_0237124759_p17226183810103"></a>通讯接收信息错误（CONNECTION_RECEIVE_WRONG）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row3862183701120"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p12690174317129"><a name="zh-cn_topic_0237124759_p12690174317129"></a><a name="zh-cn_topic_0237124759_p12690174317129"></a>类SI – SPI接口错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row17736205513125"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p19736155181218"><a name="zh-cn_topic_0237124759_p19736155181218"></a><a name="zh-cn_topic_0237124759_p19736155181218"></a>SP000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p07366558125"><a name="zh-cn_topic_0237124759_p07366558125"></a><a name="zh-cn_topic_0237124759_p07366558125"></a>SPI接口错误（SPI_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row1325316498133"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p7253249151314"><a name="zh-cn_topic_0237124759_p7253249151314"></a><a name="zh-cn_topic_0237124759_p7253249151314"></a>SP001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p8253124921315"><a name="zh-cn_topic_0237124759_p8253124921315"></a><a name="zh-cn_topic_0237124759_p8253124921315"></a>SPI通讯失败（SPI_CONNECTION_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row3388164310138"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p73887438134"><a name="zh-cn_topic_0237124759_p73887438134"></a><a name="zh-cn_topic_0237124759_p73887438134"></a>SP002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p238884316133"><a name="zh-cn_topic_0237124759_p238884316133"></a><a name="zh-cn_topic_0237124759_p238884316133"></a>SPI完成失败（SPI_FINISH_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row515016350138"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p3150135171311"><a name="zh-cn_topic_0237124759_p3150135171311"></a><a name="zh-cn_topic_0237124759_p3150135171311"></a>SP003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1815083551316"><a name="zh-cn_topic_0237124759_p1815083551316"></a><a name="zh-cn_topic_0237124759_p1815083551316"></a>SPI准备失败（SPI_PREPARE_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row2670140161318"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p17670940161310"><a name="zh-cn_topic_0237124759_p17670940161310"></a><a name="zh-cn_topic_0237124759_p17670940161310"></a>SP004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p166711740161318"><a name="zh-cn_topic_0237124759_p166711740161318"></a><a name="zh-cn_topic_0237124759_p166711740161318"></a>SPI游标开启失败（SPI_CURSOR_OPEN_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row2081110256135"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p4811102551319"><a name="zh-cn_topic_0237124759_p4811102551319"></a><a name="zh-cn_topic_0237124759_p4811102551319"></a>SP005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p138111725181317"><a name="zh-cn_topic_0237124759_p138111725181317"></a><a name="zh-cn_topic_0237124759_p138111725181317"></a>SPI执行失败（SPI_EXECUTE_FAILURE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row171327327135"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p17133133219134"><a name="zh-cn_topic_0237124759_p17133133219134"></a><a name="zh-cn_topic_0237124759_p17133133219134"></a>SP006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p1413312322131"><a name="zh-cn_topic_0237124759_p1413312322131"></a><a name="zh-cn_topic_0237124759_p1413312322131"></a>SPI不当调用（<span id="ph835616014013"><a name="ph835616014013"></a><a name="ph835616014013"></a>SPI_IMPROPER_CALL_FUNCTION</span>）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row149641015172119"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p647913297217"><a name="zh-cn_topic_0237124759_p647913297217"></a><a name="zh-cn_topic_0237124759_p647913297217"></a>类RB - RBTree错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row15710111013226"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p19710910182218"><a name="zh-cn_topic_0237124759_p19710910182218"></a><a name="zh-cn_topic_0237124759_p19710910182218"></a>RB001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p187101110122219"><a name="zh-cn_topic_0237124759_p187101110122219"></a><a name="zh-cn_topic_0237124759_p187101110122219"></a>RBTree无效节点状态（RBTREE_INVALID_NODE_STATE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row18392429202415"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p1392729142411"><a name="zh-cn_topic_0237124759_p1392729142411"></a><a name="zh-cn_topic_0237124759_p1392729142411"></a>RB002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p33921529172417"><a name="zh-cn_topic_0237124759_p33921529172417"></a><a name="zh-cn_topic_0237124759_p33921529172417"></a>RBTree无效迭代顺序（RBTREE_INVALID_ITERATOR_ORDER）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r79780b6349e644a89a7e08aeac9ac5d9"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac7e2ab1f7f734e3e9cd1e5baf962d493"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac7e2ab1f7f734e3e9cd1e5baf962d493"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ac7e2ab1f7f734e3e9cd1e5baf962d493"></a>类 PD - PL调试器错误</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb162f3bc568b49c0bd57c3aa5ea76b44"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af78eb08817af4f3e8b1884a0594d978a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af78eb08817af4f3e8b1884a0594d978a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_af78eb08817af4f3e8b1884a0594d978a"></a>D0000</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a82c07b2358ab45a7947188dcfa264094"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a82c07b2358ab45a7947188dcfa264094"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a82c07b2358ab45a7947188dcfa264094"></a>PL调试器内部错误（PLDEBUGGER_INTERNAL_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rb5936170c4594716941796470720666e"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aae544c47ca36436fbe96efa4ca204d16"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aae544c47ca36436fbe96efa4ca204d16"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aae544c47ca36436fbe96efa4ca204d16"></a>D0001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5d86b64ebc0540b397e5b40e7842956f"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5d86b64ebc0540b397e5b40e7842956f"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a5d86b64ebc0540b397e5b40e7842956f"></a>重复断点（DUPLICATE_BREAKPOINT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_rcac2007043dd44499f424e2647f3c476"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a95612b4e8bec4d30834a91a316eef842"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a95612b4e8bec4d30834a91a316eef842"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a95612b4e8bec4d30834a91a316eef842"></a>D0002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a80564ac4ebd84fec8623f2ec6a04e3b5"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a80564ac4ebd84fec8623f2ec6a04e3b5"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a80564ac4ebd84fec8623f2ec6a04e3b5"></a>哈希函数没有被初始化（FUNCTION_HASH_IS_NOT_INITIALIZED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r7562320e99b84598bad14625821c04a6"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0195a5e586ca464cba47f999353ecd13"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0195a5e586ca464cba47f999353ecd13"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a0195a5e586ca464cba47f999353ecd13"></a>D0003</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a491aa4a8157e42569f98ed2285699047"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a491aa4a8157e42569f98ed2285699047"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a491aa4a8157e42569f98ed2285699047"></a>断点不存在（BREAKPOINT_IS_NOT_PRESENT）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r9bba23b69f474e99846ffdb40e0174b1"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_afb1fcc10f587450981b418c09951a7cc"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_afb1fcc10f587450981b418c09951a7cc"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_afb1fcc10f587450981b418c09951a7cc"></a>D0004</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4caae6e08446407c882f3e1b2fc5f93f"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4caae6e08446407c882f3e1b2fc5f93f"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4caae6e08446407c882f3e1b2fc5f93f"></a>已附加调试服务器（DEBUG_SERVER_ALREADY_IS_ATTACHED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r38077360e9cd4e6ab54f257bc7101f34"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab615204b808d48a0ba4694c25c282d95"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab615204b808d48a0ba4694c25c282d95"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ab615204b808d48a0ba4694c25c282d95"></a>D0005</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a6e43bf18ef014840818db348ea97ebb8"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a6e43bf18ef014840818db348ea97ebb8"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a6e43bf18ef014840818db348ea97ebb8"></a>未附加调试服务器（DEBUG_SERVER_NOT_ATTACHED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r0a1d41d517f249ebbfab5692d01ebdf3"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad2a60180b95e4d1a9895773d95b2ac00"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad2a60180b95e4d1a9895773d95b2ac00"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad2a60180b95e4d1a9895773d95b2ac00"></a>D0006</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a45fc18d0f6c348068646effae7f4f064"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a45fc18d0f6c348068646effae7f4f064"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a45fc18d0f6c348068646effae7f4f064"></a>已同步调试服务器（DEBUG_SERVER_ALREADY_IN_SYNC）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r1e5e243a8a81444fa2fa4433abe4f974"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a3f566ac594c24a5bbac1203e686fbcaf"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a3f566ac594c24a5bbac1203e686fbcaf"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a3f566ac594c24a5bbac1203e686fbcaf"></a>D0007</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aecfb7ad54ccc4a6c9043045b6a25308c"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aecfb7ad54ccc4a6c9043045b6a25308c"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_aecfb7ad54ccc4a6c9043045b6a25308c"></a>未同步调试服务器（DEBUG_TARGET_SERVERS_NOT_IN_SYNC）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r79efd1ca535f48939e0110e36235faec"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a44d0c5f9500f42a6b86bf25bd5a24666"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a44d0c5f9500f42a6b86bf25bd5a24666"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a44d0c5f9500f42a6b86bf25bd5a24666"></a>D0008</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ade1204903748429d8687925429f2c67a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ade1204903748429d8687925429f2c67a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ade1204903748429d8687925429f2c67a"></a>已同步目标服务（TARGET_SERVER_ALREADY_IN_SYNC）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r45c7a7a90a2c4389b1984dbf3080ca45"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_abc042e4e098042f3ac43e73cf3aef0e1"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_abc042e4e098042f3ac43e73cf3aef0e1"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_abc042e4e098042f3ac43e73cf3aef0e1"></a>D0009</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a24f136fbdae6418d84af2dbdea6d235a"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a24f136fbdae6418d84af2dbdea6d235a"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a24f136fbdae6418d84af2dbdea6d235a"></a>变量不存在（NON_EXISTANT_VARIABLE）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r82300690e203402fbda8e379aa0a7eba"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a2f89c4861b3d4071bb32e30c9e0b06ae"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a2f89c4861b3d4071bb32e30c9e0b06ae"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a2f89c4861b3d4071bb32e30c9e0b06ae"></a>D0010</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a38210d2626694e4f9ec32062fbff2fcd"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a38210d2626694e4f9ec32062fbff2fcd"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a38210d2626694e4f9ec32062fbff2fcd"></a>非法目标会话ID（INVALID_TARGET_SESSION_ID）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r32d412a5f074428386f628a0b2997393"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a74b657871d934f6282e7a79285d22b51"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a74b657871d934f6282e7a79285d22b51"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a74b657871d934f6282e7a79285d22b51"></a>D0011</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad6b435b211ce420aa8eae99ba7054076"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad6b435b211ce420aa8eae99ba7054076"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ad6b435b211ce420aa8eae99ba7054076"></a>非法操作（INVALID_OPERATION）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r8cd9dc0a99964e9dbd8b2d48261af66c"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ae8dc5b2a488449b4a070cdbe094804ef"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ae8dc5b2a488449b4a070cdbe094804ef"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_ae8dc5b2a488449b4a070cdbe094804ef"></a>D0012</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_adb523a5b85c54401b29b843aeea83c70"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_adb523a5b85c54401b29b843aeea83c70"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_adb523a5b85c54401b29b843aeea83c70"></a>达到最大调试会话数（MAXIMUM_NUMBER_OF_DEBUG_SESSIONS_REACHED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_r22fe0802a8e04f5585fc81451e7dbb98"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a691425fad7a64c5eb187c0f0f6cff283"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a691425fad7a64c5eb187c0f0f6cff283"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a691425fad7a64c5eb187c0f0f6cff283"></a>D0013</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4f2ee1342eac454786a33b175bde8197"><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4f2ee1342eac454786a33b175bde8197"></a><a name="zh-cn_topic_0237124759_zh-cn_topic_0059778351_a4f2ee1342eac454786a33b175bde8197"></a>达到最大断点数（MAXIMUM_NUMBER_OF_BREAKPOINTS_REACHED）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row96461242171413"><td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.3.1.1 mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p658884919146"><a name="zh-cn_topic_0237124759_p658884919146"></a><a name="zh-cn_topic_0237124759_p658884919146"></a>类LL - 逻辑解码错误码</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row18841171551520"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p2084241516156"><a name="zh-cn_topic_0237124759_p2084241516156"></a><a name="zh-cn_topic_0237124759_p2084241516156"></a>LL001</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p284261531519"><a name="zh-cn_topic_0237124759_p284261531519"></a><a name="zh-cn_topic_0237124759_p284261531519"></a>逻辑解码错误（LOGICAL_DECODE_ERROR）</p>
</td>
</tr>
<tr id="zh-cn_topic_0237124759_row53691457161513"><td class="cellrowborder" valign="top" width="20.48%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237124759_p5370657181520"><a name="zh-cn_topic_0237124759_p5370657181520"></a><a name="zh-cn_topic_0237124759_p5370657181520"></a>LL002</p>
</td>
<td class="cellrowborder" valign="top" width="79.52%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237124759_p11370175761513"><a name="zh-cn_topic_0237124759_p11370175761513"></a><a name="zh-cn_topic_0237124759_p11370175761513"></a>哈希表搜索错误（RELFILENODEMAP）</p>
</td>
</tr>
</tbody>
</table>

**表 2**  openGauss CM错误码SQLSTATE值

<a name="table548617911814"></a>
<table><thead align="left"><tr id="row174871598183"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1352583209"><a name="p1352583209"></a><a name="p1352583209"></a>类 c0 - 连接异常（Connection Exception）</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2">&nbsp;&nbsp;</th>
</tr>
</thead>
<tbody><tr id="row16487498187"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p26847299588"><a name="p26847299588"></a><a name="p26847299588"></a>c0000</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5684142965813"><a name="p5684142965813"></a><a name="p5684142965813"></a>连接异常（connection_exception）</p>
</td>
</tr>
<tr id="row248718981813"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1368412919589"><a name="p1368412919589"></a><a name="p1368412919589"></a>c0001</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p20684829185813"><a name="p20684829185813"></a><a name="p20684829185813"></a>连接不存在（connection_does_not_exist）</p>
</td>
</tr>
<tr id="row748719961810"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p96845291586"><a name="p96845291586"></a><a name="p96845291586"></a>c0002</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p10684729135810"><a name="p10684729135810"></a><a name="p10684729135810"></a>连接失败（connection_failure）</p>
</td>
</tr>
<tr id="row24873914181"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17684329165811"><a name="p17684329165811"></a><a name="p17684329165811"></a>类 c1 - 环境异常（Environment Exception）</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row64875991816"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1468462905810"><a name="p1468462905810"></a><a name="p1468462905810"></a>c1000</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1068411296586"><a name="p1068411296586"></a><a name="p1068411296586"></a>内存不足（out_of_memory）</p>
</td>
</tr>
<tr id="row1348816931816"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p87419425417"><a name="p87419425417"></a><a name="p87419425417"></a>类 c2 - 文件异常（File Exception）</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row1548818911185"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p166855299589"><a name="p166855299589"></a><a name="p166855299589"></a>c2000</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1168562955811"><a name="p1168562955811"></a><a name="p1168562955811"></a>打开文件失败（open_file_failure）</p>
</td>
</tr>
<tr id="row134881695184"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p668582916589"><a name="p668582916589"></a><a name="p668582916589"></a>c2001</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2685122945815"><a name="p2685122945815"></a><a name="p2685122945815"></a>文件读取失败（read_file_failure）</p>
</td>
</tr>
<tr id="row15488179191818"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p76852291582"><a name="p76852291582"></a><a name="p76852291582"></a>c2002</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6685142915589"><a name="p6685142915589"></a><a name="p6685142915589"></a>配置文件失败（config_file_failure）</p>
</td>
</tr>
<tr id="row74886912189"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p417655515915"><a name="p417655515915"></a><a name="p417655515915"></a>类 c3 - 参数异常（Parameter Exception）</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row174886971816"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9818323101020"><a name="p9818323101020"></a><a name="p9818323101020"></a>c3000</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1818152381016"><a name="p1818152381016"></a><a name="p1818152381016"></a>参数失败（parameter_failure）</p>
</td>
</tr>
<tr id="row748811917183"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p697020193111"><a name="p697020193111"></a><a name="p697020193111"></a>c3001</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p797031912113"><a name="p797031912113"></a><a name="p797031912113"></a>环境变量失败（environment_variable_failure）</p>
</td>
</tr>
<tr id="row134887919182"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p648113615127"><a name="p648113615127"></a><a name="p648113615127"></a>类 c4 - Etcd异常（Etcd Exception）</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row748829141813"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12985622111213"><a name="p12985622111213"></a><a name="p12985622111213"></a>c4000</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19851822121220"><a name="p19851822121220"></a><a name="p19851822121220"></a>etcd打开失败（etcd_open_failure）</p>
</td>
</tr>
<tr id="row1048889121815"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p32411930101211"><a name="p32411930101211"></a><a name="p32411930101211"></a>类 c5 - 内部异常（Internal Exception）</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row24896941819"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p205810405138"><a name="p205810405138"></a><a name="p205810405138"></a>c5000</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2058340171318"><a name="p2058340171318"></a><a name="p2058340171318"></a>内部错误（internal_error）</p>
</td>
</tr>
</tbody>
</table>

