# 执行SQL语句<a name="ZH-CN_TOPIC_0289900186"></a>

## 执行普通SQL语句<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_s6d6619f4f2df48198e8e7a32ccc4b47a"></a>

应用程序通过执行SQL语句来操作数据库的数据（不用传递参数的语句），需要按以下步骤执行：

1.  调用Connection的createStatement方法创建语句对象。

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    Statement stmt = conn.createStatement();
    ```

2. 调用Statement的executeUpdate方法执行SQL语句。

   ```
   int rc = stmt.executeUpdate("CREATE TABLE customer_t1(c_customer_sk INTEGER, c_customer_name VARCHAR(32));");
   ```

   >![](public_sys-resources/icon-note.gif) **说明：** 
   >
   >-   数据库中收到的一次执行请求（不在事务块中），如果含有多条语句，将会被打包成一个事务，事务块中不支持vacuum操作。如果其中有一个语句失败，那么整个请求都将会被回滚。
   >-   使用Statement执行多语句时应以“;”作为各语句间的分隔符，存储过程、函数、匿名块不支持多语句执行;当preferQueryMode=simple，语句执行不走解析逻辑，此场景下无法使用";"作为多语句间的分隔符。
   >-   “/”可用作创建单个存储过程、函数、匿名块的结束符。当preferQueryMode=simple，语句执行不走解析逻辑，此场景下无法使用"/"作为结束符。
   >-   在prepareThreshold=1时，因为preferQueryMode默认模式不对statement进行缓存淘汰，所以statement执行的每条SQL都会缓存语句，可能导致内存膨胀。需要调整preferQueryMode=extendedCacheEverything，对statement进行缓存淘汰。

3.  关闭语句对象。

    ```
    stmt.close();
    ```


## 执行预编译SQL语句<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_scea08fc60d7c4db0ae5f31990a842a03"></a>

预编译语句是只编译和优化一次，然后可以通过设置不同的参数值多次使用。由于已经预先编译好，后续使用会减少执行时间。因此，如果多次执行一条语句，请选择使用预编译语句。可以按以下步骤执行：

1.  调用Connection的prepareStatement方法创建预编译语句对象。

    ```
    PreparedStatement pstmt = con.prepareStatement("UPDATE customer_t1 SET c_customer_name = ? WHERE c_customer_sk = 1");
    ```

2.  调用PreparedStatement的setShort设置参数。

    ```
    pstmt.setShort(1, (short)2);
    ```

3.  调用PreparedStatement的executeUpdate方法执行预编译SQL语句。

    ```
    int rowcount = pstmt.executeUpdate();
    ```

4.  调用PreparedStatement的close方法关闭预编译语句对象。

    ```
    pstmt.close();
    ```


## 调用存储过程<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_sed43ac42d9414b01bfad409279941f46"></a>

openGauss支持通过JDBC直接调用事先创建的存储过程，步骤如下：

1.  调用Connection的prepareCall方法创建调用语句对象。

    ```
    Connection myConn = DriverManager.getConnection("url","user","password");
    CallableStatement cstmt = myConn.prepareCall("{? = CALL TESTPROC(?,?,?)}");
    ```

2.  调用CallableStatement的setInt方法设置参数。

    ```
    cstmt.setInt(2, 50); 
    cstmt.setInt(1, 20);
    cstmt.setInt(3, 90);
    ```

3.  调用CallableStatement的registerOutParameter方法注册输出参数。

    ```
    cstmt.registerOutParameter(4, Types.INTEGER);  //注册out类型的参数，类型为整型。
    ```

4.  调用CallableStatement的execute执行方法调用。

    ```
    cstmt.execute();
    ```

5.  调用CallableStatement的getInt方法获取输出参数。

    ```
    int out = cstmt.getInt(4);  //获取out参数
    ```

    示例：

    ```
    //在数据库中已创建了如下存储过程，它带有out参数。
    create or replace procedure testproc 
    (
        psv_in1 in integer,
        psv_in2 in integer,
        psv_inout in out integer
    )
    as
    begin
        psv_inout := psv_in1 + psv_in2 + psv_inout;
    end;
    /
    ```

6.  调用CallableStatement的close方法关闭调用语句。

    ```
    cstmt.close();
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   很多的数据库类如Connection、Statement和ResultSet都有close\(\)方法，在使用完对象后应把它们关闭。要注意的是，Connection的关闭将间接关闭所有与它关联的Statement，Statement的关闭间接关闭了ResultSet。
    >-   一些JDBC驱动程序还提供命名参数的方法来设置参数。命名参数的方法允许根据名称而不是顺序来设置参数，若参数有默认值，则可以不用指定参数值就可以使用此参数的默认值。即使存储过程中参数的顺序发生了变更，也不必修改应用程序。目前openGauss数据库的JDBC驱动程序不支持此方法。
    >-   openGauss数据库不支持带有输出参数的函数，也不支持存储过程和函数参数默认值。
    >-   myConn.prepareCall("{? = CALL TESTPROC(?,?,?)}")，执行存储过程绑定参数时，可以按照占位符的顺序绑定参数，注册第一个参数为出参，也可以按照存储过程中的参数顺序绑定参数，注册第四个参数为出参，上述用例为此场景，注册第四个参数为出参。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >-   当游标作为存储过程的返回值时，如果使用JDBC调用该存储过程，返回的游标将不可用。
    >-   存储过程不能和普通SQL在同一条语句中执行。
    >-   存储过程中inout类型参数必需注册出参。


