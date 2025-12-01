# 大对象操作函数<a name="ZH-CN_TOPIC_0289900319"></a>
openGauss具有大对象的功能，它提供了对于存储在一个特殊大对象结构中的用户数据的流式访问。对于那些大得无法以一个整体处理的数据值 ，流式访问非常有用。

## 注意事项<a name="zh-cn_topic_0283137215_zh-cn_topic_0237121109_zh-cn_topic_0151096201_zh-cn_topic_0085032332_zh-cn_topic_0059779299_s4ed40b90fef642e1960afb00e661e34a"></a>

-   一个大对象存储的数据块并不需要是连续的。例如，如果一个应用打开了一个新的大对象，移动到偏移量1000000并写了一些字节，这并不会导致分配1000000字节的存储，只有覆盖写入字节范围的数据块需要被分配。而一个读操作将会把现有最后的数据块之前还未分配的位置读出为0。这和Unix文件系统中"稀疏"文件的一般行为相对应。

-   大对象可以有一个拥有者和一组访问权限，它们可以用`GRANT`和`REVOKE`管理。读一个大对象需要`SELECT`权限，而写或者截断一个大对象则需要`UPDATE`权限。只有大对象的拥有者\(或者一个数据库超级用户\)可以创建大对象、注释大对象或修改大对象的拥有者。

## 客户端函数<a name="zh-cn_topic_0283137215_zh-cn_topic_0237121109_zh-cn_topic_0151096201_zh-cn_topic_0085032332_zh-cn_topic_0059779299_s4ed40b90fef642e1960afb00e661e34b"></a>
-   lo\_creat\(lobjId oid\)

    描述：创建一个新的大对象。其返回值是分配给这个新大对象OID的或者InvalidOid\(0\)表示失败。

    返回值类型：oid

-   lo\_create\(lobjId oid\)

    描述：创建一个新的大对象。可以通过lobjId指定分配给该大对象的OID，若该OID已经被某个大对象使用则会产生错误。如果lobjId是InvalidOid\(0\)，则lo\_create会分配一个未使用的OID，这时和lo\_creat的行为相同。返回值是分配给新大对象的OID或InvalidOid\(0\)表示发生错误。

    返回值类型：oid

-   lo\_import\(filepath text [, lobjId oid]\)

    描述：filepath指定了要导入为大对象的服务器端文件的绝对路径, 可以用lobjId指定分配给新大对象的OID，若该OID已经被某个大对象使用则会产生错误。如果oid是InvalidOid\(0\)，则会分配一个未使用的OID。返回值是分配给新大对象的OID或InvalidOid\(0\)表示发生错误。
    
    限制：由于该函数的功能是在服务器的文件系统进行读取，恶意用户可以很容易地利用它们成为超级用户，因此限制只有超级用户才能使用该函数。
    
    注意: 导入时会把大对象拆分为很多数据块存储在pg\_largeobject的data列中。查询和写入时都需要通过索引频繁地查询pg\_largeobject，保证在进行随机访问读写时能够根据数据块号快速地搜索到正确的数据块。由于opengauss查询数据速度比pg慢，所以耗时更多。

    返回值类型：oid

-   lo\_export\(lobjId oid, filepath text\)

    描述：lobjId参数指定要导出的大对象的OID，filepath参数指定要导出的服务器端文件的绝对路径。

    限制：由于该函数的功能是在服务器的文件系统进行写入，恶意用户可以很容易地利用它们成为超级用户，因此限制只有超级用户才能使用该函数。

    返回值类型：int4

-   lo\_open\(lobjId oid, mode int4\)

    描述：lobjId参数指定要打开的大对象的OID。mode位控制着打开对象是为了只读\(INV\_READ\)、只写\(INV\_WRITE\)或者读写。lo\_open返回一个非负的大对象描述符以便后面用于lo\_read、lo\_write、lo\_lseek、lo\_lseek64、lo\_tell、lo\_tell64、lo\_truncate、lo\_truncate64以及lo\_close，该描述符只在当前事务期间有效。返回值为类似文件描述符的值，如果打开错误将会返回-1。

    返回值类型：int4

-   lowrite\(fd int4, data bytea\)

    描述：把data写到大对象描述符fd。参数fd必须是已经由前面的lo_open返回的大对象描述符。函数将返回实际写入的字节数，出错时返回值为-1。

    返回值类型：int4

-   loread\(fd int4, len int4\)
    
    描述：从大对象描述符fd中读取len字节。参数fd必须是已经由前面的lo\_open返回的大对象描述符。实际读出的字节数将被返回，如果先到达了大对象的末尾返回值可能会小于len。出错时返回值为-1。

    返回值类型：text

-   lo\_lseek\(fd int4, offset int4, whence int4\)
    
    描述：该函数将大对象文件描述符fd的当前位置指针移动到由offset指定的新位置。whence的可用值是SEEK\_SET\(从对象开头定位\)、SEEK\_CUR \(从当前位置定位\)以及SEEK\_END\(从对象末尾定位\)。返回值是新位置的指针，或者是-1表示出错。

    返回值类型：int4

-   lo\_lseek64\(fd int4, offset int8, whence int4\)
    
    描述：该函数的行为和lo\_lseek相同，但是它能接受一个超过2GB的offset并传送一个超过2GB的结果。注意如果新位置的指针超过2GB，lo\_lseek会失败。

    返回值类型：int8

-   lo\_tell\(fd int4\)
    
    描述：得到一个大对象描述符的当前读或写位置。

    返回值类型：int4

-   lo\_tell64\(fd int4\)
    
    描述：该函数和lo\_tell的行为相同，但是它能传递超过2GB的结果。注意如果当前读、写位置超过2GB，lo\_tell将会失败。

    返回值类型：int8

-   lo\_truncate\(fd int4, len int4\)
    
    描述：该函数将大对象描述符fd截断为长度len。参数fd必须是已经由前面的lo\_open返回的大对象描述符。如果len超过了大对象的当前长度，大对象将会被使用空字节\('\0'\)扩展到指定长度。成功时lo\_truncate返回0，失败时返回值为-1。描述fd的读、写位置不变。

    返回值类型：int4

-   lo\_truncate64\(fd int4, len int8\)
    
    描述：该函数和lo_truncate的行为相同，但它能够接受超过2GB的len值。

    返回值类型：int4

-   lo\_close\(fd int4\)
    
    描述：关闭一个大对象描述符，fd是由lo\_open返回的大对象描述符。成功时，lo\_close返回0，失败时返回-1。

    返回值类型：int4
    
-   lo\_unlink\(lobjId oid\)
    
    描述：移除oid为lobjId的大对象，成功时返回1，失败时返回-1。

    返回值类型：int4

## 服务器函数<a name="zh-cn_topic_0283137215_zh-cn_topic_0237121109_zh-cn_topic_0151096201_zh-cn_topic_0085032389_zh-cn_topic_0059779299_s4ed40b90fef642e1960afb00e661e34d"></a>
-   lo\_from\_bytea\(loid oid, data bytea\)
    
    描述：创建一个大对象并在其中存储数据。 如果loid为0，则系统将选择一个空闲OID。若该OID已经被某个大对象使用则会产生错误。执行成功时会返回大对象的OID。

    返回值类型：oid

-   lo\_put\(loid oid, offset int8, data bytea\)
    
    描述：在大对象中写入从给定偏移量开始的数据，如有必要，可以把大对象扩大。

    返回值类型：void

-   lo\_get\(loid oid \[, offset int8, length int4\]\)
    
    描述：提取大对象的内容、或其中的子字符串。

    返回值类型：bytea