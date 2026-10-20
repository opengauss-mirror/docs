---
description: This document describes User-Mode Networking in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, User-Mode Networking, features, Availability, Feature Overview]
---

# User-Mode Networking

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:34:57.236Z pushedAt=2026-09-22T11:12:32.719Z -->

## Availability

This feature has been available since openGauss 6.0.0.

## Feature Overview

openGauss supports a high-performance user-mode network protocol stack. When this feature is used, no context switch is required in the data flow path, delivering higher performance.

## Customer Benefits

The user-mode network protocol stack delivers higher network response speed, lower latency, and stronger performance.

## Feature Description

openGauss uses the high-performance user-mode network protocol stack (Gazelle) and technologies such as huge page partitioning, dynamic CPU binding, and full-path zero-copy to avoid resource sharing overhead.
Based on the design that separates data read/write from protocol processing, it avoids multi-thread lock contention, thereby maximizing performance.

## Feature Enhancements

None.

## Feature Constraints

The server must have at least two IP addresses, one of which is dedicated to the user-mode network protocol stack. Mellanox CX5/CX6 and Hi 1822 NICs are supported.

## Dependencies

None.
