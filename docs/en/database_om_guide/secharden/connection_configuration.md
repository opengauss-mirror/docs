---
description: This document describes Connection Configuration in openGauss, covering topics such as Disable Listening on All IP Addresses on the Host, Ensure Public Service Ports Use Non-Default Port Numbers.
keywords: [openGauss, Connection Configuration, database O&M, Disable Listening on All IP Addresses on the Host, Ensure Public Service Ports Use Non-Default Port Numbers]
---

# Connection Configuration

## Disable Listening on All IP Addresses on the Host

### Description

The `listen_addresses` parameter specifies the TCP/IP addresses on which the server listens for client connections. The configuration must not include wildcards representing all IP addresses, such as `*`, `0.0.0.0`, or `::`. On multi-NIC hosts, listening on all IP addresses breaks network isolation. Disabling listening on all IP addresses prevents malicious connection requests from unauthorized networks.

### Implementation

**Check Method:**

Execute the following SQL statement to check the `listen_addresses` configuration. If the query returns any result, the check fails.

```sql
SELECT name, setting FROM pg_settings WHERE name = 'listen_addresses' AND
(position('*' in setting) > 0 OR position('0.0.0.0' in setting) > 0 OR position('::' in setting) > 0);
```

**Fix Method:**

Avoid listening on all NIC addresses. Set `listen_addresses` to `localhost` or the specific NIC IP address(es) required to receive business traffic, separated by commas. Restart the database afterward. The following example sets the listening addresses to `localhost` and `192.168.1.1`:

```bash
gs_guc set -Z datanode -N all -I all -c "listen_addresses='localhost,192.168.1.1'"
gs_om -t stop && gs_om -t start
```

## Ensure Public Service Ports Use Non-Default Port Numbers

### Description

The `port` parameter specifies the TCP port on which the database service listens. Using default port numbers makes the service an easy target for malicious attackers. Configure the public-facing service port to a non-default value. Refer to the product documentation for the default port number.

### Implementation

**Check Method:**

Using port `5432` as an example, the check fails if the `port` parameter is set to the default value.

```sql
SELECT name, setting FROM pg_settings WHERE name = 'port' AND setting = '5432';
```

**Fix Method:**

Users must specify the port numbers for each instance via the configuration file during database installation.

## Ensure the Maximum Connection Limit for Database Instances Is Configured Correctly

### Description

The `max_connections` parameter controls the maximum number of connections to a database DN instance. Setting this value too high may cause the database to request excessive System V shared memory or semaphores, exceeding operating system limits. Determine the appropriate value based on business specifications or consult technical support.

### Implementation

**Check Method:**

Check the `max_connections` configuration. The value must align with business concurrency requirements.

```sql
openGauss=# show max_connections;
 max_connections
-----------------
 5000
(1 row)
```

**Fix Method:**

Taking a maximum connection limit of 5000 as an example, modify the `max_connections` parameter using the following command, then restart the database:

```bash
gs_guc set -Z datanode -N all -I all -c "max_connections=5000"
gs_om -t stop && gs_om -t start
```

## Ensure the Maximum Connection Limit for Databases Is Configured Correctly

### Description

To control the number of sessions accessing databases, it is recommended to limit concurrent sessions to 1024 or fewer. Setting `datconnlimit` to `-1` disables connection limits for the database.

### Implementation

**Check Method:**

Execute the following SQL statement to check for databases with unrestricted connection limits:

```sql
SELECT datname FROM pg_database WHERE datistemplate = false AND (datconnlimit = -1 OR datconnlimit > 1024);
```

**Fix Method:**

```sql
UPDATE pg_database SET datconnlimit=<CONN_LIMIT_VALUE> WHERE datname=<DATABASE_NAME>;
```

Where `<CONN_LIMIT_VALUE>` is the maximum number of concurrent sessions allowed for the database, and `<DATABASE_NAME>` is the database name.

## Ensure the Connection Limit Reserved for the System Administrator Is Configured Correctly

### Description

The `sysadmin_reserved_connections` parameter specifies the minimum number of connections reserved for the database system administrator. Reserving these channels prevents administrators from being locked out when connection slots are occupied by ordinary or malicious users. This value must be less than `max_connections`.

