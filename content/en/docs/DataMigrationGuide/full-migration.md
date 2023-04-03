# Full Migration<a name="EN-US_TOPIC_0000001397932673"></a>

## Function Description <a name="section051261814117"></a>

Chameleon is a real-time replication tool written in Python3 to migrate data from MySQL to openGauss. It supports full replication of initial data and real-time online replication of subsequent incremental data. Chameleon pulls all MySQL data to openGauss in read-only mode through initial configuration. Data can be concurrently migrated between tables in the same snapshot.

Full migration supports tables, table data, views, triggers, user-defined functions, and stored procedures.

## Feature Advantages<a name="section9194174261317"></a>

Based on the sysbench test model, on the Kunpeng-920 2P server, when the data volume of 10 tables in the MySQL database is greater than 3 million, Chameleon uses 10 concurrent data migration tasks to migrate data to openGauss. The overall full migration performance can reach 300 MB/s or higher.

## Environment Preparation<a name="section425318254413"></a>

ARM+openEuler 20.03 or x86+CentOS 5.7

## Installing Chameleon<a name="section1912981915448"></a>

-   **Installing using WHL**
    1.  Download the installation package. Download address: [https://opengauss.obs.cn-south-1.myhuaweicloud.com/5.0.0/chameleon/chameleon-1.0.0-py3-none-any.whl](https://gitee.com/link?target=https%3A%2F%2Fopengauss.obs.cn-south-1.myhuaweicloud.com%2Flatest%2Fchameleon%2Fchameleon-1.0.0-py3-none-any.whl). After the installation package is downloaded, install it in the Python virtual environment.
    2.  Run the following commands to create and activate the Python virtual environment:

        ```
        python3 -m venv venv
        source venv/bin/activate
        ```

    3.  Run the pip command to install the Chameleon tool:

        ```
        pip3 install ./chameleon-1.0.0-py3-none-any.whl
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >-   During the installation, other libraries on which the tool depends are automatically installed. Ensure that the pip of the local host can download and install related dependencies. The dependent libraries and versions are as follows:
        >    -   PyMySQL\>=0.10.0, <1.0.0
        >    -   argparse\>=1.2.1
        >    -   mysql-replication\>=0.22
        >    -   py-opengauss\>=1.3.1
        >    -   PyYAML\>=5.1.2
        >    -   tabulate\>=0.8.1
        >    -   daemonize\>=2.4.7
        >    -   rollbar\>=0.13.17
        >    -   geomet\>=0.3.0
        >    -   mysqlclient\>=2.1.1
        >-   To install MySQL client, you need to use yum to install mysql-devel. You can directly run the **yum install mysql-devel** command.


-   **Installing using source code**
    1.  Run the git command to download the source code:

        ```
        git clone git@gitee.com:opengauss/openGauss-tools-chameleon.git
        ```

    2.  Create and activate a Python virtual environment.

        ```
        python3 -m venv venv
        source venv/bin/activate
        ```

    3.  Go to the code directory and run the **python install** command to install the Python.

        ```
        cd openGauss-tools-chameleon
        python3 setup.py install
        ```

        After the installation is complete, do not exit the Python virtual environment. You can use the chameleon tool.



## Full Migration<a name="section024513334448"></a>

1.  Create a configuration file directory.
    1.  Go to the Python virtual environment and install the chameleon tool.
    2.  Run the following command to create the chameleon configuration file directory:

        ```
        chameleon set_configuration_files
        ```

        After this command is executed, the default configuration file template is created in the **\~/.pg\_chameleon/configuration** directory.

    3.  Run the following command to copy the default configuration file template and save it as **default.yml**:

        ```
        cd ~/.pg_chameleon/configuration
        cp config-example.yml default.yml
        ```

    4.  Modify the **default.yml** configuration file as required. Example content of the configuration file:

        ```
        # global settings
        pid_dir: '~/.pg_chameleon/pid/'
        log_dir: '~/.pg_chameleon/logs/'
        log_dest: file
        log_level: info
        log_days_keep: 10
        rollbar_key: ''
        rollbar_env: ''
        \# type_override allows the user to override the default type conversion
        \# into a different one.
        type_override:
        "tinyint(1)":
        override_to: boolean
        override_tables:
        \- "*"
        \# postgres destination connection
        pg_conn:
        host: "1.1.1.1"
        port: "5432"
        user: "opengauss_test"
        password: "password_123"
        database: "opengauss_database"
        charset: "utf8"
        sources:
        mysql:
        readers: 4
        writers: 4
        db_conn:
        host: "1.1.1.1"
        port: "3306"
        user: "mysql_test"
        password: "password123"
        charset: 'utf8'
        connect_timeout: 10
        schema_mappings:
        mysql_database:sch_mysql_database
        limit_tables:
        skip_tables:
        grant_select_to:
        \- usr_migration
        lock_timeout: "120s"
        my_server_id: 1
        replica_batch_size: 10000
        replay_max_rows: 10000
        batch_retention: '1 day'
        copy_max_memory: "300M"
        copy_mode: 'file'
        out_dir: /tmp
        sleep_loop: 1
        on_error_replay: continue
        on_error_read: continue
        auto_maintenance: "disabled"
        gtid_enable: false
        type: mysql
        keep_existing_schema: No
        migrate_default_value: Yes
        ```

        The meanings of the parameters in the preceding configuration files are as follows:

        -   During data migration, the user name and password used by the MySQL database are mysql\_test and password123, respectively. The IP address and port number of the MySQL server are 1.1.1.1 and 3306, respectively. The database to be migrated is mysql\_database.
        -   The user name and password used on openGauss are opengauss\_test and password\_123, respectively. The IP address and port number of the openGauss server are 1.1.1.1 and 5432, respectively. The target database is opengauss\_database. The sch\_mysql\_database schema is created in opengauss\_database, all tables to be migrated are in this schema.

        Note that the user must have the permission to remotely connect to MySQL and openGauss as well as the read and write permissions on the corresponding databases. For openGauss, the host where Chameleon runs must be in the remote access whitelist of openGauss. For MySQL, the user must have the **RELOAD**, **REPLICATION CLIENT**, and **REPLICATION SLAVE** permissions.

2.  Initialize the migration process.

    ```
    chameleon create_replica_schema --config default
    chameleon add_source --config default --source mysql
    ```

    In this step, an auxiliary schema and table are created for the replication process in openGauss.

3.  Copy basic data.

    ```
    chameleon init_replica --config default --source mysql
    ```

    After this step is complete, the current full data in the MySQL database is copied to openGauss. You can view the replication result in openGauss.

4.  Copy database objects.

    Chameleon can migrate views, triggers, user-defined functions, and stored procedures from MySQL to openGauss. If logs do not need to be output to the console, delete the **--debug** parameter.

    -   Copy a view.

        ```
        chameleon start_view_replica --config default --source mysql --debug
        ```

    -   Copy a trigger.

        ```
        chameleon start_trigger_replica --config default --source mysql --debug
        ```

    -   Copy a user-defined function.

        ```
        chameleon start_func_replica --config default --source mysql --debug
        ```

    -   Copy a stored procedure.

        ```
        chameleon start_proc_replica --config default --source mysql --debug
        ```

    You can view the records of migrated objects in the object migration information table sch\_chameleon.t\_replica\_object. The following table describes columns in the t\_replica\_object table.

    **Table 1** Columns in the sch\_chameleon.t\_replica\_object table

    <a name="table1628815424369"></a>
    <table><thead align="left"><tr id="row132891142143618"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p82891142123616"><a name="p82891142123616"></a><a name="p82891142123616"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p7289194243616"><a name="p7289194243616"></a><a name="p7289194243616"></a>Type </p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p142898422361"><a name="p142898422361"></a><a name="p142898422361"></a>Description </p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row12290174223611"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p595755414379"><a name="p595755414379"></a><a name="p595755414379"></a>i_id_object</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p156702053810"><a name="p156702053810"></a><a name="p156702053810"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p182911042153614"><a name="p182911042153614"></a><a name="p182911042153614"></a>ID.</p>
    </td>
    </tr>
    <tr id="row5291164223612"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3958155412373"><a name="p3958155412373"></a><a name="p3958155412373"></a>i_id_source</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p067010063815"><a name="p067010063815"></a><a name="p067010063815"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p440151712381"><a name="p440151712381"></a><a name="p440151712381"></a>ID corresponding to sch_schema.t_sources.</p>
    </td>
    </tr>
    <tr id="row13291124223617"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1995814544375"><a name="p1995814544375"></a><a name="p1995814544375"></a>en_object_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1567130153819"><a name="p1567130153819"></a><a name="p1567130153819"></a>Enumerated type </p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p57763514389"><a name="p57763514389"></a><a name="p57763514389"></a>Type of the migrated object. The value can be VIEW, TRIGGER, FUNC, or PROC.</p>
    </td>
    </tr>
    <tr id="row4293174217361"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p139581654173714"><a name="p139581654173714"></a><a name="p139581654173714"></a>ts_created</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p26713018385"><a name="p26713018385"></a><a name="p26713018385"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1988915515387"><a name="p1988915515387"></a><a name="p1988915515387"></a>Migration time.</p>
    </td>
    </tr>
    <tr id="row72934424366"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1395935418376"><a name="p1395935418376"></a><a name="p1395935418376"></a>b_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19671150133814"><a name="p19671150133814"></a><a name="p19671150133814"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1329474203619"><a name="p1329474203619"></a><a name="p1329474203619"></a>Migration status. **true** indicates that the migration is successful, and **false** indicates that the migration fails.</p>
    </td>
    </tr>
    <tr id="row10294174218363"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14959145463712"><a name="p14959145463712"></a><a name="p14959145463712"></a>t_src_object_sql</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13671204382"><a name="p13671204382"></a><a name="p13671204382"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1564759173911"><a name="p1564759173911"></a><a name="p1564759173911"></a>Original SQL statement.</p>
    </td>
    </tr>
    <tr id="row3294134283610"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13959185419379"><a name="p13959185419379"></a><a name="p13959185419379"></a>t_dst_object_sql</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1167112012387"><a name="p1167112012387"></a><a name="p1167112012387"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1178718227399"><a name="p1178718227399"></a><a name="p1178718227399"></a>Translated statement. If the translation fails or an error occurs during the translation, the columns that are not supported by openGauss are commented out.</p>
    <div class="note" id="note16512411194411"><a name="note16512411194411"></a><a name="note16512411194411"></a><span class="notetitle"> Note: </span><div class="notebody"><p id="p9512181111441"><a name="p9512181111441"></a><a name="p9512181111441"></a>You can view the translation of database objects in either of the following ways: </p>
    <a name="ul86092483443"></a><a name="ul86092483443"></a><ul id="ul86092483443"><li>Go to the <a href="https://gitee.com/opengauss/openGauss-tools-sql-translator" target="_blank" rel="noopener noreferrer">openGauss-tools-sql-translator</a> repository to learn about the translation of database objects. </li><li>You can learn about the translation of database objects through Chameleon logs. Chameleon logs include logs generated during translation and migration.</li></ul>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>

5.  End the replication process and clear resources.

    ```
    chameleon stop_replica --config default --source mysql
    chameleon detach_replica --config default --source mysql
    chameleon drop_replica_schema --config default
    ```

    The creation and verification of foreign keys and the reset sequence\(serial\) are performed in the detach\_replica phase.


## Uninstalling Chameleon<a name="section11499164634415"></a>

This tool is written in Python. You only need to delete the corresponding source code and venv environment to uninstall the tool.

## Example<a name="section136463365474"></a>

Example of migrating user-defined functions.

```
--Create two user-defined functions on the MySQL database.
create function mysql_func1(s char(20)) returns char(50) deterministic return concat('mysql_func1, ',s,'!')
create function mysql_func2(x smallint unsigned, y smallint unsigned) returns smallint deterministic BEGIN DECLARE a, b SMALLINT UNSIGNED DEFAULT 10; SET a = x, b = y; RETURN a+b; END;
--Migrate user-defined functions.
chameleon start_func_replica --config default --source mysql --debug
--The user-defined functions on the MySQL database have been successfully migrated. Query the sch_chameleon.t_replica_object table to obtain the migration information about the user-defined function. Note that the value of en_object_type is in uppercase.
select * from sch_chameleon.t_replica_object where en_object_type='FUNC';
```
