# MOT隔离级别<a name="ZH-CN_TOPIC_0280525158"></a>

即使MOT完全兼容ACID，openGauss 1.0并非支持所有的隔离级别。下表介绍了各隔离级别，以及MOT支持和不支持的内容。

**表 1**  隔离级别

<a name="table9960143"></a>
<table><thead align="left"><tr id="row28427054"><th class="cellrowborder" valign="top" width="24.242424242424242%" id="mcps1.2.3.1.1"><p id="p20890046"><a name="p20890046"></a><a name="p20890046"></a>隔离级别</p>
</th>
<th class="cellrowborder" valign="top" width="75.75757575757575%" id="mcps1.2.3.1.2"><p id="p14372146"><a name="p14372146"></a><a name="p14372146"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row23293171"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="p7698664"><a name="p7698664"></a><a name="p7698664"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="p19612025"><a name="p19612025"></a><a name="p19612025"></a><strong id="b42290504"><a name="b42290504"></a><a name="b42290504"></a>MOT不支持</strong></p>
</td>
</tr>
<tr id="row2978832"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="p39958824"><a name="p39958824"></a><a name="p39958824"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="p15439288"><a name="p15439288"></a><a name="p15439288"></a><strong id="b4735869"><a name="b4735869"></a><a name="b4735869"></a>MOT支持</strong></p>
<p id="p48061109"><a name="p48061109"></a><a name="p48061109"></a>READ COMMITTED（读已提交）隔离级别保证任何正在读取的数据在上一次读取时都已提交。它只是限制读者看到任何中间数据、未提交数据或脏读。数据被读取后可以自由更改，因此，读已提交隔离级别并不保证事务再次读取时能找到相同的数据。</p>
</td>
</tr>
<tr id="row29896802"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="p5721932"><a name="p5721932"></a><a name="p5721932"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="p60823375"><a name="p60823375"></a><a name="p60823375"></a><strong id="b10539465"><a name="b10539465"></a><a name="b10539465"></a>MOT不支持</strong></p>
<p id="p48390307"><a name="p48390307"></a><a name="p48390307"></a>SNAPSHOT（快照）隔离级别提供与SERIALIZABLE（可序列化）相同的保证，同时支持并发事务修改数据。相反，它迫使每个读者看到自己的世界版本（自己的快照）。不阻止并发更新使得编程非常容易，且可扩展性很强。然而，在许多实现中，这种隔离级别需要更高的服务器资源。</p>
</td>
</tr>
<tr id="row32859581"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="p44380409"><a name="p44380409"></a><a name="p44380409"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="p38043373"><a name="p38043373"></a><a name="p38043373"></a><strong id="b6846044"><a name="b6846044"></a><a name="b6846044"></a>MOT支持</strong></p>
<p id="p17658712"><a name="p17658712"></a><a name="p17658712"></a>REPEATABLE READ（可重复读）是一个更高的隔离级别，除了READ COMMITTED隔离级别的保证之外，它还保证任何读取的数据都不能更改。如果一个事务再次读取相同的数据，它将找出该数据，不做更改，并且保证它可读取。</p>
<p id="p24710688"><a name="p24710688"></a><a name="p24710688"></a>乐观模型使得并发事务能更新该事务读取的行。在提交时，该事务将验证REPEATABLE READ隔离级别是否被违反。若违反，则回滚该事务，必须重试。</p>
</td>
</tr>
<tr id="row21069601"><td class="cellrowborder" valign="top" width="24.242424242424242%" headers="mcps1.2.3.1.1 "><p id="p28916126"><a name="p28916126"></a><a name="p28916126"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.75757575757575%" headers="mcps1.2.3.1.2 "><p id="p60504888"><a name="p60504888"></a><a name="p60504888"></a><strong id="b7673083"><a name="b7673083"></a><a name="b7673083"></a>MOT不支持</strong></p>
<p id="p17539978"><a name="p17539978"></a><a name="p17539978"></a>SERIALIZABLE（可序列化）隔离提供了更强的保证。除了REPEATABLE READ隔离级别保证的所有内容外，它还保证后续读取不会看到新数据。</p>
<p id="p23642081"><a name="p23642081"></a><a name="p23642081"></a>它之所以被命名为SERIALIZABLE，是因为隔离非常严格，几乎有点像事务串行运行，而不是并行运行。</p>
</td>
</tr>
</tbody>
</table>

下表显示了不同隔离级别启用的并发副作用。

**表 2**  隔离级别启用的并发副作用

<a name="table1465227"></a>
<table><thead align="left"><tr id="row30089192"><th class="cellrowborder" valign="top" width="32.6530612244898%" id="mcps1.2.5.1.1"><p id="p21305513"><a name="p21305513"></a><a name="p21305513"></a>隔离级别</p>
</th>
<th class="cellrowborder" valign="top" width="18.367346938775512%" id="mcps1.2.5.1.2"><p id="p48025031"><a name="p48025031"></a><a name="p48025031"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="32.6530612244898%" id="mcps1.2.5.1.3"><p id="p64822313"><a name="p64822313"></a><a name="p64822313"></a>不可重复读</p>
</th>
<th class="cellrowborder" valign="top" width="16.3265306122449%" id="mcps1.2.5.1.4"><p id="p16116024"><a name="p16116024"></a><a name="p16116024"></a>幻影</p>
</th>
</tr>
</thead>
<tbody><tr id="row30329563"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="p40775547"><a name="p40775547"></a><a name="p40775547"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="p14484991"><a name="p14484991"></a><a name="p14484991"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="p32433616"><a name="p32433616"></a><a name="p32433616"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="p9877205"><a name="p9877205"></a><a name="p9877205"></a>是</p>
</td>
</tr>
<tr id="row21785982"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="p19834157"><a name="p19834157"></a><a name="p19834157"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="p63062917"><a name="p63062917"></a><a name="p63062917"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="p7822637"><a name="p7822637"></a><a name="p7822637"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="p29653837"><a name="p29653837"></a><a name="p29653837"></a>是</p>
</td>
</tr>
<tr id="row65557946"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="p8593410"><a name="p8593410"></a><a name="p8593410"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="p24977623"><a name="p24977623"></a><a name="p24977623"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="p9921568"><a name="p9921568"></a><a name="p9921568"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="p65449542"><a name="p65449542"></a><a name="p65449542"></a>是</p>
</td>
</tr>
<tr id="row52174967"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="p65422770"><a name="p65422770"></a><a name="p65422770"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="p64753022"><a name="p64753022"></a><a name="p64753022"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="p10503426"><a name="p10503426"></a><a name="p10503426"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="p45471207"><a name="p45471207"></a><a name="p45471207"></a>否</p>
</td>
</tr>
<tr id="row6587685"><td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.1 "><p id="p63840510"><a name="p63840510"></a><a name="p63840510"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.367346938775512%" headers="mcps1.2.5.1.2 "><p id="p3698827"><a name="p3698827"></a><a name="p3698827"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="32.6530612244898%" headers="mcps1.2.5.1.3 "><p id="p31169589"><a name="p31169589"></a><a name="p31169589"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="16.3265306122449%" headers="mcps1.2.5.1.4 "><p id="p41708771"><a name="p41708771"></a><a name="p41708771"></a>否</p>
</td>
</tr>
</tbody>
</table>

在不久后将发布的版本中，openGauss MOT还将支持SNAPSHOT和SERIALIZABLE隔离级别。
