# openGauss 应用无损透明转移（ATF）特性简介

## 可获得性

本特性自openGauss 8.0.0 版本开始引入。

## 特性简介

应用无损透明转移（ATF）技术主要研究在集群部署数据库中，当单个数据库节点发生故障时（例如掉电、网络、存储故障等），能够将该节点上的业务透明转移到另外一个正常的节点中，客户的应用感知不到此次故障，只是感觉业务短暂变慢，无任何错误处理逻辑。

## 客户价值

1. **业务零中断感知**：节点故障时业务自动转移，应用无报错、无需改造容错逻辑，降低开发与运维成本。
2. **高可用保障**：故障转移过程透明，大幅缩短业务不可用时间，提升数据库集群整体可靠性。
3. **低侵入性**：无需修改应用代码，仅通过配置即可启用，适配存量业务快速升级。

## 特性描述

ATF为openGauss集群提供**节点故障下的事务级透明恢复能力**，依赖集群管理组件CM，通过JDBC驱动缓存SQL与快照、数据库侧阻塞新事务、故障后重放重建会话与事务，实现无感知切换。
- 支持**计划外故障转移**，自动识别节点失效并切换至可用节点。
- 支持SSL加密连接，保障ATF组件与应用、数据库间通信安全。
- 提供可配置的重连策略、缓存参数，适配不同业务性能需求。

## 特性增强

无

## 特性约束

应用程序在使用ATF特性时，需要密切关注ATF的特性约束。ATF在自动重连恢复会话时，当前仅支持恢复GUC参数，其它会话级状态暂不支持恢复。同时，重放事务可能导致某些不可撤销的操作重复执行（如写文件）。

### GUC 参数支持策略

- 对应用程序来说，仅需考虑USERSET、SUSET类型。原则上，如果参数值的设置支持覆盖上一次设置，ATF就可以支持继承。

### SQL语法支持策略

由于SQL涉及的参数、表、函数很多，无法一一列出，这里给出ATF功能支持SQL的总体原则，以下几种情况ATF均不支持：
- 不满足两阶段锁的事务；
- 不写日志/无法同步到备机的操作（例如涉及临时表、unlogged表的操作）；
- 涉及跨事务的操作（例如跨事务游标、在线DDL、REINDEX等）；
- 涉及随机/依赖当前时间的操作；
- 涉及文件IO的操作，尤其是写文件的操作（例如COPY、LOAD DATA等）。

## 依赖关系

- 依赖openGauss**带CM的数据库集群**，未部署CM则无法使用ATF。
- 依赖支持ATF能力的**JDBC驱动**，需在连接串配置开启参数。

## 基本原理

正常情况下，客户端通过JDBC驱动执行SQL语句，驱动会向主节点发送请求，数据库执行完成之后向驱动返回该SQL的快照，驱动缓存已经执行过的SQL语句及其快照等信息。数据库发生故障时需要进行事务恢复，该过程有3个阶段:
1. 主备切换阶段：当主节点发生故障时，驱动进入等待状态直到备节点升主完成；
2. 恢复阶段：驱动向数据库发送本地缓存的携带快照的SQL，数据库使用驱动发送的快照执行对应的SQL语句，恢复阶段数据库只负责复活故障发生前正在执行的事务，并同时阻塞其他请求；
3. 正常阶段：等待驱动缓存的SQL全部执行完成之后退出恢复阶段，继续执行其他SQL。

## 使用指导

### 1. 部署ATF集群

1. 前提：已部署**带CM的openGauss集群**。
2. 每台服务器解压ATF安装包，以root执行安装：

```bash
sudo sh install.sh -u username -g groupname
```

3. 切换指定用户启动/停止ATF服务：

```bash
# 启动
./atf_start.sh
# 停止
./atf_stop.sh
```

4. 配置文件：`/conf/atf_config.conf`，修改后需重启ATF生效，核心配置包括监听端口、线程数、SSL证书、集群状态缓存等。

### 2. 数据库实例开启ATF

