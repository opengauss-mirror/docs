# Data Check<a name="EN-US_TOPIC_0000001398052181"></a>

The data check project **openGauss-tools-datachecker-performance** consists of the check service and extract service. The check service is used for data check, and the extract service is used for data extraction and normalization.

## Principles<a name="section1480816250617"></a>

Full check:

After full data migration is complete, the extract service extracts data from the source MySQL database and target openGauss database, normalizes the data, and pushes the data to Kafka. Finally, the check service extracts data from Kafka, checks the data, and outputs the check result.

Incremental check:

The debezium service listens to the incremental data of the source MySQL database to the specified topic. Then, the source extract service processes the incremental data of the topic and triggers the incremental check.

## Environment Preparation<a name="section425318254413"></a>

ARM+openEuler 20.03 or x86+CentOS 5.7

## Installing Using Source Code<a name="section1912981915448"></a>

-   Installation software dependencies:

    jdk11, git, maven, kafka, and debezium (incremental check - source connect)

-   Installation and operation procedure:
    1.  Run the git command to download the source code.

        ```
        git clone https://gitee.com/opengauss/openGauss-tools-datachecker-performance.git
        ```

    2.  Run the maven command to build the check and extract JAR packages.

        ```
        mvn clean package -Dmvnen.test.skip=true
        ```

    3.  Copy the JAR packages and the **confmvn clean package -Dmvnen.test.skip=trueig** directory to the specified deployment directory.
    4.  Configure related files.
        -   Configuration file of the check end: **application.yml**

            ```
            server:
              port: 9000
            spring:
              kafka:
            	bootstrap-servers: 192.168.0.114:9092 # kafka cluster address
            data:
              check:
            	data-path: D:\code\tool  # Local path for storing data check results.
            	bucket-expect-capacity: 10 # The minimum bucket capacity is 1.
            	source-uri: http://127.0.0.1:9002 # Source service address and port number (server.port).
            	sink-uri: http://127.0.0.1:9001 # Source service address and port number (server.port).
            
            
            ```

        -   Configuration file of the extraction end and source end: **application-source.yml**

            ```
            server:
              port: 9002
            spring:
              check:
            	server-uri: http://127.0.0.1:9000 # Data check service address.
              extract:
            	schema: test # Source data instance.
            	databaseType: MS  # The source database type is set to MS (MySQL).
            	debezium-enable: false #Determines whether to enable incremental debezium configuration. By default, incremental debezium configuration is disabled.
            	debezium-topic:topic # The debezium listens to incremental data in tables and uses a single topic to manage incremental data.
            	debezium-groupId: debezium-extract-group # **d debezium**: incremental migration topic; **groupId**:consumption group setting.
            	debezium-topic-partitions: 1 # Number of debezium listening topic partitions.
            	debezium-tables: # List of table names listened by Debezium in debezium-tables. This configuration is configured and takes effect only on the source server.
            		table1,
            		table2
            	debezium-time-period: 1 # debezium incremental migration check period (24 x 60, in minutes)
            	debezium-num-period: 1000 # Specifies the threshold of incremental change records in debezium incremental migration check statistics. The default value is 1000. The threshold must be greater than 100.
              datasource:
            	druid:
            	  dataSourceOne:
            		driver-class-name: com.mysql.cj.jdbc.Driver
            		url: jdbc:mysql://127.0.0.1:3306/test?useSSL=false&useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC&allowPublicKeyRetrieval=true
            		username: jack #User name of the source MySQL database for check.
            		password: test@123 #User name and password of the source MySQL database for check.
            
            
            ```

        -   Configuration file of the extraction end and target end: **application-sink.yml**

            ```
            server:
              port: 9001
            spring:
              check:
            	server-uri: http://127.0.0.1:9000 # Data check service address.
              extract:
            	schema: test # The sink openGauss is used to check the data schema.
            	databaseType: OG  # The sink database type is set to OG (openGauss).
              datasource:
            	druid:
            	  dataSourceOne:
            		driver-class-name: org.opengauss.Driver
            		# The sink openGauss is used to check the database link address.
            		url: jdbc:opengauss://127.0.0.1:15432/test?useSSL=false&useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC&batchMode=OFF
            		username: jack #User name of the sink openGauss for check.
            		password: test@123 #User name and password of the sink openGauss for check.
            ```

    5.  Start the service.
        -   Start the ZooKeeper.

            ```
            cd /data/kafka/confluent-7.2.0
            bin/zookeeper-server-start -daemon etc/kafka/zookeeper.properties
            ```

        -   Start Kafka.

            ```
            bin/kafka-server-start.sh -daemon etc/kafka/server.properties
            ```

        -   The connect debezium connector is started (incremental check is required). The **mysql-conect.properties** file is used to configure the debezium connector.

            ```
            bin/connect-standalone -daemon etc/kafka/connect-standalone.properties etc/kafka/mysql-conect.properties
            ```

    6.  Start the extraction service.

        ```
        sh extract-endpoints.sh stat|restart|stop
        sh check-endpoint.sh stat|restart|stop
        ```

    7.  Run the following command to perform full check:

        ```
        curl -X 'POST' 'http://localhost:9000/start/check?checkMode=FULL' -H 'accept: */*' -d ''
        ```

        Clear the full check environment.

        ```
        curl -X 'POST' 'http://localhost:9000/stop/clean/check' -H 'accept: */*' -d ''
        ```

    8.  Start incremental check by modifying the configuration file on the source end.

        ```
        debezium-enable: true
        Configure other debezium-related configurations and start the service to enable the incremental check service.
        ```



## Binary Installation<a name="section33621845504"></a>

Download the package from the following link, decompress the package, configure related configuration files, and run the shell script to start the service: For details about the configuration information and operation procedure, see the source code installation part.

```
https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.1.0/tools/openGauss-datachecker-performance-3.1.0.tar.gz
tar -zxvf openGauss-datachecker-performance-3.1.0.tar.gz
```

The decompression directory contains:

-   datachecker-check-0.0.1.jar: The check service JAR file.
-   datachecker-extract-0.0.1.jar: The extract service JAR file.

The **config** directory contains:

-   application.yml: Configuration file of the check end
-   application-source.yml: Configuration file of the source end
-   application-sink.yml: Configuration file of the target end
-   check-endpoint.sh: Script for starting the check service
-   extract-endpoints.sh: Script for starting the data extract service on the source and target ends

## Uninstallation<a name="section1174761844514"></a>

Delete the corresponding JAR package and related configuration files.

## Precautions<a name="section2940149112912"></a>

-   The JDK version must be 11+.
-   The current version supports data check only between the source MySQL database and the target openGauss database.
-   The current version supports only data check and does not support table object check.
-   The current version does not support geographical location data check.
-   MySQL 5.7 or later is required.
