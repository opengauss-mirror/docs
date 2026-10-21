---
description: This document describes PROC Coverage Schema in openGauss.
keywords: [openGauss, PROC Coverage Schema, SQL]
---

# PROC Coverage Schema

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:25:22.328Z -->

During database initialization, a schema `coverage` is created under the user tablespace `pg_default` and the database `postgres` for persistently storing stored procedure coverage data. The default initialization user or the `monadmin` user can access the Coverage Schema.
