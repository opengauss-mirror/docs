# ALTER RESOURCE LABEL<a name="ZH-CN_TOPIC_0306525301"></a>

## 功能描述<a name="zh-cn_topic_0059778839_s878bf4f1569c4d2f87e056f26372448e"></a>

修改资源标签。

## 注意事项<a name="zh-cn_topic_0059778839_s63ad21f92ad74c9e8d6bf18bb7218c4f"></a>

只有poladmin，sysadmin或初始用户才能执行此操作。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
ALTER RESOURCE LABEL label_name (ADD|REMOVE) 
  label_item_list[, ...]*;
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

    资源标签名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **resource\_type**

    指的是要标记的数据库资源类型。

-   **resource\_path**

    指的是描述具体的数据库资源的路径。


## 示例<a name="section873151912198"></a>

```
--创建基本表table_for_label。
openGauss=# CREATE TABLE table_for_label(col1 int, col2 text);

--创建资源标签table_label。
openGauss=# CREATE RESOURCE LABEL table_label ADD COLUMN(table_for_label.col1);

--将col2添加至资源标签table_label中
openGauss=# ALTER RESOURCE LABEL table_label ADD COLUMN(table_for_label.col2);

--将资源标签table_label中的一项移除
openGauss=# ALTER RESOURCE LABEL table_label REMOVE COLUMN(table_for_label.col1);
```

## 相关链接<a name="section156744489391"></a>

[CREATE RESOURCE LABEL](CREATE-RESOURCE-LABEL.md),，[DROP RESOURCE LABEL](DROP-RESOURCE-LABEL.md)。

