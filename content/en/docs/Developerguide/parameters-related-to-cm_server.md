# Parameters Related to cm\_server<a name="EN-US_TOPIC_0295386223"></a>

## log\_dir<a name="en-us_topic_0059779078_sbb7ff995aa1a49b7b310730fcfd6adbd"></a>

**Parameter description**: Specifies the directory where cm\_server logs are stored. It can be specified as an absolute path, or a path relative to  _$GAUSSLOG_.

**Value range:**  a string You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **log**, indicating that the cm\_server log is generated in the CM directory in  _$GAUSSLOG_.

## log\_file\_size<a name="en-us_topic_0059779078_sd45af4b8a13a461badd0850a43f9a4a8"></a>

**Parameter description**: Specifies the size of a log file. If a log file exceeds the specified size, a new one is created to record log information.

**Value range**: an integer ranging from 0 to 2047. The unit is MB. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **16MB**

## log\_min\_messages<a name="en-us_topic_0059779078_sbde07d9f7bc940c3b12448683da2039f"></a>

**Parameter description**: Specifies which message levels are written to the cm\_server log. Each level covers all the levels following it. The lower the level is, the fewer messages will be written into the log.

**Value range**: enumerated type. Valid values are  **debug5**,  **debug1**,  **log**,  **warning**,  **error**, and  **fatal**. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **warning**

## thread\_count<a name="en-us_topic_0059779078_s928fafec20c14b5aa1573ea417925080"></a>

**Parameter description**: Specifies the number of threads in the cm\_server thread pool.

**Value range**: an integer ranging from 2 to 1000. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1000**

## alarm\_component<a name="section179611437573"></a>

**Parameter description**: Specifies the location of the alarm component that processes alarms.

**Value range:**  a string You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   If  **--alarm-type**  in the  **gs\_preinstall**  script is set to  **5**, no third-party component is connected and alarms are written into the  **system\_alarm**  log. In this case, the value of  **alarm\_component**  is  **/opt/huawei/snas/bin/snas\_cm\_cmd**.
-   If  **--alarm-type**  in the  **gs\_preinstall**  script is set to  **1**, a third-party component is connected. In this case, the value of  **alarm\_component**  is the absolute path of the executable program of the third-party component.

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

## instance\_failover\_delay\_timeout<a name="en-us_topic_0059779078_s2494a79e94d341dfa9abb21120f8ca93"></a>

**Parameter description**: Specifies the delay in cm\_server failover after the primary cm\_server breakdown is detected.

**Value range**: an integer. The unit is s. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **0**

## instance\_heartbeat\_timeout<a name="en-us_topic_0059779078_sd48a7b4bdc534a349f5a4067a7f3a7a0"></a>

**Parameter description**: Specifies the time to wait before the instance heartbeat times out.

**Value range**: an integer. The unit is s. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **6**

## cmserver\_ha\_connect\_timeout<a name="en-us_topic_0059779078_s538a4c1fa64942a7bd178aa447af4218"></a>

**Parameter description**: Specifies the time to wait before the connection between the primary and standby cm\_servers times out.

**Value range**: an integer. The unit is s. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value:** **2**

## cmserver\_ha\_heartbeat\_timeout<a name="en-us_topic_0059779078_sd683c4626da14ea8b3d04f0656ab5823"></a>

**Parameter description**: Specifies the time to wait before the heartbeat between the primary and standby cm\_servers times out.

**Value range**: an integer. The unit is s. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **6**

## phony\_dead\_effective\_time<a name="section17424541236"></a>

**Parameter description**: Specifies the maximum number of times DN processes are detected as zombie. If the number of times a process is detected as zombie is greater than the specified value, the process is considered to be a zombie process and will be restarted.

**Value range**: an integer. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **5**

## enable\_transaction\_read\_only<a name="section1334735111813"></a>

**Parameter description**: Specifies whether the database is in read-only mode.

