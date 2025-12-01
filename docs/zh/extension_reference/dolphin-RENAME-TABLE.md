# RENAME TABLE

## 功能描述<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

修改表名，包括修改表的schema、重命名表、删除表的权限。

```sql
RENAME TABLE old_table to new_table;
```

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
-   当rename table语句下有多条修改表名命令时，该语法会对要修改的表名进行排序，然后按顺序加锁，再按从左往右顺序修改表名，当rename table a to b, b to c, 中间表b不存在时，则不加锁跳过。
-   对于表不存在，和目标表与存在的表发生冲突时，则报相应的错误信息。当表有同义词时，则原始表不能有同义词依赖，目标表不能存在有与之同名的同义词。
-   对目标表修改表名和模式时，会判断当前用户是否对该表拥有权限。

## RENAME TABLE 语法格式<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

-   修改表的定义。

    ```sql
    RENAME TABLE old_schema.table_name TO new_schema.new_table_name [, old_schema.table_name TO new_schema.new_table_name ...];
    ```

## 参数说明
RENAME TABLE可以同时重命名一张或者多张表。但必须有对旧表ALTER和DROP的权限, 和对新表CREATE和INSERT的权限。且必须对old_schema和new_schema有权限。

-   修改表名
```sql
RENAME TABLE old_table to new_table;
```

-   当旧表和新表在同一schema下，其等同于
```sql
ALTER TABLE old_table RENAME TO new_table;
```

-   RENAME TABLE支持在一条sql语法中修改多张表名, 且其执行顺序是从左到右。
```sql
RENAME TABLE A TO B, B TO C, C TO A;
```

-   RENAME TABLE 包含有锁表操作，其对表加锁顺序，是根据旧表的schema.table来排序，然后依次进行对排序后的表加锁。openGauss中的跨schema修改表名，相当于mysql中跨库修改表名。
```sql
RENAME TABLE old_schema.old_table TO new_schema.new_table;
```

-   old_table中不能是同义词，且不能存储同义词依赖。new_table不能是同义词。
-   RENAME TABLE在修改表名，同时也会修改系统表pg_type里与old_table同名的数据类型。和系统表pg_depend中的依赖。
-   不支持临时表和全局临时表。
-   不支持视图的跨schema修改表名，只支持在同一schema下表名的修改。
-   RENAME TABLE改完表名后，new_table不具备old_table的权限。必须用超级用户重新给new_table分配权限。
-   REANME TABLE语法，old_table如果具备触发器，则old_table不能跨schema修改表名。
-   old_table和new_table不能前后一样。
-   RENAME TABLE语法如果old_table不指定schema，则从search_path中遍历，直到找到old_table为止，否则报错old_table不存在。如果new_table不指定schema，则表示new_table与old_table处于同一schema中。

## 相关链接<a name="section156744489391"></a>

[ALTER TABLE](dolphin-ALTER-TABLE.md)
