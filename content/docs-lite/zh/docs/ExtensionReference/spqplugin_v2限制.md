# spqplugin_v2限制

- 仅支持在A模式数据库创建。
- 安装插件需要先配置shared_preload_libraries，再执行create extension。
- 不支持删除插件。
- 不支持分布式表相关的复杂查询，包括：JOIN，子查询，CTE，window function等。
- 不支持分区表。
- 不支持Mysql兼容性插件，线程池，PBE优化。