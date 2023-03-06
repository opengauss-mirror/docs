# 示例：jdbc实现主备集群负载均衡<a name="ZH-CN_TOPIC_0000001151910145"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>以下示例场景中node代表“host:port”，host为数据库服务器名称或IP地址，port为数据库服务器端口。


## 示例1 jdbc负载均衡功能说明<a name="zh-cn_topic_0283136826_zh-cn_topic_0237120386_zh-cn_topic_0213179152_zh-cn_topic_0189251739_section8820452474"></a>

jdbc可以通过URL中设置多个数据库节点，实现对主备集群的访问。通过在URL设置负载均衡参数"autoBalance"，jdbc可以在建立连接时，依照特定的负载均衡规则将客户端与主备集群的连接依次建立在URL中的各个节点上，以此实现连接的负载均衡。
默认值为"false"，此时jdbc始终与URL中配置的同一个满足建连条件的节点建立连接。连接主备集群时，使用此参数需要保证业务中没有写操作，或者与targetServerType=slave配合，限制客户端只连接备机。目前，jdbc提供了roundrobin、priority roundrobin、leastconn、shuffle四种负载均衡模式，示例如下：
* roundrobin
轮询模式，即与URL串上的候选节点轮流建立连接。取值："roundrobin"、"true"、"balance"。
  * 假如客户端想使用轮询模式连接一主两备集群，并且多次创建连接时可以轮流选择集群中的节点建连，可以使用如下配置：
  ```
  jdbc:opengauss://node1,node2,node3/database?autoBalance=roundrobin
  ```
  * 假如客户端想使用轮询模式只连接一主两备集群的备机，对备机做只读操作，可以使用如下配置：
  ```
  jdbc:opengauss://node1,node2,node3/database?autoBalance=roundrobin&targetServerType=slave
  ```
  * 假如客户端想使用轮询模式只连接一主两备集群的主机，避免写操作路由到备机，可以使用如下配置：
  ```
  jdbc:opengauss://node1,node2,node3/database?autoBalance=roundrobin&targetServerType=master
  ```
* shuffle：
随机模式，每次都随机选择URL串中的某个节点建立连接。取值："shuffle"。使用随机模式连接一主两备集群的参考配置如下：
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=shuffle
```
* leastconn：最小连接模式，对候选节点依照各节点有效连接数做优先级排序，优先与连接数少的节点建立连接。
该模式会统计通过当前驱动在当前集群内使用leastconn模式建立的连接，并定时检查这些连接的有效性。取值："leastconn"。使用最小连接模式连接一主两备集群的参考配置如下：
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=leastconn
```
* priority roundrobin：：带优先级的轮询模式，优先对前n个候选节点做轮询建连，取值："proprity[n]"，n为非负整数。以一主两备集群为例，如果客户端想要优先在主机和备机1上执行业务，备机2只作为其他节点异常时的备用节点，可以设置该参数：

```
jdbc:opengauss://node1,node2,node3/database?autoBalance=priority2
```

>![](public_sys-resources/icon-caution.gif) **注意：** 
>-   jdbc负载均衡根据url串中指定的节点集合识别集群，如果存在多个指定了相同节点集合和相同负载均衡模式的URL分别通过同一驱动建立连接，则jdbc会将其视为同一集群上的连接，并整体进行负载均衡。
>-   jdbc支持的负载均衡是驱动级别的负载均衡，会对基于该驱动在同一集群上创建的连接负载均衡，不会基于该集群中各节点的实际连接数负载均衡，也不会基于其他驱动创建的连接负载均衡。

## 示例2 集群状态变化时，jdbc快速负载均衡功能说明<a name="zh-cn_topic_0283136826_zh-cn_topic_0237120386_zh-cn_topic_0213179152_zh-cn_topic_0189251739_section8820452474"></a>

