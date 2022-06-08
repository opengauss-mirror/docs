# Confirming Connection Information<a name="EN-US_TOPIC_0289899830"></a>

You can use a client tool to connect to a database through a the primary node of the database in the database. Before the connection, obtain the IP address and the primary node of the database port number of the server where the primary node of the database is deployed.

## Procedure<a name="en-us_topic_0283137330_en-us_topic_0237120290_en-us_topic_0062129725_section3641787792727"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  <a name="en-us_topic_0283137330_en-us_topic_0237120290_en-us_topic_0062129725_li736435692628"></a>Run the  **gs\_ctl query -D /home/dbuser/env\_test/data**  command to query openGauss instances.

    ```
    gs_ctl query -D /home/dbuser/env_test/data
    ```

    ```
    [2022-01-08 17:21:26.569][15657][][gs_ctl]: gs_ctl query ,datadir is /home/dbuser/env_test/data 
     HA state:           
    	local_role                     : Primary
    	static_connections             : 1
    	db_state                       : Normal
    	detail_information             : Normal
    
     Senders info:       
    	sender_pid                     : 15464
    	local_role                     : Primary
    	peer_role                      : Standby
    	peer_state                     : Normal
    	state                          : Streaming
    	sender_sent_location           : 0/4000148
    	sender_write_location          : 0/4000148
    	sender_flush_location          : 0/4000148
    	sender_replay_location         : 0/4000148
    	receiver_received_location     : 0/4000148
    	receiver_write_location        : 0/4000148
    	receiver_flush_location        : 0/4000148
    	receiver_replay_location       : 0/4000148
    	sync_percent                   : 100%
    	sync_state                     : Sync
    	sync_priority                  : 1
    	sync_most_available            : Off
    	channel                        : 10.244.42.115:65301-->10.244.181.97:35446
    
     Receiver info:      
    No information
    ```

    In the preceding information, the IP address of the server where the primary database node instance is deployed is  **10.244.42.115**. The data path of the primary node of the database is  **/home/dbuser/env\_test/data**.  **Primary**  indicates the primary database node.  **Normal**  indicates that openGauss is available, the data has redundancy backup, all processes are running, and the primary/standby relationship is normal.

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

    **8000**  is the port number of the primary node of the database.


