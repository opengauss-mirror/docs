# UWAL配置参数

## replconninfo\{N\}<a name="section14941640131"></a>

**参数说明**： 配置远端UWAL节点的IP地址及Port，需要在原有参数后面增加remotenodeid（远端节点的uwal_nodeid）、remoteuwalhost（远端节点的uwal_ip）、remoteuwalport（远端节点的uwal_port），“N”表示设置本端侦听和鉴权的第N个节点信息。

**取值范围**： 字符串，其中空字符串表示没有配置第N个节点信息。


## enable\_uwal<a name="section14941640131"></a>

**参数说明**： 开启UWAL功能。

**取值范围**： 布尔型，on、off。on表示开启UWAL功能，off表示关闭UWAL功能。


## uwal\_config<a name="section14941640131"></a>

**参数说明**： UWAL配置。

**取值范围**： JSON类型的字符串。


## uwal\_disk\_size<a name="section14941640131"></a>

**参数说明**： UWAL占用磁盘大小，不能超过磁盘大小。单位：byte。

**取值范围**： 整型，最小值：8589934592；最大值：4398046511104。


## uwal\_devices\_path<a name="section14941640131"></a>

**参数说明**： UWAL文件存放路径（已存在的路径，不会自动创建目录），调用UwalInit()函数时传入的参数名。

**取值范围**： 字符串，文件存放路径组成的字符串。


## uwal\_log\_path<a name="section14941640131"></a>

**参数说明**： UWAL日志文件存放路径（已存在的路径，不会自动创建目录）。

**取值范围**： 字符串，文件存放路径组成的字符串。



## uwal\_rpc\_compression\_switch<a name="section14941640131"></a>

**参数说明**： 是否压缩传输。

**取值范围**： 布尔型，true、false。true表示开启压缩传输，false表示关闭压缩传输。


## uwal\_rpc\_flowcontrol\_switch<a name="section14941640131"></a>

**参数说明**： 纯异步备库流控开关，在主库设置。

**取值范围**： 布尔型，on、off。on表示打开纯异步备库流开关，off表示关闭纯异步备库流开关。


## uwal\_rpc\_flowcontrol\_value<a name="section14941640131"></a>

**参数说明**： 纯异步备库接收阈值。

**取值范围**： 整型，8～2048，单位：MB。


## uwal\_async\_append\_switch<a name="section14941640131"></a>

**参数说明**： UWAL使用同步写还是异步写。

**取值范围**： 布尔型，true、false。true表示使用异步写，false表示使用同步写。



## application\_name<a name="section14941640131"></a>

**参数说明**：当前连接请求当中，所使用的客户端名称。

**取值范围**： 任意字符串。




## uwal\_nodeid<a name="section14941640131"></a>

**参数说明**：当前UWAL节点的ID。

**取值范围**： 整型，0～7。


## uwal\_ip<a name="section14941640131"></a>

**参数说明**：UWAL侦听地址，调用UwalInit()函数时传入的参数名。

**取值范围**： 字符串，IPv4。


## uwal\_port<a name="section14941640131"></a>

**参数说明**：UWAL侦听端口，调用UwalInit()函数时传入的参数名。

**取值范围**： 整型，9000～65535。


## uwal\_protocol<a name="section14941640131"></a>

**参数说明**：当前节点连接类型，调用UwalInit()函数时传入的参数名，可选。

**取值范围**： 字符串，rcp、rdma。


## cpu\_bind\_switch<a name="section14941640131"></a>

**参数说明**：UWAL核心线程绑核开关，可选。

**取值范围**： 字符串，true、false。true表示开启绑核，false表示关闭绑核。


## cpu\_bind\_start<a name="section14941640131"></a>

**参数说明**：UWAL绑核CPU起始编号，可选。

**取值范围**： 整型，0～1024。


## cpu\_bind\_num<a name="section14941640131"></a>

**参数说明**：UWAL绑核CPU数量，可选。

**取值范围**： 整型，2～16。
