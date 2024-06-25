# JDBC常用参数参考<a name="ZH-CN_TOPIC_0000001399380057"></a>

## targetServerType<a name="section556210112155"></a>

**原理**： 值为master时会依次尝试连接串中配置的ip，直到能够连接到集群中的主机，

值为slave时会依次尝试连接串中配置的ip，直到能够连接到集群中的备机（查询语句为：select local\_role, db\_state from pg\_stat\_get\_stream\_replications\(\);）。

**建议**： 有写操作的业务建议配置master，以保证主备切换后能正常连接主机，但是要注意在主备倒换过程中备机没有完全升主的时候无法正常建连，导致业务语句无法正常执行。

## hostRecheckSeconds<a name="section57081469162"></a>

**原理**： JDBC内部存储的dn列表保持可信的时间，未超过此时间时会从中直接读取存储的主机地址，当超过此时间时或者在可信时间内连接主机失败时会通过更新dn列表中该节点状态，之后连接其他的ip。

**建议**： 默认值10s，建议根据业务进行调整，配合参数targetServerType使用。

## allowReadOnly<a name="section971895131917"></a>

**原理**： 是否可以通过setReadOnly来修改事务访问模式，如果为true则可以修改，如果为false则无法通过此接口来修改，修改语句为SET SESSION CHARACTERISTICS AS TRANSACTION + READ ONLY / READ WEITE。

**建议**： 保持默认值为true。

## fetchsize<a name="section977561515206"></a>

**原理**： fetchsize在设置为n后，数据库服务器端在执行查询后，调用者在执行resultset.next\(\)的时候，JDBC会先与服务器端进行通信，取n条数据到jdbc的客户端中，然后返回第一条给调用者，当调用者取到第n+1条数据的时候，会再次到数据库服务端去拿数据。

**作用**： 避免了数据库一下把所有结果全部传输到客户端来，将客户端的内存资源撑爆掉。

**建议**： 建议根据自身的业务查询数据数量和客户端机器内存情况来配置此参数，设置fetchsize时要关闭自动提交\(autocommit=false\)，否则会导致fetchsize无法生效。

## defaultRowFetchSize<a name="section1097717285206"></a>

**作用**： fetchsize默认值为0，defaultRowFetchSize会修改fetchsize的默认值。

## batchMode<a name="section27774212223"></a>

**作用**： 用于确定是否使用batch模式连接。默认值为on，开启后可以提升批量更新的性能，同时批量更新的返回值会发生改变，例如，批量插入三条数据，在开启时返回值为\[3,0,0\]，在关闭后返回值为\[1,1,1\]。

**建议**： 如果本身业务框架\(例如hibernate\)在批量更新时会检测返回值，可以通过调整此参数来解决。

## loginTimeout<a name="section191718166231"></a>

**作用**： 控制与数据库建联时间，其中时间包括connectiontimeout和sockettimeout，超过阈值则退出。计算方式为：loginTimeout=connectiontimeout\*节点数量+连接认证时间+初始化语句执行时间。

**建议**： 配置后会每次建连都会开启一个异步线程，在连接数较多的情况可能会导致客户端压力增大，如果业务确认需要此设置此参数，需要注意在集中式下建议调整为3\*connectTimeout防止在网络异常情况且第三个IP为主的情况下，无法连接。

>![](public_sys-resources/icon-notice.gif) **须知**： 
>
>此参数设置后对于多ip而言，时间是尝试连接ip的时间，可能会出现因为设置的值较小导致后面的ip无法连接的问题，例如设置了三个ip，如果logintimeout为5s，但前两个ip建连总共用了5s，第三个ip会无法进行连接，在集中式环境下，此最后一个ip恰好为主机，可能会导致自动寻主失败。

## cancelSignalTimeout<a name="section158271453172310"></a>

**作用**： 发送取消消息本身可能会阻塞，此属性控制用于取消命令的“connect超时”和“socket超时”。超时时间单位为秒。主要为了防止连接超时取消时本身执行超时检测。

**建议**： 默认值为10秒，建议根据业务进行调整。

## connectTimeout<a name="section233713142242"></a>

**作用**： 控制建立连接时套接字超时阈值（此时是jdbc通过socket连接到数据的时间，并不是返回connection对象的时间），超过阈值查找下一个IP。

**建议**： 该参数决定了每个节点TCP连接建立的最大超时时间，如果某节点网络故障，与该节点建立连接时会等待connectTimeout超时，然后尝试连接下一个节点。考虑到网络抖动，时延等情况，默认建议设置为3s。

