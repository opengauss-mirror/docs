# MySQL一键式迁移

## 功能介绍

gs_rep_portal是一个用Java编写的，在linux系统上运行的，集成了全量迁移、增量迁移、反向迁移、数据校验的工具。gs_rep_portal支持以上工具的一键式安装上述工具，设定迁移任务，任务根据用户设定的执行计划顺序的调用相应工具完成每个迁移步骤，并能实时展示每个步骤的状态、进度、异常原因等。

## 注意事项

- portal在执行增量迁移、反向迁移、增量校验时需要使用curl工具。

- 同一个迁移计划的增量迁移和反向迁移不会同时开启，如果一个计划中包含了增量迁移和反向迁移，那么需要用户手动停止增量迁移，启动反向迁移。当用户启动反向迁移之后，无法再启动增量迁移。

- portal使用的workspace.id只能为小写字母与数字的组合。

- portal在启动多个计划时，需要保证MySQL数据库实例各不相同，openGauss端数据库各不相同，且同一个MySQL数据库实例和openGauss端数据库的增量迁移和反向迁移不能同时开启。

 ## 默认文件结构

使用默认配置安装的portal的文件结构如下。

   ```
portal/
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
			chameleon-5.0.0-py3-none-any.whl
		datacheck/
			openGauss-datachecker-performance-5.0.0.tar.gz
		debezium/
			confluent-community-5.5.1-2.12.zip
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
	gs_datacheck.sh
	gs_mysync.sh
	gs_rep_portal.sh
	gs_replicate.sh
	README.md
   ```

## 安装教程

portal的安装目录默认为/ops/portal，可根据实际需要更换。

### 源码安装：

1.通过git命令下载源代码，将源代码中的portal文件夹复制到/ops下。

```
git clone https://gitee.com/opengauss/openGauss-migration-portal.git
```

2.使用maven命令编译源代码获得portalControl-1.0-SNAPSHOT-exec.jar，并将jar包放在/ops/portal下。

```
mvn clean package -Dmaven.test.skip=true
```

java版本：open JDK11及以上

maven版本：3.8.1以上

3.使用一键式脚本启动portal时，请将/ops/portal/shell目录下中的.sh文件提取出来，放在/ops/portal/目录，也就是和jar包同一目录下。

### 安装包安装：

下载链接：

https://opengauss.obs.cn-south-1.myhuaweicloud.com/tools/portal/PortalControl-5.0.0.tar.gz

1.下载gs_rep_portal安装包

   ```
wget -c https://opengauss.obs.cn-south-1.myhuaweicloud.com/tools/portal/PortalControl-5.0.0.tar.gz
   ```

2.解压gs_rep_portal安装包

   ```
tar -zxvf PortalControl-5.0.0.tar.gz
   ```

## 启动方式

使用一键式脚本gs_rep_portal启动portal，通过参数使用portal的各项功能。

   ```
sh gs_rep_portal.sh 参数 workspace.id &
   ```

这里的参数为数个单词之间加下划线，比如"start_mysql_full_migration"这种形式，分为安装指令，启动指令，停止指令，卸载指令等，会在下文介绍。

portal会在workspace文件夹下创造对应id的文件夹，并将执行任务时的参数和日志等信息存入该文件夹。如果不指定workspace.id，那么workspace.id默认值为1。

命令行输入以下指令可以查看帮助（包括使用方式和可用指令）：

   ```
sh gs_rep_portal.sh help &
   ```

参数优先级： workspace下设置的参数 > 公共空间参数。如果使用的workspace.id和之前存在的workspace.id相同的话将沿用之前的workspace里面的参数，如果不同的话，那么portal将从config文件夹中复制一份配置文件到id对应的workspace下面作为这个任务的配置文件。

建议每次运行迁移任务时使用不同的workspace.id。

### 安装迁移工具

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
| chameleon                    | 5.0.0      |
| kafka                        | 2.13-3.2.3 |
| confluent                    | 5.5.1      |
| datacheck                    | 5.0.0      |
| debezium-connector-mysql     | 1.8.1      |
| debezium-connector-opengauss | 1.8.1      |

