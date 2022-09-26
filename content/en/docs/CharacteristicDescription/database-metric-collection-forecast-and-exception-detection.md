# Database Metric Collection, Forecast, and Exception Detection<a name="EN-US_TOPIC_0000001105075484"></a>

## Availability<a name="section1394818443613"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section36382403357"></a>

This feature serves as an AI tool integrated into openGauss and can be used to collect and forecast database metrics, as well as monitor and diagnose exceptions. It is a component in the DBMind suite. Currently, this feature is compatible with the Prometheus platform to collect database system metrics. Prometheus exporters are provided to collect and process database monitoring metrics. By monitoring the time series data of metrics, you can forecast the future load trend and diagnose problems. In addition, you can perform exception detection.

## Benefits<a name="section5621105733410"></a>

-   This feature greatly simplifies the work of O&M personnel, releases a large number of labor resources, and reduces costs for the company.
-   You can use the metric collection, monitoring, and forecast functions to detect problems in advance, preventing database exceptions from causing greater loss.

## Description<a name="section117712392341"></a>

Prometheus is a popular open-source monitoring system in the industry. It is also a time series database. The collector of Prometheus is called exporter, which is used to collect metrics of monitored modules. To interconnect with the Prometheus platform, DBMind provides two types of exporters: openGauss-exporter for collecting database metrics and reprocessing-exporter for reprocessing the collected metrics.

This feature supports forecast of collected metrics. You can specify key performance indicators \(KPIs\) to be forecasted by modifying configuration files. This helps you find metric trends and perform O&M operations in a timely manner. For example, you can forecast the memory usage to detect memory leakage and forecast the disk usage to expand the capacity at a proper time. The AI-based exception detection algorithm can detect the trend fluctuation of metrics, helping users detect problems in time.

## Enhancements<a name="section144513469345"></a>

This feature is greatly improved in openGauss 3.0.0 and is compatible with the Prometheus platform. Two exporters are used to connect to Prometheus.

## Constraints<a name="section1613131119346"></a>

-   The database is normal, and the data directory has been written into environment variables.
-   The Python version must be 3.6 or later.
-   The Prometheus monitoring platform is configured and the Prometheus service is started so that monitoring data can be collected.

## Dependencies<a name="section4228145683310"></a>

Prometheus