## socketTimeout<a name="section663313518243"></a>

**作用**： 控制套接字操作超时值，如果业务语句执行或者从网络读取数据流超过此阈值，连接中断（即语句超过规定时间执行，没有数据返回的时候）。

**建议**： 该参数限制单SQL最长的执行时间，单语句执行超过该值则会超时报错退出，建议根据业务特征进行配置。

## socketTimeoutInConnecting ##
**作用**： 控制建连阶段套接字操作超时值，在建连阶段，如果从网络中读取数据流超过此阈值，则尝试查找下一个节点建连。

**建议**： 该参数仅影响建连阶段的socket超时时间，如果未配置，默认为5s。

## autosave<a name="section177291155122418"></a>

**作用**： 值为always时可以在事务中每个语句前面设置一个savepoint点，在事务中语句执行报错时会返回到最近的上一个savepoint点，可以让事务中后续语句可以正常执行，最终可以正常提交。

**建议**： 不建议设置此参数，性能劣化严重。

## currentSchema<a name="section196082212252"></a>

**作用**： 设置当前连接的schema，如果未设置，则默认schema为连接使用的用户名。

**建议**： 建议配置此参数，业务数据所在的schema。

## prepareThreshold<a name="section65591537122511"></a>

**作用**： 默认值为5，如果一个会话连续多次执行同一个SQL，在达到prepareThreshold次数以上时，JDBC将不再对这个SQL发送parse命令，会将其缓存起来，提升执行速度。

**建议**： 默认值为5，根据业务需要进行调整。

## preparedStatementCacheQueries<a name="section97391426267"></a>

**作用**： 确定每个连接中缓存的查询数，默认情况下是256。若在prepareStatement\(\)调用中使用超过256个不同的查询，则最近最少使用的查询缓存将被丢弃。

**建议**： 默认值为256，根据业务需要进行调整。配合prepareThreshold使用。

## blobMode<a name="section20591122619265"></a>

**作用**： setBinaryStream方法为不同类型的数据赋值，设置为on时表示为blob类型数据赋值，设置为off时表示为bytea类型数据赋值，默认为on。例如在preparestatement和callablestatement对象中对参数进行赋值操作。

**建议**： 默认值为true。

## setAutocommit方法<a name="section710434213264"></a>

**作用**： 值为true时，执行每个语句都会自动开启事务，在执行结束后自动提交事务，即每个语句都是一个事务。值为false时，会自动开启一个事务，事务需要通过执行SQL手动提交。

**建议**： 根据业务特征进行调整，如果基于性能或者其它方面考虑，需要关闭autocommit时，需要应用程序自己来保证事务的提交。例如，在指定的业务SQL执行完之后做显式提交，特别是客户端退出之前务必保证所有的事务已经提交。

## bitToString<a name="section710434213265"></a>

**作用**： 值为false时，bit或者bit(n)类型getObject返回的类型为Boolean类型；值为true时，bit或者bit(n)类型的getObject返回的结果自动转换为String类型。

**建议**： 默认值为false。请根据业务特征进行调整，如果使用bit或者bit(n)类型是标准的1位插入0/1时可以设置此值为false; 而如果使用的是非标准0/1，如"1111"，那么就必须设置此值为true,否则getObject或者getBit将抛出转换错误。

## ssl

**作用**： 连接方式，默认值为false。值为true时，表示以SSL方式连接。

**建议**： 配置客户端证书、密钥、根证书时，将SSL设置为true。

## tlcp

**作用**： 设置为true表示以TLCP国密传输协议连接数据库。

**建议**： 默认为false。

## sslenccert

**作用**： 客户端的TLCP加密证书的位置，此属性仅在开启了TLCP的情况下使用。

**建议**： 默认值为 $HOME/.postgresql（*nix）或 %APPDATA%\postgresql（windows）路径下的postgresql_enc.crt文件。

## sslfactory

**作用**： 指定SSLSocketFactory在建立SSL连接时用的类名，例如：javax.net.ssl.SSLSocketFactory。

**建议**： 根据业务需要进行配置。

## sslmode

