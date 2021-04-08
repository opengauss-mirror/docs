# X-Tuner: Parameter Optimization and Diagnosis<a name="EN-US_TOPIC_0000001138509455"></a>

## Availability<a name="section1145114551456"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section11132102216514"></a>

X-Tuner is a parameter tuning tool integrated into databases. It uses AI technologies such as deep reinforcement learning and global search algorithms to obtain the optimal database parameter settings without manual intervention. This function is not forcibly deployed with the database environment. It can be independently deployed and run without the database installation environment.

## Benefits<a name="section821115055213"></a>

This tool can quickly provide the parameter adjustment configuration of the current load in any scenario, reducing database administrator's manual intervention, improving the O&M effect, and meeting customer expectations.

## Description<a name="section144981815125"></a>

X-Tuner can run in any of the following modes:

-   **recommend**: Log in to the database using the specified user name, obtain the feature information about the running workload, and generate a parameter recommendation report based on the feature information. Report improper parameter settings and potential risks in the current database. Output the currently running workload behavior and characteristics. Output the recommended parameter settings. In this mode, the database does not need to be restarted. In other modes, the database may need to be restarted repeatedly.
-   **train**: Modify parameters and execute the benchmark based on the benchmark information provided by users. The reinforcement learning model is trained through repeated iteration so that you can load the model in  **tune**  mode for optimization.
-   **tune**: Use an optimization algorithm to tune database parameters. Currently, two types of algorithms are supported: deep reinforcement learning and global search algorithm \(global optimization algorithm\). The deep reinforcement learning mode requires  **train**  mode to generate the optimized model after training. However, the global search algorithm does not need to be trained in advance and can be directly used for search and optimization.

## Enhancements<a name="section94607311511"></a>

None

## Constraints<a name="section19941221059"></a>

-   The database is normal, the client can be properly connected, and data can be imported to the database. As a result, the optimization program can perform the benchmark test for optimization effect.
-   To use this tool, you need to specify the user who logs in to the database. The user who logs in to the database must have sufficient permissions to obtain sufficient database status information.
-   If you log in to the database host as a Linux user, add  _$GAUSSHOME_**/bin**  to the  _PATH _environment variable so that you can directly run database O&M tools, such as gsql, gs\_guc, and gs\_ctl.
-   The recommended Python version is Python 3.6 or later. The required dependency has been installed in the operating environment, and the optimization program can be started properly. You can install a Python 3.6+ environment independently without setting it as a global environment variable. You are not advised to install the tool as the root user. If you install the tool as the root user and run the tool as another user, ensure that you have the read permission on the configuration file.
-   This tool can run in three modes. In  **tune**  and  **train**  modes, you need to configure the benchmark running environment and import data. This tool will iteratively run the benchmark to check whether the performance is improved after the parameters are modified.
-   In  **recommend**  mode, you are advised to run the command when the database is executing the workload to obtain more accurate real-time workload information.
-   By default, this tool provides benchmark running script samples of TPC-C, TPC-H, TPC-DS, and sysbench. If you use the benchmarks to perform pressure tests on the database system, you can modify or configure the preceding configuration files. To adapt to your own service scenarios, you need to compile the script file that drives your customized benchmark based on the  **template.py**  file in the  **benchmark**  directory.

## Dependencies<a name="section10273171137"></a>

None

