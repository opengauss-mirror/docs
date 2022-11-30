# AI4DB: 数据库自治运维<a name="ZH-CN_TOPIC_0000001243723307"></a>

如上文所述，AI4DB主要用于对数据库进行自治运维和管理，从而帮助数据库运维人员减少运维工作量。在实现上，DBMind的AI4DB框架具有监控和服务化的性质，同时也提供即时AI工具包，提供开箱即用的AI运维功能（如索引推荐）。AI4DB的监控平台以开源的Prometheus为主，DBMind提供监控数据生产者exporter, 可与Prometheus平台完成对接。DBMind的AI4DB服务架构如下图所示：

**图 1**  DBMind AI4DB服务架构<a name="fig1555795823612"></a>
![](figures/DBMind-AI4DB-service-architecture.png "DBMind-AI4DB服务架构")

图中各关键组件说明：

-   DBMind Service: DBMind后台服务，可用于定期离线计算，包括慢SQL根因分析、时序预测等；
-   Prometheus-server: Prometheus 监控指标存储的服务器；
-   metadatabase: DBMind在离线计算结束后，将计算结果存储在此处，支持openGauss、SQLite等数据库；
-   client: 用户读取DBMind离线计算结果的客户端，目前仅实现命令行客户端；若采用openGauss等数据库存储计算DBMind计算结果，则用户可以自行配置Grafana等可视化工具对该结果进行可视化；
-   openGauss-exporter: 用户从openGauss数据库节点上采集监控指标，供DBMind服务进行计算；
-   node-exporter: Prometheus官方提供的exporter, 可用于监控该节点的系统指标，如CPU和内存使用情况；
-   reprocessing-exporter: 用于对Prometheus采集到的指标进行二次加工处理，例如计算CPU使用率等。

## 环境配置<a name="section14906112131913"></a>

DBMind外置AI功能需要运行在Python 3.6版本及以上，需要的第三方依赖包记录在AI功能根目录（$**GAUSSHOME**/bin/dbmind）的requirements.txt文件中（包括requirements-x86.txt与requirements-arrch64.txt，用户可根据自己平台类型选择）中，可以通过pip install命令安装依赖，如：

```
pip install requirements-x86.txt
```

如果用户没有安装齐全所需的依赖，则当用户执行gs\_dbmind命令时，会再次提醒用户安装第三方依赖。需要注意，该文件提供了DBMind所需的第三方依赖，若用户环境存在第三方包冲突等情况，可由用户根据实际情况进行处理。

-   **[DBMind模式说明](DBMind模式说明.md)**

-   **[DBMind的支持组件](DBMind的支持组件.md)**

-   **[DBMind的AI子功能](DBMind的AI子功能.md)**
