# DROP GLOBAL CONFIGURATION<a name="ZH-CN_TOPIC_0000001251104175"></a>

## 功能描述<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

删除系统表gs\_global\_config中的参数值。

## 注意事项<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

-   仅支持数据库初始用户运行此命令。
-   不支持删除关键字为weak\_password。

## 语法格式<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
DROP GLOBAL CONFIGURATION 参数名称，参数名称...;
```

## 参数说明<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

参数名称是gs\_global\_config中已经存在的参数，删除不存在的参数将报错。
