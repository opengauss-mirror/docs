# Data Check<a name="EN-US_TOPIC_0000001398052181"></a>

The data check project **openGauss-tools-datachecker-performance** consists of the check service and extract service. The check service is used for data check, and the extract service is used for data extraction and normalization.

## Principles<a name="section1480816250617"></a>

Full check:

After full data migration is complete, the extract service extracts data from the source MySQL database and target openGauss database, normalizes the data, and pushes the data to Kafka. Finally, the check service extracts data from Kafka, checks the data, and outputs the check result.

Incremental check:

The debezium service listens to the incremental data of the source MySQL database to the specified topic. Then, the source extract service processes the incremental data of the topic and triggers the incremental check.

## Environment Preparation<a name="section425318254413"></a>

- Number of servers: 3 Kunpeng 920 servers (2 for database server, 1 for verification server and kafka service).

- Server hardware specification:

  - Memory: Greater than 512GB.
  - CPU: Kunpeng-920 2600MHZ 128 cores
  - Free Disk: 4 NVME hard disks, each with a capacity greater than 1TB.
  - Network card: Hi1822 gigabit network card, optical fiber interconnection.

- Operating system requirements: openEuler-20.03-LTS (aarch64 architecture)

- JDK: JDK11+

- MYSQL: Version 5.7+required

- openGauss: openGauss3.0.0+

  ```
  query openGauss synchronize_seqscans parameter, and set synchronize_seqscans off
  show synchronize_seqscans;
  gs_guc set -D datadir -c "synchronize_seqscans=off";
  or
  gs_guc set -N all -I all -c "synchronize_seqscans=off"
  
  query openGauss query_dop parameter,and set query_dop =8,it maximum of 64.
  gs_guc set -D datadir -c "query_dop=8";
  or
  gs_guc set -N all -I all -c "query_dop=8";
  ```

  

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

    3.  Copy the JAR packages and the **config** directory to the specified deployment directory.
    4.  Configure related files.
        -   Configuration file of the check end: **application.yml**

            ```
            Verify the service configuration and modify the application.yml file
            	server.port, is the verification service web port, which can not be modified by default
            	logging.config, Set the verification service log path to config/log4j2.xml file absolute path
            	bootstrap-servers, is the working address of kafka. The default installation can not be modified
            	data.check.data-path, is the output address of the verification result. The default configuration can not be modified
            	data.check.source-uri， is the source side service request address. The default configuration can not be modified
            	data.check.sink-uri，is the target end service request address. The default configuration can not be modified
            	rules.enable  Enable rule verification
            	rules.tables Add table filtering rules
            	rules.row  Add row filter rule
            	rules.column Add column filter rule
            ```
            
        -   Configuration file of the extraction end and source end: **application-source.yml**

            ```
    The source side service configuration modifies the application-source.yml file
            	server.port is the source side extraction service web port, which can not be modified by default
            	logging.config, sets the log path of the verification service to the absolute path of the config/log4j2source.xml file
            	spring.check.server-uri is the verification service request address. The default configuration cannot be modified
            	spring.extract.schema is the current validation data schema, and the MySQL database name
            	bootstrap-servers  is the working address of kafka. The default installation can not be modified
            	
            	Data source configuration
            	The tool uses the druid data source by default. Users can customize and configure the connection pool parameters, which can be adjusted according to the current number of verification database tasks (number of tables)
            	initialSize: 5 Default initial connection size
            	minIdle: 10 Default minimum number of connection pools
            	maxActive: 20 Number of active database connections by default
            ```
            
        -   Configuration file of the extraction end and target end: **application-sink.yml**
        
            ```
            The sink side service configuration modifies the application-sink.yml file
            	server.port is the sink side extraction service web port, which can not be modified by default
            	logging.config, sets the log path of the verification service to the absolute path of the config/log4j2source.xml file
            	spring.check.server-uri is the verification service request address. The default configuration cannot be modified
            	spring.extract.schema Current verification data schema, opengauss schema name
            	bootstrap-servers is the working address of kafka. The default installation can not be modified
            	
            	Data source configuration
            	The tool uses the druid data source by default. Users can customize and configure the connection pool parameters, which can be adjusted according to the current number of verification database tasks (number of tables)
            	initialSize: 5 Default initial connection size
            	minIdle: 10 Default minimum number of connection pools
            	maxActive: 20 Number of active database connections by default
    ```
        
5.  Start the service.
        -   Start the ZooKeeper.
    
            ```
            cd /data/kafka/confluent-7.2.0
            bin/zookeeper-server-start -daemon etc/kafka/zookeeper.properties
            ```
    
        -   Start Kafka.
    
            ```
            bin/kafka-server-start -daemon etc/kafka/server.properties
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
    
7.  After the service is started, the full calibration process will be automatically started.
    
8.  Start incremental check by modifying the configuration file on the source end.
    
        ```
        debezium-enable: true
    Configure other debezium-related configurations and start the service to enable the incremental check service.
        ```

** For detailed instructions, see  《[ Instructions for use of calibration tools ](https://gitee.com/opengauss/openGauss-tools-datachecker-performance/blob/master/%E6%A0%A1%E9%AA%8C%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AF%BC.md)》**

## Binary Installation<a name="section33621845504"></a>

Download the package from the following link, decompress the package, configure related configuration files, and run the shell script to start the service: For details about the configuration information and operation procedure, see the source code installation part.

```
https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-datachecker-performance-5.0.0.tar.gz
tar -zxvf openGauss-datachecker-performance-5.0.0.tar.gz
```

The decompression directory contains:

-   datachecker-check-0.0.1.jar: The check service JAR file.
-   datachecker-extract-0.0.1.jar: The extract service JAR file.
-   check-endpoint.sh: Script for starting the check service
-   extract-endpoints.sh: Script for starting the data extract service on the source and target ends

The **config** directory contains:

-   application.yml: Configuration file of the check end
-   application-source.yml: Configuration file of the source end
-   application-sink.yml: Configuration file of the target end
-   log4j2.xml
-   log4j2sink.xml
-   log4j2source.xml

## Uninstallation<a name="section1174761844514"></a>

Delete the corresponding JAR package and related configuration files.

## Precautions<a name="section2940149112912"></a>

-   The JDK version must be 11+.
-   The current version supports data check only between the source MySQL database and the target openGauss database.
-   The current version supports only data check and does not support table object check.
-   The current version does not support geographical location data check.
-   MySQL 5.7 or later is required.
-   The verification tool currently does not support automatic recovery of verification interruption (network failure, kill process, etc.).
-   Data validation row-level filtering rule configuration only supports extraction within the specified range of [offset, count], and does not support excluding data filtering within the range of [offset, count].
-   The row filter rule extracts data in the middle range (for example, [10100]). If the source side deletes the data [0,10] before the range, the data in the table will be offset within the specified range, resulting in differences in data verification results. At this time, it is necessary to expand the range of pre-subscripts and increase the corresponding number of samples. That is, [3，107].
-   When the update statement of the primary key is not synchronized to the destination through incremental migration or the primary key synchronization error occurs, data verification is performed. The new data after the source end update and the old data at the target end are two independent data. When the verification difference is processed, two statements are generated, that is, delete the old data and insert the new data. In this scenario, a primary key update statement will be split into two statements (insert+delete) for execution, and will be split into two transactions for execution, which cannot guarantee atomicity.
-   Incremental verification does not support table-level rules
-   Row level rules are not supported for incremental verification
-   At present, incremental verification only supports data addition, deletion and modification verification, but temporarily does not support table structure (object) verification (including more tables and less tables)
