# DROP TYPE<a name="ZH-CN_TOPIC_0289900925"></a>

## 功能描述<a name="zh-cn_topic_0283137107_zh-cn_topic_0237122157_zh-cn_topic_0059778403_sd8f7b55734434619b381d7be49aed2df"></a>

删除一个用户定义的数据类型。

## 注意事项<a name="section114668159414"></a>

类型的所有者或者被授予了类型DROP权限的用户或者被授予了DROP ANY TYPE权限的用户有权限执行DROP TYPE命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137107_zh-cn_topic_0237122157_zh-cn_topic_0059778403_s5d2a1a9a8c0848c5b671e837e381ef36"></a>

```
DROP TYPE [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## 参数说明<a name="zh-cn_topic_0283137107_zh-cn_topic_0237122157_zh-cn_topic_0059778403_sc2135a1c06504d25b767b85bdea5c694"></a>

-   **IF EXISTS**

    如果指定的类型不存在，那么发出一个notice而不是抛出一个错误。

-   **name**

    要删除的类型名\(可以有模式修饰\)。

-   **CASCADE**

    级联删除依赖该类型的对象\(比如字段、函数、操作符等\)。

    **RESTRICT**

    如果有依赖对象，则拒绝删除该类型（缺省行为）。


## 示例<a name="zh-cn_topic_0283137107_zh-cn_topic_0237122157_zh-cn_topic_0059778403_sd583a49fc83b42fd8e73efee55f98ace"></a>

请参考CREATE TYPE的[示例](CREATE-TYPE.md#zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d)。

## 相关链接<a name="zh-cn_topic_0283137107_zh-cn_topic_0237122157_zh-cn_topic_0059778403_s428358f9df2f458a8d50d103683f7ee0"></a>

[CREATE TYPE](CREATE-TYPE.md)，[ALTER TYPE](ALTER-TYPE.md)
