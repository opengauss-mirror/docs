# openGauss事务<a name="ZH-CN_TOPIC_0251900970"></a>

介绍openGauss事务隔离、事务只读、最大prepared事务数、维护模式目的参数设置及取值范围等内容。

## transaction\_isolation<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s2207a1ba0779485aacfd099464414c39"></a>

**参数说明：**设置当前事务的隔离级别。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串，只识别以下字符串，大小写空格敏感：

-   serializable：openGauss中等价于REPEATABLE READ。
-   read committed：只能读取已提交的事务的数据（缺省），不能读取到未提交的数据。
-   repeatable read：仅能读取事务开始之前提交的数据，不能读取未提交的数据以及在事务执行期间由其它并发事务提交的修改。
-   default：设置为defualt\_transaction\_isolation所设隔离级别。

**默认值：**read committed

## transaction\_read\_only<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_safc2c3f7a6b445aca6ccaee3d9e86366"></a>

**参数说明：**设置当前事务是只读事务。该参数在数据库恢复过程中或者在备机里，固定为on；否则，固定为default_transaction_read_only的值。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示设置当前事务为只读事务。
-   off表示该事务可以是非只读事务。

**默认值：**off

## xc\_maintenance\_mode<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_sb28e6b95d9d643c98ea45af34d3db730"></a>

**参数说明：**设置系统进入维护模式。

该参数属于SUSET类型参数，仅支持[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中的方式三进行设置。

**取值范围：**布尔型

-   on表示该功能启用。
-   off表示该功能被禁用。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>谨慎打开这个开关，避免引起openGauss数据不一致。  

**默认值：**off

## allow\_concurrent\_tuple\_update<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s7de681312eb04b8e9d2efe96e9f0ae0e"></a>

**参数说明：**设置是否允许并发更新。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示该功能启用。
-   off表示该功能被禁用。

**默认值：**on

## pgxc\_node\_name<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s933a523479e54c769ac6b28762cc5956"></a>

**参数说明：**指定节点名称。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串。

**默认值：**当前节点名称。

## transaction\_deferrable<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s0f3a7cc4a78f476390a39c0df72ec257"></a>

**参数说明：**指定是否允许一个只读串行事务延迟执行，使其不会执行失败。该参数设置为on时，当一个只读事务发现读取的元组正在被其他事务修改，则延迟该只读事务直到其他事务修改完成。目前，openGauss暂时未用到这个参数。与该参数类似的还有一个[default\_transaction\_deferrable](语句行为.md#zh-cn_topic_0242371522_zh-cn_topic_0237124732_zh-cn_topic_0059779117_s031e2bbea2cf42a5a1c24e6dbaa70365)，设置它来指定一个事务是否允许延迟。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示允许执行。
-   off表示不允许执行。

**默认值：**off

## enforce\_two\_phase\_commit<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_sc6c4a7787ffe496282b2ac6bc26c4311"></a>

**参数说明：**强制使用两阶段提交，为了兼容历史版本功能保留该参数，当前版本设置无效。

该参数属于SUSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示强制使用两阶段提交。
-   off表示不强制使用两阶段提交。

**默认值：**on

## enable\_show\_any\_tuples<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s00599c10d3824fa6a76dcf22f22f0394"></a>

**参数说明：**该参数只有在只读事务中可用，用于分析。当这个参数被置为on/true时，表中元组的所有版本都会可见。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on/true表示表中元组的所有版本都会可见。
-   off/false表示表中元组的所有版本都不可见。

**默认值：**off

## replication\_type<a name="zh-cn_topic_0242371531_zh-cn_topic_0237124741_section94292665717"></a>

**参数说明：**标记当前HA模式是主备从模式还是一主多备模式。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0242370406_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

该参数是内部参数，用户不能自己去设置参数值。

**取值范围：**0\~2

-   1 表示使用一主多备模式。
-   0 表示主备从模式。

**默认值：**1

