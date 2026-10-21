---
description: This document describes GMS_OUTPUT Package in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, GMS_OUTPUT Package, features, Availability, Feature Overview]
---

# GMS_OUTPUT Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:15:04.841Z pushedAt=2026-09-22T11:12:32.645Z -->

## Availability

This feature has been available since openGauss 6.0.0.

## Feature Overview

This feature implements the [GMS_OUTPUT Advanced Package](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_output.md), providing multiple output-related function interfaces for users.

## Customer Benefits

The GMS_OUTPUT package is mainly used to debug PL/SQL programs. It allows developers to send messages from stored procedures, packages, and so on. These messages can be captured and displayed on the client (such as gsql), helping developers locate problems and understand the program execution flow.

## Feature Description

- The most notable feature of `GMS_OUTPUT` is that it serves as a debugging tool for PL/SQL code. It allows developers to insert `GMS_OUTPUT.PUT_LINE` or `GMS_OUTPUT.PUT` calls anywhere in PL/SQL code to output variable values, messages, or execution status. This is essential for diagnosing problems and understanding code logic and execution flow.
- The `GMS_OUTPUT.ENABLE` and `GMS_OUTPUT.DISABLE` procedures control whether output is sent to the client. Essentially, these procedures allocate a buffer for storing messages and release the buffer, allowing developers to enable debugging output when needed and disable it in production environments.
- The `GMS_OUTPUT.GET_LINE` and `GMS_OUTPUT.GET_LINES` procedures retrieve an array of lines from the buffer and read one line or a specified number of lines of text information.
- The `GMS_OUTPUT.NEW_LINE` procedure places an end-of-line marker into the line buffer.

## Feature Enhancements

None.

## Feature Constraints

- The plug-in can be loaded only by using the CREATE EXTENSION command.

## Dependencies

None.
