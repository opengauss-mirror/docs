# Overview<a name="EN-US_TOPIC_0300593882"></a>

DeepSQL is an enhancement to openGauss DB4AI. DeepSQL encapsulates common machine learning algorithms into SQL statements and supports more than 60 general algorithms, including regression algorithms \(such as linear regression, logistic regression, and random forest\), classification algorithms \(such as KNN\), and clustering algorithms \(such as K-means\). In addition to basic machine learning algorithms, graph-related algorithms are also included, such as algorithms about the shortest path and graph diameter. Also, it supports data processing \(such as PCA\), sparse vectors, common statistical algorithms \(such as covariance and Pearson coefficient calculation\), training set and test set segmentation, and cross validation.

**Table  1**  Supported machine learning algorithms: regression algorithms

<a name="table1794330112214"></a>
<table><thead align="left"><tr id="row1494103011222"><th class="cellrowborder" valign="top" width="10.63%" id="mcps1.2.4.1.1"><p id="p169553092218"><a name="p169553092218"></a><a name="p169553092218"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.31%" id="mcps1.2.4.1.2"><p id="p39583014222"><a name="p39583014222"></a><a name="p39583014222"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="72.06%" id="mcps1.2.4.1.3"><p id="p795143042218"><a name="p795143042218"></a><a name="p795143042218"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row129512301228"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p169593017220"><a name="p169593017220"></a><a name="p169593017220"></a>Logistic regression</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p1295123062219"><a name="p1295123062219"></a><a name="p1295123062219"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p12106913288"><a name="p12106913288"></a><a name="p12106913288"></a>For example, find the risk factors of a disease, or evaluate enterprises for financial and commercial institutions.</p>
<p id="p1471750153017"><a name="p1471750153017"></a><a name="p1471750153017"></a>Prediction: Use a model to predict the occurrence probabilities of a disease or situation under different independent variables.</p>
<p id="p11101797280"><a name="p11101797280"></a><a name="p11101797280"></a>Judgment: Use a model to determine the probability that a person has certain diseases or be in certain situations.</p>
</td>
</tr>
<tr id="row19954304220"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p199517305227"><a name="p199517305227"></a><a name="p199517305227"></a>Cox proportional hazards regression</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p5959307228"><a name="p5959307228"></a><a name="p5959307228"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p1395143015227"><a name="p1395143015227"></a><a name="p1395143015227"></a>The model takes the survival result and the survival time as dependent variables, can analyze the influence of many factors on the survival time simultaneously, and can analyze the data with the truncated survival time, without the need of estimating the distribution type of the data. Because of the preceding excellent properties, this model has been widely used in medical research since its inception, and is the most widely used multi-factor analysis method in survival analysis.</p>
</td>
</tr>
<tr id="row19950302221"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p49543032219"><a name="p49543032219"></a><a name="p49543032219"></a>Elastic net regularization</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p595163022218"><a name="p595163022218"></a><a name="p595163022218"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p49520308229"><a name="p49520308229"></a><a name="p49520308229"></a>Elastic regression is a hybrid technique of ridge regression and lasso regression, which uses L2 and L1 regularization at the same time. When there are multiple related features, the lasso regression is likely to randomly select one of them, while the elastic regression is likely to select all of them.</p>
</td>
</tr>
<tr id="row99643082210"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p2964306229"><a name="p2964306229"></a><a name="p2964306229"></a>Generalized linear model</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p189633042214"><a name="p189633042214"></a><a name="p189633042214"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p14961730122210"><a name="p14961730122210"></a><a name="p14961730122210"></a>In some practical problems, the relationship between variables is not always linear. In this case, curves should be used for fitting.</p>
</td>
</tr>
<tr id="row696630162212"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p2962306221"><a name="p2962306221"></a><a name="p2962306221"></a>Marginal effect</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p296143022217"><a name="p296143022217"></a><a name="p296143022217"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p1496153019227"><a name="p1496153019227"></a><a name="p1496153019227"></a>Calculation of marginal effects.</p>
</td>
</tr>
<tr id="row209683011222"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p9961130152214"><a name="p9961130152214"></a><a name="p9961130152214"></a>Multinomial regression</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p1896730102219"><a name="p1896730102219"></a><a name="p1896730102219"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p296133011221"><a name="p296133011221"></a><a name="p296133011221"></a>If there are more than two target categories, multinomial regression is required. For example, evaluate the curative effect with "ineffective", "effective", and "cured".</p>
</td>
</tr>
<tr id="row1296193022217"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p1296113022217"><a name="p1296113022217"></a><a name="p1296113022217"></a>Ordinal regression</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p7969307224"><a name="p7969307224"></a><a name="p7969307224"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p59743019228"><a name="p59743019228"></a><a name="p59743019228"></a>In statistics, ordinal regression is a regression analysis used to predict ordinal variables. That is, the values of variables are within any range, and the metric distances between different values are different. It can be considered as an issue between regression and classification. Examples include the severity of illness (levels 1, 2, 3, and 4), the pain scale (no pain, mild, moderate, and severe), and the drug dose-response effects (ineffective, less effective, effective, and very effective). The difference between levels is not necessarily equal, for example, the difference between no pain and mild is not necessarily equal to the difference between moderate and severe.</p>
</td>
</tr>
<tr id="row1175543110251"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p197565312259"><a name="p197565312259"></a><a name="p197565312259"></a>Clustered variance</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p475618318256"><a name="p475618318256"></a><a name="p475618318256"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p1175673162515"><a name="p1175673162515"></a><a name="p1175673162515"></a>The clustered variance module adjusts the standard error of clustering. For example, when a dataset is copied 100 times, precision of parameter estimation should not be increased, but execution of this process in compliance with an independent identically distributed (IID) assumption actually improves precision.</p>
</td>
</tr>
<tr id="row184031335122518"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p1540483514253"><a name="p1540483514253"></a><a name="p1540483514253"></a>Robust variance</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p194046356251"><a name="p194046356251"></a><a name="p194046356251"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p24041635122515"><a name="p24041635122515"></a><a name="p24041635122515"></a>The functions in the robust variance module are used to compute the robust variance (Huber-White estimator) of linear regression, logistic regression, multinomial logistic regression, and Cox proportional hazard regression (Huber-White estimation). They can be used to compute differences of data in datasets with potential anomalous noises.</p>
</td>
</tr>
<tr id="row1293444012256"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p1993516408256"><a name="p1993516408256"></a><a name="p1993516408256"></a>Support vector machine</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p8935540142519"><a name="p8935540142519"></a><a name="p8935540142519"></a>SVM</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p29631481307"><a name="p29631481307"></a><a name="p29631481307"></a>Compared with traditional query optimization schemes, SVM can obtain higher query accuracy for text and hypertext classification and image classification. This also applies to image segmentation systems.</p>
</td>
</tr>
<tr id="row13892174622516"><td class="cellrowborder" valign="top" width="10.63%" headers="mcps1.2.4.1.1 "><p id="p889284610252"><a name="p889284610252"></a><a name="p889284610252"></a>Linear regression</p>
</td>
<td class="cellrowborder" valign="top" width="17.31%" headers="mcps1.2.4.1.2 "><p id="p889215469259"><a name="p889215469259"></a><a name="p889215469259"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.06%" headers="mcps1.2.4.1.3 "><p id="p1889294692517"><a name="p1889294692517"></a><a name="p1889294692517"></a>This is widely used in economics and finance.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Supported machine learning algorithms: other supervised learning

