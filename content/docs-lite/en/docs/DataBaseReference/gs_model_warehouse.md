# GS\_MODEL\_WAREHOUSE<a name="EN-US_TOPIC_0000001110838812"></a>

**GS\_MODEL\_WAREHOUSE**  stores AI engine training models, including the models and detailed description of the training process.

**Table  1**  GS\_MODEL\_WAREHOUSE columns

<a name="table228494316107"></a>
<table><thead align="left"><tr id="row2284144315107"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p1128415433102"><a name="p1128415433102"></a><a name="p1128415433102"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.273327332733274%" id="mcps1.2.4.1.2"><p id="p7284114331011"><a name="p7284114331011"></a><a name="p7284114331011"></a>Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.39333933393339%" id="mcps1.2.4.1.3"><p id="p4284164361019"><a name="p4284164361019"></a><a name="p4284164361019"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row92841743131017"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p6284243131010"><a name="p6284243131010"></a><a name="p6284243131010"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p5284184391017"><a name="p5284184391017"></a><a name="p5284184391017"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p4284184312104"><a name="p4284184312104"></a><a name="p4284184312104"></a>Hidden column</p>
</td>
</tr>
<tr id="row1128404361010"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1528564315107"><a name="p1528564315107"></a><a name="p1528564315107"></a>modelname</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p628574371017"><a name="p628574371017"></a><a name="p628574371017"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p7285343121014"><a name="p7285343121014"></a><a name="p7285343121014"></a>Unique constraint</p>
</td>
</tr>
<tr id="row4285144311014"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p728584351013"><a name="p728584351013"></a><a name="p728584351013"></a>modelowner</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p15285184371019"><a name="p15285184371019"></a><a name="p15285184371019"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p128510439101"><a name="p128510439101"></a><a name="p128510439101"></a>OID of a model owner</p>
</td>
</tr>
<tr id="row112851543171011"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p7285104331012"><a name="p7285104331012"></a><a name="p7285104331012"></a>createtime</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1528564371017"><a name="p1528564371017"></a><a name="p1528564371017"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p2285194351015"><a name="p2285194351015"></a><a name="p2285194351015"></a>Time when a model is created</p>
</td>
</tr>
<tr id="row6285144361013"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1528514317105"><a name="p1528514317105"></a><a name="p1528514317105"></a>processedtuples</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p328594331017"><a name="p328594331017"></a><a name="p328594331017"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p0285154314101"><a name="p0285154314101"></a><a name="p0285154314101"></a>Number of tuples involved in training</p>
</td>
</tr>
<tr id="row2028554310101"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p0285154317102"><a name="p0285154317102"></a><a name="p0285154317102"></a>discardedtuples</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1728584313106"><a name="p1728584313106"></a><a name="p1728584313106"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p19285104311109"><a name="p19285104311109"></a><a name="p19285104311109"></a>Number of unqualified tuples not involved in training</p>
</td>
</tr>
<tr id="row9697218246"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p569132192411"><a name="p569132192411"></a><a name="p569132192411"></a>preprocesstime</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p126982120244"><a name="p126982120244"></a><a name="p126982120244"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p1669102113243"><a name="p1669102113243"></a><a name="p1669102113243"></a>Data preprocessing time</p>
</td>
</tr>
<tr id="row328524381017"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p10285154315106"><a name="p10285154315106"></a><a name="p10285154315106"></a>exectime</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1528554341018"><a name="p1528554341018"></a><a name="p1528554341018"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p15285743141013"><a name="p15285743141013"></a><a name="p15285743141013"></a>Training duration</p>
</td>
</tr>
<tr id="row168341757101413"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p118341057181417"><a name="p118341057181417"></a><a name="p118341057181417"></a>iterations</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p10835205712145"><a name="p10835205712145"></a><a name="p10835205712145"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p1983515578142"><a name="p1983515578142"></a><a name="p1983515578142"></a>Iteration round</p>
</td>
</tr>
<tr id="row1981320014151"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p198135015156"><a name="p198135015156"></a><a name="p198135015156"></a>outputtype</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1481314061511"><a name="p1481314061511"></a><a name="p1481314061511"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p8813600150"><a name="p8813600150"></a><a name="p8813600150"></a>OID of the output data type</p>
</td>
</tr>
<tr id="row1646981221517"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p16469712111510"><a name="p16469712111510"></a><a name="p16469712111510"></a>modeltype</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p17469112191518"><a name="p17469112191518"></a><a name="p17469112191518"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p19469191217151"><a name="p19469191217151"></a><a name="p19469191217151"></a>AI operator type</p>
</td>
</tr>
<tr id="row985459181519"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1785413951515"><a name="p1785413951515"></a><a name="p1785413951515"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1885413971512"><a name="p1885413971512"></a><a name="p1885413971512"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p11855189131511"><a name="p11855189131511"></a><a name="p11855189131511"></a>Query statement executed to create a model</p>
</td>
</tr>
<tr id="row0338323171511"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p8338152310155"><a name="p8338152310155"></a><a name="p8338152310155"></a>modeldata</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1933842371516"><a name="p1933842371516"></a><a name="p1933842371516"></a>bytea</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p1733842319153"><a name="p1733842319153"></a><a name="p1733842319153"></a>Stored binary model information</p>
</td>
</tr>
<tr id="row14667132011510"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p9667152091511"><a name="p9667152091511"></a><a name="p9667152091511"></a>weight</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p146674207153"><a name="p146674207153"></a><a name="p146674207153"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p56672020131513"><a name="p56672020131513"></a><a name="p56672020131513"></a>Currently, this column applies only to GD operator models.</p>
</td>
</tr>
<tr id="row11331831514"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p111301818153"><a name="p111301818153"></a><a name="p111301818153"></a>hyperparametersnames</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p61351816156"><a name="p61351816156"></a><a name="p61351816156"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p113141851514"><a name="p113141851514"></a><a name="p113141851514"></a>Involved hyperparameter name</p>
</td>
</tr>
<tr id="row2107177101512"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p4107771155"><a name="p4107771155"></a><a name="p4107771155"></a>hyperparametersvalues</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p11073721510"><a name="p11073721510"></a><a name="p11073721510"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p0107776155"><a name="p0107776155"></a><a name="p0107776155"></a>Hyperparameter value</p>
</td>
</tr>
<tr id="row872103121513"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1772210313159"><a name="p1772210313159"></a><a name="p1772210313159"></a>hyperparametersoids</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1272215312159"><a name="p1272215312159"></a><a name="p1272215312159"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p157221312158"><a name="p157221312158"></a><a name="p157221312158"></a>OID of the data type corresponding to a hyperparameter</p>
</td>
</tr>
<tr id="row37271016181910"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p14728161613192"><a name="p14728161613192"></a><a name="p14728161613192"></a>coefnames</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p67284168190"><a name="p67284168190"></a><a name="p67284168190"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p37281166196"><a name="p37281166196"></a><a name="p37281166196"></a>Model parameter</p>
</td>
</tr>
<tr id="row1343311971917"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p3434819161912"><a name="p3434819161912"></a><a name="p3434819161912"></a>coefvalues</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p204344192198"><a name="p204344192198"></a><a name="p204344192198"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p12434201919192"><a name="p12434201919192"></a><a name="p12434201919192"></a>Value of a model parameter</p>
</td>
</tr>
<tr id="row125421332101910"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1654283211190"><a name="p1654283211190"></a><a name="p1654283211190"></a>coefoids</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1467383710200"><a name="p1467383710200"></a><a name="p1467383710200"></a>oid[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p25421432201917"><a name="p25421432201917"></a><a name="p25421432201917"></a>OID of the data type corresponding to a model parameter</p>
</td>
</tr>
<tr id="row4967374191"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p196183781914"><a name="p196183781914"></a><a name="p196183781914"></a>trainingscoresname</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p6972372193"><a name="p6972372193"></a><a name="p6972372193"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p149717375199"><a name="p149717375199"></a><a name="p149717375199"></a>Method used to measure model performance</p>
</td>
</tr>
<tr id="row68443342190"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1584433417193"><a name="p1584433417193"></a><a name="p1584433417193"></a>trainingscoresvalue</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p1784417349192"><a name="p1784417349192"></a><a name="p1784417349192"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p5844934141910"><a name="p5844934141910"></a><a name="p5844934141910"></a>Value used to measure model performance</p>
</td>
</tr>
<tr id="row218892213191"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p8188172231920"><a name="p8188172231920"></a><a name="p8188172231920"></a>modeldescribe</p>
</td>
<td class="cellrowborder" valign="top" width="33.273327332733274%" headers="mcps1.2.4.1.2 "><p id="p181887227195"><a name="p181887227195"></a><a name="p181887227195"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.2.4.1.3 "><p id="p11188102214191"><a name="p11188102214191"></a><a name="p11188102214191"></a>Model description</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss provides this system catalog, but the AI capabilities are unavailable.

