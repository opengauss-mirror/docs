# GORM + MySQL Go 驱动开发指南设计说明

## 1. 背景

openGauss B 兼容模式通过 Dolphin 提供 MySQL 协议接入能力。开发者可使用 GORM 作为 Go ORM，并使用 MySQL Go 驱动连接数据库，但 GORM MySQL 迁移器的部分元数据查询与 Dolphin 行为存在差异，需要在开发指南中明确连接方式和迁移适配要求。

## 2. 文档目标与读者

本文面向熟悉 Go 基础、希望使用 GORM 访问 openGauss B 兼容模式的应用开发者。目标是提供可复现的连接配置、模型与 CRUD 流程，并说明 Dolphin 元数据差异、迁移验证方式和常见连接问题。

## 3. 页面结构设计

1. 适用版本及 Dolphin 前置配置。
2. DSN 与环境变量配置、安全注意事项。
3. GORM 初始化及示例适配入口。
4. 模型、CRUD、连接池及上下文使用。
5. 单元/集成测试命令和常见故障排查。

## 4. 技术方案依据

示例使用 `gorm.io/driver/mysql` 和 `github.com/go-sql-driver/mysql`，并在 GORM Dialector 外包装迁移器。当前实测适配点包括通过 `SELECT DATABASE()` 获取数据库名，以及查询 Dolphin 可用的 `information_schema.tables`、`information_schema.columns` 和 `information_schema.statistics`。文档要求应用通过示例适配后的连接入口初始化，以避免使用上游 MySQL 迁移器的非兼容元数据路径。

## 5. 验证与边界

页面内容同步维护于企业版和轻量版中文文档目录。示例模块的 Go 单元测试和静态检查通过，用户反馈真实环境重复迁移及基本 CRUD 成功。索引/列重命名、性能、并发、多版本兼容及不同 CPU 架构不在当前实测范围，应在目标版本环境单独验证。
