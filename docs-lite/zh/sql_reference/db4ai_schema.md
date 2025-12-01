# DB4AI Schema<a name="ZH-CN_TOPIC_0000001195219663"></a>

DB4AI模式在AI特性中主要是用来存储和管理数据集版本。模式中保存数据表的原始视图快照，每一个数据版本的更改记录以及版本快照的管理信息。模式面向普通用户，用户可在该模式下查找特性DB4AI.SNAPSHOT创建的快照版本信息。

>[!NOTE]说明
>
>轻量版场景下，openGauss提供下述schema，但DB4AI不可用。

- **[DB4AI.SNAPSHOT](db4ai_snapshot.md)**  

- **[DB4AI.CREATE\_SNAPSHOT](db4ai_create_snapshot.md)**  

- **[DB4AI.CREATE\_SNAPSHOT\_INTERNAL](db4ai_create_snapshot_internal.md)**  

- **[DB4AI.PREPARE\_SNAPSHOT](db4ai_prepare_snapshot.md)**  

- **[DB4AI.PREPARE\_SNAPSHOT\_INTERNAL](db4ai_prepare_snapshot_internal.md)**  

- **[DB4AI.ARCHIVE\_SNAPSHOT](db4ai_archive_snapshot.md)**  

- **[DB4AI.PUBLISH\_SNAPSHOT](db4ai_publish_snapshot.md)**  

- **[DB4AI.MANAGE\_SNAPSHOT\_INTERNAL](db4ai_manage_snapshot_internal.md)**  

- **[DB4AI.SAMPLE\_SNAPSHOT](db4ai_sample_snapshot.md)**  

- **[DB4AI.PURGE\_SNAPSHOT](db4ai_purge_snapshot.md)**  

- **[DB4AI.PURGE\_SNAPSHOT\_INTERNAL](db4ai_publish_snapshot_internal.md)**  
