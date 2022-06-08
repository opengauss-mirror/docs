# 咨询锁函数<a name="ZH-CN_TOPIC_0289900296"></a>

咨询锁函数用于管理咨询锁（Advisory Lock）。

-   pg\_advisory\_lock\(key bigint\)

    描述：获取会话级别的排它咨询锁。

    返回值类型：void

    备注：pg\_advisory\_lock锁定应用程序定义的资源，该资源可以用一个64位或两个不重叠的32位键值标识。如果已经有另外的会话锁定了该资源，则该函数将阻塞到该资源可用为止。这个锁是排它的。多个锁定请求将会被压入栈中，因此，如果同一个资源被锁定了三次，它必须被解锁三次以将资源释放给其他会话使用。

-   pg\_advisory\_lock\(key1 int, key2 int\)

    描述：获取会话级别的排它咨询锁。

    返回值类型：void

    备注：只允许sysadmin对键值对\(65535, 65535\)加会话级别的排它咨询锁，普通用户无权限。

-   pg\_advisory\_lock\(int4, int4, Name\)

    描述：获取指定数据库的排它咨询锁。

    返回值类型：void

-   pg\_advisory\_lock\_shared\(key bigint\)

    描述：获取会话级别的共享咨询锁。

    返回值类型：void

-   pg\_advisory\_lock\_shared\(key1 int, key2 int\)

    描述：获取会话级别的共享咨询锁。

    返回值类型：void

    备注：pg\_advisory\_lock\_shared类似于pg\_advisory\_lock，不同之处仅在于共享锁会话可以和其他请求共享锁的会话共享资源，但排它锁除外。

-   pg\_advisory\_unlock\(key bigint\)

    描述：释放会话级别的排它咨询锁。

    返回值类型：Boolean

-   pg\_advisory\_unlock\(key1 int, key2 int\)

    描述：释放会话级别的排它咨询锁。

    返回值类型：Boolean

    备注：pg\_advisory\_unlock释放先前取得的排它咨询锁。如果释放成功则返回true。如果实际上并未持有指定的锁，将返回false并在服务器中产生一条SQL警告信息。

-   pg\_advisory\_unlock\(int4, int4, Name\)

    描述：释放指定数据库上的排它咨询锁。

    返回值类型：Boolean

    备注：如果释放成功则返回true；如果未持有锁，则返回false。

-   pg\_advisory\_unlock\_shared\(key bigint\)

    描述：释放会话级别的共享咨询锁。

    返回值类型：Boolean

-   pg\_advisory\_unlock\_shared\(key1 int, key2 int\)

    描述：释放会话级别的共享咨询锁。

    返回值类型：Boolean

    备注：pg\_advisory\_unlock\_shared类似于pg\_advisory\_unlock，不同之处在于该函数释放的是共享咨询锁。

-   pg\_advisory\_unlock\_all\(\)

    描述：释放当前会话持有的所有咨询锁。

    返回值类型：void

    备注：pg\_advisory\_unlock\_all将会释放当前会话持有的所有咨询锁，该函数在会话结束的时候被隐含调用，即使客户端异常地断开连接也是一样。

-   pg\_advisory\_xact\_lock\(key bigint\)

    描述：获取事务级别的排它咨询锁。

    返回值类型：void

-   pg\_advisory\_xact\_lock\(key1 int, key2 int\)

    描述：获取事务级别的排它咨询锁。

    返回值类型：void

    备注：pg\_advisory\_xact\_lock类似于pg\_advisory\_lock，不同之处在于锁是自动在当前事务结束时释放，而且不能被显式的释放。只允许sysadmin对键值对\(65535, 65535\)加事务级别的排它咨询锁，普通用户无权限。

-   pg\_advisory\_xact\_lock\_shared\(key bigint\)

    描述：获取事务级别的共享咨询锁。

    返回值类型：void

-   pg\_advisory\_xact\_lock\_shared\(key1 int, key2 int\)

    描述：获取事务级别的共享咨询锁。

    返回值类型：void

    备注：pg\_advisory\_xact\_lock\_shared类似于pg\_advisory\_lock\_shared，不同之处在于锁是在当前事务结束时自动释放，而且不能被显式的释放。

-   pg\_try\_advisory\_lock\(key bigint\)

    描述：尝试获取会话级排它咨询锁。

    返回值类型：Boolean

    备注：pg\_try\_advisory\_lock类似于pg\_advisory\_lock，不同之处在于该函数不会阻塞以等待资源的释放。它要么立即获得锁并返回true，要么返回false表示目前不能锁定。

-   pg\_try\_advisory\_lock\(key1 int, key2 int\)

    描述：尝试获取会话级排它咨询锁。

    返回值类型：Boolean

    备注：只允许sysadmin对键值对\(65535, 65535\)加会话级别的排它咨询锁，普通用户无权限。

-   pg\_try\_advisory\_lock\_shared\(key bigint\)

    描述：尝试获取会话级共享咨询锁。

    返回值类型：Boolean

-   pg\_try\_advisory\_lock\_shared\(key1 int, key2 int\)

    描述：尝试获取会话级共享咨询锁。

    返回值类型：Boolean

    备注：pg\_try\_advisory\_lock\_shared类似于pg\_try\_advisory\_lock，不同之处在于该函数尝试获得共享锁而不是排它锁。

-   pg\_try\_advisory\_xact\_lock\(key bigint\)

    描述：尝试获取事务级别的排它咨询锁。

    返回值类型：Boolean

-   pg\_try\_advisory\_xact\_lock\(key1 int, key2 int\)

    描述：尝试获取事务级别的排它咨询锁。

    返回值类型：Boolean

    备注：pg\_try\_advisory\_xact\_lock类似于pg\_try\_advisory\_lock，不同之处在于如果得到锁，在当前事务的结束时自动释放，而且不能被显式的释放。只允许sysadmin对键值对\(65535, 65535\)加事务级别的排它咨询锁，普通用户无权限。

-   pg\_try\_advisory\_xact\_lock\_shared\(key bigint\)

    描述：尝试获取事务级别的共享咨询锁。

    返回值类型：Boolean

-   pg\_try\_advisory\_xact\_lock\_shared\(key1 int, key2 int\)

    描述：尝试获取事务级别的共享咨询锁。

    返回值类型：Boolean

    备注：pg\_try\_advisory\_xact\_lock\_shared类似于pg\_try\_advisory\_lock\_shared，不同之处在于如果得到锁，在当前事务结束时自动释放，而且不能被显式的释放。

-   lock\_cluster\_ddl\(\)

    描述：尝试对openGauss内所有存活的数据库主节点获取会话级别的排他咨询锁。

    返回值类型：Boolean

    备注：只允许sysadmin调用，普通用户无权限。

-   unlock\_cluster\_ddl\(\)

    描述：尝试对数据库主节点会话级别的排他咨询锁。

    返回值类型：Boolean


