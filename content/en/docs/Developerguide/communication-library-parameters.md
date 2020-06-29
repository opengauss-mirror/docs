# Communication Library Parameters<a name="EN-US_TOPIC_0242371487"></a>

This section describes parameter settings and value ranges for communication libraries.

## tcp\_keepalives\_idle<a name="en-us_topic_0237124697_en-us_topic_0059778583_s6408e7a3547b4238a82bbeee5c3555b1"></a>

**Parameter description**: Specifies the interval for transmitting keepalive signals on an OS that supports the  **TCP\_KEEPIDLE**  socket option. If no keepalive signal is transmitted, the connection is in idle mode.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   If the OS does not support  **TCP\_KEEPIDLE**, set this parameter to  **0**.  
>-   The parameter is ignored on an OS where connections are established using the Unix domain socket.  

**Value range:**  0 to 3600. The unit is s.

**Default value**:  **60**

## tcp\_keepalives\_interval<a name="en-us_topic_0237124697_en-us_topic_0059778583_s468705800b794486898007eb63b3b595"></a>

**Parameter description**: Specifies the response time before retransmission on an OS that supports the  **TCP\_KEEPINTVL**  socket option.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 180. The unit is s.

**Default value**:  **30**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   If the OS does not support  **TCP\_KEEPINTVL**, set this parameter to  **0**.  
>-   The parameter is ignored on an OS where connections are established using the Unix domain socket.  

## tcp\_keepalives\_count<a name="en-us_topic_0237124697_en-us_topic_0059778583_scb812ad2f34f47dcabeac73c6e1a163c"></a>

**Parameter description**: Specifies the number of keepalive signals that can be waited before the openGauss server is disconnected from the client on an OS that supports the  **TCP\_KEEPCNT**  socket option.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   If the OS does not support  **TCP\_KEEPCNT**, set this parameter to  **0**.  
>-   The parameter is ignored on an OS where connections are established using the Unix domain socket.  

**Value range**: 0 to 100.  **0**  indicates that the connection is immediately broken if openGauss does not receive a keepalived signal from the client.

**Default value:** **20**

## comm\_tcp\_mode<a name="en-us_topic_0237124697_en-us_topic_0059778583_s9c2b835de24c4220acda4c93d05b4291"></a>

**Parameter description**: Specifies whether the communication library uses the TCP or SCTP protocol to set up a data channel. The parameter setting takes effect after you restart openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>SCTP is no longer supported. This parameter is provided for compatibility, but its value is fixed at  **on**.  

**Value range**: Boolean. If this parameter is set to  **on**, TCP is used to connect to database nodes.

**Default value**:  **on**

## comm\_sctp\_port<a name="en-us_topic_0237124697_en-us_topic_0059778583_s77bb44e433084dc1bf68f233a1a59d1e"></a>

**Parameter description**: Specifies the TCP or SCTP port used to listen for data packet channels by the TCP proxy communication library or SCTP communication library.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>This port number is automatically allocated during openGauss deployment. Do not change the parameter value. If the port number is incorrectly configured, the database communication fails.  

**Value range**: an integer ranging from 0 to 65535

**Default value**:  **7000**

## comm\_control\_port<a name="en-us_topic_0237124697_en-us_topic_0059778583_s6d58c8f8d0694c0fb45c95f0c3a9d574"></a>

**Parameter description**: Specifies the TCP listening port used by the TCP proxy communication library or SCTP communication library.

This parameter is a fixed INTERNAL parameter and cannot be modified.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>This port number is automatically allocated during openGauss deployment. Do not change the parameter value. If the port number is incorrectly configured, the database communication fails.  

**Value range**: an integer ranging from 0 to 65535

**Default value**:  **7001**

## comm\_max\_receiver<a name="en-us_topic_0237124697_en-us_topic_0059778583_s31397392c476415995c40f39c4c83872"></a>

**Parameter description**: Specifies the maximum number of receiving threads for the TCP proxy communication library or SCTP communication library.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 50

**Default value:** **4**

## comm\_quota\_size<a name="en-us_topic_0237124697_en-us_topic_0059778583_s720e1f3e5c594fc396c27a3265508bf8"></a>

