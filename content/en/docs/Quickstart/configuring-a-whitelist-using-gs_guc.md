# Configuring a Whitelist Using gs\_guc<a name="EN-US_TOPIC_0241704256"></a>

## Procedure<a name="en-us_topic_0241234232_section428894161117"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Configure the client authentication mode and enable the client to connect to the host as user  **jack**. User  **omm**  cannot be used for remote connection.

    Assume you are to allow the client whose IP address is  **10.10.0.30**  to access the current host.

    ```
    gs_guc set -N all -I all -h "host all jack 10.10.0.30/32 sha256"
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   Before using user  **jack**, connect to the database locally and run the following command in the database to create user  **jack**:  
    >    ```  
    >    postgres=# CREATE USER jack PASSWORD 'Test@123';  
    >    ```  
    >-   **-N all**  indicates all hosts in openGauss.  
    >-   **-I all**  indicates all instances on the host.  
    >-   **-h**  specifies statements that need to be added in the  **pg\_hba.conf**  file.  
    >-   **all**  indicates that a client can connect to any database.  
    >-   **jack**  indicates the user that accesses the database.  
    >-   _10.10.0.30_/_32_  indicates that only the client whose IP address is  **10.10.0.30**  can connect to the host. The specified IP address must be different from those used in openGauss.  **32**  indicates that there are 32 bits whose value is 1 in the subnet mask. That is, the subnet mask is 255.255.255.255.  
    >-   **sha256**  indicates that the password of user  **jack**  is encrypted using the SHA-256 algorithm.  

    This command adds a rule to the  **pg\_hba.conf**  file corresponds to the primary node of the database. The rule is used to authenticate clients that access primary node.

    Each record in the  **pg\_hba.conf**  file can be in one of the following four formats. For parameter description of the four formats, see  [Configuration File Reference](en-us_topic_0246507950.md).

    ```
    local     DATABASE USER METHOD [OPTIONS]
    host      DATABASE USER ADDRESS METHOD [OPTIONS]
    hostssl   DATABASE USER ADDRESS METHOD [OPTIONS]
    hostnossl DATABASE USER ADDRESS METHOD [OPTIONS]
    ```

    During authentication, the system checks records in the  **pg\_hba.conf**  file in sequence for connection requests, so the record sequence is vital.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Configure records in the  **pg\_hba.conf**  file from top to bottom based on communication and format requirements in the descending order of priorities. The IP addresses of the openGauss cluster and added hosts are of the highest priority and should be configured prior to those manually configured by users. If the IP addresses manually configured by users and those of added hosts are in the same network segment, delete the manually configured IP addresses before the scale-out and configure them after the scale-out.  

    The suggestions on configuring authentication rules are as follows:

    -   Records placed at the front have strict connection parameters but weak authentication methods.
    -   Records placed at the end have weak connection parameters but strict authentication methods.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   If a user wants to connect to a specified database, the user must be authenticated by the rules in the  **pg\_hba.conf**  file and have the  **CONNECT**  permission for the database. If you want to restrict a user from connecting to certain databases, you can grant or revoke the user's  **CONNECT**  permission, which is easier than setting rules in the  **pg\_hba.conf**  file.  
    >-   The  **trust**  authentication mode is insecure for a connection between the openGauss and a client outside the cluster. In this case, set the authentication mode to  **sha256**.  


