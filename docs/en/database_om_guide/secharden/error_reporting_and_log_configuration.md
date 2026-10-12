# Error Reporting and Log Configuration

## Ensure That the Log Collector Is Enabled

### Description

The `logging_collector` parameter controls whether to start the backend log collection process `logger`. This process captures log messages sent to `stderr` or `csvlog` and writes them to log files. This logging method is more effective than `syslog`, because certain message types cannot be displayed in `syslog` output.

### Implementation

**Check Method:**

Check whether the `logging_collector` parameter is set to `on`. Any other value fails the check.

```sql
openGauss=# show logging_collector;
 logging_collector
-------------------
 on
(1 row)
```

**Fix Method:**

Set `logging_collector` to `on` in the `postgresql.conf` configuration file, then restart the database.

```bash
gs_guc set -Z datanode -N all -I all -c "logging_collector=on"
gs_om -t stop && gs_om -t start
```

## Ensure Correct Log Name Configuration

### Description

The `log_filename` parameter defines the name of the server running log file. Use the `%` escape character to include date and time information automatically. This facilitates effective log file management.

### Implementation

**Check Method:**

Check the `log_filename` parameter configuration. The recommended default format includes date and time information.

```sql
openGauss=# show log_filename;
          log_filename
--------------------------------
 postgresql-%Y-%m-%d_%H%M%S.log
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'"
```

## Ensure That Log File Permissions Are Correctly Configured

### Description

When `logging_collector` is enabled, the `log_file_mode` parameter sets the permissions of server log files. Log files may contain sensitive user data. Restrict access to prevent information leakage or tampering.

### Implementation

**Check Method:**

Check whether the `log_file_mode` parameter is set to `0600`. Any other value fails the check.

```sql
openGauss=# show log_file_mode;
 log_file_mode
---------------
 0600
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "log_file_mode=0600"
```

## Prohibit Overwriting Log Files with the Same Name

### Description

The `log_truncate_on_rotation` parameter controls the write mode for log messages. When set to `on`, new messages overwrite existing log files during rotation. When set to `off`, new messages append to existing files. To retain logs for longer periods, set this parameter to `off` to prevent overwriting existing logs.

### Implementation

**Check Method:**

Check whether the `log_truncate_on_rotation` parameter is set to `off`. Any other value fails the check.

```sql
openGauss=# show log_truncate_on_rotation;
 log_truncate_on_rotation
--------------------------
 off
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "log_truncate_on_rotation=off"
```

## Ensure That the Maximum Recording Time of a Single Log File Is Correctly Configured

### Description

The `log_rotation_age` parameter defines the maximum logging duration for a single log file. Once this duration elapses, the server creates a new log file. Proper configuration balances log generation frequency against file size management.

### Implementation

**Check Method:**

Check the `log_rotation_age` parameter configuration. The recommended value is `1d` (one day).

```sql
openGauss=# show log_rotation_age;
 log_rotation_age
------------------
 1d
(1 row)
```

**Fix Method:**

Set `log_rotation_age` to `1d` (1440 minutes).

```bash
gs_guc reload -Z datanode -N all -I all -c "log_rotation_age=1d"
```

## Ensure the Maximum Capacity of a Single Log File Is Correctly Configured

### Description

The `log_rotation_size` parameter defines the maximum size of a single log file. When a file reaches this limit, the server creates a new log file. This prevents management difficulties caused by excessively large log files.

### Implementation

**Check Method:**

Check the `log_rotation_size` parameter configuration. The recommended value is `20MB`.

```sql
openGauss=# show log_rotation_size;
 log_rotation_size
-------------------
 20MB
(1 row)
```

**Fix Method:**

Set `log_rotation_size` to `20MB`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_rotation_size=20MB"
```

## Ensure Correct Client Log Level Configuration

### Description

The `client_min_messages` parameter controls which message levels are sent to the client. Valid values include `debug`, `debug5`, `debug4`, `debug3`, `debug2`, `debug1`, `info`, `notice`, `warning`, `error`, `log`, `fatal`, and `panic`. Each level includes all subsequent levels. If the configured level exceeds `error` (for example, `fatal` or `panic`), the system defaults to `error`.

### Implementation

**Check Method:**

Check the `client_min_messages` parameter value. Values of `debug` or `debug1` through `debug5` indicate incorrect configuration.

```sql
openGauss=# show client_min_messages;
 client_min_messages
---------------------
 notice
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "client_min_messages=notice"
```

## Ensure That the Server Log Level Is Correctly Configured

### Description

The `log_min_messages` parameter controls which message levels are written to the server log. Valid values include `debug`, `debug5`, `debug4`, `debug3`, `debug2`, `debug1`, `info`, `notice`, `warning`, `error`, `log`, `fatal`, and `panic`. Each level includes all subsequent levels.

### Implementation

**Check Method:**

Check the `log_min_messages` parameter value. Values of `debug` or `debug1` through `debug5` indicate incorrect configuration.

```sql
openGauss=# show log_min_messages;
 log_min_messages
------------------
 warning
