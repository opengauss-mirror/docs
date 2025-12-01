# SHOW FUNCTION STATUS

## Precautions

N/A

## Function

Displays information about storage functions.

## Syntax

```
SHOW FUNCTION STATUS [LIKE 'pattern' | WHERE expr]
```

## Parameter Description

- **WHERE expr**

  Filters expressions.

- **LIKE 'pattern'**

  The pattern regular expression matches the function name.

## Return Result Set

| Column                  | Description                  | Remarks                         |
| -------------------- | ---------------------- | ----------------------------- |
| Db                   | Schema name.             | Displayed by schema.|
| Name                 | Function name.                |                               |
| TYPE                 | Type                   | FUNCTION/PROCEDURE            |
| Deinfer              | User                  |                       |
| Modified             | Modification time.              |              |
| Created              | Creation time.              |              |
| Security_type        | Security type.              |                  |
| Comment              | Comments.                  |         |
| character_set_client | Character set of the client during creation.  | The value is empty.                     |
| collation_connection | Sorting rule of the client during creation.| The value is empty.                     |
| Database Collation   | Database collocation.        |            |

## Examples

```sql
-- Create a function.
opengauss=# CREATE FUNCTION func_add_sql(integer, integer) RETURNS integer AS 'select $1 + $2;' LANGUAGE SQL IMMUTABLE RETURNS NULL ON NULL INPUT;
CREATE FUNCTION
opengauss=# show function status like 'func_add_s%';
   Db   |     Name     |   Type   | Definer |           Modified            |            Created            | Security_type | Comment | character_set_client | collation_connection | Database Collation
--------+--------------+----------+---------+-------------------------------+-------------------------------+---------------+---------+----------------------+----------------------+--------------------
 public | func_add_sql | FUNCTION | wyc     | 2022-09-24 14:42:29.427382+08 | 2022-09-24 14:42:29.427382+08 | INVOKER       |         |                      |                      | en_US.UTF-8
(1 row)

```
