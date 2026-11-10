---
description: 本文介绍 openGauss Oracle 到 oGRAC 校验工具介绍 的相关内容，涵盖 目的、校验前准备 等内容。
keywords: [openGauss, Oracle 到 oGRAC 校验工具介绍, 数据校验, 目的, 校验前准备]
---

# Oracle 到 oGRAC 校验工具介绍

## 目的

本文旨在对openGauss数据校验工具（gs_datachecker）实现Oracle到oGRAC数据校验流程进行介绍，指导用户如何完成工具安装、并使用工具完成数据校验。

全量数据校验采用JDBC方式抽取源端和目标端数据，并将抽取结果暂存到Kafka中，校验服务通过抽取服务从Kafka中获取指定表的抽取结果，构建默克尔树进行比对，实现表数据校验，最后将校验结果输出到指定路径的文件中。

工具运行涉及三个服务进程：

| 服务进程 | 主程序 | 默认端口 | 职责 |
| :------------------------ | :--------------------------------- | :------- | :---------------------------------- |
| 校验服务 | datachecker-check-7.0.0.jar | 9000 | 调度校验任务、比对两端数据并输出校验结果 |
| 源端抽取服务 | datachecker-extract-7.0.0.jar --source | 9001 | 抽取Oracle源端数据并推送到Kafka |
| 目标端抽取服务 | datachecker-extract-7.0.0.jar --sink | 9002 | 抽取oGRAC目标端数据并推送到Kafka |

其中源端与目标端抽取服务共用同一个jar包，通过启动参数 `--source` 与 `--sink` 区分角色。

## 校验前准备

### 校验注意事项

- 要求Oracle版本为19c
- 源端与目标端的时区需保持一致，否则时间类型数据会产生校验差异
- 无主键的表不参与校验：工具在获取表清单阶段会自动过滤掉没有主键的表，这些表不会出现在校验结果中
- 需保证源端与目标端表结构一致（表名、列名、列数、列顺序及类型一致），否则会导致校验结果不可靠
- 工具不会主动发现两端表清单差异：全量校验以源端表清单为基准，目标端多出的表不参与校验；目标端缺少的表表现为该表校验异常。缺表、多表均不会以校验差异形式报告，需在部署前自行核对两端表清单一致
- 本链路数据加载模式（dataLoadMode）仅支持jdbc，不支持csv模式
- 本链路当前仅支持全量数据校验：增量校验采用debezium监听源端数据变更的方式实现，当前仅支持MySQL源端，不适用于Oracle源端
- 当前版本仅支持数据校验，不支持表对象校验
- 校验工具不支持校验中断（网络故障、kill进程等）自动恢复，中断后需重新发起校验

### 源端Oracle接入要求

| 配置项 | 要求 |
| ------ | ---- |
| 驱动类 | oracle.jdbc.OracleDriver（Oracle驱动不随发行包发布，需自行将ojdbc驱动放入部署目录的lib中） |
| url模板 | jdbc:oracle:thin:@&lt;host&gt;:&lt;port&gt;/&lt;服务名&gt; |
| schema | spring.extract.schema配置值与Oracle中实际持有待校验表的用户一致 |

### 目标端oGRAC接入要求

| 配置项 | 要求 |
| ------ | ---- |
| 驱动类 | org.opengauss.Driver（发行包已内置opengauss-jdbc驱动，版本7.0.0-og，无需额外安装） |
| url模板 | jdbc:oGRAC://&lt;host&gt;:&lt;port&gt;/&lt;数据库名&gt; |
| 账号权限 | 需具备读取系统视图ADM_TABLES、ADM_TAB_COLUMNS、ADM_INDEXES的权限，并对目标schema下所有表拥有SELECT权限 |
| schema | spring.extract.schema配置值必须与oGRAC中实际持有待校验表的owner（用户）一致；且仅允许包含字母、数字、下划线、$、#，长度1~64，否则服务启动校验不通过 |

## 安装方法

### 安装环境要求

由于工具使用Java编写，因此需要提前安装Java运行环境，版本要求JDK 11+。同时工具依赖Kafka作为校验中间数据的暂存通道，需提前部署Kafka环境（含Zookeeper），confluent最低版本要求5.5.1，推荐使用confluent-7.2.0。

