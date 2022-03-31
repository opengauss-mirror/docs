# Deploying a Distributed Database Using Kubernetes<a name="EN-US_TOPIC_0000001264707841"></a>

## Availability<a name="section3594727121215"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section49381643132417"></a>

Deploys a distributed database in one-click mode.

## Benefits<a name="section143901154141215"></a>

Quickly builds a distributed database, and verifies and uses the distributed capability.

## Description<a name="section57261629139"></a>

Patroni is used to implement planned switchover and automatic failover in case of faults. HAProxy is used to implement read and write load balancing between the primary and standby openGauss nodes. ShardingSphere is used to implement distributed capabilities. All functions are packaged into images and one-click deployment scripts are provided.

## Enhancements<a name="section790711851312"></a>

None.

## Constraints<a name="section8686411191311"></a>

Only CentOS and openEuler are supported.

## Dependencies<a name="section185341414141318"></a>

ShardingSphere, Patroni, HAProxy

