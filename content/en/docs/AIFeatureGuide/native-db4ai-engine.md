# Native DB4AI Engine<a name="EN-US_TOPIC_0000001149426339"></a>

The current version of openGauss supports the native DB4AI capability. By introducing native AI operators, openGauss simplifies the operation process and fully utilizes the optimization and execution capabilities of the database optimizer and executor to obtain the high-performance model training capability in the database. With a simpler model training and prediction process and higher performance, developers can focus on model tuning and data analysis in a shorter period of time, avoiding fragmented technology stacks and redundant code implementation.

## Keyword Parsing<a name="section62561652916"></a>

**Table  1**  DB4AI syntax and keywords

<a name="table195141653553"></a>
<table><thead align="left"><tr id="row16514153257"><th class="cellrowborder" colspan="2" valign="top" id="mcps1.2.4.1.1"><p id="p45151753452"><a name="p45151753452"></a><a name="p45151753452"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.2.4.1.2"><p id="p5515175310512"><a name="p5515175310512"></a><a name="p5515175310512"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1515195316512"><td class="cellrowborder" rowspan="3" valign="top" width="17.611761176117614%" headers="mcps1.2.4.1.1 "><p id="p19504150872"><a name="p19504150872"></a><a name="p19504150872"></a>Syntax</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.1 "><p id="p115159531754"><a name="p115159531754"></a><a name="p115159531754"></a>CREATE MODEL</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.4.1.2 "><p id="p145158539515"><a name="p145158539515"></a><a name="p145158539515"></a>Creates a model, trains it, and saves the model.</p>
</td>
</tr>
<tr id="row25156530514"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p151514531158"><a name="p151514531158"></a><a name="p151514531158"></a>PREDICT BY</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p14515653550"><a name="p14515653550"></a><a name="p14515653550"></a>Uses an existing model for prediction.</p>
</td>
</tr>
<tr id="row13741510114417"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p3374181094418"><a name="p3374181094418"></a><a name="p3374181094418"></a>DROP MODEL</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p8374151016444"><a name="p8374151016444"></a><a name="p8374151016444"></a>Deletes a model.</p>
</td>
</tr>
<tr id="row135154531653"><td class="cellrowborder" rowspan="3" valign="top" width="17.611761176117614%" headers="mcps1.2.4.1.1 "><p id="p3365997714"><a name="p3365997714"></a><a name="p3365997714"></a>Keyword</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.1 "><p id="p1351515318511"><a name="p1351515318511"></a><a name="p1351515318511"></a>TARGET</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.4.1.2 "><p id="p251565313519"><a name="p251565313519"></a><a name="p251565313519"></a>Target column name of a training or prediction task.</p>
</td>
</tr>
<tr id="row15154534510"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1151513531457"><a name="p1151513531457"></a><a name="p1151513531457"></a>FEATURES</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1151511536520"><a name="p1151511536520"></a><a name="p1151511536520"></a>Data feature column name of a training or prediction task.</p>
</td>
</tr>
<tr id="row125158536519"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p751513533518"><a name="p751513533518"></a><a name="p751513533518"></a>MODEL</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p651535310516"><a name="p651535310516"></a><a name="p651535310516"></a>Model name of a training task.</p>
</td>
</tr>
</tbody>
</table>

## Usage Guide<a name="section061917401992"></a>

