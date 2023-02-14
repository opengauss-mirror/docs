# DROP TEXT SEARCH CONFIGURATION

## 功能描述<a name="zh-cn_topic_0283136862_zh-cn_topic_0237122154_zh-cn_topic_0059778389_s12ec071125bd4d4981cbcdad70bd9a1e"></a>

删除已有文本搜索配置。

## 注意事项<a name="zh-cn_topic_0283136862_zh-cn_topic_0237122154_zh-cn_topic_0059778389_sb29dd2fe6ef642c199d2bdfda06ef74c"></a>

要执行这个命令，用户必须是该配置的所有者。

## 语法格式<a name="zh-cn_topic_0283136862_zh-cn_topic_0237122154_zh-cn_topic_0059778389_sa8997c782c4d412b9c4fd9578137e494"></a>

```
DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283136862_zh-cn_topic_0237122154_zh-cn_topic_0059778389_s519cbd43e889441f9638691754942bda"></a>

-   **IF EXISTS**

    如果指定的文本搜索配置不存在，那么发出一个notice而不是抛出一个错误。

-   **name**

    要删除的文本搜索配置名称（可有模式修饰）。

-   **CASCADE**

    级联删除依赖文本搜索配置的对象。

-   **RESTRICT**

    若有任何对象依赖文本搜索配置则拒绝删除它。这是默认情况。


## 示例<a name="zh-cn_topic_0283136862_zh-cn_topic_0237122154_zh-cn_topic_0059778389_s720b27fe18f245ca85d1204cda30b327"></a>

请参见CREATE TEXT SEARCH CONFIGURATION的[示例](CREATE-TEXT-SEARCH-CONFIGURATION.md#zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_sc3a4aef5c0c0420eaf5a2e67097004a2)。

## 相关链接<a name="zh-cn_topic_0283136862_zh-cn_topic_0237122154_zh-cn_topic_0059778389_s8bb54ddcd47044a0a99c9c9dffadac2c"></a>

[ALTER TEXT SEARCH CONFIGURATION](ALTER-TEXT-SEARCH-CONFIGURATION.md)，  [CREATE TEXT SEARCH CONFIGURATION](CREATE-TEXT-SEARCH-CONFIGURATION.md)
