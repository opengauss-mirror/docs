# Communication Library Parameters<a name="EN-US_TOPIC_0289900401"></a>

This section describes parameter settings and value ranges for communication libraries.

## tcp\_keepalives\_idle<a name="en-us_topic_0283137640_en-us_topic_0237124697_en-us_topic_0059778583_s6408e7a3547b4238a82bbeee5c3555b1"></a>

**Parameter description**: Specifies the interval for transmitting keepalive signals on an OS that supports the  **TCP\_KEEPIDLE**  socket option. If no keepalive signal is transmitted, the connection is in idle mode.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If the OS does not support  **TCP\_KEEPIDLE**, set this parameter to  **0**.
>-   The parameter is ignored on an OS where connections are established using the Unix domain socket.
>-   If this parameter is set to  **0**, the system value is used.
>-   This parameter is not shared among different sessions. That is, different session connections may have different values.
>-   The parameter value in the current session connection, not the value of the GUC copy, is displayed.

**Value range:**  0 to 3600. The unit is s.

**Default value**:  **0**

## tcp\_keepalives\_interval<a name="en-us_topic_0283137640_en-us_topic_0237124697_en-us_topic_0059778583_s468705800b794486898007eb63b3b595"></a>

**Parameter description:**  Specifies the response time before retransmission on an OS that supports the  **TCP\_KEEPINTVL**  socket option.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 180. The unit is s.

**Default value**:  **300**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If the OS does not support  **TCP\_KEEPINTVL**, set this parameter to  **0**.
>-   The parameter is ignored on an OS where connections are established using the Unix domain socket.
>-   If this parameter is set to  **0**, the system value is used.
>-   This parameter is not shared among different sessions. That is, different session connections may have different values.
>-   The parameter value in the current session connection, not the value of the GUC copy, is displayed.

## tcp\_keepalives\_count<a name="en-us_topic_0283137640_en-us_topic_0237124697_en-us_topic_0059778583_scb812ad2f34f47dcabeac73c6e1a163c"></a>

**Parameter description**: Specifies the number of keepalive signals that can be waited before the openGauss server is disconnected from the client on an OS that supports the  **TCP\_KEEPCNT**  socket option.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If the OS does not support  **TCP\_KEEPCNT**, set this parameter to  **0**.
>-   The parameter is ignored on an OS where connections are established using the Unix domain socket.
>-   If this parameter is set to  **0**, the system value is used.
>-   This parameter is not shared among different sessions. That is, different session connections may have different values.
>-   The parameter value in the current session connection, not the value of the GUC copy, is displayed.

**Value range**: 0 to 100.  **0**  indicates that the connection is immediately broken if openGauss does not receive a keepalived signal from the client.

**Default value:** **0**

## comm\_proxy\_attr<a name="section167117211811"></a>

**Parameter description**: Specifies the parameters related to the communication proxy library.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   This parameter applies only to the centralized ARM standalone system running EulerOS 2.9.
>-   This function takes effect when the thread pool is enabled, that is,  **enable\_thread\_pool**  is set to  **on**.
>-   When setting this parameter, you need to set the GUC parameter  **local\_bind\_address**  to the IP address of the NIC of the  **libos\_kni**.
>-   **Parameter template**: comm\_proxy\_attr = '\{enable\_libnet:true, enable\_dfx:false, numa\_num:4, numa\_bind:\[\[30,31\],\[62,63\],\[94,95\],\[126,127\]\]\}'
>-   Parameters that need to be configured include:
>    -   **enable\_libnet**: whether to enable the user-mode protocol. The options are as follows:  **true**  and  **false**.
>    -   **enable\_dfx**: whether to enable the communication proxy library view. The options are as follows:  **true**  and  **false**.
>    -   **numa\_num**: number of NUMA nodes in the system. 2P and 4P servers are supported. The value can be:  **4**  or  **8**.
>    -   **numa\_bind**: core binding parameter of the agent thread. Each numa has two CPUs. There are a total of  **numa\_num**  groups. The value range is as follows: \[0, Number of CPUs – 1\].

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters

**Default value**:  **none**

