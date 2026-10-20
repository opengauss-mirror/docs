---
description: This document describes Security Authentication Configuration in openGauss, covering topics such as Ensure the Client Authentication Timeout Is Correctly Configured, Ensure the Authentication Encryption Iteration Count Is Correctly Configured.
keywords: [openGauss, Security Authentication Configuration, database O&M, Ensure the Client Authentication Timeout Is Correctly Configured, Ensure the Authentication Encryption Iteration Count Is Correctly Configured]
---

# Security Authentication Configuration

## Ensure the Client Authentication Timeout Is Correctly Configured

### Description

The `authentication_timeout` parameter defines the maximum allowed time to complete client authentication. The default value is one minute. If a client fails to complete authentication within this window, the server automatically terminates the connection. This prevents problematic clients from occupying connection slots indefinitely.

### Implementation

**Check Method:**

Check the configuration of the `authentication_timeout` parameter. It is recommended to set this value to `1min`.

```sql
openGauss=# show authentication_timeout;
 authentication_timeout
------------------------
 1min
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "authentication_timeout=1min"
```

## Ensure the Authentication Encryption Iteration Count Is Correctly Configured

### Description

The `auth_iteration_count` parameter controls the iteration count used when performing one-way hashing of authentication credentials. Low values weaken password storage security, while excessively high values degrade performance during user creation and authentication processes. Set this value appropriately based on hardware capabilities. The minimum allowed value is 10,000.

### Implementation

**Check Method:**

Check the configuration of the `auth_iteration_count` parameter. If the value is less than 10,000, the check fails.

```sql
openGauss=# show auth_iteration_count;
 auth_iteration_count
----------------------
 10000
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "auth_iteration_count=10000"
```

## Ensure the Account Login Failure Attempts Is Correctly Configured

### Description

The `failed_login_attempts` parameter limits the number of consecutive failed login attempts to prevent brute-force password attacks. The default value is `10`, which means the account is automatically locked after ten consecutive authentication failures.

### Implementation

**Check Method:**

Check the configuration of the `failed_login_attempts` parameter. If the value is `0`, the configuration check fails.

```sql
openGauss=# show failed_login_attempts;
 failed_login_attempts
-----------------------
 10
(1 row)
```

**Fix Method:**

Configure `failed_login_attempts` to an integer value greater than `0` and less than or equal to `1000`. It is recommended to retain the default value of `10`.

```bash
gs_guc reload -Z datanode -N all -I all -c "failed_login_attempts=10"
```

## Ensure Internal Server-Side Kerberos Authentication Is Enabled

### Description

Use the `gs_om` tool to enable or disable internal server-side Kerberos authentication. If the database is deployed in a non-secure network environment, enabling internal Kerberos authentication mitigates the risk of internal server nodes being spoofed.

### Implementation

**Check Method:**

Inspect the `pg_hba.conf` configuration file in the DN data directory to confirm whether the authentication method for internal server nodes is set to `gss`. If set to `gss`, Kerberos authentication is enabled. Execute `cm_ctl query -Cv` to check the database status and observe the Kerberos process status.

**Fix Method:**

Ensure the database is in a normal running state.

1. Stop the database:

```bash
gs_om -t stop
```

2. Install the server. Execute the following command, where `USER` is the database initial user. `IP1` specifies the IP address of the primary server node, and `IP2` specifies the IP address of the standby server node. Specify any internal server IP as the primary/standby server IP:

```bash
gs_om -t kerberos -m install -U USER --krb-server IP1 --krb-standby IP2
```

3. Install the client. Execute the following command once on any node within the server cluster:

```bash
gs_om -t kerberos -m install -U USER --krb-client
```

4. Apply the environment variable configuration:

```bash
source ~/.bashrc
```

5. Start the database:

```bash
gs_om -t start
```
