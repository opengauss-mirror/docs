# DCF Parameters Settings<a name="EN-US_TOPIC_0000001083207760"></a>

## enable\_dcf<a name="section14941640131"></a>

**Parameter description**: Specifies whether to enable the DCF mode. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be  **on**  or  **off**. The value  **on**  indicates that the current installation mode is DCF, and the value  **off**  indicates that the current installation mode is not DCF.

**Default value**:  **off**

## dcf\_ssl<a name="section715761611422"></a>

**Parameter description**: Specifies whether to enable SSL. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be  **on**  or  **off**. The value  **on**  indicates that SSL is used, and the value  **off**  indicates that SSL is not used.

**Default value**:  **on**

## dcf\_config<a name="section1487019536418"></a>

**Parameter description**: Specifies the customized configuration information during installation. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**: a string, which is specified by users during installation

## dcf\_data\_path<a name="section28801541163"></a>

**Parameter description**: Specifies the DCF data path. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**: a string, which is the  **dcf\_data**  directory under the data directory of the DN

## dcf\_log\_path<a name="section6335163315612"></a>

**Parameter description**: Specifies the DCF log path. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**: a string, which is the  **dcf\_log**  directory under the data directory of the DN.

## dcf\_node\_id<a name="section0577131618718"></a>

**Parameter description**: Specifies the ID of the DN where the DCF is located. This parameter is defined by users during installation and cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**: an integer, which is specified by users during installation

## dcf\_max\_workers<a name="section127961643587"></a>

**Parameter description**: Specifies the number of DCF callback function threads. If the number of nodes exceeds 7, increase the value of this parameter \(for example, to  **40**\). Otherwise, the primary node may remain in the promoting state and the log replication between the primary and standby nodes has no progress.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 262143

**Default value**:  **10**

## dcf\_truncate\_threshold<a name="section2030671851017"></a>

**Parameter description**: Specifies the threshold for a DN to truncate DCF logs.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647

**Default value**:  **100000**

## dcf\_election\_timeout<a name="section0169133413323"></a>

**Parameter description**: Specifies the timeout interval for selecting the DCF leader and follower. The election timeout interval depends on the status of the network between DNs. If the timeout interval is short and the network quality is poor, timeout occurs. After the network recovers, the election becomes normal. You are advised to set a proper timeout interval based on the current network status. Restriction on the DCF node clock: The maximum clock difference between DCF nodes is less than half of the election timeout period.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 600, in seconds

**Default value**:  **3**

## dcf\_enable\_auto\_election\_priority<a name="section4409034123"></a>

**Parameter description**: Specifies whether the DCF priority can be automatically adjusted. The value  **0**  indicates that automatic adjustment is not allowed, and the value  **1**  indicates that automatic adjustment is allowed.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**.

**Default value**:  **1**

## dcf\_election\_switch\_threshold<a name="section126105411127"></a>

**Parameter description**: Specifies the DCF threshold for preventing frequent switchover to primary. It is recommended that this parameter be set based on the maximum fault duration acceptable for user services.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647, in seconds.

**Default value**:  **0**

## dcf\_run\_mode<a name="section14650618391"></a>

**Parameter description**: Specifies the DCF election mode. The value  **0**  indicates that the automatic DCF election mode is enabled, and the value  **2**  indicates that the DCF election mode is disabled. Currently, the election mode can be disabled only in minority restoration scenarios. If the election mode is disabled, the database instance will become unavailable.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Enumerated type. The value can be  **0**  or  **2**.

**Default value**:  **0**

## dcf\_log\_level<a name="section167851626151919"></a>

**Parameter description**: Specifies the DCF log level.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   Disable the log function:  **NONE**, indicating that the log function is disabled and cannot be used for the following log levels:
-   Enable the log function:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**

    You can select a string from the preceding strings and use vertical bars \(|\) to combine the strings. The log level cannot be left blank.


**Default value**:  **RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE**

## dcf\_log\_backup\_file\_count<a name="section088021952116"></a>

**Parameter description**: Specifies the number of DCF run log backups.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 100

**Default value**:  **10**

## dcf\_max\_log\_file\_size<a name="section7165117203419"></a>

**Parameter description**: Specifies the maximum size of a DCF run log file.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 1000, in MB

**Default value**:  **10**

## dcf\_socket\_timeout<a name="section81477171243"></a>

**Parameter description**: Specifies the timeout interval for the DCF communication module to connect to the socket. This parameter takes effect upon the system restart. In an environment where the network quality is poor, if the timeout interval is set to a small value, a connection may fail to be set up. In this case, you need to increase the value.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 600000, in ms

**Default value**:  **5000**

## dcf\_connect\_timeout<a name="section134953585339"></a>

**Parameter description**: Specifies the timeout interval for the DCF communication module to set up a connection. This parameter takes effect upon the system restart. In an environment where the network quality is poor, if the timeout interval is set to a small value, the connection may fail to be set up. In this case, you need to increase the value.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 600000, in ms

**Default value:** **60000**

## dcf\_mec\_fragment\_size<a name="section77191035416"></a>

