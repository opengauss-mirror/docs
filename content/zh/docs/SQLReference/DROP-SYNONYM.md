# DROP SYNONYM

## 功能描述<a name="zh-cn_topic_0283137394_zh-cn_topic_0237122151_zh-cn_topic_0059778429_s99b7590244bd4c1ab904f72cfc2cc9a0"></a>

删除指定的SYNONYM对象。

## 注意事项<a name="zh-cn_topic_0283137394_zh-cn_topic_0237122151_zh-cn_topic_0059778429_s930f5a4f83c6409d88e8b3f1cb94b164"></a>

SYNONYM的所有者或者被授予了DROP ANY SEQUENCE权限的用户有权限执行DROP SYNONYM命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137394_zh-cn_topic_0237122151_zh-cn_topic_0059778429_s9b11702dc40d417f95cd9eec3970b4d1"></a>

```
DROP SYNONYM [ IF EXISTS ] synonym_name [ CASCADE | RESTRICT ];
```

## 参数描述<a name="zh-cn_topic_0283137394_zh-cn_topic_0237122151_zh-cn_topic_0059778429_sb1cba40c50ea4d648126cedd1ac258ff"></a>

-   **IF EXISTS**

    如果指定的同义词不存在，则发出一个notice而不是抛出一个错误。

-   **synonym\_name**

    同义词名字，可以带模式名。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖同义词的对象（比如视图）。
    -   RESTRICT：如果有依赖对象存在，则拒绝删除同义词。此选项为缺省值。


## 示例<a name="zh-cn_topic_0283137394_zh-cn_topic_0237122151_zh-cn_topic_0059778429_s029ee990ffb541b389848c4b246ecfcb"></a>

请参考CREATE SYNONYM的[示例](CREATE-SYNONYM.md#zh-cn_topic_0283136599_zh-cn_topic_0237122116_section1853433744413)。

## 相关链接<a name="zh-cn_topic_0283137394_zh-cn_topic_0237122151_zh-cn_topic_0059778429_sc10e825d28c44222b38ad09aeaa385d2"></a>

[ALTER SYNONYM](ALTER-SYNONYM.md)，[CREATE SYNONYM](CREATE-SYNONYM.md)

