# Confirming Connection Information<a name="EN-US_TOPIC_0242370176"></a>

You can use a client tool to connect to a database through the primary node of the database. Before the connection, obtain the IP address of the primary node of the database and the port number of the server where the primary node of the database is deployed.

## Procedure<a name="en-us_topic_0237120290_en-us_topic_0062129725_section3641787792727"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  <a name="en-us_topic_0237120290_en-us_topic_0062129725_li736435692628"></a>Run the  **gs\_om-t status--detail**  command to query instances in the openGauss cluster.

    ```
    gs_om -t status --detail
    ```

    ```
    [ DBnode State ]
    
    node        node_ip         instance                                  state
    -----------------------------------------------------------------------------
    1  plat1 192.168.0.11  5001 /srv/BigData/gaussdb/data1/dbnode Normal
    2  plat2 192.168.0.12  5002 /srv/BigData/gaussdb/data1/dbnode Normal
    3  plat3 192.168.0.13  5003 /srv/BigData/gaussdb/data1/dbnode Normal
    ```

    For example, the server IP addresses where the primary node of the database is deployed are 192.168.10.11, 192.168.10.12, and 192.168.0.13. The data path of the primary node of the database is  **/srv/BigData/gaussdb/data1/dbnode**.

3.  Confirm the port number of the primary node of the database.

    View the port number in the  **postgresql.conf**  file in the data path of the database primary node obtained in  [2](#en-us_topic_0237120290_en-us_topic_0062129725_li736435692628). The command is as follows:

    ```
    cat /srv/BigData/gaussdb/data1/dbnode/postgresql.conf | grep port
    ```

    ```
    port = 8000    # (change requires restart)
    #comm_sctp_port = 1024   # Assigned by installation (change requires restart)
    #comm_control_port = 10001  # Assigned by installation (change requires restart)
          # supported by the operating system:
          # e.g. 'localhost=10.145.130.2 localport=12211 remotehost=10.145.130.3 remoteport=12212, localhost=10.145.133.2 localport=12213 remotehost=10.145.133.3 remoteport=12214'
          # e.g. 'localhost=10.145.130.2 localport=12311 remotehost=10.145.130.4 remoteport=12312, localhost=10.145.133.2 localport=12313 remotehost=10.145.133.4 remoteport=12314'
          #   %r = remote host and port
    alarm_report_interval = 10
    support_extended_features=true
    ```

    **8000**  is the port number of the database primary node.