<a name="table185531692118"></a>
<table><thead align="left"><tr id="row8553560216"><th class="cellrowborder" valign="top" width="10.83108310831083%" id="mcps1.2.4.1.1"><p id="p364762072111"><a name="p364762072111"></a><a name="p364762072111"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.84168416841684%" id="mcps1.2.4.1.2"><p id="p764772052117"><a name="p764772052117"></a><a name="p764772052117"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="72.32723272327232%" id="mcps1.2.4.1.3"><p id="p1664702092111"><a name="p1664702092111"></a><a name="p1664702092111"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row145532692113"><td class="cellrowborder" valign="top" width="10.83108310831083%" headers="mcps1.2.4.1.1 "><p id="p7553664212"><a name="p7553664212"></a><a name="p7553664212"></a>Decision tree</p>
</td>
<td class="cellrowborder" valign="top" width="16.84168416841684%" headers="mcps1.2.4.1.2 "><p id="p2055318652113"><a name="p2055318652113"></a><a name="p2055318652113"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p0553126132113"><a name="p0553126132113"></a><a name="p0553126132113"></a>It is one of the most widely used inductive inference algorithms. It handles the classification and prediction problems of category or continuous variables. The model can be represented by graphs and if-then rules, which is highly readable.</p>
</td>
</tr>
<tr id="row185532612214"><td class="cellrowborder" valign="top" width="10.83108310831083%" headers="mcps1.2.4.1.1 "><p id="p65531469212"><a name="p65531469212"></a><a name="p65531469212"></a>Random forest</p>
</td>
<td class="cellrowborder" valign="top" width="16.84168416841684%" headers="mcps1.2.4.1.2 "><p id="p35531363219"><a name="p35531363219"></a><a name="p35531363219"></a>RF</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p45531766218"><a name="p45531766218"></a><a name="p45531766218"></a>Random forest is a kind of combinatorial method specially designed for decision tree classifier. It combines multiple decision trees to make predictions.</p>
</td>
</tr>
<tr id="row115546662119"><td class="cellrowborder" valign="top" width="10.83108310831083%" headers="mcps1.2.4.1.1 "><p id="p55541682116"><a name="p55541682116"></a><a name="p55541682116"></a>Conditional random field</p>
</td>
<td class="cellrowborder" valign="top" width="16.84168416841684%" headers="mcps1.2.4.1.2 "><p id="p1655416112114"><a name="p1655416112114"></a><a name="p1655416112114"></a>CRF</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p1555416617212"><a name="p1555416617212"></a><a name="p1555416617212"></a>CRF is a discriminant graphic model with undirected probability. A linear chain CRF is a special type of CRF that assumes that the current state depends only on the previous state. Good results have been obtained in sequence annotation tasks such as word segmentation, part-of-speech tagging, and named entity recognition.</p>
</td>
</tr>
<tr id="row7554166102116"><td class="cellrowborder" valign="top" width="10.83108310831083%" headers="mcps1.2.4.1.1 "><p id="p125541769218"><a name="p125541769218"></a><a name="p125541769218"></a>Naive Bayes</p>
</td>
<td class="cellrowborder" valign="top" width="16.84168416841684%" headers="mcps1.2.4.1.2 "><p id="p1055486132118"><a name="p1055486132118"></a><a name="p1055486132118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p55547617215"><a name="p55547617215"></a><a name="p55547617215"></a>Classification by calculating probabilities can be used to deal with multi-classification issues, such as spam filters.</p>
</td>
</tr>
<tr id="row1554561212"><td class="cellrowborder" valign="top" width="10.83108310831083%" headers="mcps1.2.4.1.1 "><p id="p2554136142117"><a name="p2554136142117"></a><a name="p2554136142117"></a>Neural network</p>
</td>
<td class="cellrowborder" valign="top" width="16.84168416841684%" headers="mcps1.2.4.1.2 "><p id="p195549692118"><a name="p195549692118"></a><a name="p195549692118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p1855419632112"><a name="p1855419632112"></a><a name="p1855419632112"></a>It has a wide range of application scenarios, such as speech recognition, image recognition, and machine translation. It is a standard supervised learning algorithm in the domain of pattern recognition, and continues to be a research subject in the domain of computational neurology. MLP has been proved to be a general function approximation method, which can be used to fit complex functions or solve classification problems.</p>
</td>
</tr>
<tr id="row10554186202111"><td class="cellrowborder" valign="top" width="10.83108310831083%" headers="mcps1.2.4.1.1 "><p id="p185546682110"><a name="p185546682110"></a><a name="p185546682110"></a>k-nearest neighbors</p>
</td>
<td class="cellrowborder" valign="top" width="16.84168416841684%" headers="mcps1.2.4.1.2 "><p id="p955411672118"><a name="p955411672118"></a><a name="p955411672118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="72.32723272327232%" headers="mcps1.2.4.1.3 "><p id="p16649165416515"><a name="p16649165416515"></a><a name="p16649165416515"></a>In the k-nearest neighbor classification method, a distance between each training sample and a to-be-classified sample is computed, and <em id="i154329803315"><a name="i154329803315"></a><a name="i154329803315"></a>K</em> training samples that are closest to the to-be-classified sample are selected. If training samples of a category in the <em id="i756317471333"><a name="i756317471333"></a><a name="i756317471333"></a>K</em> samples accounts for a majority, the to-be-classified tuple belongs to the category.</p>
<p id="p1655476152119"><a name="p1655476152119"></a><a name="p1655476152119"></a>It can be used for text recognition, facial recognition, gene pattern recognition, customer churn prediction, and fraud detection.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Supported machine learning algorithms: data processing algorithms

