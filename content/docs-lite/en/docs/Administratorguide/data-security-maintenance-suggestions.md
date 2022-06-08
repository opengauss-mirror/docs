# Data Security Maintenance Suggestions<a name="EN-US_TOPIC_0289897026"></a>

To ensure data security in openGauss and prevent accidents, such as data loss and illegal data access, read this section carefully.

## Preventing Data Loss<a name="en-us_topic_0283140538_en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s838b550f384b449bb87e13a200bf04cd"></a>

You are advised to plan routine physical backup and store backup files in a reliable medium. If a serious error occurs in the system, you can use the backup files to restore the system to the state at the backup point.

## Preventing Illegal Data Access<a name="en-us_topic_0283140538_en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s654ff86682394156a57cf0860791b723"></a>

-   You are advised to manage database users based on their permission hierarchies. A database administrator creates users and grants permissions to the users based on service requirements to ensure users properly access the database.
-   You are advised to deploy openGauss servers and clients \(or applications developed based on the client library\) in trusted internal networks. If the servers and clients must be deployed in an untrusted network, enable SSL encryption before services are started to ensure data transmission security. Note that enabling the SSL encryption function compromises database performance.

## Preventing System Logs from Leaking Personal Data<a name="en-us_topic_0283140538_en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s2ff16280ae30412c9f531f105fd2d6c6"></a>

-   Delete personal data before sending debug logs to others for analysis.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The log level  **log\_min\_messages**  is set to  **DEBUG**_x_  \(_x_  indicates the debug level and the value ranges from 1 to 5\). The information recorded in debug logs may contain personal data.

-   Delete personal data before sending system logs to others for analysis. If the execution of a SQL statement fails, the error SQL statement will be recorded in a system log by default. SQL statements may contain personal data.
-   Set  **log\_min\_error\_statement**  to  **PANIC**  to prevent error SQL statements from being recorded in system logs. If this function is disabled, it is difficult to locate fault causes when a fault occurs.

