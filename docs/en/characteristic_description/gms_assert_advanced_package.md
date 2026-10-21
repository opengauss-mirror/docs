---
description: This document describes gms_assert Advanced Package in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_assert Advanced Package, features, Availability, Feature Overview]
---

# gms_assert Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:11:49.630Z pushedAt=2026-09-22T11:12:32.631Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview

This feature implements the [GMS_ASSERT Advanced Package](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/zh/extension_reference/gms_stats.md), which is used to validate the properties of input values.

## Customer Benefits

- gms_assert can be used to validate input values, preventing issues such as SQL injection.

## Feature Description

- The plug-in is created by using the CREATE EXTENSION command.
- The gms_assert package can be used to validate the properties of input values, including validating strings (whether quotes are used correctly) and validating the validity of database object names.

## Feature Enhancements

None.

## Performance Enhancements

None.

## Feature Constraints

- The plug-in can be loaded only by using the `create extension` command.

## Dependencies

None.
