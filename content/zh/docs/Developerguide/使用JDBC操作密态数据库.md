# 使用JDBC操作密态数据库

## 连接密态数据库<a name="section6796167162618"></a>

连接密态数据库需要使用驱动包gsjdbc4.jar，具体JDBC连接参数参考[基于JDBC开发](基于JDBC开发.md)章节介绍。JDBC支持密态数据库相关操作，需要设置enable\_ce=1，示例如下。

```
public static Connection getConnect(String username, String passwd)
    {
        //驱动类。
        String driver = "org.opengauss.Driver";
        //数据库连接描述符。
        String sourceURL = "jdbc:opengauss://10.10.0.13:8000/postgres?enable_ce=1";
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
```

>![](public_sys-resources/icon-note.png) **说明：**
>
>-   【建议】使用JDBC操作密态数据库时，一个数据库连接对象对应一个线程，否则，不同线程变更可能导致冲突。
>
>-   【建议】使用JDBC操作密态数据库时，不同connection对密态配置数据有变更，由客户端调用isvalid方法保证connection能够持有变更后的密态配置数据，此时需要保证参数refreshClientEncryption为1\(默认值为1\)，在单客户端操作密态数据场景下，refreshClientEncryption参数可以设置为0。

## 调用isValid方法刷新缓存示例<a name="section8416165433116"></a>

```
// 创建客户端主密钥
Connection conn1 = DriverManager.getConnection("url","user","password");

// conn1通过调用isValid刷新缓存
try {
 if (!conn1.getConnection().isValid(60)) {
  conn1.getFileWriter().writeLine("isValid Failed for connection 1");
 }
} catch (SQLException e) {
 conn1.getFileWriter().writeLine("isValid Failed with error");
 e.printStackTrace();
}
```

## 执行密态等值查询相关的创建密钥语句<a name="section15271115213271"></a>

```
// 创建客户端主密钥
Connection conn = DriverManager.getConnection("url","user","password");
Statement stmt = conn.createStatement();
int rc = stmt.executeUpdate("CREATE CLIENT MASTER KEY ImgCMK1 WITH ( KEY_STORE = localkms, KEY_PATH = \"key_path_value\" , ALGORITHM = RSA_2048));
```

>![](public_sys-resources/icon-note.png) **说明：**
>创建密钥之前需要使用gs\_ktool工具提前生成密钥，才能创建CMK成功。

```
// 创建列加密密钥
int rc2 = stmt.executeUpdate("CREATE COLUMN ENCRYPTION KEY ImgCEK1 WITH VALUES (CLIENT_MASTER_KEY = ImgCMK1, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);");
```

## 执行密态等值查询相关的创建加密表的语句<a name="section15511335102810"></a>

```
int rc3 = stmt.executeUpdate("CREATE TABLE creditcard_info (id_number    int, name  varchar(50) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC),credit_card  varchar(19) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC));");
// 插入数据
int rc4 = stmt.executeUpdate("INSERT INTO creditcard_info VALUES (1,'joe','6217986500001288393');");
// 查询加密表
ResultSet rs = null;
rs = stmt.executeQuery("select * from creditcard_info where name = 'joe';");
// 关闭语句对象
stmt.close();
```

## 执行加密表的预编译SQL语句<a name="section4943131112294"></a>

```
// 调用Connection的prepareStatement方法创建预编译语句对象。
PreparedStatement pstmt = con.prepareStatement("INSERT INTO creditcard_info VALUES (?, ?, ?);");
// 调用PreparedStatement的setShort设置参数。
pstmt.setInt(1, 2);
pstmt.setString(2, "joy");
pstmt.setString(3, "6219985678349800033");
// 调用PreparedStatement的executeUpdate方法执行预编译SQL语句。
int rowcount = pstmt.executeUpdate();
// 调用PreparedStatement的close方法关闭预编译语句对象。
pstmt.close();
```

## 执行加密表的批处理操作<a name="section102367147301"></a>

```
// 调用Connection的prepareStatement方法创建预编译语句对象。
Connection conn = DriverManager.getConnection("url","user","password");
PreparedStatement pstmt = conn.prepareStatement("INSERT INTO batch_table (id, name, address) VALUES (?,?,?)");
// 针对每条数据都要调用setShort设置参数，以及调用addBatch确认该条设置完毕。
int loopCount = 20;
 for (int i = 1; i < loopCount + 1; ++i) {
      pstmt.setInt(1, i);
      pstmt.setString(2, "Name " + i);
      pstmt.setString(3, "Address " + i);
      // Add row to the batch.
      pstmt.addBatch();
}
// 调用PreparedStatement的executeBatch方法执行批处理。
int[] rowcount = pstmt.executeBatch();
// 调用PreparedStatement的close方法关闭预编译语句对象。
pstmt.close();
```
