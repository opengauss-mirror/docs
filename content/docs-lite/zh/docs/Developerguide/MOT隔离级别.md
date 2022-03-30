# MOT隔离级别<a name="ZH-CN_TOPIC_0289900771"></a>

即使MOT完全兼容ACID，openGauss 1.0并非支持所有的隔离级别。下表介绍了各隔离级别，以及MOT支持和不支持的内容。

**表 1**  隔离级别

<a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_table9960143"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row28427054"><th class="cellrowborder" valign="top" width="24.242424242424242%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p20890046"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p20890046"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p20890046"></a>隔离级别</p>
</th>
<th class="cellrowborder" valign="top" width="75.75757575757575%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p14372146"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p14372146"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p14372146"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row23293171"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p7698664"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p7698664"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p7698664"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p19612025"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p19612025"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p19612025"></a><strong id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b42290504"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b42290504"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b42290504"></a>MOT不支持</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row2978832"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p39958824"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p39958824"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p39958824"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p15439288"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p15439288"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p15439288"></a><strong id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b4735869"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b4735869"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b4735869"></a>MOT支持</strong></p>
<p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48061109"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48061109"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48061109"></a>READ COMMITTED（读已提交）隔离级别保证任何正在读取的数据在上一次读取时都已提交。它只是限制读者看到任何中间数据、未提交数据，或脏读。数据被读取后可以自由更改，因此，读已提交隔离级别并不保证事务再次读取时能找到相同的数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row29896802"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p5721932"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p5721932"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p5721932"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p60823375"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p60823375"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p60823375"></a><strong id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b10539465"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b10539465"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b10539465"></a>MOT不支持</strong></p>
<p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48390307"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48390307"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48390307"></a>SNAPSHOT（快照）隔离级别提供与SERIALIZABLE（可序列化）相同的保证，同时支持并发事务修改数据。相反，它迫使每个读者看到自己的世界版本（自己的快照）。不阻止并发更新使得编程非常容易，且可扩展性很强。然而，在许多实现中，这种隔离级别需要更高的服务器资源。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row32859581"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p44380409"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p44380409"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p44380409"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p38043373"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p38043373"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p38043373"></a><strong id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b6846044"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b6846044"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b6846044"></a>MOT支持</strong></p>
<p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p17658712"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p17658712"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p17658712"></a>REPEATABLE READ（可重复读）是一个更高的隔离级别，除了READ COMMITTED隔离级别的保证之外，它还保证任何读取的数据都不能更改。如果一个事务再次读取相同的数据，它将找出该数据，不做更改，并且保证它可读取。</p>
<p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p24710688"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p24710688"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p24710688"></a>乐观模型使得并发事务能更新该事务读取的行。在提交时，该事务将验证REPEATABLE READ隔离级别是否被违反。若违反，则回滚该事务，必须重试。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row21069601"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p28916126"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p28916126"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p28916126"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p60504888"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p60504888"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p60504888"></a><strong id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b7673083"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b7673083"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_b7673083"></a>MOT不支持</strong></p>
<p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p17539978"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p17539978"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p17539978"></a>SERIALIZABLE（可序列化）隔离提供了更强的保证。除了REPEATABLE READ隔离级别保证的所有内容外，它还保证后续读取不会看到新数据。</p>
<p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p23642081"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p23642081"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p23642081"></a>它之所以被命名为SERIALIZABLE，是因为隔离非常严格，几乎有点像事务串行运行，而不是并行运行。</p>
</td>
</tr>
</tbody>
</table>

下表显示了不同隔离级别启用的并发副作用。

**表 2**  隔离级别启用的并发副作用

<a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_table1465227"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row30089192"><th class="cellrowborder" valign="top" width="32.6530612244898%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p21305513"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p21305513"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p21305513"></a>隔离级别</p>
</th>
<th class="cellrowborder" valign="top" width="18.367346938775512%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48025031"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48025031"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p48025031"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="32.6530612244898%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p64822313"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p64822313"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p64822313"></a>不可重复读</p>
</th>
<th class="cellrowborder" valign="top" width="16.3265306122449%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p16116024"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p16116024"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p16116024"></a>幻影</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row30329563"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p40775547"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p40775547"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p40775547"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p14484991"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p14484991"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p14484991"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p32433616"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p32433616"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p32433616"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p9877205"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p9877205"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p9877205"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row21785982"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p19834157"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p19834157"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p19834157"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p63062917"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p63062917"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p63062917"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p7822637"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p7822637"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p7822637"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p29653837"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p29653837"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p29653837"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row65557946"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p8593410"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p8593410"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p8593410"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p24977623"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p24977623"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p24977623"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p9921568"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p9921568"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p9921568"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p65449542"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p65449542"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p65449542"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row52174967"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p65422770"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p65422770"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p65422770"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p64753022"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p64753022"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p64753022"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p10503426"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p10503426"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p10503426"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p45471207"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p45471207"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p45471207"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_row6587685"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p63840510"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p63840510"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p63840510"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p3698827"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p3698827"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p3698827"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p31169589"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p31169589"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p31169589"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p41708771"><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p41708771"></a><a name="zh-cn_topic_0283137490_zh-cn_topic_0280525158_p41708771"></a>否</p>
</td>
</tr>
</tbody>
</table>

在不久后将发布的版本中，openGauss MOT还将支持SNAPSHOT和SERIALIZABLE隔离级别。

