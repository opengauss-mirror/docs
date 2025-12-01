# Environment Deployment <a name="EN-US_TOPIC_0000001196145058"></a>

1.  You can download Prometheus-server and node-exporter from the Prometheus official website and start them according to the official documents. You can also use the quick deployment tool provided by DBMind to deploy them. If you deploy the software by yourself, go to [3](#li353612310452).
2.  Use the CLI to quickly deploy Prometheus and all exporters. For the first installation, ensure that the network connection is available. The input parameter is **--online**.

    ```
    gs_dbmind component deployment --online
    ```

    After an online deployment is successfully performed, you can set this parameter to **--offline** to perform offline deployment.

    ```
    gs_dbmind component deployment --offline
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >If the one-click deployment tool involves multiple nodes, you are advised to use it on the internal network.

    If one-click deployment is used, the download path and decompression path of the Prometheus and node\_exporter software packages are in the $HOME directory.

3.  <a name="li353612310452"></a>During the deployment, to ensure that the deployment location is correct and the subsequent running and monitoring are normal, the program requires users to interactively enter some parameters. The listening IP address of Prometheus and node-exporter is 0.0.0.0 by default. Prometheus and node-exporter are open-source software, and DBMind cannot obtain the IP address to be bound. Therefore, you need to configure the IP address. During the installation, however, the DBMind prompts the user to bind the listening address to a specific IP address. The following is an example of the configuration file of the deployment tool. The tool performs interactive configuration. You are not advised to manually modify the configuration file. The configuration file is as follows:

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

    \[DOWNLOADING\] contains the address for downloading the software package, version name of the software installation package, and integrity verification code of the software installation package. This part is not included in the interactive input range.

    The Prometheus and reprocessing\_exporter are deployed together on the main control device. The number of devices is 1. The parameters related to this device are classified as \[PROMETHEUS\].

    node\_exporter and opengauss\_exporter are deployed together on the device where the database is located. Multiple devices may exist. The parameters related to these devices are classified as \[EXPORTERS\]. The usernames and passwords of these database nodes must be the same as those of the database nodes. The deployment paths and SSL certificate paths must also be the same.

    The **Targets** option of \[EXPORTERS\] indicates the monitored database instance objects. The format is *IP address:Port number/DB name*. Multiple database instances are separated by commas (,). Currently, the IP address is strongly verified, and the domain name cannot be entered.

    For SSL certificate management, Prometheus does not support private key files that contain passwords. Therefore, the one-click deployment function does not support private key files that contain passwords on Prometheus.

    You need to place the certificate files required by \[PROMETHEUS\] and \[EXPORTERS\] in the same path on each node in advance. If multiple nodes are deployed, the certificate file paths on different nodes must be the same. If the path is incorrect and no certificate file is detected during the running of each component, an alarm is generated and the component exits.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-   Prometheus and node-exporter do not support SSL private key files with passwords. Therefore, Prometheus and node-exporter do not support SSL certificate files. Currently, all SSL certificates refer to those used by the exporter component. The current version of Prometheus supports only certificates in sans format.
    >-   In the case of multiple nodes, to remotely connect to the database, you need to update the address information of the main control node to the **pg\_hba.conf** file of the database on the branch node and restart the database. Otherwise, the verification fails.
    >-   If an SSH password-free account is used, any password can be entered during password verification.
    >-   If you use **deployment** to automatically deploy multiple nodes, ensure that the Python operating environment and corresponding dependency packages are available for the specified user of the node to be deployed. Otherwise, when you use the **--run** parameter to start the node, modules that require the Python operating environment, such as openGauss-exporter, may fail to be started.
    >-   The port used by the exporter component must be within the valid range (1024–65535).

    You can run the **--help** command to obtain help information.

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

    When the **-c --conf** parameter is used, the location of the configuration file to be read is specified. \{CONFIG\_PATH\} in CONF varies according to the actual installation path.

4.  After automatic deployment, the **prometheus.yaml** configuration file is automatically generated based on the parameters entered during the configuration. The configuration file is automatically loaded when Prometheus is started. The following is an example:

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

    After the deployment is complete, the program is distributed to all target locations and can run automatically. For details, see the next section.


The exporter component uses HTTPS for communication by default. Therefore, you need to provide the SSL certificate and key file by default through **--ssl-keyfile**, **--ssl-certfile**, and **--ssl-ca-file**. To disable HTTPS, you can run the **--disable-https** command.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>The default communication protocol used by openGauss is incompatible with PostgreSQL. As a result, the PostgreSQL-based Python driver  **psycopg2-binary**  installed using the PyPI source cannot connect to the openGauss database.
>Therefore, you need to compile  **psycopg2**  or modify GUC parameters for adaptation. You can also download  **psycopg2**  compiled based on openGauss from the openGauss official website. \(The official website provides only the compilation packages of some Python versions. You need to check whether the compilation packages are consistent with the current Python version.\)
>-   Download the openGauss Python driver from the official website:
>    https://opengauss.org/en/download/
>-   For details about the adaptation of the Python driver, see the openGauss operation guide at:
>    https://mp.weixin.qq.com/s/2TobUQKtw0N9sBpMZJr6zw
