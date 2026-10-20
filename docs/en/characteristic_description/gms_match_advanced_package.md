---
description: This document describes gms_match Plug-in in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_match Plug-in, features, Availability, Feature Overview]
---

# gms_match Plug-in

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:14:32.028Z pushedAt=2026-09-22T11:12:32.642Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview

The [gms_match Plug-in](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_match.md) is used to compare the similarity between two strings.

## Customer Benefits

The gms_match plug-in is used to compare the similarity between two strings.

## Feature Description

- gms_match is an openGauss-based plug-in used to compare the similarity between two strings.

## Feature Enhancements

None.

## Feature Constraints

- The plug-in can be loaded only by using the CREATE EXTENSION command.
- The gms_match plug-in does not support SET SCHEMA. Executing `alter extension gms_match set schema new_name;` reports an error.

## Dependencies

None.