**作用**： SSL认证方式，取值范围为：disable、allow、prefer、require、verify-ca、verify-full。

    disable：不使用SSL安全连接。
    allow：如果数据库服务器要求使用，则可以使用SSL安全加密连接，但不验证数据库服务器的真实性。
    prefer：如果数据库支持，那么首选使用SSL连接，但不验证数据库服务器的真实性。
    require：只尝试SSL连接，如果存在CA文件，则应设置成verify-ca的方式验证。
    verify-ca：只尝试SSL连接，并且验证服务器是否具有由可信任的证书机构签发的证书。
    verify-full：只尝试SSL连接，并且验证服务器是否具有由可信任的证书机构签发的证书，以及验证服务器主机名是否与证书中的一致。

**建议**： 默认值为require。

## sslcert

**作用**： 设置证书文件的完整路径，客户端和服务端证书的类型为End Entity。

**建议**： 默认为 $HOME/.postgresql（*nix）或 %APPDATA%\postgresql（windows）路径下的postgresql.crt文件。

## sslkey

**作用**： 提供密钥文件的完整路径。使用时将客户端证书转换为DER格式： 
    
    openssl pkcs8 -topk8 -outform DER -in client.key -out client.key.pk8 -nocrypt

**建议**： 默认为 $HOME/.postgresql路径下的postgresql.pk8文件。

## sslrootcert

**作用**： SSL根证书的文件名。根证书的类型为CA。

**建议**： 默认为$HOME/.postgresql（*nix）或 %APPDATA%\postgresql（windows）路径下的root.crt文件。

## sslhostnameverifier

**作用**： 主机名验证程序的类名。接口实现javax.net.ssl.HostnameVerifier。

**建议**： 默认使用org.opengauss.ssl.PGjdbcHostnameVerifier。

## sslpasswordcallback

**作用**： SSL密码提供者的类名。

**建议**： 默认值为org.opengauss.ssl.jdbc4.LibPQFactory.ConsoleCallbackHandler。

## sslpassword

**作用**： 客户端ssl密钥的密码（如果设置了sslpasswordcallback，则忽略该密码）。

**建议**： 根据业务需要进行配置。

## protocolVersion

**作用**： 连接时强制使用特定的协议版本。

**建议**： 目前仅支持版本3。

>![](public_sys-resources/icon-notice.gif) **须知**：
>
>设置该参数时将采用md5加密方式，需要同步修改数据库的加密方式：
>
>gs_guc set -N all -I all -c "password_encryption_type=1"
>
>重启openGauss生效后需要创建用md5方式加密口令的用户。同时修改pg_hba.conf，将客户端连接方式修改为md5。用新建用户进行登录（不推荐）。
>
>MD5加密算法安全性低，存在安全风险，建议使用更安全的加密算法。

## loggerLevel

**作用**： 日志级别。目前支持4种级别：OFF、INFO、DEBUG、TRACE。设置为OFF关闭日志，设置为INFO、DEBUG和TRACE记录的日志信息详细程度不同。

**建议**： 默认值为INFO。该参数设置值不区分大小写。

## loggerFile

**作用**： Logger输出的文件名。如果设置，日志将被写入指定文件，如果未设置参数或无法创建文件，将使用java.util.logging.ConsoleHandler。

**建议**： 根据业务需要进行配置。

## allowEncodingChanges

**作用**： 是否允许更改字符集类型。设置该参数值为"true"表示可以进行字符集类型更改，配合characterEncoding=CHARSET设置字符集，二者使用“&”分隔。

**建议**： 默认值为false。

## logUnclosedConnections

**作用**： 是否记录未关闭的Connections信息。客户端可能由于未调用Connection对象的close()方法而泄漏Connection对象，最终这些对象将被垃圾回收，并且调用finalize()方法。如果调用者自己忽略了此操作，该方法将关闭Connection。当设置为true，则未显式关闭的连接被垃圾收集时，记录连接打开时的堆栈用以跟踪泄漏源。

**建议**： 默认值为false。

## cleanupSavepoints

**作用**： 确定是否在语句之前释放在自动保存模式下创建的SAVEPOINT。这样做是为了避免在执行1000个查询的情况下耗尽服务器上的共享缓冲区。

**建议**： 默认值为false。

## binaryTransfer

**作用**： 是否使用二进制格式发送和接收数据。

**建议**： ，默认值为false。

## binaryTransferEnable

**作用**： 启用二进制传输的类型列表，以逗号分隔，OID编号和名称二选一。例如：

    binaryTransferEnable=Integer4_ARRAY,Integer8_ARRAY

    OID名称为BLOB，编号为88，可以配置：
    binaryTransferEnable=BLOB 或 binaryTransferEnable=88

