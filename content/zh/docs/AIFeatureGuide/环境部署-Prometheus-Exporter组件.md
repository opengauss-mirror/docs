# 环境部署<a name="ZH-CN_TOPIC_0000002259758088"></a>

用户可以从Prometheus的官网上下载Prometheus-server和node-exporter，然后根据官方文档中的说明启动它们；

其中，提供的exporter组件默认采用HTTPS通信协议，因此需要用户默认提供SSL证书和密钥文件，并通过“--ssl-keyfile”、“--ssl-certfile”以及“--ssl-ca-file”选项进行配置。若用户不希望使用HTTPS协议，则可以通过“--disable-https”选项禁用该模式。

>![](public_sys-resources/icon-note.gif) **说明：** 
>由于openGauss默认模式下openGauss与PostgreSQL不兼容，故导致通过PyPI源安装的基于PostgreSQL编译的Python驱动psycopg2-binary默认无法连接至数据库。
>因此，需要用户自行编译psycopg2或修改GUC参数进行适配。也可通过openGauss官方网站下载基于openGuass编译的psycopg2（官方网站仅提供部分Python版本的编译包，需要用户鉴别是否与当前Python运行时版本一致）。

