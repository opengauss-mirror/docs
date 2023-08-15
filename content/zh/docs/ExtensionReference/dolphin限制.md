# dolphin限制<a name="ZH-CN_TOPIC_0000001201437540"></a>

-   不支持删除dolphin插件。
-   dolphin插件只能在B兼容性数据库下创建。
-   dolphin插件需要在pg_catalog等schema下创建数据类型、函数等，所以加载dolphin插件需要初始用户权限。B兼容性数据库必须加载dolphin插件才可被连接。openGauss将在第一次通过初始用户或拥有初始用户权限的用户连接B数据库时自动加载dolphin插件。
-   dolphin中所有新增/修改的语法不支持在gsql客户端通过```\h```查看帮助说明，不支持在gsql客户端自动补齐。
-   dolphin插件的创建会删除数据库存在的插件所需的同名函数和类型以及之前存在的与之依赖的对象。
-   dolphin插件依赖于public schema，因此不支持使用drop schema的方式删除public schema。
-   连接安装有dolphin插件的B兼容性数据库时，会默认修改GUC参数[behavior_compat_options](../DataBaseReference/平台和客户端兼容性.md#zh-cn_topic_0283137574_zh-cn_topic_0237124754_section1980124735516)，增加```display_leading_zero```和```select_into_return_null```选项，以保持兼容性。