# ALTER PUBLICATION

## 功能介绍
更改发布PUBLICATION的属性。

## 语法格式
```
ALTER PUBLICATION name ADD TABLE table_name [, ...]
ALTER PUBLICATION name SET TABLE table_name [, ...]
ALTER PUBLICATION name DROP TABLE table_name [, ...]
ALTER PUBLICATION name SET ( publication_parameter [= value] [, ... ] )
ALTER PUBLICATION name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
ALTER PUBLICATION name RENAME TO new_name
```

## 语法介绍
前三个语句更改哪些表是该发布的一部分。  
SET TABLE子句用指定的表替换当前发布的表。  
ADD TABLE和DROP TABLE子句将从发布中添加和删除一个或多个表。
第四条语句可以改变在CREATE PUBLICATION中指定的所有发布属性。该命令中未提及的属性保留其先前的设置。
其余语句更改所有者和发布的名称。

## 参数说明

- name

  待修改的发布的名称。

- table_name

  现有表的名称。

- SET ( publication_parameter [= value] [, ... ] )。

  该子句修改最初由CREATE PUBLICATION设置的发布参数。

- new_owner

  发布的新所有者的用户名。

- new_name

  发布的新名称。

## 注意事项
发布的属主和超级用户才能执行ALTER PUBLICATION。要改变所有者，你也必须是新所有者角色的直接或间接成员。新的所有者必须在当前数据库上拥有CREATE权限。此外，FOR ALL TABLES发布的新所有者必须是超级用户。但是，超级用户可以在避开这些限制的情况下更改发布的所有权。
