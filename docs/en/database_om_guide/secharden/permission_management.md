# Permission Management

## Disallow PUBLIC Role from Having Permissions on the pg_authid System Table

### Description

The `pg_authid` system table in the `pg_catalog` schema stores information about all roles in the database. Since all users inherit the permissions of the `PUBLIC` role, the `PUBLIC` role must not hold any permissions on the `pg_authid` system table to prevent sensitive information leakage or unauthorized modification.

### Implementation

**Check Method:**

Execute the following SQL statement. If the result set is not empty, the check fails.

```sql
SELECT relname, relacl FROM pg_class WHERE relname = 'pg_authid' AND CAST(relacl AS TEXT) LIKE '%,=%}';
```

**Fix Method:**

```sql
REVOKE ALL ON pg_authid FROM PUBLIC;
```

## Disallow PUBLIC Role from Having CREATE Permission in the Public Schema

### Description

If the `PUBLIC` role has the `CREATE` permission in the `public` schema, any user can create tables or other database objects in this schema. This introduces security risks, as other users can view and modify these objects. Additionally, to mitigate CVE-2018-1058, the `PUBLIC` role must not have the `CREATE` permission in the `public` schema.

### Implementation

**Check Method:**

Execute the following statement to check whether the `PUBLIC` role has the `CREATE` permission in the `public` schema. If the result returns `true`, the configuration check fails.

```sql
SELECT CAST(has_schema_privilege('public', 'public', 'CREATE') AS TEXT);
-- Expected result:
-- has_schema_privilege
-- ----------------------
-- false
-- (1 row)
```

**Fix Method:**

```sql
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
```

## Disallow Granting ALL PRIVILEGES on Objects to the PUBLIC Role

### Description

The `PUBLIC` role applies to every user. Granting `ALL PRIVILEGES` on an object to `PUBLIC` allows any user to inherit full control over that object, violating the principle of least privilege. To safeguard database data, the `PUBLIC` role should possess minimal permissions. Granting full control over objects to `PUBLIC` is prohibited.

### Implementation

**Check Method:**

Check whether tables or views have `ALL PRIVILEGES` granted to `PUBLIC`. If the result is not empty, the check fails.

```sql
SELECT relname, relacl FROM pg_class
WHERE (CAST(relacl AS TEXT) LIKE '%,=arwdDxt/%}' OR CAST(relacl AS TEXT) LIKE '{=arwdDxt/%}')
AND (CAST(relacl AS TEXT) LIKE '%,=APmiv/%}' OR CAST(relacl AS TEXT) LIKE '{=APmiv/%}');
```

Check whether schemas have `ALL PRIVILEGES` granted to `PUBLIC`. If the result is not empty, the check fails.

```sql
SELECT nspname, nspacl FROM pg_namespace
WHERE (CAST(nspacl AS TEXT) LIKE '%,=UC/%}' OR CAST(nspacl AS TEXT) LIKE '{=UC/%}')
AND (CAST(nspacl AS TEXT) LIKE '%,=APm/%}' OR CAST(nspacl AS TEXT) LIKE '{=APm/%}');
```

Check whether functions have `ALL PRIVILEGES` granted to `PUBLIC`. If the result is not empty, the check fails.

```sql
SELECT proname, proacl FROM pg_proc
WHERE (CAST(proacl AS TEXT) LIKE '%,=X/%}' OR CAST(proacl AS TEXT) LIKE '{=X/%}')
AND (CAST(proacl AS TEXT) LIKE '%,=APm/%}' OR CAST(proacl AS TEXT) LIKE '{=APm/%}');
```

Permissions for other database objects can be checked similarly. The ACL permission flags are described in the table below.

| Parameter | Description |
| --- | --- |
| r | SELECT |
| w | UPDATE |
| a | INSERT |
| d | DELETE |
| D | TRUNCATE |
| x | REFERENCES |
| t | TRIGGER |
| X | EXECUTE |
| U | USAGE |
| C | CREATE |
| c | CONNECT |
| T | TEMPORARY |
| A | ALTER |
| P | DROP |
| m | COMMENT |
| i | INDEX |
| v | VACUUM |
| * | Grant option for the preceding permissions |

**Fix Method:**

Revoke all privileges on tables or views from `PUBLIC`:

