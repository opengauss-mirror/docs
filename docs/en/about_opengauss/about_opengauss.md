# Product Description 

This document describes the openGauss database in terms of its product positioning, system architecture, application scenarios, operating environment, technical specifications, basic functions and features, and enterprise-level enhanced features. 

## Product Positioning<a name="EN-US_TOPIC_0289896521"></a>

openGauss is a HA rational database that supports the SQL2003 standard and primary/standby deployment.

- Multiple storage modes support composite service scenarios. The in-place update storage engine is introduced.
- The NUMA data structure supports high performance.
- HA is supported by Paxos consistency log replication protocol, primary/standby mode, and cyclic redundancy check \(CRC\).
- Security features are supported, such as fully-encrypted computing and ledger database, to provide comprehensive end-to-end data security protection.
- The Table Access Method interface layer supports multiple storage engines.

openGauss is a multi-core-oriented open-source relational database that provides ultimate performance, full-link service and data security, AI-based tuning, and efficient O&M capabilities. This leading database at enterprise level is developed in collaboration with global partners and is released under the Mulan Permissive Software License v2. openGauss deeply integrates Huawei's years of R&D experience in the database field and continuously builds competitive features based on enterprise-level scenario requirements.

## Technical Characteristics<a name="EN-US_CONCEPT_0000001208233985"></a>

Compared with other open-source databases, openGauss has the following characteristics:

- High performance
    - Provides the multi-core architecture-oriented concurrency control technology and Kunpeng hardware optimization, and achieves that the TPC-C benchmark performance reaches 1,500,000 tpmC in Kunpeng 2-socket servers.
    - Uses NUMA-Aware data structures as the key kernel structures to adapt to the trend of using multi-core NUMA architecture on hardware.
    - Provides the SQL bypass intelligent fast engine technology.
    - The Ustore storage engine is provided for frequent update scenarios.

- High availability \(HA\)
    - Supports multiple deployment modes, such as primary/standby synchronization, primary/standby asynchronization, and cascaded standby server deployment.
    - Supports data page cyclic redundancy check \(CRC\), and automatically restores damaged data pages through the standby node.
    - Recovers the standby node in parallel and promots it to primary to provide services within 10 seconds.
    - Log replication and primary selection framework are provided based on the Paxos distributed consistency protocol.

- High security

    Supports security features such as fully-encrypted computing, access control, encryption authentication, database audit, and dynamic data masking to provide comprehensive end-to-end data security protection.

- Easy O&M
    - Provides AI-based intelligent parameter tuning and index recommendation to automatically recommend AI parameters.
    - Provides slow SQL diagnosis and multi-dimensional self-monitoring views to help you understand system performance in real time, predict metric trends, detect exceptions, and analyze root causes of slow SQL statements.

- Fully open
    - Adopts the Mulan Permissive Software License, allowing code to be freely modified, used, and referenced.
    - Fully opens database kernel capabilities.
    - Provides excessive partner certifications, training systems, and university courses.

## Software Architecture<a name="EN-US_CONCEPT_0289895648"></a>

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

## Application Scenarios<a name="EN-US_TOPIC_0289896515"></a>

- Transaction applications

    Applications need to process highly concurrent online transactions containing a large volume of data, such as e-commerce, finance, O2O, telecom customer relationship management \(CRM\), and billing.

- IoT data

    In IoT scenarios, such as industrial monitoring, remote control, smart cities, smart homes, and loV, challenges come from a large number of sensors and monitoring devices, high sampling frequency, additional storage modes, and concurrent operation and analysis.
