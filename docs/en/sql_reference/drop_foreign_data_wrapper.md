---
description: This document describes DROP FOREIGN DATA WRAPPER in openGauss, covering topics such as Function Description, Syntax.
keywords: [openGauss, DROP FOREIGN DATA WRAPPER, SQL, Function Description, Syntax]
---

# DROP FOREIGN DATA WRAPPER

## Function Description

Drops a foreign data wrapper (FDW).

## Syntax

```
DROP FOREIGN DATA WRAPPER [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Parameter Description

- **name**

    Specifies the name of an FDW to be dropped.

- **CASCADE**

    Automatically drops objects (such as servers) that depend on the FDW.

- **RESTRICT**

    Refuses to drop the FDW if there is any dependency on the FDW. This option is the default option.

## Examples

```
--Create an FDW named dbi.
openGauss=# CREATE FOREIGN DATA WRAPPER dbi OPTIONS (debug 'true');
--Drop dbi.
openGauss=# DROP FOREIGN DATA WRAPPER dbi;
```
