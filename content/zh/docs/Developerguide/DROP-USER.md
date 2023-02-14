# DROP USER

## 功能描述<a name="zh-cn_topic_0283137192_zh-cn_topic_0237122158_zh-cn_topic_0059778403_sd8f7b55734434619b381d7be49aed2df"></a>

删除用户，同时会删除同名的schema。

## 注意事项<a name="zh-cn_topic_0283137192_zh-cn_topic_0237122158_zh-cn_topic_0059778403_sa729a691cce1445b9a6f9427a2e19229"></a>

-   须使用CASCADE级联删除依赖用户的对象（除数据库外）。当删除用户的级联对象时，如果级联对象处于锁定状态，则此级联对象无法被删除，直到对象被解锁或锁定级联对象的进程被杀死。
-   在openGauss中，存在一个配置参数enable\_kill\_query，此参数在配置文件postgresql.conf中。此参数影响级联删除用户对象的行为：
    -   当参数enable\_kill\_query为on ，且使用CASCADE模式删除用户时，会自动kill锁定用户级联对象的进程，并删除用户。
    -   当参数enable\_kill\_query为off，且使用CASCADE模式删除用户时，会等待锁定级联对象的进程结束之后再删除用户。

-   在数据库中删除用户时，如果依赖用户的对象在其他数据库中或者依赖用户的对象是其他数据库，请用户先手动删除其他数据库中的依赖对象或直接删除依赖数据库，再删除用户。即drop user不支持跨数据库进行级联删除。
-   如果该用户被DATA SOURCE对象依赖时，无法直接级联删除该用户，需要手动删除对应的DATA SOURCE对象之后再删除该用户。

## 语法格式<a name="zh-cn_topic_0283137192_zh-cn_topic_0237122158_zh-cn_topic_0059778403_s5d2a1a9a8c0848c5b671e837e381ef36"></a>

```
DROP USER [ IF EXISTS ] user_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283137192_zh-cn_topic_0237122158_zh-cn_topic_0059778403_sc2135a1c06504d25b767b85bdea5c694"></a>

-   **IF EXISTS**

    如果指定的用户不存在，发出一个notice而不是抛出一个错误。

-   **user\_name**

    待删除的用户名。

    取值范围：已存在的用户名。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖用户的对象。
    -   RESTRICT：如果用户还有任何依赖的对象，则拒绝删除该用户（缺省行为）。

        >![](public_sys-resources/icon-note.png) **说明：**
        >在openGauss中，存在一个配置参数enable\_kill\_query，此参数在配置文件postgresql.conf中。此参数影响级联删除用户对象的行为：
        >
        >-   当参数enable\_kill\_query为on ，且使用CASCADE模式删除用户时，会自动kill锁定用户级联对象的进程，并删除用户。
        >
        >-   当参数enable\_kill\_query为off，且使用CASCADE模式删除用户时，会等待锁定级联对象的进程结束之后再删除用户。



## 示例<a name="zh-cn_topic_0283137192_zh-cn_topic_0237122158_zh-cn_topic_0059778403_sd583a49fc83b42fd8e73efee55f98ace"></a>

请参考CREATE USER的[示例](CREATE-USER.md#zh-cn_topic_0283136891_zh-cn_topic_0237122125_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa)。

## 相关链接<a name="zh-cn_topic_0283137192_zh-cn_topic_0237122158_zh-cn_topic_0059778403_s428358f9df2f458a8d50d103683f7ee0"></a>

[ALTER USER](ALTER-USER.md)，[CREATE USER](CREATE-USER.md)