**Value range**: Boolean values  **on**,  **off**,  **true**,  **false**,  **yes**,  **no**,  **1**, and  **0**  For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **on**

## datastorage\_threshold\_check\_interval<a name="section43322521385"></a>

**Parameter description**: Specifies the interval for checking the disk usage. The system checks the disk usage at the interval specified by the user.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **10**

## datastorage\_threshold\_value\_check<a name="section191659538811"></a>

**Parameter description**: Specifies the usage threshold of a read-only disk in a database. When the disk usage of the data directory exceeds the specified value, the database is automatically set to read-only mode.

**Value range**: an integer ranging from 1 to 99, in percentage. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **85**

## max\_datastorage\_threshold\_check<a name="en-us_topic_0059779078_sbc060904c33642ef8efa543162a6b722"></a>

**Parameter description**: Specifies the maximum interval for checking the disk usage. After you modify the  **enable\_transaction\_read\_only**  parameter, the system automatically checks whether the disk usage reaches the threshold at the specified interval.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

Default value:  **43200**

## cmserver\_ha\_status\_interval<a name="section15942842171516"></a>

**Parameter description**: Specifies the interval between synchronizations of primary and standby CM Server status.

**Value range**: an integer. The unit is s. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## cmserver\_self\_vote\_timeout<a name="en-us_topic_0059779078_se3d910be3f5f49c1b36466552e079342"></a>

**Parameter description**: Specifies the time to wait before the CM Server self-vote times out.

**Value range**: an integer. The unit is s. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **6**

## alarm\_report\_interval<a name="en-us_topic_0059779078_sa2d745d52b9142858c061d7249c24d82"></a>

**Parameter description**: Specifies the interval at which an alarm is reported.

**Value range**: a non-negative integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **3**

## alarm\_report\_max\_count<a name="section13705726193413"></a>

**Parameter description**: Specifies the maximum number of times an alarm is reported.

**Value range**: a non-negative integer For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## enable\_az\_auto\_switchover<a name="section325722712710"></a>

**Parameter description**: Specifies whether to enable automatic AZ switchover. If it is set to  **1**, cm\_server automatically switches over services among AZs. Otherwise, when a DN is faulty, services will not be automatically switched to another AZ even if the current AZ is unavailable. You can run the switchover command to manually switch services to another AZ.

**Value range**: a non-negative integer. The value  **0**  indicates that automatic AZ switchover is disabled, and the value  **1**  indicates that automatic AZ switchover is enabled. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## instance\_keep\_heartbeat\_timeout<a name="section7693243104917"></a>

**Parameter description**: The cm\_agent periodically checks the instance status and reports the status to the cm\_server. If the instance status cannot be detected for a long time and the accumulated number of times exceeds the value of this parameter, the cm\_server delivers a command to the cm\_agent to restart the instance.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **40**

## az\_switchover\_threshold<a name="section19695164510818"></a>

**Parameter description**: If the failure rate of a DN shard in an AZ \(Number of faulty DN shards/Total number of DN shards x 100%\) exceeds the specified value, automatic AZ switchover is triggered.

**Value range**: an integer ranging from 0 to 100 For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **100**

## az\_check\_and\_arbitrate\_interval<a name="section58752223314"></a>

**Parameter description**: Specifies the interval for checking the AZ status. If the status of an AZ is abnormal, automatic AZ switchover is triggered.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value:** **2**

## az\_connect\_check\_interval<a name="section322337123319"></a>

**Parameter description**: Specifies the interval at which the network connection between AZs is checked.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **60**

## az\_connect\_check\_delay\_time<a name="section1839513328333"></a>

**Parameter description**: Specifies the delay between two retries to check the network connection between AZs.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **150**

## cmserver\_demote\_delay\_on\_etcd\_fault<a name="section857328173714"></a>

**Parameter description**: Specifies the interval at which cm\_server switches from the primary state to the standby state due to unhealthy etcd.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **8**

## instance\_phony\_dead\_restart\_interval<a name="section1899814173361"></a>

