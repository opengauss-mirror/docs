---
description: This document describes Reverse Full Migration in openGauss, covering topics such as Feature Overview, Customer Benefits.
keywords: [openGauss, Reverse Full Migration, features, Feature Overview, Customer Benefits]
---

# Reverse Full Migration

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:24:54.596Z pushedAt=2026-09-22T11:12:32.690Z -->

## Feature Overview<a name="section740615433477"></a>

This feature has been available since openGauss 5.1.0. It supports full data migration from openGauss to MySQL.

## Customer Benefits<a name="section13406743164715"></a>

Reverse migration meets users' need for business migration escape. It enables full data migration from the openGauss database to the MySQL database while maintaining maximum compatibility.

## Feature Description<a name="section16406154310471"></a>

The source side of the debezium opengauss connector collects table data from openGauss, divides the data by table, writes the data to files, and finally pushes the file information to Kafka to provide information for the sink side.

The sink side of the debezium opengauss connector pulls and consumes messages from Kafka, first performs target type conversion on the file data, and then replays the data in parallel by table on the MySQL side to complete the data import, thereby migrating data from openGauss to MySQL.

## Feature Enhancements<a name="section1340684315478"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

After the reverse full data migration is complete, reverse incremental migration is started, so it inherits all constraints of reverse migration.

## Dependencies<a name="section8406643144716"></a>

None.

## References<a name="section57771982"></a>

Reverse migration community address: <https://atomgit.com/opengauss/debezium/tree/5.1.0>

For detailed reference documentation, see <a href="https://atomgit.com/opengauss/debezium/blob/5.1.0/README.md ">README.md</a>