### Implementation

**Check Method:**

```sql
openGauss=# show sysadmin_reserved_connections;
 sysadmin_reserved_connections
-------------------------------
 3
(1 row)
```

**Fix Method:**

Set `sysadmin_reserved_connections` to `3`, then restart the database.

```bash
gs_guc set -Z datanode -N all -I all -c "sysadmin_reserved_connections=3"
gs_om -t stop && gs_om -t start
```

## Ensure the Maximum Connection Limit per User Is Configured Correctly

### Description

In openGauss, users should not be allowed unlimited concurrent connections. Setting the user parameter `rolconnlimit` to `-1` permits unlimited connections. Restricting connection limits per user based on business needs prevents resource exhaustion by a single user.

### Implementation

**Check Method:**

Execute the following SQL statement to check for users with unlimited connections. Built-in roles starting with `gs_role` are not permitted to connect and should be excluded from this check.

```sql
SELECT rolname, rolconnlimit FROM pg_roles WHERE rolname NOT LIKE 'gs_role%' AND rolconnlimit = -1;
```

**Fix Method:**

```sql
ALTER ROLE <role_name> CONNECTION LIMIT <connection_num>;
```

Where `<role_name>` is the username and `<connection_num>` is the configured maximum number of connections.

## Ensure UNIX Domain Socket Permissions Are Configured Correctly

### Description

The `unix_socket_permissions` parameter sets the access permissions for UNIX domain sockets. The recommended configuration is `0700` (accessible only by the current database user; no permissions for its group or others). This adheres to the principle of least privilege, preventing unauthorized access or tampering that could disrupt socket communications.

### Implementation

**Check Method:**

Verify that `unix_socket_permissions` is set to `0700`. The check fails if the value differs.

```sql
openGauss=# show unix_socket_permissions;
 unix_socket_permissions
-------------------------
 0700
(1 row)
```

**Fix Method:**

Set `unix_socket_permissions` to `0700`, then restart the database.

```bash
gs_guc set -Z datanode -N all -I all -c "unix_socket_permissions=0700"
gs_om -t stop && gs_om -t start
```

## Ensure No Host Entries Except Server Nodes Use Trust Authentication

### Description

Server nodes reside within a secure intranet. Only the initial user connecting locally on the server is permitted to use trust authentication. The `pg_hba.conf` file must not contain host entries using trust authentication except for server nodes. Trust authentication bypasses credential checks. Currently, only the initial user (matching the OS user running the database) connecting locally on the server is allowed to use trust authentication. Remote connections and non-initial users must undergo server-side authentication. Adding host entries with trust authentication will cause connection failures in production environments.

### Implementation

**Check Method:**

Use the following shell command to check for trust authentication entries in `pg_hba.conf`, where `${GAUSSDATA}` is the DN data directory. This check requires manual verification to identify server node IPs and loopback addresses (e.g., `127.0.0.1` and `::1`). Ensure no host entries use trust authentication outside of these addresses.

```bash
grep -P '^[^#]*host(ssl|nossl)?\s+.+[Tt][Rr][Uu][Ss][Tt]\s*$' ${GAUSSDATA}/pg_hba.conf
```

**Fix Method:**

Except for the initial user connecting to server nodes, configure all other host entries in `pg_hba.conf` to use non-trust authentication methods.

## Ensure No Host Entries Use MD5 Authentication

### Description

MD5 authentication poses security risks and may lead to password cracking. Use the more secure SHA-256 or certificate authentication methods instead. MD5 authentication is retained solely for compatibility with open-source community tools and is prohibited in production environments.

### Implementation

**Check Method:**

Use the following shell command to check for MD5 authentication entries in `pg_hba.conf`, where `${GAUSSDATA}` is the DN data directory.

```bash
grep -P '^[^#]*host(ssl|nossl)?\s+.+[Mm][Dd][5]\s*$' ${GAUSSDATA}/pg_hba.conf
```

**Fix Method:**

Configure client host entries to use SHA-256 authentication. For example, to allow user `user1` connecting from client IP `192.168.0.1` to access database `db1` using SHA-256 authentication:

