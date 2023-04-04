# cm\_server参数<a name="ZH-CN_TOPIC_0295386223"></a>

## log\_dir<a name="zh-cn_topic_0059779078_sbb7ff995aa1a49b7b310730fcfd6adbd"></a>

**参数说明：**log\_dir决定存放cm\_server日志文件的目录。它可以是绝对路径，或者是相对路径（相对于$GAUSSLOG的路径）。

**取值范围：**字符串。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**“log”，表示在$GAUSSLOG下对应的cm目录下生成cm\_server日志。

## log\_file\_size<a name="zh-cn_topic_0059779078_sd45af4b8a13a461badd0850a43f9a4a8"></a>

**参数说明：**控制日志文件的大小。当日志文件达到指定大小时，则重新创建一个日志文件记录日志信息。

**取值范围：**整型，取值范围0\~2047，单位为MB。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**16MB

## log\_min\_messages<a name="zh-cn_topic_0059779078_sbde07d9f7bc940c3b12448683da2039f"></a>

**参数说明：**控制写到cm\_server日志文件中的消息级别。每个级别都包含排在它后面的所有级别中的信息。级别越低，服务器运行日志中记录的消息就越少。

**取值范围：**枚举类型，有效值有debug5、debug1、log、warning、error、fatal。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**warning

## thread\_count<a name="zh-cn_topic_0059779078_s928fafec20c14b5aa1573ea417925080"></a>

**参数说明：**cm\_server线程池的线程数。

**取值范围：**整型，2\~1000。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**1000

## alarm\_component<a name="section179611437573"></a>

**参数说明：**设置用于处理告警内容的告警组件的位置。

**取值范围：**字符串。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   若前置脚本gs\_preinstall中的--alarm-type参数设置为5时，表示未对接第三方组件，告警写入system\_alarm日志，此时GUC参数alarm\_component的取值为：/opt/huawei/snas/bin/snas\_cm\_cmd。
-   若前置脚本gs\_preinstall中的--alarm-type参数设置为1时，表示对接第三方组件，此时GUC参数alarm\_component的值为第三方组件的可执行程序的绝对路径。

**默认值：**/opt/huawei/snas/bin/snas\_cm\_cmd

## instance\_failover\_delay\_timeout<a name="zh-cn_topic_0059779078_s2494a79e94d341dfa9abb21120f8ca93"></a>

**参数说明：**cm\_server检测到主机宕机，failover备机的延迟时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**0

## instance\_heartbeat\_timeout<a name="zh-cn_topic_0059779078_sd48a7b4bdc534a349f5a4067a7f3a7a0"></a>

**参数说明：**实例心跳超时时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**6

## cmserver\_ha\_connect\_timeout<a name="zh-cn_topic_0059779078_s538a4c1fa64942a7bd178aa447af4218"></a>

**参数说明：**cm\_server主备连接超时时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**2

## cmserver\_ha\_heartbeat\_timeout<a name="zh-cn_topic_0059779078_sd683c4626da14ea8b3d04f0656ab5823"></a>

**参数说明：**cm\_server主备心跳超时时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**6

## phony\_dead\_effective\_time<a name="section17424541236"></a>

**参数说明：**用于DN进程的僵死检测，当检测到的僵死次数大于该参数值，认为进程僵死，将进程重启。

**取值范围：**整型，单位为次数。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**5

## enable\_transaction\_read\_only<a name="section1334735111813"></a>

**参数说明：**控制数据库是否为只读模式开关。

**取值范围：**布尔型，有效值有on，off，true，false，yes，no，1，0。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**on

## datastorage\_threshold\_check\_interval<a name="section43322521385"></a>

**参数说明：**检测磁盘占用的时间间隔。间隔用户指定时间，检测一次磁盘占用。

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**10

## datastorage\_threshold\_value\_check<a name="section191659538811"></a>

**参数说明：**设置数据库只读模式的磁盘占用阈值，当数据目录所在磁盘占用超过这个阈值，自动将数据库设置为只读模式。

**取值范围：**整型，1 \~ 99，表示百分比。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**85

## max\_datastorage\_threshold\_check<a name="zh-cn_topic_0059779078_sbc060904c33642ef8efa543162a6b722"></a>

**参数说明：**设置磁盘使用率的最大检测间隔时间。当用户手动修改只读模式参数后，会自动在指定间隔时间后开启磁盘满检测操作。

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**43200

## cmserver\_ha\_status\_interval<a name="section15942842171516"></a>

**参数说明：**cm\_server主备同步状态信息间隔时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**1

