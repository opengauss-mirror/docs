# Parameters Related to cm\_server<a name="EN-US_TOPIC_0000001246287001"></a>

## log\_dir<a name="section21021611134413"></a>

**Parameter description**: Specifies the directory where cm\_server logs are stored. It can be specified as an absolute path, or a path relative to  *$GAUSSLOG*. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --server -k log\_dir="'/log/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **log**, indicating that the cm\_server logs are generated in the CM directory in  *$GAUSSLOG*.

## log\_file\_size<a name="section171021311114411"></a>

**Parameter description**: Specifies the size of a log file. If the size of the  **cm\_server-xx-current.log**  file exceeds the specified size, a new log file is created to record log information.

**Value range**: an integer, in the range \[0,2047\]. The actual value range is \[1,2047\]. The unit is MB. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **16 MB**

## log\_min\_messages<a name="section1110261111441"></a>

**Parameter description**: Specifies the message levels to be written to the cm\_server log. A higher level covers the messages of all the lower levels. The lower the level is, the fewer messages will be written into the log.

**Value range**: enumerated type. Valid values are  **debug5**,  **debug1**,  **log**,  **warning**,  **error**, and  **fatal**  \(case-insensitive\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **warning**

## thread\_count<a name="section12102111113443"></a>

**Parameter description**: Specifies the number of threads in the cm\_server thread pool.

**Value range**: an integer, in the range \[2,1000\]. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1000**

## instance\_heartbeat\_timeout<a name="section24821313171815"></a>

**Parameter description**: Specifies the time to wait before the instance heartbeat times out.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **6**

## instance\_failover\_delay\_timeout<a name="section14533832212"></a>

**Parameter description**: Specifies the delay in cm\_server failover after the primary cm\_server breakdown is detected.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**

## cmserver\_ha\_connect\_timeout<a name="section3103711174420"></a>

**Parameter description**: Specifies the time to wait before the connection between the primary cm\_server and standby cm\_server times out.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **2**

## cmserver\_ha\_heartbeat\_timeout<a name="section1510361114443"></a>

**Parameter description**: Specifies the time to wait before the heartbeat between the primary cm\_server and standby cm\_server times out.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **6**

## cmserver\_ha\_status\_interval<a name="section1133674182316"></a>

**Parameter description**: Specifies the interval between synchronizations of primary cm\_server and standby cm\_server status.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## cmserver\_self\_vote\_timeout<a name="section363915452213"></a>

**Parameter description**: Specifies the timeout interval for cm\_server to vote for each other. This parameter is a legacy parameter and does not take effect.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **6**

## phony\_dead\_effective\_time<a name="section11031311164411"></a>

**Parameter description**: Specifies the maximum number of times a database node is detected as a zombie. If the number of times the node is detected as a zombie is greater than the specified value, a process on the node is considered to be a zombie and will be restarted.

**Value range**: an integer, in the range \[1,2147483647\]. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **5**

## cm\_server\_arbitrate\_delay\_base\_time\_out<a name="section9923154532414"></a>

**Parameter description**: Specifies the basic delay duration for cm\_server arbitration. If the primary cm\_server is disconnected, the arbitration starts to be timed. If the disconnection duration exceeds the arbitration delay duration, a new primary cm\_server will be selected. The arbitration delay duration is determined by the basic delay duration, the node index \(server ID\), and the incremental delay duration. The formula is as follows: Arbitration delay duration = Basic delay duration + Node index x Incremental delay duration

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

## cm\_server\_arbitrate\_delay\_incrememtal\_time\_out<a name="section116431649142414"></a>

**Parameter description**: Specifies the incremental delay duration for cm\_server arbitration. If the primary cm\_server is disconnected, the arbitration starts to be timed. If the disconnection duration exceeds the arbitration delay duration, a new primary cm\_server will be selected. The arbitration delay duration is determined by the basic delay duration, the node index \(server ID\), and the incremental delay duration. The formula is as follows: Arbitration delay duration = Basic delay duration + Node index x Incremental delay duration

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **3**

## alarm\_component<a name="section12321745182515"></a>

**Parameter description**: Specifies the position of the alarm component that handles alarms if the first mode is used. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514). When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --server -k alarm\_component="'/alarm/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_server is restarted.

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

## alarm\_report\_interval<a name="section17967105912515"></a>

**Parameter description**: Specifies the interval at which an alarm is reported.

**Value range**: a non-negative integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **3**

## alarm\_report\_max\_count<a name="section183101620262"></a>

**Parameter description**: Specifies the maximum number of times an alarm is reported.