| 依赖 | 版本要求 | 说明 |
| ---- | -------- | ---- |
| JDK | 11+ | 工具运行环境 |
| Kafka（含Zookeeper） | confluent 5.5.1+ | 暂存抽取结果，三份配置文件中的Kafka地址需一致 |
| Oracle | 19c | 源端数据库 |
| oGRAC | - | 目标端数据库 |

### 安装包下载

安装包下载地址：https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-DataCheck-7.0.0.tar.gz
其中7.0.0表示当前版本号。

```bash
wget https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-DataCheck-7.0.0.tar.gz
```

### 安装包解压

下载完成后，解压压缩包。

```
tar -zxvf openGauss-DataCheck-7.0.0.tar.gz
```

解压后参考目录如下：

```text
openGauss-DataCheck-7.0.0/
├── datachecker-extract-7.0.0.jar    # 抽取服务主程序（源端与目标端共用）
├── datachecker-check-7.0.0.jar      # 校验服务主程序
├── lib/                             # 依赖库目录（Oracle驱动需放置于此）
├── config/                          # 配置文件目录（含oracle2ograc专用模板）
├── run.sh                           # 统一启停脚本
├── extract-endpoints.sh             # 抽取服务启停脚本
└── check-endpoint.sh                # 校验服务启停脚本
```

### Oracle驱动准备

Oracle JDBC驱动不随发行包发布，启动校验前需自行获取与Oracle 19c匹配的ojdbc驱动（如ojdbc8.jar），并放入部署目录的lib文件夹中，否则源端抽取服务启动失败。

目标端oGRAC的JDBC驱动（opengauss-jdbc，版本7.0.0-og）已随发行包内置，无需额外安装。

## 配置文件说明

Oracle到oGRAC校验链路的专用配置模板位于安装包config/oracle2ograc目录，包含三份配置文件，可直接复制后按实际环境修改：

- application.yml：校验服务配置
- application-source.yml：源端Oracle抽取服务配置
- application-sink.yml：目标端oGRAC抽取服务配置

配置文件使用yaml文件规则配置，需要特别注意对齐，缩进表示层级关系，缩进时不允许使用Tab键，只允许使用空格，缩进的空格数目不重要，但相同层级的元素左侧需要对齐。数据库密码含特殊字符时需用引号包裹。

### 校验服务配置

```yaml
server:
  port: 9000
logging:
  config: config/log4j2.xml
spring:
  kafka:
    bootstrap-servers: <host>:<port>          # Kafka地址
  check:
    core-pool-size: 8                         # 校验并发核心线程数
    maximum-pool-size: 8                      # 校验最大线程数
    maximum-topic-size: 8                     # 校验topic数量
    sample:
      ratio: 1                                # 抽样校验比例（0~1，1表示全量校验）
      threshold: 0                            # 抽样触发阈值，切片数不超过该值的表直接全量校验，0表示不设阈值
data:
  check:
    data-path: ./check_result                 # 校验结果输出目录
    source-uri: http://127.0.0.1:9001         # 源端抽取服务地址，对应源端server.port
    sink-uri: http://127.0.0.1:9002           # 目标端抽取服务地址，对应目标端server.port
    auto-delete-topic: 1                      # topic自动删除策略：0不删除；1全部校验完成后删除；2单表校验完成后删除
    increment-max-diff-count: 1000            # 增量校验最大处理差异记录数
    create-repair-sql: false                  # 修复语句输出开关
    max-retry-times: 200                      # 校验启动环境检查失败重试次数
    diff-debug-log-enabled: false             # 开启后可查看失败数据差异详情
rules:
  enable: false                               # 过滤规则开关
```

### 源端配置

