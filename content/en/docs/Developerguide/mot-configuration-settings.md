# MOT Configuration Settings<a name="EN-US_TOPIC_0260488220"></a>

MOT is provided preconfigured to creating working MOT Tables. For best results, it is recommended to customize the MOT configuration \(defined in the file named mot.conf\) according to your application's specific requirements and your preferences.

This file is read-only upon server startup. If you edit this file while the system is running, then the server must be reloaded in order for the changes to take effect.

The mot.conf file is located in the same folder as the postgres.conf configuration file.

Read the  [General Guidelines](general-guidelines.md)section and then review and configure the following sections of the mot.conf file, as needed.

The following topics describe each section in the mot.conf file and the settings that it contains, as well as the default value of each.

[REDO LOG \(MOT\)](redo-log-(mot).md)

[CHECKPOINT \(MOT\)](checkpoint-(mot).md)

[RECOVERY](#_#_recovery)

[STATISTICS \(MOT\)](statistics-(mot).md)

[ERROR LOG \(MOT\)](error-log-(mot).md)

[MEMORY](#_#_memory)

[GARBAGE COLLECTION \(MOT\)](garbage-collection-(mot).md)

[JIT \(MOT\)](jit-(mot).md)

[STORAGE \(MOT\)](storage-(mot).md)

[Default MOT.conf](default-mot-conf.md)

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The topics listed above describe each of the setting sections in the mot.conf file. In addition to the above topics, for an overview of all the aspects of a specific MOT feature \(such as Recovery\), you may refer to the relevant topic of this user manual. For example, the mot.conf file has a Recovery section that contains settings that affect MOT recovery and this is described in the  [Recovery](recovery.md)  section that is listed above. In addition, for a full description of all aspects of Recovery, you may refer to the  [Recovery](recovery.md)section of the Administration chapter of this user manual. Reference links are also provided in each relevant section of the descriptions below.  

-   **[General Guidelines](general-guidelines.md)**  

-   **[REDO LOG \(MOT\)](redo-log-(mot).md)**  

-   **[CHECKPOINT \(MOT\)](checkpoint-(mot).md)**  

-   **[RECOVERY \(MOT\)](recovery-(mot).md)**  

-   **[STATISTICS \(MOT\)](statistics-(mot).md)**  

-   **[ERROR LOG \(MOT\)](error-log-(mot).md)**  

-   **[MEMORY \(MOT\)](memory-(mot).md)**  

-   **[GARBAGE COLLECTION \(MOT\)](garbage-collection-(mot).md)**  

-   **[JIT \(MOT\)](jit-(mot).md)**  

-   **[STORAGE \(MOT\)](storage-(mot).md)**  

-   **[Default MOT.conf](default-mot-conf.md)**  


