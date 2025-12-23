# jdbc主备集群负载均衡

>[!NOTE]说明
>以下示例场景中node代表“host:port”，host为数据库服务器名称或IP地址，port为数据库服务器端口。

## jdbc负载均衡功能说明

jdbc可以通过URL中设置多个数据库节点，实现对集群的访问。通过在URL设置负载均衡参数"autoBalance"，jdbc可以在建立连接时，依照特定的负载均衡规则将客户端与集群的连接依次建立在URL中的各个节点上，以此实现连接的负载均衡。
默认值为"false"，表示不使用负载均衡模式，jdbc始终与URL中配置的第一个可以建连成功的节点建立连接。目前，jdbc提供了roundrobin、priority roundrobin、leastconn、shuffle四种负载均衡模式，示例如下：

* roundrobin: 轮询模式，即与URL串上的候选节点轮流建立连接。取值："roundrobin"、"true"、"balance"。 假如客户端想使用轮询模式连接包含三个节点的集群，并且多次创建连接时可以轮流选择集群中的节点建连，可以使用如下配置：

```sql
jdbc:oGRAC://node1,node2,node3?autoBalance=roundrobin
```

* shuffle: 随机模式，每次都随机选择URL串中的某个节点建立连接。取值："shuffle"。使用随机模式连接集群的参考配置如下：

```sql
jdbc:oGRAC://node1,node2,node3?autoBalance=shuffle
```

* leastconn：最小连接模式，对候选节点依照各节点有效连接数做优先级排序，优先与连接数少的节点建立连接。该模式会统计通过当前驱动在当前集群内使用leastconn模式建立的连接，取值："leastconn"。使用最小连接模式连接集群的参考配置如下：

```sql
jdbc:oGRAC://node1,node2,node3?autoBalance=leastconn
```

* priority roundrobin: 带优先级的轮询模式，优先对前n个候选节点做轮询建连，取值："proprity[n]"，n为非负整数。以三个节点的集群为例，如果客户端想要优先在节点1和节点2上执行业务，节点3只作为其他节点异常时的备用节点，可以设置该参数：

```sql
jdbc:oGRAC://node1,node2,node3?autoBalance=priority2
```

>[!NOTE]说明
>
>- jdbc支持的负载均衡是驱动级别的负载均衡，会对基于该驱动在同一集群上创建的连接负载均衡，不会基于该集群中各节点的实际连接数负载均衡，也不会基于其他驱动创建的连接负载均衡。
