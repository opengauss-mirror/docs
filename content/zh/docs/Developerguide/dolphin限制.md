# dolphin限制<a name="ZH-CN_TOPIC_0000001201437540"></a>

-   不支持小型化版本。
-   不支持删除dolphin插件。
-   dolphin插件只能在B兼容性数据库下创建。
-   dolphin插件需要在pg_catalog等schema下创建数据类型、函数等，所以加载dolphin插件需要超级用户权限。openGauss将在第一次通过超级用户连接B兼容性数据库时自动加载dolphin插件。如果一个B兼容性数据库从来没有被超级用户连接过，那么他也不会加载dolphin插件。
-   dolphin中所有新增/修改的语法不支持在gsql客户端通过```\h```查看帮助说明，不支持在gsql客户端自动补齐。