**建议**： 默认值为空。

## binaryTransferDisable

**作用**： 用于禁止用二进制传输OID编号或名称，以逗号分隔的类型列表，还可以覆盖驱动程序设置的默认值或使用binaryTransferEnable设置的值。

**建议**： 默认空字符串。

## databaseMetadataCacheFields

**作用**： 指定每个连接可缓存的最大字段个数。"0"表示禁用缓存。

**建议**： 默认值是65536。

## databaseMetadataCacheFieldsMiB

**作用**： 默认值是5。每个连接可缓存的字段大小的上限，单位是MB。"0"表示禁用缓存。

**建议**： 默认值是5。

## preparedStatementCacheSizeMiB

**作用**： 每个连接可缓存的最大值（以兆字节为单位）。

**建议**： 默认值为5，若缓存了超过5MB的查询，则最近最少使用的查询缓存将被丢弃。"0"表示禁用缓存。

## preferQueryMode

**作用**： 用于指定执行查询的模式。共有4种值："extended"、"extendedForPrepared"、"extendedCacheEverything"和"simple"。simple模式会excute，不parse和bind；extended模式会bind和excute；extendedForPrepared模式为prepared statement扩展使用；extendedCacheEverything模式会缓存每个statement。

**建议**： 默认值为extended。建议不要改为"simple"，否则可能导致所有的sql都是硬解析，性能下降。

## tcpKeepAlive

**作用**： 启用或禁用TCP保活探测功能。

**建议**： 默认为false。

## unknownLength

**作用**： 某些数据类型（例如TEXT）没有明确定义的长度，当通过ResultSetMetaData.getColumnDisplaySize和ResultSetMetaData.getPrecision等函数返回关于这些类型的数据时，此参数指定未知长度类型的长度。

**建议**： 默认为Integer.MAX_VALUE。

## stringtype

**作用**： 可选字段为"unspecified"和"varchar"。设置通过setString()方法使用的PreparedStatement参数的类型，如果设置为VARCHAR，则这些参数将作为varchar参数发送给服务器。若设置为unspecified，则参数将作为untyped值发送到服务器，服务器将尝试推断恰当的类型。

**建议**： 默认值为VARCHAR

## ApplicationName

**作用**： 设置正在使用连接的JDBC驱动的名称。通过在数据库主节点上查询pg_stat_activity表可以看到正在连接的客户端信息，JDBC驱动名称显示在application_name列。

**建议**： 默认值为PostgreSQL JDBC Driver。

## sendBufferSize

**作用**： socket写入缓冲区的数据大小。

**建议**： 默认值为-1。

## receiveBufferSize

**作用**： socket读取缓冲区的数据大小。

**建议**： 默认值为-1。

## assumeMinServerVersion

**作用**： 设置要连接的服务器版本，如assumeMinServerVersion=9.0，可以在建立时减少相关包的发送。

**建议**： 根据业务需要进行设置。

## loadBalanceHosts

**作用**： 如果禁用，默认顺序连接URL中指定的多个主机。如果启用，则随机选择一个主机建立连接。集中式环境下，如果使用此参数需要保证业务中没有写操作。

**建议**： 默认为false。

## socketFactory

**作用**： 用于创建与服务器socket连接的类。该类必须实现了接口"javax.net.SocketFactory"，并定义无参或单String参数的构造函数。

**建议**： 默认值为空。

## socketFactoryArg

**作用**： 此值是上面提供的socketFactory类的构造函数的参数，不推荐使用。

**建议**： 根据业务需要进行设置。

## reWriteBatchedInserts

**作用**： 批量导入时，该参数设置为true可将N条插入语句合并为一条：insert into TABLE_NAME values(values1, ..., valuesN), ..., (values1, ..., valuesN)；使用该参数时，需设置batchMode=off。

**建议**： 默认为false。

## priorityServers

**作用**： 用于指定url上配置的前n个节点作为主集群被优先连接。该值为数字，大于0，且小于等于url上配置的DN数量。例如：

    jdbc:opengauss://host1:port1,host2:port2,host3:port3,host4:port4,/database?priorityServers=2
    表示host1与host2为主集群节点，host3与host4为容灾集群节点。

**建议**： 根据业务需要进行设置。

## readOnly

**作用**： 是否将连接置为只读模式。

**建议**： 默认值false。

## disableColumnSanitiser

**作用**： 将其设置为true则禁止修改列名，为false时会将ResultSet中的列名转为小写。

