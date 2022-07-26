# Log Management<a name="EN-US_TOPIC_0311515902"></a>

The openGauss JDBC driver uses log records to help solve problems when the openGauss JDBC driver is used in applications. openGauss JDBC supports the following log management methods:

1.  Use the SLF4J log framework for interconnecting with applications.
2.  Use the JdkLogger log framework for interconnecting with applications.

SLF4J and JdkLogger are mainstream frameworks for Java application log management in the industry. For details about how to use these frameworks, see the official documents \(SLF4J:  [http://www.slf4j.org/manual.html](http://www.slf4j.org/manual.html); JdkLogger:  [https://docs.oracle.com/javase/8/docs/technotes/guides/logging/overview.html](https://docs.oracle.com/javase/8/docs/technotes/guides/logging/overview.html)\).

Method 1: Use the SLF4J log framework for interconnecting with applications.

When a connection is set up,  **logger=Slf4JLogger**  is configured in the URL.

The SLF4J may be implemented by using Log4j or Log4j2. When the Log4j is used to implement the SLF4J, the following JAR packages need to be added:  **log4j-\*.jar**,  **slf4j-api-\*.jar**, and  **slf4j-log4\*-\*.jar**  \(\* varies according to versions\), and configuration file  **log4j.properties**. If the Log4j2 is used to implement the SLF4J, you need to add the following JAR packages:  **log4j-api-\*.jar**,  **log4j-core-\*.jar**,  **log4j-slf4j18-impl-\*.jar**, and  **slf4j-api-\*-alpha1.jar**  \(\* varies according to versions\), and configuration file  **log4j2.xml**.

This method supports log management and control. The SLF4J can implement powerful log management and control functions through related configurations in files. This method is recommended.

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>This method depends on the general SLF4J APIs, such as  **org.slf4j.LoggerFactory.getLogger\(String name\)**,  **org.slf4j.Logger.debug\(String var1\)**,  **org.slf4j.Logger.info\(String var1\)**,  **org.slf4j.Logger.warn\(String warn\)**, and  **org.slf4j.Logger.warn\(String warn\)**. If these APIs are changed, logs cannot be recorded.

Example:

```
public static Connection GetConnection(String username, String passwd){
 
    String sourceURL = "jdbc:opengauss://10.10.0.13:8000/postgres?logger=Slf4JLogger";
    Connection conn = null;
 
    try{
// Create a connection.
        conn = DriverManager.getConnection(sourceURL,username,passwd);
        System.out.println("Connection succeed!");
    }catch (Exception e){
        e.printStackTrace();
        return null;
    }
    return conn;
}
```

The following is an example of the  **log4j.properties**  file:

```
log4j.logger.org.opengauss=ALL, log_gsjdbc

# Default file output configuration
log4j.appender.log_gsjdbc=org.apache.log4j.RollingFileAppender
log4j.appender.log_gsjdbc.Append=true
log4j.appender.log_gsjdbc.File=gsjdbc.log
log4j.appender.log_gsjdbc.Threshold=TRACE
log4j.appender.log_gsjdbc.MaxFileSize=10MB
log4j.appender.log_gsjdbc.MaxBackupIndex=5
log4j.appender.log_gsjdbc.layout=org.apache.log4j.PatternLayout
log4j.appender.log_gsjdbc.layout.ConversionPattern=%d %p %t %c - %m%n
log4j.appender.log_gsjdbc.File.Encoding = UTF-8
```

The following is an example of the  **log4j2.xml**  file:

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration status="OFF">
    <appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d %p %t %c - %m%n"/>
        </Console>
        <File name="FileTest" fileName="test.log">
            <PatternLayout pattern="%d %p %t %c - %m%n"/>
        </File>
        <!-- JDBC driver log file output configuration. Log rewinding is supported. When the log size exceeds 10 MB, a new file is created. The new file is named in the format of yyyy-mm-dd-file ID. -->
        <RollingFile name="RollingFileJdbc" fileName="gsjdbc.log" filePattern="%d{yyyy-MM-dd}-%i.log">
            <PatternLayout pattern="%d %p %t %c - %m%n"/>
            <Policies>
                <SizeBasedTriggeringPolicy size="10 MB"/>
            </Policies>
        </RollingFile>
    </appenders>
    <loggers>
        <root level="all">
            <appender-ref ref="Console"/>
            <appender-ref ref="FileTest"/>
        </root>
        <!-- JDBC driver logs. The log level is all. All logs can be viewed and exported to the gsjdbc.log file. -->
        <logger name="org.opengauss" level="all" additivity="false">
            <appender-ref ref="RollingFileJdbc"/>
        </logger>
    </loggers>
</configuration>
```

Method 2: Use the JdkLogger log framework for interconnecting with applications.

The default Java logging framework stores its configurations in a file named  **logging.properties**. Java installs the global configuration file in the folder in the Java installation directory. The  **logging.properties**  file can also be created and stored with a single project.

Configuration example of  **logging.properties**:

```
# Specify the processing program as a file.
handlers= java.util.logging.FileHandler

# Specify the default global log level.
.level= ALL

# Specify the log output control standard.
java.util.logging.FileHandler.level=ALL
java.util.logging.FileHandler.pattern = gsjdbc.log
java.util.logging.FileHandler.limit = 500000
java.util.logging.FileHandler.count = 30
java.util.logging.FileHandler.formatter = java.util.logging.SimpleFormatter
java.util.logging.FileHandler.append=false

```

The following is a code example:

```
System.setProperty("java.util.logging.FileHandler.pattern","jdbc.log");
FileHandler fileHandler = new FileHandler(System.getProperty("java.util.logging.FileHandler.pattern"));
Formatter formatter = new SimpleFormatter();
fileHandler.setFormatter(formatter);
Logger logger = Logger.getLogger("org.opengauss");
logger.addHandler(fileHandler);
logger.setLevel(Level.ALL);
logger.setUseParentHandlers(false);
```

## Link Trace Function<a name="section1872562420171"></a>

The openGauss JDBC driver provides the application-to-database link trace function to associate discrete SQL statements on the database side with application requests. This function requires application developers to implement the  **org.opengauss.log.Tracer**  API class and specify the full name of the API implementation class in the URL.

URL example:

```
String URL = "jdbc:opengauss://127.0.0.1:8000/postgres?traceInterfaceClass=xxx.xxx.xxx.OpenGaussTraceImpl";
```

The  **org.opengauss.log.Tracer**  API class is defined as follows:

```
public interface Tracer {
// Retrieves the value of traceId.
String getTraceId();
}
```

The following is an example of the  **org.opengauss.log.Tracer**  API implementation class:

```
import org.opengauss.log.Tracer;

public class OpenGaussTraceImpl implements Tracer {
    private static MDC mdc = new MDC();

    private final String TRACE_ID_KEY = "traceId";

    public void set(String traceId) {
        mdc.put(TRACE_ID_KEY, traceId);
    }

    public void reset() {
        mdc.clear();
    }

    @Override
    public String getTraceId() {
        return mdc.get(TRACE_ID_KEY);
    }
}
```

The following is an example of context mapping which is used to store trace IDs generated for different requests.

```
import java.util.HashMap;

public class MDC {
    static final private ThreadLocal<HashMap<String, String>> threadLocal = new ThreadLocal<>();

    public void put(String key, String val) {
        if (key == null || val == null) {
            throw new IllegalArgumentException("key or val cannot be null");
        } else {
            if (threadLocal.get() == null) {
                threadLocal.set(new HashMap<>());
            }
            threadLocal.get().put(key, val);
        }
    }

    public String get(String key) {
        if (key == null) {
            throw new IllegalArgumentException("key cannot be null");
        } else if (threadLocal.get() == null) {
            return null;
        } else {
            return threadLocal.get().get(key);
        }
    }

    public void clear() {
        if (threadLocal.get() == null) {
            return;
        } else {
            threadLocal.get().clear();
        }
    }
}
```

The following is an example of using traceId:

```
String traceId = UUID.randomUUID().toString().replaceAll("-", "");
openGaussTrace.set(traceId);
pstm = con.prepareStatement("select * from test_trace_id where id = ?");
pstm.setInt(1, 1);
pstm.execute();
pstm = con.prepareStatement("insert into test_trace_id values(?,?)");
pstm.setInt(1, 2);
pstm.setString(2, "test");
pstm.execute();
openGaussTrace.reset();
```