```yaml
server:
  port: 9001
logging:
  config: config/log4j2.xml
spring:
  check:
    server-uri: http://127.0.0.1:9000         # 校验服务地址
    core-pool-size: 4                         # 并发核心线程数
    maximum-pool-size: 4                      # 最大线程数
    maximum-topic-size: 4                     # topic数量，决定表级并发抽取数量
    maximum-table-slice-size: 5000            # 单个分片最大行数，超出该行数的表会被拆分为多个分片，两端必须一致
    extend-maximum-pool-size: 4               # 大表分片抽取扩展线程池大小
  extract:
    schema: <schema>                          # Oracle中持有待校验表的用户
    databaseType: O                           # 源端为Oracle时配置为O
    query-dop: 8                              # 分片抽取开关，等于1时关闭分片，取值越大占用越多数据库连接
    dataLoadMode: jdbc                        # 数据加载模式，本链路仅支持jdbc
    memory-safe-watermark: 0.30               # 内存安全水位（占-Xmx比例），用于防止内存溢出
    memory-min-concurrency: 1                 # 最小并发分片数
    debezium-enable: false                    # 增量校验开关，本链路不支持增量校验，保持false
  jdbc:
    result-set:
      fetch-size: 1000                        # 结果集抓取行数上限，运行时按剩余堆内存自动调低
  kafka:
    bootstrap-servers: <host>:<port>          # Kafka地址
  datasource:
    driver-class-name: oracle.jdbc.OracleDriver
    url: jdbc:oracle:thin:@<host>:<port>/<服务名>
    username: <schema>
    password: '<password>'                    # 密码含特殊字符时需用引号包裹
    druid:
      max-active: 8                           # 连接池最大连接数
      test-while-idle: true
      test-on-borrow: true
      validation-query: "SELECT 1 FROM DUAL"  # Oracle保活查询
      validation-query-timeout: 10000
      connection-error-retry-attempts: 0
      break-after-acquire-failure: true
      max-wait: 600000
      keep-alive: true
      min-evictable-idle-time-millis: 600000
data:
  check:
    oracle2ograc:
      precision-mode: COMPATIBLE              # 精度模式，必须与目标端一致
```

### 目标端配置

```yaml
server:
  port: 9002
logging:
  config: config/log4j2.xml
spring:
  check:
    server-uri: http://127.0.0.1:9000         # 校验服务地址
    core-pool-size: 4
    maximum-pool-size: 4
    maximum-topic-size: 4                     # 与源端保持一致
    maximum-table-slice-size: 5000            # 与源端保持一致
    extend-maximum-pool-size: 4
  extract:
    schema: <schema>                          # oGRAC中持有待校验表的用户（owner），仅允许字母、数字、下划线、$、#，长度1~64
    databaseType: OGRAC                       # 目标端为oGRAC时配置为OGRAC
    query-dop: 8                              # 与源端保持一致
    memory-safe-watermark: 0.30
    memory-min-concurrency: 1
  jdbc:
    result-set:
      fetch-size: 1000
  kafka:
    bootstrap-servers: <host>:<port>
  datasource:
    driver-class-name: org.opengauss.Driver
    url: jdbc:oGRAC://<host>:<port>/<数据库名>
    username: <schema>
    password: '<password>'
    druid:
      max-active: 8
      test-while-idle: true
      test-on-borrow: true
      validation-query: "select 1"            # oGRAC保活查询
      validation-query-timeout: 10000
      connection-error-retry-attempts: 0
      break-after-acquire-failure: true
      max-wait: 600000
      keep-alive: true
      min-evictable-idle-time-millis: 600000
data:
  check:
    oracle2ograc:
      precision-mode: COMPATIBLE              # 与源端保持一致
```

### 精度模式说明

Oracle与oGRAC对时间、浮点等类型的表示方式存在差异，针对该链路工具提供精度模式配置项（源端与目标端的application-xxx.yml中配置，未配置时默认使用COMPATIBLE）：

| 模式 | 说明 | 适用场景 |
| ---- | ---- | -------- |
| COMPATIBLE | 按数据库内核的兼容表示方式比对，默认值 | 常规校验场景，推荐 |
| STRICT | 对间隔、浮点等类型按字面值精确比对 | 对精度要求极高的场景 |

注意：**两端必须配置为相同值**，否则同一行数据在两端会读出不同的表示，产生校验差异。

两种精度模式下各类型族的读取比对方式如下：

| 类型族 | STRICT | COMPATIBLE（默认） |
| ------ | ------ | ------------------ |
| CHAR/VARCHAR2/NCHAR/NVARCHAR2/LONG | 与模式无关，两端按相同方式归一化后比对 | 同左 |
| NUMBER/INTEGER/INT/SMALLINT | 全精度字符串比对 | 统一保留12位小数 |
| FLOAT/BINARY_FLOAT/BINARY_DOUBLE/REAL | 64位浮点数比对 | 32位浮点数比对（对齐oGRAC REAL类型） |
| DATE | 全精度（无亚秒，两端一致） | 同左 |
| TIMESTAMP | 保留亚秒位 | 截断到秒 |
| TIMESTAMP WITH TIME ZONE | 时区归一化后保留亚秒位 | 时区归一化后去除亚秒尾部补零 |
| TIMESTAMP WITH LOCAL TIME ZONE | 时区归一化后保留亚秒位 | 时区归一化后截断到秒 |
| INTERVAL YEAR TO MONTH | 低位补零对齐（两模式相同） | 同左 |
| INTERVAL DAY TO SECOND | 原样保留精度 | 舍入到6位小数 |
| CLOB/NCLOB/XMLTYPE、BLOB/LONG RAW/RAW | 与模式无关（字符流或十六进制读取） | 同左 |