<a name="table89836408312"></a>
<table><thead align="left"><tr id="row14983174033118"><th class="cellrowborder" valign="top" width="10.04100410041004%" id="mcps1.2.4.1.1"><p id="p1528823212322"><a name="p1528823212322"></a><a name="p1528823212322"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.531853185318532%" id="mcps1.2.4.1.2"><p id="p8288183233219"><a name="p8288183233219"></a><a name="p8288183233219"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="71.42714271427141%" id="mcps1.2.4.1.3"><p id="p1528833233211"><a name="p1528833233211"></a><a name="p1528833233211"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row15983144033117"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p14984164013110"><a name="p14984164013110"></a><a name="p14984164013110"></a>Array operation</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p1498412404315"><a name="p1498412404315"></a><a name="p1498412404315"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p3156332123714"><a name="p3156332123714"></a><a name="p3156332123714"></a>Array and vector operations, including basic addition, subtraction, multiplication, and division, exponentiation, root extraction, cos, sin, absolute value, and variance.</p>
</td>
</tr>
<tr id="row1698419401319"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p1760602703311"><a name="p1760602703311"></a><a name="p1760602703311"></a>Principal component analysis for dimensionality reduction</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p132357253332"><a name="p132357253332"></a><a name="p132357253332"></a>PCA</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p2098413406315"><a name="p2098413406315"></a><a name="p2098413406315"></a>This is used to reduce dimensions and compute the principal component.</p>
</td>
</tr>
<tr id="row1998424015319"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p8984114043118"><a name="p8984114043118"></a><a name="p8984114043118"></a>Encoding categorical variable</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p79841740183110"><a name="p79841740183110"></a><a name="p79841740183110"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p64018265314"><a name="p64018265314"></a><a name="p64018265314"></a>Currently, the one-hot and dummy encoding technologies are supported.</p>
<p id="p815911224375"><a name="p815911224375"></a><a name="p815911224375"></a>When a specific group of prediction variables need to be compared with another group of prediction variables, dummy coding is usually used, and a group of variables compared with the group of prediction variables is referred to as a reference group. One-hot encoding is similar to dummy encoding, and a difference lies in that the one-hot encoding establishes a numeric type 0/1 indication column for each classification value. In each row of data (corresponding to one data point), a value of only one classification code column can be <strong id="b1986616733720"><a name="b1986616733720"></a><a name="b1986616733720"></a>1</strong>.</p>
</td>
</tr>
<tr id="row8984124012314"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p1698434014311"><a name="p1698434014311"></a><a name="p1698434014311"></a>Matrix operation</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p498414403313"><a name="p498414403313"></a><a name="p498414403313"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p117551051388"><a name="p117551051388"></a><a name="p117551051388"></a>Using matrix decomposition to decompose a large matrix into the product form of a simple matrix can greatly reduce the difficulty and volume of computation.</p>
<p id="p8984194016313"><a name="p8984194016313"></a><a name="p8984194016313"></a>Matrix addition, subtraction, multiplication, and division, extremum, mean, rank calculation, inversion, matrix decomposition (QR, LU, Cholesky), and feature extraction.</p>
</td>
</tr>
<tr id="row169845404312"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p8984154012311"><a name="p8984154012311"></a><a name="p8984154012311"></a>Norms and distance functions</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p7984104011317"><a name="p7984104011317"></a><a name="p7984104011317"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p898434083114"><a name="p898434083114"></a><a name="p898434083114"></a>This is used to compute the norm, cosine similarity, and distance between vectors.</p>
</td>
</tr>
<tr id="row798484016316"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p29841540163116"><a name="p29841540163116"></a><a name="p29841540163116"></a>Sparse vector</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p998417403315"><a name="p998417403315"></a><a name="p998417403315"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p2984740173113"><a name="p2984740173113"></a><a name="p2984740173113"></a>This is used to implement the sparse vector type. If there are a large number of repeated values in the vector, the vector can be compressed to save space.</p>
</td>
</tr>
<tr id="row10608101717341"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p16609517123412"><a name="p16609517123412"></a><a name="p16609517123412"></a>Pivot</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p11609161763412"><a name="p11609161763412"></a><a name="p11609161763412"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p360912171342"><a name="p360912171342"></a><a name="p360912171342"></a>Pivot tables are used to meet common row and column transposition requirements in OLAP or report systems. The pivot function can perform basic row-to-column conversion on data stored in a table and output the aggregation result to another table. It makes row and column conversion easier and more flexible.</p>
</td>
</tr>
<tr id="row1329632115341"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p12296821193415"><a name="p12296821193415"></a><a name="p12296821193415"></a>Path</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p18296192123413"><a name="p18296192123413"></a><a name="p18296192123413"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p14296152120348"><a name="p14296152120348"></a><a name="p14296152120348"></a>It performs regular pattern matching on a series of rows and extracts useful information about pattern matching. The useful information can be a simple match count or something more involved, such as an aggregate or window function.</p>
</td>
</tr>
<tr id="row151090259343"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p131102025113418"><a name="p131102025113418"></a><a name="p131102025113418"></a>Sessionize</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p1111052583410"><a name="p1111052583410"></a><a name="p1111052583410"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p18110172514343"><a name="p18110172514343"></a><a name="p18110172514343"></a>The sessionize function performs time-oriented session rebuilding on a dataset that includes an event sequence. The defined inactive period indicates the end of a session and the start of the next session.</p>
<p id="p515116125361"><a name="p515116125361"></a><a name="p515116125361"></a>It can be used for network analysis, network security, manufacturing, finance, and operation analysis.</p>
</td>
</tr>
<tr id="row2093316281346"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p1493382812344"><a name="p1493382812344"></a><a name="p1493382812344"></a>Conjugate gradient</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p17933128143417"><a name="p17933128143417"></a><a name="p17933128143417"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p1693316288345"><a name="p1693316288345"></a><a name="p1693316288345"></a>A method for solving numerical solutions of linear equations whose coefficient matrices are symmetric positive definite matrices.</p>
</td>
</tr>
<tr id="row1729361183519"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p1429371115353"><a name="p1429371115353"></a><a name="p1429371115353"></a>Stemming</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p1129311115354"><a name="p1129311115354"></a><a name="p1129311115354"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p19162185615359"><a name="p19162185615359"></a><a name="p19162185615359"></a>Stemming is simply to find the stem of a word. It can be used to, for example, establish a topic-focused search engine.</p>
<p id="p71621256143516"><a name="p71621256143516"></a><a name="p71621256143516"></a>The optimization effect is obvious on English websites, which can be a reference for websites in other languages.</p>
</td>
</tr>
<tr id="row1682012617407"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p14820726134013"><a name="p14820726134013"></a><a name="p14820726134013"></a>Train-Test Split</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p17820182694013"><a name="p17820182694013"></a><a name="p17820182694013"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p4820626184014"><a name="p4820626184014"></a><a name="p4820626184014"></a>It is used to split a dataset into a training set and a test set. The train set is used for training, and the test set is used for verification.</p>
</td>
</tr>
<tr id="row234813317406"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p123485338405"><a name="p123485338405"></a><a name="p123485338405"></a>Cross validation</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p63481336407"><a name="p63481336407"></a><a name="p63481336407"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p53485334407"><a name="p53485334407"></a><a name="p53485334407"></a>It is used to perform cross validation.</p>
</td>
</tr>
<tr id="row33451640204013"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p19345124024014"><a name="p19345124024014"></a><a name="p19345124024014"></a>Prediction metric</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p93456402401"><a name="p93456402401"></a><a name="p93456402401"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p53451240114016"><a name="p53451240114016"></a><a name="p53451240114016"></a>It is used to evaluate the quality of model prediction, including the mean square error, AUC value, confusion matrix, and adjusted R-square.</p>
</td>
</tr>
<tr id="row161046303404"><td class="cellrowborder" valign="top" width="10.04100410041004%" headers="mcps1.2.4.1.1 "><p id="p51051930144010"><a name="p51051930144010"></a><a name="p51051930144010"></a>Mini-batch preprocessor</p>
</td>
<td class="cellrowborder" valign="top" width="18.531853185318532%" headers="mcps1.2.4.1.2 "><p id="p310512304406"><a name="p310512304406"></a><a name="p310512304406"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.42714271427141%" headers="mcps1.2.4.1.3 "><p id="p81054304400"><a name="p81054304400"></a><a name="p81054304400"></a>It is used to pack the data into small parts for training. The advantage is that the performance is better than that of the stochastic gradient descent (the default MADlib optimizer), and the convergence is faster and smoother.</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Supported machine learning algorithms: graph

