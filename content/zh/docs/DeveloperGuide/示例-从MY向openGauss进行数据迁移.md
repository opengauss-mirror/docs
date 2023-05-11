# 示例：从MY向openGauss进行数据迁移

下面示例演示如何通过CopyManager从MY向openGauss进行数据迁移。

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
        String url = new String("jdbc:opengauss://10.180.155.74:8000/postgres"); //数据库URL 
        String user = new String("jack");            //openGauss用户名 
        String pass = new String("Gauss@123");             //openGauss密码 
        String tablename = new String("migration_table"); //定义表信息 
        String delimiter = new String("|");              //定义分隔符 
        String encoding = new String("UTF8");            //定义字符集 
        String driver = "org.opengauss.Driver";
        StringBuffer buffer = new StringBuffer();       //定义存放格式化数据的缓存 

        try {
            //获取源数据库查询结果集 
            ResultSet rs = getDataSet();

            //遍历结果集，逐行获取记录 
            //将每条记录中各字段值，按指定分隔符分割，由换行符结束，拼成一个字符串 
            //把拼成的字符串，添加到缓存buffer 
            while (rs.next()) {
                buffer.append(rs.getString(1) + delimiter
                        + rs.getString(2) + delimiter
                        + rs.getString(3) + delimiter
                        + rs.getString(4)
                        + "\n");
            }
            rs.close();

            try {
                //建立目标数据库连接 
                Class.forName(driver);
                Connection conn = DriverManager.getConnection(url, user, pass);
                BaseConnection baseConn = (BaseConnection) conn;
                baseConn.setAutoCommit(false);

                //初始化表信息   
                String sql = "Copy " + tablename + " from STDIN DELIMITER " + "'" + delimiter + "'" + " ENCODING " + "'" + encoding + "'";

                //提交缓存buffer中的数据                   
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
    // 从源数据库返回查询结果集     
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

