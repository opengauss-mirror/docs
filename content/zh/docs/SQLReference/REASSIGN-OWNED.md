# REASSIGN OWNED

## 功能描述<a name="zh-cn_topic_0283136605_zh-cn_topic_0237122173_zh-cn_topic_0059779106_sfb032500d9624f8fb05a202a274cb9e9"></a>

修改数据库对象的属主。

REASSIGN OWNED要求系统将当前数据库中old_role拥有的所有数据库对象的属主更改为new_role。

## 注意事项<a name="zh-cn_topic_0283136605_zh-cn_topic_0237122173_zh-cn_topic_0059779106_sc1c0690ce85a4497bbc2bf507322bd08"></a>

-   REASSIGN OWNED常用于在删除角色之前的准备工作。
-   执行REASSIGN OWNED需要有原角色和目标角色上的权限。
-   REASSIGN OWNED不会更改数据本身的所有权。

## 语法格式<a name="zh-cn_topic_0283136605_zh-cn_topic_0237122173_zh-cn_topic_0059779106_s94f37352d3b04fddaca3d0266fffa8d8"></a>

```
REASSIGN OWNED BY old_role [, ...] TO new_role;
```

## 参数说明<a name="zh-cn_topic_0283136605_zh-cn_topic_0237122173_zh-cn_topic_0059779106_s304443c9b98d4336b7ce6894962dbe0c"></a>

-   **old\_role**

    旧属主的角色名。

-   **new\_role**

    将要成为这些对象属主的新角色的名称。


## 示例<a name="zh-cn_topic_0283136605_zh-cn_topic_0237122173_zh-cn_topic_0059779106_sbcf57ecc9f7a417bad32fed1fe01c036"></a>

无。