<a name="table153361051113913"></a>
<table><thead align="left"><tr id="row12336195118399"><th class="cellrowborder" valign="top" width="10.501050105010501%" id="mcps1.2.4.1.1"><p id="p1393095814413"><a name="p1393095814413"></a><a name="p1393095814413"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.9017901790179%" id="mcps1.2.4.1.2"><p id="p993095816416"><a name="p993095816416"></a><a name="p993095816416"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="71.59715971597159%" id="mcps1.2.4.1.3"><p id="p49301758104113"><a name="p49301758104113"></a><a name="p49301758104113"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row433795114393"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p14337185113910"><a name="p14337185113910"></a><a name="p14337185113910"></a>All pairs shortest path</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p43377511396"><a name="p43377511396"></a><a name="p43377511396"></a>APSP</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p233710512394"><a name="p233710512394"></a><a name="p233710512394"></a>APSP finds the length (summed weight) of the shortest path between all pairs of vertices to minimize the sum of the path edge weights.</p>
</td>
</tr>
<tr id="row43378512398"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p1333711516395"><a name="p1333711516395"></a><a name="p1333711516395"></a>Breadth-first search</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p163371951143912"><a name="p163371951143912"></a><a name="p163371951143912"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p9337165113399"><a name="p9337165113399"></a><a name="p9337165113399"></a>This algorithm traverses paths.</p>
</td>
</tr>
<tr id="row1733745163920"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p3337351193911"><a name="p3337351193911"></a><a name="p3337351193911"></a>Hyperlink-induced topic search</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p10337651203911"><a name="p10337651203911"></a><a name="p10337651203911"></a>HITS</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p8337951133920"><a name="p8337951133920"></a><a name="p8337951133920"></a>HITS outputs the authority score and hub score of each vertex, where authority estimates the value of the content of the page and hub estimates the value of its links to other pages.</p>
</td>
</tr>
<tr id="row233795111392"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p63371519398"><a name="p63371519398"></a><a name="p63371519398"></a>Average path length</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p193372051143919"><a name="p193372051143919"></a><a name="p193372051143919"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p153379516399"><a name="p153379516399"></a><a name="p153379516399"></a>This function computes the average value of the shortest paths between each pair of vertices. The average path length is based on the "reachable target vertexes", so it ignores infinite-length paths between unconnected vertices.</p>
</td>
</tr>
<tr id="row33377515395"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p1033745193918"><a name="p1033745193918"></a><a name="p1033745193918"></a>Closeness centrality</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p033795133914"><a name="p033795133914"></a><a name="p033795133914"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p4337125119393"><a name="p4337125119393"></a><a name="p4337125119393"></a>The closeness measures are the inverse of the sum, the inverse of the average, and the sum of inverses of the shortest distances to all reachable target vertices (excluding the source vertex).</p>
</td>
</tr>
<tr id="row1434018144313"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p934011113439"><a name="p934011113439"></a><a name="p934011113439"></a>Chart diameter</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p16340517432"><a name="p16340517432"></a><a name="p16340517432"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p234051174318"><a name="p234051174318"></a><a name="p234051174318"></a>The diameter is defined as the longest of all the shortest paths in the graph.</p>
</td>
</tr>
<tr id="row431674134313"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p13164414431"><a name="p13164414431"></a><a name="p13164414431"></a>In-Out degree</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p13316443433"><a name="p13316443433"></a><a name="p13316443433"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p531684154317"><a name="p531684154317"></a><a name="p531684154317"></a>This algorithm computes the in-degree and out-degree of each node. The node in-degree is the number of edges pointing in to the node and node out-degree is the number of edges pointing out of the node.</p>
</td>
</tr>
<tr id="row177383615431"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p127383684315"><a name="p127383684315"></a><a name="p127383684315"></a>PageRank</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p1673846154317"><a name="p1673846154317"></a><a name="p1673846154317"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p37386624320"><a name="p37386624320"></a><a name="p37386624320"></a>Given a graph, the PageRank algorithm outputs a probability distribution representing the likelihood that a person randomly traversing the graph will arrive at any particular vertex.</p>
</td>
</tr>
<tr id="row18338199184312"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p153383934313"><a name="p153383934313"></a><a name="p153383934313"></a>Single source shortest path </p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p133386924310"><a name="p133386924310"></a><a name="p133386924310"></a>SSSP</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p14392818165112"><a name="p14392818165112"></a><a name="p14392818165112"></a>Given a graph and a source vertex, the SSSP algorithm finds a path from the source vertex to every other vertex in the graph to minimize the sum of the weights of the path edges.</p>
</td>
</tr>
<tr id="row1412412204314"><td class="cellrowborder" valign="top" width="10.501050105010501%" headers="mcps1.2.4.1.1 "><p id="p5126126438"><a name="p5126126438"></a><a name="p5126126438"></a>Weakly connected component</p>
</td>
<td class="cellrowborder" valign="top" width="17.9017901790179%" headers="mcps1.2.4.1.2 "><p id="p18121412114313"><a name="p18121412114313"></a><a name="p18121412114313"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p1712161234314"><a name="p1712161234314"></a><a name="p1712161234314"></a>Given a directed graph, the WCC is a subgraph of the original graph, where all vertices are connected to each other through a path, ignoring the direction of the edges. In the case of an undirected graph, the WCC is also a strongly connected component. This module also includes many auxiliary functions that run on the WCC output.</p>
</td>
</tr>
</tbody>
</table>

