# 连接数据库（UDS方式）<a name="ZH-CN_TOPIC_0000001307859622"></a>

Unix domain socket用于同一主机上不同进程间的数据交换，通过添加junixsocket获取套接字工厂使用。

需要引用的jar包有junixsocket-core-XXX.jar、junixsocket-common-XXX.jar、junixsocket-native-common-XXX.jar。同时需要在URL连接串中添加：socketFactory=org.newsclub.net.unix.AFUNIXSocketFactory$FactoryArg&socketFactoryArg=_\[path-to-the-unix-socket\]_。

示例：

```
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;

public class Test {
    public static void main(String[] args) {
        String driver = "org.postgresql.Driver";
        Connection conn;
        try {
            Class.forName(driver).newInstance();
            Properties properties = new Properties();
            properties.setProperty("user", "username");
            properties.setProperty("password", "password");
            conn = DriverManager.getConnection("jdbc:postgresql://localhost:8000/postgres?socketFactory=org.newsclub" +
                            ".net.unix" +
                            ".AFUNIXSocketFactory$FactoryArg&socketFactoryArg=/data/tmp/.s.PGSQL.8000",
                    properties);
            System.out.println("Connection Successful!");
            Statement statement = conn.createStatement();
            statement.executeQuery("select 1");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   socketFactoryArg参数配置根据真实路径进行配置，与GUC参数unix\_socket\_directory的值保持一致。
>-   连接主机名必须设置为“localhost”。

