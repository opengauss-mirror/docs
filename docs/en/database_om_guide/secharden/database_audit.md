# Database Audit

## Ensure Database Audit Is Enabled

### Description

Audit logs support post-event tracing, root cause analysis, and accountability assignment. Enable the database audit function by setting `audit_enabled` to `on`.

### Implementation

**Check Method:**

Check whether `audit_enabled` is set to `on`. Any other value fails the check.

```sql
openGauss=# show audit_enabled;
 audit_enabled
---------------
 on
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_enabled = on"
```

## Ensure User Login and Logout Auditing Is Enabled

### Description

The `audit_login_logout` parameter controls whether the system records login attempts (both successful and failed) and logout events. Enabling this parameter allows tracking of user access patterns and session durations.

### Implementation

**Check Method:**

Check whether `audit_login_logout` is set to `7`. Any other value fails the check.

```sql
openGauss=# show audit_login_logout;
 audit_login_logout
--------------------
 7
(1 row)
```

**Fix Method:**

Set `audit_login_logout` to `7` to log successful logins, failed logins, and logouts.

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_login_logout = 7"
```

## Ensure Database Lifecycle Event Audit Is Enabled

### Description

The `audit_database_process` parameter controls whether the system audits critical lifecycle events, including startup, shutdown, switchover, and recovery operations.

### Implementation

**Check Method:**

Check whether `audit_database_process` is set to `1`. Any other value fails the check.

```sql
openGauss=# show audit_database_process;
 audit_database_process
------------------------
 1
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_database_process = 1"
```

## Ensure User Lock and Unlock Audit Is Enabled

### Description

The `audit_user_locked` parameter controls whether the system logs account lock and unlock operations.

### Implementation

**Check Method:**

Check whether `audit_user_locked` is set to `1`. Any other value fails the check.

```sql
openGauss=# show audit_user_locked;
 audit_user_locked
-------------------
 1
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_user_locked = 1"
```

## Ensure Privilege Grant and Revocation Audit Is Enabled

### Description

The `audit_grant_revoke` parameter controls whether the system logs privilege grant and revoke operations performed on users and roles.

### Implementation

**Check Method:**

Check whether `audit_grant_revoke` is set to `1`. Any other value fails the check.

```sql
openGauss=# show audit_grant_revoke;
 audit_grant_revoke
--------------------
 1
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_grant_revoke = 1"
```

## Ensure DDL Operation Auditing Is Enabled

### Description

The `audit_system_object` parameter uses a 28-bit mask to control audit for CREATE, ALTER, and DROP operations on database objects (DATABASE, SCHEMA, USER, TABLE, etc.). Each bit corresponds to a specific object type. A value of `1` enables audit for that object type; `0` disables it. Two bits are reserved. For details on bit mappings, refer to the official openGauss documentation.

### Implementation

**Check Method:**

Check whether `audit_system_object` is set to at least `67121159`. Lower values fail the check.

```sql
openGauss=# show audit_system_object;
 audit_system_object
---------------------
 67121159
(1 row)
```

**Fix Method:**

Set `audit_system_object` to `67121159`. This configuration audits DDL operations on DATABASE, SCHEMA, USER, DATA SOURCE, and SQL PATCH objects. Adjust this value to audit additional object types as required by your business.

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_system_object = 67121159"
```

## Ensure SELECT Operation Audit Is Enabled

### Description

The `audit_dml_state_select` parameter controls whether the system audits SELECT queries on database objects. The default value is `0`, meaning the audit is disabled.

### Implementation

**Check Method:**

Check whether `audit_dml_state_select` is set to `1`. Any other value fails the check.

```sql
openGauss=# show audit_dml_state_select;
 audit_dml_state_select
------------------------
 0
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_dml_state_select = 1"
```

## Ensure Audit Retention Policy Prioritizes Space

### Description

The `audit_resource_policy` parameter defines the audit log retention policy. Setting this parameter to `on` enables space-prioritized retention, ensuring that audit logs do not exhaust disk space.

### Implementation

**Check Method:**

Check whether `audit_resource_policy` is set to `on`. Any other value fails the check.

```sql
openGauss=# show audit_resource_policy;
 audit_resource_policy
-----------------------
 on
(1 row)
```

**Fix Method:**

Set `audit_resource_policy` to `on` (prioritizing space).

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_resource_policy = on"
```

## Ensure Audit File Rotation Interval Is Correctly Configured

### Description

The `audit_rotation_interval` parameter defines the maximum age of a single audit log file. When this interval elapses, the system creates a new log file.

### Implementation

**Check Method:**

Check whether `audit_rotation_interval` is set to `1d` (1440 minutes). Any other value fails the check.

```sql
openGauss=# show audit_rotation_interval;
 audit_rotation_interval
-------------------------
 1d
(1 row)
```

**Fix Method:**

Set `audit_rotation_interval` to `1440` (minutes), equivalent to one day.

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_rotation_interval = 1440"
```

## Ensure Audit File Size Limit Is Correctly Configured

### Description

The `audit_rotation_size` parameter defines the maximum size of a single audit log file. Once a file reaches this limit, the system rotates to a new file.

### Implementation

**Check Method:**

Check whether `audit_rotation_size` is set to `10MB`. Any other value fails the check.

```sql
openGauss=# show audit_rotation_size;
 audit_rotation_size
---------------------
 10MB
(1 row)
```

**Fix Method:**

Set `audit_rotation_size` to `10MB`.

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_rotation_size = 10MB"
```

## Ensure Total Audit Space Limit Is Correctly Configured

### Description

The `audit_space_limit` parameter defines the maximum disk space allocated to audit logs. When the total size exceeds this limit, the system deletes the oldest audit files and logs the deletion event.

### Implementation

**Check Method:**

Check the value of `audit_space_limit`. Values below `1GB` are not recommended.

```sql
openGauss=# show audit_space_limit;
 audit_space_limit
-------------------
 1GB
(1 row)
```

**Fix Method:**

Set `audit_space_limit` based on operational requirements. A minimum of `1GB` is recommended.

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_space_limit = 1GB"
```

## Ensure Audit File Retention Threshold Is Correctly Configured

### Description

The `audit_file_remain_threshold` parameter defines the maximum number of audit log files retained on disk. When the file count exceeds this threshold, the system deletes the oldest files and logs the deletion event.

### Implementation

**Check Method:**

Check whether `audit_file_remain_threshold` is set to `1048576`. Any other value fails the check.

```sql
openGauss=# show audit_file_remain_threshold;
 audit_file_remain_threshold
-----------------------------
 1048576
(1 row)
```

**Fix Method:**

Set `audit_file_remain_threshold` to 1048576.

```bash
gs_guc reload -Z datanode -N all -I all -c "audit_file_remain_threshold = 1048576"
```
