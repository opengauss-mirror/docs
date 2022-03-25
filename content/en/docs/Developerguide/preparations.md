# Preparations<a name="EN-US_TOPIC_0289900288"></a>

## Prerequisites and Precautions<a name="en-us_topic_0283137591_section887921944913"></a>

-   The database status is normal; the client can be properly connected; and data can be imported to the database. As a result, the optimization program can perform the benchmark test for optimization effect.
-   To use this tool, you need to specify the user who logs in to the database. The user who logs in to the database must have sufficient permissions to obtain sufficient database status information.
-   If you log in to the database host as a Linux user, add  **$GAUSSHOME/bin**  to the  _PATH _environment variable so that you can directly run database O&M tools, such as gsql, gs\_guc, and gs\_ctl.
-   This tool can run in three modes. In  **tune**  or  **train**  mode, you must configure the benchmark running environment and import data. This tool will iteratively run the benchmark to check whether the performance is improved after the parameters are modified.
-   In  **recommend**  mode, you are advised to run the command when the database is executing the workload to obtain more accurate real-time workload information.
-   By default, this tool provides benchmark running script samples of TPC-C, TPC-H, TPC-DS, and sysbench. If you use the benchmarks to perform pressure tests on the database system, you can modify or configure the preceding configuration files. To adapt to your own service scenarios, you need to compile the script file that drives your customized benchmark based on the  **template.py**  file in the  **benchmark**  directory.

## Principles<a name="en-us_topic_0283137591_section1767203555113"></a>

The tuning program is a tool independent of the database kernel. The usernames and passwords for the database and instances are required to control the benchmark performance test of the database. Before starting the tuning program, ensure that the interaction in the test environment is normal, the benchmark test script can be run properly, and the database can be connected properly.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If the parameters to be tuned include the parameters that take effect only after the database is restarted, the database will be restarted multiple times during the tuning. Exercise caution when using  **train**  and  **tune**  modes if the database is running jobs.

X-Tuner can run in any of the following modes:

-   **recommend**: Log in to the database using the specified username, obtain the feature information about the running workload, and generate a parameter recommendation report based on the feature information. Report improper parameter settings and potential risks in the current database. Output the currently running workload behavior and characteristics. Output the recommended parameter settings. In this mode, the database does not need to be restarted. In other modes, the database may need to be restarted repeatedly.
-   **train**: Modify parameters and execute the benchmark based on the benchmark information provided by users. The reinforcement learning model is trained through repeated iteration so that you can load the model in  **tune**  mode for optimization.
-   **tune**: Use an optimization algorithm to tune database parameters. Currently, two types of algorithms are supported: deep reinforcement learning and global search algorithm \(global optimization algorithm\). The deep reinforcement learning mode requires  **train**  mode to generate the optimized model after training. However, the global search algorithm does not need to be trained in advance and can be directly used for search and optimization.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If the deep reinforcement learning algorithm is used in  **tune**  mode, a trained model must be available, and the parameters for training the model must be the same as those in the parameter list \(including max and min\) for tuning.

**Figure  1**  X-Tuner structure<a name="fig137427353816"></a>  
![](figures/x-tuner-structure.png "x-tuner-structure")

