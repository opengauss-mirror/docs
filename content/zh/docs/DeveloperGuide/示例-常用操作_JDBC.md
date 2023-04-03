# 示例：常用操作<a name="ZH-CN_TOPIC_0289899917"></a>

## 示例1<a name="zh-cn_topic_0283136826_zh-cn_topic_0237120386_zh-cn_topic_0213179152_zh-cn_topic_0189251739_section8820452474"></a>

此示例将演示如何基于openGauss提供的JDBC接口开发应用程序。

```
//DBtest.java
//演示基于JDBC开发的主要步骤，会涉及创建数据库、创建表、插入数据等。

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.CallableStatement;
import java.sql.Types;

public class DBTest {

  //创建数据库连接。
  public static Connection GetConnection(String username, String passwd) {
    String driver = "org.opengauss.Driver";
    String sourceURL = "jdbc:opengauss://localhost:8000/postgres";
    Connection conn = null;
    try {
      //加载数据库驱动。
      Class.forName(driver).newInstance();
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }

    try {
      //创建数据库连接。
      conn = DriverManager.getConnection(sourceURL, username, passwd);
      System.out.println("Connection succeed!");
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }

    return conn;
  };

  //执行普通SQL语句，创建customer_t1表。
  public static void CreateTable(Connection conn) {
    Statement stmt = null;
    try {
      stmt = conn.createStatement();

      //执行普通SQL语句。
      int rc = stmt
          .executeUpdate("CREATE TABLE customer_t1(c_customer_sk INTEGER, c_customer_name VARCHAR(32));");

      stmt.close();
    } catch (SQLException e) {
      if (stmt != null) {
        try {
          stmt.close();
        } catch (SQLException e1) {
          e1.printStackTrace();
        }
      }
      e.printStackTrace();
    }
  }

  //执行预处理语句，批量插入数据。
  public static void BatchInsertData(Connection conn) {
    PreparedStatement pst = null;

    try {
      //生成预处理语句。
      pst = conn.prepareStatement("INSERT INTO customer_t1 VALUES (?,?)");
      for (int i = 0; i < 3; i++) {
        //添加参数。
        pst.setInt(1, i);
        pst.setString(2, "data " + i);
        pst.addBatch();
      }
      //执行批处理。
      pst.executeBatch();
      pst.close();
    } catch (SQLException e) {
      if (pst != null) {
        try {
          pst.close();
        } catch (SQLException e1) {
        e1.printStackTrace();
        }
      }
      e.printStackTrace();
    }
  }

  //执行预编译语句，更新数据。
  public static void ExecPreparedSQL(Connection conn) {
    PreparedStatement pstmt = null;
    try {
      pstmt = conn
          .prepareStatement("UPDATE customer_t1 SET c_customer_name = ? WHERE c_customer_sk = 1");
      pstmt.setString(1, "new Data");
      int rowcount = pstmt.executeUpdate();
      pstmt.close();
    } catch (SQLException e) {
      if (pstmt != null) {
        try {
          pstmt.close();
        } catch (SQLException e1) {
          e1.printStackTrace();
        }
      }
      e.printStackTrace();
    }
  }


//执行存储过程。
  public static void ExecCallableSQL(Connection conn) {
    CallableStatement cstmt = null;
    try {
      // 存储过程TESTPROC需提前创建。
      cstmt=conn.prepareCall("{? = CALL TESTPROC(?,?,?)}");
      cstmt.setInt(2, 50); 
      cstmt.setInt(1, 20);
      cstmt.setInt(3, 90);
      cstmt.registerOutParameter(4, Types.INTEGER);  //注册out类型的参数，类型为整型。
      cstmt.execute();
      int out = cstmt.getInt(4);  //获取out参数
      System.out.println("The CallableStatment TESTPROC returns:"+out);
      cstmt.close();
    } catch (SQLException e) {
      if (cstmt != null) {
        try {
          cstmt.close();
        } catch (SQLException e1) {
          e1.printStackTrace();
        }
      }
      e.printStackTrace();
    }
  }
  

  /**
   * 主程序，逐步调用各静态方法。
   * @param args
  */
  public static void main(String[] args) {
    //创建数据库连接。
    Connection conn = GetConnection("tester", "Password1234");

    //创建表。
    CreateTable(conn);

    //批插数据。
    BatchInsertData(conn);

    //执行预编译语句，更新数据。
    ExecPreparedSQL(conn);

    //执行存储过程。
    ExecCallableSQL(conn);

    //关闭数据库连接。
    try {
      conn.close();
    } catch (SQLException e) {
      e.printStackTrace();
    }

  }

}
```

## 示例2客户端内存占用过多解决<a name="zh-cn_topic_0283136826_zh-cn_topic_0237120386_zh-cn_topic_0213179152_zh-cn_topic_0189251739_section112115111092"></a>

此示例主要使用setFetchSize来调整客户端内存使用，它的原理是通过数据库游标来分批获取服务器端数据，但它会加大网络交互，可能会损失部分性能。

由于游标事务内有效，故需要先关闭自动提交，最后需要执行手动提交。

```
// 关闭掉自动提交
conn.setAutoCommit(false);
Statement st = conn.createStatement();

// 打开游标，每次获取50行数据
st.setFetchSize(50);
ResultSet rs = st.executeQuery("SELECT * FROM mytable");
while (rs.next())
{
    System.out.print("a row was returned.");
}
conn.commit();
rs.close();

// 关闭服务器游标。
st.setFetchSize(0);
rs = st.executeQuery("SELECT * FROM mytable");
while (rs.next())
{
    System.out.print("many rows were returned.");
}
conn.commit();
rs.close();

// Close the statement.
st.close();
conn.close();
```

执行完毕后可使用如下命令恢复自动提交：

```
conn.setAutoCommit(true);
```

## 示例3 常用数据类型使用示例<a name="section18821118154011"></a>

```
//bit类型使用示例，注意此处bit类型取值范围[0,1]
Statement st = conn.createStatement();
String sqlstr = "create or replace function fun_1()\n" +
        "returns bit AS $$\n" +
        "select col_bit from t_bit limit 1;\n" +
        "$$\n" +
        "LANGUAGE SQL;";
st.execute(sqlstr);
CallableStatement c = conn.prepareCall("{ ? = call fun_1() }");
//注册输出类型，位串类型
c.registerOutParameter(1, Types.BIT);
c.execute();
//使用Boolean类型获取结果
System.out.println(c.getBoolean(1));

// money类型使用示例
// 表结构中包含money类型列的使用示例。
st.execute("create table t_money(col1 money)");
PreparedStatement pstm = conn.prepareStatement("insert into t_money values(?)");
// 使用PGobject赋值，取值范围[-92233720368547758.08，92233720368547758.07]
PGobject minMoney = new PGobject();
minMoney.setType("money");
minMoney.setValue("-92233720368547758.08");
pstm.setObject(1, minMoney);
pstm.execute();
// 使用PGMoney赋值,取值范围[-9999999.99,9999999.99]
pstm.setObject(1,new PGmoney(9999999.99));
pstm.execute();

// 函数返回值为money的使用示例。
st.execute("create or replace function func_money() " +
                "return money " +
                "as declare " +
                "var1 money; " +
                "begin " +
                " select col1 into var1 from t_money limit 1; " +
                " return var1; " +
                "end;");
CallableStatement cs = conn.prepareCall("{? = call func_money()}");
cs.registerOutParameter(1,Types.DOUBLE);
cs.execute();
cs.getObject(1);
```

## 示例4 获取驱动版本示例<a name="section751022311433"></a>

```
Driver.getGSVersion();
```

