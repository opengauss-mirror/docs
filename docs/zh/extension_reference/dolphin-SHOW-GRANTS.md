# SHOW GRANTS

## 功能描述

显示openGauss中用户的权限信息。

## 注意事项

- 若不指定用户，则显示当前用户的权限信息。

## 语法格式

```
SHOW GRANTS [FOR user]
```

## 参数说明

- **user**

  用户名。如不指定，则显示当前执行语句的用户的权限信息
 
## 参考示例

```sql
mysql=# show grants for test;
                                          Grants
-------------------------------------------------------------------------------------------
 GRANT INSERT, SELECT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON TABLE test TO test
 GRANT SELECT ON TABLE test TO test
 ALTER ROLE test WITH LOGIN
(3 rows)

```