# Preparations<a name="EN-US_TOPIC_0303986164"></a>

## Prerequisites and Precautions<a name="en-us_topic_0283137591_section887921944913"></a>

-   The database is running properly.
-   During the running of the tool, if the system time is tampered with, the slow SQL data collection may fail.
-   The tool does not support data collection on the standby node.
-   If you log in to the database host as a Linux user, add  **$GAUSSHOME/bin**  to the  _PATH _environment variable so that you can directly run database O&M tools, such as gsql, gs\_guc, and gs\_ctl.
-   The recommended Python version is Python 3.6 or later. The required dependency has been installed in the operating environment, and the optimization program can be started properly.
-   This tool consists of the agent and detector. Data is transmitted between the agent and detector in HTTP or HTTPS mode. Therefore, ensure that the agent server can communicate with the detector server properly.
-   The detector module runs the collector and monitor services, which need to be started separately.
-   If HTTPS is used for communication, you need to prepare the CA certificate, and certificates and keys of the agent and detector, and save them to  **ca**,  **agent**, and  **collector**  in the  **root **directory of the project, respectively. In addition, you need to save the key encryption password to  **pwf**  of the certificate, and set the permission to  **600**  to prevent other users from performing read and write operations. You can also use the script in the  **share **directory to generate certificates and keys.
-   You are advised to configure your own Python environment to avoid affecting other functions \(for example, using miniconda\).
-   To analyze the root cause of slow SQL statements, you need the WDR report. In this case, you need to set  **track\_stmt\_stat\_level**  to  **'OFF,L1'**  and  **log\_min\_duration\_statement**  to  **3000**  \(slow SQL threshold, which can be set as required\). The unit is ms.
-   If the detecor and database are deployed on the same server, the service port of the collector cannot be the same as the local port of the database. Otherwise, the process cannot be started.

## Principles<a name="en-us_topic_0283137591_section1767203555113"></a>

**Figure  1**  anomaly\_detection structure<a name="fig1933719505315"></a>  
![](figures/anomaly_detection-structure.png "anomaly_detection-structure")

anomaly\_detection is a tool independent of the database kernel. Figure 1 shows the anomaly\_detection structure. The anomaly\_detection tool consists of the agent and detector modules.

-   Agent: data agent module, which consists of the source, channel, and sink. It collects metrics in the database and sends the metrics to the remote detector in HTTP or HTTPS mode.
-   Detector: collects and stores data pushed by the agent, monitors and detects database metrics based on algorithms such as time series forecast and exception detection, and provides root cause analysis on slow SQL statements.

## Running and Installation of anomaly\_detection<a name="section7752113811419"></a>

1.  Switch to the  **anomaly\_detection **directory. For the openGauss community code, the path is  **openGauss-server/src/gausskernel/dbmind/tools/anomaly\_detection**. For an installed database system, the source code path is  **$GAUSSHOME/bin/dbmind/anomaly\_detection**.
2.  You can view the  **requirements.txt**  file in the current directory. Use the pip package management tool to install the dependency based on the  **requirements.txt**  file.

    ```
    pip install -r requirements.txt
    ```

3.  After the installation is successful, run  **main.py**. For example, to obtain the help information, run the following command:

    ```
    python main.py --help # Obtain help information. The methods of using other functions are similar.
    ```


## Description of the anomaly\_detection Configuration File<a name="section5892154973918"></a>

The  **a-detection.conf **and  **metric\_task.conf **configuration files need to be loaded before  **anomaly\_detection**  is executed. You can run the  **python main.py --help**  command to view the configuration file path.

**a-detection.conf**  contains six sections: agent, server, database, security, forecast, and log. The parameters are described as follows:

```
[database]
storage_duration = 12H  # Data storage duration. The default value is 12 hours.
database_dir = ./data  # Data storage directory

[security]
tls = False
ca = ./certificate/ca/ca.crt
server_cert = ./certificate/server/server.crt
server_key = ./certificate/server/server.key
agent_cert = ./certificate/agent/agent.crt
agent_key = ./certificate/agent/agent.key

[server]
host = 0.0.0.0  # IP address of the server
listen_host = 0.0.0.0
listen_port = 8080
white_host = 0.0.0.0  # IP address whitelist
white_port = 8000  # Port number whitelist

[agent]
source_timer_interval = 10S  #  Agent data collection frequency
sink_timer_interval = 10S  # Agent data sending frequency
channel_capacity = 1000  # Maximum length of the buffer queue
db_host = 0.0.0.0  # IP address of the agent node
db_port = 8080  # Port number of the agent node
db_type = single # Agent node type. The value can be single (single node), cn (CN), or dn (DN).

[forecast]
forecast_alg = auto_arima  # Time series prediction algorithm. The value can be auto_arima or fbprophet (You need to install by yourself).
[log]
log_dir = ./log  # Log file location
```

**metric\_task.conf**: This configuration file contains three sections:  **detector\_method**,  **os\_exporter**, and  **trend\_parameter**. The parameters are described as follows:

```
[detector_method]
trend = os_exporter # Name of the table used for time series prediction
slow_sql = wdr # Name of the table for slow SQL diagnosis

[os_exporter]
cpu_usage_minimum = 1 # Lower limit of CPU usage
cpu_usage_maximum = 10 # Upper limit of CPU usage
memory_usage_minimum = 1 # Lower limit of memory usage
memory_usage_maximum = 10 # Upper limit of memory usage
io_read_minimum = 1
io_read_maximum = 10
io_write_minimum = 1
io_write_maximum = 10
io_wait_minimum = 1
io_wait_maximum = 10
disk_space_minimum = 1
disk_space_maximum = 10

[common_parameter]
data_period = 1000S # Length of historical data used for time series forecast. The value can be an integer plus the time unit (for example, 100S, 2M, and 10D).
interval = 20S # Monitoring interval
freq = 3S # Trend forecast frequency
period = 2 # Trend forecast period
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The following time units are supported:
>    -   **'S'**: second
>    -   **'M'**: minute
>    -   **'H'**: hour
>    -   **'D'**: day
>    -   **'W'**: week
>-   At least one of  **minimum **and  **maximum **must be provided.
>-   **freq**  and  **period**  determine the time series forecast result. For example, if  **freq**  is set to  **2S**  and  **period**  is set to  **5**, the values of future 2s, 4s, 6s, 8s, and 10s will be forecasted.
>-   Ensure that the training data length is greater than the forecasting length. Otherwise, the forecasting effect will be affected.

