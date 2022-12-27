# Miscellaneous Parameters<a name="EN-US_TOPIC_0289900522"></a>

## enable\_default\_ustore\_table<a name="section477353310529"></a>

**Parameter description:**  Specifies whether to enable the UStore storage engine by default. If this parameter is set to  **on**, all created tables are UStore tables.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). Note that the  **track\_counts**  and  **track\_activities**  parameters must be enabled when the Ustore table is used. Otherwise, space expansion may occur.

**Value range:**  \[off,on\]

**Default value**:  **off**

## enable\_ustore<a name="section477353310529"></a>

**Parameter description**: Specifies whether to enable the Ustore storage engine. If this parameter is set to  **on**, Ustore tables can be created. Note that the  **track\_counts**  and  **track\_activities**  parameters must be enabled when the Ustore table is used. Otherwise, space expansion may occur.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  \[off,on\]

**Default value**:  **on**

## reserve\_space\_for\_nullable\_atts<a name="section475852314301"></a>

**Parameter description**: Specifies whether to reserve space for the nullable attribute of an Ustore table. If this parameter is set to  **on**, space is reserved for the nullable attribute of the Ustore table by default.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  \[off,on\]

**Default value**:  **on**

## ustore\_attr<a name="section671116119353"></a>

**Parameter description:**  Specifies the UStore test parameters.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

You can set  **enable\_ustore\_partial\_seqscan**  \(copy selective columns only during sequential scanning in the ustore table\),  **enable\_candidate\_buf\_usage\_count**  \(whether dirty pages are evicted and added to the use count weight\), and  **ustats\_tracker\_naptime**  \(time for reloading the statistics file\).  **umax\_search\_length\_for\_prune**  \(number of blocks to be pruned before table extension\) and  **ustore\_unit\_test**  \(starting the UStore white box test\). The setting method is ustore\_att ='**enable\_ustore\_partial\_seqscan**=on'.

**Value range**: a string

## server\_version<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s1df9119d74fe45da9452d4cb4802f84c"></a>

**Parameter description**: Specifies the server version number.

This parameter is a fixed parameter of the INTERNAL type. It can be viewed but cannot be modified. This parameter is inherited from the PostgreSQL kernel, indicating that the current database kernel is compatible with the server\_version version corresponding to PostgreSQL. This parameter is reserved to ensure the ecosystem compatibility of the northbound external tool interface \(query when the tool is connected\). This parameter is not recommended. To query the server version, use the opengauss\_version\(\) function.

**Value range**: a string

**Default value**:  **9.2.4**

## server\_version\_num<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_sa4182f08e006431fbad639fe6963560f"></a>

**Parameter description**: Specifies the server version number.

This parameter is a fixed parameter of the INTERNAL type. It can be viewed but cannot be modified. This parameter is the openGauss version.

**Value range**: an integer

**Default value**:  **30000**

## block\_size<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s46449cae21604e8d828a3614d26d3874"></a>

**Parameter description**: Specifies the block size of the current database.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value**:  **8192**

**Default value**:  **8192**

## segment\_size<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_se61b24947cbf4fc99dbf52bbdbd5291b"></a>

**Parameter description**: Specifies the segment file size of the current database.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Unit**: 8 KB

**Default value**: 131072, that is, 1 GB

## max\_index\_keys<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s1992e0f4a9694daba20844fd94408f80"></a>

**Parameter description**: Specifies the maximum number of index keys supported by the current database.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Default value**:  **32**

## integer\_datetimes<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s2cf7071ca7cf4b79a23cbc4664f508a8"></a>

**Parameter description**: Specifies whether the date and time are in the 64-bit integer format.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value range**: Boolean

-   **on**  indicates that the 64-bit integer format is used.
-   **off**  indicates that the 64-bit integer format is not used.

**Default value**:  **on**

## lc\_collate<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s2f3ca5fe93c04242aae028fd44ffb57c"></a>

**Parameter description:**  Specifies the locale in which sorting of textual data is done.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Default value**: Determined by the configuration set during the openGauss installation and deployment.

## lc\_ctype<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s8d813413a667463db959fd155dca4a7d"></a>

**Parameter description**: Specifies the locale that determines character classifications. For example, it specifies what a letter and its upper-case equivalent are.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Default value**: Determined by the configuration set during the openGauss installation and deployment.

## max\_identifier\_length<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s0aed6ba352a6486a9f2065914e6322c4"></a>

**Parameter description**: Specifies the maximum identifier length.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value range**: an integer

**Default value**:  **63**

## server\_encoding<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s6ea4fdcca287481ba5fff4d6defeaf79"></a>

**Parameter description**: Specifies the database encoding \(character set\).

By default, gs\_initdb will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Default value:**  determined by the current system environment when the database is created.

## enable\_upgrade\_merge\_lock\_mode<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s46dd96b9ae0c45ff83bb1c444cbc4327"></a>

