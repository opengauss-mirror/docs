---
description: This document describes oGRecorder API Optimization in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, oGRecorder API Optimization, tools and commands, Availability, Feature Overview]
---

# oGRecorder API Optimization

## Availability<a name="section3480125215575"></a>

This feature has been available since oGRecorder version 7.0.0-RC3.

## Feature Overview<a name="section5814521587"></a>

This feature provides remote management capabilities based on REST API, supporting queries for Data Vault cluster information and cluster state control operations.

## Customer Value<a name="section148987345811"></a>

This feature provides customers with a standardized remote interface, facilitating integration with management platforms. It improves the efficiency of cluster status queries and O&M control, reducing the need for manual node login operations. Through authentication and access control mechanisms, it enhances the security of API calls.

## Feature Description<a name="section117041846581"></a>

- **Status Query**: Supports querying node status, cluster status, and key runtime information.
- **Cluster Control**: Supports common O&M control capabilities such as primary-standby switchover and start/stop operations.
- **Identity Authentication**: API calls must pass SSL identity authentication and whitelist verification to ensure trusted access.

## Enhancements<a name="section21149265913"></a>

Building upon existing oGRecorder capabilities, this feature enhances remote manageability, controllability, and interface-based integration capabilities.

## Constraints<a name="section51513617597"></a>

This feature is only supported in oGRecorder scenarios.

## Dependencies<a name="section20491151513592"></a>

None.

## Usage Guidelines<a name="section20491151513593"></a>

Refer to the [Cluster Information Query and Push](../features.md#cluster-information-query-and-push).

## Application Scenarios<a name="section8406643144719"></a>

This feature is suitable for oGRecorder integration with a unified management platform to achieve visualized cluster status queries and remote O&M control.
