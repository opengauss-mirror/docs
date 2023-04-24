# Scheduled Task<a name="EN-US_TOPIC_0000001083527348"></a>

## job\_queue\_processes<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section10342177134137"></a>

**Parameter description:**  Specifies the number of jobs that can be concurrently executed. This parameter is a POSTMASTER parameter. You can set it using  **gs\_guc**, and you need to restart  **gaussdb**  to make the setting take effect.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 1000

Function:

-   Setting  **job\_queue\_processes**  to  **0**  indicates that the scheduled job function is disabled and that no job will be executed. \(Enabling scheduled jobs may affect the system performance. At sites where this function is not required, you are advised to disable it.\)
-   Setting  **job\_queue\_processes**  to a value that is greater than  **0**  indicates that the scheduled job function is enabled and this value is the maximum number of jobs that can be concurrently processed.

After the scheduled job function is enabled, the job\_scheduler thread polls the  **pg\_job**  system catalog at a scheduled interval. The scheduled job check is performed every second by default.

Too many concurrent jobs consume many system resources, so you need to set the number of concurrent jobs to be processed. If the current number of concurrent jobs reaches the value of  **job\_queue\_processes**  and some of them expire, these jobs will be postponed to the next polling period. Therefore, you are advised to set the polling interval \(the  **Interval**  parameter of the  **submit**  interface\) based on the execution duration of each job to avoid the problem that jobs in the next polling period cannot be properly processed because of overlong job execution time.

Note: If the number of concurrent jobs is large and the value is too small, these jobs will wait in queues. However, a large parameter value leads to large resource consumption. You are advised to set this parameter to  **100**  and change it based on the system resource condition.

**Default value**:  **10**

## enable\_prevent\_job\_task\_startup<a name="en-us_topic_0283137548_en-us_topic_0237124743_section7473175117193"></a>

**Parameter description**: Specifies whether to start the job thread.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the job thread is not started.
-   **off**  indicates that the job thread is started.

**Default value**:  **off**