### 配置参数详细信息

#### 校验服务配置参数

| 参数名 | 类型 | 必填 | 默认值 | 描述 |
| :----- | :--- | :--- | :----- | :--- |
| `server.port` | Integer | 否 | 9000 | 校验服务web端口 |
| `spring.kafka.bootstrap-servers` | String | 是 | - | Kafka地址，需与抽取服务配置一致 |
| `spring.check.core-pool-size` | Integer | 否 | - | 校验并发核心线程数 |
| `spring.check.maximum-pool-size` | Integer | 否 | - | 校验最大线程数 |
| `spring.check.maximum-topic-size` | Integer | 否 | - | 校验topic数量 |
| `spring.check.sample.ratio` | Double | 否 | 1.0 | 抽样校验比例（0~1，1表示全量校验），仅对分片数大于1的表生效 |
| `spring.check.sample.threshold` | Integer | 否 | 0 | 抽样触发阈值，切片数不超过该值的表全量校验，0表示不设下限 |
| `data.check.data-path` | String | 否 | ./check_result | 校验结果输出目录 |
| `data.check.source-uri` | String | 是 | - | 源端抽取服务地址 |
| `data.check.sink-uri` | String | 是 | - | 目标端抽取服务地址 |
| `data.check.auto-delete-topic` | Integer | 否 | - | topic自动删除策略：0不删除；1全部校验完成后删除；2单表校验完成后删除 |
| `data.check.increment-max-diff-count` | Integer | 否 | 1000 | 增量校验最大处理差异记录数，范围[10,5000] |
| `data.check.create-repair-sql` | Boolean | 否 | false | 修复语句输出开关 |
| `data.check.max-retry-times` | Integer | 否 | - | 校验启动环境检查失败重试次数 |
| `data.check.diff-debug-log-enabled` | Boolean | 否 | false | 失败数据差异详情日志开关 |
| `rules.enable` | Boolean | 否 | false | 过滤规则开关 |

#### 抽取服务配置参数

| 参数名 | 类型 | 必填 | 默认值 | 描述 |
| :----- | :--- | :--- | :----- | :--- |
| `server.port` | Integer | 否 | 9001/9002 | 抽取服务web端口，源端默认9001，目标端默认9002 |
| `spring.check.server-uri` | String | 是 | - | 校验服务地址 |
| `spring.check.core-pool-size` | Integer | 否 | - | 并发核心线程数 |
| `spring.check.maximum-pool-size` | Integer | 否 | - | 最大线程数 |
| `spring.check.maximum-topic-size` | Integer | 是 | - | topic数量，决定表级并发抽取数量 |
| `spring.check.maximum-table-slice-size` | Integer | 是 | - | 单个分片最大行数，两端必须一致，否则分片无法对齐 |
| `spring.check.extend-maximum-pool-size` | Integer | 否 | - | 大表分片抽取扩展线程池大小 |
| `spring.extract.schema` | String | 是 | - | 校验schema，源端为Oracle中持有待校验表的用户，目标端为oGRAC中待校验表的owner |
| `spring.extract.databaseType` | String | 是 | - | 数据库类型，源端配置为O（Oracle），目标端配置为OGRAC |
| `spring.extract.query-dop` | Integer | 否 | 8 | 分片总开关，等于1时关闭分片，大于1时开启分片抽取 |
| `spring.extract.dataLoadMode` | String | 是 | - | 数据加载模式，本链路仅支持jdbc |
| `spring.extract.memory-safe-watermark` | Double | 否 | 0.30 | 内存安全水位（占-Xmx比例） |
| `spring.extract.memory-min-concurrency` | Integer | 否 | 1 | 最小并发分片数 |
| `spring.jdbc.result-set.fetch-size` | Integer | 否 | 1000 | 结果集抓取行数上限，运行时按剩余堆内存自动调低 |
| `data.check.oracle2ograc.precision-mode` | String | 否 | COMPATIBLE | 精度模式，COMPATIBLE或STRICT，两端必须一致 |