## cmserver\_self\_vote\_timeout<a name="zh-cn_topic_0059779078_se3d910be3f5f49c1b36466552e079342"></a>

**参数说明：**cm\_server自仲裁超时时间。

**取值范围：**整型，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)行设置。

**默认值：**6

## alarm\_report\_interval<a name="zh-cn_topic_0059779078_sa2d745d52b9142858c061d7249c24d82"></a>

**参数说明：**指定告警上报的时间间隔。

**取值范围：**非负整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**3

## alarm\_report\_max\_count<a name="section13705726193413"></a>

**参数说明：**指定告警上报的最大次数。

**取值范围：**非负整型。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**1

## enable\_az\_auto\_switchover<a name="section325722712710"></a>

**参数说明：**AZ自动切换开关，若打开，则表示允许cm\_server自动切换AZ。否则当发生dn故障等情况时，即使当前AZ已经不再可用，也不会自动切换到其它AZ上，除非手动执行切换命令。

**取值范围：**非负整型，0或1，0表示开关关闭，1表示开关打开。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**1

## instance\_keep\_heartbeat\_timeout<a name="section7693243104917"></a>

**参数说明：**cm\_agent会定期检测实例状态并上报给cm\_server，若实例状态长时间无法成功检测，累积次数超出该数值，则cm\_server将下发命令给agent重启该实例。

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**40

## az\_switchover\_threshold<a name="section19695164510818"></a>

**参数说明：**若一个AZ内DN分片的故障率（故障的dn分片数 / 总dn分片数 \* 100%）超过该数值，则会触发AZ自动切换。

**取值范围：**整型，0\~100。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**100

## az\_check\_and\_arbitrate\_interval<a name="section58752223314"></a>

**参数说明：**当某个AZ状态不正常时，会触发AZ自动切换，该参数是检测AZ状态的时间间隔。

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**2

## az\_connect\_check\_interval<a name="section322337123319"></a>

**参数说明：**定时检测AZ间的网络连接，该参数表示连续两次检测之间的间隔时间。

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**60

## az\_connect\_check\_delay\_time<a name="section1839513328333"></a>

**参数说明：**每次检测AZ间的网络连接时有多次重试，该参数表示两次重试之间的延迟时间**。**

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**150

## cmserver\_demote\_delay\_on\_etcd\_fault<a name="section857328173714"></a>

**参数说明：**因为etcd不健康而导致cm\_server从主降为备的时间间隔**。**

**取值范围：**整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**8

## instance\_phony\_dead\_restart\_interval<a name="section1899814173361"></a>

**参数说明：**当dn实例僵死时，会被cm\_agent重启，相同的实例连续因僵死被杀时，其间隔时间不能小于该参数数值，否则cm\_agent不会下发命令**。**

**取值范围：**整型，单位为秒。最小生效值为1800，如果设置小于此值实际生效值为1800。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**21600

## cm\_auth\_method<a name="section1969815428196"></a>

**参数说明：**CM模块端口认证方式，trust表示未配置端口认证，gss表示采用kerberos端口认证。必须注意的是：只有当kerberos服务端和客户端成功安装后才能修改为gss，否则CM模块无法正常通信，将影响数据库状态。

**取值范围：**枚举类型，有效值有trust, gss。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**trust

## cm\_krb\_server\_keyfile<a name="section03703243201"></a>

**参数说明：**kerberos服务端key文件所在位置，需要配置为绝对路径。该文件通常为$\{GAUSSHOME\}/kerberos路径下，以keytab格式结尾，文件名与数据库运行所在用户名相同。与上述cm\_auth\_method参数是配对的，当cm\_auth\_method参数修改为gss时，该参数也必须配置为正确路径，否则将影响数据库状态

**取值范围：**字符串类型，修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**$\{GAUSSHOME\}/kerberos/\{UserName\}.keytab，默认值无法生效，仅作为提示

## cm\_server\_arbitrate\_delay\_base\_time\_out<a name="section112891259103410"></a>

**参数说明：**cm\_server仲裁延迟基础时长。cm\_server主断连后，仲裁启动计时开始，经过仲裁延迟时长后，将选出新的cm\_server主。其中仲裁延迟时长由仲裁延迟基础时长、节点index（server ID序号）和增量时长共同决定。公式为：仲裁延迟时长=仲裁延迟基础时长+节点index\*仲裁延迟增量时长参数

**取值范围：**整型，index\>0，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**10

## cm\_server\_arbitrate\_delay\_incrememtal\_time\_out<a name="section12304125410384"></a>

