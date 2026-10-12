# Connecting to a Database Using TLCP

When connecting to an openGauss server via JDBC, users can enable the TLCP (GM/T 0024-2014) cryptographic protocol to encrypt communications between the client and server. This provides a nationally recognized security mechanism for transmitting sensitive data over the Internet. This section describes how to establish a TLCP-based connection to openGauss using JDBC. It assumes that you have already enabled TLCP support on the openGauss server side.

## Server Configuration

This section assumes familiarity with the procedure for enabling TLCP on the openGauss server. A brief overview is provided below:

1. Compile the database with **tassl** integration to enable server-side TLCP capabilities. For details, refer to [Compilation Preparation](../compilation_guide/setting_up_the_compilation_environment.md).

2. Generate TLCP-related certificates and keys. For details, refer to [Certificate Generation (TLCP)](../database_administration_guide/ssl_certificate_management.md).

3. Configure TLCP-related parameters and restart the database cluster to apply the changes. For details, refer to [Establishing Secure TCP/IP Connections Using SSL](../database_administration_guide/establishing_secure_tcp_ip_connections_in_ssl_mode.md).

## Client Configuration

Perform the following steps on the client side:

Upload the certificate files generated during server configuration—namely `client.key.pk8`, `client_enc.key.pk8`, `client.crt`, `client_enc.crt`, and `cacert.pem`—to the client machine.

## Example

```java
public class TLCP {
    public static void main(String[] args) {
        Properties urlProps = new Properties();
        String urls = "jdbc:opengauss://10.29.37.136:8000/postgres";

        /**
         * ==================
         * Example 1: One-Way Authentication
         * TLCP connection succeeds only when the server-side ssl_ciphers is set to
         * ECC-SM4-SM3 or ECC-SM4-GCM-SM3.
         */
        urlProps.setProperty("ssl", "true");
        urlProps.setProperty("tlcp", "true");
        // sslmode can be set to prefer or higher
        urlProps.setProperty("sslmode", "verify-ca");
        urlProps.setProperty("sslrootcert", "cacert.pem");

        /**
         * ==================
         * Example 2: Two-Way Authentication
         * TLCP connection succeeds when the server-side ssl_ciphers is set to
         * ECC-SM4-SM3, ECC-SM4-GCM-SM3, ECDHE-SM4-SM3, or ECDHE-SM4-GCM-SM3.
         */
        urlProps.setProperty("ssl", "true");
        urlProps.setProperty("tlcp", "true");
        // sslmode can be set to prefer or higher
        urlProps.setProperty("sslmode", "verify-ca");
        urlProps.setProperty("sslrootcert", "cacert.pem");
        urlProps.setProperty("sslcert", "client.crt");
        urlProps.setProperty("sslkey", "client.key.pk8");
        urlProps.setProperty("sslenccert", "client_enc.crt");
        urlProps.setProperty("sslenckey", "client_enc.key.pk8");

        try {
            Class.forName("org.opengauss.Driver").newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }

        try {
            Connection conn = DriverManager.getConnection(urls, urlProps);
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### Notes

1. The method for converting client private keys to DER format remains unchanged. For details, refer to [Connecting to a Database Using SSL (JDBC)](./connecting_to_a_database_using_ssl_jdbc.md).

2. Using TLCP in the JDBC client requires the **BGMProvider** JAR package (open-source software). Recommended version: **1.1 or later**.

3. The JDBC client TLCP feature has specific JDK requirements. Recommended versions: **JDK 8u302+ or 11.0.11+**.

