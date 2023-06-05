# User-defined Functions<a name="EN-US_TOPIC_0000001130221229"></a>

## udf\_memory\_limit<a name="en-us_topic_0283137548_en-us_topic_0237124743_section1765913299426"></a>

**Parameter description**: Controls the maximum physical memory that can be used when each database node executes UDFs. This parameter does not take effect in the current version. Use  **FencedUDFMemoryLimit**  and  **UDFWorkerMemHardLimit**  to control virtual memory used by fenced udf worker.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. The value range is from 200 x 1024 to  _max\_process\_memory_  and the unit is KB.

**Default value**:  **200 MB**

## FencedUDFMemoryLimit<a name="en-us_topic_0283137548_en-us_topic_0237124743_section0948171616421"></a>

**Parameter description**: Specifies the virtual memory used by each fenced udf worker process.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 KB to 2147483647 KB. The unit can also be MB or GB.  **0**  indicates that the memory is not limited.

**Default value**:  **0**

## UDFWorkerMemHardLimit<a name="en-us_topic_0283137548_en-us_topic_0237124743_section19591235141915"></a>

**Parameter description**: Specifies the maximum value of  **fencedUDFMemoryLimit**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

Value range: an integer ranging from 0KB to 2147483647KB. The unit can also be MB or GB.

**Default value**:  **1GB**

## pljava\_vmoptions<a name="en-us_topic_0283137548_en-us_topic_0237124743_section867525320283"></a>

**Parameter description**: Specifies the startup parameters for JVMs used by the PL/Java function. Only the sysadmin user can access this parameter.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, supporting:

-   JDK8 JVM startup parameters. For details, see JDK  [official ](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html)descriptions.
-   JDK8 JVM system attributes \(starting with  **–D**, for example,  **–Djava.ext.dirs**\). For details, see JDK  [official ](https://docs.oracle.com/javase/tutorial/deployment/doingMoreWithRIA/properties.html)descriptions.
-   User-defined parameters \(starting with  **–D**, for example,  **–Duser.defined.option**\).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If  **pljava\_vmoptions**  is set to a value beyond the value range, an error will be reported when PL/Java functions are used. For details, see  [PL/pgSQL Functions](../SQLReference/pl-pgsql-functions.md).

**Default value:**  empty