# ALTER PUBLICATION

## 功能描述<a name="section6411155412312"></a>

更改发布PUBLICATION的属性。

## 注意事项<a name="section20666031491"></a>

发布的属主和系统管理员才能执行ALTER PUBLICATION。新所有者角色的直接或间接成员才可以改变所有者。新的所有者必须在当前数据库上拥有CREATE权限。此外，FOR ALL TABLES发布的新所有者必须是系统管理员。但是，系统管理员可以在避开这些限制的情况下更改发布的所有权。

## 语法格式<a name="section8269651410"></a>

- 用指定的表替换当前发布的表。

  ```
  ALTER PUBLICATION name SET TABLE table_name [, ...]
  ```

- 从发布中添加一个或多个表。

  ```
  ALTER PUBLICATION name ADD TABLE table_name [, ...]
  ```

- 从发布中删除一个或多个表。

  ```
  ALTER PUBLICATION name DROP TABLE table_name [, ...]
  ```

- 改变在CREATE PUBLICATION中指定的所有发布属性，未提及的属性保留其之前的设置。

  ```
  ALTER PUBLICATION name SET ( publication_parameter [= value] [, ... ] )
  ```

- 更改发布的所有者。

  ```
  ALTER PUBLICATION name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
  ```

- 更改发布的名称。

  ```
  ALTER PUBLICATION name RENAME TO new_name
  ```


## **参数说明**<a name="section1338317414277"></a>

- **name**

  待修改的发布的名称。

- **table\_name**

  现有表的名称。

- **SET \( publication\_parameter \[= value\] \[, ... \] \)。**

  该子句修改最初由CREATE PUBLICATION设置的发布参数。

- **new\_owner**

  发布的新所有者的用户名。

- **new\_name**

  发布的新名称。


## 示例<a name="section5652932173112"></a>

详情请参见[示例](CREATE-PUBLICATION.md#section109371845154215)。

## 相关链接<a name="section1530717394317"></a>

[CREATE PUBLICATION](CREATE-PUBLICATION.md)，[DROP PUBLICATION](DROP-PUBLICATION.md)