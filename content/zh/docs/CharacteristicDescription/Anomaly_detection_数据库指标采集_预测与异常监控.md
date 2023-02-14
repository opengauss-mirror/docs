# Anomaly-detection：数据库指标采集、预测与异常监控

## 可获得性<a name="section1394818443613"></a>

本特性自openGauss1.1.0版本开始引入。

## 特性简介<a name="section36382403357"></a>

anomaly\_detection是openGauss集成的、可以用于数据库指标采集、预测以及异常监控与诊断的AI工具，是dbmind套间中的一个组件。支持采集的信息包括IO\_Read、IO\_Write、CPU\_Usage、Memory\_Usage以及数据库所占磁盘空间等。anomaly\_detection可以同时监控多个指标，并预测每个指标未来的变化趋势，当发现某个指标在未来某段时间或者某个时刻会超出人工设置的阈值，该工具会通过日志进行报警。

## 客户价值<a name="section5621105733410"></a>

-   极大简化运维人员工作，释放大量劳动力，为公司节省成本。
-   为用户提前发现异常情况，防止数据库发生意外，导致更大的损失。

## 特性描述<a name="section117712392341"></a>

anomaly\_detection由agent和detector两部分组成。agent和openGauss数据库环境部署在同一个服务器上，agent模块主要有两个作用。一个是定时采集数据库指标数据，并将采集到的数据存放到缓冲队列中；另一个作用是将缓冲队列中数据定时发送到detector端。

detector模块基于http或https和agent模块通信，因此它可以部署到任何可以与agent端进行通信的服务器上，该模块主要主要有两个作用。一个是接受agent端发送的数据，并将收集到的数据缓存在本地；另外一个作用是基于收集到的数据库指标数据，对该指标的未来变化趋势进行预测和异常报警。

## 特性增强<a name="section144513469345"></a>

无。

## 特性约束<a name="section1613131119346"></a>

-   数据库状态正常，并且用户已将数据目录写入环境变量，并以PGDATA命名。
-   使用登录到数据库宿主机上的Linux用户，需要将$**GAUSSHOME/bin**添加到PATH环境变量中，即能够直接运行gsql、gs\_guc、gs\_ctl等数据库运维工具。
-   Python版本建议为Python3.6及以上，且运行环境中已经安装相应依赖，并能够正常启动调优程序。
-   本工具由Agent和Detector组成，Agent和Detector之间通过'http'或者'https'方式传递数据，因此需要保证Agent服务器和Detector服务器之间能够正常通信。
-   Detector模块运行server和monitor服务， 需要分别启动。
-   如果使用'https'方式进行通信，需要准备CA证书以及Agent和Detector的证书和密钥，并分别放入项目根目录certificate下的ca、agent、server中，同时将密钥加密密码放入certificate的pwf中，并将其权限设置为600，防止其他用户进行读写操作。用户也可以使用share中的脚本生成证书和密钥。

## 依赖关系<a name="section4228145683310"></a>

无。
