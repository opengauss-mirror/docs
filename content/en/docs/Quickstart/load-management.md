# Load Management<a name="EN-US_TOPIC_0251900958"></a>

If database resource usage is not controlled, concurrent tasks easily preempt resources. As a result, the OS will be overloaded and cannot respond to user tasks; or even crash and cannot provide any services to users. The openGauss workload management balances the database workload based on available resources to prevent database overloads.

## use\_workload\_manager<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s9608d330c6a14d2cbd6ae75493437820"></a>

**Parameter description**: specifies whether to enable the resource management function.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates the resource management function is enabled.
-   **off**  indicates the resource management function is disabled.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If method 2 in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)  is used to change the parameter value, the new value takes effect only for the threads that are started after the change. In addition, the new value does not take effect for new jobs that are executed by backend threads and reused threads. You can make the new value take effect for these threads by using  **kill session**  or restarting the node.
    >-   After the value of  **use\_workload\_manager**  changes from  **off**  to  **on**, statistics about storage resources when  **use\_workload\_manager**  is  **off**  are not collected. To collect statistics about such resources, run the following statement:
    >    ```
    >    select gs_wlm_readjust_user_space(0);
    >    ```


**Default value**:  **on**

## cgroup\_name<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_sf87b8e83f9984548aa8c3c5261388782"></a>

**Parameter description**: Specifies the name of the Cgroup in use or changes the priority of items in the queue of the Cgroup.

If you set  **cgroup\_name**  and then  **session\_respool**, the Cgroups associated with  **session\_respool**  take effect. If you reverse the order, Cgroups associated with  **cgroup\_name**  take effect.

If the Workload Cgroup level is specified during the  **cgroup\_name**  change, the database does not check the Cgroup level. The level ranges from 1 to 10.

This parameter is a USERSET parameter. Set it based on method 3 provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

You are not advised to set  **cgroup\_name**  and  **session\_respool**  at the same time.

**Value range**: a string

**Default value**:  **InvalidGroup**

## cpu\_collect\_timer<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s25f221fb6c1849b1977009b991781d75"></a>

**Parameter description**: Specifies how frequently CPU data is collected during statement execution on database node.

The database administrator changes the value of this parameter based on system resources \(for example, CPU, I/O, and memory resources\) so that the system fully supports the concurrency tasks and avoids too many concurrency tasks resulting in system crash.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_. The unit is s.

**Default value**:  **30**

## memory\_tracking\_mode<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s7e149f616f584b5eb89b4bebd52ad6c9"></a>

**Parameter description**: Specifies the memory information recording mode.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

Value range:

-   **none**: Memory statistics are not collected.
-   **normal:**  Only memory statistics are collected in real time and no file is generated.
-   **executor**: A statistics file is generated, containing the context information of all allocated memory used on the execution layer.
-   **fullexec**: The generated file includes the information about all memory contexts requested by the execution layer.

**Default value**:  **none**

## memory\_detail\_tracking<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s6ab2e03dcf0b46beb775b0154e4ee762"></a>

**Parameter description**: Sets the memory context allocation priority of a thread and the plannodeid of the query for which the current thread is running.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>You are advised to retain the default value for this parameter.

## enable\_resource\_track<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_sb8ca264785d649368247597883d52ffd"></a>

**Parameter description**: specifies whether the real-time resource monitoring function is enabled.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates the resource monitoring function is enabled.
-   **off**  indicates the resource monitoring function is disabled.

**Default value**:  **on**

## enable\_resource\_record<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s77bd1023b63c4cd489760aa33f08d1ea"></a>

**Parameter description**: Specifies whether resource monitoring records are archived.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the resource monitoring records are archived.
-   **off**  indicates that the resource monitoring records are not archived.

**Default value**:  **off**

## enable\_logical\_io\_statistics<a name="en-us_topic_0242371519_en-us_topic_0237124729_section97691823517"></a>

**Parameter description**: Specifies whether the resource monitoring logical I/O statistics function is enabled. If this function is enabled, fields in the PG\_TOTAL\_USER\_RESOURCE\_INFO view such as  **read\_kbytes**,  **write\_kbytes**,  **read\_counts**,  **write\_counts**,  **read\_speed**, and  **write\_speed**  collect statistics on the number of logical read/write bytes, number of read/write times, and the read/write speed.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the resource monitoring logical I/O statistics function is enabled.
-   **off**  indicates that the resource monitoring logical I/O statistics function is disabled.

**Default value**:  **on**

## enable\_user\_metric\_persistent<a name="en-us_topic_0242371519_en-us_topic_0237124729_section1255143891414"></a>

