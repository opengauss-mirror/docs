# Quick MySQL Migration

## Functions

gs\_rep\_portal is a Java-based tool that runs on Linux and integrates full migration, incremental migration, reverse migration, and data check. gs\_rep\_portal allows you to install the preceding tools in one-click mode and set migration tasks. The tasks invoke the corresponding tools to complete each migration step based on the user-defined execution plan and display the status, progress, and exception cause of each step in real time.

## Precautions

- The curl tool is required for incremental migration, reverse migration, and incremental check on the portal.

- Incremental migration and reverse migration of the same migration plan cannot be enabled at the same time. If a plan contains incremental migration and reverse migration, you need to manually stop incremental migration and start reverse migration. Incremental migration cannot be started after reverse migration is started.

- After stopping incremental migration and before starting reverse migration, do not perform jobs on openGauss. Otherwise, data will be lost.

- The value of **workspace.id** used by the portal can contain only lowercase letters and digits.

- When starting multiple plans on the portal, ensure that the MySQL database instances are different and openGauss databases are different. In addition, incremental migration and reverse migration of the same MySQL database instance and openGauss database cannot be enabled at the same time.

 ## Default File Structure

The file structure of the portal installed by using the default configuration is as follows:

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

## Installation Guide

The default portal installation directory is **/ops/portal**. You can change it as required.

### Installation using source code:

1. Run the git command to download the source code and copy the **portal** folder in the source code to the **/ops** directory.

```
git clone https://gitee.com/opengauss/openGauss-migration-portal.git
```

2. Run the maven command to compile the source code to obtain the **portalControl-1.0-SNAPSHOT-exec.jar** package and save the JAR package to the **/ops/portal** directory.

```
mvn clean package -Dmaven.test.skip=true
```

Java version: open JDK 11 or later

Maven version: 3.8.1 or later

3. When using the one-click script to start the portal, extract the .sh file from the **/ops/portal/shell** directory and place it in the **/ops/portal/** directory, that is, the directory where the JAR package is stored.

### Installation using a package:

Download link:

https://opengauss.obs.cn-south-1.myhuaweicloud.com/tools/portal/PortalControl-5.0.0.tar.gz

1. Download the gs\_rep\_portal installation package.

   ```
wget -c https://opengauss.obs.cn-south-1.myhuaweicloud.com/tools/portal/PortalControl-5.0.0.tar.gz
   ```

2. Decompress the gs\_rep\_portal package.

   ```
tar -zxvf PortalControl-5.0.0.tar.gz
   ```

## Startup Mode

Use the one-click script **gs\_rep\_portal** to start the portal and use the portal functions through parameters.

   ```
sh gs\_rep\_portal.sh *Parameter* workspace.id &
   ```

A parameter consists of several words connected by underscores (_), for example, **start\_mysql\_full\_migration**. The parameters can be installation, startup, stop, and uninstallation commands, which will be described in the following sections.

The portal creates a folder with ID corresponding to the **workspace** folder and saves the parameters and logs generated during task execution to the folder. If **workspace.id** is not specified, the default value is **1**.

Run the following command to view the help information (including the usage mode and available commands).

   ```
sh gs_rep_portal.sh help &
   ```

Parameter priority: parameters set in **workspace** > public space parameters. If the workspace ID used is the same as the existing workspace ID, the parameters in the original workspace are used. If they are different, the portal copies a configuration file from the **config** folder to the workspace corresponding to the ID as the configuration file of the task.

You are advised to use a different workspace ID each time you run a migration task.

### Installing Migration Tools

The following table lists the migration functions and corresponding migration tools.

| Migration Function                          | Tool                                      |
| ---------------------------------- | ---------------------------------------------- |
| Full migration                          | chameleon                                      |
| Incremental migration                          | kafka, confluent, and debezium-connector-mysql    |
| Reverse migration                          | kafka, confluent, and debezium-connector-opengauss|
| Data check (including full check and incremental check)| kafka, confluent, and datacheck                   |

Recommended tool versions:

| Tool                        | Version      |
| ---------------------------- | ---------- |
| chameleon                    | 5.0.0      |
| kafka                        | 2.13-3.2.3 |
| confluent                    | 5.5.1      |
| datacheck                    | 5.0.0      |
| debezium-connector-mysql     | 1.8.1      |
| debezium-connector-opengauss | 1.8.1      |

Change the tool installation path in the **toolspath.properties** file in the **/ops/portal/config** directory. The folder name must end with a slash (/).

