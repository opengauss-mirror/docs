# Overview<a name="EN-US_TOPIC_0000001240824995"></a>

Prometheus is a popular open-source monitoring system in the industry. It is also a time series database. The collector of Prometheus is called exporter, which is used to collect metrics of monitored modules. To interconnect with the Prometheus platform, the AI tool provides two types of exporters: openGauss-exporter for collecting database metrics and reprocessing-exporter for reprocessing the collected metrics.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Prometheus and exporter are popular monitoring and collection platforms in the industry. They are deployed on the intranet and do not expose interfaces to external systems. They are used only by internal monitoring platforms. Therefore, to enhance the security of the monitoring platform, users or O&M personnel need to configure firewalls to isolate external access and enhance the security of the monitoring platform.
>By default, the Prometheus platform adopts HTTP and has no security access restrictions. This is because the platform is generally deployed on the intranet and the attack risk is controllable. If you want to enhance security, you can modify the TLS configuration options of Prometheus. However, you are not advised to expose the access interface to external systems.

