# DROP ROW LEVEL SECURITY POLICY

## 功能描述<a name="zh-cn_topic_0283136715_zh-cn_topic_0237122144_section196521854173211"></a>

删除表上某个行访问控制策略。

## 注意事项<a name="zh-cn_topic_0283136715_zh-cn_topic_0237122144_section12765201893310"></a>

仅表的所有者或者管理员用户才能删除表的行访问控制策略。

## 语法格式<a name="zh-cn_topic_0283136715_zh-cn_topic_0237122144_section16798192723415"></a>

```
DROP [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name [ CASCADE | RESTRICT ]
```

## 参数说明<a name="zh-cn_topic_0283136715_zh-cn_topic_0237122144_section11851526346"></a>

-   **IF EXISTS**

    如果指定的行访问控制策略不存在，发出一个notice而不是抛出一个错误。

-   **policy\_name**

    要删除的行访问控制策略的名称。

    -   table\_name

        行访问控制策略所在的数据表名。

    -   CASCADE/RESTRICT

        仅适配此语法，无对象依赖于该行访问控制策略，CASCADE和RESTRICT效果相同。



## 示例<a name="zh-cn_topic_0283136715_zh-cn_topic_0237122144_section17979101023515"></a>

```
--创建数据表all_data
openGauss=# CREATE TABLE all_data(id int, role varchar(100), data varchar(100));

--创建行访问控制策略
openGauss=# CREATE ROW LEVEL SECURITY POLICY all_data_rls ON all_data USING(role = CURRENT_USER);

--删除行访问控制策略
openGauss=# DROP ROW LEVEL SECURITY POLICY all_data_rls ON all_data;
```

## 相关链接<a name="zh-cn_topic_0283136715_zh-cn_topic_0237122144_section1426016489355"></a>

[ALTER ROW LEVEL SECURITY POLICY](ALTER-ROW-LEVEL-SECURITY-POLICY.md)，[CREATE ROW LEVEL SECURITY POLICY](CREATE-ROW-LEVEL-SECURITY-POLICY.md)
