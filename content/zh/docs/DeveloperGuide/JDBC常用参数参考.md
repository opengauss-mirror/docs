# JDBC常用参数参考

## targetServerType<a name="section556210112155"></a>

**原理**：值为master时会依次尝试连接串中配置的ip，直到能够连接到集群中的主机，

值为slave时会依次尝试连接串中配置的ip，直到能够连接到集群中的备机（查询语句为：select local\_role, db\_state from pg\_stat\_get\_stream\_replications\(\);）。

**建议**：有写操作的业务建议配置master，以保证主备切换后能正常连接主机，但是要注意在主备倒换过程中备机没有完全升主的时候无法正常建连，导致业务语句无法正常执行。

## hostRecheckSeconds<a name="section57081469162"></a>

**原理**：JDBC内部存储的dn列表保持可信的时间，未超过此时间时会从中直接读取存储的主机地址，当超过此时间时或者在可信时间内连接主机失败时会通过更新dn列表中该节点状态，之后连接其他的ip。

**建议**：默认值10s，建议根据业务进行调整，配合参数targetServerType使用。

## allowReadOnly<a name="section971895131917"></a>

**原理**：是否可以通过setReadOnly来修改事务访问模式，如果为true则可以修改，如果为false则无法通过此接口来修改，修改语句为SET SESSION CHARACTERISTICS AS TRANSACTION + READ ONLY / READ WEITE。

**建议**：保持默认值为true。

## fetchsize<a name="section977561515206"></a>

**原理**：fetchsize在设置为n后，数据库服务器端在执行查询后，调用者在执行resultset.next\(\)的时候，JDBC会先与服务器端进行通信，取n条数据到jdbc的客户端中，然后返回第一条给调用者，当调用者取到第n+1条数据的时候，会再次到数据库服务端去拿数据。

**作用**：避免了数据库一下把所有结果全部传输到客户端来，将客户端的内存资源撑爆掉。

**建议**：建议根据自身的业务查询数据数量和客户端机器内存情况来配置此参数，设置fetchsize时要关闭自动提交\(autocommit=false\)，否则会导致fetchsize无法生效。

## defaultRowFetchSize<a name="section1097717285206"></a>

**作用**：fetchsize默认值为0，defaultRowFetchSize会修改fetchsize的默认值。

## batchMode<a name="section27774212223"></a>

**作用**：用于确定是否使用batch模式连接。默认值为on，开启后可以提升批量更新的性能，同时批量更新的返回值会发生改变，例如，批量插入三条数据，在开启时返回值为\[3,0,0\]，在关闭后返回值为\[1,1,1\]。

**建议**：如果本身业务框架\(例如hibernate\)在批量更新时会检测返回值，可以通过调整此参数来解决。

## loginTimeout<a name="section191718166231"></a>

**作用**：控制与数据库建联时间，其中时间包括connectiontimeout和sockettimeout，超过阈值则退出。计算方式为：loginTimeout=connectiontimeout\*节点数量+连接认证时间+初始化语句执行时间。

**建议**：配置后会每次建连都会开启一个异步线程，在连接数较多的情况可能会导致客户端压力增大，如果业务确认需要此设置此参数，需要注意在集中式下建议调整为3\*connectTimeout防止在网络异常情况且第三个IP为主的情况下，无法连接。

>![](public_sys-resources/icon-notice.png) **须知**： 
>此参数设置后对于多ip而言，时间是尝试连接ip的时间，可能会出现因为设置的值较小导致后面的ip无法连接的问题，例如设置了三个ip，如果logintimeout为5s，但前两个ip建连总共用了5s，第三个ip会无法进行连接，在集中式环境下，此最后一个ip恰好为主机，可能会导致自动寻主失败。

## cancelSignalTimeout<a name="section158271453172310"></a>

**作用**：发送取消消息本身可能会阻塞，此属性控制用于取消命令的“connect超时”和“socket超时”。超时时间单位为秒。主要为了防止连接超时取消时本身执行超时检测。

**建议**：默认值为10秒，建议根据业务进行调整。

## connectTimeout<a name="section233713142242"></a>

**作用**：控制建立连接时套接字超时阈值（此时是jdbc通过socket连接到数据的时间，并不是返回connection对象的时间），超过阈值查找下一个IP。

**建议**：该参数决定了每个节点TCP连接建立的最大超时时间，如果某节点网络故障，与该节点建立连接时会等待connectTimeout超时，然后尝试连接下一个节点。考虑到网络抖动，时延等情况，默认建议设置为3s。

## socketTimeout<a name="section663313518243"></a>

**作用**：控制套接字操作超时值，如果业务语句执行或者从网络读取数据流超过此阈值，连接中断（即语句超过规定时间执行，没有数据返回的时候）。

**建议**：该参数限制单SQL最长的执行时间，单语句执行超过该值则会超时报错退出，建议根据业务特征进行配置。

## socketTimeoutInConnecting ##
**作用**： 控制建连阶段套接字操作超时值，在建连阶段，如果从网络中读取数据流超过此阈值，则尝试查找下一个节点建连。

**建议**： 该参数仅影响建连阶段的socket超时时间，如果未配置，默认为5s。

## autosave<a name="section177291155122418"></a>

**作用**：值为always时可以在事务中每个语句前面设置一个savepoint点，在事务中语句执行报错时会返回到最近的上一个savepoint点，可以让事务中后续语句可以正常执行，最终可以正常提交。

**建议**：不建议设置此参数，性能劣化严重。

## currentSchema<a name="section196082212252"></a>

**作用**：设置当前连接的schema，如果未设置，则默认schema为连接使用的用户名。

**建议**：建议配置此参数，业务数据所在的schema。

## prepareThreshold<a name="section65591537122511"></a>

**作用**：默认值为5，如果一个会话连续多次执行同一个SQL，在达到prepareThreshold次数以上时，JDBC将不再对这个SQL发送parse命令，会将其缓存起来，提升执行速度。

**建议**：默认值为5，根据业务需要进行调整。

## preparedStatementCacheQueries<a name="section97391426267"></a>

**作用**：确定每个连接中缓存的查询数，默认情况下是256。若在prepareStatement\(\)调用中使用超过256个不同的查询，则最近最少使用的查询缓存将被丢弃。

**建议**：默认值为256，根据业务需要进行调整。配合prepareThreshold使用。

## blobMode<a name="section20591122619265"></a>

**作用**：setBinaryStream方法为不同类型的数据赋值，设置为on时表示为blob类型数据赋值，设置为off时表示为bytea类型数据赋值，默认为on。例如在preparestatement和callablestatement对象中对参数进行赋值操作。

**建议**：默认值为true。

## setAutocommit方法<a name="section710434213264"></a>

**作用**：值为true时，执行每个语句都会自动开启事务，在执行结束后自动提交事务，即每个语句都是一个事务。值为false时，会自动开启一个事务，事务需要通过执行SQL手动提交。

**建议**：根据业务特征进行调整，如果基于性能或者其它方面考虑，需要关闭autocommit时，需要应用程序自己来保证事务的提交。例如，在指定的业务SQL执行完之后做显式提交，特别是客户端退出之前务必保证所有的事务已经提交。