```sql
REVOKE ALL ON <OBJECT_NAME> FROM PUBLIC;
```

Revoke all privileges on schemas from `PUBLIC`:

```sql
REVOKE ALL ON SCHEMA <OBJECT_NAME> FROM PUBLIC;
```

Revoke all privileges on functions from `PUBLIC` (note: function names must include parameters):

```sql
REVOKE ALL ON FUNCTION function_name([arg_type][, ...]) FROM PUBLIC;
```

## Disallow Using the Initial User for Routine Business Operations

### Description

The database initial user holds the highest privileges, possessing all system and object permissions. This account should be used solely for Database Administrator (DBA) management tasks and must not be used for routine business operations. Using the initial user for business purposes violates the principle of least privilege and introduces security risks.

### Implementation

**Check Method:**

Execute the following statement to query current activities performed by the initial user. Investigate whether any non-system-triggered routine business operations are present.

```sql
SELECT s.*
FROM pg_stat_activity AS s, pg_roles AS t
WHERE s.usename = t.rolname AND t.rolsuper = true;
```

**Fix Method:**

Verify that the initial user is not used for routine business operations. Enforce the principle of least privilege for business users; strictly prohibit using the initial user for business logic execution.

## Ensure Non-Sysadmin Accounts Are Used for Routine Business Operations

### Description

Database system administrators possess elevated privileges. Using a system administrator account for routine business operations violates the principle of least privilege and introduces security risks. System administrator accounts must not be used for routine business operations.

### Implementation

**Check Method:**

Execute the following statement to query current activities performed by system administrators. Investigate whether any non-system-triggered routine business operations are present.

```sql
SELECT s.*
FROM pg_stat_activity AS s, pg_roles AS t
WHERE s.usename = t.rolname
AND t.rolsystemadmin = true;
```

**Fix Method:**

Enforce the principle of least privilege for business users. Create non-administrator users and utilize them specifically for routine business operations.

## Ensure Non-Essential Administrative Privileges Are Revoked from Ordinary Users

### Description

Ordinary users are those intended for routine business operations. They should not possess administrative privileges beyond their operational scope, such as `CREATEROLE`, `CREATEDB`, `AUDITADMIN`, `MONADMIN`, `OPRADMIN`, or `POLADMIN`. To enforce the principle of least privilege while meeting business requirements, revoke any non-essential administrative privileges from ordinary users.

### Implementation

**Check Method:**

The following checks cover commonly used administrative privileges. Adapt similar queries for other administrative permissions as needed.

Check for ordinary users with `CREATEROLE` privilege:

```sql
SELECT rolname FROM pg_roles WHERE rolcreaterole = true AND rolsuper = false;
```

Check for ordinary users with `CREATEDB` privilege:

```sql
SELECT rolname FROM pg_roles WHERE rolcreatedb = true AND rolsuper = false;
```

Check for ordinary users with `AUDITADMIN` privilege:

```sql
SELECT rolname FROM pg_roles WHERE rolauditadmin = true AND rolsuper = false;
```

Check for ordinary users with `MONADMIN` privilege:

```sql
SELECT rolname FROM pg_roles WHERE rolmonitoradmin = true AND rolsuper = false;
```

Check for ordinary users with `OPRADMIN` privilege:

```sql
SELECT rolname FROM pg_roles WHERE roloperatoradmin = true AND rolsuper = false;
```

Check for ordinary users with `POLADMIN` privilege:

```sql
SELECT rolname FROM pg_roles WHERE rolpolicyadmin = true AND rolsuper = false;
```

**Fix Method:**

Revoke `CREATEROLE` privilege:

```sql
ALTER ROLE <role_name> NOCREATEROLE;
```

Revoke `CREATEDB` privilege:

```sql
ALTER ROLE <role_name> NOCREATEDB;
```

Revoke `AUDITADMIN` privilege:

```sql
ALTER ROLE <role_name> NOAUDITADMIN;
```

Revoke `MONADMIN` privilege:

```sql
ALTER ROLE <role_name> NOMONADMIN;
```

Revoke `OPRADMIN` privilege:

```sql
ALTER ROLE <role_name> NOOPRADMIN;
```

Revoke `POLADMIN` privilege:

```sql
ALTER ROLE <role_name> NOPOLADMIN;
```

## Disallow PUBLIC Role from Executing SECURITY DEFINER Functions

