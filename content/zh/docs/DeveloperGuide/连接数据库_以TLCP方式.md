# 连接数据库（以TLCP方式）

用户通过JDBC连接openGauss服务器时，可以通过开启TLCP国密协议加密客户端和服务器之间的通讯，为敏感数据在Internet上的传输提供了被国家所认可的安全保障手段。本小节主要介绍应用程序通过JDBC如何采用TLCP的方式连接openGauss。在使用本小节所描述的方法前，默认用户已经掌握在openGauss服务端开启TLCP能力的步骤。

## 服务端配置

本节默认用户已经掌握在openGauss服务端开启TLCP能力的具体步骤，下面仅做简要介绍：
1. 以依赖于tassl的方式进行数据库编译，才能够支持服务端TLCP能力。具体内容请参考[编译前准备](../../../docs-lite/zh/docs/CompilationGuide/编译前准备.md)。
2. 生成TLCP相关的证书/密钥。具体内容请参考[证书生成_TLCP](../../../docs-lite/zh/docs/DatabaseAdministrationGuide/证书生成_TLCP.md)。
3. 配置TLCP相关参数，重启数据库集群后生效。具体内容请参考[用SSL进行安全的TCP-IP连接](../../../docs-lite/zh/docs/DatabaseAdministrationGuide/用SSL进行安全的TCP-IP连接.md)。


## 客户端配置

配置步骤如下：

上传证书文件，将在服务端配置章节生成出的文件client.key.pk8、client_enc.key.pk8、client.crt、client_enc.crt、cacert.pem放置在客户端。

## 示例

```
public class TLCP{
    public static void main(String[] args) {
        Properties urlProps = new Properties();
        String urls = "jdbc:opengauss://10.29.37.136:8000/postgres";

        /**
         * ==================  示例1 单向认证场景，仅服务端ssl_ciphers设置为ECC-SM4-SM3或ECC-SM4-GCM-SM3时可TLCP建连成功
         */
        urlProps.setProperty("ssl", "true");
        urlProps.setProperty("tlcp", "true");
        /* sslmode可配置为prefer及以上级别 */
        urlProps.setProperty("sslmode", "verify-ca");
        urlProps.setProperty("sslrootcert", "cacert.pem");
        /**
         * ==================  示例2 双向认证场景，服务端ssl_ciphers设置为ECC-SM4-SM3、ECC-SM4-GCM-SM3、ECDHE-SM4-SM3、ECDHE-SM4-GCM-SM3均可TLCP建连成功
         */
        urlProps.setProperty("ssl", "true");
        urlProps.setProperty("tlcp", "true");
        /* sslmode可配置为prefer及以上级别 */
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
            Connection conn;
            conn = DriverManager.getConnection(urls,urlProps);
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
注：
1. 将客户端密钥转化为DER格式的方法不变，请参考[连接数据库_以SSL方式](./连接数据库_以SSL方式.md)。
2. 使用JDBC客户端TLCP能力需要依赖开源软件BGMProvider的jar包，版本建议：1.1及以上。
3. 使用JDBC客户端TLCP能力对JDK环境有要求，版本建议：8u302+、11.0.11+。