**Parameter description**: Specifies the interval at which the cm\_agent process restarts and kills a zombie DN instance. The interval between two consecutive kill operations cannot be less than the value of this parameter. Otherwise, the cm\_agent process does not deliver commands.

**Value range**: an integer. The unit is s. The minimum value that takes effect is  **1800**. If this parameter is set to a value less than  **1800**, the value  **1800**  takes effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value:** **21600**

## cm\_auth\_method<a name="section1969815428196"></a>

**Parameter description**: Specifies the port authentication mode of the CM.  **trust**  indicates that port authentication is not configured.  **gss**  indicates that Kerberos port authentication is used. Note that you can change the value to  **gss**  only after the Kerberos server and client are successfully installed. Otherwise, the CM cannot communicate properly, affecting the database status.

**Value range**:  **gss**  or  **trust**. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **trust**

## cm\_krb\_server\_keyfile<a name="section03703243201"></a>

**Parameter description**: Specifies the location of the key file on the Kerberos server. The value must be an absolute path. The file is usually stored in the  _$\{GAUSSHOME\}_**/kerberos**  directory and ends with keytab. The file name is the same as the name of the user who runs the database. This parameter is used together with  **cm\_auth\_method**. If the  **cm\_auth\_method**  parameter is changed to  **gss**,  **cm\_krb\_server\_keyfile**  must also be configured as the correct path. Otherwise, the database status will be affected.

