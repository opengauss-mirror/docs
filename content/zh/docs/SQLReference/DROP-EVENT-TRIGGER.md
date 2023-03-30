# DROP EVENT TRIGGER<a name="ZH-CN_TOPIC_0289090035"></a>

## 功能描述<a name="zh-cn_topic_0283137186_zh-cn_topic_0231227156_zh-cn_topic_0059777895_sed6f06f3d4d94bb10c387592f98bacdb"></a>

删除事件触发器。

## 注意事项<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

只有超级用户或者系统管理员才有权限删除事件触发器。

## 语法格式<a name="zh-cn_topic_0283137186_zh-cn_topic_0237121256_zh-cn_topic_0059777895_sf4510c6bdb844b3b3de9831a1fed9107"></a>
DROP EVENT TRIGGER [ IF EXISTS ] name [ CASCADE | RESTRICT ];

## 参数说明<a name="zh-cn_topic_0283731186_zh-cn_topic_0237151226_zh-cn_topic_0059777895_se717dd5fd464489bb3502495c62d3a9e"></a>

-   **IF EXISTS**

    如果指定的事件触发器不存在，则发出一个notice而不是抛出一个错误。

-   **name**

    要删除的事件触发器名称。

    取值范围：已存在的事件触发器。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖此触发器的对象。
    -   RESTRICT：如果有依赖对象存在，则拒绝删除此触发器。此选项为缺省值。    

## 示例<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

请参见[CREATE EVENT TRIGGER](CREATE-EVENT-TRIGGER.md)的[示例](CREATE-EVENT-TRIGGER.md#zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669)。

## 相关链接<a name="zh-cn_topic_0283137014_zh-cn_topic_0237212081_zh-cn_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[ALTER EVENT TRIGGER](ALTER-EVENT-TRIGGER.md)，[CREATE EVENT TRIGGER](CREATE-EVENT-TRIGGER.md)