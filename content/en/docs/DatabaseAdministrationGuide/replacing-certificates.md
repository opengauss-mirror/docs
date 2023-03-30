# Replacing Certificates<a name="EN-US_TOPIC_0246507956"></a>

## Scenarios<a name="en-us_topic_0237121097_en-us_topic_0059778589_section12641165319257"></a>

Default security certificates and private keys required for SSL connection are configured in openGauss. You can change them as needed.

## Prerequisites<a name="en-us_topic_0237121097_en-us_topic_0059778589_s2d0511630ed840d180c92fa6bdecb54b"></a>

The formal certificates and keys for the server and client have been obtained from the CA.

## Precautions<a name="en-us_topic_0237121097_en-us_topic_0059778589_s014a1b1bc72240bb9bbbad5e064bf6d3"></a>

Currently, openGauss supports only the X509v3 certificate in PEM format.

## Procedure<a name="en-us_topic_0237121097_en-us_topic_0059778589_section2135369514921"></a>

1.  Prepare for a certificate and a key.

    Conventions for configuration file names on the server:

    -   Certificate name: server.crt
    -   Key name: server.key
    -   Key password and encrypted file: server.key.cipher and server.key.rand

    Conventions for configuration file names on the client:

    -   Certificate name: client.crt
    -   Key name: client.key
    -   Key password and encrypted file: client.key.cipher and client.key.rand
    -   Certificate name: cacert.pem
    -   CRL file name: sslcrl-file.crl

2.  Create a compressed package.

    Package name: db-cert-replacement.zip

    Package format: ZIP

    Package file list: server.crt, server.key, server.key.cipher, server.key.rand, client.crt, client.key, client.key.cipher, client.key.rand, cacert.pem If you need to configure the CRL, the list must contain sslcrl-file.crl.

3.  Invoke the certificate replacement interface to replace a certificate.
    1.  Upload the prepared package  **db-cert-replacement.zip**  to any path of an openGauss user.

        For example: /home/_xxxx_/db-cert-replacement.zip

    2.  Run the following command to perform the replacement:

        ```
        gs_om -t cert --cert-file= /home/xxxx/db-cert-replacement.zip
        ```

4.  Restart the openGauss.

    ```
    gs_om -t stop 
    gs_om -t start
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Certificates can be rolled back to the version before the replacement. You can run the  **gs\_om -t cert --rollback**  command to remotely invoke the interface or  **gs\_om -t cert --rollback -L**  to locally invoke the interface. The certificate will be rolled back to the latest version that was successfully replaced.  