**Parameter description**: If this parameter is set to  **on**, the delta merge operation internally increases the lock level, and errors can be prevented when update and delete operations are performed at the same time.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   If this parameter is set to  **on**, the delta merge operation internally increases the lock level. In this way, when the  **DELTAMERGE**  operation is concurrently performed with the  **UPDATE**  or  **DELETE**  operation, one operation can be performed only after the previous one is complete.
-   If this parameter is set to  **off**  and the  **DELTAMERGE**  operation is concurrently performed with the  **UPDATE**  or  **DELETE**  operation to the data in a row in the delta table of the table, errors will be reported during the later operation, and the operation will stop.

**Default value**:  **off**

## transparent\_encrypted\_string<a name="en-us_topic_0283137574_en-us_topic_0237124754_section59019117496"></a>

**Parameter description**: Specifies a sample string that is transparently encrypted. Its value is generated by encrypting  **TRANS\_ENCRYPT\_SAMPLE\_STRING**  using a database secret key. The ciphertext is used to check whether the DEK obtained during secondary startup is correct. If it is incorrect, database nodes will not be started. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). This parameter applies only to the DWS scenario in the current version.

**Value range**: a string. An empty string indicates that openGauss is a not encrypted.

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Do not set this parameter manually. Otherwise, openGauss may become faulty.

## transparent\_encrypt\_kms\_url<a name="en-us_topic_0283137574_en-us_topic_0237124754_section14139346195718"></a>

**Parameter description**: Specifies the URL for obtaining the database secret key to be transparently encrypted. It must contain only the characters specified in RFC3986, and the maximum length is 2047 bytes. The format is  **kms://***Protocol***@***KMS host name 1***;***KMS host name 2***:***KMS port number***/kms**, for example,  **kms://https@linux175:29800/**. This parameter applies only to the DWS scenario in the current version.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## transparent\_encrypt\_kms\_region<a name="en-us_topic_0283137574_en-us_topic_0237124754_section11856132918597"></a>

**Parameter description**: Specifies the deployment region of openGauss. It must contain only the characters specified in RFC3986, and the maximum length is 2047 bytes. This parameter applies only to the DWS scenario in the current version.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## basebackup\_timeout<a name="section2190024353"></a>

**Parameter description:**  Specifies the timeout interval for a connection that has no read or write operations after a backup transfer is complete.

When the gs\_basebackup tool is used for transmission and a high compression rate is specified, the transmission of the tablespace may time out \(the client needs to compress the transmitted data\).

**Value range**: an integer ranging from 0 to  *INT\*MAX_. The unit is s.  **0**  indicates that archiving timeout is disabled.

**Default value:**  600s

## datanode\_heartbeat\_interval<a name="en-us_topic_0283137574_en-us_topic_0237124754_section136882143238"></a>

**Parameter description**: Specifies the interval at which heartbeat messages are sent between heartbeat threads. You are advised to set this parameter to a value no more than wal\_receiver\_timeout/2.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1000 to 60000. The unit is ms.

**Default value**:  **1s**

## max\_concurrent\_autonomous\_transactions<a name="section14683125864116"></a>

**Parameter description**: Specifies the maximum number of autonomous transaction connections, that is, the maximum number of concurrent autonomous transactions executed at the same time. If this parameter is set to  **0**, autonomous transactions cannot be executed.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0–1024

**Default value:** **10**

## group\_concat\_max\_len

**Parameter description**: In B-compatible mode, this parameter limits the length of the return value of GROUP_CONCAT. If the length exceeds the limit, the return value is truncated.

Note: Currently, the maximum length that can be returned is 1073741823. If the length exceeds 1073741823, the out of memory error is reported.

This parameter is a USERSET parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 9223372036854775807

**Default value**: **1024**

## sql\_ignore\_strategy<a name="section106841634172711"></a>

**Parameter description:** In B-compatible mode, this parameter controls the processing policy of the ignore_error hint when non-null constraints are violated.

This parameter is a USERSET parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-note.gif) **NOTE:**
>For details about the ignore_error hint, see [Hint for Degrading Some Errors to Warnings](hint-for-degrading-some-errors-to-warnings.md).

**Value range**: enumerated values

-   **ignore_null**: ignores rows that violate non-null constraints.
-   **overwrite_null**: overwrites the null value that violates the constraint to the default value of the target type.

**Default value**: **ignore_null**

## acceleration\_with\_compute\_pool<a name="section13787157164412"></a>

**Parameter description**: Specifies whether to use the computing resource pool for acceleration when an OBS is queried.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the query covering the OBS is accelerated based on the cost when the computing resource pool is available.
-   **off**  indicates that no query is accelerated using the computing resource pool.

**Default value**:  **off**

## max\_resource\_package<a name="section106841634172711"></a>

**Parameter description:**  Specifies the maximum number of threads that DN can run concurrently on an acceleration database instance on the cloud.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 2147483647

**Default value**:  **0**
