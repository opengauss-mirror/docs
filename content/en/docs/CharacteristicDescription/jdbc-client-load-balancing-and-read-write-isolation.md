# JDBC Client Load Balancing and Read/Write Isolation<a name="EN-US_TOPIC_0000001168070076"></a>

## Availability<a name="section1076382216287"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section732915401281"></a>

The JDBC client provides load balancing and read/write isolation capabilities.

## Benefits<a name="section103921852122817"></a>

Load balancing and read/write isolation can be configured on the JDBC client.

## Description<a name="section811017719290"></a>

The IP addresses and port numbers of multiple nodes on the client are configured to adapt to HA switchover between multiple AZs and remote DR switchover. The connection-level read/write isolation configuration is supported. Preferentially connecting to read-only nodes is supported. Multiple read-only nodes are evenly distributed.

## Enhancements<a name="section1359382119297"></a>

None.

## Constraints<a name="section13355203802911"></a>

None.

## Dependencies<a name="section101449415302"></a>

None.

