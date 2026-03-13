# 基于GO开发

Go 数据库驱动（通常通过标准库 database/sql 接口使用）是一种在 Go 语言中执行 SQL 语句、访问关系型数据库的通用机制。openGauss 提供兼容 PostgreSQL 协议的 Go 驱动实现，应用程序可以通过导入相应驱动并使用 database/sql 统一接口，完成对 openGauss 数据库的连接、查询和事务处理等操作。

- **[GO驱动常用操作](example_common_operations_go.md)**  

