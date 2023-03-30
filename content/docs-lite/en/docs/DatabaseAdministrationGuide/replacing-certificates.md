# Replacing Certificates<a name="EN-US_TOPIC_0289900549"></a>

## Scenarios<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_section12641165319257"></a>

Default security certificates and private keys required for SSL connection are configured in openGauss. You can change them as needed.

## Prerequisites<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_s2d0511630ed840d180c92fa6bdecb54b"></a>

The formal certificates and keys for the server and client have been obtained from the CA.

## Precautions<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_s014a1b1bc72240bb9bbbad5e064bf6d3"></a>

Currently, openGauss supports only the X509v3 certificate in PEM format.

## Procedure<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_section2135369514921"></a>

1.  Prepare certificates and private keys.

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

2.  Call the certificate replacement interface to replace a certificate.
    1.  Copy the configuration files  **server.crt**,  **server.key**,  **server.key.cipher**, and  **server.key.rand**  on the server to the corresponding directories to replace the original files.
    2.  Copy the configuration files  **client.crt**,  **client.key**,  **client.key.cipher**,  **client.key.rand**, and  **cacert.pem**  \(if a CRL needs to be configured, the CRL must contain  **sslcrl-file.crl**\) on the client to the corresponding directories to replace the original files.

3.  Restart openGauss.

    ```
    gs_ctl restart -D /gaussdb/data/datanode 
    ```


