# gs\_plan\_simulator<a name="EN-US_TOPIC_0000001151403222"></a>

## Background<a name="section7471933144813"></a>

Maintenance personnel are not allowed to locate and analyze problems in the production environment of some users. Therefore, the only method for this scenario is to collect various data in the production environment and analyze and locate problems based on the collected data. gs\_plan\_simulator collects data related to execution plans and reproduces execution plans in other environments to locate problems related to execution plans.

## Prerequisites<a name="section1914195616334"></a>

-   The user database is running properly.
-   The user can connect to the database and execute functions properly.
-   The OS environment used for fault reproduction must be the same as the production environment.
-   The openGauss installation package used for fault reproduction must be the same as that used in the production environment.

## Precautions<a name="section15702145818480"></a>

-   The data collection function has been integrated into the gs\_collector tool. You need to use the gs\_collector tool to collect related data and then use the gs\_plan\_simulator tool to reproduce the execution plan.
-   When gs\_collector is used to collect data, data related to the execution plan is not collected by default because it may take a long time to collect such data. To collect execution plan data, you need to modify the configuration file. For details, see the procedure.
-   Configure  _GAUSSHOME_  and  _LD\_LIBRARY\_PATH_  in the reproduction environment.
-   Do not use this tool if the cluster status or scaling status affects the data related to the execution plan.

## Procedure<a name="section08371725192010"></a>

1.  Use gs\_collector to collect data. Before collecting execution plan data, you need to write a configuration file, for example,  **plan.json**. The content of the configuration file is recommended as follows:

    ```
    {
    "Collect":
    [
    {"TypeName": "Plan", "Content": "*", "Interval":"0", "Count":"1"}
    ]
    }
    ```

    **Content**  is set to  **\***  to collect data of all databases. You can also specify a database to collect data, for example,  **test1,test2**.

    The following is an example of the collection command:

    ```
    gs_collector --begin-time="20191219 15:00" --end-time="20191219 15:15" -C ../plan.json -l plan.log -o ./
    ```

    For details, see section  [gs\_collector](gs_collector.md).

2.  Copy the data folder to the reproduction environment.

    After the data collection is successful, the collected data is stored in the specified compressed package. Decompress the package to obtain the compressed package of each node. Decompress any compressed package. The target data is stored in the  **planSimulatorfiles**  folder. Go to the  **planSimulatorfiles**  folder and view the folder named after the database. Copy the  **planSimulatorfiles**  folder  to the reproduction environment.

3.  Configure the reproduction environment.
    1.  Create a directory for reproducing the execution plan as a common user. For example, the  **plan**  folder.
    2.  Decompress the GaussDB installation package in the directory, and then decompress the BIN file in the installation package.
    3.  Set  _GAUSSHOME_  to the path of the  **plan**  folder and  **LD\_LIBRARY\_PATH**  to the path of the  _plan/lib_  folder.

4.  Use gs\_plan\_simulator to reproduce the execution plan.

    Run the following command in the reproduction environment:

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m restore -p 39000 -A planSimulatorfiles/
    ```

    This command creates a database in the reproduction environment and the node port number is 39000. In addition, a message is displayed indicating how to connect to the database. You can run  **EXPLAIN** _SQL statement_  to locate the fault. For details about the command parameters, see parameter description.


## Syntax<a name="section1639811541193"></a>

-   Reproduce the database environment.

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m OPTION -p PORT -A DATADIR
    ```


-   Stop the database.

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m off
    ```

-   Start the database.

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m start
    ```


-   Display the help information.

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh --help
    ```


## Parameter Description<a name="section1990654815184"></a>

-   -m

    Specifies the operation to be performed by the tool.

    Value range:

    -   **restore**: uses the collected database information to reproduce the database environment and create a database.
    -   **off**: stops the database that is reproduced by the tool.
    -   **start**: starts the database that is reproduced by the tool.

-   -p

    Creates a node port for the database.

-   -A

    Specifies the data folder copied from the user environment.


