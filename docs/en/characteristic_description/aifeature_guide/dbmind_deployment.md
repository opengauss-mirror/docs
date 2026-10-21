---
description: This document describes DBMind Installation and Deployment in openGauss, covering topics such as 1. Installation Preparation, 2. Installing DBMind.
keywords: [openGauss, DBMind Installation and Deployment, features, 1. Installation Preparation, 2. Installing DBMind]
---

# DBMind Installation and Deployment

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T01:50:34.300Z -->

## 1. Installation Preparation

### 1.1 Environment Information

Assume that DBMind is deployed on the primary control node `192.168.100.4`, and there is a cluster environment with port number 19999. The environment information is as follows:

| node    | node_ip       | state   |
| ------- | ------------- | ------- |
| Primary node  | 192.168.100.1 | Primary |
| Standby node 1 | 192.168.100.2 | Standby |
| Standby node 2 | 192.168.100.3 | Standby |

Assume that DBMind needs to be installed under the `test_user` user. Create the user on these four nodes. You can use the following command to create the user and specify the login directory.

```shell
useradd -m test_user -d /home/test_user
```

Before installation, modify the permissions of the related files, and run the `su - test_user` command to switch to the target user space for installation. The `test_user` user must be able to use the `cm_ctl` command. Otherwise, cmd_exporter cannot obtain the information of the database nodes.

### 1.2 Installation Packages

The installation packages and download addresses required during installation and deployment are as follows. Select them based on your server architecture:

