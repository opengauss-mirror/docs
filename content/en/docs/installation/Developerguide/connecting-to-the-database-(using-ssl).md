# Connecting to the Database \(Using SSL\)<a name="EN-US_TOPIC_0244720263"></a>

When establishing connections to the openGauss server using JDBC, you can enable SSL connections to encrypt client and server communications for security of sensitive data transmission on the Internet. This section describes how applications establish an SSL connection to openGauss using JDBC. To start the SSL mode, you must have the server certificate, client certificate, and private key files. For details on how to obtain these files, see related documents and commands of OpenSSL.

## Configuring the Server<a name="en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_en-us_topic_0059777633_s513e457bfaa24ce4b1a20a1f2322f9ae"></a>

The SSL mode requires a root certificate, a server certificate, and a private key.

Perform the following operations \(assuming that the license files are saved in the data directory  **/gaussdb/data/datanode**  and the default file names are used\):

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Generate and import a certificate.

    Generate an SSL certificate. For details, see  [Generating Certificates](generating-certificates.md). Copy the generated  **server.crt**,  **server.key**, and  **cacert.pem**  files to the data directory on the server.

    Run the following command to query the data directory of the database node. The instance column indicates the data directory.

    ```
    gs_om -t status --detail
    ```

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
    >If  **METHOD**  is set to  **cert**  in the  **pg\_hba.conf**  file of the server, the client must use the username \(common name\) configured in the license file \(**client.crt**\) for the database connection. If  **METHOD**  is set to  **md5**  or  **sha256**, there is no such a restriction.  

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
    gs_om -t stop && gs_om -t start
    ```

7.  Generate and upload a certificate file.

## Configuring the Client<a name="en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_en-us_topic_0059777633_s29b328f4eb634c5b903c430d663d038b"></a>

To configure the client, perform the following steps:

Upload the certificate files  **client.key.pk8**,  **client.crt**, and  **cacert.pem**  generated in  [Configuring the Server](#en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_en-us_topic_0059777633_s513e457bfaa24ce4b1a20a1f2322f9ae)  to the client.

## Example<a name="en-us_topic_0237120382_en-us_topic_0213179127_en-us_topic_0189251215_sac62520495454e38a58fb1c067bd8adc"></a>

```
import java.sql.Connection;
import java.util.Properties;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

public class SSL{
    public static void main(String[] args) {
        Properties urlProps = new Properties();
        String urls = "jdbc:postgresql://10.29.37.136:8000/postgres";

        /**
* ================== Example 1: The NonValidatingFactory channel is used, and MTETHOD in the pg_hba.conf file is not cert.
         */
/* 
        urlProps.setProperty("sslfactory","org.postgresql.ssl.NonValidatingFactory");
        urlProps.setProperty("user", "world");
//test@123 is the password specified when user CREATE USER world WITH PASSWORD 'test123@' is created.
        urlProps.setProperty("password", "test@123");
        urlProps.setProperty("ssl", "true");
*/
        /**
* ================== Example 2 - 5: Use a certificate. In the pg_hba.conf file, MTETHOD is cert.
         */
        urlProps.setProperty("sslcert", "client.crt");
// Client key in DER format
        urlProps.setProperty("sslkey", "client.key.pk8");
        urlProps.setProperty("sslrootcert", "cacert.pem");
        urlProps.setProperty("user", "world");
       /* ================== Example 2: Set ssl to true to use the certificate for authentication.*/
        urlProps.setProperty("ssl", "true");
       /* ================== Example 3: Set sslmode to require to use the certificate for authentication. */
//        urlProps.setProperty("sslmode", "require");
       /* ================== Example 4: Set sslmode to verify-ca to use the certificate for authentication. */
//        urlProps.setProperty("sslmode", "verify-ca");
       /* ================== Example 5: Set sslmode to verify-full to use the certificate (in the Linux OS) for authentication. */
//        urls = "jdbc:postgresql://world:8000/postgres";
//        urlProps.setProperty("sslmode", "verify-full");

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
```

