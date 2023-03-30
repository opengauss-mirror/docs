# cm\_server参数<a name="ZH-CN_TOPIC_0000001246287001"></a>

## log\_dir<a name="section21021611134413"></a>

**参数说明：**log\_dir决定存放cm\_server日志文件的目录。 它可以是绝对路径，或者是相对路径（相对于$GAUSSLOG的路径）。通过cm\_ctl设置绝对路径时需要将路径用''把路径包含起来，例如：cm\_ctl set --param --server -k log\_dir="'/log/dir'"。

**取值范围：**字符串，最大长度为1024。修改后需要重启cm\_server才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**“log”，表示在$GAUSSLOG下对应的cm目录下生成cm\_server日志。

## log\_file\_size<a name="section171021311114411"></a>

**参数说明：**控制日志文件的大小。当'cm\_server-xx-current.log'日志文件达到指定大小时，则重新创建一个日志文件记录日志信息。

**取值范围：**整型，\[0, 2047\]，实际生效范围\[1, 2047\]，单位：MB。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**16MB

## log\_min\_messages<a name="section1110261111441"></a>

**参数说明：**控制写到cm\_server日志文件中的消息级别。每个级别都包含排在它后面的所有级别中的信息。级别越低，服务器运行日志中记录的消息就越少。

**取值范围：**枚举类型，有效值有debug5、debug1、log、warning、error、fatal（不区分大小写）。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**warning

## thread\_count<a name="section12102111113443"></a>

**参数说明：**cm\_server线程池的线程数。

**取值范围：**整型，\[2, 1000\]。修改后需要重启cm\_server才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**1000

## instance\_heartbeat\_timeout<a name="section24821313171815"></a>

**参数说明：**实例心跳超时时间。

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**6

## instance\_failover\_delay\_timeout<a name="section14533832212"></a>

**参数说明：**cm\_server检测到主机宕机，failover备机的延迟时间。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**0

## cmserver\_ha\_connect\_timeout<a name="section3103711174420"></a>

**参数说明：**cm\_server主备连接超时时间。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**2

## cmserver\_ha\_heartbeat\_timeout<a name="section1510361114443"></a>

**参数说明：**cm\_server主备心跳超时时间。

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**6

## cmserver\_ha\_status\_interval<a name="section1133674182316"></a>

**参数说明：**cm\_server主备同步状态信息间隔时间。

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**1

## cmserver\_self\_vote\_timeout<a name="section363915452213"></a>

**参数说明：**cm\_server之间相互投票的超时时间。旧版本遗留参数，实际不生效。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：6**

## phony\_dead\_effective\_time<a name="section11031311164411"></a>

**参数说明：**用于数据库节点僵死检测，当检测到的僵死次数大于该参数值，认为进程僵死，将进程重启。

**取值范围：**整型，\[1, 2147483647\]，单位：次数。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**5

## cm\_server\_arbitrate\_delay\_base\_time\_out<a name="section9923154532414"></a>

**参数说明：**cm\_server仲裁延迟基础时长。cm\_server主断连后，仲裁启动计时开始，经过仲裁延迟时长后，将选出新的cm\_server主。其中仲裁延迟时长由仲裁延迟基础时长、节点index（server ID序号）和增量时长共同决定。公式为：仲裁延迟时长=仲裁延迟基础时长+节点index\*仲裁延迟增量时长参数。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**10

## cm\_server\_arbitrate\_delay\_incrememtal\_time\_out<a name="section116431649142414"></a>

**参数说明：**cm\_server仲裁延迟增量时长。cm\_server主断连后，仲裁启动计时开始，经过仲裁延迟时长后，将选出新的cm\_server主。其中仲裁延迟时长由仲裁延迟基础时长、节点index（server ID序号）和增量时长共同决定。公式为：仲裁延迟时长=仲裁延迟基础时长+节点index\*仲裁延迟增量时长参数。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**3

## alarm\_component<a name="section12321745182515"></a>

**参数说明：**在使用第一种告警方式时，设置用于处理告警内容的告警组件的位置。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。通过cm\_ctl设置绝对路径时需要将路径用''把路径包含起来，例如：cm\_ctl set --param --server -k alarm\_component="'/alarm/dir'"。

**取值范围：**字符串，最大长度为1024。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**/opt/huawei/snas/bin/snas\_cm\_cmd

