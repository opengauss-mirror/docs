# WDR Snapshot Schema<a name="ZH-CN_TOPIC_0245374862"></a>

WDR Snapshot在启动后（打开参数[enable\_wdr\_snapshot](系统性能快照.md#zh-cn_topic_0237124757_section983311682019)），会在用户表空间"pg\_default"，数据库"postgres"下新建schema "snapshot"，用于持久化WDR快照数据。默认初始化用户或monadmin用户可以访问Snapshot Schema。

根据参数[wdr\_snapshot\_retention\_days](系统性能快照.md#zh-cn_topic_0237124757_section1658494717518)来自动管理快照的生命周期。

-   **[WDR Snapshot 原信息表](WDR-Snapshot-原信息表.md)**

-   **[WDR Snapshot 数据表](WDR-Snapshot-数据表.md)**
