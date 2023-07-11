# ndpplugin 系统视图

pushdown_statics
pushdown_statics视图显示下推查询基础统计信息。
|名称|类型|描述|
| ------------ | ------------ | ------------ |
|query|unsigned long|下推查询数|
|total_pushdown_page|unsigned long|下推页面数|
|back_to_gauss|unsigned long|返回原生处理页面数|
|received_scan|unsigned long|接收到的scan算子数据过滤后的页面数|
|received_agg|unsigned long|接收到的agg算子数据聚合后的页面数|
|failed_backend_handle|unsigned long|存储侧libsmartscan处理失败页面数|
|failed_sendback|unsigned long|发送失败页面数|
