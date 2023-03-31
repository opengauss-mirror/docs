# Installation<a name="EN-US_TOPIC_0000001120430818"></a>

## Prerequisites<a name="section9955194683210"></a>

-   A user group and a common user have been created.
-   All the server OSs and networks are functioning properly.
-   You must have the read, write, and execute permissions on the decompression directory, installation directory, and data directory of the database installation package. The installation directory and data directory must be empty, and the installation directory, data directory, and log directory cannot overlap.
-   You have the execute permission on the downloaded openGauss Lite package.
-   Before the installation, check whether the specified port is occupied. If the port is occupied, change the port or stop the process that uses the port.
-   Environment variables: Ensure that  *GAUSSHOME*,  *GAUSSDATA*,  *GAUSSLOG*, and  *GAUSSENV*  do not exist during new installation. If subsequent operations such as configuration and startup are performed, ensure that these environment variables are properly configured.

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>If the  **history**  command is not disabled before the installation, manually clear sensitive information in the  **HISTORY**  records after the installation to prevent information leakage.
>If the  **history**  command has been disabled before the installation, ignore this note.

## Procedure<a name="section98663181331"></a>

1.  Log in to the host where the openGauss Lite is installed as a common user and decompress the Lite package to the installation directory.

    ```
    tar -zxf openGauss-Lite-3.0.0-openEuler-aarch64.tar.gz -C ~/openGauss
    ```

2.  Assume that the decompressed package is stored in the  **/opt/software/openGauss**  directory. Go to the directory generated after the decompression.

    ```
    cd ~/openGauss
    ```