**Table  5**  Supported machine learning algorithms: time series

<a name="table10752114512562"></a>
<table><thead align="left"><tr id="row9752114535615"><th class="cellrowborder" valign="top" width="21.602160216021602%" id="mcps1.2.4.1.1"><p id="p4752204515617"><a name="p4752204515617"></a><a name="p4752204515617"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="34.283428342834284%" id="mcps1.2.4.1.2"><p id="p1675274512569"><a name="p1675274512569"></a><a name="p1675274512569"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="44.114411441144114%" id="mcps1.2.4.1.3"><p id="p18752174515617"><a name="p18752174515617"></a><a name="p18752174515617"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row15752045115610"><td class="cellrowborder" valign="top" width="21.602160216021602%" headers="mcps1.2.4.1.1 "><p id="p187521845145611"><a name="p187521845145611"></a><a name="p187521845145611"></a>Autoregressive integrated moving average model</p>
</td>
<td class="cellrowborder" valign="top" width="34.283428342834284%" headers="mcps1.2.4.1.2 "><p id="p187521845175611"><a name="p187521845175611"></a><a name="p187521845175611"></a>ARIMA</p>
</td>
<td class="cellrowborder" valign="top" width="44.114411441144114%" headers="mcps1.2.4.1.3 "><p id="p18752114512568"><a name="p18752114512568"></a><a name="p18752114512568"></a>Time series forecasting, which is used to understand and forecast future values in the series.</p>
<p id="p4810153919572"><a name="p4810153919572"></a><a name="p4810153919572"></a>For example, international air traveler data can be used to forecast the number of passengers.</p>
</td>
</tr>
</tbody>
</table>

