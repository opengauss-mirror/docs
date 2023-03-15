# MySQL一键式迁移

### 功能介绍
opengauss-migration-portal是一个用java编写的，在linux系统上运行的，集成了全量迁移、增量迁移、反向迁移、数据校验的工具。opengauss-migration-portal支持以上工具的一键式安装与启动。

### 注意事项

1.对于同一个mysql实例和opengauss数据库，一旦执行增量迁移之后执行过反向迁移，就不能再次执行增量迁移，否则会引起数据不一致问题。
2.portal在执行增量迁移、反向迁移、增量校验时需要使用curl工具。

 ### 默认文件结构

   ```
   /portal
   	config/    
   		migrationConfig.properties
   		toolspath.properties
   		status
   		currentPlan
   		input
   		chameleon/
           	config-example.yml
           datacheck/
           	application-source.yml
           	application-sink.yml
           	application.yml
           	log4j2.xml
           	log4j2source.xml
           	log4j2sink.xml
           debezium/
               connect-avro-standalone.properties
           	mysql-sink.properties
           	mysql-source.properties
           	opengauss-sink.properties
           	opengauss-source.properties
   	logs/      
   		portal.log 
   	pkg/           
           chameleon/
           	chameleon-3.1.1-py3-none-any.whl
           datacheck/
           	openGauss-datachecker-performance-5.0.0.tar.gz
           debezium/
           	confluent-5.5.1.tar.gz
           	debezium-connector-mysql-1.8.1.Final-plugin.tar.gz
           	debezium-connector-opengauss-1.8.1.Final-plugin.tar.gz
           	kafka_2.13-3.2.3.tgz
       tmp/
       tools/
           chameleon/
           datacheck/
           debezium/
           	confluent-5.5.1/
           	kafka_2.13-3.2.3/
           	plugin/
           		debezium-connector-mysql/
           		debezium-connector-opengauss/
       portal.portId.lock
       portalControl-1.0-SNAPSHOT-exec.jar
       README.md
   ```

### 安装教程

portal的安装目录默认为/ops/portal，可根据实际需要更换。

#### 安装portal

通过git命令下载源代码，将源代码中的portal文件夹复制到/ops下。

```
  git clone https://gitee.com/opengauss/openGauss-migration-portal.git
```

使用maven命令编译源代码获得portalControl-1.0-SNAPSHOT-exec.jar，并将jar包放在/ops/portal下。

```
mvn clean package -Dmaven.test.skip=true
```

java版本：open JDK11及以上

maven版本：3.8.1以上

### 启动方式

在命令行输出以下格式的命令启动portal，通过指令使用portal的各项功能。

   ```
java -Dpath=/ops/portal/ -Dskip=true -Dorder=指令 -Dworkspace.id=1 -jar portalControl-1.0-SNAPSHOT-exec.jar
   ```

其中path的值为工作目录，如果这里输入错误会导致portal报错，并且要以/结尾。

指令为数个单词之间加下划线，比如"start_mysql_full_migration"这种形式。

portal会在workspace文件夹下创造对应id的文件夹，并将执行任务时的参数和日志等信息存入该文件夹。如果不指定workspace.id，那么workspace的默认id为1。

参数优先级：命令行输入 > workspace下设置的参数 > 公共空间参数。如果使用的workspace.id和之前存在的workspace.id相同的话将沿用之前的workspace里面的参数，如果不同的话，那么portal将从config文件夹中复制一份配置文件到id对应的workspace下面作为这个任务的配置文件。

建议每次运行迁移任务时使用不同的workspace.id。

#### 安装迁移工具

迁移功能与对应的迁移工具如下表所示：

| 迁移功能                           | 使用工具                                       |
| ---------------------------------- | ---------------------------------------------- |
| 全量迁移                           | chameleon                                      |
| 增量迁移                           | kafka、confluent、debezium-connector-mysql     |
| 反向迁移                           | kafka、confluent、debezium-connector-opengauss |
| 数据校验（包括全量校验和增量校验） | kafka、confluent、datacheck                    |

各工具推荐版本：

| 工具                         | 版本       |
| ---------------------------- | ---------- |
| chameleon                    | 3.1.1以上  |
| kafka                        | 2.13-3.2.3 |
| confluent                    | 5.5.1      |
| datacheck                    | 5.0.0      |
| debezium-connector-mysql     | 1.8.1      |
| debezium-connector-opengauss | 1.8.1      |

在/ops/portal/config目录的toolspath.properties文件中修改工具安装路径：

