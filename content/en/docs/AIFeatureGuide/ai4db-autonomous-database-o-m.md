# AI4DB: Autonomous Database O&M<a name="EN-US_TOPIC_0000001243723307"></a>

As mentioned above, AI4DB is primarily used for autonomous O&M and management of databases, helping database administrators reduce their workload. In practice, the AI4DB framework in DBMind is monitoring- and service-oriented. It also provides an instant AI toolkit, offering out-of-the-box AI O&M features \(such as index recommendation\). AI4DB mainly uses the open-source Prometheus for monitoring, with DBMind providing an exporter to produce monitoring data, which integrates with the Prometheus platform. The following figure illustrates the AI4DB service architecture in DBMind.

**Figure  1**  AI4DB service architecture of DBMind<a name="fig1555795823612"></a>  
![](figures/ai4db-service-architecture-of-dbmind.png "ai4db-service-architecture-of-dbmind")

Description of key components in the figure:

-   DBMind Service: The background service of DBMind, used for periodic offline computations, including slow SQL root cause analysis and time series forecasting.
-   Prometheus-server: The server responsible for storing Prometheus monitoring metrics.
-   metadatabase: After offline computations are complete, DBMind stores the results here. Supported databases include openGauss, SQLite, and others.
-   client: The client used to retrieve offline computation results from DBMind, currently only available as a command-line interface (CLI) client. If databases like openGauss are used to store DBMind's computation results, users can configure visualization tools like Grafana for result visualization.
-   openGauss-exporter: Collects monitoring metrics from openGauss database nodes for use by DBMind's calculations.
-   node-exporter: An exporter provided by Prometheus to monitor system metrics of a node, such as CPU and memory usage.
-   reprocessing-exporter: Processes the metrics collected by Prometheus, for example, calculating CPU utilization.

## Environment Setup<a name="section14906112131913"></a>

DBMind's external AI functions require Python version 3.6 or later. The required third-party dependencies are recorded in the  **requirements.txt**  file \(including   **requirements-x86.txt**  and  **requirements-arrch64.txt**, depending on your platform type\) located in the root directory of the AI function \(_$GAUSSHOME_**/bin/dbmind**\). You can install the dependencies using the  **pip install**  command, for example:

```
pip install requirements-x86.txt
```

If you haven't installed all the necessary dependencies, the system will prompt you to install them when you execute the  **gs\_dbmind**  command. Note that the file lists the third-party dependencies required by DBMind, and if there are conflicts with third-party packages in your environment, you should handle them based on your specific situation.

-   **[DBMind Mode Explanation](dbmind-mode.md)**  

-   **[Supporting Components of DBMind](components-that-support-dbmind.md)**  

-   **[DBMind AI Sub-functions](ai-sub-functions-of-the-dbmind.md)**  


