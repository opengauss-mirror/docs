# DROP VIEW

## 功能描述<a name="zh-cn_topic_0283137706_zh-cn_topic_0237122159_zh-cn_topic_0059777895_sed6f06f3d4d94b38b10c7592f98bacdb"></a>

数据库中强制删除已有的视图。

## 注意事项<a name="zh-cn_topic_0283137706_zh-cn_topic_0237122159_zh-cn_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

视图的所有者或者被授予了视图DROP权限的用户或拥有DROP ANY TABLE权限的用户，有权限执行DROP VIEW的命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137706_zh-cn_topic_0237122159_zh-cn_topic_0059777895_sf4510c6bdb8443de98b3b31a1fed9107"></a>

```
DROP VIEW [ IF EXISTS ] view_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283137706_zh-cn_topic_0237122159_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    如果指定的视图不存在，则发出一个notice而不是抛出一个错误。

-   **view\_name**

    要删除的视图名称。

    取值范围：已存在的视图。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖此视图的对象（比如其他视图）。
    -   RESTRICT：如果有依赖对象存在，则拒绝删除此视图。此选项为缺省值。


## 示例<a name="zh-cn_topic_0283137706_zh-cn_topic_0237122159_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

请参见CREATE VIEW的[示例](CREATE-VIEW.md#zh-cn_topic_0283137480_zh-cn_topic_0237122126_zh-cn_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d)。

## 相关链接<a name="zh-cn_topic_0283137706_zh-cn_topic_0237122159_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER VIEW](ALTER-VIEW.md)，[CREATE VIEW](CREATE-VIEW.md)