**Value range**: a string. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  _$\{GAUSSHOME\}_**/kerberos/**_\{UserName\}_**.keytab**. The default value cannot take effect and is used only as a prompt.

## cm\_server\_arbitrate\_delay\_base\_time\_out<a name="section112891259103410"></a>

**Parameter description**: Specifies the basic delay duration for cm\_server quorum. If cm\_server is disconnected, the quorum starts to be timed. If the disconnection duration exceeds the quorum delay duration, a new cm\_server will be selected. The quorum delay duration is determined by the basic delay duration, the node index \(server ID\), and the incremental delay duration. The formula is as follows: Quorum delay duration = Basic delay duration + Node index x Incremental delay duration

**Value range**: an integer. The unit is s. The index should be larger than 0. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value:** **10**

## cm\_server\_arbitrate\_delay\_incrememtal\_time\_out<a name="section12304125410384"></a>

**Parameter description**: Specifies the incremental delay duration for cm\_server quorum. If cm\_server is disconnected, the quorum starts to be timed. If the disconnection duration exceeds the quorum delay duration, a new cm\_server will be selected. The quorum delay duration is determined by the basic delay duration, the node index \(server ID\), and the incremental delay duration. The formula is as follows: Quorum delay duration = Basic delay duration + Node index x Incremental delay duration

**Value range**: an integer. The unit is s. The index should be larger than 0. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **3**

## force\_promote<a name="section189151813918"></a>

**Parameter description**: Specifies whether cm\_server enables the forcible startup logic \(that is, when the cluster status is unknown, ensure that the basic functions of the cluster are available at the cost of data loss\). The value  **0**  indicates that the function is disabled, and the value  **1**  indicates that the function is enabled. This parameter applies to DNs.

**Value range:** **0**  or  **1**. You need to restart cm\_server for the modification to take effect.

**Default value**:  **0**

## switch\_rto<a name="section12494175164016"></a>

**Parameter description**: Specifies the delay for the forcible startup of cm\_server. When  **force\_promote**  is set to  **1**  and a shard in the database does not have primary cm\_server, the system starts timing. After the delay, the forcible startup logic starts to be executed.

**Value range**: an integer ranging from 60 to 2147483647. The unit is s. You need to restart cm\_server for the modification to take effect.

**Default value**:  **0**

## backup\_open<a name="section114001741152513"></a>

**Parameter description**: Specifies the DR database instance settings. After this parameter is enabled, CM runs in DR database instance mode.

**Value range:** **0**  or  **1**. You need to restart cm\_server for the modification to take effect. This parameter cannot be enabled for a non-DR database instance. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   **0**: disabled.
-   **1**: enabled.

**Default value**:  **0**

## enable\_dcf<a name="section876764972213"></a>

**Parameter description**: Specifies the status of the DCF mode.

**Value range**: Boolean You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   **0**: disabled.
-   **1**: enabled.

**Default value**:  **off**

## install\_type<a name="section7226629136"></a>

**Parameter description**: Specifies the settings related to the DR database instance. It is used to distinguish whether the database instance is based on Dorado.

**Value range**: an integer ranging from 0 to 2 You need to restart cm\_server for the modification to take effect. This parameter cannot be enabled for a non-DR database instance. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   **0**  indicates the database instance for which the DR relationship is not established.
-   **1**  indicates a Dorado-based database instance.
-   **2**  indicates a streaming-based database instance.

**Default value**:  **0**

## enable\_ssl<a name="section199810414569"></a>

**Parameter description**: Specifies whether to enable SSL.

**Value range**: Boolean After this function is enabled, the SSL certificate is used to encrypt communication. Any modification of this parameter takes effect only after a restart. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   **on**  indicates that SSL is enabled.
-   **off**  indicates that SSL is disabled.
-   **Default value**:  **off**

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >To ensure security, you are advised not to disable it. After this function is disabled, the CM  **does not**  use encrypted communication and all information is transmitted in plaintext, which may bring security risks such as eavesdropping, tampering, and spoofing.


## ssl\_cert\_expire\_alert\_threshold<a name="section12984174210"></a>

**Parameter description**: Specifies the SSL certificate expiration alarm time.

**Value range**: an integer. The unit is day. If the certificate expiration time is less than the value of this parameter, an alarm indicating that the certificate is about to expire is reported. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **90**

## ssl\_cert\_expire\_check\_interval<a name="section1567819231244"></a>

**Parameter description**: Specifies the period for checking whether the SSL certificate expires.

**Value range**: an integer. The unit is s. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **86400**

## delay\_arbitrate\_timeout<a name="section1410893910156"></a>

**Parameter description**: Specifies the time for waiting for the redo log replay of a node in the same AZ as the primary DN. The node in the same AZ as the primary DN is preferentially promoted to primary.

**Value range**: an integer, in the range \[0,21474836\] \(unit: second\). For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **0**

## ddb\_type<a name="section24771938135616"></a>

**Parameter description**: Specifies whether to switch between ETCD and DCC modes.

**Value range**: an integer.  **0**: ETCD;  **1**: DCC. You need to restart cm\_server for the modification to take effect. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **0**

## ddb\_log\_level<a name="section148417148294"></a>

**Parameter description**: Sets the DDB log level.

To disable the log function, set this parameter to  **NONE**, which cannot be used together with the following log levels:

To enable the log function, set this parameter to one or a combination of the following log levels:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**. If two or more log levels are used together, separate them with vertical bars \(|\). The log level cannot be set to an empty string.

**Value range**: a string containing one or a combination of the following log levels:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE**

## ddb\_log\_backup\_file\_count<a name="section069618142325"></a>

**Parameter description**: Specifies the maximum number of log files that can be saved.

**Value range**: an integer ranging from 1 to 100. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **10**

## ddb\_max\_log\_file\_size<a name="section1240439163413"></a>

**Parameter description**: Specifies the maximum number of bytes in a log.

**Value range**: a string, in the range \[1M,1000M\]. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **10M**

## ddb\_log\_suppress\_enable<a name="section63973117363"></a>

**Parameter description**: Specifies whether to enable the log suppression function.

**Value range**: an integer.  **0**: disabled;  **1**: enabled. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **1**

## ddb\_election\_timeout<a name="section136691017396"></a>

**Parameter description**: Specifies the DCC election timeout period.

**Value range**: an integer, in the range \[1,600\], in seconds. For details about how to modify this parameter, see  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Default value**:  **3**

