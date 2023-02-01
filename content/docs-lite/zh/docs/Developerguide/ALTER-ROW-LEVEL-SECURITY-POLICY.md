# ALTER ROW LEVEL SECURITY POLICY<a name="ZH-CN_TOPIC_0289900230"></a>

## 功能描述<a name="zh-cn_topic_0283137062_zh-cn_topic_0237122069_section196521854173211"></a>

对已存在的行访问控制策略（包括行访问控制策略的名称，行访问控制指定的用户，行访问控制的策略表达式）进行修改。

## 注意事项<a name="zh-cn_topic_0283137062_zh-cn_topic_0237122069_section12765201893310"></a>

表的所有者或管理员用户才能进行此操作。

## 语法格式<a name="zh-cn_topic_0283137062_zh-cn_topic_0237122069_section16798192723415"></a>

```
ALTER [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name RENAME TO new_policy_name;

ALTER [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
    [ TO { role_name | PUBLIC } [, ...] ]
    [ USING ( using_expression ) ];
```

## 参数说明<a name="zh-cn_topic_0283137062_zh-cn_topic_0237122069_section11851526346"></a>

-   policy\_name

    行访问控制策略名称。

-   table\_name

    行访问控制策略的表名。

-   new\_policy\_name

    新的行访问控制策略名称。

-   role\_name

    行访问控制策略应用的数据库用户，可以指定多个用户，PUBLIC表示应用到所有用户。

-   using\_expression

    行访问控制的表达式，返回值为boolean类型。


## 示例<a name="zh-cn_topic_0283137062_zh-cn_topic_0237122069_section17979101023515"></a>

```
--创建数据表all_data
openGauss=# CREATE TABLE all_data(id int, role varchar(100), data varchar(100));

--创建行访问控制策略，当前用户只能查看用户自身的数据
openGauss=# CREATE ROW LEVEL SECURITY POLICY all_data_rls ON all_data USING(role = CURRENT_USER);
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_rls" FOR ALL
      To public
      USING (((role)::name = "current_user"()))
Has OIDs: no
Options: orientation=row, compression=no

--修改行访问控制all_data_rls的名称
openGauss=# ALTER ROW LEVEL SECURITY POLICY all_data_rls ON all_data RENAME TO all_data_new_rls;

--修改行访问控制策略影响的用户
openGauss=# ALTER ROW LEVEL SECURITY POLICY all_data_new_rls ON all_data TO alice, bob;
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_rls" FOR ALL
      TO alice,bob
      USING (((role)::name = "current_user"()))
Has OIDs: no
Options: orientation=row, compression=no

--修改行访问控制策略表达式
openGauss=# ALTER ROW LEVEL SECURITY POLICY all_data_new_rls ON all_data USING (id > 100 AND role = current_user);
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_new_rls" FOR ALL
      TO alice,bob
      USING (((id > 100) AND ((role)::name = "current_user"())))
Has OIDs: no
Options: orientation=row, compression=no
```

## 相关链接<a name="zh-cn_topic_0283137062_zh-cn_topic_0237122069_section1426016489355"></a>

[CREATE ROW LEVEL SECURITY POLICY](CREATE-ROW-LEVEL-SECURITY-POLICY.md)，[DROP ROW LEVEL SECURITY POLICY](DROP-ROW-LEVEL-SECURITY-POLICY.md)

