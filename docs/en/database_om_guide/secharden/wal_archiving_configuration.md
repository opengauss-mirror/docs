# WAL Archiving Configuration

## Ensure the WAL Information Logging Level Is Correctly Configured

### Description

Write Ahead Log (WAL) is a mechanism used by the database to ensure transaction durability. The `wal_level` parameter determines the amount of information written to the WAL. To enable read-only queries on standby nodes, `wal_level` must be set to `hot_standby` on the primary node, and `hot_standby` must be set to `on` on the standby node.

### Implementation

**Check Method:**

Check whether the `wal_level` parameter is set to the default value `hot_standby`. If not, the check fails.

```sql
openGauss=# show wal_level;
 wal_level
-----------
 hot_standby
(1 row)
```

**Fix Method:**

Set the `wal_level` parameter to `hot_standby` and restart the database to apply the changes.

```bash
gs_guc set -Z datanode -N all -I all -c "wal_level=hot_standby"
gs_om -t stop && gs_om -t start
```

## Ensure the Archiving Mode Is Enabled

### Description

The `archive_mode` parameter controls whether WAL archiving is enabled. It is recommended to enable this parameter only when `wal_level` is set to `archive`. When `wal_level` is set to `minimal`, `archive_mode` cannot be used. If `archive_mode` is set to `on`, the `archive_command` parameter must also be configured to specify the command for archiving WAL logs.

### Implementation

**Check Method:**

1. Check whether the `wal_level` parameter is set to `archive`.
2. If `wal_level` is `archive`, verify that the `archive_mode` parameter is set to `on`.
3. If `wal_level` is configured as `hot_standby`, checking `archive_mode` is not required.

```sql
openGauss=# show wal_level;
 wal_level
-----------
 hot_standby
(1 row)

openGauss=# show archive_mode;
 archive_mode
-------------
 off
(1 row)
```

**Fix Method:**

When `wal_level` is set to `archive`, set `archive_mode` to `on` and configure `archive_command` to specify the WAL archiving command. The value of `archive_command` is for reference only. The `--remove-destination` option ensures that if the target file already exists, it is deleted before copying.

```bash
gs_guc reload -Z datanode -N all -I all -c "archive_mode=on"
gs_guc reload -Z datanode -N all -I all -c "archive_command='cp --remove-destination %p /mnt/server/archive/%f'"
```