| Parameter                    | Description                                                    |
| ---------------------------- | ------------------------------------------------------------ |
| chameleon.venv.path          | Path of the chameleon virtual environment                                      |
| chameleon.pkg.path           | Path of the chameleon installation package                                      |
| chameleon.pkg.name           | Name of the chameleon installation package                                            |
| chameleon.pkg.url            | Link for downloading the chameleon installation package                                      |
| debezium.path                | Path of debezium and kafka (By default, kafka, confluent, and connector are installed in this path.)|
| kafka.path                   | Path of kafka                                               |
| confluent.path               | Path of confluent                                           |
| connector.path               | Path of connector                                           |
| debezium.pkg.path            | Path of the debezium and kafka installation packages (By default, the kafka, confluent, and connector installation packages are stored in this path.)|
| kafka.pkg.name               | Name of the kafka installation package                                               |
| kafka.pkg.url                | Link for downloading the kafka installation package                                         |
| confluent.pkg.name           | Name of the confluent installation package                                           |
| confluent.pkg.url            | Link for downloading the confluent installation package                                     |
| connector.mysql.pkg.name     | Name of the MySQL connector installation package                                     |
| connector.mysql.pkg.url      | Link for downloading the MySQL connector installation package                               |
| connector.opengauss.pkg.name | Name of the openGauss connector installation package                                 |
| connector.opengauss.pkg.url  | Link for downloading the openGauss connector installation package                           |
| datacheck.install.path       | Path for installing datacheck                                           |
| datacheck.path               | Path of datacheck                                           |
| datacheck.pkg.path           | Path of the datacheck installation package                                     |
| datacheck.pkg.name           | Name of the datacheck installation package                                           |
| datacheck.pkg.url            | Link for downloading the datacheck installation package                                     |

Tools can be installed online or offline.

- Online installation: Download the installation package from the specified link to the specified location, obtain the package from the specified location, decompress the package, and install it.
- Offline installation: Obtain the installation package from the specified location, decompress the package, and install it.

If you do not specify the installation mode when running the command, the portal determines the installation mode based on the parameters in the **migrationConfig.properties** file in the **/ops/portal/config** directory.

| Parameter                                             | Description                                             |
| ----------------------------------------------------- | ----------------------------------------------------- |
| default.install.mysql.full.migration.tools.way        | Default installation mode of the full migration tool: **offline** or **online**|
| default.install.mysql.incremental.migration.tools.way | Default installation mode of the incremental migration tool: **offline** or **online**|
| default.install.mysql.datacheck.tools.way             | Default installation mode of the datacheck tool: **offline** or **online**|
| default.install.mysql.reverse.migration.tools.way     | Default installation mode of the reverse migration tool: **offline** or **online**|

Run the following command to install the corresponding migration tools:

   ```
sh gs_rep_portal.sh install_mysql_all_migration_tools 1 &
   ```

You can run this command on the CLI to install all migration tools.

### Installation Commands

| Command                                         | Description                                         |
| ------------------------------------------------- | ------------------------------------------------- |
| install_mysql_full_migration_tools_online         | Installs the MySQL full migration tool online.                        |
| install_mysql_full_migration_tools_offline        | Installs the MySQL full migration tool offline.                        |
| install_mysql_full_migration_tools                | Installs the MySQL full migration tool. (The installation mode is specified in the configuration file.)  |
| install_mysql_incremental_migration_tools_online  | Installs the MySQL incremental migration tool online.                        |
| install_mysql_incremental_migration_tools_offline | Installs the MySQL incremental migration tool offline.                        |
| install_mysql_incremental_migration_tools         | Installs the MySQL incremental migration tool. (The installation mode is specified in the configuration file.)  |
| install_mysql_reverse_migration_tools_online      | Installs the MySQL reverse migration tool online.                        |
| install_mysql_reverse_migration_tools_offline     | Installs the MySQL reverse migration tool offline.                        |
| install_mysql_reverse_migration_tools             | Installs the MySQL reverse migration tool. (The installation mode is specified in the configuration file.)  |
| install_mysql_datacheck_tools_online              | Installs the MySQL datacheck tool online.                        |
| install_mysql_datacheck_tools_offline             | Installs the MySQL datacheck tool offline.                        |
| install_mysql_datacheck_tools                     | Installs the MySQL datacheck tool. (The installation mode is specified in the configuration file.)  |
| install_mysql_all_migration_tools                 | Installs the MySQL migration tools. (The installation mode of each tool is specified in the configuration file.)|

### Configuration Parameters

You can modify migration parameters in the **migrationConfig.properties** file in the **/ops/portal/config** directory.

Parameter priority: parameters set in **workspace** > public space parameters. If the workspace ID used is the same as the existing workspace ID, the parameters in the original workspace are used. If they are different, the portal copies a configuration file from the **config** folder to the workspace corresponding to the ID as the configuration file of the task.

