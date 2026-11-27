# WDR Snapshot Schema<a name="EN-US_TOPIC_0289900334"></a>

After the WDR snapshot function is enabled \([enable\_wdr\_snapshot](../database_reference/system_performance_snapshot.md#en-us_topic_0283137284_en-us_topic_0237124757_section983311682019)  is set to  **on**\), schema  **snapshot**  is created in user tablespace  **pg\_default**  in database  **postgres**  to flush WDR snapshot data. By default, the initial user or the  **monadmin**  user can access the snapshot schema.

You can set the parameter  [wdr\_snapshot\_retention\_days](../database_reference/system_performance_snapshot.md#en-us_topic_0283137284_en-us_topic_0237124757_section1658494717518)  to automatically manage the snapshot lifecycle.

>[!TIP]NOTICE 
>Do not add, delete, or modify tables in the snapshot schema. Manual modification or damage to these tables may cause WDR exceptions or even WDR unavailability.

- **[Original Information of WDR Snapshots](snapshot_snapshot.md)**  

- **[WDR Snapshot Data Table](wdr_snapshot_data_table.md)**  

- **[Performance Report Generated Based on WDR Snapshots](performance_report_generated_based_on_wdr_snapshot.md)**  

- **[WDRs](wdrs.md)**  
