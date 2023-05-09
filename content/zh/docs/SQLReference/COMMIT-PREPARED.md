# COMMIT PREPARED

## 功能描述<a name="zh-cn_topic_0283137183_zh-cn_topic_0237122095_zh-cn_topic_0059777686_s06b2916a6c67438087f9f84a0159252a"></a>

提交一个早先为两阶段提交准备好的事务。

## 注意事项<a name="zh-cn_topic_0283137183_zh-cn_topic_0237122095_zh-cn_topic_0059777686_s482c910917bb49bc8102755589ad261a"></a>

-   该功能仅在维护模式（GUC参数xc\_maintenance\_mode为on时）下可用。该模式谨慎打开，一般供维护人员排查问题使用，一般用户不应使用该模式。
-   命令执行者必须是该事务的创建者或系统管理员，且创建和提交操作只能在同一个会话中。
-   事务功能由数据库自动维护，不应显式使用事务功能。

## 语法格式<a name="zh-cn_topic_0283137183_zh-cn_topic_0237122095_zh-cn_topic_0059777686_s0d0ca300175c4442a111a05cf2f7f5c4"></a>

```
COMMIT PREPARED transaction_id ;
COMMIT PREPARED transaction_id WITH CSN;
```

## 参数说明<a name="zh-cn_topic_0283137183_zh-cn_topic_0237122095_zh-cn_topic_0059777686_sf5a6e24d12744394a76bb31e0fe9f077"></a>

-   **transaction\_id**

    待提交事务的标识符。它不能和任何当前预备事务已经使用了的标识符同名。


-   **CSN（commit sequence number）**

    待提交事务的序列号。它是一个64位递增无符号数。


## 示例<a name="zh-cn_topic_0283137183_zh-cn_topic_0237122095_section2201134011213"></a>

```
--提交标识符为的trans_test的事务。
openGauss=# COMMIT PREPARED 'trans_test';
```

## 相关链接<a name="zh-cn_topic_0283137183_zh-cn_topic_0237122095_zh-cn_topic_0059777686_s7c42ca786fad42b0badcb6f63e895aff"></a>

[PREPARE TRANSACTION](PREPARE-TRANSACTION.md)，[ROLLBACK PREPARED](ROLLBACK-PREPARED.md)。

