# Starting the Collection Component<a name="ZH-CN_TOPIC_0000002258707508"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T02:17:54.772Z -->

For details about the collection components and how to use them, see [Prometheus Exporter Components](prometheus_exporter_overview.md). Users start the corresponding exporter by using the gs\_dbmind command. The following describes the complete procedure for setting up the Prometheus monitoring platform.

1. Deploy opengauss-exporter: opengauss-exporter supports single-node and multi-node deployment modes. In single-node deployment, the URL parameter contains only one node address. In the following example, the default listening port number 9187 is used, the listening address is 192.168.1.100, and the HTTPS protocol is used. The command can be:

    ```
    echo '{"ssl-keyfile-password":"xxxxxx", "tenant-password": "xxxxxx"}' | gs_dbmind component opengauss_exporter --url postgresql://user:password@ip:port/dbname --web.listen-address 192.168.1.100 --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt --tenant tenantname
    ```

    Example of opengauss-exporter multi-node deployment mode, where the URL parameter contains multiple node addresses. In the following example, the default listening port number 9187 is used, the listening address is 192.168.1.100, the URL parameter contains three node addresses, and the HTTPS protocol is used. The command can be:

    ```
    echo '{"ssl-keyfile-password":"xxxxxx", "tenant-password": "xxxxxx"}' | gs_dbmind component opengauss_exporter --url postgresql://user:password@ip1:port1,ip2:port2,ip3:port3/dbname --web.listen-address 192.168.1.100 --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt --tenant tenantname
    ```

2. Deploy reprocessing-exporter: Start reprocessing-exporter by using the default listening port number 8181, the listening address 192.168.1.101, the Prometheus-server IP address and port number 192.168.1.100:9090, and the HTTPS protocol. The command can be:

    ```
    echo '{"ssl-keyfile-password":"xxxxxx"}' | gs_dbmind component reprocessing_exporter 192.168.1.100 9090 --web.listen-address 192.168.1.101 --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt
    ```

3. Deploy node-exporter: Generally, the Prometheus monitoring platform requires node-exporter to monitor the Linux operating system. Some AI features mentioned later also depend on node-exporter to collect Linux system metrics, so users need to deploy it as well. For details about how to use it, see https://prometheus.io/docs/guides/node-exporter/\#installing-and-running-the-node-exporter. Users can directly run the node-exporter process, whose default port number is 9100. The startup command is:>

    ```
    node_exporter 
    ```

4. Deploy the cmd\_exporter main process: Start cmd\_exporter by using the default port number 9180 and the listening address 192.168.1.101. Record the listening addresses of the preceding components in prometheus.yml in the required format, and then run the following command:

    ```
    echo '{"ssl-keyfile-password":"xxxxxx"}' | gs_dbmind component cmd_exporter --web.listen-address 192.168.1.101 --pg-log-dir /path/to/pglog --ssl-keyfile server.key --ssl-certfile server.crt --ssl-ca-file server.crt
    ```

5. Deploy the Prometheus main process. Record the listening addresses of the preceding components in prometheus.yml in the required format, and then run the following command:

    ```
    prometheus --config.file=prometheus.yml
    ```
