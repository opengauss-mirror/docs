# WDR Snapshot Schema

WDR Snapshot在启动后（打开参数[enable\_wdr\_snapshot](../database_reference/system_performance_snapshot.md#zh-cn_topic_0283137284_zh-cn_topic_0237124757_section983311682019)），会在用户表空间"pg\_default"，数据库"postgres"下新建schema "snapshot"，用于持久化WDR快照数据。默认初始化用户或monadmin用户可以访问Snapshot Schema。

根据参数[wdr\_snapshot\_retention\_days](../database_reference/system_performance_snapshot.md#zh-cn_topic_0283137284_zh-cn_topic_0237124757_section1658494717518)来自动管理快照的生命周期。

- **[WDR Snapshot 原信息表](wdr_snapshot_original_information_table.md)**  

- **[WDR Snapshot 数据表](wdr_snapshot_data_table.md)**  
