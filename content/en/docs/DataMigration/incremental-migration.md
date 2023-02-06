# Incremental Migration<a name="EN-US_TOPIC_0000001347292416"></a>

## Function Description <a name="section41999541027"></a>

Incremental migration refers to the process of migrating incremental data generated during MySQL data migration (including full and incremental migration) to openGauss.

## Principles<a name="section75651553269"></a>

The open-source third-party software **mysql-binlog-connector-java** is used to parse the **binlog** of the MySQL database. Based on the principle of parallel replication between the primary and standby MySQL databases, multiple threads are used to replay parallel transactions on openGauss to implement online migration from the MySQL database to openGauss. The rule for determining parallel transactions is as follows: If the minimum sequence\_number of all transactions that are being replayed is greater than the last\_committed of the transaction, the transaction can be executed concurrently. This solution can strictly ensure the sequence and consistency of transactions.

## Feature Advantages<a name="section2124757135"></a>

The sysbench is used to perform a pressure test on MySQL. In the IUD hybrid scenario with 10 tables and 30 concurrent threads, the overall online migration performance can reach 30,000 TPS on the Kunpeng-920 2P openEuler machine.

## Procedure <a name="section102376152046"></a>

-   **Source Code Compilation**

1.  Run the following command to download the source code from the [code repository](https://gitee.com/opengauss/openGauss-tools-onlineMigration-mysql):

    ```
    git clone https://gitee.com/opengauss/openGauss-tools-onlineMigration-mysql.git
    ```

2.  Modify the configuration file. The configuration file is stored in **openGauss-tools-onlineMigration-mysql/mysql2openGauss/config.yml**.

    **Configuration File**: Configure the configuration file as follows:

    ```
    #openGauss config
    openGauss_conn:  
      host: "127.0.0.1"  
      port: "5432"  
      user: "opengauss"  
      password: "password123"  
      database: "postgres" 
    
    #mysql config
    mysql_conn:  
      host: "127.0.0.1"  
      port: "3306"  
      user: "mysql"  
      password: "password123"  
      database: "mysql"
    ```

3.  Compilation command.

    ```
    cd openGauss-tools-onlineMigration-mysql/mysql2openGauss/
    mvn clean package
    ```

4.  Run the following command:

    ```
    java -jar ./target/online-migration-mysql-3.1.0.jar
    ```

5.  Run the command with high performance. Run the following command on the Kunpeng-920 2P openEuler machine:

    ```
    numactl -C 0-31 -m 0 java -Xms15G -Xmx25G -jar ./target/online-migration-mysql-3.1.0.jar
    ```


-   **Running in Binary Mode**

1.  Download the package from the following link and decompress it:

    ```
    https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.1.0/tools/online-migration-mysql2openGauss-3.1.0.tar.gz
    tar -zxvf online-migration-mysql2openGauss-3.1.0.tar.gz
    ```

2.  Modify the configuration file. The configuration file is stored in **online-migration-mysql2openGauss-3.1.0/config.yml**.

    **Configuration File**: Configure the configuration file as follows:

    ```
    #openGauss config
    openGauss_conn:  
      host: "127.0.0.1"  
      port: "5432"  
      user: "opengauss"  
      password: "password123"  
      database: "postgres" 
    
    #mysql config
    mysql_conn:  
      host: "127.0.0.1"  
      port: "3306"  
      user: "mysql"  
      password: "password123"  
      database: "mysql"
    ```

3.  Run the following command:

    ```
    cd online-migration-mysql2openGauss-3.1.0
    java -jar ./online-migration-mysql-3.1.0.jar
    ```

4.  Run the command with high performance. Run the following command on the Kunpeng-920 2P openEuler machine:

    ```
    cd online-migration-mysql2openGauss-3.1.0
    numactl -C 0-31 -m 0 java -Xms15G -Xmx25G -jar ./online-migration-mysql-3.1.0.jar
    ```


## Precautions<a name="section2940149112912"></a>

-   Currently, incremental data generated by MySQL IUD operations (insert, update, and delete) can be migrated to openGauss.
-   MySQL DDL statements compatible with the openGauss database can be migrated. For incompatible DDL statements, an error will be reported during the migration. (openGauss is improving its compatibility with DDL statements.)
-   To ensure the sequence and consistency of transactions, settings such as skip\_event, limit\_table, skip\_table are not supported.
-   MySQL 5.7 or later is required.
-   The MySQL parameter must be set to **log\_bin=ON, binlog\_format=ROW, binlog\_row\_image=FULL, gtid\_mode = ON**.
-   Full migration is performed before incremental migration. Full migration can be performed using [Chameleon](https://gitee.com/opengauss/openGauss-tools-chameleon).
-   Incremental migration supports the following data types: numeric (int, tinyint, smallint, mediumint, bigint, float, double, decimal), character (char, varchar, and text), time (date, time, datetime, timestamp, year), and binary (binary, varbinary, and blob).