**Parameter description**: Specifies the fragment size of the DCF communication module. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 32 to 10240, in KB

**Default value**:  **64**

## dcf\_stg\_pool\_max\_size<a name="section7209161214410"></a>

**Parameter description**: Specifies the maximum size of the memory pool of the DCF storage module. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 32 to 2147483647, in MB

**Default value**:  **2048**

## dcf\_stg\_pool\_init\_size<a name="section1880515137418"></a>

**Parameter description**: Specifies the minimum size of the memory pool of the DCF storage module. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 32 to 2147483647, in MB

**Default value**:  **32**

## dcf\_mec\_pool\_max\_size<a name="section10446514549"></a>

**Parameter description**: Specifies the maximum size of the memory pool of the DCF communication module. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 32 to 2147483647, in MB

**Default value**:  **200**

## dcf\_flow\_control\_disk\_rawait\_threshold<a name="section21813156420"></a>

**Parameter description**: Specifies the disk waiting threshold for DCF flow control.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647, in μs

**Default value**:  **100000**

## dcf\_flow\_control\_net\_queue\_message\_num\_threshold<a name="section84137154420"></a>

**Parameter description**: Specifies the threshold for the number of messages in a network queue for DCF flow control.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647

**Default value:** **1024**

## dcf\_flow\_control\_cpu\_threshold<a name="section11721171520415"></a>

**Parameter description**: Specifies the threshold for DCF CPU flow control.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647, in percentage \(%\)

**Default value**:  **100**

## dcf\_mec\_batch\_size<a name="section4974215344"></a>

**Parameter description**: Specifies the number of batch messages for DCF communication. When the value is  **0**, the DCF automatically adjusts the value based on the network and the amount of data to be written. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1024

**Default value**:  **0**

## dcf\_mem\_pool\_max\_size<a name="section8229171611412"></a>

**Parameter description**: Specifies the maximum DCF memory. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 32 to 2147483647, in MB

**Default value**:  **2048**

## dcf\_mem\_pool\_init\_size<a name="section1345419161412"></a>

**Parameter description**: Specifies the initial size of the DCF memory. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 32 to 2147483647, in MB

**Default value**:  **32**

## dcf\_compress\_algorithm<a name="section390831613410"></a>

**Parameter description**: Specifies the compression algorithm for DCF run log transmission. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer

-   **0**  indicates no compression.
-   **1**  indicates the ZSTD compression algorithm.
-   **2**  indicates the LZ4 compression algorithm.

**Default value**:  **0**

## dcf\_compress\_level<a name="section36812161842"></a>

**Parameter description**: Specifies the compression level for DCF log transmission. This parameter takes effect upon the system restart. Before this parameter takes effect, a valid compression algorithm must be configured, that is, the  **dcf\_compress\_algorithm**  parameter is set.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 22

If compression is disabled, the configured compression level does not take effect.

**Default value**:  **1**

## dcf\_mec\_channel\_num<a name="section637671712417"></a>

**Parameter description**: Specifies the number of DCF communication channels. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 64

**Default value**:  **1**

## dcf\_rep\_append\_thread\_num<a name="section116713171147"></a>

**Parameter description**: Specifies the number of DCF log replication threads. This parameter takes effect upon the system restart.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 1000

**Default value**:  **2**

## dcf\_mec\_agent\_thread\_num<a name="section6545183412"></a>

**Parameter description**: Specifies the number of DCF communication working threads. This parameter takes effect upon the system restart. It is recommended that the value of  **dcf\_mec\_agent\_thread\_num**  be greater than or equal to 2 x Number of nodes x Value of  **dcf\_mec\_channel\_num**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 1000

**Default value**:  **10**

## dcf\_mec\_reactor\_thread\_num<a name="section16947144914191"></a>

**Parameter description**: Specifies the number of reactor threads used by the DCF. This parameter takes effect upon the system restart. It is recommended that the ratio of the value of  **dcf\_mec\_reactor\_thread\_num**  to the value of  **dcf\_mec\_agent\_thread\_num**  be 1:40.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 100

**Default value**:  **1**

## dcf\_log\_file\_permission<a name="section164431018248"></a>

**Parameter description**: Specifies the attribute of the DCF run log file. The parameter setting takes effect after the system is restarted. This parameter is configured during installation and cannot be modified. To allow other users in the same group to access logs, ensure that all parent directories can be accessed by other users in the same group. That is, if  **dcf\_log\_path\_permission**  is set to  **750**,  **dcf\_log\_file\_permission**  can only be set to  **600**  or  **640**. If  **dcf\_log\_path\_permission**  is set to  **700**,  **dcf\_log\_file\_permission**  must be set to  **600**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated type. The value can be  **600**  or  **640**.

**Default value**:  **600**

## dcf\_log\_path\_permission<a name="section1250875212192"></a>

**Parameter description**: Specifies the attribute of the DCF run log directory. The parameter setting takes effect after the system is restarted. This parameter is configured during installation and cannot be modified. To allow other users in the same group to access the log path, set this parameter to  **750**. Otherwise, set this parameter to  **700**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated type. The value can be  **700**  or  **750**.

**Default value**:  **700**

