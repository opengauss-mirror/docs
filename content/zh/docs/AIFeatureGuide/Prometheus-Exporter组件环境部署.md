# 环境部署<a name="ZH-CN_TOPIC_0000001196145058"></a>

1.  用户可以从Prometheus的官网上下载Prometheus-server和node-exporter，然后根据官方文档中的说明启动它们；也可以通过DBMind提供的快捷部署工具进行部署；如果用户自行部署，则可以跳到**[部署过程中为支持部署位置正确以及后续的运行和监测...](#li353612310452)。**
2.  通过命令行进行Prometheus和所有exporter的快捷部署，第一次安装需要确保有网络连接，输入参数为--online。

    ```
    gs_dbmind component deployment --online
    ```

    成功进行一次在线部署之后可以设参数为--offline进行离线部署。

    ```
    gs_dbmind component deployment --offline
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >一键部署工具如涉及多节点，建议在内部网络下使用。

    如采用一键式部署，Prometheus和node\_exporter的软件压缩包下载路径以及解压缩路径在用户的家目录$HOME下。

3.  <a name="li353612310452"></a>部署过程中为支持部署位置正确以及后续的运行和监测正常运行，程序会要求用户互动性地输入一些参数，主要包括以下内容，**应当注意到的是Prometheus和node-exporter的默认侦听地址是0.0.0.0，由于Prometheus和node-exporter属于开源软件，DBMind也无法获知用户希望绑定的IP地址，故无法直接进行修改，需要用户进行配置。**但是在安装过程中，DBMind会给予用户相应的提示，提示用户将侦听地址绑定到具体的某个IP地址上。下面是部署工具的配置文件示例，该工具会进行交互式配置，不建议用户手动修改。配置文件如下：

    ```
    [DOWNLOADING]
    host = https://github.com/prometheus
    node_exporter = node_exporter-1.3.1.linux-amd64
    prometheus = prometheus-2.35.0-rc0.linux-amd64
    node_exporter_sha256 =
    prometheus_sha256 =
    [PROMETHEUS]
    host =  # IP address of the deployed host for prometheus and reprocessing exporter.
    ssh_port = # ssh port
    host_username =  # Username of the deployed host
    path =  # Absolute path (No symbolic link) to deploy prometheus and reprocessing exporter
    listen_address =  # The host IP address for the reprocessing exporter to listen on.
    prometheus_port =  # The port of prometheus
    reprocessing_exporter_port =  # The port of reprocessing_exporter
    [EXPORTERS]
    targets = # The urls of the opengauss database instances, (host:port/database_name,) seperated by ','. eg., 192.168.0.1:200/postgres, 192.168.0.2:200/tpcc10.
    ssh_port = # ssh port
    host_username =  # Username of the deployed hosts
    path =  # Absolute path (No symbolic link) to deploy node exporters and opengauss exporters
    database_username =  # Username of the databases
    listen_address =  # The host IP address for the opengauss exporters to listen on
    opengauss_ports_range =  # The port range of opengauss_exporters, (start_port-end_port)
    node_exporter_port =  # The port of node_exporters (their ports are identical)
    cmd_exporter_port = # The port of cmd_exporters (their ports are identical)
    [EXPORTER-SSL]
    enable_ssl =  # Whether to use https protocol (True or False)
    ssl_certfile =  # Absolute path (No symbolic link) to the ssl certificate file
    ssl_keyfile =  # Absolute path (No symbolic link) to the ssl certificate private key file
    ssl_ca_file =  # Absolute path (No symbolic link) to the ssl CA file
    ```

    \[DOWNLOADING\]中包含下载开软软件包的地址，软件安装包的具体版本名称，软件安装包的完整性校验码，这一部分不在互动式输入的范围之内。

    prometheus和reprocessing\_exporter一起部署在主控设备上，设备数量为1，关于这一设备的参数被归类为\[PROMETHEUS\]。

    node\_exporter和opengauss\_exporter一起部署在数据库所在设备上，可能存在多个设备，关于这些设备的参数被归类为\[EXPORTERS\]。这些数据库节点的账户和密码，数据库的账户和密码必须一致，部署的路径和SSL证书所在的路径也需要一致。

    \[EXPORTERS\]的Targets选项是监控的数据库实例对象，格式为ip:port/dbname，多个数据库实例之间用逗号（,）分隔。目前该项中ip一项对地址进行了强校验，暂不支持输入域名的方式。

    对于SSL证书的管理方式，Prometheus不支持包含密码的私钥文件，所以一键部署功能在Prometheus上不支持包含密码的私钥文件。

    用户需要提前把\[PROMETHEUS\]和\[EXPORTERS\]需要的证书文件放置在各节点一致的路径下，如果是多节点部署，不同节点之间的证书文件路径必须一致。如果路径出现不正确的情况下，当各个组件运行时没有检测到证书文件时，会进行报警并退出运行。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   由于Prometheus和node-exporter不支持带有密码的SSL私钥文件，所以目前我们在Prometheus和node-exporter上并不提供对SSL证书文件的支持。当前所有的SSL证书都指的是exporter组件使用的SSL证书。Prometheus当前版本仅支持sans格式的证书。
    >-   对于多节点的情况，如果需要远程连接数据库，需要先将主控节点的地址信息更新到分节点的数据库的pg\_hba.conf文件中并重启数据库，否则会出现校验失败。
    >-   如果使用了SSH免密账户，则密码校验步骤输入任意密码都可以通过，并非校验步骤有问题。
    >-   如果使用deployment进行多节点自动部署时，应确保被部署的节点的指定用户上存在可用的Python运行环境以及对应的依赖包，否则在使用 --run 参数进行启动时，openGauss-exporter等需要Python运行环境的模块可能会启动失败。
    >-   exporter组件使用的端口应该在合法范围内（1024-65535）。

    用户可以通过--help获取帮助信息

    ```
    gs_dbmind component deployment --help
    ```

    ```
    usage: [-h] [--online] [--offline] [--run] [--check] [-c CONF] [-e] [-v]
    
    To deploy Prometheus, node-exporter, cmd-exporter, openGauss-exporter and
    reprocessing-exporter
    
    optional arguments:
      -h, --help            show this help message and exit
      --online              Download the Prometheus and node_exporters online.
                            Deploy Prometheus and exporters to the nodes locally.
      --offline             Deploy Prometheus and exporters to the nodes locally.
      --run                 Run Prometheus and all the exporters.
      --check               Check the status of Prometheus and all the exporters.
      -c CONF, --conf CONF  Indicates the location of the config file to skip
                            interactive configuration. Default path is {CONFIG_PATH}.
      --edit                set this arg to edit the config file.
      -v, --version         show program's version number and exit
    ```

    当使用参数-c --conf时, 将指定读取的配置文件位置，  CONF中的\{CONFIG\_PATH\}根据实际安装路径进行变化。

4.  通过自动部署过程之后会自动根据配置过程中用户输入的参数自动生成prometheus.yaml配置文件，在启动Prometheus时会自动加载该配置文件，示例内容如下：

    ```
    alerting:
      alertmanagers:
      - static_configs:
        - targets: null
    global:
      evaluation_interval: 15s
    rule_files: null
    scrape_configs:
    - job_name: prometheus
      scrape_interval: 5s
      static_configs:
      - targets:
        - 10.90.56.175:9090
    - job_name: reprocessing_exporter
      scheme: https
      static_configs:
      - targets:
        - 10.90.56.175:8181
      tls_config:
        ca_file:xxx.ca
        key_file:xxx.key
        cert_file:xxx.crt
    - job_name: cmd_exporter
      scheme: https
      static_configs:
      - targets:
        - 10.90.56.172:9187
        - 10.90.56.172:9188
      tls_config:
        ca_file:xxx.ca
        key_file:xxx.key
        cert_file:xxx.crt
    - job_name: node_exporter
      scheme: https
      static_configs:
      - targets:
        - 10.90.56.172:9100
    
    - job_name: opengauss_exporter
      scheme: https
      static_configs:
      - targets:
        - 10.90.56.172:9187
        - 10.90.56.172:9188
      tls_config:
        ca_file:xxx.ca
        key_file:xxx.key
        cert_file:xxx.crt
    ```

    部署完成之后，程序被相应分发到所有的目标位置，可以开始自动式运行，具体方法见下一节使用指导。


其中，提供的exporter组件默认采用Https通信协议，因此需要用户默认提供SSL证书和秘钥文件，并通过--ssl-keyfile、--ssl-certfile 以及 --ssl-ca-file 提供。若用户不希望使用Https协议，则可以通过--disable-https 选项禁用该模式。

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>由于openGauss默认模式下的通信加密协议与PostgreSQL不兼容，故导致通过PyPI源安装的基于PostgreSQL编译的Python驱动psycopg2-binary默认无法连接至openGauss数据库。
>因此，需要用户自行编译psycopg2或修改GUC参数进行适配。也可通过openGauss官方网站下载基于openGauss编译的psycopg2（_官方网站仅提供部分Python版本的编译包，需要用户鉴别是否与当前Python运行时版本一致_）。
>-   官方openGauss Python驱动下载地址为：
>    https://opengauss.org/zh/download/
>-   关于Python驱动的适配问题，可参考openGauss官方操作指南：
>    https://mp.weixin.qq.com/s/2TobUQKtw0N9sBpMZJr6zw

