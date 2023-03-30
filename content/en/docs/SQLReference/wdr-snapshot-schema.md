# WDR Snapshot Schema<a name="EN-US_TOPIC_0245374862"></a>

After the WDR snapshot function is enabled \([enable\_wdr\_snapshot](system-performance-snapshot.md#en-us_topic_0237124757_section983311682019)  is set to  **on**\), schema  **snapshot**  is created in user tablespace  **pg\_default**  in database  **postgres**  to flush WDR snapshot data.By default, the initial user or the  **monadmin**  user can access the snapshot schema.

You can set the parameter  [wdr\_snapshot\_retention\_days](system-performance-snapshot.md#en-us_topic_0237124757_section1658494717518)  to automatically manage the snapshot lifecycle.

-   **[Original Information Table of WDR Snapshots](original-information-table-of-wdr-snapshots.md)**  
-   **[WDR Snapshot Data Table](wdr-snapshot-data-table.md)**  
-   **[Performance Report Generated Based on WDR Snapshot](performance-report-generated-based-on-wdr-snapshot.md)**  
