# Connecting to a Database (Using UDS)<a name="EN-US_TOPIC_0000001307859622"></a>

The Unix domain socket is used for data exchange between different processes on the same host. You can add **junixsocket** to obtain the socket factory.

The **junixsocket-core-***XXX***.jar**, **junixsocket-common-***XXX***.jar**, and **junixsocket-native-common-***XXX***.jar** JAR packages need to be referenced. In addition, you need to add **socketFactory=org.newsclub.net.unix.AFUNIXSocketFactory$FactoryArg&socketFactoryArg= ***\[path-to-the-unix-socket\]* to the URL connection string.

Example:

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

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>-   Set the **socketFactoryArg** parameter based on the actual path. The value must be the same as that of the GUC parameter **unix\_socket\_directory**.
>-   The connection host name must be set to **localhost**.
