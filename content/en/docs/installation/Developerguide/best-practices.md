# Best Practices<a name="EN-US_TOPIC_0243595907"></a>

For details about the parameters, see  [GS\_OPT\_MODEL](gs_opt_model.md).

**Table  1** 

<a name="table1634913802611"></a>
<table><thead align="left"><tr id="row193491938102617"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1134913822618"><a name="p1134913822618"></a><a name="p1134913822618"></a>Model Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p193491538172612"><a name="p193491538172612"></a><a name="p193491538172612"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="row163502389264"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p03501381269"><a name="p03501381269"></a><a name="p03501381269"></a>template_name</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1671224843918"><a name="p1671224843918"></a><a name="p1671224843918"></a>rlstm</p>
</td>
</tr>
<tr id="row1635073872610"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1735063872614"><a name="p1735063872614"></a><a name="p1735063872614"></a>model_name</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p93501338152612"><a name="p93501338152612"></a><a name="p93501338152612"></a>The value can be customized, for example, <strong id="b14321111212455"><a name="b14321111212455"></a><a name="b14321111212455"></a>open_ai</strong>. The value must meet the unique constraint.</p>
</td>
</tr>
<tr id="row6350113832613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p3350938152610"><a name="p3350938152610"></a><a name="p3350938152610"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p20350338182615"><a name="p20350338182615"></a><a name="p20350338182615"></a>Name of the database to be served, for example, <strong id="b996663418455"><a name="b996663418455"></a><a name="b996663418455"></a>postgres</strong>.</p>
</td>
</tr>
<tr id="row1435023812619"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p4350103802619"><a name="p4350103802619"></a><a name="p4350103802619"></a>ip</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1735083814263"><a name="p1735083814263"></a><a name="p1735083814263"></a>IP address of the AI Engine, for example, <strong id="b0536125234515"><a name="b0536125234515"></a><a name="b0536125234515"></a>127.0.0.1</strong>.</p>
</td>
</tr>
<tr id="row10350103815267"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p135033882611"><a name="p135033882611"></a><a name="p135033882611"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p15350103814261"><a name="p15350103814261"></a><a name="p15350103814261"></a>AI Engine listening port number, for example, <strong id="b78517824616"><a name="b78517824616"></a><a name="b78517824616"></a>5000</strong>.</p>
</td>
</tr>
<tr id="row1350113813269"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p15350123817268"><a name="p15350123817268"></a><a name="p15350123817268"></a>max_epoch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7350193816262"><a name="p7350193816262"></a><a name="p7350193816262"></a>Iteration times. A large value is recommended to ensure the convergence effect, for example, <strong id="b1012319243460"><a name="b1012319243460"></a><a name="b1012319243460"></a>2000</strong>.</p>
</td>
</tr>
<tr id="row1350938132618"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1351113812263"><a name="p1351113812263"></a><a name="p1351113812263"></a>learning_rate</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p212637174717"><a name="p212637174717"></a><a name="p212637174717"></a>(0, 1] is a floating-point number. A large learning rate is recommended to accelerate convergence.</p>
</td>
</tr>
<tr id="row1598817574474"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p798905720473"><a name="p798905720473"></a><a name="p798905720473"></a>dim_red</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p189898571472"><a name="p189898571472"></a><a name="p189898571472"></a>Number of feature values to be reduced.</p>
<p id="p152371522184916"><a name="p152371522184916"></a><a name="p152371522184916"></a><strong id="b149923156472"><a name="b149923156472"></a><a name="b149923156472"></a>-1</strong>: Do not use PCA for dimension reduction. All features are supported.</p>
<p id="p6296124710492"><a name="p6296124710492"></a><a name="p6296124710492"></a>Floating point number in the range of (0, 1]: A smaller value indicates a smaller training dimension and a faster convergence speed, but affects the training accuracy.</p>
</td>
</tr>
<tr id="row15391601486"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1839180194815"><a name="p1839180194815"></a><a name="p1839180194815"></a>hidden_units</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p339130184818"><a name="p339130184818"></a><a name="p339130184818"></a>If the feature value dimension is high, you are advised to increase the value of this parameter to increase the model complexity. For example, set this parameter to <strong id="b1078475514163"><a name="b1078475514163"></a><a name="b1078475514163"></a>64</strong>, <strong id="b1278475519160"><a name="b1278475519160"></a><a name="b1278475519160"></a>128</strong>, and so on.</p>
</td>
</tr>
<tr id="row177211488"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p77626489"><a name="p77626489"></a><a name="p77626489"></a>batch_size</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6792124818"><a name="p6792124818"></a><a name="p6792124818"></a>You are advised to increase the value of this parameter based on the amount of encoded data to accelerate model convergence. For example, set this parameter to <strong id="b16165115145015"><a name="b16165115145015"></a><a name="b16165115145015"></a>256</strong>, <strong id="b15724157165018"><a name="b15724157165018"></a><a name="b15724157165018"></a>512</strong>, and so on.</p>
</td>
</tr>
<tr id="row5476115635612"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p247619569569"><a name="p247619569569"></a><a name="p247619569569"></a>Other parameters</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p74765566564"><a name="p74765566564"></a><a name="p74765566564"></a>See <a href="gs_opt_model.md">GS_OPT_MODEL</a>.</p>
</td>
</tr>
</tbody>
</table>

Recommended parameter settings:

```
INSERT INTO gs_opt_model values('rlstm', 'open_ai', 'postgres', '127.0.0.1', 5000, 2000, 1, -1, 64, 512, 0, false, false, '{S, T}', '{0,0}', '{0,0}', 'Text');
```