**参数说明：**cm\_server仲裁延迟增量时长。cm\_server主断连后，仲裁启动计时开始，经过仲裁延迟时长后，将选出新的cm\_server主。其中仲裁延迟时长由仲裁延迟基础时长、节点index（server ID序号）和增量时长共同决定。公式为：仲裁延迟时长=仲裁延迟基础时长+节点index\*仲裁延迟增量时长参数

**取值范围：**整型，index\>0，单位为秒。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值：**3

## force\_promote<a name="section189151813918"></a>

**参数说明：**cm\_server是否打开强起逻辑（指数据库状态为Unknown的时候以丢失部分数据为代价保证数据库基本功能可用）的开关。0代表功能关闭，1代表功能开启。该参数同时适用于dn。

**取值范围：**整型，0\~1。在cm\_server上修改后需要重启cm\_server才能生效。

**默认值：**0

## switch\_rto<a name="section12494175164016"></a>

**参数说明：**cm\_server强起逻辑等待时延。在force\_promote被置为1时，当数据库的某一分片处于无主状态开始计时，等待该延迟时间后开始执行强起逻辑。

**取值范围：**整型，60\~2147483647，单位为秒。修改后需要重启cm\_server才能生效。

**默认值：**600

## backup\_open<a name="section114001741152513"></a>

**参数说明**：灾备数据库实例设置，开启后CM按照灾备数据库实例模式运行

**取值范围**：整型，0\~1。修改后需要重启cm\_server才能生效。非灾备数据库实例不能开启该参数。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   0表示关闭。
-   1表示开启。

**默认值**：0

## enable\_dcf<a name="section876764972213"></a>

**参数说明**：DCF模式开关。

**取值范围**：布尔型。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   0表示关闭。
-   1表示开启。

**默认值**：off

## install\_type<a name="section7226629136"></a>

**参数说明**：容灾数据库实例相关的设置，用来区别是否是基于dorado的数据库实例。

**取值范围**：整型，0\~2。修改后需要重启cm\_server才能生效。非灾备数据库实例不能开启该参数。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   0表示未搭建容灾关系的数据库实例。
-   1表示基于dorado的数据库实例。
-   2表示基于流式的数据库实例。

**默认值**：0

## enable\_ssl<a name="section199810414569"></a>

**参数说明**：ssl证书开关。

**取值范围**：布尔型。打开后使用ssl证书加密通信。修改后需要重启才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

-   on表示启用ssl。
-   off表示不启用ssl。
-   **默认值**：off

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >出于安全性考虑，建议不要关闭该配置。关闭后cm将**不使用**加密通信，所有信息明文传播，可能带来窃听、篡改、冒充等安全风险。


## ssl\_cert\_expire\_alert\_threshold<a name="section12984174210"></a>

**参数说明**：ssl证书过期告警时间。

**取值范围**：整型，单位为天。证书过期时间少于该时间时，上报证书即将过期告警。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：90

## ssl\_cert\_expire\_check\_interval<a name="section1567819231244"></a>

**参数说明**：ssl证书过期检测周期。

**取值范围**：整型，单位为秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：86400

## delay\_arbitrate\_timeout<a name="section1410893910156"></a>

**参数说明**：设置等待跟主DN同AZ节点redo回放，优先选择同AZ升主的时间。

**取值范围**：整型，\[0, 21474836\]，单位：秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：0

## ddb\_type<a name="section24771938135616"></a>

**参数说明**：etcd，dcc模式切换开关。

**取值范围**：整型。0：etcd；1：dcc。修改后需要重启cm\_server才能生效。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：0

## ddb\_log\_level<a name="section148417148294"></a>

**参数说明**：设置ddb日志级别。

关闭日志：“NONE”，NONE表示关闭日志打印，不能与以下日志级别混合使用。

开启日志：“RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER”日志级别可以从上述字符串中选取字符串并使用竖线组合使用，不能配置空串。

**取值范围**：字符串，RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE

## ddb\_log\_backup\_file\_count<a name="section069618142325"></a>

**参数说明**：最大保存日志文件个数。

**取值范围**：整型，\[1, 100\]。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：10

## ddb\_max\_log\_file\_size<a name="section1240439163413"></a>

**参数说明**：单条日志最大字节数。

**取值范围**：字符串，\[1M, 1000M\]。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：10M

## ddb\_log\_suppress\_enable<a name="section63973117363"></a>

**参数说明**：是否开启日志抑制功能。

**取值范围**：整型，0：关闭；1：开启。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：1

## ddb\_election\_timeout<a name="section136691017396"></a>

**参数说明**：dcc选举超时时间。

**取值范围**：整型，\[1, 600\],单位：秒。参数修改请参考[表2](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)进行设置。

**默认值**：3