**建议**： 默认值为false。

## replication

**作用**： 启动过程中的连接参数。取值包括："true"和"database"，传"true"后端会进入walsender模式，在walsender模式下可以发出一小批复制命令，而不是SQL语句。在walsender模式中只能使用简单的查询语句。传递“database”将指示walsender连接到dbname参数中指定的数据库，将允许该连接用于从该数据库进行逻辑复制。

**建议**： 根据业务需要进行设置。

## quoteReturningIdentifiers

**作用**： 含义为引用返回列。有些ORM引用了所有内容，包括返回列。如果引用它们，则最终返回""colname""而不是"colname"。例如对于需要返回主键id的应用场景，当quoteReturningIdentifiers=true时，数据库给返回”id”字符串，导致应用层无法将该值转化为long类型而报错。当quoteReturningIdentifiers=false时，数据库返回id的值，比如50。

**建议**： 默认值为false。在需要返回主键值的应用场景中，应设置quoteReturningIdentifiers=false。

## kerberosServerName

**作用**： 使用GSSAPI进行身份验证时要使用的Kerberos服务名称,相当于libpq的PGKRBSRVNAME环境变量。

**建议**： 默认值为postgres。

## jaasApplicationName

**作用**： 指定JAAS系统或应用程序登录配置的名称。

**建议**： 默认值为pgjdbc。

## jaasLogin

**作用**： 设置在使用GSSAPI进行身份验证之前是否执行JAAS登录。如果设置true，则在进行身份验证之前，驱动程序将尝试使用配置的JAAS登录模块（例如Krb5LoginModule）获取GSS凭据。如果要跳过JAAS登录，例如，如果使用本机GSS实现来获取验证码，将其设置为false。

**建议**： 默认为true。

## gsslib

**作用**： 当服务器请求Kerberos或SSPI身份验证时，强制使用SSPI（Windows透明单点登录）或GSSAPI（Kerberos，通过JSSE）。取值范围为：auto（默认值）、sspi（强制sspi）或gssapi（强制gssapi-JSSE）。如果此参数为auto，则如果服务器请求SSPI身份验证，JDBC客户端在Windows上运行，并且SSPI所需的Waffle库在CLASSPATH上，则会尝试SSPI。否则，将使用通过JSSE的Kerberos/GSSAPI。

**建议**： 默认值为auto。

## useSpnego

**作用**： 是否在SSPI身份验证请求中使用SPENGO。

**建议**： 默认值为false。

## sspiServiceClass

**作用**： 构成SPN的服务类部分的Windows SSPI服务类的名称。

**建议**： 默认值为POSTGRES，建议使用默认值。

## usingEip

**作用**： 表示是否使用Eip，在使用优先级负载均衡功能时，如果使用pgxc_node表的node_host字段，则负载均衡功能将无效，因此应设置统一使用Eip。

**建议**： 默认值为true。

## forceTargetServerSlave

**作用**： 此值用于控制是否开启强制连接备机功能，并在集群发生主备切换时，禁止已存在的连接在升主备机上继续使用。false，表示不开启强制连接备机功能。true，表示开启强制连接备机功能。

**建议**： 默认值为false。

## autoBalance

**作用**： jdbc可以通过URL中设置多个数据库节点，实现对主备集群的访问。通过设置负载均衡算法，jdbc可以在建立连接时，依照特定规则将客户端与主备集群的连接依次建立在URL中配置的各个节点上，以此实现连接的负载均衡。为false时，此时jdbc始终与URL中配置的同一个满足建连条件的节点建立连接。连接主备集群时，使用此参数需要保证业务中没有写操作，或者与targetServerType=slave搭配，限制客户端只连接备机。

目前，jdbc提供了roundrobin、priority roundrobin、leastconn、shuffle四种负载均衡模式，具体如下：
    
    roundrobin：轮询模式，即与各候选节点轮流建立连接。取值："roundrobin"、"true"、"balance"。
    priority roundrobin：带优先级的轮询模式，优先对前n个候选节点做轮询建连，取值："proprity[n]"，n为非负整数。
    leastconn：最小连接模式，对候选节点依照各节点的有效连接数做优先级排序，优先与连接数少的节点建立连接，该方法只会统计通过当前驱动在当前集群内使用leastconn模式建立的连接。取值："leastconn"。
    shuffle：随机模式，即随机选择候选节点建立连接，取值："shuffle"。loadBalanceHosts设置为"true"等同于autoBalance设置为"shuffle"。
