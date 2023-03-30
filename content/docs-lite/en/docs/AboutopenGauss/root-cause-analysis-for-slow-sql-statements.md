# Root Cause Analysis for Slow SQL Statements<a name="EN-US_TOPIC_0000001263251657"></a>

## Availability<a name="section17365142913365"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section168782058113611"></a>

Slow SQL statements have always been a pain point in data O&M. How to effectively diagnose the root causes of slow SQL statements is a big challenge. Based on the characteristics of openGauss and the slow SQL statement diagnosis experience of DBAs on the live network, this tool supports more than 15 root causes of slow SQL statements, outputs multiple root causes based on the possibility, and provides specific solutions.

## Benefits<a name="section11716103034018"></a>

This feature provides customers with fast and reliable slow SQL statement discovery and root cause analysis functions, greatly simplifying the work of O&M personnel.

## Description<a name="section611314434114"></a>

Based on the Prometheus data collection solution, data required for root cause analysis for slow SQL statements is collected, including system resource information \(CPU usage, memory usage, and I/O\), load information \(QPS\), large process information \(including external large processes and scheduled database tasks\), slow SQL statement text information, start time and end time of slow SQL statement execution, slow SQL statement execution plan, temporary file information, and so on. Then, this feature calculates the most matched root cause of slow SQL statements based on the AI algorithm, and provides suggestions and confidence.

## Enhancements<a name="section65821918104310"></a>

None.

## Constraints<a name="section163509419432"></a>

-   The database is normal, and the client can be connected properly.
-   An environment running Python 3.6 or later is available.
-   The information about slow SQL statements is obtained from the workload diagnosis report \(WDR\). In the database WDR, slow SQL statements are marked. The GUC parameter  **track\_stmt\_stat\_level**  is enabled by default. Otherwise, you need to manually enable it. Generally, the  **track\_stmt\_stat\_level**  is set to  **'off, L0'**. Higher levels will affect the performance. Data collection is implemented by the Prometheus solution. Therefore, you need to configure the Prometheus data collection platform. This feature focuses on algorithms and obtains metric sequence information from Prometheus.

## Dependencies<a name="section10471835443"></a>

None.

