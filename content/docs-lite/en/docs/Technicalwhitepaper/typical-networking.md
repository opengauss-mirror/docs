# Typical Networking<a name="EN-US_CONCEPT_0289895601"></a>

To ensure the security of application data, you are advised to divide the openGauss typical network into two independent networks: front-end service network and data management and storage network.

**Figure  1**  Typical networking<a name="en-us_concept_0283139009_en-us_concept_0238166305_fig7654172218145"></a>  


![](figures/en-us_image_0283139010.png)

[Table 1](#en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_tb80dc4a120b64f6093f63535ce9998ef)  describes the network division.

**Table  1**  Network division

<a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_tb80dc4a120b64f6093f63535ce9998ef"></a>
<table><thead align="left"><tr id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_r157fdb513ba046169c041938f8315c67"><th class="cellrowborder" valign="top" width="21.62%" id="mcps1.2.3.1.1"><p id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a0eca89497f4e4f1a9a06630ed6d6342d"><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a0eca89497f4e4f1a9a06630ed6d6342d"></a><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a0eca89497f4e4f1a9a06630ed6d6342d"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="78.38000000000001%" id="mcps1.2.3.1.2"><p id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a5f2a39fe351c4e9da8c5f8726e62f0b9"><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a5f2a39fe351c4e9da8c5f8726e62f0b9"></a><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a5f2a39fe351c4e9da8c5f8726e62f0b9"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_rc849bac0400340e4b0844f155986cf8e"><td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a47067c6256d64ec9a78c551a2e408a32"><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a47067c6256d64ec9a78c551a2e408a32"></a><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a47067c6256d64ec9a78c551a2e408a32"></a>Database management and storage network</p>
</td>
<td class="cellrowborder" valign="top" width="78.38000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139009_en-us_concept_0238166305_p13825610164710"><a name="en-us_concept_0283139009_en-us_concept_0238166305_p13825610164710"></a><a name="en-us_concept_0283139009_en-us_concept_0238166305_p13825610164710"></a>The database administrator uses this network to invoke OM scripts to manage and maintain <span id="text1946822262418"><a name="text1946822262418"></a><a name="text1946822262418"></a>openGauss</span> instances. It is also used for <span id="text6219926192419"><a name="text6219926192419"></a><a name="text6219926192419"></a>openGauss</span> primary/standby communication networking. The database management and storage network are also used for applications to execute system monitoring.</p>
</td>
</tr>
<tr id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_r8ce2e458c24243cd8e5035626c37982d"><td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_en-us_topic_0009209708_p760730711167"><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_en-us_topic_0009209708_p760730711167"></a><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_en-us_topic_0009209708_p760730711167"></a>Front-end service network</p>
</td>
<td class="cellrowborder" valign="top" width="78.38000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a25190193e921462d9eae93aa756ef832"><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a25190193e921462d9eae93aa756ef832"></a><a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_a25190193e921462d9eae93aa756ef832"></a>External clients access <span id="text1565602819242"><a name="text1565602819242"></a><a name="text1565602819242"></a>openGauss</span> through this network.</p>
</td>
</tr>
</tbody>
</table>

The typical networking has the following advantages:

-   The service network is isolated from the database management and storage network, effectively protecting the security of back-end storage data.
-   The isolation between the service network and database management and storage network prevents attackers from managing database servers through the Internet, improving system security.

Network exclusiveness and 1:1 bandwidth convergence ratio are the basic requirements for openGauss network performance. Therefore, in the production system, the back-end storage network shown in  [Figure 1](#en-us_concept_0283139009_en-us_concept_0238166305_fig7654172218145)  must meet the requirements of exclusiveness and 1:1 bandwidth convergence ratio. For example, in  [Figure 2](#en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_fig397545395542), the Fat-tree networking is used. To achieve a convergence ratio of 1:1, the bandwidth doubles each time the switching network layer is increased by one layer. In the figure, each bold line indicates the 80GE bandwidth, that is, the sum of the bandwidth upper limits of eight physical machines. At the access layer, each switch provides 160GE downlink bandwidth and 160GE uplink bandwidth. The convergence ratio is 1:1. The access bandwidth of each switch at the aggregation layer is 320GE.

For the test system, the preceding requirements can be lowered.

**Figure  2**  Database management and storage network<a name="en-us_concept_0283139009_en-us_concept_0238166305_en-us_topic_0085434654_en-us_topic_0059782024_fig397545395542"></a>  
![](figures/database-management-and-storage-network.png "database-management-and-storage-network")

