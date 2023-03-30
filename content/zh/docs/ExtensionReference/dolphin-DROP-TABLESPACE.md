# DROP TABLESPACE<a name="ZH-CN_TOPIC_0289899918"></a>

## 功能描述<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s73f8a05d2e0248f18e34a613fcde3fb6"></a>

删除一个表空间。

## 注意事项<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s8573862b21234deaa562c0502d4cae55"></a>

相比于原始的openGauss，dolphin对于```DROP TABLESPACE```语法的修改主要为：

新增```ENGINE [=] engine_name```可选项，无实际意义，仅作语法兼容。

## 语法格式<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s6c3564e4565e4a808f931d50ab12c041"></a>

```
DROP TABLESPACE [ IF EXISTS ] tablespace_name [ENGINE [=] engine_name];
```

## 参数说明<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_sd3609e09c22149eba3e6e64c989573b6"></a>

-   **IF EXISTS**

    如果指定的表空间不存在，则发出一个notice而不是抛出一个错误。

-   **tablespace\_name**

    表空间的名称。

    取值范围：已存在的表空间的名称。

-   **engine\_name**

    无实际意义。

    取值范围：任意字符串。


## 示例<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_sbcb08a6a5edc433b951080b230808c35"></a>

请参见CREATE TABLESPACE的[示例](dolphin-CREATE-TABLESPACE.md#zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e)。

## 相关链接<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s5f1d0e75c90d465fadd639b26f10ab64"></a>

[ALTER TABLESPACE](dolphin-ALTER-TABLESPACE.md)，[CREATE TABLESPACE](dolphin-CREATE-TABLESPACE.md)