## Oracle兼容模式启用重载时，调用存储过程<a name="section1430462411108"></a>

打开参数behavior\_compat\_options='proc\_outparam\_override'后，JDBC调用事先创建的存储过程，步骤如下：

1.  调用Connection的prepareCall方法创建调用语句对象。

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    CallableStatement cs = conn.prepareCall("{ CALL TEST_PROC(?,?,?) }");
    ```

2.  调用CallableStatement的setInt方法设置参数。

    ```
    PGobject pGobject = new PGobject();
    pGobject.setType("public.compfoo"); // 设置复合类型名，格式为“schema.typename”。
    pGobject.setValue("(1,demo)"); // 绑定复合类型值，格式为“(value1,value2)”。
    cs.setObject(1, pGobject);
    ```

3.  调用CallableStatement的registerOutParameter方法注册输出参数。

    ```
    // 注册out类型的参数，类型为复合类型,格式为“schema.typename”。
    cs.registerOutParameter(2, Types.STRUCT, "public.compfoo");  
    ```

4.  调用CallableStatement的execute执行方法调用。

    ```
    cs.execute();
    ```

5.  调用CallableStatement的getObject方法获取输出参数。

    ```
    PGobject result = (PGobject)cs.getObject(2);  // 获取out参数 
    result.getValue(); // 获取复合类型字符串形式值。
    result.getArrayValue(); //获取复合类型数组形式值，以复合数据类型字段顺序排序。
    result.getStruct(); //获取复合类型子类型名，按创建顺序排序。
    ```

6.  调用CallableStatement的close方法关闭调用语句。

    ```
    cs.close();
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   oracle兼容模式开启参数后，调用存储过程必须使用\{call proc\_name\(?,?,?\)\}形式调用，调用函数必须使用\{? = call func\_name\(?,?\)\}形式调用（等号左侧的“？”为函数返回值的占位符，用于注册函数返回值）。
    >-   参数behavior\_compat\_options='proc\_outparam\_override'行为变更后，业务需要重新建立连接，否则无法正确调用存储过程和函数。
    >-   函数和存储过程中包含复合类型时，参数的绑定与注册需要使用schema.typename形式。


示例：

```
// 在数据库创建复合数据类型。
CREATE TYPE compfoo AS (f1 int, f3 text);
// 在数据库中已创建了如下存储过程，它带有out参数。
create or replace procedure test_proc
(
    psv_in in compfoo,
    psv_out out compfoo
)
as
begin
    psv_out := psv_in;
end;
/
```

## 执行批处理<a name="zh-cn_topic_0283137004_zh-cn_topic_0237120383_zh-cn_topic_0213179129_zh-cn_topic_0189250824_zh-cn_topic_0059777674_sb0c28cebb51d482c8bd996ce7fef3a6c"></a>

用一条预处理语句处理多条相似的数据，数据库只创建一次执行计划，节省了语句的编译和优化时间。可以按如下步骤执行：

1.  调用Connection的prepareStatement方法创建预编译语句对象。

    ```
    Connection conn = DriverManager.getConnection("url","user","password");
    PreparedStatement pstmt = conn.prepareStatement("INSERT INTO customer_t1 VALUES (?)");
    ```

2.  针对每条数据都要调用setShort设置参数，以及调用addBatch确认该条设置完毕。

    ```
    pstmt.setShort(1, (short)2);
    pstmt.addBatch();
    ```

3.  调用PreparedStatement的executeBatch方法执行批处理。

    ```
    int[] rowcount = pstmt.executeBatch();
    ```

4.  调用PreparedStatement的close方法关闭预编译语句对象。

    ```
    pstmt.close();
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >在实际的批处理过程中，通常不终止批处理程序的执行，否则会降低数据库的性能。因此在批处理程序时，应该关闭自动提交功能，每几行提交一次。关闭自动提交功能的语句为：    conn.setAutoCommit\(false\);


