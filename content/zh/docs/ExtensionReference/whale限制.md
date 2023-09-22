# whale限制

-   不支持小型化版本。
-   不支持删除whale插件。
-   whale插件只能在A兼容性数据库下创建。
-   whale插件需要在pg_catalog等schema下创建数据类型、函数等，所以加载whale插件需要初始用户权限。whale插件考虑到前向兼容性，不会自动加载，需要使用初始用户执行create extension whale语句在A库进行创建后才能使用。如果一个A兼容性数据库从来没有被初始用户或拥有初始用户权限的用户连接并调用create extension whale创建whale插件，那么它也不会加载whale插件。
-   whale中所有新增/修改的语法不支持在gsql客户端通过```\h```查看帮助说明，不支持在gsql客户端自动补齐。
-   whale插件的创建会删除数据库存在的插件所需的同名函数和类型以及之前存在的与之依赖的对象。
