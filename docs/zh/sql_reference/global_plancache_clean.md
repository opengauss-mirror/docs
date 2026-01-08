# GLOBAL_PLANCACHE_CLEAN<a name="ZH-CN_TOPIC_0297927202"></a>

GPC相关视图在enable_global_plancache打开且线程池打开的状态下才有效。

GLOBAL_PLANCACHE_CLEAN视图用于清理所有节点上无人使用的全局计划缓存。返回值为Boolean类型。

## 使用说明<a name="section3480125215602"></a>

全局计划缓存的删除与否涉及GLOBAL_PLANCACHE_STATUS中的两个属性, refcount和valid
- 当refcount = 0时, 如果此时valid由t变为f, 该全局计划缓存记录会被自动删除。
- 当valid为f时, 如果此时refcount由1变为0, 此时不会触发自动删除, 可以使用GLOBAL_PLANCACHE_CLEAN手动清除, 也可以等待后台线程自动检测并清除(最久300s)。
- 当refcount=0且valid=t时, 该记录不会被自动清除, 但可以使用GLOBAL_PLANCACHE_CLEAN手动清除。