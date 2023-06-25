# Examples<a name="EN-US_TOPIC_0303418332"></a>

X-Tuner supports three modes:  **recommend**  for obtaining parameter diagnosis reports,  **train**  for training reinforcement learning models, and  **tune**  for using an optimization algorithm. The preceding three modes are distinguished by command line parameters, and the details are specified in the configuration file.

## Configuring the Database Connection Information<a name="section1972314173514"></a>

Configuration items for connecting to a database in the three modes are the same. You can enter the detailed connection information in the command line or in the JSON configuration file. Both methods are described as follows:

1.  Entering the connection information in the command line

    Input the following options:  **--db-name --db-user --port --host --host-user**. The  **--host-ssh-port**  is optional. The following is an example:

    ```
    gs_dbmind component xtuner recommend --db-name postgres --db-user omm --port 5678 --host 192.168.1.100 --host-user omm
    ```

2.  Entering the connection information in the JSON configuration file

    Assume that the file name is  **connection.json**. The following is an example of the JSON configuration file:

    ```
    {
      "db_name": "postgres",  # Database name
      "db_user": "dba",       # Username for logging in to the database
      "host": "127.0.0.1",    # IP address of the database host
      "host_user": "dba",     # Username for logging in to the database host
      "port": 5432,           # Listening port number of the database
      "ssh_port": 22          # SSH listening port number of the database host
    }
    ```

    Input  **-f connection.json**.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>To prevent password leakage, the configuration file and command line parameters do not contain password information by default. After you enter the preceding connection information, the program prompts you to enter the database password and the OS login password in interactive mode.

## Example of Using the recommend Mode<a name="section17370104016614"></a>

The configuration item  **scenario**  takes effect for the recommend mode. If the value is  **auto**, the workload type is automatically detected.

Run the following command to obtain the diagnosis result:

```
gs_dbmind component xtuner recommend -f connection.json
```

The diagnosis report is generated as follows:

**Figure  1**  Report generated in recommend mode<a name="fig49748416171"></a>  
![](figures/report-generated-in-recommend-mode.png "report-generated-in-recommend-mode")

In the preceding report, the database parameter configurations in the environment are recommended, and a risk warning is provided. The report also generates the current workload features. The following features are for reference:

-   **temp\_file\_size**: number of generated temporary files. If the value is greater than 0, the system uses temporary files. If too many temporary files are used, the performance is poor. If possible, increase the value of  **work\_mem**.
-   **cache\_hit\_rate**: cache hit ratio of  **shared\_buffer**, indicating the cache efficiency of the current workload.
-   **read\_write\_ratio**: read/write ratio of database jobs.
-   **search\_modify\_ratio**: ratio of data query to data modification of a database job.
-   **ap\_index**: AP index of the current workload. The value ranges from 0 to 10. A larger value indicates a higher preference for data analysis and retrieval.
-   **workload\_type**: workload type, which can be AP, TP, or HTAP based on database statistics.
-   **checkpoint\_avg\_sync\_time**: average duration for refreshing data to the disk each time when the database is at the checkpoint, in milliseconds.
-   **load\_average**: average load of each CPU core in 1 minute, 5 minutes, and 15 minutes. Generally, if the value is about 1, the current hardware matches the workload. If the value is about 3, the current workload is heavy. If the value is greater than 5, the current workload is too heavy. In this case, you are advised to reduce the load or upgrade the hardware.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>- Some system catalogs keep recording statistics, which may affect load feature identification. Therefore, you are advised to clear the statistics of some system catalogs, run the workload for a period of time, and then use recommend mode for diagnosis to obtain more accurate results. To clear the statistics, run the following command: 
>
>  ```
>  select pg_stat_reset_shared('bgwriter');
>  select pg_stat_reset();
>  ```
>
>- In recommend mode, information in the **pg\_stat\_database** and **pg\_stat\_bgwriter** system catalogs in the database is read. Therefore, the database login user must have sufficient permissions. (You are advised to own the administrator permission which can be granted to *username* by running **alter user username sysadmin**.) 

## Example of Using the train Mode<a name="section15888321578"></a>

This mode is used to train the deep reinforcement learning model. The configuration items related to this mode are as follows:

-   **rl\_algorithm**: algorithm used to train the reinforcement learning model. Currently, this parameter can be set to  **ddpg**.
-   **rl\_model\_path**: path for storing the reinforcement learning model generated after training.
-   **rl\_steps**: maximum number of training steps in the training process.
-   **max\_episode\_steps**: maximum number of steps in each episode.
-   **scenario**: specifies the workload type. If the value is  **auto**, the system automatically determines the workload type. The recommended parameter tuning list varies according to the mode.
-   **tuning\_list**: specifies the parameters to be invoked. If no parameter is specified, the parameters to be invoked are automatically recommended based on the workload type. If parameters are specified,  **tuning\_list**  indicates the path of the tuning list file. The following is an example of the content of a tuning list configuration file:

    ```
    {
      "work_mem": {
        "default": 65536,
        "min": 65536,
        "max": 655360,
        "type": "int",
        "restart": false
      },
      "shared_buffers": {
        "default": 32000,
        "min": 16000,
        "max": 64000,
        "type": "int",
        "restart": true
      },
      "random_page_cost": {
        "default": 4.0,
        "min": 1.0,
        "max": 4.0,
        "type": "float",
        "restart": false
      },
      "enable_nestloop": {
        "default": true,
        "type": "bool",
        "restart": false
      }
    }
    ```


After the preceding configuration items are configured, run the following command to start the training:

```
gs_dbmind component xtuner train -f connection.json
```

After the training is complete, a model file is generated in the directory specified by the  **rl\_model\_path** configuration item.

## Example of Using the tune Mode<a name="section1487391316816"></a>

The tune mode supports a plurality of algorithms, including a DDPG algorithm based on reinforcement learning \(RL\), and a Bayesian optimization algorithm and a particle swarm algorithm \(PSO\) which are both based on a global optimization algorithm \(GOP\).

The configuration items related to the tune mode are as follows:

-   **tune\_strategy**: specifies the algorithm to be used for tuning. The value can be  **rl**\(using the reinforcement learning model\),  **gop**\(using the global optimization algorithm\), or  **auto**\(selected automatically\). If this parameter is set to **rl**, RL-related configuration items take effect. In addition to the preceding configuration items that take effect in train mode, the  **test\_episode** configuration item also takes effect. This configuration item indicates the maximum number of episodes in the tuning process. This parameter directly affects the execution time of the tuning process. Generally, a larger value indicates longer time consumption.
-   **gop\_algorithm**: specifies a global optimization algorithm. The value can be  **bayes**  or  **pso**.
-   **max\_iterations**: specifies the maximum number of iterations. A larger value indicates a longer search time and better search effect.
-   **particle\_nums**: specifies the number of particles. This parameter is valid only for the PSO algorithm.
-   For details about  **scenario** and **tuning\_list**, see the description of train mode.

After the preceding items are configured, run the following command to start tuning:

```
gs_dbmind component xtuner tune -f connection.json
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>Before using the  **tune**  or  **train**  mode, you need to import the data required by the benchmark and check whether the benchmark can run properly. After the optimization is complete, the optimization program automatically restores the database parameter settings.
