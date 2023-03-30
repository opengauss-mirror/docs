# Installation on a Single Node<a name="EN-US_TOPIC_0000001138868255"></a>

## Prerequisites<a name="section9955194683210"></a>

-   A user group and a common user have been created.
-   All the server OSs and networks are functioning properly.
-   A common user must have the read, write, and execute permissions on the database package decompression path and installation path, and the installation path must be empty.
-   A common user has the execution permission on the downloaded openGauss package.
-   Before the installation, check whether the specified openGauss port is occupied. If the port number is occupied, change the port or stop the process that uses the port.

## Procedure<a name="section98663181331"></a>

1.  Log in to the host where the openGauss package is installed as a common user and decompress the openGauss package to the installation directory.

    ```
    tar -jxf openGauss-x.x.x-openEuler-64bit.tar.bz2 -C /opt/software/openGauss
    ```

2.  Assume that the decompressed package is stored in the  **/opt/software/openGauss**  directory. Go to the  **simpleInstall**  directory.

    ```
    cd /opt/software/openGauss/simpleInstall
    ```

3. Run the  **install.sh**  script to install openGauss.

   ```
   sh install.sh  -w  "xxxx" &&source ~/.bashrc
   ```

   >![](public_sys-resources/icon-note.gif) **NOTE:** 
   >
   >- **-w**: initializes the database password \(specified by  **gs\_initdb**\). This parameter is mandatory for security purposes.
   >
   >- **-p**: specifies the openGauss port number. If the port number is not specified, the default value  **5432**  is used.
   >
   >- **-h|--help**: displays usage instructions.
   >
   >- After the installation, the database name is  **sgnode**.
   >
   >- The installation path of the database directory is  **/opt/software/openGauss/data/single\_node**, in which  **/opt/software/openGauss**  is the decompression path and  **data/single\_node**  is the newly created database node directory.
   >
   >- During execution, if the error "the maximum number of SEMMNI is not correct, the current SEMMNI is xxx. Please check it." appears, please execute the following command as a user with root privileges.
   >
   >  ```
   >  sysctl -w kernel.sem="250 85000 250 330" 
   >  ```

4.  After the installation is complete, check whether the process is normal by using  **ps**  and  **gs\_ctl**.

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
