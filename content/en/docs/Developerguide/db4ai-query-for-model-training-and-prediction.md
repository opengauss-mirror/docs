# DB4AI-Query for Model Training and Prediction<a name="EN-US_TOPIC_0000001162739736"></a>

The current version of openGauss supports the native DB4AI capability. By introducing native AI operators, openGauss simplifies the operation process and fully utilizes the optimization and execution capabilities of the database optimizer and executor to obtain the high-performance model training capability in the database. With a simpler model training and prediction process and higher performance, developers can focus on model tuning and data analysis in a shorter period of time, avoiding fragmented technology stacks and redundant code implementation.

## Keyword Parsing<a name="section62561652916"></a>

**Table  1**  DB4AI syntax and keywords

<a name="table195141653553"></a>
<table><thead align="left"><tr id="row16514153257"><th class="cellrowborder" valign="top" width="17.611761176117614%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="39.62396239623963%" id="mcps1.2.4.1.2"><p id="p75155531157"><a name="p75155531157"></a><a name="p75155531157"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="42.76427642764276%" id="mcps1.2.4.1.3"><p id="p5515175310512"><a name="p5515175310512"></a><a name="p5515175310512"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1515195316512"><td class="cellrowborder" rowspan="2" valign="top" width="17.611761176117614%" headers="mcps1.2.4.1.1 "><p id="p19504150872"><a name="p19504150872"></a><a name="p19504150872"></a>Statement</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p115159531754"><a name="p115159531754"></a><a name="p115159531754"></a>CREATE MODEL</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.4.1.3 "><p id="p145158539515"><a name="p145158539515"></a><a name="p145158539515"></a>Creates a model, trains it, and saves the model.</p>
</td>
</tr>
<tr id="row25156530514"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p151514531158"><a name="p151514531158"></a><a name="p151514531158"></a>PREDICT BY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p14515653550"><a name="p14515653550"></a><a name="p14515653550"></a>Uses an existing model for prediction.</p>
</td>
</tr>
<tr id="row135154531653"><td class="cellrowborder" rowspan="3" valign="top" width="17.611761176117614%" headers="mcps1.2.4.1.1 "><p id="p3365997714"><a name="p3365997714"></a><a name="p3365997714"></a>Keyword</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="p1351515318511"><a name="p1351515318511"></a><a name="p1351515318511"></a>TARGET</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.4.1.3 "><p id="p251565313519"><a name="p251565313519"></a><a name="p251565313519"></a>Target column name of a training or prediction task.</p>
</td>
</tr>
<tr id="row15154534510"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1151513531457"><a name="p1151513531457"></a><a name="p1151513531457"></a>FEATURES</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1151511536520"><a name="p1151511536520"></a><a name="p1151511536520"></a>Data feature column name of a training or prediction task.</p>
</td>
</tr>
<tr id="row125158536519"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p751513533518"><a name="p751513533518"></a><a name="p751513533518"></a>MODEL</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p651535310516"><a name="p651535310516"></a><a name="p651535310516"></a>Model name of a training task.</p>
</td>
</tr>
</tbody>
</table>

## Developer Guide<a name="section061917401992"></a>

1.  Introduce the algorithms supported in this version.

    DB4AI of the current version supports logistic regression \(binary classification tasks\), linear regression, and vector machine algorithms \(classification tasks\) based on the SGD operator, as well as the K-Means clustering algorithm based on the K-Means operator.