3. Run the **install.sh** script to install the openGauss Lite installation package.

   ```
   For standalone installation: echo password | sh ./install.sh --mode single -D ~/openGauss/data -R ~/openGauss/install  --start
   For primary/standby installation:
       1. On the primary node: echo password | sh ./install.sh --mode primary -D ~/openGauss/data -R ~/openGauss/install  -C "replconninfo1='localhost=ip1 localport=port1 remotehost=ip2 remoteport=port2'" --start
       2. On the standby node: echo password | sh ./install.sh --mode standby -D ~/openGauss/data -R ~/openGauss/install  -C "replconninfo1='localhost=ip1 localport=port1 remotehost=ip2 remoteport=port2'" --start
   ```

   >![](public_sys-resources/icon-note.gif) **NOTE:**
   >
   >
   >
   >-   -**-D|--data-path**: data directory, which cannot overlap with the installation directory and must be empty.
   >-   -**-R|--app-path**: installation directory, which cannot overlap with the data directory.
   >-   -**-l|--log-path**: log directory.
   >-   -**-f|--guc-file**: GUC configuration file, which is used to set GUC parameters in batches. By default, it is **opengauss\_lite.conf** in the same directory as the installation script and can be specified.
   >-   -**-m|--mode**: node type. The value can be **primary**, **standby**, or **single** (standalone). The default value is **single**.
   >-   -**-n|--nodename**: instance name. The default value is **master** for the primary node, **slave** for the standby node, or **single** for a standalone system.
   >-   -**-P|--gsinit-parameter**: initialization parameter. For details, see "Tools Used in the System \> gs\_initdb" in *Tool Reference*. For security purposes, you are not advised to use this API to transmit passwords. You are advised to use the echo and pipe modes to transmit passwords. If the passwords set on the primary and standby nodes are different, the password set on the primary node is used. The password contains 8 to 32 characters.
   >-   -**C|--dn\_guc**: database configuration parameter. For details, see "Server Tools \> gs\_guc" in *Tool Reference*.
   >-   --**--env-sep-file**: separates the environment variable file. The environment variables required are written to this file. By default, the user's bashrc file is used. Do not transfer the directory.
   >-   --**--start**: indicates whether to start the cluster after the installation is complete. The cluster is not started by default.
   >-   --**--ulimit**: indicates whether to configure the maximum number of files. The value can be **1000000**. By default, the maximum number of files is not configured.
   >-   --**--cert-path**: specifies the SSL certificate path. If this parameter is transferred, the SSL parameter is set to **on** and the certificate in this path is copied to the data directory.
   >-   --**--ssl-client-ip**: client IP address. This parameter takes effect only when **--cert-path** is enabled. The client IP address is added to the whitelist.
   >-   -**-h|--help**: displays usage instructions.
   >
   >
   >
   >![](./public_sys-resources/icon-caution.gif) **Caution:**
   >
   >
   >
   >- Each step is reentrant. Therefore, if environment variables are separated, you need to specify the environment variable path for each step.
   >
   >- Ensure that the IP address types of the primary and standby nodes are the same. If the primary node uses an IPv6 address, the standby node must also use an IPv6 address.
   >
   >- If there are multiple standby nodes, you need to transfer the information about all nodes during the installation on each node. Pay attention to the information about the local node and the remote node.
   >
   >- If the error message "ulimit: open files: cannot modify limit: Operation not permitted" is displayed when you set **ulimit**, change the maximum number of files that can be configured by the user in **/etc/security/limits.conf** as the **root** user.
   >
   >- If the installation stops abnormally, check whether the installation directory and data directory meet the expected requirements. If necessary, manually clear the environment variables.
   >
   >-   During primary/standby environment installation, if **sslmode=verify-ca** is used in **replconninfo**, the standby node cannot connect to the primary node. To solve this problem, perform the following operations:
   >   *${GAUSSDATA}* indicates the DN data directory.
   >   Example: sh install.sh -R \~/app -m primary -D \~/data -l \~/log --start -C "replconninfo1='localhost=xxx.xx.xx.x localport=xxxx remotehost=xxx.xx.xx.x remoteport=xxxx sslmode=verify-ca'"
   >   
   >   Procedure
   >   
   >   -   Prepare certificates and private keys. For details about how to generate a certificate, see [Generating Certificates](../DatabaseAdministrationGuide/generating-certificates.md). 
   >       Conventions for configuration file names on the server:
   >       -   Certificate name: server.crt
   >       -   Private key name: server.key
   >       -   Private key password and encrypted file: server.key.cipher and server.key.rand
   >       Conventions for configuration file names on the client:
   >       -   Certificate name: client.crt
   >       -   Private key name: client.key
   >       -   Private key password and encrypted file: client.key.cipher and client.key.rand
   >       -   Root certificate name: cacert.pem
   >       -   Names of files on in the revoked certificate list: sslcrl-file.crl
   >   -   Copy the certificates to the data directory of each node.
   >       1.  Copy the configuration files **server.crt**, **server.key**, **server.key.cipher**, and **server.key.rand** on the server to the corresponding directories.
   >       2.  Copy the configuration files **client.crt**, **client.key**, **client.key.cipher**, **client.key.rand**, and **cacert.pem** (if a CRL needs to be configured, the CRL must contain **sslcrl-file.crl**) on the client to the corresponding directories.
   >   -   (Optional) Encrypt the user password (skip this step if private keys have been generated for the certificates).
   >       -   On the primary node: gs\_guc encrypt -M server -K *Database password* -D $\{GAUSSDATA\}/
   >       -   On the standby node: gs\_guc encrypt -M client -K Database password -D $\{GAUSSDATA\}/
   >       *${GAUSSDATA}* indicates the data directory.
   >   -   Configure SSL.
   >       ```
   >       gs_guc set -D ${GAUSSDATA} -c "ssl=on" 
   >       gs_guc set -D ${GAUSSDATA} -c "ssl_ciphers = 'ALL'" 
   >       gs_guc set -D ${GAUSSDATA} -c "ssl_cert_file = 'server.crt'" 
   >       gs_guc set -D ${GAUSSDATA} -c "ssl_key_file = 'server.key'" 
   >       gs_guc set -D ${GAUSSDATA} -c "ssl_ca_file = 'cacert.pem'" 
   >       ```
   >   -   Export the following environment variables from the standby node (the file permission cannot be greater than **600**):
   >       ```
   >       export PGSSLCERT="${GAUSSDATA}/client.crt"
   >       export PGSSLKEY="${GAUSSDATA}/client.key"
   >       export PGSSLROOTCERT="${GAUSSDATA}/cacert.pem"
   >       ```
   >   -   Restart the openGauss primary and standby nodes in sequence.
   >       ```
   >       gs_ctl restart -D ${GAUSSDATA} 
   >       ```



4.  After the installation is complete, check whether the process is normal by using  **ps**  and  **gs\_ctl**.

    ```
    ps ux | grep gaussdb
    gs_ctl query -D /opt/data
    ```

    Run the  **ps**  command to display information similar to the following:

    ```
    omm      24209 11.9  1.0 1852000 355816 pts/0  Sl   01:54   0:33 /opt/install/bin/gaussdb -D /opt/data
    omm      20377  0.0  0.0 119880  1216 pts/0    S+   15:37   0:00 grep --color=auto gaussdb
    ```

    Run the  **gs\_ctl**  command to display information similar to the following:

    ```
    gs_ctl query ,datadir is /opt/data
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
