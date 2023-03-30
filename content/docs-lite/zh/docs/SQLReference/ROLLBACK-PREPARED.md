# ROLLBACK PREPARED<a name="ZH-CN_TOPIC_0289900446"></a>

## 功能描述<a name="zh-cn_topic_0283136817_zh-cn_topic_0237122181_zh-cn_topic_0059779108_s4ddd2b1606b742109b4066ee1dee112e"></a>

取消一个先前为两阶段提交准备好的事务。

## 注意事项<a name="zh-cn_topic_0283136817_zh-cn_topic_0237122181_zh-cn_topic_0059779108_sde92c2efb2ed48d4bbaf0f41b971eaaf"></a>

-   要想回滚一个预备事务，必须是最初发起事务的用户，或者是系统管理员。
-   事务功能由数据库自动维护，不应显式使用事务功能。

## 语法格式<a name="zh-cn_topic_0283136817_zh-cn_topic_0237122181_zh-cn_topic_0059779108_s8b401cf759b14cafac859d804d24414b"></a>

```
ROLLBACK PREPARED transaction_id ;
```

## 参数说明<a name="zh-cn_topic_0283136817_zh-cn_topic_0237122181_zh-cn_topic_0059779108_scb5b67e1949c4c02ab7624fb4d845685"></a>

**transaction\_id**

待提交事务的标识符。它不能和任何当前预备事务已经使用了的标识符同名。

## 相关链接<a name="zh-cn_topic_0283136817_zh-cn_topic_0237122181_zh-cn_topic_0059779108_s8478ceeac5ca4509817f9fab4c7a138a"></a>

[COMMIT PREPARED](COMMIT-PREPARED.md)，[PREPARE TRANSACTION](PREPARE-TRANSACTION.md)。

