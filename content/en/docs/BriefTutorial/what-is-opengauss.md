# What Is openGauss?<a name="EN-US_TOPIC_0000001223667315"></a>

openGauss is a user-friendly, enterprise-level, and open-source relational database jointly built with partners. openGauss provides multi-core architecture-oriented ultimate performance, full-link service, data security, AI-based optimization, and efficient O&M capabilities. openGauss deeply integrates Huawei's years of R&D experience in the database field and continuously builds competitive features based on enterprise-level scenario requirements. For the latest information about openGauss, visit  [https://opengauss.org/en/](https://opengauss.org/en/).

-   **openGauss is a database management system.**

    A database is a structured dataset. It can be any data, such as shopping lists, photo galleries, or a large amount of information on a company's network. To add, access, and process massive data stored in computer databases, you need a database management system \(DBMS\). The DBMS can manage and control the database in a unified manner to ensure the security and integrity of the database. Because computers are very good at handling large amounts of data, the DBMS plays a central role in computing as standalone utilities or as part of other applications.

-   **An openGauss database is a relational database.**

    A relational database organizes data using a relational model, that is, data is stored in rows and columns. A series of rows and columns in a relational database are called tables, which form the database. A relational model can be simply understood as a two-dimensional table model, and a relational database is a data organization consisting of two-dimensional tables and their relationships.

    In openGauss, SQL is a standard computer language often used to control the access to databases and manage data in databases. depending on your programming environment, you can enter SQL statements directly, embed SQL statements into code written in another language, or use specific language APIs that contain SQL syntax.

    SQL is defined by the ANSI/ISO SQL standard. The SQL standard has been developed since 1986 and has multiple versions. In this document, SQL92 is the standard released in 1992, SQL99 is the standard released in 1999, and SQL2003 is the standard released in 2003. SQL2011 is the latest version of the standard. openGauss supports the SQL92, SQL99, SQL2003, and SQL2011 specifications.

-   **openGauss provides open-source software.**

    Open-source means that anyone can use and modify the software. Anyone can download the openGauss software and use it at no cost. You can dig into the source code and make changes to meet your needs. The openGauss software is released under the Mulan Permissive Software License v2 \([http://license.coscl.org.cn/MulanPSL2/](http://license.coscl.org.cn/MulanPSL2/)\) to define the software usage scope.

-   **An openGauss database features high performance, high availability, high security, easy O&M, and full openness.**
    -   High performance
        -   It provides the multi-core architecture-oriented concurrency control technology and Kunpeng hardware optimization, and achieves that the TPC-C benchmark performance reaches 1,500,000 tpmC in Kunpeng 2-socket servers.
        -   It uses NUMA-Aware data structures as the key kernel structures to adapt to the trend of using multi-core NUMA architecture on hardware.
        -   It provides the SQL bypass intelligent fast engine technology.
        -   It provides the USTORE storage engine for frequent update scenarios.

    -   High availability \(HA\)
        -   It supports multiple deployment modes, such as primary/standby synchronization, primary/standby asynchronization, and cascaded standby server deployment.
        -   It supports data page cyclic redundancy check \(CRC\), and automatically restores damaged data pages through the standby node.
        -   It recovers the standby node in parallel and promotes it to primary to provide services within 10 seconds.
        -   It provides log replication and primary selection framework based on the Paxos distributed consistency protocol.

    -   High security

        It supports security features such as fully-encrypted computing, access control, encryption authentication, database audit, and dynamic data masking to provide comprehensive end-to-end data security protection.

    -   Easy O&M
        -   It provides AI-based intelligent parameter tuning and index recommendation to automatically recommend AI parameters.
        -   It provides slow SQL diagnosis and multi-dimensional self-monitoring views to help you understand system performance in real time.
        -   It provides SQL time forecasting that supports online auto-learning.

    -   Full openness
        -   It adopts the Mulan Permissive Software License, allowing code to be freely modified, used, and referenced.
        -   It fully opens database kernel capabilities.
        -   It provides excessive partner certifications, training systems, and university courses.