**Value range**: a non-negative integer, in the range \[1,2592000\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## instance\_keep\_heartbeat\_timeout<a name="section1092193510262"></a>

**Parameter description**: cm\_agent periodically checks the instance status and reports the status to cm\_server. If the instance status cannot be detected for a long time and the accumulated number of times exceeds the value of this parameter, cm\_server delivers a command to cm\_agent to restart the instance.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **40**

## az\_switchover\_threshold<a name="section10442115810268"></a>

**Parameter description**: If the failure rate of a node shard in an AZ \(Number of faulty node shards/Total number of node shards x 100%\) exceeds the specified value, automatic AZ switchover is triggered.

**Value range**: an integer, in the range \[1,100\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **100**

## az\_check\_and\_arbitrate\_interval<a name="section208296015278"></a>

**Parameter description**: Specifies the interval for checking the AZ status. If the status of an AZ is abnormal, automatic AZ switchover is triggered.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **2**

## az\_connect\_check\_interval<a name="section182125018279"></a>

**Parameter description**: Specifies the interval at which the network connection between AZs is checked.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **60**

## az\_connect\_check\_delay\_time<a name="section1884134782719"></a>

**Parameter description**: Specifies the delay between two retries to check the network connection between AZs.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **150**

## cmserver\_demote\_delay\_on\_etcd\_fault<a name="section171253502814"></a>

**Parameter description**: Specifies the interval at which cm\_server is demoted to standby due to unhealthy ETCD.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **8**

## instance\_phony\_dead\_restart\_interval<a name="section938462914288"></a>

**Parameter description**: Specifies the interval at which cm\_agent restarts and kills a zombie database instance. The interval between two consecutive kill operations cannot be less than the value of this parameter. Otherwise, cm\_agent does not deliver commands.

**Value range**: an integer, in the range \[1800,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **21600**

## enable\_transaction\_read\_only<a name="section510515117445"></a>

**Parameter description**: Specifies whether a database is in read-only mode.

**Value range**: Boolean values  **on**,  **off**,  **true**,  **false**,  **yes**,  **no**,  **1**, and  **0**  The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **on**

## datastorage\_threshold\_check\_interval<a name="section122858817307"></a>

**Parameter description**: Specifies the interval for checking the disk usage. This interval is specified by the user.

**Value range**: an integer, in the range \[1,2592000\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

## datastorage\_threshold\_value\_check<a name="section121051111164418"></a>

**Parameter description**: Specifies the usage threshold of a read-only disk in a database. When the disk usage of the data directory exceeds the specified value, the database is automatically set to read-only mode.

**Value range**: an integer, in the range \[1,99\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **85**

## max\_datastorage\_threshold\_check<a name="section1710519119443"></a>

**Parameter description**: Specifies the maximum interval for checking the disk usage. After you modify the  **enable\_transaction\_read\_only**  parameter, the system automatically checks whether the disk usage reaches the threshold at the specified interval.

**Value range**: an integer, in the range \[1,2592000\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

Default value:  **43200**

## enable\_az\_auto\_switchover<a name="section14105161104415"></a>

**Parameter description**: Specifies whether to enable automatic AZ switchover. If this parameter is set to  **1**, cm\_server automatically switches over services among AZs. Otherwise, when a node is faulty, services will not be automatically switched to another AZ even if the current AZ is unavailable. You can run the switchover command to manually switch services to another AZ.

**Value range**: a non-negative integer. The value  **0**  indicates that automatic AZ switchover is disabled, and the value  **1**  indicates that automatic AZ switchover is enabled. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## cm\_krb\_server\_keyfile<a name="section815763211440"></a>

**Parameter description**: Specifies the location of the key file on the Kerberos server. The value must be an absolute path. The file is usually stored in the  *$\{GAUSSHOME\}***/kerberos**  directory and the file extension is  **keytab**. The file name is the same as the name of the user who runs the cluster. This parameter is used together with  **cm\_auth\_method**. If the value of the  **cm\_auth\_method**  parameter is changed to  **gss**,  **cm\_krb\_server\_keyfile**  must also be set to the corresponding path correctly. Otherwise, the cluster status will be affected. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --server -k cm\_krb\_server\_keyfile="'/krb/dir'"**.

**Value range**: a string. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  *$\{GAUSSHOME\}***/kerberos/***\{Username\}***.keytab**. The default value does not take effect and is used only for reference.

## switch\_rto<a name="section489193815352"></a>

**Parameter description**: Specifies the delay for the forcible startup of cm\_server. When  **force\_promote**  is set to  **1**  and a shard in the cluster does not have primary cm\_server, the system starts timing. After the delay, the forcible startup logic starts to be executed.

**Value range**: an integer, in the range \[60,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **600**

## force\_promote<a name="section210571111441"></a>

**Parameter description**: Specifies whether cm\_server enables the forcible startup logic \(that is, when the cluster status is unknown, ensure that the basic functions of the cluster are available at the cost of data loss\). The value  **0**  indicates that forcible startup is disabled, and the value  **1**  indicates that forcible startup is enabled.

**Value range:**  an integer,  **0**  or  **1**. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**

## backup\_open<a name="section51185261313"></a>

**Parameter description**: Specifies whether to enable the DR cluster. After the DR cluster is enabled, the CM runs in DR cluster mode.

**Value range:**  an integer,  **0**  or  **1**. Any modification of this parameter takes effect only after cm\_server is restarted. This parameter cannot be enabled for non-DR clusters. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **0**: The DR cluster is disabled.
-   **1**: The DR cluster is enabled.

**Default value**:  **0**

## enable\_dcf<a name="section1223164233119"></a>

**Parameter description**: Specifies the status of the DCF mode.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: The DCF function is enabled.
-   **off**,  **no**,  **false**, or  **0**: The DCF function is disabled.

**Default value**:  **off**

## ddb\_type<a name="section0106121124418"></a>

**Parameter description**: Specifies whether to switch between ETCD and DCC modes.

**Value range**: an integer.  **0**: specifies the ETCD mode;  **1**: specifies the DCC mode. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>\(openGauss supports only the DCC mode.\)

## enable\_ssl<a name="section1910621118445"></a>

**Parameter description**: Specifies whether to enable SSL.

**Value range**: Boolean. After this function is enabled, the SSL certificate is used to encrypt communication. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:

-   **on**,  **yes**,  **true**, or  **1**: SSL is enabled.
-   **off**,  **no**,  **false**, or  **0**: SSL is disabled.
-   **Default value**:  **off**

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >To ensure security, you are not advised to disable it. After this function is disabled, the CM  **does not**  use encrypted communication and all information is transmitted in plaintext, which may bring security risks such as eavesdropping, tampering, and spoofing.


## ssl\_cert\_expire\_alert\_threshold<a name="section8148443183416"></a>

**Parameter description**: Specifies the SSL certificate expiration alarm time.

**Value range**: an integer, in the range \[7,180\] \(unit: day\). If the certificate expiration time is less than the value of this parameter, an alarm indicating that the certificate is about to expire is reported. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **90**

## ssl\_cert\_expire\_check\_interval<a name="section10149843143417"></a>

**Parameter description**: Specifies the period for checking whether the SSL certificate expires.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **86400**

## ddb\_log\_level<a name="section181071211184411"></a>

**Parameter description**: Sets the DDB log level.

To disable the log function, set this parameter to  **NONE**, which cannot be used together with the following log levels:

To enable the log function, set this parameter to one or a combination of the following log levels:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**. If two or more log levels are used together, separate them with vertical bars \(|\). The log level cannot be set to an empty string.

**Value range**: a string containing one or a combination of the following log levels:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE**

## ddb\_log\_backup\_file\_count<a name="section610761194419"></a>

**Parameter description**: Specifies the maximum number of log files that can be saved.

**Value range**: an integer, in the range \[1,100\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

## ddb\_max\_log\_file\_size<a name="section19107101110446"></a>

**Parameter description**: Specifies the maximum number of bytes in a log.

**Value range**: a string with up to 1024 characters, in the range \[1 MB,1000 MB\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10M**

## ddb\_log\_suppress\_enable<a name="section11071411114412"></a>

**Parameter description**: Specifies whether to enable the log suppression function.

**Value range**: an integer.  **0**: disabled;  **1**: enabled. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## ddb\_election\_timeout<a name="section1096185711575"></a>

**Parameter description**: Specifies the DCC election timeout period.

**Value range**: an integer, in the range \[1,600\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **3**

#### delay\_arbitrate\_timeout<a name="section1410893910156"></a>

**Parameter description**: Specifies the time for waiting for the redo log replay of a node in the same AZ as the primary DN. The node in the same AZ as the primary DN is preferentially promoted to primary.

**Value range**: an integer, in the range \[0,2147483647\] (unit: second). For details about how to modify the parameter, see [Parameters for set cm](#table10437204416514).

**Default value**: **0**

#### cm\_auth\_method<a name="section1969815428196"></a>

**Parameter description**: Specifies the port authentication mode of the CM. **trust** indicates that port authentication is not configured. **gss** indicates that Kerberos port authentication is used. Note that you can change the value to **gss** only after the Kerberos server and client are successfully installed. Otherwise, the CM cannot communicate properly, affecting the database status.

**Value range**: **gss** or **trust**. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see [Parameters for set cm](#table10437204416514).

**Default value**: **trust**

## dn\_arbitrate\_mode<a name="section1264174324416"></a>

**Parameter description**: Specifies the DN arbitration mode.

**Value range**: a string. The modification of this parameter takes effect after reloading. For details about how to modify parameters, see [Parameters for set cm](#table10437204416514). In share\_disk mode, you are not advised to change the arbitration mode.

-   quorum
-   paxos
-   share\_disk

**Default value**: **quorum**
