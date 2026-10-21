---
description: This document describes Elasticsearch and Milvus Migration Through DataKit in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Elasticsearch and Milvus Migration Through DataKit, features, Availability, Feature Overview]
---

# Elasticsearch and Milvus Migration Through DataKit

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:07:06.434Z pushedAt=2026-09-22T11:12:32.615Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC3.

## Feature Overview

This feature integrates the data migration capabilities of Elasticsearch and Milvus into the DataKit data migration plug-in, allowing users to migrate data from Elasticsearch or Milvus to openGauss directly through DataKit.

## Customer Benefits

This feature provides an efficient and easy-to-use data migration channel, helping users smoothly migrate vector data from Elasticsearch or Milvus to the openGauss database. While retaining the original business data, users can seamlessly use the vector search capability of openGauss, achieving a transparent transition and upgrade of their business.

## Feature Description

The original Elasticsearch/Milvus migration tool is a Python-based script that requires manually modifying the configuration file and executing the script. This feature integrates its migration process into the DataKit data migration plug-in, supporting the following enhancements:

- **Visual task management**: Create, start, stop, and manage migration tasks through the DataKit UI.
- **Real-time progress monitoring**: View the data migration progress in real time on the DataKit page.
- **Migration log access**: View or download migration logs directly in the UI for easy issue tracking and analysis.
- **Parallel migration support**: Create migration tasks for parallel migration of multiple tables, improving migration efficiency.

## Feature Constraints

(1) Server restrictions

The tool currently runs only on Linux servers with the specified system architectures. The supported system architectures are as follows:

- CentOS7 x86_64
- openEuler20.03 x86_64/aarch64
- openEuler22.03 x86_64/aarch64
- openEuler24.03 x86_64/aarch64

(2) Runtime environment restrictions

The tool is written in Java 17 and Python 3.8, and requires the server to have Java 17+ and Python 3.8+ runtime environments.

(3) Database version restrictions

- Elasticsearch 7.3 or later.
- Milvus 2.3 or later.
- openGauss 7.0.0-RC1 or later.

## Dependencies

None.

## References

For information about using this feature to complete Elasticsearch/Milvus migration, see [DataKit documentation](https://docs.opengauss.org/en/docs/latest/datakit/datakit.html).
