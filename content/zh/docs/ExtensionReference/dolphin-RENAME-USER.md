# RENAME USER<a name="ZH-CN_TOPIC_0289900931"></a>

## 功能描述<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s74e2e8764aa64af1b093f8f68069bce6"></a>

修改数据库中的用户名。

## 注意事项<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_sdcf8f26a27a64e52b7099ca3ce0256b6"></a>

-   RENAME USER会修改用户名，并且只能修改当前表的user的名称。
-   如果修改多个用户，并且其中一个用户名不存在或其他原因导致执行失败，整条语句都会失败，所有用户名都会保持不变。
-   与`ALTER USER ... RENAME TO ...`等价。

## 语法格式<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s6fa866d73d5c4158836c9fdd0ad5b3ac"></a>

```
RENAME USER 
    old_user1 TO new_user1,
    old_user2 TO new_user2,
    ...

```

## 参数说明<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_sa6ea557919e84c0db8ed5cbb227fa983"></a>

-   **old_user** 
    旧的用户名，必须已存在
-    **new_user** 
    新的用户名

## 示例<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s1af12a7c6e4e456f9fc72da9c90358ff"></a>

``` 
rename user 
    user1 to user4, 
    user2 to user5,
    user3 to user6;
```

## 相关链接<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s08580f38742d47efa6a955c9385d6ae2"> </a>

[ALTER USER](https://docs.opengauss.org/zh/docs/5.0.0/docs/BriefTutorial/%E9%99%84%E5%BD%95-SQL%E8%AF%AD%E6%B3%95.html)