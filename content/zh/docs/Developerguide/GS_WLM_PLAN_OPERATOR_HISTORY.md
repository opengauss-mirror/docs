# GS\_WLM\_PLAN\_OPERATOR\_HISTORY<a name="ZH-CN_TOPIC_0244379688"></a>

GS\_WLM\_PLAN\_OPERATOR\_HISTORY视图显示的是当前用户数据库主节点上执行作业结束后的执行计划算子级的相关记录。

内核中的数据会定时被清理，清理周期为3分钟。当GUC参数[enable\_resource\_record](负载管理.md#zh-cn_topic_0237124729_zh-cn_topic_0059777791_s77bd1023b63c4cd489760aa33f08d1ea)为on时，视图中的记录每隔3分钟被转储到系统表[GS\_WLM\_PLAN\_OPERATOR\_INFO](GS_WLM_PLAN_OPERATOR_INFO.md)中一次，同时视图中的记录被删除；当GUC参数[enable\_resource\_record](负载管理.md#zh-cn_topic_0237124729_zh-cn_topic_0059777791_s77bd1023b63c4cd489760aa33f08d1ea)为off时，记录在视图中的存留时间达到超期时间（超期时间为3分钟）后会被删除。记录的数据同[表1](GS_WLM_PLAN_OPERATOR_INFO.md#zh-cn_topic_0111176227_table85181143511)。