(1 row)
```

**Fix Method:**

Set `log_min_messages` to `warning`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_min_messages=warning"
```

## Ensure Correct Log Level Configuration for Recording SQL Statements That Cause Errors

### Description

The `log_min_error_statement` parameter controls whether SQL statements causing errors are recorded in the server log. Valid values include `debug`, `debug5`, `debug4`, `debug3`, `debug2`, `debug1`, `info`, `notice`, `warning`, `error`, `log`, `fatal`, and `panic`. When set to `error`, statements producing `error`, `fatal`, and `panic` level messages are recorded. Set this parameter to `panic` to disable recording if sensitive information must not be logged.

### Implementation

**Check Method:**

Check whether the `log_min_error_statement` parameter is set to `error`. Any other value indicates incorrect configuration.

```sql
openGauss=# show log_min_error_statement;
 log_min_error_statement
-------------------------
 error
(1 row)
```

**Fix Method:**

Set `log_min_error_statement` to `error`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_min_error_statement=error"
```

## Ensure That the Logging Function Is Enabled Upon User Login

### Description

The `log_connections` parameter controls whether the server logs each connection attempt and successful client authentication event.

### Implementation

**Check Method:**

Check whether the `log_connections` parameter is set to `on`. Any other value fails the check.

```sql
openGauss=# show log_connections;
 log_connections
-----------------
 on
(1 row)
```

**Fix Method:**

Set `log_connections` to `on`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_connections=on"
```

## Ensure That the Logging Function Is Enabled for User Logout

### Description

The `log_disconnections` parameter controls whether the server logs client disconnection events. The log entry includes the session duration.

### Implementation

**Check Method:**

Check whether the `log_disconnections` parameter is set to `on`. Any other value fails the check.

```sql
openGauss=# show log_disconnections;
log_disconnections
--------------------
on
(1 row)
```

**Fix Method:**

Set `log_disconnections` to `on`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_disconnections=on"
```

## Ensure That the Verbosity Configuration for Information Written to the Server Log Is Correct

### Description

The `log_error_verbosity` parameter controls the detail level of messages written to the server log. Valid values are `TERSE`, `DEFAULT`, and `VERBOSE`.

### Implementation

**Check Method:**

Check whether the `log_error_verbosity` parameter is set to `default`. Any other value fails the check.

```sql
openGauss=# show log_error_verbosity;
 log_error_verbosity
---------------------
 default
(1 row)
```

**Fix Method:**

Set `log_error_verbosity` to `default`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_error_verbosity=default"
```

## Ensure That Logs Do Not Record the Host Name

### Description

The `log_hostname` parameter controls whether the server resolves and logs the connecting host name. Enabling this parameter introduces DNS lookup overhead. Set `log_hostname` to `off` to log only IP addresses and avoid performance degradation.

### Implementation

**Check Method:**

Check whether the `log_hostname` parameter is set to `off`. Any other value fails the check.

```sql
openGauss=# show log_hostname;
 log_hostname
--------------
 off
(1 row)
```

**Fix Method:**

Set `log_hostname` to `off`.

```bash
gs_guc reload -Z datanode -N all -I all -c "log_hostname=off"
```

## Ensure the Parse Tree Debug Print Switch Is Turned Off

### Description

The `debug_print_parse` parameter controls whether the query parse tree is printed to the log. Enabling this parameter consumes disk space and degrades query performance. In production environments, set this parameter to `off`.

### Implementation

**Check Method:**

Check whether the `debug_print_parse` parameter is set to `off`. Any other value fails the check.

```sql
openGauss=# show debug_print_parse;
debug_print_parse
-----------------
off
(1 row)
```

**Fix Method:**

Set `debug_print_parse` to `off`.

```bash
gs_guc reload -Z datanode -N all -I all -c "debug_print_parse=off"
```

## Ensure That the Execution Plan Debug Print Switch Is Turned Off

### Description

The `debug_print_plan` parameter controls whether the query execution plan is printed to the log. Enabling this parameter consumes disk space and degrades query performance. In production environments, set this parameter to `off`.

### Implementation

**Check Method:**

Check whether the `debug_print_plan` parameter is set to `off`. Any other value fails the check.

```sql
openGauss=# show debug_print_plan;
debug_print_plan
----------------
off
(1 row)
```

**Fix Method:**

Set `debug_print_plan` to `off`.

```bash
gs_guc reload -Z datanode -N all -I all -c "debug_print_plan=off"
```

## Ensure That the Query Rewrite Debug Print Switch Is Turned Off

### Description

The `debug_print_rewritten` parameter controls whether query rewrite results are printed to the log. Enabling this parameter consumes disk space and degrades query performance. In production environments, set this parameter to `off`.

### Implementation

**Check Method:**

Check whether the `debug_print_rewritten` parameter is set to `off`. Any other value fails the check.

```sql
openGauss=# show debug_print_rewritten;
debug_print_rewritten
----------------------
off
(1 row)
```

**Fix Method:**

Set `debug_print_rewritten` to `off`.

```bash
gs_guc reload -Z datanode -N all -I all -c "debug_print_rewritten=off"
```