| File Name     | Download Address                                             | OS/Arch      |
| ------------- | ------------------------------------------------------------ | ------------ |
| DBMind        | [dbmind-installer-x86_64-python3.11.sh.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/dbmind/x86/dbmind-installer-x86_64-python3.11.sh.tar.gz)  | DBMind x86|
| DBMind        |[dbmind-installer-x86_64-python3.11.sh.tar.gz.sha256](https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/dbmind/x86/dbmind-installer-x86_64-python3.11.sh.tar.gz.sha256)  | DBMind x86 SHA256 |
| DBMind        |[dbmind-installer-aarch64-python3.11.sh.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/dbmind/arm/dbmind-installer-aarch64-python3.11.sh.tar.gz) | DBMind Arm  |
| DBMind        |  [dbmind-installer-aarch64-python3.11.sh.tar.gz.sha256](https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/dbmind/arm/dbmind-installer-aarch64-python3.11.sh.tar.gz.sha256) | DBMind Arm SHA256  |
| Prometheus    | [prometheus-2.43.0.linux-amd64.tar.gz](https://github.com/prometheus/prometheus/releases/download/v2.43.0/prometheus-2.43.0.linux-amd64.tar.gz) | linux/x86_64 |
| Prometheus    | [prometheus-2.43.0.linux-arm64.tar.gz](https://github.com/prometheus/prometheus/releases/download/v2.43.0/prometheus-2.43.0.linux-arm64.tar.gz) | linux/arm64  |
| node_exporter | [node_exporter-1.5.0.linux-amd64.tar.gz](https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz) | linux/x86_64 |
| node_exporter | [node_exporter-1.5.0.linux-arm64.tar.gz](https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-arm64.tar.gz) | linux/arm64  |

If installation packages of other versions or architectures are required, download them from the [Prometheus official website](https://prometheus.io/download/). Use the `uname -m` command to view the server architecture.

### 1.3 Database User

This document uses the following user and database information as an example.

>- username: dbmind_monitor
>- password: xxxxxx
>- port: 6789
>- metadatabase: metadatabase

Log in to the primary node as omm and create the `dbmind_monitor` user for the database node and the DBMind server database:

```shell
gs_guc reload -D datanode -c 'password_encryption_type=1'
gsql -p {port} -d postgres -c 'create user {username:dbmind_monitor} with password {password:xxxxxx} ;'
gsql -p {port} -d postgres -c 'alter user {username:dbmind_monitor} monadmin; '
gs_guc reload -D datanode -c 'password_encryption_type=2'  # Optional. Change this parameter back.
```

>[!NOTE]Note
>
>In this document, the {key:value} format is used to highlight parameter configurations in commands. In actual use, enter the following commands:
>
>```shell
>gs_guc reload -D datanode -c 'password_encryption_type=1'
>gsql -p {port} -d postgres -c 'create user dbmind_monitor with password xxxxxx;'
>gsql -p {port} -d postgres -c 'alter user dbmind_monitor monadmin;'
>gs_guc reload -D datanode -c 'password_encryption_type=2'  # Optional. Change this parameter back.
>```

On the DBMind server, create the metadata database:
>[!NOTE]Note
>
>In actual use, it is recommended to grant the user the minimum privileges.

```shell
grant all privileges to {username:dbmind_monitor};
\c postgres {username:dbmind_monitor};        
create database {metadatabase:metadatabase};
```

After the creation is complete, the user can log in to the database by running `gsql -d postgres -p 6789 -r -U dbmind_monitor -W test_123`, and then enter the `\l` command to check whether the metadata database `metadatabase` exists.

## 2. Installing DBMind

DBMind periodically publishes DBMind installation packages on the release page of the openGauss-DBMind project. You can download the DBMind installation package to install and deploy DBMind.

Place the installation package `dbmind-install-x86_64-python3.10.sh.tar.gz` in the user space of the `test_user` user on the primary control node, switch to the user space, and then run the following commands to complete the installation:

1. Decompress:

   ```shell
   tar zxvf dbmind-install-x86_64-python3.10.sh.tar.gz
   ```

2. Install: During the installation, you are prompted to confirm the installation location and add environment variables. Press Enter or enter yes as prompted.

   ```shell
   sh dbmind-install-x86_64-python3.10.sh
   ```

3. Reload the environment variables:

   ```shell
   source ~/.bashrc
   ```

4. Verify the installation:

   ```shell
   gs_dbmind --help
   ```

## 3. Deploying DBMind

DBMind supports two deployment methods: manual deployment and automatic deployment. Automatic deployment is recommended because it automatically installs the Prometheus, node_exporter, opengauss_exporter, cmd_exporter, and reprocessing_exporter components to the specified nodes.

### 3.1 Automatic Deployment (Recommended)

Automatic deployment performs deployment automatically based on the information in the configuration file, so you need to configure the configuration file `openGauss-DBMind/dbmind/components/deployment/deploy.conf` first. You can configure the file manually or use interactive configuration. Manual configuration is recommended.

Place the two installation packages, Prometheus and node_exporter, in the `downloads` folder under the user's home directory in advance, and change their owner to the `test_user` user.

#### Manual Configuration (Recommended)

In manual configuration mode, fill in the instance information and parameters in the `openGauss-DBMind/dbmind/components/deployment/deploy.conf` configuration file in advance.

Assume that the installation is performed in the user space of `test_user`, that is, `host_username=test_user`. The `deploy.conf` configuration file is as follows:

```shell
[DOWNLAODING]
host = https://github.com/prometheus
node_exporter = node_exporter-1.5.0.linux-amd64
prometheus = prometheus-2.42.0.linux-amd64
node_exporter_sha256  = af999fd31ab54ed3a34b9f0b10c28e9acee9ef5ac5a5d5edfdde85437db7acdb
prometheus_sha256 = 422dab055ed9c7bcaff52b71805f9192c6fac0de6b7e78dd278e70ee2663dcc

[PROMETHEUS]
host = 192.168.100.4
ssh_port = 22
host_username = test_user
path = /home/test_user/prometheus # Users can specify another installation path.
listen_address = 192.168.100.4
prometheus_port = 9090
reprocessing_exporter_port = 8181

[EXPORTERS]
targets = 192.168.100.1:19999/postgres,192.168.100.2:19999/postgres,192.168.100.3:19999/postgres
ssh_port = 22
host_username = test_user
path = /home/test_user/node_exporter # Users can specify another installation path.
database_username = dbmind_monitor
listen_address = 192.168.100.4
opengauss_ports_range = 9187-9197
node_exporter_port = 9100
cmd_exporter_port = 9180

[SSL]
enable_ssl = False
# Leave the rest of this module unchanged; the content is omitted.
```

You can use the `sha256sum` command to generate the SHA-256 checksum of a file, as shown below:

```shell
sha256sum prometheus-2.43.0.linux-amd64.tar.gz
```

Then switch to the openGauss-DBMind directory and run the following command:

```shell
gs_dbmind component deployment --offline -c dbmind/components/deployment/deploy.conf
```

This command prompts the user to enter the user password, and then decompresses the installation packages in the downloads directory of the primary control node and copies them to the database nodes.

Finally, run the following command to automatically start the exporter components and Prometheus of DBMind. If all components start normally, you can proceed to [Starting DBMind](#4-starting-dbmind).

```shell
gs_dbmind component deployment --run
```

>[!WARNING]Warning
>
>- Place the prometheus and node_exporter installation packages in the `downloads` folder in the user's root directory in advance, and change the owner to the `test_user` user.
>- In the configuration file, the installation package name in the `[DOWNLOADING]` section does **not** include the `.tar.gz` suffix.

#### Interactive Configuration

With the following command, users can enter the openGauss instance information and parameters to be monitored in the interactive interface based on the prompts.

```shell
gs_dbmind component deployment --offline
```

### 3.2 Manual Deployment

#### Planning Configuration

In manual deployment, you need to manually install Prometheus and related exporter components. First, perform the following planning configuration:

| **Component**             | **Address**                                                  | **Note**                                             |
| ------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **node_exporter**         | 192.168.100.1: 9100<br />192.168.100.2: 9100<br />192.168.100.3: 9100 | Install on each database node.                       |
| **cmd_exporter**          | 192.168.100.2: 9180                                          | Install on only one standby node.                    |
| **opengauss_exporter**    | 192.168.100.4: 9187 -> 192.168.100.1: 19999<br />192.168.100.4: 9188 -> 192.168.100.2: 19999<br />192.168.100.4: 9189 -> 192.168.100.3: 19999 | Install on each database node.<br />Install remotely on the primary control node. |
| **prometheus**            | 192.168.100.4: 9090                                          | Install only on the primary control node.            |
| **reprocessing_exporter** | 192.168.100.4: 8181                                          | Deploy together with Prometheus on the primary control node. |

#### node_exporter

The user needs to deploy node_exporter on each database node. Place the node_exporter installation package on the database node, switch to the `test_user` user space, and then run the following commands:

1. Extract the installation package:

   ```shell
   tar zxvf node_exporter-1.5.0.linux-amd64.tar.gz
   cd node_exporter-1.5.0.linux-amd64
   ```

2. Start node_exporter. The default port number is 9100:

   ```shell
   ./node_exporter > node_exporter.log 2>&1 &
   ```

3. If the port number is occupied, specify another port number:

   ```shell
   ./node_exporter --web.listen-address=:9101 > node_exporter.log 2>&1 &
   ```

After running the preceding commands, if `[1]+ Exit` is displayed, node_exporter fails to be installed. You can view the cause in the `node_exporter.log` file.

#### cmd_exporter

cmd_exporter is used to execute cmd commands, obtain the returned results, and collect log information. It is currently used mainly to collect cluster status, so it only needs to be installed on one standby database node.

The cmd_exporter component must be installed through DBMind. Therefore, first [install DBMind](#2-installing-dbmind) on a standby node, and then install cmd_exporter by using the `component` subcommand of `gs_dbmind`, as shown below.

```shell
gs_dbmind component cmd_exporter --web.listen-address 0.0.0.0 --web.listen-port 9180 --disable-https
```

After the preceding command is executed, if the console displays `The process is starting`, the installation is normal.

#### opengauss_exporter

opengauss_exporter is a DBMind component that collects database data. It reads data from system tables (or system views) in the openGauss database and stores the data in Prometheus. It supports **remote deployment** and must be installed on each database node.

You can run the following command on the primary control node to install opengauss_exporter on the corresponding database node through remote deployment. The default port number range of opengauss_exporter is 9187 to 9197. If these ports are occupied, you can use other ports.

1. Method 1: URL format

   ```shell
   gs_dbmind component opengauss_exporter --url postgresql://dbmind_monitor:test_123@192.168.100.1:19999/postgres --web.listen-address 0.0.0.0 --web.listen-port 9187 --log.level info --disable-https
   ```

   >[!NOTE]Note
   >
   >For a DSN in URL format, special characters such as @ are used to separate the parts of the URL string, so URL encoding is required. For example, if the password of user dbmind is Test@123, the DSN in URL format is `postgresql:dbmind:Test%40123@127.0.0.1:19999`, where the @ character is encoded as `%40`.

2. Method 2: K-V format

   ```shell
   gs_dbmind component opengauss_exporter --url "dbname=postgres user=dbmind_monitor password=xxxxxx host=192.168.100.1 port=19999" --web.listen-address 0.0.0.0 --web.listen-port 9187 --log.level info --disable-https
   ```

After the preceding command is executed, if the console displays `The process is starting`, indicating that the installation is normal. You can also run the following command to check whether opengauss_exporter has been started.

```shell
# Port 9187 is the port number specified by the user. If the connection fails, "Connection refused" is displayed.
curl -vv http://localhost:9187/metrics
```

#### Prometheus

Prometheus is a very popular open-source monitoring system in the industry and is also a time-series database. It must be installed on the primary control node and occupies port 9090 by default. After placing the Prometheus installation package in the primary control node environment and switching to the target user space, run the following commands:

1. Decompress the package and switch to the prometheus directory:

   ```shell
   tar zxvf prometheus-2.42.0.linux-amd64.tar.gz
   cd prometheus-2.42.0.linux-amd64/
   ```

2. Modify the Prometheus configuration file:

   ```shell
   vi prometheus.yml
   ```

   In this file, find the scrape_configs section, which contains the configuration information of all targets to be scraped. Modify it based on the number of nodes and port usage. According to [planning configuration](#planning-configuration), configure it as follows:

   ```yaml
   scrape_configs:
     - job_name: 'prometheus'
        static_configs:
         - targets: ['192.168.100.4:9090']
     - job_name: 'opengauss_exporter'
        static_configs:
         - targets: ['192.168.100.4:9187', '192.168.100.4:9188', '192.168.100.4:9189']
     - job_name: 'node_exporter'
        static_configs:
         - targets: ['192.168.100.1:9100', '192.168.100.2:9100', '192.168.100.3:9100']
     - job_name: 'reprocessing_exporter'
       static_configs:
         - targets: ['192.168.100.4:8181']
     - job_name: 'cmd_exporter'
       static_configs:
         - targets: ['192.168.100.2:9180']
   ```

3. Start Prometheus and redirect the logs to `prometheus.log` in the same directory:

   ```shell
   ./prometheus --web.enable-admin-api --web.enable-lifecycle --storage.tsdb.retention.time=1w >./prometheus.log 2>&1 &
   ```

#### reprocessing_exporter

reprocessing_exporter is an exporter used to reprocess data. Because the data that node_exporter and opengauss_exporter store in Prometheus is real-time monitoring information, this information alone cannot reflect the instantaneous incremental information of certain metrics. Therefore, reprocessing_exporter can be used to calculate incremental information or aggregate results.

Because reprocessing_exporter obtains metric data from Prometheus, reprocesses it, and then returns it to Prometheus, it has a one-to-one correspondence with Prometheus. That is, if there is only one Prometheus service, only one reprocessing_exporter is required. Prometheus and reprocessing_exporter are deployed together on the primary control node. reprocessing_exporter depends on Prometheus, so start Prometheus before starting reprocessing_exporter. You can start reprocessing_exporter by running the following command:

```shell
# host_ip is the IP address of the primary control node, 9090 is the port number occupied by Prometheus, and 8181 is the port number occupied by reprocessing_exporter. You can modify them as required.
gs_dbmind component reprocessing_exporter host_ip 9090 --web.listen-address 0.0.0.0 --web.listen-port 8181 --disable-https
```

After the startup is complete, access the Prometheus web page at `http://{primary control node IP}:9090/`, open `Status/Targets`, and check the startup status of all exporters.

## 4. Starting DBMind

On the primary control node, switch to the openGauss-DBMind directory and run the following command to start DBMind:

1. Start the configuration. This creates the `dbmindconf/dbmind.conf` configuration file in the openGauss-DBMind directory:

   ```shell
   gs_dbmind service setup -c dbmindconf
   ```

2. Switch to the openGauss-DBMind directory and modify the configuration file:

   ```shell
   vi dbmindconf/dbmind.conf
   ```

   The required configuration items are as follows:

   - **TSDB**

     TSDB is the time-series database configuration, that is, Prometheus-related information.

     ```shell
     [TSDB]
     name = prometheus # The type of time-series database. Options: prometheus.
     host = {primary control node IP:192.168.100.4} # Address of time-series database.
     port = 9090 # Port to connect to time-series database.
     ```

   - **METADATABASE**

     The `metadatabase` created by the DBMind server. For [database-related information](#13-database-user), note that the user must have the privilege to create a database. Before starting DBMind, create the `metadatabase` first.

     ```shell
     [METADATABASE]
     dbtype = opengauss # Database type. Options: sqlite, opengauss, postgresql.
     host = {database primary node IP:192.168.100.1} # Address of meta-data database.
     port = {database port number:6789} # Port to connect to meta-data database.
     username = dbmind_monitor # User name to connect to meta-data database.
     password = xxxxxx # Password to connect to meta-data database.
     database = metadatabase # Database name to connect to meta-data database.
     ```

   - **WORKER**

     This module specifies the number of worker subprocesses that DBMind can use. If it is set to 0, DBMind adapts automatically and uses as many CPU resources as possible.

     You can run the `cat /proc/cpuinfo | grep "physical id" | sort | uniq | wc -l` command to view the number of logical CPUs, and configure the number of worker subprocesses based on the server conditions.

     ```shell
     [WORKER]
     process_num = 2  # Number of worker processes on a local node. Less than or equal to zero means adaptive.
     ```

   - **AGENT**

     This module specifies the information for DBMind to connect to the openGauss Agent. By using this Agent, DBMind can obtain the real-time status of the monitored instance, thereby improving analysis accuracy. It can also deliver some change actions to the database instance.

     `master_url` is `http://{DBMind server IP}:{opengauss_exporter listening port}`. Leave it empty for automatic identification.

     `username` is the `dbmind_monitor` user of the database instance.

     ```shell
     [AGENT]
     master_url = 
     username = dbmind_monitor # Username to login the monitoring database. Credential for agent.
     password = xxxxxx  # Password to login the monitoring database. Credential for agent.
     ```

   - **TIMED_TASK**

     Set scheduled tasks:

     - `discard_expired_results`: Deletes expired results.
     - `self_monitoring`: Monitors metric anomalies.
     - `daily_inspection`: Performs daily inspection.
     - `weekly_inspection`: Performs weekly inspection.
     - `monthly_inspection`: Performs monthly inspection.
     - `slow_sql_diagnosis`: Performs slow SQL diagnosis.
     - `knob_recommend`: Performs parameter tuning.
     - `slow_query_killer`: Terminates slow SQL.

     ```shell
     [TIMED_TASK]
     task=discard_expired_results,self_monitoring,daily_inspection, weekly_inspection,slow_sql_diagnosis,knob_recommend,slow_query_killer# select the scheduled task to start, separated by ','.
     ```

   - **WEB-SERVICE**

     ```shell
     [WEB-SERVICE]
     host = 192.168.100.4  # Which host to bind for web service. '0.0.0.0' means to bind all.
     port = 8080  # Port to listen for web service.
     ```

3. Initialize the configuration items:

   ```shell
   gs_dbmind service setup --initialize -c dbmindconf
   ```

4. Start the DBMind service:

   ```shell
   gs_dbmind service start -c dbmindconf
   ```

After the preceding steps are complete, you can access the DBMind front-end page at `http://{DBMind server IP}:8080`.
