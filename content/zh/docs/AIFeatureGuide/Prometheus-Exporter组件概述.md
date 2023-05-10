# 概述

Prometheus是业内非常流行的开源监控系统，同时本身也是一款时序数据库。Prometheus的采集端称之为exporter，用来收集被监控模块的指标项。为了与Prometheus平台完成对接，AI工具分别实现了两款exporter，分别是用来采集数据库指标的openGauss-exporter，以及对采集到的指标进行二次加工的reprocessing-exporter。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>Prometheus 和exporter是业内流行的监控和采集平台，部署在内网环境中，不对外部暴露接口，仅供内部监控平台使用。因此，为了增强该平台的安全性，一般需要用户或运维人员配置防火墙等，以便隔离外部访问，从而增强监控平台的安全性。
>Prometheus平台在默认情况下，采用Http协议、并且没有任何安全访问限制。这是因为，该平台一般部署在内网环境中，攻击风险可控。如果用户希望提高安全性，可自行修改Prometheus的TLS配置选项，但仍不建议对外部直接暴露访问接口。

