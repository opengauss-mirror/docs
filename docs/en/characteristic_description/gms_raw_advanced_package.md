---
description: This document describes gms_raw Plug-in in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_raw Plug-in, features, Availability, Feature Overview]
---

# gms_raw Plug-in

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:15:54.828Z pushedAt=2026-09-22T11:12:32.647Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview

The [gms_raw Plug-in](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_raw.md) is used to convert and manipulate hexadecimal raw type data.

## Customer Benefits

The gms_raw plug-in is used to convert and manipulate hexadecimal raw type data.

## Feature Description

- gms_raw is an openGauss-based plug-in used to convert and manipulate hexadecimal raw type data.

## Feature Enhancements

None.

## Feature Constraints

- The plug-in can be loaded only by using the CREATE EXTENSION command.
- The gms_raw plug-in does not support set schema. Executing `alter extension gms_raw set schema new_name;` reports an error.

## Dependencies

None.