**Parameter description**: Specifies the maximum size of packets that can be consecutively sent by the TCP proxy communication library or SCTP communication library. When you use a 1GE NIC, a small value ranging from 20 KB to 40 KB is recommended.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2048000. The default unit is KB.

**Default value**:  **1MB**

## comm\_usable\_memory<a name="en-us_topic_0237124697_en-us_topic_0059778583_s67902ead6192494aa7451b60fbcc68e4"></a>

**Parameter description**: Specifies the maximum memory available for buffering on the TCP proxy communication library or SCTP communication library on a database node.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>This parameter must be set based on environment memory and the deployment method. If it is too large, an out-of-memory \(OOM\) exception may occur. If it is too small, the performance of the TCP proxy communication library or SCTP communication library may deteriorate.  

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 x 1024 to  _INT\_MAX_/2. The default unit is KB.

**Default value**:  **4000MB**

## comm\_memory\_pool<a name="en-us_topic_0237124697_section176091443181918"></a>

**Parameter description**: Specifies the size of the memory pool resources that can be used by the TCP proxy communication library or SCTP communication library on a database node.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If the memory used by the communication library is small, set this parameter to a small value. Otherwise, set it to a large value.  

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 x 1024 to  _INT\_MAX_/2. The default unit is KB.

**Default value**:  **2000MB**

## comm\_memory\_pool\_percent<a name="en-us_topic_0237124697_section165486311620"></a>

**Parameter description**: Specifies the percentage of the memory pool resources that can be used by the TCP proxy communication library or SCTP communication library on a database node. This parameter is used to adaptively reserve memory used by the communication library.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If the memory used by the communication library is small, set this parameter to a small value. Otherwise, set it to a large value.  

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 100

**Default value**:  **0**

## comm\_no\_delay<a name="en-us_topic_0237124697_section1371661611123"></a>

**Parameter description**: Specifies whether to use the  **NO\_DELAY**  attribute of the communication library connection. Restart openGauss for the setting to take effect.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If packet loss occurs in openGauss because a large number of packets are received per second, set this parameter to  **off**  so that small packets are combined into large packets for transmission to reduce the total number of packets.  

**Default value**:  **off**

## comm\_debug\_mode<a name="en-us_topic_0237124697_en-us_topic_0059778583_s2541fe454fd041f68c792f4940a9fdb4"></a>

**Parameter description**: Specifies whether to enable the debug mode of the TCP proxy communication library or SCTP communication library, that is, whether to print logs about the communication layer.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If this parameter is set to  **on**, a huge number of logs will be printed, adding extra overhead and reducing database performance. Therefore, set it to  **on**  only in debugging scenarios.  

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the debug logs of the communication library are printed.
-   **off**  indicates that the debug logs of the communication library are not printed.

**Default value**:  **off**

## comm\_ackchk\_time<a name="en-us_topic_0237124697_section1480831194112"></a>

**Parameter description**: Specifies the duration after which the communication library server automatically triggers ACK when no data packet is received.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 20000. The unit is ms.  **0**  indicates that automatic ACK triggering is disabled.

**Default value**:  **2000**

## comm\_timer\_mode<a name="en-us_topic_0237124697_en-us_topic_0059778583_sd059128f7e3f4fe28885af6faf00bd8b"></a>

**Parameter description**: Specifies whether to enable the timer mode of the TCP proxy communication library or SCTP communication library, that is, whether to print timer logs in each phase of the communication layer.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If this parameter is set to  **on**, a huge number of logs will be printed, adding extra overhead and reducing database performance. Therefore, set it to  **on**  only in debugging scenarios.  

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the timer logs of the communication library are printed.
-   **off**  indicates that the timer logs of the communication library are not printed.

**Default value**:  **off**

## comm\_stat\_mode<a name="en-us_topic_0237124697_en-us_topic_0059778583_sff5a7fe3f7d8465291b2a4f46fbd6541"></a>

**Parameter description**: Specifies whether to enable the statistics mode of the TCP proxy communication library or SCTP communication library, that is, whether to print statistics about the communication layer.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If this parameter is set to  **on**, a huge number of logs will be printed, adding extra overhead and reducing database performance. Therefore, set it to  **on**  only in debugging scenarios.  

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the statistics logs of the communication library are printed.
-   **off**  indicates that the statistics logs of the communication library are not printed.

**Default value**:  **off**

