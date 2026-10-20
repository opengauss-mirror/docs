---
description: This document describes Account and Password Management in openGauss, covering topics such as Ensure Password Complexity Verification Is Enabled, Ensure Correct Password Encryption Configuration.
keywords: [openGauss, Account and Password Management, database O&M, Ensure Password Complexity Verification Is Enabled, Ensure Correct Password Encryption Configuration]
---

# Account and Password Management

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:05:25.243Z -->

## Ensure Password Complexity Verification Is Enabled

### Description

To ensure database security, password complexity verification must be enabled to validate password strength during user creation or password modification. Weak passwords are susceptible to guessing or brute-force attacks. For enhanced security, always enable password complexity verification.

### Implementation

**Check method:**

Check whether the `password_policy` parameter is set to `1`. If not, the check fails.

```sql
openGauss=# show password_policy;
 password_policy
-----------------
 1
(1 row)
```

**Fix method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_policy=1"
```

## Ensure Correct Password Encryption Configuration

### Description

The `password_encryption_type` parameter specifies the encryption method used to store user passwords. It supports three configurations:

- `0`: Encrypts passwords using MD5.

- `1`: Encrypts passwords using both SHA-256 and MD5.

- `2`: Encrypts passwords using SHA-256 (default).

MD5 is cryptographically insecure and should not be used; it is retained solely for compatibility with third-party open-source tools. The recommended configuration is SHA-256 (`2`).

### Implementation

**Check method:**

Check the `password_encryption_type` parameter. If the value is `0` or `1`, the check fails.

```sql
openGauss=# show password_encryption_type;
 password_encryption_type
--------------------------
 2
(1 row)
```

**Fix method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_encryption_type=2"
```

## Ensure Correct Configuration of Password Non-Reusable Period

### Description

When modifying a user password using `ALTER USER` or `ALTER ROLE`, the `password_reuse_time` parameter enforces a check on the minimum number of days before a password can be reused. A password can only be reused after exceeding this configured period. It is recommended to configure a non-reusable period to prevent users from repeatedly using identical passwords, which increases the risk of credential compromise.

### Implementation

**Check method:**

Check the `password_reuse_time` parameter. If the value is `0`, the check fails.

```sql
openGauss=# show password_reuse_time;
 password_reuse_time
---------------------
 60
(1 row)
```

**Fix method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_reuse_time=60"
```

## Ensure Correct Configuration of Account Auto-Unlocking Time

### Description

The `password_lock_time` parameter specifies the duration an account remains locked before automatic unlocking. The unit is days and supports floating-point values; the integer part represents days, while the fractional part converts to hours, minutes, and seconds. A value of `0` disables automatic unlocking upon failed login attempts. To mitigate brute-force attacks, this parameter must be set to a non-zero value.

### Implementation

**Check method:**

Check the `password_lock_time` parameter. If the value is `0`, the check fails.

```sql
openGauss=# show password_lock_time;
 password_lock_time
--------------------
 1d
(1 row)
```

**Fix method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_lock_time=1"
```

## Ensure the Initial User Password Is Changed Upon First Login

### Description

The initial user is the system administrator with the highest privileges (OID 10). If no password is specified during database installation, the default password is empty. It is mandatory to change this password upon the first login after installation. An empty or unchanged initial password poses a critical security risk, potentially leading to low-cost attacks and external compliance concerns.

### Implementation

**Check method:**

Execute the following SQL statement. If the `rolpassword` field is empty, the check fails.

```sql
SELECT rolpassword FROM pg_authid WHERE rolsuper=true;
```

**Fix method:**

Execute the following SQL statement to change the password of the initial user.

```sql
ALTER ROLE 'rolename' PASSWORD 'xxxxxxxx';
```

## Ensure User Validity Period Is Configured

### Description

When creating users or roles, use the `VALID BEGIN` keyword to set the effective start date and the `VALID UNTIL` keyword to set the expiration date. Omitting these keywords results in permanent validity. The expiration enforcement relies on the OS clock of each database node. To ensure consistency across nodes, it is recommended to deploy NTP (Network Time Protocol) during installation. Failure to do so risks inconsistent account expiration times across nodes. Configure validity periods based on business requirements and promptly clean up obsolete or expired accounts.

### Implementation

**Check method:**

Use the following SQL statements to identify users lacking a configured validity period. The `WHERE` clause excludes the initial user (`rolsuper=true`) and built-in roles starting with `gs_role`, which do not require expiration settings.

```sql
SELECT rolname, rolvalidbegin, rolvaliduntil 
FROM pg_roles 
WHERE rolsuper=false 
AND rolname NOT LIKE 'gs_role%' 
AND (rolvalidbegin IS NULL OR rolvaliduntil IS NULL);
```

**Fix method:**

```sql
ALTER ROLE <role_name> VALID BEGIN 'yyyy-mm-dd' VALID UNTIL 'yyyy-mm-dd';
```

## Ensure Password Validity Period Is Configured

### Description

The `password_effect_time` parameter defines the validity period of user login passwords. The `password_notify_time` parameter specifies how many days prior to expiration the system begins issuing reminders. Once the notification threshold is reached, the system prompts users to change their passwords upon login. Regular password updates are recommended to enhance security.

### Implementation

**Check method:**

Check the `password_effect_time` parameter. If the value is `0`, the check fails.

```sql
openGauss=# show password_effect_time;
 password_effect_time
----------------------
 90
(1 row)
```

**Fix method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_effect_time=90"
```
