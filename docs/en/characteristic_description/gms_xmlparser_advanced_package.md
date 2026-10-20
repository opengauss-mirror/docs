---
description: This document describes gms_xmlparser Advanced Package in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_xmlparser Advanced Package, features, Availability, Feature Overview]
---

# gms_xmlparser Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:17:56.931Z pushedAt=2026-09-22T11:12:32.664Z -->

## Availability

This feature is introduced in the current version.

## Feature Overview

The [gms_xmlparser extension](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_xmlparser.md) is used to parse XML strings or XML files and provides parser handle and document handle management capabilities.

## Customer Benefits

`gms_xmlparser` provides a lightweight XML parsing interface for Oracle-compatible scenarios, making it easy for applications to load, parse, and transfer XML document objects on the database side.

## Feature Description

- Supports creating a parser handle through `newparser`.
- Supports passing an XML string or file path to `parse` for parsing.
- Supports writing buffer content to the parser through `parsebuffer` and `parseclob`.
- Supports obtaining the parsed document object through `getdocument`.
- Supports releasing internal resources through `freeparser` and `gms_xmldom.freedocument`.

## Feature Enhancements

None.

## Feature Constraints

- The extension can be loaded only by using the `CREATE EXTENSION` command.
- Depends on `libxml`. The lightweight openGauss does not support this extension.
- The handle type is an internal type and cannot be constructed by users.
- After use, the parser and document objects must be released proactively.

## Dependencies

- Depends on `libxml`.