该功能主要针对使用连接池连接主备集群并设置了最小连接模式的场景：连接池通常会维护一定数量的长连接，当集群中某个节点失效时，连接池会在剩余节点上重新创建连接。当失效节点恢复时，由于连接池已经在其他节点上创建了足够数量的长连接，因此除非部分原有连接被主动关闭，新恢复节点会始终处于空闲状态。
该功能开启时，jdbc会定时检测URL中配置的节点的状态。当检测到节点恢复时，jdbc会筛选其他节点上的空闲连接并关闭。连接池感知到缓存连接减少后，会基于leastconn模式在新恢复节点上创建连接，使集群重新负载均衡。该功能由"enableQuickAutoBalance"、"maxIdleTimeBeforeTerminal"、"minReservedConPerCluster"和  "minReservedConPerDatanode"配合使用，具体说明如下：
* enableQuickAutoBalance：是否开启集群变化时，jdbc快速负载均衡功能。该功能必须与最小连接模式配合使用：设置为"true"且autoBalance设置为"leastconn"时，功能开启。参数针对连接生效。

  取值范围：{"true", "false"}。

  默认值是"false"。

* maxIdleTimeBeforeTerminal：jdbc触发快速负载均衡时，可保留连接的最大空闲时长。jdbc快速负载均衡功能筛选空闲连接时，会将处于idle状态并且持续时间大于等于maxIdleTimeBeforeTerminal的连接视为空闲连接，这些连接可能会被jdbc关闭。该参数只在autoBalance设置为"leastconn"且enableQuickAutoBalance设置为"true"时生效。单位：秒，取值范围：[0，9,223,372,036,854,775]内的整数。默认值为30。参数针对连接生效。

  取值范围：[0，100]内的整数。

  默认值为0。  

* minReservedConPerCluster：jdbc触发快速负载均衡时，集群内空闲连接的最小保留百分比。默认情况下，jdbc触发快速负载均衡时，所有被筛选出来的空闲连接都会被关闭。设置该参数可以在触发快速负载均衡时，jdbc至少保留集群内空闲连接的minReservedConPerCluster%。该参数针对集群生效，如果存在多个配置了相同节点并开启快速负载均衡功能的URL都设置了该参数，则取最小值。

  取值范围：[0，100]内的整数。

  默认值：0。

* minReservedConPerDatanode：jdbc触发快速负载均衡时，节点内空闲连接的最小保留百分比。设置该参数可以在触发快速负载均衡时，jdbc会至少保留每个节点内空闲连接的minReservedConPerDatanode%。如果URL串同时设置了minReservedConPerDatanode和minReservedConPerCluster，jdbc会保证最终筛选出来的待关闭连接同时满足两个参数。该参数针对集群生效，如果存在多个配置了相同节点并开启快速负载均衡功能的URL都设置了该参数，则取最小值。

  取值范围：[0，100]内的整数。

  默认值为0。

下面是jdbc开启快速负载均衡的简单用例，通过以下配置可以在jdcb建立连接时同时开启最小连接模式和集群状态变化时的快速负载均衡功能。功能开启后，jdbc会缓存通过该url创建的有效连接，并定时查询node1、node2、node3的状态。当监测到节点恢复时，jdbc会从缓存连接中筛选空闲连接（默认情况处于idle状态超过30秒）并关闭。由连接池基于leastconn模式新建连接，实现集群内连接数再平衡。
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=leastconn&enableQuickAutoBalance=true
```
此外可以通过设置额外参数，来控制空闲连接的筛选标准以及集群和每个节点内空闲连接的关闭比例：
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=leastconn&enableQuickAutoBalance=true&maxIdleTimeBeforeTerminal=20&minReservedConPerCluster=20&minReservedConPerDatanode=20
```

>![](public_sys-resources/icon-caution.gif) **注意：** 
>-   jdbc只基于该驱动在同一集群上的连接负载均衡，同样触发快速负载均衡时，也只会关闭该驱动在某一集群上创建、并设置了相应参数的连接。
>-   该功能需要通过调整参数来适应客户端的业务需求，jdbc本身无法感知到某一连接是否为实际业务所需的连接， 因此通过判断空闲连接的方式筛选可关闭连接。如果参数与实际业务需求不匹配，可能会出现用户持有连接被关闭的情况。
>-   jdbc在进行快速负载均衡时，会根据设置的配置参数，筛选部分满足条件的连接关闭，如果此时大部分已有连接都不满足关闭条件，比如全部处于活跃状态，可能导致快速负载均衡结果较差。