# Configuring Remote Connection<a name="EN-US_TOPIC_0289899869"></a>

Before the remote connection, you need to enable the client to access the database and configure the remote connection on the server where the database primary node is deployed.

## Procedure<a name="en-us_topic_0283137450_en-us_topic_0237120291_en-us_topic_0059778856_sa769b5cf486f45fe92aa0397f870561e"></a>

Perform the following steps on the host where openGauss resides.

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Configure the client authentication mode. For details, see  [Configuring Client Access Authentication](configuring-client-access-authentication.md).
3.  Configure  **[listen\_addresses](connection-settings.md#en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_sed0adde99a3f47669f5d4ab557b36b35)**.  **listen\_addresses**  indicates the IP address or host name of the database primary node used for remote client connection.
    1.  Run the following command to check the  **listen\_addresses**  value of the primary database node:

        ```
        gs_guc check -D /gaussdb/data/data_cn -c "listen_addresses"
        ```

        Information similar to the following is displayed:

        ```
        expected guc information: plat1: listen_addresses=NULL: [/gaussdb/data/data_cn/postgresql.conf]
        gs_guc check: plat1: listen_addresses='localhost, 192.168.0.100': [/gaussdb/data/data_cn/postgresql.conf]
        
        Total GUC values: 1. Failed GUC values: 0.
        The value of parameter listen_addresses is same on all instances.
            listen_addresses='localhost, 192.168.0.100'
        ```

    2.  Run the following command to append the IP addresses to be added to  **listen\_addresses**. Use commas \(,\) to separate multiple IP addresses. For example, add the IP address 10.11.12.13.

        ```
        gs_guc set  -D /gaussdb/data/data_cn -c "listen_addresses='localhost,192.168.0.100,10.11.12.13'"
        ```

4.  Configure  **pg\_hba.conf**  and add the IP address of the primary database node and the IP address of the client. For details about the parameters in  **pg\_hba.conf**, see  [Configuring Client Access Authentication](configuring-client-access-authentication.md).
    1.  Run the following command to add the IP address of the primary database node to  **pg\_hba.conf**. In the command,  **initial\_user**  indicates the initial username of the database, and  **10.11.12.13**  is the IP address of the host where the database resides.

        ```
        gs_guc reload [-Z datanode] -D /gaussdb/data/data_cn -h "host all initial_user 10.11.12.13/32 trust"
        ```

    2.  Run the following command to add the IP address of the client to  **pg\_hba.conf**. If the IP address is 10.11.12.34, the authentication mode is SHA-256.

        ```
        gs_guc reload [-Z datanode] -D /gaussdb/data/data_cn -h "host all all 10.11.12.34/32 sha256"
        ```

5.  Run the following command to restart openGauss:

    ```
    gs_ctl restart -D /gaussdb/data/data_cn
    ```


