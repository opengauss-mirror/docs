# 备机支持写语句参数

## enable\_remote\_execute<a name="section14941640131"></a>

**参数说明**： 是否开启允许备机执行写语句，启动后不允许修改。

该参数属于POSTMASTER类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，true、false。true表示当前安装部署开启备机执行写语句模式，off表示不开启。

**默认值**： off

>[!NOTE]说明
>
>- enable\_remote\_execute参数在单机模式下默认false。
>- 若开启备机允许执行写语句需要将此参数设置为true。
>- 开关打开后，允许备机执行写语句和DDL，支持简单查询和扩展查询；此状态下读语句仍然在备机执行，写语句会转发到主机执行。
>- 开关打开后，备机不支持事务内包含有DDL语句，遇到这种情况会直接报错。
>- 在传统主备架构下，开关打开后，备机启动事务后会将所有SQL语句全部无条件转发给主机,包括读语句。
>- 在资源池化架构下，开关打开后，备机启动事务后会将事务中的涉及修改的写SQL语句转发给主机, 事务中的读语句仍然在备机本地执行。
>- 在资源池化架构下，开关打开后，备机不支持事务内包含有DDL语句和LOCK语句，遇到这种情况会报错。
>- 在资源池化架构下，开关打开后，如果事务内包含子事务，那么事务内的读也会转发到主。
>- 在资源池化架构下，开关打开后，COPY类型的语句不会转发到主机执行，即COPY TO类型的命令可以在备机上执行成功，COPY FROM类型的命令会正常报错。
>- 在资源池化架构下，开关打开后，不会因为备机支持了写转发而改变外围工具的执行行为，比如gs_dump/gs_dumpall/gs_probackup/pg_recvlogical之类的命令，依然会按照原有的逻辑报错支持或者不支持。
>- 在资源池化架构下，开关打开后，如果执行写业务的备机的并发连接数超过50，且业务端存在报错“standbywrite could not connect to the remote server”时，需要调整连接主机的最大等待超时时间wal\_receiver\_connect\_timeout，建议配置为120s，配置方式参考[备机参数](./standby_server.md)中该参数的说明。
>- 在资源池化架构下，开关打开后，因为备机的事务中的写语句可能会分发到主机执行，所以不能支持主机重启，备机不断业务的场景，同理，因为备机上执行的事务分发到主机上执行的部分语句需要返回结果给备机，所以不能支持备机重启，主机不断业务的场景。
>- 在资源池化架构下，开关打开后，备机不支持不在显式事务块内的存储过程/函数/自治事务/Package的调用。如果需要调用存储过程/函数/自治事务/Package，需要在显式的事务块中，且以call xxx的方式去使用。例如：
>
```sql
    openGauss=# begin;
    BEGIN
    openGauss=# call pck1.p1();
    INFO:   rowcount: 1
    INFO:   (2,200,var2,clob2,1234ABD2,text2)
    INFO:   rowcount: 2
     p1
    ----

    1 (row)
    openGauss=# end;
    COMMIT
```
>
>- 开关打开后，用于在备机上执行写业务操作的用户必须具有SYSADMIN权限，且仍需具备执行目标SQL所需的对象权限。
>- 开关打开后，备机写语句会使用当前业务用户向主机建立内部写转发连接，连接参数包含`replication=standbywrite`。因此，主机侧（以及主备切换后可能成为主机的节点）`pg_hba.conf`需要配置匹配的`host replication`认证规则，允许对应备机IP以该业务用户建立连接。建议按业务用户和备机IP配置最小范围，例如`host replication <business_user> <standby_ip>/32 sha256`。`pg_hba.conf`配置方法请参考[配置客户端接入认证](../database_administration_guide/configuring_client_access_authentication.md)。
>- 如果`host replication`规则使用`sha256`等密码认证方式，需要确保备机数据库进程能够获取该业务用户连接主机的认证凭据，例如在数据库运行用户可读取的`.pgpass`中配置对应的主机、端口、数据库、用户和密码。写转发不会自动复用客户端连接备机时输入的密码。
>- `pg_hba.conf`仅控制连接准入，不授予SYSADMIN权限或数据库对象权限，不能替代`GRANT`或用户授权配置。请避免使用`host replication all 0.0.0.0/0 trust`等宽泛或不验密规则。若主机侧不存在匹配规则，写转发可能会报错`standbywrite could not connect to the remote server`或`no pg_hba.conf entry for replication connection`。
