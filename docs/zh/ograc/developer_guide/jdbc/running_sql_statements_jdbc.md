# 执行SQL语句<a name="ZH-CN_TOPIC_0289900186"></a>

## 执行普通SQL语句<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_s6d6619f4f2df48198e8e7a32ccc4b47a"></a>

应用程序通过执行SQL语句来操作数据库的数据（不用传递参数的语句），需要按以下步骤执行：

1. 调用Connection的createStatement方法创建语句对象。

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    Statement stmt = conn.createStatement();
    ```

2. 调用Statement的executeUpdate方法执行SQL语句。

   ```
   int rc = stmt.executeUpdate("CREATE TABLE customer_t1(c_customer_sk INTEGER, c_customer_name VARCHAR(32));");
   ```

3. 关闭语句对象。

    ```
    stmt.close();
    ```

## 执行预编译SQL语句<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_scea08fc60d7c4db0ae5f31990a842a03"></a>

预编译语句是只编译和优化一次，然后可以通过设置不同的参数值多次使用。由于已经预先编译好，后续使用会减少执行时间。因此，如果多次执行一条语句，请选择使用预编译语句。可以按以下步骤执行：

1. 调用Connection的prepareStatement方法创建预编译语句对象。

    ```
    PreparedStatement pstmt = con.prepareStatement("UPDATE customer_t1 SET c_customer_name = ? WHERE c_customer_sk = 1");
    ```

2. 调用PreparedStatement的setShort设置参数。

    ```
    pstmt.setShort(1, (short)2);
    ```

3. 调用PreparedStatement的executeUpdate方法执行预编译SQL语句。

    ```
    int rowcount = pstmt.executeUpdate();
    ```

4. 调用PreparedStatement的close方法关闭预编译语句对象。

    ```
    pstmt.close();
    ```

## 调用存储过程<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_sed43ac42d9414b01bfad409279941f46"></a>

ograc支持通过JDBC直接调用事先创建的存储过程，步骤如下：

1. 调用Connection的prepareCall方法创建调用语句对象。

    ```
    Connection myConn = DriverManager.getConnection("url","user","password");
    CallableStatement cstmt = myConn.prepareCall("{? = CALL TESTPROC(?,?,?)}");
    ```

2. 调用CallableStatement的setInt方法设置参数。

    ```
    cstmt.setInt(2, 50); 
    cstmt.setInt(1, 20);
    cstmt.setInt(3, 90);
    ```

3. 调用CallableStatement的registerOutParameter方法注册输出参数。

    ```
    cstmt.registerOutParameter(4, Types.INTEGER);  //注册out类型的参数，类型为整型。
    ```

4. 调用CallableStatement的execute执行方法调用。

    ```
    cstmt.execute();
    ```

5. 调用CallableStatement的getInt方法获取输出参数。

    ```
    int out = cstmt.getInt(4);  //获取out参数
    ```

6. 调用CallableStatement的close方法关闭调用语句。

    ```
    cstmt.close();
    ```

## 执行批处理<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_sb0c28cebb51d482c8bd996ce7fef3a6c"></a>

用一条预处理语句处理多条相似的数据，数据库只创建一次执行计划，节省了语句的编译和优化时间。可以按如下步骤执行：

1. 调用Connection的prepareStatement方法创建预编译语句对象。

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    PreparedStatement pstmt = conn.prepareStatement("INSERT INTO customer_t1 VALUES (?)");
    ```

2. 针对每条数据都要调用setShort设置参数，以及调用addBatch将该条数据添加到参数列表里。

    ```
    pstmt.setShort(1, (short)2);
    pstmt.addBatch();
    ```

3. 调用PreparedStatement的executeBatch方法执行批处理。

    ```
    int[] rowcount = pstmt.executeBatch();
    ```

4. 调用PreparedStatement的close方法关闭预编译语句对象。

    ```
    pstmt.close();
    ```

    >[!NOTE]说明
    >在实际的批处理过程中，通常不终止批处理程序的执行，否则会降低数据库的性能。因此在执行批处理时，应该关闭自动提交功能，每几行提交一次。关闭自动提交功能的语句为：    conn.setAutoCommit\(false\);
