# REFRESH MATERIALIZED VIEW

## 功能描述<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

REFRESH MATERIALIZED VIEW会以全量刷新的方式对物化视图进行刷新。

## 注意事项<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

-   全量刷新既可以对全量物化视图执行，也可以对增量物化视图执行。
-   刷新物化视图需要当前用户拥有基表的SELECT权限。

## 语法格式<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
REFRESH MATERIALIZED VIEW mv_name;
```

## 参数说明<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **mv\_name**

    要刷新的物化视图的名称。


## 示例<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
--创建一个普通表
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
--创建全量物化视图
openGauss=# CREATE MATERIALIZED VIEW my_mv AS SELECT * FROM my_table;
--创建增量物化视图
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW my_imv AS SELECT * FROM my_table;
--基表写入数据
openGauss=# INSERT INTO my_table VALUES(1,1),(2,2);
--对全量物化视图my_mv进行全量刷新
openGauss=# REFRESH MATERIALIZED VIEW my_mv;
--对增量物化视图my_imv进行全量刷新
openGauss=# REFRESH MATERIALIZED VIEW my_imv;
```

## 相关链接<a name="zh-cn_topic_0283136612_section1922813315464"></a>

[ALTER MATERIALIZED VIEW](ALTER-MATERIALIZED-VIEW.md)，[CREATE INCREMENTAL MATERIALIZED VIEW](CREATE-INCREMENTAL-MATERIALIZED-VIEW.md)，  [CREATE MATERIALIZED VIEW](CREATE-MATERIALIZED-VIEW.md)，[CREATE TABLE](CREATE-TABLE.md)，  [DROP MATERIALIZED VIEW](DROP-MATERIALIZED-VIEW.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](REFRESH-INCREMENTAL-MATERIALIZED-VIEW.md)