2.  Learn about the model training syntax.
    -   CREATE MODEL

        You can run the  **CREATE MODEL**  statement to create and train a model. Taking dataset  **kmeans\_2d**  as an example, the data content of the table is as follows:

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

        The data type of the  **position**  field in this table is double precision\[\].

    -   The following uses K-Means as an example to describe how to train a model. Specify  **position**  as a feature column in the  **kmeans\_2d**  training set, and use the K-Means algorithm to create and save the  **point\_kmeans**  model.

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

        In the preceding command:

        -   The  **CREATE MODEL**  statement is used to train and save a model.
        -   **USING**  specifies the algorithm name.
        -   **FEATURES**  specifies the features of the training model and needs to be added based on the column name of the training data table.
        -   **TARGET**  specifies the training target of the model. It can be the column name of the data table required for training or an expression, for example,  **price \> 10000**.
        -   **WITH**  specifies the hyperparameters used for model training. When the hyperparameter is not set by the user, the framework uses the default value.

            The framework supports various hyperparameter combinations for different operators.

            **Table  2**  Hyperparameters supported by operators

            <a name="table15985527185615"></a>
            <table><thead align="left"><tr id="row4985102718565"><th class="cellrowborder" valign="top" width="35.49%" id="mcps1.2.3.1.1"><p id="p7986172713567"><a name="p7986172713567"></a><a name="p7986172713567"></a>Operator</p>
            </th>
            <th class="cellrowborder" valign="top" width="64.51%" id="mcps1.2.3.1.2"><p id="p159861727125619"><a name="p159861727125619"></a><a name="p159861727125619"></a>Hyperparameter</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row1798682755614"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p226171165710"><a name="p226171165710"></a><a name="p226171165710"></a>GD</p>
            <p id="p1798662711568"><a name="p1798662711568"></a><a name="p1798662711568"></a>(logistic_regression, linear_regression, and svm_classification)</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p167491058185616"><a name="p167491058185616"></a><a name="p167491058185616"></a>optimizer(char*), verbose(bool), max_iterations(int), max_seconds(double), batch_size(int), learning_rate(double), decay(double), and tolerance(double)</p>
            <p id="p1074918587561"><a name="p1074918587561"></a><a name="p1074918587561"></a>SVM limits the hyperparameter<strong id="b1619552312549"><a name="b1619552312549"></a><a name="b1619552312549"></a> lambda(double)</strong>.</p>
            </td>
            </tr>
            <tr id="row1986142785613"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p098622717567"><a name="p098622717567"></a><a name="p098622717567"></a>K-Means</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p139861927185613"><a name="p139861927185613"></a><a name="p139861927185613"></a>max_iterations(int), num_centroids(int), tolerance(double), batch_size(int), num_features(int), distance_function(char*), seeding_function(char*), verbose(int), and seed(int)</p>
            </td>
            </tr>
            </tbody>
            </table>

            The default value and value range of each hyperparameter are as follows:

            **Table  3**  Default values and value ranges of hyperparameters

            <a name="table86881521502"></a>
            <table><thead align="left"><tr id="row9689452402"><th class="cellrowborder" valign="top" width="16.04%" id="mcps1.2.5.1.1"><p id="p1168911521406"><a name="p1168911521406"></a><a name="p1168911521406"></a>Operator</p>
            </th>
            <th class="cellrowborder" valign="top" width="35.28%" id="mcps1.2.5.1.2"><p id="p176891522013"><a name="p176891522013"></a><a name="p176891522013"></a>Default Hyperparameter Value</p>
            </th>
            <th class="cellrowborder" valign="top" width="22.12%" id="mcps1.2.5.1.3"><p id="p1468955218017"><a name="p1468955218017"></a><a name="p1468955218017"></a>Value Range</p>
            </th>
            <th class="cellrowborder" valign="top" width="26.56%" id="mcps1.2.5.1.4"><p id="p1749251941915"><a name="p1749251941915"></a><a name="p1749251941915"></a>Hyperparameter Description</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="row768911521608"><td class="cellrowborder" rowspan="10" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p679095114313"><a name="p679095114313"></a><a name="p679095114313"></a>GD (logistic_regression, linear_regression, and svm_classification)</p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p66891852902"><a name="p66891852902"></a><a name="p66891852902"></a>optimizer = gd (gradient descent)</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p1168918523011"><a name="p1168918523011"></a><a name="p1168918523011"></a><strong id="b10717121589"><a name="b10717121589"></a><a name="b10717121589"></a>gd</strong> or <strong id="b15106110185814"><a name="b15106110185814"></a><a name="b15106110185814"></a>ngd</strong> (natural gradient descent)</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p11492191911911"><a name="p11492191911911"></a><a name="p11492191911911"></a>Optimizer</p>
            </td>
            </tr>
            <tr id="row468915521103"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p106891552106"><a name="p106891552106"></a><a name="p106891552106"></a>verbose = false</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p3689252101"><a name="p3689252101"></a><a name="p3689252101"></a><strong id="b549052810583"><a name="b549052810583"></a><a name="b549052810583"></a>T</strong> or <strong id="b1957873425815"><a name="b1957873425815"></a><a name="b1957873425815"></a>F</strong></p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19492319181916"><a name="p19492319181916"></a><a name="p19492319181916"></a>Log display</p>
            </td>
            </tr>
            <tr id="row1168925220018"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p968914521303"><a name="p968914521303"></a><a name="p968914521303"></a>max_iterations = 100</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1268945210013"><a name="p1268945210013"></a><a name="p1268945210013"></a>(0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19492119171912"><a name="p19492119171912"></a><a name="p19492119171912"></a>Maximum iterations</p>
            </td>
            </tr>
            <tr id="row968985213016"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p96891521904"><a name="p96891521904"></a><a name="p96891521904"></a>max_seconds = 0 (The running duration is not limited.)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p5689752300"><a name="p5689752300"></a><a name="p5689752300"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p134928192199"><a name="p134928192199"></a><a name="p134928192199"></a>Running duration</p>
            </td>
            </tr>
            <tr id="row56893521905"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p268975210020"><a name="p268975210020"></a><a name="p268975210020"></a>batch_size = 1000</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p76892521602"><a name="p76892521602"></a><a name="p76892521602"></a>(0,MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p749216198198"><a name="p749216198198"></a><a name="p749216198198"></a>Number of data records selected per training</p>
            </td>
            </tr>
            <tr id="row668912521304"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1969016527011"><a name="p1969016527011"></a><a name="p1969016527011"></a>learning_rate = 0.8</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p669020521409"><a name="p669020521409"></a><a name="p669020521409"></a>(0,DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p14922196192"><a name="p14922196192"></a><a name="p14922196192"></a>Learning rate</p>
            </td>
            </tr>
            <tr id="row66901752807"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p969095219014"><a name="p969095219014"></a><a name="p969095219014"></a>decay = 0.95</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p96901052706"><a name="p96901052706"></a><a name="p96901052706"></a>(0,DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p174926195197"><a name="p174926195197"></a><a name="p174926195197"></a>Weight decay rate</p>
            </td>
            </tr>
            <tr id="row1036182934"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p7361821939"><a name="p7361821939"></a><a name="p7361821939"></a>tolerance = 0.0005</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p183702838"><a name="p183702838"></a><a name="p183702838"></a>(0,DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p64922193197"><a name="p64922193197"></a><a name="p64922193197"></a>Tolerance</p>
            </td>
            </tr>
            <tr id="row155121949191717"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p10512249181710"><a name="p10512249181710"></a><a name="p10512249181710"></a>seed = 0 (random value of <strong id="b2125413405"><a name="b2125413405"></a><a name="b2125413405"></a>seed</strong>)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p05125496171"><a name="p05125496171"></a><a name="p05125496171"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p9492101941916"><a name="p9492101941916"></a><a name="p9492101941916"></a>Seed</p>
            </td>
            </tr>
            <tr id="row1852014830"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1452084430"><a name="p1452084430"></a><a name="p1452084430"></a>just for SVM:lambda = 0.01</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p175201044311"><a name="p175201044311"></a><a name="p175201044311"></a>(0,DOUBLE_MAX_VALUE)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1949211917195"><a name="p1949211917195"></a><a name="p1949211917195"></a>Regularization parameter</p>
            </td>
            </tr>
            <tr id="row795511114310"><td class="cellrowborder" rowspan="9" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p21721416583"><a name="p21721416583"></a><a name="p21721416583"></a>K-Means</p>
            <p id="p1236895522813"><a name="p1236895522813"></a><a name="p1236895522813"></a></p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p1695551116310"><a name="p1695551116310"></a><a name="p1695551116310"></a>max_iterations = 10</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p495501116310"><a name="p495501116310"></a><a name="p495501116310"></a>[1,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p1492131911910"><a name="p1492131911910"></a><a name="p1492131911910"></a>Maximum iterations</p>
            </td>
            </tr>
            <tr id="row568119236"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p136811191430"><a name="p136811191430"></a><a name="p136811191430"></a>num_centroids = 10</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1668111916316"><a name="p1668111916316"></a><a name="p1668111916316"></a>[1,MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p2492151951911"><a name="p2492151951911"></a><a name="p2492151951911"></a>Number of clusters</p>
            </td>
            </tr>
            <tr id="row1133613181825"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p193362181425"><a name="p193362181425"></a><a name="p193362181425"></a>tolerance = 0.00001</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p13336201813220"><a name="p13336201813220"></a><a name="p13336201813220"></a>(0,1)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p549341912192"><a name="p549341912192"></a><a name="p549341912192"></a>Central point error</p>
            </td>
            </tr>
            <tr id="row17177771132"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p317713714311"><a name="p317713714311"></a><a name="p317713714311"></a>batch_size = 10</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p171771474313"><a name="p171771474313"></a><a name="p171771474313"></a>[1,MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p8493219141910"><a name="p8493219141910"></a><a name="p8493219141910"></a>Number of data records selected per training</p>
            </td>
            </tr>
            <tr id="row35347279220"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p14534162718220"><a name="p14534162718220"></a><a name="p14534162718220"></a>num_features = 2</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1953414271211"><a name="p1953414271211"></a><a name="p1953414271211"></a>[1,GS_MAX_COLS]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p44933197199"><a name="p44933197199"></a><a name="p44933197199"></a>Number of sample features</p>
            </td>
            </tr>
            <tr id="row1394785819212"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p894725814217"><a name="p894725814217"></a><a name="p894725814217"></a>distance_function = "L2_Squared"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p3947205817210"><a name="p3947205817210"></a><a name="p3947205817210"></a><strong id="b51326256211"><a name="b51326256211"></a><a name="b51326256211"></a>L1</strong>, <strong id="b224220271323"><a name="b224220271323"></a><a name="b224220271323"></a>L2</strong>, <strong id="b378616291522"><a name="b378616291522"></a><a name="b378616291522"></a>L2_Squared</strong>, or <strong id="b1211532128"><a name="b1211532128"></a><a name="b1211532128"></a>Linf</strong></p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p649314195199"><a name="p649314195199"></a><a name="p649314195199"></a>Regularization method</p>
            </td>
            </tr>
            <tr id="row17885311820"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p48816313212"><a name="p48816313212"></a><a name="p48816313212"></a>seeding_function = "Random++"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1388143119218"><a name="p1388143119218"></a><a name="p1388143119218"></a><strong id="b16515177633"><a name="b16515177633"></a><a name="b16515177633"></a>"Random++"</strong> or <strong id="b105471511936"><a name="b105471511936"></a><a name="b105471511936"></a>"KMeans||"</strong></p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p249314190191"><a name="p249314190191"></a><a name="p249314190191"></a>Method for initializing seed points</p>
            </td>
            </tr>
            <tr id="row51731360211"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1717323612220"><a name="p1717323612220"></a><a name="p1717323612220"></a>verbose = 0U</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p121731736923"><a name="p121731736923"></a><a name="p121731736923"></a>{0,1,2}</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1849361991914"><a name="p1849361991914"></a><a name="p1849361991914"></a>Verbose mode</p>
            </td>
            </tr>
            <tr id="row15367155552818"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p036895592811"><a name="p036895592811"></a><a name="p036895592811"></a>seed = 0U</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1836885512812"><a name="p1836885512812"></a><a name="p1836885512812"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p24931319191911"><a name="p24931319191911"></a><a name="p24931319191911"></a>Seed</p>
            </td>
            </tr>
            <tr id="row580013512210"><td class="cellrowborder" colspan="4" valign="top" headers="mcps1.2.5.1.1 mcps1.2.5.1.2 mcps1.2.5.1.3 mcps1.2.5.1.4 "><p id="p1588154717714"><a name="p1588154717714"></a><a name="p1588154717714"></a>MAX_MEMORY_LIMIT = Maximum number of tuples loaded in memory</p>
            </td>
            </tr>
            <tr id="row411547826"><td class="cellrowborder" colspan="4" valign="top" headers="mcps1.2.5.1.1 mcps1.2.5.1.2 mcps1.2.5.1.3 mcps1.2.5.1.4 "><p id="p183191141289"><a name="p183191141289"></a><a name="p183191141289"></a>GS_MAX_COLS = Maximum number of attributes in a database table</p>
            </td>
            </tr>
            </tbody>
            </table>

    -   If the model is saved successfully, the following information is returned:

        ```
        MODEL CREATED. PROCESSED x
        ```

3.  View the model information.

    After the training is complete, the model is stored in the  **gs\_model\_warehouse**  system catalog. You can view information about the model and training process in the  **gs\_model\_warehouse**  system catalog.

    You can view a model by viewing the system catalog. For example, run the following SQL statement to view the model named  **point\_kmeans**:

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

4.  Use an existing model to perform a prediction task.

    Use the  **SELECT**  and  **PREDICT BY**  keywords to complete the prediction task based on the existing model.

    Query syntax: SELECT... PREDICT BY... \(FEATURES...\)... FROM...;

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

    For the same prediction task, the results of the same model are stable. In addition, models trained based on the same hyperparameter and training set are stable. AI model training is random \(random gradient descent of data distribution each batch\). Therefore, the computing performance and results of different models can vary slightly.

5.  View the execution plan.

    You can use the  **EXPLAIN**  statement to analyze the execution plan in the model training or prediction process of  **CREATE MODEL**  and  **PREDICT BY**. The keyword  **EXPLAIN**  can be followed by a  **CREATE MODEL**  or  **PREDICT BY**  clause or an optional parameter. The supported parameters are as follows:

    **Table  4**  Parameters supported by EXPLAIN

    <a name="table15575173743415"></a>
    <table><thead align="left"><tr id="row16576163793415"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p125760378342"><a name="p125760378342"></a><a name="p125760378342"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p15761337103418"><a name="p15761337103418"></a><a name="p15761337103418"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row957673723411"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p25764375344"><a name="p25764375344"></a><a name="p25764375344"></a>ANALYZE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p16576153713413"><a name="p16576153713413"></a><a name="p16576153713413"></a>Boolean variable, which is used to add description information such as the running time and number of loop times</p>
    </td>
    </tr>
    <tr id="row1057683714349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8576937183415"><a name="p8576937183415"></a><a name="p8576937183415"></a>VERBOSE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p757611379349"><a name="p757611379349"></a><a name="p757611379349"></a>Boolean variable, which determines whether to output the training running information to the client</p>
    </td>
    </tr>
    <tr id="row5576113723414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p175761237103415"><a name="p175761237103415"></a><a name="p175761237103415"></a>COSTS</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p18576133711348"><a name="p18576133711348"></a><a name="p18576133711348"></a>Boolean variable</p>
    </td>
    </tr>
    <tr id="row557673733418"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16576437113412"><a name="p16576437113412"></a><a name="p16576437113412"></a>CPU</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9576143720341"><a name="p9576143720341"></a><a name="p9576143720341"></a>Boolean variable</p>
    </td>
    </tr>
    <tr id="row457633718349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17576173711341"><a name="p17576173711341"></a><a name="p17576173711341"></a>DETAIL</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14576203713347"><a name="p14576203713347"></a><a name="p14576203713347"></a>Boolean variable, which is available only in distributed mode</p>
    </td>
    </tr>
    <tr id="row1257603714348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p857623743413"><a name="p857623743413"></a><a name="p857623743413"></a>NODES</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p157633733410"><a name="p157633733410"></a><a name="p157633733410"></a>Boolean variable, which is available only in distributed mode</p>
    </td>
    </tr>
    <tr id="row195765377349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p0576193712347"><a name="p0576193712347"></a><a name="p0576193712347"></a>NUM_NODES</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1576337113416"><a name="p1576337113416"></a><a name="p1576337113416"></a>Boolean variable, which is available only in distributed mode</p>
    </td>
    </tr>
    <tr id="row14795829173510"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1779512913351"><a name="p1779512913351"></a><a name="p1779512913351"></a>BUFFERS</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p177961729153515"><a name="p177961729153515"></a><a name="p177961729153515"></a>Boolean variable</p>
    </td>
    </tr>
    <tr id="row68161634173514"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p108161134203514"><a name="p108161134203514"></a><a name="p108161134203514"></a>TIMING</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p581610343357"><a name="p581610343357"></a><a name="p581610343357"></a>Boolean variable</p>
    </td>
    </tr>
    <tr id="row19869194093514"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1586904013512"><a name="p1586904013512"></a><a name="p1586904013512"></a>PLAN</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6869440153520"><a name="p6869440153520"></a><a name="p6869440153520"></a>Boolean variable</p>
    </td>
    </tr>
    <tr id="row1383153733511"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12831123716352"><a name="p12831123716352"></a><a name="p12831123716352"></a>FORMAT</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p683183703517"><a name="p683183703517"></a><a name="p683183703517"></a>Optional format type: TEXT, XML, JSON, and YAML</p>
    </td>
    </tr>
    </tbody>
    </table>

    Example:

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

6.  Perform troubleshooting in case of exceptions.
    -   Training phase
        -   Scenario 1: When the value of the hyperparameter exceeds the value range, the model training fails and an error message is returned. For example:

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

        -   Scenario 2: If the model name already exists, the model fails to be saved, and an error message with the cause is displayed:

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

        -   Scenario 3: If the value in the  **FEATURE**  or  **TARGETS**  column is  **\***,  **ERROR**  is returned with the error cause:

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES *  TARGET trait_anxiety  FROM
            patients;
            ERROR:  FEATURES clause cannot be *
            -----------------------------------------------------------------------------------------------------------------------
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET *  FROM patients;
            ERROR:  TARGET clause cannot be *
            ```

        -   Scenario 4: If the keyword  **TARGET**  is used in the unsupervised learning method or is not applicable to the supervised learning method,  **ERROR**  is returned with the error cause:

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment FROM patients;
            ERROR:  Supervised ML algorithms require TARGET clause
            -----------------------------------------------------------------------------------------------------------------------------
            CREATE MODEL patient_linear_regression USING linear_regression TARGET trait_anxiety  FROM patients;   ERROR:  Supervised ML algorithms require FEATURES clause
            ```

        -   Scenario 5: If the GUC parameter  **statement\_timeout**  is set, the statement that is executed due to training timeout will be terminated. In this case, execute the  **CREATE MODEL**  statement. Parameters such as the size of the training set, number of training rounds \(**iteration**\), early termination conditions \(**tolerance**  and  **max\_seconds**\), and number of parallel threads \(**nthread**\) affect the training duration. When the duration exceeds the database limit, the statement execution is terminated and model training fails.

    -   Prediction phase
        -   Scenario 6: If the model name cannot be found in the system catalog, the database reports  **ERROR**:

            ```
            openGauss=# select id, PREDICT BY patient_logistic_regression (FEATURES second_attack,treatment) FROM patients;
            ERROR:  There is no model called "patient_logistic_regression".
            ```

        -   Scenario 7: If the data dimension and data type of the  **FEATURES**  task are inconsistent with those of the training set,  **ERROR**  is reported and the error cause is displayed. For example:

            ```
            openGauss=# select id, PREDICT BY patient_linear_regression (FEATURES second_attack) FROM patients;
            ERROR:  Invalid number of features for prediction, provided 1, expected 2
            CONTEXT:  referenced column: patient_linear_regression_pred
            -------------------------------------------------------------------------------------------------------------------------------------
            openGauss=# select id, PREDICT BY patient_linear_regression (FEATURES 1,second_attack,treatment) FROM patients;
            ERROR:  Invalid number of features for prediction, provided 3, expected 2
            CONTEXT:  referenced column: patient_linear_regression_pre
            ```




