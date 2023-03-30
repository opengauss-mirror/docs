# Example: Migrating Data from a MY Database to openGauss<a name="EN-US_TOPIC_0244721230"></a>

The following example shows how to use CopyManager to migrate data from MY to openGauss.

```
import java.io.StringReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.opengauss.copy.CopyManager;
import org.opengauss.core.BaseConnection;

public class Migration{

    public static void main(String[] args) {
        String url = new String("jdbc:opengauss://10.180.155.74:8000/postgres"); // Database URL
        String user = new String("jack");            // openGauss username
        String pass = new String("Gauss@123");             // openGauss password
        String tablename = new String("migration_table"); // Table information
        String delimiter = new String("|");              // Delimiter
        String encoding = new String("UTF8");            // Character set
        String driver = "org.opengauss.Driver";
        StringBuffer buffer = new StringBuffer();       // Buffer to store formatted data

        try {
            // Obtain the query result set of the source database.
            ResultSet rs = getDataSet();

            // Traverse the result set and obtain records row by row.
            // The values of columns in each record are separated by the specified delimiter and end with a linefeed, forming strings.
            // Add the strings to the buffer.
            while (rs.next()) {
                buffer.append(rs.getString(1) + delimiter
                        + rs.getString(2) + delimiter
                        + rs.getString(3) + delimiter
                        + rs.getString(4)
                        + "\n");
            }
            rs.close();

            try {
                // Connect to the target database.
                Class.forName(driver);
                Connection conn = DriverManager.getConnection(url, user, pass);
                BaseConnection baseConn = (BaseConnection) conn;
                baseConn.setAutoCommit(false);

                // Initialize the table.
                String sql = "Copy " + tablename + " from STDIN DELIMITER " + "'" + delimiter + "'" + " ENCODING " + "'" + encoding + "'";

                // Commit data in the buffer.
                CopyManager cp = new CopyManager(baseConn);
                StringReader reader = new StringReader(buffer.toString());
                cp.copyIn(sql, reader);
                baseConn.commit();
                reader.close();
                baseConn.close();
            } catch (ClassNotFoundException e) {
                e.printStackTrace(System.out);
            } catch (SQLException e) {
                e.printStackTrace(System.out);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //******************************** 
    // Return the query result set from the source database.
    //********************************* 
    private static ResultSet getDataSet() {
        ResultSet rs = null;
        try {
            Class.forName("com.MY.jdbc.Driver").newInstance();
            Connection conn = DriverManager.getConnection("jdbc:MY://10.119.179.227:3306/jack?useSSL=false&allowPublicKeyRetrieval=true", "jack", "Gauss@123");
            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery("select * from migration_table");
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return rs;
    }
}
```