## alarm\_report\_interval<a name="section17967105912515"></a>

**参数说明：**指定告警上报的时间间隔。

**取值范围：**非负整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**3

## alarm\_report\_max\_count<a name="section183101620262"></a>

**参数说明：**指定告警上报的最大次数。

**取值范围：**非负整型，\[1, 2592000\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**1

## instance\_keep\_heartbeat\_timeout<a name="section1092193510262"></a>

**参数说明：**cm\_agent会定期检测实例状态并上报给cm\_server，若实例状态长时间无法成功检测，累积次数超出该数值，则cm\_server将下发命令给agent重启该实例。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**40

## az\_switchover\_threshold<a name="section10442115810268"></a>

**参数说明：**若一个AZ内节点分片的故障率（故障的节点分片数 / 总节点分片数 \* 100%）超过该数值，则会触发AZ自动切换。

**取值范围：**整型，\[1, 100\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**100

## az\_check\_and\_arbitrate\_interval<a name="section208296015278"></a>

**参数说明：**当某个AZ状态不正常时，会触发AZ自动切换，该参数是检测AZ状态的时间间隔。

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**2

## az\_connect\_check\_interval<a name="section182125018279"></a>

**参数说明：**定时检测AZ间的网络连接，该参数表示连续两次检测之间的间隔时间。

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**60

## az\_connect\_check\_delay\_time<a name="section1884134782719"></a>

**参数说明：**每次检测AZ间的网络连接时有多次重试，该参数表示两次重试之间的延迟时间**。**

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**150

## cmserver\_demote\_delay\_on\_etcd\_fault<a name="section171253502814"></a>

**参数说明：**因为etcd不健康而导致cm\_server从主降为备的时间间隔**。**

**取值范围：**整型，\[1, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**8

## instance\_phony\_dead\_restart\_interval<a name="section938462914288"></a>

**参数说明：**当数据库实例僵死时，会被cm\_agent重启，相同的实例连续因僵死被杀时，其间隔时间不能小于该参数数值，否则cm\_agent不会下发命令**。**

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**21600

## enable\_transaction\_read\_only<a name="section510515117445"></a>

**参数说明：**控制数据库是否为只读模式开关。

**取值范围：**布尔型，有效值有on，off，true，false，yes，no，1，0。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**on

## datastorage\_threshold\_check\_interval<a name="section122858817307"></a>

**参数说明**：检测磁盘占用的时间间隔。间隔时间由用户指定，表示检测一次磁盘的间隔时间。

**取值范围**：整型，\[1, 2592000\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：10

## datastorage\_threshold\_value\_check<a name="section121051111164418"></a>

**参数说明：**设置数据库只读模式的磁盘占用阈值，当某个节点的数据目录所在磁盘占用阈值超过这个阈值，如果该节点为备机，自动将该节点设置为只读，如果该节点为主机，则会自动将主机切换到一个合适的主机上。如果所有节点的阈值均达到阈值，则会将集群设置为只读。

**取值范围：**整型，\[1, 99\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**85

## max\_datastorage\_threshold\_check<a name="section1710519119443"></a>

**参数说明：**设置磁盘使用率的最大检测间隔时间。当用户手动修改只读模式参数后，会自动在指定间隔时间后开启磁盘检测操作。

**取值范围：**整型，\[1, 2592000\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**43200

## enable\_az\_auto\_switchover<a name="section14105161104415"></a>

**参数说明：**AZ自动切换开关，若打开，则表示允许cm\_server自动切换AZ。否则当发生节点故障等情况时，即使当前AZ已经不再可用，也不会自动切换到其他AZ上，除非手动执行切换命令。

**取值范围：**非负整型，0或1，0：开关关闭，1：开关打开。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**1

## cm\_krb\_server\_keyfile<a name="section815763211440"></a>

**参数说明：**kerberos服务端key文件所在位置，需要配置为绝对路径。该文件通常为$\{GAUSSHOME\}/kerberos路径下，以keytab格式结尾，文件名与集群运行所在用户名相同。与上述cm\_auth\_method参数是配对的，当cm\_auth\_method参数修改为gss时，该参数也必须配置为正确路径，否则将影响集群状态。通过cm\_ctl设置绝对路径时需要将路径用''把路径包含起来，例如：cm\_ctl set --param --server -k cm\_krb\_server\_keyfile="'/krb/dir'"。

**取值范围：**字符串类型，修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**$\{GAUSSHOME\}/kerberos/\{UserName\}.keytab，默认值无法生效，仅作为提示。

## switch\_rto<a name="section489193815352"></a>

**参数说明：**cm\_server强起逻辑等待时延。在force\_promote被置为1时，当集群的某一分片处于无主状态开始计时，等待该延迟时间后开始执行强起逻辑。

**取值范围：**整型，\[60, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**600

## force\_promote<a name="section210571111441"></a>

**参数说明：**cm\_server是否打开强起逻辑（指集群状态为Unknown的时候以丢失部分数据为代价保证集群基本功能可用）的开关。0代表功能关闭，1代表功能开启。

**取值范围：**整型，\[0, 1\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**0

## backup\_open<a name="section51185261313"></a>

**参数说明**：灾备集群设置，开启后CM按照灾备集群模式运行。

**取值范围**：整型，\[0, 1\]。修改后需要重启cm\_server才能生效。非灾备集群不能开启该参数。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   0表示关闭。
-   1表示开启

**默认值**：0

## enable\_dcf<a name="section1223164233119"></a>

**参数说明**：DCF模式开关。

**取值范围**：布尔型。修改后需要重启cm\_server才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示启用dcf。
-   off、no、false、0：表示不启用dcf。

**默认值**：off

## ddb\_type<a name="section0106121124418"></a>

**参数说明**：ETCD，DCC、share disk模式切换开关。

**取值范围**：整型。0：ETCD；1：DCC；2：share disk。修改后需要重启cm\_server才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：1

>![](public_sys-resources/icon-note.gif) **说明：** 
>（opengauss只支持DCC或者share disk模式）。

## enable\_ssl<a name="section1910621118445"></a>

**参数说明**：ssl证书开关。

**取值范围**：布尔型。打开后使用ssl证书加密通信。修改后需要重启cm\_server才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示启用ssl。
-   off、no、false、0：表示不启用ssl。
-   **默认值**：on

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >出于安全性考虑，建议不要关闭该配置。关闭后cm将**不使用**加密通信，所有信息明文传播，可能带来窃听、篡改、冒充等安全风险。


## ssl\_cert\_expire\_alert\_threshold<a name="section8148443183416"></a>

**参数说明**：ssl证书过期告警时间。

**取值范围**：整型，\[7, 180\]，单位：天。证书过期时间少于该时间时，上报证书即将过期告警。修改后需要重启cm\_server才能生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：90

## ssl\_cert\_expire\_check\_interval<a name="section10149843143417"></a>

**参数说明**：ssl证书过期检测周期。

**取值范围**：整型，\[0, 2147483647\]，单位：秒。修改后需要重启cm\_server才能生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：86400

## ddb\_log\_level<a name="section181071211184411"></a>

**参数说明**：设置ddb日志级别。

关闭日志：“NONE”，NONE表示关闭日志打印，不能与以下日志级别混合使用。

开启日志：“RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER”日志级别可以从上述字符串中选取字符串并使用竖线组合使用，不能配置空串。

**取值范围**：字符串，RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE

## ddb\_log\_backup\_file\_count<a name="section610761194419"></a>

**参数说明**：最大保存日志文件个数。

**取值范围**：整型，\[1, 100\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：10

## ddb\_max\_log\_file\_size<a name="section19107101110446"></a>

**参数说明**：单条日志最大字节数。

**取值范围**：字符串，长度最大为1024，\[1M, 1000M\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：10M

## ddb\_log\_suppress\_enable<a name="section11071411114412"></a>

**参数说明**：是否开启日志抑制功能。

**取值范围**：整型，0：关闭； 1：开启。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：1

## ddb\_election\_timeout<a name="section1096185711575"></a>

**参数说明**：DCC 选举超时时间。

**取值范围**：整型，\[1, 600\], 单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：3

## coordinator\_heartbeat\_timeout<a name="section156001934173020"></a>

**参数说明：**节点故障自动剔除心跳超时时间。设置后立即生效，不需要重启cm\_server。该参数设置为0，则节点故障后不会自动剔除。

**取值范围：**整型，单位为秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**25

## cluster\_starting\_aribt\_delay<a name="section1741717483343"></a>

**参数说明：**cm\_server在集群启动阶段，等待节点静态主升主的时间。

**取值范围：**整型，\[1,2592000\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**180

## enable\_e2e\_rto<a name="section105001758124113"></a>

**参数说明：**端到端RTO开关，开启后僵死检测周期及网络检测超时时间将缩短，CM可以达到端到端RTO指标（单实例故障RTO<=10s，叠加故障RTO<=30s）。

**取值范围：**整型，\[0, 1\]。1表示开启，0表示关闭。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**0

## disk\_timeout<a name="section7758134042818"></a>

**参数说明：**磁盘心跳超时时间。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**200

## agent\_network\_timeout<a name="section1574124428"></a>

**参数说明**：节点间网络超时时间。

**取值范围：**整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**6

## voting\_disk\_path<a name="section18665127184114"></a>

**参数说明：**投票盘路径。

**取值范围：**字符串，最大长度为1024。修改后需要重启cm\_server才能生效。

**默认值：**无，需要安装时进行配置。

## share\_disk\_path<a name="section11645163115412"></a>

**参数说明：**共享盘路径。

**取值范围：**字符串，最大长度为1024。修改后需要重启cm\_server才能生效。

**默认值：**无，需要安装时进行配置。

## dn\_arbitrate\_mode<a name="section1264174324416"></a>

**参数说明**：dn仲裁模式。

**取值范围**：字符串。修改后可以reload生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置，share\_disk模式下，不建议用户修改仲裁模式。

-   quorum
-   paxos
-   share\_disk

**默认值**：quorum

## delay\_arbitrate\_max\_cluster\_timeout<a name="section1488313439547"></a>

**参数说明**：启动过程中，延迟仲裁最大集群时间。

**取值范围**：整型，\[0, 1000\]，单位：秒。0：表示不进行仲裁。修改后可以reload生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值**：300



## delay\_arbitrate\_timeout<a name="section1410893910156"></a>

**参数说明**：设置等待跟主DN同AZ节点redo回放，优先选择同AZ升主的时间。

**取值范围**：整型，\[0, 2147483647\]，单位：秒。参数修改请参考[表 set cm参数](#table10437204416514)进行设置。

**默认值**：0

## cm\_auth\_method<a name="section1969815428196"></a>

**参数说明：**CM模块端口认证方式，trust表示未配置端口认证，gss表示采用kerberos端口认证。必须注意的是：只有当kerberos服务端和客户端成功安装后才能修改为gss，否则CM模块无法正常通信，将影响数据库状态。

**取值范围：**枚举类型，有效值有trust, gss。修改后需要重启cm\_server才能生效。参数修改请参考[表 set cm参数](#table10437204416514)进行设置。

**默认值：**trust


## third\_party\_gateway\_ip

**参数说明：**CM两节点部署模式必备参数。当前AZ中第三方网关IP地址或任何其他独立于当前集群的可用IP地址，需要确保其与集群中节点间的网络相通。

**取值范围：**字符串。修改后可以reload生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：**无，需要安装时进行配置。


## cms\_enable\_failover\_on2nodes

**参数说明：**CM两节点部署模式必备参数。是否允许CM集群自身故障自动切换，默认禁止CM集群自身自动故障切换。

**取值范围：**布尔型。修改后可以reload生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示允许CM集群自身自动故障切换。
-   off、no、false、0：表示禁止CM集群自身自动故障切换。

**默认值：**false


## cms\_enable\_db\_crash\_recovery

**参数说明：**CM两节点部署模式必备参数。是否允许数据库集群脑裂自动故障恢复。为了确保数据库集群的数据一致性，默认不支持其自动故障恢复。

**取值范围：**布尔型。修改后可以reload生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示允许DN集群脑裂自动故障恢复。
-   off、no、false、0：表示禁止DN集群脑裂自动故障恢复。

**默认值：**false


## cms\_network\_isolation\_timeout

**参数说明：**CM两节点部署模式必备参数。cm_server检索ddb集群信息同步异常的最大连续检测次数，超过最大检测次数则认为发生网络分区故障。

**取值范围**：整型，单位：次。修改后需要重启cm\_server才能生效。

**默认值：**20

## 