**Parameter description**: Specifies whether the user historical resource monitoring dumping function is enabled. If this function is enabled, data in view PG\_TOTAL\_USER\_RESOURCE\_INFO is periodically sampled and saved to system catalog  [GS\_WLM\_USER\_RESOURCE\_HISTORY](en-us_topic_0242385792.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**on**  indicates that the user historical resource monitoring dumping function is enabled.

**off**  indicates that the user historical resource monitoring dumping function is disabled.

Default value:  **on**

## user\_metric\_retention\_time<a name="en-us_topic_0242371519_en-us_topic_0237124729_section23251458141716"></a>

**Parameter description**: Specifies the retention time of the user historical resource monitoring data. This parameter is valid only when  **enable\_user\_metric\_persistent**  is set to  **on**.

This parameter is a USERSET parameter. Set it based on methods 1 and 2 provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 730. The unit is day.

If this parameter is set to  **0**, user historical resource monitoring data is permanently stored.

If the value is greater than  **0**, user historical resource monitoring data is stored for the specified number of days.

**Default value**:  **7**

## enable\_instance\_metric\_persistent<a name="en-us_topic_0242371519_en-us_topic_0237124729_section18113133910385"></a>

**Parameter description**: Specifies whether the instance resource monitoring dumping function is enabled. When this function is enabled, the instance monitoring data is saved to the system catalog  [GS\_WLM\_INSTANCE\_HISTORY](en-us_topic_0242385749.md).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the instance resource monitoring dumping function is enabled.
-   **off**: Specifies that the instance resource monitoring dumping function is disabled.

**Default value**:  **on**

## instance\_metric\_retention\_time<a name="en-us_topic_0242371519_en-us_topic_0237124729_section314449385"></a>

**Parameter description**: Specifies the retention time of the instance historical resource monitoring data. This parameter is valid only when  **enable\_instance\_metric\_persistent**  is set to  **on**.

This parameter is a USERSET parameter. Set it based on methods 1 and 2 provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 3650. The unit is day.

-   If this parameter is set to  **0**, instance historical resource monitoring data is permanently stored.
-   If the value is greater than  **0**, instance historical resource monitoring data is stored for the specified number of days.

**Default value**:  **7**

## resource\_track\_level<a name="en-us_topic_0242371519_en-us_topic_0237124729_section153571329142612"></a>

**Parameter description**: Specifies the resource monitoring level of the current session. This parameter is valid only when  **enable\_resource\_track**  is set to  **on**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Valid value**: enumerated values

-   **none**: Resources are not monitored.
-   **query**: Resources used at the query level are monitored.
-   **operator**: Resources used at query and operator levels are monitored.

**Default value**:  **query**

## resource\_track\_cost<a name="en-us_topic_0242371519_en-us_topic_0237124729_section1089022732713"></a>

**Parameter description**: Specifies the minimum execution cost for resource monitoring on statements in the current session. This parameter is valid only when  **enable\_resource\_track**  is set to  **on**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to  _INT\_MAX_

-   **–1**  indicates that resource monitoring is disabled.
-   A value ranging from 0 to 9 indicates that statements whose execution cost is greater than or equal to 10 will be monitored.
-   A value greater than or equal to  **10**  indicates that statements whose execution cost exceeds this value will be monitored.

**Default value**:  **100000**

## resource\_track\_duration<a name="en-us_topic_0242371519_en-us_topic_0237124729_section347574425112"></a>

**Parameter description**: Specifies the minimum statement execution time that determines whether information about jobs of a statement recorded in the real-time view will be dumped to a historical view after the statement is executed. Job information will be dumped from the real-time view \(with the suffix  **statistics**\) to a historical view \(with the suffix  **history**\) if the statement execution time is no less than this value. This parameter is valid only when  [enable\_resource\_track](#en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_sb8ca264785d649368247597883d52ffd)  is set to  **on**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is s.

-   **0**  indicates that historical information about all statements recorded in the real-time resource monitoring view are archived.
-   If the value is greater than  **0**, historical information about a statement whose execution time exceeds this value will be archived.

**Default value**:  **1min**

## disable\_memory\_protect<a name="en-us_topic_0242371519_en-us_topic_0237124729_section174761723101217"></a>

**Parameter description**: Stops memory protection. To query system views when system memory is insufficient, set this parameter to  **on**  to stop memory protection. This parameter is used only to diagnose and debug the system when system memory is insufficient. Set it to  **off**  in other scenarios.

This parameter is a USERSET parameter and is valid only for the current session. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that memory protection stops.
-   **off**  indicates that memory is protected.

**Default value**:  **off**

## query\_band<a name="en-us_topic_0242371519_en-us_topic_0237124729_section631565955912"></a>

**Parameter description**: Specifies the job type of the current session.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## enable\_bbox\_dump<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_section10758942101117"></a>

**Parameter description**: Specifies whether the black box function is enabled. The core files can be generated even through the core dump mechanism is not configured in the system.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the black box function is enabled.
-   **off**  indicates that the black box function is disabled.

**Default value**:  **off**

## bbox\_dump\_count<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s03ba824694c84fdf8dad4f710d0e3a53"></a>

**Parameter description**: Specifies the maximum number of core files that are generated by openGauss and can be stored in the path specified by  [bbox\_dump\_path](#en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s4fe2520e9c914f1293e1f9314db2d519). If the number of core files exceeds this value, old core files will be deleted. This parameter is valid only when  [enable\_bbox\_dump](#en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_section10758942101117)  is set to  **on**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 20

**Default value**:  **8**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>When core files are generated during concurrent SQL statement execution, the number of files may be larger than the value of  **bbox\_dump\_count**.

## bbox\_dump\_path<a name="en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_s4fe2520e9c914f1293e1f9314db2d519"></a>

**Parameter description**: Specifies the path where the black box core files are generated. This parameter is valid only when  [enable\_bbox\_dump](#en-us_topic_0242371519_en-us_topic_0237124729_en-us_topic_0059777791_section10758942101117)  is set to  **on**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty The default path where the black box core files are generated is  **/proc/sys/openGauss/core\_pattern**. If the path is not a directory or you do not have the write permission for the directory, the black box core files will be generated in the data directory of the database. Alternatively, use the directory specified during installation.

## io\_limits<a name="en-us_topic_0242371519_en-us_topic_0237124729_section1148143712203"></a>

**Parameter description**: Specifies the upper limit of IOPS triggered.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1073741823

**Default value**:  **0**

## io\_priority<a name="en-us_topic_0242371519_en-us_topic_0237124729_section0751123912227"></a>

**Parameter description**: Specifies the I/O priority for jobs that consume many I/O resources. It takes effect when the I/O usage reaches 50%.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Valid value**: enumerated values

-   **None**  indicates no control.
-   **Low**  indicates that the IOPS is reduced to 10% of the original value.
-   **Medium**  indicates that the IOPS is reduced to 20% of the original value.
-   **High**  indicates that the IOPS is reduced to 50% of the original value.

**Default value**:  **None**

## io\_control\_unit<a name="en-us_topic_0242371519_en-us_topic_0237124729_section15795121713159"></a>

**Parameter description**: Specifies the unit used to count the number of I/Os during I/O control in row-store scenarios.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

Set a certain number of I/Os as one unit. This unit is used during the I/O control.

**Value range**: an integer ranging from 1000 to 1000000

**Default value**:  **6000**

## session\_respool<a name="en-us_topic_0242371519_en-us_topic_0237124729_section2673131522715"></a>

**Parameter description**: Specifies the resource pool associated with the current session.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

If you set  **cgroup\_name**  and then  **session\_respool**, the Cgroups associated with  **session\_respool**  take effect. If you reverse the order, Cgroups associated with  **cgroup\_name**  take effect.

If the Workload Cgroup level is specified during the  **cgroup\_name**  change, the database does not check the Cgroup level. The level ranges from 1 to 10.

You are advised not to set  **cgroup\_name**  and  **session\_respool**  at the same time.

**Value range**: a string. This parameter can be set to the resource pool configured through  **create resource pool**.

**Default value**:  **invalid\_pool**

## session\_statistics\_memory<a name="en-us_topic_0242371519_en-us_topic_0237124729_section4520191223820"></a>

**Parameter description**: Specifies the memory size of a real-time query view.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 5 x 1024 to 50% of  **max\_process\_memory**. The unit is KB.

**Default value**:  **5MB**

## topsql\_retention\_time<a name="en-us_topic_0242371519_section7395215525"></a>

**Parameter description**: Specifies the retention period of historical TopSQL data in the  **gs\_wlm\_session\_query\_info\_all**  and  **gs\_wlm\_operator\_info**  tables.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 730. The unit is day.

-   If it is set to  **0**, the data is stored permanently.
-   If the value is greater than  **0**, the data is stored for the specified number of days.

**Default value**:  **0**

## session\_history\_memory<a name="en-us_topic_0242371519_en-us_topic_0237124729_section27306369458"></a>

**Parameter description**: Specifies the memory size of a historical query view.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 x 1024 to 50% of  **max\_process\_memory**. The unit is KB.

**Default value:** **10MB**

## transaction\_pending\_time<a name="en-us_topic_0242371519_en-us_topic_0237124729_section1835116504363"></a>

**Parameter description**: maximum queuing time of transaction block statements and stored procedure statements.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to  _INT\_MAX/2_. The unit is s.

-   **–1**  or  **0**: No queuing timeout is specified for transaction block statements and stored procedure statements. The statements can be executed when resources are available.
-   Value greater than  **0**: If transaction block statements and stored procedure statements have been queued for a time longer than the specified value, they are forcibly executed regardless of the current resource situation.

**Default value**:  **0**

