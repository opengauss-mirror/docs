# GS\_OPT\_MODEL<a name="ZH-CN_TOPIC_0243595909"></a>

GS\_OPT\_MODEL是启用AiEngine执行计划时间预测功能时的数据表，记录机器学习模型的配置、训练结果、功能、对应系统函数、训练历史等相关信息。

**表 1**  GS\_OPT\_MODEL字段

<a name="table9676020164313"></a>
<table><thead align="left"><tr id="row767742084314"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p8890103511433"><a name="p8890103511433"></a><a name="p8890103511433"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p189018356431"><a name="p189018356431"></a><a name="p189018356431"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1289063510433"><a name="p1289063510433"></a><a name="p1289063510433"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row26776201432"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p186771020124311"><a name="p186771020124311"></a><a name="p186771020124311"></a>template_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5677220124319"><a name="p5677220124319"></a><a name="p5677220124319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p126781120204313"><a name="p126781120204313"></a><a name="p126781120204313"></a>机器学习模型的模板名，决定训练和预测调用的函数接口，目前只实现了rlstm，方便后续扩展。</p>
</td>
</tr>
<tr id="row267811202438"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8678120194318"><a name="p8678120194318"></a><a name="p8678120194318"></a>model_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p56781020144313"><a name="p56781020144313"></a><a name="p56781020144313"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16678220174314"><a name="p16678220174314"></a><a name="p16678220174314"></a>模型的实例名，每个模型对应aiEngine在线学习进程中的一套参数、训练日志、模型系数。此列需为unique。</p>
</td>
</tr>
<tr id="row11678320154316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p46782204431"><a name="p46782204431"></a><a name="p46782204431"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p467982017437"><a name="p467982017437"></a><a name="p467982017437"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p467962074318"><a name="p467962074318"></a><a name="p467962074318"></a>该模型所服务的database名，每个模型只针对单个database。此参数决定训练时所使用的数据。</p>
</td>
</tr>
<tr id="row967992013439"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1567982094317"><a name="p1567982094317"></a><a name="p1567982094317"></a>ip</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19679122018431"><a name="p19679122018431"></a><a name="p19679122018431"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p167992084319"><a name="p167992084319"></a><a name="p167992084319"></a>AiEngine端所部署的host ip地址。</p>
</td>
</tr>
<tr id="row867942044312"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3679192034314"><a name="p3679192034314"></a><a name="p3679192034314"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1067912014436"><a name="p1067912014436"></a><a name="p1067912014436"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1167962016438"><a name="p1167962016438"></a><a name="p1167962016438"></a>AiEngine端所监听的端口号。</p>
</td>
</tr>
<tr id="row86791320164318"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3679182014438"><a name="p3679182014438"></a><a name="p3679182014438"></a>max_epoch</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9679120144310"><a name="p9679120144310"></a><a name="p9679120144310"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p126802205436"><a name="p126802205436"></a><a name="p126802205436"></a>模型每次训练的迭代次数上限。</p>
</td>
</tr>
<tr id="row9680112094311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5680102054320"><a name="p5680102054320"></a><a name="p5680102054320"></a>learning_rate</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p426524184816"><a name="p426524184816"></a><a name="p426524184816"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p76802206432"><a name="p76802206432"></a><a name="p76802206432"></a>模型训练的学习速率，推荐缺省值1。</p>
</td>
</tr>
<tr id="row13627284451"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1736212289453"><a name="p1736212289453"></a><a name="p1736212289453"></a>dim_red</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p153636285453"><a name="p153636285453"></a><a name="p153636285453"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p236362854512"><a name="p236362854512"></a><a name="p236362854512"></a>模型特征维度降维系数。</p>
</td>
</tr>
<tr id="row139413113453"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p159433115456"><a name="p159433115456"></a><a name="p159433115456"></a>hidden_units</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p139423114518"><a name="p139423114518"></a><a name="p139423114518"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p594531154510"><a name="p594531154510"></a><a name="p594531154510"></a>模型隐藏层神经元个数。如果训练发现模型长期无法收敛，可以适量提升本参数。</p>
</td>
</tr>
<tr id="row78031633134516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19804153320453"><a name="p19804153320453"></a><a name="p19804153320453"></a>batch_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p118041833204511"><a name="p118041833204511"></a><a name="p118041833204511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p98041533174510"><a name="p98041533174510"></a><a name="p98041533174510"></a>模型每次迭代时一个batch的大小，尽量设为大于等于训练数据总量的值，加快模型的收敛速度。</p>
</td>
</tr>
<tr id="row10412113716451"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0412113715452"><a name="p0412113715452"></a><a name="p0412113715452"></a>feature_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p44124376452"><a name="p44124376452"></a><a name="p44124376452"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2990175914495"><a name="p2990175914495"></a><a name="p2990175914495"></a>[不需设置] 模型特征的长度，用于触发重新训练，模型训练后该参数自动更新。</p>
</td>
</tr>
<tr id="row1580184910459"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11581174914455"><a name="p11581174914455"></a><a name="p11581174914455"></a>available</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1258164912455"><a name="p1258164912455"></a><a name="p1258164912455"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p184132037124513"><a name="p184132037124513"></a><a name="p184132037124513"></a>[不需设置]标识模型是否收敛。</p>
</td>
</tr>
<tr id="row358274984511"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13582749144515"><a name="p13582749144515"></a><a name="p13582749144515"></a>Is_training</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18582949114515"><a name="p18582949114515"></a><a name="p18582949114515"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p958234917451"><a name="p958234917451"></a><a name="p958234917451"></a>[不需设置]标识模型是否正在训练。</p>
</td>
</tr>
<tr id="row058210491454"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1058284911458"><a name="p1058284911458"></a><a name="p1058284911458"></a>label</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p10582134974517"><a name="p10582134974517"></a><a name="p10582134974517"></a>"char"[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p117751241135215"><a name="p117751241135215"></a><a name="p117751241135215"></a>模型的目标任务：</p>
<a name="ul7527155113527"></a><a name="ul7527155113527"></a><ul id="ul7527155113527"><li>S: startup time</li><li>T: total time</li><li>R: rows</li><li>M: peak memory</li></ul>
<p id="p877684111526"><a name="p877684111526"></a><a name="p877684111526"></a>目前受模型性能限制，推荐{S, T}或{R}。</p>
</td>
</tr>
<tr id="row658214912457"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10583114944510"><a name="p10583114944510"></a><a name="p10583114944510"></a>max</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1958334911453"><a name="p1958334911453"></a><a name="p1958334911453"></a>bigint[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6583194913458"><a name="p6583194913458"></a><a name="p6583194913458"></a>[不需设置]标识模型各任务标签的最大值，用于触发重新训练。</p>
</td>
</tr>
<tr id="row9416165464518"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1441715543456"><a name="p1441715543456"></a><a name="p1441715543456"></a>acc</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11417554164513"><a name="p11417554164513"></a><a name="p11417554164513"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p44171554184519"><a name="p44171554184519"></a><a name="p44171554184519"></a>[不需设置]标识模型各任务的准确率。</p>
</td>
</tr>
<tr id="row1737015571459"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5370125734517"><a name="p5370125734517"></a><a name="p5370125734517"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1437015577454"><a name="p1437015577454"></a><a name="p1437015577454"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8370957144519"><a name="p8370957144519"></a><a name="p8370957144519"></a>模型注释。</p>
</td>
</tr>
</tbody>
</table>

