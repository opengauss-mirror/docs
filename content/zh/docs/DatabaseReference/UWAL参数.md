# UWAL参数

## replconninfo\{N\}<a name="section14941640131"></a>

**参数说明**： 配置远端UWAL节点的IP地址及Port，需要在原有参数后面增加remotenodeid（远端节点的uwal_nodeid）、remoteuwalhost（远端节点的uwal_ip）、remoteuwalport（远端节点的uwal_port），“N”表示设置本端侦听和鉴权的第N个节点信息。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，其中空字符串表示没有配置第N个节点信息。

**默认值**： 空字符串


## enable\_uwal<a name="section14941640131"></a>

**参数说明**： 开启UWAL功能。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on、off。on表示开启UWAL功能，off表示关闭UWAL功能。

**默认值**： off


## uwal\_config<a name="section14941640131"></a>

**参数说明**： UWAL配置。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： JSON类型的字符串。

**默认值**： 空字符串


## uwal\_disk\_size<a name="section14941640131"></a>

**参数说明**： UWAL占用磁盘大小，不能超过磁盘大小。单位：byte。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，最小值：8589934592；最大值：4398046511104。

**默认值**： 8589934592


## uwal\_devices\_path<a name="section14941640131"></a>

**参数说明**： UWAL文件存放路径（已存在的路径，不会自动创建目录），调用UwalInit()函数时传入的参数名。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，文件存放路径组成的字符串。

**默认值**： 空字符串


## uwal\_log\_path<a name="section14941640131"></a>

**参数说明**： UWAL日志文件存放路径（已存在的路径，不会自动创建目录）。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，文件存放路径组成的字符串。

**默认值**： 空字符串



## uwal\_rpc\_compression\_switch<a name="section14941640131"></a>

**参数说明**： 是否压缩传输。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，true、false。true表示开启压缩传输，false表示关闭压缩传输。

**默认值**： false


## uwal\_rpc\_flowcontrol\_switch<a name="section14941640131"></a>

**参数说明**： UWAL流控开关，在主库设置。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on、off。on表示打开UWAL流控开关，off表示关闭UWAL流控开关。

**默认值**： off


## uwal\_rpc\_flowcontrol\_value<a name="section14941640131"></a>

**参数说明**： UWAL接受阈值。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，8～2048，单位：MB。

**默认值**： 128


## uwal\_async\_append\_switch<a name="section14941640131"></a>

**参数说明**： UWAL使用同步写还是异步写。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，true、false。true表示使用异步写，false表示使用同步写。

**默认值**： false



# uwal\_config参数

## uwal\_nodeid<a name="section14941640131"></a>

**参数说明**：当前UWAL节点的id。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0～7。

**默认值**： None


## uwal\_ip<a name="section14941640131"></a>

**参数说明**：UWAL侦听地址，调用UwalInit()函数时传入的参数名。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，IPv4。

**默认值**： 空字符串


## uwal\_port<a name="section14941640131"></a>

**参数说明**：UWAL侦听端口，调用UwalInit()函数时传入的参数名。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，9000～65535。

**默认值**： None


## uwal\_protocol<a name="section14941640131"></a>

**参数说明**：当前节点连接类型，调用UwalInit()函数时传入的参数名，可选。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，rcp、rdma。

**默认值**： tcp


## uwal\_replinodes<a name="section14941640131"></a>

**参数说明**：远端节点类型。id为远端节点对应的uwal_nodeid，protocol与id对应远端节点的uwal_protocol保持一致，可选。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 数组，id：0~7；protocol：tcp、rdma。

**默认值**： tcp



## cpu\_bind\_switch<a name="section14941640131"></a>

**参数说明**：UWAL核心线程绑核开关，可选。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，true、false。true表示开启绑核，false表示关闭绑核。

**默认值**： false


## cpu\_bind\_start<a name="section14941640131"></a>

**参数说明**：UWAL绑核CPU起始编号，可选。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0～1024。

**默认值**： 1


## cpu\_bind\_num<a name="section14941640131"></a>

**参数说明**：UWAL绑核CPU数量，可选。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，2～16。

**默认值**： 3
