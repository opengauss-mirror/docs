# 示例：重新执行应用SQL<a name="ZH-CN_TOPIC_0289900303"></a>

当主数据库节点故障且10s未恢复时，openGauss会将对应的备数据库节点升主，使openGauss正常运行。备升主期间正在运行的作业会失败；备升主后启动的作业不会再受影响。如果要做到数据库节点主备切换过程中，上层业务不感知，可参考此示例构建业务层SQL重试机制。

```
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

class ExitHandler extends Thread {
    private Statement cancel_stmt = null;

    public ExitHandler(Statement stmt) {
        super("Exit Handler");
        this.cancel_stmt = stmt;
    }
    public void run() {
        System.out.println("exit handle");
        try {
            this.cancel_stmt.cancel();
        } catch (SQLException e) {
            System.out.println("cancel query failed.");
            e.printStackTrace();
        }
    }
}

public class SQLRetry {
   //创建数据库连接。
   public static Connection GetConnection(String username, String passwd) {
     String driver = "org.postgresql.Driver";
     String sourceURL = "jdbc:postgresql://10.131.72.136:8000/postgres";
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
}
 
   //执行普通SQL语句，创建jdbc_test1表。
   public static void CreateTable(Connection conn) {
     Statement stmt = null;
     try {
       stmt = conn.createStatement();

       
       Runtime.getRuntime().addShutdownHook(new ExitHandler(stmt));

       //执行普通SQL语句。
       int rc2 = stmt
          .executeUpdate("DROP TABLE if exists jdbc_test1;");

       int rc1 = stmt
          .executeUpdate("CREATE TABLE jdbc_test1(col1 INTEGER, col2 VARCHAR(10));");

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
       pst = conn.prepareStatement("INSERT INTO jdbc_test1 VALUES (?,?)");
       for (int i = 0; i < 100; i++) {
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
   private static boolean QueryRedo(Connection conn){
     PreparedStatement pstmt = null;
     boolean retValue = false;
     try {
       pstmt = conn
           .prepareStatement("SELECT col1 FROM jdbc_test1 WHERE col2 = ?");
 
           pstmt.setString(1, "data 10");
           ResultSet rs = pstmt.executeQuery();

           while (rs.next()) {
               System.out.println("col1 = " + rs.getString("col1"));
           }
           rs.close();
 
       pstmt.close();
        retValue = true;
      } catch (SQLException e) {
       System.out.println("catch...... retValue " + retValue);
       if (pstmt != null) {
         try {
          pstmt.close();
        } catch (SQLException e1) {
          e1.printStackTrace();
         }
       }
       e.printStackTrace();
     }
 
      System.out.println("finesh......"); 
     return retValue;
   }

   //查询语句，执行失败重试，重试次数可配置。
   public static void ExecPreparedSQL(Connection conn) throws InterruptedException {
         int maxRetryTime = 50;
         int time = 0;
         String result = null;
         do {
             time++;
             try {
  System.out.println("time:" + time);
  boolean ret = QueryRedo(conn);
  if(ret == false){
   System.out.println("retry, time:" + time);
   Thread.sleep(10000); 
   QueryRedo(conn);
  }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         } while (null == result && time < maxRetryTime); 
 
   }

   /**
    * 主程序，逐步调用各静态方法。
    * @param args
    * @throws InterruptedException 
    */
   public static void main(String[] args) throws InterruptedException {
     //创建数据库连接。
     Connection conn = GetConnection("testuser", "test@123");

     //创建表。
     CreateTable(conn);

     //批插数据。
     BatchInsertData(conn);

     //执行预编译语句，更新数据。
     ExecPreparedSQL(conn);

     //关闭数据库连接。
     try {
       conn.close();
     } catch (SQLException e) {
       e.printStackTrace();
     }

   }

 }
```