| Parameter                 | Description               |
| ------------------------- | ----------------------- |
| mysql.user.name           | MySQL database user name      |
| mysql.user.password       | MySQL database user password    |
| mysql.database.host       | IP address of the MySQL database          |
| mysql.database.port       | MySQL database port        |
| mysql.database.name       | MySQL database name          |
| opengauss.user.name       | openGauss database user name  |
| opengauss.user.password   | openGauss database user password|
| opengauss.database.host   | IP address of the openGauss database      |
| opengauss.database.port   | openGauss database port    |
| opengauss.database.name   | openGauss database name      |
| opengauss.database.schema | openGauss database schema name  |

In addition to the basic parameters used for migration, you can also configure the parameters used by the tool in the specified location. However, the portal modifies the temporary files and log locations of the tool by default and allocates some ports used by the tool. You can view and modify the configuration file of the tool. The following table lists the default configuration file of the tool.

Precautions:

- The default ZooKeeper port 2181, Kafka port 9092, and schema-registry port 8081 are not automatically allocated. Other tools automatically allocate ports. If you need to change the port number of the tool, do not change the IP address. If you need to change the Kafka port, change the value of **listeners** in the Kafka file to **PLAINTEXT://localhost:***Port to be configured*.
- In the following table, **${config}** indicates the **/ops/portal/config** directory, that is, the parameter configured for the public space. If you want to modify the parameter of a workspace, for example, the parameters of the plan whose **workspace.id** is **2**, replace **/ops/portal/config** with **/ops/portal/workspace/2/config**.
- In the following table, **${kafka.path}** indicates the value of **kafka.path** in the **toolspath.properties** file in the **/ops/portal/config** directory.
- In the following table, **${confluent.path}** indicates the value of **confluent.path** in the **toolspath.properties** file in the **/ops/portal/config** directory.
- Each time a task is created, the **connect-avro-standalone.properties** file in the **/ops/portal/config/debezium** directory is automatically copied into four copies and the port number is changed.

<table>
	<tr>
		<td>Tool</td>
		<td>Location of the Configuration File</td>
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

## Executing a Migration Plan

The portal allows you to start multiple tasks to execute different migration plans. However, the MySQL instance and openGauss database used by each migration plan must be different.

When starting a migration plan, you need to add parameters so that different migration plans can be distinguished by **workspace.id**. If you do not add parameters, the default value of **workspace.id** is **1**.

Run the following command to start full migration whose **workspace.id** is **2**.

   ```
sh gs_rep_portal.sh start_mysql_full_migration 2 &
   ```

In addition to starting and stopping a single function, the portal also provides some combined default plans.

Start the migration plan (including full migration and full data check) whose **workspace.id** is **2**.

   ```
sh gs_rep_portal.sh start_plan1 2 &
   ```

### Plan List

| Plan| Command                                    |
| -------- | -------------------------------------------- |
| plan1    | Full migration → Full data check                           |
| plan2    | Full migration → Full data check → Incremental migration → Incremental data check         |
| plan3    | Full migration → Full data check → Incremental migration → Incremental data check → Reverse migration|

### Incremental and Reverse Migrations

The incremental migration function is used to continuously synchronize data modifications from the MySQL database to the openGauss database. The reverse migration function is used to continuously synchronize data modifications from the openGauss database to the MySQL database. Therefore, the two functions are not automatically disabled. If you want to stop the incremental migration function, you need to open another window and run the command to stop the incremental migration function. The same applies to the reverse migration function.

Note that incremental migration and reverse migration cannot be enabled at the same time. If a plan contains incremental migration and reverse migration, you need to manually stop incremental migration and start reverse migration. After stopping incremental migration and before starting reverse migration, do not perform jobs on openGauss. Otherwise, data will be lost.

The following example shows how to start default **plan3**.

1. After configuring the configuration file, run the following command to start **plan3** whose **workspace.id** is **3**.

   ```
sh gs_rep_portal.sh start_plan3 3 &
   ```

In this case, the portal automatically performs full migration, full data check, incremental migration, and incremental data check. Then, the portal remains in the incremental migration state (in this case, incremental migration and incremental data check are running at the same time).

2. If you want to stop incremental migration, open another window and run the following command.

   ```
sh gs_rep_portal.sh stop_incremental_migration 3 &
   ```

After the command is executed, the process exits. The portal main process that is executing the plan whose **workspace.id** is **3** receives a message indicating that the incremental migration is stopped. As a result, the incremental migration is stopped, and the portal waits for the next command.

3. To enable the reverse migration function, run the following command.

   ```
sh gs_rep_portal.sh run_reverse_migration 3 &
   ```

After the command is executed, the process exits. The portal main process that is executing the plan whose **workspace.id** is **3** receives the message indicating that reverse migration is started. As a result, the reverse migration is started, and the portal is always in the reverse migration state.

If you want to stop the entire migration plan, see section "Stopping a Plan."

The following table lists the commands for starting a migration plan.

### Startup Command List

