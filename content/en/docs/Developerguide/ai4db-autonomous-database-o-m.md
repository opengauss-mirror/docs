# AI4DB: Autonomous Database O&M<a name="EN-US_TOPIC_0000001243723307"></a>

As mentioned above, AI4DB is mainly used for autonomous O&M and management of databases, helping database O&M personnel reduce O&M workload. In implementation, the AI4DB framework of DBMind is monitored and service-oriented. It also provides instant AI toolkits and out-of-the-box AI O&M functions \(such as index recommendation\). AI4DB mainly uses the open-source Prometheus for monitoring. DBMind provides a monitoring data producer exporter, which can be interconnected with the Prometheus platform. The following figure shows the AI4DB service architecture of DBMind.

**Figure  1**  AI4DB service architecture of DBMind<a name="fig1555795823612"></a>  
![](figures/ai4db-service-architecture-of-dbmind.png "ai4db-service-architecture-of-dbmind")

Key components in the figure are described as follows:

-   DBMind Service: DBMind background service, which can be used for periodic offline computing, including slow SQL root cause analysis and time series prediction.
-   Prometheus-server: server for storing Prometheus monitoring metrics.
-   metadatabase: After the offline computing is complete, DBMind stores the computing result. Databases such as openGauss and SQLite are supported.
-   client: client used to read the DBMind offline computing results. Currently, only the CLI client is supported. If databases such as openGauss are used to store and calculate the DBMind computing results, you can configure visualization tools such as Grafana to visualize the results.
-   openGauss-exporter: collects monitoring metrics from the openGauss database nodes for DBMind to calculate.
-   node-exporter: exporter provided by Prometheus, which can be used to monitor system metrics of the node, such as CPU and memory usage.
-   reprocessing-exporter: processes metrics collected by Prometheus, for example, calculating the CPU usage.

## Environment Configuration<a name="section14906112131913"></a>

DBMind must run on Python 3.6 or later. The required third-party dependency packages are recorded in the  **requirements.txt**  file \(**requirements-x86.txt**  or  **requirements-arch64.txt**, depending on the platform type\) in the AI function root directory \(_$GAUSSHOME_**/bin/dbmind**\). You can run the  **pip install**  command to install the dependencies. For example:

```
pip install requirements-x86.txt
```

If you do not install all required dependencies, the system will prompt you to install third-party dependencies when you run the  **gs\_dbmind**  command. Note that this file provides the third-party dependencies required by DBMind. If a third-party package conflict exists in the user environment, you can handle the problem based on the actual situation.

-   **[DBMind Mode](dbmind-mode.md)**  

-   **[Components that Support DBMind](components-that-support-dbmind.md)**  

-   **[AI Sub-functions of the DBMind](ai-sub-functions-of-the-dbmind.md)**  


