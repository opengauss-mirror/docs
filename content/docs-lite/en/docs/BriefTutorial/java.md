# Java<a name="EN-US_TOPIC_0000001255341791"></a>

Java Database Connectivity \(JDBC\) is a Java API for running SQL statements. It provides unified access APIs for different relational databases, based on which applications process data. The openGauss library supports JDBC 4.0 and requires JDK 1.8 for code compiling. It does not support JDBC-ODBC bridge.

Run  **build.sh**  in the source code directory on Linux OS to obtain the driver JAR package  **postgresql.jar**, which is stored in the source code directory. Obtain the package from the release package named  **openGauss-**_x.x.x-OS version number_**-64bit-Jdbc.tar.gz**.

The driver package is compatible with PostgreSQL. The class name and structure in the driver are the same as those in the PostgreSQL driver. All applications running on PostgreSQL can be smoothly migrated to the current system.

## Loading the Driver<a name="section382241834912"></a>

Before creating a database connection, you need to load the database driver class. The package location varies according to the driver class. The driver of openGauss JDBC is  **org.opengauss.Driver**. The URL prefix is  **jdbc:opengauss**.

## Connecting to a Database<a name="section1668914179142"></a>

Before connecting to the database, add the host IP address \(bold and underlined\) of the database to the  **pg\_hba.conf**  file in the  **datanode**  folder of the installation directory. The format is as follows:

```
host    all    all    127.0.0.1/32    sha256
```

JDBC provides the following three database connection methods:

Statements can be executed in two modes: Statement and PreparedStatement.

-   Statement:
    -   **execute**: The return value is of the Boolean type. No return value is displayed after the query statement is executed.
    -   **executeQuery**: The return value is of the ResultSet type and is usually used for query. To use this function, write an SQL statement in it.

-   PreparedStatement:

    There are two Statement methods, which are used in different ways. You need to write statements in conn.prepareStatement\(\) and then run  **execute**  or  **executeQuery**  as required. The input parameters in the two methods are empty. If an SQL statement contains variables, you are advised to use PreparedStatement to prevent SQL injection. Use ? to replace the variable and use the setObject method to assign a value to the variable.


Example:

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the following example, the underlined fields in bold need to be replaced with your own information, where:
>-   **_127.0.0.1_**: IP address of the host where the database is located.
>-   **_8080_**: port for connecting to the database.
>-   **_test_**: name of the connected database. If the database does not exist, an error is reported. Before using the database, check whether the database exists.
>-   **_myuser_**: username for connecting to the database.
>-   **_myPassWord_**: password for connecting to the database.

-   DriverManager.getConnection\(String url\);

    In this connection method, the username and password must be added to the URL.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
      public static void main(String[] args) {
            getConnect();
      }
      public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


-   DriverManager.getConnection\(String url, Properties info\);

    The parameters such as the username and password of this method are added to the instance of the  **Properties**  object by using  **setProperty**.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
      public static void main(String[] args) {
            getConnect();
      }
     public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test";
            Properties info = new Properties();
            info.setProperty("user","myuser");
            info.setProperty("password","myPassWord");
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL, info);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```

-   DriverManager.getConnection\(String url, String user, String password\);

    This method requires the username and password to be entered as variables.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
      public static void main(String[] args) {
            getConnect();
      }
     public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test";
            String username="myuser";
            String passwd="myPassWord";
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL, username, passwd);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


## Creating a Table<a name="section1969315347146"></a>

-   Create a table using Statement.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
      public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            statement.execute("create table test_table (id int,name varchar (10))");
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```

-   Create a table using PreparedStatement.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
    public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            PreparedStatement preparedStatement=conn.prepareStatement("create table test (id int,name varchar (10))");
            preparedStatement.execute();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


## Insert Operation<a name="section1603173921418"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Before inserting data, ensure that the  **test**  table has been created \(as performed in  [Creating a Table](#section1969315347146)\). The table structure is as follows:
>```
>create table test (id int,name varchar (10));
>```

-   Use Statement to insert data. You can run a query statement to check whether the insertion takes effect.

    ```
    public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            statement.execute("insert into test (id,name) values (2,'zhangsan')");
            PreparedStatement preparedStatement=conn.prepareStatement("select * from test;");
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


-   Use PreparedStatement to insert data. You can run a query statement to check whether the insertion takes effect.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
        public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            PreparedStatement preparedStatement=conn.prepareStatement("insert into test (id,name) values (3,'zhaoliu')");
            preparedStatement.execute();
            preparedStatement=conn.prepareStatement("select * from test;");
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    
    ```


## SELECT Operation<a name="section138138476141"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Ensure that you have performed the creation and insertion operations in  [Creating a Table](#section1969315347146)  and  [Insert Operation](#section1603173921418).

-   You can use prepareStatement to perform pre-compiled query operations by dynamically adding parameters, or execute common SQL statements.

    ```
    public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
    	PreparedStatement preparedStatement=conn.prepareStatement("select * from test where id=?;");
            preparedStatement.setObject(1,1);
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


-   Use Statement to execute a query statement.

    ```
     public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            ResultSet resultSet=statement.executeQuery("select * from test");
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


## Update Operation<a name="section112861325191512"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Ensure that you have performed the creation and insertion operations in  [Creating a Table](#section1969315347146)  and  [Insert Operation](#section1603173921418).

-   Use Statement to perform the update operation, and then run the query statement to check whether the update is successful.

    ```
    public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            statement.execute("update  test set name='wangwu' where id=1");
            PreparedStatement preparedStatement=conn.prepareStatement("select * from test");
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


-   Use PreparedStatement to perform the update operation, and then run the query statement to check whether the update is successful:

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
        public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            PreparedStatement preparedStatement=conn.prepareStatement("update  test set name='wangwu' where id=1");
            preparedStatement.execute();
            preparedStatement=conn.prepareStatement("select * from test;");
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://127.0.0.1:8080/test?user=myuser&password=myPassWord";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


## Delete Operation<a name="section3947173681519"></a>

-   Use Statement to perform the delete opeation and run the query statement to check whether the deletion is successful.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
        public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            statement.execute("delete from test where id =4");
            PreparedStatement preparedStatement=conn.prepareStatement("select * from test;");
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://10.244.50.251:33700/test_l?user=ltest&password=tiange1999?";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    
    ```


-   Use preparedStatement to perform the delete opeation and run the query statement to check whether the deletion is successful.

    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.Properties;
    
    public class JdbcConn {
        public static void main(String[] args) throws SQLException {
            Connection conn = getConnect();
            Statement statement = conn.createStatement();
            PreparedStatement preparedStatement=conn.prepareStatement("delete from test where id =2");
            preparedStatement.execute();
            preparedStatement=conn.prepareStatement("select * from test;");
            ResultSet resultSet=preparedStatement.executeQuery();
            while (resultSet.next()){
                System.out.println(resultSet.getObject("id")+"  "+
                        resultSet.getObject("name"));
            }
            conn.close();
        }
        public static Connection getConnect() {
            String driver = "org.opengauss.Driver";
            String sourceURL = "jdbc:opengauss://10.244.50.251:33700/test_l?user=ltest&password=tiange1999?";
            Properties info = new Properties();
            Connection conn = null;
            try {
                Class.forName(driver);
            } catch (Exception var9) {
                var9.printStackTrace();
                return null;
            }
            try {
                conn = DriverManager.getConnection(sourceURL);
                System.out.println("Connection successful!");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