| Command                                   | Description                                                    |
| ------------------------------------------- | ------------------------------------------------------------ |
| start_mysql_full_migration                  | Starts MySQL full migration.                                           |
| start_mysql_incremental_migration           | Starts MySQL incremental migration.                                           |
| start_mysql_reverse_migration               | Starts MySQL reverse migration.                                           |
| start_mysql_full_migration_datacheck        | Starts MySQL full data check.                                           |
| start_mysql_incremental_migration_datacheck | Starts MySQL incremental data check.                                           |
| start_plan1                                 | Starts the default **plan1**.                                           |
| start_plan2                                 | Starts the default **plan2**.                                           |
| start_plan3                                 | Starts the default **plan3**.                                           |
| start_current_plan                          | Starts the customized plan.                                              |
| show_plans                                  | Displays the default plan.                                                |
| show_information                            | Displays database information, including the MySQL and openGauss database names, user names, passwords, IP addresses, and ports.|
| stop_plan                                   | Stops the plan.                                                    |

You can also customize a migration plan in the **currentPlan** file in the **/ops/portal/config** directory. However, the customized migration plan must comply with the following rules:

- A command for starting a single migration task is entered in each row of **currentPlan**, for example, **start\_mysql\_full\_migration** and **start\_mysql\_incremental\_migration**. The sequence of commands is as follows:

	- start_mysql_full_migration
	- start_mysql_full_migration_datacheck
	- start_mysql_incremental_migration
	- start_mysql_incremental_migration_datacheck
	- start_mysql_reverse_migration

    If the sequence is incorrect, the portal reports an error.

- The previous task of incremental data check must be incremental migration, and the previous task of full data check must be full migration.

- Each single task can be added only once.

### Stopping a Plan

Example:

When the plan is being executed on the portal, open another window and run the following command to stop the task whose **workspace.id** is **3**.

   ```
sh gs_rep_portal.sh stop_plan 3 &
   ```

After the command is executed, the process exits. The portal main process that is executing the plan whose **workspace.id** is **3** receives a message indicating that the plan is stopped.

### Starting Multiple Plans

Multiple plans can be started on the portal at the same time. However, plans on the MySQL end must be different instances, and those on the openGauss end must be different databases.

Modify the configuration file. For details, see "Configuring Parameters."

Start the first migration plan **plan3** whose **workspace.id** is **p1**.

   ```
sh gs_rep_portal.sh start_plan3 p1 &
   ```

Then, modify the configuration file again.

Start the first migration plan **plan3** whose **workspace.id** is **p2**.

   ```
sh gs_rep_portal.sh start_plan3 p2 &
   ```

In this way, multiple portals are started.

## Uninstalling Migration Tools

Run the following commands to uninstall migration tools.

   ```
sh gs_rep_portal.sh uninstall_mysql_all_migration_tools 1 &
   ```

You can run this command on the CLI to uninstall all migration tools.

| Command                                   | Description             |
| ------------------------------------------- | --------------------- |
| uninstall_mysql_full_migration_tools        | Uninstalls the MySQL full migration tool.|
| uninstall_mysql_incremental_migration_tools | Uninstalls the MySQL incremental migration tool.|
| uninstall_mysql_datacheck_tools             | Uninstalls the MySQL data check tool.|
| uninstall_mysql_reverse_migration_tools     | Uninstalls the MySQL reverse migration tool.|
| uninstall_mysql_all_migration_tools         | Uninstalls the MySQL migration tools.    |

## Complete Data Migration Process

1. Download the **gs\_rep\_portal** installation package.

   ```
wget -c https://opengauss.obs.cn-south-1.myhuaweicloud.com/tools/portal/PortalControl-5.0.0.tar.gz
   ```

2. Decompress the **gs\_rep\_portal** installation package.

   ```
tar -zxvf PortalControl-5.0.0.tar.gz
   ```

3. Change the installation path in the **toolspath.properties** file in the **/ops/portal/config** directory and run the following command to start the installation.

   ```
sh gs_rep_portal.sh install_mysql_all_migration_tools 1 &
   ```

4. Modify the migration parameters in the **migrationConfig.properties** file in the **/ops/portal/config** directory, set **workspace.id** to **2**, and start migration plan 3.

   ```
sh gs_rep_portal.sh start_plan3 2 &
   ```

5. The program automatically runs until both incremental migration and incremental data check are enabled. The task whose **workspace.id** is **2** stops incremental migration. In this case, the program enters the waiting state. Then, you can start reverse migration or stop the plan.

   ```
sh gs_rep_portal.sh stop_incremental_migration 2 &
   ```

6. Start the reverse migration. In this case, the program enters the reverse migration state. Then, you can stop the plan.

   ```
sh gs_rep_portal.sh run_reverse_migration 2 &
   ```

7. Stop the plan whose **workspace.id** is **2**.

   ```
sh gs_rep_portal.sh stop_plan 2 &
   ```
