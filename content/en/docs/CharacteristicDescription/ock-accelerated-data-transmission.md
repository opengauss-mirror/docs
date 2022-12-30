# OCK-accelerated Data Transmission<a name="EN-US_TOPIC_0000001336415954"></a>

## Availability<a name="section1271121702611"></a>

This feature is available since openGauss 3.1.0.

## Introduction<a name="section389532632615"></a>

RDMA is used to transmit data and messages between nodes, improving the read consistency on standby nodes.

## Benefits<a name="section16338114352616"></a>

As the data scale and nodes increase, network data transmission between nodes takes a long time, affecting end-to-end database user experience. RDMA can significantly reduce network latency and improve read consistency on standby nodes.

## Description<a name="section6556152132619"></a>

OCK-accelerated data transmission is a lightweight RPC framework implemented based on high-performance RDMA networks. It is used to replace the original TCP/IP message transmission module and transmit data and various messages between nodes, building μs-level competitiveness, significantly reducing CPU resource overhead and network latency, and improving the read consistency on standby nodes.

## Enhancements<a name="section12138185182719"></a>

None

## Constraints<a name="section1172911416276"></a>

The database server must use the CX5 NIC.

## Dependencies<a name="section19664925202713"></a>

Primary/Standby shared storage feature.
