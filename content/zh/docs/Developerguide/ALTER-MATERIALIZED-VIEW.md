# ALTER MATERIALIZED VIEW<a name="ZH-CN_TOPIC_0242370540"></a>

## 功能描述<a name="zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

更改一个现有物化视图的多个辅助属性。

可用于ALTER MATERIALIZED VIEW的语句形式和动作是ALTER TABLE的一个子集，并且在用于物化视图时具有相同的含义。详见[ALTER TABLE](content/zh/docs/Developerguide/ALTER-TABLE.md)。



## 注意事项<a name="zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   只有物化视图的所有者有权限执行ALTER TMATERIALIZED VIEW命令，系统管理员默认拥有此权限。
-   不支持更改物化视图结构。

## 语法格式<a name="zh-cn_topic_0237122076_zh-cn_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

- 修改物化视图的定义。

  ```
  ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name 
  	action [, ... ];
  ```

- 修改物化视图的列。

  ```
  ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name 
  	RENAME [ COLUMN ] column_name TO new_column_name;
  ```

- 重命名物化视图。

  ```
  ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name 
  	RENAME TO new_name;
  ```

- 设置物化视图的所属模式。

  ```
  ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name 
  	SET SCHEMA new_schema;
  ```

- 设置物化视图的表空间。

  ```
  ALTER MATERIALIZED VIEW mv_name [ IF EXISTS ]
  	SET TABLESPACE new_tablespace;
  ```

- 其中具体表操作action可以是以下子句之一：

  ```
  ALTER [ COLUMN ] column_name SET STATISTICS integer
  ALTER [ COLUMN ] column_name RESET ( attribute_option [, ... ] )
  ALTER [ COLUMN ] column_name SET ( attribute_option = value [, ... ] )
  ALTER [ COLUMN ] column_name SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
  CLUSTER ON index_name
  SET WITHOUT CLUSTER
  SET ( storage_parameter = value [, ... ] )
  OWNER TO { new_owner }
  RESET ( storage_parameter [, ... ] )
  ```

## 参数说明<a name="zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **mv\_name**

    一个现有物化视图的名称，可以用模式修饰。

-   **column\_name**

    一个新的或者现有的。

-   **new\_column\_name**

    一个现有列的新名称。

- **new\_owner**

    该物化视图的新拥有者的用户名。

-   **new\_name**

    该物化视图的新名称。

-   **new\_schema**

    该物化视图的新模式。


## 示例<a name="zh-cn_topic_0237122076_zh-cn_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

```
--把物化视图foo重命名为bar。
postgres=# ALTER MATERIALIZED VIEW foo RENAME TO bar;
```

## 相关链接<a name="zh-cn_topic_0237122076_zh-cn_topic_0059779051_s489a6430be6447c193a4011257dc4994"></a>

[CREATE MATERIALIZED VIEW](content/zh/docs/Developerguide/CREATE-MATERIALIZED-VIEW.md)， [DROP MATERIALIZED VIEW](content/zh/docs/Developerguide/DROP-MATERIALIZED-VIEW.md)，[ALTER TABLE](content/zh/docs/Developerguide/ALTER-TABLE.md)，[REFRESH MATERIALIZED VIEW](content/zh/docs/Developerguide/REFRESH-MATERIALIZED-VIEW.md)

