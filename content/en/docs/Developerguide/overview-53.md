# Overview<a name="EN-US_TOPIC_0311524281"></a>

This section describes how to configure and use connections between openGauss homogeneous database instances. There are two connection and data processing modes for homogeneous openGauss databases:

-   Based on Extension Connector: You can connect to any homogeneous or heterogeneous database systems supporting ODBC, but the configuration is complex and data transmission performance is low.
-   Based on foreign tables: The configuration is simple, data transmission performance is high, and the distributed computing capability of openGauss can be fully utilized. However, this mode can only be used for connections between homogeneous openGauss databases.

For homogeneous databases, you are advised to connect to them and process data based on foreign tables.