#### 数据库连接配置参数

| 参数名 | 类型 | 必填 | 默认值 | 描述 |
| :----- | :--- | :--- | :----- | :--- |
| `spring.datasource.driver-class-name` | String | 是 | - | 源端为oracle.jdbc.OracleDriver，目标端为org.opengauss.Driver |
| `spring.datasource.url` | String | 是 | - | 源端为jdbc:oracle:thin:@&lt;host&gt;:&lt;port&gt;/&lt;服务名&gt;，目标端为jdbc:oGRAC://&lt;host&gt;:&lt;port&gt;/&lt;数据库名&gt; |
| `spring.datasource.username` | String | 是 | - | 数据库用户名 |
| `spring.datasource.password` | String | 是 | - | 数据库密码，含特殊字符时需用引号包裹 |
| `spring.datasource.druid.max-active` | Integer | 否 | 8 | 连接池最大连接数，initial-size与min-idle自动等于该值 |
| `spring.datasource.druid.validation-query` | String | 是 | - | 连接保活查询，源端为SELECT 1 FROM DUAL，目标端为select 1 |
| `spring.datasource.druid.validation-query-timeout` | Integer | 否 | 10000 | 保活查询超时时间 |
| `spring.datasource.druid.max-wait` | Integer | 否 | 600000 | 获取连接最大等待时间（毫秒） |
| `spring.datasource.druid.keep-alive` | Boolean | 否 | true | 连接保活开关 |

### 过滤规则配置

校验服务支持表级、行级、列级三类过滤规则，配置于校验服务的application.yml中，通过 `rules.enable` 开关控制，默认关闭。

- **表级规则**：通过黑白名单正则过滤待校验表，黑白名单互斥，同时配置时仅白名单生效。
- **行级规则**：按 `[offset,count]` 格式过滤指定表指定范围的数据，等效于 `select * from table order by 主键 asc limit offset,count`。
- **列级规则**：通过include（仅校验指定列）或exclude（排除指定列）过滤待校验列，两者互斥；主键列始终参与校验，include模式自动补充主键列，exclude模式自动剔除主键列。

表级规则优先级最高，完成表过滤后，行级、列级规则再进行匹配。

```yaml
rules:
  enable: true
  table:
    - name: white                 # white白名单，black黑名单
      text: ^[a-z0-9_]+$          # 表名正则表达式
  row:
    - name: ^[a-zA-Z][a-zA-Z_]+$  # 匹配表名的正则表达式
      text: 10,100                # 行级范围[offset,count]
  column:
    - name: t_test_1              # 表名称
      text: id,c_1,c_2,c_3        # 字段名称列表
      attribute: include          # include包含，exclude排除
```

## 启动校验

### 启动Zookeeper与Kafka

校验依赖Kafka环境，需先启动Zookeeper与Kafka服务：

```bash
cd {path}/confluent-7.2.0

# 启动Zookeeper
bin/zookeeper-server-start -daemon etc/kafka/zookeeper.properties

# 启动Kafka
bin/kafka-server-start -daemon etc/kafka/server.properties
```

### 启动校验服务

完成配置文件配置后，即可开始校验。使用统一启停脚本run.sh一次拉起全部服务进程：

```bash
sh run.sh start    # 启动源端抽取、目标端抽取与校验服务
sh run.sh status   # 查看所有服务运行状态
sh run.sh stop     # 停止所有正在运行的服务进程
sh run.sh restart  # 重启全部服务
```

也可以分别使用抽取服务与校验服务的启停脚本：

```bash
sh extract-endpoints.sh start   # 启动源端与目标端抽取服务
sh check-endpoint.sh start      # 启动校验服务
```

或者使用java后台命令手动启动，需先启动两个抽取服务，再启动校验服务：

```bash
nohup java -jar datachecker-extract-7.0.0.jar --source >/dev/null 2>&1 &
nohup java -jar datachecker-extract-7.0.0.jar --sink >/dev/null 2>&1 &
nohup java -jar datachecker-check-7.0.0.jar >/dev/null 2>&1 &
```

