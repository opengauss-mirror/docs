# RESET<a name="ZH-CN_TOPIC_0289900889"></a>

## 功能描述<a name="zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_sa3f93000a69d4ca8b8633a05032af243"></a>

RESET将指定的运行时参数恢复为缺省值。这些参数的缺省值是指postgresql.conf配置文件中所描述的参数缺省值。

RESET命令与如下命令的作用相同：

SET configuration\_parameter TO DEFAULT

## 注意事项<a name="zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_se19c96dc4d7341868f398f878ba97059"></a>

RESET的事务性行为和SET相同：它的影响将会被事务回滚撤销。

## 语法格式<a name="zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_s3afbc03dbde14335b3bd49e0d094df41"></a>

```
RESET {configuration_parameter | CURRENT_SCHEMA | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL };
```

## 参数说明<a name="zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_s46998dbd2cc84394b47aad2adc8ea141"></a>

-   **configuration\_parameter**

    运行时参数的名称。

    取值范围：可以使用SHOW ALL命令查看运行时参数。

-   **CURRENT\_SCHEMA**

    当前模式

-   **TIME ZONE**

    时区。

-   **TRANSACTION ISOLATION LEVEL**

    事务的隔离级别。

-   **SESSION AUTHORIZATION**

    当前会话的用户标识符。

-   **ALL**

    所有运行时参数。


## 示例<a name="zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_sa81e1feab8d2413fb3c8fb7b7c013fcb"></a>

```
--把timezone设为缺省值。
openGauss=# RESET timezone;

--把所有参数设置为缺省值。
openGauss=# RESET ALL;
```

## 相关链接<a name="zh-cn_topic_0283137385_zh-cn_topic_0237122178_zh-cn_topic_0059779097_s97f0691750e2467d97f3e904047703d7"></a>

[SET](SET.md)，[SHOW](SHOW.md)

