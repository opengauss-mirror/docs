# Primary/Standby Certificate Authentication Configuration<a name="EN-US_TOPIC_0000001262443815"></a>

## Scenarios<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_section12641165319257"></a>

In the Lite scenario, the SSL certificate is required for direct authentication of the primary and standby nodes.

## Prerequisites<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_s2d0511630ed840d180c92fa6bdecb54b"></a>

The formal certificates and keys for the server and client have been obtained from the CA.

## Precautions<a name="en-us_topic_0283137045_en-us_topic_0237121097_en-us_topic_0059778589_s014a1b1bc72240bb9bbbad5e064bf6d3"></a>

Currently, openGauss supports only the X509v3 certificate in PEM format.

## Procedure<a name="section15831243154011"></a>

1.  Prepare certificates and private keys.

    Conventions for configuration file names on the server:

    -   Certificate name: server.crt
    -   Private key name: server.key
    -   Private key password and encrypted file: server.key.cipher and server.key.rand

    Conventions for configuration file names on the client:

    -   Certificate name: client.crt
    -   Private key name: client.key
    -   Private keypassword and encrypted file: client.key.cipher and client.key.rand
    -   Root certificate name: cacert.pem
    -   CRL file name: sslcrl-file.crl

2.  Copy the certificates to the data directory of each node.
    1.  Copy the configuration files  **server.crt**,  **server.key**,  **server.key.cipher**, and  **server.key.rand**  on the server to the corresponding directories.
    2.  Copy the configuration files  **client.crt**,  **client.key**,  **client.key.cipher**,  **client.key.rand**, and  **cacert.pem**  \(if a CRL needs to be configured, the CRL must contain  **sslcrl-file.crl**\) on the client to the corresponding directories.

3.  \(Optional\) Encrypt the user password \(skip this step if private keys have been generated for the certificates\).

    -   Primary node:  **gs\_guc encrypt -M server -K** _key password_ **-D $\{GAUSSDATA\}/**
    -   Standby node:  **gs\_guc encrypt -M client -K** _key password_ **-D $\{GAUSSDATA\}/**

    **$\{GAUSSDATA\}**  indicates the data directory.

4.  Configure SSL.

    ```
    gs_guc set -D ${GAUSSDATA} -c "ssl=on" 
    gs_guc set -D ${GAUSSDATA} -c "ssl_ciphers = 'ALL'" 
    gs_guc set -D ${GAUSSDATA} -c "ssl_cert_file = 'server.crt'" 
    gs_guc set -D ${GAUSSDATA} -c "ssl_key_file = 'server.key'" 
    gs_guc set -D ${GAUSSDATA} -c "ssl_ca_file = 'cacert.pem'" 
    ```

5.  Export the following environment variables from the standby node \(the file permission cannot be greater than 600\):

    export PGSSLCERT="$\{GAUSSDATA\}/client.crt"

    export PGSSLKEY="$\{GAUSSDATA\}/client.key"

    export PGSSLROOTCERT="$\{GAUSSDATA\}/cacert.pem"

6.  Restart the primary and standby openGauss in sequence.

    ```
    gs_ctl restart -D ${GAUSSDATA} 
    ```


