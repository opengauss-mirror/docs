# 主备高可用能力增强

## 可获得性<a name="section14707931165614"></a>

本特性自openGauss 5.1.0版本开始引入。

## 特性简介<a name="section43398242"></a>

针对备机异常的场景，优化主机的业务在最大可用模式下不阻塞，并且表的垃圾回收不受影响。

## 客户价值<a name="section55039858"></a>

当同步备机异常时，例如磁盘故障，导致备机长时间阻塞在写盘上，而主机的synchronous_commit设置为on以上，会导致主机的业务阻塞，本特性实现备机的同步日志点长时间未推进时，主机业务不再需要等该备机同步。

另外，开启了hot_standby_feedback后，备机实时将oldestXmin同步到主机，主机会将该值持久化到复制槽文件中，autovacuum会根据这个xmin来清理这个点之前的脏数据，并保留之后的。 备机故障后，主机保存的xmin一直无法推进，导致清理无效，发生表膨胀。本特性同样实现xmin长时间未推进时，主机的autovacuum不考虑该xmin。


## 特性描述<a name="section25596675"></a>

最大可用模式most_available_sync开启的情况下，根据配置的同步提交等级synchronous_commit，在同步备反馈的receive\write\flush\replay位点一个超时窗口未推进时，主机提交事务不等待该备机同步，交易不受影响。备机恢复正常后，位点推进了，主机交易仍等待该备机同步。该超时窗口的配置参数为ignore_standby_lsn_window。

针对hot_standby_feedback开启场景，如果备机反馈的xmin一个超时窗口未推进时，则不考虑此备机的xmin，不影响主机autovacuum。该超时窗口的配置参数为ignore_feedback_xmin_window。


## 特性增强<a name="section29043486"></a>

无。

## 特性约束<a name="section27741012910"></a>

- ignore_standby_lsn_window需要在最大可用模式most_available_sync打开才能生效。

## 依赖关系<a name="section57771982"></a>

无。

