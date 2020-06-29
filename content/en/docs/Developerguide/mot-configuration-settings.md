# MOT Configuration Settings<a name="EN-US_TOPIC_0257867364"></a>

MOT is provided preconfigured to creating working MOT Tables. For best results, it is recommended to customize the MOT configuration \(defined in the file named mot.conf\) according to your application’s specific requirements and your preferences.

This file is read-only upon server startup. If you edit this file while the system is running, then the server must be reloaded in order for the changes to take effect.

The mot.conf file is located in the same folder as the postgres.conf configuration file.

Read the  [General Guidelines](general-guidelines.md#EN-US_TOPIC_0257867365)section and then review and configure the following sections of the mot.conf file, as needed.

-   The following topics describe each section in the mot.conf file and the settings that it contains, as well as the default value of each. 
-   [REDO LOG](redo-log.md#EN-US_TOPIC_0257867366)
-   [CHECKPOINT](checkpoint.md#EN-US_TOPIC_0257867367)
-   [RECOVERY](en-us_topic_0257713371.md#_#_recovery)
-   [STATISTICS](statistics.md#EN-US_TOPIC_0257867369)
-   [ERROR LOG](error-log.md#EN-US_TOPIC_0257867370)
-   [MEMORY](en-us_topic_0257713371.md#_#_memory)
-   [GARBAGE COLLECTION](garbage-collection.md#EN-US_TOPIC_0257867372)
-   [JIT](jit.md#EN-US_TOPIC_0257867373)
-   [STORAGE](storage.md#EN-US_TOPIC_0257867374)
-   [Default MOT.conf](default-mot-conf.md#EN-US_TOPIC_0257867375)

**Note**  – The topics listed above describe each of the setting sections in the mot.conf file. In addition to the above topics, for an overview of all the aspects of a specific MOT feature \(such as Recovery\), you may refer to the relevant topic of this user manual. For example, the mot.conf file has a Recovery section that contains settings that affect MOT recovery and this is described in the  [Recovery](recovery-18.md#EN-US_TOPIC_0257867403)  section that is listed above. In addition, for a full description of all aspects of Recovery, you may refer to the  [Recovery](recovery-18.md#EN-US_TOPIC_0257867403)section of the Administration chapter of this user manual. Reference links are also provided in each relevant section of the descriptions below.

-   **[General Guidelines](general-guidelines.md)**  

-   **[REDO LOG](redo-log.md)**  

-   **[CHECKPOINT](checkpoint.md)**  

-   **[RECOVERY](recovery.md)**  

-   **[STATISTICS](statistics.md)**  

-   **[ERROR LOG](error-log.md)**  

-   **[MEMORY](memory.md)**  

-   **[GARBAGE COLLECTION](garbage-collection.md)**  

-   **[JIT](jit.md)**  

-   **[STORAGE](storage.md)**  

-   **[Default MOT.conf](default-mot-conf.md)**  