1.  Introduce the algorithms supported in this version.

    The DB4AI of the current version supports the following new algorithms:

    **Table  2**  Supported algorithms

    <a name="table2309104416318"></a>
    <table><thead align="left"><tr id="row1030934417314"><th class="cellrowborder" valign="top" width="32.86%" id="mcps1.2.3.1.1"><p id="p030913440314"><a name="p030913440314"></a><a name="p030913440314"></a>Optimization Algorithm</p>
    </th>
    <th class="cellrowborder" valign="top" width="67.14%" id="mcps1.2.3.1.2"><p id="p13309944937"><a name="p13309944937"></a><a name="p13309944937"></a>Algorithm</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row154949448113"><td class="cellrowborder" rowspan="5" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="p130911441335"><a name="p130911441335"></a><a name="p130911441335"></a>GD</p>
    </td>
    <td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="p17494164491110"><a name="p17494164491110"></a><a name="p17494164491110"></a>logistic_regression</p>
    </td>
    </tr>
    <tr id="row20357114141110"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p43573419110"><a name="p43573419110"></a><a name="p43573419110"></a>linear_regression</p>
    </td>
    </tr>
    <tr id="row04603611119"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p6461136141112"><a name="p6461136141112"></a><a name="p6461136141112"></a>svm_classification</p>
    </td>
    </tr>
    <tr id="row1130911441533"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p33091044834"><a name="p33091044834"></a><a name="p33091044834"></a>PCA</p>
    </td>
    </tr>
    <tr id="row73091544231"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p93101844238"><a name="p93101844238"></a><a name="p93101844238"></a>multiclass</p>
    </td>
    </tr>
    <tr id="row1634811267127"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="p1234852611129"><a name="p1234852611129"></a><a name="p1234852611129"></a>Kmeans</p>
    </td>
    <td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="p0348926141218"><a name="p0348926141218"></a><a name="p0348926141218"></a>kmeans</p>
    </td>
    </tr>
    <tr id="row1731017441430"><td class="cellrowborder" rowspan="4" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="p163106441339"><a name="p163106441339"></a><a name="p163106441339"></a>xgboost</p>
    </td>
    <td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="p077417532818"><a name="p077417532818"></a><a name="p077417532818"></a>xgboost_regression_logistic</p>
    </td>
    </tr>
    <tr id="row2310114419317"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p06965187917"><a name="p06965187917"></a><a name="p06965187917"></a>xgboost_binary_logistic</p>
    </td>
    </tr>
    <tr id="row153108447319"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p1785211174919"><a name="p1785211174919"></a><a name="p1785211174919"></a>xgboost_regression_squarederror</p>
    </td>
    </tr>
    <tr id="row2310154413311"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="p1059871610913"><a name="p1059871610913"></a><a name="p1059871610913"></a>xgboost_regression_gamma</p>
    </td>
    </tr>
    </tbody>
    </table>

