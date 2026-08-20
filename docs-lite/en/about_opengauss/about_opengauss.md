# Product Description 

This document describes the openGauss database in terms of its product positioning, system architecture, application scenarios, operating environment, technical specifications, basic functions and features, and enterprise-level enhanced features. 

## Product Positioning<a name="EN-US_TOPIC_0289896521"></a>

openGauss is an HA rational database that supports the SQL2003 standard and primary/standby deployment.

- Multiple storage modes support composite service scenarios. The in-place update storage engine is introduced.
- The NUMA data structure supports high performance.
- HA is supported by primary/standby mode and cyclic redundancy check \(CRC\).
- Security features are supported, such as fully-encrypted computing and ledger database, to provide comprehensive end-to-end data security protection.
- The Table Access Method interface layer supports multiple storage engines.

openGauss is a multi-core-oriented open-source relational database that provides ultimate performance, full-link service and data security, AI-based tuning, and efficient O&M capabilities. This leading database at enterprise level is developed in collaboration with global partners and is released under the Mulan Permissive Software License v2. openGauss deeply integrates Huawei's years of R&D experience in the database field and continuously builds competitive features based on enterprise-level scenario requirements.

## Technical Characteristics<a name="EN-US_CONCEPT_0289895596"></a>

Compared with other databases, openGauss features multiple storage modes, NUMA-based kernel structure, and high availability.

- Multiple storage modes
    - Row-store, supporting frequent service data updates and the fusion engine \(Ustore\) and the original Astore
    - Column-store, supporting service data appending and analysis

- NUMA-based kernel structure
    - Partitions key data structures to reduce data access conflicts.
    - Provides NUMA-based key data structure to reduce the data structure access latency.
    - Binds cores to key service threads to prevent inter-core thread drift.

- High availability
    - Supports multiple deployment modes, such as primary/standby synchronization and primary/standby asynchronization.
    - Supports data page cyclic redundancy check \(CRC\), and automatically restores damaged data pages through the standby node.

- High security

    Provides fully-encrypted database capabilities and supports security features such as fully-encrypted equality query, access control, encryption authentication, database audit, and dynamic data masking to provide comprehensive end-to-end data security protection.

## System Architecture<a name="EN-US_TOPIC_0289896518"></a>

openGauss is a standalone database where data is stored on a single physical node and data access tasks are pushed to service nodes. In this way, high concurrency of servers enables quick data processing. In addition, data can be copied to the standby server through log replication, ensuring high reliability and scalability.

openGauss is a standalone database and can be deployed in primary/standby mode.

[Figure 1](#en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_fig5205420191411)  and  show the logical architecture of openGauss.

**Figure  1**  openGauss logical architecture<a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_fig5205420191411"></a>  
![](figures/opengauss-logical-architecture.png)

**Table  1**  Architecture description

<a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_table5479978919151"></a>
<table><thead align="left"><tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"></a>Client driver</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"></a>The client driver receives access requests from the application layer and returns execution results. It communicates with <span id="text1113502285312"><a name="text1113502285312"></a><a name="text1113502285312"></a>openGauss</span> instances, sends application SQL commands, and receives <span id="text51351822125311"><a name="text51351822125311"></a><a name="text51351822125311"></a>openGauss</span> execution results.</p>
</td>
</tr>
<tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"></a><span id="text6736142565318"><a name="text6736142565318"></a><a name="text6736142565318"></a>openGauss</span> (primary/standby)</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"></a>The <span id="text12102162717535"><a name="text12102162717535"></a><a name="text12102162717535"></a>openGauss</span> primary/standby DN stores service data, executes data query tasks, and returns execution results.</p>
<p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"></a><span id="text4319172855317"><a name="text4319172855317"></a><a name="text4319172855317"></a>openGauss</span> supports one primary and multiple standbys. You are advised to deploy them on different physical nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"></a>Storage</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"></a>Functions as the server's local storage resources to store data permanently.</p>
</td>
</tr>
</tbody>
</table>

## Application Scenarios<a name="EN-US_TOPIC_0289896515"></a>

- Transaction applications

    Applications need to process highly concurrent online transactions containing a large volume of data, such as e-commerce, finance, O2O, telecom customer relationship management \(CRM\), and billing.

- IoT data

    In IoT scenarios, such as industrial monitoring, remote control, smart cities, smart homes, and loV, challenges come from a large number of sensors and monitoring devices, high sampling frequency, additional storage modes, and concurrent operation and analysis.