在/ops/portal/config目录的toolspath.properties文件中修改工具安装路径，其中文件夹要以/结尾：

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
sh gs_rep_portal.sh install_mysql_all_migration_tools 1 &
   ```

在命令行运行这条命令可以安装所有迁移功能用到的迁移工具。

### 安装指令

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

### 配置参数

用户可以在/ops/portal/config目录的migrationConfig.properties文件中修改迁移所用参数。

参数优先级：workspace下设置的参数 > 公共空间参数。如果使用的workspace.id和之前存在的workspace.id相同的话将沿用之前的workspace里面的参数，如果不同的话，那么portal将从config文件夹中复制一份配置文件到id对应的workspace下面作为这个任务的配置文件。

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

除了配置迁移所用基本参数外，用户还可在指定位置自行配置工具自身的所用参数。但是portal会默认修改工具自身的临时文件和日志位置，并分配部分工具自身所用的端口。用户可自行查看并修改工具的配置文件，默认工具配置文件位置如下表。

注意事项：

- zookeeper默认端口2181、kafka默认端口9092、schema-registry默认端口8081不会自动分配，其余工具均会自动分配端口。用户如果需要修改工具的端口，请不要修改IP。如果需要修改kafka的端口，要注意将kafka的文件中的参数listeners的值修改为PLAINTEXT://localhost:要配置的端口。
- 下表使用${config}代表/ops/portal/config目录，即公共空间配置的参数。如果想修改某个workspace的参数，比如workspace.id=2的计划的参数，请将/ops/portal/config替换为/ops/portal/workspace/2/config。
- 下表使用${kafka.path}代表/ops/portal/config目录的toolspath.properties文件里面kafka.path的值。
- 下表使用${confluent.path}代表/ops/portal/config目录的toolspath.properties文件里面confluent.path的值。
- 每次创建新的任务时，/ops/portal/config/debezium目录的connect-avro-standalone.properties文件会被自动复制成四份并修改端口。

<table>
	<tr>
		<td>工具名称 </td> 
		<td>配置文件位置</td> 
	</tr>
	<tr>
		<td>chameleon</td>    
		<td>${config}/chameleon/config-example.yml</td>  
	</tr>
	<tr>
		<td>zookeeper</td>    
		<td>${kafka.path}/config/zookeeper.properties</td>  
	</tr>
	<tr>
		<td>kafka</td>    
		<td>${kafka.path}/config/server.properties</td>
	</tr>
	<tr>
		<td>schema-registry</td>    
		<td>${confluent.path}/etc/schema-registry/schema-registry.properties</td>
	</tr>
    <tr>
    	<td rowspan="3">connector-mysql</td>
		<td>${config}/debezium/connect-avro-standalone.properties</td>  
	</tr>
	<tr>
		<td>${config}/debezium/mysql-source.properties</td>  
	</tr>
	<tr>
		<td>${config}/debezium/mysql-sink.properties</td>  
	</tr>
    <tr>
    	<td rowspan="3">connector-opengauss</td>
		<td>${config}/debezium/connect-avro-standalone.properties</td>  
	</tr>
	<tr>
		<td>${config}/debezium/opengauss-source.properties</td>  
	</tr>
	<tr>
		<td>${config}/debezium/opengauss-sink.properties</td>  
	</tr>
    <tr>
    	<td rowspan="3">datacheck</td>
		<td>${config}/datacheck/application-source.yml</td>  
	</tr>
	<tr>
		<td>${config}/datacheck/application-sink.yml </td>  
	</tr>
	<tr>
		<td>${config}/datacheck/application.yml </td>  
	</tr>
</table>

## 执行迁移计划

portal支持启动多个任务执行不同的迁移计划，但是要求各迁移计划使用的MySQL实例和openGauss数据库互不相同。

启动迁移计划时需要添加参数，这样不同的迁移计划可以根据不同的workspace.id进行区分，如果不添加的话，workspace.id默认值为1。

启动workspace.id为2的全量迁移：

   ```
sh gs_rep_portal.sh start_mysql_full_migration 2 &
   ```

portal除了支持单项功能的启动与停止，也会提供一些组合的默认计划：

启动workspace.id为2的包括全量迁移和全量校验在内的迁移计划：

   ```
sh gs_rep_portal.sh start_plan1 2 &
   ```

### 计划列表

| 计划名称 | 包括指令                                     |
| -------- | -------------------------------------------- |
| plan1    | 全量迁移→全量校验                            |
| plan2    | 全量迁移→全量校验→增量迁移→增量校验          |
| plan3    | 全量迁移→全量校验→增量迁移→增量校验→反向迁移 |

### 增量迁移和反向迁移

增量迁移功能是持续将MySQL端的数据修改同步到openGauss端的功能，而反向迁移功能是持续将openGauss端的数据修改同步到MySQL端的功能，所以二者均不会自动关闭。如果用户想要停止增量迁移功能，需要另开窗口输入指令停止增量迁移功能，反向迁移功能同理。

并且需要注意的是：增量迁移和反向迁移不能同时开启，如果一个计划中包含了增量迁移和反向迁移，那么需要用户手动停止增量迁移，启动反向迁移。

以启动默认计划3为例：

1.在配置好配置文件后输入以下指令启动workspace.id为3的计划plan3：

   ```
