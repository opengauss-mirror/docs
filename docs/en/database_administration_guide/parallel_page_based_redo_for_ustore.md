---
description: This document describes Parallel Page-based Redo for Ustore in openGauss, covering topics such as Availability, Feature Introduction.
keywords: [openGauss, Parallel Page-based Redo for Ustore, database administration, Availability, Feature Introduction]
---

# Parallel Page-based Redo for Ustore

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:44:54.930Z pushedAt=2026-09-11T09:27:23.345Z -->

## Availability <a name="section1136213124018"></a>

This feature is introduced since openGauss 2.1.0.

## Feature Introduction <a name="section31192232416"></a>

The Ustore Inplace Update WAL log writing is optimized, and the parallelism of Ustore DML operation replay is improved.

## Customer Benefits<a name="section747141119423"></a>

The WAL space usage for Update operations is reduced, and the parallelism of Ustore DML operation replay is improved.

## Feature Description<a name="section1796166174315"></a>

The update WAL log write volume is reduced by leveraging prefix and suffix. The replay threads are categorized into multiple types to address the issue that most Ustore DML WAL records involve multi-page replay. Meanwhile, the data page replay of Ustore is distributed by blkno.

## Feature Enhancements<a name="section18965647194512"></a>

None.

## Feature Constraints<a name="section1575615618465"></a>

None.

## Dependencies<a name="section2535204364616"></a>

Depends on the Ustore engine.
