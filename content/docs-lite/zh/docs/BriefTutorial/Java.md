# Java<a name="ZH-CN_TOPIC_0000001255341791"></a>

JDBC（Java Database Connectivity，Java数据库连接）是一种用于执行SQL语句的Java API，可以为多种关系数据库提供统一访问接口，应用程序可基于它操作数据。openGauss库提供了对JDBC 4.0特性的支持，需要使用JDK1.8版本编译程序代码，不支持JDBC桥接ODBC方式。

在linux服务器端源代码目录下执行build.sh，获得驱动jar包postgresql.jar，包位置在源代码目录下。从发布包中获取, 包名为openGauss-xxxx-操作系统版本号-64bit-Jdbc.tar.gz。

驱动包与PostgreSQL保持兼容，其中类名、类结构与PostgreSQL驱动完全一致，曾经运行于PostgreSQL的应用程序可以直接移植到当前系统使用。

## 加载驱动<a name="section382241834912"></a>

在创建数据库连接之前，需要加载数据库驱动类，驱动类不同包位置不同。openGauss jdbc的驱动为“org.opengauss.Driver”，其中url前缀为“jdbc:opengauss”。

## 连接数据库<a name="section1668914179142"></a>

在连接数据库之前先要添加连接数据库的主机地址（加粗有下划线内容）添加到pg\_hba.conf（此文件在安装目录下的datanode文件夹下）中，格式如下所示：

```
host    all    all    127.0.0.1/32    sha256
```

JDBC提供了三个方法，用于创建数据库连接。

语句执行常用的方式为通过Statement和PreparedStatement两种方式：

-   Statement：
    -   execute：返回值是boolean类型，执行查询语句看不到返回值。
    -   executeQuery：返回值是ResultSet类型，通常用于查询，使用方法为在里面直接写SQL语句。

-   PreparedStatement：

    包含Statement两个方法，但使用不太一样，要先在conn.prepareStatement\(\)中写入语句，之后根据需要再执行execute或executeQuery，这两个方法里面入参为空。如果SQL语句中有变量，建议使用PreparedStatement进行操作可以有效防止SQL注入，使用?替换掉变量，之后使用setObject方法对其赋值。


示例：

>![](public_sys-resources/icon-note.gif) **说明：** 
>下面示例中黑体加下划线的字段需要替换成用户自己的信息，其中：
>-   **<u>127.0.0.1</u>**：数据库所在的主机地址。
>-   <u>**8080**</u>：数据库连接的端口。
>-   <u>**test**</u>：连接的数据库名称。如果数据库不存在会报错，使用前请先确认该数据库是否存在。
>-   **<u>myuser</u>**：连接数据库的用户名。
>-   **<u>myPassWord</u>**：连接数据库用户的密码。

-   DriverManager.getConnection\(String url\);

    此连接方法需要在url上面拼接上用户名密码。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


-   DriverManager.getConnection\(String url, Properties info\);

    此方法的用户名密码等参数均在Properties 对象的实例通过setProperty添加。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```

-   DriverManager.getConnection\(String url, String user, String password\);

    此方法需要将用户名和密码作为变量输入。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


## 创建表<a name="section1969315347146"></a>

-   通过statement执行创表操作。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```

-   通过PreparedStatement执行创表操作。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


## 插入操作<a name="section1603173921418"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>插入操作执行前需要确保执行了[创建表](#section1969315347146)操作，表名为test，表结构如下。
>```
>create table test (id int,name varchar (10));
>```

-   使用Statement执行插入操作，后面可以跟随查询语句检查插入是否生效。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


-   使用PreparedStatement 执行插入操作，后面可以跟随查询语句检查插入是否生效。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    
    ```


## SELECT操作<a name="section138138476141"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>请先完成[创建表](#section1969315347146)和[插入操作](#section1603173921418)。

-   使用prepareStatement执行查询操作可以使用预编译，动态的添加参数也可以执行普通的SQL语句。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


-   使用Statement执行查询语句。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


## 更新操作<a name="section112861325191512"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>请先完成[创建表](#section1969315347146)和[插入操作](#section1603173921418)。

-   使用Statement执行更新操作，然后执行查询语句判断更新是否成功。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    ```


-   使用PreparedStatement执行更新操作，然后执行查询语句判断更新是否成功。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


## 删除操作<a name="section3947173681519"></a>

-   使用Statement进行删除，然后执行查询语句判断删除是否成功。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    
    ```


-   使用preparedStatement进行删除，然后执行查询语句判断删除是否成功。

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
                System.out.println("连接成功！");
                return conn;
            } catch (Exception var8) {
                var8.printStackTrace();
                return null;
            }
        }
    }
    ```


