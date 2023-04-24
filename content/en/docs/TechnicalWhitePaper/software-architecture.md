# Software Architecture<a name="EN-US_CONCEPT_0289895648"></a>

openGauss is a standalone database where data is stored on a single physical node and data access tasks are pushed to service nodes. In this way, high concurrency of servers enables quick data processing. In addition, data can be copied to the standby server through log replication, ensuring high reliability and scalability.

openGauss can be deployed in primary/standby mode.  [Figure 1](#fig552153723612)  shows the openGauss logical architecture.

**Figure  1**  openGauss logical architecture<a name="fig552153723612"></a>  


![](figures/逻辑架构图.png)

**Table  1**  Architecture description

<a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_table5479978919151"></a>
<table><thead align="left"><tr id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_row3200216592122"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p1877290192147"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p1877290192147"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p1877290192147"></a>OM</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p4420997892147"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p4420997892147"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p4420997892147"></a>Operation Manager (OM) provides management interfaces and tools for routine maintenance and configuration management of the database.</p>
</td>
</tr>
<tr id="row117405422415"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="p5740242124116"><a name="p5740242124116"></a><a name="p5740242124116"></a>CM</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="p574014212416"><a name="p574014212416"></a><a name="p574014212416"></a>Acronym for cluster manager, a data management module. It manages and monitors the running status of functional units and physical resources in a database system, ensuring stable running of the entire system.</p>
</td>
</tr>
<tr id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"></a>Client driver</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"></a>Client driver receives access requests from the application layer and returns execution results. It communicates with <span id="text1317092122317"><a name="text1317092122317"></a><a name="text1317092122317"></a>openGauss</span> instances, sends application SQL commands, and receives <span id="text15480203572314"><a name="text15480203572314"></a><a name="text15480203572314"></a>openGauss</span> execution results.</p>
</td>
</tr>
<tr id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"></a><span id="text100043192315"><a name="text100043192315"></a><a name="text100043192315"></a>openGauss</span> (primary/standby)</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"></a><span id="text149981953162319"><a name="text149981953162319"></a><a name="text149981953162319"></a>openGauss</span> primary/standby DN stores service data, executes data query tasks, and returns execution results.</p>
<p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"></a><span id="text2156145142320"><a name="text2156145142320"></a><a name="text2156145142320"></a>openGauss</span> supports one primary and multiple standbys. You are advised to deploy them on different physical nodes.</p>
</td>
</tr>
<tr id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"></a>Storage</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"></a><a name="en-us_concept_0283139007_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"></a>Functions as the server's local storage resources to store data permanently.</p>
</td>
</tr>
</tbody>
</table>

