# DROP PROCEDURE<a name="ZH-CN_TOPIC_0289900018"></a>

## 功能描述<a name="zh-cn_topic_0283137697_zh-cn_topic_0237122145_zh-cn_topic_0059778377_se53c099099b3499097fe40da9daf8b12"></a>

删除已存在的存储过程。

## 注意事项<a name="zh-cn_topic_0283137697_zh-cn_topic_0237122145_zh-cn_topic_0059778377_s1e16e3722cae4864ad570562a7f7273e"></a>

通过[DROP FUNCTION](DROP-FUNCTION.md)也能删除存储过程。

## 语法格式<a name="zh-cn_topic_0283137697_zh-cn_topic_0237122145_zh-cn_topic_0059778377_s7fd54cba57c541c5a49626ef477adc4a"></a>

```
DROP PROCEDURE [ IF EXISTS  ] procedure_name ;
```

## 参数说明<a name="zh-cn_topic_0283137697_zh-cn_topic_0237122145_zh-cn_topic_0059778377_s080d001d1a1d451cb6e4965bea42c9e9"></a>

-   **IF EXISTS**

    如果指定的存储过程不存在，发出一个notice而不是抛出一个错误。

-   **procedure\_name**

    要删除的存储过程名称。

    取值范围：已存在的存储过程名。


## 相关链接<a name="zh-cn_topic_0283137697_zh-cn_topic_0237122145_zh-cn_topic_0059778377_s79db76d7068b489c8b96c2c51494ee04"></a>

[CREATE PROCEDURE](CREATE-PROCEDURE.md)

