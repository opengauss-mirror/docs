# Global SysCache参数<a name="ZH-CN_TOPIC_0000001242538051"></a>

## enable\_global\_syscache<a name="section97160555612"></a>

**参数说明**：控制是否使用全局系统缓存功能。该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：布尔型

-   on表示开启全局系统缓存功能。
-   off表示不开启全局系统缓存功能。

**默认值**：on

推荐结合线程池参数使用。 打开该参数后，如果需要访问备机，建议设置备机wal\_level 级别为 hot\_standby以上。

## global\_syscache\_threshold<a name="section787511112134"></a>

**参数说明：**全局系统缓存内存最大占用大小。

该参数属于PGC\_SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

需要打开enable\_global\_syscache参数。

**取值范围**：整型，16384\~1073741824，单位为kB。

**默认值：**65536

推荐计算公式：热点DB个数和线程个数的最小值乘以每个DB分配的内存大小

即global\_syscache\_threshold = min\(count\(hot dbs\)，count\(threads\)\) \* memofdb

热点DB数即访问较为频繁的数据库，线程数在线程池模式下取线程池线程个数和后台线程个数之和，非线程池模式不需要计算这个值，直接使用热点DB数。

memofdb即平均每个db应该分配的内存，每个DB的底噪内存是2M，平均每增加一个表或者索引，增加11k内存。

如果设置的值过小，会导致内存频繁淘汰，内存存在大量碎片无法回收，导致内存控制失效。

