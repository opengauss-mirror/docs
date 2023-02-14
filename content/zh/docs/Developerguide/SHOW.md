# SHOW

## 功能描述<a name="zh-cn_topic_0283136640_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

SHOW将显示当前运行时参数的数值。

## 注意事项<a name="zh-cn_topic_0283136640_zh-cn_topic_0237122191_zh-cn_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

无。

## 语法格式<a name="zh-cn_topic_0283136640_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
SHOW
  {
    [VARIABLES LIKE] configuration_parameter |
    CURRENT_SCHEMA |
    TIME ZONE |
    TRANSACTION ISOLATION LEVEL |
    SESSION AUTHORIZATION |
    ALL
  };
```

## 参数说明<a name="zh-cn_topic_0283136640_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

显示变量的参数请参见RESET的[参数说明](RESET.md#zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_s46998dbd2cc84394b47aad2adc8ea141)。

## 示例<a name="zh-cn_topic_0283136640_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s9926ef8e79984fac9b05d0b6bd0e8fd5"></a>

```
--显示 timezone 参数值。
openGauss=# SHOW timezone;

--显示所有参数。
openGauss=# SHOW ALL;

--显示参数名中包含”var”的所有参数
openGauss=# SHOW VARIABLES LIKE var;
```

## 相关链接<a name="zh-cn_topic_0283136640_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s5f7ae1b9fc8c4edfa04138996c61eaa4"></a>

[SET](SET.md)，[RESET](RESET.md)