```bash
gs_guc reload -Z datanode -N all -I all -h "host db1 user1 192.168.0.1/32 sha256"
```

## Ensure No hostnossl Entries Exist

### Description

`hostnossl` entries enforce non-SSL encrypted connections, whereas `host` entries permit both SSL and non-SSL connections, and `hostssl` entries mandate SSL connections. From a security perspective, SSL encryption is recommended to protect data in transit and prevent information leakage.

### Implementation

**Check Method:**

Use the following shell command to check for `hostnossl` entries in `pg_hba.conf`, where `${GAUSSDATA}` is the DN data directory.

```bash
grep -P '^[^#]*hostnossl' ${GAUSSDATA}/pg_hba.conf
```

**Fix Method:**

Replace all `hostnossl` entries in `pg_hba.conf` with `host` or `hostssl`.

## Ensure No Host Entries Specify the Database as all

### Description

Configuring the database field as `all` in a host entry permits connections to any database. To prevent business interference, specify the exact database required for each user or client IP, rather than granting access to all databases.

### Implementation

**Check Method:**

Use the following shell command to check for entries specifying the database as `all` in `pg_hba.conf`, where `${GAUSSDATA}` is the DN data directory. Manually verify server node IPs and loopback addresses (e.g., `127.0.0.1` and `::1`). Ensure no host entries specify `all` outside these addresses.

```bash
grep -P '^[^#]*host(ssl|nossl)?\s+[Aa][Ll][Ll]' ${GAUSSDATA}/pg_hba.conf
```

**Fix Method:**

Excluding internal server connections, modify host and hostssl entries in `pg_hba.conf` that specify `all` as the database, changing `all` to the specific database required by the business.

## Ensure No Host Entries Specify the User as all

### Description

Setting the user field to `all` in a host entry allows all users to connect to the database. It is recommended to restrict the user field only to those who require database access.

### Implementation

**Check Method:**

Use the following shell command to check for entries specifying the user as `all` in `pg_hba.conf`, where `${GAUSSDATA}` is the DN data directory. Manually verify server node IPs and loopback addresses (e.g., `127.0.0.1` and `::1`). Ensure no host entries specify `all` outside these addresses.

```bash
grep -P '^[^#]*host(ssl|nossl)?\s+\S+\s+[Aa][Ll][Ll]' ${GAUSSDATA}/pg_hba.conf
```

**Fix Method:**

Excluding internal server connections, modify host and hostssl entries in `pg_hba.conf` that specify `all` as the user, changing `all` to the specific user required for the business.

## Ensure No Host Entries Specify the Source Address as 0.0.0.0/0

### Description

Specifying the source address as `0.0.0.0/0` allows connections from any IP address, exposing the database to potential network attacks. Restrict source addresses only to those that require database access.

### Implementation

**Check Method:**

Use the following shell command to check for entries specifying the source address as `0.0.0.0/0` in `pg_hba.conf`, where `${GAUSSDATA}` is the DN data directory.

```bash
grep '0.0.0.0/0' ${GAUSSDATA}/pg_hba.conf
```

**Fix Method:**

Remove all host and hostssl entries with the source address `0.0.0.0/0` from `pg_hba.conf`, or modify the address to the specific client IPs authorized to connect.

## Ensure SSL Connections Are Enabled on the Server

### Description

Secure Sockets Layer (SSL) is a security protocol that provides communication security and data integrity over a network. Use SSL for TCP/IP connections to ensure data transmission security. The `ssl` parameter controls whether the server enables SSL connections. Setting it to `on` enables SSL, allowing clients to connect via SSL or non-SSL. Setting it to `off` restricts connections to non-SSL only. For details on creating server private keys and certificates, refer to the openGauss product documentation.

### Implementation

**Check Method:**

Verify that the `ssl` parameter is set to `on`. The check fails if it is not.

```sql
openGauss=# show ssl;
 ssl
-----
 on
(1 row)
```

**Fix Method:**

Set the `ssl` parameter to `on`, then restart the database.

```bash
gs_guc set -Z datanode -N all -I all -c "ssl=on"
gs_om -t stop && gs_om -t start
```