**Table  6**  Supported machine learning algorithms - sampling

<a name="table4800126141316"></a>
<table><thead align="left"><tr id="row780092601311"><th class="cellrowborder" valign="top" width="17.141714171417142%" id="mcps1.2.4.1.1"><p id="p270284991312"><a name="p270284991312"></a><a name="p270284991312"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="21.632163216321633%" id="mcps1.2.4.1.2"><p id="p970204991315"><a name="p970204991315"></a><a name="p970204991315"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="61.22612261226122%" id="mcps1.2.4.1.3"><p id="p1870220498133"><a name="p1870220498133"></a><a name="p1870220498133"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row58001226111315"><td class="cellrowborder" valign="top" width="17.141714171417142%" headers="mcps1.2.4.1.1 "><p id="p4800426101312"><a name="p4800426101312"></a><a name="p4800426101312"></a>Sample</p>
</td>
<td class="cellrowborder" valign="top" width="21.632163216321633%" headers="mcps1.2.4.1.2 "><p id="p380042671315"><a name="p380042671315"></a><a name="p380042671315"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="61.22612261226122%" headers="mcps1.2.4.1.3 "><p id="p1780012264134"><a name="p1780012264134"></a><a name="p1780012264134"></a>Sampling.</p>
</td>
</tr>
<tr id="row1480019264138"><td class="cellrowborder" valign="top" width="17.141714171417142%" headers="mcps1.2.4.1.1 "><p id="p1480062616135"><a name="p1480062616135"></a><a name="p1480062616135"></a>Stratified sampling</p>
</td>
<td class="cellrowborder" valign="top" width="21.632163216321633%" headers="mcps1.2.4.1.2 "><p id="p98001026101316"><a name="p98001026101316"></a><a name="p98001026101316"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="61.22612261226122%" headers="mcps1.2.4.1.3 "><p id="p17323133614159"><a name="p17323133614159"></a><a name="p17323133614159"></a>Stratified random sampling, also known as type random sampling, is used to divide the overall units into various types (or layers) according to a certain standard. Then, according to the ratio of the number of units of each type to the total number of units, the number of units extracted from each type is determined. Finally, samples are extracted from each type according to the random principle.</p>
</td>
</tr>
<tr id="row1080142613137"><td class="cellrowborder" valign="top" width="17.141714171417142%" headers="mcps1.2.4.1.1 "><p id="p1580113262134"><a name="p1580113262134"></a><a name="p1580113262134"></a>Balanced sampling</p>
</td>
<td class="cellrowborder" valign="top" width="21.632163216321633%" headers="mcps1.2.4.1.2 "><p id="p880162661316"><a name="p880162661316"></a><a name="p880162661316"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="61.22612261226122%" headers="mcps1.2.4.1.3 "><p id="p680112601318"><a name="p680112601318"></a><a name="p680112601318"></a>Some classification algorithms only perform optimally when the number of samples in each class is roughly the same. Highly skewed datasets are common in many domains (such as fraud detection), so resampling to offset this imbalance can produce better decision boundaries.</p>
</td>
</tr>
</tbody>
</table>