在`postgresql.conf`设置GUC参数：
`atf_task_counter_timeout_sec = 5`
参数为0表示未开启。具体可参考[openGauss事务](../database_reference/opengauss_transaction.md)

### 3. JDBC连接开启ATF

连接串添加ATF相关参数，示例：

```text
jdbc:gaussdb://node1,node2,node3/database?enableATF=true&atfLevel=U&atfAddress=node1:12345,node2:12345&atfSslcert=/path1/server.pem,/path2/server.pem&atfReconnects=3&atfTimeout=1000
```

核心参数说明：
- `enableATF=true`：开启事务恢复。
- `atfLevel=U`：启用计划外ATF。
- `atfAddress`：ATF组件地址与端口。
- `atfSslcert`：ATF SSL证书路径。

具体参数说明参考[使用JDBC连接数据库](../developer_guide/connecting_to_a_database_jdbc.md)。

### 使用示例

首先创建一个表，往表里插入11条数据：

```SQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    email VARCHAR(100),
    detail TEXT
);
```

Java测试代码：

```java
package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StreamTest {
    public static void main(String[] args) {
        // 数据库连接信息
        String url = "jdbc:postgresql://localhost:33000/postgrestest??enableATF=true&atfLevel=U&atfAddress=node1:12345,node2:12345&atfSslcert=/path1/server.pem,/path2/server.pem&atfReconnects=3&atfTimeout=1000";
        String username = "postgrestest";
        String password = "postgresTest@123";

        // SQL查询语句
        String sql = "select * from users where age=30 order by name desc;";

        try {
            Connection conn = DriverManager.getConnection(url, username, password);
            conn.setAutoCommit(false);
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setFetchSize(5);
            pstmt.execute();
            ResultSet rs = pstmt.getResultSet();
            int cnt = 0;
            while (rs.next()) {
                cnt++;
                int id = rs.getInt("id");
                String name = rs.getString("name");
                double salary = rs.getDouble("age");
                System.out.printf("No.%d, ID: %d, 姓名: %s, 薪水: %.2f%n", cnt, id, name, salary);
            }

            conn.commit();
            conn.close();

        } catch (SQLException e) {
            System.err.println("数据库操作失败: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

在不发生故障的情况下直接执行测试脚本，读取到11条数据：

```text
Mar 05, 2026 3:27:29 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [e522ca01-c9f4-4621-8a33-29ff1e84577e] Try to connect. IP: localhost:33000
Mar 05, 2026 3:27:29 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [*.*.0.1:47848/*.*.0.1:33000] Connection is established. ID: e522ca01-c9f4-4621-8a33-29ff1e84577e
Mar 05, 2026 3:27:29 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: Connect complete. ID: e522ca01-c9f4-4621-8a33-29ff1e84577e
No.1, ID: 24425035, 姓名: thread_9, 年龄: 30
No.2, ID: 23802346, 姓名: thread_8, 年龄: 30
No.3, ID: 23815638, 姓名: thread_7, 年龄: 30
No.4, ID: 23817179, 姓名: thread_6, 年龄: 30
No.5, ID: 23798772, 姓名: thread_5, 年龄: 30
No.6, ID: 23797555, 姓名: thread_4, 年龄: 30
No.7, ID: 23799220, 姓名: thread_3, 年龄: 30
No.8, ID: 23799699, 姓名: thread_2, 年龄: 30
No.9, ID: 24431268, 姓名: thread_2, 年龄: 30
No.10, ID: 23807993, 姓名: thread_1, 年龄: 30
No.11, ID: 24427845, 姓名: thread_0, 年龄: 30
```

使用Java脚本连接数据库查询表数据，使用单步调试，在读取第4条数据的时候让数据库发生故障：
通过日志可以发现，在读取第2个fetchSize的时候发现了故障，在进行重连之后自动重放缓存的SQL，重放完成之后继续输出后面的数据。

```text
Mar 05, 2026 3:24:06 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [0dcd49f6-f7ab-4c76-8e43-9920bd460f6c] Try to connect. IP: localhost:33000
Mar 05, 2026 3:24:06 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [*.*.0.1:47108/*.*.0.1:33000] Connection is established. ID: 0dcd49f6-f7ab-4c76-8e43-9920bd460f6c
Mar 05, 2026 3:24:06 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: Connect complete. ID: 0dcd49f6-f7ab-4c76-8e43-9920bd460f6c
No.1, ID: 24425035, 姓名: thread_9, 年龄: 30
No.2, ID: 23802346, 姓名: thread_8, 年龄: 30
No.3, ID: 23815638, 姓名: thread_7, 年龄: 30
No.4, ID: 23817179, 姓名: thread_6, 年龄: 30
No.5, ID: 23798772, 姓名: thread_5, 年龄: 30
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.QueryExecutorImpl processResults
SEVERE: IO Exception.received packetType:69last PacketType:-1connection info:*.*.0.1:47108/*.*.0.1:33000buffer :
buffer is empty
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [ea75a99a-c8b0-46d9-a763-f64dcd83dfa8] Try to connect. IP: localhost:33000
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [*.*.0.1:47144/*.*.0.1:33000] Connection is established. ID: ea75a99a-c8b0-46d9-a763-f64dcd83dfa8
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: Connect complete. ID: ea75a99a-c8b0-46d9-a763-f64dcd83dfa8
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgConnection reconnect
INFO: reconnect to server successfully.
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeATFCache
INFO: recovery:ATFCachedQuery{query=set dolphin.b_compatibility_mode to on, queryResult=QueryExecutionResult{xid=0, xmin=112309735, xmax=112309735, csn=111159655, fetchSize=0, fetchNum=1, takenDuringRecovery=false, timeline=0, resultHash=8c52684db8f49511e9b44471716bf164, rowCount=0}, parameterList=null, flags=0}
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeOneATFQuery
INFO: Result check success after recovery
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeATFCache
INFO: recovery:ATFCachedQuery{query=set connection_info = '{"driver_name":"JDBC","driver_version":"@GSVERSION@"}', queryResult=QueryExecutionResult{xid=0, xmin=112309735, xmax=112309735, csn=111159655, fetchSize=0, fetchNum=1, takenDuringRecovery=false, timeline=0, resultHash=8c52684db8f49511e9b44471716bf164, rowCount=0}, parameterList=null, flags=4}
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeOneATFQuery
INFO: Result check success after recovery
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeATFCache
INFO: recovery:ATFCachedQuery{query=select * from users where age=30 order by name desc, queryResult=QueryExecutionResult{xid=0, xmin=112309735, xmax=112309735, csn=111159655, fetchSize=5, fetchNum=1, takenDuringRecovery=false, timeline=0, resultHash=cc51fb6118ded8c7600712cc44047a12, rowCount=5}, parameterList=<[]>, flags=0}
Mar 05, 2026 3:24:31 PM org.postgresql.jdbc.PgStatement executeOneATFQuery
INFO: Result check success after recovery
No.6, ID: 23797555, 姓名: thread_4, 年龄: 30
No.7, ID: 23799220, 姓名: thread_3, 年龄: 30
No.8, ID: 23799699, 姓名: thread_2, 年龄: 30
No.9, ID: 24431268, 姓名: thread_2, 年龄: 30
No.10, ID: 23807993, 姓名: thread_1, 年龄: 30
No.11, ID: 24427845, 姓名: thread_0, 年龄: 30
```

## 使用场景

1. **核心业务高可用场景**：金融、政务、电商等要求7×24小时在线的业务，避免节点故障导致业务中断。
2. **无改造存量应用**：已上线业务无法修改代码，需透明提升集群故障容忍能力。
3. **集群主备切换运维**：节点升级、维护触发主备切换时，保障业务无感知、不报错。
4. **对中断敏感的事务型业务**：订单、支付、账务等需严格保证事务完整性的在线交易场景。