如果loadBalanceHosts设置为"true"的同时，autoBalance设置为以上四种负载均衡模式，优先使autoBalance生效；如果同时配置了autoBalance和targetServerType，jdbc会在满足targetServerType的前提下负载均衡；如果客户端使用多个指定了相同节点集合的URL分别通过同一驱动建立连接，jdbc会将其视为同一集群上的连接，并整体进行负载均衡。

**建议**： 默认值为false。

## enableQuickAutoBalance

**作用**： 该参数主要针对使用连接池连接主备集群并配置负载均衡的场景。当为true时，jdbc会定时检测URL中配置的节点的状态，当检测到节点恢复时，jdbc会筛选集群内其他节点上的空闲连接并关闭。连接池感知到缓存连接减少后，会基于leastconn模式在新恢复节点上创建连接，使集群重新负载均衡。该功能在筛选可关闭连接时，只会筛选由当前驱动创建的当前集群内的设置了enableQuickAutoBalance="true"的连接。该功能必须与最小连接模式配合使用：设置为"true"且autoBalance设置为"leastconn"时，功能开启。

**建议**： 默认值为false。

## maxIdleTimeBeforeTerminal

**作用**： jdbc触发快速负载均衡时，可保留连接的最大空闲时长，单位为秒。jdbc快速负载均衡功能筛选空闲连接时，会将处于idle状态并且持续时间大于等于maxIdleTimeBeforeTerminal的连接视为空闲连接，这些连接可能会被关闭。该参数只在autoBalance设置为"leastconn"且enableQuickAutoBalance设置为"true"时才生效。

**建议**： 默认值为30。

## minReservedconPerCluster

**作用**： jdbc触发快速负载均衡时，一个集群内空闲连接的最小保留百分比。默认情况下，jdbc触发快速负载均衡时，所有被筛选出来的空闲连接都会被关闭。设置该参数可以在触发快速负载均衡时，jdbc会至少保留一个集群内空闲连接的minReservedConPerCluster%。该参数针对集群生效，如果存在多个配置了相同节点的URL都设置了该参数，则取最小值。取值范围：[0, 100]内的整数。

**建议**： 默认值为0。

## minReservedconPerDatanode

**作用**： jdbc触发快速负载均衡时，一个节点内空闲连接的最小保留百分比。设置该参数可以在触发快速负载均衡时，jdbc会至少保留每个节点内空闲连接的minReservedConPerDatanode%。如果URL串同时设置了minReservedConPerDatanode和minReservedConPerCluster，jdbc会保证最终筛选出来的待关闭连接同时满足两个参数。该参数针对集群生效，如果存在多个配置了相同节点的URL都设置了该参数，则取最小值。取值范围：[0, 100]内的整数。

**建议**： 默认值为0。

## enableStatementLoadBalance

**作用**： 是否启动语句级负载均衡配置，以便于在执行每条sql语句时执行负载均衡路由。

**建议**： 默认值为false。

## writeDataSourceAddress

**作用**： 指定写入数据库的主机和端口，前提条件是enableStatementLoadBalance=true时该值才能生效。

**建议**： 默认值为空，根据业务需要进行配置。

## heartbeatPeriod

**作用**： 用于检测高可用场景下主节点上存活任务的线程间隔。该功能主要针对连接主备集群并且配置连接主节点的场景，当主节点宕机后，jdbc会在其备节点中查找新的节点，使下次建连的时候可以快速定位到新的节点。当且仅当设置了targetServerType=master且连接串的节点数大于1，如果可以建连成功，则开启或者加入对集群主节点的心跳维护，该参数配置小于等于0时，没有心跳间隔按照不开启，或者当前连接节点不加入心跳维护。

**建议**： 默认值为0，单位毫秒。

## masterFailureHeartbeatTimeout

**作用**： 在开启主节点心跳维护的场景下，当集群主节点宕机，设置对集群探寻主节点的超时阈值，在这个超时时间内还没有探测到主节点的存在，则认为集群一直没有主节点，不再对当前集群进行维护，这个时间应该包含主节点的RTO时间。

**建议**： 默认值：30000，单位：毫秒。

## adaptiveSetSQLType

**作用**： 以批处理模式自适应修改不一致的集合sqlType。如果第一个集合sqlType是Integer，第二个集合是Long，则第一个集合将自动修改为Long。

**建议**： 默认值为false。