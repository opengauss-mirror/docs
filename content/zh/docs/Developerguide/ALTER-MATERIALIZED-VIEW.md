# ALTER MATERIALIZED VIEW<a name="ZH-CN_TOPIC_0289900865"></a>

## 功能描述<a name="zh-cn_topic_0283137307_zh-cn_topic_0237122084_zh-cn_topic_0059778428_section1274412112511"></a>

更改一个现有物化视图的多个辅助属性。

可用于ALTER MATERIALIZED VIEW的语句形式和动作是ALTER TABLE的一个子集，并且在用于物化视图时具有相同的含义。详见[ALTER TABLE](ALTER-TABLE.md)。

## 注意事项<a name="zh-cn_topic_0283137307_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

-   只有物化视图的所有者有权限执行ALTER TMATERIALIZED VIEW命令，系统管理员默认拥有此权限。
-   不支持更改物化视图结构。

## 语法格式<a name="zh-cn_topic_0283137307_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

-   修改物化视图的所属用户。

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
        OWNER TO new_owner;
    ```

-   修改物化视图的列。

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
        RENAME [ COLUMN ] column_name TO new_column_name;
    ```

-   重命名物化视图。

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
     
        RENAME TO new_name;
    ```


## 参数说明<a name="zh-cn_topic_0283137307_zh-cn_topic_0237122084_zh-cn_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

-   **mv\_name**

    一个现有物化视图的名称，可以用模式修饰。

    取值范围：字符串，符合标识符命名规范。

-   **column\_name**

    一个新的或者现有的列的名称。

    取值范围：字符串，符合标识符命名规范。

-   **new\_column\_name**

    一个现有列的新名称。

-   **new\_owner**

    该物化视图的新拥有者的用户名。

-   **new\_name**

    该物化视图的新名称。


## 示例<a name="zh-cn_topic_0283137307_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
--把物化视图foo重命名为bar。
openGauss=# ALTER MATERIALIZED VIEW foo RENAME TO bar;
```

## 相关链接<a name="zh-cn_topic_0283137307_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s0c3f488fdb90433797e7d1561d9a074d"></a>

[CREATE MATERIALIZED VIEW](CREATE-MATERIALIZED-VIEW.md)，[CREATE INCREMENTAL MATERIALIZED VIEW](CREATE-INCREMENTAL-MATERIALIZED-VIEW.md)，[DROP MATERIALIZED VIEW](DROP-MATERIALIZED-VIEW.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](REFRESH-INCREMENTAL-MATERIALIZED-VIEW.md)  ，[REFRESH MATERIALIZED VIEW](REFRESH-MATERIALIZED-VIEW.md)

