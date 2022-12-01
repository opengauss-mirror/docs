# DB4AI-Query：模型训练和推断<a name="ZH-CN_TOPIC_0000001162739736"></a>

openGauss当前版本支持了原生DB4AI能力，通过引入原生AI算子，简化操作流程，充分利用数据库优化器、执行器的优化与执行能力，获得高性能的数据库内模型训练能力。更简化的模型训练与预测流程、更高的性能表现，让开发者在更短时间内能更专注于模型的调优与数据分析上，而避免了碎片化的技术栈与冗余的代码实现。

## 关键字解析<a name="section62561652916"></a>

**表 1**  DB4AI语法及关键字

<a name="table195141653553"></a>
<table><thead align="left"><tr id="row16514153257"><th class="cellrowborder" valign="top" width="17.611761176117614%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="39.62396239623963%" id="mcps1.2.4.1.2"><p id="p75155531157"><a name="p75155531157"></a><a name="p75155531157"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="42.76427642764276%" id="mcps1.2.4.1.3"><p id="p5515175310512"><a name="p5515175310512"></a><a name="p5515175310512"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1515195316512"><td class="cellrowborder" rowspan="2" valign="top" width="17.611761176117614%" headers="mcps1.2.4.1.1 "><p id="p19504150872"><a name="p19504150872"></a><a name="p19504150872"></a>语句</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p115159531754"><a name="p115159531754"></a><a name="p115159531754"></a>CREATE MODEL</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.4.1.3 "><p id="p145158539515"><a name="p145158539515"></a><a name="p145158539515"></a>创建模型并进行训练，同时保存模型。</p>
</td>
</tr>
<tr id="row25156530514"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p151514531158"><a name="p151514531158"></a><a name="p151514531158"></a>PREDICT BY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p14515653550"><a name="p14515653550"></a><a name="p14515653550"></a>利用已有模型进行推断。</p>
</td>
</tr>
<tr id="row135154531653"><td class="cellrowborder" rowspan="3" valign="top" width="17.611761176117614%" headers="mcps1.2.4.1.1 "><p id="p3365997714"><a name="p3365997714"></a><a name="p3365997714"></a>关键字</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p1351515318511"><a name="p1351515318511"></a><a name="p1351515318511"></a>TARGET</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.4.1.3 "><p id="p251565313519"><a name="p251565313519"></a><a name="p251565313519"></a>训练/推断任务的目标列名。</p>
</td>
</tr>
<tr id="row15154534510"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1151513531457"><a name="p1151513531457"></a><a name="p1151513531457"></a>FEATURES</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1151511536520"><a name="p1151511536520"></a><a name="p1151511536520"></a>训练/推断任务的数据特征列名。</p>
</td>
</tr>
<tr id="row125158536519"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p751513533518"><a name="p751513533518"></a><a name="p751513533518"></a>MODEL</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p651535310516"><a name="p651535310516"></a><a name="p651535310516"></a>训练任务的模型名称。</p>
</td>
</tr>
</tbody>
</table>

## 使用指导<a name="section061917401992"></a>

1.  本版本支持的算法概述。

    当前版本的DB4AI支持基于SGD算子的逻辑回归（目前支持二分类任务）、线性回归和支持向量机算法（分类任务），以及基于K-Means算子的Kmeans聚类算法。

