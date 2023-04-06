# Example: Importing and Exporting Data Through Local Files<a name="EN-US_TOPIC_0289900308"></a>

When Java is used for secondary development based on openGauss, you can use the CopyManager interface to export data from the database to a local file or import a local file to the database by streaming. The file can be in CSV or TEXT format.

The sample program is as follows. Load the openGauss JDBC driver before running it.

```
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.io.IOException;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.SQLException; 
import org.opengauss.copy.CopyManager; 
import org.opengauss.core.BaseConnection;
 
public class Copy{ 

     public static void main(String[] args) 
     { 
      String urls = new String("jdbc:opengauss://10.180.155.74:8000/postgres"); // Database URL
      String username = new String("jack");            // Username
      String password = new String("xxxxxxxxx");             // Password
      String tablename = new String("migration_table"); // Table information
      String tablename1 = new String("migration_table_1"); // Table information
      String driver = "org.opengauss.Driver"; 
      Connection conn = null; 
      
      try { 
            Class.forName(driver); 
            conn = DriverManager.getConnection(urls, username, password);         
          } catch (ClassNotFoundException e) { 
               e.printStackTrace(System.out); 
          } catch (SQLException e) { 
               e.printStackTrace(System.out); 
          } 
      
      // Export the query result of SELECT * FROM migration_table to the local file d:/data.txt.
      try {
     copyToFile(conn, "d:/data.txt", "(SELECT * FROM migration_table)");
   } catch (SQLException e) {
  k
  e.printStackTrace();
   } catch (IOException e) {
 
  e.printStackTrace();
   }    
      // Import data from the d:/data.txt file to the migration_table_1 table.
      try {
      copyFromFile(conn, "d:/data.txt", tablename1);
   } catch (SQLException e) {
         e.printStackTrace();
 } catch (IOException e) {
  
  e.printStackTrace();
 }  

      // Export the data from the migration_table_1 table to the d:/data1.txt file.
      try {
      copyToFile(conn, "d:/data1.txt", tablename1);
   } catch (SQLException e) {
  
  e.printStackTrace();
   } catch (IOException e) {
  

  e.printStackTrace();
 }        
     } 
  // Use copyIn to import data from a file to the database.
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
  
  // Use copyOut to export data from the database to a file.
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