| 参数名称                     | 参数说明                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| chameleon.venv.path          | 变色龙虚拟环境所在位置                                       |
| chameleon.pkg.path           | 变色龙的安装包所在路径                                       |
| chameleon.pkg.name           | 变色龙的安装包名                                             |
| chameleon.pkg.url            | 变色龙的安装包下载链接                                       |
| debezium.path                | debezium+kafka所在路径（默认kafka、confluent、connector都安装在该路径下） |
| kafka.path                   | kafka所在路径                                                |
| confluent.path               | confluent所在路径                                            |
| connector.path               | connector所在路径                                            |
| debezium.pkg.path            | debezium+kafka安装包所在路径（默认kafka、confluent、connector安装包都在该路径下） |
| kafka.pkg.name               | kafka安装包名                                                |
| kafka.pkg.url                | kafka安装包下载链接                                          |
| confluent.pkg.name           | confluent安装包名                                            |
| confluent.pkg.url            | confluent安装包下载链接                                      |
| connector.mysql.pkg.name     | mysql connector安装包名                                      |
| connector.mysql.pkg.url      | mysql connector安装包下载链接                                |
| connector.opengauss.pkg.name | opengauss connector安装包名                                  |
| connector.opengauss.pkg.url  | opengauss connector安装包下载链接                            |
| datacheck.install.path       | datacheck安装路径                                            |
| datacheck.path               | datacheck所在路径                                            |
| datacheck.pkg.path           | datacheck安装包所在路径                                      |
| datacheck.pkg.name           | datacheck安装包名                                            |
| datacheck.pkg.url            | datacheck安装包下载链接                                      |

工具的安装支持离线安装和在线安装：

- 在线安装：将会从指定链接下载安装包到安装包指定位置，并从指定位置获取安装包解压并进行安装。
- 离线安装：从指定位置获取安装包解压并进行安装。

如果输入命令时不指定安装方式，那么portal会根据/ops/portal/config目录的migrationConfig.properties文件中参数决定安装方式：

| 参数名称                                              | 参数说明                                              |
| ----------------------------------------------------- | ----------------------------------------------------- |
| default.install.mysql.full.migration.tools.way        | 全量迁移工具默认安装方式：offline为离线，online为在线 |
| default.install.mysql.incremental.migration.tools.way | 增量迁移工具默认安装方式：offline为离线，online为在线 |
| default.install.mysql.datacheck.tools.way             | 数据校验工具默认安装方式：offline为离线，online为在线 |
| default.install.mysql.reverse.migration.tools.way     | 反向迁移工具默认安装方式：offline为离线，online为在线 |

使用以下指令可以安装对应的迁移工具，举例：

   ```
java -Dpath=/ops/portal/ -Dskip=true -Dorder=install_mysql_all_migration_tools -Dworkspace.id=1 -jar portalControl-1.0-SNAPSHOT-exec.jar
   ```

在命令行运行这条命令可以安装所有迁移功能用到的迁移工具。

#### 安装指令

| 指令名称                                          | 指令说明                                          |
| ------------------------------------------------- | ------------------------------------------------- |
| install_mysql_full_migration_tools_online         | 在线安装mysql全量迁移工具                         |
| install_mysql_full_migration_tools_offline        | 离线安装mysql全量迁移工具                         |
| install_mysql_full_migration_tools                | 安装mysql全量迁移工具（安装方式由配置文件指定）   |
| install_mysql_incremental_migration_tools_online  | 在线安装mysql增量迁移工具                         |
| install_mysql_incremental_migration_tools_offline | 离线安装mysql增量迁移工具                         |
| install_mysql_incremental_migration_tools         | 安装mysql增量迁移工具（安装方式由配置文件指定）   |
| install_mysql_reverse_migration_tools_online      | 在线安装mysql反向迁移工具                         |
| install_mysql_reverse_migration_tools_offline     | 离线安装mysql反向迁移工具                         |
| install_mysql_reverse_migration_tools             | 安装mysql反向迁移工具（安装方式由配置文件指定）   |
| install_mysql_datacheck_tools_online              | 在线安装mysql数据校验工具                         |
| install_mysql_datacheck_tools_offline             | 离线安装mysql数据校验工具                         |
| install_mysql_datacheck_tools                     | 安装mysql数据校验工具（安装方式由配置文件指定）   |
| install_mysql_all_migration_tools                 | 安装mysql迁移工具（各工具安装方式由配置文件指定） |

#### 配置参数

用户可以在/ops/portal/config目录的migrationConfig.properties文件中修改迁移所用参数。

参数优先级：命令行输入 > workspace下设置的参数 > 公共空间参数。所以如果使用之前用过的workspaceid执行任务，请在/ops/portal/workspace/要使用的ID/config/migrationConfig.properties下面修改参数。