**Table  7**  Supported machine learning algorithms: statistics

<a name="table1560264413152"></a>
<table><thead align="left"><tr id="row2603154410159"><th class="cellrowborder" valign="top" width="14.041404140414041%" id="mcps1.2.4.1.1"><p id="p17335719121813"><a name="p17335719121813"></a><a name="p17335719121813"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="24.98249824982498%" id="mcps1.2.4.1.2"><p id="p73351019111812"><a name="p73351019111812"></a><a name="p73351019111812"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="60.976097609760984%" id="mcps1.2.4.1.3"><p id="p15335131913186"><a name="p15335131913186"></a><a name="p15335131913186"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row66033448158"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p46039440152"><a name="p46039440152"></a><a name="p46039440152"></a>Summary</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p3603174441512"><a name="p3603174441512"></a><a name="p3603174441512"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p8603184414157"><a name="p8603184414157"></a><a name="p8603184414157"></a>This algorithm generates summary statistics for any data table.</p>
</td>
</tr>
<tr id="row460324491519"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p760310444157"><a name="p760310444157"></a><a name="p760310444157"></a>Correlation and covariance</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p186031544171516"><a name="p186031544171516"></a><a name="p186031544171516"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p5603244161512"><a name="p5603244161512"></a><a name="p5603244161512"></a>Descriptive statistics, one of which computes the Pearson coefficient and correlation coefficient, and the other outputs covariance. This help us understand the characteristics of the data amount that is statistically reflected so that we can better understand the data to be mined.</p>
</td>
</tr>
<tr id="row760364412158"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p460312442152"><a name="p460312442152"></a><a name="p460312442152"></a>CountMin (Cormode-Muthukrishnan)</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p12603154411156"><a name="p12603154411156"></a><a name="p12603154411156"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p15603114491515"><a name="p15603114491515"></a><a name="p15603114491515"></a>This algorithm counts the occurrence frequency of an element in a real-time data stream, and is ready to response to the occurrence frequency of an element at any time. No accurate counting is required.</p>
</td>
</tr>
<tr id="row7603344191510"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p14603134491511"><a name="p14603134491511"></a><a name="p14603134491511"></a>Flajolet-Martin</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p166031244171517"><a name="p166031244171517"></a><a name="p166031244171517"></a>FM</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p1760344461511"><a name="p1760344461511"></a><a name="p1760344461511"></a>This algorithm is used to obtain the number of different values in a specified column, and find the number of unique numbers in the number set.</p>
</td>
</tr>
<tr id="row2603174413154"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p26039443156"><a name="p26039443156"></a><a name="p26039443156"></a>Most frequent values</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p1603194431510"><a name="p1603194431510"></a><a name="p1603194431510"></a>MFV</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p46039446153"><a name="p46039446153"></a><a name="p46039446153"></a>This algorithm is used to computes frequent values.</p>
</td>
</tr>
<tr id="row5603174416151"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p12603154431512"><a name="p12603154431512"></a><a name="p12603154431512"></a>Hypothesis test</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p1860434412155"><a name="p1860434412155"></a><a name="p1860434412155"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p46042445154"><a name="p46042445154"></a><a name="p46042445154"></a>This algorithm includes F-test and chi2-test.</p>
</td>
</tr>
<tr id="row16194141361910"><td class="cellrowborder" valign="top" width="14.041404140414041%" headers="mcps1.2.4.1.1 "><p id="p9195613111915"><a name="p9195613111915"></a><a name="p9195613111915"></a>Probability functions</p>
</td>
<td class="cellrowborder" valign="top" width="24.98249824982498%" headers="mcps1.2.4.1.2 "><p id="p191951313111920"><a name="p191951313111920"></a><a name="p191951313111920"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="60.976097609760984%" headers="mcps1.2.4.1.3 "><p id="p16195171313199"><a name="p16195171313199"></a><a name="p16195171313199"></a>The probability functions module provides cumulative distribution, density/mass, and quantile functions for various probability distributions.</p>
</td>
</tr>
</tbody>
</table>