2.  Learn about the model training syntax.
    -   CREATE MODEL

        You can run the  **CREATE MODEL**  statement to create and train a model. This SQL statement uses the public Iris dataset for model training.

    -   The following uses multiclass as an example to describe how to train a model. Specify  **sepal\_length**,  **sepal\_width**,  **petal\_length**, and  **petal\_width**  as feature columns in the  **tb\_iris**  training set, and use the multiclass algorithm to create and save the  **iris\_classification\_model**  model.

        ```
        openGauss=# CREATE MODEL iris_classification_model USING xgboost_regression_logistic FEATURES sepal_length, sepal_width,petal_length,petal_width TARGET target_type < 2 FROM tb_iris_1 WITH nthread=4, max_depth=8;
        MODEL CREATED. PROCESSED 1
        ```

        In the preceding command:

        -   The  **CREATE MODEL**  statement is used to train and save a model.
        -   **USING**  specifies the algorithm name.
        -   **FEATURES**  specifies the features of the training model and needs to be added based on the column name of the training data table.
        -   **TARGET**  specifies the training target of the model. It can be the column name of the data table required for training or an expression, for example,  **price \> 10000**.
        -   **WITH**  specifies the hyperparameters used for model training. When the hyperparameter is not set by the user, the framework uses the default value.

            The framework supports various hyperparameter combinations for different operators.

            **Table  3**  Hyperparameters supported by operators

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
            <tr id="row9842151272415"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p11842131202419"><a name="p11842131202419"></a><a name="p11842131202419"></a>GD(pca)</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p198421212162410"><a name="p198421212162410"></a><a name="p198421212162410"></a>batch_size(int);max_iterations(int);max_seconds(int);tolerance(float8);verbose(bool);number_components(int);seed(int)</p>
            </td>
            </tr>
            <tr id="row10290172232413"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p4290162219245"><a name="p4290162219245"></a><a name="p4290162219245"></a>GD(multiclass)</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p229017224241"><a name="p229017224241"></a><a name="p229017224241"></a>classifier(char*)</p>
            <p id="p43811152162519"><a name="p43811152162519"></a><a name="p43811152162519"></a>Note: Other hyperparameter types of multiclass depend on the categories in the selected classifier.</p>
            </td>
            </tr>
            <tr id="row38071217122412"><td class="cellrowborder" valign="top" width="35.49%" headers="mcps1.2.3.1.1 "><p id="p17807161712416"><a name="p17807161712416"></a><a name="p17807161712416"></a>xgboost_regression_logistic, xgboost_binary_logistic, xgboost_regression_squarederror, and xgboost_regression_gamma</p>
            </td>
            <td class="cellrowborder" valign="top" width="64.51%" headers="mcps1.2.3.1.2 "><p id="p080712177244"><a name="p080712177244"></a><a name="p080712177244"></a>batch_size(int);booster(char*);tree_method(char*);eval_metric(char*);seed(int);nthread(int);max_depth(int);gamma(float8);eta(float8);min_child_weight(int);verbosity(int)</p>
            </td>
            </tr>
            </tbody>
            </table>

            The default value and value range of each hyperparameter are as follows:

            **Table  4**  Default values and value ranges of hyperparameters

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
            <tbody><tr id="row768911521608"><td class="cellrowborder" rowspan="16" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p350715953414"><a name="p350715953414"></a><a name="p350715953414"></a>GD:</p>
            <p id="p1635518819355"><a name="p1635518819355"></a><a name="p1635518819355"></a>logistic_regression, linear_regression, svm_classification, and pca</p>
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
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1268945210013"><a name="p1268945210013"></a><a name="p1268945210013"></a>(0, 10000]</p>
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
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p76892521602"><a name="p76892521602"></a><a name="p76892521602"></a>(0, 1048575]</p>
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
            <tr id="row17283176201716"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p828356141716"><a name="p828356141716"></a><a name="p828356141716"></a>just for linear, SVM: kernel = "linear"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p428396131717"><a name="p428396131717"></a><a name="p428396131717"></a>linear/gaussian/polynomial</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p728306131714"><a name="p728306131714"></a><a name="p728306131714"></a>Kernel function</p>
            </td>
            </tr>
            <tr id="row6867132181713"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1286716218174"><a name="p1286716218174"></a><a name="p1286716218174"></a>just for linear, SVM: components = MAX(2*features, 128)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p18868122161711"><a name="p18868122161711"></a><a name="p18868122161711"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1986819210175"><a name="p1986819210175"></a><a name="p1986819210175"></a>Number of high-dimension space dimensions</p>
            </td>
            </tr>
            <tr id="row1178015917164"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p6780125911169"><a name="p6780125911169"></a><a name="p6780125911169"></a>just for linear, SVM: gamma = 0.5</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p07801559191618"><a name="p07801559191618"></a><a name="p07801559191618"></a>(0,DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p6780165915165"><a name="p6780165915165"></a><a name="p6780165915165"></a>Gaussian kernel function parameter</p>
            </td>
            </tr>
            <tr id="row13597656101618"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1859711568164"><a name="p1859711568164"></a><a name="p1859711568164"></a>just for linear, SVM: degree = 2</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1359713564162"><a name="p1359713564162"></a><a name="p1359713564162"></a>[2, 9]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p135975566164"><a name="p135975566164"></a><a name="p135975566164"></a>Polynomial kernel function parameter</p>
            </td>
            </tr>
            <tr id="row151874357167"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1318783515168"><a name="p1318783515168"></a><a name="p1318783515168"></a>just for linear, SVM: coef0 = 1.0</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p618713521610"><a name="p618713521610"></a><a name="p618713521610"></a>[0, DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p218717353166"><a name="p218717353166"></a><a name="p218717353166"></a>Polynomial kernel function parameter</p>
            </td>
            </tr>
            <tr id="row1852014830"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1452084430"><a name="p1452084430"></a><a name="p1452084430"></a>just for SVM:lambda = 0.01</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p175201044311"><a name="p175201044311"></a><a name="p175201044311"></a>(0,DOUBLE_MAX_VALUE)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1949211917195"><a name="p1949211917195"></a><a name="p1949211917195"></a>Regularization parameter</p>
            </td>
            </tr>
            <tr id="row44812583268"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p848120587267"><a name="p848120587267"></a><a name="p848120587267"></a>just for pca: number_components</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p34811658172614"><a name="p34811658172614"></a><a name="p34811658172614"></a>(0, INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19481205882617"><a name="p19481205882617"></a><a name="p19481205882617"></a>Target dimension after dimension reduction</p>
            </td>
            </tr>
            <tr id="row185377442710"><td class="cellrowborder" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p1828645213414"><a name="p1828645213414"></a><a name="p1828645213414"></a>GD:</p>
            <p id="p1053824132714"><a name="p1053824132714"></a><a name="p1053824132714"></a>multiclass</p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p25388432714"><a name="p25388432714"></a><a name="p25388432714"></a>classifier="svm_classification"</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p1253844162714"><a name="p1253844162714"></a><a name="p1253844162714"></a>svm_classification\logistic_regression</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p105383411274"><a name="p105383411274"></a><a name="p105383411274"></a>Classifier for multiclass tasks</p>
            </td>
            </tr>
            <tr id="row795511114310"><td class="cellrowborder" rowspan="9" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p21721416583"><a name="p21721416583"></a><a name="p21721416583"></a>K-Means</p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p1695551116310"><a name="p1695551116310"></a><a name="p1695551116310"></a>max_iterations = 10</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p495501116310"><a name="p495501116310"></a><a name="p495501116310"></a>[1, 10000]</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p1492131911910"><a name="p1492131911910"></a><a name="p1492131911910"></a>Maximum iterations</p>
            </td>
            </tr>
            <tr id="row568119236"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p136811191430"><a name="p136811191430"></a><a name="p136811191430"></a>num_centroids = 10</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1668111916316"><a name="p1668111916316"></a><a name="p1668111916316"></a>[1, 1000000]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p2492151951911"><a name="p2492151951911"></a><a name="p2492151951911"></a>Number of clusters</p>
            </td>
            </tr>
            <tr id="row1133613181825"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p193362181425"><a name="p193362181425"></a><a name="p193362181425"></a>tolerance = 0.00001</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p13336201813220"><a name="p13336201813220"></a><a name="p13336201813220"></a>(0,1]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p549341912192"><a name="p549341912192"></a><a name="p549341912192"></a>Central point error</p>
            </td>
            </tr>
            <tr id="row17177771132"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p317713714311"><a name="p317713714311"></a><a name="p317713714311"></a>batch_size = 10</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p171771474313"><a name="p171771474313"></a><a name="p171771474313"></a>[1, 1048575]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p8493219141910"><a name="p8493219141910"></a><a name="p8493219141910"></a>Number of data records selected per training</p>
            </td>
            </tr>
            <tr id="row35347279220"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p14534162718220"><a name="p14534162718220"></a><a name="p14534162718220"></a>num_features = 2</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1953414271211"><a name="p1953414271211"></a><a name="p1953414271211"></a>[1, INT_MAX_VALUE]</p>
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
            <tr id="row13531411115315"><td class="cellrowborder" rowspan="12" valign="top" width="16.04%" headers="mcps1.2.5.1.1 "><p id="p364643816349"><a name="p364643816349"></a><a name="p364643816349"></a>xgboost:</p>
            <p id="p739164773415"><a name="p739164773415"></a><a name="p739164773415"></a>xgboost_regression_logistic,</p>
            <p id="p1394711429355"><a name="p1394711429355"></a><a name="p1394711429355"></a>xgboost_binary_logistic,</p>
            <p id="p7152184416352"><a name="p7152184416352"></a><a name="p7152184416352"></a>xgboost_regression_gamma, and xgboost_regression_squarederror</p>
            </td>
            <td class="cellrowborder" valign="top" width="35.28%" headers="mcps1.2.5.1.2 "><p id="p1553271105312"><a name="p1553271105312"></a><a name="p1553271105312"></a>n_iter=10</p>
            </td>
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.3 "><p id="p75321611105318"><a name="p75321611105318"></a><a name="p75321611105318"></a>(0, 10000]</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.56%" headers="mcps1.2.5.1.4 "><p id="p18532711165316"><a name="p18532711165316"></a><a name="p18532711165316"></a>Iteration times</p>
            </td>
            </tr>
            <tr id="row10351101833113"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p11351171873119"><a name="p11351171873119"></a><a name="p11351171873119"></a>batch_size=10000</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p14351151814311"><a name="p14351151814311"></a><a name="p14351151814311"></a>(0, 1048575]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p33515188318"><a name="p33515188318"></a><a name="p33515188318"></a>Number of data records selected per training</p>
            </td>
            </tr>
            <tr id="row72351244193113"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p72358445312"><a name="p72358445312"></a><a name="p72358445312"></a>booster="gbtree"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p223510448318"><a name="p223510448318"></a><a name="p223510448318"></a>gbtree\gblinear\dart</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19235114419311"><a name="p19235114419311"></a><a name="p19235114419311"></a>Booster type</p>
            </td>
            </tr>
            <tr id="row487213793218"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p587219773212"><a name="p587219773212"></a><a name="p587219773212"></a>tree_method="auto"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p168723763213"><a name="p168723763213"></a><a name="p168723763213"></a>auto\exact\approx\hist\gpu_hist</p>
            <p id="p915875210126"><a name="p915875210126"></a><a name="p915875210126"></a>Note: To use the <strong id="b24942024131711"><a name="b24942024131711"></a><a name="b24942024131711"></a>gpu_hist</strong> parameter, you must configure a GPU library. Otherwise, the DB4AI platform does not support this value.</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p68721072329"><a name="p68721072329"></a><a name="p68721072329"></a>Tree construction algorithm</p>
            </td>
            </tr>
            <tr id="row134301154103110"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p24301054163112"><a name="p24301054163112"></a><a name="p24301054163112"></a>eval_metric="rmse"</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p64300547311"><a name="p64300547311"></a><a name="p64300547311"></a>rmse\rmsle\map\mae\auc\aucpr</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p64301548319"><a name="p64301548319"></a><a name="p64301548319"></a>Data verification metric</p>
            </td>
            </tr>
            <tr id="row62761527322"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p122762219322"><a name="p122762219322"></a><a name="p122762219322"></a>seed=0</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p32769283210"><a name="p32769283210"></a><a name="p32769283210"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p1627672193213"><a name="p1627672193213"></a><a name="p1627672193213"></a>Seed</p>
            </td>
            </tr>
            <tr id="row32974523217"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p329719593219"><a name="p329719593219"></a><a name="p329719593219"></a>nthread=1</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p6297252326"><a name="p6297252326"></a><a name="p6297252326"></a>[0, 100]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p2297459325"><a name="p2297459325"></a><a name="p2297459325"></a>Concurrency</p>
            </td>
            </tr>
            <tr id="row9142155193110"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p1314214519315"><a name="p1314214519315"></a><a name="p1314214519315"></a>max_depth=5</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p11142175143110"><a name="p11142175143110"></a><a name="p11142175143110"></a>(0, MAX_MEMORY_LIMIT]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p11142851173116"><a name="p11142851173116"></a><a name="p11142851173116"></a>Maximum depth of the tree. This parameter is valid only for the tree booster.</p>
            </td>
            </tr>
            <tr id="row743394833111"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p11433184816315"><a name="p11433184816315"></a><a name="p11433184816315"></a>gamma=0.0</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1943312482316"><a name="p1943312482316"></a><a name="p1943312482316"></a>[0, DOUBLE_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p18433124813316"><a name="p18433124813316"></a><a name="p18433124813316"></a>Minimum loss required for further partitioning on leaf nodes</p>
            </td>
            </tr>
            <tr id="row1078320578313"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p0783857123110"><a name="p0783857123110"></a><a name="p0783857123110"></a>eta=0.3</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1078313576317"><a name="p1078313576317"></a><a name="p1078313576317"></a>[0, 1]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p87831657183119"><a name="p87831657183119"></a><a name="p87831657183119"></a>Step used in the update to prevent overfitting</p>
            </td>
            </tr>
            <tr id="row104106390315"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p941033993115"><a name="p941033993115"></a><a name="p941033993115"></a>min_child_weight=1</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p141083913115"><a name="p141083913115"></a><a name="p141083913115"></a>[0,INT_MAX_VALUE]</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p3410203913111"><a name="p3410203913111"></a><a name="p3410203913111"></a>Minimum sum of instance weights required by child nodes</p>
            </td>
            </tr>
            <tr id="row99731829193410"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p199731429103412"><a name="p199731429103412"></a><a name="p199731429103412"></a>verbosity=1</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p1397322923415"><a name="p1397322923415"></a><a name="p1397322923415"></a>0 (silent)\1 (warning)\2 (info)\3 (debug)</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p19973112910346"><a name="p19973112910346"></a><a name="p19973112910346"></a>Printing level</p>
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

    The model details are stored in the system catalog in binary mode. You can use the  **gs\_explain\_model**  function to view the model details. The statement is as follows:

    ```
    openGauss=# select * from gs_explain_model("iris_classification_model");
     DB4AI MODEL
    -------------------------------------------------------------
     Name: iris_classification_model
     Algorithm: xgboost_regression_logistic
     Query: CREATE MODEL iris_classification_model
     USING xgboost_regression_logistic
     FEATURES sepal_length, sepal_width,petal_length,petal_width
     TARGET target_type < 2
     FROM tb_iris_1
     WITH nthread=4, max_depth=8;
     Return type: Float64
     Pre-processing time: 0.000000
     Execution time: 0.001443
     Processed tuples: 78
     Discarded tuples: 0
     n_iter: 10
     batch_size: 10000
     max_depth: 8
     min_child_weight: 1
     gamma: 0.0000000000
     eta: 0.3000000000
     nthread: 4
     verbosity: 1
     seed: 0
     booster: gbtree
     tree_method: auto
     eval_metric: rmse
     rmse: 0.2648450136
     model size: 4613
    ```

4.  Use an existing model to perform a prediction task.

    Use the  **SELECT**  and  **PREDICT BY**  keywords to complete the prediction task based on the existing model.

    Query syntax: SELECT... PREDICT BY... \(FEATURES...\)... FROM...;

    ```
    openGauss=# SELECT id, PREDICT BY iris_classification (FEATURES sepal_length,sepal_width,petal_length,petal_width) as "PREDICT" FROM tb_iris limit 3;
     
    id  | PREDICT
    -----+---------
      84 |       2
      85 |       0
      86 |       0
    (3 rows)
    ```

    For the same prediction task, the results of the same model are stable. In addition, models trained based on the same hyperparameter and training set are stable. AI model training is random \(random gradient descent of data distribution each batch\). Therefore, the computing performance and results of different models can vary slightly.

5.  View the execution plan.

    You can use the  **EXPLAIN**  statement to analyze the execution plan in the model training or prediction process of  **CREATE MODEL**  and  **PREDICT BY**. The keyword  **EXPLAIN**  can be followed by a  **CREATE MODEL**  or  **PREDICT BY**  clause or an optional parameter. The supported parameters are as follows:

    **Table  5**  Parameters supported by EXPLAIN

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
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14576203713347"><a name="p14576203713347"></a><a name="p14576203713347"></a>Boolean variable, which is unavailable</p>
    </td>
    </tr>
    <tr id="row1257603714348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p857623743413"><a name="p857623743413"></a><a name="p857623743413"></a>NODES</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p157633733410"><a name="p157633733410"></a><a name="p157633733410"></a>Boolean variable, which is unavailable</p>
    </td>
    </tr>
    <tr id="row195765377349"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p0576193712347"><a name="p0576193712347"></a><a name="p0576193712347"></a>NUM_NODES</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1576337113416"><a name="p1576337113416"></a><a name="p1576337113416"></a>Boolean variable, which is unavailable</p>
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
                                   QUERY PLAN
    -------------------------------------------------------------------------
     Train Model - logistic_regression  (cost=0.00..0.00 rows=0 width=0)
       ->  Materialize  (cost=0.00..41.08 rows=1776 width=12)
             ->  Seq Scan on patients  (cost=0.00..32.20 rows=1776 width=12)
    (3 rows)
    ```

6.  Perform troubleshooting in case of exceptions.
    -   Training phase
        -   Scenario 1: When the value of the hyperparameter exceeds the value range, the model training fails and an error message is returned. For example:

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET trait_anxiety  FROM patients WITH optimizer='aa';
            ERROR:  Invalid hyperparameter value for optimizer. Valid values are: gd, ngd.
            ```

        -   Scenario 2: If the model name already exists, the model fails to be saved, and an error message with the cause is displayed. For example:

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET trait_anxiety  FROM patients;
            ERROR:  The model name "patient_linear_regression" already exists in gs_model_warehouse.
            ```

        -   Scenario 3: If the value in the  **FEATURE**  or  **TARGETS**  column is  **\***, an error message with the cause is displayed. For example:

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES *  TARGET trait_anxiety  FROM patients;
            ERROR:  FEATURES clause cannot be *
            -----------------------------------------------------------------------------------------------------------------------
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment TARGET *  FROM patients;
            ERROR:  TARGET clause cannot be *
            ```

        -   Scenario 4: If the keyword  **TARGET**  is used in the unsupervised learning method or is not applicable to the supervised learning method, an error message with the cause is displayed. For example:

            ```
            openGauss=# CREATE MODEL patient_linear_regression USING linear_regression FEATURES second_attack,treatment FROM patients;
            ERROR:  Supervised ML algorithms require TARGET clause
            -----------------------------------------------------------------------------------------------------------------------------
            CREATE MODEL patient_linear_regression USING linear_regression TARGET trait_anxiety  FROM patients;   
            ERROR:  Supervised ML algorithms require FEATURES clause
            ```

        -   Scenario 5: If there is only one category in the  **TARGET**  column, an error message with the cause is displayed. For example:

            ```
            openGauss=# CREATE MODEL ecoli_svmc USING multiclass FEATURES f1, f2, f3, f4, f5, f6, f7 TARGET cat FROM (SELECT * FROM db4ai_ecoli WHERE cat='cp');
            ERROR:  At least two categories are needed
            ```

        -   Scenario 6: DB4AI filters out data that contains null values during training. When the model data involved in training is null, an error message with the cause is displayed. For example:

            ```
            openGauss=# create model iris_classification_model using xgboost_regression_logistic features message_regular target error_level from error_code;
            ERROR:  Training data is empty, please check the input data.
            ```

        -   Scenario 7: The DB4AI algorithm has restrictions on the supported data types. If the data type is not in the whitelist, an error message is returned and the invalid OID is displayed. You can check the OID in  **pg\_type**  to determine the invalid data type. For example:

            ```
            openGauss=# CREATE MODEL ecoli_svmc USING multiclass FEATURES f1, f2, f3, f4, f5, f6, f7, cat TARGET cat FROM db4ai_ecoli ;
            ERROR:  Oid type 1043 not yet supported
            ```

        -   Scenario 8: If the GUC parameter  **statement\_timeout**  is set, the statement that is executed due to training timeout will be terminated. In this case, execute the  **CREATE MODEL**  statement. Parameters such as the size of the training set, number of training rounds \(**iteration**\), early termination conditions \(**tolerance**  and  **max\_seconds**\), and number of parallel threads \(**nthread**\) affect the training duration. When the duration exceeds the database limit, the statement execution is terminated and model training fails.

    -   Model parsing
        -   Scenario 9: If the model name cannot be found in the system catalog, an error message with the cause is displayed. For example:

            ```
            openGauss=# select gs_explain_model("ecoli_svmc");
            ERROR:  column "ecoli_svmc" does not exist
            ```

    -   Prediction phase
        -   Scenario 10: If the model name cannot be found in the system catalog, an error message with the cause is displayed. For example:

            ```
            openGauss=# select id, PREDICT BY patient_logistic_regression (FEATURES second_attack,treatment) FROM patients;
            ERROR:  There is no model called "patient_logistic_regression".
            ```

        -   Scenario 11: If the data dimension and data type of the  **FEATURES**  task are inconsistent with those of the training set, an error message with the cause is displayed. For example:

            ```
            openGauss=# select id, PREDICT BY patient_linear_regression (FEATURES second_attack) FROM patients;
            ERROR:  Invalid number of features for prediction, provided 1, expected 2
            CONTEXT:  referenced column: patient_linear_regression_pred
            -------------------------------------------------------------------------------------------------------------------------------------
            openGauss=# select id, PREDICT BY patient_linear_regression (FEATURES 1,second_attack,treatment) FROM patients;
            ERROR:  Invalid number of features for prediction, provided 3, expected 2
            CONTEXT:  referenced column: patient_linear_regression_pre
            ```




>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The DB4AI feature requires data access for computing and is not applicable to encrypted databases.