注意：

- 校验服务完全启动成功后会自动发起校验，无需手动触发。
- 全量校验完成后，工具会自动退出当前进程。
- 抽取服务启动后会自动加载数据库表相关信息，数据量较大时加载会比较耗时；校验服务启动后会检测抽取端表信息是否加载完成，超时未完成则校验服务自行退出，此时可通过日志查看加载进度，或重新启动校验服务。

### 多实例并行校验

单实例场景使用run.sh脚本启动即可。如需并行校验多条链路，可复制部署目录并重新配置，使用java后台命令分别启动。

## 校验结果说明

### 校验报告组成

校验完成后，校验结果输出至校验服务 `data.check.data-path` 配置的目录（默认./check_result），由以下文件组成：

| 名称 | 说明 |
| ---- | ---- |
| 进度日志 | progress.log，记录校验整体进度 |
| 校验汇总日志 | summary.log，记录校验汇总统计信息 |
| 成功详情日志 | success.log，记录校验成功表的详情 |
| 失败详情日志 | failed.log，记录校验失败表的详情与差异主键 |
| 失败表修复报告 | repair_*.txt，失败表的修复SQL，默认不输出 |

校验结果文件名称由前缀、schema、表名称、表Letter、分区号组成。其中表Letter由表名中的英文字母大小写编码而来：小写字母标记为0，大写字母标记为1，起始前缀0与表名编码组成二进制串后转换为十六进制。例如表名T_test_SOME_032，转换后的letter为10f。

### 校验进度日志说明

progress.log字段说明：

| 名称 | 说明 |
| ---- | ---- |
| mode | 校验模式 FULL \| INCREMENT |
| status | 当前校验状态{1未开始 \| 2进行中 \| 3完成} |
| tableCount | 校验表总数量 |
| completeCount | 当前完成校验总数 |
| total | 完成校验表记录总数 |
| rows | 当前新增完成校验表记录数量 |
| avgSpeed | 当前校验平均速率（tps/s） |
| cost | 当前耗时（秒） |
| startTime | 校验开始时间（yyyy-MM-dd HH:mm:ss） |
| endTime | 校验截止时间（yyyy-MM-dd HH:mm:ss） |
| currentTime | 进度当前时间（yyyy-MM-dd HH:mm:ss） |

### 校验汇总日志说明

summary.log字段说明：

| 名称 | 下级名称 | 说明 |
| ---- | -------- | ---- |
| mode | | FULL \| INCREMENT |
| tableCount | | 校验表总数量 |
| successCount | | 成功表总个数 |
| failedCount | | 失败表总个数 |
| rowCount | | 行记录总数 |
| missTable | | 校验源端或目标端缺少表信息 |
| | sinkLoss | 目标端丢失表数量 |
| | sinkExcess | 目标端多出表数量 |
| | miss | 缺失校验表数量 |
| | lossTables | 丢失表列表 |
| | excessTables | 多出表列表 |
| | sourceTableTotalSize | 源端表总数 |
| | sinkTableTotalSize | 目标端表总数 |
| cost | | 校验总耗时（秒） |
| startTime | | 校验开始时间（yyyy-MM-dd HH:mm:ss） |
| endTime | | 校验截止时间（yyyy-MM-dd HH:mm:ss） |

### 成功详情日志说明

success.log字段说明：

| 名称 | 说明 |
| ---- | ---- |
| process | 当前进程号 |
| schema | 当前校验schema |
| tableName | 表名称 |
| topic | topic |
| partition | 分区号 |
| rowCount | 备用 |
| cost | 校验总耗时（毫秒） |
| startTime | 校验开始时间（yyyy-MM-dd HH:mm:ss.SSS） |
| endTime | 校验截止时间（yyyy-MM-dd HH:mm:ss.SSS） |
| message | 校验成功消息 |

### 失败详情日志说明

failed.log字段说明：

| 名称 | 说明 |
| ---- | ---- |
| process | 当前进程号 |
| schema | 当前校验schema |
| tableName | 表名称 |
| topic | topic |
| partition | 分区号 |
| beginOffset | 增量校验偏移量 |
| diffCount | 校验差异记录行数 |
| cost | 校验总耗时（毫秒） |
| startTime | 校验开始时间（yyyy-MM-dd HH:mm:ss.SSS） |
| endTime | 校验截止时间（yyyy-MM-dd HH:mm:ss.SSS） |
| message | 校验失败消息 |
| keyInsertSet | 校验目标端缺少行主键集合 |
| keyUpdateSet | 校验目标端行数据不一致主键集合 |
| keyDeleteSet | 校验目标端多余行主键集合 |

