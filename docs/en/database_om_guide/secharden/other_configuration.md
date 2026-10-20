---
description: This document describes Other Configurations in openGauss, covering topics such as Ensure Correct Configuration of the backslash_quote Parameter, Prohibit Modification of System Table Structures.
keywords: [openGauss, Other Configurations, database O&M, Ensure Correct Configuration of the backslash_quote Parameter, Prohibit Modification of System Table Structures]
---

# Other Configurations


## Ensure Correct Configuration of the backslash_quote Parameter

### Description

The `backslash_quote` parameter controls whether `\'` is accepted as a string literal escape sequence for single quotes. This notation introduces security risks, including SQL injection vulnerabilities. Configure the server to reject queries containing backslash-escaped quotes. Use the SQL standard method of doubling single quotes (`''`) instead.

### Implementation

**Check Method:**

Check the value of the `backslash_quote` parameter. If it is not `safe_encoding` or `off`, the check fails.

```sql
openGauss=# show backslash_quote;
 backslash_quote
-----------------
 safe_encoding
(1 row)
```

**Fix Method:**

Set the `backslash_quote` parameter to `safe_encoding` or `off`.

```bash
gs_guc reload -Z datanode -N all -I all -c "backslash_quote=safe_encoding"
```

## Prohibit Modification of System Table Structures

### Description

The `allow_system_table_mods` parameter controls whether modifications to system table structures are permitted. While this parameter may assist in recovering a corrupted database in extreme scenarios, modifying system tables in production environments introduces severe security risks, including data loss and system instability. Set `allow_system_table_mods` to `off` in production deployments.

### Implementation

**Check Method:**

Check whether the value of the `allow_system_table_mods` parameter is `off`. Any other value fails the check.

```sql
openGauss=# show allow_system_table_mods;
 allow_system_table_mods
-------------------------
 off
(1 row)
```

**Fix Method:**

Set the `allow_system_table_mods` parameter to `off`, then restart the database.

```bash
gs_guc set -Z datanode -N all -I all -c "allow_system_table_mods=off"
gs_om -t stop && gs_om -t start
```