### Description

Functions declared with `SECURITY DEFINER` execute with the privileges of the user who created them. Misuse can allow the executor to perform unauthorized actions under the creator's identity. To prevent abuse, the `PUBLIC` role must be prohibited from executing `SECURITY DEFINER` functions. Note that `SECURITY DEFINER` and `AUTHID DEFINER` are functionally equivalent.

### Implementation

**Check Method:**

Execute the following SQL statement to locate `SECURITY DEFINER` functions outside the `pg_catalog` schema.

```sql
SELECT a.proname, b.nspname
FROM pg_proc a, pg_namespace b
WHERE a.pronamespace = b.oid
AND b.nspname <> 'pg_catalog'
AND a.prosecdef = 't';
```

If the above query returns results, execute the following SQL to verify if the `PUBLIC` role has execute permission on these functions. Specify the argument types and qualify with the schema name if necessary. If the result is `true`, the check fails.

```sql
SELECT CAST(has_function_privilege('public', 'function_name([arg_type][, ...])', 'EXECUTE') AS TEXT);
```

**Fix Method:**

Execute the following SQL to revoke execute permission from `PUBLIC`. Specify the argument types and qualify with the schema name if necessary.

```sql
REVOKE EXECUTE ON FUNCTION function_name([arg_type][, ...]) FROM PUBLIC;
```

## Ensure SECURITY INVOKER Functions Are Defined as Expected

### Description

`SECURITY INVOKER` functions execute with the privileges of the calling user. Misuse can allow the function creator to perform unauthorized actions using the caller's identity. Before invoking such functions created by others, always inspect the function definition to prevent privilege escalation.

### Implementation

**Check Method:**

1. Check the definition of a `SECURITY INVOKER` function executed by an ordinary user or administrator (`function_name` is the target function):

```sql
SELECT prosrc FROM pg_proc WHERE proname = 'function_name' AND prosecdef = false;
```

2. Check for `INSERT`, `UPDATE`, `DELETE`, or `TRUNCATE` operations on tables with triggers owned by others, executed by an ordinary user or administrator (`table_name` is the target table):

```sql
SELECT a.prosrc
FROM pg_proc a
INNER JOIN pg_trigger c ON a.oid = c.tgfoid
INNER JOIN pg_class b ON b.oid = c.tgrelid AND b.relname = 'table_name'
WHERE a.prosecdef = false;
```

**Fix Method:**

Before executing a function, inspect its source code to ensure it does not allow the function creator to perform unauthorized actions using the invoker's privileges.

## Ensure Separation of Duties Is Enabled

### Description

Setting the `enableSeparationOfDuty` parameter to `on` enables the separation of duties. This restricts system administrator privileges; specifically, system administrators lose the ability to create users, alter user configurations, and access database audit logs. When enabling separation of duties, it is recommended to set `enable_copy_server_files` to `off` to restrict system administrator `COPY` permissions, preventing unauthorized reading or modification of server files. Refer to the official product documentation for details on the separation of duties feature.

### Implementation

**Check Method:**

Check if the `enableSeparationOfDuty` parameter is set to `on`. If not, the check fails.

```sql
openGauss=# show enableSeparationOfDuty;
 enableSeparationOfDuty
------------------------
 on
(1 row)
```

**Fix Method:**

Set `enableSeparationOfDuty` to `on` and restart the database:

```bash
gs_guc set -Z datanode -N all -I all -c "enableSeparationOfDuty = on"
gs_om -t stop && gs_om -t start
```

## Ensure System Administrator Server-Side File COPY Permission Is Revoked

### Description

The `enable_copy_server_files` parameter controls whether system administrators can perform server-side `COPY` operations. Remote `COPY` operations pose a risk of unauthorized viewing or modification of sensitive files. In production environments, this parameter should typically remain disabled. The default value is `off`, which restricts execution of `COPY FROM FILENAME` or `COPY TO FILENAME` to the initial user only.

### Implementation

**Check Method:**

Check if the `enable_copy_server_files` parameter is set to `off`. If not, the check fails.

```sql
openGauss=# show enable_copy_server_files;
 enable_copy_server_files
--------------------------
 off
(1 row)
```

**Fix Method:**

```bash
gs_guc reload -Z datanode -N all -I all -c "enable_copy_server_files=off"
```
