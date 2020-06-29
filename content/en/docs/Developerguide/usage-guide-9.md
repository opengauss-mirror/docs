# Usage Guide<a name="EN-US_TOPIC_0253059667"></a>

## Prerequisites<a name="section887921944913"></a>

The database is normal, the client is properly connected, and data is imported into the database so that the tuning program can perform a benchmark test to test the tuning effect. The required dependencies have been installed in the Python running environment and the tuning program can be started properly.

## Background<a name="section1767203555113"></a>

The tuning program is a tool independent of the database kernel. The usernames and passwords for the database and instances are required to control the benchmark performance test of the database. Before starting the tuning program, ensure that the interaction in the test environment is normal, the benchmark test script can be run properly, and the database can be connected properly.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the parameters to be tuned include the parameters that take effect only after the database is restarted, the database will be restarted multiple times during the tuning. Exercise caution when using this function if the database is running jobs.  

## Procedure<a name="section275518529540"></a>

1.  Configure the database security and verify that the client where the tuning program is located can access the server where the database instance is located.
2.  Import data \(such as TPC-C and TPC-H\) to the database instance and compile benchmarks that meet your service requirements based on the sample code provided by the tuning program. The benchmark instance script is stored in the benchmark directory. Manually verify that the benchmark can run properly and obtain stable test results. Record the test results for future comparison and tuning.
3.  When the database is running properly and is not used by other users, back up the existing parameters, modify the configuration file of the tuning parameter list \(the file path is in the  **knobs**  directory, and the default configuration file is  **knobs\_htap.py**\), and set the parameters to be tuned and their ranges.
4.  Enter the database connection information, set the current tuning mode to  **train**  or  **tune**, and start the parameter tuning program. For example, enter the information in the X-Tuner root directory.

    python main.py -m train --db-name postgres\\

    --db-user dba --port 1234 \\

    --host 192.168.1.2 --host-user opengauss\\

    --benchmark tpcc --model-path mymodel

5.  If the training mode is used, the trained model is output and the program exits. If the tuning mode is used, the tuned optimal parameter list is output and the program exits. You can determine whether to modify the parameters based on the tuning result and manually set them to the recommended values or reset them to the values before the tuning.

