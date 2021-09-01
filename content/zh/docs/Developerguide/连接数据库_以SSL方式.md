# 连接数据库（以SSL方式）<a name="ZH-CN_TOPIC_0244720263"></a>

用户通过JDBC连接openGauss服务器时，可以通过开启SSL加密客户端和服务器之间的通讯，为敏感数据在Internet上的传输提供了一种安全保障手段。本小节主要介绍应用程序通过JDBC如何采用SSL的方式连接openGauss。在使用本小节所描述的方法前，默认用户已经获取了服务端和客户端所需要的证书和私钥文件，关于证书等文件的获取请参考Openssl相关文档和命令。

## 服务端配置<a name="zh-cn_topic_0237120382_zh-cn_topic_0213179127_zh-cn_topic_0189251215_zh-cn_topic_0059777633_s513e457bfaa24ce4b1a20a1f2322f9ae"></a>

当开启SSL模式后，必须提供根证书、服务器证书和私钥。

配置步骤（假设用户的证书文件放在数据目录/gaussdb/data/datanode下，且采用默认文件名）：

1.  以操作系统用户omm登录数据库主节点。
2.  生成并配置证书

    生成SSL证书，具体请参见[证书生成](证书生成.md)。将生成出的文件server.crt，server.key，cacert.pem拷贝到服务端数据目录下。

    使用如下命令可以查询数据库节点的数据目录，instance列为数据目录。

    ```
    gs_om -t status --detail
    ```

    在Unix系统上，server.crt、server.key的权限设置必须禁止任何外部或组的访问，请执行如下命令实现这一点。

    ```
    chmod 0600 server.key
    ```

3.  开启SSL认证模式。

    ```
    gs_guc set -D /gaussdb/data/datanode -c "ssl=on"
    ```

4.  配置客户端接入认证参数，IP为所要连接的主机IP。

    ```
    gs_guc reload -D /gaussdb/data/datanode -h "hostssl all             all             127.0.0.1/32           cert"
    gs_guc reload -D /gaussdb/data/datanode -h "hostssl all             all             IP/32           cert"
    ```

    表示允许127.0.0.1/32网段的客户端以ssl认证方式连接到openGauss服务器。

    >![](public_sys-resources/icon-notice.gif) **须知：**   
    >如果服务端pg\_hba.conf文件中METHOD配置为cert，则只有客户端使用证书（client.crt）中所设置的用户名（common name）才能够成功连接数据库。如果设置为md5、sm3或sha256则对连接数据库的用户没有限制。  

5.  配置SSL认证相关的数字证书参数。

    各命令后所附为设置成功的回显。

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

6.  重启数据库。

    ```
    gs_om -t stop && gs_om -t start
    ```

7.  生成并上传证书文件。

## 客户端配置<a name="zh-cn_topic_0237120382_zh-cn_topic_0213179127_zh-cn_topic_0189251215_zh-cn_topic_0059777633_s29b328f4eb634c5b903c430d663d038b"></a>

配置步骤如下：

上传证书文件，将在服务端配置章节生成出的文件client.key.pk8，client.crt，cacert.pem放置在客户端。

## 示例<a name="zh-cn_topic_0237120382_zh-cn_topic_0213179127_zh-cn_topic_0189251215_sac62520495454e38a58fb1c067bd8adc"></a>

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
         * ==================  示例1  使用NonValidatingFactory通道，pg_hba.conf文件中MTETHOD不为cert
         */
/* 
        urlProps.setProperty("sslfactory","org.postgresql.ssl.NonValidatingFactory");
        urlProps.setProperty("user", "world");
        //此处的test@123为创建用户CRETAE USER world WITH PASSWORD 'test123@'时指定的密码
        urlProps.setProperty("password", "test@123");
        urlProps.setProperty("ssl", "true");
*/
        /**
         * ==================  示例2 - 5  使用证书，pg_hba.conf文件中MTETHOD为cert
         */
        urlProps.setProperty("sslcert", "client.crt");
        // DER格式的客户端秘钥
        urlProps.setProperty("sslkey", "client.key.pk8");
        urlProps.setProperty("sslrootcert", "cacert.pem");
        urlProps.setProperty("user", "world");
        /* ==================  示例2  设置ssl为true，使用证书认证 */
        urlProps.setProperty("ssl", "true");
        /* ==================  示例3  设置sslmode为require，使用证书 */
//        urlProps.setProperty("sslmode", "require");
        /* ==================  示例4  设置sslmode为verify-ca，使用证书 */
//        urlProps.setProperty("sslmode", "verify-ca");
        /* ==================  示例5  设置sslmode为verify-full，使用证书（Linux下验证） */
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

