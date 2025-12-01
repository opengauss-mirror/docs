# MOT性能基准<a name="ZH-CN_TOPIC_0289900510"></a>

我们的性能测试是基于业界和学术界通用的TPC-C基准。

测试使用了BenchmarkSQL（请参见[MOT样例TPC-C基准](mot_sample_tpc_c_benchmark.md)），并且使用交互式SQL命令而不是存储过程来生成工作负载。

>[!NOTE]说明
>
>使用存储过程方法可能会产生更高的性能结果，因为它需要大大减少网络往返和数据库封装SQL处理周期。

评估openGauss MOT性能和磁盘性能的所有测试都使用了同步日志记录和在MOT中优化的group-commit=on版本。

最后我们进行了额外测试，评估MOT快速采集大量数据的能力，并将其作为中间层数据采集解决方案的替代方案。

2020年6月完成全部测试。

下面是各种类型的MOT性能基准：

- **[MOT硬件](mot_hardware.md)**  

- **[MOT测试总结](mot_results_summary.md)**  

- **[MOT高吞吐量](mot_high_throughput.md)**  

- **[MOT低延迟](mot_low_latency.md)**  

- **[MOT恢复时间目标（RTO）和冷启动时间](mot_rto_and_cold_start_time.md)**  

- **[MOT资源利用率](mot_resource_utilization.md)**  

- **[MOT数据采集速度](mot_data_ingestion_speed.md)**  
