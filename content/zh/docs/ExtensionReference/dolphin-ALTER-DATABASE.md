# ALTER DATABASE

## 功能描述<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_sbb9c79973fbf4b4b8f8e8355b0f67f63"></a>

修改数据库的属性，包括它的名称、所有者、连接数限制、对象隔离属性等。

修改模式的属性。仅在修改默认字符集和字符序时为模式的含义。

## 注意事项<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_sb8bbb55d049b42e688a2e152d2f6c737"></a>

相比于原始的openGauss，dolphin对于ALTER DATABASE语法的修改为：

- 增加可修改项 [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ]。

## 语法格式<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_s2eca2e2a5fc04ac798bbdf1dce3e7303"></a>


- 修改SCHEMA的默认字符集和字符序

  ```
  ALTER DATABASE schema_name [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ];
  ```

  ![](public_sys-resources/icon-note.png) **说明：** 

  -   B兼容性下，仅在 dolphin.b_compatibility_mode 为on时支持该语法。
  -   使用该语法时，语法等效于ALTER SCHEMA。

## 参数说明<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_s4d6b72484e3b43969af25757fda7ad81"></a>

- **schema_name**

  需要修改属性的数据库名称。

  取值范围：字符串，要符合标识符的命名规范。

- **[ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ]**

  指定模式的默认字符集，单独指定时会将模式的默认字符序设置为指定的字符集的默认字符序。

- **[ [DEFAULT] COLLATE [ = ] default_collation ]**

  指定模式的默认字符序，单独指定时会将模式的默认字符集设置为指定的字符序对应的字符集。

## 示例<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_sb089bcdb51bd4932a2967c246217d29e"></a>

请参考CREATE DATABASE的[示例](dolphin-CREATE-DATABASE.md#zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c)。

## 相关链接<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_saa1e5193215b4927989f304541d2ecbd"></a>

[CREATE DATABASE](dolphin-CREATE-DATABASE.md)，[DROP DATABASE](dolphin-DROP-DATABASE.md)，[ALTER DATABASE](dolphin-ALTER-DATABASE.md)
