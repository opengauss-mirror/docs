# shark限制

-   shark插件只能在D兼容性数据库下创建。
-   通常情况下不支持删除shark插件，但当参数support_extended_features打开，且没有依赖时，允许删除插件。
-   已经创建了shark插件，重启时需要将shark配置到guc参数shared_preload_libraries中，否则无法连接D兼容性数据库。
-   shark中所有新增/修改的语法不支持在gsql客户端通过```\h```查看帮助说明，不支持在gsql客户端自动补齐。
