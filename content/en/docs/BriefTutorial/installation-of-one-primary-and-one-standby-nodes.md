# Installation of One Primary and One Standby Nodes<a name="EN-US_TOPIC_0000001180125584"></a>

## Procedure<a name="section4241123615573"></a>

1.  Create a user group  **dbgroup**.

    ```
    groupadd dbgroup
    ```

2.  Create a common user  **omm**  in the  **dbgroup**  user group and set the password to  **Gauss\_234**.

    ```
    useradd -g dbgroup omm
     passwd Gauss_234
    ```

3.  Log in to the host where the package is installed as user **omm** and decompress the openGauss package to the installation directory (for example, **/opt/software/openGauss**).


    ```
    tar -jxf openGauss-x.x.x-openEuler-64bit.tar.bz2 -C /opt/software/openGauss
    ```

4.  Assume that the decompressed package is stored in the  **/opt/software/openGauss**  directory. Go to the  **simpleInstall**  directory.

    ```
    cd /opt/software/openGauss/simpleInstall
    ```

5.  Run the  **install.sh**  script to install openGauss.

    ```
    sh install.sh  -w xxxx  --multinode
    ```

    In the preceding command,  **-w**  indicates the initial database password \(specified by  **gs\_initdb**\). This parameter is mandatory for security purposes.

6.  After the installation is complete, check whether the process is normal by using  **ps**  and  **gs\_ctl**.

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