2.  模型训练语法说明。
    -   CREATE MODEL

        使用“CREATE MODEL”语句可以进行模型的创建和训练。模型训练SQL语句，现有一个数据集为kmeans\_2d，该表的数据内容如下：

        ```
        openGauss=# select * from kmeans_2d;
         id |              position
        ----+-------------------------------------
          1 | {74.5268815685995,88.2141939294524}
          2 | {70.9565760521218,98.8114827475511}
          3 | {76.2756086327136,23.8387574302033}
          4 | {17.8495847294107,81.8449544720352}
          5 | {81.2175785354339,57.1677675866522}
          6 | {53.97752255667,49.3158342130482}
          7 | {93.2475341879763,86.934042100329}
          8 | {72.7659293473698,19.7020415100269}
          9 | {16.5800288529135,75.7475957670249}
         10 | {81.8520747194998,40.3476078575477}
         11 | {76.796671198681,86.3827232690528}
         12 | {59.9231450678781,90.9907738864422}
         13 | {70.161884885747,19.7427458665334}
         14 | {11.1269539105706,70.9988166182302}
         15 | {80.5005071521737,65.2822235273197}
         16 | {54.7030725912191,52.151339428965}
         17 | {103.059707058128,80.8419883321039}
         18 | {85.3574452036992,14.9910179991275}
         19 | {28.6501615960151,76.6922890325077}
         20 | {69.7285806713626,49.5416352967732}
        (20 rows)
        ```

        该表的字段position的数据类型为 double precision\[\].

    -   以Kmeans为例，训练一个模型。从kmeans\_2d训练集中指定position为特征列，使用kmeans算法，创建并保存模型point\_kmeans。

        ```
        openGauss=# CREATE MODEL point_kmeans USING kmeans FEATURES position FROM kmeans_2d WITH num_centroids=3;
        NOTICE:  Hyperparameter max_iterations takes value DEFAULT (10)
        NOTICE:  Hyperparameter num_centroids takes value 3
        NOTICE:  Hyperparameter tolerance takes value DEFAULT (0.000010)
        NOTICE:  Hyperparameter batch_size takes value DEFAULT (10)
        NOTICE:  Hyperparameter num_features takes value DEFAULT (2)
        NOTICE:  Hyperparameter distance_function takes value DEFAULT (L2_Squared)
        NOTICE:  Hyperparameter seeding_function takes value DEFAULT (Random++)
        NOTICE:  Hyperparameter verbose takes value DEFAULT (0)
        NOTICE:  Hyperparameter seed takes value DEFAULT (0)
        MODEL CREATED. PROCESSED 1
        ```

        上述命令中：

        -   “CREATE MODEL”语句用于模型的训练和保存。
        -   USING关键字指定算法名称。
        -   FEATURES用于指定训练模模型的特征，需根据训练数据表的列名添加。
        -   TARGET指定模型的训练目标，它可以是训练所需数据表的列名，也可以是一个表达式，例如: price \> 10000。
        -   WITH用于指定训练模型时的超参数。当超参未被用户进行设置的时候，框架会使用默认数值。

            针对不同的算子，框架支持不同的超参组合：

            **表 2**  算子支持的超参

            <a name="table15985527185615"></a>
            <table><thead align="left"><tr id="row4985102718565"><th class="cellrowborder" valign="top" width="35.49%" id="mcps1.2.3.1.1"><p id="p7986172713567"><a name="p7986172713567"></a><a name="p7986172713567"></a>算子</p>
            </th>
            <th class="cellrowborder" valign="top" width="64.51%" id="mcps1.2.3.1.2"><p id="p159861727125619"><a name="p159861727125619"></a><a name="p159861727125619"></a>超参</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row1798682755614"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p226171165710"><a name="p226171165710"></a><a name="p226171165710"></a>GD</p>
            <p id="p1798662711568"><a name="p1798662711568"></a><a name="p1798662711568"></a>(logistic_regression、linear_regression、svm_classification)</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p167491058185616"><a name="p167491058185616"></a><a name="p167491058185616"></a>optimizer(char*); verbose(bool); max_iterations(int); max_seconds(double); batch_size(int); learning_rate(double); decay(double); tolerance(double)</p>
            <p id="p1074918587561"><a name="p1074918587561"></a><a name="p1074918587561"></a>其中，SVM限定超参lambda(double)</p>
            </td>
            </tr>
            <tr id="row1986142785613"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p098622717567"><a name="p098622717567"></a><a name="p098622717567"></a>Kmeans</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p139861927185613"><a name="p139861927185613"></a><a name="p139861927185613"></a>max_iterations(int); num_centroids(int); tolerance(double); batch_size(int); num_features(int); distance_function(char*); seeding_function(char*); verbose(int);seed(int)</p>
            </td>
            </tr>
            </tbody>
            </table>

            当前各个超参数设置的默认值和取值范围如下：

            **表 3**  超参的默认值以及取值范围

            <a name="table86881521502"></a>
            <table><thead align="left"><tr id="row9689452402"><th class="cellrowborder" valign="top" width="16.04%" id="mcps1.2.5.1.1"><p id="p1168911521406"><a name="p1168911521406"></a><a name="p1168911521406"></a>算子</p>
            </th>
            <th class="cellrowborder" valign="top" width="35.28%" id="mcps1.2.5.1.2"><p id="p176891522013"><a name="p176891522013"></a><a name="p176891522013"></a>超参（默认值）</p>
            </th>
            <th class="cellrowborder" valign="top" width="22.12%" id="mcps1.2.5.1.3"><p id="p1468955218017"><a name="p1468955218017"></a><a name="p1468955218017"></a>取值范围</p>
            </th>
            <th class="cellrowborder" valign="top" width="26.56%" id="mcps1.2.5.1.4"><p id="p1749251941915"><a name="p1749251941915"></a><a name="p1749251941915"></a>超参描述</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row768911521608"><td class="cellrowborder" rowspan="10" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p679095114313"><a name="p679095114313"></a><a name="p679095114313"></a>GD (logistic_regression、linear_regression、svm_classification)</p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p66891852902"><a name="p66891852902"></a><a name="p66891852902"></a>optimizer = gd（梯度下降法）</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p1168918523011"><a name="p1168918523011"></a><a name="p1168918523011"></a>gd/ngd（自然梯度下降）</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p11492191911911"><a name="p11492191911911"></a><a name="p11492191911911"></a>优化器</p>
            </td>
            </tr>
            <tr id="row468915521103"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p106891552106"><a name="p106891552106"></a><a name="p106891552106"></a>verbose = false</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p3689252101"><a name="p3689252101"></a><a name="p3689252101"></a>T/F</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19492319181916"><a name="p19492319181916"></a><a name="p19492319181916"></a>日志显示</p>
            </td>
            </tr>
            <tr id="row1168925220018"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p968914521303"><a name="p968914521303"></a><a name="p968914521303"></a>max_iterations = 100</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1268945210013"><a name="p1268945210013"></a><a name="p1268945210013"></a>(0, INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19492119171912"><a name="p19492119171912"></a><a name="p19492119171912"></a>最大迭代次数</p>
            </td>
            </tr>
            <tr id="row968985213016"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p96891521904"><a name="p96891521904"></a><a name="p96891521904"></a>max_seconds = 0（不对运行时长设限制）</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p5689752300"><a name="p5689752300"></a><a name="p5689752300"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p134928192199"><a name="p134928192199"></a><a name="p134928192199"></a>运行时长</p>
            </td>
            </tr>
            <tr id="row56893521905"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p268975210020"><a name="p268975210020"></a><a name="p268975210020"></a>batch_size = 1000</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p76892521602"><a name="p76892521602"></a><a name="p76892521602"></a>(0, MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p749216198198"><a name="p749216198198"></a><a name="p749216198198"></a>一次训练所选取的样本数</p>
            </td>
            </tr>
            <tr id="row668912521304"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1969016527011"><a name="p1969016527011"></a><a name="p1969016527011"></a>learning_rate = 0.8</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p669020521409"><a name="p669020521409"></a><a name="p669020521409"></a>(0, DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p14922196192"><a name="p14922196192"></a><a name="p14922196192"></a>学习率</p>
            </td>
            </tr>
            <tr id="row66901752807"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p969095219014"><a name="p969095219014"></a><a name="p969095219014"></a>decay = 0.95</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p96901052706"><a name="p96901052706"></a><a name="p96901052706"></a>(0, DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p174926195197"><a name="p174926195197"></a><a name="p174926195197"></a>权值衰减率</p>
            </td>
            </tr>
            <tr id="row1036182934"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p7361821939"><a name="p7361821939"></a><a name="p7361821939"></a>tolerance = 0.0005</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p183702838"><a name="p183702838"></a><a name="p183702838"></a>(0, DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p64922193197"><a name="p64922193197"></a><a name="p64922193197"></a>公差</p>
            </td>
            </tr>
            <tr id="row155121949191717"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p10512249181710"><a name="p10512249181710"></a><a name="p10512249181710"></a>seed = 0（对seed取随机值）</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p05125496171"><a name="p05125496171"></a><a name="p05125496171"></a>[0, INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p9492101941916"><a name="p9492101941916"></a><a name="p9492101941916"></a>种子</p>
            </td>
            </tr>
            <tr id="row1852014830"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1452084430"><a name="p1452084430"></a><a name="p1452084430"></a>just for SVM：lambda = 0.01</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p175201044311"><a name="p175201044311"></a><a name="p175201044311"></a>(0, DOUBLE_MAX_VALUE)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1949211917195"><a name="p1949211917195"></a><a name="p1949211917195"></a>正则化参数</p>
            </td>
            </tr>
            <tr id="row795511114310"><td class="cellrowborder" rowspan="9" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p21721416583"><a name="p21721416583"></a><a name="p21721416583"></a>Kmeans</p>
            <p id="p1236895522813"><a name="p1236895522813"></a><a name="p1236895522813"></a></p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p1695551116310"><a name="p1695551116310"></a><a name="p1695551116310"></a>max_iterations = 10</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p495501116310"><a name="p495501116310"></a><a name="p495501116310"></a>[1, INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p1492131911910"><a name="p1492131911910"></a><a name="p1492131911910"></a>最大迭代次数</p>
            </td>
            </tr>
            <tr id="row568119236"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p136811191430"><a name="p136811191430"></a><a name="p136811191430"></a>num_centroids = 10</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1668111916316"><a name="p1668111916316"></a><a name="p1668111916316"></a>[1, MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p2492151951911"><a name="p2492151951911"></a><a name="p2492151951911"></a>簇的数目</p>
            </td>
            </tr>
            <tr id="row1133613181825"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p193362181425"><a name="p193362181425"></a><a name="p193362181425"></a>tolerance = 0.00001</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p13336201813220"><a name="p13336201813220"></a><a name="p13336201813220"></a>(0,1)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p549341912192"><a name="p549341912192"></a><a name="p549341912192"></a>中心点误差</p>
            </td>
            </tr>
            <tr id="row17177771132"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p317713714311"><a name="p317713714311"></a><a name="p317713714311"></a>batch_size = 10</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p171771474313"><a name="p171771474313"></a><a name="p171771474313"></a>[1, MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p8493219141910"><a name="p8493219141910"></a><a name="p8493219141910"></a>一次训练所选取的样本数</p>
            </td>
            </tr>
            <tr id="row35347279220"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p14534162718220"><a name="p14534162718220"></a><a name="p14534162718220"></a>num_features = 2</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1953414271211"><a name="p1953414271211"></a><a name="p1953414271211"></a>[1, GS_MAX_COLS]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p44933197199"><a name="p44933197199"></a><a name="p44933197199"></a>输入样本特征数</p>
            </td>
            </tr>
            <tr id="row1394785819212"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p894725814217"><a name="p894725814217"></a><a name="p894725814217"></a>distance_function = "L2_Squared"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p3947205817210"><a name="p3947205817210"></a><a name="p3947205817210"></a>L1\L2\L2_Squared\Linf</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p649314195199"><a name="p649314195199"></a><a name="p649314195199"></a>正则化方法</p>
            </td>
            </tr>
            <tr id="row17885311820"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p48816313212"><a name="p48816313212"></a><a name="p48816313212"></a>seeding_function = "Random++"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1388143119218"><a name="p1388143119218"></a><a name="p1388143119218"></a>"Random++"\"KMeans||"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p249314190191"><a name="p249314190191"></a><a name="p249314190191"></a>初始化种子点方法</p>
            </td>
            </tr>
            <tr id="row51731360211"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1717323612220"><a name="p1717323612220"></a><a name="p1717323612220"></a>verbose = 0U</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p121731736923"><a name="p121731736923"></a><a name="p121731736923"></a>{ 0, 1, 2 }</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1849361991914"><a name="p1849361991914"></a><a name="p1849361991914"></a>冗长模式</p>
            </td>
            </tr>
            <tr id="row15367155552818"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p036895592811"><a name="p036895592811"></a><a name="p036895592811"></a>seed = 0U</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1836885512812"><a name="p1836885512812"></a><a name="p1836885512812"></a>[0, INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p24931319191911"><a name="p24931319191911"></a><a name="p24931319191911"></a>种子</p>
            </td>
            </tr>
            <tr id="row580013512210"><td class="cellrowborder" colspan="4" valign="top" headers="mcps1.2.5.1.1 mcps1.2.5.1.2 mcps1.2.5.1.3 mcps1.2.5.1.4 "><p id="p1588154717714"><a name="p1588154717714"></a><a name="p1588154717714"></a>MAX_MEMORY_LIMIT = 最大内存加载的元组数量</p>
            </td>
            </tr>
            <tr id="row411547826"><td class="cellrowborder" colspan="4" valign="top" headers="mcps1.2.5.1.1 mcps1.2.5.1.2 mcps1.2.5.1.3 mcps1.2.5.1.4 "><p id="p183191141289"><a name="p183191141289"></a><a name="p183191141289"></a>GS_MAX_COLS = 数据库单表最大属性数量</p>
            </td>
            </tr>
            </tbody>
            </table>

    -   模型保存成功，则返回创建成功信息：

        ```
        MODEL CREATED. PROCESSED x
        ```

3.  查看模型信息。

    当训练完成后模型会被存储到系统表gs\_model\_warehouse中。系统表gs\_model\_warehouse可以查看到关于模型本身和训练过程的相关信息。

    用户可以通过查看系统表的方式查看模型，例如查看模型名为“point\_kmeans”的SQL语句如下：

    ```
    openGauss=# select * from gs_model_warehouse where modelname='point_kmeans';
    -[ RECORD 1 ]---------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    modelname             | point_kmeans
    modelowner            | 10
    createtime            | 2021-04-30 17:30:39.59044
    processedtuples       | 20
    discardedtuples       | 0
    pre_process_time      | 6.2001e-05
    exec_time             | .000185272
    iterations            | 5
    outputtype            | 23
    modeltype             | kmeans
    query                 | CREATE MODEL point_kmeans USING kmeans FEATURES position FROM kmeans_2d WITH num_centroids=3;
    modeldata             |
    weight                |
    hyperparametersnames  | {max_iterations,num_centroids,tolerance,batch_size,num_features,distance_function,seeding_function,verbose,seed}
    hyperparametersvalues | {10,3,1e-05,10,2,L2_Squared,Random++,0,0}
    hyperparametersoids   | {23,23,701,23,23,1043,1043,23,23}
    coefnames             | {original_num_centroids,actual_num_centroids,dimension,distance_function_id,seed,coordinates}
    coefvalues            | {3,3,2,2,572368998,"(77.282589,23.724434)(74.421616,73.239455)(18.551682,76.320914)"}
    coefoids              |
    trainingscoresname    |
    trainingscoresvalue   |
    modeldescribe         | {"id:1,objective_function:542.851169,avg_distance_to_centroid:108.570234,min_distance_to_centroid:1.027078,max_distance_to_centroid:297.210108,std_dev_distance_to_centroid:105.053257,cluster_size:5","id:2,objective_function:5825.982139,avg_distance_to_centroid:529.634740,min_distance_to_centroid:100.270449,max_distance_to_centroid:990.300588,std_dev_distance_to_centroid:285.915094,cluster_size:11","id:3,objective_function:220.792591,avg_distance_to_centroid:55.198148,min_distance_to_centroid:4.216111,max_distance_to_centroid:102.117204,std_dev_distance_to_centroid:39.319118,cluster_size:4"}
    ```

4.  利用已存在的模型做推断任务。

    使用“SELECT”和“PREDICT BY”关键字利用已有模型完成推断任务。

    查询语法：SELECT…PREDICT BY…\(FEATURES…\)…FROM…;

    ```
    openGauss=# SELECT id, PREDICT BY point_kmeans (FEATURES position) as pos FROM (select * from kmeans_2d limit 10);
     id | pos
    ----+-----
      1 |   2
      2 |   2
      3 |   1
      4 |   3
      5 |   2
      6 |   2
      7 |   2
      8 |   1
      9 |   3
     10 |   1
    (10 rows)
    ```

    针对相同的推断任务，同一个模型的结果是稳定的。且基于相同的超参数和训练集训练的模型也具有稳定性，同时AI模型训练存在随机成分（每个batch的数据分布、随机梯度下降），所以不同的模型间的计算表现、结果允许存在小的差别。

5.  查看执行计划。

    使用explain语句可对“CREATE MODEL”和“PREDICT BY”的模型训练或预测过程中的执行计划进行分析。Explain关键字后可直接拼接CREATE MODEL/ PREDICT BY语句（子句），也可接可选的参数，支持的参数如下：

    **表 4**  EXPLAIN支持的参数

    <a name="table15575173743415"></a>
    <table><thead align="left"><tr id="row16576163793415"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p125760378342"><a name="p125760378342"></a><a name="p125760378342"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p15761337103418"><a name="p15761337103418"></a><a name="p15761337103418"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row957673723411"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p25764375344"><a name="p25764375344"></a><a name="p25764375344"></a>ANALYZE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p16576153713413"><a name="p16576153713413"></a><a name="p16576153713413"></a>布尔型变量，追加运行时间、循环次数等描述信息</p>
    </td>
    </tr>
    <tr id="row1057683714349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8576937183415"><a name="p8576937183415"></a><a name="p8576937183415"></a>VERBOSE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p757611379349"><a name="p757611379349"></a><a name="p757611379349"></a>布尔型变量，控制训练的运行信息是否输出到客户端</p>
    </td>
    </tr>
    <tr id="row5576113723414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p175761237103415"><a name="p175761237103415"></a><a name="p175761237103415"></a>COSTS</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p18576133711348"><a name="p18576133711348"></a><a name="p18576133711348"></a>布尔型变量</p>
    </td>
    </tr>
    <tr id="row557673733418"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16576437113412"><a name="p16576437113412"></a><a name="p16576437113412"></a>CPU</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9576143720341"><a name="p9576143720341"></a><a name="p9576143720341"></a>布尔型变量</p>
    </td>
    </tr>
    <tr id="row457633718349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17576173711341"><a name="p17576173711341"></a><a name="p17576173711341"></a>DETAIL</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14576203713347"><a name="p14576203713347"></a><a name="p14576203713347"></a>布尔型变量，不可用</p>
    </td>
    </tr>
    <tr id="row1257603714348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p857623743413"><a name="p857623743413"></a><a name="p857623743413"></a>NODES</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p157633733410"><a name="p157633733410"></a><a name="p157633733410"></a>布尔型变量，不可用</p>
    </td>
    </tr>
    <tr id="row195765377349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p0576193712347"><a name="p0576193712347"></a><a name="p0576193712347"></a>NUM_NODES</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1576337113416"><a name="p1576337113416"></a><a name="p1576337113416"></a>布尔型变量，不可用</p>
    </td>
    </tr>
    <tr id="row14795829173510"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1779512913351"><a name="p1779512913351"></a><a name="p1779512913351"></a>BUFFERS</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p177961729153515"><a name="p177961729153515"></a><a name="p177961729153515"></a>布尔型变量</p>
    </td>
    </tr>
    <tr id="row68161634173514"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p108161134203514"><a name="p108161134203514"></a><a name="p108161134203514"></a>TIMING</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p581610343357"><a name="p581610343357"></a><a name="p581610343357"></a>布尔型变量</p>
    </td>
    </tr>
    <tr id="row19869194093514"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1586904013512"><a name="p1586904013512"></a><a name="p1586904013512"></a>PLAN</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6869440153520"><a name="p6869440153520"></a><a name="p6869440153520"></a>布尔型变量</p>
    </td>
    </tr>
    <tr id="row1383153733511"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12831123716352"><a name="p12831123716352"></a><a name="p12831123716352"></a>FORMAT</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p683183703517"><a name="p683183703517"></a><a name="p683183703517"></a>可选格式类型：TEXT / XML / JSON / YAML</p>
    </td>
    </tr>
    </tbody>
    </table>

    示例：

    ```
    openGauss=# Explain CREATE MODEL patient_logisitic_regression USING logistic_regression FEATURES second_attack, treatment TARGET trait_anxiety > 50 FROM patients WITH batch_size=10, learning_rate = 0.05;
    NOTICE:  Hyperparameter batch_size takes value 10
    NOTICE:  Hyperparameter decay takes value DEFAULT (0.950000)
    NOTICE:  Hyperparameter learning_rate takes value 0.050000
    NOTICE:  Hyperparameter max_iterations takes value DEFAULT (100)
    NOTICE:  Hyperparameter max_seconds takes value DEFAULT (0)
    NOTICE:  Hyperparameter optimizer takes value DEFAULT (gd)
    NOTICE:  Hyperparameter tolerance takes value DEFAULT (0.000500)
    NOTICE:  Hyperparameter seed takes value DEFAULT (0)
    NOTICE:  Hyperparameter verbose takes value DEFAULT (FALSE)
    NOTICE:  GD shuffle cache size 212369
                                QUERY PLAN
    -------------------------------------------------------------------
     Gradient Descent  (cost=0.00..0.00 rows=0 width=0)
       ->  Seq Scan on patients  (cost=0.00..32.20 rows=1776 width=12)
    (2 rows)
    ```

6.  异常场景。
    -   训练阶段。
        -   场景一：当超参数的设置超出取值范围，模型训练失败，返回ERROR，并提示错误，例如：

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET trait_anxiety  FROM patients WITH optimizer='aa';
            NOTICE:  Hyperparameter batch_size takes value DEFAULT (1000)
            NOTICE:  Hyperparameter decay takes value DEFAULT (0.950000)
            NOTICE:  Hyperparameter learning_rate takes value DEFAULT (0.800000)
            NOTICE:  Hyperparameter max_iterations takes value DEFAULT (100)
            NOTICE:  Hyperparameter max_seconds takes value DEFAULT (0)
            NOTICE:  Hyperparameter optimizer takes value aa
            ERROR:  Invalid hyperparameter value for optimizer. Valid values are: gd, ngd. (default is gd)
            ```

        -   场景二：当模型名称已存在，模型保存失败，返回ERROR，并提示错误原因：

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET trait_anxiety  FROM patients;
            NOTICE:  Hyperparameter batch_size takes value DEFAULT (1000)
            NOTICE:  Hyperparameter decay takes value DEFAULT (0.950000)
            NOTICE:  Hyperparameter learning_rate takes value DEFAULT (0.800000)
            NOTICE:  Hyperparameter max_iterations takes value DEFAULT (100)
            NOTICE:  Hyperparameter max_seconds takes value DEFAULT (0)
            NOTICE:  Hyperparameter optimizer takes value DEFAULT (gd)
            NOTICE:  Hyperparameter tolerance takes value DEFAULT (0.000500)
            NOTICE:  Hyperparameter seed takes value DEFAULT (0)
            NOTICE:  Hyperparameter verbose takes value DEFAULT (FALSE)
            NOTICE:  GD shuffle cache size 5502
            ERROR:  The model name "patient_linear_regression" already exists in gs_model_warehouse.
            ```

        -   场景三：FEATURE或者TARGETS列是\*，返回ERROR，并提示错误原因：

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES *  TARGET trait_anxiety  FROM
            patients;
            ERROR:  FEATURES clause cannot be *
            -----------------------------------------------------------------------------------------------------------------------、
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET *  FROM patients;
            ERROR:  TARGET clause cannot be *
            ```

        -   场景四：对于无监督学习方法使用TARGET关键字，或者在监督学习方法中不适用TARGET关键字，均会返回ERROR，并提示错误原因：

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment FROM patients;
            ERROR:  Supervised ML algorithms require TARGET clause
            -----------------------------------------------------------------------------------------------------------------------------
            CREATE MODEL patient_linear_regression USING linear_regression TARGET trait_anxiety  FROM patients;   ERROR:  Supervised ML algorithms require FEATURES clause
            ```

        -   场景五：当GUC参数statement\_timeout设置了时长，训练超时执行的语句将被终止：执行CREATE MODEL语句。训练集的大小、训练轮数（iteration）、提前终止条件（tolerance、max\_seconds）、并行线程数（nthread）等参数都会影响训练时长。当时长超过数据库限制，语句被终止模型训练失败。

    -   推断阶段。
        -   场景六：当模型名在系统表中查找不到，数据库会报ERROR：

            ```
            openGauss=# select id, PREDICT BY patient_logistic_regression (FEATURES second_attack,treatment) FROM patients;
            ERROR:  There is no model called "patient_logistic_regression".
            ```

        -   场景七：当做推断任务FEATURES的数据维度和数据类型与训练集存在不一致，将报ERROR，并提示错误原因，例如：

            ```
            openGauss=# select id, PREDICT BY patient_linear_regression (FEATURES second_attack) FROM patients;
            ERROR:  Invalid number of features for prediction, provided 1, expected 2
            CONTEXT:  referenced column: patient_linear_regression_pred
            -------------------------------------------------------------------------------------------------------------------------------------
            openGauss=# select id, PREDICT BY patient_linear_regression (FEATURES 1,second_attack,treatment) FROM patients;
            ERROR:  Invalid number of features for prediction, provided 3, expected 2
            CONTEXT:  referenced column: patient_linear_regression_pre
            ```
