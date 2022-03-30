# WDR Snapshot Schema<a name="ZH-CN_TOPIC_0289900334"></a>

WDR Snasphot在启动后（打开参数[enable\_wdr\_snapshot](系统性能快照.md#zh-cn_topic_0283137284_zh-cn_topic_0237124757_section983311682019)）,会在用户表空间"pg\_default"，数据库"postgres"下新建schema "snapshot"，用于持久化WDR快照数据。默认初始化用户或monadmin用户可以访问Snapshot Schema。

根据参数[wdr\_snapshot\_retention\_days](系统性能快照.md#zh-cn_topic_0283137284_zh-cn_topic_0237124757_section1658494717518)来自动管理快照的生命周期。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>用户应该禁止对Snapshot schema下的表进行增删改等操作，人为对这些表的修改或破坏可能会导致WDR各种异常情况甚至WDR不可用。

-   **[WDR Snapshot原信息](WDR-Snapshot原信息.md)**  

-   **[WDR Snapshot 数据表](WDR-Snapshot-数据表.md)**  

-   **[WDR Snapshot生成性能报告](WDR-Snapshot生成性能报告.md)**  

-   **[查看WDR报告](查看WDR报告.md)**  


