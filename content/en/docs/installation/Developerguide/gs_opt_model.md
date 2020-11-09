# GS\_OPT\_MODEL<a name="EN-US_TOPIC_0243595909"></a>

**GS\_OPT\_MODEL**  is a data table used when the AI engine is enabled to predict the planned time. It records the configurations, training results, features, corresponding system functions, and training history of machine learning models.

**Table  1**  GS\_OPT\_MODEL columns

<a name="table9676020164313"></a>
<table><thead align="left"><tr id="row767742084314"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p8890103511433"><a name="p8890103511433"></a><a name="p8890103511433"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p189018356431"><a name="p189018356431"></a><a name="p189018356431"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1289063510433"><a name="p1289063510433"></a><a name="p1289063510433"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row26776201432"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p186771020124311"><a name="p186771020124311"></a><a name="p186771020124311"></a>template_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5677220124319"><a name="p5677220124319"></a><a name="p5677220124319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p126781120204313"><a name="p126781120204313"></a><a name="p126781120204313"></a>Template name of the machine learning model, which determines the interfaces invoked for training and prediction. Currently, only rlstm is implemented.</p>
</td>
</tr>
<tr id="row267811202438"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8678120194318"><a name="p8678120194318"></a><a name="p8678120194318"></a>model_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p56781020144313"><a name="p56781020144313"></a><a name="p56781020144313"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16678220174314"><a name="p16678220174314"></a><a name="p16678220174314"></a>Model name. Each model corresponds to a set of parameters, training logs, and model coefficients in the AI engine online learning process. The name must be unique.</p>
</td>
</tr>
<tr id="row11678320154316"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p46782204431"><a name="p46782204431"></a><a name="p46782204431"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p467982017437"><a name="p467982017437"></a><a name="p467982017437"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p467962074318"><a name="p467962074318"></a><a name="p467962074318"></a>Name of the database served by the model. Each model is specific to a single database. This parameter determines data used for training.</p>
</td>
</tr>
<tr id="row967992013439"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1567982094317"><a name="p1567982094317"></a><a name="p1567982094317"></a>ip</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19679122018431"><a name="p19679122018431"></a><a name="p19679122018431"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p167992084319"><a name="p167992084319"></a><a name="p167992084319"></a>IP address of the host where the AI engine is deployed</p>
</td>
</tr>
<tr id="row867942044312"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3679192034314"><a name="p3679192034314"></a><a name="p3679192034314"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1067912014436"><a name="p1067912014436"></a><a name="p1067912014436"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1167962016438"><a name="p1167962016438"></a><a name="p1167962016438"></a>Listening port number of the AI engine</p>
</td>
</tr>
<tr id="row86791320164318"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3679182014438"><a name="p3679182014438"></a><a name="p3679182014438"></a>max_epoch</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9679120144310"><a name="p9679120144310"></a><a name="p9679120144310"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p126802205436"><a name="p126802205436"></a><a name="p126802205436"></a>Maximum number of iterations in an epoch</p>
</td>
</tr>
<tr id="row9680112094311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5680102054320"><a name="p5680102054320"></a><a name="p5680102054320"></a>learning_rate</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p426524184816"><a name="p426524184816"></a><a name="p426524184816"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p76802206432"><a name="p76802206432"></a><a name="p76802206432"></a>Learning rate of model training. The default value <strong id="b195712014172710"><a name="b195712014172710"></a><a name="b195712014172710"></a>1</strong> is recommended.</p>
</td>
</tr>
<tr id="row13627284451"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1736212289453"><a name="p1736212289453"></a><a name="p1736212289453"></a>dim_red</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p153636285453"><a name="p153636285453"></a><a name="p153636285453"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p236362854512"><a name="p236362854512"></a><a name="p236362854512"></a>Number of model feature dimensions whose retention is reduced</p>
</td>
</tr>
<tr id="row139413113453"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p159433115456"><a name="p159433115456"></a><a name="p159433115456"></a>hidden_units</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p139423114518"><a name="p139423114518"></a><a name="p139423114518"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p594531154510"><a name="p594531154510"></a><a name="p594531154510"></a>Number of neurons in the model's hidden layer. If the model cannot be converged for a long time, increase the value of this parameter.</p>
</td>
</tr>
<tr id="row78031633134516"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19804153320453"><a name="p19804153320453"></a><a name="p19804153320453"></a>batch_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p118041833204511"><a name="p118041833204511"></a><a name="p118041833204511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p98041533174510"><a name="p98041533174510"></a><a name="p98041533174510"></a>Size of a batch in each iteration. It is recommended that the size be greater than or equal to the total training data volume to accelerate model convergence.</p>
</td>
</tr>
<tr id="row10412113716451"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0412113715452"><a name="p0412113715452"></a><a name="p0412113715452"></a>feature_size</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p44124376452"><a name="p44124376452"></a><a name="p44124376452"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2990175914495"><a name="p2990175914495"></a><a name="p2990175914495"></a>Length of the model feature, which is used to trigger retraining. This parameter is automatically updated after model training and does not need to be specified.</p>
</td>
</tr>
<tr id="row1580184910459"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11581174914455"><a name="p11581174914455"></a><a name="p11581174914455"></a>available</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1258164912455"><a name="p1258164912455"></a><a name="p1258164912455"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p184132037124513"><a name="p184132037124513"></a><a name="p184132037124513"></a>Whether the model is converged. This parameter does not need to be specified.</p>
</td>
</tr>
<tr id="row358274984511"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13582749144515"><a name="p13582749144515"></a><a name="p13582749144515"></a>Is_training</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18582949114515"><a name="p18582949114515"></a><a name="p18582949114515"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p958234917451"><a name="p958234917451"></a><a name="p958234917451"></a>Whether the model is being trained. This parameter does not need to be specified.</p>
</td>
</tr>
<tr id="row058210491454"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1058284911458"><a name="p1058284911458"></a><a name="p1058284911458"></a>label</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p10582134974517"><a name="p10582134974517"></a><a name="p10582134974517"></a>"char"[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p117751241135215"><a name="p117751241135215"></a><a name="p117751241135215"></a>Target task of the model.</p>
<a name="ul7527155113527"></a><a name="ul7527155113527"></a><ul id="ul7527155113527"><li>S: startup time</li><li>T: total time</li><li>R: rows</li><li>M: peak memory</li></ul>
<p id="p877684111526"><a name="p877684111526"></a><a name="p877684111526"></a>Currently, {S, T} or {R} is recommended due to model performance restrictions.</p>
</td>
</tr>
<tr id="row658214912457"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10583114944510"><a name="p10583114944510"></a><a name="p10583114944510"></a>max</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1958334911453"><a name="p1958334911453"></a><a name="p1958334911453"></a>bigint[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6583194913458"><a name="p6583194913458"></a><a name="p6583194913458"></a>Maximum value of each task label of the model, which is used to trigger retraining. This parameter does not need to be specified.</p>
</td>
</tr>
<tr id="row9416165464518"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1441715543456"><a name="p1441715543456"></a><a name="p1441715543456"></a>acc</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11417554164513"><a name="p11417554164513"></a><a name="p11417554164513"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p44171554184519"><a name="p44171554184519"></a><a name="p44171554184519"></a>Accuracy of each model task. This parameter does not need to be specified.</p>
</td>
</tr>
<tr id="row1737015571459"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5370125734517"><a name="p5370125734517"></a><a name="p5370125734517"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1437015577454"><a name="p1437015577454"></a><a name="p1437015577454"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8370957144519"><a name="p8370957144519"></a><a name="p8370957144519"></a>Model comment</p>
</td>
</tr>
</tbody>
</table>