| 参数名称                  | 参数说明                |
| ------------------------- | ----------------------- |
| mysql.user.name           | mysql数据库用户名       |
| mysql.user.password       | mysql数据库用户密码     |
| mysql.database.host       | mysql数据库ip           |
| mysql.database.port       | mysql数据库端口         |
| mysql.database.name       | mysql数据库名           |
| opengauss.user.name       | openGauss数据库用户名   |
| opengauss.user.password   | openGauss数据库用户密码 |
| opengauss.database.host   | openGauss数据库ip       |
| opengauss.database.port   | openGauss数据库端口     |
| opengauss.database.name   | openGauss数据库名       |
| opengauss.database.schema | openGauss数据库模式名   |

### 执行迁移计划

portal支持启动多个进程执行不同的迁移计划，但是要求各迁移计划使用的mysql实例和opengauss数据库互不相同。

启动迁移计划时需要添加参数-Dworkspace.id="ID"，这样不同的迁移计划可以根据不同的workspaceID进行区分，如果不添加的话，workspaceID默认值为1。

启动全量迁移：

   ```
java -Dpath=/ops/portal/ -Dskip=true -Dorder=start_mysql_full_migration -Dworkspace.id=2 -jar portalControl-1.0-SNAPSHOT-exec.jar
   ```

portal除了支持单项任务的启动与停止，也会提供一些组合的默认计划：

启动包括全量迁移和全量校验在内的迁移计划：

   ```
java -Dpath=/ops/portal/ -Dskip=true -Dorder=start_plan1 -Dworkspace.id=3 -jar portalControl-1.0-SNAPSHOT-exec.jar
   ```

#### 计划列表

| 计划名称 | 包括指令                                     |
| -------- | -------------------------------------------- |
| plan1    | 全量迁移→全量校验                            |
| plan2    | 全量迁移→全量校验→增量迁移→增量校验          |
| plan3    | 全量迁移→全量校验→增量迁移→增量校验→反向迁移 |

以下为启动迁移计划的指令列表：

#### 指令列表

| 指令名称                                    | 指令说明                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| start_mysql_full_migration                  | 开始mysql全量迁移                                            |
| start_mysql_incremental_migration           | 开始mysql增量迁移                                            |
| start_mysql_reverse_migration               | 开始mysql反向迁移                                            |
| start_mysql_full_migration_datacheck        | 开始mysql全量校验                                            |
| start_mysql_incremental_migration_datacheck | 开始mysql增量校验                                            |
| start_plan1                                 | 开始默认计划plan1                                            |
| start_plan2                                 | 开始默认计划plan2                                            |
| start_plan3                                 | 开始默认计划plan3                                            |
| start_current_plan                          | 开始自定义计划                                               |
| show_plans                                  | 显示默认计划                                                 |
| show_information                            | 显示数据库相关信息，包括mysql和openGuass端的数据库名、用户名、密码、ip、端口等 |
| stop_plan                                   | 停止计划                                                     |

用户也可以在/ops/portal/config目录的currentPlan文件中自定义迁移计划，但自定义迁移计划需要遵守以下规则：

1.在currentPlan中每行填入一条启动单个迁移任务的指令，如start_mysql_full_migration，start_mysql_incremental_migration等。指令的顺序遵循：

- start_mysql_full_migration
- start_mysql_full_migration_datacheck
- start_mysql_incremental_migration
- start_mysql_incremental_migration_datacheck
- start_mysql_reverse_migration

如果顺序错误则portal报错。

2.增量校验的上一项一定是增量迁移，全量校验的上一项一定是全量迁移。

3.每个单项任务只能添加一次。

#### 停止计划

举例：

在portal正在执行计划的状态下，另开一个窗口输入以下指令可以停止workspace.id为2的任务：

   ```
java -Dpath=/ops/portal/ -Dskip=true -Dorder=stop_plan -Dworkspace.id=2 -jar portalControl-1.0-SNAPSHOT-exec.jar
   ```

输入指令后，这个进程会退出，而正在执行计划的portal会接收到停止计划的消息，从而停止计划。

#### 卸载迁移工具

使用以下指令可以卸载不同功能对应的迁移工具，举例：

   ```
java -Dpath=/ops/portal/ -Dskip=true -Dorder=uninstall_mysql_all_migration_tools -Dworkspace.id=1 -jar portalControl-1.0-SNAPSHOT-exec.jar
   ```

在命令行运行这条命令可以卸载所有功能用到的迁移工具。

| 指令名称                                    | 指令说明              |
| ------------------------------------------- | --------------------- |
| uninstall_mysql_full_migration_tools        | 卸载mysql全量迁移工具 |
| uninstall_mysql_incremental_migration_tools | 卸载mysql增量迁移工具 |
| uninstall_mysql_datacheck_tools             | 卸载mysql数据校验工具 |
| uninstall_mysql_reverse_migration_tools     | 卸载mysql反向迁移工具 |
| uninstall_mysql_all_migration_tools         | 卸载mysql迁移工具     |
