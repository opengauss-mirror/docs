---
description: This document describes Product Description in openGauss, covering topics such as Technical Characteristics, Software Architecture.
keywords: [openGauss, Product Description, product overview, Technical Characteristics, Software Architecture]
---

# Product Description 

This document describes the openGauss database in terms of its product positioning, system architecture, application scenarios, operating environment, technical specifications, basic functions and features, and enterprise-level enhanced features. 

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

## Software Architecture<a name="EN-US_TOPIC_0000001224028751"></a>

openGauss is a standalone system that supports one primary and up to eight standby servers.

Service data is stored on a single physical node, and data access tasks are pushed to service nodes and then executed. The high concurrency of servers enables quick response to data processing. In addition, data can be copied to the standby server through log replication, ensuring high reliability and scalability.

### Software Architecture<a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_section1940043819751"></a>

[Figure 1](#en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_fig5205420191411)  shows the logical components of openGauss.

**Figure  1**  openGauss logical architecture<a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_fig5205420191411"></a>  
<img src="figures/opengauss-logical-architecture.png" alt="openGauss logical architecture" title="opengauss-logical-architecture" style="zoom:67%;" />

**Table  1**  Architecture description

<a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_table5479978919151"></a>
<table><thead align="left"><tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row4411284819151"><th class="cellrowborder" valign="top" width="14.469999999999999%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p404366191511"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="85.53%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p7387596191511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row3200216592122"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1877290192147"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1877290192147"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1877290192147"></a>OM</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p4420997892147"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p4420997892147"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p4420997892147"></a>Operation Manager (OM) provides management interfaces and tools for routine maintenance and configuration management of the database. This module is optional and is often used in enterprise-level scenarios.</p>
</td>
</tr>
<tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row6476976919151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p11262944162914"></a>Client driver</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p23234897162914"></a>A client driver receives the access requests from applications, and returns the execution results to the applications. It communicates with openGauss instances, sends application SQL commands, and receives execution results. This module is mandatory. The client program gsql also depends on the driver to connect to the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row5813821019151"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p29314576162914"></a><span id="text1862293935711"><a name="text1862293935711"></a><a name="text1862293935711"></a>openGauss</span> (Primary/Standby)</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p1933624014508"></a><span id="text552554154218"><a name="text552554154218"></a><a name="text552554154218"></a>openGauss</span> primary and standby DNs store service data, execute data queries, and return execution results to the client.</p>
<p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p56577630162914"></a><span id="text164721046135712"><a name="text164721046135712"></a><a name="text164721046135712"></a>openGauss</span> supports one primary and multiple standbys. You are advised to deploy them on different physical nodes.</p>
<p id="p9534016564"><a name="p9534016564"></a><a name="p9534016564"></a>The primary/standby mode is optional. openGauss can also be deployed in standalone mode. The primary/standby mode is often used in enterprise-level scenarios.</p>
</td>
</tr>
<tr id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_row4354812919183"><td class="cellrowborder" valign="top" width="14.469999999999999%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p553181019183"></a>Storage</p>
</td>
<td class="cellrowborder" valign="top" width="85.53%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"></a><a name="en-us_topic_0283136530_en-us_topic_0237080634_en-us_topic_0231764167_p64149272191943"></a>It functions as the server's local storage resources to store data permanently.</p>
</td>
</tr>
</tbody>
</table>

## Application Scenarios<a name="EN-US_TOPIC_0289896515"></a>

- Transaction applications

    Applications need to process highly concurrent online transactions containing a large volume of data, such as e-commerce, finance, O2O, telecom customer relationship management \(CRM\), and billing.

- IoT data

    In IoT scenarios, such as industrial monitoring, remote control, smart cities, smart homes, and loV, challenges come from a large number of sensors and monitoring devices, high sampling frequency, additional storage modes, and concurrent operation and analysis.
