# DROP RESOURCE POOL<a name="ZH-CN_TOPIC_0000001193987659"></a>

## 功能描述<a name="zh-cn_topic_0059778399_sa24aa65d84e94a079fb987b25652dd8d"></a>

删除一个资源池。

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>如果某个角色已关联到该资源池，无法删除。

## 注意事项<a name="zh-cn_topic_0059778399_sac7b2d84ed1a4b7fba5c5a6497f822c1"></a>

只要用户对当前数据库有DROP权限，就可以删除资源池。

## 语法格式<a name="zh-cn_topic_0059778399_s147ae6d344a249e1b923eedde3ba326a"></a>

```
DROP RESOURCE POOL [ IF EXISTS ] pool_name;
```

## 参数说明<a name="zh-cn_topic_0059778399_sb1f56ab4e3824ce58d2657a5745749f4"></a>

-   **IF EXISTS**

    如果指定的资源池不存在，发出一个notice而不是抛出一个错误。


-   **pool\_name**

    已创建过的资源池名称。

    取值范围：字符串，要符合标识符的命名规范。


## 示例<a name="zh-cn_topic_0059778399_s9b7c315e99ba4a41bfdb1f841109dda9"></a>

请参见CREATE RESOURCE POOL的[示例](CREATE-RESOURCE-POOL.md#zh-cn_topic_0059777569_s44181f6d005b4da1952aaeff4ef66e0e)。

## 相关链接<a name="zh-cn_topic_0059778399_s41faee269a414537919479fb56fc5a4d"></a>

[ALTER RESOURCE POOL](ALTER-RESOURCE-POOL.md)，[CREATE RESOURCE POOL](CREATE-RESOURCE-POOL.md)

