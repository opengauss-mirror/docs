# Installation on Primary/Standby Nodes<a name="EN-US_TOPIC_0000001091808934"></a>

## Prerequisites<a name="section9955194683210"></a>

-   A user group and a common user have been created.
-   All the server OSs and networks are functioning properly.
-   A common user must have the read, write, and execute permissions on the database package decompression path and installation path, and the installation path must be empty.
-   A common user has the execution permission on the downloaded openGauss package.
-   Before the installation, check whether all ports in the specified openGauss port matrix are occupied. If they are occupied, change the ports or stop the processes that uses the ports. For details about the port numbers, see the parameter description in step 3.

## Procedure<a name="section4241123615573"></a>

1.  Log in to the host where the package is installed as a common user and decompress the openGauss package to the installation directory.

    ```
    tar -jxf openGauss-x.x.x-openEuler-64bit.tar.bz2 -C /opt/software/openGauss
    ```

2.  Assume that the decompressed package is stored in the  **/opt/software/openGauss**  directory. Go to the  **simpleInstall**  directory.

    ```
    cd /opt/software/openGauss/simpleInstall
    ```

3.  Run the  **install.sh**  script to install openGauss.

    ```
    sh install.sh  -w xxxx  --multinode
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **-w**: initializes the database password \(specified by  **gs\_initdb**\). This parameter is mandatory for security purposes.
    >-   **-p**: specifies the port number of the primary openGauss node. The default value is  **5432**. The port number of the standby node is that of the primary node plus 200. The default port number is  **5632**.
    >-   **--multinode**: determines whether the installation is performed on a single node or on primary/standby nodes.
    >-   **-h|--help**: displays usage instructions.
    >-   After the installation, the primary database node name is  **nodename1**  and the standby database node name is  **nodename2**.
    >-   The installation path of the primary database node directory is  **/opt/software/openGauss/data/master**, and that of the standby node directory is  **/opt/software/openGauss/data/slave**, in which  **/opt/software/openGauss**  is the decompression path, and  **data/master\(slave\)**  is the newly created database node directory.

4.  After the installation is complete, check whether the process is normal by using  **ps**  and  **gs\_ctl**.

    ```
    ps ux | grep gaussdb
    gs_ctl query -D /opt/software/openGauss/data/master
    ```

    Run the  **ps**  command to display information similar to the following:

    ```
    omm  4879 11.8 1.1 2082452 373832 pts/0  Sl   14:26   8:29 /opt/software/openGauss/bin/gaussdb -D /opt/software/openGauss/data/master -M primary
    
    omm  5083  1.1  0.9 1819988 327200 pts/0  Sl   14:26   0:49 /opt/software/openGauss/bin/gaussdb -D /opt/software/openGauss/data/slave -M standby
    
    omm      20377  0.0  0.0 119880  1216 pts/0    S+   15:37   0:00 grep --color=auto gaussdb
    ```

    Run the  **gs\_ctl**  command to display information similar to the following:

    ```
    gs_ctl query ,datadir is /opt/software/openGauss/data/master
    HA state:
        local_role                     : Primary
        static_connections             : 1
        db_state                       : Normal
        detail_information             : Normal
    
    Senders info:
        sender_pid                     : 5165
        local_role                     : Primary
        peer_role                      : Standby
        peer_state                     : Normal
        state                          : Streaming
        sender_sent_location           : 0/4005148
        sender_write_location          : 0/4005148
        sender_flush_location          : 0/4005148
        sender_replay_location         : 0/4005148
        receiver_received_location     : 0/4005148
        receiver_write_location        : 0/4005148
        receiver_flush_location        : 0/4005148
        receiver_replay_location       : 0/4005148
        sync_percent                   : 100%
        sync_state                     : Sync
        sync_priority                  : 1
        sync_most_available            : Off
        channel                        : 10.244.44.52:27001-->10.244.44.52:35912
        
     Receiver info:
    No information 
    ```


