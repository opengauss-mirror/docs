# SHOW GRANTS

## Function

Displays user permission information in the openGauss.

## Precautions

- If no user is specified, the permission information of the current user is displayed.

## Syntax

```
SHOW GRANTS [FOR user]
```

## Parameter Description

- **user**

  Username. If this parameter is not specified, the permission information of the user who executes the statement is displayed.
 
## Examples

```sql
mysql=# show grants for test;
                                          Grants
-------------------------------------------------------------------------------------------
 GRANT INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON TABLE test TO test
 GRANT SELECT ON TABLE test TO test
 ALTER ROLE test WITH LOGIN
(3 rows)

```
