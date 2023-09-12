# cm\_agent参数

## log\_dir<a name="section030711438392"></a>

**参数说明：** log\_dir决定存放cm\_agent日志文件的目录。 可以是绝对路径，或者是相对路径（相对于$GAUSSLOG的路径）。通过cm\_ctl设置绝对路径时需要将路径用''把路径包含起来，例如：cm\_ctl set --param --agent -k log\_dir="'/log/dir'"。

**取值范围：** 字符串，最大长度为1024。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** “log”，表示在$GAUSSLOG下对应的cm目录下生成cm\_agent日志。

## log\_file\_size<a name="section130710434392"></a>

**参数说明：** 控制日志文件的大小。当cm\_agent-xx-current.log日志文件达到指定大小时，则重新创建一个日志文件记录日志信息。

**取值范围：** 整型，\[0, 2047\]，实际生效范围\[1, 2047\]，单位：MB。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 16MB。

## log\_min\_messages<a name="section19307194343914"></a>

**参数说明：** 控制写到cm\_agent日志文件中的消息级别。每个级别都包含排在它后面的所有级别中的信息。级别越低，服务器运行日志中记录的消息就越少。

**取值范围：** 枚举类型，有效值有debug5、debug1、warning、error、log、fatal（不区分大小写）。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)  进行设置。

**默认值：** warning

## incremental\_build<a name="section330784317397"></a>

**参数说明：** 控制重建备节点模式是否为增量。打开这个开关，则增量重建备节点；否则，全量重建备节点。

**取值范围：** 布尔型。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示增量重建备节点。

-   off、no、false、0：表示全量重建备节点。

**默认值：** on

## security\_mode<a name="section318914113417"></a>

**参数说明：** 控制是否以安全模式启动节点。打开这个开关，则以安全模式启动节点；否则，以非安全模式启动节点。

**取值范围：** 布尔型。修改后可以动态生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示以安全模式启动节点。

-   off、no、false、0：表示以非安全模式启动节点。

**默认值：** off

## upgrade\_from<a name="section616511291250"></a>

**参数说明：** 就地升级过程中使用，用于标示升级前数据库的内部版本号，此参数禁止手动修改。

