# Confirming Connection Information<a name="EN-US_TOPIC_0289899830"></a>

You can use a client tool to connect to a database through a the primary node of the database in the database. Before the connection, obtain the IP address and the primary node of the database port number of the server where the the primary node of the database is deployed.

## Procedure<a name="en-us_topic_0283137330_en-us_topic_0237120290_en-us_topic_0062129725_section3641787792727"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  <a name="en-us_topic_0283137330_en-us_topic_0237120290_en-us_topic_0062129725_li736435692628"></a>Run the  **gs\_om-t status--detail**  command to query instances in openGauss.

    ```
    gs_om -t status --detail
    ```

    ```
    [ DBnode State ]
    
    node        node_ip         instance                                  state
     -----------------------------------------------------------------------------
     1  plat1 192.168.0.11  5001 /srv/gaussdb/data1/dbnode  P Primary Normal
    ```

    In the preceding information, the IP address of the server where the primary database node instance is deployed is  **192.168.0.11**. The data path of the primary node of the database is  **/srv/gaussdb/data1/dbnode**.  **P**  indicates that the role specified during the installation is  **Primary**. The role does not change after the database is installed and is read from the system static file.  **Primary**  means the primary instance.  **Normal**  indicates that openGauss is available, the data has redundancy backup, all processes are running, and the primary/standby relationship is normal.

3.  Confirm the port number of the primary node of the database.

    View the port number in the  **postgresql.conf**  file of the primary node of the database path, which is queried in  [2](#en-us_topic_0283137330_en-us_topic_0237120290_en-us_topic_0062129725_li736435692628). The command is as follows:

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

    **8000**  is the port number of the the primary node of the database.
