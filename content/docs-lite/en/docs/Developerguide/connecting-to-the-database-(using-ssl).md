# Connecting to the Database \(Using SSL\)<a name="EN-US_TOPIC_0289900868"></a>

When establishing connections to the openGauss server using JDBC, you can enable SSL connections to encrypt client and server communications for security of sensitive data transmission on the Internet. This section describes how applications establish an SSL connection to openGauss using JDBC. To start the SSL mode, you must have the server certificate, client certificate, and private key files. For details how to obtain these files, see related documents and commands of OpenSSL.

## Configuring the Server<a name="en-us_topic_0283137170_en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_en-us_topic_0059777633_s513e457bfaa24ce4b1a20a1f2322f9ae"></a>

The SSL mode requires a root certificate, a server certificate, and a private key.

Perform the following operations \(assuming that the license files are saved in the data directory  **/gaussdb/data/datanode**  and the default file names are used\):

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Generate and configure a certificate.

    Generate an SSL certificate. For details, see  [Generating Certificates](generating-certificates.md). Copy the generated  **server.crt**,  **server.key**, and  **cacert.pem**  files to the data directory on the server.

    In the Unix OS,  **server.crt**  and  **server.key**  must deny the access from the external or any group. Run the following command to set this permission:

    ```
    chmod 0600 server.key
    ```

3.  Enable the SSL authentication mode.

    ```
    gs_guc set -D /gaussdb/data/datanode -c "ssl=on"
    ```

4.  Set client access authentication parameters. The IP address is the IP address of the host to be connected.

    ```
    gs_guc reload -D /gaussdb/data/datanode -h "hostssl all             all             127.0.0.1/32           cert"
    gs_guc reload -D /gaussdb/data/datanode -h "hostssl all             all             IP/32           cert"
    ```

    Clients on the  **127.0.0.1/32**  network segment can connect to openGauss servers in SSL mode.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   If  **METHOD**  is set to  **cert**  in the  **pg\_hba.conf**  file of the server, the client must use the username \(common name\) configured in the certificate file \(**client.crt**\) for the database connection. If  **METHOD**  is set to  **md5**,  **sm3**, or  **sha256**, there is no such a restriction.
    >-   The MD5 encryption algorithm has lower security and poses security risks. Therefore, you are advised to use a more secure encryption algorithm.

5.  Configure the digital certificate parameters related to SSL authentication.

    The information following each command indicates operation success.

    ```
    gs_guc set -D /gaussdb/data/datanode -c "ssl_cert_file='server.crt'"
    gs_guc set: ssl_cert_file='server.crt'
    ```

    ```
    gs_guc set -D /gaussdb/data/datanode -c "ssl_key_file='server.key'"
    gs_guc set: ssl_key_file='server.key'
    ```

    ```
    gs_guc set -D /gaussdb/data/datanode -c "ssl_ca_file='cacert.pem'"
    gs_guc set: ssl_ca_file='cacert.pem'
    ```

6.  Restart the database.

    ```
    gs_ctl restart -D /gaussdb/data/datanode
    ```


## Configuring the Client<a name="en-us_topic_0283137170_en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_en-us_topic_0059777633_s29b328f4eb634c5b903c430d663d038b"></a>

To configure the client, perform the following steps:

Upload the certificate files  **client.key.pk8**,  **client.crt**, and  **cacert.pem**  generated in  [Configuring the Server](#en-us_topic_0283137170_en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_en-us_topic_0059777633_s513e457bfaa24ce4b1a20a1f2322f9ae)  to the client.

## Examples<a name="en-us_topic_0283137170_en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_sac62520495454e38a58fb1c067bd8adc"></a>

Note: Select either example 1 or example 2.

```
public class SSL{
    public static void main(String[] args) {
        Properties urlProps = new Properties();
        String urls = "jdbc:postgresql://10.29.37.136:8000/postgres";

        /**
         * ================== Example 1: Use the NonValidatingFactory channel.
         */
        urlProps.setProperty("sslfactory","org.postgresql.ssl.NonValidatingFactory");
        urlProps.setProperty("user", "world");
        urlProps.setProperty("password", "test@123");
        urlProps.setProperty("ssl", "true");
        /**
         * ==================  Examples 2: Use a certificate.
         */
        urlProps.setProperty("sslcert", "client.crt");
        urlProps.setProperty("sslkey", "client.key.pk8");
        urlProps.setProperty("sslrootcert", "cacert.pem");
        urlProps.setProperty("user", "world");
        urlProps.setProperty("ssl", "true");
        /* sslmode can be set to require, verify-ca, or verify-full. Select one from the following three examples.*/
       /* ================== Example 2.1: Set sslmode to require to use the certificate for authentication. */
        urlProps.setProperty("sslmode", "require");
       /* ================== Example 2.2: Set sslmode to verify-ca to use the certificate for authentication. */
        urlProps.setProperty("sslmode", "verify-ca");
       /* ================== Example 2.3: Set sslmode to verify-full to use the certificate (in the Linux OS) for authentication. */
        urls = "jdbc:postgresql://world:8000/postgres";
        urlProps.setProperty("sslmode", "verify-full");
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            Connection conn;
            conn = DriverManager.getConnection(urls,urlProps);
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
/**
 * Note: Convert the client key to the DER format.
 * openssl pkcs8 -topk8 -outform DER -in client.key -out client.key.pk8 -nocrypt
 * openssl pkcs8 -topk8 -inform PEM -in client.key -outform DER -out client.key.der -v1 PBE-MD5-DES
 * openssl pkcs8 -topk8 -inform PEM -in client.key -outform DER -out client.key.der -v1 PBE-SHA1-3DES
 * The preceding algorithms are not recommended due to their low security.
 * If the customer needs to use a higher-level private key encryption algorithm, the following private key encryption algorithms can be used after the BouncyCastle or a third-party private key is used to decrypt the password package:
 * openssl pkcs8 -in client.key -topk8  -outform DER -out client.key.der -v2 AES128
 * openssl pkcs8 -in client.key -topk8  -outform DER -out client.key.der -v2 aes-256-cbc -iter 1000000
 * openssl pkcs8 -in client.key -topk8 -out client.key.der  -outform Der -v2 aes-256-cbc -v2prf hmacWithSHA512
 * Enable BouncyCastle: Introduce the bcpkix-jdk15on.jar package for projects that use JDBC. The recommended version is 1.65 or later.
 */
```