**取值范围：** 非负整型，\[0, 4294967295\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 0

## alarm\_component<a name="section19308174317397"></a>

**参数说明：** 在使用第一种告警方式时，设置用于处理告警内容的告警组件的位置。通过cm\_ctl设置绝对路径时需要将路径用''把路径包含起来，例如：cm\_ctl set --param --agent -k alarm\_component="'/alarm/dir'"。

**取值范围：** 字符串，最大长度为1024。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** /opt/huawei/snas/bin/snas\_cm\_cmd

## alarm\_report\_interval<a name="section17308104393914"></a>

**参数说明：** 指定告警上报的时间间隔。

**取值范围：** 非负整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1

## agent\_heartbeat\_timeout<a name="section1222151611711"></a>

**参数说明：** cm\_server心跳超时时间。

**取值范围：** 整型，\[2, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 5

## agent\_connect\_timeout<a name="section13943381675"></a>

**参数说明：** cm\_agent连接cm\_server超时时间。

**取值范围：** 整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1

## agent\_connect\_retries<a name="section184312403713"></a>

**参数说明：** cm\_agent连接cm\_server尝试次数。

**取值范围：** 整型，\[0, 2147483647\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 15

## agent\_kill\_instance\_timeout<a name="section10806122512811"></a>

**参数说明：当** cm\_agent在无法连接cm\_server主节点后，发起一次杀死本节点上所有实例的操作之前，所需等待的时间间隔。

**取值范围：** 整型，\[0, 2147483647\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 0，不发起杀死本节点上所有实例的操作。

## agent\_report\_interval<a name="section1740211461789"></a>

**参数说明：** cm\_agent上报实例状态的时间间隔。

**取值范围：** 整型，\[0, 2147483647\]。单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1

## alarm\_report\_max\_count<a name="section490373917911"></a>

**参数说明：** 指定告警上报的最大次数。

**取值范围：** 非负整型，\[1, 2592000\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1

## agent\_check\_interval<a name="section296010163916"></a>

**参数说明：** cm\_agent查询实例状态的时间间隔。

**取值范围：** 整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 2

## enable\_log\_compress<a name="section18961713161017"></a>

**参数说明：** 控制压缩日志功能。

**取值范围：** 布尔型。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示允许压缩日志。
-   off、no、false、0：表示不允许压缩日志。

**默认值：** on

## process\_cpu\_affinity<a name="section1740823111111"></a>

**参数说明：** 控制是否以绑核优化模式启动主节点进程。配置该参数为0，则不进行绑核优化；否则，进行绑核优化，且物理CPU片数为2<sup>n</sup>个。仅支持ARM。

**取值范围：** 整型，\[0, 2\]。修改后需要重启数据库、cm\_agent才能生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 0

## enable\_xc\_maintenance\_mode<a name="section154040531117"></a>

**参数说明：** 在数据库为只读模式下，控制是否可以修改pgxc\_node系统表。

**取值范围：** 布尔型。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示开启可以修改pgxc\_node系统表功能。

-   off、no、false、0：表示关闭可以修改pgxc\_node系统表功能。

**默认值：** on

## log\_threshold\_check\_interval<a name="section1372141912128"></a>

**参数说明：** cm日志压缩和清除的时间间隔，每1800秒压缩和清理一次。

**生效范围：** $GAUSSLOG/cm/cm\_ctl；$GAUSSLOG/cm/cm\_server；$GAUSSLOG/cm/om\_monitor目录下的文件以及$GAUSSLOG/cm/cm\_agent目录下以cm\_agent-、system\_call-、system\_alarm-为前缀的日志文件。

**取值范围：** 整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1800

## log\_max\_size<a name="section1940221415131"></a>

**参数说明：** 控制cm日志最大存储值，当CM日志总大小超过（log\_max\_size\*95/100）MB时，根据压缩日志生成时间，依次删除历史压缩日志，直到日志总大小小于（log\_max\_size\*95/100）MB。

**生效范围：** $GAUSSLOG/cm/cm\_ctl；$GAUSSLOG/cm/cm\_server；$GAUSSLOG/cm/om\_monitor目录下的文件以及$GAUSSLOG/cm/cm\_agent目录下以cm\_agent-、system\_call-、system\_alarm-为前缀的日志文件。

**取值范围：** 整型，\[0, 2147483647\]，单位：MB。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 10240

## log\_max\_count<a name="section114033146138"></a>

**参数说明：** cm可存储的最多日志数量，当cm日志总个数超过该值，根据压缩日志文件名时间，删除超过保留天数log\_saved\_days的压缩日志。

**生效范围：** $GAUSSLOG/cm/cm\_ctl；$GAUSSLOG/cm/cm\_server；$GAUSSLOG/cm/om\_monitor目录下的文件以及$GAUSSLOG/cm/cm\_agent目录下以cm\_agent-、system\_call-、system\_alarm-为前缀的日志文件。

**取值范围：** 整型，\[0, 10000\]，单位：个。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 10000

## log\_saved\_days<a name="section25051814181410"></a>

**参数说明：** cm压缩日志保存的天数，cm压缩日志超过该值并且cm日志总个数超过log\_max\_count，删除压缩日志。

**生效范围：** $GAUSSLOG/cm/cm\_ctl；$GAUSSLOG/cm/cm\_server；$GAUSSLOG/cm/om\_monitor目录下的文件以及$GAUSSLOG/cm/cm\_agent目录下以cm\_agent-、system\_call-、system\_alarm-为前缀的日志文件。

**取值范围：** 整型，\[0, 1000\]，单位天。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 90

>![](public_sys-resources/icon-notice.png) **须知：** 
>日志压缩能力受限于内存限制，最多只能检测到30000个日志文件。总日志量超过30000个文件时，则无法保证日志能被正常压缩及删除。可以通过调整log\_saved\_days和log\_threshold\_check\_interval快速清理已压缩日志文件。

## agent\_phony\_dead\_check\_interval<a name="section13310143113916"></a>

**参数说明：** cm\_agent检测进程是否僵死的时间间隔。

**取值范围：** 整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 10

## unix\_socket\_directory<a name="section931094316393"></a>

**参数说明：** unix套接字的目录位置。通过cm\_ctl设置绝对路径时需要将路径用''把路径包含起来，例如：cm\_ctl set --param --agent -k unix\_socket\_directory="'/unix/dir'"。

**取值范围：** 字符串，最大长度为1024。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** ''

## dilatation\_shard\_count\_for\_disk\_capacity\_alarm<a name="section827183713151"></a>

**参数说明：** 扩容场景下，设置新增的扩容分片数，用于上报磁盘容量告警时的阈值计算。

**取值范围：** 整型，\[0, 2147483647\]，单位：个。该参数设置为0，表示关闭磁盘扩容告警上报；该参数设置为大于0，表示开启磁盘扩容告警上报，且告警上报的阈值根据此参数设置的分片数量进行计算。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1

## enable\_dcf<a name="section8310843173919"></a>

**参数说明：** DCF模式开关。

**取值范围：** 布尔型。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示启用dcf。
-   off、no、false、0：表示不启用dcf。

**默认值：** off

## disaster\_recovery\_type<a name="section1027633115186"></a>

**参数说明：** 主备数据库灾备关系的类型。

**取值范围：** 整型，\[0, 2\]。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   0表示未搭建灾备关系。
-   1表示搭建了obs灾备关系。
-   2表示搭建了流式灾备关系

**默认值：** 0

## agent\_backup\_open<a name="section114001741152513"></a>

**参数说明：** 灾备模式设置，开启后CM按照灾备模式运行。

**取值范围：** 整型，\[0, 2\]。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   0表示未搭建灾备关系。
-   1表示搭建了obs灾备关系（之后不再支持）。
-   2表示搭建了流式灾备关系。

**默认值：** 0

## disk\_timeout<a name="section7758134042818"></a>

**参数说明：** 磁盘心跳超时时间。

**取值范围：** 整型，\[0, 2147483647\]，单位：秒。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 200

## voting\_disk\_path<a name="section21021611134413"></a>

**参数说明：** 投票盘路径。

**取值范围：** 字符串，最大长度为1024。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 无，需要安装时进行配置。

## agent\_rhb\_interval<a name="section318124295417"></a>

**参数说明：** cma节点间网络连通性检测周期。

**取值范围：** 整型，\[0, 2147483647\]，单位：毫秒。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 1000

## enable\_ssl<a name="section1910621118445"></a>

**参数说明：** ssl证书开关。

**取值范围：** 布尔型。打开后使用ssl证书加密通信。修改后需要重启cm\_agent才能生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示启用ssl。
-   off、no、false、0：表示不启用ssl。
-   **默认值：** on

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >出于安全性考虑，建议不要关闭该配置。关闭后cm将**不使用**加密通信，所有信息明文传播，可能带来窃听、篡改、冒充等安全风险。


## ssl\_cert\_expire\_alert\_threshold<a name="section8148443183416"></a>

**参数说明：** ssl证书过期告警时间。

**取值范围：** 整型，\[7, 180\]，单位：天。证书过期时间少于该时间时，上报证书即将过期告警。修改后需要重启cm\_agent才能生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 90

## ssl\_cert\_expire\_check\_interval<a name="section10149843143417"></a>

**参数说明：** ssl证书过期检测周期。

**取值范围：** 整型，\[0, 2147483647\]，单位：秒。修改后需要重启cm\_agent才能生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 86400

## enable\_fence\_dn

**参数说明：** cm\_agent连不上任何除了自身节点的cms,并且自身节点cms不是Primary时，设置是否重启datanode进程。

**取值范围：** 布尔型。修改后可以reload生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

-   on、yes、true、1：表示重启datanode进程。

-   off、no、false、0：表示不重启datanode进程。

**默认值：**

## event_triggers

**参数说明：** 该参数用于定义事件触发器。

**取值范围：** 以字符串表示的json类型。  
配置形式为：'{"trigger_type_1":"trigger_value_1",...,"trigger_type_n":"trigger_value_n"}'  
其中：
> trigger_type为事件触发器类型，当前支持的事件触发器类型为：on_start、on_stop、on_failover、on_switchover
> trigger_value为发生对应事件时待执行的用户自定义触发器脚本  

修改后重载cm\_agent参数生效，参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

自定义脚本的输出会重定向至cm_agent日志目录下的system-callxxx.log中。

**默认值：** ''

**约束条件：**
1. trigger_value即自定义脚本，必须为真实存在的shell脚本，且为绝对路径，并且对当前用户至少有读取和执行权限。
2. 使用cm_ctl set命令配置该参数时，参数值必须符合json格式，并且将json类型表示为字符串类型，中间不能包含换行和空格。
3. 参数值最大长度为1024。

**配置样例：**
'{"on_start":"/dir/on_start.sh","on_stop":"/dir/on_stop.sh","on_failover":"/dir/on_failover.sh","on_switchover":"/dir/on_switchover.sh"}'

>![](public_sys-resources/icon-caution.png) **注意：**
>由于CM内部对各事件的执行均是异步执行，即将事件置于后台执行，所以CM在调用用户自定义的触发器脚本时，有可能事件还尚未执行完成，所以用户自定义触发器脚本中如果是需要等待事件完成后才执行动作的话，则需要在脚本中添加对应的状态检查，以确保事件完成。

## db\_service\_vip

**参数说明：** 数据库集群对外提供服务的VIP。

**取值范围：** 字符串。修改后可以reload生效。参数修改请参考[表 set cm参数](cm_ctl工具介绍.md#table10437204416514)进行设置。

**默认值：** 无，安装时可选配置。
