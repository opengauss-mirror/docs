# Thread Pool<a name="EN-US_TOPIC_0000001130026843"></a>

## enable\_thread\_pool<a name="en-us_topic_0283137548_en-us_topic_0237124743_section97160555612"></a>

**Parameter description**: Specifies whether to enable the thread pool function. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the thread pool function is enabled.
-   **off**  indicates that the thread pool function is disabled.

**Default value**:  **off**

## thread\_pool\_attr<a name="en-us_topic_0283137548_en-us_topic_0237124743_section787511112134"></a>

**Parameter description**: Specifies the detailed attributes of the thread pool function. This parameter is valid only when  **enable\_thread\_pool**  is set to  **on**. Only the sysadmin user can access this parameter. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters

This parameter consists of three parts: thread\_num, group\_num, and cpubind\_info. The meanings of the three parts are as follows:

-   **thread\_num**  indicates the total number of threads in the thread pool. The value ranges from 0 to 4096. The value  **0**  indicates that the database automatically configures the number of threads in the thread pool based on the number of CPU cores. If the value is greater than  **0**, the number of threads in the thread pool is the same as the value of  **thread\_num**. You are advised to set the thread pool size based on the hardware configuration. The formula is as follows: Value of  **thread\_num**  = Number of CPU cores x 3–5. The maximum value of  **thread\_num**  is  **4096**.
-   **group\_num**  indicates the number of thread groups in the thread pool. The value ranges from 0 to 64. The value  **0**  indicates that the database automatically configures the number of thread groups in the thread pool based on the number of NUMA groups. If the value is greater than  **0**, the number of thread groups in the thread pool is the same as the value of  **group\_num**.
-   **cpubind\_info**  indicates whether the thread pool is bound to a core. The available configuration modes are as follows: 1.  **'\(nobind\)'**: The thread is not bound to a core. 2.  **'\(allbind\)'**: Use all CPU cores that can be queried in the current system to bind threads. 3.  **'\(nodebind: 1, 2\)'**: Use the CPU cores in NUMA groups 1 and 2 to bind threads. 4.  **'\(cpubind: 0-30\)'**: Use CPU cores 0 to 30 to bind threads. 5.  **'\(numabind: 0-30\)'**: Use CPU cores 0 to 30 in the NUMA group to bind threads. This parameter is case-insensitive.

**Default value**:  **'16, 2, \(nobind\)'**

## thread\_pool\_stream\_attr<a name="section4304555165418"></a>

**Parameter description**: Specifies the detailed attributes of the stream thread pool function. This parameter is valid only when  **enable\_thread\_pool**  is set to  **on**. Only the  **sysadmin**  user can access this parameter. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters

This parameter consists of two parts:  **stream\_thread\_num**  and  **stream\_proc\_ratio**. The meanings of the two parts are as follows:

-   **stream\_thread\_num**  indicates the total number of threads in the stream thread pool. The value ranges from 0 to 4096. The value  **0**  indicates that the database automatically configures the number of threads in the thread pool based on the number of CPU cores. If the value is greater than  **0**, the number of threads in the thread pool is the same as the value of  **stream\_thread\_num**. You are advised to set the thread pool size based on the hardware configuration. The formula is as follows: Value of  **stream\_thread\_num**  = Number of CPU cores x 3–5. The maximum value of  **stream\_thread\_num**  is  **4096**.
-   **stream\_proc\_ratio**  indicates the ratio of proc resources reserved for stream threads. The value is a floating point number. The default value is  **0.2**. The reserved proc resources are calculated as follows:  **stream\_proc\_ratio**  x  **stream\_thread\_num**.

**Default value**:  **'16, 0.2'**

