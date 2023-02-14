# DROP OWNED

## 功能描述<a name="zh-cn_topic_0283136635_zh-cn_topic_0237122143_zh-cn_topic_0059777620_sa3265773225d4612b9bafd61c332eae0"></a>

删除一个数据库角色所拥有的数据库对象。

## 注意事项<a name="zh-cn_topic_0283136635_zh-cn_topic_0237122143_zh-cn_topic_0059777620_s59f5b59d381a4bfcb473a04864354fe1"></a>

-   所有该角色在当前数据库里和共享对象（数据库、表空间）上的所有对象上的权限都将被撤销。
-   DROP OWNED常常被用来为移除一个或者多个角色做准备。因为DROP OWNED只影响当前数据库中的对象，通常需要在包含将被移除角色所拥有的对象的每一个数据库中都执行这个命令。
-   使用CASCADE选项可能导致这个命令递归去删除由其他用户所拥有的对象。
-   角色所拥有的数据库、表空间将不会被移除。

## 语法格式<a name="zh-cn_topic_0283136635_zh-cn_topic_0237122143_zh-cn_topic_0059777620_s012e6785112742ba8b96d4f6b448a178"></a>

```
DROP OWNED BY name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283136635_zh-cn_topic_0237122143_zh-cn_topic_0059777620_s5e20663187d9497f800eddc8ed555802"></a>

-   **name**

    角色名。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除所有依赖于被删除对象的对象。
    -   RESTRICT（缺省值）：拒绝删除那些有任何依赖对象存在的对象。


## 相关链接<a name="zh-cn_topic_0283136635_zh-cn_topic_0237122143_section1285104485620"></a>

[REASSIGN OWNED](REASSIGN-OWNED.md)  ,  [DROP ROLE](DROP-ROLE.md)
