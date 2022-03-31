# Distributed Database Capability<a name="EN-US_TOPIC_0000001220467648"></a>

## Availability<a name="section135316597815"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section179114112911"></a>

This feature uses the distributed middleware shardingsphere to provide openGauss the distributed database capability. When 16 Kunpeng 920 \(128 cores\) nodes are used for networking \(1 x shardingsphere-proxy, 7 x shardingsphere-jdbc, 8 x openGauss\), the perfect sharding performance is greater than 10 million transactions per minute C \(tpmC\).

## Benefits<a name="section121868185910"></a>

A distributed database that logically has no resource restriction can be built over the middleware.

## Description<a name="section3804421498"></a>

With the sharding capability of shardingsphere, multiple openGauss databases can logically form a larger database with distributed transactions and elastic scaling capabilities. The usage method is the same as that of an openGauss database.

## Enhancements<a name="section18502924493"></a>

None.

## Constraints<a name="section139558268916"></a>

None.

## Dependencies<a name="section1559552916919"></a>

Shardingsphere middleware

