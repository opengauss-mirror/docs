# Technical Characteristics<a name="EN-US_CONCEPT_0000001208233985"></a>

Compared with other open-source databases, openGauss has the following characteristics:

-   High performance
    -   Provides the multi-core architecture-oriented concurrency control technology and Kunpeng hardware optimization, and achieves that the TPC-C benchmark performance reaches 1,800,000 tpmC in Kunpeng 2-socket servers.
    -   Uses NUMA-Aware data structures as the key kernel structures to adapt to the trend of using multi-core NUMA architecture on hardware.
    -   Provides the SQL bypass intelligent fast engine technology.
    -   The Ustore storage engine is provided for frequent update scenarios.


-   High availability \(HA\)
    -   Supports multiple deployment modes, such as primary/standby synchronization, primary/standby asynchronization, and cascaded standby server deployment.
    -   Supports data page cyclic redundancy check \(CRC\), and automatically restores damaged data pages through the standby node.
    -   Recovers the standby node in parallel and promots it to primary to provide services within 10 seconds.
    -   Log replication and primary selection framework are provided based on the Paxos distributed consistency protocol.


-   High security

    Supports security features such as fully-encrypted computing, access control, encryption authentication, database audit, and dynamic data masking to provide comprehensive end-to-end data security protection.


-   Easy O&M
    -   Provides AI-based intelligent parameter tuning and index recommendation to automatically recommend AI parameters.
    -   Provides slow SQL diagnosis and multi-dimensional self-monitoring views to help you understand system performance in real time, predict metric trends, detect exceptions, and analyze root causes of slow SQL statements.


-   Fully open
    -   Adopts the Mulan Permissive Software License, allowing code to be freely modified, used, and referenced.
    -   Fully opens database kernel capabilities.
    -   Provides excessive partner certifications, training systems, and university courses.
