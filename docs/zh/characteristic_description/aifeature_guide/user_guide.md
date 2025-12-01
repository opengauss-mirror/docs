# 使用指南<a name="ZH-CN_TOPIC_0000002293420717"></a>

## DBMind支持的场景规格<a name="zh-cn_topic_0000002242140561_section6135748481"></a>

- DBMind仅支持同形态纳管，不支持混合纳管。
- DBMind依赖Python驱动psycopg2，开源psycopg2不再支持，仅支持自研psycopg2。
- DBMind目前不支持在元数据库与日志文件被手动变更的情况下保留原始数据。
- DBMind支持纳管多集群，但是随着纳管集群节点越多，消耗的资源也对应增多。需要在DBMind消耗的资源过多时，停止纳管更多节点，以避免CPU和内存资源不足。
- DBMind实例纳管建议为1个CPU核对应3个节点，如果纳管的实例节点数太多，会导致DBMind服务接口超时或服务异常。
- DBMind Web API调用支持50并发。
- DBMind只支持文档中写明的场景，不支持文档中没有明确的场景、示例中不包括的部署形态、使用方法等超规格使用形式的情况。
- DBMind所支持的实例数不能超过该部署环境最大支持上限（即超规格部署，CPU长期处于100%状态运行）。
- DBMind为保证默认安全，配置exporter采集组件以及DBMind Web服务时，请使用HTTPS协议，并使用加密的私钥文件，私钥文件的加密密码须符合公司要求的密码复杂度。
- 在数据库资源异常，如连接数满、线程池满或动态内存满等情况下，DBMind服务将暂时不可用。当异常解除时DBMind服务可自行恢复。

- **[DBMind模式说明](dbmind_mode.md)**  

- **[DBMind的支持组件](prometheus_exporter_overview.md)**  

- **[DBMind服务部署](start_the_collection_component.md)**  

- **[DBMind的AI子功能](ai_sub_functions_of_the_dbmind.md)**  
