# GS\_OPT\_MODEL

GS\_OPT\_MODEL是启用AiEngine执行计划时间预测功能时的数据表，记录机器学习模型的配置、训练结果、功能、对应系统函数、训练历史等相关信息。

**表 1**  GS\_OPT\_MODEL字段

<a name="zh-cn_topic_0283136832_table9676020164313"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136832_row767742084314"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136832_p8890103511433"><a name="zh-cn_topic_0283136832_p8890103511433"></a><a name="zh-cn_topic_0283136832_p8890103511433"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136832_p189018356431"><a name="zh-cn_topic_0283136832_p189018356431"></a><a name="zh-cn_topic_0283136832_p189018356431"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136832_p1289063510433"><a name="zh-cn_topic_0283136832_p1289063510433"></a><a name="zh-cn_topic_0283136832_p1289063510433"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row10489165717518"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p17489205719513"><a name="p17489205719513"></a><a name="p17489205719513"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1489135725113"><a name="p1489135725113"></a><a name="p1489135725113"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8489195785117"><a name="p8489195785117"></a><a name="p8489195785117"></a>数据库对象id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row26776201432"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p186771020124311"><a name="zh-cn_topic_0283136832_p186771020124311"></a><a name="zh-cn_topic_0283136832_p186771020124311"></a>template_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p5677220124319"><a name="zh-cn_topic_0283136832_p5677220124319"></a><a name="zh-cn_topic_0283136832_p5677220124319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p126781120204313"><a name="zh-cn_topic_0283136832_p126781120204313"></a><a name="zh-cn_topic_0283136832_p126781120204313"></a>机器学习模型的模板名，决定训练和预测调用的函数接口，目前只实现了rlstm，方便后续扩展。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row267811202438"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p8678120194318"><a name="zh-cn_topic_0283136832_p8678120194318"></a><a name="zh-cn_topic_0283136832_p8678120194318"></a>model_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p56781020144313"><a name="zh-cn_topic_0283136832_p56781020144313"></a><a name="zh-cn_topic_0283136832_p56781020144313"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p16678220174314"><a name="zh-cn_topic_0283136832_p16678220174314"></a><a name="zh-cn_topic_0283136832_p16678220174314"></a>模型的实例名，每个模型对应aiEngine在线学习进程中的一套参数、训练日志、模型系数。此列需为unique。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row11678320154316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p46782204431"><a name="zh-cn_topic_0283136832_p46782204431"></a><a name="zh-cn_topic_0283136832_p46782204431"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p467982017437"><a name="zh-cn_topic_0283136832_p467982017437"></a><a name="zh-cn_topic_0283136832_p467982017437"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p467962074318"><a name="zh-cn_topic_0283136832_p467962074318"></a><a name="zh-cn_topic_0283136832_p467962074318"></a>该模型所服务的database名，每个模型只针对单个database。此参数决定训练时所使用的数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row967992013439"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p1567982094317"><a name="zh-cn_topic_0283136832_p1567982094317"></a><a name="zh-cn_topic_0283136832_p1567982094317"></a>ip</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p19679122018431"><a name="zh-cn_topic_0283136832_p19679122018431"></a><a name="zh-cn_topic_0283136832_p19679122018431"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p167992084319"><a name="zh-cn_topic_0283136832_p167992084319"></a><a name="zh-cn_topic_0283136832_p167992084319"></a>AiEngine端所部署的host ip地址。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row867942044312"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p3679192034314"><a name="zh-cn_topic_0283136832_p3679192034314"></a><a name="zh-cn_topic_0283136832_p3679192034314"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p1067912014436"><a name="zh-cn_topic_0283136832_p1067912014436"></a><a name="zh-cn_topic_0283136832_p1067912014436"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p1167962016438"><a name="zh-cn_topic_0283136832_p1167962016438"></a><a name="zh-cn_topic_0283136832_p1167962016438"></a>AiEngine端所侦听的端口号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row86791320164318"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p3679182014438"><a name="zh-cn_topic_0283136832_p3679182014438"></a><a name="zh-cn_topic_0283136832_p3679182014438"></a>max_epoch</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p9679120144310"><a name="zh-cn_topic_0283136832_p9679120144310"></a><a name="zh-cn_topic_0283136832_p9679120144310"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p126802205436"><a name="zh-cn_topic_0283136832_p126802205436"></a><a name="zh-cn_topic_0283136832_p126802205436"></a>模型每次训练的迭代次数上限。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row9680112094311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p5680102054320"><a name="zh-cn_topic_0283136832_p5680102054320"></a><a name="zh-cn_topic_0283136832_p5680102054320"></a>learning_rate</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p426524184816"><a name="zh-cn_topic_0283136832_p426524184816"></a><a name="zh-cn_topic_0283136832_p426524184816"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p76802206432"><a name="zh-cn_topic_0283136832_p76802206432"></a><a name="zh-cn_topic_0283136832_p76802206432"></a>模型训练的学习速率，推荐缺省值1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row13627284451"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p1736212289453"><a name="zh-cn_topic_0283136832_p1736212289453"></a><a name="zh-cn_topic_0283136832_p1736212289453"></a>dim_red</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p153636285453"><a name="zh-cn_topic_0283136832_p153636285453"></a><a name="zh-cn_topic_0283136832_p153636285453"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p236362854512"><a name="zh-cn_topic_0283136832_p236362854512"></a><a name="zh-cn_topic_0283136832_p236362854512"></a>模型特征维度降维系数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row139413113453"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p159433115456"><a name="zh-cn_topic_0283136832_p159433115456"></a><a name="zh-cn_topic_0283136832_p159433115456"></a>hidden_units</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p139423114518"><a name="zh-cn_topic_0283136832_p139423114518"></a><a name="zh-cn_topic_0283136832_p139423114518"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p594531154510"><a name="zh-cn_topic_0283136832_p594531154510"></a><a name="zh-cn_topic_0283136832_p594531154510"></a>模型隐藏层神经元个数。如果训练发现模型长期无法收敛，可以适量提升本参数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row78031633134516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p19804153320453"><a name="zh-cn_topic_0283136832_p19804153320453"></a><a name="zh-cn_topic_0283136832_p19804153320453"></a>batch_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p118041833204511"><a name="zh-cn_topic_0283136832_p118041833204511"></a><a name="zh-cn_topic_0283136832_p118041833204511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p98041533174510"><a name="zh-cn_topic_0283136832_p98041533174510"></a><a name="zh-cn_topic_0283136832_p98041533174510"></a>模型每次迭代时一个batch的大小，尽量设为大于等于训练数据总量的值，加快模型的收敛速度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row10412113716451"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p0412113715452"><a name="zh-cn_topic_0283136832_p0412113715452"></a><a name="zh-cn_topic_0283136832_p0412113715452"></a>feature_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p44124376452"><a name="zh-cn_topic_0283136832_p44124376452"></a><a name="zh-cn_topic_0283136832_p44124376452"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p2990175914495"><a name="zh-cn_topic_0283136832_p2990175914495"></a><a name="zh-cn_topic_0283136832_p2990175914495"></a>[不需设置] 模型特征的长度，用于触发重新训练，模型训练后该参数自动更新。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row1580184910459"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p11581174914455"><a name="zh-cn_topic_0283136832_p11581174914455"></a><a name="zh-cn_topic_0283136832_p11581174914455"></a>available</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p1258164912455"><a name="zh-cn_topic_0283136832_p1258164912455"></a><a name="zh-cn_topic_0283136832_p1258164912455"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p184132037124513"><a name="zh-cn_topic_0283136832_p184132037124513"></a><a name="zh-cn_topic_0283136832_p184132037124513"></a>[不需设置]标识模型是否收敛。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row358274984511"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p13582749144515"><a name="zh-cn_topic_0283136832_p13582749144515"></a><a name="zh-cn_topic_0283136832_p13582749144515"></a>Is_training</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p18582949114515"><a name="zh-cn_topic_0283136832_p18582949114515"></a><a name="zh-cn_topic_0283136832_p18582949114515"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p958234917451"><a name="zh-cn_topic_0283136832_p958234917451"></a><a name="zh-cn_topic_0283136832_p958234917451"></a>[不需设置]标识模型是否正在训练。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row058210491454"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p1058284911458"><a name="zh-cn_topic_0283136832_p1058284911458"></a><a name="zh-cn_topic_0283136832_p1058284911458"></a>label</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p10582134974517"><a name="zh-cn_topic_0283136832_p10582134974517"></a><a name="zh-cn_topic_0283136832_p10582134974517"></a>"char"[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p117751241135215"><a name="zh-cn_topic_0283136832_p117751241135215"></a><a name="zh-cn_topic_0283136832_p117751241135215"></a>模型的目标任务：</p>
<a name="zh-cn_topic_0283136832_ul7527155113527"></a><a name="zh-cn_topic_0283136832_ul7527155113527"></a><ul id="zh-cn_topic_0283136832_ul7527155113527"><li>S：startup time。</li><li>T：total time。</li><li>R：rows。</li><li>M：peak memory。</li></ul>
<p id="zh-cn_topic_0283136832_p877684111526"><a name="zh-cn_topic_0283136832_p877684111526"></a><a name="zh-cn_topic_0283136832_p877684111526"></a>目前受模型性能限制，推荐{S, T}或{R}。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row658214912457"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p10583114944510"><a name="zh-cn_topic_0283136832_p10583114944510"></a><a name="zh-cn_topic_0283136832_p10583114944510"></a>max</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p1958334911453"><a name="zh-cn_topic_0283136832_p1958334911453"></a><a name="zh-cn_topic_0283136832_p1958334911453"></a>bigint[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p6583194913458"><a name="zh-cn_topic_0283136832_p6583194913458"></a><a name="zh-cn_topic_0283136832_p6583194913458"></a>[不需设置]标识模型各任务标签的最大值，用于触发重新训练。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row9416165464518"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p1441715543456"><a name="zh-cn_topic_0283136832_p1441715543456"></a><a name="zh-cn_topic_0283136832_p1441715543456"></a>acc</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p11417554164513"><a name="zh-cn_topic_0283136832_p11417554164513"></a><a name="zh-cn_topic_0283136832_p11417554164513"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p44171554184519"><a name="zh-cn_topic_0283136832_p44171554184519"></a><a name="zh-cn_topic_0283136832_p44171554184519"></a>[不需设置]标识模型各任务的准确率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136832_row1737015571459"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136832_p5370125734517"><a name="zh-cn_topic_0283136832_p5370125734517"></a><a name="zh-cn_topic_0283136832_p5370125734517"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136832_p1437015577454"><a name="zh-cn_topic_0283136832_p1437015577454"></a><a name="zh-cn_topic_0283136832_p1437015577454"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136832_p8370957144519"><a name="zh-cn_topic_0283136832_p8370957144519"></a><a name="zh-cn_topic_0283136832_p8370957144519"></a>模型注释。</p>
</td>
</tr>
</tbody>
</table>
