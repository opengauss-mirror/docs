# DBMind安装和部署

## 1. 安装准备

### 1.1 环境信息

假设在主控节点`192.168.100.4`上部署DBMind，有一套端口号为19999的集群环境，环境信息如下：

| node    | node_ip       | state   |
| ------- | ------------- | ------- |
| 主节点  | 192.168.100.1 | Primary |
| 备节点1 | 192.168.100.2 | Standby |
| 备节点2 | 192.168.100.3 | Standby |

假设需要在`test_user`用户下安装，需要在这4个节点上创建好用户，可以使用如下命令，创建用户并指定登入目录。

```shell
useradd -m test_user -d /home/test_user
```

安装之前需要修改相关文件的权限，并使用`su - test_user`命令切换到目标用户空间下安装。test_user用户要能够使用cm_ctl命令，否则会导致cmd_exporter获取不到数据库节点的信息。

### 1.2 安装包

安装和部署过程中需要用到的安装包和下载地址如下，用户根据自己的服务器架构进行选择：

| File Name     | Download Address                                             | OS/Arch      |
| ------------- | ------------------------------------------------------------ | ------------ |
| DBMind        | [dbmind-installer-x86_64-python3.10.sh.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dbmind/latest/x86/dbmind-installer-x86_64-python3.10.sh.tar.gz) | linux/x86_64 |
| DBMind        | [dbmind-installer-aarch64-python3.10.sh.tar.gz](https://gitee.com/link?target=https%3A%2F%2Fopengauss.obs.cn-south-1.myhuaweicloud.com%2Fdbmind%2Flatest%2Farm%2Fdbmind-installer-aarch64-python3.10.sh.tar.gz) | linux/arm64  |
| Prometheus    | [prometheus-2.43.0.linux-amd64.tar.gz](https://github.com/prometheus/prometheus/releases/download/v2.43.0/prometheus-2.43.0.linux-amd64.tar.gz) | linux/x86_64 |
| Prometheus    | [prometheus-2.43.0.linux-arm64.tar.gz](https://github.com/prometheus/prometheus/releases/download/v2.43.0/prometheus-2.43.0.linux-arm64.tar.gz) | linux/arm64  |
| node_exporter | [node_exporter-1.5.0.linux-amd64.tar.gz](https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz) | linux/x86_64 |
| node_exporter | [node_exporter-1.5.0.linux-arm64.tar.gz](https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-arm64.tar.gz) | linux/arm64  |

如果需要其他版本或架构的安装包，用户可以到[prometheus官网](https://prometheus.io/download/)进行下载。可以使用`uanme -m`命令查看服务器架构。

### 1.3 数据库用户

本文以如下的用户和数据库信息作为示例。

>- username：dbmind_monitor
>- password：test_123
>- port：6789
>- metadatabase：metadatabase

omm登录主节点，并为数据库节点和DBMind服务器数据库创建dbmind_monitor用户：

```shell
gs_guc reload -D datanode -c 'password_encryption_type=1'
gsql -p {port} -d postgres -c 'create user {username:dbmind_monitor} with password {password:test_123} ;'
gsql -p {port} -d postgres -c 'alter user {username:dbmind_monitor} monadmin; '
gs_guc reload -D datanode -c 'password_encryption_type=2'  # 可选，将该参数改回去
```
>![](public_sys-resources/icon-note.gif) **说明：** 
>
>本文中为了突出命令中的参数配置，使用了{key:value}的形式。实际情况下，应输入如下命令 ：
>
>```shell
>gs_guc reload -D datanode -c 'password_encryption_type=1'
>gsql -p {port} -d postgres -c 'create user dbmind_monitor with password test_123;'
>gsql -p {port} -d postgres -c 'alter user dbmind_monitor monadmin;'
>gs_guc reload -D datanode -c 'password_encryption_type=2'  # 可选，将该参数改回去
>```

DBMind服务器，创建元数据库：

```shell
grant all privileges to {username:dbmind_monitor};
\c postgres {username:dbmind_monitor};        
create database {metadatabase:metadatabase};
```

创建完成后，用户可通过命令`gsql -d postgres -p 6789 -r -U dbmind_monitor -W test_123`登录到数据库上，并输入`\l`命令查看元数据库`metadatabase`是否存在。


## 2. 安装DBMind

DBMind会定期在openGauss-DBMind项目的release页面发布DBMind的安装包，可以通过下载该DBMind安装包进行安装部署。

将安装包`dbmind-install-x86_64-python3.10.sh.tar.gz`放到主控节点`test_user`用户空间下并切换到用户空间后，执行下述命令完成安装：

1. 解压：

   ```shell
   tar zxvf dbmind-install-x86_64-python3.10.sh.tar.gz
   ```

2. 安装：安装过程中会提示确认安装位置和添加环境变量，按照提示输入回车或yes就行了。

   ```shell
   sh dbmind-install-x86_64-python3.10.sh
   ```

3. 重新加载环境变量：

   ```shell
   source ~/.bashrc
   ```

4. 测试是否安装成功：

   ```shell
   gs_dbmind --help
   ```

## 3. 部署DBMind

DBMind有两种部署方式，分别为手动部署和自动部署，推荐使用自动部署的方式，其会自动将prometheus、node_exporter、opengauss_exporter、cmd_expoter和reprocessing_exporter组件安装到指定的节点。

### 3.1 自动部署--推荐

自动部署会根据配置文件中的信息自动执行部署，所以需要先将配置文件`openGauss-DBMind/dbmind/components/deployment/deploy.conf`配置好。可以手动将文件配置好，也可以使用交互式配置。推荐使用手动配置的方式。

需要提前将prometheus和node_exporter两个安装包放置在用户根目录的`downloads`文件夹下，并修改属主为`test_user`用户。

#### 手动配置--推荐

使用手动配置的方式，需要提前将实例信息和参数填入`openGauss-DBMind/dbmind/components/deployment/deploy.conf`配置文件。

假设在test_user用户空间下进行安装，即host_username=test_user，deploy.conf配置文件信息如下：

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
path = /home/test_user/prometheus # 用户可以指定其他的安装路径
listen_address = 192.168.100.4
prometheus_port = 9090
reprocessing_exporter_port = 8181

[EXPORTERS]
targets = 192.168.100.1:19999/postgres,192.168.100.2:19999/postgres,192.168.100.3:19999/postgres
ssh_port = 22
host_username = test_user
path = /home/test_user/node_exporter # 用户可以指定其他的安装路径
database_username = dbmind_monitor
listen_address = 192.168.100.4
opengauss_ports_range = 9187-9197
node_exporter_port = 9100
cmd_exporter_port = 9180

[SSL]
enable_ssl = False
# 该模块其他内容不用修改，内容略
```

可以使用`sha256sum`命令生成文件的sha256校验码，如下所示：

```shell
sha256sum prometheus-2.43.0.linux-amd64.tar.gz
```

然后切换到openGauss-DBMind目录下，执行如下命令：

```shell
gs_dbmind component deployment --offline -c dbmind/components/deployment/deploy.conf
```

该命令会提示用户输入用户密码，然后将主控节点downloads目录下的安装包解压并复制到数据库节点。

最后执行如下命令，会自动启动DBMind的各exporter组件和prometheus。如果各组件都正常启动，则可以执行[启动DBMind](#4.-启动DBMind)步骤。

```shell
gs_dbmind component deployment --run
```

>![](public_sys-resources/icon-caution.gif) **注意：** 
>
>-   需要提前将prometheus和node_exporter两个安装包放置在用户根目录的`downloads`文件夹下，并修改属主为`test_user`用户。
>-   配置文件中`[DOWNLOADING]`模块的安装包名字**不带**`.tar.gz`后缀。

#### 交互式配置

通过下述命令，用户可以在交互式界面中，根据提示信息输入需要监控的openGauss实例信息和参数。

```shell
gs_dbmind component deployment --offline
```

### 3.2 手动部署

#### 规划配置

使用手动部署的方式，需要用户手动安装prometheus和相关的exporter组件，先做如下的规划配置：

| **组件**                  | **地址**                                                     | **备注**                                             |
| ------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **node_exporter**         | 192.168.100.1: 9100<br />192.168.100.2: 9100<br />192.168.100.3: 9100 | 每个数据库节点上都需要安装                           |
| **cmd_exporter**          | 192.168.100.2: 9180                                          | 只需要在一个备节点上安装                             |
| **opengauss_exporter**    | 192.168.100.4: 9187 -> 192.168.100.1: 19999<br />192.168.100.4: 9188 -> 192.168.100.2: 19999<br />192.168.100.4: 9189 -> 192.168.100.3: 19999 | 每个数据库节点上都需要安装，<br />在主控节点远程安装 |
| **prometheus**            | 192.168.100.4: 9090                                          | 只需在主控节点安装                                   |
| **reprocessing_exporter** | 192.168.100.4: 8181                                          | 和prometheus一起部署到主控节点                       |

#### node_exporter

用户需要在数据库的各个节点部署node_exporter，将node_exporter安装包放入数据库节点并切换到`test_user`用户空间后，执行如下命令：

1. 解压安装包：

   ```shell
   tar zxvf node_exporter-1.5.0.linux-amd64.tar.gz
   cd node_exporter-1.5.0.linux-amd64
   ```

2. 启动 默认端口号为9100：

   ```shell
   ./node_exporter > node_exporter.log 2>&1 &
   ```

3. 如果端口号被占用，可以指定端口号：

   ```shell
   ./node_exporter --web.listen-address=:9101 > node_exporter.log 2>&1 &
   ```

输入上述命令后，如果显示`[1]+ Exit `字符表示node_exporter安装失败，可以通过node_exporter.log日志查看原因。

#### cmd_exporter

cmd_exporter用来执行cmd命令并获取返回结果以及采集日志信息，当前主要用于采集集群状态，在一个备数据库节点上安装就可以了。

cmd_exporter组件需要通过dbmind安装，所以需要先在一个备节点上[安装dbmind](#2.-安装DBMind)，安装完之后，再通过`gs_dbmind`的`component`子命令安装cmd_exporter，如下所示。

```shell
gs_dbmind component cmd_exporter --web.listen-address 0.0.0.0 --web.listen-port 9180 --disable-https
```

执行完上述命令，如果控制台显示`The process is starting`，说明安装无异常。

#### opengauss_exporter

opengauss_exporter是DBMind采集数据库的组件，从openGauss数据库中读取系统表（或系统视图）的数据，并通过Prometheus保存起来。支持**远程部署**，需要在每个数据库节点上安装。

用户可以通过远程部署的方式在主控节点上执行下述命令，从而将opengauss_exporter安装到对应的数据库节点上，opengauss_exporter的默认端口号范围是9187-9197，如果被占用可以使用其他端口。

1. 方式一：URL格式

   ```shell
   gs_dbmind component opengauss_exporter --url postgresql://dbmind_monitor:test_123@192.168.100.1:19999/postgres --web.listen-address 0.0.0.0 --web.listen-port 9187 --log.level info --disable-https
   ```
   >![](public_sys-resources/icon-note.gif) **说明：** 
   >
   >对于采用URL格式的DSN，由于@等特殊字符用来分割URL串中各个部分的内容，故需要URL编码。例如某个用户dbmind的密码为Test@123，则URL格式的DSN为`psotgresql:dbmind:Test%40123@127.0.0.1:19999`，即将@字符编码为`%40`。


2. 方式二：K-V格式

   ```shell
   gs_dbmind component opengauss_exporter --url "dbname=postgres user=dbmind_monitor password=test_123 host=192.168.100.1 port=19999" --web.listen-address 0.0.0.0 --web.listen-port 9187 --log.level info --disable-https
   ```

执行完上述命令，如果控制台显示`The process is starting`，说明安装无异常。也可以通过下述命令检查opengauss_exporter是否已启动。

```shell
# 端口号9187为用户指定的端口号， 如果失败会显示Connection refused
curl -vv http://localhost:9187/metrics
```

#### prometheus

prometheus是业内非常流行的开源监控系统，同时本身也是一款时序数据库。需要将其安装在主控节点，默认占用端口为9090，将prometheus安装包放入主控节点环境并切换到目标用户空间后，执行如下命令：

1. 解压并切换到prometheus目录下：

   ```shell
   tar zxvf prometheus-2.42.0.linux-amd64.tar.gz
   cd prometheus-2.42.0.linux-amd64/
   ```

2. 修改prometheus配置文件：

   ```shell
   vi prometheus.yml
   ```

   在该文件中找到 scrape_configs 部分，该部分包含了所有需要被抓取的targets的配置信息，用户需要根据自己的节点数量和端口占用情况进行修改。根据[规划配置](#规划配置)可做如下配置：

   ```yaml
   scrape_configs:
     - job_name: 'prometheus'
        static_configs:
         - targets: ['192.168.100.4:9090']
     - job_name: 'opengauss_exporter'
        static_configs:
         - targets: ['192.168.100.4：9187', '192.168.100.4:9188', '192.168.100.4:9189']
     - job_name: 'node_exporter'
        static_configs:
         - targets: ['192.168.100.1：9100', '192.168.100.2:9100', '192.168.100.3:9100']
     - job_name: 'reprocessing_exporter'
       static_configs:
         - targets: ['192.168.100.4:8181']
     - job_name: 'cmd_exporter'
       static_configs:
         - targets: ['192.168.100.2:9180']
   ```

3. 启动prometheus并将日志输入到同目录下的prometheus.log里：

   ```shell
   ./prometheus --web.enable-admin-api --web.enable-lifecycle --storage.tsdb.retention.time=1w >./prometheus.log 2>&1 &
   ```

#### reprocessing_exporter

reprocessing_exporter是一个用于二次加工处理数据的exporter。由于node_exporter、opengauss_exporter保存到prometheus中的数据是即时的监控信息，而只通过这些信息是无法反应某些指标的瞬时增量信息的。因此，reprocessing_exporter可以用来计算增量信息或者聚合结果等。

由于reprocessing_exporter是从prometheus中获取指标数据，进行二次加工处理后再返回给prometheus。因此，它与prometheus是一一对应的，即如果只有一个prometheus服务，则只需要一个reprocessing_exporter即可。prometheus和reprocessing_exproter一起部署在主控节点上，reprocessing_exproter依赖prometheus，所以需要先启动prometheus再启动reprocessing_exporter。可以通过下述命令启动reprocessing_exporter：

```shell
# host_ip为主控节点的ip地址，9090为prometheus占用的端口号，8181为reprocessing_exporter占用的端口号，用户可以按需修改
gs_dbmind component reprocessing_exporter host_ip 9090 --web.listen-address 0.0.0.0 --web.listen-port 8181 --disable-https
```

启动完成之后，访问prometheus网页：`http://{主控节点ip}:9090/`，打开`Status/Targets`，查看所有exporter的启动状态。

## 4. 启动DBMind

在主控节点，切换到openGauss-DBMind目录下，输入如下命令启动DBMind：

1. 启动配置，会在openGauss-DBMind目录下创建dbmindconf/dbmind.conf配置文件：

   ```shell
   gs_dbmind service setup -c dbmindconf
   ```

2. 切换到openGauss-DBMind目录，并修改配置文件：

   ```shell
   vi dbmindconf/dbmind.conf
   ```

   其中必填的配置项如下：

   - **TSDB**

     TDSB为时序数据库配置，即prometheus相关信息。

     ```shell
     [TSDB]
     name = prometheus # The type of time-series database. Options: prometheus.
     host = {主控节点ip:192.168.100.4} # Address of time-series database.
     port = 9090 # Port to connect to time-series database.
     ```

   - **METADATABASE**

     DBMind服务器所创建的metadatabase[数据库相关信息](#1.3-数据库用户)，注意用户需要有数据库创建的权限。在启动DBMind之前，需要把metadatabase创建好。

     ```shell
     [METADATABASE]
     dbtype = opengauss # Database type. Options: sqlite, opengauss, postgresql.
     host = {数据库主节点ip:192.168.100.1} # Address of meta-data database.
     port = {数据库占用的端口号:6789} # Port to connect to meta-data database.
     username = dbmind_monitor # User name to connect to meta-data database.
     password = test_123 # Password to connect to meta-data database.
     database = metadatabase # Database name to connect to meta-data database.
     ```


   - **WORKER**

     该模块用于指定DBMind可以使用的worker子进程数量，如果写0则会进行自适应，尽可能多地使用CPU资源。

     用户可以使用`cat /proc/cpuinfo | grep "physical id" | fort | uniq | wc -l`命令查看逻辑CPU的个数，根据服务器情况配置worker子进程数量。

     ```shell
     [WORKER]
     process_num = 2  # Number of worker processes on a local node. Less than or equal to zero means adaptive.
     ```


   - **AGENT**

     该模块用于指定DBMind连接到openGauss Agent的信息。使用该Agent，可以让DBMind获取到被监控实例的即时状态，从而提高分析准确性。同时，也可以向数据库实例下发一些变更动作。

     master_url为`http://{DBMind服务器IP}:{opengauss_exporter监听端口}`，置空会自动识别。

     usename为数据库实例的dbmind_minotor用户。

     ```shell
     [AGENT]
     master_url = 
     username = dbmind_monitor # Username to login the monitoring database. Credential for agent.
     password = test_123  # Password to login the monitoring database. Credential for agent.
     ```

   - **TIMED_TASK**

     设置定时任务：

     - discard_expired_results: 删除过期结果
     - self_monitoring：指标异常监控
     - daily_inspection：日检
     - weekly_inspection：周检
     - monthly_inspection: 月检
     - slow_sql_diagnosis：慢SQL诊断
     - knob_recommend：参数调优
     - slow_query_killer：慢SQL查杀

     ```shell
     [TIMED_TASK]
     task=discard_expired_results,self_monitoring,daily_inspection, weekly_inspection,slow_sql_diagnosis,knob_recommend,slow_query_killer# select the scheduled task to start，separated by ','.
     ```

   - **WEB-SERVICE**

     ```shell
     [WEB-SERVICE]
     host = 192.168.100.4  # Which host to bind for web service. '0.0.0.0' means to bind all.
     port = 8080  # Port to listen for web serivce.
     ```

3. 配置项初始化：

   ```shell
   gs_dbmind service setup --initialize -c dbmindconf
   ```

4. 启动DBMind服务：

   ```shell
   gs_dbmind service start -c dbmindconf
   ```

上述步骤执行完之后，就可以通过`http://{DBMind服务器IP}:8080`访问DBMind前台页面。
