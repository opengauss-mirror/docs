# Operation Logs<a name="EN-US_TOPIC_0242215141"></a>

Operation logs are generated when database tools are used by a database administrator or invoked by a cluster. If the cluster is faulty, you can backtrack user operations on the database and reproduce the fault based on the operation logs.

## Log Storage Directory<a name="en-us_topic_0237088898_en-us_topic_0059777608_se14cfc96a7114f3eb0f1b1e56e43daad"></a>

The default path is  _$GAUSSLOG_**/bin**. If the environmental variable  _$GAUSSLOG_  does not exist or its value is empty, the log information generated for a tool will be displayed, but not recorded in the log file of the tool.

The default value of  _$GAUSSLOG_  is  **/var/log/gaussdb/**_username_.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If a database is deployed using the OM script, the log path is  **/var/log/gaussdb/**_username_.  

## Log Naming Rules<a name="en-us_topic_0237088898_en-us_topic_0059777608_s5b7b107bf331498dba13361d83f1006a"></a>

The log file name format is as follows:

-   _tool name_**-**_log creation time_**.log**
-   _tool name_**-**_log creation time_**-current.log**

_tool name_**-**_log creation time_**.log**  is a historical log file, and  _tool name_**-**_log creation time_**-current.log**  is a current log file.

If the size of a log file exceeds 16 MB, the next time the tool is invoked, the log file is renamed in the historical log file name format, and a new log file is generated at the current time point.

For example,  **gs\_guc-2015-01-16\_183728-current.log**  is renamed as  **gs\_guc-2015-01-16\_183728.log**, and  **gs\_guc-2015-01-17\_142216-current.log**  is generated.

## Maintenance Suggestions<a name="en-us_topic_0237088898_en-us_topic_0059777608_saa34aa1769fe4b8c85c960c1490c4b2e"></a>

You are advised to dump expired logs periodically to save disk space and prevent important logs from being lost.

