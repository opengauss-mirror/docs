# 连接数据库

在创建数据库连接之后，才能使用它来执行SQL语句操作数据。

## 函数原型<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_s78385b36d75447f68647a4fa4e18e4eb"></a>

JDBC提供了三个方法，用于创建数据库连接。

-   DriverManager.getConnection\(String url\);
-   DriverManager.getConnection\(String url, Properties info\);
-   DriverManager.getConnection\(String url, String user, String password\);

## 示例<a name="zh-cn_topic_0283137601_zh-cn_topic_0237120381_zh-cn_topic_0213179126_zh-cn_topic_0189251768_zh-cn_topic_0059779354_sa87cf707a76c493997989289921f9202"></a>

```
//以下代码将获取数据库连接操作封装为一个接口，可通过给定用户名和密码来连接数据库。
public static Connection getConnect(String username, String passwd)
    {
        //驱动类。
        String driver = "org.opengauss.Driver";
        //数据库连接描述符。
        String sourceURL = "jdbc:oGRAC://127.0.0.1:8000";
        Connection conn = null;
        
        try
        {
            //加载驱动。
            Class.forName(driver);
        }
        catch( Exception e )
        {
            e.printStackTrace();
            return null;
        }
        
        try
        {
             //创建连接。
            conn = DriverManager.getConnection(sourceURL, username, passwd);
            System.out.println("Connection succeed!");
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return null;
        }
        
        return conn;
    };
// 以下代码将使用Properties对象作为参数建立连接
public static Connection getConnectUseProp(String username, String passwd)
    {
        //驱动类。
        String driver = "org.opengauss.Driver";
        //数据库连接描述符。
        String sourceURL = "jdbc:oGRAC://127.0.0.1:8000";
        Connection conn = null;
        Properties info = new Properties();
        
        try
        {
            //加载驱动。
            Class.forName(driver);
        }
        catch( Exception e )
        {
            e.printStackTrace();
            return null;
        }
        
        try
        {
             info.setProperty("user", username);
             info.setProperty("password", passwd);
             //创建连接。
             conn = DriverManager.getConnection(sourceURL, info);
             System.out.println("Connection succeed!");
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return null;
        }
        
        return conn;
    };
```

