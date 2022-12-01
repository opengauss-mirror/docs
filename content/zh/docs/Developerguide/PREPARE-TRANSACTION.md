# PREPARE TRANSACTION<a name="ZH-CN_TOPIC_0289900175"></a>

## 功能描述<a name="zh-cn_topic_0283137205_zh-cn_topic_0237122172_zh-cn_topic_0059779173_s84c1f6c6e66743a3b5e71a25e070e50f"></a>

为当前事务做两阶段提交的准备。

在命令之后，事务就不再和当前会话关联了；它的状态完全保存在磁盘上，它被提交成功的可能性非常高，即使是在请求提交之前数据库发生了崩溃也如此。

一旦准备好了，一个事务就可以在稍后用[COMMIT PREPARED](COMMIT-PREPARED.md)或  [ROLLBACK PREPARED](ROLLBACK-PREPARED.md)命令分别进行提交或者回滚。这些命令可以从任何会话中发出，而不光是最初执行事务的那个会话。

从发出命令的会话的角度来看，PREPARE TRANSACTION不同于ROLLBACK：在执行它之后，就不再有活跃的当前事务了，并且预备事务的效果无法见到（在事务提交的时候其效果会再次可见）。

如果PREPARE TRANSACTION因为某些原因失败，那么它就会变成一个ROLLBACK，当前事务被取消。

## 注意事项<a name="zh-cn_topic_0283137205_zh-cn_topic_0237122172_zh-cn_topic_0059779173_sa5991e597322481d9b5cf468c92b7af7"></a>

-   事务功能由数据库自动维护，不应显式使用事务功能。
-   在运行PREPARE TRANSACTION命令时，必须在postgresql.conf配置文件中增大max\_prepared\_transactions的数值。建议至少将其设置为等于max\_connections，这样每个会话都可以有一个等待中的预备事务。

## 语法格式<a name="zh-cn_topic_0283137205_zh-cn_topic_0237122172_zh-cn_topic_0059779173_s53fd0bedc6174ab7a4c21729b10b8889"></a>

```
PREPARE TRANSACTION transaction_id;
```

## 参数说明<a name="zh-cn_topic_0283137205_zh-cn_topic_0237122172_zh-cn_topic_0059779173_safa475d1f6f848039db0d794c7f5aa5b"></a>

**transaction\_id**

待提交事务的标识符，用于后面在COMMIT PREPARED或ROLLBACK PREPARED的时候标识这个事务。它不能和任何当前预备事务已经使用了的标识符同名。

取值范围：标识符必须以字符串文本的方式书写，并且必须小于200字节长。

## 相关链接<a name="zh-cn_topic_0283137205_zh-cn_topic_0237122172_zh-cn_topic_0059779173_s2562d8e8d89a4cd981f08e57f14bb219"></a>

[COMMIT PREPARED](COMMIT-PREPARED.md)，[ROLLBACK PREPARED](ROLLBACK-PREPARED.md)
