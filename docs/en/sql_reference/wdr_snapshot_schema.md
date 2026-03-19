# WDR Snapshot Schema<a name="EN-US_TOPIC_0245374862"></a>

After the WDR snapshot function is enabled \([enable\_wdr\_snapshot](../database_reference/system_performance_snapshot.md) is set to  **on**\), schema  **snapshot**  is created in user tablespace  **pg\_default**  in database  **postgres**  to flush WDR snapshot data.By default, the initial user or the  **monadmin**  user can access the snapshot schema.

You can set the parameter  [wdr\_snapshot\_retention\_days](../database_reference/system_performance_snapshot.md)  to automatically manage the snapshot lifecycle.

- **[Original Information Table of WDR Snapshots](snapshot_snapshot.md)**  
- **[WDR Snapshot Data Table](wdr_snapshot_data_table.md)**  
- **[Performance Report Generated Based on WDR Snapshot](performance_report_generated_based_on_wdr_snapshot.md)**  
