# ALTER VIEW

## 功能描述<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_section1274412112511"></a>

ALTER VIEW更改视图的各种辅助属性。（如果用户是更改视图的查询定义，要使用CREATE OR REPLACE VIEW。）

## 注意事项<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

只有视图的所有者或者被授予了视图ALTER权限的用户才可以执行ALTER VIEW命令，系统管理员默认拥有该权限。针对所要修改属性的不同，对其还有以下权限约束：

-   修改视图的模式，当前用户必须是视图的所有者或者系统管理员，且要有新模式的CREATE权限，且不能与新模式中已存在的synonym产生命名冲突。
-   修改视图的所有者，当前用户必须是视图的所有者或者系统管理员，且该用户必须是新所有者角色的成员，并且此角色必须有视图所在模式的CREATE权限。
-   修改视图的命名，不能与当前模式中已存在的synonym产生命名冲突。

新增可以指定 ALGORITHM 选项语法。

## 语法格式<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

-   设置视图列的默认值。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name
        ALTER [ COLUMN ] column_name SET DEFAULT expression;
    ```

-   取消列视图列的默认值。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name
        ALTER [ COLUMN ] column_name DROP DEFAULT;
    ```

-   修改视图的所有者。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name 
        OWNER TO new_owner;
    ```

-   重命名视图。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name 
        RENAME TO new_name;
    ```

-   设置视图的所属模式。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name 
        SET SCHEMA new_schema;
    ```

-   设置视图的选项。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name
        SET ( { view_option_name [ = view_option_value ] } [, ... ] );
    ```

-   重置视图的选项。

    ```
    ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW [ IF EXISTS ] view_name
        RESET ( view_option_name [, ... ] );
    ```

- 设置视图的定义（该语法仅支持在B兼容模式下才能使用）

  ```
  ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] [DEFINER = user] VIEW view_name [ ( column_name [, ...] ) ]
    AS query [WITH [CASCADE | LOCAL] CHECK OPTION];
  ```

    >![](public_sys-resources/icon-note.png) **说明：**   
    >ALTER VIEW AS 中的 query 新查询不能改变原查询的列定义，包括顺序、列名、数据类型、类型精度等，只可在列表末尾添加其他的列。

## 参数说明<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

-   **IF EXISTS**

    使用这个选项，如果视图不存在时不会产生错误，仅有会有一个提示信息。

-   **ALGORITHM**
    
    指定算法，可选项：UNDEFINED、MERGE、TEMPTABLE。当前只做语法兼容，暂无实际功能。
    
-   **view\_name**

    视图名称，可以用模式修饰。

    取值范围：字符串，符合标识符命名规范。

-   **column\_name**

    可选的名称列表，视图的字段名。如果没有给出，字段名取自查询中的字段名。

    取值范围：字符串，符合标识符命名规范。

-   **SET/DROP DEFAULT**

    设置或删除一个列的缺省值，该参数暂无实际意义。

-   **new\_owner**

    视图新所有者的用户名称。

-   **new\_name**

    视图的新名称。

-   **new\_schema**

    视图的新模式。

-   **view\_option\_name \[ = view\_option\_value \]**

    该子句为视图指定一个可选的参数。

    -   **security\_barrier**

        当VIEW试图提供行级安全时，应使用该参数。
        
        取值范围：Boolean类型，TRUE、FALSE。
    
    -   **check\_option**

        指定该视图的检查选项。

        取值范围：LOCAL、CASCADED。


## 示例<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
--创建一个由c_customer_sk小于150的内容组成的视图。
openGauss=# CREATE VIEW tpcds.customer_details_view_v1 AS
    SELECT * FROM tpcds.customer
    WHERE c_customer_sk < 150;

--修改视图名称。
openGauss=# ALTER VIEW tpcds.customer_details_view_v1 RENAME TO customer_details_view_v2;

--修改视图所属schema。
openGauss=# ALTER VIEW tpcds.customer_details_view_v2 SET schema public;

--删除视图。
openGauss=# DROP VIEW public.customer_details_view_v2;
```

## 相关链接<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s0c3f488fdb90433797e7d1561d9a074d"></a>

[CREATE VIEW](../SQLReference/CREATE-VIEW.md)，[DROP VIEW](../SQLReference/DROP-VIEW.md)

