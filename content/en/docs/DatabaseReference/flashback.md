# Flashback<a name="EN-US_TOPIC_0000001104548132"></a>

This section describes parameters related to the flashback function. In V100R002C10, only the Ustore engine supports flashback, while the Astore engine does not support flashback.

## enable\_recyclebin<a name="section59681653121117"></a>

**Parameter description**: Specifies whether the recycle bin is enabled or disabled in real time.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **off**

>![](./public_sys-resources/icon-caution.gif) **Caution:**
>The recycle bin does not support Astore and supports only Ustore.

## recyclebin\_retention\_time<a name="section9443171010611"></a>

**Parameter description**: Specifies the retention period of objects in the recycle bin. The objects will be automatically deleted after the retention period expires.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647. The unit is s.

**Default value**:  **15 min**  \(900s\)

## version\_retention\_age<a name="section464416433618"></a>

**Parameter description**: Specifies the number of transactions retained in the old version. If the number of transactions exceeds the value of this parameter, the old version will be recycled and cleared.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 576460752303423487.  **0**  means no delay.

**Default value**:  **0**

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>This parameter has been deprecated.

## vacuum\_defer\_cleanup\_age<a name="section1613641811206"></a>

**Parameter description**: Specifies the number of transactions by which  **VACUUM**  will defer the cleanup of invalid row-store table records, so that  **VACUUM**  and  **VACUUM FULL**  do not clean up deleted tuples immediately. You can also set this parameter to configure the retention period of the flashback function in the old version.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000.  **0**  means no delay. The value range needs to be extended to 100 million.

**Default value**:  **0**

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>This parameter can be ignored when you use the Ustore engine to flash back. It serves the Astore flashback function of the earlier version and has other functions. The flashback function is not used in this version.

## undo\_retention\_time<a name="section179846211004"></a>

**Parameter description**: Specifies the period for retaining undo logs of earlier versions.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647. The unit is second.

**Default value**:  **0**