**Table  8**  Supported machine learning algorithms: other algorithms

<a name="table910801142712"></a>
<table><thead align="left"><tr id="row01086112717"><th class="cellrowborder" valign="top" width="13.631363136313631%" id="mcps1.2.4.1.1"><p id="p6196614275"><a name="p6196614275"></a><a name="p6196614275"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.031803180318033%" id="mcps1.2.4.1.2"><p id="p14195616278"><a name="p14195616278"></a><a name="p14195616278"></a>Abbreviation</p>
</th>
<th class="cellrowborder" valign="top" width="68.33683368336834%" id="mcps1.2.4.1.3"><p id="p8191569273"><a name="p8191569273"></a><a name="p8191569273"></a>Application Scenario</p>
</th>
</tr>
</thead>
<tbody><tr id="row181081710279"><td class="cellrowborder" valign="top" width="13.631363136313631%" headers="mcps1.2.4.1.1 "><p id="p101084117276"><a name="p101084117276"></a><a name="p101084117276"></a>k-means clustering</p>
</td>
<td class="cellrowborder" valign="top" width="18.031803180318033%" headers="mcps1.2.4.1.2 "><p id="p71081811279"><a name="p71081811279"></a><a name="p71081811279"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="68.33683368336834%" headers="mcps1.2.4.1.3 "><p id="p110831182710"><a name="p110831182710"></a><a name="p110831182710"></a>This algorithm is used in the clustering scenario.</p>
</td>
</tr>
<tr id="row1610820182713"><td class="cellrowborder" valign="top" width="13.631363136313631%" headers="mcps1.2.4.1.1 "><p id="p410917118277"><a name="p410917118277"></a><a name="p410917118277"></a>Latent Dirichlet allocation</p>
</td>
<td class="cellrowborder" valign="top" width="18.031803180318033%" headers="mcps1.2.4.1.2 "><p id="p15109171192711"><a name="p15109171192711"></a><a name="p15109171192711"></a>LDA</p>
</td>
<td class="cellrowborder" valign="top" width="68.33683368336834%" headers="mcps1.2.4.1.3 "><p id="p1310915110276"><a name="p1310915110276"></a><a name="p1310915110276"></a>LDA plays an important role in the topic model and is often used for text classification.</p>
</td>
</tr>
<tr id="row7109411278"><td class="cellrowborder" valign="top" width="13.631363136313631%" headers="mcps1.2.4.1.1 "><p id="p910919132719"><a name="p910919132719"></a><a name="p910919132719"></a>Apriori algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="18.031803180318033%" headers="mcps1.2.4.1.2 "><p id="p1510918116272"><a name="p1510918116272"></a><a name="p1510918116272"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="68.33683368336834%" headers="mcps1.2.4.1.3 "><p id="p10109514274"><a name="p10109514274"></a><a name="p10109514274"></a>Apriori algorithm is used to discover the association between data item sets, such as the typical "beer and diaper" association.</p>
</td>
</tr>
</tbody>
</table>

