# Reverse Migration <a name="EN-US_TOPIC_0000001346972848"></a>

## Function Description <a name="section2900185110452"></a>

Reverse migration allows you to migrate data from the source database to the target database, switch applications to the target database, and then migrate new data from the target database to the source database. Reverse migration meets users' requirements for service migration survival. It ensures that the source and target databases run concurrently. If the target database is faulty, applications can be switched back to the source database in time. The openGauss provides the reverse-migration tool to migrate data from openGauss to the MySQL database, meeting reverse migration requirements.

## Principles<a name="section18226518464"></a>

Enable logical replication on openGauss, use JDBC to obtain logical decoding, parse SQL statements for logical decoding, and concurrently migrate data to MySQL through multiple threads.

## Feature Advantages<a name="section89821242155416"></a>

The sysbench is used to perform a pressure test on openGauss. When 100 tables and 100 threads are concurrently executed, the overall online migration performance can reach 30,000 TPS in the insert scenario.

## Environment Preparation<a name="section425318254413"></a>

ARM+openEuler 20.03 or x86+CentOS 5.7

## Procedure <a name="section024513334448"></a>

1.  Modify the configuration file. The path of the configuration file is **config.yaml**.

    ```
    og_conn:
      host: "openGauss_ip"
      port: "5432"
      user: "user"
      password: "password"
      database: "postgres"
      charset: "utf8"
      driver: "org.opengauss.Driver"
      ASSUME_MIN_SERVER_VERSION: "9.4"// Mandatory attribute for logical replication.
      REPLICATION: "database" // Mandatory attribute for logical replication.
      PREFER_QUERY_MODE: "simple"// Mandatory attribute for logical replication.
    slot:
      name: "replication_slot"// Name of the logical replication slot.
      include-xids: false// Indicates whether the decoded data contains XID information.
      skip-empty-xacts: true// Indicates whether the decoding transaction contains empty transactions.
      waitLSN: ""// LSN enabled for the logical replication slot.
      parallel-decode-num: 20// Number of parallel decoding channels. The maximum value is 20.
      white-table-list: ""// Database table whitelist.
      standby-connection: false// Force decoding on the standby node.
      decode-style: "j"// Decoding format.
      decoding: "mppdb_ decoding"// Tool for creating a logical replication slot.
      runnable_num: 1// Number of concurrent playbacks.
    mysql:
      driver: "com.mysql.cj.jdbc.Driver"
      host: "mysql_ip"
      port: "3306"
      user: "user"
      password: "password"
      database: "database
    ```

2.  Build the command.

    ```
    mvn clean package
    ```

3.  Run the command:

    ```
    java -jar ./reverse-migration-mysql-1.0-SNAPSHOT.jar start/create/drop
    ```

4.  Run the command with high performance.

    Run the following command on the Kunpeng-920 2P openEuler machine:

    ```
    numactl -c 0 -31 -m 0 java -Xms15G -Xmx25Gs -jar ./reverse-migration-mysql-1.0-SNAPSHOT.jar start/create/drop
    ```


## Uninstallation<a name="section1163973815516"></a>

The reverse-migration tool is an independent JAR package. You can delete the JAR package to uninstall the tool.

## Precautions <a name="section147831546105511"></a>

Reverse migration depends on the logical decoding capability of openGauss. For details about the restrictions, see [Logical Decoding Overview](https://docs.opengauss.org/en/docs/latest/docs/Developerguide/overview-100.html).
