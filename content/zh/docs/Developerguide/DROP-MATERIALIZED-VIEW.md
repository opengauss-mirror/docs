# DROP MATERIALIZED VIEW <a name="ZH-CN_TOPIC_0242370616"></a>

## 功能描述<a name="zh-cn_topic_0237122152_zh-cn_topic_0059778107_s74e2e8764aa64af1b093f8f68069bce6"></a>

数据库中强制删除已有的物化视图。

## 注意事项<a name="zh-cn_topic_0237122152_zh-cn_topic_0059778107_sdcf8f26a27a64e52b7099ca3ce0256b6"></a>

只有物化视图的所有者有权限执行DROP MATERIALIZED VIEW的命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0237122152_zh-cn_topic_0059778107_s6fa866d73d5c4158836c9fdd0ad5b3ac"></a>

```
DROP MATERIALIZED VIEW [ IF EXISTS ] mv_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0237122152_zh-cn_topic_0059778107_sa6ea557919e84c0db8ed5cbb227fa983"></a>

-   **IF EXISTS**

    如果指定的物化视图不存在，则发出一个notice而不是抛出一个错误。

-   **mv\_name**

    要删除的物化视图名称。

-   **CASCADE | RESTRICT**
    
    -   CASCADE：级联删除依赖此物化视图的对象。
    -   RESTRICT：如果依赖对象存在，则拒绝删除此物化视图。此选项为缺省值。


## 示例<a name="zh-cn_topic_0237122152_zh-cn_topic_0059778107_s1af12a7c6e4e456f9fc72da9c90358ff"></a>

```
--这个命令将移除名为order_summary的物化视图：
postgres=# DROP MATERIALIZED VIEW order_summary;
```

## 相关链接<a name="zh-cn_topic_0237122152_zh-cn_topic_0059778107_s08580f38742d47efa6a955c9385d6ae2"></a>

[CREATE MATERIALIZED VIEW](content/zh/docs/Developerguide/CREATE-MATERIALIZED-VIEW.md)，[ALTER MATERIALIZED VIEW](content/zh/docs/Developerguide/ALTER-MATERIALIZED-VIEW.md)，[REFRESH MATERIALIZED VIEW](content/zh/docs/Developerguide/REFRESH-MATERIALIZED-VIEW.md)