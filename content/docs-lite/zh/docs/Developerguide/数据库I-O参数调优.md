# 数据库I/O参数调优<a name="ZH-CN_TOPIC_0000001149231237"></a>

## I/O相关参数<a name="section181599115402"></a>

-   pagewriter\_sleep：增量checkpoint模式，控制后端写进程pagewriter刷页频率，当脏页占据shared\_buffers的比例达到dirty\_page\_percent\_max时，每批脏页数量以设定的max\_io\_capacity计算出的值刷页。pagewriter线程刷页用于推进recovery点，设置时间较长时，会导致recovery点推进慢，宕机启动时间长和xlog日志堆积问题。

    为降低RTO，减少日志膨胀，需要将pagewriter\_sleep适当调小，加快页面刷盘，推进recovery点，促进日志回收。

-   bgwriter\_delay：增量checkpoint模式下，控制后端写进程bgwriter刷页频率，当前空闲缓冲页面个数占据shared\_buffers的比例低于candidate\_buf\_percent\_target时，每批脏页数量以设定的max\_io\_capacity计算出的值刷页。bgwriter线程将可以淘汰的页面刷盘，加速业务执行时，页面占用槽位的速度，时间过长会影响性能。

    为了提升业务性能时，适当调小bgwriter\_delay的时间。

-   max\_io\_capacity：设置后端写进程（pagewriter线程和bgwriter线程）批量刷页每秒的IO上限，需要根据具体业务场景和机器磁盘IO能力进行设置。要求RTO很短时间或者数据量比共享内存大多倍的情况，业务访问数据量又是随机访问时，该值不宜过小。该参数设置较小会减小后端写进程刷页个数，如果业务触发页面淘汰多时，该值设置小会影响业务。

    max\_io\_capacity需依据随机写IO能力最优设置。


