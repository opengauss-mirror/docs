# 使用 GORM + MySQL Go 驱动开发 openGauss B 兼容模式应用

## 1. 适用范围

适用于 openGauss 7.0.0-LTS、dolphin 插件已启用且 MySQL 协议端口已配置的环境。客户端使用 Go 1.20+、GORM v1.25+、gorm.io/driver/mysql v1.5+。

## 2. 连接配置

### openGauss 前置配置

在 openGauss 侧安装并创建 dolphin 扩展，在 B 兼容库中配置 MySQL 协议监听。典型配置如下，端口请按环境调整：

    CREATE DATABASE proto_test_db WITH DBCOMPATIBILITY 'B' ENCODING 'UTF8';
    ALTER SYSTEM SET enable_dolphin_proto TO on;
    ALTER SYSTEM SET dolphin_server_port TO 3308;

创建 MySQL 协议用户并设置认证信息时，请按照对应 dolphin 版本文档在本地安全终端操作；本文不展示认证命令。重启实例后用 MySQL 客户端确认端口和账号可用，再运行 GORM 示例。部分 dolphin 版本不提供 dolphin.default_database_name 参数，客户端应在连接配置中显式指定数据库名。生产环境应使用最小权限账号，不要将认证凭据写入源码或日志。

远程客户端还必须被实例的 pg_hba.conf 允许。应以数据库日志中记录的客户端源 IP 为准，为指定数据库和用户添加最小范围的 host 规则，并 reload 配置；仅确认端口可达并不代表通过了 pg_hba 认证。

DSN 使用 go-sql-driver/mysql 的 TCP 连接串格式，包含主机、端口、数据库和认证信息；示例文档不展示带认证信息的连接串。dolphin_server_port 常见配置为 3308，但应以实例实际配置为准。建议通过 OPENGAUSS_DSN 环境变量传入，或分别设置主机、端口、用户名、认证凭据和数据库环境变量。

    import (
        "log"
        "example.com/gorm-opengauss/internal/config"
        "example.com/gorm-opengauss/internal/db"
        "gorm.io/gorm/logger"
    )

    cfg, err := config.FromEnv()
    if err != nil {
        log.Fatal(err)
    }
    gdb, err := db.Open(cfg, logger.Info)
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close(gdb)

示例通过 `internal/db.Open` 创建适配后的连接：它保留 MySQL 协议驱动，同时为 AutoMigrate 覆盖 openGauss Dolphin 的数据库名、列信息和索引元数据查询。不要在该环境中把初始化代码替换成裸 `mysql.New(...)`，否则可能遇到 MySQL 专有元数据视图错误或重复迁移 DDL。`SkipInitializeWithVersion` 用于避免 MySQL 驱动解析 openGauss 版本字符串。迁移前仍应在测试环境验证索引/列重命名、时间精度等 DDL。

Go MySQL 驱动建议指定 collation=utf8mb4_general_ci，避免客户端默认的 MySQL 8 utf8mb4_0900_ai_ci 在 dolphin 中不可用；客户端与服务端的认证方式应按对应 dolphin 版本文档配置。

注意：当前 dolphin MySQL 协议文档列出的 MySQL 命令行客户端支持范围为 8.0.28 及以下。使用更新的客户端（例如 8.0.46）时应先换用 8.0.28 或以下版本排除客户端兼容性；该版本限制针对官方列出的 MySQL CLI，不代表 Go 驱动已完成真实联调。

### 创建项目

    mkdir gorm-opengauss && cd gorm-opengauss
    go mod init example.com/gorm-opengauss
    go get gorm.io/gorm gorm.io/driver/mysql github.com/go-sql-driver/mysql

建议将 `examples/GormMysqlOpenGauss` 作为完整模板运行（先在示例目录配置环境变量，再使用下方命令）。若要复制到已有项目，应复制适配后的 `internal/config` 与 `internal/db` 实现、按新 Go module 路径调整内部 import，并从项目内部调用适配后的 `db.Open`；Go 的 `internal` 包不能被模块目录之外的项目直接导入。应用启动时先执行 PingContext，再执行 AutoMigrate；连接池通过 `db.DB()` 设置。

## 3. 模型与 CRUD

普通 GORM struct、AutoMigrate、事务、预编译参数和 WithContext 均可使用。生产代码应显式指定表名、限制分页上限，并处理 ErrRecordNotFound。不要拼接用户输入生成 SQL。

示例模型使用自增主键、唯一索引和时间字段；使用 db.WithContext(ctx).Create、First、Updates 和 Delete 完成参数化 CRUD，事务使用 db.Transaction。分页必须设置上限，避免一次查询大量数据。

## 4. 连接池与排查

通过 db.DB() 设置连接池；启动时调用 PingContext，退出时关闭连接。若出现 unsupported version，确认设置了 SkipInitializeWithVersion；时间字段错误时确认 parseTime=true。

## 5. 测试与故障排查

先运行 go test ./... 验证 DSN 解析和 SQL 构建，再设置 OPENGAUSS_DSN 运行 go test -tags=integration ./internal/db。连接失败时依次检查 dolphin_server_port、防火墙、用户密码和 B 库权限；版本探测错误时确认 SkipInitializeWithVersion=true；排序规则错误时确认 collation=utf8mb4_general_ci。
