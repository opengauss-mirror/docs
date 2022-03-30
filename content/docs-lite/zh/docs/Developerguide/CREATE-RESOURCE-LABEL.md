# CREATE RESOURCE LABEL<a name="ZH-CN_TOPIC_0306525304"></a>

## 功能描述<a name="section1163224811518"></a>

创建资源标签。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

只有poladmin，sysadmin或初始用户能正常执行此操作。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE RESOURCE LABEL [IF NOT EXISTS] label_name ADD label_item_list[, ...]*;
```

-   label\_item\_list：

    ```
    resource_type(resource_path[, ...]*)
    ```

-   resource\_type：

    ```
    TABLE | COLUMN | SCHEMA | VIEW | FUNCTION
    ```


## 参数说明<a name="section2852173114389"></a>

-   **label\_name**

    资源标签名称，创建时要求不能与已有标签重名。

    取值范围：字符串，要符合标识符的命名规范。

-   **resource\_type**

    指的是要标记的数据库资源类型。

-   **resource\_path**

    指的是描述具体的数据库资源的路径。


## 示例<a name="section7854941155112"></a>

```
--创建一个表tb_for_label
openGauss=# CREATE TABLE tb_for_label(col1 text, col2 text, col3 text);

--创建一个模式schema_for_label
openGauss=# CREATE SCHEMA schema_for_label;

--创建一个视图view_for_label
openGauss=# CREATE VIEW view_for_label AS SELECT 1;

--创建一个函数func_for_label
openGauss=# CREATE FUNCTION func_for_label RETURNS TEXT AS $$ SELECT col1 FROM tb_for_label; $$ LANGUAGE SQL;

--基于表创建资源标签
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS table_label add TABLE(public.tb_for_label);

--基于列创建资源标签
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS column_label add COLUMN(public.tb_for_label.col1);

--基于模式创建资源标签
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS schema_label add SCHEMA(schema_for_label);

--基于视图创建资源标签
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS view_label add VIEW(view_for_label);

--基于函数创建资源标签
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS func_label add FUNCTION(func_for_label);

```

## 相关链接<a name="zh-cn_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER RESOURCE LABEL](ALTER-RESOURCE-LABEL.md)，[DROP RESOURCE LABEL](DROP-RESOURCE-LABEL.md)。

