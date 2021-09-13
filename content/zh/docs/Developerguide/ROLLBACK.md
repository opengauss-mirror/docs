# ROLLBACK<a name="ZH-CN_TOPIC_0289900944"></a>

## 功能描述<a name="zh-cn_topic_0283137047_zh-cn_topic_0237122180_zh-cn_topic_0059778963_s332087a99fa4409188f6347dab075098"></a>

回滚当前事务并取消当前事务中的所有更新。

在事务运行的过程中发生了某种故障，事务不能继续执行，系统将事务中对数据库的所有已完成的操作全部撤销，数据库状态回到事务开始时。

## 注意事项<a name="zh-cn_topic_0283137047_zh-cn_topic_0237122180_zh-cn_topic_0059778963_s455120172ee44e1fbbb8af4e9b74e049"></a>

如果不在一个事务内部发出ROLLBACK不会有问题，但是将抛出一个NOTICE信息。

## 语法格式<a name="zh-cn_topic_0283137047_zh-cn_topic_0237122180_zh-cn_topic_0059778963_se0444f532b0e48bfafa13bbed139ef4a"></a>

```
ROLLBACK [ WORK | TRANSACTION ];
```

## 参数说明<a name="zh-cn_topic_0283137047_zh-cn_topic_0237122180_zh-cn_topic_0059778963_scd7892be945e4ac7bfffeb96178c5ba9"></a>

**WORK | TRANSACTION**

可选关键字。除了增加可读性，没有任何其他作用。

## 示例<a name="zh-cn_topic_0283137047_zh-cn_topic_0237122180_zh-cn_topic_0059778963_s29be3deb19b740fba171f9403a8e4318"></a>

```
--开启一个事务
openGauss=# START TRANSACTION;

--取消所有更改
openGauss=# ROLLBACK;
```

## 相关链接<a name="zh-cn_topic_0283137047_zh-cn_topic_0237122180_zh-cn_topic_0059778963_s1745a25c568b45c7ad9475ba14714358"></a>

[COMMIT | END](COMMIT-END.md)

