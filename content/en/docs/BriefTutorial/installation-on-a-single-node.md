# Installation on a Single Node<a name="EN-US_TOPIC_0000001178307594"></a>

1.  Create a user group  **dbgroup**.

    ```
    groupadd dbgroup
    ```

2.  Create a common user  **omm**  in the  **dbgroup**  user group and set the password to  **Gauss\_234**.

    ```
    useradd -g dbgroup omm
    passwd omm
    ```

3.  Log in to the host where the openGauss package is installed as user  **omm**  and decompress the openGauss package to the installation directory.

    ```
    tar -jxf openGauss-x.x.x-openEuler-64bit.tar.bz2 -C /opt/software/openGauss
    ```

4.  Assume that the decompressed package is stored in the  **/opt/software/openGauss**  directory. Go to the  **simpleInstall**  directory.

    ```
    cd /opt/software/openGauss/simpleInstall
    ```

5.  Run the  **install.sh**  script to install openGauss.

    ```
    sh install.sh  -w xxxx 
    ```

    In the preceding command,  **-w**  indicates the initial database password \(specified by  **gs\_initdb**\). This parameter is mandatory for security purposes.

6.  After the installation is complete, check whether the process is normal by using  **ps**  and  **gs\_ctl**.

    ```
    ps ux | grep gaussdb
    gs_ctl query -D /opt/software/openGauss/data/single_node
    ```

    Run the  **ps**  command to display information similar to the following:

    ```
    omm      24209 11.9  1.0 1852000 355816 pts/0  Sl   01:54   0:33 /opt/software/openGauss/bin/gaussdb -D /opt/software/openGauss/single_node
    omm      20377  0.0  0.0 119880  1216 pts/0    S+   15:37   0:00 grep --color=auto gaussdb
    ```

    Run the  **gs\_ctl**  command to display information similar to the following:

    ```
    gs_ctl query ,datadir is /opt/software/openGauss/data/single_node
    HA state:
        local_role                     : Normal
        static_connections             : 0
        db_state                       : Normal
        detail_information             : Normal
    
    Senders info:
        No information
        
     Receiver info:
    No information 
    ```


