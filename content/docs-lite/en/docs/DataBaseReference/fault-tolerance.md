# Fault Tolerance<a name="EN-US_TOPIC_0289900527"></a>

This section describes parameters used for controlling how the server processes an error occurring in the database system.

## exit\_on\_error<a name="en-us_topic_0283137273_en-us_topic_0237124739_en-us_topic_0059778347_s92b7514aaee24fd3a36bdce5721b9c21"></a>

**Parameter description:**  If this function is enabled, errors of the ERROR level will be upgraded to PANIC errors, and core stacks will be generated. It is mainly used to locate problems and test services.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that errors of the ERROR level will be upgraded to PANIC errors.
-   **off**  indicates that errors of the ERROR level will not be upgraded.

**Default value**:  **off**

## restart\_after\_crash<a name="en-us_topic_0283137273_en-us_topic_0237124739_en-us_topic_0059778347_s133024ba8a904b06ae28d9a161e82568"></a>

**Parameter description**: If this parameter is set to  **on**  and a backend process crashes, openGauss automatically reinitializes the backend process.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  maximizes the availability of the database.

    In some circumstances \(for example, when a management tool, such as xCAT, is used to manage openGauss\), setting this parameter to  **on**  maximizes the availability of the database.

-   **off**  indicates that a management tool is enabled to obtain control permission and take proper measures when a backend process crashes.

**Default value**:  **on**

## omit\_encoding\_error<a name="en-us_topic_0283137273_en-us_topic_0237124739_en-us_topic_0059778347_s6954e821a40e489e8e47cff0fd6dfefa"></a>

**Parameter description**: If this parameter is set to  **on**  and the client character set of the database is encoded in UTF-8 format, character encoding conversion errors will be recorded in logs. Additionally, converted characters that have conversion errors will be ignored and replaced with question marks \(?\).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that characters that have conversion errors will be ignored and replaced with question marks \(?\), and error information will be recorded in logs.
-   **off**  indicates that characters that have conversion errors cannot be converted and error information will be directly displayed.

**Default value**:  **off**

## max\_query\_retry\_times<a name="en-us_topic_0283137273_en-us_topic_0237124739_en-us_topic_0059778347_sd8229ae86a5d4552aca3cdfb042f8a9a"></a>

**Parameter description**: Specifies the maximum number of times that an  **SQL**  statement with errors can be re-executed.  **SQL**  statements with the following types of errors can be re-executed:  **Connection reset by peer**,  **Lock wait timeout**, and  **Connection timed out**. If this parameter is set to  **0**, the re-execution function is disabled.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 20

**Default value**:  **0**

## cn\_send\_buffer\_size<a name="en-us_topic_0283137273_en-us_topic_0237124739_section388952103416"></a>

**Parameter description**: Specifies the size of the data buffer used for data transmission on the primary database node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 8 to 128. The unit is KB.

**Default value**:  **8 KB**

## max\_cn\_temp\_file\_size<a name="en-us_topic_0283137273_en-us_topic_0237124739_section37665521353"></a>

**Parameter description**: Specifies the maximum number of temporary files that can be used by the the primary node of the database during automatic SQL statement retries. The value  **0**  indicates that no temporary file is used.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 10485760. The unit is KB.

**Default value**:  **5 GB**

## retry\_ecode\_list<a name="en-us_topic_0283137273_en-us_topic_0237124739_section21795287405"></a>

**Parameter description**: Specifies the list of SQL error types that support automatic retries.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

**Default value**:  **YY001 YY002 YY003 YY004 YY005 YY006 YY007 YY008 YY009 YY010 YY011 YY012 YY013 YY014 YY015 53200 08006 08000 57P01 XX003 XX009 YY016**

## data\_sync\_retry<a name="en-us_topic_0283137273_en-us_topic_0237124739_section10785153116127"></a>

**Parameter description**: Specifies whether to keep running the database when updated data fails to be written into disks by using the  **fsync**  function. In some OSs, no error is reported even if  **fsync**  fails after the second attempt. As a result, data is lost.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that the database keeps running and  **fsync**  is executed again after  **fsync**  fails.
-   **off**  indicates that a PANIC-level error is reported and the database is stopped after  **fsync**  fails.

**Default value**:  **off**

## remote\_read\_mode<a name="en-us_topic_0283137574_en-us_topic_0237124754_section196393555394"></a>

**Parameter description**: Specifies whether to enable the remote read function. This function allows pages on the standby server to be read when reading pages on the primary server fails.

This parameter is a  **POSTMASTER**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **off**  indicates that the remote read function is disabled.
-   **non\_authentication**  indicates that the remote read function is enabled but certificate authentication is not required.
-   **authentication**  indicates that the remote read function is enabled and certificate authentication is required.

**Default value**:  **non\_authentication**

