# Parameters Related to cm\_agent<a name="EN-US_TOPIC_0000001246246987"></a>

## log\_dir<a name="section030711438392"></a>

**Parameter description**: Specifies the directory where cm\_agent logs are stored. It can be specified as an absolute path, or a path relative to  _$GAUSSLOG_. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --agent -k log\_dir="'/log/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **log**, indicating that the cm\_agent logs are generated in the CM directory in  _$GAUSSLOG_.

## log\_file\_size<a name="section130710434392"></a>

**Parameter description**: Specifies the size of a log file. If the size of the  **cm\_agent-xx-current.log**  file exceeds the specified size, a new log file is created to record log information.

**Value range**: an integer, in the range \[0,2047\]. The actual value range is \[1,2047\]. The unit is MB. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **16 MB**

## log\_min\_messages<a name="section19307194343914"></a>

**Parameter description**: Specifies which message levels are written to the cm\_agent log. A higher level covers the messages of all the lower levels. The lower the level is, the fewer messages will be written into the log.

**Value range**: enumerated type. Valid values are  **debug5**,  **debug1**,  **warning**,  **error**,  **log**, and  **fatal**  \(case-insensitive\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **warning**

## incremental\_build<a name="section330784317397"></a>

**Parameter description**: Specifies whether a standby node is incrementally built. If this parameter is enabled, a standby node is incrementally rebuilt. Otherwise, a standby node is fully rebuilt.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: A standby node is incrementally rebuilt.

-   **off**,  **no**,  **false**, or  **0**: A standby node is fully rebuilt.

**Default value**:  **on**

## security\_mode<a name="section318914113417"></a>

**Parameter description**: Specifies whether nodes are started in secure mode. If this parameter is enabled, nodes are started in secure mode. Otherwise, nodes are started in non-secure mode.

**Value range**: Boolean. The modification of this parameter takes effect dynamically. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: Nodes are started in secure mode.

-   **off**,  **no**,  **false**, or  **0**: Nodes are started in non-secure mode.

**Default value**:  **off**

## upgrade\_from<a name="section616511291250"></a>

**Parameter description**: Specifies the internal version number of the database before an in-place upgrade. Do not modify the value of this parameter.

**Value range**: a non-negative integer, in the range \[0,4294967295\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**

## alarm\_component<a name="section19308174317397"></a>

**Parameter description**: Specifies the position of the alarm component that handles alarms if the first mode is used. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --agent -k alarm\_component="'/alarm/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

## alarm\_report\_interval<a name="section17308104393914"></a>

**Parameter description**: Specifies the interval at which an alarm is reported.

**Value range**: a non-negative integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## agent\_heartbeat\_timeout<a name="section1222151611711"></a>

**Parameter description**: Specifies the time to wait before the cm\_server heartbeat times out.

**Value range**: an integer, in the range \[2,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **5**

## agent\_connect\_timeout<a name="section13943381675"></a>

**Parameter description**: Specifies the time to wait before the attempt of cm\_agent to connect to cm\_server times out.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## agent\_connect\_retries<a name="section184312403713"></a>

**Parameter description**: Specifies the number of times cm\_agent tries to connect to cm\_server.

**Value range**: an integer, in the range \[0,2147483647\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **15**

## agent\_kill\_instance\_timeout<a name="section10806122512811"></a>

**Parameter description**: Specifies the interval from the time when cm\_agent fails to connect to the primary cm\_server to the time when cm\_agent kills all instances on the node.

**Value range**: an integer, in the range \[0,2147483647\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**, indicating that the operation of killing all instances on the node is not initiated.

## agent\_report\_interval<a name="section1740211461789"></a>

**Parameter description**: Specifies the interval at which cm\_agent reports the instance status.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## alarm\_report\_max\_count<a name="section490373917911"></a>

**Parameter description**: Specifies the maximum number of times an alarm is reported.

**Value range**: a non-negative integer, in the range \[1,2592000\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## agent\_check\_interval<a name="section296010163916"></a>

**Parameter description**: Specifies the interval at which cm\_agent queries the status of instances.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **2**

## enable\_log\_compress<a name="section18961713161017"></a>

**Parameter description**: Specifies whether to enable log compression.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: Log compression is allowed.
-   **off**,  **no**,  **false**, or  **0**:Log compression is not allowed.

**Default value**:  **on**

## process\_cpu\_affinity<a name="section1740823111111"></a>

**Parameter description**: Specifies whether to bind a primary node process to a CPU core before starting the process. If this parameter is set to  **0**, core binding is not performed. If it is set to another value, core binding is performed, and the number of physical CPU cores is 2<sup>n</sup>. Restart the database and cm\_agent for any modification of this parameter to take effect. Only ARM is supported. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Value range**: an integer, in the range \[0,2\].

**Default value**:  **0**

## enable\_xc\_maintenance\_mode<a name="section154040531117"></a>

**Parameter description**: Specifies whether the  **pgxc\_node**  system catalog can be modified when the database is in read-only mode.

**Value range**: Boolean. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: The function of modifying the  **pgxc\_node**  system catalog is enabled.

-   **off**,  **no**,  **false**, or  **0**: The function of modifying the  **pgxc\_node**  system catalog is disabled.

**Default value**:  **on**

## log\_threshold\_check\_interval<a name="section1372141912128"></a>

**Parameter description**: Specifies the interval for compressing and clearing CM logs. The logs are compressed and cleared every 1800 seconds.

**Application scope**:  _$GAUSSLOG_**/cm/cm\_ctl**,  _$GAUSSLOG_**/cm/cm\_server**, files in the  _$GAUSSLOG_**/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  _$GAUSSLOG_**/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1800**

## log\_max\_size<a name="section1940221415131"></a>

**Parameter description**: Specifies the maximum size of CM logs. When the total size of CM logs exceeds \(value of  **log\_max\_size**  x 95/100\) MB, historical compressed logs are deleted in sequence based on the log generation time until the total size is less than \(value of  **log\_max\_size**  x 95/100\) MB.

**Application scope**:  _$GAUSSLOG_**/cm/cm\_ctl**,  _$GAUSSLOG_**/cm/cm\_server**, files in the  _$GAUSSLOG_**/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  _$GAUSSLOG_**/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,2147483647\] \(unit: MB\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10240**

## log\_max\_count<a name="section114033146138"></a>

**Parameter description**: Specifies the maximum number of CM log files that can be stored. When the total number of CM log files exceeds the value of this parameter, compressed logs that have been stored for days longer than those specified by  **log\_saved\_days**  are deleted based on the name of the compressed log file.

**Application scope**:  _$GAUSSLOG_**/cm/cm\_ctl**,  _$GAUSSLOG_**/cm/cm\_server**, files in the  _$GAUSSLOG_**/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  _$GAUSSLOG_**/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,10000\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10000**

## log\_saved\_days<a name="section25051814181410"></a>

**Parameter description**: Specifies the number of days for storing compressed CM log files. If the number of compressed CM log files exceeds the value of this parameter and the total number of CM log files exceeds the value of  **log\_max\_count**, the compressed log files are deleted.

**Application scope**:  _$GAUSSLOG_**/cm/cm\_ctl**,  _$GAUSSLOG_**/cm/cm\_server**, files in the  _$GAUSSLOG_**/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  _$GAUSSLOG_**/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,1000\]. \(unit: day\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **90**

## agent\_phony\_dead\_check\_interval<a name="section13310143113916"></a>

**Parameter description**: Specifies the interval at which cm\_agent checks whether a process is suspended.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

## unix\_socket\_directory<a name="section931094316393"></a>

**Parameter description**: Specifies the directory location of the Unix socket. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --agent -k unix\_socket\_directory="'/unix/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **''**

## dilatation\_shard\_count\_for\_disk\_capacity\_alarm<a name="section827183713151"></a>

**Parameter description**: Specifies the number of shards to be added in the scale-out scenario. This parameter is used to calculate the threshold for reporting a disk capacity alarm.

**Value range**: an integer, in the range \[0,2147483647\]. If this parameter is set to  **0**, the disk scale-out alarm is not reported. If this parameter is set to a value greater than  **0**, the disk scale-out alarm is reported and the threshold is calculated based on the number of shards specified by this parameter. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

## enable\_dcf<a name="section8310843173919"></a>

**Parameter description**: Specifies the status of the DCF mode.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: The DCF function is enabled.
-   **off**,  **no**,  **false**, or  **0**:The DCF function is disabled.

**Default value**:  **off**

## disaster\_recovery\_type<a name="section1027633115186"></a>

**Parameter description**: Specifies the type of the DR relationship between primary and standby databases.

**Value range**: an integer, in the range \[0,2\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **0**  indicates that no DR relationship is established.
-   **1**  indicates that the OBS DR relationship is established.
-   **2**  indicates that the streaming DR relationship is established.

**Default value**:  **0**

## agent\_backup\_open<a name="section114001741152513"></a>

**Parameter description**: Specifies whether to enable the DR mode. After the DR mode is enabled, the CM runs in DR mode.

**Value range**: an integer, in the range \[0,2\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **0**  indicates that no DR relationship is established.
-   **1**  indicates that the OBS DR relationship is established \(not supported later versions\).
-   **2**  indicates that the streaming DR relationship is established.

**Default value**:  **0**