sh gs_rep_portal.sh start_plan3 3 &
   ```

这时portal会自动执行全量迁移→全量校验→增量迁移→增量校验，然后一直处于增量迁移状态（此时增量迁移和增量校验同时运行）。

2.如果用户想要停止增量迁移功能，需要另开窗口输入以下指令停止增量迁移功能：

   ```
sh gs_rep_portal.sh stop_incremental_migration 3 &
   ```

输入指令后，这个进程会退出，而正在执行计划的workspace.id为3的portal主进程会接收到停止增量迁移的消息，从而停止增量迁移，等待下一步指令。

3.如果用户想要启动反向迁移功能，需要输入以下指令：

   ```
sh gs_rep_portal.sh run_reverse_migration 3 &
   ```

输入指令后，这个进程会退出，而正在执行计划的workspace.id为3的portal主进程会接收到启动反向迁移的消息，从而启动反向迁移，此时portal一直处于反向迁移状态。

如果想要停止整个迁移计划，请参考下方的“停止计划”小节。

以下为启动迁移计划的指令列表：

### 启动指令列表

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

- 在currentPlan中每行填入一条启动单个迁移任务的指令，如start_mysql_full_migration，start_mysql_incremental_migration等。指令的顺序遵循：

	- start_mysql_full_migration
	- start_mysql_full_migration_datacheck
	- start_mysql_incremental_migration
	- start_mysql_incremental_migration_datacheck
	- start_mysql_reverse_migration

    如果顺序错误则portal报错。

- 增量校验的上一项一定是增量迁移，全量校验的上一项一定是全量迁移。

- 每个单项任务只能添加一次。

### 停止计划

举例：

在portal正在执行计划的状态下，另开一个窗口输入以下指令可以停止workspace.id为3的任务：

   ```
sh gs_rep_portal.sh stop_plan 3 &
   ```

输入指令后，这个进程会退出，而正在执行计划的workspace.id为3的portal主进程会接收到停止计划的消息，从而停止计划。

### 启动多个计划

portal支持同时启动多个计划，但是这些计划的mysql端应该为各不相同的实例，openGauss端应该为各不相同的数据库：

首先修改配置文件，详情见配置参数环节。

使用workspace.id为p1启动第一个迁移计划（这里以启动计划3为例）：

   ```
sh gs_rep_portal.sh start_plan3 p1 &
   ```

然后再次修改配置文件。

使用workspace.id为p2启动第一个迁移计划（这里以启动计划3为例）：

   ```
sh gs_rep_portal.sh start_plan3 p2 &
   ```

这样就启动了多个portal。

## 卸载迁移工具

使用以下指令可以卸载不同功能对应的迁移工具，举例：

   ```
sh gs_rep_portal.sh uninstall_mysql_all_migration_tools 1 &
   ```

在命令行运行这条命令可以卸载所有功能用到的迁移工具。

| 指令名称                                    | 指令说明              |
| ------------------------------------------- | --------------------- |
| uninstall_mysql_full_migration_tools        | 卸载mysql全量迁移工具 |
| uninstall_mysql_incremental_migration_tools | 卸载mysql增量迁移工具 |
| uninstall_mysql_datacheck_tools             | 卸载mysql数据校验工具 |
| uninstall_mysql_reverse_migration_tools     | 卸载mysql反向迁移工具 |
| uninstall_mysql_all_migration_tools         | 卸载mysql迁移工具     |

## 完整数据迁移流程

1.下载gs_rep_portal安装包

   ```
wget -c https://opengauss.obs.cn-south-1.myhuaweicloud.com/tools/portal/PortalControl-5.0.0.tar.gz
   ```

2.解压gs_rep_portal安装包

   ```
tar -zxvf PortalControl-5.0.0.tar.gz
   ```

3.在/ops/portal/config目录的toolspath.properties文件中修改安装路径，然后启动命令安装

   ```
sh gs_rep_portal.sh install_mysql_all_migration_tools 1 &
   ```

4.在/ops/portal/config目录的migrationConfig.properties文件中修改迁移参数，指定新的workspace.id为2启动迁移计划3

   ```
sh gs_rep_portal.sh start_plan3 2 &
   ```

5.程序将自动运行至增量迁移和增量校验同时开启中，让workspace.id为2的任务停止增量迁移，此时程序进入等待状态，之后可以启动反向迁移或停止计划

   ```
sh gs_rep_portal.sh stop_incremental_migration 2 &
   ```

6.启动反向迁移，此时程序进入反向迁移状态，之后可以停止计划

   ```
sh gs_rep_portal.sh run_reverse_migration 2 &
   ```

7.停止workspace.id为2的计划

   ```
sh gs_rep_portal.sh stop_plan 2 &
   ```