其中keyInsertSet、keyUpdateSet、keyDeleteSet将差异定位到主键级别，可据此排查目标端缺失、不一致与多余的行数据。如需查看失败数据的具体差异内容，可将校验服务配置中的 `diff-debug-log-enabled` 设置为true。

### 失败表修复报告说明

失败修复报告为纯文本修复SQL内容，默认不输出。如需输出，可在校验服务配置中将 `create-repair-sql` 设置为true：

```yaml
data:
  check:
    create-repair-sql: true
```

## 校验建议

### 执行机器配置要求

高性能校验场景（如大表、海量数据校验）参考配置：

| 配置项 | 参考要求 | 说明 |
| ------ | -------- | ---- |
| 服务器数量 | 3台 | 2台数据库服务器（Oracle与oGRAC），1台校验服务与Kafka |
| CPU | 128核 | 并发抽取与校验处理能力 |
| 内存 | 512GB以上 | 数据库与校验服务内存 |
| 磁盘 | 4块NVME硬盘，每块1TB以上 | 数据存储与Kafka数据 |
| 网络 | 千兆网卡，光纤互连 | 源端与目标端之间网络带宽 |

操作系统推荐openEuler-20.03-LTS。常规数据量校验场景可适当降低配置，并保证校验服务所在机器内存满足JVM与Kafka运行需求。

在50张表、每张表1千万行记录场景下，校验速率可达20万条/秒。

### 并发度与连接池配置

数据校验主要耗时在数据抽取阶段，在抽取端调整以下配置可提升校验性能：

| 参数 | 建议值 | 描述 |
| ---- | ------ | ---- |
| spring.check.maximum-topic-size | 3 | 表级并发抽取topic数量，调大可提升并发，但占用更多内存与数据库连接 |
| spring.check.maximum-table-slice-size | 100000 | 表分片大小，调大可减少数据库连接消耗、提升吞吐，但内存占用增大 |
| spring.check.extend-maximum-pool-size | 10 | 表级分片抽取并发线程池最大线程数 |
| spring.check.core-pool-size | 10 | 并发任务最小核心线程数 |

关键配置项依赖关系：

1. 分片并发连接数约等于query-dop × maximum-topic-size，必须小于druid.max-active，否则抽取任务会等待数据库连接。
2. 源端与目标端涉及分片对齐的配置项（maximum-table-slice-size、query-dop、maximum-topic-size）取值需保持一致，否则分片无法对齐。
3. maximum-table-slice-size与sample.ratio、sample.threshold联合决定抽样校验的切片粒度与抽样数量。

### JVM参数调优

启动时可通过java虚拟机参数提升校验性能，参考配置：

```bash
-Xmx5G -Xms5G -XX:MaxMetaspaceSize=1G -XX:MetaspaceSize=1G -XX:+UseG1GC
```

根据机器可用内存大小和数据量大小适当调整。

### Kafka调优配置

| 参数 | 建议值 | 描述 |
| ---- | ------ | ---- |
| num.network.threads | 128 | broker处理网络IO线程数，网络瓶颈场景影响较大 |
| num.io.threads | 65 | broker处理磁盘IO线程数 |
| delete.topic.enable | true | 打开topic删除策略，用于清理校验后topic历史数据 |

抽取服务向Kafka发送数据时支持配置压缩算法（源端与目标端application-xxx.yml中的 `spring.kafka.properties.compression.type`）：

| 压缩算法 | 是否支持 | 说明 |
| -------- | -------- | ---- |
| none | 支持 | 默认值，不压缩 |
| gzip | 支持 | 压缩率高，CPU占用相对较高 |
| snappy | 支持 | 压缩与解压速度快，带宽或磁盘受限场景推荐使用 |
| lz4 | 不支持 | 当前发行包未内置lz4所需依赖，配置后发送消息会报错 |

压缩仅作用于抽取服务向Kafka发送数据的传输与存储环节，校验服务消费消息时自动解压，不影响校验结果正确性；该配置为发送端参数，源端与目标端各自独立生效，两端取值不需要保持一致。
