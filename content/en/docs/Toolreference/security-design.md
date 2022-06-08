# Security Design<a name="EN-US_TOPIC_0000001201487108"></a>

## Procedure for Manually Replacing Certificates<a name="section103992017202219"></a>

-   Create a self-signed certificate.

    For details about how to create a self-signed certificate, see "Database Security Management \> Client Access Authentication \> Managing SSL Certificates \> Generating Certificates in  _Developer Guide_

    To protect the private key password, use the  **cm encrypt**  tool. For details, see  [Introduction to the cm\_ctl Tool](introduction-to-the-cm_ctl-tool.md).

    ```
    cm_ctl encrypt [-M MODE] -D DATADIR
    ```

    1.  Generate the server key factors  **server.key.cipher**  and  **server.key.rand**.

        ```
        cm_ctl encrypt -M server -D DATADIR
        please enter the password: (The password must be the same as the protection password of the server private key.)
        ```

    2.  Generate the client key factors  **client.key.cipher**  and  **client.key.rand**.

        ```
        cm_ctl encrypt -M client -D DATADIR
        please enter the password: (The password must be the same as the protection password of the client private key.)
        ```



## Certificate Usage Guide<a name="section10534952182617"></a>

1.  To use the certificate, you need to set the cm\_server parameter to  **on**  \(The default value is  **off**\).

    ```
    cm_ctl set --param --server -k enable_ssl="on"
    ```


1.  The certificate file must exist in  _$GAUSSHOME_**/share/sslcert/cm**  on all nodes. After the certificate is replaced, restart the cluster for the certificate to take effect.

    Required certificate files include  **server.crt**,  **server.key**,  **client.crt**,  **client.key**,  **cacert.pem**,  **server.key.cipher**,  **server.key.rand**,  **client.key.cipher**, and  **client.key.rand**.

    The permission on the root certificate, key, certificate, and encrypted key file should be 400. If the permission does not meet the requirements, SSL cannot be used.

    -   chmod 400 cacert.pem
    -   chmod 400 server.crt
    -   chmod 400 server.key
    -   chmod 400 server.key.cipher
    -   chmod 400 server.key.rand
    -   chmod 400 client.crt
    -   chmod 400 client.key
    -   chmod 400 client.key.cipher
    -   chmod 400 client.key.rand

3. The certificate validity period is checked every day, which can be set through  **ssl\_cert\_expire\_check\_interval**. An alarm is generated when the certificate is about to expire in 90 days, which can be set through  **ssl\_cert\_expire\_alert\_threshold**. \(For details about the parameter, see  [ssl\_cert\_expire\_alert\_threshold](parameters-related-to-cm_server.md#section8148443183416).\)

