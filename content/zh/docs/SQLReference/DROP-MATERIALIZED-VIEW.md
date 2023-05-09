# DROP MATERIALIZED VIEW

## 功能描述<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_sed6f06f3d4d94b38b10c7592f98bacdb"></a>

强制删除数据库中已有的物化视图。

## 注意事项<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

物化视图的所有者、物化视图所在模式的所有者、被授予了物化视图DROP权限的用户或拥有DROP ANY TABLE权限的用户才有权限执行DROP MATERIALIZED VIEW命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_sf4510c6bdb8443de98b3b31a1fed9107"></a>

```
DROP MATERIALIZED VIEW [ IF EXISTS ] mv_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    如果指定的物化视图不存在，则发出一个notice而不是抛出一个错误。

-   **mv\_name**

    要删除的物化视图名称。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖此物化视图的对象。
    -   RESTRICT：如果有依赖对象存在，则拒绝删除此物化视图。此选项为缺省值。


## 示例<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

```
--删除名为my_mv的物化视图。
openGauss=# DROP MATERIALIZED VIEW my_mv;
```

## 相关链接<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER MATERIALIZED VIEW](ALTER-MATERIALIZED-VIEW.md)，[CREATE INCREMENTAL MATERIALIZED VIEW](CREATE-INCREMENTAL-MATERIALIZED-VIEW.md)，  [CREATE MATERIALIZED VIEW](CREATE-MATERIALIZED-VIEW.md)，[CREATE TABLE](CREATE-TABLE.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](REFRESH-INCREMENTAL-MATERIALIZED-VIEW.md)，[REFRESH MATERIALIZED VIEW](REFRESH-MATERIALIZED-VIEW.md)

