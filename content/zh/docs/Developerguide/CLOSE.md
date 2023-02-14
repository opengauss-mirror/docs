# CLOSE

## 功能描述<a name="zh-cn_topic_0283137397_zh-cn_topic_0237122091_zh-cn_topic_0059779164_sa18f3afba3784d76b0052fa2fa489b8c"></a>

CLOSE释放和一个游标关联的所有资源。

## 注意事项<a name="zh-cn_topic_0283137397_zh-cn_topic_0237122091_zh-cn_topic_0059779164_seebfc5d278d44f7382b1d230976ae9ea"></a>

-   不允许对一个已关闭的游标再做任何操作。
-   一个不再使用的游标应该尽早关闭。
-   当创建游标的事务用COMMIT或ROLLBACK终止之后，每个不可保持的已打开游标都隐含关闭。
-   当创建游标的事务通过ROLLBACK退出之后，每个可以保持的游标都将隐含关闭。
-   当创建游标的事务成功提交，可保持的游标将保持打开，直到执行一个明确的CLOSE或者客户端断开。
-   openGauss没有明确打开游标的OPEN语句，因为一个游标在使用CURSOR命令定义的时候就打开了。可以通过查询系统视图pg\_cursors看到所有可用的游标。

## 语法格式<a name="zh-cn_topic_0283137397_zh-cn_topic_0237122091_zh-cn_topic_0059779164_s8ba4e8a4cce54146aea763d5569214e7"></a>

```
CLOSE { cursor_name | ALL } ;
```

## 参数说明<a name="zh-cn_topic_0283137397_zh-cn_topic_0237122091_zh-cn_topic_0059779164_s9a79c82c9d044057bd0e41c544e1efcd"></a>

-   **cursor\_name**

    一个待关闭的游标名称。

-   **ALL**

    关闭所有已打开的游标。


## 示例<a name="zh-cn_topic_0283137397_zh-cn_topic_0237122091_zh-cn_topic_0059779164_sc77056d6ff5e4461b6f03b2587665cf0"></a>

请参考FETCH的[示例](FETCH.md#zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_s1ee72832a27547e4949061a010e24578)。

## 相关链接<a name="zh-cn_topic_0283137397_zh-cn_topic_0237122091_zh-cn_topic_0059779164_sbd6c1c8ef3144346919144e8b416822f"></a>

[FETCH](FETCH.md)，[MOVE](MOVE.md)
