# CREATE VIEW<a name="ZH-CN_TOPIC_0289900307"></a>

## 功能描述<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_sc0d0ea7296f7418d8e0b1a8878cf72ba"></a>

创建一个视图。视图与基本表不同，是一个虚拟的表。数据库中仅存放视图的定义，而不存放视图对应的数据，这些数据仍存放在原来的基本表中。若基本表中的数据发生变化，从视图中查询出的数据也随之改变。从这个意义上讲，视图就像一个窗口，透过它可以看到数据库中用户感兴趣的数据及变化。

## 注意事项<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_sae4035e7748641d3bca61cd89db0e80e"></a>

被授予CREATE ANY TABLE权限的用户，可以在public模式和用户模式下创建视图。

## 语法格式<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s3e7f4ca520974d6984e85b855c05a489"></a>

```
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
    [ WITH ( {view_option_name [= view_option_value]} [, ... ] ) ]
    AS query;
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>创建视图时使用WITH\(security\_barrier\)可以创建一个相对安全的视图，避免攻击者利用低成本函数的RAISE语句打印出隐藏的基表数据。

## 参数说明<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

-   **OR REPLACE**

    如果视图已存在，则重新定义。

-   **TEMP | TEMPORARY**

    创建临时视图。

-   **view\_name**

    要创建的视图名称。可以用模式修饰。

    取值范围：字符串，符合标识符命名规范。

-   **column\_name**

    可选的名称列表，用作视图的字段名。如果没有给出，字段名取自查询中的字段名。

    取值范围：字符串，符合标识符命名规范。

-   **view\_option\_name \[= view\_option\_value\]**

    该子句为视图指定一个可选的参数。

    目前view\_option\_name支持的参数仅有security\_barrier，当VIEW试图提供行级安全时，应使用该参数。

    取值范围：Boolean类型，TRUE、FALSE

-   **query**

    为视图提供行和列的SELECT或VALUES语句。


## 示例<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d"></a>

```
--创建字段spcname为pg_default组成的视图。
openGauss=# CREATE VIEW myView AS
    SELECT * FROM pg_tablespace WHERE spcname = 'pg_default';

--查看视图。
openGauss=# SELECT * FROM myView ;

--删除视图myView。
openGauss=# DROP VIEW myView;
```

## 相关链接<a name="zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_sfc32bec2a548470ebab19d6ca7d6abe2"></a>

[ALTER VIEW](ALTER-VIEW.md)，[DROP VIEW](DROP-VIEW.md)

