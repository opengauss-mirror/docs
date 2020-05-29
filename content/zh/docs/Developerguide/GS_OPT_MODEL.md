# GS\_OPT\_MODEL<a name="ZH-CN_TOPIC_0243595909"></a>

GS\_OPT\_MODEL是启用AiEngine执行计划时间预测功能时的数据表，记录机器学习模型的配置、训练结果、功能、对应系统函数、训练历史等相关信息。

**表 1**  GS\_OPT\_MODEL字段

<a name="table175231552565"></a>
<table><thead align="left"><tr id="row85231552065"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.1.1"><p id="p652335213618"><a name="p652335213618"></a><a name="p652335213618"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.1.2"><p id="p952315216614"><a name="p952315216614"></a><a name="p952315216614"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.1.3"><p id="p195238521862"><a name="p195238521862"></a><a name="p195238521862"></a>描述</p>
</th>
</tr>
<tr id="row2513114474012"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.2.1"><p id="p1251394434017"><a name="p1251394434017"></a><a name="p1251394434017"></a>template_name</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.2.2"><p id="p1551318446409"><a name="p1551318446409"></a><a name="p1551318446409"></a>name</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.2.3"><p id="p19513944174020"><a name="p19513944174020"></a><a name="p19513944174020"></a>机器学习模型的模板名，决定训练和预测调用的函数接口，目前只实现了rlstm，方便后续扩展。</p>
</th>
</tr>
<tr id="row1224216784216"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.3.1"><p id="p72423724217"><a name="p72423724217"></a><a name="p72423724217"></a>model_name</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.3.2"><p id="p1624217714215"><a name="p1624217714215"></a><a name="p1624217714215"></a>name</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.3.3"><p id="p16242107114215"><a name="p16242107114215"></a><a name="p16242107114215"></a>模型的实例名，每个模型对应aiEngine在线学习进程中的一套参数、训练日志、模型系数。此列需为unique。</p>
</th>
</tr>
<tr id="row42501916164320"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.4.1"><p id="p1025119161439"><a name="p1025119161439"></a><a name="p1025119161439"></a>datname</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.4.2"><p id="p1251316144317"><a name="p1251316144317"></a><a name="p1251316144317"></a>name</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.4.3"><p id="p13251816184311"><a name="p13251816184311"></a><a name="p13251816184311"></a>该模型所服务的database名，每个模型只针对单个database。此参数决定训练时所使用的数据。</p>
</th>
</tr>
<tr id="row105511349164316"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.5.1"><p id="p10552749124314"><a name="p10552749124314"></a><a name="p10552749124314"></a>ip</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.5.2"><p id="p1855264904318"><a name="p1855264904318"></a><a name="p1855264904318"></a>name</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.5.3"><p id="p12552134964315"><a name="p12552134964315"></a><a name="p12552134964315"></a>AiEngine端所部署的host ip地址。</p>
</th>
</tr>
<tr id="row77899108463"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.6.1"><p id="p878901011463"><a name="p878901011463"></a><a name="p878901011463"></a>port</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.6.2"><p id="p17789610194617"><a name="p17789610194617"></a><a name="p17789610194617"></a>integer</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.6.3"><p id="p127891310174619"><a name="p127891310174619"></a><a name="p127891310174619"></a>AiEngine端所监听的端口号。</p>
</th>
</tr>
<tr id="row6574856114619"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.7.1"><p id="p1793194611476"><a name="p1793194611476"></a><a name="p1793194611476"></a>max_epoch</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.7.2"><p id="p593446114719"><a name="p593446114719"></a><a name="p593446114719"></a>integer</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.7.3"><p id="p1793446144712"><a name="p1793446144712"></a><a name="p1793446144712"></a>模型每次训练的迭代次数上限。</p>
</th>
</tr>
<tr id="row39412241479"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.8.1"><p id="p093154613471"><a name="p093154613471"></a><a name="p093154613471"></a>learning_rate</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.8.2"><p id="p39314464479"><a name="p39314464479"></a><a name="p39314464479"></a>real</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.8.3"><p id="p2093184614718"><a name="p2093184614718"></a><a name="p2093184614718"></a>模型训练的学习速率，推荐缺省值1。</p>
</th>
</tr>
<tr id="row1758527194715"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.9.1"><p id="p393174614711"><a name="p393174614711"></a><a name="p393174614711"></a>dim_red</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.9.2"><p id="p179344674719"><a name="p179344674719"></a><a name="p179344674719"></a>real</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.9.3"><p id="p1937467474"><a name="p1937467474"></a><a name="p1937467474"></a>模型特征维度降维系数。</p>
</th>
</tr>
<tr id="row1322422944718"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.10.1"><p id="p294046114720"><a name="p294046114720"></a><a name="p294046114720"></a>hidden_units</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.10.2"><p id="p4948468474"><a name="p4948468474"></a><a name="p4948468474"></a>integer</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.10.3"><p id="p194746124719"><a name="p194746124719"></a><a name="p194746124719"></a>模型隐藏层神经元个数。如果训练发现模型长期无法收敛，可以适量提升本参数。</p>
</th>
</tr>
<tr id="row22133115473"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.11.1"><p id="p189464616478"><a name="p189464616478"></a><a name="p189464616478"></a>batch_size</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.11.2"><p id="p159494684711"><a name="p159494684711"></a><a name="p159494684711"></a>integer</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.11.3"><p id="p139464610474"><a name="p139464610474"></a><a name="p139464610474"></a>模型每次迭代时一个batch的大小，尽量设为大于等于训练数据总量的值，加快模型的收敛速度。</p>
</th>
</tr>
<tr id="row6879205654716"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.12.1"><p id="p08921941164819"><a name="p08921941164819"></a><a name="p08921941164819"></a>feature_size</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.12.2"><p id="p138929413488"><a name="p138929413488"></a><a name="p138929413488"></a>integer</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.12.3"><p id="p2892144184817"><a name="p2892144184817"></a><a name="p2892144184817"></a>[不需设置] 模型特征的长度，用于触发重新训练，模型训练后该参数自动更新。</p>
</th>
</tr>
<tr id="row1744422894819"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.13.1"><p id="p989214113487"><a name="p989214113487"></a><a name="p989214113487"></a>available</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.13.2"><p id="p08921241134819"><a name="p08921241134819"></a><a name="p08921241134819"></a>boolean</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.13.3"><p id="p20892114134810"><a name="p20892114134810"></a><a name="p20892114134810"></a>[不需设置]标识模型是否收敛。</p>
</th>
</tr>
<tr id="row1723863019488"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.14.1"><p id="p98921410484"><a name="p98921410484"></a><a name="p98921410484"></a>Is_training</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.14.2"><p id="p2893841104820"><a name="p2893841104820"></a><a name="p2893841104820"></a>boolean</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.14.3"><p id="p1289314194819"><a name="p1289314194819"></a><a name="p1289314194819"></a>[不需设置]标识模型是否正在训练。</p>
</th>
</tr>
<tr id="row10751631174812"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.15.1"><p id="p13893941204811"><a name="p13893941204811"></a><a name="p13893941204811"></a>label</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.15.2"><p id="p1389344144811"><a name="p1389344144811"></a><a name="p1389344144811"></a>"char"[]</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.15.3"><p id="p1289394174815"><a name="p1289394174815"></a><a name="p1289394174815"></a>模型的目标任务：</p>
<p id="p1389324114484"><a name="p1389324114484"></a><a name="p1389324114484"></a>S: startup time</p>
<p id="p1289384112483"><a name="p1289384112483"></a><a name="p1289384112483"></a>T: total time</p>
<p id="p38937417486"><a name="p38937417486"></a><a name="p38937417486"></a>R: rows</p>
<p id="p38931413487"><a name="p38931413487"></a><a name="p38931413487"></a>M: peak memory</p>
<p id="p0893174115487"><a name="p0893174115487"></a><a name="p0893174115487"></a>目前受模型性能限制，推荐{S, T}或{R}。</p>
</th>
</tr>
<tr id="row7742753494"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.16.1"><p id="p153591212204912"><a name="p153591212204912"></a><a name="p153591212204912"></a>max</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.16.2"><p id="p4359312154916"><a name="p4359312154916"></a><a name="p4359312154916"></a>bigint[]</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.16.3"><p id="p1235991215495"><a name="p1235991215495"></a><a name="p1235991215495"></a>[不需设置]标识模型各任务标签的最大值，用于触发重新训练。</p>
</th>
</tr>
<tr id="row1875712719499"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.17.1"><p id="p15359101224912"><a name="p15359101224912"></a><a name="p15359101224912"></a>acc</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.17.2"><p id="p73602012114915"><a name="p73602012114915"></a><a name="p73602012114915"></a>real[]</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.17.3"><p id="p10360121274910"><a name="p10360121274910"></a><a name="p10360121274910"></a>[不需设置]标识模型个任务的准确率。</p>
</th>
</tr>
<tr id="row16792161044911"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.18.1"><p id="p436018120498"><a name="p436018120498"></a><a name="p436018120498"></a>description</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.18.2"><p id="p163600128495"><a name="p163600128495"></a><a name="p163600128495"></a>text</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.18.3"><p id="p636051216491"><a name="p636051216491"></a><a name="p636051216491"></a>模型注释。</p>
</th>
</tr>
</thead>
<tbody></tbody>
</table>

