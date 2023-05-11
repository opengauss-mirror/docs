# openGauss事务

介绍openGauss事务隔离、事务只读、最大prepared事务数、维护模式目的参数设置及取值范围等内容。

## transaction\_isolation<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s2207a1ba0779485aacfd099464414c39"></a>

**参数说明：** 设置当前事务的隔离级别。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 字符串，只识别以下字符串，大小写空格敏感：

-   serializable：openGauss中等价于REPEATABLE READ。
-   read committed：只能读取已提交的事务的数据（缺省），不能读取到未提交的数据。
-   repeatable read：仅能读取事务开始之前提交的数据，不能读取未提交的数据以及在事务执行期间由其它并发事务提交的修改。
-   default：设置为default\_transaction\_isolation所设隔离级别。

**默认值：** read committed

## transaction\_read\_only<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_safc2c3f7a6b445aca6ccaee3d9e86366"></a>

**参数说明：** 设置当前事务是只读事务。

该参数在数据库恢复过程中或者在备机里，固定为on；否则，固定为default\_transaction\_read\_only的值。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 布尔型

-   on表示设置当前事务为只读事务。
-   off表示该事务可以是非只读事务。

**默认值：** off

## xc\_maintenance\_mode<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_sb28e6b95d9d643c98ea45af34d3db730"></a>

**参数说明：** 设置系统进入维护模式。

该参数属于SUSET类型参数，仅支持[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中的方式三进行设置。

**取值范围：** 布尔型

-   on表示该功能启用。
-   off表示该功能被禁用。

>![](public_sys-resources/icon-notice.png) **须知：** 
>谨慎打开这个开关，避免引起openGauss数据不一致。

**默认值：** off

## allow\_concurrent\_tuple\_update<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s7de681312eb04b8e9d2efe96e9f0ae0e"></a>

**参数说明：** 设置是否允许并发更新。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 布尔型

-   on表示该功能启用。
-   off表示该功能被禁用。

**默认值：** on

## transaction\_deferrable<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s0f3a7cc4a78f476390a39c0df72ec257"></a>

**参数说明：** 指定是否允许一个只读串行事务延迟执行，使其不会执行失败。该参数设置为on时，当一个只读事务发现读取的元组正在被其他事务修改，则延迟该只读事务直到其他事务修改完成。该参数为预留参数，该版本不生效。与该参数类似的还有一个[default\_transaction\_deferrable](语句行为.md#zh-cn_topic_0283136752_zh-cn_topic_0237124732_zh-cn_topic_0059779117_s031e2bbea2cf42a5a1c24e6dbaa70365)，设置它来指定一个事务是否允许延迟。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 布尔型

-   on表示允许执行。
-   off表示不允许执行。

**默认值：** off

## enable\_show\_any\_tuples<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s00599c10d3824fa6a76dcf22f22f0394"></a>

**参数说明：** 该参数只有在只读事务中可用，用于分析。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 布尔型

-   on/true表示表中元组的所有版本都会可见。
-   off/false表示表中元组的所有版本都不可见。

**默认值：** off

## replication\_type<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_section94292665717"></a>

**参数说明：** 标记当前HA模式是单主机模式、主备从模式还是一主多备模式。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

该参数用户不能自己去设置参数值。

**取值范围：** 0\~2

-   2表示单主机模式，此模式无法扩展备机。
-   1表示使用一主多备模式，全场景覆盖，推荐使用。
-   0表示主备从模式，目前此模式暂不支持。

**默认值：** 1

## pgxc\_node\_name<a name="zh-cn_topic_0283136901_zh-cn_topic_0237124741_zh-cn_topic_0059778361_s7de681312eb04b8e9d2efe96e9f0ae0e"></a>

**参数说明：** 指定节点名称。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

在备机请求主机进行日志复制时，如果application\_name参数没有设置，那么该参数会被用来作为备机在主机上的流复制槽名字。该流复制槽的命名方式为 "该参数值\_备机ip\_备机port"。其中，备机ip和备机port取自replconninfo参数中指定的备机ip和端口号。该流复制槽最大长度为61个字符，如果拼接后的字符串超过该长度，则会使用截断后的pgxc\_node\_name进行拼接，以保证流复制槽名字长度小于等于61个字符。

>![](public_sys-resources/icon-caution.png) **注意：** 
>此参数修改后会导致连接数据库实例失败，不建议进行修改。

**取值范围：** 字符串

**默认值：** 当前节点名称

## enable\_defer\_calculate\_snapshot<a name="section141811431171212"></a>

**参数说明**：延迟计算快照的xmin和oldestxmin，执行1000个事务或者间隔1s才触发计算，设置为on时可以在高负载场景下减少计算快照的开销，但是会导致oldestxmin推进较慢，影响垃圾元组回收，设置为off时xmin和oldestxmin可以实时推进，但是会增加计算快照时的开销。

该参数属于SIGHUP类型参数，改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置

**取值范围：** 布尔型。

-   on表示延迟计算快照xmin和oldestxmin。
-   off表示实时计算快照xmin和oldestxmin**。**

**默认值：** on