[Figure 1](#fig137427353816)  shows the overall architecture of the X-Tuner. The X-Tuner system can be divided into the following parts:

-   DB: The DB\_Agent module is used to abstract database instances. It can be used to obtain the internal database status information and current database parameters and set database parameters. The SSH connection used for logging in to the database environment is included on the database side.
-   Algorithm: algorithm package used for tuning, including global search algorithms \(such as Bayesian optimization and particle swarm optimization\) and deep reinforcement learning \(such as DDPG\).
-   X-Tuner: The main logic module is encapsulated by the environment module. Each step is a tuning process. The entire tuning process is iterated through multiple steps.
-   Benchmark: a user-specified benchmark performance test script, which is used to run benchmark jobs. The benchmark result reflects the performance of the database system.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Ensure that the larger the benchmark script score is, the better the performance is.
>For example, for the benchmark used to measure the overall execution duration of SQL statements, such as TPCH, the inverse value of the overall execution duration can be used as the benchmark score.

## Installing and Running X-Tuner<a name="en-us_topic_0283137591_section275518529540"></a>

Run the following command to obtain the help information about the X-Tuner function:

```
gs_dbmind component xtuner --help 
```

You can specify different commands to obtain the corresponding help information.

## Description of the X-Tuner Configuration File<a name="section5892154973918"></a>

Before running the X-Tuner, you need to load the configuration file. You can run the  **--help**  command to view the absolute path of the configuration file that is loaded by default.

```
...  
 -x TUNER_CONFIG_FILE, --tuner-config-file TUNER_CONFIG_FILE
                        This is the path of the core configuration file of the
                        X-Tuner. You can specify the path of the new
                        configuration file. The default path is /path/to/xtuner/xtuner.conf.
                        You can modify the configuration file to control the
                        tuning process.
...
```

You can modify the configuration items in the configuration file as required to instruct the X-Tuner to perform different actions. For details about the configuration items in the configuration file, see  [Table 2](command-reference-3.md#table10217184512711). If you need to change the loading path of the configuration file, you can specify the path through the  **-x**  command line option.

## Benchmark Selection and Configuration<a name="section11685014422"></a>

The benchmark driver script is stored in the benchmark subdirectory of the X-Tuner directory \(_$GAUSSHOME_**/bin/dbmind/components/xtuner**\). X-Tuner provides common benchmark driver scripts, such as time-based detection script \(default\), TPC-C, and TPC-H. The X-Tuner invokes the  **get\_benchmark\_instance\(\)**  command in the  **benchmark/\_\_init\_\_.py**  file to load different benchmark driver scripts and obtain benchmark driver instances. The format of the benchmark driver script is described as follows:

-   Benchmark driver script name uniquely identifies the driver script. You can specify the benchmark driver script to be loaded by setting  **benchmark\_script**  in the configuration file of the X-Tuner.
-   The driver script contains the  _path_  variable,  _cmd_  variable, and the  **run**  function.

The following describes the three elements of the driver script:

1.  _path_: path for storing the benchmark driver script. You can modify the path in the driver script or specify the path by setting the  **benchmark\_path**  configuration item in the configuration file.
2.  _cmd_: command for executing the benchmark driver script. You can modify the command in the driver script or specify the command by setting the  **benchmark\_cmd**  configuration item in the configuration file. Placeholders can be used in the text of cmd to obtain necessary information for running cmd commands. For details, see the TPC-H driver script example. These placeholders include:
    -   \{_host_\}: IP address of the database host
    -   \{_port_\}: listening port number of the database instance
    -   \{_user_\}: username for logging in to the database
    -   \{_password_\}: password of the user who logs in to the database system
    -   \{_db_\}: name of the database that is being optimized

3.  **run**: The signature of this function is as follows:

    ```
    def run(remote_server, local_host) -> float:
    ```

    The returned data type is float, indicating the evaluation score after the benchmark is executed. A larger value indicates better performance. For example, the TPC-C test result tpmC can be used as the returned value, the inverse number of the total execution time of all SQL statements in TPC-H can also be used as the return value. A larger return value indicates better performance.

    The  _remote\_server_  variable is the shell command line interface transferred by the X-Tuner program to the remote host \(database host machine\) used by the script. The  _local\_host_  variable is the shell command line interface of the local host \(host where the X-Tuner script is executed\) transferred by the X-Tuner program. Methods provided by the preceding shell command interface include:

    ```
    exec_command_sync(command, timeout)
    Function: This method is used to run the shell command on the host.
    Parameter list:
    command: The data type can be str, and the element can be a list or tuple of the str type. This parameter is mandatory.
    timeout: The timeout interval for command execution in seconds. This parameter is optional.
    Return value:
    Returns 2-tuple (stdout and stderr). stdout indicates the standard output stream result, and stderr indicates the standard error stream result. The data type is str.
    ```

    ```
    exit_status
    Function: This attribute indicates the exit status code after the latest shell command is executed.
    Note: Generally, if the exit status code is 0, the execution is normal. If the exit status code is not 0, an error occurs.
    ```


Benchmark driver script example:

1.  TPC-C driver script

    ```
    from tuner.exceptions import ExecutionError
    
    # WARN: You need to download the benchmark-sql test tool to the system,
    # replace the PostgreSQL JDBC driver with the openGauss driver,
    # and configure the benchmark-sql configuration file.
    # The program starts the test by running the following command:
    path = '/path/to/benchmarksql/run' # Path for storing the TPC-C test script benchmark-sql
    cmd = "./runBenchmark.sh props.gs"  # Customize a benchmark-sql test configuration file named props.gs.
    
    
    def run(remote_server, local_host):
        # Switch to the TPC-C script directory, clear historical error logs, and run the test command.
         # You are advised to wait for several seconds because the benchmark-sql test script generates the final test report through a shell script. The entire process may be delayed.
        # To ensure that the final tpmC value report can be obtained, wait for 3 seconds.
        stdout, stderr = remote_server.exec_command_sync(['cd %s' % path, 'rm -rf benchmarksql-error.log', cmd, 'sleep 3'])
        # If there is data in the standard error stream, an exception is reported and the system exits abnormally.
        if len(stderr) > 0:
            raise ExecutionError(stderr)
    
        # Find the final tpmC result.
        tpmC = None
        split_string = stdout.split()  # Split the standard output stream result.
        for i, st in enumerate(split_string):
             # In the benchmark-sql of version 5.0, the value of tpmC is the last two digits of the keyword (NewOrders). In normal cases, the value of tpmC is returned after the keyword is found.
            if "(NewOrders)" in st:
                tpmC = split_string[i + 2]
                break
        stdout, stderr = remote_server.exec_command_sync(
            "cat %s/benchmarksql-error.log" % path)
        nb_err = stdout.count("ERROR:")  # Check whether errors occur during the benchmark running and record the number of errors.
        return float(tpmC) - 10 * nb_err  # The number of errors is used as a penalty item, and the penalty coefficient is 10. A higher penalty coefficient indicates a larger number of errors.
    
    ```

2.  TPC-H driver script

    ```
    import time
    
    from tuner.exceptions import ExecutionError
    
    # WARN: You need to import data into the database and SQL statements in the following path will be executed.
    # The program automatically collects the total execution duration of these SQL statements.
    path = '/path/to/tpch/queries'  # Directory for storing SQL scripts used for the TPC-H test
    cmd = "gsql -U {user} -W {password} -d {db} -p {port} -f {file}"  # The command for running the TPC-H test script. Generally, gsql -f script file is used.
    
    
    def run(remote_server, local_host):
        # Traverse all test case file names in the current directory.
        find_file_cmd = "find . -type f -name '*.sql'"
        stdout, stderr = remote_server.exec_command_sync(['cd %s' % path, find_file_cmd])
        if len(stderr) > 0:
            raise ExecutionError(stderr)
        files = stdout.strip().split('\n')
        time_start = time.time()
        for file in files:
            # Replace {file} with the file variable and run the command.
            perform_cmd = cmd.format(file=file)
            stdout, stderr = remote_server.exec_command_sync(['cd %s' % path, perform_cmd])
            if len(stderr) > 0:
                print(stderr)
        # The cost is the total execution duration of all test cases.
        cost = time.time() - time_start
        # Use the inverse number to adapt to the definition of the run function. The larger the returned result is, the better the performance is.
        return - cost
    ```


