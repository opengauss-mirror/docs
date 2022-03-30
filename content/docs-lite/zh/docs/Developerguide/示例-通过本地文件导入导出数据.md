# 示例：通过本地文件导入导出数据<a name="ZH-CN_TOPIC_0289900308"></a>

在使用JAVA语言基于openGauss进行二次开发时，可以使用CopyManager接口，通过流方式，将数据库中的数据导出到本地文件或者将本地文件导入数据库中，文件格式支持CSV、TEXT等格式。

样例程序如下，执行时需要加载openGauss jdbc驱动。

```
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.io.IOException;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.SQLException; 
import org.postgresql.copy.CopyManager; 
import org.postgresql.core.BaseConnection;
 
public class Copy{ 

     public static void main(String[] args) 
     { 
      String urls = new String("jdbc:postgresql://10.180.155.74:8000/postgres"); //数据库URL 
      String username = new String("jack");            //用户名 
      String password = new String("xxxxxxxxx");             //密码 
      String tablename = new String("migration_table"); //定义表信息 
      String tablename1 = new String("migration_table_1"); //定义表信息 
      String driver = "org.postgresql.Driver"; 
      Connection conn = null; 
      
      try { 
            Class.forName(driver); 
            conn = DriverManager.getConnection(urls, username, password);         
          } catch (ClassNotFoundException e) { 
               e.printStackTrace(System.out); 
          } catch (SQLException e) { 
               e.printStackTrace(System.out); 
          } 
      
      // 将SELECT * FROM migration_table查询结果导出到本地文件d:/data.txt  
      try {
     copyToFile(conn, "d:/data.txt", "(SELECT * FROM migration_table)");
   } catch (SQLException e) {
  k
  e.printStackTrace();
   } catch (IOException e) {
 
  e.printStackTrace();
   }    
      //将d:/data.txt中的数据导入到migration_table_1中。
      try {
      copyFromFile(conn, "d:/data.txt", tablename1);
   } catch (SQLException e) {
         e.printStackTrace();
 } catch (IOException e) {
  
  e.printStackTrace();
 }  

      // 将migration_table_1中的数据导出到本地文件d:/data1.txt  
      try {
      copyToFile(conn, "d:/data1.txt", tablename1);
   } catch (SQLException e) {
  
  e.printStackTrace();
   } catch (IOException e) {
  

  e.printStackTrace();
 }        
     } 
  // 使用copyIn把数据从文件中导入数据库，
  public static void copyFromFile(Connection connection, String filePath, String tableName)   
         throws SQLException, IOException {  
       
     FileInputStream fileInputStream = null;  
   
     try {  
         CopyManager copyManager = new CopyManager((BaseConnection)connection);  
         fileInputStream = new FileInputStream(filePath);  
         copyManager.copyIn("COPY " + tableName + " FROM STDIN", fileInputStream);  
     } finally {  
         if (fileInputStream != null) {  
             try {  
                 fileInputStream.close();  
             } catch (IOException e) {  
                 e.printStackTrace();  
             }  
         }  
     }  
 }  
  
  // 使用copyOut把数据从数据库中导出到文件中
  public static void copyToFile(Connection connection, String filePath, String tableOrQuery)   
          throws SQLException, IOException {  
        
      FileOutputStream fileOutputStream = null;  
   
      try {  
          CopyManager copyManager = new CopyManager((BaseConnection)connection);  
          fileOutputStream = new FileOutputStream(filePath);  
          copyManager.copyOut("COPY " + tableOrQuery + " TO STDOUT", fileOutputStream);  
      } finally {  
          if (fileOutputStream != null) {  
              try {  
                  fileOutputStream.close();  
              } catch (IOException e) {  
                  e.printStackTrace();  
              }  
          }  
      }  
  }  
}
```

