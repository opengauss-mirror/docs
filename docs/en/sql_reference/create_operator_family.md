---
description: This document describes CREATE OPERATOR FAMILY in openGauss, covering topics such as Description, Syntax.
keywords: [openGauss, CREATE OPERATOR FAMILY, SQL, Description, Syntax]
---

# CREATE OPERATOR FAMILY

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:20:18.743Z -->

## Description

Defines a new operator family.

## Syntax

```txt
CREATE OPERATOR FAMILY name USING index_method
```

## Parameter Description

- `name`

    Name of the operator family to be created. The name can be schema-qualified.

- `index_method`

    Index method to which this operator family applies.

## Example

```sql
CREATE OPERATOR FAMILY family_name USING btree;
```
