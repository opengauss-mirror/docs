---
description: This document describes Support for Standby-to-Standby Build in openGauss, covering topics such as Availability, Introduction.
keywords: [openGauss, Support for Standby-to-Standby Build, database O&M, Availability, Introduction]
---

# Support for Standby-to-Standby Build

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:51.683Z -->

## Availability<a name="section14707931165614"></a>

This feature has been available since openGauss 3.0.0.

## Introduction<a name="section43398242"></a>

Standby-to-standby build accelerates the recovery of faulty standby nodes and reduces I/O and bandwidth pressure on the primary node.

## Customer Benefits<a name="section55039858"></a>

Under heavy business loads, building a standby node from the primary node consumes primary resources, leading to degraded primary performance and slower build speeds. Using standby-to-standby build eliminates any impact on primary business operations.

## Feature Description<a name="section25596675"></a>

You can use the `gs_ctl` command to specify a healthy standby node as the source to build a faulty standby node. For detailed procedures, refer to the *Tool and Command Reference*, specifically the "Tools Used in the Internal System > gs_ctl" section.

## Feature Enhancements<a name="section29043486"></a>

None.

## Feature Constraints<a name="section27741012910"></a>

Only standby-to-standby build is supported. You must specify the source standby node using its IP address and port. Before initiating the build, ensure that the WAL logs on the faulty standby node lag behind those on the source standby node.

## Dependencies<a name="section57771982"></a>

None.
